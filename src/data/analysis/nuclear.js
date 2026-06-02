// GENERATED from IranWarTracker/data/cascades/nuclear.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "S6-NUC-001",
    "icon": "01",
    "title": "Iran Stockpile Risk and IAEA Verification Collapse",
    "category": "Nuclear / Proliferation",
    "summary": "The conflict's nuclear core is the fate of Iran's enriched-uranium stockpile and the collapse of IAEA verification. Iran is assessed to hold >440 kg (cited 440.9 kg) of 60%-enriched uranium — the last figure verified before Iran terminated agency access in February 2026. IAEA Director-General Grossi assessed in late April 2026 that most of Iran's HEU likely remains at the Isfahan complex (~200 kg in 18 containers moved into a tunnel June 9, 2025); separately, the Partnership for Global Security assesses ~400 kg of weapon-grade uranium now likely buried under rubble at Isfahan. The FDD estimates US/Israeli strikes extended crude-device breakout from ~6 months to as much as 2.5 years absent foreign assistance, citing 9,000+ kg of enriched UF6 including 440 kg HEU (sufficient for ~11 weapons). Carnegie assesses known enrichment infrastructure is largely inoperable but Iran retains capacity to reconstitute clandestinely, with IAEA access effectively curtailed. [PROVISIONAL-2026]",
    "metrics": [
      {
        "label": "Heu 60pct",
        "value": ">440 kg (cited 440.9 kg)"
      },
      {
        "label": "Total enriched uf6",
        "value": "9,000+ kg"
      },
      {
        "label": "Weapons equiv 60pct",
        "value": "~11 (FDD estimate)"
      },
      {
        "label": "Breakout time",
        "value": "~6 months → as much as 2.5 years (FDD, post-strike)"
      },
      {
        "label": "Iaea access",
        "value": "terminated by Iran, February 2026"
      },
      {
        "label": "Isfahan heu containers",
        "value": "18 containers (~200 kg) moved into a tunnel June 9, 2025"
      },
      {
        "label": "Weapon grade estimate",
        "value": "~400 kg weapon-grade likely buried at Isfahan (PGS)"
      },
      {
        "label": "Grossi assessment",
        "value": "late April 2026 — most HEU likely remains at Isfahan"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "FDD — requirements for an Iran deal",
        "url": "https://www.fdd.org/analysis/2026/05/29/6-essential-requirements-for-a-good-iran-nuclear-deal/",
        "tier": "T2"
      },
      {
        "name": "Deutsche Welle (IAEA/Grossi)",
        "url": "https://www.dw.com/en/what-will-happen-to-irans-nuclear-material/a-77122353",
        "tier": "T2"
      },
      {
        "name": "Partnership for Global Security",
        "url": "https://partnershipforglobalsecurity.org/reordering-the-nuclear-regime-in-the-wake-of-the-iran-war%EF%BF%BC/",
        "tier": "T2"
      },
      {
        "name": "Carnegie Endowment",
        "url": "https://carnegieendowment.org/emissary/2026/05/iran-nuclear-program-progress-deal",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "uranium"
      ],
      "entities": [
        "iran",
        "iaea",
        "fdd",
        "partnership-global-security",
        "carnegie",
        "united-states",
        "israel",
        "china",
        "saudi-arabia",
        "kazatomprom"
      ],
      "scenarios": [
        "ceasefire",
        "hormuz_closure"
      ],
      "position": {},
      "asOf": "2026-05-29"
    }
  },
  {
    "id": "S6-NUC-002",
    "icon": "02",
    "title": "The Broken Gold Standard — US-Saudi 123 Agreement and Proliferation Cascade",
    "category": "Nuclear / Arms Control",
    "summary": "The arms-control spillover is structural. The US-Saudi Section 123 civil-nuclear agreement (Joint Declaration signed Nov 18, 2025; politically formalized alongside a $142bn arms package during Trump's May 13, 2026 Riyadh visit) omits the enrichment ban that defined the UAE's 2009 'gold standard,' does not require the IAEA Additional Protocol (first use of the 2020 NDAA presidential waiver), and substitutes a bilateral safeguards arrangement covering only declared facilities. The asymmetry — enrichment as a sovereign prerogative for Riyadh but a non-negotiable surrender condition for Tehran (zero ceiling, 20-year moratorium, 440.9 kg surrender) — underpins the ceasefire negotiation. The UAE's 2009 regional-parity clause lets Abu Dhabi revisit its own waiver if a regional state secures enrichment rights, creating contractual cascade risk to Egypt, Turkey and Jordan. The No Nuclear Weapons for Saudi Arabia Act (S.4243) was introduced March 26, 2026. [PROVISIONAL-2026]",
    "metrics": [
      {
        "label": "Joint declaration signed",
        "value": "Nov 18, 2025"
      },
      {
        "label": "Arms package",
        "value": "$142bn (formalized May 13, 2026)"
      },
      {
        "label": "Enrichment ban",
        "value": "omitted (vs UAE 2009 gold standard)"
      },
      {
        "label": "Additional protocol",
        "value": "not required (first NDAA presidential waiver)"
      },
      {
        "label": "Iran demand",
        "value": "zero-percent enrichment, 20-year moratorium, 440.9 kg surrender"
      },
      {
        "label": "Cascade risk",
        "value": "UAE regional-parity clause; Egypt / Turkey / Jordan baseline reset"
      },
      {
        "label": "Congressional bill",
        "value": "S.4243 (introduced March 26, 2026)"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "House of Saud (123 agreement analysis)",
        "url": "https://houseofsaud.com/saudi-nuclear-enrichment-right-iran-surrender/",
        "tier": "T2"
      },
      {
        "name": "Partnership for Global Security",
        "url": "https://partnershipforglobalsecurity.org/reordering-the-nuclear-regime-in-the-wake-of-the-iran-war%EF%BF%BC/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "uranium",
        "defense"
      ],
      "entities": [
        "saudi-arabia",
        "united-states",
        "uae",
        "iran",
        "egypt",
        "turkey",
        "jordan",
        "iaea"
      ],
      "scenarios": [
        "ceasefire"
      ],
      "position": {},
      "asOf": "2026-05-13"
    }
  }
];

