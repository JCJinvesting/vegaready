// GENERATED from IranWarTracker/data/cascades/labor.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "migrant-worker-casualties-and-economic-har",
    "icon": "01",
    "title": "Migrant Worker Casualties and Economic Hardship",
    "category": "Labor / Human Rights",
    "summary": "GCC: 24M migrant workers (ILO). At least 12 South Asian deaths (BBC). HRW March 2026: 38 worker interviews across 6 GCC states — salary halving for 400+ workers documented; hospitality staffing from 25–30 to 3–4; Kuwait taxi incomes halved. Philippines: 2,000 repatriated by Mar 23. Bangladesh: ~500 repatriated.",
    "metrics": [
      {
        "label": "GCC migrant workers ILO",
        "value": "24 million",
        "tier": "T1"
      },
      {
        "label": "South asian migrant deaths bbc",
        "value": "12 minimum",
        "tier": "T2-HIGH"
      },
      {
        "label": "Hrw interviews",
        "value": "38 workers interviewed",
        "tier": "T2-HIGH"
      },
      {
        "label": "Philippines repatriated by mar23",
        "value": "2000 workers",
        "tier": "T2-HIGH"
      },
      {
        "label": "Bangladesh repatriated",
        "value": "500 workers approx.",
        "tier": "T2-HIGH"
      },
      {
        "label": "India workers gulf citi estimate",
        "value": "9 million",
        "tier": "T2"
      },
      {
        "label": "Philippines middle east workers DFA",
        "value": "2443700 workers",
        "tier": "T1 via T2"
      }
    ],
    "confidence": "high",
    "sources": [
      "ILO (cited BBC Mar 31, 2026; NPR Mar 17, 2026)",
      "BBC (Mar 31, 2026)",
      "HRW (Mar 31, 2026)",
      "Citi note via CNBC (Mar 5, 2026)",
      "Philippine DFA via Soufan Center (Apr 15, 2026)"
    ],
    "tags": {
      "assetClass": [
        "labor"
      ],
      "entities": [
        "bahrain",
        "india",
        "pakistan"
      ],
      "scenarios": [
        "hormuz_closure"
      ],
      "position": {
        "hormuz_closure": "loser"
      },
      "asOf": "2026-03-31"
    }
  },
  {
    "id": "remittance-risk-india",
    "icon": "02",
    "title": "Remittance Risk: India",
    "category": "Remittances / Macro",
    "summary": "India Gulf remittances: $51.4B (FY2025, ~38% of $135.4B total) — Citi/CNBC. Capital Economics (via DW): short conflict −5% remittances; 3+ months −30%. India income risk: $5B–$10B annually at 10–20% decline scenario.",
    "metrics": [
      {
        "label": "India total remittances FY2025",
        "value": "135.4 USD billion",
        "tier": "T2-HIGH"
      },
      {
        "label": "India gulf remittances FY2025",
        "value": "51.4 USD billion",
        "tier": "T2-HIGH"
      },
      {
        "label": "India gulf share",
        "value": "38 %",
        "tier": "T2-HIGH"
      },
      {
        "label": "Capital econ short conflict remittance drop",
        "value": "5 %",
        "tier": "T2-MODERATE"
      },
      {
        "label": "Capital econ prolonged conflict remittance drop",
        "value": "30 %",
        "tier": "T2-MODERATE"
      },
      {
        "label": "India remittance loss scenario",
        "value": "5–10 USD billion annual",
        "tier": "T2-MODERATE"
      }
    ],
    "confidence": "high",
    "sources": [
      "Citi note via CNBC (Mar 5, 2026)",
      "Citi/CNBC (Mar 5, 2026); corroborated NYT (Mar 22, 2026), DW (Mar 24, 2026)",
      "Capital Economics via DW (Mar 24, 2026)",
      "DW/Capital Economics (Mar 24, 2026)"
    ],
    "tags": {
      "assetClass": [
        "labor"
      ],
      "entities": [
        "india",
        "saudi-arabia",
        "uae"
      ],
      "scenarios": [
        "hormuz_closure"
      ],
      "position": {
        "hormuz_closure": "loser"
      },
      "asOf": "2026-05-01"
    }
  },
  {
    "id": "remittance-risk-philippines-t1-bsp-data",
    "icon": "03",
    "title": "Remittance Risk: Philippines (T1 BSP Data)",
    "category": "Remittances / Macro",
    "summary": "BSP official: Feb 2026 bank-channel remittances $2.79B (−7.7% MoM, 9-month low). Jan: $3.02B. Saudi 6.1%, UAE 4.2%, Qatar 2.9% of total inflows. DepDEV: −P167.45B risk if mass repatriation.",
    "metrics": [
      {
        "label": "PH bank remittances Jan 2026",
        "value": "3.02 USD billion",
        "tier": "T1-HIGH"
      },
      {
        "label": "PH bank remittances Feb 2026",
        "value": "2.79 USD billion",
        "tier": "T1-HIGH"
      },
      {
        "label": "PH Feb MoM change",
        "value": "-7.7 %",
        "tier": "T1-HIGH"
      },
      {
        "label": "Saudi share PH remittances",
        "value": "6.1",
        "tier": "T1-HIGH"
      },
      {
        "label": "Uae share PH remittances",
        "value": "4.2",
        "tier": "T1-HIGH"
      },
      {
        "label": "Qatar share PH remittances",
        "value": "2.9",
        "tier": "T1-HIGH"
      },
      {
        "label": "DepDEV remittance risk",
        "value": "167.45 PHP billion (~$2.9B)",
        "tier": "T1"
      }
    ],
    "confidence": "high",
    "sources": [
      "Bangko Sentral ng Pilipinas (BSP) via Khaleej Times (Apr 17, 2026)",
      "BSP via Khaleej Times (Apr 17, 2026)",
      "BSP",
      "Philippine DepDEV Secretary Balisacan via BSP/Khaleej Times (Apr 17, 2026)"
    ],
    "tags": {
      "assetClass": [
        "labor"
      ],
      "entities": [
        "philippines",
        "saudi-arabia",
        "uae",
        "qatar",
        "bsp"
      ],
      "scenarios": [
        "hormuz_closure"
      ],
      "position": {
        "hormuz_closure": "loser"
      },
      "asOf": "2026-02-28"
    }
  },
  {
    "id": "ilo-global-labor-market-projections",
    "icon": "04",
    "title": "ILO Global Labor Market Projections",
    "category": "Labor / Macro",
    "summary": "ILO May 18, 2026 Employment & Social Trends Update: under ~50% oil price scenario — 14M FTE job losses 2026, 38M in 2027; real labour income −$1.1T (2026) and −$3.0T (2027). Arab States worst hit (−10.2% hours in severe scenario). 4% non-citizen employment multiplier per 1% citizen employment contraction.",
    "metrics": [
      {
        "label": "Global FTE loss 2026",
        "value": "14 million FTE jobs",
        "tier": "T1"
      },
      {
        "label": "Global FTE loss 2027",
        "value": "38 million FTE jobs",
        "tier": "T1"
      },
      {
        "label": "Global real labour income loss 2026",
        "value": "1.1 USD trillion",
        "tier": "T1"
      },
      {
        "label": "Global real labour income loss 2027",
        "value": "3 USD trillion",
        "tier": "T1"
      },
      {
        "label": "Arab states hours decline rapid deescalation",
        "value": "1.3",
        "tier": "T1"
      },
      {
        "label": "Arab states hours decline prolonged",
        "value": "3.7",
        "tier": "T1"
      },
      {
        "label": "Arab states hours decline severe escalation",
        "value": "10.2",
        "tier": "T1"
      },
      {
        "label": "Arab states high exposure employment",
        "value": "40 %",
        "tier": "T1"
      },
      {
        "label": "Asia pacific high exposure employment",
        "value": "22 %",
        "tier": "T1"
      },
      {
        "label": "Non citizen employment multiplier",
        "value": "4 % fall per 1% citizen contraction",
        "tier": "T1"
      }
    ],
    "confidence": "medium",
    "sources": [
      "ILO Employment & Social Trends May 2026 (published May 18, 2026)",
      "ILO May 2026"
    ],
    "tags": {
      "assetClass": [
        "labor"
      ],
      "entities": [
        "bangladesh",
        "pakistan",
        "india",
        "ilo"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike"
      ],
      "position": {
        "hormuz_closure": "loser"
      },
      "asOf": "2026-05-18"
    }
  }
];

