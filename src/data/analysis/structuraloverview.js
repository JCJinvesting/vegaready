// GENERATED from IranWarTracker/data/cascades/structuraloverview.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const execSummary = "Structural Risk is a permanent-infrastructure inventory: it converts the conflict-specific findings of Sections 1–6 into six standing tracking verticals — chokepoints, commodity weaponization, de-globalization, digital fragmentation, food resilience, and the monitoring schema that binds them. Each tracked entity is scored, tiered, and mapped to the four VegaReady scenarios, so the structural library is queryable alongside event data. These are the slow-moving fault lines beneath the fast-moving market response.";

export const keyFindings = [
  "Maritime chokepoint concentration is the single largest structural vulnerability — ~20 mb/d of oil (~20% of consumption) transits Hormuz, and the three highest-risk chokepoints (Hormuz, Taiwan, Malacca) all face Asia with no scalable bypass.",
  "Commodity weaponization has a stable signature: a single-digit-percent supply removal historically produces a 100–300% price move, and the weapon has diversified from oil to gas, grain and critical minerals.",
  "De-globalization is real in trade flows but unrealized in capital — the announcement-vs-delivery gap is the signal; bloc-to-bloc FDI fell 30% after Q1 2022.",
  "US tariffs have re-priced trade exposure to a ~90-year high (17.8% average effective rate, highest since 1934).",
  "Internet fragmentation layers a physical chokepoint (Red Sea ~17% of traffic, ~63 repair ships globally) on a policy one (internet freedom down a 14th straight year).",
  "Food resilience is bifurcated — China holds ~51% of world wheat stocks while Egypt and Pakistan sit one shock from crisis.",
  "Submarine-cable sabotage is now a standing grey-zone channel with a verifiable incident record — anchor-drag cuts in the Baltic (C-Lion1/BCS, Nov 2024) and Taiwan/Matsu (>20 cuts in five years), plus the Sep 2025 Jeddah cut of four cables."
];

export const pillars = [
  {
    "name": "Chokepoint Vulnerability Index",
    "slug": "chokepoints",
    "summary": "Nine maritime/geoeconomic chokepoints scored 1–5; Hormuz ranks #1 (4.4).",
    "metric": "Hormuz 4.4/5 · rank #1"
  },
  {
    "name": "Commodity Weaponization Tracker",
    "slug": "weaponization",
    "summary": "A pattern library of 11 historical/active episodes of commodity coercion.",
    "metric": "Single-digit % removal → 100–300% price"
  },
  {
    "name": "De-globalization Metrics",
    "slug": "deglobalization",
    "summary": "FDI fragmentation, reshoring delivery gap, and the tariff index at a 90-year high.",
    "metric": "Tariffs 17.8% · bloc FDI −30%"
  },
  {
    "name": "Digital Sovereignty Index",
    "slug": "digital",
    "summary": "Cable chokepoints + repair scarcity layered on internet-control policy.",
    "metric": "Red Sea ~17% traffic · 63 repair ships"
  },
  {
    "name": "Food Resilience Scorecard",
    "slug": "food",
    "summary": "12 reference economies scored on self-sufficiency, fertilizer, water and chokepoint exposure.",
    "metric": "China buffer vs Egypt/Pakistan fragility"
  }
];

export const methodology = {
  "scoring": "Each tracked entity is scored 1 (low risk/exposure) to 5 (extreme) across standardized factors. For the Chokepoint Index: volume/economic throughput, commodity criticality, bypass deficit (inverted), military contestability, and climate/physical risk — with bypass-deficit and contestability double-weighted in the rank ordering.",
  "tiers": "T1 = official/institutional primary sources. T2 = credible press, proprietary and institutional research. T3 = model/estimate/aggregator/social. Where a T2 outlet quotes an underlying T1 figure, it is labeled T2-citing-T1.",
  "confidence": "HIGH = multiple T1/T2 sources agree or a single authoritative T1. MEDIUM = single credible source or modest conflict. LOW = contested, dated, or proxy-derived.",
  "cadence": "Tier-1 structural facts (chokepoint geography, historical embargo records) are reviewed annually; Tier-2 dynamic flows (transit volumes, FDI, tariffs) quarterly; fast-moving signals (cable faults, REE-export YoY, FAO index) monthly to event-driven.",
  "scenarioMapping": "Each record carries a scenario_mapping field linking it to one or more of the four reference scenarios (hormuz_closure, oil_strike, cable_severance, ceasefire), so the structural library is queryable alongside Phase-2 event data."
};

