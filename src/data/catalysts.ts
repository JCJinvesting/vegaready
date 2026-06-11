// =============================================================================
// VegaReady — Catalyst registry
// -----------------------------------------------------------------------------
// The list of catalysts the platform tracks. The Iran–Gulf conflict is the first
// and (while hot) the featured one. Prominence is driven by `featured` + `state`,
// NOT by the URL — so the dossier can sit front-and-center now and recede later
// without its address changing. Honest stubs (state: 'monitoring') are listed
// truthfully as "watching, not yet material" — never as empty desks.
// =============================================================================

export type CatalystState =
  | 'active'        // live, materially moving markets
  | 'developing'    // becoming material; provisional page
  | 'monitoring'    // watched, not yet material (honest stub)
  | 'scheduled'     // a dated, forthcoming event
  | 'historical';   // normalized; case study

export interface Catalyst {
  id: string;
  family: string;          // classification tag (not a URL segment)
  state: CatalystState;
  featured: boolean;       // pins to the front seat
  overviewTitle: string;   // plain-language
  analystTitle: string;    // institutional
  route: string;           // current canonical (interim: /dashboard)
  summary: string;         // one plain-language line
  channels: string[];      // primary transmission channels
  watchingNote?: string;   // for monitoring stubs: why we're watching
}

export const CATALYSTS: Catalyst[] = [
  {
    id: 'iran-gulf-conflict-2026',
    family: 'Geopolitical & Security',
    state: 'active',
    featured: true,
    overviewTitle: 'Iran–Gulf Conflict 2026',
    analystTitle: 'Iran–Gulf Conflict & Hormuz Disruption',
    route: '/dashboard', // interim canonical; target /catalysts/iran-gulf-conflict-2026/
    summary:
      'The first complete catalyst dossier — how the conflict travels from the Strait of Hormuz through energy, shipping, insurance and food into market repricing.',
    channels: ['Hormuz transit', 'LNG & refined products', 'War-risk insurance', 'Fertilizer & food'],
  },
  // --- Honest monitoring stubs (watched, not yet material — never empty desks) ---
  {
    id: 'opec-supply',
    family: 'Energy & Power',
    state: 'monitoring',
    featured: false,
    overviewTitle: 'OPEC+ Supply Policy',
    analystTitle: 'OPEC+ Spare Capacity & Compliance',
    route: '/catalysts',
    summary: 'Spare-capacity buffer and quota discipline — the biggest swing factor sitting behind every oil-price scenario.',
    channels: ['Spare capacity', 'Quota compliance'],
    watchingNote: 'Tracked as a standing driver; promoted to a dossier when a decision materially shifts the supply balance.',
  },
  {
    id: 'tariff-escalation',
    family: 'Trade, Sanctions & Industrial Policy',
    state: 'monitoring',
    featured: false,
    overviewTitle: 'Global Tariff Escalation',
    analystTitle: 'Trade Fragmentation & Tariff Shock',
    route: '/catalysts',
    summary: 'Announced-vs-delivered tariff measures and the supply-chain reroute they trigger.',
    channels: ['Input costs', 'Supply-chain reroute', 'Inflation expectations'],
    watchingNote: 'Monitored via the announced-vs-delivered gap; promoted when measures take effect at scale.',
  },
  {
    id: 'treasury-issuance',
    family: 'Fiscal Policy & Sovereign Funding',
    state: 'monitoring',
    featured: false,
    overviewTitle: 'Treasury-Issuance Shift',
    analystTitle: 'Treasury Supply & Auction Quality',
    route: '/catalysts',
    summary: 'Refunding size/mix and auction quality — the plumbing behind real yields and the dollar.',
    channels: ['Auction quality', 'Real yields', 'Dollar liquidity'],
    watchingNote: 'Tracked through refunding announcements and auction tails.',
  },
];

export const CATALYST_FAMILIES: string[] = [
  'Geopolitical & Security',
  'Monetary Policy & Liquidity',
  'Fiscal Policy & Sovereign Funding',
  'Trade, Sanctions & Industrial Policy',
  'Energy & Power',
  'Shipping & Supply Chains',
  'Climate, Food & Water',
  'Credit & Financial Stability',
  'Digital Assets & Market Structure',
  'Cyber & Digital Infrastructure',
  'Strategic Technology & Critical Minerals',
  'Natural Disasters',
  'Health & Biosecurity',
];

export const STATE_LABEL: Record<CatalystState, string> = {
  active: 'Active',
  developing: 'Developing',
  monitoring: 'Monitoring',
  scheduled: 'Scheduled',
  historical: 'Historical',
};
