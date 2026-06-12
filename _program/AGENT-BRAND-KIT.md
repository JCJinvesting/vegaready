# VegaReady — AGENT BRAND KIT v1.6

**Status:** OPERATIVE brand law for any agent building or editing VegaReady pages. Drafted 2026-06-11 from the full `_program/` corpus + the as-built CSS; awaiting owner ratification (open items in §8).
**Authority:** where this kit conflicts with `DESIGN-CONTRACT.md`, `APPROVED-THEMES.md`, or any trial doc, **this kit wins** — it exists because the corpus contradicts itself in ways that made agents fail. The corpus remains the historical register; consult it only for rationale, never for values.
**Scope:** desk pages (`/markets/*`, `/layman/*`) and any new page built to the desk standard. Legacy non-desk pages still ride `global.css`.

---

## 1 · Read this first: the three-namespace truth

There are **three CSS token namespaces** in this codebase. Mixing them is the #1 historical agent failure.

| Layer | File | Loaded by | Namespace |
|---|---|---|---|
| Site/legacy | `src/styles/global.css` | non-desk pages | contract names: `--accent`, `--chart-hero`, `--benchmark`, `--body-ink`… |
| **Desk base** | `src/styles/desk.css` ("t1 Oxford") | **all desk pages — desk pages load desk.css ONLY, never global.css** | desk names: `--eyeb`, `--struct`, `--data`, `--bench`, `--emph`… |
| Skin | `src/styles/skin-<desk>.css` | desk pages whose route sets `<html data-skin="…">` | overrides the **desk** names |

**LAW: on a desk page, use only the desk namespace.** `var(--accent)` is UNDEFINED on desk pages. Never reference a contract-name token in a desk component or skin.

### Reconciliation table (contract concept → desk token → brass value, for orientation)

| Concept | Contract name | Desk token | desk.css (Oxford) | skin-brass.css |
|---|---|---|---|---|
| Page background | `--canvas` | `--canvas` | `#0D1626` | `#16130F` |
| Card surface | `--raised` | `--card` | `#131E32` | `#211C16` |
| Card hairline | `--hairline` | `--cardline` | `#1E2E4A` | `#3A3024` |
| Deep band | — | `--deep` | `#0A0F1A` | `#0E0B07` |
| Headings ink | `--ink` | `--ink` | `#F2EBDC` | `#F3ECDD` |
| Body text | `--body` | `--body` | `#DCD4C2` | `#D8CDB9` |
| Muted text | `--muted` | `--muted` | `#97917F` | `#9A8E78` |
| Brand accent (eyebrow/CTA/emphasis) | `--accent` | `--eyeb` | `#C9A24A` brass | `#C9A24A` brass |
| Structure colour (rules/labels) | — | `--struct` | `#5FA897` verdigris | `#AE8C54` bronze |
| Data series (reserved for data ONLY) | `--chart-hero` | `--data` | `#5E83D9` cobalt | `#7C8AA0` slate |
| Benchmark | `--benchmark` | `--bench` | `#FFD89A` | `#E3C77E` |
| Positive / Negative | `--pos` / `--neg` | same | `#46C9A0` / `#E2725B` | `#8FA862` / `#D2774F` |
| Warn / Latent / Emphasis | — | `--warn` / `--latent` / `--emph` | `#E0B262` / `#9AA5B1` / `#E3C77E` | `#D9A441` / `#9A8E78` / `#E3C77E` |
| CTA fill tokens | — | `--ctagold` / `--ctafh` / `--ctafc` | gold gradient | flat brass |
| Section surfaces | — | `--sx-*` family (util/hero/stat/anchor/bleed/map/funnel/sub/mast/foot/ctaz) | see desk.css | brass overrides `--sx-anchor`, `--sx-anchorline` |

---

## 2 · Theme facts (corrected)

- **Dark-primary.** The desk base theme is **Oxford Black (A4)** as shipped in `desk.css` — NOT "WB5 Deep Desk" (DESIGN-CONTRACT §1 is stale; WB5 was demoted 2026-06-08, APPROVED-THEMES L331: "too faded, not high end").
- **Warm Brass is credit-only.** It is not the site theme and not a template. The owner is lukewarm on it; it ships because it works for that one page.
- **Every new desk gets its own palette**, picked from the 9 approved dark combos (`APPROVED-THEMES.md`): Midnight Custody · Pine Black · Juniper · Charcoal Blue · Ink Slate · Oxford Black · Indigo Ink · Federal Slate · Payne's Deep. Present **2–3 options visually** (`visualize` widget) and let the owner choose — never guess.
- The light theme ("Soft White Desk") applies to the legacy/global layer; desks are dark-only until a decision says otherwise.

