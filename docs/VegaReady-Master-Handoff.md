# VegaReady — Master Handoff (read this first)

*This is the complete onboarding for a new agent continuing the VegaReady build. It explains what the product is, how it's built, the environment quirks that will bite you, the data model, everything done so far, everything planned, and exactly how the owner works. Read it top to bottom before touching anything. When in doubt, re-read §4 (quirks) and §10 (workflow) — those cause the most mistakes.*

**Owner:** JCJ Investing (Dubai event-driven crypto/macro fund). Contact in the app: GP@jcjinvesting.com.
**Live site:** https://vegaready.com (served by a Cloudflare Worker, `vegaready.royal-rice-7384.workers.dev`).
**Date of handoff:** 2026-06-02.

---

## 1. What VegaReady is (product & vision)

VegaReady is an **event-driven market-intelligence platform.** Its first fully-worked subject is the **Feb–May 2026 Iran–US–Israel Persian Gulf conflict**, traced across every market and real-economy layer it touched. But the conflict is a **prototype, not the product.**

**The ultimate goal:** a general, **multi-driver, event-driven causal-intelligence platform** — a "field of forces" where many drivers (geopolitical conflict, monetary/trade policy, technology shocks, supply shocks, pandemics, elections, climate) are each researched to the same standard, connected through one attribution-disciplined causal graph, and surfaced as monitorable, tradable signals. A user travels from a top-level driver down to a specific, dated, falsifiable trade — and back up to see what's *really* moving a market. The shift underway is **research archive → live event-intelligence product.**

**Three purposes at once (owner-confirmed):** a credibility **showcase** for JCJ (LPs/investors), a **product** for clients/subscribers, and an **internal desk tool.** NOT a mass-market public good.

**The dual-mode design (owner-confirmed, central to all future UX):** a **Simple / Analyst toggle.** "Simple" (default front door, non-specialists/clients) = plain-language, jargon glossed, summary-first, cascade-guided. "Analyst" (persistent toggle, institutional + internal desk) = full density, tables, source tiers, signals, machine-readable exports. *Two displays of one corpus.* Every future page must render meaningfully in both modes from the same content. (Full detail: `docs/VegaReady-Vision-Audiences-Context.md`.)

**The governing principle, everywhere:** honesty over false precision. Nothing claims proven causation. Correlation is not causation. Every numeric anchor is source-tiered; every causal claim is a weighted hypothesis with named competing drivers + an explicit residual.

---

## 2. The two repositories & the architecture

There are **two repos**, both on the owner's Windows machine. You edit files via the file tools (Read/Write/Edit on `C:\…` paths); the owner runs all git/builds/deploys.

1. **`C:\Users\cwm4t\ClaudeCode\IranWarTracker`** — two roles:
   - The **canonical research data** home: `data/cascades/*.json` (the single source of truth for all analysis content) + `docs/` (all the planning/reference docs, including this one).
   - The **original "Iran War Tracker" Express app** (port 8080) that produces the live *dashboard* data. Its `CLAUDE.md` describes that Express server — mostly irrelevant to VegaReady work *except* that its data feeds the VegaReady dashboard (see §3). Don't confuse the two; your work is the `data/cascades` JSON + `docs`, not the Express server.

2. **`C:\Users\cwm4t\ClaudeCode\vegaready`** — the **Astro 6 site** deployed to Cloudflare Workers. This is the actual website. Pages in `src/pages/`, components in `src/components/`, data modules in `src/data/analysis/`.

**The single-source pipeline (memorize this):**
```
IranWarTracker/data/cascades/*.json   (canonical research — you edit THIS)
        │   vegaready/scripts/build-cascades.cjs  (the generator)
        ▼
vegaready/src/data/analysis/*.js       (GENERATED — never hand-edit)
        │   imported by
        ▼
vegaready/src/pages/*.astro            (the rendered pages)
```
Rule: **edit the canonical JSON, then regenerate. Never hand-edit a generated module.** EXCEPTIONS — three modules in `src/data/analysis/` are **hand-authored synthesis, NOT generated** (no canonical JSON, edit them directly): **`connections.js`** (the causal-edge map/registry), **`profits.js`** (Who Profits), **`freshness.js`** (the global "as of" banner). Everything else in that folder is generated.

