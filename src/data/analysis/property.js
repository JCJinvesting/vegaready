// GENERATED from IranWarTracker/data/cascades/property.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "gulf-aluminum-supply-disruption",
    "icon": "01",
    "title": "Gulf Aluminum Supply Disruption",
    "category": "Commodities / Metals",
    "summary": "Alba (world's largest single-site smelter, 1.6 Mt/yr) shut Lines 1–3 (19% capacity) on March 15–16; declared force majeure. Q1 2026 sales −17% YoY, production −14% YoY. LME hit $3,546.50/t (4-yr high Mar 16). +19% YTD through May. Ex-China markets in 135,000t deficit.",
    "metrics": [
      {
        "label": "Alba capacity idled",
        "value": "19 %",
        "tier": "T2-HIGH"
      },
      {
        "label": "Alba Q1 sales",
        "value": "312563 tonnes",
        "tier": "T2-HIGH (company disclosure)"
      },
      {
        "label": "Alba Q1 sales YoY",
        "value": "-17 %",
        "tier": "T2-HIGH"
      },
      {
        "label": "Alba Q1 production",
        "value": "339734 tonnes",
        "tier": "T2-HIGH"
      },
      {
        "label": "Alba Q1 production YoY",
        "value": "-14 %",
        "tier": "T2-HIGH"
      },
      {
        "label": "LME peak price",
        "value": "3546.5 $/tonne",
        "tier": "T2-HIGH"
      },
      {
        "label": "LME price YTD change",
        "value": "19 %",
        "tier": "T2-HIGH"
      },
      {
        "label": "LME price post since Feb 28",
        "value": "13 %",
        "tier": "T2-HIGH"
      },
      {
        "label": "Gulf share global al % bernstein",
        "value": "7 %",
        "tier": "T2-HIGH"
      },
      {
        "label": "Supply removed % bernstein",
        "value": "3 % of world supply",
        "tier": "T2-HIGH"
      },
      {
        "label": "Ex china market deficit",
        "value": "135000 tonnes",
        "tier": "T2-HIGH"
      },
      {
        "label": "Ubs 2026 supply growth revised",
        "value": "0.3 %",
        "tier": "T2-HIGH"
      }
    ],
    "confidence": "high",
    "sources": [
      "Reuters/Mining Technology (Mar 16, 2026)",
      "Alcircle/Alba Q1 2026 financial report",
      "Alcircle/Alba Q1 2026 report",
      "CNBC/Bernstein analyst Bob Brackett (May 5, 2026)",
      "CNBC (May 5, 2026)",
      "Bernstein/Bob Brackett via CNBC (May 5, 2026)",
      "Bernstein via CNBC (May 5, 2026)",
      "UBS via CNBC (May 5, 2026)"
    ],
    "tags": {
      "assetClass": [
        "commodities"
      ],
      "entities": [
        "bahrain",
        "china",
        "alba",
        "wef"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike"
      ],
      "position": {
        "hormuz_closure": "loser"
      },
      "asOf": "2026-05-01"
    }
  },
  {
    "id": "construction-input-cost-inflation",
    "icon": "02",
    "title": "Construction Input Cost Inflation",
    "category": "Construction / Commodities",
    "summary": "US construction input prices: 12.6% annualized Jan–Feb 2026 (ABC/BLS); 6.2% cumulative Jan–Apr; +7.4% YoY nonresidential. Diesel +73.8% YoY (April). Aluminum mill shapes +39.1% YoY. ACA: US cement demand −2.5% 2026; real construction spending −3.1%. Platts cement CIF Houston $88/t (Apr 30).",
    "metrics": [
      {
        "label": "Construction inputs annualized Jan Feb",
        "value": "12.6 %",
        "tier": "T2-HIGH"
      },
      {
        "label": "Construction inputs Jan Apr cumulative",
        "value": "6.2 %",
        "tier": "T2-HIGH"
      },
      {
        "label": "Nonres inputs YoY Apr",
        "value": "7.4 %",
        "tier": "T2-HIGH"
      },
      {
        "label": "Diesel YoY Apr",
        "value": "73.8 %",
        "tier": "T2-HIGH"
      },
      {
        "label": "Aluminum mill shapes YoY",
        "value": "39.1 %",
        "tier": "T2-HIGH"
      },
      {
        "label": "Steel mill products YoY",
        "value": "20.9 %",
        "tier": "T2-HIGH"
      },
      {
        "label": "Us cement demand 2026",
        "value": "-2.5 %",
        "tier": "T2-HIGH"
      },
      {
        "label": "Us real construction spending 2026",
        "value": "-3.1 %",
        "tier": "T2-HIGH"
      },
      {
        "label": "Cement CIF houston",
        "value": "88 $/metric ton",
        "tier": "T1/T2-HIGH"
      }
    ],
    "confidence": "high",
    "sources": [
      "ABC/BLS PPI via Finance & Commerce (Mar 30, 2026)",
      "ABC/BLS PPI via ENR (cited Contractor+ May 29, 2026)",
      "ABC/BLS PPI via ENR",
      "AGC via ENR (May 2026)",
      "ABC/BLS PPI via Finance & Commerce",
      "ACA Spring Forecast via S&P Global/Platts (May 5, 2026)",
      "ACA via S&P Global/Platts (May 5, 2026)",
      "Platts/S&P Global (May 5, 2026)"
    ],
    "tags": {
      "assetClass": [
        "commodities",
        "real-estate"
      ],
      "entities": [
        "united-states",
        "bls"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike"
      ],
      "position": {},
      "asOf": "2026-04-01"
    }
  },
  {
    "id": "dubai-real-estate-sentiment-pullback",
    "icon": "03",
    "title": "Dubai Real Estate: Sentiment Pullback",
    "category": "Real Estate",
    "summary": "Trade-press data (no DLD primary available at report date): early-March transactions ~6,129 units vs ~8,199 prior period (−25% vol); prices reported −4–5% from peak. No broad collapse is confirmed, but all Dubai-specific shock figures require source caveats — see Data Quality Exceptions.",
    "metrics": [
      {
        "label": "Dubai early Mar transactions",
        "value": "6129 units (2-week period)",
        "tier": "T2-MODERATE"
      },
      {
        "label": "Dubai prior period transactions",
        "value": "8199 units (2-week period)",
        "tier": "T2-MODERATE"
      },
      {
        "label": "Dubai volume decline",
        "value": "25 %",
        "tier": "T2-MODERATE"
      },
      {
        "label": "Dubai price decline from peak",
        "value": "4-5 %",
        "tier": "T2-MODERATE"
      },
      {
        "label": "Uae cash transaction share",
        "value": "not anchored n/a",
        "tier": "T3"
      }
    ],
    "confidence": "medium",
    "sources": [
      "World Property Journal (Mar 25, 2026)",
      "The GCC Edge (Apr 9, 2026)"
    ],
    "tags": {
      "assetClass": [
        "real-estate"
      ],
      "entities": [
        "uae"
      ],
      "scenarios": [
        "hormuz_closure"
      ],
      "position": {
        "hormuz_closure": "loser"
      },
      "asOf": "2026-03-01"
    }
  },
  {
    "id": "abu-dhabi-real-estate-t1-anchored-outperfo",
    "icon": "04",
    "title": "Abu Dhabi Real Estate: T1-Anchored Outperformance",
    "category": "Real Estate",
    "summary": "Q1 2026 (Adrec official): total transactions Dh66B (+161% YoY), 13,518 deals (+96%), FDI +423%, repeat lease +16%. Caveat: Q1 spans Jan–Mar; majority pre-dates Feb 28 conflict. Supply pipeline only +3.3% for 2026.",
    "metrics": [
      {
        "label": "Total transaction value",
        "value": "66 Dh billion",
        "tier": "T1-HIGH"
      },
      {
        "label": "Total transaction value YoY",
        "value": "161 %",
        "tier": "T1-HIGH"
      },
      {
        "label": "Number of deals",
        "value": "13518",
        "tier": "T1-HIGH"
      },
      {
        "label": "Deals YoY",
        "value": "96 %",
        "tier": "T1-HIGH"
      },
      {
        "label": "FDI individuals",
        "value": "8.27 Dh billion",
        "tier": "T1-HIGH"
      },
      {
        "label": "FDI YoY",
        "value": "423 %",
        "tier": "T1-HIGH"
      },
      {
        "label": "Repeat lease price YoY",
        "value": "16 %",
        "tier": "T1-HIGH"
      },
      {
        "label": "Supply pipeline growth 2026",
        "value": "3.3 %",
        "tier": "T1-HIGH"
      },
      {
        "label": "Investor nationalities",
        "value": "99",
        "tier": "T1-HIGH"
      }
    ],
    "confidence": "high",
    "sources": [
      "Abu Dhabi Real Estate Centre (Adrec) via Khaleej Times (Apr 7, 2026)",
      "Adrec/Khaleej Times (Apr 7, 2026)",
      "Adrec"
    ],
    "tags": {
      "assetClass": [
        "real-estate"
      ],
      "entities": [
        "uae"
      ],
      "scenarios": [
        "hormuz_closure"
      ],
      "position": {
        "hormuz_closure": "winner"
      },
      "asOf": "2026-03-31"
    }
  },
  {
    "id": "neom-saudi-megaproject-restructuring",
    "icon": "05",
    "title": "NEOM / Saudi Megaproject Restructuring",
    "category": "Megaprojects / Sovereign Capital",
    "summary": "The Line deferred post-2030 (Semafor, confirmed by PIF Governor on-record). Contracts terminated: Webuild (~$4.7B Trojena), Hyundai E&C+ (SAR 6.16B / $1.6B tunnel), Eversendai (undisclosed). Saudi Q1 2026 biggest fiscal deficit since 2018. OXAGON receives $3B continued investment.",
    "metrics": [
      {
        "label": "The line deferred until",
        "value": "post-2030",
        "tier": "T2-HIGH"
      },
      {
        "label": "NEOM 2030 population target",
        "value": "100000 people (max)",
        "tier": "T2-HIGH"
      },
      {
        "label": "Webuild trojena reported contract",
        "value": "~4.7 USD billion",
        "tier": "T2-MODERATE"
      },
      {
        "label": "Webuild trojena completion at termination",
        "value": "30 %",
        "tier": "T2-MODERATE"
      },
      {
        "label": "Hyundai E&C tunnel",
        "value": "6.16 SAR billion (~$1.6B)",
        "tier": "T2-HIGH"
      },
      {
        "label": "Hyundai E&C tunnel km",
        "value": "12.5 km",
        "tier": "T2-HIGH"
      },
      {
        "label": "Oxagon continued investment",
        "value": "~3",
        "tier": "T2-HIGH"
      },
      {
        "label": "Saudi fiscal deficit characterization",
        "value": "biggest quarterly deficit since 2018",
        "tier": "T2-HIGH"
      },
      {
        "label": "Korea overseas construction H1 2025 decline",
        "value": "20 %",
        "tier": "T2"
      }
    ],
    "confidence": "high",
    "sources": [
      "Semafor (May 22, 2026)",
      "International Investment (Mar 30, 2026)",
      "Hyundai E&C company disclosure via International Investment (Mar 30, 2026)",
      "Chosun Ilbo (Feb 15, 2026)"
    ],
    "tags": {
      "assetClass": [
        "real-estate",
        "private-capital"
      ],
      "entities": [
        "saudi-arabia",
        "pif",
        "neom",
        "webuild",
        "hyundai-ec"
      ],
      "scenarios": [
        "hormuz_closure"
      ],
      "position": {
        "hormuz_closure": "loser"
      },
      "asOf": "2026-05-22"
    }
  },
  {
    "id": "adnoc-fujairah-pipeline-bypass",
    "icon": "06",
    "title": "ADNOC Fujairah Pipeline Bypass",
    "category": "Infrastructure / Energy",
    "summary": "New West-East pipeline 50% complete (ADNOC CEO May 20, Atlantic Council); operational 2027. Existing Habshan-Fujairah pipeline: 1.8 Mb/d capacity, currently rerouting volumes. ADNOC CEO: minimum 4 months to 80% flows after ceasefire; full normalization not before Q1–Q2 2027.",
    "metrics": [
      {
        "label": "New pipeline completion",
        "value": "50 %",
        "tier": "T1/T2-HIGH"
      },
      {
        "label": "New pipeline operational target",
        "value": "2027",
        "tier": "T1/T2-HIGH"
      },
      {
        "label": "Existing habshan fujairah capacity",
        "value": "1.8 Mb/d maximum",
        "tier": "T2-HIGH"
      },
      {
        "label": "Min months to 80pct flows post ceasefire",
        "value": "4 months",
        "tier": "T1/T2-HIGH"
      },
      {
        "label": "Full normalization earliest",
        "value": "Q1–Q2 2027",
        "tier": "T1/T2-HIGH"
      },
      {
        "label": "Cumulative barrels lost",
        "value": "1 billion barrels",
        "tier": "T2-HIGH"
      }
    ],
    "confidence": "high",
    "sources": [
      "ADNOC CEO Sultan al-Jaber at Atlantic Council, reported CNBC (May 20, 2026)",
      "CNBC (May 20, 2026); Al Jazeera (May 15, 2026)",
      "CNBC (May 20, 2026)",
      "ADNOC CEO statement, CNBC (May 20, 2026) + Argus Media (May 20, 2026)",
      "ADNOC CEO statement, CNBC (May 20, 2026)"
    ],
    "tags": {
      "assetClass": [
        "energy"
      ],
      "entities": [
        "uae",
        "adnoc",
        "hormuz"
      ],
      "scenarios": [
        "hormuz_closure",
        "ceasefire"
      ],
      "position": {},
      "asOf": "2026-05-20"
    }
  }
];

