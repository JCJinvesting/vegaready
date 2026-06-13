# Credit Desk Completion Plan

**Goal:** bring the credit desk to full **equities parity** (chapter system + designed Skim tier + cross-tier polish) and make it **textually complete** including its data tiles — per the O-18 sequence (text-complete now on the Node+JSON pipeline; the Postgres backend and the R-06 connectors come later). This is the first item in "finish the website textually before the backend."
**Governing law:** `_program/AGENT-BRAND-KIT.md` v1.7 (chapters, Skim §4c, tile-state chips, attribution footers, frozen deck, Wayfinder, anti-narrow-wrap). Data spec: `docs/VegaReady-R02-Credit-Feeds-Plan.md` v10 (verdict board, §2.6 connectors, §4.5 sequencing, `source_identified` state). Loop: `docs/LOOPS.md` L1 (micro-loops, pilot→ratify→propagate, staging-first). Reference implementation to match: `src/components/EquitiesDesk.astro`.

## 1 · Current state (audited 2026-06-13)
`CreditDesk.astro` = 835 lines vs equities ~1,900. **Has:** 11 layman sections (`lay-sech`) with real `ov*` content, 4 pull-quotes, the defect pass (read30 fix, inline-style purge, glyphs), the frozen `laydeck` + Wayfinder. **Missing vs equities:** chapter system (`chnav`/`laych` = 0), the entire designed Skim tier (`sk60`/`skdigest`/`skbanner`/`remember`/`skim-only` = 0), live data (no `data/feeds` import; 27 `feed pending` cells), full cross-tier polish. So the work is **reorganize existing content into chapters + build the Skim tier + wire data** — not write content from scratch.

## 2 · Proposed chapter taxonomy (owner confirm/adjust)
The existing 11 layman sections group cleanly into 7 chapters, parallel to equities':

| # | Chapter | Absorbs (existing `ov*`) |
|---|---|---|
| I | **Foundations** — what credit & spreads are; why this desk is the early-warning system | ovBeats opener + "why early warning" |
| II | **How credit works** — the credit cycle, plain | ovHowWorks |
| III | **Reading the signals** — the canary; spreads, compression vs decompression (live IG/HY/cohort tiles land here) | ovCanary + live spread tiles |
| IV | **Who's helped, who's exposed** — the map | ovHelped / ovExposed (+Deep) |
| V | **The Gulf angle** — the funding & dollar channel, in plain words | ovGulfLead/Chain/Close |
| VI | **What changes the call** — scenarios, what to watch, what people get wrong | ovScenarios + ovWatch + ovMisconceptions |
| VII | **How we know** — glossary, evidence, discipline | ovGloss + ovKnow |

## 3 · The build — six micro-loops (CW1–CW6), each staging-gated + owner-ratified
Each loop: edit one section/stream only → compile → `npm run stage` → verify (curl + DOM) → owner eyeballs on staging → ratify → next. One commit per loop; production untouched until CW6.

- **CW1 · Data consumer + §1 regime live + chip-anatomy pilot.** Add `src/data/feeds/credit.js` helper (reads `credit.json`, exposes `tile()`, `chip(state)`, `derived()`, `fmtBp`, `asOf`). Wire §1 + utility ticker to the **already-fetched FRED** values (IG/HY/cohort OAS, the **HY−IG compression headline**, percentile-vs-window). **Pilot the four-state chip + full-width attribution footer here** (2–3 `visualize` options first, taste-call law) for owner ratification before propagation. Correct the "FRED is free + public" fp-note. Zero rework — the JSON contract is what the future backend also writes.
- **CW2 · Chapter system.** Build `chnav` (7 numeral pills) + `laych` chapter dividers; reorganize the 11 `ov*` sections into the §2 taxonomy; add brass **chapter accents** (`--chA..--chG` in skin-brass) — **taste call: 2–3 `visualize` palettes** (brass-harmonized, not equities' steel) before wiring. Smart-flip nav (Skim→Deep on chapter click), parity with equities chnav.
- **CW3 · Designed Skim tier.** `skbanner` + `sk60` ("Credit in 60 seconds") + `skdigest` (7-line chapter digest) + `skim-only` primitive + remember-three closer. Kills credit's residual-Skim problem (the exact issue equities' Skim redesign fixed). Skim becomes a *designed tier*, not a stub.
- **CW4 · Data-tile text (all of it, per O-18).** Write text/structure for every data tile incl. the four R-06 tiles in the honest **`source_identified`** state (names DTCC / HYG proxy / EVLN, "live figure wires in with the data backend"); two-row named+proxy scaffolds for distress & EMBI; methodology labels; layman plain-words + **anchored** translations of every figure; freshbar "registry data through…" qualifier; attribution footers propagate (CW1 anatomy).
- **CW5 · Cross-tier polish.** Pull-quotes, semantic card tints, section-header gold dashes, accent beats — bring credit to the equities cross-tier standard; both Skim and Deep benefit.
- **CW6 · QC + ship.** L3 brand-QC; fresh-eyes subagent both editions; curl/DOM verify (chapters render, Skim complete, chips + attribution present, no escaped HTML, layman no analyst-leak, both URLs trailing-slash); owner review on staging; L5 ship to `main` (`-X ours`).

## 4 · What I need from the owner
1. **Confirm/adjust the §2 chapter taxonomy** (the one structural decision that would cause rework if wrong).
2. **Chapter-accent palette** is a taste call — I'll bring 2–3 brass-harmonized options via `visualize` at CW2 (no decision needed now).
3. **Layman-only deepening confirmed:** analyst stays the dense master; I reorganize/skim/wire but do **not** rewrite analyst prose (consistent with the prior "recant analyst plain changes" instruction). If an analyst section is genuinely thin, I flag it rather than invent.

## 5 · Out of scope / deferred
- R-06 **connector code** (DTCC, ETF varnish-api, publication panels) + SIFMA parser → **backend phase** (Python/Postgres), not now — avoids Node→Python rework. The tiles show `source_identified` until then.
- Still-pending credit tiles (downgrade ratio, CCC-migration, fund flows, MOVE, x-ccy) → **P-07** research, future.
- The Postgres/Neo4j backend itself → after all desks are text-complete (O-18).

## 6 · After credit
Per O-18, the next text-complete targets are the remaining desks (Rates → FX → Commodities → Crypto → Cross-Asset), each a bespoke build to this same standard, before the backend phase.

---
*Drafted 2026-06-13. Sequenced first under "finish the website textually" (O-18). CW1 is next up.*
