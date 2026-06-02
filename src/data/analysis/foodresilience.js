// GENERATED from IranWarTracker/data/cascades/foodresilience.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "card.food.china_reserves",
    "icon": "01",
    "title": "China Strategic Grain Reserve Dominance",
    "category": "Scorecard",
    "summary": "China holds ~51% world wheat, ~67% corn, ~60% rice stocks; feeds ~19% of humanity on ~7% arable land. Largest buffer globally; structural food-security hedge.",
    "metrics": [
      {
        "label": "World wheat stocks",
        "value": "~51%"
      },
      {
        "label": "World corn stocks",
        "value": "~67%"
      },
      {
        "label": "World rice stocks",
        "value": "~60%"
      },
      {
        "label": "World pop fed",
        "value": "~19%"
      },
      {
        "label": "Arable land",
        "value": "~7%"
      },
      {
        "label": "Period",
        "value": "2022-2024"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "USDA via CPG",
        "url": "https://en.clickpetroleoegas.com.br/with-only-7-of-the-planets-agricultural-land-china-feeds-nearly-one-fifth-of-humanity-and-still-accumulates-the-largest-grain-reserve-in-the-btl96/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "agriculture"
      ],
      "entities": [
        "china",
        "usda"
      ],
      "scenarios": [],
      "position": {},
      "asOf": "2024"
    }
  },
  {
    "id": "card.food.import_dependency_cluster",
    "icon": "02",
    "title": "High-Dependency Food Importer Cluster",
    "category": "Scorecard",
    "summary": "Gulf imports ~85–90% of food; Egypt ~12 MMT wheat MY23/24 (Russia ~70%); Japan/S Korea caloric self-sufficiency 40%/44%. Structural fragility cluster.",
    "metrics": [
      {
        "label": "Gulf food import",
        "value": "~85–90%"
      },
      {
        "label": "Egypt wheat imports mmt",
        "value": "~12"
      },
      {
        "label": "Egypt russia share",
        "value": "~70%"
      },
      {
        "label": "Japan self sufficiency",
        "value": "~40%"
      },
      {
        "label": "Korea self sufficiency",
        "value": "~44%"
      },
      {
        "label": "Period",
        "value": "2023-2024"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "All About Feed",
        "url": "https://www.allaboutfeed.net/market/feed-statistics/egypt-wheat-and-corn-imports-high-in-2024/",
        "tier": "T2"
      },
      {
        "name": "Japan MAFF via Wikipedia",
        "url": "https://en.wikipedia.org/wiki/List_of_countries_by_food_self-sufficiency_rate",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "agriculture"
      ],
      "entities": [
        "egypt",
        "saudi-arabia",
        "uae",
        "japan",
        "south-korea",
        "pakistan"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike"
      ],
      "position": {
        "hormuz_closure": "loser"
      },
      "asOf": "2024"
    }
  }
];

export const thesis = "Food-system resilience is bifurcated between a reserve-hoarding giant and a cluster of high-dependency importers. The 12 Phase-2 reference economies are scored 1–5 (5 = most resilient/least exposed) on caloric self-sufficiency, GFSI, fertilizer dependency, water/desal dependency and import-chokepoint exposure. The scorecard cleanly separates structural buffers (China's stockpile, US/Brazil/Russia/EU export surpluses) from structural fragility (Egypt, Pakistan). The Gulf (Saudi, UAE) is the unique case of high GFSI funding capacity but near-total physical import and water dependency — a fiscal-cushion model rather than a resilience model.";

