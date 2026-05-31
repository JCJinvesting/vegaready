// GENERATED from IranWarTracker/data/cascades/defense.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "S6-DEF-001",
    "icon": "01",
    "title": "Arsenal Drawdown and the Procurement Supercycle — CSIS Last Rounds",
    "category": "Defense / Structural",
    "summary": "The highest-confidence defense finding is CSIS's Last Rounds audit (April 24, 2026) of what the 39-day Iran air campaign cost the US arsenal: ~50% of Patriot interceptor inventory, >50% of THAAD, and 45% of Precision Strike Missile expended; over 1,000 Tomahawks fired; GCC+Israel Patriot stocks drawn down ~86%. Replenishment runs to mid-2029 (Patriot), end-2029 (THAAD) and ~late 2030 (Tomahawk). Framework contracts signed before Day 1 are now under acute demand pull: Lockheed PAC-3 MSE scaling 600→2,000/yr by 2030, THAAD 96→400/yr, MHI/RTX SM-3 4x, MBDA Aster 2x. The multi-year backlog is ceasefire-insensitive — deliveries are booked through 2029–2030 regardless of when fighting stops.",
    "metrics": [
      {
        "label": "Patriot drawdown us",
        "value": "~50% of US inventory"
      },
      {
        "label": "Thaad drawdown",
        "value": ">50% of inventory"
      },
      {
        "label": "Prsm drawdown",
        "value": "45% of inventory"
      },
      {
        "label": "Tomahawks fired",
        "value": ">1,000"
      },
      {
        "label": "GCC israel patriot drawdown",
        "value": "~86% over the 39-day campaign"
      },
      {
        "label": "Patriot replenish",
        "value": "mid-2029 (FY27 budget: 3,203 missiles)"
      },
      {
        "label": "Thaad replenish",
        "value": "end-2029 (FY27: 857 requested)"
      },
      {
        "label": "Tomahawk replenish",
        "value": "~late 2030 (<200/yr produced)"
      },
      {
        "label": "Lockheed pac3 scaleup",
        "value": "600 → 2,000/yr by 2030"
      },
      {
        "label": "Thaad scaleup",
        "value": "96 → 400/yr (signed Jan 29, 2026)"
      },
      {
        "label": "Denmark sampt",
        "value": "€1.47bn / 4 SAMP/T NG batteries (April 21, 2026; rejected Patriot on timelines)"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "CSIS — Rebuilding US Missile Inventory",
        "url": "https://www.csis.org/analysis/rebuilding-us-missile-inventory-multiyear-project",
        "tier": "T2 institutional research"
      },
      {
        "name": "US News / AP (CSIS Last Rounds)",
        "url": "https://www.usnews.com/news/business/articles/2026-05-27/us-will-need-years-to-replenish-stockpiles-of-advanced-weapons-used-in-iran-war-new-analysis-finds",
        "tier": "T2"
      },
      {
        "name": "Defence Ukraine (drawdown detail)",
        "url": "https://www.defenceukraine.com/en/insights/ukraine-air-defence-pivot-2026/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "defense",
        "equity"
      ],
      "entities": [
        "csis",
        "united-states",
        "lockheed-martin",
        "rtx",
        "mbda",
        "mhi",
        "denmark",
        "israel"
      ],
      "scenarios": [
        "hormuz_closure",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "winner",
        "ceasefire": "winner"
      },
      "asOf": "2026-05-27"
    }
  },
  {
    "id": "S6-DEF-002",
    "icon": "02",
    "title": "Subsea Cable Weaponization and Mine-Clearing Demand",
    "category": "Defense / Dual-Use",
    "summary": "The Persian Gulf scored 4.6/5.0 — the highest of 25 global cable landing zones — on Starboard's 2026 Cable Risk Index; ≥17 cable systems transit the Red Sea/Persian Gulf and ~7 pass through Hormuz. Iran's IRGC-linked Tasnim published Gulf cable maps (April 22) and floated a permit/'protection fee' regime; Alcatel Submarine Networks declared force majeure (March 12), indefinitely pausing the 2Africa Pearls Gulf extension. Deepwater repair windows average ~40 days (open-ended in a conflict zone), and resumed work requires re-scanning the seabed for ordnance. On mines, Iran's Hormuz threat triggered allied minesweeping mobilization (Netherlands deployed May 27; Lithuania weighing support) against a thin global mine-countermeasures base. Counter-UAS, EW and satellite ISR rose as priorities after the Barakah strike.",
    "metrics": [
      {
        "label": "Gulf cable risk score",
        "value": "4.6/5.0 (highest of 25 zones)"
      },
      {
        "label": "Cable systems red sea gulf",
        "value": "≥17"
      },
      {
        "label": "Hormuz cable systems",
        "value": "~7 (Falcon, GBI in Iranian waters)"
      },
      {
        "label": "Asn force majeure",
        "value": "March 12, 2026 (2Africa Pearls paused indefinitely)"
      },
      {
        "label": "Repair window",
        "value": "~40 days deepwater (open-ended in conflict)"
      },
      {
        "label": "Data carried",
        "value": "subsea cables carry ~99% of intercontinental data, ~$10tn/day"
      },
      {
        "label": "Minesweeping",
        "value": "Netherlands deployed May 27; Lithuania considering (May 12)"
      },
      {
        "label": "Starboard response time",
        "value": "25 min → 3 min when integrated into a carrier NOC"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "Total Telecom / Starboard",
        "url": "https://totaltele.com/the-persian-gulf-topped-our-2026-cable-risk-index-heres-what-it-means-for-operators/",
        "tier": "T2"
      },
      {
        "name": "Eurasia Review (cable weaponization)",
        "url": "https://www.eurasiareview.com/29052026-subsea-cables-in-hormuz-are-being-weaponized-against-the-global-economy-oped/",
        "tier": "T2"
      },
      {
        "name": "Bloomberg (cable delays)",
        "url": "https://www.bloomberg.com/news/articles/2026-05-13/iran-war-delays-undersea-internet-cable-projects-in-persian-gulf",
        "tier": "T2"
      },
      {
        "name": "Iran International (minesweeper)",
        "url": "https://www.iranintl.com/en/202605273493",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "defense",
        "technology"
      ],
      "entities": [
        "starboard",
        "asn",
        "iran",
        "netherlands",
        "lithuania",
        "hormuz",
        "subsea-cables"
      ],
      "scenarios": [
        "cable_severance",
        "hormuz_closure"
      ],
      "position": {
        "cable_severance": "winner"
      },
      "asOf": "2026-05-27"
    }
  }
];

