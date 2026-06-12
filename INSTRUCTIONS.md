# VegaReady — Session Instructions & Working Agreement

**Purpose:** how to work with the owner (JCJ Investing GP, `GP@jcjinvesting.com`) on the VegaReady build. This is the *how we work*. Read it with `PROJECT-CONTEXT-AND-FILES.md` (vision, file map, access, deploy mechanics) and the root `CLAUDE.md` (auto-loaded short version) before touching anything.

**Last updated:** 2026-06-11, after the credit desk was rebuilt (content, Warm Brass skin, Skim/Deep model, brand-aligned formatting) and deployed to staging.

---

## 1. The golden rule: one URL at a time, in an iteration loop

We build **one page (one URL) at a time** and polish it across **multiple iterations** before moving on. Never spread effort thinly across many pages. Each desk is **bespoke and custom-tailored to its content at 100% effort** — there is no shared template; do not lazily clone another desk (owner decision).

**What's reusable across desks is the *structure*, not the *look*.** Reuse: the dual-URL + Skim/Deep model, the §9 winners/losers de-dup pattern, the deep-but-plain Layman approach, the component architecture, and the typography/formatting system (`_program` spec). Do **not** reuse the palette: credit's **Warm Brass is credit-only** — the owner is lukewarm on it and it ships only because it works for that one page, *not* as the site theme. Each new desk gets its **own** palette, chosen fresh from the approved dark combos (`_program/APPROVED-THEMES.md`) and shown to the owner as 2–3 `visualize` options before building, via its own `skin-*.css` + `data-skin` on the route.

The loop for every URL:
1. **Build / edit** on the design branch (in the `vegaready` worktree).
2. **Deploy to staging** with `npm run stage` (§4). Publishes to a *separate* staging URL, never production.
3. **Owner reviews the live staging URL** and gives feedback (usually a screenshot + a critique).
4. **Iterate** — typically several passes per URL. Hunt for gaps; don't declare done early.
5. When the owner approves, **ship to production** (merge to `main`, §4).
6. Move to the next URL.

---

## 2. How the owner communicates / what they expect

