# VegaReady Data Backend Architecture

**Status:** design — owner decision **O-15** (2026-06-13): build the best-in-class, free, open-source data backend, sized for the whole growing system (all desks, ETF holdings, decades of history), with first-class handling of *wrong/misleading data* and an **event-intelligence layer** for outlier tagging, pattern-finding and forecasting.
**Scope:** cross-cutting infrastructure for every desk. The R-02 credit feeds are the first tenant; rates/FX/commodities/crypto/equities-plumbing and P-06 ETF holdings follow into the same backend.
**Non-negotiable contract:** the website only ever reads one small committed JSON per desk. Everything below runs on the owner's machine (or a scheduled task) and is invisible to the Cloudflare deploy path.

---

## 1 · The stack (all free, MIT/BSD/Apache/public-domain — no accounts, no cloud bills, no row limits)

| Layer | Tool | Why it's the best choice here |
|---|---|---|
| **Fetch** | Node (existing) | Already in the build; FRED v1/v2 client lives here. Unchanged. |
| **Working store + query** | **DuckDB** (MIT) | "SQLite for analytics" — columnar, embedded, one file, no server; millisecond percentiles/windows/correlations in SQL; scales to billions of rows on a laptop. Native Node binding (no Python needed to start). |
| **Durable archive** | **Parquet** (Apache) | Open columnar format, ~10× compression on time-series, readable forever by anything (Python, R, Excel, future tools). No lock-in: even without DuckDB the data is fully portable. |
| **Heavy analysis** | **Python + Polars/NumPy/statsmodels/arch** (PSF/MIT/BSD) | Added when questions go statistical (correlations, regime models, yield-curve PCA, GARCH vol). Polars is Rust-fast. R is the alternative if preferred. |
| **Site contract** | committed JSON (existing) | The only thing Astro/Cloudflare reads. Engine swaps never touch a tile. |

**Sequencing:** stand up DuckDB + Parquet via the Node binding first (zero Python dependency). Add the Python/Polars analysis step only when the math demands it. Same destination, smallest first step.

**Flow:** `Node fetch → DuckDB (bitemporal store) → Parquet archive → [Python/Polars analysis] → small display JSON → Astro site`.

## 2 · Accuracy by construction — the bitemporal core

The single biggest accuracy win the engine unlocks: **never overwrite, always append, store time twice.**

Every observation row carries:
- `value_date` — the date the number describes (e.g., 2026-06-10).
- `vintage` — FRED's `realtime_start`/`realtime_end` (when *that version* of the number was true).
- `retrieved_at` — when *we* fetched it.
- `value_text` + `value` — the exact string FRED returned (no float drift; we keep precision) plus the parsed decimal.
- `source`, `units`, `revision_of` (links a corrected value to the one it replaced).

This makes three things possible that flat JSON cannot:
1. **Reconstruct what we knew on any past day** — kills look-ahead bias in any backtest or "our call at the time" claim.
2. **Catch every revision** — a restated default rate or a corrected spread is a new row, not a silent overwrite; the "revised" badge is a query, not a guess.
3. **Audit forever** — the raw envelope archive (gzip-kept, see §6) plus the vintage trail means any number on the site can be traced to the exact response that produced it.

## 3 · Where data analytics goes wrong — the failure taxonomy (and the coded treatment for each)

This is the heart of "what if the data is wrong or misleading." Each failure mode gets a *treatment* the analysis engine applies automatically, plus — where judgment is needed — a human note in the event layer (§4).

