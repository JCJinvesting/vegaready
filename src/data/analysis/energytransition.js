// GENERATED from IranWarTracker/data/cascades/energytransition.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "S6-TRANS-001",
    "icon": "01",
    "title": "Energy-Security Capital Rotation — IEA WEI 2026",
    "category": "Energy Transition / Capital",
    "summary": "The IEA's World Energy Investment 2026 (released May 28, 2026, explicitly framed around the Middle East conflict and Hormuz disruption) projects $3.4tn total 2026 energy investment, up ~5% real on 2025's record — ~$2.2tn to clean/low-emissions vs ~$1.2tn to fossil fuels (~2:1). Renewables ~$665bn (solar $365bn), grids ~$550bn (+20% YoY), storage >$100bn, nuclear >$80bn across 15 countries. The conflict reinforces a transition already driven by import-dependence/security logic — 70% of clean-spending growth over five years came from net fossil importers (China, Europe, India). BNEF independently logged a record $2.3tn 2025 transition investment (+8% YoY).",
    "metrics": [
      {
        "label": "Total investment 2026",
        "value": "$3.4 trillion (+~5% real vs 2025's $3.3tn record)"
      },
      {
        "label": "Clean low emissions",
        "value": "~$2.2 trillion (~two-thirds of total)"
      },
      {
        "label": "Fossil fuels",
        "value": "~$1.2 trillion"
      },
      {
        "label": "Renewables",
        "value": "~$665bn (solar $365bn ≈$1bn/day, wind $200bn, hydro $75bn)"
      },
      {
        "label": "Grids",
        "value": "~$550bn (+~20% YoY)"
      },
      {
        "label": "Battery storage",
        "value": ">$100bn"
      },
      {
        "label": "Nuclear",
        "value": ">$80bn/yr; 15 countries advancing projects"
      },
      {
        "label": "Fuel import savings 2025",
        "value": "~$260bn avoided by the 5 largest importers (IEA)"
      },
      {
        "label": "Bnef corroboration",
        "value": "$2.3tn 2025 transition investment (+8% YoY) — independent tracker"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "Argus Media citing IEA WEI 2026",
        "url": "https://www.argusmedia.com/en/news-and-insights/latest-market-news/2832315-energy-security-fears-drive-diversification-spend-iea",
        "tier": "T2 citing T1-underlying IEA"
      },
      {
        "name": "Straits Times (IEA)",
        "url": "https://www.straitstimes.com/world/europe/mideast-war-reshaping-national-energy-strategies-iea",
        "tier": "T2"
      },
      {
        "name": "Down To Earth (IEA)",
        "url": "https://www.downtoearth.org.in/energy/clean-energy-investment-saved-fuel-importers-260-billion-in-2025-iea",
        "tier": "T2"
      },
      {
        "name": "Energy News Beat (IEA)",
        "url": "https://energynewsbeat.co/international-news/ieas-latest-report-on-energy-investment-and-next-steps/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "energy",
        "renewables",
        "nuclear"
      ],
      "entities": [
        "iea",
        "bnef",
        "china",
        "european-union",
        "india"
      ],
      "scenarios": [
        "hormuz_closure"
      ],
      "position": {
        "hormuz_closure": "winner"
      },
      "asOf": "2026-05-28"
    }
  },
  {
    "id": "S6-TRANS-002",
    "icon": "02",
    "title": "Transition Bifurcation — Renewables Accelerate, Gas/Coal Lock In at Decade Highs",
    "category": "Energy Transition / Dynamic",
    "summary": "The conflict pushed both directions at once. Acceleration: 23 countries across 5 continents announced clean-energy/electrification measures by May 1; renewable-energy ETFs drew >$3bn in April (largest monthly inflow since Jan 2021); a UKSIF survey found 87% of investment firms expect a surge in renewables financing; Norway's NBIM implied ≥$12.6bn of new unlisted-renewables investment by 2030. Lock-in: 2026 gas investment hit $330bn (highest in a decade, LNG-driven in the US and Qatar) and coal supply $180bn (highest since 2012). The binding constraint is cost of capital — emerging-market renewables WACC was 12.95% vs Europe's 5.02% (Jan 2026), and WACC is 20–50% of utility-scale solar LCOE, trapping the most import-exposed economies. IRENA (May 26) stated the next phase \"must focus on electrification, renewable energy expansion and a faster move away from fossil fuels.\"",
    "metrics": [
      {
        "label": "Countries clean announcements",
        "value": "23 across 5 continents (by May 1, 2026)"
      },
      {
        "label": "Indonesia solar",
        "value": "100 GW within 3 years (Prabowo)"
      },
      {
        "label": "Philippines renewables",
        "value": "~1.47 GW fast-tracked by end-April"
      },
      {
        "label": "Vietnam LNG cancelled",
        "value": "Largest planned LNG plant scrapped for renewables+storage, citing ME risk"
      },
      {
        "label": "Renewable etf inflows",
        "value": ">$3bn (April 2026 — largest since Jan 2021)"
      },
      {
        "label": "Nbim renewables",
        "value": "≥$12.6bn implied (1% of $2.1tn AUM by 2030)"
      },
      {
        "label": "Uksif survey",
        "value": "87% of firms expect a renewables-financing surge"
      },
      {
        "label": "Gas investment 2026",
        "value": "$330bn (decade high; LNG US/Qatar)"
      },
      {
        "label": "Coal supply 2026",
        "value": "$180bn (highest since 2012; China ~70%, India #2)"
      },
      {
        "label": "Em renewables wacc",
        "value": "12.95% (Jan 2026) vs Europe 5.02%"
      },
      {
        "label": "Cost of capital share lcoe",
        "value": "20–50% of utility-scale solar LCOE"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "Zero Carbon Analytics",
        "url": "https://zerocarbon-analytics.org/energy/clean-energy-stocks-gain-in-value-during-iran-war/",
        "tier": "T2"
      },
      {
        "name": "Down To Earth (IEA gas/coal)",
        "url": "https://www.downtoearth.org.in/energy/clean-energy-investment-saved-fuel-importers-260-billion-in-2025-iea",
        "tier": "T2"
      },
      {
        "name": "UKSIF survey",
        "url": "https://uksif.org/press-release-87-of-investment-firms-expect-surge-in-renewable-energy-financing-in-wake-of-iran-conflict/",
        "tier": "T2"
      },
      {
        "name": "IRENA via Islands Business",
        "url": "https://islandsbusiness.com/pacnews/pacnews-three-26-may-2026/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "renewables",
        "energy",
        "lng"
      ],
      "entities": [
        "iea",
        "indonesia",
        "philippines",
        "vietnam",
        "irena",
        "uksif",
        "nbim",
        "qatar",
        "china",
        "india"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "winner"
      },
      "asOf": "2026-05-12"
    }
  },
  {
    "id": "S6-HYDRO-001",
    "icon": "03",
    "title": "Hydrogen / Ammonia Correction — Pre-Conflict Onset, Conflict-Compounded",
    "category": "Energy Transition / Sector",
    "summary": "Green hydrogen is the clearest deceleration story, and the correction predates the conflict (mid-2024 onset) — but 2026 feedstock-cost and fertilizer linkages compound it. ~60 major green-hydrogen projects were cancelled in 2025 (~4.9 Mt/yr of would-be capacity); >100 cancelled/paused since mid-2024; the operational electrolyser base is ~2.5 GW against a ~150 GW announced 2030 pipeline (realistic 2030 outlook 25–40 GW). US clean-hydrogen drew just $400m in Q1 2026 with no new projects announced. EU policy support continues (third Hydrogen Bank auction €1.09bn for ~1.1 GW; Hydrogen Mechanism live April 30). The green-ammonia premium runs 50–100% over grey — unbridgeable without IMO carbon pricing — and intersects directly with the Gulf fertilizer-ammonia disruption.",
    "metrics": [
      {
        "label": "Green h2 cancelled 2025",
        "value": "~60 projects (~4.9 Mt/yr)"
      },
      {
        "label": "Projects cancelled since mid2024",
        "value": ">100 paused/scaled back"
      },
      {
        "label": "Operational electrolyser q1 2026",
        "value": "~2.5 GW"
      },
      {
        "label": "Announced 2030 pipeline",
        "value": "~150 GW (realistic 25–40 GW)"
      },
      {
        "label": "Us h2 investment q1 2026",
        "value": "$400m (+27% QoQ, -11% YoY); no new projects"
      },
      {
        "label": "Eu hydrogen bank auction",
        "value": "€1.09bn / ~1.1 GW (May 7, 2026)"
      },
      {
        "label": "Green ammonia premium",
        "value": "$200–400/t over $400–600/t grey (50–100%)"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "Decarbonize Weekly",
        "url": "https://decarbonizeweekly.com/articles/dd007-green-hydrogen-reset/",
        "tier": "T2"
      },
      {
        "name": "Latitude Media / Rhodium Group",
        "url": "https://www.latitudemedia.com/news/just-a-few-projects-are-driving-a-small-bump-in-hydrogen-investment/",
        "tier": "T2"
      },
      {
        "name": "S&P Global Energy",
        "url": "https://www.spglobal.com/energy/en/news-research/blog/energy-transition/051326-et-highlights-ccs-dutch-blue-hydrogen-eu-subsidies-data-center-power-demand-green",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "hydrogen",
        "renewables",
        "fertilizer"
      ],
      "entities": [
        "european-union",
        "rhodium",
        "united-states",
        "imo"
      ],
      "scenarios": [
        "hormuz_closure"
      ],
      "position": {
        "hormuz_closure": "loser"
      },
      "asOf": "2026-05-20"
    }
  },
  {
    "id": "S6-MIN-001",
    "icon": "04",
    "title": "Critical Minerals — The Hard Constraint on Security-Driven Electrification",
    "category": "Energy Transition / Minerals",
    "summary": "Energy-security electrification collides with a constrained minerals pipeline. Under IEA STEPS, lithium demand rises ~5x by 2040, nickel and graphite ~2x, cobalt and rare earths +50–60%; copper faces a ~30% supply shortfall vs demand by 2035. The IEA estimates building adequately diversified rare-earth supply needs ~$60bn. The 2026 conflict layered a dual-use dimension on existing China dependence: the EU shortlisted tungsten, rare earths and gallium for its first strategic mineral reserve (May 20), Australia's Arafura approved a $1.6bn rare-earths project, and US DFARS will bar China-origin NdFeB/SmCo magnets from DoD systems from Jan 1, 2027 — linking minerals directly to the defense procurement surge.",
    "metrics": [
      {
        "label": "Lithium demand 2040",
        "value": "~5x (STEPS)"
      },
      {
        "label": "Nickel graphite demand 2040",
        "value": "~2x"
      },
      {
        "label": "Cobalt ree demand 2040",
        "value": "+50–60%"
      },
      {
        "label": "Copper shortfall 2035",
        "value": "~30% vs demand"
      },
      {
        "label": "Rare earth diversification capex",
        "value": "~$60bn (IEA)"
      },
      {
        "label": "Eu strategic reserve",
        "value": "tungsten, rare earths, gallium shortlisted (May 20, 2026)"
      },
      {
        "label": "Arafura project",
        "value": "$1.6bn rare-earths approved (May 20, 2026)"
      },
      {
        "label": "Us dfars magnet ban",
        "value": "China-origin NdFeB/SmCo barred in DoD systems from Jan 1, 2027"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "Andersen Institute / IEA",
        "url": "https://anderseninstitute.org/no-new-large-mines/",
        "tier": "T2 citing T1-underlying IEA"
      },
      {
        "name": "InvestorNews (critical minerals)",
        "url": "https://investornews.com/critical-minerals-rare-earths/critical-minerals-report-05-24-2026-national-security-moves-downstream/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "critical-minerals",
        "commodities",
        "defense"
      ],
      "entities": [
        "iea",
        "european-union",
        "australia",
        "china",
        "united-states"
      ],
      "scenarios": [
        "hormuz_closure"
      ],
      "position": {},
      "asOf": "2026-05-24"
    }
  },
  {
    "id": "S6-NUC-003",
    "icon": "05",
    "title": "Civilian Nuclear as Energy-Security Hedge — Reactor Counts, GW, Barakah Strike",
    "category": "Energy Transition / Nuclear",
    "summary": "Civilian nuclear is being repriced as a baseload security hedge (IEA: >$80bn/yr, 15 countries). Globally 79 reactors are under construction (15 countries, ~86 GW), 124 in advanced planning (+110 GW), China building ~half (39 units, 44 GW; targeting ~110 GWe by 2030). The UAE's Barakah — 4x APR-1400, ~5.6 GW, ~40 TWh/yr, ~25% of UAE power, ~$20bn — was drone-struck May 17–18, 2026: a generator fire forced one reactor onto emergency diesel, with no radioactive release (FANR/IAEA confirmed). The strike crystallized conflict-zone reactor vulnerability as a new IAEA oversight burden. (Proliferation and the Iran stockpile are tracked on the Nuclear & Proliferation page.)",
    "metrics": [
      {
        "label": "Reactors under construction",
        "value": "79 in 15 countries (~86 GW)"
      },
      {
        "label": "Reactors advanced planning",
        "value": "124 (+~110 GW)"
      },
      {
        "label": "China under construction",
        "value": "39 (44 GW; ~half of global)"
      },
      {
        "label": "China 2030 target",
        "value": "~110 GWe (≈76% jump from 2025)"
      },
      {
        "label": "Barakah capacity",
        "value": "~5.6 GW (4x APR-1400); ~40 TWh/yr; ~$20bn"
      },
      {
        "label": "Barakah share uae power",
        "value": "~25%"
      },
      {
        "label": "Barakah strike",
        "value": "May 17–18, 2026 — generator fire, one reactor on emergency diesel, no release"
      },
      {
        "label": "Global nuclear investment 2026",
        "value": ">$80bn/yr; 15 countries"
      },
      {
        "label": "Reactors proposed",
        "value": "305 (+~285 GW potential)"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "Cubic Mile of Oil / World Nuclear Association",
        "url": "https://cmo-ripu.blogspot.com",
        "tier": "T2 (WNA-sourced)"
      },
      {
        "name": "NPR (Barakah strike)",
        "url": "https://www.npr.org/2026/05/18/g-s1-122534/drone-strikes-uae-nuclear-plant",
        "tier": "T2"
      },
      {
        "name": "The National (Barakah)",
        "url": "https://www.thenationalnews.com/business/energy/2026/05/20/barakah-drone-attack-showed-clear-disregard-for-civilian-lives-dr-al-jaber-says/",
        "tier": "T2"
      },
      {
        "name": "CSIS (China nuclear)",
        "url": "https://www.csis.org/analysis/chinas-nuclear-energy-priorities-under-its-15th-five-year-plan",
        "tier": "T2 institutional research"
      }
    ],
    "tags": {
      "assetClass": [
        "nuclear",
        "energy"
      ],
      "entities": [
        "uae",
        "china",
        "iaea",
        "fanr",
        "wna",
        "csis"
      ],
      "scenarios": [
        "oil_strike",
        "hormuz_closure"
      ],
      "position": {
        "hormuz_closure": "winner"
      },
      "asOf": "2026-05-18"
    }
  },
  {
    "id": "S6-CARB-001",
    "icon": "06",
    "title": "Carbon Policy Cushioning Without Retreat — EU ETS Integrity, CBAM Definitive Phase",
    "category": "Energy Transition / Carbon Policy",
    "summary": "The EU response cushioned gas costs without weakening carbon pricing. The Middle East crisis Temporary State aid Framework (METSAF, April 29, 2026) compensates only certain gas-cost increases and explicitly does NOT cover ETS compliance costs or use ETS prices as a proxy — preserving the price signal despite member-state pressure (Italy sought ETS suspension in March). EU ETS EUA held €74–77/tCO2 in May. CBAM entered its definitive, financially binding phase on Jan 1, 2026 (Authorised Declarant status by March 31; €100/tCO2 penalty), raising the landed carbon cost of fertilizer, hydrogen, steel, aluminium, cement and electricity imports. A leaked document (May 13) suggests the EU may redirect carbon-tax revenue into farm subsidies amid the fertiliser crisis.",
    "metrics": [
      {
        "label": "Metsaf",
        "value": "April 29, 2026 — gas-cost only; ETS integrity preserved"
      },
      {
        "label": "Eua price may 2026",
        "value": "€74–77/tCO2"
      },
      {
        "label": "Cbam definitive phase",
        "value": "Jan 1, 2026 (binding); €100/tCO2 penalty"
      },
      {
        "label": "Cbam sectors",
        "value": "iron/steel, aluminium, cement, fertilisers, hydrogen, electricity"
      },
      {
        "label": "Carbon revenue diversion",
        "value": "EU may redirect to farm subsidies (leaked doc May 13, 2026)"
      },
      {
        "label": "Voluntary market",
        "value": "No conflict-specific VCM price move documented; spot ranges used only as proxy"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "Sandbag (EU ETS / METSAF)",
        "url": "https://sandbag.be/2026/05/05/eu-ets-and-industrial-competitiveness/",
        "tier": "T2"
      },
      {
        "name": "Anthesis (CBAM)",
        "url": "https://www.anthesisgroup.com/regulations/carbon-border-adjustment-mechanism-cbam/",
        "tier": "T2"
      },
      {
        "name": "IndexBox (EUA price)",
        "url": "https://www.indexbox.io/blog/eu-carbon-allowance-prices-hold-at-eur7477-in-may-2026/",
        "tier": "T2"
      },
      {
        "name": "Euronews (revenue diversion)",
        "url": "https://www.euronews.com/my-europe/2026/05/13/eu-to-turn-carbon-tax-revenues-into-farm-subsidies-amid-fertiliser-crisis-leaked-document-",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "carbon",
        "fertilizer"
      ],
      "entities": [
        "european-union",
        "ec",
        "italy"
      ],
      "scenarios": [
        "hormuz_closure",
        "ceasefire"
      ],
      "position": {},
      "asOf": "2026-05-13"
    }
  },
  {
    "id": "S6-ESG-001",
    "icon": "07",
    "title": "Sustainable Fund Flows Turn Positive — Europe Leads on Security Framing",
    "category": "Energy Transition / Capital",
    "summary": "ESG/sustainable flows turned positive again in Q1 2026, led by Europe and energy-security framing. Global sustainable funds saw +$3.5bn net inflows in Q1 2026 (vs −$27bn in Q4 2025), with Europe +$9.1bn — its first positive quarter since Q3 2024 — even as total sustainable-fund AUM eased ~10% QoQ to $3.51tn. Renewable-energy ETFs drew >$3bn in April 2026 alone, the largest monthly inflow since January 2021. The turn is flow/sentiment, not a blanket equity re-rating — some clean and defense equities consolidated after large 2025 run-ups.",
    "metrics": [
      {
        "label": "Sustainable flows q1 2026",
        "value": "+$3.5bn (vs −$27bn Q4 2025)"
      },
      {
        "label": "Europe flows q1 2026",
        "value": "+$9.1bn (first positive since Q3 2024)"
      },
      {
        "label": "Sustainable aum q1 2026",
        "value": "$3.51tn (−~10% QoQ)"
      },
      {
        "label": "Renewable etf inflows",
        "value": ">$3bn (April 2026 — largest since Jan 2021)"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "Morningstar Sustainalytics via ESG.Guide",
        "url": "https://esg.guide/insight/5767/european-sustainable-fund-flows-turn-positive",
        "tier": "T2 citing Morningstar"
      },
      {
        "name": "Zero Carbon Analytics",
        "url": "https://zerocarbon-analytics.org/energy/clean-energy-stocks-gain-in-value-during-iran-war/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "renewables",
        "equity"
      ],
      "entities": [
        "morningstar",
        "european-union"
      ],
      "scenarios": [
        "ceasefire",
        "hormuz_closure"
      ],
      "position": {
        "hormuz_closure": "winner"
      },
      "asOf": "2026-05-28"
    }
  }
];

