/* global React, UI, BREWERY_DATA */
const { Phone, KPI, H, TabBar, Chip, Bottle } = window.UI;
const D = window.BREWERY_DATA;

// =============================================================
// RECETTES
// =============================================================
function RecPlayful({ theme }) {
  const persona = "playful";
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
        <div style={{ padding: "10px 18px 14px" }}>
          <div style={{ fontSize: 11, color: theme.inkSoft, fontFamily: theme.monoFont }}>Catalogue</div>
          <div style={{ fontFamily: theme.headFont, fontSize: 28, fontWeight: 500, fontStyle: "italic", color: theme.ink, marginTop: 2 }}>La carte des Papas</div>
        </div>
        <div style={{ padding: "0 18px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {D.recettes.map(r => (
            <div key={r.id} style={{ background: theme.surface, borderRadius: 18, border: `1px solid ${theme.line}`, padding: "12px", boxShadow: theme.shadow, position: "relative", overflow: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "center", padding: "4px 0 8px" }}>
                <Bottle color={r.color} size={56} label={r.nom.replace(/^L[a'] /, "").slice(0, 6).toUpperCase()} />
              </div>
              <div style={{ fontFamily: theme.headFont, fontSize: 14, fontWeight: 500, fontStyle: "italic", color: theme.ink, lineHeight: 1.1 }}>{r.nom}</div>
              <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: theme.inkSoft, marginTop: 2, letterSpacing: 0.8, textTransform: "uppercase" }}>{r.style}</div>
              <div style={{ display: "flex", gap: 4, marginTop: 8, fontSize: 9, fontFamily: theme.monoFont, color: theme.inkSoft }}>
                <span>{r.abv}%</span>·<span>{r.ibu}IBU</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar theme={theme} active="rec" persona={persona} />
    </div>
  );
}

function RecIndustrial({ theme }) {
  const persona = "industrial";
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: theme.bg }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
        <div style={{ padding: "10px 16px 14px", borderBottom: `1px solid ${theme.line}` }}>
          <div style={{ fontSize: 9, color: theme.accent.base, fontFamily: theme.monoFont, letterSpacing: 2, fontWeight: 700 }}>SPEC SHEET / RECIPES</div>
          <div style={{ fontWeight: 800, fontSize: 18, color: theme.ink, marginTop: 2, letterSpacing: -0.4 }}>{D.recettes.length} recettes actives</div>
        </div>
        {D.recettes.map((r, i) => (
          <div key={r.id} style={{ padding: "12px 16px", borderBottom: `1px solid ${theme.lineSoft}`, display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 12, alignItems: "center" }}>
            <div style={{ width: 40, height: 40, background: r.color, position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: theme.monoFont, fontSize: 10, color: "#FFF", fontWeight: 800, letterSpacing: 0.5 }}>{r.style.slice(0, 4).toUpperCase()}</div>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: theme.ink }}>{r.nom}</div>
              <div style={{ fontSize: 9, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 1, marginTop: 1 }}>{r.style.toUpperCase()} · SRM {r.srm}</div>
            </div>
            <div style={{ display: "flex", gap: 8, fontFamily: theme.monoFont, fontSize: 10 }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: theme.inkMute, fontSize: 8 }}>ABV</div>
                <div style={{ color: theme.ink, fontWeight: 700 }}>{r.abv}%</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: theme.inkMute, fontSize: 8 }}>IBU</div>
                <div style={{ color: theme.ink, fontWeight: 700 }}>{r.ibu}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <TabBar theme={theme} active="rec" persona={persona} />
    </div>
  );
}

function RecEditorial({ theme }) {
  const persona = "editorial";
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
        <div style={{ padding: "12px 22px 6px", borderBottom: `1px solid ${theme.ink}` }}>
          <div style={{ fontFamily: theme.monoFont, fontSize: 9, letterSpacing: 2, color: theme.ink, fontWeight: 700 }}>CARTE · 8 BIÈRES</div>
        </div>
        <div style={{ padding: "20px 22px 12px" }}>
          <div style={{ fontFamily: theme.headFont, fontSize: 36, fontWeight: 300, fontStyle: "italic", color: theme.ink, lineHeight: 0.95, letterSpacing: -1.5 }}>
            La carte<br />des Papas.
          </div>
          <div style={{ fontSize: 12, color: theme.inkSoft, lineHeight: 1.5, marginTop: 12, maxWidth: 280 }}>
            Permanentes et éphémères, brassées à Clisson — un catalogue qui respire avec les saisons.
          </div>
        </div>
        <div style={{ padding: "0 22px" }}>
          {D.recettes.map((r, i) => (
            <div key={r.id} style={{ padding: "16px 0", borderTop: i === 0 ? `1px solid ${theme.ink}` : `1px solid ${theme.line}`, display: "grid", gridTemplateColumns: "1fr auto", gap: 14, alignItems: "baseline" }}>
              <div>
                <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: r.color, letterSpacing: 1, fontWeight: 700, textTransform: "uppercase" }}>{r.style}</div>
                <div style={{ fontFamily: theme.headFont, fontSize: 22, fontWeight: 300, fontStyle: "italic", color: theme.ink, marginTop: 3, letterSpacing: -0.6 }}>{r.nom}</div>
              </div>
              <div style={{ display: "flex", gap: 12, fontFamily: theme.monoFont, fontSize: 10, color: theme.inkSoft }}>
                <span>{r.abv}%</span>
                <span>{r.ibu}IBU</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar theme={theme} active="rec" persona={persona} />
    </div>
  );
}

window.REC = { RecPlayful, RecIndustrial, RecEditorial };
