// GENERATED from IranWarTracker/data/cascades/crossasset.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "card.vol.ovx_crude_peak",
    "icon": "01",
    "title": "Crude Volatility (OVX) Conflict Peak",
    "category": "Volatility",
    "summary": "OVX exploded from ~28 (Jan 2) to 120.91 (Mar 11, 2026), >4× baseline; still ~58 (2×) by May 28. The shock lived in the commodity complex.",
    "metrics": [
      {
        "label": "Baseline",
        "value": "28.40"
      },
      {
        "label": "Peak",
        "value": "120.91"
      },
      {
        "label": "Peak date",
        "value": "2026-03-11"
      },
      {
        "label": "May28",
        "value": "58.30"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "FRED/CBOE OVXCLS",
        "url": "https://fred.stlouisfed.org/series/OVXCLS",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "energy",
        "volatility"
      ],
      "entities": [
        "cboe",
        "fred"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike"
      ],
      "position": {},
      "asOf": "2026-03-11"
    }
  },
  {
    "id": "card.vol.bifurcation",
    "icon": "02",
    "title": "Bifurcated Volatility Regime",
    "category": "Regime",
    "summary": "By May 28 VIX (15.74) and GVZ gold-vol (24.83) fell BELOW pre-conflict baselines while OVX (58.30) and EM-equity vol VXEEM (35.30) stayed ~2×. Equity/gold complacency restored; energy & EM risk sticky.",
    "metrics": [
      {
        "label": "Vix may28",
        "value": "15.74"
      },
      {
        "label": "Vix baseline",
        "value": "18"
      },
      {
        "label": "Gvz may28",
        "value": "24.83"
      },
      {
        "label": "Ovx may28",
        "value": "58.30"
      },
      {
        "label": "Vxeem may28",
        "value": "35.30"
      },
      {
        "label": "Vxeem baseline",
        "value": "17.16"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "FRED/CBOE (VIXCLS,GVZCLS,OVXCLS,VXEEMCLS)",
        "url": "https://fred.stlouisfed.org/series/VIXCLS",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "volatility",
        "equity"
      ],
      "entities": [
        "cboe",
        "fred"
      ],
      "scenarios": [
        "hormuz_closure",
        "ceasefire"
      ],
      "position": {},
      "asOf": "2026-05-28"
    }
  },
  {
    "id": "card.vol.vix_peak",
    "icon": "03",
    "title": "Equity Volatility (VIX) Conflict Peak",
    "category": "Volatility",
    "summary": "VIX rose from ~18 baseline to a 31.05 close (Mar 27); intraday ~35.3 (Mar 9). Lower-amplitude, longer-lasting than the Apr-2025 tariff shock (VIX 52.3).",
    "metrics": [
      {
        "label": "Baseline",
        "value": "17.93"
      },
      {
        "label": "Close peak",
        "value": "31.05"
      },
      {
        "label": "Close peak date",
        "value": "2026-03-27"
      },
      {
        "label": "Intraday peak",
        "value": "35.3"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "FRED/CBOE VIXCLS",
        "url": "https://fred.stlouisfed.org/series/VIXCLS",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "volatility",
        "equity"
      ],
      "entities": [
        "cboe",
        "fred"
      ],
      "scenarios": [
        "oil_strike"
      ],
      "position": {},
      "asOf": "2026-03-27"
    }
  },
  {
    "id": "card.regime.oil_gold_decoupling",
    "icon": "04",
    "title": "Oil–Gold Correlation Flip to Negative",
    "category": "Regime",
    "summary": "Oil–gold flipped into negative territory; the directional flip is the robust HIGH-confidence finding (the early-April ~−0.41 point coefficient is T3, illustrative only). Monetary tightening + a strong dollar overrode geopolitical alignment; gold fell ~$5,595→$4,099 as Brent rose ~55%. The 2022 monetary-override template, not 1979.",
    "metrics": [
      {
        "label": "Corr 1979",
        "value": "+0.93"
      },
      {
        "label": "Corr 2022 initial",
        "value": "+0.71"
      },
      {
        "label": "Corr 2026 apr",
        "value": "−0.41 (T3, illustrative)"
      },
      {
        "label": "Brent move",
        "value": "~+55% late-Feb→March (CNBC, directional)"
      },
      {
        "label": "Brent levels",
        "value": "PROXY — absolute prices demoted; re-anchor to EIA before production"
      },
      {
        "label": "Gold high",
        "value": "$5,595"
      },
      {
        "label": "Gold trough",
        "value": "$4,099"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "Logical Invest",
        "url": "https://logical-invest.com/how-oil-shocks-affect-stock-market-and-gold/",
        "tier": "T2"
      },
      {
        "name": "ECB FSR (supply-shock framework)",
        "url": "https://www.ecb.europa.eu/press/financial-stability-publications/fsr/focus/2022/html/ecb.fsrbox202211_02~7abb48e333.en.html",
        "tier": "T1"
      },
      {
        "name": "Lemand via LinkedIn (coefficient only)",
        "url": "https://www.linkedin.com/pulse/when-oil-shocks-gold-diverge-five-decades-crisis-one-why-lemand-phd-9c2wf",
        "tier": "T3"
      }
    ],
    "tags": {
      "assetClass": [
        "gold",
        "energy"
      ],
      "entities": [],
      "scenarios": [
        "oil_strike"
      ],
      "position": {},
      "asOf": "2026-04"
    }
  },
  {
    "id": "card.regime.stock_bond_flip",
    "icon": "05",
    "title": "Stock–Bond Correlation Turns Positive — Diversification Fails",
    "category": "Regime",
    "summary": "Stock–bond correlation moved POSITIVE again in W2: 10Y yields +70bps to ~4.5% by late May while the S&P recovered to +7.4% YTD (off an ~8% drawdown to a ~6,316 trough on Mar 30). The inflationary 2022/pandemic template — equities and bond prices fall together on inflation surprises, so the classic 60/40 diversifier failed.",
    "metrics": [
      {
        "label": "Yield change bps",
        "value": "+70"
      },
      {
        "label": "Yield level",
        "value": "~4.5%"
      },
      {
        "label": "Sp500 trough",
        "value": "~6,316 (Mar 30, ~8% drawdown)"
      },
      {
        "label": "Sp500 recovery",
        "value": ">7,400"
      },
      {
        "label": "Sp500 YTD",
        "value": "+7.4%"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "CNBC",
        "url": "https://www.cnbc.com/2026/05/20/market-correction-equities-stocks-bonds-iran-inflation.html",
        "tier": "T2"
      },
      {
        "name": "ECB FSR",
        "url": "https://www.ecb.europa.eu/press/financial-stability-publications/fsr/focus/2022/html/ecb.fsrbox202211_02~7abb48e333.en.html",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "rates",
        "equity"
      ],
      "entities": [
        "ecb"
      ],
      "scenarios": [
        "oil_strike",
        "hormuz_closure"
      ],
      "position": {},
      "asOf": "2026-05-20"
    }
  },
  {
    "id": "card.signal.brent_backwardation",
    "icon": "06",
    "title": "Record Brent Backwardation as Duration Signal",
    "category": "Signal",
    "summary": "Brent M1–M2 widened from ~$0.30 to ~$9–10 by mid-March (steepest since 2022); roll cost ~−110% annualized. Back end <$70 says transient. WARNING (Minneapolis Fed): not a reopening-optimism signal.",
    "metrics": [
      {
        "label": "Prompt spread pre",
        "value": "$0.30"
      },
      {
        "label": "Prompt spread mid mar",
        "value": "$9–10"
      },
      {
        "label": "Roll yield annualized",
        "value": "−110%"
      },
      {
        "label": "Strip 2027",
        "value": "<$70"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "Reuters",
        "url": "https://www.reuters.com/business/energy/oil-derivatives-signal-traders-see-middle-east-shock-short-lived-2026-03-06/",
        "tier": "T2"
      },
      {
        "name": "Minneapolis Fed",
        "url": "https://www.minneapolisfed.org/article/2026/how-long-can-we-look-through-the-iran-war-commodity-shock",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "energy"
      ],
      "entities": [
        "fred"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike"
      ],
      "position": {},
      "asOf": "2026-03"
    }
  },
  {
    "id": "card.signal.ttf_jkm_curve",
    "icon": "07",
    "title": "Gas/LNG Backwardation with Multi-Year Tail",
    "category": "Signal",
    "summary": "TTF doubled to ~€70/MWh; JKM +68.5% to ~$25/mmBtu; TTF curve inverted to backwardation. Qatar ~17% LNG offline 3–5yr; forward convergence pushed to ~Q2 2029.",
    "metrics": [
      {
        "label": "Ttf peak",
        "value": "~€70/MWh"
      },
      {
        "label": "JKM %",
        "value": "+68.5%"
      },
      {
        "label": "JKM level",
        "value": "~$25/mmBtu"
      },
      {
        "label": "Qatar offline",
        "value": "~17%"
      },
      {
        "label": "Convergence",
        "value": "Q2 2029"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "Reuters",
        "url": "https://www.reuters.com/business/energy/asia-lng-price-surge-opens-arbitrage-west-replace-qatari-supply-2026-03-04/",
        "tier": "T2"
      },
      {
        "name": "Elenger Q1-2026",
        "url": "https://elenger.ee/en/gas-market-overview-q1-2026/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "lng",
        "energy"
      ],
      "entities": [
        "qatar"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike"
      ],
      "position": {},
      "asOf": "2026-03"
    }
  },
  {
    "id": "card.dynamic.flows_rotation",
    "icon": "08",
    "title": "Conflict Flow Rotation: Energy/Defense/Cash/Short-Duration",
    "category": "Dynamic",
    "summary": "Press-derived EPFR/BofA figures: ~$5bn monthly energy-ETF inflow, ~$29bn short-Treasury inflow, ~$70.7bn into cash; WGC confirms North American gold ETFs −$12.7bn in March, largest in ≥5yr.",
    "metrics": [
      {
        "label": "Energy etf monthly inflow",
        "value": "~$5bn"
      },
      {
        "label": "Short treasury inflow",
        "value": "~$29bn"
      },
      {
        "label": "Cash week",
        "value": "~$70.7bn"
      },
      {
        "label": "Na gold etf outflow",
        "value": "−$12.7bn"
      },
      {
        "label": "Ppa 12mo",
        "value": "+37.8%"
      },
      {
        "label": "Shld 12mo",
        "value": "+47.8%"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "AInvest/EPFR",
        "url": "https://www.ainvest.com/news/defense-stocks-buy-signal-policy-driven-spending-floors-prices-crowded-trade-clearing-2604/",
        "tier": "T2"
      },
      {
        "name": "WGC April 2026",
        "url": "https://www.gold.org/goldhub/research/gold-market-commentary-april-2026",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "equity",
        "gold",
        "defense"
      ],
      "entities": [
        "wgc"
      ],
      "scenarios": [
        "hormuz_closure"
      ],
      "position": {},
      "asOf": "2026-03"
    }
  },
  {
    "id": "card.signal.ceasefire_whipsaw",
    "icon": "09",
    "title": "Ceasefire Whipsaw — Hedge Failure Mode",
    "category": "Hedge",
    "summary": "XLE −$1.0bn single-day outflow (largest in 14yr) and −$2.1bn weekly energy outflow (largest since Jul-2024) on ceasefire news, after record inflows. Conflict hedges carry brutal mean-reversion risk on de-escalation.",
    "metrics": [
      {
        "label": "Xle single day outflow",
        "value": "−$1.0bn"
      },
      {
        "label": "Weekly energy outflow",
        "value": "−$2.1bn"
      },
      {
        "label": "Prior 3wk inflow",
        "value": "+$13.5bn"
      },
      {
        "label": "Xle YTD",
        "value": "+28.2%"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "Tickeron/BofA/EPFR",
        "url": "https://tickeron.com/trading-investing-101/energy-selloff-report-2026-the-biggest-outflow-since-2024--what-retail-traders-must-understand-before-the-next-trade/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "energy",
        "equity"
      ],
      "entities": [],
      "scenarios": [
        "ceasefire"
      ],
      "position": {},
      "asOf": "2026-05"
    }
  },
  {
    "id": "card.regime.cftc_gold_positioning",
    "icon": "10",
    "title": "CFTC/COMEX Gold Positioning — Specs Faded the Rally",
    "category": "Regime",
    "summary": "COMEX net longs fell 21% to 504t in Feb (money-manager −18% to 311t); April eased a further 4% to 477t with late-month selling outweighing early rebuild. Specs de-grossed and faded gold, correctly anticipating paper-gold weakness.",
    "metrics": [
      {
        "label": "Comex net long feb",
        "value": "504t"
      },
      {
        "label": "Comex change",
        "value": "−21%"
      },
      {
        "label": "Mm net long",
        "value": "311t"
      },
      {
        "label": "Comex net long apr",
        "value": "477t"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "WGC March 2026 (CFTC COT underlying)",
        "url": "https://www.gold.org/goldhub/research/gold-etfs-holdings-and-flows/2026/03",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "gold"
      ],
      "entities": [
        "wgc",
        "cftc"
      ],
      "scenarios": [
        "ceasefire"
      ],
      "position": {},
      "asOf": "2026-04"
    }
  },
  {
    "id": "card.bridge.equity_to_crypto",
    "icon": "11",
    "title": "Equity-to-Crypto Beta Bridge (§8 → §10)",
    "category": "Signal",
    "summary": "Equity sector/factor stress (Equities) → risk-parity/vol-control deleveraging → leveraged-ETF unwinds → crypto beta stress. BTC-equity correlation ~0.50 (2026) vs ~0.11 (2023): BTC traded as a liquidity/risk proxy, not a haven. BTC-gold decoupled. Full treatment in Crypto (Section 10); coefficients T3-illustrative.",
    "metrics": [
      {
        "label": "Btc equity corr",
        "value": "~0.50 (2026) vs ~0.11 (2023)"
      },
      {
        "label": "Btc gold corr",
        "value": "decoupled (T3 low ~−0.88)"
      },
      {
        "label": "Chain",
        "value": "physical → equity (§8) → cross-asset (§9) → crypto (§10)"
      },
      {
        "label": "Mechanism",
        "value": "vol-control deleveraging → leveraged-ETF unwinds → crypto beta stress"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "Morningstar (BTC haven vs risk)",
        "url": "https://global.morningstar.com/en-gb/markets/is-bitcoin-safe-haven-or-risk-asset-what-iran-war-rally-reveals",
        "tier": "T2"
      },
      {
        "name": "ECB (vol-targeting feedback)",
        "url": "https://www.ecb.europa.eu/press/financial-stability-publications/fsr/focus/2020/html/ecb.fsrbox202005_02~f6616db9be.en.html",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "crypto",
        "equity",
        "volatility"
      ],
      "entities": [
        "morningstar",
        "ecb"
      ],
      "scenarios": [
        "hormuz_closure",
        "ceasefire"
      ],
      "position": {},
      "asOf": "2026-05-30"
    }
  },
  {
    "id": "card.regime.oil_rates_dollar",
    "icon": "12",
    "title": "Oil-Rates-Dollar Feedback Loop (Oil-Shock Paradox)",
    "category": "Regime",
    "summary": "Energy-driven inflation → higher-for-longer rates → rising real yields → stronger dollar → suppressed gold, even as oil stays elevated on scarcity. 10Y +70bps to ~4.5%; DXY +3.12% (96.98 Feb 16 → 100.53 Mar 13); dollar–VIX reverted positive. Brent roll cost ~−110% annualized; 2027 strip <$70. The 2022 template, not 1979.",
    "metrics": [
      {
        "label": "10y yield",
        "value": "+70bps to ~4.5%"
      },
      {
        "label": "Dxy",
        "value": "+3.12% (96.98 → 100.53)"
      },
      {
        "label": "Dollar vix",
        "value": "reverted positive"
      },
      {
        "label": "Brent roll",
        "value": "~−110% annualized"
      },
      {
        "label": "Brent 2027 strip",
        "value": "<$70"
      },
      {
        "label": "Template",
        "value": "2022 monetary-override, not 1979"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "CNBC",
        "url": "https://www.cnbc.com/2026/05/20/market-correction-equities-stocks-bonds-iran-inflation.html",
        "tier": "T2"
      },
      {
        "name": "Bloomberg (dollar–VIX)",
        "url": "https://www.bloomberg.com/news/articles/2026-04-14/dollar-and-vix-are-back-in-tandem-as-iran-war-usurps-tariff-bets",
        "tier": "T2"
      },
      {
        "name": "Minneapolis Fed",
        "url": "https://www.minneapolisfed.org/article/2026/how-long-can-we-look-through-the-iran-war-commodity-shock",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "rates",
        "fx",
        "gold",
        "energy"
      ],
      "entities": [
        "fred",
        "bloomberg"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike"
      ],
      "position": {},
      "asOf": "2026-05-30"
    }
  },
  {
    "id": "card.regime.safe_haven_hierarchy",
    "icon": "13",
    "title": "Safe-Haven Hierarchy: USD Cash > Short Treasuries > Gold",
    "category": "Regime",
    "summary": "The dollar — not gold — captured the primary haven bid. ~$70.7bn into cash in a single week; ~$29bn record into short-duration Treasuries (March); North American gold ETFs −$12.7bn in March (largest in ≥5yr). Gold fell on the real-rate override despite the war, yet central banks still net-bought 243.7t in Q1 — monetary weakness, not a loss of structural bid.",
    "metrics": [
      {
        "label": "Hierarchy",
        "value": "USD cash > short Treasuries > gold"
      },
      {
        "label": "Cash week",
        "value": "~$70.7bn (single week)"
      },
      {
        "label": "Short treasury",
        "value": "~$29bn record (March)"
      },
      {
        "label": "Gold etf",
        "value": "−$12.7bn March (largest in ≥5yr); +$0.83bn April"
      },
      {
        "label": "Cb gold",
        "value": "243.7t net Q1 (structural bid intact)"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "WGC April 2026",
        "url": "https://www.gold.org/goldhub/research/gold-market-commentary-april-2026",
        "tier": "T1"
      },
      {
        "name": "Tickeron/BofA/EPFR",
        "url": "https://tickeron.com/trading-investing-101/energy-selloff-report-2026-the-biggest-outflow-since-2024--what-retail-traders-must-understand-before-the-next-trade/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "fx",
        "rates",
        "gold"
      ],
      "entities": [
        "wgc"
      ],
      "scenarios": [
        "hormuz_closure",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "winner"
      },
      "asOf": "2026-05-30"
    }
  },
  {
    "id": "card.regime.em_dollar_funding",
    "icon": "14",
    "title": "EM Stress & Dollar-Funding Squeeze",
    "category": "Regime",
    "summary": "A strong-dollar haven regime turned the energy shock into an EM funding squeeze. MSCI EM −11% March (+14.7% April rebound); EM crowding factor −1% / 4-sigma in early March as EM tech/AI momentum unwound; CDX.EM 5Y +69bps Q1. VXEEM stuck ~2× (35.30 May 28) while VIX fell below baseline — EM stress is the durable, low-noise signal. Importer FX (rupee ~94+) vs exporter (BRL +10%).",
    "metrics": [
      {
        "label": "Msci em",
        "value": "−11% March; +14.7% April"
      },
      {
        "label": "Em crowding",
        "value": "−1% / 4-sigma early March"
      },
      {
        "label": "Cdx em 5y",
        "value": "+69bps Q1"
      },
      {
        "label": "Vxeem",
        "value": "35.30 (May 28) ~2× vs VIX below baseline"
      },
      {
        "label": "Fx dispersion",
        "value": "rupee ~94+ (importer) vs BRL +10% (exporter)"
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
        "name": "FRED/CBOE VXEEMCLS",
        "url": "https://fred.stlouisfed.org/series/VXEEMCLS",
        "tier": "T1"
      },
      {
        "name": "Janus Henderson",
        "url": "https://www.janushenderson.com/en-us/investor/article/market-moves-themes-that-mattered-march-2026/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "equity",
        "sovereign-credit",
        "fx"
      ],
      "entities": [
        "msci",
        "fred"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike"
      ],
      "position": {
        "hormuz_closure": "loser"
      },
      "asOf": "2026-05-30"
    }
  }
];

