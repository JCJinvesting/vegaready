// Generates the VegaReady analysis display modules from the IranWarTracker canonical research.
// SINGLE SOURCE: edit IranWarTracker/data/cascades/*.json, then run:  node scripts/build-cascades.cjs
// Outputs src/data/analysis/{transmission,exposure,outlook}.js  (committed; Cloudflare builds from them).
const fs = require('fs'), path = require('path');
const DIR = process.env.CASCADES_DIR || path.resolve(__dirname, '../../IranWarTracker/data/cascades');
const OUT = process.env.OUT_DIR || path.resolve(__dirname, '../src/data/analysis');
const rd = f => JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8'));
const icon = i => String(i + 1).padStart(2, '0');
const clean = t => t.replace(/\s*\([^)]*\)\s*$/, '').trim();
const toneByNet = n => (n === 'winner' ? '#10b981' : n === 'loser' ? '#ef4444' : '#f59e0b');
// Canonical descriptive slugs -> the site's existing stable card ids (keeps URLs/anchors unchanged).
const ID_MAP = { 'fertilizer-ammonia': 'fertilizer', 'agriculture-food': 'agriculture', 'aviation-transportation': 'aviation', 'financial-markets': 'financial', 'technology-digital': 'technology', 'pharmaceuticals': 'pharma', 'construction-materials': 'construction', 'defense-security': 'defense', 'precious-metals-mining-supply-chain': 'precious-metals-mining' };
const mapId = id => ID_MAP[id] || id;
const SCEN = [{"key":"hormuz","label":"Hormuz closure","color":"#ef4444"},{"key":"strike","label":"Oil infrastructure strike","color":"#f59e0b"},{"key":"cable","label":"Cable severance","color":"#6366f1"},{"key":"ceasefire","label":"Ceasefire","color":"#10b981"}];
const banner = src => '// GENERATED from IranWarTracker/data/cascades/' + src + ' by scripts/build-cascades.cjs.\n// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs\n\n';
const out = (file, body) => { fs.writeFileSync(path.join(OUT, file), body); console.log('wrote', file); };

// SECTORS -> transmission
const sectors = rd('sectors.json').entries.map((e, i) => ({
  id: mapId(e.id), title: clean(e.title), icon: icon(i), summary: e.summary,
  trigger: e.data.upstream_trigger, mechanism: e.data.transmission_mechanism,
  hormuz: e.data.magnitude.hormuz_closure, strike: e.data.magnitude.oil_strike,
  cable: e.data.magnitude.cable_severance, ceasefire: e.data.magnitude.ceasefire,
  fills: e.data.who_fills_gap, closes: e.data.gap_closes,
  precedent: e.data.historical_precedent, timeline: e.data.time_horizon,
  confidence: e.confidence, sources: e.sources || [],
}));
out('transmission.js', banner('sectors.json') + 'export const scenarios = ' + JSON.stringify(SCEN, null, 2) + ';\n\nexport const sectors = ' + JSON.stringify(sectors, null, 2) + ';\n');

// REGIONS -> exposure
const reg = rd('regions.json').entries;
const countries = reg.map(e => ({
  id: e.id, title: clean(e.title), gdp: e.gdp_usd, tag: e.net_position, tagColor: toneByNet(e.net_position),
  summary: e.summary, energy: e.data.energy_exposure, food: e.data.food_security, trade: e.data.trade_exposure,
  financial: e.data.financial_exposure, substitution: e.data.substitution_capacity,
  hormuz: e.data.scenario_specific_impact.hormuz_closure, strike: e.data.scenario_specific_impact.oil_strike,
  cable: e.data.scenario_specific_impact.cable_severance, ceasefire: e.data.scenario_specific_impact.ceasefire,
  history: e.data.historical_behavior, secondOrder: e.data.second_order_effect || '',
  confidence: e.confidence, sources: e.sources || [],
}));
const winnerLosers = reg.map(e => Object.assign({ name: clean(e.title) }, e.matrix || {}));
out('exposure.js', banner('regions.json') + 'export const countries = ' + JSON.stringify(countries, null, 2) + ';\n\nexport const winnerLosers = ' + JSON.stringify(winnerLosers, null, 2) + ';\n');

// DYNAMICS -> outlook
const dyn = rd('dynamics.json');
const flows = dyn.entries.map((e, i) => ({
  id: e.id, title: e.title, icon: icon(i), summary: e.summary,
  gap: e.data.the_gap, fills: e.data.who_fills_it, ramp: e.data.ramp_timeline,
  contracts: e.data.contract_structure, onReturn: e.data.on_return,
  precedent: e.data.historical_example, investment: e.data.investment_implications,
  confidence: e.confidence, sources: e.sources || [],
}));
const cf = dyn.crossFlowMatrix || {};
const crossFlow = { hormuz: cf.hormuz_closure, strike: cf.oil_strike, cable: cf.cable_severance, ceasefire: cf.ceasefire };
out('outlook.js', banner('dynamics.json') + 'export const flows = ' + JSON.stringify(flows, null, 2) + ';\n\nexport const crossFlow = ' + JSON.stringify(crossFlow, null, 2) + ';\n');
// CREDIT -> markets/credit (Phase 2 Section 2; richer schema: scenario_impacts, beneficiaries/losers, investment)
const creditDoc = rd('credit.json');
const credit = creditDoc.entries.map((e, i) => ({
  id: e.id, title: e.title, icon: icon(i), category: e.category, confidence: e.confidence,
  summary: e.summary,
  trigger: e.data.upstream_trigger, mechanism: e.data.transmission_mechanism,
  hormuz: e.data.scenario_impacts.hormuz_closure, strike: e.data.scenario_impacts.oil_strike,
  cable: e.data.scenario_impacts.cable_severance, ceasefire: e.data.scenario_impacts.ceasefire,
  magnitude: e.data.magnitude, beneficiaries: e.data.beneficiaries, losers: e.data.losers,
  substitution: e.data.substitution_cycle, precedent: e.data.historical_precedent,
  timeHorizon: e.data.time_horizon, investment: e.data.investment_implications,
  staleFlags: e.data.stale_claim_flags || '', sources: e.sources || [],
}));
out('credit.js', banner('credit.json')
  + 'export const cards = ' + JSON.stringify(credit, null, 2) + ';\n\n'
  + 'export const cascade = ' + JSON.stringify(creditDoc.cascadeChain || [], null, 2) + ';\n\n'
  + 'export const winnersLosers = ' + JSON.stringify(creditDoc.beneficiariesLosers || [], null, 2) + ';\n\n'
  + 'export const takeaways = ' + JSON.stringify(creditDoc.takeaways || [], null, 2) + ';\n\n'
  + 'export const nextSection = ' + JSON.stringify(creditDoc.nextSection || '', null, 2) + ';\n\n'
  + 'export const methodology = ' + JSON.stringify(creditDoc.methodology || '', null, 2) + ';\n');
console.log('done.');
