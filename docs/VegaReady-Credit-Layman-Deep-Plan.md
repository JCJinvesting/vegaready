# Credit Layman Deep — build plan (CW4)

**Goal:** build the credit desk's **Layman Deep** edition — a plain-English retelling of the now-complete analyst master (`/layman/markets/credit`, `data-mode="overview"`, Deep tier), organized into chapters, every figure anchored and sourced. This is CW4 of the Credit Completion Plan; the analyst master (CW2) and analyst Skim (CW3) are done.
**Methodology (how we built equities):** walk each analyst Deep section top-to-bottom and write its plain-English version — same intelligence, same data, **simpler and longer**, never the analyst page with jargon bolted on. Take the understanding from where the research disagreed without ever naming a model. The analyst page stays the dense master; nothing here leaks back into it.

## 1 · The plain-language laws (non-negotiable, from the equities build)
1. **Anchor every number.** A bare "278 bp" means nothing to a generalist. Always give a reference scale: *"about 2.8% of extra interest a year — calm is ~3%, the 2008 panic hit 10%+."* Never a number without its yardstick.
2. **Provenance, in plain sight.** Each chapter says where its numbers come from (FRED/ICE, agencies, the named studies) — the analyst's sourcing, retold as "here's how we know," with the proof one tap away.
3. **Deep but plain, and *longer* than analyst.** The Layman Deep reproduces *all* the analyst substance (≥ the analyst section's content), expanded with explanation and examples — depth in plain words, not a summary.
4. **Plain language is layman-only.** No jargon creep onto the analyst page; no reader-visible model names; understanding distilled from disagreement, attributed to "the research," never to a model.
5. **Honest gaps, in plain words.** Where no figure exists (crowding, live CDX skew), say so plainly — "nobody publishes this for free, so we infer it and tell you we're inferring."

## 2 · Section-by-section translation map (the content — content-first)
Each analyst section → its Layman chapter → the plain-English treatment + the anchor(s) that make the numbers mean something.

| Analyst section | Layman chapter | Plain-English treatment & key anchor |
|---|---|---|
| **§0 State** (the call) | I · Foundations | "Where credit stands today, in a sentence." The HY−IG compression number anchored: *spreads calm on top, a funding fault line underneath.* |
| **§1 Regime** (spreads) | I · Foundations + III · Reading the signals | *What a spread even is* — the extra rent lenders charge risky borrowers. Anchor HY 278 bp = "~2.8% extra a year; ~3% is calm, 2008 was 10%+." Compression/decompression = "is junk trading close to safe, or pulling away?" |
| **§2 Structure** (internal stress) | III · Reading the signals | "Is the calm surface hiding rot underneath?" Downgrades-vs-upgrades, the distressed share, CCC weight — in plain terms, why a benign headline can mask a deteriorating core. |
| **§3 Valuation** (fair value) | III · Reading the signals | "Are you being paid enough for the risk?" Market spread vs the spread that just covers expected losses — carry as "the cushion before you lose money." |
| **§4 Fundamentals** (default cycle) | II · The credit cycle | "Boom → complacency → stress → default → repair," and the key lesson: **defaults confirm a downturn, they don't predict one** — the quiet early warnings (refinancing strain, downgrades, outflows) come first. Anchor the maturity wall ("how much debt comes due soon"). |
| **§5 Cohorts** (ratings & sectors) | IV · The ratings ladder & who's exposed | The IG→BBB→BB→B→CCC ladder as rungs of rising risk; sectors (banks, energy, real estate, EM) as neighborhoods. Who's helped vs exposed, plainly. |
| **§6 Factors** (R-08) | V · What drives returns & the diversification trap | Plain: carry = "getting paid to wait," quality = "owning the sturdier borrowers," DTS = "**your risk is size × spread**, not just how long." The trap: a "diversified" book is often *one bet* (spread beta). What actually diversifies: quality + momentum. Translate the rotation tables to "in calm, reaching for yield pays; in a scare, quality pays" (no IR jargon — show the direction). |
| **§7 Positioning** (R-08) | VI · The plumbing — who's forced to sell | Dealers as the market's shock-absorber that *shrank* after 2008; forced sellers vs willing sellers. The killer tell in plain words: **"when the safest bonds are the cheapest, it's a fire drill, not a funeral"** (a plumbing scramble, not a default scare). |
| **§8 Cross-Asset** (R-08) | VII · When the usual rules break | Correlations aren't laws. The 2022 "the hedge that stopped hedging" (stocks and bonds fell together). The scenario map: in a rate shock vs a recession vs a dollar squeeze, who wins and who loses — plain grid. And: "in a panic, everything moves together." |
| **§9 Catalysts / funding** | VIII · The Gulf angle | The dollar-funding squeeze in plain words (reuse/upgrade the existing Gulf chain): why a faraway shock reaches US credit through the plumbing of dollars. |
| **§9 scenarios · watch · misconceptions** | IX · What would change our mind | "If this happens, then…" in plain if/then; "what we're watching"; "three things people get wrong" (already strong — keep, refresh). |
| **§10 Evidence** | IX · How we know | Sources, confidence, and the honest "what we don't know" (no free crowding gauge, no live CDX skew) — plain. |

## 3 · Proposed chapter taxonomy (owner confirm — the one structural decision)
The master grew (R-08 added factors/positioning/cross-asset), so the layman wing expands from the earlier 7 to **9 chapters**. Each maps to the table above:

I Foundations · II The credit cycle · III Reading the signals · IV The ratings ladder & who's exposed · V What drives returns (& the diversification trap) · VI The plumbing (who's forced to sell) · VII When the rules break · VIII The Gulf angle · IX What would change our mind & how we know.

