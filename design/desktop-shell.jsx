/* global React */
const { Phone, KPI, H, TabBar, Chip, Bottle, Sprig } = window.UI;
const D = window.BREWERY_DATA;

// =============================================================
// DESKTOP SHELL — sidebar nav + content area, 1440x900
// =============================================================
function Desktop({ theme, persona, active, title, breadcrumb, children, headerExtra }) {
  const isInd = persona === "industrial";
  const isEdi = persona === "editorial";

  const navItems = [
    { id: "home",  label: "Accueil",     icon: "◉" },
    { id: "stock", label: "Stock",       icon: "▦" },
    { id: "prod",  label: "Production",  icon: "⏣" },
    { id: "rec",   label: "Carte",       icon: "✦" },
    { id: "loc",   label: "Locations",   icon: "◧" },
  ];

  const sidebarBg   = isInd ? theme.surface : (isEdi ? theme.bg : theme.surface);
  const contentBg   = theme.bg;

  return (
    <div style={{
      width: 1440, height: 900,
      background: contentBg,
      display: "flex",
      fontFamily: theme.bodyFont,
      color: theme.ink,
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "0 30px 60px -30px rgba(0,0,0,0.3)",
      position: "relative",
    }}>
      {/* SIDEBAR */}
      <aside style={{
        width: 240,
        background: sidebarBg,
        borderRight: `1px solid ${theme.line}`,
        display: "flex", flexDirection: "column",
        flexShrink: 0,
        padding: isEdi ? "32px 0" : "24px 0",
      }}>
        {/* Brand */}
        <div style={{ padding: "0 22px 28px", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36,
            borderRadius: isEdi ? 0 : (isInd ? 4 : 10),
            background: theme.accent.base,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#FFF", fontFamily: theme.headFont, fontWeight: 700, fontSize: 18,
            fontStyle: isEdi ? "italic" : "normal",
          }}>P</div>
          <div>
            <div style={{
              fontFamily: theme.headFont,
              fontSize: isEdi ? 17 : 15,
              fontStyle: isEdi ? "italic" : "normal",
              fontWeight: isInd ? 800 : 600,
              color: theme.ink, lineHeight: 1.05,
              letterSpacing: isInd ? 0.3 : -0.3,
              textTransform: isInd ? "uppercase" : "none",
            }}>Papas Brasseurs</div>
            <div style={{
              fontSize: 9, fontFamily: theme.monoFont,
              color: theme.inkMute, letterSpacing: 1.4, marginTop: 2,
              textTransform: "uppercase",
            }}>Brasserie · v2.4</div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "0 12px", display: "flex", flexDirection: "column", gap: isInd ? 2 : 4 }}>
          {navItems.map(it => {
            const a = it.id === active;
            return (
              <div key={it.id} style={{
                padding: isInd ? "9px 12px" : "10px 14px",
                borderRadius: isEdi ? 0 : (isInd ? 4 : 10),
                background: a ? (isInd ? `${theme.accent.base}22` : (isEdi ? "transparent" : `${theme.accent.base}14`)) : "transparent",
                borderLeft: a && isEdi ? `3px solid ${theme.accent.base}` : "3px solid transparent",
                paddingLeft: isEdi ? 16 : undefined,
                color: a ? theme.accent.base : theme.inkSoft,
                display: "flex", alignItems: "center", gap: 12,
                fontWeight: a ? (isInd ? 800 : 600) : 500,
                fontSize: 13,
                fontFamily: isInd ? theme.bodyFont : theme.bodyFont,
                letterSpacing: isInd ? 0.4 : 0,
                textTransform: isInd ? "uppercase" : "none",
                cursor: "pointer",
              }}>
                <span style={{ fontSize: 14, opacity: a ? 1 : 0.7 }}>{it.icon}</span>
                <span>{it.label}</span>
              </div>
            );
          })}
        </nav>

        {/* User card */}
        <div style={{
          margin: "0 12px",
          padding: 12,
          borderTop: `1px solid ${theme.line}`,
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <div style={{
            width: 32, height: 32,
            borderRadius: 999,
            background: theme.accent.base, color: "#FFF",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: theme.headFont, fontWeight: 600, fontSize: 12,
          }}>{D.user.initials}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: theme.ink }}>{D.user.name}</div>
            <div style={{ fontSize: 10, color: theme.inkMute, fontFamily: theme.monoFont }}>Brasseur · admin</div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Top bar */}
        <header style={{
          height: 64,
          padding: "0 32px",
          borderBottom: `1px solid ${theme.line}`,
          background: isInd ? theme.bg : theme.surface,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexShrink: 0,
        }}>
          <div>
            {breadcrumb && (
              <div style={{
                fontSize: 10, fontFamily: theme.monoFont, color: theme.inkMute,
                letterSpacing: 1.4, textTransform: "uppercase", marginBottom: 2,
              }}>{breadcrumb}</div>
            )}
            <div style={{
              fontFamily: isInd ? theme.bodyFont : theme.headFont,
              fontWeight: isInd ? 800 : (isEdi ? 400 : 600),
              fontStyle: isEdi ? "italic" : "normal",
              fontSize: isEdi ? 24 : 20,
              color: theme.ink,
              letterSpacing: isInd ? 0.3 : -0.5,
              textTransform: isInd ? "uppercase" : "none",
            }}>{title}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {headerExtra}
            {/* Search */}
            <div style={{
              padding: "8px 14px",
              background: isInd ? theme.surface : theme.surfaceAlt,
              border: `1px solid ${theme.line}`,
              borderRadius: isEdi ? 0 : 999,
              fontSize: 12, color: theme.inkMute,
              fontFamily: theme.bodyFont,
              display: "flex", alignItems: "center", gap: 8,
              minWidth: 220,
            }}>
              <span style={{ opacity: 0.6 }}>⌕</span>
              <span>Rechercher…</span>
              <span style={{ marginLeft: "auto", fontFamily: theme.monoFont, fontSize: 10, opacity: 0.6 }}>⌘K</span>
            </div>
            {/* Bell */}
            <div style={{
              width: 36, height: 36,
              borderRadius: isEdi ? 0 : (isInd ? 4 : 999),
              background: isInd ? theme.surface : "transparent",
              border: `1px solid ${theme.line}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, color: theme.inkSoft,
              position: "relative",
            }}>
              ◔
              <span style={{
                position: "absolute", top: 6, right: 7,
                width: 7, height: 7, borderRadius: 999,
                background: "#C04030",
              }} />
            </div>
            <button style={{
              padding: "9px 16px",
              background: theme.accent.base,
              color: "#FFF",
              border: "none",
              borderRadius: isEdi ? 0 : (isInd ? 4 : 999),
              fontSize: 12, fontWeight: 700,
              fontFamily: theme.bodyFont,
              letterSpacing: isInd ? 0.6 : 0,
              textTransform: isInd ? "uppercase" : "none",
              cursor: "pointer",
            }}>+ Nouveau brassin</button>
          </div>
        </header>

        {/* Content */}
        <div style={{ flex: 1, overflow: "auto", padding: "28px 32px" }}>
          {children}
        </div>
      </main>
    </div>
  );
}

window.Desktop = Desktop;
