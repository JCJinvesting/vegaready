#!/usr/bin/env node
'use strict';

/**
 * build-data.js — Fetch IWT data and bundle it for the Astro build.
 *
 * This script reads all 11 JSON scope files from the IWT data/ directory
 * (or fetches from the IWT Cloudflare Worker) and creates a single
 * iwt-bundle.json that the DataInjector Astro component reads at build time.
 *
 * Usage:
 *   node scripts/build-data.js                    # reads from local IWT path
 *   node scripts/build-data.js --remote           # fetches from Cloudflare Worker
 *   node scripts/build-data.js --iwt-path /path   # custom IWT directory
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const OUTPUT = path.resolve(__dirname, '..', 'src', 'data', 'iwt-bundle.json');
// Default: look for IWT as a sibling directory (works on Windows: C:\Users\...\ClaudeCode\IranWarTracker)
// On Cloudflare builds: data must be pre-committed or fetched from the IWT Worker
const DEFAULT_IWT_PATH = process.env.IWT_DATA_PATH || path.resolve(__dirname, '..', '..', 'IranWarTracker');

// Same SCOPE_MAP as IWT's bake-data.js — must stay in sync
const SCOPE_MAP = {
  countries:      { file: 'countries.json',     arrays: ['UAE_DATA','QATAR_DATA','BAHRAIN_DATA','SAUDI_DATA','KUWAIT_DATA','OMAN_DATA','IRAQ_DATA','LEAKER_LOG'] },
  economics:      { file: 'economics.json',     arrays: ['OIL_PRICE_TIMELINE','MARKET_EVENT_RESPONSE','REFINERY_EVENTS','FORCE_MAJEURE','GCC_EQUITY','GCC_CDS','HORMUZ_ANALYST','CURRENCY_CHANGES'] },
  markets:        { file: 'markets.json',       arrays: ['SHIPPING_INSURANCE','BUNKER_PRICES','VESSEL_ATTACKS','INSURANCE_EVENTS','CONTAINER_RATES','SHIPPING_EVENTS'] },
  'iran-full':    { file: 'iran-full.json',     arrays: ['IRAN_DAY_CLAIMS','WEAPON_SYSTEMS','IRAN_DISINFO','IRAN_MILITARY_ORDER'] },
  'iran-defense': { file: 'iran-defense.json',  arrays: ['IRAN_DEPLETION','IRAN_CAPACITY'] },
  'iran-epicfury':{ file: 'iran-epicfury.json', arrays: ['EPICFURY_TIMELINE','EPICFURY_BDA'] },
  'iran-calculus':{ file: 'iran-calculus.json', arrays: ['STRATEGIC_CALCULUS'] },
  'us-israel':    { file: 'us-israel.json',     arrays: ['US_POLICY_EVENTS','ISRAEL_OPS_TIMELINE','COALITION_AIR_ORDER','US_NAVAL_FORCES','ISRAEL_DEFENSE_SYSTEMS'] },
  casualties:     { file: 'casualties.json',    arrays: ['US_CASUALTIES','COALITION_CASUALTIES','CIVILIAN_INCIDENTS'] },
  sources:        { file: 'sources.json',       arrays: ['GLOSSARY_ENTRIES','SOURCES','FEEDER_OUTLETS'] },
  derived:        { file: 'derived.json',       arrays: ['COUNTRY_SUMMARY','WAR_ROOM_BRIEFS','WR_SECTORS','WR_SEVERITY','IRAN_RECONCILIATION','IRAN_STOCKPILE','BRIEF_ECON','BRIEF_MARKETS','BRIEF_ADV','GULF_AIR_DEFENSE','GULF_NAVAL_ASSETS','PROVENANCE'] },
};

function safeParse(filePath) {
  let raw = fs.readFileSync(filePath, 'utf8');
  raw = raw.replace(/\x00/g, ''); // Strip null bytes
  try { return JSON.parse(raw); } catch(e) {
    // Known issue: IWT JSON files often have unterminated strings at the end.
    // Strategy: progressively truncate from the end until we find valid JSON.
    // Look for the last '}' that, when the file is truncated there, produces valid JSON.
    let attempt = raw;
    for (let i = 0; i < 20; i++) {
      // Find the last complete array entry boundary: '},\n' or '}\n]' or '}]}'
      const lastEntry = attempt.lastIndexOf('},');
      const lastArrayClose = attempt.lastIndexOf('}]');
      const lastObjClose = attempt.lastIndexOf('}}');
      const cutPoint = Math.max(lastEntry, lastArrayClose, lastObjClose);
      if (cutPoint <= 0) break;

      // Try cutting at each candidate + closing the outer structure
      const truncated = attempt.substring(0, cutPoint + 1);
      // Count open braces/brackets to figure out what needs closing
      const openBraces = (truncated.match(/\{/g)||[]).length - (truncated.match(/\}/g)||[]).length;
      const openBrackets = (truncated.match(/\[/g)||[]).length - (truncated.match(/\]/g)||[]).length;
      const closer = ']'.repeat(Math.max(openBrackets, 0)) + '}'.repeat(Math.max(openBraces, 0));

      try {
        const result = JSON.parse(truncated + closer);
        console.log(`[build-data] Repaired ${path.basename(filePath)} (truncated ${raw.length - cutPoint} trailing bytes)`);
        return result;
      } catch(e2) {
        // Try cutting earlier
        attempt = attempt.substring(0, cutPoint);
      }
    }
    console.warn(`[build-data] WARNING: Could not parse ${path.basename(filePath)}: ${e.message}`);
    return null;
  }
}

function buildFromLocal(iwtPath) {
  const dataDir = path.join(iwtPath, 'data');
  if (!fs.existsSync(dataDir)) {
    console.warn(`[build-data] WARNING: IWT data directory not found at ${dataDir}`);
    console.warn('[build-data] Using existing bundle or empty data. Set IWT_DATA_PATH env var or --iwt-path flag.');
    // Check if a pre-existing bundle exists
    if (fs.existsSync(OUTPUT)) {
      console.log(`[build-data] Using existing bundle: ${OUTPUT}`);
      return { payload: JSON.parse(fs.readFileSync(OUTPUT, 'utf8')), arrayCount: 0, totalEntries: 0, errors: ['Using cached bundle'] };
    }
    return { payload: {}, arrayCount: 0, totalEntries: 0, errors: ['No data available'] };
  }

  const payload = {};
  let totalEntries = 0;
  let arrayCount = 0;
  const errors = [];

  for (const [scope, def] of Object.entries(SCOPE_MAP)) {
    const filePath = path.join(dataDir, def.file);
    const data = safeParse(filePath);
    if (!data) { errors.push(`${def.file}: parse failed`); continue; }

    for (const arrName of def.arrays) {
      if (data[arrName] !== undefined) {
        payload[arrName] = data[arrName];
        const count = Array.isArray(data[arrName]) ? data[arrName].length : Object.keys(data[arrName]).length;
        totalEntries += count;
        arrayCount++;
      } else {
        errors.push(`${arrName} missing from ${def.file}`);
      }
    }
  }

  return { payload, arrayCount, totalEntries, errors };
}

function main() {
  const args = process.argv.slice(2);
  const iwtPath = args.includes('--iwt-path')
    ? args[args.indexOf('--iwt-path') + 1]
    : DEFAULT_IWT_PATH;
  // Optional: write to a staging path instead of the live bundle. Used by
  // publish-from-iwt.cjs to quality-check a regenerated bundle BEFORE it
  // replaces the committed one. Defaults to OUTPUT (the live bundle).
  const outPath = args.includes('--out')
    ? path.resolve(args[args.indexOf('--out') + 1])
    : OUTPUT;

  console.log(`[build-data] Reading IWT data from: ${iwtPath}`);

  const { payload, arrayCount, totalEntries, errors } = buildFromLocal(iwtPath);

  // Ensure output directory exists
  const outputDir = path.dirname(outPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outPath, JSON.stringify(payload), 'utf8');

  const sizeKB = (Buffer.byteLength(JSON.stringify(payload)) / 1024).toFixed(1);
  console.log(`[build-data] Bundled ${arrayCount} arrays, ${totalEntries} entries (${sizeKB} KB)`);
  if (errors.length > 0) {
    console.log(`[build-data] WARNINGS: ${errors.join('; ')}`);
  }
  console.log(`[build-data] Output: ${outPath}`);
}

main();
