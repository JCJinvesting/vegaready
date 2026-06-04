# VegaReady — Colour Reserve Register

**Date:** 2026-06-04 · **Status:** **VALIDATED** (owner trial verdicts, 2026-06-04 — see §10) · **Companion to:** `APPROVED-THEMES.md`, `THEME-SCENARIO-MAP.md` · **Trial artifact:** `_program/artifacts/VegaReady-Reserve-Trial.html`

Every colour in the JCJ corpus that is **not** already deployed in the locked dark system, with its documented emotional intent, use cases, and a recommended pairing against what we've built. Compiled from four parallel agent reviews of the five source documents (Brand Guidelines v13 · Colour Psychology Dictionary + Transitions · Master Quick Reference · Practical Application · Sequential Matrix), then orchestrated into this register.

**How to read this file:**
- The corpus carries **two parallel hex registries**: a brand-tuned "deployed" set and a web-standard "matrix" set. Where they conflict, both hexes are listed (`tuned / matrix`). When we deploy a reserve colour, prefer the brand-tuned value; if only a web-standard hex exists, derive a tuned variant.
- Most reserves were specced for **light slide decks**. On our dark canvases they need dark-duty adaptation: lighten mid-tones to ≥4.5:1 against the canvas (same `autoMain()` approach as the Tonal Ladder Law), or use as low-alpha panel tints. Recommended dark-duty hexes are marked **VR→**.
- All reserves inherit the locked laws: Saturation-Footprint (bright budget ∝ 1/saturation, includes type size), no in-flow shadows, warm-ink pairing, status semantics untouched (Realized `#46C9A0` / Anticipated `#E0B262` / Latent `#84909E` / Alert `#E16470`).

---

## 1 · Blues — Reserve

