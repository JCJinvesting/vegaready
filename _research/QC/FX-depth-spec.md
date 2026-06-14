# Analyst-Deep Depth Spec — what makes the ANALYST DEEP tier deep

Derived from a full read of `src/components/CreditDesk.astro` (brass, 1385 lines) and
`src/components/EquitiesDesk.astro` (steel). This is the density + structure target the new
FX page must match. Read it as: *every section is full of durable, sourced content; only
specific tiles are marked pending.*

---

## 0. The load-bearing principle (read first — answers the CRITICAL question)

**These pages have ZERO empty "research pending" placeholder sections.** Every section is
saturated with durable, sourced, framework-grade content. The only thing that is ever
"pending" is the **live numeric value of an individual tile** — and even those tiles are
fully built out (label, source, source series ID, as-of slot, plain-English meaning) with
only the *number itself* showing `—`. The page reads as complete because the *content* is
complete; the data is the only thing wired-or-not.

Two distinct pending patterns, both inside otherwise-full content:

1. **Per-tile pending chip** — a KPI tile renders its label + a `vt` value-type chip reading
   `feed pending`, with the value as `—` styled by `.kpi-v.pend` (smaller, `--latent` color).
   Example data shape: `['IG OAS', '—', 'feed pending', null]` (label, value, valueType, confidence).
   Live tiles in the *same row* show real registry numbers — e.g. EMBI pulls `byNo['2.1']`.
   So a row is a mix of live + pending, never all-pending.

2. **The "feed pending" mapping block** (`.feedph` / `.fp-rows`, inside `.deep`) — at the
   bottom of each §1–§5 spine section, a small block that **names every live number that will
   wire in and its exact source series** (e.g. `['IG / HY OAS + percentile', 'FRED BAMLC0A0CM / BAMLH0A0HYM2']`).
   This turns "we don't have the feed yet" into a *spec* of what's coming, with attribution.
   It is durable content, not a placeholder void.

3. **Live-vs-pending tile styling** in cross-asset/funding grids (`.xa-tile.live` vs
   `.xa-tile.pend`) — live tiles get a colored top border + real value; pending tiles get a
   muted top border + `—` + the source note (`feed pending · funding markets`,
   `status: standing (not drawn)`). The honest gap is *labeled as data*, never hidden.

**Rule for FX: build the full durable frame for all 11 sections. For data you can't wire,
use a per-tile `feed pending` chip + name its source in a `.feed`/`.feedph` mapping.
Never ship a section whose body is a placeholder.**

---

## Page-level architecture (both desks identical)

- **Frontmatter is ~50% of the file.** All content lives in named JS arrays/objects in the
  `---` block; the markup `.map()`s over them. This is the depth mechanism — the markup is
  thin, the data is huge.
- **Two audiences in one component**, gated by `body[data-mode]`: `.an-only` (analyst) and
  `.ov-only` (layman). FX needs the same dual structure. This spec focuses on **`.an-only`**.
- **Two detail tiers** gated by `body[data-disc]` (`skim`/`deep`): `.deep` blocks show only in
  Deep; `.skim-bl.skim-only` "Bottom line —" strips show only in Skim. **Analyst Deep = the
  master tier where ALL content lives.**
- Shared chrome: `.utility` ticker bar, `.masthead`, `<Wayfinder>`, `.freshbar`, `.secnav`
  (with `↑ Top` + section anchors + Skim/Deep toggle).
- **Inline `<script>`** does: live-as-of fetch, disc toggle (opens/closes all `details.dcard`),
  scroll-spy on `#secnav`, and **sortable table** (`#cohtbl` — click `th.sort`, reads
  `data-<col>` numeric ranks).

---

## Section-by-section depth spec (§0 State → §10 Evidence)

Section IDs and the ~11-anchor secnav (Credit): `state, regime, structure, valuation,
fundamentals, cohorts, factors, positioning, crossasset, catalysts, evidence`.
(Equities maps to: `state, regime, [shock-channel §2], breadth, valuation, earnings, [factor episodes],
positioning, crossasset, catalysts/scenarios, falsifiers/clock, evidence`.) FX should pick its
own ~10-11 section spine but hit the same density per section.

---

### §0 — State of the desk (`#state`, `.hero`)

