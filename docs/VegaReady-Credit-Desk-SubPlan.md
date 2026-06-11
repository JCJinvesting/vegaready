# VegaReady — Credit Desk: Build Sub-Plan & Spec (D3.7 · desk #2)

**Purpose:** the detailed, step-level plan for the Credit desk — the second market desk after Equities, built on the dual-URL component pattern. This is the template for how we'll sub-plan *every* remaining desk: plan → build on the design branch → preview-deploy → visual approval + owner feedback → iterate (several passes, 100% effort, hunting gaps) → merge to `main` (live). See `VegaReady-Deploy-Runbook.md` for the ship method.

**Date:** 2026-06-11. **Status:** pre-build — awaiting owner sign-off on the two decisions in §1–§2.

---

## 1. DECISION A — Build a shared desk component kit (don't clone the monolith)

**The problem:** `EquitiesDesk.astro` is a ~600-line monolith. Cloning it for Credit, Rates, FX, Commodities, Crypto = five more 600-line copies — unmaintainable, and a fix to the shared chrome would have to be made six times. It also contradicts the research's Part F thesis: *"the other desks should be configuration, not re-builds."*

**The proposal:** before Credit, extract the genuinely-reusable scaffolding into a **desk kit**, so each desk = shared shell + shared section primitives + desk-specific **data + content**. Concretely:

- **`DeskShell.astro`** — all the chrome + dual-URL plumbing: utility ticker, masthead, freshness bar, sticky section nav, the `Read as: Layman | Analyst` toggle (link-based), the `body[data-mode]` register, related-desks, brief funnel, footer. Takes props (title, ticker items, nav sections, mode, live-as-of) + slots.
- **Section primitives** (small, data-driven): `KpiStrip`, `HeroState`, `Read30`, `Falsify`, `AttributionPanel`, `TrackGrid`, `FeedTile`, `CatalystStack`, `ScenarioTable`, `SensitivityMatrix` (sortable), `EvidenceBlock`, `Legends` (value-type/source-tier), `GlossaryList`, `IllustrativeChart` (the height-capped thumbnail).
- **Each desk file** (e.g. `CreditDesk.astro`) becomes mostly *data arrays + prose*, composing the primitives — target ≤250 lines vs 600.

**Plan:** refactor Equities onto the kit first (regression gate: the live equities desk must look pixel-identical), then build Credit on the kit from scratch. Cost: ~1 extra iteration up front. Payoff: desks 2–6 get dramatically faster and stay consistent; one chrome fix updates all.

