/* global React, UI, BREWERY_DATA */
const { Phone, KPI, H, TabBar, Chip } = window.UI;
const D = window.BREWERY_DATA;

// =============================================================
// LOCATIONS TIREUSES
// =============================================================
function LocPlayful({ theme }) {
  const persona = "playful";
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
        <div style={{ padding: "10px 18px 14px" }}>
          <div style={{ fontSize: 11, color: theme.inkSoft, fontFamily: theme.monoFont }}>Planning</div>
          <div style={{ fontFamily: theme.headFont, fontSize: 28, fontWeight: 500, fontStyle: "italic", color: theme.ink, marginTop: 2 }}>Locations tireuses</div>
        </div>
        {/* Tireuses status */}
        <div style={{ padding: "0 18px 14px" }}>
          <div style={{ background: theme.surface, borderRadius: 18, border: `1px solid ${theme.line}`, padding: "12px", boxShadow: theme.shadow }}>
            <div style={{ fontSize: 10, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 1.4, fontWeight: 700, marginBottom: 8 }}>FLOTTE · 8 TIREUSES</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
              {D.tireuses.map(t => (
                <div key={t.id} style={{ background: `${t.color}1A`, borderRadius: 10, padding: "8px 4px", textAlign: "center", border: `1px solid ${t.color}33` }}>
                  <div style={{ fontFamily: theme.monoFont, fontSize: 9, color: t.color, fontWeight: 800 }}>{t.nom}</div>
                  <div style={{ fontSize: 8, color: theme.inkSoft, marginTop: 2 }}>{t.becs}×bec</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <H theme={theme} persona={persona} k="CETTE SEMAINE" t="12 réservations" action="Calendrier →" />
        <div style={{ padding: "0 18px", display: "flex", flexDirection: "column", gap: 8 }}>
          {D.locations.slice(0, 6).map((l, i) => {
            const col = l.statut === "confirmée" ? "#4A7038" : l.statut === "en attente" ? "#D8901E" : theme.accent.base;
            return (
              <div key={i} style={{ background: theme.surface, borderRadius: 14, padding: "12px 14px", border: `1px solid ${theme.line}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: theme.headFont, fontSize: 14, fontWeight: 500, fontStyle: "italic", color: theme.ink, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{l.client}</div>
                    <div style={{ fontSize: 10, color: theme.inkSoft, fontFamily: theme.monoFont, marginTop: 2 }}>{l.date}</div>
                  </div>
                  <Chip theme={theme} persona={persona} color={col}>{l.statut}</Chip>
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 8, fontSize: 10, fontFamily: theme.monoFont, color: theme.inkSoft }}>
                  <span>◧ {l.tireuse}</span>{l.futs > 0 && <span>· {l.futs} fûts</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <TabBar theme={theme} active="loc" persona={persona} />
    </div>
  );
}

function LocIndustrial({ theme }) {
  const persona = "industrial";
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: theme.bg }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
        <div style={{ padding: "10px 16px 14px", borderBottom: `1px solid ${theme.line}` }}>
          <div style={{ fontSize: 9, color: theme.accent.base, fontFamily: theme.monoFont, letterSpacing: 2, fontWeight: 700 }}>FLEET / RENTALS</div>
          <div style={{ fontWeight: 800, fontSize: 18, color: theme.ink, marginTop: 2, letterSpacing: -0.4 }}>Tireuses & locations</div>
        </div>
        {/* Fleet matrix */}
        <div style={{ padding: "12px 16px" }}>
          <div style={{ fontSize: 9, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 2, marginBottom: 8 }}>FLOTTE · STATUT</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 }}>
            {D.tireuses.map(t => (
              <div key={t.id} style={{ background: theme.surface, border: `1px solid ${theme.line}`, padding: "10px 6px", textAlign: "center", position: "relative" }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: t.color }} />
                <div style={{ fontFamily: theme.monoFont, fontSize: 10, color: theme.ink, fontWeight: 800 }}>{t.nom}</div>
                <div style={{ fontSize: 8, color: theme.inkMute, fontFamily: theme.monoFont, marginTop: 3, letterSpacing: 0.5 }}>{t.becs}BEC</div>
                <div style={{ width: 6, height: 6, background: "#7DB85D", borderRadius: 999, margin: "4px auto 0" }} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "8px 16px", borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}`, background: theme.surfaceAlt }}>
          <div style={{ fontSize: 9, color: theme.accent.base, fontFamily: theme.monoFont, letterSpacing: 2, fontWeight: 700 }}>RÉSERVATIONS · 12</div>
        </div>
        {D.locations.map((l, i) => {
          const col = l.statut === "confirmée" ? "#7DB85D" : l.statut === "en attente" ? "#D8901E" : theme.accent.base;
          return (
            <div key={i} style={{ padding: "10px 16px", borderBottom: `1px solid ${theme.lineSoft}`, display: "grid", gridTemplateColumns: "1fr auto", gap: 8 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: theme.ink, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{l.client}</div>
                <div style={{ fontSize: 9, color: theme.inkMute, fontFamily: theme.monoFont, marginTop: 2, letterSpacing: 0.8 }}>{l.date} · {l.tireuse} · {l.futs}F</div>
              </div>
              <div style={{ fontSize: 9, padding: "3px 6px", background: `${col}22`, color: col, fontFamily: theme.monoFont, fontWeight: 700, letterSpacing: 1, alignSelf: "start" }}>
                {l.statut.slice(0, 4).toUpperCase()}
              </div>
            </div>
          );
        })}
      </div>
      <TabBar theme={theme} active="loc" persona={persona} />
    </div>
  );
}

function LocEditorial({ theme }) {
  const persona = "editorial";
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
        <div style={{ padding: "12px 22px 6px", borderBottom: `1px solid ${theme.ink}` }}>
          <div style={{ fontFamily: theme.monoFont, fontSize: 9, letterSpacing: 2, color: theme.ink, fontWeight: 700 }}>LOCATIONS · SEM. 18</div>
        </div>
        <div style={{ padding: "20px 22px 12px" }}>
          <div style={{ fontFamily: theme.headFont, fontSize: 36, fontWeight: 300, fontStyle: "italic", color: theme.ink, lineHeight: 0.95, letterSpacing: -1.5 }}>
            Douze<br />réservations.
          </div>
        </div>
        {/* Tireuses key */}
        <div style={{ padding: "0 22px 18px" }}>
          <div style={{ fontSize: 9, color: theme.inkMute, letterSpacing: 2, fontFamily: theme.monoFont, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>Flotte</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {D.tireuses.map(t => (
              <div key={t.id} style={{ padding: "4px 8px", border: `1px solid ${t.color}`, color: t.color, fontSize: 10, fontFamily: theme.monoFont, fontWeight: 700, letterSpacing: 0.5 }}>
                {t.nom}
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "0 22px" }}>
          {D.locations.map((l, i) => {
            const col = l.statut === "confirmée" ? "#4A7038" : l.statut === "en attente" ? "#A03828" : theme.accent.base;
            return (
              <div key={i} style={{ padding: "14px 0", borderTop: i === 0 ? `1px solid ${theme.ink}` : `1px solid ${theme.line}` }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 10, alignItems: "baseline" }}>
                  <div>
                    <div style={{ fontFamily: theme.headFont, fontSize: 18, fontWeight: 300, fontStyle: "italic", color: theme.ink, letterSpacing: -0.4, lineHeight: 1.1 }}>{l.client}</div>
                    <div style={{ fontSize: 10, color: theme.inkSoft, fontFamily: theme.monoFont, marginTop: 4, letterSpacing: 1 }}>{l.date} · {l.tireuse}{l.futs > 0 && ` · ${l.futs}F`}</div>
                  </div>
                  <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: col, letterSpacing: 1, fontWeight: 700, textTransform: "uppercase" }}>{l.statut}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <TabBar theme={theme} active="loc" persona={persona} />
    </div>
  );
}

window.LOC = { LocPlayful, LocIndustrial, LocEditorial };
