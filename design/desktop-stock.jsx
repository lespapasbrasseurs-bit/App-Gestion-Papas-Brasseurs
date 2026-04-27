/* global React */
const Dx = window.BREWERY_DATA;
const { Desktop } = window;
const { Bottle, Sprig, Chip } = window.UI;

// =============================================================
// DESKTOP STOCK
// =============================================================
function DesktopStockPlayful({ theme }) {
  const persona = "playful";
  return (
    <Desktop theme={theme} persona={persona} active="stock"
      title="Stock & matières"
      breadcrumb="Inventaire"
      headerExtra={
        <div style={{ display: "flex", gap: 6 }}>
          {["Tout", "Malt", "Houblon", "Levure", "Épice", "Sucre"].map((f, i) => (
            <div key={f} style={{ padding: "6px 12px", borderRadius: 999, background: i === 0 ? theme.accent.base : "transparent", color: i === 0 ? "#FFF" : theme.inkSoft, fontSize: 11, fontWeight: 600, border: i === 0 ? "none" : `1px solid ${theme.line}` }}>{f}</div>
          ))}
        </div>
      }>
      {/* Top: 5 catégories cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginBottom: 20 }}>
        {Dx.stockCategories.map(c => (
          <div key={c.cat} style={{ background: theme.surface, borderRadius: theme.radius, border: `1px solid ${theme.line}`, padding: "18px 20px", boxShadow: theme.shadow, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: c.color }} />
            <div style={{ fontSize: 9, color: c.color, letterSpacing: 1.6, fontFamily: theme.monoFont, fontWeight: 700, textTransform: "uppercase" }}>{c.cat}</div>
            <div style={{ fontFamily: theme.headFont, fontSize: 36, fontStyle: "italic", fontWeight: 400, color: theme.ink, marginTop: 6, letterSpacing: -1, lineHeight: 1 }}>
              {c.totalKg}<span style={{ fontSize: 13, color: theme.inkSoft, fontStyle: "normal", marginLeft: 4 }}>kg</span>
            </div>
            <div style={{ fontSize: 11, color: theme.inkSoft, marginTop: 6, fontFamily: theme.monoFont }}>{c.count} ITEMS</div>
            {c.alerts > 0 && <div style={{ fontSize: 10, color: "#C04030", marginTop: 4, fontWeight: 700 }}>! {c.alerts} alerte{c.alerts > 1 ? "s" : ""}</div>}
          </div>
        ))}
      </div>
      {/* Table */}
      <div style={{ background: theme.surface, borderRadius: theme.radius, border: `1px solid ${theme.line}`, boxShadow: theme.shadow, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 0.8fr 0.8fr 0.8fr 1.2fr 0.6fr", gap: 16, padding: "14px 22px", fontSize: 9, letterSpacing: 1.4, fontFamily: theme.monoFont, color: theme.inkMute, textTransform: "uppercase", borderBottom: `1px solid ${theme.line}`, background: theme.surfaceAlt }}>
          <span>Item</span><span>Catégorie</span><span>Qté actuelle</span><span>Seuil</span><span>Statut</span><span></span>
        </div>
        {Dx.stockItems.map((s, i) => {
          const col = s.level === "critical" || s.level === "error" ? "#C04030" : s.level === "warn" ? "#D8901E" : "#5A7A30";
          return (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.6fr 0.8fr 0.8fr 0.8fr 1.2fr 0.6fr", gap: 16, padding: "14px 22px", alignItems: "center", borderBottom: i < Dx.stockItems.length - 1 ? `1px solid ${theme.lineSoft}` : "none", fontSize: 13 }}>
              <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 500, color: theme.ink }}>{s.nom}</div>
              <div style={{ fontSize: 11, color: theme.inkSoft, fontFamily: theme.monoFont, letterSpacing: 0.5 }}>{s.cat}</div>
              <div style={{ fontFamily: theme.monoFont, fontSize: 13, fontWeight: 700, color: col }}>{s.qte}{s.u}</div>
              <div style={{ fontFamily: theme.monoFont, fontSize: 11, color: theme.inkSoft }}>{s.seuil}{s.u}</div>
              <div><Chip theme={theme} persona={persona} color={col}>{s.level}</Chip></div>
              <div style={{ fontSize: 12, color: theme.accent.base, fontWeight: 600, textAlign: "right" }}>+ Stock</div>
            </div>
          );
        })}
      </div>
    </Desktop>
  );
}