export const schemaFields = [
  {
    "field": "id",
    "type": "string",
    "description": "Unique stable identifier (e.g. chokepoint.hormuz.oil_transit)"
  },
  {
    "field": "metric",
    "type": "string",
    "description": "Human-readable metric name"
  },
  {
    "field": "geography",
    "type": "string",
    "description": "ISO region/country or chokepoint name"
  },
  {
    "field": "unit",
    "type": "string",
    "description": "Measurement unit (mb/d, %, USD bn, Tbps, score)"
  },
  {
    "field": "source",
    "type": "object",
    "description": "{name, url, tier} — tier ∈ {T1, T2, T3}"
  },
  {
    "field": "tier",
    "type": "enum",
    "description": "Data-confidence tier T1/T2/T3"
  },
  {
    "field": "update_frequency",
    "type": "enum",
    "description": "annual | quarterly | monthly | weekly | daily/event"
  },
  {
    "field": "trigger_thresholds",
    "type": "object",
    "description": "{watch, alert, critical} numeric or boolean triggers"
  },
  {
    "field": "scenario_mapping",
    "type": "array",
    "description": "Subset of [hormuz_closure, oil_strike, cable_severance, ceasefire]"
  },
  {
    "field": "confidence",
    "type": "enum",
    "description": "HIGH | MEDIUM | LOW"
  },
  {
    "field": "lastUpdated",
    "type": "date",
    "description": "ISO date of last refresh"
  }
];

export const thresholds = [
  {
    "metric": "Hormuz oil transit",
    "watch": "<18 mb/d",
    "alert": "<12 mb/d",
    "critical": "<6 mb/d (≈closure)",
    "cadence": "daily/event"
  },
  {
    "metric": "Bab el-Mandeb transit",
    "watch": "<6 mb/d",
    "alert": "<4 mb/d",
    "critical": "<2 mb/d",
    "cadence": "weekly"
  },
  {
    "metric": "Red Sea cable faults (concurrent)",
    "watch": "≥2",
    "alert": "≥3",
    "critical": "≥4 (Sep-2025 type)",
    "cadence": "daily/event"
  },
  {
    "metric": "China REE-magnet export YoY",
    "watch": "−20%",
    "alert": "−50%",
    "critical": "−74% (May-2025 type)",
    "cadence": "monthly"
  },
  {
    "metric": "US avg effective tariff rate",
    "watch": ">10%",
    "alert": ">15%",
    "critical": ">17.8% (1934 high)",
    "cadence": "quarterly"
  },
  {
    "metric": "Bloc-to-bloc FDI gap",
    "watch": "−10%",
    "alert": "−20%",
    "critical": "−30% (post-Q1'22)",
    "cadence": "quarterly"
  },
  {
    "metric": "FAO Food Price Index",
    "watch": ">120",
    "alert": ">130",
    "critical": ">150 (2022 type)",
    "cadence": "monthly"
  }
];

export const thresholdsNote = "These trigger thresholds are the production spec for the live watch layer (watch / alert / critical). The live status — where each metric sits today against its thresholds — graduates to the Dashboard in a later pass; this page presents the framework and the current snapshot values from the research.";