export const thesis = "The Twelve-Day War did two structural things to the nuclear order. It set back — but did not end — Iran's program: known enrichment infrastructure is largely inoperable and breakout pushed from ~6 months toward ~2.5 years, yet >440 kg of 60% HEU is unaccounted under collapsed IAEA verification, leaving a fissile-material-control risk rather than a resolved one. And it broke the Gulf non-proliferation 'gold standard': the US-Saudi 123 agreement omits the enrichment ban and the Additional Protocol that constrained the UAE in 2009, while demanding the opposite of Iran. That asymmetry — sovereign enrichment for Riyadh, total surrender for Tehran — is the hinge of the ceasefire, and the UAE's regional-parity clause makes it contagious to Egypt, Turkey and Jordan. For an event-driven fund this is the conflict's highest-stakes tail: a proliferation cascade reprices regional risk, energy-security hedging and the entire Gulf security architecture. [PROVISIONAL-2026 — assessments made during active conflict with verification curtailed.]";

export const fuelCycle = {
  "label": "Uranium & fuel-cycle vulnerabilities (§4.4)",
  "text": "China's structural import dependency (~82%) and a 2026 commissioning wave of seven ~1,000 MW reactors (each ~160 t U/yr; >1,100 t/yr incremental) tighten the fuel cycle just as Kazatomprom cut 2026 output ~10% — a structural uranium-demand signal that interacts with Gulf nuclear ambitions. Saudi Arabia's stated intent under Vision 2030 is domestic uranium mining, conversion and enrichment — the fuel-cycle sovereignty the 123 agreement's silence enables. (China fleet figures corroborated by CSIS; the uranium-demand video proxy is treated T3 — see data quality.)"
};

