# VegaReady — Project Context, File Map & Access (full reference)

**Purpose:** the complete *what and where* for the VegaReady build — vision, every relevant folder/file, the access and MCP tools a session has, the data pipeline, the route inventory, and the full deploy mechanics. Pair with `INSTRUCTIONS.md` (the *how we work* / loop / critiques) and the root `CLAUDE.md` (the auto-loaded short version).

**Last updated:** 2026-06-11. **Owner:** JCJ Investing General Partner (`GP@jcjinvesting.com`). **Machine:** Windows (`Chris_Legion5`), Claude Desktop / Cowork mode.

---

## 1. The vision (what we're building)

**VegaReady** is the public macro-intelligence layer of **JCJ Investing**. It is a **catalyst-neutral, dual-audience, cross-asset market-intelligence website** — a research-grade public markets "desk" (Koyfin/Bloomberg-grade, but public and opinionated about *regime*).

Core idea: read markets as a **regime**, and overlay live **event-catalysts** (a geopolitical conflict, an OPEC+ decision, a Fed pivot) on a **durable, catalyst-neutral framework**, so each page makes sense whether or not a catalyst is active. The site grew out of an Iran–Gulf war tracker; that conflict is the *current* catalyst overlay, but the desks are built to outlive it.

Two audiences, served deliberately: **Analyst** (institutional density, `/markets/<desk>`) and **Layman** (sophisticated non-specialists in plain language, `/layman/<desk>`).

Governing principle: **honesty over false precision** (the integrity contract — see `INSTRUCTIONS.md` §3). Brand line in use: *"Volatility isn't risk. It's signal."* Editorial register: think FT / The Economist — confident, plain, never hype.

The desk shape every desk follows: a **durable spine** (catalyst-neutral sections) + a **badged catalyst overlay** (the live Iran–Gulf repricing) + an **evidence/methodology** section, all under the dual-audience + Skim/Deep reading model.

---

## 2. Folders & git worktrees (this trips people up)

| Folder | Branch | Role |
|---|---|---|
| `C:\Users\cwm4t\ClaudeCode\vegaready` | `p0-s01-design-tokens` | **Design / staging worktree** — where new building happens. **Work here.** |
| `C:\Users\cwm4t\ClaudeCode\vegaready-main` | `main` | **Production worktree** + the data pipeline. Do the `-X ours` merge + push here. |
| `C:\Users\cwm4t\ClaudeCode\IranWarTracker` | (its own) | **Upstream data source** — the war-tracker JSON + canonical cascade content that feeds VegaReady's generated analysis modules. Older planning docs also live here. Has its own `CLAUDE.md` (Express server + GitNexus instructions). |

`vegaready` and `vegaready-main` are **two git worktrees of ONE repo**. You **cannot** `git checkout main` inside `vegaready` (main is checked out in the other worktree). Recover a botched merge with `git reset --hard HEAD`. GitHub remote: **`github.com/JCJinvesting/vegaready`**.

**Bash mount note:** the sandbox bash maps these as `/sessions/<id>/mnt/vegaready/`, `…/vegaready-main/`, `…/IranWarTracker/`. The mount occasionally returns corrupted/null-byte file reads (it once reported `package.json` invalid) — that's a mount artifact, not a real problem. The Read tool reads the authoritative Windows file. For host truth, prefer Desktop Commander (§6).

---

## 3. The tech stack

