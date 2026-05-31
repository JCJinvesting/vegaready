// GENERATED from IranWarTracker/data/cascades/foodag.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "S5-FERT-001",
    "icon": "01",
    "title": "Gulf Fertilizer Export Blackout — Force Majeure Cascade",
    "category": "Fertilizer / Agriculture",
    "summary": "Gulf region (36% of global urea exports, 29% ammonia, ~50% sulfur) effectively blocked from export since Feb 28. Iran halted ammonia production; Qatar (QAFCO 5.6 Mt/yr Mesaieed urea plant) shut down March 4 after QatarEnergy strikes; Industries Qatar and SABIC Agri-Nutrients declared force majeure on fertilizer shipments to South America and Asia. The often-cited ~21 Mt annual Gulf urea export-capacity and ~4 Mt DAP capacity-at-risk estimate is treated as T2/T3 proxy only, not a headline anchor.",
    "metrics": [
      {
        "label": "Gulf urea export share",
        "value": "36% of global (2023-2025)"
      },
      {
        "label": "Gulf ammonia export share",
        "value": "29% of global (2023-2025)"
      },
      {
        "label": "Gulf sulfur share",
        "value": "~50% of globally traded sulfur"
      },
      {
        "label": "Qafco capacity shut",
        "value": "5.6 Mt/yr Mesaieed urea plant (QatarEnergy); shut March 4, 2026"
      },
      {
        "label": "Qatarenergy LNG damage repair",
        "value": "3-5 years per CEO Kaabi statement March 19, 2026"
      },
      {
        "label": "Urea export capacity disrupted",
        "value": "Not anchored — ~21 Mt/yr Iran + Qatar + Saudi Arabia estimate is Serrari/Oxford proxy; see Data Quality Exceptions"
      },
      {
        "label": "Stranded fertilizer cargo",
        "value": "~1 million metric tonnes (21 ships as of March 13, 2026)"
      },
      {
        "label": "Fertilizer vessels exited gulf",
        "value": "Only 5 since Feb 28 (as of March 27, 2026 — Kpler)"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "IFPRI",
        "url": "https://www.ifpri.org/blog/the-iran-wars-impacts-on-global-fertilizer-markets-and-food-production/",
        "tier": "T1"
      },
      {
        "name": "S&P Global (QatarEnergy LNG damage)",
        "url": "https://www.spglobal.com/energy/en/news-research/latest-news/electric-power/031926-qatarenergy-expects-3-5-years-to-repair-lng-facilities-after-strikes",
        "tier": "T2"
      },
      {
        "name": "CRU Group (QAFCO shutdown)",
        "url": "https://www.crugroup.com/en/communities/thought-leadership/2026/Middle-East-Conflict-Urea-supply-disruptions-could-be-catastrophic/",
        "tier": "T2"
      },
      {
        "name": "Carnegie Endowment (force majeure)",
        "url": "https://carnegieendowment.org/emissary/2026/03/fertilizer-iran-hormuz-food-crisis",
        "tier": "T2"
      },
      {
        "name": "Kpler (vessels exited)",
        "url": "https://www.kpler.com/blog/the-strait-of-hormuz-blockade-what-it-means-for-grain-and-food-security",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "fertilizer",
        "agriculture"
      ],
      "entities": [
        "qatar",
        "iran",
        "saudi-arabia",
        "qafco",
        "sabic",
        "qatarenergy",
        "hormuz",
        "ifpri"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike"
      ],
      "position": {
        "hormuz_closure": "loser"
      },
      "asOf": "2026-03-13"
    }
  },
  {
    "id": "S5-FERT-002",
    "icon": "02",
    "title": "Urea Price Shock — NOLA, Global Benchmarks",
    "category": "Fertilizer / Commodity Pricing",
    "summary": "Urea prices: +32% at NOLA in 1 week (Feb 27 to Mar 5), +80% globally by April (above $850/tonne — highest since Apr 2022). World Bank projects +60% YoY for full year 2026; Oxford Economics projects +30%+ on the overall fertilizer index. Grain-to-urea price ratio lowest since 1960.",
    "metrics": [
      {
        "label": "Urea NOLA feb27",
        "value": "$516/tonne"
      },
      {
        "label": "Urea NOLA mar5",
        "value": "$683/tonne (+32% in 1 week)"
      },
      {
        "label": "Urea global pre war",
        "value": "$465.5/tonne"
      },
      {
        "label": "Urea global mar11",
        "value": "$585/tonne (+26%)"
      },
      {
        "label": "Urea global april peak",
        "value": ">$850/tonne (+80% since Feb)"
      },
      {
        "label": "Urea WB forecast 2026",
        "value": "+60% YoY"
      },
      {
        "label": "Fertilizer index WB forecast 2026",
        "value": "+31% YoY"
      },
      {
        "label": "Oxford econ fertilizer forecast",
        "value": ">30% YoY 2026"
      },
      {
        "label": "Urea feb to mar mom",
        "value": "+46% MoM (World Bank data)"
      },
      {
        "label": "Grain to urea ratio",
        "value": "Lowest since 1960 (Oxford Economics)"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "CSIS",
        "url": "https://www.csis.org/analysis/chokepoint-how-war-iran-threatens-global-food-security",
        "tier": "T1"
      },
      {
        "name": "World Bank Fertilizer Tracker",
        "url": "https://blogs.worldbank.org/en/opendata/fertilizer-prices-surge-as-strait-of-hormuz-disruptions-tighten-",
        "tier": "T1"
      },
      {
        "name": "World Bank Commodity Markets Outlook April 2026",
        "url": "https://openknowledge.worldbank.org/server/api/core/bitstreams/b2dbffe7-2f9f-41c3-a6cc-4ddfa3b37c1a/content",
        "tier": "T1"
      },
      {
        "name": "World Bank FNS Update 121",
        "url": "https://thedocs.worldbank.org/en/doc/40ebbf38f5a6b68bfc11e5273e1405d4-0090012022/related/Food-and-Nutrition-Security-Update-121-March-27-2026v2.pdf",
        "tier": "T1"
      },
      {
        "name": "Oxford Economics via Arab News",
        "url": "https://www.arabnews.com/node/2645092/business-economy",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "fertilizer",
        "commodities"
      ],
      "entities": [
        "world-bank",
        "oxford-economics",
        "brazil",
        "csis"
      ],
      "scenarios": [
        "hormuz_closure"
      ],
      "position": {},
      "asOf": "2026-05-14"
    }
  },
  {
    "id": "S5-FOOD-001",
    "icon": "03",
    "title": "FAO Food Price Index — Third Consecutive Monthly Increase",
    "category": "Food Prices",
    "summary": "FAO FFPI averaged 130.7 points in April 2026 (+1.6% MoM, +2.0% YoY), the third consecutive monthly increase. Vegetable oil sub-index reached its highest since July 2022. FAO revised 2026 world wheat production to 817 Mt (-2% YoY). Over first 2 months post-conflict: global food prices +5%, oils/meals +10%, grains +3% — materially less than the +15% food price surge in the comparable 2-month window after Russia's Ukraine invasion.",
    "metrics": [
      {
        "label": "FFPI april 2026",
        "value": "130.7 points"
      },
      {
        "label": "FFPI mom",
        "value": "+1.6%"
      },
      {
        "label": "FFPI YoY",
        "value": "+2.0%"
      },
      {
        "label": "Vegetable oil index",
        "value": "Highest since July 2022"
      },
      {
        "label": "Meat index YoY",
        "value": "+6.4%"
      },
      {
        "label": "Sugar index YoY",
        "value": "-21.2%"
      },
      {
        "label": "Food price 2month post conflict",
        "value": "+5%"
      },
      {
        "label": "Oils meals 2month post conflict",
        "value": "+10%"
      },
      {
        "label": "Grains 2month post conflict",
        "value": "+3%"
      },
      {
        "label": "Q1 wheat prices qq",
        "value": "+9%"
      },
      {
        "label": "Q1 soybean oil qq",
        "value": "+16%; +25% YoY"
      },
      {
        "label": "World wheat production 2026 forecast",
        "value": "817 Mt (-2% YoY)"
      },
      {
        "label": "Comparison ukraine 2month",
        "value": "+15% (vs. current +5%)"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "FAO FFPI (official)",
        "url": "https://www.fao.org/newsroom/detail/fao-food-price-index-up-for-third-consecutive-month-largely-on-rising-vegetable-oil-prices/en",
        "tier": "T1"
      },
      {
        "name": "World Bank CMO May 2026",
        "url": "https://blogs.worldbank.org/en/opendata/food-prices-feel-the-heat-as-war-in-the-middle-east-rattles-comm",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "agriculture",
        "commodities"
      ],
      "entities": [
        "fao",
        "world-bank"
      ],
      "scenarios": [
        "hormuz_closure"
      ],
      "position": {},
      "asOf": "2026-05-08"
    }
  },
  {
    "id": "S5-HUNGER-001",
    "icon": "04",
    "title": "WFP Acute Hunger Projection — 45 Million Additional People",
    "category": "Food Security / Humanitarian",
    "summary": "WFP estimates 45 million additional people could face acute hunger (IPC3+) in 2026 if conflict persists through Q2 with oil above $100/bbl, on top of 318 million already food-insecure. More than half would be in Sub-Saharan Africa and MENAAP. Asia: +24% (9.1M); West/Central Africa: +21% (10.4M); East/Southern Africa: +17% (17.7M); MENA: +14% (5.2M).",
    "metrics": [
      {
        "label": "Existing food insecure",
        "value": "318 million (pre-conflict baseline)"
      },
      {
        "label": "WFP projected additional",
        "value": "45 million (conditional on conflict persisting + oil >$100/bbl through Q2 2026)"
      },
      {
        "label": "Potential total food insecure",
        "value": "Up to 363 million"
      },
      {
        "label": "Asia increase",
        "value": "+9.1 million (+24%)"
      },
      {
        "label": "West central africa increase",
        "value": "+10.4 million (+21%)"
      },
      {
        "label": "East southern africa increase",
        "value": "+17.7 million (+17%)"
      },
      {
        "label": "Mena increase",
        "value": "+5.2 million (+14%)"
      },
      {
        "label": "Latam increase",
        "value": "+2.2 million (+16%)"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "WFP (March 17, 2026)",
        "url": "https://www.wfp.org/news/wfp-projects-food-insecurity-could-reach-record-levels-result-middle-east-escalation",
        "tier": "T1"
      },
      {
        "name": "WFP (April 2, 2026 — projected increase publication)",
        "url": "https://www.wfp.org/publications/projected-increase-acute-food-insecurity-due-middle-east-conflict",
        "tier": "T1"
      },
      {
        "name": "World Bank Food Security Update",
        "url": "https://www.worldbank.org/en/topic/agriculture/brief/food-security-update",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "agriculture"
      ],
      "entities": [
        "wfp",
        "ethiopia"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike"
      ],
      "position": {
        "hormuz_closure": "loser"
      },
      "asOf": "2026-04-02"
    }
  },
  {
    "id": "S5-GCC-FOOD-001",
    "icon": "05",
    "title": "GCC Food Reserve Adequacy and Chokepoint Concentration",
    "category": "Food Security / GCC",
    "summary": "GCC imports 70–90% of food; Bahrain, Kuwait, Qatar, Oman, UAE have 100% Hormuz chokepoint exposure for food imports (Saudi Arabia: 59% via Hormuz). Staple reserves: 3–4 months for most GCC states (Bahrain, Kuwait); Qatar up to 2 years for staples (Hamad Port terminal); UAE 4–6 months. Critical vulnerability: fresh produce (Saudi imports 82% of fresh fruit); strategic reserves cover only staples, not perishables.",
    "metrics": [
      {
        "label": "GCC food import dependency range",
        "value": "70-90%"
      },
      {
        "label": "Bahrain kuwait qarar oman uae hormuz exposure",
        "value": "100% for imported food"
      },
      {
        "label": "Saudi hormuz exposure",
        "value": "59% (Red Sea alternative routes available)"
      },
      {
        "label": "Bahrain kuwait staple reserves months",
        "value": "3-4 months"
      },
      {
        "label": "UAE staple reserves months",
        "value": "4-6 months"
      },
      {
        "label": "Qatar staple reserves",
        "value": "Up to 2 years (Hamad Port Food Security Terminal)"
      },
      {
        "label": "Saudi food import dependency",
        "value": "80-85%"
      },
      {
        "label": "Saudi fresh fruit imports",
        "value": "82% of fresh fruit imported"
      },
      {
        "label": "GCC cereal import dependency",
        "value": "95%; 59% Hormuz-exposed"
      },
      {
        "label": "GCC sugar import dependency",
        "value": "97%; 96% Hormuz-exposed"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "FAO RNE / Goumbook",
        "url": "https://goumbook.com/when-the-route-is-the-risk-gcc-food-import-vulnerability-through-the-strait-of-hormuz/",
        "tier": "T2 (FAO RNE strategy unit cited as underlying data)"
      },
      {
        "name": "Dutch Ministry of Agriculture GCC food systems report",
        "url": "https://www.agroberichtenbuitenland.nl/actueel/nieuws/2026/03/31/impact-of-the-middle-east-war-on-food-systems-in-the-gcc",
        "tier": "T2"
      },
      {
        "name": "The National",
        "url": "https://www.thenationalnews.com/news/gulf/2026/04/01/how-years-of-planning-have-allowed-gulf-food-security-systems-to-weather-the-iran-war-shock/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "agriculture"
      ],
      "entities": [
        "saudi-arabia",
        "uae",
        "qatar",
        "kuwait",
        "bahrain",
        "oman",
        "hormuz",
        "fao"
      ],
      "scenarios": [
        "hormuz_closure"
      ],
      "position": {
        "hormuz_closure": "loser"
      },
      "asOf": "2026-04-01"
    }
  }
];

