# VegaReady Phase 0 — Pre-flight (guardrails)

**Purpose:** the constraints and worklists that must exist before any content/structure change. Pairs with the Execution Plan (steps P0.1–P0.4).
**Date:** 2026-06-09

---

## P0.1 — Baseline build (host-side, pending)
`npm run build` must be confirmed green on the host **before any deploy**. It cannot be run reliably from the Cowork sandbox (the repo's `node_modules` are built for Windows, not the Linux sandbox), so this is a host-side check (owner or Desktop Commander). All Phase-1 file work happens on the **`p0-s01-design-tokens` design branch**, which does **not** auto-deploy — so edits + commits here never touch production until promoted to `main`.

---

## P0.2 — "Do not dilute" preserve list (the rewrite must honor these)

The restructure changes **packaging and structure, not substance.** These existing strengths are protected; no step may remove them in the name of "cleanup":

1. **Sharp editorial headlines** — "The delayed fuse," "Two days of water," "The terminal node. Not the safe haven," "When the premium is the transmission." They make dense research memorable. Keep them as the page H1/lead.
2. **Long-form depth** — use progressive disclosure (30-sec / 3-min / deep) to *manage* density, never to delete substance. The deep tier keeps the full evidence, precedents, and sources.
3. **The causal-network framing** — the cascade-as-network (Connections) is the core differentiator. The new Scenarios & Outlook section must preserve and elevate it, not flatten it.
4. **Sector/region asymmetry** — winners vs losers vs mixed; second- and third-order effects. Do not collapse into a generic "Middle East risk" narrative.
5. **Source discipline + confidence labels** — source tiers, evidence states, per-card sources. These get *more* prominent (the evidence/confidence badge work), never less.
6. **The JCJ connection — understated but visible.** Credibility, not a marketing funnel. Keep the restrained attribution.
7. **The strongest market pages as-is in substance** — Energy, Crypto, Insurance, Cross-Asset, Food. De-confliction re-layers them; it does not rewrite the analysis.

---

## P0.3 — Accuracy-reconciliation worklist (fix before driving traffic)

Each is a factual contradiction flagged in the source (§5.2 / Appendix C). Resolution direction is recorded now; the actual edit happens in **Phase 3 step P3.B3** in the canonical JSON, then regenerate. Each must be verified against the live content before editing.

| # | Contradiction | Resolution direction | Where to fix |
|---|---|---|---|
| 1 | **BTC "safe haven"** asserted in places, contradicted in others | State consistently: in this conflict BTC behaved as a **risk asset** (~0.50 equity beta, −11% YTD) — "the terminal node, not the safe haven." Remove any residual safe-haven phrasing. | `cascades/crypto.json` |
| 2 | **Hormuz state** described as "closed" vs "reopened" inconsistently | Use the **multi-state ledger**: physically de-escalating, economically still closed, insurance elevated. Never a single on/off claim. | `scenario-status.json` + every page that asserts a Hormuz state |
| 3 | **Pipeline-bypass capacity** — nameplate vs usable conflated | Distinguish **nameplate** (e.g. Petroline ~5M b/d) from **usable/loadable** export capacity (port-capped, lower); cite. | `cascades/energy.json`, `dynamics.json` (outlook) |
| 4 | **War-risk premium** — standard and distressed quotes mixed | Split the two classes explicitly: **standard AWRP** vs **distressed/additional** premium. | `cascades/insurance.json` |
| 5 | **Source tiers** applied inconsistently | Enforce T1/T2/T3 vocabulary across all sources; **aggregators are never T1**. | `cascades/*.json` sources + `taxonomy.json` |

---

## P0.4 — Staging-hygiene decisions

| Item | Decision |
|---|---|
| **`/edition*` (the branding lab)** | **Keep** — the product owner has designated `/edition` as the branding system (modifiable). Action: ensure the lab/prototype editions carry `noindex`, are not in production nav, and no internal style-control panels are exposed on production *content* routes. (Retain as a tool, hide from public content indexing.) |
| **`/outlook/infrastructure/` (thin stub)** | Interim: mark explicitly as "Research in progress" (so it doesn't read as finished). Resolve in **P3.D** when the Scenarios & Outlook section is built — either complete it or redirect to `/outlook/precedents/` until then. Do not leave a half-finished page reading as complete in main nav. |

---

*Phase 0 is documentation/guardrails only — no site files are changed by this step.*