export const thesis = "The 39-day campaign structurally drew down the US and allied arsenal and opened a multi-year procurement supercycle that a ceasefire does not close. CSIS's Last Rounds audit found ~50% of Patriot, >50% of THAAD and 45% of PrSM expended, with GCC+Israel Patriot stocks down ~86%; replenishment runs to 2029–2030. The supply response — PAC-3 600→2,000/yr, THAAD 96→400/yr, doubled Aster lines — is real but backlogged, and a three-front competition (Iran/Israel, Ukraine, Indo-Pacific) means every interceptor off the line is pre-booked. Global military spending already hit a record $2.887tn (2.5% of GDP); NATO set a 5%-by-2035 target. Two new dual-use chokepoints emerged: subsea cables (Gulf the highest-risk zone of 25; ASN force majeure) and a thin mine-countermeasures base. The investable edge is durability — order books and replenishment timelines are ceasefire-insensitive — tempered by the caveat that some defense equities ran ahead of confirmed demand in 2025.";

export const drawdownTable = [
  {
    "system": "Patriot interceptors",
    "drawdown": "~50% of US inventory",
    "replenish": "full replacement mid-2029 (FY27: 3,203)"
  },
  {
    "system": "THAAD interceptors",
    "drawdown": ">50% of inventory",
    "replenish": "deliveries from mid-2029; complete end-2029 (FY27: 857)"
  },
  {
    "system": "Precision Strike Missile (PrSM)",
    "drawdown": "45% of inventory",
    "replenish": "deliveries from ~March 2030 (34-mo lead)"
  },
  {
    "system": "Tomahawk",
    "drawdown": ">1,000 fired",
    "replenish": "full restoration ~late 2030 (<200/yr produced)"
  },
  {
    "system": "SM-3 / SM-6 (Navy/MDA)",
    "drawdown": "SM-3 firings >80",
    "replenish": "not to prewar until early 2029"
  },
  {
    "system": "GCC + Israel Patriot stocks",
    "drawdown": "~86% over 39 days",
    "replenish": "—"
  }
];

