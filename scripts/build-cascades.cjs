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

// SECTION 6 -> markets/energy (transition), markets/defense, outlook/nuclear. Flat data-point cards; reuses flatCard/insHuman.
const etDoc = rd('energytransition.json');
out('energytransition.js', banner('energytransition.json')
  + 'export const cards = ' + JSON.stringify(etDoc.cards.map(flatCard), null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(etDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const ieaTable = ' + JSON.stringify(etDoc.ieaTable || [], null, 2) + ';\n\n'
  + 'export const ieaTableNote = ' + JSON.stringify(etDoc.ieaTableNote || '', null, 2) + ';\n\n'
  + 'export const scenarioMatrix = ' + JSON.stringify(etDoc.scenarioMatrix || [], null, 2) + ';\n\n'
  + 'export const investmentImplications = ' + JSON.stringify(etDoc.investmentImplications || [], null, 2) + ';\n\n'
  + 'export const sourceResolution = ' + JSON.stringify(etDoc.sourceResolution || [], null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(etDoc.dataQuality || {}, null, 2) + ';\n\n'
  + 'export const relatedSectors = ' + JSON.stringify(etDoc.relatedSectors || '', null, 2) + ';\n\n'
  + 'export const physicalShock = ' + JSON.stringify(etDoc.physicalShock || '', null, 2) + ';\n');
const defDoc = rd('defense.json');
out('defense.js', banner('defense.json')
  + 'export const cards = ' + JSON.stringify(defDoc.cards.map(flatCard), null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(defDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const drawdownTable = ' + JSON.stringify(defDoc.drawdownTable || [], null, 2) + ';\n\n'
  + 'export const drawdownNote = ' + JSON.stringify(defDoc.drawdownNote || '', null, 2) + ';\n\n'
  + 'export const scaleupTable = ' + JSON.stringify(defDoc.scaleupTable || [], null, 2) + ';\n\n'
  + 'export const spendingNote = ' + JSON.stringify(defDoc.spendingNote || '', null, 2) + ';\n\n'
  + 'export const scenarioMatrix = ' + JSON.stringify(defDoc.scenarioMatrix || [], null, 2) + ';\n\n'
  + 'export const investmentImplications = ' + JSON.stringify(defDoc.investmentImplications || [], null, 2) + ';\n\n'
  + 'export const resilience = ' + JSON.stringify(defDoc.resilience || {}, null, 2) + ';\n\n'
  + 'export const sourceResolution = ' + JSON.stringify(defDoc.sourceResolution || [], null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(defDoc.dataQuality || {}, null, 2) + ';\n\n'
  + 'export const relatedSectors = ' + JSON.stringify(defDoc.relatedSectors || '', null, 2) + ';\n');
const nucDoc = rd('nuclear.json');
out('nuclear.js', banner('nuclear.json')
  + 'export const cards = ' + JSON.stringify(nucDoc.cards.map(flatCard), null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(nucDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const fuelCycle = ' + JSON.stringify(nucDoc.fuelCycle || {}, null, 2) + ';\n\n'
  + 'export const cascadeChain = ' + JSON.stringify(nucDoc.cascadeChain || [], null, 2) + ';\n\n'
  + 'export const sourceResolution = ' + JSON.stringify(nucDoc.sourceResolution || [], null, 2) + ';\n\n'
  + 'export const scenarioMatrix = ' + JSON.stringify(nucDoc.scenarioMatrix || [], null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(nucDoc.dataQuality || {}, null, 2) + ';\n\n'
  + 'export const relatedSectors = ' + JSON.stringify(nucDoc.relatedSectors || '', null, 2) + ';\n');


// SECTION 7 -> /structural lens (Structural Risk). Scored-index + flat-card schema; reuses flatCard.
const ckDoc = rd('chokepoints.json');
out('chokepoints.js', banner('chokepoints.json')
  + 'export const cards = ' + JSON.stringify(ckDoc.cards.map(flatCard), null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(ckDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const throughput = ' + JSON.stringify(ckDoc.throughput || [], null, 2) + ';\n\n'
  + 'export const throughputNote = ' + JSON.stringify(ckDoc.throughputNote || '', null, 2) + ';\n\n'
  + 'export const scorecard = ' + JSON.stringify(ckDoc.scorecard || [], null, 2) + ';\n\n'
  + 'export const scorecardNote = ' + JSON.stringify(ckDoc.scorecardNote || '', null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(ckDoc.dataQuality || {}, null, 2) + ';\n\n'
  + 'export const relatedSectors = ' + JSON.stringify(ckDoc.relatedSectors || '', null, 2) + ';\n');
const wpDoc = rd('weaponization.json');
out('weaponization.js', banner('weaponization.json')
  + 'export const cards = ' + JSON.stringify(wpDoc.cards.map(flatCard), null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(wpDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const episodes = ' + JSON.stringify(wpDoc.episodes || [], null, 2) + ';\n\n'
  + 'export const takeaways = ' + JSON.stringify(wpDoc.takeaways || [], null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(wpDoc.dataQuality || {}, null, 2) + ';\n\n'
  + 'export const relatedSectors = ' + JSON.stringify(wpDoc.relatedSectors || '', null, 2) + ';\n');
const dgDoc = rd('deglobalization.json');
out('deglobalization.js', banner('deglobalization.json')
  + 'export const cards = ' + JSON.stringify(dgDoc.cards.map(flatCard), null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(dgDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const fdiNote = ' + JSON.stringify(dgDoc.fdiNote || '', null, 2) + ';\n\n'
  + 'export const reshoring = ' + JSON.stringify(dgDoc.reshoring || [], null, 2) + ';\n\n'
  + 'export const connectorNote = ' + JSON.stringify(dgDoc.connectorNote || '', null, 2) + ';\n\n'
  + 'export const tariff = ' + JSON.stringify(dgDoc.tariff || {}, null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(dgDoc.dataQuality || {}, null, 2) + ';\n\n'
  + 'export const relatedSectors = ' + JSON.stringify(dgDoc.relatedSectors || '', null, 2) + ';\n');
const diDoc = rd('digital.json');
out('digital.js', banner('digital.json')
  + 'export const cards = ' + JSON.stringify(diDoc.cards.map(flatCard), null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(diDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const physicalNote = ' + JSON.stringify(diDoc.physicalNote || '', null, 2) + ';\n\n'
  + 'export const leoNote = ' + JSON.stringify(diDoc.leoNote || '', null, 2) + ';\n\n'
  + 'export const policyNote = ' + JSON.stringify(diDoc.policyNote || '', null, 2) + ';\n\n'
  + 'export const scorecard = ' + JSON.stringify(diDoc.scorecard || [], null, 2) + ';\n\n'
  + 'export const scorecardNote = ' + JSON.stringify(diDoc.scorecardNote || '', null, 2) + ';\n\n'
  + 'export const sabotage = ' + JSON.stringify(diDoc.sabotage || [], null, 2) + ';\n\n'
  + 'export const sabotageNote = ' + JSON.stringify(diDoc.sabotageNote || '', null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(diDoc.dataQuality || {}, null, 2) + ';\n\n'
  + 'export const relatedSectors = ' + JSON.stringify(diDoc.relatedSectors || '', null, 2) + ';\n');
const frDoc = rd('foodresilience.json');
out('foodresilience.js', banner('foodresilience.json')
  + 'export const cards = ' + JSON.stringify(frDoc.cards.map(flatCard), null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(frDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const scorecard = ' + JSON.stringify(frDoc.scorecard || [], null, 2) + ';\n\n'
  + 'export const signalNote = ' + JSON.stringify(frDoc.signalNote || '', null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(frDoc.dataQuality || {}, null, 2) + ';\n\n'
  + 'export const relatedSectors = ' + JSON.stringify(frDoc.relatedSectors || '', null, 2) + ';\n');
const soDoc = rd('structuraloverview.json');
out('structuraloverview.js', banner('structuraloverview.json')
  + 'export const execSummary = ' + JSON.stringify(soDoc.execSummary || '', null, 2) + ';\n\n'
  + 'export const keyFindings = ' + JSON.stringify(soDoc.keyFindings || [], null, 2) + ';\n\n'
  + 'export const pillars = ' + JSON.stringify(soDoc.pillars || [], null, 2) + ';\n\n'
  + 'export const methodology = ' + JSON.stringify(soDoc.methodology || {}, null, 2) + ';\n\n'
  + 'export const schemaFields = ' + JSON.stringify(soDoc.schemaFields || [], null, 2) + ';\n\n'
  + 'export const thresholds = ' + JSON.stringify(soDoc.thresholds || [], null, 2) + ';\n\n'
  + 'export const thresholdsNote = ' + JSON.stringify(soDoc.thresholdsNote || '', null, 2) + ';\n\n'
  + 'export const jsonTemplate = ' + JSON.stringify(soDoc.jsonTemplate || '', null, 2) + ';\n\n'
  + 'export const sourceConflict = ' + JSON.stringify(soDoc.sourceConflict || [], null, 2) + ';\n');


// OPTION B BACKEND -> watchmetrics.js (status board registry). Directional comparator is single-source: used to precompute AND shipped in the module.
const statusOf = (m) => {
  if (m.type === 'boolean') return m.value ? 'critical' : 'ok';
  if (m.type === 'regime') return m.status || 'ok';
  const t = m.thresholds || {};
  const v = m.value;
  if (m.direction === 'above') {
    if (v >= t.critical) return 'critical';
    if (v >= t.alert) return 'alert';
    if (v >= t.watch) return 'watch';
    return 'ok';
  }
  if (v <= t.critical) return 'critical';
  if (v <= t.alert) return 'alert';
  if (v <= t.watch) return 'watch';
  return 'ok';
};
const wmDoc = rd('watch-metrics.json');
const _order = { critical: 0, alert: 1, watch: 2, ok: 3 };
const wmMetrics = wmDoc.metrics
  .map((m) => Object.assign({}, m, { status: statusOf(m) }))
  .sort((a, b) => _order[a.status] - _order[b.status]);
const wmSummary = wmMetrics.reduce((acc, m) => { acc[m.status]++; acc.total++; return acc; }, { critical: 0, alert: 0, watch: 0, ok: 0, total: 0 });
const wmByScenario = {};
for (const k of (wmDoc.scenarioKeys || [])) wmByScenario[k] = wmMetrics.filter((m) => (m.scenario_mapping || []).includes(k)).map((m) => m.id);
// Signal catalog = the 30 cross-section tradable signals (metrics carrying a signalNo), grouped by section, in catalog order.
const wmCatalog = wmMetrics.filter((m) => m.signalNo).slice().sort((a, b) => String(a.signalNo).localeCompare(String(b.signalNo), undefined, { numeric: true }));
const wmBySection = {};
for (const m of wmCatalog) (wmBySection[m.section] = wmBySection[m.section] || []).push(m.id);
// byPage = which signal ids surface on each section page (powers SignalPanel).
const wmByPage = {};
for (const m of wmMetrics) { if (!m.page) continue; (wmByPage[m.page] = wmByPage[m.page] || []).push(m.id); }
out('watchmetrics.js', banner('watch-metrics.json')
  + '// Status comparator (also used at build time to precompute each metric.status).\n'
  + 'export const statusOf = ' + statusOf.toString() + ';\n\n'
  + 'export const metrics = ' + JSON.stringify(wmMetrics, null, 2) + ';\n\n'
  + 'export const summary = ' + JSON.stringify(wmSummary, null, 2) + ';\n\n'
  + 'export const byScenario = ' + JSON.stringify(wmByScenario, null, 2) + ';\n\n'
  + 'export const signalCatalog = ' + JSON.stringify(wmCatalog, null, 2) + ';\n\n'
  + 'export const bySection = ' + JSON.stringify(wmBySection, null, 2) + ';\n\n'
  + 'export const byPage = ' + JSON.stringify(wmByPage, null, 2) + ';\n\n'
  + 'export const scenarioKeys = ' + JSON.stringify(wmDoc.scenarioKeys || [], null, 2) + ';\n\n'
  + '// signalsForPage(page) -> the status-stamped metrics that surface on a given section page.\n'
  + 'export const signalsForPage = (page) => (byPage[page] || []).map((id) => metrics.find((m) => m.id === id)).filter(Boolean);\n\n'
  + 'export const lastUpdated = ' + JSON.stringify(wmDoc.lastUpdated || '', null, 2) + ';\n');


// SECTION 8 -> /markets/cross-asset (the market-derivative hub; spokes import slices from this module).
const caDoc = rd('crossasset.json');
out('crossasset.js', banner('crossasset.json')
  + 'export const cards = ' + JSON.stringify(caDoc.cards.map(flatCard), null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(caDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const correlationMap = ' + JSON.stringify(caDoc.correlationMap || [], null, 2) + ';\n\n'
  + 'export const correlationNote = ' + JSON.stringify(caDoc.correlationNote || '', null, 2) + ';\n\n'
  + 'export const volRegime = ' + JSON.stringify(caDoc.volRegime || [], null, 2) + ';\n\n'
  + 'export const volNote = ' + JSON.stringify(caDoc.volNote || '', null, 2) + ';\n\n'
  + 'export const termStructure = ' + JSON.stringify(caDoc.termStructure || [], null, 2) + ';\n\n'
  + 'export const termNote = ' + JSON.stringify(caDoc.termNote || '', null, 2) + ';\n\n'
  + 'export const positioning = ' + JSON.stringify(caDoc.positioning || [], null, 2) + ';\n\n'
  + 'export const positioningVerdict = ' + JSON.stringify(caDoc.positioningVerdict || '', null, 2) + ';\n\n'
  + 'export const hedgingPlaybook = ' + JSON.stringify(caDoc.hedgingPlaybook || [], null, 2) + ';\n\n'
  + 'export const signalQuality = ' + JSON.stringify(caDoc.signalQuality || [], null, 2) + ';\n\n'
  + 'export const signalVerdict = ' + JSON.stringify(caDoc.signalVerdict || '', null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(caDoc.dataQuality || {}, null, 2) + ';\n\n'
  + 'export const volSurface = ' + JSON.stringify(caDoc.volSurface || [], null, 2) + ';\n\n'
  + 'export const volSurfaceNote = ' + JSON.stringify(caDoc.volSurfaceNote || '', null, 2) + ';\n\n'
  + 'export const termMap = ' + JSON.stringify(caDoc.termMap || [], null, 2) + ';\n\n'
  + 'export const dollarFunding = ' + JSON.stringify(caDoc.dollarFunding || '', null, 2) + ';\n\n'
  + 'export const upgradedConfidence = ' + JSON.stringify(caDoc.upgradedConfidence || [], null, 2) + ';\n\n'
  + 'export const proxyOnly = ' + JSON.stringify(caDoc.proxyOnly || [], null, 2) + ';\n\n'
  + 'export const relatedSectors = ' + JSON.stringify(caDoc.relatedSectors || '', null, 2) + ';\n');


// SECTION 8 -> /markets/equities (first-order equity layer; upstream of cross-asset).
const eqDoc = rd('equities.json');
out('equities.js', banner('equities.json')
  + 'export const cards = ' + JSON.stringify(eqDoc.cards.map(flatCard), null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(eqDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const scenarioRegime = ' + JSON.stringify(eqDoc.scenarioRegime || [], null, 2) + ';\n\n'
  + 'export const indexShock = ' + JSON.stringify(eqDoc.indexShock || [], null, 2) + ';\n\n'
  + 'export const indexNote = ' + JSON.stringify(eqDoc.indexNote || '', null, 2) + ';\n\n'
  + 'export const sectorMap = ' + JSON.stringify(eqDoc.sectorMap || [], null, 2) + ';\n\n'
  + 'export const sectorScenario = ' + JSON.stringify(eqDoc.sectorScenario || [], null, 2) + ';\n\n'
  + 'export const sectorPrecedent = ' + JSON.stringify(eqDoc.sectorPrecedent || '', null, 2) + ';\n\n'
  + 'export const earningsSummary = ' + JSON.stringify(eqDoc.earningsSummary || '', null, 2) + ';\n\n'
  + 'export const passThrough = ' + JSON.stringify(eqDoc.passThrough || [], null, 2) + ';\n\n'
  + 'export const earningsScenario = ' + JSON.stringify(eqDoc.earningsScenario || [], null, 2) + ';\n\n'
  + 'export const factorRotation = ' + JSON.stringify(eqDoc.factorRotation || [], null, 2) + ';\n\n'
  + 'export const factorObservations = ' + JSON.stringify(eqDoc.factorObservations || [], null, 2) + ';\n\n'
  + 'export const countryMatrix = ' + JSON.stringify(eqDoc.countryMatrix || [], null, 2) + ';\n\n'
  + 'export const countryScenario = ' + JSON.stringify(eqDoc.countryScenario || [], null, 2) + ';\n\n'
  + 'export const gcc = ' + JSON.stringify(eqDoc.gcc || {}, null, 2) + ';\n\n'
  + 'export const gccScenario = ' + JSON.stringify(eqDoc.gccScenario || [], null, 2) + ';\n\n'
  + 'export const gccHedge = ' + JSON.stringify(eqDoc.gccHedge || '', null, 2) + ';\n\n'
  + 'export const flows = ' + JSON.stringify(eqDoc.flows || [], null, 2) + ';\n\n'
  + 'export const flowsNote = ' + JSON.stringify(eqDoc.flowsNote || '', null, 2) + ';\n\n'
  + 'export const volOptions = ' + JSON.stringify(eqDoc.volOptions || [], null, 2) + ';\n\n'
  + 'export const deleveraging = ' + JSON.stringify(eqDoc.deleveraging || '', null, 2) + ';\n\n'
  + 'export const gccFlows = ' + JSON.stringify(eqDoc.gccFlows || '', null, 2) + ';\n\n'
  + 'export const cryptoSpillover = ' + JSON.stringify(eqDoc.cryptoSpillover || '', null, 2) + ';\n\n'
  + 'export const scenarioTrades = ' + JSON.stringify(eqDoc.scenarioTrades || [], null, 2) + ';\n\n'
  + 'export const precedents = ' + JSON.stringify(eqDoc.precedents || [], null, 2) + ';\n\n'
  + 'export const upgradedConfidence = ' + JSON.stringify(eqDoc.upgradedConfidence || [], null, 2) + ';\n\n'
  + 'export const proxyOnly = ' + JSON.stringify(eqDoc.proxyOnly || [], null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(eqDoc.dataQuality || {}, null, 2) + ';\n\n'
  + 'export const relatedSectors = ' + JSON.stringify(eqDoc.relatedSectors || '', null, 2) + ';\n');


// SECTION 10 -> /markets/crypto (terminal node; consumes §8 equities + §9 cross-asset).
const crDoc = rd('crypto.json');
out('crypto.js', banner('crypto.json')
  + 'export const cards = ' + JSON.stringify(crDoc.cards.map(flatCard), null, 2) + ';\n\n'
  + 'export const keyTakeaways = ' + JSON.stringify(crDoc.keyTakeaways || [], null, 2) + ';\n\n'
  + 'export const scenarioRegime = ' + JSON.stringify(crDoc.scenarioRegime || [], null, 2) + ';\n\n'
  + 'export const crossAssetCompare = ' + JSON.stringify(crDoc.crossAssetCompare || [], null, 2) + ';\n\n'
  + 'export const havenTest = ' + JSON.stringify(crDoc.havenTest || [], null, 2) + ';\n\n'
  + 'export const stablecoinsTable = ' + JSON.stringify(crDoc.stablecoinsTable || [], null, 2) + ';\n\n'
  + 'export const namedVenues = ' + JSON.stringify(crDoc.namedVenues || [], null, 2) + ';\n\n'
  + 'export const signalHierarchy = ' + JSON.stringify(crDoc.signalHierarchy || [], null, 2) + ';\n\n'
  + 'export const leadingIndicators = ' + JSON.stringify(crDoc.leadingIndicators || [], null, 2) + ';\n\n'
  + 'export const scenarioTrades = ' + JSON.stringify(crDoc.scenarioTrades || [], null, 2) + ';\n\n'
  + 'export const failureModes = ' + JSON.stringify(crDoc.failureModes || [], null, 2) + ';\n\n'
  + 'export const sourceConflict = ' + JSON.stringify(crDoc.sourceConflict || [], null, 2) + ';\n\n'
  + 'export const highAnchors = ' + JSON.stringify(crDoc.highAnchors || [], null, 2) + ';\n\n'
  + 'export const proxyOnly = ' + JSON.stringify(crDoc.proxyOnly || [], null, 2) + ';\n\n'
  + 'export const adversarialClose = ' + JSON.stringify(crDoc.adversarialClose || [], null, 2) + ';\n\n'
  + 'export const dataQuality = ' + JSON.stringify(crDoc.dataQuality || {}, null, 2) + ';\n\n'
  + 'export const thesis = ' + JSON.stringify(crDoc.thesis || '', null, 2) + ';\n\n'
  + 'export const verdict = ' + JSON.stringify(crDoc.verdict || '', null, 2) + ';\n\n'
  + 'export const scenarioConclusion = ' + JSON.stringify(crDoc.scenarioConclusion || '', null, 2) + ';\n\n'
  + 'export const priceArc = ' + JSON.stringify(crDoc.priceArc || '', null, 2) + ';\n\n'
  + 'export const havenVerdict = ' + JSON.stringify(crDoc.havenVerdict || '', null, 2) + ';\n\n'
  + 'export const havenAdversarial = ' + JSON.stringify(crDoc.havenAdversarial || '', null, 2) + ';\n\n'
  + 'export const stablecoinSupply = ' + JSON.stringify(crDoc.stablecoinSupply || '', null, 2) + ';\n\n'
  + 'export const stablecoinPeg = ' + JSON.stringify(crDoc.stablecoinPeg || '', null, 2) + ';\n\n'
  + 'export const gulfRegulatory = ' + JSON.stringify(crDoc.gulfRegulatory || '', null, 2) + ';\n\n'
  + 'export const microNote = ' + JSON.stringify(crDoc.microNote || '', null, 2) + ';\n\n'
  + 'export const oct2025Proxy = ' + JSON.stringify(crDoc.oct2025Proxy || '', null, 2) + ';\n\n'
  + 'export const gulfCable = ' + JSON.stringify(crDoc.gulfCable || '', null, 2) + ';\n\n'
  + 'export const defiNote = ' + JSON.stringify(crDoc.defiNote || '', null, 2) + ';\n\n'
  + 'export const rwa = ' + JSON.stringify(crDoc.rwa || '', null, 2) + ';\n\n'
  + 'export const miningNote = ' + JSON.stringify(crDoc.miningNote || '', null, 2) + ';\n\n'
  + 'export const minerMargins = ' + JSON.stringify(crDoc.minerMargins || '', null, 2) + ';\n\n'
  + 'export const minerEquities = ' + JSON.stringify(crDoc.minerEquities || '', null, 2) + ';\n\n'
  + 'export const sanctionsFreeze = ' + JSON.stringify(crDoc.sanctionsFreeze || '', null, 2) + ';\n\n'
  + 'export const sanctionsContest = ' + JSON.stringify(crDoc.sanctionsContest || '', null, 2) + ';\n\n'
  + 'export const iranianRail = ' + JSON.stringify(crDoc.iranianRail || '', null, 2) + ';\n\n'
  + 'export const sanctionsVerdict = ' + JSON.stringify(crDoc.sanctionsVerdict || '', null, 2) + ';\n\n'
  + 'export const regulatoryAccel = ' + JSON.stringify(crDoc.regulatoryAccel || '', null, 2) + ';\n\n'
  + 'export const etfFlows = ' + JSON.stringify(crDoc.etfFlows || '', null, 2) + ';\n\n'
  + 'export const optionsSkew = ' + JSON.stringify(crDoc.optionsSkew || '', null, 2) + ';\n\n'
  + 'export const cryptoEquities = ' + JSON.stringify(crDoc.cryptoEquities || '', null, 2) + ';\n\n'
  + 'export const adoptionBifurcated = ' + JSON.stringify(crDoc.adoptionBifurcated || '', null, 2) + ';\n\n'
  + 'export const lowLatencyRefresh = ' + JSON.stringify(crDoc.lowLatencyRefresh || '', null, 2) + ';\n\n'
  + 'export const relatedSectors = ' + JSON.stringify(crDoc.relatedSectors || '', null, 2) + ';\n');


// P2 SCENARIO-STATE LEDGER -> scenariostates.js
const ssDoc = rd('scenario-states.json');
out('scenariostates.js', banner('scenario-states.json')
  + 'export const stateDefs = ' + JSON.stringify(ssDoc.stateDefs || {}, null, 2) + ';\n\n'
  + 'export const statusValues = ' + JSON.stringify(ssDoc.statusValues || [], null, 2) + ';\n\n'
  + 'export const scenarios = ' + JSON.stringify(ssDoc.scenarios || [], null, 2) + ';\n\n'
  + 'export const purpose = ' + JSON.stringify(ssDoc.purpose || '', null, 2) + ';\n');

// P5 FORWARD-CATALYST REGISTER -> catalysts.js
const catDoc = rd('catalysts.json');
out('catalysts.js', banner('catalysts.json')
  + 'export const catalysts = ' + JSON.stringify(catDoc.catalysts || [], null, 2) + ';\n\n'
  + 'export const statusValues = ' + JSON.stringify(catDoc.statusValues || [], null, 2) + ';\n\n'
  + 'export const purpose = ' + JSON.stringify(catDoc.purpose || '', null, 2) + ';\n');

console.log('done.');
