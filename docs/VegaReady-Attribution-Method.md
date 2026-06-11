# VegaReady Attribution Method — Phase A (positioning)

**Status:** Phase A live (2026-06-02). The platform is a prototype for a multi-driver, event-driven causal platform; the Iran–Gulf conflict is **driver instance #1** (class `geopolitical-conflict`). This doc is the standing standard for how causal claims are made.

## The core rule
Correlation is not causation. Every causal edge on the platform is a **weighted hypothesis with named competing drivers and an explicit residual** — never an asserted single-cause arrow. Attribution is **curated, flagged analyst judgment, not a measured coefficient.** We do not have live/historical feeds or econometric decomposition wired in, so any share we assign is reasoned, ordinal, and falsifiable — and labelled as such.

## Two confidences we never blend
- **Data confidence** (`high/medium/low`): is the underlying indicator measurable and the data sound?
- **Attribution strength** (`primary/partial/marginal`): how much of the downstream effect the Gulf conflict plausibly owns versus other forces.
- **Attribution confidence** (`high/medium/low`): how sure we are of that attribution judgment — distinct from data confidence. We can be certain of the number yet unsure the conflict caused it.
- **Residual**: every edge carries an explicit unexplained remainder. Named competing drivers never sum to 100%.

## Driver taxonomy (`taxonomy.json → driverClasses`)
geopolitical-conflict · monetary-policy · trade-policy · technology-shock · supply-shock · pandemic-health · political-election · climate-disaster · structural-secular · market-endogenous.

## Driver registry (`taxonomy.json → drivers`)
One driver is **populated** today (`iran-gulf-conflict`). Seven are **registered, awaiting research** — they are named on every edge as competing drivers but have no node yet: `us-monetary-fed`, `us-trade-policy`, `china-statecraft`, `opec-supply-policy`, `cb-reserve-diversification`, `post-covid-regime`, `ai-capex-cycle`.

## What Phase A delivered
The cross-section causal edges (Connections page) each now carry `driverClass`, `attribution{strength,confidence}`, `competingDrivers[]`, and `residual`. The discipline immediately surfaced three edges that are **dominated by a different driver**, not the Gulf conflict: minerals/REE (China statecraft), tariff→sector margins (US trade policy), and nuclear→gold (real rates + CB diversification). Those are flagged `marginal` conflict share — the honest counter to easy attribution. A scenario field matrix adds beneficiaries + horizon + competing drivers + attribution confidence per scenario.

## Phase B (deferred, research-gated)
The field-of-forces view — effect-centric nodes (gold, EM credit, Brent…) showing all inbound weighted driver-arrows — becomes meaningful only once ≥1 non-conflict driver is populated with real research. Until then it would be a field of one force pretending to be many. The registered drivers above are the build queue.

## Limitations (be honest with readers and ourselves)
Attribution is judgment, not measurement; no live data pipeline; named confounders are never exhaustive (hence the residual); a true field-of-forces needs >1 populated driver. None of these block Phase A — they define what Phase B requires.

*lastUpdated: 2026-06-02*
