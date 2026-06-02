// GENERATED from IranWarTracker/data/cascades/chokepoints.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "card.chokepoint.hormuz",
    "icon": "01",
    "title": "Strait of Hormuz Vulnerability",
    "category": "Index",
    "summary": "World's most critical oil chokepoint; ~20 mb/d (~20% global liquids), ~1/5 LNG, 84% Asia-bound, minimal bypass. Composite risk 4.4/5, rank #1.",
    "metrics": [
      {
        "label": "Oil transit mb d",
        "value": "20.0"
      },
      {
        "label": "Share global liquids %",
        "value": "20"
      },
      {
        "label": "Asia bound %",
        "value": "84"
      },
      {
        "label": "Composite score",
        "value": "4.4"
      },
      {
        "label": "Rank",
        "value": "1"
      },
      {
        "label": "Period",
        "value": "2024"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "EIA",
        "url": "https://www.eia.gov/todayinenergy/detail.php?id=65504",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "energy",
        "lng"
      ],
      "entities": [
        "eia",
        "hormuz",
        "saudi-arabia",
        "iraq",
        "uae",
        "qatar"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike"
      ],
      "position": {},
      "asOf": "2024"
    }
  },
  {
    "id": "card.chokepoint.malacca",
    "icon": "02",
    "title": "Strait of Malacca / Singapore",
    "category": "Index",
    "summary": "Largest oil transit chokepoint by volume: 23.2 mb/d in 1H25 (29% global maritime oil). Composite 4.0/5, rank #2.",
    "metrics": [
      {
        "label": "Oil transit mb d",
        "value": "23.2"
      },
      {
        "label": "Share global maritime oil %",
        "value": "29"
      },
      {
        "label": "Crude mb d",
        "value": "16.6"
      },
      {
        "label": "Products mb d",
        "value": "6.5"
      },
      {
        "label": "Composite score",
        "value": "4.0"
      },
      {
        "label": "Rank",
        "value": "2"
      },
      {
        "label": "Period",
        "value": "1H2025"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "EIA via Bernama",
        "url": "https://garasi.bernama.com/quick-reads/strait-of-malacca-keeps-top-spot-as-worlds-largest-oil-transit-chokepoint",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "energy"
      ],
      "entities": [
        "eia",
        "malacca",
        "china",
        "singapore"
      ],
      "scenarios": [
        "hormuz_closure"
      ],
      "position": {},
      "asOf": "2025"
    }
  },
  {
    "id": "card.chokepoint.taiwan",
    "icon": "03",
    "title": "Taiwan Strait Trade Exposure",
    "category": "Index",
    "summary": ">20% of global maritime trade ($2.45tn goods, 2022); semiconductor and NE-Asia energy chokepoint with limited bypass. Composite 4.2/5, rank #3.",
    "metrics": [
      {
        "label": "Share global maritime trade %",
        "value": "20"
      },
      {
        "label": "Goods value USD tn",
        "value": "2.45"
      },
      {
        "label": "Composite score",
        "value": "4.2"
      },
      {
        "label": "Rank",
        "value": "3"
      },
      {
        "label": "Period",
        "value": "2022"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "CSIS ChinaPower",
        "url": "https://features.csis.org/chinapower/china-taiwan-strait-trade/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "semiconductors",
        "trade-flows"
      ],
      "entities": [
        "csis",
        "taiwan",
        "china"
      ],
      "scenarios": [
        "oil_strike"
      ],
      "position": {},
      "asOf": "2022"
    }
  }
];

export const thesis = "Maritime chokepoint concentration is the single largest structural vulnerability VegaReady tracks. Nine maritime/geoeconomic chokepoints are scored 1–5 on volume, commodity criticality, bypass deficit, military contestability and climate/physical risk. The structural insight is stark: the three highest-ranked — Hormuz (4.4), Taiwan (4.2), Malacca (4.0) — all face Asia and lack scalable bypass, so a single-basin disruption has no near-term substitution path. That is the core case for treating Asia-Pacific energy and semiconductor logistics as a standing tracking vertical. Panama and Cape rank lower on contestability but higher on climate/physical risk — the 2023–24 Panama drought cut FY24 transits 29% before an FY25 recovery.";

