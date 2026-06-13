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

## 2A · Existing-content audit — keep / refresh / new (so we reuse, not rewrite)
The current layman has 11 `lay-sech` sections (`ov*` arrays) that predate the chapter system AND the §6/§7/§8 master build-out. Disposition:

| Existing layman block (`ov*`) | → Chapter | Disposition |
|---|---|---|
| ovBeats ("five things to understand") | I | **Keep**, becomes the Foundations opener |
| ovHowWorks ("how credit works") | II | **Keep**, light refresh |
| ovCanary ("watch it happen") + "why early warning" | III | **Keep**, wire to live spread tiles |
| ovHelped / ovExposed (+Deep) | IV | **Keep**, fold into the ladder |
| ovGulfLead / Chain / Close | VIII | **Keep**, refresh |
| ovScenarios ("if this, then…") | IX | **Keep** |
| ovWatch ("what to watch") | IX | **Keep** |
| ovMisconceptions ("3 things people get wrong") | IX | **Keep** — already strong |
| ovGloss (plain glossary) | IX | **Keep**, extend with new terms (DTS, dealer, correlation) |
| ovKnow ("how we know") | IX | **Keep**, add the honest-gaps note |
| — | **V What drives returns** | **NEW** (no existing layman content — translate analyst §6 / R-08) |
| — | **VI The plumbing** | **NEW** (translate analyst §7 / R-08) |
| — | **VII When the rules break** | **NEW** (translate analyst §8 / R-08) |

So ~70% is reorganize-and-refresh; the three R-08 chapters (V/VI/VII) are genuinely new plain-English writing. This is lighter than equities' from-scratch Layman Deep.

## 2B · Anchor bank — the plain-English yardsticks (content the build draws from)
Every number gets one of these. Live values come from `credit.js` (so they stay current); anchors are fixed reference scales.
- **HY spread 278 bp** → "≈ 2.8% of extra interest a year over a Treasury. Calm ≈ 3%; the 2008 panic hit 10%+ (1,000 bp+). So today reads *calm*."
- **IG spread 75 bp** → "≈ 0.75% extra — blue-chip borrowers pay almost nothing over Treasuries; near the post-COVID low."
- **HY−IG compression 203 bp** → "the gap between risky and safe borrowing. A *narrow* gap (today) = investors relaxed and reaching for yield; a *wide* gap = flight to safety."
- **CCC ≈ 956 bp, CCC−BB unusually wide** → "the shakiest borrowers pay ~9.6% extra, and the gap between the worst and the merely-risky is near its widest — stress is concentrated at the bottom even while the average looks calm."
- **Distress ratio / default rate (pending)** → "share of junk in distress / how many borrowers actually failed last year — low single digits in calm, 10%+ in a crisis. We don't publish a live figure (no free source); see §4A for how we say so honestly."
- **DTS** → "your risk = how much you lent × how risky it is (size × spread), not just for how long."
- **Carry / quality / the trap** → carry = "getting paid to wait"; quality = "owning sturdier borrowers"; the trap = "buying carry + value + reaching-for-yield feels diversified, but it's mostly one bet — they sink together in a scare. What actually diversifies is quality and momentum."
- **The plumbing tell** → "when the *safest* bonds are the ones on sale, it's a cash scramble — everyone selling whatever they can — not the market betting those companies will fail."
- **The 2022 correlation flip** → "stocks and bonds usually move opposite (one cushions the other). In 2022 they fell together, because the problem was inflation/rates, not growth — the Treasury 'hedge' stopped hedging."
- **The cycle** → "boom → confidence → too much risky borrowing → a shock → defaults rise → repair. Defaults are the *last* step; by the time they climb, the damage is done — so watch the early signs (refinancing strain, downgrades, money leaving bond funds)."

## 3 · Chapter taxonomy — CONFIRMED 9 (owner-approved 2026-06-14)
I Foundations · II The credit cycle · III Reading the signals · IV The ratings ladder & who's exposed · V What drives returns (& the diversification trap) · VI The plumbing (who's forced to sell) · VII When the rules break · VIII The Gulf angle · IX What would change our mind & how we know. (Owner: 9 is good; room to add more later as the pattern follows the analyst spine.)

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

## 4A · Data-wiring & the honesty of pending tiles (plain-mode integrity)
The Layman Deep is **data-wired, not static** — same source of truth as the analyst page, so the two never drift. Where a number appears it reads from `credit.js` (`feed.tile()`, `feed.bp()`, `feed.compression()`), then the §2B anchor wraps it in plain words. Each chapter's freshness line reads `feed.dataThrough()` in plain form ("Spread data current through {date}").
- **Chip translation.** The analyst four-state chip (live ● / latest_published ◐ / stale ◑ / source_identified ◌ / feed_pending ○) gets a **plain-language gloss** in layman mode, not the bare state word: `source_identified` → "We've found a trustworthy source and are wiring it up — not live yet"; `feed_pending` → "No free, reliable feed for this yet — here's the honest stand-in"; `latest_published` → "Last official monthly figure, not a live tick." Same chip component, plain label via a `layLabel` map added to `credit.js`.
- **The four `source_identified` tiles** (distress ratio, CDX, EMBI, loan index) render as a **two-row honest scaffold** in their chapter: row 1 the *named* concept + what it would tell you; row 2 the plain proxy we reason from + an explicit "we're inferring, here's why." Never a fabricated live number — the product's integrity, in plain words.