export const jsonTemplate = "{ \"id\": \"chokepoint.hormuz.oil_transit\", \"metric\": \"Strait of Hormuz oil transit volume\", \"geography\": \"Strait of Hormuz\", \"unit\": \"million barrels per day\", \"source\": {\"name\": \"EIA\", \"url\": \"https://www.eia.gov/...\", \"tier\": \"T1\"}, \"tier\": \"T1\", \"update_frequency\": \"daily/event\", \"trigger_thresholds\": {\"watch\": 18, \"alert\": 12, \"critical\": 6}, \"scenario_mapping\": [\"hormuz_closure\", \"oil_strike\"], \"confidence\": \"HIGH\", \"value\": 20.0, \"as_of\": \"2024\", \"lastUpdated\": \"2026-05-30\" }";

export const sourceConflict = [
  {
    "figure": "Hormuz oil transit",
    "contested": "20 vs 20.9 mb/d",
    "issue": "EIA 20.9 for 2023; 20 for 2024 — use 2024 base",
    "anchor": "EIA 2024 = 20 mb/d",
    "tier": "T1"
  },
  {
    "figure": "Taiwan Strait share",
    "contested": "\">20%\" vs \"~50% container traffic\"",
    "issue": "The ~50% (YES Containers) is container-only/aggregator; CSIS \">20% of all maritime trade\" is defensible",
    "anchor": "CSIS 20%+ ($2.45tn, 2022)",
    "tier": "T2"
  },
  {
    "figure": "Submarine cable count",
    "contested": "~530 vs ~600 vs ~570",
    "issue": "TeleGeography revises continuously; use ~600 / ~1.5M km with a rounding caveat",
    "anchor": "TeleGeography FAQ",
    "tier": "T1"
  },
  {
    "figure": "Red Sea internet share",
    "contested": "\"~17%\" vs \">90% Europe-Asia\"",
    "issue": "Different denominators (global all-traffic vs Europe–Asia bandwidth) — not contradictory; report both",
    "anchor": "CSIS / Widdershoven",
    "tier": "T2/T3"
  },
  {
    "figure": "LEO vs subsea capacity ratio",
    "contested": "\"175×\"",
    "issue": "Single-blog source (ABHS); directionally consistent but not an anchor",
    "anchor": "Directional only",
    "tier": "T3"
  },
  {
    "figure": "China grain-stock shares",
    "contested": "~51% wheat / ~67% corn",
    "issue": "USDA estimates revised and aggregator-restated (CPG) — prefer direct USDA PSD",
    "anchor": "USDA PSD",
    "tier": "T2"
  },
  {
    "figure": "GFSI scores",
    "contested": "2022 index values",
    "issue": "Economist Impact discontinued GFSI after 2022; scores are stale — flag as last-published, not current",
    "anchor": "GFSI 2022 (last-published)",
    "tier": "T2"
  },
  {
    "figure": "Caloric self-sufficiency",
    "contested": "Japan ~40% (2009), Korea ~44% (2007)",
    "issue": "Dated baselines (2007–2010); refresh against FAOSTAT — directional only",
    "anchor": "Japan MAFF / FAOSTAT",
    "tier": "T2"
  },
  {
    "figure": "Cape of Good Hope record traffic",
    "contested": "24M dwt/wk (wk Apr 13)",
    "issue": "Single-wire PROVISIONAL-2026; the 9.2 mb/d Jan–Aug 2024 flow is the clean T1 figure",
    "anchor": "EIA/Vortexa 9.2 mb/d",
    "tier": "T2"
  },
  {
    "figure": "Gulf/Egypt strategic reserve-days",
    "contested": "not publicly disclosed",
    "issue": "Most Gulf states and Egypt do not disclose reserve-days — use FX import-cover proxies; do not fabricate reserve figures",
    "anchor": "Import-cover proxy",
    "tier": "—"
  },
  {
    "figure": "Iraq Hormuz share",
    "contested": "22–23%",
    "issue": "Single aggregator vs EIA — report as ~22%",
    "anchor": "EIA",
    "tier": "T2"
  },
  {
    "figure": "Russia gas import decline",
    "contested": "−80% vs −83%",
    "issue": "Sources differ — report as >80% range",
    "anchor": ">80% (range)",
    "tier": "T2"
  }
];
