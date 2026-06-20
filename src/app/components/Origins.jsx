"use client";

import { useLanguage } from "./LanguageContext";

const origins = [
  { code: "FR", flag: "🇫🇷", fr: "France",        en: "France",        region: { fr: "Europe de l'Ouest", en: "Western Europe" } },
  { code: "IE", flag: "🇮🇪", fr: "Irlande",       en: "Ireland",       region: { fr: "Europe de l'Ouest", en: "Western Europe" } },
  { code: "US", flag: "🇺🇸", fr: "États-Unis",    en: "United States", region: { fr: "Amérique du Nord",  en: "North America"  } },
  { code: "AR", flag: "🇦🇷", fr: "Argentine",     en: "Argentina",     region: { fr: "Amérique du Sud",   en: "South America"  } },
  { code: "UY", flag: "🇺🇾", fr: "Uruguay",       en: "Uruguay",       region: { fr: "Amérique du Sud",   en: "South America"  } },
  { code: "BR", flag: "🇧🇷", fr: "Brésil",        en: "Brazil",        region: { fr: "Amérique du Sud",   en: "South America"  } },
  { code: "PL", flag: "🇵🇱", fr: "Pologne",       en: "Poland",        region: { fr: "Europe Centrale",   en: "Central Europe" } },
  { code: "IN", flag: "🇮🇳", fr: "Inde",          en: "India",         region: { fr: "Asie du Sud",       en: "South Asia"     } },
];

