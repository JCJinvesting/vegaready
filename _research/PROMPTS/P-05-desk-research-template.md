# P-05 — Per-desk research prompt TEMPLATE (instantiate per desk; do not run as-is)
**Return as:** `_research/RETURNS/R-XX-<desk>-desk.md` (assign the next ID in INDEX.md)

**How to use:** when a desk's loop starts (Rates, FX/Gold, Commodities/Energy, Crypto, Cross-Asset), copy this file to `P-XX-<desk>-desk.md`, fill every `{…}`, and tighten Part F to the desk's own framework edges (never reuse another desk's Part F verbatim — that mistake already happened between credit and equities).

---

TEMPLATE — PASTE INTO PERPLEXITY AFTER FILLING:

I'm building a research-grade public intelligence page for the **{ASSET CLASS}** market, with two renderings: a dense analyst page and an independent plain-language page. The site reads markets as a durable regime with event-catalysts overlaid (current catalyst: {CURRENT CATALYST, e.g. the Iran–Gulf conflict}). I need a comprehensive, citation-backed research dossier:

**Part A — The durable framework.** The 6–10 structural drivers of {ASSET CLASS} pricing that hold across regimes; for each: mechanism, the 1–2 best observable indicators, free data sources with update cadence, and current reading.
**Part B — The catalyst overlay.** How {CURRENT CATALYST} transmits into {ASSET CLASS}: the explicit causal chains (step by step), historical analogues with dates/magnitudes, which chains are active now vs latent, and what evidence would mark escalation.
**Part C — Scenario matrix.** 4–6 scenarios (incl. de-escalation and a left-tail) with: trigger conditions, expected {ASSET CLASS} moves with historical-analogue ranges, lead indicators, and falsifiers.
**Part D — Winners/losers.** Sectors/instruments/cohorts that benefit, are mixed, or are exposed, with the mechanism for each (grouped, no repetition).
**Part E — The watchlist.** The 8–12 most diagnostic metrics: exact series/source (prefer FRED or free public APIs), threshold levels that change the regime read, lead/lag character, false-positive history.
**Part F — {DESK}-SPECIFIC EDGES.** {WRITE 4–6 questions unique to this desk's mechanics — e.g., for Rates: term-premium decomposition sources, auction-tail metrics, swap-spread plumbing; for FX/Gold: central-bank gold flows data, basis/funding cross-currency signals; for Crypto: stablecoin plumbing, ETF flow data sources; for Cross-Asset: correlation-regime detection methods.}
**Part G — Layman translation kit.** For the 6 hardest concepts above: a plain-language explanation with a concrete everyday analogy, a worked numeric example, and the top 3 misconceptions a smart non-specialist holds.

Every claim: source link + confidence note (well-established / contested / anecdotal). Flag any metric with NO free reliable source explicitly — the site shows honest placeholders rather than invented numbers.
