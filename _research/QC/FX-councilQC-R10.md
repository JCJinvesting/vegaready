# gap-R10 — Deep QC re-read of the P-10 (Dollar, FX & Gold) council family

**Scope:** Mine the three council files (Claude Opus 4.8, GPT-5.5, Gemini 3.1 Pro) for unique content the synthesis (`R-10-fx-gold-desk.md`) compressed out. Cross-check against the current FX analyst page's known coverage (per the brief). Read-only.

**Headline finding:** The synthesis is unusually faithful — it already absorbed nearly all the council [HARD] figures, the three disagreements (as camps), the no-free-feed list, and the Gemini closed loop. The genuine unmined deltas are: (1) a handful of **precise decimal values** and **YTD-direction reads** the synthesis rounded or dropped; (2) some **verbatim framings/analogies** that hit harder than the synthesized prose; (3) two **council-number conflicts** (gold COT contract count, EUR/USD level) that are QC flags; and (4) the **DXY historical anchors (164.72 Plaza, 114.78 Sept-2022)** which appear only in Claude's and GPT's layman anchor banks, not in the §-spine — worth confirming the page carries them.

---

## (A) PER-COUNCIL UNIQUE CONTRIBUTIONS

### A.1 · Claude Opus 4.8 (`R-10-council-claude_opus_4_8.md`)

Claude's contribution is the *most* fully absorbed into the synthesis (it was the lead author on regime narrative + layman). Genuine deltas vs. synthesis:

