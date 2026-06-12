# VegaReady — Improvement Review & Program Upgrade

**Date:** 2026-06-11 · **Author:** Claude (full-program review requested by owner)
**Inputs:** all 23 `docs/VegaReady-*.md` planning docs, the full `_program/` brand corpus, `INSTRUCTIONS.md`, `PROJECT-CONTEXT-AND-FILES.md`, `CLAUDE.md`, and a spec-vs-code audit of `src/styles/*` + `CreditDesk.astro` + `EquitiesDesk.astro`.
**Companions produced with this review:** `_program/AGENT-BRAND-KIT.md` (the agent-facing brand fix) · `docs/LOOPS.md` (formalized work loops) · `_research/` (research prompt/return system).

---

## 0 · Verdict in one paragraph

The vision is coherent and the discipline (integrity contract, bespoke desks, staging loop) is right. The program's weaknesses are not strategic — they are **documentary and mechanical**: the planning layer has gone stale relative to the credit build, the brand system is fragmented across ~14 docs + 3 unreconciled CSS token namespaces (which is *the* reason Opus agents misapply it), several referenced artifacts don't exist, and five whole workstreams (remaining desks, data wiring, SEO, analytics, mobile/a11y QA) have no plan at all. Everything below is fixable with docs and process — no rebuild required.

---

## 1 · Authority order (adopt immediately)

There are six overlapping "master" documents and no statement of which wins. Adopt this cascade; anything lower that conflicts is **superseded**:

1. `CLAUDE.md` + `INSTRUCTIONS.md` + `PROJECT-CONTEXT-AND-FILES.md` — current operating truth.
2. `_program/AGENT-BRAND-KIT.md` (new) — operative brand law for builders. It reconciles, and where it conflicts with older brand docs, **it wins** (it cites its sources).
3. `_program/APPROVED-THEMES.md` + `DECISIONS.md` — brand history + verdict register (deep reference).
4. `docs/VegaReady-Master-Handoff-2026-06-08.md` + `VegaReady-Restructure-Master-Plan.md` — strategy reference.
5. Everything else in `docs/` — background; check date before trusting.

**Retire/mark superseded:** `docs/VegaReady-Master-Handoff.md` (the 06-02 version — add a one-line "SUPERSEDED by 2026-06-08" header), and treat `VegaReady-Execution-Plan.md` + `VegaReady-Master-Checklist.md` as *dependency maps*, not live to-do lists (see §3).

---

## 2 · Findings — planning layer

### 2.1 Staleness (confirmed)
- `VegaReady-Execution-Plan.md` ("nothing has been executed") and `VegaReady-Master-Checklist.md` ("zero URL moves") predate the credit build. Reality: credit desk done on staging, dual-URL live, markets hub re-homed, legacy archived.
- `VegaReady-Restructure-Master-Plan.md` plans a `/regime/` route that doesn't exist — apparently absorbed by `/today/`. Needs a one-line decision: dropped or deferred.

### 2.2 Contradictions (confirmed)
1. Dashboard URL end-state: canonical `/dashboard/*` (Master-Handoff) vs migrate under `/catalysts/iran-gulf-conflict-2026/*` (Restructure-Plan). **Owner decision needed.**
2. `naming.ts`: "already standardized" vs "create in P1.A1". (It exists; mark done.)
3. Credit-Desk-SubPlan promises IG/HY OAS *and* lists it feed-pending on the same page. (True state: feed-pending; the wiring plan in §5 resolves this.)
4. Credit and Equities research prompts share an identical, equities-flavored Part F — each desk's prompt needs its own extensibility section.

### 2.3 Gaps — workstreams with no plan
1. **Remaining desks** (Rates, FX/gold-fx, Commodities/energy, Crypto, Cross-Asset): no subplans, no sequence, no per-desk definition of done.
2. **Data wiring**: no feed→tile map, no API/source list, no cadence/SLA. Credit ships with honest "feed pending" tiles but no path to fill them.
3. **SEO**: dual-URL canonicalization (analyst vs layman), 301s for the conflict-page re-home, per-desk meta/OG — all unplanned.
4. **Analytics/measurement**: no way to know whether the Layman mode, Skim/Deep, or the funnel work. Even privacy-light (Cloudflare Web Analytics) would answer this.
5. **Mobile/responsive + accessibility QA**: the UX audit itself flags table scroll-clipping on mobile; no QA gate exists. No contrast/focus/reduced-motion checks in the loop.
6. **Home + `/today` redesign**: deferred with no spec, yet they're the front door.
7. **Maintenance cadence**: freshness promises ("live as of") need an owner/cadence statement per content type.

