# VegaReady Execution Plan (step-by-step)

**Pairs with:** `VegaReady-Master-Checklist.md` (same step IDs) and `VegaReady-Restructure-Master-Plan.md` (the strategy/decisions).
**Status:** For review before any build begins. Nothing here has been executed.
**Date:** 2026-06-09

---

## How to read this

Work is grouped **Phase → Work block → Step**. Every step has an **ID** (e.g. `P1.A2`) that matches a checkbox in the Master Checklist. Each step names the **files**, its **depends-on**, and how it's **verified**. Phases are gated: a phase isn't "done" until its gate passes.

**Standing rules (apply to every step):**
- Work on the **`p0-s01-design-tokens` design branch** in `vegaready/`; main-branch work happens in the `vegaready-main` worktree.
- **Never hand-edit generated modules** (`src/data/analysis/*.js`). Edit canonical JSON (`IranWarTracker/data/cascades/*.json`) + the generator, then run `node scripts/build-cascades.cjs`. Hand-authored exceptions: `connections.js`, `profits.js`, `freshness.js` (and `freshness.js` is being promoted into the generator in Phase 3).
- **Build-verify before any deploy:** `npm run build` host-side must be green.
- **Commit by explicit paths only**; never `git add -A`; never run git from the sandbox.
- **Do not touch the dashboard data pipeline** wiring (`WarTracker.jsx` island mount, `iwt-bundle.json` import, `/data-status.json` fetch, `build-data.cjs`, `publish-from-iwt.cjs`). The 3×/day automation must keep flowing.
- **Branding:** each new/edited page draws a context-appropriate, brand-compliant color combination from the approved theme register (`_program/APPROVED-THEMES.md`, the WB5 dark line + L1 light) and the `/edition` lab; palettes are modifiable later, never locked.

