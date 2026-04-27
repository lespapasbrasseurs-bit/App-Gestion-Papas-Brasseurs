/* global React, UI, BREWERY_DATA */
const { TabBar, H, Chip } = window.UI;
const D = window.BREWERY_DATA;

// =============================================================
// STOCK
// =============================================================
function StockPlayful({ theme }) {
  const persona = "playful";
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
        <div style={{ padding: "10px 18px 14px" }}>
          <div style={{ fontSize: 11, color: theme.inkSoft, fontFamily: theme.monoFont }}>Inventaire</div>
          <div style={{ fontFamily: theme.headFont, fontSize: 28, fontWeight: 500, fontStyle: "italic", color: theme.ink, marginTop: 2 }}>Stock matières</div>
        </div>
        {/* Catégories */}
        <div style={{ padding: "0 18px 14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {D.stockCategories.map(c => (
            <div key={c.cat} style={{ background: theme.surface, borderRadius: 14, border: `1px solid ${theme.line}`, padding: "12px", boxShadow: theme.shadow, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: c.color }} />
              <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: c.color, letterSpacing: 1.5, fontWeight: 700, textTransform: "uppercase" }}>{c.cat}</div>
              <div style={{ fontFamily: theme.headFont, fontSize: 22, fontWeight: 500, fontStyle: "italic", color: theme.ink, marginTop: 4, letterSpacing: -0.5 }}>{c.totalKg}<span style={{ fontSize: 11, color: theme.inkSoft, fontStyle: "normal", marginLeft: 4 }}>kg</span></div>
              <div style={{ fontSize: 10, color: theme.inkSoft, marginTop: 4, fontFamily: theme.monoFont }}>{c.count} items{c.alerts > 0 && <span style={{ color: "#C04030", fontWeight: 700 }}> · {c.alerts} alerte{c.alerts > 1 ? "s" : ""}</span>}</div>
            </div>
          ))}
        </div>
        <H theme={theme} persona={persona} k="ALERTES" t="À réapprovisionner" action="Filtres →" />
        <div style={{ padding: "0 18px", display: "flex", flexDirection: "column", gap: 8 }}>
          {D.stockItems.filter(s => s.level !== "ok").map((s, i) => {
            const col = s.level === "critical" || s.level === "error" ? "#C04030" : "#D8901E";
            return (
              <div key={i} style={{ background: theme.surface, borderRadius: 14, padding: "12px 14px", border: `1px solid ${theme.line}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontFamily: theme.headFont, fontSize: 14, fontWeight: 500, fontStyle: "italic", color: theme.ink }}>{s.nom}</div>
                  <div style={{ fontSize: 10, color: theme.inkSoft, fontFamily: theme.monoFont, marginTop: 2 }}>{s.cat} · seuil {s.seuil}{s.u}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: theme.monoFont, fontSize: 14, fontWeight: 700, color: col }}>{s.qte}{s.u}</div>
                  <Chip theme={theme} persona={persona} color={col}>{s.level}</Chip>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <TabBar theme={theme} active="stock" persona={persona} />
    </div>
  );
}

function StockIndustrial({ theme }) {
  const persona = "industrial";
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: theme.bg }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
        <div style={{ padding: "10px 16px 14px", borderBottom: `1px solid ${theme.line}` }}>
          <div style={{ fontSize: 9, color: theme.accent.base, fontFamily: theme.monoFont, letterSpacing: 2, fontWeight: 700 }}>INVENTORY / WAREHOUSE</div>
          <div style={{ fontWeight: 800, fontSize: 18, color: theme.ink, marginTop: 2, letterSpacing: -0.4 }}>Stock matières</div>
        </div>
        {/* Cat strip */}
        <div style={{ padding: "12px 16px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4 }}>
          {D.stockCategories.map(c => (
            <div key={c.cat} style={{ background: theme.surface, border: `1px solid ${theme.line}`, padding: "8px 6px", textAlign: "center", position: "relative" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: c.color }} />
              <div style={{ fontSize: 8, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1, textTransform: "uppercase" }}>{c.cat}</div>
              <div style={{ fontSize: 14, fontFamily: theme.monoFont, fontWeight: 800, color: theme.ink, marginTop: 3 }}>{c.count}</div>
              {c.alerts > 0 && <div style={{ fontSize: 8, fontFamily: theme.monoFont, color: "#C56848", marginTop: 2 }}>!{c.alerts}</div>}
            </div>
          ))}
        </div>
        <div style={{ padding: "8px 16px", borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}`, background: theme.surfaceAlt, display: "grid", gridTemplateColumns: "1.4fr 0.7fr 0.8fr 0.5fr", gap: 8, fontSize: 8, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1, textTransform: "uppercase" }}>
          <span>NOM</span><span>CAT</span><span>QTÉ</span><span>SEUIL</span>
        </div>
        {D.stockItems.map((s, i) => {
          const col = s.level === "critical" || s.level === "error" ? "#C56848" : s.level === "warn" ? "#D8902E" : theme.ink;
          return (
            <div key={i} style={{ padding: "10px 16px", borderBottom: `1px solid ${theme.lineSoft}`, display: "grid", gridTemplateColumns: "1.4fr 0.7fr 0.8fr 0.5fr", gap: 8, alignItems: "center", fontFamily: theme.monoFont, fontSize: 11 }}>
              <div style={{ color: theme.ink, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.nom}</div>
              <div style={{ fontSize: 9, color: theme.inkMute, letterSpacing: 0.6 }}>{s.cat.toUpperCase()}</div>
              <div style={{ color: col, fontWeight: 700 }}>{s.qte}{s.u}</div>
              <div style={{ fontSize: 9, color: theme.inkMute }}>{s.seuil}</div>
            </div>
          );
        })}
      </div>
      <TabBar theme={theme} active="stock" persona={persona} />
    </div>
  );
}

function StockEditorial({ theme }) {
  const persona = "editorial";
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
        <div style={{ padding: "12px 22px 6px", borderBottom: `1px solid ${theme.ink}` }}>
          <div style={{ fontFamily: theme.monoFont, fontSize: 9, letterSpacing: 2, color: theme.ink, fontWeight: 700 }}>STOCK · ÉDITION 27.04</div>
        </div>
        <div style={{ padding: "20px 22px 12px" }}>
          <div style={{ fontFamily: theme.headFont, fontSize: 36, fontWeight: 300, fontStyle: "italic", color: theme.ink, lineHeight: 0.95, letterSpacing: -1.5 }}>
            Sept alertes,<br />trois critiques.
          </div>
        </div>
        {/* Catégories */}
        <div style={{ padding: "16px 22px", borderTop: `1px solid ${theme.ink}`, borderBottom: `1px solid ${theme.line}` }}>
          {D.stockCategories.map((c, i) => (
            <div key={c.cat} style={{ display: "grid", gridTemplateColumns: "auto 1fr auto auto", alignItems: "baseline", gap: 12, padding: "8px 0", borderBottom: i < D.stockCategories.length - 1 ? `1px dotted ${theme.line}` : "none" }}>
              <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: c.color, letterSpacing: 1, fontWeight: 700, width: 60, textTransform: "uppercase" }}>{c.cat}</div>
              <div style={{ fontFamily: theme.headFont, fontSize: 14, fontStyle: "italic", color: theme.ink }}>{c.count} items</div>
              <div style={{ fontFamily: theme.monoFont, fontSize: 11, color: theme.inkSoft }}>{c.totalKg}kg</div>
              <div style={{ fontFamily: theme.monoFont, fontSize: 10, color: c.alerts > 0 ? "#A03828" : theme.inkMute, fontWeight: 700, width: 24, textAlign: "right" }}>{c.alerts > 0 ? `!${c.alerts}` : "—"}</div>
            </div>
          ))}
        </div>
        <H theme={theme} persona={persona} k="ALERTES" t="À réapprovisionner" />
        <div style={{ padding: "0 22px" }}>
          {D.stockItems.filter(s => s.level !== "ok").map((s, i) => {
            const col = s.level === "critical" || s.level === "error" ? "#A03828" : "#A07418";
            return (
              <div key={i} style={{ padding: "14px 0", borderTop: i === 0 ? `1px solid ${theme.ink}` : `1px solid ${theme.line}`, display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "baseline" }}>
                <div>
                  <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: col, letterSpacing: 1, fontWeight: 700, textTransform: "uppercase" }}>{s.cat} · {s.level}</div>
                  <div style={{ fontFamily: theme.headFont, fontSize: 18, fontWeight: 300, fontStyle: "italic", color: theme.ink, marginTop: 3, letterSpacing: -0.4 }}>{s.nom}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: theme.headFont, fontSize: 18, fontStyle: "italic", color: col }}>{s.qte}{s.u}</div>
                  <div style={{ fontFamily: theme.monoFont, fontSize: 9, color: theme.inkMute, marginTop: 2 }}>seuil {s.seuil}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <TabBar theme={theme} active="stock" persona={persona} />
    </div>
  );
}

window.STOCK = { StockPlayful, StockIndustrial, StockEditorial };
