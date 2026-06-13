# P-11 — Commodities & Energy desk research v2 (build-consumption structure)
**Return as:** `_research/RETURNS/R-11-commodities-desk.md`  ·  **Desk:** Commodities/Energy (oil, gas, industrial & precious metals, ags; monetary gold lives on the FX desk — cross-reference)

---
PASTE INTO PERPLEXITY (deep research):

=== CONTEXT ===
I'm building a research-grade public intelligence page for the **commodities market — energy (crude & natural gas), metals (industrial + precious), and agriculture**. It renders twice — a **dense analyst page** (10-section spine §1–§10) and an **independent plain-language page** (chapters, every number given a layman "anchor"). House view: durable regime + event-catalysts; observed fact separated from interpretation. Your answer is pasted straight into the build, so **structure it EXACTLY as Sections 1–8 below.**

**Live environment (mid-June 2026 — for THIS desk the catalyst is the single most direct channel of any, and it is REALIZED):** the 2026 Iran war **closed the Strait of Hormuz on 4 Mar 2026** — ~95% drop in Gulf crude shipping, ~99% in LNG, **OPEC output down >30%**; the UAE expects full Hormuz flows only by 2027. **Brent has been violently volatile — ~$101 (3 Jun) → ~$87 (12 Jun)** as a fragile ceasefire + US–Iran peace talks ease the war premium. So today is a **realized partial supply shock with a large, unstable risk premium**, NOT a hypothetical. Treat **Hormuz-disrupted as the base case**, **de-escalation (premium unwinds toward pre-war ~$70s) as the key downside-for-price scenario**, and **full sustained closure ($120–150+) as the left-tail.**

=== TASK — produce the dossier in this structure ===

**1 · SCOPE & STATE.** Covers crude (Brent/WTI), nat gas/LNG, refined products, industrial metals (copper et al.), precious-as-commodity (silver, platinum; note monetary gold = FX desk), ags. Current one-sentence regime call + 4 headline numbers (Brent, the front-month spread/term structure, OVX, a copper or gas tile) with values + meaning.

**2 · THE ANALYST SPINE (§1–§10)** — each: read, 1–2 indicators, **free series (exact ID)**, current value, `[HARD]`/`[DIR]`.
 §1 **Regime** — oil's level/direction + the war risk-premium (DCOILBRENTEU, DCOILWTICO). §2 **Structure** — the **term structure** (backwardation vs contango, the prompt spread) as a physical-tightness gauge; OVX (oil vol, OVXCLS). §3 **Valuation** — price vs marginal cost / vs history; is the risk premium rich or cheap vs barrels actually lost? §4 **Fundamentals** — supply/demand balance, OPEC+ spare capacity, **EIA inventories**, production, demand growth. §5 **Cohorts/segments** — crude vs gas vs products (crack spreads), energy vs industrial metals vs ags; Brent–WTI spread. §6 **Factors** — carry/roll (the curve), momentum, the inventory/convenience-yield signal; what drives commodity returns. §7 **Positioning/plumbing** — CFTC COT managed-money crowding, tanker/freight rates, physical re-routing capacity, refinery utilization. §8 **Cross-asset** — commodities ↔ the dollar (inverse), rates (oil→inflation→Fed), equities (energy sector), credit (energy issuers). §9 **Catalyst transmission** — **the Strait of Hormuz** is the spine here: exact volumes & dependence, re-routing limits, the price elasticity to closure *threats* vs *actual* interruptions (with the historical record), knock-ons to gas/shipping/products; active chains now + escalation/de-escalation markers. §10 **Evidence** — EIA, IEA, FRED, USDA, CFTC, Baker Hughes.

**3 · DATA VERDICT BOARD** — table `tile | best FREE series (exact ID/API) | cadence | current value | feed-state | note`. Candidates: DCOILBRENTEU, DCOILWTICO, DHHNGSP (Henry Hub gas), **OVXCLS** (oil VIX, FRED), GASREGW (US gasoline), PCOPPUSDM (copper, monthly), EIA open data API (weekly inventories/production + the Hormuz volume reference ~20 mb/d), CFTC COT (weekly), Baker Hughes rig count. **Flag: the live front-month *futures curve / prompt spread* and OPEC+ spare-capacity estimates — free real-time source or placeholder?** Feed-state ∈ live / latest_published / source_identified / no-free-feed.

**4 · SCENARIO MATRIX.** 4–6 incl. **de-escalation (premium bleeds to ~$70s)**, partial-disruption persists, and a **full-closure left-tail ($120–150+)**. Each: triggers, expected Brent/WTI/gas moves with historical analogues/dates (1980s Tanker War, 1990 Gulf, 2019 Abqaiq/tanker attacks, 2022 Russia), lead indicators, falsifiers.

**5 · WINNERS / LOSERS.** Producers/exporters, importers, refiners (crack spreads), energy-intensive industry, ags, shippers — grouped, mechanism each.

**6 · LAYMAN ANCHOR BANK.** e.g. "Brent $70 comfortable · $100 a tax on growth · $120–150 = Hormuz-closure modelled"; "backwardation = tight now / scarcity, contango = glut"; "Hormuz carries ~20% of seaborne oil."

**7 · LAYMAN KIT.** Chapter concepts — contango/backwardation, the risk premium vs actual barrels lost, OPEC spare capacity, Dr Copper (growth signal), crack spreads, why a faraway strait moves US pump prices, the dollar-commodity inverse, inventories — each: analogy + worked numeric example + top-3 misconceptions.

**8 · COUNCIL & HONEST GAPS.** Disagreements (how many $/bbl does a sustained Hormuz closure actually add? how fast does a premium fade on ceasefire? is OPEC spare capacity real?), the camps; plus the no-free-feed list.

**Commodities-specific edges:** (a) Strait of Hormuz mechanics — volumes, dependents, re-route capacity (pipelines), historical price elasticity to threats vs interruptions; (b) the term structure/prompt spread as the cleanest tightness read; (c) OPEC+ spare capacity sources and why it caps spikes; (d) COT crowding/reversal; (e) the oil→inflation→rates pass-through magnitude & lag (ties to Rates); (f) crack spreads / products vs crude.

=== RULES ===
`[HARD]`/`[DIR]` tags; source + confidence each; **prefer free attribution-only** (EIA, FRED, USDA, CFTC, IEA where free); **flag every no-free-feed metric**; present disagreement (esp. the $/bbl closure debate) as a council; sober register.
