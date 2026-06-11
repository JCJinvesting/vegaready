# VegaReady — Master Handoff (read this first)

*Complete onboarding for an agent continuing the VegaReady build. It explains what the product is, how it's built, how to edit content and templates, the environment rules, the data model, the current state, what's planned, and how the owner works. Read it top to bottom before touching anything. When in doubt, re-read §4 (rules) and §10 (workflow) — those prevent the most mistakes.*

**Owner:** JCJ Investing (Dubai algo-trading / event-driven macro fund). In-app contact: GP@jcjinvesting.com.
**Live site:** https://vegaready.com (Cloudflare Worker with static assets).
**Date of handoff:** 2026-06-08. *(Supersedes the 2026-06-02 handoff, retained alongside this file for reference.)*

---

## 0. Template / content editing — START HERE

If your job is editing pages, content, or templates, this is the fast path. Details are in §2, §3, §5, §6.

**First, know where a page's content comes from** — there are four content homes, and you edit a different place for each:

1. **Analysis / markets / structural / outlook pages** → the content lives in a **generated module** in `vegaready/src/data/analysis/*.js`. **You never hand-edit those.** You edit the canonical research JSON in `IranWarTracker/data/cascades/*.json`, then regenerate (`node scripts/build-cascades.cjs`). See §5.1.
2. **Three hand-authored modules** — `connections.js`, `profits.js`, `freshness.js` (in `src/data/analysis/`) — are **edited directly** (they are not generated). `freshness.js` holds the site-wide "as of" banner. See §5.2.
3. **Home, About, and page hero/lead copy** → **inline** in the `.astro` file (`src/pages/index.astro`, `src/pages/about.astro`, and the frontmatter of each analysis page).
4. **Blog & Briefings posts** → markdown files in `src/content/blog/` and `src/content/briefings/`. Add a `.md`/`.mdx` file with valid frontmatter; it auto-lists. See §6.
5. **Dashboard pages** (`/dashboard/*`) → content flows automatically from the IranWarTracker data pipeline (§5.3). You generally don't edit dashboard content by hand.

**Templates/layout/styling:**
- Top navigation: `src/components/Header.astro`. Analysis sub-nav: `src/layouts/AnalysisLayout.astro`. Dashboard sub-nav: `src/layouts/DashboardLayout.astro`.
- Page shells/layouts: `src/layouts/` (`AnalysisLayout`, `DashboardLayout`, `BlogPost`).
- All colours/fonts/tokens: `src/styles/global.css` (single source — no colour/font literal belongs anywhere else). Dark by default; `[data-theme="light"]` is the light alternate.

**To ship a change:** edit files → the **owner** runs git host-side → **push to `main`** → Cloudflare rebuilds and deploys automatically (§3). You never run git/build/deploy; you hand the owner exact command blocks with explicit file paths.

---

## 1. What VegaReady is (product & vision)

VegaReady is an **event-driven market-intelligence platform.** Its first fully-worked subject is the **2026 Iran–US–Israel Persian Gulf conflict**, traced across every market and real-economy layer it touched. The conflict is a **prototype, not the product.**

**The goal:** a general, **multi-driver, event-driven causal-intelligence platform** — a "field of forces" where many drivers (geopolitical conflict, monetary/trade policy, tech shocks, supply shocks, pandemics, elections, climate) are each researched to the same standard, connected through one attribution-disciplined causal graph, and surfaced as monitorable, tradable signals. A user travels from a top-level driver down to a specific, dated, falsifiable trade — and back up to see what's really moving a market. The arc: **research archive → live event-intelligence product.**

**Three purposes at once:** a credibility **showcase** for JCJ (LPs/investors), a **product** for clients/subscribers, and an **internal desk tool.** Not a mass-market public good.

**Strategy positioning (owner-confirmed):** JCJ is primarily an **algo-trading fund**; the macro/fundamental intelligence is a **regime + basket-sizing filter, not the edge.** The public VegaReady layer is currently a **free-subscribe lead funnel** (readers → nurture → future exclusive tier → fund conversion). The public layer must never posture the open data as the secret sauce — "the intelligence is open; the engine is ours."

