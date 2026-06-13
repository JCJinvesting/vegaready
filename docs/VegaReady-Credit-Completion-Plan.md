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

## 3 · The build — content-dependency order (owner-corrected 2026-06-13): master first, then derive

**The dependency law (why this order):** the analyst **Deep** is the dense master; the analyst **Skim** is a *compression* of it; the Layman **Deep** is a plain *retelling* of it; the Layman **Skim** compresses the Layman Deep. So build/complete the master first, then derive the three lighter views from it — never compress or translate unfinished content. Each loop is staging-gated + owner-ratified; one commit per loop; production untouched until ship.

- **CW1 · Analyst-Deep audit + research decision. ✅ DONE (2026-06-13).** Finding: the analyst master is **~75% complete and coherent.** Production-ready: §1 State, §2 Regime, §3 Structure, §4 Valuation, §5 Fundamentals, §6 Cohorts (research-grade — 5 ratings × 6 sectors with sensitivities/KPIs/risks), §10 Catalysts/Funding (research-grade — 10 sourced transmission cards, exceeds equities), §11 Evidence. The "feed pending" cells in these are honest data placeholders, not content gaps. **The 25% gap is concentrated in three sections** needing empirical fill: **§7 Factors** (no factor-crisis history or rotation table), **§8 Positioning** (no dealer-inventory / index-options mechanics), **§9 Cross-Asset** (no scenario×cohort matrix or regime-correlation guidance). **Research decision: NO detour required** — these are empirically tractable from existing cited sources + canonical credit analysis; build from those, keeping specifics honest (sourced or qualitative, **never invented**). Optional later: a credit research prompt (**P-08**) for sourced empirical magnitudes in §7–§9 — non-blocking, post-launch.
- **CW2 · Analyst Deep build-out + data wiring (complete the master). ✅ DONE (2026-06-14).** §1 wired live (HY−IG compression headline + IG/HY OAS + chips + attribution, QC-hardened: 3y-window percentile honesty, threshold-aligned colour, defaulted-exit tooltip). §7 Factors, §8 Positioning, §9 Cross-Asset built to research-grade from R-08 (DTS + carry decoders + Invesco/Northern-Trust factor tables + crisis episodes; dealer-buffer/He-Kelly-Manela read + inventory×spreads matrix + safest-bonds-cheapest tell + technical-vs-fundamental diagnostic + TRACE/flows/CDX-skew; 5×4 scenario×cohort matrix + stock-bond-flip + regime-correlation table + kill-switch). All sourced/attributed, deep-tier, verified on staging; every secnav anchor now resolves. The dense master is complete. Fill the three CW1 gaps to equities density (dense, professional, **no plain-language creep**; specifics sourced or qualitative, never invented): **§7** a factor rotation table (carry/quality/DTS × regimes) + qualitative factor-crisis behavior (2008/2020/2011/2022); **§8** a dealer-inventory / TRACE-breadth / index-options-mechanics block paralleling equities' plumbing decoder; **§9** a scenario × cohort/region matrix + regime-correlation guidance (when the HY/equity correlation breaks). Apply the density-ladder, lead+bullets, and anti-narrow-wrap laws. Add `src/data/feeds/credit.js` helper; wire the **already-fetched FRED** values into §1/§2 (IG/HY/cohort OAS, the **HY−IG compression headline**, percentile). **Pilot the four-state chip + attribution footer here** (2–3 `visualize` options, taste-call). The four R-06 tiles render `source_identified`; correct the "FRED is free + public" fp-note. The dense master is then done.
**SHIPPED to production 2026-06-14 (merge `24741e7`):** the credit **analyst** version — live §1 data + the full §7/§8/§9 build — is live on vegaready.com/markets/credit/ (owner-approved early ship of the analyst master; Skim/Layman iterate after). Cloudflare's keyless CI serves the committed `credit.json`.

- **CW3 · Analyst Skim. ✅ DONE (2026-06-14).** Audit confirmed skim is non-empty (every § retains lead + KPIs + tracking). Gap was §7/§8/§9 — their *insight* was deep-only. Added a `skim-only` "bottom line" to each (the compressed takeaway: factors→quality/momentum diversify + DTS; positioning→read inventory as a change + safest-bonds-cheapest tell; cross-asset→regime-conditional + dash-for-cash→1). Promoted the `skim-only` primitive to shared desk-v2.css. Verified shows-in-Skim / hides-in-Deep. Analyst Skim is now a designed density-ladder tier.
- **CW4 · Layman Deep + chapter system.** Now that the master is complete, build the plain retelling: `chnav` (7 numeral pills) + `laych` dividers; reorganize/expand the 11 `ov*` sections into the §2 taxonomy; brass **chapter accents** (taste call: 2–3 `visualize` palettes). Every figure gets its anchored plain-words translation + provenance. Data-tile text (incl. the `source_identified` R-06 tiles, two-row named+proxy scaffolds) lands in its chapter here.
- **CW5 · Layman Skim (designed tier).** `skbanner` + `sk60` ("Credit in 60 seconds") + `skdigest` (7-line chapter digest) + `skim-only` primitive + remember-three closer — compressing the now-complete Layman Deep. Kills the residual-Skim problem.
- **CW6 · Cross-tier polish.** Pull-quotes, semantic tints, section-header gold dashes, accent beats — equities cross-tier standard; benefits all four views.
- **CW7 · QC + ship.** L3 brand-QC; fresh-eyes subagent on all four views; curl/DOM verify (chapters render, both Skims complete, chips + attribution present, no escaped HTML, layman no analyst-leak, trailing-slash URLs); owner review on staging; L5 ship to `main` (`-X ours`).

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