export const throughput = [
  {
    "chokepoint": "Strait of Hormuz",
    "volume": "~20 mb/d oil (~20% global liquids); ~1/5 global LNG",
    "period": "2024",
    "commodities": "Crude (Saudi 38%≈5.5mb/d, Iraq ~22%, UAE ~13%), LNG (Qatar), fertilizer",
    "bypass": "Very low — Saudi East-West ~7.0 + UAE Habshan-Fujairah ~1.8 = ~8.5–9.0 mb/d nameplate, but only ~5.5–6.5 usable after Yanbu/Fujairah loading limits (vs ~20 baseline)",
    "source": "EIA"
  },
  {
    "chokepoint": "Strait of Malacca / Singapore",
    "volume": "23.2 mb/d oil (29% global maritime oil); crude 16.6 + products 6.5",
    "period": "1H 2025",
    "commodities": "Crude, products, container trade to East Asia",
    "bypass": "Low — Lombok/Sunda add days; no pipeline",
    "source": "EIA via Bernama"
  },
  {
    "chokepoint": "Bab el-Mandeb / Red Sea / Suez",
    "volume": "4.0 mb/d oil (vs 8.7 in 2023); Suez ~12–15% global trade pre-crisis",
    "period": "Jan–Aug 2024",
    "commodities": "Crude, products, containers, ~17% internet traffic",
    "bypass": "Medium — Cape of Good Hope reroute (+10–14 days)",
    "source": "EIA"
  },
  {
    "chokepoint": "Panama Canal",
    "volume": "~5% global maritime trade; ~2.3 mb/d oil; 13,404 transits FY25 (FY24 trough 9,936, −29%)",
    "period": "FY2025",
    "commodities": "Containers (US–Asia), LPG/LNG, grain, dry bulk",
    "bypass": "Medium — Suez/Cape or US land bridge",
    "source": "IMF; gCaptain"
  },
  {
    "chokepoint": "Turkish Straits (Bosphorus-Dardanelles)",
    "volume": "~3 mb/d oil (Russian/Caspian crude)",
    "period": "recent",
    "commodities": "Crude, grain (Black Sea corridor), products",
    "bypass": "Low — no alternate sea route from Black Sea",
    "source": "Statista"
  },
  {
    "chokepoint": "Danish Straits / Baltic",
    "volume": "Russian seaborne crude exit; 54% via shadow tankers",
    "period": "April 2026",
    "commodities": "Russian crude/products",
    "bypass": "Low — Baltic has no alternate exit",
    "source": "CREA"
  },
  {
    "chokepoint": "Cape of Good Hope",
    "volume": "9.2 mb/d oil (vs 6.0 in 2023); record 24M dwt tanker traffic wk of Apr 13",
    "period": "2024–2026",
    "commodities": "Crude/products/containers diverted from Suez",
    "bypass": "N/A — itself the bypass route",
    "source": "EIA; BI Africa"
  },
  {
    "chokepoint": "Strait of Gibraltar",
    "volume": "~100,000 vessels/yr; >10% global maritime trade",
    "period": "2024",
    "commodities": "Mediterranean–Atlantic containers, crude, LNG",
    "bypass": "High — open ocean approaches",
    "source": "SAM Algeciras"
  },
  {
    "chokepoint": "Taiwan Strait",
    "volume": ">20% global maritime trade; $2.45tn goods",
    "period": "2022",
    "commodities": "Semiconductors, containers, energy to NE Asia",
    "bypass": "Low — Luzon Strait detour limited",
    "source": "CSIS ChinaPower"
  }
];

export const throughputNote = "Volumes are oil-transit unless noted; \"bypass\" measures the existence of a scalable alternative route or pipeline. Only the Cape of Good Hope record-tanker figure (24M dwt/wk) is PROVISIONAL-2026; its 9.2 mb/d diverted-oil flow is a clean EIA T1 figure (Jan–Aug 2024).";