export const thesis = "The most severe simultaneous shock to fertilizer, food security and harvests since the 2022 Ukraine war — but transmitting differently. Where Russia's war removed grain supply directly, the 2026 crisis works through input-cost inflation that suppresses FUTURE harvests rather than depleting current stocks. The Gulf is 36% of global urea exports; urea has run +80% to >$850/t; the FAO Food Price Index has risen three months straight; and the WFP projects up to 45M additional acutely hungry. The delayed fuse — reduced fertilizer application now, lower yields 6–12 months out — is the most tradeable lag in the cascade.";

export const priceTrajectory = [
  {
    "phase": "Pre-war",
    "level": "~$465–516/t",
    "change": "baseline",
    "note": "NOLA $516 (Feb 27); global benchmark $465.5."
  },
  {
    "phase": "Week 1",
    "level": "$683/t NOLA",
    "change": "+32% in a week",
    "note": "CSIS (Mar 5); global $585 (+26%) by Mar 11."
  },
  {
    "phase": "Feb → Mar",
    "level": "—",
    "change": "+46% MoM",
    "note": "Largest single-month MoM increase on record (World Bank)."
  },
  {
    "phase": "April peak",
    "level": ">$850/t",
    "change": "+80% since Feb",
    "note": "Highest since Apr 2022 (World Bank, T1)."
  }
];

