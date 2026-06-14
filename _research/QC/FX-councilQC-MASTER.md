# FX Desk — Council QC master (12-file deep read)

**Purpose.** Accountability + durable record of the deep re-read of ALL 12 research files behind the Dollar, FX & Gold analyst desk, and the prioritized improvements applied to `src/components/GoldFxDesk.astro`. Done 2026-06-14, after the owner flagged that the page leaned on placeholders and that the 9 council files had not been deep-read.

## The 12 files (3 prompt-families × {synthesis + 3 councils})

| Family | Synthesis | Councils | Read status |
|---|---|---|---|
| **P-09** US rates desk | `R-09-rates-desk.md` | `R-09-council-{claude_opus_4_8, gpt_5_5, gemini_3_1_pro}.md` | **all 4 deep-read** (subagent) → `FX-councilQC-R09.md` |
| **P-09.1** foreign dollar demand (PRIMARY FX source) | `R-09.1-foreign-dollar-demand.md` | `R-09.1-council-{claude_opus_4_8, gpt_5_5, gemini_3_1_pro}.md` | **all 4 deep-read** (subagent) → `FX-councilQC-R091.md` |
| **P-09.2** rates gap-fill | `R-09.2-rates-gapfill.md` | `R-09.2-council-{claude_opus_4_8, gpt_5_5, gemini_3_1_pro}.md` | **all 4 deep-read** (subagent) → `FX-councilQC-R092.md` |

Method: one focused subagent per family, each deep-reading all four files (full read, not grep) and producing a per-council "unique contributions" extract + a prioritized gap list vs the live page + QC flags. Earlier passes had read the 3 synthesis files in full but only grep-mined the 9 councils — this pass closes that gap. Supporting artifacts in this folder: `FX-content-blueprint.md` (initial mining), `FX-depth-spec.md` (credit/equities depth target), and the three `FX-councilQC-R09*.md` audits.

## Master improvement list — what the councils added beyond the synthesis (and the QC fixes)

