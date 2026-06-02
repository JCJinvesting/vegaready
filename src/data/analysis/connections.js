// Cross-section connection graph: the cascade as a network linking sectors <-> countries <-> flows <-> beneficiaries.
export const intro = 'The cascade is a network, not three separate lists. Each thread below is one shock told across every layer: the sectors it moves through, the countries most exposed, the commodity flow that carries it, and who profits. Follow a thread to see the same disruption from all three analysis pages.';
const S='/transmission', R='/exposure', D='/outlook';
export const themes = [
  {
    id:'fertilizer-to-food', name:'Fertilizer to Food', tone:'amber',
    thesis:'Gas to ammonia to urea to crop yields to food prices, with a 6-9 month lag - the cleanest gas-to-food transmission on record. The Gulf supplies ~36% of urea and ~29% of ammonia exports (IFPRI), and Russia and China are simultaneously constrained, so no swing supplier exists. This is the longest tail in the cascade.',
    sectors:[{name:'Fertilizer & Ammonia',page:S},{name:'Agriculture & Food',page:S}],
    countries:[{name:'India',page:R},{name:'Pakistan',page:R},{name:'Egypt',page:R},{name:'Brazil',page:R},{name:'Russia',page:R}],
    flows:[{name:'Fertilizer / Ammonia',page:D},{name:'LNG',page:D}],
    profits:['Russian fertilizer producers','CF Industries / Nutrien / Yara','Egyptian urea as swing supplier'],
  },
  {
    id:'remittance-corridor', name:'The Remittance Corridor', tone:'violet',
    thesis:'Gulf labor demand funds South-Asian remittances (India $129B, Pakistan $33B, Philippines $40B). A Gulf slowdown collapses the FX lifeline at exactly the moment energy-import bills spike. Pakistan is the extreme case: its energy supplier and its remittance source are the same region - a self-reinforcing external-balance squeeze.',
    sectors:[{name:'Tourism & Services',page:S},{name:'Aviation & Transport',page:S}],
    countries:[{name:'UAE',page:R},{name:'India',page:R},{name:'Pakistan',page:R},{name:'Egypt',page:R}],
    flows:[{name:'Shipping Capacity',page:D}],
    profits:['Substitute tourism / transit hubs (Istanbul)','Alternative remittance rails'],
  },
  {
    id:'lng-binary', name:'The LNG Binary', tone:'red',
    thesis:'Qatar is 18.8% of global LNG and ~93% of it transits Hormuz - and LNG carriers have no pipeline bypass. Export is binary: zero or full. EU, Japan and Korea are price-takers (JKM +51%, TTF +35%); the US is the structural winner as its LNG captures EU and Asian share.',
    sectors:[{name:'Energy Downstream',page:S},{name:'Manufacturing',page:S},{name:'Petrochemicals',page:S}],
    countries:[{name:'European Union',page:R},{name:'Japan',page:R},{name:'South Korea',page:R},{name:'United States',page:R},{name:'Russia',page:R}],
    flows:[{name:'LNG',page:D}],
    profits:['US LNG (Cheniere, New Fortress)','Russian gas to Asia','US ethane-cracker petrochemicals'],
  },
  {
    id:'hormuz-trapped-spare', name:'Trapped Spare Capacity', tone:'cyan',
    thesis:'The defining 2026 difference vs 1990: the Gulf own swing and spare capacity is itself Hormuz-trapped, so there is no clean producer offset. Saudi Petroline (7M b/d to Yanbu, but only ~4-4.5M loadable) and UAE Fujairah (1.8M b/d) bypass only partially. US shale is slow (+0.7-0.9M b/d over 6-9 months) and light-sweet only.',
    sectors:[{name:'Energy Downstream',page:S},{name:'Construction & Materials',page:S}],
    countries:[{name:'Saudi Arabia',page:R},{name:'UAE',page:R},{name:'United States',page:R}],
    flows:[{name:'Crude Oil',page:D},{name:'Refined Products',page:D}],
    profits:['Cape-route VLCC owners','US shale E&P (slow)','Non-Gulf crude (Brazil, West Africa)'],
  },
  {
    id:'digital-chokepoint', name:'The Digital Chokepoint', tone:'green',
    thesis:'Near-orthogonal to the physical commodities - the blast radius is data and finance, not energy. Gulf cable damage is mostly domestic (the Asia-Europe backbone runs via the Red Sea, ~900mi away); the binding constraint is repair fragility, with only ~1 cable-repair vessel inside the Gulf and ships unable to enter a war zone.',
    sectors:[{name:'Technology & Digital',page:S},{name:'Financial Markets',page:S}],
    countries:[{name:'UAE',page:R},{name:'Saudi Arabia',page:R},{name:'India',page:R}],
    flows:[{name:'Internet Bandwidth',page:D}],
    profits:['Satellite (Eutelsat OneWeb)','Cable suppliers (Nokia/ASN, TE SubCom)','Project Waterworth (bypasses the Middle East)'],
  },
  {
    id:'shipping-insurance', name:'Shipping & War-Risk', tone:'amber',
    thesis:'War-risk premiums plus Cape-of-Good-Hope rerouting cut effective fleet capacity ~15-18% on Asia-Europe lanes. Egypt loses Suez revenue (already -61% in 2024); Korea wins shipbuilding orders (dominant LNG-carrier orderbook, $71.3B). The relief valve is blanked sailings and rate spikes, not new vessels (2-3yr build lead).',
    sectors:[{name:'Financial Markets',page:S},{name:'Pharmaceuticals',page:S},{name:'Aviation & Transport',page:S}],
    countries:[{name:'Egypt',page:R},{name:'South Korea',page:R}],
    flows:[{name:'Shipping Capacity',page:D},{name:'Refined Products',page:D}],
    profits:['Korean shipbuilders','Lloyds war-risk syndicates','Cape-hub bunker suppliers & ports'],
  },
];

