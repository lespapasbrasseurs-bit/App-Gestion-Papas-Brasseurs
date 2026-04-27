/* global React */
const D2 = window.BREWERY_DATA;
const { Desktop } = window;
const { Bottle, Sprig, Chip } = window.UI;

// =============================================================
// DESKTOP HOME
// =============================================================

// ---------- PLAYFUL ----------
function DesktopHomePlayful({ theme }) {
  const persona = "playful";
  return (
    <Desktop theme={theme} persona={persona} active="home"
      title="Bonjour Gabriel"
      breadcrumb="Tableau de bord">
      {/* Top row: KPIs + hero brassin */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1.4fr", gap: 16, marginBottom: 20 }}>
        {/* KPI cards */}
        {[
          { k: "Brassé ce mois", v: D2.kpis.volumeMois.toLocaleString("fr-FR"), u: "L", sub: "+12% vs mars" },
          { k: "Brassins actifs", v: D2.kpis.brassinsActifs, u: "", sub: "2 en fermentation" },
          { k: "Alertes stock",  v: D2.kpis.stockAlerts, u: "", sub: "3 critiques" },
        ].map((kp, i) => (
          <div key={i} style={{
            background: theme.surface, borderRadius: theme.radius,
            padding: "20px 22px",
            border: `1px solid ${theme.line}`, boxShadow: theme.shadow,
          }}>
            <div style={{ fontSize: 10, letterSpacing: 1.6, fontFamily: theme.monoFont, color: theme.inkMute, textTransform: "uppercase" }}>{kp.k}</div>
            <div style={{ fontFamily: theme.headFont, fontSize: 44, fontStyle: "italic", fontWeight: 400, letterSpacing: -1.5, marginTop: 4 }}>
              {kp.v}<span style={{ fontSize: 18, color: theme.accent.warm, marginLeft: 6, fontStyle: "normal", fontWeight: 600 }}>{kp.u}</span>
            </div>
            <div style={{ fontSize: 12, color: theme.inkSoft, marginTop: 6 }}>{kp.sub}</div>
          </div>
        ))}
        {/* Hero card */}
        <div style={{
          background: `linear-gradient(135deg, ${theme.accent.warm} 0%, ${theme.accent.deep} 100%)`,
          borderRadius: theme.radius,
          padding: "20px 22px",
          color: "#FFF", position: "relative", overflow: "hidden",
          boxShadow: `0 24px 48px -24px ${theme.accent.base}77`,
        }}>
          <div style={{ position: "absolute", right: -10, top: -10, opacity: 0.2 }}>
            <Sprig color="#FFFFFF" size={140} opacity={1} />
          </div>
          <div style={{ position: "absolute", right: 8, bottom: -10 }}>
            <Bottle color={theme.accent.soft} size={92} glow label="IMPÈR" />
          </div>
          <div style={{ fontSize: 9, letterSpacing: 2, fontFamily: theme.monoFont, opacity: 0.8 }}>EN FERMENTATION</div>
          <div style={{ fontFamily: theme.headFont, fontSize: 26, fontStyle: "italic", fontWeight: 500, marginTop: 4, maxWidth: "70%", lineHeight: 1.05 }}>
            {D2.hero.recette}
          </div>
          <div style={{ fontSize: 11, opacity: 0.85, marginTop: 4 }}>{D2.hero.style} · {D2.hero.fermenteur}</div>
          <div style={{ marginTop: 14, maxWidth: "65%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, fontFamily: theme.monoFont, marginBottom: 4 }}>
              <span>J{D2.hero.jour} / J{D2.hero.jourTotal}</span>
              <span style={{ opacity: 0.85 }}>{Math.round(D2.hero.jour / D2.hero.jourTotal * 100)}%</span>
            </div>
            <div style={{ height: 5, background: "#FFFFFF22", borderRadius: 999, overflow: "hidden" }}>
              <div style={{ width: `${D2.hero.jour / D2.hero.jourTotal * 100}%`, height: "100%", background: "#FFF" }} />
            </div>
            <div style={{ marginTop: 10, fontSize: 11, opacity: 0.92 }}>▸ <b>{D2.hero.nextAction}</b></div>
          </div>
        </div>
      </div>

      {/* Mid row: Brassins table + Stock alerts */}
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 16, marginBottom: 20 }}>
        {/* Brassins */}
        <div style={{
          background: theme.surface, borderRadius: theme.radius,
          border: `1px solid ${theme.line}`, boxShadow: theme.shadow,
          padding: "20px 0 8px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0 22px 14px" }}>
            <div>
              <div style={{ fontSize: 9, letterSpacing: 1.6, fontFamily: theme.monoFont, color: theme.accent.base, textTransform: "uppercase" }}>EN COURS</div>
              <div style={{ fontFamily: theme.headFont, fontSize: 18, fontStyle: "italic", fontWeight: 500, color: theme.ink, marginTop: 2 }}>Brassins actifs</div>
            </div>
            <div style={{ fontSize: 11, color: theme.accent.base, fontWeight: 600 }}>Tout voir →</div>
          </div>
          {/* Header row */}
          <div style={{
            display: "grid", gridTemplateColumns: "32px 1.6fr 1fr 0.8fr 1.4fr 60px",
            gap: 12, padding: "8px 22px",
            fontSize: 9, letterSpacing: 1.4, fontFamily: theme.monoFont, color: theme.inkMute,
            textTransform: "uppercase", borderBottom: `1px solid ${theme.line}`,
          }}>
            <span>#</span><span>Recette</span><span>Style</span><span>Cuve</span><span>Avancement</span><span>Jour</span>
          </div>
          {D2.brassins.map(b => (
            <div key={b.id} style={{
              display: "grid", gridTemplateColumns: "32px 1.6fr 1fr 0.8fr 1.4fr 60px",
              gap: 12, padding: "12px 22px", alignItems: "center",
              borderBottom: `1px solid ${theme.lineSoft}`,
              fontSize: 13,
            }}>
              <div style={{ width: 8, height: 24, borderRadius: 2, background: b.color }} />
              <div style={{ fontFamily: theme.headFont, fontWeight: 500, fontStyle: "italic", color: theme.ink }}>{b.recette}</div>
              <div style={{ color: theme.inkSoft, fontSize: 12 }}>{b.style}</div>
              <div style={{ fontFamily: theme.monoFont, fontSize: 11, color: theme.inkSoft }}>{b.fermenteur}</div>
              <div>
                <div style={{ height: 4, background: theme.surfaceAlt, borderRadius: 999, overflow: "hidden" }}>
                  <div style={{ width: `${b.jour / b.jourTotal * 100}%`, height: "100%", background: b.color }} />
                </div>
                <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: theme.inkMute, marginTop: 3, textTransform: "uppercase", letterSpacing: 0.5 }}>{b.statut}</div>
              </div>
              <div style={{ fontFamily: theme.monoFont, fontSize: 11, color: theme.inkSoft, textAlign: "right" }}>J{b.jour}/{b.jourTotal}</div>
            </div>
          ))}
        </div>
        {/* Stock alerts */}
        <div style={{
          background: theme.surface, borderRadius: theme.radius,
          border: `1px solid ${theme.line}`, boxShadow: theme.shadow,
          padding: "20px 22px",
        }}>
          <div style={{ fontSize: 9, letterSpacing: 1.6, fontFamily: theme.monoFont, color: "#C04030", textTransform: "uppercase" }}>ALERTES</div>
          <div style={{ fontFamily: theme.headFont, fontSize: 18, fontStyle: "italic", fontWeight: 500, color: theme.ink, marginTop: 2, marginBottom: 14 }}>À réapprovisionner</div>
          {D2.stockItems.filter(s => s.level !== "ok").slice(0, 5).map((s, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "10px 0", borderBottom: i < 4 ? `1px solid ${theme.lineSoft}` : "none",
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: theme.ink }}>{s.nom}</div>
                <div style={{ fontSize: 10, color: theme.inkMute, fontFamily: theme.monoFont, marginTop: 2 }}>{s.cat.toUpperCase()}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: theme.monoFont, fontSize: 13, fontWeight: 700, color: s.level === "critical" ? "#C04030" : "#D48A1E" }}>
                  {s.qte} {s.u}
                </div>
                <div style={{ fontSize: 10, color: theme.inkMute, fontFamily: theme.monoFont }}>seuil {s.seuil}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Planning */}
      <div style={{
        background: theme.surface, borderRadius: theme.radius,
        border: `1px solid ${theme.line}`, boxShadow: theme.shadow,
        padding: "20px 22px",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: 1.6, fontFamily: theme.monoFont, color: theme.accent.base, textTransform: "uppercase" }}>PLANNING SEMAINE</div>
            <div style={{ fontFamily: theme.headFont, fontSize: 18, fontStyle: "italic", fontWeight: 500, color: theme.ink, marginTop: 2 }}>Brassage & embouteillage</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 10 }}>
          {D2.planning.map((p, i) => (
            <div key={i} style={{
              padding: "14px 12px",
              border: `1px solid ${theme.line}`,
              borderRadius: theme.radiusSm,
              background: theme.surfaceAlt,
            }}>
              <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 0.8, textTransform: "uppercase" }}>{p.jour} {p.date}</div>
              <div style={{ fontFamily: theme.headFont, fontWeight: 500, fontStyle: "italic", fontSize: 14, color: theme.ink, marginTop: 6, lineHeight: 1.15 }}>{p.recette}</div>
              <div style={{ fontSize: 10, color: theme.accent.base, fontFamily: theme.monoFont, marginTop: 6, fontWeight: 700, letterSpacing: 0.6, textTransform: "uppercase" }}>{p.type}</div>
              <div style={{ fontSize: 10, color: theme.inkMute, fontFamily: theme.monoFont, marginTop: 2 }}>{p.cuve}</div>
            </div>
          ))}
        </div>
      </div>
    </Desktop>
  );
}