| Colour | Hex | Tier / Cap | Documented intent & use | VR pairing recommendation |
|---|---|---|---|---|
| **Signal Blue** | `#3C61C5` / `#005EB8` | T1-data / max 10% | "Digital interaction, clickability, navigation" · links, dashboards, anchor chart series · **never full-slide** ("tactical ping, not theme") · the corpus-wide "data-pop escalator" — all core blues sequence into it | Chart-series 2/3 in dense data viz (Transmission, Connections). **VR→ `#5B8BE0`** for dark canvases. Don't use for links — our mains own interaction. |
| **Deep Navy** | `#002244` | T2 / max 30% | "Maximum authority, institutional weight" · board materials, foundation docs · full-background capable | Candidate **canvas variant** for legal/compliance surfaces — sits between Oxford Black and Navy on the ladder. Pair Parchment ink + Brass micro. |
| **Midnight Blue** | `#191970` | T3 / max 25% | "Evening authority, after-hours sophistication, exclusive access" · VIP/premium-gated content | Reserve **canvas for a gated LP area** — natural sibling to A7 Indigo Ink in the hue journey. Champagne accent fits the "exclusive" read. |
| **Persian Blue** | `#1C39BB` | T4 / max 5%, headers only | "Deep expertise, masterful knowledge" · master-class content, research claims · thin strokes only | Micro-accent for methodology/research headers (custody/method pages). Too saturated for body-scale on dark; ≤2 elements. |
| **Royal Blue** | `#4169E1` | T3 / max 5% | "Regal authority, dynamic stat emphasis" · key-stat typography, badges · **never background** ("over-saturated; fails risk tone") | Large-numeral emphasis colour for hero stats on mid-depth canvases (Smoke, Gunmetal). Obeys Saturation-Footprint: numerals yes, prose never. |
| **French Blue** | `#0072BB` | T4 gated / max 5% | "Sophisticated European, refined taste" · EU/regulatory context · Europe-gated · never full-page | EU-jurisdiction tags/badges only (sanctions/regulatory content). Skip elsewhere. |
| **Air Force Blue** | `#5D8AA8` | T2 / panels ≤60% | "Platform tone, fund stack logic" · OCIO/DAF/platform-reviewer slides · "mid-weight between Slate and Cobalt" · "avoid stacking after Gold" | Already dark-duty friendly — near our Steel Blue main `#7C97B8`. Use as **section-panel tint** on Outlook/strategy surfaces where the main is teal (avoids main-collision). |
| **Denim** | `#1560BD` | Cond. / panels ≤20% | "Confident data pop without gloss" · small module backgrounds · "precision accent, not theme" | Chart series alternative to Signal Blue. **VR→ `#3D7FD9`** (close to approved Cobalt Lift — prefer Cobalt Lift unless a second distinct blue series is needed). |
| **Cadet Blue** | `#5F9EA0` | T3 / max 20%, bg-allowed | "Approachability, professional warmth, accessible expertise" · educational/onboarding, "trusted progress backdrop" · never animate · don't pair with Teal (too similar) | **Caution:** sits inside our Verdigris/Sea Glass band — collision risk. Use only on surfaces whose main is Cobalt Lift/Steel Blue (e.g. WB3 Smoke), as an education-panel tint. |
| **Teal Blue** | `#367588` | T2 / max 10% | "Digital action, logic overlays" · secondary CTAs, fund-flow diagram backgrounds · GCC note: "use Teal Blue over bright Teal" | **Diagram-fill tint** for flow/Sankey backgrounds (Transmission). GCC-friendly CTA fallback. Distinct enough from JCJ Teal `#36BBA6` to coexist. |
| **Dark Teal** | `#006666` | T3 / max 5%, critical only | "Decisive action, commitment, serious engagement" · final confirmations, signature prompts · max 1–2 elements, ≥16pt bold | ❌ **REJECTED in trial (E3)** — light text on `#0A7D7D` fails visually. Commit register stays with the theme main; any retry needs a re-trial (see §10 rule 1). |
| **Deep Teal** | `#2A6478` | T2 / ≤30% in-chart | "Deep understanding, thorough investigation" · deep-dive charts, risk-mitigation data · best after Crimson (risk→mitigation) | Chart series for risk-mitigation overlays (Structural Risk). Harmonizes with the teal mains without stealing accent budget. |
| **Sage Blue** | `#6B8CAE` | T3 / max 8%, headers | "Wisdom, seasoned judgment" · lessons learned, post-mortems, FAQ badges | "Considered view" label colour for analyst commentary blocks (Briefings). Near Steel Blue — use as its label-weight sibling. |
| **Blue Gray** | `#6699CC` | T3 / ≤40% | "Trust-by-structure" · governance overlays, infographic fills, mobile cards · "secondary tone; don't make it the theme" | Mobile-card/infographic fill tint on light theme; on dark, 8–12% alpha panel. |
| **Slate Blue** | `#6A5ACD` | T3 / max 8% data | "Data depth, analytical thinking" / "quant empathy, soft precision" · multivariate charts, factor breakdowns · gradient anchor "ETF Yellow → Slate Blue: caution to conviction" | **Best new chart-series hue in the reserve** — violet-blue is unused in our whole system. **VR→ `#8B7FD9`** for series 3/4 in dense charts (Connections graph edges, factor charts). |
| **Light Slate Blue** | `#8470FF` | T3 / max 8% | "Gentle innovation, credible future-casting" · roadmaps, platform vision | Roadmap/"what's coming" accent (about/outlook). Use sparingly; ≥4.5:1 ok on deep canvases as-is. |
| **Sky Blue** | `#72C5E1` / `#87CEEB` | T2-CTA / 5–8% | "Optimistic action — reduces action anxiety" · **Track/Watchlist/Notify-me CTAs**, "passive observer mode, emotional risk: none" · sequencing: after Navy ("authority primes CTA"), never into Burnt Orange | ❌ **REJECTED in trial (E3)** as part of the CTA-ladder exhibit. Note: it survives **inside approved E4** as the watchlist-button colour within the Pale Mint zone — that single placement is its only sanctioned use pending any re-trial. |
| **Columbia Blue** | `#9BDDFF` / `#C4D8E2` | T3 / max 10% | "Educational clarity, trust building" · onboarding, explainers, info-box backdrops · dark text required | Onboarding info-box tint (A6/WB2 onboarding surfaces). On dark: 10% alpha fill + full-strength hairline. |
| **Pale Steel Blue** | `#A5B8CF` | Cond. / ≤40% | "Quote boxes / pacing elements" · keep copy short | Pull-quote panel tint on mid canvases. Near our derived tint steps — mostly redundant; use the ladder instead. |
| **Ice Blue** | `#C5E8F5` / `#EAF4FB` | T2–3 / ≤30–50% | "Onboarding ease, clarity, transparency" · hover zones, tooltips, checklists, flow-step fills · "feels overly digital if overused" · prints faint | **Tooltip/hover-state tint** (we have heavy tooltip use). On dark: 12% alpha over canvas for hover rows; light theme: panel fill as specced. |
| **Glacier Blue** | `#E3F2FD` | Canvas / up to 100% | "Ultra-light cool canvas for large org/structure diagrams" · PDF/print best | **Light-theme reserve canvas** for diagram-dense pages when we do the light trial. Not for dark. |
| **Light Cyan** | `#A8D5E2` | T3 / ≤20% in-chart | "Supporting evidence, contextual information" · secondary metrics, reference ranges | Reference-band/range fill in charts (e.g. baseline→peak bands) at 15–20% alpha. |

