// data-loader.js — Bridge between server-injected data and React components
//
// Data arrives via window.__IWT_DATA__ which is set BEFORE this module loads.
// Two injection paths (both produce identical results, no code change needed):
//   1. Express server injects at serve-time (local/ngrok — runtime injection)
//   2. bake-data.js writes a <script> tag into dist/index.html at build-time (Cloudflare Pages)
//
// In both cases, window.__IWT_DATA__ is a synchronous global by the time
// this module evaluates, so all exports bind to real data immediately.

const data = window.__IWT_DATA__ || {};

export const UAE_DATA = data.UAE_DATA || [];
export const QATAR_DATA = data.QATAR_DATA || [];
export const BAHRAIN_DATA = data.BAHRAIN_DATA || [];
export const SAUDI_DATA = data.SAUDI_DATA || [];
export const KUWAIT_DATA = data.KUWAIT_DATA || [];
export const OMAN_DATA = data.OMAN_DATA || [];
export const IRAQ_DATA = data.IRAQ_DATA || [];
export const LEAKER_LOG = data.LEAKER_LOG || [];
export const OIL_PRICE_TIMELINE = data.OIL_PRICE_TIMELINE || [];
export const MARKET_EVENT_RESPONSE = data.MARKET_EVENT_RESPONSE || [];
export const REFINERY_EVENTS = data.REFINERY_EVENTS || [];
export const FORCE_MAJEURE = data.FORCE_MAJEURE || [];
export const GCC_EQUITY = data.GCC_EQUITY || [];
export const GCC_CDS = data.GCC_CDS || [];
export const HORMUZ_ANALYST = data.HORMUZ_ANALYST || [];
export const CURRENCY_CHANGES = data.CURRENCY_CHANGES || [];
export const SHIPPING_INSURANCE = data.SHIPPING_INSURANCE || [];
export const BUNKER_PRICES = data.BUNKER_PRICES || [];
export const VESSEL_ATTACKS = data.VESSEL_ATTACKS || [];
export const INSURANCE_EVENTS = data.INSURANCE_EVENTS || [];
export const CONTAINER_RATES = data.CONTAINER_RATES || [];
export const SHIPPING_EVENTS = data.SHIPPING_EVENTS || [];
export const IRAN_DAY_CLAIMS = data.IRAN_DAY_CLAIMS || [];
export const WEAPON_SYSTEMS = data.WEAPON_SYSTEMS || [];
export const IRAN_DISINFO = data.IRAN_DISINFO || [];
export const IRAN_MILITARY_ORDER = data.IRAN_MILITARY_ORDER || [];
export const IRAN_DEPLETION = data.IRAN_DEPLETION || [];
export const IRAN_CAPACITY = data.IRAN_CAPACITY || [];
export const EPICFURY_TIMELINE = data.EPICFURY_TIMELINE || [];
export const EPICFURY_BDA = data.EPICFURY_BDA || [];
export const STRATEGIC_CALCULUS = data.STRATEGIC_CALCULUS || [];
export const US_POLICY_EVENTS = data.US_POLICY_EVENTS || [];
export const ISRAEL_OPS_TIMELINE = data.ISRAEL_OPS_TIMELINE || [];
export const COALITION_AIR_ORDER = data.COALITION_AIR_ORDER || [];
export const US_NAVAL_FORCES = data.US_NAVAL_FORCES || [];
export const ISRAEL_DEFENSE_SYSTEMS = data.ISRAEL_DEFENSE_SYSTEMS || [];
export const US_CASUALTIES = data.US_CASUALTIES || [];
export const COALITION_CASUALTIES = data.COALITION_CASUALTIES || [];
export const CIVILIAN_INCIDENTS = data.CIVILIAN_INCIDENTS || [];
export const GLOSSARY_ENTRIES = data.GLOSSARY_ENTRIES || [];
export const SOURCES = data.SOURCES || [];
export const FEEDER_OUTLETS = data.FEEDER_OUTLETS || [];
export const COUNTRY_SUMMARY = data.COUNTRY_SUMMARY || [];
export const WAR_ROOM_BRIEFS = data.WAR_ROOM_BRIEFS || [];
export const WR_SECTORS = data.WR_SECTORS || [];
export const WR_SEVERITY = data.WR_SEVERITY || [];
export const IRAN_RECONCILIATION = data.IRAN_RECONCILIATION || {};
export const IRAN_STOCKPILE = data.IRAN_STOCKPILE || {};
export const BRIEF_ECON = data.BRIEF_ECON || [];
export const BRIEF_MARKETS = data.BRIEF_MARKETS || [];
export const BRIEF_ADV = data.BRIEF_ADV || [];
export const GULF_AIR_DEFENSE = data.GULF_AIR_DEFENSE || [];
export const GULF_NAVAL_ASSETS = data.GULF_NAVAL_ASSETS || [];
export const PROVENANCE = data.PROVENANCE || {};

// Re-export all data as a single object for components that need dynamic access
export default data;
