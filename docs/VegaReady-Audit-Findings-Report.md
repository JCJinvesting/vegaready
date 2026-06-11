# VegaReady — Full-Site Audit: Consolidated Findings Report

*Compiled 2026-06-03 from the returned design audit (`audit.css`, `engine.js`, `data-*.js`) — the element-level map of all ~40 routes, the recurring/systemic defects, the Top-20 ranked build queue, the proposed design system, and the consistency punch-list. This is the **findings** report (what & why). Sequencing into phases is the separate Build-Roadmap deliverable.*

---

## 0 · How to read this

The audit judges **every element on every route** on three axes — **W**ording / **V**isual / **S**tructure (1–5) — and assigns one flag: 🟢 **keep** · 🟡 **improve** · 🔴 **fix now**. For each element it specifies a **Simple-mode** behavior (plain-language default front door) and an **Analyst-mode** behavior (full institutional density). Roughly **a dozen 🔴 fix-now items**, dozens of 🟡 improves, and a strong 🟢 keep base (the corpus's writing and epistemic discipline are repeatedly praised). The live audit app computes exact counts.

The single thread running through all six sections: **the substance is strong; the packaging locks out the default (newcomer) audience.** The fixes are overwhelmingly presentation, onboarding, and consistency — not new research.

---

## 1 · The systemic patterns (read this first — these repair many pages at once)

1. **The analysis-card archetype is inconsistent (one fix → 12 pages).** Cards share a pattern (title · confidence · category tag · summary · metric key/values · sources) but the **confidence slot is chaotic**: bare "HIGH" on most pages, a full sentence on crypto ("HIGH for direction; LOW for coefficients"), paragraph-length on food/ag, and **completely blank on /markets/property** (reads as "unrated"). Plus **raw machine metric keys** (`em_crowding`, `gulf_urea_export_share`, `oem_margin`) and **insider category tags** (Regime, Plumbing, Signal). Fix once: a finding-first card with a single color-coded **H/M/L pill + hover for nuance**, humanized metric labels, glossed tags.

2. **Buried-lede / prose-first theses.** Nearly every "improve" page opens with 120–180 words of dense jargon before the point. The corpus's *strength* is its counter-intuitive hooks (gold fell during a war; insurance not warships closed Hormuz; the war accelerated the energy transition; order books outlast the ceasefire; "the delayed fuse"). Fix: **TL;DR + the single key asymmetry up top**, full thesis collapsed below.

3. **Wide tables fail on mobile.** 17–19-row × 6-col tables (equities, credit) "scroll-clip to noise" on the exact device an LP opens a link on. Fix: a 2–3-stat summary band above each table, sticky first column, collapse to key columns on mobile, winners/losers split panel.

4. **Unglossed jargon gates every page.** Two pages (credit, cross-asset) are explicitly **audience-LOCKED** for newcomers on vocabulary alone. The **209-term glossary already exists** but is stranded in the dashboard Sources tab. Fix: wire it as **site-wide inline tooltips** (dotted underline first use) — newcomer unlocked, zero new writing.

5. **Charts/maps/timelines are missing everywhere.** Density is "all text." Repeatedly requested: price/correlation charts, **geographic heat-maps** (insurance premium gradient, water strikes, remittance corridors, subsea cables, chokepoints, food resilience), and **timelines** (food lag-fuse, defense depletion-to-2030, escalation index).

6. **The cascade is the site's spine but invisible as navigation.** Every analysis page answers one link in a six-step chain — **what happened → how it spreads → what moved → who's exposed → how it connects → who profits** — but a newcomer sees 11 flat, equal tabs. Fix: a persistent **cascade rail** ("where am I / what's next") + nav grouped along the chain.

7. **Shared global components aren't templated.** The **scenario-state ledger** and the **freshness banner** appear on every analysis page; the freshness banner's hardcoded "as of May 29" stamp is the single most credibility-damaging defect for a "live" product. Template both as reusable parts (scenario strip, honest freshness banner).

8. **Epistemic honesty is a strength shown as fine print.** Source tiers (T1/T2/T3), `stale_claim_flags`, conditional framing ("45M could go hungry IF…"), pre-conflict caveats, "narrative vs reality," PROVISIONAL-2026, second-engine verification. Fix: surface these as **visible trust badges/chips**, turning rigor into a feature.

---

## 2 · Section 1 — Front Door (`/`, `/about`, dashboard shell)

**Homepage `/` — keep 3 · improve 5 · 🔴 fix 2.** The strongest single line on the site ("Volatility isn't risk. It's signal." — keep) and the best teaching device (the "vega" definition card — keep) sit beside its two worst moments:
- 🔴 **Hero headline "Sensitivity to volatility."** (W1/V4/S2) — a pun a cold visitor can't parse; the strongest typography spent on the wrong words. Rewrite: *"See how world events move your markets — before the move."*
- 🔴 **Capability list (3 of 4 = "Coming soon")** (W2/V2/S1) — a 1-of-4 "Active" ratio signals an unfinished product on an investor billboard. Collapse to one quiet roadmap line; foreground the corpus that exists.
- 🟡 Hero sub-deck, CTAs ("Open Dashboard" sends newcomers into the densest surface — wrong first click), cascade diagram (decorative, should be the interactive spine), coverage cards (over-promise a multi-vertical platform with one worked vertical).

**`/about` — keep 4 · improve 2 · fix 0.** The quiet hero of the site: plain-spoken, honest, summary-first. Holds the clearest cascade explanation ("Why we built this") and the right home for the roadmap. The homepage should borrow its headline grammar wholesale. Only gap: it *tells* the T1–T3 / attribution system instead of *showing* it. Make it the canonical `#methodology` anchor.

**`/dashboard` shell — keep 2 · improve 1 · 🔴 fix 2.** The product's beating heart and steepest cliff.
- 🔴 **Render strategy** — `client:only` React means JS-free visitors and link-preview crawlers see *nothing* on the most-shared surface. Server-render at least a headline + the War Room briefing + an as-of line.
- 🔴 **Jargon/code density** — B/C/U intercept codes, BDA, "leaker log", operation codenames, almost none glossed in place. Inline-gloss from the 209-term glossary; spell out codes.
- 🟢 **WAR_ROOM_BRIEFS** (110 plain-English, severity-tagged briefs) — the dashboard's hidden Simple-mode gold; it's the newcomer on-ramp that already exists in the data but isn't the front door.

---

## 3 · Section 2 — Live Dashboard tabs

Pattern across all tabs: **rich logs, no summary layer, military/finance codes unglossed, tables that wall the newcomer.** Each tab needs a one-line summary/visual on top and Analyst-gated raw arrays beneath.

- **Overview** 🟡 — no single sentence tells you the state of the world. Add a generated situation report ("Day 95: ceasefire holding militarily, Hormuz still effectively closed; Brent ~$92…") + a hero-stat band; make it the unmissable default.
- **Gulf** 🔴 — per-country daily arrays with B/Bd/Ud codes undecipherable; 12-col × 77-row tables scroll-clip. Country summary card first; gloss codes; mobile-safe.
- **Iran** 🟢🟡 — IRAN_DISINFO (165 rows of claim vs refutation) is a credibility asset; add a "claims: N made / N refuted" scorecard; visualize arsenal depletion as gauges.
- **Israel** 🟡 — 182-row ops timeline needs phase grouping + pinned turning points; defense readiness as bars.
- **US** 🟡 — 207-row policy log needs a current-posture summary; turn force tables into an annotated theatre map; gloss AUMF/squadron codes.
- **Markets** 🟡 — where the desk lives and the newcomer drowns. Chart oil/freight with event annotations (tables as drill-down); gloss AWRP/VLSFO/VLCC/bunker; KPI bands per series.
- **Economics** 🟡 — STRATEGIC_CALCULUS (335 rows, the largest array on the site) with useful ESCALATORY/DE-ESCALATORY tags. Roll up into an **escalation index** + a current net-posture verdict; rows as drill-down.
- **Casualties** 🟡 — handle with editorial care: respectful summary totals + a verification/sourcing note; move military classification columns to Analyst mode.
- **Analytics** 🔴 — EPICFURY_BDA / LEAKER_LOG, almost nothing glossed; most expert-only tab. Define BDA/"leaker"; add a campaign overview (objectives → outcomes); keep raw logs in Analyst.
- **Sources** 🟢 + 🔴 — the tiered, named source base is a major credibility asset (link it from every confidence chip). The **209-term glossary is stranded here (🔴)** — promote it to a global tooltip service.

---

## 4 · Section 3 — Markets (the archetype + 12 pages)

**`/markets` overview — keep 1 · improve 2 · 🔴 fix 1.** The highest-leverage surface: standardize the **card archetype** (§1.1), fix the **freshness banner** (🔴), and promote the **scenario-state ledger** to a persistent global status strip — and twelve pages improve at once. The 12 sections should be **cascade-ordered** (physical → financial → terminal), not a flat menu.

Per-page highlights (all share the archetype + table + jargon patterns):
- **Gold & FX** 🟡 — best counter-intuitive hook on the site (gold *fell* during a Gulf war, ~$5,595 → ~$4,099). Lead with the paradox answered plainly; the **BTC ≠ digital gold** verdict (BTC↔S&P ~0.53 vs BTC↔gold ~0.19) is a clean handoff to Crypto.
- **Equities** 🔴 (tables) — the AI-insulation bifurcation (oil-exposed fell; US AI tech shrugged, S&P new highs mid-war). TL;DR it; the 17–19-row tables are the worst mobile offenders; keep the excellent scenario trade map.
- **Crypto** 🟢🟢🟡 — the most opinionated, best-argued page; foreground the **structural stablecoin/sanctions story** ($344.15M USDT freeze + OFAC CBI designation) above the price-beta cards; gloss the microstructure wall (OI, funding, basis, skew, hashprice).
- **Credit** 🟡 — "Plumbing" locks out newcomers (subtitle it). Has the **richest, most product-shaped schema** (per-entry scenario impacts, beneficiaries/losers, substitution cycle, `stale_claim_flags`) — adopt it as the standard card template. Lead with the 7 takeaways.
- **Insurance** 🟢🟢🟡 — one of the most quotable insights ("insurance, not warships, shut the strait"); map the premium geography (Hormuz ~3% vs Oman ~0.5%); gloss P&I/JWC/AWRP.
- **Property** 🔴 (blank confidence) — confidence pills **missing entirely here** (undercuts source discipline); tangible stories (Alba smelter, The Line slipping past 2030); surface the exemplary Dubai/Abu Dhabi source caveats as chips.
- **Labor** 🟡 — the site's conscience ("involuntary immobility, not mass exodus"); gloss kafala/FTE; add a Gulf→South Asia remittance-corridor map + %-of-GDP bars.
- **Food & Ag** 🟢🟢🟡 — the best metaphor in the corpus ("the delayed fuse": less fertilizer now → smaller harvests next year) and its most human stat (45M more hungry, properly conditioned). Draw the gas→food lag timeline; **reconcile urea share (36% vs 30–40%)**; tame paragraph-length confidence strings.
- **Water** 🟢🟡 — the highest-stakes story on the site (Qatar 99% desalination-dependent, <2 days storage; CIA: worse than loss of any other commodity) in its **smallest footprint (one card)**. Expand into a full module; connect to the "unpriced tail" edge in Connections.
- **Energy** 🟡 — surprising thesis (the war *accelerated* the transition; security logic now funds clean energy). Lead with the paradox; chart the 2:1 investment split + WACC gap; gloss WACC/LCOE/CBAM; spotlight the Barakah nuclear-plant drone strike.
- **Defense** 🟢🟢🟡 — the most durable plainly-stated trade ("order books outlast the ceasefire"), best institutional sourcing (CSIS: ~50% Patriot stock expended, refill to 2029–30). Chart depletion/replenishment; cross-link the subsea-cable thread to /structural/digital.
- **Cross-Asset** 🔴 (14-card density) — the corpus's intellectual summit and steepest cliff ("the 2022 template, not 1979"; OVX ~28→120.91 vs VIX 31). The **single best case for the Simple/Analyst toggle**: Simple = 3 plain truths, Analyst = all 14 cards. Promote the reliable-vs-false **signal scorecard** (the most trade-ready content on the site).

---

## 5 · Section 4 — Synthesis & Outlook (the cascade's payoff, most under-exploited)

- **Transmission** 🟡🟢 — "How the shock spreads," step 2 of 6; opaque name. Subtitle it; draw the sector-cascade diagram; surface **second-engine verification** as a trust badge.
- **Exposure** 🟢🟢 — the most LP-legible content (winners/losers across 12 economies × 8 dimensions × 4 scenarios). Lead with a color-coded **world map** + the key-asymmetry line; sortable matrix; surface the May-30 primary-source verification as a badge.
- **Outlook (Gap Dynamics)** 🟡🟢 — opaque name; split "while it's shut" vs "when it reopens"; build a before/during/after substitution timeline. **Its `anchorReconciliation` (urea 36% IFPRI / 40% NDSU, range 30–40%) is the model** the other pages should adopt.
  - **Precedents** 🟢🟢 — "what the market did last time" (1973/1990/2008/2019/2022); chart each price path/duration/recovery; surface "superseded by events" status chips.
  - **Infrastructure** 🟢 — the most cartographic content; render the node-capacity data (Kharg, Ras Tanura, mines) as an annotated Gulf map; de-duplicate with /structural/chokepoints.
  - **Nuclear** 🟡🟢 — gravest stakes (Iran HEU + collapsed IAEA verification; broken Saudi "123"); lead with the plain "nuclear double standard" asymmetry; gloss HEU/breakout/123; keep PROVISIONAL-2026 visible.
- **Connections** 🟢🟢🟡 — the intellectual core. The "every edge is a hypothesis" umbrella is the **single most important paragraph on the site** (belongs on the front door). The 9-edge causal registry (each with activation/invalidation/named residual) is ahead of most institutional research and already carries **multi-driver foreign-key stubs** (china-statecraft, us-trade-policy). Render the 6 themes + 9 edges as a **navigable causal graph**.
- **Who Profits** 🟢🟢 + 🔴 — the most commercially compelling content in its weakest packaging. 🔴 **Eight beneficiary groups render with blank title strings** (hard content defect — name them: Oil & crude, LNG & gas, Fertilizer, Refiners, Shipping & shipbuilding, Insurance & the dollar, Cable & satellite, Defense/cyber/ag). Build channel → beneficiary → phase/vehicle cards; **reconcile defense spend $2.718tn (here) vs $2.887tn (/markets/defense)**.
- **`/signals.json`** 🟡 — right for machines, hostile to the curious LP who clicks it. Add a human `/signals` board (rendered preview + schema + copy-endpoint); link the machine endpoint from it, not vice-versa.
- **Briefings** 🟡 — one post under "Briefings" reads as an abandoned blog on a freshness-selling product. Reframe as "Featured analysis" until a real cadence exists.

---

## 6 · Section 5 — Structural Risk (the multi-driver-ready, "live product" layer)

- **Overview** 🟢🟢🟡 — clearest window into the product's ambition (scored, tiered, threshold-driven monitoring, explicitly multi-driver-ready). Make it the canonical **"how we score, tier & threshold" methodology anchor**; visualize the threshold ladder; **close or honestly roadmap the framework-vs-live-status gap**.
- **Chokepoints** 🟢 — 9 chokepoints scored 1–5; striking insight ("top 3 — Hormuz 4.4, Taiwan 4.2, Malacca 4.0 — all face Asia, no bypass"). Render as a scored world map.
- **Weaponization** 🟢 — the stable "small supply cut → big price move" rule, anchored in named episodes; visualize as a price-multiple timeline; link to live 2026 analogs.
- **De-globalization** 🟢 — contrarian and plain ("announcements ≠ delivered capital"); chart announced-vs-delivered reshoring as grouped bars.
- **Digital Sovereignty** 🟢🟢 — turns the invisible physical internet into a tangible risk (17% of traffic + >90% Europe-Asia bandwidth through one corridor; ~63 repair ships worldwide); map the cables (shared with Defense); make the "data Hormuz" parallel explicit; keep the LEO-capacity T3 figure visibly flagged.
- **Food Resilience** 🟢 — "buying power ≠ food security" (China hoards ~51% world wheat; the Gulf is a fiscal cushion, not resilient); render as a resilience heat-map.
- **Watch Board** 🟢🟢 — the destination the whole product is heading toward (33 metrics, 30 signals with directional thresholds + computed status, forward-catalyst register, per-signal trade expressions). Make it a glanceable status board + catalyst timeline. *This is where the deferred live-signal/trade layer lives — built as "framework now, live later."*

---

## 7 · Section 6 — Cross-Cutting & System

**Navigation / IA.** Organized by analyst taxonomy, not reader journey. Four moves: (1) make the **cascade the navigation spine** (persistent stepper); (2) **rename for outcomes in Simple mode**, keep precise nouns in Analyst (Transmission→"How it spreads", Exposure→"Who's exposed", Connections→"How it all connects", Who Profits→"Who wins", Outlook→"What happens next"); (3) **group 11 flat items into ~4 parents** (Live · Markets · Synthesis · About; only "Open Dashboard" a filled button); (4) breadcrumbs + a templated 3-link "related sections" footer; (5) a **freely-shown vs gated** visual convention (a lock affordance — Watch Board trade expressions and /signals.json are the natural first gated surfaces).

**Global glossary.** The 209-term set → a site-wide tooltip service (dotted underline, hover/tap), using the homepage's term/meaning/in-practice card as the tooltip template, plus a curated must-gloss subset glossed on first use every page.

**Proposed design system.** (Full reskin — see §9.)

**Consistency punch-list (the credibility QA track):**
- 🔴 **Stale freshness** — banner hardcoded "May 29, 2026" on every analysis page; compute from real data timestamps. Dashboard has no honest freshness signal at all.
- 🔴 **Contradictory anchor figures** — urea export share **36%** (Equities, Food & Ag, Connections — IFPRI) vs **30–40%** (Outlook — NDSU); global defense spend **$2.887tn** (/markets/defense — SIPRI) vs **$2.718tn** (/profits). One canonical figure each + a single reconciliation note. (Also audit fertilizer/ammonia shares, Hormuz transit, Brent levels.)
- 🟡 **Conflict naming** — five names ("40-Day War", "Gulf War III", "Third Gulf War", "2026 Iran War", "12-Day War") + two day-counts; operation names sprawl (Epic Fury / Economic Fury / Operation Fury). Pick one canonical name + duration; alias the rest; normalize operation names.
- 🟡 **"Coming soon" placeholders** on primary surfaces — consolidate into the About roadmap.
- 🟡 **Confidence presentation** — "HIGH" vs full-sentence vs blank, and two parallel systems (T1–T3 and H/M/L) with no shared key. Unify into one pill + one explainer.
- 🟡 **Cross-linking** — `relatedSectors` exists but as inconsistent prose; template as a uniform footer.

---

## 8 · The Top-20 ranked build queue (gain ÷ effort)

1. Ship the Simple ⇄ Analyst toggle as a persistent, remembered control *(Very high / High)* — the keystone; everything is downstream.
2. Add a one-line TL;DR + "single key asymmetry" band to every analysis page *(Very high / Low)*.
3. Wire the existing 209-term glossary in as inline tooltips on first use *(Very high / Medium)*.
4. Fix the freshness system; kill the hardcoded "May 29" stamp *(High / Low)*.
5. Make every data table mobile-safe (summary band + scroll affordance) *(High / Medium)*.
6. Rewrite the homepage hero sub-deck for a cold non-specialist *(High / Low)*.
7. Demote "Coming soon" placeholders out of primary surfaces *(Medium / Low)*.
8. Standardize the analysis-card component (one header grammar, one confidence chip) *(High / Medium)*.
9. Reconcile duplicated/contradictory anchor figures site-wide *(Medium / Medium)*.
10. Add a "where am I / what's next" cascade rail to every analysis page *(High / Medium)*.
11. Give the dashboard a Simple-mode "War Room briefing" front tab *(High / Medium)*.
12. Rename nav items for outcomes, not insider nouns *(Medium / Low)*.
13. Surface the source-tier + confidence system with a one-time explainer *(Medium / Low)*.
14. Collapse long thesis paragraphs into TL;DR → expandable detail *(High / Medium)*.
15. Build the scenario state into a persistent global chip strip *(Medium / Medium)*.
16. Give Who Profits and Connections real visual structure *(High / Medium)*.
17. Add empty-group labels on Who Profits (blank titles) *(Medium / Low)*.
18. Make /signals.json human-previewable *(Medium / Low)*.
19. Unify the conflict's five names + two day-counts *(Medium / Low)*.
20. Add breadcrumbs + a consistent "related sections" footer *(Medium / Low)*.

*Items 1–5 alone transform the newcomer experience without touching expert depth.*

---

## 9 · The proposed design system (a complete reskin — owner-confirmed: absolute)

The live site is dark terminal (`#060a12`, cyan, mono-heavy). The audit proposes an **editorial, long-read identity** — and the owner has confirmed the reskin is **complete and absolute**, with the visual direction to be **drafted and approved before build**.

- **Surfaces:** warm paper `#F4F1EA` · sunken `#EEEAE0` · card `#FCFBF8` · structural navy `#0E1825`.
- **Accent:** a single teal "signal" `#0F7E88` / `#13A0AB`. No new hues.
- **Status (low-saturation, never alarmist):** keep `#2F7D5B` · caution `#B0792A` · risk/now `#B8442C`.
- **Type:** Source Serif 4 (display + long-form reading) · Hanken Grotesk (UI/labels) · IBM Plex Mono (data/tickers/tiers/routes). Body ≥16px; measure 62–74ch; line-height 1.55–1.65.
- **Motion:** restrained; respect `prefers-reduced-motion`; nothing looping.
- **Principle:** plain-language promise first, elegance as the reward; comfortable for a 45-minute read, not just a 5-second impression. Navy is retained for structural surfaces; a dark mirror can serve the Analyst/desk.

**Components to template once and reuse:** standardized finding-first analysis card (3-tier, single H/M/L pill) · cascade rail (6-step stepper) · scenario strip (4 scenarios, live state) · honest freshness banner (+ 5 anchor chips) · confidence chip (H/M/L + T1–T3, linked to the explainer) · trust badges ("verified against primary sources", "second-engine verified", "PROVISIONAL", "illustrative (T3)") · winner/loser + map components.

---

## 10 · Sequencing (the 7 phases — from the roadmap prompt)

Order is **dependency-resolved**, not Top-20 rank order. Foundations before features; leverage (one fix → many pages) next; credibility quick-wins as a continuous QA track; showcase last on a solid base.

- **Phase 0 — Foundations & Design System** — tokens + standardized card + cascade rail / scenario strip / freshness banner / confidence chip / trust badges as reusable parts. *(seeds #8; supports all)*
- **Phase 1 — The Simple ⇄ Analyst spine** — the persistent, remembered toggle. *(#1, keystone)*
- **Phase 2 — Comprehension layer** — glossary tooltips + TL;DR/asymmetry bands + outcome-renamed nav. *(#2, #3, #12)*
- **Phase 3 — Front-door credibility** — hero rewrite, demote "Coming soon," promote the cascade, About as methodology anchor, fix freshness. *(#4, #6, #7)*
- **Phase 4 — Markets at scale** — roll the standardized card + dual-mode + mobile-safe tables across all 12 sections; charts/maps where flagged. *(#5, #14)*
- **Phase 5 — Synthesis showcase** — Connections causal graph, Exposure map, Who Profits cards, cascade rail everywhere. *(#10, #16, #17)*
- **Phase 6 — Live layer & dashboard** — War-Room briefing front tab + SSR shell + glossed codes; Watch Board status board; human `/signals` page; consistency QA close-out. *(#9, #11, #15, #18, #19, #20)*

---

## 11 · Research-track items (the figure-reconciliation lane — canonical JSON, then regenerate)

These are content/data fixes in `IranWarTracker/data/cascades/*.json`, regenerated via `build-cascades.cjs` — not site code, and they need a source-verification pass before being written:
- **Urea export share** — 36% (IFPRI) vs 30–40% (NDSU). Pick one canonical figure + carry the reconciliation note site-wide.
- **Global defense spending** — $2.887tn (SIPRI, /markets/defense) vs $2.718tn (/profits). Reconcile to one figure/vintage.
- **Conflict naming** — one canonical name + duration; alias the rest.
- Audit fertilizer/ammonia shares, Hormuz transit, Brent anchors for a single source of truth per figure.

---

*End of findings report. The substance and epistemic discipline are repeatedly praised as ahead of the genre; the work ahead is making that depth accessible to the Simple-mode newcomer without weakening the Analyst-mode desk — under a complete, owner-approved visual reskin.*