- **Astro `^6.4.2`** (static output) + **`@astrojs/cloudflare` `^13.6.0`** adapter (Workers Static Assets + a `SESSION` KV binding). Also `@astrojs/mdx`, `@astrojs/react ^5`, `@astrojs/rss`, `@astrojs/sitemap`.
- **React `^19.2.6`**, **TypeScript `5.9.3`**, **Wrangler `^4.96.0`**. **Node `>=22`.** `"type": "module"`.
- `wrangler.json` (root, production config): `name: "vegaready"`, `compatibility_date: 2025-10-08`, `nodejs_compat`, `main: @astrojs/cloudflare/entrypoints/server`, `assets: { directory: ./dist, binding: ASSETS }`, KV `SESSION` (`id 859e60a0ee5e4676bad7937843990908`), observability on, `upload_source_maps: true`. (There is intentionally **no** working `env.staging` block — the adapter ignores it; see §7.)
- `astro.config.mjs` — Astro config (adapter, integrations, site).
- No root `CLAUDE.md` existed before this handoff; one is being added so a fresh session auto-loads the essentials.

---

## 4. Route / page inventory (the live sitemap)

**Market desks** (`/markets/*`) — the heart of the redesign:

| Route | Layman twin | Component? | Status |
|---|---|---|---|
| `/markets/credit` | `/layman/markets/credit` | **`CreditDesk.astro`** | **SHIPPED to production** — brass skin, deep Layman, Skim/Deep, defect pass done. |
| `/markets/equities` | `/layman/markets/equities` | **`EquitiesDesk.astro`** | **SHIPPED to production** — steel skin (Charcoal Blue WB8 + JCJ Gold), 7-chapter Layman deep, designed 3-min Skim, R-01 research integrated. The current reference standard. |
| `/markets/equities/{episodes,factor-lab,plumbing}` | — | standalone `.astro` | Honest "in build" stubs, noindexed, steel skin. SHIPPED. |
| `/layman` | (is the wing) | standalone `.astro` | Layman Edition landing ("prefix any URL with /layman"). SHIPPED. |
| `/markets/cross-asset` · `/markets/crypto` · `/markets/energy` · `/markets/gold-fx` | — | standalone `.astro` | Older / placeholder desks; not yet rebuilt to the new standard or given Layman twins. |
| `/markets/defense` · `/markets/water` · `/markets/food-agriculture` · `/markets/labor` · `/markets/property` · `/markets/insurance` | — | standalone `.astro` | **Conflict-sector dossiers** — catalyst pages, NOT true market desks. Slated to **re-home** out of `/markets` to the Iran dossier (with 301s). |
| `/markets/index` | — | — | The markets hub (re-homed: "market desks" vs "conflict-sector dossiers" groups; carries the Wayfinder rail of desks). |

**Wayfinder (site-wide wayfinding law, kit §4e):** every masthead-system page below root carries `Wayfinder.astro` (crumb trail + always-visible sibling rail) directly after `.masthead`. Live on 9 URLs (hub, both analyst desks, /layman + 2 layman desks, 3 equities stubs). Legacy pages excluded until the front-door loop.