### 2.4 The phase model is the wrong frame now
Phases 0–5 (waterfall) were designed before the desk-by-desk loop emerged. The credit build proved the real unit of work is **one desk through the loop**. Keep the phase docs as *dependency reference* (what must precede what), and run the program as a **desk pipeline + parallel workstreams** (data, SEO, front door). `docs/LOOPS.md` formalizes this.

---

## 3 · The upgraded program (proposed roadmap)

Run as **one desk in the loop at a time** + **at most one parallel workstream**, every cycle ending in a staging review.

| # | Track | Definition of done |
|---|---|---|
| 1 | **Ship credit to prod** | QC pass (Brand-QC loop) → owner approval → `-X ours` merge + push → verify vegaready.com |
| 2 | **Equities desk rebuild** | Credit-standard structure (dual-URL, Skim/Deep, deep Layman, §9 de-dup) + its **own** palette (2–3 `visualize` options first) + research return ingested |
| 3 | **Data wiring v1** | Feed→tile map executed for credit (FRED OAS series etc.); "feed pending" only where no honest source exists; auto-refresh documented |
| 4 | **Front door** (`/` + `/today`) | Spec'd, optioned, built in the loop |
| 5 | **Remaining desks** (suggested order: Rates → FX → Commodities → Crypto → Cross-Asset; Rates first because credit content cross-references funding/UST mechanics) | Same DoD as equities |
| 6 | **Conflict-page re-home + SEO** | 6 dossier pages moved with 301s; canonicals across analyst/layman pairs; per-desk meta/OG; sitemap |
| 7 | **Analytics + QA hardening** | Cloudflare analytics on; mobile/a11y checklist added to Brand-QC loop |

**Per-desk definition of done** (applies to every desk, now and future):
- [ ] Analyst + Layman URLs render, both modes meaningful
- [ ] Skim/Deep works; Deep expands detail cards
- [ ] Own skin (`skin-*.css` + `data-skin`), chosen from approved combos via visual options
- [ ] All §1–§10 sections present; winners/losers shown once
- [ ] Live signals wired where the registry has them; honest "feed pending" elsewhere
- [ ] Brand-QC checklist passes (AGENT-BRAND-KIT §7)
- [ ] Compile clean, staged, visually verified in Chrome, owner-approved

---

## 4 · Findings — brand system (why agents misapply it)

Verified first-hand, not just subagent claims:

