// GENERATED from IranWarTracker/data/cascades/digital.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "card.digital.red_sea_cables",
    "icon": "01",
    "title": "Red Sea–Egypt Cable Chokepoint",
    "category": "Index",
    "summary": "~17% of global internet traffic and >90% Europe–Asia bandwidth via a single corridor; ~63 repair vessels globally; Sep 2025 Jeddah cut left 1 of 4 cables down 7+ months.",
    "metrics": [
      {
        "label": "Share global traffic",
        "value": "~17%"
      },
      {
        "label": "Europe asia bandwidth",
        "value": ">90%"
      },
      {
        "label": "Global repair vessels",
        "value": "~63"
      },
      {
        "label": "Cables cut sep 2025",
        "value": "4"
      },
      {
        "label": "Period",
        "value": "2025"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "CSIS",
        "url": "https://www.csis.org/analysis/strategic-future-subsea-cables-egypt-case-study",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "digital-infrastructure"
      ],
      "entities": [
        "csis",
        "egypt",
        "red-sea",
        "subsea-cables"
      ],
      "scenarios": [
        "cable_severance"
      ],
      "position": {},
      "asOf": "2025"
    }
  },
  {
    "id": "card.digital.leo_capacity_gap",
    "icon": "02",
    "title": "LEO Satellite vs Subsea Capacity Gap",
    "category": "Index",
    "summary": "Global satellite capacity is directionally far smaller than submarine-cable capacity; one T3 estimate puts satellite at ~50 Tbps by 2026 vs ~8,750 Tbps subsea. LEO is useful for emergency prioritization, not full substitution.",
    "metrics": [
      {
        "label": "Satellite capacity tbps",
        "value": "~50 (T3 illustrative)"
      },
      {
        "label": "Subsea capacity tbps",
        "value": "~8,750 (T3 illustrative)"
      },
      {
        "label": "Starlink subs m",
        "value": "~10 (T3)"
      },
      {
        "label": "Period",
        "value": "2026"
      }
    ],
    "confidence": "low",
    "sources": [
      {
        "name": "ABHS",
        "url": "https://www.abhs.in/blog/why-starlink-cannot-replace-undersea-internet-cables-2026",
        "tier": "T3"
      }
    ],
    "tags": {
      "assetClass": [
        "digital-infrastructure"
      ],
      "entities": [
        "starlink",
        "subsea-cables"
      ],
      "scenarios": [
        "cable_severance"
      ],
      "position": {},
      "asOf": "2026"
    }
  }
];

export const thesis = "Internet fragmentation has a hard physical chokepoint problem layered on a policy one. VegaReady tracks two layered risks: physical (submarine-cable chokepoints, repair capacity, LEO backup limits) and policy (data localization, internet controls, kill-switch risk). The chokepoint problem mirrors the maritime one — the Red Sea–Egypt corridor carries ~17% of global internet traffic and >90% of Europe–Asia bandwidth through a single corridor, while the global repair fleet is just ~63 aging vessels. Submarine-cable sabotage has become a normalized grey-zone tactic with a verifiable incident record.";

export const physicalNote = "The global internet runs on ~600 submarine cables (~1.5M km) carrying ~99% of intercontinental data, repaired by a global fleet of only ~63 aging vessels at $1–3M per repair and months of lead time. Roughly 150–200 faults occur annually, 70–80% accidental. The Red Sea–Egypt corridor carries ~17% of global internet traffic and >90% of Europe–Asia bandwidth; the September 6, 2025 Jeddah event cut four cables (SEA-ME-WE-4, IMEWE, FALCON GCX +1), three needing ~5 months and one still out 7 months later.";

export const leoNote = "LEO satellite is not a backup at scale. A single-blog estimate puts total global satellite capacity at ~50 Tbps by 2026 versus ~8,750 Tbps subsea, but the exact ratio is T3 and should be treated as illustrative. The usable monitoring signal is simpler: subsea cables remain the primary global-capacity layer, while LEO systems support emergency prioritization, remote access and outage triage rather than full traffic substitution.";

export const policyNote = "Global internet freedom declined for the 14th consecutive year in Freedom House's Freedom on the Net 2024 (72 countries); China and Myanmar tied as worst, Iran 3rd most repressive, Iceland freest, and 48% of internet users live in countries where authorities disconnected networks. Data localization is proliferating: ~100 measures across 40 countries by early 2023, >two-thirds combining storage requirements with flow prohibition (OECD).";