export const thesis = "The Hormuz shock landed on the physical economy as a metals-and-materials squeeze: Gulf smelter shutdowns drove aluminum to a four-year high, construction inputs surged at a 12.6% annualized rate, and Gulf real estate split — Abu Dhabi's transaction value +161% YoY against a Dubai sentiment pullback — while Saudi Arabia deferred The Line past 2030 and terminated megaproject contracts. The binding constraint on recovery is physical: ADNOC's al-Jaber warns even an immediate ceasefire needs a minimum 4 months to restore 80% of pre-conflict flows.";

export const scenarioMatrix = [
  {
    "scenario": "S1",
    "label": "Ceasefire + Normalization",
    "def": "Conflict ends; Hormuz re-opens within weeks.",
    "tone": "#10b981",
    "construction": "Price peak passed; 6–12 month normalization. ADNOC warns a minimum 4 months to 80% flows even then.",
    "realEstate": "Abu Dhabi sustains; Dubai volumes recover as confidence rebuilds.",
    "megaprojects": "NEOM redesign clarified; contract regrants possible 2027+. ADNOC pipeline on track."
  },
  {
    "scenario": "S2",
    "label": "Managed Tension",
    "def": "Hormuz intermittently disrupted; partial traffic.",
    "tone": "#22d3ee",
    "construction": "Sustained elevated pricing: aluminum +10–15%, ex-China deficit continues. Partial Fujairah bypass limits the worst case.",
    "realEstate": "Dubai transactions 15–20% below pre-conflict pace; Abu Dhabi supply constraints support prices.",
    "megaprojects": "NEOM deferral confirmed through 2030; GCC pivots to security/energy infrastructure."
  },
  {
    "scenario": "S3",
    "label": "Prolonged Blockade",
    "def": "Hormuz remains closed 6–18 months.",
    "tone": "#f59e0b",
    "construction": "Aluminum ex-China deficit deepens from 135,000t; non-essential GCC construction halts.",
    "realEstate": "Dubai correction −10–15%; Abu Dhabi resilient but not immune; developer financing stress.",
    "megaprojects": "PIF balance-sheet defense; megaproject universe shrinks; South Korean/European contractor write-downs."
  },
  {
    "scenario": "S4",
    "label": "Escalation",
    "def": "Military strike on pipeline/smelter infrastructure.",
    "tone": "#ef4444",
    "construction": "Gulf production facilities physically damaged; aluminum and petrochemical supply chains break.",
    "realEstate": "Real-estate market freeze; foreign capital exits entirely.",
    "megaprojects": "All megaprojects indefinitely suspended; Saudi sovereign fiscal crisis."
  }
];

