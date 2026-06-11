# VegaReady Signal Catalog — Top 3 Tradable / Monitorable Signals per Section

**Platform:** VegaReady Event-Intelligence | **Client:** JCJ Investing | Dubai (UTC+4)
**Scope:** Phase 2 Sections 1–10. 30 signals (3 per section), each specified for direct ingestion into the Option-B watch registry and the scenario lens.
**Window discipline:** W0 baseline (Jan 1–Feb 27 2026) · W1 acute (Feb 28–Mar 31) · W2 normalization (Apr 1–May 30). All conflict-period values `[PROVISIONAL-2026]`.

**Type definitions.** **Predictive** = leads the price/headline (act before). **Confirming** = validates a regime already in motion (size with conviction). **Coincident** = moves with the event (nowcast, not edge). **Threshold direction:** `above` trips on a rise, `below` on a fall.

**Cross-cutting truth (§9/§10):** the single highest-value, lowest-latency upstream trigger is **OVX + DXY + 10Y** — every downstream financial signal (equities, cross-asset, crypto) re-prices *after* these move.

---

## §1 — Gold & FX  (/markets/gold-fx)

### 1.1 Gold ETF flow divergence (Western paper out vs CB physical in)
- **Input:** N. American gold-ETF net flow (WGC monthly); central-bank net purchases (WGC quarterly; Q1 = +243.7t).
- **Frequency:** monthly (ETF) / quarterly (CB).
- **Thresholds:** watch −$5bn/mo · alert −$10bn · critical −$15bn (the −$12.7bn March redemption = largest in ≥5yr, alert→critical).
- **Lead/lag:** leading — paper/spec de-grossing precedes paper-gold price weakness.
- **Assets:** gold (paper-vs-physical premium), GLD/IAU, GDX miners.
- **False positives:** a monetary (real-rate-override) drop is NOT a loss of structural bid — CB buying offsets; do not read ETF outflow as gold-bearish in isolation.
- **Scenario:** oil_strike / hormuz_closure (haven test); ceasefire (unwind).
- **Type:** Predictive.

### 1.2 DXY surge + dollar–VIX positive regime
- **Input:** DXY (ICE); dollar–VIX rolling correlation sign (FRED/CBOE).
- **Frequency:** daily.
- **Thresholds:** watch DXY +1.5% / 30d · alert +3% · critical >102 with positive dollar–VIX (2026 peak 100.53, +3.12%).
- **Lead/lag:** coincident — the dollar IS the haven; captures the bid in real time.
- **Assets:** EM FX (short), EM equity/credit, gold (headwind), BTC (inverse), exporters' equities.
- **False positives:** FX-strategist consensus called the 2026 surge temporary — mean-reverting, not structural; don't extrapolate the trend.
- **Scenario:** hormuz_closure / oil_strike.
- **Type:** Coincident.

### 1.3 Yen-carry / BOJ intervention stress
- **Input:** USD/JPY; BOJ/MoF intervention size (¥11.7tn in 2026); MoF disclosures.
- **Frequency:** daily / event.
- **Thresholds:** watch USD/JPY >155 · alert >160 · critical confirmed intervention.
- **Lead/lag:** leading on global risk-off (carry unwind is a liquidity-shock amplifier).
- **Assets:** JPY, Nikkei, global risk assets (carry-funded longs), UST.
- **False positives:** verbal intervention ≠ actual; size the trade off confirmed flows only.
- **Scenario:** hormuz_closure (risk-off) / ceasefire (carry re-on).
- **Type:** Confirming.

---

## §2 — Sovereign Credit & Plumbing  (/markets/credit)

### 2.1 EM sovereign spread (EMBI / CDS) vs pre-war
- **Input:** JPM EMBI Global Diversified; per-name CDS (Egypt, Pakistan, Iraq).
- **Frequency:** weekly (daily for stressed names).
- **Thresholds:** watch +25bps · alert +50bps · critical +100bps (2026 EMBI +35 = watch; CDX.EM 5Y +69 Q1).
- **Lead/lag:** leading — credit re-prices fiscal/FX stress before EM equity capitulates.
- **Assets:** EM sovereign debt (short), EM FX, EM-importer equity (§8), food-import sovereigns (Egypt/Pakistan).
- **False positives:** spread widening from global-rate moves (beta) vs idiosyncratic conflict stress — decompose vs UST.
- **Scenario:** hormuz_closure / oil_strike.
- **Type:** Predictive.