### Applied to the page (P1 / high-value)
1. **Clearing-elasticity → yield-move ruler** (R-09.1/GPT). The DV01 ruler now translates flow to bp: ~1bp per ~$7.5bn 10y-equivalent → $50bn ≈ 6–7bp; central +$60bn ≈ $49mn/bp of demand; stress −$200bn ≈ $162mn/bp ≈ +15–25bp on the long end. Plus the per-$100-face derivation (4.45%, duration 8.1 → $0.81mn/$1bn/bp).
2. **Term premium quantified** (R-09/Opus+GPT). §4 now carries ACM ~0.67% / Kim-Wright ~0.80%, converged within ~13bp — model-agnostic positive term premium = the structural pressure under the dollar's Treasury anchor. (Reject Gemini's stale ACMTP10 0.06% and "bull-steepener" label; the regime is a bear-steepener.)
3. **Oil→CPI→Fed elasticity tail** (R-09/GPT). §9 Chain A now: +10% oil → energy CPI ~1.5% on impact, ~2.3% after two quarters, **core only ~0.1% over eight quarters** — the low core pass-through is exactly why the Fed can look through and keep the dollar's carry leg intact.
4. **Basis-trade systemic scale** (R-09/§L+GPT). §7 now quantifies the leverage channel: hedge funds ~10.3% of the cash Treasury market (Q1-2025), ~$1.4tn position undercount, ~73.8% of HF repo at zero/negative haircut, Fed's Cook flagging the $30tn market "more vulnerable" — upgrades the basis/SRF tell from label to mechanism.
5. **Covered-intervention mechanic for diaspora deposits** (R-09.1/Opus). The FCNR explainer now shows a diaspora scheme literally reinvests absorbed dollars in USTs (a substitute for selling, sometimes a buyer), with the 2013 outcome (rupee 68.85→62, CAD 4.8%→0.9% of GDP) and the realized-inflow haircut ($25–50bn realized vs $50–70bn headline; ~4.35% effective cost over USTs).
6. **Petrodollar-fracture bear case** (R-09.1/Gemini, losing camp). §9 now presents the fracture thesis explicitly as the labeled bear/falsifier case the base case overrode on data (Saudi +$18bn y/y buyer; Brent $87+ keeps revenue per barrel up).
7. **TGA→reserves→repo funding note** (R-09.2/GPT+Gemini). New §7 funding callout: ON RRP collapsed from a >$2.5tn peak to near-zero domestic, so a scheduled ~$1tn TGA rebuild now drains bank reserves first-order and pressures repo — making any dollar-funding squeeze more potent than in the QE-flush era (2025: RRP −$200bn, reserves −$350bn, TGA ~$800bn).
8. **SRF = cleanest funding-stress gauge** (R-09.2). §7 master-tell sharpened: with reserves toward the "ample" boundary, SRF take-up paired with SOFR–IORB is the best real-time funding-stress read — more diagnostic than the FIMA balance (~$1mn).
9. **SEC central-clearing mandate** (R-09/R-09.2). Dated free catalyst added: cash clearing 31 Dec 2026, repo 30 Jun 2027 — reshapes basis-trade economics.
10. **Foreign UST aggregate ~$9.5tn (+6% y/y)** (R-09). Anchors the de-dollarization-is-glacial read with a hard number: foreign demand growing in absolute terms even as the official sector is the soft spot.
11. **Data-honesty precision** (R-09.2/GPT). "Live" chips reworded to "auto-refreshed daily (prior-session close)"; added the "free = official-but-lagged, not live" framing and the explicit no-synthesized-gold-vol prohibition; LBMA = a fix, not live spot.
12. **CBO deficit precision** (R-09.2). §4/§9 now $1.9tn = 5.8% of GDP (debt 101%→120% of GDP 2026→2036), replacing the loose "~6%".
13. **Gold two-legged falsifier** (R-09/Opus). §3: the decoupling breaks — gold loses on both legs — only if real yields rise AND the geopolitical premium eases simultaneously.

### QC fixes applied
- **Gold reserve-diversion recompute.** The "29t/month ≈ $37bn/yr diverted" figure was computed at $3,300/oz; at the page's live ~$4,365 it is **~$49bn/yr** — corrected on the metals card and the reserve-order scoreboard.
- **Present unresolved questions as splits, not facts:** petrodollar fracture and carry-unwind UST direction are council-unresolved — both shown as labeled splits/falsifiers, not asserted.
- **Never surface as fact:** the L-confidence Gulf yuan-pricing/swap-line rumor (kept off the page); the unconfirmed MOF May-2026 ¥11.7tn intervention *direction* (kept off the page — only the verified ~$62bn Apr–May 2024 op is cited).
- **Wording discipline:** 1998 yen "~15–20%"; debt ceiling is NOT a 2026 catalyst (OBBBA → $41.1tn, ~$1.88tn cushion) — no stale X-date framing anywhere.

### Deferred (P2/P3 — noted, not yet on the page)
Negative swap spreads (5y −29bp / 30y −78bp, no free feed); explicit QT-over/RMP regime line; "Grinding Stagflation" third state; CFTC COT directional read; diaspora peer-track-record comparator (Israel DCI >$54bn, Pakistan RDA $11.31bn, etc.); stablecoin "9th channel" sizing; Atlanta-Fed-vs-FedWatch wireability nuance; bill-share/QRA term-premium driver. These are depth candidates for the next iteration or P-10.

## Re-verify-at-build (live values move)
Term premium ACM/KW; foreign UST aggregate + TIC top holders (Mar-2026 vintage, ~2-mo lag); gold (recompute the reserve-diversion $/yr at the live price); TGA (~$800bn, not $828bn); SOFR/IORB/RRP/reserves; real 10y; Brent. The mechanisms, taxonomy, history, and source IDs are the durable deliverable; the point-in-time values are a refreshable snapshot.
