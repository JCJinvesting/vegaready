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
  deepDive: e.deepDive || null,
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
  staleFlags: e.data.stale_claim_flags || '', sources: e.sources || [], tags: e.tags || {},
}));
out('credit.js', banner('credit.json')
  + 'export const cards = ' + JSON.stringify(credit, null, 2) + ';\n\n'
  + 'export const cascade = ' + JSON.stringify(creditDoc.cascadeChain || [], null, 2) + ';\n\n'
  + 'export const winnersLosers = ' + JSON.stringify(creditDoc.beneficiariesLosers || [], null, 2) + ';\n\n'
  + 'export const takeaways = ' + JSON.stringify(creditDoc.takeaways || [], null, 2) + ';\n\n'
  + 'export const nextSection = ' + JSON.stringify(creditDoc.nextSection || '', null, 2) + ';\n\n'
  + 'export const methodology = ' + JSON.stringify(creditDoc.methodology || '', null, 2) + ';\n');
// INSURANCE (Section 3) -> markets/insurance. Data-point schema; generic adapter -> event cards.
const insMETA = /(_source|_tier|_note|_qualifier|_names|_name)$/;
const insHuman = (k) => k.replace(/_/g, ' ')
  .replace(/\bpct\b/gi, '%').replace(/\busd\b/gi, 'USD').replace(/\bbn\b/gi, 'bn')
  .replace(/\bawrp\b/gi, 'AWRP').replace(/\bvlcc\b/gi, 'VLCC').replace(/\bjkm\b/gi, 'JKM')
  .replace(/\btce\b/gi, 'TCE').replace(/\blng\b/gi, 'LNG').replace(/\bicc\b/gi, 'ICC')
  .replace(/\bofac\b/gi, 'OFAC').replace(/\blma\b/gi, 'LMA').replace(/\bq2\b/gi, 'Q2')
  .replace(/\blme\b/gi, 'LME').replace(/\bbsp\b/gi, 'BSP').replace(/\bilo\b/gi, 'ILO')
  .replace(/\bgcc\b/gi, 'GCC').replace(/\bfte\b/gi, 'FTE').replace(/\bfdi\b/gi, 'FDI')
  .replace(/\badnoc\b/gi, 'ADNOC').replace(/\bneom\b/gi, 'NEOM').replace(/\byoy\b/gi, 'YoY')
  .replace(/\bsar\b/gi, 'SAR').replace(/\bytd\b/gi, 'YTD').replace(/\bph\b/gi, 'PH').replace(/\bec\b/gi, 'E&C')
  .trim().replace(/^./, (c) => c.toUpperCase());