export const thesis = "The conflict produced a textbook inflationary supply-shock regime in which the diversification relationships of the 2010s low-inflation era broke down, the dollar — not gold — captured the primary safe-haven bid, and volatility bifurcated by asset class. Crude volatility, not equity volatility, was the epicentre: OVX exploded from ~28 to 120.91 (>4×) while the VIX only reached 31. By late May, equity and gold vol had mean-reverted below baseline while crude and EM-equity vol stayed structurally elevated. This is the 2022 template, not the 1979 one — monetary tightening overrode the geopolitical alignment, so oil and gold decoupled and the stock-bond correlation turned positive (diversification failed) for inflationary reasons. The most reliable hedges were long-oil/long-energy-equity and long-defense; the failure mode is ceasefire whipsaw.";

export const correlationMap = [
  {
    "pair": "Oil ↔ equities (broad index)",
    "normal": "Low / weak negative",
    "stress": "Strongly positive 1990",
    "y2026": "Negative at index (S&P ~8% drawdown to ~6,316 trough Mar 30, recovery >7,400); strongly positive at energy-sector level",
    "verdict": "Flipped (index) / strengthened (sector)"
  },
  {
    "pair": "Oil ↔ inflation breakevens",
    "normal": "Positive",
    "stress": "Positive (1970s self-reinforcing)",
    "y2026": "Strongly positive — fed US CPI 3.3% (Mar), PCE 3.8% (Apr)",
    "verdict": "Strengthened"
  },
  {
    "pair": "Oil ↔ gold",
    "normal": "Mild positive (ratio ~15.9)",
    "stress": "+0.93 (1979); +0.71 weakening (2022)",
    "y2026": "Negative; one T3 est. ~−0.41 (early April)",
    "verdict": "Flipped to negative"
  },
  {
    "pair": "Oil ↔ USD / DXY",
    "normal": "Weak negative",
    "stress": "Mixed",
    "y2026": "Strongly positive — both rose as US net-exporter status made USD the haven",
    "verdict": "Flipped to positive"
  },
  {
    "pair": "Oil ↔ EM FX",
    "normal": "Negative for importers",
    "stress": "Negative",
    "y2026": "Strongly negative — MSCI EM −11% in March (then +14.7% April)",
    "verdict": "Strengthened"
  },
  {
    "pair": "Gold ↔ real rates",
    "normal": "Strong negative",
    "stress": "Broke down in 1970s",
    "y2026": "Restored strong negative — rising real yields crushed gold despite war",
    "verdict": "Strengthened (back to textbook)"
  },
  {
    "pair": "Bonds ↔ equities",
    "normal": "Negative (diversifier)",
    "stress": "Positive 1966–80; positive 2022 (>0.5)",
    "y2026": "Moved POSITIVE again — diversification failed; equities and bond prices both fall on inflation surprises",
    "verdict": "Flipped to positive"
  },
  {
    "pair": "Credit ↔ equities",
    "normal": "Positive (risk on/off)",
    "stress": "Positive",
    "y2026": "Positive but EM credit hit hardest — CDX.EM 5Y +69bps Q1",
    "verdict": "Held / strengthened (EM)"
  },
  {
    "pair": "Shipping ↔ equities",
    "normal": "Low",
    "stress": "Low",
    "y2026": "Decoupled — freight exploded independently of equity direction",
    "verdict": "Broke / idiosyncratic"
  },
  {
    "pair": "BTC ↔ gold (bridge to §10)",
    "normal": "Mild positive (BOLD thesis)",
    "stress": "n/a",
    "y2026": "Decoupled sharply; one T3 est. ~−0.88 low",
    "verdict": "Flipped negative / decoupled"
  },
  {
    "pair": "BTC ↔ equities (bridge to §10)",
    "normal": "~0.11 (2023)",
    "stress": "n/a",
    "y2026": "~0.50 — BTC traded as a liquidity/risk proxy, not a haven",
    "verdict": "Strengthened"
  }
];

