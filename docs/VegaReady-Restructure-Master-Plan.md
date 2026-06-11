# VegaReady Restructure — Master Plan

**Prepared by:** Cowork orchestration (4 opus drafting agents + reconciliation pass)
**Date:** 2026-06-09
**Basis:** The product-owner discussion (decisions ledger §0), the *VegaReady Actionable Platform Plan* (the uploaded source spec), and a verified full review of the live site + the actual `vegaready` / `IranWarTracker` codebases.
**Sequencing (owner-set):** (1) Skeleton & Sitemap → (2) Rename & Resequence → (3) Revise existing content → (4) Add new content.

> This plan supersedes ad-hoc notes. It is the controlling reference for the restructure. Where a phase section below diverges in a detail (a slug, a label), **§1 Reconciliation is authoritative.**

---

## 0. Decisions Ledger (locked in discussion)

These were decided with the product owner and are not open unless re-opened explicitly.

1. **Strategic pivot — catalyst-neutral platform.** VegaReady becomes a catalyst-neutral market-intelligence platform. The Iran–Gulf conflict becomes the **first catalyst dossier**, not the organizing universe — but stays **front-and-center while the conflict is hot.**
2. **Generic front door = "Today"** (`/today/`): the all-topics live view (the role "Dashboard" was pretending to fill).
3. **The current "Dashboard" cluster IS the Iran–Gulf dossier.** Its tabs (War Room, Gulf, Economics, Markets, Casualties, Iran, US, Israel, Analytics, Sources) become the dossier. Working title **"Iran–Gulf Conflict 2026."**
4. **URL handling — keep `/dashboard/*` canonical for now.** No immediate URL migration (preserve SEO/familiarity while hot). Target route shape is **grouped**: `/catalysts/iran-gulf-conflict-2026/<tab>/`, with `geopolitical` as a **filter tag, not a path segment**. Formal 301 migration happens later, on owner timing.
5. **Prominence is a flag, not a URL.** A lifecycle/`featured` field (Active → Normalizing → Historical) drives front-seat placement. The dossier is pinned now and recedes later **without its URL ever moving** — archivable without breaking SEO.
6. **Dual-mode from the start.** Every content object carries both an **Overview** (plain-language) and **Analyst** (institutional) label, rendered via a persistent toggle. One object, two voices — never duplicated content.
7. **Three-grain model (governing).** For *overlap-zone* subsections (Markets, Economics, Regional, Sources), the same subject exists at three resolutions, each authored once: **G1** realized daily events → the dossier; **G2** durable analysis → the permanent library (`/markets/`, `/exposure/`, …); **G3** signal thresholds/status → the Watch Board / Signals. *Dossier-native* subsections (War Room, Human Impact, Actors Iran/US/Israel, Analytics) have **no** library twin — they live only in the dossier.
8. **Click-through = hybrid (Option 2 + Option 1).** A dossier overlap-zone tab shows a curated, self-contained realized-event **brief that expands in place** (Opt 2); from it, "→ full analysis" deep-links **out** to the canonical library page and "→ live signals" to the Watch Board (Opt 1), with a breadcrumb back. No duplication.
9. **Naming — tiered macro→micro.** Macro names decided up front (with pros/cons + recommendation each); micro labels per-section in Phase 3. All visible labels live in a **token layer** (one module) so a rename is a one-file edit; routes/IDs are durable and decided separately.

### Verified codebase facts the plan is built on
- Analysis pages are **generated** from `IranWarTracker/data/cascades/*.json` via `vegaready/scripts/build-cascades.cjs` → `src/data/analysis/*.js`. **Never hand-edit generated modules.** Hand-authored exceptions: `connections.js`, `profits.js`, `freshness.js`.
- The dashboard is a **client-only React island** (`WarTracker.jsx`) reading `src/data/iwt-bundle.json` (54 scopes), produced by `build-data.cjs` and published 3×/day by `publish-from-iwt.cjs` → Cloudflare. **This pipeline must not break.** The build/publish scripts write to fixed data paths and are route-agnostic — only the Astro page files move at cutover.
- Nav lives in `Header.astro` (11 hardcoded items), `AnalysisLayout.astro` (per-area sub-nav), `DashboardLayout.astro` (10 dashboard tabs). No breadcrumbs, no global "related/active-catalyst" module, no mode toggle. There is **no central naming module** today.
- `/markets/*` pages are **~60% Iran-conflict-specific** today (Energy ~45% / most evergreen → Insurance ~80% / least); the durable spine is already isolated in distinct JSON fields, so extraction is feasible without rewriting cards.
- `freshness.js` is hardcoded **"as of May 29, 2026"** — stale and load-bearing (drives the site-wide "Live ·" banner). The homepage body links only to `/dashboard` + `/about` (the analytical site is unreachable from it). `/today` 404s. Live build drift drops "Structural Risk" from About/Briefings.
- `taxonomy.json` already defines the grain vocabulary (`epistemicTypes`: structural / historical / current / hypothetical), every card already carries `tags.scenarios/position/asOf`, `watch-metrics.json` is already the G3 backend, and `scenario-status.json` is the realized-overlay — so the three-grain split is largely a **tagging + generator** task, not a rewrite.

