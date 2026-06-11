# VegaReady — Reviewer Briefing & Context Prompt

*Paste this whole document to the reviewing agent. It is context + vision only. It deliberately contains no prior review conclusions — bring your own.*

---

You are reviewing **VegaReady**, an event-driven causal-intelligence platform built by **JCJ Investing** (a Dubai-based event-driven crypto/macro fund). Below is everything you need to understand what it is, how to navigate it, how it is built, the discipline that governs it, and — most importantly — **where it is intended to go**. Read the vision section closely: your review should judge the build against the intended trajectory, not only its current state.

## 1. What VegaReady is (today)

VegaReady is the worked, end-to-end analysis of one event: the **Feb–May 2026 Iran–US–Israel Persian Gulf conflict**, traced across every market and real-economy layer it touched. The research is organized into **10 sections**:

1. Gold, Precious Metals & FX
2. Capital Flows, Sovereign Credit & Financial Plumbing
3. Insurance, Shipping Finance & Trade Credit
4. Real Assets, Construction, Labor & Migration
5. Food, Water & Agriculture (beyond fertilizer)
6. Climate, Energy Transition, Nuclear & Defense Spillovers
7. Permanent Structural Tracking Frameworks (standing indices)
8. Global Equities & Sector Rotation
9. Cross-Asset Correlation & Volatility Regime
10. Crypto & Digital Assets

On top of the 10 sections sit **synthesis layers**: a cross-section causal map, a cross-asset hub, a live signal "watch board," a 30-signal tradable-signal catalog, a "who profits" lens, and standing structural-risk indices. The live site is at **vegaready.com**.

Crucially: **this conflict is a prototype, not the product.** See §5 (Vision).

## 2. How to navigate it (live site)

The information architecture is **3-tier**:

- **Dashboard** (live situational tiles): `/dashboard` and `/dashboard/{gulf, iran, israel, us, markets, economics, casualties, analytics, sources}`.
- **Markets** (asset-class and sector pages), grouped:
  - *Financial markets:* `/markets/gold-fx`, `/markets/equities`, `/markets/crypto`, `/markets/credit`, `/markets/insurance`
  - *Real economy:* `/markets/property`, `/markets/labor`, `/markets/food-agriculture`, `/markets/water`, `/markets/energy`, `/markets/defense`
  - *Cross-asset (synthesis):* `/markets/cross-asset`
