# P-09 — Rates desk research v2 (build-consumption structure)
**Return as:** `_research/RETURNS/R-09-rates-desk.md`  ·  **Desk:** Rates (US interest rates & government bonds — the risk-free curve)

---
PASTE INTO PERPLEXITY (deep research):

=== CONTEXT ===
I'm building a research-grade public intelligence page for the **US interest-rate & government-bond market (the risk-free curve)**. It renders twice — a **dense analyst page** (a 10-section spine §1–§10) and an **independent plain-language page** (chapters, every number given a layman "anchor"/reference scale). The house view reads markets as a durable regime with event-catalysts overlaid, and separates observed fact from interpretation. Your answer is pasted straight into the build, so **structure it EXACTLY as Sections 1–8 below.**

**Live environment (mid-June 2026 — catalyst is REALIZED):** the 2026 Iran war closed the **Strait of Hormuz** since 4 Mar 2026 (OPEC output −30%+); a **fragile ceasefire + US–Iran peace talks** just pulled **Brent ~$101→$87**. Rates snapshot: **10y UST 4.49%**, **2y 4.09%**, **3m 3.71%**, curve **upward-sloping/dis-inverted** (10y−3m **+77bp**, 10y−2y **+40bp**); **Fed hawkish — no 2026 cuts priced, hike odds rising** on oil-driven inflation; broad dollar firm (~100); gold record (~$4,365). For Rates the catalyst is a **two-sided force**: oil→inflation→*higher* front-end/hawkish Fed, vs safe-haven/growth-fear→*lower* long-end. Treat the oil-inflation shock as the realized base case and **de-escalation (oil down → disinflation → cuts back on the table) as the key upside scenario.**

=== TASK — produce the dossier in this structure ===

**1 · SCOPE & STATE.** What this desk covers (UST curve, real/nominal, breakevens, term premium, funding) and what it doesn't (corporate credit = Credit desk; FX rate-differentials = FX desk). The current one-sentence regime call + the 4 headline numbers (10y, 2s10s, real 10y, a Fed-path measure) with current values + 1-line meaning each.

**2 · THE ANALYST SPINE (§1–§10)** — for each: the read, 1–2 best indicators, **free series (exact FRED ID)**, current value, `[HARD]`/`[DIR]`.
 §1 **Regime** — the level & direction of the 10y and the policy stance (DGS10, the Fed path). §2 **Structure** — the curve's *shape* and what the dis-inversion is saying (T10Y2Y, T10Y3M; the bull/bear steepen/flatten quadrant). §3 **Valuation** — real yields & the term premium: are you paid to own duration? (DFII10, the ACM 10y term premium ACMTP10). §4 **Fundamentals / cycle** — inflation & growth expectations (T10YIE, T5YIFR 5y5y-fwd, the Fed's reaction function). §5 **Cohorts/segments** — front-end vs belly vs long-bond, nominal vs TIPS, bills vs coupons. §6 **Factors** — duration, carry/roll-down, curve (steepener/flattener), convexity; what drives bond returns across regimes. §7 **Positioning/plumbing** — Treasury **supply & auctions** (bid-to-cover, tails, dealer takedown — TreasuryDirect), swap spreads, SOFR/repo, QT & reserves/RRP, MBS-convexity hedging flows. §8 **Cross-asset** — rates ↔ the dollar, equities (discount rate), credit (spreads sit over rates), gold (real-yield link). §9 **Catalyst transmission** — the Iran war/Hormuz → rates: the explicit chains (oil→CPI→Fed→front end; safe-haven bid→long end; supply/deficit→term premium), which are active now, escalation vs de-escalation markers. §10 **Evidence** — FRED, TreasuryDirect, NY Fed, Fed H.15/SEP, BIS.

**3 · DATA VERDICT BOARD** — table `tile | best FREE series (exact ID) | cadence | current value | feed-state | note`. Candidates to confirm/extend: DGS3MO/DGS2/DGS5/DGS10/DGS30, T10Y2Y, T10Y3M, T10YFF, DFII10, T10YIE, T5YIFR, SOFR, ACMTP10 (NY Fed term premium), RRPONTSYD, WALCL, MORTGAGE30US; auction metrics via TreasuryDirect. **Flag the MOVE index (rate vol) — is there ANY free real-time source, or is it placeholder-only?** Feed-state ∈ live / latest_published / source_identified / no-free-feed.

**4 · SCENARIO MATRIX.** 4–6 scenarios incl. **de-escalation/disinflation (bull-steepener upside)** and a **left-tail "sticky-inflation + supply glut → bear-steepener/term-premium spike."** Each: triggers, expected level+slope moves with historical-analogue ranges/dates (1990 Gulf, 2022–23 hiking, 2013 taper, 2023 long-end selloff), lead indicators, falsifiers.

**5 · WINNERS / LOSERS.** Under the current regime: short vs long duration, TIPS vs nominal, floating-rate, the front end vs the long bond, MBS — grouped, mechanism each.

**6 · LAYMAN ANCHOR BANK.** `number | plain meaning | reference scale` for each headline figure, e.g. "2s10s −50bp deeply inverted (recession-warning) · 0 flat · +250bp steep/healthy"; "real 10y 0% = free money · 2%+ = restrictive"; "10y 4.49% vs the 2020 low of 0.5% and the 1981 high of ~15%."

**7 · LAYMAN KIT.** The 8–9 chapter concepts — the yield curve & inversion, real vs nominal yields, the term premium, duration, breakevens/inflation, Fed policy & the dots, QT, auctions/supply, safe-haven demand — each: everyday-money analogy + worked numeric example + top-3 misconceptions.

**8 · COUNCIL & HONEST GAPS.** Where experts disagree (e.g. is the term premium back for good? does dis-inversion still signal recession? will the Fed hike on oil-inflation?), the 2–3 camps; plus the consolidated **no-free-feed** list.

**Rates-specific edges to weave in:** (a) term-premium decomposition (ACM vs Kim-Wright) and how to read it now; (b) auction tails/dealer takedown as a demand gauge; (c) negative swap spreads & SOFR spikes as balance-sheet/collateral stress; (d) the curve-as-recession-lead debate post-dis-inversion; (e) MBS-convexity hedging amplifying big moves; (f) QT/RRP/reserves mechanics linking the Fed balance sheet to rate levels.

=== RULES ===
`[HARD]` (number+date+source) vs `[DIR]` tags on every claim; source link + confidence each; **prefer free attribution-only sources** (FRED, TreasuryDirect, NY Fed, BIS); **flag every no-free-feed metric**; present credible disagreement as a council, don't resolve; sober register, no hype.
