# Layman Edition — URL Structure Options (owner decision)

**Date:** 2026-06-12 · **Constraint:** the word **"layman"** is locked. The open question is structure only.
**Why now:** `/layman/*` has never reached production — whichever structure we pick costs zero migration if chosen before the ship. After the ship, changes mean public redirects forever.
**Context:** every page on the site will eventually have a layman version — markets desks, structural pages, catalysts, today. The structure must scale site-wide with ONE rule.

---

## Option A — Topic-first leaf: `<page>/layman`

`/markets/equities/layman` · `/structural/chokepoints/layman` · `/today/layman`

| Pros | Cons |
|---|---|
| One rule, works on every page including sub-pages (`/markets/equities/episodes/layman` someday) | Structurally frames layman as a **child/view of the analyst page** — contradicts the editorial doctrine that the layman version is an *independent retelling*, not a view |
| Breadcrumbs and canonicals trivially clean | No natural home for a layman-audience landing page |
| Toggle = add/remove trailing segment | "Equities › Layman" breadcrumb reads like an appendix |

## Option B — The Layman Edition wing: `/layman/<full path>`  ⭐ recommended

`/layman/markets/equities` · `/layman/structural/chokepoints` · `/layman/today` · `/layman/catalysts/<event>`

| Pros | Cons |
|---|---|
| ONE prefix rule for the whole site forever: prepend `/layman/` to any URL → its plain edition. Identical floor plan, separate wing | Creates a parallel tree (but a *systematic* one — unlike today's flat `/layman/equities`) |
| **`/layman` becomes a real landing page** — "VegaReady, in plain words": its own front door, index of all plain editions, shareable as a product surface | Slightly longer URLs |
| Matches the doctrine: layman is an independent **edition** of the publication (FT/Economist would structure it this way) | Two trees to keep in sync editorially (already true under any option) |
| Toggle = prefix add/remove; breadcrumbs work *within* the wing ("Layman › Markets › Equities") | |
| Migration from current flat URLs = just deepening the path; nothing public breaks | |

## Option C — Subdomain edition: `layman.vegaready.com/<full path>`

`layman.vegaready.com/markets/equities`

| Pros | Cons |
|---|---|
| Maximum identity: the layman edition as its own brandable product | Real infrastructure cost on Cloudflare Workers (host-based routing / second worker) |
| Same 1:1 path-mirror logic as Option B | Splits SEO authority across hosts; splits analytics and cookies |
| Could be the future endgame if the edition earns its own audience | Premature today; can be layered ON TOP of Option B later (subdomain → 301 → /layman/*) |

## Option D — Section-scoped folder: `/markets/layman/<desk>` (the earlier "minimum")

| Pros | Cons |
|---|---|
| Keeps layman near its section | The rule lands at a different depth in every section (`/structural/layman/...`?) — no single site-wide rule; "layman" masquerades as a desk inside each hub |

---

**Recommendation: B.** It treats "layman" as the organizing concept, matches the independent-retelling doctrine, scales with one prefix rule, and creates the `/layman` landing page as a genuine product surface. C remains available later as a brand upgrade on top of B (same paths, new host).

**Implementation cost when decided (any option): ~30–45 min** — move two route files, update toggle/CTA links in both desk components, add the `/layman` landing stub (Option B only), restage, verify.