// Phase-3 cross-section causal map: the horizontal edges where Section A drives Section B.
// maturity: 'built' = corpus-derivable now; 'pending' = indicator defined, external primary data needed (see Phase3 research brief).
export const causalIntro = "The threads above trace the physical cascade (§1-7). These are the horizontal causal edges that carry the shock across the financial layers (§8 equities, §9 cross-asset, §10 crypto) and back. TRACKED edges are observed in data the platform already follows; PROPOSED edges are reasoned mechanisms not yet observed. Both are hypotheses - flagged, never anchored - per the source discipline.";
export const causalUmbrella = "Every edge here is a hypothesis. Causation cannot be proven from observation - we report the moves, propose the mechanism, name the competing drivers, and grade our conviction. Nothing on this page claims proven causation; \u0027Tracked\u0027 means we observe the relationship in data, not that we have proven it.";
// Phase A attribution: each edge is a weighted hypothesis with named competing drivers + an explicit residual.
// driverClass = which driver-class owns the edge (all geopolitical-conflict today). attribution.strength = conflict's share; attribution.confidence = how sure we are (distinct from `confidence` = data/indicator soundness).
export const causalLinks = [
  {
    "id": "food-corridor",
    "from": "Food & fertilizer shock",
    "fromPage": "/markets/food-agriculture",
    "to": "Stablecoin EM corridors",
    "toPage": "/markets/crypto",
    "why": "The cleanest real-economy to crypto chain: food-import-cost stress on the most fragile sovereigns (Egypt, Pakistan) widens credit spreads, hits EM-importer equity, and drives synthetic-dollar/remittance demand in those exact corridors - grounding §10's proxy-only EM-demand claim.",
    "indicator": "(food-import bill / FX reserves) x EMBI/CDS spread, cross-checked vs on-chain USDT corridor inflow",
    "maturity": "pending",
    "confidence": "high",
    "scenarios": [
      "hormuz_closure",
      "oil_strike"
    ],
    "driverClass": "geopolitical-conflict",
    "attribution": {
      "strength": "partial",
      "confidence": "low"
    },
    "competingDrivers": [
      {
        "driver": "EM debt overhang / IMF programs",
        "cls": "structural-secular",
        "note": "pre-existing fiscal fragility"
      },
      {
        "driver": "global food-price baseline (RU-UA, weather)",
        "cls": "supply-shock",
        "note": "sets the level the conflict moves on"
      },
      {
        "driver": "USD strength / Fed path",
        "cls": "monetary-policy",
        "note": "drives the FX-reserve squeeze"
      }
    ],
    "residual": "EM sovereign fragility predates the conflict and would persist absent it; the Gulf channel is incremental, not originating.",
    "activation": "(food-import bill ÷ FX reserves) rising WITH EMBI/CDS widening AND on-chain USDT corridor inflow up",
    "invalidation": "EM FX stabilizes / IMF backstop lands while the USDT corridor stays flat — channel not transmitting",
    "shareRank": 2
  },
  {
    "id": "power-mining",
    "from": "Regional power price",
    "fromPage": "/markets/energy",
    "to": "Mining margin & miner equity",
    "toPage": "/markets/crypto",
    "why": "Mining is the one crypto channel with a direct physical-energy link (§1-7). §10 asserts a regional power spike is \"directly margin-compressive\" but never instruments it - this closes the energy to hashprice to public-miner-equity path into §8/§12.",
    "indicator": "hashprice ($/PH/s/day) / (regional $/kWh x rig efficiency J/TH); breach at the ~$0.10/kWh S21 breakeven",
    "maturity": "pending",
    "confidence": "high",
    "scenarios": [
      "hormuz_closure",
      "oil_strike"
    ],
    "driverClass": "geopolitical-conflict",
    "attribution": {
      "strength": "marginal",
      "confidence": "low"
    },
    "competingDrivers": [
      {
        "driver": "BTC price",
        "cls": "market-endogenous",
        "note": "dominant driver of hashprice"
      },
      {
        "driver": "network difficulty / ASIC efficiency cycle",
        "cls": "technology-shock",
        "note": "secular margin compression"
      },
      {
        "driver": "local energy policy / grid",
        "cls": "political-election",
        "note": "siting & tariff regimes"
      }
    ],
    "residual": "Miner margins are dominated by BTC price and network difficulty; regional power is a second-order input even in a Gulf shock.",
    "activation": "a regional $/kWh spike pushes hashprice below the ~$0.10/kWh S21 breakeven",
    "invalidation": "BTC price / network difficulty dominate hashprice while power is flat — power is not the driver",
    "shareRank": 3
  },
  {
    "id": "cable-venue",
    "from": "Cable severance",
    "fromPage": "/structural/digital",
    "to": "Crypto venue latency & EM fintech",
    "toPage": "/markets/crypto",
    "why": "Flagged across §7/§8/§9/§10 as a structural tail with no measurable gauge. Defines the one cable to regional-CEX-latency / sequencer-concentration indicator - while preserving the §8/§9 caveat that cable cuts did NOT move broad vol (false-positive risk).",
    "indicator": "cable-risk score x repair-vessel availability x matching-engine/sequencer geo-concentration; proxied by oracle staleness",
    "maturity": "pending",
    "confidence": "medium",
    "scenarios": [
      "cable_severance"
    ],
    "driverClass": "geopolitical-conflict",
    "attribution": {
      "strength": "marginal",
      "confidence": "low"
    },
    "competingDrivers": [
      {
        "driver": "secular subsea congestion / repair-vessel scarcity",
        "cls": "structural-secular",
        "note": "baseline fault rate"
      },
      {
        "driver": "accidental anchor drags",
        "cls": "market-endogenous",
        "note": "the historical NORM for cable faults"
      },
      {
        "driver": "cloud/CDN concentration",
        "cls": "technology-shock",
        "note": "venue-latency cause independent of cables"
      }
    ],
    "residual": "Most cable faults are accidental and historically did NOT move broad vol (documented false positive); conflict-attributable severance is a small slice of cable risk.",
    "activation": "≥2 concurrent Gulf cable faults + repair-vessel unavailability AND rising regional CEX latency / oracle staleness",
    "invalidation": "faults occur but broad vol and venue latency are unmoved — the documented false positive",
    "shareRank": 3
  },
  {
    "id": "crypto-reflexivity",
    "contrarian": true,
    "from": "Crypto cascade (reflexivity)",
    "fromPage": "/markets/crypto",
    "to": "Equity / cross-asset vol",
    "toPage": "/markets/cross-asset",
    "why": "The report's denied return edge: §10 asserts crypto is the terminal node with no feedback. Tests whether a crypto-native liquidation (Oct-2025 type) or USDT-redemption tail propagates BACK into equity/cross-asset risk-off via COIN/MSTR and shared risk-parity books. A flagged hypothesis, not a finding.",
    "indicator": "(crypto liquidation / total derivatives vol) x COIN+MSTR Nasdaq weight x shared vol-control AUM; event-study lead/lag vs next-session equity vol",
    "maturity": "pending",
    "confidence": "medium",
    "scenarios": [
      "hormuz_closure",
      "ceasefire"
    ],
    "driverClass": "geopolitical-conflict",
    "attribution": {
      "strength": "marginal",
      "confidence": "low"
    },
    "competingDrivers": [
      {
        "driver": "equity-native vol (Fed, earnings, AI sentiment)",
        "cls": "market-endogenous",
        "note": "overwhelmingly sets equity vol"
      },
      {
        "driver": "risk-parity / vol-control de-grossing",
        "cls": "structural-secular",
        "note": "the actual cross-asset transmission"
      }
    ],
    "residual": "Equity vol is overwhelmingly equity-native; crypto is small vs total derivatives. This edge is a tested hypothesis the report explicitly denies - kept as a falsifiable probe, never anchored.",
    "activation": "an Oct-2025-scale crypto liquidation coincides with a next-session equity-vol rise via COIN/MSTR + shared vol-control AUM",
    "invalidation": "a crypto liquidation with NO equity-vol follow-through — confirms the report’s terminal-node denial",
    "shareRank": 3
  },
  {
    "id": "awrp-oil",
    "from": "War-risk premium + freight",
    "fromPage": "/markets/insurance",
    "to": "Delivered oil cost & $75-80 floor",
    "toPage": "/markets/cross-asset",
    "why": "AWRP (~2.5% hull peak) and VLCC rates ($117k to $423k/day) are a permanent surcharge on the delivered Gulf barrel - part of why §9's structural floor reset to $75-80. Makes the insurance layer a leading input to the oil price, not just an output of the shock.",
    "indicator": "delivered-barrel premium ($/bbl) = AWRP annualized/voyage + (VLCC TCE - baseline) / barrels/VLCC; correlate to Brent M1-M2 + 2027 strip",
    "maturity": "built",
    "confidence": "high",
    "scenarios": [
      "hormuz_closure",
      "oil_strike"
    ],
    "driverClass": "geopolitical-conflict",
    "attribution": {
      "strength": "partial",
      "confidence": "medium"
    },
    "competingDrivers": [
      {
        "driver": "OPEC+ supply policy",
        "cls": "supply-shock",
        "note": "the primary oil-price driver"
      },
      {
        "driver": "global demand / China",
        "cls": "market-endogenous",
        "note": "sets the cycle"
      },
      {
        "driver": "shale supply / underinvestment",
        "cls": "structural-secular",
        "note": "the real long-run floor"
      }
    ],
    "residual": "The oil price and floor are mostly OPEC+ and underinvestment; the conflict's clean, well-attributed share is the delivered-cost surcharge (AWRP + freight), which IS conflict-driven.",
    "activation": "AWRP + (VLCC TCE − baseline) annualized adds a measurable $/bbl surcharge that tracks Brent M1-M2",
    "invalidation": "AWRP and freight ease while the Brent floor holds — the floor is OPEC+/underinvestment, not insurance",
    "shareRank": 2
  },
  {
    "id": "minerals-loop",
    "from": "Critical-minerals / REE chokepoint",
    "fromPage": "/markets/energy",
    "to": "Defense + transition cost (competition)",
    "toPage": "/markets/defense",
    "why": "§6 traces minerals to defense and minerals to transition separately; §7 tracks China REE controls (-74% YoY) standalone. The same chokepoint raises defense-procurement AND transition cost at once - reframing two \"winners\" as rivals for one constrained input.",
    "indicator": "REE contention index = China REE-magnet export YoY x (DFARS defense-magnet demand + EV/wind transition-magnet demand); ex-China premium (+250%) is the price tell",
    "maturity": "built",
    "confidence": "high",
    "scenarios": [
      "hormuz_closure"
    ],
    "driverClass": "geopolitical-conflict",
    "attribution": {
      "strength": "marginal",
      "confidence": "medium"
    },
    "competingDrivers": [
      {
        "driver": "China REE export-control statecraft",
        "cls": "geopolitical-conflict",
        "note": "the DOMINANT driver - a separate (china-statecraft) instance, NOT Iran"
      },
      {
        "driver": "secular EV/wind magnet demand",
        "cls": "technology-shock",
        "note": "demand side of the squeeze"
      },
      {
        "driver": "DFARS reshoring policy",
        "cls": "trade-policy",
        "note": "US-side response"
      }
    ],
    "residual": "This contention is largely a China-US driver, independent of the Gulf conflict; pinning it to Iran would mis-attribute it. Flagged as a foreign-key into a future china-statecraft node.",
    "activation": "China REE-magnet export YoY falls with ex-China premium rising, lifting BOTH defense procurement and transition cost",
    "invalidation": "export controls ease / ex-China supply ramps — contention clears (and the driver is China, not Iran)",
    "shareRank": 3
  },
  {
    "id": "water-gcc",
    "from": "Desalination strike",
    "fromPage": "/markets/water",
    "to": "GCC sovereign & equity repricing",
    "toPage": "/markets/equities",
    "why": "§5 calls water the conflict's clearest existential tail (Qatar 99% desal, <2 days reserve) - yet §8's GCC equity scorecard prices security/expat risk (DFM -16%), not water. The highest-severity tail in the corpus is unpriced in the market layers.",
    "indicator": "water-at-risk premium = desal-offline (m3/day) x population-dependent x inverse reserve-days, mapped to a GCC CDS / TASI-DFM shock (DFM -16% / $120bn as calibration)",
    "maturity": "built",
    "confidence": "medium",
    "scenarios": [
      "hormuz_closure",
      "oil_strike"
    ],
    "driverClass": "geopolitical-conflict",
    "attribution": {
      "strength": "partial",
      "confidence": "low"
    },
    "competingDrivers": [
      {
        "driver": "oil-revenue fiscal cushion",
        "cls": "supply-shock",
        "note": "the offsetting force that absorbs the shock"
      },
      {
        "driver": "global EM risk sentiment",
        "cls": "market-endogenous",
        "note": "drives realized GCC equity beta"
      },
      {
        "driver": "Gulf real-estate / expat cycle",
        "cls": "structural-secular",
        "note": "DFM's actual swing factor"
      }
    ],
    "residual": "Realized GCC moves are dominated by oil revenue and global risk; the water tail is currently unpriced - a conditional jump risk, not a continuous attribution.",
    "activation": "a confirmed desal-plant strike or reserve-days <2 maps to a GCC CDS or TASI-DFM shock",
    "invalidation": "Gulf fiscal cushion absorbs a strike with no credit/equity transmission — the tail stays unpriced",
    "shareRank": 2
  },
  {
    "id": "tariff-sector",
    "from": "Tariff escalation",
    "fromPage": "/structural/deglobalization",
    "to": "Equity sector margins",
    "toPage": "/markets/equities",
    "why": "§7's tariff index (17.8%, a 90-year high) compounds the oil-cost margin hit on the exact §8 \"loser\" sectors (autos already -60% margins, consumer discretionary, semis) - but the two forces are siloed, understating sector downside.",
    "indicator": "sector tariff-exposure = imported-input share x effective tariff rate, layered onto the §8 earnings pass-through; the 1.4pp pre/post-substitution gap as the decoupling-speed gauge",
    "maturity": "built",
    "confidence": "medium",
    "scenarios": [
      "hormuz_closure"
    ],
    "driverClass": "geopolitical-conflict",
    "attribution": {
      "strength": "marginal",
      "confidence": "medium"
    },
    "competingDrivers": [
      {
        "driver": "US tariff policy",
        "cls": "trade-policy",
        "note": "the DRIVER - exogenous to the Gulf conflict"
      },
      {
        "driver": "AI-capex cycle",
        "cls": "technology-shock",
        "note": "dominant swing for semis/discretionary"
      },
      {
        "driver": "demand / input costs",
        "cls": "market-endogenous",
        "note": "the cyclical margin driver"
      }
    ],
    "residual": "The 17.8% tariff regime is exogenous US policy that COMPOUNDS but is not caused by the Gulf conflict; attributing sector margin damage to the conflict would be a category error. Foreign-key into a future us-trade-policy node.",
    "activation": "effective tariff × imported-input share compounds the oil-cost margin hit on autos / discretionary / semis",
    "invalidation": "the tariff regime rolls back, OR AI-capex dominates sector margins — the conflict channel is marginal",
    "shareRank": 3
  },
  {
    "id": "nuclear-gold",
    "from": "Nuclear-proliferation cascade",
    "fromPage": "/outlook/nuclear",
    "to": "Gold & volatility regime",
    "toPage": "/markets/gold-fx",
    "why": "The broken Saudi-123 \"gold standard\" and Iran's unaccounted 440.9kg HEU are the corpus's highest-stakes escalation pathway - yet §6 nuclear never connects to §1 gold, §9 vol, or §10. A proliferation jump would be a massive haven/vol event with no market transmission modelled.",
    "indicator": "proliferation-escalation event flag (IAEA access, Saudi enrichment milestones, regional-parity triggers) to gold/GVZ/OVX jump overlay (discrete jump-risk, not a continuous series)",
    "maturity": "built",
    "confidence": "medium",
    "scenarios": [
      "ceasefire"
    ],
    "driverClass": "geopolitical-conflict",
    "attribution": {
      "strength": "partial",
      "confidence": "low"
    },
    "competingDrivers": [
      {
        "driver": "real rates / Fed path",
        "cls": "monetary-policy",
        "note": "the dominant gold driver"
      },
      {
        "driver": "CB reserve diversification (post-2022)",
        "cls": "structural-secular",
        "note": "the structural bid"
      },
      {
        "driver": "USD dynamics",
        "cls": "market-endogenous",
        "note": "the inverse lever"
      }
    ],
    "residual": "Gold's realized moves are dominated by real rates and central-bank buying; a proliferation jump is a discrete tail overlay, not the current driver.",
    "activation": "an IAEA-access or Saudi-enrichment milestone triggers a gold / GVZ / OVX jump overlay",
    "invalidation": "the proliferation path stalls or real rates dominate gold — no haven-vol event",
    "shareRank": 2
  }
];