**DECIDED (owner, 2026-06-11): STANDALONE — no shared kit.** Every desk is **custom-tailored to its content at 100% effort** (never lazy/sloppy template-filling). A shared template is only considered if we later explicitly decide it's right for a specific case. So Credit is built bespoke (like equities) — its own `CreditDesk.astro`, its own sections shaped to credit's actual structure (spreads/ratings/defaults differ fundamentally from equities' P/E/factors). The build order below drops the kit-extraction iteration; iteration 1 becomes the Credit durable spine.

---

## 2. DECISION B — Use Cloudflare preview deployments for visual approval

Right now "staging" means a local dev server. Better: when we push the **design branch** (`p0-s01-design-tokens`) to GitHub, Cloudflare Workers Builds should produce a **preview deployment at its own URL** (non-production) — a real, deployed copy to eyeball and approve *before* merging to `main`. That makes the approval loop: build → `git push origin p0-s01-design-tokens` → open the preview URL → approve/iterate → only then merge to `main` (live).

**Action:** confirm in the Cloudflare dashboard whether branch pushes generate preview URLs (Workers Builds → preview deployments). If yes, we adopt it; if no, we stay on local dev. *(I'll verify with you; it's a strict upgrade to the loop.)*

---

## 3. Credit desk — content spec

**Discipline (same as equities):** a durable, catalyst-neutral **credit spine** (Zone 2), segregated from a **badged Iran-Gulf credit overlay** (Zone 3). Every number carries a value-type + source tier; claims separate observed vs interpretation; drivers named as buckets + residual; jargon glossed; honest "feed pending" where no live source exists. Dual-mode: **Analyst** at `/markets/credit`, **Layman** at `/layman/credit`.

### Zone 1 — Orientation
- **State of the desk:** one-line credit-regime call — spread regime (tightening / range / widening), where in the default cycle, dollar-funding stress — + confidence chip.
- **30-second read** (5 ranked conclusions): e.g. *spreads still tight vs a softening fundamental backdrop; the Gulf catalyst is a sovereign/funding story not yet an IG/HY story; dollar liquidity is the tell; credit leads equities — watch HY OAS.*
- **Competing drivers** (buckets + residual): rates/duration · default & leverage cycle · dollar-funding/liquidity · positioning/flows · the Iran-Gulf catalyst · residual.

### Zone 2 — Durable credit spine (catalyst-neutral) — Part F + domain
| # | Section | What it shows | Data |
|---|---|---|---|
| 1 | **Spread Regime** | IG & HY OAS level vs history, direction, vol; tight/fair/cheap band | `[FEED: FRED OAS]`; `[LIVE: EMBI 2.1]` as the sovereign proxy |
| 2 | **Internal Structure** | IG vs HY, ratings migration (up/down, fallen angels / rising stars), distress ratio, CCC share | `[FEED]` (Moody's/S&P/FRED) |
| 3 | **Valuation / Fair Value** | OAS vs default-implied spread, spread-per-turn-of-leverage, real-yield-adjusted carry | `[FEED]` + `[FRAMEWORK]` |
| 4 | **Fundamental Driver** | default rate + recovery, net leverage, interest coverage, the maturity wall, earnings link | `[FEED]` + `[FRAMEWORK]` |
| 5 | **Cohort Rotation** | spreads by **ratings bucket** (IG/BBB/BB/B/CCC) and by **sector** — sortable sensitivity matrix (rate / cycle / commodity / FX) | `[FRAMEWORK matrix]` + `[FEED]` |
| 6 | **Factors / Styles** | carry · quality · spread-duration — what's being rewarded | `[FRAMEWORK]` + `[FEED]` |
| 7 | **Positioning & Flows** | fund flows (ICI), CDS net positioning, primary issuance, dealer inventories | `[FEED]` + `[LIVE: flight-to-quality 2.2]` |
| 8 | **Cross-Asset** | credit↔equities (HY OAS ~ equity stress), credit↔rates (real yields, curve), the dollar | `[LIVE: DXY 1.2, stock-bond corr 9.2]` + `relatedSectors` |

**Evidence & methodology:** value-type + source-tier legends; glossary (OAS, IG/HY, CDX/iTraxx, fallen angel, distress ratio, recovery rate, spread duration, cross-currency basis, EMBI, MMF); three confidences; the Analyst-tier gated trade map; data-quality footer; primary sources (FRED, ICI, Moody's, S&P, CFTC, Damodaran).

### Zone 3 — Iran-Gulf credit overlay (badged, from `credit.js`)
- **The bifurcation:** the sovereign/funding repricing — MMF dollar-liquidity surge, US-Treasury safe-haven vs Gulf official selling, EMBI sovereign stress, the sukuk freeze, IMF emergency financing, the swap-line backstop debate.
- **Winners & losers under this catalyst** — *defined*, scenario-conditional, read straight off each card's `tags.position` (hormuz / oil-strike / cable / ceasefire). Sectors/cohorts flip across scenarios → scenario filter.
- **Detail files** — the `credit.js` cards (rich, sourced, confidence-rated) as expandable evidence.
- **Country/sovereign × scenario matrix** if present in the data.

### Zone 4 — Layman mode (`/layman/credit`, 5 beats)
*What credit is doing* (spreads = the market's price of default risk; right now they're calm-but-stretched) → *Why it matters* (cheap credit funds everything; when spreads blow out, financing dries up and it hits stocks next) → *Who's exposed* (heavily-indebted companies, banks, emerging-market governments) → *What's driving it now* (the Gulf conflict's dollar-funding squeeze + interest rates) → *What to watch* (high-yield spreads, default rates, fund outflows). Glossed, summary-first.

---

## 4. Data wiring (the honesty contract)
- **LIVE (watch registry):** EMBI 2.1, flight-to-quality cash 2.2, Gulf UST recycling 2.3; cross-asset DXY 1.2, stock-bond corr 9.2, USD/JPY 1.3.
- **OVERLAY (`credit.js`, generated from cascades):** `cards`, `cascade`, `winnersLosers`, `takeaways`, `methodology` — the Iran-credit content.
- **FEED-PENDING (labeled, exact sources named):** IG OAS (FRED `BAMLC0A0CM`), HY OAS (FRED `BAMLH0A0HYM2`), default rate + recovery (Moody's/S&P), ratings migration, fund flows (ICI), CDX/CDS positioning (CFTC/markit), leverage & coverage.

---

## 5. Gaps & improvements to fold in (expanding the plan, not just following it)
1. **Shared desk kit** (Decision A) — the structural unlock for all remaining desks.
2. **Re-home the Iran-sector pages** — water / food-ag / labor / defense / property / insurance are *catalyst* pages, not market desks. Plan: move them under `/catalysts/iran-gulf-…/` (or `/structural/`) and drop them from the markets desk grid. The genuine market desks are: equities, **credit**, rates, FX (gold-fx), commodities (energy), crypto, cross-asset.
3. **Markets hub desk-grid + the "Rates" tile** — update the hub's "Twelve markets" grid to the real desk set as we go; the hub's Rates tile currently points to `/markets/credit` (placeholder) — fix when a Rates desk exists.
4. **Dual-mode site-wide** — only equities has Layman today. Plan Layman for the hub and `/today` so the toggle isn't a dead end elsewhere.
5. **Nav coherence** — legacy pages still use the old header; plan a migration (or a deliberate interim) so clicking out of a new desk doesn't drop into the old design.
6. **D7 feed layer** — a concrete plan to wire FRED (free) for the credit/rates feeds first (highest-value, free, public) and turn "feed pending" tiles live.
7. **SEO** (owner cares) — per-desk meta/OG, sitemap inclusion, internal linking hub↔desk↔related, and the dual-URL canonical strategy (analyst vs layman canonicals).
8. **Cross-desk consistency tests** — a tiny checklist run on each desk (compiles, both modes, no color-literals, honest placeholders, glossary present, dual-URL).

---

## 6. Build order (iterations) + acceptance gate — STANDALONE (no kit)
- **It 1 — Credit durable spine.** Build a bespoke `CreditDesk.astro`: the 8 catalyst-neutral sections shaped to credit (spread regime, ratings structure, OAS valuation, default cycle, ratings/sector cohorts, carry/quality/duration factors, flows, cross-asset), framework content, live registry tiles, feed-pending placeholders, glossary, evidence. Preview → feedback → iterate.
- **It 2 — Credit catalyst overlay + Layman.** Wire `credit.js` (bifurcation, defined winners/losers off `tags.position`, scenario filter, detail cards) + the 5-beat Layman page + the `/markets/credit` and `/layman/credit` routes. Preview → feedback → iterate.
- **It 3 — QC gate + ship.** Content-semantics gate (labels defined · claims scenario-tagged + observed-vs-interpretation · drivers as buckets + residual · value-types · jargon glossed · both modes · honest placeholders · dual-URL · no hex literals). Final approve → merge to `main` → live.
- Each iteration: 100% effort, custom to the content, actively hunt for gaps, several passes before moving on.
- **Prereq:** fold in the Perplexity credit research (owner runs `VegaReady-Credit-Research-Prompt.md`) before/within It 1 to ground the durable framework.

---

## 7. Research (deepen the framework, like equities)
Run `VegaReady-Credit-Research-Prompt.md` in Perplexity (deep-research) to ground the durable credit framework — indicators, the default/ratings cycle, the best free/public sources, and what each cohort/section should contain — then fold the findings into It 2/It 3. Until then, the spine is authored from the report's Part F + domain knowledge with honest placeholders.
