# VegaReady Master Checklist

**Pairs with:** `VegaReady-Execution-Plan.md` (full detail per step) and `VegaReady-Restructure-Master-Plan.md` (strategy).
**SHIP METHOD (locked 2026-06-11):** `VegaReady-Deploy-Runbook.md` — deploy = `git push origin main` (Cloudflare auto-builds); merge design→main with `-X ours` in the `vegaready-main` worktree. No manual `wrangler deploy`.
**Legend:** `[ ]` not started · `[~]` in progress · `[x]` done · `[!]` blocked. IDs match the Execution Plan.
**Date:** 2026-06-09 · **Status:** nothing started — awaiting approval to begin Phase 1.

---

## Confirmed decisions (reference — all locked 2026-06-09)
- [x] Scenarios get a **dedicated "Scenarios & Outlook" home** (status + expectations driven)
- [x] Brand **P1** + plain second line
- [x] Modes **Overview / Analyst Desk**
- [x] Dossier titles dual; route **`/catalysts/iran-gulf-conflict-2026/`** locked
- [x] Top-nav dual-mode labels (modifiable via registry)
- [x] "Who Profits" → **Winners, Losers & Market Effects** / **Beneficiaries & Trade Expressions**
- [x] Signals **promoted** to top-level
- [x] Freshness **auto-generated**
- [x] Active-catalyst module **top while hot** (flag-driven)
- [x] URL cutover = **one deliberate move** during rebuild; `/dashboard` canonical until then

---

## Phase 0 — Pre-flight
- [ ] **P0.1** Clean branch + baseline `npm run build` green
- [ ] **P0.2** Write the "Do not dilute" preserve list
- [ ] **P0.3** Accuracy-reconciliation worklist (BTC safe-haven · Hormuz state · pipeline-bypass · war-risk premium split · source-tier standardization)
- [ ] **P0.4** Staging-hygiene decisions (`/edition-*`, `/outlook/infrastructure/`)

**Definition of done:** baseline green; preserve list + accuracy worklist + hygiene decisions exist; no site files changed.

---

## Phase 1 — Skeleton (interim; ZERO URL moves)

**A · Naming token layer**
- [ ] **P1.A1** Create `src/data/naming.ts` (domains, dossier tabs, status vocab; durable id/route + overview/analyst + legacy)
- [ ] **P1.A2** Header reads labels/order from registry
- [ ] **P1.A3** Both layouts' sub-navs read from registry

**B · Dual-mode toggle**
- [ ] **P1.B1** `ModeToggle.astro` (+ persist via localStorage)
- [ ] **P1.B2** Mode wired into header + layouts

**C · Cross-linking components**
- [ ] **P1.C1** `Breadcrumbs.astro`
- [ ] **P1.C2** `ActiveCatalysts.astro`
- [ ] **P1.C3** Lifecycle/`featured` flag on the catalyst object

**D · New pages (additive)**
- [ ] **P1.D1** `/today/` front door (interim) — kills the 404
- [ ] **P1.D2** `/catalysts/` index (Iran featured → links to `/dashboard/*`)
- [ ] **P1.D3** `/signals/` page (promote watch board)

**E · Nav collapse, dossier relabel, island fix**
- [ ] **P1.E1** Collapse top nav to confirmed set; CTA → `/today/`
- [ ] **P1.E2** Relabel dashboard cluster → "Iran–Gulf Conflict 2026"; dual-mode tabs; native/overlap marked — *routes & pipeline untouched*
- [ ] **P1.E3** Homepage island fix (link into library + feature catalyst)
- [ ] **P1.E4** Fix live build drift (nav consistent on About/Briefings)
- [ ] **P1.E5** Drop "Who Profits" from nav (route kept)

**Definition of done:** `npm run build` green; new nav + `/today` + `/catalysts` + `/signals` click-through clean; dual-mode toggle works; **all `/dashboard/*` URLs unchanged; `/data-status.json` current (pipeline verified)**; shipped to prod.

---

