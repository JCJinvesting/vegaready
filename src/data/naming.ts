// =============================================================================
// VegaReady — Naming token layer (SINGLE SOURCE OF TRUTH for every visible label)
// -----------------------------------------------------------------------------
// Why this file exists: labels used to be hardcoded in Header.astro, the layouts,
// and page frontmatter. This registry centralizes them so a rename is a one-line
// edit and a reorder is a one-array edit, while ROUTES and internal IDs stay
// durable (they never change on a rename → no redirect churn).
//
// Rules:
//  - `id` and `route` are DURABLE. Decide once; never change on a rename.
//  - `overview` / `analyst` are the two dual-mode labels (editable anytime).
//  - `legacy[]` are old/visible aliases kept for redirects + search continuity.
//  - Generated modules (src/data/analysis/*.js) keep emitting durable id/page/status;
//    the render layer resolves display text via label(id, mode). Generated files
//    are never hand-edited.
//
// Confirmed by product owner 2026-06-09 (see docs/VegaReady-Restructure-Master-Plan.md §8).
// =============================================================================

export type Mode = 'overview' | 'analyst';

export interface NameEntry {
  id: string;                 // durable internal id — never changes
  route: string;              // stable path — never moves on a rename
  overview: string;           // plain-language label (the toggle default)
  analyst: string;            // institutional label
  heading?: { overview?: string; analyst?: string }; // optional longer page H1
  legacy?: string[];          // preserved aliases → redirects + search; never shown
  status?: 'selected' | 'deferred' | 'proposed'; // governance state
  note?: string;
}

// -----------------------------------------------------------------------------
// Top-level domains + demoted lenses
// -----------------------------------------------------------------------------
export const NAMES: Record<string, NameEntry> = {
  'nav.home': {
    id: 'nav.home', route: '/',
    overview: 'Home', analyst: 'Home', status: 'selected',
  },
  'nav.today': {
    id: 'nav.today', route: '/today/',
    overview: 'Today', analyst: 'Today',
    heading: { analyst: 'Daily Intelligence' }, status: 'selected',
    note: 'Generic, all-topics front door. New in Phase 1.',
  },
  'nav.regime': {
    id: 'nav.regime', route: '/regime/',
    overview: 'Market Regime', analyst: 'Global Regime', status: 'deferred',
    note: 'Phase-4 content. Kept OUT of interim nav until it has real content (no empty desks).',
  },
  'nav.catalysts': {
    id: 'nav.catalysts', route: '/catalysts/',
    overview: 'Catalysts', analyst: 'Catalyst Library',
    heading: { overview: 'What’s Moving Markets' },
    legacy: ['Dashboard'], status: 'selected',
    note: 'Houses the Iran–Gulf dossier as the first / featured catalyst.',
  },
  'nav.scenarios': {
    id: 'nav.scenarios', route: '/scenarios/',
    overview: 'Scenarios & Outlook', analyst: 'Scenarios & Outlook',
    heading: { overview: 'What Could Happen Next' },
    status: 'selected',
    note: 'Forward-looking / expectations layer. Holds Connections, Transmission, Outlook. Built in Phase 3 (P3.D).',
  },
  'nav.markets': {
    id: 'nav.markets', route: '/markets',
    overview: 'Market Impact', analyst: 'Asset Markets',
    legacy: ['Markets'], status: 'selected',
  },
  'nav.exposure': {
    id: 'nav.exposure', route: '/exposure',
    overview: 'Countries & Regions', analyst: 'Country Exposure',
    legacy: ['Exposure'], status: 'selected',
  },
  'nav.structural': {
    id: 'nav.structural', route: '/structural',
    overview: 'Long-Term Risks', analyst: 'Structural Risk Monitor',
    legacy: ['Structural Risk'], status: 'selected',
  },
  'nav.signals': {
    id: 'nav.signals', route: '/signals',
    overview: 'Signals', analyst: 'Live Signal Registry',
    heading: { overview: 'Signals to Watch' },
    legacy: ['Watch Board'], status: 'selected',
    note: 'Promoted from /structural/watch to a top-level page in Phase 1.',
  },
  'nav.research': {
    id: 'nav.research', route: '/briefings',
    overview: 'Research', analyst: 'Research Notes',
    heading: { overview: 'Briefings & Guides' },
    legacy: ['Briefings'], status: 'selected',
    note: 'Route stays /briefings interim; target /research at cutover.',
  },
  'nav.about': {
    id: 'nav.about', route: '/about',
    overview: 'About', analyst: 'Methodology & Coverage',
    legacy: ['About'], status: 'selected',
  },

  // --- Lenses that fold into Scenarios & Outlook (routes survive; off top nav) ---
  'nav.transmission': {
    id: 'nav.transmission', route: '/transmission',
    overview: 'How the Shock Spreads', analyst: 'Sector Transmission',
    legacy: ['Transmission'], status: 'selected',
  },
  'nav.connections': {
    id: 'nav.connections', route: '/connections',
    overview: 'How It Connects', analyst: 'Causal Network',
    legacy: ['Connections'], status: 'selected',
  },
  'nav.outlook': {
    id: 'nav.outlook', route: '/outlook',
    overview: 'What Happens Next', analyst: 'Scenario Analysis',
    legacy: ['Outlook'], status: 'selected',
  },
  // --- "Who Profits" → renamed + demoted to a dossier tab / cross-asset lens ---
  'nav.profits': {
    id: 'nav.profits', route: '/profits',
    overview: 'Winners, Losers & Market Effects', analyst: 'Beneficiaries & Trade Expressions',
    legacy: ['Who Profits'], status: 'selected',
  },

  // ---------------------------------------------------------------------------
  // The Iran–Gulf dossier (the renamed "Dashboard" cluster)
  // ---------------------------------------------------------------------------
  'dossier.iran-gulf-2026': {
    id: 'dossier.iran-gulf-2026',
    route: '/catalysts/iran-gulf-conflict-2026/', // TARGET route; /dashboard stays canonical until cutover
    overview: 'Iran–Gulf Conflict 2026',
    analyst: 'Iran–Gulf Conflict & Hormuz Disruption',
    legacy: ['Dashboard', 'Iran War Tracker', 'Iran tracker', 'Iran–Gulf dossier'],
    status: 'selected',
  },
};