**The dashboard data path (separate):** the `/dashboard/*` pages are a client-only React app (`src/components/dashboard/iwt/WarTracker.jsx`). Its content comes from `src/data/iwt-bundle.json`, which is built at build-time by `scripts/build-data.cjs` reading the IranWarTracker repo's data (54 arrays). You generally don't edit the dashboard content; it flows from IranWarTracker.

---

## 3. Tech stack & the exact build/deploy commands

- **Astro 6.4.2**, `@astrojs/cloudflare 13.6.0`, `@astrojs/mdx 6`, React 19 (dashboard island, `client:only`), TypeScript. Deployed as a **Cloudflare Worker with static assets** (fully static build; no SSR).
- **`npm run build`** = `node scripts/build-data.cjs && astro build`. (build-data.cjs bundles the IWT dashboard data → `src/data/iwt-bundle.json`; then Astro builds.) Output goes to `dist/client/` (HTML/assets) + `dist/server/` (empty for this static site). The adapter auto-generates `dist/client/wrangler.json`.
- **`npm run deploy`** = **`wrangler deploy -c dist/client/wrangler.json`** (note the `-c` — it uses the adapter-generated config, which correctly points assets at `dist/client`. A plain `wrangler deploy` would 404).
- **Regenerate analysis modules** (after editing canonical JSON): from the vegaready repo, `node scripts/build-cascades.cjs` (it reads `../IranWarTracker/data/cascades` by default; override with `CASCADES_DIR=<path>`).
- **`SESSION` KV namespace:** Astro 6's Cloudflare adapter auto-enables sessions and wants a `SESSION` KV namespace. The existing namespace id (`859e60a0ee5e4676bad7937843990908`) is pinned in the **root `wrangler.json`** under `kv_namespaces` so deploys reuse it. **Do not remove that** — without it, deploys fail with `code 10014` "namespace already exists." If the id ever errors as not-found, run `npx wrangler kv namespace list`.
- **`NODE_ENV` is `production` globally** on this machine → `npm install` skips devDependencies (like `wrangler`). To install dev deps: `set NODE_ENV=development && npm install`.
- Build warnings to **ignore**: the `WarTracker.jsx` chunk-size warning (it's the 526 KB dashboard React app, ~105 KB gzipped, dashboard-only — leave it; do NOT split it, see the chat history reasoning), and the `punycode` DeprecationWarning (a transitive build-tool dep, harmless, not your code).

---

## 4. CRITICAL environment & workflow quirks (this section prevents 90% of mistakes)

These are non-obvious and have caused real failures this session. Internalize them.

1. **You cannot build/deploy. The OWNER does, host-side.** You never run `npm`/`git`/`wrangler`. You make file changes, then hand the owner **exact, copy-pasteable command blocks**. The owner pastes only what you give them. So: if a commit is needed, you must give the precise commands.

2. **The bash mount truncates large files on READ.** There's a sandboxed Linux mount (the `mcp__workspace__bash` tool) where the repos appear under `/sessions/<id>/mnt/…`. **Large files (e.g. `build-cascades.cjs`, `package.json`, big `.astro`/`.js`) often read back TRUNCATED on this mount** — you'll see a file cut off mid-line, or `</style>=0`, or a JSON "unterminated string" error. **This is a read-cache artifact, not real corruption.** The **file tools (Read/Edit/Write on `C:\…` paths) read the real host files reliably.** So: to verify a file is complete/correct, use the **file-tool `Read`** on the `C:\…` path, NOT bash `cat`/`wc` (which may show the truncated mount copy). When a verification via bash looks truncated, confirm with the file tool before concluding anything is broken.

3. **Writing reliably.** The file tools (Write/Edit) write to the host correctly. For programmatic generation (Python building a JSON/JS/manifest), write to `/tmp/x` then `cp /tmp/x <target>` on the mount, and verify with `node -e "import('/tmp/x.mjs')…"` or `git hash-object`. If you Edit a large generated file via the generator and the mount copy reads truncated, the **host file is still fine** — the host build will use it.

4. **You can't run `astro build` in the sandbox** (no `node_modules` reliably, and `package.json` reads truncated → `ERR_INVALID_PACKAGE_CONFIG`). So you **cannot fully verify a `.astro` page compiles.** What you CAN do: verify the **data modules** import cleanly (`cp module.js /tmp/x.mjs && node -e "import('/tmp/x.mjs').then(...)"`), and structurally check `.astro` files (balanced `<AnalysisLayout>`, closed `<style>`, imports resolve). **The host `npm run build` is the real gate.** Work in a **tight loop**: make a change, have the owner build, paste errors, fix — one step at a time rather than batching big changes.

5. **Git: commit by EXPLICIT file paths, never `git add -A`.** The working tree shows tons of files as "modified" due to LF↔CRLF line-ending normalization (Windows). `git add -A` would sweep that noise into commits. Always give the owner `git add <specific paths>` for exactly the files you changed.

6. **Don't paste blocking commands into a running build.** `npm run build` and `npx astro preview` are long/blocking. If you give a multi-line block, the owner's paste can interleave with the still-running build (it happened). Give the **build command first**, tell them to wait for `Complete!`, then give deploy/commit as a **separate** block. Never mix `npx astro preview` (a blocking server) into a deploy block.

7. **Deploy ≠ commit ≠ build.** The flow is: `npm run build` (host) → check → `npm run deploy` (uploads `dist/client`) → `git add <paths>` + `git commit`. The owner controls when each happens.

---

## 5. The data model (what lives where)

### 5.1 Canonical content — `IranWarTracker/data/cascades/*.json` (27 files)
Per-section research: `equities.json`, `crypto.json`, `credit.json`, `insurance.json`, `property.json`, `labor.json`, `foodag.json`, `water.json`, `energytransition.json`, `defense.json`, `crossasset.json`, `sectors.json` (→ Transmission), `regions.json` (→ Exposure), `dynamics.json` (→ Outlook), `nuclear.json`, `chokepoints.json`, `weaponization.json`, `deglobalization.json`, `digital.json`, `foodresilience.json`, `structuraloverview.json`.
Cross-cutting registries: **`taxonomy.json`** (controlled vocab: source tiers, scenarios, **driverClasses**, **drivers**, **attributionStandard**), **`watch-metrics.json`** (the 33-metric signal registry — 30 catalog signals + 3 supplementary), **`scenario-states.json`** (the scenario-state ledger), **`catalysts.json`** (forward-catalyst register), `scenario-status.json`.

### 5.2 The generator — `vegaready/scripts/build-cascades.cjs`
Reads each canonical JSON and emits the matching `src/data/analysis/*.js`. Uses helpers: `flatCard` (maps a canonical card's `data{}` → display fields + lowercases confidence; card `sources` are **objects** `{name,url,tier}` so source links render `href={u.url}`), `rd`/`out`/`banner`. Emits the watch registry with a `statusOf` comparator (directional: `above` trips on a rise, `below` on a fall), `signalCatalog`, `bySection`, `byPage`, `signalsForPage()`, plus the scenario-states and catalysts modules.

### 5.3 The card schema (per analysis card)
`{id, title, category, summary, data{label:text}, sources[{name,url,tier}], confidence, tags}`. Phase A added the **attribution layer** to causal edges (in `connections.js`): `driverClass`, `attribution{strength: primary|partial|marginal, confidence}`, `competingDrivers[{driver,cls,note}]`, `residual`, plus `activation`/`invalidation`/`shareRank` (P3) and `maturity` (Tracked=`built`/Proposed=`pending`) + `contrarian`. Watch metrics carry `value`, `value_type` (current|current_period|baseline), `baseline`, `direction`, `thresholds{watch,alert,critical}`, `stale_after`, `scenario_mapping`, `classification` (predictive|confirming|coincident), `lead_lag`, `assets`, `false_positive`, `source{name,url,tier}`, `confidence`, and **`trade_expression{instrument,direction,hedge,horizon,status:'first-pass'}`** (the trade layer — first-pass, pending owner's house conventions, esp. crypto).

### 5.4 Hand-authored modules (edit directly)
- **`connections.js`** — `intro`, `themes[6]` (the physical-cascade threads), `causalIntro`, `causalUmbrella` ("every edge is a hypothesis…"), **`causalLinks[9]`** (the cross-section causal edges with full attribution), `attributionLegend`, `driverRegistry`, `scenarioAttribution`.
- **`profits.js`** — `intro`, `groups` (beneficiaries).
- **`freshness.js`** — `freshness.asOf` (the global "Live · as of …" banner — currently a **hardcoded stale date**, a known quick-win fix), scenario chips, anchor chips.

### 5.5 The machine-readable export
`vegaready/src/pages/signals.json.js` — a static Astro endpoint prerendered to `/signals.json`, exporting the full watch registry + signalCatalog + scenarioStates + catalysts.

---

## 6. Content & information architecture

**10 research sections** → mapped to pages (see `docs/VegaReady-Site-Manifest.md` for every route + content):
§1 Gold/FX → /markets/gold-fx · §2 Credit → /markets/credit · §3 Insurance → /markets/insurance · §4 Property+Labor → /markets/property, /markets/labor · §5 Food+Water → /markets/food-agriculture, /markets/water · §6 Energy/Nuclear/Defense → /markets/energy, /markets/defense, /outlook/nuclear · §7 Structural → /structural/* · §8 Equities → /markets/equities · §9 Cross-Asset → /markets/cross-asset · §10 Crypto → /markets/crypto.

**3-tier IA (current, 11 flat top-nav tabs in `src/components/Header.astro`):**
- **Dashboard** (`/dashboard/*` — React, client:only): gulf, iran, israel, us, markets, economics, casualties, analytics, sources.
- **Markets** (asset + sector pages, grouped Financial markets / Real economy / Cross-asset): the 13 sub-pages above + the `/markets` overview (which carries the **scenario-state ledger**).
- **Standalone lenses:** Transmission, Exposure, Outlook (+ precedents, infrastructure, nuclear), **Structural Risk** (+ chokepoints, weaponization, deglobalization, digital, food, **watch** = the live Watch Board), **Connections** (the causal-edge registry + attribution + driver registry), **Who Profits**. Plus Briefings, About, and `/signals.json`.
- ~44 routes total.

**`SignalPanel.astro`** (`src/components/`) renders a page's tradable signals (status, classification, thresholds, lead/lag, assets, false-positive, trade_expression) — dropped onto 17 section pages via `<SignalPanel page="/…" />`, single-sourced from `watchmetrics.js`.

---

## 7. The epistemic discipline (the platform's soul — never violate)

- **Source tiers** T1 (named primary) / T2 (secondary/press) / T3 (proxy/estimate). Aggregators are never T1. Flags: `PROVISIONAL`, `PROXY`.
- **Four scenarios:** `hormuz_closure`, `oil_strike`, `cable_severance`, `ceasefire`. Everything is scenario-tagged. Tones: hormuz `#ef4444`, oil `#f59e0b`, cable `#22d3ee`, ceasefire `#10b981`.
- **Two confidences, never blended:** *data confidence* (is the number sound) vs **attribution** — `strength` (primary/partial/marginal = how much the conflict owns) and `confidence` (how sure of that). Plus named `competingDrivers` and an explicit `residual` (named drivers never sum to 100%).
- **Causal-edge status:** **Tracked** (observed in data we follow) vs **Proposed** (a reasoned mechanism not yet observed). Some are **contrarian** (probe a link the source report denies). Governing line on Connections: "every edge is a hypothesis… nothing claims proven causation; 'Tracked' means we observe it, not that we've proven it."
- **Driver ontology** (`taxonomy.json`): 10 driver classes; the Iran-Gulf conflict is **driver instance #1, the only one populated**; 7 others (us-monetary-fed, us-trade-policy, china-statecraft, opec-supply-policy, cb-reserve-diversification, post-covid-regime, ai-capex-cycle) are **registered but not populated** — they appear as competing drivers on edges and are the Phase-B build queue.
- **Forward catalysts** (`catalysts.json`): "discussed/announced-not-committed" events tracked as triggers, never scored as facts (ESF swap, PIF reallocation, Iran frozen-asset release, Saudi-123, CME 24/7, Project Waterworth).

---

## 8. What's been built (the state, so you know where to pick up)

1. **The corpus** — all 10 sections + the dashboard. Complete.
2. **Phase A (positioning)** — the driver/attribution ontology; the attribution layer (competing drivers + residual) on every causal edge; the 30-signal catalog; the live Watch Board (`/structural/watch`). The data model is multi-driver-ready; the UI is still conflict-centric.
3. **Astro 5 → 6 upgrade** — done (cleared 7 npm-audit advisories; config migrated; SESSION KV fix). Deploys via `wrangler deploy -c dist/client/wrangler.json`.
4. **Productization (P1–P5 + trade_expression)** — the "archive → live product" bridge: `value_type`/`baseline`/`stale_after` freshness schema on all metrics; the **scenario-state ledger** (`/markets`); the **forward-catalyst register** (`/structural/watch`); the **`/signals.json`** export; the sortable **causal-edge registry table** (Connections, with activation/invalidation); **trade_expression** (first-pass) on all 30 signals rendered on the signal panels.
5. **Two adversarial audits** — an internal intelligence-gap audit (`docs/VegaReady-Intelligence-Gap-Audit.md`) + an external one (run by the owner via `docs/VegaReady-Reviewer-Context-Prompt.md`); they converged strongly. Three confirmed data fixes applied (BTC risk-off on precedents; Hormuz watch metric realized 14.6; bypass capacity reconciled).
6. **UX/IA review + the design-audit package** — an external newcomer/UX audit was triaged (`docs/VegaReady-UX-IA-Review.md`); and a **3-doc design-audit package** was prepared for a fresh reviewer: the prompt (`VegaReady-FullSite-Design-Audit-Prompt.md`), the deep content manifest (`VegaReady-Site-Manifest.md`, 202 KB — every route/card/dashboard-array + the existing 209-term glossary), and the vision/audiences brief (`VegaReady-Vision-Audiences-Context.md`, with the dual-mode decision).

Everything above is **deployed and committed.** The site is in a clean, fully-shipped state.

---

## 9. The roadmap (what's planned / pending)

### Research-gated (need an external research run before building honestly)
- **C1 — substitution & beneficiary depth** (task #104): crude-slate matrix (API/sulfur/refinery non-fungibility), LNG net-of-term, nutrient-specific fertilizer, a `returnCycle` field on every substitution claim; named investable winners (infra EPCs, defense component bottlenecks, crypto rails/compliance, heavy-sour suppliers, water-hardening). Both audits flagged these.
- **OPEC+ spare-capacity tracker** — the single biggest missing anchor; the oil-price-ceiling instrument. Both audits flagged it.
- **Phase B — populate the first non-conflict drivers** (US monetary/real-rates, China statecraft, OPEC+ supply) so the **field-of-forces view** (effect-centric nodes with multiple weighted inbound driver-arrows) becomes real. This is the strategic next phase. Until ≥1 non-conflict driver is populated, the field-of-forces would be "a field of one."

### UX track (build-ready; the dual-mode is the spine)
- **Quick-win defects (cheap, do first):** fix the **stale "Live · as of" date** in `freshness.js`; remove/roadmap the **"coming soon"** placeholders (Podcast, Technical Signals Feed, empty Briefings).
- **"Start here" page + plain-language hero + inline glossary tooltips** — the highest-value onboarding move. NOTE: the **209-term glossary already exists** in the dashboard data (`GLOSSARY_ENTRIES` in `iwt-bundle.json`) — surfacing it as tooltips is a wiring job, not a writing job.
- **The Simple / Analyst dual-mode toggle** — first-class, persistent UI; every page renders in both modes from one corpus (see §1 and the vision brief).
- **Nav restructure** — collapse the 11 flat tabs into ~5 cascade buckets (Start here · Live dashboard · The cascade · Impact · Who profits) with plain-English glosses + a "where am I in the cascade" breadcrumb.
- **Standardize summary-first rhythm** on every analysis page; **dashboard SSR/static fallback** (SEO/accessibility); **mobile reflow** check on wide tables.
- **Triage the full design audit** when the owner returns it (using the 3-doc package).

### Small / standalone
- **Catalyst Calendar / What-to-Watch** (task #58) — the forward time-axis; the catalyst register seeds it.
- **trade_expression refinement** — the owner will supply JCJ's house instrument conventions (esp. crypto via Deribit/perps vs COIN/MSTR); then update `watch-metrics.json` + regenerate. Draft: `docs/VegaReady-Trade-Expression-Draft.md`.
- **Freshness-refresh `.bat`** (task #34) — a scheduled Windows task to auto-refresh live anchors. Deferred.

---

## 10. How the owner works (collaboration workflow — follow this)

- **Discuss before building anything substantial.** For new sections/features the owner wants a **review → discuss options (pros/cons) → plan → build** rhythm. Don't jump to implementation on big changes; propose and confirm first. (For small fixes, just do them and show the command block.)
- **Use the task list** (TaskCreate/TaskUpdate) — the owner sees it as a widget. Track multi-step work; mark complete as you go; include a verification step.
- **Use subagents** for fan-out work (extraction, audits, verification across many files) — the owner explicitly prefers leveraging subagents/skills/MCPs.
- **Present files** with `present_files` after creating deliverables; keep the post-amble short.
- **The owner runs ALL git/builds/deploys host-side.** You provide exact command blocks (explicit paths, build-then-wait-then-deploy, never `git add -A`). The owner "only pastes what you tell them."
- **MAX DEPTH on content.** Standing directive: "I want everything, more detail, more data… no corners cut." Build at maximum depth — full tables, aggressive cross-enrichment, no trimming.
- **Honesty/epistemics are non-negotiable** (§7). When the owner pushes on framing (e.g. "correlation is not causation," labels like Tracked/Proposed), engage the philosophy and get it right — they care deeply about not overclaiming.
- **Memory:** persistent memory lives in two files (see §11). Update them when durable facts change.

---

## 11. Reference docs & memory (where everything is written down)

**`IranWarTracker/docs/` (read the VegaReady-* ones):**
- `VegaReady-Master-Handoff.md` — this file.
- `VegaReady-Vision-Audiences-Context.md` — vision, evolution, the dual-mode design, the three purposes.
- `VegaReady-Site-Manifest.md` — the 202 KB deep content inventory (every route/card/dashboard-array + glossary).
- `VegaReady-FullSite-Design-Audit-Prompt.md` — the prompt to run the full design audit (per-element, both modes).
- `VegaReady-Signal-Catalog.md` — the 30 cross-section tradable signals (9 fields each).
- `VegaReady-Intelligence-Gap-Audit.md` — the internal adversarial research audit (10 parts).
- `VegaReady-Reviewer-Context-Prompt.md` — context prompt used for the external intelligence review.
- `VegaReady-Attribution-Method.md` — the attribution/causality standard.
- `VegaReady-UX-IA-Review.md` — the triaged UX/IA review + the cascade-as-nav idea.
- `VegaReady-Trade-Expression-Draft.md` — the trade-expression draft for owner review.
- `Phase3-Cross-Section-Causal-Research-Brief.md` — the research brief for the 4 data-pending causal edges.
- (Older IWT-app docs `IWT_*`, `AUDIT_*` relate to the Express war-tracker, not VegaReady.)

**Persistent memory (auto-loaded each session, in the agent memory dir):**
- `vegaready-cascade-generator.md` — the data model, IA, the full build arc (Phase A, productization, the dual-mode decision). The most important memory.
- `vegaready-repo-edit-workflow.md` — the mount/git quirks, the Astro 6 upgrade + SESSION KV fix, the deploy command.

**`vegaready/CLAUDE.md` / `IranWarTracker/CLAUDE.md`** — project instructions (note the IWT one describes the Express app; vegaready's is the relevant one for the site).

---

## 12. New-agent onboarding checklist (do this, in order)

1. **Read this whole file**, then `VegaReady-Vision-Audiences-Context.md` (the vision/dual-mode) and skim `VegaReady-Site-Manifest.md` (so you know the content).
2. **Internalize §4 (quirks)** — especially: you don't build/deploy (the owner does); the bash mount truncates large files (verify via the file tool, not `cat`); commit by explicit paths; build-then-deploy as separate steps.
3. **Verify current state** before changing anything: confirm the repos are present (`C:\Users\cwm4t\ClaudeCode\IranWarTracker` and `…\vegaready`), and that the site is live. Don't assume — check.
4. **Confirm the owner's immediate goal.** The site is fully shipped; the open work splits into the **research track** (gated on an owner research trigger) and the **UX track** (build-ready, dual-mode). Ask which they want to advance — don't pick for them on a big direction.
5. **For any build:** edit canonical JSON (or the hand-authored module) → regenerate (`node scripts/build-cascades.cjs`) → verify modules import via node → structurally check `.astro` → hand the owner a **build command, wait, then deploy + commit** block (explicit paths). Keep a tight one-step-at-a-time loop.
6. **Never** hand-edit a generated module, use `git add -A`, claim a `.astro` builds without the owner's host build, or overclaim causation.

*Welcome aboard. The substance is strong and shipped; the next chapters are populating new drivers (research) and the Simple/Analyst dual-mode experience (UX). Build at depth, stay honest, and keep the owner in the loop on direction.*