**The dual-mode design (central to all future UX):** a **Simple / Analyst toggle.** "Simple" (default front door, non-specialists/clients) = plain-language, jargon glossed, summary-first. "Analyst" (persistent toggle, institutional + internal desk) = full density, tables, source tiers, signals, machine-readable exports. *Two displays of one corpus.* Every future page should render meaningfully in both modes from the same content.

**Governing principle:** honesty over false precision. Nothing claims proven causation; correlation is not causation. Every numeric anchor is source-tiered; every causal claim is a weighted hypothesis with named competing drivers and an explicit residual.

---

## 2. The two repositories & the architecture

There are **two repos**, both on the owner's Windows machine under `C:\Users\cwm4t\ClaudeCode\`. You edit files with the file tools (Read/Write/Edit on `C:\…` paths); the **owner runs all git/builds/deploys.**

1. **`IranWarTracker`** — two roles:
   - **Canonical research data home:** `data/cascades/*.json` (the single source of truth for all analysis content) and `data/*.json` (the live dashboard ingest output). `docs/` holds the planning/reference docs, including this one.
   - The original **"Iran War Tracker" ingest pipeline** that produces and audits the dashboard data 3× daily (its `CLAUDE.md` describes that system). Its data feeds VegaReady's dashboard.

2. **`vegaready`** — the **Astro 6 site** deployed to Cloudflare. This is the actual website: pages in `src/pages/`, components in `src/components/`, layouts in `src/layouts/`, data modules in `src/data/`, styles in `src/styles/`.

**Two independent data pipelines feed the one site:**

```
ANALYSIS pipeline (the research pages):
  IranWarTracker/data/cascades/*.json   (canonical — you edit THIS)
        │  vegaready/scripts/build-cascades.cjs   (generator)
        ▼
  vegaready/src/data/analysis/*.js        (GENERATED — never hand-edit)
        │  imported by
        ▼
  vegaready/src/pages/*.astro             (rendered pages)

DASHBOARD pipeline (the /dashboard/* app):
  IranWarTracker/data/*.json              (IWT ingest output, 3×/day)
        │  vegaready/scripts/build-data.cjs       (bundler)
        ▼
  vegaready/src/data/iwt-bundle.json      (committed bundle)
        │  imported by DataInjector.astro → window.__IWT_DATA__
        ▼
  WarTracker.jsx  (client:only React island)
```

Rule for the analysis pipeline: **edit the canonical JSON, then regenerate. Never hand-edit a generated module.** Exceptions: `connections.js`, `profits.js`, `freshness.js` are hand-authored (they are not produced by the generator; everything else in `src/data/analysis/` is). See §5.

### 2a. The two working folders (what's authoritative where)

The `vegaready` repo is checked out in **two folders** on the machine — git worktrees of the same repository, on different branches:

- **`C:\Users\cwm4t\ClaudeCode\vegaready`** — the **design / work branch** (`p0-s01-design-tokens`). Do all site, template, content, and design edits here. Local `npm install` / `npm run build` run here (this folder has `node_modules/` and `dist/`).
- **`C:\Users\cwm4t\ClaudeCode\vegaready-main`** — a **worktree parked on `main`** (production). It holds the authoritative data-pipeline scripts, the `data-history/` rollback snapshots, `public/data-status.json`, and is where the data automation publishes and where you `git push` to deploy. It has **no** `node_modules`/`dist` — you don't build here; it's for the data publish + push only.

