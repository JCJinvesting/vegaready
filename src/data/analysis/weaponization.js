// GENERATED from IranWarTracker/data/cascades/weaponization.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "card.weaponization.oil_1973",
    "icon": "01",
    "title": "1973 Arab Oil Embargo (Reference Pattern)",
    "category": "Structural",
    "summary": "Production cut ~5%/mo + US shipment ban quadrupled oil $2.90→$11.65/bbl by Jan 1974; catalyzed IEA and SPR creation. Anchor episode for volume-to-price asymmetry.",
    "metrics": [
      {
        "label": "Price pre USD bbl",
        "value": "$2.90"
      },
      {
        "label": "Price post USD bbl",
        "value": "$11.65"
      },
      {
        "label": "Multiple",
        "value": "4.0×"
      },
      {
        "label": "Duration months",
        "value": "6"
      },
      {
        "label": "Period",
        "value": "1973-1974"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "Federal Reserve History",
        "url": "https://www.federalreservehistory.org/essays/oil-shock-of-1973-74",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "energy"
      ],
      "entities": [
        "opec",
        "united-states"
      ],
      "scenarios": [
        "oil_strike"
      ],
      "position": {},
      "asOf": "1974"
    }
  },
  {
    "id": "card.weaponization.russia_gas",
    "icon": "02",
    "title": "Russia Gas Weaponization 2021–2022",
    "category": "Structural",
    "summary": "EU pipeline gas imports −80% vs 2019–21; TTF >€200/MWh in 2022 (peak ~€300+), eased to ~€30 by Aug 2023; EU demand −20%. Modern weaponization template.",
    "metrics": [
      {
        "label": "Eu pipeline import decline %",
        "value": "−80%"
      },
      {
        "label": "Ttf peak eur mwh",
        "value": "~€300"
      },
      {
        "label": "Ttf 2023 eur mwh",
        "value": "~€30"
      },
      {
        "label": "Eu demand decline %",
        "value": "−20%"
      },
      {
        "label": "Period",
        "value": "2022-2023"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "Atradius",
        "url": "https://atradius.sg/knowledge-and-research/reports/european-gas-market-dealing-with-lower-russian-supplies",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "lng",
        "energy"
      ],
      "entities": [
        "russia",
        "european-union",
        "qatar"
      ],
      "scenarios": [
        "oil_strike"
      ],
      "position": {},
      "asOf": "2023"
    }
  },
  {
    "id": "card.weaponization.china_rare_earths",
    "icon": "03",
    "title": "China Rare-Earth Export Controls 2023–2025",
    "category": "Dynamic",
    "summary": "Escalating controls (gallium/germanium Jul 2023 → 7 heavy REE Apr 2025); REE-magnet exports −74% YoY May 2025; heavy-REE ex-China +250% premium H2 2025.",
    "metrics": [
      {
        "label": "Magnet export YoY %",
        "value": "−74%"
      },
      {
        "label": "Ex china premium %",
        "value": "+250%"
      },
      {
        "label": "Eu price multiple vs china",
        "value": "6×"
      },
      {
        "label": "Period",
        "value": "2023-2025"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "Defense One",
        "url": "https://www.defenseone.com/ideas/2025/07/how-chinas-new-rare-earth-export-controls-target-pentagonand-world/406606/",
        "tier": "T2"
      },
      {
        "name": "Kamoa Capital",
        "url": "https://kamoacap.com/chinarareearthexport",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "rare-earths",
        "critical-minerals",
        "defense"
      ],
      "entities": [
        "china",
        "european-union",
        "united-states"
      ],
      "scenarios": [],
      "position": {},
      "asOf": "2025"
    }
  }
];

export const thesis = "Commodity weaponization is a recurring, quantifiable pattern with a stable transmission signature: a supply removal of single-digit percent of global volume produces a multiple of that in price response, with duration set by substitution lead time and policy response. This is a pattern-recognition library of historical and active episodes in which a state restricted a critical commodity for geopolitical leverage. The weapon has diversified from oil (1970s–90s) to gas (2022), grain (2022–23) and critical minerals (2023–25) — so the tracker monitors non-energy commodities with equal rigor.";

