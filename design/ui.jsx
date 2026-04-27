/* global React */

// =============================================================
// THEME FACTORY
// =============================================================
// 3 personas × accent variants × dark/light. Tokens used everywhere.
const ACCENTS = {
  amber: { base: "#D8901E", warm: "#E8A030", deep: "#A85E10", soft: "#F4D896" },
  green: { base: "#5A7A30", warm: "#6B8E3A", deep: "#3D5520", soft: "#C8D8A0" },
  brick: { base: "#A03828", warm: "#B85040", deep: "#702010", soft: "#E0B0A0" },
  hop:   { base: "#7A8B3C", warm: "#8FA250", deep: "#4F5F20", soft: "#D0D8A8" },
};

function makeTheme(persona, accentKey = "amber", typo = "fraunces", scheme = "auto") {
  const accent = ACCENTS[accentKey] || ACCENTS.amber;
  // typo families
  const typos = {
    fraunces: { head: "'Fraunces',serif", body: "'Inter',sans-serif", mono: "'JetBrains Mono',monospace" },
    abril:    { head: "'Abril Fatface',serif", body: "'DM Sans',sans-serif", mono: "'DM Mono',monospace" },
    archivo:  { head: "'Archivo',sans-serif", body: "'Archivo',sans-serif", mono: "'JetBrains Mono',monospace" },
  };
  const t = typos[typo] || typos.fraunces;

  // forced light or dark per persona; auto = persona default
  const isDark = scheme === "dark" || (scheme === "auto" && persona === "industrial");

  if (persona === "playful") {
    return isDark ? {
      persona, accent,
      bg: "#1F1A12", bgAlt: "#2A2418",
      surface: "#28221A", surfaceAlt: "#332B20",
      ink: "#F4ECDC", inkSoft: "#C0AE8E", inkMute: "#806E50",
      line: "#3D3428", lineSoft: "#2A2418",
      headFont: t.head, bodyFont: t.body, monoFont: t.mono,
      shadow: "0 6px 20px -8px rgba(0,0,0,0.5)",
      radius: 18, radiusSm: 12,
    } : {
      persona, accent,
      bg: "#F4ECDC", bgAlt: "#EBE0C8",
      surface: "#FBF6E9", surfaceAlt: "#F0E6CF",
      ink: "#1F1A12", inkSoft: "#5C4F3A", inkMute: "#9A8A6E",
      line: "#D9CCAC", lineSoft: "#E8DEC4",
      headFont: t.head, bodyFont: t.body, monoFont: t.mono,
      shadow: "0 6px 20px -8px rgba(60,40,10,0.18)",
      radius: 18, radiusSm: 12,
    };
  }
  if (persona === "industrial") {
    return isDark ? {
      persona, accent,
      bg: "#13110E", bgAlt: "#0E0C09",
      surface: "#1B1814", surfaceAlt: "#221E18",
      ink: "#E8E0D0", inkSoft: "#A39684", inkMute: "#6A5E4E",
      line: "#2D2820", lineSoft: "#1F1B16",
      headFont: t.head, bodyFont: t.body, monoFont: t.mono,
      shadow: "none",
      radius: 4, radiusSm: 2,
    } : {
      persona, accent,
      bg: "#E8E2D2", bgAlt: "#DCD4BE",
      surface: "#F2EDDD", surfaceAlt: "#E0D8C2",
      ink: "#1A160E", inkSoft: "#4A4030", inkMute: "#7A6E58",
      line: "#BCAF8C", lineSoft: "#CFC2A0",
      headFont: t.head, bodyFont: t.body, monoFont: t.mono,
      shadow: "none",
      radius: 4, radiusSm: 2,
    };
  }
  // editorial
  return isDark ? {
    persona, accent,
    bg: "#16140F", bgAlt: "#0F0D0A",
    surface: "#1B1812", surfaceAlt: "#221F18",
    ink: "#F0E8D6", inkSoft: "#B8AB92", inkMute: "#7A6E58",
    line: "#2C2820", lineSoft: "#211D16",
    headFont: t.head, bodyFont: t.body, monoFont: t.mono,
    shadow: "none",
    radius: 0, radiusSm: 0,
  } : {
    persona, accent,
    bg: "#F8F1E2", bgAlt: "#F0E8D4",
    surface: "#FCF7EA", surfaceAlt: "#F2EAD4",
    ink: "#1A1610", inkSoft: "#52473A", inkMute: "#8A7E66",
    line: "#D4C8A8", lineSoft: "#E2D7B8",
    headFont: t.head, bodyFont: t.body, monoFont: t.mono,
    shadow: "none",
    radius: 0, radiusSm: 0,
  };
}

window.makeTheme = makeTheme;