export const thesis = "Beneath the markets sit 24 million migrant workers who build the Gulf. The Hormuz shock compressed the remittance channels that carry their earnings home — India's $51.4B Gulf baseline, the Philippines' $2.79B monthly bank channel (−7.7% in February), and Pakistan/Bangladesh economies where Gulf remittances run 5–9% of GDP — while at least 12 South Asian workers were killed and the ILO projected up to 14M full-time-equivalent job losses in 2026. The binding risk is involuntary immobility, not mass exodus: kafala passport retention traps low-wage workers in place.";

export const scenarioMatrix = [
  {
    "scenario": "S1",
    "label": "Ceasefire + Normalization",
    "def": "Conflict ends; Hormuz re-opens within weeks.",
    "tone": "#10b981",
    "labor": "Repatriated workers attempt return; BSP remittances stabilize above $2.79B/month."
  },
  {
    "scenario": "S2",
    "label": "Managed Tension",
    "def": "Hormuz intermittently disrupted; partial traffic.",
    "tone": "#22d3ee",
    "labor": "Selective layoffs (tourism, hospitality); remittances declining; ILO 'prolonged crisis' scenario."
  },
  {
    "scenario": "S3",
    "label": "Prolonged Blockade",
    "def": "Hormuz remains closed 6–18 months.",
    "tone": "#f59e0b",
    "labor": "ILO 'severe escalation': Arab States −10.2% working hours; remittances −~30% (Capital Economics scenario, T2-MODERATE)."
  },
  {
    "scenario": "S4",
    "label": "Escalation",
    "def": "Military strike on pipeline/smelter infrastructure.",
    "tone": "#ef4444",
    "labor": "Mass repatriation; ~24M GCC workers face an involuntary-mobility crisis; Bangladesh/Pakistan 5–9% GDP shock."
  }
];

