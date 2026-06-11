# VegaReady — `trade_expression` draft (for review)

**Purpose:** turn each of the 30 catalog signals into a fund-ready trade object — the last productization piece. This is a **first pass** grounded in each signal's named assets + classification. **Nothing here is wired into the live site yet** — mark up the instrument/direction/hedge choices to JCJ house conventions and I'll wire the corrected version into `watch-metrics.json` and render it on the signal panels.

**Especially want your eye on:** the **§10 crypto** rows (your domain — you'll have sharper expressions than COIN/MSTR), and anywhere the *direction* or *preferred instrument* doesn't match how you'd actually put the trade on. Predictive = act before; confirming = size once it prints; coincident = nowcast, not edge.

| § | Signal | Instrument(s) | Direction | Hedge / caveat | Horizon |
|---|--------|---------------|-----------|----------------|---------|
| 1.1 | Gold ETF flow divergence | GDX/GDXJ; GLD vs physical/EFP | Long structural gold (miners) on CB bid; watch paper-physical premium | NOT gold-bearish (CB offsets paper outflow) | weeks–months |
| 1.2 | DXY surge + dollar–VIX | UUP long; short EEM/EM-FX; short BTC | Long USD / short EM-FX & BTC | Strategist consensus = mean-reverting; don't chase | days–weeks |
| 1.3 | Yen-carry / BOJ | FXY long (short USDJPY); EWJ short; TLT long | Long JPY, risk-off | Size only off *confirmed* intervention | event |
| 2.1 | EM sovereign spread | EMB/EMHY short; CDX.EM long protection; short EM-importer eq | Short EM credit / long protection | Decompose vs UST beta | weeks |
| 2.2 | Flight-to-quality | BIL/SHV front-UST; MMF; USD | Long front-end UST / cash | The de-risking itself (coincident) | days |
| 2.3 | Gulf petrodollar (TIC) | TLT (duration); USD | Short UST duration / watch term premium | TIC custody noisy, ~2mo lag | months |
| 3.1 | AWRP (Gulf hull) | BNO/Brent; FRO·NAT·DHT long; reinsurers | Long crude floor + tankers | Insurer leads the oil premium | weeks |
| 3.2 | VLCC freight rate | FRO·NAT·DHT; freight FFAs; refiners | Long tankers | Idiosyncratic — NOT a broad-market proxy | days–weeks |
| 3.3 | P&I cover withdrawal | Tanker equities; freight FFAs | Long freight; risk to importers | Restriction ≠ total withdrawal | event |
| 4.1 | LME aluminium | LME alu / JJU; AA; short auto input-cost | Long aluminium | Isolate Gulf-supply vs China-demand | weeks |
| 4.2 | GCC construction inflation | GCC construction/RE eq; property REITs | Short GCC build margins | Separate structural vs conflict inflation | quarters |
| 4.3 | Migrant remittance YoY | Short PKR/INR/PHP; recipient-EM banks | Short recipient-EM FX | Seasonality (Eid/holiday) adjust | months |
| 5.1 | Urea price | CF·NTR·MOS·YARA; wheat/corn futures | Long fertilizer + grains (6–12mo fuse) | The tradeable lag; vs China export policy | 6–12 months |
| 5.2 | FAO Food Price Index | DBA (softs); short Egypt/Pakistan FX | Long softs / short importer FX | Ample stocks muted the pass-through | monthly |
| 5.3 | GCC water reserve | GCC sovereign CDS long protection; short TASI/DFM; water-tech EPC | Long CDS protection (jump hedge) | Jump risk, not continuous — fiscal cushion may absorb | event/tail |
| 6.1 | China REE export YoY | MP·Lynas·Arafura long; magnet/EV; defense input | Long ex-China REE | License noise vs real cut; driver is China not Iran | monthly |
| 6.2 | Interceptor drawdown | LMT·RTX·ITA; replenishment backlog | Long defense (ceasefire-insensitive) | Valuation-cooled — demand ≠ price | multi-quarter |
| 6.3 | Iran HEU / IAEA access | GLD; GVZ/OVX vol long; broad risk-off | Long gold/vol on proliferation jump | Discrete jump — assessments PROVISIONAL | event/jump |
| 7.1 | Hormuz oil transit | Brent long; short EM importers; LNG/fertilizer | Long crude / short importers (master gauge) | Weather/maintenance dips ≠ closure | days–event |
| 7.2 | US effective tariff rate | Short autos/discretionary/semis; long connector econ (MX/VN) | Short tariff-exposed sectors | Announced ≠ effective; driver is US policy not Iran | quarterly |
| 7.3 | Red Sea cable faults | Telecom-resilience/satellite; EM fintech | Long resilience (narrow) | NOT a broad-vol trade (documented false positive) | event |
| 8.1 | Factor / EM-crowding unwind | USMV/QUAL long; MTUM/EM-AI short | Long defensive factors / short momentum | Confirm with breadth; one-week unwinds reverse | weekly |
| 8.2 | Index-vs-stock dispersion | RSP vs SPY; dispersion trades | Long equal-weight vs cap-weight (fragility) | Narrow leadership can persist — flag not trigger | daily |
| 8.3 | TASI–DFM spread | Long TASI energy / short DFM RE+banks (pair); GCC CDS | Pair: long TASI / short DFM | Domestic-investor floors distort short-term | daily |
| 9.1 | OVX (crude vol) | Crude vol / oil options; Brent; energy eq | Long crude vol / energy | Cleanest, low-noise; leads Brent spot | daily |
| 9.2 | Stock–bond correlation | Cut 60/40 duration reliance; equity beta | Reduce diversification reliance (corr positive) | Confirm with inflation-surprise, not the coefficient | weekly |
| 9.3 | VXEEM (EM vol) | EEM puts / EM vol; EM FX·credit | Long EM vol / short EM beta | Less timely than OVX — durable-regime confirm | daily |
| 10.1 | Deribit 25Δ skew | BTC/ETH options (Deribit); risk reversals | Long downside skew / protective puts pre-steepening | Low ATM IV = controlled hedging, not panic · **JCJ confirm** | intraday |
| 10.2 | Perp funding + OI | BTC/ETH perps & futures; CME basis | Fade leveraged longs / basis | CEX OI self-reported (lower bound) · **JCJ confirm** | hourly |
| 10.3 | Spot BTC ETF flow | BTC; COIN/MSTR (§8 bridge); crypto beta | Short crypto beta on outflow streak | Single-day noisy — trade the streak · **JCJ confirm** | daily |

---

**How to mark this up:** edit any cell (instrument, direction, hedge, horizon) — or tell me your house conventions in prose (e.g. "for crypto we express via Deribit perps/options, not COIN/MSTR"; "we cap tanker exposure at X"; "we never short single-name EM sovereigns, only the index"). Once you've corrected it, I'll add a `trade_expression` object per signal to `watch-metrics.json`, regenerate, and render it on each section's signal panel so a card becomes a one-glance trade.

*Draft — not yet in the data or on the site. lastUpdated 2026-06-02.*