## 2 · Greens — Reserve

| Colour | Hex | Tier / Cap | Documented intent & use | VR pairing recommendation |
|---|---|---|---|---|
| **Approval Green** | `#00A86B` / `#5CD0BE` | T2 / max 8% | "Success, confirmation, positive outcomes" · checkmarks, success toasts, verified badges · "state-change accent, not a tone" · never primary CTA | **Transient success states** (toast/confirmation) only. Keep Realized `#46C9A0` for badges — these are close; document the boundary: Realized = data state, Approval = UI feedback. |
| **Forest Green** | `#228B22` | T2–3 / ≤25–40% | "Sustainability, heritage continuity, stewardship" · ESG metrics, legacy pages · "only for conservative U.S. LPs" (gov-framing read) · never animate | ESG/long-horizon chart series. **VR→ `#3DA53D`** on deep canvases. Heritage-panel use belongs to the light theme. |
| **Sage Green** | `#B5C9A9` / `#87A96B` | T3 / max 15% | "Long-term alignment, succession calm, intergenerational trust" · FO/legacy onboarding · the corpus-wide **de-escalation landing zone** after risk content · never after Coral | **Post-risk decompression tint**: section background (8–12% alpha on dark) immediately after drawdown/risk content on Structural Risk. Also About/alignment ("skin in the game") panels. |
| **Pale Mint** | `#C1E1C1` | T3 / ≤40% late-funnel | "Low-pressure opt-in, gentle guidance" · watchlist CTA zones, referral, email capture · "never early in formal pitches" · CTA-block only, never full bg in decks | **Soft-CTA zone tint** for newsletter/watchlist capture at page ends. Dark: 10% alpha panel + Sky Blue button. The corpus' "soft-CTA hinge" — sequence it after authority content, never after risk. |
| **Mint** | `#98FF98` | T4 / max 5%, never text | "Refreshing clarity, clean decisions" · new-feature cards | Skip — fails Saturation-Footprint on dark (neon at scale). Seafoam/Pale Mint cover the need. |
| **Seafoam** | `#93E9BE` | T4 / max 5% | "Fresh start, renewal, approachability" · process improvements, help prompts | "New"/"Updated" chip colour at micro scale. Keep clear of Realized green; ≤2 elements. |
| **Light Green** | `#92C47D` | T3 / ≤15% in-chart | "Growth, positive momentum" · upward trends, target attainment · never directly after Crimson | Secondary positive chart series when Realized green is already in use. |
| **Olive** | `#808000` | T3 / max 5% | "Practical wisdom, grounded decisions, patience/long-termism" · processes, lockup rationale, 5–10y roadmaps | Lockup/patience iconography accent. **VR→ `#9A9A2E`**. Niche; low priority. |

## 3 · Yellows & Caution — Reserve