export const substitution = [
  {
    "area": "Aluminum",
    "text": "150,000+ tonnes pulled from LME warehouses during the disruption (WEF). Aluminum is one of nine non-oil commodities WEF flagged as significantly Hormuz-disrupted — with methanol, sulfur, fertilizers and graphite. Alternative-supplier qualification is slow for aerospace, automotive and packaging grades."
  },
  {
    "area": "Petcoke & cement",
    "text": "Gulf petcoke exports to India (~0.4–0.6 Mt/month) transit the Strait directly. Indian cement producers substitute US petcoke at a premium or switch to coal; imported coal +~22% YoY to ~$110/t FOB (Global Cement). Thermal substitution provides a partial medium-term offset."
  },
  {
    "area": "ADNOC pipeline",
    "text": "The existing Habshan–Fujairah line (1.8 Mb/d) provides partial rerouting now; a second pipeline (50% complete, 2027 target) augments capacity. But al-Jaber's 4-month-minimum recovery and Q1–Q2 2027 full-normalization estimate remain the binding constraint."
  },
  {
    "area": "Megaproject capital",
    "text": "Saudi PIF redirects capital to (a) the sovereign balance sheet, (b) OXAGON port/data-center infrastructure (~$3B), and (c) Expo 2030 and 2034 FIFA World Cup critical-path commitments (Semafor)."
  }
];

