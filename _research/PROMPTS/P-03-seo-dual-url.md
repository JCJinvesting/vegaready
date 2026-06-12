# P-03 — SEO strategy for dual-audience URL pairs (run in Perplexity deep research)
**Return as:** `_research/RETURNS/R-03-seo-dual-url.md`

---

PASTE FROM HERE:

I run a markets-intelligence site (Astro static build on Cloudflare Workers) where each topic "desk" is published at TWO URLs for two audiences: a dense analyst page (`/markets/credit`) and an independent plain-language retelling (`/layman/credit`). The content is genuinely different prose (not a summary or duplicate), covering the same subject. I need a current-best-practice SEO plan (2025–2026 era, post-Helpful-Content-era Google). Answer with citations:

1. **Canonicalization:** Should the analyst/layman pair cross-canonicalize, self-canonicalize, or use another relationship? They are NOT duplicates — does any rel annotation apply? Risk of being treated as doorway pages, and how to avoid it.
2. **Internal linking** pattern between the pair (each page links to its twin via a toggle) — best markup for that toggle for crawlers.
3. **Structured data:** which schema.org types fit a markets-analysis page (Article? AnalysisNewsArticle? FinancialProduct caveats?) and what Google actually renders for finance content. YMYL implications for financial-information pages — E-E-A-T signals worth implementing (author/org markup, citations, dates).
4. **301 migration:** I'm moving 6 pages from `/markets/<sector>` to a new dossier path. Checklist for 301s on Cloudflare Workers/Astro (static redirects vs worker-level), sitemap handling, and how long to keep redirects.
5. **Archived pages:** I keep frozen legacy snapshots under `/archive/markets/*` marked noindex — confirm noindex+sitemap-exclusion is right, or should they 301 instead?
6. **Per-page meta:** title/description/OG patterns for data-heavy pages whose numbers update daily — should meta include live numbers or stable framing? Freshness signals (dateModified) for pages that auto-refresh data 3×/day.
7. **Sitemap strategy** for ~70 pages across desks/dossiers/dashboard, with the analyst/layman pairs.
8. Anything specific to Cloudflare Workers static assets that affects crawling (e.g., headers worth setting).

Prioritize the answers into "must do at launch" vs "later". Cite sources.