export const correlationNote = "The three flips that matter most to a multi-asset book are oil↔gold (positive → negative), oil↔USD (negative → positive), and bonds↔equities (negative-for-inflationary-reasons). The common cause is the \"oil-shock paradox\": energy-driven inflation forces central banks to hold rates higher for longer, lifting real yields, strengthening the dollar, and suppressing non-yielding gold — even as the same shock keeps oil elevated on physical scarcity. This is the 2022 template, not 1979: in 1979 loose policy drove oil and gold up together (+0.93); in 2026 monetary tightening overrode the alignment. Gold↔real-rates restoring to textbook confirms 2026 gold weakness was monetary, not a loss of structural bid — central banks still net-bought 243.7t in Q1 even as Western ETF holders dumped paper gold. BTC behaviour is a bridge to Section 10 (Crypto).";

export const volRegime = [
  {
    "index": "VIX",
    "underlying": "S&P 500 implied",
    "baseline": "17.93 (Feb 25)",
    "peak": "31.05 close (Mar 27); ~35.3 intraday (Mar 9)",
    "current": "15.74 (May 28)",
    "verdict": "Mean-reverted — equity complacency restored",
    "state": "normalized"
  },
  {
    "index": "OVX",
    "underlying": "Crude-oil ETF implied",
    "baseline": "28.40 (Jan 2)",
    "peak": "120.91 (Mar 11) — >4×",
    "current": "58.30 (May 28) — ~2×",
    "verdict": "Structurally elevated",
    "state": "elevated"
  },
  {
    "index": "GVZ",
    "underlying": "Gold implied",
    "baseline": "33–38 late Feb",
    "peak": "45.51 (Mar 27)",
    "current": "24.83 (May 28)",
    "verdict": "Mean-reverted below pre-conflict",
    "state": "normalized"
  },
  {
    "index": "VXEEM",
    "underlying": "EM-equity implied",
    "baseline": "17.16 (Jan 2)",
    "peak": "40.84 (Mar 26)",
    "current": "35.30 (May 28) — ~2×",
    "verdict": "Structurally elevated",
    "state": "elevated"
  }
];