export const drawdownNote = "The first 16 days of \"Operation Epic Fury\" alone saw 402 Patriot interceptors fired by US forces. The three-front stockpile competition (Iran/Israel, Ukraine, Indo-Pacific) means every new PAC-3 MSE off the Camden, Arkansas line is functionally booked by CENTCOM/INDOPACOM through ~2029.";

export const scaleupTable = [
  {
    "program": "Lockheed Patriot PAC-3 MSE",
    "change": "~600 → 2,000 units/yr by 2030",
    "detail": "7-year framework signed Jan 2026; 620 delivered in 2025"
  },
  {
    "program": "Lockheed THAAD",
    "change": "96 → 400 interceptors/yr",
    "detail": "quadrupled framework, signed Jan 29, 2026"
  },
  {
    "program": "MHI / Raytheon SM-3 Block IIA",
    "change": "~4x to ~100/yr",
    "detail": "—"
  },
  {
    "program": "Raytheon Tomahawk",
    "change": "<200 → >1,000/yr target",
    "detail": "—"
  },
  {
    "program": "MBDA Aster (SAMP/T NG)",
    "change": "production doubling through 2026",
    "detail": "Denmark €1.47bn for 4 batteries (Apr 21, rejected Patriot)"
  },
  {
    "program": "Diehl IRIS-T SLM/SLS",
    "change": "€1.5bn expansion → 16 batteries/yr by 2028",
    "detail": "reported near-100% intercept over 250+ engagements"
  }
];

export const spendingNote = "Global military expenditure reached a record ~$2.887tn in 2025 (+2.9% real, 2.5% of GDP — highest share since 2009), the 11th straight year of growth. US spending fell 7.5% to $954bn in 2025 but Congress approved >$1tn for FY2026, with Trump's FY2027 proposal at $1.5tn (Golden Dome, AI, new battleships). The EU drove ~50% of 2025 global growth; NATO's June 2025 Hague Summit set a 5%-of-GDP target (3.5% core + 1.5% related) by 2035.";

export const scenarioMatrix = [
  {
    "scenario": "S1",
    "label": "Ceasefire (militarily in effect)",
    "tone": "#10b981",
    "impact": "The procurement supercycle continues — backlogs and replenishment are multi-year and ceasefire-insensitive (CSIS: deliveries to 2029–2030). Order-book durability favors the primes; reconstruction/resilience EPCs and grid-hardening enter tender."
  },
  {
    "scenario": "S2",
    "label": "Hormuz Constrained (primary)",
    "tone": "#22d3ee",
    "impact": "Air/missile defense, mine-clearing, cable security and ISR all surge; the interceptor stockpile crisis is structural through 2029–2030. Beneficiaries: Lockheed/RTX/MBDA/Rheinmetall, minesweeping navies, cable-monitoring vendors."
  },
  {
    "scenario": "S3",
    "label": "Cable Severance (structural risk)",
    "tone": "#f59e0b",
    "impact": "Subsea cable defense, DAS/SoP fiber-sensing, naval ISR and repair-ship capacity become procurement priorities. Repair windows of 40+ days and a small, aging global repair fleet are the binding constraint."
  },
  {
    "scenario": "S4",
    "label": "Escalation / Hardening",
    "tone": "#ef4444",
    "impact": "Layered air defense converts from episodic to permanent baseline procurement (Golden Dome, GCC integrated air defense); counter-UAS, EW and hardened-infrastructure spend step up; the three-front competition intensifies."
  }
];

