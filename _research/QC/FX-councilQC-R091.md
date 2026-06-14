# Gap & QC Audit — R-09.1 (Foreign Sovereign Dollar Demand / Carry / Diaspora) vs the FX analyst page

Deep re-read of the four-file P-09.1 family: the adjudicated synthesis (`R-09.1-foreign-dollar-demand.md`) plus the three council reports (Claude Opus 4.8 = India/diaspora; GPT-5.5 = quant TIC/DV01; Gemini 3.1 Pro = carry-history/petrodollar/scenarios). Goal: find every figure, mechanism, framing, disagreement and caveat in the councils that the synthesis compressed or dropped and that is relevant to the FX/gold analyst page, then measure against the current page (§0–§10) and produce a prioritized add/deepen list + QC flags.

The dossier's own purpose is a **Rates⇄FX bridge** (supplement to R-09 §2.7/§2.9, companion to the FX desk). The synthesis is already strong; most genuine gaps are *council-only detail* the synthesis flattened, plus a handful of values the page should re-verify at build.

---

## PART A — Per-council unique contributions (beyond the synthesis)

### A.1 Claude Opus 4.8 (India / diaspora specialist)

Unique HARD figures / specs not (or only thinly) in the synthesis body:

- **2013 FCNR(B) precedent — leveraged-return worked example, primary-sourced:** a 2013 Economic Times worked example showed a leveraged depositor making **"$16 or 16% of the original investment"** in year one (ET, 30 Sep 2013); separately commentators documented NRIs earning **"17–18% annual return"** via own-dollars + overseas overdraft at **LIBOR+400bp** re-deposited (LinkedIn/Kaulgud, 23 Sep 2016). The synthesis keeps "17–18%" but drops the LIBOR+400bp borrow spec and the ET "$16 / 16%" worked figure.
- **2013 effective cost reconciliation (Ananth Narayan):** adjusting for all subsidies, India effectively raised 3-yr dollars at **~5.00%, or ~4.35% over 3-yr USTs** — "a PR disaster" had it been a public bond at that yield. (Synthesis keeps this; it is Opus's discovery — flag it as the single most important hedge on the substitution math.)
- **2013 covered-intervention proof of concept (SPJIMR/Narayan):** the swap window was "essentially a covered intervention mechanism" — reserves mobilised at peak stress, deployed at elevated USD/INR, *later rebuilt*, generating realised transaction gains; the dollar leg was **invested in USTs at risk-free USD returns** while the rupee leg "involved monetary creation without financial cost." This is the cleanest articulation of *how* a diaspora scheme literally becomes a UST purchaser.
- **2013 macro outcome:** rupee recovered **68.85 → ~62 by early 2014**; current-account deficit compressed from **4.8% of GDP (FY13) to 0.9% (Q3 FY14)** (LinkedIn/Sankara Narayanan). The CAD-compression number is a strong, concrete "it worked" anchor.
- **RIB/IMD legal-structure innovation:** structured as **certificates of deposit (not securities → dodged SEC registration)**, governed by Indian law/courts, available **only to the diaspora** — the "patriotic discount" let a below-investment-grade sovereign borrow sub-market. (Dropped from synthesis.)
- **IMD redemption mechanics:** matured 29 Dec 2005, redemption FX outgo **$7.08bn met by direct RBI reserve sale to SBI**, ~5% FX *gain* as the rupee appreciated → no exchange loss. RIB redeemed **Oct 2003 at $5.185bn, <20% rolled over**.
- **Forward-book as "hidden second drawdown":** RBI net-short forward dollar book **$110–115bn** by early June 2026 (KuCoin flash; >$103bn corroborated by Business Line); **$40bn lost in a single month and $11bn in one week** of the Feb→May drawdown. (Synthesis keeps $110–115bn but drops the "$40bn in a month / $11bn in a week" texture.)
- **2013 Rajan ALSO hiked the repo twice (Oct 2013, Jan 2014)** alongside the FCNR scheme — i.e., 2013 used (c)+(d) together, whereas 2026 uses (d) and *declines* (c). Sharpens the "negative-space" contrast.
- **Scale-equivalence framing:** $26bn in 2013 was **~2.5% of the deposit base and ~10% of reserves** (private banker via Business Standard).
- **Verdict framing:** the only model to fully *reconstruct* the Jefferies $100k/$700k/$800k SBLC arithmetic AND tie it to the 2013 precedent.

### A.2 GPT-5.5 (quant TIC / DV01)

Unique HARD figures / mechanisms (the synthesis adopts most of the framework but drops several exact numbers and the elasticity rule):

- **The clearing-elasticity rule (the page is missing this):** "if street/end-investor clearing elasticity is **~1bp per $7.5bn 10y-equivalent**, $50bn implies **~6–7bp mechanical term-premium pressure before signaling**." This converts the DV01 ruler into a *yield-move* ruler — the missing second half of the page's DV01 explainer.
- **DV01 base math, fully specified:** 10y nominal **4.45%** + 10y TIPS real **2.16%** (both H.15, 2026-06-11), duration **8.1** → DV01 **$0.081 per $100 face = $0.81mn per $1bn per bp** → $50bn ≈ **$40.5mn/bp**. (Page has the ruler; it lacks the explicit per-$100-face derivation and the duration assumption.)
- **Japan stock transition exact:** Japan **$1.2393tn → $1.1916tn** (the −$47.7bn). China **$693.3bn → $652.3bn** (the −$41.0bn). The page likely shows endpoints, not both.
- **March bill detail:** foreign residents **decreased UST bill holdings by $16.8bn** while all dollar-denominated short-term securities + custody liabilities **rose $1.3bn** (Treasury March 2026 release) — "drawdowns hit bills first" made concrete.
- **6-month decomposition, exact:** central **+$60bn**; official **−$120bn**, private/custodial/basis + pension/insurance **+$110bn**, oil-recycling **+$50bn**, FIMA substitution **+$20bn**; range **−$75bn to +$175bn**. **Central +$60bn ≈ $49mn/bp of demand.** **Stress case −$200bn official net selling ≈ $162mn/bp supplied → +15–25bp on the long end** if coincident with weak auctions/repo/basis deleveraging. (Page has the central estimate; verify it carries the stress-case $162mn/bp → 15–25bp line and the "+$49mn/bp" translation.)
- **FIMA pricing mechanics:** overnight tied to **SRF minimum bid rate**; 7-day at **weekly OIS + 25bp**; "usually priced above private repo in normal markets."
- **FIMA historical exactness:** COVID FIMA repo quarterly snapshots **$0mn / $2mn / $1.0bn / $1.0bn / $0mn** (2020Q1–2021Q1) — never exceeded $1.0bn. Swaps peaked **~$450bn** late May 2020 (BoJ $223bn, ECB $145bn).
- **H.4.1 custody anchor:** **foreign official/international UST custody = $2.633tn** on 10 Jun 2026 (the denominator the FIMA "$1mn" sits against).
- **Caribbean/basis line, exact:** UK + Cayman **+$46.0bn m/m**; Japan + China **−$88.7bn m/m** in March 2026. (Page §7/§8 may reference qualitatively; the exact pairing is a strong skim figure.)
- **Three-camp framing of the 6-month net:** Bearish-foreign-flow / Absorption-backstop / **Private-fragility** (the third "splits the difference" — Caribbean supports until repo/basis unwinds, then becomes a seller). The page's §7 has the forced-seller taxonomy but may lack this explicit *three-camp* net-flow split.
- **BIS detail GPT adds:** yen loans to non-Japanese nonbanks **~¥40tn/$250bn by March 2024**; **2008 BIS: yen +15%, CHF +9% over 10 months to Apr-2008**; **AUG-2007 first crack: AUD/JPY −7.7% in a single day** vs 0.7% daily avg (CESifo WP 2707).
- **JPMorgan GBI-EM scale:** India entered 28 Jun 2024, **$20–25bn over 10 months, 32–40% realized around inclusion** — the (h) local-bond-development mechanism in scale.

### A.3 Gemini 3.1 Pro (carry history / petrodollar / scenarios)

Unique framings, magnitudes, and the losing camp's reasoning:

- **Carry-Trade Casino analogy (full text):** Japan = "the cheapest, most boring table" (≈0% loan); EM/US-tech = "the high-stakes VIP room"; the simultaneous scramble to repay = the unwind. The cleanest plain-English framing in the council (already partly in the layman kit but the *full* casino metaphor is Gemini's and is sharper than what the analyst page carries).
- **Typical-unwind quantification (Gemini's "carry math"):** a *major* carry unwind = funding currency **+5–12% vs high-beta recipients in 3–10 days**, **VIX >35**, **10%+ of global equity market cap erased** before CB stabilization — holds across 1998, Jan/Oct 2008, Aug 2024. This is a reusable "what a carry unwind looks like" template.
- **Dated unwind magnitudes (Gemini's history is the richest):**
  - **1994:** Fed **3.0% → 3.25% Feb 1994**, first of six hikes to **5.5%**; Mexican peso **3.5 → 5.75/$ in days**, ~**$50bn** bailout; **EM break delayed 10 months** — "Fed tightening transmits with long and variable lag."
  - **1998:** yen **+~15% (Gemini) / ~20% (Opus) in days**; 10y troughed **4.16% (5 Oct 1998)**; VIX **49.53 intraday (8 Oct 1998)**; LTCM **$3.6bn rescue (23 Sep 1998)**.
  - **2007:** AUD/JPY **−7.7% on 16 Aug 2007**.
  - **2015:** PBOC fix **−~2% on 11 Aug 2015**; China spent **~$1tn reserves 2015–16** defending the yuan (largest single mechanism-(a) ever; the cause of China's secular UST decline).
  - **2018:** TRY **−44%** over the year.
- **Petrodollar-fracture thesis (the LOSING camp — capture for "council split"):** Gemini argues the Hormuz closure has **"violently severed both halves"** of the 1974 loop — exporters can't route barrels so revenue *stopped* and they turn **net seller** to fund deficits + military spend; importers **actively sell USTs** to fund non-Hormuz premium; the **Caribbean/basis line contracts** as the offshore-USD funding pool dries. Confidence: High. Bp-impact: this is "a primary structural driver sustaining the 10y at 4.49%." **The synthesis overrode this** (Saudi was a y/y BUYER +$18bn through March; revenue *per barrel* up on Brent $87+), but Gemini's reasoning is the falsifier/tail content the page should carry as the bear case.
- **Scenario bp-quantification (Gemini is the ONLY model giving bp per scenario):** Escalation **+30 to +50bp** (10y → 5.0%); De-escalation **−25 to −40bp** (10y → 4.0%); Carry unwind **+20 to +40bp in days**; Long-end strike → **5%+ structural floor (term-premium-driven, not Fed)**. Plus full lead-indicator and falsifier lists per scenario.
- **Gemini's diaspora "rounding error" camp (losing side):** "$70bn is a mere rounding error against India's $1.2tn economy… an expensive gimmick that merely delays the inevitable structural adjustment and devaluation." Useful as the explicit *bear* on FCNR.
- **Gemini's 17% framing (the REJECTED interpretation — keep as a documented council disagreement):** Gemini reads 17% as a **synthetic INR-hedged return** (~6–7% USD coupon + RBI hedge subsidy that absorbs INR depreciation → effective INR-equivalent ~15–17%), confidence High, "not a rumor… the exact engineering deployed in 2013." Synthesis **rejects** this (depositor takes no INR exposure; subsidy goes to the *bank's* hedge cost, not the depositor's coupon). The page should present the *adjudicated* (Opus leveraged-IRR) answer but can note the split as a falsifier.
- **De-dollarization bear case (Gemini camp):** BRICS+ local-currency settlement + gold = "definitive, terminal decline of dollar hegemony." Counter-camp: "gold cannot facilitate a $100tn global trading system." Sharp two-liner for §4/§9.
- **Carry-unwind transmission — Gemini explicitly rates the question "Low Confidence"** (the only model to formally down-rate its own confidence on the UST direction), reinforcing the synthesis "ambiguous" verdict.

---

## PART B — Prioritized gaps in the current FX analyst page

Format: **[Pn]** value/framing — *which section* — exact figures/wording to use.

### P1 (high value — add)

1. **[P1] Clearing-elasticity → yield-move ruler.** *§7 (DV01 ruler) or §0 attribution.* The page has "$50bn ≈ $40.5mn/bp" but stops there. Add GPT's bridge: **"~1bp of term premium per ~$7.5bn of 10y-equivalent flow → a $50bn sale ≈ 6–7bp of mechanical pressure before any signaling effect."** This is what turns the DV01 number into something a reader can feel. Also add the stress-case translation: **−$200bn official net selling over 6 months ≈ $162mn/bp supplied ≈ +15–25bp on the long end** (with weak auctions/repo/basis). And the central: **+$60bn ≈ $49mn/bp of demand.**

2. **[P1] The "1974 loop literally becomes a UST buyer" mechanic for FCNR.** *§9 (petrodollar) or a §7 diaspora-substitution note.* The page covers petrodollar fracture; it should also carry the *clean positive* mechanic Opus surfaced: a diaspora scheme is **"essentially a covered intervention mechanism"** — the absorbed dollars are **reinvested in USTs** while the rupee leg is "monetary creation without financial cost," so the scheme is simultaneously (i) a substitute for *selling* USTs and (ii) sometimes a *buyer* of them. Pair with the 2013 outcome: **rupee 68.85→62, CAD 4.8%→0.9% of GDP, ~$20bn redemption outflow at 2016 maturity** (the time-shift, not a fix).

3. **[P1] Gemini's "petrodollar fracture" as the explicit bear/tail case.** *§9 catalysts.* The page's reserve-order scoreboard is the base case (glacial). Add the council-split bear case verbatim in spirit: exporters → **net sellers** (deficit + military spend), importers → **active sellers** (non-Hormuz premium), **Caribbean/basis pool contracts**. Tag it as the *losing camp* the synthesis overrode on data grounds (Saudi +$18bn y/y buyer; Brent $87+ keeps revenue *per barrel* up), so the reader sees both the thesis and why the base case rejects it. This is high-value falsifier content.

4. **[P1] The diaspora "rounding error vs material savior" disagreement + the realized-inflow haircut.** *§7 positioning or §9.* Council resolves to **$25–50bn realized (vs $50–70bn headline) ≈ $20–40mn/bp avoided DV01** — "meaningful at India's level, marginal at global UST level." Give both camps: Camp A (SBI/Jefferies/Emkay/RBI revealed preference, 1:1 first-order); Camp B (Narayan/Business Standard: thin **1.5–2% spread vs 5.5–6% in 2013** caps inflows, round-tripping shrinks net dollars below gross, **~4.35% effective hidden cost over USTs**, only time-shifts). Plus Gemini's blunt "rounding error vs $1.2tn economy."

5. **[P1] Carry-unwind "what it looks like" template (Gemini's carry math).** *§6 (carry-unwind crisis ledger).* If not already present: a *major* unwind = funding ccy **+5–12% vs high-beta in 3–10 days**, **VIX >35**, **10%+ global equity cap erased** pre-stabilization — empirically true across 1998 / 2008 / Aug-2024. This is the reusable definition the ledger should anchor to.

6. **[P1] The 8.1-duration / per-$100-face DV01 derivation.** *§7 or §10 evidence.* Add the explicit basis so the ruler is auditable: **10y at 4.45%, duration 8.1 → $0.081/$100 face → $0.81mn per $1bn per bp.** Small addition, large credibility.

### P2 (medium value — deepen)

7. **[P2] Crisis-template magnitudes the page's haven/crisis ledger can sharpen.** *§2 crisis templates / §6 ledger.* The page lists 1990/1994/1998/2008/2020/2022/Aug-2024. Inject the council's exact magnitudes where missing: **1994** Fed 3.0%→5.5% (six hikes), peso **3.5→5.75/$**, ~$50bn bailout, **EM break lagged 10 months**; **1998** yen +15–20% in days, 10y **4.16%** trough, VIX **49.53**, LTCM **$3.6bn**; **2007** AUD/JPY **−7.7%** one day; **2015** PBOC fix **−2%**, China **~$1tn** reserve burn 2015–16; **2018** TRY **−44%**; **Aug-2024** TOPIX **−12%**, S&P **−3.0%**, VIX **65.73**, **only 10–15% of the ~$4tn yen book unwound in 72 hours**, S&P recovered by 9 Aug.

8. **[P2] The carry funding/recipient rate grid.** *§6 (carry config).* Confirm the page carries the explicit mid-2026 grid: funders **JPY 0.75% / CHF 0.0% / CNH 3.0% / EUR 2.4%**; recipients **TRY 37% / BRL 14.5% / MXN 6.5% / ZAR 7.0% / INR 5.25%**; US as the **+2.16% real-yield "vacuum"**; ECB ~+60bp & BoJ ~+40bp expected by year-end (Gramercy) → the **synchronized-squeeze tail** (the page's §6 already names this; verify the rate grid backs it).

9. **[P2] The 8-mechanism sovereign-response taxonomy as an FX-page frame.** *§4 fundamentals or §5 cohorts.* The page is organized by asset cohort; the dossier's organizing spine is "which response forces UST selling vs substitutes for it" across **(a) spot intervention / (b) drawdown / (c) rate defense / (d) diaspora / (e) FIMA-swap / (f) capital controls / (g) gold / (h) local-bond dev.** Even a compact ledger ("amplifies vs reduces UST selling") would give the FX reader the behavioral layer beneath the cohort cards (esp. for the INR, CNY, TRY, BRL cards).

10. **[P2] India as the live "negative-space" case.** *§5 (EM energy-importers card) or §7.* RBI **held repo 5.25% (3rd meeting), FY27 GDP cut to 6.6%, CPI up to 5.1%**, declined (c), pivoting to (d)+(h) after **$53.13bn FY26 spot + ~$46bn drawdown ($728.49bn→$682.3bn) + $110–115bn forward book**. Contrast 2013 (Rajan used (c)+(d) together). The FCNR window: **at par** (vs 2013's fixed 3.5% → banks bore it), CRR/SLR-exempt, **8 Jun→30 Sep 2026** deposit window, swap access to **16 Oct 2026**, **3–5yr / 1-yr lock**, expected **~6–7% USD**, companion **ECB swap at fixed 1.5%/yr to Dec 2026**.

11. **[P2] The "17%" reconciliation as a reader-facing myth-buster.** *§5 (EM card) or §10 glossary.* If the page touches FCNR at all: **17% = a 7–10x-leveraged USD IRR (Jefferies), NOT the deposit coupon (~6–7% USD), NOT INR-equivalent.** Worked math: **$100k equity + $700k borrowed at ~5% (SBLC) → $800k at ~6.5% → $17k on $100k = 17%.** "3 years" = lock-in/tenor, not a yield horizon. Note the *council split*: Gemini read it as a synthetic INR-hedged return; the synthesis rejected that because the depositor bears no INR risk.

12. **[P2] FIMA as the FX-side "master tell" companion.** *§7 (master-tell) / §8 (dash-for-cash).* The page's master tell is the cross-currency-basis/SRF spread — exactly GPT's point: **watch the spread between offshore dollar funding stress (FRA/OIS, cross-currency basis) and the FIMA/SRF administered rate, NOT the FIMA balance ($1mn now; $2.633tn custody sits behind it).** Add the pricing mechanics (overnight=SRF min bid; 7-day=weekly OIS+25bp) and the **$450bn May-2020 peak (BoJ $223bn, ECB $145bn)** as the option-value anchor. Also the **standing swap lines = only 5 core CBs (ECB/BoJ/BoE/SNB/BoC); FIMA = ~250+ counterparties** distinction.

13. **[P2] The private-fragility / Caribbean-basis camp.** *§8 cross-asset or §7.* GPT's three-camp split and the exact **UK+Cayman +$46.0bn vs Japan+China −$88.7bn (Mar-2026)** pairing: the official sector is the **net-demand soft spot** (foreign-official $3.902tn, **−$108.7bn m/m, −$21.2bn y/y**) while leveraged private custody absorbs duration but flips to *seller* if repo haircuts rise. This is a cleaner "what-breaks-it" pair than a generic correlation note.

14. **[P2] Diaspora peer track record (the comparator table).** *§5 or a §9 sidebar.* Israel DCI **>$54bn cumulative, $8bn record 2024** (structural); Pakistan RDA **$11.31bn by Oct 2025** (~$200m/mo); Nigeria **$300m, 130% oversubscribed, 5.625%, redeemed on time**; Ethiopia (failure); **Sri Lanka SLDBs swept into 2022 default** (cautionary); World Bank: Israel+India **$35–40bn cumulative**. Pattern: success needs a large/wealthy/attached diaspora + competitive rates + FX-risk removal + repatriability + credible institutions.

### P3 (lower value / optional — context)

15. **[P3] The stablecoin "9th channel" (curator add, M.1).** *§9 reserve-order or a cross-asset link.* Dollar stablecoins **~$230bn (USDT ~$142bn, USDC ~$60bn)**; Tether UST exposure **~$113–127bn ≈ the 18th-largest sovereign UST holder** (India/Saudi band); GENIUS Act (2025) mandates HQLA backing → structural **T-bill** demand engine. Effects: private EM dollar demand-relief (double-edged: accelerates capital flight) + structural front-end bid. Note the *plumbing* belongs to the Crypto desk; FX carries only the dollar-demand read. (Owner curator already flagged this as a real missing channel.)

16. **[P3] Triffin/exorbitant-privilege framing line.** *§4 fundamentals.* The page already covers Triffin; the dossier's one-liner is worth echoing: "the live question is never 'is the dollar finished' but **which channel meets dollar demand, and whether that channel forces or relieves UST selling.**"

17. **[P3] Misconception debunks (layman-side, but useful as analyst footnotes).** Foreigners hold **~$9.5tn ≈ 25% of ~$36tn outstanding** (not "all"); China selling ≠ US insolvency (own-currency borrower, Fed backstop); "gold buying ≠ immediate UST dumping" (**29t/mo steady flow**, not liquidation). The $9.5tn/25% denominator is a good §4 sizing anchor.

18. **[P3] GBI-EM local-bond inclusion as an INR tailwind.** *§5 (INR/EM card).* India GBI-EM entry **28 Jun 2024, $20–25bn over 10 months** — the (h) mechanism that pulls global duration into INR instead of USTs.

---

## PART C — QC flags (stale / contradictory / overconfident / re-verify)

### C.1 Stale / point-in-time values to re-pull at build (the dossier's own M.3 list)

- **TIC scoreboard is Mar-2026 (lags ~2 months).** Re-pull Japan **$1.1916tn**, China **$652.3bn**, UK **$926.9bn**, India **$183.0bn**, Saudi **$149.6bn**, Cayman **$459.4bn**, total **$9.349tn**, foreign-official **$3.902tn**. The page's §7 TIC scoreboard must show the same vintage label.
- **Gold:** synthesis uses **$3,300/oz** for the 29t/mo → $37bn/yr conversion. **The current FX page states gold ~$4,365 (off a $5,595 Jan ATH).** *Contradiction to resolve:* the dossier's $37bn/yr reserve-diversion figure is computed at $3,300, so at ~$4,365 the annual reserve flow diverted is materially higher (29t/mo ≈ **~$4.1bn/mo ≈ ~$49bn/yr** at $4,365). Either re-state the conversion at the live gold price or label the $37bn as "at $3,300/oz." **Flag: do not present the $37bn/yr number next to a ~$4,365 gold print without recomputing.**
- **COFER USD share** quoted **~56.8–56.9% (Q3 2025)** — the synthesis §A.1/§9 uses ~57%. *Internal inconsistency to watch:* §0/§9 of the page says "~57%"; the council's precise figure is 56.8–56.9% and is explicitly **no-free-feed / secondary (Brookings/Macrobond)**, not a primary IMF pull. Keep the "~57%" rounding but tag it M-confidence / secondary.
- **FIMA / swap H.4.1:** swaps **$28mn**, foreign-official repo **$1mn** (10 Jun 2026); custody **$2.633tn**. Re-pull.
- **MOF May-2026 intervention:** **¥11.7349tn (28 Apr–27 May)** confirmed but **direction NOT disclosed** in the primary CSV — the "≈$75.7bn if dollar-selling at ¥155" is *provisional*. **Flag: the page must not state this as a confirmed dollar-selling intervention.** (Both GPT and Opus flag it; the synthesis flags it.)
- **RBI FCNR realized inflow:** no official free time series yet; all figures ($40–70bn) are **estimates/targets, RBI set no official target.** Page must not present a target as an outcome.
- **US 10y / real:** synthesis header uses **4.45–4.49% / +2.16% real**; the FX page §0 uses **real 10y +2.16%** (consistent) but check the nominal vs the page's live tape.

### C.2 Contradictions / internal tensions

- **Petrodollar direction is genuinely unresolved in the council** (Gemini High-confidence "severed/net-negative" vs Opus/GPT "ambiguous, capacity up"). The synthesis sides with "partial, not complete." **QC: the FX §9 must present this as a council split, not assert fracture as fact.** Gemini's "persistent net foreign selling by official institutions throughout spring 2026" is asserted High but the hard TIC shows Saudi a **y/y BUYER (+$18bn)** and total foreign **+$294.5bn y/y** — so Gemini's "buyers' strike" framing is overconfident relative to the data. Use it only as the labeled bear case.
- **Carry-unwind UST direction:** Gemini "severely negative +20–40bp" vs GPT/Opus "ambiguous" (1998 flight-to-quality 10y→4.16%). Synthesis adopts "ambiguous, depends on co-state." **QC: §6/§8 should not present a carry unwind as unambiguously UST-bearish.** The honest tell: "bearish if US fiscal stress is the dominant narrative (flight-to-quality goes to gold not USTs); mildly bullish safe-haven if not." Gemini itself rated this **Low Confidence**.
- **Yen-appreciation magnitude in 1998:** Gemini "~15%," Opus "~20%" — both primary-sourced, councils differ. **QC: present as "~15–20%," not a single figure.**
- **2013 raise size:** Opus/synthesis "$26bn FCNR + $9bn ECB = ~$34bn"; Gemini says "$34bn" raised by FCNR alone. GPT flags **$26–34bn** as the honest range and refuses a single point. **QC: use "$26bn FCNR-B (~$34bn incl. ECB)," not a bare "$34bn."**

### C.3 Overconfidence / sourcing to soften

- **The 8 Jun 2026 RBI circular full text was never retrieved from a free primary feed** — verified only via 5 Tier-1 secondaries + the Governor's video. Parameters are High-confidence but the **exact hedging-cost-absorption circular wording is flagged.** If the page quotes circular mechanics verbatim, tag as secondary-corroborated.
- **Gulf "yuan-pricing threat / UAE swap-line demand" = single uncorroborated YouTube source, L-confidence, "treat as rumor."** **QC: must NOT appear on the page as a fact; if used, label as an unverified claim.**
- **RBI forward book $110–115bn = single secondary flash (KuCoin); >$103bn is the corroborated floor (Business Line).** Use **">$103bn (some estimates $110–115bn)."**
- **17% claim:** the page's myth-buster must land on the **adjudicated leveraged-IRR** answer (Opus, High) and explicitly *not* the Gemini "synthetic INR-hedged" reading, which the synthesis rejected. Any "guaranteed 17% in dollars" framing is "rumor-grade marketing."

### C.4 Verify the page already carries (don't duplicate)

- DV01 ruler ($50bn ≈ $40.5mn/bp) — present; **add the elasticity/yield-move half (P1 #1).**
- TIC scoreboard (Japan/UK/China/Cayman/India/Saudi/official/total) — present; verify foreign-official **−$108.7bn m/m / −$21.2bn y/y** "soft spot" framing is there.
- FCNR(B) "17% = leveraged USD IRR" explainer — present per the page outline; verify it carries the **$100k/$700k/$800k** worked math and the council-split note.
- Master tell = cross-currency-basis/SRF spread — present; **add FIMA pricing + $450bn-peak option-value anchor (P2 #12).**
- Carry-unwind crisis ledger + 2026 synchronized-squeeze tail — present; **anchor it to Gemini's 5–12%/3–10d/VIX>35/10%-cap template (P1 #5) and the rate grid (P2 #8).**

---

## One-paragraph bottom line

The synthesis is faithful; the highest-value adds are mechanical, not factual: (1) the **clearing-elasticity yield-move ruler** (~1bp per $7.5bn → 6–7bp per $50bn; stress −$200bn ≈ $162mn/bp ≈ +15–25bp) that completes the DV01 explainer; (2) the **covered-intervention mechanic** showing a diaspora scheme literally buys USTs (2013: rupee 68.85→62, CAD 4.8%→0.9%); (3) the **petrodollar-fracture bear case** and the **diaspora rounding-error camp** as labeled council splits/falsifiers; (4) **Gemini's carry-unwind template** and **dated crisis magnitudes** to sharpen §6/§2. The most important QC catch is the **gold $3,300-vs-$4,365 mismatch** (the $37bn/yr diversion figure must be recomputed or labeled) and the discipline of presenting **petrodollar fracture and carry-unwind direction as unresolved council splits, not facts** — plus never surfacing the **L-confidence yuan/swap-line rumor** or an unconfirmed **MOF May-2026 direction** as established.
