# P-13 — Cross-Asset desk research v2 (build-consumption structure)
**Return as:** `_research/RETURNS/R-13-cross-asset-desk.md`  ·  **Desk:** Cross-Asset (the synthesis desk — build LAST; it references the other five)

---
PASTE INTO PERPLEXITY (deep research):

=== CONTEXT ===
I'm building a research-grade public intelligence page for the **cross-asset / multi-asset regime** — the synthesis view above equities, credit, rates, FX/gold, commodities and crypto. It renders twice — a **dense analyst page** (10-section spine §1–§10) and an **independent plain-language page** (chapters, every number given a layman "anchor"). House view: durable regime + event-catalysts; observed fact separated from interpretation. Your answer is pasted straight into the build, so **structure it EXACTLY as Sections 1–8 below.**

**Live environment (mid-June 2026 — the catalyst is REALIZED and is a clean cross-asset stress test):** the 2026 Iran war / **Hormuz closure (4 Mar 2026, OPEC −30%+)** drove a textbook **inflation/supply-shock regime**, now partly unwinding on ceasefire/peace-talk hopes. The cross-asset tape: **Brent ~$87–101 (was higher)**, **CPI/inflation re-accelerating → Fed hawkish, no 2026 cuts**, **10y 4.49% with a dis-inverted upward curve**, **broad dollar firm (~100)**, **gold record (~$4,365)**, **Bitcoin weak (~$62–72k, risk-off)**, **VIX moderate (~16–19)**. Note the tells: **the dollar AND gold are both bid** (twin havens), **BTC did NOT act as a haven**, and an **oil-driven inflation shock pressures the stock–bond hedge** (both can fall together, 2022-style). Treat this **supply-shock/inflation regime as the realized base case** and **de-escalation→disinflation→risk-on as the key upside.**

=== TASK — produce the dossier in this structure ===

**1 · SCOPE & STATE.** The synthesis desk: the master variables, correlation regimes, the vol complex, the risk-on/off axis. Where useful, name which single-asset desk owns a detail. Current one-sentence regime call + 4 headline numbers (a financial-conditions index, the stock–bond correlation, VIX, the dollar) with values + meaning.

**2 · THE ANALYST SPINE (§1–§10)** — each: read, 1–2 indicators, **free series (exact ID)**, current value, `[HARD]`/`[DIR]`.
 §1 **Regime** — the master "is money easy or tight, risk-on or off" read (Chicago Fed **NFCI**, the dollar). §2 **Structure** — risk participation/breadth across assets; which markets lead. §3 **Valuation** — the cross-asset reward map (equity ERP vs credit spread vs real yield vs gold) — relative cheapness. §4 **Fundamentals** — global growth + inflation regime (the quadrant that sets correlations). §5 **Cohorts/segments** — the six asset classes as one row each: direction & driver now. §6 **Factors** — the master factors (the dollar, real rates, liquidity, the growth/inflation mix) that move everything. §7 **Positioning/plumbing** — cross-asset leverage, the **vol complex (VIX vs MOVE vs OVX)** — which market prices the most fear; dash-for-cash dynamics. §8 **Cross-asset linkages** — the **stock–bond correlation sign** and its inflation-vs-growth driver (the 2022 flip), the dollar↔risk inverse, gold/BTC as (non-)havens. §9 **Catalyst transmission** — the **full Iran-war transmission map**: oil→inflation→rates→equity/credit discount rates→FX/funding→havens (gold/USD/USTs)→crypto, and crucially **which normal relationships BREAK** under it; active chains + escalation/de-escalation markers. §10 **Evidence** — FRED, Chicago/national Fed FCIs, public vol indices.

**3 · DATA VERDICT BOARD** — table `tile | best FREE series (exact ID) | cadence | current value | feed-state | note`. Candidates: **NFCI** (Chicago Fed financial conditions, FRED weekly), **VIXCLS** (VIX, FRED), **OVXCLS** (oil vol, FRED), DTWEXBGS (dollar), DFII10 (real 10y), BAMLH0A0HYM2 (HY OAS, for the credit read), the **stock–bond correlation** (computable from SP500 + DGS10 daily — describe the rolling window). **Flag the MOVE index (Treasury vol) — free real-time source or placeholder?** Feed-state ∈ live / latest_published / source_identified / no-free-feed.

**4 · SCENARIO MATRIX (the heart of this desk).** 4–6 macro regimes — risk-off/flight-to-quality; **inflation-shock/correlation-flip (today)**; growth-scare/recession; dollar-squeeze; **de-escalation/risk-on (upside)** — and for each give the expected **direction across ALL SIX asset classes in one row** (equities, credit, rates, FX/gold, commodities, crypto), with historical-analogue ranges/dates (1990, 2008, 2020, 2022), lead indicators, falsifiers.

**5 · WINNERS / LOSERS.** Across the whole complex per regime: what leads, lags, and breaks — grouped, mechanism each.

**6 · LAYMAN ANCHOR BANK.** e.g. "VIX <15 calm · 30 fear · 80 = 2008/2020"; "stock–bond correlation −0.4 = a working hedge · +0.5 = no hedge (2022)"; "NFCI <0 = loose financial conditions · >0 = tight"; "when everything correlates → +1, there's no hiding place."

**7 · LAYMAN KIT.** Chapter concepts — correlation & why it changes, the stock–bond hedge & its failure, the vol complex (VIX/MOVE/OVX), risk-on/risk-off, financial conditions, dash-for-cash, the dollar as the master variable, the twin-haven (gold+USD) tell — each: analogy + worked numeric example + top-3 misconceptions.

**8 · COUNCIL & HONEST GAPS.** Disagreements (will the stock–bond correlation stay positive? is the dollar's haven role eroding? can anything diversify in a true panic?), the camps; plus the no-free-feed list (esp. MOVE).

**Cross-asset-specific edges:** (a) correlation-regime detection — rolling vs DCC/EWMA, what's computable free, how to date a regime change; (b) the stock–bond correlation sign & its inflation-vs-growth driver, the 2022 flip in detail; (c) reading VIX vs MOVE vs OVX *relative* to each other; (d) the dollar as the upstream master transmission variable; (e) dash-for-cash / correlation→1 mechanics and the few things that still diversify; (f) free financial-conditions indices (NFCI etc.) as the master dial.

=== RULES ===
`[HARD]`/`[DIR]` tags; source + confidence each; **prefer free attribution-only** (FRED, Fed FCIs, public vol indices); **flag every no-free-feed metric** (esp. MOVE); present disagreement as a council; sober register. Note: this desk is built **after** the other five — point to which single-asset desk owns a given detail where relevant.
