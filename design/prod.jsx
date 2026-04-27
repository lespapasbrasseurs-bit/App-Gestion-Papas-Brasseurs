/* global React, UI, BREWERY_DATA */
const { Phone, KPI, H, TabBar, Chip, Bottle } = window.UI;
const D = window.BREWERY_DATA;

// =============================================================
// PRODUCTION
// =============================================================
function ProdPlayful({ theme }) {
  const persona = "playful";
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
        <div style={{ padding: "10px 18px 14px" }}>
          <div style={{ fontSize: 11, color: theme.inkSoft, fontFamily: theme.monoFont }}>Production</div>
          <div style={{ fontFamily: theme.headFont, fontSize: 28, fontWeight: 500, fontStyle: "italic", color: theme.ink, marginTop: 2 }}>Brassins en cours</div>
        </div>
        {/* tabs */}
        <div style={{ padding: "0 18px 14px", display: "flex", gap: 6 }}>
          {["En cours", "Planifiés", "Terminés"].map((t, i) => (
            <div key={t} style={{
              padding: "7px 12px", borderRadius: 999, fontSize: 11, fontWeight: 600,
              background: i === 0 ? theme.accent.base : "transparent",
              color: i === 0 ? "#FFF" : theme.inkSoft,
              border: i === 0 ? "none" : `1px solid ${theme.line}`,
            }}>{t}</div>
          ))}
        </div>
        {/* Cards */}
        <div style={{ padding: "0 18px", display: "flex", flexDirection: "column", gap: 12 }}>
          {D.brassins.slice(0, 5).map(b => (
            <div key={b.id} style={{ background: theme.surface, borderRadius: 18, border: `1px solid ${theme.line}`, padding: "14px 16px", boxShadow: theme.shadow }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontFamily: theme.monoFont, fontSize: 10, color: b.color, fontWeight: 700, letterSpacing: 1 }}>{b.fermenteur}</div>
                  <div style={{ fontFamily: theme.headFont, fontSize: 18, fontWeight: 500, fontStyle: "italic", color: theme.ink, marginTop: 2 }}>{b.recette}</div>
                  <div style={{ fontSize: 10, color: theme.inkSoft, fontFamily: theme.monoFont, marginTop: 1 }}>{b.style}</div>
                </div>
                <Chip theme={theme} persona={persona} color={b.color}>{b.statut}</Chip>
              </div>
              <div style={{ marginTop: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: theme.inkSoft, fontFamily: theme.monoFont, marginBottom: 4 }}>
                  <span>J{b.jour} / J{b.jourTotal}</span>
                  <span>{Math.round(b.jour / b.jourTotal * 100)}%</span>
                </div>
                <div style={{ height: 6, background: theme.bgAlt, borderRadius: 999, overflow: "hidden" }}>
                  <div style={{ width: `${b.jour / b.jourTotal * 100}%`, height: "100%", background: b.color, borderRadius: 999 }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar theme={theme} active="prod" persona={persona} />
    </div>
  );
}

function ProdIndustrial({ theme }) {
  const persona = "industrial";
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: theme.bg }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
        <div style={{ padding: "10px 16px 14px", borderBottom: `1px solid ${theme.line}` }}>
          <div style={{ fontSize: 9, color: theme.accent.base, fontFamily: theme.monoFont, letterSpacing: 2, fontWeight: 700 }}>PRODUCTION / OPS</div>
          <div style={{ fontWeight: 800, fontSize: 18, color: theme.ink, marginTop: 2, letterSpacing: -0.4 }}>Brassins actifs</div>
        </div>
        {/* Fermenter grid */}
        <div style={{ padding: "12px 16px" }}>
          <div style={{ fontSize: 9, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 2, marginBottom: 8 }}>FERMENTEURS · 5/5</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6 }}>
            {["FV-01", "FV-02", "FV-03", "FV-04", "FV-05"].map((fv, i) => {
              const b = D.brassins.find(x => x.fermenteur === fv);
              return (
                <div key={fv} style={{ aspectRatio: "0.6", background: theme.surface, border: `1px solid ${theme.line}`, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, top: b ? `${100 - (b.jour / b.jourTotal) * 100}%` : "100%", background: b ? `${b.color}33` : "transparent", borderTop: b ? `2px solid ${b.color}` : "none" }} />
                  <div style={{ position: "absolute", top: 4, left: 4, fontSize: 8, fontFamily: theme.monoFont, color: theme.inkSoft, letterSpacing: 1 }}>{fv}</div>
                  {b && <div style={{ position: "absolute", bottom: 4, left: 4, fontSize: 8, fontFamily: theme.monoFont, color: theme.ink, fontWeight: 700 }}>J{b.jour}</div>}
                </div>
              );
            })}
          </div>
        </div>
        {/* Active brassins table */}
        <div style={{ padding: "8px 16px", borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}`, background: theme.surfaceAlt }}>
          <div style={{ fontSize: 9, color: theme.accent.base, fontFamily: theme.monoFont, letterSpacing: 2, fontWeight: 700 }}>EN PRODUCTION</div>
        </div>
        {D.brassins.map((b, i) => (
          <div key={b.id} style={{ padding: "12px 16px", borderBottom: `1px solid ${theme.lineSoft}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                <span style={{ fontFamily: theme.monoFont, fontSize: 10, color: b.color, fontWeight: 700 }}>{b.fermenteur}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: theme.ink }}>{b.recette}</span>
              </div>
              <Chip theme={theme} persona={persona} color={b.color} mono>{b.statut.slice(0,4).toUpperCase()}</Chip>
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
              {Array.from({ length: b.jourTotal }).map((_, j) => (
                <div key={j} style={{ flex: 1, height: 4, background: j < b.jour ? b.color : theme.line }} />
              ))}
            </div>
            <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: theme.inkMute, marginTop: 6, letterSpacing: 1 }}>JOUR {b.jour}/{b.jourTotal} · {b.style.toUpperCase()}</div>
          </div>
        ))}
      </div>
      <TabBar theme={theme} active="prod" persona={persona} />
    </div>
  );
}