export const attributionLegend = {
  "dataConfidence": "Is the underlying indicator measurable and the data sound? (high / medium / low)",
  "attributionStrength": "How much of the downstream effect the Gulf conflict plausibly owns vs other forces: primary / partial / marginal.",
  "attributionConfidence": "How sure we are of that attribution judgment (high / medium / low) - distinct from data confidence. We can be sure of the number yet unsure the conflict caused it.",
  "residual": "Every edge carries an explicit unexplained remainder. Named competing drivers never sum to 100%.",
  "note": "Attribution here is curated, flagged analyst judgment - not a measured coefficient. Correlation is not causation; these edges are weighted hypotheses with named rivals, not asserted single-cause arrows."
};

export const driverRegistry = {
  "intro": "VegaReady is a prototype for a multi-driver, event-driven causal platform. The Gulf conflict is one force in a field. Phase A positions the schema; only the conflict is populated today, but every edge already names the rival drivers (below) that compete for the same effects. Those rivals get their own fully-researched nodes in Phase B - the field-of-forces view.",
  "populated": [
    {
      "id": "iran-gulf-conflict",
      "class": "geopolitical-conflict",
      "status": "ACTIVE",
      "note": "Instance #1 - the entire current corpus."
    }
  ],
  "registered": [
    {
      "id": "us-monetary-fed",
      "class": "monetary-policy"
    },
    {
      "id": "us-trade-policy",
      "class": "trade-policy"
    },
    {
      "id": "china-statecraft",
      "class": "geopolitical-conflict"
    },
    {
      "id": "opec-supply-policy",
      "class": "supply-shock"
    },
    {
      "id": "cb-reserve-diversification",
      "class": "structural-secular"
    },
    {
      "id": "post-covid-regime",
      "class": "pandemic-health"
    },
    {
      "id": "ai-capex-cycle",
      "class": "technology-shock"
    }
  ],
  "foot": "Registered drivers are named, not yet populated. They surface as competing drivers on the edges below and await dedicated research before becoming nodes."
};

