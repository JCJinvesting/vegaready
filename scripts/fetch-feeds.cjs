#!/usr/bin/env node
/* =============================================================================
   VegaReady data-feeds fetcher — W1 of the R-02 plan (docs/VegaReady-R02-Credit-Feeds-Plan.md v4)
   - FRED v1 incremental observations + metadata-validated accuracy gates
   - Layer 1: raw audit cache in _data-cache/ (gitignored)
   - Layer 2: display JSON at src/data/feeds/credit.json (committed; CI builds use it)
   - NEVER breaks the build: on any failure, last good display JSON survives,
     states degrade to 'stale' / 'feed_pending', alerts surface in feedStatus.
   - Posture O-14: attribution-only. license/attribution strings ride every series.
   Usage:  node scripts/fetch-feeds.cjs            (fetch + write)
           node scripts/fetch-feeds.cjs --selftest  (poisoned-fixture gate tests)
   ============================================================================= */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const CACHE = path.join(ROOT, '_data-cache');
const HIST = path.join(CACHE, 'history');
const RAW = path.join(CACHE, 'raw');
const OUT = path.join(ROOT, 'src', 'data', 'feeds', 'credit.json');
const FRED = 'https://api.stlouisfed.org/fred';

/* ---- series registry -------------------------------------------------------
   bps:true → OAS family published in PERCENT (0.75 = 75bp): we store both.
   display:false → fetched + cached + gated, but tiles wait on owner decisions. */
const SERIES = [
  { id: 'BAMLC0A0CM',   key: 'igOas',   label: 'IG OAS',            bps: true,  display: true,  attr: 'ICE BofA US Corporate Index OAS · via FRED' },
  { id: 'BAMLH0A0HYM2', key: 'hyOas',   label: 'HY OAS',            bps: true,  display: true,  attr: 'ICE BofA US High Yield Index OAS · via FRED' },
  { id: 'BAMLC0A4CBBB', key: 'bbbOas',  label: 'BBB OAS',           bps: true,  display: true,  attr: 'ICE BofA BBB US Corporate Index OAS · via FRED' },
  { id: 'BAMLH0A1HYBB', key: 'bbOas',   label: 'BB OAS',            bps: true,  display: true,  attr: 'ICE BofA BB US High Yield Index OAS · via FRED' },
  { id: 'BAMLH0A3HYC',  key: 'cccOas',  label: 'CCC & lower OAS',   bps: true,  display: true,  attr: 'ICE BofA CCC & Lower US High Yield Index OAS · via FRED' },
  { id: 'BAMLEMCBPIOAS',key: 'emCorpOas',label: 'EM corporate OAS', bps: true,  display: false, attr: 'ICE BofA EM Corporate Plus Index OAS · via FRED' }, // O-12 pending
  { id: 'DGS10',        key: 'ust10y',  label: 'US 10y yield',      bps: false, display: false, attr: 'Board of Governors H.15 · via FRED' },             // O-13 pending
  { id: 'T10Y2Y',       key: 'curve2s10s', label: '2s10s curve',    bps: false, display: false, attr: 'FRB St. Louis from H.15 · via FRED' },             // O-13 pending
  { id: 'DFII10',       key: 'real10y', label: 'US 10y real yield', bps: false, display: false, attr: 'Board of Governors H.15 · via FRED' },             // O-13 pending
];
const FRESHNESS_BD = 2; // expected lag: T-1 + 1 business day grace

