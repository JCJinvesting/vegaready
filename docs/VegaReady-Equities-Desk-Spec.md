# VegaReady — Equities Desk Content Specification (Analyst mode)

**Scope:** the full content/section spec for `/markets/equities` in **Analyst mode**, built to the corrected desk template (Master Plan §9.11; Execution Plan D3a). Overview mode (D3b) is a separate fresh pass — its outline is sketched in §7 below.
**Status:** approved spec, pre-build. Companion to `VegaReady-Restructure-Master-Plan.md` (§9.10–9.11) and `desk.css` / `desk-content.css`.
**Date:** 2026-06-10.

---

## 1. Template rules this page must satisfy (from §9.11)
1. **Segregation** — a durable, catalyst-neutral **market spine** (Zone 2) in its own tables, and a **separate, badged active-catalyst overlay** (Zone 3, Iran–Gulf 2026). Never one table that conflates the two.
2. **Define every label.** "Winner/loser" = *winners/losers of the active catalyst's repricing in the realized scenario; sectors flip across scenarios* — shown scenario-conditional, never as an absolute.
3. **Competing drivers + residual** named on headline claims (equities move on rates / AI-capex / earnings / positioning *and* the catalyst).
4. **Glossary tooltips** for jargon; **evidence labels** (source tier / data confidence / attribution confidence; observed vs interpretation) on key claims.
5. **Progressive disclosure** — 30-second → 3-minute → deep.
6. **Analyst mode first**, full effort; Overview is a separate pass; toggle wired last.
7. **Content-semantics gate** before "done": every label defined · every claim scenario-tagged + observed-vs-interpretation · competing drivers named · jargon glossed · both modes present.