**Content types:**
- Eyebrow + big `<h1>` with `<em>` second line (the headline call).
- `.sub` "The call:" paragraph + a `.dconf medium` confidence chip.
- A CTA frame link.
- **Live "desk panel"** (right column): a headline compressed metric (Credit: HY−IG
  compression `comp.bp` + percentile + `st-chip` state chip + wk-change), an OAS row of 2
  live cells, a `.metric-row` of 3 live registry cells (`eq.map`), a panel note, and a dashed
  `.attrib-foot` attribution line ("— ICE BofA … via FRED · as of …").
- Below the hero, `.orient` grid: **"The 30-second read"** (`read30`, 5 rich HTML bullets) +
  **"What would change this call"** (`falsifiers`, 4 bullets, red-tinted `.falsify` box).

**Volume:** ~1 headline, 1 call paragraph, ~5-6 live panel cells, 5 read-30 bullets,
4 falsifier bullets.

**Data arrays:** `read30` (string[] with `<b>/<i>`), `falsifiers` (string[]),
`eq` (`[{k, m}]` live), live feed helpers.

**CSS/components:** `.hero`, `.deskpanel`, `.comp-head/.comp-v/.comp-u`, `.oas-row/.oascell`,
`.metric-row/.mcell`, `.st-chip` variants, `.attrib-foot`, `.orient/.read30/.r30t`,
`.falsify/.fl-h`, `.dconf` confidence chips. (`.read30`,`.falsify`,`.orient` are scoped;
chips from desk.css.)

---

### Pre-spine — "Competing drivers" attribution block (`.attrib`)

**Content type:** a small table of **attribution buckets, not invented weights**, with an
explicit residual. Each row: driver name + bucket badge (`primary/material/secondary/uncertain`)
+ note. Equities has the same `drivers` array.

**Volume:** ~6 rows (last is always "Residual / unexplained — named, never assumed zero").

**Data:** `drivers = [{ d, b, n }]`. **CSS:** `.attrib/.attrib-row/.attrib-d/.attrib-b.b-<bucket>/.attrib-n`.

---

### §1–§5 — The durable spine (topic-spec sections)

This is the **core depth pattern** and the single most important thing to replicate. §1–§4
(Credit) / §1,3,4,5 (Equities) are generated by **`.map()`ing a `topicOrder` array over a `T{}`
object of topic specs** — one render block, N rich sections. §5 Cohorts, §6 Factors,
§7 Positioning, §8 Cross-Asset reuse the same `snap`/`track-grid` scaffold with their own deep content.

**The topic-spec object shape (`T.<id>`):**
```
{ eye:'§1', h:'Spread Regime', q:'driving question', fresh:'daily · close', chart:'regime',
  lead:'<b>rich HTML</b> lead paragraph with inline gloss spans',
  pr:'plain-language restatement'  // (equities only — used for layman cross-fill)
  kpi:[ [label, value, valueType, confidence], ... ]   // 4 tiles, mix of live + 'feed pending'
  track:[ [trackedItemHTML, 'M'|'N'], ... ]            // "what we track", M=master/N=secondary
  lv:[ 'Leading-indicator value headline', 'explanatory sentence' ]
  src:'source list string', tier:'T1'|'T2/T4'|...
  feed:[ [liveNumberName, exactSourceSeries], ... ]    // the feed-pending mapping
}
```

**What each spine section renders (markup):**
- Sec-head: eyebrow `{eye} · {q}` + `<h2>{h}.</h2>` + `.fresh-tag` cadence badge.
- `.lead` paragraph (`set:html`).
- `.snap` grid: **KPI bar** (`kpibar`, 4 tiles via `kpi.map`) + an **illustrative inline SVG
  chart** (`.snap-chart`, tagged "illustrative", from a `charts{}` object of hand-coded SVGs
  using CSS-var colors — one per `chart` key).
- `.track-grid`: **"What we track"** list (each item gets an `mn mn-M`/`mn-N` master/secondary
  badge) + a side column with the **"Leading-indicator value" box** (`.lvbox`: headline + sentence)
  and a **`.srcline`** (sources + `tierchip`).
- `.deep > .feedph`: the **feed-pending mapping block** (see §0 pattern 2).

**Volume per spine section:** 1 lead para, 4 KPI tiles, 1 SVG, ~5 tracked items, 1 lv box,
1 source line, ~2-3 feed-mapping rows. Credit has 4 spine sections in the map + §6/§7/§8
built individually; Equities similar. **Target: 5-6 such sections for FX.**