export const thesis = "The conflict re-rated energy security — and capital rotated into electrification, not away from the transition. The IEA's World Energy Investment 2026 puts 2026 spend at $3.4tn, ~two-thirds clean, explicitly framed around Hormuz. But the transition is bifurcating: renewables, grids and storage accelerate (23 countries acting, renewable ETFs at a 4-year inflow high) while gas ($330bn) and coal ($180bn) hit decade highs as fallback. Three structural brakes bind it — cost of capital (EM renewables WACC ~13% vs Europe ~5%), the hydrogen reset (correction predates the war, compounded by fertilizer-linked feedstock costs), and a critical-minerals pipeline that can't keep pace (copper ~30% short by 2035). Carbon pricing held its integrity (EU ETS €74–77; CBAM now binding) rather than buckling. Net: security logic is now the dominant driver of the transition — reinforcing a shift 70% funded by fossil importers seeking to escape import dependence.";

export const ieaTable = [
  {
    "category": "Total energy investment",
    "value": "$3.4tn",
    "detail": "+~5% real vs 2025's $3.3tn record"
  },
  {
    "category": "Clean / low-emissions",
    "value": "~$2.2tn",
    "detail": "≈two-thirds of total; ~2:1 vs fossil"
  },
  {
    "category": "Fossil fuels",
    "value": "~$1.2tn",
    "detail": "oil, gas, coal"
  },
  {
    "category": "Renewables",
    "value": "~$665bn",
    "detail": "solar $365bn (~$1bn/day), wind $200bn, hydro $75bn"
  },
  {
    "category": "Electricity grids",
    "value": "~$550bn",
    "detail": "+~20% YoY"
  },
  {
    "category": "Battery storage",
    "value": ">$100bn",
    "detail": "—"
  },
  {
    "category": "Nuclear",
    "value": ">$80bn/yr",
    "detail": "15 countries advancing projects"
  },
  {
    "category": "Natural gas",
    "value": "~$330bn",
    "detail": "highest in a decade; LNG-driven (US, Qatar)"
  },
  {
    "category": "Coal supply",
    "value": "~$180bn",
    "detail": "highest since 2012; China ~70%, India #2"
  },
  {
    "category": "Low-emissions fuels",
    "value": "~$30bn",
    "detail": "modest rise; policy-dependent"
  }
];

