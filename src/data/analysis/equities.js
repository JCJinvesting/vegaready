// GENERATED from IranWarTracker/data/cascades/equities.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "card.equity.index_shock",
    "icon": "01",
    "title": "Global Equity Index Shock Map",
    "category": "Equities",
    "summary": "The defining bifurcation: macro-vulnerable indices fell while AI/tech insulated the US. S&P −8%→new ATH; STOXX/DAX energy-importer pain; Nikkei/KOSPI −3% sessions; MSCI EM −11%→+14.7%; TASI +5% vs DFM −16%; Ibovespa records.",
    "metrics": [
      {
        "label": "Sp500",
        "value": "−8% (trough ~6,316 Mar 30) → >7,400 ATH"
      },
      {
        "label": "Msci em",
        "value": "−11% March → +14.7% April"
      },
      {
        "label": "Tasi",
        "value": "+5% March"
      },
      {
        "label": "Dfm",
        "value": "−16%"
      },
      {
        "label": "Ibovespa",
        "value": "record highs; BRL +10%"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "CNBC (S&P)",
        "url": "https://www.cnbc.com/2026/04/16/stocks-record-highs-iran-war.html",
        "tier": "T2"
      },
      {
        "name": "MSCI",
        "url": "https://www.msci.com/research-and-insights/blog-post/iran-war-drags-on-emerging-markets-structural-tailwinds",
        "tier": "T1"
      },
      {
        "name": "Al Jazeera (GCC)",
        "url": "https://www.aljazeera.com/economy/2026/3/31/iran-war-wipes-120bn-off-dubai-abu-dhabi-stock-markets",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": "equity",
      "entities": [
        "united-states",
        "european-union",
        "japan",
        "south-korea",
        "india",
        "saudi-arabia",
        "uae",
        "qatar",
        "brazil",
        "china",
        "egypt",
        "pakistan",
        "russia"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {},
      "asOf": "2026-05-31"
    }
  },
  {
    "id": "card.equity.sector_rotation",
    "icon": "02",
    "title": "Equity Sector Winner/Loser Map",
    "category": "Sector Rotation",
    "summary": "Clearest sector bifurcation since 2022. WINNERS: energy, defense/aerospace, tankers (FRO +62.6%), cybersecurity, gold miners (GDX +95%/12mo), non-Gulf LNG. LOSERS: airlines, petrochemicals, autos, consumer discretionary, EM importers. Energy/defense move in hours; airlines/petrochem lag by weeks.",
    "metrics": [
      {
        "label": "Energy etf",
        "value": "BNO +84% Q1"
      },
      {
        "label": "Defense",
        "value": "ITA +18% YTD"
      },
      {
        "label": "Tankers",
        "value": "FRO +62.6%, NAT +63.2%"
      },
      {
        "label": "Gold miners",
        "value": "GDX +95% 12-mo"
      },
      {
        "label": "Airlines",
        "value": "jet fuel 25–30% opex"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "247 Wall St (tankers/miners)",
        "url": "https://247wallst.com/investing/2026/04/01/ppa-is-up-about-35-in-2026-the-defense-etf-almost-no-one-has-heard-of-is-up-even-more/",
        "tier": "T2"
      },
      {
        "name": "STOXX (2022 precedent)",
        "url": "https://stoxx.com/ukraine-invasion-effect-on-global-stocks-and-sectors/",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "equity",
        "energy",
        "defense",
        "gold"
      ],
      "entities": [
        "united-states",
        "european-union",
        "japan",
        "brazil",
        "saudi-arabia"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {},
      "asOf": "2026-05-31"
    }
  },
  {
    "id": "card.equity.earnings_transmission",
    "icon": "03",
    "title": "Earnings & Margin Transmission",
    "category": "Earnings",
    "summary": "Oil shocks hit equities through margin compression, not re-rating. Lombard Odier: +5% oil → −2.2% US EPS over 12 months (−2.1% direct, −0.2% rates); +50% oil → ~−15% EPS. Jet fuel 25–30% of airline opex at $159.85/bbl; EIA distillate cracks $1.42/gal (highest since 2022); auto OEM margins 3.6%.",
    "metrics": [
      {
        "label": "Lombard 5pct",
        "value": "−2.2% US EPS / 12mo"
      },
      {
        "label": "Lombard 50pct",
        "value": "~−15% S&P EPS"
      },
      {
        "label": "Jet fuel",
        "value": "$159.85/bbl (25–30% opex)"
      },
      {
        "label": "Crack spread",
        "value": "$1.42/gal"
      },
      {
        "label": "Oem margin",
        "value": "3.6% Q4'25"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "Lombard Odier",
        "url": "https://am.lombardodier.com/insights/2026/april/how-vulnerable-are-us-corporate-earnings-to-an-oil-supply-shock.html",
        "tier": "T2"
      },
      {
        "name": "IATA",
        "url": "https://www.iata.org/en/publications/newsletters/iata-knowledge-hub/fuel-efficiency-precision-data/",
        "tier": "T1"
      },
      {
        "name": "EIA",
        "url": "https://www.eia.gov/todayinenergy/detail.php?id=67424",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "equity"
      ],
      "entities": [
        "lombard-odier",
        "iata",
        "eia"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "loser",
        "oil_strike": "loser"
      },
      "asOf": "2026-05-31"
    }
  },
  {
    "id": "card.equity.factor_rotation",
    "icon": "04",
    "title": "Equity Factor Rotation",
    "category": "Factors",
    "summary": "Min-vol, quality and energy outperformed across regions; momentum, small-cap and high-beta were worst — the EM crowding factor fell >1% in two weeks (4-sigma) as crowded EM tech/AI unwound. The novel 2026 feature: an AI-insulation override (Mag-7 +17%, Micron +140%) acting as a circuit-breaker on the oil-shock bear.",
    "metrics": [
      {
        "label": "Winners",
        "value": "min-vol, quality, energy (+2.98%/mo analog)"
      },
      {
        "label": "Losers",
        "value": "momentum, small-cap, high-beta"
      },
      {
        "label": "Em crowding",
        "value": "−1% in 2 weeks (4-sigma)"
      },
      {
        "label": "Ai override",
        "value": "Mag-7 +17%; Micron +140%"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "MSCI factor study",
        "url": "https://www.msci.com/research-and-insights/blog-post/which-factors-rose-with-the-price-of-oil",
        "tier": "T1"
      },
      {
        "name": "Cboe (skew)",
        "url": "https://www.cboe.com/insights/posts/spx-realized-skew-inverts-as-traders-focus-on-right-tail/",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "equity",
        "volatility"
      ],
      "entities": [
        "msci",
        "cboe"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {},
      "asOf": "2026-05-31"
    }
  },
  {
    "id": "card.equity.country_map",
    "icon": "05",
    "title": "Country Equity Impact Map",
    "category": "Country",
    "summary": "Outcomes set by oil position, Gulf exposure and index composition. Winners: Brazil, Saudi Arabia (oil exporters). Losers: India, Japan, S. Korea, Egypt, Pakistan (importers; rupee 94+). US mixed-positive on AI insulation; China/EU complex middle ground.",
    "metrics": [
      {
        "label": "Winners",
        "value": "Brazil, Saudi"
      },
      {
        "label": "Losers",
        "value": "India, Japan, S.Korea, Egypt, Pakistan"
      },
      {
        "label": "Us",
        "value": "mixed-positive (AI buffer)"
      },
      {
        "label": "China",
        "value": "loser (5.4M bpd via Hormuz)"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "MSCI",
        "url": "https://www.msci.com/research-and-insights/blog-post/iran-war-drags-on-emerging-markets-structural-tailwinds",
        "tier": "T1"
      },
      {
        "name": "Business Standard (India)",
        "url": "https://www.business-standard.com/markets/news/sell-in-may-india-markets-outlook-nifty-crude-oil-price-iran-war-126050400340_1.html",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "equity"
      ],
      "entities": [
        "brazil",
        "saudi-arabia",
        "india",
        "japan",
        "south-korea",
        "egypt",
        "pakistan",
        "united-states",
        "china",
        "european-union"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "mixed"
      },
      "asOf": "2026-05-31"
    }
  },
  {
    "id": "card.equity.gcc_asymmetry",
    "icon": "06",
    "title": "GCC Equity Asymmetry",
    "category": "GCC",
    "summary": "The sharpest internal divergence of any region: TASI +5% (Aramco 16% weight, 7M bpd Petroline bypass) vs DFM −16% (security/expat risk; ~$120bn cap loss) vs Qatar ~−4% (Ras Laffan force majeure, LNG −20%). Sovereigns win on oil fiscally; domestic equity sectors reprice security risk fast.",
    "metrics": [
      {
        "label": "Tasi",
        "value": "+5% March"
      },
      {
        "label": "Dfm",
        "value": "−16% (~$120bn loss)"
      },
      {
        "label": "Qatar",
        "value": "~−4% (FM)"
      },
      {
        "label": "Petroline",
        "value": "7.0M bpd"
      },
      {
        "label": "Adcop",
        "value": "1.7–1.8M bpd"
      },
      {
        "label": "LNG loss",
        "value": "~120 bcm 2026–2030"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "Arab News (TASI)",
        "url": "https://www.arabnews.com/node/2638521/business-economy",
        "tier": "T2"
      },
      {
        "name": "Bloomberg (Qatar)",
        "url": "https://www.bloomberg.com/news/features/2026-03-19/iran-war-strikes-on-qatar-s-lng-crown-jewel-reshape-the-future-of-gas",
        "tier": "T2"
      },
      {
        "name": "Energy Connects (Petroline)",
        "url": "https://www.energyconnects.com/opinion/features/2026/april/saudi-arabia-says-east-west-pipeline-restored-to-full-capacity-of-7-million-bpd/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "equity"
      ],
      "entities": [
        "saudi-arabia",
        "uae",
        "qatar",
        "saudi-aramco",
        "qatarenergy",
        "adnoc"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {},
      "asOf": "2026-05-31"
    }
  },
  {
    "id": "card.equity.flows_plumbing",
    "icon": "07",
    "title": "Equity Market Plumbing & Flows",
    "category": "Market Structure",
    "summary": "Energy ETFs took >$2bn YTD, defense ~$467m, BNO +84% Q1; EM ETFs bled then recovered. VIX +57% in a week triggered risk-parity/vol-control deleveraging (−30–50% equity allocation), amplifying the sell-off. SPX skew inverted (upside bid); dollar–VIX flipped back positive. Crypto fell with equities then recovered (bridge to §10).",
    "metrics": [
      {
        "label": "Energy etf",
        "value": ">$2bn YTD"
      },
      {
        "label": "Defense etf",
        "value": "~$467m YTD"
      },
      {
        "label": "Vix",
        "value": "+57% in one week"
      },
      {
        "label": "Em crowding",
        "value": "4-sigma unwind"
      },
      {
        "label": "Uae domestic buy",
        "value": "AED 2.2bn floor"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "Trackinsight",
        "url": "https://www.trackinsight.com",
        "tier": "T2"
      },
      {
        "name": "Forbes (VIX)",
        "url": "https://www.forbes.com/sites/tylerroush/2026/03/09/wall-streets-fear-gauge-hits-recent-high-stocks-meta-tesla-more-tumble-on-iran-war-pressure/",
        "tier": "T2"
      },
      {
        "name": "ECB (vol-control)",
        "url": "https://www.ecb.europa.eu/press/financial-stability-publications/fsr/focus/2020/html/ecb.fsrbox202005_02~f6616db9be.en.html",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "equity",
        "volatility"
      ],
      "entities": [
        "cboe",
        "ecb",
        "uae"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {},
      "asOf": "2026-05-31"
    }
  },
  {
    "id": "card.equity.scenario_trades",
    "icon": "08",
    "title": "Equity Scenario Trade Map",
    "category": "Strategy",
    "summary": "Actionable long/short constructs per scenario. hormuz_closure: long energy/defense/tankers/cyber/gold-miners, short airlines/EM-importers/autos. oil_strike: long oilfield-services/repair. cable_severance: long cyber/satellite, short semis/EM-fintech. ceasefire: fade the conflict trade — long airlines/EM/autos, short energy/defense/gold/tankers.",
    "metrics": [
      {
        "label": "Hormuz",
        "value": "long energy/defense/tankers/cyber/gold"
      },
      {
        "label": "Oil strike",
        "value": "long oilfield services/repair"
      },
      {
        "label": "Cable",
        "value": "long cyber/satellite; short semis"
      },
      {
        "label": "Ceasefire",
        "value": "long airlines/EM; short energy/defense"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "Section 8 synthesis (Cards 1–7)",
        "url": "/markets/equities",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "equity",
        "defense",
        "energy",
        "gold"
      ],
      "entities": [
        "united-states",
        "saudi-arabia",
        "uae"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {},
      "asOf": "2026-05-31"
    }
  }
];

export const thesis = "Equities sit at the transmission inflection point between real-economy energy shocks and downstream risk assets — including crypto. The Feb–May 2026 strikes on Iran produced a severe energy-security shock; Brent rose from ~$72.48 (Feb 27) to a reported $119–120 peak in early March (+55% in under two weeks) before oscillating $94–$115 through May. Equities did NOT react uniformly: the S&P 500 fell ~8% to a ~6,316 trough on Mar 30, then recovered all losses and breached 7,400 by mid-May on AI-earnings momentum — a bifurcation between macro vulnerability and tech/AI insulation that defines the 2026 equity regime. Europe bore a larger structural burden as energy importers; Japan and South Korea took the most acute oil-import shock; and the GCC showed dramatic internal divergence — Saudi TASI outperformed on Aramco's oil tailwind while UAE's DFM fell ~16% on security and expat-liquidity risk. This is the first-order financial layer: the equity moves here are the micro-engine of the cross-asset correlation breaks (see Cross-Asset).";

export const scenarioRegime = [
  {
    "scenario": "hormuz_closure",
    "oilRegime": "Brent $120–$150+, sustained",
    "equityRegime": "Stagflation bear; energy/defense win, everything else loses",
    "keyRisk": "Margin compression, earnings-revision cycle"
  },
  {
    "scenario": "oil_strike",
    "oilRegime": "Brent $100–$130, elevated",
    "equityRegime": "Bifurcated; energy infra wins, airlines/consumer lose",
    "keyRisk": "Infrastructure-damage duration"
  },
  {
    "scenario": "cable_severance",
    "oilRegime": "Brent $95–$115, elevated",
    "equityRegime": "Cyber/AI premium; semis volatile",
    "keyRisk": "Data latency; AI-capex funding risk"
  },
  {
    "scenario": "ceasefire",
    "oilRegime": "Brent $73–$95, falling",
    "equityRegime": "Growth rotation; energy gives back, tech/EM recovers",
    "keyRisk": "Rapid sector-reversal speed"
  }
];

export const indexShock = [
  {
    "index": "S&P 500",
    "region": "US",
    "decline": "~−8% (trough ~6,316, Mar 30)",
    "recovery": "Full recovery; ~7,400+ new ATH May",
    "sensitivity": "Low–Medium; oil-exporter buffer",
    "conf": "HIGH"
  },
  {
    "index": "Nasdaq 100",
    "region": "US",
    "decline": "~−9% (Composite; tech led recovery)",
    "recovery": "New highs on AI; Mag-7 +17%+ from Mar low",
    "sensitivity": "Moderate; energy-cost-agnostic AI",
    "conf": "HIGH"
  },
  {
    "index": "Russell 2000",
    "region": "US Small Cap",
    "decline": "−2.7% single-day Mar 4 (vs S&P −1.3%); deeper trough",
    "recovery": "Lagged; credit/fuel-cost pressure",
    "sensitivity": "High; small caps lack hedging",
    "conf": "HIGH"
  },
  {
    "index": "STOXX Europe 600",
    "region": "Europe",
    "decline": ">10% in onset weeks; persistent energy burden",
    "recovery": "Partial; 4 weeks of gains by Apr 17",
    "sensitivity": "High; energy importer",
    "conf": "HIGH"
  },
  {
    "index": "DAX",
    "region": "Germany",
    "decline": "Fell sharply; energy-intensive industrial base",
    "recovery": "Below pre-conflict by late April",
    "sensitivity": "Very High; industrial energy cost",
    "conf": "MEDIUM"
  },
  {
    "index": "CAC 40",
    "region": "France",
    "decline": "Fell with STOXX; TotalEnergies partial offset",
    "recovery": "Mixed; energy majors buffer",
    "sensitivity": "High-Medium",
    "conf": "LOW (proxy)"
  },
  {
    "index": "FTSE 100",
    "region": "UK",
    "decline": "Slight decline; BP/Shell/commodity hedge",
    "recovery": "Better than STOXX; commodity tilt",
    "sensitivity": "Medium; commodity-heavy",
    "conf": "MEDIUM"
  },
  {
    "index": "Nikkei 225",
    "region": "Japan",
    "decline": "~−3% single session Mar 9; sustained pressure",
    "recovery": "Partial; oil-import drag",
    "sensitivity": "Very High; 100% oil importer",
    "conf": "HIGH"
  },
  {
    "index": "TOPIX",
    "region": "Japan",
    "decline": "Parallel to Nikkei; banks/industrials drag",
    "recovery": "Similar to Nikkei",
    "sensitivity": "Very High",
    "conf": "MEDIUM (proxy)"
  },
  {
    "index": "KOSPI",
    "region": "South Korea",
    "decline": "~−3% single session Mar 9; refining/semis stress",
    "recovery": "Partial on de-escalation",
    "sensitivity": "Very High; 100% oil importer",
    "conf": "HIGH"
  },
  {
    "index": "Hang Seng",
    "region": "HK/China",
    "decline": "Fell; EM oil-importer pressure",
    "recovery": "EM recovery in April",
    "sensitivity": "High; China importer via Hormuz",
    "conf": "MEDIUM"
  },
  {
    "index": "CSI 300",
    "region": "China",
    "decline": "Fell; China imports 5.4M bpd via Hormuz",
    "recovery": "Partial",
    "sensitivity": "High",
    "conf": "MEDIUM (proxy)"
  },
  {
    "index": "Nifty 50",
    "region": "India",
    "decline": "Fell; Sensex −999.79 pts on shock days; Nifty ~22,000–23,900",
    "recovery": "Volatile; domestic buying supported floor",
    "sensitivity": "Very High; largest per-capita Hormuz oil dependency",
    "conf": "HIGH"
  },
  {
    "index": "MSCI EM",
    "region": "Global EM",
    "decline": "−11% in March alone; then +14.7% in April",
    "recovery": "Recovered most March losses by April end",
    "sensitivity": "High; oil import + USD squeeze",
    "conf": "HIGH"
  },
  {
    "index": "Tadawul (TASI)",
    "region": "Saudi Arabia",
    "decline": "+5% in March (!) to ~11,250; +1.7% above pre-war mid-March",
    "recovery": "Outperformed all major markets",
    "sensitivity": "Inverse: oil-revenue tailwind",
    "conf": "HIGH"
  },
  {
    "index": "DFM",
    "region": "UAE/Dubai",
    "decline": "−16% since onset; −4.71% first post-halt day (Mar 5)",
    "recovery": "Deep drawdown; partial recovery",
    "sensitivity": "Very High; security + expat risk",
    "conf": "HIGH"
  },
  {
    "index": "ADX",
    "region": "UAE/Abu Dhabi",
    "decline": "−9% since onset; −1.93% Day 1",
    "recovery": "Partial recovery",
    "sensitivity": "High",
    "conf": "HIGH"
  },
  {
    "index": "Qatar Exchange",
    "region": "Qatar",
    "decline": "~−4%; Ras Laffan strike forced QatarEnergy force majeure",
    "recovery": "Heavy; LNG-revenue disruption",
    "sensitivity": "Very High",
    "conf": "HIGH"
  },
  {
    "index": "Ibovespa",
    "region": "Brazil",
    "decline": "Outperformed; near 177,000+; BRL +10% vs USD",
    "recovery": "Record highs by late April",
    "sensitivity": "Positive; oil exporter",
    "conf": "HIGH"
  }
];

export const indexNote = "Total UAE market-cap loss ~$120bn (Al Jazeera). The defining 2026 feature is index/stock divergence: the S&P closed >7% above its 50-day MA for the first time in three decades, yet <55% of components were above their own 50-day MA — the AI/Mag-7 complex masking broad weakness. [PROVISIONAL-2026] for all conflict-window levels; regional exchanges without major-newswire close data are LOW/proxy.";

export const sectorMap = [
  {
    "sector": "Energy (E&P, integrated majors)",
    "status": "WINNER",
    "mechanism": "Brent $72→$120; direct price-to-revenue",
    "etf": "XOP, XLE, BNO (+84% Q1)",
    "conf": "HIGH"
  },
  {
    "sector": "Oilfield Services",
    "status": "WINNER",
    "mechanism": "Capex surge; repair contracts",
    "etf": "OIH",
    "conf": "MEDIUM"
  },
  {
    "sector": "Defense / Aerospace",
    "status": "WINNER",
    "mechanism": "Spending surge; weapons demand",
    "etf": "ITA (+18% YTD by Mar); DFEN +14% YTD",
    "conf": "HIGH"
  },
  {
    "sector": "Tanker / Shipping Owners",
    "status": "WINNER",
    "mechanism": "VLCC rates +94% Day 1; longer routes",
    "etf": "FRO +62.6%, NAT +63.2%, DHT +59.1% YTD",
    "conf": "HIGH"
  },
  {
    "sector": "Cybersecurity",
    "status": "WINNER",
    "mechanism": "Digital-warfare premium",
    "etf": "CIBR +7.5% wk1, ISPY +8% wk1, HACK",
    "conf": "HIGH"
  },
  {
    "sector": "Gold Miners",
    "status": "WINNER (volatile)",
    "mechanism": "Initial 10% 2-day drop then sharp recovery",
    "etf": "GDX +95% 12-mo to Apr, GDXJ",
    "conf": "HIGH"
  },
  {
    "sector": "LNG Exporters (non-Gulf)",
    "status": "WINNER",
    "mechanism": "Ras Laffan force majeure; US/Australian premium",
    "etf": "LNG, GLNG (names)",
    "conf": "MEDIUM"
  },
  {
    "sector": "Airlines",
    "status": "LOSER",
    "mechanism": "Jet fuel 25–30% of opex; +40% spike",
    "etf": "JETS",
    "conf": "HIGH"
  },
  {
    "sector": "Chemicals / Petrochemicals",
    "status": "LOSER",
    "mechanism": "Feedstock (naphtha/ethane) surge",
    "etf": "IYM, CHEM",
    "conf": "HIGH"
  },
  {
    "sector": "Consumer Discretionary",
    "status": "LOSER (mixed)",
    "mechanism": "Gasoline +51%; household squeeze",
    "etf": "XLY (lagged)",
    "conf": "HIGH"
  },
  {
    "sector": "Auto OEMs",
    "status": "LOSER",
    "mechanism": "OEM margins already 3.6% Q4'25 (−60% from 2021); EV write-offs",
    "etf": "CARZ",
    "conf": "HIGH"
  },
  {
    "sector": "Travel / Tourism / Hotels / Airports",
    "status": "LOSER",
    "mechanism": "GCC tourism at standstill; ME routing suspended",
    "etf": "AWAY, JETS",
    "conf": "HIGH"
  },
  {
    "sector": "Import-Heavy EM Equities",
    "status": "LOSER",
    "mechanism": "India/Korea/Thailand; current-account drain",
    "etf": "EEM, INDA",
    "conf": "HIGH"
  },
  {
    "sector": "EM Banks",
    "status": "MIXED–LOSER",
    "mechanism": "Credit risk on energy importers; GCC NFI exposure",
    "etf": "Names",
    "conf": "MEDIUM"
  },
  {
    "sector": "Insurers / Reinsurers",
    "status": "MIXED",
    "mechanism": "AWRP 2.5% hull/7-day (Mar peak) vs ~1% now",
    "etf": "Specialty reinsurers",
    "conf": "MEDIUM"
  },
  {
    "sector": "Semiconductors / AI Infrastructure",
    "status": "MIXED (cable_severance: LOSER)",
    "mechanism": "Cable latency; AI-capex funding; data-center energy",
    "etf": "SMH, SOXX",
    "conf": "MEDIUM"
  },
  {
    "sector": "Utilities",
    "status": "MIXED",
    "mechanism": "Fuel-clause pass-through lag; US natgas −51.7% in March (offset)",
    "etf": "XLU",
    "conf": "MEDIUM"
  }
];

export const sectorScenario = [
  {
    "scenario": "hormuz_closure",
    "impact": "Energy, defense, tankers, cyber, gold miners maximally bullish. Airlines, autos, petrochem, consumer discretionary, EM importers −20–40%. GCC non-oil (retail, real estate, hospitality) bear-market."
  },
  {
    "scenario": "oil_strike",
    "impact": "Similar but shorter duration; extremes less pronounced. Energy +15–30%, airlines −15–25%."
  },
  {
    "scenario": "cable_severance",
    "impact": "Cybersecurity surges additively. Semis volatile. Financials face settlement risk. Online retail/e-commerce disrupted. Physical-world sectors less impacted."
  },
  {
    "scenario": "ceasefire",
    "impact": "Violent rotation: energy sold off sharply (oil −10–20%, as Apr 17 when Brent dropped >10%); airlines, autos, consumer discretionary recover; EM importers bounce."
  }
];

export const sectorPrecedent = "2022 Russia-Ukraine: energy and basic resources were the only two STOXX Global 1800 sectors positive YTD through Feb 24 (Brent >$100). 2024 Red Sea: the Drewry Container Equity Index fell 8.5% on ceasefire rumors in a single week.";

export const earningsSummary = "The primary mechanism through which oil shocks damage equities is direct margin compression, not valuation re-rating. Lombard Odier: a 5% oil-price increase cuts US corporate earnings ~2.2% over 12 months — almost entirely the direct cost/cash-flow channel (−2.1%), not rates (−0.2%). A 50% oil spike implies ~15% S&P 500 EPS decline over a year — consistent with the March 2026 trough pricing. The S&P entered 2026 with 12–14% consensus EPS growth and ~13–14% net margin — a cushion, not immunity.";

export const passThrough = [
  {
    "channel": "Airline jet fuel",
    "detail": "Jet fuel is 25–30% of airline opex (IATA 2026); global average $159.85/bbl vs $86 expected for 2025 (~+86% YoY at peak). 2008 analog: jet fuel $127/bbl took industry operating margins from ~4% to ~0%. \"Sudden change is more challenging than high fuel prices\" (IATA). Most carriers hedged <30% of 2026 fuel."
  },
  {
    "channel": "Petrochemicals / chemicals",
    "detail": "Naphtha/ethane feedstock tied to crude; both input-cost and demand-destruction hits. EIA distillate crack spreads $1.42/gal in March 2026 — highest monthly since 2022. Refiners benefit temporarily; pure (non-integrated) chemical producers take the full feedstock shock."
  },
  {
    "channel": "Auto / manufacturing",
    "detail": "OEM margins already 3.6% in Q4'25 — down >60% from the 2021 peak (Bain); full-year 2025 average 2.7%. ICE faces fuel-cost demand destruction; energy is embedded in steel/aluminum/plastics, compounding supply-chain pressure at razor-thin margins."
  },
  {
    "channel": "Insurance / war-risk premium",
    "detail": "AWRP reached ~2.5% of hull value per 7-day period (March peak; ~1% now). VLCC rates hit a record $736k/day-equivalent (+94% vs prior Friday) on Mar 2. Major war-risk insurers (American Club, Gard, Skuld, Standard, London P&I) withdrew Gulf cover in early March; maritime premiums surged >1,000% for some categories; MR-tanker AWRP ~$40k/7 days (4× pre-war)."
  },
  {
    "channel": "Freight / shipping pass-through",
    "detail": "2024 Red Sea precedent: Suez-region shipping costs +180% peak; global freight indices +120%; container-shipping equity index −8.5% on one ceasefire rumor. 2026 analog: war-risk withdrawal + longer routing = capacity reduction; surcharges filter to CPI with a 1–3 month lag."
  },
  {
    "channel": "Aggregate S&P 500 EPS",
    "detail": "Lombard Odier: a 10% global oil-supply disruption (≈Hormuz) → +50% oil → −15 to −20% US EPS over 12 months. US CPI 3.8% in April 2026 (energy-driven); core 2.8%."
  }
];

export const earningsScenario = [
  {
    "scenario": "hormuz_closure (sustained)",
    "eps": "−15% to −20%",
    "sectors": "Airlines −30–50% EPS; Petrochemicals −20–35%; Autos −15–25%"
  },
  {
    "scenario": "oil_strike (6 months)",
    "eps": "−8% to −12%",
    "sectors": "Airlines −15–25% EPS"
  },
  {
    "scenario": "cable_severance",
    "eps": "−2% to −5% (fintech/e-commerce)",
    "sectors": "Banks, online retail, cloud"
  },
  {
    "scenario": "ceasefire",
    "eps": "+3% to +8% (energy partially reverses)",
    "sectors": "Airlines recover +15–25%; Energy −10–15%"
  }
];

export const factorRotation = [
  {
    "factor": "Minimum Volatility",
    "perf": "Outperformed in all 3 regions (US, World ex-US, EM)",
    "mechanism": "Flight to safety; defensive sectors",
    "analog": "Only factor positive in all 3 regions across 5 geopolitical shocks (MSCI)",
    "conf": "HIGH"
  },
  {
    "factor": "Quality",
    "perf": "Outperformed ex-US & EM; underperformed US (captured in AI/tech)",
    "mechanism": "Earnings stability; pricing power",
    "analog": "Quality +0.77% vs market in geopolitical supply shocks (MSCI)",
    "conf": "HIGH"
  },
  {
    "factor": "Energy (sector tilt)",
    "perf": "Outperformed; highest positive active return across all 3 regions",
    "mechanism": "Direct oil-price benefit",
    "analog": "Energy +2.98%/mo vs MSCI World in top-quartile oil-rise periods (1975–2022)",
    "conf": "HIGH"
  },
  {
    "factor": "Value",
    "perf": "Mixed; negative in initial shock, partial recovery",
    "mechanism": "Cyclical value (banks/industrials) sold first; energy value recovered",
    "analog": "Value +ve in demand-led spikes; −ve in supply shocks",
    "conf": "MEDIUM"
  },
  {
    "factor": "Momentum",
    "perf": "Worst performer — \"unwinding of crowded trades\"",
    "mechanism": "EM tech/AI momentum unwound; EM crowding factor −1% in first 2 weeks of March (4-sigma)",
    "analog": "Momentum worst in geopolitics-led supply shocks (MSCI)",
    "conf": "HIGH"
  },
  {
    "factor": "Growth (ex-AI)",
    "perf": "Underperformed",
    "mechanism": "Multiple compression as rates rose on inflation",
    "analog": "Growth rate-sensitive",
    "conf": "MEDIUM"
  },
  {
    "factor": "AI/Tech (Large Cap)",
    "perf": "Anomalous outperformer; oil-cost insulation",
    "mechanism": "Mag-7 +17%+ from Mar trough; AI capex maintained",
    "analog": "No prior precedent for AI-insulated large-cap growth in an oil shock",
    "conf": "HIGH (novel)"
  },
  {
    "factor": "High Beta",
    "perf": "Underperformed",
    "mechanism": "Deleveraging; risk-off",
    "analog": "High beta worst in supply shocks",
    "conf": "HIGH"
  },
  {
    "factor": "Dividend Yield",
    "perf": "Outperformed ex-US & EM",
    "mechanism": "Defensive income allocation",
    "analog": "Consistent with min-vol outperformance",
    "conf": "MEDIUM"
  },
  {
    "factor": "Small Cap",
    "perf": "Underperformed significantly",
    "mechanism": "Russell 2000 −2.7% Mar 4 vs S&P −1.3%; credit costs; no fuel hedging",
    "analog": "Small caps worst in oil supply shocks",
    "conf": "HIGH"
  },
  {
    "factor": "EM Exporter basket (Brazil, Colombia, Saudi producers)",
    "perf": "Outperformed",
    "mechanism": "Oil-revenue windfall; FX strength",
    "analog": "BRL +10% vs USD",
    "conf": "HIGH"
  },
  {
    "factor": "EM Importer basket (India, Korea, Thailand, Philippines)",
    "perf": "Underperformed",
    "mechanism": "Current-account drain; currency weakness; fiscal pressure",
    "analog": "MSCI EM importers worst performers",
    "conf": "HIGH"
  }
];

export const factorObservations = [
  "AI insulation override: the large-cap tech/AI factor acted as a circuit-breaker on the traditional oil-shock bear market. Micron +140% from the March trough by mid-May. The S&P closed >7% above its 50-day MA for the first time in three decades, yet <55% of components were above their own — extreme index/stock divergence.",
  "Volatility-control / risk-parity deleveraging: VIX surged +57% in one week; vol-targeting strategies mechanically cut equity exposure as realized vol rises, amplifying the initial sell-off. ECB research confirms this feedback loop is structural.",
  "Asymmetric volatility: since the war began, SPX realized vol was higher on up days (16.9%) than down days (14.6%) — highly unusual; investors were well-hedged for downside and the upside rally surprised positioning (Cboe).",
  "Options skew inversion: oil 1M implied vol jumped 7 points; crude upside-call skew stayed extremely inverted (upside bid), extending to 6M options — not seen since 2022 Russia/Ukraine (Cboe)."
];

export const countryMatrix = [
  {
    "country": "United States",
    "index": "S&P 500, Nasdaq 100",
    "oil": "Net exporter (13.3M bpd)",
    "tag": "MIXED-POSITIVE",
    "rationale": "AI/tech buffer; oil revenue recycled domestically; large-cap insulation",
    "conf": "HIGH"
  },
  {
    "country": "China",
    "index": "CSI 300, Hang Seng",
    "oil": "Net importer (5.4M bpd via Hormuz)",
    "tag": "LOSER (hormuz), MIXED (ceasefire)",
    "rationale": "34%+ of Hormuz crude flows to China; manufacturing cost pressure",
    "conf": "HIGH"
  },
  {
    "country": "European Union",
    "index": "STOXX 600, DAX, CAC 40",
    "oil": "Net importer; exposed post-Russia",
    "tag": "LOSER",
    "rationale": "Industrial energy intensity; import dependency",
    "conf": "HIGH"
  },
  {
    "country": "Japan",
    "index": "Nikkei 225, TOPIX",
    "oil": "100% importer; 1.6–2.1M bpd via Hormuz",
    "tag": "LOSER; HIGH DISPERSION",
    "rationale": "Yen weakness compounds; automotive pain",
    "conf": "HIGH"
  },
  {
    "country": "India",
    "index": "Nifty 50, Sensex",
    "oil": "Net importer; 1.6–2.1M bpd via Hormuz",
    "tag": "LOSER (high impact)",
    "rationale": "Largest per-capita Hormuz dependency among major EMs; rupee 94+ vs USD",
    "conf": "HIGH"
  },
  {
    "country": "Saudi Arabia",
    "index": "TASI",
    "oil": "Largest exporter; 7M bpd Petroline bypass",
    "tag": "WINNER",
    "rationale": "Aramco 16% index weight surges; domestic investors rescue market",
    "conf": "HIGH"
  },
  {
    "country": "UAE",
    "index": "DFM, ADX",
    "oil": "Exporter (ADCOP 1.7–1.8M Fujairah bypass) but geographic risk",
    "tag": "MIXED-LOSER",
    "rationale": "Security risk, expat outflows dominate short term",
    "conf": "HIGH"
  },
  {
    "country": "Russia",
    "index": "Sanctioned",
    "oil": "Net exporter",
    "tag": "N/A (sanctioned)",
    "rationale": "Indirect beneficiary on price; market inaccessible",
    "conf": "LOW"
  },
  {
    "country": "South Korea",
    "index": "KOSPI",
    "oil": "100% importer; 1.6–2.1M bpd via Hormuz",
    "tag": "LOSER; HIGH DISPERSION",
    "rationale": "Refining complex; semiconductor energy costs",
    "conf": "HIGH"
  },
  {
    "country": "Brazil",
    "index": "Ibovespa",
    "oil": "Net exporter (Petrobras)",
    "tag": "WINNER",
    "rationale": "BRL +10% vs USD; Ibovespa near records; EM outperformer",
    "conf": "HIGH"
  },
  {
    "country": "Egypt",
    "index": "EGX 30",
    "oil": "Net importer; Suez revenues; cable hub",
    "tag": "HIGH DISPERSION",
    "rationale": "Canal rerouting revenue partly offsets; cable hub at risk",
    "conf": "MEDIUM"
  },
  {
    "country": "Pakistan",
    "index": "KSE-100",
    "oil": "Net importer; highly indebted ($3.5bn UAE loan called)",
    "tag": "LOSER",
    "rationale": "Oil-import shock + FX pressure + geopolitical proximity",
    "conf": "MEDIUM"
  }
];

export const countryScenario = [
  {
    "country": "US",
    "hormuz": "Mixed-Loser (−8 to −15% S&P)",
    "oil_strike": "Mixed (−5 to −8%)",
    "cable": "Mixed-Loser (−3 to −6% Nasdaq)",
    "ceasefire": "Winner (+8–12%)"
  },
  {
    "country": "EU",
    "hormuz": "Loser (−15 to −25%)",
    "oil_strike": "Loser (−10 to −15%)",
    "cable": "Mixed (−3 to −5%)",
    "ceasefire": "Winner (+10–15%)"
  },
  {
    "country": "Japan",
    "hormuz": "Loser (−20 to −30%)",
    "oil_strike": "Loser (−12 to −18%)",
    "cable": "Mixed (−5 to −8%)",
    "ceasefire": "Winner (+12–18%)"
  },
  {
    "country": "India",
    "hormuz": "Loser (−15 to −25%)",
    "oil_strike": "Loser (−10 to −15%)",
    "cable": "Mixed",
    "ceasefire": "Winner (+10–15%)"
  },
  {
    "country": "Saudi",
    "hormuz": "Mixed/Winner (+5 to −5%)",
    "oil_strike": "Winner (+3 to +8%)",
    "cable": "Neutral",
    "ceasefire": "Loser (−5 to −10%)"
  },
  {
    "country": "UAE",
    "hormuz": "Loser (−15 to −25%)",
    "oil_strike": "Loser (−8 to −15%)",
    "cable": "Loser (−5 to −10%)",
    "ceasefire": "Winner (+15–20%)"
  },
  {
    "country": "Brazil",
    "hormuz": "Winner (+5 to +15%)",
    "oil_strike": "Winner (+3 to +10%)",
    "cable": "Neutral",
    "ceasefire": "Loser (Petrobras −5 to −10%)"
  },
  {
    "country": "China",
    "hormuz": "Loser (−10 to −20%)",
    "oil_strike": "Loser (−8 to −12%)",
    "cable": "Loser (−5 to −8%)",
    "ceasefire": "Winner (+8–12%)"
  },
  {
    "country": "S. Korea",
    "hormuz": "Loser (−20 to −30%)",
    "oil_strike": "Loser (−12 to −18%)",
    "cable": "Mixed (−5 to −8%)",
    "ceasefire": "Winner (+12–18%)"
  }
];

export const gcc = {
  "thesis": "The GCC shows the most dramatic internal divergence of any region. Saudi Arabia is an oil-revenue equity winner; UAE is a geographic/security-risk loser short-term despite strong oil-bypass infrastructure; Qatar is a casualty of Iranian strikes on Ras Laffan. GCC sovereigns benefit from high oil at the macro-fiscal level, but GCC domestic equity sectors (banks, real estate, tourism, logistics, construction) reprice security and funding risk rapidly when conflict is geographically proximate.",
  "saudi": "Petroline (East-West) restored to 7.0M bpd by April 2026 after an Apr 9 drone strike cut throughput 700k bpd; Yanbu loading ~4.0–4.5M bpd is the operational proxy constraint — so Saudi can export ~3–4M bpd bypassing Hormuz. With Brent >$100, Aramco (16% TASI weight) surges → TASI +5% in March alone, +1.7% above pre-war by mid-March, one of the few major indices positive globally. Saudi domestic banks are net beneficiaries of oil-driven public spending, unlike UAE banks facing expat-outflow risk.",
  "uae": "ADCOP (Abu Dhabi→Fujairah) at 1.7–1.8M bpd (May 2026), ramping toward ~3.6M bpd by 2027. UAE crude output fell to 2.02M bpd (April) / 1.9M (March) from ~3.4M pre-conflict as Hormuz closure forced shut-ins. DFM −16% since onset (−4.71% Day 1), ADX −9%, ~$120bn market-cap loss. Day-1 sector hits: real estate −4.92% (Emaar/majors at 5% circuit breaker), financials −4.38% (Emirates NBD, FAB); materials +2.38% (National Cement, sole positive on defense/infrastructure).",
  "qatar": "Iranian strikes on Ras Laffan forced QatarEnergy's first force majeure in three decades. Global LNG supply fell ~8% YoY in March (Qatar+UAE loadings −9.5 bcm annually); reportedly −20% globally. Qatar Exchange fell ~4% while TASI rose — a direct LNG-revenue-casualty vs oil-revenue-insulation expression. Cumulative 2026–2030 LNG loss estimated at 120 bcm (~15% of expected global supply)."
};

export const gccScenario = [
  {
    "scenario": "hormuz_closure",
    "saudi": "Initial +5–10%, then falls on global-recession risk",
    "uae": "−20–30%",
    "qatar": "−15–25%",
    "mechanism": "Oil-revenue tailwind overwhelmed by global demand destruction"
  },
  {
    "scenario": "oil_strike",
    "saudi": "+5–15%",
    "uae": "−8–15%",
    "qatar": "−10–20%",
    "mechanism": "Infrastructure-damage duration determines LNG-revenue impact"
  },
  {
    "scenario": "cable_severance",
    "saudi": "Neutral",
    "uae": "−5–10% (fintech/logistics)",
    "qatar": "Neutral",
    "mechanism": "Dubai's digital-hub role impaired"
  },
  {
    "scenario": "ceasefire",
    "saudi": "−5–10% (oil-revenue decline)",
    "uae": "+15–20% (recovery)",
    "qatar": "+10–20% (LNG restart)",
    "mechanism": "All asymmetries reverse"
  }
];

export const gccHedge = "Saudi: long Aramco/TASI energy as a Petroline-Hormuz hedge; short TASI real estate/hospitality as a ceasefire hedge. UAE: long DFM on ceasefire; avoid during active hostilities. Qatar: express via LNG-exposed non-Gulf exporters (US/Australian LNG) as proxy for unlisted QatarEnergy.";

export const flows = [
  {
    "segment": "Energy ETFs (~$8.4bn AUM)",
    "flow": "~$2bn+ YTD; ~$793m single week (early March)",
    "ytd": "+25%+ aggregate; WisdomTree BRNT +57% YTD",
    "src": "Trackinsight T2"
  },
  {
    "segment": "WisdomTree Brent (BRNT)",
    "flow": "~$100m+ single week",
    "ytd": "+57% YTD; +30% week 1",
    "src": "Trackinsight T2"
  },
  {
    "segment": "BNO (US Brent Oil Fund)",
    "flow": "Surged",
    "ytd": "+84% Q1 2026",
    "src": "Zacks T2"
  },
  {
    "segment": "Defense ETFs (~DFEN $7.5bn)",
    "flow": "~$467m YTD",
    "ytd": "+14–18% YTD",
    "src": "Trackinsight T2"
  },
  {
    "segment": "ITA (iShares Aerospace & Defense)",
    "flow": "Surged; defense stocks rallying since US move",
    "ytd": "+14–18% (beneficiary)",
    "src": "Zacks T2"
  },
  {
    "segment": "Cybersecurity (ISPY, CIBR)",
    "flow": "Mixed; cautious after volatility",
    "ytd": "ISPY +8% wk1; CIBR +7.5%",
    "src": "Trackinsight T2"
  },
  {
    "segment": "GDX (Gold Miners)",
    "flow": "Volatile; large inflows after initial shock",
    "ytd": "+95% 12-mo to Apr; initial 10% 2-day drop",
    "src": "247 Wall St T2"
  },
  {
    "segment": "Tanker (BDRY proxy; FRO/NAT/DHT)",
    "flow": "Surged",
    "ytd": "FRO +62.6%, NAT +63.2% YTD to Mar 9",
    "src": "247 Wall St T2"
  },
  {
    "segment": "EM ETFs (EEM, INDA)",
    "flow": "Outflows in March; recovery in April",
    "ytd": "MSCI EM −11% March; +14.7% April",
    "src": "MSCI T1"
  },
  {
    "segment": "Rare Earth / Strategic Metals (VVMX)",
    "flow": "Fell; counter-intuitive given geopolitics",
    "ytd": "−6.4% wk1; +31% YTD",
    "src": "Trackinsight T2"
  }
];

export const flowsNote = "Daily GCC-ETF flows, name-level short interest, and venue order-flow imbalance are not public at transaction level. Proxy methodology: sector-ETF premium/discount to NAV as a short-term demand-imbalance proxy; MSCI FactorLab crowding scores as a positioning-unwind-magnitude proxy.";

export const volOptions = [
  {
    "item": "VIX",
    "detail": "Surged >57% in the first week (Mar 2–9); near its highest since the April 2025 Liberation-Day tariff shock (Forbes T2)."
  },
  {
    "item": "OVX (oil vol)",
    "detail": "Elevated to the 88th-percentile high; oil 1M implied vol +7 points at onset (Cboe T1)."
  },
  {
    "item": "SPX skew inversion",
    "detail": "Realized skew inverted as traders focused on upside; SPX realized vol 16.9% on up days vs 14.6% down — markets better-hedged for downside, so the rally surprised positioning (Cboe T1)."
  },
  {
    "item": "Crude options skew",
    "detail": "Extreme upside call bid extended to 6M — last seen during 2022 Russia/Ukraine (Cboe T1)."
  },
  {
    "item": "Dollar–VIX correlation",
    "detail": "Reverted to positive (dollar rises with VIX) by April — back to 2024 levels, abandoning the tariff-era negative correlation (Bloomberg T2)."
  }
];

export const deleveraging = "Risk-parity/vol-control strategies mechanically de-risk as realized vol rises — with VIX +57% week 1, typical vol-targeting funds cut equity allocation 30–50%. ECB research confirms this feedback loop amplifies sell-offs. The EM crowding factor fell >1% in the first two weeks of March — a 4-sigma event. Margin calls in energy futures likely triggered correlated equity selling in commodity-focused funds.";

export const gccFlows = "UAE domestic investors bought AED 2.2bn (~$611m) of DFM/ADX stock in the first 13 days of March, providing a floor — but foreign investors outnumber domestic in UAE markets, so net flows were still negative. The UAE market imposed a −5% daily circuit breaker on reopening. Saudi's larger domestic base (vs foreign) explains TASI's resilience against DFM outflows.";

export const cryptoSpillover = "VIX spikes correlate with crypto drawdowns via risk-parity deleveraging (crypto increasingly a risk asset), leveraged-ETF unwinding, and institutional risk-limit triggers. In the March shock, crypto's correlation with equity risk-off was elevated: BTC/ETH fell alongside equities in week 1 and recovered as the SPX recovered in April. Full crypto analysis is in Crypto (Section 10).";

export const scenarioTrades = [
  {
    "scenario": "hormuz_closure",
    "label": "Sustained Closure >60 Days",
    "tone": "#ef4444",
    "regime": "Stagflation bear. S&P −15–25%; STOXX −20–30%; Nikkei −25–35%; MSCI EM −15–25%; TASI initially positive then falls on recession risk.",
    "trades": [
      {
        "direction": "Long",
        "trade": "US energy E&P (non-Gulf)",
        "instrument": "XOP, XLE",
        "rationale": "Brent $120–$150; domestic revenue"
      },
      {
        "direction": "Long",
        "trade": "Defense / Aerospace",
        "instrument": "ITA, DFEN",
        "rationale": "Spending surge; weapons backlog"
      },
      {
        "direction": "Long",
        "trade": "Tanker equities",
        "instrument": "FRO, NAT, DHT",
        "rationale": "Route length maximized; rates at records"
      },
      {
        "direction": "Long",
        "trade": "Cybersecurity",
        "instrument": "CIBR, ISPY",
        "rationale": "Digital-conflict premium"
      },
      {
        "direction": "Long",
        "trade": "Gold miners",
        "instrument": "GDX",
        "rationale": "Inflation + geopolitical + gold-price hedge"
      },
      {
        "direction": "Long",
        "trade": "Non-Gulf LNG exporters",
        "instrument": "LNG, GLNG",
        "rationale": "Qatar force majeure → US/Aus premium"
      },
      {
        "direction": "Short",
        "trade": "Airlines (non-hedged)",
        "instrument": "JETS",
        "rationale": "Jet-fuel shock destroys margin; >30% cost base"
      },
      {
        "direction": "Short",
        "trade": "European industrials",
        "instrument": "EXV1",
        "rationale": "Energy-import shock + margin crush"
      },
      {
        "direction": "Short",
        "trade": "Japan/Korea equity",
        "instrument": "EWJ, EWY",
        "rationale": "100% oil importers; currency drag"
      },
      {
        "direction": "Short",
        "trade": "EM importer basket",
        "instrument": "INDA",
        "rationale": "Fiscal + currency + earnings triple hit"
      },
      {
        "direction": "Short",
        "trade": "Consumer discretionary",
        "instrument": "XLY",
        "rationale": "Gasoline/energy squeeze on disposable income"
      },
      {
        "direction": "Short",
        "trade": "Auto OEMs",
        "instrument": "CARZ",
        "rationale": "Thin margins + EV write-offs + demand fall"
      },
      {
        "direction": "Long-Short",
        "trade": "TASI energy vs TASI real estate/banks",
        "instrument": "TASI names",
        "rationale": "Oil income vs security risk bifurcation"
      },
      {
        "direction": "Crypto spillover",
        "trade": "Short BTC/ETH",
        "instrument": "Perpetuals",
        "rationale": "Risk-off; correlation with equity drawdown elevated"
      }
    ]
  },
  {
    "scenario": "oil_strike",
    "label": "Infrastructure Damage, Partial Output, 3–6 Months",
    "tone": "#f59e0b",
    "regime": "Energy-infrastructure shock; shorter duration. S&P −8–12%; Europe −12–15%; Asia −10–18%.",
    "trades": [
      {
        "direction": "Long",
        "trade": "Oilfield services / repair",
        "instrument": "OIH, SLB",
        "rationale": "Infrastructure-repair surge"
      },
      {
        "direction": "Long",
        "trade": "Energy majors w/ Gulf bypass",
        "instrument": "Aramco, BP",
        "rationale": "Oil-price benefit + bypass capacity"
      },
      {
        "direction": "Long",
        "trade": "Defense (missile defense, drone)",
        "instrument": "ITA, L3Harris",
        "rationale": "Attack/defense spending spike"
      },
      {
        "direction": "Short",
        "trade": "Gulf-region airlines",
        "instrument": "(no pure ETF)",
        "rationale": "Gulf routing disrupted; jet fuel at peak"
      },
      {
        "direction": "Short",
        "trade": "EM banks w/ GCC exposure",
        "instrument": "EM bank names",
        "rationale": "NPL risk from GCC disruption"
      },
      {
        "direction": "Crypto spillover",
        "trade": "Moderate short BTC",
        "instrument": "Perpetuals",
        "rationale": "Risk-off; less severe than hormuz_closure"
      }
    ]
  },
  {
    "scenario": "cable_severance",
    "label": "Internet / Telecom Infrastructure Cut",
    "tone": "#22d3ee",
    "regime": "Cyber/AI volatility; settlement risk; EM fintech/e-commerce disruption. Broad-market impact more contained vs oil.",
    "trades": [
      {
        "direction": "Long",
        "trade": "Cybersecurity",
        "instrument": "CIBR, ISPY, HACK",
        "rationale": "Digital-infrastructure protection demand"
      },
      {
        "direction": "Long",
        "trade": "Satellite internet",
        "instrument": "ASTS, STRL, VSAT",
        "rationale": "Redundancy demand if subsea cables impaired"
      },
      {
        "direction": "Long",
        "trade": "Domestic cloud (US/EU)",
        "instrument": "CLOU",
        "rationale": "Traffic rerouting to domestic infrastructure"
      },
      {
        "direction": "Short",
        "trade": "EM e-commerce / fintech",
        "instrument": "EM names",
        "rationale": "Transaction latency; consumer impact"
      },
      {
        "direction": "Short",
        "trade": "AI infrastructure (short-term)",
        "instrument": "SMH, SOXX",
        "rationale": "Data-center connectivity impairment"
      },
      {
        "direction": "Short",
        "trade": "Cross-border payments/clearing",
        "instrument": "EM-specialist names",
        "rationale": "Settlement latency risk"
      },
      {
        "direction": "Crypto spillover",
        "trade": "Short crypto exchanges w/ Asian routing",
        "instrument": "Exchange-specific",
        "rationale": "Withdrawal/deposit latency; DeFi settlement risk"
      }
    ]
  },
  {
    "scenario": "ceasefire",
    "label": "Hormuz Reopens, Brent Falls $15–20 Day 1",
    "tone": "#10b981",
    "regime": "Rapid risk-on; violent sector reversal; growth/AI rotation resumes; EM importers recover.",
    "trades": [
      {
        "direction": "Long",
        "trade": "Airlines (pre-position)",
        "instrument": "JETS",
        "rationale": "Jet-fuel cost reversal; demand recovery"
      },
      {
        "direction": "Long",
        "trade": "EM importer basket",
        "instrument": "INDA, EWY, EWJ",
        "rationale": "Oil shock reverses; currencies strengthen"
      },
      {
        "direction": "Long",
        "trade": "Consumer discretionary",
        "instrument": "XLY",
        "rationale": "Gasoline falls; budget relief"
      },
      {
        "direction": "Long",
        "trade": "Autos (EV particularly)",
        "instrument": "CARZ, DRIV",
        "rationale": "Demand recovery; EV substitution less needed"
      },
      {
        "direction": "Long",
        "trade": "EM banks",
        "instrument": "Broad EM financials",
        "rationale": "Credit risk recedes; GCC revenue recovers"
      },
      {
        "direction": "Long",
        "trade": "DFM/ADX (UAE)",
        "instrument": "UAE names",
        "rationale": "Security premium reverses; expat flows return"
      },
      {
        "direction": "Long",
        "trade": "Qatar Exchange",
        "instrument": "QatarEnergy-related",
        "rationale": "LNG-revenue restart"
      },
      {
        "direction": "Short",
        "trade": "Energy E&P",
        "instrument": "XOP",
        "rationale": "Brent falls $10–20; Morgan Stanley sees ~$94 near-term"
      },
      {
        "direction": "Short",
        "trade": "Defense",
        "instrument": "ITA, DFEN",
        "rationale": "Spending urgency fades"
      },
      {
        "direction": "Short",
        "trade": "Gold miners",
        "instrument": "GDX",
        "rationale": "Safe-haven premium reverses"
      },
      {
        "direction": "Short",
        "trade": "Tanker equities",
        "instrument": "FRO, NAT",
        "rationale": "VLCC rates normalize; longer routes unwind"
      },
      {
        "direction": "Crypto spillover",
        "trade": "Long BTC/ETH",
        "instrument": "Spot/Perpetuals",
        "rationale": "Risk-on; BTC +20–35% projected on ceasefire"
      }
    ]
  }
];

export const precedents = [
  {
    "episode": "1973 Yom Kippur War / Arab Oil Embargo (Oct 1973–Mar 1974)",
    "points": [
      "Oil +300% over 6 months (WTI ~$3→~$12).",
      "S&P −16.1% at initial trough; full bear market took S&P −45% from the Jan 1973 peak to the Dec 1974 bottom. (Dow at 577.60 on Dec 6, 1974)",
      "No recovery to pre-embargo levels in real terms for six years; ~−2%/yr real S&P returns 1973–1982.",
      "Lesson: a structural, sustained oil-supply shock means a multi-year bear market, not just a correction."
    ]
  },
  {
    "episode": "1979 Iranian Revolution Oil Crisis",
    "points": [
      "Crude rose to $39.50/bbl (an all-time real high until 2008).",
      "S&P approached but did not enter a bear market; stocks rose through parts of 1979 before pulling back.",
      "Full economic consequences materialized with a lag — a complacency trap.",
      "Lesson: short-term equity resilience can mask longer-term stagflation damage."
    ]
  },
  {
    "episode": "1990 Gulf War (Aug 2, 1990 – Mar 1991)",
    "points": [
      "WTI +90.2% from Aug 2 to Oct 11 (peak); S&P −16.9% over the same window.",
      "Oct 11→year-end: oil −30.7%, S&P +11.8%. Jan–Mar 1991: oil −31%, S&P +13.6%. Full 1991: oil −5.1%, S&P +10.6%.",
      "RBC: S&P fell 15.9% in the 1990 war and 16.1% in the 1973 embargo — the two oil-shock conflicts.",
      "Lesson: if the conflict resolves cleanly and quickly, equity recovery is rapid and sharp."
    ]
  },
  {
    "episode": "2003 Iraq War",
    "points": [
      "DJIA rose 8.4% in the month after the invasion; the market recovered quickly on a short-conflict perception.",
      "No sustained energy-supply shock → no sustained equity damage.",
      "Lesson: military conflict without oil-supply disruption is short-term equity noise."
    ]
  },
  {
    "episode": "2022 Russia-Ukraine War (Feb 24, 2022)",
    "points": [
      "STOXX Europe 600 −3.2% on Feb 24 (−10% YTD); STOXX USA 900 +1.7% on the day (−10.7% YTD); STOXX EM 1500 −4.8% at peak shock.",
      "Brent +30%+ YTD to >$100.",
      "Energy and basic resources were the only sectors positive YTD through Feb 24; materials also positive."
    ]
  },
  {
    "episode": "2024 Red Sea Disruption (Oct 2023–2024)",
    "points": [
      "Suez-region shipping costs +180% peak (Oct 20 2023–Jan 26 2024); global freight indices +120% (Pacific +70%, Atlantic +20%).",
      "Drewry Container Equity Index −8.5% in a single week on Gaza-ceasefire rumors (Jun 14 2024) — tanker stocks violently sensitive to resolution signals."
    ]
  }
];

export const upgradedConfidence = [
  "S&P 500 trough ~6,316 on Mar 30; ~−8% from Feb 28 pre-conflict (CNBC).",
  "Brent $72.48 (Feb 27) → $119.46 peak early March; +55% in <2 weeks (CNBC) [PROVISIONAL-2026, pending primary recheck].",
  "TASI +5% in March; +1.7% above pre-war mid-March (Arab News).",
  "DFM −4.71% Day 1 (Mar 5); ADX −1.93% Day 1; total UAE market-cap loss ~$120bn (Al Jazeera).",
  "MSCI EM −11% in March; +14.7% in April (MSCI).",
  "Nikkei/KOSPI ~−3% single session Mar 9 (CNBC).",
  "VLCC rates +94% in first days; FRO +62.6%, NAT +63.2%, DHT +59.1% YTD to Mar 9 (247 Wall St).",
  "GDX (gold miners) +95% over 12 months to April (247 Wall St).",
  "VIX +57% in one week (Mar 2–9) (Forbes).",
  "Petroline restored to 7.0M bpd by April (Energy Connects).",
  "ADCOP Fujairah at 1.7–1.8M bpd by May (Argus).",
  "War-risk premiums >1,000% surge for some Gulf cover; AWRP 2.5% hull/7-day peak (Reuters; S&P Global).",
  "Jet fuel 25–30% of airline opex (2026); global average $159.85/bbl (IATA).",
  "QatarEnergy force majeure on Ras Laffan; global LNG reportedly −20% in April (Bloomberg; The National citing IEA).",
  "Lombard Odier: 5% oil rise → −2.2% US EPS over 12 months; 50% spike → −15% EPS (Lombard Odier).",
  "1990 Gulf War: WTI +90.2% Aug 2–Oct 11; S&P −16.9% same period (DataTrek).",
  "2022 Russia-Ukraine: STOXX Europe 600 −3.2% Feb 24; Brent +30%+ YTD (STOXX).",
  "2024 Red Sea: Suez shipping +180%; global freight +120% (St. Louis Fed).",
  "Brazil Ibovespa near 177,000+; BRL +10% vs USD (Latin Finance).",
  "Brent +16% drop on initial ceasefire then recovery to −13.5% at $94.36 (Morgan Stanley).",
  "EIA distillate crack spreads $1.42/gal March 2026, highest since 2022 (EIA).",
  "Auto OEM margins 3.6% Q4'25, down >60% from the 2021 peak (Bain).",
  "Micron +140% from the March trough by mid-May; S&P >7% above 50-day MA (first in 3 decades) with <55% of components above their own."
];

export const proxyOnly = [
  "Exact close levels for CAC 40, TOPIX, CSI 300 during the window — directional press only [PROXY via STOXX/MSCI correlated moves].",
  "Full-timeline DFM/ADX levels — Day-1 verified, full series not in open sources.",
  "Qatar Exchange daily levels — only aggregate % changes (−4% from Al Jazeera).",
  "Specific GCC ETF inflow/outflow — proprietary (Bloomberg/EPFR) [PROXY: premium/discount to NAV].",
  "Daily ETF flow breakdown (energy/defense/EM) — aggregate only [PROXY: weekly AUM changes].",
  "Name-level short-interest changes (airlines/autos) — subscription-only [PROXY: Cboe put/call ratios].",
  "Aramco intraday and DFM/ADX single-stock intraday — not public at required granularity.",
  "Q1 2026 OEM margins — Bain data through Q4'25 [PROXY: extrapolated with energy uplift].",
  "Pakistan KSE-100 window performance — contextual only [PROXY: EM-importer analog, −10–20% in hormuz_closure].",
  "Nifty 50 exact peak-to-trough — Sensex −999.79 one session confirmed; full trough not pinpointed [PROXY: 22,000–24,000].",
  "Drewry/Clarksons 2026 freight rates — paywalled; 2024 Red Sea used as analog.",
  "TeleGeography 2026 cable-traffic diversion — 2024–2025 data used.",
  "EM bank NPL data for GCC-exposed portfolios — not in open sources; directional inference.",
  "Vol-control fund deleveraging magnitude — no public AUM data; ECB 2020 paper as framework.",
  "Russia equity performance — sanctioned/inaccessible for the 2026 window."
];

export const dataQuality = {
  "high": "Vol indices and S&P/MSCI EM levels (CNBC/MSCI/Forbes/Cboe); Lombard Odier earnings model; IATA jet-fuel; EIA crack spreads; Petroline/ADCOP capacity (Energy Connects/Argus); the historical precedent compendium (RBC/DataTrek/STOXX/St. Louis Fed). See the 23-item HIGH-confidence register.",
  "moderate": "Brent absolute prices [PROVISIONAL-2026, pending primary recheck]; Qatar/UAE LNG-loss figures (T2 citing T1-underlying); ETF flow magnitudes (Trackinsight/press-derived); regional-exchange levels without major-newswire close data.",
  "quarantined": "CAC/TOPIX/CSI 300 exact levels, Pakistan KSE-100, Nifty trough, GCC daily ETF flows, OEM Q1'26 margins, vol-control AUM, Russia equity — all proxy/unavailable. See the 15-item Could-Not-Verify register."
};

export const relatedSectors = "Equities is the first-order financial layer in the causal chain: physical shock (Sections 1–7) → equity sector/factor rotation (here) → cross-asset correlation breaks & volatility regimes (Cross-Asset) → crypto beta/reflexivity (/markets/crypto). The sector winners deep-dive on /markets/energy, /markets/defense, /markets/insurance; the EM/credit stress on /markets/credit; the full correlation/vol synthesis on /markets/cross-asset.";
