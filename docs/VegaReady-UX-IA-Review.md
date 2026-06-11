# VegaReady — UX / Information-Architecture Review

**Context:** an external agent (limited project context) audited the *live* site for newcomer-friendliness, navigation, and trust. This report triages that critique against the **current** codebase (verified file-by-file), separates what's already fixed from what's genuinely actionable, and prioritizes the improvements — all of which are presentation/onboarding, distinct from the research/data work.

**Headline:** the audit is useful but partly stale — it predates our recent fixes. About half its "defects" are already resolved. Two quick-win defects remain. The strategic prize — using the cascade as the navigation backbone and adding a real on-ramp — is valid, aligns with the site's *own* stated mental model, and is the highest-value UX work available.

---

## 1. Triage — verified against current code

| # | Audit claim | Verified status | Action |
|---|-------------|-----------------|--------|
| Broken source links `[object Object]` on /markets/energy | **ALREADY FIXED** — `energy.astro` uses `href={u.url}`; transmission/exposure use string URLs correctly | none (auditor saw the pre-fix site) |
| Count inconsistencies (13 vs 12 sectors/economies) | **CONSISTENT now** — Dashboard 13 scopes, Transmission 13 sectors (13 in data), Exposure 12 economies (12 in data) | spot-check the Transmission *meta description* text only |
| Contact email `<GP@…>` stray brackets | **ALREADY FIXED** — clean `mailto:` render in about.astro | none |
| "Crypto coming soon" | **ALREADY FIXED** — Crypto is a live flagship page | none |
| **Stale "Live · as of May 29, 2026"** | **STILL LIVE** — hardcoded in `freshness.js` (`asOf: 'May 29, 2026'`), today is June 2 | **Tier 1 fix** |
| **"Coming soon" placeholders** | **STILL LIVE** — homepage cards (Briefings, Podcast, Technical Signals Feed) + empty Briefings index | **Tier 1 fix** |
| No "Start Here" / plain-language hero / glossary | **PARTIAL** — hero leads with "vega / ν / Sensitivity to volatility"; a plain lead exists but no dedicated on-ramp or glossary | **Tier 2 — highest value** |
| 11 flat top-level nav tabs | **CONFIRMED** — Home, Dashboard, Markets, Transmission, Exposure, Outlook, Structural Risk, Connections, Who Profits, Briefings, About | **Tier 3 — restructure** |
| Dashboard sub-pages client-render-only (no SEO/fallback) | **CONFIRMED** — the `WarTracker` React island is `client:only`; by design, but a real SEO/accessibility gap | **Tier 4 — robustness** |

So: **don't re-fix** the source links, counts, contact, or crypto — those are done. **Do fix** the date and the coming-soon noise, then invest in onboarding + IA.

---

## 2. The strategic insight worth embracing

The auditor's best point isn't a defect — it's that **the site already has a clean mental model it never tells the visitor.** Your own Connections page says each analysis page is "one shock viewed across all three analysis pages," and Markets says "Markets are the destination, everything else is context." But a newcomer sees eleven parallel, equally-weighted tabs and can't tell that six of them are *the same story told from different angles*, not six separate topics.

**The cascade you already drew on the homepage IS the navigation backbone** — the site just doesn't use it as one. Map the existing pages onto the arrow and the structure becomes self-evident:

| Cascade question | Page(s) that answer it |
|---|---|
| What just happened? | Dashboard (live feed) |
| How does it spread? | Transmission (mechanism) + Outlook (gap/reopening) |
| What moved? | Markets (financial response) |
| Who's exposed? | Exposure (country winners/losers) |
| How does it all connect? | Connections (the network) |
| **Who profits?** | Who Profits (the payoff — your differentiated thesis) |

This is the spine for both the onboarding ("here's how to read the whole site") and the nav restructure (group the tabs along the arrow).

---

## 3. Prioritized improvement plan