export const volNote = "The single most important volatility finding: the shock lived in the commodity complex. OVX's >4× move (28→121) dwarfed the VIX's <2× move (18→31) — crude vol led, equity vol followed at a discount. By May 28 the regime bifurcated: VIX and GVZ fell below pre-conflict baselines while OVX and VXEEM stayed ~2×. The leading-indicator implication: OVX and VXEEM, not VIX, are the durable conflict-regime gauges. Treating VIX normalization (15.74) as the regime's end is a false all-clear.";

export const termStructure = [
  {
    "curve": "Crude (Brent M1–M2)",
    "signal": "Record backwardation",
    "detail": "Prompt spread ~$0.30 → ~$9–10/bbl by mid-March (steepest since 2022); roll-yield cost ~−110% annualized; 2027 strip stayed <$70 → \"transient, not structural.\" Distillate/jet/LPG/HSFO backwardated more than crude; naphtha less — a clean substitutability map."
  },
  {
    "curve": "Gas / LNG (TTF, JKM)",
    "signal": "Backwardation with a multi-year tail",
    "detail": "TTF doubled to ~€70/MWh; JKM +68.5% to ~$25/mmBtu; forward convergence to pre-war pushed to ~Q2 2029 after Qatar's Ras Laffan damage took ~17% of LNG offline (3–5yr repair). Longer tail than crude."
  },
  {
    "curve": "Freight & fertilizer",
    "signal": "Realized-vol proxies",
    "detail": "VLCC MEG–China ~$117k → ~$423k/day (single record fixture ~$770k); urea +~80% to >$850/t. No liquid implied-vol market — treated as realized-vol proxies."
  }
];