export const forwardProjections = "World Bank: fertilizer index +31% YoY 2026, urea +60%, before easing in 2027. FAO (Torero): +15–20% in H1; if half of world urea exports are impacted, urea could 'more than double.' Yara CEO: ~0.5Mt of nitrogen not being produced; up to 50% first-season yield loss on the most-exposed crops; trade delays could cost up to 10 billion meals a week. Oxford Economics: the grains-to-fertilizer price ratio is at its lowest since records began in 1960.";

export const crossShock = [
  {
    "metric": "Global food price (2-mo)",
    "ukraine": "+15%",
    "hormuz": "+5%",
    "why": "Ample grain stocks; no direct grain-export loss"
  },
  {
    "metric": "Oils & meals (2-mo)",
    "ukraine": "—",
    "hormuz": "+10% (2-yr high)",
    "why": "Higher crude + biofuel mandates"
  },
  {
    "metric": "Grains (2-mo)",
    "ukraine": "—",
    "hormuz": "+3%",
    "why": "Wheat/maize stocks adequate"
  },
  {
    "metric": "Wheat Q1 (q/q)",
    "ukraine": "—",
    "hormuz": "+9%",
    "why": "Fertilizer-cost anxiety, drought"
  },
  {
    "metric": "Soybean oil Q1 (q/q)",
    "ukraine": "—",
    "hormuz": "+16% (+25% YoY)",
    "why": "Biofuel demand from the oil spike"
  }
];