// =============================================================
// PHONE FRAME — 360x780 with iOS-ish chrome
// =============================================================
function Phone({ theme, persona, children }) {
  return (
    <div style={{
      width: 360, height: 780,
      background: theme.bg,
      borderRadius: 44,
      border: `8px solid #1A140C`,
      boxShadow: "0 30px 60px -20px rgba(40,28,12,0.4), inset 0 0 0 2px rgba(255,255,255,0.06)",
      overflow: "hidden",
      position: "relative",
      fontFamily: theme.bodyFont,
      color: theme.ink,
    }}>
      {/* Status bar */}
      <div style={{
        height: 32,
        padding: "10px 24px 0",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 11, fontWeight: 700, fontFamily: theme.monoFont,
        color: theme.ink,
        position: "relative", zIndex: 2,
      }}>
        <span>9:41</span>
        <span style={{ display: "flex", gap: 5, alignItems: "center" }}>
          <span style={{ fontSize: 9 }}>●●●●</span>
          <span style={{ fontSize: 9 }}>◐</span>
          <span style={{
            width: 22, height: 11, border: `1px solid ${theme.ink}`, borderRadius: 3, position: "relative",
            display: "inline-block",
          }}>
            <span style={{ position: "absolute", left: 1, top: 1, bottom: 1, width: 16, background: theme.ink, borderRadius: 1 }} />
          </span>
        </span>
      </div>
      {/* Notch */}
      <div style={{
        position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)",
        width: 110, height: 28, background: "#1A140C", borderRadius: 16, zIndex: 3,
      }} />
      <div style={{ height: "calc(100% - 32px)", overflow: "hidden", position: "relative" }}>
        {children}
      </div>
      {/* Home indicator */}
      <div style={{
        position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)",
        width: 120, height: 4, background: theme.ink, opacity: 0.4, borderRadius: 999, zIndex: 4,
      }} />
    </div>
  );
}

// =============================================================
// TAB BAR — bottom nav, 5 items
// =============================================================
function TabBar({ theme, persona, active }) {
  const items = [
    { id: "home",  label: "Accueil", icon: "◉" },
    { id: "stock", label: "Stock",   icon: "▦" },
    { id: "prod",  label: "Brassins",icon: "⏣" },
    { id: "rec",   label: "Carte",   icon: "✦" },
    { id: "loc",   label: "Locations",icon:"◧" },
  ];
  const isInd = persona === "industrial";
  const isEdi = persona === "editorial";
  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0,
      paddingBottom: 18, paddingTop: 8,
      background: isInd ? `${theme.surface}EE` : `${theme.surface}EC`,
      backdropFilter: "blur(12px)",
      borderTop: `1px solid ${theme.line}`,
      display: "grid", gridTemplateColumns: "repeat(5, 1fr)",
      zIndex: 5,
    }}>
      {items.map(it => {
        const a = it.id === active;
        return (
          <div key={it.id} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
            color: a ? theme.accent.base : theme.inkMute,
            padding: "4px 0",
          }}>
            <span style={{ fontSize: 16, opacity: a ? 1 : 0.7 }}>{it.icon}</span>
            <span style={{
              fontSize: 9, fontWeight: a ? 700 : 500,
              fontFamily: isInd ? theme.monoFont : theme.bodyFont,
              letterSpacing: isInd ? 0.5 : 0,
              textTransform: isInd ? "uppercase" : "none",
            }}>{it.label}</span>
            {a && isEdi && <span style={{ width: 16, height: 1, background: theme.accent.base, marginTop: 2 }} />}
          </div>
        );
      })}
    </div>
  );
}

// =============================================================
// KPI — small stat card (used industrial mostly)
// =============================================================
function KPI({ theme, persona, label, value, sub }) {
  const isInd = persona === "industrial";
  return (
    <div style={{
      background: theme.surface, border: `1px solid ${theme.line}`,
      borderRadius: theme.radiusSm,
      padding: "10px 12px",
      position: "relative",
    }}>
      {isInd && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: theme.accent.base }} />}
      <div style={{ fontSize: 9, color: theme.inkMute, fontFamily: theme.monoFont, letterSpacing: 1.4, textTransform: "uppercase" }}>{label}</div>
      <div style={{
        fontSize: 22,
        fontFamily: isInd ? theme.bodyFont : theme.headFont,
        fontWeight: isInd ? 800 : 500,
        fontStyle: isInd ? "normal" : "italic",
        color: theme.ink, marginTop: 4, letterSpacing: -0.5, lineHeight: 1,
      }}>{value}</div>
      <div style={{ fontSize: 10, color: theme.inkSoft, marginTop: 4, fontFamily: theme.monoFont }}>{sub}</div>
    </div>
  );
}