### 2.2 Flight-to-quality flows (cash + short-duration Treasuries)
- **Input:** MMF inflows (ICI); short-duration govt-bond fund flows (EPFR via BofA).
- **Frequency:** weekly.
- **Thresholds:** watch +$30bn cash/wk · alert +$50bn · critical +$70bn (2026 = $70.7bn single week; $29bn short-UST March).
- **Lead/lag:** coincident — the de-risking flow itself.
- **Assets:** UST front-end, MMF, USD; inverse to risk assets and crypto (§10).
- **False positives:** EPFR/BofA micro-figures are press-derived (MEDIUM); confirm direction, distrust the decimal.
- **Scenario:** hormuz_closure / oil_strike.
- **Type:** Coincident.

### 2.3 Gulf petrodollar recycling (Saudi+UAE UST/TIC holdings)
- **Input:** US Treasury TIC data; Saudi/UAE FX reserves; SWF allocation reports.
- **Frequency:** monthly (TIC lag ~2mo).
- **Thresholds:** watch −$10bn/mo Gulf UST · alert −$16.6bn (2026 print) · critical sustained 3-mo drawdown.
- **Lead/lag:** lagging/structural — confirms a petrodollar-recycling regime shift.
- **Assets:** UST (long-end supply), USD, Gulf SWF equity allocation (PIF cut 30%→20%, PROVISIONAL).
- **False positives:** TIC custody attribution is noisy (custodial centers mask beneficial owner); PIF cut is unconfirmed.
- **Scenario:** hormuz_closure / ceasefire.
- **Type:** Confirming.

---

## §3 — Insurance & Shipping  (/markets/insurance)

### 3.1 Additional War-Risk Premium (AWRP, % hull, Gulf)
- **Input:** Lloyd's / Joint War Committee listed-areas + market AWRP quotes (S&P Global Platts).
- **Frequency:** weekly / event.
- **Thresholds:** watch >0.5% hull/7d · alert >2% · critical >5% (2026 peak 2.5%, now ~1%).
- **Lead/lag:** leading — insurers price Hormuz risk ahead of physical disruption and the oil premium.
- **Assets:** Brent (delivered-cost input, §9 floor), tanker equities (FRO/NAT/DHT), marine reinsurers, Gulf exporters.
- **False positives:** premium quotes are proprietary/venue-varying; a single broker print isn't the market.
- **Scenario:** hormuz_closure / oil_strike.
- **Type:** Predictive.

### 3.2 VLCC freight rate (AG–East TCE, $/day)
- **Input:** Baltic Exchange TD3C TCE.
- **Frequency:** daily.
- **Thresholds:** watch >$100k/day · alert >$250k · critical >$400k (2026: $117k→$423k; record fixture ~$770k).
- **Lead/lag:** coincident — the highest-realized-vol instrument of the conflict; a pure Hormuz-state nowcast.
- **Assets:** tanker equities, crude term structure, refiners (freight crack), oil-importer cost base.
- **False positives:** decoupled from equity beta (idiosyncratic); useless as a broad-market signal — Hormuz nowcast only.
- **Scenario:** hormuz_closure.
- **Type:** Coincident.

### 3.3 P&I war-risk cover withdrawal (binary)
- **Input:** IG P&I club / war-risk underwriter cover-withdrawal notices (American Club, Gard, Skuld, Standard, London P&I).
- **Frequency:** event.
- **Thresholds:** watch 1 major club restricts · alert 2–3 · critical Gulf-wide withdrawal (2026: occurred early March).
- **Lead/lag:** leading/confirming — cover withdrawal precedes effective fleet-capacity loss and freight spikes.
- **Assets:** shipping capacity, food/energy delivery (§5), freight-exposed CPI.
- **False positives:** restriction ≠ total withdrawal; scope (specific flag/route) matters.
- **Scenario:** hormuz_closure / cable_severance (Red Sea).
- **Type:** Confirming.

---

## §4 — Property, Materials & Labor  (/markets/property, /markets/labor)

### 4.1 LME aluminium (and metals supply shock)
- **Input:** LME 3-month aluminium; Alba/Gulf smelter power status.
- **Frequency:** daily.
- **Thresholds:** watch >$3,000/t · alert >$3,500 · critical >$4,000 (2026 = $3,546).
- **Lead/lag:** coincident — Gulf smelters are power-and-Hormuz-exposed; metals re-price the energy shock fast.
- **Assets:** aluminium, construction-materials equities, autos/manufacturing input cost (§8), GCC megaprojects.
- **False positives:** LME moves on global demand/China stimulus too — isolate the Gulf-supply component.
- **Scenario:** hormuz_closure / oil_strike.
- **Type:** Coincident.