export const crossShockNote = "The muted response vs Ukraine reflects ample grain stocks and Northern-Hemisphere farmers having pre-purchased fertilizer. The shock transmits through input-cost inflation, not direct export loss — a delayed fuse that suppresses FUTURE yields, not current stocks. FAO cut its 2026 world wheat forecast to 817Mt (−2%); only 25% of wheat, 14% of corn and 10% of rice crosses borders, so small shocks swing import-dependent prices hard.";

export const regionalHunger = [
  {
    "region": "Asia (10 countries)",
    "people": "9.1M",
    "pct": "+24% (largest relative)"
  },
  {
    "region": "East & Southern Africa (16)",
    "people": "17.7M",
    "pct": "+17%"
  },
  {
    "region": "West & Central Africa (12)",
    "people": "10.4M",
    "pct": "+21%"
  },
  {
    "region": "MENA (12)",
    "people": "5.2M",
    "pct": "+14%"
  },
  {
    "region": "Latin America & Caribbean (3)",
    "people": "2.2M",
    "pct": "+16%"
  }
];

export const regionalHungerNote = "~45M additional acutely food-insecure across 53 countries IF the conflict runs through Q2 2026 with oil >$100/bbl — on top of 318M already food-insecure. WFP entered 2026 needing $13B for 110M people after donor cuts forced ~6,000 layoffs; its Sudan route (India → Salalah → Jeddah → Port Sudan) is +9,000km / +25 days.";