**Rule:** because the worktree owns `main`, you **cannot `git checkout main` in the `vegaready` folder** (git refuses — a branch can't be checked out in two worktrees at once). Do main-branch operations in `vegaready-main`. To move a change from the design branch to production: commit it on the design branch (in `vegaready`), then in `vegaready-main` run `git checkout p0-s01-design-tokens -- <paths>`, commit, and `git push origin main`.

**The data-pipeline scripts `scripts/build-data.cjs` and `scripts/publish-from-iwt.cjs` are authoritative on `main` (the worktree)** — that is the copy the 3×-daily automation runs and what is verified in production. Keep the design-branch copies of these two scripts in sync with `main`, and **never carry a design-branch `scripts/*.cjs` onto `main`** unless you've confirmed it matches or improves the worktree copy — the production pipeline scripts must not be silently regressed. (`build-cascades.cjs`, the analysis generator, is edited normally on the design branch.)

> Housekeeping note: the `vegaready` folder may contain stray untracked helper files (`_fix_push.cjs`, `_push_editions.cjs`, `_resolve_push.cjs`, `vega.bundle`); they are not part of the project and can be deleted. `data-history/` is expected only in the `vegaready-main` worktree.

---

## 3. Tech stack & how it builds and deploys

- **Astro 6.4.2**, `@astrojs/cloudflare 13.6.0`, `@astrojs/mdx 6`, React 19 (the dashboard island, `client:only`), TypeScript. Deployed as a **Cloudflare Worker with static assets.**
- **Dashboard pages are prerendered to static HTML** (each `src/pages/dashboard/*.astro` declares `export const prerender = true`). The dashboard's React app hydrates client-side and reads its data from `window.__IWT_DATA__`, which is injected at build time by `DataInjector.astro` via a **JSON import** of `src/data/iwt-bundle.json` (so the data is inlined into the build output and present regardless of render mode).
- **`npm run build`** = `node scripts/build-data.cjs && astro build` (bundles the dashboard data, then builds the site).
- **Deploy = push to `main`.** Production is wired to **Cloudflare's Git build integration**: pushing `main` triggers Cloudflare to run `npm run build` from the committed source and deploy the result. `dist/` is gitignored and built by Cloudflare — so **anything the build needs must be committed** (this is why the dashboard bundle is committed; see §5.3). `npm run deploy` (`wrangler deploy -c dist/client/wrangler.json`) exists as a manual local alternative but is not the normal path.
- **`SESSION` KV namespace:** the Cloudflare adapter wants a `SESSION` KV namespace. The id (`859e60a0ee5e4676bad7937843990908`) is pinned in the **root `wrangler.json`** under `kv_namespaces`. Leave it in place. (`compatibility_flags: ["nodejs_compat"]` is also required there.)
- **`NODE_ENV` is `production` globally** on this machine → `npm install` skips devDependencies. To install dev deps: `set NODE_ENV=development && npm install`.
- **Build warnings to ignore:** the `WarTracker.jsx` chunk-size warning (the dashboard React app, ~105 KB gzipped — leave it, do not split) and the `punycode` deprecation warning (a transitive build-tool dependency). Both are harmless.

---

## 4. Working rules (read before editing)

1. **Building/deploying — two valid paths.** The baseline is: you make file changes and hand the owner **exact, copy-pasteable command blocks** (with explicit paths), and the owner runs them host-side. *But as of 2026-06-08 the agent can also build, commit, and push autonomously host-side via Desktop Commander (proven) — see §13.* Either path is fine; the owner can always run commands directly. The guardrails in §13 (build-verify before pushing to `main`, explicit paths only, never git from the sandbox) apply whenever the agent ships itself.

2. **Use the file tools for file content.** Read/Write/Edit on `C:\…` paths are reliable. The sandboxed bash mount can read large files incompletely, so don't trust bash `cat`/`wc` to verify a file's contents — confirm with the file-tool `Read`. Bash is fine for plain directory listings.

3. **Run git only host-side, never from the sandbox.** Sandbox git against the live repos can leave a `.git/index.lock` that blocks the owner's git. If the owner ever hits "index.lock exists" with nothing running, the fix is `del .git\index.lock`.

4. **Commit by explicit file paths, never `git add -A`.** The working tree shows many files as "modified" due to LF↔CRLF normalization; `git add -A` would sweep that noise in. Always give `git add <specific paths>`.

5. **The branch + worktree model.** `main` is production. Active design/build work is on the **`p0-s01-design-tokens`** branch, checked out in the normal `vegaready` folder. A second git worktree, **`vegaready-main`** (sibling folder `C:\Users\cwm4t\ClaudeCode\vegaready-main`), is permanently parked on `main` and is where the data automation publishes. Because the worktree owns `main`, you **cannot `git checkout main` in the normal folder** — do main-branch operations in `vegaready-main`. The standard way to move a change from the design branch to production:
   ```
   # 1) in the normal vegaready folder (design branch):
   git add <paths> && git commit -m "..."
   # 2) in vegaready-main (the worktree, on main):
   git checkout p0-s01-design-tokens -- <paths>
   git commit -m "..." && git push origin main
   ```

6. **Build, then deploy/commit as separate steps.** `npm run build` is long; don't paste deploy/commit lines into a still-running build. Give the build command, wait for completion, then the next block.

7. **Discuss before building anything substantial** (see §10).

---

## 5. The data model (what lives where)

### 5.1 Analysis content — canonical JSON → generated modules
- **Canonical source:** `IranWarTracker/data/cascades/*.json` (~27 files): per-section research (`equities.json`, `crypto.json`, `credit.json`, `insurance.json`, `property.json`, `labor.json`, `foodag.json`, `water.json`, `energytransition.json`, `defense.json`, `crossasset.json`, `sectors.json`→Transmission, `regions.json`→Exposure, `dynamics.json`→Outlook, `nuclear.json`, `chokepoints.json`, `weaponization.json`, `deglobalization.json`, `digital.json`, `foodresilience.json`, `structuraloverview.json`) plus cross-cutting registries (`taxonomy.json`, `watch-metrics.json`, `scenario-states.json`, `catalysts.json`).
- **Generator:** `vegaready/scripts/build-cascades.cjs` reads each canonical JSON and writes the matching `src/data/analysis/*.js` (each carries a "GENERATED — DO NOT EDIT BY HAND" banner). It reads `../IranWarTracker/data/cascades` by default (override with `CASCADES_DIR`). **Regenerate command:** `node scripts/build-cascades.cjs`.
- **Card schema** (per analysis card): `{id, title, category, summary, data{label:text}, sources[{name,url,tier}], confidence, tags}`. Causal edges (in `connections.js`) additionally carry the attribution layer: `driverClass`, `attribution{strength, confidence}`, `competingDrivers[]`, `residual`, plus `activation`/`invalidation`/`maturity`. Watch metrics carry thresholds, `value_type`/`baseline`, `direction`, `classification`, `assets`, `source`, and a first-pass `trade_expression`.

### 5.2 Hand-authored modules (edit directly — not generated)
- **`connections.js`** — the causal-edge map: intro, themes, `causalLinks` with full attribution, driver registry.
- **`profits.js`** — "Who Profits": intro + beneficiary groups.
- **`freshness.js`** — the site-wide "Live · as of …" banner, scenario chips, anchor chips. (Keep the `asOf` date current.)
- Rule: any `.js` in `src/data/analysis/` that the generator does **not** emit is hand-authored; everything the generator emits is off-limits to hand edits.

### 5.3 Dashboard data — the IWT bundle (automated)
- The `/dashboard/*` pages are a client-only React app (`src/components/dashboard/iwt/WarTracker.jsx`) reading `window.__IWT_DATA__`.
- That data is `src/data/iwt-bundle.json` (54 scopes). It is **gitignored but tracked/committed** — committed so Cloudflare can build the dashboard without the IranWarTracker folder.
- It is produced from `IranWarTracker/data/*.json` by `scripts/build-data.cjs`, and kept fresh by the **durable publish step `scripts/publish-from-iwt.cjs`**, which: regenerates the bundle, runs a **publish-gate QC** (scope coverage, required scopes non-empty, drop/regression guards, and a day-counter recency + "data hasn't advanced" check), snapshots to `data-history/` for rollback, writes `public/data-status.json` (the dashboard freshness banner reads this), and commits/pushes — only when the data passes and actually changed. A blocked check keeps the last good data live.
- **Automation:** `IranWarTracker/3-auto-ingest.bat` (Windows Task Scheduler, 3×/day) ingests + audits, then **Step 7** runs `publish-from-iwt.cjs` inside the `vegaready-main` worktree → pushes `main` → Cloudflare rebuilds. This runs hands-off; you normally don't touch dashboard content.

### 5.4 Machine-readable export
`vegaready/src/pages/signals.json.js` prerenders to `/signals.json` — the full watch registry + signal catalog + scenario states + catalysts.

---

## 6. Content & information architecture

- **Top nav** (`src/components/Header.astro`): Home, Dashboard, Markets, Transmission, Exposure, Outlook, Structural Risk, Connections, Who Profits, Briefings, About + a "Live Dashboard" CTA.
- **Dashboard** (`/dashboard/*`, prerendered React): War Room (index), gulf, economics, markets, casualties, iran, us, israel, analytics, sources — sub-nav in `DashboardLayout.astro`.
- **Markets** (`/markets/*`, wrap `AnalysisLayout area="markets"`): index (carries the scenario-state ledger) + gold-fx, energy, crypto, credit, insurance, property, labor, food-agriculture, water, defense, equities, cross-asset.
- **Standalone lenses:** Transmission, Exposure, Outlook (+ precedents, infrastructure, nuclear), Structural Risk (+ chokepoints, weaponization, deglobalization, digital, food, and `watch` = the live Watch Board), Connections (causal-edge registry + attribution), Who Profits. Plus Blog, Briefings, About, `/signals.json`, `/rss.xml`. ~44 routes total.
- **`AnalysisLayout.astro`** wraps every analysis page (BaseHead + Header + per-area sub-nav + the freshness strip + slot + Footer); `area`/`section` props select and highlight the sub-nav.
- **`SignalPanel.astro`** drops a page's tradable signals onto section pages via `<SignalPanel page="/…" />`, single-sourced from `watchmetrics.js`.
- **Content collections** (`src/content/`, defined in `src/content.config.ts`): `blog/` and `briefings/` (`.md`/`.mdx`). Add a file with valid frontmatter (`title`, `description`, `pubDate` required; briefings add a `category` enum + `tags`); list pages auto-collect and sort by date.

---

## 7. The epistemic discipline (the platform's soul — never violate)

- **Source tiers** T1 (named primary) / T2 (secondary/press) / T3 (proxy/estimate). Aggregators are never T1. Flags: `PROVISIONAL`, `PROXY`.
- **Four scenarios:** `hormuz_closure`, `oil_strike`, `cable_severance`, `ceasefire`. Everything is scenario-tagged.
- **Two confidences, never blended:** *data confidence* (is the number sound) vs **attribution** — `strength` (primary/partial/marginal) and `confidence`. Plus named `competingDrivers` and an explicit `residual` (named drivers never sum to 100%).
- **Causal-edge status:** **Tracked** (observed in data we follow) vs **Proposed** (a reasoned mechanism not yet observed); some **contrarian**. Governing line: "every edge is a hypothesis; 'Tracked' means we observe it, not that we've proven it."
- **Driver ontology** (`taxonomy.json`): 10 driver classes; the Iran-Gulf conflict is driver instance #1 (the only one populated); the other 7 are registered but not yet populated (they appear as competing drivers and are the next build queue).
- **Forward catalysts** (`catalysts.json`): announced-not-committed events tracked as triggers, never scored as facts.

---

## 8. Current state (where to pick up)

- **The site is live and fully shipped** at https://vegaready.com — all 10 analysis sections + the dashboard.
- **Dashboard data pipeline:** automated end-to-end (ingest → QC publish gate → commit/push → Cloudflare rebuild), 3×/day, with version history and a freshness banner. Current data is live and current to the latest war day.
- **Productization layer:** the scenario-state ledger (`/markets`), forward-catalyst register (`/structural/watch`), the `/signals.json` export, the sortable causal-edge registry (Connections), and first-pass `trade_expression` on the signals — all shipped.
- **Design system:** in progress (see §9 and the design-locations note below). The live site currently styles from `src/styles/global.css`; the new design system is not yet ported in.

**Design / brand system — where it lives (current state):**
- `vegaready/_program/` is the design program home. **`_program/APPROVED-THEMES.md` is the source of truth for design decisions** (the approved theme register and design laws). Also there: `DESIGN-CONTRACT.md` (frozen tokens + component registry), `DECISIONS.md`, `COLOR-RESERVE.md`, `THEME-SCENARIO-MAP.md`, `ROADMAP.json`, `LEDGER.json`, `HANDOFFS/`.
- `_program/RESEARCH/` holds the brand source inputs: `extracts/jcj-brand-guidelines.txt`, `extracts/jcj-color-dictionary.txt`, plus `COLOUR-EMOTION-REGISTER.md` and `MEANING-LAYER-SOURCEBOOK.md`. *(A duplicate lowercase `_program/research/` exists — consolidate to one when convenient.)*
- `_program/artifacts/` holds the rendered guides and trial labs: `VegaReady-Brand-Color-Guide.html`, `VegaReady-Guide-v3.1.html`, `vegaready-tokens-v3.1.json` (the rendered guide is at v3.1; the law register is ahead of it).
- The **interactive colour lab** is `vegaready/public/edition/` (with frozen snapshots `edition-v1…v6`, `edition-v6.1`, and `edition/validator.html`) — where colour formulas are narrowed down. Not yet folded into the live site.
- **Where we left off:** the design system is in progress and not yet ported to the live site. Next design steps: crown the winning Edition formulas → fold into the guide (v4.2 lock) → port the locked guide into the live site styling.

---

## 9. Roadmap (planned / pending)

**Design track (the immediate creative path):**
1. **Crown the winning Edition colour formulas** (owner action in `public/edition/`).
2. **Lock the guide (v4.2)** — fold the crowned formulas + recipe + validation gates into the guide; regenerate the rendered guide artifact in `_program/artifacts/`.
3. **Port the locked guide into the live site styling** (`src/styles/global.css` + components), page by page.
4. Standing design loops that feed the guide: **Interaction & States** (hovers, focus, loading, forms) and the **Meaning Layer**; plus remaining **Device Lab** verdicts.

**Content / product track:**
- **Quick wins:** keep the `freshness.js` "as of" current; resolve "coming soon" placeholders (Podcast, Technical Signals Feed).
- **Onboarding:** a "Start here" page + plain-language hero + inline glossary tooltips (the 209-term glossary already exists in the dashboard data — surfacing it is a wiring job).
- **Dual-mode Simple/Analyst toggle** — first-class, persistent; every page renders both modes from one corpus.
- **Nav restructure** toward cascade buckets with plain-English glosses + a "where am I in the cascade" breadcrumb.

**Research-gated (need an external research run first):**
- Substitution & beneficiary depth (crude-slate/LNG/fertilizer non-fungibility; named investable winners).
- OPEC+ spare-capacity tracker (the biggest missing anchor).
- **Phase B** — populate the first non-conflict drivers (US monetary, China statecraft, OPEC+ supply) so the field-of-forces view becomes real.

**Small / standalone:** Catalyst Calendar (forward time-axis); `trade_expression` refinement (awaiting JCJ house instrument conventions, esp. crypto).

---

## 10. How the owner works (follow this)

- **Discuss before building anything substantial.** Rhythm: review → discuss options (pros/cons) → plan → build. Don't jump to implementation on big changes; propose and confirm. For small fixes, just do them and show the command block.
- **Verify, don't assert.** Ground claims in the actual files; state validation gaps plainly rather than papering over them. The owner values honesty over confident-sounding summaries.
- **Use subagents** for fan-out work (research, audits, multi-file digestion) — the owner explicitly prefers leveraging subagents/skills/MCPs, and prefers them run on a strong model.
- **Use the task list** (TaskCreate/TaskUpdate) — it renders as a widget; track multi-step work, mark complete as you go, include a verification step.
- **Present files** with `present_files` after creating deliverables; keep the post-amble short.
- **Git/builds/deploys — owner-run by default, agent-capable when useful.** The baseline rhythm is to hand the owner exact command blocks (explicit paths; build-then-wait-then-deploy; never `git add -A`) and let them paste. The agent can also ship autonomously host-side via Desktop Commander (§13) — use that for routine commits (docs, data, small fixes) under the §13 guardrails; keep the owner in the loop on anything substantial. The owner can always run commands directly.
- **Max depth on content.** Standing directive: full tables, aggressive cross-enrichment, no corners cut.
- **Honesty/epistemics are non-negotiable** (§7). Engage the philosophy and get framing right; never overclaim causation.

---

## 11. Reference docs & memory

**`IranWarTracker/docs/` (the VegaReady-* files):**
- `VegaReady-Master-Handoff-2026-06-08.md` — this file (current).
- `VegaReady-Master-Handoff.md` — the prior (2026-06-02) handoff, retained for reference.
- `VegaReady-Vision-Audiences-Context.md` — vision, evolution, dual-mode, the three purposes.
- `VegaReady-Site-Manifest.md` — deep content inventory (every route/card/dashboard-array + glossary).
- `VegaReady-FullSite-Design-Audit-Prompt.md` — the full design-audit prompt.
- `VegaReady-Signal-Catalog.md`, `VegaReady-Intelligence-Gap-Audit.md`, `VegaReady-Attribution-Method.md`, `VegaReady-UX-IA-Review.md`, `VegaReady-Trade-Expression-Draft.md` — supporting references.

**Design program** (`vegaready/_program/`): `APPROVED-THEMES.md` (source of truth for design), `DESIGN-CONTRACT.md`, `RESEARCH/` (brand inputs), `artifacts/` (rendered guides + token export). See §8.

**Key scripts** (`vegaready/scripts/`): `build-cascades.cjs` (analysis modules), `build-data.cjs` (dashboard bundle, supports `--out` staging), `publish-from-iwt.cjs` (durable QC-gated dashboard publish).

**Shipping reference** (`vegaready/GITHUB_MCP_WALKTHROUGH.md`): the connectivity proof for autonomous shipping (endpoint, token, `get_me`=JCJinvesting, the one-time Windows re-login to surface the in-session tools). See §13 for the operating rules. *(Rule, refined 2026-06-09: host-git for large/data files >1 MB incl. the ~1.7 MB `iwt-bundle.json`; the GitHub API connector only for small text commits.)*

**Persistent agent memory** (auto-loaded each session): `vegaready-cascade-generator.md` (data model + build arc), `vegaready-repo-edit-workflow.md` (repo/edit/deploy mechanics), `vegaready-execution-protocol.md` (program protocol + the data pipeline), `vegaready-design-baseline.md` (design direction). `vegaready/CLAUDE.md` and `IranWarTracker/CLAUDE.md` are the project instructions.

---

## 12. New-agent onboarding checklist (in order)

1. **Read this file**, then `VegaReady-Vision-Audiences-Context.md`, and skim `VegaReady-Site-Manifest.md` so you know the content.
2. **Internalize §4 (rules):** builds/deploys are owner-run by default but the agent can also ship host-side via Desktop Commander (§13); use file tools for content (the bash mount can read large files incompletely); never run git from the sandbox; commit by explicit paths; main-branch work happens in the `vegaready-main` worktree.
3. **Verify current state before changing anything:** confirm both repos are present and the site is live. Check, don't assume.
4. **Confirm the owner's immediate goal** — the site is shipped; open work splits into the **design track** (crown formulas → lock guide → port to live) and the **content/product track** (dual-mode, onboarding, research-gated drivers). Ask which to advance; don't pick a big direction for them.
5. **For content edits:** decide which of the four content homes applies (§0/§5), edit there, regenerate if it's the analysis pipeline, then hand the owner a build-then-deploy command block (explicit paths). Keep a tight one-step-at-a-time loop.
6. **Never** hand-edit a generated module, use `git add -A`, run git from the sandbox, claim a `.astro` builds without an actual host build (owner-run or agent-run via §13 — verify, don't assume), or overclaim causation.

*Welcome aboard. The substance is strong and shipped; the dashboard data flows on its own; the next chapters are the design-system port and the Simple/Analyst experience. Build at depth, stay honest, keep the owner in the loop on direction.*

---

## 13. How the agent ships changes (autonomous, added 2026-06-08)

An agent can commit and push **without the owner pasting command blocks**, two ways:

- **Desktop Commander host-git (the workhorse — use this for anything large or data-bearing):** run git on the host by full path — `C:\PROGRA~1\Git\cmd\git.exe` (git isn't on Desktop Commander's PATH) via the `cmd` shell. This uses the machine's real cached GitHub credentials. Verified working on both repos. **No file-size ceiling that matters here:** git reads each file straight off disk and packs it — the content never passes through the agent's context or any read tool, so a multi-MB file (e.g. the ~1.7 MB `iwt-bundle.json`) commits exactly like a one-line file. This is what the automated 3×-daily pipeline already uses for the data bundle, and it's the correct path for large/binary/generated files.
- **GitHub connector (convenience layer for small text commits — once a session has it):** the official GitHub MCP is installed and authenticates from the `GITHUB_PERSONAL_ACCESS_TOKEN` user environment variable (a fine-grained PAT scoped to `vegaready` + `IWT`, Contents and Pull-requests read/write). Its tools (create/update file, push files, PRs) appear in a **freshly started** conversation — a connector loads at session start, so it won't appear mid-session if it was connected after the session began. **Activation note:** because Claude is a Microsoft-Store (MSIX) package, it doesn't inherit a newly-added env var from a plain quit/reopen — a Windows **sign-out/sign-in (or reboot)** is needed once, after which the tools load in every new session. Connectivity itself is already proven (endpoint `https://api.githubcopilot.com/mcp/x/all`, 90 tools, `get_me` → `JCJinvesting`); see `vegaready/GITHUB_MCP_WALKTHROUGH.md` for the full evidence.

**Which method for what (important — don't get this backwards):** use **git (Desktop Commander)** for the data bundle and any file over ~1 MB; use the **API connector** only for small text commits (docs, single source-file edits, PRs). The connector's create/update-file tool base64-encodes the whole file into one JSON request — fine for small files, but GitHub's own docs say to **push large files via git, not the REST API** (Contents-API reads over 1 MB need a special media type, and uploads have practical ceilings). So for large files git is not just acceptable, it's the recommended tool — the opposite of the intuition that "the API handles big files better." The earlier truncation scare was never a git or API limit anyway: it came from the **Cowork sandbox** (`mcp__workspace__bash`) serving incomplete reads of large files — which is exactly why git is never run from the sandbox (no creds + `.git/index.lock` collisions); host-git and the file tools read from disk and don't truncate.

Keep these guardrails:
- **Build-verify before pushing to `main`** — run `npm run build` on the host first so a broken page never deploys.
- **Commit by explicit paths only**, never `git add -A` — both repos carry large amounts of unrelated uncommitted churn (backups, `.corrupt`/`.bundle` files, test scripts) that must not be swept in.
- **Never run git from the Cowork sandbox** — use Desktop Commander (host) so credentials are present and large files aren't truncated; concurrent sandbox git also leaves a stale `.git/index.lock`.
- Production deploys on push to `main`; the design branch `p0-s01-design-tokens` does not. Main-branch work happens in the `vegaready-main` worktree (§2a).

This supersedes the older "owner runs all git/builds/deploys" framing in §4 for routine commits — though the owner can still run commands directly any time.