### 4.2 GCC construction-cost inflation
- **Input:** regional construction PMI / cost indices; megaproject capex disclosures (NEOM).
- **Frequency:** quarterly.
- **Thresholds:** watch >5% YoY · alert >10% · critical >15% (2026 = 12.6%).
- **Lead/lag:** confirming/lagging — the materials+energy shock shows up in build costs with a lag.
- **Assets:** GCC construction/real-estate equities, megaproject timelines, property REITs.
- **False positives:** structural (labor/land) inflation vs conflict-driven energy/materials inflation — separate.
- **Scenario:** hormuz_closure / ceasefire (relief).
- **Type:** Confirming.

### 4.3 Migrant remittance YoY (Gulf → South Asia)
- **Input:** Bangko Sentral ng Pilipinas, RBI, SBP remittance series.
- **Frequency:** monthly.
- **Thresholds:** watch −3% YoY · alert −7% · critical −12% (2026 PH = −7.7%).
- **Lead/lag:** lagging/structural — a Gulf labor slowdown shows up in remittances over months.
- **Assets:** PKR/INR/PHP FX, EM external balances (compounds §2 credit), consumer staples in recipient EMs.
- **False positives:** seasonality (Eid/holiday flows) and FX-conversion effects mask the underlying labor signal.
- **Scenario:** hormuz_closure / oil_strike.
- **Type:** Confirming.

---

## §5 — Food & Water  (/markets/food-agriculture, /markets/water)

### 5.1 Urea price (global benchmark, $/t)
- **Input:** World Bank / NOLA / Middle East urea benchmarks.
- **Frequency:** weekly/monthly.
- **Thresholds:** watch >$600/t · alert >$800 · critical >$1,000 (2026 +80% to >$850 = alert).
- **Lead/lag:** **leading with a 6–12 month fuse** — fertilizer cost today suppresses next-season yields; the most tradeable lag in the corpus.
- **Assets:** fertilizer producers (CF/Nutrien/Yara/OCP), grains (wheat/corn), food-importer sovereigns, ag-equities.
- **False positives:** N-hemisphere farmers pre-bought fertilizer, muting the immediate price-to-food pass-through; the hit is forward, not spot.
- **Scenario:** hormuz_closure / oil_strike.
- **Type:** Predictive.

### 5.2 FAO Food Price Index
- **Input:** FAO FFPI (monthly).
- **Frequency:** monthly.
- **Thresholds:** watch >120 · alert >130 · critical >150 (2026 = 130.7, three straight monthly rises = alert).
- **Lead/lag:** coincident/confirming — the realized global food-price gauge.
- **Assets:** soft commodities, food-importer fiscal/FX (Egypt/Pakistan), WFP-exposed humanitarian.
- **False positives:** ample grain stocks muted the 2026 response vs 2022 (+5% vs +15%); index level alone understates the forward yield risk.
- **Scenario:** hormuz_closure / oil_strike.
- **Type:** Coincident.

### 5.3 GCC stored-water reserve (days) — the existential tail
- **Input:** GCC desal capacity-offline (m³/day); reserve-day estimates; plant-strike events (FANR/utility).
- **Frequency:** annual structural / event.
- **Thresholds:** watch <7 days · alert <3 · critical <2 or confirmed plant strike (Qatar 99% desal-reliant, <2-day reserve).
- **Lead/lag:** leading on a catastrophic-tail repricing (binary jump risk).
- **Assets:** GCC sovereign CDS, TASI/DFM/ADX, water-tech EPCs; the highest-severity unpriced tail (see causal map).
- **False positives:** deep Gulf fiscal cushions may absorb a strike without market transmission — it's a jump risk, not a continuous gauge.
- **Scenario:** hormuz_closure / oil_strike.
- **Type:** Predictive.

---

## §6 — Energy Transition, Defense & Nuclear  (/markets/energy, /markets/defense, /outlook/nuclear)

