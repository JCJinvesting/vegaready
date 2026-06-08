#!/usr/bin/env node
'use strict';

/**
 * publish-from-iwt.cjs — Durable, quality-gated refresh of the VegaReady
 * dashboard data from the IranWarTracker source.
 *
 * Runs (typically as Step 7 of IWT's 3x-daily auto-ingest task) AFTER IWT has
 * ingested + audited its data. It:
 *
 *   1. Regenerates the data bundle from the fresh IWT folder into a STAGING file
 *      (the live committed bundle is never touched until QC passes).
 *   2. Runs a PUBLISH GATE — validates the staged bundle against the last good
 *      one (all scopes present, no empty critical scopes, no sudden drop in
 *      entry count or byte size, JSON valid, data not impossibly stale).
 *   3. On PASS: snapshots the bundle into data-history/ (rollback log), replaces
 *      the live bundle, writes a committed status file + append-only log, then
 *      git commit + push (only if the data actually changed) -> Cloudflare
 *      rebuilds. The data now lives in the repo, so it stays online even if this
 *      machine later goes offline.
 *   4. On FAIL: keeps the last good bundle live, writes a "blocked" status +
 *      failure reasons, and exits non-zero. A bad ingest can never blank or
 *      poison the public dashboard.
 *
 * Offline resilience: each successful run commits locally and pushes. If the
 * push fails (no network), the commit waits; the next run flushes pending
 * commits first, so the site catches up automatically when the machine is back.
 *
 * Usage:
 *   node scripts/publish-from-iwt.cjs               # full run (QC + commit + push)
 *   node scripts/publish-from-iwt.cjs --dry-run     # regenerate + QC + report only; no writes, no push
 *   node scripts/publish-from-iwt.cjs --no-push     # update + snapshot + status locally, but don't push
 *   node scripts/publish-from-iwt.cjs --iwt-exit 2  # upstream ingest failed -> skip entirely
 *   node scripts/publish-from-iwt.cjs --iwt-path D:\path\to\IranWarTracker
 *
 * Exit codes: 0 = published or nothing-to-do; 1 = QC gate blocked; 2 = build/internal error.
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const LIVE = path.join(ROOT, 'src', 'data', 'iwt-bundle.json');
const STAGING = path.join(ROOT, 'src', 'data', 'iwt-bundle.staging.json');
const HISTORY_DIR = path.join(ROOT, 'data-history');
const PUBLISH_LOG = path.join(HISTORY_DIR, 'PUBLISH-LOG.md');
const METRICS = path.join(HISTORY_DIR, 'last-good-metrics.json');
const STATUS = path.join(ROOT, 'public', 'data-status.json');
const LOCAL_STATUS = path.join(ROOT, '_status', 'LAST-RUN.txt');

const HISTORY_KEEP = 30;       // dated bundle snapshots to retain
const MIN_SCOPES = 50;         // a healthy bundle has ~54 scope keys (46 arrays + 8 object-scopes)
const MIN_ENTRIES = 1000;      // absolute floor on total array rows
const DROP_ENTRIES = 0.85;     // fail if entries < 85% of last good (corruption/truncation)
const DROP_BYTES = 0.70;       // fail if byte size < 70% of last good
const STALE_DAYS = 16;         // warn (not fail) if newest date older than this

// Critical scopes that must always be present AND non-empty.
const REQUIRED = [
  'WAR_ROOM_BRIEFS', 'COUNTRY_SUMMARY', 'UAE_DATA', 'QATAR_DATA', 'SAUDI_DATA',
  'US_CASUALTIES', 'CIVILIAN_INCIDENTS', 'ISRAEL_OPS_TIMELINE', 'US_POLICY_EVENTS',
  'IRAN_MILITARY_ORDER', 'OIL_PRICE_TIMELINE', 'SOURCES', 'GLOSSARY_ENTRIES',
];

const args = process.argv.slice(2);
const has = (f) => args.includes(f);
const val = (f) => (has(f) ? args[args.indexOf(f) + 1] : null);
const DRY = has('--dry-run');
const NO_PUSH = has('--no-push');
const iwtExit = val('--iwt-exit');
const iwtPath = val('--iwt-path');

function log(msg) { console.log(`[publish] ${msg}`); }
function nowISO() { return new Date().toISOString(); }

function git(argv, opts = {}) {
  const r = spawnSync('git', argv, { cwd: ROOT, encoding: 'utf8', ...opts });
  return { ok: r.status === 0, status: r.status, out: (r.stdout || '') + (r.stderr || '') };
}

function scopeSize(v) {
  // array scopes count rows; object scopes (summaries) count keys
  if (Array.isArray(v)) return v.length;
  if (v && typeof v === 'object') return Object.keys(v).length;
  return 0;
}

function metricsOf(obj, bytes) {
  const keys = Object.keys(obj);
  const arrays = keys.filter((k) => Array.isArray(obj[k]));
  let totalEntries = 0;
  const perScope = {};
  for (const k of keys) {
    perScope[k] = scopeSize(obj[k]);
    if (Array.isArray(obj[k])) totalEntries += obj[k].length;
  }
  // newest date string anywhere in the data
  let newest = null;
  const m = JSON.stringify(obj).match(/\b20\d{2}-\d{2}-\d{2}\b/g);
  if (m && m.length) newest = m.sort().slice(-1)[0];
  return { keyCount: keys.length, arrayCount: arrays.length, totalEntries, bytes, perScope, newest, generatedAt: nowISO() };
}

function daysBetween(dateStr, ref) {
  if (!dateStr) return Infinity;
  const d = new Date(dateStr + 'T00:00:00Z');
  if (isNaN(d)) return Infinity;
  return Math.round((ref - d) / 86400000);
}

function ensureDirs() {
  for (const d of [HISTORY_DIR, path.dirname(STATUS), path.dirname(LOCAL_STATUS)]) {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  }
}

function writeStatus(state, opts) {
  // state: 'ok' | 'blocked' | 'skipped' | 'error'
  const payload = Object.assign({
    state,
    checkedAt: nowISO(),
  }, opts);
  try { fs.writeFileSync(STATUS, JSON.stringify(payload, null, 2)); } catch (e) {}
  try {
    const line = `${payload.checkedAt}  ${state.toUpperCase()}  ${opts && opts.summary ? opts.summary : ''}`;
    fs.writeFileSync(LOCAL_STATUS, line + '\n');
  } catch (e) {}
}

function appendLog(state, lines) {
  if (!fs.existsSync(PUBLISH_LOG)) {
    fs.writeFileSync(PUBLISH_LOG, '# VegaReady data publish log\n\nAppend-only. Each entry = one publish attempt from the IWT source.\n\n');
  }
  const stamp = nowISO();
  const block = `\n## ${stamp} — ${state}\n${lines.map((l) => `- ${l}`).join('\n')}\n`;
  fs.appendFileSync(PUBLISH_LOG, block);
}

function pruneHistory() {
  try {
    const snaps = fs.readdirSync(HISTORY_DIR)
      .filter((f) => /^iwt-bundle\..*\.json$/.test(f))
      .sort();
    while (snaps.length > HISTORY_KEEP) {
      const old = snaps.shift();
      fs.unlinkSync(path.join(HISTORY_DIR, old));
    }
  } catch (e) {}
}

function cleanupStaging() { try { if (fs.existsSync(STAGING)) fs.unlinkSync(STAGING); } catch (e) {} }

function main() {
  ensureDirs();

  // Upstream ingest failed -> do nothing, leave last good data live.
  if (iwtExit === '2') {
    log('IWT ingest failed (exit 2). Skipping publish; last good data stays live.');
    writeStatus('skipped', { summary: 'Upstream IWT ingest failed; no refresh attempted.' });
    appendLog('SKIPPED', ['Upstream IWT ingest exit code 2 — refresh not attempted.']);
    process.exit(0);
  }

  // Flush any commits that didn't push last time (machine was offline).
  if (!DRY && !NO_PUSH) {
    const pend = git(['push', 'origin', 'HEAD']);
    if (pend.ok) log('Flushed pending commits (if any) to origin.');
  }

  // Baseline = last good bundle metrics (saved), else derived from live bundle.
  let baseline = null;
  try { if (fs.existsSync(METRICS)) baseline = JSON.parse(fs.readFileSync(METRICS, 'utf8')); } catch (e) {}
  if (!baseline && fs.existsSync(LIVE)) {
    try { baseline = metricsOf(JSON.parse(fs.readFileSync(LIVE, 'utf8')), fs.statSync(LIVE).size); } catch (e) {}
  }

  // 1. Regenerate bundle from IWT into STAGING (live bundle untouched).
  const bdArgs = [path.join('scripts', 'build-data.cjs'), '--out', STAGING];
  if (iwtPath) bdArgs.push('--iwt-path', iwtPath);
  log('Regenerating bundle from IWT source -> staging...');
  const bd = spawnSync('node', bdArgs, { cwd: ROOT, encoding: 'utf8' });
  process.stdout.write(bd.stdout || '');
  if (bd.status !== 0 || !fs.existsSync(STAGING)) {
    log('build-data failed; keeping last good data live.');
    writeStatus('error', { summary: 'build-data failed to regenerate the bundle.', baseline });
    appendLog('ERROR', ['build-data.cjs failed or produced no staging bundle.', (bd.stderr || '').slice(0, 300)]);
    cleanupStaging();
    process.exit(2);
  }

  // 2. Parse + measure staged bundle.
  let staged, stagedBytes;
  try {
    const raw = fs.readFileSync(STAGING, 'utf8');
    stagedBytes = Buffer.byteLength(raw);
    staged = JSON.parse(raw);
  } catch (e) {
    log('Staged bundle is not valid JSON; keeping last good live.');
    writeStatus('blocked', { summary: 'Regenerated bundle was not valid JSON.', baseline });
    appendLog('BLOCKED', ['Staged bundle failed JSON.parse: ' + e.message.slice(0, 200)]);
    cleanupStaging();
    process.exit(1);
  }
  const m = metricsOf(staged, stagedBytes);

  // 3. PUBLISH GATE
  const fails = [];
  const warns = [];

  if (m.keyCount < MIN_SCOPES) fails.push(`Only ${m.keyCount} scope keys (floor ${MIN_SCOPES}).`);
  if (m.totalEntries < MIN_ENTRIES) fails.push(`Only ${m.totalEntries} total entries (floor ${MIN_ENTRIES}).`);

  for (const req of REQUIRED) {
    if (!(req in staged)) fails.push(`Required scope ${req} missing.`);
    else if (scopeSize(staged[req]) === 0) fails.push(`Required scope ${req} is empty.`);
  }

  if (baseline) {
    if (baseline.totalEntries && m.totalEntries < baseline.totalEntries * DROP_ENTRIES)
      fails.push(`Entries dropped to ${m.totalEntries} from ${baseline.totalEntries} (>${Math.round((1 - DROP_ENTRIES) * 100)}% loss).`);
    if (baseline.bytes && m.bytes < baseline.bytes * DROP_BYTES)
      fails.push(`Bundle size dropped to ${(m.bytes / 1024).toFixed(0)}KB from ${(baseline.bytes / 1024).toFixed(0)}KB (possible truncation).`);
    // per-scope regression: a scope that had data must not become empty
    if (baseline.perScope) {
      for (const [k, prev] of Object.entries(baseline.perScope)) {
        if (prev > 0 && scopeSize(staged[k]) === 0)
          fails.push(`Scope ${k} regressed from ${prev} rows to empty/missing.`);
      }
    }
  }

  const staleDays = daysBetween(m.newest, new Date());
  if (staleDays > STALE_DAYS) warns.push(`Newest data is ${m.newest || 'unknown'} (~${staleDays} days old).`);

  const summaryMetrics = `${m.arrayCount} arrays · ${m.totalEntries} entries · ${(m.bytes / 1024).toFixed(0)}KB · newest ${m.newest || '?'}`;

  // 4. Decide
  if (fails.length) {
    log('PUBLISH GATE BLOCKED:');
    fails.forEach((f) => log('  FAIL ' + f));
    warns.forEach((w) => log('  warn ' + w));
    writeStatus('blocked', {
      summary: `Refresh blocked — ${fails.length} check(s) failed. Showing last good data (${baseline ? baseline.newest : 'unknown'}).`,
      failures: fails, warnings: warns, staged: m, baseline,
    });
    appendLog('BLOCKED', [`Staged: ${summaryMetrics}`, ...fails.map((f) => 'FAIL ' + f), ...warns.map((w) => 'warn ' + w)]);
    cleanupStaging();
    process.exit(1);
  }

  // PASS
  log('PUBLISH GATE PASSED: ' + summaryMetrics);
  warns.forEach((w) => log('  warn ' + w));

  if (DRY) {
    log('--dry-run: not modifying the live bundle, history, or git.');
    writeStatus('ok', { summary: `DRY RUN — would publish ${summaryMetrics}`, dryRun: true, staged: m, warnings: warns });
    cleanupStaging();
    process.exit(0);
  }

  // 4a. Snapshot to history (what we are about to publish), then replace live.
  const tag = (m.newest || nowISO().slice(0, 10)) + '_' + nowISO().slice(11, 19).replace(/:/g, '');
  const snapPath = path.join(HISTORY_DIR, `iwt-bundle.${tag}.json`);
  try { fs.copyFileSync(STAGING, snapPath); } catch (e) {}
  fs.renameSync(STAGING, LIVE); // staging -> live (overwrite)
  pruneHistory();

  // 4c. Save baseline metrics + status + log
  try { fs.writeFileSync(METRICS, JSON.stringify(m, null, 2)); } catch (e) {}
  writeStatus('ok', {
    summary: `Data current as of ${m.newest || 'unknown'}.`,
    dataDate: m.newest, publishedAt: nowISO(), metrics: m, warnings: warns,
  });
  appendLog('PUBLISHED', [`${summaryMetrics}`, `Snapshot: ${path.basename(snapPath)}`, ...warns.map((w) => 'warn ' + w)]);

  if (NO_PUSH) {
    log('--no-push: live bundle updated + snapshotted locally; skipping git.');
    process.exit(0);
  }

  // 4f. Commit + push only if something actually changed.
  const paths = [
    path.relative(ROOT, LIVE), path.relative(ROOT, STATUS),
    path.relative(ROOT, METRICS), path.relative(ROOT, PUBLISH_LOG),
    path.relative(ROOT, snapPath),
  ];
  git(['add', '--', ...paths]);
  const staged2 = git(['diff', '--cached', '--quiet']);
  if (staged2.ok) {
    log('No data changes to commit (bundle identical). Done.');
    process.exit(0);
  }
  const msg = `data: refresh ${m.newest || nowISO().slice(0, 10)} (QC pass: ${m.arrayCount} arrays, ${m.totalEntries} entries)`;
  const c = git(['commit', '-m', msg]);
  if (!c.ok) { log('git commit failed:\n' + c.out); process.exit(2); }
  const p = git(['push', 'origin', 'HEAD']);
  if (!p.ok) {
    log('git push failed (offline?). Commit is saved locally and will push on the next online run.');
    writeStatus('ok', {
      summary: `Data refreshed locally (${m.newest}); push pending — will sync when online.`,
      dataDate: m.newest, publishedAt: nowISO(), pushPending: true, metrics: m, warnings: warns,
    });
    appendLog('PUSH-PENDING', ['Commit created but push failed (offline). Will flush next run.']);
    process.exit(0);
  }
  log('Pushed to origin -> Cloudflare will rebuild. Done.');
  process.exit(0);
}

try { main(); }
catch (e) {
  console.error('[publish] FATAL ' + (e && e.stack ? e.stack : e));
  try { writeStatus('error', { summary: 'Publish script crashed: ' + (e && e.message) }); } catch (_) {}
  cleanupStaging();
  process.exit(2);
}