**Shipping loop (per change set):** edit on design branch → `npm run build` (host) → manual check → commit explicit paths → owner deploys (or agent host-git per the build's §13 rules).

---

## Phase 0 — Pre-flight (no user-facing change)

*Goal: set the guardrails and a clean baseline before touching anything.*

| ID | Step | Files / artifacts | Depends on | Verify |
|---|---|---|---|---|
| P0.1 | Confirm branch + worktree state; clean baseline build | repo state | — | `git status` clean on design branch; `npm run build` green (records the pre-change baseline) |
| P0.2 | Write the **"Do not dilute" preserve list** as a constraint the rewrite must honor | new `docs/VegaReady-Preserve-List.md` (or a section here) | — | List exists; covers headlines, long-form depth, causal-network framing, sector asymmetry, source discipline, JCJ understated |
| P0.3 | Stand up the **accuracy-reconciliation worklist** — verify each factual contradiction before any content edit | `docs/VegaReady-Accuracy-Reconciliations.md` | — | 5 items scoped with the correct resolution + source: BTC safe-haven, Hormuz physical-vs-economic state, pipeline-bypass capacity, standard-vs-distressed war-risk premium, source-tier standardization |
| P0.4 | Confirm staging-hygiene targets | inventory of `/edition-*`, `/outlook/infrastructure/` | — | Decision recorded: finish / `noindex` / remove for each |

**Gate 0:** baseline build green; preserve list + accuracy worklist + hygiene decisions exist. *No site files changed yet.*

---

## Phase 1 — Skeleton (interim; ZERO URL moves, pipeline untouched)

*Goal: stand up the catalyst-neutral structure and dual-mode plumbing without moving a single live URL.*

### Work block A — Naming token layer
| ID | Step | Files | Depends on | Verify |
|---|---|---|---|---|
| P1.A1 | Create the single naming registry | **new** `src/data/naming.ts` (entries for top-level domains, dossier tabs, status vocab; each: durable `id`, `route`, `overview`, `analyst`, `legacy[]`) | P0 | TypeScript compiles; `label(id,mode)` + `STATUS_LABELS` exported |
| P1.A2 | Refactor header to read labels/order from the registry | `src/components/Header.astro` | P1.A1 | Build green; nav renders identical to today in Overview mode (no visual regression) |
| P1.A3 | Refactor sub-navs to read from the registry | `src/layouts/AnalysisLayout.astro`, `src/layouts/DashboardLayout.astro` | P1.A1 | Build green; sub-navs unchanged in Overview mode |

### Work block B — Dual-mode toggle
| ID | Step | Files | Depends on | Verify |
|---|---|---|---|---|
| P1.B1 | Build the Overview/Analyst toggle | **new** `src/components/ModeToggle.astro` (+ small client script; `localStorage` + `data-mode` on `<html>`) | P1.A1 | Toggle persists across reload |
| P1.B2 | Wire mode into header + layouts | `Header.astro`, both layouts | P1.A2, P1.A3, P1.B1 | Flipping the toggle live-swaps every registry label |

### Work block C — Cross-linking components
| ID | Step | Files | Depends on | Verify |
|---|---|---|---|---|
| P1.C1 | Breadcrumb component | **new** `src/components/Breadcrumbs.astro` | P1.A1 | Renders a correct trail on a test page |
| P1.C2 | Active-catalyst module | **new** `src/components/ActiveCatalysts.astro` (reads lifecycle/`featured` flag) | P1.C3 | Renders the Iran card when `featured: true` |
| P1.C3 | Add lifecycle/`featured` flag to the catalyst object | catalyst metadata (data file/JSON) | P1.A1 | Flag readable by C2; Active/Normalizing/Historical states defined |

### Work block D — New pages (interim, additive)
| ID | Step | Files | Depends on | Verify |
|---|---|---|---|---|
| P1.D1 | `/today/` front door (interim: dossier card + regime strip from existing data) | **new** `src/pages/today/index.astro` | P1.C2 | `/today` no longer 404s; reachable; builds |
| P1.D2 | `/catalysts/` index (Iran featured; deep-links into existing `/dashboard/*`) | **new** `src/pages/catalysts/index.astro` | P1.C2 | Lists the dossier; links resolve |
| P1.D3 | `/signals/` page (promote `/structural/watch/` content) | **new** `src/pages/signals/index.astro` | P1.A1 | Renders the watch board at a top-level route |

### Work block E — Nav collapse, dossier relabel, island fix (interim)
| ID | Step | Files | Depends on | Verify |
|---|---|---|---|---|
| P1.E1 | Collapse top nav to the confirmed catalyst-neutral set; CTA → `/today/` | `Header.astro` (via registry) | P1.A2, P1.D1 | Nav shows: Today · Catalysts · Scenarios & Outlook · Market Impact · Countries & Regions · Structural Risks · Signals · Research · About. *(Market Regime added in Phase 4 when it has content — not an empty desk.)* Legacy URLs still resolve. |
| P1.E2 | Relabel the dashboard cluster → "Iran–Gulf Conflict 2026"; dual-mode tab labels; mark native/overlap | `DashboardLayout.astro` (via registry) | P1.A3, P1.B2 | Label changes only; **`/dashboard/*` routes unchanged; island mount + `data-status.json` fetch untouched** |
| P1.E3 | Homepage island fix (interim minimal): link into the analytical library + feature the active catalyst | `src/pages/index.astro` | P1.D1 | Homepage body links to Markets/Scenarios/Signals + the dossier; CTA → `/today/` |
| P1.E4 | Fix the live build drift (About/Briefings missing "Structural Risk") | rebuild/redeploy from current source | P1.E1 | All pages render the same nav set |
| P1.E5 | Drop "Who Profits" from top nav (route retained) | registry / `Header.astro` | P1.E1 | Not in nav; `/profits/` still resolves |

**Gate 1 (interim skeleton):** full `npm run build` green; manual click-through of the new nav + `/today` + `/catalysts` + `/signals`; dual-mode toggle works site-wide; **every `/dashboard/*` URL unchanged and the data pipeline verified flowing** (`/data-status.json` current). Ship to production.

---

## Phase 2 — Rename & Resequence

*Goal: lock the confirmed macro names and order — all one-file edits in the registry.*

| ID | Step | Files | Depends on | Verify |
|---|---|---|---|---|
| P2.1 | Populate registry with confirmed macro labels (P1 brand sub-line, Overview/Analyst, domain labels, dossier dual-title, "Who Profits" → "Winners, Losers & Market Effects"/"Beneficiaries & Trade Expressions") | `src/data/naming.ts` | Phase 1 | Both modes render the confirmed labels |
| P2.2 | Apply the full dual-label matrix (domains + 11 dossier tabs + status vocabulary) | `src/data/naming.ts` | P2.1 | Toggle swaps every label + status string |
| P2.3 | Resequence top-nav order and dossier-tab order | registry order arrays | P2.1 | Nav order = Today→…→About; tabs = Conflict Overview→…→Archive |
| P2.4 | Stage micro-label defaults (markets/transmission/structural/outlook) for per-section decision in Phase 3 | registry (status: deferred) | P2.1 | Defaults present, marked not-yet-final |

**Gate 2:** build green; both modes correct everywhere; routes unchanged; resequencing visible.

---

## Phase 3 — Content Revision

*Goal: split, correct, and re-layer existing content through the generator; build the Scenarios & Outlook layer. No generated `.js` hand-edited.*

### Work block A — Generator foundation (blocks everything in Phase 3)
| ID | Step | Files | Depends on | Verify |
|---|---|---|---|---|
| P3.A1 | Add `grain` + epistemic→labelType vocab to the taxonomy registry | `cascades/taxonomy.json` | Phase 2 | Controlled vocab updated |
| P3.A2 | Extend the generator: two-layer emit (`cards` structural + `catalystCards`) + `summary30`/`summary3min` + derive `freshness.js` | `scripts/build-cascades.cjs` | P3.A1 | One generator pass emits both layers; build green |
| P3.A3 | Regenerate + verify | run `node scripts/build-cascades.cjs` | P3.A2 | Generated modules carry both layers; `npm run build` green |

### Work block B — Freshness + corrections
| ID | Step | Files | Depends on | Verify |
|---|---|---|---|---|
| P3.B1 | Freshness fix: auto-derive, three-field (page-updated / data-through / next-refresh), "Live" only within SLA else "Snapshot" | generator + `AnalysisLayout.astro` + read `data-status.json` | P3.A2 | Banner shows real dates; no stale "May 29"; analysis + dossier agree |
| P3.B2 | Editorial corrections | `profits.js` (Vega def, disclaimer, 5 label types), `nuclear.json` (HEU note), grep "AI-verified"→"AI-assisted, source-checked", per-card timestamps in `markets/*.astro` | Phase 2 | Each correction live; grep clean |
| P3.B3 | Accuracy reconciliations (the 5 factual fixes) in canonical JSON | `cascades/{crypto,energy,insurance,credit,...}.json` | P0.3 | Each contradiction resolved; regenerate; build green |

### Work block C — De-confliction (by ascending effort)
*Each page: split mixed `summary` → `summary_structural`/`summary_current` in JSON; tag `grain`; regenerate; add the one "Active catalyst: Iran–Gulf" module; build-verify.*
| ID | Step | Pages | Depends on | Verify |
|---|---|---|---|---|
| P3.C1 | Low effort | Energy, Water, Defense, Labor | P3.A3 | Structural spine stays on `/markets/*`; catalyst layer routes to dossier module |
| P3.C2 | Medium effort | Crypto, Property, Gold-FX, Food | P3.C1 | same |
| P3.C3 | High effort | Equities, Credit, Insurance | P3.C2 | same |

### Work block D — Scenarios & Outlook (the new forward-looking layer)
| ID | Step | Files | Depends on | Verify |
|---|---|---|---|---|
| P3.D1 | Keep transmission/exposure/outlook as durable (G2); route only realized scenario cells to the dossier | generator + `cascades/{sectors,regions,dynamics}.json` + `scenario-status.json` join | P3.A3 | Realized vs unrealized split correct |
| P3.D2 | Build the **Scenarios & Outlook** section: status organization (Potential→Developing→Realized→Normalizing), multi-state ledger surfacing, holds Connections/Transmission/Outlook/precedents/infra/nuclear | new `src/pages/scenarios/*`, `scenario-states.json`, generator | P3.D1 | Section renders by status; navigable catalyst→hypothesis→outcome path |
| P3.D3 | **Expectations feature**: priced-in vs change-in-expectation; expectations state on scenario objects + an "expectations" signal class on the Watch Board | `scenario-states.json`, `watch-metrics.json`, generator | P3.D2 | Each scenario shows what's priced in + flags expectation moves |

### Work block E — Briefs, disclosure, evidence badges
| ID | Step | Files | Depends on | Verify |
|---|---|---|---|---|
| P3.E1 | Author overlap-zone dossier briefs (Markets, Economics, Regional, Sources): Opt2 expand-in-place + Opt1 "→ full analysis"/"→ live signals" deep-links + breadcrumb | brief components reading `iwt-bundle.json` scopes | P3.C*, P1.C1 | Brief self-contained; deep-links + breadcrumb work |
| P3.E2 | Progressive disclosure + falsifiability + table-header components | **new** `ProgressiveSummary.astro`, `FalsifiabilityCard.astro`, table-header partial | P3.A2 | 30s/3min/deep render; Confirm/Weaken/Invalidate present |
| P3.E3 | Evidence/confidence badges (source tier / data confidence / attribution confidence + evidence states), dual-mode | generator (derive from `taxonomy.json` epistemic types) + badge component | P3.A1 | Badges render + re-label on toggle |

**Gate 3:** QA checklist (source §11) passes; `node scripts/build-cascades.cjs` + `npm run build` green; **git diff shows only canonical JSON, the generator, `.astro`, components, and the 3 hand-authored exceptions — no generated `.js` touched.**

---

## Phase 4 — New Content (deferred; roadmap)

*Honest stubs, not empty desks. Each gated on real data/sources/freshness.*

| ID | Step | Notes |
|---|---|---|
| P4.1 | Homepage rebuild (7 sections per §10.2), feature active catalyst | Highest-leverage; do first in Phase 4 |
| P4.2 | `/today/` full aggregation (`today-bundle.json` from dossier + watch-metrics + catalysts) → flip primary CTA | Only when it reflects the 3×/day publish |
| P4.3 | Catalyst library scaffolding: surface `taxonomy.json`, 5 lifecycle buckets × 13 family tags, monitoring stubs, manual qualification rubric (13/21/29 thresholds) | — |
| P4.4 | Desk subset: thin Market Regime card (derived) + Real-Asset Pressure + Crypto flagship; grow signals 33→~40; add Market Regime to nav now that it has content | Crypto = JCJ edge; deepest trade detail stays internal |
| P4.5 | Catalyst calendar (`/catalysts/calendar/`) with a small fully-populated recurring set (FOMC/CPI/OPEC+) | — |

**Gate 4:** each surface ships only when honest (real data + sources + freshness).

---

## Target cutover (later, owner-timed — the only URL moves)

| ID | Step | Notes |
|---|---|---|
| T.1 | 301-migrate `/dashboard/*` → `/catalysts/iran-gulf-conflict-2026/*`; re-host the same React island + data imports; consolidate canonical tags | Trigger = the lifecycle threshold the owner sets (e.g., flip at "Normalizing"). One clean move. |
| T.2 | Move `/transmission`, `/connections`, `/outlook/*` routes under `/scenarios/*` with 301s | After Scenarios & Outlook is built (P3.D) |

---

## Deferred workstreams (backlog — tracked, not scheduled)

| ID | Workstream |
|---|---|
| B.1 | Full visibility model / internal-public split (trade detail stays internal) |
| B.2 | Substitution & Normalization reusable module |
| B.3 | Data-architecture: vintage-aware storage + source-rights metadata |
| B.4 | External-data sourcing strategy (public → commercial → specialist) |
| B.5 | Living pre-launch QA checklist (source §11) |

---

## Track D — Design System & Cross-Asset Product (CURRENT PRIORITY)

*Added 2026-06-10 (Master Plan §9). This is the active build track and supersedes the styling assumptions in Phases 1–3 where they conflict — those phases continue, but every page is now composed from `desk.css`, grounded in real data, and built to the **effort standard** (§D0).*

### D0 — Standing rules for this track
- **100% effort, every page** (Master Plan §9.0): rendered references not just laws · real data with honest placeholders only where no feed exists · system-first, never ad-hoc CSS · verify on live preview + owner review before moving on.
- **Dev-server workflow** (§9.8): edit → restart `astro dev` (it dies on concurrent builds / atomic writes) → keep the preview live. Verify a change with one build pass, then serve.
- **Navigation rule** (§9.6) applies to every link: subpage / expand-in-place / anchor-scroll — never the monolith.
- **Verification gate** each step: build green → view on preview → owner sign-off.

### D1 — Markets hub to "real" (start here)
| Step | What | Files |
|---|---|---|
| D1.1 | Wire the cross-asset board to the **watch registry** (real, status-stamped, 3×/day) — DXY, EMBI, OVX, VXEEM, BTC-ETF flow, TASI–DFM, etc. Keep "feed pending" only for rates/equity-spot/FX-spot/crypto-spot. | `markets-desk.astro`, `watchmetrics.js` |
| D1.2 | Add an inline **top-signals strip** (critical/alert signals) + a **movers** read (from the tape + signal deltas). | `markets-desk.astro` |
| D1.3 | Real **three-field freshness** (page-updated / data-through / next-refresh) + kill the stale "May 29" date. | freshness wiring |
| D1.4 | Apply the **nav rule**: tiles → subpage, with an **expand-preview** drawer for quick look. | `markets-desk.astro` |

### D2 — Missing hub modules
Calendar (forward-catalyst register) · regime/correlation matrix (cross-asset data) · sector/factor heatmap (factor + dispersion + TASI–DFM) · positioning & flows · derived indices (Global Liquidity Pressure, Physical Constraint). Real-where-available + labeled placeholders.

### D3 — Per-asset-class desk template → roll onto the 12 `/markets/*`
Build the desk subpage as the reusable template (composing `desk.css` + the generated analysis data), prove it on **equities** (the reference case from the §9.10 QC), then port the twelve market pages onto it. This is the **subpage layer** of the nav rule. Sub-steps (each page):
| Step | What | Notes |
|---|---|---|
| D3.1 | Rebuild on the desk system — editorial hero, gold eyebrows, Playfair `sec-head`, `#131E32` cards, status pills, masthead, freshness bar | Same content, real composition |
| D3.2 | **Eradicate every hardcoded hex** → role tokens (cyan→`--eyeb`, green/red→`--pos`/`--neg`, amber→`--warn`, indigo/purple→`--data`, source-blue→`--struct`) | Enforce "no colour literal outside the token layer" |
| D3.3 | **Surface the live watch signals** for that desk at the top (from `watchmetrics.js`) | e.g. equities = factor unwind · dispersion · TASI–DFM |
| D3.4 | **Real three-field freshness**; kill the stale "as of May 29" | |
| D3.5 | **Humanize labels** (`hormuz_closure`→"Hormuz closure") + add a **30-second summary** (progressive disclosure) | |
| D3.6 | **Move instrument-level trade maps behind the Analyst tier** + boundary line; public Overview shows scenario implications/beneficiaries, not directional instrument calls | Governance (§9.10) |
| D3.7 | Roll the template onto all twelve `/markets/*`; retire the legacy `AnalysisLayout` for ported pages | |

**D3 corrected approach (post-equities audit — Master Plan §9.11):** segregate each desk into a **durable catalyst-neutral spine** (sector sensitivities, factor mechanics, structural maps) + a **badged active-catalyst overlay** (Iran–Gulf repricing / bifurcation / scenario tables, winner/loser **defined** and scenario-conditional). Build **modes one at a time**:
- **D3a — Analyst** (full effort): the segregated tables + defined winner/loser + competing-drivers framing + glossary tooltips + evidence labels.
- **D3b — Overview** (separate fresh pass): plain-language, summary-first, glossed, durable spine first / catalyst as "what's driving it now."
- **D3c —** wire the Overview ⇄ Analyst toggle.
- **D3-gate —** content-semantics gate (every label defined · claims scenario-tagged + observed-vs-interpretation · drivers named · jargon glossed · both modes) before "done."

*Equities is the corrected template; then **D3.7** rolls it to the other eleven. The deep per-page de-confliction continues in D8, but the catalyst/market **segregation is now template-level.***

### D4 — Rework `/today` as the lean regime hub (Master Plan §8 Phase C)
Cross-asset regime strip + **bounded featured-catalyst** module (Iran as one driver) + forward catalysts + reader paths, on the desk system with correct color roles.

### D5 — Roll the system across the rest + unify nav
Port `/catalysts`, `/signals`, the dossier, `/structural/*`, `/scenarios`, `/about` onto `desk.css` + the desk masthead; retire legacy `Header.astro`/`global.css` for ported pages. Add the **Overview/Analyst toggle** and **⌘K** search.

### D6 — Interactive layer
The multi-facet **filter / sort / search / expand** island (React) for data-dense surfaces; expand-in-place drawers per the nav rule.

### D7 — Data architecture + real feeds
Tagged-object model → **Cloudflare D1**; wire the rates/FX/crypto-spot feeds; replace illustrative charts with real series.

### D8 — Content revision (original Phase 3, inside the new system)
De-confliction (three-grain), editorial corrections, accuracy reconciliations, freshness — applied to the ported pages.

**Recommended order:** D1 → D2 → D3 → D4 → D5 → D6 → D7 → D8. Start with **D1** (highest credibility jump, near-zero new data; it also fixes the placeholder critique and sets the template for D3/D4).
