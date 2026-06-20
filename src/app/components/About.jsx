"use client";

import { useLanguage } from "./LanguageContext";

export default function About() {
  const { language } = useLanguage();

  const values = language === "fr"
    ? [
        {
          title: "Confiance",
          text: "Des relations durables construites grâce à la transparence et à la constance.",
        },
        {
          title: "Engagement",
          text: "Chaque opération est menée avec rigueur, réactivité et attention aux détails.",
        },
        {
          title: "Vision Internationale",
          text: "Accès à des opportunités d'approvisionnement en Europe, Océanie, Amériques et autres régions stratégiques de production laitière.",
        },
      ]
    : [
        {
          title: "Trust",
          text: "Long-term relationships built through transparency and consistency.",
        },
        {
          title: "Commitment",
          text: "Every transaction is managed with the same level of rigor, responsiveness and attention.",
        },
        {
          title: "Global Perspective",
          text: "Access to sourcing opportunities across Europe, Oceania, the Americas and other strategic dairy-producing regions.",
        },
      ];

  return (
    <section id="about" className="about-root">

      {/* Watermark décoratif */}
      <div className="about-watermark" aria-hidden="true">
        {language === "fr" ? "Confiance" : "Trust"}
      </div>

      <div className="about-inner">

        {/* Colonne gauche */}
        <div className="about-left">

          <p className="about-eyebrow">
            {language === "fr" ? "Qui sommes-nous" : "Who We Are"}
          </p>

          <h2 className="about-headline">
            {language === "fr"
              ? "Un partenaire de confiance dans le négoce d'ingrédients laitiers."
              : "A trusted partner in dairy ingredient trading."}
          </h2>

          <div className="about-rule" aria-hidden="true" />

          <p className="about-body">
            {language === "fr"
              ? "Basée à Rennes en Bretagne, ROAZH est une société française spécialisée dans le négoce d'ingrédients laitiers et le sourcing international. Fondée sur la confiance, l'engagement et la proximité, nous mettons en relations des fournisseurs fiables et des industriels du secteur agroalimentaire à travers les marchés internationaux."
              : "Based in Rennes, Brittany, ROAZH is a French trading company specialised in dairy ingredients and international sourcing. Built on trust, commitment and proximity, we connect reliable suppliers and industrial buyers across international markets."}
          </p>

          {/* Petit badge localisation */}
          <div className="about-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            Rennes, Bretagne, France
          </div>

        </div>

        {/* Colonne droite — valeurs */}
        <div className="about-right">
          {values.map((v, i) => (
            <div key={i} className="value-card">
              <div className="value-number">{String(i + 1).padStart(2, "0")}</div>
              <div className="value-content">
                <h3 className="value-title">{v.title}</h3>
                <p className="value-text">{v.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .about-root {
          position: relative;
          background: #fff;
          padding: 7rem 1.5rem;
          overflow: hidden;
        }

        /* Watermark décoratif en arrière-plan */
        .about-watermark {
          position: absolute;
          bottom: -1rem;
          right: -2rem;
          font-size: clamp(80px, 14vw, 180px);
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(0,0,0,0.028);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          font-family: Georgia, serif;
          line-height: 1;
        }

        .about-inner {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }

        /* ── Gauche ── */
        .about-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #c8a96e;
          margin: 0 0 1.2rem;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 400;
        }

        .about-headline {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 300;
          line-height: 1.15;
          color: #0d0d0b;
          margin: 0 0 1.5rem;
          font-family: Georgia, 'Times New Roman', serif;
          letter-spacing: -0.01em;
        }

        .about-rule {
          width: 36px;
          height: 2px;
          background: #c8a96e;
          margin-bottom: 1.5rem;
        }

        .about-body {
          font-size: 0.95rem;
          line-height: 1.8;
          color: #555;
          margin: 0 0 2rem;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 300;
        }

        .about-location {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.78rem;
          color: #999;
          font-family: var(--font-geist-sans), sans-serif;
          letter-spacing: 0.06em;
          border: 1px solid #eee;
          border-radius: 50px;
          padding: 0.4rem 0.9rem;
        }

        /* ── Droite — value cards ── */
        .about-right {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding-top: 0.5rem;
        }

        .value-card {
          display: flex;
          gap: 1.5rem;
          padding: 1.75rem 0;
          border-bottom: 1px solid #f0f0f0;
          transition: all 0.25s ease;
          cursor: default;
        }

        .value-card:first-child {
          border-top: 1px solid #f0f0f0;
        }

        .value-card:hover .value-number {
          color: #c8a96e;
        }

        .value-card:hover {
          padding-left: 0.5rem;
        }

        .value-number {
          font-size: 0.7rem;
          color: #ccc;
          font-family: Georgia, serif;
          font-weight: 400;
          letter-spacing: 0.1em;
          padding-top: 0.2rem;
          flex-shrink: 0;
          transition: color 0.25s ease;
          min-width: 2rem;
        }

        .value-content {}

        .value-title {
          font-size: 1.05rem;
          font-weight: 500;
          color: #0d0d0b;
          margin: 0 0 0.5rem;
          font-family: var(--font-geist-sans), sans-serif;
          letter-spacing: -0.01em;
        }

        .value-text {
          font-size: 0.88rem;
          line-height: 1.7;
          color: #777;
          margin: 0;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 300;
        }

        /* responsive */
        @media (max-width: 900px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-watermark { display: none; }
        }
      `}</style>

    </section>
  );
}