export const termNote = "The critical caveat — a Minneapolis Fed false-comfort warning VegaReady tracks: backwardation should NOT be read as optimism about a near-term Hormuz reopening. It mostly reflects \"extreme need for oil now versus later\" (you pull oil from storage rather than store it), and high front-end vol is tamping down long-end price discovery. With as much as ~1bn barrels of lost production to refill, prices stay elevated even if Hormuz reopens. Separately the market quietly repriced the structural floor from ~$65 to ~$75–80 as it \"learned the Strait can be closed\" — a persistent geopolitical risk premium in the long end. Brent (not WTI) is the war-risk-premium instrument given direct Hormuz exposure.";

export const positioning = [
  {
    "channel": "Energy-equity ETFs",
    "data": "Record ~$5bn monthly inflow (March); +$13.5bn over three weeks; XLE +28.2% YTD",
    "tier": "T2/EPFR"
  },
  {
    "channel": "Energy reversal (ceasefire)",
    "data": "−$2.1bn weekly outflow (largest since Jul 2024); XLE −$1.0bn single day (largest in 14 yrs)",
    "tier": "T2"
  },
  {
    "channel": "Defense equities/ETFs",
    "data": "PPA +37.8%, ITA +38.3%, SHLD +47.8% (12-mo); Europe defense ETFs ~€3.0bn net YTD",
    "tier": "T2"
  },
  {
    "channel": "Short-duration Treasuries",
    "data": "Record ~$29bn into short-term government-bond funds (March)",
    "tier": "T2/EPFR"
  },
  {
    "channel": "Cash / money markets",
    "data": "~$70.7bn into cash in a single week; MMF +$47.9bn global / +$30.75bn US (single week)",
    "tier": "T2"
  },
  {
    "channel": "Western gold ETFs",
    "data": "North American gold-ETF outflows >$12.7bn in March (largest monthly redemption in ≥5 yrs)",
    "tier": "T1 (WGC)"
  },
  {
    "channel": "EM debt / equity",
    "data": "MSCI EM −11% in March (then +14.7% April); EMBI +35bps, CDX.EM 5Y +69bps Q1",
    "tier": "T2"
  },
  {
    "channel": "Gulf SWF behaviour",
    "data": "Saudi reserves $497bn (6-yr high); PIF reportedly cut intl allocation 30%→20% (PROVISIONAL); Saudi+UAE cut UST ~$16.6bn",
    "tier": "T2/T1"
  }
];