- **Standalone lenses:**
  - `/transmission` — sector cascade (how the shock moves sector to sector)
  - `/exposure` — regional/country impact matrix (winners/losers per country)
  - `/outlook` — gap dynamics, plus `/outlook/precedents`, `/outlook/infrastructure`, `/outlook/nuclear`
  - `/structural` — standing risk indices: `/structural/{chokepoints, weaponization, deglobalization, digital, food}` and `/structural/watch` (the live signal board)
  - `/connections` — the cross-section causal map + the attribution/field-of-forces layer (read this one carefully; it encodes the platform's epistemics)
  - `/profits` — who profits

**Mapping of the 10 research sections to pages:** §1→gold-fx; §2→credit; §3→insurance; §4→property + labor; §5→food-agriculture + water; §6→energy + defense + outlook/nuclear + outlook/infrastructure; §7→structural/*; §8→equities; §9→cross-asset; §10→crypto.

## 3. How it is built (for code-capable reviewers)

Two repositories:
- **`IranWarTracker`** — the data + research backend. Canonical research lives as JSON in `IranWarTracker/data/cascades/*.json` (one or more files per section). This is the **single source of truth**. `taxonomy.json` is the controlled vocabulary; `watch-metrics.json` is the signal registry; `docs/` holds method docs and the signal catalog.
- **`vegaready`** — the Astro 6 site (deployed to Cloudflare Workers). A generator, `vegaready/scripts/build-cascades.cjs`, compiles the canonical JSON into generated modules at `vegaready/src/data/analysis/*.js`, which the Astro pages in `vegaready/src/pages/*.astro` import and render. A few synthesis modules are hand-authored, not generated: `connections.js` (causal map + attribution), `profits.js`, `freshness.js`.

Rule of the pipeline: **edit the canonical JSON and regenerate; never hand-edit generated modules.** Cards are normalized through an adapter into a common shape (summary, fields, metrics, sources, confidence, scenario tags).

## 4. The epistemic framework (the discipline you must judge against)

VegaReady's credibility rests on an explicit method. Hold it to this standard:

- **Source tiers.** Every numeric anchor is tiered **T1** (named primary), **T2** (secondary/press/proprietary), or **T3** (proxy/estimate/model). Figures may carry `PROVISIONAL` or `PROXY` flags. Aggregators are never treated as T1.
- **Scenarios.** Four named regimes thread the whole package: `hormuz_closure`, `oil_strike`, `cable_severance`, `ceasefire`. Every card and signal is scenario-tagged.
- **Two confidences, never blended.** *Data confidence* (is the number sound?) is separate from **attribution** — how much of a downstream effect the conflict actually owns (`attribution.strength`: primary / partial / marginal) and how sure we are of that (`attribution.confidence`). Every causal edge also names its **competing drivers** and carries an explicit **residual** (named drivers never sum to 100%).
- **Causal status.** Edges are **Tracked** (the relationship is observed in data the platform follows) or **Proposed** (a reasoned mechanism not yet observed). Some are flagged **contrarian** (they probe a relationship the underlying research denies).
- **The governing rule.** *Correlation is not causation.* Every causal edge is a weighted hypothesis with named rivals and a residual — never an asserted single-cause arrow. Attribution is curated, flagged analyst judgment, not a measured coefficient (there is no live econometric/data pipeline yet).
- **Driver ontology.** The platform classifies forces into ~10 **driver classes** (geopolitical-conflict, monetary-policy, trade-policy, technology-shock, supply-shock, pandemic-health, political-election, climate-disaster, structural-secular, market-endogenous). The Iran–Gulf conflict is **driver instance #1** and the only one populated today; seven others are *registered but not yet populated* and already appear as competing drivers on the causal edges.

## 5. The vision — macro to micro, A to Z (judge the build against THIS)

This is the part that matters most. VegaReady today looks like a deep analysis of one conflict. **The intent is a general, multi-driver, event-driven causal-intelligence platform** — the Iran conflict is the first fully-worked instance of a repeatable method.

- **The macro end (A).** The world is a *field of forces*: many driver classes (conflicts, monetary/trade policy, technology shocks, supply shocks, pandemics/health, elections, climate/disaster, slow structural shifts) act on markets simultaneously. VegaReady is meant to hold *many* of these drivers, each researched to the same standard, and connect them through one attribution-disciplined causal graph.
- **The micro end (Z).** From each driver, the platform drills down: section research → cards → monitorable/tradable **signals** (with input data, update frequency, thresholds, lead/lag, affected assets, false-positive risk, predictive/confirming/coincident classification) → eventually instrument-level **trade expressions**. The goal is that a portfolio manager can travel from a top-level driver all the way to a specific, falsifiable, dated trade — and back up the chain to see what's really driving a move.
- **The honest core.** Because multiple forces co-determine every market move, the platform must never over-attribute. The attribution layer (competing drivers + residual + the data/attribution confidence split) exists precisely so the platform can connect dots *without* breaching correlation-≠-causation. A move attributed 100% to the salient catalyst is the failure mode to avoid.
- **Phase A (already done): positioning.** The data model has been generalized so it can host many drivers (the driver ontology, the attribution schema on causal edges, the signal catalog, the live watch board). The UI is still conflict-centric, but the *schema* is multi-driver-ready.
- **Phase B (next): population & the field-of-forces.** Populate the first non-conflict drivers (e.g. US monetary/real-rates, China statecraft, US trade policy, OPEC+ supply policy, post-COVID regime, AI-capex cycle) with real research, then build the **field-of-forces view**: effect-centric nodes (gold, EM credit, Brent, BTC…) showing *all* inbound weighted driver-arrows — the conflict as one force among several. This view is deliberately deferred until ≥1 non-conflict driver is populated, because with one force it would be a field of one pretending to be many.
- **The end-state.** A **live event-intelligence product**, not a research archive: managed data feeds, a forward catalyst calendar, freshness/decay logic per claim, machine-readable trade-ready cards, and scenario/driver pivots — used by an event-driven fund to anticipate and decompose cross-asset moves as events unfold. New events (a new conflict, a policy shock, an outbreak) should slot into the same ontology and method, not require a rebuild.
- **The audience.** Hedge-fund PMs, macro researchers, and crypto-quant traders. Tone is institutional and adversarial-to-itself: it should survive a skeptical PM, a source-tier attack, and a quant's distrust of any unstable coefficient.

## 6. Your task

With the above as context, conduct your **own independent review** of VegaReady and return concrete findings. You are free to define your lens, but the platform is most interested in: what is **missing, weak, inconsistent, overconfident, non-tradable, or not yet converted into actionable intelligence**; where **causal links are absent or over-claimed**; where **source quality** would fail an institutional challenge; which **beneficiaries, substitution dynamics, or second-order effects** are under-developed; and what would most move VegaReady **from a research archive toward a live event-intelligence product** consistent with the vision above.

Ground every recommendation in a specific section, page, card, or a specific proposed addition. Prefer measurable indicators over narrative improvements. Distinguish production-ready facts from proxies. Assume nothing about prior reviews — bring fresh eyes.