1. **Token fragmentation (the root cause).** Three unreconciled namespaces: `global.css` uses contract names (`--accent`, `--chart-hero`, `--benchmark`); `desk.css` uses its own (`--eyeb`, `--struct`, `--data`, `--bench`) **and desk pages load only desk.css, never global.css**; `skin-brass.css` overrides the desk names. An agent reading DESIGN-CONTRACT writes `var(--accent)` — undefined on every desk page. Nothing in any doc says so.
2. **Stale default.** DESIGN-CONTRACT v2.0 §1 still names **WB5 Deep Desk** as the dark default; APPROVED-THEMES line 331 records its **demotion** ("too faded, not high end") with **Oxford Black (A4)** as interim default. An agent reading the contract first builds on a demoted theme.
3. **Broken references.** The contract's machine payload `_program/artifacts/vegareedy-tokens-v3.1.json` and `VegaReady-Guide-v3.1.html` **do not exist** in `_program/artifacts/` (verified by directory listing). Agents can't programmatically load tokens; the promised PR token-lint also doesn't exist anywhere in the repo.
4. **The reference implementation teaches violations.** `CreditDesk.astro` contains inline `style="font-family:'Lora'…font-size:11px…"` attributes (violating the no-literals lint surface), confidence chips with **colour+text but no status glyph** (law: colour+shape+symbol, never colour alone), and a pull-quote sharing a scroll-view with a CTA (law's intent breached). Agents imitate the reference, so they inherit the violations.
5. **No skin recipe.** Creating a per-desk skin is *the* recurring task, and no doc says which tokens a skin must define. skin-brass.css is a good model but omits chart/grid tokens — a mechanical clone breaks on charts.
6. **Prose laws without verifiable form.** "CTA 1–5% of painted area", "≥3× cap-height blank space" — un-checkable by an agent mid-build. They need proxy rules (e.g., "one `.cta-frame` per view; never adjacent to a quote or risk block").
7. **Scatter.** Styling one component correctly requires reading 4+ files with slightly different wordings.

### The fix (delivered)
**`_program/AGENT-BRAND-KIT.md`** — a single, self-sufficient, agent-facing brand law: authority statement, the three-namespace reconciliation table, the skin-creation recipe with a mandatory token checklist, the literal type scale, the hard-law checklist, a do-not-imitate list (the reference's known violations), and a pre/post-build verification checklist. Agents henceforth read **only the kit** (plus the skin they're building); the deep corpus stays as history.

**Owner decisions the kit flags as OPEN:**
- O-1: Confirm Oxford Black (A4) as the desk-page base default (it is what desk.css ships) and let the kit correct DESIGN-CONTRACT §1, or schedule the P0-S02 flagship trial to pick a final default.
- O-2: Bless the desk.css namespace (`--eyeb/--struct/--data/...`) as the operative token set for desk pages (recommended — it's reality), or fund a rename migration to contract names.
- O-3: Regenerate a real `tokens.json` from desk.css + skins (recommended; trivial) so agents and a future lint can consume it.
- O-4: Fix the reference violations in CreditDesk.astro (inline styles → classes; add status glyphs) *before* equities copies the pattern.

---

## 5 · Data-wiring plan v1 (closing gap §2.3-2)

The watch registry (`watchmetrics.js`, generated from `IranWarTracker\data\cascades\watch-metrics.json`) is the single intake point — new feeds enter by adding/updating metrics there, never by hand-editing generated JS.

**Credit's feed-pending tiles → candidate sources** (to be validated by research return R-02):
- US IG OAS — FRED `BAMLC0A0CM` · US HY OAS — FRED `BAMLH0A0HYM2` · HY distress ratio — derivable from FRED HY distressed subset or vendor · trailing default rate — Moody's/S&P public summaries (monthly, T2) · EMBI already live (signal 2.1).
- Pipeline: a fetch script (pattern: extend `scripts/build-data.cjs` or a new `scripts/fetch-feeds.cjs`) writes values+timestamps into the cascade JSON → `build-cascades.cjs` → registry → tiles. Every wired value carries source tier + value type per the integrity contract; cadence stamped in `freshness.js`.
- Rule: a tile flips from "feed pending" only when the feed is **automated** (not a one-off paste), otherwise it stays pending with the value in body text as a dated observation.

---

## 6 · Research system (closing the "give me prompts" loop)

Created `_research/` at repo root (full convention in `_research/README.md`):
- `_research/PROMPTS/P-XX-*.md` — numbered, self-contained prompts ready to paste into Perplexity (deep research mode). Each states its return filename.
- `_research/RETURNS/R-XX-*.md` — **owner drops the report here** under the stated name (or pastes in chat; I file it).
- `_research/INDEX.md` — ledger: prompt → status (open/returned/ingested) → what it fed.

**Batch 1 shipped:** P-01 equities desk research (Part F fixed, reusable template) · P-02 credit data feeds (validates §5) · P-03 dual-URL SEO strategy · P-04 financial-editorial design benchmark (informs front door + future skins) · P-05 per-desk research prompt template (rates/FX/commodities/crypto/cross-asset).

---

## 7 · Loops (formalized in `docs/LOOPS.md`)

Five loops with explicit entry/exit criteria so any session can pick one up mid-cycle: **Desk Loop** (the build iterate-on-staging cycle), **Research Loop** (prompt → Perplexity → return → ingest), **Brand-QC Loop** (the kit's checklist against a staged page), **Data Loop** (cascade JSON → regenerate → verify tiles), **Ship Loop** (approval → `-X ours` merge → push → verify prod). LOOPS.md also defines the handoff state-block a session writes before stopping, so the next session resumes without re-discovery.

---

## 8 · Immediate next actions (proposed)

1. Owner reads this review + the AGENT-BRAND-KIT; rules on O-1…O-4 and the two §2.2 decisions (dashboard URL end-state, `/regime/`).
2. Owner runs P-02 (data feeds) and P-01 (equities) in Perplexity; drops returns in `_research/RETURNS/`.
3. Next session: fix CreditDesk reference violations (O-4) → Brand-QC pass → **ship credit to production**.
4. Then: Equities Desk Loop, with palette options via `visualize` before any code.
