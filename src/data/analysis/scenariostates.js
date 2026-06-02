// GENERATED from IranWarTracker/data/cascades/scenario-states.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const stateDefs = {
  "physical": "Is the flow/asset physically disrupted right now? (transit, production, cables)",
  "legal": "Sanctions, designations, force majeure, legal notices in force",
  "insurance": "War-risk cover, P&I, premiums — the actuarial gate on flow",
  "market": "Price/vol regime — is the shock still being priced?",
  "economic": "Realized macro damage (inflation, fiscal, food fuse, remittances) — the slowest to clear"
};

export const statusValues = [
  "realized",
  "partial",
  "elevated",
  "normalizing",
  "latent",
  "not-realized"
];

export const scenarios = [
  {
    "scenario": "hormuz_closure",
    "label": "Hormuz closure",
    "tone": "#ef4444",
    "headline": "Physically de-escalating, economically still closed.",
    "states": {
      "physical": {
        "status": "normalizing",
        "note": "Transit collapsed to ~14.6 mb/d (Q1, −29.7%); peak daily >95% Mar-Apr; tentative Hormuz deal late May."
      },
      "legal": {
        "status": "realized",
        "note": "OFAC vessel designations (19, May 19) + IRGC Persian Gulf Strait Authority (May 27); sanctions regime active."
      },
      "insurance": {
        "status": "elevated",
        "note": "AWRP 0.2%→7.5%→10% peak; all 12 P&I clubs withdrew cover Mar 5; ~1% by Apr but ratchet-asymmetric (2-4 quarters to fully normalize)."
      },
      "market": {
        "status": "elevated",
        "note": "OVX 28→120.9→~58 (still ~2x); VIX normalized to 15.7 (false all-clear); Brent structural floor reset $75-80."
      },
      "economic": {
        "status": "realized",
        "note": "CPI +3.3% / PCE +3.8%; GCC build-cost +12.6%; remittance −7.7%; food/fertilizer fuse 6-12mo. Economic closure persists past kinetic de-escalation."
      }
    }
  },
  {
    "scenario": "oil_strike",
    "label": "Oil-infrastructure strike",
    "tone": "#f59e0b",
    "headline": "Partially realized; concentrated in the products complex.",
    "states": {
      "physical": {
        "status": "partial",
        "note": "~3.0 mb/d refinery/field offline by Mar 23 (Wood Mackenzie)."
      },
      "legal": {
        "status": "partial",
        "note": "Sanctions on teapot refiners (Hengli, Apr 24); Iranian crude to China ~1.38 mb/d halted."
      },
      "insurance": {
        "status": "elevated",
        "note": "War-risk extends to energy infrastructure; capacity tightening."
      },
      "market": {
        "status": "realized",
        "note": "Crack spreads blew out — NW Europe jet $100/bbl, diesel $70/bbl peak (4-5x); Asia cash premiums multi-year high."
      },
      "economic": {
        "status": "partial",
        "note": "Middle-distillate inflation; Asian refiner margin compression; quality-specific (heavy/sour) not fungible with shale."
      }
    }
  },
  {
    "scenario": "cable_severance",
    "label": "Subsea cable severance",
    "tone": "#22d3ee",
    "headline": "Largely latent — a threat, not a realized market mover.",
    "states": {
      "physical": {
        "status": "partial",
        "note": "2Africa Pearls FM Mar 13 (Ile de Batz stranded at Dammam); Gulf cables (AAE-1, FALCON, GBI) at risk; 1 repair vessel in-Gulf."
      },
      "legal": {
        "status": "latent",
        "note": "No specific cable legal regime triggered."
      },
      "insurance": {
        "status": "latent",
        "note": "Not a primary insurance channel."
      },
      "market": {
        "status": "latent",
        "note": "Documented FALSE POSITIVE — cable cuts historically did NOT move VIX/MOVE. Do not hedge broad vol to this."
      },
      "economic": {
        "status": "partial",
        "note": "Regional connectivity/fintech/crypto-rail risk; Asia-Europe backbone runs via Red Sea (~900mi from Hormuz), so Gulf damage is largely domestic, not global-backbone."
      }
    }
  },
  {
    "scenario": "ceasefire",
    "label": "Ceasefire / de-escalation",
    "tone": "#10b981",
    "headline": "Kinetic risk easing; economic closure NOT yet cleared.",
    "states": {
      "physical": {
        "status": "normalizing",
        "note": "Tentative Hormuz deal late May; transit recovering; LNG Ras Laffan restart 4-8 weeks."
      },
      "legal": {
        "status": "partial",
        "note": "Sanctions largely persist; ~$6bn Iran frozen-asset release under discussion (late May, not executed)."
      },
      "insurance": {
        "status": "elevated",
        "note": "Ratchet asymmetry — AWRP normalizes only after sustained incident-free transit rebuilds actuarial confidence (2-4 quarters)."
      },
      "market": {
        "status": "normalizing",
        "note": "Risk-on reversal, but OVX/VXEEM still ~2x; false-ceasefire whipsaw risk."
      },
      "economic": {
        "status": "not-realized",
        "note": "KEY INSIGHT: economic closure persists — food fuse, GCC build costs, fiscal/remittance damage continue well past the kinetic ceasefire. A ceasefire is not an economic all-clear."
      }
    }
  }
];

export const purpose = "Scenario-state ledger: each scenario is decomposed into five states because a scenario is never a single switch. A ceasefire can end kinetic/physical risk while insurance and economic closure persist. Resolves the realized-vs-nominal ambiguity (e.g. Hormuz physically reopening while the economic shock continues).";
