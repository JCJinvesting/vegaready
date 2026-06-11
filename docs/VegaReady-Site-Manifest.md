# VegaReady — Full Site Content Manifest

*Companion to the full-site design audit prompt. A complete, JS-free inventory of every route and its content — so a reviewing agent can critique wording, structure and visuals without rendering the client-only dashboard. Generated from the canonical content sources (2026-06-02).*

**Sections:** Route index · Standalone pages · Markets · Structural · Transmission/Exposure/Outlook · Synthesis (Connections/Profits) · Watch board & signals · **Dashboard (the client-only React tabs, content inventoried from data)** · Existing glossary (209 terms).

## Route index — every page

| Route | Page | Renders / source | Purpose |
|---|---|---|---|
| `/` | Home | index.astro | hero + cascade + capability cards |
| `/about` | About | about.astro | mission, method, contact |
| `/dashboard` | Live Dashboard | WarTracker.jsx (React, client:only) | live situational feed — tabs below |
| `/dashboard/gulf` | Dashboard · Gulf | WarTracker | Gulf-state incident & market data |
| `/dashboard/iran` | Dashboard · Iran | WarTracker | Iran order of battle, claims, depletion |
| `/dashboard/israel` | Dashboard · Israel | WarTracker | Israel ops timeline, defense systems |
| `/dashboard/us` | Dashboard · US | WarTracker | US forces, policy, casualties |
| `/dashboard/markets` | Dashboard · Markets | WarTracker | oil, shipping, insurance, FX timelines |
| `/dashboard/economics` | Dashboard · Economics | WarTracker | strategic calculus, policy |
| `/dashboard/casualties` | Dashboard · Casualties | WarTracker | US/coalition/civilian casualties |
| `/dashboard/analytics` | Dashboard · Analytics | WarTracker | EPIC FURY timeline/BDA, calculus |
| `/dashboard/sources` | Dashboard · Sources | WarTracker | sources, feeder outlets, provenance, glossary |
| `/markets` | Markets — overview | markets/index.astro | section hub + scenario-state ledger |
| `/markets/gold-fx` | Gold & FX | gold-fx.astro (inline cards) | gold, FX, central banks, yen carry |
| `/markets/equities` | Global Equities | equities.json | index shock, sector rotation, factors |
| `/markets/crypto` | Crypto & Digital Assets | crypto.json | terminal node, stablecoins, signals |
| `/markets/credit` | Sovereign Credit & Plumbing | credit.json | flows, EMBI, IMF, sanctions |
| `/markets/insurance` | Insurance & Shipping | insurance.json | AWRP, P&I, VLCC, trade credit |
| `/markets/property` | Property, Materials & Megaprojects | property.json | aluminium, construction, NEOM |
| `/markets/labor` | Labor, Migration & Remittances | labor.json | migrant workforce, remittances |
| `/markets/food-agriculture` | Food & Agriculture | foodag.json | fertilizer→food cascade, FAO |
| `/markets/water` | Water & Desalination | water.json | desal dependence, existential tail |
| `/markets/energy` | Energy & Transition | energytransition.json | oil/LNG shock + transition capital |
| `/markets/defense` | Defense & Security | defense.json | arsenal drawdown, procurement |
| `/markets/cross-asset` | Cross-Asset | crossasset.json | correlation, vol regime, hedging |
| `/transmission` | Transmission — sector cascade | sectors.json | 13 sectors, mechanism by sector |
| `/exposure` | Exposure — regional impact | regions.json | 12 economies, winners/losers |
| `/outlook` | Outlook — gap dynamics | dynamics.json | substitution & reopening |
| `/outlook/precedents` | Outlook · Precedents | precedents.astro (inline) | historical scenario analogs |
| `/outlook/infrastructure` | Outlook · Infrastructure | defense.js resilience | chokepoint capacity |
| `/outlook/nuclear` | Outlook · Nuclear | nuclear.json | proliferation cascade |
| `/structural` | Structural Risk — overview | structuraloverview.json | standing indices + method |
| `/structural/chokepoints` | Chokepoint Index | chokepoints.json | 9 chokepoints scored |
| `/structural/weaponization` | Commodity Weaponization | weaponization.json | REE/export-control tracker |
| `/structural/deglobalization` | De-globalization | deglobalization.json | tariffs, FDI, reshoring |
| `/structural/digital` | Digital Sovereignty | digital.json | cables, fragmentation |
| `/structural/food` | Food Resilience | foodresilience.json | reserves, stockpiles |
| `/structural/watch` | Watch Board | watch-metrics.json + catalysts.json | 33 metrics, 30 signals, catalysts |
| `/connections` | Connections | connections.js | themes + causal-edge registry |
| `/profits` | Who Profits | profits.js | beneficiaries / asymmetric winners |
| `/signals.json` | Signals export | signals.json.js | machine-readable registry |
| `/briefings` | Briefings | briefings/index.astro | briefings index (1 post) |

## Analysis pages — full content inventory

### Global Equities & Sector Rotation
`/markets/equities` · source `equities.json`

**Thesis:** Equities sit at the transmission inflection point between real-economy energy shocks and downstream risk assets — including crypto. The Feb–May 2026 strikes on Iran produced a severe energy-security shock; Brent rose from ~$72.48 (Feb 27) to a reported $119–120 peak in early March (+55% in under two weeks) before oscillating $94–$115 through May. Equities did NOT react uniformly: the S&P 500 fell ~8% to a ~6,316 trough on Mar 30, then recovered all losses and breached 7,400 by mid-May on AI-earnings momentum — a bifurcation between macro vulnerability and tech/AI insulation that defines the 2026 equity regime. Europe bore a larger structural burden as energy importers; Japan and South Korea took the most acute oil-import shock; and the GCC showed dramatic internal divergence — Saudi TASI outperformed on Aramco's oil tailwind while UAE's DFM fell ~16% on security and expat-liquidity risk. This is the first-order financial layer: the equity moves here are the micro-engine of the cross-asset correlation breaks (see Cross-Asset).

**Cards (8):**

- **Global Equity Index Shock Map**  ·  HIGH  ·  _Equities_
  - *Summary:* The defining bifurcation: macro-vulnerable indices fell while AI/tech insulated the US. S&P −8%→new ATH; STOXX/DAX energy-importer pain; Nikkei/KOSPI −3% sessions; MSCI EM −11%→+14.7%; TASI +5% vs DFM −16%; Ibovespa records.
  - **sp500:** −8% (trough ~6,316 Mar 30) → >7,400 ATH
  - **msci_em:** −11% March → +14.7% April
  - **tasi:** +5% March
  - **dfm:** −16%
  - **ibovespa:** record highs; BRL +10%
  - *Sources (3):* CNBC (S&P); MSCI; Al Jazeera (GCC)
- **Equity Sector Winner/Loser Map**  ·  HIGH  ·  _Sector Rotation_
  - *Summary:* Clearest sector bifurcation since 2022. WINNERS: energy, defense/aerospace, tankers (FRO +62.6%), cybersecurity, gold miners (GDX +95%/12mo), non-Gulf LNG. LOSERS: airlines, petrochemicals, autos, consumer discretionary, EM importers. Energy/defense move in hours; airlines/petrochem lag by weeks.
  - **energy_etf:** BNO +84% Q1
  - **defense:** ITA +18% YTD
  - **tankers:** FRO +62.6%, NAT +63.2%
  - **gold_miners:** GDX +95% 12-mo
  - **airlines:** jet fuel 25–30% opex
  - *Sources (2):* 247 Wall St (tankers/miners); STOXX (2022 precedent)
- **Earnings & Margin Transmission**  ·  HIGH  ·  _Earnings_
  - *Summary:* Oil shocks hit equities through margin compression, not re-rating. Lombard Odier: +5% oil → −2.2% US EPS over 12 months (−2.1% direct, −0.2% rates); +50% oil → ~−15% EPS. Jet fuel 25–30% of airline opex at $159.85/bbl; EIA distillate cracks $1.42/gal (highest since 2022); auto OEM margins 3.6%.
  - **lombard_5pct:** −2.2% US EPS / 12mo
  - **lombard_50pct:** ~−15% S&P EPS
  - **jet_fuel:** $159.85/bbl (25–30% opex)
  - **crack_spread:** $1.42/gal
  - **oem_margin:** 3.6% Q4'25
  - *Sources (3):* Lombard Odier; IATA; EIA
- **Equity Factor Rotation**  ·  HIGH  ·  _Factors_
  - *Summary:* Min-vol, quality and energy outperformed across regions; momentum, small-cap and high-beta were worst — the EM crowding factor fell >1% in two weeks (4-sigma) as crowded EM tech/AI unwound. The novel 2026 feature: an AI-insulation override (Mag-7 +17%, Micron +140%) acting as a circuit-breaker on the oil-shock bear.
  - **winners:** min-vol, quality, energy (+2.98%/mo analog)
  - **losers:** momentum, small-cap, high-beta
  - **em_crowding:** −1% in 2 weeks (4-sigma)
  - **ai_override:** Mag-7 +17%; Micron +140%
  - *Sources (2):* MSCI factor study; Cboe (skew)
- **Country Equity Impact Map**  ·  HIGH  ·  _Country_
  - *Summary:* Outcomes set by oil position, Gulf exposure and index composition. Winners: Brazil, Saudi Arabia (oil exporters). Losers: India, Japan, S. Korea, Egypt, Pakistan (importers; rupee 94+). US mixed-positive on AI insulation; China/EU complex middle ground.
  - **winners:** Brazil, Saudi
  - **losers:** India, Japan, S.Korea, Egypt, Pakistan
  - **us:** mixed-positive (AI buffer)
  - **china:** loser (5.4M bpd via Hormuz)
  - *Sources (2):* MSCI; Business Standard (India)
- **GCC Equity Asymmetry**  ·  HIGH  ·  _GCC_
  - *Summary:* The sharpest internal divergence of any region: TASI +5% (Aramco 16% weight, 7M bpd Petroline bypass) vs DFM −16% (security/expat risk; ~$120bn cap loss) vs Qatar ~−4% (Ras Laffan force majeure, LNG −20%). Sovereigns win on oil fiscally; domestic equity sectors reprice security risk fast.
  - **tasi:** +5% March
  - **dfm:** −16% (~$120bn loss)
  - **qatar:** ~−4% (FM)
  - **petroline:** 7.0M bpd
  - **adcop:** 1.7–1.8M bpd
  - **lng_loss:** ~120 bcm 2026–2030
  - *Sources (3):* Arab News (TASI); Bloomberg (Qatar); Energy Connects (Petroline)
- **Equity Market Plumbing & Flows**  ·  MEDIUM  ·  _Market Structure_
  - *Summary:* Energy ETFs took >$2bn YTD, defense ~$467m, BNO +84% Q1; EM ETFs bled then recovered. VIX +57% in a week triggered risk-parity/vol-control deleveraging (−30–50% equity allocation), amplifying the sell-off. SPX skew inverted (upside bid); dollar–VIX flipped back positive. Crypto fell with equities then recovered (bridge to §10).
  - **energy_etf:** >$2bn YTD
  - **defense_etf:** ~$467m YTD
  - **vix:** +57% in one week
  - **em_crowding:** 4-sigma unwind
  - **uae_domestic_buy:** AED 2.2bn floor
  - *Sources (3):* Trackinsight; Forbes (VIX); ECB (vol-control)
- **Equity Scenario Trade Map**  ·  MEDIUM  ·  _Strategy_
  - *Summary:* Actionable long/short constructs per scenario. hormuz_closure: long energy/defense/tankers/cyber/gold-miners, short airlines/EM-importers/autos. oil_strike: long oilfield-services/repair. cable_severance: long cyber/satellite, short semis/EM-fintech. ceasefire: fade the conflict trade — long airlines/EM/autos, short energy/defense/gold/tankers.
  - **hormuz:** long energy/defense/tankers/cyber/gold
  - **oil_strike:** long oilfield services/repair
  - **cable:** long cyber/satellite; short semis
  - **ceasefire:** long airlines/EM; short energy/defense
  - *Sources (1):* Section 8 synthesis (Cards 1–7)

**Other content blocks on this page:**
- **scenarioRegime** — 4-row table (cols: scenario, oilRegime, equityRegime, keyRisk)
- **indexShock** — 19-row table (cols: index, region, decline, recovery, sensitivity, conf)
- **indexNote:** Total UAE market-cap loss ~$120bn (Al Jazeera). The defining 2026 feature is index/stock divergence: the S&P closed >7% above its 50-day MA for the first time in three decades, yet <55% of components were above their own 50-day MA — the AI/Mag-7 complex masking broad weakness. [PROVISIONAL-2026] for all conflict-window levels; regional exchanges without major-newswire close data are LOW/proxy.
- **sectorMap** — 17-row table (cols: sector, status, mechanism, etf, conf)
- **sectorScenario** — 4-row table (cols: scenario, impact)
- **sectorPrecedent:** 2022 Russia-Ukraine: energy and basic resources were the only two STOXX Global 1800 sectors positive YTD through Feb 24 (Brent >$100). 2024 Red Sea: the Drewry Container Equity Index fell 8.5% on ceasefire rumors in a single week.
- **earningsSummary:** The primary mechanism through which oil shocks damage equities is direct margin compression, not valuation re-rating. Lombard Odier: a 5% oil-price increase cuts US corporate earnings ~2.2% over 12 months — almost entirely the direct cost/cash-flow channel (−2.1%), not rates (−0.2%). A 50% oil spike implies ~15% S&P 500 EPS decline over a year — consistent with the March 2026 trough pricing. The S&P entered 2026 with 12–14% consensus EPS growth and ~13–14% net margin — a cushion, not immunity.
- **passThrough** — 6-row table (cols: channel, detail)
- **earningsScenario** — 4-row table (cols: scenario, eps, sectors)
- **factorRotation** — 12-row table (cols: factor, perf, mechanism, analog, conf)
- **factorObservations** — 4-row table
- **countryMatrix** — 12-row table (cols: country, index, oil, tag, rationale, conf)
- **countryScenario** — 9-row table (cols: country, hormuz, oil_strike, cable, ceasefire)
- **gcc** — object (keys: thesis, saudi, uae, qatar)
- **gccScenario** — 4-row table (cols: scenario, saudi, uae, qatar, mechanism)
- **gccHedge:** Saudi: long Aramco/TASI energy as a Petroline-Hormuz hedge; short TASI real estate/hospitality as a ceasefire hedge. UAE: long DFM on ceasefire; avoid during active hostilities. Qatar: express via LNG-exposed non-Gulf exporters (US/Australian LNG) as proxy for unlisted QatarEnergy.
- **flows** — 10-row table (cols: segment, flow, ytd, src)
- **flowsNote:** Daily GCC-ETF flows, name-level short interest, and venue order-flow imbalance are not public at transaction level. Proxy methodology: sector-ETF premium/discount to NAV as a short-term demand-imbalance proxy; MSCI FactorLab crowding scores as a positioning-unwind-magnitude proxy.
- **volOptions** — 5-row table (cols: item, detail)
- **deleveraging:** Risk-parity/vol-control strategies mechanically de-risk as realized vol rises — with VIX +57% week 1, typical vol-targeting funds cut equity allocation 30–50%. ECB research confirms this feedback loop amplifies sell-offs. The EM crowding factor fell >1% in the first two weeks of March — a 4-sigma event. Margin calls in energy futures likely triggered correlated equity selling in commodity-focused funds.
- **gccFlows:** UAE domestic investors bought AED 2.2bn (~$611m) of DFM/ADX stock in the first 13 days of March, providing a floor — but foreign investors outnumber domestic in UAE markets, so net flows were still negative. The UAE market imposed a −5% daily circuit breaker on reopening. Saudi's larger domestic base (vs foreign) explains TASI's resilience against DFM outflows.
- **cryptoSpillover:** VIX spikes correlate with crypto drawdowns via risk-parity deleveraging (crypto increasingly a risk asset), leveraged-ETF unwinding, and institutional risk-limit triggers. In the March shock, crypto's correlation with equity risk-off was elevated: BTC/ETH fell alongside equities in week 1 and recovered as the SPX recovered in April. Full crypto analysis is in Crypto (Section 10).
- **scenarioTrades** — 4-row table (cols: scenario, label, tone, regime, trades)
- **precedents** — 6-row table (cols: episode, points)
- **upgradedConfidence** — 23-row table
- **proxyOnly** — 15-row table
- **dataQuality** — object (keys: high, moderate, quarantined)
- **relatedSectors:** Equities is the first-order financial layer in the causal chain: physical shock (Sections 1–7) → equity sector/factor rotation (here) → cross-asset correlation breaks & volatility regimes (Cross-Asset) → crypto beta/reflexivity (/markets/crypto). The sector winners deep-dive on /markets/energy, /markets/defense, /markets/insurance; the EM/credit stress on /markets/credit; the full correlation/vol synthesis on /markets/cross-asset.

---

### Crypto & Digital Assets
`/markets/crypto` · source `crypto.json`

**Thesis:** Across Feb–May 2026, crypto behaved as the TERMINAL NODE of the VegaReady risk chain, not as an independent safe haven. Bitcoin inherited the §8 equity beta and the §9 dollar/rates/vol regime — it sold off on the initial shock, mean-reverted on de-escalation headlines, and tracked equities (~0.50 correlation) rather than the gold/USD haven bid. The single genuinely structural, non-price story was plumbing and sanctions: stablecoins behaved like dollar infrastructure (supply grew through the stress, no systemic depeg), and the US response (the ~$344.15M USDT freeze, CBI wallet designations) showed that public-blockchain transparency plus issuer freeze capability make crypto a WORSE long-run sanctions-evasion tool than feared. BTC entered the conflict already ~40%+ below its $126,198 Oct-2025 ATH — the war hit a market already deleveraging in a risk-off regime.

**Verdict:** Tested across five comparators: a high-beta risk / liquidity asset — NOT digital gold.

**Cards (9):**

- **Crypto as the Final Downstream Risk-Asset/Reflexivity Layer**  ·  HIGH for direction; LOW for exact coefficients  ·  _Regime_
  - *Summary:* Crypto inherited the §8 equity beta and §9 cross-asset regime, not the haven hierarchy. BTC↔equity ~0.50 (2026) vs ~0.0–0.11 pre-2020/2023; correlation rises in stress, so the diversification case fails. Causal chain: physical (§1–7) → equity rotation (§8) → cross-asset regime (§9) → crypto beta (§10).
  - **btc_equity_corr:** ~0.50 (2026) vs ~0.11 (2023)
  - **btc_ytd:** ~−11%
  - **eth_ytd:** ~−36.3%
  - **dominance:** ~59.9% (risk-off tell)
  - *Sources (2):* Morningstar (BTC haven vs risk); Conlon & McGee 2020
- **BTC Safe-Haven vs Risk-Asset Test**  ·  HIGH (direction); exact coefficients LOW  ·  _Regime_
  - *Summary:* Tested across five comparators (equities, gold, DXY, VIX/OVX, 10Y): BTC behaved as a high-beta risk/liquidity asset, NOT digital gold — it sold off on the shock, converged to equities, lagged gold, ran inverse to the haven dollar, and de-risked through ETF outflows. The brief March BTC>gold move was a risk-on relief, not a haven bid, and reversed.
  - **verdict:** high-beta risk, not a haven
  - **vs_equities:** converged ~0.50
  - **vs_gold:** decoupled; gold took the bid
  - **vs_dxy:** inverse to the haven dollar
  - *Sources (2):* Morningstar; KuCoin/MetaEra
- **Stablecoins as Shadow Dollar Rails**  ·  MEDIUM-HIGH (multiple T2; refresh from DefiLlama/issuer dashboards)  ·  _Plumbing_
  - *Summary:* The one structural non-price story: stablecoin supply GREW through the stress to a record ~$322.5bn (>98% USD-pegged), moving >$10tn in January alone — a parallel dollar-liquidity layer that routes value outside SWIFT. No systemic conflict depeg. Concentration (USDT+USDC ~85%) is the real tail, not a war headline.
  - **supply:** ~$322.5bn (May 26)
  - **throughput:** >$10tn/month (Jan)
  - **usdt:** ~$189.4bn (58.7%)
  - **split:** USDC +$2bn / USDT −$3bn Q1
  - **concentration:** USDT+USDC ~85%
  - *Sources (2):* CoinMarketCap/CEX.IO; Cryptonomist
- **Crypto Market-Structure Stress**  ·  MEDIUM (provider data; liquidations are lower bounds)  ·  _Signal_
  - *Summary:* Deleveraged, short-biased microstructure: BTC futures OI flushed ~$61→$49bn (−20%), CME OI a 14-mo low (~$7.2bn), funding negative despite rallies — the crypto analogue of §9 specs fading the rally. ~$1bn longs liquidated May 27. The binding fragility precedent is the Oct-2025 $19.16bn cascade (CEX is the fragility; the chains held).
  - **oi_flush:** ~$61bn → ~$49bn (−20%)
  - **cme_oi:** 14-mo low ~$7.2bn
  - **funding:** negative despite +14% rally
  - **may27_liq:** ~$1bn longs
  - **oct2025:** $19.16bn cascade (floor)
  - *Sources (2):* MetaMask/VanEck; CoinGlass via CryptoRank
- **DeFi, Oracle & Liquidation Risk**  ·  MEDIUM (Oct-2025 proxy; no 2026 incident)  ·  _Regime_
  - *Summary:* No confirmed conflict-specific DeFi/oracle failure in 2026 — chains held. The structural lesson is Oct-2025: oracle-propagation + cross-margin + ADL turned one venue's dislocation into a portfolio-wide cascade. RWA tokenization accelerated through the stress (~$51.4bn, +340% YoY; DeFi TVL ATH ~$183.4bn) — tokenized T-bills are a more stable collateral than volatile crypto.
  - **defi_2026:** no confirmed failure
  - **oct2025_proxy:** oracle-propagation + cross-margin + ADL
  - **rwa:** ~$51.4bn (+340% YoY)
  - **tvl_ath:** ~$183.4bn (Mar 7)
  - **exch_btc:** ~5-yr low (~2.16M coins)
  - *Sources (2):* FTI Consulting; RWA.xyz via iBuidl
- **Mining & Energy-Cost Sensitivity**  ·  MEDIUM-HIGH (network-derived; miner-equity returns proxy)  ·  _Dynamic_
  - *Summary:* The one crypto channel with a direct physical-energy link (§1–7). Iran's hashrate collapsed ~9→2 EH/s (−77%) as conflict energy disruption hit; UAE/Oman (~3% each) undisrupted. Global hashrate −5.8% QoQ; six difficulty cuts; hashprice ~$33/PH/s/day at breakeven. Electricity is 60–80% of opex — a +$0.02/kWh move is the comfortable-vs-marginal line.
  - **iran:** ~9→2 EH/s (−77%)
  - **global_hashrate:** 1,066→1,004 EH/s (−5.8% QoQ)
  - **difficulty:** 6 cuts in 2026
  - **hashprice:** ~$33/PH/s/day
  - **breakeven:** ~$0.10/kWh (sub-15 J/TH)
  - *Sources (2):* Binance Square/Hashrate Index; Hashrate Index
- **Sanctions, Compliance & Reflexivity**  ·  HIGH (Tether/OFAC T1; Iranian-rail totals MEDIUM/LOW)  ·  _Risk_
  - *Summary:* Crypto's sharpest, best-sourced (T1) signals. Tether froze ~$344.15M USDT across two Tron wallets (Apr 23); OFAC designated the CBI wallets (Apr 24) — the largest on-chain freeze of Iranian sovereign crypto on record. The verdict: stablecoins are NOT a viable long-run evasion tool (Tether reports >$4.4bn frozen across 5,000+ wallets). A SDNY suit now contests the freeze's finality.
  - **freeze:** $344.15M USDT (Apr 23)
  - **ofac:** CBI SDN designation (Apr 24)
  - **iran_assets:** ~$7.7bn (T2 est.)
  - **tether_frozen_total:** >$4.4bn / 5,000+ wallets
  - **contest:** Gerstein SDNY suit (May)
  - *Sources (3):* Tether; TRM Labs; Chainalysis
- **Institutional Crypto Flows**  ·  MEDIUM-HIGH (ETF flows SoSoValue T2; Deribit skew T1)  ·  _Dynamic_
  - *Summary:* The cleanest confirmation crypto was de-risked as a risk asset: US spot BTC ETFs flipped from ~$2.44bn April inflows to >$4bn outflows since May — a $733.4M single-day on May 27 (IBIT −$527.8M), dragging AUM below $100bn. Deribit skew −5%/−7% (defensive, not panic). Adoption bifurcated: price-exposure slowed, infrastructure (RWA, CME 24/7, regulated rails) accelerated.
  - **may_outflows:** >$4bn since early May
  - **may27:** $733.4M single-day (IBIT −$527.8M)
  - **aum:** below $100bn to ~$97bn
  - **skew:** −5%/−7% (Deribit)
  - **cumulative:** ~$58.72bn since 2024 launch
  - *Sources (2):* Intellectia/SoSoValue; Deribit Insights
- **Crypto-Equity Bridge (§8 → §10)**  ·  MEDIUM (beta structure; discrete returns proxy)  ·  _Signal_
  - *Summary:* The explicit junction with equities: Coinbase (COIN) carries exchange/custody/ETF-settlement beta; MicroStrategy (MSTR) is a levered BTC proxy; public miners add energy-opex beta. All trade WITHIN the §8 equity tape — they fell in W1 risk-off and recovered with the Nasdaq, amplifying BTC's move. Beta structure is the claim; discrete conflict-window returns are proxy.
  - **coin:** exchange + custody + ETF-settlement beta
  - **mstr:** levered BTC proxy (NAV + convert leverage)
  - **miners:** BTC + energy-opex + equity beta
  - **returns:** proxy/directional
  - *Sources (2):* Section 8 (Global Equities); Section 9 (Cross-Asset)