export const gccFood = [
  {
    "country": "Saudi Arabia",
    "dependency": "80–85%",
    "reserve": "2–4 months",
    "route": "Red Sea (meaningful)",
    "vuln": "Moderate"
  },
  {
    "country": "UAE",
    "dependency": "~85%",
    "reserve": "4–6 months (18 products)",
    "route": "Limited (Fujairah silos)",
    "vuln": "Mod-High"
  },
  {
    "country": "Qatar",
    "dependency": "~90%",
    "reserve": "2 years (Hamad Port, 51 silos)",
    "route": "Minimal",
    "vuln": "High"
  },
  {
    "country": "Kuwait",
    "dependency": "~90%",
    "reserve": "3–4 months staples",
    "route": "Limited",
    "vuln": "High"
  },
  {
    "country": "Bahrain",
    "dependency": "Highest",
    "reserve": "3–4 months staples",
    "route": "Minimal",
    "vuln": "Very High"
  },
  {
    "country": "Oman",
    "dependency": "~80%",
    "reserve": "4 months",
    "route": "Diversified ports",
    "vuln": "High"
  }
];

export const gccFoodNote = "70–90% of GCC food is imported; Bahrain, Kuwait, Qatar, Oman and the UAE each have 100% Hormuz exposure for imported food — only Saudi Arabia has meaningful Red Sea alternatives (59% Hormuz-exposed). Fresh produce is the binding constraint (Saudi imports 82% of fresh fruit); cold-chain pressure bites beyond 3–4 weeks. Carboun's Elgendy: 'beyond three months, the reserves start running thin.'";

export const scenarioMatrix = [
  {
    "scenario": "S1",
    "label": "Ceasefire + Normalization",
    "tone": "#10b981",
    "impact": "Fertilizer prices retrace from April highs; grain markets stabilize; 2026 yields hit only at the margin from late-season substitution; GCC food reserves adequate for the transition."
  },
  {
    "scenario": "S2",
    "label": "Managed Tension",
    "tone": "#22d3ee",
    "impact": "Urea stays 30–50% above pre-war through H2; a moderate 2026 yield hit in the highest-exposure regions (S/SE Asia, E Africa); WFP baseline hunger risk partially materializes; GCC food prices stay elevated."
  },
  {
    "scenario": "S3",
    "label": "Prolonged Blockade",
    "tone": "#f59e0b",
    "impact": "FAO 6–12-month food-price crisis materializes; nitrogen use falls (−7.9% in LDCs in the 2022 analog); 2026 and 2027 harvests reduced; the WFP 45M projection approaches full realization."
  },
  {
    "scenario": "S4",
    "label": "Escalation",
    "tone": "#ef4444",
    "impact": "QAFCO/SABIC fertilizer capacity permanently offline; the food crisis extends into the 2028 harvest cycle."
  }
];

export const sourceResolution = [
  {
    "item": "Gulf share of global fertilizer trade",
    "resolution": "No real conflict: 36% is the Gulf's share of global urea exports specifically (IFPRI, T1); the 20–30% figure is all fertilizer transiting Hormuz (FAO/CSIS), lower because some Saudi output moves via the Red Sea. CSIS's 35% urea sits between them."
  },
  {
    "item": "Fertilizer price-increase magnitude",
    "resolution": "The World Bank's April reading — urea >$850/t, +80% since February — is the authoritative late-period anchor (T1). Earlier figures (+32% NOLA Mar 5; +25% Fitch mid-March) are different benchmarks/dates on the same trajectory, not conflicts."
  }
];

export const dataQuality = {
  "high": "FAO FFPI (130.7), World Bank fertilizer tracker (urea >$850 / +80%), IFPRI export shares (36% urea), WFP +45M projection.",
  "moderate": "GCC reserve-depth figures (planning-grade, T2); Qatar LNG damage 3–5-year repair (CEO statement).",
  "quarantined": "~21Mt Gulf urea export-capacity-at-risk (Serrari/Oxford proxy); ~4Mt DAP-at-risk; industry-video / LinkedIn cost claims."
};

export const relatedSectors = "This is the deep dive of the /transmission Fertilizer & Ammonia and Agriculture & Food sectors — the same cascade, fully resolved.";