### Tier 1 — Quick-win defects (cheap, do first; protect credibility)
1. **Fix the stale freshness date.** `freshness.js` is hardcoded to May 29. Either compute it from build time, or — more honest for curated analysis pages — relabel from "Live · as of" to **"Last reviewed"** with the real date. (A stale "Live" stamp does *more* trust damage than no stamp, and now that the watch metrics carry `value_type`/`stale_after`, the live/curated distinction is real and worth reflecting.)
2. **Resolve "coming soon."** Hide the unshipped homepage cards (Podcast, Technical Signals Feed) and the empty Briefings promo, or collapse them into a single honest **"Roadmap"** line. A discovery visitor counts empty promises.

### Tier 2 — Onboarding (highest value-per-effort; opens the site to the non-specialist audience)
3. **Build a "Start Here" page** — the single biggest missing piece. One deliberate on-ramp: *what VegaReady is, who it's for, how the cascade works, how to read the confidence ratings, and a glossary.* This content already exists, scattered across the hero/About/one briefing — pull it into one place and point first-time CTAs **here**, not at the raw dashboard.
4. **Lead the hero with the plain-language promise**, then let the "vega / ν" elegance be the reward, not the gate. One sentence above the fold: *"We track how world events move markets — in real time — and show you who wins and loses."*
5. **Inline glossary tooltips** on first use of jargon (vega, b/d, crack spread, AWRP, P&I, TEU, EMBI, JKM/TTF…). This single change opens the site to the non-finance audience without touching the expert layer. A standalone glossary is the minimum; hover/tap tooltips are the ideal.
6. **Surface the confidence system early.** The T1/T2/T3 + H/M/L sourcing is a genuine competitive strength — explain it on first encounter (a small inline legend), not buried in a briefing.

### Tier 3 — IA restructure (make the one-story logic legible)
7. **Group the 11 tabs along the cascade** (see the visual). Lowest-effort version: keep the pages but cluster the nav under labeled sections — **Live · Analysis · Synthesis · About**. Higher-effort version: collapse to ~5 buckets — *Start Here · Live Dashboard · The Cascade (Transmission+Outlook) · Impact (Markets+Exposure) · Who Profits (Connections+Who Profits)*.
8. **Pair the abstract tab names with a 5-word plain gloss** — Transmission → "How it spreads," Exposure → "Who's exposed," Outlook → "What happens next," Connections → "How it all links." Keep the elegant names; add the gloss.
9. **Add a cascade breadcrumb + directional handoffs.** A small "you are here in the cascade" marker at the top of each analysis page, and a consistent footer "You're looking at [stage]. Next → [page]." (The Markets page already does the footer well — universalize it.)

### Tier 4 — Comprehension & robustness
10. **Standardize the "summary-first" rhythm** on every analysis page: (1) one-sentence plain TL;DR → (2) the single key asymmetry → (3) a scannable summary table → then the expandable detail. Your best pages already do this (the "Key insight" boxes are the best onboarding device on the site); make it universal, and collapse the deep accordions by default so the skimmer and the analyst use the same page.
11. **Dashboard SSR/static fallback** — the `client:only` dashboard isn't indexable or usable without JS. A static fallback for the data tables closes the SEO/accessibility gap.
12. **Mobile reflow check** — verify the wide tables (Exposure scenario matrix, IEA investment table) and the 11-item nav reflow rather than scroll-clip on a phone.

---

## 4. How this fits the bigger picture

These are **presentation and onboarding** improvements — a different layer from the research/data work (substitution depth, OPEC+ tracker, Phase B drivers). The intelligence underneath is now strong; this work is about making it *accessible* to both audiences you named. Tier 1 is near-free and protects credibility. Tier 2 (the "Start Here" + glossary) is the highest-leverage single move — it's what converts the non-specialist visitor. Tier 3 is the structural clarity. None of it blocks the research track; it can run before, after, or in parallel.

*Prepared 2026-06-02. Defect statuses verified against the current codebase.*
