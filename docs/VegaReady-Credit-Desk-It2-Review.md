# VegaReady — Credit Desk Review & Redesign (Iteration 2)

**Date:** 2026-06-11. **Reviewed on staging:** `vegaready-staging.royal-rice-7384.workers.dev` → `/markets/credit`, `/layman/credit`, `/markets`. **Verdict:** durable analyst spine is strong; the catalyst section and the entire Layman page need a rebuild. Source files: `src/components/CreditDesk.astro`, `src/data/analysis/credit.js` (data is good — do not blame the data).

---

## 1. Findings per URL

### `/markets/credit` (Analyst)
**Keep (works):** §0 state-of-desk hero, the 30-second read + falsifiers, competing-drivers buckets, and the durable spine §1–§8 (regime, structure, valuation, fundamentals, cohorts ratings+sectors+sortable matrix, factors, positioning, cross-asset). This is dense but coherent and well-sourced.

**Broken — §9 "Catalysts & funding channel":**
1. **Winners/losers appears 3× in a row.** (a) scenario-tilts table → (b) a flat **17-row** Party/Role/Mechanism table → (c) a "Beneficiaries / Losers" pair inside **every one of the 10** transmission cards. Same concept, three escalating densities. This is the "repeat that doesn't make sense."
2. **The 10 detail cards render `open` by default** — the page dumps ~10 expanded blocks of mechanism/magnitude/beneficiaries/losers/precedent at once. Overwhelming even for an analyst.
3. **Shorthand walls.** Card `beneficiaries`/`losers`/`magnitude` are long semicolon-jammed run-on strings shoved into a 130px-label row. No chips, no list breaks, no breathing room.
4. **Weak first-contact framing.** A newcomer hitting the analyst URL gets no one-line "what this desk is" before the density starts.

### `/layman/credit` (Layman)
1. **Under-built.** Five short left-border text "beats" + a 4-tile KPI bar + a CTA. No visual anchor, no hierarchy, nothing that signals intent. Looks amateur beside the analyst side.
2. **Auto-stripped winners/losers.** Built by regex-stripping parentheses off the analyst table → fragments like "U.S. reserve currency / Fed," "U.S. IG corporate bond market." Not plain English.
3. **No "what is the credit desk" explainer**, no plain "what to watch" checklist, no plain glossary, no confidence framing that feels designed.

### `/markets` (hub)
Re-home split (market desks vs conflict dossiers) is structurally fine. Lower priority; revisit after credit. One nit to confirm: the Rates tile still points at `/markets/credit` as a placeholder.

---

## 2. Redesign — Layman (`/layman/credit`) — full rebuild

Goal: a **designed, standalone plain-English page** a non-specialist reads top-to-bottom and *gets it* — not a stripped analyst page.

- **Opener: "what this is."** One strong line + one sentence: *"The credit desk. Credit is the market for lending to companies and governments — this page reads how nervous lenders are, and what that means for you."*
- **One visual anchor:** a simple **"spread thermometer"** (calm → stressed) SVG showing today's read (calm-but-stretched), captioned in plain words. Small, intentional — not a giant placeholder.
- **The five things, redesigned:** keep the five beats (what credit is doing / why it matters / who's exposed / what's driving it / what to watch) but as **numbered, properly-typeset cards** with clear headers and spacing — a deliberate layout, not five flush paragraphs.
- **Clean winners/losers:** a **two-column "Who's helped / Who's exposed"** card with **curated plain labels** authored for laymen (e.g. *"Money-market funds & cash savers," "The US dollar," "Top-rated company borrowers"* vs *"Governments that borrowed in dollars," "Heavily-indebted 'junk' companies," "Importers & trade financing"*). Hand-written, not auto-derived.
- **"What to watch" checklist:** 4 plain bullets (junk spreads widening, rising defaults/downgrades, cash fleeing bond funds, central-bank dollar swap lines).
- **Plain glossary strip:** spread, high-yield/junk, default, emerging market — one plain line each.
- **Footer:** medium-confidence chip + a single clean "Open the Analyst view" CTA. Plus the "research, not advice" note.
- Visual discipline: consistent section rhythm, a hero read/gauge, generous spacing — it should feel as intentional as the analyst side, just calmer.

---

## 3. Redesign — Analyst §9 (de-duplicate + de-densify)

**Principle:** winners/losers is shown **once**, in one clean place. Separate the *durable if-then framework* from the *currently-realized catalyst*.

1. **Two clearly-labelled zones, visually distinct:**
   - **Framework (durable, catalyst-neutral):** the scenario-tilts table, headed *"If–then: how credit behaves by scenario."* This is part of the durable frame.
   - **Right now (the active catalyst):** the Iran–Gulf overlay.
2. **Single winners/losers, redesigned:** replace the flat 17-row table with a **grouped three-lane layout — Beneficiaries · Mixed · Exposed** — each lane a tight list of *party + one-line mechanism*. Scannable, not a dense table.
3. **Strip winners/losers OUT of the 10 detail cards.** Cards keep **mechanism · magnitude · precedent · sources** only. This kills the 10× repetition — the per-catalyst winners/losers now lives solely in the grouped lanes above.
4. **Cards collapsed by default** (remove `open`); tighten each summary; rename "Detail files" → *"The 10 transmission cards — expand for evidence."*
5. **De-densify shorthand:** where a field is a semicolon list (magnitude, mechanism), render it with line breaks / chips instead of one run-on string. Cohort `sens` strings get the same treatment.
6. **Keep** takeaways ("Key observations") — they're the strongest synthesis; place them between the grouped winners/losers and the collapsed cards.

---

## 4. Content / communication fixes (both modes)

- Add a single plain "what this desk is" line at the very top of the analyst page too (above the dense state panel), for first-contact readers.
- Audit every label for analyst-shorthand that adds no value; expand or gloss.
- Make the Layman ⇄ Analyst relationship explicit ("same desk, two reading levels").

---

## 5. Build order (this iteration)

1. **It2-a — Layman rebuild** (new layout + curated plain winners/losers data + thermometer SVG + CSS). *Biggest visible win.*
2. **It2-b — Analyst §9 rebuild** (two zones, single grouped winners/losers, cards stripped of W/L + collapsed, de-densified). *Fixes the "repeat" complaint.*
3. **It2-c — first-contact framing + shorthand audit.**
4. **Verify** with `@astrojs/compiler` (not bash), then deploy to `vegaready-staging` and review.
5. Apply the same §9 de-duplication pattern to the **equities** desk for consistency (separate pass).

Each step: 100% effort, custom to credit, several passes, actively hunt gaps. Nothing merges to `main` until both modes look intentional on staging.