---

## 1. Reconciliation — authoritative resolutions (the loop-review output)

Reading the four phase drafts against each other surfaced five real conflicts. These resolutions override any divergent detail in the phase sections below.

**R1 — Dossier tab labels = the owner-approved set.** The owner already approved a specific dual-mode label set (the side-by-side widget; "I like the dual mode labels"). That set is authoritative; Phase 2's more-plain alternatives (Latest Situation / Gulf Region / Economic Impact / Market Impact) are recorded as micro-naming options only.

| Slug | Overview (authoritative) | Analyst (authoritative) | Type |
|---|---|---|---|
| `/` (index) | Conflict Overview | Event Ledger | dossier-native |
| `/regional/` | Regional Impact | Regional Exposure | overlap (→ `/exposure/`) |
| `/economic/` | Economic Transmission | Transmission Channels | overlap (→ `/markets/energy`, `/transmission`) |
| `/markets/` | Market Repricing | Asset Repricing | overlap (→ `/markets/*`) |
| `/human/` | Human Impact | Casualty & Damage Assessment | dossier-native |
| `/iran/` | Iran | Iran: Capabilities & Strategy | dossier-native |
| `/us-coalition/` | US & Coalition | U.S. & Coalition Operations | dossier-native |
| `/israel/` | Israel | Israel: Operations & Defense | dossier-native |
| `/whats-next/` | What Happens Next | Scenarios & Analytics | dossier-native |
| `/sources/` | Sources & Confidence | Source Ledger & Methodology | overlap-lite (→ `/about/` methodology) |
| `/archive/` | Historical Record | Case-Study Archive | dossier-native |

