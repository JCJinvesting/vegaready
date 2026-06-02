// GENERATED from IranWarTracker/data/cascades/watch-metrics.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

// Status comparator (also used at build time to precompute each metric.status).
export const statusOf = (m) => {
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

export const metrics = [
  {
    "id": "weaponization.china.ree_magnet_yoy",
    "metric": "China REE-magnet export YoY",
    "geography": "China",
    "unit": "%",
    "value": -74,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": -20,
      "alert": -50,
      "critical": -74
    },
    "update_frequency": "monthly",
    "scenario_mapping": [],
    "source": {
      "name": "Defense One",
      "url": "https://www.defenseone.com/ideas/2025/07/how-chinas-new-rare-earth-export-controls-target-pentagonand-world/406606/",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2025-05",
    "page": "/structural/weaponization",
    "vertical": "Weaponization",
    "section": "§6",
    "signalNo": "6.1",
    "signalName": "China REE-magnet export YoY",
    "input": "China customs REE/magnet export volumes; ex-China NdFeB premium",
    "lead_lag": "Leading — a cut lifts defense procurement AND transition cost simultaneously",
    "assets": "Defense primes, EV/grid/magnet, ex-China REE miners (MP/Lynas/Arafura)",
    "false_positive": "Export-license noise vs genuine supply cut; China dependence pre-dates the conflict",
    "classification": "predictive",
    "stale_after": "40d",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "deglobalization.us.tariff_rate",
    "metric": "US avg effective tariff rate",
    "geography": "United States",
    "unit": "%",
    "value": 17.8,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 10,
      "alert": 15,
      "critical": 17.8
    },
    "update_frequency": "quarterly",
    "scenario_mapping": [],
    "source": {
      "name": "Yale Budget Lab",
      "url": "https://budgetlab.yale.edu/research/state-us-tariffs-may-12-2025",
      "tier": "T2"
    },
    "confidence": "HIGH",
    "as_of": "2025-05-12",
    "page": "/structural/deglobalization",
    "vertical": "De-globalization",
    "section": "§7",
    "signalNo": "7.2",
    "signalName": "US average effective tariff rate",
    "input": "Yale Budget Lab / USITC effective-tariff series; pre-vs-post-substitution gap",
    "lead_lag": "Confirming/structural — re-prices import-heavy sector margins (§8)",
    "assets": "Autos/consumer-disc/semis equities, CBAM importers, connector economies",
    "false_positive": "Announced vs effective rate (exemptions/substitution); the pre/post gap is the real gauge",
    "classification": "confirming",
    "stale_after": "100d",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "deglobalization.bloc_fdi_gap",
    "metric": "Bloc-to-bloc FDI gap",
    "geography": "Global",
    "unit": "%",
    "value": -30,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": -10,
      "alert": -20,
      "critical": -30
    },
    "update_frequency": "quarterly",
    "scenario_mapping": [],
    "source": {
      "name": "EBRD via International Banker",
      "url": "https://internationalbanker.com/finance/connector-economies-are-straddling-the-global-geopolitical-divide-for-potentially-sizeable-gains-in-trade/",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026",
    "page": "/structural/deglobalization",
    "vertical": "De-globalization",
    "section": "§7",
    "stale_after": "100d",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "insurance.vlcc_rate",
    "metric": "VLCC freight rate (Gulf)",
    "geography": "AG–East",
    "unit": "$/day",
    "value": 423000,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 100000,
      "alert": 250000,
      "critical": 400000
    },
    "update_frequency": "weekly",
    "scenario_mapping": [
      "hormuz_closure"
    ],
    "source": {
      "name": "Baltic Exchange / VegaReady insurance",
      "url": "/markets/insurance",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026",
    "page": "/markets/insurance",
    "vertical": "Insurance",
    "section": "§3",
    "signalNo": "3.2",
    "signalName": "VLCC freight rate (AG–East TCE)",
    "input": "Baltic Exchange TD3C TCE",
    "lead_lag": "Coincident — pure Hormuz-state nowcast; highest realized vol of the conflict",
    "assets": "Tanker equities (FRO/NAT/DHT), crude term structure, refiners, oil-importer cost base",
    "false_positive": "Decoupled from equity beta (idiosyncratic) — Hormuz nowcast only, not a broad signal",
    "classification": "coincident",
    "stale_after": "8d",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "water.gcc_reserve_days",
    "metric": "GCC stored-water reserve",
    "geography": "GCC",
    "unit": "days",
    "value": 2,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": 7,
      "alert": 3,
      "critical": 2
    },
    "update_frequency": "annual/event",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "source": {
      "name": "VegaReady water / Section 5",
      "url": "/markets/water",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026",
    "page": "/markets/water",
    "vertical": "Water",
    "section": "§5",
    "signalNo": "5.3",
    "signalName": "GCC stored-water reserve (existential tail)",
    "input": "GCC desal capacity-offline; reserve-day estimates; plant-strike events",
    "lead_lag": "Leading on a catastrophic-tail repricing (binary jump risk)",
    "assets": "GCC sovereign CDS, TASI/DFM/ADX, water-tech EPCs — highest-severity unpriced tail",
    "false_positive": "Deep Gulf fiscal cushions may absorb a strike without transmission — jump risk, not a continuous gauge",
    "classification": "predictive",
    "stale_after": "event",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "defense.gcc_patriot_drawdown",
    "metric": "GCC+Israel Patriot stock drawdown",
    "geography": "GCC + Israel",
    "unit": "% depleted",
    "value": 86,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 30,
      "alert": 60,
      "critical": 85
    },
    "update_frequency": "event",
    "scenario_mapping": [
      "hormuz_closure"
    ],
    "source": {
      "name": "Defence Ukraine / CSIS",
      "url": "/markets/defense",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026-05",
    "page": "/markets/defense",
    "vertical": "Defense",
    "section": "§6",
    "signalNo": "6.2",
    "signalName": "GCC+Israel interceptor-stock drawdown",
    "input": "CSIS-class inventory audits; Pentagon/manufacturer framework prints",
    "lead_lag": "Confirming — validates the ceasefire-insensitive procurement supercycle",
    "assets": "Defense primes (LMT/RTX/MBDA/Diehl/Rheinmetall), replenishment backlog, magnet/REE inputs",
    "false_positive": "Drawdown % figures are T2; European defense already cooled on valuation — demand ≠ price",
    "classification": "confirming",
    "stale_after": "event",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "nuclear.iran_heu60",
    "metric": "Iran 60%-enriched uranium stockpile",
    "geography": "Iran",
    "unit": "kg",
    "value": 440.9,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 200,
      "alert": 400,
      "critical": 440
    },
    "update_frequency": "event",
    "scenario_mapping": [
      "ceasefire"
    ],
    "source": {
      "name": "IAEA / FDD",
      "url": "/outlook/nuclear",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026-02 (last IAEA-verified)",
    "page": "/outlook/nuclear",
    "vertical": "Nuclear",
    "section": "§6",
    "signalNo": "6.3",
    "signalName": "Iran 60%-HEU stockpile / IAEA access",
    "input": "IAEA verification status; FDD/PGS assessments; Saudi-123 milestones",
    "lead_lag": "Leading on a proliferation-cascade jump (highest-stakes escalation)",
    "assets": "Gold/GVZ-OVX vol, regional risk premium, energy-security hedges, broad risk-off",
    "false_positive": "Assessments made during active conflict (PROVISIONAL); stockpile location disputed",
    "classification": "predictive",
    "stale_after": "event",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "credit.flight_to_quality_cash",
    "metric": "Flight-to-quality flows (cash + short UST)",
    "section": "§2",
    "signalNo": "2.2",
    "signalName": "Flight-to-quality flows (cash + short UST)",
    "unit": "$bn/wk",
    "value": 70.7,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 30,
      "alert": 50,
      "critical": 70
    },
    "update_frequency": "weekly",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "input": "MMF inflows (ICI); short-duration govt-bond fund flows (EPFR/BofA)",
    "lead_lag": "Coincident — the de-risking flow itself",
    "assets": "UST front-end, MMF, USD; inverse to risk assets and crypto",
    "false_positive": "EPFR/BofA micro-figures are press-derived (MEDIUM) — trust direction, not decimals",
    "classification": "coincident",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 ($70.7bn single week)",
    "page": "/markets/credit",
    "vertical": "Credit",
    "stale_after": "8d",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "crypto.btc_etf_flow",
    "metric": "Spot BTC ETF flow streak",
    "section": "§10",
    "signalNo": "10.3",
    "signalName": "Spot BTC ETF flow streak",
    "unit": "$m/day",
    "value": -733,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": -300,
      "alert": -500,
      "critical": -700
    },
    "update_frequency": "daily",
    "scenario_mapping": [
      "hormuz_closure",
      "ceasefire"
    ],
    "input": "SoSoValue / Farside / issuer daily creations-redemptions (IBIT/FBTC/GBTC)",
    "lead_lag": "Coincident — the crypto endpoint of the §9 rotation into cash/short-UST",
    "assets": "BTC, COIN/MSTR (§8 bridge), crypto beta broadly",
    "false_positive": "Flow micro-figures press-derived (T2); single-day prints noisy — trade the multi-day streak",
    "classification": "coincident",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026-05-27 (−$733.4M; 8-session −$2.6bn)",
    "page": "/markets/crypto",
    "vertical": "Crypto",
    "stale_after": "2d",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "chokepoint.babelmandeb.transit",
    "metric": "Bab el-Mandeb oil transit",
    "geography": "Bab el-Mandeb / Red Sea",
    "unit": "mb/d",
    "value": 4,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": 6,
      "alert": 4,
      "critical": 2
    },
    "update_frequency": "weekly",
    "scenario_mapping": [
      "oil_strike",
      "cable_severance"
    ],
    "source": {
      "name": "EIA",
      "url": "https://www.eia.gov",
      "tier": "T1"
    },
    "confidence": "HIGH",
    "as_of": "2024",
    "page": "/structural/chokepoints",
    "vertical": "Chokepoints",
    "section": "§7",
    "stale_after": "8d",
    "value_type": "baseline",
    "status": "alert"
  },
  {
    "id": "food.fao_price_index",
    "metric": "FAO Food Price Index",
    "geography": "Global",
    "unit": "index",
    "value": 130.7,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 120,
      "alert": 130,
      "critical": 150
    },
    "update_frequency": "monthly",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "source": {
      "name": "FAO",
      "url": "https://www.fao.org/worldfoodsituation/foodpricesindex/en/",
      "tier": "T1"
    },
    "confidence": "HIGH",
    "as_of": "2026-04",
    "page": "/structural/food",
    "vertical": "Food",
    "section": "§5",
    "signalNo": "5.2",
    "signalName": "FAO Food Price Index",
    "input": "FAO FFPI monthly",
    "lead_lag": "Coincident/confirming — realized global food-price gauge",
    "assets": "Soft commodities, food-importer fiscal/FX (Egypt/Pakistan), WFP-exposed",
    "false_positive": "Ample grain stocks muted 2026 vs 2022; level alone understates forward yield risk",
    "classification": "coincident",
    "stale_after": "40d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "property.lme_aluminium",
    "metric": "LME aluminium",
    "geography": "Global",
    "unit": "$/t",
    "value": 3546,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 3000,
      "alert": 3500,
      "critical": 4000
    },
    "update_frequency": "daily",
    "scenario_mapping": [
      "hormuz_closure"
    ],
    "source": {
      "name": "LME / VegaReady property",
      "url": "/markets/property",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026",
    "page": "/markets/property",
    "vertical": "Property",
    "section": "§4",
    "signalNo": "4.1",
    "signalName": "LME aluminium (metals supply shock)",
    "input": "LME 3-month aluminium; Alba/Gulf smelter power status",
    "lead_lag": "Coincident — Gulf smelters are power-and-Hormuz-exposed; metals re-price energy fast",
    "assets": "Aluminium, construction-materials equities, autos/manufacturing input cost, GCC megaprojects",
    "false_positive": "LME moves on global demand/China stimulus too — isolate the Gulf-supply component",
    "classification": "coincident",
    "stale_after": "2d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "property.construction_inflation",
    "metric": "GCC construction-cost inflation",
    "geography": "GCC",
    "unit": "% YoY",
    "value": 12.6,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 5,
      "alert": 10,
      "critical": 15
    },
    "update_frequency": "quarterly",
    "scenario_mapping": [
      "hormuz_closure"
    ],
    "source": {
      "name": "VegaReady property",
      "url": "/markets/property",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026",
    "page": "/markets/property",
    "vertical": "Property",
    "section": "§4",
    "signalNo": "4.2",
    "signalName": "GCC construction-cost inflation",
    "input": "Regional construction PMI / cost indices; megaproject capex (NEOM)",
    "lead_lag": "Confirming/lagging — materials+energy shock shows up in build costs with a lag",
    "assets": "GCC construction/real-estate equities, megaproject timelines, property REITs",
    "false_positive": "Structural (labor/land) inflation vs conflict-driven energy/materials inflation — separate",
    "classification": "confirming",
    "stale_after": "100d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "labor.philippines_remittance_yoy",
    "metric": "Philippines remittance YoY",
    "geography": "Philippines",
    "unit": "%",
    "value": -7.7,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": -3,
      "alert": -7,
      "critical": -12
    },
    "update_frequency": "monthly",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "source": {
      "name": "Bangko Sentral ng Pilipinas",
      "url": "/markets/labor",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026",
    "page": "/markets/labor",
    "vertical": "Labor",
    "section": "§4",
    "signalNo": "4.3",
    "signalName": "Migrant remittance YoY (Gulf→South Asia)",
    "input": "BSP, RBI, SBP remittance series",
    "lead_lag": "Lagging/structural — a Gulf labor slowdown shows up over months",
    "assets": "PKR/INR/PHP FX, EM external balances (compounds §2), recipient-EM staples",
    "false_positive": "Seasonality (Eid/holiday) and FX-conversion effects mask the labor signal",
    "classification": "confirming",
    "stale_after": "40d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "food.urea_price",
    "metric": "Urea price (global benchmark)",
    "geography": "Global",
    "unit": "$/t",
    "value": 850,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 600,
      "alert": 800,
      "critical": 1000
    },
    "update_frequency": "monthly",
    "scenario_mapping": [
      "hormuz_closure"
    ],
    "source": {
      "name": "World Bank",
      "url": "/markets/food-agriculture",
      "tier": "T1"
    },
    "confidence": "HIGH",
    "as_of": "2026-04",
    "page": "/markets/food-agriculture",
    "vertical": "Food",
    "section": "§5",
    "signalNo": "5.1",
    "signalName": "Urea price (global benchmark)",
    "input": "World Bank / NOLA / Middle East urea benchmarks",
    "lead_lag": "Leading with a 6–12mo fuse — fertilizer cost today suppresses next-season yields",
    "assets": "Fertilizer producers (CF/Nutrien/Yara/OCP), grains, food-importer sovereigns",
    "false_positive": "N-hemisphere pre-buying mutes immediate pass-through; the hit is forward, not spot",
    "classification": "predictive",
    "stale_after": "40d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "gold.etf_flow_divergence",
    "metric": "Gold ETF flow divergence (paper-out vs CB-in)",
    "section": "§1",
    "signalNo": "1.1",
    "signalName": "Gold ETF flow divergence (paper-out vs CB-in)",
    "unit": "$bn/mo",
    "value": -12.7,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": -5,
      "alert": -10,
      "critical": -15
    },
    "update_frequency": "monthly",
    "scenario_mapping": [
      "oil_strike",
      "hormuz_closure"
    ],
    "input": "N. American gold-ETF net flow (WGC); CB net purchases (WGC, Q1 +243.7t)",
    "lead_lag": "Leading — spec de-grossing precedes paper-gold weakness",
    "assets": "Gold paper-vs-physical premium, GLD/IAU, GDX miners",
    "false_positive": "A monetary (real-rate) drop ≠ loss of structural bid; CB buying offsets",
    "classification": "predictive",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "HIGH",
    "as_of": "2026-03 (−$12.7bn, largest in ≥5yr)",
    "page": "/markets/gold-fx",
    "vertical": "Gold & FX",
    "stale_after": "40d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "credit.gulf_tic_holdings",
    "metric": "Gulf petrodollar recycling (Saudi+UAE UST/TIC)",
    "section": "§2",
    "signalNo": "2.3",
    "signalName": "Gulf petrodollar recycling (Saudi+UAE UST/TIC)",
    "unit": "$bn/mo",
    "value": -16.6,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": -10,
      "alert": -16,
      "critical": -25
    },
    "update_frequency": "monthly",
    "scenario_mapping": [
      "hormuz_closure",
      "ceasefire"
    ],
    "input": "US Treasury TIC data; Saudi/UAE FX reserves; SWF allocation",
    "lead_lag": "Lagging/structural — confirms a petrodollar-recycling regime shift",
    "assets": "UST long-end supply, USD, Gulf SWF equity allocation",
    "false_positive": "TIC custody attribution is noisy; PIF allocation cut is unconfirmed",
    "classification": "confirming",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 (−$16.6bn print)",
    "page": "/markets/credit",
    "vertical": "Credit",
    "stale_after": "40d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "equities.factor_em_crowding",
    "metric": "Factor rotation / EM-crowding unwind",
    "section": "§8",
    "signalNo": "8.1",
    "signalName": "Factor rotation / EM-crowding unwind",
    "unit": "% wk",
    "value": -1,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": -0.5,
      "alert": -1,
      "critical": -1.5
    },
    "update_frequency": "weekly",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "input": "MSCI FactorLab (min-vol/quality/momentum/EM crowding)",
    "lead_lag": "Leading — the de-grossing that lifts cross-asset correlation (§9) and precedes crypto-beta stress",
    "assets": "Factor ETFs, EM tech/AI momentum (short), min-vol/quality (long), BTC/ETH downstream",
    "false_positive": "Factor-crowding scores are model-derived; a one-week unwind can reverse — confirm with breadth",
    "classification": "predictive",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 (EM crowding −1%, 4-sigma)",
    "page": "/markets/equities",
    "vertical": "Equities",
    "stale_after": "8d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "equities.breadth_dispersion",
    "metric": "Index-vs-stock dispersion (AI-insulation mask)",
    "section": "§8",
    "signalNo": "8.2",
    "signalName": "Index-vs-stock dispersion (AI-insulation mask)",
    "unit": "% >50-DMA",
    "value": 55,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": 60,
      "alert": 55,
      "critical": 45
    },
    "update_frequency": "daily",
    "scenario_mapping": [
      "ceasefire",
      "hormuz_closure"
    ],
    "input": "% S&P components >50-DMA vs index distance above 50-DMA; Mag-7 contribution",
    "lead_lag": "Leading/coincident — extreme divergence is a correction-risk regime warning",
    "assets": "S&P/Nasdaq fragility, equal- vs cap-weight, broad risk incl. crypto",
    "false_positive": "Narrow leadership can persist for quarters — a fragility flag, not a timing trigger",
    "classification": "confirming",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026",
    "page": "/markets/equities",
    "vertical": "Equities",
    "stale_after": "2d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "equities.tasi_dfm_spread",
    "metric": "GCC equity asymmetry (TASI–DFM spread)",
    "section": "§8",
    "signalNo": "8.3",
    "signalName": "GCC equity asymmetry (TASI–DFM spread)",
    "unit": "ppts",
    "value": 21,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 10,
      "alert": 20,
      "critical": 30
    },
    "update_frequency": "daily",
    "scenario_mapping": [
      "hormuz_closure",
      "ceasefire"
    ],
    "input": "TASI vs DFM/ADX/Qatar relative return; Aramco weight; bypass-pipeline status",
    "lead_lag": "Confirming — cleanly separates oil-revenue tailwind from security/expat risk",
    "assets": "TASI energy (long) vs DFM real-estate/banks (short); GCC CDS; Qatar LNG",
    "false_positive": "Domestic-investor floors distort short-term; the spread is the signal, not either leg",
    "classification": "confirming",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 (TASI +5% vs DFM −16%)",
    "page": "/markets/equities",
    "vertical": "Equities",
    "stale_after": "2d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "crossasset.stock_bond_corr",
    "metric": "Stock–bond correlation sign",
    "section": "§9",
    "signalNo": "9.2",
    "signalName": "Stock–bond correlation sign",
    "unit": "corr",
    "value": 0.3,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 0,
      "alert": 0.2,
      "critical": 0.5
    },
    "update_frequency": "weekly",
    "scenario_mapping": [
      "oil_strike",
      "hormuz_closure"
    ],
    "input": "Rolling SPX–UST(price) correlation; 10Y yield vs S&P co-movement",
    "lead_lag": "Leading regime indicator — the flip to positive preceded 2007/2015/2022 equity peaks",
    "assets": "60/40 books (diversification failure), long-duration UST, equity beta, BTC",
    "false_positive": "Window-dependent and unstable; confirm with the inflation-surprise driver, not the coefficient alone",
    "classification": "predictive",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 (turned POSITIVE / diversification failed)",
    "page": "/markets/cross-asset",
    "vertical": "Cross-Asset",
    "stale_after": "8d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "crossasset.vxeem",
    "metric": "VXEEM — EM-equity vol (durable stress gauge)",
    "section": "§9",
    "signalNo": "9.3",
    "signalName": "VXEEM — EM-equity vol (durable stress gauge)",
    "unit": "index",
    "value": 35.3,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 25,
      "alert": 35,
      "critical": 45
    },
    "update_frequency": "daily",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "input": "CBOE VXEEM (FRED VXEEMCLS)",
    "lead_lag": "Coincident-to-lagging but durable/low-noise — EM stress persisted while VIX normalized",
    "assets": "EM equity/FX/credit, EM-importer sovereigns, BTC (risk-thermometer peer)",
    "false_positive": "Less timely than OVX; use as the durable-regime confirm, not the entry",
    "classification": "confirming",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 (17.2→40.8 peak; stuck 35.3)",
    "page": "/markets/cross-asset",
    "vertical": "Cross-Asset",
    "stale_after": "2d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "crypto.deribit_skew",
    "metric": "Deribit 25-delta put–call skew",
    "section": "§10",
    "signalNo": "10.1",
    "signalName": "Deribit 25-delta put–call skew",
    "unit": "% 25Δ",
    "value": -5,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": -3,
      "alert": -5,
      "critical": -7
    },
    "update_frequency": "intraday",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "input": "Deribit 7-day 25Δ skew (BTC/ETH); ATM IV",
    "lead_lag": "Leading — skew turned negative before ATM IV moved; earliest crypto-native fear tell",
    "assets": "BTC/ETH options, perp positioning, crypto-equity (COIN/MSTR)",
    "false_positive": "Deeply negative skew with LOW ATM IV = controlled hedging, not panic",
    "classification": "predictive",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 (−5%/−7%, IV 35/43%)",
    "page": "/markets/crypto",
    "vertical": "Crypto",
    "stale_after": "1d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "crypto.perp_funding_oi",
    "metric": "Perp funding + open-interest regime",
    "section": "§10",
    "signalNo": "10.2",
    "signalName": "Perp funding + open-interest regime",
    "unit": "$bn OI",
    "value": 49,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": 55,
      "alert": 50,
      "critical": 45
    },
    "update_frequency": "hourly",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "input": "Perpetual funding rate + futures OI (Kaiko/CoinGlass/CCData)",
    "lead_lag": "Coincident-to-leading — negative funding + OI compression PRECEDED the worst headlines",
    "assets": "BTC/ETH perps/futures, CME basis trades, leveraged longs",
    "false_positive": "CEX liquidation/OI data is self-reported and a LOWER BOUND — no single-venue trades",
    "classification": "confirming",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 ($61→$49bn, neg funding through +14%)",
    "page": "/markets/crypto",
    "vertical": "Crypto",
    "stale_after": "1d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "chokepoint.hormuz.transit",
    "metric": "Strait of Hormuz oil transit",
    "geography": "Strait of Hormuz",
    "unit": "mb/d",
    "value": 14.6,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": 18,
      "alert": 12,
      "critical": 6
    },
    "update_frequency": "daily/event",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "source": {
      "name": "EIA",
      "url": "https://www.eia.gov/todayinenergy/detail.php?id=65504",
      "tier": "T1"
    },
    "confidence": "HIGH",
    "as_of": "2026-Q1 (realized, -29.7% YoY; EIA, PROVISIONAL)",
    "page": "/structural/chokepoints",
    "vertical": "Chokepoints",
    "section": "§7",
    "signalNo": "7.1",
    "signalName": "Strait of Hormuz oil transit",
    "input": "EIA / Kpler-Vortexa tanker tracking throughput",
    "lead_lag": "Leading→coincident — the master physical gauge the whole corpus hangs on",
    "assets": "Brent, GCC equity/credit, LNG, fertilizer, EM importers, crypto (via §9)",
    "false_positive": "Weather/maintenance/seasonality dips ≠ closure; pair with transit count + AWRP",
    "classification": "predictive",
    "baseline": 20,
    "value_type": "current_period",
    "stale_after": "2d",
    "status": "watch"
  },
  {
    "id": "credit.embi_spread",
    "metric": "EM sovereign spread (EMBI) vs pre-war",
    "geography": "Emerging markets",
    "unit": "bps",
    "value": 35,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 25,
      "alert": 50,
      "critical": 100
    },
    "update_frequency": "weekly",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "source": {
      "name": "JPMorgan EMBI / VegaReady credit",
      "url": "/markets/credit",
      "tier": "T2"
    },
    "confidence": "HIGH",
    "as_of": "2026-05-28",
    "page": "/markets/credit",
    "vertical": "Credit",
    "section": "§2",
    "signalNo": "2.1",
    "signalName": "EM sovereign spread (EMBI/CDS) vs pre-war",
    "input": "JPM EMBI Global Diversified; per-name CDS (Egypt, Pakistan, Iraq)",
    "lead_lag": "Leading — credit re-prices fiscal/FX stress before EM equity capitulates",
    "assets": "EM sovereign debt, EM FX, EM-importer equity, food-import sovereigns",
    "false_positive": "Global-rate beta vs idiosyncratic conflict stress — decompose vs UST",
    "classification": "predictive",
    "stale_after": "8d",
    "value_type": "current",
    "status": "watch"
  },
  {
    "id": "insurance.awrp_hull",
    "metric": "Additional War Risk Premium (Gulf hull)",
    "geography": "Strait of Hormuz",
    "unit": "% hull value",
    "value": 1,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 0.5,
      "alert": 2,
      "critical": 5
    },
    "update_frequency": "weekly",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "source": {
      "name": "Lloyd's / Joint War Committee",
      "url": "/markets/insurance",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026-05 (peaked 7.5%)",
    "page": "/markets/insurance",
    "vertical": "Insurance",
    "section": "§3",
    "signalNo": "3.1",
    "signalName": "Additional War-Risk Premium (Gulf hull)",
    "input": "Lloyd's / Joint War Committee listed areas + market AWRP quotes (Platts)",
    "lead_lag": "Leading — insurers price Hormuz risk ahead of physical disruption and the oil premium",
    "assets": "Brent (delivered-cost floor), tanker equities, marine reinsurers, Gulf exporters",
    "false_positive": "Quotes are proprietary/venue-varying; a single broker print isn’t the market",
    "classification": "predictive",
    "stale_after": "8d",
    "value_type": "current",
    "status": "watch"
  },
  {
    "id": "fx.dxy_dollar_vix",
    "metric": "DXY surge + dollar–VIX positive regime",
    "section": "§1",
    "signalNo": "1.2",
    "signalName": "DXY surge + dollar–VIX positive regime",
    "unit": "index",
    "value": 100.53,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 100,
      "alert": 101,
      "critical": 102
    },
    "update_frequency": "daily",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "input": "DXY (ICE); dollar–VIX rolling correlation sign",
    "lead_lag": "Coincident — the dollar IS the haven (US net energy exporter)",
    "assets": "EM FX (short), EM equity/credit, gold (headwind), BTC (inverse)",
    "false_positive": "Strategist consensus called the 2026 surge mean-reverting — don’t extrapolate",
    "classification": "coincident",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 peak 100.53 (+3.12%)",
    "page": "/markets/gold-fx",
    "vertical": "Gold & FX",
    "stale_after": "2d",
    "value_type": "current",
    "status": "watch"
  },
  {
    "id": "fx.usdjpy_carry",
    "metric": "Yen-carry / BOJ-intervention stress",
    "section": "§1",
    "signalNo": "1.3",
    "signalName": "Yen-carry / BOJ-intervention stress",
    "unit": "USD/JPY",
    "value": 159,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 155,
      "alert": 160,
      "critical": 165
    },
    "update_frequency": "daily/event",
    "scenario_mapping": [
      "hormuz_closure",
      "ceasefire"
    ],
    "input": "USD/JPY; BOJ/MoF intervention size (¥11.7tn 2026)",
    "lead_lag": "Leading on global risk-off (carry unwind is a liquidity amplifier)",
    "assets": "JPY, Nikkei, global risk assets, UST",
    "false_positive": "Verbal intervention ≠ actual; size off confirmed flows only",
    "classification": "confirming",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 (¥11.7tn intervened)",
    "page": "/markets/gold-fx",
    "vertical": "Gold & FX",
    "stale_after": "2d",
    "value_type": "current",
    "status": "watch"
  },
  {
    "id": "insurance.pi_war_cover",
    "metric": "P&I war-risk cover withdrawal",
    "section": "§3",
    "signalNo": "3.3",
    "signalName": "P&I war-risk cover withdrawal",
    "unit": "clubs",
    "value": 2,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 1,
      "alert": 3,
      "critical": 5
    },
    "update_frequency": "event",
    "scenario_mapping": [
      "hormuz_closure",
      "cable_severance"
    ],
    "input": "IG P&I club / war-risk underwriter cover-withdrawal notices",
    "lead_lag": "Leading/confirming — cover withdrawal precedes effective capacity loss + freight spikes",
    "assets": "Shipping capacity, food/energy delivery (§5), freight-exposed CPI",
    "false_positive": "Restriction ≠ total withdrawal; scope (flag/route) matters",
    "classification": "confirming",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026-03 (occurred)",
    "page": "/markets/insurance",
    "vertical": "Insurance",
    "stale_after": "event",
    "value_type": "current",
    "status": "watch"
  },
  {
    "id": "crossasset.ovx",
    "metric": "OVX — crude implied vol (cleanest conflict gauge)",
    "section": "§9",
    "signalNo": "9.1",
    "signalName": "OVX — crude implied vol (cleanest conflict gauge)",
    "unit": "index",
    "value": 58,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 40,
      "alert": 60,
      "critical": 100
    },
    "update_frequency": "daily",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "input": "CBOE OVX (FRED OVXCLS)",
    "lead_lag": "Leading — OVX peaked Mar 11 ahead of Brent spot; the shock lived in the commodity complex",
    "assets": "Brent, energy equity, BTC (re-prices after OVX), broad risk via §9 regime",
    "false_positive": "Lowest-noise gauge; the trap is treating VIX normalization as all-clear while OVX stays high",
    "classification": "predictive",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "HIGH",
    "as_of": "2026 (28→120.9 peak; ~58 May)",
    "page": "/markets/cross-asset",
    "vertical": "Cross-Asset",
    "stale_after": "2d",
    "value_type": "current",
    "status": "watch"
  },
  {
    "id": "digital.redsea.cable_faults",
    "metric": "Red Sea concurrent cable faults",
    "geography": "Red Sea / Bab el-Mandeb",
    "unit": "count",
    "value": 1,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 2,
      "alert": 3,
      "critical": 4
    },
    "update_frequency": "daily/event",
    "scenario_mapping": [
      "cable_severance"
    ],
    "source": {
      "name": "TeleGeography / ICPC",
      "url": "https://www.csis.org/analysis/strategic-future-subsea-cables-egypt-case-study",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026-05",
    "page": "/structural/digital",
    "vertical": "Digital",
    "section": "§7",
    "signalNo": "7.3",
    "signalName": "Red Sea concurrent cable faults",
    "input": "TeleGeography / ICPC / Starboard fault feeds; repair-vessel ETA",
    "lead_lag": "Leading on cable_severance (binary event)",
    "assets": "Regional connectivity, telecom resilience, EM fintech, crypto venue latency",
    "false_positive": "Documented FP — cable cuts historically did NOT move VIX/MOVE; do not size broad-vol hedge to this",
    "classification": "predictive",
    "stale_after": "2d",
    "value_type": "current",
    "status": "ok"
  },
  {
    "id": "gold.spot",
    "metric": "Gold spot (safe-haven gauge)",
    "geography": "Global",
    "unit": "$/oz",
    "value": 4099,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 4500,
      "alert": 5000,
      "critical": 5500
    },
    "update_frequency": "daily",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "source": {
      "name": "World Gold Council / VegaReady gold-fx",
      "url": "/markets/gold-fx",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 (trough $4,099 off $5,595 ATH)",
    "page": "/markets/gold-fx",
    "vertical": "Gold & FX",
    "section": "§1",
    "stale_after": "2d",
    "value_type": "current",
    "status": "ok"
  }
];

