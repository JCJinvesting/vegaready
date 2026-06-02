// GENERATED from IranWarTracker/data/cascades/deglobalization.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "card.deglobalization.fdi_fragmentation",
    "icon": "01",
    "title": "Bloc-to-Bloc FDI Fragmentation",
    "category": "Dynamic",
    "summary": "Global FDI −3% H1 2025; greenfield supply-chain mfg −29%; FDI between geopolitically distant blocs −30% vs within-bloc after Q1 2022. Core de-globalization gauge.",
    "metrics": [
      {
        "label": "Global FDI h1 2025",
        "value": "−3%"
      },
      {
        "label": "Greenfield supply chain mfg",
        "value": "−29%"
      },
      {
        "label": "Bloc to bloc FDI gap",
        "value": "−30%"
      },
      {
        "label": "Period",
        "value": "H1 2025 / post-Q1 2022"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "UNCTAD",
        "url": "https://unctad.org/news/global-foreign-investment-falls-3-first-half-2025-hitting-industry-and-infrastructure",
        "tier": "T1"
      },
      {
        "name": "EBRD via International Banker",
        "url": "https://internationalbanker.com/finance/connector-economies-are-straddling-the-global-geopolitical-divide-for-potentially-sizeable-gains-in-trade/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "fdi",
        "trade-flows"
      ],
      "entities": [
        "unctad",
        "ebrd"
      ],
      "scenarios": [],
      "position": {},
      "asOf": "2025"
    }
  },
  {
    "id": "card.deglobalization.mexico_nearshoring",
    "icon": "02",
    "title": "Mexico Nearshoring: Trade vs Capital Gap",
    "category": "Dynamic",
    "summary": "US-import share 13.4% (2017) → 15.8% (2024) as China 21.6% → 13.2%; record $41bn FDI 2024 but new FDI at 10-yr low. Gains are trade diversion, not relocation.",
    "metrics": [
      {
        "label": "Mexico us import share 2017",
        "value": "13.4%"
      },
      {
        "label": "Mexico us import share 2024",
        "value": "15.8%"
      },
      {
        "label": "China us import share 2017",
        "value": "21.6%"
      },
      {
        "label": "China us import share 2024",
        "value": "13.2%"
      },
      {
        "label": "Mexico FDI 2024",
        "value": "$41bn"
      },
      {
        "label": "Period",
        "value": "2017-2024"
      },
      {
        "label": "Mfg FDI growth",
        "value": "+20%/yr since 2019 (vs 7% global)"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "Dallas Fed",
        "url": "https://www.dallasfed.org/research/economics/2024/1205",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "fdi",
        "trade-flows"
      ],
      "entities": [
        "dallas-fed",
        "mexico",
        "china",
        "united-states"
      ],
      "scenarios": [],
      "position": {},
      "asOf": "2024"
    }
  },
  {
    "id": "card.deglobalization.tariff_index",
    "icon": "03",
    "title": "US Tariff Escalation Index",
    "category": "Dynamic",
    "summary": "2025 tariffs: US avg effective rate 17.8% pre-sub (highest since 1934) / 16.4% post-sub; China avg ~51% by late Jul 2025. Pre-vs-post gap measures decoupling speed.",
    "metrics": [
      {
        "label": "Avg rate pre sub",
        "value": "17.8% (highest since 1934)"
      },
      {
        "label": "Avg rate post sub",
        "value": "16.4% (highest since 1937)"
      },
      {
        "label": "Increase pp",
        "value": "+15.4pp"
      },
      {
        "label": "China avg tariff",
        "value": "~51%"
      },
      {
        "label": "Period",
        "value": "2025"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "Yale Budget Lab",
        "url": "https://budgetlab.yale.edu/research/state-us-tariffs-may-12-2025",
        "tier": "T2"
      },
      {
        "name": "Z2Data",
        "url": "https://www.z2data.com/insights/seven-telling-statistics-on-us-tariffs-in-2025",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "trade-flows"
      ],
      "entities": [
        "yale-budget-lab",
        "united-states",
        "china"
      ],
      "scenarios": [],
      "position": {},
      "asOf": "2025"
    }
  }
];

export const thesis = "De-globalization is measurably real in trade flows but largely unrealized in capital relocation — the announcement-vs-delivery gap is the key signal. VegaReady tracks the gap between announced reshoring/friend-shoring and measured relocation, by sector and destination. Tariff escalation has structurally re-priced US trade exposure to its highest level in ~90 years, while global FDI sits in a two-year slump that fragments along bloc lines. The single sharpest gauge: the divergence between the pre- and post-substitution US tariff rate quantifies how fast importers are abandoning Chinese sourcing.";