export const scorecard = [
  {
    "economy": "United States",
    "caloric": "~124% (net exporter); imports ~20% by value",
    "gfsi": "78",
    "fertilizer": "Low (domestic + Canada potash)",
    "water": "Low",
    "chokepoint": "Low",
    "resilience": 5,
    "anchor": "Japan MAFF"
  },
  {
    "economy": "China",
    "caloric": "~95% staples; ~51% world wheat, ~67% corn, ~60% rice stocks",
    "gfsi": "74.2",
    "fertilizer": "Medium",
    "water": "Medium",
    "chokepoint": "Medium (Malacca grain/soy)",
    "resilience": 4,
    "anchor": "USDA via CPG"
  },
  {
    "economy": "EU",
    "caloric": "~100% aggregate (net exporter)",
    "gfsi": "~77–80",
    "fertilizer": "High (Russia/Belarus potash, gas-based N)",
    "water": "Low",
    "chokepoint": "Medium (Black Sea/Suez)",
    "resilience": 4,
    "anchor": "World Population Review"
  },
  {
    "economy": "Brazil",
    "caloric": ">100% (major exporter)",
    "gfsi": "65.1",
    "fertilizer": "High (imports ~85% fertilizer)",
    "water": "Low",
    "chokepoint": "Low",
    "resilience": 4,
    "anchor": "World Population Review"
  },
  {
    "economy": "Russia",
    "caloric": ">100% (top wheat exporter)",
    "gfsi": "69.1",
    "fertilizer": "Low (fertilizer exporter)",
    "water": "Low",
    "chokepoint": "Medium (Turkish/Danish straits)",
    "resilience": 4,
    "anchor": "World Population Review"
  },
  {
    "economy": "India",
    "caloric": "Self-sufficient wheat/rice; stocks ~60.4 MMT (~3× buffer, May 2026)",
    "gfsi": "58.9",
    "fertilizer": "High (Gulf urea)",
    "water": "Medium",
    "chokepoint": "High (Hormuz fertilizer)",
    "resilience": 3,
    "anchor": "Govt of India FCI"
  },
  {
    "economy": "Japan",
    "caloric": "~40% (calorie basis, 2009 baseline)",
    "gfsi": "79.5",
    "fertilizer": "High (imports most)",
    "water": "Low",
    "chokepoint": "High (Malacca/Hormuz energy+food)",
    "resilience": 3,
    "anchor": "Japan MAFF"
  },
  {
    "economy": "South Korea",
    "caloric": "~44% (calorie basis, 2007 baseline)",
    "gfsi": "70.2",
    "fertilizer": "High",
    "water": "Low",
    "chokepoint": "High (Malacca/Hormuz)",
    "resilience": 2,
    "anchor": "Japan MAFF"
  },
  {
    "economy": "Saudi Arabia",
    "caloric": "Low (abandoned wheat self-sufficiency 2016)",
    "gfsi": "69.9",
    "fertilizer": "High",
    "water": "Very high (desalination)",
    "chokepoint": "High (Hormuz/Bab el-Mandeb)",
    "resilience": 2,
    "anchor": "World Population Review"
  },
  {
    "economy": "UAE",
    "caloric": "Very low; imports ~85–90% of food",
    "gfsi": "75.2",
    "fertilizer": "High",
    "water": "Very high (desal)",
    "chokepoint": "Very high (Hormuz)",
    "resilience": 2,
    "anchor": "TRT/Emirates247"
  },
  {
    "economy": "Egypt",
    "caloric": "Low; ~12 MMT wheat MY23/24 (Russia ~70%); subsidized bread ~70M",
    "gfsi": "56",
    "fertilizer": "High",
    "water": "High (Nile stress)",
    "chokepoint": "Very high (Bab el-Mandeb/Suez/Turkish straits grain)",
    "resilience": 1,
    "anchor": "All About Feed"
  },
  {
    "economy": "Pakistan",
    "caloric": "Marginal; thin fiscal buffer",
    "gfsi": "52.2",
    "fertilizer": "High (Gulf LNG→urea)",
    "water": "High",
    "chokepoint": "High (Hormuz)",
    "resilience": 1,
    "anchor": "World Population Review"
  }
];

export const signalNote = "Scored 1 (most fragile) to 5 (most resilient). Caloric self-sufficiency and GFSI are anchored to cited data; reserve-days and water-dependency draw on Section 5 and public proxies where reserve figures are not disclosed. The scorecard separates structural buffers (China's stockpile, US/Brazil/Russia/EU surpluses) from structural fragility (Egypt, Pakistan — low self-sufficiency, thin fiscal capacity, multiple chokepoint exposure). Where strategic grain-reserve days are not publicly disclosed (most Gulf states, Egypt), VegaReady uses import-cover proxies rather than fabricate reserve figures.";

export const dataQuality = {
  "high": "India FCI stock figures; US/EU/Brazil/Russia net-exporter status; documented Gulf/Egypt import-dependency.",
  "moderate": "GFSI 2022 scores — Economist Impact discontinued the index after 2022, so these are stale/last-published (treat as MEDIUM, not current); China stock-share figures (USDA via CPG, T2); Japan/Korea caloric self-sufficiency (MAFF, 2007–2009 vintages); Gulf import-dependency (TRT/Emirates247).",
  "quarantined": "Reserve-day figures where not publicly disclosed (most Gulf states, Egypt) — import-cover proxies used instead of fabricated reserve days."
};

export const relatedSectors = "The conflict-specific food deep dive (fertilizer cascade, FAO index, WFP hunger projection, GCC reserves) is on /markets/food-agriculture; desalination dependency on /markets/water; country fiscal stress on /exposure and /markets/credit.";