| Colour | Hex | Tier / Cap | Documented intent & use | VR pairing recommendation |
|---|---|---|---|---|
| **ETF Yellow** | `#FFD89A` / `#FFEF00` | T2 / max 8% data-only | "Benchmark highlight — fastest series recognition; market awareness, temporal markers" · index/benchmark lines, "Now" markers, target ranges · **never white text on it** (2.1:1, banned ~6×) · never paired with Gold ("similar yellows confuse") · the "benchmark validator" — warm claims sequence into it | **Direct hit:** the **benchmark/overlay line colour** for every chart (baseline→peak, index comparisons, "you are here" markers). Use the tuned `#FFD89A` — it's already dark-duty. Keep ≥1 step from Desk Amber/JCJ Gold in any one view. |
| **Light Mustard** | `#FFE082` / `#FFDB58` | T3 / max 8% | "Soft clarification, warmth without alarm; anticipation + precaution" · FAQ backgrounds, caveats, coming-soon flags · never long text blocks | FAQ/methodology-note callout tint (6–10% alpha on dark + full-strength left rule). Glossary-tooltip accent candidate. |
| **Dijon** | `#F4B400` | Accent / ≤15% | "Institutional caution without red" · inflection alerts, policy spotlights · Western contexts · "small, deliberate doses" | Policy-change / regime-shift banner accent (Outlook). Sits between Anticipated amber and Alert — useful third caution register. Micro-dose only. |
| **Amber (matrix)** | `#FFBF00` / `#FFAD60` | T3 / max 5% | "Caution, pre-risk alert; vigilance" · risk scales Green→Amber→Red, sensitivity bands | Covered by our Anticipated `#E0B262` — record as lineage, don't deploy a second amber. |

## 4 · Oranges & Warm Earth — Reserve

| Colour | Hex | Tier / Cap | Documented intent & use | VR pairing recommendation |
|---|---|---|---|---|
| **Burnt Orange** | `#D2691E` / `#CC5500` | T4 gated / max 2–3% | "Scarcity & finality, closing-window energy" · capacity badges, close dates, flash-risk · "feels predatory after fear tones" · **❌ never GCC/India** · Director approval | **GCC gate = our home market.** Effectively banned for VegaReady's primary audience. If ever used (Americas-only surfaces), micro-badges only. Default: skip. |
| **Institutional Orange** | `#FF6600` / `#F57C00` | T4 / max 3–5% | "Innovation spark, deadline emphasis" · cutoff labels, modernization flags · smallest budget in the matrix · never backgrounds | Hard-deadline micro-icon only (data-cutoff stamps). Prefer Desk Amber for most timestamp duties. |
| **Warm Clay** | `#DAA06D` / `#D9A66B` | T3 / panels | "Slow re-entry, post-skepticism re-engagement; humanizes after technical content" · narrative pivots, "how we evolved" · designated "re-warm step" after CTA/container | **Narrative-pivot panel tint** between dense data sections and story content (Briefings, About). Harmonizes with our warm inks; 8–12% alpha on dark. |
| **Terracotta** | `#E2725B` | T3–4 / max 5–20% | "Structured optimism, honest underperformance, grounding" · soft onboarding, underperformance case studies | Drawdown case-study accent (chart annotations of losing periods) — warmer and more candid than Alert red. **VR→ keep as-is**, contrast passes on deep canvases. |
| **Mahogany** | `#C04000` | T4 / max 3% exec-only | "Executive tradition, boardroom authority" · C-suite/governance micro-accents | Skip for web; possible PDF-report accent later. |
| **Copper** | `#B87333` | T3 / max 5% | "Tangible value, honest achievement; bridges abstract strategy to hard assets" · real-asset, ops/infra content | Physical-flow accent (tankers/pipelines/infrastructure content) — distinct from our financial-gold metals. Micro-use in Transmission diagrams. |

## 5 · Reds & Roses — Reserve