**Other content blocks on this page:**
- **scenarioRegime** — 11-row table (cols: dim, hormuz_closure, oil_strike, cable_severance, ceasefire)
- **scenarioConclusion:** In NO scenario did crypto act as a clean flight-to-safety asset. Its most defensible non-risk-asset role is the stablecoin synthetic-dollar / sanctions-rail function in the banking-isolation tail (cable_severance + sanctions) — and even that is capped by issuer freeze capability. Consistent with §9: the dollar, not gold and certainly not crypto, captured the haven bid; crypto's only haven-adjacent role is as a dollar conduit, not a store of value.
- **priceArc:** BTC entered already ~40%+ below its $126,198 (Oct 6, 2025) ATH. On the Feb 28 strike weekend it fell ~3% intraday to ~$63–64k (one retrospective cites a near-9% peak daily decline); ETH fell ~5% to ~$1,867. It rebounded to ~$67k by Mar 3 and pushed past $71,000–71,785 on Mar 10 as the conflict was signalled to resolve "very soon," briefly out-performing gold for the month (~+7% MTD vs bullion ~−2%). The March outperformance did not survive the quarter: renewed mid-April strikes pushed BTC below $72k; by Deribit Week-21 (May 20) BTC hit a >2-week low near $76k and ETH broke below $2,100 on the §9 stock–bond risk-off; late-May strikes drove BTC ~$77k → ~$72.4k (−5.5% on the week), liquidating ~$1bn of leveraged longs, before a tentative Hormuz deal lifted it to ~$73.25–74k by May 29–30. Quarter-scale scorecard (the real story): BTC ~−11% YTD, ETH ~−36.3% YTD (~$2,104) — a ~25-point ETH underperformance gap — while gold outperformed both. Total crypto market cap ~$2.54tn with BTC dominance ~59.9% (May 27): rising dominance is itself a risk-off tell, the crypto analogue of §8's flight to quality. SOL/alt-L1 discrete prints were not provider-quality sourceable — treated as proxy of amplified ETH.
- **crossAssetCompare** — 7-row table (cols: asset, w1, w2, ytd, verdict)
- **havenTest** — 5-row table (cols: comparator, haven, btc, provable)
- **havenVerdict:** What CAN be proven (HIGH): BTC behaved as a high-beta risk/liquidity asset and NOT as digital gold — it sold off on the shock, converged to equities, lagged gold, ran inverse to the haven dollar, and de-risked through ETF outflows. Morningstar/WisdomTree state it directly: crypto's equity correlation "rises in periods of market stress, undermining its diversification case… Bitcoin is not a defensive asset and should not be positioned as one." The 2020 COVID academic finding is the structural precedent (Conlon & McGee): BTC "does not act as a safe haven, instead decreasing in price in lockstep with the S&P 500," increasing portfolio downside risk. What CANNOT be proven: the EXACT point correlations (0.50 / −0.88 are window-dependent and unstable by construction — CME's Shore documents the 60-day BTC↔Nasdaq correlation ranging −0.5 to 0.8 over 2014–2025); and whether BTC has latent hard-money optionality that simply did not activate here.
- **havenAdversarial:** Adversarial source conflict (flagged, not buried): the same Morningstar piece reports BTC rose ~17% since the start of the conflict and outperformed gold — directly conflicting with the scenario path (BTC −11% YTD, lagged gold). Resolution: the figures measure DIFFERENT windows/baselines — the +17% is consistent with the W1 relief rally from the Feb-28 low and a different conflict-start anchor; the −11% is YTD from the Jan-1 baseline through the W2 re-escalation. Critically, both readings agree on the conclusion: BTC is a risk asset whose equity correlation rises in stress, not a haven. We carry the scenario YTD path internally and flag the 17% as a window-dependent T2 conflict; resolve against a single CF Benchmarks BRTI window before trading.
- **stablecoinSupply:** Total stablecoin supply reached a record ~$315bn in Q1 2026 (+~$8bn QoQ, CEX.IO) and ~$322.5bn by May 26 — larger than the FX reserves of 95 sovereign nations, >98% USD-pegged. A notable Q1 divergence: USDC grew ~$2bn while USDT declined ~$3bn — the first meaningful USDT/USDC split since Q2-2022. On-chain settlement scale is the point: stablecoin networks moved >$10 trillion in a single month (January 2026), ~172M holder addresses, ~55–56% of value on Ethereum (~$190bn) — a parallel dollar-liquidity layer whose throughput dwarfs its market cap. The structural risk is concentration: USDT+USDC are ~85% of supply, so a Tether-specific redemption or regulatory shock — not a war headline — is the systemic tail.
- **stablecoinsTable** — 5-row table (cols: coin, supply, mechanism, behaviour)
- **stablecoinPeg:** Peg integrity during the conflict: NO systemic break. No major dollar stablecoin sustained a conflict-driven depeg in Feb–May 2026. The reference depegs remain USDC→~$0.87 (SVB, Mar 2023) and USDe→~$0.6567 on Binance (Oct 10, 2025 cascade) — both pre-2026 and both venue/reserve-specific, not geopolitical. During Gulf banking/cable/sanctions stress, stablecoins are the channel through which value routes OUTSIDE the correspondent-banking and SWIFT systems Iran is already excluded from — a genuine liquidity hedge for legitimate corridor users AND the primary evasion vector authorities target.
- **gulfRegulatory:** UAE / Gulf stablecoin regime (JCJ-relevant): the UAE operates a four-regulator layered regime — the CBUAE has exclusive authority over AED-pegged stablecoins (June 2024 Payment Token Services Regulation), VARA governs non-AED stablecoins on the Dubai mainland, FSRA (ADGM) and DFSA (DIFC) cover the free zones. Key 2026 specifics: algorithmic stablecoins are prohibited as payment instruments; reserves require daily reconciliation, monthly external-auditor confirmation, par redemption by next business day; FATF Travel-Rule compliance is mandatory; and a regulatory-reset deadline of Sept 16, 2026 requires license alignment, with penalties up to AED 1bn. For Dubai-domiciled JCJ, Gulf stablecoin rails are MORE, not less, regulated than the global average — a compliance tailwind for licensed venues and a headwind for grey-market corridors.
- **microNote:** BTC futures OI had already fallen ~$61bn → ~$49bn (−20%) after the February dip, recovering only toward ~$50bn by late April WITH funding rates negative despite a ~14% price rally — a deleveraged, short-biased microstructure. CME BTC futures OI hit a 14-month low (~$7.2bn daily avg, March contract) in early April as basis trades unwound. Persistently negative perpetual funding despite price rallies (shorts paying longs) is the crypto analogue of §9's "specs fading the rally" — genuine risk-off, not rotation. Liquidations clustered at psychological round numbers: ~$1bn of leveraged longs liquidated on the May 27 drop below $73k; Deribit puts concentrated at the $60,000 strike during March stress. Liquidation totals are LOWER BOUNDS given documented CEX under-reporting (Binance logs one liquidation/second).
- **oct2025Proxy:** The binding microstructure precedent is Oct 10–11, 2025: a Binance Unified-Account collateral-pricing flaw and CEX outages amplified a ~10–14% BTC decline into a $19.16bn liquidation cascade across ~1.6M accounts (~87% longs; derivatives volume ~$748.3bn that day, ~3× the 2025 daily average) — when USDe printed ~$0.6567 on Binance vs $1.00 everywhere, triggering cross-margin liquidations on positions that never saw organic selling. On-chain redemptions and DeFi oracle reads held 1:1 (Aave showed USDe at peg). The transferable lessons for a conflict regime: (1) oracle-propagation risk is the single point of failure; (2) cross-margin turns one venue's dislocation into portfolio-wide liquidation; (3) auto-deleveraging (ADL) removes liquidity precisely when needed. The structural read for JCJ: CEX microstructure is the fragility; the chains are not. Attribution note: described publicly as a Binance internal-pricing failure, not a confirmed Chainlink/Pyth fault — no formal oracle post-mortem was published.
- **namedVenues** — 7-row table (cols: venue, role, data, tier)
- **gulfCable:** Crypto venues serving Gulf/Asia depend on the same subsea-cable routes mapped in §7 (Structural Risk). There was NO public 2026 incident of a cable cut degrading a named exchange's matching engine or oracle feeds — a structural tail, not a realized event. Per §8/§9, cable-severance historically did NOT move broad cross-asset vol (VIX/MOVE), so a crypto-specific connectivity hedge sized to this channel is prone to false positives.
- **defiNote:** There was NO confirmed conflict-specific DeFi or oracle failure in Feb–May 2026 — the chains and major DeFi protocols functioned normally through the geopolitical stress. The binding risk lesson is structural and pre-conflict (the Oct-2025 cascade), not a 2026 event. The monitored proxy for the absent incident is: (i) oracle update latency/staleness on Chainlink/Pyth feeds during regional connectivity stress; (ii) stablecoin pool imbalance (e.g. Curve 3pool / USDe pools) as an early dislocation tell; (iii) cross-margin concentration on the largest perp venue. During 2026 drawdowns, exchange BTC balances fell to a ~5-year low (~2.16M coins) — coins moved off exchanges into cold storage, reducing immediate liquidation fuel even as ETFs redeemed.
- **rwa:** RWAs / T-bill tokenization were a settlement-stress beneficiary that ACCELERATED through the macro stress. On-chain RWA value (ex-stablecoins) reached ~$51.4bn in March 2026 (+340% YoY from $11.7bn) — BlackRock BUIDL ~$8.2bn, Franklin Templeton ~$3.1bn, Ondo ~$2.4bn; tokenized private credit (~$18.6bn) overtook tokenized Treasuries (~$17.2bn) as the largest category; DeFi TVL hit an all-time high ~$183.4bn on Mar 7. Tokenized T-bills (~4.2–5.1% yield) are increasingly DeFi collateral on Aave/Morpho/Euler — a MORE stable collateral type during sanctions/settlement stress than volatile crypto. (RWA.xyz and DefiLlama are treated as T2 data providers, not official statistics.)
- **miningNote:** Iran's bitcoin hashrate collapsed ~9 EH/s → ~2 EH/s (≈−77%), taking a large share of its once-~427,000 active miners offline as conflict-driven energy disruption hit; this was contained — neighbouring UAE and Oman (~3% of global hashrate each) saw no disruption. Global hashrate fell ~1,066 EH/s (Q1) → ~1,004 EH/s (Q2), ≈−5.8% QoQ, dipping below the 1 ZH/s threshold in early May. Difficulty cut ~2.3% on May 1 and ~2.43% on Apr 17 — six downward adjustments in 2026. USD hashprice ran ~$31.62 → $33.25/PH/s/day by April 13, at or below breakeven for many miners.
- **minerMargins:** Electricity is ~60–80% of mining opex; the network consumes >400 GWh/day. The 2026 breakeven sits near ~$0.10/kWh on S21-class (sub-15 J/TH) hardware: industrial miners at $0.07–0.08/kWh ran ~20–50% margins, while $0.10+/kWh tipped older fleets into loss as difficulty rose. Energy-cost sensitivity heuristic: at ~$33/PH/s/day hashprice and sub-15 J/TH efficiency, a +$0.02/kWh move (~$0.06→$0.08) is roughly the difference between a comfortable and a marginal operation — so a §6 conflict-driven regional power-price spike is DIRECTLY margin-compressive for exposed miners, which is why high-cost Iranian capacity went offline first. This is the direct channel; the indirect channel (BTC price beta compressing miner revenue and public-miner equity) is larger in dollar terms but not unique to mining.
- **minerEquities:** Public miners (MARA, RIOT, CLSK, CIFR) are levered crypto-equity — BTC price beta PLUS energy-opex beta PLUS equity-market beta (§8). In hormuz_closure/oil_strike they are doubly hit (BTC down + power up); in ceasefire they are high-beta recoverers. Discrete 2026 conflict-window miner-equity moves were not provider-quality sourceable — treated as proxy/directional; the defensible claim is the exposure structure. Separately, Fidelity flagged miners redirecting infrastructure toward higher-margin AI data-center workloads as hashprice stayed compressed — an exogenous downward pressure on hashrate distinct from the conflict.
- **sanctionsFreeze:** The headline event — the ~$344.15M USDT freeze. On April 23, 2026, Tether froze 344,149,759 USDT (~$344.15M) across two Tron addresses in coordination with OFAC/US law enforcement; on April 24, OFAC updated its designation of the Central Bank of Iran, adding those crypto wallets to the SDN List with linkages to the IRGC-Qods Force and Hizballah — the largest on-chain freeze of Iranian sovereign crypto reserves on public record. The wallets had received ~$370M across ~1,000 transactions since March 2021, with accumulation ending by late 2023 — a profile TRM read as sovereign reserve storage, not operational deployment.
- **sanctionsContest:** The freeze is contestable, not absolute: in May 2026, attorney Charles Gerstein filed suit in SDNY seeking to compel Tether to redirect the frozen ~$344M to terrorism-judgment creditors — a reminder that issuer freeze capability creates a LEGAL contest surface (who controls blocked property), even as it forecloses OPERATIONAL evasion. The freeze power is real, but its finality is now a live legal question.
- **iranianRail:** The broader picture (sourced, not inflated): Iran reportedly controls ~$7.7bn in digital assets and the CBI was reported to have purchased >$500M in USDT as a banking workaround (Elliptic, via press). In January 2026, OFAC made its first-ever designation of IRGC-linked exchange infrastructure — UK-registered Zedcex/Zedxion, through which TRM identified ~$1bn routed with direct IRGC exposure. Chainalysis separately traced an Iranian broker network (~$100M tied to oil sales 2023–2025). The $7.7bn and >$500M figures are press/forensic-blog estimates (T2), labeled MEDIUM/LOW and not used as a headline anchor.
- **sanctionsVerdict:** The decisive verdict: stablecoins are NOT a viable long-run state-evasion tool. Public-blockchain transparency + issuer freeze capability + public-private cooperation (Tether reports >$4.4bn frozen across 5,000+ wallets to date) make large-scale evasion "highly vulnerable to targeted disruption"; per Tether's CEO, "USDT is not a safe haven for illicit activity." A potential $6bn Iran frozen-asset release was under late-May discussion; reduced evasion demand could paradoxically CONCENTRATE enforcement on residual flows — the metric to watch is on-chain stablecoin flow through flagged addresses, not diplomatic headlines. Forensic vendors (Chainalysis/TRM/Elliptic) are T2 research providers; OFAC/Tether official actions are T1.
- **regulatoryAccel:** Regulatory acceleration (the structural tailwind): the conflict landed atop a maturing framework — the US GENIUS Act (July 2025), an April 8, 2026 FinCEN/OFAC joint NPRM on stablecoin-issuer AML/CFT, a May 21, 2026 Treasury Travel-Rule report, full EU MiCA rollout, Hong Kong's Stablecoin Ordinance, and the UAE's layered regime with the Sept 16, 2026 license-alignment deadline. The FATF Travel Rule (~$1,000/€1,000 threshold) governs VASP data-sharing globally. Net effect: the conflict ACCELERATED tokenized-settlement and compliant-rail adoption rather than CBDC issuance, which saw no conflict-driven acceleration in public data.
- **etfFlows:** Spot BTC ETF flows — the May exodus. US spot BTC ETFs reversed from strong inflows (~$2.44bn in April, the best since Oct 2025; $3.29bn over Mar–Apr) to >$4bn of outflows since early May, including a $733.4M single-day outflow on May 27 (IBIT −$527.8M, 2nd-largest ever; GBTC −$104.8M) — an 8-session redemption streak (~$2.6bn cumulative) that dragged total US spot BTC ETF AUM below $100bn to ~$97bn. Cumulative inflows since the Jan-2024 launch remained ~$58.72bn; IBIT ~$67bn AUM, FBTC ~$17bn; Jane Street cut ETF holdings ~70% in Q1. This is the direct cross-asset confirmation: ETF redemptions are the §9 de-risking flow expressed in crypto.
- **optionsSkew:** Options skew (Deribit, T1): 7-day 25-delta put-call skew at −5% (BTC) / −7% (ETH) by May 20 showed defensive hedging, while ATM IV near YTD lows (35%/43%) showed no panic in broad vol — institutions hedged tails cheaply rather than capitulating, the crypto mirror of §9's bifurcated vol surface. ETH ETFs had pockets of relative strength (+$187M weekly, best of the year, around Apr 13) before being swept into the broader May risk-off. A 24/7 CME BTC futures/options launch was reported for May 29 (treated T2 pending direct CME notice).
- **cryptoEquities:** Crypto equities (COIN, MSTR, public miners) — the explicit §8 junction: Coinbase carries exchange-volume + custody + ETF-settlement beta; MicroStrategy/Strategy (MSTR) is a levered BTC proxy (BTC NAV + convertible-debt leverage); public miners add energy-opex beta. All trade WITHIN the §8 equity tape — they fell in the W1 risk-off and recovered with the Nasdaq, amplifying BTC's move. Discrete 2026 conflict-window returns were not provider-quality sourceable (proxy/directional); the defensible claim is the beta structure connecting §8 → §10.
- **adoptionBifurcated:** On-chain accumulation vs ETF redemption (the divergence): even as ETFs redeemed, exchange BTC balances fell to a ~5-year low (~2.16M coins) and whales accumulated into the weakness — long-term holders bought what allocators sold. Did traditional-market stress accelerate or slow adoption? BIFURCATED: price-exposure adoption (ETF flows, leveraged OI) SLOWED under the risk-off regime, while infrastructure adoption (RWA +340% YoY, CME 24/7, regulated stablecoin rails, LTH accumulation) ACCELERATED. The conflict damaged the "diversifier/hedge" thesis among allocators while strengthening the "regulated digital-dollar / tokenized-settlement" thesis.
- **signalHierarchy** — 7-row table (cols: order, metric, leadlag, behaviour, refresh)
- **leadingIndicators** — 9-row table (cols: indicator, detail)
- **scenarioTrades** — 4-row table (cols: scenario, label, tone, text)
- **failureModes** — 7-row table
- **lowLatencyRefresh:** What needs low-latency refresh before trading: spot reference rate (CF Benchmarks BRTI), perp funding/OI (Kaiko/CoinGlass/CCData — T2), Deribit skew/ATM IV, ETF flow prints, and on-chain sanctioned-flow trackers. The single highest-value, lowest-latency cross-asset trigger is OVX + DXY + 10Y from §9 — crypto re-prices AFTER these move.
- **sourceConflict** — 15-row table (cols: figure, contested, issue, anchor, tier)
- **highAnchors** — 10-row table
- **proxyOnly** — 12-row table
- **adversarialClose** — 7-row table
- **dataQuality** — object (keys: high, moderate, quarantined)
- **relatedSectors:** Crypto is the TERMINAL node of the causal chain: physical (§1–7) → equities (/markets/equities) → cross-asset (/markets/cross-asset) → crypto (here). It consumes the §8 equity beta (COIN/MSTR/miners trade within the equity tape) and the §9 cross-asset regime (the equity→crypto beta-bridge card on /markets/cross-asset points here). The sanctions/dollar-rail channel connects back to /markets/credit (dollar funding) and the /structural/digital cable layer. The single highest-value upstream trigger is OVX + DXY + 10Y from /markets/cross-asset — crypto re-prices after these move.
- **keyTakeaways** — 10-row table (cols: n, claim, anchor)

---

### Sovereign Credit & Plumbing
`/markets/credit` · source `credit.json`

**Other content blocks on this page:**
- **source:** VegaReady Phase 2 Section 2 v2 — Capital Flows, Sovereign Credit & Financial Plumbing (source-quality revision)
- **note:** Phase 2 Section 2. Richer schema than the cascade sets: each entry data{} adds scenario_impacts{4}, beneficiaries, losers, substitution_cycle, investment_implications, stale_claim_flags. Renders at /markets/credit. Full DQE + source tiers in the source docx.
- **entries** — 10-row table (cols: id, title, category, summary, data, sources, confidence, lastUpdated, tags)
- **cascadeChain** — 10-row table
- **beneficiariesLosers** — 17-row table
- **takeaways** — 7-row table
- **nextSection:** Section 3 — Insurance, Shipping Finance & Trade Credit: war-risk premium escalation, P&I club war-clause activation and Gulf withdrawal, shipping-finance bank exposure to the shadow fleet, supply-chain finance repricing under Hormuz constraint, and VLCC charter-rate movements.
- **methodology:** Source tiers: T1 official/institutional (IMF, U.S. Treasury TIC/OFAC, Fed, FinCEN, rating-agency primary actions, central banks); T2 press/proprietary (Reuters, Bloomberg, S&P Global, Semafor, CFR); T3 model/estimate — quarantined, never anchored. This is the v2 source-quality revision: weak/social sources removed; every headline figure carries a T1 or T2 source, and per-card data caveats flag what is provisional or unverified.

---

### Insurance, Shipping & Trade Credit
`/markets/insurance` · source `insurance.json`

**Thesis:** The structural fault line this episode exposed: insurance repricing PRECEDED the physical closure of Hormuz. The market's effective foreclosure of standard commercial transit was achieved before any formal military blockade — driven by P&I-club cancellation notices and JWC area expansion operating on contractual 72-hour mechanisms. Simultaneously, OFAC's 'Economic Fury' campaign, ICC guidance that trade-finance rules stay operative regardless of physical disruption, and correspondent-banking compliance delays created a three-layer financial squeeze on commodity traders and LC counterparties that will outlast any ceasefire by months.

**Other content blocks on this page:**
- **source:** VegaReady Phase 2 Section 3 v2 — Insurance, Shipping Finance & Trade Credit
- **schema:** data-point / event cards (bespoke per-card fields); generator adapter normalizes to {date, metrics[], ...}
- **entries** — 10-row table (cols: id, title, category, summary, data, sources, confidence, lastUpdated, tags)
- **premiumTrajectory** — 4-row table (cols: phase, date, awrp, cost, note)
- **scenarioImpact** — 4-row table (cols: scenario, label, status, tone, mechanism, winners, losers, returnDynamics)
- **dataQuality** — object (keys: high, medium, quarantined)
- **nextSection:** Section 4 — Real Assets, Construction, Labor & Migration.
- **precedents** — 6-row table (cols: episode, period, peak, mechanism)
- **precedentNote:** The Red Sea episode established the 'ratchet effect': premiums rise fast and fall slowly, because actuarial confidence needs statistical evidence — not political statements — that the risk has genuinely changed. It applies with greater force to 2026 given mines requiring verified clearance, demonstrated IRGC targeting capability, and ongoing sanctions uncertainty (Kpler, Nov 2025).
- **premiumGeography:** Geographic gradient (Apr 13): Mideast Gulf ~1% · Gulf of Oman ~0.5% · Bab-el-Mandeb / Red Sea ~0.75% · Strait of Hormuz transit ~3% — the differential tracks IRGC offensive-capability concentration inside the Strait.
- **investmentImplications** — 4-row table (cols: stakeholder, text)

---

### Property, Materials & Megaprojects
`/markets/property` · source `property.json`

**Thesis:** The Hormuz shock landed on the physical economy as a metals-and-materials squeeze: Gulf smelter shutdowns drove aluminum to a four-year high, construction inputs surged at a 12.6% annualized rate, and Gulf real estate split — Abu Dhabi's transaction value +161% YoY against a Dubai sentiment pullback — while Saudi Arabia deferred The Line past 2030 and terminated megaproject contracts. The binding constraint on recovery is physical: ADNOC's al-Jaber warns even an immediate ceasefire needs a minimum 4 months to restore 80% of pre-conflict flows.

**Cards (6):**