export const scorecard = [
  {
    "region": "China",
    "control": 5,
    "localization": 5,
    "redundancy": 2,
    "satBackup": 2,
    "killSwitch": 4,
    "composite": 3.6,
    "notes": "Domestic-internet isolation; own LEO build"
  },
  {
    "region": "Russia",
    "control": 5,
    "localization": 4,
    "redundancy": 3,
    "satBackup": 3,
    "killSwitch": 5,
    "composite": 4,
    "notes": "RuNet kill-switch demonstrated"
  },
  {
    "region": "Egypt",
    "control": 4,
    "localization": 3,
    "redundancy": 1,
    "satBackup": 4,
    "killSwitch": 4,
    "composite": 3.2,
    "notes": "~17% global traffic transits; chokepoint"
  },
  {
    "region": "Pakistan",
    "control": 4,
    "localization": 3,
    "redundancy": 2,
    "satBackup": 4,
    "killSwitch": 4,
    "composite": 3.4,
    "notes": "Frequent shutdowns; few landing points"
  },
  {
    "region": "India",
    "control": 3,
    "localization": 4,
    "redundancy": 3,
    "satBackup": 3,
    "killSwitch": 4,
    "composite": 3.4,
    "notes": "World-leading shutdown count (J&K)"
  },
  {
    "region": "Gulf (Saudi/UAE)",
    "control": 4,
    "localization": 3,
    "redundancy": 2,
    "satBackup": 3,
    "killSwitch": 3,
    "composite": 3,
    "notes": "[PROVISIONAL-2026] cable force majeure"
  },
  {
    "region": "EU",
    "control": 1,
    "localization": 4,
    "redundancy": 4,
    "satBackup": 3,
    "killSwitch": 1,
    "composite": 2.6,
    "notes": "Localization is regulatory, not coercive"
  },
  {
    "region": "US",
    "control": 1,
    "localization": 2,
    "redundancy": 5,
    "satBackup": 1,
    "killSwitch": 1,
    "composite": 2,
    "notes": "Lowest fragmentation risk"
  },
  {
    "region": "Singapore",
    "control": 2,
    "localization": 3,
    "redundancy": 3,
    "satBackup": 3,
    "killSwitch": 2,
    "composite": 2.6,
    "notes": "Critical Asia interconnection node"
  },
  {
    "region": "East Africa",
    "control": 3,
    "localization": 2,
    "redundancy": 1,
    "satBackup": 4,
    "killSwitch": 3,
    "composite": 2.6,
    "notes": "High Bab el-Mandeb cable exposure"
  }
];

export const scorecardNote = "Scored 1–5, 5 = highest fragmentation/kill-switch risk. Control and localization columns are anchored to Freedom House and OECD data; redundancy/backup/kill-switch are analyst estimates (T3). Russia (RuNet) and China (Great Firewall) score highest on coercive control; Egypt and East Africa are the physical-chokepoint extremes; the US scores lowest overall.";

export const sabotage = [
  {
    "incident": "Baltic — C-Lion1 / BCS East-West",
    "date": "Nov 17–18, 2024",
    "detail": "Two cables severed; restored Nov 28; anchor-drag attribution amid NATO scrutiny",
    "source": "Wikipedia"
  },
  {
    "incident": "Taiwan Strait — Matsu Islands",
    "date": "2023 (5-yr record)",
    "detail": ">20 cable cuts in five years; Matsu left 50+ days offline in 2023",
    "source": "The Diplomat"
  },
  {
    "incident": "Red Sea — Jeddah",
    "date": "Sep 6, 2025",
    "detail": "4 cables cut (SEA-ME-WE-4, IMEWE, FALCON GCX +1); 1 still down 7+ months later",
    "source": "TeleGeography/ICPC"
  }
];

export const sabotageNote = "Submarine-cable sabotage has become a normalized grey-zone tactic with a verifiable incident record — anchor-drag and deliberate cuts across the Baltic, Taiwan Strait and Red Sea. With ~150–200 faults annually (70–80% accidental), the tracking signal is the concentration of deliberate cuts at chokepoints, not the raw fault count.";

export const dataQuality = {
  "high": "Freedom House FOTN (14th-year decline, 48% disconnect figure); OECD data-localization count; TeleGeography cable/vessel counts; CSIS Jeddah cable-cut record.",
  "moderate": "Red Sea ~17% traffic share (denominator differs from the >90% Europe–Asia bandwidth figure — both reported with denominators); cable-count revisions (~530/570/600).",
  "quarantined": "LEO-vs-subsea capacity ratio (~175×) and Starlink subscriber counts (single-blog T3, illustrative only); scorecard redundancy/backup/kill-switch columns (analyst T3)."
};

export const relatedSectors = "The cable-weaponization investment angle (Starboard, repair-ship scarcity, mine-clearing) lives on /markets/defense; the chokepoint geography on /structural/chokepoints; the cable_severance scenario across the corpus.";