export const summary = {
  "critical": 9,
  "alert": 15,
  "watch": 7,
  "ok": 2,
  "total": 33
};

export const byScenario = {
  "hormuz_closure": [
    "insurance.vlcc_rate",
    "water.gcc_reserve_days",
    "defense.gcc_patriot_drawdown",
    "credit.flight_to_quality_cash",
    "crypto.btc_etf_flow",
    "food.fao_price_index",
    "property.lme_aluminium",
    "property.construction_inflation",
    "labor.philippines_remittance_yoy",
    "food.urea_price",
    "gold.etf_flow_divergence",
    "credit.gulf_tic_holdings",
    "equities.factor_em_crowding",
    "equities.breadth_dispersion",
    "equities.tasi_dfm_spread",
    "crossasset.stock_bond_corr",
    "crossasset.vxeem",
    "crypto.deribit_skew",
    "crypto.perp_funding_oi",
    "chokepoint.hormuz.transit",
    "credit.embi_spread",
    "insurance.awrp_hull",
    "fx.dxy_dollar_vix",
    "fx.usdjpy_carry",
    "insurance.pi_war_cover",
    "crossasset.ovx",
    "gold.spot"
  ],
  "oil_strike": [
    "water.gcc_reserve_days",
    "credit.flight_to_quality_cash",
    "chokepoint.babelmandeb.transit",
    "food.fao_price_index",
    "labor.philippines_remittance_yoy",
    "gold.etf_flow_divergence",
    "equities.factor_em_crowding",
    "crossasset.stock_bond_corr",
    "crossasset.vxeem",
    "crypto.deribit_skew",
    "crypto.perp_funding_oi",
    "chokepoint.hormuz.transit",
    "credit.embi_spread",
    "insurance.awrp_hull",
    "fx.dxy_dollar_vix",
    "crossasset.ovx",
    "gold.spot"
  ],
  "cable_severance": [
    "chokepoint.babelmandeb.transit",
    "insurance.pi_war_cover",
    "digital.redsea.cable_faults"
  ],
  "ceasefire": [
    "nuclear.iran_heu60",
    "crypto.btc_etf_flow",
    "credit.gulf_tic_holdings",
    "equities.breadth_dispersion",
    "equities.tasi_dfm_spread",
    "fx.usdjpy_carry"
  ]
};