export const migrationExposure = [
  {
    "country": "India",
    "workers": "~9M",
    "remittances": "$51.4B (FY2025)",
    "gulfShare": "~38% of $135.4B total",
    "gdpShare": "—",
    "tier": "T2"
  },
  {
    "country": "Pakistan",
    "workers": "~6M",
    "remittances": "Gulf-sourced",
    "gulfShare": "—",
    "gdpShare": "~5–9% of GDP",
    "tier": "T2"
  },
  {
    "country": "Bangladesh",
    "workers": "~5M",
    "remittances": "Gulf-sourced",
    "gulfShare": "—",
    "gdpShare": "~5–9% of GDP",
    "tier": "T1-via-T2"
  },
  {
    "country": "Philippines",
    "workers": "~2.44M (Mideast)",
    "remittances": "$2.79B/mo bank channel (Feb, −7.7%)",
    "gulfShare": "Saudi 6.1% · UAE 4.2% · Qatar 2.9%",
    "gdpShare": "~18% of GDP",
    "tier": "T1 (BSP)"
  }
];

export const migrationNote = "GCC migrant-worker anchor: ~24M (ILO, T1). The Coalition on Labor Justice's 31M covers a broader zone (GCC + Jordan/Lebanon/Israel/Palestine/Iran) and is T3 advocacy — noted, not anchored. ≥12 South Asian migrant deaths confirmed (BBC); Saudi Arabia's Oct-2025 kafala abolition covers ~13M.";

