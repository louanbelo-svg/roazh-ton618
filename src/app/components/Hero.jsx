"use client";

import { useLanguage } from "./LanguageContext";
import { translations } from "../data/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      {/*
        La navbar est fixed donc elle flotte AU-DESSUS du hero.
        Le hero fait 100svh (plein écran) — la navbar est superposée
        et transparente, donc ça fusionne parfaitement.
      */}
      <section className="hero-root">

        {/* Image de fond — place /public/images/hero-cows.jpg */}
        <img
          src="/images/hero-cows.jpg"
          alt=""
          aria-hidden="true"
          className="hero-bg-img"
          fetchPriority="high"
        />

        {/* Overlay gauche → droite */}
        <div className="hero-ov-left"  aria-hidden="true" />
        {/* Overlay bas → haut */}
        <div className="hero-ov-bottom" aria-hidden="true" />

        {/* Watermark géant */}
        <div className="hero-watermark" aria-hidden="true">ROAZH</div>

        {/* ── Contenu ── */}
        <div className="hero-body hero-reveal">

          <div className="hero-left">
            <p className="hero-eyebrow">{t.hero.subtitle}</p>

            <h1 className="hero-headline">
              {t.hero.title1}<br />
              {t.hero.title2}<br />
              {t.hero.title3}
            </h1>

            <div className="hero-rule" aria-hidden="true" />

            <p className="hero-desc">{t.hero.description}</p>

            <div className="hero-ctas">
              <a href="#contact" className="hbtn hbtn-solid">
                {language === "fr" ? "Nous contacter" : "Contact us"} →
              </a>
              <a href="#products" className="hbtn hbtn-ghost">
                {language === "fr" ? "Voir les produits" : "View products"} →
              </a>
            </div>
          </div>

          {/* Badge 15+ */}
          <div className="hero-badge-wrap">
            <div className="hero-badge">
              <span className="badge-num">15+</span>
              <span className="badge-lbl">
                {language === "fr" ? "ANS\nD'EXPÉRIENCE" : "YEARS\nOF EXPERIENCE"}
              </span>
            </div>
          </div>

        </div>

        {/* ── Barre du bas ── */}
        <footer className="hero-foot">
          <div className="hero-pillars">

            <div className="pillar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span>{language === "fr" ? "SOURCING\nMONDIAL" : "GLOBAL\nSOURCING"}</span>
            </div>

            <div className="pillar-sep" aria-hidden="true" />

            <div className="pillar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>{language === "fr" ? "PARTENARIATS\nDE CONFIANCE" : "TRUSTED\nPARTNERSHIPS"}</span>
            </div>

            <div className="pillar-sep" aria-hidden="true" />

            <div className="pillar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
                <polyline points="9 11 12 14 22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
              <span>{language === "fr" ? "QUALITÉ\nCONSTANTE" : "CONSISTENT\nQUALITY"}</span>
            </div>

          </div>

          <div className="hero-location">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            {language === "fr" ? "Basée à Rennes, France" : "Based in Rennes, France"}
          </div>
        </footer>

      </section>

      <style>{`
        .hero-root {
          position: relative;
          width: 100%;
          height: 100svh;       /* plein écran — la navbar fixed flotte dessus */
          min-height: 600px;
          display: flex;
          flex-direction: column;
          color: #fff;
          overflow: hidden;
        }

        .hero-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 38%;
          z-index: 0;
          filter: saturate(1.1) brightness(0.9);
        }

        .hero-ov-left {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            108deg,
            rgba(5,5,4,0.87) 0%,
            rgba(5,5,4,0.55) 40%,
            rgba(5,5,4,0.15) 68%,
            transparent 100%
          );
        }

        .hero-ov-bottom {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to top,
            rgba(3,3,2,0.92) 0%,
            rgba(3,3,2,0.32) 28%,
            transparent 52%
          );
        }

        .hero-watermark {
          position: absolute;
          z-index: 2;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -52%);
          font-size: clamp(90px, 19vw, 250px);
          font-weight: 700;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.07);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          font-family: var(--font-geist-sans), Georgia, serif;
        }

        /* Le contenu commence sous la navbar (72px de padding-top) */
        .hero-body {
          position: relative;
          z-index: 3;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 72px 3.5rem 0.5rem;   /* 72px = hauteur navbar */
          gap: 2rem;
        }

        .hero-left { max-width: 580px; }

        .hero-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #c8a96e;
          margin: 0 0 1.15rem;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 400;
        }

        .hero-headline {
          font-size: clamp(1.85rem, 3.5vw, 2.95rem);
          font-weight: 300;
          line-height: 1.13;
          letter-spacing: -0.01em;
          margin: 0 0 1.4rem;
          font-family: Georgia, 'Times New Roman', serif;
        }

        .hero-rule {
          width: 36px;
          height: 2px;
          background: #c8a96e;
          margin-bottom: 1.3rem;
        }

        .hero-desc {
          font-size: 0.87rem;
          line-height: 1.78;
          color: rgba(255,255,255,0.62);
          margin: 0 0 1.9rem;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 300;
          max-width: 430px;
        }

        .hero-ctas { display: flex; gap: 0.9rem; flex-wrap: wrap; }

        .hbtn {
          display: inline-flex;
          align-items: center;
          padding: 0.72rem 1.65rem;
          border-radius: 50px;
          font-size: 0.83rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-decoration: none;
          font-family: var(--font-geist-sans), sans-serif;
          transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease;
          cursor: pointer;
        }

        .hbtn-solid { background: #fff; color: #0d0d0b; border: 1.5px solid transparent; }
        .hbtn-solid:hover { background: rgba(255,255,255,0.86); transform: scale(1.025); }

        .hbtn-ghost { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.38); }
        .hbtn-ghost:hover { border-color: rgba(255,255,255,0.72); background: rgba(255,255,255,0.06); transform: scale(1.025); }

        .hero-badge-wrap { flex-shrink: 0; align-self: flex-start; margin-top: 0.25rem; }

        .hero-badge {
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 10px;
          padding: 1rem 1.3rem;
          text-align: right;
          backdrop-filter: blur(8px);
          background: rgba(255,255,255,0.04);
          min-width: 112px;
        }

        .badge-num {
          display: block;
          font-size: 2.5rem;
          color: #c8a96e;
          line-height: 1;
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .badge-lbl {
          display: block;
          font-size: 0.6rem;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.5);
          margin-top: 0.3rem;
          line-height: 1.6;
          font-family: var(--font-geist-sans), sans-serif;
          white-space: pre-line;
        }

        .hero-foot {
          position: relative;
          z-index: 3;
          padding: 0 3.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .hero-pillars {
          display: flex;
          align-items: center;
          padding-top: 1.3rem;
          border-top: 0.5px solid rgba(255,255,255,0.11);
        }

        .pillar { display: flex; align-items: center; gap: 0.65rem; padding-right: 2rem; color: #c8a96e; }

        .pillar span {
          font-size: 0.64rem;
          letter-spacing: 0.15em;
          line-height: 1.58;
          color: rgba(255,255,255,0.68);
          font-family: var(--font-geist-sans), sans-serif;
          white-space: pre-line;
        }

        .pillar-sep {
          width: 0.5px;
          height: 28px;
          background: rgba(255,255,255,0.16);
          margin-right: 2rem;
          flex-shrink: 0;
        }

        .hero-location {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.4);
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 300;
        }

        @media (max-width: 900px) {
          .hero-body {
            padding: 80px 1.75rem 0.5rem;
            flex-direction: column-reverse;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .hero-badge-wrap { align-self: flex-end; }
          .hero-foot { padding: 0 1.75rem 1.25rem; }
          .hero-pillars { flex-wrap: wrap; gap: 0.8rem; }
          .pillar-sep { display: none; }
          .pillar { padding-right: 0; }
        }

        @media (max-width: 480px) {
          .hero-headline { font-size: 1.7rem; }
          .hero-badge { display: none; }
        }
      `}</style>
    </>
  );
}