| Colour | Hex | Tier / Cap | Documented intent & use | VR pairing recommendation |
|---|---|---|---|---|
| **Crimson (tuned)** | `#D44D5C` | T1-risk / max 5% | "Risk disclosure, drawdown; finality/regulatory tone **without triggering panic**" — deliberately softened from CSS crimson `#DC143C` · legal footers, redemption disclosures · static only, never animate · **Gold ✕ Crimson quarantined in both directions, corpus-wide** | Our Alert `#E16470` is already the dark-duty descendant — record lineage. Use tuned `#D44D5C` for **legal/disclosure text** on light theme. Enforce the Gold-quarantine: no gold accent inside any alert/disclosure component. |
| **Coral Red** | `#FF6B6B` / `#FF4040` | T3 / max 5% | "Empathetic risk — volatility without panic; post-loss justification" · BTC comparisons, drawdown candor · must follow a calm colour, never lead · "keep to 1–2 slides max" · **GCC: too casual** | Empathetic-risk accent for candid drawdown sections (Structural Risk) — 1–2 sections max, then bridge to Sage Green. GCC caution noted: prefer Terracotta on GCC-facing surfaces. |
| **Soft Alert Red** | `#D16D6D` / `#F36A7A` | T2 / overlays ≤30% | "Warm risk alert, quiet caution; moderate warnings" · K-1/ops-risk notes | **Third warning register**: between Anticipated amber and Alert red — moderate-severity flags (e.g. "elevated but not critical" readings). Fills a real gap in our status ladder. |
| **Brick Red** | `#B22222` / `#8B0000` | T2–3 / max 5–10% | "Hard legal stop / heritage emphasis" (two registries disagree: firebrick=heritage, darkred="do not use unless policy requires") | Skip. Alert + Crimson cover the register; the corpus itself is conflicted here. |
| **Rose Rust** | `#C94C4C` | Accent / ≤10% | "Comparative caution — 'we're not like that'; competitor pitfalls" | Comparison-table accent for the "without VegaReady" column (Who Profits / About). Niche but characterful. |
| **Pale Blush** | `#FCE6E6` | Overlay / boxes ≤40% | "Passive risk implication, whisper caution" · inline risk-note boxes only · never at scale | Inline risk-note box tint on light theme. Dark: skip (reads pink-grey at low alpha). |
| **Rose Gold** | `#B76E79` | T4 gated / max 5% | "Inclusive premium, modern elegance" · women's-wealth, next-gen initiatives · Western-gated · never with Gold | Skip for now — collides with the gold-metal accent system and is initiative-gated. |
| **Dusty Rose** | `#DCAE96` | T4 / max 5% | "Soft luxury, empathy — 'they understand my constraints'" · testimonials, sensitive notices | Testimonial-frame tint candidate on light theme. Low priority. |

## 6 · Purples & Mauves — Reserve *(the largest untouched hue territory)*

| Colour | Hex | Tier / Cap | Documented intent & use | VR pairing recommendation |
|---|---|---|---|---|
| **Fog Purple** | `#E6E6FA` / `#8B7D82` | T3 / exit-only ≤30% | "Referral safety, soft closure, no-pressure exits; emotional 'soft floor'" · forwardable PDFs, goodbye/referral footers · "reserve for hello/goodbye; never mid-deck" · never animate | **Page-exit zone tint**: end-of-page referral/share footers (8% alpha on dark). The corpus' designated exit colour — pairs with Pale Mint for the soft-CTA + soft-exit combo. |
| **Dusty Plum** | `#9B6A6C` | T3 / 1–2 slides max | "Emotional safety, cycle memory, lessons learned" — the FTX/drawdown-trauma entry · post-mortems, "what went wrong" · the **only sanctioned escalation into risk content** (regret primes risk) · never with Gold | **Post-mortem section accent** (Briefings retrospectives, failed-thesis reviews). Sequence: Dusty Plum intro → risk content → Sage Green exit. Note: hex is rosy-taupe, not purple — sits with our warm inks comfortably. |
| **Steel Orchid** | `#6E5D94` / `#71818C` | T4 / ≤15% | "High-logic precision with distinctiveness; refined, understated" · analytic headers, annotation labels | **Annotation-label colour for dense charts** — a hue nothing else in our system occupies, so annotations never collide with data series. **VR→ `#9D8CC4`** on deep canvases. Strong candidate. |
| **Plum** | `#8E4585` | T4 / max 3% UHNW-only | "Ultra-premium exclusivity, sovereign-wealth level" · private banking, bespoke services | Reserve for a future gated/UHNW tier marker. Not for the public site. |
| **Lavender** | `#E6E6FA` | T4 / max 5% | "Calm change — soothes transition anxiety" · "what's changing" briefings · hex-collision with Fog Purple | Same hex as Fog Purple — treat as one token (Fog Purple wins the name). |
| **Lavender Gray** | `#D8B7DD` | Overlay / ≤40% | "Academic pacing, scholarly overlay" · footnotes, academic sidebars | Methodology-footnote sidebar tint on light theme. |
| **Periwinkle** | `#CCCCFF` | T4 / max 5% | "Creative ease, accessible innovation" · onboarding chips | Skip — Columbia Blue + Light Slate Blue cover this band. |
| **Mauve** | `#E0B0FF` | T4 / max 3%, **never text**, max 1 element | "Quiet luxury — whispers sophistication" · UHNW subtle messaging · tightest cap in the system | Skip for web. |
| **Electric Purple** | `#8A2BE2` | T4 / max 10% gated | "Breakthrough innovation, disruption" · needs immediate data support · Western-gated | Skip — violates our muted-at-scale law; Slate Blue/Steel Orchid serve the hue. |
| **Steel Purple** | (alias) | overlay | Gradient anchor "Gold → Steel Purple: warmth to precision" · quote banners, transition slides | Alias of Steel Gray in the corpus; no independent deployment. |