export const precedents = [
  {
    "episode": "1990–91 Gulf War",
    "period": "~7 months",
    "construction": "Kuwait construction halted; Saudi projects deferred",
    "realestate": "GCC markets froze; recovered within ~18 months"
  },
  {
    "episode": "2003 Iraq invasion",
    "period": "Weeks",
    "construction": "Iraq infrastructure destroyed; regional sentiment cautious",
    "realestate": "GCC real estate largely unaffected"
  },
  {
    "episode": "2019–20 COVID-19",
    "period": "~18 months",
    "construction": "Construction halted GCC-wide; Dubai prices −10–15%",
    "realestate": "Dubai −~10%; Abu Dhabi more stable; strong 2021–23 recovery"
  },
  {
    "episode": "2024 Red Sea / Houthi",
    "period": "Ongoing",
    "construction": "Elevated shipping surcharges (+15–20%); delays",
    "realestate": "Minimal real-estate impact"
  },
  {
    "episode": "2026 Hormuz blockade",
    "period": "~3 months",
    "construction": "12.6% annualized input-cost surge; NEOM deferred; Alba −17% sales",
    "realestate": "Abu Dhabi +161% Q1 value (Adrec T1); Dubai volume pullback (T2-MOD)",
    "current": true
  }
];

export const precedentNote = "Structural distinction: the 2026 event combines (1) a primary energy/material supply shock (Hormuz), (2) a pre-existing 50% Section 232 metals-tariff shock, and (3) a direct migration-vulnerability crisis — three simultaneous stressors without close post-Cold-War precedent.";

export const sourceResolution = [
  {
    "item": "Gulf aluminum share: 7% vs 10%",
    "resolution": "Both T2 analyst estimates — Bernstein 7% (GCC/Hormuz-specific) vs CRU 10% (broader Middle East). Use a 7–10% range; neither is T1-confirmed."
  },
  {
    "item": "Dubai real-estate data",
    "resolution": "No Dubai Land Department primary available; all Dubai figures (−25% volume, −4–5% price) are T2-MODERATE and excluded from executive anchors. Abu Dhabi Adrec T1 is the primary real-estate anchor."
  }
];

export const dataQuality = {
  "high": "Alba Q1 volumes, BLS construction PPI (12.6% annualized), Abu Dhabi Adrec (+161%), Hyundai E&C SAR 6.16B disclosure.",
  "moderate": "Dubai real-estate transaction/price data (T2-MODERATE; no Dubai Land Department primary at report date); Webuild ~$4.7B contract value (reconstructed).",
  "quarantined": "Polypropylene +24% (ITI); 15–20% GCC MEP cost (LinkedIn); Bangladesh cement +30–40%; DFM Index −20%; 60% Dubai appreciation; 12–18-month supplier-qualification (vendor blog)."
};