**R2 — Dossier tab slugs = the short set** (Phase 2's), not the long descriptive set (Phase 1 / Appendix B). Rationale: the owner flagged depth/length as a concern; the short slugs are flatter and `iran`/`us-coalition`/`israel` are kept as **direct tabs** (no `/actors-operations/` segment). Slugs are durable — decide once.

**R3 — Top-level IA = the source-doc §10.4 target (Phase-2-aligned), with Transmission/Connections/Outlook folded in, not a separate "Scenarios" domain.** Authoritative top nav:

> **Today · Market Regime · Catalysts · Market Impact · Countries & Regions · Structural Risks · Signals · Research · About** + a persistent **[Overview ⇄ Analyst Desk]** toggle.

- **Transmission** → a section under **Market Impact** ("How the shock spreads"), not a top peer.
- **Connections** → an in-page causal-map lens (route `/connections/` survives; surfaced inside Market Regime / Market Impact), not top nav.
- **Outlook / scenarios** → fold into the per-catalyst **"What Happens Next"** tab + a precedents/scenarios library under Catalysts; not a top peer.
- **Who Profits** → renamed and demoted to a dossier tab + cross-asset lens (see R5).
- **Market Regime** stays in the target IA but is **Phase-4 content** — in the interim skeleton it is deferred / thin (an honest stub, not an empty desk).
- *Phase 1 proposed an alternative — a dedicated `/scenarios/` top domain grouping Transmission + Connections + Outlook. This is recorded as **Open Decision D-IA1** (fold-in, recommended, vs dedicated Scenarios domain).*

**R4 — "What Happens Next" is the dossier scenarios tab, not a top-level domain.** (Phase 1 used it at both levels; resolved to the tab only, consistent with R3.)

**R5 — "Who Profits" rename.** Public **"Winners, Losers & Market Effects"** (owner-approved direction) with Phase 2's compliance-safer **"Opportunities & Risks"** recorded as an alternative; Analyst **"Beneficiaries & Trade Expressions."** Demoted from top nav to a dossier tab + cross-asset lens. (Final public label = Open Decision D-N5.)

**R6 — Naming module name.** Standardize on `src/data/naming.ts` (Phase 2's design) as the single label token layer; the generator keeps emitting durable `id`/`page`/`status` and the render layer resolves display text via `label(id, mode)`.

---

## 2. Phase 1 — Skeleton & Sitemap

*Goal: establish the structure (routes, layouts, nav, new components) without renaming copy or moving live URLs.*

### 2.1 Target top-level IA (authoritative per R3)

| Domain (route) | Overview | Analyst | Maps from |
|---|---|---|---|
| `/today/` | Today | Today *(Daily Intelligence)* | **NEW** (404 today) |
| `/regime/` | Market Regime | Global Regime | **NEW** (Phase-4 content) |
| `/catalysts/` | Catalysts | Catalyst Library | **NEW** index; houses the dossier |
| `/markets/` | Market Impact | Asset Markets | `/markets/*` (+ Transmission folded in) |
| `/exposure/` | Countries & Regions | Country Exposure | `/exposure/` |
| `/structural/` | Long-Term Risks | Structural Risk Monitor | `/structural/*` (+ Watch Board) |
| `/signals/` | Signals to Watch | Live Signal Registry | promote `/structural/watch/`; `/signals.json` exists |
| `/research/` | Research | Research Notes | `/briefings/*`, `/blog/*` |
| `/about/` | About VegaReady | Methodology & Coverage | `/about/` |
| *(toggle)* | Overview | Analyst Desk | **NEW** component |

Demoted (route survives, off top nav): Connections (in-page lens), Who Profits (dossier tab + lens), Outlook (per-catalyst tab).

### 2.2 Dossier internal structure (the relabeled `/dashboard/*` cluster)

Routes stay `/dashboard/*` canonical **now**; target = grouped `/catalysts/iran-gulf-conflict-2026/<slug>/` with the R2 slugs and R1 labels. Overlap-zone tabs carry the three-grain + hybrid click-through (a self-contained brief that expands in place, with "→ full analysis" / "→ live signals" deep-links out and a breadcrumb back). Dossier-native tabs render only in the dossier.

### 2.3 Interim vs target (the critical split)

**Ships now — NO URL moves, no pipeline risk (relabel + new-page + flag only):**
- New `/today/` page (kills the 404); homepage + CTA repoint to it.
- New `/catalysts/` index featuring the Iran–Gulf dossier (deep-links into existing `/dashboard/*`).
- New `/signals/` page (promote `/structural/watch/`).
- Header nav collapsed to the R3 catalyst-neutral set; legacy domains still resolve at old URLs.
- `/dashboard/*` **relabeled** "Iran–Gulf Conflict 2026" with dual-mode tab labels — routes unchanged.
- New components wired: Overview/Analyst **mode toggle**, **breadcrumbs**, **active-catalyst module**.
- Lifecycle/`featured` flag added to the dossier object → prominence becomes data-driven.
- Who Profits dropped from nav (route kept). Fix the live build drift (About/Briefings missing Structural Risk).

**Target (later, owner-timed):** 301-migrate `/dashboard/*` → `/catalysts/iran-gulf-conflict-2026/*` (re-hosting the same React island + same `iwt-bundle.json` import + `data-status.json` fetch); fold Transmission under Market Impact, Outlook into the dossier; consolidate canonical tags.

### 2.4 Repo implementation map

| File | Change |
|---|---|
| `src/components/Header.astro` | Replace 11-item `nav[]` with the R3 set (IDs + `label(id,mode)`); point CTA at `/today/`; mount the mode toggle. |
| `src/layouts/DashboardLayout.astro` | Relabel "Dashboard" → "Iran–Gulf Conflict 2026"; extend tabs with dual-mode labels + `type: native|overlap`; add breadcrumb slot. **Leave the React-island mount + `/data-status.json` fetch untouched.** |
| `src/layouts/AnalysisLayout.astro` | Add active-catalyst + breadcrumb slots + dual-mode plumbing; add `signals`/`regime` areas. |
| `src/pages/index.astro` | Rebuild body to route into `/today/` + the analytical library (fix the island). |
| New | `ModeToggle.astro`, `Breadcrumbs.astro`, `ActiveCatalysts.astro`, `src/pages/today/index.astro`, `src/pages/catalysts/index.astro`, `src/pages/signals/index.astro`. |
| `astro.config.*` | Target only: the 301 map. Interim: none. |

---

## 3. Phase 2 — Naming & Resequencing

*Goal: lock the macro names; defer micro labels; build the token layer.*

### 3.1 Tier-1 macro recommendations
- **Brand:** **P1** — *"VegaReady maps how catalysts become market regimes."* with P5's sentence as the plain-language sub-line.
- **Product modes:** **M1** — **Overview / Analyst Desk** (reserve "Terminal"/"Workspace" for future surfaces, don't use as the toggle label).
- **Top-level domain labels:** per the R3 table (dual-mode).
- **Iran dossier:** dual-title — Overview **"Iran–Gulf Conflict 2026"**, Analyst **"Iran–Gulf Conflict & Hormuz Disruption — 2026 Dossier"**; legacy aliases (*Iran War Tracker*, etc.) preserved as redirects. **Route IR1** `/catalysts/iran-gulf-conflict-2026/` (geo = tag), decided now, independent of title.
- **Who Profits:** per R5.

### 3.2 Resequencing
- **Top nav order:** Today · Market Regime · Catalysts · Market Impact · Countries & Regions · Long-Term Risks · Signals · Research · About. (Narrates the brand chain: what's new → what regime → what's driving it → how it hits markets → who's exposed → what's fragile → what to watch → go deeper.)
- **Dossier tab order:** Conflict Overview → Regional → Economic → Markets → Human → Iran → US & Coalition → Israel → What Happens Next → Sources → Archive.

### 3.3 Label-token-layer architecture
Create `src/data/naming.ts` — the single source of truth for every visible string. Each entry: durable `id` + stable `route` + `overview` + `analyst` labels (+ optional `heading`, `legacy[]` aliases, governance `status`). A `label(id, mode)` accessor is called by `Header.astro`, both layouts, and the page render layer; the generator keeps emitting durable `id`/`page`/`status` (no labels), so generated modules are never hand-edited and both modes stay in sync structurally. A status→dual-label map (`STATUS_LABELS`) re-renders status text on toggle (Appendix A vocabulary). Renaming = one string edit; reordering = one array edit; routes never move.

### 3.4 Micro labels (Tier-2/3) — deferred to Phase 3 with recommended defaults
Recommended Overview/Analyst pairs are tabulated for the 12 market pages, 13 transmission sectors, 5 structural pages, and 5 outlook pages (decide per-section during content revision; not locked here).

---

## 4. Phase 3 — Content Revision

*Goal: split, correct, and re-layer existing content into the three grains and dual-mode — through the canonical-JSON + generator pipeline, never by hand-editing generated `.js`.*

### 4.1 De-confliction via a two-layer generator emit (not card surgery)
Grain is already field-aligned in the cascade JSON. Teach `build-cascades.cjs` to emit, per card, both a **permanent layer** (`summary_structural`, `trigger`, `mechanism`, `historical_precedent`, dependency/precedent tables, substitution, scenario *scaffold*) → stays on `/markets/*` and the lenses (G2), and a **catalyst layer** (`magnitude`, `scenario_impacts`, live `data.*`, `position`, `asOf`, `staleFlags`) → the dossier brief + an "Active catalyst: Iran–Gulf" module re-surfaced on the permanent page (G1). The only prose hand-edit is splitting mixed `summary` fields into `summary_structural` / `summary_current` **in the JSON**, scoped to the flagged cards. Add `grain: structural|catalyst|split` to `taxonomy.json`'s controlled vocabulary for override cases. The render loop in the `.astro` pages is unchanged; one new module maps the catalyst layer.

**Per-page effort (ascending), drives the work order:** Energy / Water / Defense / Labor (low) → Crypto / Property / Gold-FX / Food (med) → Equities / Credit / Insurance (high). The three lenses (`/transmission`, `/exposure`, `/outlook`) stay almost entirely G2; only `asOf`-stamped *realized* scenario cells route to the dossier (decided via `scenario-status.json`).

### 4.2 Dossier brief layer (Opt2 + Opt1)
The four overlap-zone tabs (Markets, Economics, Regional, Sources) get a curated realized-event brief with three disclosure tiers (30-sec situation → 3-min event cards with Observed-vs-Interpretation → deep, with the required Confirm/Weaken/Invalidate card). Data comes from existing `iwt-bundle.json` scopes (GCC_EQUITY, REFINERY_EVENTS, INSURANCE_EVENTS, per-country logs, SOURCES…). Deep-links resolve from existing tags (`tags.assetClass` → library target; watch metric `page`/`signalNo` → signal target) — no hand-maintained link table. Breadcrumb returns to the brief.

### 4.3 Progressive disclosure, editorial corrections, freshness
- **Progressive disclosure** (30-sec / 3-min / deep) via a `ProgressiveSummary.astro` component fed by `summary30` / `summary3min` emitted by the generator (derived from existing `thesis`/`takeaways` where present).
- **Editorial corrections** mapped to exact files/JSON: "AI-verified" → "AI-assisted, source-checked" (grep across dashboard/index/about copy); corrected Vega definition (`profits.js`, hand-authored); nuclear HEU-vs-weapons-grade note (`nuclear.json` → generator); Who Profits rename (R5); three freshness fields per page; per-card source + timestamp; `/profits` disclaimer + five label types; dual-mode label-type discipline (map `taxonomy.json` epistemic types → public label types).
- **Freshness fix:** promote `freshness.js` out of the hand-authored set into a **generated** file derived from `scenario-status.json` + section `lastUpdated` + `data-status.json`; adopt the three-field shape (page-updated / data-through / next-refresh); show "Live" only within the `stale_after` SLA, else "Snapshot." *(This is also a correctness fix — the site currently asserts "Live" against stale data.)*

### 4.4 Order of work
Generator/taxonomy foundation → freshness fix → editorial corrections → de-confliction by ascending effort → lenses → dossier briefs → progressive-disclosure components → QA exit gate (`build-cascades.cjs` + `npm run build` green; git diff shows only canonical JSON, the generator, `.astro`, components, and the three hand-authored exceptions — no generated `.js` touched).

---

## 5. Phase 4 — New Content & Expansion *(deferred — roadmap only)*

*Everything here is later, gated on Phases 1–3 and on "honest data, real sources, real freshness." When in doubt, an honest stub beats an empty desk.*

- **Homepage rebuild (first, highest-leverage/lowest-cost):** fix the island — 7 sections per §10.2 (hero → regime strip → 3 live cards → 5-step chain → featured research that links *into* the library → methodology/trust → restrained JCJ attribution), featuring the active catalyst as an instance.
- **"Today" front door (`/today/`):** an aggregation surface (not a new pipeline) composing `iwt-bundle.json` + `watch-metrics.json` + `catalysts.json` into a `today-bundle.json`; becomes the primary CTA once it reliably reflects the 3×/day publish.
- **Catalyst library scaffolding (`/catalysts/`):** surface `taxonomy.json` (10 driver classes, Iran = #1); 5 lifecycle buckets × 13 family tags; honest monitoring stubs for next catalysts; manual qualification rubric (0–40 score → signal / monitoring / developing / full dossier thresholds 13/21/29).
- **Desks / signals evolution:** near-term subset = a thin Market Regime card (derived from Watch Board status) + Real-Asset Pressure (best-instrumented already) + **Crypto as flagship** (JCJ edge; keep deepest trade-expression internal). Grow the 33-signal board toward ~40. Derived indices deferred (Physical Constraint Index first).
- **Catalyst calendar (`/catalysts/calendar/`):** richer dated view of `catalysts.json`; ship with a small fully-populated recurring set (FOMC/CPI/OPEC+).
- **Explicitly NOT yet:** standalone desks/dossiers for every election/disaster/health/commodity/country; precise causal weights; public instrument-level trade cards; automated catalyst promotion; the four feed-dependent desks; Phase-5 verticals.

---

## 6. Sequencing, shipping mechanics & risks

**Phase order (owner-set):** 1 Skeleton → 2 Rename → 3 Content → 4 New. Phases 1–2 are mostly structural/low-risk and can largely ship in the **interim** (no URL moves). Phase 3 is the heavy editorial lift. Phase 4 is deferred.

**Shipping mechanics (from the build's working rules):**
- Do site edits on the **`p0-s01-design-tokens` design branch** in `vegaready/`; main-branch work happens in the `vegaready-main` worktree.
- **Build-verify before any push to `main`** (`npm run build` host-side) so a broken page never deploys.
- Commit by **explicit paths only** (never `git add -A`); never run git from the sandbox. Owner deploys, or the agent ships host-side via Desktop Commander under those guardrails.
- **Generated modules are never hand-edited** — edit canonical JSON + the generator, then `node scripts/build-cascades.cjs`.

**Top risks & mitigations:**
1. **Breaking the 3×/day dashboard pipeline.** Mitigation: interim moves zero dashboard URLs; at target cutover, re-host the same React island + same data imports — the build/publish scripts are route-agnostic; add 301s in lockstep.
2. **SEO churn from URL moves.** Mitigation: one clean 301 migration, never repeated; prominence runs on the lifecycle flag, not the URL.
3. **Stale "Live" claims.** Mitigation: the Phase-3 freshness fix is also a correctness fix; do it early.
4. **Dual-mode retrofit cost.** Mitigation: the token layer + the existing `taxonomy.json` epistemic types make dual-mode a render-time resolution, not a content fork.
5. **Empty-desk credibility risk in Phase 4.** Mitigation: honest stubs + qualification thresholds gate every new surface.

---

## 7. Decisions — confirmed 2026-06-09 (resolutions in §8.1)

These were the open decisions; **all ten are now confirmed by the product owner.** They are listed below as the original *questions* for reference; the confirmed *resolutions* and the structural changes they trigger are in **§8**. (IDs for reference.)

- **D-IA1 — Scenarios grouping:** fold Transmission/Connections/Outlook into Market Impact + dossier (recommended) **vs** a dedicated `/scenarios/` top-nav domain.
- **D-N1 — Brand statement:** confirm P1 (+ P5 sub-line) vs P2–P7.
- **D-N2 — Product modes:** confirm Overview / Analyst Desk (M1).
- **D-N3 — Dossier titles:** confirm the dual public/analyst titles + route IR1.
- **D-N4 — Top-nav labels:** confirm the R3 dual-mode label set.
- **D-N5 — "Who Profits" public label:** "Winners, Losers & Market Effects" vs "Opportunities & Risks."
- **D-S1 — Signals home:** promote `/structural/watch/` to `/signals/` (recommended) vs keep both.
- **D-F1 — freshness.js:** move it into the generated set (recommended) vs keep hand-authored.
- **D-C1 — Active-catalyst module placement** on permanent pages: top (catalyst-first, while hot) vs bottom (structure-first).
- **D-M1 — 301 cutover trigger:** the lifecycle threshold (e.g., flip at "Normalizing") that authorizes the `/dashboard/*` → `/catalysts/*` migration.

### Immediate next step
On confirmation of the §7 decisions (especially D-IA1, D-N1–N4), Phase 1 interim work can begin: build the `naming.ts` token layer, the mode toggle / breadcrumbs / active-catalyst components, the `/today/` + `/catalysts/` + `/signals/` pages, and relabel the dashboard cluster — all without moving a single live URL.

---

## 8. Revision 2 — confirmed decisions, credibility/governance additions, Scenarios redesign (2026-06-09 pm)

*This revision is authoritative where it conflicts with §1, §2.1, or §7. It (a) records the ten confirmed decisions, (b) reverses the scenarios-grouping call to a dedicated home, (c) folds in five credibility/governance gaps found in QC against the source doc, (d) adds the Scenarios & Outlook design with the expectations feature, (e) registers the deferred workstreams, and (f) captures the branding directive.*

### 8.1 The ten decisions — confirmed resolutions

| # | Decision (plain) | Confirmed resolution |
|---|---|---|
| 1 | Where the "thinking" layer lives | **Keep a dedicated top-level "Scenarios & Outlook" home** (reverses the earlier fold-in recommendation; restores the Phase-1 grouping). It holds Connections (causal map), Transmission (how shocks spread), and Outlook (scenarios), organized **by status**, with the expectations layer. See §8.3. |
| 2 | Brand statement | **P1** — *"VegaReady maps how catalysts become market regimes"* — with a plain-language second line. Copy, changeable anytime. |
| 3 | Product modes (the toggle) | **Overview / Analyst Desk.** |
| 4 | Dossier title + address | Titles: Overview **"Iran–Gulf Conflict 2026"**, Analyst **"Iran–Gulf Conflict & Hormuz Disruption."** Web address **locked**: `/catalysts/iran-gulf-conflict-2026/`. Titles stay flexible. |
| 5 | Top-menu wording | The dual-mode label set (§1 R1/R3). Modifiable via the naming token layer. |
| 6 | "Who benefits" section name | Overview **"Winners, Losers & Market Effects"** (with a visible disclaimer) / Analyst **"Beneficiaries & Trade Expressions."** Demoted from top nav. |
| 7 | Live-indicator board | **Promote to a top-level `/signals/` page.** |
| 8 | "Last updated" date | **Auto-generate from the data** (also fixes the current stale/incorrect "Live" claim). |
| 9 | "What the conflict is doing now" box placement | **Top while hot**; auto-drops to bottom later via the lifecycle/featured flag — no permanent choice needed. |
| 10 | When to move the war content's URLs | **One deliberate move during the rebuild**; `/dashboard/*` stays canonical until then; the lifecycle flag keeps it front-and-center regardless of address. |

### 8.2 Updated top-level IA (supersedes §2.1)

Reading flow now mirrors your analytical path — **catalyst → hypothesis → outcome**:

> **Today · Market Regime\* · Catalysts · Scenarios & Outlook · Market Impact · Countries & Regions · Structural Risks · Signals · Research · About** + the **[Overview ⇄ Analyst Desk]** toggle.

\*Market Regime remains Phase-4 content — a thin/deferred entry in the interim, not an empty desk. *Catalysts* (what changed) → *Scenarios & Outlook* (what could happen / what's priced in) → *Market Impact* (where it reprices) is the spine.

### 8.3 NEW SECTION — Scenarios & Outlook (the forward-looking / expectations layer)

The home for the "thinking" layer, built on the **existing** scenario-state ledger (`scenario-states.json`) and forward-catalyst register (`catalysts.json`) — under-used until now.

- **Organized by status, not topic:** *Potential → Developing → Realized → Normalizing.* A scenario is never on/off.
- **Multi-state decomposition:** each scenario carries separate physical / legal / policy / insurance / logistics / financial-market / economic / normalization states, each with its own confidence — the source's "a scenario is never one switch," made universal (source §8.6).
- **The expectations feature (our addition, beyond the source):** explicitly show *what the market currently prices in* and *flag when the expectation itself moves* — "priced-in vs. change-in-expectation." A risk that never materializes still moves markets via expectation; this surfaces that. Candidate implementation: an **"expectations" signal class** on the Watch Board, and an expectations state on each scenario object.
- **Contains:** Causal Map (Connections / field-of-forces), How It Spreads (Transmission), Scenarios (Outlook), Precedents, Infrastructure, Nuclear. *(Labels modifiable.)*
- **Effect:** preserves the catalyst → hypothesis → outcome journey as an actual navigable path instead of scattering it across reporting sections.

### 8.4 Credibility & governance additions (folded into the build phases)

1. **"Do not dilute" guardrail (Phase 0 constraint, source §2.2).** Protect existing strengths during the rewrite: the sharp editorial headlines, long-form depth, causal-network framing, sector asymmetry, source discipline, and the understated-but-visible JCJ connection. The restructure changes packaging, not substance.
2. **Accuracy reconciliations (Phase 3 pre-launch pass, source §5.2 / Appendix C).** Fix the specific factual contradictions before driving traffic: the BTC safe-haven self-contradiction, the Hormuz physical-vs-economic state inconsistency, pipeline-bypass capacity, the standard-vs-distressed war-risk premium split, and source-tier standardization. Plus staging hygiene: finish/`noindex`/remove the prototype `/edition-*` material and the half-finished `/outlook/infrastructure/` stub.
3. **Evidence-and-confidence discipline (cross-cutting, source §8.4).** Treat three things as distinct — *source tier* (how authoritative), *data confidence* (how reliable the number), *attribution confidence* (how sure the catalyst caused the move) — plus evidence states (confirmed / reported / estimated / modeled / scenario / illustrative / quarantined), surfaced as dual-mode badges. This is what makes the Scenarios layer honest (a "potential" scenario is a visibly low-evidence object).
4. **Analytical spine + competing drivers (source §9.6 / §10.6).** Formalize **catalyst → upstream sensor → transmission → financial conversion → positioning → portfolio impact** as the site's explicit spine, and on every causal claim name the *competing drivers* and an explicit *residual* rather than implying one event explains everything (Connections already does this with 9 weighted edges). Expectations live here naturally — as one driver among several.

### 8.5 Deferred-workstreams register (tracked, not lost)

Real items from the source that are Phase-4+/backend and intentionally out of the near-term build, recorded so they aren't dropped:

1. **Full visibility model / internal split (source §8.1–8.2, §12.1).** Beyond the two public reading modes, the internal layers where trade instrument, direction, sizing, and factor weights stay private to JCJ — the "intelligence is open; the engine is ours" boundary.
2. **Substitution & Normalization framework (§8.7)** — a reusable module (what's missing, what replaces it, how fast, hidden constraints, what happens on return); the "return path" half of the scenarios lifecycle.
3. **Data-architecture honesty (§9.3–9.4)** — vintage-aware storage (never overwrite a revised value over the original, for honest backtesting) + source-rights/licensing metadata on every source from the start.
4. **Data-sourcing strategy (§6, §9.10)** — phased vendor plan: free/public (FRED, EIA, IMF PortWatch, CFTC) → commercial → specialist.
5. **Living pre-launch QA checklist (§11).**

### 8.6 Branding & visual system directive

`/edition` is the branding system, and its structure is explicitly **modifiable**. From here on, each page we build may use **any brand-compliant color combination chosen for that page's context** — drawn from the approved theme register (`_program/APPROVED-THEMES.md`: the dark-primary WB5 line + the L1 light alternate already in `global.css`) and the `/edition` lab formulas. I'll select context-appropriate combinations at build time and they remain changeable later. No page is locked to a single palette.

---

## 9. Revision 3 — design-system port, cross-asset markets, gap-closure, navigation rule, effort standard (2026-06-10)

*Authoritative over earlier sections where it conflicts. Captures everything learned building the design system and the markets flagship.*

### 9.0 The effort standard (non-negotiable)
Every page and deliverable from here gets **100% effort**: take the time, do the best work, no shortcuts, no generic templates, no copying a test page. Specifically — **(a)** work from the *rendered* design references (`_program/edition/*.html`), not just the written laws; **(b)** ground every page in **real data**, with placeholders only where a feed genuinely doesn't exist yet, and always honestly labeled; **(c)** build the system first, then compose pages from it — never hand-roll ad-hoc CSS; **(d)** verify on the live preview and review with the owner before moving on. If a page reads as flat, monochrome, war-only, or placeholder-only, it is not done.

### 9.1 The design system is the foundation
The approved design is the **`_program/edition/desk.html` (t1 Oxford)** system, now ported to **`src/styles/desk.css`** (self-contained): gold (`--eyeb`) = eyebrow / emphasis / CTA frame; verdigris (`--struct`) = structure; cobalt (`--data`) = data series; cream ink for headings; **`#131E32` cards** on the navy canvas; the section composition (utility → masthead → hero+deskpanel → ledger → stat strip → anchor → bleed → geo → funnel → footer). **All new/rebuilt pages compose from `desk.css`.** The legacy `global.css`/`Header.astro` is superseded for ported pages; nav unifies onto the desk masthead.

### 9.2 The markets page is a CROSS-ASSET hub, not a single-catalyst desk
`/markets` reads the whole market — Equities, Rates & Liquidity, Credit, Dollar & FX, Commodities/Energy, Volatility, Crypto — with catalysts (Iran–Gulf among them) as **drivers**, not the subject. Hub sections: the cross-asset **board** (asset-class tiles), the **twelve desks** (links), **drivers/catalysts**, the **repricing tape**, the **funnel**. The per-asset-class desk (energy-style) is the **subpage** template (`/markets/<asset>`).

### 9.3 Wire to the real data that already exists, first
The watch registry (`watch-metrics.json`, **33 status-stamped signals**) already covers ~80% of the cross-asset board and refreshes 3×/day — DXY 100.53, EMBI +35bps, OVX 58, VXEEM 35.3, BTC-ETF flow −733$m/day, GCC TASI–DFM 21ppts, flight-to-quality 70.7$bn/wk, gold $4,099, etc. Use it (build-time). **Genuine feed gaps** (need external feeds / the D1 layer): the **rates curve** (10Y, 2s10s, real yields), **equity-index spot**, **FX spot**, **crypto spot**. Placeholders live only there, labeled "feed pending."

### 9.4 Gap-driven product additions ("so many other things")
Add to the markets/product surface: **sector/factor heatmap** (seed from factor-rotation + dispersion + TASI–DFM), **catalyst/economic calendar** (from the forward-catalyst register), **regime/correlation matrix** (from cross-asset data), **movers**, **positioning & flows**, an inline **top-signals strip**, and the **derived indices** (Global Liquidity Pressure, Physical Constraint — computed from signals already held).

### 9.5 Functional / system layer
Real charts (sparklines from metric history; or approved chart widgets) replacing illustrative SVGs · a **multi-facet filter / sort / search / expand** island for data-dense surfaces · the **Overview ⇄ Analyst** mode toggle · functional **⌘K** search · the **three freshness fields** per page (page-updated / data-through / next-refresh) and the stale-date fix.

### 9.6 Navigation rule (governing — apply everywhere)
Three patterns, chosen by content weight + reusability + whether context matters:
1. **Dedicated subpage (own URL)** — canonical topics with standalone content that need SEO/shareable/**trackable** URLs and are referenced from many places. Default for the twelve desks, dossier tabs, structural risks, and each catalyst.
2. **Expand-in-place (drawer/accordion)** — a quick look in context, with a "→ open full" link to the subpage. The three-grain "expand then link out."
3. **Anchor-scroll** — only to move between sections *within a single page*.
**Avoid the monolith** (distinct topics as `#anchors` on one mega-page — kills SEO, focus, load, tagging). A **catalyst click goes to the dossier page** (whose aspects are subpages/tabs), never a scroll-to-mega-page.

### 9.7 Data architecture
Tagged-object model → **Cloudflare D1** (free tier confirmed) as the warehouse for filtering, the "trackable in many places" tagging, and scale. JSON now → D1 later; design the model so the migration is clean.

### 9.8 Process learnings (don't repeat)
`astro dev` crashes on atomic file-writes (Vite watcher, Windows) and dies if a build runs concurrently. Workflow: edit → **restart the dev server** (or verify via a one-off build, then serve) → keep the live preview up for the owner on every change.

### 9.9 Current state
**Done:** `naming.ts`; `/today` (v1, real regime data); `/catalysts`; `/signals`; **`desk.css` ported**; **`/markets-desk` cross-asset hub** (the approved direction). **Next:** the Track D build sequence in the Execution Plan.

### 9.10 Market-desk QC findings (equities review, 2026-06-10) — folded into D3/D8
Reviewing `/markets/equities` confirmed the legacy `/markets/*` pages are **not** on the design system: they use the old `--cyan` accent **plus hardcoded generic hexes** (`#10b981` green · `#ef4444` red · `#f59e0b` amber · `#6366f1`/`#818cf8` indigo · `#a78bfa` purple · `#60a5fa` source-links) — the rejected palette. The content underneath is strong (scenario regime, index-shock map, sector winner/loser, earnings transmission, factor rotation, country matrix, GCC asymmetry, flows, scenario trade map, precedent compendium, confidence registers, data-quality footer) and must be preserved. The **equities page is the reference case and the D3 template.** Newly explicit requirements (added to D3/D8):
- **Eradicate every hardcoded hex** into role tokens when porting each page (enforce the contract's "no colour literal outside the token layer"): cyan→`--eyeb`, winner/loser green-red→`--pos`/`--neg` (muted, not neon), amber→`--warn`, indigo/purple→`--data`/annotation, source-link blue→`--struct`.
- **Surface the live watch signals on each desk** (the registry carries per-section signals — equities = factor unwind, dispersion, GCC TASI–DFM).
- **Real three-field freshness**; kill the per-page stale "as of May 29."
- **Humanize machine labels** (`hormuz_closure` → "Hormuz closure", etc.).
- **30-second summary** atop each long desk (progressive disclosure).
- **Governance (new, extends §8.2 + §10.8 from `/profits` to the market desks):** the desk pages currently print **instrument-level trade maps** (Long/Short + specific instruments) on the public surface. Move these behind the **Analyst tier** with a boundary disclaimer; the public Overview shows scenario implications and beneficiaries, not directional instrument calls.
- **De-confliction (D8):** separate the durable equity framework (sector/factor rotation mechanics, GCC structure, earnings transmission) from the Iran-specific repricing (three-grain).

### 9.11 Corrected desk template (post-equities audit, 2026-06-10)
The first equities port was visually right but semantically half-built — Analyst-only, conflict-framed, undefined winner/loser, no competing-drivers. Owner direction sharpens the template:
- **Segregate by catalyst vs market.** Each desk carries a **durable, catalyst-neutral spine** (sector *sensitivities*, factor mechanics, structural maps) in its own tables, and a **separate, badged active-catalyst overlay** (Iran–Gulf: the repricing, the bifurcation, the scenario tables, winner/loser *under this catalyst*). Never one table that conflates the two. (Promotes the de-confliction framing from D8 into the template.)
- **Build the two modes one at a time.** Analyst first, full effort; then the Overview (plain-language) version as a separate fresh pass; then wire the toggle. Not both crammed at once.
- **Define every label.** Winner/loser = "winners/losers of the active catalyst's repricing in the realized scenario; sectors flip across scenarios" — shown scenario-conditional, never as an absolute.
- **Name competing drivers + residual** on headline claims (equities move on rates / AI-capex / earnings / positioning *and* the catalyst).
- **Glossary tooltips** for jargon; **evidence labels** (observed vs interpretation; the three confidences) on key claims; real 30-sec → 3-min → deep disclosure.
- **Content-semantics gate** (every label defined · every claim scenario-tagged + observed-vs-interpretation · competing drivers named · jargon glossed · both modes present) — must pass before any desk is "done."