## 7 · Warm Neutrals, Greys & Utility — Reserve

| Colour | Hex | Tier / Cap | Documented intent & use | VR pairing recommendation |
|---|---|---|---|---|
| **Warm Taupe** | `#836953` | T3 / max 15% | "Comfort, approachable luxury; belonging — 'I'm part of this'" · client stories, FO reassurance · "very safe in tradition-valuing cultures (GCC)" | **GCC-friendly warm panel tint** for testimonials/About on light theme; on dark, 10% alpha warm wash. Bridges naturally to our warm inks. |
| **Warm Gray** | `#8B8680` | T3 / max 20% | "Humanized neutral; harmony — competing goals reconciled" · testimonials, bridge slides risk↔performance | Bridge-section text/hairline tone on light theme. Dark: our derived tint steps cover it. |
| **Silver** | `#C0C0C0` | T2 / max 10% | "Tech modernity — 'engineered, exact'" · diagrams, component labels, UI chrome · never body text | Diagram chrome/component labels in technical illustrations. Near Latent grey — keep roles distinct (Silver = structure, Latent = data state). |
| **Light Gray** | `#D3D3D3` | T2 / max 35% | "Form clarity — reduces table intimidation" · data tables, filters, form fields | Light-theme form/table infrastructure (light trial). |
| **Soft Gray** | `#7B7B7B` / `#ADADAD` | T2–3 / max 15% | "Secondary tone — de-emphasizes without hiding" · metadata, timestamps, captions · never bg, microcopy only | Covered by our adaptive text ramp (.45 step). Lineage only. |
| **Off Gray / Soft White** | `#DDE2E6` | Canvas / 100% | "Cooler off-white canvas, neutrality with tone" · alt sections, print | **Light-trial canvas candidate** — cooler than our warm inks; matches the owner's "real, not too warm" brief from the sand-era feedback. Shortlist for the light trial. |
| **Glacier / Ice / Modal variants** | `#E3F2FD` `#EAF4FB` `#E0E0E0` `#F5F5F5` | Canvas/panel | Containers, diagram fills, "universal pre-roll" (Modal Fill Gray primes everything) | Light-trial panel inventory. The sequencing spine (Modal pre-roll → content → Slate exit) translates to: neutral container sections between emotionally-loaded content blocks. |
| **Cream (atlas)** | `#FFFDD0` | T3 / max 20% | "Soft comfort, warm sophistication" · dark text only | Distinct from our Cream ink `#F2EBDC`; atlas variant is yellower. Lineage note only. |
| **Hero Gray** | `#D1D1D1` | structural | "Rational, audit-safe" · custody slides, legal footers, governance tables | Light-theme governance-table chrome. |
| **Pure White** | `#FFFFFF` | T1 utility | "Absolute clarity, maximum contrast" · text on all darks | Already implicit in lift-white. Lineage only. |