---

## 3 · The skin recipe (the recurring task — follow exactly)

To give desk `<name>` its own palette:

1. **Copy** `src/styles/skin-brass.css` → `src/styles/skin-<name>.css`.
2. **Re-key** the selector: every `html[data-skin="brass"]` → `html[data-skin="<name>"]`.
3. **Define ALL of these tokens** (the mandatory skin token checklist — brass omits none of the core set, but verify):
   `--canvas --deep --card --cardline --ink --body --muted --eyeb --struct --data --anchor --bench --pos --neg --warn --latent --emph --sx-anchor --sx-anchorline --ctagold --ctafh --ctafc`
   plus `background:var(--canvas)` on the `html[data-skin]` rule.
4. **Discipline (LAW, from the brass model):** ONE brand accent hue (`--eyeb`) + ONE reserved cool/neutral data tone (`--data`, used ONLY for data series) + semantic `--pos`/`--neg` + a warm/neutral structural tone (`--struct`) in the accent's family. Never two competing accent hues.
5. **CTA:** keep BOTH `.cta-frame` rules (bare `<a class="cta-frame">` and `<span class="cta-frame"><a>` wrapper). CTA = flat accent fill + **dark text** (`color:` a near-black in the skin's family, e.g. brass uses `#1F1606`) — never cream-on-accent (washed-out CTA was a standing owner critique), never gradients unless the owner approves.
6. **Charts:** desk charts inherit gridline treatment from desk.css/components (whisper grid ~6–8% ink opacity, heavier baseline). If your skin shifts canvas hue strongly, verify chart hairlines/labels still read; override in the skin if needed.
7. **Apply:** in BOTH route files (`src/pages/markets/<name>.astro` and `src/pages/layman/<name>.astro`): import the skin css and set `<html data-skin="<name>">`.
8. **Why a file, not the component `<style>`:** Astro scopes the component style block — it cannot reliably target `html`/`body[data-skin]`. Skins MUST live in an imported (global) CSS file.
9. **Verify** with §7 before claiming done.

---

## 4 · Type (the locked scale — literal values)

Families (max 3, roles fixed — hierarchy via size/weight/colour, never new fonts):
**Playfair Display** = display/headlines · **Fraunces** = body · **Lora** = numerals/labels/stats.

| Role | Size (min/std/max) | Weight | LH | Notes |
|---|---|---|---|---|
| H1 | 24/28/40px | 700 | 1.1–1.15 | ≤8 words |
| H2 | 18/20–24/36px | 600 | 1.2 | 5–8 words |
| H3 | 16/17–18/24px | 600 | 1.3 | — |
| Body | 14/**15.5–16**/18px | 400 | **1.6 on dark** (1.5 light) | **25–35 words/block — break longer prose** |
| Bullets | 13–14px | 500 label / 400 text | 1.5 | 5–10 words |
| Captions | 12/13/14px | 400 | 1.4 | metadata floor 12px; footnote 11px |
| Micro-label | 10.5–11px | 700 CAPS | 1.2 | +.05em; caps licence: micro-labels, kickers, table headers ONLY |
| Hero stat | 44/48–56/64px | 700 | 1.0–1.1 | **once per page**, Lora tabular |
| Inline stat | 14–15px | 600–700 | inherit | — |
| Pull-quote | 18/19–20/22px | 500 italic Playfair | 1.4 | ≤20 words; centered |
| CTA text | 14/15–16/18px | 600–700 | 1.0 | 2–4 words, sentence case + "→" |

**Weight Law:** weight rises as contrast/chroma falls; **any coloured text is bold**; footers Regular only. **Italics:** quotes, framing sublines, stats — **italic paragraphs banned**. **Emphasis in prose:** `<b>` for the load-bearing term, `<i>` for light stress.
**Emphasis hierarchy:** Bold > Size (hero, once) > Ink contrast > Semantic colour (always bold) > Fill containers > Underline (links + key-stat device only).

### 4b · Analyst-page density ladder (v1.1 — the gap that caused undersized prose)

The spec's Body row (15.5–16px) was written for editorial prose; analyst desk *components* (cards, callouts, hooks, boards) carry content-bearing prose at denser sizes, and v1.0 gave no floor — agents drifted to 11–13px for real content. The ladder, by **role not element**:

| Role | Size | Examples |
|---|---|---|
| Editorial body / Layman prose | 15.5–16px / lh 1.6+ | `.lead`, `.lay-*` prose |
| **Content-bearing component prose** | **13.5–14.5px / lh ≥1.55 — the floor for anything carrying analysis** | card paragraphs, callout bullets, hook points, board text |
| Supporting notes | 12.5–13px | `.tnote`, list annotations |
| Captions / metadata | 12px floor | source lines, chart captions |
| Footnotes | 11px floor | legal, attribution |
| Micro-labels | 10.5–11px caps | eyebrows, chips, table headers |

**The lead+bullets law (operationalizing the 25–35-word cap):** when a lead or callout paragraph exceeds ~35 words, do NOT cut content — restructure: keep a ≤35-word lead carrying the claim, move the rest into a bulleted key-points list (one fact per bullet, bold the load-bearing term). Content is never sacrificed to the cap; structure absorbs it.

**Section-nav law:** the desk `secnav` must show every section AND the Skim/Deep control without horizontal scrolling — wrap to two rows (taller header) once a desk exceeds ~10 sections. Never let the disc control clip off-canvas.

### 4c · The Skim Completeness Law (v1.3)

**Skim is not fewer sections — it is the same journey at one-tenth the depth.** A residual Skim (whatever happens to lack a `deep` tag) is a defect. Every desk ships TWO designed reading products:

1. **The `skim-only` primitive** is the inverse of `deep`: `body[data-disc="deep"] .skim-only{display:none}`. Deep hides skim-built content; Skim hides deep-built content. Write FOR each tier.
2. **Skim must be a complete miniature**: an opening "Today in 60 seconds" (the call + 2–3 live numbers + the one watch item), one line per chapter/section (the digest — Skim inherits the full narrative spine), and a "If you remember three things" closer with honest CTAs to Deep and the analyst edition.
3. **Affordance**: a skim-state banner telling the reader what Deep adds; reading-time labels on the toggle (`Skim · 3 min / Deep · 25 min`); chapter-nav clicks in Skim flip to Deep and scroll (`[data-godeep]` pattern).
4. **Target ratio**: Skim ≈ 3–4 minutes regardless of how large Deep grows; re-audit Skim after every major Deep expansion.

### 4d · Anti-narrow-wrap laws (v1.4 — each caused a live defect)

The recurring failure: variable-length text squeezed into a narrow box ragged-wraps into an unreadable blob. Four laws kill the family:

1. **The chip law:** an inline/header-line chip may hold **≤ ~4 words** of fixed text (status words, tickers, tiers). Variable-length meta — scale anchors, sources, alarm thresholds, "track it" lines — gets a **full-width footer line** instead (dashed top hairline + small accent dash prefix + text flowing left-aligned at full card width). Never right-align multi-line text; never `max-width` a chip below ~50% and pour sentences into it.
2. **The reading-measure law:** card body prose needs **≥ ~45ch of measure**. At desk width (~1100px) that means content cards go at most **2-across** (~520px each); 3-across is reserved for label-and-number tiles only. When a 2-across set has an odd count, the **last card spans full width** (`:last-child:nth-child(odd){grid-column:1/-1}`) — a feature, not a hack: it gives the set a closing emphasis.
3. **The stacked-label law:** key→value rows never use a fixed-width inline label (text hang-wraps beneath it). Labels render as small-caps **block** lines above their values.
4. **Stepper minimums:** timeline/stepper columns need `minmax(≥185px, 1fr)`; let auto-fit wrap rather than crush captions.

### 4e · The Wayfinder law (v1.5 — owner-ratified pattern A3)

Every page below root in the masthead system carries a **Wayfinder** (`src/components/Wayfinder.astro`) directly after `.masthead`, before the freshbar. It is the site's forward-looking breadcrumb: the **trail** (left) says where you are; the **sibling rail** (right) shows every lateral/forward move from here, always visible, one click away.

1. **Anatomy is fixed:** one 34px row inside `.wrap` — Lora small-caps crumb trail (links muted → ink on hover, current segment bold ink, `▸` separators in `--latent`) + a right-aligned pill rail (transparent pills, hairline on hover; current pill gets `--eyeb` tinted fill + border + `aria-current="page"`). No JS, no dropdowns — every pill is a plain `<a>`.
2. **Rail content by level:** on a hub, the rail lists its **children** (the desks). On a desk, its **siblings** (the other desks, same edition). On a sub-page, its sibling sub-pages. The layman wing rails only within the layman edition plus an "All editions" exit.
3. **Honesty tags ride the rail:** any pill pointing at an in-build page carries the dashed `in build` tag — navigation never oversells a destination (§5-13 extends to links).
4. **Edition stays in the freshbar:** the Layman⇄Analyst toggle does NOT move into the Wayfinder; one row, one job.
5. **Mobile:** rail scrolls horizontally (hidden scrollbar); trail drops its first segment when 3+ deep, keeping parent + current.
6. **Skins style it for free:** all colour comes from desk tokens (`--cardline/--muted/--ink/--latent/--eyeb`) — never add per-desk Wayfinder colour rules.

Legacy pages (`/today`, `/catalysts`, front door, `/dashboard`) keep their existing rails until the front-door loop migrates them to the masthead system — do not bolt the Wayfinder onto the old `Header.astro` design.

### 4f · The frozen command deck (v1.6 — owner-ratified "the swap")

On any scrolling desk page there is exactly **ONE sticky bar**, and it is never the masthead. The masthead scrolls away with the hero; the section deck swaps in and owns the frozen slot for the rest of the read.

1. **The masthead is never `position:sticky`** on masthead-system pages (the v1.5-era bug: masthead z:60 and secnav z:50 both pinned at `top:0`, so the masthead *covered* the frozen secnav — readers had a section nav and couldn't see it).
2. **Analyst pages:** `.secnav` is the deck (`sticky; top:0; z:50`) — section anchors + Skim/Deep `.disc` + the Top chip.
3. **Layman pages:** `.secnav` is mode-hidden, so they get a `.laydeck` (same sticky recipe) at the top of `.ov-only` — chapter links where chapters exist (numerals carry the chapter accents) + a duplicated `.disc` (the shared `apply()` binds every `.disc button`) + the Top chip. Chapter links inherit the chnav smart-flip (clicking from Skim flips to Deep).
4. **The Top chip** (`.sn-top`): first item in every deck. `href="#"` (native scroll-to-top with no JS), CSS-smooth, `prefers-reduced-motion` → instant (desk.css global). Hidden until `body.scrolled` (rAF-throttled scroll listener, threshold ~480px) via `opacity/visibility` — space reserved, so the deck never reflows. Never a floating bottom-corner FAB — chrome lives in the deck, content stays uncovered.
5. **Anchors clear the deck:** `:where(section,div)[id]{scroll-margin-top:72px}` (desk-v2.css) — section/chapter jumps must land with their headings visible below the frozen bar.
6. **Budget:** the deck is the page's whole persistent-chrome allowance (~40–80px wrapped). Do not stick the freshbar, the Wayfinder, or anything else alongside it.

**Canonical component anatomies (copy these, don't reinvent):**
- **Decoder row** (`.dec-row`): header line (Fraunces term + 7px struct square tick) → full-width plain body (14px/1.6) → optional full-width meta footer per the chip law. No side columns; no empty wells.
- **Chapter nav pill** (`.chnav a`): body-ink text; ONLY the Playfair roman numeral carries the chapter accent; accent surfaces in the border on hover. Color as accent system, never rainbow text. Label line sits as its own block above the pills.
- **Section-header dash:** every layman `lay-sech h2` carries an 18×3px gold dash `::before` — the scanning anchor across long pages.
- **Chapter accents** (`--chA..--chG` in the skin): sanctioned hues only, low-salience duty (numerals, dividers, bars, dots) — never running text, never backgrounds at strength.

---

## 5 · Hard laws (the agent checklist — each is verifiable)

1. **No literals in components.** No hex, no `font-family:`, no `font-size:` inline `style=""` attributes or one-off values in component markup — tokens/classes only. (The reference violates this in spots — see §6; do NOT copy.)
2. **One CTA per view**; never two visible; never adjacent to a pull-quote (no CTA in the same scroll-view as a quote, none directly after); no CTA inside risk content.
3. **Pull-quote:** Playfair italic, centered, sparingly — the ONE line worth enlarging per page region.
4. **Status/confidence = colour + shape + symbol, never colour alone.** Glyph set: ○ Latent · ◇ Anticipated · △ Elevated · ⬣ Alert · ✓ Realized. Latent is never red; Alert reserved for live events.
5. **Charts:** illustrative SVGs are **thumbnails (~122px tall), never full-width heroes**; horizontal whisper gridlines only; heavier zero/baseline; ≤3 data colours; benchmark dashed; sign+value labels on pos/neg; **no load animation** — charts render complete; state transitions 150–250ms ease-out; `prefers-reduced-motion` → instant.
6. **`--data` is for data series only** — never decorate prose or chrome with it.
7. **Gold ✕ Crimson quarantine:** no gold/accent inside alert/disclosure components.
8. **Counts per view:** ≤5 colours · 1 hero stat · 1 gradient max · ≤2 non-neutral outside the brand tier.
9. **Cards:** visible hairline separation (`--cardline`), padding 24–32px, radius 12 outer / 8–10 inner; no heavy shadows.
10. **Buttons ≥44px tall mobile / ≥36px desktop; links ≥14px with −15% hover.**
11. **Left-align explanatory text; quotes centered; no horizontal-scrolling headers.**
12. **Reading model intact:** `.an-only`/`.ov-only`/`.an-block` audience gating; `body[data-disc="skim"] .deep{display:none}` detail gating; never leak analyst jargon into Layman.
13. **Integrity contract:** never invent data; "feed pending" stays honest; every figure carries value type + source tier.

---

## 6 · Do-NOT-imitate list (known violations in the approved reference)

`CreditDesk.astro` is the structural model, but it contains violations that slipped through. Copy the structure, not these:

1. Inline `style="font-family:'Lora'…;font-size:11px;…"` attributes (violates §5-1). Use/extend a class.
2. Confidence chips (`.dconf`) render colour+text with **no glyph** (violates §5-4). New desks add the glyph; credit gets fixed on its next pass (owner item O-4).
3. Hero pull-quote and a CTA share a scroll-view in places (violates §5-2 intent). New desks: keep them in separate views.

When you find a conflict between this kit and the reference component, **the kit wins**; flag the reference's violation rather than propagating it.

---

## 7 · Verification loop (run before claiming any visual work done)

**Pre-build:** re-read the target file (another session may have touched it) · confirm which URL/mode you're editing · view the live staging page first (Claude-in-Chrome).
**Render-integrity laws (v1.2 — each caused a live defect on the equities desk):**
1. **No HTML-string interpolation in JSX text position.** Astro escapes `{expr}` — a helper returning an HTML string (like `gl()`) renders as literal `<span …>` text. HTML strings render ONLY via `set:html`; in markup, write real JSX (`<span class="gloss" data-def={G['X']}>X</span>`).
2. **`set:html` list items get a single wrapper span.** `<li set:html={x}/>` under a `display:flex|grid` li fragments every inline node into a separate flex item. Always `<li><span set:html={x}/></li>`. (CreditDesk's read30 carries this latent bug — fix on its next pass.)
3. **Generated data keys never render raw.** Snake_case keys from `analysis/*.js` (e.g. `hormuz_closure`) must map through a display-label function before reaching markup.
4. **Scenario/catalyst chips carry status + definition.** Every scenario gets a realized/monitored status chip and a one-line *physical* definition (what actually happens — transport blockage vs capacity destruction vs connectivity cut). A bare label is an intelligence gap, not a UI choice.

**Post-build:**
- [ ] `grep` the diff for `style="`, raw hex (`#[0-9A-Fa-f]{3,8}`), `font-family:`, `font-size:` inside component markup → must be zero new instances
- [ ] **Render-integrity grep of the BUILT page** (`dist/client/...index.html`): `&lt;span` (escaped HTML leaking as text) → 0; visible snake_case keys (`>foo_bar<`) → 0
- [ ] **Fresh-eyes pass:** before owner review, a reviewer (subagent or self after a break) scrolls the full rendered page top-to-bottom in the browser — walls of text, fragmented lines, absurd table columns, orphaned whitespace. The author's eye normalizes its own defects; the page must be checked by an eye that didn't write it
- [ ] All skin tokens from §3-3 defined (new skins)
- [ ] Type roles match §4 (spot-check H1/H2/body/micro-label sizes)
- [ ] One CTA per view; quote≁CTA; CTA dark-text-on-accent, both markup patterns styled
- [ ] Status elements carry glyphs; charts are thumbnails with whisper grid
- [ ] Skim hides `.deep`; Layman shows no `.an-only`/`.an-block`; analyst shows no `.ov-only`
- [ ] No invented data; "feed pending" intact
- [ ] Compile clean (`@astrojs/compiler` one-liner) → `npm run stage` → confirm `Uploaded vegaready-staging` → view the page in Chrome at BOTH URLs, skim+deep
- [ ] Curly punctuation preserved in edited strings

---

## 8 · OPEN items (owner to rule; kit updated after)

- **O-1:** Ratify Oxford Black (A4) as desk base default (as-built), or schedule the P0-S02 flagship trial for a final default.
- **O-2:** Bless the desk namespace (`--eyeb/--struct/--data/…`) as the operative token set (recommended), or fund a migration to contract names.
- **O-3:** Approve regenerating a machine-readable `tokens.json` from desk.css + skins (replaces the missing `vegaready-tokens-v3.1.json`; enables a real lint).
- **O-4:** Approve fixing the §6 reference violations in CreditDesk.astro before equities propagation.
- **O-5:** Desk light-mode: out of scope until requested? (Current desks are dark-only.)

**O-6 (note, owner-stated 2026-06-11):** desk palette picks are **stage approvals, not final brand lock** — the owner may re-pick from the 9 approved combos (or direct a new trial) at any point before a desk ships to production. Agents treat a chosen skin as current-working, keep it cleanly swappable (all colour in the skin file, none in the component), and never describe a palette as "final."

**Changelog:**
- v1.6 (2026-06-12) — added §4f frozen command deck (owner-ratified "the swap": masthead never sticky; secnav/laydeck is the ONE frozen bar with integrated Top chip; scroll-margin law). Cause: masthead and secnav both pinned at top:0 with masthead on top — the sticky section nav was invisible in practice; anchor jumps landed under the chrome.
- v1.5 (2026-06-12) — added §4e Wayfinder law (owner-ratified pattern A3: crumb trail + always-visible sibling rail on every masthead-system page below root; honesty tags on in-build links; no-JS rule; legacy pages excluded until the front-door loop). Cause: site shipped with three coexisting header systems and a breadcrumb that existed on one page only.
- v1.4 (2026-06-12) — added §4d anti-narrow-wrap laws (chip law, reading-measure law, stacked-label law, stepper minimums) + canonical anatomies for decoder rows, chapter-nav pills, section-header dashes and chapter accents. Cause: the dec-a header chip ragged-wrapped scale-length text; 3-across cards ran body prose at ~5 words/line.
- v1.3 (2026-06-12) — added §4c Skim Completeness Law + `skim-only` primitive + affordance rules. Cause: equities layman Skim was a residual stub (7 thin sections) after Deep grew 10×. Pending application: credit layman Skim + both analyst Skims.
- v1.2 (2026-06-11) — added §7 render-integrity laws (no HTML-string interpolation, set:html wrapper spans, no raw generated keys, status-tagged scenario chips) + built-page grep and fresh-eyes pass in the checklist. Cause: nine escaped gloss spans, a fragmented 30-second read, raw `hormuz_closure` chips and undefined scenario semantics reached the owner on staging.
- v1.1 (2026-06-11) — added §4b analyst density ladder + lead+bullets law + section-nav law (gap found during equities QC pass: spec lacked floors for component prose and a long-secnav rule); added O-6 skin-provisional note.
- v1.0 (2026-06-11) — initial cut, reconciling DESIGN-CONTRACT v2.0, APPROVED-THEMES (through v4.1.0 entries), Typography-Emphasis-Spec, Components/Charts specs, COLOR-RESERVE, and the as-built desk.css/skin-brass.css/CreditDesk.astro.