export const signalCatalog = [
  {
    "id": "gold.etf_flow_divergence",
    "metric": "Gold ETF flow divergence (paper-out vs CB-in)",
    "section": "§1",
    "signalNo": "1.1",
    "signalName": "Gold ETF flow divergence (paper-out vs CB-in)",
    "unit": "$bn/mo",
    "value": -12.7,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": -5,
      "alert": -10,
      "critical": -15
    },
    "update_frequency": "monthly",
    "scenario_mapping": [
      "oil_strike",
      "hormuz_closure"
    ],
    "input": "N. American gold-ETF net flow (WGC); CB net purchases (WGC, Q1 +243.7t)",
    "lead_lag": "Leading — spec de-grossing precedes paper-gold weakness",
    "assets": "Gold paper-vs-physical premium, GLD/IAU, GDX miners",
    "false_positive": "A monetary (real-rate) drop ≠ loss of structural bid; CB buying offsets",
    "classification": "predictive",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "HIGH",
    "as_of": "2026-03 (−$12.7bn, largest in ≥5yr)",
    "page": "/markets/gold-fx",
    "vertical": "Gold & FX",
    "stale_after": "40d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "fx.dxy_dollar_vix",
    "metric": "DXY surge + dollar–VIX positive regime",
    "section": "§1",
    "signalNo": "1.2",
    "signalName": "DXY surge + dollar–VIX positive regime",
    "unit": "index",
    "value": 100.53,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 100,
      "alert": 101,
      "critical": 102
    },
    "update_frequency": "daily",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "input": "DXY (ICE); dollar–VIX rolling correlation sign",
    "lead_lag": "Coincident — the dollar IS the haven (US net energy exporter)",
    "assets": "EM FX (short), EM equity/credit, gold (headwind), BTC (inverse)",
    "false_positive": "Strategist consensus called the 2026 surge mean-reverting — don’t extrapolate",
    "classification": "coincident",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 peak 100.53 (+3.12%)",
    "page": "/markets/gold-fx",
    "vertical": "Gold & FX",
    "stale_after": "2d",
    "value_type": "current",
    "status": "watch"
  },
  {
    "id": "fx.usdjpy_carry",
    "metric": "Yen-carry / BOJ-intervention stress",
    "section": "§1",
    "signalNo": "1.3",
    "signalName": "Yen-carry / BOJ-intervention stress",
    "unit": "USD/JPY",
    "value": 159,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 155,
      "alert": 160,
      "critical": 165
    },
    "update_frequency": "daily/event",
    "scenario_mapping": [
      "hormuz_closure",
      "ceasefire"
    ],
    "input": "USD/JPY; BOJ/MoF intervention size (¥11.7tn 2026)",
    "lead_lag": "Leading on global risk-off (carry unwind is a liquidity amplifier)",
    "assets": "JPY, Nikkei, global risk assets, UST",
    "false_positive": "Verbal intervention ≠ actual; size off confirmed flows only",
    "classification": "confirming",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 (¥11.7tn intervened)",
    "page": "/markets/gold-fx",
    "vertical": "Gold & FX",
    "stale_after": "2d",
    "value_type": "current",
    "status": "watch"
  },
  {
    "id": "credit.embi_spread",
    "metric": "EM sovereign spread (EMBI) vs pre-war",
    "geography": "Emerging markets",
    "unit": "bps",
    "value": 35,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 25,
      "alert": 50,
      "critical": 100
    },
    "update_frequency": "weekly",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "source": {
      "name": "JPMorgan EMBI / VegaReady credit",
      "url": "/markets/credit",
      "tier": "T2"
    },
    "confidence": "HIGH",
    "as_of": "2026-05-28",
    "page": "/markets/credit",
    "vertical": "Credit",
    "section": "§2",
    "signalNo": "2.1",
    "signalName": "EM sovereign spread (EMBI/CDS) vs pre-war",
    "input": "JPM EMBI Global Diversified; per-name CDS (Egypt, Pakistan, Iraq)",
    "lead_lag": "Leading — credit re-prices fiscal/FX stress before EM equity capitulates",
    "assets": "EM sovereign debt, EM FX, EM-importer equity, food-import sovereigns",
    "false_positive": "Global-rate beta vs idiosyncratic conflict stress — decompose vs UST",
    "classification": "predictive",
    "stale_after": "8d",
    "value_type": "current",
    "status": "watch"
  },
  {
    "id": "credit.flight_to_quality_cash",
    "metric": "Flight-to-quality flows (cash + short UST)",
    "section": "§2",
    "signalNo": "2.2",
    "signalName": "Flight-to-quality flows (cash + short UST)",
    "unit": "$bn/wk",
    "value": 70.7,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 30,
      "alert": 50,
      "critical": 70
    },
    "update_frequency": "weekly",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "input": "MMF inflows (ICI); short-duration govt-bond fund flows (EPFR/BofA)",
    "lead_lag": "Coincident — the de-risking flow itself",
    "assets": "UST front-end, MMF, USD; inverse to risk assets and crypto",
    "false_positive": "EPFR/BofA micro-figures are press-derived (MEDIUM) — trust direction, not decimals",
    "classification": "coincident",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 ($70.7bn single week)",
    "page": "/markets/credit",
    "vertical": "Credit",
    "stale_after": "8d",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "credit.gulf_tic_holdings",
    "metric": "Gulf petrodollar recycling (Saudi+UAE UST/TIC)",
    "section": "§2",
    "signalNo": "2.3",
    "signalName": "Gulf petrodollar recycling (Saudi+UAE UST/TIC)",
    "unit": "$bn/mo",
    "value": -16.6,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": -10,
      "alert": -16,
      "critical": -25
    },
    "update_frequency": "monthly",
    "scenario_mapping": [
      "hormuz_closure",
      "ceasefire"
    ],
    "input": "US Treasury TIC data; Saudi/UAE FX reserves; SWF allocation",
    "lead_lag": "Lagging/structural — confirms a petrodollar-recycling regime shift",
    "assets": "UST long-end supply, USD, Gulf SWF equity allocation",
    "false_positive": "TIC custody attribution is noisy; PIF allocation cut is unconfirmed",
    "classification": "confirming",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 (−$16.6bn print)",
    "page": "/markets/credit",
    "vertical": "Credit",
    "stale_after": "40d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "insurance.awrp_hull",
    "metric": "Additional War Risk Premium (Gulf hull)",
    "geography": "Strait of Hormuz",
    "unit": "% hull value",
    "value": 1,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 0.5,
      "alert": 2,
      "critical": 5
    },
    "update_frequency": "weekly",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "source": {
      "name": "Lloyd's / Joint War Committee",
      "url": "/markets/insurance",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026-05 (peaked 7.5%)",
    "page": "/markets/insurance",
    "vertical": "Insurance",
    "section": "§3",
    "signalNo": "3.1",
    "signalName": "Additional War-Risk Premium (Gulf hull)",
    "input": "Lloyd's / Joint War Committee listed areas + market AWRP quotes (Platts)",
    "lead_lag": "Leading — insurers price Hormuz risk ahead of physical disruption and the oil premium",
    "assets": "Brent (delivered-cost floor), tanker equities, marine reinsurers, Gulf exporters",
    "false_positive": "Quotes are proprietary/venue-varying; a single broker print isn’t the market",
    "classification": "predictive",
    "stale_after": "8d",
    "value_type": "current",
    "status": "watch"
  },
  {
    "id": "insurance.vlcc_rate",
    "metric": "VLCC freight rate (Gulf)",
    "geography": "AG–East",
    "unit": "$/day",
    "value": 423000,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 100000,
      "alert": 250000,
      "critical": 400000
    },
    "update_frequency": "weekly",
    "scenario_mapping": [
      "hormuz_closure"
    ],
    "source": {
      "name": "Baltic Exchange / VegaReady insurance",
      "url": "/markets/insurance",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026",
    "page": "/markets/insurance",
    "vertical": "Insurance",
    "section": "§3",
    "signalNo": "3.2",
    "signalName": "VLCC freight rate (AG–East TCE)",
    "input": "Baltic Exchange TD3C TCE",
    "lead_lag": "Coincident — pure Hormuz-state nowcast; highest realized vol of the conflict",
    "assets": "Tanker equities (FRO/NAT/DHT), crude term structure, refiners, oil-importer cost base",
    "false_positive": "Decoupled from equity beta (idiosyncratic) — Hormuz nowcast only, not a broad signal",
    "classification": "coincident",
    "stale_after": "8d",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "insurance.pi_war_cover",
    "metric": "P&I war-risk cover withdrawal",
    "section": "§3",
    "signalNo": "3.3",
    "signalName": "P&I war-risk cover withdrawal",
    "unit": "clubs",
    "value": 2,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 1,
      "alert": 3,
      "critical": 5
    },
    "update_frequency": "event",
    "scenario_mapping": [
      "hormuz_closure",
      "cable_severance"
    ],
    "input": "IG P&I club / war-risk underwriter cover-withdrawal notices",
    "lead_lag": "Leading/confirming — cover withdrawal precedes effective capacity loss + freight spikes",
    "assets": "Shipping capacity, food/energy delivery (§5), freight-exposed CPI",
    "false_positive": "Restriction ≠ total withdrawal; scope (flag/route) matters",
    "classification": "confirming",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026-03 (occurred)",
    "page": "/markets/insurance",
    "vertical": "Insurance",
    "stale_after": "event",
    "value_type": "current",
    "status": "watch"
  },
  {
    "id": "property.lme_aluminium",
    "metric": "LME aluminium",
    "geography": "Global",
    "unit": "$/t",
    "value": 3546,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 3000,
      "alert": 3500,
      "critical": 4000
    },
    "update_frequency": "daily",
    "scenario_mapping": [
      "hormuz_closure"
    ],
    "source": {
      "name": "LME / VegaReady property",
      "url": "/markets/property",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026",
    "page": "/markets/property",
    "vertical": "Property",
    "section": "§4",
    "signalNo": "4.1",
    "signalName": "LME aluminium (metals supply shock)",
    "input": "LME 3-month aluminium; Alba/Gulf smelter power status",
    "lead_lag": "Coincident — Gulf smelters are power-and-Hormuz-exposed; metals re-price energy fast",
    "assets": "Aluminium, construction-materials equities, autos/manufacturing input cost, GCC megaprojects",
    "false_positive": "LME moves on global demand/China stimulus too — isolate the Gulf-supply component",
    "classification": "coincident",
    "stale_after": "2d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "property.construction_inflation",
    "metric": "GCC construction-cost inflation",
    "geography": "GCC",
    "unit": "% YoY",
    "value": 12.6,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 5,
      "alert": 10,
      "critical": 15
    },
    "update_frequency": "quarterly",
    "scenario_mapping": [
      "hormuz_closure"
    ],
    "source": {
      "name": "VegaReady property",
      "url": "/markets/property",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026",
    "page": "/markets/property",
    "vertical": "Property",
    "section": "§4",
    "signalNo": "4.2",
    "signalName": "GCC construction-cost inflation",
    "input": "Regional construction PMI / cost indices; megaproject capex (NEOM)",
    "lead_lag": "Confirming/lagging — materials+energy shock shows up in build costs with a lag",
    "assets": "GCC construction/real-estate equities, megaproject timelines, property REITs",
    "false_positive": "Structural (labor/land) inflation vs conflict-driven energy/materials inflation — separate",
    "classification": "confirming",
    "stale_after": "100d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "labor.philippines_remittance_yoy",
    "metric": "Philippines remittance YoY",
    "geography": "Philippines",
    "unit": "%",
    "value": -7.7,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": -3,
      "alert": -7,
      "critical": -12
    },
    "update_frequency": "monthly",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "source": {
      "name": "Bangko Sentral ng Pilipinas",
      "url": "/markets/labor",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026",
    "page": "/markets/labor",
    "vertical": "Labor",
    "section": "§4",
    "signalNo": "4.3",
    "signalName": "Migrant remittance YoY (Gulf→South Asia)",
    "input": "BSP, RBI, SBP remittance series",
    "lead_lag": "Lagging/structural — a Gulf labor slowdown shows up over months",
    "assets": "PKR/INR/PHP FX, EM external balances (compounds §2), recipient-EM staples",
    "false_positive": "Seasonality (Eid/holiday) and FX-conversion effects mask the labor signal",
    "classification": "confirming",
    "stale_after": "40d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "food.urea_price",
    "metric": "Urea price (global benchmark)",
    "geography": "Global",
    "unit": "$/t",
    "value": 850,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 600,
      "alert": 800,
      "critical": 1000
    },
    "update_frequency": "monthly",
    "scenario_mapping": [
      "hormuz_closure"
    ],
    "source": {
      "name": "World Bank",
      "url": "/markets/food-agriculture",
      "tier": "T1"
    },
    "confidence": "HIGH",
    "as_of": "2026-04",
    "page": "/markets/food-agriculture",
    "vertical": "Food",
    "section": "§5",
    "signalNo": "5.1",
    "signalName": "Urea price (global benchmark)",
    "input": "World Bank / NOLA / Middle East urea benchmarks",
    "lead_lag": "Leading with a 6–12mo fuse — fertilizer cost today suppresses next-season yields",
    "assets": "Fertilizer producers (CF/Nutrien/Yara/OCP), grains, food-importer sovereigns",
    "false_positive": "N-hemisphere pre-buying mutes immediate pass-through; the hit is forward, not spot",
    "classification": "predictive",
    "stale_after": "40d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "food.fao_price_index",
    "metric": "FAO Food Price Index",
    "geography": "Global",
    "unit": "index",
    "value": 130.7,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 120,
      "alert": 130,
      "critical": 150
    },
    "update_frequency": "monthly",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "source": {
      "name": "FAO",
      "url": "https://www.fao.org/worldfoodsituation/foodpricesindex/en/",
      "tier": "T1"
    },
    "confidence": "HIGH",
    "as_of": "2026-04",
    "page": "/structural/food",
    "vertical": "Food",
    "section": "§5",
    "signalNo": "5.2",
    "signalName": "FAO Food Price Index",
    "input": "FAO FFPI monthly",
    "lead_lag": "Coincident/confirming — realized global food-price gauge",
    "assets": "Soft commodities, food-importer fiscal/FX (Egypt/Pakistan), WFP-exposed",
    "false_positive": "Ample grain stocks muted 2026 vs 2022; level alone understates forward yield risk",
    "classification": "coincident",
    "stale_after": "40d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "water.gcc_reserve_days",
    "metric": "GCC stored-water reserve",
    "geography": "GCC",
    "unit": "days",
    "value": 2,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": 7,
      "alert": 3,
      "critical": 2
    },
    "update_frequency": "annual/event",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "source": {
      "name": "VegaReady water / Section 5",
      "url": "/markets/water",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026",
    "page": "/markets/water",
    "vertical": "Water",
    "section": "§5",
    "signalNo": "5.3",
    "signalName": "GCC stored-water reserve (existential tail)",
    "input": "GCC desal capacity-offline; reserve-day estimates; plant-strike events",
    "lead_lag": "Leading on a catastrophic-tail repricing (binary jump risk)",
    "assets": "GCC sovereign CDS, TASI/DFM/ADX, water-tech EPCs — highest-severity unpriced tail",
    "false_positive": "Deep Gulf fiscal cushions may absorb a strike without transmission — jump risk, not a continuous gauge",
    "classification": "predictive",
    "stale_after": "event",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "weaponization.china.ree_magnet_yoy",
    "metric": "China REE-magnet export YoY",
    "geography": "China",
    "unit": "%",
    "value": -74,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": -20,
      "alert": -50,
      "critical": -74
    },
    "update_frequency": "monthly",
    "scenario_mapping": [],
    "source": {
      "name": "Defense One",
      "url": "https://www.defenseone.com/ideas/2025/07/how-chinas-new-rare-earth-export-controls-target-pentagonand-world/406606/",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2025-05",
    "page": "/structural/weaponization",
    "vertical": "Weaponization",
    "section": "§6",
    "signalNo": "6.1",
    "signalName": "China REE-magnet export YoY",
    "input": "China customs REE/magnet export volumes; ex-China NdFeB premium",
    "lead_lag": "Leading — a cut lifts defense procurement AND transition cost simultaneously",
    "assets": "Defense primes, EV/grid/magnet, ex-China REE miners (MP/Lynas/Arafura)",
    "false_positive": "Export-license noise vs genuine supply cut; China dependence pre-dates the conflict",
    "classification": "predictive",
    "stale_after": "40d",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "defense.gcc_patriot_drawdown",
    "metric": "GCC+Israel Patriot stock drawdown",
    "geography": "GCC + Israel",
    "unit": "% depleted",
    "value": 86,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 30,
      "alert": 60,
      "critical": 85
    },
    "update_frequency": "event",
    "scenario_mapping": [
      "hormuz_closure"
    ],
    "source": {
      "name": "Defence Ukraine / CSIS",
      "url": "/markets/defense",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026-05",
    "page": "/markets/defense",
    "vertical": "Defense",
    "section": "§6",
    "signalNo": "6.2",
    "signalName": "GCC+Israel interceptor-stock drawdown",
    "input": "CSIS-class inventory audits; Pentagon/manufacturer framework prints",
    "lead_lag": "Confirming — validates the ceasefire-insensitive procurement supercycle",
    "assets": "Defense primes (LMT/RTX/MBDA/Diehl/Rheinmetall), replenishment backlog, magnet/REE inputs",
    "false_positive": "Drawdown % figures are T2; European defense already cooled on valuation — demand ≠ price",
    "classification": "confirming",
    "stale_after": "event",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "nuclear.iran_heu60",
    "metric": "Iran 60%-enriched uranium stockpile",
    "geography": "Iran",
    "unit": "kg",
    "value": 440.9,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 200,
      "alert": 400,
      "critical": 440
    },
    "update_frequency": "event",
    "scenario_mapping": [
      "ceasefire"
    ],
    "source": {
      "name": "IAEA / FDD",
      "url": "/outlook/nuclear",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026-02 (last IAEA-verified)",
    "page": "/outlook/nuclear",
    "vertical": "Nuclear",
    "section": "§6",
    "signalNo": "6.3",
    "signalName": "Iran 60%-HEU stockpile / IAEA access",
    "input": "IAEA verification status; FDD/PGS assessments; Saudi-123 milestones",
    "lead_lag": "Leading on a proliferation-cascade jump (highest-stakes escalation)",
    "assets": "Gold/GVZ-OVX vol, regional risk premium, energy-security hedges, broad risk-off",
    "false_positive": "Assessments made during active conflict (PROVISIONAL); stockpile location disputed",
    "classification": "predictive",
    "stale_after": "event",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "chokepoint.hormuz.transit",
    "metric": "Strait of Hormuz oil transit",
    "geography": "Strait of Hormuz",
    "unit": "mb/d",
    "value": 14.6,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": 18,
      "alert": 12,
      "critical": 6
    },
    "update_frequency": "daily/event",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "source": {
      "name": "EIA",
      "url": "https://www.eia.gov/todayinenergy/detail.php?id=65504",
      "tier": "T1"
    },
    "confidence": "HIGH",
    "as_of": "2026-Q1 (realized, -29.7% YoY; EIA, PROVISIONAL)",
    "page": "/structural/chokepoints",
    "vertical": "Chokepoints",
    "section": "§7",
    "signalNo": "7.1",
    "signalName": "Strait of Hormuz oil transit",
    "input": "EIA / Kpler-Vortexa tanker tracking throughput",
    "lead_lag": "Leading→coincident — the master physical gauge the whole corpus hangs on",
    "assets": "Brent, GCC equity/credit, LNG, fertilizer, EM importers, crypto (via §9)",
    "false_positive": "Weather/maintenance/seasonality dips ≠ closure; pair with transit count + AWRP",
    "classification": "predictive",
    "baseline": 20,
    "value_type": "current_period",
    "stale_after": "2d",
    "status": "watch"
  },
  {
    "id": "deglobalization.us.tariff_rate",
    "metric": "US avg effective tariff rate",
    "geography": "United States",
    "unit": "%",
    "value": 17.8,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 10,
      "alert": 15,
      "critical": 17.8
    },
    "update_frequency": "quarterly",
    "scenario_mapping": [],
    "source": {
      "name": "Yale Budget Lab",
      "url": "https://budgetlab.yale.edu/research/state-us-tariffs-may-12-2025",
      "tier": "T2"
    },
    "confidence": "HIGH",
    "as_of": "2025-05-12",
    "page": "/structural/deglobalization",
    "vertical": "De-globalization",
    "section": "§7",
    "signalNo": "7.2",
    "signalName": "US average effective tariff rate",
    "input": "Yale Budget Lab / USITC effective-tariff series; pre-vs-post-substitution gap",
    "lead_lag": "Confirming/structural — re-prices import-heavy sector margins (§8)",
    "assets": "Autos/consumer-disc/semis equities, CBAM importers, connector economies",
    "false_positive": "Announced vs effective rate (exemptions/substitution); the pre/post gap is the real gauge",
    "classification": "confirming",
    "stale_after": "100d",
    "value_type": "current",
    "status": "critical"
  },
  {
    "id": "digital.redsea.cable_faults",
    "metric": "Red Sea concurrent cable faults",
    "geography": "Red Sea / Bab el-Mandeb",
    "unit": "count",
    "value": 1,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 2,
      "alert": 3,
      "critical": 4
    },
    "update_frequency": "daily/event",
    "scenario_mapping": [
      "cable_severance"
    ],
    "source": {
      "name": "TeleGeography / ICPC",
      "url": "https://www.csis.org/analysis/strategic-future-subsea-cables-egypt-case-study",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026-05",
    "page": "/structural/digital",
    "vertical": "Digital",
    "section": "§7",
    "signalNo": "7.3",
    "signalName": "Red Sea concurrent cable faults",
    "input": "TeleGeography / ICPC / Starboard fault feeds; repair-vessel ETA",
    "lead_lag": "Leading on cable_severance (binary event)",
    "assets": "Regional connectivity, telecom resilience, EM fintech, crypto venue latency",
    "false_positive": "Documented FP — cable cuts historically did NOT move VIX/MOVE; do not size broad-vol hedge to this",
    "classification": "predictive",
    "stale_after": "2d",
    "value_type": "current",
    "status": "ok"
  },
  {
    "id": "equities.factor_em_crowding",
    "metric": "Factor rotation / EM-crowding unwind",
    "section": "§8",
    "signalNo": "8.1",
    "signalName": "Factor rotation / EM-crowding unwind",
    "unit": "% wk",
    "value": -1,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": -0.5,
      "alert": -1,
      "critical": -1.5
    },
    "update_frequency": "weekly",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "input": "MSCI FactorLab (min-vol/quality/momentum/EM crowding)",
    "lead_lag": "Leading — the de-grossing that lifts cross-asset correlation (§9) and precedes crypto-beta stress",
    "assets": "Factor ETFs, EM tech/AI momentum (short), min-vol/quality (long), BTC/ETH downstream",
    "false_positive": "Factor-crowding scores are model-derived; a one-week unwind can reverse — confirm with breadth",
    "classification": "predictive",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 (EM crowding −1%, 4-sigma)",
    "page": "/markets/equities",
    "vertical": "Equities",
    "stale_after": "8d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "equities.breadth_dispersion",
    "metric": "Index-vs-stock dispersion (AI-insulation mask)",
    "section": "§8",
    "signalNo": "8.2",
    "signalName": "Index-vs-stock dispersion (AI-insulation mask)",
    "unit": "% >50-DMA",
    "value": 55,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": 60,
      "alert": 55,
      "critical": 45
    },
    "update_frequency": "daily",
    "scenario_mapping": [
      "ceasefire",
      "hormuz_closure"
    ],
    "input": "% S&P components >50-DMA vs index distance above 50-DMA; Mag-7 contribution",
    "lead_lag": "Leading/coincident — extreme divergence is a correction-risk regime warning",
    "assets": "S&P/Nasdaq fragility, equal- vs cap-weight, broad risk incl. crypto",
    "false_positive": "Narrow leadership can persist for quarters — a fragility flag, not a timing trigger",
    "classification": "confirming",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026",
    "page": "/markets/equities",
    "vertical": "Equities",
    "stale_after": "2d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "equities.tasi_dfm_spread",
    "metric": "GCC equity asymmetry (TASI–DFM spread)",
    "section": "§8",
    "signalNo": "8.3",
    "signalName": "GCC equity asymmetry (TASI–DFM spread)",
    "unit": "ppts",
    "value": 21,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 10,
      "alert": 20,
      "critical": 30
    },
    "update_frequency": "daily",
    "scenario_mapping": [
      "hormuz_closure",
      "ceasefire"
    ],
    "input": "TASI vs DFM/ADX/Qatar relative return; Aramco weight; bypass-pipeline status",
    "lead_lag": "Confirming — cleanly separates oil-revenue tailwind from security/expat risk",
    "assets": "TASI energy (long) vs DFM real-estate/banks (short); GCC CDS; Qatar LNG",
    "false_positive": "Domestic-investor floors distort short-term; the spread is the signal, not either leg",
    "classification": "confirming",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 (TASI +5% vs DFM −16%)",
    "page": "/markets/equities",
    "vertical": "Equities",
    "stale_after": "2d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "crossasset.ovx",
    "metric": "OVX — crude implied vol (cleanest conflict gauge)",
    "section": "§9",
    "signalNo": "9.1",
    "signalName": "OVX — crude implied vol (cleanest conflict gauge)",
    "unit": "index",
    "value": 58,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 40,
      "alert": 60,
      "critical": 100
    },
    "update_frequency": "daily",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "input": "CBOE OVX (FRED OVXCLS)",
    "lead_lag": "Leading — OVX peaked Mar 11 ahead of Brent spot; the shock lived in the commodity complex",
    "assets": "Brent, energy equity, BTC (re-prices after OVX), broad risk via §9 regime",
    "false_positive": "Lowest-noise gauge; the trap is treating VIX normalization as all-clear while OVX stays high",
    "classification": "predictive",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "HIGH",
    "as_of": "2026 (28→120.9 peak; ~58 May)",
    "page": "/markets/cross-asset",
    "vertical": "Cross-Asset",
    "stale_after": "2d",
    "value_type": "current",
    "status": "watch"
  },
  {
    "id": "crossasset.stock_bond_corr",
    "metric": "Stock–bond correlation sign",
    "section": "§9",
    "signalNo": "9.2",
    "signalName": "Stock–bond correlation sign",
    "unit": "corr",
    "value": 0.3,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 0,
      "alert": 0.2,
      "critical": 0.5
    },
    "update_frequency": "weekly",
    "scenario_mapping": [
      "oil_strike",
      "hormuz_closure"
    ],
    "input": "Rolling SPX–UST(price) correlation; 10Y yield vs S&P co-movement",
    "lead_lag": "Leading regime indicator — the flip to positive preceded 2007/2015/2022 equity peaks",
    "assets": "60/40 books (diversification failure), long-duration UST, equity beta, BTC",
    "false_positive": "Window-dependent and unstable; confirm with the inflation-surprise driver, not the coefficient alone",
    "classification": "predictive",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 (turned POSITIVE / diversification failed)",
    "page": "/markets/cross-asset",
    "vertical": "Cross-Asset",
    "stale_after": "8d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "crossasset.vxeem",
    "metric": "VXEEM — EM-equity vol (durable stress gauge)",
    "section": "§9",
    "signalNo": "9.3",
    "signalName": "VXEEM — EM-equity vol (durable stress gauge)",
    "unit": "index",
    "value": 35.3,
    "direction": "above",
    "type": "numeric",
    "thresholds": {
      "watch": 25,
      "alert": 35,
      "critical": 45
    },
    "update_frequency": "daily",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "input": "CBOE VXEEM (FRED VXEEMCLS)",
    "lead_lag": "Coincident-to-lagging but durable/low-noise — EM stress persisted while VIX normalized",
    "assets": "EM equity/FX/credit, EM-importer sovereigns, BTC (risk-thermometer peer)",
    "false_positive": "Less timely than OVX; use as the durable-regime confirm, not the entry",
    "classification": "confirming",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 (17.2→40.8 peak; stuck 35.3)",
    "page": "/markets/cross-asset",
    "vertical": "Cross-Asset",
    "stale_after": "2d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "crypto.deribit_skew",
    "metric": "Deribit 25-delta put–call skew",
    "section": "§10",
    "signalNo": "10.1",
    "signalName": "Deribit 25-delta put–call skew",
    "unit": "% 25Δ",
    "value": -5,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": -3,
      "alert": -5,
      "critical": -7
    },
    "update_frequency": "intraday",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "input": "Deribit 7-day 25Δ skew (BTC/ETH); ATM IV",
    "lead_lag": "Leading — skew turned negative before ATM IV moved; earliest crypto-native fear tell",
    "assets": "BTC/ETH options, perp positioning, crypto-equity (COIN/MSTR)",
    "false_positive": "Deeply negative skew with LOW ATM IV = controlled hedging, not panic",
    "classification": "predictive",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 (−5%/−7%, IV 35/43%)",
    "page": "/markets/crypto",
    "vertical": "Crypto",
    "stale_after": "1d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "crypto.perp_funding_oi",
    "metric": "Perp funding + open-interest regime",
    "section": "§10",
    "signalNo": "10.2",
    "signalName": "Perp funding + open-interest regime",
    "unit": "$bn OI",
    "value": 49,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": 55,
      "alert": 50,
      "critical": 45
    },
    "update_frequency": "hourly",
    "scenario_mapping": [
      "hormuz_closure",
      "oil_strike"
    ],
    "input": "Perpetual funding rate + futures OI (Kaiko/CoinGlass/CCData)",
    "lead_lag": "Coincident-to-leading — negative funding + OI compression PRECEDED the worst headlines",
    "assets": "BTC/ETH perps/futures, CME basis trades, leveraged longs",
    "false_positive": "CEX liquidation/OI data is self-reported and a LOWER BOUND — no single-venue trades",
    "classification": "confirming",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026 ($61→$49bn, neg funding through +14%)",
    "page": "/markets/crypto",
    "vertical": "Crypto",
    "stale_after": "1d",
    "value_type": "current",
    "status": "alert"
  },
  {
    "id": "crypto.btc_etf_flow",
    "metric": "Spot BTC ETF flow streak",
    "section": "§10",
    "signalNo": "10.3",
    "signalName": "Spot BTC ETF flow streak",
    "unit": "$m/day",
    "value": -733,
    "direction": "below",
    "type": "numeric",
    "thresholds": {
      "watch": -300,
      "alert": -500,
      "critical": -700
    },
    "update_frequency": "daily",
    "scenario_mapping": [
      "hormuz_closure",
      "ceasefire"
    ],
    "input": "SoSoValue / Farside / issuer daily creations-redemptions (IBIT/FBTC/GBTC)",
    "lead_lag": "Coincident — the crypto endpoint of the §9 rotation into cash/short-UST",
    "assets": "BTC, COIN/MSTR (§8 bridge), crypto beta broadly",
    "false_positive": "Flow micro-figures press-derived (T2); single-day prints noisy — trade the multi-day streak",
    "classification": "coincident",
    "source": {
      "name": "VegaReady Signal Catalog",
      "url": "/structural/watch",
      "tier": "T2"
    },
    "confidence": "MEDIUM",
    "as_of": "2026-05-27 (−$733.4M; 8-session −$2.6bn)",
    "page": "/markets/crypto",
    "vertical": "Crypto",
    "stale_after": "2d",
    "value_type": "current",
    "status": "critical"
  }
];