const insDoc = rd('insurance.json');
const insurance = insDoc.entries.map((e, i) => {
  const d = e.data || {};
  const dateKey = Object.keys(d).find((k) => k.endsWith('_date'));
  const metrics = Object.keys(d)
    .filter((k) => !insMETA.test(k) && k !== 'confidence' && k !== 'source_tier' && d[k] != null && d[k] !== '')
    .map((k) => ({ label: insHuman(k), value: Array.isArray(d[k]) ? d[k].join(', ') : String(d[k]) }));
  return {
    id: e.id, icon: icon(i), title: e.title, category: e.category, summary: e.summary,
    date: dateKey ? d[dateKey] : '', metrics,
    confidence: (e.confidence || '').toLowerCase(), sources: e.sources || [], tags: e.tags || {},
  };
});
out('insurance.js', banner('insurance.json')
  + 'export const cards = ' + JSON.stringify(insurance, null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(insDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const premiumTrajectory = ' + JSON.stringify(insDoc.premiumTrajectory || [], null, 2) + ';\n\n'
  + 'export const scenarioImpact = ' + JSON.stringify(insDoc.scenarioImpact || [], null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(insDoc.dataQuality || {}, null, 2) + ';\n\n'
  + 'export const precedents = ' + JSON.stringify(insDoc.precedents || [], null, 2) + ';\n\n'
  + 'export const precedentNote = ' + JSON.stringify(insDoc.precedentNote || '', null, 2) + ';\n\n'
  + 'export const premiumGeography = ' + JSON.stringify(insDoc.premiumGeography || '', null, 2) + ';\n\n'
  + 'export const investmentImplications = ' + JSON.stringify(insDoc.investmentImplications || [], null, 2) + ';\n\n'
  + 'export const nextSection = ' + JSON.stringify(insDoc.nextSection || '', null, 2) + ';\n');
// SECTION 4 (split) -> markets/property + markets/labor. Nested-metric data-point schema; reuses insHuman.
const raLabel = (k) => insHuman(k)
  .replace(/\s+(USD per t|USD bn|USD tn|Dh bn|SAR bn|PHP bn|mb d|mn|tn|bn|units|per t|t|%)\s*$/i, '')
  .replace(/\bmom\b/gi, 'MoM').replace(/\bfy(\d{4})\b/gi, 'FY$1').replace(/\bh1\b/gi, 'H1')
  .replace(/\bdfa\b/gi, 'DFA').replace(/\bcif\b/gi, 'CIF').replace(/\bdepdev\b/gi, 'DepDEV')
  .replace(/\bfeb28\b/gi, 'since Feb 28').replace(/\bq([1-4])\b/gi, 'Q$1')
  .replace(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\b/gi, (mo) => mo.charAt(0).toUpperCase() + mo.slice(1).toLowerCase())
  .trim();
const nestedCard = (e, i) => {
  const d = e.data || {};
  const metrics = Object.keys(d).map((k) => {
    const m = d[k];
    const obj = m && typeof m === 'object';
    const val = obj ? [m.value, m.unit].filter((x) => x != null && x !== '').join(' ') : String(m);
    return { label: raLabel(k), value: val, tier: (obj && m.tier) || '' };
  });
  const confs = Object.values(d).filter((m) => m && typeof m === 'object').map((m) => (m.confidence || '').toUpperCase());
  const hi = confs.filter((c) => c === 'HIGH').length;
  const lo = confs.filter((c) => c === 'LOW').length;
  const confidence = confs.length && hi >= confs.length / 2 ? 'high' : (lo > confs.length / 3 ? 'low' : 'medium');
  const sources = [...new Set(Object.values(d).filter((m) => m && typeof m === 'object' && m.source).map((m) => m.source))];
  return { id: e.id, icon: icon(i), title: e.title, category: e.category, summary: e.summary || '', metrics, confidence, sources, tags: e.tags || {} };
};
const propDoc = rd('property.json');
out('property.js', banner('property.json')
  + 'export const cards = ' + JSON.stringify(propDoc.cards.map(nestedCard), null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(propDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const scenarioMatrix = ' + JSON.stringify(propDoc.scenarioMatrix || [], null, 2) + ';\n\n'
  + 'export const substitution = ' + JSON.stringify(propDoc.substitution || [], null, 2) + ';\n\n'
  + 'export const precedents = ' + JSON.stringify(propDoc.precedents || [], null, 2) + ';\n\n'
  + 'export const precedentNote = ' + JSON.stringify(propDoc.precedentNote || '', null, 2) + ';\n\n'
  + 'export const sourceResolution = ' + JSON.stringify(propDoc.sourceResolution || [], null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(propDoc.dataQuality || {}, null, 2) + ';\n');
const labDoc = rd('labor.json');
out('labor.js', banner('labor.json')
  + 'export const cards = ' + JSON.stringify(labDoc.cards.map(nestedCard), null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(labDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const scenarioMatrix = ' + JSON.stringify(labDoc.scenarioMatrix || [], null, 2) + ';\n\n'
  + 'export const migrationExposure = ' + JSON.stringify(labDoc.migrationExposure || [], null, 2) + ';\n\n'
  + 'export const migrationNote = ' + JSON.stringify(labDoc.migrationNote || '', null, 2) + ';\n\n'
  + 'export const humanImpact = ' + JSON.stringify(labDoc.humanImpact || {}, null, 2) + ';\n\n'
  + 'export const precedents = ' + JSON.stringify(labDoc.precedents || [], null, 2) + ';\n\n'
  + 'export const precedentNote = ' + JSON.stringify(labDoc.precedentNote || '', null, 2) + ';\n\n'
  + 'export const sourceResolution = ' + JSON.stringify(labDoc.sourceResolution || [], null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(labDoc.dataQuality || {}, null, 2) + ';\n');
// SECTION 5 (split) -> markets/food-agriculture + markets/water. Flat data-point cards; reuses insHuman.
const normConf = (c) => { const m = (c || '').toUpperCase().match(/HIGH|MEDIUM|LOW/); return m ? m[0].toLowerCase() : 'medium'; };
const flatCard = (e, i) => {
  const d = e.data || {};
  const META = /(_source|_tier|_note|_qualifier|_names|_name)$/;
  const metrics = Object.keys(d)
    .filter((k) => !META.test(k) && k !== 'confidence' && k !== 'source_tier' && d[k] != null && d[k] !== '')
    .map((k) => ({ label: insHuman(k), value: Array.isArray(d[k]) ? d[k].join(', ') : String(d[k]) }));
  return { id: e.id, icon: icon(i), title: e.title, category: e.category, summary: e.summary || '', metrics, confidence: normConf(e.confidence), sources: e.sources || [], tags: e.tags || {} };
};
const faDoc = rd('foodag.json');
out('foodag.js', banner('foodag.json')
  + 'export const cards = ' + JSON.stringify(faDoc.cards.map(flatCard), null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(faDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const priceTrajectory = ' + JSON.stringify(faDoc.priceTrajectory || [], null, 2) + ';\n\n'
  + 'export const forwardProjections = ' + JSON.stringify(faDoc.forwardProjections || '', null, 2) + ';\n\n'
  + 'export const crossShock = ' + JSON.stringify(faDoc.crossShock || [], null, 2) + ';\n\n'
  + 'export const crossShockNote = ' + JSON.stringify(faDoc.crossShockNote || '', null, 2) + ';\n\n'
  + 'export const regionalHunger = ' + JSON.stringify(faDoc.regionalHunger || [], null, 2) + ';\n\n'
  + 'export const regionalHungerNote = ' + JSON.stringify(faDoc.regionalHungerNote || '', null, 2) + ';\n\n'
  + 'export const gccFood = ' + JSON.stringify(faDoc.gccFood || [], null, 2) + ';\n\n'
  + 'export const gccFoodNote = ' + JSON.stringify(faDoc.gccFoodNote || '', null, 2) + ';\n\n'
  + 'export const scenarioMatrix = ' + JSON.stringify(faDoc.scenarioMatrix || [], null, 2) + ';\n\n'
  + 'export const sourceResolution = ' + JSON.stringify(faDoc.sourceResolution || [], null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(faDoc.dataQuality || {}, null, 2) + ';\n\n'
  + 'export const policyResponse = ' + JSON.stringify(faDoc.policyResponse || [], null, 2) + ';\n\n'
  + 'export const cropCalendar = ' + JSON.stringify(faDoc.cropCalendar || [], null, 2) + ';\n\n'
  + 'export const cropCalendarNote = ' + JSON.stringify(faDoc.cropCalendarNote || '', null, 2) + ';\n\n'
  + 'export const sulfurPhosphateNote = ' + JSON.stringify(faDoc.sulfurPhosphateNote || '', null, 2) + ';\n\n'
  + 'export const investmentImplications = ' + JSON.stringify(faDoc.investmentImplications || [], null, 2) + ';\n\n'
  + 'export const relatedSectors = ' + JSON.stringify(faDoc.relatedSectors || '', null, 2) + ';\n');
const wDoc = rd('water.json');
out('water.js', banner('water.json')
  + 'export const cards = ' + JSON.stringify(wDoc.cards.map(flatCard), null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(wDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const dependencyTable = ' + JSON.stringify(wDoc.dependencyTable || [], null, 2) + ';\n\n'
  + 'export const attacks = ' + JSON.stringify(wDoc.attacks || [], null, 2) + ';\n\n'
  + 'export const reserveNote = ' + JSON.stringify(wDoc.reserveNote || '', null, 2) + ';\n\n'
  + 'export const scenarioMatrix = ' + JSON.stringify(wDoc.scenarioMatrix || [], null, 2) + ';\n\n'
  + 'export const sourceResolution = ' + JSON.stringify(wDoc.sourceResolution || [], null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(wDoc.dataQuality || {}, null, 2) + ';\n\n'
  + 'export const investmentImplications = ' + JSON.stringify(wDoc.investmentImplications || [], null, 2) + ';\n');
console.log('done.');
