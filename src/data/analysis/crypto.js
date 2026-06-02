// GENERATED from IranWarTracker/data/cascades/crypto.json by scripts/build-cascades.cjs.
// DO NOT EDIT BY HAND. Edit the canonical JSON and re-run: node scripts/build-cascades.cjs

export const cards = [
  {
    "id": "card.crypto.downstream_beta",
    "icon": "01",
    "title": "Crypto as the Final Downstream Risk-Asset/Reflexivity Layer",
    "category": "Regime",
    "summary": "Crypto inherited the §8 equity beta and §9 cross-asset regime, not the haven hierarchy. BTC↔equity ~0.50 (2026) vs ~0.0–0.11 pre-2020/2023; correlation rises in stress, so the diversification case fails. Causal chain: physical (§1–7) → equity rotation (§8) → cross-asset regime (§9) → crypto beta (§10).",
    "metrics": [
      {
        "label": "Btc equity corr",
        "value": "~0.50 (2026) vs ~0.11 (2023)"
      },
      {
        "label": "Btc YTD",
        "value": "~−11%"
      },
      {
        "label": "Eth YTD",
        "value": "~−36.3%"
      },
      {
        "label": "Dominance",
        "value": "~59.9% (risk-off tell)"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "Morningstar (BTC haven vs risk)",
        "url": "https://www.morningstar.com/alternative-investments/haven-or-high-risk-decoding-bitcoins-unstable-market-role",
        "tier": "T2"
      },
      {
        "name": "Conlon & McGee 2020",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7246008/",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "crypto",
        "equity"
      ],
      "entities": [
        "morningstar"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "loser"
      },
      "asOf": "2026-05-31"
    }
  },
  {
    "id": "card.crypto.safe_haven_test",
    "icon": "02",
    "title": "BTC Safe-Haven vs Risk-Asset Test",
    "category": "Regime",
    "summary": "Tested across five comparators (equities, gold, DXY, VIX/OVX, 10Y): BTC behaved as a high-beta risk/liquidity asset, NOT digital gold — it sold off on the shock, converged to equities, lagged gold, ran inverse to the haven dollar, and de-risked through ETF outflows. The brief March BTC>gold move was a risk-on relief, not a haven bid, and reversed.",
    "metrics": [
      {
        "label": "Verdict",
        "value": "high-beta risk, not a haven"
      },
      {
        "label": "Vs equities",
        "value": "converged ~0.50"
      },
      {
        "label": "Vs gold",
        "value": "decoupled; gold took the bid"
      },
      {
        "label": "Vs dxy",
        "value": "inverse to the haven dollar"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "Morningstar",
        "url": "https://www.morningstar.com/alternative-investments/haven-or-high-risk-decoding-bitcoins-unstable-market-role",
        "tier": "T2"
      },
      {
        "name": "KuCoin/MetaEra",
        "url": "https://www.kucoin.com/news/flash/bitcoin-not-a-safe-haven-asset-but-gaining-crisis-utility",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "crypto",
        "gold"
      ],
      "entities": [
        "morningstar",
        "cme"
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
    "id": "card.crypto.stablecoin_rails",
    "icon": "03",
    "title": "Stablecoins as Shadow Dollar Rails",
    "category": "Plumbing",
    "summary": "The one structural non-price story: stablecoin supply GREW through the stress to a record ~$322.5bn (>98% USD-pegged), moving >$10tn in January alone — a parallel dollar-liquidity layer that routes value outside SWIFT. No systemic conflict depeg. Concentration (USDT+USDC ~85%) is the real tail, not a war headline.",
    "metrics": [
      {
        "label": "Supply",
        "value": "~$322.5bn (May 26)"
      },
      {
        "label": "Throughput",
        "value": ">$10tn/month (Jan)"
      },
      {
        "label": "Usdt",
        "value": "~$189.4bn (58.7%)"
      },
      {
        "label": "Split",
        "value": "USDC +$2bn / USDT −$3bn Q1"
      },
      {
        "label": "Concentration",
        "value": "USDT+USDC ~85%"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "CoinMarketCap/CEX.IO",
        "url": "https://coinmarketcap.com/academy/article/dollar315b-stablecoin-supply-hits-record-as-usdc-gains",
        "tier": "T2"
      },
      {
        "name": "Cryptonomist",
        "url": "https://en.cryptonomist.ch/2026/05/26/stablecoin-market-capitalization-322-5b-record/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "crypto",
        "stablecoins"
      ],
      "entities": [
        "tether",
        "circle"
      ],
      "scenarios": [
        "hormuz_closure",
        "cable_severance"
      ],
      "position": {
        "hormuz_closure": "winner",
        "cable_severance": "winner"
      },
      "asOf": "2026-05-31"
    }
  },
  {
    "id": "card.crypto.market_structure",
    "icon": "04",
    "title": "Crypto Market-Structure Stress",
    "category": "Signal",
    "summary": "Deleveraged, short-biased microstructure: BTC futures OI flushed ~$61→$49bn (−20%), CME OI a 14-mo low (~$7.2bn), funding negative despite rallies — the crypto analogue of §9 specs fading the rally. ~$1bn longs liquidated May 27. The binding fragility precedent is the Oct-2025 $19.16bn cascade (CEX is the fragility; the chains held).",
    "metrics": [
      {
        "label": "Oi flush",
        "value": "~$61bn → ~$49bn (−20%)"
      },
      {
        "label": "Cme oi",
        "value": "14-mo low ~$7.2bn"
      },
      {
        "label": "Funding",
        "value": "negative despite +14% rally"
      },
      {
        "label": "May27 liq",
        "value": "~$1bn longs"
      },
      {
        "label": "Oct2025",
        "value": "$19.16bn cascade (floor)"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "MetaMask/VanEck",
        "url": "https://metamask.io/news/bitcoin-futures-trading-in-2026",
        "tier": "T2"
      },
      {
        "name": "CoinGlass via CryptoRank",
        "url": "https://cryptorank.io/insights/analytics/crypto-market-crash-2025-10-11-overview",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "crypto"
      ],
      "entities": [
        "binance",
        "cme",
        "deribit"
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
    "id": "card.crypto.defi_oracle",
    "icon": "05",
    "title": "DeFi, Oracle & Liquidation Risk",
    "category": "Regime",
    "summary": "No confirmed conflict-specific DeFi/oracle failure in 2026 — chains held. The structural lesson is Oct-2025: oracle-propagation + cross-margin + ADL turned one venue's dislocation into a portfolio-wide cascade. RWA tokenization accelerated through the stress (~$51.4bn, +340% YoY; DeFi TVL ATH ~$183.4bn) — tokenized T-bills are a more stable collateral than volatile crypto.",
    "metrics": [
      {
        "label": "Defi 2026",
        "value": "no confirmed failure"
      },
      {
        "label": "Oct2025 proxy",
        "value": "oracle-propagation + cross-margin + ADL"
      },
      {
        "label": "Rwa",
        "value": "~$51.4bn (+340% YoY)"
      },
      {
        "label": "Tvl ath",
        "value": "~$183.4bn (Mar 7)"
      },
      {
        "label": "Exch btc",
        "value": "~5-yr low (~2.16M coins)"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "FTI Consulting",
        "url": "https://www.fticonsulting.com/insights/articles/crypto-crash-october-2025-leverage-met-liquidity",
        "tier": "T2"
      },
      {
        "name": "RWA.xyz via iBuidl",
        "url": "https://ibuidl.org/blog/rwa-tokenization-50b-institutional-20260310",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "crypto",
        "defi"
      ],
      "entities": [
        "chainlink"
      ],
      "scenarios": [
        "cable_severance",
        "hormuz_closure"
      ],
      "position": {},
      "asOf": "2026-05-31"
    }
  },
  {
    "id": "card.crypto.mining_energy",
    "icon": "06",
    "title": "Mining & Energy-Cost Sensitivity",
    "category": "Dynamic",
    "summary": "The one crypto channel with a direct physical-energy link (§1–7). Iran's hashrate collapsed ~9→2 EH/s (−77%) as conflict energy disruption hit; UAE/Oman (~3% each) undisrupted. Global hashrate −5.8% QoQ; six difficulty cuts; hashprice ~$33/PH/s/day at breakeven. Electricity is 60–80% of opex — a +$0.02/kWh move is the comfortable-vs-marginal line.",
    "metrics": [
      {
        "label": "Iran",
        "value": "~9→2 EH/s (−77%)"
      },
      {
        "label": "Global hashrate",
        "value": "1,066→1,004 EH/s (−5.8% QoQ)"
      },
      {
        "label": "Difficulty",
        "value": "6 cuts in 2026"
      },
      {
        "label": "Hashprice",
        "value": "~$33/PH/s/day"
      },
      {
        "label": "Breakeven",
        "value": "~$0.10/kWh (sub-15 J/TH)"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "Binance Square/Hashrate Index",
        "url": "https://www.binance.com/en/square/post/310260451875905",
        "tier": "T2"
      },
      {
        "name": "Hashrate Index",
        "url": "https://hashrateindex.com/blog/hashrate-index-roundup-april-13-2026/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "crypto",
        "mining",
        "energy"
      ],
      "entities": [
        "iran",
        "uae",
        "oman"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike"
      ],
      "position": {
        "hormuz_closure": "loser",
        "oil_strike": "loser"
      },
      "asOf": "2026-05-31"
    }
  },
  {
    "id": "card.crypto.sanctions",
    "icon": "07",
    "title": "Sanctions, Compliance & Reflexivity",
    "category": "Risk",
    "summary": "Crypto's sharpest, best-sourced (T1) signals. Tether froze ~$344.15M USDT across two Tron wallets (Apr 23); OFAC designated the CBI wallets (Apr 24) — the largest on-chain freeze of Iranian sovereign crypto on record. The verdict: stablecoins are NOT a viable long-run evasion tool (Tether reports >$4.4bn frozen across 5,000+ wallets). A SDNY suit now contests the freeze's finality.",
    "metrics": [
      {
        "label": "Freeze",
        "value": "$344.15M USDT (Apr 23)"
      },
      {
        "label": "OFAC",
        "value": "CBI SDN designation (Apr 24)"
      },
      {
        "label": "Iran assets",
        "value": "~$7.7bn (T2 est.)"
      },
      {
        "label": "Tether frozen total",
        "value": ">$4.4bn / 5,000+ wallets"
      },
      {
        "label": "Contest",
        "value": "Gerstein SDNY suit (May)"
      }
    ],
    "confidence": "high",
    "sources": [
      {
        "name": "Tether",
        "url": "https://tether.io/news/tether-supports-freeze-of-more-than-344-million-in-usdt-in-coordination-with-ofac-and-u-s-law-enforcement/",
        "tier": "T1"
      },
      {
        "name": "TRM Labs",
        "url": "https://www.trmlabs.com/resources/blog/ofac-sanctions-crypto-addresses-associated-with-the-central-bank-of-iran-freezes-usd-344-million",
        "tier": "T2"
      },
      {
        "name": "Chainalysis",
        "url": "https://www.chainalysis.com/blog/central-bank-of-iran-designation-ofac-update-april-2026/",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "crypto",
        "stablecoins"
      ],
      "entities": [
        "tether",
        "ofac",
        "iran",
        "chainalysis",
        "trm"
      ],
      "scenarios": [
        "hormuz_closure",
        "cable_severance"
      ],
      "position": {},
      "asOf": "2026-05-31"
    }
  },
  {
    "id": "card.crypto.institutional_flows",
    "icon": "08",
    "title": "Institutional Crypto Flows",
    "category": "Dynamic",
    "summary": "The cleanest confirmation crypto was de-risked as a risk asset: US spot BTC ETFs flipped from ~$2.44bn April inflows to >$4bn outflows since May — a $733.4M single-day on May 27 (IBIT −$527.8M), dragging AUM below $100bn. Deribit skew −5%/−7% (defensive, not panic). Adoption bifurcated: price-exposure slowed, infrastructure (RWA, CME 24/7, regulated rails) accelerated.",
    "metrics": [
      {
        "label": "May outflows",
        "value": ">$4bn since early May"
      },
      {
        "label": "May27",
        "value": "$733.4M single-day (IBIT −$527.8M)"
      },
      {
        "label": "Aum",
        "value": "below $100bn to ~$97bn"
      },
      {
        "label": "Skew",
        "value": "−5%/−7% (Deribit)"
      },
      {
        "label": "Cumulative",
        "value": "~$58.72bn since 2024 launch"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "Intellectia/SoSoValue",
        "url": "https://intellectia.ai/blog/bitcoin-etf-flows-2026-analysis",
        "tier": "T2"
      },
      {
        "name": "Deribit Insights",
        "url": "https://insights.deribit.com/industry/crypto-derivatives-analytics-report-week-21-2026/",
        "tier": "T1"
      }
    ],
    "tags": {
      "assetClass": [
        "crypto",
        "equity"
      ],
      "entities": [
        "blackrock",
        "deribit"
      ],
      "scenarios": [
        "hormuz_closure",
        "oil_strike",
        "cable_severance",
        "ceasefire"
      ],
      "position": {
        "hormuz_closure": "loser",
        "ceasefire": "winner"
      },
      "asOf": "2026-05-31"
    }
  },
  {
    "id": "card.crypto.equity_bridge",
    "icon": "09",
    "title": "Crypto-Equity Bridge (§8 → §10)",
    "category": "Signal",
    "summary": "The explicit junction with equities: Coinbase (COIN) carries exchange/custody/ETF-settlement beta; MicroStrategy (MSTR) is a levered BTC proxy; public miners add energy-opex beta. All trade WITHIN the §8 equity tape — they fell in W1 risk-off and recovered with the Nasdaq, amplifying BTC's move. Beta structure is the claim; discrete conflict-window returns are proxy.",
    "metrics": [
      {
        "label": "Coin",
        "value": "exchange + custody + ETF-settlement beta"
      },
      {
        "label": "Mstr",
        "value": "levered BTC proxy (NAV + convert leverage)"
      },
      {
        "label": "Miners",
        "value": "BTC + energy-opex + equity beta"
      },
      {
        "label": "Returns",
        "value": "proxy/directional"
      }
    ],
    "confidence": "medium",
    "sources": [
      {
        "name": "Section 8 (Global Equities)",
        "url": "/markets/equities",
        "tier": "T2"
      },
      {
        "name": "Section 9 (Cross-Asset)",
        "url": "/markets/cross-asset",
        "tier": "T2"
      }
    ],
    "tags": {
      "assetClass": [
        "crypto",
        "equity"
      ],
      "entities": [
        "coinbase"
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

export const keyTakeaways = [
  {
    "n": 1,
    "claim": "BTC inherited the §8 equity beta, not the §9 haven hierarchy.",
    "anchor": "~0.50 equity corr (vs ~0.0–0.11 pre-2020)"
  },
  {
    "n": 2,
    "claim": "The shock sold BTC — it did not bid it.",
    "anchor": "−3–9% on Feb-28; gold/USD/short-USTs took the bid"
  },
  {
    "n": 3,
    "claim": "At quarter scale, crypto was a risk asset.",
    "anchor": "BTC ~−11% YTD · ETH ~−36.3% YTD"
  },
  {
    "n": 4,
    "claim": "The conflict hit a pre-deleveraged market — the leverage flush led the headlines.",
    "anchor": "OI −20% ($61→$49bn); funding negative"
  },
  {
    "n": 5,
    "claim": "Stablecoins behaved as dollar infrastructure, growing through the stress.",
    "anchor": "$315bn → $322.5bn; no conflict depeg"
  },
  {
    "n": 6,
    "claim": "The sharpest, best-sourced (T1) signal was the sanctions rail, not the price.",
    "anchor": "$344.15M USDT freeze (Apr 23)"
  },
  {
    "n": 7,
    "claim": "Energy transmission was real — in mining, the one direct §1–7 link.",
    "anchor": "Iran hashrate −77% (9→2 EH/s)"
  },
  {
    "n": 8,
    "claim": "Institutional flows confirmed de-risking, not haven accumulation.",
    "anchor": ">$4bn ETF outflows; $733.4M single-day (May 27)"
  },
  {
    "n": 9,
    "claim": "Options priced tail fear without broad-vol panic — the §9 bifurcation analogue.",
    "anchor": "skew −5%/−7%; ATM IV 35%/43%"
  },
  {
    "n": 10,
    "claim": "Fragility lives in CEX market structure, not the chains; the lesson is Oct-2025.",
    "anchor": "$19.16bn cascade (a conservative floor)"
  }
];

export const scenarioRegime = [
  {
    "dim": "§8/§9 regime inherited",
    "hormuz_closure": "Stagflation bear; correlations max; OVX/VXEEM lead, USD haven",
    "oil_strike": "Bifurcated; energy infra wins; rates higher-for-longer",
    "cable_severance": "Cyber/AI premium; weak cross-asset vol signal (false positive)",
    "ceasefire": "Risk-on reversal; correlations relax; ceasefire whipsaw"
  },
  {
    "dim": "BTC direction",
    "hormuz_closure": "Down first (risk-off flush, ETF outflows), then choppy; no haven bid — repeats Feb-28 ~3–9% intraday drop",
    "oil_strike": "Down/sideways; oil-floor reset → inflation → higher-for-longer → risk-asset headwind",
    "cable_severance": "Mixed/idiosyncratic; possible bid on banking-isolation narrative, capped by execution/connectivity risk",
    "ceasefire": "Relief bounce (late-May ~$72.4k→$74k); fades fast on false ceasefires"
  },
  {
    "dim": "ETH / high-beta L1 (SOL)",
    "hormuz_closure": "Higher-beta down than BTC (fell ~5% vs ~3% Feb-28; ETH −36.3% YTD); SOL/alt-L1 worst",
    "oil_strike": "ETH underperforms BTC (thinner ETF flows, weak ETH/BTC ratio); SOL DeFi-gas-sensitive",
    "cable_severance": "ETH/L2 most exposed to sequencer/oracle geographic concentration",
    "ceasefire": "Sharper relief beta; SOL/alt-L1 lead a risk-on bounce"
  },
  {
    "dim": "Stablecoin stress",
    "hormuz_closure": "Supply grows (synthetic-dollar demand in stressed corridors); peg held in 2026",
    "oil_strike": "Supply grows; UST-backed reserves benefit from higher T-bill yields",
    "cable_severance": "HIGHEST theoretical stress: settlement-rail demand vs on/off-ramp connectivity risk",
    "ceasefire": "Marginal supply softening; less evasion/flight demand"
  },
  {
    "dim": "CEX vs DEX / microstructure",
    "hormuz_closure": "OI compresses, funding negative, liquidations cluster at round numbers ($60k, $72–73k); depth thins",
    "oil_strike": "OI low/rebuilding (~$49→$50bn), negative funding despite rallies",
    "cable_severance": "Regional CEX (Gulf/Asia) most cable-route-dependent; DEX/L1 historically more resilient (Oct-2025)",
    "ceasefire": "OI rebuilds, funding normalizes, basis re-engages"
  },
  {
    "dim": "DeFi / oracle risk",
    "hormuz_closure": "Oracle-propagation + cross-margin cascade risk IF a CEX dislocates (Oct-2025 template); chains held",
    "oil_strike": "Lending-protocol liquidation risk rises with collateral vol; RWA/T-bill collateral relatively stable",
    "cable_severance": "Sequencer/oracle geographic concentration is the live tail; no confirmed 2026 incident",
    "ceasefire": "Risk recedes; TVL/RWA growth resumes"
  },
  {
    "dim": "Mining / energy cost",
    "hormuz_closure": "Hashprice squeezed; high-energy-cost miners (Iran ~−77%) offline; difficulty adjusts down (6 cuts)",
    "oil_strike": "Energy-price floor reset raises miner opex globally; AI-datacenter pivot accelerates",
    "cable_severance": "Negligible direct mining effect",
    "ceasefire": "Energy eases; hashrate/hashprice recover"
  },
  {
    "dim": "Regulatory / sanctions",
    "hormuz_closure": "OFAC/Tether freezes intensify (the $344M template); secondary-sanctions risk for Gulf/Asia VASPs",
    "oil_strike": "Sustained enforcement; FinCEN/OFAC stablecoin AML NPRM tightens",
    "cable_severance": "Cyber/illicit-finance scrutiny rises",
    "ceasefire": "Reduced evasion flows; paradoxically concentrates enforcement on residual flows"
  },
  {
    "dim": "Beneficiaries",
    "hormuz_closure": "Stablecoin issuers (UST yield), USD, compliance/analytics (Chainalysis/TRM/Elliptic), DEX/L1 resilience",
    "oil_strike": "Tokenized T-bills/RWA, low-cost renewable miners, CME/regulated venues",
    "cable_severance": "Compliant Gulf VASPs (VARA/ADGM/DIFC), settlement-rail infra, satellite/redundant connectivity",
    "ceasefire": "Broad crypto beta, ETH, alt-L1s, leveraged longs, basis traders"
  },
  {
    "dim": "Losers",
    "hormuz_closure": "Leveraged longs, high-energy miners, EM-corridor exchanges, Iranian crypto sector",
    "oil_strike": "Inefficient miners, ETH relative to BTC, ETF holders expecting a hedge",
    "cable_severance": "Latency-sensitive HFT, regional fintech, connectivity-dependent CEX",
    "ceasefire": "Long-vol/put holders, shorts, conflict-hedge trades"
  },
  {
    "dim": "Time horizon",
    "hormuz_closure": "Days–weeks (shock); leverage flush is immediate",
    "oil_strike": "Months (structural oil-floor + macro)",
    "cable_severance": "Days–months (repair-vessel constrained)",
    "ceasefire": "Immediate (headline-driven), reverses on false ceasefires"
  }
];

export const crossAssetCompare = [
  {
    "asset": "BTC",
    "w1": "Fell ~3–9% on Feb-28; bounced on de-escalation",
    "w2": "~$72.4–74k; −5.5% on the week into May 27",
    "ytd": "~−11%",
    "verdict": "High-beta risk / liquidity asset"
  },
  {
    "asset": "ETH",
    "w1": "Fell ~5% Feb-28; broke <$2,100 in May",
    "w2": "~$2,104",
    "ytd": "~−36.3%",
    "verdict": "Highest-beta majors; DeFi/gas-sensitive"
  },
  {
    "asset": "SOL / alt-L1",
    "w1": "Amplified ETH down (proxy)",
    "w2": "Lagged BTC (proxy)",
    "ytd": "Underperformed (proxy)",
    "verdict": "Highest-beta; BTC-dominance drag"
  },
  {
    "asset": "Gold (§1/§9)",
    "w1": "Took primary haven bid; later real-rate-pressured",
    "w2": "~$4,391–4,559",
    "ytd": "Outperformed BTC substantially",
    "verdict": "Actual safe-haven"
  },
  {
    "asset": "Nasdaq/S&P (§8)",
    "w1": "S&P max drawdown ~−8% to 6,316 (Mar 30); recovered",
    "w2": "New highs >7,400",
    "ytd": "+7.4% (S&P)",
    "verdict": "BTC↔equity ~0.50 — crypto's true peer"
  },
  {
    "asset": "DXY (§9)",
    "w1": "+3.12% surge to 100.53 (Mar 13) — the haven",
    "w2": "Easing",
    "ytd": "Captured the bid BTC did not",
    "verdict": "BTC inverse to USD strength"
  },
  {
    "asset": "OVX/VIX/VXEEM (§9)",
    "w1": "OVX 28→120.91; VIX 18→31.05; VXEEM →40.84",
    "w2": "OVX ~58 / VIX 15.74 / VXEEM 35.30",
    "ytd": "Crude/EM vol the epicentre",
    "verdict": "BTC vol followed VIX path, not durable energy/EM stress"
  }
];

export const havenTest = [
  {
    "comparator": "vs Nasdaq/equities (§8)",
    "haven": "Decouple, low correlation",
    "btc": "Converged — BTC↔equity ~0.50 vs ~0 pre-2020; moves in tandem when liquidity tightens",
    "provable": "Direction HIGH; exact 0.50 is T2/T3 illustrative"
  },
  {
    "comparator": "vs Gold (§1/§9)",
    "haven": "Track gold's haven bid",
    "btc": "Decoupled; gold took the bid, BTC lagged YTD; brief March outperformance reversed",
    "provable": "Direction HIGH; −0.88 point coeff is T3 (do not anchor)"
  },
  {
    "comparator": "vs DXY (§9)",
    "haven": "Haven assets often fall with strong USD",
    "btc": "Inverse to the +3.12% DXY haven surge; USD captured the bid BTC did not",
    "provable": "Direction HIGH"
  },
  {
    "comparator": "vs VIX / OVX (§9)",
    "haven": "Vol-insensitive",
    "btc": "Sold off and funding turned negative as VIX spiked; BTC vol followed the VIX path (mean-reverted), not the durable OVX/VXEEM path",
    "provable": "Direction HIGH; BTC-IV↔VIX point coeff not computed (LOW)"
  },
  {
    "comparator": "vs Real rates / 10Y (§9)",
    "haven": "—",
    "btc": "Fell with the higher-for-longer regime and the May bond selloff; behaved as a long-duration risk asset",
    "provable": "Direction MEDIUM"
  }
];

export const stablecoinsTable = [
  {
    "coin": "USDT (Tether)",
    "supply": "~$189.4bn (~58.7%)",
    "mechanism": "Fiat/UST-reserve",
    "behaviour": "Slight Q1 decline (~−$3bn); the sanctions-freeze instrument (~$344.15M Iran freeze); dominant in EM/Gulf-Asia corridors"
  },
  {
    "coin": "USDC (Circle)",
    "supply": "~$76.4bn",
    "mechanism": "Fiat/UST-reserve, GENIUS/MiCA-aligned",
    "behaviour": "Q1 growth (~+$2bn); preferred regulated/institutional rail"
  },
  {
    "coin": "DAI / USDS (Sky)",
    "supply": "Smaller",
    "mechanism": "Over-collateralized + RWA",
    "behaviour": "Held peg; RWA backing benefited from T-bill yields"
  },
  {
    "coin": "FDUSD",
    "supply": "Smaller",
    "mechanism": "Fiat-reserve (Binance corridor)",
    "behaviour": "Liquidity-venue token; no 2026 depeg event"
  },
  {
    "coin": "USDe (Ethena)",
    "supply": "Yield/synthetic (delta-hedged)",
    "mechanism": "Algorithmic-adjacent",
    "behaviour": "The 2025 cautionary tale: depegged to ~$0.65 on Binance ONLY (Oct 10, 2025 venue dislocation, held 1:1 on-chain) — not a 2026 conflict event"
  }
];

export const namedVenues = [
  {
    "venue": "CME",
    "role": "Regulated futures/options",
    "data": "OI 14-mo low (~$7.2bn, Mar contract, early Apr); 24/7 BTC futures/options launch reported May 29 (T2 pending direct CME notice)",
    "tier": "T1/T2"
  },
  {
    "venue": "CBOE",
    "role": "Vol indices / options",
    "data": "Source of VIX/OVX/GVZ/VXEEM (§9) used as the crypto risk-regime backdrop",
    "tier": "T1"
  },
  {
    "venue": "Coinbase (COIN)",
    "role": "US CEX, ETF custodian",
    "data": "Projected to open lower on Feb-28 risk-off; ETF settlement backbone",
    "tier": "T2"
  },
  {
    "venue": "Binance",
    "role": "Largest CEX/perps",
    "data": "Funding-interval announcements (Mar); Oct-2025 Unified-Account oracle-dislocation epicentre (precedent)",
    "tier": "T1/T2"
  },
  {
    "venue": "OKX / Bybit",
    "role": "Global perps",
    "data": "Part of the negative-funding/OI-compression complex; Bybit ADL precedent Oct-2025",
    "tier": "T2/T3"
  },
  {
    "venue": "Deribit",
    "role": "Options dominant",
    "data": "Week-21 skew −5%/−7%, ATM IV 35%/43%; ~$1.59bn BTC options expiry May 22",
    "tier": "T1"
  },
  {
    "venue": "Kaiko / CCData / CoinGlass",
    "role": "Data providers",
    "data": "Order-book depth, funding, OI, liquidations (provider data — T2, NOT primary)",
    "tier": "T2"
  }
];

export const signalHierarchy = [
  {
    "order": "1 (first)",
    "metric": "Spot BTC/ETH price + ETF flows",
    "leadlag": "Coincident with headlines",
    "behaviour": "Same-day to strike/ceasefire news (Feb-28 drop; May-27 $733M outflow; May-29 rebound)",
    "refresh": "Low-latency (intraday)"
  },
  {
    "order": "2",
    "metric": "Perp funding / OI",
    "leadlag": "Coincident-to-leading",
    "behaviour": "Negative funding + OI compression PRECEDED the worst headlines",
    "refresh": "Low-latency (hourly)"
  },
  {
    "order": "3",
    "metric": "Options skew (Deribit)",
    "leadlag": "Leading on fear",
    "behaviour": "25-delta skew turned negative (−5%/−7%) before ATM IV moved — earliest fear tell",
    "refresh": "Low-latency (intraday)"
  },
  {
    "order": "4",
    "metric": "Upstream §9 gauges (OVX, DXY, 10Y, VXEEM)",
    "leadlag": "Leading (physical→crypto)",
    "behaviour": "OVX/dollar/rates moved BEFORE crypto re-priced",
    "refresh": "Daily (already in §9)"
  },
  {
    "order": "5",
    "metric": "Mining hashrate / difficulty",
    "leadlag": "Lagging (days–weeks)",
    "behaviour": "Iran −77%, network −5.8% QoQ; difficulty cuts trailed the energy shock",
    "refresh": "Daily/weekly"
  },
  {
    "order": "6",
    "metric": "Stablecoin supply / on-chain flows",
    "leadlag": "Slow-moving structural",
    "behaviour": "Grew through stress; sanctioned-flow shifts are the leading evasion tell",
    "refresh": "Daily"
  },
  {
    "order": "7 (slowest)",
    "metric": "Sanctions / regulatory actions",
    "leadlag": "Lagging policy response",
    "behaviour": "$344M freeze (Apr 23) came ~8 weeks after the Feb-28 shock",
    "refresh": "Event-driven"
  }
];

export const leadingIndicators = [
  {
    "indicator": "OVX / Brent backwardation (§9)",
    "detail": "Cleanest upstream conflict gauge; OVX >~60 + steep Brent M1–M2 backwardation = expect BTC beta-down + negative funding."
  },
  {
    "indicator": "DXY / dollar–VIX positive regime (§9)",
    "detail": "BTC is inverse to dollar haven strength; a DXY surge is a BTC headwind, NOT a crypto-haven trigger."
  },
  {
    "indicator": "US 10Y / stock–bond positive correlation (§9)",
    "detail": "Higher-for-longer = BTC (high-beta, long-duration) headwind; the stock–bond flip is a regime warning that applies to BTC."
  },
  {
    "indicator": "VXEEM / EM funding squeeze (§9)",
    "detail": "Durable EM stress is the low-noise risk signal; BTC is a global risk thermometer that tracks it."
  },
  {
    "indicator": "Deribit 25-delta skew",
    "detail": "Earliest crypto-native fear signal; skew deeply negative while ATM IV stays low = controlled-hedging regime."
  },
  {
    "indicator": "ETF flow prints (SoSoValue)",
    "detail": "Real-time institutional sentiment; multi-day outflow streaks (>$500M/day) = de-risking, not rotation."
  },
  {
    "indicator": "On-chain sanctioned-flow trackers (TRM/Chainalysis)",
    "detail": "The leading tell for the sanctions-rail scenario; declining flagged-address flow can front-run a diplomatic deal."
  },
  {
    "indicator": "Stablecoin supply + USDT/USDC split",
    "detail": "Rising supply in stress = synthetic-dollar demand; a USDT-specific redemption is the systemic tail."
  },
  {
    "indicator": "Hashprice + regional power prices (§6/§8)",
    "detail": "Energy-cost margin compression for exposed miners."
  }
];

export const scenarioTrades = [
  {
    "scenario": "hormuz_closure",
    "label": "Full / sustained closure",
    "tone": "#ef4444",
    "text": "SHORT BTC/ETH/high-beta-L1 beta (perp/futures); SHORT ETH/BTC ratio; SHORT public-miner equity (BTC-down + power-up double hit); LONG USDT/USDC supply-growth thesis; LONG compliance/analytics exposure; LONG-VOL via cheap Deribit puts BEFORE skew steepens. Failure mode: false-ceasefire whipsaw."
  },
  {
    "scenario": "oil_strike",
    "label": "Infrastructure damage, no closure",
    "tone": "#f59e0b",
    "text": "Sustained SHORT/underweight BTC/ETH on higher-for-longer; ETH UNDERPERFORM vs BTC (relative value); LONG tokenized-T-bill/RWA collateral stability; BASIS: expect CME basis to stay compressed (low carry)."
  },
  {
    "scenario": "cable_severance",
    "label": "Digital chokepoint disruption",
    "tone": "#22d3ee",
    "text": "DO NOT size a broad crypto-vol hedge (false positive — §8/§9 show cable cuts don't move VIX/MOVE); instead monitor regional CEX connectivity, L2 sequencer/oracle geographic concentration, and stablecoin on/off-ramp stress; relative-value LONG DEX/L1 resilience vs regional CEX."
  },
  {
    "scenario": "ceasefire",
    "label": "De-escalation / Hormuz reopens",
    "tone": "#10b981",
    "text": "Tactical LONG BTC/ETH/SOL relief bounce (the $72.4k→$74k template); LONG ETH/BTC and alt-L1 beta for sharper recovery; FADE QUICKLY — symmetric to §8/§9 ceasefire-whipsaw (XLE −$1.0bn single-day outflow shows the magnitude)."
  }
];

export const failureModes = [
  "\"Buy BTC on conflict\" — failed in 2026, 2022, 2008, 2020; BTC sold off and lagged gold.",
  "March BTC>gold outperformance — a risk-on relief move, not a haven bid; it reversed.",
  "Cable-severance → crypto vol — historically negligible cross-asset vol impact (§8/§9).",
  "Stablecoin growth = \"flight to crypto\" — it is dollar-liquidity demand (synthetic dollars), not crypto risk-appetite.",
  "CME 24/7 / RWA growth as price-bullish — structural adoption, not a directional price signal.",
  "Single-CEX liquidation totals — lower bounds; do not trade off headline liquidation prints.",
  "Vendor point correlations (0.50 / −0.88) — unstable by construction; trade the direction/regime, not the coefficient."
];

export const sourceConflict = [
  {
    "figure": "BTC return sign over the conflict",
    "contested": "−11% YTD (scenario) vs +17% \"since conflict start\" (Morningstar)",
    "issue": "Different windows/baselines; both agree BTC is a risk asset whose equity correlation rises in stress",
    "anchor": "Resolve with a single CF Benchmarks BRTI window; carry scenario YTD internally",
    "tier": "T2 conflict"
  },
  {
    "figure": "BTC↔gold correlation",
    "contested": "~−0.88 low; −0.17 1-yr",
    "issue": "Vendor (CryptoQuant-class); window-dependent",
    "anchor": "Direction (decoupled) HIGH; coefficient illustrative",
    "tier": "T3"
  },
  {
    "figure": "BTC↔equity correlation",
    "contested": "~0.50 (2026) vs 0.11 (2023)",
    "issue": "60-day range −0.5 to 0.8 → unstable by construction",
    "anchor": "Direction (risk-proxy) HIGH; coefficient MEDIUM",
    "tier": "T2/T3"
  },
  {
    "figure": "BTC intraday conflict prints",
    "contested": "$63k Feb-28; $71.8k Mar-10; $72.4k May-27",
    "issue": "CoinGecko/CMC/press; venue-varying wicks",
    "anchor": "CF Benchmarks BRTI / CoinMetrics reference rate",
    "tier": "T2"
  },
  {
    "figure": "SOL / alt-L1 conflict prints",
    "contested": "Not independently sourced",
    "issue": "No provider-quality discrete prints in open data",
    "anchor": "Treat as proxy of amplified ETH",
    "tier": "T3/proxy"
  },
  {
    "figure": "Oct-2025 liquidation total",
    "contested": "$19.16bn (CoinGlass: conservative floor)",
    "issue": "CEX under-reporting; revised $30–40bn are estimates",
    "anchor": "\"$19bn reported / higher est.\"; CoinGlass + on-chain",
    "tier": "T2"
  },
  {
    "figure": "RWA / DeFi TVL totals",
    "contested": "$51.4bn RWA; $183.4bn TVL",
    "issue": "iBuidl aggregator citing RWA.xyz/DefiLlama",
    "anchor": "RWA.xyz / DefiLlama directly — T2 providers, not official statistics",
    "tier": "T2"
  },
  {
    "figure": "Iran hashrate 9→2 EH/s",
    "contested": "−77%",
    "issue": "Binance Square reposting Hashrate Index",
    "anchor": "Hashrate Index / CoinMetrics primary; MEDIUM",
    "tier": "T2"
  },
  {
    "figure": "Iran digital assets $7.7bn / CBI $500M USDT",
    "contested": "$7.7bn; >$500M",
    "issue": "Crypto Briefing/Elliptic via press; not audited",
    "anchor": "Elliptic/Chainalysis/TRM primary reports",
    "tier": "T2"
  },
  {
    "figure": "ETF flow micro-figures",
    "contested": "$733.4M, IBIT $527.8M, >$4bn May",
    "issue": "SoSoValue via press",
    "anchor": "SoSoValue/Farside/issuer data",
    "tier": "T2"
  },
  {
    "figure": "Total stablecoin supply",
    "contested": "$315bn vs $322.5bn vs DefiLlama snapshots",
    "issue": "Different dates/methodologies",
    "anchor": "Report range with date; DefiLlama + CEX.IO cross-checks",
    "tier": "T2"
  },
  {
    "figure": "Order-book depth / spreads (2026)",
    "contested": "Not accessed",
    "issue": "Licensed Kaiko/CCData/CoinGlass depth not accessed",
    "anchor": "Kaiko/CCData/CoinGlass licensed feeds",
    "tier": "T3/proxy"
  },
  {
    "figure": "Public-miner & COIN/MSTR returns (2026)",
    "contested": "Not independently sourced",
    "issue": "No provider-quality discrete prints",
    "anchor": "Exchange/issuer data; treat beta structure as the claim",
    "tier": "T3/proxy"
  },
  {
    "figure": "Chainlink/Pyth fault in Oct-2025",
    "contested": "\"oracles propagated corrupted prices\"",
    "issue": "Described as a Binance internal-pricing flaw; no formal post-mortem",
    "anchor": "Chainlink official incident report (T1) before attributing oracle fault",
    "tier": "T2/contested"
  },
  {
    "figure": "Octagon / Polymarket price ranges",
    "contested": "$72–74k late May",
    "issue": "Prediction-market model output — illustrative only, NOT a price anchor",
    "anchor": "Never used as a price anchor; CF Benchmarks BRTI for any level",
    "tier": "T3"
  }
];

export const highAnchors = [
  "Tether froze 344,149,759 USDT (~$344.15M) across two Tron wallets, Apr 23; OFAC designated the CBI wallets Apr 24 — Tether (T1) + OFAC via TRM/Chainalysis (T2). HIGH.",
  "Tether reports >$4.4bn frozen across 5,000+ wallets to date — Tether (T1). HIGH.",
  "Deribit Week-21 (May 20): BTC/ETH 7d 25Δ skew −5%/−7%; ATM IV 35%/43% (near YTD lows) — Deribit (T1). HIGH.",
  "Total stablecoin supply ~$315bn (Q1 record) → ~$322.5bn (May 26); >98% USD-pegged; USDT ~$189.4bn (58.7%), USDC ~$76.4bn — multiple T2. MEDIUM-HIGH.",
  "No major conflict-driven stablecoin depeg in Feb–May 2026; reference depegs are SVB-2023 and Oct-2025, both pre-2026 and venue/reserve-specific — BPI (T2). MEDIUM-HIGH.",
  "BTC behaved as a high-beta risk asset, not a safe haven (direction): converged to equities, lagged gold, inverse to the haven dollar — Morningstar (T2) + Conlon & McGee 2020 (T1-academic) + §9. HIGH (direction).",
  "Six BTC difficulty downward adjustments in 2026 (−2.3% May 1; −2.43% Apr 17) — Bitcoin.com (T2, network-derived). HIGH.",
  "CoinGlass: Oct-2025 $19.16bn liquidation is a conservative floor (under-reporting); ~1.6M accounts — CoinGlass + FTI (T2). MEDIUM-HIGH.",
  "FRED/CBOE vol regime inherited from §9 (OVX 28→120.91; VIX 18→31.05→15.74; VXEEM stuck ~2×) as the crypto risk backdrop — FRED/CBOE (T1). HIGH.",
  "CME 24/7 BTC futures/options launch reported for May 29 — treated T2 pending direct CME notice; structural-adoption signal, not a HIGH primary anchor yet."
];

export const proxyOnly = [
  "SOL / high-beta alt-L1 conflict-window price path — no provider-quality prints; proxy = amplified ETH.",
  "Public-miner equity and COIN/MSTR conflict-window returns — no provider-quality prints; proxy = beta structure.",
  "Order-book depth, spreads, venue-level liquidity (2026) — licensed feeds not accessed; proxy = liquidation clustering.",
  "EM / regional stablecoin demand, remittances, capital-flight splits — inferred; proxy = USDT EM/Gulf-Asia dominance + >$10tn/month throughput.",
  "OTC / dark-pool crypto flows — not publicly available; gap; needs OTC-desk or Kaiko OTC data.",
  "Exchange connectivity / cable-route degradation on named matching engines — no confirmed 2026 incident; structural monitor only.",
  "DeFi oracle incident confirmation (2026 cable-severance) — no confirmed public incident; proxy = Oct-2025 cascade.",
  "Exact low-latency correlation coefficients (BTC↔equity, BTC↔gold, BTC-IV↔VIX) — not computed from clean licensed series; direction HIGH, point values LOW.",
  "Iran digital-asset totals ($7.7bn) and CBI USDT purchases (>$500M) — forensic-blog estimates; MEDIUM/LOW.",
  "ETH gas / on-chain fee conflict spike — none confirmed; proxy = Bitcoin fee share ~0.58% (no spike).",
  "Direct OFAC SDN page for the Apr 24 CBI-wallet designation — reported by TRM/Chainalysis paired with Tether's official freeze; attach OFAC primary before treating designation metadata as T1.",
  "CME 24/7 launch notice — cited via Phemex/CME-reporting; attach direct CME notice before classifying T1/HIGH."
];

export const adversarialClose = [
  "The BTC return-sign conflict (−11% YTD vs +17% since-conflict-start). Resolve against a single, fixed-window CF Benchmarks BRTI series. If BTC genuinely outperformed gold over the conflict window, the \"risk-asset\" framing needs a sharper window caveat (though the regime conclusion likely survives).",
  "Exact regional stablecoin demand. The EM/Gulf/remittance/capital-flight use cases are structurally sound but quantitatively proxy-only. Attack with Chainalysis Geography-of-Crypto and on-chain corridor data.",
  "OTC and dark-pool flows. The visible ETF/CEX flows may understate institutional positioning; OTC-desk data could overturn the \"de-risking\" read.",
  "Exchange connectivity degradation (cable_severance). No confirmed 2026 incident; the false-positive claim (cable cuts don't move broad vol) should be stress-tested against any venue-level latency telemetry.",
  "DeFi oracle incident confirmation. Attribution of the Oct-2025 cascade to Chainlink/Pyth vs Binance internal pricing is contested; a T1 incident report would sharpen the protocol-risk card.",
  "Exact low-latency correlation calculations. Every point coefficient here is LOW; a clean BTC↔equity / BTC↔gold / BTC-IV↔VIX computation on licensed daily series with a stated window is the single most valuable upgrade.",
  "SOL/alt-L1 and crypto-equity (COIN/MSTR/miner) discrete returns. Currently proxy; provider-quality prints would let the §12 crypto-equity bridge be quantified."
];

export const dataQuality = {
  "high": "Tether/OFAC sanctions actions ($344M freeze, CBI designation); Deribit options skew/ATM IV; FRED/CBOE §9 vol regime; Conlon & McGee 2020 (academic); the BTC-is-not-a-haven direction (Morningstar + §9); six difficulty cuts (network-derived). See the HIGH-confidence anchors.",
  "moderate": "Stablecoin supply aggregates (CEX.IO/CMC/Cryptonomist, T2); ETF flow micro-figures (SoSoValue T2); OI/funding/liquidations (provider data, lower bounds); Iran hashrate −77%; RWA/TVL totals (RWA.xyz/DefiLlama as T2 providers). All conflict-period prices [PROVISIONAL-2026].",
  "quarantined": "BTC return-sign conflict (−11% vs +17%); all point correlation coefficients (0.50 / −0.88, unstable by construction); SOL/alt-L1 and COIN/MSTR/miner discrete returns; order-book depth; EM regional stablecoin splits; OTC flows; any 2026 oracle/cable incident. See the source-conflict table and proxy register."
};

export const thesis = "Across Feb–May 2026, crypto behaved as the TERMINAL NODE of the VegaReady risk chain, not as an independent safe haven. Bitcoin inherited the §8 equity beta and the §9 dollar/rates/vol regime — it sold off on the initial shock, mean-reverted on de-escalation headlines, and tracked equities (~0.50 correlation) rather than the gold/USD haven bid. The single genuinely structural, non-price story was plumbing and sanctions: stablecoins behaved like dollar infrastructure (supply grew through the stress, no systemic depeg), and the US response (the ~$344.15M USDT freeze, CBI wallet designations) showed that public-blockchain transparency plus issuer freeze capability make crypto a WORSE long-run sanctions-evasion tool than feared. BTC entered the conflict already ~40%+ below its $126,198 Oct-2025 ATH — the war hit a market already deleveraging in a risk-off regime.";

export const verdict = "Tested across five comparators: a high-beta risk / liquidity asset — NOT digital gold.";

export const scenarioConclusion = "In NO scenario did crypto act as a clean flight-to-safety asset. Its most defensible non-risk-asset role is the stablecoin synthetic-dollar / sanctions-rail function in the banking-isolation tail (cable_severance + sanctions) — and even that is capped by issuer freeze capability. Consistent with §9: the dollar, not gold and certainly not crypto, captured the haven bid; crypto's only haven-adjacent role is as a dollar conduit, not a store of value.";

export const priceArc = "BTC entered already ~40%+ below its $126,198 (Oct 6, 2025) ATH. On the Feb 28 strike weekend it fell ~3% intraday to ~$63–64k (one retrospective cites a near-9% peak daily decline); ETH fell ~5% to ~$1,867. It rebounded to ~$67k by Mar 3 and pushed past $71,000–71,785 on Mar 10 as the conflict was signalled to resolve \"very soon,\" briefly out-performing gold for the month (~+7% MTD vs bullion ~−2%). The March outperformance did not survive the quarter: renewed mid-April strikes pushed BTC below $72k; by Deribit Week-21 (May 20) BTC hit a >2-week low near $76k and ETH broke below $2,100 on the §9 stock–bond risk-off; late-May strikes drove BTC ~$77k → ~$72.4k (−5.5% on the week), liquidating ~$1bn of leveraged longs, before a tentative Hormuz deal lifted it to ~$73.25–74k by May 29–30. Quarter-scale scorecard (the real story): BTC ~−11% YTD, ETH ~−36.3% YTD (~$2,104) — a ~25-point ETH underperformance gap — while gold outperformed both. Total crypto market cap ~$2.54tn with BTC dominance ~59.9% (May 27): rising dominance is itself a risk-off tell, the crypto analogue of §8's flight to quality. SOL/alt-L1 discrete prints were not provider-quality sourceable — treated as proxy of amplified ETH.";

export const havenVerdict = "What CAN be proven (HIGH): BTC behaved as a high-beta risk/liquidity asset and NOT as digital gold — it sold off on the shock, converged to equities, lagged gold, ran inverse to the haven dollar, and de-risked through ETF outflows. Morningstar/WisdomTree state it directly: crypto's equity correlation \"rises in periods of market stress, undermining its diversification case… Bitcoin is not a defensive asset and should not be positioned as one.\" The 2020 COVID academic finding is the structural precedent (Conlon & McGee): BTC \"does not act as a safe haven, instead decreasing in price in lockstep with the S&P 500,\" increasing portfolio downside risk. What CANNOT be proven: the EXACT point correlations (0.50 / −0.88 are window-dependent and unstable by construction — CME's Shore documents the 60-day BTC↔Nasdaq correlation ranging −0.5 to 0.8 over 2014–2025); and whether BTC has latent hard-money optionality that simply did not activate here.";

export const havenAdversarial = "Adversarial source conflict (flagged, not buried): the same Morningstar piece reports BTC rose ~17% since the start of the conflict and outperformed gold — directly conflicting with the scenario path (BTC −11% YTD, lagged gold). Resolution: the figures measure DIFFERENT windows/baselines — the +17% is consistent with the W1 relief rally from the Feb-28 low and a different conflict-start anchor; the −11% is YTD from the Jan-1 baseline through the W2 re-escalation. Critically, both readings agree on the conclusion: BTC is a risk asset whose equity correlation rises in stress, not a haven. We carry the scenario YTD path internally and flag the 17% as a window-dependent T2 conflict; resolve against a single CF Benchmarks BRTI window before trading.";

export const stablecoinSupply = "Total stablecoin supply reached a record ~$315bn in Q1 2026 (+~$8bn QoQ, CEX.IO) and ~$322.5bn by May 26 — larger than the FX reserves of 95 sovereign nations, >98% USD-pegged. A notable Q1 divergence: USDC grew ~$2bn while USDT declined ~$3bn — the first meaningful USDT/USDC split since Q2-2022. On-chain settlement scale is the point: stablecoin networks moved >$10 trillion in a single month (January 2026), ~172M holder addresses, ~55–56% of value on Ethereum (~$190bn) — a parallel dollar-liquidity layer whose throughput dwarfs its market cap. The structural risk is concentration: USDT+USDC are ~85% of supply, so a Tether-specific redemption or regulatory shock — not a war headline — is the systemic tail.";

export const stablecoinPeg = "Peg integrity during the conflict: NO systemic break. No major dollar stablecoin sustained a conflict-driven depeg in Feb–May 2026. The reference depegs remain USDC→~$0.87 (SVB, Mar 2023) and USDe→~$0.6567 on Binance (Oct 10, 2025 cascade) — both pre-2026 and both venue/reserve-specific, not geopolitical. During Gulf banking/cable/sanctions stress, stablecoins are the channel through which value routes OUTSIDE the correspondent-banking and SWIFT systems Iran is already excluded from — a genuine liquidity hedge for legitimate corridor users AND the primary evasion vector authorities target.";

export const gulfRegulatory = "UAE / Gulf stablecoin regime (JCJ-relevant): the UAE operates a four-regulator layered regime — the CBUAE has exclusive authority over AED-pegged stablecoins (June 2024 Payment Token Services Regulation), VARA governs non-AED stablecoins on the Dubai mainland, FSRA (ADGM) and DFSA (DIFC) cover the free zones. Key 2026 specifics: algorithmic stablecoins are prohibited as payment instruments; reserves require daily reconciliation, monthly external-auditor confirmation, par redemption by next business day; FATF Travel-Rule compliance is mandatory; and a regulatory-reset deadline of Sept 16, 2026 requires license alignment, with penalties up to AED 1bn. For Dubai-domiciled JCJ, Gulf stablecoin rails are MORE, not less, regulated than the global average — a compliance tailwind for licensed venues and a headwind for grey-market corridors.";

export const microNote = "BTC futures OI had already fallen ~$61bn → ~$49bn (−20%) after the February dip, recovering only toward ~$50bn by late April WITH funding rates negative despite a ~14% price rally — a deleveraged, short-biased microstructure. CME BTC futures OI hit a 14-month low (~$7.2bn daily avg, March contract) in early April as basis trades unwound. Persistently negative perpetual funding despite price rallies (shorts paying longs) is the crypto analogue of §9's \"specs fading the rally\" — genuine risk-off, not rotation. Liquidations clustered at psychological round numbers: ~$1bn of leveraged longs liquidated on the May 27 drop below $73k; Deribit puts concentrated at the $60,000 strike during March stress. Liquidation totals are LOWER BOUNDS given documented CEX under-reporting (Binance logs one liquidation/second).";

export const oct2025Proxy = "The binding microstructure precedent is Oct 10–11, 2025: a Binance Unified-Account collateral-pricing flaw and CEX outages amplified a ~10–14% BTC decline into a $19.16bn liquidation cascade across ~1.6M accounts (~87% longs; derivatives volume ~$748.3bn that day, ~3× the 2025 daily average) — when USDe printed ~$0.6567 on Binance vs $1.00 everywhere, triggering cross-margin liquidations on positions that never saw organic selling. On-chain redemptions and DeFi oracle reads held 1:1 (Aave showed USDe at peg). The transferable lessons for a conflict regime: (1) oracle-propagation risk is the single point of failure; (2) cross-margin turns one venue's dislocation into portfolio-wide liquidation; (3) auto-deleveraging (ADL) removes liquidity precisely when needed. The structural read for JCJ: CEX microstructure is the fragility; the chains are not. Attribution note: described publicly as a Binance internal-pricing failure, not a confirmed Chainlink/Pyth fault — no formal oracle post-mortem was published.";

export const gulfCable = "Crypto venues serving Gulf/Asia depend on the same subsea-cable routes mapped in §7 (Structural Risk). There was NO public 2026 incident of a cable cut degrading a named exchange's matching engine or oracle feeds — a structural tail, not a realized event. Per §8/§9, cable-severance historically did NOT move broad cross-asset vol (VIX/MOVE), so a crypto-specific connectivity hedge sized to this channel is prone to false positives.";

export const defiNote = "There was NO confirmed conflict-specific DeFi or oracle failure in Feb–May 2026 — the chains and major DeFi protocols functioned normally through the geopolitical stress. The binding risk lesson is structural and pre-conflict (the Oct-2025 cascade), not a 2026 event. The monitored proxy for the absent incident is: (i) oracle update latency/staleness on Chainlink/Pyth feeds during regional connectivity stress; (ii) stablecoin pool imbalance (e.g. Curve 3pool / USDe pools) as an early dislocation tell; (iii) cross-margin concentration on the largest perp venue. During 2026 drawdowns, exchange BTC balances fell to a ~5-year low (~2.16M coins) — coins moved off exchanges into cold storage, reducing immediate liquidation fuel even as ETFs redeemed.";

export const rwa = "RWAs / T-bill tokenization were a settlement-stress beneficiary that ACCELERATED through the macro stress. On-chain RWA value (ex-stablecoins) reached ~$51.4bn in March 2026 (+340% YoY from $11.7bn) — BlackRock BUIDL ~$8.2bn, Franklin Templeton ~$3.1bn, Ondo ~$2.4bn; tokenized private credit (~$18.6bn) overtook tokenized Treasuries (~$17.2bn) as the largest category; DeFi TVL hit an all-time high ~$183.4bn on Mar 7. Tokenized T-bills (~4.2–5.1% yield) are increasingly DeFi collateral on Aave/Morpho/Euler — a MORE stable collateral type during sanctions/settlement stress than volatile crypto. (RWA.xyz and DefiLlama are treated as T2 data providers, not official statistics.)";

export const miningNote = "Iran's bitcoin hashrate collapsed ~9 EH/s → ~2 EH/s (≈−77%), taking a large share of its once-~427,000 active miners offline as conflict-driven energy disruption hit; this was contained — neighbouring UAE and Oman (~3% of global hashrate each) saw no disruption. Global hashrate fell ~1,066 EH/s (Q1) → ~1,004 EH/s (Q2), ≈−5.8% QoQ, dipping below the 1 ZH/s threshold in early May. Difficulty cut ~2.3% on May 1 and ~2.43% on Apr 17 — six downward adjustments in 2026. USD hashprice ran ~$31.62 → $33.25/PH/s/day by April 13, at or below breakeven for many miners.";

export const minerMargins = "Electricity is ~60–80% of mining opex; the network consumes >400 GWh/day. The 2026 breakeven sits near ~$0.10/kWh on S21-class (sub-15 J/TH) hardware: industrial miners at $0.07–0.08/kWh ran ~20–50% margins, while $0.10+/kWh tipped older fleets into loss as difficulty rose. Energy-cost sensitivity heuristic: at ~$33/PH/s/day hashprice and sub-15 J/TH efficiency, a +$0.02/kWh move (~$0.06→$0.08) is roughly the difference between a comfortable and a marginal operation — so a §6 conflict-driven regional power-price spike is DIRECTLY margin-compressive for exposed miners, which is why high-cost Iranian capacity went offline first. This is the direct channel; the indirect channel (BTC price beta compressing miner revenue and public-miner equity) is larger in dollar terms but not unique to mining.";

export const minerEquities = "Public miners (MARA, RIOT, CLSK, CIFR) are levered crypto-equity — BTC price beta PLUS energy-opex beta PLUS equity-market beta (§8). In hormuz_closure/oil_strike they are doubly hit (BTC down + power up); in ceasefire they are high-beta recoverers. Discrete 2026 conflict-window miner-equity moves were not provider-quality sourceable — treated as proxy/directional; the defensible claim is the exposure structure. Separately, Fidelity flagged miners redirecting infrastructure toward higher-margin AI data-center workloads as hashprice stayed compressed — an exogenous downward pressure on hashrate distinct from the conflict.";

export const sanctionsFreeze = "The headline event — the ~$344.15M USDT freeze. On April 23, 2026, Tether froze 344,149,759 USDT (~$344.15M) across two Tron addresses in coordination with OFAC/US law enforcement; on April 24, OFAC updated its designation of the Central Bank of Iran, adding those crypto wallets to the SDN List with linkages to the IRGC-Qods Force and Hizballah — the largest on-chain freeze of Iranian sovereign crypto reserves on public record. The wallets had received ~$370M across ~1,000 transactions since March 2021, with accumulation ending by late 2023 — a profile TRM read as sovereign reserve storage, not operational deployment.";

export const sanctionsContest = "The freeze is contestable, not absolute: in May 2026, attorney Charles Gerstein filed suit in SDNY seeking to compel Tether to redirect the frozen ~$344M to terrorism-judgment creditors — a reminder that issuer freeze capability creates a LEGAL contest surface (who controls blocked property), even as it forecloses OPERATIONAL evasion. The freeze power is real, but its finality is now a live legal question.";

export const iranianRail = "The broader picture (sourced, not inflated): Iran reportedly controls ~$7.7bn in digital assets and the CBI was reported to have purchased >$500M in USDT as a banking workaround (Elliptic, via press). In January 2026, OFAC made its first-ever designation of IRGC-linked exchange infrastructure — UK-registered Zedcex/Zedxion, through which TRM identified ~$1bn routed with direct IRGC exposure. Chainalysis separately traced an Iranian broker network (~$100M tied to oil sales 2023–2025). The $7.7bn and >$500M figures are press/forensic-blog estimates (T2), labeled MEDIUM/LOW and not used as a headline anchor.";

export const sanctionsVerdict = "The decisive verdict: stablecoins are NOT a viable long-run state-evasion tool. Public-blockchain transparency + issuer freeze capability + public-private cooperation (Tether reports >$4.4bn frozen across 5,000+ wallets to date) make large-scale evasion \"highly vulnerable to targeted disruption\"; per Tether's CEO, \"USDT is not a safe haven for illicit activity.\" A potential $6bn Iran frozen-asset release was under late-May discussion; reduced evasion demand could paradoxically CONCENTRATE enforcement on residual flows — the metric to watch is on-chain stablecoin flow through flagged addresses, not diplomatic headlines. Forensic vendors (Chainalysis/TRM/Elliptic) are T2 research providers; OFAC/Tether official actions are T1.";

export const regulatoryAccel = "Regulatory acceleration (the structural tailwind): the conflict landed atop a maturing framework — the US GENIUS Act (July 2025), an April 8, 2026 FinCEN/OFAC joint NPRM on stablecoin-issuer AML/CFT, a May 21, 2026 Treasury Travel-Rule report, full EU MiCA rollout, Hong Kong's Stablecoin Ordinance, and the UAE's layered regime with the Sept 16, 2026 license-alignment deadline. The FATF Travel Rule (~$1,000/€1,000 threshold) governs VASP data-sharing globally. Net effect: the conflict ACCELERATED tokenized-settlement and compliant-rail adoption rather than CBDC issuance, which saw no conflict-driven acceleration in public data.";

export const etfFlows = "Spot BTC ETF flows — the May exodus. US spot BTC ETFs reversed from strong inflows (~$2.44bn in April, the best since Oct 2025; $3.29bn over Mar–Apr) to >$4bn of outflows since early May, including a $733.4M single-day outflow on May 27 (IBIT −$527.8M, 2nd-largest ever; GBTC −$104.8M) — an 8-session redemption streak (~$2.6bn cumulative) that dragged total US spot BTC ETF AUM below $100bn to ~$97bn. Cumulative inflows since the Jan-2024 launch remained ~$58.72bn; IBIT ~$67bn AUM, FBTC ~$17bn; Jane Street cut ETF holdings ~70% in Q1. This is the direct cross-asset confirmation: ETF redemptions are the §9 de-risking flow expressed in crypto.";

export const optionsSkew = "Options skew (Deribit, T1): 7-day 25-delta put-call skew at −5% (BTC) / −7% (ETH) by May 20 showed defensive hedging, while ATM IV near YTD lows (35%/43%) showed no panic in broad vol — institutions hedged tails cheaply rather than capitulating, the crypto mirror of §9's bifurcated vol surface. ETH ETFs had pockets of relative strength (+$187M weekly, best of the year, around Apr 13) before being swept into the broader May risk-off. A 24/7 CME BTC futures/options launch was reported for May 29 (treated T2 pending direct CME notice).";

export const cryptoEquities = "Crypto equities (COIN, MSTR, public miners) — the explicit §8 junction: Coinbase carries exchange-volume + custody + ETF-settlement beta; MicroStrategy/Strategy (MSTR) is a levered BTC proxy (BTC NAV + convertible-debt leverage); public miners add energy-opex beta. All trade WITHIN the §8 equity tape — they fell in the W1 risk-off and recovered with the Nasdaq, amplifying BTC's move. Discrete 2026 conflict-window returns were not provider-quality sourceable (proxy/directional); the defensible claim is the beta structure connecting §8 → §10.";

export const adoptionBifurcated = "On-chain accumulation vs ETF redemption (the divergence): even as ETFs redeemed, exchange BTC balances fell to a ~5-year low (~2.16M coins) and whales accumulated into the weakness — long-term holders bought what allocators sold. Did traditional-market stress accelerate or slow adoption? BIFURCATED: price-exposure adoption (ETF flows, leveraged OI) SLOWED under the risk-off regime, while infrastructure adoption (RWA +340% YoY, CME 24/7, regulated stablecoin rails, LTH accumulation) ACCELERATED. The conflict damaged the \"diversifier/hedge\" thesis among allocators while strengthening the \"regulated digital-dollar / tokenized-settlement\" thesis.";

export const lowLatencyRefresh = "What needs low-latency refresh before trading: spot reference rate (CF Benchmarks BRTI), perp funding/OI (Kaiko/CoinGlass/CCData — T2), Deribit skew/ATM IV, ETF flow prints, and on-chain sanctioned-flow trackers. The single highest-value, lowest-latency cross-asset trigger is OVX + DXY + 10Y from §9 — crypto re-prices AFTER these move.";

export const relatedSectors = "Crypto is the TERMINAL node of the causal chain: physical (§1–7) → equities (/markets/equities) → cross-asset (/markets/cross-asset) → crypto (here). It consumes the §8 equity beta (COIN/MSTR/miners trade within the equity tape) and the §9 cross-asset regime (the equity→crypto beta-bridge card on /markets/cross-asset points here). The sanctions/dollar-rail channel connects back to /markets/credit (dollar funding) and the /structural/digital cable layer. The single highest-value upstream trigger is OVX + DXY + 10Y from /markets/cross-asset — crypto re-prices after these move.";