**Glossary hover system:** `gl('OAS','label')` emits `<span class="gloss" data-def="…">label</span>`
built from a `gloss` array → `G{}` lookup. Used inline throughout leads, track items, KPI
labels. **Define ~13-22 terms.** CSS `.gloss` (desk-content.css).

**CSS/components:** `.dsec`, `.sec-head/.eyebrow/.fresh-tag`, `.lead`, `.snap/.snap-chart/.cp-h/.cp-tag/.sc-svg`,
`.kpibar/.kpi/.kpi-k/.kpi-v(.pend)/.kpi-meta/.vt`, `.track-grid/.track/.tk-h/.mn.mn-M/.mn-N`,
`.lvbox/.lv-h/.lv-v`, `.srcline/.tierchip`, `.feedph/.fp-h/.fp-rows/.fp-row/.fp-k/.fp-v/.fp-note`.
Most are scoped in the component `<style>`; `.dsec/.eyebrow/.lead/.gloss/.dconf` come from
desk.css/desk-content.css/desk-v2.css.

---

### §5/§-cohorts — Cohort library + sortable sensitivity matrix (`#cohorts`)

**Content types (THREE artifacts in one section):**
1. **Sortable sensitivity matrix** — `<table class="dtbl" id="cohtbl">` with **clickable
   `th.sort`** columns. Each `<tr>` carries `data-rate/data-cyc/data-usd` numeric ranks; the
   JS sorts on click. Cells styled `.sens.hi/.mid/.lo`. Credit: cohort × {Rates, Cycle, USD}.
2. **Ratings-bucket cohort library** — `ratingsBuckets.map()` → `<details class="dcard">`
   expandable cards. Each card = title + proxy tag (`.dc-cat`) + one-line driver summary
   (`.dc-s`), and an expanded `.dc-body` with a `.prof-sens` line and **`.prof-rows`** keyed
   by `KPIs / Leading indicators / Classic risks / Lead-lag`.
3. **Sector cohort library** — identical `<details class="dcard">` shape over `sectors`.

**Cohort-library object shape:**
```
{ s:'name', p:'proxies/tickers', dr:'driver thesis', sens:'Rates High · Cycle Mod · …',
  kpis:'KPI list (may contain gloss spans)', leads:'leading indicators',
  risks:'classic risks', ll:'lead/lag note' }
```

**Volume:** matrix ~6 rows; ratings library ~5 cards; sector library ~6 cards. Each card has
4 prof-rows. (Equities equivalent: 11-sector "neighborhoods" + 6-factor "teams" +
country×scenario sortable matrix.)

**CSS:** `.dtbl`, `.sens.hi/.mid/.lo`, `.dcard/summary/.dc-t/.dc-cat/.dc-s/.dc-body`,
`.prof-sens/.prof-rows/.prof-r/.prof-k`. `.dtbl`/`.dcard` from desk-content.css.

---

### §6 — Factors (`#factors`) — factor crisis-history + regime tables

**Content types:**
- Standard `snap`/`track-grid` header (topic spec `T.factors`).
- `.skim-bl` bottom-line strip (Skim only).
- **Deep callout cards** (`.dcallout` with `.dc-h` heading + para) — 2-3 conceptual deep dives
  (e.g. "DTS is the risk unit", "Carry is not clean alpha").
- **Factor-rotation matrices** (`.dtbl`): factor × volatility-regime (signed numbers, tone via
  `fvTone()` → `.fv-pos/.fv-neg`); factor × economic regime (4-col); and a **crisis-history
  table** (episode | what led/broke | sourced magnitude `.num-cell`).
- Dense `.tnote` source footnote.

**Data arrays:** `factorVix` (3-col rows), `factorRegime` (5-col), `factorCrisis`
(`[episode, narrativeHTML, magnitudeHTML]`). Equities equivalent: `episodes` (6 crises ×
mkt/SMB/HML/RMW/DC factor prints), `caseFiles` (4 deep case files with bullet lists),
`council` (where research disagreed), `bedrock` (academic citations).

**Volume:** 2-3 callouts, 3 tables (~2-4 rows each), 1 footnote.