// -----------------------------------------------------------------------------
// Dossier tabs (the 10 current dashboard tabs + Archive). Slugs are durable (R2,
// short set). Labels are the owner-approved dual-mode set (R1). type drives the
// three-grain behavior: 'native' lives only in the dossier; 'overlap' shows a
// brief that deep-links out to the permanent library + Watch Board.
// -----------------------------------------------------------------------------
export interface DossierTab extends NameEntry {
  slug: string;                 // appended to the dossier route
  legacySlug: string;           // current /dashboard/<slug>
  type: 'native' | 'overlap';
}

export const DOSSIER_TABS: DossierTab[] = [
  { id: 'iran.overview',  slug: '',             legacySlug: '',           type: 'native',  route: '', overview: 'Conflict Overview',  analyst: 'Event Ledger' },
  { id: 'iran.regional',  slug: 'regional',     legacySlug: 'gulf',       type: 'overlap', route: '', overview: 'Regional Impact',    analyst: 'Regional Exposure' },
  { id: 'iran.economic',  slug: 'economic',     legacySlug: 'economics',  type: 'overlap', route: '', overview: 'Economic Transmission', analyst: 'Transmission Channels' },
  { id: 'iran.markets',   slug: 'markets',      legacySlug: 'markets',    type: 'overlap', route: '', overview: 'Market Repricing',   analyst: 'Asset Repricing' },
  { id: 'iran.human',     slug: 'human',        legacySlug: 'casualties', type: 'native',  route: '', overview: 'Human Impact',       analyst: 'Casualty & Damage Assessment' },
  { id: 'iran.iran',      slug: 'iran',         legacySlug: 'iran',       type: 'native',  route: '', overview: 'Iran',               analyst: 'Iran: Capabilities & Strategy' },
  { id: 'iran.coalition', slug: 'us-coalition', legacySlug: 'us',         type: 'native',  route: '', overview: 'US & Coalition',     analyst: 'U.S. & Coalition Operations' },
  { id: 'iran.israel',    slug: 'israel',       legacySlug: 'israel',     type: 'native',  route: '', overview: 'Israel',             analyst: 'Israel: Operations & Defense' },
  { id: 'iran.next',      slug: 'whats-next',   legacySlug: 'analytics',  type: 'native',  route: '', overview: 'What Happens Next',  analyst: 'Scenarios & Analytics' },
  { id: 'iran.sources',   slug: 'sources',      legacySlug: 'sources',    type: 'overlap', route: '', overview: 'Sources & Confidence', analyst: 'Source Ledger & Methodology' },
  { id: 'iran.archive',   slug: 'archive',      legacySlug: '',           type: 'native',  route: '', overview: 'Historical Record',  analyst: 'Case-Study Archive' },
];

