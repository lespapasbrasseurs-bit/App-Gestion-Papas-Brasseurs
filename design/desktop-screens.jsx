/* global React */
const Dxl = window.BREWERY_DATA;
const { Bottle: BottleX, Sprig: SprigX, Chip: ChipX } = window.UI;
const { Desktop: DesktopX } = window;

const STATUTS_LABELS = {
  brassage: "Brassage",
  fermentation: "Fermentation",
  garde: "Garde froide",
  conditionnement: "Conditionnement",
  planifié: "Planifié",
};

// =============================================================
// DESKTOP PRODUCTION
// =============================================================
function DesktopProdPlayful({ theme }) {
  const persona = "playful";
  return (
    <DesktopX theme={theme} persona={persona} active="prod"
      title="Production · Brassins"
      breadcrumb="Atelier">
      {/* Stat strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
        {[
          { t: "Brassins actifs", v: Dxl.kpis.brassinsActifs, s: "en fermentation / garde" },
          { t: "Volume en cours",  v: "1 940L", s: "+ 720L planifiés" },
          { t: "Prochain brassage", v: "27.04", s: "La Blonde des Papas" },
          { t: "Conditionnement",  v: "06.05", s: "L'Impèrtinente · 800 b." },
        ].map(k => (
          <div key={k.t} style={{ background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: theme.radius, padding: "16px 18px", boxShadow: theme.shadow }}>
            <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.4, textTransform: "uppercase" }}>{k.t}</div>
            <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 400, fontSize: 32, color: theme.ink, letterSpacing: -0.8, marginTop: 4, lineHeight: 1 }}>{k.v}</div>
            <div style={{ fontSize: 11, color: theme.inkSoft, marginTop: 6 }}>{k.s}</div>
          </div>
        ))}
      </div>
      {/* Brassins grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 24 }}>
        <div>
          <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Brassins en cours</div>
          {Dxl.brassins.map(b => (
            <div key={b.id} style={{ background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: theme.radius, padding: "18px 22px", marginBottom: 12, boxShadow: theme.shadow, display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 18, alignItems: "center" }}>
              <BottleX color={b.color} size={48} />
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 22, color: theme.ink, letterSpacing: -0.5 }}>{b.recette}</div>
                  <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.2, textTransform: "uppercase" }}>#{b.id} · {b.style}</div>
                </div>
                <div style={{ fontSize: 11, color: theme.inkSoft, marginTop: 4, fontFamily: theme.monoFont }}>{b.fermenteur} · {STATUTS_LABELS[b.statut]} · J{b.jour}/{b.jourTotal}</div>
                {/* progress */}
                <div style={{ marginTop: 10, height: 4, background: theme.lineSoft, borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${(b.jour / b.jourTotal) * 100}%`, background: b.color, borderRadius: 4 }} />
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 24, color: b.color }}>{Math.round((b.jour / b.jourTotal) * 100)}<span style={{ fontSize: 13 }}>%</span></div>
                <div style={{ fontSize: 10, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 1, marginTop: 2 }}>{b.jourTotal - b.jour} JOURS</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Planning · 7 jours</div>
          <div style={{ background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: theme.radius, padding: 0, boxShadow: theme.shadow, overflow: "hidden" }}>
            {Dxl.planning.map((p, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "60px 1fr auto", gap: 12, padding: "14px 20px", alignItems: "center", borderBottom: i < Dxl.planning.length - 1 ? `1px solid ${theme.lineSoft}` : "none" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 22, color: theme.ink, lineHeight: 1, letterSpacing: -0.5 }}>{p.date.split("/")[0]}</div>
                  <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.2, textTransform: "uppercase", marginTop: 2 }}>{p.jour}</div>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: theme.ink, fontFamily: theme.headFont, fontStyle: "italic" }}>{p.recette}</div>
                  <div style={{ fontSize: 10, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 0.8, textTransform: "uppercase", marginTop: 2 }}>{p.cuve}</div>
                </div>
                <ChipX theme={theme} persona={persona} color={p.type === "Brassage" ? theme.accent.base : "#5A7A30"}>{p.type}</ChipX>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DesktopX>
  );
}

function DesktopProdIndustrial({ theme }) {
  const persona = "industrial";
  return (
    <DesktopX theme={theme} persona={persona} active="prod"
      title="PRODUCTION · BATCH"
      breadcrumb="LIVE · {Dxl.brassins.length} ACTIVE">
      {/* LIVE STATUS BAR */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: `${theme.accent.base}14`, border: `1px solid ${theme.accent.base}55`, marginBottom: 20 }}>
        <div style={{ width: 8, height: 8, borderRadius: 999, background: theme.accent.base, boxShadow: `0 0 8px ${theme.accent.base}` }} />
        <div style={{ fontFamily: theme.monoFont, fontSize: 11, color: theme.ink, letterSpacing: 1.2, textTransform: "uppercase", fontWeight: 700 }}>LIVE · 4 BATCH ACTIVE · TEMP NOMINAL · LAST UPDATE 09:41:32</div>
      </div>
      {/* Brassins as table */}
      <div style={{ border: `1px solid ${theme.line}`, background: theme.surface, marginBottom: 24 }}>
        <div style={{ padding: "10px 16px", borderBottom: `1px solid ${theme.line}`, fontFamily: theme.bodyFont, fontWeight: 800, fontSize: 12, letterSpacing: 1.2, color: theme.ink, textTransform: "uppercase" }}>BATCH IN PROGRESS</div>
        <div style={{ display: "grid", gridTemplateColumns: "60px 1.2fr 1fr 0.8fr 0.8fr 1fr 80px", gap: 12, padding: "10px 16px", borderBottom: `1px solid ${theme.line}`, background: theme.surfaceAlt, fontSize: 9, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.2, textTransform: "uppercase" }}>
          <span>ID</span><span>RECIPE</span><span>FERM</span><span>STATUS</span><span>DAY</span><span>PROGRESS</span><span>%</span>
        </div>
        {Dxl.brassins.map((b, i) => (
          <div key={b.id} style={{ display: "grid", gridTemplateColumns: "60px 1.2fr 1fr 0.8fr 0.8fr 1fr 80px", gap: 12, padding: "12px 16px", alignItems: "center", borderBottom: i < Dxl.brassins.length - 1 ? `1px solid ${theme.lineSoft}` : "none", fontFamily: theme.monoFont, fontSize: 12 }}>
            <div style={{ color: theme.accent.base, fontWeight: 800, letterSpacing: 0.5 }}>#{b.id}</div>
            <div style={{ color: theme.ink, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.4 }}>{b.recette} <span style={{ color: theme.inkMute, fontWeight: 400 }}>· {b.style}</span></div>
            <div style={{ color: theme.inkSoft, fontSize: 11 }}>{b.fermenteur}</div>
            <div>
              <span style={{ display: "inline-block", padding: "2px 6px", background: `${b.color}22`, color: b.color, fontSize: 9, letterSpacing: 1, fontWeight: 700, textTransform: "uppercase" }}>{b.statut}</span>
            </div>
            <div style={{ color: theme.ink, fontWeight: 700 }}>J{b.jour}/{b.jourTotal}</div>
            <div style={{ height: 6, background: theme.lineSoft, position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, width: `${(b.jour / b.jourTotal) * 100}%`, background: b.color }} />
            </div>
            <div style={{ color: b.color, fontWeight: 800, textAlign: "right" }}>{Math.round((b.jour / b.jourTotal) * 100)}%</div>
          </div>
        ))}
      </div>
      {/* Planning */}
      <div style={{ border: `1px solid ${theme.line}`, background: theme.surface }}>
        <div style={{ padding: "10px 16px", borderBottom: `1px solid ${theme.line}`, fontFamily: theme.bodyFont, fontWeight: 800, fontSize: 12, letterSpacing: 1.2, color: theme.ink, textTransform: "uppercase" }}>SCHEDULE · 7D</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 0 }}>
          {Dxl.planning.map((p, i) => (
            <div key={i} style={{ padding: "16px 14px", borderRight: i < Dxl.planning.length - 1 ? `1px solid ${theme.lineSoft}` : "none", borderTop: i === 0 ? "none" : "none" }}>
              <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.4, textTransform: "uppercase", marginBottom: 6 }}>{p.jour} {p.date}</div>
              <div style={{ fontSize: 12, color: theme.ink, fontWeight: 700, fontFamily: theme.bodyFont, textTransform: "uppercase", letterSpacing: 0.4, lineHeight: 1.2 }}>{p.recette}</div>
              <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 0.8, marginTop: 6, textTransform: "uppercase", fontWeight: 700 }}>{p.cuve} · {p.type}</div>
            </div>
          ))}
        </div>
      </div>
    </DesktopX>
  );
}

function DesktopProdEditorial({ theme }) {
  const persona = "editorial";
  return (
    <DesktopX theme={theme} persona={persona} active="prod"
      title="Atelier"
      breadcrumb="ÉDITION 27.04.26 · BRASSINS">
      <div style={{ marginBottom: 36, paddingBottom: 24, borderBottom: `1px solid ${theme.ink}` }}>
        <div style={{ fontSize: 11, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Quatre brassins · trois cuves · une APA</div>
        <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 300, fontSize: 64, lineHeight: 0.95, letterSpacing: -2, color: theme.ink, maxWidth: 920 }}>
          L'<em style={{ color: theme.accent.base }}>Impèrtinente</em> entre en garde froide.
        </div>
      </div>
      {/* Brassins as articles */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 48, marginBottom: 48 }}>
        {Dxl.brassins.map((b, i) => (
          <article key={b.id} style={{ paddingBottom: 32, borderBottom: `1px solid ${theme.line}`, display: "grid", gridTemplateColumns: "auto 1fr", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "flex-start", paddingTop: 6 }}><BottleX color={b.color} size={56} /></div>
            <div>
              <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 14, color: theme.accent.base, marginBottom: 4 }}>{["I","II","III","IV"][i]}.</div>
              <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 300, fontSize: 36, color: theme.ink, lineHeight: 1, letterSpacing: -1 }}>{b.recette}</div>
              <div style={{ fontSize: 11, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.4, marginTop: 8, textTransform: "uppercase" }}>{b.style} · {b.fermenteur} · {STATUTS_LABELS[b.statut]}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 14 }}>
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 56, color: b.color, lineHeight: 1, letterSpacing: -2 }}>J{b.jour}</div>
                <div style={{ fontSize: 12, color: theme.inkSoft, fontFamily: theme.monoFont }}>sur {b.jourTotal} · reste {b.jourTotal - b.jour} jours</div>
              </div>
              <div style={{ marginTop: 14, height: 2, background: theme.lineSoft, position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, width: `${(b.jour / b.jourTotal) * 100}%`, background: b.color }} />
              </div>
            </div>
          </article>
        ))}
      </div>
      {/* Planning */}
      <div>
        <div style={{ fontSize: 11, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Programme · semaine en cours</div>
        <div style={{ borderTop: `1px solid ${theme.ink}` }}>
          {Dxl.planning.map((p, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 1fr 200px 100px", gap: 24, padding: "20px 0", borderBottom: `1px solid ${theme.line}`, alignItems: "baseline" }}>
              <div>
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 28, color: theme.accent.base, lineHeight: 1, letterSpacing: -0.8 }}>{p.date}</div>
                <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.4, textTransform: "uppercase", marginTop: 2 }}>{p.jour}</div>
              </div>
              <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 22, color: theme.ink, letterSpacing: -0.5 }}>{p.recette}</div>
              <div style={{ fontSize: 12, color: theme.inkSoft, fontFamily: theme.monoFont, letterSpacing: 0.5 }}>{p.cuve}</div>
              <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.ink, letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 700, textAlign: "right" }}>{p.type}</div>
            </div>
          ))}
        </div>
      </div>
    </DesktopX>
  );
}

// =============================================================
// DESKTOP CARTE (RECETTES)
// =============================================================
function DesktopRecPlayful({ theme }) {
  const persona = "playful";
  return (
    <DesktopX theme={theme} persona={persona} active="rec"
      title="Carte des bières"
      breadcrumb="Recettes & prix">
      {/* Hero recipe */}
      <div style={{ background: `linear-gradient(135deg, ${theme.accent.base}28, ${theme.surface})`, border: `1px solid ${theme.line}`, borderRadius: theme.radius, padding: "32px 36px", marginBottom: 24, display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 32, alignItems: "center", boxShadow: theme.shadow }}>
        <BottleX color={Dxl.recettes[0].color} size={108} />
        <div>
          <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700, marginBottom: 6 }}>★ Rockstar du moment</div>
          <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 300, fontSize: 56, color: theme.ink, lineHeight: 0.95, letterSpacing: -2 }}>{Dxl.recettes[0].nom}</div>
          <div style={{ fontSize: 13, color: theme.inkSoft, marginTop: 10, fontFamily: theme.monoFont, letterSpacing: 1, textTransform: "uppercase" }}>{Dxl.recettes[0].style} · {Dxl.recettes[0].abv}% · {Dxl.recettes[0].ibu} IBU</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.4, textTransform: "uppercase" }}>Prix matière 33cl</div>
          <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 56, color: theme.accent.base, lineHeight: 1, letterSpacing: -2, marginTop: 4 }}>{Dxl.recettes[0].prix33.toFixed(2)}<span style={{ fontSize: 22 }}>€</span></div>
        </div>
      </div>
      {/* Grid */}
      <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Toute la carte · {Dxl.recettes.length} recettes</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {Dxl.recettes.map((r, i) => (
          <div key={r.id} style={{ background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: theme.radius, padding: "22px 22px 24px", boxShadow: theme.shadow, position: "relative" }}>
            {r.tag && <div style={{ position: "absolute", top: 12, right: 12, fontSize: 8, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 700 }}>· {r.tag}</div>}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}><BottleX color={r.color} size={64} /></div>
            <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 22, color: theme.ink, textAlign: "center", letterSpacing: -0.5, lineHeight: 1.05 }}>{r.nom}</div>
            <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.4, textTransform: "uppercase", textAlign: "center", marginTop: 6 }}>{r.style} · {r.abv}%</div>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: 16, paddingTop: 14, borderTop: `1px dotted ${theme.line}` }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 9, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 1, textTransform: "uppercase" }}>IBU</div>
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 18, color: theme.ink }}>{r.ibu}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 9, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 1, textTransform: "uppercase" }}>SRM</div>
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 18, color: theme.ink }}>{r.srm}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 9, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 1, textTransform: "uppercase" }}>33cl</div>
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 18, color: theme.accent.base }}>{r.prix33.toFixed(2)}€</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DesktopX>
  );
}

function DesktopRecIndustrial({ theme }) {
  const persona = "industrial";
  return (
    <DesktopX theme={theme} persona={persona} active="rec"
      title="RECIPES · CATALOG"
      breadcrumb={`${Dxl.recettes.length} SKU · €/UNIT`}>
      <div style={{ border: `1px solid ${theme.line}`, background: theme.surface }}>
        <div style={{ padding: "10px 16px", borderBottom: `1px solid ${theme.line}`, fontFamily: theme.bodyFont, fontWeight: 800, fontSize: 12, letterSpacing: 1.2, color: theme.ink, textTransform: "uppercase", display: "flex", justifyContent: "space-between" }}>
          <span>RECIPE CATALOG</span>
          <span style={{ color: theme.inkMute, fontFamily: theme.monoFont, fontSize: 10, fontWeight: 500 }}>SORT · COST ASC</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "40px 1.4fr 0.8fr 0.6fr 0.6fr 0.6fr 0.8fr 0.8fr", gap: 12, padding: "10px 16px", borderBottom: `1px solid ${theme.line}`, background: theme.surfaceAlt, fontSize: 9, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.2, textTransform: "uppercase" }}>
          <span>ID</span><span>NAME</span><span>STYLE</span><span>ABV</span><span>IBU</span><span>SRM</span><span>€/33CL</span><span>TAG</span>
        </div>
        {Dxl.recettes.map((r, i) => (
          <div key={r.id} style={{ display: "grid", gridTemplateColumns: "40px 1.4fr 0.8fr 0.6fr 0.6fr 0.6fr 0.8fr 0.8fr", gap: 12, padding: "12px 16px", alignItems: "center", borderBottom: i < Dxl.recettes.length - 1 ? `1px solid ${theme.lineSoft}` : "none", fontFamily: theme.monoFont, fontSize: 12 }}>
            <div style={{ color: theme.accent.base, fontWeight: 800 }}>#{String(r.id).padStart(2, "0")}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 8, height: 16, background: r.color }} />
              <div style={{ color: theme.ink, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.4 }}>{r.nom}</div>
            </div>
            <div style={{ color: theme.inkSoft, fontSize: 11, textTransform: "uppercase" }}>{r.style}</div>
            <div style={{ color: theme.ink }}>{r.abv}%</div>
            <div style={{ color: theme.inkSoft }}>{r.ibu}</div>
            <div style={{ color: theme.inkSoft }}>{r.srm}</div>
            <div style={{ color: theme.accent.base, fontWeight: 800 }}>{r.prix33.toFixed(2)}</div>
            <div>{r.tag && <span style={{ display: "inline-block", padding: "2px 6px", background: `${theme.accent.base}22`, color: theme.accent.base, fontSize: 9, letterSpacing: 1, fontWeight: 700, textTransform: "uppercase" }}>{r.tag}</span>}</div>
          </div>
        ))}
      </div>
    </DesktopX>
  );
}

function DesktopRecEditorial({ theme }) {
  const persona = "editorial";
  return (
    <DesktopX theme={theme} persona={persona} active="rec"
      title="La carte"
      breadcrumb="ÉDITION 27.04.26 · BIÈRES">
      <div style={{ marginBottom: 36, paddingBottom: 24, borderBottom: `1px solid ${theme.ink}`, display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "end" }}>
        <div>
          <div style={{ fontSize: 11, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>{Dxl.recettes.length} recettes · une maison</div>
          <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 300, fontSize: 72, lineHeight: 0.95, letterSpacing: -3, color: theme.ink }}>
            La carte des <em style={{ color: theme.accent.base }}>Papas</em>.
          </div>
        </div>
        <div style={{ fontFamily: theme.monoFont, fontSize: 11, color: theme.inkMute, textAlign: "right", letterSpacing: 1, lineHeight: 1.6, textTransform: "uppercase" }}>
          Trier par<br />
          <span style={{ color: theme.ink, fontWeight: 700 }}>style · abv · prix</span>
        </div>
      </div>
      {/* List as feuilleton */}
      {Dxl.recettes.map((r, i) => (
        <article key={r.id} style={{ display: "grid", gridTemplateColumns: "60px 80px 1fr auto auto", gap: 36, padding: "24px 0", borderBottom: `1px solid ${theme.line}`, alignItems: "center" }}>
          <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 36, color: theme.accent.base, lineHeight: 1, letterSpacing: -1 }}>{String(i + 1).padStart(2, "0")}</div>
          <div style={{ display: "flex", justifyContent: "center" }}><BottleX color={r.color} size={56} /></div>
          <div>
            <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 300, fontSize: 36, color: theme.ink, letterSpacing: -1, lineHeight: 1 }}>{r.nom}</div>
            <div style={{ fontSize: 11, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.4, marginTop: 6, textTransform: "uppercase" }}>{r.style} · {r.abv}% · {r.ibu} IBU{r.tag && ` · ${r.tag}`}</div>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {[
              { l: "ABV", v: `${r.abv}%` },
              { l: "IBU", v: r.ibu },
              { l: "SRM", v: r.srm },
            ].map(s => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.4, textTransform: "uppercase" }}>{s.l}</div>
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 22, color: theme.ink, marginTop: 2 }}>{s.v}</div>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 36, color: theme.accent.base, letterSpacing: -1, minWidth: 110, textAlign: "right" }}>{r.prix33.toFixed(2)}<span style={{ fontSize: 18 }}>€</span></div>
        </article>
      ))}
    </DesktopX>
  );
}

// =============================================================
// DESKTOP LOCATIONS
// =============================================================
function DesktopLocPlayful({ theme }) {
  const persona = "playful";
  const STAT_COL = { confirmée: "#5A7A30", "en cours": theme.accent.base, "à rendre": "#A03828" };
  return (
    <DesktopX theme={theme} persona={persona} active="loc"
      title="Locations tireuses"
      breadcrumb="Réservations">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
        {[
          { t: "Tireuses", v: Dxl.tireuses.length, s: "au parc" },
          { t: "En location", v: 5, s: "cette semaine" },
          { t: "Réservées", v: 3, s: "à venir" },
          { t: "À rendre", v: 1, s: "aujourd'hui" },
        ].map(k => (
          <div key={k.t} style={{ background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: theme.radius, padding: "16px 20px", boxShadow: theme.shadow }}>
            <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.4, textTransform: "uppercase" }}>{k.t}</div>
            <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 400, fontSize: 36, color: theme.ink, letterSpacing: -1, marginTop: 4, lineHeight: 1 }}>{k.v}</div>
            <div style={{ fontSize: 11, color: theme.inkSoft, marginTop: 6 }}>{k.s}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 24 }}>
        {/* Parc */}
        <div>
          <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Parc · {Dxl.tireuses.length} tireuses</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
            {Dxl.tireuses.map(t => (
              <div key={t.id} style={{ background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: theme.radius, padding: "14px 16px", boxShadow: theme.shadow }}>
                <div style={{ width: 24, height: 4, background: t.color, marginBottom: 10 }} />
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 18, color: theme.ink, letterSpacing: -0.4, lineHeight: 1 }}>{t.nom}</div>
                <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.2, marginTop: 6, textTransform: "uppercase" }}>{t.becs} bec{t.becs > 1 ? "s" : ""}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Bookings */}
        <div>
          <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Réservations à venir</div>
          <div style={{ background: theme.surface, border: `1px solid ${theme.line}`, borderRadius: theme.radius, boxShadow: theme.shadow, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 0.8fr 0.6fr 0.8fr", gap: 12, padding: "12px 20px", fontSize: 9, letterSpacing: 1.4, fontFamily: theme.monoFont, color: theme.inkMute, textTransform: "uppercase", borderBottom: `1px solid ${theme.line}`, background: theme.surfaceAlt }}>
              <span>Client</span><span>Dates</span><span>Tireuse</span><span>Fûts</span><span>Statut</span>
            </div>
            {Dxl.locations.map((l, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 0.8fr 0.6fr 0.8fr", gap: 12, padding: "14px 20px", alignItems: "center", borderBottom: i < Dxl.locations.length - 1 ? `1px solid ${theme.lineSoft}` : "none", fontSize: 13 }}>
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", color: theme.ink, fontSize: 16, letterSpacing: -0.3 }}>{l.client}</div>
                <div style={{ fontSize: 11, color: theme.inkSoft, fontFamily: theme.monoFont, letterSpacing: 0.5 }}>{l.date}</div>
                <div style={{ fontSize: 11, color: theme.inkSoft, fontFamily: theme.monoFont, fontWeight: 700, letterSpacing: 0.6, textTransform: "uppercase" }}>{l.tireuse}</div>
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 18, color: theme.accent.base }}>{l.futs}</div>
                <div><ChipX theme={theme} persona={persona} color={STAT_COL[l.statut] || theme.accent.base}>{l.statut}</ChipX></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DesktopX>
  );
}

function DesktopLocIndustrial({ theme }) {
  const persona = "industrial";
  const STAT_COL = { confirmée: "#5A8A30", "en cours": theme.accent.base, "à rendre": "#C56848" };
  return (
    <DesktopX theme={theme} persona={persona} active="loc"
      title="RENTAL · DRAUGHT UNITS"
      breadcrumb={`${Dxl.tireuses.length} UNITS · ${Dxl.locations.length} BOOKINGS`}>
      {/* Fleet grid */}
      <div style={{ border: `1px solid ${theme.line}`, background: theme.surface, marginBottom: 20 }}>
        <div style={{ padding: "10px 16px", borderBottom: `1px solid ${theme.line}`, fontFamily: theme.bodyFont, fontWeight: 800, fontSize: 12, letterSpacing: 1.2, color: theme.ink, textTransform: "uppercase" }}>FLEET</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 0 }}>
          {Dxl.tireuses.map((t, i) => (
            <div key={t.id} style={{ padding: "14px", borderRight: i < Dxl.tireuses.length - 1 ? `1px solid ${theme.lineSoft}` : "none", textAlign: "left" }}>
              <div style={{ width: "100%", height: 3, background: t.color, marginBottom: 10 }} />
              <div style={{ fontFamily: theme.monoFont, fontWeight: 700, fontSize: 13, color: theme.ink, letterSpacing: 0.5 }}>{t.nom}</div>
              <div style={{ fontSize: 9, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.2, marginTop: 4, textTransform: "uppercase" }}>{t.becs} BEC{t.becs > 1 ? "S" : ""}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Bookings table */}
      <div style={{ border: `1px solid ${theme.line}`, background: theme.surface }}>
        <div style={{ padding: "10px 16px", borderBottom: `1px solid ${theme.line}`, fontFamily: theme.bodyFont, fontWeight: 800, fontSize: 12, letterSpacing: 1.2, color: theme.ink, textTransform: "uppercase" }}>BOOKINGS · {Dxl.locations.length}</div>
        <div style={{ display: "grid", gridTemplateColumns: "0.4fr 1.4fr 1fr 0.7fr 0.5fr 0.8fr", gap: 12, padding: "10px 16px", borderBottom: `1px solid ${theme.line}`, background: theme.surfaceAlt, fontSize: 9, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.2, textTransform: "uppercase" }}>
          <span>#</span><span>CLIENT</span><span>DATES</span><span>UNIT</span><span>KEGS</span><span>STATUS</span>
        </div>
        {Dxl.locations.map((l, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "0.4fr 1.4fr 1fr 0.7fr 0.5fr 0.8fr", gap: 12, padding: "12px 16px", alignItems: "center", borderBottom: i < Dxl.locations.length - 1 ? `1px solid ${theme.lineSoft}` : "none", fontFamily: theme.monoFont, fontSize: 12 }}>
            <div style={{ color: theme.accent.base, fontWeight: 800 }}>{String(i + 1).padStart(3, "0")}</div>
            <div style={{ color: theme.ink, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.4 }}>{l.client}</div>
            <div style={{ color: theme.inkSoft, fontSize: 11 }}>{l.date}</div>
            <div style={{ color: theme.ink, fontWeight: 700, fontSize: 11, letterSpacing: 0.6 }}>{l.tireuse}</div>
            <div style={{ color: theme.ink, fontWeight: 700 }}>{l.futs}</div>
            <div>
              <span style={{ display: "inline-block", padding: "2px 6px", background: `${STAT_COL[l.statut]}22`, color: STAT_COL[l.statut], fontSize: 9, letterSpacing: 1, fontWeight: 700, textTransform: "uppercase" }}>{l.statut}</span>
            </div>
          </div>
        ))}
      </div>
    </DesktopX>
  );
}

function DesktopLocEditorial({ theme }) {
  const persona = "editorial";
  return (
    <DesktopX theme={theme} persona={persona} active="loc"
      title="Locations"
      breadcrumb="ÉDITION 27.04.26 · TIREUSES">
      <div style={{ marginBottom: 36, paddingBottom: 24, borderBottom: `1px solid ${theme.ink}` }}>
        <div style={{ fontSize: 11, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>{Dxl.tireuses.length} tireuses · {Dxl.locations.length} réservations à venir</div>
        <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 300, fontSize: 64, lineHeight: 0.95, letterSpacing: -2, color: theme.ink, maxWidth: 920 }}>
          Cinq tireuses sortent <em style={{ color: theme.accent.base }}>vendredi</em>.
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 56 }}>
        {/* Parc */}
        <div>
          <div style={{ fontSize: 11, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Parc</div>
          <div>
            {Dxl.tireuses.map((t, i) => (
              <div key={t.id} style={{ display: "grid", gridTemplateColumns: "30px 1fr auto", gap: 16, padding: "14px 0", borderBottom: `1px dotted ${theme.line}`, alignItems: "baseline" }}>
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 14, color: theme.accent.base }}>{["I","II","III","IV","V","VI","VII","VIII"][i]}.</div>
                <div>
                  <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 20, color: theme.ink, letterSpacing: -0.4 }}>{t.nom}</div>
                  <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.2, textTransform: "uppercase", marginTop: 2 }}>{t.becs} bec{t.becs > 1 ? "s" : ""}</div>
                </div>
                <div style={{ width: 6, height: 28, background: t.color }} />
              </div>
            ))}
          </div>
        </div>
        {/* Bookings */}
        <div>
          <div style={{ fontSize: 11, fontFamily: theme.monoFont, color: theme.accent.base, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Réservations</div>
          <div>
            {Dxl.locations.map((l, i) => (
              <article key={i} style={{ display: "grid", gridTemplateColumns: "60px 1fr auto", gap: 24, padding: "20px 0", borderBottom: `1px solid ${theme.line}`, alignItems: "baseline" }}>
                <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontSize: 28, color: theme.accent.base, letterSpacing: -0.5, lineHeight: 1 }}>{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div style={{ fontFamily: theme.headFont, fontStyle: "italic", fontWeight: 300, fontSize: 28, color: theme.ink, letterSpacing: -0.8, lineHeight: 1 }}>{l.client}</div>
                  <div style={{ fontSize: 11, fontFamily: theme.monoFont, color: theme.inkMute, letterSpacing: 1.4, marginTop: 8, textTransform: "uppercase" }}>{l.date} · {l.tireuse} · {l.futs} fût{l.futs > 1 ? "s" : ""}</div>
                </div>
                <div style={{ fontSize: 10, fontFamily: theme.monoFont, color: theme.ink, letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 700, textAlign: "right" }}>{l.statut}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </DesktopX>
  );
}

window.DESKTOP_PROD = { DesktopProdPlayful, DesktopProdIndustrial, DesktopProdEditorial };
window.DESKTOP_REC  = { DesktopRecPlayful, DesktopRecIndustrial, DesktopRecEditorial };
window.DESKTOP_LOC  = { DesktopLocPlayful, DesktopLocIndustrial, DesktopLocEditorial };