| # | Failure mode | What it looks like | Why it misleads | Treatment |
|---|---|---|---|---|
| 1 | **Revision / vintage** | a number changes after the fact | backtests use data we didn't have then | bitemporal store; compute "as known on date X" |
| 2 | **Methodology / structural break** | S&P/LSTA→Morningstar; FRED 3-yr truncation; index reconstitution | series looks continuous but its *meaning* changed; a z-score across the break is garbage | `regime_break` tag; never compute stats spanning a break without a splice note |
| 3 | **Regime dependence** | "19th percentile" — but over a 2023–26 tight-spread window only | a percentile is meaningless without its reference era (ZIRP vs QT) | regime-conditioned stats; **always** label the window; offer within-regime percentile |
| 4 | **Exogenous outlier** | COVID Mar-2020, SVB Mar-2023, taper tantrum | one-off shocks blow up means/SDs/correlations and poison "normal" baselines | `event` tag with `exclude_from_baseline` or `winsorize`; baselines computed clean, shocks studied separately |
| 5 | **Mechanical artifact** | HY index tightens because a big defaulter *exited*; month-end rebalance; CDX roll | looks like a market move, isn't | `mechanical` tag; annotate the tile; never read as signal |
| 6 | **Definitional mismatch** | OAS vs discount margin; EMBI Global vs Diversified; issuer- vs dollar-weighted default | comparing non-comparable numbers | units/definition metadata on every series; engine blocks invalid cross-comparisons |
| 7 | **Composition / survivorship drift** | "HY spread" in 2010 ≠ same basket as 2026 | slow silent change in what's measured | note + prefer within-regime comparison |
| 8 | **Correlation breakdown** | stock–bond corr flipped sign post-2022 | a correlation estimated over the wrong window inverts the conclusion | rolling + regime-aware; flag sign flips as events |
| 9 | **Missing / stale** | gaps, holidays, last-value carried forward | "no change" that's actually "no data" | explicit null (never render `.`); `stale` tile state; no silent carry-forward |
| 10 | **Unit / scale** | percent vs bps (the #1 deployment bug) | 100× errors | exact-decimal + units field; conversion is explicit and tested |
| 11 | **Forecast overfitting** | extrapolating a short window; assuming normality on fat-tailed credit | false confidence, blown tails | analog/precedent method (§5) + humility framing; never "will," always "resembles / historically followed" |

## 4 · The event-intelligence layer — tagging outliers so the data teaches us

This is the new capability you asked for: a curated, queryable layer of **plain-English knowledge** sitting on top of the raw series. It is the structured spine beneath the editorial work the desks already do (the equities episode dossiers — LTCM, Quant Quake, GFC, 2020, LDI, SVB — become *queryable data*, not just prose).

**Authoring (human, version-controlled):** events are written in a git-tracked text file — `_data/events.yaml` (diffable, reviewable, plain English) — then loaded into DuckDB. Best of both: humans author in readable text under git; the engine queries in SQL. (This is the proven "seed file → warehouse" pattern.)

**`event` (point or date-range):**
```
id, start_date, end_date?, title,
note,            # plain English: what happened, why it matters
category,        # exogenous_shock | policy | methodology_change | mechanical |
                 #   data_error | regime_break | idiosyncratic_default | liquidity_event
severity,        # 1–5
treatment,       # exclude_from_baseline | winsorize | regime_break |
                 #   annotate_only | flag_data_error | none
channel,         # funding | earnings | liquidity | policy | exogenous  (ties to R-01 shock-channel framework)
confidence,      # how sure we are this is what it was
source, created_by, created_at
```

**`event_series` (links an event to the series it moved):**
```
event_id, series_id,
role,            # epicenter | affected | mechanical | beneficiary
lead_lag_days    # did this series move before/after the epicenter?
```

**`regime` (labels eras so stats are computed within compatible periods):**
```
id, start_date, end_date?, name,   # e.g., "QT + risk-on, 2024–", "ZIRP, 2009–2015"
type,            # rates | risk | policy | volatility
note
```

**Worked examples (the kind of notes we'd store):**
- *2020-03-09 → 2020-04-07 · COVID crash · exogenous_shock · sev 5 · exclude_from_baseline · channel: liquidity.* "Fastest HY-OAS blowout on record; dash-for-cash. Exclude from 'normal' distributions — including it makes every percentile since look benign. Epicenter: funding/liquidity; oil names amplified."
- *2023-03-10 → 2023-03-31 · SVB / regional-bank stress · liquidity_event · sev 4 · annotate_only · channel: funding.* "IG financials widened sharply while broad HY barely moved — a sector event, not a market event. Don't read the IG twitch as a regime change."
- *2022-08-29 · Morningstar/LSTA rebrand · methodology_change · sev 2 · regime_break.* "Loan index renamed from S&P/LSTA; IDs preserved, label changed. Do not splice pre/post without noting it; do not label post-2022 data 'S&P/LSTA'."
- *recurring · HY index defaulted-name exit · mechanical · annotate_only.* "When a large distressed issuer finally defaults and leaves the index, the *level can tighten mechanically*. Tag the date; the tightening is not improvement."

## 5 · How tagging + linking enhances pattern-finding and forecasting

Once events and regimes are tagged and linked across series, four capabilities open up — each honest, each grounded in real history rather than curve-fits:

1. **Clean baselines.** Distributions and tail estimates computed with tagged shocks excluded → "normal" actually means normal → percentiles and z-scores stop being silently distorted by 2020.
2. **Regime-conditioned statistics.** "Given we're in QT + risk-on, what *typically* followed a +20bp HY−IG week?" — far more useful than an all-history average that blends incompatible eras.
3. **Analog / precedent matching.** Tag each episode with features (magnitude, speed, channel: funding vs earnings). Then ask: *which past episodes most resemble today?* This is the basis of humble forecasting — "this rhymes with 2011's sovereign stress, not 2008's solvency crisis, because the channel is funding not capital." It directly feeds the equities desk's episode library and the credit desk's shock-channel call.
4. **Event studies + falsifier track record.** "After a regime break of type X, the spread did Y over the next N days, historically." And: the desks publish pre-committed falsifiers (spread thresholds) — tag when one trips and store the outcome, building a visible, honest track record of the framework's calls.

**The honesty guardrail (consistent with the whole site):** event notes are clearly-labeled human *interpretation*, never presented as data; tags are transparent and queryable; forecasts are always framed as "resembles / historically followed," never "will." Outlier intelligence makes us *more* careful, not more confident.

## 6 · Storage tiers (keep everything, each in its right form)

1. **Raw audit envelopes** — gzip-kept (not deleted), rolling, gitignored. Forensic provenance: the exact response on a given day. ~4 MB/yr compressed.
2. **DuckDB working store** — bitemporal observations + events + regimes. The query engine. One file.
3. **Parquet archive** — periodic export of the store; the open, portable, decades-durable source of truth; committed or backed up off-machine.
4. **Display JSON** — the small per-desk file the site reads. Committed. The only public-facing artifact.

Data volume reality check: daily macro series are featherweight (~50 KB/yr for all current series). The first heavy tenant is ETF holdings (~300k rows/yr/fund) — still trivial for DuckDB. We are nowhere near any limit; "keep everything" is the default, not a luxury.

## 7 · Build waves (execute behind the unchanged JSON contract, staging-first)

- **W1.6 — Backend foundation.** DuckDB store via Node binding; bitemporal schema; migrate the existing history-cache JSON into it; Parquet export; gzip-keep raw (reverse the delete). Acceptance: every current series round-trips; "as known on date X" query works; site JSON byte-identical to today.
- **W1.7 — Event-intelligence layer.** `_data/events.yaml` authoring file + loader; `event`/`event_series`/`regime` tables; seed the known events (COVID, SVB, the rebrand, recurring mechanical exits) and current regime; wire `exclude_from_baseline` into the derived-metrics computation so baselines clean themselves. Acceptance: a percentile computed with vs without exclusions differs as expected; events queryable by series and date.
- **W1.8 (when analysis deepens) — Python/Polars layer.** Correlations, regime models, analog matcher, event studies. Optional, additive.

These slot *before* the visible W2 credit tiles only if you want the backend first; otherwise W2 ships on the current JSON and the backend migrates underneath it later (the contract makes either order safe).

## 8 · Authoring robustness + the substrate upgrade path (O-16)

**Why not just raw YAML for events.** YAML is whitespace-fragile, has type-coercion footguns (the "Norway problem": `no`→false, mangled dates/versions), and enforces no schema — errors surface late and silently. But its readability is the point for human-curated events. So we *harden* rather than replace: **author in YAML (or TOML), validate on load with a JSON Schema + referential-integrity checks** (linked `series_id` must exist; enums/dates legal; required fields present — fail loudly). The file is the human interface; the DuckDB store is the source of truth for querying. This kills ~90% of YAML's footguns without losing git-reviewability.

**The substrate ladder — each rung is free/open and added only when its trigger fires (paid tiers buy managed-ops/scale we don't need, not capability):**

| Need that triggers it | Add | Notes |
|---|---|---|
| (now) analytical store, daily data | **DuckDB + Parquet** | confirmed; embedded, no ops |
| live server / concurrent writes | PostgreSQL + TimescaleDB | only if we leave the static-site model — we don't plan to |
| intraday tick / high-freq holdings | QuestDB or **ArcticDB** | daily cadence doesn't need these |
| the connection-graph becomes the primary object (fuse credit events with the `/connections` causal map + IWT cascades) | **KùzuDB** (embedded, Cypher) or Neo4j (server, richer ecosystem) | start with DuckDB link-tables + recursive queries; graduate when the network is large/dense |
| "what does today resemble?" analog retrieval | **LanceDB** (embedded vector DB) + episode embeddings | honest by construction — retrieves real precedents, doesn't fabricate; pgvector if on Postgres |
| anomaly detection / regime ID | robust z-scores, STL, **Hidden Markov / Markov-switching** | interpretable workhorses, not black boxes |
| tabular prediction (if wanted) | **XGBoost/LightGBM + SHAP** | beat LSTMs on our data size and stay explainable |
| draft notes / weekly digest / tag suggestions | **LLM as curator-assistant** | human ratifies; aligns with the research loop |
| deep-learning forecasters | (defer) temporal models | only with bitemporal-correct backtests; presented as one input with uncertainty, never "the answer" |

**Integrity guardrail for all ML:** the site's brand is explainable, humble reasoning. ML *assists* the human curator and *retrieves precedents*; it never replaces the "why" with an opaque prediction. The bitemporal store (§2) is the prerequisite that makes any honest ML evaluation possible (no look-ahead bias). Forecasts are always "resembles / historically followed," never "will."

---
*Recorded under O-15 (backend) and O-16 (authoring robustness + substrate ladder). The R-02 credit-feeds plan (`docs/VegaReady-R02-Credit-Feeds-Plan.md`) references this as its data layer. Engine details live here; desk-specific tile work lives in each desk's plan.*