export const bySection = {
  "§1": [
    "gold.etf_flow_divergence",
    "fx.dxy_dollar_vix",
    "fx.usdjpy_carry"
  ],
  "§2": [
    "credit.embi_spread",
    "credit.flight_to_quality_cash",
    "credit.gulf_tic_holdings"
  ],
  "§3": [
    "insurance.awrp_hull",
    "insurance.vlcc_rate",
    "insurance.pi_war_cover"
  ],
  "§4": [
    "property.lme_aluminium",
    "property.construction_inflation",
    "labor.philippines_remittance_yoy"
  ],
  "§5": [
    "food.urea_price",
    "food.fao_price_index",
    "water.gcc_reserve_days"
  ],
  "§6": [
    "weaponization.china.ree_magnet_yoy",
    "defense.gcc_patriot_drawdown",
    "nuclear.iran_heu60"
  ],
  "§7": [
    "chokepoint.hormuz.transit",
    "deglobalization.us.tariff_rate",
    "digital.redsea.cable_faults"
  ],
  "§8": [
    "equities.factor_em_crowding",
    "equities.breadth_dispersion",
    "equities.tasi_dfm_spread"
  ],
  "§9": [
    "crossasset.ovx",
    "crossasset.stock_bond_corr",
    "crossasset.vxeem"
  ],
  "§10": [
    "crypto.deribit_skew",
    "crypto.perp_funding_oi",
    "crypto.btc_etf_flow"
  ]
};