export default function Origins() {
  const { language } = useLanguage();

  return (
    <section id="origins" className="orig-root">

      {/* Bandes latérales — même style que Products */}
      <div className="orig-deco-left" aria-hidden="true">
        <div className="orig-deco-line" />
        <span className="orig-deco-text">GLOBAL · NETWORK · PARTNERS</span>
        <div className="orig-deco-line" />
      </div>
      <div className="orig-deco-right" aria-hidden="true">
        <div className="orig-deco-line" />
        <span className="orig-deco-text">EUROPE · AMERICAS · ASIA</span>
        <div className="orig-deco-line" />
      </div>

      {/* Watermark */}
      <div className="orig-watermark" aria-hidden="true">
        {language === "fr" ? "Origines" : "Origins"}
      </div>

      <div className="orig-inner">

        {/* Header */}
        <div className="orig-header">
          <p className="orig-eyebrow">
            {language === "fr" ? "Réseau International" : "Global Sourcing Network"}
          </p>
          <h2 className="orig-headline">
            {language === "fr"
              ? "Un réseau mondial de partenaires sélectionnés."
              : "A global network of selected partners."}
          </h2>
          <div className="orig-rule" aria-hidden="true" />
          <p className="orig-body">
            {language === "fr"
              ? "ROAZH développe des relations durables avec des producteurs et transformateurs reconnus afin de garantir qualité, fiabilité et continuité d'approvisionnement."
              : "ROAZH develops long-term relationships with trusted producers and processors to ensure quality, reliability and supply continuity."}
          </p>
        </div>

        {/* Compteur */}
        <div className="orig-counter">
          <span className="orig-counter-num">8</span>
          <span className="orig-counter-label">
            {language === "fr" ? "pays partenaires" : "partner countries"}
          </span>
          <div className="orig-counter-sep" />
          <span className="orig-counter-num">3</span>
          <span className="orig-counter-label">
            {language === "fr" ? "continents" : "continents"}
          </span>
        </div>

        {/* Grille pays */}
        <div className="orig-grid">
          {origins.map((o, i) => (
            <div key={o.code} className="orig-card">
              {/* Numéro discret */}
              <span className="orig-card-idx">{String(i + 1).padStart(2, "0")}</span>

              {/* Haut : drapeau + code */}
              <div className="orig-card-top">
                <span className="orig-card-flag">{o.flag}</span>
                <span className="orig-card-code">{o.code}</span>
              </div>

              {/* Pays + région */}
              <div className="orig-card-bot">
                <h3 className="orig-card-name">
                  {language === "fr" ? o.fr : o.en}
                </h3>
                <p className="orig-card-region">
                  {language === "fr" ? o.region.fr : o.region.en}
                </p>
              </div>

              {/* Ligne déco bas */}
              <div className="orig-card-line" aria-hidden="true" />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        /* ── Root ── */
        .orig-root {
          position: relative;
          background: #fff;
          padding: 7rem 1.5rem;
          overflow: hidden;
          border-top: 1px solid #f0ece4;
          isolation: isolate;
        }

        /* ── Bandes latérales ── */
        .orig-deco-left,
        .orig-deco-right {
          position: absolute;
          top: 0; bottom: 0;
          width: 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          pointer-events: none;
        }

        .orig-deco-left  { left: 0;  border-right: 1px solid rgba(200,169,110,0.18); background: rgba(200,169,110,0.03); }
        .orig-deco-right { right: 0; border-left:  1px solid rgba(200,169,110,0.18); background: rgba(200,169,110,0.03); }

        .orig-deco-line {
          flex: 1;
          width: 0.5px;
          background: linear-gradient(to bottom, transparent, rgba(200,169,110,0.35), transparent);
          max-height: 120px;
        }

        .orig-deco-text {
          writing-mode: vertical-rl;
          font-size: 0.52rem;
          letter-spacing: 0.3em;
          color: rgba(200,169,110,0.5);
          text-transform: uppercase;
          font-family: var(--font-geist-sans), sans-serif;
          white-space: nowrap;
        }

        /* ── Watermark ── */
        .orig-watermark {
          position: absolute;
          bottom: -2rem;
          right: 2rem;
          font-size: clamp(80px, 13vw, 160px);
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(200,169,110,0.05);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          font-family: Georgia, serif;
          z-index: 2;
          mix-blend-mode: multiply;
        }

        /* ── Inner ── */
        .orig-inner {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .orig-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #c8a96e;
          margin: 0 0 1.1rem;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 400;
        }

        .orig-headline {
          font-size: clamp(1.8rem, 3vw, 2.7rem);
          font-weight: 300;
          line-height: 1.12;
          color: #0d0d0b;
          margin: 0 0 1.4rem;
          font-family: Georgia, 'Times New Roman', serif;
          letter-spacing: -0.01em;
          max-width: 620px;
        }

        .orig-rule {
          width: 36px;
          height: 2px;
          background: #c8a96e;
          margin-bottom: 1.4rem;
        }

        .orig-body {
          font-size: 0.92rem;
          line-height: 1.78;
          color: #666;
          margin: 0 0 2.5rem;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 300;
          max-width: 560px;
        }

        /* ── Compteur ── */
        .orig-counter {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 3rem;
          padding: 1.25rem 1.75rem;
          border: 1px solid rgba(200,169,110,0.2);
          border-radius: 14px;
          background: rgba(200,169,110,0.03);
          width: fit-content;
        }

        .orig-counter-num {
          font-size: 2rem;
          font-weight: 300;
          color: #c8a96e;
          font-family: Georgia, serif;
          line-height: 1;
        }

        .orig-counter-label {
          font-size: 0.75rem;
          color: #999;
          font-family: var(--font-geist-sans), sans-serif;
          letter-spacing: 0.04em;
        }

        .orig-counter-sep {
          width: 1px;
          height: 28px;
          background: rgba(200,169,110,0.25);
        }

        /* ── Grille ── */
        .orig-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
        }

        /* ── Carte pays ── */
        .orig-card {
          position: relative;
          padding: 1.5rem 1.4rem 1.25rem;
          background: #fff;
          border: 1px solid #ebebeb;
          border-radius: 16px;
          overflow: hidden;
          cursor: default;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .orig-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(200,169,110,0.06) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .orig-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(200,169,110,0.1);
          border-color: rgba(200,169,110,0.35);
        }

        .orig-card:hover::before { opacity: 1; }

        /* Numéro en filigrane */
        .orig-card-idx {
          position: absolute;
          top: 0.75rem;
          right: 0.85rem;
          font-size: 0.6rem;
          color: #ddd;
          font-family: Georgia, serif;
          letter-spacing: 0.1em;
          transition: color 0.25s;
        }

        .orig-card:hover .orig-card-idx { color: rgba(200,169,110,0.5); }

        /* Haut : drapeau + code */
        .orig-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .orig-card-flag {
          font-size: 1.75rem;
          line-height: 1;
        }

        .orig-card-code {
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          color: #c8a96e;
          font-family: var(--font-geist-sans), sans-serif;
          opacity: 0.7;
        }

        /* Bas : nom + région */
        .orig-card-name {
          font-size: 1rem;
          font-weight: 400;
          color: #0d0d0b;
          margin: 0 0 0.25rem;
          font-family: Georgia, 'Times New Roman', serif;
        }

        .orig-card-region {
          font-size: 0.72rem;
          color: #bbb;
          margin: 0;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 300;
          letter-spacing: 0.03em;
        }

        /* Ligne dorée bas au hover */
        .orig-card-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c8a96e, transparent);
          transform: scaleX(0);
          transition: transform 0.35s ease;
          transform-origin: center;
        }

        .orig-card:hover .orig-card-line { transform: scaleX(1); }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .orig-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .orig-deco-left, .orig-deco-right { display: none; }
          .orig-watermark { display: none; }
          .orig-grid { grid-template-columns: repeat(2, 1fr); }
          .orig-counter { flex-wrap: wrap; gap: 0.75rem; }
        }
      `}</style>

    </section>
  );
}