- **Gulf Aluminum Supply Disruption**  ·    ·  _Commodities / Metals_
  - *Summary:* Alba (world's largest single-site smelter, 1.6 Mt/yr) shut Lines 1–3 (19% capacity) on March 15–16; declared force majeure. Q1 2026 sales −17% YoY, production −14% YoY. LME hit $3,546.50/t (4-yr high Mar 16). +19% YTD through May. Ex-China markets in 135,000t deficit.
- **Construction Input Cost Inflation**  ·    ·  _Construction / Commodities_
  - *Summary:* US construction input prices: 12.6% annualized Jan–Feb 2026 (ABC/BLS); 6.2% cumulative Jan–Apr; +7.4% YoY nonresidential. Diesel +73.8% YoY (April). Aluminum mill shapes +39.1% YoY. ACA: US cement demand −2.5% 2026; real construction spending −3.1%. Platts cement CIF Houston $88/t (Apr 30).
- **Dubai Real Estate: Sentiment Pullback**  ·    ·  _Real Estate_
  - *Summary:* Trade-press data (no DLD primary available at report date): early-March transactions ~6,129 units vs ~8,199 prior period (−25% vol); prices reported −4–5% from peak. No broad collapse is confirmed, but all Dubai-specific shock figures require source caveats — see Data Quality Exceptions.
- **Abu Dhabi Real Estate: T1-Anchored Outperformance**  ·    ·  _Real Estate_
  - *Summary:* Q1 2026 (Adrec official): total transactions Dh66B (+161% YoY), 13,518 deals (+96%), FDI +423%, repeat lease +16%. Caveat: Q1 spans Jan–Mar; majority pre-dates Feb 28 conflict. Supply pipeline only +3.3% for 2026.
- **NEOM / Saudi Megaproject Restructuring**  ·    ·  _Megaprojects / Sovereign Capital_
  - *Summary:* The Line deferred post-2030 (Semafor, confirmed by PIF Governor on-record). Contracts terminated: Webuild (~$4.7B Trojena), Hyundai E&C+ (SAR 6.16B / $1.6B tunnel), Eversendai (undisclosed). Saudi Q1 2026 biggest fiscal deficit since 2018. OXAGON receives $3B continued investment.
- **ADNOC Fujairah Pipeline Bypass**  ·    ·  _Infrastructure / Energy_
  - *Summary:* New West-East pipeline 50% complete (ADNOC CEO May 20, Atlantic Council); operational 2027. Existing Habshan-Fujairah pipeline: 1.8 Mb/d capacity, currently rerouting volumes. ADNOC CEO: minimum 4 months to 80% flows after ceasefire; full normalization not before Q1–Q2 2027.

**Other content blocks on this page:**
- **schema:** nested-metric data-point cards; adapter flattens to metrics[]
- **source:** VegaReady Phase 2 Section 4 v2 — Property, Materials & Megaprojects (split from Real Assets)
- **scenarioMatrix** — 4-row table (cols: scenario, label, def, tone, construction, realEstate, megaprojects)
- **substitution** — 4-row table (cols: area, text)
- **precedents** — 5-row table (cols: episode, period, construction, realestate)
- **precedentNote:** Structural distinction: the 2026 event combines (1) a primary energy/material supply shock (Hormuz), (2) a pre-existing 50% Section 232 metals-tariff shock, and (3) a direct migration-vulnerability crisis — three simultaneous stressors without close post-Cold-War precedent.
- **sourceResolution** — 2-row table (cols: item, resolution)
- **dataQuality** — object (keys: high, moderate, quarantined)

---

### Labor, Migration & Remittances
`/markets/labor` · source `labor.json`

**Thesis:** Beneath the markets sit 24 million migrant workers who build the Gulf. The Hormuz shock compressed the remittance channels that carry their earnings home — India's $51.4B Gulf baseline, the Philippines' $2.79B monthly bank channel (−7.7% in February), and Pakistan/Bangladesh economies where Gulf remittances run 5–9% of GDP — while at least 12 South Asian workers were killed and the ILO projected up to 14M full-time-equivalent job losses in 2026. The binding risk is involuntary immobility, not mass exodus: kafala passport retention traps low-wage workers in place.

**Cards (4):**

- **Migrant Worker Casualties and Economic Hardship**  ·    ·  _Labor / Human Rights_
  - *Summary:* GCC: 24M migrant workers (ILO). At least 12 South Asian deaths (BBC). HRW March 2026: 38 worker interviews across 6 GCC states — salary halving for 400+ workers documented; hospitality staffing from 25–30 to 3–4; Kuwait taxi incomes halved. Philippines: 2,000 repatriated by Mar 23. Bangladesh: ~500 repatriated.
- **Remittance Risk: India**  ·    ·  _Remittances / Macro_
  - *Summary:* India Gulf remittances: $51.4B (FY2025, ~38% of $135.4B total) — Citi/CNBC. Capital Economics (via DW): short conflict −5% remittances; 3+ months −30%. India income risk: $5B–$10B annually at 10–20% decline scenario.
- **Remittance Risk: Philippines (T1 BSP Data)**  ·    ·  _Remittances / Macro_
  - *Summary:* BSP official: Feb 2026 bank-channel remittances $2.79B (−7.7% MoM, 9-month low). Jan: $3.02B. Saudi 6.1%, UAE 4.2%, Qatar 2.9% of total inflows. DepDEV: −P167.45B risk if mass repatriation.
- **ILO Global Labor Market Projections**  ·    ·  _Labor / Macro_
  - *Summary:* ILO May 18, 2026 Employment & Social Trends Update: under ~50% oil price scenario — 14M FTE job losses 2026, 38M in 2027; real labour income −$1.1T (2026) and −$3.0T (2027). Arab States worst hit (−10.2% hours in severe scenario). 4% non-citizen employment multiplier per 1% citizen employment contraction.

**Other content blocks on this page:**
- **schema:** nested-metric data-point cards; adapter flattens to metrics[]
- **source:** VegaReady Phase 2 Section 4 v2 — Labor, Migration & Remittances (split from Real Assets)
- **scenarioMatrix** — 4-row table (cols: scenario, label, def, tone, labor)
- **migrationExposure** — 4-row table (cols: country, workers, remittances, gulfShare, gdpShare, tier)
- **migrationNote:** GCC migrant-worker anchor: ~24M (ILO, T1). The Coalition on Labor Justice's 31M covers a broader zone (GCC + Jordan/Lebanon/Israel/Palestine/Iran) and is T3 advocacy — noted, not anchored. ≥12 South Asian migrant deaths confirmed (BBC); Saudi Arabia's Oct-2025 kafala abolition covers ~13M.
- **humanImpact** — object (keys: intro, deaths, hardship, riskMode)
- **precedents** — 5-row table (cols: episode, period, labor)
- **precedentNote:** Structural distinction: the 2026 event combines (1) a primary energy/material supply shock (Hormuz), (2) a pre-existing 50% Section 232 metals-tariff shock, and (3) a direct migration-vulnerability crisis — three simultaneous stressors without close post-Cold-War precedent.
- **sourceResolution** — 2-row table (cols: item, resolution)
- **dataQuality** — object (keys: high, moderate, quarantined)

---

### Food & Agriculture
`/markets/food-agriculture` · source `foodag.json`

**Thesis:** The most severe simultaneous shock to fertilizer, food security and harvests since the 2022 Ukraine war — but transmitting differently. Where Russia's war removed grain supply directly, the 2026 crisis works through input-cost inflation that suppresses FUTURE harvests rather than depleting current stocks. The Gulf is 36% of global urea exports; urea has run +80% to >$850/t; the FAO Food Price Index has risen three months straight; and the WFP projects up to 45M additional acutely hungry. The delayed fuse — reduced fertilizer application now, lower yields 6–12 months out — is the most tradeable lag in the cascade.

**Cards (5):**

- **Gulf Fertilizer Export Blackout — Force Majeure Cascade**  ·  MEDIUM-HIGH — production shutdowns and force majeures are supported by company/T2 sources; Gulf export-share data is T1; Qatar damage and capacity-at-risk estimates remain provisional/T2  ·  _Fertilizer / Agriculture_
  - *Summary:* Gulf region (36% of global urea exports, 29% ammonia, ~50% sulfur) effectively blocked from export since Feb 28. Iran halted ammonia production; Qatar (QAFCO 5.6 Mt/yr Mesaieed urea plant) shut down March 4 after QatarEnergy strikes; Industries Qatar and SABIC Agri-Nutrients declared force majeure on fertilizer shipments to South America and Asia. The often-cited ~21 Mt annual Gulf urea export-capacity and ~4 Mt DAP capacity-at-risk estimate is treated as T2/T3 proxy only, not a headline anchor.
  - **gulf_urea_export_share:** 36% of global (2023-2025)
  - **gulf_ammonia_export_share:** 29% of global (2023-2025)
  - **gulf_sulfur_share:** ~50% of globally traded sulfur
  - **qafco_capacity_shut:** 5.6 Mt/yr Mesaieed urea plant (QatarEnergy); shut March 4, 2026
  - **qatarenergy_lng_damage_repair:** 3-5 years per CEO Kaabi statement March 19, 2026
  - **urea_export_capacity_disrupted:** Not anchored — ~21 Mt/yr Iran + Qatar + Saudi Arabia estimate is Serrari/Oxford proxy; see Data Quality Exceptions
  - **stranded_fertilizer_cargo:** ~1 million metric tonnes (21 ships as of March 13, 2026)
  - **fertilizer_vessels_exited_gulf:** Only 5 since Feb 28 (as of March 27, 2026 — Kpler)
  - *Sources (5):* IFPRI; S&P Global (QatarEnergy LNG damage); CRU Group (QAFCO shutdown); Carnegie Endowment (force majeure); Kpler (vessels exited)
- **Urea Price Shock — NOLA, Global Benchmarks**  ·  HIGH — World Bank T1 anchors confirmed against CSIS and T2 sources; Oxford Economics/Kiran Ahmed named on-record  ·  _Fertilizer / Commodity Pricing_
  - *Summary:* Urea prices: +32% at NOLA in 1 week (Feb 27 to Mar 5), +80% globally by April (above $850/tonne — highest since Apr 2022). World Bank projects +60% YoY for full year 2026; Oxford Economics projects +30%+ on the overall fertilizer index. Grain-to-urea price ratio lowest since 1960.
  - **urea_NOLA_feb27:** $516/tonne
  - **urea_NOLA_mar5:** $683/tonne (+32% in 1 week)
  - **urea_global_pre_war:** $465.5/tonne
  - **urea_global_mar11:** $585/tonne (+26%)
  - **urea_global_april_peak:** >$850/tonne (+80% since Feb)
  - **urea_WB_forecast_2026:** +60% YoY
  - **fertilizer_index_WB_forecast_2026:** +31% YoY
  - **oxford_econ_fertilizer_forecast:** >30% YoY 2026
  - **urea_feb_to_mar_mom:** +46% MoM (World Bank data)
  - **grain_to_urea_ratio:** Lowest since 1960 (Oxford Economics)
  - *Sources (5):* CSIS; World Bank Fertilizer Tracker; World Bank Commodity Markets Outlook April 2026; World Bank FNS Update 121; Oxford Economics via Arab News
- **FAO Food Price Index — Third Consecutive Monthly Increase**  ·  HIGH — FAO official release; World Bank T1  ·  _Food Prices_
  - *Summary:* FAO FFPI averaged 130.7 points in April 2026 (+1.6% MoM, +2.0% YoY), the third consecutive monthly increase. Vegetable oil sub-index reached its highest since July 2022. FAO revised 2026 world wheat production to 817 Mt (-2% YoY). Over first 2 months post-conflict: global food prices +5%, oils/meals +10%, grains +3% — materially less than the +15% food price surge in the comparable 2-month window after Russia's Ukraine invasion.
  - **FFPI_april_2026:** 130.7 points
  - **FFPI_mom:** +1.6%
  - **FFPI_yoy:** +2.0%
  - **vegetable_oil_index:** Highest since July 2022
  - **meat_index_yoy:** +6.4%
  - **sugar_index_yoy:** -21.2%
  - **food_price_2month_post_conflict:** +5%
  - **oils_meals_2month_post_conflict:** +10%
  - **grains_2month_post_conflict:** +3%
  - **q1_wheat_prices_qq:** +9%
  - **q1_soybean_oil_qq:** +16%; +25% YoY
  - **world_wheat_production_2026_forecast:** 817 Mt (-2% YoY)
  - **comparison_ukraine_2month:** +15% (vs. current +5%)
  - *Sources (2):* FAO FFPI (official); World Bank CMO May 2026
- **WFP Acute Hunger Projection — 45 Million Additional People**  ·  HIGH — T1 WFP official; figures are conditional scenario projections, not observed outcomes  ·  _Food Security / Humanitarian_
  - *Summary:* WFP estimates 45 million additional people could face acute hunger (IPC3+) in 2026 if conflict persists through Q2 with oil above $100/bbl, on top of 318 million already food-insecure. More than half would be in Sub-Saharan Africa and MENAAP. Asia: +24% (9.1M); West/Central Africa: +21% (10.4M); East/Southern Africa: +17% (17.7M); MENA: +14% (5.2M).
  - **existing_food_insecure:** 318 million (pre-conflict baseline)
  - **WFP_projected_additional:** 45 million (conditional on conflict persisting + oil >$100/bbl through Q2 2026)
  - **potential_total_food_insecure:** Up to 363 million
  - **asia_increase:** +9.1 million (+24%)
  - **west_central_africa_increase:** +10.4 million (+21%)
  - **east_southern_africa_increase:** +17.7 million (+17%)
  - **mena_increase:** +5.2 million (+14%)
  - **latam_increase:** +2.2 million (+16%)
  - *Sources (3):* WFP (March 17, 2026); WFP (April 2, 2026 — projected increase publication); World Bank Food Security Update
- **GCC Food Reserve Adequacy and Chokepoint Concentration**  ·  MEDIUM — FAO RNE strategy unit is cited indirectly rather than directly hyperlinked; reserve depth figures are T2 and should be treated as planning-grade, not official-statistical, anchors  ·  _Food Security / GCC_
  - *Summary:* GCC imports 70–90% of food; Bahrain, Kuwait, Qatar, Oman, UAE have 100% Hormuz chokepoint exposure for food imports (Saudi Arabia: 59% via Hormuz). Staple reserves: 3–4 months for most GCC states (Bahrain, Kuwait); Qatar up to 2 years for staples (Hamad Port terminal); UAE 4–6 months. Critical vulnerability: fresh produce (Saudi imports 82% of fresh fruit); strategic reserves cover only staples, not perishables.
  - **GCC_food_import_dependency_range:** 70-90%
  - **bahrain_kuwait_qarar_oman_uae_hormuz_exposure:** 100% for imported food
  - **saudi_hormuz_exposure:** 59% (Red Sea alternative routes available)
  - **bahrain_kuwait_staple_reserves_months:** 3-4 months
  - **UAE_staple_reserves_months:** 4-6 months
  - **qatar_staple_reserves:** Up to 2 years (Hamad Port Food Security Terminal)
  - **saudi_food_import_dependency:** 80-85%
  - **Saudi_fresh_fruit_imports:** 82% of fresh fruit imported
  - **GCC_cereal_import_dependency:** 95%; 59% Hormuz-exposed
  - **GCC_sugar_import_dependency:** 97%; 96% Hormuz-exposed
  - *Sources (3):* FAO RNE / Goumbook; Dutch Ministry of Agriculture GCC food systems report; The National

**Other content blocks on this page:**
- **schema:** flat data-point cards (insurance-style); adapter -> event cards
- **source:** VegaReady Phase 2 Section 5 — Food & Agriculture (the deep dive of the /transmission Fertilizer and Agriculture sectors)
- **priceTrajectory** — 4-row table (cols: phase, level, change, note)
- **forwardProjections:** World Bank: fertilizer index +31% YoY 2026, urea +60%, before easing in 2027. FAO (Torero): +15–20% in H1; if half of world urea exports are impacted, urea could 'more than double.' Yara CEO: ~0.5Mt of nitrogen not being produced; up to 50% first-season yield loss on the most-exposed crops; trade delays could cost up to 10 billion meals a week. Oxford Economics: the grains-to-fertilizer price ratio is at its lowest since records began in 1960.
- **crossShock** — 5-row table (cols: metric, ukraine, hormuz, why)
- **crossShockNote:** The muted response vs Ukraine reflects ample grain stocks and Northern-Hemisphere farmers having pre-purchased fertilizer. The shock transmits through input-cost inflation, not direct export loss — a delayed fuse that suppresses FUTURE yields, not current stocks. FAO cut its 2026 world wheat forecast to 817Mt (−2%); only 25% of wheat, 14% of corn and 10% of rice crosses borders, so small shocks swing import-dependent prices hard.
- **regionalHunger** — 5-row table (cols: region, people, pct)
- **regionalHungerNote:** ~45M additional acutely food-insecure across 53 countries IF the conflict runs through Q2 2026 with oil >$100/bbl — on top of 318M already food-insecure. WFP entered 2026 needing $13B for 110M people after donor cuts forced ~6,000 layoffs; its Sudan route (India → Salalah → Jeddah → Port Sudan) is +9,000km / +25 days.
- **gccFood** — 6-row table (cols: country, dependency, reserve, route, vuln)
- **gccFoodNote:** 70–90% of GCC food is imported; Bahrain, Kuwait, Qatar, Oman and the UAE each have 100% Hormuz exposure for imported food — only Saudi Arabia has meaningful Red Sea alternatives (59% Hormuz-exposed). Fresh produce is the binding constraint (Saudi imports 82% of fresh fruit); cold-chain pressure bites beyond 3–4 weeks. Carboun's Elgendy: 'beyond three months, the reserves start running thin.'
- **scenarioMatrix** — 4-row table (cols: scenario, label, tone, impact)
- **sourceResolution** — 2-row table (cols: item, resolution)
- **dataQuality** — object (keys: high, moderate, quarantined)
- **relatedSectors:** This is the deep dive of the /transmission Fertilizer & Ammonia and Agriculture & Food sectors — the same cascade, fully resolved.
- **policyResponse** — 7-row table (cols: actor, action, date)
- **cropCalendar** — 5-row table (cols: period, event, current)
- **cropCalendarNote:** FAO's Torero frames the crop calendar — not stocks — as the binding constraint. Purdue's test: a conflict resolved in 4–6 weeks (before spring planting finishes) is 'unlikely to produce a sustained shock'; one extending through the planting season into summer harvest — the realized path, with Hormuz effectively closed Feb 28 through at least May 30 — has 'structural food-price parallels to 2022.' Negotiation status (May 30): a draft circulated (Iran pledging to restore Hormuz traffic within a month) but Trump rejected it and no deal is signed — and economists warn a reprieve may come too late for the 2026 N-hemisphere season. A strong El Niño is a flagged compounding risk.
- **sulfurPhosphateNote:** Beyond nitrogen, a secondary shock runs through sulfur — a byproduct of Gulf oil-and-gas processing and the feedstock for phosphate fertilizer. The Gulf is ~50% of globally traded sulfur; CSIS estimates ~45% of sulfur trade and ~20% of global phosphate trade are affected, with Saudi Arabia + Israel alone at 17% of phosphate exports. The nitrogen squeeze and the sulfur/phosphate squeeze compound.
- **investmentImplications** — 3-row table (cols: stakeholder, text)

---

### Water & Desalination
`/markets/water` · source `water.json`

**Thesis:** The Gulf runs on desalination — 33% of the world's capacity (22.67M m³/day across 3,401 plants) — and its drinking water is near-totally dependent on it: Qatar 99%, Bahrain and Kuwait 90%, Oman 86%. Yet most states hold under two days of stored water. Plants were already struck in March (a confirmed Iranian drone on Bahrain; Qeshm offline a month; debris at Fujairah and Doha West) without yet interrupting supply — but a CIA assessment called disrupting Gulf desalination worse than the loss of any other commodity. With 62–73M people dependent, this is the conflict's clearest existential tail risk.

**Cards (1):**

- **GCC Desalination Infrastructure Under Threat**  ·  MEDIUM-HIGH for infrastructure data (CSIS/official); MODERATE for attack status (real-time evolving; some claims disputed)  ·  _Water Security_
  - *Summary:* GCC states operate 3,401 desalination plants producing 22.67 million m³/day — 33% of global capacity. Qatar (99%), Bahrain (90%+), Kuwait (90%), Oman (86%) depend on desal for drinking water. Confirmed strikes: Bahrain (Iranian drone, March 8 — no supply disruption), UAE Fujairah F1 and Kuwait Doha West (collateral damage, operations continued). Water storage equivalent to only 2 days normal demand in UAE; Bahrain and Kuwait have insufficient buffers.
  - **GCC_daily_capacity_m3:** 22.67 million m³/day
  - **global_daily_desal_share:** 33%
  - **qatar_desal_drinking_share:** 99%
  - **bahrain_desal_drinking_share:** 90%+
  - **kuwait_desal_drinking_share:** 90%
  - **oman_desal_drinking_share:** 86%
  - **UAE_water_storage_days_normal:** 2 days (normal demand); up to 16-45 days under rationing
  - **GCC_population_desal_dependent:** ~62-73 million
  - **bahrain_drone_strike_date:** March 8, 2026
  - **qeshm_island_desal_attack:** March 7, 2026 (US strike alleged by Iran FM); 30 villages affected
  - *Sources (4):* CSIS via Circle of Blue; Arab Center Washington DC; Al Jazeera desalination data; CNN desalination analysis

**Other content blocks on this page:**
- **schema:** flat data-point cards (insurance-style); adapter -> event cards
- **source:** VegaReady Phase 2 Section 5 — Water & Desalination (the conflict's clearest existential tail risk)
- **dependencyTable** — 6-row table (cols: country, desalShare, drinking)
- **attacks** — 6-row table (cols: date, event, status)
- **reserveNote:** Storage is the gap. The UAE's 2036 strategy would store only ~2 days of national demand (16–45 days under rationing); Bahrain and Kuwait cannot buffer a significant interruption; Qatar's desalination itself depends on the same at-risk gas. Three-quarters of GCC plants are integrated power-and-water — so a strike on the adjacent power station cuts water output without touching the desalination unit. A 2008 US cable assessed Riyadh might have to begin evacuation within a week if its primary plant were severely damaged.
- **scenarioMatrix** — 4-row table (cols: scenario, label, tone, impact)
- **sourceResolution** — 1-row table (cols: item, resolution)
- **dataQuality** — object (keys: high, moderate, quarantined)
- **investmentImplications** — 2-row table (cols: stakeholder, text)

---

### Energy & Transition
`/markets/energy` · source `energytransition.json`

**Thesis:** The conflict re-rated energy security — and capital rotated into electrification, not away from the transition. The IEA's World Energy Investment 2026 puts 2026 spend at $3.4tn, ~two-thirds clean, explicitly framed around Hormuz. But the transition is bifurcating: renewables, grids and storage accelerate (23 countries acting, renewable ETFs at a 4-year inflow high) while gas ($330bn) and coal ($180bn) hit decade highs as fallback. Three structural brakes bind it — cost of capital (EM renewables WACC ~13% vs Europe ~5%), the hydrogen reset (correction predates the war, compounded by fertilizer-linked feedstock costs), and a critical-minerals pipeline that can't keep pace (copper ~30% short by 2035). Carbon pricing held its integrity (EU ETS €74–77; CBAM now binding) rather than buckling. Net: security logic is now the dominant driver of the transition — reinforcing a shift 70% funded by fossil importers seeking to escape import dependence.

**Cards (7):**

- **Energy-Security Capital Rotation — IEA WEI 2026**  ·  MEDIUM-HIGH — IEA underlying figures corroborated across multiple T2 outlets and BNEF; IEA primary PDF was robots-blocked at collection, secondary citations consistent  ·  _Energy Transition / Capital_
  - *Summary:* The IEA's World Energy Investment 2026 (released May 28, 2026, explicitly framed around the Middle East conflict and Hormuz disruption) projects $3.4tn total 2026 energy investment, up ~5% real on 2025's record — ~$2.2tn to clean/low-emissions vs ~$1.2tn to fossil fuels (~2:1). Renewables ~$665bn (solar $365bn), grids ~$550bn (+20% YoY), storage >$100bn, nuclear >$80bn across 15 countries. The conflict reinforces a transition already driven by import-dependence/security logic — 70% of clean-spending growth over five years came from net fossil importers (China, Europe, India). BNEF independently logged a record $2.3tn 2025 transition investment (+8% YoY).
  - **total_investment_2026:** $3.4 trillion (+~5% real vs 2025's $3.3tn record)
  - **clean_low_emissions:** ~$2.2 trillion (~two-thirds of total)
  - **fossil_fuels:** ~$1.2 trillion
  - **renewables:** ~$665bn (solar $365bn ≈$1bn/day, wind $200bn, hydro $75bn)
  - **grids:** ~$550bn (+~20% YoY)
  - **battery_storage:** >$100bn
  - **nuclear:** >$80bn/yr; 15 countries advancing projects
  - **fuel_import_savings_2025:** ~$260bn avoided by the 5 largest importers (IEA)
  - **bnef_corroboration:** $2.3tn 2025 transition investment (+8% YoY) — independent tracker
  - *Sources (4):* Argus Media citing IEA WEI 2026; Straits Times (IEA); Down To Earth (IEA); Energy News Beat (IEA)
- **Transition Bifurcation — Renewables Accelerate, Gas/Coal Lock In at Decade Highs**  ·  MEDIUM-HIGH — IEA gas/coal figures T1-underlying; country announcements and ETF flows T2; cost-of-capital figures T2  ·  _Energy Transition / Dynamic_
  - *Summary:* The conflict pushed both directions at once. Acceleration: 23 countries across 5 continents announced clean-energy/electrification measures by May 1; renewable-energy ETFs drew >$3bn in April (largest monthly inflow since Jan 2021); a UKSIF survey found 87% of investment firms expect a surge in renewables financing; Norway's NBIM implied ≥$12.6bn of new unlisted-renewables investment by 2030. Lock-in: 2026 gas investment hit $330bn (highest in a decade, LNG-driven in the US and Qatar) and coal supply $180bn (highest since 2012). The binding constraint is cost of capital — emerging-market renewables WACC was 12.95% vs Europe's 5.02% (Jan 2026), and WACC is 20–50% of utility-scale solar LCOE, trapping the most import-exposed economies. IRENA (May 26) stated the next phase "must focus on electrification, renewable energy expansion and a faster move away from fossil fuels."
  - **countries_clean_announcements:** 23 across 5 continents (by May 1, 2026)
  - **indonesia_solar:** 100 GW within 3 years (Prabowo)
  - **philippines_renewables:** ~1.47 GW fast-tracked by end-April
  - **vietnam_lng_cancelled:** Largest planned LNG plant scrapped for renewables+storage, citing ME risk
  - **renewable_etf_inflows:** >$3bn (April 2026 — largest since Jan 2021)
  - **nbim_renewables:** ≥$12.6bn implied (1% of $2.1tn AUM by 2030)
  - **uksif_survey:** 87% of firms expect a renewables-financing surge
  - **gas_investment_2026:** $330bn (decade high; LNG US/Qatar)
  - **coal_supply_2026:** $180bn (highest since 2012; China ~70%, India #2)
  - **em_renewables_wacc:** 12.95% (Jan 2026) vs Europe 5.02%
  - **cost_of_capital_share_lcoe:** 20–50% of utility-scale solar LCOE
  - *Sources (4):* Zero Carbon Analytics; Down To Earth (IEA gas/coal); UKSIF survey; IRENA via Islands Business
- **Hydrogen / Ammonia Correction — Pre-Conflict Onset, Conflict-Compounded**  ·  MEDIUM-HIGH — Rhodium/S&P T2; correction is pre-conflict structural, the conflict is a compounding not originating factor — labeled accordingly  ·  _Energy Transition / Sector_
  - *Summary:* Green hydrogen is the clearest deceleration story, and the correction predates the conflict (mid-2024 onset) — but 2026 feedstock-cost and fertilizer linkages compound it. ~60 major green-hydrogen projects were cancelled in 2025 (~4.9 Mt/yr of would-be capacity); >100 cancelled/paused since mid-2024; the operational electrolyser base is ~2.5 GW against a ~150 GW announced 2030 pipeline (realistic 2030 outlook 25–40 GW). US clean-hydrogen drew just $400m in Q1 2026 with no new projects announced. EU policy support continues (third Hydrogen Bank auction €1.09bn for ~1.1 GW; Hydrogen Mechanism live April 30). The green-ammonia premium runs 50–100% over grey — unbridgeable without IMO carbon pricing — and intersects directly with the Gulf fertilizer-ammonia disruption.
  - **green_h2_cancelled_2025:** ~60 projects (~4.9 Mt/yr)
  - **projects_cancelled_since_mid2024:** >100 paused/scaled back
  - **operational_electrolyser_q1_2026:** ~2.5 GW
  - **announced_2030_pipeline:** ~150 GW (realistic 25–40 GW)
  - **us_h2_investment_q1_2026:** $400m (+27% QoQ, -11% YoY); no new projects
  - **eu_hydrogen_bank_auction:** €1.09bn / ~1.1 GW (May 7, 2026)
  - **green_ammonia_premium:** $200–400/t over $400–600/t grey (50–100%)
  - *Sources (3):* Decarbonize Weekly; Latitude Media / Rhodium Group; S&P Global Energy
- **Critical Minerals — The Hard Constraint on Security-Driven Electrification**  ·  MEDIUM-HIGH — IEA demand/shortfall figures T1-underlying; conflict linkage is structural (China dependence pre-existed); reserve/policy moves T2  ·  _Energy Transition / Minerals_
  - *Summary:* Energy-security electrification collides with a constrained minerals pipeline. Under IEA STEPS, lithium demand rises ~5x by 2040, nickel and graphite ~2x, cobalt and rare earths +50–60%; copper faces a ~30% supply shortfall vs demand by 2035. The IEA estimates building adequately diversified rare-earth supply needs ~$60bn. The 2026 conflict layered a dual-use dimension on existing China dependence: the EU shortlisted tungsten, rare earths and gallium for its first strategic mineral reserve (May 20), Australia's Arafura approved a $1.6bn rare-earths project, and US DFARS will bar China-origin NdFeB/SmCo magnets from DoD systems from Jan 1, 2027 — linking minerals directly to the defense procurement surge.
  - **lithium_demand_2040:** ~5x (STEPS)
  - **nickel_graphite_demand_2040:** ~2x
  - **cobalt_ree_demand_2040:** +50–60%
  - **copper_shortfall_2035:** ~30% vs demand
  - **rare_earth_diversification_capex:** ~$60bn (IEA)
  - **eu_strategic_reserve:** tungsten, rare earths, gallium shortlisted (May 20, 2026)
  - **arafura_project:** $1.6bn rare-earths approved (May 20, 2026)
  - **us_dfars_magnet_ban:** China-origin NdFeB/SmCo barred in DoD systems from Jan 1, 2027
  - *Sources (2):* Andersen Institute / IEA; InvestorNews (critical minerals)
- **Civilian Nuclear as Energy-Security Hedge — Reactor Counts, GW, Barakah Strike**  ·  MEDIUM-HIGH — Barakah capacity/strike cross-confirmed (NPR, The National, IAEA); reactor-pipeline figures WNA-sourced via T2 aggregation  ·  _Energy Transition / Nuclear_
  - *Summary:* Civilian nuclear is being repriced as a baseload security hedge (IEA: >$80bn/yr, 15 countries). Globally 79 reactors are under construction (15 countries, ~86 GW), 124 in advanced planning (+110 GW), China building ~half (39 units, 44 GW; targeting ~110 GWe by 2030). The UAE's Barakah — 4x APR-1400, ~5.6 GW, ~40 TWh/yr, ~25% of UAE power, ~$20bn — was drone-struck May 17–18, 2026: a generator fire forced one reactor onto emergency diesel, with no radioactive release (FANR/IAEA confirmed). The strike crystallized conflict-zone reactor vulnerability as a new IAEA oversight burden. (Proliferation and the Iran stockpile are tracked on the Nuclear & Proliferation page.)
  - **reactors_under_construction:** 79 in 15 countries (~86 GW)
  - **reactors_advanced_planning:** 124 (+~110 GW)
  - **china_under_construction:** 39 (44 GW; ~half of global)
  - **china_2030_target:** ~110 GWe (≈76% jump from 2025)
  - **barakah_capacity:** ~5.6 GW (4x APR-1400); ~40 TWh/yr; ~$20bn
  - **barakah_share_uae_power:** ~25%
  - **barakah_strike:** May 17–18, 2026 — generator fire, one reactor on emergency diesel, no release
  - **global_nuclear_investment_2026:** >$80bn/yr; 15 countries
  - **reactors_proposed:** 305 (+~285 GW potential)
  - *Sources (4):* Cubic Mile of Oil / World Nuclear Association; NPR (Barakah strike); The National (Barakah); CSIS (China nuclear)
- **Carbon Policy Cushioning Without Retreat — EU ETS Integrity, CBAM Definitive Phase**  ·  MEDIUM-HIGH — METSAF and CBAM are official EC policy (T1-underlying); EUA price T2; no direct conflict-specific ETS price shock documented  ·  _Energy Transition / Carbon Policy_
  - *Summary:* The EU response cushioned gas costs without weakening carbon pricing. The Middle East crisis Temporary State aid Framework (METSAF, April 29, 2026) compensates only certain gas-cost increases and explicitly does NOT cover ETS compliance costs or use ETS prices as a proxy — preserving the price signal despite member-state pressure (Italy sought ETS suspension in March). EU ETS EUA held €74–77/tCO2 in May. CBAM entered its definitive, financially binding phase on Jan 1, 2026 (Authorised Declarant status by March 31; €100/tCO2 penalty), raising the landed carbon cost of fertilizer, hydrogen, steel, aluminium, cement and electricity imports. A leaked document (May 13) suggests the EU may redirect carbon-tax revenue into farm subsidies amid the fertiliser crisis.
  - **metsaf:** April 29, 2026 — gas-cost only; ETS integrity preserved
  - **eua_price_may_2026:** €74–77/tCO2
  - **cbam_definitive_phase:** Jan 1, 2026 (binding); €100/tCO2 penalty
  - **cbam_sectors:** iron/steel, aluminium, cement, fertilisers, hydrogen, electricity
  - **carbon_revenue_diversion:** EU may redirect to farm subsidies (leaked doc May 13, 2026)
  - **voluntary_market:** No conflict-specific VCM price move documented; spot ranges used only as proxy
  - *Sources (4):* Sandbag (EU ETS / METSAF); Anthesis (CBAM); IndexBox (EUA price); Euronews (revenue diversion)
- **Sustainable Fund Flows Turn Positive — Europe Leads on Security Framing**  ·  HIGH — Morningstar Sustainalytics fund-flow data; renewable-ETF inflows ZCA/Morningstar T2  ·  _Energy Transition / Capital_
  - *Summary:* ESG/sustainable flows turned positive again in Q1 2026, led by Europe and energy-security framing. Global sustainable funds saw +$3.5bn net inflows in Q1 2026 (vs −$27bn in Q4 2025), with Europe +$9.1bn — its first positive quarter since Q3 2024 — even as total sustainable-fund AUM eased ~10% QoQ to $3.51tn. Renewable-energy ETFs drew >$3bn in April 2026 alone, the largest monthly inflow since January 2021. The turn is flow/sentiment, not a blanket equity re-rating — some clean and defense equities consolidated after large 2025 run-ups.
  - **sustainable_flows_q1_2026:** +$3.5bn (vs −$27bn Q4 2025)
  - **europe_flows_q1_2026:** +$9.1bn (first positive since Q3 2024)
  - **sustainable_aum_q1_2026:** $3.51tn (−~10% QoQ)
  - **renewable_etf_inflows:** >$3bn (April 2026 — largest since Jan 2021)
  - *Sources (2):* Morningstar Sustainalytics via ESG.Guide; Zero Carbon Analytics

**Other content blocks on this page:**
- **schema:** flat data-point cards (insurance-style); adapter -> event cards
- **source:** VegaReady Phase 2 Section 6 — Energy Transition (§3), Civilian Nuclear (§4.3) and Carbon Policy (§6). The proliferation/arms-control half of §4 lives on /outlook/nuclear; the defense-industrial half (§5) on /markets/defense.
- **ieaTable** — 10-row table (cols: category, value, detail)
- **ieaTableNote:** IEA World Energy Investment 2026, released May 28, 2026. The agency framed the year as one where "energy-security fears drive diversification spend." Primary PDF was robots-blocked at collection; figures anchored on consistent T2 outlets (Argus, Straits Times, Down To Earth) and corroborated by BNEF's $2.3tn 2025 transition tally.
- **scenarioMatrix** — 4-row table (cols: scenario, label, tone, impact)
- **investmentImplications** — 4-row table (cols: stakeholder, text)
- **sourceResolution** — 2-row table (cols: item, resolution)
- **dataQuality** — object (keys: high, moderate, quarantined)
- **relatedSectors:** This is the transition and civilian-nuclear deep dive sitting above the /transmission Energy Downstream sector. The hydrogen/ammonia thread connects to /markets/food-agriculture (Gulf fertilizer); critical minerals to /markets/property; proliferation and the Iran stockpile to /outlook/nuclear; the defense procurement supercycle to /markets/defense. Cross-section causal link: critical minerals are a shared, contested input to BOTH the energy transition and the defense supercycle — the competition loop, mapped on /connections.
- **physicalShock:** The physical oil, LNG and refined-products shock — Hormuz throughput down ~30% YoY, the structural supply gap, bypass capacity and substitution timelines — is tracked in depth on /outlook (Gap Dynamics) and the /transmission Energy Downstream sector. This page covers the capital-and-transition layer that sits on top of it.

---

### Defense & Security
`/markets/defense` · source `defense.json`

**Thesis:** The 39-day campaign structurally drew down the US and allied arsenal and opened a multi-year procurement supercycle that a ceasefire does not close. CSIS's Last Rounds audit found ~50% of Patriot, >50% of THAAD and 45% of PrSM expended, with GCC+Israel Patriot stocks down ~86%; replenishment runs to 2029–2030. The supply response — PAC-3 600→2,000/yr, THAAD 96→400/yr, doubled Aster lines — is real but backlogged, and a three-front competition (Iran/Israel, Ukraine, Indo-Pacific) means every interceptor off the line is pre-booked. Global military spending already hit a record $2.887tn (2.5% of GDP); NATO set a 5%-by-2035 target. Two new dual-use chokepoints emerged: subsea cables (Gulf the highest-risk zone of 25; ASN force majeure) and a thin mine-countermeasures base. The investable edge is durability — order books and replenishment timelines are ceasefire-insensitive — tempered by the caveat that some defense equities ran ahead of confirmed demand in 2025.

**Cards (3):**

- **Arsenal Drawdown and the Procurement Supercycle — CSIS Last Rounds**  ·  HIGH — CSIS institutional audit cross-confirmed by AP/US News; production frameworks confirmed via manufacturer/Pentagon reporting  ·  _Defense / Structural_
  - *Summary:* The highest-confidence defense finding is CSIS's Last Rounds audit (April 24, 2026) of what the 39-day Iran air campaign cost the US arsenal: ~50% of Patriot interceptor inventory, >50% of THAAD, and 45% of Precision Strike Missile expended; over 1,000 Tomahawks fired; GCC+Israel Patriot stocks drawn down ~86%. Replenishment runs to mid-2029 (Patriot), end-2029 (THAAD) and ~late 2030 (Tomahawk). Framework contracts signed before Day 1 are now under acute demand pull: Lockheed PAC-3 MSE scaling 600→2,000/yr by 2030, THAAD 96→400/yr, MHI/RTX SM-3 4x, MBDA Aster 2x. The multi-year backlog is ceasefire-insensitive — deliveries are booked through 2029–2030 regardless of when fighting stops.
  - **patriot_drawdown_us:** ~50% of US inventory
  - **thaad_drawdown:** >50% of inventory
  - **prsm_drawdown:** 45% of inventory
  - **tomahawks_fired:** >1,000
  - **gcc_israel_patriot_drawdown:** ~86% over the 39-day campaign
  - **patriot_replenish:** mid-2029 (FY27 budget: 3,203 missiles)
  - **thaad_replenish:** end-2029 (FY27: 857 requested)
  - **tomahawk_replenish:** ~late 2030 (<200/yr produced)
  - **lockheed_pac3_scaleup:** 600 → 2,000/yr by 2030
  - **thaad_scaleup:** 96 → 400/yr (signed Jan 29, 2026)
  - **denmark_sampt:** €1.47bn / 4 SAMP/T NG batteries (April 21, 2026; rejected Patriot on timelines)
  - **sm3_sm6:** SM-3 firings >80; inventories not to prewar until early 2029
  - **diehl_iris_t:** €1.5bn expansion → 16 batteries/yr by 2028 (near-100% over 250+ engagements)
  - *Sources (3):* CSIS — Rebuilding US Missile Inventory; US News / AP (CSIS Last Rounds); Defence Ukraine (drawdown detail)
- **Subsea Cable Weaponization and Mine-Clearing Demand**  ·  MEDIUM-HIGH — cable force-majeure and risk-index figures T2 cross-confirmed; consistent with the cable_severance scenario framing  ·  _Defense / Dual-Use_
  - *Summary:* The Persian Gulf scored 4.6/5.0 — the highest of 25 global cable landing zones — on Starboard's 2026 Cable Risk Index; ≥17 cable systems transit the Red Sea/Persian Gulf and ~7 pass through Hormuz. Iran's IRGC-linked Tasnim published Gulf cable maps (April 22) and floated a permit/'protection fee' regime; Alcatel Submarine Networks declared force majeure (March 12), indefinitely pausing the 2Africa Pearls Gulf extension. Deepwater repair windows average ~40 days (open-ended in a conflict zone), and resumed work requires re-scanning the seabed for ordnance. On mines, Iran's Hormuz threat triggered allied minesweeping mobilization (Netherlands deployed May 27; Lithuania weighing support) against a thin global mine-countermeasures base. Counter-UAS, EW and satellite ISR rose as priorities after the Barakah strike.
  - **gulf_cable_risk_score:** 4.6/5.0 (highest of 25 zones)
  - **cable_systems_red_sea_gulf:** ≥17
  - **hormuz_cable_systems:** ~7 (Falcon, GBI in Iranian waters)
  - **asn_force_majeure:** March 12, 2026 (2Africa Pearls paused indefinitely)
  - **repair_window:** ~40 days deepwater (open-ended in conflict)
  - **data_carried:** subsea cables carry ~99% of intercontinental data, ~$10tn/day
  - **minesweeping:** Netherlands deployed May 27; Lithuania considering (May 12)
  - **starboard_response_time:** 25 min → 3 min when integrated into a carrier NOC
  - *Sources (4):* Total Telecom / Starboard; Eurasia Review (cable weaponization); Bloomberg (cable delays); Iran International (minesweeper)
- **Global Defense Spending — Record $2.887tn and the NATO 5% Pivot**  ·  HIGH — SIPRI T1 macro; FY budget figures T1/T2; named contract values T2 context  ·  _Defense / Macro_
  - *Summary:* Global military expenditure hit a record ~$2.887tn in 2025 (+2.9% real, 2.5% of GDP — the highest share since 2009), the 11th straight year of growth. US spending fell 7.5% to $954bn in 2025 but Congress approved >$1tn for FY2026, with Trump's FY2027 proposal at $1.5tn (Golden Dome, AI, new battleships). The EU drove ~50% of 2025 global growth; NATO's June 2025 Hague Summit set a 5%-of-GDP target (3.5% core + 1.5% related) by 2035. Named order flow underscores the pull: a $24.3bn / 300-aircraft Lockheed F-35 contract and a $3.7bn RTX GEM-T order to Ukraine (April 2026).
  - **global_milex_2025:** $2.887tn (+2.9% real; 2.5% of GDP — highest since 2009)
  - **us_spending_2025:** $954bn (−7.5%)
  - **us_fy2026:** >$1tn approved
  - **us_fy2027_proposal:** $1.5tn (Golden Dome, AI, battleships)
  - **eu_share_2025_growth:** ~50% of global growth
  - **nato_target:** 5% of GDP by 2035 (3.5% core + 1.5% related)
  - **lockheed_f35_contract:** $24.3bn / 300 aircraft
  - **rtx_gemt_contract:** $3.7bn GEM-T to Ukraine (April 2026)
  - *Sources (3):* Green Social Thought / SIPRI; BBVA Research / SIPRI; Kavout (contract context)

**Other content blocks on this page:**
- **schema:** flat data-point cards (insurance-style); adapter -> event cards
- **source:** VegaReady Phase 2 Section 6 — Defense & Dual-Use Industrial Capacity (§5) plus the Reconstruction & Resilience linkages (§7). This is the investment deep dive of the /transmission Defense & Security sector.
- **drawdownTable** — 6-row table (cols: system, drawdown, replenish)
- **drawdownNote:** The first 16 days of "Operation Epic Fury" alone saw 402 Patriot interceptors fired by US forces. The three-front stockpile competition (Iran/Israel, Ukraine, Indo-Pacific) means every new PAC-3 MSE off the Camden, Arkansas line is functionally booked by CENTCOM/INDOPACOM through ~2029.
- **scaleupTable** — 6-row table (cols: program, change, detail)
- **spendingNote:** Global military expenditure reached a record ~$2.887tn in 2025 (+2.9% real, 2.5% of GDP — highest share since 2009), the 11th straight year of growth. US spending fell 7.5% to $954bn in 2025 but Congress approved >$1tn for FY2026, with Trump's FY2027 proposal at $1.5tn (Golden Dome, AI, new battleships). The EU drove ~50% of 2025 global growth; NATO's June 2025 Hague Summit set a 5%-of-GDP target (3.5% core + 1.5% related) by 2035.
- **scenarioMatrix** — 4-row table (cols: scenario, label, tone, impact)
- **investmentImplications** — 3-row table (cols: stakeholder, text)
- **resilience** — object (keys: thesis, winners, timeline)
- **sourceResolution** — 2-row table (cols: item, resolution)
- **dataQuality** — object (keys: high, moderate, quarantined)
- **relatedSectors:** This is the investment deep dive of the /transmission Defense & Security sector. Critical-mineral and magnet inputs connect to /markets/energy (transition) and /markets/property (materials); the proliferation/arms-control driver to /outlook/nuclear; the resilience-capex linkages to /outlook/infrastructure. Cross-section causal link: REE/magnet procurement competes with the energy transition for one constrained input — the loop is mapped on /connections.

---

### Cross-Asset — Correlation & Volatility
`/markets/cross-asset` · source `crossasset.json`

**Thesis:** The conflict produced a textbook inflationary supply-shock regime in which the diversification relationships of the 2010s low-inflation era broke down, the dollar — not gold — captured the primary safe-haven bid, and volatility bifurcated by asset class. Crude volatility, not equity volatility, was the epicentre: OVX exploded from ~28 to 120.91 (>4×) while the VIX only reached 31. By late May, equity and gold vol had mean-reverted below baseline while crude and EM-equity vol stayed structurally elevated. This is the 2022 template, not the 1979 one — monetary tightening overrode the geopolitical alignment, so oil and gold decoupled and the stock-bond correlation turned positive (diversification failed) for inflationary reasons. The most reliable hedges were long-oil/long-energy-equity and long-defense; the failure mode is ceasefire whipsaw.

**Cards (14):**

- **Crude Volatility (OVX) Conflict Peak**  ·  HIGH  ·  _Volatility_
  - *Summary:* OVX exploded from ~28 (Jan 2) to 120.91 (Mar 11, 2026), >4× baseline; still ~58 (2×) by May 28. The shock lived in the commodity complex.
  - **baseline:** 28.40
  - **peak:** 120.91
  - **peak_date:** 2026-03-11
  - **may28:** 58.30
  - *Sources (1):* FRED/CBOE OVXCLS
- **Bifurcated Volatility Regime**  ·  HIGH  ·  _Regime_
  - *Summary:* By May 28 VIX (15.74) and GVZ gold-vol (24.83) fell BELOW pre-conflict baselines while OVX (58.30) and EM-equity vol VXEEM (35.30) stayed ~2×. Equity/gold complacency restored; energy & EM risk sticky.
  - **vix_may28:** 15.74
  - **vix_baseline:** 18
  - **gvz_may28:** 24.83
  - **ovx_may28:** 58.30
  - **vxeem_may28:** 35.30
  - **vxeem_baseline:** 17.16
  - *Sources (1):* FRED/CBOE (VIXCLS,GVZCLS,OVXCLS,VXEEMCLS)
- **Equity Volatility (VIX) Conflict Peak**  ·  HIGH  ·  _Volatility_
  - *Summary:* VIX rose from ~18 baseline to a 31.05 close (Mar 27); intraday ~35.3 (Mar 9). Lower-amplitude, longer-lasting than the Apr-2025 tariff shock (VIX 52.3).
  - **baseline:** 17.93
  - **close_peak:** 31.05
  - **close_peak_date:** 2026-03-27
  - **intraday_peak:** 35.3
  - *Sources (1):* FRED/CBOE VIXCLS
- **Oil–Gold Correlation Flip to Negative**  ·  HIGH for the directional flip; LOW for the exact coefficient; Brent absolute levels are PROXY  ·  _Regime_
  - *Summary:* Oil–gold flipped into negative territory; the directional flip is the robust HIGH-confidence finding (the early-April ~−0.41 point coefficient is T3, illustrative only). Monetary tightening + a strong dollar overrode geopolitical alignment; gold fell ~$5,595→$4,099 as Brent rose ~55%. The 2022 monetary-override template, not 1979.
  - **corr_1979:** +0.93
  - **corr_2022_initial:** +0.71
  - **corr_2026_apr:** −0.41 (T3, illustrative)
  - **brent_move:** ~+55% late-Feb→March (CNBC, directional)
  - **brent_levels:** PROXY — absolute prices demoted; re-anchor to EIA before production
  - **gold_high:** $5,595
  - **gold_trough:** $4,099
  - *Sources (3):* Logical Invest; ECB FSR (supply-shock framework); Lemand via LinkedIn (coefficient only)
- **Stock–Bond Correlation Turns Positive — Diversification Fails**  ·  HIGH — yields/equity T2/T1; correlation interpretation is regime-level  ·  _Regime_
  - *Summary:* Stock–bond correlation moved POSITIVE again in W2: 10Y yields +70bps to ~4.5% by late May while the S&P recovered to +7.4% YTD (off an ~8% drawdown to a ~6,316 trough on Mar 30). The inflationary 2022/pandemic template — equities and bond prices fall together on inflation surprises, so the classic 60/40 diversifier failed.
  - **yield_change_bps:** +70
  - **yield_level:** ~4.5%
  - **sp500_trough:** ~6,316 (Mar 30, ~8% drawdown)
  - **sp500_recovery:** >7,400
  - **sp500_ytd:** +7.4%
  - *Sources (2):* CNBC; ECB FSR
- **Record Brent Backwardation as Duration Signal**  ·  HIGH  ·  _Signal_
  - *Summary:* Brent M1–M2 widened from ~$0.30 to ~$9–10 by mid-March (steepest since 2022); roll cost ~−110% annualized. Back end <$70 says transient. WARNING (Minneapolis Fed): not a reopening-optimism signal.
  - **prompt_spread_pre:** $0.30
  - **prompt_spread_mid_mar:** $9–10
  - **roll_yield_annualized:** −110%
  - **strip_2027:** <$70
  - *Sources (2):* Reuters; Minneapolis Fed
- **Gas/LNG Backwardation with Multi-Year Tail**  ·  HIGH  ·  _Signal_
  - *Summary:* TTF doubled to ~€70/MWh; JKM +68.5% to ~$25/mmBtu; TTF curve inverted to backwardation. Qatar ~17% LNG offline 3–5yr; forward convergence pushed to ~Q2 2029.
  - **ttf_peak:** ~€70/MWh
  - **jkm_pct:** +68.5%
  - **jkm_level:** ~$25/mmBtu
  - **qatar_offline:** ~17%
  - **convergence:** Q2 2029
  - *Sources (2):* Reuters; Elenger Q1-2026
- **Conflict Flow Rotation: Energy/Defense/Cash/Short-Duration**  ·  MEDIUM — flow direction robust; EPFR/BofA micro-figures press-derived; WGC gold outflow is the high-confidence component  ·  _Dynamic_
  - *Summary:* Press-derived EPFR/BofA figures: ~$5bn monthly energy-ETF inflow, ~$29bn short-Treasury inflow, ~$70.7bn into cash; WGC confirms North American gold ETFs −$12.7bn in March, largest in ≥5yr.
  - **energy_etf_monthly_inflow:** ~$5bn
  - **short_treasury_inflow:** ~$29bn
  - **cash_week:** ~$70.7bn
  - **na_gold_etf_outflow:** −$12.7bn
  - **ppa_12mo:** +37.8%
  - **shld_12mo:** +47.8%
  - *Sources (2):* AInvest/EPFR; WGC April 2026
- **Ceasefire Whipsaw — Hedge Failure Mode**  ·  MEDIUM  ·  _Hedge_
  - *Summary:* XLE −$1.0bn single-day outflow (largest in 14yr) and −$2.1bn weekly energy outflow (largest since Jul-2024) on ceasefire news, after record inflows. Conflict hedges carry brutal mean-reversion risk on de-escalation.
  - **xle_single_day_outflow:** −$1.0bn
  - **weekly_energy_outflow:** −$2.1bn
  - **prior_3wk_inflow:** +$13.5bn
  - **xle_ytd:** +28.2%
  - *Sources (1):* Tickeron/BofA/EPFR
- **CFTC/COMEX Gold Positioning — Specs Faded the Rally**  ·  HIGH  ·  _Regime_
  - *Summary:* COMEX net longs fell 21% to 504t in Feb (money-manager −18% to 311t); April eased a further 4% to 477t with late-month selling outweighing early rebuild. Specs de-grossed and faded gold, correctly anticipating paper-gold weakness.
  - **comex_net_long_feb:** 504t
  - **comex_change:** −21%
  - **mm_net_long:** 311t
  - **comex_net_long_apr:** 477t
  - *Sources (1):* WGC March 2026 (CFTC COT underlying)
- **Equity-to-Crypto Beta Bridge (§8 → §10)**  ·  MEDIUM for BTC-as-risk-proxy direction; LOW for exact coefficients (refresh in Section 10)  ·  _Signal_
  - *Summary:* Equity sector/factor stress (Equities) → risk-parity/vol-control deleveraging → leveraged-ETF unwinds → crypto beta stress. BTC-equity correlation ~0.50 (2026) vs ~0.11 (2023): BTC traded as a liquidity/risk proxy, not a haven. BTC-gold decoupled. Full treatment in Crypto (Section 10); coefficients T3-illustrative.
  - **btc_equity_corr:** ~0.50 (2026) vs ~0.11 (2023)
  - **btc_gold_corr:** decoupled (T3 low ~−0.88)
  - **chain:** physical → equity (§8) → cross-asset (§9) → crypto (§10)
  - **mechanism:** vol-control deleveraging → leveraged-ETF unwinds → crypto beta stress
  - *Sources (2):* Morningstar (BTC haven vs risk); ECB (vol-targeting feedback)
- **Oil-Rates-Dollar Feedback Loop (Oil-Shock Paradox)**  ·  HIGH for direction and rate/FX levels; MEDIUM for the roll-yield estimate  ·  _Regime_
  - *Summary:* Energy-driven inflation → higher-for-longer rates → rising real yields → stronger dollar → suppressed gold, even as oil stays elevated on scarcity. 10Y +70bps to ~4.5%; DXY +3.12% (96.98 Feb 16 → 100.53 Mar 13); dollar–VIX reverted positive. Brent roll cost ~−110% annualized; 2027 strip <$70. The 2022 template, not 1979.
  - **10y_yield:** +70bps to ~4.5%
  - **dxy:** +3.12% (96.98 → 100.53)
  - **dollar_vix:** reverted positive
  - **brent_roll:** ~−110% annualized
  - **brent_2027_strip:** <$70
  - **template:** 2022 monetary-override, not 1979
  - *Sources (3):* CNBC; Bloomberg (dollar–VIX); Minneapolis Fed
- **Safe-Haven Hierarchy: USD Cash > Short Treasuries > Gold**  ·  HIGH for the gold-ETF outflow (WGC T1); MEDIUM for cash/Treasury micro-figures (EPFR press-derived)  ·  _Regime_
  - *Summary:* The dollar — not gold — captured the primary haven bid. ~$70.7bn into cash in a single week; ~$29bn record into short-duration Treasuries (March); North American gold ETFs −$12.7bn in March (largest in ≥5yr). Gold fell on the real-rate override despite the war, yet central banks still net-bought 243.7t in Q1 — monetary weakness, not a loss of structural bid.
  - **hierarchy:** USD cash > short Treasuries > gold
  - **cash_week:** ~$70.7bn (single week)
  - **short_treasury:** ~$29bn record (March)
  - **gold_etf:** −$12.7bn March (largest in ≥5yr); +$0.83bn April
  - **cb_gold:** 243.7t net Q1 (structural bid intact)
  - *Sources (2):* WGC April 2026; Tickeron/BofA/EPFR
- **EM Stress & Dollar-Funding Squeeze**  ·  HIGH for MSCI EM and VXEEM; MEDIUM for CDX.EM  ·  _Regime_
  - *Summary:* A strong-dollar haven regime turned the energy shock into an EM funding squeeze. MSCI EM −11% March (+14.7% April rebound); EM crowding factor −1% / 4-sigma in early March as EM tech/AI momentum unwound; CDX.EM 5Y +69bps Q1. VXEEM stuck ~2× (35.30 May 28) while VIX fell below baseline — EM stress is the durable, low-noise signal. Importer FX (rupee ~94+) vs exporter (BRL +10%).
  - **msci_em:** −11% March; +14.7% April
  - **em_crowding:** −1% / 4-sigma early March
  - **cdx_em_5y:** +69bps Q1
  - **vxeem:** 35.30 (May 28) ~2× vs VIX below baseline
  - **fx_dispersion:** rupee ~94+ (importer) vs BRL +10% (exporter)
  - *Sources (3):* MSCI; FRED/CBOE VXEEMCLS; Janus Henderson

**Other content blocks on this page:**
- **correlationMap** — 11-row table (cols: pair, normal, stress, y2026, verdict)
- **correlationNote:** The three flips that matter most to a multi-asset book are oil↔gold (positive → negative), oil↔USD (negative → positive), and bonds↔equities (negative-for-inflationary-reasons). The common cause is the "oil-shock paradox": energy-driven inflation forces central banks to hold rates higher for longer, lifting real yields, strengthening the dollar, and suppressing non-yielding gold — even as the same shock keeps oil elevated on physical scarcity. This is the 2022 template, not 1979: in 1979 loose policy drove oil and gold up together (+0.93); in 2026 monetary tightening overrode the alignment. Gold↔real-rates restoring to textbook confirms 2026 gold weakness was monetary, not a loss of structural bid — central banks still net-bought 243.7t in Q1 even as Western ETF holders dumped paper gold. BTC behaviour is a bridge to Section 10 (Crypto).
- **volRegime** — 4-row table (cols: index, underlying, baseline, peak, current, verdict, state)
- **volNote:** The single most important volatility finding: the shock lived in the commodity complex. OVX's >4× move (28→121) dwarfed the VIX's <2× move (18→31) — crude vol led, equity vol followed at a discount. By May 28 the regime bifurcated: VIX and GVZ fell below pre-conflict baselines while OVX and VXEEM stayed ~2×. The leading-indicator implication: OVX and VXEEM, not VIX, are the durable conflict-regime gauges. Treating VIX normalization (15.74) as the regime's end is a false all-clear.
- **termStructure** — 3-row table (cols: curve, signal, detail)
- **termNote:** The critical caveat — a Minneapolis Fed false-comfort warning VegaReady tracks: backwardation should NOT be read as optimism about a near-term Hormuz reopening. It mostly reflects "extreme need for oil now versus later" (you pull oil from storage rather than store it), and high front-end vol is tamping down long-end price discovery. With as much as ~1bn barrels of lost production to refill, prices stay elevated even if Hormuz reopens. Separately the market quietly repriced the structural floor from ~$65 to ~$75–80 as it "learned the Strait can be closed" — a persistent geopolitical risk premium in the long end. Brent (not WTI) is the war-risk-premium instrument given direct Hormuz exposure.
- **positioning** — 8-row table (cols: channel, data, tier)
- **positioningVerdict:** The conflict produced a crowded long-energy / long-defense / long-cash / short-duration-Treasury posture, with specs fading gold and chasing equities. Gold COMEX net longs fell 21% to 504t in February (money-manager −18% to 311t); CTAs neared maximum long US equities by late May while discretionary PMs cut exposure — a crowded-long, mean-reversion-prone setup that desks (Deutsche Bank, Wellington) flagged as correction risk. The configuration is itself a leading indicator of ceasefire-whipsaw risk.
- **hedgingPlaybook** — 4-row table (cols: scenario, label, tone, winners, losers, instruments, horizon, failureModes, analog)
- **signalQuality** — 11-row table (cols: indicator, leadlag, noise, behaviour)
- **signalVerdict:** The most reliable leading indicators were OVX, CFTC gold positioning, and the stock–bond correlation flip. The most dangerous false signals were the VIX all-clear (normalized prematurely), the "buy gold on war" reflex (real-rate override), and crowded energy/defense inflows (ceasefire-whipsaw prone). Backwardation was the subtlest trap — a real tightness signal routinely misread as a duration/reopening signal.
- **dataQuality** — object (keys: high, moderate, quarantined)
- **relatedSectors:** This is the cross-asset synthesis layer. Its upstream first-order layer is equity sector/factor rotation (/markets/equities); its downstream is Crypto beta/reflexivity (/markets/crypto). The spokes carry each slice in place: gold vol + oil-gold decoupling on /markets/gold-fx; OVX + crude backwardation on /markets/energy; the flight-to-quality rotation on /markets/credit; defense flows on /markets/defense; freight vol on /markets/insurance.
- **volSurface** — 6-row table (cols: dimension, w1, w2, read)
- **volSurfaceNote:** Section 8 documented the equity vol surface (SPX realized-skew inversion; crude upside-call skew to 6M); Section 9 generalizes it cross-asset and shows the divergent exit paths. By May 28, equity (VIX) and gold (GVZ) vol fell below baseline while crude (OVX) and EM-equity (VXEEM) stayed ~2× — OVX and VXEEM, not VIX, are the durable conflict-regime gauges.
- **termMap** — 5-row table (cols: curve, shape, duration, substitution)
- **dollarFunding:** The dollar's haven capture (oil↔USD and dollar↔VIX both flipped positive) is the channel through which the equity/commodity shock became an EM funding squeeze. MSCI EM fell −11% in March (then +14.7% in April) and the EM crowding factor's 4-sigma unwind hit EM tech/AI hardest; EM credit widened (CDX.EM 5Y +69bps Q1). Importer FX (rupee ~94+ vs USD) bore the strain while exporter EMs (Brazil, BRL +10%) outperformed. The cross-asset point: a strong-dollar regime turns an energy shock into a global liquidity tightening that EM equities (VXEEM stuck ~2× — 35.30 by May 28) and EM credit price for far longer than DM equity vol (VIX below baseline).
- **upgradedConfidence** — 15-row table
- **proxyOnly** — 12-row table

---

### Transmission — Sector Cascade
`/transmission` · source `sectors.json`

**Other content blocks on this page:**
- **anchorFigures** — object (keys: hormuz_oil_transit, qatar_lng_share, ammonia_gas_feedstock, gulf_fertilizer_exports, jet_fuel_opex_share, 2022_fertilizer_peak)
- **dataIntegrityNote:** All figures sourced via primary/named outlets (EIA, IATA, IFPRI, World Bank, SIPRI, IGU, Gartner). Six anchor figures independently re-verified. Scenario magnitudes are anchored to named analyst forecasts (JPMorgan, Goldman) or historical analogues (1973, 1990, 2008, 2019, 2022) with actual market data. Where a precise current figure was not publicly available it is flagged 'data not publicly available' with a stated proxy. cable_severance price impacts on physical-commodity sectors (<2-5%) are estimates, not sourced point figures.
- **entries** — 13-row table (cols: id, title, category, summary, data, sources, confidence, lastUpdated)
- **crossSectorNotes** — 6-row table
- **secondEngineVerification** — object (keys: date, engine, scope, corrected, confirmedAccurate, flaggedByEngineButKept, unverifiableProvisional2026)

---

### Exposure — Regional Impact
`/exposure` · source `regions.json`

**Other content blocks on this page:**
- **methodologyNote:** Each profile carries 8 fields: energy_exposure, food_security, trade_exposure, financial_exposure, substitution_capacity, net_position (winner/loser/mixed tag + rationale), scenario_specific_impact (per all 4 scenarios), historical_behavior (1973/1979/1990/2022). Researched May 2026; verified against primary sources (EIA, IEA, IMF, World Bank, RBI, SBP, IEEJ/JOGMEC, S&P Global, SIPRI, Eurostat, ECB, SCA, TASS, regional statistical agencies and press).
- **dataIntegrityNote:** Some conflict-specific 2026 figures (realized Brent path, Dubai crude $166 peak, Saudi East-West pipeline attack/restoration, Egypt/Pakistan IMF review timing) derive from 2026-dated reporting on the ongoing event, some resting on press/aggregator sources rather than final official statistics; these are treated as reported-but-evolving and carry 'medium' entry confidence. Structural figures (import dependencies, SPR/reserve levels, SWF AUM, remittance totals, historical shock data) are higher-confidence. Items flagged 'data not publicly available' carry stated proxies. A May 30 2026 verification pass (Perplexity Deep Research, sourced to EIA/IMF/IEEJ/RBI/SBP/SCA/ECB/TASS) reconciled the dataset against primary sources; corrections applied are listed in verificationLog.
- **verificationLog** — object (keys: verifiedHigh, correctionsApplied, stillUnresolved)
- **crossCountrySummary** — object (keys: winners, losers, mixed, key_asymmetry)
- **entries** — 12-row table (cols: id, title, category, gdp_usd, net_position, summary, data, sources, confidence, lastUpdated, matrix)
- **_enriched:** Added per-country data.second_order_effect + matrix (winner/loser row) so this canonical file is the complete source for the /exposure cards. May 30 2026.

---

### Outlook — Gap Dynamics
`/outlook` · source `dynamics.json`

**Other content blocks on this page:**
- **anchors** — object (keys: hormuz_normal_flow_2024, hormuz_q1_2026_actual, hormuz_lng_share, qatar_lng_share_2024, gulf_urea_exports, gulf_ammonia_exports, iranian_crude_2025, saudi_petroline, uae_habshan_fujairah, red_sea_cable_2024)
- **anchorReconciliation:** Gulf fertilizer export share differs by source. Sections 1-2 used IFPRI (Apr 2026): 36% of global urea, 29% of ammonia. This Section 3 report's primary source is NDSU Agricultural Trade Monitor (Apr 2026): 40% urea, 26% ammonia, 23% DAP, 44% sulfur. Both are recent, methodology-documented institutional sources; the difference reflects dataset/period choices, not an error in either. The dataset carries the 30-40% urea range and notes both. All other Section 3 anchors are consistent with Sections 1-2.
- **dataIntegrityNote:** Compiled from a May 30 2026 Perplexity Deep Research pass with an explicit source-tier rubric. T1 official/institutional sources are primary; T2 press/proprietary and T3 model figures are tagged. Wikipedia, LinkedIn, Facebook and Substack were excluded from primary evidence and demoted to the dataQualityExceptions list. Conflict-period (2026) figures are provisional and subject to revision. Per-flow confidence reflects the weakest link in each flow's key chain.
- **entries** — 6-row table (cols: id, title, category, summary, data, sources, confidence, lastUpdated)
- **crossFlowMatrix** — object (keys: hormuz_closure, oil_strike, cable_severance, ceasefire, compounding_insight)
- **dataQualityExceptions** — 10-row table (cols: id, claim, status, reason, confidence)

---

### Outlook · Nuclear Proliferation
`/outlook/nuclear` · source `nuclear.json`

**Thesis:** The Twelve-Day War did two structural things to the nuclear order. It set back — but did not end — Iran's program: known enrichment infrastructure is largely inoperable and breakout pushed from ~6 months toward ~2.5 years, yet >440 kg of 60% HEU is unaccounted under collapsed IAEA verification, leaving a fissile-material-control risk rather than a resolved one. And it broke the Gulf non-proliferation 'gold standard': the US-Saudi 123 agreement omits the enrichment ban and the Additional Protocol that constrained the UAE in 2009, while demanding the opposite of Iran. That asymmetry — sovereign enrichment for Riyadh, total surrender for Tehran — is the hinge of the ceasefire, and the UAE's regional-parity clause makes it contagious to Egypt, Turkey and Jordan. For an event-driven fund this is the conflict's highest-stakes tail: a proliferation cascade reprices regional risk, energy-security hedging and the entire Gulf security architecture. [PROVISIONAL-2026 — assessments made during active conflict with verification curtailed.]

**Cards (2):**

- **Iran Stockpile Risk and IAEA Verification Collapse**  ·  MEDIUM — figures are assessments/estimates (FDD, IAEA via DW) made during active conflict; stockpile location disputed; PROVISIONAL-2026  ·  _Nuclear / Proliferation_
  - *Summary:* The conflict's nuclear core is the fate of Iran's enriched-uranium stockpile and the collapse of IAEA verification. Iran is assessed to hold >440 kg (cited 440.9 kg) of 60%-enriched uranium — the last figure verified before Iran terminated agency access in February 2026. IAEA Director-General Grossi assessed in late April 2026 that most of Iran's HEU likely remains at the Isfahan complex (~200 kg in 18 containers moved into a tunnel June 9, 2025); separately, the Partnership for Global Security assesses ~400 kg of weapon-grade uranium now likely buried under rubble at Isfahan. The FDD estimates US/Israeli strikes extended crude-device breakout from ~6 months to as much as 2.5 years absent foreign assistance, citing 9,000+ kg of enriched UF6 including 440 kg HEU (sufficient for ~11 weapons). Carnegie assesses known enrichment infrastructure is largely inoperable but Iran retains capacity to reconstitute clandestinely, with IAEA access effectively curtailed. [PROVISIONAL-2026]
  - **heu_60pct:** >440 kg (cited 440.9 kg)
  - **total_enriched_uf6:** 9,000+ kg
  - **weapons_equiv_60pct:** ~11 (FDD estimate)
  - **breakout_time:** ~6 months → as much as 2.5 years (FDD, post-strike)
  - **iaea_access:** terminated by Iran, February 2026
  - **isfahan_heu_containers:** 18 containers (~200 kg) moved into a tunnel June 9, 2025
  - **weapon_grade_estimate:** ~400 kg weapon-grade likely buried at Isfahan (PGS)
  - **grossi_assessment:** late April 2026 — most HEU likely remains at Isfahan
  - *Sources (4):* FDD — requirements for an Iran deal; Deutsche Welle (IAEA/Grossi); Partnership for Global Security; Carnegie Endowment
- **The Broken Gold Standard — US-Saudi 123 Agreement and Proliferation Cascade**  ·  MEDIUM-HIGH — agreement terms and dates well-documented; the cascade is an analytical projection; the $142bn arms figure is consistent across reporting; PROVISIONAL-2026  ·  _Nuclear / Arms Control_
  - *Summary:* The arms-control spillover is structural. The US-Saudi Section 123 civil-nuclear agreement (Joint Declaration signed Nov 18, 2025; politically formalized alongside a $142bn arms package during Trump's May 13, 2026 Riyadh visit) omits the enrichment ban that defined the UAE's 2009 'gold standard,' does not require the IAEA Additional Protocol (first use of the 2020 NDAA presidential waiver), and substitutes a bilateral safeguards arrangement covering only declared facilities. The asymmetry — enrichment as a sovereign prerogative for Riyadh but a non-negotiable surrender condition for Tehran (zero ceiling, 20-year moratorium, 440.9 kg surrender) — underpins the ceasefire negotiation. The UAE's 2009 regional-parity clause lets Abu Dhabi revisit its own waiver if a regional state secures enrichment rights, creating contractual cascade risk to Egypt, Turkey and Jordan. The No Nuclear Weapons for Saudi Arabia Act (S.4243) was introduced March 26, 2026. [PROVISIONAL-2026]
  - **joint_declaration_signed:** Nov 18, 2025
  - **arms_package:** $142bn (formalized May 13, 2026)
  - **enrichment_ban:** omitted (vs UAE 2009 gold standard)
  - **additional_protocol:** not required (first NDAA presidential waiver)
  - **iran_demand:** zero-percent enrichment, 20-year moratorium, 440.9 kg surrender
  - **cascade_risk:** UAE regional-parity clause; Egypt / Turkey / Jordan baseline reset
  - **congressional_bill:** S.4243 (introduced March 26, 2026)
  - *Sources (2):* House of Saud (123 agreement analysis); Partnership for Global Security

**Other content blocks on this page:**
- **schema:** flat data-point cards (insurance-style); adapter -> event cards
- **source:** VegaReady Phase 2 Section 6 — Nuclear Power and Proliferation Spillovers (§4.1, §4.2, §4.4). Civilian nuclear as an energy-security hedge (§4.3, Barakah) is tracked on /markets/energy.
- **fuelCycle** — object (keys: label, text)
- **cascadeChain** — 5-row table (cols: step, detail)
- **scenarioMatrix** — 4-row table (cols: scenario, label, tone, impact)
- **dataQuality** — object (keys: high, moderate, quarantined)
- **relatedSectors:** Civilian nuclear as an energy-security hedge (reactor counts, Barakah, the >$80bn/yr investment pipeline) is tracked on /markets/energy; the defense-industrial supercycle on /markets/defense; regional exposure on /exposure. Cross-section causal link: a proliferation-escalation would reprice gold and the volatility regime — see /markets/gold-fx, /markets/cross-asset and the causal map on /connections.
- **sourceResolution** — 2-row table (cols: item, resolution)

---

### Structural Risk — Overview
`/structural` · source `structuraloverview.json`

**Other content blocks on this page:**
- **execSummary:** Structural Risk is a permanent-infrastructure inventory: it converts the conflict-specific findings of Sections 1–6 into six standing tracking verticals — chokepoints, commodity weaponization, de-globalization, digital fragmentation, food resilience, and the monitoring schema that binds them. Each tracked entity is scored, tiered, and mapped to the four VegaReady scenarios, so the structural library is queryable alongside event data. These are the slow-moving fault lines beneath the fast-moving market response.
- **keyFindings** — 7-row table
- **pillars** — 5-row table (cols: name, slug, summary, metric)
- **methodology** — object (keys: scoring, tiers, confidence, cadence, scenarioMapping)
- **schemaFields** — 11-row table (cols: field, type, description)
- **thresholds** — 7-row table (cols: metric, watch, alert, critical, cadence)
- **thresholdsNote:** These trigger thresholds are the production spec for the live watch layer (watch / alert / critical). The live status — where each metric sits today against its thresholds — graduates to the Dashboard in a later pass; this page presents the framework and the current snapshot values from the research.
- **jsonTemplate:** { "id": "chokepoint.hormuz.oil_transit", "metric": "Strait of Hormuz oil transit volume", "geography": "Strait of Hormuz", "unit": "million barrels per day", "source": {"name": "EIA", "url": "https://www.eia.gov/...", "tier": "T1"}, "tier": "T1", "update_frequency": "daily/event", "trigger_thresholds": {"watch": 18, "alert": 12, "critical": 6}, "scenario_mapping": ["hormuz_closure", "oil_strike"], "confidence": "HIGH", "value": 20.0, "as_of": "2024", "lastUpdated": "2026-05-30" }
- **sourceConflict** — 12-row table (cols: figure, contested, issue, anchor, tier)

---

### Chokepoint Vulnerability Index
`/structural/chokepoints` · source `chokepoints.json`

**Thesis:** Maritime chokepoint concentration is the single largest structural vulnerability VegaReady tracks. Nine maritime/geoeconomic chokepoints are scored 1–5 on volume, commodity criticality, bypass deficit, military contestability and climate/physical risk. The structural insight is stark: the three highest-ranked — Hormuz (4.4), Taiwan (4.2), Malacca (4.0) — all face Asia and lack scalable bypass, so a single-basin disruption has no near-term substitution path. That is the core case for treating Asia-Pacific energy and semiconductor logistics as a standing tracking vertical. Panama and Cape rank lower on contestability but higher on climate/physical risk — the 2023–24 Panama drought cut FY24 transits 29% before an FY25 recovery.

**Cards (3):**

- **Strait of Hormuz Vulnerability**  ·  HIGH  ·  _Index_
  - *Summary:* World's most critical oil chokepoint; ~20 mb/d (~20% global liquids), ~1/5 LNG, 84% Asia-bound, minimal bypass. Composite risk 4.4/5, rank #1.
  - **oil_transit_mb_d:** 20.0
  - **share_global_liquids_pct:** 20
  - **asia_bound_pct:** 84
  - **composite_score:** 4.4
  - **rank:** 1
  - **period:** 2024
  - *Sources (1):* EIA
- **Strait of Malacca / Singapore**  ·  HIGH  ·  _Index_
  - *Summary:* Largest oil transit chokepoint by volume: 23.2 mb/d in 1H25 (29% global maritime oil). Composite 4.0/5, rank #2.
  - **oil_transit_mb_d:** 23.2
  - **share_global_maritime_oil_pct:** 29
  - **crude_mb_d:** 16.6
  - **products_mb_d:** 6.5
  - **composite_score:** 4.0
  - **rank:** 2
  - **period:** 1H2025
  - *Sources (1):* EIA via Bernama
- **Taiwan Strait Trade Exposure**  ·  HIGH  ·  _Index_
  - *Summary:* >20% of global maritime trade ($2.45tn goods, 2022); semiconductor and NE-Asia energy chokepoint with limited bypass. Composite 4.2/5, rank #3.
  - **share_global_maritime_trade_pct:** 20
  - **goods_value_usd_tn:** 2.45
  - **composite_score:** 4.2
  - **rank:** 3
  - **period:** 2022
  - *Sources (1):* CSIS ChinaPower

**Other content blocks on this page:**
- **throughput** — 9-row table (cols: chokepoint, volume, period, commodities, bypass, source)
- **throughputNote:** Volumes are oil-transit unless noted; "bypass" measures the existence of a scalable alternative route or pipeline. Only the Cape of Good Hope record-tanker figure (24M dwt/wk) is PROVISIONAL-2026; its 9.2 mb/d diverted-oil flow is a clean EIA T1 figure (Jan–Aug 2024).
- **scorecard** — 9-row table (cols: rank, chokepoint, volEcon, commodity, bypassDeficit, military, climate, composite, beneficiaries, substitution)
- **scorecardNote:** Scored 1 (low) to 5 (extreme). Composite scores and ranks are analyst estimates (T3) calibrated to the cited T1/T2 volume anchors; bypass-deficit and military contestability are double-weighted in the rank ordering. The three highest-ranked chokepoints (Hormuz, Taiwan, Malacca) all face Asia and lack scalable bypass — a single-basin disruption has no near-term substitution path.
- **dataQuality** — object (keys: high, moderate, quarantined)
- **relatedSectors:** The node-level deep dive (Hormuz, Kharg, Ras Tanura, Abqaiq, bypass pipelines, mine warfare) lives on /outlook/infrastructure; the cable dimension on /structural/digital and /markets/defense; oil/LNG flow impact on /markets/energy.

---

### Commodity Weaponization
`/structural/weaponization` · source `weaponization.json`

**Thesis:** Commodity weaponization is a recurring, quantifiable pattern with a stable transmission signature: a supply removal of single-digit percent of global volume produces a multiple of that in price response, with duration set by substitution lead time and policy response. This is a pattern-recognition library of historical and active episodes in which a state restricted a critical commodity for geopolitical leverage. The weapon has diversified from oil (1970s–90s) to gas (2022), grain (2022–23) and critical minerals (2023–25) — so the tracker monitors non-energy commodities with equal rigor.

**Cards (3):**

- **1973 Arab Oil Embargo (Reference Pattern)**  ·  HIGH  ·  _Structural_
  - *Summary:* Production cut ~5%/mo + US shipment ban quadrupled oil $2.90→$11.65/bbl by Jan 1974; catalyzed IEA and SPR creation. Anchor episode for volume-to-price asymmetry.
  - **price_pre_usd_bbl:** $2.90
  - **price_post_usd_bbl:** $11.65
  - **multiple:** 4.0×
  - **duration_months:** 6
  - **period:** 1973-1974
  - *Sources (1):* Federal Reserve History
- **Russia Gas Weaponization 2021–2022**  ·  HIGH  ·  _Structural_
  - *Summary:* EU pipeline gas imports −80% vs 2019–21; TTF >€200/MWh in 2022 (peak ~€300+), eased to ~€30 by Aug 2023; EU demand −20%. Modern weaponization template.
  - **eu_pipeline_import_decline_pct:** −80%
  - **ttf_peak_eur_mwh:** ~€300
  - **ttf_2023_eur_mwh:** ~€30
  - **eu_demand_decline_pct:** −20%
  - **period:** 2022-2023
  - *Sources (1):* Atradius
- **China Rare-Earth Export Controls 2023–2025**  ·  MEDIUM  ·  _Dynamic_
  - *Summary:* Escalating controls (gallium/germanium Jul 2023 → 7 heavy REE Apr 2025); REE-magnet exports −74% YoY May 2025; heavy-REE ex-China +250% premium H2 2025.
  - **magnet_export_yoy_pct:** −74%
  - **ex_china_premium_pct:** +250%
  - **eu_price_multiple_vs_china:** 6×
  - **period:** 2023-2025
  - *Sources (2):* Defense One; Kamoa Capital

**Other content blocks on this page:**
- **episodes** — 11-row table (cols: episode, date, commodity, volume, price, duration, policy, beneficiaries, source)
- **takeaways** — 3-row table
- **dataQuality** — object (keys: high, moderate, quarantined)
- **relatedSectors:** The active 2026 fertilizer/REE episodes are deep-dived on /markets/food-agriculture (urea), /markets/energy (critical minerals) and /markets/defense (DFARS magnets); the chokepoint geography on /structural/chokepoints.

---

### De-globalization
`/structural/deglobalization` · source `deglobalization.json`

**Thesis:** De-globalization is measurably real in trade flows but largely unrealized in capital relocation — the announcement-vs-delivery gap is the key signal. VegaReady tracks the gap between announced reshoring/friend-shoring and measured relocation, by sector and destination. Tariff escalation has structurally re-priced US trade exposure to its highest level in ~90 years, while global FDI sits in a two-year slump that fragments along bloc lines. The single sharpest gauge: the divergence between the pre- and post-substitution US tariff rate quantifies how fast importers are abandoning Chinese sourcing.

**Cards (3):**

- **Bloc-to-Bloc FDI Fragmentation**  ·  HIGH  ·  _Dynamic_
  - *Summary:* Global FDI −3% H1 2025; greenfield supply-chain mfg −29%; FDI between geopolitically distant blocs −30% vs within-bloc after Q1 2022. Core de-globalization gauge.
  - **global_fdi_h1_2025:** −3%
  - **greenfield_supply_chain_mfg:** −29%
  - **bloc_to_bloc_fdi_gap:** −30%
  - **period:** H1 2025 / post-Q1 2022
  - *Sources (2):* UNCTAD; EBRD via International Banker
- **Mexico Nearshoring: Trade vs Capital Gap**  ·  HIGH  ·  _Dynamic_
  - *Summary:* US-import share 13.4% (2017) → 15.8% (2024) as China 21.6% → 13.2%; record $41bn FDI 2024 but new FDI at 10-yr low. Gains are trade diversion, not relocation.
  - **mexico_us_import_share_2017:** 13.4%
  - **mexico_us_import_share_2024:** 15.8%
  - **china_us_import_share_2017:** 21.6%
  - **china_us_import_share_2024:** 13.2%
  - **mexico_fdi_2024:** $41bn
  - **period:** 2017-2024
  - **mfg_fdi_growth:** +20%/yr since 2019 (vs 7% global)
  - *Sources (1):* Dallas Fed
- **US Tariff Escalation Index**  ·  HIGH  ·  _Dynamic_
  - *Summary:* 2025 tariffs: US avg effective rate 17.8% pre-sub (highest since 1934) / 16.4% post-sub; China avg ~51% by late Jul 2025. Pre-vs-post gap measures decoupling speed.
  - **avg_rate_pre_sub:** 17.8% (highest since 1934)
  - **avg_rate_post_sub:** 16.4% (highest since 1937)
  - **increase_pp:** +15.4pp
  - **china_avg_tariff:** ~51%
  - **period:** 2025
  - *Sources (2):* Yale Budget Lab; Z2Data

**Other content blocks on this page:**
- **fdiNote:** Global FDI fell 3% in H1 2025, extending a two-year slump; greenfield-project announcements fell 17% in number, with supply-chain-intensive manufacturing (textiles, electronics, autos) down 29% amid tariff uncertainty (UNCTAD). The fragmentation signal is sharpest in bloc-to-bloc flows: FDI between geopolitically distant blocs fell 30% relative to within-bloc flows after Q1 2022 (EBRD). AI/digital is the lone growth area — US greenfield reached $237bn in H1 2025 (>half AI-related: semiconductors $103bn, data centres $27bn).
- **reshoring** — 5-row table (cols: sector, announced, delivered, policy, source)
- **connectorNote:** The "connector economies" (Vietnam, Poland, Morocco, Mexico, Indonesia) are just 4% of global GDP but attracted >10% (~$550bn) of greenfield investment since 2017. Mexico: US-import share rose 13.4% (2017) → 15.8% (2024) as China's fell 21.6% → 13.2%; record >$41bn FDI in 2024, manufacturing FDI +20%/yr since 2019 (vs 7% global; auto ~40%). But new FDI sits at a 10-year low — gains are dominated by trade diversion and reinvested earnings, not greenfield capital relocation (Dallas Fed; BCG). Vietnam/India absorb US-end-demand assembly while sourcing intermediate inputs from China.
- **tariff** — object (keys: preSub, postSub, increasePp, chinaAvg, signal, source)
- **dataQuality** — object (keys: high, moderate, quarantined)
- **relatedSectors:** The critical-minerals reshoring thread connects to /markets/energy and /markets/defense; the cable bypass routes to /structural/digital; tariff/FX stress on importers to /markets/credit and /exposure. Cross-section causal link: the tariff regime compounds the oil-cost margin hit on import-heavy equity sectors (autos, consumer, semis) — see /markets/equities and the causal map on /connections.

---

### Digital Sovereignty
`/structural/digital` · source `digital.json`

**Thesis:** Internet fragmentation has a hard physical chokepoint problem layered on a policy one. VegaReady tracks two layered risks: physical (submarine-cable chokepoints, repair capacity, LEO backup limits) and policy (data localization, internet controls, kill-switch risk). The chokepoint problem mirrors the maritime one — the Red Sea–Egypt corridor carries ~17% of global internet traffic and >90% of Europe–Asia bandwidth through a single corridor, while the global repair fleet is just ~63 aging vessels. Submarine-cable sabotage has become a normalized grey-zone tactic with a verifiable incident record.

**Cards (2):**

- **Red Sea–Egypt Cable Chokepoint**  ·  MEDIUM  ·  _Index_
  - *Summary:* ~17% of global internet traffic and >90% Europe–Asia bandwidth via a single corridor; ~63 repair vessels globally; Sep 2025 Jeddah cut left 1 of 4 cables down 7+ months.
  - **share_global_traffic:** ~17%
  - **europe_asia_bandwidth:** >90%
  - **global_repair_vessels:** ~63
  - **cables_cut_sep_2025:** 4
  - **period:** 2025
  - *Sources (1):* CSIS
- **LEO Satellite vs Subsea Capacity Gap**  ·  LOW for exact ratio; MEDIUM for the directional conclusion that LEO cannot substitute for subsea at scale  ·  _Index_
  - *Summary:* Global satellite capacity is directionally far smaller than submarine-cable capacity; one T3 estimate puts satellite at ~50 Tbps by 2026 vs ~8,750 Tbps subsea. LEO is useful for emergency prioritization, not full substitution.
  - **satellite_capacity_tbps:** ~50 (T3 illustrative)
  - **subsea_capacity_tbps:** ~8,750 (T3 illustrative)
  - **starlink_subs_m:** ~10 (T3)
  - **period:** 2026
  - *Sources (1):* ABHS

**Other content blocks on this page:**
- **physicalNote:** The global internet runs on ~600 submarine cables (~1.5M km) carrying ~99% of intercontinental data, repaired by a global fleet of only ~63 aging vessels at $1–3M per repair and months of lead time. Roughly 150–200 faults occur annually, 70–80% accidental. The Red Sea–Egypt corridor carries ~17% of global internet traffic and >90% of Europe–Asia bandwidth; the September 6, 2025 Jeddah event cut four cables (SEA-ME-WE-4, IMEWE, FALCON GCX +1), three needing ~5 months and one still out 7 months later.
- **leoNote:** LEO satellite is not a backup at scale. A single-blog estimate puts total global satellite capacity at ~50 Tbps by 2026 versus ~8,750 Tbps subsea, but the exact ratio is T3 and should be treated as illustrative. The usable monitoring signal is simpler: subsea cables remain the primary global-capacity layer, while LEO systems support emergency prioritization, remote access and outage triage rather than full traffic substitution.
- **policyNote:** Global internet freedom declined for the 14th consecutive year in Freedom House's Freedom on the Net 2024 (72 countries); China and Myanmar tied as worst, Iran 3rd most repressive, Iceland freest, and 48% of internet users live in countries where authorities disconnected networks. Data localization is proliferating: ~100 measures across 40 countries by early 2023, >two-thirds combining storage requirements with flow prohibition (OECD).
- **scorecard** — 10-row table (cols: region, control, localization, redundancy, satBackup, killSwitch, composite, notes)
- **scorecardNote:** Scored 1–5, 5 = highest fragmentation/kill-switch risk. Control and localization columns are anchored to Freedom House and OECD data; redundancy/backup/kill-switch are analyst estimates (T3). Russia (RuNet) and China (Great Firewall) score highest on coercive control; Egypt and East Africa are the physical-chokepoint extremes; the US scores lowest overall.
- **dataQuality** — object (keys: high, moderate, quarantined)
- **relatedSectors:** The cable-weaponization investment angle (Starboard, repair-ship scarcity, mine-clearing) lives on /markets/defense; the chokepoint geography on /structural/chokepoints; the cable_severance scenario across the corpus.
- **sabotage** — 3-row table (cols: incident, date, detail, source)
- **sabotageNote:** Submarine-cable sabotage has become a normalized grey-zone tactic with a verifiable incident record — anchor-drag and deliberate cuts across the Baltic, Taiwan Strait and Red Sea. With ~150–200 faults annually (70–80% accidental), the tracking signal is the concentration of deliberate cuts at chokepoints, not the raw fault count.

---

### Food Resilience
`/structural/food` · source `foodresilience.json`

**Thesis:** Food-system resilience is bifurcated between a reserve-hoarding giant and a cluster of high-dependency importers. The 12 Phase-2 reference economies are scored 1–5 (5 = most resilient/least exposed) on caloric self-sufficiency, GFSI, fertilizer dependency, water/desal dependency and import-chokepoint exposure. The scorecard cleanly separates structural buffers (China's stockpile, US/Brazil/Russia/EU export surpluses) from structural fragility (Egypt, Pakistan). The Gulf (Saudi, UAE) is the unique case of high GFSI funding capacity but near-total physical import and water dependency — a fiscal-cushion model rather than a resilience model.

**Cards (2):**

- **China Strategic Grain Reserve Dominance**  ·  MEDIUM  ·  _Scorecard_
  - *Summary:* China holds ~51% world wheat, ~67% corn, ~60% rice stocks; feeds ~19% of humanity on ~7% arable land. Largest buffer globally; structural food-security hedge.
  - **world_wheat_stocks:** ~51%
  - **world_corn_stocks:** ~67%
  - **world_rice_stocks:** ~60%
  - **world_pop_fed:** ~19%
  - **arable_land:** ~7%
  - **period:** 2022-2024
  - *Sources (1):* USDA via CPG
- **High-Dependency Food Importer Cluster**  ·  MEDIUM  ·  _Scorecard_
  - *Summary:* Gulf imports ~85–90% of food; Egypt ~12 MMT wheat MY23/24 (Russia ~70%); Japan/S Korea caloric self-sufficiency 40%/44%. Structural fragility cluster.
  - **gulf_food_import:** ~85–90%
  - **egypt_wheat_imports_mmt:** ~12
  - **egypt_russia_share:** ~70%
  - **japan_self_sufficiency:** ~40%
  - **korea_self_sufficiency:** ~44%
  - **period:** 2023-2024
  - *Sources (2):* All About Feed; Japan MAFF via Wikipedia

**Other content blocks on this page:**
- **scorecard** — 12-row table (cols: economy, caloric, gfsi, fertilizer, water, chokepoint, resilience, anchor)
- **signalNote:** Scored 1 (most fragile) to 5 (most resilient). Caloric self-sufficiency and GFSI are anchored to cited data; reserve-days and water-dependency draw on Section 5 and public proxies where reserve figures are not disclosed. The scorecard separates structural buffers (China's stockpile, US/Brazil/Russia/EU surpluses) from structural fragility (Egypt, Pakistan — low self-sufficiency, thin fiscal capacity, multiple chokepoint exposure). Where strategic grain-reserve days are not publicly disclosed (most Gulf states, Egypt), VegaReady uses import-cover proxies rather than fabricate reserve figures.
- **dataQuality** — object (keys: high, moderate, quarantined)
- **relatedSectors:** The conflict-specific food deep dive (fertilizer cascade, FAO index, WFP hunger projection, GCC reserves) is on /markets/food-agriculture; desalination dependency on /markets/water; country fiscal stress on /exposure and /markets/credit.

---

## Dashboard — client-only React tabs (content inventory)

The `/dashboard/*` pages render via `WarTracker.jsx` (client:only) from these data arrays. A JS-free fetch sees an empty shell — this is the content. Suggested tab grouping in brackets.

| Array | [Tab] | Rows | Columns |
|---|---|---|---|
| `UAE_DATA` | Gulf | 77 | day, phase, B, C, date, U, Bd, Ud, deaths, inj, conf, note |
| `QATAR_DATA` | Gulf | 72 | day, phase, B, C, date, U, Bd, Ud, deaths, inj, conf, note |
| `BAHRAIN_DATA` | Gulf | 72 | date, day, phase, dB, dU, cumB, cumU, deaths, inj, conf, note |
| `SAUDI_DATA` | Gulf | 72 | date, day, phase, B, C, U, deaths, inj, conf, note |
| `KUWAIT_DATA` | Gulf | 71 | day, phase, B, C, date, U, Bd, Ud, deaths, inj, conf, note |
| `OMAN_DATA` | Gulf | 58 | day, phase, B, C, date, U, deaths, inj, conf, note |
| `IRAQ_DATA` | Gulf | 53 | date, day, phase, note |
| `LEAKER_LOG` | Analytics | 118 | day, date, country, type, target, severity, targetType, location, desc, status |
| `OIL_PRICE_TIMELINE` | Markets | 70 | date, brent, wti, event, cumChg |
| `MARKET_EVENT_RESPONSE` | Markets | 109 | id, event, date, facility, commodity, pre, post, change, source, conf, note, phase |
| `REFINERY_EVENTS` | Markets | 80 | day, date, facility, country, capacity, unit, status, desc, forceM |
| `FORCE_MAJEURE` | Markets | 70 | entity, country, day, date, sector, impact |
| `GCC_EQUITY` | Gulf | 39 | market, pre, low, peakDrop, mar16, netChg, note |
| `GCC_CDS` | Gulf | 17 | sovereign, pre, post, change, note |
| `HORMUZ_ANALYST` | Markets | 78 | date, analyst, premium, forecast, source |
| `CURRENCY_CHANGES` | Markets | 40 | currency, country, preWar, current, pctChange, date, source, conf, phase |
| `SHIPPING_INSURANCE` | Markets | 56 | date, label, warRisk, vlcc, vlsfo, hormuz, note, conf |
| `BUNKER_PRICES` | Markets | 62 | date, vlsfo, hsfo, mgo, note |
| `VESSEL_ATTACKS` | Markets | 107 | vessel, day, flag, date, conf, killed, loc, outcome, type |
| `INSURANCE_EVENTS` | Markets | 97 | event, date, conf, detail, source |
| `CONTAINER_RATES` | Markets | 41 | route, pre, mar3, mar13, mar17, note |
| `SHIPPING_EVENTS` | Markets | 121 | day, date, event, impact, severity |
| `IRAN_DAY_CLAIMS` | Iran | 73 | date, day, waves, claimed, weapons, targets, propFlag, conf |
| `WEAPON_SYSTEMS` | Iran | 66 | name, type, status, evidence, range, warhead, debut |
| `IRAN_DISINFO` | Iran | 165 | date, claim, source, refutation, type |
| `IRAN_MILITARY_ORDER` | Iran | 35 | domain, branch, systems, prewar_quantity, est_remaining, status, note |
| `IRAN_DEPLETION` | Iran | 4 | system, prewar_stock, fired, intercepted, remaining, pctUsed, date, source, conf, phase |
| `IRAN_CAPACITY` | Iran | 3 | category, system, monthlyRate, warReserve, daysToExhaust, note, source, conf, phase |
| `EPICFURY_TIMELINE` | Analytics | 93 | day, date, phase, event, detail, opName, targets, outcome, source, conf |
| `EPICFURY_BDA` | Analytics | 65 | target, targetType, location, strikeDay, preStrikeStatus, postStrikeAssessment, source, conf |
| `STRATEGIC_CALCULUS` | Economics/Analytics | 335 | date, day, indicator, direction, assessment, evidence, source, conf |
| `US_POLICY_EVENTS` | US | 207 | day, phase, date, conf, detail, topic |
| `ISRAEL_OPS_TIMELINE` | Israel | 182 | day, date, event, detail, conf |
| `COALITION_AIR_ORDER` | US | 29 | base, aircraft, country, quantity, role, squadron, nation, status, mapX, mapY |
| `US_NAVAL_FORCES` | US | 32 | id, name, location, status, mapX, mapY, composition, note, type |
| `ISRAEL_DEFENSE_SYSTEMS` | Israel | 8 | system, type, prewar_batteries, active_batteries, missiles_prewar, est_remaining, intercept_rate, note |
| `US_CASUALTIES` | Casualties | 64 | day, date, name, branch, rank, location, cause, class, nationality |
| `COALITION_CASUALTIES` | Casualties | 48 | name, day, rank, branch, date, location, cause, class, nationality |
| `CIVILIAN_INCIDENTS` | Casualties | 89 | day, country, date, location, deaths, cause, conf, desc, source, victims |
| `SOURCES` | Sources | 231 | cat, items |
| `FEEDER_OUTLETS` | Sources | 190 | tier, tierlabel, outlets |
| `COUNTRY_SUMMARY` | Gulf | 7 | name, totalB, totalC, totalU, killed, injured, asOf, reporting, keyTargets, forceM, cadence |
| `WAR_ROOM_BRIEFS` | Dashboard | 110 | id, sector, severity, pinned, day, headline, body, timestamp, sources, confidence, tags, relatedBriefs, crossRef |
| `WR_SECTORS` | Dashboard | — | scalar/obj |
| `WR_SEVERITY` | Dashboard | — | scalar/obj |
| `IRAN_RECONCILIATION` | Iran | — | scalar/obj |
| `IRAN_STOCKPILE` | Iran | — | scalar/obj |
| `BRIEF_ECON` | Dashboard | — | scalar/obj |
| `BRIEF_MARKETS` | Dashboard | — | scalar/obj |
| `BRIEF_ADV` | Dashboard | — | scalar/obj |
| `GULF_AIR_DEFENSE` | Gulf | 24 | country, system, type, batteries, launchers, missiles_prewar, missiles_est_remaining, intercept_rate, protects, status, source, nation |
| `GULF_NAVAL_ASSETS` | Gulf | 14 | country, vessel, type, quantity, displacement, armament, role, status, mapX, mapY |
| `PROVENANCE` | Sources | — | scalar/obj |

**Sample rows (illustrative — wording lives in these):**

- `WAR_ROOM_BRIEFS[0]`: {"id": "wr-001", "sector": "Military", "severity": "critical", "pinned": true, "day": 32, "headline": "US deploys 3rd carrier strike group to Arabian Sea", "body": "USS Harry S. Truman CSG ordered to Arabian Sea, joining Lincoln and Eisenhower groups. Pentagon cites force protection for 45,000+ US personnel across 7 GCC bases. Largest naval concentration in region since 2003.", "timestamp": "2026-
- `MARKET_EVENT_RESPONSE[0]`: {"id": 1, "event": "DXB T3 / Jebel Ali / AWS fire", "date": "Feb 28", "facility": "Dubai Airport, Jebel Ali Port", "commodity": "Brent Crude", "pre": "$72.87", "post": "$77.74 cl / $82 intra", "change": "+6.7% close, +12.5% intra", "source": "Reuters, CNN", "conf": "H", "note": "First trading session post-strike; markets absorbed shock on Sunday open", "phase": 1}
- `STRATEGIC_CALCULUS[0]`: {"date": "Mar 25", "day": 26, "indicator": "Trump presented 15-point ceasefire proposal to Iran via Pakistan requiring nuclear dismantlement, missile limits, Axis abandonment, Strait of Hormuz reopening", "direction": "DE-ESCALATORY", "assessment": "First formal diplomatic off-ramp offered by US leadership indicating potential strategic shift toward negotiated settlement", "evidence": "US presente
- `CIVILIAN_INCIDENTS[0]`: {"day": 1, "country": "UAE", "date": "Feb 28", "location": "Near Zayed Airport", "deaths": 1, "cause": "Military strike", "conf": "M", "desc": "Debris strike. First confirmed civilian death.", "source": "MoD/media reports", "victims": "1 Pakistani worker"}

## Existing glossary — 209 terms (already in the data!)

The site already ships a glossary in the dashboard data. The audit's "needs inline jargon glossing" can draw on this directly — surface it site-wide as tooltips.

- **B / C / U** — Ballistic missile, Cruise missile, Drone/UAV — daily intercept counts where MoD reports.
- **Detected vs intercepted** — MoD often reports intercepted / detected; gap may include sea falls or leakers.
- **H / M / L** — High = official MoD; Medium = derived; Low = fragmentary or incident-only.
- **FDI** — Foreign direct investment — long-term stakes in real assets abroad.
- **SWF** — Sovereign wealth fund — state-owned pools (often oil-linked) investing globally.
- **FM** — Force majeure — contractual suspension due to events beyond control.
- **Operation Epic Fury** — US codename for joint US-Israeli military operations against Iran launched February 28, 2026. Objectives include destroying Iran's missile capabilities, annihilating its navy, severing proxy support, and preventing nuclear weapons acquisition.
- **Operation Roaring Lion** — Israeli codename for coordinated strikes with the US under Operation Epic Fury, with Israel focusing on leadership decapitation strikes while US handles large-scale capability degradation.
- **Kharg Island** — Iran's strategic oil export hub in Persian Gulf handling 90% of crude exports. Contains deep-water ports for supertankers and major storage facilities. Key economic pressure point targeted by US forces in March 2026.
- **Double tap airstrikes** — US tactic of sequential strikes on same targets to maximize casualties, first reported in Iran conflict. Involves initial strike followed by second attack on rescue/response personnel.
- **Decapitation strikes** — Targeted elimination of leadership command structure. Opening phase of Epic Fury involved unprecedented Israeli decapitation strikes killing Supreme Leader Ali Khamenei and senior officials.
- **Black Sparrow missile** — Newly developed Israeli air-launched ballistic missile used in Iran strikes. Fired from F-15s during largest combat sortie in Israeli history (200+ fighter jets).
- **Strait of Hormuz blockade** — Near-total maritime closure by Iran beginning March 4, 2026. Affects 20% of global oil/LNG transit with over 3,000 vessels stranded. Central strategic issue of the conflict.
- **Mina Al-Ahmadi refinery** — Kuwait's largest oil refinery (730,000 bpd capacity) repeatedly targeted by Iranian drone strikes. One of Middle East's largest facilities affected by conflict expansion.
- **Operation Midnight Hammer** — Previous US operation against Iran in June 2025 involving limited nuclear target strikes. Predecessor to more comprehensive Operation Epic Fury.
- **The Returnees** — Socio-economic demographic of over 220,000 Indian nationals repatriated from GCC/Iran due to 2026 conflict. Driving reverse migration and secondary city real estate growth in India.
- **Interim Leadership Council** — Temporary governing body established March 1, 2026 to exercise functions of Iran's head of state after Supreme Leader's death
- **Mina al-Ahmadi refinery strike** — Iranian drone attack on Kuwait's largest oil facility (730,000 bpd capacity) on March 21, 2026
- **AUMF consideration** — Congressional Authorization for Use of Military Force being discussed by US lawmakers to formally authorize Iran war operations
- **Diego Garcia ICBM strike** — Iranian intercontinental ballistic missile attack on US-UK base 4,000km from Iran, demonstrating extended range capability
- **Kharg Island blockade** — Proposed US operation to occupy or blockade Iran's critical oil export hub to cripple Iranian economy
- **suicide skiffs** — Remote-controlled explosive boats used by Iran to attack vessels in the Strait of Hormuz, representing a growing asymmetric threat in the narrow waterway.
- **double tap airstrikes** — US tactic reportedly used to maximize casualties by striking the same target twice in succession.
- **mosaic doctrine** — Iranian military strategy that decentralizes capabilities and allows for swift replacement of leaders, enabling continued war of attrition despite leadership losses.
- **force majeure** — Legal concept invoked by Gulf energy producers when forced to halt exports due to war conditions beyond their control.
- **snapback mechanism** — Process by which E3 (UK, France, Germany) can trigger reinstatement of UN sanctions on Iran if nuclear negotiations fail.
- **Min Zadai** — Underground nuclear weapons facility in Iran reportedly destroyed by US-Israeli strikes on March 3, 2026.
- **Soleimani Class Corvette** — Iranian warship class, all four vessels reportedly destroyed by US-Israeli forces during the war.
- **Operation True Promise IV** — Iran's military response operation against US-Israeli strikes. Fourth in series of operations using this codename, involving ballistic missile and drone attacks on targets across Middle East including Gulf states.
- **Black Sparrow Air-Launched Ballistic Missile** — Newly developed Israeli air-launched ballistic missile system fired from F-15 fighter aircraft. Made combat debut during opening strikes of Iran war, representing significant advancement in Israeli standoff strike capability.
- **Task Force Scorpion Strike** — US Special Operations Command Central unit established December 2025 to deploy low-cost one-way attack drones in Middle East. First-of-its-kind squadron operating LUCAS drones under SOCOM leadership.
- **LUCAS Drone (Low-cost Unmanned Combat Attack System)** — US one-way attack drone reverse-engineered from captured Iranian Shahed-136. Costs ~$35,000 per unit, operated by Task Force Scorpion Strike. Features enhanced satellite communications and AI-enabled targeting vs original Shahed design.
- **Precision Strike Missile (PrSM)** — US Army next-generation ground-launched ballistic missile replacing ATACMS. Range over 500km, can carry two missiles per HIMARS pod vs one ATACMS. Made combat debut against Iran in Operation Epic Fury.
- **Force Majeure Declaration** — Legal declaration by QatarEnergy suspending contractual LNG delivery obligations due to Iranian strikes on Ras Laffan facilities. Affects 17% of Qatar's LNG export capacity for potentially 3-5 years, impacting global energy markets.
- **Strait of Hormuz Closure** — Iranian blockade of critical Persian Gulf waterway through which ~20% of global oil/LNG normally transits. Over 3,000 vessels stranded in region, creating major global energy supply disruption.
- **IRIS Dena Incident** — Sinking of Iranian Navy frigate by US submarine USS Charlotte near Sri Lanka on February 28, 2026. First submarine combat sinking since Falklands War and first by US submarine since WWII. 104 Iranian personnel killed.
- **Fattah-2** — Iranian hypersonic ballistic missile system operationally deployed during the 2026 war, featuring high maneuverability and speed capabilities
- **Black Sparrow** — Israeli air-launched ballistic missile fired from F-15s, newly developed system used in combat operations against Iran
- **Kharg Island Blockade** — Proposed US military operation to blockade or occupy Iran's strategic Kharg Island oil hub to cripple Iran's economy
- **Maritime War Premium** — Additional insurance costs for ships transiting high-risk areas like Strait of Hormuz during the Iran conflict
- **Cluster Munition Interception Gap** — Tactical vulnerability where ballistic missiles equipped with cluster bomblets become difficult to intercept after payload opens and releases submunitions
- **Shadow Fleet Bottlenecks** — Disruptions to Iran's covert oil tanker network used to evade sanctions, affecting global oil supply chains
- **Starshield Integration** — Use of SpaceX's military satellite constellation providing high-bandwidth, unjammable communications for autonomous drone swarms in contested environments
- **Executive Order 110** — Presidential directive signed by Philippine President Ferdinand Marcos Jr. on March 24, 2026, declaring a national energy emergency due to oil supply threats from the Iran War, authorizing government procurement of fuel and emergency measures
- **Immediate Response Force (IRF)** — Brigade-sized rapid deployment unit within the 82nd Airborne Division, approximately 3,000 soldiers ready to deploy anywhere in the world within 18-24 hours
- **Pickaxe Mountain Site** — Underground Iranian nuclear facility (Kūh-e Kolang Gaz Lā) near Natanz, buried up to 100 meters deep, assessed by Western intelligence as potential new enrichment plant construction site
- **Minzadehei** — Covert Iranian nuclear weapons development site northeast of Tehran, targeted by Israeli strikes for secretly developing critical nuclear weapons components
- **Arak heavy water reactor** — A significant Iranian nuclear facility located in Yazd Province, which was a target of strikes during the conflict.
- **Ardakan uranium processing facility** — An Iranian uranium processing facility located in Yazd Province, which was a target of strikes during the conflict.
- **Strait of Hormuz** — A critical geopolitical chokepoint and narrow sea passage connecting the Persian Gulf with the Arabian Sea, essential for global oil shipments. Its potential closure has significant economic implications.
- **15-Point Proposal** — A peace proposal presented by the Trump administration to Tehran via Pakistan, demanding the dismantling of Iran's nuclear program, ending uranium enrichment, and ensuring freedom of navigation in the Strait of Hormuz.
- **SADAF-3** — Integrated coastal defense network deployed by UAE naval forces to intercept low-altitude suicide drones.
- **Karrar-EV** — Extended-range variant of the Karrar UCAV observed in recent swarm attacks.
- **Operation Guardian Dawn** — A multi-national defensive protocol activated in response to escalating hostilities on war day 33.
- **Shahed-149 Gaza** — An Iranian high-altitude, long-endurance unmanned combat aerial vehicle, observed operating in Gulf airspace during the late March and early April 2026 escalations.
- **Operation Swift Falcon** — A joint GCC maritime patrol operation initiated on Apr 2 to secure the Strait of Hormuz.
- **Desert Aegis** — A joint GCC air defense protocol activated during Phase 3 to synchronize radar data across the Arabian Peninsula.
- **Operation Golden Shield** — UAE-led coalition defensive posture enacted on Apr 1 to intercept medium-range ballistic missiles and drone swarms over the Persian Gulf.
- **Coastal Shield Protocol** — A revised maritime defense protocol activated on Apr 2 across Gulf ports to counter asymmetric naval threats.
- **UN Resolution 2817** — A United Nations Security Council resolution drafted to condemn Iranian strikes on GCC infrastructure and demand an immediate ceasefire.
- **Exo-atmospheric Intercept** — The destruction of an incoming ballistic missile outside the Earth's atmosphere, significantly minimizing debris risk to civilian populations below.
- **Operation Desert Shield 2026** — A joint defensive maneuver organized by GCC forces observed in the northern Gulf region.
- **Operation Silent Falcon** — Joint GCC aerial patrol operation initiated on Apr 1 to secure critical infrastructure.
- **Operation Sentinel Shield** — A joint GCC naval and air defense operation initiated in late March 2026 to secure the Strait of Hormuz and the Arabian Gulf from asymmetric maritime threats.
- **Sayyad-4B** — Upgraded Iranian surface-to-air missile system deployed along the Gulf coast, noted in intelligence reports for posing increased risks to regional aviation.
- **Sayyad-4B Interceptor** — An Iranian long-range surface-to-air missile system recently deployed near coastal battery sites, as observed on Apr 2.
- **Zulfiqar-Air** — A newly deployed air-to-surface variant of the Zulfiqar ballistic missile, observed in recent strikes.
- **Operation Sentinel Vigilance** — A joint GCC naval escort mission initiated on Apr 03 to protect commercial shipping in the Strait of Hormuz from asymmetric maritime threats.
- **Zelzal-3B** — An upgraded variant of the Iranian heavy artillery rocket, first identified in debris from an intercepted strike on Apr 02.
- **Khorramshahr-4** — A medium-range ballistic missile introduced into the conflict on Apr 03, featuring an advanced guidance system to bypass electronic countermeasures.
- **Hormuz Defensive Perimeter** — A multi-layered naval defense established near the strait.
- **Strait of Hormuz Exclusion Zone** — A declared maritime no-go area severely restricting commercial shipping, formally enacted on Apr 04.
- **Khaibar-5** — New variant of Iranian loitering munition observed in Apr 6 strikes on GCC oil infrastructure.
- **Operation Gulf Shield** — Multinational naval and air defense coordination framework activated on Apr 5 to protect energy transit in the Strait of Hormuz.
- **Islamabad Accords** — A 14-day ceasefire agreement announced on Apr 8, mediated by Pakistan, to pause hostilities between Iran and Gulf forces, with negotiations scheduled for Apr 10.
- **Conditional Reopening of Hormuz** — Iranian policy established on Apr 8 allowing limited commercial transit through the Strait of Hormuz under Iranian military management and proposed transit fees.
- **Operation Iron Shield** — A joint GCC air defense framework activated to counter coordinated drone swarms targeting coastal infrastructure.
- **Operation Pearl Guardian** — A joint GCC naval patrol operation established on Apr 9 to secure maritime routes in the Persian Gulf amid heightened conflict.
- **Early Hour Violations** — Sporadic breaches of the April 8 ceasefire occurring in the pre-dawn hours, primarily involving rogue drones.
- **Council of 5 Men** — The emergency ruling body of the Iranian government formed after the reported death of the Supreme Leader.
- **Bavar-373 Advanced** — Upgraded Iranian mobile surface-to-air missile system, analogous to the S-400, used to defend launch sites from counter-strikes.
- **Two Generals Framework** — A fragile two-week ceasefire agreement taking effect around Day 40, aiming to halt large-scale strikes and reopen the Strait of Hormuz.
- **Islamabad Peace Talks** — Mediated negotiations commencing on Apr 10 in Pakistan between U.S. and Iranian representatives to stabilize the ceasefire.
- **Extended Coastal Screen** — A defensive naval and air deployment initiated on Apr 09 to intercept low-altitude threats over coastal waters.
- **40-Day War** — A term for the major military conflict between the US, Israel, and Iran that began on Feb 28 and ended with a fragile ceasefire on Apr 8.
- **Islamabad Accord** — The framework establishing a fragile two-week ceasefire between the US and Iran, brokered by Pakistani Prime Minister Shehbaz Sharif on Apr 8.
- **Operation Eternal Darkness** — Israel's massive air campaign in Lebanon striking Hezbollah targets, which Iran claims violates the US-Iran ceasefire agreement.
- **Epic Fury Live** — A conflict tracking dashboard (also referred to as the OSS Report) providing live military, economic, and casualty metrics.
- **Joint Task Force Shield** — A multi-national task force established to coordinate missile defense and early warning systems across the GCC, heavily active during Phase 3 of the conflict.
- **Al-Nujaba** — Iraqi Shia paramilitary group claiming responsibility for secondary drone launches against Kuwaiti islands.
- **Kish Island Intercept** — A coordinated air defense operation on Apr 12 resulting in the interception of multiple drones originating from Kish Island before reaching the UAE airspace.
- **Zulfiqar-7** — A newly deployed anti-ship cruise missile variant observed on Apr 13 targeting commercial shipping lanes near the Strait of Hormuz.
- **Operation Swift Shield** — A joint GCC air defense initiative announced to coordinate regional interception capabilities against incoming drones and missiles.
- **Fateh-110 Mod 4** — Upgraded solid-fueled short-range ballistic missile deployed by Iran in the Apr 14 strikes against GCC infrastructure.
- **Operation True Promise II** — IRGC operational name for the second wave of strikes launched on Apr 13 and Apr 14.
- **Islamabad Talks** — A series of peace negotiations brokered by Pakistan following the Apr 7 ceasefire announcement, aimed at converting the fragile truce between the U.S.-Israeli coalition and Iran into a lasting agreement.
- **Apr 14 UNSC Compensation Demand** — A formal diplomatic demand submitted by Iran to the UN Security Council on Apr 14, seeking financial compensation from Saudi Arabia, the UAE, Qatar, Bahrain, and Jordan for alleged complicity in the Feb 28 strikes.
- **U.S. Naval Blockade** — An economic warfare measure implemented by the United States on Apr 14, targeting all vessels entering or departing Iranian ports in response to Iran's closure of the Strait of Hormuz.
- **Naval Blockade of Iran** — A U.S.-led naval blockade of Iranian ports in the Strait of Hormuz and the Gulf of Oman, fully implemented on Apr 15 to halt Iranian maritime trade.
- **Gulf War III** — An alternative designation used by some analysts and media outlets to refer to the 2026 Iran War.
- **GCC Integrated Early Warning System** — A regional radar and sensor network enhanced during the conflict to detect low-altitude incoming threats.
- **Stratospheric Aerostat Radar (SAR)** — High-altitude radar balloons deployed by GCC forces in Phase 3 to detect low-flying drones.
- **Zolfaghar-12** — A new variant of Iranian solid-fueled short-range ballistic missile identified by CENTCOM on Apr 16 during the attacks on GCC infrastructure.
- **Shahab-3 Extended Range Variant** — A modified medium-range ballistic missile first identified in strikes on Apr 15, featuring enhanced terminal evasion capabilities against regional air defenses.
- **Shahed-238B** — A modified jet-powered variant of the Shahed series loitering munition, observed with increased terminal velocity, first identified on Apr 17.
- **Hormuz Choke Point Strategy** — A decentralized naval mining and fast-attack boat doctrine employed by the IRGC Navy to disrupt commercial shipping through the Strait of Hormuz, intensified since Apr 15.
- **Fattah-3** — A newly deployed Iranian hypersonic ballistic missile variant, first identified during the Apr 16 barrage against GCC critical infrastructure.
- **Operation Coastal Guard** — Joint GCC naval patrol operation initiated on Apr 17 to secure the Strait of Hormuz from asymmetric fast-attack craft.
- **Shahed-136B** — Extended-range variant of the Shahed-136 loitering munition, featuring enhanced evasion capabilities and confirmed in theater starting Apr 17.
- **ESCAT** — Emergency Security Control of Air Traffic, implemented by Gulf nations including Kuwait and the UAE in mid-April 2026, leading to widespread commercial flight cancellations.
- **Operation Desert Shield-26** — A joint GCC air defense initiative launched on Apr 18 to coordinate counter-UAS strategies.
- **Khaibar-X** — A new variant of Iranian ballistic missile first observed on Apr 18 targeting coalition naval assets.
- **Zolfaghar-E** — An enhanced extended-range variant of the Zolfaghar ballistic missile identified in strikes on Apr 17.
- **Operation Sentinel Guardian** — A joint GCC maritime patrol initiative launched on Apr 18 to secure the Strait of Hormuz.
- **Hormuz Access Denial (HAD)** — A tactical doctrine employing coordinated fast-attack craft and loitering munitions to restrict commercial maritime transit through the Strait of Hormuz.
- **Bavar-373 Upgrade** — An advanced Iranian mobile air defense system, noted for upgraded radar capabilities observed targeting Gulf drones during the April offensive.
- **Shabab-2 TBM** — A tactical ballistic missile variant newly deployed by IRGC forces against coastal infrastructure, featuring a specialized terminal guidance system.
- **Borouge** — A petrochemical plant in Ruwais, UAE, which became a target of Iranian strikes during the conflict.
- **Bapco Refinery** — A major refinery in Bahrain targeted by persistent missile attacks.
- **Bandar Abbas Naval Exclusion Zone** — A maritime area declared by GCC-aligned forces on Apr 21 restricting civilian and commercial vessels near the Iranian coast, enforced by naval patrols.
- **Shahed-136B Extended Range** — A modified variant of the Shahed-136 loitering munition, observed with supplementary fuel tanks since Apr 21, allowing deeper penetration into the Arabian Peninsula.
- **Operation Economic Fury** — The U.S. naval blockade of Iranian ports aimed at strangling Iran's economy during the 2026 conflict.
- **Epaminondas** — A container ship seized by Iran's IRGC in the Strait of Hormuz on Apr 22.
- **MSC Francesca** — A container ship seized by Iran's IRGC in the Strait of Hormuz on Apr 22.
- **Strait Shield Initiative** — A joint naval patrol framework established by GCC states in early May 2026 to secure commercial transit through the Strait of Hormuz.
- **Project Freedom Pause** — 
- **Khatam al-Anbiya Joint Command** — 
- **Phase 3 Resumption** — The return to active hostilities across multiple fronts starting on May 4 (War Day 66), ending the 17-day ceasefire.
- **Oman Ceasefire Violation** — An isolated airspace violation over Oman on May 6 (War Day 68), marking an exception to Oman's typical non-engagement status.
- **D68 Oman Incident** — A confirmed ceasefire violation involving an interception event over Omani territory on May 6.
- **JADC** — Joint Air Defense Command. A formalized PGCC integrated air and missile defense initiative operationalized after early war communication gaps. Began directing allied intercepts around Day 75.
- **Shahed-101** — Smaller, harder-to-detect loitering munition increasingly utilized by Iranian-aligned forces for localized strikes on coalition critical infrastructure in late May.
- **Operation Sea Shield** — A joint naval and aerial escort operation implemented by GCC states to protect commercial shipping assets transiting the Strait of Hormuz against fast-attack craft and UAV threats.
- **Fattah-2 HGV** — An advanced Iranian ballistic missile equipped with a hypersonic glide vehicle payload, reported to have been deployed against high-value GCC air defense nodes starting in mid-May.
- **Shadow Swarm Strategy** — A coordinated offensive tactic observed in Phase 3 where low-RCS drones are clustered closely with decoy electronic warfare emitters to confuse coastal Early Warning radars.
- **Bavar-373 Mod 2** — An advanced Iranian surface-to-air missile system variant identified actively tracking coalition aircraft during the late May offensives.
- **Shahed-136B / Shahed-131 Mod** — Extended range and enhanced payload variants of Iranian loitering munitions observed with increased frequency in Phase 3. They feature upgraded terminal guidance systems resistant to standard GCC electronic warfare countermeasures.
- **GCC-IADS (GCC Integrated Air Defense System)** — The unified regional missile and air defense coordination network activated by the GCC Secretariat. Used heavily since the ceasefire violation to coordinate interceptor trajectories across Saudi, Bahraini, and UAE airspace.
- **Operation Nimble Guard** — A joint maritime security operation initiated by the US 5th Fleet and GCC naval forces to secure critical energy shipping lanes in the Strait of Hormuz and Gulf of Oman against fast-attack craft and USVs.
- **Strait Interdiction Zone** — An IRGC designation for the contested maritime area near the Strait of Hormuz where civilian shipping and oil tankers are actively targeted or seized following the May 04 ceasefire collapse.
- **Operation True Promise III** — The official Iranian domestic designation for the renewed regional military campaign that commenced on May 04 after the failure of the Muscat Protocol negotiations.
- **GIADN** — Gulf Integrated Air Defense Network; a unified command structure sharing real-time tracking data across GCC states, fully operationalized during Phase 3 of the conflict to counter synchronized drone and missile salvos.
- **SHEZ (Strait of Hormuz Exclusion Zone)** — An unofficial risk-management designation adopted by maritime insurance syndicates after May 18 to categorize the high-threat navigational corridor between Oman and Iran.
- **JADS-G** — Joint Air Defense Shield - Gulf. A coordinated multi-national air and missile defense architecture activated by GCC states during Phase 3 of the conflict to counter saturation strikes.
- **Zulfiqar-3** — An advanced Iranian solid-fueled short-range ballistic missile featuring terminal maneuverability, heavily utilized against fortified military nodes in late May 2026.
- **Qader-3** — Extended-range coastal defense cruise missile utilized by IRGC Navy in recent Phase 3 anti-shipping strikes.
- **Operation Silent Shield** — UAE's multi-layered electronic warfare protocol designed to blind drone swarms before they cross the coastal threshold, newly implemented in Phase 3.
- **May Resurgence** — The renewed period of active hostilities and kinetic exchanges that commenced on War Day 66 (May 4), following the collapse of the 16-day regional ceasefire.
- **Swarm-Spoofing** — An electronic warfare tactic observed during Phase 3 where coordinated loitering munition swarms employ localized GNSS spoofing to obscure their true attack vectors from GCC defense radars.
- **Bandar Abbas Coastal Batteries** — The primary IRGC coastal missile and drone launch complexes utilized extensively during the May Resurgence to target Gulf maritime traffic and northern GCC states.
- **Kheibar Shekan-2** — An advanced Iranian solid-fuel medium-range ballistic missile featuring enhanced terminal maneuverability, observed in strikes targeting deep GCC infrastructure during Phase 3 of the conflict.
- **Coastal Picket Array** — A joint GCC-US naval sensor network rapidly deployed along the western coast of the Persian Gulf to detect low-flying UAS and fast-attack surface craft.
- **Operation Sentinel Resurgence** — The renewed allied naval escort and air defense coordination mission covering commercial transit through the Strait of Hormuz and the Gulf of Oman following the ceasefire collapse.
- **Operation Swift Retort** — A coordinated GCC and allied counter-battery artillery and airstrike campaign targeting forward launcher sites along the Iranian coastline.
- **Zolfaqar-3** — An advanced solid-fueled short-range ballistic missile (SRBM) utilized by Iranian forces in the later phases of the 2026 conflict, featuring enhanced terminal maneuverability.
- **Operation Sentinel Resolve** — The joint GCC-US naval operation initiated to secure the Strait of Hormuz and escort commercial shipping amidst heightened Iranian maritime threats.
- **Dual Blockade** — The strategic stalemate in the Strait of Hormuz where allied forces blockade Iranian ports while Iranian forces maintain a 'mine-and-missile' threat against commercial shipping.
- **Mine-and-Missile Threat** — The asymmetrical area-denial strategy employed by Iranian naval and aerospace forces in the Persian Gulf to deter maritime transit.
- **SHEZ** — Strait of Hormuz Exclusion Zone, an operational maritime boundary temporarily declared by GCC and US NAVCENT forces in mid-May 2026 to protect commercial shipping from asymmetric naval swarm threats following the ceasefire collapse.
- **A2/AD Red Zones** — Designated maritime and aerial corridors within the Persian Gulf recognized by commercial shipping and aviation as high-risk due to persistent Iranian anti-access/area denial operations.
- **Shahed-Swarm Decoy Tactics** — The employment of low-cost loitering munitions to deplete GCC interceptor stockpiles immediately preceding a ballistic missile salvo.
- **Shahed-238** — A jet-powered variant of the Shahed-136 loitering munition, observed in strikes against GCC infrastructure beginning in mid-May 2026. It features higher terminal velocity and reduced radar cross-section, complicating interception windows.
- **Operation True Shield** — The integrated air and missile defense (IAMD) coordination protocol activated by GCC and CENTCOM forces during the second active phase of the conflict to counter mixed-mode swarms.
- **Debris Cascade Effect** — Cumulative risk to civilian areas and infrastructure from falling debris caused by persistent high-altitude intercepts, heavily documented over Gulf metropolises during the renewed May offensives.
- **Shadow Drone** — Slang for Iranian low-radar-signature loitering munitions deployed heavily after the Day 65 ceasefire collapse, often observed exploiting commercial flight corridors to mask their final approach.
- **Persian Gulf Strait Authority (PGSA)** — Iranian agency established to collect transit tolls (up to $2 million per vessel) and require permits for ships passing through the Strait of Hormuz. Sanctioned by the U.S. Treasury.
- **Phase 3 Escalation** — The renewed period of active hostilities and modified tactical engagements following the collapse of the Day 49-65 ceasefire period.
- **Ashkan-3** — A long-range ballistic missile variant introduced by Iranian forces in late May 2026, featuring a maneuverable reentry vehicle and reduced radar signature.
- **Operation Desert Aegis** — A coordinated GCC-wide air and missile defense protocol activated on May 25 to counter multi-axis drone and missile swarms.
- **Arash-e Kamangir** — A new Iranian air defense system reported to have shot down a US MQ-9 Reaper or Orbiter drone near Qeshm Island on May 30.
- **Persian Gulf Strait Authority** — An authority established by Iran to collect tolls of approximately $2 million per vessel from ships transiting the Strait of Hormuz.
- **Hormuz Chokepoint Tactics** — Asymmetric naval strategies involving fast attack craft and naval mines deployed by the IRGC in late May to disrupt commercial shipping.
- **Project Freedom** — A U.S. military initiative announced on May 3 to secure the Strait of Hormuz, involving the deployment of 15,000 service members to escort commercial shipping.
- **Burke Sovereignty Index (BSI)** — A seven-dimensional metric used by analysts to measure the sovereign destruction of the Iranian state following decapitation strikes.
- **The Secret Handshake** — An anonymous protest group that placed functional arcade cabinets at the D.C. War Memorial on May 11 to satirize the war's escalation.
- **Qassem Bassir** — An Iranian solid-fuel Medium-Range Ballistic Missile (MRBM) with enhanced guidance, frequently cited as a primary threat to regional U.S. bases.
- **Zulfiqar-EX** — An extended-range anti-ship ballistic missile deployed by IRGC forces beginning in late May to target maritime escorts.
- **Operation Guardian Scimitar** — Joint GCC naval and coastal defense operation initiated during the Phase 3 resumption of hostilities to secure maritime transit.
- **SHSTZ** — Strait of Hormuz Safe Transit Zone, a multilateral naval corridor established after the ceasefire collapsed.
- **Shahid-149B** — Upgraded, extended-loiter variant of the Gaza drone, widely observed in the Phase 3 Gulf strikes.
- **Shahed-149 Gaza (Modified)** — An upgraded variant of the Iranian UAV observed heavily in Phase 3, featuring enhanced anti-jamming capabilities, optical camouflage, and extended loitering time.
- **Bandar Abbas Maritime Exclusion Zone (BAMEZ)** — A declared high-risk maritime area established around Day 80 due to increased naval mine deployment and fast-attack craft activity in the Strait of Hormuz.
- **GCC-Nets** — Gulf Cooperation Council Networked Engagement and Tracking System, a unified early warning datalink activated in mid-May 2026 to coordinate air defense tracking across member states.
- **Ali Al-Salem Air Base** — A US-linked airbase in Kuwait targeted by IRGC drones and missiles on Jun 1 during the 2026 Iran War.
- **Geruk** — A location in southern Iran where US CENTCOM targeted Iranian drone and radar sites on May 31.
- **Qeshm Island** — An Iranian island in the Strait of Hormuz, targeted by US CENTCOM strikes on May 31 to eliminate drone command centers.
- **Third Gulf War** — An alternative name for the 2026 Iran War, referring to the broader regional conflict involving the US, Israel, Iran, and Gulf states.
- **Asymmetric Swarm Tactic (AST)** — Coordinated naval and aerial operational framework utilizing multiple low-cost loitering munitions to overwhelm GCC coastal air defenses, frequently referenced in post-Day 90 defense briefings.
- **GCDI (Gulf Coastal Defense Initiative)** — A joint air-defense coordination framework activated by GCC states during Phase 3 of the conflict to counter low-altitude drone swarms.
- **Hormuz Safe Transit Corridor (HSTC)** — A multi-national naval convoy framework established in late May to protect commercial shipping following the collapse of the April ceasefire.
- **Strait Denial Protocol** — IRGC Navy asymmetric warfare strategy involving coordinated swarming and targeted mine-laying operations in the Strait of Hormuz, escalated after Day 75 of the conflict.
- **De-escalation Corridor** — A temporary maritime safe zone established in the central Gulf post-Day 85 to allow neutral commercial shipping transit amidst sporadic Phase 3 hostilities.
- **Fath-360 Variant C** — An upgraded Iranian short-range ballistic missile with evasive maneuvering capabilities, first definitively identified in strikes against GCC infrastructure during late May 2026.
- **Qods Maritime Swarm** — A coordinated attack pattern utilizing autonomous explosive unmanned surface vessels (USVs) launched from the Iranian coast targeting naval defense perimeters.
- **Zolfaqar Coastal Battery** — Mobile anti-ship missile systems deployed by the IRGC along the Strait of Hormuz, heavily utilized in interdiction attempts since late May.
- **Operation Falcon Shield** — A joint GCC-US naval and aerial patrol initiative established in late May to protect commercial shipping routes in the Gulf of Oman.
- **Kheibar-2 (Missile)** — An upgraded solid-fueled tactical ballistic missile with enhanced terminal maneuverability, identified in recent strikes on Eastern Province facilities.
- **Qader-4** — An extended-range variant of the Iranian Qader anti-ship cruise missile, first definitively identified by US and GCC intelligence sources in late May 2026 during Phase 3 of the conflict.
- **SODH (Sub-Orbital Debris Hazard)** — A standardized tracking designation utilized by GCC integrated air defense networks to monitor, classify, and mitigate threats from large falling debris following exo-atmospheric ballistic missile intercepts.
- **Strait Constriction Strategy** — Iranian naval and anti-ship missile posture designed to dynamically throttle, rather than fully blockade, commercial transit through the Strait of Hormuz to apply economic leverage.
- **Operation Desert Shield 2.0** — Colloquial designation used by regional observers for the enhanced US/GCC joint air defense interoperability protocols enacted following the May ceasefire collapse.
- **Karrar-EW** — An electronic warfare variant of the Iranian Karrar drone, newly observed during Phase 3 escalations in May 2026, utilized specifically to spoof or suppress GCC early warning coastal radars.
- **DFD (Debris Field Dispersal)** — A localized damage metric adopted in Phase 3 to assess civilian and infrastructure risk from mid-air interception fragments, which became critical as intercepts occurred closer to coastal energy facilities.
- **Phase 3 Resurgence** — The period of renewed active hostilities following the breakdown of the late-April ceasefire, characterized by swarm drone tactics and maritime harassment beginning around War Day 66.
- **Shahab-ER** — Extended-range variant of the Shahab ballistic missile family, observed in strikes post-Day 75.
- **Shahed-147** — Advanced high-altitude long-endurance (HALE) Iranian UAV utilized extensively in Phase 3 ISR operations over the Gulf.
- **Gulf Aegis** — A joint US-GCC integrated air and missile defense architecture activated in late May 2026 to counter Phase 3 asymmetric threats.
- **Khaibar-MRBM** — A medium-range ballistic missile deployed by IRGC forces in Phase 3 of the 2026 conflict, characterized by improved terminal evasion capabilities.
- **GCJOC** — Gulf Coalition Joint Operations Command, established late May 2026 to coordinate combined GCC integrated air and missile defense operations.


## Synthesis & standalone pages — content inventory

### Connections  (`/connections`) — `connections.js`
**Intro:** The cascade is a network, not three separate lists. Each thread below is one shock told across every layer: the sectors it moves through, the countries most exposed, the commodity flow that carries it, and who profits. Follow a thread to see the same disruption from all three analysis pages.

**Umbrella:** Every edge here is a hypothesis. Causation cannot be proven from observation - we report the moves, propose the mechanism, name the competing drivers, and grade our conviction. Nothing on this page claims proven causation; 'Tracked' means we observe the relationship in data, not that we have proven it.

**Themes (6):**
- **Fertilizer to Food** — Gas to ammonia to urea to crop yields to food prices, with a 6-9 month lag - the cleanest gas-to-food transmission on record. The Gulf supplies ~36% of urea and ~29% of ammonia exports (IFPRI), and Russia and China are simultaneously constrained, so no swing supplier exists. This is the longest tail in the cascade.
  - sectors: Fertilizer & Ammonia, Agriculture & Food
  - countries: India, Pakistan, Egypt, Brazil, Russia
  - flows: Fertilizer / Ammonia, LNG
  - profits: Russian fertilizer producers, CF Industries / Nutrien / Yara, Egyptian urea as swing supplier
- **The Remittance Corridor** — Gulf labor demand funds South-Asian remittances (India $129B, Pakistan $33B, Philippines $40B). A Gulf slowdown collapses the FX lifeline at exactly the moment energy-import bills spike. Pakistan is the extreme case: its energy supplier and its remittance source are the same region - a self-reinforcing external-balance squeeze.
  - sectors: Tourism & Services, Aviation & Transport
  - countries: UAE, India, Pakistan, Egypt
  - flows: Shipping Capacity
  - profits: Substitute tourism / transit hubs (Istanbul), Alternative remittance rails
- **The LNG Binary** — Qatar is 18.8% of global LNG and ~93% of it transits Hormuz - and LNG carriers have no pipeline bypass. Export is binary: zero or full. EU, Japan and Korea are price-takers (JKM +51%, TTF +35%); the US is the structural winner as its LNG captures EU and Asian share.
  - sectors: Energy Downstream, Manufacturing, Petrochemicals
  - countries: European Union, Japan, South Korea, United States, Russia
  - flows: LNG
  - profits: US LNG (Cheniere, New Fortress), Russian gas to Asia, US ethane-cracker petrochemicals
- **Trapped Spare Capacity** — The defining 2026 difference vs 1990: the Gulf own swing and spare capacity is itself Hormuz-trapped, so there is no clean producer offset. Saudi Petroline (7M b/d to Yanbu, but only ~4-4.5M loadable) and UAE Fujairah (1.8M b/d) bypass only partially. US shale is slow (+0.7-0.9M b/d over 6-9 months) and light-sweet only.
  - sectors: Energy Downstream, Construction & Materials
  - countries: Saudi Arabia, UAE, United States
  - flows: Crude Oil, Refined Products
  - profits: Cape-route VLCC owners, US shale E&P (slow), Non-Gulf crude (Brazil, West Africa)
- **The Digital Chokepoint** — Near-orthogonal to the physical commodities - the blast radius is data and finance, not energy. Gulf cable damage is mostly domestic (the Asia-Europe backbone runs via the Red Sea, ~900mi away); the binding constraint is repair fragility, with only ~1 cable-repair vessel inside the Gulf and ships unable to enter a war zone.
  - sectors: Technology & Digital, Financial Markets
  - countries: UAE, Saudi Arabia, India
  - flows: Internet Bandwidth
  - profits: Satellite (Eutelsat OneWeb), Cable suppliers (Nokia/ASN, TE SubCom), Project Waterworth (bypasses the Middle East)
- **Shipping & War-Risk** — War-risk premiums plus Cape-of-Good-Hope rerouting cut effective fleet capacity ~15-18% on Asia-Europe lanes. Egypt loses Suez revenue (already -61% in 2024); Korea wins shipbuilding orders (dominant LNG-carrier orderbook, $71.3B). The relief valve is blanked sailings and rate spikes, not new vessels (2-3yr build lead).
  - sectors: Financial Markets, Pharmaceuticals, Aviation & Transport
  - countries: Egypt, South Korea
  - flows: Shipping Capacity, Refined Products
  - profits: Korean shipbuilders, Lloyds war-risk syndicates, Cape-hub bunker suppliers & ports

**Causal edges (9):**
- **Food & fertilizer shock → Stablecoin EM corridors**  ·  Proposed  ·  conflict-share partial
  - why: The cleanest real-economy to crypto chain: food-import-cost stress on the most fragile sovereigns (Egypt, Pakistan) widens credit spreads, hits EM-importer equity, and drives synthetic-dollar/remittance demand in those exact corridors - grounding §10's proxy-only EM-demand claim.
  - indicator: (food-import bill / FX reserves) x EMBI/CDS spread, cross-checked vs on-chain USDT corridor inflow
  - activates: (food-import bill ÷ FX reserves) rising WITH EMBI/CDS widening AND on-chain USDT corridor inflow up
  - invalidated if: EM FX stabilizes / IMF backstop lands while the USDT corridor stays flat — channel not transmitting
  - residual: EM sovereign fragility predates the conflict and would persist absent it; the Gulf channel is incremental, not originating.
- **Regional power price → Mining margin & miner equity**  ·  Proposed  ·  conflict-share marginal
  - why: Mining is the one crypto channel with a direct physical-energy link (§1-7). §10 asserts a regional power spike is "directly margin-compressive" but never instruments it - this closes the energy to hashprice to public-miner-equity path into §8/§12.
  - indicator: hashprice ($/PH/s/day) / (regional $/kWh x rig efficiency J/TH); breach at the ~$0.10/kWh S21 breakeven
  - activates: a regional $/kWh spike pushes hashprice below the ~$0.10/kWh S21 breakeven
  - invalidated if: BTC price / network difficulty dominate hashprice while power is flat — power is not the driver
  - residual: Miner margins are dominated by BTC price and network difficulty; regional power is a second-order input even in a Gulf shock.
- **Cable severance → Crypto venue latency & EM fintech**  ·  Proposed  ·  conflict-share marginal
  - why: Flagged across §7/§8/§9/§10 as a structural tail with no measurable gauge. Defines the one cable to regional-CEX-latency / sequencer-concentration indicator - while preserving the §8/§9 caveat that cable cuts did NOT move broad vol (false-positive risk).
  - indicator: cable-risk score x repair-vessel availability x matching-engine/sequencer geo-concentration; proxied by oracle staleness
  - activates: ≥2 concurrent Gulf cable faults + repair-vessel unavailability AND rising regional CEX latency / oracle staleness
  - invalidated if: faults occur but broad vol and venue latency are unmoved — the documented false positive
  - residual: Most cable faults are accidental and historically did NOT move broad vol (documented false positive); conflict-attributable severance is a small slice of cable risk.
- **Crypto cascade (reflexivity) → Equity / cross-asset vol**  ·  Proposed  ·  conflict-share marginal
  - why: The report's denied return edge: §10 asserts crypto is the terminal node with no feedback. Tests whether a crypto-native liquidation (Oct-2025 type) or USDT-redemption tail propagates BACK into equity/cross-asset risk-off via COIN/MSTR and shared risk-parity books. A flagged hypothesis, not a finding.
  - indicator: (crypto liquidation / total derivatives vol) x COIN+MSTR Nasdaq weight x shared vol-control AUM; event-study lead/lag vs next-session equity vol
  - activates: an Oct-2025-scale crypto liquidation coincides with a next-session equity-vol rise via COIN/MSTR + shared vol-control AUM
  - invalidated if: a crypto liquidation with NO equity-vol follow-through — confirms the report’s terminal-node denial
  - residual: Equity vol is overwhelmingly equity-native; crypto is small vs total derivatives. This edge is a tested hypothesis the report explicitly denies - kept as a falsifiable probe, never anchored.
- **War-risk premium + freight → Delivered oil cost & $75-80 floor**  ·  Tracked  ·  conflict-share partial
  - why: AWRP (~2.5% hull peak) and VLCC rates ($117k to $423k/day) are a permanent surcharge on the delivered Gulf barrel - part of why §9's structural floor reset to $75-80. Makes the insurance layer a leading input to the oil price, not just an output of the shock.
  - indicator: delivered-barrel premium ($/bbl) = AWRP annualized/voyage + (VLCC TCE - baseline) / barrels/VLCC; correlate to Brent M1-M2 + 2027 strip
  - activates: AWRP + (VLCC TCE − baseline) annualized adds a measurable $/bbl surcharge that tracks Brent M1-M2
  - invalidated if: AWRP and freight ease while the Brent floor holds — the floor is OPEC+/underinvestment, not insurance
  - residual: The oil price and floor are mostly OPEC+ and underinvestment; the conflict's clean, well-attributed share is the delivered-cost surcharge (AWRP + freight), which IS conflict-driven.
- **Critical-minerals / REE chokepoint → Defense + transition cost (competition)**  ·  Tracked  ·  conflict-share marginal
  - why: §6 traces minerals to defense and minerals to transition separately; §7 tracks China REE controls (-74% YoY) standalone. The same chokepoint raises defense-procurement AND transition cost at once - reframing two "winners" as rivals for one constrained input.
  - indicator: REE contention index = China REE-magnet export YoY x (DFARS defense-magnet demand + EV/wind transition-magnet demand); ex-China premium (+250%) is the price tell
  - activates: China REE-magnet export YoY falls with ex-China premium rising, lifting BOTH defense procurement and transition cost
  - invalidated if: export controls ease / ex-China supply ramps — contention clears (and the driver is China, not Iran)
  - residual: This contention is largely a China-US driver, independent of the Gulf conflict; pinning it to Iran would mis-attribute it. Flagged as a foreign-key into a future china-statecraft node.
- **Desalination strike → GCC sovereign & equity repricing**  ·  Tracked  ·  conflict-share partial
  - why: §5 calls water the conflict's clearest existential tail (Qatar 99% desal, <2 days reserve) - yet §8's GCC equity scorecard prices security/expat risk (DFM -16%), not water. The highest-severity tail in the corpus is unpriced in the market layers.
  - indicator: water-at-risk premium = desal-offline (m3/day) x population-dependent x inverse reserve-days, mapped to a GCC CDS / TASI-DFM shock (DFM -16% / $120bn as calibration)
  - activates: a confirmed desal-plant strike or reserve-days <2 maps to a GCC CDS or TASI-DFM shock
  - invalidated if: Gulf fiscal cushion absorbs a strike with no credit/equity transmission — the tail stays unpriced
  - residual: Realized GCC moves are dominated by oil revenue and global risk; the water tail is currently unpriced - a conditional jump risk, not a continuous attribution.
- **Tariff escalation → Equity sector margins**  ·  Tracked  ·  conflict-share marginal
  - why: §7's tariff index (17.8%, a 90-year high) compounds the oil-cost margin hit on the exact §8 "loser" sectors (autos already -60% margins, consumer discretionary, semis) - but the two forces are siloed, understating sector downside.
  - indicator: sector tariff-exposure = imported-input share x effective tariff rate, layered onto the §8 earnings pass-through; the 1.4pp pre/post-substitution gap as the decoupling-speed gauge
  - activates: effective tariff × imported-input share compounds the oil-cost margin hit on autos / discretionary / semis
  - invalidated if: the tariff regime rolls back, OR AI-capex dominates sector margins — the conflict channel is marginal
  - residual: The 17.8% tariff regime is exogenous US policy that COMPOUNDS but is not caused by the Gulf conflict; attributing sector margin damage to the conflict would be a category error. Foreign-key into a future us-trade-policy node.
- **Nuclear-proliferation cascade → Gold & volatility regime**  ·  Tracked  ·  conflict-share partial
  - why: The broken Saudi-123 "gold standard" and Iran's unaccounted 440.9kg HEU are the corpus's highest-stakes escalation pathway - yet §6 nuclear never connects to §1 gold, §9 vol, or §10. A proliferation jump would be a massive haven/vol event with no market transmission modelled.
  - indicator: proliferation-escalation event flag (IAEA access, Saudi enrichment milestones, regional-parity triggers) to gold/GVZ/OVX jump overlay (discrete jump-risk, not a continuous series)
  - activates: an IAEA-access or Saudi-enrichment milestone triggers a gold / GVZ / OVX jump overlay
  - invalidated if: the proliferation path stalls or real rates dominate gold — no haven-vol event
  - residual: Gold's realized moves are dominated by real rates and central-bank buying; a proliferation jump is a discrete tail overlay, not the current driver.

**Scenario field matrix:**
- **Sustained closure** — beneficiaries: Energy E&P (non-Gulf), defense primes, tanker equities, USD, gold (tail), long-vol · horizon: Immediate (days-weeks) on price; structural (quarters) on supply chains & build costs · attribution: medium - a clear accelerant, but the oil/rates regime is co-determined
- **Oil-infrastructure strike** — beneficiaries: Energy infrastructure, refiners (crack), non-Gulf producers, insurers · horizon: Immediate on spot; weeks on term structure & insurance · attribution: medium - strike is conflict-driven, price path is OPEC+ co-determined
- **Subsea cable severance** — beneficiaries: Cyber/AI, satellite & telecom resilience, latency-arb venues · horizon: Immediate on connectivity; short (weeks) on fintech / settlement · attribution: low - cable cuts historically did NOT move broad vol (documented false positive)
- **Ceasefire / de-escalation** — beneficiaries: Risk assets, EM equity/credit, BTC & high-beta, short-vol, GCC real-estate · horizon: Immediate reversal; whipsaw risk over weeks (false-ceasefire) · attribution: low - relief rally is quickly re-dominated by non-conflict macro

---

### Who Profits  (`/profits`) — `profits.js`
**Intro:** Vega is the thesis: volatility is not risk, it is signal. Every disruption has identifiable winners. This is who profits as the cascade runs - by channel, with the phase it pays off in and the vehicle to express it. Phases: Disruption (acute shock), Sustained (the gap persists), Return (ceasefire / reopening), Structural (durable share shift).

**Groups (8):**
- ****
    - Russia: The clearest beneficiary, with zero Hormuz dependency. Fills oil, gas, wheat and fertilizer gaps at once; a Brent spike reverses its -23.8% oil-and-gas budget decline.
    - Saudi Aramco: The only producer net-long a closure: exports keep flowing via the 7M b/d Petroline to Yanbu (port-capped ~4-4.5M b/d) while rivals are blocked, capturing the price.
    - Brazil / Petrobras: Net crude exporter at a record 3.77M b/d; Asian demand diverts to Brazilian barrels (China = 62% of Petrobras exports, up from 33%).
    - Cape-route VLCC owners: Gulf-to-Asia voyages lengthen ~8-10 days and utilization hits multi-year highs; no new fleet for 2-3 years (build lead).
    - US shale E&P: A 6-12 month margin lever, not an instant offset (2022 added only +0.7-0.9M b/d, light-sweet only). Benefits from $100+ via price, not volume.
- ****
    - US LNG (Cheniere, New Fortress): 21.5% of global LNG, terminals at 94%. As Qatar export goes binary (no pipeline bypass), the US captures EU and Asian share and locks multi-year term contracts (2022: ~65 Mt/yr signed).
    - US ethane-cracker petrochemicals: Margins expand as polymer prices rise while ethane stays gas-linked and cheap; Gulf ethane (~12.5% of global ethylene capacity) is removed.
    - Russian gas to Asia: Power of Siberia +25% to 38.8 bcm; pricing power into Asia as ~20% of global LNG is disrupted.
- ****
    - Russian fertilizer producers: ~18-21% of the global market and the only uncontested alternative with the Gulf disrupted - giving Moscow leverage over India, Egypt and Brazil.
    - CF Industries, Nutrien, Yara, OCI: Ex-Gulf nitrogen producers into a structural urea floor of +13% to +68% (NDSU scenarios) while Russia and China are simultaneously constrained.
    - Egyptian urea: Emerging swing supplier at FOB ~$800/MT, opening new Africa-to-Asia trade flows.
- ****
    - Indian refiners (Reliance, IOC): Reroute diesel and jet from West-of-Suez to Asia/Europe (+300-500k b/d) as Gulf middle distillates are blocked.
    - US refiners (Valero, Marathon): USGC crack spreads blow out as the Gulf (60% of Europe jet) is removed - NW Europe jet crack hit $100/bbl, diesel $70.
    - Dangote (Nigeria): 650k b/d nameplate; diesel into Africa and Europe emerging as a structural new supply source.
- ****
    - Korean shipbuilders (HD Hyundai, Hanwha, Samsung Heavy): Dominant LNG-carrier orderbook ($71.3B, >66% global share). A Gulf/LNG crisis accelerates LNG-carrier and naval demand - Korea wins while its energy consumers lose.
    - Liner equity (Maersk, Hapag-Lloyd): Rate spikes on Cape rerouting + blanked sailings; Asia-Europe effective capacity cut ~15-18%.
- ****
    - Lloyd's war-risk syndicates: Marine war-risk repriced from 0.05% to ~1.0% of hull value; the Red Sea precedent stayed elevated for >12 months.
    - US dollar & Treasuries: Flight-to-safety into the dollar and Treasuries lowers US funding costs even as oil rises - the reserve-currency hedge.
- ****
    - Cable suppliers (Nokia/ASN, TE SubCom): Repair backlog plus a wave of new non-Middle-East routes; the binding constraint is a global fleet of only ~63 repair ships.
    - Project Waterworth (Meta / Google): A cable that bypasses the Middle East entirely (US-India-South Africa-Brazil), accelerated by the 2026 disruption.
    - Satellite (Eutelsat OneWeb): Backup demand on cable disruption - but LEO carries <1% of submarine-cable capacity, so the upside is bounded.
- ****
    - Defense primes + GCC localization (Lockheed, RTX, MBDA, EDGE, SAMI): GCC emergency procurement on top of a record cycle (global spend $2.718T, +9.4%); US-Saudi $142B deal, F-35 approvals; budgets are structurally sticky.
    - Cybersecurity vendors: Infosec spend $213B (2025) toward ~$240B (2026); cable/critical-infrastructure events skew it higher.
    - Brazilian agriculture: #1 soy/sugar exporter fills global food gaps as Gulf/Black Sea channels disrupt - the marginal global gap-filler.

---

### Gold & FX  (`/markets/gold-fx`) — inline cards in gold-fx.astro
**Cards (11):**
- **Gold: Safe-Haven Surge & Correction**
  - *Summary:* Gold ATH ~$5,595/oz (Jan 29) corrected –27% to ~$4,099 mid-March as Hormuz oil shock transmitted through inflation and repriced Fed to zero cuts. April close: $4,611 (+5.6% YTD). Central banks net-purchased 243.7t Q1 2026 despite prices 81% above year-ago (WGC T1).
- **Central Bank Gold: Strategic Reserve Diversification**
  - *Summary:* 243.7t net-purchased Q1 2026 (+3% YoY, +17% QoQ), fastest pace in a year despite prices 81% above year-ago. Poland led at 31t (700t target), Uzbekistan 25t (87% gold-to-reserves), China 7t (17+ consecutive months). Turkey largest seller: 70t net + 80t gold swaps. 2022 Russian reserve freeze ($300B) remains the structural catalyst.
- **Physical vs Paper Gold Divergence**
  - *Summary:* Largest North American gold ETF outflow in 5+ years ($12.7B March) alongside second-highest quarterly bar/coin demand on record (474t +42% YoY Q1). COMEX net longs at "neutral territory" (~$1B/5t April). Total demand value: record $193B (+74% YoY). Jewelry fabrication –23% YoY as record prices reduced volume.
- **Petrodollar Recycling Disruption**
  - *Summary:* Saudi cut US Treasuries by $10.8B to $149.6B and UAE by $5.8B to $114.1B in March 2026 (US Treasury TIC T1). Saudi posted highest-ever quarterly budget deficit in Q1. The petrodollar system is not collapsing — Gulf pegs intact, Saudi portfolio still +$18B YoY — but the automatic Treasury-backstop function is demonstrably impaired.
- **Yen Carry Under Pressure: ¥11.7T Intervention**
  - *Summary:* Yen fell to 160.7/USD (April 30) triggering confirmed BOJ/MoF interventions totaling ¥11.7T (~$73.5B). A 300bp US-Japan rate gap sustains carry incentives that each intervention only temporarily disrupts. Swaps price ~80% probability of BOJ hike at June 16 meeting. BIS: 25bp tightening shock → ~10% yen move when carry positions are heavy.
- **EMFX: Energy-Importer Currency Stress**
  - *Summary:* Turkey energy inflation +19pp to 47%, year-end CPI forecast raised 18%→26% (CBRT T1). Egypt EGP –10%, capital outflows >$10B. India INR at record lows, options: 18% probability of 100/USD. Indonesia IDR record lows, options: 33% probability of 18,000/USD. Sri Lanka fuel bill +74.7% to $630M/month.
- **Yuan & De-Dollarization: Structural Trend vs Narrative**
  - *Summary:* Yuan at 3-year highs (~6.77/USD). But structural de-dollarization remains limited: CNY holds ~2.5-3% of SWIFT payments, ~2.5% of global reserves (IMF COFER T1). No confirmed GCC oil-for-yuan contract. UAE OPEC exit (May 1) creates the most significant structural opening since 2018 INE launch. This is a decades-long trend, not a conflict-period event.
- **Silver, Platinum & Palladium**
  - *Summary:* Platinum heading for 4th consecutive annual supply deficit, aboveground stocks to fall to 1.747M oz (< 3 months demand) by end-2026 (WPIC T1). Gold:silver ratio near 62-65:1 in May. Silver "remains overvalued" per CNBC analysts. Palladium spot not T1-confirmed; Russia (~40% of global production) selling reserves at record pace.
- **Gold-Oil Ratio: Structural Inversion**
  - *Summary:* Gold-oil ratio compressed from pre-conflict ~50-55:1 to ~35-40:1 at crisis trough (mid-March ~$4,100 gold / ~$115 WTI), recovering to ~43-46:1 by April ($4,611 / ~$100-105 WTI). A falling gold-oil ratio during a Middle East conflict is atypical — it signals oil-shock dominance over safe-haven demand and reflects the dollar\'s structural advantage as a net-exporter currency.
- **DXY Path & Swiss Franc Safe Haven**
  - *Summary:* DXY rose from ~95.55 (Jan low) to ~99.54 (May high). Dollar +2.5% vs EUR/JPY in first week, +3% vs EUR by Mar 16. EUR CVOL spiked +30%. CHF was the ONLY G10 currency to appreciate materially against the dollar (USD/CHF 0.77-0.80 range, near 2011 highs). SNB rate at 0%, intervention rhetoric active. Swiss CPI rose to 0.6% (16-month high).
- **Gold–BTC Bridge: The Safe Haven That Did Not Hold**
  - *Summary:* Gold outperformed Bitcoin substantially YTD as BTC traded like a risk asset, not a safe haven. BTC correlation to the S&P 500 ran ~0.53 vs gold ~0.19 (BlackRock T1/T2) — through the conflict BTC moved with equities, not against them. The "digital gold" thesis did not hold under a real geopolitical shock.
  - *(field labels used across cards:* Analyst targets (T2), Asia (Bloomberg T2), Asset-manager framing (T2), Buyer-seller bifurcation, Buyers, CHF structural position, COMEX positioning, Cable severance scenario, Carry trade mechanics, Correlation evidence, Current state (T1), DXY path (CME/T2), Dollar paradox, EFP / London–NY dislocation, ETF flows (WGC T1), Egypt, Historical precedent, Intervention data (T1/T2), Mining cost impact, Narrative vs reality, Oil anchors (EIA T1/T2), Palladium, Physical demand (WGC T1), Platinum (WPIC T1), Price path, Ratio calculation, Saudi paradox, Scenario impacts, Scope note, Sellers (forced), Signal interpretation, Silver, Structural assessment, Structural driver, Swiss franc (FXStreet/SNB T1/T2), Timeline, Trading implication, Transmission chain, Treasury holdings (TIC T1), Turkey (CBRT T1), UAE OPEC exit, Unwind risk, Why gold fell (non-obvious), Winners)

---

### Outlook · Precedents  (`/outlook/precedents`) — inline
- Iranian oil infrastructure strike
- Submarine cable severance
- Negotiated ceasefire
- Full Hormuz closure
- Four events that reshaped energy markets. Each one shows how quickly prices move, how long disruptions last, and what the recovery looked like.
- Quantified capacity at each critical node — what each side can credibly threaten, and what the market impact would be if it's hit.
- Each scenario with its realized status as of May 29 2026, market cascade, counter-response, and historical parallel. Forward probability estimates have been superseded by events: Hormuz closure is realized and ongoing, oil-infrastructure and cable disruption partially realized, and the April 8 ceasefire remains in effect militarily but has not restored trade.
- Iran's mine inventory is its most cost-effective deterrent. 5,000+ mines can be deployed in hours; clearing them takes months.
- What the market did last time
- What's at risk and what it means
- Four paths forward
- The asymmetric threat

---

### Home  (`/`) — index.astro
- Sensitivity to volatility.
- Active
- Coming soon

### About  (`/about`) — about.astro
- We track the events.We map the impact.
- Why we built this
- The methodology
- About JCJ Investing
- What's coming
- VegaReady is a macro event intelligence platform that tracks how global events — conflicts, sanctions, policy shifts, supply shocks — cascade through markets and economies. Built and maintained by JCJ Investing.
- Markets don't move in isolation. A military strike in the Gulf raises oil prices, which increases shipping insurance, which disrupts supply chains, which widens credit spreads, which moves equity indices. The connections are real but rarely tracked in one place.
- We built VegaReady because we needed it ourselves. As a quantitative, event-driven trading firm, we needed a system that could ingest global events, verify the intelligence, and show us exactly how those events were transmitting through the markets we trade. No existing platform did this.
- Our AI-powered pipeline scans multiple source feeds, extracts structured data, and runs every data point through a multi-layer verification process before it reaches the dashboard. We track confidence levels per data point, cite every source, and maintain a full provenance chain.
- JCJ Investing is a quantitative, event-driven trading firm specializing in digital assets. Our algorithms react to confirmed momentum signals and defend against volatility — fast entries, faster exits.
- We publish the intelligence behind our trading decisions because we believe transparency builds trust, and good analysis improves when it's challenged by more perspectives. VegaReady is where our research meets the public.
- VegaReady is expanding beyond its origins as a conflict tracker. We're building out coverage across multiple macro verticals — geopolitical, economic, regulatory, and technological — with market briefings, a podcast, and our own proprietary technical signals feed.

### Global freshness banner (every analysis page) — `freshness.js`
- as-of: **May 29, 2026**  (NOTE: hardcoded; today is later → stale "Live" stamp)
- scenario chips: Hormuz closure=REALIZED (ongoing), Oil-infra strike=PARTIALLY REALIZED, Cable severance=REPAIR-RISK REALIZED, Ceasefire=IN EFFECT (not economic)
- anchor chips: Brent ~$92/bbl, Hormuz ~11 vessels/d, JKM / TTF ~$18 / $16.5, Urea >$850/MT, Freight ~$2,800/40ft