export const byPage = {
  "/structural/weaponization": [
    "weaponization.china.ree_magnet_yoy"
  ],
  "/structural/deglobalization": [
    "deglobalization.us.tariff_rate",
    "deglobalization.bloc_fdi_gap"
  ],
  "/markets/insurance": [
    "insurance.vlcc_rate",
    "insurance.awrp_hull",
    "insurance.pi_war_cover"
  ],
  "/markets/water": [
    "water.gcc_reserve_days"
  ],
  "/markets/defense": [
    "defense.gcc_patriot_drawdown"
  ],
  "/outlook/nuclear": [
    "nuclear.iran_heu60"
  ],
  "/markets/credit": [
    "credit.flight_to_quality_cash",
    "credit.gulf_tic_holdings",
    "credit.embi_spread"
  ],
  "/markets/crypto": [
    "crypto.btc_etf_flow",
    "crypto.deribit_skew",
    "crypto.perp_funding_oi"
  ],
  "/structural/chokepoints": [
    "chokepoint.babelmandeb.transit",
    "chokepoint.hormuz.transit"
  ],
  "/structural/food": [
    "food.fao_price_index"
  ],
  "/markets/property": [
    "property.lme_aluminium",
    "property.construction_inflation"
  ],
  "/markets/labor": [
    "labor.philippines_remittance_yoy"
  ],
  "/markets/food-agriculture": [
    "food.urea_price"
  ],
  "/markets/gold-fx": [
    "gold.etf_flow_divergence",
    "fx.dxy_dollar_vix",
    "fx.usdjpy_carry",
    "gold.spot"
  ],
  "/markets/equities": [
    "equities.factor_em_crowding",
    "equities.breadth_dispersion",
    "equities.tasi_dfm_spread"
  ],
  "/markets/cross-asset": [
    "crossasset.stock_bond_corr",
    "crossasset.vxeem",
    "crossasset.ovx"
  ],
  "/structural/digital": [
    "digital.redsea.cable_faults"
  ]
};

export const scenarioKeys = [
  "hormuz_closure",
  "oil_strike",
  "cable_severance",
  "ceasefire"
];

// signalsForPage(page) -> the status-stamped metrics that surface on a given section page.
export const signalsForPage = (page) => (byPage[page] || []).map((id) => metrics.find((m) => m.id === id)).filter(Boolean);

export const lastUpdated = "2026-06-02";