**Archive** (`/archive/markets/*`, 13 files) — frozen legacy snapshots of every old `/markets/*` page; `noindex` (so `web_fetch`/link-checkers return empty for them — that's intended).

**Other site areas** (mostly the original war-tracker, varying states of redesign):
`/` (home), `/about`, `/today` (regime hub), `/catalysts`, `/signals`, `/structural/*` (watch, chokepoints, deglobalization, digital, food, weaponization), `/dashboard/*` (analytics, casualties, economics, gulf, iran, israel, markets, sources, us), `/outlook/*` (infrastructure, nuclear, precedents), `/exposure`, `/transmission`, `/connections`, `/profits`, `/briefings/*`, `/blog/*`, `/markets-desk` (a stray/early prototype).

---

## 5. Components, data modules, styles, scripts

**Components** (`src/components/`): `CreditDesk.astro` and `EquitiesDesk.astro` (the dual-mode desk components — the pattern); **`Wayfinder.astro`** (the site-wide crumb-trail + sibling-rail nav, kit §4e — every new masthead page must include it); plus shared `BaseHead`, `Header` (legacy pages only), `HeaderLink`, `Footer`, `Breadcrumbs` (dormant — superseded by Wayfinder), `FormattedDate`, `ActiveCatalysts`, `SignalPanel`.

**Generated analysis modules** (`src/data/analysis/`, ~27 files): per-desk content generated from IranWarTracker cascades by `scripts/build-cascades.cjs` — `credit.js`, `equities.js`, `crossasset.js`, `crypto.js`, `energytransition.js`, `defense.js`, `water.js`, `foodag.js`, `foodresilience.js`, `labor.js`, `property.js`, `insurance.js`, `weaponization.js`, `chokepoints.js`, `deglobalization.js`, `digital.js`, `nuclear.js`, `outlook.js`, `profits.js`, `exposure.js`, `transmission.js`, `connections.js`, `structuraloverview.js`, `scenariostates.js`, `catalysts.js`, plus **`watchmetrics.js`** (the live "watch registry") and `freshness.js`. **These are GENERATED — never hand-edit; edit the canonical cascade JSON in IranWarTracker and re-run `node scripts/build-cascades.cjs`.**

**The watch registry (`watchmetrics.js`):** exports `metrics` (+ `lastUpdated`, `statusOf`). Each metric carries a `signalNo` (e.g. `2.1`, `6.1`), value, thresholds, status, source tier, value type, etc. Desk KPIs pull live numbers by signalNo — credit uses EMBI `2.1`, flight-to-quality cash `2.2`, Gulf UST recycling `2.3`, DXY `1.2`, stock-bond corr `9.2`, EM-equity-vol `9.3`. Metrics NOT in the registry (e.g. US-corporate IG/HY OAS, distress ratio, default rate) render **"feed pending"** — honest placeholders, not to be faked.

**Other `src/data/`:** `iwt-bundle.json` (54 arrays bundled from IranWarTracker by `build-data.cjs`), `catalysts.ts`, `naming.ts` (naming tokens), `CONTENT-INTAKE.md`, `README.md`.

**Styles** (`src/styles/`): `desk.css` (the desk design language "t1 Oxford" — base tokens, fonts, masthead, hero, CTA), `desk-content.css` + `desk-v2.css` (desk components + the `body[data-disc="skim"] .deep{display:none}` rule and the inverse `body[data-disc="deep"] .skim-only{display:none}`), **`skin-brass.css`** (Warm Brass, credit-only, `html[data-skin="brass"]`), **`skin-steel.css`** (Charcoal Blue WB8 + JCJ Gold + chapter accents `--chA..--chG`, equities, `html[data-skin="steel"]`), `global.css` (site-wide tokens for non-desk pages).

**Scripts** (`scripts/`): `build-data.cjs` (→ `iwt-bundle.json`), `build-cascades.cjs` (→ `src/data/analysis/*.js`), `publish-from-iwt.cjs`.

**Brand program** (`_program/`): `artifacts/Typography-Emphasis-Spec.md` (locked, owner-approved — the type/emphasis bible), `DESIGN-CONTRACT.md`, `APPROVED-THEMES.md` (9 dark combos + locked typography), `COLOR-RESERVE.md`, `DECISIONS.md`, `artifacts/Components-Charts-Spec.md`, `artifacts/Charts-Icons-Spec-B-v2.md`, `HANDOFFS/*`.

---

## 6. Access & MCP tools a session has (IMPORTANT — bigger than just "the owner runs commands")

- **Desktop Commander MCP** (`mcp__Desktop_Commander__*`) — **runs on the Windows host with real filesystem + process access.** This means a session can run `npm run stage`, git, and node **itself** via `start_process` / `interact_with_process` and read the output — i.e., the agent can do the build/deploy directly rather than handing every command to the owner, which *also sidesteps the type-ahead deploy bug* (§7). The default host shell is PowerShell. (This session handed commands to the owner; a fresh session should confirm Desktop Commander works and ask the owner whether to run builds directly or hand them over. Production pushes to `main` should still be owner-approved.)
- **GitHub MCP** (`mcp__github__*`) — the hosted GitHub MCP, **90 tools**, authed as **JCJinvesting** via the `GITHUB_PERSONAL_ACCESS_TOKEN` Windows env var. Use for repo/PR/CI/issue operations on `github.com/JCJinvesting/vegaready`. Setup/verify/repair is documented in `GITHUB_MCP_WALKTHROUGH.md` (root). Note: local git on the worktrees (via Desktop Commander) is the right tool for the `-X ours` merge; GitHub MCP is for remote/CI/PR work.
- **Claude-in-Chrome** (`mcp__Claude_in_Chrome__*`) — a connected browser ("Browser 1", Windows). **The reliable way to *see* the live staging page** for visual review: `tabs_context_mcp` → `navigate` → `get_page_text` / `screenshot`. Used this session to confirm deploys landed and to read rendered content.
- **The `visualize` widget** (`mcp__visualize__read_me` + `show_widget`) — render 2–3 visual options inline for the owner on subjective design calls (palettes, layouts) **before** building. This is how the Warm Brass palette was chosen.
- **`mcp-registry`** (`mcp__mcp-registry__*`) — search/suggest external connectors if a task needs one.
- **Cowork tools** — `request_cowork_directory` (mount a folder), `present_files` (show files to the owner), `create_artifact` (persistent live HTML views), scheduled tasks.
- Plus persistent **memory** (auto-loaded facts: deploy method, reading-modes, design baseline/brass, equities-desk) and other plugin MCPs (Perplexity for research, etc.).
- **The owner** runs commands on their Windows terminal too, and is the design/content decision-maker. Always hand over exact commands and dashboard click-paths when the owner is the one acting.

**Cloudflare** (owner-operated dashboard; the agent can't click there): two Workers — `vegaready` (production, custom domain `vegaready.com`, git-connected to the repo, auto-deploys on push to `main`) and `vegaready-staging` (the preview surface, `https://vegaready-staging.royal-rice-7384.workers.dev`, optional custom domain `test.vegaready.com`). Both use `@astrojs/cloudflare` v13.

---

## 7. Build & deploy — the complete mechanics

From `package.json` scripts:
- `npm run build` = `node scripts/build-data.cjs && astro build` (build only).
- **`npm run stage`** = `node scripts/build-data.cjs && astro build && wrangler deploy --name vegaready-staging` — **build + deploy to staging in ONE command. Use this for staging.**
- `npm run deploy` = `wrangler deploy` (bare — hits PRODUCTION; do not use for staging).
- `npm run dev` / `npm run preview` — local.

**Staging:** `cd …\vegaready` → `npm run stage` → confirm `Uploaded vegaready-staging` in the output → review `https://vegaready-staging.royal-rice-7384.workers.dev`.

**Production (ship):** in `…\vegaready-main`: `git pull origin main` → `git merge -X ours p0-s01-design-tokens -m "..."` → `git push origin main`. Cloudflare's git CI builds + deploys to vegaready.com in ~1–3 min. `-X ours` is mandatory — on the files both branches touch (the live data/pipeline: `src/data/iwt-bundle.json`, `public/data-status.json`, `scripts/build-data.cjs`, `src/pages/dashboard/*`, `data-history/*`) it keeps **main's** live version; the redesign code merges cleanly (expect 0 conflicts). vegaready.com shows the OLD build for the first ~60s while it rebuilds — not a failure.

**Why `--name`, never `--env`:** the `@astrojs/cloudflare` adapter emits `dist/client/wrangler.json` + a `.wrangler/deploy/config.json` redirect that wrangler treats as the authoritative config, so a root `env.staging` block and the `--env staging` flag are **silently ignored** (it deploys to the hardcoded `name:"vegaready"` = PRODUCTION). The `--name vegaready-staging` flag overrides post-resolution and is the **only** thing that correctly retargets the staging Worker. **A bare `wrangler deploy` or `--env staging` hits production and overwrites vegaready.com.**

**The type-ahead pitfall (cost us hours, twice):** if you paste `npm run build` and the wrangler line as TWO lines, Windows `cmd` type-aheads the second line into stdin *during* the build and it never runs — the build succeeds, nothing uploads, and staging serves the OLD build (looks like "my changes did nothing"). Tell-tale: output ends at `[build] Complete!` with no `⛅️ wrangler` / `Uploaded vegaready-staging` lines. **Fix:** the single `npm run stage`, or run the deploy line ALONE after the build finishes — or run it via Desktop Commander where the agent controls the process and reads the real output.

**Rollback production** (if a design build got pushed to prod): Cloudflare dashboard → Workers & Pages → `vegaready` → **Deployments** → newest **`main`-tagged** version → **⋯ → Roll back to this version** (instant, no rebuild).

**The data pipeline:** `build-data.cjs` bundles IranWarTracker data → `iwt-bundle.json`; `build-cascades.cjs` regenerates `src/data/analysis/*.js` from canonical cascade JSON. On `main`, a Windows Task Scheduler job (in IranWarTracker) auto-commits `data: refresh …` 3×/day and pushes — which is exactly why design→main merges MUST use `-X ours` to preserve that live data history. `public/data-status.json` feeds the page's "live as of" stamp.

---

## 8. Upstream planning, specs & canonical data (in `…\IranWarTracker`)

The VegaReady **plans, specs, and source data** live in the IranWarTracker project (the redesign grew out of it). Mount/read it; don't edit the war-tracker app itself.

**Canonical data → generated modules.** `IranWarTracker\data\cascades\*.json` is the **single source of truth** for per-desk analysis content. `scripts/build-cascades.cjs` (in vegaready) reads these and generates `src/data/analysis/*.js`. So to change a desk's data, edit the cascade JSON here and re-run `node scripts/build-cascades.cjs` — never hand-edit the generated `.js`. Files: `credit.json`, `equities.json`, `crossasset.json`, `crypto.json`, `defense.json`, `energytransition.json`, `foodag.json`, `foodresilience.json`, `insurance.json`, `labor.json`, `nuclear.json`, `property.json`, `water.json`, `weaponization.json`, `chokepoints.json`, `deglobalization.json`, `digital.json`, `structuraloverview.json`, `catalysts.json`, **`watch-metrics.json`** (→ the live watch registry), `scenario-states.json` / `scenario-status.json`, `dynamics.json`, `regions.json`, `sectors.json`, `taxonomy.json` (+ `README.md`). The war-tracker data bundled into `iwt-bundle.json` by `build-data.cjs` also originates here.

**Planning & spec docs** — relocated into **`vegaready\docs\VegaReady-*.md`** (copied out of `IranWarTracker\docs\`; read the ones relevant to the task):
- *Vision / strategy:* `VegaReady-Vision-Audiences-Context.md`, `VegaReady-Restructure-Master-Plan.md`, `VegaReady-Execution-Plan.md`, `VegaReady-Master-Checklist.md`, `VegaReady-Site-Manifest.md` (IA / route map), `VegaReady-Master-Handoff-2026-06-08.md` (latest broad handoff; older `VegaReady-Master-Handoff.md` retained).
- *Method / data discipline:* `VegaReady-Attribution-Method.md`, `VegaReady-Signal-Catalog.md` (the watch-registry signals + signalNos), `VegaReady-Trade-Expression-Draft.md`, `VegaReady-Phase0-Preflight.md`.
- *Desk specs & research prompts:* `VegaReady-Credit-Desk-SubPlan.md`, `VegaReady-Credit-Desk-It2-Review.md`, `VegaReady-Credit-Research-Prompt.md`; **`VegaReady-Equities-Desk-Spec.md`** + **`VegaReady-Equities-Research-Prompt.md`** (the next desk). The research prompts are reusable — swap the asset class per desk and run in Perplexity deep-research.
- *Deploy / process:* `VegaReady-Deploy-Runbook.md` (the ship method; the same method is in this folder's `INSTRUCTIONS.md`).
- *Audits / reviews:* `VegaReady-UX-IA-Review.md`, `VegaReady-Audit-Findings-Report.md`, `VegaReady-Intelligence-Gap-Audit.md`, `VegaReady-FullSite-Design-Audit-Prompt.md`, `VegaReady-Reviewer-Context-Prompt.md`.
- *Misc:* `VegaReady-Deep-Research-Phase2.md` (IWT root). Note: the `vegaready-*.bundle` files at the IWT root are **git-bundle backups/exports** of the repo (transfer/restore artifacts), not working files — ignore unless restoring.

---

## 9. Current state & open tracks (as of 2026-06-12)

**SHIPPED TO PRODUCTION (vegaready.com), in four merges (`de5c1f9` → `4ab57f0` → `745a4be`):**
- **Credit desk** — brass skin, deep Layman, Skim/Deep, defect pass (read30 wrapper, inline-style purge, confidence glyphs).
- **Equities desk** — the new reference standard: steel skin (Charcoal Blue WB8 canvas + JCJ Gold + Steel Blue data + chapter accents), full R-01 multi-model research integrated, 7-chapter Layman deep (≥2× analyst volume, provenance, reference scales), **designed 3-minute Skim tier** (skim-only primitive, "Today in 60 seconds", chapter digest, remember-three closer), 43 decoder rows, anonymized council disagreements.
- **Layman Edition wing (URL Option B)** — `/layman` landing + `/layman/markets/<desk>` mirrors; the rule "prefix any URL with /layman" is owner-locked ("layman is locked in").
- **Equities sub-page stubs** — episodes / factor-lab / plumbing, honest, noindexed.
- **Wayfinder** (owner-ratified pattern A3) — `Wayfinder.astro` crumb trail + always-visible sibling rail on all 9 masthead-system URLs; kit v1.5 §4e is the law; honesty tags on in-build links; no JS.
- **AGENT-BRAND-KIT.md at v1.5** — the operative law: render-integrity (v1.2), Skim completeness (v1.3), anti-narrow-wrap + canonical anatomies (v1.4), Wayfinder (v1.5).

Staging and production are in sync. The site still runs **three header systems** (legacy `Header.astro` on `/today`/`/catalysts`/front door; the masthead system on desks/hub/layman; dashboard tabs) — unification is the front-door loop, deliberately parked.

**Open tracks (owner picks next):**
1. **Next desk build** — Rates suggested, then FX/`gold-fx`, Commodities/`energy`, Crypto, Cross-Asset. Each bespoke: own palette from the approved combos (2–3 `visualize` options first), own `skin-*.css`, dual-URL + Layman twin + designed Skim + Wayfinder.
2. **Wire the live data** — owner runs P-02 in Perplexity → validate FRED feeds → replace "feed pending" tiles honestly.
3. **SEO** — P-03: canonicals across analyst/layman pairs, per-desk meta/OG, `BreadcrumbList` JSON-LD (pairs with the Wayfinder).
4. **Credit parity pass** — credit still lacks the chapter system, plain-deep waves, and designed Skim that equities has (kit v1.3/v1.4/v1.5 apply).
5. **Front-door loop** — migrate `/today`, `/catalysts`, `/` to the masthead system; make ⌘K real (command palette); re-home the 6 conflict-sector pages with 301s.

Watch-outs carried from these builds (all detailed in `INSTRUCTIONS.md`): the deploy type-ahead pitfall; `--name` not `--env`; `-X ours` on every merge to main (protects live data); don't fake data; one writer per file (re-read if another session touched it); show visual options on taste calls; verify the live URL (curl greps on trailing-slash URLs — non-slash 307s) before claiming done.