### 6.1 China REE-magnet export YoY (the contention chokepoint)
- **Input:** China customs REE/magnet export volumes; ex-China NdFeB/SmCo premium.
- **Frequency:** monthly.
- **Thresholds:** watch −20% · alert −50% · critical −74% (2026 = −74%, at critical; ex-China premium +250% H2-2025).
- **Lead/lag:** leading — a magnet-export cut simultaneously lifts defense-procurement AND transition cost (the competition loop).
- **Assets:** defense primes (input cost), EV/grid/magnet (transition cost), ex-China REE miners (MP/Lynas/Arafura), DFARS-exposed.
- **False positives:** export-license noise vs a genuine supply cut; China dependence pre-existed the conflict (structural, not conflict-caused).
- **Scenario:** hormuz_closure.
- **Type:** Predictive.

### 6.2 GCC+Israel interceptor-stock drawdown (Patriot/THAAD)
- **Input:** CSIS-class inventory audits; Pentagon/manufacturer framework-contract prints.
- **Frequency:** event / monthly.
- **Thresholds:** watch >30% depleted · alert >60% · critical >85% (2026 GCC+Israel Patriot ~86%).
- **Lead/lag:** confirming — a drawdown validates the multi-year, ceasefire-insensitive procurement supercycle.
- **Assets:** defense primes (LMT/RTX/MBDA/Diehl/Rheinmetall), replenishment-backlog durability, magnet/REE inputs (→6.1).
- **False positives:** drawdown % figures are T2 (Defence Ukraine); European defense equities already cooled on valuation — demand ≠ price.
- **Scenario:** hormuz_closure / ceasefire (backlog persists).
- **Type:** Confirming.

