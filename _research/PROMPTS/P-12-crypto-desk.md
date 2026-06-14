# P-12 — Crypto desk research v2 (build-consumption structure)
**Return as:** `_research/RETURNS/R-12-crypto-desk.md`  ·  **Desk:** Crypto (Bitcoin, Ethereum, stablecoins)

---
PASTE INTO PERPLEXITY (deep research):

=== CONTEXT ===
I'm building a research-grade public intelligence page for the **crypto-asset market — Bitcoin, Ethereum, and stablecoins**. It renders twice — a **dense analyst page** (10-section spine §1–§10) and an **independent plain-language page** (chapters, every number given a layman "anchor"). House view: durable regime + event-catalysts; observed fact separated from interpretation; **sober register — crypto is hype-prone, keep the analyst voice neutral.** Your answer is pasted straight into the build, so **structure it EXACTLY as Sections 1–8 below.**

**Live environment (mid-June 2026 — catalyst is REALIZED, and it just ran a natural experiment on crypto's identity):** the 2026 Iran war / Hormuz closure has soured risk appetite. **Bitcoin is weak — ~$62–72k, having broken below $62k support, with ~$1.5bn of leveraged-long liquidations and ~$2.97bn of spot-ETF outflows**, while **gold simultaneously hit a record ~$4,365**. In other words, during this geopolitical shock **BTC traded as a RISK ASSET, not "digital gold"** — the haven bid went to gold and the dollar, not crypto. The dossier must **test the "digital gold" claim against this realized behavior**, not assume it. Treat **risk-off-crypto as the base case**, and **de-escalation/risk-on rebound as the upside scenario**; flag a **stablecoin de-peg as the genuine left-tail.**

=== TASK — produce the dossier in this structure ===

**1 · SCOPE & STATE.** Covers BTC, ETH, the major stablecoins (USDT/USDC), spot-ETF flows, on-chain & leverage plumbing. Current one-sentence regime call + 4 headline numbers (BTC price, BTC dominance, aggregate stablecoin supply, the BTC↔equity vs BTC↔gold correlation) with values + meaning.

**2 · THE ANALYST SPINE (§1–§10)** — each: read, 1–2 indicators, **free source (exact API/explorer)**, current value, `[HARD]`/`[DIR]`.
 §1 **Regime** — BTC level/trend + the risk-on/off read (price, dominance). §2 **Structure** — breadth beneath BTC: alts vs BTC, ETH/BTC, dispersion. §3 **Valuation** — on-chain valuation (MVRV, realized cap, NUPL) — what's free and how to read it. §4 **Fundamentals** — the issuance/halving cycle, network activity, ETF demand vs new supply. §5 **Cohorts/segments** — BTC vs ETH vs alts vs stablecoins; miners, exchanges, issuers. §6 **Factors** — the risk-asset-vs-digital-gold duality, **correlation regime** (BTC↔Nasdaq vs BTC↔gold), liquidity/financial-conditions beta, momentum. §7 **Positioning/plumbing** — **leverage** (perp funding rates, open interest, liquidation cascades), exchange reserves, **stablecoin supply as a real-time dollar-liquidity gauge** + peg integrity & reserve backing. §8 **Cross-asset** — crypto ↔ equities (esp. Nasdaq), gold, the dollar, real rates/liquidity. §9 **Catalyst transmission** — the Iran war → crypto: the risk-off drawdown chain vs the (largely failed, this episode) capital-flight/haven chain; regional stablecoin demand; what past geopolitical shocks did to BTC (cite episodes/dates); escalation/de-escalation markers. §10 **Evidence** — on-chain explorers, exchange APIs, ETF issuer disclosures, FRED (macro).

**3 · DATA VERDICT BOARD** — table `tile | best FREE source (exact API/explorer) | cadence | current value | feed-state | note`. Candidates: BTC/ETH price & dominance (CoinGecko / CoinMarketCap free API), aggregate **stablecoin supply** (DefiLlama / on-chain — free), **spot-ETF net flows** (issuer pages / Farside-style aggregators — confirm a free source), **perp funding rates & open interest** (exchange public APIs), exchange reserves & on-chain valuation (free explorers — name them), the BTC-Nasdaq & BTC-gold rolling correlations (computable from free price data). Feed-state ∈ live / latest_published / source_identified / no-free-feed. **Flag anything that needs a paid analytics vendor.**

**4 · SCENARIO MATRIX.** 4–6 incl. **de-escalation/risk-on rebound (upside)**, continued risk-off bleed, and a **stablecoin de-peg / leverage-cascade left-tail.** Each: triggers, expected BTC/ETH moves with historical-analogue ranges/dates (2020 COVID crash, 2022 LUNA/FTX, prior geopolitical shocks), lead indicators, falsifiers.

**5 · WINNERS / LOSERS.** BTC vs alts, ETH, miners, exchanges, stablecoin issuers, leveraged longs — grouped, mechanism each.

**6 · LAYMAN ANCHOR BANK.** e.g. "perp funding >~0.1%/8h = frothy leverage"; "a stablecoin off its $1.00 peg by >1% = real stress"; "BTC-Nasdaq correlation ~+0.6 = trading like a tech stock, BTC-gold ~+0.5 = trading like a haven"; "BTC $62k today vs the cycle high and the 2022 low."

**7 · LAYMAN KIT.** Chapter concepts — risk-asset vs digital-gold (and what this war revealed), stablecoins & their dollar backing, ETF flows, funding rates & leverage/liquidations, the halving/supply cycle, on-chain valuation, correlation regimes — each: analogy + worked numeric example + top-3 misconceptions.

**8 · COUNCIL & HONEST GAPS.** Disagreements (is BTC *ever* a haven, or always a risk asset? are stablecoins systemic? does on-chain valuation work?), the camps; plus the no-free-feed list (esp. anything requiring Glassnode/Nansen-type paid vendors).

**Crypto-specific edges:** (a) stablecoin plumbing — supply, peg stress, T-bill/reserve backing, transparency-report data, why supply = a dollar-liquidity gauge; (b) free spot-ETF flow sources and how flows lead price; (c) funding rates & liquidation cascades; (d) the BTC-Nasdaq vs BTC-gold correlation flip and what drives the regime; (e) exchange reserves as a supply signal; (f) which valuation/on-chain metrics are genuinely free vs paywalled.

=== RULES ===
`[HARD]`/`[DIR]` tags; source + confidence each; **prefer free attribution-only** (on-chain explorers, exchange APIs, issuer disclosures, FRED); **flag every no-free-feed/paywalled metric**; present disagreement (esp. the digital-gold claim) as a council; keep the register sober — no moon-talk.