## Phase 2 — Rename & Resequence
- [ ] **P2.1** Populate registry with confirmed macro labels
- [ ] **P2.2** Full dual-label matrix (domains + 11 tabs + status vocab)
- [ ] **P2.3** Resequence top-nav + dossier-tab order
- [ ] **P2.4** Stage micro-label defaults (deferred to per-section)

**Definition of done:** both modes render correct labels everywhere; routes unchanged; build green.

---

## Phase 3 — Content Revision

**A · Generator foundation**
- [ ] **P3.A1** `grain` + epistemic→labelType vocab in `taxonomy.json`
- [ ] **P3.A2** Generator: two-layer emit + `summary30`/`summary3min` + derive `freshness.js`
- [ ] **P3.A3** Regenerate + build green

**B · Freshness + corrections**
- [ ] **P3.B1** Freshness fix (auto, three-field, Live-vs-Snapshot)
- [ ] **P3.B2** Editorial corrections (AI-assisted · Vega def · nuclear note · disclaimer + 5 label types · per-card timestamps)
- [ ] **P3.B3** Accuracy reconciliations applied in canonical JSON

**C · De-confliction (ascending effort)**
- [ ] **P3.C1** Energy · Water · Defense · Labor
- [ ] **P3.C2** Crypto · Property · Gold-FX · Food
- [ ] **P3.C3** Equities · Credit · Insurance

**D · Scenarios & Outlook**
- [ ] **P3.D1** Lenses stay G2; realized cells route to dossier
- [ ] **P3.D2** Build Scenarios & Outlook (status organization + multi-state ledger; holds Connections/Transmission/Outlook/precedents/infra/nuclear)
- [ ] **P3.D3** Expectations feature (priced-in vs change-in-expectation + expectations signal class)

**E · Briefs, disclosure, evidence badges**
- [ ] **P3.E1** Overlap-zone dossier briefs (Markets/Economics/Regional/Sources) — Opt2 + Opt1 + breadcrumb
- [ ] **P3.E2** ProgressiveSummary + FalsifiabilityCard + table-header components
- [ ] **P3.E3** Evidence/confidence badges (3 confidences + evidence states), dual-mode

**Definition of done:** QA checklist passes; generator + site build green; **git diff = only canonical JSON / generator / `.astro` / components / 3 hand-authored exceptions** (no generated `.js` touched).

---

## Phase 4 — New Content (deferred)
- [ ] **P4.1** Homepage rebuild (7 sections)
- [ ] **P4.2** `/today/` full aggregation → flip primary CTA
- [ ] **P4.3** Catalyst library scaffolding + qualification rubric + monitoring stubs
- [ ] **P4.4** Desk subset (Market Regime thin · Real-Asset Pressure · Crypto flagship); signals 33→~40; add Market Regime to nav
- [ ] **P4.5** Catalyst calendar (small recurring set)

**Definition of done:** each surface honest (real data + sources + freshness) before it ships.

---

## Target cutover (later, owner-timed — only URL moves)
- [ ] **T.1** 301 `/dashboard/*` → `/catalysts/iran-gulf-conflict-2026/*`; re-host island; consolidate canonical tags
- [ ] **T.2** Move transmission/connections/outlook routes under `/scenarios/*` (301s)

---

## Deferred workstreams (backlog)
- [ ] **B.1** Visibility model / internal-public split
- [ ] **B.2** Substitution & Normalization module
- [ ] **B.3** Vintage-aware storage + source-rights metadata
- [ ] **B.4** External-data sourcing strategy
- [ ] **B.5** Living pre-launch QA checklist

---

## Track D — Design System & Cross-Asset Product (current priority · added 2026-06-10)

**Effort standard (applies to every D item):** 100% effort · rendered references not just laws · real data, honest placeholders only where no feed exists · system-first (compose from `desk.css`) · verify on live preview + owner review before moving on · navigation rule (subpage / expand-in-place / anchor-scroll, never the monolith).