### 6.3 Iran 60%-HEU stockpile / IAEA access status
- **Input:** IAEA verification status; FDD/PGS assessments; Saudi-123 enrichment milestones.
- **Frequency:** event.
- **Thresholds:** watch >200 kg · alert >400 kg · critical >440 kg or IAEA access terminated (2026: 440.9 kg, access terminated Feb = critical).
- **Lead/lag:** leading on a proliferation-cascade jump (the corpus's highest-stakes escalation).
- **Assets:** gold/GVZ-OVX vol (→ causal map), regional risk premium, energy-security hedges, broad risk-off.
- **False positives:** assessments are made during active conflict (PROVISIONAL); stockpile location disputed — distinguish a genuine milestone from headline noise.
- **Scenario:** ceasefire (deal-vs-impasse) / escalation.
- **Type:** Predictive.

---

## §7 — Structural Tracking  (/structural)

### 7.1 Strait of Hormuz oil transit (mb/d) — the master gauge
- **Input:** EIA / tanker-tracking (Kpler/Vortexa) Hormuz throughput.
- **Frequency:** daily/event.
- **Thresholds:** watch <18 mb/d · alert <12 · critical <6 (≈closure) (baseline ~20).
- **Lead/lag:** leading→coincident — the single upstream physical gauge the entire corpus hangs on.
- **Assets:** Brent, GCC equities/credit, LNG, fertilizer, EM importers, crypto (via §9) — i.e. everything.
- **False positives:** throughput dips for weather/maintenance/seasonality ≠ conflict closure; pair with the transit count and AWRP.
- **Scenario:** hormuz_closure (primary) / oil_strike.
- **Type:** Predictive.

### 7.2 US average effective tariff rate
- **Input:** Yale Budget Lab / USITC effective-tariff series; pre-vs-post-substitution gap.
- **Frequency:** quarterly.
- **Thresholds:** watch >10% · alert >15% · critical >17.8% (2026 = 17.8%, 90-year high, at critical).
- **Lead/lag:** confirming/structural — re-prices import-heavy equity-sector margins (§8) and the de-globalization regime.
- **Assets:** autos/consumer-discretionary/semis equities (§8), CBAM-exposed importers, connector economies (Mexico/Vietnam).
- **False positives:** announced vs effective rate (exemptions/substitution); the 1.4pp pre/post gap is the real decoupling-speed gauge.
- **Scenario:** hormuz_closure (compounds oil-cost) / structural.
- **Type:** Confirming.

### 7.3 Red Sea concurrent cable faults (count)
- **Input:** TeleGeography/ICPC/Starboard fault feeds; repair-vessel ETA.
- **Frequency:** daily/event.
- **Thresholds:** watch ≥2 concurrent · alert ≥3 · critical ≥4 (Sep-2025 Jeddah type).
- **Lead/lag:** leading on the cable_severance scenario (binary event).
- **Assets:** regional connectivity, satellite/telecom-resilience, EM fintech, crypto venue latency (→ causal map) — but NOT broad vol.
- **False positives:** **the documented false positive** — cable cuts historically did NOT move VIX/MOVE; do not size a broad-vol hedge to this channel.
- **Scenario:** cable_severance.
- **Type:** Predictive (for the channel) / false-positive for broad markets.

---

## §8 — Global Equities & Sector Rotation  (/markets/equities)

### 8.1 Factor rotation / EM crowding unwind (4-sigma)
- **Input:** MSCI FactorLab (min-vol, quality, momentum, EM crowding); regional factor returns.
- **Frequency:** weekly (daily in stress).
- **Thresholds:** watch min-vol/quality outperform + momentum lag · alert EM crowding −1% (a 4-sigma move) · critical sustained momentum unwind.
- **Lead/lag:** leading — the de-grossing that lifts cross-asset correlations (the §9 micro-engine) and precedes crypto beta stress (§10).
- **Assets:** factor ETFs, EM tech/AI momentum (short), min-vol/quality (long), high-beta/small-cap (short), BTC/ETH (downstream).
- **False positives:** factor crowding scores are model-derived; a one-week unwind can reverse — confirm with breadth.
- **Scenario:** hormuz_closure / oil_strike.
- **Type:** Predictive.

### 8.2 Index-vs-stock dispersion (AI-insulation mask)
- **Input:** % of S&P components above 50-DMA vs index distance above 50-DMA; Mag-7 contribution.
- **Frequency:** daily.
- **Thresholds:** watch index >5% above 50-DMA with <60% components above · alert >7%/<55% (2026 print) · critical narrowing breadth into a new high.
- **Lead/lag:** leading/coincident — extreme divergence (AI masking broad weakness) is a correction-risk regime warning.
- **Assets:** S&P/Nasdaq (fragility), equal-weight vs cap-weight, broad risk (incl. crypto via beta).
- **False positives:** narrow leadership can persist for quarters (AI-capex durability) — it's a fragility flag, not a timing trigger.
- **Scenario:** ceasefire (melt-up fragility) / hormuz_closure (breaks first).
- **Type:** Confirming.

### 8.3 GCC equity asymmetry (TASI–DFM spread)
- **Input:** TASI vs DFM/ADX/Qatar Exchange relative return; Aramco weight; bypass-pipeline status.
- **Frequency:** daily.
- **Thresholds:** watch TASI−DFM spread >10pts · alert >20pts · critical >30pts (2026: TASI +5% vs DFM −16% ≈ 21-pt gap).
- **Lead/lag:** confirming — the spread cleanly separates oil-revenue tailwind (Saudi) from security/expat risk (UAE).
- **Assets:** TASI energy (long) vs DFM real-estate/banks (short); GCC sovereign CDS; Qatar LNG-revenue.
- **False positives:** domestic-investor floors (Saudi base; UAE AED 2.2bn buying) distort short-term; the spread is the signal, not either leg alone.
- **Scenario:** hormuz_closure / ceasefire (reverses).
- **Type:** Confirming.

---

## §9 — Cross-Asset Correlation & Volatility  (/markets/cross-asset)

### 9.1 OVX (crude implied vol) — the cleanest conflict gauge
- **Input:** CBOE OVX (FRED OVXCLS).
- **Frequency:** daily.
- **Thresholds:** watch >40 · alert >60 · critical >100 (2026: 28→120.91 peak; ~58 by May, ~2× baseline).
- **Lead/lag:** **leading** — OVX peaked Mar 11, ahead of the Brent spot peak; the shock lived in the commodity complex.
- **Assets:** Brent, energy equity, BTC (re-prices after OVX), broad risk via the §9 regime.
- **False positives:** none material — lowest-noise gauge; the trap is the opposite (treating VIX normalization as the all-clear while OVX stays elevated).
- **Scenario:** hormuz_closure / oil_strike.
- **Type:** Predictive.

### 9.2 Stock–bond correlation sign
- **Input:** rolling SPX–UST(price) correlation; 10Y yield vs S&P co-movement.
- **Frequency:** weekly.
- **Thresholds:** watch correlation turns positive · alert sustained positive (both fall on inflation) · critical >0.5 (the 2022 regime).
- **Lead/lag:** leading regime indicator — the flip to positive (diversification failed) historically preceded the 2007/2015/2022 equity peaks.
- **Assets:** 60/40 books (diversification failure), long-duration UST, equity beta, BTC (high-beta/long-duration headwind).
- **False positives:** correlation is window-dependent and unstable; confirm with the inflation-surprise driver, not the coefficient alone.
- **Scenario:** oil_strike / hormuz_closure.
- **Type:** Predictive.

### 9.3 VXEEM (EM-equity vol) — the durable stress gauge
- **Input:** CBOE VXEEM (FRED VXEEMCLS).
- **Frequency:** daily.
- **Thresholds:** watch >25 · alert >35 · critical sustained ~2× baseline (2026: 17.16→40.84 peak, stuck 35.30 = ~2×).
- **Lead/lag:** coincident-to-lagging but **durable/low-noise** — EM stress persisted while VIX normalized; the real risk thermometer.
- **Assets:** EM equity/FX/credit, EM-importer sovereigns, BTC (global risk-thermometer peer).
- **False positives:** less timely than OVX; not a fast trigger — use as the durable-regime confirm, not the entry.
- **Scenario:** hormuz_closure / oil_strike.
- **Type:** Confirming.

---

## §10 — Crypto & Digital Assets  (/markets/crypto)

### 10.1 Deribit 25-delta put–call skew
- **Input:** Deribit 7-day 25Δ skew (BTC/ETH); ATM IV.
- **Frequency:** intraday.
- **Thresholds:** watch skew −3% · alert −5% · critical −7% with ATM IV near lows (2026: −5%/−7%, IV 35%/43%).
- **Lead/lag:** **leading** — skew turned negative before ATM IV moved; the earliest crypto-native fear tell.
- **Assets:** BTC/ETH options, perp positioning, crypto-equity (COIN/MSTR).
- **False positives:** deeply negative skew with LOW ATM IV = controlled hedging, not panic — don't read it as imminent crash.
- **Scenario:** hormuz_closure / oil_strike.
- **Type:** Predictive.

### 10.2 Perp funding + open interest regime
- **Input:** perpetual funding rate + futures OI (Kaiko/CoinGlass/CCData — T2).
- **Frequency:** hourly.
- **Thresholds:** watch funding negative w/ OI flat · alert negative funding + OI compressing · critical OI −20% w/ negative funding through a rally (2026: $61→$49bn, negative funding despite +14%).
- **Lead/lag:** coincident-to-leading — negative funding + OI compression PRECEDED the worst headlines (genuine risk-off, not rotation).
- **Assets:** BTC/ETH perps/futures, basis trades (CME), leveraged longs.
- **False positives:** CEX liquidation/OI data is self-reported and a LOWER BOUND; don't trade off single-venue prints.
- **Scenario:** hormuz_closure / oil_strike.
- **Type:** Confirming.

### 10.3 Spot BTC ETF flow streak
- **Input:** SoSoValue / Farside / issuer daily ETF creations-redemptions (IBIT/FBTC/GBTC).
- **Frequency:** daily.
- **Thresholds:** watch −$300m/day · alert −$500m/day or 3+ day streak · critical >$700m single day (2026: −$733.4M May 27, IBIT −$527.8M; 8-session −$2.6bn).
- **Lead/lag:** coincident — the crypto endpoint of the §9 "rotation into cash/short-UST, out of risk"; confirms de-risking.
- **Assets:** BTC, COIN/MSTR (§8 bridge), crypto beta broadly.
- **False positives:** flow micro-figures are press-derived (SoSoValue T2); single-day prints are noisy — trade the multi-day streak.
- **Scenario:** hormuz_closure / ceasefire (inflows resume).
- **Type:** Coincident.

---

## Integration notes
- **Watch registry:** every `above/below`-threshold numeric signal here extends `watch-metrics.json` (Option-B) with the same comparator; the regime/event signals (P&I withdrawal, cable faults, HEU/IAEA, water strike) use `type: boolean|regime`.
- **Scenario lens:** the `Best scenario mapping` field is the lens key; the predictive signals are the lens's leading edge, the confirming/coincident ones its validation layer.
- **The cascade:** read top-to-bottom as the transmission chain — §7 Hormuz transit and §9 OVX/DXY/10Y are the upstream leads; §8 equities, §10 crypto skew/funding/ETF are the downstream confirms. Crypto re-prices LAST.

*lastUpdated: 2026-05-31 · platform: VegaReady | JCJ Investing*