export const humanImpact = {
  "intro": "Human Rights Watch interviewed 38 Indian, Nepali and Bangladeshi workers across all six GCC states in March 2026. At least 12 South Asian migrant-worker deaths were confirmed by late March (BBC); ~70 workers from 15+ countries were reported injured (Coalition on Labor Justice, T3).",
  "deaths": [
    {
      "name": "Dibas Shrestha",
      "detail": "29, Nepali security guard — killed at Zayed International Airport, Abu Dhabi (March 1)."
    },
    {
      "name": "SM Tareq",
      "detail": "48, Bangladeshi — killed by missile debris at ASRY, Bahrain."
    },
    {
      "name": "Saleh Ahmed",
      "detail": "Bangladeshi cab driver — killed in the UAE when missile debris pierced his water-tank truck."
    }
  ],
  "hardship": [
    "A Bahrain supply-company manager was asked by three corporate clients to halve salaries for 400+ workers.",
    "UAE hotel staffing fell from 25–30 to 3–4 per establishment; workers placed on unpaid leave.",
    "Kuwait commission taxi drivers reported income down 50%+, some to a fifth of prior earnings.",
    "Recruitment fees of NPR 300,000–400,000 (~$2,000–$2,700) turn job loss into a household debt crisis."
  ],
  "riskMode": "The binding risk is involuntary immobility, not mass exodus: kafala passport retention and visa dependency trap low-wage workers in place. The GRC/GLMM analysis (De Bel-Air, Mar 27) projects selective labor re-stratification rather than a mass departure wave, based on prior Gulf-crisis patterns. HRW received no substantive responses from GCC governments to its written queries as of late March."
};

export const precedents = [
  {
    "episode": "1990–91 Gulf War",
    "period": "~7 months",
    "labor": "Large-scale worker expulsions (historical framing; figures T3)"
  },
  {
    "episode": "2003 Iraq invasion",
    "period": "Weeks",
    "labor": "Modest Gulf migration disruption; no GCC-wide shock"
  },
  {
    "episode": "2019–20 COVID-19",
    "period": "~18 months",
    "labor": "~2M+ workers departed; global remittances −8.1% (World Bank)"
  },
  {
    "episode": "2024 Red Sea / Houthi",
    "period": "Ongoing",
    "labor": "Minimal direct labor impact"
  },
  {
    "episode": "2026 Hormuz blockade",
    "period": "~3 months",
    "labor": "≥12 South Asian migrant deaths (BBC); ILO −14M FTE at risk",
    "current": true
  }
];

export const precedentNote = "Structural distinction: the 2026 event combines (1) a primary energy/material supply shock (Hormuz), (2) a pre-existing 50% Section 232 metals-tariff shock, and (3) a direct migration-vulnerability crisis — three simultaneous stressors without close post-Cold-War precedent.";

export const sourceResolution = [
  {
    "item": "Migrant counts: 24M vs 31M",
    "resolution": "Use 24M (ILO, T1) as the GCC anchor; 31M (Coalition on Labor Justice) is T3 advocacy over a broader zone — noted, not anchored."
  },
  {
    "item": "Capital Economics remittance scenarios",
    "resolution": "−5% / −30% accessed via DW's secondary reporting, not a Capital Economics primary publication — retained in the scenario matrix as T2-MODERATE."
  }
];

export const dataQuality = {
  "high": "Philippines BSP ($2.79B, −7.7%), ILO FTE projections (14M in 2026, 38M in 2027), HRW-documented casualties and hardship.",
  "moderate": "Migrant-worker counts by origin (T1/T2 via the Soufan Center); India's $51.4B Gulf remittance (Citi estimate).",
  "quarantined": "Capital Economics remittance scenarios (−5%/−30%, via DW secondary); Coalition on Labor Justice 31M / 70-injured figures (T3 advocacy)."
};