## 4B · Proof-sourcing, learning aids & voice (the plain-language craft)
- **Proof-sourcing.** Each chapter carries a quiet "where this comes from" line and, where useful, a `go`-link to the matching analyst section (`/markets/credit#<anchor>`) — "the detailed version, if you want the working." The analyst page is the proof; the layman page points to it rather than reproducing the apparatus.
- **Learning aids.** Reuse the `.gloss` dotted-underline tooltip for every first-use term (spread, OAS, duration, dealer, correlation, DTS) — definition on hover, so the prose never stops to define itself. Add **one worked example per new chapter** (V/VI/VII): e.g. V — "a BB bond at 250 bp: if spreads widen 100 bp, a 4-year-duration bond loses ~4% *before* any default — that's DTS in action." Concrete beats abstract.
- **Voice.** Warm, plain, concrete; second person where it helps ("say you're the lender…"); short paragraphs (lead + bullets, never a wall); one idea per sentence; analogies grounded in everyday money (rent, IOUs, insurance, a crowded exit). For an interested non-specialist — not dumbed-down, just unlocked. No hype, no model names, no jargon without a gloss.

## 4C · Forward hook for CW5 (Layman Skim) — capture the digest now
While writing each chapter, capture its **one-line skim digest** (the single sentence a skimmer needs) into a `skDigest` field per chapter. CW5's `skdigest` (9-line "credit at a glance") and `sk60` then assemble from these rather than re-deriving — exactly how equities dodged the residual-Skim trap. Costs one sentence per chapter now; saves the whole CW5 derivation later.

## 5 · Build sequence — chapter-by-chapter micro-loops (each staged + QC'd)
Mirrors the equities Waves 2–7 cadence. One chapter (or two small ones) per loop: write content → build visuals → compile → stage → verify (curl + DOM, anchors present, no escaped HTML, layman shows no analyst leakage) → owner eyeballs on staging → ratify → next.
- **L1** chapter system scaffolding (chnav + laych + accents) + reorganize existing `ov*` sections into the chapter frame.
- **L2** Ch I–II (foundations + cycle), **L3** Ch III (reading the signals + live tiles anchored), **L4** Ch IV (ladder/exposed), **L5** Ch V (factors — new), **L6** Ch VI (plumbing — new), **L7** Ch VII (rules break — new), **L8** Ch VIII–IX (Gulf + change-our-mind/evidence). Then CW5 (Layman Skim) compresses the finished Layman Deep.

**Dependencies:** L1 (scaffolding + accents) gates everything. L3 needs the `layLabel` chip map (§4A) wired first. L5–L7 draw directly from `R-08` (no new research). The `skDigest` capture (§4C) runs inside every content loop, not as a separate pass.

## 5A · Layman QC checklist (run at the end of every loop, before owner review)
A loop isn't done until all pass:
1. **Anchor coverage** — every reader-visible number has a plain yardstick (§2B); grep the chapter for bare "bp"/"%" with no nearby anchor.
2. **No analyst leakage** — no IR/Sharpe/beta/coefficient jargon, no reader-visible model names, no dense-master phrasing; every first-use term has a `.gloss`.
3. **Live + honest** — numbers read from `credit.js` (not hardcoded); pending tiles use the two-row honest scaffold; freshness line present.
4. **Volume** — chapter ≥ its analyst section's substance (depth in plain words, not a summary).
5. **Render integrity** — curl + DOM on the trailing-slash `/layman/markets/credit/`: chapters render, `chnav`/`laych` resolve, no escaped HTML, Deep tier shows full content, frozen `laydeck` + Wayfinder present.
6. **Voice** — short paragraphs, concrete analogies, no hype (§4B).
7. **Digest captured** — `skDigest` written for the chapter (§4C).

## 6 · What I need from the owner
1. **Chapter taxonomy — CONFIRMED (9).** ✅ Resolved 2026-06-14.
2. **Chapter-accent palette** — bringing 2–3 brass-harmonized options via `visualize` at L1 (decision at first loop).
3. Confirm the **deep-but-plain, ≥-analyst-volume** intent (locked plain-language standard; re-confirming for credit). Assumed yes unless told otherwise.

## 7 · Out of scope
Analyst page (frozen master — no plain creep). The four `source_identified` data tiles' live wiring (backend phase). Layman Skim (CW5, after this). The Postgres backend (O-18, last).

---
*Drafted 2026-06-14. Content-first per owner instruction; mirrors the equities Layman Deep methodology. Awaiting chapter-taxonomy confirm before L1.*