export const fdiNote = "Global FDI fell 3% in H1 2025, extending a two-year slump; greenfield-project announcements fell 17% in number, with supply-chain-intensive manufacturing (textiles, electronics, autos) down 29% amid tariff uncertainty (UNCTAD). The fragmentation signal is sharpest in bloc-to-bloc flows: FDI between geopolitically distant blocs fell 30% relative to within-bloc flows after Q1 2022 (EBRD). AI/digital is the lone growth area — US greenfield reached $237bn in H1 2025 (>half AI-related: semiconductors $103bn, data centres $27bn).";

export const reshoring = [
  {
    "sector": "Semiconductors",
    "announced": ">$600bn private, 130+ projects, 28 states since 2020",
    "delivered": "$32.5bn grants + $5.85bn loans to 32 cos/48 projects; ~30% leading-edge target by 2032",
    "policy": "US CHIPS Act (~$280bn; $52.7bn appropriated)",
    "source": "SIA; CFR"
  },
  {
    "sector": "EV / battery",
    "announced": "~$312bn US EV+battery mfg ($223bn allocated)",
    "delivered": "380 IRA clean-tech facilities announced; 161 operational by Q1 2025; ~202 GWh cell capacity operating",
    "policy": "US IRA (Aug 2022)",
    "source": "Atlas EV Hub; Rhodium"
  },
  {
    "sector": "Critical minerals",
    "announced": "EU strategic reserve (tungsten, REE, gallium); Australia Arafura $1.6bn",
    "delivered": "Early stage; China still ~70% processing",
    "policy": "US DPA; EU Critical Raw Materials Act",
    "source": "InvestorNews / Section 6"
  },
  {
    "sector": "Solar mfg",
    "announced": "—",
    "delivered": "US solar-mfg investment $0.9bn (2022) → ~$6.0bn (2024); 42 GW module capacity",
    "policy": "US IRA",
    "source": "Rhodium"
  },
  {
    "sector": "Shipping / cables",
    "announced": "TEAS, Blue-Raman, terrestrial Gulf bypass routes",
    "delivered": "Force majeure on Gulf extensions [PROVISIONAL-2026]",
    "policy": "EU Submarine Cable Expert Group",
    "source": "DCD"
  }
];

export const connectorNote = "The \"connector economies\" (Vietnam, Poland, Morocco, Mexico, Indonesia) are just 4% of global GDP but attracted >10% (~$550bn) of greenfield investment since 2017. Mexico: US-import share rose 13.4% (2017) → 15.8% (2024) as China's fell 21.6% → 13.2%; record >$41bn FDI in 2024, manufacturing FDI +20%/yr since 2019 (vs 7% global; auto ~40%). But new FDI sits at a 10-year low — gains are dominated by trade diversion and reinvested earnings, not greenfield capital relocation (Dallas Fed; BCG). Vietnam/India absorb US-end-demand assembly while sourcing intermediate inputs from China.";

export const tariff = {
  "preSub": "17.8% (highest since 1934)",
  "postSub": "16.4% (highest since 1937)",
  "increasePp": "+15.4pp pre / +14.0pp post",
  "chinaAvg": "~51% by late July 2025",
  "signal": "The 1.4pp divergence between the pre- and post-substitution rate is itself a de-globalization gauge — it quantifies how fast importers are abandoning Chinese sourcing.",
  "source": "Yale Budget Lab; Z2Data"
};

export const dataQuality = {
  "high": "UNCTAD FDI figures; Yale Budget Lab tariff rates; SIA/Rhodium reshoring-delivery data; Dallas Fed Mexico import-share series.",
  "moderate": "EBRD bloc-to-bloc gap (T2); connector-economy greenfield share (Bloomberg via International Banker).",
  "quarantined": "Announced-investment headline totals (announcement-vs-delivery gap is the whole point — announcements are not anchors)."
};

export const relatedSectors = "The critical-minerals reshoring thread connects to /markets/energy and /markets/defense; the cable bypass routes to /structural/digital; tariff/FX stress on importers to /markets/credit and /exposure. Cross-section causal link: the tariff regime compounds the oil-cost margin hit on import-heavy equity sectors (autos, consumer, semis) — see /markets/equities and the causal map on /connections.";
