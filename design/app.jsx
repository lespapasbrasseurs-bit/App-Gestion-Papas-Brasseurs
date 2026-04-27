/* global React, ReactDOM */
const { useMemo } = React;
const { UI, HOME, STOCK, PROD, REC, LOC, DESKTOP_HOME, DESKTOP_STOCK, DESKTOP_PROD, DESKTOP_REC, DESKTOP_LOC, makeTheme } = window;
const { DesignCanvas, DCSection, DCArtboard } = window;
const { TweaksPanel, TweakSection, TweakRadio, useTweaks } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "typo": "fraunces",
  "scheme": "light"
}/*EDITMODE-END*/;

function App() {
  const [tw, setTw] = useTweaks(TWEAK_DEFAULTS);
  const typo   = tw.typo   || "fraunces";
  const scheme = tw.scheme || "light";

  const theme = useMemo(() => makeTheme("playful", "amber", typo, scheme), [typo, scheme]);

  const { Phone } = UI;
  const { HomePlayful }  = HOME;
  const { StockPlayful } = STOCK;
  const { ProdPlayful }  = PROD;
  const { RecPlayful }   = REC;
  const { LocPlayful }   = LOC;

  const { DesktopHomePlayful }  = DESKTOP_HOME;
  const { DesktopStockPlayful } = DESKTOP_STOCK;
  const { DesktopProdPlayful }  = DESKTOP_PROD;
  const { DesktopRecPlayful }   = DESKTOP_REC;
  const { DesktopLocPlayful }   = DESKTOP_LOC;

  const Frame = ({ children }) => (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
      <Phone theme={theme} persona="playful">{children}</Phone>
    </div>
  );

  const mobileScreens = [
    { id: "m-home",  title: "Mobile · Accueil",          Comp: HomePlayful  },
    { id: "m-stock", title: "Mobile · Stock",            Comp: StockPlayful },
    { id: "m-prod",  title: "Mobile · Production",       Comp: ProdPlayful  },
    { id: "m-rec",   title: "Mobile · Carte des bières", Comp: RecPlayful   },
    { id: "m-loc",   title: "Mobile · Locations",        Comp: LocPlayful   },
  ];

  const desktopScreens = [
    { id: "d-home",  title: "Desktop · Accueil",          Comp: DesktopHomePlayful  },
    { id: "d-stock", title: "Desktop · Stock",            Comp: DesktopStockPlayful },
    { id: "d-prod",  title: "Desktop · Production",       Comp: DesktopProdPlayful  },
    { id: "d-rec",   title: "Desktop · Carte des bières", Comp: DesktopRecPlayful   },
    { id: "d-loc",   title: "Desktop · Locations",        Comp: DesktopLocPlayful   },
  ];

  return (
    <>
      <DesignCanvas
        title="Papas Brasseurs · Refonte Playful"
        subtitle="5 écrans · mobile + desktop"
      >
        <DCSection id="ctx" title="Direction visuelle">
          <DCArtboard id="manifesto" label="Playful — papier crème, italique chaleureux" width={760} height={460}>
            <div style={{ padding: "44px 52px", fontFamily: "'Inter',sans-serif", color: "#1F1A12", height: "100%", background: "#F4ECDC", display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: 2, color: "#A03828", fontWeight: 700 }}>NOTE DE DESIGN · 27.04.26</div>
              <div style={{ fontFamily: "'Fraunces',serif", fontSize: 56, fontWeight: 300, fontStyle: "italic", lineHeight: 0.95, letterSpacing: -2 }}>
                Playful.<br />Une seule voix.
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#5C4F3A", maxWidth: 580 }}>
                Papier crème, italiques Fraunces, cartes douces, dégradé chaleureux sur le brassin star.
                Pour le craft, la convivialité — la table d'un brasseur qui aime sa bière. Mêmes données,
                cinq écrans, en mobile et desktop.
              </p>
              <div style={{ marginTop: "auto", fontSize: 11, color: "#9A8A6E", fontFamily: "'JetBrains Mono',monospace", letterSpacing: 0.5 }}>
                ▸ Tweaks (en bas à droite) — bascule la <strong>typo</strong> et <strong>clair / sombre</strong>
              </div>
            </div>
          </DCArtboard>
        </DCSection>

        {mobileScreens.map(scr => (
          <DCSection key={scr.id} id={scr.id} title={scr.title}>
            <DCArtboard id={`${scr.id}-art`} label="Mobile · 360 × 780" width={400} height={820}>
              <Frame><scr.Comp theme={theme} /></Frame>
            </DCArtboard>
          </DCSection>
        ))}

        {desktopScreens.map(scr => (
          <DCSection key={scr.id} id={scr.id} title={scr.title}>
            <DCArtboard id={`${scr.id}-art`} label="Desktop · 1440 × 900" width={1480} height={940}>
              <div style={{ padding: 20, background: "#F4ECDC", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <scr.Comp theme={theme} />
              </div>
            </DCArtboard>
          </DCSection>
        ))}
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Famille typo">
          <TweakRadio
            value={typo}
            onChange={v => setTw('typo', v)}
            options={[
              { value: "fraunces", label: "Fraunces" },
              { value: "abril",    label: "Abril"    },
              { value: "archivo",  label: "Archivo"  },
            ]}
          />
        </TweakSection>
        <TweakSection title="Thème">
          <TweakRadio
            value={scheme}
            onChange={v => setTw('scheme', v)}
            options={[
              { value: "light", label: "Clair"  },
              { value: "dark",  label: "Sombre" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