// ---------- INDUSTRIAL ----------
function DesktopHomeIndustrial({ theme }) {
  const persona = "industrial";
  return (
    <Desktop theme={theme} persona={persona} active="home"
      title="DASHBOARD"
      breadcrumb="OVERVIEW · LIVE">
      {/* Top: live KPI strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, marginBottom: 20, border: `1px solid ${theme.line}`, background: theme.surface }}>
        {[
          { k: "VOLUME / MOIS", v: D2.kpis.volumeMois.toLocaleString("fr-FR"), u: "L", trend: "+12%" },
          { k: "BRASSINS ACTIFS", v: D2.kpis.brassinsActifs, u: "FV", trend: "2 FERM" },
          { k: "ALERTES", v: D2.kpis.stockAlerts, u: "", trend: "3 CRIT", warn: true },
          { k: "LOCATIONS", v: D2.kpis.locationsSemaine, u: "", trend: "S+1" },
          { k: "RENDEMENT", v: "82.4", u: "%", trend: "TGT 80" },
        ].map((kp, i) => (
          <div key={i} style={{
            padding: "16px 18px",
            borderRight: i < 4 ? `1px solid ${theme.line}` : "none",
            position: "relative",
          }}>
            <div style={{
              fontSize: 9, letterSpacing: 1.6, fontFamily: theme.monoFont, color: theme.inkMute,
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: kp.warn ? "#C56848" : theme.accent.base, display: "inline-block" }} />
              {kp.k}
            </div>
            <div style={{ fontFamily: theme.bodyFont, fontWeight: 800, fontSize: 36, color: theme.ink, letterSpacing: -1, marginTop: 8, fontFeatureSettings: '"tnum"' }}>
              {kp.v}<span style={{ fontSize: 14, color: theme.inkMute, marginLeft: 4, fontWeight: 500 }}>{kp.u}</span>
            </div>
            <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: kp.warn ? "#C56848" : theme.accent.base, marginTop: 4, letterSpacing: 0.6 }}>{kp.trend}</div>
          </div>
        ))}
      </div>

      {/* FV grid */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
          <div style={{ fontFamily: theme.bodyFont, fontWeight: 800, fontSize: 13, letterSpacing: 1.2, color: theme.ink, textTransform: "uppercase" }}>
            <span style={{ color: theme.accent.base, marginRight: 8 }}>▣</span>FERMENTEURS — STATUS
          </div>
          <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 0.6 }}>SCAN · 9:41:02</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
          {D2.brassins.map(b => {
            const pct = Math.round(b.jour / b.jourTotal * 100);
            return (
              <div key={b.id} style={{
                background: theme.surface,
                border: `1px solid ${theme.line}`,
                padding: "14px 14px 12px",
                borderRadius: theme.radiusSm,
                position: "relative",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontFamily: theme.monoFont, fontSize: 10, color: theme.inkMute, letterSpacing: 0.8 }}>{b.fermenteur}</div>
                  <div style={{ fontFamily: theme.monoFont, fontSize: 9, color: b.color, letterSpacing: 0.8, textTransform: "uppercase", fontWeight: 700 }}>{b.statut}</div>
                </div>
                <div style={{
                  fontFamily: theme.bodyFont, fontWeight: 800, fontSize: 16,
                  color: theme.ink, marginTop: 6, lineHeight: 1.1, textTransform: "uppercase", letterSpacing: 0.2,
                }}>{b.recette}</div>
                <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.inkMute, marginTop: 2 }}>{b.style.toUpperCase()}</div>
                {/* gauge */}
                <div style={{ marginTop: 14 }}>
                  <div style={{ height: 24, background: theme.bg, position: "relative", overflow: "hidden", border: `1px solid ${theme.line}` }}>
                    <div style={{
                      position: "absolute", left: 0, top: 0, bottom: 0,
                      width: `${pct}%`, background: `linear-gradient(90deg, ${b.color}55, ${b.color})`,
                    }} />
                    <div style={{
                      position: "relative", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "0 8px",
                      fontFamily: theme.monoFont, fontSize: 10, color: theme.ink, letterSpacing: 0.6,
                    }}>
                      <span>J{b.jour}/J{b.jourTotal}</span>
                      <span style={{ fontWeight: 700 }}>{pct}%</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {/* Stock alerts */}
        <div style={{ background: theme.surface, border: `1px solid ${theme.line}` }}>
          <div style={{
            padding: "14px 16px", borderBottom: `1px solid ${theme.line}`,
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <div style={{ fontFamily: theme.bodyFont, fontWeight: 800, fontSize: 12, letterSpacing: 1.2, color: theme.ink, textTransform: "uppercase" }}>
              <span style={{ color: "#C56848", marginRight: 8 }}>▲</span>STOCK · ALERTES
            </div>
            <div style={{ fontFamily: theme.monoFont, fontSize: 10, color: theme.inkMute }}>{D2.stockItems.filter(s => s.level !== "ok").length} ITEMS</div>
          </div>
          <div style={{ padding: 0 }}>
            {D2.stockItems.filter(s => s.level !== "ok").map((s, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "1.4fr 0.8fr 1fr 0.8fr",
                gap: 12, padding: "10px 16px",
                borderBottom: `1px solid ${theme.lineSoft}`,
                alignItems: "center",
                fontFamily: theme.monoFont,
              }}>
                <div style={{ fontSize: 12, color: theme.ink, fontWeight: 600 }}>{s.nom}</div>
                <div style={{ fontSize: 10, color: theme.inkMute, letterSpacing: 0.6 }}>{s.cat.toUpperCase()}</div>
                <div style={{ fontSize: 12, color: s.level === "critical" ? "#C56848" : "#D8902E", fontWeight: 700 }}>{s.qte} {s.u}</div>
                <div style={{ fontSize: 9, color: theme.inkMute, letterSpacing: 0.6 }}>SEUIL {s.seuil}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Planning */}
        <div style={{ background: theme.surface, border: `1px solid ${theme.line}` }}>
          <div style={{
            padding: "14px 16px", borderBottom: `1px solid ${theme.line}`,
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <div style={{ fontFamily: theme.bodyFont, fontWeight: 800, fontSize: 12, letterSpacing: 1.2, color: theme.ink, textTransform: "uppercase" }}>
              <span style={{ color: theme.accent.base, marginRight: 8 }}>▤</span>PLANNING · J+0 → J+14
            </div>
          </div>
          {D2.planning.slice(0, 5).map((p, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "60px 1.6fr 1fr 60px",
              gap: 12, padding: "10px 16px",
              borderBottom: `1px solid ${theme.lineSoft}`,
              alignItems: "center", fontFamily: theme.monoFont,
            }}>
              <div style={{ fontSize: 11, color: theme.accent.base, fontWeight: 700, letterSpacing: 0.6 }}>{p.date}</div>
              <div style={{ fontSize: 12, color: theme.ink, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.2 }}>{p.recette}</div>
              <div style={{ fontSize: 10, color: theme.inkMute, letterSpacing: 0.6 }}>{p.type.toUpperCase()}</div>
              <div style={{ fontSize: 10, color: theme.inkMute, textAlign: "right", letterSpacing: 0.4 }}>{p.cuve}</div>
            </div>
          ))}
        </div>
      </div>
    </Desktop>
  );
}

// ---------- EDITORIAL ----------
function DesktopHomeEditorial({ theme }) {
  const persona = "editorial";
  return (
    <Desktop theme={theme} persona={persona} active="home"
      title="Tableau de bord"
      breadcrumb="LUNDI 27 AVRIL · SEMAINE 18">
      {/* Headline */}
      <div style={{ marginBottom: 32, paddingBottom: 24, borderBottom: `1px solid ${theme.ink}` }}>
        <div style={{ fontSize: 11, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Édition #018 · Avril</div>
        <div style={{
          fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 300,
          fontSize: 56, lineHeight: 0.98, letterSpacing: -2, color: theme.ink, maxWidth: 880,
        }}>
          {D2.kpis.volumeMois.toLocaleString("fr-FR")} L brassés ce mois — un bon mois pour <em style={{ color: theme.accent.base }}>L'Impèrtinente.</em>
        </div>
      </div>

      {/* Three-column editorial KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, marginBottom: 36, paddingBottom: 28, borderBottom: `1px solid ${theme.line}` }}>
        {[
          { k: "I", lbl: "Volume", v: D2.kpis.volumeMois.toLocaleString("fr-FR"), u: "L" },
          { k: "II", lbl: "Brassins", v: D2.kpis.brassinsActifs, u: "actifs" },
          { k: "III", lbl: "Alertes", v: D2.kpis.stockAlerts, u: "items" },
          { k: "IV", lbl: "Locations", v: D2.kpis.locationsSemaine, u: "/ semaine" },
        ].map((kp, i) => (
          <div key={i}>
            <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 13, color: theme.accent.base, marginBottom: 4 }}>{kp.k}.</div>
            <div style={{ fontSize: 11, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.4, textTransform: "uppercase", marginBottom: 8 }}>{kp.lbl}</div>
            <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 300, fontSize: 56, color: theme.ink, lineHeight: 1, letterSpacing: -2 }}>{kp.v}</div>
            <div style={{ fontSize: 12, color: theme.inkSoft, marginTop: 4 }}>{kp.u}</div>
          </div>
        ))}
      </div>

      {/* Featured + Brassins */}
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.6fr", gap: 48, marginBottom: 36, paddingBottom: 28, borderBottom: `1px solid ${theme.line}` }}>
        {/* Featured brew */}
        <div>
          <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>À LA UNE · {D2.hero.fermenteur}</div>
          <div style={{ display: "flex", gap: 18, alignItems: "flex-end" }}>
            <Bottle color={theme.accent.base} size={140} label="IMPÈR" />
            <div style={{ flex: 1, paddingBottom: 12 }}>
              <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 300, fontSize: 38, lineHeight: 1, letterSpacing: -1.5, color: theme.ink }}>{D2.hero.recette}</div>
              <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 14, color: theme.inkSoft, marginTop: 8 }}>une {D2.hero.style.toLowerCase()} de saison</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 24, paddingTop: 14, borderTop: `1px solid ${theme.ink}` }}>
                {[["ABV", D2.hero.abv + "%"], ["IBU", D2.hero.ibu], ["VOL", D2.hero.volume + "L"]].map(([k, v]) => (
                  <div key={k}>
                    <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.4 }}>{k}</div>
                    <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 300, fontSize: 22, color: theme.ink, marginTop: 2 }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: 18, fontSize: 13, color: theme.inkSoft, lineHeight: 1.6, fontStyle: "italic", fontFamily: theme.headFont }}>
            « En fermentation depuis {D2.hero.jour} jours. Prochaine étape : {D2.hero.nextAction.toLowerCase()}. »
          </div>
        </div>

        {/* Brassins list (editorial) */}
        <div>
          <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>EN COURS · {D2.brassins.length} brassins</div>
          {D2.brassins.map((b, i) => (
            <div key={b.id} style={{
              display: "grid", gridTemplateColumns: "30px 1fr 100px 60px 80px",
              gap: 16, padding: "16px 0", alignItems: "baseline",
              borderBottom: i < D2.brassins.length - 1 ? `1px dotted ${theme.line}` : "none",
            }}>
              <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 13, color: theme.accent.base }}>{String(i + 1).padStart(2, "0")}</div>
              <div>
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 400, fontSize: 18, color: theme.ink, lineHeight: 1.1 }}>{b.recette}</div>
                <div style={{ fontSize: 11, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 0.5, marginTop: 2 }}>{b.style} · {b.fermenteur}</div>
              </div>
              <div>
                <div style={{ height: 2, background: theme.line }}>
                  <div style={{ width: `${b.jour / b.jourTotal * 100}%`, height: "100%", background: theme.ink }} />
                </div>
                <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.inkMute, marginTop: 6, letterSpacing: 0.5 }}>J{b.jour}/{b.jourTotal}</div>
              </div>
              <div style={{ fontFamily: theme.monoFont, fontSize: 11, color: theme.inkSoft, textTransform: "uppercase", letterSpacing: 0.5 }}>{b.statut}</div>
              <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 12, color: theme.accent.base, textAlign: "right" }}>voir →</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: planning */}
      <div>
        <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>L'AGENDA · 27 avril → 12 mai</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 0 }}>
          {D2.planning.map((p, i) => (
            <div key={i} style={{
              padding: "16px 14px 16px 0",
              borderRight: i < 6 ? `1px solid ${theme.line}` : "none",
              borderTop: `2px solid ${theme.ink}`,
            }}>
              <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 14, color: theme.accent.base }}>{p.jour}</div>
              <div style={{ fontSize: 11, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1, marginTop: 2 }}>{p.date}</div>
              <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 400, fontSize: 17, color: theme.ink, marginTop: 16, lineHeight: 1.15 }}>{p.recette}</div>
              <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.inkMute, marginTop: 8, letterSpacing: 0.6, textTransform: "uppercase" }}>{p.type} · {p.cuve}</div>
            </div>
          ))}
        </div>
      </div>
    </Desktop>
  );
}

window.DESKTOP_HOME = { DesktopHomePlayful, DesktopHomeIndustrial, DesktopHomeEditorial };