**Foundation (done)**
- [x] **DS** Port the design system → `src/styles/desk.css` (t1 Oxford: gold=emphasis/CTA, verdigris=structure, cobalt=data, #131E32 cards)
- [x] **DS** Cross-asset markets hub direction proven → `/markets-desk`

**D1 · Markets hub to real**
- [ ] **D1.1** Wire the board to the watch registry (DXY · EMBI · OVX · VXEEM · BTC-ETF flow · TASI–DFM…), 3×/day
- [ ] **D1.2** Inline top-signals strip + movers
- [ ] **D1.3** Real three-field freshness; kill stale dates
- [ ] **D1.4** Apply nav rule: subpage links + expand-preview drawer on tiles

**D2 · Missing hub modules**
- [ ] **D2** Calendar · regime/correlation matrix · sector/factor heatmap · positioning & flows · derived indices (real + labeled placeholders)

**D3 · Per-asset-class desk template → 12 `/markets/*`** (prove on equities first)
- [ ] **D3.1** Rebuild on the desk system (hero · gold eyebrows · Playfair sec-head · #131E32 cards · status pills · masthead · freshness bar)
- [ ] **D3.2** Eradicate every hardcoded hex → role tokens (cyan→eyeb · green/red→pos/neg · amber→warn · indigo/purple→data · source-blue→struct)
- [ ] **D3.3** Surface the live watch signals for the desk (from watchmetrics.js)
- [ ] **D3.4** Real three-field freshness; kill stale "as of May 29"
- [ ] **D3.5** Humanize labels (hormuz_closure→"Hormuz closure") + 30-second summary
- [ ] **D3.6** Move instrument-level trade maps behind the Analyst tier + boundary line (governance §9.10)
- [x] **D3a** (Analyst) Segregate durable spine vs badged Iran overlay · define winner/loser (scenario-conditional) · competing-drivers · glossary tooltips · evidence labels — *built to the Perplexity IA report: 11-section architecture, 11 GICS sector profiles, scenario tilts, value-type/source-tier legends, per-section glance KPIs + illustrative thumbnail charts (height-capped), live cross-asset registry tiles, observed-vs-interpretation, falsifiability box, forward calendar (2026-06-10)*
- [x] **D3b** (Overview) Plain-language version — separate fresh pass: 5-beat narrative (What/Why/Who/Driving/Watch), plain KPIs (live breadth), defined winners/losers from `sectorMap`, glossed, summary-first; dense framework hidden via `.an-only`/`.ov-only` registers (2026-06-10)
- [x] **D3c** Wire Overview ⇄ Analyst toggle — freshbar segmented control, `body[data-mode]` register, localStorage persist (default Analyst), deep-link "see full table" jumps into Analyst (2026-06-10)
- [x] **D3-gate** Content-semantics gate (labels defined ✓ · claims scenario-tagged + observed-vs-interpretation ✓ · drivers named ✓ · jargon glossed ✓ · both modes ✓). **Accessibility is intentionally OUT OF SCOPE per owner (not the client base) — do not add captions/scope/ARIA.**
- [ ] **D3.7** Roll the template onto all 12 `/markets/*`; retire legacy AnalysisLayout for ported pages

**D4 · `/today` regime hub**
- [ ] **D4** Rework `/today` on the desk system (bounded featured catalyst + regime strip + forward catalysts)

**D5 · Roll out + unify nav**
- [ ] **D5** Port catalysts/signals/dossier/structural/scenarios/about to `desk.css` + masthead; retire legacy header/global.css; add Overview/Analyst toggle + ⌘K

**D6 · Interactive layer**
- [ ] **D6** Multi-facet filter/sort/search/expand island + expand-in-place drawers

**D7 · Data architecture + feeds**
- [ ] **D7** Tagged-object model → Cloudflare D1; wire rates/FX/crypto-spot; real charts

**D8 · Content revision inside the system**
- [ ] **D8** De-confliction (three-grain) · editorial corrections · accuracy reconciliations · freshness

**Order:** D1 → D2 → D3 → D4 → D5 → D6 → D7 → D8 (start D1).