export const positioningVerdict = "The conflict produced a crowded long-energy / long-defense / long-cash / short-duration-Treasury posture, with specs fading gold and chasing equities. Gold COMEX net longs fell 21% to 504t in February (money-manager −18% to 311t); CTAs neared maximum long US equities by late May while discretionary PMs cut exposure — a crowded-long, mean-reversion-prone setup that desks (Deutsche Bank, Wellington) flagged as correction risk. The configuration is itself a leading indicator of ceasefire-whipsaw risk.";

export const hedgingPlaybook = [
  {
    "scenario": "hormuz_closure",
    "label": "Full / sustained closure",
    "tone": "#ef4444",
    "winners": "Long Brent (front), energy E&P/services (XLE, OIH), defense (ITA/SHLD), USD vs EM-importer FX, VLCC/tanker equities, TTF/JKM gas, long vol (OVX calls).",
    "losers": "EM importers (equities + FX), European industrials, airlines, long-duration Treasuries, paper gold (real-rate headwind), broad EM debt.",
    "instruments": "Brent futures/calls; OVX/energy-vol convexity; XLE/OIH; ITA/SHLD; USD/EM FX; tanker equities; TTF/JKM swaps; short EM local-currency debt.",
    "horizon": "Weeks-to-months (front-loaded); structural floor reset to ~$75–80 is multi-year.",
    "failureModes": "(a) ceasefire whipsaw — XLE's −$1.0bn single-day outflow shows how fast it unwinds; (b) backwardation roll cost (~−110% ann.) erodes naive long-futures carry; (c) pre-hedged producers (e.g. Exxon near $60) don't capture spot upside.",
    "analog": "1990 Gulf War — stocks tracked oil daily; oil to ~$40; but no recession, so the move reversed."
  },
  {
    "scenario": "oil_strike",
    "label": "Production-infrastructure damage, no full closure",
    "tone": "#f59e0b",
    "winners": "Long Brent back-end (structural-floor repricing), non-OPEC/US producers, refiners with crack exposure, defense.",
    "losers": "Gulf SWF equity portfolios, regional aviation, Iraq-exposed credits.",
    "instruments": "Longer-dated Brent calendar spreads (capture the floor reset, not just the front-end spike); US E&P; crack spreads; CDS on energy-import sovereigns.",
    "horizon": "Months-to-years (the ~1bn-barrel inventory hole and ~$75–80 floor are durable).",
    "failureModes": "Long-end vol is poorly priced (discovery \"tamped down\"); spare-capacity surprises (Saudi/UAE pipeline reroutes) can flatten the curve faster than expected.",
    "analog": "1979–80 — ~4.8 mb/d loss; oil and gold rose together (+0.93) under loose policy; the 2026 monetary regime is the key difference."
  },
  {
    "scenario": "cable_severance",
    "label": "Subsea cable / digital chokepoint disruption",
    "tone": "#22d3ee",
    "winners": "Satellite/telecom-resilience equities, cybersecurity, regional data-center operators, USD (flight-to-quality).",
    "losers": "EM equities reliant on connectivity, latency-sensitive trading P&L, regional fintech.",
    "instruments": "Thematic telecom/defense-tech ETFs; long vol on affected-region indices. Not cleanly tradeable in liquid cross-asset instruments — largely an equity-thematic and credit-spread expression.",
    "horizon": "Days-to-months (repair-vessel constrained; ~63-vessel global fleet).",
    "failureModes": "The cross-asset vol signal is weak/idiosyncratic — cable cuts rarely move VIX/MOVE, so vol-based hedges misfire. A false positive for broad-market vol.",
    "analog": "No clean financial-market analog; closest is limited regional-connectivity disruptions."
  },
  {
    "scenario": "ceasefire",
    "label": "De-escalation / Hormuz reopening",
    "tone": "#10b981",
    "winners": "Broad equities (S&P relief, +7.4% YTD), EM equities/FX rebound, long-duration Treasuries (if inflation fades), gold (real-rate headwind eases — +1.1% to $4,559 on May 25 optimism).",
    "losers": "Long-energy and long-vol (sharp unwind), defense (cyclical part), tanker spot rates.",
    "instruments": "Fade the conflict trade — short OVX, take profit on energy/defense, rotate to duration and EM; long gold on dollar softening.",
    "horizon": "Immediate (headline-driven) — ceasefire-reversal flows show day-one magnitude.",
    "failureModes": "False ceasefires are the dominant risk — the 2026 ceasefire was \"militarily in effect but not economically normalized,\" repeatedly broken; gold whipsawed back below $4,400 on May 28. De-hedged producers amplify downside.",
    "analog": "Post-1991 normalization — oil and the war premium collapsed once the outcome was discounted; \"markets discount outcomes, not headlines.\""
  }
];