---

## 8 · System-Level Findings (cross-document)

**The sequencing spine** (from the 55-row matrix) — translates directly to page-section ordering:
1. **Modal/neutral container precedes everything emotional** — put a neutral band before risk or CTA content.
2. **Slate/structure is the universal exit** — resolve loaded sections back into structural neutrality.
3. **Bone/warm-neutral is the risk landing strip** — every red decompresses into warm neutral, then optionally Sage Green.
4. **Dusty Plum → risk is the only sanctioned emotional escalation** (regret legitimately primes risk; nothing else may lead into red).
5. **Pale Mint is the soft-CTA hinge** — CTAs follow authority content, never risk content, and never lead into urgency (Burnt Orange).
6. **ETF Yellow is the benchmark validator** — optimistic claims sequence into benchmark proof.
7. **Gold ✕ Crimson hard quarantine, both directions, everywhere** — optimism and risk are never adjacent. *(Adopted as a component law: no gold inside alert/disclosure components.)*

**Registry integrity warnings:**
- Dual hexes exist for: Signal Blue, Sky Blue, ETF Yellow, Crimson, Coral Red, Burnt Orange, Sage Green, Soft Gray, Fog Purple, Dust Gray, and most core colours. The tuned registry is authoritative.
- Several "bespoke" names are CSS web colours in disguise (Fog Purple=lavender, Slate Blue=slateblue, Burnt Orange=chocolate, Brick Red=darkred, etc.) — when adopting, cut a brand-tuned variant rather than shipping the CSS value.
- `#E6E6FA` is assigned to both Fog Purple and Lavender; Brick Red's two registries contradict each other (heritage vs "do not use").
- The dictionary's ETF Yellow entry contradicts itself on Cobalt adjacency (transition map ✅, format note ❌).

**Animation law:** every risk/legal/government tone is **static-only — never animate**. Fades permitted only for CTA zones and quote overlays. (Consistent with our no-in-flow-shadows, low-motion posture.)

**Regional gates relevant to us (GCC home market):** Burnt Orange ❌ GCC/India · Coral Red "too casual" GCC · no red-on-white or bright-yellow fills GCC · warm neutrals (Bone, Warm Taupe) explicitly GCC-safe · Teal Blue preferred over bright Teal for GCC CTAs.

**"Not yet implemented" in the corpus' own tracking** (14): French Blue, Persian Blue, Cadet Blue, Light Mustard, Mahogany, Steel Orchid, Columbia Blue, Light Slate Blue, Periwinkle, Dusty Rose, Seafoam, Terracotta, Mauve, Copper — i.e. the corpus anticipated this reserve exercise.

---

## 9 · Orchestrator's Shortlist — best pairings with the locked dark system

| Priority | Colour | Role in VegaReady | Verdict (trial 2026-06-04) |
|---|---|---|---|
| 1 | **ETF Yellow** `#FFD89A` | Benchmark/overlay lines + "NOW" markers | ✅ **APPROVED** (E1) · type-size law confirmed (E2) · charcoal text only |
| 2 | **Sky Blue** `#72C5E1` | Passive "Track/Watchlist" CTA | ❌ **REJECTED** (E3, with Dark Teal — see §10) |
| 3 | **Dark Teal** `#0A7D7D` (VR) | Commit-action buttons | ❌ **REJECTED** (E3 — "contrast for white text is bad") |
| 4 | **Soft Alert Red** `#D16D6D` | "Elevated" status register | ✅ **APPROVED** (E5) — status ladder is now Latent → Anticipated → Elevated → Alert |
| 5 | **Slate Blue** `#8B7FD9` (VR) | Chart series 3/4 | ✅ **APPROVED** (E7) |
| 6 | **Steel Orchid** `#9D8CC4` (VR) | Chart annotation labels | ✅ **APPROVED** (E7) |
| 7 | **Sage Green** `#B5C9A9` | Post-risk decompression panels | ✅ **APPROVED** (E8, as part of the risk-pacing spine) |
| 8 | **Fog Purple** `#E6E6FA` @7–8% | Page-exit/referral footers | ✅ **APPROVED** (E4, with Pale Mint soft-CTA zone @9–10%) |
| 9 | **Warm Clay** `#DAA06D` | Narrative-pivot panels | ✅ **APPROVED** (E10) |
| 10 | **Dusty Plum** `#9B6A6C` | Post-mortem/retrospective accents | ✅ **APPROVED** (E11) |
| + | **Royal Blue** `#4169E1` | Hero-stat numerals (numerals only) | ✅ **APPROVED** (E6) |
| + | **Terracotta** `#E2725B` | Risk-candour accent; GCC-safe alternative to Coral | ✅ **APPROVED** (E8/E9 — GCC gate confirmed) |
| — | **Midnight Blue / Deep Navy** | Future gated-area canvases | Untrialed — remains reference-only |