/* ---- key resolution (env → Windows registry fallback; never from repo) ---- */
function apiKey() {
  if (process.env.FRED_API_KEY) return process.env.FRED_API_KEY.trim();
  if (process.platform === 'win32') {
    try {
      const o = execSync('reg query HKCU\\Environment /v FRED_API_KEY', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
      const m = o.match(/FRED_API_KEY\s+REG_SZ\s+([0-9a-f]{32})/i);
      if (m) return m[1];
    } catch (e) { /* fall through */ }
  }
  return null;
}

/* ---- pure gate functions (selftest targets) -------------------------------- */
function gUnits(meta) { return meta && meta.units === 'Percent'; }
function gFrequency(meta) { return meta && /^Daily/.test(meta.frequency || ''); }
function coerce(v) { return v === '.' || v === '' || v == null ? null : Number(v); }
function isWeekend(d) { const day = new Date(d + 'T00:00:00Z').getUTCDay(); return day === 0 || day === 6; }
function isMonthEnd(d) { const dt = new Date(d + 'T00:00:00Z'); const n = new Date(dt); n.setUTCDate(dt.getUTCDate() + 1); return n.getUTCDate() === 1; }
function businessDaysBetween(a, b) { // a<=b, ISO strings
  let c = 0; const d = new Date(a + 'T00:00:00Z'); const end = new Date(b + 'T00:00:00Z');
  while (d < end) { d.setUTCDate(d.getUTCDate() + 1); const w = d.getUTCDay(); if (w !== 0 && w !== 6) c++; }
  return c;
}
function gFresh(latestDate, todayIso, budget) {
  if (!latestDate) return false;
  if (isWeekend(latestDate) && !isMonthEnd(latestDate)) return false; // weekend prints only legal at month-end
  return businessDaysBetween(latestDate, todayIso) <= budget;
}
function notesHash(notes) { let h = 0; const s = String(notes || ''); for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; } return String(h); }

/* ---- selftest --------------------------------------------------------------- */
function selftest() {
  const t = (name, ok) => { console.log((ok ? 'PASS ' : 'FAIL ') + name); if (!ok) process.exitCode = 1; };
  t('units gate rejects bps-labeled series', !gUnits({ units: 'Basis Points' }));
  t('units gate accepts Percent', gUnits({ units: 'Percent' }));
  t('frequency gate rejects Monthly', !gFrequency({ frequency: 'Monthly' }));
  t('frequency gate accepts Daily, Close', gFrequency({ frequency: 'Daily, Close' }));
  t('dot coerces to null', coerce('.') === null);
  t('string value coerces to number', coerce('2.80') === 2.8);
  t('stale date fails freshness', !gFresh('2026-06-01', '2026-06-12', FRESHNESS_BD));
  t('T-1 passes freshness', gFresh('2026-06-11', '2026-06-12', FRESHNESS_BD));
  t('weekend non-month-end print rejected', !gFresh('2026-06-07', '2026-06-08', FRESHNESS_BD)); // Sunday
  t('weekend month-end print accepted', gFresh('2026-05-31', '2026-06-02', FRESHNESS_BD));      // Sunday May 31 (month-end)
  t('notes hash stable', notesHash('abc') === notesHash('abc') && notesHash('abc') !== notesHash('abd'));
  console.log(process.exitCode ? 'SELFTEST: FAIL' : 'SELFTEST: OK');
}

/* ---- io helpers -------------------------------------------------------------- */
function readJson(p, fallback) { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch (e) { return fallback; } }
function writeJson(p, obj) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, JSON.stringify(obj, null, 1)); }
async function fred(endpoint, params, key, alerts) {
  const qs = new URLSearchParams({ ...params, api_key: key, file_type: 'json' });
  const url = `${FRED}/${endpoint}?${qs}`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url);
      if (res.status === 429) { alerts.push(`429 throttled on ${endpoint}, attempt ${attempt}`); await new Promise(r => setTimeout(r, 2000 * attempt)); continue; }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const body = await res.json();
      // raw audit log (key redacted by construction — url not stored with key)
      writeJson(path.join(RAW, `${params.series_id}-${endpoint.replace(/\//g, '_')}-${Date.now()}.json`),
        { endpoint, series: params.series_id, retrieved_at: new Date().toISOString(), http_status: res.status, body });
      return body;
    } catch (e) { if (attempt === 3) throw e; await new Promise(r => setTimeout(r, 1000 * attempt)); }
  }
}