function DesktopStockIndustrial({ theme }) {
  const persona = "industrial";
  return (
    <Desktop theme={theme} persona={persona} active="stock"
      title="STOCK · INVENTORY"
      breadcrumb="WAREHOUSE / SCAN">
      {/* Cat strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, marginBottom: 20, border: `1px solid ${theme.line}`, background: theme.surface }}>
        {Dx.stockCategories.map((c, i) => (
          <div key={c.cat} style={{ padding: "14px 16px", borderRight: i < 4 ? `1px solid ${theme.line}` : "none", position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: c.color }} />
            <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.4, textTransform: "uppercase" }}>{c.cat}</div>
            <div style={{ fontFamily: theme.bodyFont, fontWeight: 800, fontSize: 32, color: theme.ink, marginTop: 6, letterSpacing: -0.8, lineHeight: 1 }}>
              {c.count}<span style={{ fontSize: 11, color: theme.inkMute, marginLeft: 6, fontWeight: 500 }}>SKU</span>
            </div>
            <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.inkSoft, marginTop: 6, letterSpacing: 0.5 }}>{c.totalKg} KG TOTAL</div>
            {c.alerts > 0 && <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: "#C56848", marginTop: 4, letterSpacing: 0.8 }}>! {c.alerts} ALERT</div>}
          </div>
        ))}
      </div>
      {/* Big table */}
      <div style={{ border: `1px solid ${theme.line}`, background: theme.surface }}>
        <div style={{ padding: "12px 16px", borderBottom: `1px solid ${theme.line}`, display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontFamily: theme.bodyFont, fontWeight: 800, fontSize: 12, letterSpacing: 1.2, color: theme.ink, textTransform: "uppercase" }}>
            INVENTORY · {Dx.stockItems.length} ITEMS
          </div>
          <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.inkMute }}>SCAN 9:41:02</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.8fr 0.7fr 0.7fr 0.7fr 1.2fr", gap: 12, padding: "10px 16px", borderBottom: `1px solid ${theme.line}`, background: theme.surfaceAlt, fontSize: 9, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.2, textTransform: "uppercase" }}>
          <span>NOM</span><span>CAT</span><span>QTÉ</span><span>UN</span><span>SEUIL</span><span>STATUS</span>
        </div>
        {Dx.stockItems.map((s, i) => {
          const col = s.level === "critical" || s.level === "error" ? "#C56848" : s.level === "warn" ? "#D8902E" : theme.accent.base;
          return (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.4fr 0.8fr 0.7fr 0.7fr 0.7fr 1.2fr", gap: 12, padding: "10px 16px", alignItems: "center", borderBottom: i < Dx.stockItems.length - 1 ? `1px solid ${theme.lineSoft}` : "none", fontFamily: theme.monoFont, fontSize: 12 }}>
              <div style={{ color: theme.ink, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.3 }}>{s.nom}</div>
              <div style={{ fontSize: 10, color: theme.inkMute, letterSpacing: 0.6, textTransform: "uppercase" }}>{s.cat}</div>
              <div style={{ color: col, fontWeight: 700 }}>{s.qte}</div>
              <div style={{ color: theme.inkMute, fontSize: 10 }}>{s.u}</div>
              <div style={{ color: theme.inkMute, fontSize: 10 }}>{s.seuil}</div>
              <div>
                <span style={{ display: "inline-block", padding: "2px 6px", background: `${col}22`, color: col, fontSize: 9, letterSpacing: 1, fontWeight: 700, textTransform: "uppercase" }}>{s.level}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Desktop>
  );
}

function DesktopStockEditorial({ theme }) {
  const persona = "editorial";
  return (
    <Desktop theme={theme} persona={persona} active="stock"
      title="Stock"
      breadcrumb="ÉDITION 27.04.26 · INVENTAIRE">
      <div style={{ marginBottom: 32, paddingBottom: 24, borderBottom: `1px solid ${theme.ink}` }}>
        <div style={{ fontSize: 11, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Inventaire · {Dx.stockItems.length} items</div>
        <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 300, fontSize: 56, lineHeight: 0.98, letterSpacing: -2, color: theme.ink, maxWidth: 880 }}>
          Sept alertes, dont trois <em style={{ color: theme.accent.base }}>critiques</em>.
        </div>
      </div>
      {/* Categories — narrow editorial table */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 32, marginBottom: 36, paddingBottom: 28, borderBottom: `1px solid ${theme.line}` }}>
        {Dx.stockCategories.map((c, i) => (
          <div key={c.cat}>
            <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 13, color: theme.accent.base, marginBottom: 4 }}>{["I","II","III","IV","V"][i]}.</div>
            <div style={{ fontSize: 11, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.4, textTransform: "uppercase", marginBottom: 8 }}>{c.cat}</div>
            <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 300, fontSize: 48, color: theme.ink, lineHeight: 1, letterSpacing: -1.5 }}>{c.count}</div>
            <div style={{ fontSize: 12, color: theme.inkSoft, marginTop: 4 }}>{c.totalKg}kg{c.alerts > 0 && <span style={{ color: "#A03828" }}> · {c.alerts} alerte{c.alerts > 1 ? "s" : ""}</span>}</div>
          </div>
        ))}
      </div>
      {/* Items list — full */}
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 56 }}>
        <div>
          <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>À RÉAPPROVISIONNER · 7 ITEMS</div>
          {Dx.stockItems.filter(s => s.level !== "ok").map((s, i) => {
            const col = s.level === "critical" || s.level === "error" ? "#A03828" : "#A07418";
            return (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "30px 1fr 90px 80px", gap: 16, padding: "16px 0", alignItems: "baseline", borderBottom: `1px dotted ${theme.line}` }}>
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 13, color: theme.accent.base }}>{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 400, fontSize: 22, color: theme.ink, lineHeight: 1.05, letterSpacing: -0.5 }}>{s.nom}</div>
                  <div style={{ fontSize: 11, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 0.5, marginTop: 4 }}>{s.cat.toUpperCase()} · seuil {s.seuil}{s.u}</div>
                </div>
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 24, color: col }}>{s.qte}{s.u}</div>
                <div style={{ fontFamily: theme.monoFont, fontSize: 10, color: col, letterSpacing: 1, fontWeight: 700, textAlign: "right", textTransform: "uppercase" }}>{s.level}</div>
              </div>
            );
          })}
        </div>
        <div>
          <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>OK · {Dx.stockItems.filter(s => s.level === "ok").length} ITEMS</div>
          {Dx.stockItems.filter(s => s.level === "ok").map((s, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, padding: "10px 0", borderBottom: `1px dotted ${theme.line}`, alignItems: "baseline" }}>
              <div>
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 14, color: theme.ink }}>{s.nom}</div>
                <div style={{ fontSize: 10, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 0.5 }}>{s.cat.toUpperCase()}</div>
              </div>
              <div style={{ fontFamily: theme.monoFont, fontSize: 12, color: theme.inkSoft }}>{s.qte}{s.u}</div>
            </div>
          ))}
        </div>
      </div>
    </Desktop>
  );
}

window.DESKTOP_STOCK = { DesktopStockPlayful, DesktopStockIndustrial, DesktopStockEditorial };
