# VegaReady — Vision, evolution & audiences (reviewer context)

*Read this BEFORE the design-audit prompt and the site manifest. It tells you what VegaReady is, where it's going, how it's being evolved, and who it must serve — so you judge the design against the trajectory and the multi-audience intent, not just the current snapshot. Sections marked **[CONFIRM]** are the owner's to finalize.*

---

## 1. What VegaReady is today

VegaReady is an **event-driven market-intelligence platform** built by **JCJ Investing** (a Dubai-based event-driven crypto/macro fund). Its first fully-worked subject is the **Feb–May 2026 Iran–US–Israel Persian Gulf conflict**, traced across every market and real-economy layer it touched.

It is built in deliberate layers:
- **A live situational dashboard** (the `/dashboard/*` React app) — the raw event feed: incidents, order-of-battle, casualties, market timelines, sources.
- **Ten analysis sections** — gold/FX, sovereign credit, insurance/shipping, real assets/labor, food/water, energy/nuclear/defense, structural frameworks, equities, cross-asset, crypto.
- **Synthesis lenses** — Transmission (how a shock spreads sector to sector), Exposure (country winners/losers), Outlook (what fills the gap and what happens on reopening), Connections (the causal network), Who Profits (the payoff).
- **A live signal layer** — a 30-signal watch board with directional thresholds and computed status, a machine-readable `/signals.json` export, and per-signal trade expressions.

It is unusually disciplined for the genre: every numeric anchor is source-tiered (T1/T2/T3), every causal claim is a **weighted hypothesis with named competing drivers and an explicit residual** (correlation is not causation), and the platform separates *data confidence* from *attribution confidence*.

## 2. The ultimate goal

VegaReady is a **prototype for a general, multi-driver, event-driven causal-intelligence platform.** The Iran conflict is the first instance of a repeatable method — not the product itself.

The end-state is a **field of forces**: the world is moved by many simultaneous drivers (geopolitical conflicts, monetary and trade policy, technology shocks, supply shocks, pandemics, elections, climate), and VegaReady is meant to hold many of them, each researched to the same standard, connected through one attribution-disciplined causal graph, and surfaced as monitorable, tradable signals. A user should be able to travel from a top-level driver all the way down to a specific, dated, falsifiable trade — and back up the chain to see what is *really* moving a market.

The shift underway is **from a research archive to a live event-intelligence product**: managed data, freshness logic, a forward catalyst calendar, machine-readable exports, and trade-ready cards — used to anticipate and decompose cross-asset moves as events unfold.

## 3. How it is being evolved (the arc)

- **The corpus** (the 10 sections + dashboard) was built first — the substance.
- **Phase A — positioning:** the data model was generalized so it can host many drivers (a driver ontology; the attribution layer of competing-drivers + residual on every causal edge; the signal catalog and live watch board). The UI stays conflict-centric, but the *schema* is now multi-driver-ready.
- **Productization** (just completed): value-type/freshness schema, a scenario-state ledger (a scenario is never one switch — physical/legal/insurance/market/economic), a forward-catalyst register, the `/signals.json` export, a sortable causal-edge registry, and trade-ready signal cards. This is the "archive → live product" bridge.
- **Phase B — next:** populate the first *non-conflict* drivers (US monetary policy, China statecraft, OPEC+ supply, etc.) so the field-of-forces view becomes real.
- **Now — the UX/onboarding layer:** making the (now strong) intelligence *accessible and navigable* without weakening the expert depth. That is what this design audit serves.

The governing principle throughout: **honesty over false precision.** Nothing claims proven causation; everything is graded, sourced, and falsifiable.

## 4. The audiences and the dual-mode design  *(owner-confirmed)*

VegaReady serves **three purposes at once**: a **credibility showcase** for JCJ (LPs, prospective investors, reputation), a **product for clients/subscribers**, and an **internal working tool** for the JCJ desk. It is *not* primarily an open public-good resource — so the bar is **authority + usability + speed**, not mass-market simplicity.

The owner's resolution to "expert vs newcomer" is an explicit product decision: **a dual-mode site with a Simple / Analyst toggle.** "Simple" (the non-specialist view) is the **default front door**; an **Analyst switch** flips the same content into the dense, professional display. Effectively *two presentations of one corpus* — the same cards, signals and data rendered two ways — for two reader types.

| | **Simple mode (default)** | **Analyst mode (toggle)** |
|---|---|---|
| Serves | Non-specialists; the welcoming front door for clients and the showcase | Institutional finance + the internal JCJ desk |
| Voice | Plain-language; jargon glossed inline; "who wins / who loses" | Full vocabulary; source tiers and confidence visible |
| Layout | Summary-first: TL;DR → key asymmetry → scannable table; deep detail collapsed | Full density: all tables, the watch board, signals, registries, exports |
| The cascade | The visible narrative spine that guides the reader | Present but secondary to the data |
| Exports/raw | `/signals.json`, machine-readable exports, raw registries de-emphasized | Everything exposed |

This is how **one site satisfies a non-specialist client, an institutional PM, and the internal desk** without compromising any of them: the newcomer lands in Simple; the analyst (or internal user) flips to Analyst for depth. The toggle should be a first-class, persistent UI element (remembers the reader's choice), and every page must be designed to render meaningfully in **both** modes from the same content.

Access is **tiered/mixed** (public showcase + gated subscriber product + internal) — so the design should also distinguish freely-shown vs teased/gated material; confirm specifics with the owner.

## 5. What this means for the design audit

**Design and judge every page for BOTH modes.** For each element, the recommendation must specify two things: *what Simple mode shows* (plain-language, summary-first, glossed, detail collapsed, cascade-guided) and *what Analyst mode shows* (full density, tables, source tiers, signals, exports). Treat the **Simple / Analyst toggle architecture itself as a first-class IA recommendation** — where it lives, how it persists across pages, and exactly what it changes on each page. Favor a Simple default that is genuinely welcoming (the cascade as the guiding story, the existing 209-term glossary surfaced as tooltips, a plain-language hero) while preserving — one toggle away — the rigor the institutional and internal audiences depend on. And judge whether each page moves the site along the "research archive → live, multi-driver intelligence product" trajectory.
