# VegaReady — The Loops (operating system for all work)

**Date:** 2026-06-11 (rev. 2026-06-14 after the credit completion cycle). Every piece of VegaReady work runs inside one of five loops. Each loop has an entry condition, a cycle, an exit condition, and a handoff block so ANY session (or agent) can resume mid-cycle without re-discovery. Loops compose: the Desk Loop calls the Research, Brand-QC, and Ship loops. **For the full per-desk build standard — the four-tier dependency order, content laws, visual system, QC gate, and ship runbook — see `docs/VegaReady-Desk-Build-Playbook.md` (the Playbook is the generalized recipe; these loops are its operating cadence).**

---

## L1 · Desk Loop (the master build cycle — one URL at a time)

**Entry:** owner names the desk. Confirm no other session has the files open.
**Cycle:**
1. **Research** — if the desk has no ingested research return, run L2 first (prompt already exists or generate from the P-05 template).
2. **Spec** — write/refresh `docs/VegaReady-<Desk>-Desk-SubPlan.md` (model: credit's): content spec per §1–§10, Layman plan, signals from the catalog, feed-pending list.
3. **Palette** — pick 2–3 candidates from the 9 approved combos → show via `visualize` → owner picks → build `skin-<desk>.css` per AGENT-BRAND-KIT §3.
4. **Build** — component + both routes, on the design branch. Structure from EquitiesDesk/CreditDesk (the references: chapters, designed Skim, plain-deep Layman); content bespoke; kit laws throughout. **Build in tier-dependency order (Playbook §1) — never compress/translate unfinished content:** ① Analyst Deep (the master) → ② Analyst Skim (compress it) → ③ Layman Deep (retell it, chapters, anchored numbers, figures) → ④ Layman Skim (compress the retelling). Work **one section/chapter per micro-loop** (build → stage → curl-verify → spot-check → commit), owner ratifies between loops. **Mandatory chrome:** `<Wayfinder trail rail />` after `.masthead` (kit §4e); ONE frozen deck (kit §4f). Anchor every layman number (Playbook §3); keep pending tiles honest.
5. **Stage** — compile-check → `npm run stage` → confirm `Uploaded vegaready-staging`.
6. **QC** — run L3 (Brand-QC). Fix fails, restage.
7. **Review** — owner reviews staging URL; critiques become standing requirements; iterate 4→7 until "approved".
8. **Ship** — run L5.

**Exit:** desk live on vegaready.com, per-desk Definition of Done checked (Improvement-Review §3).
**Handoff block** (write into the desk's SubPlan when pausing): current step (1–8) · last staging deploy timestamp · open critiques · files touched this cycle.

---

## L2 · Research Loop (Perplexity / external)

**Entry:** a task needs facts/specs the repo doesn't have.
**Cycle:**
1. Agent writes `_research/PROMPTS/P-XX-<slug>.md` (self-contained, paste-ready; states its return filename `R-XX-<slug>.md`).
2. Agent adds a row to `_research/INDEX.md` (status: **open**) and tells the owner which prompt(s) to run.
3. **Owner** runs the prompt in Perplexity (deep research) and drops the report at `_research/RETURNS/R-XX-<slug>.md` (or pastes in chat; agent files it verbatim).
4. Agent marks **returned** → validates (cross-check key claims; integrity contract applies — a research claim is T3 until verified against a T1/T2 source) → ingests into the spec/cascade/doc it was for → marks **ingested** with a note of what it fed.

**Exit:** INDEX row reads ingested.
**Rule:** research returns are raw material, never published verbatim; numbers only enter pages via the cascade/registry path with tiers.

---

## L3 · Brand-QC Loop (gate before any owner review or ship)

**Entry:** a staged page claims readiness.
**Cycle:** run AGENT-BRAND-KIT §7 verification end-to-end (grep for literals → token completeness → type spot-check → CTA/quote/status/chart laws → mode/disc gating → integrity → compile/stage/view of BOTH URLs in skim+deep).
**Verification methods (Playbook §6 — use these, in this order of trust):**
- **curl-grep is the workhorse.** `curl -s <trailing-slash URL>` then grep for content markers, **escaped HTML** (`&lt;(div|span|svg|path|b|i)&gt;` must be empty), **leaked template expressions** (`{x.`/`!= null`/`.map(` must be empty), **data wiring** (the live numbers), and **counts** (`grep -o … | wc -l`). Fast, authoritative, no render glitches.
- **JS layout measurement** for "is it actually broken?" — Chrome `javascript_tool` + `getBoundingClientRect()` on figures/sections; use it to **debunk false alarms**.
- **⚠ Chrome screenshot paint-timing glitch:** standalone `screenshot`/`scroll_to` and **scroll-UP** often capture a pre-paint **black frame**; **scroll-DOWN** paints, a `wait` helps. A black frame is almost always this glitch, **not** a layout bug — confirm via curl/JS before "fixing." Layman defaults to `data-disc="deep"`; click SKIM (or measure `offsetParent` via JS) to inspect Skim.
- **Verify audit claims against the file:** grep the actual source to confirm a reported omission before acting — audits overstate.
**Exit:** all boxes pass → report "QC pass + staging URL" to owner. Any fail → fix → restage → rerun.
**Optionally** spawn a fresh subagent to run QC blind (it reads only the kit + the staged page — catches "author blindness"). Recommended for a whole-desk pass.

---

## L4 · Data Loop (wiring and refreshing real numbers)

**Entry:** a "feed pending" tile has a validated source (per R-02 or the registry), or a feed needs refresh/repair.
**Cycle:**
1. Edit canonical JSON in `IranWarTracker\data\cascades\` (esp. `watch-metrics.json`) — NEVER the generated `src/data/analysis/*.js`.
2. `node scripts/build-cascades.cjs` → regenerate.
3. Verify the tile renders the live value with value-type + source-tier chips; freshness stamp correct.
4. Stage and spot-check.

**Exit:** tile live + honest; automation documented (what updates it, how often).
**Rule:** a tile leaves "feed pending" only when its refresh is automated.

---

## L5 · Ship Loop (production)

**Entry:** owner explicitly approves the staged state. Never enter without approval.
**Cycle (Playbook §7 — the ★ steps are the ones that bit us):**
1. Commit all design-branch work. **Shell hygiene (cmd):** single `&` separators (not `&&`), plain-ASCII messages with **no `%`** and **no inner double-quotes** (cause "Access is denied"/mangled commits); em-dashes are fine.
2. In `C:\Users\cwm4t\ClaudeCode\vegaready-main`: `git status` (expect main, clean) → `git fetch origin` → `git pull origin main`.
3. `git merge -X ours p0-s01-design-tokens -m "<summary>"` (`-X ours` mandatory — preserves main's live data files on conflict).
4. **★ VERIFY THE MERGE CARRIED YOUR CODE — before pushing.** `findstr`/`grep` the **main worktree's** files for your new markers (a class, heading, token). `-X ours` can **silently drop your changes** on a conflicting hunk; never push a merge you haven't grepped.
5. **★ Discard local data regen.** If you built in the worktree, `build-data`/`fetch-feeds` rewrote `src/data/feeds/credit.json` + `iwt-bundle.json` → `git checkout -- src/data/…` so only the `-X ours`-preserved live data ships. (The worktree has **no `node_modules`**; a local `npm run build` fails at `astro` — **expected**, CI builds on push.)
6. `git push origin main` (= the deploy; ~1–3 min CI build; old build visible ~60s).
7. **Verify production by curl** on **trailing-slash** URLs: new-content markers present, **no escaped HTML**, and the *sibling tier still intact*.
8. Update the desk-state memory + the desk's completion plan.

**Exit:** production verified. **Recovery:** dashboard → vegaready → Deployments → newest `main`-tagged → Roll back. Botched local merge: `git reset --hard HEAD`. Never `git pull origin main` on the design branch.

---

## Session protocol (wraps every loop)

**Start:** read CLAUDE.md / INSTRUCTIONS.md / this file → confirm Desktop Commander + Chrome + GitHub MCP live → ask which loop/step we're in and whether another session touched the files → view current staging before editing.
**End (or pause):** write the handoff block (loop, step, files touched, open critiques, next action) into the relevant SubPlan or `_research/INDEX.md` → ensure staging reflects the last good state → summarize in 2–4 sentences + URL.

**Continuous/autonomous option:** for long grinds (e.g., a full desk build), the owner can start a Ralph Loop (`/ralph-loop` plugin) with the Desk Loop steps as the brief and L3 as the per-iteration gate — say the word and it gets configured.