- **Be concise and direct.** Minimal preamble, no filler. "Remove words and keep the point."
- **Use the tools** — Desktop Commander, GitHub MCP, Claude-in-Chrome, the `visualize` widget, skills, subagents. The owner explicitly wants these used, not left on the table.
- **Don't presume.** Confirm *which* page/mode is being discussed before acting (we wasted a cycle assuming "analyst" when the owner meant "layman").
- **Show, don't guess, on subjective calls.** For anything taste-driven (names, colors, palettes, layout direction) the owner rejects blind attempts. Present 2–3 concrete options **visually** (the `visualize` widget) and let them choose. This worked for the palette; guessing failed badly on naming.
- **Use `AskUserQuestion`** before starting multi-step work when scope/direction is genuinely open. But don't over-ask: pick the obvious default and proceed when there is one.
- **Verify before claiming.** The owner has repeatedly caught "it's done/deployed" when it wasn't. Check the live URL (Claude-in-Chrome or a cache-busted `web_fetch`) before asserting state.
- **Approval signals:** "much better", "excellent", "great work", "I like it" = good, move toward shipping / next. Critiques arrive blunt and specific (often with a screenshot); treat each as a standing requirement, not a one-off.
- **Always hand over the exact command** when the owner is the one running it, and exact dashboard click-paths for Cloudflare (the agent can't click there).

---

## 3. The integrity contract (non-negotiable — it's the product's whole premise)

- **Never invent data.** Tiles reading "feed pending" are *honest placeholders* for feeds not yet wired. Do **not** fill them with made-up numbers to look complete — that breaks the thing the site is built on. Wire real/scenario data if it exists; otherwise keep the honest placeholder.
- Every figure carries a **value type** (baseline/current/nowcast/forecast/scenario) and a **source tier** (T1 primary → T4 derived/VegaReady-model).
- Separate **observed fact** from **interpretation**; interpretation gets its own confidence chip and never inherits the data's confidence.
- Drivers are shown as **named buckets + an explicit residual**, never one invented cause.
- Catalysts **annotate** the durable framework; they don't replace it — except when the funding/transmission channel flashes stress across the board, in which case it *becomes* the regime.

---

## 4. Deploy mechanics (commit these — they bit us repeatedly)

### Two ways to run the build/deploy
- **The agent can run it directly** via **Desktop Commander** (`mcp__Desktop_Commander__start_process`), which has real Windows host process access. This is the best path: the agent controls the process, reads the true output, and **the type-ahead pitfall can't happen.** Confirm Desktop Commander works at session start; for production pushes, get owner sign-off first.
- **Or hand the owner the command** to paste. If so, give the single chained command, never two lines (see the pitfall below).

### Staging (the review surface) — ONE command
```
cd C:\Users\cwm4t\ClaudeCode\vegaready
npm run stage
```
`stage` = `node scripts/build-data.cjs && astro build && wrangler deploy --name vegaready-staging`. Review at **https://vegaready-staging.royal-rice-7384.workers.dev** (optional custom domain `test.vegaready.com`). Confirm the output says **`Uploaded vegaready-staging`** (NOT `vegaready`).

- **`--name vegaready-staging` is mandatory and the ONLY override that works.** The Astro CF adapter's `dist/client/wrangler.json` + `.wrangler/deploy/config.json` redirect makes wrangler ignore `--env staging` and any root `env.staging` block — it would deploy to `name:"vegaready"` = PRODUCTION. `--name` overrides post-resolution. **Never use `--env staging` or a bare `wrangler deploy` for staging.**
- **TYPE-AHEAD PITFALL (hit twice):** pasting `npm run build` and the wrangler line as two separate lines makes Windows `cmd` type-ahead the deploy line into stdin *during* the build, so it never runs — build succeeds, nothing uploads, staging stays on the OLD build. Tell-tale: output ends at `[build] Complete!` with no `⛅️ wrangler` / `Uploaded vegaready-staging`. Fix: single `npm run stage`, or run the deploy line alone after the build, or run via Desktop Commander.

### Production (going live) — git push, in the OTHER worktree
The `vegaready` Worker is git-connected; **pushing `main` is the deploy** (vegaready.com is its custom domain). No manual wrangler step for prod.
```
cd C:\Users\cwm4t\ClaudeCode\vegaready-main
git status                                       :: expect: on main, clean
git pull origin main
git merge -X ours p0-s01-design-tokens -m "Merge <feature> into main"
git push origin main                             :: the deploy; ~1–3 min build
```
**`-X ours` is mandatory** — keeps main's live data/pipeline files on conflict (`src/data/iwt-bundle.json`, `public/data-status.json`, `scripts/build-data.cjs`, `src/pages/dashboard/*`, `data-history/*`); redesign code merges cleanly (0 conflicts). vegaready.com shows the OLD build for ~60s while rebuilding — not a failure.

### Recovery
- **Design build pushed to prod by mistake** (output said `Uploaded vegaready`): dashboard → `vegaready` → Deployments → newest **`main`-tagged** version → ⋯ → Roll back. Instant.
- **Botched merge/pull on the design branch:** `git reset --hard HEAD` (work is safe in commits + `git stash`). NEVER `git pull origin main` while on the design branch — it merges main *into* the design branch and conflicts.

### Preview-then-promote (the methodology)
`vegaready-staging` is a **preview on a real, deployed URL** for the owner (and other sessions) to review *before* it touches vegaready.com. Lifecycle of any change: **edit → `npm run stage` → review on the staging URL → iterate → when approved, `-X ours` merge to `main` + push → live.** Two separate Cloudflare Workers, same repo; nothing reaches the real domain until the `main` push.

---

## 5. Verification (how to know it actually worked)

- **Compile check** (catches `.astro` template/syntax errors; the sandbox CANNOT run a full Windows `npm run build`):
  ```
  node -e "import('@astrojs/compiler').then(async m=>{const fs=require('fs');const r=await m.transform(fs.readFileSync('src/components/CreditDesk.astro','utf8'),{filename:'x.astro',sourcemap:false});const e=(r.diagnostics||[]).filter(d=>d.severity===1);console.log(e.length?'FAIL':'OK')})"
  ```
  Run via Desktop Commander (host) or the sandbox bash from the repo root. The bash mount sometimes corrupts reads (a bogus "package.json invalid" error) — that's the mount, not your code; Desktop Commander or the Read tool see the real file.
- **See the real page:** Claude-in-Chrome — `tabs_context_mcp` → `navigate(stagingURL)` → `get_page_text` (read all content) / `screenshot` (judge layout). This is the reliable way to review and to confirm a deploy landed.
- **`web_fetch` caveats:** it returns markdown that **includes hidden (`display:none`) content**, so it can't distinguish skim from deep, and it has returned **stale** results between calls (a deploy can land mid-conversation). Use a cache-buster (`?cb=…`) and grep the saved result for a *new-build marker string*.

---

## 6. The reading model the desks use (don't break it)

Each desk is **dual-URL + dual-detail**, one component rendering both:
- **Audience (separate URLs):** Analyst `/markets/<desk>` (`<body data-mode="analyst">`), Layman `/layman/<desk>` (`<body data-mode="overview">`). The component takes a `mode` prop. `.an-only` / `.ov-only` blocks are shown/hidden by `body[data-mode]`; `.an-block` hides analyst-only chrome (e.g. the technical hero) in overview mode. **Analyst = the dense master. Layman = an independent, simpler, shorter retelling — never the analyst page with explanations bolted on.**
- **Detail (Skim/Deep toggle within a page):** CSS rule `body[data-disc="skim"] .deep{display:none}`. Skim = tight executive read; Deep = everything. The inline script defines `apply(mode)` → sets `body[data-disc]`, toggles the on-state of the `.disc` buttons, and on the analyst page **opens every `<details class="dcard">` when deep**. Default is read from `<body data-disc="…">` in the route file (currently both pages default `deep`).

---

## 7. Anatomy of the desk component (so you can edit it safely)

`CreditDesk.astro` is the model. Structure, top to bottom:

**Frontmatter (`---` … `---`):** imports (`desk.css`, `desk-content.css`, `desk-v2.css`, `skin-brass.css`; `credit.js`, `watchmetrics.js`, `catalysts`); `const { mode } = Astro.props`; helpers (`fmt`, `wvc`, `confCls`, `gl` glossary, `wlRole`). Then the **content data arrays**:
- Analyst: `gloss`, `drivers`, `read30`, `falsifiers`, `valueTypes`, `sourceTiers`, `T` (the §1–§8 topic specs — each `{eye,h,q,fresh,chart,lead,kpi,track,lv,src,tier,feed}`), `ratingsBuckets` + `sectors` + `cohortMatrix` (cohorts), `scenRows` (scenario matrix), `fundingChannel`, `sources`, `charts` (illustrative SVG strings), and `wlWin/wlMix/wlLose` (winners/losers grouped into lanes from `credit.js`'s `winnersLosers`).
- Layman (the `ov*` family): `ovBeats` (the five cards), `ovHelped`/`ovExposed` (+`*Deep`), `ovWatch`(+Deep), `ovGloss`(+Deep), `ovHowWorks` (`[title, lead, [bullets]]`), `ovCanary`(+`Pts`), `ovGulfLead`/`ovGulfChain`/`ovGulfClose`, `ovScenarios`, `ovExampleLead`/`ovExampleSteps`, `ovMisconceptions`, `ovKnow` (`[title, lead, [bullets]]`).

**Markup:** utility ticker · masthead · **`<Wayfinder trail={…} rail={…} />`** (the site-wide crumb + sibling rail — mandatory on every masthead page, kit §4e; trail/rail consts live in frontmatter, branched on `mode`) · freshbar (with the Layman/Analyst toggle) · sticky `secnav` (with the Skim/Deep `.disc` and the `↑ Top` chip — the ONE frozen bar per kit §4f; the masthead is never sticky; layman pages get a sticky `.laydeck` twin at the top of `.ov-only`) · `<section class="hero an-block" id="state">` · `.orient an-block` (30-sec read + falsifiers) · **`.ov-only`** (the whole Layman page) · **`.an-only`** (the analyst spine §1–§10, cohorts, §9 catalysts, §10 evidence) · related-desks · brief funnel · footer.

**`<style>`** (Astro-scoped) then an inline **`<script is:inline>`** (live-as-of fetch, the Skim/Deep `apply()`, scrollspy IntersectionObserver, sortable cohort table).

**CSS class vocabulary** (so you reuse, not reinvent): desk chrome `.utility .masthead .freshbar .secnav .disc .hero .deskpanel .dsec .sec-head .eyebrow .lead .fresh-tag`; analyst blocks `.kpibar .kpi .snap .snap-chart .track-grid .track .lvbox .srcline .dcard .dtbl .xa .xa-tile .attrib .takes .catmod .legend-grid .glosslist .srcgrid`; winners/losers lanes `.wl3 .wl-lane .wl-win/.wl-mix/.wl-lose .wl-tag`; reading-mode `.an-only .ov-only .deep .an-block`; **Layman** `.lay-hero .lay-h1 .lay-lede .lay-gauge .lay-sec .lay-sech .lay-kpis/.lay-kpi .lay-cards/.lay-card .lay-wl/.lw-col .lay-watch .lay-gloss .lay-foot`; **formatting components** `.lay-pq` (pull-quote), `.lay-flow/.lf/.lf-n/.lf-t` (numbered stepped flow), `.lay-exc .exc-lead .exc-pts` (lead + bullets), `.lay-scn/.lay-scn-r/.ls-if/.ls-then` (claim→explanation rows). Data attributes: `data-mode` (audience), `data-disc` (detail), `data-skin` (palette).

---

## 8. Editing safely (gotchas that cost real time)

- **Typographic punctuation.** The files use curly quotes/apostrophes/dashes (`'`, `"` `"`, `–`, `—`), not straight ASCII. JS strings are single-quoted but contain **curly** apostrophes so they don't break the delimiter. When using the Edit tool, **reproduce curly punctuation exactly** in `old_string` — a straight-vs-curly mismatch is why an `ovGulf` edit once failed to match. If a match fails, `Grep`/`Read` the exact current line and copy it verbatim (strip the Read line-number prefix).
- **CSS scoping.** `desk*.css` and `skin-brass.css` are **imported** → global (not scoped). The component's own `<style>` block **is** Astro-scoped (it rewrites selectors), so it can't target `html`/`body[data-skin]` reliably — that's why the **brass skin lives in an imported file** (`skin-brass.css`), keyed on `html[data-skin="brass"]`, and is applied by adding `data-skin="brass"` to the route's `<html>`. To add a per-desk palette, copy that pattern (new `skin-*.css` + `data-skin` on the route), don't try to do it in the scoped `<style>`.
- **Generated files.** Never hand-edit `src/data/analysis/*.js` (incl. `credit.js`, `watchmetrics.js`) — they're generated from IranWarTracker cascades. Edit the canonical JSON there and re-run `node scripts/build-cascades.cjs`. The *page content* you author lives in the component (the `ov*` arrays, the `T` specs), which is fine to edit.
- **One writer per file.** More than one agent session has edited `CreditDesk.astro`, which shifted content under us mid-task. **Re-read the file before editing** if another session may have touched it; the owner will say when one has.

---

## 9. The website copy voice (for content you author)

- **Register:** editorial, confident, FT/Economist — plain but never dumbed-down, never hype. Active voice. Concrete over abstract.
- **Analyst copy:** dense, precise, source-tiered, with the honesty scaffolding (value types, observed-vs-interpretation, buckets+residual).
- **Layman copy:** genuinely *deep but plain* — explain mechanisms with a concrete example or analogy, not just a one-line definition. Deep ≠ shallow-but-broad. The owner specifically wants substance, then broken into scannable format (lead + bullets, stepped flows, a pull-quote), not walls of prose.
- **Emphasis in prose:** `<b>` for the load-bearing term, `<i>` for a light stress; never whole italic paragraphs. Use the brand pull-quote sparingly for the one line worth enlarging.

---

## 10. The critiques the owner has given (the standing bar)

1. **Illustrative charts were "massive, full-width."** Cap them: `.snap` two-column (KPIs + chart), `svg{height:~122px;width:auto}`. Illustrative SVGs are thumbnails, never heroes.
2. **Analyst jargon leaked into Layman** (the technical "30-second read" showed in layman). Wrap analyst-only blocks `.an-block`/`.an-only` so they're hidden in overview mode.
3. **Winners/losers shown three times in §9.** Show it **once**, as grouped lanes (Beneficiaries / Mixed / Exposed); strip it out of the detail cards.
4. **"Colors are horrible; separation isn't clean."** → the **Warm Brass** skin (owner chose it from 3 visual palette options): warm near-black canvas, cream ink, ONE brass accent + a reserved cool data tone + semantic pos/neg; cards clearly separated (visible hairline); flat accent, no gold-gradient buttons.
5. **Deploy "didn't work" repeatedly** = the type-ahead pitfall. Always `npm run stage` (or run via Desktop Commander); confirm `Uploaded vegaready-staging`.
6. **Layman "isn't deep / lacking content."** Needs genuinely deep *plain-language* content (worked example, the cycle, the dollar-plumbing chain, misconceptions), not brief bullets.
7. **"Long body paragraphs — break them up without reducing content."** Follow the Typography spec (§11): 25–35-word body blocks; lead line + short bullets; numbered stepped sequences for narratives/chains; pull-quotes for emphasis; body bumped to ~15.5px/1.62 on dark for "larger wording."
8. **CTA washed out** (cream text on brass). There are TWO CTA markup patterns — `<a class="cta-frame">` and `<span class="cta-frame"><a>` — style BOTH, dark text on brass.
9. **Don't fake data** (the integrity contract). Empty tiles stay honest until the data layer is wired.
10. **Multi-session collisions** caused confusion. One writer per file; re-read before editing.
11. **Always share the cmd to run** (or run it via Desktop Commander and show the output).
12. **Don't presume which page/mode** the owner means — confirm (analyst vs layman).

---

## 11. The brand/typography rules (the spec is locked)

Authoritative: `_program/artifacts/Typography-Emphasis-Spec.md` (owner-approved).
- **Type scale:** H1 24/28/40 · H2 18/20–24/36 · H3 16/17–18/24 · **Body 14/15.5–16/18 @ line-height 1.6 on dark** · Bullets 13–14px (5–10 words) · Pull-quote 18–22px italic Playfair · one hero stat per page · micro-labels 10.5–11px caps +.05em.
- **Body word cap: 25–35 words/block** — break longer prose.
- **Pull-quotes:** centered, Playfair/serif italic, gold/bone fill or a short gold rule, generous space. **Never in the same view as a CTA; no CTA right after a quote.**
- **Weight law:** weight rises as contrast/chroma falls; any coloured text is bold. Footers regular only. No italic *paragraphs* (italics = quotes/framing sublines only).
- **Emphasis hierarchy:** Bold > Size (hero once) > Ink contrast > Semantic colour (always bold) > Fill containers (chips/callouts/quote fills) > Underline (links + key-stat).
- Design baseline is **DARK-PRIMARY** (9 approved dark combos in `_program/APPROVED-THEMES.md`; light = alternate). Fonts: Playfair Display (display), Fraunces (body), Lora (numerals/labels).

---

## 12. Anatomy of one iteration (worked example)

How a typical "improve the credit Layman page" cycle ran, end to end:
1. **Re-read** `CreditDesk.astro` (another session may have touched it). Note the current `ov*` arrays + markup.
2. **View the live page** via Claude-in-Chrome (`navigate` + `get_page_text`) to see exactly what the owner sees.
3. **Make the change** on the design branch with the Edit tool — restructure data arrays + markup, add CSS in the scoped `<style>` (or `skin-brass.css` for palette). Reproduce curly punctuation exactly.
4. **Compile-check** with the `@astrojs/compiler` one-liner.
5. **Deploy to staging** — `npm run stage` (via Desktop Commander, or hand it over) → confirm `Uploaded vegaready-staging`.
6. **Tell the owner** what changed in 2–4 sentences + the staging URL; optionally view it yourself to confirm it landed.
7. **Iterate** on their feedback (often a screenshot). Several passes is normal.
8. When approved → ship to `main` (`-X ours` merge + push, in the `vegaready-main` worktree).

---

## 13. Pre-handover / pre-"done" checklist

Before you say a change is ready or hand over a command:
- [ ] Re-read the file if another session might have edited it.
- [ ] Edits compile (`@astrojs/compiler` clean).
- [ ] No invented data; "feed pending" left honest.
- [ ] Formatting honors the type spec (word caps, bullets, pull-quote rules).
- [ ] The exact command is the single `npm run stage` (no two-line paste), or you ran it via Desktop Commander and saw `Uploaded vegaready-staging`.
- [ ] You verified the live staging page (Chrome) rather than assuming.
- [ ] Production changes are owner-approved before any `main` push.

---

## 14. First moves for a fresh session

1. Read this file, `PROJECT-CONTEXT-AND-FILES.md`, and `CLAUDE.md` fully.
2. Confirm Desktop Commander + GitHub MCP + Claude-in-Chrome are available; confirm the worktrees and the staging Worker exist.
3. Ask the owner which URL we're iterating, and whether another session has touched its files.
4. View the current live staging page (Chrome) before editing — work from reality.
5. Edit on the design branch → compile-check → `npm run stage` → review → iterate.
6. Only merge to `main` when the owner approves the staging result.