export const ieaTableNote = "IEA World Energy Investment 2026, released May 28, 2026. The agency framed the year as one where \"energy-security fears drive diversification spend.\" Primary PDF was robots-blocked at collection; figures anchored on consistent T2 outlets (Argus, Straits Times, Down To Earth) and corroborated by BNEF's $2.3tn 2025 transition tally.";

export const scenarioMatrix = [
  {
    "scenario": "S1",
    "label": "Ceasefire + Normalization",
    "tone": "#10b981",
    "impact": "Crisis-driven clean-energy commitments persist (sticky policy); gas/coal lock-in partially unwinds; carbon prices stabilize; ESG inflows consolidate after the Q1 turn positive (+$3.5bn global, Europe +$9.1bn)."
  },
  {
    "scenario": "S2",
    "label": "Hormuz Constrained (primary)",
    "tone": "#22d3ee",
    "impact": "Strong acceleration of renewables/grids/storage as an energy-security hedge (23+ countries acting) alongside simultaneous LNG/coal fallback lock-in; hydrogen/ammonia FIDs slowed by feedstock-cost anxiety; minerals become the binding constraint."
  },
  {
    "scenario": "S3",
    "label": "Oil-Strike / Asia Fallback",
    "tone": "#f59e0b",
    "impact": "Sharper near-term coal/oil fallback in import-dependent Asia; renewables narrative reinforced but grid bottlenecks bind; carbon-market integrity tested by member-state relief calls; nuclear-as-baseload case strengthens."
  },
  {
    "scenario": "S4",
    "label": "Escalation / Prolonged",
    "tone": "#ef4444",
    "impact": "Cost-of-capital trap deepens for EM importers (WACC ~13%); fossil lock-in entrenches; transition timelines slip even as security spend rises; critical-minerals and CBAM costs compound on industrial competitiveness."
  }
];