/* ---- main -------------------------------------------------------------------- */
async function main() {
  const alerts = [];
  const today = new Date().toISOString().slice(0, 10);
  const prev = readJson(OUT, null);
  const key = apiKey();
  if (!key) {
    alerts.push('FRED_API_KEY not found (env or registry) — keeping last good feed JSON');
    return finalize(prev, alerts, today, /*degraded*/ true);
  }
  const out = { generatedAt: new Date().toISOString(), posture: 'O-14 attribution-only', series: {} };

  for (const s of SERIES) {
    try {
      const histPath = path.join(HIST, `${s.id}.json`);
      const hist = readJson(histPath, { id: s.id, notesHash: null, obs: {} });

      // metadata gates
      const metaRes = await fred('series', { series_id: s.id }, key, alerts);
      const meta = metaRes && metaRes.seriess && metaRes.seriess[0];
      if (!meta) throw new Error('no metadata');
      if (s.bps && !gUnits(meta)) { alerts.push(`${s.id}: UNITS gate failed (${meta.units})`); throw new Error('units'); }
      if (!gFrequency(meta)) { alerts.push(`${s.id}: FREQUENCY gate failed (${meta.frequency})`); throw new Error('frequency'); }
      const nh = notesHash(meta.notes);
      if (hist.notesHash && hist.notesHash !== nh) alerts.push(`${s.id}: methodology/notes text changed — human review (tile stays up, alert only)`);
      hist.notesHash = nh;

      // incremental observations (last cached date − 7d, else full served window)
      const dates = Object.keys(hist.obs).sort();
      const start = dates.length ? new Date(new Date(dates[dates.length - 1]).getTime() - 7 * 864e5).toISOString().slice(0, 10) : (meta.observation_start || '2023-01-01');
      const obsRes = await fred('series/observations', { series_id: s.id, observation_start: start, sort_order: 'asc' }, key, alerts);
      let revised = false;
      for (const o of (obsRes.observations || [])) {
        const v = coerce(o.value);
        if (hist.obs[o.date] !== undefined && hist.obs[o.date] !== v && hist.obs[o.date] !== null && v !== null) revised = true;
        hist.obs[o.date] = v;
      }
      if (revised) alerts.push(`${s.id}: in-place revision detected — 'revised' badge`);
      writeJson(histPath, hist);

      // latest non-null + freshness
      const all = Object.entries(hist.obs).filter(([, v]) => v !== null).sort((a, b) => a[0] < b[0] ? -1 : 1);
      if (!all.length) throw new Error('no valid observations');
      const [date, value] = all[all.length - 1];
      const fresh = gFresh(date, today, FRESHNESS_BD);
      if (!fresh) alerts.push(`${s.id}: stale — latest ${date}`);
      const prevClose = all.length > 1 ? all[all.length - 2][1] : null;

      // percentile, z-score, and trailing deltas within our full cached window
      const vals = all.map(([, v]) => v);
      const rank = vals.filter(v => v <= value).length / vals.length;
      const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
      const sd = Math.sqrt(vals.reduce((a, b) => a + (b - mean) ** 2, 0) / vals.length) || 1;
      const back = (n) => (all.length > n ? all[all.length - 1 - n][1] : null);     // n obs ago
      const delta = (n) => { const p = back(n); return p == null ? null : value - p; };
      const asBp = (x) => (x == null ? null : Math.round(x * (s.bps ? 100 : 1) * (s.bps ? 1 : 100)) / (s.bps ? 1 : 100));

      out.series[s.key] = {
        id: s.id, label: s.label, attr: s.attr, display: s.display,
        state: fresh ? 'live' : 'stale', asOf: date,
        value, bp: s.bps ? Math.round(value * 100) : null,
        prevClose, chgBp: s.bps && prevClose != null ? Math.round((value - prevClose) * 100) : null,
        chg1w: s.bps && delta(5) != null ? Math.round(delta(5) * 100) : (delta(5)),     // ~1 trading week
        chg1m: s.bps && delta(21) != null ? Math.round(delta(21) * 100) : (delta(21)),  // ~1 trading month
        revised, percentile: Math.round(rank * 100), z: Math.round((value - mean) / sd * 100) / 100,
        window: { start: all[0][0], end: date, n: all.length, label: `${all[0][0].slice(0, 4)}–${date.slice(0, 4)} window` },
        hist60: all.slice(-60).map(([d, v]) => [d, v]),
        unitsNote: s.bps ? 'FRED publishes percent; 1.00 = 100bp' : meta.units,
      };
      // expose the full sorted series for the derived layer (not serialized to display JSON)
      out.series[s.key]._all = all;
    } catch (e) {
      const prevSeries = prev && prev.series && prev.series[s.key];
      if (prevSeries) { out.series[s.key] = { ...prevSeries, state: 'stale' }; alerts.push(`${s.id}: fetch failed (${e.message}) — carrying last good value as stale`); }
      else { out.series[s.key] = { id: s.id, label: s.label, attr: s.attr, display: s.display, state: 'feed_pending', reason: e.message }; alerts.push(`${s.id}: fetch failed (${e.message}) — feed_pending`); }
    }
  }
  out.derived = derive(out.series, alerts);
  pruneRaw(2, alerts);
  appendDigest(out, alerts);
  return finalize(out, alerts, today, false);
}