**CSS:** `.dcallout/.dc-h`, `.dtbl td.fv-pos/.fv-neg/.num-cell`, `.skim-bl/.bl-go`, `.tnote`.

---

### §7 — Positioning & flows (`#positioning`) — positioning-read matrices

**Content types:**
- Topic-spec header + skim bottom-line.
- Multiple `.dcallout` deep dives (dealer-buffer structural shift; "safest bonds cheapest" tell;
  TRACE limits; flows/hedging).
- **Dealer-inventory × spread-direction read matrix** (`dealerCells`): a positioning read where
  each row = inventory-state × spread-direction → interpretation, **tinted by outcome**
  (`tr.dlr-lose`/`dlr-win` tone the read cell). This is the "positioning read matrix" pattern.
- **Technical-vs-fundamental diagnostic table** (`techFund`): tell × technical-meaning ×
  fundamental-meaning.
- Source footnote.

**Data:** `dealerCells = [[invState, spreadDir, interpretationHTML, 'win'|'lose'|'mix']]`,
`techFund = [[tell, technicalHTML, fundamentalHTML]]`.

**Volume:** ~4 callouts, 2 tables (~4-5 rows each).

**CSS:** `.dcallout`, `.dtbl tr.dlr-*`, `.tnote`.

---

### §8 — Cross-asset linkages (`#crossasset`) — scenario×cohort + correlation pairs

**Content types:**
- Topic-spec header + skim bottom-line + caveat ("regime-dependent, not causal").
- **Scenario × cohort directional matrix** (`scenCohort`): scenario rows × cohort columns
  (IG/HY/Loans/EM-sov), each cell = directional text + tone class (`.sc-cell.sc-neg/.sc-pos/.sc-mix`).
- A "regime fact" `.dcallout` (the stock-bond re-correlation story).
- **Correlation-pairs table** (`corrPairs`): pair | typical relationship (normal) | **"breaks
  when…"** (what-breaks-it). This is the "normal vs what-breaks-it" correlation pattern.
- A **kill-switch `.dcallout`** ("in a dash-for-cash every correlation goes to ~1").
- Source footnote.

**Data:** `scenCohort = [{ s, c:[[cellHTML,'neg'|'pos'|'mix'], …] }]`,
`corrPairs = [[pair, typicalHTML, breaksWhenHTML]]`.

**Volume:** scenario matrix ~5 rows × 4 cols; corr table ~4 pairs; 2 callouts.

**CSS:** `.dtbl td.sc-cell/.sc-neg/.sc-pos/.sc-mix`, `.dcallout`, `.tnote`.

---

### §9 — Catalysts & scenario framework (`#catalysts`)

**Content types:**
- Sec-head + lead (catalysts *annotate* the durable frame, never replace it).
- **Funding/transmission-channel tile grid** (`fundingChannel`, `.xa`): live-or-pending tiles,
  each = key + value (live `fmt(m)` or `—`) + what-it-means + source note. `.xa-tile.live` vs
  `.xa-tile.pend` styling (the honest live/pending pattern again).
- **If-then scenario × cohort table** (`scenRows`, "durable framework" tag): scenario ×
  {sovereign, corporate, IG, HY}.
- **Active-catalyst module** (`details.catmod`): per active catalyst, a **winners/losers 3-lane
  block** (`.wl3` → win/mix/lose lanes from `winnersLosers` filtered by role), **"Key
  observations"** numbered takeaways (`takeaways`), and (deep) **transmission cards**
  (`cards.map` → `details.dcard` with Mechanism / Magnitude / Precedent / sourced links).
- **Monitored-catalysts** collapsed list (`monCats`).
- `emptycat` honest note when no active catalyst.

**Data:** `fundingChannel = [{k,w,m,note}]`, `scenRows = [{sc,sov,corp,ig,hy}]`,
`winnersLosers` (filtered to lanes), `takeaways`, `cards` (10 transmission cards),
`CATALYSTS`/`STATE_LABEL`.

**Volume:** funding grid ~6 tiles, scenario table ~4 rows, winners/losers ~3 lanes,
~3-10 takeaways, up to 10 transmission cards.

**CSS:** `.xa/.xa-tile.live/.pend/.xa-k/.xa-v/.xa-n`, `.dtbl`, `.frame-tag(.live)`,
`.catstack/.catmod/.cm-badge/.cm-title/.cm-chan/.cm-body`, `.wl3/.wl-lane/.wl-win/.wl-mix/.wl-lose/.wl-tag`,
`.takes/.take/.tn`, `.dcard` (transmission cards), `.kvrow/.dc-src`, `.emptycat`.

