# P-05 — Per-desk research prompt TEMPLATE v2 (instantiate per desk; do not run as-is)
**Return as:** `_research/RETURNS/R-XX-<desk>-desk.md` (assign the next ID in INDEX.md)

**Why v2:** the returns must *drop into the build*. A VegaReady desk renders as (a) a dense **analyst spine of ~10 sections (§1–§10)**, (b) a **data verdict board** that decides which tiles are live vs honest placeholders, (c) a plain-language **layman** wing whose every number needs a fixed **anchor** (reference scale), and (d) a **scenario matrix**. So the prompt asks for the dossier in *exactly that shape*, not a generic essay. v1's generic Parts A–G are replaced by the build-shaped Sections 1–8 below.

**How to use:** copy to `P-XX-<desk>-desk.md`, fill every `{…}`, refresh the CONTEXT snapshot if the macro environment has moved, and tailor the desk-specific edges (never reuse another desk's edges verbatim).

---
PASTE INTO PERPLEXITY (deep research) — fill the `{…}`:

=== CONTEXT (read before the task) ===
I'm building a research-grade public market-intelligence page for the **{ASSET CLASS}** market. It renders twice: a **dense analyst page** (a 10-section spine) and an **independent plain-language page** (chapters, every number given a layman "anchor"). The house view reads markets as a **durable regime with event-catalysts overlaid**, and separates observed fact from interpretation.

**Live environment (mid-June 2026 — this catalyst is REALIZED, not hypothetical):** the 2026 Iran war (US + Israel vs Iran, began 28 Feb 2026; Khamenei killed) has closed the **Strait of Hormuz** since 4 March 2026 — ~95% drop in Gulf crude shipping, ~99% in LNG, OPEC output down >30%; the UAE expects full Hormuz flows only by 2027. A **fragile conditional ceasefire** holds and US–Iran **peace talks** are underway; that optimism just pulled **Brent from ~$101 (3 Jun) to ~$87 (12 Jun)**. Macro snapshot: **10y UST 4.49%**, curve **upward-sloping / dis-inverted** (10y−3m +77bp, 10y−2y +40bp); **Fed hawkish** (no 2026 cuts priced, hike odds rising on oil-driven inflation); **broad dollar firm (~100)**; **gold ~$4,365 (record)**; **Bitcoin weak ~$62–72k** (risk-off, heavy long liquidations, ETF outflows — trading as a risk asset, NOT a haven); **VIX moderate ~16–19**. **Treat "Hormuz-closed" as today's base case and de-escalation/peace-deal as the key UPSIDE scenario** (not closure as a tail).

**How your answer will be used:** it is pasted straight into the desk build, so **structure it EXACTLY as Sections 1–8 below** and keep each item terse and sourced.

=== TASK: produce the dossier in this structure ===

**1 · SCOPE & STATE.** One line on what this desk covers (and what it does NOT — name the sibling desk that owns adjacent assets). Then the **current one-sentence regime call**, and the **4 headline numbers** with current values + a 1-line meaning each.

**2 · THE ANALYST SPINE (§1–§10).** For each section give: the read, the 1–2 best observable indicators, the **free series (exact ID/source)**, the **current value**, and a `[HARD]`/`[DIR]` tag.
 §1 **Regime** (the master state + its dial) · §2 **Structure** (internal stress / breadth beneath the average) · §3 **Valuation** (are you paid for the risk?) · §4 **Fundamentals / the cycle** · §5 **Cohorts / segments** (the sub-markets) · §6 **Factors** (what actually drives returns) · §7 **Positioning / plumbing** (who's forced, dealer/flow mechanics) · §8 **Cross-asset linkages** · §9 **Catalyst transmission** (the Iran war / Hormuz closure → this desk: explicit step-by-step chains, which are active vs latent, escalation/de-escalation markers) · §10 **Evidence** (the canonical sources).

**3 · DATA VERDICT BOARD.** A table covering every number the desk would display: `tile | best FREE series (exact FRED/agency ID or API) | update cadence | current value | feed-state | note`. Feed-state ∈ {**live** (free real-time/daily) · **latest_published** (free but monthly/lagged) · **source_identified** (a source exists, needs wiring) · **no-free-feed** (flag honestly — the page shows a placeholder, never an invented number)}.

**4 · SCENARIO MATRIX.** 4–6 scenarios — **include de-escalation/peace-deal (upside) and a genuine left-tail** — each with: trigger conditions, expected moves with **historical-analogue ranges + dates**, lead indicators, and falsifiers.

**5 · WINNERS / LOSERS.** Instruments/cohorts that benefit, are mixed, or are exposed under the *current* regime — grouped, the mechanism for each, no repetition.

**6 · LAYMAN ANCHOR BANK.** A table: `number | plain-English meaning | reference scale` — for every headline figure give the calm / stressed / crisis yardsticks so a non-specialist can place today's reading (e.g. "VIX <15 calm · 30 fear · 80 = 2008/2020").

**7 · LAYMAN KIT.** The 8–9 concepts that will become layman chapters; for each: a plain everyday-money analogy, a worked numeric example, and the top-3 misconceptions a smart non-specialist holds.

**8 · THE COUNCIL & HONEST GAPS.** Where credible experts genuinely disagree (2–3 camps, who holds each), and a consolidated list of every metric with **no free reliable feed** (so we scaffold an honest placeholder).

**Desk-specific edges to weave in (§6/§7/§9 especially):** {WRITE 4–6 questions unique to this desk's mechanics — see the per-desk files for examples; never reuse another desk's verbatim.}

=== RULES ===
- Tag every quantified claim `[HARD]` (number + date + source) and every qualitative/directional claim `[DIR]`.
- Every claim: source link + confidence (well-established / contested / anecdotal).
- **Prefer free, attribution-only sources** (FRED, agency APIs, exchange/issuer disclosures). **Explicitly flag any metric with no free reliable source** — the site shows honest placeholders, never invented numbers.
- Where experts disagree, **present the disagreement** (the council); don't resolve it artificially. Keep the analyst register sober; no hype.