/* ---- derived cross-series analytics ----------------------------------------
   The desk's intelligence is in the RELATIONSHIPS, not the raw levels. We compute
   them once here so every tile (and the layman twin) reads one honest source. */
function derive(series, alerts) {
  const S = (k) => series[k] && series[k].state !== 'feed_pending' ? series[k] : null;
  const aligned = (a, b) => { // spread series over shared dates, from cached _all
    const A = S(a), B = S(b); if (!A || !B || !A._all || !B._all) return null;
    const mb = new Map(B._all); const pts = [];
    for (const [d, v] of A._all) { if (mb.has(d) && v != null && mb.get(d) != null) pts.push([d, v - mb.get(d)]); }
    return pts.length ? pts : null;
  };
  const spread = (a, b, key, label, note) => {
    const pts = aligned(a, b); if (!pts) return null;
    const vals = pts.map(([, v]) => v); const cur = vals[vals.length - 1];
    const mean = vals.reduce((x, y) => x + y, 0) / vals.length;
    const sd = Math.sqrt(vals.reduce((x, y) => x + (y - mean) ** 2, 0) / vals.length) || 1;
    const rank = vals.filter(v => v <= cur).length / vals.length;
    const wk = vals.length > 5 ? cur - vals[vals.length - 6] : null;
    return { key, label, note, bp: Math.round(cur * 100), chg1wBp: wk == null ? null : Math.round(wk * 100),
      percentile: Math.round(rank * 100), z: Math.round((cur - mean) / sd * 100) / 100, asOf: pts[pts.length - 1][0] };
  };
  const d = {};
  // compression / decompression — the master regime tell for the credit desk
  const hyIg = spread('hyOas', 'igOas', 'hyMinusIg', 'HY − IG (compression)', 'Narrowing = compression / risk-on; widening = decompression / quality bid');
  const cccBb = spread('cccOas', 'bbOas', 'cccMinusBb', 'CCC − BB (junk dispersion)', 'Widening = stress concentrating in the lowest tier');
  const bbbIg = spread('bbbOas', 'igOas', 'bbbMinusIg', 'BBB − IG (the cliff edge)', 'The fallen-angel frontier within investment grade');
  for (const x of [hyIg, cccBb, bbbIg]) if (x) d[x.key] = x;
  // a one-line regime read from the data itself (honest, rule-based, labeled)
  if (hyIg) {
    const dir = hyIg.chg1wBp == null ? 'flat' : hyIg.chg1wBp < -5 ? 'compressing' : hyIg.chg1wBp > 5 ? 'decompressing' : 'flat';
    const stress = hyIg.percentile >= 80 ? 'wide vs its own history' : hyIg.percentile <= 20 ? 'tight vs its own history' : 'mid-range';
    d.regime = { tag: dir, detail: `HY−IG is ${stress} and ${dir} (${hyIg.chg1wBp == null ? '—' : (hyIg.chg1wBp > 0 ? '+' : '') + hyIg.chg1wBp + 'bp/wk'})`,
      basis: 'Rule-based read of the HY−IG compression spread vs its cached window — not a forecast', asOf: hyIg.asOf };
  } else { alerts.push('derived: HY−IG unavailable (a constituent series is pending/stale)'); }
  return d;
}