// -----------------------------------------------------------------------------
// Status / evidence vocabulary — re-renders on toggle (Appendix A).
// -----------------------------------------------------------------------------
export const STATUS_LABELS: Record<string, { overview: string; analyst: string }> = {
  nominal:            { overview: 'Normal',                         analyst: 'Nominal' },
  watch:              { overview: 'Worth Watching',                 analyst: 'Watch' },
  alert:              { overview: 'Elevated Risk',                  analyst: 'Alert' },
  critical:           { overview: 'Critical Risk',                  analyst: 'Critical' },
  realized:           { overview: 'Happening Now',                  analyst: 'Realized' },
  'partially-realized': { overview: 'Partly Happening',             analyst: 'Partially Realized' },
  latent:             { overview: 'Possible, Not Yet Happening',    analyst: 'Latent' },
  normalizing:        { overview: 'Starting to Return Toward Normal', analyst: 'Normalizing' },
  'tail-risk':        { overview: 'Low-Probability, High-Impact',   analyst: 'Tail Risk' },
};

// -----------------------------------------------------------------------------
// Navigation order arrays.
//   TOP_NAV_TARGET  = the confirmed catalyst-neutral nav (Phase 1 interim renders
//                     this once /today, /catalysts, /signals exist; /scenarios and
//                     Market Regime are added when built — see notes).
//   TOP_NAV_LEGACY  = the current 11-item nav, for reference / rollback.
// Reorder the site nav by editing ONE array here.
// -----------------------------------------------------------------------------
export const TOP_NAV_TARGET: string[] = [
  'nav.today',
  // 'nav.regime',     // add in Phase 4 (has content)
  'nav.catalysts',
  // 'nav.scenarios',  // add in Phase 3 (built)
  'nav.markets',
  'nav.exposure',
  'nav.structural',
  'nav.signals',
  'nav.research',
  'nav.about',
];

export const TOP_NAV_LEGACY: string[] = [
  'nav.home', 'nav.catalysts', 'nav.markets', 'nav.transmission', 'nav.exposure',
  'nav.outlook', 'nav.structural', 'nav.connections', 'nav.profits', 'nav.research', 'nav.about',
];

// -----------------------------------------------------------------------------
// Accessors — the whole site calls these.
// -----------------------------------------------------------------------------
export const label = (id: string, mode: Mode = 'overview'): string =>
  NAMES[id]?.[mode] ?? NAMES[id]?.overview ?? id;

export const heading = (id: string, mode: Mode = 'overview'): string =>
  NAMES[id]?.heading?.[mode] ?? label(id, mode);

export const route = (id: string): string => NAMES[id]?.route ?? '/';

export const nameById = (id: string): NameEntry | undefined => NAMES[id];

export const statusLabel = (status: string, mode: Mode = 'overview'): string =>
  STATUS_LABELS[status]?.[mode] ?? status;