*If 9 feels long, the merge candidates are II→I (cycle into foundations) and VIII→VII (Gulf into "when the rules break"), giving 7. Owner picks; this is the structural taste call.*

## 4 · Visuals & design (per chapter)
Reuse the existing layman component family (`lay-hero`, `lay-gauge`, `lay-cards`, `lay-wl`, `lay-scn`, `lay-sech`) + the chapter system (`chnav` numeral pills + `laych` dividers, as equities) + the frozen `laydeck`. New/!signature visuals:

- **I Foundations** — a "spread = extra rent on risky money" gauge; the live HY−IG compression mini-gauge with **anchored markers** (calm / stress / 2008).
- **II Credit cycle** — a simple cycle wheel (boom → complacency → stress → default → repair) with "you are here."
- **III Reading the signals** — a spread **thermometer** with labelled bands (calm ~300 bp → distress 1,000 bp+) and today's level plotted; an "are-you-paid" cushion bar.
- **IV Ratings ladder** — a stepped ladder IG→CCC (risk rising), sector chips with helped/exposed tone.
- **V What drives returns** — a **two-state "what works when"** panel (calm vs scare → which factor leads, plain arrows, no IRs); a small "one-bet-in-disguise" overlap visual for the carry≈value≈beta trap.
- **VI The plumbing** — a flow diagram (lenders → dealers → market) with the dealer buffer visibly shrunk; the "safest-bonds-cheapest" tell as a small before/after.
- **VII When the rules break** — a correlation **dial** (negative ↔ positive) showing the 2022 flip; a simplified 5-scenario × who-wins/loses grid (semantic tints).
- **VIII Gulf angle** — the existing funding-chain, refreshed.
- **IX Change our mind / how we know** — the if/then scenario cards, a "what we're watching" checklist, a plain sources/confidence panel.

**Design system:** brass skin; **chapter accents** brass-harmonized (`--chA..` set, *taste call — 2–3 `visualize` options before wiring*, never reuse equities' steel). Semantic tints: green = tightening/calm, coral = widening/stress, muted = mixed. Illustrative SVGs at the kit's chart scale (≤~122 px, whisper grid, ≤3 colours). Section-header gold dashes; pull-quotes used sparingly.

## 5 · Build sequence — chapter-by-chapter micro-loops (each staged + QC'd)
Mirrors the equities Waves 2–7 cadence. One chapter (or two small ones) per loop: write content → build visuals → compile → stage → verify (curl + DOM, anchors present, no escaped HTML, layman shows no analyst leakage) → owner eyeballs on staging → ratify → next.
- **L1** chapter system scaffolding (chnav + laych + accents) + reorganize existing `ov*` sections into the chapter frame.
- **L2** Ch I–II (foundations + cycle), **L3** Ch III (reading the signals + live tiles anchored), **L4** Ch IV (ladder/exposed), **L5** Ch V (factors — new), **L6** Ch VI (plumbing — new), **L7** Ch VII (rules break — new), **L8** Ch VIII–IX (Gulf + change-our-mind/evidence). Then CW5 (Layman Skim) compresses the finished Layman Deep.

## 6 · What I need from the owner
1. **Confirm/adjust the chapter taxonomy** (9 as above, or merge to 7) — the one rework-risk decision.
2. **Chapter-accent palette** — I'll bring 2–3 brass-harmonized options via `visualize` at L1 (no decision now).
3. Confirm the **deep-but-plain, ≥-analyst-volume** intent (it's the locked plain-language standard, just re-confirming for credit).

## 7 · Out of scope
Analyst page (frozen master — no plain creep). The four `source_identified` data tiles' live wiring (backend phase). Layman Skim (CW5, after this). The Postgres backend (O-18, last).

---
*Drafted 2026-06-14. Content-first per owner instruction; mirrors the equities Layman Deep methodology. Awaiting chapter-taxonomy confirm before L1.*