**Unique [HARD] figures / anchors not foregrounded in synthesis §-spine:**
- **DXY 164.72 = Feb-1985 all-time high before the Plaza Accord coordinated the dollar *down*** ([EvvyTools](https://evvytools.com/trackers/dxy-dollar-index/)). The single best long-horizon DXY anchor in the whole family. Synthesis carries it only inside Claude's reproduced anchor bank, not in the analyst spine. (verbatim: "164.72 = the Feb-1985 all-time high before the Plaza Accord coordinated the dollar *down*")
- **DXY 114.78 = the Sept-2022 Fed-hiking peak** ("the wrecking-ball dollar"). Same status — anchor-bank only.
- **WGC central-bank gold series, full-history ladder (Claude's anchor bank §6):** "Pre-2022: ~400 t/year. 2022: 1,082 t (record). 2023: 1,037 t. 2024: 1,086 t. 2025: ~863 t. Q1-2026: 244 t. April 2026: +17 t." The synthesis carries 2024/2025/Q1/April but **drops the 2022 (1,082 t) and 2023 (1,037 t) rungs** — the full ladder is a better anchor-bank visual. (Note the 2022 figure appears as both "1,082 t" and "1,086 t" across Claude's own text — see QC C.3.)
- **"95% of central banks expect to *add* gold over the next year per WGC survey"** — appears in Claude (Ch.5/Ch.6) and GPT, **dropped from the synthesis body**. Strong forward-looking demand anchor; sourced [Kitco/WGC].
- **Foreign ownership of Treasuries "has slid to ~30% from >50% at the GFC"** ([J.P. Morgan](https://www.jpmorgan.com/insights/global-research/currencies/de-dollarization)) — in Claude's Disagreement-1 "Real" camp; the synthesis keeps it in *its* Disagreement-1 too, so confirm the page carries this as a de-dollarization data point.
- **Constant-FX COFER share ≈ 57.7%** (the "barely moved" number behind the "~92% valuation" claim) — Claude states it explicitly ("at constant FX the USD share barely moved (~57.7%)"); synthesis Disagreement-1 repeats it. Confirm page has the *constant-FX* counter-number, not just "92% valuation."
- **EUR reserve share 20.25%, RMB 1.95%** (Claude Ch.7) — exact COFER component shares; synthesis carries them inside reproduced Ch.7. Good for a reserve-composition tile.

**Unique mechanisms / framings / analogies (verbatim, sharper than synthesis):**
- **Carry analogy:** "carry 'goes up the stairs and down the elevator shaft.'" — vivid; survives into synthesis Ch.3 but worth preserving verbatim.
- **Carry = "selling earthquake insurance — steady premiums, rare devastating payouts."**
- **Cross-currency basis analogy:** "dollars are the bottled water and the rest of the world is a city that just lost its taps … *Swap lines* are the Fed turning on a tanker truck and selling bottled water to other countries' governments at the regulated price." (the swap-line clause is in the synthesis's GPT-flavored version; Claude's original is cleaner).
- **Gold seesaw:** "someone heavy sat on gold's end of the seesaw and refused to get off … That someone is the world's central banks."
- **Reserve currency = "the language everyone learns as a second language … the US gets to 'borrow in its own language' cheaply."** Plus the OS metaphor.
- **De-dollarization:** "Reserve managers are not burning down the dollar house; they are adding another fire exit." (GPT/Gemini echo; Claude's "fire exit" phrasing is the crisp one.)
- **The decoupling discipline, verbatim falsifier:** Claude's §8 gives the cleanest re-link trigger — "a sustained CB-buying pause (sub-400 t/quarter run-rate) *while* real yields stay above 2%." The synthesis upgrades this to "sub-400 t/quarter … while real yields stay above 2%." **This is the page's single most important quantified falsifier — confirm it's wired into the gold-decoupling section as a tripwire.**

**Confidence qualifications / honest gaps unique to Claude:**
- Claude flags it **did not pull the current weekly COT net-position values** in its own run (it gives only the *framework*). GPT supplied the actual numbers. So the COT figures on the page trace to **GPT, not Claude** — provenance note.
- Claude's "fiscal dominance" competing-cause cite for the decoupling: [International Finance Magazine, "Building the global gold wall"] and [FinancialContent, "The new golden floor … re-rating gold to 6000"]. The **$6,000 gold "golden floor" target** is a named bull-case reference the page could cite as a council-edge forward marker (currently not in synthesis body).

---

### A.2 · GPT-5.5 (`R-10-council-gpt_5_5.md`)

GPT is the data-discipline author; it supplied the hard COT + plumbing + fiscal numbers. Deltas vs. synthesis:

**Unique / more-precise [HARD] figures:**
- **`DTWEXBGS` to *four decimals*: 120.0831** (synthesis rounds to 120.08). "about 20.1% above its Jan-2006 base and up about 1.7% over the prior month."
- **`DTWEXAFEGS` 112.6846; `DTWEXEMEGS` 129.3820** (four-decimal precision; synthesis uses 112.68 / 129.38).
- **Broad dollar YTD +0.4%** and **+0.85% from 2026-03-04 to 2026-06-05** (the catalyst-window move). These exact deltas are **dropped by the synthesis** — they're the cleanest way to show "the dollar barely moved over the war window," a useful nuance against the "crisis strength" framing. (§6 and §9 of GPT.)
- **"AFE dollar is up YTD while EME dollar is down YTD"** — GPT's §2 verdict. Synthesis keeps a version ("AFE dollar is up YTD while the EM dollar is roughly flat-to-down YTD"). GPT's is the cleaner binary; confirm the page's broad-vs-AFE-vs-EM tile carries the YTD-direction split, not just levels.
- **Fiscal balance −5.76906% of GDP (2025); current account −4.09021% of GDP (Q4-2024)** — full-precision (synthesis rounds to −5.77% / −4.09%). Fine as-is.
- **`USD/MXN` 17.5068 on 2026-06-05** (GPT §5/Winners) — **conflicts with the synthesis's 17.30** (which traces to Gemini/Claude). See QC C.2.
- **`USD/CAD` 1.3931, `USD/JPY` 160.26, `USD/CHF` 0.7955, `USD/INR` 94.95, `USD/KRW` 1555.96, `GBP/USD` 1.3360, `EUR/USD` 1.1533** — all consistent with synthesis.
- **Gold COT detail, verbatim:** "Gold noncommercial net +173,837 contracts … open interest 332,709 … **specs long 52.25% of open interest; trailing 1y percentile 32.1**." USD Index: "+1,384 contracts … OI 50,285 … **trailing 1y percentile 79.2**." The **52.25%-of-OI** figure and the **percentiles** are GPT-only precision; synthesis carries them. Confirm the page's COT tile has the *percentile* context (32.1 gold / 79.2 USD), since that's the whole "long but not extreme" point.
- **CFTC contract names, verbatim, for wiring:** legacy futures `GOLD - COMMODITY EXCHANGE INC.` and `USD INDEX - ICE FUTURES U.S.` — exact COT report labels the data pipeline needs.
- **SOFR 3.60% on 2026-06-11** ([FRED `SOFR`](https://fred.stlouisfed.org/series/SOFR)) — GPT names SOFR as the FRA-OIS reference-rate proxy input. Synthesis carries it in the data board. A free wireable series the page's funding tile can show as the SOFR reference even though FRA-OIS itself is no-free-feed.
- **`SWPT` USD 28mn = "0.006% of the May-2020 peak"** and **USD 448bn May-2020 take-up** — both in GPT; synthesis carries. The 0.006% framing is GPT's.

**Unique mechanisms / framings:**
- **The basis tripwire as a *numeric* regime-switch rule (GPT §4, verbatim):** "If the desk sees **−50bp in EUR/USD or USD/JPY basis together with rising `SWPT`, falling EM FX, and gold bid, the regime has shifted from haven premium to balance-sheet liquidation.**" This is the sharpest single kill-switch sentence in the family — a four-condition AND-gate. Confirm the page's master-tell / kill-switch carries the **conjunction** (basis −50bp AND SWPT rising AND EM FX falling AND gold bid), not just the basis level alone.
- **De-escalation tell (GPT §4, verbatim):** "declining gold while real yields do not rise, narrowing basis while `SWPT` remains negligible, and **importer FX such as INR/KRW recovering faster than oil-exporter FX**." The INR/KRW-leads-NOK/CAD recovery-order signal is a GPT-unique de-escalation marker — not in the synthesis de-escalation list. Good addition to the catalyst watchlist.
- **Haven segmentation one-liner (GPT Disagreement-3, the synthesis explicitly elevates this as "the most useful one-sentence statement"):** "**the dollar remains the liquidity haven, while gold is gaining share as the political-reserve haven.**" Verbatim — confirm the page uses this exact phrasing somewhere in the dollar-haven section.
- **Data-confidence asymmetry rule (GPT §3, verbatim):** "daily FRED and weekly CFTC facts get High confidence, quarterly COFER/WGC gets High for last published but **Medium for current nowcast**, and private basis gets **Low-to-Medium**." A clean confidence-tiering the source-tier decoder could mirror.
- **Model-council implication (GPT §8):** "any high-conviction call should pair the free official dashboard with **at least one licensed market-data check** before execution, especially for basis and metals timing." The synthesis promotes this to its closing line.

**Confidence qualifications / falsifiers unique to GPT:**
- GPT tags every claim with explicit **High / Medium-High / Medium** confidence inline — the granularity the synthesis flattens. Notably GPT rates the **scenario probability weights only "Medium"** while the scenario *list/triggers* are "High." Useful honest-gap framing for the scenario matrix.
- GPT's Disagreement-2 verdict label: **"decoupled in level, not in impulse"** — "central-bank demand can lift the fair-value level, but **sudden real-yield jumps can still generate drawdowns.**" This is the *operational* version of the decoupling caveat (distinct from Claude's "conditional/reversible" and Gemini's "permanent"). The page's council-split box should carry all three labels: Claude = *conditional/reversible*; GPT = *level not impulse*; Gemini = *permanent regime change*.

**Free data-series IDs named by GPT (for wiring):**
- `DTWEXBGS`, `DTWEXAFEGS`, `DTWEXEMEGS`, `DEXUSEU`, `DEXJPUS`, `DEXUSUK`, `DEXSZUS`, `DEXCAUS`, `DEXMXUS`, `DEXINUS`, `DEXKOUS`, `DFII10`, `DGS10`, `T10YIE`, `RBUSBIS`, `FYFSGDA188S`, `USAB6BLTT02STSAQ`, `SWPT`, **`SOFR`** — all FRED. Plus CFTC legacy-futures labels above. (All already in the synthesis data board; GPT is the source of the full set.)

---

### A.3 · Gemini 3.1 Pro (`R-10-council-gemini_3_1_pro.md`)

Gemini is the de-dollarization / closed-loop / analogue-table author. Deltas:

**Unique [HARD] figures / claims:**
- **COFER USD share 56.1% in Q1-2026** (vs. the 56.77% Q4-2025 used by Claude/GPT). This is the *Q1-2026* print; synthesis flags the reconciliation. **This is a genuine number-conflict the page must handle** — see QC C.1.
- **EUR/USD 1.1679** in Gemini's data board ("End of May/Early June 2026 fix") — **conflicts with the synthesis/Claude/GPT 1.1533** (2026-06-05). Gemini even contradicts *itself*: its §2 prose says "EUR (DEXUSEU at 1.16 USD/EUR)" while the brief uses 1.1533. See QC C.2.
- **Gold COT "~154K net long"** (Gemini data board, via MetalCharts) — **conflicts with GPT's +173,837**. Gemini's is a stale/secondary source; GPT's CFTC-direct +173,837 is the canonical one. See QC C.2.
- **Gold retail spot $4,218.14 on June 13** (Gemini data board note) — a third gold print alongside synthesis's $4,239.90 futures (2026-06-12) and ~$4,365 LBMA tape. The page's "gold set straight" panel should note the **spread across venues** ($4,218 retail / $4,239.90 futures / ~$4,365 LBMA tape) rather than implying one clean number.
- **`SLVPRUSD` (FRED)** named as the silver series — but flagged **no-free-feed / "Direct spot series not free on FRED"**. Useful: this is the series ID the page would *want* for silver but cannot wire; both Gemini and GPT confirm silver has no clean free benchmark.

**Unique mechanisms / framings:**
- **The closed-loop transmission chain (verbatim, Gemini §9) — the synthesis credits this as Gemini's signature discovery:** "Energy spike → Fed rate expectations hold firm → USD rallies on yield and haven bid → Petrodollar surpluses accrue to ME exporters → **Exporters recycle into gold rather than USTs**, driving gold to $4,365." Confirm the page's petrodollar / dollar-hub visual draws this as an explicit *loop*, not a list.
- **"BoJ is trapped" framing (verbatim):** "The Bank of Japan is trapped. **Raising rates crashes the JGB market; holding rates at zero while the Fed stays high destroys the Yen (160+).**" The synthesis elevates this into §4. Confirm the USD/JPY cohort carries the trap as a two-horned dilemma, since it's *why* 160 can coexist with a haven regime.
- **"USD/Gold steamroller punishing anyone stepping in front" (verbatim, §6)** — Gemini's most aggressive trend-extrapolation framing; the synthesis preserves it as the "losing camp" / most-trend-following council voice. Useful as a *council-split* color quote on the carry/positioning section: Gemini = momentum dominates, GPT = COT says positioning is only moderate. **That tension is itself page content** (the contrarian-vs-trend split).
- **"Gold has crossed the Rubicon … 'sanction insurance' for entire countries"** (layman anchor) — crisp layman line.
- **De-dollarization analogy:** "Slowly using Visa less and paying in cash/crypto more, but **Visa is still the biggest network.**" The clearest single de-dollarization analogy in the family.
- **Broad dollar at 120 = "crisis strength"** (Gemini layman) — note this *overstates* vs. GPT/Claude's "firm, not euphoric / not a once-a-generation extreme." **Council tone-split**: Gemini frames 120 as crisis-level; Claude/GPT frame it as merely firm (only ~5% off the 2025 peak of 130.04, and only +0.4% YTD per GPT). The page's §0/§1 should side with Claude/GPT ("firm not euphoric") and can footnote Gemini's "crisis strength" as the maximal read. See QC C.4.

**Unique scenario-matrix content (Gemini's analogue table is the cleanest):**
- Gemini assigns **distinct historical analogues per scenario** in one table (synthesis credits this as a unique discovery):
  - (a) Base = **"2022 DXY 114 shock + 2020 dash-for-dollars"**
  - (b) De-escalation = **"1991 Gulf War quick resolution"**
  - (c) Funding freeze = **"2008 GFC liquidity crisis"**
  - (d) Further escalation = **"1970s oil shocks (directionally)"**
  - (e) Fed-cut = **"2011 gold peak"**
  - (f) De-dollarization = **"Unprecedented; post-WWII shifts"**
  - The page's scenario→asset matrix already has crisis templates; confirm each scenario row carries its *named analogue* (Gemini's contribution) rather than a generic "war-scare" label.
- Gemini's scenario gold ranges run **hotter** than Claude/GPT: (c) "**Blow-off to $5,000+**", (e) "$4,800+", (f) "structural floor $4,500+", (d) "$5,000+". Synthesis blended these into wider ranges. The **$5,000+ funding-freeze blow-off** and **$4,500 structural floor** are Gemini-specific upper markers.

**Confidence / falsifier unique to Gemini:**
- Gemini is the **sole "permanent regime change" voice** on the decoupling: "the weaponization of FX reserves (post-2022) created a **permanent** regime change; EM central banks will structurally maintain higher gold allocations regardless of real yields." This is the **losing camp** in the synthesis verdict (which lands on "conditional"). Preserve it verbatim as the falsifier-stress / minority view — its falsifier is implicit: *if gold gives back premium on a Hormuz reopen, Gemini's "permanent" thesis is wrong and Claude/GPT's "conditional" is right.* That makes the **de-escalation scenario the live experiment that adjudicates the council's central disagreement** — a strong page framing.

---

## (B) PRIORITIZED GAPS / ADDITIONS FOR THE PAGE

### P1 — should add / confirm (load-bearing)

1. **Quantified gold-decoupling falsifier as a tripwire.** Wire Claude's exact re-link trigger into the gold-vs-real-yields section: **"sub-400 t/quarter CB-buying run-rate *while* `DFII10` stays above 2%."** Target: §3 Valuation / gold-set-straight panel. (Currently the page has the decoupling narrative; confirm it states the *number* that would falsify it.)

2. **GPT's four-condition kill-switch conjunction.** The funding-freeze master-tell should be an **AND-gate**, verbatim: **"basis −50bp AND `SWPT` rising AND EM FX falling AND gold bid → regime has shifted from haven premium to balance-sheet liquidation."** Target: §7 master-tell / kill-switch. (Confirm the page isn't keying off basis alone.)

3. **Three distinct council labels on the decoupling-permanence split.** The council-split box should show all three, not a blended verdict: **Claude = "conditional / reversible"; GPT = "decoupled in level, not in impulse"; Gemini = "permanent regime change (post-2022 weaponization)."** Target: gold council-split / disagreements section. Frame **de-escalation as the live experiment that adjudicates it** (if gold holds on a real ceasefire, Gemini wins; if it gives back the premium, Claude/GPT win).

4. **Named historical analogue per scenario (Gemini table).** Confirm each scenario row carries its specific analogue: base = 2022 DXY-114 + 2020 dash; de-escalation = 1991 Gulf quick resolution; freeze = 2008 GFC; escalation = 1970s oil shocks; Fed-cut = 2011 gold peak; de-dollarization = post-WWII shifts. Target: scenario→asset matrix.

5. **Confirm DXY long-horizon anchors are in the page body, not buried.** **164.72 (Feb-1985 Plaza pre-coordination ATH)** and **114.78 (Sept-2022 wrecking-ball peak)** are the two anchors that make "DXY ~99.8" legible. Target: §1 regime / DXY anchor strip. (Brief says page has "$5,595 ATH" gold treatment and DXY 99.81 — confirm DXY *historical* anchors are present too.)

### P2 — strengthen (precision / nuance the synthesis flattened)

6. **Broad-dollar war-window move:** add GPT's **"+0.85% from 2026-03-04 to 2026-06-05"** and **"+0.4% YTD"** to §1/§9. The point: the dollar *barely moved* over the war window — counters the "crisis strength" framing and is a genuine surprise worth a callout. Target: §1 regime / §9 catalyst transmission.

7. **AFE-up-YTD / EM-down-YTD binary** (GPT) — confirm the broad/AFE/EM tile shows the **YTD direction split**, not just the 120.08 / 112.68 / 129.38 levels. The "shock is not uniformly anti-EM yet — it's concentrated on energy importers" read depends on it. Target: §2 structure.

8. **WGC full-history tonnage ladder** — add the **2022 (~1,082 t) and 2023 (1,037 t)** rungs to the existing 2024/2025/Q1-2026/April anchor. Plus **"95% of central banks expect to add gold next year"** (forward-demand anchor). Target: gold cohort / layman anchor bank / reserve-order scoreboard.

9. **Constant-FX COFER ≈ 57.7%** as the explicit counter-number behind "92% valuation." And **EUR 20.25% / RMB 1.95%** reserve component shares. Target: Triffin / COFER scoreboard. (Confirm the page pairs the headline 56.77% decline with the constant-FX "barely moved" number — that's the whole "diversification not divorce" point.)

10. **GPT's de-escalation recovery-order tell:** "**INR/KRW recover faster than oil-exporter FX**" — add as a de-escalation marker. Target: catalyst watchlist / de-escalation markers.

11. **Gold venue-spread honesty:** note the three live prints — **$4,218.14 retail (Jun-13, Gemini) / $4,239.90 futures (Jun-12) / ~$4,365 LBMA tape** — rather than implying one clean spot. Target: gold data tile / value-type decoder.

12. **SOFR 3.60% (`SOFR`)** as the free reference-rate the funding tile *can* show, with the explicit caveat that FRA-OIS itself is no-free-feed. Target: §7 plumbing / data board funding tile.

### P3 — nice-to-have (color, verbatim quotes, minority views)

13. **Verbatim council color quotes** for the positioning/carry split: Gemini's "**USD/Gold steamroller punishing anyone stepping in front**" (trend-dominates) vs. GPT's COT read "**not 'everyone is all-in long USD' … only +1,384 contracts**" (positioning moderate). This contrarian-vs-trend tension is genuine page content.
14. **Gemini's Visa analogy** for de-dollarization ("using Visa less … but Visa is still the biggest network") — cleanest layman line in the family; route to the Layman desk if not the analyst page.
15. **"$6,000 golden floor" bull-case marker** (Claude's [FinancialContent] cite) — a named forward target the page could cite as the maximal structural-bull view, clearly tagged [DIR]/external.
16. **GPT's data-confidence tiering** ("daily FRED/weekly CFTC = High; quarterly COFER/WGC = High-published/Medium-nowcast; private basis = Low-to-Medium") — mirror in the source-tier / feed-state decoder.
17. **CFTC contract labels** `GOLD - COMMODITY EXCHANGE INC.` and `USD INDEX - ICE FUTURES U.S.` — for the data pipeline, not reader-facing.

---

## (C) QC FLAGS — conflicts, stale, overconfident, re-verify

### C.1 · COFER number: 56.77% (Q4-2025) vs 56.1% (Q1-2026) — TWO DIFFERENT QUARTERS, not an error
- Claude & GPT use **56.77% (2025Q4)**, down from 56.93% (2025Q3). Gemini uses **56.1% (Q1-2026)**. The synthesis flags this for reconciliation ("the desk should reconcile on the next release date"). **These are different release quarters, not contradictory** — but the page must **label the quarter** on its COFER tile. The brief's "COFER 56.77% Q4-2025" is correct as the most-recent *confirmed* allocated-share print; Gemini's 56.1% Q1-2026 is the newer-but-single-source pull. **Recommendation:** lead with 56.77% (Q4-2025, two-source) and footnote 56.1% (Q1-2026, Gemini-only, pending IMF confirmation). Direction is consistent (down); do not present 56.1% as confirmed.

### C.2 · Three genuine council number-conflicts on the page's wired tiles
- **EUR/USD:** Claude/GPT/synthesis = **1.1533 (2026-06-05)**; Gemini data board = **1.1679** ("late May/early June fix") and Gemini prose = "1.16." → **Use 1.1533** (FRED `DEXUSEU`, dated, two-source). Gemini's 1.1679 is a stale/imprecise pull.
- **USD/MXN:** GPT = **17.5068 (2026-06-05)**; Claude/Gemini/synthesis = **17.30**. → Re-verify against FRED `DEXMXUS` for 2026-06-05; the page currently implies 17.30. GPT's 17.5068 is the more precise same-date pull and **may be the correct one** — flag for a fresh `DEXMXUS` check.
- **Gold COT net length:** GPT/CFTC-direct = **+173,837 contracts**; Gemini/MetalCharts = **~154K**. → **Use +173,837** (CFTC legacy futures direct, 2026-06-09, with OI 332,709 and 1y pct 32.1). Gemini's ~154K is secondary/stale; do not mix.

### C.3 · WGC 2022 tonnage: 1,082 t vs 1,086 t — internal inconsistency in Claude
- Claude's Ch.6 says **"1,086t in 2024"** but Claude's anchor bank §6 lists **"2022: 1,082 t (record) … 2024: 1,086 t."** The synthesis uses "1,086 t in 2024." → The **2024 record is 1,086 t**; the **2022 figure (~1,082 t) is a separate prior-record year**. If the page adds the full ladder (P2.8), keep 2022 ≈ 1,082 t and 2024 = 1,086 t distinct. Re-verify exact 2022/2023 tonnages against WGC before publishing the ladder.

### C.4 · "Crisis strength" (Gemini) vs "firm, not euphoric" (Claude/GPT) — OVERCONFIDENT framing flag
- Gemini's layman anchor calls broad dollar 120 **"crisis strength"** ("everything you buy from abroad costs 20% more"). Claude/GPT explicitly say the opposite: **"firm, not euphoric … not a once-a-generation extreme,"** noting it's ~5% *below* the 2025 peak of 130.04 and only **+0.4% YTD** (GPT). → **The page should side with Claude/GPT.** "Crisis strength" is the maximal/over-claimed read; present 120 as *firm* with the 130.04 (2025) and 128.45 (Sept-2022) ceilings as context. Flag Gemini's "crisis strength" as the minority/over-egged framing if cited at all.

### C.5 · USD/JPY 160.21–160.26 — CONFIRMS the brief's correction (not 157)
- All three councils agree: Claude **160.21**, GPT/Gemini **160.26** (FRED `DEXJPUS`, 2026-06-05). The brief's "USD/JPY 160.21 not 157" correction is **confirmed by the full council**. The 160.21 vs 160.26 spread is just same-week tick variance — either is defensible; **160.21–160.26 is the honest range.** No 157 print appears anywhere in the family.

### C.6 · Broad dollar DTWEXBGS 120.08 vs DXY 99.81 — CONFIRMS the brief's correction
- All three councils treat these as **different gauges** (26-economy trade-weighted free index vs 6-currency ICE-proprietary basket). GPT/Claude both stress "they are not the same number and never will be." The brief's correction (a) is **fully confirmed**. DXY 99.81 (2026-06-12, 52-wk 95.55–100.64) is council-consistent.

### C.7 · Gold ATH framing — council vs the page's "$5,595 ATH → −19% → ~$4,365"
- **No council file contains the $5,595 ATH figure.** The councils' gold anchors are: current ~$4,240–$4,365; 2020 record **$1,940.9 LBMA PM (2020-07-28)** (GPT/Gemini, sourced WGC) — note Claude/synthesis elsewhere say "$1,970–2,067" for the 2020 peak, a looser range; 2011 peak $1,825 (Claude) / **$1,895.0 LBMA PM** (GPT, WGC-sourced). → **QC flag:** the councils do **not** corroborate a $5,595 all-time high — that figure must come from the page's own later data (P-09.2 family or a fresher pull), not from R-10. The council-grounded statement is only "current ~$4,240–$4,365, roughly double the 2020 record." **Confirm the $5,595 ATH has a source outside R-10**; if it's a forward/intraday peak, it should be tagged accordingly. Also reconcile the **2020-peak figure**: GPT/WGC's precise **$1,940.9 (LBMA PM, 2020-07-28)** is better-sourced than the loose "$1,970–2,067" range — prefer the WGC number with date.

### C.8 · "92% of decline = valuation" — CONFIRMED, but pair with constant-FX 57.7%
- Claude states it; synthesis carries it. The brief's correction (c) is confirmed. **But** the page should pair "92% valuation" with the **constant-FX share ≈ 57.7%** (the residual that *did* move was tiny) — otherwise "92% valuation" is an unanchored fraction. Re-verify 57.7% against IMF constant-FX COFER.

### C.9 · Free wireable series — CONFIRMS brief correction (d)
- The full free FRED set is council-confirmed (GPT enumerates all). Net **add for wiring vs a minimal set: `SOFR` (3.60%)** as the funding reference, and confirm **`DTWEXEMEGS` (129.38)** is wired (it's the EM-dollar tile, often dropped). Genuinely no-free-feed (all three agree): DXY tick, LBMA gold/silver live benchmark, cross-currency basis, FRA-OIS, gold lease rates, EM intraday spot (TRY/ZAR), silver (`SLVPRUSD` named but not free).

### C.10 · Stale / single-source caution
- Gemini's gold COT (~154K), EUR/USD (1.1679), and retail gold ($4,218.14) are all **single-source/secondary** and conflict with the better-sourced GPT/CFTC/FRED prints. Do not wire Gemini's market levels where a FRED/CFTC equivalent exists.
- COT figures are **as of 2026-06-09** (weekly, lagged); the page should date them and note CFTC publishes Tuesday positions on Friday 15:30 ET (GPT).

---

## Bottom line
The synthesis is faithful; the page's known coverage (per the brief) already absorbs ~90% of the council substance. The **highest-value unmined adds** are the *quantified tripwires* the synthesis stated but a page can easily soften into narrative: (1) the **sub-400t/qtr + DFII10>2%** decoupling falsifier, (2) GPT's **four-condition AND-gate** funding kill-switch, (3) the **three distinct council labels** on decoupling-permanence with de-escalation as the adjudicating experiment, and (4) **named analogues per scenario**. The **must-fix QC items** are the gold-ATH provenance ($5,595 is *not* in R-10 — confirm its source and reconcile the 2020-peak to WGC's $1,940.9), the **EUR/USD 1.1533 vs Gemini 1.1679** and **USD/MXN 17.30 vs GPT 17.5068** tile conflicts, the **COFER quarter-labeling** (56.77% Q4-2025 confirmed; 56.1% Q1-2026 Gemini-only), and **rejecting Gemini's "crisis strength"** framing in favor of Claude/GPT's "firm, not euphoric."