**Explicitly skipped:** Burnt Orange (GCC gate — home market), Mint/Electric Purple (saturation-law violations — **rejections confirmed by judged exhibit E13**), Brick Red (corpus self-contradiction), Rose Gold/Mauve/Plum/Mahogany (gated micro-luxury, no current surface), Periwinkle (redundant).

---

## 10 · Validation Verdicts — owner trial, 2026-06-04 (LOCKED)

Trial: `_program/artifacts/VegaReady-Reserve-Trial.html` — 13 exhibits on the scenario-mapped approved themes, live-measured contrast. Verdicts exported by the owner:

| Ex | Subject | Verdict |
|---|---|---|
| E1 | ETF Yellow — benchmark/overlay line | **APPROVE** |
| E2 | ETF Yellow — type-size law (Saturation-Footprint) | **APPROVE** |
| E3 | CTA ladder — Sky Blue track + Dark Teal commit | **REJECT** — "contrast for white text is bad" |
| E4 | Pale Mint soft-CTA + Fog Purple referral footer | **APPROVE** |
| E5 | Soft Alert Red — the Elevated register | **APPROVE** |
| E6 | Royal Blue — hero stat numerals | **APPROVE** |
| E7 | Slate Blue VR series + Steel Orchid annotations | **APPROVE** |
| E8 | Risk pacing — Terracotta → Sage Green decompression | **APPROVE** |
| E9 | Coral vs Terracotta — the GCC gate | **APPROVE** (Terracotta wins GCC surfaces) |
| E10 | Warm Clay — narrative pivot panel | **APPROVE** |
| E11 | Dusty Plum — post-mortem accent | **APPROVE** |
| E12 | Gold ✕ Crimson quarantine — component law | **APPROVE** — adopted as component law |
| E13 | Confirm rejections — Mint & Electric Purple at scale | **APPROVE** (rejections confirmed) |

**Locked "how not to use" rules from the trial:**
1. **No light text on Dark Teal `#0A7D7D` — the commit-button register is rejected.** The theme main remains the sole CTA register. Sky Blue track-CTAs fell with the same exhibit; if a passive-track or commit register is wanted later, it must be **re-trialed** (options: darker fill ≥7:1 with ink, or light button with dark text) — it does not ship on this verdict.
2. **No white text on ETF Yellow, ever** (2.1:1) — charcoal/ink text only; yellow capped at chips ≤2 words + medium numerals.
3. **No gold inside alert/disclosure components** (Gold ✕ Crimson quarantine, both directions) — component law.
4. **Coral is not used on GCC-facing surfaces** — Terracotta carries risk-candour there.
5. **Mint `#98FF98` and Electric Purple `#8A2BE2` are banned at any meaningful scale** (Saturation-Footprint violations; Mint also collides with Realized-green semantics).
6. **Pale Mint and Fog Purple appear only at page ends** (soft-CTA zone, exit footer), as low-alpha tints — never mid-page, never full-strength fills.

*Compiled 2026-06-04 by orchestrated synthesis of four agent reviews over the five JCJ colour documents; validated same day by owner trial verdicts.*