export const signalQuality = [
  {
    "indicator": "OVX (crude vol)",
    "leadlag": "Leading — peaked Mar 11, ahead of Brent spot peak",
    "noise": "Low",
    "behaviour": "Cleanest conflict gauge; stayed elevated into May while VIX normalized — durable signal"
  },
  {
    "indicator": "VIX",
    "leadlag": "Coincident / lagging — peaked Mar 27",
    "noise": "Medium",
    "behaviour": "False all-clear risk: normalized to 15.74 while EM/energy risk persisted; don't treat as regime end"
  },
  {
    "indicator": "Brent backwardation (M1–M2)",
    "leadlag": "Leading on tightness, misleading on duration",
    "noise": "Medium",
    "behaviour": "Minneapolis Fed: reflects \"oil now vs later,\" not reopening optimism — a documented false-comfort signal"
  },
  {
    "indicator": "Stock–bond correlation flip",
    "leadlag": "Leading regime indicator",
    "noise": "Medium",
    "behaviour": "Flipped negative; historically preceded 2007/2015/2022 equity peaks — a genuine leading warning"
  },
  {
    "indicator": "Energy/defense ETF inflows",
    "leadlag": "Coincident, momentum-chasing",
    "noise": "High",
    "behaviour": "Record inflows immediately preceded the −$2.1bn ceasefire reversal — crowded-flow extremes are contrarian"
  },
  {
    "indicator": "Gold spot direction",
    "leadlag": "Noisy / lagging in this regime",
    "noise": "High",
    "behaviour": "Gold fell during the war (real-rate override) — \"buy gold on conflict\" was a false signal in 2026 (and 2008, 2022)"
  },
  {
    "indicator": "Gold COMEX net longs (CFTC)",
    "leadlag": "Leading (positioning)",
    "noise": "Medium",
    "behaviour": "Specs de-grossed 21% in Feb and faded the rally — correctly anticipated paper-gold weakness"
  },
  {
    "indicator": "DXY surge",
    "leadlag": "Coincident",
    "noise": "Medium",
    "behaviour": "Real but transient; FX strategists correctly called it short-lived — mean-reverting, not structural"
  },
  {
    "indicator": "MSCI EM / VXEEM",
    "leadlag": "Coincident-to-lagging",
    "noise": "Low-Medium",
    "behaviour": "−11% March drawdown (then +14.7% April) + persistent VXEEM elevation = durable, low-noise EM-stress signal"
  },
  {
    "indicator": "Freight (VLCC TD3C)",
    "leadlag": "Coincident, idiosyncratic",
    "noise": "Medium",
    "behaviour": "Pure physical-scarcity gauge; useful for Hormuz-state nowcasting, useless as a broad-market signal"
  },
  {
    "indicator": "Cable-severance → cross-asset vol",
    "leadlag": "n/a",
    "noise": "Very high",
    "behaviour": "False positive: subsea-cut events did not move VIX/MOVE; do not size vol hedges to this channel"
  }
];

export const signalVerdict = "The most reliable leading indicators were OVX, CFTC gold positioning, and the stock–bond correlation flip. The most dangerous false signals were the VIX all-clear (normalized prematurely), the \"buy gold on war\" reflex (real-rate override), and crowded energy/defense inflows (ceasefire-whipsaw prone). Backwardation was the subtlest trap — a real tightness signal routinely misread as a duration/reopening signal.";

export const dataQuality = {
  "high": "VIX/OVX/GVZ/VXEEM (CBOE via FRED, T1); Minneapolis Fed and ECB framework (T1); WGC gold-ETF −$12.7bn and COMEX positioning (T1); Brent backwardation and gas curves (Reuters/Elenger T2).",
  "moderate": "Flow micro-figures (energy $5bn, cash $70.7bn, short-Treasury $29bn) are press-derived EPFR/BofA (T2 — primary not directly accessed); DXY and freight prints (T2); PIF allocation cut PROVISIONAL/unconfirmed.",
  "quarantined": "Point correlation coefficients — oil–gold ~−0.41 and BTC–gold ~−0.88 are T3 vendor/blog estimates; only the directional flips are anchored. Brent absolute price levels are demoted to PROXY (prior aggregator removed; +55% direction via CNBC — re-anchor to EIA/exchange before production). The MOVE Treasury-vol index had no clean 2026 primary print (realized rates signal used as proxy). BTC behaviour is a bridge to Section 10 (Crypto), refreshed there against primary price data."
};

export const volSurface = [
  {
    "dimension": "Equity (VIX)",
    "w1": "31.05 close peak; +57% in week of Mar 2–9",
    "w2": "15.74 (below baseline)",
    "read": "Fully re-priced down; equity complacency"
  },
  {
    "dimension": "Crude (OVX)",
    "w1": "120.91 peak; >4×; upside-call skew to 6M",
    "w2": "58.30 (~2×)",
    "read": "Surface stayed elevated and steep — durable"
  },
  {
    "dimension": "Gold (GVZ)",
    "w1": "45.51 conflict peak",
    "w2": "24.83 (below baseline)",
    "read": "Re-priced down; monetary, not haven, driver"
  },
  {
    "dimension": "EM-equity (VXEEM)",
    "w1": "40.84 peak",
    "w2": "35.30 (~2×)",
    "read": "Sticky EM-stress surface; durable"
  },
  {
    "dimension": "Rates (MOVE)",
    "w1": "No clean 2026 primary print accessible",
    "w2": "Proxy: 10Y +70bps, global bond selloff",
    "read": "Realized signal unambiguous; implied-vol gap flagged"
  },
  {
    "dimension": "FX (DXY / VIX comove)",
    "w1": "DXY +3.12% (Feb 16→Mar 13); dollar–VIX positive",
    "w2": "DXY eased on ceasefire talk",
    "read": "USD captured haven bid; FX-vol via dollar funding"
  }
];

export const volSurfaceNote = "Section 8 documented the equity vol surface (SPX realized-skew inversion; crude upside-call skew to 6M); Section 9 generalizes it cross-asset and shows the divergent exit paths. By May 28, equity (VIX) and gold (GVZ) vol fell below baseline while crude (OVX) and EM-equity (VXEEM) stayed ~2× — OVX and VXEEM, not VIX, are the durable conflict-regime gauges.";

export const termMap = [
  {
    "curve": "Brent (M1–M2)",
    "shape": "Steep backwardation (~$9–10)",
    "duration": "Acute, transient (2027 strip <$70)",
    "substitution": "Distillate/jet/LPG/HSFO backwardated more; naphtha less"
  },
  {
    "curve": "TTF / JKM gas",
    "shape": "Backwardation, multi-year tail",
    "duration": "Longer (convergence ~Q2 2029)",
    "substitution": "Atlantic cargoes re-routed to Asia; structural Qatar loss"
  },
  {
    "curve": "VLCC freight",
    "shape": "Steep spot-to-1yr-TC backwardation (~$356k vs ~$105k)",
    "duration": "Partial normalization expected",
    "substitution": "Re-routing / Atlantic repositioning eases the squeeze"
  },
  {
    "curve": "US Treasuries",
    "shape": "Bear-flattening / selloff (10Y +70bps)",
    "duration": "Higher-for-longer",
    "substitution": "No substitute haven except USD cash"
  },
  {
    "curve": "Gold (paper vs physical)",
    "shape": "Heavy paper-ETF selling, physical premiums firm",
    "duration": "Monetary headwind, not structural",
    "substitution": "Eastern physical demand offset Western paper selling"
  }
];