export const cascadeChain = [
  {
    "step": "Iran terminates IAEA access (Feb 2026)",
    "detail": ">440 kg 60% HEU unverified; verification collapses"
  },
  {
    "step": "US-Saudi 123 omits enrichment ban (formalized May 13)",
    "detail": "first NDAA Additional-Protocol waiver; bilateral safeguards on declared facilities only"
  },
  {
    "step": "Asymmetric ceasefire demand on Iran",
    "detail": "zero enrichment, 20-yr moratorium, 440.9 kg surrender — vs sovereign enrichment for Riyadh"
  },
  {
    "step": "UAE regional-parity clause triggers",
    "detail": "Abu Dhabi may revisit its own 2009 enrichment waiver"
  },
  {
    "step": "Cascade risk to Egypt, Turkey, Jordan",
    "detail": "regional baseline for enrichment rights resets upward"
  }
];

export const sourceResolution = [
  {
    "item": "Conflict duration — \"Twelve-Day War\" vs \"39-day campaign\"",
    "resolution": "The source uses both: \"Twelve-Day War\" (Carnegie, §4) for the kinetic nuclear-strike phase and \"39-day campaign\" (CSIS, §5) for the broader air campaign. They describe different windows, not a contradiction — each is retained in its original context rather than reconciled into one figure."
  },
  {
    "item": "Iran HEU figure — 440 vs 440.9 kg",
    "resolution": ">440 kg is the last IAEA-verified 60% stock; 440.9 kg is the precise figure cited in ceasefire-surrender terms; FDD uses 440 kg HEU. Same stockpile, different rounding/context — preserved as \">440 (cited 440.9).\""
  }
];

export const scenarioMatrix = [
  {
    "scenario": "S1",
    "label": "Ceasefire + Deal",
    "tone": "#10b981",
    "impact": "A window for an Iran deal opens; if residual enrichment is conceded, proliferation-cascade risk rises despite a calmer surface. Gulf nuclear ambitions proceed regardless."
  },
  {
    "scenario": "S2",
    "label": "Ceasefire + Impasse",
    "tone": "#22d3ee",
    "impact": "No deal; IAEA access stays curtailed; the unaccounted HEU remains a standing fissile-material-control risk and a recurring escalation trigger."
  },
  {
    "scenario": "S3",
    "label": "Civilian-Reactor Vulnerability",
    "tone": "#f59e0b",
    "impact": "Attacks on energy/nuclear-adjacent infrastructure (the Barakah precedent) raise IAEA conflict-zone concerns; the reactor-as-baseload-security case strengthens even as the targeting taboo erodes."
  },
  {
    "scenario": "S4",
    "label": "Proliferation Cascade",
    "tone": "#ef4444",
    "impact": "The broken gold standard propagates: Saudi fuel-cycle sovereignty under Vision 2030, UAE parity revisited, Egypt/Turkey/Jordan reset — a structural re-rating of regional and energy-security risk."
  }
];

export const dataQuality = {
  "high": "Saudi 123 agreement terms, dates and the $142bn arms package (cross-checked House of Saud vs Partnership for Global Security); S.4243 introduction; UAE 2009 gold-standard baseline.",
  "moderate": "Iran HEU figures and breakout estimates (FDD/IAEA-via-DW assessments during active conflict; stockpile location disputed); China fuel-cycle figures (CSIS-corroborated).",
  "quarantined": "Uranium-demand and Kazatomprom −10% figures sourced to a promotional YouTube video (T3) — used only as context; China fleet figures separately corroborated by CSIS/WNA."
};

export const relatedSectors = "Civilian nuclear as an energy-security hedge (reactor counts, Barakah, the >$80bn/yr investment pipeline) is tracked on /markets/energy; the defense-industrial supercycle on /markets/defense; regional exposure on /exposure. Cross-section causal link: a proliferation-escalation would reprice gold and the volatility regime — see /markets/gold-fx, /markets/cross-asset and the causal map on /connections.";