function ProdEditorial({ theme }) {
  const persona = "editorial";
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
        <div style={{ padding: "12px 22px 6px", borderBottom: `1px solid ${theme.ink}` }}>
          <div style={{ fontFamily: theme.monoFont, fontSize: 9, letterSpacing: 2, color: theme.ink, fontWeight: 700 }}>PRODUCTION · EN COURS</div>
        </div>
        <div style={{ padding: "20px 22px 12px" }}>
          <div style={{ fontFamily: theme.headFont, fontSize: 36, fontWeight: 300, fontStyle: "italic", color: theme.ink, lineHeight: 0.95, letterSpacing: -1.5 }}>
            Cinq brassins,<br />en parallèle.
          </div>
        </div>
        <div style={{ padding: "0 22px" }}>
          {D.brassins.map((b, i) => (
            <div key={b.id} style={{ padding: "16px 0", borderTop: i === 0 ? `1px solid ${theme.ink}` : `1px solid ${theme.line}` }}>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "baseline", gap: 14 }}>
                <div style={{ fontFamily: theme.monoFont, fontSize: 11, color: theme.accent.base, fontWeight: 700, letterSpacing: 1 }}>0{i + 1}.</div>
                <div>
                  <div style={{ fontFamily: theme.headFont, fontSize: 20, fontWeight: 300, fontStyle: "italic", color: theme.ink, letterSpacing: -0.5 }}>{b.recette}</div>
                  <div style={{ fontSize: 10, color: theme.inkSoft, fontFamily: theme.monoFont, marginTop: 3, letterSpacing: 1, textTransform: "uppercase" }}>{b.style} · {b.fermenteur} · {b.statut}</div>
                </div>
                <div style={{ fontFamily: theme.monoFont, fontSize: 12, color: theme.ink, fontWeight: 700 }}>J{b.jour}/{b.jourTotal}</div>
              </div>
              <div style={{ height: 1, background: theme.line, marginTop: 10, position: "relative" }}>
                <div style={{ position: "absolute", left: 0, top: -1, height: 3, width: `${b.jour / b.jourTotal * 100}%`, background: b.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar theme={theme} active="prod" persona={persona} />
    </div>
  );
}

window.PROD = { ProdPlayful, ProdIndustrial, ProdEditorial };