export const dollarFunding = "The dollar's haven capture (oil↔USD and dollar↔VIX both flipped positive) is the channel through which the equity/commodity shock became an EM funding squeeze. MSCI EM fell −11% in March (then +14.7% in April) and the EM crowding factor's 4-sigma unwind hit EM tech/AI hardest; EM credit widened (CDX.EM 5Y +69bps Q1). Importer FX (rupee ~94+ vs USD) bore the strain while exporter EMs (Brazil, BRL +10%) outperformed. The cross-asset point: a strong-dollar regime turns an energy shock into a global liquidity tightening that EM equities (VXEEM stuck ~2× — 35.30 by May 28) and EM credit price for far longer than DM equity vol (VIX below baseline).";

export const upgradedConfidence = [
  "OVX 28.40 (Jan 2) → 120.91 peak (Mar 11) → 58.30 (May 28) — FRED/CBOE OVXCLS, verified local series (T1).",
  "VIX 17.93 (Feb 25) → 31.05 close peak (Mar 27) → 15.74 (May 28) — FRED/CBOE VIXCLS (T1).",
  "GVZ peak 45.51 (Mar 27) → 24.83 (May 28), below baseline — FRED/CBOE GVZCLS (T1).",
  "VXEEM 17.16 (Jan 2) → 40.84 peak (Mar 26) → 35.30 (May 28), ~2× — FRED/CBOE VXEEMCLS (T1).",
  "Vol bifurcation: VIX/GVZ below baseline, OVX/VXEEM ~2× by May 28 — FRED/CBOE (T1).",
  "Brent prompt spread ~$0.30 → ~$9–10/bbl (mid-March), steepest since 2022; 2027 strip <$70 — Reuters/Rigzone (T2).",
  "Minneapolis Fed: backwardation reflects \"oil now vs later,\" not reopening optimism; ~1bn-bbl lost production (T1).",
  "10Y +~70bps to ~4.5%; global bond selloff; stock-bond correlation moved POSITIVE / diversification failed — CNBC; IMF (T2/T1).",
  "Dollar–VIX reverted positive (2024 behaviour); DXY +3.12% (96.98 Feb 16 → 100.53 Mar 13) — Bloomberg; Barchart (T2).",
  "North American gold ETFs −$12.7bn March (largest redemption in ≥5yr); +$0.83bn US recovery April — WGC (T1).",
  "COMEX gold net longs −21% to 504t in February (MM −18% to 311t); specs faded the rally — WGC/CFTC COT (T1).",
  "MSCI EM −11% March, +14.7% April; EM crowding factor −1% / 4-sigma early March — MSCI (T1).",
  "TTF doubled to ~€70/MWh; JKM +68.52%; Qatar ~17% LNG offline 3–5yr; convergence ~Q2 2029 — Reuters/Elenger/S&P (T2).",
  "XLE +28.2% YTD; −$1.0bn single-day outflow (largest in 14yr); −$2.1bn weekly energy outflow (largest since Jul 2024) — Tickeron/BofA/EPFR (T2).",
  "ECB framework: supply shocks raise stock-bond correlation and cross-asset co-movement; vol-targeting amplifies sell-offs — ECB FSR Nov 2022; ECB 2020 (T1)."
];

export const proxyOnly = [
  "MOVE (Treasury implied-vol) index 2026 peak — no clean primary print; PROXY: realized rates signal (10Y +70bps). Implied-vol gap flagged.",
  "Oil–gold point coefficients (+0.93 1979, ~−0.41 2026) — single-author estimate; direction (flip negative) HIGH, point values illustrative (T3).",
  "BTC–gold ~−0.88 low / ~−0.17 1-yr — vendor estimate; report range; direction (decoupled) robust; refresh in Section 10 (T3).",
  "BTC–equity ~0.50 (2026) vs ~0.11 (2023) — press-cited, window-dependent; direction MEDIUM, coefficient LOW; refresh in Section 10.",
  "Brent series 72.48 → ~112–120/bbl — prior aggregator anchor DEMOTED to PROXY; re-anchored directionally to CNBC (~55%); use exchange/EIA before production.",
  "Energy/cash flow micro-figures ($5bn/$13.5bn/$29bn/$70.7bn) — BofA Flow Show/EPFR via press; direction robust, micro-figures MEDIUM.",
  "DXY exact intraday path (96.98 → 100.53) — Barchart futures; not a settled official FX fix (T2).",
  "VLCC fixtures (~$356k–$423k/day; ~$105k 1-yr TC) — industry advisory; unverified vs Baltic/Clarksons primary (T2).",
  "Fertilizer / gold-lease (GOFO) implied vol — no liquid implied-vol or public lease-rate stress print; realized proxies used.",
  "CDX.EM 5Y +69bps; EMBI GD +35bps — Section 2 anchors; desk-quote-derived (T2).",
  "Historical 1973–2026 oil/DJIA/gold/10Y table — aggregator compiling FRED/exchange; refresh from primary before production.",
  "Vol-control / risk-parity deleveraging magnitude — no public AUM data; ECB 2020 paper as framework only."
];

export const relatedSectors = "This is the cross-asset synthesis layer. Its upstream first-order layer is equity sector/factor rotation (/markets/equities); its downstream is Crypto beta/reflexivity (/markets/crypto). The spokes carry each slice in place: gold vol + oil-gold decoupling on /markets/gold-fx; OVX + crude backwardation on /markets/energy; the flight-to-quality rotation on /markets/credit; defense flows on /markets/defense; freight vol on /markets/insurance.";
