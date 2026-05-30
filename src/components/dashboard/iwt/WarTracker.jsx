import React, { useState, useMemo, useCallback, useRef, useEffect, Component } from 'react';
import './styles.css';

// ─── ERROR BOUNDARY ─── Catches render crashes per-tab instead of killing the whole app
class TabErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, info) { console.error(`[IWT] Tab render crash:`, error, info.componentStack); }
  componentDidUpdate(prevProps) { if (prevProps.tabKey !== this.props.tabKey) this.setState({ hasError: false, error: null }); }
  render() {
    if (this.state.hasError) {
      return React.createElement('div', {style:{padding:32,textAlign:'center',color:'#f87171',fontFamily:"'JetBrains Mono',monospace"}},
        React.createElement('div', {style:{fontSize:18,fontWeight:700,marginBottom:12}}, '⚠ This tab encountered a rendering error'),
        React.createElement('div', {style:{fontSize:12,color:'#8892a4',marginBottom:16,maxWidth:500,margin:'0 auto'}}, String(this.state.error)),
        React.createElement('button', {onClick:()=>this.setState({hasError:false,error:null}),style:{padding:'8px 16px',background:'#1c2433',border:'1px solid #263044',borderRadius:6,color:'#e2e8f0',cursor:'pointer',fontSize:12}}, 'Retry')
      );
    }
    return this.props.children;
  }
}
import {
  UAE_DATA,
  QATAR_DATA,
  BAHRAIN_DATA,
  SAUDI_DATA,
  KUWAIT_DATA,
  OMAN_DATA,
  IRAQ_DATA,
  LEAKER_LOG,
  OIL_PRICE_TIMELINE,
  MARKET_EVENT_RESPONSE,
  REFINERY_EVENTS,
  FORCE_MAJEURE,
  GCC_EQUITY,
  GCC_CDS,
  HORMUZ_ANALYST,
  CURRENCY_CHANGES,
  SHIPPING_INSURANCE,
  BUNKER_PRICES,
  VESSEL_ATTACKS,
  INSURANCE_EVENTS,
  CONTAINER_RATES,
  SHIPPING_EVENTS,
  IRAN_DAY_CLAIMS,
  WEAPON_SYSTEMS,
  IRAN_DISINFO,
  IRAN_MILITARY_ORDER,
  IRAN_DEPLETION,
  IRAN_CAPACITY,
  EPICFURY_TIMELINE,
  EPICFURY_BDA,
  STRATEGIC_CALCULUS,
  US_POLICY_EVENTS,
  ISRAEL_OPS_TIMELINE,
  COALITION_AIR_ORDER,
  US_NAVAL_FORCES,
  ISRAEL_DEFENSE_SYSTEMS,
  US_CASUALTIES,
  COALITION_CASUALTIES,
  CIVILIAN_INCIDENTS,
  GLOSSARY_ENTRIES,
  SOURCES,
  FEEDER_OUTLETS,
  COUNTRY_SUMMARY,
  WAR_ROOM_BRIEFS,
  WR_SECTORS,
  WR_SEVERITY,
  IRAN_RECONCILIATION,
  IRAN_STOCKPILE,
  BRIEF_ECON,
  BRIEF_MARKETS,
  BRIEF_ADV,
  GULF_AIR_DEFENSE,
  GULF_NAVAL_ASSETS,
  PROVENANCE
} from './data-loader';


const C = {
  bg:"#080b12",surface:"#0d1117",surfaceAlt:"#111720",border:"#1c2433",borderLight:"#263044",
  text:"#e2e8f0",textMuted:"#8892a4",textDim:"#5a6478",
  ballistic:"#ef4444",ballisticBg:"rgba(239,68,68,0.08)",
  cruise:"#38bdf8",cruiseBg:"rgba(56,189,248,0.08)",
  drone:"#f59e0b",droneBg:"rgba(245,158,11,0.08)",
  sea:"#10b981",seaBg:"rgba(16,185,129,0.08)",
  accent:"#6366f1",accentBg:"rgba(99,102,241,0.06)",
  peak:"#ff3b5c",peakBg:"rgba(255,59,92,0.1)",
  avgLine:"#818cf8",reduction:"#34d399",nr:"#3b4559",
  phaseOne:"#ef4444",phaseTwo:"#f59e0b",phaseThree:"#38bdf8",
  cyan:"#22d3ee",blue:"#3b82f6",purple:"#a78bfa",magenta:"#c084fc",orange:"#f97316",
  mapBg:"#060a14",radarBg:"#0c1018",
  confHigh:"#06b6d4",confLow:"#94a3b8",invalidPurple:"#a855f7",lightText:"#f8fafc",
  white:"#fff",errorRed:"#f87171",deathsWhite:"#f0f0ff",
};

// ─── FONT SIZE CONSTANTS ───
const FONT = { body:14, table:12, label:11, h1:20, h2:16, h3:14, small:10, badge:9, tiny:8, nav:11 };

// ─── LIGHT THEME FOR ECONOMICS / MARKETS ───
const LIGHT_COLORS = { bg:"#f5f3ef", text:"#1a1a2e", positive:"#15803d", negative:"#dc2626", neutral:"#4b5563", border:"#d1d5db", muted:"#6b7280", accent:"#2563eb" };

// ─── PHASE DEFINITIONS (single source of truth) ───
const PHASE_DEFINITIONS = [
  {id:1, num:"I", name:"Phase I", label:"Opening Barrage", days:"D1–5", lo:1, hi:5, color:C.phaseOne, desc:"Initial saturation attacks"},
  {id:2, num:"II", name:"Phase II", label:"Sustained Campaign", days:"D6–11", lo:6, hi:11, color:C.phaseTwo, desc:"Escalation & infrastructure targeting"},
  {id:3, num:"III", name:"Phase III", label:"Attrition", days:"D12+", lo:12, hi:999, color:C.phaseThree, desc:"Stockpile depletion signals"},
];

// ─── KEY DATE CONSTANTS ───
const THAAD_NEXT_DELIVERY = "April 2027";

// ─── REUSABLE SUBTAB PILL COMPONENT ───
const SubTabPill = ({label, active, color, onClick}) => (
  <button onClick={onClick} style={{
    padding:"7px 14px", borderRadius:5, fontSize:FONT.label, fontWeight:700,
    fontFamily:"'JetBrains Mono',monospace", letterSpacing:0.5, cursor:"pointer",
    border: active ? `1px solid ${color}50` : "1px solid rgba(255,255,255,0.25)",
    background: active ? color+"18" : "transparent",
    color: active ? color : C.textMuted,
    transition:"all 0.15s ease"
  }}>{label}</button>
);

function wrSortBriefs(briefs) {
  // Pinned items: pinned flag OR critical severity — sorted by day DESC (newest first),
  // then by severity within the same day so highest-impact leads each day group
  const pinned = briefs.filter(b => b.pinned || b.severity === "critical").sort((a,b) => {
    if (b.day !== a.day) return b.day - a.day;                // newest day first
    return (WR_SEVERITY[b.severity]||0) - (WR_SEVERITY[a.severity]||0); // then severity within day
  });
  // Unpinned items: sorted by day DESC (newest first), then severity within day
  const unpinned = briefs.filter(b => !b.pinned && b.severity !== "critical").sort((a,b) => {
    if (b.day !== a.day) return b.day - a.day;                // newest day first
    return (WR_SEVERITY[b.severity]||0) - (WR_SEVERITY[a.severity]||0); // then severity within day
  });
  return { pinned, unpinned };
}
// Fuzzy-resolve a War Room source citation string to a SOURCE_INDEX entry.
// Returns the matched source object (with .url, .name, .id, .conf) or null.
function wrResolveSource(citation, idx) {
  if (!citation || !idx) return null;
  const cl = citation.toLowerCase();
  // 1. Exact name match
  for (const s of Object.values(idx)) {
    if (s.name && s.name.toLowerCase() === cl) return s;
  }
  // 2. Strip trailing date stamps ("Reuters Mar 30" → "reuters")
  const stripped = cl.replace(/\s+(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\s+\d+$/i, '').trim();
  for (const s of Object.values(idx)) {
    if (!s.name) continue;
    const sn = s.name.toLowerCase();
    const snCore = sn.split('(')[0].trim(); // "Al Jazeera" from "Al Jazeera (Arabic)"
    // Also extract alternate name inside parentheses: "ONA (Oman News Agency)" → "oman news agency"
    const parenMatch = sn.match(/\(([^)]+)\)/);
    const snAlt = parenMatch ? parenMatch[1].trim() : '';
    // Check core name (4+ chars for substring, word-boundary for short)
    if (snCore.length >= 4 && (stripped.includes(snCore) || snCore.includes(stripped))) return s;
    if (snCore.length > 0 && snCore.length < 4) {
      const wordRe = new RegExp('\\b' + snCore.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '\\b');
      if (wordRe.test(stripped)) return s;
    }
    // Check alternate name inside parentheses (e.g., "Oman News Agency" matching citation)
    if (snAlt.length >= 4 && (stripped.includes(snAlt) || snAlt.includes(stripped))) return s;
  }
  return null;
}
// Safe accessors — guard against truncated/undefined data arrays
const _SOURCES = Array.isArray(SOURCES) ? SOURCES : [];
const _FEEDER  = Array.isArray(FEEDER_OUTLETS) ? FEEDER_OUTLETS : [];
const safeSrcCount = () => _SOURCES.reduce((s, cat) => s + (cat && Array.isArray(cat.items) ? cat.items.length : 0), 0);
const safeFeederCount = () => _FEEDER.reduce((s, t) => s + (t && Array.isArray(t.outlets) ? t.outlets.length : 0), 0);

// C-05: Safe IRAN_STOCKPILE accessor — guards nested .mrbm.est, .srbm.est, .drone.est, .cruise.est
const _EMPTY_STOCK = { est: 0, low: 0, high: 0 };
const _STOCKPILE = {
  mrbm:   (IRAN_STOCKPILE && IRAN_STOCKPILE.mrbm)   ? IRAN_STOCKPILE.mrbm   : _EMPTY_STOCK,
  srbm:   (IRAN_STOCKPILE && IRAN_STOCKPILE.srbm)    ? IRAN_STOCKPILE.srbm   : _EMPTY_STOCK,
  drone:  (IRAN_STOCKPILE && IRAN_STOCKPILE.drone)   ? IRAN_STOCKPILE.drone  : _EMPTY_STOCK,
  cruise: (IRAN_STOCKPILE && IRAN_STOCKPILE.cruise)  ? IRAN_STOCKPILE.cruise : _EMPTY_STOCK,
};

const SOURCE_INDEX = {};
_SOURCES.forEach(cat => {
  if (!cat || !Array.isArray(cat.items)) return;
  cat.items.forEach((item, i) => {
    const key = item.id || ("auto-" + (item.name||"").replace(/\W+/g,"-").toLowerCase().substring(0,30) + "-" + i);
    SOURCE_INDEX[key] = {...item, id: key, cat: cat.cat};
  });
});
function autoGenerateProvenance(provenance) {
  const countryMap = { UAE: UAE_DATA, Qatar: QATAR_DATA, Bahrain: BAHRAIN_DATA, Saudi: SAUDI_DATA, Kuwait: KUWAIT_DATA, Oman: OMAN_DATA, Iraq: IRAQ_DATA };
  const sourcesByCountry = {};
  (Array.isArray(SOURCES) ? SOURCES : []).forEach(cat => {
    if (!cat || !Array.isArray(cat.items)) return;
    cat.items.forEach(item => {
    if (!item.id) return;
    const id = item.id.toLowerCase();
    if (id.includes("uae") || id.includes("wam") || id.includes("gulf-news") || id.includes("khaleej") || id.includes("emirates") || id.includes("sharjah")) (sourcesByCountry["UAE"] = sourcesByCountry["UAE"] || []).push(item.id);
    else if (id.includes("qa") || id.includes("qatar") || id.includes("aljazeera") || id.includes("peninsula")) (sourcesByCountry["Qatar"] = sourcesByCountry["Qatar"] || []).push(item.id);
    else if (id.includes("bdf") || id.includes("bahrain") || id.includes("bna")) (sourcesByCountry["Bahrain"] = sourcesByCountry["Bahrain"] || []).push(item.id);
    else if (id.includes("saudi") || id.includes("spa") || id.includes("arab-news")) (sourcesByCountry["Saudi"] = sourcesByCountry["Saudi"] || []).push(item.id);
    else if (id.includes("kuwait") || id.includes("kuna") || id.includes("arab-times")) (sourcesByCountry["Kuwait"] = sourcesByCountry["Kuwait"] || []).push(item.id);
    else if (id.includes("oman") || id.includes("muscat") || id.includes("ona") || id.includes("times-oman")) (sourcesByCountry["Oman"] = sourcesByCountry["Oman"] || []).push(item.id);
    else if (id.includes("iraq") || id.includes("shafaq")) (sourcesByCountry["Iraq"] = sourcesByCountry["Iraq"] || []).push(item.id);
    });
  });
  let generated = 0;
  Object.entries(countryMap).forEach(([country, dataArr]) => {
    if (!dataArr || !dataArr.length) return;
    dataArr.forEach(row => {
      const day = row.day;
      if (day == null) return;
      const key = country + "-" + day;
      if (provenance[key]) return; // already has manual entry
      const countrySrcs = sourcesByCountry[country] || [];
      const primarySrc = countrySrcs.length > 0 ? [countrySrcs[0]] : [];
      const corrobSrc = countrySrcs.length > 1 ? [countrySrcs[1]] : [];
      const noteText = row.note || ("Day " + day + " data for " + country);
      const confText = row.conf || "U-Med";
      provenance[key] = {
        primary: primarySrc,
        corroborate: corrobSrc,
        dispute: [],
        rawClaim: noteText,
        derivation: "Auto-stub from " + country + " data array (conf: " + confText + "). B=" + (row.B ?? "n/a") + " C=" + (row.C ?? "n/a") + " U=" + (row.U ?? "n/a") + ".",
        affects: [country + " cumulative"],
      };
      generated++;
    });
  });
  return generated;
}
autoGenerateProvenance(PROVENANCE);
let PROVENANCE_VERSION = 0;
function mutateProvenance(patch) {
  Object.assign(PROVENANCE, patch);
  PROVENANCE_VERSION++;
  return PROVENANCE_VERSION;
}
function buildSourceMaps(provenance) {
  const rows = {};
  Object.entries(provenance).forEach(([key, prov]) => {
    [...(prov.primary||[]), ...(prov.corroborate||[]), ...(prov.dispute||[])].forEach(srcId => {
      if (!rows[srcId]) rows[srcId] = [];
      rows[srcId].push(key);
    });
  });
  const impact = {};
  Object.entries(rows).forEach(([srcId, r]) => { impact[srcId] = r.length; });
  return { SOURCE_ROWS: rows, SOURCE_IMPACT: impact };
}
const { SOURCE_ROWS, SOURCE_IMPACT } = buildSourceMaps(PROVENANCE);
function computeStats(data, field) {
  const vals = data.map(d => d[field]).filter(v => v != null && v > 0);
  if (!vals.length) return { avg:null, peak:null, last:null, reductionFromPeak:null };
  const avg = vals.reduce((a,b) => a+b, 0) / vals.length;
  const peak = Math.max(...vals);
  const lastVal = vals[vals.length-1];
  const red = peak > 0 ? ((peak-lastVal)/peak*100) : null;
  return { avg:Math.round(avg*10)/10, peak, last:lastVal, reductionFromPeak:red!==null?Math.round(red*10)/10:null };
}
function computeMovingAvg(data, field, window) {
  return data.map((d,i) => {
    const start = Math.max(0, i-window+1);
    const slice = data.slice(start, i+1).map(x => x[field]).filter(v => v!=null);
    return slice.length > 0 ? Math.round(slice.reduce((a,b) => a+b,0)/slice.length*10)/10 : null;
  });
}
const DATA_SCHEMA_VERSION = 15;
const DATA_BY_COUNTRY = {
  UAE: () => UAE_DATA, Qatar: () => QATAR_DATA, Bahrain: () => BAHRAIN_DATA, Saudi: () => SAUDI_DATA,
  Kuwait: () => KUWAIT_DATA, Oman: () => OMAN_DATA, Iraq: () => IRAQ_DATA,
};
(() => {
  const nameToKey = {"UAE":"UAE","Qatar":"Qatar","Bahrain":"Bahrain","Saudi Arabia":"Saudi","Kuwait":"Kuwait","Oman":"Oman","Iraq":"Iraq"};
  COUNTRY_SUMMARY.forEach(cs => {
    const key = nameToKey[cs.name];
    const arr = key && DATA_BY_COUNTRY[key] ? DATA_BY_COUNTRY[key]() : [];
    if (arr.length > 0) {
      const last = arr.reduce((a,b) => (b.day||0) > (a.day||0) ? b : a, arr[0]);
      cs.asOf = last.date || cs.asOf;
    }
  });
})();
function validateData() {
  const errors = [];
  const warnings = [];
  const checkMonotonicDays = (name, rows) => {
    if (!rows || !rows.length) return;
    let prev = -1;
    rows.forEach((r, i) => {
      if (typeof r.day !== "number" || r.day < 1) errors.push(`${name} row ${i}: invalid day`);
      if (r.day <= prev) errors.push(`${name}: day not strictly increasing at index ${i} (${prev} → ${r.day})`);
      prev = r.day;
      const ph = r.day <= 5 ? 1 : r.day <= 11 ? 2 : 3;
      if (r.phase != null && r.phase !== ph) warnings.push(`${name} D${r.day}: phase field ${r.phase} vs expected ${ph} from day range`);
    });
  };
  checkMonotonicDays("UAE", UAE_DATA);
  checkMonotonicDays("Qatar", QATAR_DATA);
  checkMonotonicDays("Bahrain", BAHRAIN_DATA);
  checkMonotonicDays("Saudi", SAUDI_DATA);
  checkMonotonicDays("Kuwait", KUWAIT_DATA);
  checkMonotonicDays("Oman", OMAN_DATA);
  checkMonotonicDays("Iraq", IRAQ_DATA);
  ["US_POLICY_EVENTS", "ISRAEL_OPS_TIMELINE"].forEach((name) => {
    const rows = name === "US_POLICY_EVENTS" ? US_POLICY_EVENTS : ISRAEL_OPS_TIMELINE;
    rows.forEach((r, i) => {
      if (typeof r.day !== "number" || r.day < 1) errors.push(`${name} row ${i}: invalid day`);
    });
  });
  const uae = COUNTRY_SUMMARY.find(c => c.name === "UAE");
  if (uae) {
    const sumB = UAE_DATA.reduce((s, d) => s + (d.B || 0), 0);
    if (Math.abs(sumB - (uae.totalB || 0)) > 5) warnings.push(`UAE: sum of daily B (${sumB}) differs from COUNTRY_SUMMARY.totalB (${uae.totalB}) — expected for cumulative MoD accounting`);
  }
  return { ok: errors.length === 0, errors, warnings, schemaVersion: DATA_SCHEMA_VERSION };
}
const IWT_BASE = (typeof window !== "undefined" && window.IWT_API_BASE) || "http://127.0.0.1:9473";

// ═══════════════════════════════════════════
// SHARED COMPONENTS
// ═══════════════════════════════════════════

const DefenseStack = ({country}) => {
  const parseDefNum = (v) => {
    if (v == null || v === "N/A" || v === "N/A (laser)") return null;
    if (typeof v === "number") return v;
    const str = String(v);
    if (/classified|unknown|operational/i.test(str)) return null;
    const digits = str.replace(/[^0-9]/g, "");
    return digits.length > 0 ? parseInt(digits, 10) : null;
  };
  const systems = country === "Israel"
    ? ISRAEL_DEFENSE_SYSTEMS.map(s => ({
        system: s.system, type: s.type, country: "Israel",
        missiles_prewar: parseDefNum(s.missiles_prewar),
        missiles_est_remaining: parseDefNum(s.est_remaining),
        intercept_rate: s.intercept_rate ? parseFloat(String(s.intercept_rate).replace(/[^0-9.]/g,"")) || null : null,
        batteries: (s.active_batteries || s.prewar_batteries || "?"),
        protects: s.note || "",
        note: s.note,
        raw_prewar: s.missiles_prewar,
        raw_remaining: s.est_remaining
      }))
    : GULF_AIR_DEFENSE.filter(s => s.country === country);
  const countryAircraft = COALITION_AIR_ORDER.filter(a => {
    const countryBases = [...new Set(COALITION_AIR_ORDER.filter(x => x.country === country).map(x => x.base))];
    return countryBases.includes(a.base);
  });
  const ships = GULF_NAVAL_ASSETS.filter(s => s.country === country);
  if (systems.length === 0 && countryAircraft.length === 0 && ships.length === 0) return null;
  const knownSystems = systems.filter(d => d.missiles_prewar != null && d.missiles_est_remaining != null);
  const totalInterceptors = knownSystems.reduce((s, d) => s + d.missiles_est_remaining, 0);
  const totalPrewar = knownSystems.reduce((s, d) => s + d.missiles_prewar, 0);
  const classifiedCount = systems.filter(d => d.raw_remaining && /classified/i.test(String(d.raw_remaining))).length;
  const depletionPct = totalPrewar > 0 ? Math.round((1 - totalInterceptors / totalPrewar) * 100) : null;
  const totalAircraft = countryAircraft.reduce((s, a) => s + (a.quantity || 0), 0);
  const totalShips = ships.reduce((s, v) => s + (v.quantity || 0), 0);
  return (
    <div style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:16,marginBottom:16}}>
      <SectionHeader title={"DEFENSE CAPABILITIES — "+country.toUpperCase()} color={C.accent}/>
      {systems.length > 0 && (
        <div style={{marginBottom:14}}>
          <div style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1,marginBottom:8}}>AIR DEFENSE SYSTEMS</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:8}}>
            {systems.map((s,i) => {
              const hasNumericData = s.missiles_prewar != null && s.missiles_est_remaining != null;
              const pct = hasNumericData ? Math.round((s.missiles_est_remaining/s.missiles_prewar)*100) : null;
              const barCol = pct !== null ? (pct < 30 ? C.peak : pct < 60 ? C.drone : C.reduction) : C.textDim;
              const isClassified = s.raw_remaining && /classified|unknown/i.test(String(s.raw_remaining));
              return (
                <div key={i} style={{background:C.bg,border:"1px solid "+C.border,borderRadius:6,padding:10}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                    <span style={{fontSize:FONT.label,fontWeight:700,color:C.text}}>{s.system}</span>
                    <span style={{fontSize:FONT.small,padding:"1px 6px",borderRadius:3,background:s.type==="BMD"?C.ballistic+"20":s.type==="Upper-tier"?C.cruise+"20":C.drone+"20",color:s.type==="BMD"?C.ballistic:s.type==="Upper-tier"?C.cruise:C.drone,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>{s.type}</span>
                  </div>
                  <div style={{fontSize:FONT.small,color:C.textDim,marginBottom:6}}>{s.protects && s.protects.length > 50 ? s.protects.slice(0,48)+"..." : (s.protects || "")}</div>
                  {pct !== null && (
                    <div>
                      <div style={{display:"flex",justifyContent:"space-between",fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:3}}>
                        <span>{s.raw_remaining || s.missiles_est_remaining} remaining</span>
                        <span>{pct}% stock</span>
                      </div>
                      <div style={{height:4,background:C.bg,borderRadius:2,border:"1px solid "+C.border,overflow:"hidden"}}>
                        <div style={{width:pct+"%",height:"100%",background:barCol,borderRadius:2,transition:"width 0.3s"}}/>
                      </div>
                    </div>
                  )}
                  {pct === null && isClassified && (
                    <div style={{fontSize:FONT.small,color:C.purple,fontFamily:"'JetBrains Mono',monospace",marginBottom:3,fontStyle:"italic"}}>
                      Stock: Classified
                    </div>
                  )}
                  {pct === null && !isClassified && s.raw_remaining && (
                    <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:3}}>
                      Status: {s.raw_remaining}
                    </div>
                  )}
                  {s.intercept_rate && <div style={{fontSize:FONT.small,color:C.textMuted,marginTop:4,fontFamily:"'JetBrains Mono',monospace"}}>{s.intercept_rate}% intercept rate · {s.batteries} batteries</div>}
                </div>
              );
            })}
          </div>
          {depletionPct !== null && (
            <div style={{marginTop:8,fontSize:FONT.small,color:depletionPct>60?C.peak:depletionPct>40?C.drone:C.reduction,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>
              INTERCEPTOR DEPLETION: {depletionPct}% expended — {totalInterceptors.toLocaleString()} remaining of {totalPrewar.toLocaleString()} pre-war stock{classifiedCount > 0 && <span style={{color:C.textDim,fontWeight:400}}> · {classifiedCount} system{classifiedCount>1?"s":""} classified</span>}
            </div>
          )}
        </div>
      )}
      {countryAircraft.length > 0 && (
        <div style={{marginBottom:14}}>
          <div style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1,marginBottom:8}}>AIR ASSETS ({totalAircraft} aircraft)</div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {countryAircraft.map((a,i) => (
              <div key={i} style={{background:C.bg,border:"1px solid "+C.border,borderRadius:5,padding:"4px 8px",fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace"}}>
                <span style={{color:C.text,fontWeight:700}}>{a.quantity}×</span>
                <span style={{color:C.textMuted,marginLeft:4}}>{a.aircraft}</span>
                <span style={{color:a.nation==="USAF"||a.nation==="USN"||a.nation==="US Army"?C.blue:a.nation==="RAF"||a.nation.includes("Royal")?C.magenta:C.textDim,marginLeft:4,fontSize:FONT.small}}>({a.nation})</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {ships.length > 0 && (
        <div>
          <div style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1,marginBottom:8}}>NAVAL ASSETS ({totalShips} vessels)</div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {ships.map((s,i) => (
              <div key={i} style={{background:C.bg,border:"1px solid "+C.border,borderRadius:5,padding:"4px 8px",fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace"}}>
                <span style={{color:C.text,fontWeight:700}}>{s.quantity}×</span>
                <span style={{color:C.textMuted,marginLeft:4}}>{s.vessel}</span>
                <span style={{color:C.sea,marginLeft:4,fontSize:FONT.small}}>({s.type})</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const PhaseTag = ({phase}) => {
  const pd=PHASE_DEFINITIONS.find(p=>p.id===phase)||PHASE_DEFINITIONS[0];
  return <span style={{display:"inline-block",fontSize:FONT.small,fontWeight:700,letterSpacing:1,padding:"2px 6px",borderRadius:3,fontFamily:"'JetBrains Mono',monospace",background:pd.color+"15",color:pd.color,border:"1px solid "+pd.color+"30"}}>{pd.num}</span>;
};

const TypeBadge = ({type,count,detected}) => {
  const cfg={B:{color:C.ballistic,bg:C.ballisticBg,label:"B"},C:{color:C.cruise,bg:C.cruiseBg,label:"C"},U:{color:C.drone,bg:C.droneBg,label:"U"}};
  const c=cfg[type]||cfg.B;
  if(count==null) return <span style={{color:C.nr,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.label}}>n/r</span>;
  return <span style={{display:"inline-flex",alignItems:"center",gap:3,padding:"2px 7px",borderRadius:4,background:c.bg,border:"1px solid "+c.color+"20",fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.table,lineHeight:1}}><span style={{color:c.color,fontWeight:700,fontSize:FONT.small}}>{c.label}</span><span style={{color:C.text,fontWeight:600}}>{count}</span>{detected&&<span style={{color:C.textDim,fontSize:FONT.small}}>/{detected}</span>}</span>;
};

const StatCard = ({label,value,sub,color,icon}) => (
  <div style={{background:C.surface,border:"1px solid "+C.border,borderRadius:8,padding:"14px 16px",flex:1,minWidth:130,position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg,"+color+",transparent)"}}/>
    <div style={{fontSize:FONT.small,fontWeight:600,letterSpacing:1.2,textTransform:"uppercase",color:C.textDim,marginBottom:6,fontFamily:"'JetBrains Mono',monospace"}}>{icon} {label}</div>
    <div style={{fontSize:22,fontWeight:800,color:color||C.text,fontFamily:"'JetBrains Mono',monospace",lineHeight:1}}>{value}</div>
    {sub&&<div style={{fontSize:FONT.small,color:C.textMuted,marginTop:4}}>{sub}</div>}
  </div>
);

const Sparkline = ({data,field,color,height=28,width=100}) => {
  const vals=data.map(d=>d[field]).filter(v=>v!=null);
  if(vals.length<2) return null;
  const max=Math.max(...vals),min=Math.min(...vals),range=max-min||1;
  const points=vals.map((v,i)=>{const x=(i/(vals.length-1))*width;const y=height-((v-min)/range)*(height-4)-2;return x+","+y}).join(" ");
  return <svg width="100%" height={height} viewBox={"0 0 "+width+" "+height} preserveAspectRatio="none" style={{display:"block",maxWidth:"100%"}}><polyline points={points} fill="none" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" opacity={0.7}/>{vals.map((v,i)=>{const x=(i/(vals.length-1))*width;const y=height-((v-min)/range)*(height-4)-2;return <circle key={i} cx={x} cy={y} r={i===vals.length-1?2.5:1.2} fill={color} opacity={i===vals.length-1?1:0.5}/>})}</svg>;
};

const ConfBadge = ({conf}) => {
  const official={H:C.reduction,M:C.drone,"M-H":C.drone,L:C.peak};
  const unofficial={"U-High":C.confHigh,"U-Med":C.purple,"U-Low":C.confLow};
  const labels={H:"HIGH",M:"MED","M-H":"MED-H",L:"LOW","U-High":"U-HIGH","U-Med":"U-MED","U-Low":"U-LOW"};
  const isUnofficial = conf && conf.startsWith("U-");
  const color = isUnofficial ? (unofficial[conf]||C.confLow) : (official[conf]||C.nr);
  return <span style={{
    fontSize:FONT.tiny,fontWeight:700,padding:"1px 4px",
    borderRadius:2,
    background:isUnofficial?"transparent":color+"20",
    color:color,
    border:isUnofficial?"1px solid "+color+"60":"none",
    fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.5
  }}>{labels[conf]||conf||"?"}</span>;
};

const SectionHeader = ({title,subtitle,color,dataLabel}) => (
  <div style={{marginBottom:16,paddingBottom:12,borderBottom:"1px solid "+C.border}}>
    <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
      <div style={{width:3,height:18,borderRadius:2,background:color||C.accent}}/>
      <span style={{fontSize:FONT.h3,fontWeight:700,letterSpacing:0.5}}>{title}</span>
      {dataLabel}
    </div>
    {subtitle&&<div style={{fontSize:FONT.small,color:C.textDim,marginTop:4,marginLeft:11}}>{subtitle}</div>}
  </div>
);

const DataLabel = ({kind}) => {
  const cfg = {
    observed: { bg: C.reduction + "18", color: C.reduction, text: "Observed" },
    derived: { bg: C.drone + "18", color: C.drone, text: "Derived" },
    model: { bg: C.accent + "18", color: C.accent, text: "Model" },
  };
  const x = cfg[kind] || cfg.observed;
  return <span style={{fontSize:FONT.small,fontWeight:700,letterSpacing:0.8,padding:"2px 8px",borderRadius:4,fontFamily:"'JetBrains Mono',monospace",background:x.bg,color:x.color,border:"1px solid "+x.color+"35"}}>{x.text}</span>;
};

const FreshnessBadge = ({dataArray, dayField="day", dateField="date", label, warDay, color}) => {
  if (!dataArray || !dataArray.length) return null;
  const maxEntry = dataArray.reduce((a,b) => ((b[dayField]||0) > (a[dayField]||0) ? b : a), dataArray[0]);
  const lastDay = maxEntry[dayField] || 0;
  const lastDate = maxEntry[dateField] || "Unknown";
  const lag = (warDay || 0) - lastDay;
  const isStale = lag > 2;
  const style = {
    display:"inline-flex",alignItems:"center",gap:6,
    fontSize:11,fontFamily:"'JetBrains Mono',monospace",
    padding:"3px 10px",borderRadius:4,
    background: isStale ? (C.peak||"#991b1b")+"12" : (C.reduction||"#166534")+"12",
    color: isStale ? (C.peak||"#991b1b") : (C.reduction||"#166534"),
    border: "1px solid " + (isStale ? (C.peak||"#991b1b")+"30" : (C.reduction||"#166534")+"20"),
  };
  return React.createElement("span", {style},
    (label ? label + " " : "") + "as of Day " + lastDay + " (" + lastDate + ")" +
    (isStale ? " · " + lag + "d behind" : " · current")
  );
};

const BriefingPanel = ({briefings, color, activeBriefing, setActiveBriefing}) => {
  const entries = Object.entries(briefings);
  const activeKey = activeBriefing || entries[0]?.[0] || null;
  const b = activeKey ? briefings[activeKey] : null;
  const shortLabel = (br) => {
    const t = br.title || "";
    const dash = t.indexOf("—"); const colon = t.indexOf(":");
    const cut = dash > 0 ? dash : colon > 0 ? colon : 0;
    const short = cut > 0 ? t.slice(0, cut).trim() : (t.length > 28 ? t.slice(0, 26) + "…" : t);
    return short;
  };
  return (
    <div>
      <div style={{display:"flex",gap:4,marginBottom:16,flexWrap:"wrap"}}>
        {entries.map(([k, br]) => (
          <button key={k} type="button" onClick={()=>setActiveBriefing(k)} style={{
            padding:"7px 14px",fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",
            background:activeKey===k?color+"18":"transparent",color:activeKey===k?color:C.textMuted,
            border:"1px solid "+(activeKey===k?color+"50":"rgba(255,255,255,0.25)"),borderRadius:5,cursor:"pointer",letterSpacing:0.5,
            transition:"all 0.15s"
          }}>{shortLabel(br)}</button>
        ))}
      </div>
      {b && (
        <div style={{animation:"fadeIn 0.2s ease"}}>
          <SectionHeader title={b.id+" — "+b.title} color={color} dataLabel={<DataLabel kind="model"/>}/>
          <div style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:16,marginBottom:16}}>
            <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.75}}>{b.execSummary}</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:8,marginBottom:16}}>
            {(Array.isArray(b.kpis)?b.kpis:[]).map((x,i) => (
              <div key={i} style={{background:C.surface,border:"1px solid "+C.border,borderRadius:6,padding:"10px 12px",borderTop:"2px solid "+color}}>
                <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.8,textTransform:"uppercase",marginBottom:4}}>{x.k}</div>
                <div style={{fontSize:FONT.h3,fontWeight:800,color:color,fontFamily:"'JetBrains Mono',monospace",lineHeight:1}}>{x.v}</div>
              </div>
            ))}
          </div>
          {Array.isArray(b.keyFindings) && b.keyFindings.length > 0 && (
            <div style={{background:C.surface,border:"1px solid "+C.border,borderRadius:8,padding:16,marginBottom:16}}>
              <SectionHeader title="KEY FINDINGS" color={color}/>
              {b.keyFindings.map((f,i) => (
                <div key={i} style={{display:"flex",gap:8,marginBottom:10,lineHeight:1.6}}>
                  <span style={{fontSize:FONT.table,fontWeight:800,color:color,fontFamily:"'JetBrains Mono',monospace",flexShrink:0}}>{i+1}.</span>
                  <span style={{fontSize:FONT.label,color:C.textMuted}}>{f}</span>
                </div>
              ))}
            </div>
          )}
          {b.detailedSections && b.detailedSections.length > 0 && (
            <DetailedAccordion sections={b.detailedSections} color={color}/>
          )}
        </div>
      )}
    </div>
  );
};

const DetailedAccordion = ({sections, color}) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const [openIdx, setOpenIdx] = React.useState(null);
  return (
    <div style={{marginTop:16}}>
      <button type="button" onClick={()=>{setShowDetail(!showDetail);setOpenIdx(null);}} style={{
        padding:"6px 14px",fontSize:FONT.small,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",
        background:showDetail?color+"18":"transparent",color:showDetail?color:C.textDim,
        border:"1px solid "+(showDetail?color+"40":C.border),borderRadius:5,cursor:"pointer",letterSpacing:0.4,
      }}>{showDetail?"Hide detailed analysis":"Show detailed analysis"} ({sections.length} sections)</button>
      {showDetail && (
        <div style={{marginTop:12}}>
          {sections.map((sec,i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} style={{marginBottom:4}}>
                <button type="button" onClick={()=>setOpenIdx(isOpen?null:i)} style={{
                  width:"100%",textAlign:"left",padding:"10px 14px",
                  background:isOpen?C.surfaceAlt:C.surface,
                  border:"1px solid "+(isOpen?color+"30":C.border),
                  borderRadius:isOpen?"6px 6px 0 0":"6px",
                  cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",
                  color:isOpen?color:C.text,fontFamily:"'DM Sans',sans-serif",fontSize:FONT.table,fontWeight:isOpen?700:600,
                }}>
                  <span>{sec.heading}</span>
                  <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",transition:"transform 0.2s",transform:isOpen?"rotate(180deg)":"rotate(0)"}}>{"\u25BC"}</span>
                </button>
                {isOpen && (
                  <div style={{padding:"12px 16px",background:C.surfaceAlt,border:"1px solid "+color+"20",borderTop:"none",borderRadius:"0 0 6px 6px",animation:"fadeIn 0.15s ease"}}>
                    <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.7}}>{sec.content}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// Expanded-by-default version of DetailedAccordion — each section shown open with individual collapse toggles
const DetailedSectionsOpen = ({sections, color, lightMode}) => {
  const [collapsed, setCollapsed] = React.useState({});
  const toggle = (i) => setCollapsed(prev => ({...prev, [i]: !prev[i]}));
  // Light mode palette for professional off-white theme
  const L = lightMode ? {
    surface:"#ffffff",
    surfaceAlt:"#f3f1ed",
    border:"#ddd9d4",
    text:"#1a1a2e",
    textMuted:"#3d4551",
    textDim:"#6b7280"
  } : {
    surface:C.surface,
    surfaceAlt:C.surfaceAlt,
    border:C.border,
    text:C.text,
    textMuted:C.textMuted,
    textDim:C.textDim
  };
  return (
    <div style={{marginTop:12}}>
      {sections.map((sec,i) => {
        const isOpen = !collapsed[i];
        return (
          <div key={i} style={{marginBottom:4}}>
            <button type="button" onClick={()=>toggle(i)} style={{
              width:"100%",textAlign:"left",padding:"10px 14px",
              background:isOpen?L.surfaceAlt:L.surface,
              border:"1px solid "+(isOpen?color+"30":L.border),
              borderRadius:isOpen?"6px 6px 0 0":"6px",
              cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",
              color:isOpen?color:L.text,fontFamily:"'DM Sans',sans-serif",fontSize:FONT.table,fontWeight:isOpen?700:600,
            }}>
              <span>{sec.heading}</span>
              <span style={{fontSize:FONT.small,color:L.textDim,fontFamily:"'JetBrains Mono',monospace",transition:"transform 0.2s",transform:isOpen?"rotate(180deg)":"rotate(0)"}}>{"\u25BC"}</span>
            </button>
            {isOpen && (
              <div style={{padding:"12px 16px",background:L.surfaceAlt,border:"1px solid "+color+"20",borderTop:"none",borderRadius:"0 0 6px 6px"}}>
                <div style={{fontSize:FONT.label,color:L.textMuted,lineHeight:1.7}}>{sec.content}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// Inline briefing panel — renders ALL briefings vertically, each individually collapsible (expanded by default)
const BriefingPanelInline = ({briefings, color}) => {
  const entries = Object.entries(briefings);
  const [collapsed, setCollapsed] = React.useState({});
  const toggle = (k) => setCollapsed(prev => ({...prev, [k]: !prev[k]}));
  return (
    <div>
      {entries.map(([k, b]) => {
        const isOpen = !collapsed[k];
        return (
          <div key={k} style={{marginBottom:20,border:"1px solid "+(isOpen?color+"30":C.border),borderRadius:8,overflow:"hidden"}}>
            <button type="button" onClick={()=>toggle(k)} style={{
              width:"100%",textAlign:"left",padding:"14px 18px",
              background:isOpen?color+"0c":C.surface,
              border:"none",borderBottom:isOpen?"1px solid "+color+"20":"none",
              cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",
            }}>
              <div>
                <span style={{fontSize:FONT.table,fontWeight:800,color:isOpen?color:C.text,fontFamily:"'DM Sans',sans-serif"}}>{b.id} — {b.title}</span>
                <span style={{fontSize:FONT.small,marginLeft:8,padding:"2px 6px",borderRadius:3,background:C.reduction+"18",color:C.reduction,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>Model</span>
              </div>
              <span style={{fontSize:FONT.table,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",transition:"transform 0.2s",transform:isOpen?"rotate(180deg)":"rotate(0)"}}>{"\u25BC"}</span>
            </button>
            {isOpen && (
              <div style={{padding:"16px 18px",background:C.bg}}>
                <div style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:16,marginBottom:16}}>
                  <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.75}}>{b.execSummary}</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:8,marginBottom:16}}>
                  {(Array.isArray(b.kpis)?b.kpis:[]).map((x,i) => (
                    <div key={i} style={{background:C.surface,border:"1px solid "+C.border,borderRadius:6,padding:"10px 12px",borderTop:"2px solid "+color}}>
                      <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.8,textTransform:"uppercase",marginBottom:4}}>{x.k}</div>
                      <div style={{fontSize:FONT.h3,fontWeight:800,color:color,fontFamily:"'JetBrains Mono',monospace",lineHeight:1}}>{x.v}</div>
                    </div>
                  ))}
                </div>
                {Array.isArray(b.keyFindings) && b.keyFindings.length > 0 && (
                  <div style={{background:C.surface,border:"1px solid "+C.border,borderRadius:8,padding:16,marginBottom:16}}>
                    <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:color,fontFamily:"'JetBrains Mono',monospace",marginBottom:10}}>KEY FINDINGS</div>
                    {b.keyFindings.map((f,i) => (
                      <div key={i} style={{display:"flex",gap:8,marginBottom:10,lineHeight:1.6}}>
                        <span style={{fontSize:FONT.table,fontWeight:800,color:color,fontFamily:"'JetBrains Mono',monospace",flexShrink:0}}>{i+1}.</span>
                        <span style={{fontSize:FONT.label,color:C.textMuted}}>{f}</span>
                      </div>
                    ))}
                  </div>
                )}
                {b.detailedSections && b.detailedSections.length > 0 && (
                  <DetailedSectionsOpen sections={b.detailedSections} color={color}/>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// Tabbed briefing panel — shows sub-tab buttons + single selected briefing with details expanded
const BriefingTabbed = ({briefings, color, activeKey, onSelect, lightMode}) => {
  const entries = Object.entries(briefings);
  const b = briefings[activeKey];
  // Light mode palette for professional off-white theme
  const L = lightMode ? {
    bg:"#faf9f7",
    surface:"#ffffff",
    surfaceAlt:"#f3f1ed",
    border:"#ddd9d4",
    borderLight:"#e8e4df",
    text:"#1a1a2e",
    textMuted:"#3d4551",
    textDim:"#6b7280"
  } : {
    bg:C.bg,
    surface:C.surface,
    surfaceAlt:C.surfaceAlt,
    border:C.border,
    borderLight:C.borderLight,
    text:C.text,
    textMuted:C.textMuted,
    textDim:C.textDim
  };
  return (
    <div>
      <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap"}}>
        {entries.map(([k, br]) => (
          <button key={k} type="button" onClick={()=>onSelect(k)} style={{
            padding:"8px 16px",borderRadius:6,
            border:activeKey===k?(lightMode?"2px solid "+color:"1px solid "+color+"50"):(lightMode?"1px solid #c8c4bf":"1px solid rgba(255,255,255,0.25)"),
            background:activeKey===k?(lightMode?color:color+"18"):(lightMode?"#ffffff":"transparent"),
            color:activeKey===k?(lightMode?"#ffffff":color):L.textMuted,
            fontSize:FONT.label,fontWeight:700,cursor:"pointer",
            fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.5,transition:"all 0.15s",
            boxShadow:activeKey===k&&lightMode?"0 2px 8px "+color+"40":"none"
          }} title={br.execSummary ? br.execSummary.slice(0,120)+"…" : ""}>
            {br.title}
          </button>
        ))}
      </div>
      {b && (
        <div style={{border:"1px solid "+color+"30",borderRadius:8,overflow:"hidden"}}>
          <div style={{padding:"14px 18px",background:lightMode?color+"08":color+"0c",borderBottom:"1px solid "+color+"20",display:"flex",alignItems:"center",gap:8}}>
            <span style={{fontSize:FONT.table,fontWeight:800,color:color,fontFamily:"'DM Sans',sans-serif"}}>{b.title}</span>
            <span style={{fontSize:FONT.small,padding:"2px 6px",borderRadius:3,background:lightMode?"#b91c1c1a":"#10b9811a",color:lightMode?"#b91c1c":"#10b981",fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>Model</span>
          </div>
          <div style={{padding:"16px 18px",background:L.bg}}>
            <div style={{background:L.surfaceAlt,border:"1px solid "+L.border,borderRadius:8,padding:16,marginBottom:16}}>
              <div style={{fontSize:FONT.label,color:L.textMuted,lineHeight:1.75}}>{b.execSummary}</div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:8,marginBottom:16}}>
              {(Array.isArray(b.kpis)?b.kpis:[]).map((x,i) => (
                <div key={i} style={{background:L.surface,border:"1px solid "+L.border,borderRadius:6,padding:"10px 12px",borderTop:"2px solid "+color}}>
                  <div style={{fontSize:FONT.small,color:L.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.8,textTransform:"uppercase",marginBottom:4}}>{x.k}</div>
                  <div style={{fontSize:FONT.h3,fontWeight:800,color:color,fontFamily:"'JetBrains Mono',monospace",lineHeight:1}}>{x.v}</div>
                </div>
              ))}
            </div>
            {Array.isArray(b.keyFindings) && b.keyFindings.length > 0 && (
              <div style={{background:L.surface,border:"1px solid "+L.border,borderRadius:8,padding:16,marginBottom:16}}>
                <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:color,fontFamily:"'JetBrains Mono',monospace",marginBottom:10}}>KEY FINDINGS</div>
                {b.keyFindings.map((f,i) => (
                  <div key={i} style={{display:"flex",gap:8,marginBottom:10,lineHeight:1.6}}>
                    <span style={{fontSize:FONT.table,fontWeight:800,color:color,fontFamily:"'JetBrains Mono',monospace",flexShrink:0}}>{i+1}.</span>
                    <span style={{fontSize:FONT.label,color:L.textMuted}}>{f}</span>
                  </div>
                ))}
              </div>
            )}
            {b.detailedSections && b.detailedSections.length > 0 && (
              <DetailedSectionsOpen sections={b.detailedSections} color={color} lightMode={lightMode}/>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════
// SHARED STYLE CONSTANTS (hoisted to avoid re-creation in render functions)
// ═══════════════════════════════════════════

const S_CARD = {background:C.surface,border:"1px solid "+C.border,borderRadius:8,padding:20,marginBottom:16};
const S_CARD_LG = Object.assign({}, S_CARD, {marginBottom:20});
const S_TH = {padding:"8px 10px",textAlign:"left",borderBottom:"2px solid "+C.borderLight,color:C.textDim,fontSize:FONT.small,fontWeight:700,letterSpacing:1,textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"};
const S_TD = {padding:"9px 10px",fontSize:FONT.label,borderBottom:"1px solid "+C.border};
const S_BTN_BASE = {padding:"10px 20px",borderRadius:6,fontSize:FONT.table,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",border:"none",letterSpacing:0.5};
const MKT_CYAN = C.cyan;
const ATK_ORANGE = C.orange;

// ─── BREADCRUMB COMPONENT ───
const Breadcrumb = ({activeTab, iranSubTab, onNavigate}) => {
  const parts = [];
  if (OVERVIEW_SUBS && OVERVIEW_SUBS.includes && OVERVIEW_SUBS.includes(activeTab)) {
    parts.push({label:"Gulf Countries", onClick:()=>onNavigate("Gulf Countries")});
    parts.push({label:activeTab});
  } else if (activeTab === "Iran" && iranSubTab) {
    parts.push({label:"⚔ Iran", onClick:()=>onNavigate("Iran")});
    const subLabels = Object.fromEntries(IRAN_SUBTABS.map(t=>[t.k, t.l]));
    parts.push({label:subLabels[iranSubTab]||iranSubTab});
  } else {
    parts.push({label:activeTab});
  }
  if (parts.length <= 1) return null;
  return (
    <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:3}}>
      {parts.map((p,i) => (
        <span key={i}>
          {i > 0 && <span style={{margin:"0 4px"}}>›</span>}
          {p.onClick ? <span style={{cursor:"pointer",color:C.accent}} role="button" tabIndex={0} onClick={p.onClick} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();p.onClick();}}}>{p.label}</span> : <span style={{color:C.text}}>{p.label}</span>}
        </span>
      ))}
    </div>
  );
};

// ═══════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════

const TAB_ROWS = [
  ["War Room","Gulf Countries","Economics","Markets","Casualties","Analytics"],
  ["UAE","Qatar","Bahrain","Saudi","Kuwait","Oman","Iraq"],
  ["Iran","US","Israel","Map","Sources","Requests"],
];
const TABS = TAB_ROWS.flat();
const ALL_TABS = [...TABS, "Ingest", "Timeline"];
const PRIMARY_TABS = ["War Room","Gulf Countries","Economics","Markets","Casualties","Analytics","Sources"];
const OVERVIEW_SUBS = ["UAE","Qatar","Bahrain","Saudi","Kuwait","Oman","Iraq","Map"];
const ROW2_TABS = ["Iran","US","Israel"];
const TAB_COLOR_FN = (t) => ({"War Room":"#ef4444","Gulf Countries":C.text,Overview:C.text,Economics:C.reduction,Markets:C.cyan,Casualties:C.ballistic,UAE:C.text,Qatar:C.text,Bahrain:C.text,Saudi:C.text,Kuwait:C.text,Iran:C.orange,US:C.blue,Israel:"#60a5fa",Analytics:C.magenta,Map:C.sea,Sources:C.drone,Requests:C.purple,Oman:C.text,Iraq:C.text}[t]||C.text);
const TAB_ICON_FN = (t) => ({"War Room":"⚡","Gulf Countries":"🌍",Economics:"◆",Markets:"◆",Casualties:"✝",Iran:"⚔",US:"★",Israel:"✡",Analytics:"✨",Map:"◉",Sources:"📚",Requests:"💬"}[t]||"");

// ─── IRAN SUBTAB DEFINITIONS (module scope for reuse by Breadcrumb + Hamburger) ───
const IRAN_SUBTABS = [
  {k:"claims", l:"IRGC Claims"},
  {k:"wpn", l:"Weapons"},
  {k:"disinfo", l:"Disinfo"},
  {k:"inventory", l:"Defense Inventory"},
  {k:"depletion", l:"Interceptor Depletion"},
  {k:"capacity", l:"Offensive Capacity"},
  {k:"epicfury", l:"Epic Fury"},
  {k:"calculus", l:"Strategic Calculus"},
];

// ─────────────────────────────────────────────
// PROVENANCE CHAIN COMPONENT
// ─────────────────────────────────────────────
const ProvenanceChain = ({pKey, onClose}) => {
  const prov = PROVENANCE[pKey];
  if (!prov) return null;
  const [country, day] = pKey.split(/-(?=\d)/);
  const roleColor = {primary:C.reduction, corroborate:C.cruise, dispute:C.peak};
  const roleLabel = {primary:"Primary", corroborate:"Corroborate", dispute:"Dispute"};
  const allSrcIds = [
    ...(prov.primary||[]).map(id=>({id,role:"primary"})),
    ...(prov.corroborate||[]).map(id=>({id,role:"corroborate"})),
    ...(prov.dispute||[]).map(id=>({id,role:"dispute"})),
  ];
  return (
    <div style={{background:C.surfaceAlt,border:"1px solid "+C.accent+"40",borderRadius:8,padding:16,marginTop:8,animation:"fadeIn 0.2s ease"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
        <div style={{fontSize:FONT.table,fontWeight:700,color:C.accent,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>SOURCE CHAIN — {country.toUpperCase()} · DAY {day}</div>
        <button onClick={onClose} aria-label="Close" style={{background:"transparent",border:"none",color:C.textDim,cursor:"pointer",fontSize:FONT.body,padding:"0 4px"}}>✕</button>
      </div>
      {/* Raw claim */}
      <div style={{background:C.bg,border:"1px solid "+C.borderLight,borderRadius:6,padding:10,marginBottom:12}}>
        <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:4}}>RAW CLAIM (as stated)</div>
        <div style={{fontSize:FONT.small,color:C.textMuted,lineHeight:1.7,fontFamily:"'JetBrains Mono',monospace"}}>{prov.rawClaim}</div>
      </div>
      {/* Derivation */}
      {prov.derivation && (
        <div style={{background:C.accentBg,border:"1px solid "+C.accent+"20",borderRadius:6,padding:10,marginBottom:12}}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,color:C.accent,fontFamily:"'JetBrains Mono',monospace",marginBottom:4}}>DERIVATION LOGIC</div>
          <div style={{fontSize:FONT.small,color:C.textMuted,lineHeight:1.7}}>{prov.derivation}</div>
        </div>
      )}
      {/* Source chain */}
      <div style={{borderLeft:"2px solid "+C.borderLight,paddingLeft:12,marginBottom:12}}>
        {allSrcIds.map(({id,role},i) => {
          const src = SOURCE_INDEX[id];
          if (!src) return null;
          return (
            <div key={i} style={{marginBottom:10,position:"relative"}}>
              <div style={{position:"absolute",left:-17,top:6,width:8,height:8,borderRadius:"50%",background:roleColor[role]}}/>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:3}}>
                <span style={{fontSize:FONT.small,fontWeight:700,padding:"1px 6px",borderRadius:3,background:roleColor[role]+"18",color:roleColor[role],fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.5}}>{roleLabel[role].toUpperCase()}</span>
                <span style={{fontSize:FONT.label,fontWeight:700,color:C.text}}>{src.name}</span>
                {src.url && <a href={src.url} target="_blank" rel="noopener" style={{fontSize:FONT.small,color:C.accent,textDecoration:"none",marginLeft:"auto"}}>↗ Link</a>}
              </div>
              <div style={{fontSize:FONT.small,color:C.textDim,lineHeight:1.5}}>{src.desc}</div>
            </div>
          );
        })}
      </div>
      {/* Downstream affects */}
      {prov.affects && prov.affects.length > 0 && (
        <div>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:6}}>AFFECTS DOWNSTREAM</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
            {prov.affects.map((a,i)=>(
              <span key={i} style={{fontSize:FONT.small,padding:"2px 8px",borderRadius:4,background:C.surfaceAlt,border:"1px solid "+C.border,color:C.textMuted}}>{a}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function WarTracker({ initialTab = "War Room", embedded = false }) {
  // URL-based tab detection — the URL is the source of truth, not props
  // Props may fail to serialize on Cloudflare Workers; URL is always correct
  const getTabFromURL = () => {
    if (typeof window === 'undefined') return initialTab;
    const path = window.location.pathname.replace(/\/$/, '');
    const tabMap = {
      '/dashboard': 'War Room',
      '/dashboard/gulf': 'Gulf Countries',
      '/dashboard/economics': 'Economics',
      '/dashboard/markets': 'Markets',
      '/dashboard/casualties': 'Casualties',
      '/dashboard/iran': 'Iran',
      '/dashboard/us': 'US',
      '/dashboard/israel': 'Israel',
      '/dashboard/analytics': 'Analytics',
      '/dashboard/sources': 'Sources',
    };
    return tabMap[path] || initialTab;
  };
  const [activeTab, setActiveTab] = useState(getTabFromURL());
  const [hoveredRow, setHoveredRow] = useState(null);
  const [analyticsSubTab, setAnalyticsSubTab] = useState("scenario");
  const [analyticsRange, setAnalyticsRange] = useState(30); // 30, 60, or 0 (all)
  const [econSubTab, setEconSubTab] = useState("fdi");
  const [mktSubTab, setMktSubTab] = useState("tour");
  const [advSubTab, setAdvSubTab] = useState("a");
  const [usSection, setUsSection] = useState(null);
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [glossarySearch, setGlossarySearch] = useState("");
  const [leakerShowAll, setLeakerShowAll] = useState(false);
  const [expandedSource, setExpandedSource] = useState(null);
  const [provenanceKey, setProvenanceKey] = useState(null);
  const [provVer, setProvVer] = useState(PROVENANCE_VERSION); // tracks provenance mutations for useMemo
  const [sourcesView, setSourcesView] = useState("feeder");
  const [selectedSourceId, setSelectedSourceId] = useState(null);
  const [matrixCountry, setMatrixCountry] = useState("UAE");
  const [feederFilter, setFeederFilter] = useState("all");
  const [ingestText, setIngestText] = useState("");
  const [ingestCountry, setIngestCountry] = useState("UAE");
  const [ingestResult, setIngestResult] = useState(null);
  const [ingestLoading, setIngestLoading] = useState(false);
  const [ingestError, setIngestError] = useState(null);
  const [aiApiKey, setAiApiKey] = useState(() => { try { return sessionStorage.getItem("iwt_apikey") || ""; } catch(e) { return ""; } });
  const [showApiKey, setShowApiKey] = useState(false);
  const [iwtServerOk, setIwtServerOk] = useState(false);
  const [ingestDiffRow, setIngestDiffRow] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [ingestMode, setIngestMode] = useState("scan");
  const [scanSinceDay, setScanSinceDay] = useState(null); // null = auto-detect
  const [scanDryRun, setScanDryRun] = useState(false);
  // ─── Intel Console state ───
  const [intelSession, setIntelSession] = useState(null);
  const [intelProviders, setIntelProviders] = useState([]);
  const [intelLoading, setIntelLoading] = useState(false);
  const [intelScope, setIntelScope] = useState("economics_full");
  const [intelSelectedProviders, setIntelSelectedProviders] = useState(["claude","gemini","codex"]);
  const [intelResults, setIntelResults] = useState(null);
  const [intelApproved, setIntelApproved] = useState({});
  const [articleText, setArticleText] = useState("");
  const [articleResults, setArticleResults] = useState(null);
  const [articleLoading, setArticleLoading] = useState(false);
  const [scanResults, setScanResults] = useState(null);
  const [scanLoading, setScanLoading] = useState(false);
  const [scanCountries, setScanCountries] = useState(["UAE","Qatar","Bahrain","Saudi","Kuwait","Oman","Iraq"]);
  const [scanScopes, setScanScopes] = useState(["countries","economics_full","markets_shipping","iran_full","us_israel","sources_glossary"]);
  const [scanApproved, setScanApproved] = useState({});
  const [globalScanResults, setGlobalScanResults] = useState(null);
  const [verifierAfterScan, setVerifierAfterScan] = useState(true);
  const [verifierLoading, setVerifierLoading] = useState(false);
  const [verifierResults, setVerifierResults] = useState({});
  const [forceApplyDespiteVerifier, setForceApplyDespiteVerifier] = useState(false);
  const [applyLoading, setApplyLoading] = useState(false);
  const [applySuccess, setApplySuccess] = useState(null);
  const [applyHistory, setApplyHistory] = useState(() => { try { return JSON.parse(sessionStorage.getItem("iwt_apply_history") || "[]"); } catch(e) { return []; } });
  const [backups, setBackups] = useState([]);
  const [backupsLoading, setBackupsLoading] = useState(false);
  const [briefingRefreshLoading, setBriefingRefreshLoading] = useState(false);
  const [briefingRefreshResult, setBriefingRefreshResult] = useState(null);
  const [fileUpdateAvailable, setFileUpdateAvailable] = useState(false);
  const fileMtimeRef = useRef(null);
  // lifted from render fns
  const [tlCell, setTlCell] = useState(null);
  const tlGridRef = useRef(null);
  const [tlFilter, setTlFilter] = useState("total");
  const [mapFilter, setMapFilter] = useState("all");
  const [mapHov, setMapHov] = useState(null);
  const [selEv, setSelEv] = useState(null);
  const [mapDay, setMapDay] = useState(21);
  const [mapTargetType, setMapTargetType] = useState("all");
  const [mapShowNaval, setMapShowNaval] = useState(true);
  const [mapZoom, setMapZoom] = useState(1);
  const [mapPan, setMapPan] = useState({x:0, y:0});
  const mapDragRef = useRef(null);
  const [casFilter, setCasFilter] = useState("all");
  // War Room state (lifted)
  const [wrExpandedId, setWrExpandedId] = useState(null);
  const [wrSectorFilter, setWrSectorFilter] = useState("All");
  const [casSubTab, setCasSubTab] = useState("overview"); // overview | heatmap | phases
  const [iranSubTab, setIranSubTab] = useState("claims"); // claims, wpn, disinfo, inventory, depletion, capacity, epicfury, calculus
  const [stkScen, setStkScen] = useState("est");
  const [intAdj, setIntAdj] = useState(0);
  const [volAdj, setVolAdj] = useState(0);
  const [extDays, setExtDays] = useState(14);
  const [wpnMix, setWpnMix] = useState("current");
  const [phFilter, setPhFilter] = useState("all");
  // Requests / blog state
  const [blogMessages, setBlogMessages] = useState([]);
  const [blogAuthor, setBlogAuthor] = useState(() => { try { return localStorage.getItem("iwt_blog_author") || ""; } catch(e) { return ""; } });
  const [blogText, setBlogText] = useState("");
  const [blogLoading, setBlogLoading] = useState(false);
  const [blogError, setBlogError] = useState(null);
  const [blogPosting, setBlogPosting] = useState(false);
  // Admin auth state — check localStorage first (persistent "Remember me"), then sessionStorage (tab-scoped)
  const [adminToken, setAdminToken] = useState(() => { try { return localStorage.getItem("iwt_admin_token") || sessionStorage.getItem("iwt_admin_token") || ""; } catch(e) { return ""; } });
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [adminPw, setAdminPw] = useState("");
  const [adminError, setAdminError] = useState("");
  const [adminLogging, setAdminLogging] = useState(false);
  const [adminRemember, setAdminRemember] = useState(() => { try { return !!localStorage.getItem("iwt_admin_token"); } catch(e) { return false; } });
  const [adminRequired, setAdminRequired] = useState(false);
  const [serverHasApiKey, setServerHasApiKey] = useState(false);
  const [ingestProvider, setIngestProvider] = useState('gemini');

  const uaeStats = useMemo(()=>({B:computeStats(UAE_DATA,"B"),C:computeStats(UAE_DATA,"C"),U:computeStats(UAE_DATA,"U")}),[]);
  const qatarStats = useMemo(()=>({B:computeStats(QATAR_DATA,"B"),U:computeStats(QATAR_DATA,"U")}),[]);
  const bahrainStats = useMemo(()=>({dB:computeStats(BAHRAIN_DATA.filter(d=>d.dB!=null),"dB"),dU:computeStats(BAHRAIN_DATA.filter(d=>d.dU!=null),"dU")}),[]);
  const saudiStats = useMemo(()=>({B:computeStats(SAUDI_DATA,"B"),U:computeStats(SAUDI_DATA,"U")}),[]);
  const uaeMA3U = useMemo(()=>computeMovingAvg(UAE_DATA,"U",3),[]);
  const uaeMA7U = useMemo(()=>computeMovingAvg(UAE_DATA,"U",7),[]);

  const dataHealth = useMemo(() => validateData(), []);
  // War day: read max across ALL 7 country arrays (not just UAE)
  const warDayRef = useMemo(() => Math.max(
    ...UAE_DATA.map(d => d.day),
    ...QATAR_DATA.map(d => d.day),
    ...BAHRAIN_DATA.map(d => d.day),
    ...SAUDI_DATA.map(d => d.day),
    ...KUWAIT_DATA.map(d => d.day),
    ...(OMAN_DATA||[]).map(d => d.day||0),
    ...(IRAQ_DATA||[]).map(d => d.day||0),
    1
  ), []);
  // Calendar-based war day (primary display); data lag indicator
  const todayWarDay = useMemo(() => {
    const warStart = Date.UTC(2026, 1, 27); // Feb 27, 2026
    return Math.max(1, Math.floor((Date.now() - warStart) / 86400000));
  }, []);
  const warDayLag = todayWarDay - warDayRef;
  const warDayDate = useMemo(() => {
    const d = new Date(2026, 1, 27 + warDayRef);
    return d.toLocaleDateString("en-US", {month:"short", day:"numeric"});
  }, [warDayRef]);
  // New state for UI redesign
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [metaBadgeOpen, setMetaBadgeOpen] = useState(false);
  const stockpileRemaining = useMemo(() => {
    const totalBMFired = UAE_DATA.reduce((s,d)=>s+(d.B||0),0) + QATAR_DATA.reduce((s,d)=>s+(d.B||0),0) + BAHRAIN_DATA.filter(d=>d.dB!=null).reduce((s,d)=>s+(d.dB||0),0) + SAUDI_DATA.reduce((s,d)=>s+(d.B||0),0) + KUWAIT_DATA.reduce((s,d)=>s+(d.B||0),0);
    const totalDronesFired = UAE_DATA.reduce((s,d)=>s+(d.U||0),0) + QATAR_DATA.reduce((s,d)=>s+(d.U||0),0) + BAHRAIN_DATA.filter(d=>d.dU!=null).reduce((s,d)=>s+(d.dU||0),0) + SAUDI_DATA.reduce((s,d)=>s+(d.U||0),0) + KUWAIT_DATA.reduce((s,d)=>s+(d.U||0),0);
    const totalCMFired = UAE_DATA.reduce((s,d)=>s+(d.C||0),0) + QATAR_DATA.reduce((s,d)=>s+(d.C||0),0);
    return {
      bm: { fired: totalBMFired, remaining: Math.max(0, _STOCKPILE.mrbm.est + _STOCKPILE.srbm.est - totalBMFired) },
      drones: { fired: totalDronesFired, remaining: Math.max(0, _STOCKPILE.drone.est - totalDronesFired) },
      cruise: { fired: totalCMFired, remaining: Math.max(0, _STOCKPILE.cruise.est - totalCMFired) },
    };
  }, []);
  const { SOURCE_ROWS: sourceRows, SOURCE_IMPACT: sourceImpact } = useMemo(() => buildSourceMaps(PROVENANCE), [provVer]);
  const summaryMetrics = useMemo(() => {
    // Compute UAE totals from UAE_DATA array
    const uaeTotalB = UAE_DATA.reduce((s, d) => s + (d.B || 0), 0);
    const uaeTotalC = UAE_DATA.reduce((s, d) => s + (d.C || 0), 0);
    const uaeTotalU = UAE_DATA.reduce((s, d) => s + (d.U || 0), 0);
    const uaeTotal = uaeTotalB + uaeTotalC + uaeTotalU;
    const uaeLastDate = UAE_DATA.length > 0 ? UAE_DATA[UAE_DATA.length - 1].date : "";

    // Helper to parse killed count from casualty entries
    const parseKilled = (entry) => {
      if (entry.killed !== undefined && entry.killed !== null) return entry.killed;
      if (entry.class === "KIA") {
        const match = (entry.name || "").match(/^(\d+)/);
        if (match) return parseInt(match[1], 10);
        return 1;
      }
      return 0;
    };

    // Sum killed from US_CASUALTIES (class === "KIA")
    const usKilled = US_CASUALTIES.filter(e => e.class === "KIA").reduce((s, e) => s + parseKilled(e), 0);

    // Sum killed from COALITION_CASUALTIES (class === "KIA")
    const coalitionKilled = COALITION_CASUALTIES.filter(e => e.class === "KIA").reduce((s, e) => s + parseKilled(e), 0);

    const killedSum = usKilled + coalitionKilled;

    // Get fmList and fmCount from COUNTRY_SUMMARY (metadata — these don't need dynamic recompute)
    const fmList = COUNTRY_SUMMARY.filter(c => c.forceM && c.forceM !== "None");
    const fmCount = fmList.length;

    // Compute killed per country from casualty arrays
    const countryKilledMap = {};
    US_CASUALTIES.filter(e => e.class === "KIA").forEach(e => {
      const nation = e.nationality || "Unknown";
      countryKilledMap[nation] = (countryKilledMap[nation] || 0) + parseKilled(e);
    });
    COALITION_CASUALTIES.filter(e => e.class === "KIA").forEach(e => {
      const nation = e.nationality || "Unknown";
      countryKilledMap[nation] = (countryKilledMap[nation] || 0) + parseKilled(e);
    });

    // Build killedSub from computed map
    const killedSub = Object.entries(countryKilledMap)
      .filter(([_, count]) => count > 0)
      .map(([nation, count]) => {
        const abbrev = nation.replace(/ .*/, "");
        return `${count} ${abbrev}`;
      })
      .join(" · ");

    const fmSub = fmList.map(c => c.forceM.length > 36 ? c.forceM.slice(0, 34) + "…" : c.forceM).join(" · ");

    return {
      uaeTotal,
      uaeSub: `${uaeTotalB}+ BM · ${uaeTotalC} CM · ${uaeTotalU.toLocaleString()}+ drones · as of ${uaeLastDate}`,
      killedSum,
      killedSub,
      fmCount,
      fmSub,
    };
  }, []);

  const NAME_TO_DATA = { "UAE":"UAE","Qatar":"Qatar","Bahrain":"Bahrain","Saudi Arabia":"Saudi","Kuwait":"Kuwait","Oman":"Oman","Iraq":"Iraq" };

  const headerStaleLines = useMemo(() => {
    const out = [];
    COUNTRY_SUMMARY.forEach(cs => {
      const key = NAME_TO_DATA[cs.name];
      const rows = key && DATA_BY_COUNTRY[key] ? DATA_BY_COUNTRY[key]() : [];
      const lastDay = rows.length ? Math.max(...rows.map(r => r.day)) : 0;
      const lag = warDayRef - lastDay;
      if (cs.cadence && lag > (cs.cadence.overdueAfter || 99)) {
        out.push({ name: cs.name, lag, lastDay });
      }
    });
    return out.slice(0, 4);
  }, [warDayRef]);

  useEffect(() => {
    // When embedded in Astro, the URL path is the source of truth — skip hash parsing entirely
    if (embedded) return;
    const parseHash = () => {
      try {
        const raw = (window.location.hash || "").replace(/^#/, "");
        if (!raw) return;
        const p = new URLSearchParams(raw);
        const tab = p.get("tab");
        if (tab && ALL_TABS.includes(tab)) setActiveTab(tab);
        const as = p.get("analytics");
        if (as && ["mix","ma","intercept","intercepttrend","reconcile","burn","stockpile","scenario","targets"].includes(as)) setAnalyticsSubTab(as);
        const es = p.get("econ");
        if (es && Object.keys(BRIEF_ECON).includes(es)) setEconSubTab(es);
        const ms = p.get("mkt");
        if (ms && Object.keys(BRIEF_MARKETS).includes(ms)) setMktSubTab(ms);
        const ads = p.get("adv");
        if (ads && Object.keys(BRIEF_ADV).includes(ads)) setAdvSubTab(ads);
        const day = p.get("day");
        const country = p.get("country");
        if (day && country) setTlCell(country + "-" + day);
      } catch (e) {}
    };
    parseHash();
    window.addEventListener("hashchange", parseHash);
    return () => window.removeEventListener("hashchange", parseHash);
  }, []);

  useEffect(() => {
    // When embedded in Astro, don't write hash — the URL path is the tab control
    if (embedded) return;
    try {
      const p = new URLSearchParams();
      p.set("tab", activeTab);
      if (activeTab === "Analytics") p.set("analytics", analyticsSubTab);
      if (activeTab === "Economics") p.set("econ", econSubTab);
      if (activeTab === "Markets") p.set("mkt", mktSubTab);
      if (activeTab === "Iran") p.set("adv", advSubTab);
      if (tlCell) {
        const parts = tlCell.split(/-(?=\d+$)/);
        if (parts.length === 2) { p.set("country", parts[0]); p.set("day", parts[1]); }
      }
      const nh = "#" + p.toString();
      if (window.location.hash !== nh) window.location.replace(window.location.pathname + window.location.search + nh);
    } catch (e) {}
  }, [activeTab, analyticsSubTab, econSubTab, mktSubTab, advSubTab, tlCell]);

  useEffect(() => {
    const base = (typeof window !== "undefined" && window.location.protocol !== "file:") ? "" : IWT_BASE;
    fetch(base + "/api/iwt/health", { method: "GET" }).then(r => r.json()).then(d => {
      if (d && d.ok) setIwtServerOk(true);
      if (d && d.adminRequired) setAdminRequired(true);
      if (d && d.hasApiKey) setServerHasApiKey(true);
      if (d && d.ingestProvider) setIngestProvider(d.ingestProvider);
    }).catch(() => {});
    // Check existing admin session token
    if (adminToken) {
      fetch(base + "/api/iwt/admin/status", { headers: { Authorization: "Bearer " + adminToken } })
        .then(r => r.json()).then(d => {
          if (d && d.ok && d.admin) setIsAdmin(true);
          else { setIsAdmin(false); setAdminToken(""); try { sessionStorage.removeItem("iwt_admin_token"); localStorage.removeItem("iwt_admin_token"); } catch(e) {} }
        }).catch(() => {});
    }
  }, [adminToken]);

  // ═══ Live-reload polling — detect when HTML file changes on disk ═══
  useEffect(() => {
    const base = (typeof window !== "undefined" && window.location.protocol !== "file:") ? "" : IWT_BASE;
    // Fetch initial mtime on mount
    fetch(base + "/api/iwt/file-version").then(r => r.json()).then(d => {
      if (d && d.ok) fileMtimeRef.current = d.mtime;
    }).catch(() => {});
    // Poll every 60 seconds
    const iv = setInterval(() => {
      fetch(base + "/api/iwt/file-version").then(r => r.json()).then(d => {
        if (d && d.ok && fileMtimeRef.current !== null && d.mtime !== fileMtimeRef.current) {
          setFileUpdateAvailable(true);
        }
      }).catch(() => {});
    }, 60000);
    return () => clearInterval(iv);
  }, []);

  // Load blog messages when Requests tab is opened + auto-refresh
  const blogApiBase = (typeof window !== "undefined" && window.location.protocol !== "file:") ? "" : IWT_BASE;
  const fetchBlogMessages = useCallback(() => {
    setBlogLoading(true);
    setBlogError(null);
    fetch(blogApiBase + "/api/iwt/blog").then(r => r.json()).then(d => {
      if (d && d.ok) setBlogMessages(d.messages || []);
      else setBlogError("Failed to load messages");
    }).catch(e => setBlogError("Server unavailable — start the server to use Requests")).finally(() => setBlogLoading(false));
  }, [blogApiBase]);

  useEffect(() => {
    if (activeTab !== "Requests") return;
    fetchBlogMessages();
    const iv = setInterval(fetchBlogMessages, 15000);
    return () => clearInterval(iv);
  }, [activeTab, fetchBlogMessages]);

  const postBlogMessage = useCallback(() => {
    if (!blogAuthor.trim() || !blogText.trim()) return;
    setBlogPosting(true);
    setBlogError(null);
    try { localStorage.setItem("iwt_blog_author", blogAuthor.trim()); } catch(e) {}
    fetch(blogApiBase + "/api/iwt/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author: blogAuthor.trim(), text: blogText.trim() }),
    }).then(r => r.json()).then(d => {
      if (d && d.ok) { setBlogText(""); fetchBlogMessages(); }
      else setBlogError(d?.error || "Failed to post");
    }).catch(e => setBlogError("Server unavailable")).finally(() => setBlogPosting(false));
  }, [blogAuthor, blogText, blogApiBase, fetchBlogMessages]);

  const doAdminLogin = useCallback(() => {
    if (!adminPw.trim()) return;
    setAdminLogging(true);
    setAdminError("");
    const base = (typeof window !== "undefined" && window.location.protocol !== "file:") ? "" : IWT_BASE;
    fetch(base + "/api/iwt/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: adminPw.trim() }),
    }).then(r => r.json()).then(d => {
      if (d && d.ok && d.token) {
        setAdminToken(d.token);
        setIsAdmin(true);
        setAdminLoginOpen(false);
        setAdminPw("");
        setActiveTab("Ingest");
        // Persist token: localStorage survives tab/browser close; sessionStorage dies with tab
        try {
          if (adminRemember) { localStorage.setItem("iwt_admin_token", d.token); sessionStorage.removeItem("iwt_admin_token"); }
          else { sessionStorage.setItem("iwt_admin_token", d.token); localStorage.removeItem("iwt_admin_token"); }
        } catch(e) {}
      } else {
        setAdminError(d?.error || "Login failed");
      }
    }).catch(() => setAdminError("Server unavailable")).finally(() => setAdminLogging(false));
  }, [adminPw, adminRemember]);

  const doAdminLogout = useCallback(() => {
    setAdminToken("");
    setIsAdmin(false);
    try { sessionStorage.removeItem("iwt_admin_token"); localStorage.removeItem("iwt_admin_token"); } catch(e) {}
  }, []);

  const TL_KB_COUNTRIES = ["UAE","Qatar","Bahrain","Saudi","Kuwait","Oman","Iraq"];
  const TL_KB_MAXD = 21;
  useEffect(() => {
    if (activeTab !== "Timeline" || !tlCell) return;
    const onKey = (e) => {
      const tag = document.activeElement && document.activeElement.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      const m = tlCell.match(/^(.+)-(\d+)$/);
      if (!m) return;
      let c = m[1], d = parseInt(m[2], 10);
      const ci = TL_KB_COUNTRIES.indexOf(c);
      if (e.key === "ArrowRight") { d = Math.min(TL_KB_MAXD, d + 1); e.preventDefault(); }
      else if (e.key === "ArrowLeft") { d = Math.max(1, d - 1); e.preventDefault(); }
      else if (e.key === "ArrowDown") { if (ci < TL_KB_COUNTRIES.length - 1) { c = TL_KB_COUNTRIES[ci + 1]; e.preventDefault(); } else return; }
      else if (e.key === "ArrowUp") { if (ci > 0) { c = TL_KB_COUNTRIES[ci - 1]; e.preventDefault(); } else return; }
      else if (e.key === "Escape") { setTlCell(null); e.preventDefault(); return; }
      else return;
      setTlCell(c + "-" + d);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeTab, tlCell]);

  const glossaryBtnRef = useRef(null);
  const glossaryContentRef = useRef(null);
  useEffect(() => {
    if (!glossaryOpen) return;
    const t = setTimeout(() => { if (glossaryContentRef.current) glossaryContentRef.current.focus(); }, 50);
    const onKey = (e) => {
      if (e.key === "Escape") { setGlossaryOpen(false); e.preventDefault(); }
    };
    window.addEventListener("keydown", onKey);
    return () => { clearTimeout(t); window.removeEventListener("keydown", onKey); if (glossaryBtnRef.current) glossaryBtnRef.current.focus(); };
  }, [glossaryOpen]);

  const thS = (align) => ({padding:"10px 12px",textAlign:align||"right",borderBottom:"2px solid "+C.borderLight,color:C.textDim,fontSize:FONT.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace",position:"sticky",top:0,background:C.surface,zIndex:2,whiteSpace:"nowrap"});
  const tdS = (extra) => Object.assign({padding:"8px 12px",borderBottom:"1px solid "+C.border,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.table},extra||{});
  const rowBg = (key,idx) => hoveredRow===key?C.accentBg:idx%2===0?"transparent":C.surfaceAlt+"40";

  // ═══════════════════════════════════════════
  // COUNTRY TABLE RENDERERS
  // ═══════════════════════════════════════════

  const renderCountryTable = (data, countryKey, headers, cellRenderer) => {
    const countryMap = {uae:"UAE",qa:"Qatar",bh:"Bahrain",sa:"Saudi",kw:"Kuwait",om:"Oman",iq:"Iraq"};
    const cName = countryMap[countryKey];
    return (
      <div>
        {cName && <DefenseStack country={cName}/>}
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:FONT.h3}}>
            <thead><tr>{headers.map((h,i) => <th key={i} style={thS(i<3?"center":h==="Notes"||h==="Note"?"left":"right")}>{h}</th>)}</tr></thead>
            <tbody>{data.map((row,idx) => cellRenderer(row,idx))}</tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderUAETable = () => {
    const bS=uaeStats.B, uS=uaeStats.U;
    return renderCountryTable(UAE_DATA.slice().reverse(), "uae",
      ["Date","Day","Ph","Ballistic","Cruise","Drones/UAV","Total","Dead(cum)","Inj(cum)","Conf","Src"],
      (row,idx) => {
        const total=(row.B||0)+(row.C||0)+(row.U||0);
        const hasData=row.B!=null||row.C!=null||row.U!=null;
        const k="uae-"+idx;
        const isPeakB=row.B===bS.peak, isPeakU=row.U===uS.peak;
        return (
          <React.Fragment key={idx}>
          <tr onMouseEnter={()=>setHoveredRow(k)} onMouseLeave={()=>setHoveredRow(null)} style={{background:rowBg(k,idx),transition:"background 0.15s"}}>
            <td style={tdS({color:C.text,fontWeight:600,textAlign:"center",whiteSpace:"nowrap"})}>{row.date}</td>
            <td style={tdS({textAlign:"center",color:C.textMuted})}>{row.day}</td>
            <td style={tdS({textAlign:"center"})}><PhaseTag phase={row.phase}/></td>
            <td style={tdS({textAlign:"right",background:isPeakB?C.peakBg:"transparent"})}><div style={{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:4}}><TypeBadge type="B" count={row.B} detected={row.Bd}/>{isPeakB&&<span style={{fontSize:FONT.badge,color:C.peak,fontWeight:800}}>PEAK</span>}</div></td>
            <td style={tdS({textAlign:"right"})}><TypeBadge type="C" count={row.C}/></td>
            <td style={tdS({textAlign:"right",background:isPeakU?C.peakBg:"transparent"})}><div style={{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:4}}><TypeBadge type="U" count={row.U} detected={row.Ud}/>{isPeakU&&<span style={{fontSize:FONT.badge,color:C.peak,fontWeight:800}}>PEAK</span>}</div></td>
            <td style={tdS({textAlign:"right",fontWeight:700,fontSize:FONT.h3,color:hasData?C.text:C.nr})}>{hasData?total:"—"}</td>
            <td style={tdS({textAlign:"right",fontSize:FONT.label,color:row.deaths>0?C.peak:C.textDim})}>{row.deaths!=null?row.deaths:"—"}</td>
            <td style={tdS({textAlign:"right",fontSize:FONT.label,color:C.textMuted})}>{row.inj!=null?row.inj:"—"}</td>
            <td style={tdS({textAlign:"center"})}><ConfBadge conf={row.conf}/></td>
            <td style={tdS({textAlign:"center",padding:"8px 6px"})}>
              {PROVENANCE["UAE-"+row.day] ? (
                <button
                  onClick={()=>setProvenanceKey(provenanceKey==="UAE-"+row.day?null:"UAE-"+row.day)}
                  style={{background:provenanceKey==="UAE-"+row.day?C.accent+"20":"transparent",border:"1px solid "+(provenanceKey==="UAE-"+row.day?C.accent:C.border),borderRadius:4,padding:"2px 6px",cursor:"pointer",fontSize:FONT.small,color:provenanceKey==="UAE-"+row.day?C.accent:C.textDim,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}
                >{PROVENANCE["UAE-"+row.day].dispute&&PROVENANCE["UAE-"+row.day].dispute.length>0?"⚠ SRC":"↳ SRC"}</button>
              ) : <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>—</span>}
            </td>
          </tr>
          {provenanceKey==="UAE-"+row.day && (
            <tr key={"prov-"+idx}>
              <td colSpan={11} style={{padding:"0 12px 12px",borderBottom:"1px solid "+C.border}}>
                <ProvenanceChain pKey={"UAE-"+row.day} onClose={()=>setProvenanceKey(null)}/>
              </td>
            </tr>
          )}
          </React.Fragment>
        );
      }
    );
  };

  // Helper: renders provenance Src cell + expandable row for any country
  const srcCell = (countryName, row, colSpan) => {
    const pKey = countryName + "-" + row.day;
    const prov = PROVENANCE[pKey];
    return {
      td: (
        <td style={tdS({textAlign:"center",padding:"8px 6px"})}>
          {prov ? (
            <button
              onClick={()=>setProvenanceKey(provenanceKey===pKey?null:pKey)}
              style={{background:provenanceKey===pKey?C.accent+"20":"transparent",border:"1px solid "+(provenanceKey===pKey?C.accent:C.border),borderRadius:4,padding:"2px 6px",cursor:"pointer",fontSize:FONT.small,color:provenanceKey===pKey?C.accent:C.textDim,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}
            >{prov.dispute&&prov.dispute.length>0?"⚠ SRC":"↳ SRC"}</button>
          ) : <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>—</span>}
        </td>
      ),
      expansion: provenanceKey===pKey ? (
        <tr key={"prov-"+countryName+"-"+row.day}>
          <td colSpan={colSpan} style={{padding:"0 12px 12px",borderBottom:"1px solid "+C.border}}>
            <ProvenanceChain pKey={pKey} onClose={()=>setProvenanceKey(null)}/>
          </td>
        </tr>
      ) : null,
    };
  };

  const renderQatarTable = () => renderCountryTable(QATAR_DATA.slice().reverse(), "qa",
    ["Date","Day","Ph","Ballistic","Cruise","Drones/UAV","Conf","Src"],
    (row,idx) => {
      const k="qa-"+idx;
      const src = srcCell("Qatar", row, 8);
      return (
        <React.Fragment key={idx}>
        <tr onMouseEnter={()=>setHoveredRow(k)} onMouseLeave={()=>setHoveredRow(null)} style={{background:rowBg(k,idx)}}>
          <td style={tdS({color:C.text,fontWeight:600,textAlign:"center",whiteSpace:"nowrap"})}>{row.date}</td>
          <td style={tdS({textAlign:"center",color:C.textMuted})}>{row.day}</td>
          <td style={tdS({textAlign:"center"})}><PhaseTag phase={row.phase}/></td>
          <td style={tdS({textAlign:"right"})}><TypeBadge type="B" count={row.B} detected={row.Bd}/></td>
          <td style={tdS({textAlign:"right"})}><TypeBadge type="C" count={row.C}/></td>
          <td style={tdS({textAlign:"right"})}><TypeBadge type="U" count={row.U} detected={row.Ud}/></td>
          <td style={tdS({textAlign:"center"})}><ConfBadge conf={row.conf}/></td>
          {src.td}
        </tr>
        {src.expansion}
        </React.Fragment>
      );
    }
  );

  const renderBahrainTable = () => renderCountryTable(BAHRAIN_DATA.slice().reverse(), "bh",
    ["Date","Day","Ph","ΔB","ΔU","Cum B","Cum U","D.Tot","Dead(cum)","Conf","Src"],
    (row,idx) => {
      const dailyTotal=(row.dB!=null?row.dB:0)+(row.dU!=null?row.dU:0);
      const hasDaily=row.dB!=null||row.dU!=null;
      const k="bh-"+idx;
      const src = srcCell("Bahrain", row, 11);
      return (
        <React.Fragment key={idx}>
        <tr onMouseEnter={()=>setHoveredRow(k)} onMouseLeave={()=>setHoveredRow(null)} style={{background:rowBg(k,idx)}}>
          <td style={tdS({color:C.text,fontWeight:600,textAlign:"center",whiteSpace:"nowrap"})}>{row.date}</td>
          <td style={tdS({textAlign:"center",color:C.textMuted})}>{row.day}</td>
          <td style={tdS({textAlign:"center"})}><PhaseTag phase={row.phase}/></td>
          <td style={tdS({textAlign:"right"})}>{row.dB!=null?<TypeBadge type="B" count={row.dB}/>:<span style={{color:C.nr,fontSize:FONT.label}}>n/r</span>}</td>
          <td style={tdS({textAlign:"right"})}>{row.dU!=null?<TypeBadge type="U" count={row.dU}/>:<span style={{color:C.nr,fontSize:FONT.label}}>n/r</span>}</td>
          <td style={tdS({textAlign:"right",color:row.cumB!=null?C.textMuted:C.nr})}>{row.cumB!=null?row.cumB:"—"}</td>
          <td style={tdS({textAlign:"right",color:row.cumU!=null?C.textMuted:C.nr})}>{row.cumU!=null?row.cumU:"—"}</td>
          <td style={tdS({textAlign:"right",fontWeight:700,fontSize:FONT.h3,color:hasDaily?C.text:C.nr})}>{hasDaily?dailyTotal:"—"}</td>
          <td style={tdS({textAlign:"right",fontSize:FONT.label,color:row.deaths>0?C.peak:C.textDim})}>{row.deaths!=null?row.deaths:"—"}</td>
          <td style={tdS({textAlign:"center"})}><ConfBadge conf={row.conf}/></td>
          {src.td}
        </tr>
        {src.expansion}
        </React.Fragment>
      );
    }
  );

  const renderSaudiTable = () => renderCountryTable(SAUDI_DATA.slice().reverse(), "sa",
    ["Date","Day","Ph","Ballistic","Cruise","Drones/UAV","Total","Dead(cum)","Conf","Src"],
    (row,idx) => {
      const total=(row.B||0)+(row.C||0)+(row.U||0);
      const k="sa-"+idx;
      const src = srcCell("Saudi", row, 10);
      return (
        <React.Fragment key={idx}>
        <tr onMouseEnter={()=>setHoveredRow(k)} onMouseLeave={()=>setHoveredRow(null)} style={{background:rowBg(k,idx)}}>
          <td style={tdS({color:C.text,fontWeight:600,textAlign:"center",whiteSpace:"nowrap"})}>{row.date}</td>
          <td style={tdS({textAlign:"center",color:C.textMuted})}>{row.day}</td>
          <td style={tdS({textAlign:"center"})}><PhaseTag phase={row.phase}/></td>
          <td style={tdS({textAlign:"right"})}><TypeBadge type="B" count={row.B}/></td>
          <td style={tdS({textAlign:"right"})}><TypeBadge type="C" count={row.C}/></td>
          <td style={tdS({textAlign:"right"})}><TypeBadge type="U" count={row.U}/></td>
          <td style={tdS({textAlign:"right",fontWeight:700,fontSize:FONT.h3,color:C.text})}>{total||<span title="No incidents reported">—</span>}</td>
          <td style={tdS({textAlign:"right",fontSize:FONT.label,color:row.deaths>0?C.peak:C.textDim})}>{row.deaths||0}</td>
          <td style={tdS({textAlign:"center"})}><ConfBadge conf={row.conf}/></td>
          {src.td}
        </tr>
        {src.expansion}
        </React.Fragment>
      );
    }
  );

  const renderKuwaitTable = () => renderCountryTable(KUWAIT_DATA.slice().reverse(), "kw",
    ["Date","Day","Ph","Ballistic","Drones/UAV","Total","Dead(cum)","Conf","Src"],
    (row,idx) => {
      const total=(row.B||0)+(row.U||0);
      const k="kw-"+idx;
      const src = srcCell("Kuwait", row, 9);
      return (
        <React.Fragment key={idx}>
        <tr onMouseEnter={()=>setHoveredRow(k)} onMouseLeave={()=>setHoveredRow(null)} style={{background:rowBg(k,idx)}}>
          <td style={tdS({color:C.text,fontWeight:600,textAlign:"center"})}>{row.date}</td>
          <td style={tdS({textAlign:"center",color:C.textMuted})}>{row.day}</td>
          <td style={tdS({textAlign:"center"})}><PhaseTag phase={row.phase}/></td>
          <td style={tdS({textAlign:"right"})}><TypeBadge type="B" count={row.B} detected={row.Bd}/></td>
          <td style={tdS({textAlign:"right"})}><TypeBadge type="U" count={row.U} detected={row.Ud}/></td>
          <td style={tdS({textAlign:"right",fontWeight:700,fontSize:FONT.h3,color:C.text})}>{total||<span title="No incidents reported">—</span>}</td>
          <td style={tdS({textAlign:"right",fontSize:FONT.label,color:row.deaths>0?C.peak:C.textDim})}>{row.deaths||0}</td>
          <td style={tdS({textAlign:"center"})}><ConfBadge conf={row.conf}/></td>
          {src.td}
        </tr>
        {src.expansion}
        </React.Fragment>
      );
    }
  );

  // ═══════════════════════════════════════════
  // OVERVIEW TAB
  // ═══════════════════════════════════════════

  const renderOverview = () => (
    <div>
      {/* Summary stat cards (moved from global header into Overview only) */}
      <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:16}}>
        <StatCard label="UAE Total Tracked" value={summaryMetrics.uaeTotal.toLocaleString() + "+"} sub={summaryMetrics.uaeSub} color={C.drone} icon={"#"}/>
        <StatCard label="Gulf-wide Killed" value={summaryMetrics.killedSum + "+"} sub={summaryMetrics.killedSub} color={C.peak} icon={"†"}/>
        <StatCard label="Force Majeure" value={summaryMetrics.fmCount + "+"} sub={summaryMetrics.fmSub || "—"} color={C.ballistic} icon={"⚠"}/>
        <StatCard label="Leaker Events" value={LEAKER_LOG.length+""} sub="Confirmed penetrations / damage incidents (incl. unofficial U-High)" color={C.cruise} icon={"◆"}/>
      </div>
      {/* Weapon legend + cadence status (moved from global header) */}
      <div style={{display:"flex",gap:16,flexWrap:"wrap",marginBottom:12,alignItems:"center"}}>
        {[{label:"B — Ballistic",color:C.ballistic},{label:"C — Cruise",color:C.cruise},{label:"U — Drone/UAV",color:C.drone},{label:"n/r — Not reported",color:C.nr}].map((l,i) => (
          <div key={i} style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:8,height:8,borderRadius:2,background:l.color}}/><span style={{fontSize:FONT.small,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>{l.label}</span></div>
        ))}
        <div style={{marginLeft:"auto",fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>
          {headerStaleLines.length > 0 ? headerStaleLines.map((h,i)=><span key={i}><span style={{color:C.peak}}>●</span> {h.name}: {h.lag}d behind W{warDayRef}{i<headerStaleLines.length-1?" · ":""}</span>) : <span><span style={{color:C.reduction}}>●</span> All tables within cadence vs day {warDayRef}</span>}
        </div>
      </div>
      {/* Inline abbreviation legend */}
      <div style={{display:"flex",gap:14,flexWrap:"wrap",marginBottom:14,padding:"6px 10px",background:C.surfaceAlt,borderRadius:5,border:"1px solid "+C.border,alignItems:"center"}}>
        <span style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>KEY:</span>
        {[{abbr:"n/r",meaning:"Not reported (≠ zero)"},{abbr:"H / M / L",meaning:"High / Medium / Low confidence"},{abbr:"Δ",meaning:"Daily change from prior entry"},{abbr:"—",meaning:"No data available for this field"},{abbr:"D#",meaning:"War day number (D1 = Feb 28)"}].map((a,i)=>(
          <span key={i} style={{fontSize:FONT.small,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}><span style={{color:C.accent,fontWeight:700}}>{a.abbr}</span> = {a.meaning}</span>
        ))}
      </div>
      {/* Country summary cards */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:12,marginBottom:24}}>
        {COUNTRY_SUMMARY.map((cs,i) => (
          <div key={i} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:16,position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg,"+C.accent+",transparent)"}}/>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
              <span style={{fontSize:15,fontWeight:800}}>{cs.name}</span>
              <span style={{fontSize:FONT.small,padding:"2px 6px",borderRadius:3,background:cs.reporting==="Daily MoD verified"?C.reduction+"15":C.textDim+"15",color:cs.reporting==="Daily MoD verified"?C.reduction:C.textDim,fontFamily:"'JetBrains Mono',monospace",fontWeight:600}}>{cs.reporting}</span>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:10}}>
              <div style={{textAlign:"center"}}><div style={{fontSize:FONT.tiny,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",textTransform:"uppercase",letterSpacing:1}}>Ballistic</div><div title={cs.totalB!=null?cs.totalB.toLocaleString()+" ballistic missiles tracked":"No ballistic data available for this country"} style={{fontSize:FONT.h2,fontWeight:800,color:C.ballistic,fontFamily:"'JetBrains Mono',monospace",cursor:"help"}}>{cs.totalB!=null?cs.totalB.toLocaleString():"—"}</div></div>
              <div style={{textAlign:"center"}}><div style={{fontSize:FONT.tiny,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",textTransform:"uppercase",letterSpacing:1}}>Cruise</div><div title={cs.totalC?"Cruise missiles tracked":"No cruise missile data available for this country"} style={{fontSize:FONT.h2,fontWeight:800,color:C.cruise,fontFamily:"'JetBrains Mono',monospace",cursor:"help"}}>{cs.totalC||<span title="No incidents reported">—</span>}</div></div>
              <div style={{textAlign:"center"}}><div style={{fontSize:FONT.tiny,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",textTransform:"uppercase",letterSpacing:1}}>Drones</div><div title={cs.totalU!=null?cs.totalU.toLocaleString()+" drones/UAVs tracked":"No drone data available for this country"} style={{fontSize:FONT.h2,fontWeight:800,color:C.drone,fontFamily:"'JetBrains Mono',monospace",cursor:"help"}}>{cs.totalU!=null?cs.totalU.toLocaleString():"—"}</div></div>
            </div>
            <div style={{display:"flex",gap:12,marginBottom:8}}>
              <div><span style={{fontSize:FONT.badge,color:C.textDim}}>Killed: </span><span style={{fontSize:FONT.table,fontWeight:700,color:Number(cs.killed)>0?C.peak:C.textDim}}>{Number(cs.killed)||cs.killed||"—"}</span></div>
              <div><span style={{fontSize:FONT.badge,color:C.textDim}}>Injured: </span><span style={{fontSize:FONT.table,fontWeight:700,color:Number(cs.injured)>0?C.drone:C.textDim}}>{Number(cs.injured)||cs.injured||0}+</span></div>
              <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                <div><span style={{fontSize:FONT.badge,color:C.textDim}}>As of: </span><span style={{fontSize:FONT.small,color:C.textMuted}}>{cs.asOf}</span></div>
                {cs.cadence&&(() => {
                  const key = NAME_TO_DATA[cs.name];
                  const rows = key && DATA_BY_COUNTRY[key] ? DATA_BY_COUNTRY[key]() : [];
                  const lastDay = rows.length ? Math.max(...rows.map(r=>r.day)) : 0;
                  const lagDays = Math.max(0, warDayRef - lastDay);
                  const isOverdue = lagDays > cs.cadence.overdueAfter;
                  return (
                    <div style={{display:"flex",alignItems:"center",gap:4}}>
                      <span style={{fontSize:FONT.small,padding:"1px 5px",borderRadius:3,fontFamily:"'JetBrains Mono',monospace",fontWeight:700,
                        background:isOverdue?C.peakBg:C.reduction+"10",
                        color:isOverdue?C.peak:C.reduction,
                        border:"1px solid "+(isOverdue?C.peak+"30":C.reduction+"20")}}>
                        {isOverdue?"OVERDUE +"+lagDays+"d":"↻ "+cs.cadence.freq}
                      </span>
                      <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{Math.round(cs.cadence.reliability*100)}% reliable</span>
                    </div>
                  );
                })()}
              </div>
            </div>
            <div style={{fontSize:FONT.small,color:C.textDim,lineHeight:1.5,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",cursor:"help"}} title={cs.keyTargets}>
              <span style={{fontWeight:700,color:C.textMuted}}>Key targets: </span>{cs.keyTargets}
            </div>
            {cs.forceM!=="None"&&<div style={{marginTop:6,fontSize:FONT.small,color:C.peak}}>{"⚠"} Force Majeure: {cs.forceM}</div>}
          </div>
        ))}
      </div>
      {/* Phase badges */}
      <div style={{display:"flex",gap:8,marginBottom:14,flexWrap:"wrap"}}>
        {PHASE_DEFINITIONS.map((p,i)=>{ const dayLabel=p.id===3?("D12–"+warDayRef+"+"):p.days; return (
          <div key={i} style={{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",background:p.color+"10",border:"1px solid "+p.color+"25",borderRadius:5}}>
            <div style={{width:8,height:8,borderRadius:2,background:p.color}}/>
            <div><span style={{fontSize:FONT.small,fontWeight:700,color:p.color,fontFamily:"'JetBrains Mono',monospace"}}>{p.name+": "+p.label}</span><span style={{fontSize:FONT.badge,color:C.textDim,marginLeft:6}}>({dayLabel})</span><span style={{fontSize:FONT.tiny,color:C.textMuted,marginLeft:6}}>{p.desc}</span></div>
          </div>
        )})}
      </div>
      {/* Sparklines */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:24}}>
        <div style={{background:C.surface,border:"1px solid "+C.border,borderRadius:8,padding:16}}>
          <SectionHeader title="UAE Drones/UAV Trend" subtitle="Daily intercept counts (where reported)" color={C.drone} dataLabel={<DataLabel kind="observed"/>}/>
          <Sparkline data={UAE_DATA.filter(d=>d.U!=null)} field="U" color={C.drone} height={40} width={260}/>
        </div>
        <div style={{background:C.surface,border:"1px solid "+C.border,borderRadius:8,padding:16}}>
          <SectionHeader title="UAE Ballistic Trend" subtitle="Daily intercept counts (where reported)" color={C.ballistic} dataLabel={<DataLabel kind="observed"/>}/>
          <Sparkline data={UAE_DATA.filter(d=>d.B!=null)} field="B" color={C.ballistic} height={40} width={260}/>
        </div>
      </div>
      {/* Leaker log summary */}
      <div style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:20}}>
        <SectionHeader title={"CONFIRMED DAMAGE / LEAKER INCIDENTS ("+LEAKER_LOG.length+" total)"} color={C.peak}/>
        <div style={{overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:FONT.label}}>
            <thead><tr>
              {["Day","Date","Country","Type","Target","Sev","Description"].map((h,i) =>
                <th key={i} style={{padding:"6px 8px",textAlign:i===6?"left":"center",borderBottom:"2px solid "+C.borderLight,color:C.textDim,fontSize:FONT.badge,fontWeight:700,letterSpacing:1,textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"}}>{h}</th>
              )}
            </tr></thead>
            <tbody>
              {(()=>{const sorted=[...LEAKER_LOG].sort((a,b)=>b.day-a.day);return(leakerShowAll?sorted:sorted.slice(0,8)).map((inc,idx) => {
                const sevColors={1:C.cruise,2:C.drone,3:C.peak};
                const sevLabels={1:"Minor",2:"Mod",3:"Sig"};
                return (
                  <tr key={idx} style={{background:idx%2===0?"transparent":C.surfaceAlt+"40"}}>
                    <td style={tdS({textAlign:"center",color:C.textMuted,fontSize:FONT.small})}>{inc.day}</td>
                    <td style={tdS({textAlign:"center",fontWeight:600,color:C.text,fontSize:FONT.small,whiteSpace:"nowrap"})}>{inc.date}</td>
                    <td style={tdS({textAlign:"center",fontSize:FONT.small,fontWeight:600})}>{inc.country}</td>
                    <td style={tdS({textAlign:"center"})}><span style={{fontSize:FONT.small,fontWeight:700,color:inc.type==="B"?C.ballistic:C.drone}}>{inc.type}</span></td>
                    <td style={tdS({textAlign:"center",fontSize:FONT.small,fontWeight:600,color:C.text})}>{inc.target}</td>
                    <td style={tdS({textAlign:"center"})}><span style={{fontSize:FONT.badge,fontWeight:700,padding:"1px 5px",borderRadius:2,background:(sevColors[inc.severity]||C.nr)+"18",color:sevColors[inc.severity]||C.nr}}>{sevLabels[inc.severity]||"?"}</span></td>
                    <td style={tdS({fontSize:FONT.small,color:C.textMuted,maxWidth:250,lineHeight:1.4})}>{inc.desc}</td>
                  </tr>
                );
              })})()}
            </tbody>
          </table>
        </div>
        {LEAKER_LOG.length > 8 && (
          <button onClick={()=>setLeakerShowAll(!leakerShowAll)} style={{marginTop:10,padding:"5px 14px",fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",background:"transparent",border:"1px solid "+C.border,borderRadius:4,color:C.accent,cursor:"pointer",transition:"all 0.15s"}}>
            {leakerShowAll ? "Show less ▲" : "Show all "+LEAKER_LOG.length+" incidents ▼"}
          </button>
        )}
      </div>
    </div>
  );

  // ═══════════════════════════════════════════
  // ANALYTICS TAB
  // ═══════════════════════════════════════════

  const ANALYTICS_SUBS = [
    {key:"scenario",label:"Scenario Modeller",sub:"What-if analysis"},
    {key:"balance",label:"Force Balance",sub:"Attacker vs defender"},
    {key:"stockpile",label:"Stockpile & Burn",sub:"Inventory + expenditure"},
    {key:"mix",label:"Threat Mix",sub:"Attack type distribution"},
    {key:"intercepttrend",label:"Defense Trend",sub:"Intercept % + degradation"},
    {key:"intercept",label:"Intercept Detail",sub:"Day-by-day rates"},
    {key:"reconcile",label:"Propaganda",sub:"Iran claims vs reality"},
    {key:"targets",label:"Target Types",sub:"Infrastructure targets"},
    {key:"ma",label:"Moving Avg",sub:"Smoothed daily trends"},
  ];

  const renderAnalytics = () => {
    const cardBg = S_CARD_LG;
    const chartW=700, chartH=180, padL=48, padR=16, padT=10, padB=28;
    const plotW=chartW-padL-padR, plotH=chartH-padT-padB;

    // Date range filter for chart data — show last N days or all
    const filterByRange = (arr) => analyticsRange > 0 ? arr.slice(-analyticsRange) : arr;
    const RangeSelector = () => (
      <div style={{display:"flex",gap:4,marginBottom:12}}>
        {[{v:30,l:"Last 30d"},{v:60,l:"Last 60d"},{v:0,l:"All"}].map(r=>(
          <button key={r.v} onClick={()=>setAnalyticsRange(r.v)} style={{
            padding:"3px 10px",fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",
            background:analyticsRange===r.v?C.accentBg:"transparent",
            color:analyticsRange===r.v?C.accent:C.textDim,
            border:"1px solid "+(analyticsRange===r.v?C.accent+"50":C.border),
            borderRadius:4,cursor:"pointer"
          }}>{r.l}</button>
        ))}
      </div>
    );

    const renderReconciliation = () => {
      const R = IRAN_RECONCILIATION;
      const sumB = COUNTRY_SUMMARY.reduce((s, c) => s + (c.totalB || 0), 0);
      const sumC = COUNTRY_SUMMARY.reduce((s, c) => s + (c.totalC || 0), 0);
      const sumU = COUNTRY_SUMMARY.reduce((s, c) => s + (c.totalU || 0), 0);
      const defTot = (R.defInterceptBM||0) + (R.defInterceptCM||0) + (R.defInterceptDrones||0);
      const rows = [
        { label: "IRGC claimed missiles (aggregate)", val: R.iranMissiles, src: "Iran claims", tone: C.peak },
        { label: "FDD / Alma est. missiles", val: R.fddMissiles, src: "OSINT", tone: C.cruise },
        { label: "Sum of country-table B (MoD-derived)", val: sumB, src: "Tracker sum", tone: C.ballistic },
        { label: "IRGC claimed drones", val: R.iranDrones, src: "Iran claims", tone: C.peak },
        { label: "FDD / Alma est. drones", val: R.fddDrones, src: "OSINT", tone: C.cruise },
        { label: "Sum of country-table U (MoD-derived)", val: sumU, src: "Tracker sum", tone: C.drone },
        { label: "Composite intercepts (BM+CM+UAV, defense narrative)", val: defTot, src: "Model / brief", tone: C.accent },
      ];
      return (
        <div style={cardBg}>
          <SectionHeader title="Iran claims vs OSINT vs country sums" subtitle="Cross-check IRGC aggregates against independent estimates and cumulative MoD-derived country totals. Large gaps flag definitional mismatch (e.g. launches vs arrivals)." color={C.accent} dataLabel={<DataLabel kind="derived"/>}/>
          <div style={{marginBottom:16}}>
            <button onClick={() => {setActiveTab("Iran"); setIranSubTab("disinfo");}} style={{padding:"6px 12px",background:"#f97316",color:"white",border:"none",borderRadius:"16px",fontSize:FONT.small,fontWeight:600,cursor:"pointer",transition:"opacity 0.2s"}} onMouseEnter={e=>e.target.style.opacity="0.9"} onMouseLeave={e=>e.target.style.opacity="1"}>
              → See Iran Disinfo Claims
            </button>
          </div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:FONT.table}}>
              <thead><tr>
                {["Metric","Value","Source class"].map((h,i)=><th key={i} style={{padding:"8px 10px",textAlign:i===1?"right":"left",borderBottom:"2px solid "+C.borderLight,color:C.textDim,fontSize:FONT.badge,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"}}>{h}</th>)}
              </tr></thead>
              <tbody>
                {rows.map((r,idx)=>(
                  <tr key={idx} style={{background:idx%2===0?"transparent":C.surfaceAlt+"40"}}>
                    <td style={tdS({fontWeight:600,color:C.text})}>{r.label}</td>
                    <td style={tdS({textAlign:"right",fontWeight:800,fontFamily:"'JetBrains Mono',monospace",color:r.tone})}>{typeof r.val==="number"?r.val.toLocaleString():r.val}</td>
                    <td style={tdS({color:C.textDim,fontSize:FONT.small})}>{r.src}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{marginTop:14,padding:12,background:C.surfaceAlt,borderRadius:6,border:"1px solid "+C.border,fontSize:FONT.small,color:C.textMuted,lineHeight:1.65}}>
            <span style={{fontWeight:700,color:C.text}}>Read:</span> Cruise totals in country tables ({sumC} CM) are tracked separately; Iran missile headlines often exclude CM or use launch semantics. UAE-only row in <span style={{fontFamily:"'JetBrains Mono',monospace"}}>IRAN_RECONCILIATION.uaeOnly</span> matches high-confidence MoD cumulative for scenario work.
          </div>
        </div>
      );
    };

    const renderMix = () => {
      const filteredUAE = filterByRange(UAE_DATA);
      return (
      <div style={cardBg}>
        <SectionHeader title="Threat Mix Ratio" subtitle="Daily % of Ballistic vs Cruise vs Drone (UAE — best daily coverage)" color={C.drone} dataLabel={<DataLabel kind="observed"/>}/>
        <RangeSelector/>
        <div style={{overflowX:"auto"}}>
          <svg width="100%" viewBox={"0 0 "+chartW+" 220"} preserveAspectRatio="xMidYMid meet" style={{display:"block",maxWidth:"100%",height:"auto"}}>
            {filteredUAE.map((row,i) => {
              const b=row.B||0,c=row.C||0,u=row.U||0,total=b+c+u;
              if(!total) return null;
              const barW=(plotW/filteredUAE.length)*0.7, gap=(plotW/filteredUAE.length)*0.3;
              const x=padL+i*(barW+gap)+gap/2;
              const bH=(b/total)*plotH, cH=(c/total)*plotH, uH=(u/total)*plotH;
              return (
                <g key={i}>
                  <rect x={x} y={padT+plotH-bH-cH-uH} width={barW} height={uH} fill={C.drone} rx={2} opacity={0.85}/>
                  <rect x={x} y={padT+plotH-bH-cH} width={barW} height={cH} fill={C.cruise} opacity={0.85}/>
                  <rect x={x} y={padT+plotH-bH} width={barW} height={bH} fill={C.ballistic} opacity={0.85}/>
                  <text x={x+barW/2} y={padT+plotH+14} fill={C.textDim} fontSize={8} textAnchor="middle" fontFamily="'JetBrains Mono',monospace">D{row.day}</text>
                  {uH>14&&<text x={x+barW/2} y={padT+plotH-bH-cH-uH+uH/2+3} fill="#f8fafc" fontSize={7} textAnchor="middle" fontWeight={700}>{Math.round(u/total*100)}%</text>}
                </g>
              );
            })}
            {[0,25,50,75,100].map(pct => {
              const y=padT+plotH-(pct/100)*plotH;
              return <g key={pct}><line x1={padL} y1={y} x2={padL+plotW} y2={y} stroke={C.border} strokeWidth={0.5}/><text x={padL-6} y={y+3} fill={C.textDim} fontSize={8} textAnchor="end" fontFamily="'JetBrains Mono',monospace">{pct}%</text></g>;
            })}
          </svg>
        </div>
        <div style={{display:"flex",gap:20,marginTop:12}}>
          {[{label:"Ballistic",color:C.ballistic},{label:"Cruise",color:C.cruise},{label:"Drone/UAV",color:C.drone}].map((l,i) => (
            <div key={i} style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:10,height:10,borderRadius:2,background:l.color}}/><span style={{fontSize:FONT.small,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>{l.label}</span></div>
          ))}
        </div>
      </div>
    );};

    const renderMA = () => {
      const filteredUAE = filterByRange(UAE_DATA);
      const labels=filteredUAE.map(d=>"D"+d.day);
      const LineChart = ({datasets,labels:lbls,height:h=chartH}) => {
        const allVals=datasets.flatMap(ds=>ds.data.filter(v=>v!=null));
        const yMax=Math.max(...allVals,1)*1.1;
        const pW=chartW-padL-padR, pH=h-padT-padB;
        const xStep=lbls.length>1?pW/(lbls.length-1):pW;
        const toX=i=>padL+i*xStep, toY=v=>padT+pH-(v/yMax)*pH;
        return (
          <svg width="100%" viewBox={"0 0 "+chartW+" "+h} preserveAspectRatio="xMidYMid meet" style={{display:"block",maxWidth:"100%",height:"auto"}}>
            {Array.from({length:5},(_,i)=>{const y=padT+(pH/4)*i;const val=Math.round(yMax-(yMax/4)*i);return <g key={i}><line x1={padL} y1={y} x2={padL+pW} y2={y} stroke={C.border} strokeWidth={0.5}/><text x={padL-6} y={y+3} fill={C.textDim} fontSize={8} textAnchor="end" fontFamily="'JetBrains Mono',monospace">{val}</text></g>})}
            {lbls.map((l,i)=><text key={i} x={toX(i)} y={h-4} fill={C.textDim} fontSize={7} textAnchor="middle" fontFamily="'JetBrains Mono',monospace">{l}</text>)}
            {datasets.map((ds,di)=>{
              const pts=ds.data.map((v,i)=>v!=null?{x:toX(i),y:toY(v)}:null).filter(Boolean);
              if(pts.length<2) return null;
              return <g key={di}><polyline points={pts.map(p=>p.x+","+p.y).join(" ")} fill="none" stroke={ds.color} strokeWidth={ds.strokeWidth||1.5} strokeDasharray={ds.dashed?"4,3":"none"} opacity={ds.opacity||0.85} strokeLinecap="round" strokeLinejoin="round"/>{!ds.noPoints&&pts.map((p,i)=><circle key={i} cx={p.x} cy={p.y} r={1.5} fill={ds.color} opacity={0.7}/>)}</g>;
            })}
          </svg>
        );
      };
      return (
        <div style={cardBg}>
          <SectionHeader title="Rolling 3-Day & 7-Day Moving Averages" subtitle="UAE drone counts smoothed to reveal trendlines" color={C.avgLine} dataLabel={<DataLabel kind="derived"/>}/>
          <RangeSelector/>
          <LineChart datasets={[
            {data:filterByRange(UAE_DATA.map(d=>d.U)),color:C.textDim,label:"Daily",opacity:0.3,noPoints:true,strokeWidth:1},
            {data:filterByRange(uaeMA3U),color:"#22d3ee",label:"3-Day MA",strokeWidth:2.5},
            {data:filterByRange(uaeMA7U),color:"#f472b6",label:"7-Day MA",strokeWidth:3,dashed:true},
          ]} labels={labels}/>
        </div>
      );
    };

    const renderIntercept = () => {
      const filteredUAE = filterByRange(UAE_DATA);
      // Cross-reference LEAKER_LOG to get confirmed UAE leakers per day
      const uaeLeakersByDay = {};
      LEAKER_LOG.filter(l=>l.country==="UAE").forEach(l=>{
        if(!uaeLeakersByDay[l.day]) uaeLeakersByDay[l.day]={B:0,U:0};
        if(l.type==="B") uaeLeakersByDay[l.day].B++;
        else uaeLeakersByDay[l.day].U++;
      });
      const uaeRates=filteredUAE.map(d=>{
        const lk=uaeLeakersByDay[d.day]||{B:0,U:0};
        // Detected = intercepted + confirmed leakers (leaker log events)
        const adjBd = d.B!=null ? d.B + lk.B : d.Bd;
        const adjUd = d.U!=null ? d.U + lk.U : d.Ud;
        return {day:d.day,date:d.date,
          bRate:adjBd?(Math.round(d.B/adjBd*1000)/10):null,
          uRate:adjUd?(Math.round(d.U/adjUd*1000)/10):null,
          bInt:d.B,bDet:adjBd,uInt:d.U,uDet:adjUd,
          leakerB:lk.B,leakerU:lk.U};
      });
      const totalUaeBInt=UAE_DATA.reduce((s,d)=>s+(d.B||0),0);
      const totalUaeLeakB=LEAKER_LOG.filter(l=>l.country==="UAE"&&l.type==="B").length;
      const totalUaeLeakU=LEAKER_LOG.filter(l=>l.country==="UAE"&&(l.type==="U"||l.type==="attack")).length;
      const totalUaeBDet=totalUaeBInt+totalUaeLeakB;
      const uaeBLeakers=totalUaeLeakB;
      const uaeBRate=totalUaeBDet>0?Math.round(totalUaeBInt/totalUaeBDet*1000)/10:0;
      return (
        <div style={cardBg}>
          <SectionHeader title="Intercept Success Rate & Leaker Analysis (UAE)" subtitle="% intercepted of detected — where detected counts available. Gap = potential leakers." color={C.reduction} dataLabel={<DataLabel kind="observed"/>}/>
          <RangeSelector/>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:FONT.table}}>
              <thead><tr>{["Day","Date","BM Intcpt","BM Detect","BM Rate","BM Leak","Drone Intcpt","Drone Detect","Drone Rate","Drone Leak"].map((h,i)=><th key={i} style={{padding:"8px 10px",textAlign:i<2?"center":"right",borderBottom:"2px solid "+C.borderLight,color:C.textDim,fontSize:FONT.badge,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"}}>{h}</th>)}</tr></thead>
              <tbody>
                {uaeRates.filter(r=>r.bRate!==null||r.uRate!==null).slice().reverse().map((r,idx)=>(
                  <tr key={idx} style={{background:idx%2===0?"transparent":C.surfaceAlt+"40"}}>
                    <td style={tdS({textAlign:"center",color:C.textMuted})}>{r.day}</td>
                    <td style={tdS({textAlign:"center",fontWeight:600,color:C.text,whiteSpace:"nowrap"})}>{r.date}</td>
                    <td style={tdS({textAlign:"right",color:C.ballistic})}>{r.bInt!=null?r.bInt:"—"}</td>
                    <td style={tdS({textAlign:"right",color:C.textMuted})}>{r.bDet!=null?r.bDet:"—"}</td>
                    <td style={tdS({textAlign:"right",fontWeight:700,color:r.bRate!=null?(r.bRate>=95?C.reduction:r.bRate>=85?C.drone:C.peak):C.nr})}>{r.bRate!=null?r.bRate+"%":"—"}</td>
                    <td style={tdS({textAlign:"right",color:r.leakerB!=null&&r.leakerB>0?C.peak:C.textDim})}>{r.leakerB!=null?r.leakerB:"—"}</td>
                    <td style={tdS({textAlign:"right",color:C.drone})}>{r.uInt!=null?r.uInt:"—"}</td>
                    <td style={tdS({textAlign:"right",color:C.textMuted})}>{r.uDet!=null?r.uDet:"—"}</td>
                    <td style={tdS({textAlign:"right",fontWeight:700,color:r.uRate!=null?(r.uRate>=95?C.reduction:r.uRate>=85?C.drone:C.peak):C.nr})}>{r.uRate!=null?r.uRate+"%":"—"}</td>
                    <td style={tdS({textAlign:"right",color:r.leakerU!=null&&r.leakerU>0?C.peak:C.textDim})}>{r.leakerU!=null?r.leakerU:"—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{marginTop:12,padding:12,background:C.surfaceAlt,borderRadius:6,border:"1px solid "+C.border}}>
            <div style={{fontSize:FONT.small,color:C.textMuted,lineHeight:1.6}}>
              <span style={{color:C.reduction,fontWeight:700}}>{"≥"}95%</span> = Strong | <span style={{color:C.drone,fontWeight:700}}>85-94%</span> = Adequate | <span style={{color:C.peak,fontWeight:700}}>&lt;85%</span> = Degraded. Leaker counts from confirmed LEAKER_LOG incidents (infrastructure hits, debris events, territory impacts). Overall UAE BM rate: <span style={{color:C.peak,fontWeight:700}}>{uaeBRate}%</span> ({uaeBLeakers} BM leakers of {totalUaeBDet} detected). UAE Drone leakers: <span style={{color:C.peak,fontWeight:700}}>{totalUaeLeakU}</span> confirmed penetrations.
            </div>
          </div>
        </div>
      );
    };

    const renderBurn = () => {
      const cumB=UAE_DATA.reduce((s,d)=>s+(d.B||0),0)+QATAR_DATA.reduce((s,d)=>s+(d.B||0),0)+BAHRAIN_DATA.reduce((s,d)=>s+(d.B||0),0)+SAUDI_DATA.reduce((s,d)=>s+(d.B||0),0)+KUWAIT_DATA.reduce((s,d)=>s+(d.B||0),0)+OMAN_DATA.reduce((s,d)=>s+(d.B||0),0)+IRAQ_DATA.reduce((s,d)=>s+(d.B||0),0);
      const cumC=UAE_DATA.reduce((s,d)=>s+(d.C||0),0)+QATAR_DATA.reduce((s,d)=>s+(d.C||0),0)+BAHRAIN_DATA.reduce((s,d)=>s+(d.C||0),0)+SAUDI_DATA.reduce((s,d)=>s+(d.C||0),0)+KUWAIT_DATA.reduce((s,d)=>s+(d.C||0),0)+OMAN_DATA.reduce((s,d)=>s+(d.C||0),0)+IRAQ_DATA.reduce((s,d)=>s+(d.C||0),0);
      const cumU=UAE_DATA.reduce((s,d)=>s+(d.U||0),0)+QATAR_DATA.reduce((s,d)=>s+(d.U||0),0)+BAHRAIN_DATA.reduce((s,d)=>s+(d.U||0),0)+SAUDI_DATA.reduce((s,d)=>s+(d.U||0),0)+KUWAIT_DATA.reduce((s,d)=>s+(d.U||0),0)+OMAN_DATA.reduce((s,d)=>s+(d.U||0),0)+IRAQ_DATA.reduce((s,d)=>s+(d.U||0),0);
      const cats=[
        {label:"Ballistic (all types)",fired:cumB,est:_STOCKPILE.mrbm.est+_STOCKPILE.srbm.est,low:_STOCKPILE.mrbm.low+_STOCKPILE.srbm.low,high:_STOCKPILE.mrbm.high+_STOCKPILE.srbm.high,color:C.ballistic},
        {label:"Cruise Missiles",fired:cumC,est:_STOCKPILE.cruise.est,low:_STOCKPILE.cruise.low,high:_STOCKPILE.cruise.high,color:C.cruise},
        {label:"Drones/UAVs",fired:cumU,est:_STOCKPILE.drone.est,low:_STOCKPILE.drone.low,high:_STOCKPILE.drone.high,color:C.drone},
      ];
      return (
        <div style={cardBg}>
          <SectionHeader title="Estimated Iranian Inventory Burn Rate" subtitle="Cumulative Gulf-targeted launches vs pre-conflict stockpile estimates (JINSA, IDF, CSIS)" color={C.peak}/>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:16}}>
            {cats.map((cat,i) => {
              const pct=Math.min((cat.fired/cat.est*100),100).toFixed(1);
              return (
                <div key={i} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:16}}>
                  <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1,textTransform:"uppercase",color:cat.color,fontFamily:"'JetBrains Mono',monospace",marginBottom:10}}>{cat.label}</div>
                  <div style={{fontSize:28,fontWeight:800,color:C.text,fontFamily:"'JetBrains Mono',monospace",lineHeight:1}}>{cat.fired.toLocaleString()}</div>
                  <div style={{fontSize:FONT.small,color:C.textMuted,marginTop:4,marginBottom:12}}>fired of ~{cat.est.toLocaleString()} est.</div>
                  <div style={{height:8,background:C.bg,borderRadius:4,overflow:"hidden",marginBottom:8}}>
                    <div style={{height:"100%",width:pct+"%",background:"linear-gradient(90deg,"+cat.color+","+cat.color+"80)",borderRadius:4}}/>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace"}}>
                    <span style={{color:C.textDim}}>Low: {(cat.fired/cat.low*100).toFixed(1)}%</span>
                    <span style={{color:cat.color,fontWeight:700}}>Est: {pct}%</span>
                    <span style={{color:C.textDim}}>High: {(cat.fired/cat.high*100).toFixed(1)}%</span>
                  </div>
                  <div style={{marginTop:10,fontSize:FONT.small,color:C.textDim,lineHeight:1.5}}>
                    Rate: {(cat.fired/17).toFixed(0)}/day. At this pace, est. stockpile lasts ~{Math.round((cat.est-cat.fired)/(cat.fired/17))} more days
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{marginTop:16,padding:12,background:C.surfaceAlt,borderRadius:6,border:"1px solid "+C.border,fontSize:FONT.small,color:C.textDim,lineHeight:1.6}}>
            <span style={{fontWeight:700,color:C.textMuted}}>CAVEAT:</span> Stockpile estimates from pre-conflict OSINT (IISS, CSIS, DIA). Iran's drone production (~100-200/month) means UAV stocks partially replenishable. BM inventory not replenishable at meaningful pace. By Mar 5, Fars News confirmed 500+ BM/naval missiles + ~2,000 drones fired. JINSA assessed Mar 6 Iran's "missile firepower has almost run out."
          </div>
        </div>
      );
    };

    const renderForceBalance = () => {
      // Use the component-level warDayRef (no shadow/cap needed)
      return (
        <div>
          <div style={{fontSize:FONT.label,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.accent,marginBottom:16,fontFamily:"'JetBrains Mono',monospace"}}>FORCE BALANCE — IRAN OFFENSIVE vs COALITION DEFENSIVE (Day {warDayRef})</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:20}}>
            {/* Iran offensive remaining */}
            <div style={{background:C.surfaceAlt,border:"1px solid "+C.peak+"30",borderRadius:8,padding:16}}>
              <div style={{fontSize:FONT.small,fontWeight:700,color:C.peak,fontFamily:"'JetBrains Mono',monospace",marginBottom:12}}>IRAN — REMAINING OFFENSIVE</div>
              {IRAN_MILITARY_ORDER.filter(d=>["Ballistic Missiles","Drones/UAV","Cruise Missiles","Naval — IRGCN"].includes(d.domain)).map((d,i) => {
                const statusCol = d.status.includes("Critically")||d.status.includes("Severely")?C.reduction:d.status.includes("Degraded")?C.drone:C.peak;
                return (
                  <div key={i} style={{marginBottom:10,padding:10,background:C.bg,borderRadius:6,border:"1px solid "+C.border}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                      <span style={{fontSize:FONT.label,fontWeight:700,color:C.text}}>{d.domain}</span>
                      <span style={{fontSize:FONT.small,padding:"1px 6px",borderRadius:3,background:statusCol+"18",color:statusCol,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>{(d.status||"Unknown").split("—")[0].trim()}</span>
                    </div>
                    <div style={{fontSize:FONT.small,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>Pre-war: {d.prewar_quantity} → Remaining: <span style={{color:statusCol,fontWeight:700}}>{d.est_remaining}</span></div>
                  </div>
                );
              })}
              <div style={{fontSize:FONT.badge,color:C.textDim,marginTop:8,lineHeight:1.5}}>Iran's asymmetric advantage: drone production ~10,000/month; IRGCN fast craft 80-90% intact; proxy forces fully engaged across 4 fronts.</div>
            </div>
            {/* Coalition defensive */}
            <div style={{background:C.surfaceAlt,border:"1px solid "+C.blue+"20",borderRadius:8,padding:16}}>
              <div style={{fontSize:FONT.small,fontWeight:700,color:C.blue,fontFamily:"'JetBrains Mono',monospace",marginBottom:12}}>COALITION — DEFENSIVE CAPACITY</div>
              {["UAE","Qatar","Bahrain","Saudi","Kuwait","Israel"].map(country => {
                const systems = GULF_AIR_DEFENSE.filter(s=>s.country===country);
                if (systems.length===0) return null;
                const totalRemaining = systems.reduce((s,d)=>s+(d.missiles_est_remaining||0),0);
                const totalPrewar = systems.reduce((s,d)=>s+(d.missiles_prewar||0),0);
                const pct = totalPrewar>0?Math.round((totalRemaining/totalPrewar)*100):null;
                const col = pct!==null?(pct<30?C.peak:pct<60?C.drone:C.reduction):C.textDim;
                return (
                  <div key={country} style={{marginBottom:8,padding:8,background:C.bg,borderRadius:6,border:"1px solid "+C.border}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                      <span style={{fontSize:FONT.small,fontWeight:700,color:C.text}}>{country}</span>
                      <span style={{fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace",color:col}}>{totalRemaining.toLocaleString()} interceptors ({pct}%)</span>
                    </div>
                    <div style={{height:4,background:C.bg,borderRadius:2,border:"1px solid "+C.border,overflow:"hidden"}}>
                      <div style={{width:(pct||0)+"%",height:"100%",background:col,borderRadius:2}}/>
                    </div>
                    <div style={{fontSize:FONT.small,color:C.textDim,marginTop:3,fontFamily:"'JetBrains Mono',monospace"}}>{systems.map(s=>s.system).join(" · ")}</div>
                  </div>
                );
              })}
              <div style={{fontSize:FONT.small,color:C.textDim,marginTop:8,lineHeight:1.5}}>Critical constraint: THAAD resupply not until {THAAD_NEXT_DELIVERY}. PAC-3 production at 620/yr targeting 2,000/yr by 2030-32.</div>
            </div>
          </div>
          {/* Combined air/naval summary */}
          <div style={{background:C.surface,border:"1px solid "+C.border,borderRadius:8,padding:16}}>
            <div style={{display:"flex",gap:24,flexWrap:"wrap"}}>
              <div>
                <div style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>COALITION AIRCRAFT</div>
                <div style={{fontSize:22,fontWeight:800,color:C.blue,fontFamily:"'JetBrains Mono',monospace"}}>{COALITION_AIR_ORDER.reduce((s,a)=>s+a.quantity,0)}+</div>
              </div>
              <div>
                <div style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>US NAVAL VESSELS</div>
                <div style={{fontSize:22,fontWeight:800,color:C.blue,fontFamily:"'JetBrains Mono',monospace"}}>{US_NAVAL_FORCES.length} task groups</div>
              </div>
              <div>
                <div style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>IRAN FLYABLE AIRCRAFT</div>
                <div style={{fontSize:22,fontWeight:800,color:C.peak,fontFamily:"'JetBrains Mono',monospace"}}>~30-40</div>
              </div>
              <div>
                <div style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>IRAN NAVAL (INTACT)</div>
                <div style={{fontSize:22,fontWeight:800,color:C.peak,fontFamily:"'JetBrains Mono',monospace"}}>~1,200 FAC</div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    const subContent = {mix:renderMix,ma:renderMA,intercept:renderIntercept,intercepttrend:renderInterceptTrend,reconcile:renderReconciliation,burn:renderBurn,stockpile:renderStockpile,scenario:renderScenario,targets:renderTargetTypes,balance:renderForceBalance};
    return (
      <div>
        <div style={{display:"flex",gap:3,marginBottom:20,flexWrap:"wrap"}}>
          {ANALYTICS_SUBS.map(sub => (
            <SubTabPill key={sub.key} label={sub.label} active={analyticsSubTab===sub.key} color={C.accent} onClick={()=>setAnalyticsSubTab(sub.key)}/>
          ))}
        </div>
        <div style={{marginBottom:12}}><FreshnessBadge dataArray={UAE_DATA} label="Strike data" warDay={todayWarDay} /></div>
        <div style={{animation:"fadeIn 0.3s ease"}} key={analyticsSubTab}>{subContent[analyticsSubTab]?.()}</div>
      </div>
    );
  };

  // ═══════════════════════════════════════════
  // WAR ROOM TAB — Intelligence Brief Feed
  // ═══════════════════════════════════════════

  const renderWarRoom = () => {
    // Dark-mode palette (War Room uses IWT dark theme — map L to C tokens)
    const L = {bg:C.bg,surface:C.surface,surfaceAlt:C.surfaceAlt,border:C.border,borderLight:C.borderLight,text:C.text,textMuted:C.textMuted,textDim:C.textDim,accent:C.accent,peak:C.peak,reduction:C.reduction};
    const {pinned, unpinned} = wrSortBriefs(WAR_ROOM_BRIEFS);
    const allSorted = [...pinned, ...unpinned];
    const filtered = wrSectorFilter === "All" ? allSorted : allSorted.filter(b => b.sector === wrSectorFilter);
    const pinnedFiltered = filtered.filter(b => b.pinned || b.severity === "critical");
    const unpinnedFiltered = filtered.filter(b => !b.pinned && b.severity !== "critical");

    const sevDot = (sev) => {
      const colors = {critical:"#ef4444",high:"#f97316",medium:"#eab308",low:"#6b7280"};
      return <span style={{display:"inline-block",width:8,height:8,borderRadius:"50%",background:colors[sev]||"#6b7280",
        boxShadow:sev==="critical"?"0 0 6px #ef4444":"none",
        animation:sev==="critical"?"pulse 2s infinite":"none"}} />;
    };

    const briefCard = (b, isPinned) => {
      const sec = WR_SECTORS[b.sector] || {color:C.textDim,icon:"•"};
      const isExpanded = wrExpandedId === b.id;
      return (
        <div key={b.id} id={"wr-"+b.id} onClick={()=>setWrExpandedId(isExpanded?null:b.id)}
          style={{
            background:isPinned ? "#0f1724" : L.surface,
            border:`1px solid ${isPinned ? sec.color+"40" : L.border}`,
            borderLeft:`3px solid ${sec.color}`,
            borderRadius:6,
            padding:"10px 12px",
            cursor:"pointer",
            transition:"border-color 0.2s",
            position:"relative",
          }}>
          {/* Header row: severity dot + sector tag + day + timestamp */}
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
            {sevDot(b.severity)}
            <span style={{fontSize:FONT.xs,fontFamily:"'JetBrains Mono',monospace",fontWeight:700,
              color:sec.color,background:sec.color+"15",padding:"1px 6px",borderRadius:3,
              textTransform:"uppercase",letterSpacing:"0.5px"}}>{sec.icon} {b.sector}</span>
            <span style={{fontSize:FONT.xs,color:L.textDim,fontFamily:"'JetBrains Mono',monospace",marginLeft:"auto"}}>
              D{b.day} · {b.confidence==="H"?"HIGH":"MED"} conf
            </span>
            {isPinned && <span style={{fontSize:FONT.xs,color:"#ef4444",fontWeight:700}}>📌</span>}
          </div>
          {/* Headline */}
          <div style={{fontSize:FONT.md,fontWeight:700,color:L.text,fontFamily:"'JetBrains Mono',monospace",
            lineHeight:1.3,marginBottom:isExpanded?8:0}}>{b.headline || b.title}</div>
          {/* Body (collapsed by default, expanded on click) */}
          {isExpanded && (
            <div style={{marginTop:6}}>
              <div style={{fontSize:FONT.base,color:L.textDim,fontFamily:"'DM Sans',sans-serif",lineHeight:1.5,
                marginBottom:8}}>{b.body}</div>
              {/* Tags */}
              <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:6}}>
                {b.tags.map(t => (
                  <span key={t} style={{fontSize:FONT.xs,color:C.accent,background:C.accentBg,
                    padding:"1px 5px",borderRadius:3,fontFamily:"'JetBrains Mono',monospace"}}>{t}</span>
                ))}
              </div>
              {/* Sources — resolved to catalog links where available */}
              <div style={{fontSize:FONT.xs,color:L.textDim,fontFamily:"'JetBrains Mono',monospace",
                borderTop:`1px solid ${L.border}`,paddingTop:4,lineHeight:1.6}}>
                Sources: {(b.sources||[]).map((s,si) => {
                  const cited = typeof s === 'string' ? s : (s.name || String(s));
                  const resolved = wrResolveSource(cited, SOURCE_INDEX);
                  return <span key={si}>
                    {si > 0 && <span style={{opacity:0.4}}> · </span>}
                    {resolved && resolved.url
                      ? <a href={resolved.url} target="_blank" rel="noopener noreferrer"
                          style={{color:C.accent,textDecoration:"none",borderBottom:"1px dotted "+C.accent+"60"}}
                          onClick={e=>e.stopPropagation()}
                          title={resolved.desc||resolved.name}>{cited} ↗</a>
                      : <span>{cited}</span>}
                  </span>;
                })}
              </div>
              {/* Related briefs — thread links to other War Room entries */}
              {b.relatedBriefs && b.relatedBriefs.length > 0 && (() => {
                const allBriefs = WAR_ROOM_BRIEFS || [];
                const linked = b.relatedBriefs.map(rid => allBriefs.find(x => x.id === rid)).filter(Boolean);
                return linked.length > 0 ? (
                  <div style={{fontSize:FONT.xs,color:L.textDim,fontFamily:"'JetBrains Mono',monospace",
                    marginTop:4,lineHeight:1.6}}>
                    Related: {linked.map((lb,li) => (
                      <span key={lb.id}>
                        {li > 0 && <span style={{opacity:0.4}}> · </span>}
                        <span style={{color:C.accent,cursor:"pointer",borderBottom:"1px dotted "+C.accent+"40"}}
                          onClick={e=>{e.stopPropagation();setWrExpandedId(lb.id);
                            setTimeout(()=>{const el=document.getElementById("wr-"+lb.id);
                              if(el)el.scrollIntoView({behavior:"smooth",block:"center"});},100);}}
                          title={lb.body||lb.headline}>D{lb.day}: {lb.headline?.substring(0,50)}{lb.headline?.length>50?"…":""}</span>
                      </span>
                    ))}
                  </div>
                ) : null;
              })()}
              {/* Cross-references — links to other data scopes */}
              {b.crossRef && b.crossRef.length > 0 && (
                <div style={{fontSize:FONT.xs,color:L.textDim,fontFamily:"'JetBrains Mono',monospace",
                  marginTop:4,lineHeight:1.6}}>
                  See also: {b.crossRef.map((cr,ci) => (
                    <span key={ci}>
                      {ci > 0 && <span style={{opacity:0.4}}> · </span>}
                      <span style={{color:"#9ca3af",background:L.surfaceAlt||"#1a1f2e",
                        padding:"1px 5px",borderRadius:3,fontSize:FONT.xs}}>
                        {cr.label || cr.array} <span style={{opacity:0.5}}>D{cr.day}</span>
                      </span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      );
    };

    return (
      <div style={{maxWidth:900}}>
        {/* Section Header */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
          <div>
            <div style={{fontSize:FONT.lg,fontWeight:800,color:L.text,fontFamily:"'JetBrains Mono',monospace"}}>
              INTELLIGENCE BRIEF</div>
            <div style={{fontSize:FONT.xs,color:L.textDim,fontFamily:"'JetBrains Mono',monospace"}}>
              Priority intelligence feed · {WAR_ROOM_BRIEFS.length} items · auto-pinned by severity
            </div>
          </div>
          {/* Sector filter chips */}
          <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
            {["All",...Object.keys(WR_SECTORS)].map(s => {
              const isActive = wrSectorFilter === s;
              const sColor = s === "All" ? C.accent : (WR_SECTORS[s]?.color || C.textDim);
              return (
                <button key={s} onClick={(e)=>{e.stopPropagation();setWrSectorFilter(s);}}
                  style={{fontSize:FONT.xs,fontFamily:"'JetBrains Mono',monospace",fontWeight:isActive?700:400,
                    color:isActive?sColor:L.textDim,background:isActive?sColor+"15":"transparent",
                    border:`1px solid ${isActive?sColor+"50":"transparent"}`,borderRadius:4,
                    padding:"2px 8px",cursor:"pointer",transition:"all 0.15s"}}>
                  {s === "All" ? "All" : (WR_SECTORS[s]?.icon||"") + " " + s}
                </button>
              );
            })}
          </div>
        </div>

        {/* Freshness Indicator */}
        {(() => {
          const timestamps = WAR_ROOM_BRIEFS.map(b => new Date(b.timestamp).getTime()).filter(t => !isNaN(t));
          const latestTs = timestamps.length > 0 ? Math.max(...timestamps) : null;
          const now = new Date();
          const hoursOld = latestTs ? Math.round((now.getTime() - latestTs) / (1000 * 60 * 60)) : null;
          const freshnessColor = hoursOld === null ? C.textDim : hoursOld < 24 ? "#10b981" : hoursOld < 72 ? "#f59e0b" : "#ef4444";
          const freshnessLabel = hoursOld === null ? "no timestamps" : hoursOld < 1 ? "< 1 hour ago" : hoursOld < 24 ? hoursOld + " hour" + (hoursOld !== 1 ? "s" : "") + " ago" : Math.round(hoursOld / 24) + " day" + (Math.round(hoursOld / 24) !== 1 ? "s" : "") + " ago";
          return (
            <div style={{fontSize:10,fontFamily:"'JetBrains Mono',monospace",color:freshnessColor,marginBottom:12,paddingBottom:8,borderBottom:`1px solid ${C.borderLight}`,display:"flex",alignItems:"center",gap:6,opacity:0.85}}>
              <span>⏱</span>
              <span>Latest brief: {freshnessLabel}</span>
              <span style={{fontSize:7,marginLeft:"auto",color:C.textDim}}>verify currency independently</span>
            </div>
          );
        })()}

        {/* Pinned Critical Section */}
        {pinnedFiltered.length > 0 && (
          <div style={{marginBottom:16}}>
            <div style={{fontSize:FONT.xs,fontWeight:700,color:"#ef4444",fontFamily:"'JetBrains Mono',monospace",
              textTransform:"uppercase",letterSpacing:1,marginBottom:8,
              display:"flex",alignItems:"center",gap:6}}>
              <span style={{display:"inline-block",width:6,height:6,borderRadius:"50%",background:"#ef4444",
                animation:"pulse 2s infinite"}} />
              CRITICAL — PINNED
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(380px,1fr))",gap:8}}>
              {pinnedFiltered.map(b => briefCard(b, true))}
            </div>
          </div>
        )}

        {/* Rolling Feed */}
        {unpinnedFiltered.length > 0 && (
          <div>
            <div style={{fontSize:FONT.xs,fontWeight:700,color:L.textDim,fontFamily:"'JetBrains Mono',monospace",
              textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>
              INTELLIGENCE FEED — LATEST
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(380px,1fr))",gap:8}}>
              {unpinnedFiltered.map(b => briefCard(b, false))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{textAlign:"center",color:L.textDim,padding:32,fontFamily:"'JetBrains Mono',monospace",
            fontSize:FONT.sm}}>No briefs match filter "{wrSectorFilter}"</div>
        )}
      </div>
    );
  };

  // ═══════════════════════════════════════════
  // SOURCES TAB
  // ═══════════════════════════════════════════

  const renderSources = () => {
    const VIEWS = [{k:"feeder",l:"Feeder outlets"},{k:"catalogue",l:"Source catalogue"},{k:"matrix",l:"Provenance matrix"},{k:"impact",l:"Source impact"},{k:"glossary",l:"Glossary"}];
    const COUNTRIES_MAT = ["UAE","Qatar","Bahrain","Saudi","Kuwait","Oman","Iraq"];
    const DAYS_MAT = Array.from({length:warDayRef},(_,i)=>i+1);

    // Provenance matrix: for a given country, map day -> provenance record
    const getMatProv = (country, day) => PROVENANCE[country+"-"+day];

    const matCellColor = (prov) => {
      if (!prov) return {bg:"transparent", border:C.border, label:"—", hasDispute:false, srcCount:0};
      const hasDispute = prov.dispute && prov.dispute.length > 0;
      const srcCount = (prov.primary||[]).length + (prov.corroborate||[]).length + (prov.dispute||[]).length;
      if (hasDispute) return {bg:C.peakBg, border:C.peak+"40", label:srcCount+"src", hasDispute:true, srcCount};
      if (srcCount >= 3) return {bg:C.reduction+"15", border:C.reduction+"40", label:srcCount+"src", hasDispute:false, srcCount};
      if (srcCount === 2) return {bg:C.accentBg, border:C.accent+"40", label:srcCount+"src", hasDispute:false, srcCount};
      return {bg:C.drone+"10", border:C.drone+"30", label:"1src", hasDispute:false, srcCount:1};
    };

    // Source impact: sort all sources by how many rows they anchor
    const rankedSources = Object.entries(sourceImpact)
      .sort((a,b)=>b[1]-a[1])
      .map(([id,count])=>({id,count,src:SOURCE_INDEX[id],rows:sourceRows[id]||[]}))
      .filter(x=>x.src);

    const cardBg = S_CARD;
    const maxImpact = rankedSources.length > 0 ? rankedSources[0].count : 1;

    return (
      <div>
        {/* View switcher */}
        <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap",alignItems:"center"}}>
          {VIEWS.map(v=>(
            <SubTabPill key={v.k} label={v.l} active={sourcesView===v.k} color={C.reduction} onClick={()=>setSourcesView(v.k)}/>
          ))}
          <div style={{marginLeft:"auto",fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>
            {safeSrcCount()} sources · {Object.keys(PROVENANCE).length} provenance records
          </div>
        </div>

        {/* ── VIEW 1: SOURCE CATALOGUE (original, preserved) ── */}
        {sourcesView==="catalogue" && (
          <div>
            <div style={{marginBottom:14,fontSize:FONT.label,color:C.textMuted,lineHeight:1.7}}>
              All data sourced from official government statements, verified news reporting, and credible OSINT analysis. <span style={{color:C.reduction,fontWeight:700}}>HIGH</span> = official MoD statement. <span style={{color:C.drone,fontWeight:700}}>MEDIUM</span> = derived/aggregated. <span style={{color:C.peak,fontWeight:700}}>LOW</span> = incident-based estimate.
            </div>
            {_SOURCES.map((cat,ci) => (
              <div key={ci} style={{marginBottom:12}}>
                <button onClick={()=>setExpandedSource(expandedSource===ci?null:ci)} style={{
                  width:"100%",textAlign:"left",padding:"11px 16px",background:C.surfaceAlt,
                  border:"1px solid "+C.border,borderRadius:expandedSource===ci?"8px 8px 0 0":"8px",
                  cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",
                  color:C.text,fontFamily:"'DM Sans',sans-serif",
                }}>
                  <div>
                    <span style={{fontSize:FONT.h3,fontWeight:700}}>{cat.cat}</span>
                    <span style={{fontSize:FONT.small,color:C.textDim,marginLeft:8}}>{cat.items.length} sources</span>
                    {cat.items.some(i=>i.id&&sourceRows[i.id]&&sourceRows[i.id].length>0) && (
                      <span style={{fontSize:FONT.small,marginLeft:8,color:C.accent,fontFamily:"'JetBrains Mono',monospace"}}>↳ {cat.items.reduce((s,i)=>s+(sourceRows[i.id]||[]).length,0)} row links</span>
                    )}
                  </div>
                  <span style={{fontSize:FONT.table,color:C.textDim,transition:"transform 0.2s",transform:expandedSource===ci?"rotate(180deg)":"rotate(0)"}}>▼</span>
                </button>
                {expandedSource===ci && (
                  <div style={{border:"1px solid "+C.border,borderTop:"none",borderRadius:"0 0 8px 8px",overflow:"hidden"}}>
                    {cat.items.map((item,ii) => {
                      const rowLinks = item.id ? sourceRows[item.id]||[] : [];
                      const isSelected = selectedSourceId===item.id;
                      return (
                        <div key={ii} style={{padding:"12px 16px",borderBottom:ii<cat.items.length-1?"1px solid "+C.border:"none",background:isSelected?C.accentBg:ii%2===0?C.surface:C.surfaceAlt}}>
                          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4,flexWrap:"wrap"}}>
                            {item.conf&&<ConfBadge conf={item.conf}/>}
                            <span style={{fontSize:FONT.table,fontWeight:600,color:C.text}}>{item.name}</span>
                            {item.url&&<a href={item.url} target="_blank" rel="noopener" style={{fontSize:FONT.small,color:C.accent,textDecoration:"none",fontFamily:"'JetBrains Mono',monospace"}}>↗ Link</a>}
                            {rowLinks.length>0 && (
                              <button onClick={()=>setSelectedSourceId(isSelected?null:item.id)} style={{marginLeft:"auto",fontSize:FONT.small,padding:"2px 8px",borderRadius:3,background:isSelected?C.accent+"20":C.surfaceAlt,border:"1px solid "+(isSelected?C.accent:C.border),color:isSelected?C.accent:C.textDim,cursor:"pointer",fontFamily:"'JetBrains Mono',monospace"}}>
                                {rowLinks.length} row{rowLinks.length>1?"s":""} ↓
                              </button>
                            )}
                          </div>
                          <div style={{fontSize:FONT.small,color:C.textMuted,lineHeight:1.5,marginBottom:isSelected&&rowLinks.length?8:0}}>{item.desc}</div>
                          {isSelected && rowLinks.length>0 && (
                            <div style={{marginTop:8,padding:10,background:C.bg,borderRadius:6,border:"1px solid "+C.borderLight}}>
                              <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,color:C.accent,fontFamily:"'JetBrains Mono',monospace",marginBottom:6}}>ROWS ANCHORED BY THIS SOURCE</div>
                              <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                                {rowLinks.map((rk,ri)=>{
                                  const prov = PROVENANCE[rk];
                                  const isDispute = prov&&prov.dispute&&prov.dispute.includes(item.id);
                                  return (
                                    <span key={ri} style={{fontSize:FONT.small,padding:"2px 8px",borderRadius:3,background:isDispute?C.peakBg:C.accentBg,border:"1px solid "+(isDispute?C.peak+"30":C.accent+"30"),color:isDispute?C.peak:C.accent,fontFamily:"'JetBrains Mono',monospace",cursor:"default"}}>
                                      {isDispute?"⚠ ":""}{rk}
                                    </span>
                                  );
                                })}
                              </div>
                              {rowLinks.length>0 && (
                                <div style={{marginTop:8,fontSize:FONT.small,color:C.textDim}}>
                                  Affects: {[...new Set(rowLinks.flatMap(rk=>PROVENANCE[rk]?.affects||[]))].slice(0,4).join(" · ")}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── VIEW 2: PROVENANCE MATRIX ── */}
        {sourcesView==="matrix" && (
          <div>
            <div style={{marginBottom:14}}>
              <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.7,marginBottom:10}}>
                Each cell shows how many sources back that country/day. Color = confidence quality. Click any cell to expand the full evidence chain. <span style={{color:C.peak}}>Red cells</span> = active source dispute logged.
              </div>
              <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
                <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>COUNTRY:</span>
                {COUNTRIES_MAT.map(c=>(
                  <button key={c} onClick={()=>setMatrixCountry(c)} style={{
                    padding:"3px 10px",fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",
                    background:matrixCountry===c?C.reduction+"15":"transparent",
                    color:matrixCountry===c?C.reduction:C.textDim,
                    border:"1px solid "+(matrixCountry===c?C.reduction+"50":C.border),
                    borderRadius:4,cursor:"pointer"
                  }}>{c}</button>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div style={{display:"flex",gap:12,marginBottom:12,flexWrap:"wrap"}}>
              {[
                {bg:C.reduction+"15",border:C.reduction+"40",label:"3+ sources"},
                {bg:C.accentBg,border:C.accent+"40",label:"2 sources"},
                {bg:C.drone+"10",border:C.drone+"30",label:"1 source"},
                {bg:C.peakBg,border:C.peak+"40",label:"Dispute logged"},
                {bg:"transparent",border:C.border,label:"No record"},
              ].map((l,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:6}}>
                  <div style={{width:14,height:14,borderRadius:3,background:l.bg,border:"1px solid "+l.border}}/>
                  <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{l.label}</span>
                </div>
              ))}
            </div>

            <div style={{position:"relative"}}>
              <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:4,display:"flex",alignItems:"center",gap:4}}><span style={{opacity:0.6}}>← scroll →</span> Swipe or scroll horizontally to see all days</div>
              <div style={{overflowX:"auto",WebkitOverflowScrolling:"touch"}}>
              <div style={{minWidth:720}}>
                {/* Day header */}
                <div style={{display:"flex",marginLeft:80,marginBottom:4}}>
                  {DAYS_MAT.map(d=>(
                    <div key={d} style={{width:36,flexShrink:0,textAlign:"center",fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",fontWeight:600}}>D{d}</div>
                  ))}
                </div>
                {/* Single country row — all 17 days */}
                <div style={{display:"flex",alignItems:"center",marginBottom:4}}>
                  <div style={{width:80,fontSize:FONT.small,fontWeight:700,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",flexShrink:0}}>{matrixCountry}</div>
                  {DAYS_MAT.map(d=>{
                    const prov = getMatProv(matrixCountry,d);
                    const {bg,border,label,hasDispute} = matCellColor(prov);
                    const cellKey = matrixCountry+"-"+d;
                    const isActive = provenanceKey===cellKey;
                    return (
                      <div key={d}
                        onClick={()=>setProvenanceKey(isActive?null:prov?cellKey:null)}
                        style={{width:34,flexShrink:0,height:34,margin:"0 1px",borderRadius:4,background:isActive?C.accent+"30":bg,border:"1px solid "+(isActive?C.accent:border),cursor:prov?"pointer":"default",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"all 0.12s"}}
                      >
                        {prov ? (
                          <>
                            <span style={{fontSize:FONT.small,fontWeight:700,color:hasDispute?C.peak:C.textMuted,fontFamily:"'JetBrains Mono',monospace",lineHeight:1}}>{label}</span>
                            {hasDispute && <span style={{fontSize:FONT.tiny,color:C.peak}}>!</span>}
                          </>
                        ) : (
                          <span style={{fontSize:FONT.small,color:C.textDim,opacity:0.4}}>—</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* All countries overview rows */}
                <div style={{marginTop:16,borderTop:"1px solid "+C.border,paddingTop:12}}>
                  <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:8}}>ALL COUNTRIES OVERVIEW</div>
                  {COUNTRIES_MAT.map(country=>(
                    <div key={country} style={{display:"flex",alignItems:"center",marginBottom:3}}>
                      <div style={{width:80,fontSize:FONT.small,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",flexShrink:0}}>{country}</div>
                      {DAYS_MAT.map(d=>{
                        const prov = getMatProv(country,d);
                        const {bg,border,hasDispute} = matCellColor(prov);
                        return (
                          <div key={d} style={{width:34,flexShrink:0,height:16,margin:"0 1px",borderRadius:2,background:bg,border:"0.5px solid "+border,position:"relative"}}>
                            {hasDispute && <div style={{position:"absolute",top:2,right:2,width:4,height:4,borderRadius:"50%",background:C.peak}}/>}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Expanded provenance from matrix */}
                {provenanceKey && PROVENANCE[provenanceKey] && (
                  <div style={{marginTop:12}}>
                    <ProvenanceChain pKey={provenanceKey} onClose={()=>setProvenanceKey(null)}/>
                  </div>
                )}
              </div>
            </div>
            </div>

            {/* Coverage stats */}
            <div style={{...cardBg,marginTop:16}}>
              <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:12}}>PROVENANCE COVERAGE SUMMARY</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10}}>
                {[
                  {label:"Records logged",value:Object.keys(PROVENANCE).length,color:C.accent},
                  {label:"Active disputes",value:Object.values(PROVENANCE).filter(p=>p.dispute&&p.dispute.length>0).length,color:C.peak},
                  {label:"Multi-source rows",value:Object.values(PROVENANCE).filter(p=>(p.primary||[]).length+(p.corroborate||[]).length>=2).length,color:C.reduction},
                  {label:"Sources indexed",value:Object.keys(SOURCE_INDEX).length,color:C.cruise},
                ].map((s,i)=>(
                  <div key={i} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:6,padding:"10px 14px",borderTop:"2px solid "+s.color}}>
                    <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1,marginBottom:4}}>{s.label}</div>
                    <div style={{fontSize:FONT.h1,fontWeight:800,color:s.color,fontFamily:"'JetBrains Mono',monospace"}}>{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── VIEW 3: SOURCE IMPACT ── */}
        {sourcesView==="impact" && (
          <div>
            <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.7,marginBottom:14}}>
              Sources ranked by how many provenance records they anchor. <span style={{color:C.peak,fontWeight:600}}>If a source were retracted</span>, all rows it anchors would lose their primary evidence base. Bar width = relative impact.
            </div>
            {rankedSources.map(({id,count,src,rows},i)=>{
              const pct = count / maxImpact * 100;
              const disputeRows = rows.filter(rk=>PROVENANCE[rk]&&PROVENANCE[rk].dispute&&PROVENANCE[rk].dispute.includes(id));
              const isExpanded = selectedSourceId===id;
              return (
                <div key={id} style={{...cardBg,marginBottom:10,cursor:"pointer"}} role="button" tabIndex={0} aria-label={"Source: " + id} onClick={()=>setSelectedSourceId(isExpanded?null:id)} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();setSelectedSourceId(isExpanded?null:id);}}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
                    <div style={{fontSize:FONT.table,fontWeight:700,color:C.text,flex:1}}>{src.name}</div>
                    <ConfBadge conf={src.conf}/>
                    <span style={{fontSize:FONT.small,fontWeight:800,color:C.accent,fontFamily:"'JetBrains Mono',monospace",minWidth:40,textAlign:"right"}}>{count} row{count!==1?"s":""}</span>
                  </div>
                  {/* Impact bar */}
                  <div style={{height:6,background:C.bg,borderRadius:3,overflow:"hidden",marginBottom:6}}>
                    <div style={{height:"100%",width:pct+"%",background:count>=5?C.peak:count>=3?C.drone:C.accent,borderRadius:3}}/>
                  </div>
                  <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
                    <span style={{fontSize:FONT.small,color:C.textDim}}>{src.cat}</span>
                    {disputeRows.length>0 && (
                      <span style={{fontSize:FONT.small,color:C.peak,fontFamily:"'JetBrains Mono',monospace"}}>⚠ cited as dispute in {disputeRows.length} row{disputeRows.length>1?"s":""}</span>
                    )}
                    <span style={{fontSize:FONT.small,color:C.textDim,marginLeft:"auto"}}>click to expand</span>
                  </div>
                  {isExpanded && (
                    <div style={{marginTop:10,padding:10,background:C.bg,borderRadius:6,border:"1px solid "+C.borderLight}}>
                      <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:6}}>ANCHORED ROWS</div>
                      <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:8}}>
                        {rows.map((rk,ri)=>{
                          const isD = PROVENANCE[rk]&&PROVENANCE[rk].dispute&&PROVENANCE[rk].dispute.includes(id);
                          return (
                            <span key={ri} style={{fontSize:FONT.small,padding:"2px 8px",borderRadius:3,background:isD?C.peakBg:C.accentBg,border:"1px solid "+(isD?C.peak+"30":C.accent+"30"),color:isD?C.peak:C.accent,fontFamily:"'JetBrains Mono',monospace"}}>
                              {isD?"⚠ ":""}{rk}
                            </span>
                          );
                        })}
                      </div>
                      <div style={{fontSize:FONT.small,color:C.textDim,lineHeight:1.6}}>{src.desc}</div>
                      {src.url && <a href={src.url} target="_blank" rel="noopener" style={{fontSize:FONT.small,color:C.accent,display:"block",marginTop:6}}>↗ {src.url}</a>}
                    </div>
                  )}
                </div>
              );
            })}
            {rankedSources.length===0 && (
              <div style={{padding:20,textAlign:"center",color:C.textDim,fontSize:FONT.label}}>No indexed sources with provenance links yet. Add source IDs to SOURCES items to enable impact tracking.</div>
            )}
          </div>
        )}

        {sourcesView==="feeder" && (
          <div>
            <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.7,marginBottom:14}}>
              Direct links to outlet homepages — not specific articles. Use these as your independent verification starting points.
              <span style={{color:C.drone,display:"block",marginTop:4}}>Arabic-primary sources are marked AR. U-Med sources have outlined confidence badges.</span>
            </div>
            <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap",alignItems:"center"}}>
              <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>FILTER:</span>
              {["all","UAE","Qatar","Bahrain","Saudi","Kuwait","Oman","Iraq","Global/US"].map(f=>(
                <button key={f} onClick={()=>setFeederFilter(f)} style={{padding:"3px 10px",fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",background:feederFilter===f?C.accentBg:"transparent",color:feederFilter===f?C.accent:C.textDim,border:"1px solid "+(feederFilter===f?C.accent+"50":C.border),borderRadius:4,cursor:"pointer"}}>{f}</button>
              ))}
            </div>
            {_FEEDER.map((tier,ti)=>{
              const tC={1:C.reduction,2:C.cruise,3:C.drone,4:C.accent};
              if (!tier || !Array.isArray(tier.outlets)) return null;
              const outlets = feederFilter==="all" ? tier.outlets : tier.outlets.filter(o=>{
                if(feederFilter==="Global/US") return ["Global","US","UK","EU","INT","US/MIL"].includes(o.country);
                return o.country===feederFilter||o.country.includes(feederFilter);
              });
              if(outlets.length===0) return null;
              return (
                <div key={ti} style={{marginBottom:18}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8,paddingBottom:6,borderBottom:"1px solid "+C.border}}>
                    <div style={{width:20,height:20,borderRadius:3,background:tC[tier.tier]+"20",border:"1px solid "+tC[tier.tier]+"40",display:"flex",alignItems:"center",justifyContent:"center",fontSize:FONT.small,fontWeight:800,color:tC[tier.tier],fontFamily:"'JetBrains Mono',monospace"}}>{tier.tier}</div>
                    <span style={{fontSize:FONT.label,fontWeight:700,color:C.text}}>{tier.tierlabel}</span>
                    <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{outlets.length} outlets</span>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:8}}>
                    {outlets.map((outlet,oi)=>{
                      const rc=(sourceRows[outlet.id]||[]).length;
                      return (
                        <div key={oi} style={{background:C.surfaceAlt,border:"1px solid "+(outlet.conf!=="H"?C.accent+"20":C.border),borderRadius:6,padding:"10px 12px",borderLeft:"3px solid "+tC[tier.tier]}}>
                          <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:4}}>
                            <div style={{flex:1,minWidth:0}}>
                              <a href={outlet.url} target="_blank" rel="noopener" style={{fontSize:FONT.label,fontWeight:700,color:C.text,textDecoration:"none",display:"block",marginBottom:1}}>{outlet.name} ↗</a>
                              <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{outlet.domain}</span>
                            </div>
                            <ConfBadge conf={outlet.conf}/>
                          </div>
                          <div style={{display:"flex",gap:4,marginTop:6,flexWrap:"wrap"}}>
                            <span style={{fontSize:FONT.small,padding:"1px 5px",borderRadius:3,background:C.bg,color:C.textDim,border:"1px solid "+C.border,fontFamily:"'JetBrains Mono',monospace"}}>{outlet.country}</span>
                            <span style={{fontSize:FONT.small,padding:"1px 5px",borderRadius:3,background:C.bg,color:C.textDim,border:"1px solid "+C.border,fontFamily:"'JetBrains Mono',monospace"}}>{outlet.type}</span>
                            {(outlet.lang || "").includes("AR")&&<span style={{fontSize:FONT.small,padding:"1px 5px",borderRadius:3,background:C.cruise+"10",color:C.cruise,border:"1px solid "+C.cruise+"30",fontFamily:"'JetBrains Mono',monospace"}}>AR</span>}
                            {rc>0&&<span style={{fontSize:FONT.small,padding:"1px 5px",borderRadius:3,background:C.accentBg,color:C.accent,border:"1px solid "+C.accent+"30",fontFamily:"'JetBrains Mono',monospace"}}>{rc} rows</span>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div style={{marginTop:14,padding:12,background:C.surfaceAlt,borderRadius:6,border:"1px solid "+C.border,fontSize:FONT.small,color:C.textDim,lineHeight:1.7}}>
              <span style={{color:C.textMuted,fontWeight:700}}>AUDIT NOTE: </span>Links open outlet homepages. Search by date + country to verify claims. Arabic outlets (AR) may need translation. Tier 1 = primary evidence. Tiers 2-4 = corroborating/supplementary. U-High/U-Med = non-official sourcing.
            </div>
          </div>
        )}

        {sourcesView==="glossary" && (
          <div>
            <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.7,marginBottom:10}}>
              Key terms, acronyms, and methodology definitions used throughout the tracker.
            </div>
            <input type="text" value={glossarySearch} onChange={e=>setGlossarySearch(e.target.value)} placeholder="Search glossary..." style={{width:"100%",maxWidth:340,padding:"7px 12px",borderRadius:6,border:"1px solid "+C.border,background:C.bg,color:C.text,fontSize:FONT.label,fontFamily:"'JetBrains Mono',monospace",marginBottom:14,boxSizing:"border-box",outline:"none"}}/>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:10}}>
              {GLOSSARY_ENTRIES.filter(g=>!glossarySearch.trim()||g.term.toLowerCase().includes(glossarySearch.toLowerCase())||g.def.toLowerCase().includes(glossarySearch.toLowerCase())).map((g,i)=>(
                <div key={i} style={{background:S_CARD.background,border:S_CARD.border,borderRadius:8,padding:12}}>
                  <div style={{fontSize:FONT.label,fontWeight:700,color:C.accent,marginBottom:4,fontFamily:"'JetBrains Mono',monospace"}}>{g.term}</div>
                  <div style={{fontSize:FONT.small,color:C.textMuted,lineHeight:1.55}}>{g.def}</div>
                </div>
              ))}
              {GLOSSARY_ENTRIES.filter(g=>!glossarySearch.trim()||g.term.toLowerCase().includes(glossarySearch.toLowerCase())||g.def.toLowerCase().includes(glossarySearch.toLowerCase())).length===0 && (
                <div style={{fontSize:FONT.label,color:C.textDim,padding:20,textAlign:"center"}}>No glossary entries match "{glossarySearch}"</div>
              )}
            </div>
          </div>
        )}

      </div>
    );
  };


  // ═══════════════════════════════════════════
  // TAB ROUTING + LAYOUT
  // ═══════════════════════════════════════════


  // ═══════════════════════════════════════════
  // INGEST TAB — Automated scan + manual paste + apply-to-file
  // ═══════════════════════════════════════════

  const COUNTRY_SOURCES = {
    UAE: "Check UAE MoD (@modgovae on X/Twitter), WAM (wam.ae), Gulf News (gulfnews.com), Khaleej Times, Emirates247, Sharjah24 for official MoD intercept statements.",
    Qatar: "Check Qatar MoD, QNA (qna.org.qa), The Peninsula Qatar (thepeninsulaqatar.com), Doha News for MoD/MoI statements and intercept data.",
    Bahrain: "Check BDF (Bahrain Defence Force) statements, BNA (bna.bh), Voice of Emirates, Caliber.Az, Bernama for cumulative checkpoint figures.",
    Saudi: "Check SPA (spa.gov.sa), Arab News (arabnews.com), Saudi Gazette for fragmented regional intercept bulletins.",
    Kuwait: "Check KUNA (kuna.net.kw), Kuwait Times, Arab Times for split Army GHQ and National Guard reports.",
    Oman: "Check ONA (onanews.om), Times of Oman, Muscat Daily for incident-only reporting on Duqm/Salalah/Sohar.",
    Iraq: "Check Shafaq News, Iraqi News Agency, Al Jazeera Iraq, Reuters Baghdad for facility-specific incidents.",
  };

  const callClaude = useCallback(async (systemPrompt, userMessage, useWebSearch) => {
    const useProxy = serverHasApiKey && isAdmin && iwtServerOk;
    if (!useProxy && !aiApiKey.trim()) throw new Error("Enter your Anthropic API key first (or set ANTHROPIC_API_KEY on the server).");
    const body = {
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    };
    if (useWebSearch) body.tools = [{ type: "web_search_20250305", name: "web_search" }];
    let r;
    if (useProxy) {
      // Server-side proxy — API key never leaves the server
      const base = (typeof window !== "undefined" && window.location.protocol !== "file:") ? "" : IWT_BASE;
      r = await fetch(base + "/api/iwt/claude", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + adminToken,
        },
        body: JSON.stringify(body),
      });
    } else {
      // Direct browser call (fallback for file:// or no server key)
      r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": aiApiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify(body),
      });
    }
    const data = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(data.error?.message || "API error " + r.status);
    const textBlocks = (data.content || []).filter(b => b.type === "text");
    const rawText = textBlocks.map(b => b.text).join("\n");
    return { rawText, usage: data.usage, content: data.content };
  }, [aiApiKey, serverHasApiKey, isAdmin, iwtServerOk, adminToken]);

  const parseClaudeJson = (rawText) => {
    const cleaned = rawText.replace(/```json\s*/g, "").replace(/```/g, "").trim();
    try { return JSON.parse(cleaned); } catch (_) {}
    const start = cleaned.indexOf("{");
    if (start < 0) throw new Error("No JSON in Claude response");
    let depth = 0, inStr = false, esc = false;
    for (let i = start; i < cleaned.length; i++) {
      const c = cleaned[i];
      if (esc) { esc = false; continue; }
      if (c === "\\") { esc = true; continue; }
      if (c === '"') { inStr = !inStr; continue; }
      if (inStr) continue;
      if (c === "{") depth++;
      else if (c === "}") { depth--; if (depth === 0) return JSON.parse(cleaned.slice(start, i + 1)); }
    }
    throw new Error("Unbalanced JSON in Claude response");
  };

  const VERIFIER_SYSTEM = `You verify Iran War Tracker ingest candidates. Each item has an id, a data object, and optional source URLs from the scan bundle.
Return ONLY JSON: { "verdicts": { "<id>": { "verdict": "PASS"|"WARN"|"FAIL", "reasons": ["..."] } } }
Rules: (1) Numeric fields must be plausibly supported by cited reporting or marked conf M/L as derived estimates. (2) FAIL if numbers look inconsistent with the text or invented. (3) WARN if URLs are missing or evidence is thin. (4) PASS if internally consistent.`;

  const COUNTRY_ARRAYS = {UAE:"UAE_DATA",Qatar:"QATAR_DATA",Bahrain:"BAHRAIN_DATA",Saudi:"SAUDI_DATA",Kuwait:"KUWAIT_DATA",Oman:"OMAN_DATA",Iraq:"IRAQ_DATA"};

  const runVerifierPass = useCallback(async (countryScan, globalScan) => {
    if (!aiApiKey.trim()) return;
    setVerifierLoading(true);
    try {
      const items = [];
      const pushObj = (id, data, urls) => { items.push({ id, data, urls: urls || [] }); };
      if (countryScan && countryScan.results) {
        countryScan.results.forEach((cr) => {
          (cr.rows || []).forEach((row, ri) => pushObj(cr.country + "-" + ri, row, cr.sources));
          (cr.leakers || []).forEach((l, li) => pushObj(cr.country + "-L" + li, l, cr.sources));
        });
      }
      if (globalScan && globalScan.results) {
        Object.entries(globalScan.results).forEach(([bundleName, bundle]) => {
          if (!bundle || bundle.error) return;
          const urls = bundle.sources || [];
          Object.entries(bundle).forEach(([k, v]) => {
            if (k === "sources" || k === "noNewData" || k === "error") return;
            if (k === "iranReconciliationPatch" && v && typeof v === "object") {
              pushObj("g-" + bundleName + "-iranReconciliationPatch", v, urls);
            } else if (k === "provenancePatch" && v && typeof v === "object") {
              Object.entries(v).forEach(([pk, pv]) => pushObj("g-" + bundleName + "-prov-" + String(pk).replace(/[^a-zA-Z0-9_-]/g, "_"), pv, urls));
            } else if (k === "briefingPatches" && Array.isArray(v)) {
              v.forEach((bp, i) => pushObj("g-" + bundleName + "-brief-" + i, bp, urls));
            } else if (k === "sourcesAppend" && Array.isArray(v)) {
              v.forEach((spec, i) => pushObj("g-" + bundleName + "-sourcesAppend-" + i, spec, urls));
            } else if (k === "feederAppend" && Array.isArray(v)) {
              v.forEach((spec, i) => pushObj("g-" + bundleName + "-feederAppend-" + i, spec, urls));
            } else if (Array.isArray(v)) {
              v.forEach((row, i) => pushObj("g-" + bundleName + "-" + k + "-" + i, row, urls));
            }
          });
        });
      }
      if (items.length === 0) { setVerifierResults({}); return; }
      const { rawText } = await callClaude(VERIFIER_SYSTEM, JSON.stringify({ items, note: "Return verdicts keyed by exact id string." }), false);
      const parsed = parseClaudeJson(rawText);
      let verdicts = parsed.verdicts && typeof parsed.verdicts === "object" ? parsed.verdicts : parsed;
      if (typeof verdicts === "object" && verdicts && !Array.isArray(verdicts)) {
        Object.keys(verdicts).forEach((k) => {
          if (typeof verdicts[k] === "string") verdicts[k] = { verdict: verdicts[k], reasons: [] };
        });
      }
      setVerifierResults(typeof verdicts === "object" && !Array.isArray(verdicts) ? verdicts : {});
    } catch (e) {
      console.warn("Verifier failed", e);
      setIngestError("Verifier failed: " + e.message);
    } finally {
      setVerifierLoading(false);
    }
  }, [aiApiKey, callClaude]);

  const hasAnyApiKey = !!(aiApiKey.trim() || (serverHasApiKey && isAdmin && iwtServerOk));
  const runScan = useCallback(async () => {
    const canUseProxy = serverHasApiKey && isAdmin && iwtServerOk;
    if (!canUseProxy && !aiApiKey.trim()) { setIngestError("Enter your Anthropic API key first (or log in as admin to use the server key)."); return; }
    setScanLoading(true); setIngestError(null); setScanResults(null); setScanApproved({}); setGlobalScanResults(null); setVerifierResults({});
    try { sessionStorage.setItem("iwt_apikey", aiApiKey); } catch(e) {}
    try {
      let countryScanPayload = null;
      const allResults = [];
      if (scanScopes.includes("countries")) {
        const batch = scanCountries.slice(0, 3);
        const batch2 = scanCountries.slice(3);
        const processBatch = async (countries) => {
          return Promise.allSettled(countries.map(async (country) => {
            const MAP = {UAE:"UAE",Qatar:"Qatar",Bahrain:"Bahrain",Saudi:"Saudi",Kuwait:"Kuwait",Oman:"Oman",Iraq:"Iraq"};
            const fn = DATA_BY_COUNTRY[MAP[country]]; const latestRows = fn ? fn().slice(-3) : [];
            const latestSummary = latestRows.length ? latestRows.map(r => `D${r.day} ${r.date}: B=${r.B??"?"} C=${r.C??"?"} U=${r.U??"?"} dead=${r.deaths??"?"} inj=${r.inj??"?"}`).join("; ") : "No recent rows";
            const sources = COUNTRY_SOURCES[country] || "";
            // Calculate today's war day for the prompt
            const todayDate = new Date();
            const warStart = new Date(2026, 1, 27); // Feb 27 midnight = day 0, Feb 28 = day 1
            const todayWarDay = Math.floor((todayDate - warStart) / 86400000);
            const systemPrompt = `You are an intelligence analyst updating the Iran War Tracker.
Search for NEW information about ${country} since war day ${scanSinceDay !== null ? scanSinceDay : warDayRef}.

DAY CALCULATION: Feb 28, 2026 = Day 1. Formula: Day = (date - Feb 27). Examples: Mar 1=D2, Mar 5=D6, Mar 10=D11, Mar 15=D16, Mar 20=D21, Mar 22=D23. Today is Day ${todayWarDay}.
ALREADY TRACKED (latest rows): ${latestSummary}

VERIFIED SOURCES TO CHECK: ${sources}
Also check: Al Jazeera, Reuters, BBC, AFP, FDD/Long War Journal, Critical Threats (AEI), Alma Research Center.

Search for: 1) Official MoD intercept counts (B/C/U) 2) Verified news 3) Damage/leaker incidents 4) Casualty updates 5) Economic impact 6) IRGC claims

Return ONLY a JSON object with: country, targetArray ("${COUNTRY_ARRAYS[country]||country+"_DATA"}"), rows (array of {date, day, phase, B, C, U, Bd, Ud, deaths, inj, deathsDay, injDay, conf, note}), leakers (array of {day, date, country, type, target, severity, targetType, location, desc, status}), summaryUpdates ({totalB, totalC, totalU, killed, injured, asOf}), sources (array of URLs), noNewData (boolean). Use null for missing numeric fields. Conf values: H=official, M=derived, L=fragmentary.
PHASE: We are in Phase 3 (Day 12+). All new rows MUST have phase: 3. Do not return phase 1 or 2 data.
Rules: B/C/U = DAILY intercepted or destroyed for that calendar day, not campaign cumulative.
CASUALTIES — do not confuse the two: (1) deaths and inj = official RUNNING TOTALS as of that date when the source says e.g. death toll stands at N, total wounded since start M. (2) deathsDay and injDay = NEW casualties explicitly attributed to THAT day only (e.g. two more injured today → injDay=2). If the article only repeats the running total with no new fatalities, set deathsDay=0. If it only repeats injury total without stated daily increment, set injDay=null. Never put the running total into deathsDay/injDay.
Only include days after day ${scanSinceDay !== null ? scanSinceDay : warDayRef}. For Bahrain use dB/dU + cumB/cumU.`;
            const { rawText } = await callClaude(systemPrompt, `Search for all new ${country} updates since war day ${scanSinceDay !== null ? scanSinceDay : warDayRef}. Today is ${new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}.`, true);
            const parsed = parseClaudeJson(rawText);
            parsed.country = country;
            if (!parsed.rows) parsed.rows = [];
            if (!parsed.leakers) parsed.leakers = [];
            if (!parsed.sources) parsed.sources = [];
            return parsed;
          }));
        };
        const r1 = await processBatch(batch);
        const r2 = batch2.length > 0 ? await processBatch(batch2) : [];
        for (const s of [...r1, ...r2]) {
          allResults.push(s.status === "fulfilled" ? s.value : { country: "?", error: s.reason?.message, noNewData: true, rows: [], leakers: [], sources: [] });
        }
        countryScanPayload = { ok: true, results: allResults };
        setScanResults(countryScanPayload);
      }
      const globalResults = {};
      const today = new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});
      const todayDate = new Date();
      const warStart = new Date(2026, 1, 27);
      const todayWarDay = Math.floor((todayDate - warStart) / 86400000);
      if (scanScopes.includes("economics_full")) {
        try {
          const { rawText } = await callClaude(
            `DAY CALCULATION: Feb 28, 2026 = Day 1. Day = (date - Feb 27). Examples: Mar 1=D2, Mar 5=D6, Mar 10=D11, Mar 15=D16, Mar 20=D21, Mar 22=D23. Today is Day ${todayWarDay}.
PHASE: We are in Phase 3 (Day 12+). All new data MUST use phase: 3. Do not return phase 1 or 2 data.

Search for new Gulf war economic/market data since war day ${scanSinceDay !== null ? scanSinceDay : warDayRef}. Use Reuters, Argus, Bloomberg, Platts, CNBC.
Return ONLY JSON with TOP-LEVEL keys matching tracker arrays (use [] if none): OIL_PRICE_TIMELINE ({date,brent,wti,event,cumChg}), MARKET_EVENT_RESPONSE ({id,event,date,facility,commodity,pre,post,change,source,conf,note}), REFINERY_EVENTS ({day,date,facility,country,capacity,unit,status,desc,forceM}), FORCE_MAJEURE ({entity,country,day,date,sector,impact}), GCC_EQUITY ({market,pre,low,peakDrop,mar16,netChg,note}), GCC_CDS ({sovereign,pre,post,change,note}), HORMUZ_ANALYST ({date,analyst,premium,forecast,source}), sources (URLs), noNewData (boolean).`,
            `Economics full-cluster scan since D${scanSinceDay !== null ? scanSinceDay : warDayRef}. Today is ${today}.`, true);
          globalResults.economics_full = parseClaudeJson(rawText);
        } catch (e) { globalResults.economics_full = { error: e.message, noNewData: true }; }
      }
      if (scanScopes.includes("markets_shipping")) {
        try {
          const { rawText } = await callClaude(
            `DAY CALCULATION: Feb 28, 2026 = Day 1. Day = (date - Feb 27). Examples: Mar 1=D2, Mar 5=D6, Mar 10=D11, Mar 15=D16, Mar 20=D21, Mar 22=D23. Today is Day ${todayWarDay}.
PHASE: We are in Phase 3 (Day 12+). All new data MUST use phase: 3. Do not return phase 1 or 2 data.

Search shipping, bunker, insurance, container, vessel incidents for the 2026 Iran war since war day ${scanSinceDay !== null ? scanSinceDay : warDayRef}. Ship & Bunker, Lloyd's, Reuters.
Return ONLY JSON with keys: SHIPPING_INSURANCE ({date,label,warRisk,vlcc,vlsfo,hormuz,note}), BUNKER_PRICES ({date,vlsfo,hsfo,mgo,note}), VESSEL_ATTACKS ({day,date,vessel,flag,type,loc,killed,outcome}), INSURANCE_EVENTS ({date,event,detail,source}), CONTAINER_RATES ({route,pre,mar3,mar13,mar17,note}), SHIPPING_EVENTS ({day,date,event,impact,severity}), sources (URLs), noNewData (boolean).`,
            `Markets / shipping cluster since D${scanSinceDay !== null ? scanSinceDay : warDayRef}. Today is ${today}.`, true);
          globalResults.markets_shipping = parseClaudeJson(rawText);
        } catch (e) { globalResults.markets_shipping = { error: e.message, noNewData: true }; }
      }
      if (scanScopes.includes("iran_full")) {
        try {
          const { rawText } = await callClaude(
            `DAY CALCULATION: Feb 28, 2026 = Day 1. Day = (date - Feb 27). Examples: Mar 1=D2, Mar 5=D6, Mar 10=D11, Mar 15=D16, Mar 20=D21, Mar 22=D23. Today is Day ${todayWarDay}.
PHASE: We are in Phase 3 (Day 12+). All new data MUST use phase: 3. Do not return phase 1 or 2 data.

Search IRGC claims, weapons, disinformation since war day ${scanSinceDay !== null ? scanSinceDay : warDayRef}. PressTV, Tasnim, ISW, FDD, Alma.
Return ONLY JSON with keys: IRAN_DAY_CLAIMS ({date,day,waves,claimed,weapons,targets,propFlag,conf}), WEAPON_SYSTEMS ({name,type,status,evidence,range,warhead,debut}), IRAN_DISINFO ({date,claim,source,refutation,type}), iranReconciliationPatch (optional partial object with numeric keys only: iranMissiles, iranDrones, fddMissiles, fddDrones, defInterceptBM, defInterceptCM, defInterceptTotal, defInterceptDrones, usKilled, usWounded, iranClaimedUSKilled), optional IRAN_MILITARY_ORDER ({domain,branch,systems,prewar_quantity,est_remaining,status,note}), sources (URLs), noNewData (boolean).`,
            `Iran / IRGC full cluster since D${scanSinceDay !== null ? scanSinceDay : warDayRef}. Today is ${today}.`, true);
          globalResults.iran_full = parseClaudeJson(rawText);
        } catch (e) { globalResults.iran_full = { error: e.message, noNewData: true }; }
      }
      if (scanScopes.includes("us_israel")) {
        try {
          const { rawText } = await callClaude(
            `DAY CALCULATION: Feb 28, 2026 = Day 1. Day = (date - Feb 27). Examples: Mar 1=D2, Mar 5=D6, Mar 10=D11, Mar 15=D16, Mar 20=D21, Mar 22=D23. Today is Day ${todayWarDay}.
PHASE: We are in Phase 3 (Day 12+). All new data MUST use phase: 3. Do not return phase 1 or 2 data.

Search US policy / legislative / funding events and Israeli operational headlines since war day ${scanSinceDay !== null ? scanSinceDay : warDayRef} relevant to Epic Fury / Roaring Lion.
Return ONLY JSON: US_POLICY_EVENTS ({day,date,topic,detail,conf}), ISRAEL_OPS_TIMELINE ({day,date,event,detail,conf}), optional COALITION_AIR_ORDER ({base,country,aircraft,quantity,role,squadron,nation,status}), optional US_NAVAL_FORCES ({id,name,type,status,note}), sources (URLs), noNewData (boolean).`,
            `US / Israel supplemental timeline since D${scanSinceDay !== null ? scanSinceDay : warDayRef}. Today is ${today}.`, true);
          globalResults.us_israel = parseClaudeJson(rawText);
        } catch (e) { globalResults.us_israel = { error: e.message, noNewData: true }; }
      }
      if (scanScopes.includes("sources_glossary")) {
        try {
          const { rawText } = await callClaude(
            `DAY CALCULATION: Feb 28, 2026 = Day 1. Day = (date - Feb 27). Examples: Mar 1=D2, Mar 5=D6, Mar 10=D11, Mar 15=D16, Mar 20=D21, Mar 22=D23. Today is Day ${todayWarDay}.
PHASE: We are in Phase 3 (Day 12+). All new data MUST use phase: 3. Do not return phase 1 or 2 data.

Search for new glossary-worthy terms, high-value source rows, optional provenance updates, and briefing deltas since war day ${scanSinceDay !== null ? scanSinceDay : warDayRef}.
Return ONLY JSON with keys: GLOSSARY_ENTRIES ([{term,def}]), provenancePatch (object keyed like "UAE-21" with {primary:[],corroborate:[],dispute:[],rawClaim,derivation,affects} — optional), briefingPatches ([{collection:"BRIEF_ECON"|"BRIEF_MARKETS"|"BRIEF_ADV", key:"fdi"|"tour"|"a"|..., patch:{execSummary?, kpis?, appendDetailedSection?}}]), sourcesAppend ([{category:"UAE Official"|"Qatar Official"|..., item:{id,name,url,desc,conf}}]), feederAppend ([{tier:1-4, outlet:{id,name,domain,url,country,type,lang,conf}}]), sources (URLs), noNewData (boolean).`,
            `Sources / glossary / provenance / briefing append scan since D${scanSinceDay !== null ? scanSinceDay : warDayRef}. Today is ${today}.`, true);
          globalResults.sources_glossary = parseClaudeJson(rawText);
        } catch (e) { globalResults.sources_glossary = { error: e.message, noNewData: true }; }
      }
      const globalPayload = Object.keys(globalResults).length ? { ok: true, results: globalResults } : null;
      if (globalPayload) setGlobalScanResults(globalPayload);
      if (verifierAfterScan && (countryScanPayload || globalPayload)) {
        await runVerifierPass(countryScanPayload, globalPayload);
      }
    } catch (e) { setIngestError("Scan failed: " + e.message); } finally { setScanLoading(false); }
  }, [aiApiKey, serverHasApiKey, isAdmin, iwtServerOk, scanCountries, scanScopes, warDayRef, scanSinceDay, callClaude, verifierAfterScan, runVerifierPass]);

  const runBriefingRefresh = useCallback(async () => {
    const canUseProxy = serverHasApiKey && isAdmin && iwtServerOk;
    if (!canUseProxy && !aiApiKey.trim()) { setIngestError("API key required for briefing refresh."); return; }
    setBriefingRefreshLoading(true); setIngestError(null); setBriefingRefreshResult(null);
    const briefings = [
      { collection: "BRIEF_ECON", key: "fdi", brief: BRIEF_ECON.fdi, context: () => "Recent refinery events: " + REFINERY_EVENTS.slice(-5).map(r=>r.date+": "+r.facility+" "+r.status).join("; ") + ". Force Majeure: " + FORCE_MAJEURE.map(f=>f.entity+" "+f.sector).join("; ") + ". Oil prices: " + OIL_PRICE_TIMELINE.slice(-5).map(r=>r.date+": Brent $"+r.brent).join("; ") },
      { collection: "BRIEF_ECON", key: "fx", brief: BRIEF_ECON.fx, context: () => "GCC equity: " + GCC_EQUITY.map(r=>r.market+" "+r.netChg).join("; ") + ". GCC CDS: " + GCC_CDS.map(r=>r.sovereign+" "+r.change).join("; ") },
      { collection: "BRIEF_ECON", key: "food", brief: BRIEF_ECON.food, context: () => "Shipping events: " + SHIPPING_EVENTS.slice(-5).map(r=>r.date+": "+r.event).join("; ") + ". Container rates: " + CONTAINER_RATES.map(r=>r.route+" pre:"+r.pre).join("; ") },
      { collection: "BRIEF_MARKETS", key: "tour", brief: BRIEF_MARKETS.tour, context: () => "Civilian incidents: " + CIVILIAN_INCIDENTS.slice(-5).map(r=>r.date+": "+r.location).join("; ") + ". Shipping: " + SHIPPING_EVENTS.slice(-3).map(r=>r.event).join("; ") },
      { collection: "BRIEF_MARKETS", key: "semi", brief: BRIEF_MARKETS.semi, context: () => "Shipping insurance: " + SHIPPING_INSURANCE.slice(-3).map(r=>r.date+": warRisk "+r.warRisk).join("; ") + ". Vessel attacks: " + VESSEL_ATTACKS.slice(-3).map(r=>r.date+": "+r.vessel).join("; ") },
      { collection: "BRIEF_ADV", key: "a", brief: BRIEF_ADV.a, context: () => "Iran military order: " + IRAN_MILITARY_ORDER.map(r=>r.domain+": "+r.est_remaining).join("; ") + ". IRGC claims: " + IRAN_DAY_CLAIMS.slice(-3).map(r=>"D"+r.day+": "+r.claimed.slice(0,80)).join("; ") + ". Weapons: " + WEAPON_SYSTEMS.slice(-5).map(r=>r.name+" "+r.status).join("; ") },
      { collection: "BRIEF_ADV", key: "b", brief: BRIEF_ADV.b, context: () => "US policy: " + US_POLICY_EVENTS.slice(-5).map(r=>"D"+r.day+": "+r.topic).join("; ") + ". Coalition air order: " + COALITION_AIR_ORDER.length + " units. Naval: " + US_NAVAL_FORCES.map(r=>r.name+" "+r.status).join("; ") },
      { collection: "BRIEF_ADV", key: "c", brief: BRIEF_ADV.c, context: () => "Country intercepts (latest): UAE D" + (UAE_DATA.length>0?UAE_DATA[UAE_DATA.length-1].day:"?") + " B=" + (UAE_DATA.length>0?UAE_DATA[UAE_DATA.length-1].B:"?") + ". Reconciliation: defTotal=" + (IRAN_RECONCILIATION.defInterceptTotal||"?") },
      { collection: "BRIEF_ADV", key: "d", brief: BRIEF_ADV.d, context: () => "US policy: " + US_POLICY_EVENTS.slice(-3).map(r=>r.topic).join("; ") + ". Israel ops: " + ISRAEL_OPS_TIMELINE.slice(-3).map(r=>"D"+r.day+": "+r.event).join("; ") },
    ];
    const results = [];
    try {
      for (const b of briefings) {
        const currentSummary = b.brief ? (b.brief.execSummary || "").slice(0, 500) : "No existing summary.";
        const currentKpis = b.brief && b.brief.kpis ? b.brief.kpis.map(k => k.k + ": " + k.v).join("; ") : "No KPIs.";
        const dataContext = b.context();
        const sysPrompt = `You are updating an analytical briefing in the Iran War Tracker. The tracker is now on Day ${warDayRef}.
Return ONLY a JSON object with this structure:
{
  "collection": "${b.collection}",
  "key": "${b.key}",
  "patch": {
    "execSummary": "Updated executive summary reflecting latest data (2-4 sentences)...",
    "kpis": [{"k":"Metric Name","v":"Current Value"}],
    "keyFindings": ["Finding 1 based on new data", "Finding 2..."]
  }
}

RULES:
- Update execSummary to reflect current Day ${warDayRef} state, not just append
- Update KPIs with latest numbers from the data context
- Add 2-3 new keyFindings based on new data trends
- Be analytical and cite specific data points
- Keep the existing analytical tone`;
        const userMsg = `CURRENT BRIEFING (${b.collection}.${b.key}):
Executive Summary: ${currentSummary}
Current KPIs: ${currentKpis}

NEW DATA CONTEXT:
${dataContext}

Update this briefing with the latest data.`;
        try {
          const { rawText } = await callClaude(sysPrompt, userMsg, false);
          const parsed = parseClaudeJson(rawText);
          results.push({ ...parsed, _status: "ok" });
        } catch (e) {
          results.push({ collection: b.collection, key: b.key, _status: "error", _error: e.message });
        }
      }
      setBriefingRefreshResult(results);
    } catch (e) { setIngestError("Briefing refresh failed: " + e.message); } finally { setBriefingRefreshLoading(false); }
  }, [aiApiKey, serverHasApiKey, isAdmin, iwtServerOk, warDayRef, callClaude]);

  const runArticleIngest = useCallback(async () => {
    if (!articleText.trim()) { setIngestError("Paste an article or news text first."); return; }
    const canUseProxy = serverHasApiKey && isAdmin && iwtServerOk;
    if (!canUseProxy && !aiApiKey.trim()) { setIngestError("Enter your Anthropic API key first (or log in as admin to use the server key)."); return; }
    setArticleLoading(true); setIngestError(null); setArticleResults(null);
    try {
      const todayDate = new Date();
      const warStart = new Date(2026, 1, 27);
      const todayWarDay = Math.floor((todayDate - warStart) / 86400000);
      const systemPrompt = `You are a data extraction specialist for the Iran War Tracker.
Given a news article, extract ALL structured data that fits ANY of the array schemas below.
Return a single JSON object with top-level keys matching array names. Only include keys where you found relevant data.

DAY CALCULATION: Feb 28, 2026 = Day 1. Day = (date - Feb 27). Examples: Mar 1=D2, Mar 5=D6, Mar 10=D11, Mar 15=D16, Mar 20=D21, Mar 22=D23. Today is Day ${todayWarDay}.
PHASE: We are in Phase 3 (Day 12+). All new data MUST use phase: 3.

AVAILABLE ARRAYS — return ONLY keys where you found data:

UAE_DATA / QATAR_DATA / BAHRAIN_DATA / SAUDI_DATA / KUWAIT_DATA / OMAN_DATA / IRAQ_DATA:
  [{date, day, phase:3, B, C, U, Bd, Ud, deaths, inj, deathsDay, injDay, conf:"H"|"M"|"L", note}]
  B/C/U = DAILY intercepted. deaths/inj = RUNNING TOTALS. deathsDay/injDay = NEW that day.

LEAKER_LOG: [{day, date, country, type, target, severity, targetType, location, lat, lon, desc, status}]

OIL_PRICE_TIMELINE: [{date, brent, wti, event, cumChg}]
MARKET_EVENT_RESPONSE: [{id, event, date, facility, commodity, pre, post, change, source, conf, note}]
GCC_EQUITY: [{market, pre, low, peakDrop, mar16, netChg, note}]
GCC_CDS: [{sovereign, pre, post, change, note}]
HORMUZ_ANALYST: [{date, analyst, premium, forecast, source}]
SHIPPING_INSURANCE: [{date, label, warRisk, vlcc, vlsfo, hormuz, note}]
BUNKER_PRICES: [{date, vlsfo, hsfo, mgo, note}]
VESSEL_ATTACKS: [{day, date, vessel, flag, type, loc, killed, outcome}]
INSURANCE_EVENTS: [{date, event, detail, source}]
CONTAINER_RATES: [{route, pre, mar3, mar13, mar17, note}]
SHIPPING_EVENTS: [{day, date, event, impact, severity}]
REFINERY_EVENTS: [{day, date, facility, country, capacity, unit, status, desc, forceM}]
FORCE_MAJEURE: [{entity, country, day, date, sector, impact}]
IRAN_DAY_CLAIMS: [{date, day, waves, claimed, weapons, targets, propFlag, conf}]
WEAPON_SYSTEMS: [{name, type, status, evidence, range, warhead, debut}]
IRAN_DISINFO: [{date, claim, source, refutation, type}]
US_POLICY_EVENTS: [{day, date, topic, detail, conf}]
ISRAEL_OPS_TIMELINE: [{day, date, event, detail, conf}]
US_CASUALTIES: [{day, date, name, rank, service, cause, location, notes}]
COALITION_CASUALTIES: [{day, date, force, count, location, cause, notes}]
CIVILIAN_INCIDENTS: [{day, date, country, location, count, cause, notes, source}]
COALITION_AIR_ORDER: [{base, country, aircraft, quantity, role, squadron, nation, status}]
US_NAVAL_FORCES: [{id, name, type, status, note}]
IRAN_MILITARY_ORDER: [{domain, branch, systems, prewar_quantity, est_remaining, status, note}]
GLOSSARY_ENTRIES: [{term, def}]

Also include: sources (array of source URLs from the article), noNewData (boolean - true if nothing extractable).
One article may produce data for multiple arrays simultaneously.`;
      const { rawText } = await callClaude(systemPrompt, `Extract all structured data from this article:\n\n${articleText}`, false);
      const parsed = parseClaudeJson(rawText);
      setArticleResults(parsed);
    } catch (e) { setIngestError("Article extraction failed: " + e.message); } finally { setArticleLoading(false); }
  }, [articleText, aiApiKey, serverHasApiKey, isAdmin, iwtServerOk, callClaude]);

  const runIngestion = useCallback(async () => {
    if (!ingestText.trim()) { setIngestError("Paste a MoD statement first."); return; }
    const canUseProxy = serverHasApiKey && isAdmin && iwtServerOk;
    if (!canUseProxy && !aiApiKey.trim()) { setIngestError("Enter your Anthropic API key first (or log in as admin to use the server key)."); return; }
    setIngestLoading(true); setIngestError(null); setIngestResult(null); setIngestDiffRow(null);
    if (aiApiKey.trim()) { try { sessionStorage.setItem("iwt_apikey", aiApiKey); } catch(e) {} }
    try {
      const systemPrompt = `You are a military data extraction specialist. Extract structured data from Gulf state MoD statements about Iranian missile/drone attacks.
Return ONLY a JSON object with: date, day, phase (1-3), B, C, U, Bd, Ud, deaths, inj, deathsDay, injDay (integers or null), conf ("H"), note (max 200 chars), cumB, cumC, cumU (integers or null), country ("${ingestCountry}"), highlights (array), warningFlags (array).
Rules: B/C/U are DAILY intercepted counts, not cumulative. deaths and inj are official RUNNING TOTALS when the text states toll since start of attacks. deathsDay/injDay = NEW casualties for that day only; use 0 if source confirms no new deaths; use null if only cumulative is given without a daily increment.`;
      const { rawText } = await callClaude(systemPrompt, `Extract data from this ${ingestCountry} MoD statement:\n\n${ingestText}`, false);
      const parsed = parseClaudeJson(rawText);
      setIngestResult(parsed);
      const dataKey = ingestCountry === "Saudi" ? "Saudi" : ingestCountry;
      const arr = DATA_BY_COUNTRY[dataKey] ? DATA_BY_COUNTRY[dataKey]() : [];
      setIngestDiffRow(parsed.day != null ? arr.find(r => r.day === parsed.day) || null : null);
    } catch (e) { setIngestError("Parse failed: " + e.message); } finally { setIngestLoading(false); }
  }, [ingestText, ingestCountry, aiApiKey, serverHasApiKey, isAdmin, iwtServerOk, callClaude]);

  const applyUpdates = useCallback(async (updates, isDryRun) => {
    setApplyLoading(true); setIngestError(null);
    try {
      if (iwtServerOk) {
        const applyHeaders = { "Content-Type": "application/json" };
        if (adminToken) applyHeaders["Authorization"] = "Bearer " + adminToken;
        const r = await fetch(IWT_BASE + "/api/iwt/apply", {
          method: "POST",
          headers: applyHeaders,
          body: JSON.stringify({ updates, dryRun: isDryRun || false }),
        });
        const data = await r.json().catch(() => ({}));
        if (!r.ok) throw new Error(data.error || "HTTP " + r.status);
        if (!isDryRun && (data.rowsAdded > 0 || (data.modified && data.modified.length > 0))) {
          const entry = { ts: new Date().toISOString(), modified: data.modified, rowsAdded: data.rowsAdded, warnings: data.warnings };
          const hist = [entry, ...applyHistory].slice(0, 50);
          setApplyHistory(hist);
          try { sessionStorage.setItem("iwt_apply_history", JSON.stringify(hist)); } catch(e) {}
          setApplySuccess(data);
          // Auto-reload after 1.5s so the user sees the success banner briefly before fresh data loads
          setTimeout(() => window.location.reload(), 1500);
        }
        return data;
      } else {
        return null;
      }
    } catch (e) { setIngestError("Apply failed: " + e.message); return null; } finally { setApplyLoading(false); }
  }, [iwtServerOk, applyHistory]);

  const loadBackups = useCallback(async () => {
    if (!isAdmin || !iwtServerOk) return;
    setBackupsLoading(true);
    try {
      const base = (typeof window !== "undefined" && window.location.protocol !== "file:") ? "" : IWT_BASE;
      const r = await fetch(base + '/api/iwt/backups', { headers: { 'Authorization': 'Bearer ' + adminToken } });
      const j = await r.json();
      if (j.ok) setBackups(j.backups || []);
    } catch(e) { console.error('Failed to load backups:', e); }
    setBackupsLoading(false);
  }, [isAdmin, iwtServerOk, adminToken]);

  const restoreBackup = useCallback(async (timestamp) => {
    if (!confirm('Restore backup from ' + new Date(parseInt(timestamp)).toLocaleString() + '? Current state will be backed up first.')) return;
    try {
      const base = (typeof window !== "undefined" && window.location.protocol !== "file:") ? "" : IWT_BASE;
      const r = await fetch(base + '/api/iwt/restore', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + adminToken, 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp })
      });
      const j = await r.json();
      if (j.ok) { alert('Restored! Pre-restore backup saved. Reload to see changes.'); loadBackups(); }
      else alert('Restore failed: ' + (j.error || 'Unknown error'));
    } catch(e) { alert('Restore error: ' + e.message); }
  }, [adminToken, loadBackups]);

  const generateCode = (result) => {
    if (!result) return "";
    const r = result;
    const fields = [
      `date:"${r.date}"`, `day:${r.day}`, `phase:${r.phase}`,
      `B:${r.B ?? 'null'}`, `C:${r.C ?? 'null'}`, `U:${r.U ?? 'null'}`,
      r.Bd != null ? `Bd:${r.Bd}` : null,
      r.Ud != null ? `Ud:${r.Ud}` : null,
      `deaths:${r.deaths ?? 'null'}`, `inj:${r.inj ?? 'null'}`,
      r.deathsDay != null ? `deathsDay:${r.deathsDay}` : null,
      r.injDay != null ? `injDay:${r.injDay}` : null,
      `conf:"${r.conf}"`,
      `note:"${(r.note||"").replace(/"/g, "'")}"`
    ].filter(Boolean);
    return `  { ${fields.join(", ")} },`;
  };

  const copyCode = (code) => {
    navigator.clipboard?.writeText(code).then(() => { setCopiedCode(true); setTimeout(() => setCopiedCode(false), 2000); });
  };

  // Auto-ingest status mini-component (fetches last run info)
  const AutoIngestStatus = () => {
    const [status, setStatus] = React.useState(null);
    React.useEffect(() => {
      const base = (typeof window !== "undefined" && window.location.protocol !== "file:") ? "" : IWT_BASE;
      fetch(base + "/api/iwt/auto-ingest/status").then(r => r.json()).then(d => setStatus(d)).catch(() => {});
    }, []);
    if (!status || !status.lastRun) return <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>No auto-ingest runs yet. Use <b>3-auto-ingest.bat</b> or schedule via <b>4-schedule-daily-ingest.bat</b></div>;
    const lr = status.lastRun;
    const ago = Math.round((Date.now() - new Date(lr.ts).getTime()) / 60000);
    const agoStr = ago < 60 ? ago + "m ago" : Math.round(ago / 60) + "h ago";
    const scopeIcons = (lr.scopes || []).map(s => s.ok ? "✓" : "✗").join(" ");
    return (
      <div style={{fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace",lineHeight:1.8}}>
        <div style={{color:C.textMuted}}>Last run: <span style={{color:C.text,fontWeight:700}}>{new Date(lr.ts).toLocaleString()}</span> <span style={{color:C.textDim}}>({agoStr})</span></div>
        <div style={{color:C.textMuted}}>War day: <span style={{color:C.text}}>{lr.warDay}</span> · Rows added: <span style={{color:lr.rowsAdded > 0 ? C.reduction : C.textDim,fontWeight:700}}>{lr.rowsAdded}</span>{lr.dryRun && <span style={{color:C.drone,marginLeft:6}}>DRY RUN</span>}</div>
        <div style={{color:C.textMuted}}>Scopes: {(lr.scopes || []).map((s,i) => <span key={i} style={{color:s.ok ? C.reduction : C.peak,marginRight:6}}>{s.ok ? "✓" : "✗"} {s.scope}</span>)}</div>
        <div style={{color:C.textDim}}>Total runs: {status.totalRuns}</div>
      </div>
    );
  };

  // Schedule controls sub-component (extracted from IIFE to fix React hooks rules)
  const ScheduleControls = ({ adminToken: at, onError }) => {
    const [sched, setSched] = React.useState(null);
    const [selHours, setSelHours] = React.useState("6");
    React.useEffect(() => {
      const base = (typeof window !== "undefined" && window.location.protocol !== "file:") ? "" : IWT_BASE;
      fetch(base + "/api/iwt/auto-ingest/schedule").then(r => r.json()).then(d => setSched(d)).catch(() => {});
    }, []);
    const toggleSchedule = async () => {
      const base = (typeof window !== "undefined" && window.location.protocol !== "file:") ? "" : IWT_BASE;
      if (sched && sched.active) {
        const r = await fetch(base + "/api/iwt/auto-ingest/schedule", { method:"DELETE", headers:{"Authorization":"Bearer "+at} });
        const d = await r.json().catch(()=>({}));
        setSched({ok:true,active:false});
      } else {
        const r = await fetch(base + "/api/iwt/auto-ingest/schedule", {
          method:"POST", headers:{"Content-Type":"application/json","Authorization":"Bearer "+at},
          body:JSON.stringify({intervalHours:parseFloat(selHours)})
        });
        const d = await r.json().catch(()=>({}));
        if (r.ok) setSched({ok:true,active:true,intervalHours:parseFloat(selHours),startedAt:new Date().toISOString()});
        else onError("Schedule failed: " + (d.error || r.status));
      }
    };
    return (
      <div style={{marginTop:10,paddingTop:10,borderTop:"1px solid "+C.border}}>
        <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
          <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>Server schedule:</span>
          <select value={selHours} onChange={e=>setSelHours(e.target.value)} style={{background:C.bg,color:C.text,border:"1px solid "+C.border,borderRadius:4,fontSize:FONT.small,padding:"3px 6px",fontFamily:"'JetBrains Mono',monospace"}}>
            <option value="1">Every 1h</option>
            <option value="3">Every 3h</option>
            <option value="6">Every 6h</option>
            <option value="8">Every 8h</option>
            <option value="12">Every 12h</option>
            <option value="24">Every 24h</option>
          </select>
          <button type="button" onClick={toggleSchedule} style={{padding:"3px 12px",fontSize:FONT.small,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",
            background:sched&&sched.active?"rgba(248,113,113,0.15)":"rgba(52,211,153,0.15)",
            color:sched&&sched.active?"#f87171":C.reduction,
            border:"1px solid "+(sched&&sched.active?"#f8717150":C.reduction+"50"),borderRadius:4,cursor:"pointer"}}>
            {sched&&sched.active ? "■ Stop" : "▶ Start"}
          </button>
          {sched&&sched.active && <span style={{fontSize:FONT.small,color:C.reduction,fontFamily:"'JetBrains Mono',monospace"}}>● Active — every {sched.intervalHours}h since {new Date(sched.startedAt).toLocaleTimeString()}</span>}
        </div>
        <div style={{fontSize:FONT.small,color:C.textDim,marginTop:4,fontFamily:"'JetBrains Mono',monospace"}}>
          Server-side timer. Also works: <b>4-schedule-daily-ingest.bat</b> for Windows Task Scheduler (survives reboots).
        </div>
      </div>
    );
  };

  const renderIngest = () => {
    // Admin gate — if admin password is required and user isn't logged in, show login prompt
    if (adminRequired && !isAdmin) {
      return (
        <div style={{textAlign:"center",padding:"60px 20px"}}>
          <div style={{fontSize:32,marginBottom:12}}>🔒</div>
          <div style={{fontSize:FONT.body,fontWeight:700,color:C.text,marginBottom:8}}>Admin Access Required</div>
          <div style={{fontSize:FONT.label,color:C.textMuted,marginBottom:20,maxWidth:400,margin:"0 auto 20px"}}>The Ingest tab is restricted to administrators. Log in to access data ingestion and file apply tools.</div>
          <button type="button" onClick={()=>setAdminLoginOpen(true)} style={{padding:"10px 24px",borderRadius:6,border:"none",background:C.purple,color:C.white,fontSize:FONT.table,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",letterSpacing:0.5}}>
            Admin Login
          </button>
        </div>
      );
    }
    const cardBg = S_CARD;
    const inputStyle = {width:"100%",background:C.bg,border:"1px solid "+C.borderLight,borderRadius:6,color:C.text,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.table,padding:"10px 12px",resize:"vertical",outline:"none"};
    const COUNTRIES = ["UAE","Qatar","Bahrain","Saudi","Kuwait","Oman","Iraq"];
    const btnBase = S_BTN_BASE;
    const modeBtn = (key, label) => (
      <button type="button" onClick={()=>setIngestMode(key)} style={{padding:"7px 16px",fontSize:FONT.small,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",
        background:ingestMode===key?C.cyan+"22":"transparent",color:ingestMode===key?C.cyan:C.textDim,
        border:"1px solid "+(ingestMode===key?C.cyan+"50":C.border),borderRadius:5,cursor:"pointer",letterSpacing:0.5}}>{label}</button>
    );

    const approvedCount = Object.entries(scanApproved).filter(([k, v]) => v).length;
    // Collect all selectable keys from scan results + global results
    const collectAllKeys = () => {
      const keys = [];
      if (scanResults && scanResults.results) {
        scanResults.results.forEach(cr => {
          if (cr.rows) cr.rows.forEach((_, ri) => keys.push(cr.country + "-" + ri));
          if (cr.leakers) cr.leakers.forEach((_, li) => keys.push(cr.country + "-L" + li));
        });
      }
      if (globalScanResults && globalScanResults.results) {
        Object.entries(globalScanResults.results).forEach(([bn, bundle]) => {
          if (!bundle || bundle.error || bundle.noNewData) return;
          if (bundle.iranReconciliationPatch) keys.push("g-"+bn+"-iranReconciliationPatch");
          if (bundle.provenancePatch) Object.keys(bundle.provenancePatch).forEach(pk => keys.push("g-"+bn+"-prov-"+String(pk).replace(/[^a-zA-Z0-9_-]/g,"_")));
          if (bundle.briefingPatches) bundle.briefingPatches.forEach((_,i) => keys.push("g-"+bn+"-brief-"+i));
          if (bundle.sourcesAppend) bundle.sourcesAppend.forEach((_,i) => keys.push("g-"+bn+"-sourcesAppend-"+i));
          if (bundle.feederAppend) bundle.feederAppend.forEach((_,i) => keys.push("g-"+bn+"-feederAppend-"+i));
          Object.entries(bundle).forEach(([arrayName, val]) => {
            if (["sources","noNewData","error","iranReconciliationPatch","provenancePatch","briefingPatches","sourcesAppend","feederAppend"].includes(arrayName)) return;
            if (Array.isArray(val)) val.forEach((_,i) => keys.push("g-"+bn+"-"+arrayName+"-"+i));
          });
        });
      }
      return keys;
    };

    const selectAllKeys = () => {
      const all = {};
      collectAllKeys().forEach(k => all[k] = true);
      setScanApproved(all);
    };
    const selectValidatedKeys = () => {
      const all = {};
      collectAllKeys().forEach(k => {
        const vr = verifierResults[k];
        const v = vr ? (typeof vr === "string" ? vr : (vr.verdict || "")) : "";
        // Select if PASS, WARN, or no verdict yet (not verified = assume ok)
        if (v !== "FAIL") all[k] = true;
      });
      setScanApproved(all);
    };
    const deselectAllKeys = () => setScanApproved({});

    const verdictBadge = (kid) => {
      const vr = verifierResults[kid];
      if (!vr) return null;
      const v = typeof vr === "string" ? vr : (vr.verdict || vr.v || "");
      const reasons = typeof vr === "object" && vr.reasons ? vr.reasons : [];
      const col = v === "FAIL" ? C.peak : v === "WARN" ? C.drone : C.reduction;
      return <span title={reasons.join("; ") || v} style={{fontSize:FONT.small,fontWeight:800,marginLeft:6,padding:"1px 5px",borderRadius:3,background:col+"22",color:col,fontFamily:"'JetBrains Mono',monospace"}}>{v}</span>;
    };
    const scanApplied = (scanResults && scanResults._applied) || (globalScanResults && globalScanResults._applied);

    const injectRowsIntoHtml = (htmlStr, updates) => {
      const engine = typeof window !== 'undefined' && window.IWTApplyEngine ? window.IWTApplyEngine : null;
      if (!engine || typeof engine.applyUpdatesToHtml !== 'function') {
        return { html: htmlStr, count: 0, error: 'apply-engine-core.js not loaded' };
      }
      // Pass registry for dedupe support (extraArrays skips rows with existing dedupeKey values)
      const reg = typeof window !== 'undefined' && window.IWTArrayRegistry ? window.IWTArrayRegistry.IWT_ARRAY_REGISTRY : null;
      const { html, rowsAdded, warnings } = engine.applyUpdatesToHtml(htmlStr, updates, { registry: reg });
      if (warnings && warnings.length) console.warn('[IWT apply]', warnings);
      return { html, count: rowsAdded };
    };

    const downloadUpdatedTracker = (updates) => {
      const src = document.documentElement.outerHTML;
      const { html: updated, count, error: injErr } = injectRowsIntoHtml(src, updates);
      if (injErr) { setIngestError(injErr); return; }
      if (count === 0) { setIngestError("No changes to inject (check approvals and apply-engine)."); return; }
      const blob = new Blob(["<!DOCTYPE html>\n<html" + updated.slice(updated.indexOf("<html") + 5)], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "IranWarTracker_" + new Date().toISOString().slice(0, 10) + ".html";
      a.click();
      URL.revokeObjectURL(url);
      const entry = { ts: new Date().toISOString(), modified: updates.map(u => u.targetArray).filter(Boolean), rowsAdded: count, warnings: [] };
      const hist = [entry, ...applyHistory].slice(0, 50);
      setApplyHistory(hist);
      try { sessionStorage.setItem("iwt_apply_history", JSON.stringify(hist)); } catch(e) {}
      return count;  // return actual injected count for accurate messaging
    };

    const handleApplyScan = async (mode) => {
      const updates = [];
      if (scanResults && scanResults.results) {
        scanResults.results.forEach(cr => {
          if (cr.noNewData && !(cr.rows||[]).length && !(cr.leakers||[]).length) return;
          const approvedRows = (cr.rows || []).filter((_,ri) => scanApproved[cr.country + "-" + ri]);
          const approvedLeakers = (cr.leakers || []).filter((_,li) => scanApproved[cr.country + "-L" + li]);
          if (approvedRows.length > 0 || approvedLeakers.length > 0) {
            updates.push({ country: cr.country, targetArray: cr.targetArray, rows: approvedRows, leakers: approvedLeakers, summaryPatch: cr.summaryUpdates || null });
            // Auto-generate provenance entries for new rows so SRC links appear in tabs
            const srcUrls = (cr.sources || []).filter(u => typeof u === "string" && u.startsWith("http"));
            if (srcUrls.length > 0) {
              const autoProvPatch = {};
              approvedRows.forEach(row => {
                if (row.day != null && !PROVENANCE[cr.country + "-" + row.day]) {
                  const srcIds = srcUrls.slice(0, 3).map((u, si) => {
                    const domain = u.replace(/^https?:\/\/(www\.)?/, "").split("/")[0];
                    return "auto-" + cr.country.toLowerCase() + "-d" + row.day + "-" + si;
                  });
                  autoProvPatch[cr.country + "-" + row.day] = {
                    primary: srcIds.slice(0, 1),
                    corroborate: srcIds.slice(1),
                    dispute: [],
                    rawClaim: row.note || "Scan-ingested data for " + cr.country + " Day " + row.day,
                    derivation: "Auto-generated from ingest scan on " + new Date().toISOString().slice(0, 10) + ". Sources: " + srcUrls.slice(0, 3).join(", "),
                    affects: [cr.country + " cumulative"],
                  };
                }
              });
              if (Object.keys(autoProvPatch).length > 0) {
                if (!provenanceMerged) provenanceMerged = {};
                Object.assign(provenanceMerged, autoProvPatch);
              }
            }
          }
        });
      }
      const extraArrays = {};
      let iranReconciliationPatch = null;
      let provenanceMerged = null;
      if (globalScanResults && globalScanResults.results) {
        Object.entries(globalScanResults.results).forEach(([bundleName, bundle]) => {
          if (!bundle || bundle.error) return;
          Object.entries(bundle).forEach(([k, v]) => {
            if (k === "sources" || k === "noNewData" || k === "error") return;
            if (k === "iranReconciliationPatch" && v && typeof v === "object") {
              if (scanApproved["g-" + bundleName + "-iranReconciliationPatch"]) iranReconciliationPatch = Object.assign({}, iranReconciliationPatch || {}, v);
            } else if (k === "provenancePatch" && v && typeof v === "object") {
              const pm = {};
              Object.entries(v).forEach(([pk, pv]) => {
                const sid = "g-" + bundleName + "-prov-" + String(pk).replace(/[^a-zA-Z0-9_-]/g, "_");
                if (scanApproved[sid]) pm[pk] = pv;
              });
              if (Object.keys(pm).length) provenanceMerged = Object.assign({}, provenanceMerged || {}, pm);
            } else if (k === "briefingPatches" && Array.isArray(v)) {
              v.forEach((bp, i) => {
                if (scanApproved["g-" + bundleName + "-brief-" + i] && bp && bp.collection && bp.key) {
                  updates.push({ country: "Global", briefingPatch: { collection: bp.collection, key: bp.key, patch: bp.patch || {} } });
                }
              });
            } else if (k === "sourcesAppend" && Array.isArray(v)) {
              v.forEach((spec, i) => {
                if (scanApproved["g-" + bundleName + "-sourcesAppend-" + i]) updates.push({ country: "Global", sourcesAppend: spec });
              });
            } else if (k === "feederAppend" && Array.isArray(v)) {
              v.forEach((spec, i) => {
                if (scanApproved["g-" + bundleName + "-feederAppend-" + i]) updates.push({ country: "Global", feederAppend: spec });
              });
            } else if (Array.isArray(v)) {
              const appr = v.filter((_, i) => scanApproved["g-" + bundleName + "-" + k + "-" + i]);
              if (appr.length) extraArrays[k] = (extraArrays[k] || []).concat(appr);
            }
          });
        });
      }
      const globalUpd = { country: "Global" };
      if (Object.keys(extraArrays).length) globalUpd.extraArrays = extraArrays;
      if (iranReconciliationPatch) globalUpd.iranReconciliationPatch = iranReconciliationPatch;
      if (provenanceMerged && Object.keys(provenanceMerged).length) globalUpd.provenancePatch = provenanceMerged;
      if (globalUpd.extraArrays || globalUpd.iranReconciliationPatch || globalUpd.provenancePatch) updates.push(globalUpd);

      const failApproved = Object.entries(scanApproved).filter(([key, on]) => on && verifierResults[key] && (typeof verifierResults[key] === "string" ? verifierResults[key] === "FAIL" : verifierResults[key].verdict === "FAIL"));
      if (failApproved.length > 0 && !forceApplyDespiteVerifier) {
        setIngestError("Verifier FAIL on " + failApproved.length + " approved item(s). Uncheck them, re-run scan, or enable Force apply.");
        return;
      }
      if (updates.length === 0) { setIngestError("No rows approved."); return; }
      // Live-patch in-memory PROVENANCE so Sources tab updates immediately (without page reload)
      if (provenanceMerged && Object.keys(provenanceMerged).length) {
        const newVer = mutateProvenance(provenanceMerged);
        setProvVer(newVer);
      }
      if (mode === "download") {
        const actualCount = downloadUpdatedTracker(updates);
        if (actualCount == null) return;  // download errored — ingestError already set
        setScanResults(prev => prev ? ({...prev, _applied: true, _applyResult: { rowsAdded: actualCount, modified: updates.map(u=>u.targetArray).filter(Boolean) }}) : prev);
        setGlobalScanResults(prev => prev ? ({...prev, _applied: true}) : prev);
      } else {
        const result = await applyUpdates(updates, false);
        if (result && result.ok) {
          setIngestError(null);
          setScanResults(prev => prev ? ({...prev, _applied: true, _applyResult: result}) : prev);
          setGlobalScanResults(prev => prev ? ({...prev, _applied: true}) : prev);
        }
      }
    };

    const handleApplyPaste = async (mode) => {
      if (!ingestResult) return;
      const upd = [{
        country: ingestResult.country || ingestCountry,
        targetArray: COUNTRY_ARRAYS[ingestResult.country || ingestCountry] || "UAE_DATA",
        rows: [ingestResult], leakers: [], summaryPatch: null,
      }];
      if (mode === "download") { downloadUpdatedTracker(upd); }
      else { const result = await applyUpdates(upd, false); if (result && result.ok) setIngestError(null); }
    };

    return (
      <div>
        {/* ═══ Global toast banners — error / success / loading ═══ */}
        {ingestError && (
          <div style={{background:"rgba(239,68,68,0.12)",border:"1px solid rgba(239,68,68,0.4)",borderRadius:8,padding:"10px 14px",marginBottom:10,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <span style={{fontSize:FONT.label,color:C.errorRed,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>✗ {ingestError}</span>
            <button onClick={()=>setIngestError(null)} style={{background:"none",border:"none",color:C.errorRed,cursor:"pointer",fontSize:FONT.body,fontWeight:700,padding:"0 4px"}}>×</button>
          </div>
        )}
        {applySuccess && (
          <div style={{background:"rgba(52,211,153,0.12)",border:"1px solid rgba(52,211,153,0.4)",borderRadius:8,padding:"10px 14px",marginBottom:10,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <span style={{fontSize:FONT.label,color:C.reduction,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>
              ✓ {applySuccess.message || ("Applied successfully — "+(applySuccess.modified||[]).join(", ")+(applySuccess.rowsAdded?" ("+applySuccess.rowsAdded+" rows)":""))}
            </span>
            <button onClick={()=>setApplySuccess(null)} style={{background:"none",border:"none",color:C.reduction,cursor:"pointer",fontSize:FONT.body,fontWeight:700,padding:"0 4px"}}>×</button>
          </div>
        )}
        {applyLoading && (
          <div style={{background:"rgba(34,211,238,0.08)",border:"1px solid rgba(34,211,238,0.3)",borderRadius:8,padding:"10px 14px",marginBottom:10}}>
            <span style={{fontSize:FONT.label,color:C.cyan,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>⏳ Applying changes to server...</span>
          </div>
        )}

        {/* Header + mode switcher */}
        <div style={{...cardBg, borderLeft:"3px solid "+C.cyan, background:C.cyan+"08"}}>
          <div style={{fontSize:FONT.h3,fontWeight:700,color:C.cyan,marginBottom:6,fontFamily:"'JetBrains Mono',monospace"}}>⚡ AUTO-INGEST PIPELINE</div>
          <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.7,marginBottom:12}}>
            Scan the web for new MoD statements, news, and conflict updates using Claude. When using the server proxy, your API key never leaves the server.
          </div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"}}>
            {modeBtn("scan","Auto Scan")}
            {modeBtn("paste","Manual Paste")}
            {modeBtn("history","History")}
            {modeBtn("article","Article Ingest")}
            {modeBtn("intel","★ Intel Console")}
            <div style={{marginLeft:"auto",display:"flex",gap:8,alignItems:"center"}}>
              {iwtServerOk && <span style={{fontSize:FONT.small,color:C.reduction,fontFamily:"'JetBrains Mono',monospace"}}>● Server connected</span>}
              <span style={{fontSize:FONT.label,color:(serverHasApiKey&&isAdmin)?C.reduction:aiApiKey?C.reduction:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>
                {serverHasApiKey && isAdmin ? "● Server API key active" : aiApiKey ? "● Browser API key set" : "○ No API key"}
              </span>
            </div>
          </div>
        </div>

        {/* Scheduled auto-ingest status + controls (admin only) */}
        {isAdmin && iwtServerOk && serverHasApiKey && (
          <div style={cardBg}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
              <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>Auto-Ingest Pipeline</div>
              <div style={{display:"flex",gap:6}}>
                <button type="button" onClick={async ()=>{
                  try {
                    const base = (typeof window !== "undefined" && window.location.protocol !== "file:") ? "" : IWT_BASE;
                    const r = await fetch(base + "/api/iwt/auto-ingest/trigger", {
                      method: "POST",
                      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + adminToken },
                    });
                    const d = await r.json().catch(()=>({}));
                    if (r.ok) { setIngestError(null); setApplySuccess({message:"Auto-ingest started in background. Results appear in ~5-10 min. Refresh this page to check."}); }
                    else { setIngestError("Trigger failed: " + (d.error || r.status)); }
                  } catch(e) { setIngestError("Trigger failed: " + e.message); }
                }} style={{padding:"5px 14px",fontSize:FONT.small,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",background:C.purple+"20",color:C.purple,border:"1px solid "+C.purple+"50",borderRadius:4,cursor:"pointer",letterSpacing:0.5}}>
                  ▶ Run Now
                </button>
              </div>
            </div>
            <AutoIngestStatus />
            <ScheduleControls adminToken={adminToken} onError={setIngestError} />
          </div>
        )}

        {/* Briefing Refresh (Opus) card */}
        {isAdmin && iwtServerOk && (serverHasApiKey || aiApiKey.trim()) && (
          <div style={cardBg}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
              <div style={{fontSize:FONT.label,fontWeight:700,letterSpacing:1,textTransform:"uppercase",color:C.magenta,fontFamily:"'JetBrains Mono',monospace"}}>Briefing Refresh (Opus)</div>
              <button onClick={runBriefingRefresh} disabled={briefingRefreshLoading}
                style={{padding:"8px 16px",fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",
                  background:briefingRefreshLoading?"transparent":C.magenta,color:briefingRefreshLoading?C.textDim:"#fff",
                  border:briefingRefreshLoading?"1px solid "+C.border:"none",borderRadius:6,cursor:briefingRefreshLoading?"wait":"pointer"}}>
                {briefingRefreshLoading ? "Refreshing 9 briefings..." : "Update All Briefings"}
              </button>
            </div>
            <div style={{fontSize:FONT.small,color:C.textDim,lineHeight:1.6,marginBottom:8}}>
              Sends each briefing (BRIEF_ECON × 3, BRIEF_MARKETS × 2, BRIEF_ADV × 4) to Claude with the latest ingested data. Updates exec summaries, KPIs, and key findings. Cost: ~$1-2/run.
            </div>
            {briefingRefreshResult && (
              <div>
                <div style={{fontSize:FONT.small,fontWeight:700,color:C.reduction,marginBottom:6,fontFamily:"'JetBrains Mono',monospace"}}>
                  {briefingRefreshResult.filter(r=>r._status==="ok").length}/{briefingRefreshResult.length} briefings updated
                </div>
                {briefingRefreshResult.map((r,i) => (
                  <div key={i} style={{fontSize:FONT.small,padding:"4px 8px",marginBottom:2,borderRadius:4,fontFamily:"'JetBrains Mono',monospace",
                    background:r._status==="ok"?"rgba(52,211,153,0.1)":"rgba(248,113,113,0.1)",
                    color:r._status==="ok"?C.reduction:C.peak}}>
                    {r.collection}.{r.key}: {r._status==="ok" ? "Updated" : "Error: "+(r._error||"unknown")}
                  </div>
                ))}
                <button onClick={async () => {
                  const patches = briefingRefreshResult.filter(r => r._status === "ok" && r.patch);
                  if (patches.length === 0) { setIngestError("No successful patches to apply."); return; }
                  const updates = patches.map(p => ({ targetArray: "_briefingPatch", briefingPatch: p }));
                  const result = await applyUpdates(updates, false);
                  if (result && result.ok) setIngestError(null);
                }}
                  style={{marginTop:8,padding:"8px 20px",fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",background:C.reduction,color:C.white,border:"none",borderRadius:6,cursor:"pointer"}}>
                  Apply All Briefing Updates
                </button>
              </div>
            )}
          </div>
        )}

        {/* API key input */}
        <div style={cardBg}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.textDim,marginBottom:8,fontFamily:"'JetBrains Mono',monospace"}}>Anthropic API Key</div>
          {serverHasApiKey && isAdmin ? (
            <div>
              <div style={{display:"flex",alignItems:"center",gap:8,padding:"10px 14px",background:C.reduction+"10",border:"1px solid "+C.reduction+"30",borderRadius:6}}>
                <span style={{fontSize:FONT.body}}>🔑</span>
                <div>
                  <div style={{fontSize:FONT.label,fontWeight:700,color:C.reduction}}>Server-side API key active</div>
                  <div style={{fontSize:FONT.small,color:C.textMuted,marginTop:2}}>Your API key is stored securely on the server. All Claude requests are proxied server-side — the key never reaches the browser.</div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div style={{display:"flex",gap:8,alignItems:"center"}}>
                <input type={showApiKey?"text":"password"} value={aiApiKey} onChange={e=>{setAiApiKey(e.target.value); try{sessionStorage.setItem("iwt_apikey",e.target.value)}catch(x){}}}
                  placeholder="sk-ant-..." style={{flex:1,background:C.bg,border:"1px solid "+C.borderLight,borderRadius:6,color:C.text,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.table,padding:"8px 12px",outline:"none"}} />
                <button type="button" onClick={()=>setShowApiKey(!showApiKey)} style={{padding:"8px 12px",fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace",background:C.surfaceAlt,color:C.textMuted,border:"1px solid "+C.border,borderRadius:5,cursor:"pointer"}}>{showApiKey?"Hide":"Show"}</button>
              </div>
              <div style={{fontSize:FONT.small,color:C.textDim,marginTop:6,lineHeight:1.5}}>
                {serverHasApiKey && !isAdmin ? (
                  <span style={{color:C.drone}}>Server has an API key configured — log in as admin to use it securely. Or paste your own key below (stored in this tab's session only).</span>
                ) : (
                  <span>Get your key at <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener" style={{color:C.accent,textDecoration:"none"}}>console.anthropic.com</a> · Stored in this browser tab only · Cleared when tab closes · Never written into the HTML file</span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Script load warning */}
        {typeof window !== "undefined" && window.__IWT_SCRIPT_WARNING && (
          <div style={{...cardBg,borderLeft:"3px solid "+C.drone,background:C.drone+"0f",marginBottom:8}}>
            <div style={{fontSize:FONT.label,color:C.drone,fontFamily:"'JetBrains Mono',monospace"}}>{window.__IWT_SCRIPT_WARNING}</div>
          </div>
        )}

        {/* Error banner */}
        {ingestError && (
          <div style={{...cardBg,borderLeft:"3px solid "+C.peak,background:C.peakBg}}>
            <div style={{fontSize:FONT.label,color:C.peak,fontFamily:"'JetBrains Mono',monospace"}}>{ingestError}</div>
          </div>
        )}

        {/* ═══ SCAN MODE ═══ */}
        {ingestMode === "scan" && (
          <div>
            <div style={cardBg}>
              <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"}}>
                <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>Countries:</div>
                {COUNTRIES.map(c => (
                  <button key={c} onClick={()=>setScanCountries(prev => prev.includes(c) ? prev.filter(x=>x!==c) : [...prev, c])} style={{
                    padding:"4px 12px",fontSize:FONT.small,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",
                    background:scanCountries.includes(c)?C.cyan+"20":"transparent",
                    color:scanCountries.includes(c)?C.cyan:C.textDim,
                    border:scanCountries.includes(c)?"1px solid "+C.cyan+"50":"1px solid "+C.border,
                    borderRadius:4,cursor:"pointer"
                  }}>{c}</button>
                ))}
              </div>
              <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"}}>
                <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>Scope:</div>
                {[{k:"countries",l:"Countries"},{k:"economics_full",l:"Economics (full)"},{k:"markets_shipping",l:"Markets / shipping"},{k:"iran_full",l:"Iran (full)"},{k:"us_israel",l:"US / Israel"},{k:"sources_glossary",l:"Sources / glossary"}].map(s => (
                  <button key={s.k} onClick={()=>setScanScopes(prev => prev.includes(s.k) ? prev.filter(x=>x!==s.k) : [...prev, s.k])} style={{
                    padding:"4px 12px",fontSize:FONT.small,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",
                    background:scanScopes.includes(s.k)?C.accent+"20":"transparent",
                    color:scanScopes.includes(s.k)?C.accent:C.textDim,
                    border:scanScopes.includes(s.k)?"1px solid "+C.accent+"50":"1px solid "+C.border,
                    borderRadius:4,cursor:"pointer"
                  }}>{s.l}</button>
                ))}
              </div>
              <div style={{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap",marginBottom:8,paddingTop:8,borderTop:"1px solid "+C.border}}>
                <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>Since Day:</div>
                <input type="number" min={1} max={todayWarDay} value={scanSinceDay !== null ? scanSinceDay : warDayRef} onChange={e => setScanSinceDay(parseInt(e.target.value) || null)} style={{width:70,padding:"4px 8px",fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace",background:C.surfaceAlt,color:C.text,border:"1px solid "+C.border,borderRadius:4,textAlign:"center"}} />
                <button type="button" onClick={() => setScanSinceDay(null)} style={{fontSize:FONT.small,padding:"4px 10px",borderRadius:4,border:"1px solid "+C.border,background:scanSinceDay===null?C.accent+"20":"transparent",color:scanSinceDay===null?C.accent:C.textDim,fontFamily:"'JetBrains Mono',monospace",fontWeight:600,cursor:"pointer"}}>Auto-detect (D{warDayRef})</button>
                <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>Today: D{todayWarDay} · Lag: {todayWarDay - warDayRef}d</span>
                <label style={{fontSize:FONT.small,color:C.textDim,display:"flex",alignItems:"center",gap:6,cursor:"pointer",marginLeft:"auto"}}>
                  <input type="checkbox" checked={scanDryRun} onChange={()=>setScanDryRun(v=>!v)} style={{accentColor:C.drone}} />
                  <span style={{color:scanDryRun?C.drone:C.textDim,fontWeight:scanDryRun?700:400}}>Dry Run (preview only)</span>
                </label>
              </div>
              <div style={{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap",marginBottom:8}}>
                <label style={{fontSize:FONT.small,color:C.textDim,display:"flex",alignItems:"center",gap:6,cursor:"pointer"}}>
                  <input type="checkbox" checked={verifierAfterScan} onChange={()=>setVerifierAfterScan(v=>!v)} style={{accentColor:C.accent}} />
                  Run verifier after scan
                </label>
                <label style={{fontSize:FONT.small,color:C.textDim,display:"flex",alignItems:"center",gap:6,cursor:"pointer"}}>
                  <input type="checkbox" checked={forceApplyDespiteVerifier} onChange={()=>setForceApplyDespiteVerifier(v=>!v)} style={{accentColor:C.peak}} />
                  Force apply despite FAIL
                </label>
                {verifierLoading && <span style={{fontSize:FONT.small,color:C.drone,fontFamily:"'JetBrains Mono',monospace"}}>Verifier…</span>}
              </div>
              <div style={{display:"flex",gap:12,alignItems:"center"}}>
                <button onClick={runScan} disabled={scanLoading || !hasAnyApiKey || scanScopes.length===0} style={{...btnBase,background:scanLoading?C.textDim:C.cyan,color:C.white,opacity:scanLoading?0.7:1,minWidth:200}}>
                  {scanLoading ? "⏳ Scanning..." : (scanDryRun ? "👁 Preview Scan" : "🔍 Run Scan") + " (since D" + (scanSinceDay !== null ? scanSinceDay : warDayRef) + ")"}
                </button>
                <div style={{fontSize:FONT.small,color:scanDryRun?C.drone:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{scanDryRun?"⚠ DRY RUN — changes will NOT be applied · ":""}{ingestProvider === 'dual' ? 'Gemini (extract) + Claude (verify)' : ingestProvider === 'claude' ? 'Claude (extract + verify)' : 'Gemini (extract + verify)'} · {scanScopes.length} scope{scanScopes.length!==1?"s":""} selected</div>
              </div>
            </div>

            {/* Scan results */}
            {scanResults && scanResults.results && (
              <div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10,flexWrap:"wrap",gap:8}}>
                  <div style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>
                    {(scanResults.results && scanResults.results.length) || 0} countries scanned
                  </div>
                  <div style={{display:"flex",gap:6}}>
                    <button type="button" onClick={selectAllKeys} style={{fontSize:FONT.small,padding:"4px 10px",borderRadius:4,border:"1px solid "+C.reduction+"50",background:C.reduction+"12",color:C.reduction,fontFamily:"'JetBrains Mono',monospace",fontWeight:700,cursor:"pointer"}}>
                      ☑ Select All
                    </button>
                    <button type="button" onClick={selectValidatedKeys} style={{fontSize:FONT.small,padding:"4px 10px",borderRadius:4,border:"1px solid "+C.peak+"50",background:C.peak+"12",color:C.peak,fontFamily:"'JetBrains Mono',monospace",fontWeight:700,cursor:"pointer"}}>
                      ✓ Select Validated
                    </button>
                    <button type="button" onClick={deselectAllKeys} style={{fontSize:FONT.small,padding:"4px 10px",borderRadius:4,border:"1px solid "+C.border,background:"transparent",color:C.textDim,fontFamily:"'JetBrains Mono',monospace",fontWeight:600,cursor:"pointer"}}>
                      ☐ Deselect All
                    </button>
                  </div>
                </div>
                {scanResults.results.map((cr, ci) => {
                  const hasData = cr.rows && cr.rows.length > 0;
                  const hasLeakers = cr.leakers && cr.leakers.length > 0;
                  return (
                    <div key={ci} style={{...cardBg, borderLeft:"3px solid " + (cr.error ? C.peak : hasData ? C.cyan : C.textDim)}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                        <div style={{fontSize:FONT.table,fontWeight:800,color:C.text}}>{cr.country}</div>
                        {cr.noNewData && <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>No new data found</span>}
                        {cr.error && <span style={{fontSize:FONT.small,color:C.peak,fontFamily:"'JetBrains Mono',monospace"}}>{cr.error}</span>}
                        {hasData && <span style={{fontSize:FONT.small,color:C.cyan,fontFamily:"'JetBrains Mono',monospace"}}>{cr.rows.length} new row{cr.rows.length>1?"s":""}</span>}
                      </div>
                      {cr.sources && cr.sources.length > 0 && (
                        <div style={{marginBottom:8,display:"flex",gap:6,flexWrap:"wrap"}}>
                          {cr.sources.slice(0,5).map((url,si) => (
                            <a key={si} href={url} target="_blank" rel="noopener" style={{fontSize:FONT.small,color:C.accent,fontFamily:"'JetBrains Mono',monospace",textDecoration:"none"}}>↗ {String(url).replace(/^https?:\/\/(www\.)?/,"").split("/")[0]}</a>
                          ))}
                        </div>
                      )}
                      {hasData && cr.rows.map((row, ri) => {
                        const key = cr.country + "-" + ri;
                        const approved = scanApproved[key];
                        return (
                          <div key={ri} style={{background:approved?C.reduction+"08":C.surfaceAlt,border:"1px solid "+(approved?C.reduction+"30":C.border),borderRadius:6,padding:10,marginBottom:6}}>
                            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                              <input type="checkbox" checked={!!approved} onChange={()=>setScanApproved(prev=>({...prev,[key]:!prev[key]}))} style={{accentColor:C.reduction,width:14,height:14}}/>
                              {verdictBadge(key)}
                              <span style={{fontSize:FONT.label,fontWeight:700,color:C.text,fontFamily:"'JetBrains Mono',monospace"}}>D{row.day} · {row.date}</span>
                              <span style={{fontSize:FONT.small,color:C.textDim}}>Phase {row.phase}</span>
                              <ConfBadge conf={row.conf}/>
                            </div>
                            <div style={{display:"flex",gap:10,marginBottom:4,flexWrap:"wrap"}}>
                              {[{l:"B",v:row.B,c:C.ballistic},{l:"C",v:row.C,c:C.cruise},{l:"U",v:row.U,c:C.drone}].map((f,fi)=>(
                                <span key={fi} style={{fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace",color:f.v!=null?f.c:C.nr}}>{f.l}:{f.v!=null?f.v:"—"}</span>
                              ))}
                            </div>
                            <div style={{display:"flex",gap:12,marginBottom:4,flexWrap:"wrap",fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace"}}>
                              <span style={{color:C.peak}}>Dead: {row.deaths!=null?row.deaths:"—"}</span>
                              {row.deathsDay!=null&&<span style={{color:C.textDim}}>+{row.deathsDay} new</span>}
                              <span style={{color:C.drone}}>Inj: {row.inj!=null?row.inj:"—"}</span>
                              {row.injDay!=null&&<span style={{color:C.textDim}}>+{row.injDay} new</span>}
                            </div>
                            <div style={{fontSize:FONT.small,color:C.textDim,marginBottom:2,lineHeight:1.35}}>Dead / Inj = running official total as of that date (MoD wording). "+N new" = new casualties attributed to that day in the source; omit if unknown.</div>
                            {row.note && <div style={{fontSize:FONT.small,color:C.textDim,lineHeight:1.5}}>{row.note}</div>}
                          </div>
                        );
                      })}
                      {hasLeakers && (
                        <div style={{marginTop:6}}>
                          <div style={{fontSize:FONT.small,fontWeight:700,color:C.peak,fontFamily:"'JetBrains Mono',monospace",marginBottom:4}}>LEAKER INCIDENTS:</div>
                          {cr.leakers.map((l,li) => {
                            const lKey = cr.country + "-L" + li;
                            return (
                              <div key={li} style={{display:"flex",alignItems:"center",gap:6,padding:"4px 0",fontSize:FONT.small,color:C.textMuted}}>
                                <input type="checkbox" checked={!!scanApproved[lKey]} onChange={()=>setScanApproved(prev=>({...prev,[lKey]:!prev[lKey]}))} style={{accentColor:C.peak,width:12,height:12}}/>
                                {verdictBadge(lKey)}
                                <span style={{color:C.peak,fontWeight:700}}>[{l.type}]</span> <span style={{color:C.text,fontWeight:600}}>{l.target}</span> — {l.desc}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Global scan results — multi-bundle */}
            {globalScanResults && globalScanResults.results && (
              <div>
                {Object.entries(globalScanResults.results).map(([bundleName, bundle]) => {
                  if (!bundle || bundle.error || bundle.noNewData) return null;
                  const REG = typeof window !== "undefined" && window.IWTArrayRegistry ? window.IWTArrayRegistry.IWT_ARRAY_REGISTRY : {};
                  const bundleLabels = { economics_full:"Economics cluster", markets_shipping:"Markets / shipping", iran_full:"Iran / IRGC", sources_glossary:"Sources · glossary · provenance", us_israel:"US / Israel" };
                  return (
                    <div key={bundleName} style={{...S_CARD,borderLeft:"3px solid "+C.sea,marginBottom:10}}>
                      <div style={{fontSize:FONT.table,fontWeight:800,color:C.sea,marginBottom:8}}>{bundleLabels[bundleName] || bundleName}</div>
                      {bundle.iranReconciliationPatch && typeof bundle.iranReconciliationPatch === "object" && (
                        <div style={{marginBottom:10,padding:8,background:C.surfaceAlt,borderRadius:6}}>
                          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                            <input type="checkbox" checked={!!scanApproved["g-"+bundleName+"-iranReconciliationPatch"]} onChange={()=>setScanApproved(p=>({...p,["g-"+bundleName+"-iranReconciliationPatch"]:!p["g-"+bundleName+"-iranReconciliationPatch"]}))} style={{accentColor:C.accent,width:12,height:12}}/>
                            {verdictBadge("g-"+bundleName+"-iranReconciliationPatch")}
                            <span style={{fontSize:FONT.small,fontWeight:700,color:C.text}}>IRAN_RECONCILIATION patch</span>
                          </div>
                          <pre style={{fontSize:FONT.small,color:C.textMuted,whiteSpace:"pre-wrap",margin:0}}>{JSON.stringify(bundle.iranReconciliationPatch,null,2).slice(0,400)}</pre>
                        </div>
                      )}
                      {bundle.provenancePatch && typeof bundle.provenancePatch === "object" && Object.keys(bundle.provenancePatch).length > 0 && (
                        <div style={{marginBottom:10}}>
                          <div style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,marginBottom:4}}>PROVENANCE PATCH</div>
                          {Object.keys(bundle.provenancePatch).map((pk) => {
                            const kid = "g-"+bundleName+"-prov-"+String(pk).replace(/[^a-zA-Z0-9_-]/g,"_");
                            return (
                              <div key={pk} style={{display:"flex",alignItems:"flex-start",gap:8,padding:"4px 0",fontSize:FONT.small}}>
                                <input type="checkbox" checked={!!scanApproved[kid]} onChange={()=>setScanApproved(p=>({...p,[kid]:!p[kid]}))} style={{accentColor:C.accent,width:12,height:12,marginTop:2}}/>
                                {verdictBadge(kid)}
                                <span style={{color:C.text,fontWeight:600}}>{pk}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {Array.isArray(bundle.briefingPatches) && bundle.briefingPatches.length > 0 && (
                        <div style={{marginBottom:10}}>
                          <div style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,marginBottom:4}}>BRIEFING PATCHES</div>
                          {bundle.briefingPatches.map((bp,i) => {
                            const kid = "g-"+bundleName+"-brief-"+i;
                            return (
                              <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"4px 0",fontSize:FONT.small}}>
                                <input type="checkbox" checked={!!scanApproved[kid]} onChange={()=>setScanApproved(p=>({...p,[kid]:!p[kid]}))} style={{accentColor:C.accent,width:12,height:12}}/>
                                {verdictBadge(kid)}
                                <span>{bp.collection} · {bp.key}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {Array.isArray(bundle.sourcesAppend) && bundle.sourcesAppend.length > 0 && bundle.sourcesAppend.map((spec,i) => {
                        const kid = "g-"+bundleName+"-sourcesAppend-"+i;
                        return (
                          <div key={"sa"+i} style={{display:"flex",alignItems:"center",gap:8,padding:"4px 0",fontSize:FONT.small,marginBottom:4}}>
                            <input type="checkbox" checked={!!scanApproved[kid]} onChange={()=>setScanApproved(p=>({...p,[kid]:!p[kid]}))} style={{accentColor:C.sea,width:12,height:12}}/>
                            {verdictBadge(kid)}
                            <span>SOURCES append · {spec.category} · {spec.item?.name || spec.item?.id}</span>
                          </div>
                        );
                      })}
                      {Array.isArray(bundle.feederAppend) && bundle.feederAppend.length > 0 && bundle.feederAppend.map((spec,i) => {
                        const kid = "g-"+bundleName+"-feederAppend-"+i;
                        return (
                          <div key={"fa"+i} style={{display:"flex",alignItems:"center",gap:8,padding:"4px 0",fontSize:FONT.small,marginBottom:4}}>
                            <input type="checkbox" checked={!!scanApproved[kid]} onChange={()=>setScanApproved(p=>({...p,[kid]:!p[kid]}))} style={{accentColor:C.drone,width:12,height:12}}/>
                            {verdictBadge(kid)}
                            <span>FEEDER tier {spec.tier} · {spec.outlet?.name}</span>
                          </div>
                        );
                      })}
                      {Object.entries(bundle).map(([arrayName, val]) => {
                        if (["sources","noNewData","error","iranReconciliationPatch","provenancePatch","briefingPatches","sourcesAppend","feederAppend"].includes(arrayName)) return null;
                        if (!Array.isArray(val) || val.length === 0) return null;
                        const regEntry = REG[arrayName] || {};
                        const hint = regEntry.tabHint || "";
                        const dedupeKeys = (regEntry.dedupeKey || "").split("+").filter(Boolean);
                        // Smart preview: extract key identity fields + summary instead of raw JSON
                        const smartPreview = (row) => {
                          if (typeof row !== "object" || !row) return String(row);
                          // Country data rows (day-based)
                          if (row.day != null && row.date) {
                            const parts = ["D"+row.day+" · "+row.date];
                            if (row.phase) parts.push("Phase "+row.phase);
                            if (row.conf) parts.push(row.conf);
                            const counts = [];
                            if (row.B != null) counts.push("B:"+row.B);
                            if (row.C != null) counts.push("C:"+row.C);
                            if (row.U != null) counts.push("U:"+row.U);
                            if (counts.length) parts.push(counts.join(" "));
                            if (row.Dead2 != null) parts.push("Dead:"+row.Dead2);
                            if (row.Inj2 != null) parts.push("Inj:"+row.Inj2);
                            if (row.note) parts.push(row.note.length > 80 ? row.note.slice(0,78)+"…" : row.note);
                            return parts.join(" · ");
                          }
                          // Named entities (vessels, weapons, forces, glossary, etc.)
                          if (row.name || row.term || row.domain || row.vessel) {
                            const label = row.name || row.term || row.domain || row.vessel;
                            const parts = [label];
                            if (row.type) parts.push(row.type);
                            if (row.status) parts.push(row.status);
                            if (row.country) parts.push(row.country);
                            if (row.def) parts.push(row.def.length > 60 ? row.def.slice(0,58)+"…" : row.def);
                            if (row.note) parts.push(row.note.length > 60 ? row.note.slice(0,58)+"…" : row.note);
                            return parts.join(" · ");
                          }
                          // Date-keyed rows (oil prices, insurance, shipping)
                          if (row.date && !row.day) {
                            const parts = [row.date];
                            if (row.event) parts.push(row.event);
                            if (row.label) parts.push(row.label);
                            if (row.brent) parts.push("Brent:$"+row.brent);
                            if (row.wti) parts.push("WTI:$"+row.wti);
                            if (row.analyst) parts.push(row.analyst);
                            if (row.detail) parts.push(row.detail.length > 70 ? row.detail.slice(0,68)+"…" : row.detail);
                            if (row.claim) parts.push(row.claim.length > 70 ? row.claim.slice(0,68)+"…" : row.claim);
                            return parts.join(" · ");
                          }
                          // Market rows (route, entity-keyed)
                          if (row.route || row.market || row.sovereign || row.entity) {
                            const label = row.route || row.market || row.sovereign || row.entity;
                            const parts = [label];
                            if (row.pre) parts.push("pre:"+row.pre);
                            if (row.severity) parts.push("sev:"+row.severity);
                            if (row.topic) parts.push(row.topic);
                            return parts.join(" · ");
                          }
                          // Fallback: show dedupeKey fields + truncated JSON for the rest
                          if (dedupeKeys.length) {
                            const kv = dedupeKeys.map(k => row[k] != null ? k+":"+String(row[k]).slice(0,30) : null).filter(Boolean);
                            if (kv.length) return kv.join(" · ") + " · " + JSON.stringify(row).slice(0,100) + "…";
                          }
                          return JSON.stringify(row).slice(0,160);
                        };
                        return (
                          <div key={arrayName} style={{marginBottom:12}}>
                            <div style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:4}}>{arrayName} ({val.length} new){hint ? " · "+hint : ""}</div>
                            {val.map((row, i) => {
                              const kid = "g-"+bundleName+"-"+arrayName+"-"+i;
                              const preview = smartPreview(row);
                              return (
                                <div key={kid} style={{display:"flex",alignItems:"flex-start",gap:8,padding:"5px 8px",marginBottom:2,fontSize:FONT.small,color:C.textMuted,background:scanApproved[kid]?C.sea+"08":"transparent",borderRadius:4,border:"1px solid "+(scanApproved[kid]?C.sea+"25":"transparent")}}>
                                  <input type="checkbox" checked={!!scanApproved[kid]} onChange={()=>setScanApproved(p=>({...p,[kid]:!p[kid]}))} style={{accentColor:C.sea,width:12,height:12,marginTop:2}}/>
                                  {verdictBadge(kid)}
                                  <span style={{lineHeight:1.5,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.small}}>{preview}</span>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                      {bundle.sources?.length > 0 && (
                        <div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:6}}>
                          {bundle.sources.slice(0,6).map((url,i) => (
                            <a key={i} href={url} target="_blank" rel="noopener" style={{fontSize:FONT.small,color:C.accent,fontFamily:"'JetBrains Mono',monospace",textDecoration:"none"}}>↗ {String(url).replace(/^https?:\/\/(www\.)?/,"").split("/")[0]}</a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            {approvedCount > 0 && !scanApplied && (scanResults || globalScanResults) && (
              <div style={{...cardBg,display:"flex",gap:12,alignItems:"center",flexWrap:"wrap",marginTop:12}}>
                <button onClick={()=>handleApplyScan("download")} style={{...btnBase,background:C.cyan,color:C.white}}>
                  {"⬇ Download updated (" + approvedCount + " approved)"}
                </button>
                {iwtServerOk && (
                  <button onClick={()=>handleApplyScan("server")} disabled={applyLoading} style={{...btnBase,background:applyLoading?C.textDim:C.reduction,color:C.white}}>
                    {applyLoading ? "Writing..." : "✓ Apply to file"}
                  </button>
                )}
              </div>
            )}
            {scanApplied && (
              <div style={{...cardBg,borderLeft:"3px solid "+C.reduction,marginTop:8}}>
                <div style={{fontSize:FONT.label,color:C.reduction,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"}}>
                  ✓ Apply completed — refresh the page to load new data{scanResults && scanResults._applyResult && scanResults._applyResult.rowsAdded != null ? (" · " + scanResults._applyResult.rowsAdded + " rows") : ""}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═══ PASTE MODE ═══ */}
        {ingestMode === "paste" && (
          <div>
            <div style={cardBg}>
              <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap",alignItems:"center"}}>
                <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>Country:</div>
                {COUNTRIES.map(c => (
                  <button key={c} onClick={()=>setIngestCountry(c)} style={{
                    padding:"4px 12px",fontSize:FONT.small,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",
                    background:ingestCountry===c?C.accent+"20":"transparent",color:ingestCountry===c?C.accent:C.textDim,
                    border:ingestCountry===c?"1px solid "+C.accent+"50":"1px solid "+C.border,borderRadius:4,cursor:"pointer"
                  }}>{c}</button>
                ))}
              </div>
              <textarea value={ingestText} onChange={e=>setIngestText(e.target.value)}
                placeholder={"Paste MoD statement, press briefing, or verified news report here..."}
                style={{...inputStyle,minHeight:140}} />
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:10}}>
                <div style={{fontSize:FONT.small,color:C.textDim}}>{ingestText.length} chars</div>
                <div style={{display:"flex",gap:8}}>
                  <button onClick={()=>{setIngestText("");setIngestResult(null);setIngestError(null);}} style={{...btnBase,background:"transparent",color:C.textDim,border:"1px solid "+C.border,padding:"8px 14px"}}>Clear</button>
                  <button onClick={runIngestion} disabled={ingestLoading} style={{...btnBase,background:ingestLoading?C.textDim:C.accent,color:C.white,opacity:ingestLoading?0.7:1,minWidth:130}}>
                    {ingestLoading?"⏳ Parsing...":"⚡ Parse"}
                  </button>
                </div>
              </div>
            </div>

            {ingestResult && (
              <div style={cardBg}>
                <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:C.reduction,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>✅ PARSED — {ingestResult.country} · {ingestResult.date} · D{ingestResult.day}</div>
                <div style={{display:"flex",gap:10,marginBottom:10,flexWrap:"wrap"}}>
                  {[{l:"B",v:ingestResult.B,c:C.ballistic},{l:"C",v:ingestResult.C,c:C.cruise},{l:"U",v:ingestResult.U,c:C.drone}].map((f,i)=>(
                    <div key={i} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:6,padding:"8px 12px",minWidth:60,textAlign:"center"}}>
                      <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{f.l}</div>
                      <div style={{fontSize:FONT.h2,fontWeight:800,color:f.v!=null?f.c:C.nr,fontFamily:"'JetBrains Mono',monospace"}}>{f.v!=null?f.v:"—"}</div>
                    </div>
                  ))}
                  {[{l:"Dead",v:ingestResult.deaths,c:C.peak},{l:"+dead",v:ingestResult.deathsDay,c:C.peak},{l:"Inj",v:ingestResult.inj,c:C.drone},{l:"+inj",v:ingestResult.injDay,c:C.drone}].map((f,i)=>(
                    <div key={"c"+i} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:6,padding:"8px 12px",minWidth:60,textAlign:"center"}}>
                      <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{f.l}</div>
                      <div style={{fontSize:FONT.h2,fontWeight:800,color:f.v!=null?f.c:C.nr,fontFamily:"'JetBrains Mono',monospace"}}>{f.v!=null?f.v:"—"}</div>
                    </div>
                  ))}
                </div>
                {ingestResult.note && <div style={{fontSize:FONT.small,color:C.textMuted,lineHeight:1.5,marginBottom:10}}>{ingestResult.note}</div>}
                {ingestResult.warningFlags?.length > 0 && (
                  <div style={{fontSize:FONT.small,color:C.peak,marginBottom:10}}>{ingestResult.warningFlags.map((w,i)=><span key={i}>⚠ {w} </span>)}</div>
                )}
                <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                  <button onClick={()=>handleApplyPaste("download")} style={{...btnBase,background:C.cyan,color:C.white}}>
                    {"⬇ Download updated"}
                  </button>
                  {iwtServerOk && <button onClick={()=>handleApplyPaste("server")} disabled={applyLoading} style={{...btnBase,background:applyLoading?C.textDim:C.reduction,color:C.white}}>
                    {applyLoading?"Writing...":"✓ Apply to file"}
                  </button>}
                  <button onClick={()=>copyCode(generateCode(ingestResult))} style={{...btnBase,background:copiedCode?C.reduction:C.surfaceAlt,color:copiedCode?C.white:C.textMuted,border:"1px solid "+C.border}}>
                    {copiedCode?"✓ Copied":"Copy JS row"}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═══ HISTORY MODE ═══ */}
        {ingestMode === "history" && (
          <div>
            {/* Backup Management Section */}
            {isAdmin && iwtServerOk && (
              <div style={{...cardBg,marginBottom:16}}>
                <div style={{fontSize:FONT.label,fontWeight:700,color:C.accent,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>
                  BACKUP MANAGEMENT
                </div>
                <div style={{display:"flex",gap:8,marginBottom:12}}>
                  <button onClick={loadBackups} disabled={backupsLoading}
                    style={{...btnBase,background:backupsLoading?C.textDim:C.surfaceAlt,color:backupsLoading?C.textMuted:C.text,border:"1px solid "+C.border}}>
                    {backupsLoading?"Loading...":"Load Backups"}
                  </button>
                </div>
                {backups.length === 0 && !backupsLoading && (
                  <div style={{fontSize:FONT.small,color:C.textDim,fontStyle:"italic"}}>No backups found. Backups are created automatically on each apply.</div>
                )}
                {backups.length > 0 && (
                  <div style={{display:"flex",flexDirection:"column",gap:8}}>
                    {backups.map((bak,i) => (
                      <div key={i} style={{...cardBg,background:C.surfaceAlt,padding:12,borderRadius:6,border:"1px solid "+C.borderLight,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div>
                          <div style={{fontSize:FONT.small,fontWeight:600,color:C.text,fontFamily:"'JetBrains Mono',monospace",marginBottom:4}}>
                            {new Date(parseInt(bak.timestamp)).toLocaleString()}
                          </div>
                          <div style={{fontSize:FONT.small,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>
                            {(bak.size / 1024).toFixed(1)} KB
                          </div>
                        </div>
                        <button onClick={() => restoreBackup(bak.timestamp)}
                          style={{...btnBase,background:C.reduction,color:C.white,padding:"8px 16px",fontSize:FONT.small}}>
                          Restore
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Session Apply History */}
            {applyHistory.length === 0 ? (
              <div style={{...cardBg,color:C.textDim,fontSize:FONT.label,textAlign:"center",padding:40}}>No updates applied this session.</div>
            ) : applyHistory.map((h, hi) => (
              <div key={hi} style={{...cardBg,borderLeft:"3px solid "+C.reduction}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                  <div style={{fontSize:FONT.label,fontWeight:700,color:C.text,fontFamily:"'JetBrains Mono',monospace"}}>{new Date(h.ts).toLocaleTimeString()}</div>
                  <div style={{fontSize:FONT.small,color:C.reduction,fontFamily:"'JetBrains Mono',monospace"}}>{h.rowsAdded} row{h.rowsAdded>1?"s":""} added</div>
                </div>
                <div style={{fontSize:FONT.small,color:C.textMuted}}>Modified: {(h.modified||[]).join(", ")}</div>
                {h.warnings && h.warnings.length > 0 && <div style={{fontSize:FONT.small,color:C.drone,marginTop:4}}>{h.warnings.join(" · ")}</div>}
              </div>
            ))}
          </div>
        )}

        {/* ═══ ARTICLE MODE ═══ */}
        {ingestMode === "article" && (
          <div style={cardBg}>
            <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.accent,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>
              ARTICLE DATA EXTRACTION
            </div>
            <div style={{fontSize:FONT.small,color:C.textDim,marginBottom:12,lineHeight:1.6}}>
              Paste a news article below. Sonnet will read it and extract structured data into ALL matching tracker arrays simultaneously — country intercepts, oil prices, shipping data, IRGC claims, casualties, and more. One article can update multiple tabs at once.
            </div>
            <textarea value={articleText} onChange={e=>setArticleText(e.target.value)}
              placeholder="Paste news article text here (Reuters, Bloomberg, Al Jazeera, etc.)..."
              style={{width:"100%",minHeight:200,padding:14,fontSize:FONT.table,fontFamily:"'JetBrains Mono',monospace",background:C.surfaceAlt,color:C.textMain,border:"1px solid "+C.border,borderRadius:8,resize:"vertical",marginBottom:12}}/>
            <div style={{display:"flex",gap:8,marginBottom:16}}>
              <button onClick={runArticleIngest} disabled={articleLoading || !articleText.trim() || !hasAnyApiKey}
                style={{padding:"10px 24px",fontSize:FONT.table,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",
                  background:articleLoading?"transparent":C.accent,color:articleLoading?C.textDim:"#fff",
                  border:articleLoading?"1px solid "+C.border:"none",borderRadius:6,cursor:articleLoading?"wait":"pointer"}}>
                {articleLoading ? "Extracting..." : "Extract Data"}
              </button>
              {articleText.trim() && <button onClick={()=>{setArticleText("");setArticleResults(null);}}
                style={{padding:"10px 16px",fontSize:FONT.label,fontFamily:"'JetBrains Mono',monospace",background:"transparent",color:C.textDim,border:"1px solid "+C.border,borderRadius:6,cursor:"pointer"}}>Clear</button>}
            </div>

            {articleResults && !articleResults.noNewData && (
              <div>
                <div style={{fontSize:FONT.small,fontWeight:700,color:C.reduction,marginBottom:8,fontFamily:"'JetBrains Mono',monospace"}}>
                  EXTRACTED DATA — {Object.keys(articleResults).filter(k => k !== "sources" && k !== "noNewData" && Array.isArray(articleResults[k]) && articleResults[k].length > 0).length} arrays matched
                </div>
                {Object.entries(articleResults).filter(([k,v]) => k !== "sources" && k !== "noNewData" && Array.isArray(v) && v.length > 0).map(([arrayName, rows]) => (
                  <div key={arrayName} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:12,marginBottom:8}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                      <span style={{fontSize:FONT.label,fontWeight:700,color:C.accent,fontFamily:"'JetBrains Mono',monospace"}}>{arrayName}</span>
                      <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{rows.length} row{rows.length>1?"s":""}</span>
                    </div>
                    <pre style={{fontSize:FONT.small,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",whiteSpace:"pre-wrap",maxHeight:120,overflow:"auto",margin:0}}>{JSON.stringify(rows, null, 1)}</pre>
                  </div>
                ))}
                {articleResults.sources && articleResults.sources.length > 0 && (
                  <div style={{fontSize:FONT.small,color:C.textDim,marginTop:8}}>Sources: {articleResults.sources.join(", ")}</div>
                )}
                <div style={{display:"flex",gap:8,marginTop:12}}>
                  <button onClick={async () => {
                    const updates = Object.entries(articleResults)
                      .filter(([k,v]) => k !== "sources" && k !== "noNewData" && Array.isArray(v) && v.length > 0)
                      .map(([arrayName, rows]) => {
                        const countryArrays = ["UAE_DATA","QATAR_DATA","BAHRAIN_DATA","SAUDI_DATA","KUWAIT_DATA","OMAN_DATA","IRAQ_DATA"];
                        const countryName = countryArrays.includes(arrayName) ? arrayName.replace("_DATA","") : null;
                        return { targetArray: arrayName, country: countryName, rows, leakers: arrayName === "LEAKER_LOG" ? rows : [] };
                      });
                    if (updates.length === 0) { setIngestError("No data to apply."); return; }
                    const result = await applyUpdates(updates, false);
                    if (result && result.ok) { setIngestError(null); }
                  }}
                    style={{padding:"10px 24px",fontSize:FONT.table,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",background:C.reduction,color:C.white,border:"none",borderRadius:6,cursor:"pointer"}}>
                    Apply to Tracker
                  </button>
                  <button onClick={()=>{
                    const updates = Object.entries(articleResults)
                      .filter(([k,v]) => k !== "sources" && k !== "noNewData" && Array.isArray(v) && v.length > 0)
                      .map(([arrayName, rows]) => ({ targetArray: arrayName, rows, leakers: arrayName === "LEAKER_LOG" ? rows : [] }));
                    downloadUpdatedTracker(updates);
                  }}
                    style={{padding:"10px 16px",fontSize:FONT.label,fontFamily:"'JetBrains Mono',monospace",background:"transparent",color:C.textDim,border:"1px solid "+C.border,borderRadius:6,cursor:"pointer"}}>
                    Download Copy
                  </button>
                </div>
              </div>
            )}
            {articleResults && articleResults.noNewData && (
              <div style={{padding:16,background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,fontSize:FONT.label,color:C.textDim,textAlign:"center"}}>
                No extractable tracker data found in this article.
              </div>
            )}
          </div>
        )}

        {/* ═══ INTEL CONSOLE MODE ═══ */}
        {ingestMode === "intel" && (
          <div style={cardBg}>
            <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.drone,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>
              ★ MULTI-PROVIDER INTELLIGENCE CONSOLE
            </div>
            <div style={{fontSize:FONT.small,color:C.textDim,marginBottom:12,lineHeight:1.6}}>
              Run Claude, Gemini, and Codex in parallel against the same scope. The merge engine combines results with consensus scoring and conflict detection.
            </div>

            {/* Scope + Provider selection */}
            <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:16,alignItems:"flex-end"}}>
              <div>
                <div style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,marginBottom:4,fontFamily:"'JetBrains Mono',monospace"}}>SCOPE</div>
                <select value={intelScope} onChange={e=>setIntelScope(e.target.value)}
                  style={{padding:"6px 10px",fontSize:FONT.label,fontFamily:"'JetBrains Mono',monospace",background:C.surfaceAlt,color:C.text,border:"1px solid "+C.border,borderRadius:4}}>
                  <option value="economics_full">Economics Full</option>
                  <option value="markets_shipping">Markets & Shipping</option>
                  <option value="iran_full">Iran Full</option>
                  <option value="us_israel">US & Israel</option>
                  <option value="countries">Countries</option>
                  <option value="sources_glossary">Sources & Glossary</option>
                </select>
              </div>
              <div>
                <div style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,marginBottom:4,fontFamily:"'JetBrains Mono',monospace"}}>PROVIDERS</div>
                <div style={{display:"flex",gap:6}}>
                  {["claude","gemini","codex"].map(p => (
                    <label key={p} style={{display:"flex",alignItems:"center",gap:3,fontSize:FONT.small,color:intelSelectedProviders.includes(p)?C.text:C.textDim,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer"}}>
                      <input type="checkbox" checked={intelSelectedProviders.includes(p)}
                        onChange={e => setIntelSelectedProviders(prev => e.target.checked ? [...prev,p] : prev.filter(x=>x!==p))} />
                      {p.charAt(0).toUpperCase()+p.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
              <button onClick={async()=>{
                if(intelLoading) return;
                setIntelLoading(true); setIntelResults(null); setIntelApproved({});
                try {
                  const base = (typeof window !== "undefined" && window.location.protocol !== "file:") ? "" : (typeof IWT_BASE !== "undefined" ? IWT_BASE : "");
                  const createRes = await fetch(base+"/api/iwt/intel/session",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+adminToken},
                    body:JSON.stringify({scope:intelScope,providers:intelSelectedProviders,sinceDay:21})}).then(r=>r.json());
                  if(!createRes.ok){ setIngestError("Intel session create failed: "+(createRes.error||"unknown")); setIntelLoading(false); return; }
                  setIntelSession(createRes);
                  const runRes = await fetch(base+"/api/iwt/intel/session/"+createRes.sessionId+"/run",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+adminToken},
                    body:JSON.stringify({})}).then(r=>r.json());
                  if(!runRes.ok && runRes.error){ setIngestError("Intel run error: "+runRes.error); }
                  setIntelResults(runRes);
                  // Auto-approve all high-consensus rows
                  if(runRes.merged){
                    const auto = {};
                    Object.entries(runRes.merged).forEach(([arr,rows])=>{
                      if(Array.isArray(rows)) rows.forEach((r,i)=>{
                        if(r._consensus && r._consensus.level !== "LOW") auto[arr+"-"+i] = true;
                      });
                    });
                    setIntelApproved(auto);
                  }
                } catch(e) { console.error("Intel session error:",e); setIngestError("Intel session failed: "+e.message); }
                setIntelLoading(false);
              }} disabled={intelLoading || intelSelectedProviders.length===0}
                style={{padding:"8px 20px",fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",
                  background:intelLoading?"transparent":C.drone,color:intelLoading?C.textDim:"#000",
                  border:intelLoading?"1px solid "+C.border:"none",borderRadius:6,cursor:intelLoading?"wait":"pointer",position:"relative"}}>
                {intelLoading ? ("⏳ Running "+intelSelectedProviders.length+" provider"+(intelSelectedProviders.length>1?"s":"")+"...") : "▶ Run Intel Session"}
              </button>
            </div>

            {/* Loading indicator during intel session */}
            {intelLoading && (
              <div style={{background:"rgba(245,158,11,0.08)",border:"1px solid rgba(245,158,11,0.3)",borderRadius:8,padding:"16px",marginBottom:12,textAlign:"center"}}>
                <div style={{fontSize:FONT.h1,marginBottom:8}}>⏳</div>
                <div style={{fontSize:FONT.label,fontWeight:700,color:C.drone,fontFamily:"'JetBrains Mono',monospace",marginBottom:4}}>
                  Running {intelSelectedProviders.length} provider{intelSelectedProviders.length>1?"s":""} in parallel...
                </div>
                <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>
                  Scope: {intelScope} · Providers: {intelSelectedProviders.join(", ")} · This may take 30-120 seconds
                </div>
              </div>
            )}

            {/* Provider Cards */}
            {intelResults && intelResults.results && (
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:8,marginBottom:16}}>
                {intelResults.results.map(r => (
                  <div key={r.provider} style={{background:C.surfaceAlt,border:"1px solid "+(r.ok?C.cyan+"50":C.ballistic+"50"),borderRadius:8,padding:12}}>
                    <div style={{fontSize:FONT.label,fontWeight:700,color:r.ok?C.cyan:C.ballistic,fontFamily:"'JetBrains Mono',monospace",marginBottom:4}}>
                      {r.ok?"●":"✗"} {r.provider.charAt(0).toUpperCase()+r.provider.slice(1)}
                    </div>
                    <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>
                      {r.ok ? (r.durationMs+"ms") : (r.error||"Failed")}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Conflicts */}
            {intelResults && intelResults.conflicts && intelResults.conflicts.length > 0 && (
              <div style={{background:C.drone+"11",border:"1px solid "+C.drone+"33",borderRadius:8,padding:12,marginBottom:16}}>
                <div style={{fontSize:FONT.small,fontWeight:700,color:C.drone,marginBottom:8,fontFamily:"'JetBrains Mono',monospace"}}>
                  ⚡ CONFLICTS ({intelResults.conflicts.length})
                </div>
                {intelResults.conflicts.slice(0,10).map((c,i) => (
                  <div key={i} style={{fontSize:FONT.small,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",marginBottom:4}}>
                    {c.array}.{c.field} @ {c.dedupeKey}: {Object.entries(c.values||{}).map(([p,v])=>p+"="+v).join(" vs ")} → resolved: {c.resolvedValue}
                  </div>
                ))}
              </div>
            )}

            {/* Merged Results */}
            {intelResults && intelResults.merged && (
              <div>
                <div style={{fontSize:FONT.small,fontWeight:700,color:C.reduction,marginBottom:8,fontFamily:"'JetBrains Mono',monospace"}}>
                  MERGED RESULTS — {Object.keys(intelResults.merged).filter(k=>Array.isArray(intelResults.merged[k])&&intelResults.merged[k].length>0).length} arrays
                </div>
                {Object.entries(intelResults.merged).filter(([k,v])=>Array.isArray(v)&&v.length>0).map(([arrayName,rows])=>(
                  <div key={arrayName} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:12,marginBottom:8}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                      <span style={{fontSize:FONT.label,fontWeight:700,color:C.drone,fontFamily:"'JetBrains Mono',monospace"}}>{arrayName}</span>
                      <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{rows.length} row{rows.length>1?"s":""}</span>
                    </div>
                    {rows.map((row,ri)=>{
                      const key = arrayName+"-"+ri;
                      const cons = row._consensus;
                      return (
                        <div key={ri} style={{display:"flex",gap:6,alignItems:"center",marginBottom:3,fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace"}}>
                          <input type="checkbox" checked={!!intelApproved[key]}
                            onChange={e=>setIntelApproved(prev=>({...prev,[key]:e.target.checked}))} />
                          <span style={{color:cons&&cons.level==="HIGH"?C.cyan:cons&&cons.level==="MEDIUM"?C.drone:C.ballistic,fontWeight:700}}>
                            {cons?("█".repeat(Math.ceil(cons.score*3))+" "+Math.round(cons.score*100)+"%"):"—"}
                          </span>
                          <span style={{color:C.textMuted,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                            {Object.entries(row).filter(([k])=>k!=="_consensus").map(([k,v])=>k+":"+JSON.stringify(v)).join(", ").slice(0,120)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}

                {/* Action buttons */}
                <div style={{display:"flex",gap:8,marginTop:12}}>
                  <button onClick={()=>{
                    const all = {};
                    Object.entries(intelResults.merged).forEach(([arr,rows])=>{
                      if(Array.isArray(rows)) rows.forEach((r,i)=>{ if(!r._consensus||r._consensus.level!=="LOW") all[arr+"-"+i]=true; });
                    });
                    setIntelApproved(all);
                  }} style={{padding:"6px 14px",fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace",background:"transparent",color:C.text,border:"1px solid "+C.border,borderRadius:4,cursor:"pointer"}}>
                    Select All Valid
                  </button>
                  <button onClick={()=>setIntelApproved({})}
                    style={{padding:"6px 14px",fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace",background:"transparent",color:C.textDim,border:"1px solid "+C.border,borderRadius:4,cursor:"pointer"}}>
                    Deselect All
                  </button>
                  <button onClick={async()=>{
                    const base = (typeof window !== "undefined" && window.location.protocol !== "file:") ? "" : (typeof IWT_BASE !== "undefined" ? IWT_BASE : "");
                    if(!intelSession) return;
                    setApplyLoading(true); setIngestError(null);
                    try {
                      const r = await fetch(base+"/api/iwt/intel/session/"+intelSession.sessionId+"/approve",{method:"POST",
                        headers:{"Content-Type":"application/json","Authorization":"Bearer "+adminToken},
                        body:JSON.stringify({approved:intelApproved,dryRun:false})}).then(r=>r.json());
                      if(r.ok) {
                        setApplySuccess(r);
                        setTimeout(() => window.location.reload(), 1500);
                      } else {
                        setIngestError("Apply failed: "+(r.error||"Unknown error"));
                      }
                    } catch(e) { setIngestError("Apply failed: "+e.message); }
                    setApplyLoading(false);
                  }} disabled={Object.values(intelApproved).filter(Boolean).length===0 || applyLoading}
                    style={{padding:"6px 14px",fontSize:FONT.small,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",
                      background:applyLoading?"transparent":Object.values(intelApproved).filter(Boolean).length>0?C.cyan:"transparent",
                      color:applyLoading?C.textDim:Object.values(intelApproved).filter(Boolean).length>0?"#000":C.textDim,
                      border:Object.values(intelApproved).filter(Boolean).length>0&&!applyLoading?"none":"1px solid "+C.border,borderRadius:4,cursor:applyLoading?"wait":"pointer"}}>
                    {applyLoading ? "⏳ Applying..." : "Apply to Server ▶"}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    );
  };


  // ═══════════════════════════════════════════
  // TIMELINE HEAT MAP — Day × Country grid
  // ═══════════════════════════════════════════

  const renderTimeline = () => {

    /** MoD-style rows store deaths/inj as running official totals, not per-day increments. */
    const casualtySeriesDelta = (dataset, day, field) => {
      if (!dataset || !Array.isArray(dataset)) return { cum: null, dayD: null };
      const sorted = [...dataset].filter(r => r.day != null).sort((a, b) => a.day - b.day);
      const idx = sorted.findIndex(r => r.day === day);
      if (idx < 0) return { cum: null, dayD: null };
      const row = sorted[idx];
      const v = row[field];
      if (v == null) return { cum: null, dayD: null };
      for (let j = idx - 1; j >= 0; j--) {
        const pv = sorted[j][field];
        if (pv != null) return { cum: v, dayD: Math.max(0, v - pv) };
      }
      return { cum: v, dayD: v };
    };

    const attachCasualties = (ds, row) => {
      const d = casualtySeriesDelta(ds, row.day, "deaths");
      const inj = casualtySeriesDelta(ds, row.day, "inj");
      return {
        deathsCum: d.cum,
        deathsDay: d.dayD,
        injCum: inj.cum,
        injDay: inj.dayD,
      };
    };

    // Derive max day dynamically from all country data arrays
    const maxDayTL = Math.max(
      ...[UAE_DATA,QATAR_DATA,BAHRAIN_DATA,SAUDI_DATA,KUWAIT_DATA,OMAN_DATA,IRAQ_DATA]
        .flatMap(ds=>ds.map(d=>d.day||0))
    );
    const DAYS = Array.from({length:maxDayTL},(_,i)=>i+1);
    const COUNTRIES_TL = ["UAE","Qatar","Bahrain","Saudi","Kuwait","Oman","Iraq"];

    const dayPhaseNum = (d) => (d<=5?1:d<=11?2:3);

    const getDayData = (country, day) => {
      const datasets = {UAE:UAE_DATA,Qatar:QATAR_DATA,Bahrain:BAHRAIN_DATA,Saudi:SAUDI_DATA,Kuwait:KUWAIT_DATA};
      if (country==="Oman") {
        const d = OMAN_DATA.find(r=>r.day===day);
        if (!d) return null;
        const hasU = d.U!=null;
        const t = hasU ? d.U : null;
        const c = attachCasualties(OMAN_DATA, d);
        return {total:t,unquantified:!hasU,B:d.B??0,C:d.C??0,U:d.U??0,note:d.note,deaths:0,deathsCum:c.deathsCum,deathsDay:c.deathsDay,injCum:c.injCum,injDay:c.injDay,conf:d.conf||"M",phase:dayPhaseNum(day)};
      }
      if (country==="Iraq") {
        const d = IRAQ_DATA.find(r=>r.day===day);
        if (!d) return null;
        const c = attachCasualties(IRAQ_DATA, d);
        return {total:1,B:0,C:0,U:1,note:d.note,deaths:0,deathsCum:c.deathsCum,deathsDay:c.deathsDay,injCum:c.injCum,injDay:c.injDay,conf:"M",phase:dayPhaseNum(day)};
      }
      const ds = datasets[country];
      if (!ds) return null;
      const row = ds.find(r=>r.day===day);
      if (!row) return null;
      const c = attachCasualties(ds, row);
      if (country==="Bahrain") {
        const hasQuant = row.dB!=null || row.dU!=null;
        const t = hasQuant ? (row.dB||0)+(row.dU||0) : null;
        return {
          total:t,
          unquantified:t==null&&!!row.note,
          B:row.dB||0,C:0,U:row.dU||0,note:row.note,deaths:row.deaths||0,deathsCum:c.deathsCum,deathsDay:c.deathsDay,injCum:c.injCum,injDay:c.injDay,conf:row.conf,phase:row.phase
        };
      }
      const hasQuant = row.B!=null || row.C!=null || row.U!=null;
      const t = hasQuant ? (row.B||0)+(row.C||0)+(row.U||0) : null;
      return {
        total:t,
        unquantified:t==null&&!!row.note,
        B:row.B??0,C:row.C??0,U:row.U??0,note:row.note,deaths:row.deaths||0,deathsCum:c.deathsCum,deathsDay:c.deathsDay,injCum:c.injCum,injDay:c.injDay,conf:row.conf,phase:row.phase
      };
    };

    // Compute max for color scaling per country (numeric totals only; excludes unquantified nulls)
    const maxByCountry = {};
    COUNTRIES_TL.forEach(c => {
      const vals = DAYS.map(d=>getDayData(c,d)).filter(Boolean).map(r=>r.total).filter(v=>typeof v==="number" && !isNaN(v));
      maxByCountry[c] = Math.max(...vals, 1);
    });

    const globalMax = Math.max(...Object.values(maxByCountry));

    const getIntensity = (data, country) => {
      if (!data) return 0;
      if (data.unquantified) return 0.32;
      if (data.total===0) return 0;
      return data.total / (tlFilter==="relative" ? maxByCountry[country] : globalMax);
    };

    const intensityToColor = (pct, _unused, unquantified) => {
      if (unquantified) return {bg:"rgba(245,158,11,0.26)", border:"rgba(245,158,11,0.55)"};
      if (pct===0) return {bg:C.surfaceAlt, border:C.border};
      if (pct < 0.2) return {bg:"rgba(99,102,241,0.12)", border:"rgba(99,102,241,0.25)"};
      if (pct < 0.4) return {bg:"rgba(99,102,241,0.25)", border:"rgba(99,102,241,0.4)"};
      if (pct < 0.6) return {bg:"rgba(245,158,11,0.3)", border:"rgba(245,158,11,0.5)"};
      if (pct < 0.8) return {bg:"rgba(245,158,11,0.5)", border:"rgba(245,158,11,0.7)"};
      return {bg:"rgba(239,68,68,0.55)", border:"rgba(239,68,68,0.8)"};
    };

    const PHASE_COLS = {1:C.ballistic+"30",2:C.drone+"30",3:C.cruise+"30"};
    const PHASE_LABELS = Object.fromEntries(PHASE_DEFINITIONS.map(p=>[p.id,p.name]));

    const cellKey = (c,d) => c+"-"+d;
    const isSelected = (c,d) => tlCell===cellKey(c,d);

    const colW = 44, rowH = 38, labelW = 72;

    return (
      <div>
        {/* Controls */}
        <div style={{fontSize:FONT.small,color:C.textDim,marginBottom:8,fontFamily:"'JetBrains Mono',monospace"}}>Keyboard: ←/→ change day · ↑/↓ change country · Esc clear selection (when a cell is selected)</div>
        <div style={{display:"flex",gap:10,marginBottom:16,alignItems:"center",flexWrap:"wrap"}}>
          <span style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>SCALE:</span>
          {[{k:"total",l:"Global max"},{k:"relative",l:"Per-country max"}].map(opt=>(
            <button key={opt.k} onClick={()=>setTlFilter(opt.k)} style={{
              padding:"4px 12px",fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",
              background:tlFilter===opt.k?C.drone+"20":"transparent",
              color:tlFilter===opt.k?C.drone:C.textDim,
              border:tlFilter===opt.k?"1px solid "+C.drone+"50":"1px solid "+C.border,
              borderRadius:4,cursor:"pointer"
            }}>{opt.l}</button>
          ))}
          <div style={{marginLeft:"auto",display:"flex",gap:8,alignItems:"center"}}>
            {[
              {color:"rgba(99,102,241,0.25)",label:"Low"},
              {color:"rgba(245,158,11,0.4)",label:"Medium"},
              {color:"rgba(239,68,68,0.55)",label:"High volume"},
              {color:"rgba(245,158,11,0.35)",label:"LIVE / no count"},
              {color:"rgba(168,85,247,0.5)",label:"Δ deaths (day)"},
            ].map((l,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:4}}>
                <div style={{width:12,height:12,borderRadius:2,background:l.color}}/>
                <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{l.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Heat map grid */}
        <div style={{overflowX:"auto",marginBottom:16}}>
          <div style={{minWidth: labelW + colW * DAYS.length + 20}}>
            {/* Phase header */}
            <div style={{display:"flex",marginLeft:labelW,marginBottom:2}}>
              {[1,2,3].map(ph=>{
                const days = DAYS.filter(d=>dayPhaseNum(d)===ph);
                return (
                  <div key={ph} style={{
                    width:colW*days.length,textAlign:"center",
                    fontSize:FONT.small,fontWeight:700,letterSpacing:1,
                    color:[C.phaseOne,C.phaseTwo,C.phaseThree][ph-1],
                    fontFamily:"'JetBrains Mono',monospace",
                    borderBottom:"1px solid "+[C.phaseOne,C.phaseTwo,C.phaseThree][ph-1]+"40",
                    paddingBottom:2,
                  }}>{PHASE_LABELS[ph]}</div>
                );
              })}
            </div>

            {/* Day headers */}
            <div style={{display:"flex",marginLeft:labelW,marginBottom:4}}>
              {DAYS.map(d=>(
                <div key={d} style={{
                  width:colW,textAlign:"center",fontSize:FONT.small,
                  color:C.textDim,fontFamily:"'JetBrains Mono',monospace",fontWeight:600,
                  background:PHASE_COLS[dayPhaseNum(d)],
                }}>D{d}</div>
              ))}
            </div>

            {/* Country rows */}
            {COUNTRIES_TL.map(country=>(
              <div key={country} style={{display:"flex",alignItems:"center",marginBottom:3}}>
                <div style={{
                  width:labelW,fontSize:FONT.small,fontWeight:700,color:C.textMuted,
                  fontFamily:"'JetBrains Mono',monospace",flexShrink:0,paddingRight:8,textAlign:"right"
                }}>{country}</div>
                {DAYS.map(d=>{
                  const data = getDayData(country,d);
                  const intensity = getIntensity(data,country);
                  const {bg,border} = intensityToColor(intensity, data?.deathsDay ?? 0, data?.unquantified);
                  const sel = isSelected(country,d);
                  return (
                    <div
                      key={d}
                      onClick={()=>setTlCell(sel?null:cellKey(country,d))}
                      style={{
                        width:colW-2,height:rowH,marginRight:2,borderRadius:4,
                        background:sel?"rgba(99,102,241,0.35)":bg,
                        border:sel?"1px solid "+C.accent:("1px solid "+border),
                        cursor:data?"pointer":"default",
                        display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
                        transition:"all 0.15s",position:"relative",overflow:"hidden",
                      }}
                    >
                      {!data && (
                        <span style={{fontSize:FONT.small,color:C.textDim,opacity:0.4}}>—</span>
                      )}
                      {data && (
                        <>
                          {data.total!=null && data.total>0 && (
                            <span style={{fontSize:FONT.small,fontWeight:700,color:C.text,fontFamily:"'JetBrains Mono',monospace",lineHeight:1}}>
                              {data.total}
                            </span>
                          )}
                          {data.unquantified && (
                            <span style={{fontSize:FONT.tiny,fontWeight:800,color:C.drone,fontFamily:"'JetBrains Mono',monospace",lineHeight:1,letterSpacing:0.5}}>LIVE</span>
                          )}
                          {data.total===0 && !data.unquantified && (
                            <span style={{fontSize:FONT.small,color:C.textDim,opacity:0.55}}>0</span>
                          )}
                          {data.total==null && !data.unquantified && (
                            <span style={{fontSize:FONT.small,color:C.textDim,opacity:0.4}}>—</span>
                          )}
                        </>
                      )}
                      {data && data.deathsDay != null && data.deathsDay > 0 && (
                        <div style={{position:"absolute",bottom:0,left:0,right:0,height:4,background:"rgba(168,85,247,0.85)",borderRadius:"0 0 3px 3px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                          <span style={{fontSize:5,fontWeight:800,color:C.deathsWhite,fontFamily:"'JetBrains Mono',monospace",lineHeight:1}}>✝+{data.deathsDay}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Selected cell detail */}
        {tlCell && (() => {
          const [selCountry, selDay] = tlCell.split(/-(?=\d+$)/);
          const data = getDayData(selCountry, parseInt(selDay));
          if (!data) return null;
          const leakers = LEAKER_LOG.filter(l=>l.country===selCountry && l.day===parseInt(selDay));
          return (
            <div style={{background:C.surfaceAlt,border:"1px solid "+C.accent+"40",borderRadius:8,padding:16,marginBottom:16,animation:"fadeIn 0.2s ease"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
                <div>
                  <span style={{fontSize:FONT.h3,fontWeight:800,color:C.text}}>{selCountry} · Day {selDay}</span>
                  <span style={{fontSize:FONT.small,color:C.textDim,marginLeft:10,fontFamily:"'JetBrains Mono',monospace"}}>Phase {data.phase ?? dayPhaseNum(parseInt(selDay,10))}</span>
                </div>
                <button onClick={()=>setTlCell(null)} aria-label="Close" style={{background:"transparent",border:"none",color:C.textDim,cursor:"pointer",fontSize:FONT.h2}}>✕</button>
              </div>
              <div style={{display:"flex",gap:12,marginBottom:10,flexWrap:"wrap"}}>
                {[{label:"Ballistic",val:data.B,col:C.ballistic},{label:"Cruise",val:data.C,col:C.cruise},{label:"Drones",val:data.U,col:C.drone},{label:"Total",val:data.total,col:C.accent}].map((f,i)=>(
                  <div key={i} style={{background:C.surface,border:"1px solid "+C.border,borderRadius:6,padding:"8px 12px",minWidth:60,textAlign:"center"}}>
                    <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>{f.label}</div>
                    <div style={{fontSize:FONT.h2,fontWeight:800,color:f.val>0?f.col:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{f.val!=null?f.val:"—"}</div>
                  </div>
                ))}
                {[{label:"Deaths (cum.)",val:data.deathsCum,col:C.peak},{label:"Deaths (+day)",val:data.deathsDay,col:C.peak},{label:"Injured (cum.)",val:data.injCum,col:C.drone},{label:"Injured (+day)",val:data.injDay,col:C.drone}].map((f,i)=>(
                  <div key={"c-"+i} style={{background:C.surface,border:"1px solid "+C.border,borderRadius:6,padding:"8px 12px",minWidth:72,textAlign:"center"}}>
                    <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.5}}>{f.label}</div>
                    <div style={{fontSize:FONT.h2,fontWeight:800,color:(f.val!=null&&f.val>0)?f.col:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{f.val!=null?f.val:"—"}</div>
                  </div>
                ))}
              </div>
              <div style={{fontSize:FONT.small,color:C.textDim,marginBottom:10,fontFamily:"'JetBrains Mono',monospace",lineHeight:1.4}}>Casualty columns: cumulative = official running total as of that date; +day = change from the last day in the sheet with a value (not “killed in the last 24h” unless sources say so).</div>
              {data.note && <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.6,marginBottom:leakers.length?10:0}}>{data.note}</div>}
              {leakers.length>0 && (
                <div style={{borderTop:"1px solid "+C.border,paddingTop:8}}>
                  <div style={{fontSize:FONT.small,fontWeight:700,color:C.peak,letterSpacing:1,fontFamily:"'JetBrains Mono',monospace",marginBottom:6}}>⚠ CONFIRMED PENETRATIONS THIS DAY:</div>
                  {leakers.map((l,i)=>(
                    <div key={i} style={{fontSize:FONT.small,color:C.textMuted,marginBottom:4,lineHeight:1.5}}>
                      <span style={{color:l.type==="B"?C.ballistic:C.drone,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"}}>[{l.type}]</span> <span style={{color:C.text,fontWeight:600}}>{l.target}</span> — {l.desc}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })()}

        {/* Summary stats */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:10}}>
          {[
            {label:"Peak single-day (UAE)",value:"D8: 129 total",sub:"17 BM + 113 drones",color:C.peak},
            {label:"Highest drone day",value:"UAE D1: 209 det",sub:"195 intercepted",color:C.drone},
            {label:"Most lethal day",value:"Kuwait D2",sub:"6 US KIA at Port Shuaiba",color:C.peak},
            {label:"Quietest day",value:"UAE D16: 10 total",sub:"Capability degradation signal",color:C.reduction},
          ].map((s,i)=>(
            <div key={i} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:12,borderTop:"2px solid "+s.color}}>
              <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1,textTransform:"uppercase",marginBottom:4}}>{s.label}</div>
              <div style={{fontSize:FONT.h3,fontWeight:800,color:s.color,fontFamily:"'JetBrains Mono',monospace"}}>{s.value}</div>
              <div style={{fontSize:FONT.small,color:C.textMuted}}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════
  // GULF MAP — SVG with leaker events plotted
  // ═══════════════════════════════════════════

  const renderMap = () => {
    const maxWarDay = Math.max(21, ...LEAKER_LOG.map(l=>l.day), ...UAE_DATA.map(d=>d.day));

    // Approximate SVG coords for Gulf region (viewBox 0 0 700 520)
    // Each country gets a polygon region + key target coords
    const COUNTRY_REGIONS = {
      UAE:     {cx:520, cy:310, label:"UAE",     color:C.drone},
      Qatar:   {cx:375, cy:255, label:"Qatar",   color:C.cruise},
      Bahrain: {cx:340, cy:210, label:"Bahrain", color:C.ballistic},
      Saudi:   {cx:310, cy:340, label:"Saudi",   color:C.drone},
      Kuwait:  {cx:365, cy:145, label:"Kuwait",  color:C.ballistic},
      Oman:    {cx:570, cy:390, label:"Oman",    color:C.sea},
      Iraq:    {cx:320, cy:80,  label:"Iraq",    color:C.textMuted},
      Iran:    {cx:490, cy:100, label:"Iran",    color:C.peak},
    };

    // Precise event coords (approximate lon/lat → SVG, viewBox 820×560)
    const EVENT_COORDS = {
      "Dubai Intl Airport T3":    {x:548, y:302},
      "Jebel Ali Port":           {x:530, y:318},
      "Fairmont Palm Jumeirah":   {x:536, y:308},
      "AWS Data Center (mec1-az2)":{x:542, y:296},
      "Al Udeid Air Base":        {x:398, y:268},
      "Al Udeid radar site":      {x:393, y:262},
      "US 5th Fleet HQ Juffair":  {x:358, y:215},
      "Era Views Tower":          {x:355, y:212},
      "ADNOC Ruwais Refinery":    {x:502, y:288},
      "Port Shuaiba TOC":         {x:370, y:155},
      "Ras Tanura Refinery":      {x:380, y:198},
      "Ras Laffan/Mesaieed":      {x:393, y:252},
      "US Embassy Riyadh + CIA":  {x:288, y:330},
      "Kuwait Intl Airport":      {x:370, y:148},
      "Fontana Towers residential":{x:360, y:218},
      "Al-Kharj residential":     {x:305, y:350},
      "BAPCO Sitra Refinery":     {x:362, y:222},
      "Millennium Tower Al-Seef": {x:360, y:215},
      "Ruwais Industrial City":   {x:500, y:290},
      "Salalah Port fuel tanks":  {x:600, y:458},
      "Muharraq fuel depot":      {x:365, y:208},
      "US KC-135 / Mala Qara":    {x:330, y:88},
      "Sohar Industrial Area":    {x:620, y:382},
      "Prince Sultan Air Base":   {x:315, y:365},
      "Fujairah bunkering hub":   {x:575, y:304},
      "US Embassy Baghdad":       {x:335, y:85},
      "Al Udeid Air Base (Day 4)":  {x:398, y:268},
      "Kuwait Intl Airport (Day 12)":{x:370, y:148},
      "Ras Laffan Industrial City":  {x:393, y:252},
      "Duqm Port — worker housing unit":{x:640, y:450},
      "MKD VYOM tanker off Muscat":  {x:700, y:370},
      "KAFCO fuel tanks — Kuwait Intl Airport":{x:372, y:150},
      "Public Institution for Social Security":{x:366, y:155},
      "Baghdad Diplomatic Support Center":{x:338, y:88},
      "Al Minhad Air Base":{x:557, y:312},
      "Al Minhad Air Base — accommodation/medical":{x:557, y:312},
      "Al Minhad AFB — medical/accommodation":{x:557, y:312},
      "SAMREF Refinery Yanbu":       {x:240, y:380},
      "Mina Al-Ahmadi & Mina Abdullah":{x:358, y:168},
      "Baghdad Intl Airport logistics center":{x:332, y:80},
    };

    // Helper: Convert lat/lon to SVG coordinates for Gulf region (viewBox 820×560)
    // Approximate mapping: lon 48-58°E → x 0-820, lat 24-30°N → y 560-0 (inverted)
    const latLonToSvgCoords = (lat, lon) => {
      if (!lat || !lon) return null;
      const minLon = 48, maxLon = 58, minLat = 24, maxLat = 30;
      const x = Math.round(((lon - minLon) / (maxLon - minLon)) * 820);
      const y = Math.round(((maxLat - lat) / (maxLat - minLat)) * 560);
      return (x >= 0 && x <= 820 && y >= 0 && y <= 560) ? {x, y, dynamic: true} : null;
    };

    const filtered = LEAKER_LOG.filter(l => {
      if (l.day > mapDay) return false;
      if (mapFilter !== "all" && l.type !== mapFilter) return false;
      if (mapTargetType !== "all" && l.targetType !== mapTargetType) return false;
      return true;
    });
    const sevColor = {1:C.cruise, 2:C.drone, 3:C.peak};
    const sevR = {1:5, 2:7, 3:10};
    const typeColor = {B:C.ballistic, C:C.cruise, U:C.drone};

    // Country cumulative totals for background shading
    const countryTotals = {
      UAE: UAE_DATA.reduce((s,d) => s + (d.U||0), 0),
      Qatar: QATAR_DATA.reduce((s,d) => s + (d.U||0), 0),
      Bahrain: BAHRAIN_DATA.filter(d=>d.dU!=null).reduce((s,d) => s + (d.dU||0), 0),
      Saudi: SAUDI_DATA.reduce((s,d) => s + (d.U||0), 0),
      Kuwait: KUWAIT_DATA.reduce((s,d) => s + (d.U||0), 0),
      Oman: OMAN_DATA.reduce((s,d) => s + (d.U||0), 0),
      Iraq: IRAQ_DATA.reduce((s,d) => s + (d.U||0), 0),
    };
    const maxTotal = Math.max(...Object.values(countryTotals));

    return (
      <div>
        {/* Filter + timeline controls */}
        <div style={{background:C.surface,border:"1px solid "+C.border,borderRadius:8,padding:14,marginBottom:0,position:"sticky",top:0,zIndex:10}}>
          <div style={{display:"flex",gap:8,marginBottom:10,alignItems:"center",flexWrap:"wrap"}}>
            <span style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>WEAPON:</span>
            {[{k:"all",l:"All"},{k:"B",l:"Ballistic"},{k:"C",l:"Cruise"},{k:"U",l:"Drone/UAV"}].map(f=>(
              <button key={f.k} onClick={()=>setMapFilter(f.k)} style={{
                padding:"3px 10px",fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",
                background:mapFilter===f.k?(f.k==="all"?C.accentBg:typeColor[f.k]+"20"):"transparent",
                color:mapFilter===f.k?(f.k==="all"?C.accent:typeColor[f.k]):C.textDim,
                border:"1px solid "+(mapFilter===f.k?(f.k==="all"?C.accent:typeColor[f.k])+"50":C.border),
                borderRadius:4,cursor:"pointer"
              }}>{f.l}</button>
            ))}
            <span style={{width:1,height:16,background:C.border,margin:"0 4px"}}/>
            <span style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>TARGET:</span>
            {[{k:"all",l:"All"},{k:"Energy",l:"Oil/Energy"},{k:"Transport",l:"Airports"},{k:"Military",l:"Military"},{k:"Residential",l:"Residential"},{k:"Diplomatic",l:"Diplomatic"},{k:"Maritime",l:"Maritime"},{k:"Data",l:"Data/Tech"}].map(f=>(
              <button key={f.k} onClick={()=>setMapTargetType(f.k)} style={{
                padding:"3px 10px",fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",
                background:mapTargetType===f.k?C.accent+"20":"transparent",
                color:mapTargetType===f.k?C.accent:C.textDim,
                border:"1px solid "+(mapTargetType===f.k?C.accent+"50":C.border),
                borderRadius:4,cursor:"pointer"
              }}>{f.l}</button>
            ))}
            <label style={{marginLeft:8,fontSize:FONT.small,color:C.textDim,display:"flex",alignItems:"center",gap:4,cursor:"pointer"}}>
              <input type="checkbox" checked={mapShowNaval} onChange={()=>setMapShowNaval(v=>!v)} style={{accentColor:C.blue,width:12,height:12}}/>
              Naval forces
            </label>
            <span style={{marginLeft:"auto",fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{filtered.length} incidents</span>
          </div>
          {/* Timeline slider */}
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <span style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",minWidth:55}}>DAY 1–{mapDay}</span>
            <input type="range" min="1" max={maxWarDay} value={mapDay} onChange={e=>setMapDay(parseInt(e.target.value))}
              style={{flex:1,accentColor:C.accent,height:4,cursor:"pointer"}}/>
            <span style={{fontSize:FONT.small,fontWeight:700,color:C.accent,fontFamily:"'JetBrains Mono',monospace",minWidth:70}}>
              {mapDay>=maxWarDay?"All days":mapDay<=1?"Feb 28":("Mar "+(mapDay-1))}
            </span>
          </div>
          {/* Zoom controls */}
          <div style={{display:"flex",alignItems:"center",gap:8,marginTop:8}}>
            <span style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>ZOOM:</span>
            <button onClick={()=>setMapZoom(z=>Math.max(0.5,z-0.25))} onMouseEnter={e=>{e.target.style.background=C.accent+"30";e.target.style.color=C.accent;}} onMouseLeave={e=>{e.target.style.background=C.surfaceAlt;e.target.style.color=C.text;}} style={{width:44,height:44,fontSize:FONT.h1,fontWeight:700,background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:6,color:C.text,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s"}}>−</button>
            <span style={{fontSize:FONT.label,fontWeight:700,color:C.accent,fontFamily:"'JetBrains Mono',monospace",minWidth:42,textAlign:"center"}}>{Math.round(mapZoom*100)}%</span>
            <button onClick={()=>setMapZoom(z=>Math.min(4,z+0.25))} onMouseEnter={e=>{e.target.style.background=C.accent+"30";e.target.style.color=C.accent;}} onMouseLeave={e=>{e.target.style.background=C.surfaceAlt;e.target.style.color=C.text;}} style={{width:44,height:44,fontSize:FONT.h1,fontWeight:700,background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:6,color:C.text,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s"}}>+</button>
            <button onClick={()=>{setMapZoom(1);setMapPan({x:0,y:0})}} onMouseEnter={e=>{e.target.style.background=C.accent+"20";}} onMouseLeave={e=>{e.target.style.background=C.surfaceAlt;}} style={{padding:"5px 12px",fontSize:FONT.small,fontWeight:600,background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:6,color:C.textMuted,cursor:"pointer",fontFamily:"'JetBrains Mono',monospace",transition:"all 0.15s"}}>Reset</button>
            <span style={{fontSize:FONT.small,color:C.textDim,marginLeft:4,fontStyle:"italic"}}>Drag to pan</span>
          </div>
        </div>

        {/* Scrollable map container */}
        <div style={{maxHeight:"65vh",overflowY:"auto",borderRadius:10,border:"1px solid "+C.border,marginBottom:14}}>
        {/* SVG Map — Enhanced with military bases, cities, shipping lanes */}
        <div style={{background:C.mapBg,border:"1px solid "+C.border,borderRadius:10,padding:0,marginBottom:14,overflow:"hidden",position:"relative",cursor:"grab"}}>
          <svg width="100%" viewBox="0 0 820 560" style={{display:"block",minWidth:600}} preserveAspectRatio="xMidYMid meet"
            onMouseDown={e=>{mapDragRef.current={x:e.clientX-mapPan.x,y:e.clientY-mapPan.y}}}
            onMouseMove={e=>{if(mapDragRef.current)setMapPan({x:e.clientX-mapDragRef.current.x,y:e.clientY-mapDragRef.current.y})}}
            onMouseUp={()=>{mapDragRef.current=null}}
            onMouseLeave={()=>{mapDragRef.current=null}}>
            <defs>
              <radialGradient id="gulfWater" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#0e2444"/><stop offset="100%" stopColor="#091428"/></radialGradient>
              <radialGradient id="iranGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#ef444418"/><stop offset="100%" stopColor="#ef444400"/></radialGradient>
              <filter id="glow"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              <marker id="arrowRed" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef444460"/></marker>
            </defs>
            <g transform={`translate(${mapPan.x/mapZoom}, ${mapPan.y/mapZoom}) scale(${mapZoom})`} style={{transformOrigin:"410 280"}}>
            {/* Background */}
            <rect x="0" y="0" width="820" height="560" fill={C.mapBg} rx="8"/>

            {/* Water bodies */}
            <path d="M300,155 Q340,145 370,160 Q410,175 450,185 Q490,175 530,195 Q560,215 575,240 Q590,255 600,285 Q610,310 590,340 Q570,365 540,395 L520,410 Q500,420 480,430 Q440,445 400,460 Q360,475 320,480"
              fill="url(#gulfWater)" stroke="#1e3a5f20" strokeWidth="0.5" opacity="0.95"/>
            <path d="M600,285 Q640,270 680,290 Q720,315 730,350 Q735,380 720,420 Q700,455 670,480 Q640,510 600,530"
              fill="url(#gulfWater)" stroke="#1e3a5f20" strokeWidth="0.5" opacity="0.85"/>
            <path d="M550,470 Q600,500 660,530 Q720,540 780,540 L780,560 L400,560 Q430,530 480,500 Q520,480 550,470"
              fill="#091428" opacity="0.6"/>

            {/* Country landmasses */}
            <polygon points="420,15 640,15 690,55 670,115 620,145 580,155 540,155 500,130 450,100 420,70 395,45" fill="#120808" stroke="#ef444418" strokeWidth="0.8"/>
            <polygon points="250,15 420,15 440,70 400,110 370,130 320,140 280,125 260,100 250,55" fill="#0c0f1a" stroke="#3b455918" strokeWidth="0.8"/>
            <polygon points="310,140 370,130 400,165 375,185 330,180 310,165" fill="#0e1520" stroke="#38bdf815" strokeWidth="0.8"/>
            <polygon points="250,185 310,180 375,200 420,260 445,300 460,370 450,430 420,475 350,500 280,490 240,440 200,340 210,260 230,210" fill="#0c140e" stroke="#10b98112" strokeWidth="0.8"/>
            <polygon points="388,240 408,238 413,275 398,285 384,268" fill="#0e1320" stroke="#38bdf818" strokeWidth="0.8"/>
            <circle cx="358" cy="215" r="16" fill="#0e1320" stroke="#38bdf818" strokeWidth="0.8"/>
            <polygon points="445,270 530,250 610,275 640,330 610,390 565,410 510,400 470,370 450,320 440,290" fill="#0c1320" stroke="#f59e0b15" strokeWidth="0.8"/>
            <polygon points="610,270 680,255 730,295 740,370 730,445 680,490 620,500 580,460 565,410 610,365 620,320" fill="#0c1520" stroke="#10b98112" strokeWidth="0.8"/>

            {/* Iran threat glow */}
            <ellipse cx="530" cy="80" rx="100" ry="60" fill="url(#iranGlow)"/>

            {/* Shipping lanes (Hormuz corridor) */}
            <path d="M580,250 Q600,265 610,285 Q615,300 608,315" fill="none" stroke="#38bdf820" strokeWidth="8" strokeLinecap="round"/>
            <path d="M580,250 Q600,265 610,285 Q615,300 608,315" fill="none" stroke="#38bdf840" strokeWidth="1" strokeDasharray="4,4"/>
            <text x="625" y="280" fill="#38bdf850" fontSize="7" fontFamily="'JetBrains Mono',monospace" transform="rotate(70,625,280)">SHIPPING LANE</text>

            {/* Strait of Hormuz chokepoint */}
            <line x1="590" y1="260" x2="610" y2="260" stroke="#38bdf860" strokeWidth="1" strokeDasharray="2,2"/>
            <text x="600" y="253" fill="#38bdf870" fontSize="7.5" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="700">STRAIT OF HORMUZ</text>
            <text x="600" y="270" fill="#38bdf840" fontSize="6" textAnchor="middle" fontFamily="'JetBrains Mono',monospace">21% world oil transit</text>

            {/* Water body labels */}
            <text x="440" y="215" fill="#132d52" fontSize="9" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="600" letterSpacing="2">PERSIAN GULF</text>
            <text x="680" y="370" fill="#132d52" fontSize="8" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="600">Gulf of Oman</text>
            <text x="650" y="520" fill="#132d5280" fontSize="7" textAnchor="middle" fontFamily="'JetBrains Mono',monospace">ARABIAN SEA</text>

            {/* Country labels */}
            <text x="530" y="55" fill={C.peak} fontSize="11" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="800" opacity="0.85">IRAN</text>
            <text x="320" y="75" fill={C.textDim} fontSize="8" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="700" opacity="0.6">Iraq</text>
            <text x="345" y="160" fill={C.textDim} fontSize="8" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="700" opacity="0.6">Kuwait</text>
            <text x="310" y="370" fill={C.textDim} fontSize="8" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="700" opacity="0.5">Saudi Arabia</text>
            <text x="395" y="260" fill={C.textDim} fontSize="7" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="700" opacity="0.6">Qatar</text>
            <text x="345" y="230" fill={C.textDim} fontSize="6" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="700" opacity="0.6">Bahrain</text>
            <text x="520" y="340" fill={C.textDim} fontSize="8" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="700" opacity="0.6">UAE</text>
            <text x="650" y="410" fill={C.textDim} fontSize="8" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="700" opacity="0.6">Oman</text>

            {/* Iranian launch sites / military bases */}
            {[
              {x:510,y:95,label:"Bandar Abbas",sub:"IRGCN HQ"},
              {x:450,y:45,label:"Isfahan",sub:"Missile production"},
              {x:560,y:70,label:"Chabahar",sub:"Naval base"},
              {x:480,y:65,label:"Natanz",sub:"Nuclear facility"},
            ].map((b,i)=>(
              <g key={"ir-"+i}>
                <polygon points={`${b.x},${b.y-4} ${b.x+3},${b.y+2} ${b.x-3},${b.y+2}`} fill={C.peak} opacity="0.7"/>
                <text x={b.x} y={b.y+12} fill={C.peak} fontSize="5.5" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="700" opacity="0.7">{b.label}</text>
                <text x={b.x} y={b.y+19} fill={C.peak} fontSize="4.5" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" opacity="0.45">{b.sub}</text>
              </g>
            ))}

            {/* Attack vectors (Iran → Gulf) */}
            {[
              {x1:500,y1:115,x2:540,y2:290,label:"→ UAE"},
              {x1:470,y1:105,x2:395,y2:255,label:"→ Qatar"},
              {x1:450,y1:100,x2:355,y2:210,label:"→ Bahrain"},
              {x1:435,y1:100,x2:365,y2:165,label:"→ Kuwait"},
            ].map((v,i)=>(
              <line key={"vec-"+i} x1={v.x1} y1={v.y1} x2={v.x2} y2={v.y2} stroke="#ef444412" strokeWidth="1" strokeDasharray="6,4" markerEnd="url(#arrowRed)"/>
            ))}

            {/* US/Coalition military bases — blue stars */}
            {[
              {x:395,y:265,label:"Al Udeid AB",sub:"CENTCOM Fwd HQ",country:"Qatar"},
              {x:515,y:295,label:"Al Dhafra AB",sub:"USAF F-35/F-22",country:"UAE"},
              {x:355,y:210,label:"NSA Bahrain",sub:"US 5th Fleet HQ",country:"Bahrain"},
              {x:365,y:150,label:"Ali Al Salem AB",sub:"US Army/USAF",country:"Kuwait"},
              {x:375,y:170,label:"Camp Arifjan",sub:"US Army Central",country:"Kuwait"},
              {x:332,y:82,label:"Al Asad AB",sub:"US Marines",country:"Iraq"},
              {x:310,y:360,label:"Prince Sultan AB",sub:"US CAOC",country:"Saudi"},
              {x:555,y:310,label:"Al Minhad AB",sub:"Coalition air ops",country:"UAE"},
            ].map((b,i)=>(
              <g key={"us-"+i}>
                <circle cx={b.x} cy={b.y} r="4" fill="none" stroke="#3b82f6" strokeWidth="1.2" opacity="0.8"/>
                <text x={b.x} y={b.y+3} fill="#3b82f6" fontSize="5" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="800">★</text>
                <text x={b.x+8} y={b.y-2} fill="#3b82f690" fontSize="5" fontFamily="'JetBrains Mono',monospace" fontWeight="700">{b.label}</text>
                <text x={b.x+8} y={b.y+5} fill="#3b82f650" fontSize="4" fontFamily="'JetBrains Mono',monospace">{b.sub}</text>
              </g>
            ))}

            {/* Major cities / targets */}
            {[
              {x:545,y:300,label:"Dubai",size:3},
              {x:525,y:285,label:"Abu Dhabi",size:3},
              {x:397,y:250,label:"Doha",size:2.5},
              {x:350,y:218,label:"Manama",size:2.5},
              {x:360,y:148,label:"Kuwait City",size:2.5},
              {x:285,y:325,label:"Riyadh",size:3},
              {x:380,y:192,label:"Dammam",size:2},
              {x:500,y:285,label:"Ruwais",size:2},
              {x:572,y:300,label:"Fujairah",size:2},
              {x:640,y:370,label:"Muscat",size:2.5},
              {x:600,y:460,label:"Salalah",size:2},
              {x:620,y:380,label:"Sohar",size:1.8},
              {x:390,y:270,label:"Ras Laffan",size:2},
            ].map((c,i)=>(
              <g key={"city-"+i}>
                <circle cx={c.x} cy={c.y} r={c.size} fill={C.text} opacity="0.25"/>
                <circle cx={c.x} cy={c.y} r="1" fill={C.text} opacity="0.6"/>
                <text x={c.x+c.size+3} y={c.y+2} fill="#e2e8f040" fontSize="5.5" fontFamily="'JetBrains Mono',monospace">{c.label}</text>
              </g>
            ))}

            {/* Key energy infrastructure */}
            {[
              {x:500,y:287,label:"ADNOC Ruwais",icon:"⛽"},
              {x:378,y:198,label:"Ras Tanura",icon:"⛽"},
              {x:390,y:268,label:"Ras Laffan LNG",icon:"⛽"},
              {x:352,y:222,label:"BAPCO Sitra",icon:"⛽"},
              {x:570,y:302,label:"Fujairah Hub",icon:"⛽"},
            ].map((e,i)=>(
              <g key={"nrg-"+i}>
                <rect x={e.x-2} y={e.y-2} width="4" height="4" fill="#f59e0b" opacity="0.4" rx="1"/>
              </g>
            ))}

            {/* US/Coalition Naval Forces */}
            {mapShowNaval && US_NAVAL_FORCES.map((ship, si) => {
              const isCarrier = ship.type.includes("Carrier");
              const isSubmarine = ship.type.includes("Submarine");
              const isMCM = ship.type.includes("Mine");
              const col = ship.id.startsWith("uk") ? C.magenta : C.blue;
              const r = isCarrier ? 8 : isSubmarine ? 5 : isMCM ? 4 : 6;
              return (
                <g key={"nav-"+si} style={{cursor:"pointer"}}
                  onMouseEnter={()=>setMapHov("nav-"+si)}
                  onMouseLeave={()=>setMapHov(null)}
                  onClick={()=>setSelEv(selEv==="nav-"+si?null:"nav-"+si)}>
                  {/* Range ring for carriers */}
                  {isCarrier && <circle cx={ship.mapX} cy={ship.mapY} r={35} fill="none" stroke={col} strokeWidth="0.4" strokeDasharray="3,3" opacity="0.25"/>}
                  {/* Ship icon */}
                  {isSubmarine ? (
                    <ellipse cx={ship.mapX} cy={ship.mapY} rx={r+2} ry={r-1} fill={col+"30"} stroke={col} strokeWidth="0.8" opacity="0.8"/>
                  ) : (
                    <circle cx={ship.mapX} cy={ship.mapY} r={r} fill={col+"25"} stroke={col} strokeWidth="1" opacity="0.85"/>
                  )}
                  <text x={ship.mapX} y={ship.mapY+3} fill={col} fontSize={isCarrier?"7":"5.5"} textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="800">
                    {isCarrier?"CV":isSubmarine?"SS":isMCM?"MC":"DD"}
                  </text>
                  {/* Label */}
                  {(mapHov==="nav-"+si || selEv==="nav-"+si) && (
                    <g>
                      <rect x={ship.mapX-60} y={ship.mapY-r-22} width="120" height="16" rx="3" fill="#060a14ee" stroke={col+"60"} strokeWidth="0.5"/>
                      <text x={ship.mapX} y={ship.mapY-r-11} fill={col} fontSize="5.5" textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="600">{ship.name.split("(")[0].trim()}</text>
                    </g>
                  )}
                </g>
              );
            })}

            {/* Incident event dots */}
            {filtered.map((inc, idx) => {
              const coords = (inc.lat && inc.lon) ? latLonToSvgCoords(inc.lat, inc.lon) : (EVENT_COORDS[inc.target] || (COUNTRY_REGIONS[inc.country] ? {x:COUNTRY_REGIONS[inc.country].cx + (idx%5)*8 - 16, y:COUNTRY_REGIONS[inc.country].cy + 15 + (idx%3)*8, approx:true} : null));
              if (!coords) return null;
              const r2 = sevR[inc.severity] || 6;
              const col = inc.deaths>0 ? C.peak : typeColor[inc.type] || C.drone;
              const isHov = mapHov===idx;
              const isSel = selEv===idx;
              return (
                <g key={idx}
                  onMouseEnter={()=>setMapHov(idx)}
                  onMouseLeave={()=>setMapHov(null)}
                  onClick={()=>setSelEv(isSel?null:idx)}
                  style={{cursor:"pointer"}}>
                  {inc.severity===3 && (
                    <circle cx={coords.x} cy={coords.y} r={r2+5} fill="none" stroke={col} strokeWidth="0.5" opacity="0.3">
                      <animate attributeName="r" values={`${r2+3};${r2+8};${r2+3}`} dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite"/>
                    </circle>
                  )}
                  <circle cx={coords.x} cy={coords.y} r={isHov||isSel?r2+3:r2} fill={col}
                    opacity={isHov||isSel?1:0.75} stroke={isSel?"#fff":col} strokeWidth={isSel?1.5:0.5}
                    strokeDasharray={coords.approx?"2,2":"none"}/>
                  {r2>=7 && <text x={coords.x} y={coords.y+3} fill="#f8fafc" fontSize="6"
                    textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="800">{inc.type}</text>}
                  {(isHov && !isSel) && <text x={coords.x} y={coords.y-r2-4} fill={C.text} fontSize="5.5"
                    textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="600" filter="url(#glow)">{inc.target.slice(0,25)}</text>}
                </g>
              );
            })}

            {/* Expanded legend */}
            <g>
              <rect x="12" y="12" width="155" height="175" rx="5" fill={C.mapBg+"ee"} stroke={C.border} strokeWidth="0.5"/>
              <text x="20" y="28" fill={C.textDim} fontSize="7" fontFamily="'JetBrains Mono',monospace" fontWeight="700">INCIDENT TYPE</text>
              {[{col:C.ballistic,label:"Ballistic missile"},{col:C.cruise,label:"Cruise missile"},{col:C.drone,label:"Drone / UAV"},{col:C.peak,label:"Fatalities reported"}].map((l,i)=>(
                <g key={i}>
                  <circle cx="22" cy={44+i*16} r="5" fill={l.col} opacity="0.8"/>
                  <text x="34" y={48+i*16} fill={C.textDim} fontSize="7" fontFamily="'JetBrains Mono',monospace">{l.label}</text>
                </g>
              ))}
              <line x1="16" y1="114" x2="155" y2="114" stroke={C.border} strokeWidth="0.5"/>
              <text x="20" y="128" fill={C.blue+"90"} fontSize="7" fontFamily="'JetBrains Mono',monospace" fontWeight="700">MILITARY</text>
              <circle cx="22" cy="142" r="4" fill="none" stroke={C.blue} strokeWidth="1"/><text x="22" y="145" fill={C.blue} fontSize="5" textAnchor="middle" fontWeight="800">★</text>
              <text x="34" y="145" fill={C.blue+"70"} fontSize="6.5" fontFamily="'JetBrains Mono',monospace">US/Coalition base</text>
              <polygon points="22,154 25,160 19,160" fill={C.peak} opacity="0.7"/>
              <text x="34" y="161" fill={C.peak+"90"} fontSize="6.5" fontFamily="'JetBrains Mono',monospace">Iranian facility</text>
              <rect x="20" y="168" width="4" height="4" fill="#f59e0b" opacity="0.5" rx="1"/>
              <text x="34" y="175" fill="#f59e0b70" fontSize="6.5" fontFamily="'JetBrains Mono',monospace">Energy infrastructure</text>
            </g>

            {/* Map attribution */}
            <text x="810" y="552" fill="#5a647830" fontSize="5" textAnchor="end" fontFamily="'JetBrains Mono',monospace">IWT · Schematic · Not to geographic scale</text>
            </g>
          </svg>
        </div>

        {/* Selected event / ship detail */}
        {selEv!==null && (() => {
          // Naval force detail
          if (typeof selEv === "string" && selEv.startsWith("nav-")) {
            const ship = US_NAVAL_FORCES[parseInt(selEv.split("-")[1])];
            if (!ship) return null;
            const col = ship.id.startsWith("uk") ? "#c084fc" : "#3b82f6";
            return (
              <div style={{background:C.surfaceAlt,border:"1px solid "+col+"40",borderRadius:8,padding:14,marginBottom:14,animation:"fadeIn 0.2s ease"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                  <div>
                    <span style={{fontSize:FONT.table,fontWeight:800,color:C.text}}>{ship.name}</span>
                    <span style={{fontSize:FONT.small,color:C.textDim,marginLeft:8}}>{ship.location}</span>
                  </div>
                  <button onClick={()=>setSelEv(null)} aria-label="Close" style={{background:"transparent",border:"none",color:C.textDim,cursor:"pointer"}}>✕</button>
                </div>
                <div style={{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"}}>
                  <span style={{fontSize:FONT.small,padding:"2px 8px",borderRadius:3,background:col+"20",color:col,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>{ship.type}</span>
                  <span style={{fontSize:FONT.small,padding:"2px 8px",borderRadius:3,background:C.surfaceAlt,border:"1px solid "+C.border,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>{ship.composition}</span>
                </div>
                <div style={{fontSize:FONT.small,color:C.drone,fontFamily:"'JetBrains Mono',monospace",marginBottom:4}}>{ship.status}</div>
                <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.6}}>{ship.note}</div>
              </div>
            );
          }
          // Incident detail (existing)
          const inc = filtered[selEv];
          if (!inc) return null;
          return (
            <div style={{background:C.surfaceAlt,border:"1px solid "+C.accent+"40",borderRadius:8,padding:14,marginBottom:14,animation:"fadeIn 0.2s ease"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                <div>
                  <span style={{fontSize:FONT.table,fontWeight:800,color:C.text}}>{inc.target}</span>
                  <span style={{fontSize:FONT.small,color:C.textDim,marginLeft:8}}>{inc.date} · {inc.country} · Day {inc.day}</span>
                </div>
                <button onClick={()=>setSelEv(null)} aria-label="Close" style={{background:"transparent",border:"none",color:C.textDim,cursor:"pointer"}}>✕</button>
              </div>
              <div style={{display:"flex",gap:8,marginBottom:8}}>
                <span style={{fontSize:FONT.small,padding:"2px 8px",borderRadius:3,background:typeColor[inc.type]+"20",color:typeColor[inc.type],fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>{inc.type==="B"?"BALLISTIC":inc.type==="C"?"CRUISE":"DRONE/UAV"}</span>
                <span style={{fontSize:FONT.small,padding:"2px 8px",borderRadius:3,background:{1:C.cruise,2:C.drone,3:C.peak}[inc.severity]+"20",color:{1:C.cruise,2:C.drone,3:C.peak}[inc.severity],fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>SEV {["MINOR","MOD","SIGNIFICANT"][inc.severity-1]}</span>
                {inc.targetType && <span style={{fontSize:FONT.small,padding:"2px 8px",borderRadius:3,background:C.surfaceAlt,border:"1px solid "+C.border,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>{inc.targetType}</span>}
              </div>
              <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.6}}>{inc.desc}</div>
            </div>
          );
        })()}

        {/* Incident list */}
        <div style={{background:C.surface,border:"1px solid "+C.border,borderRadius:8,overflow:"hidden"}}>
          <div style={{padding:"10px 14px",borderBottom:"1px solid "+C.border,fontSize:FONT.small,fontWeight:700,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>
            ALL PLOTTED INCIDENTS ({filtered.length})
          </div>
          <div style={{maxHeight:280,overflowY:"auto"}}>
            {filtered.map((inc,idx)=>{
              const col = typeColor[inc.type]||C.drone;
              return (
                <div key={idx} role="button" tabIndex={0} aria-label={"Event " + idx} onClick={()=>setSelEv(selEv===idx?null:idx)} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();setSelEv(selEv===idx?null:idx);}}} 
                  style={{padding:"8px 14px",borderBottom:"1px solid "+C.border,cursor:"pointer",
                    background:selEv===idx?C.accentBg:idx%2===0?"transparent":C.surfaceAlt+"40",
                    display:"flex",gap:10,alignItems:"center",transition:"background 0.1s"}}>
                  <span style={{fontSize:FONT.small,fontWeight:700,padding:"1px 5px",borderRadius:2,background:col+"20",color:col,fontFamily:"'JetBrains Mono',monospace",flexShrink:0}}>{inc.type}</span>
                  <span style={{fontSize:FONT.small,fontWeight:600,color:C.text,flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{inc.target}</span>
                  <span style={{fontSize:FONT.small,color:C.textDim,flexShrink:0}}>{inc.country}</span>
                  <span style={{fontSize:FONT.small,color:C.textDim,flexShrink:0,fontFamily:"'JetBrains Mono',monospace"}}>{inc.date}</span>
                  <span style={{width:6,height:6,borderRadius:"50%",background:{1:C.cruise,2:C.drone,3:C.peak}[inc.severity],flexShrink:0}}/>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════
  // INTERCEPT RATE TREND — new analytics sub-tab
  // ═══════════════════════════════════════════

  const renderInterceptTrend = () => {
    const cardBg = S_CARD_LG;

    // Degradation model: compute linear trend over UAE intercept rate series
    const uaeUrates = UAE_DATA.filter(d=>d.U!=null&&d.Ud!=null&&d.Ud>0).map(d=>({day:d.day,rate:d.U/d.Ud*100}));
    const n = uaeUrates.length;
    const sumX = uaeUrates.reduce((s,d)=>s+d.day,0);
    const sumY = uaeUrates.reduce((s,d)=>s+d.rate,0);
    const sumXY = uaeUrates.reduce((s,d)=>s+d.day*d.rate,0);
    const sumX2 = uaeUrates.reduce((s,d)=>s+d.day*d.day,0);
    const slope = (n*sumXY-sumX*sumY)/(n*sumX2-sumX*sumX);
    const intercept_val = (sumY-slope*sumX)/n;
    const latestDay = uaeUrates.length > 0 ? uaeUrates[uaeUrates.length-1].day : 17;
    const trendAtD1 = intercept_val + slope*1;
    const trendAtDN = intercept_val + slope*latestDay;
    const degradation = trendAtD1 - trendAtDN;
    const isStable = Math.abs(slope) < 0.3;
    const isImproving = slope > 0.3;
    const isDegrading = slope < -0.3;


    const chartW=700, chartH=320, padL=48, padR=16, padT=16, padB=28;
    const plotW=chartW-padL-padR, plotH=chartH-padT-padB;

    // UAE intercept rates — filtered by range selector
    const rangedUAE = analyticsRange > 0 ? UAE_DATA.slice(-analyticsRange) : UAE_DATA;
    const uaeB = rangedUAE.filter(d=>d.B!=null&&d.Bd!=null&&d.Bd>0).map(d=>({
      day:d.day, date:d.date, rate:Math.round(d.B/d.Bd*1000)/10, label:"D"+d.day, leakers:d.Bd-d.B
    }));
    const uaeU = rangedUAE.filter(d=>d.U!=null&&d.Ud!=null&&d.Ud>0).map(d=>({
      day:d.day, date:d.date, rate:Math.round(d.U/d.Ud*1000)/10, label:"D"+d.day, leakers:d.Ud-d.U
    }));

    // Bahrain cumulative intercept rates by day
    const bhRates = BAHRAIN_DATA.filter(d=>d.cumB!=null&&d.cumB>0).map((d,i,arr)=>{
      const prev = arr[i-1];
      const dB = prev ? d.cumB - prev.cumB : d.cumB;
      const dU = prev ? d.cumU - prev.cumU : d.cumU;
      return {day:d.day, label:"D"+d.day, cumB:d.cumB, cumU:d.cumU};
    });

    const toX = (i, len) => padL + (i/(Math.max(len-1,1)))*plotW;
    const yMin = 70, yMax = 100;
    const toY = (v) => padT + plotH - ((Math.max(v,yMin)-yMin)/(yMax-yMin))*plotH;

    const renderLine = (data, field, color) => {
      const pts = data.map((d,i)=>({x:toX(i,data.length), y:toY(d[field]), v:d[field], label:d.label}));
      if (pts.length < 2) return null;
      return (
        <g>
          <polyline points={pts.map(p=>p.x+","+p.y).join(" ")} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" opacity={0.85}/>
          {pts.map((p,i)=>{
            const isDegraded = p.v != null && p.v < 95;
            return (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r={isDegraded?4:1.5} fill={isDegraded?C.peak:color} stroke={isDegraded?C.bg:"none"} strokeWidth={isDegraded?1.5:0} opacity={isDegraded?1:0.5}/>
              {isDegraded && <text x={p.x} y={p.y-12} fill={p.v<90?C.peak:C.drone} fontSize={9} textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="700">{Math.round(p.v*10)/10}%</text>}
              {isDegraded && <text x={p.x} y={p.y-22} fill={C.textDim} fontSize={7} textAnchor="middle" fontFamily="'JetBrains Mono',monospace">{p.label}</text>}
            </g>
          );})}
        </g>
      );
    };

    const gridLines = [75,80,85,90,92,94,96,98,100];

    const stabilityColor = isDegrading?C.peak:isImproving?C.reduction:C.drone;
    const stabilityLabel = isDegrading?"DEGRADING":"STABLE";

    return (
      <div>
        {/* Defense stability indicator */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:10,marginBottom:16}}>
          {[
            {label:"UAV rate trend (slope)",value:(slope>0?"+":"")+slope.toFixed(2)+"%/day",color:stabilityColor,sub:isDegrading?"Statistically degrading":isImproving?"Improving over time":"Broadly stable"},
            {label:"D1 trend baseline",value:trendAtD1.toFixed(1)+"%",color:C.textMuted,sub:"Fitted intercept at Day 1"},
            {label:"D"+latestDay+" trend value",value:trendAtDN.toFixed(1)+"%",color:trendAtDN<85?C.peak:C.reduction,sub:"Fitted value at Day "+latestDay},
            {label:"Total degradation",value:degradation.toFixed(1)+"%",color:degradation>10?C.peak:degradation>5?C.drone:C.reduction,sub:"D1→D"+latestDay+" rate change (fitted)"},
            {label:"Defense stability",value:stabilityLabel,color:stabilityColor,sub:"Based on linear trend fit"},
          ].map((s,i)=>(
            <div key={i} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:"10px 12px",borderTop:"2px solid "+s.color}}>
              <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1,textTransform:"uppercase",marginBottom:4}}>{s.label}</div>
              <div style={{fontSize:FONT.h2,fontWeight:800,color:s.color,fontFamily:"'JetBrains Mono',monospace"}}>{s.value}</div>
              <div style={{fontSize:FONT.small,color:C.textMuted,marginTop:2}}>{s.sub}</div>
            </div>
          ))}
        </div>
        <div style={cardBg}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:C.reduction,marginBottom:4,fontFamily:"'JetBrains Mono',monospace"}}>UAE Intercept Rate Trend</div>
          <div style={{fontSize:FONT.small,color:C.textDim,marginBottom:8}}>% of detected successfully intercepted · dots highlight degraded days (&lt;95%) · only degraded values labeled</div>
          <div style={{display:"flex",gap:4,marginBottom:14}}>
            {[{v:30,l:"Last 30d"},{v:60,l:"Last 60d"},{v:0,l:"All"}].map(r=>(
              <button key={r.v} onClick={()=>setAnalyticsRange(r.v)} style={{
                padding:"3px 10px",fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",
                background:analyticsRange===r.v?C.accentBg:"transparent",
                color:analyticsRange===r.v?C.accent:C.textDim,
                border:"1px solid "+(analyticsRange===r.v?C.accent+"50":C.border),
                borderRadius:4,cursor:"pointer"
              }}>{r.l}</button>
            ))}
          </div>
          <div style={{overflowX:"auto"}}>
            <svg width="100%" viewBox={"0 0 "+chartW+" "+chartH} preserveAspectRatio="xMidYMid meet" style={{display:"block",maxWidth:"100%",height:"auto"}}>
              {/* Grid + danger zones */}
              <rect x={padL} y={toY(85)} width={plotW} height={padT+plotH-toY(85)} fill={C.peak} opacity="0.06"/>
              <rect x={padL} y={toY(90)} width={plotW} height={toY(85)-toY(90)} fill={C.drone} opacity="0.06"/>
              {gridLines.map(v=>{
                const y=toY(v);
                return (
                  <g key={v}>
                    <line x1={padL} y1={y} x2={padL+plotW} y2={y} stroke={v===90?C.drone:v===85?C.peak:C.border} strokeWidth={v===90||v===85?1:0.5} strokeDasharray={v===90||v===85?"4,3":"none"} opacity={v===90||v===85?0.6:1}/>
                    <text x={padL-6} y={y+3} fill={v===90?C.drone:v===85?C.peak:C.textDim} fontSize={8} textAnchor="end" fontFamily="'JetBrains Mono',monospace" fontWeight={v===90||v===85?"700":"400"}>{v}%</text>
                  </g>
                );
              })}
              {/* Phase separators */}
              {[5,11].map(d=>{
                const ratios = uaeB.length > 1 ? uaeB : uaeU;
                const matchIdx = ratios.findIndex(r=>r.day===d);
                if (matchIdx<0) return null;
                const x = toX(matchIdx, ratios.length);
                return <line key={d} x1={x} y1={padT} x2={x} y2={padT+plotH} stroke={C.borderLight} strokeWidth={1} strokeDasharray="3,3" opacity={0.5}/>;
              })}
              {/* X axis labels */}
              {uaeB.map((d,i)=>(
                <text key={i} x={toX(i,uaeB.length)} y={chartH-4} fill={C.textDim} fontSize={7} textAnchor="middle" fontFamily="'JetBrains Mono',monospace">{d.label}</text>
              ))}
              {/* Lines — wider strokes + distinct colors for readability */}
              {renderLine(uaeB, "rate", "#ef4444")}
              {renderLine(uaeU, "rate", "#22d3ee")}
              {/* Trend line overlay */}
              {uaeUrates.length>=2 && <line x1={toX(0,uaeU.length)} y1={toY(trendAtD1)} x2={toX(uaeU.length-1,uaeU.length)} y2={toY(trendAtDN)} stroke="#a78bfa" strokeWidth={1.5} strokeDasharray="6,4" opacity={0.7}/>}
              {/* Legend */}
              <rect x={padL+10} y={padT+8} width={170} height={46} rx={3} fill={C.surface} opacity={0.9}/>
              {[{col:"#ef4444",label:"Ballistic rate"},{col:"#22d3ee",label:"Drone/UAV rate"},{col:"#a78bfa",label:"Linear trend (fitted)",dashed:true}].map((l,i)=>(
                <g key={i}>
                  <line x1={padL+18} y1={padT+18+i*14} x2={padL+30} y2={padT+18+i*14} stroke={l.col} strokeWidth={2} strokeDasharray={l.dashed?"4,3":"none"}/>
                  <text x={padL+34} y={padT+22+i*14} fill={C.textMuted} fontSize={8} fontFamily="'JetBrains Mono',monospace">{l.label}</text>
                </g>
              ))}
              {/* Threshold labels */}
              <text x={padL+plotW-4} y={toY(90)-4} fill={C.drone} fontSize={7} textAnchor="end" fontFamily="'JetBrains Mono',monospace" opacity={0.8}>Adequate threshold</text>
              <text x={padL+plotW-4} y={toY(85)-4} fill={C.peak} fontSize={7} textAnchor="end" fontFamily="'JetBrains Mono',monospace" opacity={0.8}>Degraded threshold</text>
              <text x={padL+4} y={padT+plotH-4} fill={C.textDim} fontSize={7} fontFamily="'JetBrains Mono',monospace">Y-axis: 70%–100% (zoomed)</text>
            </svg>
          </div>
        </div>

        {/* Leaker count chart */}
        <div style={cardBg}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:C.peak,marginBottom:4,fontFamily:"'JetBrains Mono',monospace"}}>UAE Daily Leaker Count (Detected − Intercepted)</div>
          <div style={{fontSize:FONT.small,color:C.textDim,marginBottom:14}}>Number of missiles/drones that were detected but NOT intercepted — fell on territory, sea, or unknown</div>
          <div style={{overflowX:"auto"}}>
            <svg width="100%" viewBox={"0 0 "+chartW+" 140"} preserveAspectRatio="xMidYMid meet" style={{display:"block",maxWidth:"100%",height:"auto"}}>
              {(() => {
                const allLeakers = [
                  ...uaeB.map(d=>({day:d.day,label:d.label,bLeakers:d.leakers,uLeakers:0})),
                ];
                uaeU.forEach(d=>{
                  const existing = allLeakers.find(r=>r.day===d.day);
                  if (existing) existing.uLeakers = d.leakers;
                  else allLeakers.push({day:d.day,label:d.label,bLeakers:0,uLeakers:d.leakers});
                });
                allLeakers.sort((a,b)=>a.day-b.day);
                const pH2=140-padT-padB, maxL=Math.max(...allLeakers.map(d=>d.bLeakers+d.uLeakers),1);
                const bW=(plotW/allLeakers.length)*0.65;
                return allLeakers.map((d,i)=>{
                  const x=padL+i*(plotW/allLeakers.length)+((plotW/allLeakers.length)-bW)/2;
                  const bH=(d.bLeakers/maxL)*pH2, uH=(d.uLeakers/maxL)*pH2;
                  const total=d.bLeakers+d.uLeakers;
                  return (
                    <g key={i}>
                      <rect x={x} y={padT+pH2-uH-bH} width={bW} height={uH} fill={C.drone} rx={2} opacity={0.8}/>
                      <rect x={x} y={padT+pH2-bH} width={bW} height={bH} fill={C.ballistic} rx={2} opacity={0.8}/>
                      {total>0&&<text x={x+bW/2} y={padT+pH2-uH-bH-4} fill={C.peak} fontSize={8} textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontWeight="700">{total}</text>}
                      <text x={x+bW/2} y={140-padB+10} fill={C.textDim} fontSize={7} textAnchor="middle" fontFamily="'JetBrains Mono',monospace">{d.label}</text>
                    </g>
                  );
                });
              })()}
              <line x1={padL} y1={padT} x2={padL} y2={padT+(140-padT-padB)} stroke={C.border} strokeWidth={0.5}/>
            </svg>
          </div>
        </div>

        {/* Key intercept events table */}
        <div style={cardBg}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:C.textDim,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>Notable Intercept Rate Moments</div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:FONT.label}}>
              <thead><tr>
                {["Day","Date","Event","BM Rate","UAV Rate","Significance"].map((h,i)=>(
                  <th key={i} style={{padding:"8px 10px",textAlign:i<2?"center":"left",borderBottom:"2px solid "+C.borderLight,color:C.textDim,fontSize:FONT.badge,fontWeight:700,letterSpacing:1,textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"}}>{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {[
                  {day:16,date:"Mar 15",event:"Minimum volume",bRate:null,uRate:null,sig:"Only 10 total (4B+6U). Signals major Iranian capability degradation.",sigCol:C.reduction},
                  {day:11,date:"Mar 11",event:"Cruise escalation",bRate:null,uRate:null,sig:"7 new cruise missiles — first since Day 3. New weapon type signal.",sigCol:C.cruise},
                  {day:10,date:"Mar 10",event:"Worst drone day",bRate:null,uRate:"74.3%",sig:"9 of 35 drones penetrated (25.7% fail rate). DXB suspended.",sigCol:C.peak},
                  {day:5,date:"Mar 4",event:"Lowest BM day",bRate:null,uRate:"93.8%",sig:"Only 3 BMs — 86% reduction from Day 1 per CJCS.",sigCol:C.reduction},
                  {day:1,date:"Feb 28",event:"Opening salvo",bRate:"96.4%",uRate:"93.3%",sig:"High but 14 drones fell on territory. AWS data center hit.",sigCol:C.drone},
                ].map((row,idx)=>(
                  <tr key={idx} style={{background:idx%2===0?"transparent":C.surfaceAlt+"40"}}>
                    <td style={{padding:"8px 10px",textAlign:"center",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.label,borderBottom:"1px solid "+C.border}}>{row.day}</td>
                    <td style={{padding:"8px 10px",textAlign:"center",fontWeight:600,color:C.text,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.label,whiteSpace:"nowrap",borderBottom:"1px solid "+C.border}}>{row.date}</td>
                    <td style={{padding:"8px 10px",fontWeight:600,color:C.text,fontSize:FONT.label,borderBottom:"1px solid "+C.border}}>{row.event}</td>
                    <td style={{padding:"8px 10px",fontWeight:700,color:row.bRate?(parseFloat(row.bRate)>=90?C.reduction:C.peak):C.nr,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.label,borderBottom:"1px solid "+C.border}}>{row.bRate||<span title="No incidents reported">—</span>}</td>
                    <td style={{padding:"8px 10px",fontWeight:700,color:row.uRate?(parseFloat(row.uRate)>=90?C.reduction:parseFloat(row.uRate)>=80?C.drone:C.peak):C.nr,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.label,borderBottom:"1px solid "+C.border}}>{row.uRate||<span title="No incidents reported">—</span>}</td>
                    <td style={{padding:"8px 10px",fontSize:FONT.small,color:row.sigCol,lineHeight:1.5,borderBottom:"1px solid "+C.border}}>{row.sig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };


  // ═══════════════════════════════════════════
  // CASUALTIES TAB — US & coalition military + civilian
  // ═══════════════════════════════════════════

  const renderCasualties = () => {

    const allCas = [
      ...US_CASUALTIES.map(c=>({...c, group:"US Military"})),
      ...COALITION_CASUALTIES.map(c=>({...c, group:"Coalition"})),
    ];
    const filtered = casFilter==="all" ? allCas : casFilter==="civilian" ? null : allCas.filter(c=>casFilter==="US"?c.nationality==="US":c.nationality!=="US");
    const classColor = {KIA:C.peak, WIA:C.drone, INC:C.textMuted};
    const classLabel = {KIA:"KIA", WIA:"WIA/Wounded", INC:"Incident"};

    // Totals
    const usKIA = US_CASUALTIES.filter(c=>c.class==="KIA").reduce((s,c)=>{
      const n = parseInt((c.name||"").match(/\d+/)?.[0])||1; return s+n;
    },0);
    const coalKIA = COALITION_CASUALTIES.filter(c=>c.class==="KIA" && c.nationality!=="Kuwait").reduce((s,c)=>{const n=parseInt((c.name||"").match(/\d+/)?.[0])||1;return s+n;},0);
    const civDeaths = CIVILIAN_INCIDENTS.reduce((s,c)=>s+(Number(c.deaths)||0),0);

    const cardBg = S_CARD;

    return (
      <div>
        {/* Casualties subtab navigation */}
        <div style={{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap"}}>
          {[{k:"overview",l:"Overview"},{k:"heatmap",l:"Day × Country Heatmap"},{k:"phases",l:"Phases"}].map(t=>(
            <SubTabPill key={t.k} label={t.l} active={casSubTab===t.k} color={C.peak} onClick={()=>setCasSubTab(t.k)}/>
          ))}
        </div>

        {/* Heatmap subtab */}
        {casSubTab === "heatmap" && (
          <div style={{marginBottom:24}}>
            <SectionHeader title="Day × Country Intensity" subtitle="Intercept volume heat map — click any cell · purple strip = casualties that day" color={"#f59e0b"}/>
            {renderTimeline()}
          </div>
        )}

        {/* Summary cards (shown in overview + phases subtabs) */}
        {(casSubTab === "overview" || casSubTab === "phases") && (
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10,marginBottom:20}}>
          {[
            {label:"US Military KIA",value:usKIA+"+",sub:"Across Kuwait, Saudi, Iraq",color:C.peak},
            {label:"Coalition KIA",value:COALITION_CASUALTIES.reduce((s,c) => s + (c.count||1), 0)+"+",sub:COALITION_CASUALTIES.map(c=>c.force||c.location).filter(Boolean).slice(0,3).join(" · "),color:C.ballistic},
            {label:"US/Coalition WIA",value:US_CASUALTIES.filter(c=>c.cause&&/wound|wia|injur/i.test(c.cause+""+(c.notes||""))).reduce((s,c)=>s+(c.count||1),0)+"+",sub:"Across multiple installations",color:C.drone},
            {label:"Civilian deaths",value:civDeaths+"+",sub:"Across "+[...new Set(CIVILIAN_INCIDENTS.map(c=>c.country))].length+" countries",color:C.peak},
            {label:"Nations with losses",value:[...new Set([...US_CASUALTIES,...COALITION_CASUALTIES].map(c=>c.force||c.nationality||c.location||"").filter(Boolean))].length+"",sub:[...new Set([...US_CASUALTIES,...COALITION_CASUALTIES].map(c=>c.force||c.nationality||c.location||"").filter(Boolean))].slice(0,7).join(" · "),color:C.cruise},
          ].map((s,i)=>(
            <div key={i} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:14,borderTop:"2px solid "+s.color}}>
              <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1,textTransform:"uppercase",marginBottom:6}}>{s.label}</div>
              <div style={{fontSize:22,fontWeight:800,color:s.color,fontFamily:"'JetBrains Mono',monospace",lineHeight:1}}>{s.value}</div>
              <div style={{fontSize:FONT.small,color:C.textMuted,marginTop:4}}>{s.sub}</div>
            </div>
          ))}
        </div>
        )}

        {/* Overview subtab: Filter + tables */}
        {casSubTab === "overview" && (<>
        {/* Filter */}
        <div style={{display:"flex",gap:8,marginBottom:14,alignItems:"center",flexWrap:"wrap"}}>
          <span style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>VIEW:</span>
          {[{k:"all",l:"All military"},{k:"US",l:"US only"},{k:"coalition",l:"Coalition"},{k:"civilian",l:"Civilian incidents"}].map(f=>(
            <button key={f.k} onClick={()=>setCasFilter(f.k)} style={{
              padding:"4px 12px",fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",
              background:casFilter===f.k?C.peakBg:"transparent",
              color:casFilter===f.k?C.peak:C.textDim,
              border:"1px solid "+(casFilter===f.k?C.peak+"50":C.border),
              borderRadius:4,cursor:"pointer"
            }}>{f.l}</button>
          ))}
        </div>

        {/* Military casualty table */}
        {casFilter!=="civilian" && filtered && (
          <div style={cardBg}>
            <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:C.peak,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>
              MILITARY CASUALTIES — {filtered.length} ENTRIES
            </div>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:FONT.label}}>
                <thead><tr>
                  {["Day","Date","Name/Unit","Branch","Location","Status","Cause of Loss"].map((h,i)=>(
                    <th key={i} style={{padding:"8px 10px",textAlign:i<2?"center":"left",borderBottom:"2px solid "+C.borderLight,color:C.textDim,fontSize:FONT.badge,fontWeight:700,letterSpacing:1,textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"}}>{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {filtered.slice().reverse().map((inc,idx)=>(
                    <tr key={idx} style={{background:idx%2===0?"transparent":C.surfaceAlt+"40"}}>
                      <td style={{padding:"9px 10px",textAlign:"center",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.label,borderBottom:"1px solid "+C.border}}>{inc.day}</td>
                      <td style={{padding:"9px 10px",textAlign:"center",fontWeight:600,color:C.text,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.label,whiteSpace:"nowrap",borderBottom:"1px solid "+C.border}}>{inc.date}</td>
                      <td style={{padding:"9px 10px",fontWeight:600,color:inc.class==="KIA"?C.peak:C.text,fontSize:FONT.label,borderBottom:"1px solid "+C.border}}>{inc.name}</td>
                      <td style={{padding:"9px 10px",fontSize:FONT.small,borderBottom:"1px solid "+C.border}}>
                        <span style={{padding:"2px 6px",borderRadius:3,background:C.accentBg,color:C.accent,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>{inc.branch}</span>
                      </td>
                      <td style={{padding:"9px 10px",fontSize:FONT.small,color:C.textMuted,borderBottom:"1px solid "+C.border,whiteSpace:"nowrap"}}>{inc.location}</td>
                      <td style={{padding:"9px 10px",borderBottom:"1px solid "+C.border}}>
                        <span style={{fontSize:FONT.small,padding:"2px 7px",borderRadius:3,background:(classColor[inc.class]||C.nr)+"18",color:classColor[inc.class]||C.nr,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>{classLabel[inc.class]}</span>
                      </td>
                      <td style={{padding:"9px 10px",fontSize:FONT.small,color:C.textDim,lineHeight:1.5,borderBottom:"1px solid "+C.border,maxWidth:280}}>{inc.cause}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Civilian incidents */}
        {casFilter==="civilian" && (
          <div style={cardBg}>
            <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:C.peak,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>
              CONFIRMED CIVILIAN CASUALTIES — {CIVILIAN_INCIDENTS.length} INCIDENTS
            </div>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:FONT.label}}>
                <thead><tr>
                  {["Day","Date","Country","Victims","Location","Deaths","Notes"].map((h,i)=>(
                    <th key={i} style={{padding:"8px 10px",textAlign:i<2||i===5?"center":"left",borderBottom:"2px solid "+C.borderLight,color:C.textDim,fontSize:FONT.badge,fontWeight:700,letterSpacing:1,textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"}}>{h}</th>
                  ))}
                </tr></thead>
                <tbody>
                  {CIVILIAN_INCIDENTS.slice().reverse().map((inc,idx)=>(
                    <tr key={idx} style={{background:idx%2===0?"transparent":C.surfaceAlt+"40"}}>
                      <td style={{padding:"9px 10px",textAlign:"center",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.label,borderBottom:"1px solid "+C.border}}>{inc.day}</td>
                      <td style={{padding:"9px 10px",textAlign:"center",fontWeight:600,color:C.text,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.label,whiteSpace:"nowrap",borderBottom:"1px solid "+C.border}}>{inc.date}</td>
                      <td style={{padding:"9px 10px",fontWeight:700,color:C.text,fontSize:FONT.label,borderBottom:"1px solid "+C.border}}>{inc.country}</td>
                      <td style={{padding:"9px 10px",color:C.textMuted,fontSize:FONT.small,borderBottom:"1px solid "+C.border}}>{inc.victims}</td>
                      <td style={{padding:"9px 10px",color:C.textDim,fontSize:FONT.small,borderBottom:"1px solid "+C.border}}>{inc.location}</td>
                      <td style={{padding:"9px 10px",textAlign:"center",fontWeight:800,fontFamily:"'JetBrains Mono',monospace",color:Number(inc.deaths)>0?C.peak:C.drone,borderBottom:"1px solid "+C.border}}>{Number(inc.deaths)>0?inc.deaths:"Inj"}</td>
                      <td style={{padding:"9px 10px",fontSize:FONT.small,color:C.textDim,lineHeight:1.5,borderBottom:"1px solid "+C.border}}>{inc.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        </>)}

        {/* Phase breakdown — mil vs civ (phases subtab) */}
        {(casSubTab === "overview" || casSubTab === "phases") && (<>
        {/* Phase breakdown — mil vs civ */}
        <div style={{...cardBg}}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.textDim,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>MILITARY vs CIVILIAN CASUALTIES BY PHASE</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:12}}>
            {(() => {
              // Compute phase stats dynamically from casualty data
              const allMil = [...US_CASUALTIES, ...COALITION_CASUALTIES];
              const phDef = PHASE_DEFINITIONS.map(p=>({ph:p.name+" ("+p.days+")",lo:p.lo,hi:p.hi,phCol:p.color}));
              return phDef.map(pd => {
                const mils = allMil.filter(c=>c.day>=pd.lo&&c.day<=pd.hi);
                const milKIA = mils.filter(c=>c.class==="KIA").reduce((s,c)=>{const n=Number(c.killed)||(c.name&&c.name.match(/^(\d+)\s/)?parseInt(c.name.match(/^(\d+)\s/)[1]):1);return s+(isNaN(n)?1:n);},0);
                const milWIA = mils.filter(c=>c.class==="WIA").reduce((s,c)=>{const n=Number(c.wounded)||Number(c.count)||(c.name&&c.name.match(/^(\d+)\s/)?parseInt(c.name.match(/^(\d+)\s/)[1]):1);return s+(isNaN(n)?1:n);},0);
                const civs = CIVILIAN_INCIDENTS.filter(c=>c.day>=pd.lo&&c.day<=pd.hi&&!["Iran","Israel","Lebanon"].includes(c.country));
                const civKIA = civs.reduce((s,c)=>s+(Number(c.deaths)||Number(c.killed)||0),0);
                const civInj = civs.reduce((s,c)=>s+(Number(c.wounded)||0),0);
                const notes = mils.filter(c=>c.class==="KIA").map(c=>c.name||c.incident).filter(Boolean).slice(0,3).join(". ");
                return {ph:pd.ph,milKIA,milWIA,civKIA,civInj,note:notes||"No notable incidents",phCol:pd.phCol};
              });
            })().map((p,i)=>(
              <div key={i} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:14,borderTop:"2px solid "+p.phCol}}>
                <div style={{fontSize:FONT.small,fontWeight:700,color:p.phCol,fontFamily:"'JetBrains Mono',monospace",marginBottom:8}}>{p.ph}</div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:8}}>
                  <div>
                    <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>MIL KIA</div>
                    <div style={{fontSize:FONT.h1,fontWeight:800,color:C.peak,fontFamily:"'JetBrains Mono',monospace"}}>{p.milKIA}</div>
                  </div>
                  <div>
                    <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>CIV KIA</div>
                    <div style={{fontSize:FONT.h1,fontWeight:800,color:C.ballistic,fontFamily:"'JetBrains Mono',monospace"}}>{p.civKIA}</div>
                  </div>
                  <div>
                    <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>MIL WIA</div>
                    <div style={{fontSize:FONT.body,fontWeight:700,color:C.drone,fontFamily:"'JetBrains Mono',monospace"}}>{p.milWIA}</div>
                  </div>
                  <div>
                    <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>CIV INJ</div>
                    <div style={{fontSize:FONT.body,fontWeight:700,color:C.cruise,fontFamily:"'JetBrains Mono',monospace"}}>{p.civInj}</div>
                  </div>
                </div>
                <div style={{fontSize:FONT.small,color:C.textDim,lineHeight:1.5}}>{p.note}</div>
              </div>
            ))}
          </div>
          <div style={{padding:10,background:C.surfaceAlt,borderRadius:6,border:"1px solid "+C.border,fontSize:FONT.small,color:C.textDim,lineHeight:1.7}}>
            <span style={{color:C.textMuted,fontWeight:700}}>PATTERN: </span>
            Military casualties are front-loaded in Phase I at discrete high-value targets (Port Shuaiba, Ali Al Salem). Civilian deaths accumulate through Phase II–III via debris, secondary fires, and residential-area leakers — consistent with degrading intercept accuracy. The KC-135 crash in Phase III represents a different casualty mechanism (aerospace incident vs. direct strike).
          </div>
        </div>

        {/* Timeline of deaths */}
        <div style={{...cardBg,background:C.surfaceAlt}}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.textDim,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>CUMULATIVE US KIA OVER TIME</div>
          <div style={{display:"flex",alignItems:"flex-end",gap:3,height:60}}>
            {(() => {
              const sorted = [...US_CASUALTIES].sort((a,b) => a.day - b.day);
              const maxDay = Math.max(warDayRef, sorted.length > 0 ? sorted[sorted.length-1].day : 17);
              const pts = [];
              let cum = 0;
              for (let d = 1; d <= maxDay; d++) {
                cum += sorted.filter(c => c.day === d).length;
                pts.push({day:d, cum, label:"D"+d});
              }
              const maxCum = pts.length > 0 ? pts[pts.length-1].cum : 1;
              return pts.map((d,i)=>(
              <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
                <div style={{fontSize:FONT.tiny,color:C.peak,fontFamily:"'JetBrains Mono',monospace",fontWeight:700,opacity:d.cum!==pts[i-1]?.cum?1:0}}>{d.cum}</div>
                <div style={{width:"100%",background:C.peak,borderRadius:"2px 2px 0 0",height:Math.round((d.cum/Math.max(maxCum,1))*52)+"px",opacity:0.7+(d.cum/Math.max(maxCum,1))*0.3}}/>
                <div style={{fontSize:FONT.tiny,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{d.label}</div>
              </div>
            ))
            })()}
          </div>
          <div style={{fontSize:FONT.small,color:C.textDim,marginTop:8,lineHeight:1.6}}>
            <span style={{color:C.peak,fontWeight:700}}>D1:</span> 2 Navy KIA (Ali Al Salem) ·
            <span style={{color:C.peak,fontWeight:700}}> D2:</span> +6 Army KIA (Port Shuaiba) ·
            <span style={{color:C.peak,fontWeight:700}}> D5:</span> +2 (Melendez + Pennington) ·
            <span style={{color:C.peak,fontWeight:700}}> D13:</span> +6 KC-135 crew (Iraq)
          </div>
        </div>
        </>)}
      </div>
    );
  };

  // ═══════════════════════════════════════════
  // ECONOMICS TAB — Refinery / FM / Hormuz / oil impact
  // ═══════════════════════════════════════════

  const renderEconomics = () => {
    const L = {bg:"#faf9f7",surface:"#ffffff",surfaceAlt:"#f0eeea",border:"#d4d0cb",borderLight:"#e2ded9",text:"#111827",textMuted:"#374151",textDim:"#4b5563",accent:"#1e3a5f",peak:"#991b1b",reduction:"#166534",drone:"#92400e",ballistic:"#991b1b",cruise:"#1e3a5f",sea:"#115e59"};
    // Light-mode font scale: larger than dark-mode FONT for readability on light bg
    const LF = { body:15, table:13, label:13, h1:22, h2:18, h3:15, small:11, badge:10, tiny:9, nav:13 };
    const cardBg = {background:L.surface,borderRadius:8,border:"1px solid "+L.border,padding:"16px 14px",marginBottom:14};
    const sevCol = {1:L.reduction, 2:L.drone, 3:L.peak};
    const totalBblOffline = 922 + 550 + 267;

    return (
      <div style={{background:L.bg,color:L.text,padding:16,borderRadius:8}}>
        {/* ── Inline subtab navigation (no label) ── */}
        <div style={{marginBottom:20,paddingBottom:16,borderBottom:"2px solid "+L.sea+"30"}}>
          <BriefingTabbed briefings={BRIEF_ECON} color={L.sea} activeKey={econSubTab} onSelect={setEconSubTab} lightMode={true}/>
          <div style={{fontSize:LF.small,color:L.textDim,fontFamily:"'JetBrains Mono',monospace",marginTop:8}}>Refinery shutdowns · Force Majeure · Hormuz · oil price impact</div>
          <div style={{fontSize:LF.badge,fontFamily:"'JetBrains Mono',monospace",color:L.textDim,marginTop:6,opacity:0.8}}>
            {"Data through " + (OIL_PRICE_TIMELINE.length > 0 ? OIL_PRICE_TIMELINE[OIL_PRICE_TIMELINE.length-1].date : "—") + " · " + REFINERY_EVENTS.length + " refinery events · " + FORCE_MAJEURE.length + " FM declarations · " + HORMUZ_ANALYST.length + " Hormuz assessments"}
          </div>
        </div>

        <>
        {/* Summary headline cards */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:10,marginBottom:20}}>
          {[
            {label:"Refinery capacity offline",value:totalBblOffline.toLocaleString()+"k",sub:"bbl/day across UAE+Saudi+Bahrain",color:L.peak},
            {label:"Force Majeure declarations",value:FORCE_MAJEURE.length+"",sub:FORCE_MAJEURE.map(f=>f.entity).join(" · "),color:L.ballistic},
            {label:"Bunkering disruption",value:"15%",sub:"Global ship refueling affected (Fujairah)",color:L.drone},
            {label:"LNG contracts frozen",value:"100%",sub:"QatarEnergy FM on all gas contracts",color:L.cruise},
            {label:"Est. oil price impact",value:"$8–50",sub:"Per barrel shock range (Hormuz risk)",color:L.sea},
          ].map((s,i)=>(
            <div key={i} style={{background:L.surface,border:"1px solid "+L.border,borderRadius:8,padding:14,borderTop:"2px solid "+s.color}}>
              <div style={{fontSize:LF.small,color:L.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1,textTransform:"uppercase",marginBottom:6}}>{s.label}</div>
              <div style={{fontSize:LF.h1,fontWeight:800,color:s.color,fontFamily:"'JetBrains Mono',monospace",lineHeight:1}}>{s.value}</div>
              <div style={{fontSize:LF.small,color:L.textMuted,marginTop:4}}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Refinery shutdown log */}
        <div style={cardBg}>
          <div style={{fontSize:LF.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:L.peak,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>
            ENERGY INFRASTRUCTURE STRIKES ({REFINERY_EVENTS.length} incidents)
          </div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:LF.label}}>
              <thead><tr>
                {["Day","Date","Facility","Country","Capacity","Status","Notes"].map((h,i)=>(
                  <th key={i} style={{padding:"8px 10px",textAlign:i<2?"center":"left",borderBottom:"2px solid "+L.borderLight,color:L.textDim,fontSize:LF.badge,fontWeight:700,letterSpacing:1,textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"}}>{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {REFINERY_EVENTS.slice().reverse().map((r,idx)=>{
                  const statCol = {Shutdown:L.peak,Repeated:L.peak,"Force Majeure":L.ballistic,Suspended:L.drone,Fire:L.drone}[r.status]||L.textMuted;
                  return (
                    <tr key={idx} style={{background:idx%2===0?"transparent":L.surfaceAlt}}>
                      <td style={{padding:"9px 10px",textAlign:"center",color:L.textMuted,fontFamily:"'JetBrains Mono',monospace",fontSize:LF.label,borderBottom:"1px solid "+L.border}}>{r.day}</td>
                      <td style={{padding:"9px 10px",textAlign:"center",fontWeight:600,color:L.text,fontFamily:"'JetBrains Mono',monospace",fontSize:LF.label,whiteSpace:"nowrap",borderBottom:"1px solid "+L.border}}>{r.date}</td>
                      <td style={{padding:"9px 10px",fontWeight:700,color:L.text,fontSize:LF.label,borderBottom:"1px solid "+L.border}}>
                        {r.forceM && <span style={{fontSize:LF.small,color:L.peak,fontFamily:"'JetBrains Mono',monospace",marginRight:6}}>FM</span>}
                        {r.facility}
                      </td>
                      <td style={{padding:"9px 10px",fontSize:LF.small,color:L.textMuted,borderBottom:"1px solid "+L.border}}>{r.country}</td>
                      <td style={{padding:"9px 10px",fontWeight:700,color:r.capacity?L.drone:L.textDim,fontFamily:"'JetBrains Mono',monospace",fontSize:LF.label,whiteSpace:"nowrap",borderBottom:"1px solid "+L.border}}>{r.capacity?r.capacity.toLocaleString()+" "+r.unit:r.unit}</td>
                      <td style={{padding:"9px 10px",borderBottom:"1px solid "+L.border}}>
                        <span style={{fontSize:LF.small,padding:"2px 7px",borderRadius:3,background:statCol+"18",color:statCol,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>{r.status}</span>
                      </td>
                      <td style={{padding:"9px 10px",fontSize:LF.small,color:L.textDim,lineHeight:1.5,borderBottom:"1px solid "+L.border,maxWidth:280}}>{r.desc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Force Majeure tracker */}
        <div style={cardBg}>
          <div style={{fontSize:LF.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:L.ballistic,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>⚠ FORCE MAJEURE DECLARATIONS</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10}}>
            {FORCE_MAJEURE.map((fm,i)=>(
              <div key={i} style={{background:L.surface,border:"1px solid "+L.ballistic+"30",borderRadius:8,padding:14,borderLeft:"3px solid "+L.ballistic}}>
                <div style={{fontSize:LF.table,fontWeight:800,color:L.text,marginBottom:4}}>{fm.entity}</div>
                <div style={{fontSize:LF.small,color:L.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:6}}>{fm.country} · Day {fm.day} · {fm.date}</div>
                <div style={{fontSize:LF.small,color:L.drone,fontWeight:600,marginBottom:4}}>{fm.sector}</div>
                <div style={{fontSize:LF.small,color:L.peak}}>{fm.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping / aviation disruption log */}
        <div style={cardBg}>
          <div style={{fontSize:LF.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:L.sea,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>
            SHIPPING & AVIATION DISRUPTIONS
          </div>
          {SHIPPING_EVENTS.map((ev,idx)=>(
            <div key={idx} style={{display:"flex",gap:12,padding:"10px 0",borderBottom:idx<SHIPPING_EVENTS.length-1?"1px solid "+L.border:"none"}}>
              <div style={{flexShrink:0,width:36,textAlign:"center"}}>
                <div style={{fontSize:LF.small,fontWeight:700,color:L.textDim,fontFamily:"'JetBrains Mono',monospace"}}>D{ev.day}</div>
                <div style={{fontSize:LF.small,color:L.textDim,fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"}}>{ev.date}</div>
              </div>
              <div style={{width:6,flexShrink:0,display:"flex",alignItems:"center"}}>
                <div style={{width:6,height:6,borderRadius:"50%",background:sevCol[ev.severity]}}/>
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:LF.label,fontWeight:700,color:L.text,marginBottom:2}}>{ev.event}</div>
                <div style={{fontSize:LF.small,color:L.textMuted,lineHeight:1.5}}>{ev.impact}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Hormuz economic context */}
        <div style={{...cardBg,background:L.surfaceAlt,borderLeft:"3px solid "+L.sea}}>
          <div style={{fontSize:LF.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:L.sea,marginBottom:10,fontFamily:"'JetBrains Mono',monospace"}}>📊 STRAIT OF HORMUZ — ECONOMIC CONTEXT</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,fontSize:LF.label,color:L.textMuted,lineHeight:1.8}}>
            <div>
              <div style={{color:L.text,fontWeight:700,marginBottom:6}}>Throughput</div>
              <div>20–33% of world daily oil transit</div>
              <div>~17M barrels/day in normal conditions</div>
              <div>~3.5 bcf/day of LNG (mainly Qatar)</div>
              <div>60–70% of Asia-Pacific oil supply</div>
            </div>
            <div>
              <div style={{color:L.text,fontWeight:700,marginBottom:6}}>Price impact scenarios</div>
              <div><span style={{color:L.drone,fontWeight:700}}>Partial disruption:</span> +$8–15/barrel</div>
              <div><span style={{color:L.peak,fontWeight:700}}>Sustained threat:</span> +$30–50/barrel</div>
              <div><span style={{color:L.ballistic,fontWeight:700}}>Full closure (days):</span> +$50–130/barrel</div>
              <div><span style={{color:L.textDim}}>Source: IMF, CSIS, EIA estimates</span></div>
            </div>
          </div>
          <div style={{marginTop:12,fontSize:LF.small,color:L.textDim,lineHeight:1.6,borderTop:"1px solid "+L.border,paddingTop:10}}>
            <span style={{color:L.textMuted,fontWeight:700}}>Market assessment (Mar 20):</span> Strait remains selectively closed to Western-flag tonnage. Ras Laffan struck Mar 18 — second QatarEnergy FM now in force. Iran's ability to close it temporarily (days–weeks via mines, speedboats, shore missiles) is confirmed. Historical precedent: never fully closed even in 1980s Tanker War. Iranian exports also transit Hormuz — closure is self-harming. US 5th Fleet (even degraded) maintains deterrence. Sustained closure unlikely; periodic harassment probable.
          </div>
        </div>
        </>

      </div>
    );
  };

  // ═══════════════════════════════════════════
  // MARKETS TAB — Oil prices, Shipping, Insurance, Equity, CDS
  // ═══════════════════════════════════════════

  const renderMarkets = () => {
    const L = {bg:"#faf9f7",surface:"#ffffff",surfaceAlt:"#f3f1ed",border:"#ddd9d4",borderLight:"#e8e4df",text:"#1a1a2e",textMuted:"#3d4551",textDim:"#4b5563",accent:"#1e3a5f",peak:"#991b1b",reduction:"#166534",drone:"#92400e",ballistic:"#991b1b",cruise:"#1e3a5f",sea:"#115e59"};
    const LF = { body:15, table:13, label:13, h1:22, h2:18, h3:15, small:11, badge:10, tiny:9, nav:13 };
    const cardBg = {background:L.surface,borderRadius:8,border:"1px solid "+L.border,padding:"16px 14px",marginBottom:14};
    const mktCyan = "#115e59";
    const thStyle = {padding:"8px 10px",textAlign:"left",borderBottom:"2px solid "+L.borderLight,color:L.textDim,fontSize:LF.badge,fontWeight:700,letterSpacing:1,textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"};
    const tdStyle = {padding:"9px 10px",fontSize:LF.label,borderBottom:"1px solid "+L.border,color:L.text};

    // Sparkline for oil price (guarded: empty arrays produce empty SVG)
    const brentVals = OIL_PRICE_TIMELINE.map(d=>parseFloat(String(d.brent).replace(/[$,]/g,""))||0);
    const bMax = brentVals.length > 0 ? Math.max(...brentVals) : 0;
    const bMin = brentVals.length > 0 ? Math.min(...brentVals) : 0;
    const bRange = bMax - bMin || 1;
    const sparkW = 400, sparkH = 60;
    const sparkPts = brentVals.map((v,i) => {
      const x = (i/(brentVals.length-1))*sparkW;
      const y = sparkH - ((v-bMin)/bRange)*(sparkH-8) - 4;
      return {x,y,v};
    });
    const sparkLine = sparkPts.map(p=>p.x+","+p.y).join(" ");

    return (
      <div style={{background:L.bg,color:L.text,padding:16,borderRadius:8}}>
        {/* ── Inline subtab navigation (no label) ── */}
        <div style={{marginBottom:20,paddingBottom:16,borderBottom:"2px solid "+mktCyan+"30"}}>
          <BriefingTabbed briefings={BRIEF_MARKETS} color={mktCyan} activeKey={mktSubTab} onSelect={setMktSubTab} lightMode={true}/>
          <div style={{fontSize:LF.small,color:L.textDim,fontFamily:"'JetBrains Mono',monospace",marginTop:8}}>Brent crude · shipping insurance · GCC equities · CDS spreads</div>
          <div style={{fontSize:LF.badge,fontFamily:"'JetBrains Mono',monospace",color:L.textDim,marginTop:6,opacity:0.8}}>
            {"Data through " + (OIL_PRICE_TIMELINE.length > 0 ? OIL_PRICE_TIMELINE[OIL_PRICE_TIMELINE.length-1].date : "—") + " · " + VESSEL_ATTACKS.length + " vessel attacks · " + GCC_EQUITY.length + " equity markets · " + GCC_CDS.length + " CDS entries"}
          </div>
        </div>

        <>
        {/* Summary headline cards — computed from data arrays */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10,marginBottom:20}}>
          {(() => {
            // C-09/C-10/C-11: Guard all [0] and [length-1] accesses with length checks
            if (OIL_PRICE_TIMELINE.length === 0) return [{label:"No oil data",value:"—",sub:"Awaiting data",color:L.textDim}];
            const bPeak = Math.max(...OIL_PRICE_TIMELINE.map(d=>d.brent));
            const bLatest = OIL_PRICE_TIMELINE[OIL_PRICE_TIMELINE.length-1];
            const bPre = OIL_PRICE_TIMELINE[0]?.brent ?? 0;
            const bPeakPct = bPre > 0 ? ((bPeak/bPre-1)*100).toFixed(0) : "0";
            const bLatestPct = bPre > 0 ? (((bLatest?.brent ?? 0)/bPre-1)*100).toFixed(0) : "0";
            const lastShip = SHIPPING_INSURANCE.length > 0 ? SHIPPING_INSURANCE[SHIPPING_INSURANCE.length-1] : {};
            const firstShip = SHIPPING_INSURANCE.length > 0 ? SHIPPING_INSURANCE[0] : {};
            const firstHormuz = parseInt(String(firstShip.hormuz || "135").replace(/[^\d]/g,""),10)||135;
            const lastHormuz = parseInt(String(lastShip.hormuz || "26").replace(/[^\d]/g,""),10)||26;
            const hormuzDrop = Math.round((1-lastHormuz/firstHormuz)*100);
            const bkFirst = BUNKER_PRICES.length > 0 ? BUNKER_PRICES[0] : {};
            const bkLast = BUNKER_PRICES.length > 0 ? BUNKER_PRICES[BUNKER_PRICES.length-1] : {};
            const vlsfoPre = parseFloat(String(bkFirst.vlsfo || "508").replace(/[^0-9.]/g,""))||508;
            const vlsfoLast = parseFloat(String((bkLast.vlsfo || bkFirst.vlsfo || "508")).replace(/[^0-9.]/g,""))||vlsfoPre;
            const vlsfoPct = Math.round((vlsfoLast/vlsfoPre-1)*100);
            return [
              {label:"Brent peak",value:"$"+bPeak.toFixed(2),sub:"Intraday (+"+bPeakPct+"% from pre-war $"+(bPre||0).toFixed(2)+")",color:L.peak},
              {label:"Brent latest",value:"$"+(bLatest?.brent ?? 0).toFixed(2),sub:(bLatest?.date || "—")+" (+"+bLatestPct+"% from pre-war)",color:mktCyan},
              {label:"JKM LNG spike",value:"+150%",sub:"$10-12 → $25.39/MMBtu (Mar 3)",color:L.drone},
              {label:"War-risk premium",value:lastShip.warRisk || "—",sub:"Hull value per transit (from "+(firstShip.warRisk || "—")+")",color:L.ballistic},
              {label:"Hormuz transits",value:"-"+hormuzDrop+"%",sub:firstHormuz+" → "+lastHormuz+" per day",color:L.cruise},
              {label:"VLSFO bunker",value:"+"+vlsfoPct+"%",sub:"$"+vlsfoPre+" → $"+vlsfoLast+"/mt (Fujairah)",color:L.sea},
            ];
          })().map((s,i)=>(
            <div key={i} style={{background:L.surface,border:"1px solid "+L.border,borderRadius:8,padding:14,borderTop:"2px solid "+s.color}}>
              <div style={{fontSize:LF.small,color:L.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1,textTransform:"uppercase",marginBottom:6}}>{s.label}</div>
              <div style={{fontSize:LF.h1,fontWeight:800,color:s.color,fontFamily:"'JetBrains Mono',monospace",lineHeight:1}}>{s.value}</div>
              <div style={{fontSize:LF.small,color:L.textMuted,marginTop:4}}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* A) Oil Price Timeline */}
        <div style={cardBg}>
          <div style={{fontSize:LF.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:mktCyan,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>
            {"◆ BRENT CRUDE TRAJECTORY — PRE-WAR $"+(OIL_PRICE_TIMELINE.length > 0 ? OIL_PRICE_TIMELINE[0].brent?.toFixed(2) : "—")+" → $"+(OIL_PRICE_TIMELINE.length > 0 ? OIL_PRICE_TIMELINE[OIL_PRICE_TIMELINE.length-1].brent?.toFixed(2) : "—")+" ("+(OIL_PRICE_TIMELINE.length > 0 ? OIL_PRICE_TIMELINE[OIL_PRICE_TIMELINE.length-1].date : "—")+")"}
          </div>
          {/* Mini sparkline */}
          <div style={{marginBottom:16,padding:"12px 16px",background:L.surfaceAlt,borderRadius:6,border:"1px solid "+L.border,overflowX:"auto"}}>
            <svg width="100%" viewBox={"0 0 "+sparkW+" "+(sparkH+16)} preserveAspectRatio="xMidYMid meet" style={{display:"block",margin:"0 auto",maxWidth:"100%",height:"auto"}}>
              <polyline points={sparkLine} fill="none" stroke={mktCyan} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" opacity={0.9}/>
              {sparkPts.map((p,i)=>(
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r={i===0||i===sparkPts.length-1||p.v===bMax?3.5:2} fill={p.v===bMax?L.peak:mktCyan} opacity={p.v===bMax?1:0.7}/>
                  {(i===0||i===sparkPts.length-1||p.v===bMax) && <text x={p.x} y={p.y-8} fill={p.v===bMax?L.peak:L.textMuted} fontSize={8} fontFamily="'JetBrains Mono',monospace" textAnchor="middle">${p.v}</text>}
                </g>
              ))}
            </svg>
          </div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:LF.label}}>
              <thead><tr>
                {["Date","Brent ($/bbl)","WTI ($/bbl)","Key Event","Cum. Δ"].map((h,i)=>(
                  <th key={i} style={{...thStyle,textAlign:i<3?"center":"left"}}>{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {(()=>{const brentMax=Math.max(...OIL_PRICE_TIMELINE.map(d=>parseFloat(d.brent)||0));return OIL_PRICE_TIMELINE.slice().reverse().map((r,idx)=>{
                  const bVal=parseFloat(String(r.brent).replace(/[$,]/g,""))||0;
                  const wVal=parseFloat(String(r.wti||0).replace(/[$,]/g,""))||0;
                  const isPeak = bVal >= brentMax * 0.95;
                  return (
                    <tr key={idx} style={{background:isPeak?"#fee2e2":idx%2===0?"transparent":L.surfaceAlt}}>
                      <td style={{...tdStyle,textAlign:"center",fontWeight:600,color:L.text,fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"}}>{r.date}</td>
                      <td style={{...tdStyle,textAlign:"center",fontWeight:700,color:isPeak?L.peak:mktCyan,fontFamily:"'JetBrains Mono',monospace"}}>${bVal.toFixed(2)}</td>
                      <td style={{...tdStyle,textAlign:"center",color:L.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>${wVal.toFixed(2)}</td>
                      <td style={{...tdStyle,color:L.textMuted,maxWidth:300}}>{r.event}</td>
                      <td style={{...tdStyle,fontWeight:700,color:r.cumChg?((parseFloat(r.cumChg)>40)?L.peak:(parseFloat(r.cumChg)>20)?L.drone:L.sea):L.textDim,fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"}}>{r.cumChg||<span title="No incidents reported">—</span>}</td>
                    </tr>
                  );
                });})()}
              </tbody>
            </table>
          </div>
          {/* Sources attribution removed per redesign — see Sources tab */}
        </div>

        {/* B) Per-Event Market Response */}
        <div style={cardBg}>
          <div style={{fontSize:LF.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:L.drone,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>
            PER-EVENT MARKET RESPONSE ({MARKET_EVENT_RESPONSE.length} infrastructure strikes)
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:12}}>
            {MARKET_EVENT_RESPONSE.map((ev,i)=>{
              return (
                <div key={i} style={{background:L.surface,border:"1px solid "+L.border,borderRadius:8,padding:14,borderLeft:"3px solid "+mktCyan}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                    <div>
                      <div style={{fontSize:LF.table,fontWeight:800,color:L.text,marginBottom:2}}>{ev.event}</div>
                      <div style={{fontSize:LF.small,color:L.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{ev.date} · {ev.facility}</div>
                    </div>
                    <ConfBadge conf={ev.conf}/>
                  </div>
                  <div style={{fontSize:LF.small,color:mktCyan,fontWeight:700,marginBottom:4,fontFamily:"'JetBrains Mono',monospace"}}>{ev.commodity}</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,fontSize:LF.small,marginBottom:6}}>
                    <div><span style={{color:L.textDim}}>Pre:</span> <span style={{color:L.textMuted,fontWeight:600}}>{ev.pre}</span></div>
                    <div><span style={{color:L.textDim}}>Post:</span> <span style={{color:L.text,fontWeight:600}}>{ev.post}</span></div>
                  </div>
                  <div style={{fontSize:LF.label,fontWeight:800,color:L.peak,fontFamily:"'JetBrains Mono',monospace",marginBottom:6}}>{ev.change}</div>
                  <div style={{fontSize:LF.small,color:L.textDim,lineHeight:1.5}}>{ev.note}</div>
                  <div style={{fontSize:LF.small,color:L.textDim,marginTop:6,fontFamily:"'JetBrains Mono',monospace"}}>Source: {ev.source}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* C) Shipping & Insurance */}
        <div style={cardBg}>
          <div style={{fontSize:LF.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:L.sea,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>
            SHIPPING & INSURANCE — WAR-RISK PREMIUM ESCALATION
          </div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:LF.label}}>
              <thead><tr>
                {["Date","Phase","War-Risk AP","VLCC Rates","VLSFO","Hormuz Transits","Notes"].map((h,i)=>(
                  <th key={i} style={thStyle}>{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {SHIPPING_INSURANCE.slice().reverse().map((r,idx)=>{
                  const isLast = idx === SHIPPING_INSURANCE.length-1;
                  return (
                    <tr key={idx} style={{background:isLast?"#dbeafe":idx%2===0?"transparent":L.surfaceAlt}}>
                      <td style={{...tdStyle,fontWeight:600,color:L.text,fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"}}>{r.date}</td>
                      <td style={{...tdStyle,color:L.textMuted,fontWeight:600}}>{r.label}</td>
                      <td style={{...tdStyle,fontWeight:700,color:L.peak,fontFamily:"'JetBrains Mono',monospace"}}>{r.warRisk}</td>
                      <td style={{...tdStyle,fontWeight:600,color:L.drone,fontFamily:"'JetBrains Mono',monospace"}}>{r.vlcc}</td>
                      <td style={{...tdStyle,fontWeight:600,color:mktCyan,fontFamily:"'JetBrains Mono',monospace"}}>{r.vlsfo}</td>
                      <td style={{...tdStyle,fontWeight:600,color:L.cruise,fontFamily:"'JetBrains Mono',monospace"}}>{r.hormuz}</td>
                      <td style={{...tdStyle,color:L.textDim,fontSize:LF.small,maxWidth:200}}>{r.note}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{fontSize:LF.small,color:L.textDim,marginTop:10,lineHeight:1.5}}>Sources: Lloyd's List, Insurance Journal, Reuters, Marsh/Mortimer estimates. VLCC = Very Large Crude Carrier (WorldScale). VLSFO = Very Low Sulfur Fuel Oil.</div>
        </div>

        {/* D) GCC Equity & Credit */}
        <div style={cardBg}>
          <div style={{fontSize:LF.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:L.accent,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>
            GCC EQUITY MARKETS
          </div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:LF.label}}>
              <thead><tr>
                {["Market","Pre-War","War Low","Peak Drop","Mar 16","Net Δ","Notes"].map((h,i)=>(
                  <th key={i} style={{...thStyle,textAlign:i>=1&&i<=5?"center":"left"}}>{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {GCC_EQUITY.map((r,idx)=>{
                  const dropPct = parseFloat(r.peakDrop);
                  const dropCol = dropPct<=-15?L.peak:dropPct<=-10?L.ballistic:L.drone;
                  return (
                    <tr key={idx} style={{background:idx%2===0?"transparent":L.surfaceAlt}}>
                      <td style={{...tdStyle,fontWeight:700,color:L.text}}>{r.market}</td>
                      <td style={{...tdStyle,textAlign:"center",color:L.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>{typeof r.pre==="number"?r.pre.toLocaleString():(r.pre||"—")}</td>
                      <td style={{...tdStyle,textAlign:"center",color:L.peak,fontFamily:"'JetBrains Mono',monospace",fontWeight:600}}>{typeof r.low==="number"?r.low.toLocaleString():(r.low||"—")}</td>
                      <td style={{...tdStyle,textAlign:"center",fontWeight:700,color:dropCol,fontFamily:"'JetBrains Mono',monospace"}}>{r.peakDrop||"—"}</td>
                      <td style={{...tdStyle,textAlign:"center",color:L.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>{typeof r.mar16==="number"?r.mar16.toLocaleString():(r.mar16||"—")}</td>
                      <td style={{...tdStyle,textAlign:"center",fontWeight:700,color:r.netChg==="0.0%"?L.reduction:dropCol,fontFamily:"'JetBrains Mono',monospace"}}>{r.netChg}</td>
                      <td style={{...tdStyle,color:L.textDim,fontSize:LF.small,maxWidth:200}}>{r.note}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* CDS spreads */}
          <div style={{marginTop:20}}>
            <div style={{fontSize:LF.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:L.ballistic,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>
              SOVEREIGN CDS SPREADS (5Y)
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:10}}>
              {GCC_CDS.map((c,i)=>(
                <div key={i} style={{background:L.surface,border:"1px solid "+L.border,borderRadius:8,padding:14,borderLeft:"3px solid "+L.ballistic}}>
                  <div style={{fontSize:LF.table,fontWeight:800,color:L.text,marginBottom:4}}>{c.sovereign}</div>
                  <div style={{display:"flex",gap:8,alignItems:"baseline",marginBottom:4}}>
                    <span style={{fontSize:LF.small,color:L.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{c.pre}bp</span>
                    <span style={{fontSize:LF.small,color:L.textDim}}>→</span>
                    <span style={{fontSize:LF.body,fontWeight:800,color:L.peak,fontFamily:"'JetBrains Mono',monospace"}}>{c.post}bp</span>
                  </div>
                  <div style={{fontSize:LF.label,fontWeight:700,color:L.drone,fontFamily:"'JetBrains Mono',monospace"}}>{c.change}</div>
                  <div style={{fontSize:LF.small,color:L.textDim,marginTop:4}}>{c.note}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{fontSize:LF.small,color:L.textDim,marginTop:10,lineHeight:1.5}}>Sources: House of Saud analysis, Bloomberg, Gulf exchange data. CDS in basis points.</div>
        </div>

        {/* E) Hormuz Risk Premium */}
        <div style={{...cardBg,background:L.surfaceAlt,borderLeft:"3px solid "+mktCyan}}>
          <div style={{fontSize:LF.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:mktCyan,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>📊 HORMUZ RISK PREMIUM — ANALYST ESTIMATES</div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:LF.label}}>
              <thead><tr>
                {["Date","Analyst / Bank","Risk Premium","Forecast / Context","Source"].map((h,i)=>(
                  <th key={i} style={thStyle}>{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {HORMUZ_ANALYST.slice().reverse().map((r,idx)=>(
                  <tr key={idx} style={{background:idx%2===0?"transparent":L.surfaceAlt}}>
                    <td style={{...tdStyle,fontWeight:600,color:L.text,fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"}}>{r.date}</td>
                    <td style={{...tdStyle,fontWeight:700,color:L.text}}>{r.analyst}</td>
                    <td style={{...tdStyle,fontWeight:700,color:mktCyan,fontFamily:"'JetBrains Mono',monospace"}}>{r.premium}</td>
                    <td style={{...tdStyle,color:L.textMuted,maxWidth:260}}>{r.forecast}</td>
                    <td style={{...tdStyle,color:L.textDim,fontSize:LF.small,fontFamily:"'JetBrains Mono',monospace"}}>{r.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{marginTop:12,fontSize:LF.small,color:L.textDim,lineHeight:1.6,borderTop:"1px solid "+L.border,paddingTop:10}}>
            <span style={{color:L.textMuted,fontWeight:700}}>Consensus:</span> Goldman Sachs's $18/bbl (Mar 2) and Energy Politics' $27–30/bbl (Mar 14) bracket the observable risk premium. EIA Q2 Brent ~$91 vs pre-war strip $73–76 implies a sustained Hormuz premium of ~$15–25/bbl.
          </div>
        </div>

        {/* Bunker prices */}
        <div style={{background:L.surface,border:"1px solid "+L.border,borderRadius:8,padding:20,marginBottom:16}}>
          <div style={{fontSize:LF.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:L.sea,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>FUJAIRAH BUNKER PRICES — DAILY (Ship & Bunker)</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:12}}>
            {(() => {
              const bp = BUNKER_PRICES;
              if (bp.length === 0) return [{l:"No bunker data",v:"—",s:"Awaiting data",col:L.textDim}];
              const pre = bp[0];
              const peakHsfo = Math.max(...bp.map(d=>d.hsfo||0));
              const peakMgo = Math.max(...bp.map(d=>d.mgo||0));
              const latestVlsfo = (bp[bp.length-1].vlsfo) || Math.max(...bp.map(d=>d.vlsfo||0));
              const pctV = (pre.vlsfo||1) > 0 ? Math.round((latestVlsfo/(pre.vlsfo||1)-1)*100) : 0;
              const pctH = (pre.hsfo||1) > 0 ? Math.round((peakHsfo/(pre.hsfo||1)-1)*100) : 0;
              const pctM = (pre.mgo||1) > 0 ? Math.round((peakMgo/(pre.mgo||1)-1)*100) : 0;
              return [
                {l:"VLSFO",v:"$"+(pre.vlsfo||0)+"→$"+latestVlsfo.toLocaleString()+"/mt",s:"+"+pctV+"%",col:L.sea},
                {l:"HSFO",v:"$"+(pre.hsfo||0)+"→$"+peakHsfo.toLocaleString()+"/mt",s:"+"+pctH+"% peak",col:L.drone},
                {l:"MGO",v:"$"+(pre.mgo||0)+"→$"+peakMgo.toLocaleString()+"/mt",s:"+"+pctM+"% peak",col:L.cruise},
              ];
            })().map((s,i)=>(
              <div key={i} style={{background:L.surfaceAlt,border:"1px solid "+L.border,borderRadius:6,padding:"8px 12px"}}>
                <div style={{fontSize:LF.small,color:L.textDim,fontFamily:"'JetBrains Mono',monospace",textTransform:"uppercase",marginBottom:3}}>{s.l}</div>
                <div style={{fontSize:LF.body,fontWeight:700,color:s.col,fontFamily:"'JetBrains Mono',monospace"}}>{s.v}</div>
                <div style={{fontSize:LF.small,color:L.textMuted,marginTop:2}}>{s.s}</div>
              </div>
            ))}
          </div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:LF.small}}>
              <thead><tr>{["Date","VLSFO","HSFO","MGO","Note"].map((h,i)=>(
                <th key={i} style={{padding:"5px 8px",textAlign:i>0&&i<4?"center":"left",borderBottom:"2px solid "+L.borderLight,color:L.textDim,fontSize:LF.badge,fontWeight:700,letterSpacing:1,textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace"}}>{h}</th>
              ))}</tr></thead>
              <tbody>{BUNKER_PRICES.slice().reverse().map((r,i)=>{
                const bpBase = BUNKER_PRICES.length > 0 ? (BUNKER_PRICES[0].vlsfo||700) : 700;
                return (
                <tr key={i} style={{background:i===BUNKER_PRICES.length-1&&BUNKER_PRICES[0]?L.surfaceAlt:(typeof r.vlsfo==="number"?r.vlsfo:0)>=bpBase*1.3?"rgba(13,115,119,0.06)":"transparent"}}>
                  <td style={{padding:"5px 8px",color:L.text,fontFamily:"'JetBrains Mono',monospace",fontSize:LF.small,borderBottom:"1px solid "+L.border}}>{r.date}{i===BUNKER_PRICES.length-1?" (pre-war)":""}</td>
                  <td style={{padding:"5px 8px",textAlign:"center",color:(typeof r.vlsfo==="number"?r.vlsfo:0)>=bpBase*1.3?L.sea:L.text,fontFamily:"'JetBrains Mono',monospace",fontSize:LF.small,fontWeight:(typeof r.vlsfo==="number"?r.vlsfo:0)>=bpBase*1.3?700:400,borderBottom:"1px solid "+L.border}}>{typeof r.vlsfo==="number"?"$"+r.vlsfo.toFixed(2):r.vlsfo||"—"}</td>
                  <td style={{padding:"5px 8px",textAlign:"center",color:L.textMuted,fontFamily:"'JetBrains Mono',monospace",fontSize:LF.small,borderBottom:"1px solid "+L.border}}>{typeof r.hsfo==="number"?"$"+r.hsfo.toFixed(2):r.hsfo||"—"}</td>
                  <td style={{padding:"5px 8px",textAlign:"center",color:L.textMuted,fontFamily:"'JetBrains Mono',monospace",fontSize:LF.small,borderBottom:"1px solid "+L.border}}>{typeof r.mgo==="number"?"$"+r.mgo.toFixed(2):r.mgo||"—"}</td>
                  <td style={{padding:"5px 8px",color:L.textDim,fontSize:LF.small,borderBottom:"1px solid "+L.border}}>{r.note}</td>
                </tr>
              );})}</tbody>
            </table>
          </div>
          <div style={{fontSize:LF.small,color:L.textDim,marginTop:6,fontFamily:"'JetBrains Mono',monospace"}}>Fujairah VLSFO flipped from -$15/mt discount to +$30/mt premium vs Singapore by Mar 3. Sources: Ship & Bunker; Scribd/Refinitiv.</div>
        </div>

        {/* Insurance events */}
        <div style={{background:L.surface,border:"1px solid "+L.border,borderRadius:8,padding:20,marginBottom:16}}>
          <div style={{fontSize:LF.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:L.cruise,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>INSURANCE MARKET</div>
          {INSURANCE_EVENTS.slice().reverse().map((ev,i)=>(
            <div key={i} style={{display:"flex",gap:12,padding:"8px 0",borderBottom:i<INSURANCE_EVENTS.length-1?"1px solid "+L.border:"none"}}>
              <div style={{flexShrink:0,minWidth:44,fontSize:LF.small,color:L.textDim,fontFamily:"'JetBrains Mono',monospace",paddingTop:1}}>{ev.date}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:LF.table,fontWeight:600,color:L.text,marginBottom:2}}>{ev.event}</div>
                <div style={{fontSize:LF.label,color:L.textMuted,lineHeight:1.5}}>{ev.detail}</div>
                <div style={{fontSize:LF.small,color:L.textDim,marginTop:2,fontFamily:"'JetBrains Mono',monospace"}}>Source: {ev.source}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Vessel attacks */}
        <div style={{background:L.surface,border:"1px solid "+L.border,borderRadius:8,padding:20,marginBottom:16}}>
          <div style={{fontSize:LF.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:L.ballistic,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>VESSEL ATTACKS — {VESSEL_ATTACKS.length} CONFIRMED Mar 1–17</div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:LF.small}}>
              <thead><tr>{["Date","Vessel","Flag","Type","Location","KIA","Outcome"].map((h,i)=>(
                <th key={i} style={{padding:"5px 8px",textAlign:"left",borderBottom:"2px solid "+L.borderLight,color:L.textDim,fontSize:LF.badge,fontWeight:700,letterSpacing:1,textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"}}>{h}</th>
              ))}</tr></thead>
              <tbody>{VESSEL_ATTACKS.slice().reverse().map((v,i)=>(
                <tr key={i} style={{background:v.killed>0?"rgba(239,68,68,0.05)":"transparent"}}>
                  <td style={{padding:"5px 8px",color:L.textDim,fontSize:LF.small,fontFamily:"'JetBrains Mono',monospace",borderBottom:"1px solid "+L.border,whiteSpace:"nowrap"}}>{v.date}</td>
                  <td style={{padding:"5px 8px",color:L.text,fontSize:LF.small,fontWeight:500,borderBottom:"1px solid "+L.border,whiteSpace:"nowrap"}}>{v.vessel}</td>
                  <td style={{padding:"5px 8px",color:L.textMuted,fontSize:LF.small,borderBottom:"1px solid "+L.border,whiteSpace:"nowrap"}}>{v.flag}</td>
                  <td style={{padding:"5px 8px",color:L.textMuted,fontSize:LF.small,borderBottom:"1px solid "+L.border,whiteSpace:"nowrap"}}>{v.type}</td>
                  <td style={{padding:"5px 8px",color:L.textDim,fontSize:LF.small,borderBottom:"1px solid "+L.border}}>{v.loc}</td>
                  <td style={{padding:"5px 8px",textAlign:"center",color:v.killed>0?L.peak:L.textDim,fontSize:LF.small,fontWeight:v.killed>0?700:400,fontFamily:"'JetBrains Mono',monospace",borderBottom:"1px solid "+L.border}}>{v.killed>0?v.killed:"—"}</td>
                  <td style={{padding:"5px 8px",color:L.textDim,fontSize:LF.small,borderBottom:"1px solid "+L.border}}>{v.outcome}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
          <div style={{fontSize:LF.small,color:L.textDim,marginTop:6,fontFamily:"'JetBrains Mono',monospace"}}>Sources: MarineLink Mar 17; RFERL Mar 11; Reuters; USNI News. Jefferies: $1.75bn losses from ~7 vessels as of Mar 5.</div>
        </div>

        {/* Container freight rates */}
        <div style={{background:L.surface,border:"1px solid "+L.border,borderRadius:8,padding:20,marginBottom:16}}>
          <div style={{fontSize:LF.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:L.drone,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>CONTAINER FREIGHT RATES — Baltic FBX / Drewry</div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:LF.small}}>
              <thead><tr>{["Route","Pre-War","Mar 3-5","Mar 13","Mar 17","Notes"].map((h,i)=>(
                <th key={i} style={{padding:"5px 8px",textAlign:i>0&&i<5?"center":"left",borderBottom:"2px solid "+L.borderLight,color:L.textDim,fontSize:LF.badge,fontWeight:700,letterSpacing:1,textTransform:"uppercase",fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap"}}>{h}</th>
              ))}</tr></thead>
              <tbody>{CONTAINER_RATES.map((r,i)=>{
                const fmt = v => v?"$"+v.toLocaleString():"—";
                const pct = (v,pre) => v?"+"+Math.round((v/pre-1)*100)+"%":"—";
                return (
                  <tr key={i} style={{background:i%2===0?"transparent":L.surfaceAlt}}>
                    <td style={{padding:"6px 8px",color:L.text,fontSize:LF.small,fontWeight:500,borderBottom:"1px solid "+L.border}}>{r.route}</td>
                    <td style={{padding:"6px 8px",textAlign:"center",color:L.textMuted,fontFamily:"'JetBrains Mono',monospace",fontSize:LF.small,borderBottom:"1px solid "+L.border}}>{fmt(r.pre)}</td>
                    <td style={{padding:"6px 8px",textAlign:"center",color:r.mar3?L.drone:L.textDim,fontFamily:"'JetBrains Mono',monospace",fontSize:LF.small,fontWeight:r.mar3?700:400,borderBottom:"1px solid "+L.border}}>{r.mar3?fmt(r.mar3)+" ("+pct(r.mar3,r.pre)+")":"—"}</td>
                    <td style={{padding:"6px 8px",textAlign:"center",color:r.mar13?L.drone:L.textDim,fontFamily:"'JetBrains Mono',monospace",fontSize:LF.small,borderBottom:"1px solid "+L.border}}>{r.mar13?fmt(r.mar13)+" ("+pct(r.mar13,r.pre)+")":"—"}</td>
                    <td style={{padding:"6px 8px",textAlign:"center",color:r.mar17?L.drone:L.textDim,fontFamily:"'JetBrains Mono',monospace",fontSize:LF.small,borderBottom:"1px solid "+L.border}}>{r.mar17?fmt(r.mar17)+" ("+pct(r.mar17,r.pre)+")":"—"}</td>
                    <td style={{padding:"6px 8px",color:L.textDim,fontSize:LF.small,borderBottom:"1px solid "+L.border}}>{r.note}</td>
                  </tr>
                );
              })}</tbody>
            </table>
          </div>
          <div style={{fontSize:LF.small,color:L.textDim,marginTop:6,fontFamily:"'JetBrains Mono',monospace"}}>Sources: Baltic FBX Week 10-11; Drewry WCI via Trans.INFO; Freightos Mar 4 & Mar 17. CMA CGM/Hapag-Lloyd surcharges eff. ~Mar 23.</div>
        </div>
        </>
      </div>
    );
  };

  // ═══════════════════════════════════════════
  // ADVERSARY TAB — IRGC Claims, Weapons, Disinformation, Reconciliation
  // ═══════════════════════════════════════════

  const renderIran = () => {
    const cardBg = S_CARD;
    const atkOrange = ATK_ORANGE;
    const thStyle = S_TH;
    const tdStyle = S_TD;
    const R = IRAN_RECONCILIATION;

    const statusCol = (s) => ({
      "CONFIRMED":C.reduction,"LIKELY USED":C.drone,"LIKELY":C.drone,"SUSPECTED":C.cruise,
    }[s] || C.textDim);

    const flagCol = (f) => ({
      "YES":C.peak,"Partial":C.drone,"No":C.reduction,
    }[f] || C.textDim);

    const disinfoCol = (t) => ({
      "FALSE CLAIM":C.peak,"AI FABRICATION":"#a855f7","MISATTRIBUTION":C.drone,"DISPUTED":C.cruise,
    }[t] || C.textDim);

    // Iran subtab definitions — hoisted to module scope (see IRAN_SUBTABS near TAB_ROWS)

    return (
      <div>
        {/* ── Iran subtab navigation ── */}
        <div style={{marginBottom:16,paddingBottom:12,borderBottom:"2px solid "+ATK_ORANGE+"30"}}>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:8}}>
            {IRAN_SUBTABS.map(t=>(
              <SubTabPill key={t.k} label={t.l} active={iranSubTab===t.k} color={ATK_ORANGE} onClick={()=>setIranSubTab(t.k)}/>
            ))}
          </div>
          <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>IRGC Claims · Weapons · Disinfo · Defense Inventory · Interceptor Depletion · Offensive Capacity · Epic Fury · Strategic Calculus</div>
        </div>

        <div style={{marginBottom:12}}><FreshnessBadge dataArray={IRAN_DAY_CLAIMS} label="Iran claims" warDay={todayWarDay} /></div>

        {/* Briefing panels — mapped from Iran subtabs to BRIEF_ADV keys */}
        {iranSubTab === "capacity" && (
          <div style={{marginBottom:20}}>
            <BriefingTabbed briefings={BRIEF_ADV} color={ATK_ORANGE} activeKey={"a"} onSelect={(k) => { if(k==="a") setIranSubTab("capacity"); else if(k==="b") setIranSubTab("epicfury"); else if(k==="c") setIranSubTab("depletion"); else if(k==="d") setIranSubTab("calculus"); }}/>
          </div>
        )}
        {iranSubTab === "epicfury" && (
          <div style={{marginBottom:20}}>
            <BriefingTabbed briefings={BRIEF_ADV} color={ATK_ORANGE} activeKey={"b"} onSelect={(k) => { if(k==="a") setIranSubTab("capacity"); else if(k==="b") setIranSubTab("epicfury"); else if(k==="c") setIranSubTab("depletion"); else if(k==="d") setIranSubTab("calculus"); }}/>
          </div>
        )}
        {iranSubTab === "depletion" && (
          <div style={{marginBottom:20}}>
            <BriefingTabbed briefings={BRIEF_ADV} color={ATK_ORANGE} activeKey={"c"} onSelect={(k) => { if(k==="a") setIranSubTab("capacity"); else if(k==="b") setIranSubTab("epicfury"); else if(k==="c") setIranSubTab("depletion"); else if(k==="d") setIranSubTab("calculus"); }}/>
          </div>
        )}
        {iranSubTab === "calculus" && (
          <div style={{marginBottom:20}}>
            <BriefingTabbed briefings={BRIEF_ADV} color={ATK_ORANGE} activeKey={"d"} onSelect={(k) => { if(k==="a") setIranSubTab("capacity"); else if(k==="b") setIranSubTab("epicfury"); else if(k==="c") setIranSubTab("depletion"); else if(k==="d") setIranSubTab("calculus"); }}/>
          </div>
        )}
        {iranSubTab === "inventory" && (<>
          {/* Iranian Military Order of Battle — Defense Inventory view */}
          <div style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:16,marginBottom:16}}>
            <div style={{fontSize:FONT.label,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.peak,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>IRAN — FORCE STATUS BY DOMAIN (as of Day {warDayRef})</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:10}}>
              {IRAN_MILITARY_ORDER.map((d,i) => {
                const st = String(d.status||""); const statusCol = st.includes("Critically") || st.includes("Severely") ? C.reduction : st.includes("Degraded") || st.includes("Partially") ? C.drone : st.includes("Intact") || st.includes("Operational") ? C.peak : C.textMuted;
                return (
                  <div key={i} style={{background:C.bg,border:"1px solid "+C.border,borderRadius:6,padding:12}}>
                    <div style={{fontSize:FONT.table,fontWeight:700,color:C.text,marginBottom:4}}>{d.domain}</div>
                    <div style={{fontSize:FONT.small,color:statusCol,fontWeight:700,marginBottom:6}}>{d.status}</div>
                    <div style={{fontSize:FONT.small,color:C.textMuted}}>{d.est_remaining}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </>)}

        {/* IRGC Claims subtab */}
        {iranSubTab === "claims" && (<>
        {/* Iranian Military Order of Battle */}
        <div style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:16,marginBottom:16}}>
          <div style={{fontSize:FONT.label,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.peak,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>IRAN — FORCE STATUS BY DOMAIN (as of Day {warDayRef})</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:10}}>
            {IRAN_MILITARY_ORDER.map((d,i) => {
              const st = String(d.status||""); const statusCol = st.includes("Critically") || st.includes("Severely") ? C.reduction : st.includes("Degraded") || st.includes("Partially") ? C.drone : st.includes("Intact") || st.includes("Operational") ? C.peak : C.textMuted;
              return (
                <div key={i} style={{background:C.bg,border:"1px solid "+C.border,borderRadius:6,padding:12}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                    <span style={{fontSize:FONT.label,fontWeight:800,color:C.text}}>{d.domain}</span>
                    <span style={{fontSize:FONT.small,padding:"2px 6px",borderRadius:3,background:statusCol+"18",color:statusCol,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>{(d.status||"Unknown").split("—")[0].trim()}</span>
                  </div>
                  <div style={{fontSize:FONT.small,color:C.textDim,marginBottom:4}}>{d.branch}</div>
                  <div style={{display:"flex",gap:12,marginBottom:6,flexWrap:"wrap",fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace"}}>
                    <span style={{color:C.textMuted}}>Pre-war: <span style={{color:C.text}}>{d.prewar_quantity}</span></span>
                    <span style={{color:C.textMuted}}>Remaining: <span style={{color:statusCol}}>{d.est_remaining}</span></span>
                  </div>
                  <div style={{fontSize:FONT.small,color:C.textDim,lineHeight:1.5}}>{(d.note||"").length > 120 ? (d.note||"").slice(0,118)+"..." : (d.note||"—")}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* A) Overview card */}
        <div style={{...cardBg,background:"linear-gradient(135deg,"+C.surfaceAlt+" 0%,"+C.surface+" 100%)",borderLeft:"3px solid "+atkOrange}}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:atkOrange,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>
            ⚔ OPERATION TRUE PROMISE 4 — KHATAM AL-ANBIYA CENTRAL HEADQUARTERS
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10,marginBottom:16}}>
            {[
              {label:"Iran claimed missiles",value:"~"+(R.iranMissiles||"—"),sub:"IRGC aggregate (~Mar 16)",color:C.ballistic},
              {label:"Iran claimed drones",value:"~"+(R.iranDrones?R.iranDrones.toLocaleString():"—"),sub:"IRGC aggregate (~Mar 16)",color:C.drone},
              {label:"FDD/Alma est. missiles",value:R.fddMissiles?R.fddMissiles.toLocaleString():"—",sub:"Independent estimate (Mar 13)",color:C.cruise},
              {label:"FDD/Alma est. drones",value:R.fddDrones?R.fddDrones.toLocaleString():"—",sub:"Independent estimate (Mar 13)",color:C.sea},
              {label:"Named waves",value:(() => { const last = IRAN_DAY_CLAIMS[IRAN_DAY_CLAIMS.length-1]; return last && last.waves ? String(last.waves).replace(/[^0-9]/g,"")+"+" : IRAN_DAY_CLAIMS.length+"+" })(),sub:"Through "+(IRAN_DAY_CLAIMS.length>0?IRAN_DAY_CLAIMS[IRAN_DAY_CLAIMS.length-1].date:"—")+" (PressTV)",color:atkOrange},
              {label:"IRGC claimed US killed",value:(R.iranClaimedUSKilled||650)+"",sub:"Actual: ~"+(US_CASUALTIES.length)+" (CENTCOM)",color:C.peak},
            ].map((s,i)=>(
              <div key={i} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:14,borderTop:"2px solid "+s.color}}>
                <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1,textTransform:"uppercase",marginBottom:6}}>{s.label}</div>
                <div style={{fontSize:FONT.h1,fontWeight:800,color:s.color,fontFamily:"'JetBrains Mono',monospace",lineHeight:1}}>{s.value}</div>
                <div style={{fontSize:FONT.small,color:C.textMuted,marginTop:4}}>{s.sub}</div>
              </div>
            ))}
          </div>
          <div style={{fontSize:FONT.small,color:C.textMuted,lineHeight:1.6}}>
            <span style={{color:atkOrange,fontWeight:700}}>Key finding:</span> Iran's missile count (~700) is 3.4x lower than independent estimates (2,410), suggesting Iran only counts "successful" launches. Drone count (~3,600 vs 3,560 FDD) is remarkably close, suggesting drone tallies are more credible. Casualty claims are inflated 10–100x vs reality.
          </div>
        </div>

        {/* B) Day-by-day claims table */}
        <div style={cardBg}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:atkOrange,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>
            DAY-BY-DAY IRGC CLAIMS ({IRAN_DAY_CLAIMS.length} days tracked)
          </div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:FONT.small}}>
              <thead><tr>
                {["Date","Day","Waves","IRGC Claimed","Weapons Named","Targets","Prop.","Conf"].map((h,i)=>(
                  <th key={i} style={{...thStyle,fontSize:FONT.tiny,textAlign:i<3?"center":"left"}}>{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {IRAN_DAY_CLAIMS.slice().reverse().map((r,idx)=>{
                  const isProp = r.propFlag==="YES";
                  return (
                    <tr key={idx} style={{background:isProp?C.peakBg:idx%2===0?"transparent":C.surfaceAlt+"40"}}>
                      <td style={{...tdStyle,textAlign:"center",fontWeight:600,color:C.text,fontFamily:"'JetBrains Mono',monospace",whiteSpace:"nowrap",fontSize:FONT.small}}>{r.date}</td>
                      <td style={{...tdStyle,textAlign:"center",color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.small}}>{r.day}</td>
                      <td style={{...tdStyle,textAlign:"center",color:atkOrange,fontFamily:"'JetBrains Mono',monospace",fontWeight:600,fontSize:FONT.small,whiteSpace:"nowrap"}}>{r.waves}</td>
                      <td style={{...tdStyle,color:C.textMuted,maxWidth:260,lineHeight:1.4,fontSize:FONT.small}}>{r.claimed}</td>
                      <td style={{...tdStyle,color:C.cruise,fontSize:FONT.small,maxWidth:180,lineHeight:1.4}}>{r.weapons}</td>
                      <td style={{...tdStyle,color:C.textDim,fontSize:FONT.small,maxWidth:180,lineHeight:1.4}}>{r.targets}</td>
                      <td style={{...tdStyle,textAlign:"center"}}>
                        <span style={{fontSize:FONT.tiny,fontWeight:700,padding:"1px 4px",borderRadius:2,background:flagCol(r.propFlag)+"18",color:flagCol(r.propFlag),fontFamily:"'JetBrains Mono',monospace"}}>{r.propFlag}</span>
                      </td>
                      <td style={{...tdStyle,textAlign:"center"}}>
                        <ConfBadge conf={r.conf}/>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{fontSize:FONT.small,color:C.textDim,marginTop:10,lineHeight:1.5}}>Sources: PressTV daily summaries, Tasnim, ISW/CTP, FDD/LWJ, Alma Research. Prop. = Propaganda flag (YES = documented disinformation).</div>
        </div>

        </>)}

        {/* Weapons subtab */}
        {iranSubTab === "wpn" && (<>
        {/* C) Weapon Systems Confirmed */}
        <div style={cardBg}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:C.cruise,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>
            WEAPON SYSTEMS IDENTIFIED ({WEAPON_SYSTEMS.length} systems)
          </div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:FONT.label}}>
              <thead><tr>
                {["System","Type","Status","Range","Warhead","Debut","Evidence"].map((h,i)=>(
                  <th key={i} style={thStyle}>{h}</th>
                ))}
              </tr></thead>
              <tbody>
                {WEAPON_SYSTEMS.slice().reverse().map((w,idx)=>{
                  const sc = statusCol(w.status);
                  return (
                    <tr key={idx} style={{background:idx%2===0?"transparent":C.surfaceAlt+"40"}}>
                      <td style={{...tdStyle,fontWeight:700,color:C.text}}>{w.name}</td>
                      <td style={{...tdStyle,color:C.textMuted,fontSize:FONT.small}}>{w.type}</td>
                      <td style={{...tdStyle}}>
                        <span style={{fontSize:FONT.small,fontWeight:700,padding:"2px 6px",borderRadius:3,background:sc+"18",color:sc,fontFamily:"'JetBrains Mono',monospace"}}>{w.status}</span>
                      </td>
                      <td style={{...tdStyle,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.small}}>{w.range}</td>
                      <td style={{...tdStyle,color:C.drone,fontFamily:"'JetBrains Mono',monospace",fontWeight:600,fontSize:FONT.small}}>{w.warhead}</td>
                      <td style={{...tdStyle,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",fontSize:FONT.small,whiteSpace:"nowrap"}}>{w.debut}</td>
                      <td style={{...tdStyle,color:C.textDim,fontSize:FONT.small,maxWidth:220,lineHeight:1.4}}>{w.evidence}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{fontSize:FONT.small,color:C.textDim,marginTop:10,lineHeight:1.5}}>Sources: UAE MoD wreckage briefing, IRGC Khatam al-Anbiya statements, HRW Bahrain verification, ISW/CTP analysis, CSIS missile database.</div>
        </div>

        </>)}

        {/* Disinfo subtab — CLAIM vs REALITY at top */}
        {iranSubTab === "disinfo" && (<>
        {/* E) Reconciliation Summary — moved to TOP of Disinfo subtab */}
        <div style={{...cardBg,background:C.surfaceAlt,borderLeft:"3px solid "+atkOrange,marginBottom:16}}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:atkOrange,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>📊 CLAIM vs REALITY — RECONCILIATION SUMMARY</div>
          <div style={{fontSize:FONT.small,color:C.textDim,lineHeight:1.6,marginBottom:12}}>
            <span style={{color:atkOrange,fontWeight:700}}>Key finding:</span> Iran's missile count (~{R.iranMissiles||"—"}) is 3.4x lower than independent estimates ({typeof R.fddMissiles==="number"?R.fddMissiles.toLocaleString():"—"}). Drone count (~{typeof R.iranDrones==="number"?R.iranDrones.toLocaleString():"—"} vs {typeof R.fddDrones==="number"?R.fddDrones.toLocaleString():"—"} FDD) is remarkably close. Casualty claims are inflated 10–100x vs reality.
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
            <div style={{background:C.surface,border:"1px solid "+C.border,borderRadius:6,padding:10,textAlign:"center"}}>
              <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:4}}>IRAN CLAIMED US KILLED</div>
              <div style={{fontSize:22,fontWeight:800,color:C.peak,fontFamily:"'JetBrains Mono',monospace"}}>{R.iranClaimedUSKilled}</div>
            </div>
            <div style={{background:C.surface,border:"1px solid "+C.border,borderRadius:6,padding:10,textAlign:"center"}}>
              <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:4}}>ACTUAL US KILLED</div>
              <div style={{fontSize:22,fontWeight:800,color:C.reduction,fontFamily:"'JetBrains Mono',monospace"}}>~{R.usKilled}</div>
            </div>
            <div style={{background:C.surface,border:"1px solid "+C.border,borderRadius:6,padding:10,textAlign:"center"}}>
              <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:4}}>EXAGGERATION FACTOR</div>
              <div style={{fontSize:22,fontWeight:800,color:C.peak,fontFamily:"'JetBrains Mono',monospace"}}>~50x</div>
            </div>
          </div>
        </div>
        {/* D) Disinformation Log */}
        <div style={cardBg}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:C.peak,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>
            ⚠ DOCUMENTED DISINFORMATION ({IRAN_DISINFO.length} false/disputed claims)
          </div>
          {IRAN_DISINFO.slice().reverse().map((d,idx)=>{
            const tc = disinfoCol(d.type);
            return (
              <div key={idx} style={{display:"flex",gap:12,padding:"10px 0",borderBottom:idx<IRAN_DISINFO.length-1?"1px solid "+C.border:"none"}}>
                <div style={{flexShrink:0,width:50,textAlign:"center"}}>
                  <div style={{fontSize:FONT.small,fontWeight:700,color:C.text,fontFamily:"'JetBrains Mono',monospace"}}>{d.date}</div>
                  <span style={{fontSize:FONT.tiny,fontWeight:700,padding:"1px 4px",borderRadius:2,background:tc+"18",color:tc,fontFamily:"'JetBrains Mono',monospace",display:"inline-block",marginTop:3}}>{d.type.split(" ")[0]}</span>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontSize:FONT.label,fontWeight:700,color:C.text,marginBottom:2}}>{d.claim}</div>
                  <div style={{fontSize:FONT.small,color:C.textDim,marginBottom:2}}>Source: {d.source}</div>
                  <div style={{fontSize:FONT.small,color:C.reduction,fontWeight:600}}>✖ {d.refutation}</div>
                </div>
              </div>
            );
          })}
          <div style={{fontSize:FONT.small,color:C.textDim,marginTop:10,lineHeight:1.5}}>Sources: CENTCOM, AFP Fact Check, NewsGuard (18 false claims in first week), Euronews disinformation report.</div>
        </div>
        </>)}
      </div>
    );
  };

  // ═══════════════════════════════════════════
  // STOCKPILE MODEL — upgraded burn analytics sub-tab
  // ═══════════════════════════════════════════

  const renderStockpile = () => {

    const cardBg = S_CARD_LG;

    // Gulf-wide cumulative fired (all countries combined — dynamically computed)
    const cumBM = [UAE_DATA,QATAR_DATA,BAHRAIN_DATA,SAUDI_DATA,KUWAIT_DATA,OMAN_DATA,IRAQ_DATA].reduce((t,arr)=>t+arr.reduce((s,d)=>s+(d.B||0),0),0);
    const cumCM = [UAE_DATA,QATAR_DATA,BAHRAIN_DATA,SAUDI_DATA,KUWAIT_DATA,OMAN_DATA,IRAQ_DATA].reduce((t,arr)=>t+arr.reduce((s,d)=>s+(d.C||0),0),0);
    const cumDrone = [UAE_DATA,QATAR_DATA,BAHRAIN_DATA,SAUDI_DATA,KUWAIT_DATA,OMAN_DATA,IRAQ_DATA].reduce((t,arr)=>t+arr.reduce((s,d)=>s+(d.U||0),0),0);

    // JINSA assessed Mar 6: "missile firepower almost run out"
    // Fars News Mar 5: 500+ BM/naval + ~2000 drones fired (IRGC overcount likely)
    const WEAPONS = [
      {
        key:"bm", label:"Ballistic missiles", sub:"Shahab-3, Emad, Sejjil, Fateh, Qiam, Zolfaghar",
        fired:cumBM,
        stocks:{low:6000+1660, est:7000+2000, high:8000+2340},
        replenish:"< 10/month (factory-limited)",
        color:C.ballistic,
        intel:["JINSA (Mar 6): 'Iran missile firepower almost run out'","CJCS (Mar 3): BM launches down 86% from Day 1","Day 16 total: only 4 BMs — consistent with depletion"]
      },
      {
        key:"cm", label:"Cruise missiles", sub:"Ya Ali, Hoveizeh, Soumar",
        fired:cumCM,
        stocks:{low:300, est:400, high:500},
        replenish:"~20–30/month",
        color:C.cruise,
        intel:["Only 15 CM used — suggests conservation or range limitations","Mar 11 reintroduction (7 CM) after 8-day gap: possible resupply signal","Cruise inventory considered most strategically valuable"]
      },
      {
        key:"uav", label:"Drones / UAVs", sub:"Shahed-136, Shahed-131, Mohajer-6",
        fired:cumDrone,
        stocks:{low:10000, est:40000, high:80000},
        replenish:"~1,000–2,000/month (domestic + Russian-sourced components)",
        color:C.drone,
        intel:["Drone production ongoing — partially replenishable","Day 9 Qatar: sharp drop 117→18 suggests temporary exhaustion of forward stock","Shahed-136 unit cost ~$20,000 — economically sustainable vs intercept costs"]
      },
    ];

    const stk = stkScen;
    const daysElapsed = warDayRef; // Dynamic — uses current war day count

    return (
      <div>
        <div style={{display:"flex",gap:8,marginBottom:16,alignItems:"center"}}>
          <span style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>SCENARIO:</span>
          {[{k:"low",l:"Conservative (low est.)"},{k:"est",l:"Best estimate"},{k:"high",l:"Optimistic (high est.)"}].map(s=>(
            <button key={s.k} onClick={()=>setStkScen(s.k)} style={{
              padding:"4px 12px",fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",
              background:stkScen===s.k?C.accentBg:"transparent",
              color:stkScen===s.k?C.accent:C.textDim,
              border:"1px solid "+(stkScen===s.k?C.accent+"50":C.border),
              borderRadius:4,cursor:"pointer"
            }}>{s.l}</button>
          ))}
        </div>

        {WEAPONS.map((w,wi)=>{
          const stockSize = w.stocks[stk];
          const pctFired = Math.min(w.fired/stockSize*100, 100);
          const remaining = Math.max(stockSize - w.fired, 0);
          const dailyRate = w.fired / daysElapsed;
          const daysLeft = dailyRate > 0 ? Math.round(remaining / dailyRate) : 999;
          return (
            <div key={wi} style={cardBg}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14,flexWrap:"wrap",gap:8}}>
                <div>
                  <div style={{fontSize:FONT.h3,fontWeight:800,color:w.color,fontFamily:"'JetBrains Mono',monospace"}}>{w.label}</div>
                  <div style={{fontSize:FONT.small,color:C.textDim,marginTop:2}}>{w.sub}</div>
                </div>
                <div style={{display:"flex",gap:8}}>
                  <div style={{textAlign:"center",background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:6,padding:"8px 14px"}}>
                    <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>FIRED</div>
                    <div style={{fontSize:FONT.h1,fontWeight:800,color:w.color,fontFamily:"'JetBrains Mono',monospace"}}>{w.fired.toLocaleString()}</div>
                  </div>
                  <div style={{textAlign:"center",background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:6,padding:"8px 14px"}}>
                    <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>EST. STOCK ({stk.toUpperCase()})</div>
                    <div style={{fontSize:FONT.h1,fontWeight:800,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>{stockSize.toLocaleString()}</div>
                  </div>
                  <div style={{textAlign:"center",background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:6,padding:"8px 14px"}}>
                    <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1}}>% EXPENDED</div>
                    <div style={{fontSize:FONT.h1,fontWeight:800,color:pctFired>50?C.peak:pctFired>25?C.drone:C.reduction,fontFamily:"'JetBrains Mono',monospace"}}>{pctFired.toFixed(1)}%</div>
                  </div>
                </div>
              </div>

              {/* Depletion bar */}
              <div style={{marginBottom:10}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:4}}>
                  <span>Expended</span><span>Remaining: {remaining.toLocaleString()}</span>
                </div>
                <div style={{height:12,background:C.bg,borderRadius:6,overflow:"hidden",position:"relative"}}>
                  <div style={{height:"100%",width:pctFired+"%",background:pctFired>50?C.peak:pctFired>25?C.drone:C.reduction,borderRadius:6,transition:"width 0.3s"}}/>
                  {/* Confidence range */}
                  <div style={{
                    position:"absolute",top:0,height:"100%",
                    left:Math.min(w.fired/w.stocks.high*100,100)+"%",
                    width:Math.max(Math.min(w.fired/w.stocks.low*100,100)-Math.min(w.fired/w.stocks.high*100,100),0)+"%",
                    background:w.color+"30",borderRadius:0,
                  }}/>
                </div>
                <div style={{fontSize:FONT.small,color:C.textDim,marginTop:3,fontFamily:"'JetBrains Mono',monospace"}}>
                  Range: {(w.fired/w.stocks.high*100).toFixed(1)}% (high est.) — {(w.fired/w.stocks.low*100).toFixed(1)}% (low est.)
                </div>
              </div>

              {/* Projection */}
              <div style={{display:"flex",gap:12,marginBottom:12,flexWrap:"wrap"}}>
                <div style={{background:C.surfaceAlt,borderRadius:6,padding:"8px 12px",fontSize:FONT.small}}>
                  <span style={{color:C.textDim}}>Daily rate: </span>
                  <span style={{color:C.text,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"}}>{dailyRate.toFixed(0)}/day</span>
                </div>
                <div style={{background:C.surfaceAlt,borderRadius:6,padding:"8px 12px",fontSize:FONT.small}}>
                  <span style={{color:C.textDim}}>Projected remaining: </span>
                  <span style={{color:daysLeft<30?C.peak:daysLeft<90?C.drone:C.reduction,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"}}>{daysLeft > 500 ? "500+" : daysLeft} days at current rate</span>
                </div>
                <div style={{background:C.surfaceAlt,borderRadius:6,padding:"8px 12px",fontSize:FONT.small}}>
                  <span style={{color:C.textDim}}>Replenishment: </span>
                  <span style={{color:C.textMuted,fontWeight:600}}>{w.replenish}</span>
                </div>
              </div>

              {/* Intel signals */}
              <div style={{background:C.surfaceAlt,borderRadius:6,padding:10,borderLeft:"2px solid "+w.color}}>
                <div style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1,marginBottom:6}}>INTELLIGENCE SIGNALS</div>
                {w.intel.map((s,i)=>(
                  <div key={i} style={{fontSize:FONT.small,color:C.textMuted,lineHeight:1.6,marginBottom:2}}>▸ {s}</div>
                ))}
              </div>
            </div>
          );
        })}

        <div style={{...cardBg,background:C.surfaceAlt,fontSize:FONT.small,color:C.textDim,lineHeight:1.8}}>
          <span style={{color:C.textMuted,fontWeight:700}}>METHODOLOGY CAVEAT: </span>
          Gulf-wide fired counts aggregate all reported intercepts across UAE, Qatar, Bahrain, Saudi, Kuwait, Oman — treating each intercepted projectile as one expended unit. Saudi data is fragmented with overlap risk (treat BM total as minimum). Qatar post-Mar 10 data gap means true BM expenditure is higher. Stockpile estimates from JINSA, IDF, CSIS, IISS pre-war assessments. Iran's drone production (~1,000–2,000/month domestic) means UAV inventory is partially replenishable. Ballistic missiles are not meaningfully replenishable at industrial pace. Cruise missile production ~20–30/month.
        </div>
      </div>
    );
  };


  // ═══════════════════════════════════════════
  // SCENARIO MODELLER — #8
  // ═══════════════════════════════════════════
  const renderScenario = () => {

    const cardBg = S_CARD;

    // Baseline Phase 3 averages (last 7 days of data, dynamic window)
    const ph3Start = Math.max(0, UAE_DATA.length - 7);
    const ph3Slice = UAE_DATA.slice(ph3Start);
    const ph3Len = ph3Slice.length || 1;
    const baseB = ph3Slice.reduce((s,d)=>s+(d.B||0),0)/ph3Len;
    const baseU = ph3Slice.reduce((s,d)=>s+(d.U||0),0)/ph3Len;
    const baseIntB = ph3Slice.filter(d=>d.B&&d.Bd).reduce((s,d)=>s+(d.B/d.Bd),0)/Math.max(1,ph3Slice.filter(d=>d.B&&d.Bd).length);
    const baseIntU = ph3Slice.filter(d=>d.U&&d.Ud).reduce((s,d)=>s+(d.U/d.Ud),0)/Math.max(1,ph3Slice.filter(d=>d.U&&d.Ud).length);

    // Apply adjustments
    const mixMults = {current:{B:1,U:1},dronesOnly:{B:0,U:2},ballisticSurge:{B:2.5,U:0.5},allDrones:{B:0,U:3}};
    const mm = mixMults[wpnMix]||mixMults.current;
    const adjB = Math.max(0, baseB * mm.B * (1 + volAdj/100));
    const adjU = Math.max(0, baseU * mm.U * (1 + volAdj/100));
    const adjIntB = Math.min(1, Math.max(0, baseIntB * (1 + intAdj/100)));
    const adjIntU = Math.min(1, Math.max(0, baseIntU * (1 + intAdj/100)));

    // Project daily leaker counts
    const projDays = Array.from({length:extDays},(_,i)=>{
      const decay = Math.pow(0.97,i); // slight volume decay assumption
      const projB = Math.round(adjB * decay);
      const projU = Math.round(adjU * decay);
      const leakB = Math.round(projB * (1-adjIntB));
      const leakU = Math.round(projU * (1-adjIntU));
      return {day:warDayRef+1+i, projB, projU, leakB, leakU, total:projB+projU, totalLeak:leakB+leakU};
    });

    const totalBFired = projDays.reduce((s,d)=>s+d.projB,0);
    const totalUFired = projDays.reduce((s,d)=>s+d.projU,0);
    const totalLeakers = projDays.reduce((s,d)=>s+d.totalLeak,0);
    const maxTotal = Math.max(...projDays.map(d=>d.total),1);

    // Cumulative burn on stockpile (dynamically computed from all country arrays)
    const gulfWideBM = [UAE_DATA,QATAR_DATA,BAHRAIN_DATA,SAUDI_DATA,KUWAIT_DATA,OMAN_DATA,IRAQ_DATA].reduce((t,arr)=>t+arr.reduce((s,d)=>s+(d.B||0),0),0);
    const gulfWideDrone = [UAE_DATA,QATAR_DATA,BAHRAIN_DATA,SAUDI_DATA,KUWAIT_DATA,OMAN_DATA,IRAQ_DATA].reduce((t,arr)=>t+arr.reduce((s,d)=>s+(d.U||0),0),0);
    const cumBurnB = gulfWideBM + totalBFired;
    const cumBurnU = gulfWideDrone + totalUFired;
    const stockB = _STOCKPILE.mrbm.est + _STOCKPILE.srbm.est, stockU = _STOCKPILE.drone.est;

    return (
      <div>
        {/* Controls */}
        <div style={{...cardBg, borderLeft:"3px solid "+C.accent}}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.accent,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>SCENARIO CONTROLS — NOT PREDICTIONS · ANALYSIS TOOLS ONLY</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
            <div>
              <div style={{fontSize:FONT.small,color:C.textDim,marginBottom:6,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.5}}>INTERCEPT RATE ADJUSTMENT</div>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <input type="range" min={-30} max={10} step={5} value={intAdj}
                  onChange={e=>setIntAdj(parseInt(e.target.value))}
                  style={{flex:1}}/>
                <span style={{fontSize:FONT.h3,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",color:intAdj<0?C.peak:C.reduction,minWidth:52}}>
                  {intAdj>=0?"+":""}{intAdj}%
                </span>
              </div>
              <div style={{fontSize:FONT.small,color:C.textDim,marginTop:4}}>
                Base BM: {(baseIntB*100).toFixed(1)}% → Scenario: {(adjIntB*100).toFixed(1)}% &nbsp;|&nbsp;
                Base U: {(baseIntU*100).toFixed(1)}% → {(adjIntU*100).toFixed(1)}%
              </div>
            </div>
            <div>
              <div style={{fontSize:FONT.small,color:C.textDim,marginBottom:6,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.5}}>ATTACK VOLUME ADJUSTMENT</div>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <input type="range" min={-50} max={200} step={10} value={volAdj}
                  onChange={e=>setVolAdj(parseInt(e.target.value))}
                  style={{flex:1}}/>
                <span style={{fontSize:FONT.h3,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",color:volAdj>50?C.peak:volAdj>0?C.drone:C.reduction,minWidth:52}}>
                  {volAdj>=0?"+":""}{volAdj}%
                </span>
              </div>
              <div style={{fontSize:FONT.small,color:C.textDim,marginTop:4}}>
                Base daily avg (Phase 3 UAE): B {baseB.toFixed(1)} · U {baseU.toFixed(1)} → B {adjB.toFixed(1)} · U {adjU.toFixed(1)}
              </div>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            <div>
              <div style={{fontSize:FONT.small,color:C.textDim,marginBottom:6,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.5}}>PROJECTION WINDOW</div>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <input type="range" min={7} max={45} step={7} value={extDays}
                  onChange={e=>setExtDays(parseInt(e.target.value))}
                  style={{flex:1}}/>
                <span style={{fontSize:FONT.h3,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",color:C.textMuted,minWidth:52}}>+{extDays}d</span>
              </div>
            </div>
            <div>
              <div style={{fontSize:FONT.small,color:C.textDim,marginBottom:6,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.5}}>WEAPON MIX</div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                {[{k:"current",l:"Current mix"},{k:"dronesOnly",l:"Drones ×2"},{k:"ballisticSurge",l:"BM surge"},{k:"allDrones",l:"Drones only"}].map(o=>(
                  <button key={o.k} onClick={()=>setWpnMix(o.k)} style={{padding:"3px 10px",fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",background:wpnMix===o.k?C.accent+"20":"transparent",color:wpnMix===o.k?C.accent:C.textDim,border:"1px solid "+(wpnMix===o.k?C.accent+"50":C.border),borderRadius:4,cursor:"pointer"}}>{o.l}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Output cards */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10,marginBottom:16}}>
          {[
            {label:`Projected B fired (+${extDays}d)`,value:totalBFired.toLocaleString(),color:C.ballistic},
            {label:`Projected U fired (+${extDays}d)`,value:totalUFired.toLocaleString(),color:C.drone},
            {label:"Projected leakers",value:totalLeakers.toLocaleString(),color:C.peak,sub:`${((totalLeakers/(totalBFired+totalUFired||1))*100).toFixed(1)}% penetration rate`},
            {label:"Cum BM vs stockpile",value:(cumBurnB/stockB*100).toFixed(1)+"%",color:cumBurnB/stockB>0.15?C.peak:C.drone,sub:`${cumBurnB.toLocaleString()} of ~${stockB.toLocaleString()} est.`},
            {label:"Cum drone vs stockpile",value:(cumBurnU/stockU*100).toFixed(1)+"%",color:C.textMuted,sub:`${cumBurnU.toLocaleString()} of ~${stockU.toLocaleString()} est.`},
          ].map((s,i)=>(
            <div key={i} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:"12px 14px",borderTop:"2px solid "+s.color}}>
              <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:1,textTransform:"uppercase",marginBottom:6}}>{s.label}</div>
              <div style={{fontSize:FONT.h1,fontWeight:800,color:s.color,fontFamily:"'JetBrains Mono',monospace",lineHeight:1}}>{s.value}</div>
              {s.sub&&<div style={{fontSize:FONT.small,color:C.textMuted,marginTop:4}}>{s.sub}</div>}
            </div>
          ))}
        </div>

        {/* Projected daily chart */}
        <div style={cardBg}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.textDim,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>PROJECTED DAILY VOLUME — Days {18} → {17+extDays} (shaded = projected leakers)</div>
          <svg width="100%" viewBox={`0 0 700 140`} style={{display:"block",overflow:"visible"}}>
            {projDays.map((d,i)=>{
              const bw = Math.max(4, (680/extDays)*0.7);
              const x = 10 + i*(680/extDays);
              const h = (d.total/maxTotal)*100;
              const hLeak = (d.totalLeak/maxTotal)*100;
              return (
                <g key={i}>
                  <rect x={x} y={110-h} width={bw} height={h-hLeak} fill={C.drone} rx={1} opacity={0.6}/>
                  <rect x={x} y={110-hLeak} width={bw} height={hLeak} fill={C.peak} rx={1} opacity={0.85}/>
                  {extDays<=21&&<text x={x+bw/2} y={120} fill={C.textDim} fontSize={7} textAnchor="middle" fontFamily="'JetBrains Mono',monospace">D{d.day}</text>}
                </g>
              );
            })}
            <line x1={10} y1={110} x2={690} y2={110} stroke={C.border} strokeWidth={0.5}/>
          </svg>
          <div style={{display:"flex",gap:14,marginTop:6}}>
            {[{color:C.drone,label:"Intercepted volume"},{color:C.peak,label:"Projected leakers"}].map((l,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:10,height:10,borderRadius:2,background:l.color}}/><span style={{fontSize:FONT.small,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace"}}>{l.label}</span></div>
            ))}
          </div>
        </div>

        <div style={{padding:10,background:C.surfaceAlt,borderRadius:6,border:"1px solid "+C.border,fontSize:FONT.small,color:C.textDim,lineHeight:1.7}}>
          <span style={{color:C.textMuted,fontWeight:700}}>METHODOLOGY: </span>
          Baseline is Phase 3 UAE daily average (Days 12–17). Volume decay of 3%/day applied (observed depletion trend). Stockpile estimates from CSIS/JINSA pre-conflict assessments. These are illustrative scenarios — not forecasts. For allocator conversations, use these to frame asymmetric outcomes, not central estimates.
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════
  // TARGET TYPE DISTRIBUTION — #4
  // ═══════════════════════════════════════════
  const renderTargetTypes = () => {

    const cardBg = S_CARD;
    const TYPE_COLORS = {
      Energy:C.drone, Military:C.ballistic, Residential:C.peak,
      Transport:C.cruise, Diplomatic:"#a78bfa", Data:"#34d399", Maritime:"#06b6d4"
    };

    const filtered = LEAKER_LOG.filter(l=>
      l.targetType && (phFilter==="all" || l.day<=(phFilter==="1"?5:phFilter==="2"?11:99) && l.day>=(phFilter==="2"?6:phFilter==="3"?12:1))
    );

    // Compute distribution
    const typeCounts = {};
    const typeByPhase = {1:{},2:{},3:{}};
    filtered.forEach(l=>{
      const t = l.targetType||"Unknown";
      typeCounts[t] = (typeCounts[t]||0)+1;
    });
    LEAKER_LOG.filter(l=>l.targetType).forEach(l=>{
      const ph = l.day<=5?1:l.day<=11?2:3;
      const t = l.targetType;
      typeByPhase[ph][t] = (typeByPhase[ph][t]||0)+1;
    });

    const total = Object.values(typeCounts).reduce((s,v)=>s+v,0);
    const sortedTypes = Object.entries(typeCounts).sort((a,b)=>b[1]-a[1]);
    const allTypes = Object.keys(TYPE_COLORS);

    return (
      <div>
        <div style={{display:"flex",gap:8,marginBottom:14,alignItems:"center",flexWrap:"wrap"}}>
          <span style={{fontSize:FONT.small,fontWeight:700,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.5}}>PHASE:</span>
          {[{k:"all",l:"All phases"},...PHASE_DEFINITIONS.map(p=>({k:String(p.id),l:p.name+" ("+p.days+")"}))].map(f=>(
            <button key={f.k} onClick={()=>setPhFilter(f.k)} style={{padding:"4px 12px",fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",background:phFilter===f.k?C.accentBg:"transparent",color:phFilter===f.k?C.accent:C.textDim,border:"1px solid "+(phFilter===f.k?C.accent+"50":C.border),borderRadius:4,cursor:"pointer"}}>{f.l}</button>
          ))}
        </div>

        {/* Distribution bars */}
        <div style={cardBg}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.textDim,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>TARGET TYPE DISTRIBUTION — {total} CONFIRMED PENETRATIONS</div>
          {sortedTypes.map(([type,count],i)=>{
            const pct = (count/total*100).toFixed(1);
            const color = TYPE_COLORS[type]||C.textMuted;
            return (
              <div key={i} style={{marginBottom:10}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <div style={{width:10,height:10,borderRadius:2,background:color}}/>
                    <span style={{fontSize:FONT.table,fontWeight:700,color:C.text}}>{type}</span>
                  </div>
                  <span style={{fontSize:FONT.label,fontFamily:"'JetBrains Mono',monospace",color:color,fontWeight:700}}>{count} ({pct}%)</span>
                </div>
                <div style={{height:8,background:C.bg,borderRadius:4,overflow:"hidden"}}>
                  <div style={{height:"100%",width:pct+"%",background:color,borderRadius:4}}/>
                </div>
                <div style={{fontSize:FONT.small,color:C.textDim,marginTop:2}}>
                  {LEAKER_LOG.filter(l=>l.targetType===type&&(phFilter==="all"||l.day<=(phFilter==="1"?5:phFilter==="2"?11:99)&&l.day>=(phFilter==="2"?6:phFilter==="3"?12:1))).map(l=>l.target).join(" · ")}
                </div>
              </div>
            );
          })}
        </div>

        {/* Phase-over-phase shift */}
        <div style={cardBg}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.textDim,marginBottom:14,fontFamily:"'JetBrains Mono',monospace"}}>TARGET MIX SHIFT — PHASE I → II → III</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
            {[1,2,3].map(ph=>{
              const phData = typeByPhase[ph];
              const phTotal = Object.values(phData).reduce((s,v)=>s+v,0)||1;
              const phColor = [C.phaseOne,C.phaseTwo,C.phaseThree][ph-1];
              return (
                <div key={ph} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:8,padding:12,borderTop:"2px solid "+phColor}}>
                  <div style={{fontSize:FONT.small,fontWeight:700,color:phColor,fontFamily:"'JetBrains Mono',monospace",marginBottom:10,letterSpacing:0.5}}>PHASE {["I","II","III"][ph-1]}</div>
                  {allTypes.filter(t=>phData[t]>0).sort((a,b)=>(phData[b]||0)-(phData[a]||0)).map((t,i)=>(
                    <div key={i} style={{display:"flex",justifyContent:"space-between",marginBottom:4,alignItems:"center"}}>
                      <div style={{display:"flex",alignItems:"center",gap:5}}>
                        <div style={{width:7,height:7,borderRadius:1,background:TYPE_COLORS[t]||C.textMuted}}/>
                        <span style={{fontSize:FONT.small,color:C.textMuted}}>{t}</span>
                      </div>
                      <span style={{fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace",color:TYPE_COLORS[t]||C.textMuted,fontWeight:700}}>{((phData[t]||0)/phTotal*100).toFixed(0)}%</span>
                    </div>
                  ))}
                  {phTotal===1&&<div style={{fontSize:FONT.badge,color:C.textDim}}>No confirmed leakers</div>}
                </div>
              );
            })}
          </div>
          <div style={{marginTop:12,padding:10,background:C.surfaceAlt,borderRadius:6,border:"1px solid "+C.border,fontSize:FONT.small,color:C.textDim,lineHeight:1.7}}>
            <span style={{color:C.textMuted,fontWeight:700}}>ATTACKER INTENT SIGNAL: </span>
            Phase I dominated by Military targets (5th Fleet, Al Udeid, Ali Al Salem) — decapitation and force degradation. Phase II shifts toward Energy infrastructure (Ruwais, BAPCO, KAFCO) — economic coercion. Phase III adds Diplomatic targets (Embassy Baghdad, Embassy Riyadh) and sustained Residential leakage — signals broadening target set as precision degrades.
          </div>
        </div>
      </div>
    );
  };


  // ═══════════════════════════════════════════
  // US TAB — Operation Epic Fury stats + research
  // ═══════════════════════════════════════════

  const renderUS = () => {
    const cardBg = S_CARD;
    const usColor = "#3b82f6";
    const b = (BRIEF_ADV && typeof BRIEF_ADV === 'object' && BRIEF_ADV.b) ? BRIEF_ADV.b : {title:"",execSummary:"",kpis:[],keyFindings:[],detailedSections:[]};
    return (
      <div>
        <SectionHeader title="Operation Epic Fury" subtitle="US-led air campaign against Iran — Feb 28 ongoing" color={usColor}/>
        <div style={{marginBottom:12}}><FreshnessBadge dataArray={US_POLICY_EVENTS} label="Policy events" warDay={todayWarDay} /></div>
        {/* Epic Fury briefing panel */}
        <div style={{marginBottom:16}}>
          <BriefingTabbed briefings={BRIEF_ADV} color={usColor} activeKey={"b"} onSelect={(k) => { if(k==="b") {} else if(k==="a") {setActiveTab("Iran"); setIranSubTab("capacity");} else if(k==="c") {setActiveTab("Iran"); setIranSubTab("depletion");} else if(k==="d") {setActiveTab("Iran"); setIranSubTab("calculus");} }}/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:8,marginBottom:20}}>
          {(Array.isArray(b.kpis)?b.kpis:[]).map((x,i) => (
            <div key={i} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:6,padding:"10px 12px",borderTop:"2px solid "+usColor}}>
              <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.8,textTransform:"uppercase",marginBottom:4}}>{x.k}</div>
              <div style={{fontSize:FONT.body,fontWeight:800,color:usColor,fontFamily:"'JetBrains Mono',monospace",lineHeight:1}}>{x.v}</div>
            </div>
          ))}
        </div>
        <div style={{...cardBg,background:C.surfaceAlt}}>
          <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.75,marginBottom:14}}>{b.execSummary}</div>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:usColor,fontFamily:"'JetBrains Mono',monospace",marginBottom:10}}>KEY FINDINGS</div>
          {(Array.isArray(b.keyFindings)?b.keyFindings:[]).map((f,i) => (
            <div key={i} style={{display:"flex",gap:8,marginBottom:10,lineHeight:1.6}}>
              <span style={{fontSize:FONT.table,fontWeight:800,color:usColor,fontFamily:"'JetBrains Mono',monospace",flexShrink:0}}>{i+1}.</span>
              <span style={{fontSize:FONT.label,color:C.textMuted}}>{f}</span>
            </div>
          ))}
        </div>
        <div style={cardBg}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.textDim,fontFamily:"'JetBrains Mono',monospace",marginBottom:8}}>RESEARCH SECTIONS</div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {(Array.isArray(b.detailedSections)?b.detailedSections:[]).map((ds,i) => (
              <button key={i} type="button" onClick={()=>setUsSection(usSection===i?null:i)} style={{
                fontSize:FONT.small,padding:"5px 12px",borderRadius:5,cursor:"pointer",fontFamily:"'JetBrains Mono',monospace",
                background:usSection===i?usColor+"18":C.surfaceAlt,
                border:"1px solid "+(usSection===i?usColor:C.border),
                color:usSection===i?usColor:C.textDim,
                fontWeight:usSection===i?700:500,
                transition:"all 0.15s"
              }}>{ds.heading}</button>
            ))}
          </div>
          {usSection !== null && b.detailedSections[usSection] && (
            <div style={{marginTop:12,padding:16,background:C.bg,border:"1px solid "+usColor+"30",borderRadius:8,borderLeft:"3px solid "+usColor}}>
              <div style={{fontSize:FONT.table,fontWeight:800,color:usColor,marginBottom:8,fontFamily:"'DM Sans',sans-serif"}}>{b.detailedSections[usSection].heading}</div>
              <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.7}}>{b.detailedSections[usSection].content}</div>
            </div>
          )}
        </div>
        {/* Force Disposition — from structured data */}
        <div style={{background:C.surfaceAlt,border:"1px solid "+C.blue+"30",borderRadius:8,padding:16,marginBottom:16}}>
          <div style={{fontSize:FONT.label,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.blue,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>NAVAL TASK GROUPS ({US_NAVAL_FORCES.length})</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:8}}>
            {US_NAVAL_FORCES.map((ship,i) => {
              const col = ship.id.startsWith("uk")?C.magenta:C.blue;
              return (
                <div key={i} style={{background:C.bg,border:"1px solid "+C.border,borderRadius:6,padding:10}}>
                  <div style={{fontSize:FONT.label,fontWeight:700,color:C.text,marginBottom:2}}>{ship.name}</div>
                  <div style={{fontSize:FONT.small,color:col,fontFamily:"'JetBrains Mono',monospace",marginBottom:4}}>{ship.type} · {ship.location}</div>
                  <div style={{fontSize:FONT.small,color:C.textDim}}>{ship.composition}</div>
                  <div style={{fontSize:FONT.small,color:C.drone,marginTop:4,fontFamily:"'JetBrains Mono',monospace"}}>{ship.status}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{background:C.surfaceAlt,border:"1px solid "+C.blue+"30",borderRadius:8,padding:16,marginBottom:16}}>
          <div style={{fontSize:FONT.label,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:C.blue,marginBottom:12,fontFamily:"'JetBrains Mono',monospace"}}>AIR ORDER OF BATTLE ({COALITION_AIR_ORDER.reduce((s,a)=>s+a.quantity,0)} aircraft)</div>
          {[...new Set(COALITION_AIR_ORDER.map(a=>a.base))].map(base => {
            const aircraft = COALITION_AIR_ORDER.filter(a=>a.base===base);
            const total = aircraft.reduce((s,a)=>s+a.quantity,0);
            return (
              <div key={base} style={{marginBottom:8}}>
                <div style={{fontSize:FONT.small,fontWeight:700,color:C.text,marginBottom:4}}>{base} <span style={{color:C.textDim,fontWeight:400}}>({aircraft.length > 0 ? aircraft[0].country : "—"}) · {total} aircraft</span></div>
                <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
                  {aircraft.map((a,i) => (
                    <span key={i} style={{fontSize:FONT.small,padding:"2px 6px",borderRadius:3,background:C.bg,border:"1px solid "+C.border,fontFamily:"'JetBrains Mono',monospace",color:C.textMuted}}>
                      <span style={{color:C.text,fontWeight:700}}>{a.quantity}×</span> {a.aircraft} <span style={{color:a.nation==="USAF"||a.nation==="USN"?C.blue+"80":a.nation.includes("Royal")||a.nation==="RAF"?C.magenta+"80":C.textDim}}>({a.nation})</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div style={cardBg}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:usColor,fontFamily:"'JetBrains Mono',monospace",marginBottom:8}}>US POLICY TIMELINE (INGEST)</div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:FONT.label}}>
              <thead><tr>{["Day","Date","Topic","Detail","Conf"].map((h,i)=><th key={i} style={{...S_TH,textAlign:i>=3?"left":"center"}}>{h}</th>)}</tr></thead>
              <tbody>
                {US_POLICY_EVENTS.slice().reverse().map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"transparent":C.surfaceAlt+"40"}}>
                    <td style={S_TD}>{r.day}</td><td style={S_TD}>{r.date}</td><td style={S_TD}>{r.topic}</td>
                    <td style={{...S_TD,textAlign:"left",maxWidth:360}}>{r.detail}</td><td style={S_TD}><ConfBadge conf={r.conf}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  // ═══════════════════════════════════════════
  // ISRAEL TAB — Operation Roaring Lion + interceptor depletion
  // ═══════════════════════════════════════════

  const renderIsrael = () => {
    const cardBg = S_CARD;
    const ilColor = "#60a5fa";
    const _ba = (BRIEF_ADV && typeof BRIEF_ADV === 'object') ? BRIEF_ADV : {};
    const b2b = _ba.b || {title:"",execSummary:"",kpis:[],keyFindings:[],detailedSections:[]};
    const b2c = _ba.c || {title:"",execSummary:"",kpis:[],keyFindings:[],detailedSections:[]};
    const israelKpis = (() => {
      const bkpis = b2c && b2c.kpis ? b2c.kpis : [];
      const findKpi = (substr) => { const f = bkpis.find(k => k.k && k.k.toLowerCase().includes(substr)); return f ? f.v : null; };
      return [
        {k:"IAF Bombs Dropped",v:findKpi("bomb") || "12,000 in 18 days"},
        {k:"Israeli Daily Cost",v:findKpi("cost") || "~$410M/day"},
        {k:"Interceptor Status",v:findKpi("interceptor") || findKpi("status") || "Critically low (Mar 14)"},
        {k:"PAC-3 Used (3 days)",v:findKpi("pac") || "~800"},
        {k:"THAAD Next Delivery",v:findKpi("thaad") || THAAD_NEXT_DELIVERY},
        {k:"Cost Ratio (SM-3)",v:findKpi("ratio") || "140:1 vs Iran missile"},
        {k:"Iron Beam Status",v:findKpi("beam") || "Operational (limited)"},
        {k:"Arrow-3 Inventory",v:findKpi("arrow") || "Classified / low"},
      ];
    })();
    return (
      <div>
        <SectionHeader title="Operation Roaring Lion" subtitle="Israeli air campaign + interceptor depletion crisis" color={ilColor}/>
        <div style={{marginBottom:12}}><FreshnessBadge dataArray={ISRAEL_OPS_TIMELINE} label="Israel ops" warDay={todayWarDay} /></div>
        <DefenseStack country="Israel"/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))",gap:8,marginBottom:20}}>
          {israelKpis.map((x,i) => (
            <div key={i} style={{background:C.surfaceAlt,border:"1px solid "+C.border,borderRadius:6,padding:"10px 12px",borderTop:"2px solid "+ilColor}}>
              <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.8,textTransform:"uppercase",marginBottom:4}}>{x.k}</div>
              <div style={{fontSize:FONT.body,fontWeight:800,color:ilColor,fontFamily:"'JetBrains Mono',monospace",lineHeight:1}}>{x.v}</div>
            </div>
          ))}
        </div>
        <div style={{...cardBg,background:C.surfaceAlt}}>
          <div style={{fontSize:FONT.table,fontWeight:700,color:C.text,marginBottom:8}}>Interceptor Depletion</div>
          <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.75,marginBottom:14}}>{b2c.execSummary}</div>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:ilColor,fontFamily:"'JetBrains Mono',monospace",marginBottom:10}}>KEY FINDINGS</div>
          {(Array.isArray(b2c.keyFindings)?b2c.keyFindings:[]).map((f,i) => (
            <div key={i} style={{display:"flex",gap:8,marginBottom:10,lineHeight:1.6}}>
              <span style={{fontSize:FONT.table,fontWeight:800,color:ilColor,fontFamily:"'JetBrains Mono',monospace",flexShrink:0}}>{i+1}.</span>
              <span style={{fontSize:FONT.label,color:C.textMuted}}>{f}</span>
            </div>
          ))}
        </div>
        <div style={cardBg}>
          <div style={{fontSize:FONT.table,fontWeight:700,color:C.text,marginBottom:8}}>US Offensive Context</div>
          <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.75}}>{b2b.execSummary}</div>
        </div>
        <div style={cardBg}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.2,textTransform:"uppercase",color:ilColor,fontFamily:"'JetBrains Mono',monospace",marginBottom:8}}>ISRAEL OPS TIMELINE (INGEST)</div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:FONT.label}}>
              <thead><tr>{["Day","Date","Event","Detail","Conf"].map((h,i)=><th key={i} style={{...S_TH,textAlign:i>=3?"left":"center"}}>{h}</th>)}</tr></thead>
              <tbody>
                {ISRAEL_OPS_TIMELINE.slice().reverse().map((r,i)=>(
                  <tr key={i} style={{background:i%2===0?"transparent":C.surfaceAlt+"40"}}>
                    <td style={S_TD}>{r.day}</td><td style={S_TD}>{r.date}</td><td style={S_TD}>{r.event}</td>
                    <td style={{...S_TD,textAlign:"left",maxWidth:360}}>{r.detail}</td><td style={S_TD}><ConfBadge conf={r.conf}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderOmanTable = () => (
    <div>
      <SectionHeader title="Oman — Incident Reports" subtitle="Port of Duqm, Salalah, Sohar — incident-only reporting" color={C.sea}/>
      <div style={{background:C.surfaceAlt,border:"1px solid "+C.sea+"30",borderRadius:8,padding:14,marginBottom:14}}>
        <div style={{fontSize:FONT.small,color:C.sea,fontFamily:"'JetBrains Mono',monospace",fontWeight:700,marginBottom:6}}>CONTEXT</div>
        <div style={{fontSize:FONT.small,color:C.textMuted,lineHeight:1.7}}>Oman was the only GCC state not targeted on Day 1. Attacks began Day 2 (Duqm port, tanker MKD VYOM off Muscat). Incident-based reporting only — no daily intercept cumulative from Oman MoD. Duqm and Salalah port operations suspended. Sohar Industrial Area struck Day 14. Oman maintains quiet diplomatic channel with Iran.</div>
      </div>
      <div style={{overflowX:"auto"}}>
        <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:FONT.table}}>
          <thead><tr>
            {["Date","Day","Drones","Deaths","Inj","Conf","Note"].map((h,i) =>
              <th key={i} style={{...S_TH,textAlign:i>=6?"left":"center"}}>{h}</th>
            )}
          </tr></thead>
          <tbody>
            {OMAN_DATA.slice().reverse().map((row,idx) => (
              <tr key={idx} style={{background:idx%2===0?"transparent":C.surfaceAlt+"40"}}>
                <td style={{...S_TD,textAlign:"center",fontWeight:600,color:C.text,whiteSpace:"nowrap"}}>{row.date}</td>
                <td style={{...S_TD,textAlign:"center",color:C.textMuted}}>{row.day}</td>
                <td style={{...S_TD,textAlign:"center",color:row.U!=null?C.drone:C.nr,fontFamily:"'JetBrains Mono',monospace"}}>{row.U!=null?row.U:"—"}</td>
                <td style={{...S_TD,textAlign:"center",color:row.deaths>0?C.peak:C.textDim}}>{row.deaths||0}</td>
                <td style={{...S_TD,textAlign:"center",color:C.textDim}}>{row.inj!=null?row.inj:"—"}</td>
                <td style={{...S_TD,textAlign:"center"}}>{row.conf?<ConfBadge conf={row.conf}/>:"—"}</td>
                <td style={{...S_TD,fontSize:FONT.small,color:C.textDim,maxWidth:300,lineHeight:1.5}}>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderIraqTable = () => (
    <div>
      <SectionHeader title="Iraq — Incident Reports" subtitle="Erbil, Baghdad, Mala Qara — incident-only reporting, no national MoD counts" color={C.textMuted}/>
      <div style={{background:C.surfaceAlt,border:"1px solid "+C.textMuted+"30",borderRadius:8,padding:14,marginBottom:14}}>
        <div style={{fontSize:FONT.small,color:C.textMuted,fontFamily:"'JetBrains Mono',monospace",fontWeight:700,marginBottom:6}}>CONTEXT</div>
        <div style={{fontSize:FONT.small,color:C.textMuted,lineHeight:1.7}}>Iraq is a US ally that is ALSO home to Iran-aligned Popular Mobilization Forces (PMF). Islamic Resistance in Iraq claimed 67+ attacks in first 3 days. US bases (Al Asad, Baghdad embassy) under daily rocket/drone attack. Erbil and Baghdad airports targeted. Green Zone receives regular indirect fire. Iraq MoD does not issue intercept data — incidents tracked from individual reporting.</div>
      </div>
      <div style={{overflowX:"auto"}}>
        <table style={{width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:FONT.table}}>
          <thead><tr>
            {["Date","Day","Note"].map((h,i) =>
              <th key={i} style={{...S_TH,textAlign:i>=2?"left":"center"}}>{h}</th>
            )}
          </tr></thead>
          <tbody>
            {IRAQ_DATA.slice().reverse().map((row,idx) => (
              <tr key={idx} style={{background:idx%2===0?"transparent":C.surfaceAlt+"40"}}>
                <td style={{...S_TD,textAlign:"center",fontWeight:600,color:C.text,whiteSpace:"nowrap"}}>{row.date}</td>
                <td style={{...S_TD,textAlign:"center",color:C.textMuted}}>{row.day}</td>
                <td style={{...S_TD,fontSize:FONT.small,color:C.textDim,lineHeight:1.5}}>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderRequests = () => {
    const purple = "#a78bfa";
    const formatTime = (iso) => {
      try {
        const d = new Date(iso);
        const now = new Date();
        const diff = now - d;
        if (diff < 60000) return "just now";
        if (diff < 3600000) return Math.floor(diff/60000) + "m ago";
        if (diff < 86400000) return Math.floor(diff/3600000) + "h ago";
        return d.toLocaleDateString("en-US", { month:"short", day:"numeric" }) + " " + d.toLocaleTimeString("en-US", { hour:"2-digit", minute:"2-digit" });
      } catch(e) { return iso; }
    };
    return (
      <div>
        <div style={{background:C.surfaceAlt,border:"1px solid "+purple+"30",borderRadius:8,padding:20,marginBottom:20}}>
          <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:purple,marginBottom:6,fontFamily:"'JetBrains Mono',monospace"}}>REQUESTS & UPDATES</div>
          <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.6,marginBottom:16}}>Submit feature requests, data corrections, source suggestions, or general feedback. All messages are public and visible to other tracker users.</div>

          {/* Post form */}
          <div style={{background:C.surface,border:"1px solid "+C.border,borderRadius:8,padding:16,marginBottom:16}}>
            <div style={{display:"flex",gap:10,marginBottom:10,flexWrap:"wrap"}}>
              <input type="text" value={blogAuthor} onChange={e=>setBlogAuthor(e.target.value)} placeholder="Your name or alias" maxLength={80}
                style={{flex:"1 1 200px",padding:"8px 12px",borderRadius:6,border:"1px solid "+C.border,background:C.bg,color:C.text,fontSize:FONT.label,fontFamily:"'DM Sans',sans-serif",outline:"none"}}/>
              <select value={blogText.startsWith("[") ? blogText.match(/^\[([^\]]+)\]/)?.[1] || "" : ""} onChange={e=>{
                if (e.target.value) setBlogText("["+e.target.value+"] ");
              }} style={{padding:"8px 12px",borderRadius:6,border:"1px solid "+C.border,background:C.bg,color:C.textMuted,fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer"}}>
                <option value="">Tag (optional)</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Data Correction">Data Correction</option>
                <option value="Source Suggestion">Source Suggestion</option>
                <option value="Bug Report">Bug Report</option>
                <option value="General">General</option>
              </select>
            </div>
            <textarea value={blogText} onChange={e=>setBlogText(e.target.value)} placeholder="Describe your request, correction, or suggestion..." maxLength={2000} rows={3}
              style={{width:"100%",padding:"10px 12px",borderRadius:6,border:"1px solid "+C.border,background:C.bg,color:C.text,fontSize:FONT.label,fontFamily:"'DM Sans',sans-serif",lineHeight:1.6,resize:"vertical",outline:"none",boxSizing:"border-box"}}/>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:10}}>
              <div style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{blogText.length}/2000</div>
              <button type="button" onClick={postBlogMessage} disabled={blogPosting || !blogAuthor.trim() || !blogText.trim()}
                style={{padding:"8px 20px",borderRadius:6,border:"none",background:(!blogAuthor.trim()||!blogText.trim())?C.border:C.purple,color:(!blogAuthor.trim()||!blogText.trim())?C.textDim:C.white,fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:(!blogAuthor.trim()||!blogText.trim())?"not-allowed":"pointer",letterSpacing:0.5,opacity:blogPosting?0.6:1}}>
                {blogPosting ? "POSTING..." : "SUBMIT"}
              </button>
            </div>
            {blogError && <div style={{marginTop:8,fontSize:FONT.small,color:C.peak,fontFamily:"'JetBrains Mono',monospace"}}>{blogError}</div>}
          </div>
        </div>

        {/* Messages list */}
        <div style={{background:C.surface,border:"1px solid "+C.border,borderRadius:8,padding:20}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
            <div style={{fontSize:FONT.small,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>
              {blogLoading ? "LOADING..." : blogMessages.length + " MESSAGE" + (blogMessages.length !== 1 ? "S" : "")}
            </div>
            <button type="button" onClick={fetchBlogMessages} style={{padding:"4px 10px",borderRadius:4,border:"1px solid "+C.border,background:C.surfaceAlt,color:C.textMuted,fontSize:FONT.small,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer"}}>↻ Refresh</button>
          </div>

          {blogMessages.length === 0 && !blogLoading && (
            <div style={{textAlign:"center",padding:"40px 20px",color:C.textDim}}>
              <div style={{fontSize:24,marginBottom:8}}>💬</div>
              <div style={{fontSize:FONT.label,color:C.textMuted}}>No messages yet. Be the first to post a request or suggestion.</div>
            </div>
          )}

          {blogMessages.map((msg, idx) => {
            const tagMatch = msg.text.match(/^\[([^\]]+)\]\s*/);
            const tag = tagMatch ? tagMatch[1] : null;
            const body = tagMatch ? msg.text.slice(tagMatch[0].length) : msg.text;
            const tagCol = {
              "Feature Request":"#3b82f6","Data Correction":"#f59e0b","Source Suggestion":"#10b981","Bug Report":"#ef4444","General":"#8b5cf6"
            }[tag] || purple;
            return (
              <div key={msg.id || idx} style={{padding:"14px 0",borderBottom:idx < blogMessages.length - 1 ? "1px solid "+C.border : "none"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <span style={{fontSize:FONT.label,fontWeight:700,color:C.text}}>{msg.author}</span>
                    {tag && <span style={{fontSize:FONT.small,padding:"2px 6px",borderRadius:3,background:tagCol+"18",color:tagCol,fontFamily:"'JetBrains Mono',monospace",fontWeight:700}}>{tag}</span>}
                  </div>
                  <span style={{fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace"}}>{formatTime(msg.ts)}</span>
                </div>
                <div style={{fontSize:FONT.label,color:C.textMuted,lineHeight:1.65,whiteSpace:"pre-wrap"}}>{body}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const tabContent = {"War Room":renderWarRoom,UAE:renderUAETable,Qatar:renderQatarTable,Bahrain:renderBahrainTable,Saudi:renderSaudiTable,Kuwait:renderKuwaitTable,"Gulf Countries":renderOverview,Overview:renderOverview,Timeline:renderTimeline,Map:renderMap,Casualties:renderCasualties,Economics:renderEconomics,Markets:renderMarkets,Iran:renderIran,Analytics:renderAnalytics,Sources:renderSources,Ingest:renderIngest,US:renderUS,Israel:renderIsrael,Oman:renderOmanTable,Iraq:renderIraqTable,Requests:renderRequests};

  return (
    <div style={{fontFamily:"'DM Sans','Segoe UI',sans-serif",background:C.bg,color:C.text,minHeight:"100vh",padding:0}}>
      {/* ═══ Sticky Top Bar + Header + Primary Tabs ═══ */}
      <div style={{position:"sticky",top:0,zIndex:100,background:C.bg,boxShadow:"0 2px 8px rgba(0,0,0,0.3)"}}>
        {/* Gradient bar */}
        <div style={{height:3,background:"linear-gradient(90deg,"+C.ballistic+","+C.drone+","+C.cruise+","+C.accent+")"}}/>

        {/* Top utility row: status pills (left) + title (center) + hamburger (right) */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 16px 2px"}}>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            {/* ℹ Meta badge (green status pill) */}
            <div style={{position:"relative"}}>
              <button onClick={()=>setMetaBadgeOpen(!metaBadgeOpen)} aria-label="Tracker status" style={{padding:"3px 10px",background:"transparent",border:"1px solid "+C.borderLight,borderRadius:4,color:C.textMuted,fontSize:FONT.badge,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",display:"flex",alignItems:"center",gap:5}}>
                <span style={{width:6,height:6,borderRadius:"50%",background:dataHealth.ok?C.reduction:C.peak,boxShadow:"0 0 4px "+(dataHealth.ok?C.reduction:C.peak)+"80",display:"inline-block"}}/>
                {safeSrcCount()}src · D{warDayRef} · v{DATA_SCHEMA_VERSION}
              </button>
              {metaBadgeOpen && (
                <div style={{position:"absolute",top:"100%",left:0,marginTop:4,background:C.surface,border:"1px solid "+C.border,borderRadius:8,padding:14,minWidth:280,zIndex:200,boxShadow:"0 8px 24px rgba(0,0,0,0.5)"}}>
                  <div style={{fontSize:FONT.small,fontWeight:700,color:C.text,fontFamily:"'JetBrains Mono',monospace",marginBottom:8}}>TRACKER STATUS</div>
                  <div style={{fontSize:FONT.small,color:C.textMuted,lineHeight:1.8,fontFamily:"'JetBrains Mono',monospace"}}>
                    <div>Date range: Feb 28 → {warDayDate}, 2026</div>
                    <div>Sources: {safeSrcCount()} · Feeder outlets: {safeFeederCount()}</div>
                    <div>Schema: v{DATA_SCHEMA_VERSION}</div>
                    <div style={{color:dataHealth.ok?C.reduction:C.peak,fontWeight:700}}>{dataHealth.ok ? "● DATA HEALTH OK" : "● DATA VALIDATION ISSUES"}</div>
                    {!dataHealth.ok && <div style={{color:C.peak}}>{dataHealth.errors.join(" · ")}</div>}
                    {dataHealth.warnings.length > 0 && <div style={{color:C.drone,fontSize:FONT.small}}>Warnings: {dataHealth.warnings.slice(0,6).join(" · ")}</div>}
                    <div style={{marginTop:4}}>{headerStaleLines.length > 0 ? headerStaleLines.map((h,i)=><span key={i}><span style={{color:C.peak}}>●</span> {h.name}: {h.lag}d behind (D{h.lastDay}){i<headerStaleLines.length-1?" · ":""}</span>) : <span><span style={{color:C.reduction}}>●</span> All tables within cadence</span>}</div>
                  </div>
                  <button onClick={()=>setMetaBadgeOpen(false)} style={{marginTop:8,padding:"3px 10px",fontSize:FONT.badge,background:"transparent",border:"1px solid "+C.border,borderRadius:4,color:C.textDim,cursor:"pointer",fontFamily:"'JetBrains Mono',monospace"}}>Close</button>
                </div>
              )}
            </div>
            {/* War Day badge (red pill) */}
            <div style={{padding:"3px 10px",background:C.peak+"14",border:"1px solid "+C.peak+"40",borderRadius:4,fontSize:FONT.small,fontWeight:800,fontFamily:"'JetBrains Mono',monospace",color:C.peak,whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:5}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:C.peak,boxShadow:"0 0 6px "+C.peak+"80",animation:"pulse 2s infinite",display:"inline-block"}}/>
              DAY {todayWarDay}{warDayLag > 0 ? <span style={{color:C.drone,fontWeight:600}}> · data D{warDayRef} ⚠</span> : <span> · {warDayDate}</span>}
            </div>
            {/* Data freshness badge */}
            <div style={{padding:"3px 8px",background:warDayLag<=1?C.reduction+"14":C.drone+"14",border:"1px solid "+(warDayLag<=1?C.reduction:C.drone)+"40",borderRadius:4,fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",color:warDayLag<=1?C.reduction:C.drone,whiteSpace:"nowrap"}}>
              Updated: {warDayDate}
            </div>
          </div>
          {/* Center title */}
          <div style={{flex:1,textAlign:"center",paddingX:16}}>
            <h1 style={{fontSize:14,fontWeight:800,margin:0,lineHeight:1.1,letterSpacing:-0.5,color:C.text}}>Iran–US–Intelligence-Tracker</h1>
          </div>
          {/* Hamburger (right) */}
          <div style={{position:"relative"}}>
            <button onClick={()=>setHamburgerOpen(!hamburgerOpen)} aria-label="Menu" style={{padding:"4px 8px",background:"transparent",border:"1px solid "+C.borderLight,borderRadius:4,color:C.textMuted,fontSize:FONT.body,cursor:"pointer",fontFamily:"'JetBrains Mono',monospace",lineHeight:1}} title="Menu">☰</button>
            {hamburgerOpen && (
              <div style={{position:"absolute",top:"100%",right:0,marginTop:4,background:C.surface,border:"1px solid "+C.border,borderRadius:8,padding:10,minWidth:280,zIndex:200,boxShadow:"0 8px 24px rgba(0,0,0,0.5)",maxHeight:"80vh",overflowY:"auto"}}>

                {/* War Room */}
                <div style={{marginBottom:8}}>
                  <button onClick={()=>{setActiveTab("War Room");setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"7px 8px",background:activeTab==="War Room"?C.accentBg:"transparent",border:"none",borderRadius:4,color:activeTab==="War Room"?"#ef4444":C.text,fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer"}}>⚡ War Room</button>
                </div>

                {/* Gulf Countries section */}
                <div style={{marginBottom:8}}>
                  <button onClick={()=>{setActiveTab("Gulf Countries");setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"7px 8px",background:activeTab==="Gulf Countries"?C.accentBg:"transparent",border:"none",borderRadius:4,color:activeTab==="Gulf Countries"?C.accent:C.text,fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer"}}>🌍 Gulf Countries</button>
                  <div style={{paddingLeft:20}}>
                    {["UAE","Qatar","Bahrain","Saudi","Kuwait","Oman","Iraq","Map"].map(tab => (
                      <button key={tab} onClick={()=>{setActiveTab(tab);setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"4px 8px",background:activeTab===tab?C.accentBg:"transparent",border:"none",borderRadius:3,color:activeTab===tab?C.accent:C.textMuted,fontSize:FONT.small,fontWeight:500,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",marginBottom:2}}>∟ {tab}</button>
                    ))}
                  </div>
                </div>

                {/* Economics section */}
                <div style={{marginBottom:8}}>
                  <button onClick={()=>{setActiveTab("Economics");setEconSubTab("fdi");setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"7px 8px",background:activeTab==="Economics"?C.accentBg:"transparent",border:"none",borderRadius:4,color:activeTab==="Economics"?C.reduction:C.text,fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer"}}>◆ Economics</button>
                  <div style={{paddingLeft:20}}>
                    {[
                      {k:"fdi",l:"FDI & Sovereign Wealth"},
                      {k:"fx",l:"Currency & Capital Flows"},
                      {k:"food",l:"Food Security"}
                    ].map(t => (
                      <button key={t.k} onClick={()=>{setActiveTab("Economics");setEconSubTab(t.k);setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"4px 8px",background:econSubTab===t.k&&activeTab==="Economics"?C.accentBg:"transparent",border:"none",borderRadius:3,color:econSubTab===t.k&&activeTab==="Economics"?C.accent:C.textMuted,fontSize:FONT.small,fontWeight:500,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",marginBottom:2}}>∟ {t.l}</button>
                    ))}
                  </div>
                </div>

                {/* Markets section */}
                <div style={{marginBottom:8}}>
                  <button onClick={()=>{setActiveTab("Markets");setMktSubTab("tour");setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"7px 8px",background:activeTab==="Markets"?C.accentBg:"transparent",border:"none",borderRadius:4,color:activeTab==="Markets"?C.cyan:C.text,fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer"}}>◆ Markets</button>
                  <div style={{paddingLeft:20}}>
                    {[
                      {k:"tour",l:"Tourism & Hospitality"},
                      {k:"semi",l:"Semiconductors"}
                    ].map(t => (
                      <button key={t.k} onClick={()=>{setActiveTab("Markets");setMktSubTab(t.k);setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"4px 8px",background:mktSubTab===t.k&&activeTab==="Markets"?C.accentBg:"transparent",border:"none",borderRadius:3,color:mktSubTab===t.k&&activeTab==="Markets"?C.accent:C.textMuted,fontSize:FONT.small,fontWeight:500,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",marginBottom:2}}>∟ {t.l}</button>
                    ))}
                  </div>
                </div>

                {/* Casualties */}
                <button onClick={()=>{setActiveTab("Casualties");setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"7px 8px",background:activeTab==="Casualties"?C.accentBg:"transparent",border:"none",borderRadius:4,color:activeTab==="Casualties"?C.ballistic:C.text,fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",marginBottom:8}}>✝ Casualties</button>

                {/* Analytics section */}
                <div style={{marginBottom:8}}>
                  <button onClick={()=>{setActiveTab("Analytics");setAnalyticsSubTab("mix");setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"7px 8px",background:activeTab==="Analytics"?C.accentBg:"transparent",border:"none",borderRadius:4,color:activeTab==="Analytics"?C.magenta:C.text,fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer"}}>✨ Analytics</button>
                  <div style={{paddingLeft:20}}>
                    {ANALYTICS_SUBS.map(t => (
                      <button key={t.key} onClick={()=>{setActiveTab("Analytics");setAnalyticsSubTab(t.key);setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"4px 8px",background:analyticsSubTab===t.key&&activeTab==="Analytics"?C.accentBg:"transparent",border:"none",borderRadius:3,color:analyticsSubTab===t.key&&activeTab==="Analytics"?C.accent:C.textMuted,fontSize:FONT.small,fontWeight:500,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",marginBottom:2}}>∟ {t.label}</button>
                    ))}
                  </div>
                </div>

                {/* Separator */}
                <div style={{borderTop:"1px solid "+C.border,margin:"8px 0"}}/>

                {/* Iran section */}
                <div style={{marginBottom:8}}>
                  <button onClick={()=>{setActiveTab("Iran");setIranSubTab("claims");setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"7px 8px",background:activeTab==="Iran"?C.accentBg:"transparent",border:"none",borderRadius:4,color:activeTab==="Iran"?C.orange:C.text,fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer"}}>⚔ Iran</button>
                  <div style={{paddingLeft:20}}>
                    {IRAN_SUBTABS.map(t => (
                      <button key={t.k} onClick={()=>{setActiveTab("Iran");setIranSubTab(t.k);setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"4px 8px",background:iranSubTab===t.k&&activeTab==="Iran"?C.accentBg:"transparent",border:"none",borderRadius:3,color:iranSubTab===t.k&&activeTab==="Iran"?C.accent:C.textMuted,fontSize:FONT.small,fontWeight:500,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",marginBottom:2}}>∟ {t.l}</button>
                    ))}
                  </div>
                </div>

                {/* US */}
                <button onClick={()=>{setActiveTab("US");setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"7px 8px",background:activeTab==="US"?C.accentBg:"transparent",border:"none",borderRadius:4,color:activeTab==="US"?C.blue:C.text,fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",marginBottom:8}}>★ US</button>

                {/* Israel */}
                <button onClick={()=>{setActiveTab("Israel");setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"7px 8px",background:activeTab==="Israel"?C.accentBg:"transparent",border:"none",borderRadius:4,color:activeTab==="Israel"?"#60a5fa":C.text,fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",marginBottom:8}}>✡ Israel</button>

                {/* Timeline */}
                <button onClick={()=>{setActiveTab("Timeline");setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"7px 8px",background:activeTab==="Timeline"?C.accentBg:"transparent",border:"none",borderRadius:4,color:activeTab==="Timeline"?C.text:C.text,fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",marginBottom:8}}>📅 Timeline</button>

                {/* Separator */}
                <div style={{borderTop:"1px solid "+C.border,margin:"8px 0"}}/>

                {/* Sources section */}
                <div style={{marginBottom:8}}>
                  <button onClick={()=>{setActiveTab("Sources");setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"7px 8px",background:activeTab==="Sources"?C.accentBg:"transparent",border:"none",borderRadius:4,color:activeTab==="Sources"?C.drone:C.text,fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer"}}>📚 Sources</button>
                  <div style={{paddingLeft:20}}>
                    {[
                      {k:"outlets",l:"Outlets"},
                      {k:"glossary",l:"Glossary"},
                      {k:"provenance",l:"Provenance"}
                    ].map(t => (
                      <button key={t.k} onClick={()=>{setActiveTab("Sources");setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"4px 8px",background:"transparent",border:"none",borderRadius:3,color:C.textMuted,fontSize:FONT.small,fontWeight:500,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",marginBottom:2}}>∟ {t.l}</button>
                    ))}
                  </div>
                </div>

                {/* Requests */}
                <button onClick={()=>{setActiveTab("Requests");setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"7px 8px",background:activeTab==="Requests"?C.accentBg:"transparent",border:"none",borderRadius:4,color:activeTab==="Requests"?C.purple:C.text,fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",marginBottom:8}}>💬 Requests</button>

                {/* Separator */}
                <div style={{borderTop:"1px solid "+C.border,marginTop:4,paddingTop:4,marginBottom:4}}>
                  <button onClick={()=>{
                    try {
                      const html = document.documentElement.outerHTML;
                      const blob = new Blob([html], {type:"text/html"});
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url; a.download = "IranWarTracker_" + new Date().toISOString().slice(0,10) + ".html"; a.click();
                      setTimeout(() => URL.revokeObjectURL(url), 200);
                    } catch (e) { setIngestError("Download failed: " + e.message); }
                    setHamburgerOpen(false);
                  }} style={{display:"block",width:"100%",textAlign:"left",padding:"5px 8px",background:"transparent",border:"none",borderRadius:4,color:C.textMuted,fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer"}}>⬇ Download Offline HTML</button>
                </div>

                {/* Ingest (admin) */}
                {(!adminRequired || isAdmin) && (
                  <div style={{borderTop:"1px solid "+C.border,marginTop:4,paddingTop:4}}>
                    <button onClick={()=>{setActiveTab("Ingest");setHamburgerOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"5px 8px",background:activeTab==="Ingest"?C.accentBg:"transparent",border:"none",borderRadius:4,color:activeTab==="Ingest"?C.accent:C.textMuted,fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer"}}>⚡ Ingest</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>


        {/* Primary tab row — single horizontal row */}
        <div style={{display:"flex",flexWrap:"wrap",gap:2,padding:"6px 16px 0",borderBottom:"1px solid "+C.border}}>
          {PRIMARY_TABS.map(tab => {
            const isActive = activeTab===tab || (tab==="Gulf Countries" && OVERVIEW_SUBS.includes(activeTab));
            return (
              <button key={tab} onClick={()=>{setActiveTab(tab);setHamburgerOpen(false);}} style={{
                padding:"6px 12px",fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",
                background:isActive?C.surface:"transparent",
                color:isActive?TAB_COLOR_FN(tab):C.textMuted,
                border:"none",borderBottom:isActive?"2px solid "+TAB_COLOR_FN(tab):"2px solid transparent",
                cursor:"pointer",letterSpacing:0.4,transition:"all 0.15s",whiteSpace:"nowrap",marginBottom:"-1px",
              }}>{TAB_ICON_FN(tab)?(TAB_ICON_FN(tab)+" "+tab):tab}</button>
            );
          })}
          {/* Row 2: Iran / US / Israel as independent tabs */}
          <div style={{display:"flex",gap:2,marginLeft:16,borderLeft:"1px solid "+C.border,paddingLeft:12}}>
            {ROW2_TABS.map(tab => {
              const isActive = activeTab===tab;
              return (
                <button key={tab} onClick={()=>{setActiveTab(tab);setHamburgerOpen(false);}} style={{
                  padding:"6px 12px",fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",
                  background:isActive?C.surface:"transparent",
                  color:isActive?TAB_COLOR_FN(tab):C.textMuted,
                  border:"none",borderBottom:isActive?"2px solid "+TAB_COLOR_FN(tab):"2px solid transparent",
                  cursor:"pointer",letterSpacing:0.4,transition:"all 0.15s",whiteSpace:"nowrap",marginBottom:"-1px",
                }}>{TAB_ICON_FN(tab)?(TAB_ICON_FN(tab)+" "+tab):tab}</button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Reload banner after successful apply */}
      {applySuccess && (
        <div style={{margin:"0 28px",padding:"12px 20px",background:"rgba(52,211,153,0.12)",border:"1px solid rgba(52,211,153,0.4)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12}}>
          <div style={{fontSize:FONT.table,color:C.reduction,fontWeight:700,fontFamily:"'JetBrains Mono',monospace"}}>
            {applySuccess.rowsAdded} row{applySuccess.rowsAdded>1?"s":""} written to file · {(applySuccess.modified||[]).join(", ")}
            {applySuccess.warnings?.length > 0 && <span style={{color:C.drone,fontWeight:400,marginLeft:8}}>{applySuccess.warnings.length} warning{applySuccess.warnings.length>1?"s":""}</span>}
          </div>
          <div style={{display:"flex",gap:8}}>
            <button onClick={()=>window.location.reload()} style={{padding:"6px 16px",fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",background:C.reduction,color:C.white,border:"none",borderRadius:5,cursor:"pointer"}}>Reload to see changes</button>
            <button onClick={()=>setApplySuccess(null)} style={{padding:"6px 10px",fontSize:FONT.label,fontFamily:"'JetBrains Mono',monospace",background:"transparent",color:C.textDim,border:"1px solid "+C.border,borderRadius:5,cursor:"pointer"}}>Dismiss</button>
          </div>
        </div>
      )}

      {/* Live-reload banner — data updated by cron/auto-ingest while page was open */}
      {fileUpdateAvailable && !applySuccess && (
        <div style={{margin:"0 28px",padding:"12px 20px",background:"rgba(167,139,250,0.10)",border:"1px solid rgba(167,139,250,0.4)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,animation:"pulse 2s ease-in-out infinite"}}>
          <div style={{fontSize:FONT.table,fontFamily:"'JetBrains Mono',monospace"}}>
            <span style={{color:C.purple,fontWeight:700}}>New data available</span>
            <span style={{color:C.textMuted,marginLeft:8}}>The tracker was updated in the background (auto-ingest or manual apply).</span>
          </div>
          <div style={{display:"flex",gap:8}}>
            <button onClick={()=>window.location.reload()} style={{padding:"6px 16px",fontSize:FONT.label,fontWeight:700,fontFamily:"'JetBrains Mono',monospace",background:C.purple,color:"#fff",border:"none",borderRadius:5,cursor:"pointer"}}>Reload Now</button>
            <button onClick={()=>setFileUpdateAvailable(false)} style={{padding:"6px 10px",fontSize:FONT.label,fontFamily:"'JetBrains Mono',monospace",background:"transparent",color:C.textDim,border:"1px solid "+C.border,borderRadius:5,cursor:"pointer"}}>Dismiss</button>
          </div>
        </div>
      )}

      {/* Content */}
      <div style={{padding:"20px 28px"}}>
        <div style={{background:C.surface,border:"1px solid "+C.border,borderRadius:8,overflow:"hidden"}}>
          <div style={{padding:"12px 20px 10px",borderBottom:"1px solid "+C.border,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
            <div>
              <Breadcrumb activeTab={activeTab} iranSubTab={iranSubTab} onNavigate={setActiveTab}/>
              <span style={{fontSize:FONT.body,fontWeight:700}}>{activeTab}</span>
              <span style={{fontSize:FONT.label,color:C.textDim,marginLeft:10}}>
                {({"War Room":"Priority intelligence feed · auto-pinned by severity","Gulf Countries":"Cross-country comparison + damage log",Overview:"Cross-country comparison + damage log",Bahrain:"Cumulative Δ reconstruction (BDF methodology)",Analytics:"Threat mix · Intercept trends · Defense stability · Scenario modeller · Target types",Sources:"Catalogue · Provenance matrix · Source impact · Feeder outlets — "+safeSrcCount()+" sources",Ingest:"Auto-ingest pipeline · scan web for updates · apply directly to file",Map:"Confirmed penetration / damage incidents plotted across Gulf",Casualties:"Day × Country timeline · US & coalition deaths · civilian casualties",Economics:"Refinery shutdowns · Force Majeure · Hormuz · oil price impact",Markets:"Oil prices · Shipping · Insurance · Equity · CDS",Iran:"IRGC claims · Weapon ID · Disinformation · Claim vs Reality reconciliation",US:"Operation Epic Fury — targets, munitions, cost, sustainability",Israel:"Operation Roaring Lion — IAF strikes, interceptor depletion crisis"}[activeTab] || "Daily intercepted / detected · Confidence-rated")}
              </span>
            </div>
            {!["War Room","Analytics","Sources","Gulf Countries","Overview","Timeline","Map","Ingest","Casualties","Economics","Markets","Iran","US","Israel"].includes(activeTab) && <div style={{display:"flex",gap:6}}>
              {PHASE_DEFINITIONS.map(p => <span key={p.id} style={{fontSize:FONT.small,padding:"2px 8px",borderRadius:3,fontFamily:"'JetBrains Mono',monospace",fontWeight:600,background:p.color+"10",color:p.color,border:"1px solid "+p.color+"25"}}>Ph {p.num}: {p.id===3?"D12–"+warDayRef+"+":p.days}</span>)}
            </div>}
          </div>
          {(activeTab==="Gulf Countries" || activeTab==="Overview" || OVERVIEW_SUBS.includes(activeTab)) && (
            <div style={{padding:"12px 20px",borderTop:"1px solid "+C.border,display:"flex",flexWrap:"nowrap",gap:8,alignItems:"center",background:"rgba(255,255,255,0.02)",overflowX:"auto"}}>
              {OVERVIEW_SUBS.map(tab => (
                <button key={tab} onClick={()=>setActiveTab(tab)} style={{padding:"7px 18px",fontSize:FONT.label,fontWeight:activeTab===tab?800:600,fontFamily:"'JetBrains Mono',monospace",background:activeTab===tab?TAB_COLOR_FN(tab):"rgba(255,255,255,0.08)",color:activeTab===tab?"#080b12":C.textMuted,border:activeTab===tab?"2px solid "+TAB_COLOR_FN(tab):"1px solid rgba(255,255,255,0.18)",borderRadius:6,cursor:"pointer",letterSpacing:0.3,whiteSpace:"nowrap",transition:"all 0.15s",boxShadow:activeTab===tab?"0 0 8px "+TAB_COLOR_FN(tab)+"44":"none"}}>{tab==="Map"?"◉ Map":tab}</button>
              ))}
            </div>
          )}
          <div style={{padding:["War Room","Analytics","Sources","Gulf Countries","Overview","Timeline","Map","Ingest","Casualties","Economics","Markets","Iran","US","Israel","Requests"].includes(activeTab)?"16px 16px":"0 4px 4px",maxHeight:"75vh",overflowY:["War Room","Economics","Markets","Casualties","Gulf Countries","Overview","Sources","Iran","Analytics","US","Israel","Requests"].includes(activeTab)?"auto":"visible",overflowX:"hidden"}}>
            <TabErrorBoundary tabKey={activeTab}>{tabContent[activeTab]?.()}</TabErrorBoundary>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{position:"sticky",bottom:0,zIndex:50,padding:"8px 16px",fontSize:FONT.small,color:C.textDim,fontFamily:"'JetBrains Mono',monospace",lineHeight:1.5,display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid "+C.border,background:C.bg,boxShadow:"0 -2px 8px rgba(0,0,0,0.2)"}}>
        <div style={{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis"}}>
          <span style={{fontWeight:700,color:C.textMuted}}>METHODOLOGY:</span> Confidence-rated per data point (H/M/L). n/r {"≠"} zero. {"Δ"} = daily change. All data as of {(() => { const d = new Date(2026, 1, 27 + warDayRef); return d.toLocaleDateString("en-US", {month:"short", day:"numeric"}); })()} (Day {warDayRef}). Last updated: {new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}. Conflict ongoing.
        </div>
        <div style={{display:"flex",gap:10,alignItems:"center",flexShrink:0,marginLeft:16}}>
          {isAdmin ? (
            <button onClick={doAdminLogout} style={{padding:"3px 10px",background:"#a78bfa18",border:"1px solid #a78bfa40",borderRadius:4,color:"#a78bfa",fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",display:"flex",alignItems:"center",gap:4}}>🔓 Admin</button>
          ) : (
            <button onClick={()=>setAdminLoginOpen(true)} style={{padding:"3px 10px",background:"transparent",border:"1px solid "+C.borderLight,borderRadius:4,color:"#8892a4",fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",display:"flex",alignItems:"center",gap:4}}>🔒 Admin Login</button>
          )}
          <span style={{color:C.accent}}>Chris@JCJinvesting.com</span>
          <button onClick={()=>setActiveTab("Requests")} style={{padding:"3px 10px",background:"transparent",border:"1px solid "+C.borderLight,borderRadius:4,color:"#a78bfa",fontSize:FONT.small,fontWeight:600,fontFamily:"'JetBrains Mono',monospace",cursor:"pointer",display:"flex",alignItems:"center",gap:4}}>💬 Requests</button>
        </div>
      </div>

      {/* Admin Login Modal */}
      {adminLoginOpen && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.78)",zIndex:10001,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>{setAdminLoginOpen(false);setAdminError("");setAdminPw("");}} role="dialog" aria-modal="true" aria-labelledby="admin-login-title">
          <div style={{background:C.surface,border:"1px solid "+C.border,borderRadius:12,maxWidth:380,width:"100%",padding:28,boxShadow:"0 20px 50px rgba(0,0,0,0.6)",outline:"none"}} onClick={e=>e.stopPropagation()}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
              <div id="admin-login-title" style={{fontSize:15,fontWeight:800,display:"flex",alignItems:"center",gap:8}}>
                <span style={{fontSize:FONT.h1}}>🔒</span> Admin Login
              </div>
              <button type="button" onClick={()=>{setAdminLoginOpen(false);setAdminError("");setAdminPw("");}} aria-label="Close" style={{background:"transparent",border:"none",color:C.textDim,cursor:"pointer",fontSize:FONT.h1,lineHeight:1}}>✕</button>
            </div>
            <div style={{fontSize:FONT.label,color:C.textMuted,marginBottom:16,lineHeight:1.5}}>
              Enter the admin password to access the Ingest tab and data management features.
            </div>
            <form onSubmit={e=>{e.preventDefault();doAdminLogin();}}>
              <input
                type="password"
                value={adminPw}
                onChange={e=>setAdminPw(e.target.value)}
                placeholder="Admin password"
                autoFocus
                style={{width:"100%",padding:"10px 14px",background:C.bg,border:"1px solid "+C.border,borderRadius:8,color:C.text,fontSize:FONT.h3,fontFamily:"'JetBrains Mono',monospace",marginBottom:12,outline:"none",transition:"border-color 0.15s"}}
                onFocus={e=>{e.target.style.borderColor=C.accent;}}
                onBlur={e=>{e.target.style.borderColor=C.border;}}
              />
              <label style={{display:"flex",alignItems:"center",gap:8,marginBottom:12,cursor:"pointer",fontSize:FONT.label,color:C.textMuted,userSelect:"none"}}>
                <input type="checkbox" checked={adminRemember} onChange={e=>setAdminRemember(e.target.checked)} style={{accentColor:C.accent,width:16,height:16,cursor:"pointer"}} />
                Remember me on this device
              </label>
              {adminError && (
                <div style={{fontSize:FONT.label,color:C.reduction,marginBottom:12,padding:"8px 12px",background:C.reduction+"12",borderRadius:6,border:"1px solid "+C.reduction+"30"}}>
                  {adminError}
                </div>
              )}
              <button
                type="submit"
                disabled={adminLogging || !adminPw.trim()}
                style={{width:"100%",padding:"10px 0",background:adminLogging||!adminPw.trim()?(C.accent+"40"):C.accent,color:"#fff",border:"none",borderRadius:8,fontSize:FONT.h3,fontWeight:700,cursor:adminLogging||!adminPw.trim()?"not-allowed":"pointer",fontFamily:"'DM Sans',sans-serif",transition:"all 0.15s"}}
              >
                {adminLogging ? "Authenticating…" : "Login"}
              </button>
            </form>
            <div style={{fontSize:FONT.small,color:C.textDim,marginTop:14,textAlign:"center",lineHeight:1.5}}>
              Admin access grants: Ingest tab, data apply, blog moderation.
              <br/>Public viewers can browse all data and download the static HTML.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