export const scorecard = [
  {
    "rank": 1,
    "chokepoint": "Strait of Hormuz",
    "volEcon": 5,
    "commodity": 5,
    "bypassDeficit": 5,
    "military": 5,
    "climate": 2,
    "composite": 4.4,
    "beneficiaries": "US shale/Permian, Atlantic-basin LNG, Saudi/UAE bypass pipelines",
    "substitution": "6–36 months (pipelines capped)"
  },
  {
    "rank": 2,
    "chokepoint": "Strait of Malacca / Singapore",
    "volEcon": 5,
    "commodity": 5,
    "bypassDeficit": 4,
    "military": 4,
    "climate": 2,
    "composite": 4,
    "beneficiaries": "Lombok/Sunda ports, Kra-canal proponents, China overland (BRI)",
    "substitution": "12–48 months"
  },
  {
    "rank": 3,
    "chokepoint": "Taiwan Strait",
    "volEcon": 5,
    "commodity": 5,
    "bypassDeficit": 4,
    "military": 5,
    "climate": 2,
    "composite": 4.2,
    "beneficiaries": "US/Japan/Korea fabs, alternate Asian ports, defense primes",
    "substitution": "24–60 months (semis)"
  },
  {
    "rank": 4,
    "chokepoint": "Bab el-Mandeb / Red Sea / Suez",
    "volEcon": 4,
    "commodity": 4,
    "bypassDeficit": 3,
    "military": 5,
    "climate": 3,
    "composite": 3.8,
    "beneficiaries": "Cape route operators, longer-haul tanker tonnage, regional ports",
    "substitution": "weeks (reroute available)"
  },
  {
    "rank": 5,
    "chokepoint": "Turkish Straits",
    "volEcon": 3,
    "commodity": 4,
    "bypassDeficit": 4,
    "military": 3,
    "climate": 3,
    "composite": 3.4,
    "beneficiaries": "Pipeline alternatives (BTC), Mediterranean storage",
    "substitution": "months"
  },
  {
    "rank": 6,
    "chokepoint": "Danish Straits / Baltic",
    "volEcon": 3,
    "commodity": 3,
    "bypassDeficit": 4,
    "military": 3,
    "climate": 2,
    "composite": 3,
    "beneficiaries": "Sanctions enforcement, non-Russian crude suppliers",
    "substitution": "months"
  },
  {
    "rank": 7,
    "chokepoint": "Panama Canal",
    "volEcon": 3,
    "commodity": 3,
    "bypassDeficit": 2,
    "military": 1,
    "climate": 5,
    "composite": 2.8,
    "beneficiaries": "Suez/Cape routes, US rail land bridge, USGC exporters",
    "substitution": "weeks–months"
  },
  {
    "rank": 8,
    "chokepoint": "Cape of Good Hope",
    "volEcon": 3,
    "commodity": 3,
    "bypassDeficit": 1,
    "military": 2,
    "climate": 4,
    "composite": 2.6,
    "beneficiaries": "Bunkering hubs (South Africa/Mauritius), tanker owners",
    "substitution": "n/a (is the bypass)"
  },
  {
    "rank": 9,
    "chokepoint": "Strait of Gibraltar",
    "volEcon": 3,
    "commodity": 3,
    "bypassDeficit": 1,
    "military": 1,
    "climate": 2,
    "composite": 2,
    "beneficiaries": "Atlantic ports, transshipment hubs (Tanger Med, Algeciras)",
    "substitution": "days"
  }
];

export const scorecardNote = "Scored 1 (low) to 5 (extreme). Composite scores and ranks are analyst estimates (T3) calibrated to the cited T1/T2 volume anchors; bypass-deficit and military contestability are double-weighted in the rank ordering. The three highest-ranked chokepoints (Hormuz, Taiwan, Malacca) all face Asia and lack scalable bypass — a single-basin disruption has no near-term substitution path.";

export const dataQuality = {
  "high": "EIA chokepoint volumes (Hormuz 20 mb/d 2024, Malacca 23.2 mb/d 1H25); CSIS Taiwan Strait $2.45tn; Panama transit counts (gCaptain/IMF).",
  "moderate": "Cape of Good Hope diverted-volume and record-tanker figures (PROVISIONAL-2026); Danish Straits shadow-tanker share (CREA).",
  "quarantined": "Composite 1–5 scores and ranks are analyst estimates (T3) calibrated to cited volume anchors — directional, not measured."
};

export const relatedSectors = "The node-level deep dive (Hormuz, Kharg, Ras Tanura, Abqaiq, bypass pipelines, mine warfare) lives on /outlook/infrastructure; the cable dimension on /structural/digital and /markets/defense; oil/LNG flow impact on /markets/energy.";
