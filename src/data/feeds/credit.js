// Credit desk feed consumer (CW2). The ONLY module the desk imports to read live
// credit data — never the JSON directly. Wraps src/data/feeds/credit.json (written
// by scripts/fetch-feeds.cjs; the future Postgres backend writes the same shape).
// Every accessor is defensive: missing data degrades to a feed_pending tile, never throws.
import feed from './credit.json';

export const series = feed.series || {};
export const derived = feed.derived || {};
export const feedStatus = feed.feedStatus || { degraded: true, alerts: [] };

// ── tile-state chips (kit §5-4: colour + glyph + word; latent never red) ──
// states: live · latest_published · feed_pending · stale · source_identified
const CHIP = {
  live:             { glyph: '●', word: 'Live',         cls: 'st-live' },
  latest_published: { glyph: '◐', word: 'Latest pub.',  cls: 'st-pub' },
  stale:            { glyph: '◑', word: 'Stale',        cls: 'st-stale' },
  source_identified:{ glyph: '◌', word: 'Source ready', cls: 'st-src' },
  feed_pending:     { glyph: '○', word: 'Feed pending', cls: 'st-pending' },
};
export const chipFor = (state) => CHIP[state] || CHIP.feed_pending;

// ── series accessors (all null-safe) ──
export const tile = (key) => series[key] || { state: 'feed_pending', display: false };
export const isLive = (key) => (series[key] || {}).state === 'live';
export const asOf = (key) => (series[key] || {}).asOf || null;

// formatters — never render a null/'.'; callers show the chip instead
export const fmtBp = (n) => (n == null || Number.isNaN(n) ? null : `${Math.round(n)} bp`);
export const bp = (key) => fmtBp((series[key] || {}).bp);
export const pct = (key) => { const v = (series[key] || {}).percentile; return v == null ? null : `${v}th pct`; };
// percentile WITH its honest window span (FRED truncates ICE series to ~3y) — never show a bare percentile
export const pctLabel = (key) => {
  const s = series[key]; if (!s || s.percentile == null) return null;
  const w = s.window || {}; let yrs = '';
  if (w.start && w.end) yrs = ` · ${Math.max(1, Math.round((new Date(w.end) - new Date(w.start)) / 3.1536e10))}y`;
  return `${s.percentile}th pct${yrs}`;
};
// compression direction tone, aligned to the SAME ±5bp/wk threshold the regime read uses
// (so a move we call "flat" is never coloured as stress). up=decompressing/stress, dn=compressing.
export const compTone = () => { const c = derived.hyMinusIg; if (!c || c.chg1wBp == null) return 'flat'; return c.chg1wBp > 5 ? 'up' : c.chg1wBp < -5 ? 'dn' : 'flat'; };
// signed bp change with explicit sign (for delta chips)
export const chgBp = (key) => { const v = (series[key] || {}).chgBp; return v == null ? null : `${v > 0 ? '+' : ''}${v} bp`; };
export const chg1w = (key) => { const v = (series[key] || {}).chg1w; return v == null ? null : `${v > 0 ? '+' : ''}${v} bp/wk`; };

// ── derived (the intelligence — read these, not raw levels) ──
export const compression = () => derived.hyMinusIg || null;   // HY−IG master regime tell
export const dispersion  = () => derived.cccMinusBb || null;  // CCC−BB junk-tier
export const cliff       = () => derived.bbbMinusIg || null;  // BBB−IG fallen-angel frontier
export const regime      = () => derived.regime || null;      // rule-based, labeled, never a forecast
export const attrFor = (key) => (series[key] || {}).attr || null;

// page-level freshness honesty: the most recent data-date across live series
export const dataThrough = () => {
  const dates = Object.values(series).filter(s => s && s.state === 'live' && s.asOf).map(s => s.asOf).sort();
  return dates.length ? dates[dates.length - 1] : null;
};
