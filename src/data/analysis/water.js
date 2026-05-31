// GENERATED from IranWarTracker/data/cascades/water.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "S5-WATER-001",
    "icon": "01",
    "title": "GCC Desalination Infrastructure Under Threat",
    "category": "Water Security",
    "summary": "GCC states operate 3,401 desalination plants producing 22.67 million m³/day — 33% of global capacity. Qatar (99%), Bahrain (90%+), Kuwait (90%), Oman (86%) depend on desal for drinking water. Confirmed strikes: Bahrain (Iranian drone, March 8 — no supply disruption), UAE Fujairah F1 and Kuwait Doha West (collateral damage, operations continued). Water storage equivalent to only 2 days normal demand in UAE; Bahrain and Kuwait have insufficient buffers.",
    "metrics": [
      {
        "label": "GCC desal plants",
        "value": "3401"
      },
      {
        "label": "GCC daily capacity m3",
        "value": "22.67 million m³/day"
      },
      {
        "label": "Global daily desal share",
        "value": "33%"
      },
      {
        "label": "Qatar desal drinking share",
        "value": "99%"
      },
      {
        "label": "Bahrain desal drinking share",
        "value": "90%+"
      },
      {
        "label": "Kuwait desal drinking share",
        "value": "90%"
      },
      {
        "label": "Oman desal drinking share",
        "value": "86%"
      },
      {
        "label": "UAE water storage days normal",
        "value": "2 days (normal demand); up to 16-45 days under rationing"
      },
      {
        "label": "GCC population desal dependent",
        "value": "~62-73 million"
      },
      {
        "label": "Bahrain drone strike date",
        "value": "March 8, 2026"
      },
      {
        "label": "Bahrain water supply disrupted",
        "value": "false"
      },
      {
        "label": "Qeshm island desal attack",
        "value": "March 7, 2026 (US strike alleged by Iran FM); 30 villages affected"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "CSIS via Circle of Blue",
        "url": "https://www.circleofblue.org/2026/water-policy-politics/stress-conflict-migration/could-iran-disrupt-the-gulf-countries-desalinated-water-supplies/",
        "tier": "T1"
      },
      {
        "name": "Arab Center Washington DC",
        "url": "https://arabcenterdc.org/resource/war-on-iran-the-dangers-of-attacking-water-desalination-plants-in-the-gulf/",
        "tier": "T2"
      },
      {
        "name": "Al Jazeera desalination data",
        "url": "https://www.aljazeera.com/news/2026/3/12/how-much-of-the-gulfs-water-comes-from-desalination-plants",
        "tier": "T2"
      },
      {
        "name": "CNN desalination analysis",
        "url": "https://www.cnn.com/2026/03/11/climate/gulf-iran-war-water-desalination",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "water"
      ],
      "entities": [
        "qatar",
        "bahrain",
        "kuwait",
        "uae",
        "oman",
        "saudi-arabia",
        "iran",
        "hormuz",
        "csis"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike"
      ],
      "position": {
        "hormuz_closure": "loser",
        "oil_strike": "loser"
      },
      "asOf": "2026-04-28"
    }
  }
];

export const thesis = "The Gulf runs on desalination — 33% of the world's capacity (22.67M m³/day across 3,401 plants) — and its drinking water is near-totally dependent on it: Qatar 99%, Bahrain and Kuwait 90%, Oman 86%. Yet most states hold under two days of stored water. Plants were already struck in March (a confirmed Iranian drone on Bahrain; Qeshm offline a month; debris at Fujairah and Doha West) without yet interrupting supply — but a CIA assessment called disrupting Gulf desalination worse than the loss of any other commodity. With 62–73M people dependent, this is the conflict's clearest existential tail risk.";

export const dependencyTable = [
  {
    "country": "Qatar",
    "desalShare": "77.3%",
    "drinking": "99%"
  },
  {
    "country": "Bahrain",
    "desalShare": "67.5%",
    "drinking": "90%+"
  },
  {
    "country": "UAE",
    "desalShare": "52.1%",
    "drinking": "42%"
  },
  {
    "country": "Kuwait",
    "desalShare": "42.2%",
    "drinking": "90%"
  },
  {
    "country": "Oman",
    "desalShare": "31%",
    "drinking": "86%"
  },
  {
    "country": "Saudi Arabia",
    "desalShare": "18.1%",
    "drinking": "70%"
  }
];

export const attacks = [
  {
    "date": "Early Mar",
    "event": "Fujairah F1 power & water complex (UAE) — missile/drone debris",
    "status": "Operations continued"
  },
  {
    "date": "Early Mar",
    "event": "Doha West power & water station (Kuwait) — falling debris",
    "status": "Operations continued"
  },
  {
    "date": "Mar 7",
    "event": "Qeshm Island plant (Iran) — alleged US strike",
    "status": "~30 villages disrupted; plant offline 1+ month",
    "current": true
  },
  {
    "date": "Mar 8",
    "event": "Bahrain desalination centre — Iranian drone (confirmed by MoI)",
    "status": "Damage confirmed; water supply not affected"
  },
  {
    "date": "Apr 6",
    "event": "Pars petrochemical complex (Assaluyeh) — Israeli strike; Iran claimed power/desal also hit",
    "status": "Extent unconfirmed"
  },
  {
    "date": "Mar 13",
    "event": "Trump threatened Iran energy & desal plants; Iran threatened US-allied desal in retaliation",
    "status": "Escalation signal"
  }
];

export const reserveNote = "Storage is the gap. The UAE's 2036 strategy would store only ~2 days of national demand (16–45 days under rationing); Bahrain and Kuwait cannot buffer a significant interruption; Qatar's desalination itself depends on the same at-risk gas. Three-quarters of GCC plants are integrated power-and-water — so a strike on the adjacent power station cuts water output without touching the desalination unit. A 2008 US cable assessed Riyadh might have to begin evacuation within a week if its primary plant were severely damaged.";

export const scenarioMatrix = [
  {
    "scenario": "S1",
    "label": "Ceasefire + Normalization",
    "tone": "#10b981",
    "impact": "Water-infrastructure damage remains limited; the risk stays latent."
  },
  {
    "scenario": "S2",
    "label": "Managed Tension",
    "tone": "#22d3ee",
    "impact": "Desalination-infrastructure risk remains latent but persistent; no supply interruption."
  },
  {
    "scenario": "S3",
    "label": "Prolonged Blockade",
    "tone": "#f59e0b",
    "impact": "Bahrain and Kuwait desalination reserves are exhausted beyond what rationing can stretch."
  },
  {
    "scenario": "S4",
    "label": "Escalation (strike on desal)",
    "tone": "#ef4444",
    "impact": "Catastrophic: Qatar (99% desal) and Kuwait face existential water risk within days to weeks; 73M Gulf residents potentially affected."
  }
];

export const sourceResolution = [
  {
    "item": "Population exposed to desalination risk",
    "resolution": "62M is the GCC's official combined population (GCC Statistical Center, 2023) — the minimum anchor; ~73M (Arab Center) includes expatriate/near-facility residents. The 100M figure (CNN) appears to include non-GCC Gulf populations and is not anchored."
  }
];

export const dataQuality = {
  "high": "CSIS/Circle of Blue desalination capacity & dependency (33% global, 3,401 plants); confirmed strike events (CNN, Bahrain Ministry of Interior).",
  "moderate": "Attack status (real-time, some claims disputed); reserve-day estimates (planning-grade).",
  "quarantined": "100M population figure (CNN, includes non-GCC); unverified attack-extent claims (Pars/desal)."
};