// #60 scenario-attribution matrix: Beneficiaries + Horizon + competing drivers + attribution confidence per scenario.
export const scenarioAttribution = [
  {
    "scenario": "hormuz_closure",
    "label": "Sustained closure",
    "tone": "#ef4444",
    "beneficiaries": "Energy E&P (non-Gulf), defense primes, tanker equities, USD, gold (tail), long-vol",
    "horizon": "Immediate (days-weeks) on price; structural (quarters) on supply chains & build costs",
    "competingDrivers": "OPEC+ spare capacity, Fed real-rates regime, post-COVID inflation base",
    "attributionConfidence": "medium - a clear accelerant, but the oil/rates regime is co-determined"
  },
  {
    "scenario": "oil_strike",
    "label": "Oil-infrastructure strike",
    "tone": "#f59e0b",
    "beneficiaries": "Energy infrastructure, refiners (crack), non-Gulf producers, insurers",
    "horizon": "Immediate on spot; weeks on term structure & insurance",
    "competingDrivers": "OPEC+ supply response, shale elasticity, demand / China",
    "attributionConfidence": "medium - strike is conflict-driven, price path is OPEC+ co-determined"
  },
  {
    "scenario": "cable_severance",
    "label": "Subsea cable severance",
    "tone": "#22d3ee",
    "beneficiaries": "Cyber/AI, satellite & telecom resilience, latency-arb venues",
    "horizon": "Immediate on connectivity; short (weeks) on fintech / settlement",
    "competingDrivers": "Secular subsea congestion, accidental faults (historical norm), CDN concentration",
    "attributionConfidence": "low - cable cuts historically did NOT move broad vol (documented false positive)"
  },
  {
    "scenario": "ceasefire",
    "label": "Ceasefire / de-escalation",
    "tone": "#10b981",
    "beneficiaries": "Risk assets, EM equity/credit, BTC & high-beta, short-vol, GCC real-estate",
    "horizon": "Immediate reversal; whipsaw risk over weeks (false-ceasefire)",
    "competingDrivers": "Fed path, earnings, AI-capex sentiment, global growth",
    "attributionConfidence": "low - relief rally is quickly re-dominated by non-conflict macro"
  }
];