/* ---- raw-cache hygiene: keep only the last N audit files per series ---------- */
function pruneRaw(keepPerSeries, alerts) {
  try {
    if (!fs.existsSync(RAW)) return;
    const byKey = {};
    for (const f of fs.readdirSync(RAW)) { const k = f.split('-')[0]; (byKey[k] = byKey[k] || []).push(f); }
    let removed = 0;
    for (const k of Object.keys(byKey)) {
      const files = byKey[k].sort(); // timestamp suffix sorts chronologically
      for (const f of files.slice(0, Math.max(0, files.length - keepPerSeries))) { fs.unlinkSync(path.join(RAW, f)); removed++; }
    }
    if (removed) console.log(`[fetch-feeds] pruned ${removed} stale raw audit file(s)`);
  } catch (e) { alerts.push('raw prune failed: ' + e.message); }
}

/* ---- research reflection: append a dated digest line (proprietary timeseries) */
function appendDigest(out, alerts) {
  try {
    const r = out.derived && out.derived.regime;
    const hy = out.series.hyOas, ig = out.series.igOas;
    const line = { date: (hy && hy.asOf) || new Date().toISOString().slice(0, 10),
      igBp: ig && ig.bp, hyBp: hy && hy.bp,
      hyIgBp: out.derived && out.derived.hyMinusIg && out.derived.hyMinusIg.bp,
      regime: r && r.tag, capturedAt: new Date().toISOString() };
    const logPath = path.join(CACHE, 'digest-credit.ndjson');
    const prevLast = fs.existsSync(logPath) ? (fs.readFileSync(logPath, 'utf8').trim().split('\n').pop() || '') : '';
    if (!prevLast.includes(`"date":"${line.date}"`)) fs.appendFileSync(logPath, JSON.stringify(line) + '\n'); // one row per data-date
  } catch (e) { alerts.push('digest append failed: ' + e.message); }
}

function finalize(out, alerts, today, degraded) {
  if (!out) { out = { generatedAt: new Date().toISOString(), posture: 'O-14 attribution-only', series: {} }; }
  // strip the heavy _all helper arrays before serializing the display JSON
  for (const k of Object.keys(out.series || {})) { if (out.series[k]._all) delete out.series[k]._all; }
  out.feedStatus = { checkedAt: new Date().toISOString(), degraded, alerts };
  writeJson(OUT, out);
  const live = Object.values(out.series || {}).filter(s => s.state === 'live').length;
  console.log(`[fetch-feeds] wrote ${path.relative(ROOT, OUT)} — ${Object.keys(out.series || {}).length} series (${live} live), ${Object.keys(out.derived || {}).length} derived, ${alerts.length} alert(s)${degraded ? ' [DEGRADED]' : ''}`);
  for (const a of alerts) console.log('[fetch-feeds][alert] ' + a);
  process.exitCode = 0; // never break the build
}

if (process.argv.includes('--selftest')) selftest();
else main().catch(e => { console.error('[fetch-feeds] fatal: ' + e.message + ' — build continues with last good JSON'); process.exitCode = 0; });