export const investmentImplications = [
  {
    "stakeholder": "Air & missile-defense primes (winners)",
    "text": "Capability-anchored, not stock calls: Lockheed Martin (Patriot/THAAD/F-35; a $24.3bn 300-aircraft F-35 contract), RTX (Patriot GEM-T, SM-family, Tomahawk; a $3.7bn April GEM-T order), MBDA/Diehl/Rheinmetall (European air-defense scale-up) and MHI (SM-3, AMRAAM). Order books are backlogged to 2029–2030, making demand durable across a ceasefire."
  },
  {
    "stakeholder": "Dual-use security (winners)",
    "text": "Cable-monitoring (Starboard-type), subsea-cable repair-ship operators, DAS/SoP fiber-sensing, naval ISR and satellite redundancy benefit from cable weaponization; mine-countermeasures vendors and minesweeping navies from the Hormuz mine threat; counter-UAS/EW from the Barakah-style drone risk."
  },
  {
    "stakeholder": "Valuation caveat (risk)",
    "text": "European defense equities cooled in 2026 — the Stoxx Europe Aerospace & Defence index was −1.2% YTD vs +4.8% for the Stoxx 600, and Rheinmetall (up ~400% over three years) missed Q1 earnings. The industrial demand is real, but valuations ran ahead of confirmed demand. Equity snapshots are context, not anchors."
  }
];

export const resilience = {
  "thesis": "The conflict's damage profile (QatarEnergy LNG 3–5-year repair; desalination strikes; cable force-majeure; the Barakah generator fire) is generating a resilience-rebuild premium rather than like-for-like reconstruction. Rebuilds favor distributed, hardened, redundant capacity — a double-digit-percent capex premium over baseline, justified by demonstrated single-point-of-failure risk.",
  "winners": [
    {
      "area": "Desalination & grid hardening",
      "text": "GCC near-total desalination dependence (Qatar 99%, Bahrain 90%+) and integrated power-and-water architecture push rebuilds toward distributed, hardened, redundant capacity; the Barakah strike underscores backup-power and grid-islanding investment. Water-tech EPCs and HVDC/storage OEMs benefit."
    },
    {
      "area": "Subsea cable redundancy",
      "text": "The indefinite 2Africa Pearls pause and reroute through older systems drives route diversification, repair-ship capacity and DAS/SoP fiber-sensing. Repair-ship scarcity (a small, aging global fleet) is the binding constraint; resumed work must re-scan the seabed for ordnance."
    },
    {
      "area": "Air/missile defense as permanent infrastructure",
      "text": "The ~86% GCC Patriot drawdown converts air defense from episodic to permanent baseline procurement (Golden Dome, GCC integrated air defense) with multi-year delivery backlogs."
    },
    {
      "area": "Nuclear EPCs as baseload hedge",
      "text": "KEPCO, Westinghouse and Rosatom are positioned for security-hedge baseload as civilian nuclear is repriced (see /markets/energy)."
    }
  ],
  "timeline": "Reconstruction tenders 2026–2028; the resilience-capex premium persists through any ceasefire given multi-year repair windows (QatarEnergy LNG 3–5 years; cable repair open-ended; interceptor replenishment to 2029–2030)."
};

export const sourceResolution = [
  {
    "item": "US Patriot stockpile baseline",
    "resolution": "Some outlets cited Patriot at \"~25% of the full military plan\" (Responsible Statecraft/CSMonitor/Fortune, an 'assessed' tier). CSIS Last Rounds' ~50% drawdown is used as the anchor; the 25% figure is flagged, not anchored."
  },
  {
    "item": "Defense equity snapshots",
    "resolution": "Point-in-time equity prices (e.g., LMT $676.70, RTX $212.16 on March 2, via Kavout) and Rheinmetall +400%/3yr (CNBC) are context only — never used as stock calls — and are offset by the CNBC May 30 cooling note."
  }
];

export const dataQuality = {
  "high": "CSIS Last Rounds drawdown and replenishment timelines (cross-confirmed AP/US News); SIPRI $2.887tn global spending; NATO 5% Hague target; production-framework contracts (manufacturer/Pentagon).",
  "moderate": "GCC+Israel ~86% Patriot drawdown (Defence Ukraine, T2); cable risk-index and repair-window figures (Starboard/Total Telecom, T2); minesweeping deployments (T2 wire).",
  "quarantined": "Point-in-time defense-equity snapshots and intraday moves (Kavout/CNBC, context only); Patriot \"~25% of plan\" assessed figure; reconstruction \"double-digit % capex premium\" (analytical estimate, no public 2026 figure)."
};

export const relatedSectors = "This is the investment deep dive of the /transmission Defense & Security sector. Critical-mineral and magnet inputs connect to /markets/energy (transition) and /markets/property (materials); the proliferation/arms-control driver to /outlook/nuclear; the resilience-capex linkages to /outlook/infrastructure.";