---

### §10 — Evidence & methodology (`#evidence`) — decoders

**Content types:**
- Sec-head + lead distinguishing **data confidence vs attribution confidence** (the two-chip law).
- **`.legend-grid`** of two decoder boxes:
  1. **Value-type decoder** (`valueTypes`): Baseline / Current / Nowcast / Forecast / Scenario,
     each `.vt` chip + definition.
  2. **Source-tier decoder** (`sourceTiers`): T1-T4, each `tierchip` + tier name + example sources.
- (Deep) cadence-discipline `.dcallout`, the full **glossary list** (`.glosslist`, all `gloss`
  terms), and a **primary-sources pill grid** (`.srcgrid/.srcpill` linking out, `sources` array).
- Closing `.tnote` (research-not-advice + licensing posture).

**Data:** `valueTypes = [[k,d]]` (5), `sourceTiers = [[k,name,examples]]` (4),
`gloss` (full), `sources = [[name,url]]` (~14).

**CSS:** `.legend-grid/.legendbox/.lg-h/.lg-row`, `.vt`, `.tierchip`, `.glosslist`,
`.srcgrid/.srcpill`, `.dcallout`, `.tnote`.

---

## Illustrative SVG charts (`charts{}`)

A `charts` object holds **hand-coded inline SVGs** (one per spine section that has a `chart`
key), all using `var(--data)/--neg/--warn/--struct/--pos/--ink/--muted` so they re-skin
automatically. Rendered via `set:html` inside `.snap-chart`, tagged **"illustrative"**
(`.cp-tag`, dashed border) — honest that they're schematic, not live plots. FX needs ~5 of
these (e.g. regime, term-structure, valuation, flows, correlation).

---

## Density checklist for the FX page (the target)

To match the analyst-deep tier, the FX `.an-only` block must contain, with NO empty sections:

- [ ] §0 State: headline call + live desk panel (mix of live + pending cells) + 30-sec read (5) + falsifiers (4)
- [ ] Attribution buckets block (~6 rows incl. residual)
- [ ] 5-6 spine sections each via a `T{}` topic-spec object: lead + 4 KPI tiles + illustrative SVG +
      ~5 tracked items (M/N badges) + leading-indicator-value box + source line + feed-mapping block
- [ ] Cohort library: sortable sensitivity matrix + ~5-6 `dcard` profiles (4 prof-rows each), ×2 groupings
- [ ] Factor/episode section: 2-3 deep callouts + 2-3 data tables incl. a crisis-history table + footnote
- [ ] Positioning section: ~4 callouts + a positioning-read matrix (outcome-tinted) + a technical-vs-fundamental diagnostic
- [ ] Cross-asset section: scenario×cohort matrix + correlation "normal vs breaks-when" pairs + kill-switch callout
- [ ] Catalysts: transmission-channel tile grid (live/pending) + if-then scenario table + winners/losers lanes + takeaways + transmission cards
- [ ] Evidence: value-type decoder + source-tier decoder + full glossary + primary-sources pill grid + two-confidence lead
- [ ] ~13-22 hover-glossary terms wired through `gl()`
- [ ] Every non-live number = a per-tile `feed pending` chip whose source is named in a `.feed`/`.feedph` mapping. **No "research pending" sections.**

---

## Reusable scaffolding vs bespoke (per CLAUDE.md tier-dependency law)

**Reuse (structure):** the `T{}` topic-spec object + spine `.map()`, `snap`/`track-grid`,
`.dcard` cohort profiles, sortable `dtbl`, scenario/correlation matrices, decoder grids,
the `gl()` glossary system, the live/pending tile pattern, winners/losers lanes, the
illustrative-SVG `charts{}`, Wayfinder/secnav/freshbar chrome.

**Bespoke (FX must author fresh):** all content (drivers, cohorts = currency blocs/pairs,
factors = carry/value/momentum/dollar-beta, scenarios, glossary, sources), the section spine
itself (choose FX-appropriate sections), and — per the owner-locked skin law — **its own
`skin-*.css` + `data-skin` color identity** (NOT brass, NOT steel; shown as `visualize`
options before building).