export const investmentImplications = [
  {
    "stakeholder": "Acceleration beneficiaries (winners)",
    "text": "Renewable developers, grid and battery-storage OEMs, and HVDC/transmission builders capture the $550bn grid surge and >$100bn storage spend. Renewable-energy ETFs already logged their largest monthly inflow since Jan 2021. Civilian-nuclear EPCs (KEPCO, Westinghouse, Rosatom) and the >$80bn/yr nuclear pipeline benefit from the baseload-security bid."
  },
  {
    "stakeholder": "Fossil fallback (mixed)",
    "text": "US and Qatari LNG exporters and the broader gas complex capture the $330bn decade-high gas spend; coal suppliers (China ~70% of the $180bn) see the highest investment since 2012. Real demand, but a structural lock-in that caps the transition's pace rather than reversing it."
  },
  {
    "stakeholder": "Constrained / pressured (losers)",
    "text": "Green-hydrogen developers face a continued reset (~60 projects cancelled in 2025; premium unbridgeable without IMO pricing). CBAM-exposed importers of steel, aluminium, cement, fertilizer and hydrogen absorb a rising landed carbon cost (€100/tCO2 penalty). EM-importer renewables projects are trapped by ~13% WACC."
  },
  {
    "stakeholder": "Critical-minerals & magnets (structural winners)",
    "text": "Diversified rare-earth, lithium, copper and gallium suppliers outside China — Australia's Arafura ($1.6bn), MP Materials-type plays, and the EU strategic-reserve shortlist — gain from both transition demand (copper ~30% short by 2035) and the DFARS defense-magnet ban (Jan 1, 2027). See Property & Materials for the construction-metals side."
  }
];

