/* global React, UI, BREWERY_DATA */
const { Phone, KPI, H, TabBar, Chip, Bottle, Sprig } = window.UI;
const D = window.BREWERY_DATA;

// =============================================================
// HOME — three variants
// =============================================================

// ---------- VARIANT 1: PLAYFUL ----------
function HomePlayful({ theme, density }) {
  const persona = "playful";
  const compact = density === "compact";
  const pad = compact ? 14 : 18;
  return (
    <div style={{ height: "100%", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
        {/* Greeting */}
        <div style={{ padding: `${compact ? 8 : 14}px ${pad}px ${compact ? 12 : 18}px`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, color: theme.inkSoft, fontFamily: theme.monoFont, letterSpacing: 0.5 }}>{D.today.weekday} · {D.today.date}</div>
            <div style={{ fontFamily: theme.headFont, fontSize: 24, fontWeight: 500, color: theme.ink, marginTop: 2, fontStyle: "italic" }}>
              Salut, 
            </div>
          </div>
          <div style={{
            width: 38, height: 38, borderRadius: 999,
            background: theme.accent.base, color: "#FFF",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: theme.headFont, fontWeight: 600, fontSize: 14,
            border: `2px solid ${theme.surface}`,
            boxShadow: theme.shadow,
          }}>{D.user.initials}</div>
        </div>

        {/* Big number — volume */}
        <div style={{ padding: `0 ${pad}px ${compact ? 12 : 16}px` }}>
          <div style={{ fontSize: 10, letterSpacing: 1.6, color: theme.inkMute, fontFamily: theme.monoFont, textTransform: "uppercase" }}>Brassé ce mois</div>
          <div style={{ fontFamily: theme.headFont, fontSize: 56, fontWeight: 400, color: theme.ink, letterSpacing: -2, lineHeight: 1, fontStyle: "italic", marginTop: 2 }}>
            {D.kpis.volumeMois.toLocaleString("fr-FR")}<span style={{ fontSize: 22, color: theme.accent.base, marginLeft: 6, fontStyle: "normal", fontWeight: 600 }}>L</span>
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 8, alignItems: "center" }}>
            <Chip theme={theme} persona={persona} color={theme.accent.base}>+12% vs mars</Chip>
            <span style={{ fontSize: 11, color: theme.inkSoft }}>{D.kpis.brassinsActifs} brassins actifs</span>
          </div>
        </div>

        {/* Quick actions */}
        <div style={{ padding: `0 ${pad}px ${compact ? 14 : 20}px`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
          {[
            { icon: "+", label: "Brassin" },
            { icon: "▦", label: "Stock" },
            { icon: "🌾", label: "Achats" },
            { icon: "◧", label: "Tireuse" },
          ].map((a, i) => (
            <div key={i} style={{
              background: theme.surface, borderRadius: 16,
              padding: "10px 6px",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
              border: `1px solid ${theme.line}`,
              boxShadow: theme.shadow,
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: 999,
                background: `${theme.accent.base}1A`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, color: theme.accent.base, fontWeight: 700,
              }}>{a.icon}</div>
              <div style={{ fontSize: 10, color: theme.inkSoft, fontWeight: 600 }}>{a.label}</div>
            </div>
          ))}
        </div>

        {/* HERO — featured brassin */}
        <div style={{ padding: `0 ${pad}px ${compact ? 12 : 18}px` }}>
          <div style={{
            position: "relative",
            background: persona === "playful"
              ? `linear-gradient(135deg, ${theme.accent.warm || theme.accent.base} 0%, ${theme.accent.deep} 100%)`
              : `linear-gradient(135deg, ${theme.accent.base} 0%, ${theme.accent.deep} 100%)`,
            borderRadius: 26,
            padding: "18px 18px 16px",
            color: "#FFF",
            overflow: "hidden",
            boxShadow: `0 20px 40px -20px ${theme.accent.base}88`,
          }}>
            <div style={{ position: "absolute", right: -10, top: -10, opacity: 0.18 }}>
              <Sprig color="#FFFFFF" size={120} opacity={1} />
            </div>
            <div style={{ position: "absolute", right: 6, bottom: -6 }}>
              <Bottle color={theme.accent.soft} size={86} glow label={D.hero.recette.split(" ").pop().slice(0, 6).toUpperCase()} />
            </div>
            <div style={{ fontSize: 9, letterSpacing: 2, fontFamily: theme.monoFont, opacity: 0.75 }}>EN FERMENTATION</div>
            <div style={{ fontFamily: theme.headFont, fontSize: 28, fontWeight: 500, fontStyle: "italic", lineHeight: 1.05, marginTop: 4, maxWidth: "70%" }}>
              {D.hero.recette}
            </div>
            <div style={{ fontSize: 11, opacity: 0.85, marginTop: 4 }}>{D.hero.style} · {D.hero.fermenteur}</div>
            {/* progress */}
            <div style={{ marginTop: 16, maxWidth: "65%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, fontFamily: theme.monoFont, marginBottom: 4 }}>
                <span>J{D.hero.jour} / J{D.hero.jourTotal}</span>
                <span style={{ opacity: 0.8 }}>{Math.round(D.hero.jour / D.hero.jourTotal * 100)}%</span>
              </div>
              <div style={{ height: 5, background: "#FFFFFF22", borderRadius: 999, overflow: "hidden" }}>
                <div style={{ width: `${D.hero.jour / D.hero.jourTotal * 100}%`, height: "100%", background: "#FFF", borderRadius: 999 }} />
              </div>
              <div style={{ marginTop: 12, fontSize: 11, opacity: 0.9 }}>
                ▸ <span style={{ fontWeight: 600 }}>{D.hero.nextAction}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brassins list */}
        <H theme={theme} persona={persona} k="EN COURS" t="Autres brassins" action="Voir tout →" />
        <div style={{ padding: `0 ${pad}px`, display: "flex", flexDirection: "column", gap: 8 }}>
          {D.brassins.slice(0, 4).map((b, i) => (
            <div key={b.id} style={{
              background: theme.surface, borderRadius: 16,
              padding: "12px 14px",
              border: `1px solid ${theme.line}`,
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 12, background: `${b.color}22`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: b.color, fontWeight: 700, fontFamily: theme.headFont, fontStyle: "italic",
              }}>{b.fermenteur.split("-")[1]}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: theme.headFont, fontSize: 14, fontWeight: 500, color: theme.ink, fontStyle: "italic", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {b.recette}
                </div>
                <div style={{ fontSize: 10, color: theme.inkSoft, fontFamily: theme.monoFont, marginTop: 1 }}>
                  {b.style} · J{b.jour}/{b.jourTotal}
                </div>
              </div>
              <Chip theme={theme} persona={persona} color={b.color}>{b.statut}</Chip>
            </div>
          ))}
        </div>
      </div>
      <TabBar theme={theme} active="home" persona={persona} />
    </div>
  );
}

// ---------- VARIANT 2: INDUSTRIAL ----------
function HomeIndustrial({ theme, density }) {
  const persona = "industrial";
  const compact = density === "compact";
  return (
    <div style={{ height: "100%", overflow: "hidden", display: "flex", flexDirection: "column", background: theme.bg }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
        {/* Top bar */}
        <div style={{ padding: "10px 16px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${theme.line}` }}>
          <div>
            <div style={{ fontSize: 9, color: theme.accent.base, fontFamily: theme.monoFont, letterSpacing: 2, fontWeight: 700 }}>PAPAS BRASSEURS · CONTROL</div>
            <div style={{ fontFamily: theme.bodyFont, fontWeight: 800, fontSize: 18, color: theme.ink, marginTop: 2, letterSpacing: -0.4 }}>
              Bonjour {D.user.name}
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ width: 8, height: 8, borderRadius: 999, background: "#7DB85D", boxShadow: "0 0 10px #7DB85D" }} />
            <span style={{ fontSize: 10, color: theme.inkSoft, fontFamily: theme.monoFont }}>LIVE</span>
          </div>
        </div>

        {/* KPI strip */}
        <div style={{ padding: "14px 16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <KPI theme={theme} persona={persona} label="Volume mois" value={`${(D.kpis.volumeMois / 1000).toFixed(1)}K`} sub="hL brassés · +12%" />
          <KPI theme={theme} persona={persona} label="Cuves actives" value={`${D.kpis.brassinsActifs}/5`} sub="80% capacité" />
          <KPI theme={theme} persona={persona} label="Stock alertes" value={D.kpis.stockAlerts} sub={<span style={{ color: "#E04040" }}>3 critiques</span>} />
          <KPI theme={theme} persona={persona} label="Locations" value={D.kpis.locationsSemaine} sub="cette semaine" />
        </div>

        {/* HERO — industrial readout style */}
        <div style={{ padding: "0 16px 16px" }}>
          <div style={{
            background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: 8,
            padding: "14px 16px", position: "relative", overflow: "hidden",
          }}>
            {/* live indicator stripe */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: theme.accent.base }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 9, color: theme.accent.base, fontFamily: theme.monoFont, letterSpacing: 2, fontWeight: 700 }}>FV-02 · FERMENTATION</div>
                <div style={{ fontFamily: theme.bodyFont, fontSize: 22, fontWeight: 800, color: theme.ink, marginTop: 4, letterSpacing: -0.5 }}>
                  {D.hero.recette}
                </div>
                <div style={{ fontSize: 11, color: theme.inkSoft, fontFamily: theme.monoFont, marginTop: 2 }}>
                  {D.hero.style} · {D.hero.volume}L
                </div>
              </div>
              <div style={{ width: 56, height: 80, position: "relative" }}>
                <Bottle color={theme.accent.base} size={56} label={D.hero.recette.slice(2, 8).toUpperCase()} />
              </div>
            </div>

            {/* metric row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginTop: 14, paddingTop: 12, borderTop: `1px dashed ${theme.line}` }}>
              {[
                { k: "OG", v: D.hero.og.toFixed(3) },
                { k: "FG", v: D.hero.fg.toFixed(3) },
                { k: "ABV", v: `${D.hero.abv}%` },
                { k: "IBU", v: D.hero.ibu },
              ].map(m => (
                <div key={m.k}>
                  <div style={{ fontSize: 8, color: theme.inkMute, letterSpacing: 1, fontFamily: theme.monoFont }}>{m.k}</div>
                  <div style={{ fontSize: 16, color: theme.ink, fontWeight: 700, fontFamily: theme.monoFont, marginTop: 2 }}>{m.v}</div>
                </div>
              ))}
            </div>

            {/* progress */}
            <div style={{ marginTop: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, fontFamily: theme.monoFont, marginBottom: 4, color: theme.inkSoft }}>
                <span>JOUR {D.hero.jour}/{D.hero.jourTotal}</span>
                <span style={{ color: theme.accent.base }}>▸ {D.hero.nextAction}</span>
              </div>
              <div style={{ height: 4, background: theme.bgAlt, overflow: "hidden", display: "flex" }}>
                {Array.from({ length: D.hero.jourTotal }).map((_, i) => (
                  <div key={i} style={{
                    flex: 1, marginRight: 1,
                    background: i < D.hero.jour ? theme.accent.base : theme.line,
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Brassins table */}
        <div style={{ padding: "0 0 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 16px 8px" }}>
            <div style={{ fontSize: 9, color: theme.accent.base, fontFamily: theme.monoFont, letterSpacing: 2, fontWeight: 700 }}>BRASSINS / 5</div>
            <div style={{ fontSize: 10, color: theme.inkSoft, fontFamily: theme.monoFont }}>VOIR TOUT →</div>
          </div>
          <div>
            {D.brassins.slice(0, 5).map((b, i) => (
              <div key={b.id} style={{
                padding: "10px 16px",
                display: "grid", gridTemplateColumns: "32px 1fr auto auto", alignItems: "center", gap: 10,
                borderTop: `1px solid ${theme.lineSoft}`,
              }}>
                <div style={{ fontFamily: theme.monoFont, fontSize: 10, color: theme.inkMute }}>{b.fermenteur}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: theme.ink, letterSpacing: -0.2 }}>{b.recette}</div>
                  <div style={{ fontSize: 9, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 1, marginTop: 1 }}>{b.style.toUpperCase()}</div>
                </div>
                <div style={{ fontFamily: theme.monoFont, fontSize: 10, color: theme.inkSoft }}>J{b.jour}/{b.jourTotal}</div>
                <Chip theme={theme} persona={persona} color={b.color} mono>{b.statut.slice(0, 4).toUpperCase()}</Chip>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TabBar theme={theme} active="home" persona={persona} />
    </div>
  );
}

// ---------- VARIANT 3: EDITORIAL ----------
function HomeEditorial({ theme, density }) {
  const persona = "editorial";
  return (
    <div style={{ height: "100%", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 90 }}>
        {/* masthead */}
        <div style={{ padding: "12px 22px 6px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${theme.ink}` }}>
          <div style={{ fontFamily: theme.monoFont, fontSize: 9, letterSpacing: 2, color: theme.ink, fontWeight: 700 }}>N°127 · LUNDI 27.04.26</div>
          <div style={{ fontSize: 10, color: theme.inkSoft, fontFamily: theme.monoFont }}>{D.user.initials}</div>
        </div>

        {/* title */}
        <div style={{ padding: "20px 22px 10px" }}>
          <div style={{ fontFamily: theme.headFont, fontSize: 38, fontWeight: 300, fontStyle: "italic", color: theme.ink, lineHeight: 0.95, letterSpacing: -1.5 }}>
            La Brasserie<br />ce matin.
          </div>
          <div style={{ marginTop: 12, fontSize: 13, color: theme.inkSoft, lineHeight: 1.5, maxWidth: 280 }}>
            Quatre brassins en cours, sept alertes stock — la semaine s'annonce dense. Café d'abord.
          </div>
        </div>

        {/* big number */}
        <div style={{ padding: "16px 22px 16px", display: "grid", gridTemplateColumns: "auto 1fr", gap: 16, alignItems: "end", borderTop: `1px solid ${theme.line}`, borderBottom: `1px solid ${theme.line}` }}>
          <div>
            <div style={{ fontFamily: theme.headFont, fontSize: 64, fontWeight: 300, fontStyle: "italic", color: theme.ink, lineHeight: 0.85, letterSpacing: -3 }}>
              8,4<span style={{ fontSize: 24, color: theme.accent.base, fontStyle: "normal", fontWeight: 500 }}>K</span>
            </div>
            <div style={{ fontSize: 9, color: theme.inkMute, letterSpacing: 1.6, fontFamily: theme.monoFont, marginTop: 6, textTransform: "uppercase" }}>Litres · Avril</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 11, color: theme.inkSoft }}>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: `1px dotted ${theme.line}`, paddingBottom: 3 }}>
              <span>Brassins</span><span style={{ color: theme.ink, fontWeight: 600, fontFamily: theme.monoFont }}>04</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: `1px dotted ${theme.line}`, paddingBottom: 3 }}>
              <span>Alertes</span><span style={{ color: "#A03828", fontWeight: 600, fontFamily: theme.monoFont }}>07</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: `1px dotted ${theme.line}`, paddingBottom: 3 }}>
              <span>Locations</span><span style={{ color: theme.ink, fontWeight: 600, fontFamily: theme.monoFont }}>12</span>
            </div>
          </div>
        </div>

        {/* HERO feature article */}
        <div style={{ padding: "20px 22px 6px" }}>
          <div style={{ fontSize: 9, color: theme.accent.base, letterSpacing: 2, fontFamily: theme.monoFont, fontWeight: 700, textTransform: "uppercase" }}>Brassin du jour</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 14, alignItems: "start", marginTop: 8 }}>
            <div>
              <div style={{ fontFamily: theme.headFont, fontSize: 26, fontWeight: 300, fontStyle: "italic", color: theme.ink, lineHeight: 1, letterSpacing: -1 }}>
                {D.hero.recette}
              </div>
              <div style={{ fontSize: 11, color: theme.inkSoft, marginTop: 6, fontFamily: theme.monoFont, letterSpacing: 0.5 }}>
                {D.hero.style.toUpperCase()} · FV-02
              </div>
              <div style={{ fontSize: 12, color: theme.inkSoft, lineHeight: 1.55, marginTop: 10, maxWidth: 200 }}>
                Sixième jour de fermentation. La densité descend doucement, prochaine étape : <em>dry hop J+8</em>.
              </div>
            </div>
            <Bottle color={theme.accent.base} size={70} label="IMPER" />
          </div>
          {/* metric strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", marginTop: 16, borderTop: `1px solid ${theme.ink}`, borderBottom: `1px solid ${theme.line}` }}>
            {[
              { k: "OG", v: D.hero.og.toFixed(3) },
              { k: "FG", v: D.hero.fg.toFixed(3) },
              { k: "ABV", v: `${D.hero.abv}%` },
              { k: "IBU", v: D.hero.ibu },
            ].map((m, i) => (
              <div key={m.k} style={{ padding: "10px 0", borderRight: i < 3 ? `1px solid ${theme.line}` : "none" }}>
                <div style={{ fontSize: 8, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 1.4 }}>{m.k}</div>
                <div style={{ fontSize: 18, fontFamily: theme.headFont, fontWeight: 400, fontStyle: "italic", color: theme.ink, marginTop: 2 }}>{m.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* List */}
        <div style={{ padding: "18px 22px 0" }}>
          <div style={{ fontSize: 9, color: theme.inkMute, letterSpacing: 2, fontFamily: theme.monoFont, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>Au planning</div>
          {D.planning.slice(0, 4).map((p, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "44px 1fr auto", gap: 10, alignItems: "baseline",
              padding: "10px 0", borderBottom: `1px solid ${theme.lineSoft}`,
            }}>
              <div style={{ fontFamily: theme.monoFont, fontSize: 11, color: theme.accent.base, fontWeight: 700 }}>{p.date}</div>
              <div>
                <div style={{ fontSize: 13, fontFamily: theme.headFont, fontWeight: 400, fontStyle: "italic", color: theme.ink }}>{p.recette}</div>
                <div style={{ fontSize: 10, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 1, marginTop: 1, textTransform: "uppercase" }}>{p.type}</div>
              </div>
              <div style={{ fontFamily: theme.monoFont, fontSize: 10, color: theme.inkSoft }}>{p.cuve}</div>
            </div>
          ))}
        </div>
      </div>
      <TabBar theme={theme} active="home" persona={persona} />
    </div>
  );
}

window.HOME = { HomePlayful, HomeIndustrial, HomeEditorial };