// =============================================================
// SECTION HEADER (mobile)
// =============================================================
function H({ theme, persona, k, t, action }) {
  const isInd = persona === "industrial";
  const isEdi = persona === "editorial";
  return (
    <div style={{
      padding: isEdi ? "20px 22px 8px" : "16px 18px 8px",
      display: "flex", justifyContent: "space-between", alignItems: "baseline",
      borderTop: isEdi ? `1px solid ${theme.line}` : "none",
      marginTop: isEdi ? 8 : 0,
    }}>
      <div>
        <div style={{ fontSize: 9, color: theme.accent.base, fontFamily: theme.monoFont, letterSpacing: 2, fontWeight: 700, textTransform: "uppercase" }}>{k}</div>
        <div style={{
          fontFamily: isInd ? theme.bodyFont : theme.headFont,
          fontSize: isEdi ? 22 : 16,
          fontWeight: isInd ? 800 : (isEdi ? 300 : 500),
          fontStyle: isInd ? "normal" : "italic",
          color: theme.ink, marginTop: 2,
          letterSpacing: isInd ? -0.3 : -0.5,
        }}>{t}</div>
      </div>
      {action && <div style={{ fontSize: 11, color: theme.accent.base, fontFamily: theme.monoFont, fontWeight: 600 }}>{action}</div>}
    </div>
  );
}

// =============================================================
// CHIP — small pill / tag
// =============================================================
function Chip({ theme, persona, color, mono, children }) {
  const isInd = persona === "industrial" || mono;
  const c = color || theme.accent.base;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: isInd ? "3px 7px" : "4px 10px",
      borderRadius: isInd ? 0 : 999,
      background: `${c}1F`,
      color: c,
      fontSize: isInd ? 9 : 10,
      fontFamily: isInd ? theme.monoFont : theme.bodyFont,
      fontWeight: 700,
      letterSpacing: isInd ? 1 : 0.2,
      border: isInd ? `1px solid ${c}55` : "none",
      textTransform: isInd ? "uppercase" : "none",
      whiteSpace: "nowrap",
    }}>{children}</span>
  );
}

// =============================================================
// BOTTLE — stylized bottle SVG with label
// =============================================================
function Bottle({ color = "#D8901E", size = 56, label = "", glow = false }) {
  const w = size, h = size * 1.42;
  return (
    <svg width={w} height={h} viewBox="0 0 56 80" style={{ overflow: "visible" }}>
      {glow && <ellipse cx="28" cy="78" rx="22" ry="3" fill={color} opacity="0.25" />}
      {/* neck */}
      <rect x="22" y="3" width="12" height="14" rx="2" fill={color} opacity="0.85" />
      {/* shoulder */}
      <path d="M22 16 Q 22 22 14 26 L 14 70 Q 14 76 20 76 L 36 76 Q 42 76 42 70 L 42 26 Q 34 22 34 16 Z" fill={color} />
      {/* highlight */}
      <rect x="17" y="30" width="2.5" height="38" fill="#FFFFFF" opacity="0.18" rx="1" />
      {/* cap */}
      <rect x="21" y="0" width="14" height="5" rx="1" fill="#1A140C" />
      <rect x="21" y="0" width="14" height="2" fill="#FFFFFF" opacity="0.15" />
      {/* label */}
      <rect x="14" y="38" width="28" height="22" fill="#FBF6E9" opacity="0.95" />
      <text x="28" y="48" textAnchor="middle" fontSize="6" fontFamily="'JetBrains Mono', monospace" fill={color} fontWeight="700" letterSpacing="0.5">
        {label.slice(0, 6)}
      </text>
      <line x1="16" y1="52" x2="40" y2="52" stroke={color} strokeWidth="0.5" opacity="0.4" />
      <text x="28" y="58" textAnchor="middle" fontSize="3.5" fontFamily="'JetBrains Mono', monospace" fill={color} opacity="0.7">PAPAS</text>
    </svg>
  );
}

// =============================================================
// SPRIG — decorative hop sprig
// =============================================================
function Sprig({ color = "#5A7A30", size = 80, opacity = 0.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" style={{ opacity }}>
      <path d="M40 78 Q 38 50 22 30 Q 18 20 24 8" stroke={color} strokeWidth="1.5" fill="none" />
      {[
        [22, 22, -25], [28, 32, -10], [22, 42, -30], [30, 50, -15], [24, 60, -25], [32, 68, -10],
        [38, 18, 10], [44, 28, 25], [40, 38, 8], [48, 46, 22], [42, 56, 5], [50, 64, 18],
      ].map(([cx, cy, rot], i) => (
        <ellipse key={i} cx={cx} cy={cy} rx="5" ry="3.5" fill={color} transform={`rotate(${rot} ${cx} ${cy})`} opacity={0.85 - i * 0.04} />
      ))}
    </svg>
  );
}

window.UI = { Phone, TabBar, KPI, H, Chip, Bottle, Sprig };