**Legend:** `[LIVE]` real now · `[LIVE-watch]` from `watchmetrics.js` registry · `[LIVE-eq]` from `equities.js` · `[FRAMEWORK]` durable content to author (no feed; it's structure) · `[FEED:x]` placeholder needing external feed *x* (labeled "feed pending" on page) · `[GATED]` Analyst-tier behind a click.

---

## 2. Section hierarchy (Analyst mode)

### ZONE 0 — Page chrome
| # | Section | Content | Source | Component |
|---|---|---|---|---|
| 0.1 | Utility ticker | S&P/Nasdaq level; Factor-unwind, Dispersion, GCC spread, OVX | levels `[FEED: index quotes]`; rest `[LIVE-watch §8/§9]` | `.utility` |
| 0.2 | Masthead | wordmark · nav · ⌘K | `[FEED: search]` for ⌘K | `.masthead` |
| 0.3 | Mode toggle | Overview ⇄ Analyst (Analyst active) | wired D3c | new `.modetoggle` |
| 0.4 | Freshness bar | data-through / next-refresh / live-as-of | `[LIVE]` (`lastUpdated` + `/data-status.json`) | `.freshbar` |
| 0.5 | Breadcrumb | Markets ▸ Equities | `[LIVE]` | `.crumb` |

### ZONE 1 — Orientation
- **1.1 Hero (split).** Eyebrow "Markets · Equities"; H1 "The same shock. *Opposite outcomes.*"; durable sub-line (equities as the cross-asset inflection between the rate/energy shock and crypto); CTA → signal board. Right: live equity-regime instrument (factor unwind / dispersion / GCC asymmetry `[LIVE-watch]`) + a 90-day regime sparkline `[FEED: metric history]`.
- **1.2 The 30-second read.** Five ranked conclusions `[AUTHOR]` — durable framing + the current overlay. (e.g., index masks the damage; the GCC split; importers took the pain; defensives/value/energy led; equities upstream of crypto.)
- **1.3 What's actually moving equities — competing drivers + residual `[FRAMEWORK]`.** The field-of-forces panel; weights labeled *analyst estimate — not yet modeled*:

  | Driver | Class | Current read |
  |---|---|---|
  | AI / mega-cap capex cycle | Primary structural | Insulates the index; widens breadth gap |
  | Rates & liquidity (discount rate) | Structural | Long-duration growth sensitivity |
  | Earnings & margins | Structural | Revisions breadth is the tell |
  | Positioning / crowding | Tactical | Crowded-factor unwind risk |
  | **Active catalyst — Iran–Gulf** | **Overlay** | The repricing in Zone 3 |
  | Residual / unexplained | — | Explicitly named, never zero |

  *Discipline: the page never claims one driver explains the move (vision §7 / source §9.6).* 

### ZONE 2 — Durable equity framework (catalyst-neutral spine) — a full institutional desk
- **2.1 Equity regime read `[LIVE-watch + AUTHOR]`.** Risk-on/off, leadership (cyclical vs defensive, growth vs value), vol state — one synthesized line + the regime chips.
- **2.2 Market breadth `[FEED: index constituents]`.** Is the move broad or just mega-caps? Indicators: **advance/decline line · % of constituents above the 200-DMA · new-high/new-low (High-Low Index) · Bullish Percent Index** (>70 overbought / <30 oversold) · and the **aggregate-vs-median narrowness gauge** (distance of the index from its 52-wk high vs. the median stock — wide gap = narrow breadth). [Refs: GS breadth note; StockCharts market summary.]
- **2.3 Valuation & the return engine `[FEED: index EPS estimates + 10Y]` + `[FRAMEWORK]`.** Forward P/E; the **equity risk premium** (earnings yield − 10Y real; ≈**3.2%** as of Q1'26 per Robeco/HL Hunt → below-average forward returns absent multiple expansion); and the **return-decomposition engine**: `Total return = dividend yield + earnings growth ± Δ(P/E)`. US returns have leaned heavily on **multiple expansion** since ~2012. [Refs: Robeco; LSEG; Fed FEDS; HL Hunt.]
- **2.4 Factor heatmap `[FEED: factor/ETF proxies]` + `[FRAMEWORK]`.** The six style factors with definition · driver · defensive/cyclical nature, plus the **dispersion / valuation-spread** read (cheap vs crowded):

  | Factor | Definition | Nature |
  |---|---|---|
  | Value | priced at a discount to fundamentals | cyclical |
  | Growth | future earnings-growth potential | cyclical / long-duration |
  | Quality | stable, high-quality earnings | defensive |
  | Momentum | recent above-average performers | pro-cyclical, crash-prone |
  | Low / Min-vol | lower price fluctuation | defensive |
  | Size | small-caps | cyclical |

  Factor outlook framework = **dispersion + valuation spreads + diversification** (top vs bottom quartile, sector-neutral). [Refs: MSCI Foundations of Factor Investing; J.P. Morgan AM Factor Views 2Q'26; Invesco.]
- **2.5 Sector sensitivity matrix `[FRAMEWORK, research-grounded]`.** All 11 GICS sectors × structural sensitivity — the **durable** map (the conflict winner/loser is the overlay in 3.2):

  | Sector | Cycle | Rates | Oil | USD | Note |
  |---|---|---|---|---|---|
  | Energy | Cyclical | Low | **+ (primary)** | Inverse | Tracks oil; geopolitics-exposed |
  | Materials | Cyclical | Mod | Mixed | Inverse | Commodity/USD driven |
  | Industrials | Cyclical | Mod | − input | Mod | Capex/cycle |
  | Cons. Discretionary | **Most cyclical** | **− (high)** | − input | Mod | Most rate/cycle-sensitive |
  | Financials | Cyclical | **+ (NIM)** | Low | Mod | Hurt if rates choke growth/credit |
  | Info. Technology | Long-duration growth | **− (duration)** | Low | Mod | AI-capex driver |
  | Comm. Services | Mixed | − duration | Low | Mod | Mega-cap growth + media |
  | Cons. Staples | **Defensive** | − bond-proxy (mild) | − input | Mod | Needed in downturns |
  | Health Care | **Defensive** | Low | Low | Low | Policy-sensitive |
  | Utilities | **Defensive bond-proxy** | **−− (debt)** | Low | Low | Rate-sensitive; do well when rates fall |
  | Real Estate | Bond-proxy | **−− (debt)** | Low | Low | Rate-sensitive |

  [Refs: Schwab 11 sectors; MSCI Cyclical/Defensive; Fidelity GICS; financialpipeline business cycle.]
- **2.6 Earnings & revisions `[FEED: estimates]` + `[LIVE-eq: passThrough]`.** EPS-growth trend · **earnings-revision breadth** (up vs down revisions) · the durable margin-transmission channels.
- **2.7 Positioning & sentiment `[FEED: CNN/NAAIM/AAII/CBOE/CFTC]`.** **CNN Fear & Greed** (7 inputs) · **NAAIM Exposure Index** (active-manager net equity exposure) · **AAII** bull-bear · **put/call** · **fund flows** · **CFTC** futures positioning — the crowding/contrarian gauge. [Refs: TraderLion; sentiment indicator literature.]
- **2.8 Regional / country structure `[LIVE-eq structure + AUTHOR]`.** Each market's durable exposure (importer/exporter, sector mix). Tags → overlay.
- **2.9 Cross-asset position `[LIVE-eq: relatedSectors]`.** Equities downstream of rates/energy, upstream of crypto — the connection into `/markets/cross-asset` and `/markets/crypto`.

### ZONE 3 — Active catalyst overlay: Iran–Gulf 2026 (badged, segregated)
- **3.1 Overlay header `[LIVE]`.** "Active catalyst · Iran–Gulf Conflict 2026" badge + lifecycle status + one-line "how this catalyst is hitting equities now" + dossier link.
- **3.2 The bifurcation `[LIVE-eq: indexShock + indexNote]`.** Conflict-window index repricing (S&P −8%→ATH; TASI +5% vs DFM −16%; MSCI EM −11%).
- **3.3 Winners & losers under this catalyst `[LIVE-eq: sectorMap + sectorScenario]`.** **Defined** + scenario-conditional; sits *on top of* the 2.5 sensitivity matrix.
- **3.4 GCC repricing under this catalyst `[LIVE-eq: gcc/gccScenario/gccHedge]`.** Saudi/Dubai/Qatar bifurcation panel + scenario table.
- **3.5 Factor rotation under this catalyst `[LIVE-eq: factorRotation + factorObservations]`.**
- **3.6 Country impact under this catalyst `[LIVE-eq: countryMatrix + countryScenario]`.** Humanized scenario columns; tags defined.
- **3.7 Earnings impact under this catalyst `[LIVE-eq: earningsSummary + earningsScenario]`.** EPS by scenario.
- **3.8 Flows & positioning under this catalyst `[LIVE-eq: flows/volOptions/deleveraging/gccFlows/cryptoSpillover]`.**
- **3.9 Equity regime by scenario `[LIVE-eq: thesis + scenarioRegime]`.**

### ZONE 4 — Evidence, signals & methodology
- **4.1 Live equity signals board `[LIVE-watch §8]`** — factor unwind / dispersion / GCC asymmetry, with now/watch/alert/crit thresholds + status; link to `/structural/watch`.
- **4.2 Confidence & evidence `[LIVE-eq + AUTHOR labels]`** — the three confidences (source tier / data / attribution), value-types, observed-vs-interpretation on headline claims; the "upgraded to HIGH" / "proxy only" registers.
- **4.3 Scenario trade expressions `[GATED + boundary line]` `[LIVE-eq: scenarioTrades]`** — Analyst-tier; "scenario implications, not individualized advice."
- **4.4 Detail files `[LIVE-eq: cards]`** — expandable, metrics + sources.
- **4.5 Historical precedent `[LIVE-eq: precedents]`.**
- **4.6 Glossary tooltips `[FEED: 209-term dashboard glossary]`** — EMBI, OVX, factor unwind, TASI–DFM, vol-control, beta, ERP, breadth.
- **4.7 Data-quality & methodology footer `[LIVE-eq: dataQuality]`.**

### ZONE 5 — Conversion & chrome
- **5.1 Related desks `[LIVE]`** · **5.2 Brief funnel `[LIVE]`** · **5.3 Footer + disclaimer `[LIVE]`.**

---

## 3. Data-source & feed appendix (doubles as the D7 sourcing list)
| Need | Section | Source / candidate feed | Cost |
|---|---|---|---|
| Index levels (S&P/Nasdaq) | 0.1, 3.2 | index-quote API (TradingView widget / market-data vendor) | feed |
| Metric history (sparklines) | 1.1 | store `watch-metrics` history → derive | internal |
| Index constituents / breadth | 2.2 | index/exchange data; %>200DMA, A/D, Hi-Lo | feed |
| Forward P/E + EPS estimates | 2.3, 2.6 | estimate vendor; ERP = earnings yield − FRED 10Y | feed + FRED (free) |
| Factor returns | 2.4 | factor indices or ETF proxies | feed |
| Sector sensitivity matrix | 2.5 | **authored framework** (no feed) | — |
| Earnings-revision breadth | 2.6 | estimate vendor | feed |
| Sentiment / positioning | 2.7 | CNN Fear&Greed · NAAIM · AAII · CBOE put/call · CFTC COT | mostly free/public |
| Glossary | 4.6 | existing 209-term `GLOSSARY_ENTRIES` (iwt bundle) | internal |
| Iran overlay (all of Zone 3) | 3.x | `equities.js` (generated from cascades) | internal `[LIVE]` |

All `[FEED]` items render as labeled **"feed pending"** tiles until wired in D7 — the page shows the full institutional structure without presenting anything fake as data.

---

## 4. Overview mode (D3b — separate fresh pass, sketch only)
Plain-language, summary-first, glossed: *What equities are doing* (1 line) → *Why it matters* → *Who's exposed* (winners/losers in plain terms, defined) → *What's driving it now* (the Iran overlay, plain) → *What to watch*. Durable spine first, catalyst as the current overlay; jargon glossed inline; the dense tables collapsed/omitted. Same content object, lower density.

---

## 5. Sources (web research, 2026-06-10)
- J.P. Morgan Asset Management — *Factor Views 2Q 2026* — https://am.jpmorgan.com/us/en/asset-management/institutional/insights/portfolio-insights/asset-class-views/factor/
- MSCI — *Foundations of Factor Investing* — https://www.msci.com/documents/1296102/1336482/Foundations_of_Factor_Investing.pdf
- MSCI — *Cyclical / Defensive Indexes* — https://www.msci.com/documents/1296102/30991361/MSCI+Cyclical+and+Defensive+Indexes.pdf
- Charles Schwab — *What are the 11 stock sectors* — https://www.schwab.com/learn/story/what-are-stock-sectors
- Fidelity — *Sectors Are Shifting: the new GICS framework* — https://www.fidelity.com/bin-public/060_www_fidelity_com/documents/fidelity/sectors-are-shifting_fidelity.pdf
- Robeco — *Decomposing equity returns: earnings growth vs multiple expansion* — https://www.robeco.com/en-int/insights/2025/02/decomposing-equity-returns-earnings-growth-versus-multiple-expansion
- LSEG / FTSE Russell — *Decomposition of US equity returns over time* — https://www.lseg.com/en/insights/ftse-russell/decomposition-of-us-equity-returns-over-time-is-it-different-this-time
- HL Hunt Research — *Equity Risk Premium Decomposition* — https://www.hlhunt.org/uncategorized/equity-risk-premium-decomposition-institutional-valuation-framework-hl-hunt-research/
- Goldman Sachs — *Balance of risks following the 5% S&P sell-off (breadth)* — https://www.gspublishing.com/content/research/en/reports/2025/02/28/d96d9f0b-2b55-4b1d-a888-32b6fdf82177.html
- StockCharts — *Market Summary Dashboard (breadth indicators)* — https://stockcharts.com/freecharts/marketsummary.html
- TraderLion — *Reading stock-market sentiment (Fear&Greed, NAAIM, put/call)* — https://traderlion.com/markets-essentials/reading-stock-market-sentiment/

---

## 6. v2 — Closed gaps (QC pass, 2026-06-10)
*These layers were missing from §1–§5 and are required for the build. They sit across all zones.*

### 6.1 Multi-catalyst overlay & empty-state (was: single-catalyst, no fallback)
- **Zone 3 is a STACK, not one Iran block.** Render an **"Active catalysts affecting equities"** list — each a badged, collapsible overlay module (Iran–Gulf today; OPEC+, tariffs, a Fed pivot as they qualify), driven by which catalysts **tag** equities. Each module carries the same internal structure (bifurcation / winners-losers / scenario impact) scoped to that catalyst.
- **Empty-state.** When no catalyst tags equities, Zone 3 collapses to a single honest line — *"No active catalyst is materially moving equities; the durable framework below stands on its own"* — and **Zone 2 reads complete by itself.** (This is the catalyst-neutral test; the page must survive Iran cooling.)
- **Ordering by materiality.** Active catalysts sort by their effect on equities (attribution bucket + recency), not alphabetically.

### 6.2 Progressive disclosure & in-page navigation (was: only 30-sec + deep)
- **Three explicit layers.** (1) **30-second read** (Zone 1.2). (2) **3-minute skim** — every Zone-2/3 section exposes a one-line *lead* + its headline number/chart; the deep tables are collapsed by default in skim. (3) **Deep** — all tables expanded. A skim/deep control at the top sets the default expand level (and the Overview mode = skim-first).
- **Sticky section rail.** A left/inline jump-nav listing the zones/sections (Regime · Breadth · Valuation · Factors · Sectors · Earnings · Positioning · Catalysts · Evidence), with a "you are here" highlight — the within-page anchor-scroll pattern from the nav rule.

### 6.3 Interaction model & data-viz (was: static tables, charts unspecified)
- **Per-section interaction:**
  - Sector sensitivity matrix (2.5) — **sortable** by any sensitivity column, **filterable** by cyclical/defensive.
  - Winners/losers (3.3) & country impact (3.6) — **filterable by scenario** (Hormuz closure / strike / cable / ceasefire); the tag updates with the selected scenario.
  - Detail cards (4.4), precedents (4.5), country×scenario (3.6), trade expressions (4.3) — **expand-in-place**.
  - Each catalyst overlay (6.1) — **collapsible**.
- **Charts (design-system chart laws; "illustrative" until the feed lands):**
  | Viz | Section | Type |
  |---|---|---|
  | Regime sparkline | 1.1 | line, verdigris hero |
  | Breadth | 2.2 | line (%>200DMA) + A/D bars |
  | Valuation/ERP | 2.3 | time series, ERP vs history band |
  | Return decomposition | 2.3 | stacked bar (dividend + EPS growth ± ΔP/E) |
  | Factor heatmap | 2.4 | heatmap (factor × period), reading stressed→calm |
  | Sentiment gauge | 2.7 | dial / range gauge |
- **Mobile:** priority order = 30-sec read → regime → active-catalyst stack → breadth/valuation → the rest collapsed; tables become stacked cards ≤720px.
- **Accessibility:** intentionally **OUT OF SCOPE** — excluded by owner (not the target audience). Do not add a11y work (captions, scope headers, ARIA, `role` attributes, keyboard-nav passes, etc.).

### 6.4 Epistemic labeling refinements (was: under-defined)
- **Winner/loser — full definition:** *winners/losers of the active catalyst's repricing, measured (a) vs the pre-catalyst baseline and (b) sector-relative, over the catalyst's repricing window, in the **currently realized scenario** (read from the scenario-state ledger). Sectors flip across scenarios — the filter (6.3) shows the flip.*
- **Competing drivers use the attribution buckets, not numbers:** **Primary / Material / Secondary / Marginal / Uncertain** (source §8.4) + a named residual — never invented percentage weights.
- **Value-type label on every number:** baseline · current · period-average · nowcast · forecast · scenario. A baseline is never shown as a current observation; a scenario figure is badged.
- **Three confidences shown distinctly:** source tier (T1/T2/T3) · data confidence · attribution confidence — they are not interchangeable.

### 6.5 Connections, freshness, build order & acceptance
- **Cross-linking (dual-home):** inbound from the **markets hub's "active-catalyst" module** and the **Iran dossier's "Market Repricing" tab**; outbound to cross-asset / crypto / credit / the dossier. Every item carries tags (`asset=equities`, `sector`, `catalyst`) so it is trackable in multiple places. The competing-drivers panel (1.3) links to the **causal-edge registry** (`/connections`).
- **Per-section freshness (fast/medium/slow):** each section shows its own cadence/timestamp — breadth daily · valuation daily/weekly · sentiment weekly · the catalyst overlay 3×/day · the frameworks "structural, rarely changes." One page-level date is wrong.
- **Build order:** Zone 0/1 chrome+hero → **Zone 2 durable spine** (LIVE-watch + the FRAMEWORK content, the highest-value new work) → Zone 3 overlay stack (LIVE-eq) → Zone 4 evidence → Zone 5 → FEED tiles labeled "feed pending."
- **Per-page acceptance gate (must all pass):** every label defined · every claim scenario-tagged + observed-vs-interpretation · drivers as attribution buckets + residual · value-types labeled · jargon glossed (verify equity terms exist in the 209-term `GLOSSARY_ENTRIES`; author any missing) · multi-catalyst stack + empty-state both render · charts labeled illustrative-until-feed · Analyst mode complete (Overview is the separate D3b pass).
- **Glossary interaction:** hover (desktop) / tap (mobile) tooltip + a page-level glossary drawer; terms for this page: ERP, breadth, factor unwind, dispersion, TASI–DFM, OVX, vol-control deleveraging, beta, EMBI.