export const episodes = [
  {
    "episode": "Arab oil embargo",
    "date": "Oct 1973–Mar 1974",
    "commodity": "Crude oil",
    "volume": "Production cut ~5%/mo; US shipments banned",
    "price": "$2.90→$11.65/bbl (~4×)",
    "duration": "~6 months acute; elevated a decade",
    "policy": "IEA founded (1974); SPR created (1975)",
    "beneficiaries": "Non-OPEC producers, US domestic oil",
    "source": "Fed Reserve"
  },
  {
    "episode": "Iranian Revolution shock",
    "date": "1978–1980",
    "commodity": "Crude oil",
    "volume": "4.8 mb/d (~7% world output)",
    "price": "$13→$34/bbl (>2×)",
    "duration": "~18 months",
    "policy": "Demand destruction; CAFE standards",
    "beneficiaries": "Saudi/OPEC swing producers, non-OPEC",
    "source": "Brookings"
  },
  {
    "episode": "Gulf War (Iraq–Kuwait)",
    "date": "Aug 1990–1991",
    "commodity": "Crude oil",
    "volume": "~4.3 mb/d (Iraq+Kuwait)",
    "price": "$17→$36/bbl",
    "duration": "~5 months",
    "policy": "IEA/SPR coordinated release; Saudi output up",
    "beneficiaries": "Saudi Arabia, SPR-holding importers",
    "source": "Wikipedia"
  },
  {
    "episode": "Russia gas weaponization",
    "date": "2021–2022",
    "commodity": "Natural gas",
    "volume": "EU pipeline imports −80% vs 2019–21",
    "price": "TTF >€200/MWh 2022 (peak ~€300+), to ~€30 by Aug 2023",
    "duration": "~18 months acute",
    "policy": "EU REPowerEU; US LNG surge; demand −20%",
    "beneficiaries": "US LNG exporters, Qatar, Norway",
    "source": "Atradius"
  },
  {
    "episode": "Ukraine/Russia grain blockade",
    "date": "2022–2023",
    "commodity": "Wheat, corn, sunflower",
    "volume": "~20 MMT backlog; Ukraine ~45 MMT/yr at risk",
    "price": "FAO index +; fell ~14% from Mar 2022 peak after deal",
    "duration": "Initiative Jul 2022–Jul 2023",
    "policy": "Black Sea Grain Initiative (UN/Türkiye)",
    "beneficiaries": "Other exporters (US, Brazil, EU), Russia",
    "source": "UN News; FEWS NET"
  },
  {
    "episode": "China rare-earth controls (Japan)",
    "date": "2010",
    "commodity": "Rare earths",
    "volume": "Shipments to Japan halted ~2 months",
    "price": "REE prices spiked sharply",
    "duration": "~2 months",
    "policy": "Japan diversification; WTO case (won 2014)",
    "beneficiaries": "Non-China REE projects (Lynas, MP)",
    "source": "CSIS"
  },
  {
    "episode": "China critical-mineral controls",
    "date": "Jul 2023–2025",
    "commodity": "Gallium, germanium, graphite, antimony, tungsten, 7 heavy REE, magnets",
    "volume": "REE-magnet exports −74% YoY (May 2025)",
    "price": "Heavy-REE ex-China +250% premium H2 2025; EU up to 6× China",
    "duration": "Ongoing",
    "policy": "US/EU strategic reserves; DFARS magnet rule",
    "beneficiaries": "Non-China miners/processors, recyclers",
    "source": "Defense One; Kamoa"
  },
  {
    "episode": "India rice export ban",
    "date": "Jul 2023–",
    "commodity": "Rice (~40% world trade)",
    "volume": "Non-basmati white rice exports banned",
    "price": "IMF: global grain prices could +up to 15% in 2023",
    "duration": ">1 year",
    "policy": "Importer diversification (Africa, Asia)",
    "beneficiaries": "Thailand, Vietnam, Pakistan exporters",
    "source": "BBC"
  },
  {
    "episode": "Indonesia palm oil export ban",
    "date": "Apr–May 2022",
    "commodity": "Palm oil (~half world supply)",
    "volume": "Exports banned ~3 weeks",
    "price": "Veg-oil prices spiked then eased",
    "duration": "~3 weeks",
    "policy": "Domestic price-control mandate (DMO)",
    "beneficiaries": "Malaysian palm, soy/rapeseed substitutes",
    "source": "BBC"
  },
  {
    "episode": "OPEC+ supply management",
    "date": "2022–2025",
    "commodity": "Crude oil",
    "volume": "2.2 mb/d voluntary (Nov 2023); pledged ~5.86 mb/d (~5.7% demand)",
    "price": "Price-floor management",
    "duration": "Multi-year; unwinding from Apr 2025 (+1.1 mb/d)",
    "policy": "IEA monitoring; US SPR drawdown 2022",
    "beneficiaries": "OPEC+ revenue, US shale at higher prices",
    "source": "EnergyNow; CEESA"
  },
  {
    "episode": "Fertilizer export restrictions",
    "date": "2021–2026",
    "commodity": "Urea, phosphate",
    "volume": "Russia quotas through Dec 2026; China phosphate paused to Aug 2026",
    "price": "Urea +80% to >$850/t by Apr 2026 (Section 5)",
    "duration": "Ongoing",
    "policy": "Importer stockpiling; Morocco/Saudi capacity",
    "beneficiaries": "Morocco (OCP), Saudi (Ma'aden), Brazil",
    "source": "FreshPlaza; DecaChem"
  }
];

export const takeaways = [
  "Volume-to-price asymmetry — a ~4–7% global supply removal (1973, 1979, 1990) historically generated 100–300% price moves, because demand for energy and food is short-run inelastic.",
  "The weapon has diversified from oil (1970s–90s) to gas (2022), grain (2022–23) and critical minerals (2023–25) — so the tracker must monitor non-energy commodities with equal rigor.",
  "Concentration is the precondition — every episode involved a supplier holding >25% of a traded commodity (China REE ~70%+, Indonesia palm ~50%, India rice ~40%, Gulf urea ~36%)."
];

export const dataQuality = {
  "high": "Federal Reserve 1973 embargo prices; Atradius/IEA Russia-gas figures; documented export bans (India rice, Indonesia palm) and FAO grain-index moves.",
  "moderate": "China REE-magnet −74% and +250% premium (Defense One/Kamoa, T2); OPEC+ pledged-volume aggregation.",
  "quarantined": "Cross-episode price-multiple generalizations are pattern heuristics, not forecasts."
};

export const relatedSectors = "The active 2026 fertilizer/REE episodes are deep-dived on /markets/food-agriculture (urea), /markets/energy (critical minerals) and /markets/defense (DFARS magnets); the chokepoint geography on /structural/chokepoints.";