export const sourceResolution = [
  {
    "item": "IEA WEI 2026 primary report",
    "resolution": "The IEA report page/PDF was robots-blocked at collection. The $3.4tn / $2.2tn / $1.2tn split is anchored on four consistent T2 outlets quoting the same figures (Argus, Straits Times, Down To Earth, Energy News Beat) and cross-checked against BNEF's independent $2.3tn 2025 transition tally."
  },
  {
    "item": "Conflicting transition narratives",
    "resolution": "Zero Carbon Analytics frames clean energy as outperforming during the conflict; CNBC documents European defense and some clean equities cooling in 2026. Reconciled: flows/sentiment improved (Morningstar +$3.5bn Q1 sustainable inflows, renewable ETFs +$3bn April) while some equity prices consolidated after large 2025 run-ups. Both reported; neither used as a market-direction call."
  }
];

export const dataQuality = {
  "high": "EU ETS/CBAM/METSAF official EC policy; SIPRI-grade macro context; BNEF $2.3tn corroboration; Barakah capacity and strike (NPR/The National/IAEA).",
  "moderate": "IEA WEI figures (T2-cited, T1-underlying — primary robots-blocked); country clean-energy announcements and ETF flows (T2); cost-of-capital and electrolyser figures (T2).",
  "quarantined": "EU ETS broad €65–95/tCO2 range (LinkedIn analyst note, T3); voluntary-carbon-market spot ranges (vendor academy content, no conflict-specific move); reconstruction capex-premium estimates (no public 2026 figure)."
};

export const relatedSectors = "This is the transition and civilian-nuclear deep dive sitting above the /transmission Energy Downstream sector. The hydrogen/ammonia thread connects to /markets/food-agriculture (Gulf fertilizer); critical minerals to /markets/property; proliferation and the Iran stockpile to /outlook/nuclear; the defense procurement supercycle to /markets/defense.";

export const physicalShock = "The physical oil, LNG and refined-products shock — Hormuz throughput down ~30% YoY, the structural supply gap, bypass capacity and substitution timelines — is tracked in depth on /outlook (Gap Dynamics) and the /transmission Energy Downstream sector. This page covers the capital-and-transition layer that sits on top of it.";
