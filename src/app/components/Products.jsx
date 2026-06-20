"use client";

import { useLanguage } from "./LanguageContext";

export default function Products() {
  const { language } = useLanguage();

  const categories = [
    {
      title: language === "fr" ? "Poudres de lait" : "Milk Powders",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1200&auto=format&fit=crop",
      products: [
        { name: language === "fr" ? "Poudre de lait écrémé (SMP)" : "Skimmed Milk Powder (SMP)", description: language === "fr" ? "Poudre de lait écrémé de haute qualité adaptée à de nombreuses applications agroalimentaires." : "High-quality skimmed milk powder suitable for a wide range of food applications." },
        { name: language === "fr" ? "Poudre de lait entier (WMP)" : "Whole Milk Powder (WMP)", description: language === "fr" ? "Disponible en versions standard ou instantanée selon les besoins industriels." : "Available in regular and instant grades depending on industrial requirements." },
        { name: language === "fr" ? "Poudre de lait enrichie en matières grasses" : "Fat Filled Milk Powder", description: language === "fr" ? "Solutions économiques pour les fabricants de produits alimentaires." : "Cost-efficient dairy powder solutions for food manufacturers." },
        { name: language === "fr" ? "Poudre de lactosérum doux" : "Sweet Whey Powder", description: language === "fr" ? "Approvisionnement auprès de producteurs laitiers internationaux sélectionnés." : "Reliable sourcing from selected international dairy producers." },
        { name: language === "fr" ? "Perméat de lait et de lactosérum" : "Milk & Whey Permeate", description: language === "fr" ? "Solutions d'approvisionnement flexibles pour les applications alimentaires et nutritionnelles." : "Flexible supply solutions for food and feed applications." },
        { name: language === "fr" ? "Lactose qualité alimentaire" : "Food Grade Lactose", description: language === "fr" ? "Qualité constante et disponibilité internationale." : "Consistent quality and international availability." },
      ],
    },
    {
      title: language === "fr" ? "Protéines & Caséines" : "Proteins & Caseins",
      image: "/images/casein-powder.jpg",
      products: [
        { name: language === "fr" ? "Caséine acide et présure" : "Acid & Rennet Casein", description: language === "fr" ? "Provenant de producteurs reconnus pour les applications industrielles." : "Sourced from trusted producers for industrial food applications." },
        { name: language === "fr" ? "Concentrés de protéines de lactosérum (WPC)" : "Whey Protein Concentrates (WPC)", description: language === "fr" ? "Disponibles selon différentes spécifications techniques." : "Available across multiple specifications depending on requirements." },
      ],
    },
    {
      title: language === "fr" ? "Fromages" : "Cheese",
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=1200&auto=format&fit=crop",
      products: [
        { name: "Cheddar", description: language === "fr" ? "Disponibles en différentes maturations et variantes." : "Young, mild, white and coloured cheddar varieties available." },
        { name: "Cagliata", description: language === "fr" ? "Solutions d'approvisionnement adaptées aux industries de transformation fromagère." : "Flexible sourcing solutions for cheese processing industries." },
        { name: "Edam & Gouda", description: language === "fr" ? "Produits européens issus de fournisseurs sélectionnés." : "European cheese products from selected suppliers." },
      ],
    },
    {
      title: language === "fr" ? "Beurre & Matières Grasses Laitières" : "Butter & Milk Fats",
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=1200&auto=format&fit=crop",
      products: [
        { name: language === "fr" ? "Beurre 82% MG" : "Butter 82% Fat", description: language === "fr" ? "Pour les applications industrielles et agroalimentaires." : "Industrial and food manufacturing applications." },
        { name: language === "fr" ? "Matière grasse laitière anhydre (AMF)" : "Anhydrous Milk Fat (AMF)", description: language === "fr" ? "Approvisionnement international auprès des principales régions laitières." : "International sourcing from leading dairy regions." },
      ],
    },
    {
      title: language === "fr" ? "Ingrédients Alimentaires Complémentaires" : "Complementary Food Ingredients",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1200&auto=format&fit=crop",
      products: [
        { name: language === "fr" ? "Matières grasses végétales" : "Vegetable Fats", description: language === "fr" ? "Opportunités d'approvisionnement complémentaires selon les besoins du marché." : "Additional sourcing opportunities depending on market needs." },
        { name: language === "fr" ? "Amidons et protéines végétales" : "Starches & Plant Proteins", description: language === "fr" ? "Ingrédients complémentaires destinés aux fabricants agroalimentaires." : "Complementary ingredients for food manufacturers." },
      ],
    },
  ];

  return (
    <section id="products" className="prod-root">

      {/* Bandes décoratives latérales */}
      <div className="prod-deco-left" aria-hidden="true">
        <div className="prod-deco-line" />
        <span className="prod-deco-text">DAIRY · INGREDIENTS · TRADING</span>
        <div className="prod-deco-line" />
      </div>
      <div className="prod-deco-right" aria-hidden="true">
        <div className="prod-deco-line" />
        <span className="prod-deco-text">ROAZH · RENNES · FRANCE</span>
        <div className="prod-deco-line" />
      </div>

      {/* Watermark */}
      <div className="prod-watermark" aria-hidden="true">
        {language === "fr" ? "Produits" : "Products"}
      </div>

      <div className="prod-inner">

        {/* Header */}
        <div className="prod-header">
          <p className="prod-eyebrow">
            {language === "fr" ? "Portefeuille Produits" : "Product Portfolio"}
          </p>
          <h2 className="prod-headline">
            {language === "fr"
              ? "Des ingrédients laitiers sélectionnés à l'échelle mondiale."
              : "Dairy ingredients sourced worldwide."}
          </h2>
          <div className="prod-rule" aria-hidden="true" />
        </div>

        {/* Badges */}
        <div className="prod-badges">
          {[
            `5 ${language === "fr" ? "catégories" : "categories"}`,
            `15+ ${language === "fr" ? "produits" : "products"}`,
            language === "fr" ? "Approvisionnement mondial" : "Worldwide sourcing",
          ].map((b) => (
            <span key={b} className="prod-badge">{b}</span>
          ))}
        </div>

        {/* Accordion */}
        <div className="prod-list">
          {categories.map((cat, idx) => (
            <details key={cat.title} className="prod-item">

              <summary className="prod-summary">
                <span className="prod-idx">{String(idx + 1).padStart(2, "0")}</span>

                <div className="prod-thumb">
                  <img src={cat.image} alt={cat.title} />
                </div>

                <div className="prod-meta">
                  <h3 className="prod-cat-title">{cat.title}</h3>
                  <p className="prod-cat-count">
                    {cat.products.length}{" "}
                    {language === "fr" ? "références disponibles" : "available products"}
                  </p>
                </div>

                <div className="prod-chevron" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </summary>

              <div className="prod-content">
                <div className="prod-grid">
                  {cat.products.map((p) => (
                    <div key={p.name} className="prod-card">
                      <div className="prod-card-dot" aria-hidden="true" />
                      <div>
                        <h4 className="prod-card-name">{p.name}</h4>
                        <p className="prod-card-desc">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </details>
          ))}
        </div>

      </div>

      <style>{`
        /* ── Root ── */
        .prod-root {
          position: relative;
          background: linear-gradient(160deg, #faf9f7 0%, #f4f2ee 50%, #faf9f7 100%);
          padding: 7rem 1.5rem;
          overflow: hidden;
          isolation: isolate;
        }

        /* ── Bandes latérales ── */
        .prod-deco-left,
        .prod-deco-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          pointer-events: none;
        }

        .prod-deco-left  { left: 0;  border-right: 1px solid rgba(200,169,110,0.18); background: rgba(200,169,110,0.03); }
        .prod-deco-right { right: 0; border-left:  1px solid rgba(200,169,110,0.18); background: rgba(200,169,110,0.03); }

        .prod-deco-line {
          flex: 1;
          width: 0.5px;
          background: linear-gradient(to bottom, transparent, rgba(200,169,110,0.35), transparent);
          max-height: 120px;
        }

        .prod-deco-text {
          writing-mode: vertical-rl;
          font-size: 0.52rem;
          letter-spacing: 0.3em;
          color: rgba(200,169,110,0.5);
          text-transform: uppercase;
          font-family: var(--font-geist-sans), sans-serif;
          white-space: nowrap;
        }

        /* ── Watermark ── */
        .prod-watermark {
          position: absolute;
          bottom: -2rem;
          right: 1rem;
          font-size: clamp(60px, 10vw, 130px);
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(200,169,110,0.08);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          font-family: Georgia, serif;
          z-index: 2;
          mix-blend-mode: multiply;
          /* Empêche tout débordement hors de la section */
          max-width: 100%;
          overflow: hidden;
          text-overflow: clip;
        }

        /* ── Inner ── */
        .prod-inner {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .prod-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #c8a96e;
          margin: 0 0 1.1rem;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 400;
        }

        .prod-headline {
          font-size: clamp(1.8rem, 3vw, 2.7rem);
          font-weight: 300;
          line-height: 1.12;
          color: #0d0d0b;
          margin: 0 0 1.4rem;
          font-family: Georgia, 'Times New Roman', serif;
          letter-spacing: -0.01em;
          max-width: 680px;
        }

        .prod-rule {
          width: 36px;
          height: 2px;
          background: #c8a96e;
          margin-bottom: 2rem;
        }

        /* ── Badges ── */
        .prod-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 2.5rem;
        }

        .prod-badge {
          font-size: 0.73rem;
          color: #888;
          border: 1px solid rgba(200,169,110,0.3);
          border-radius: 50px;
          padding: 0.35rem 1rem;
          font-family: var(--font-geist-sans), sans-serif;
          background: rgba(200,169,110,0.05);
          letter-spacing: 0.02em;
        }

        /* ── Accordion ── */
        .prod-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .prod-item {
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(200,169,110,0.15);
          border-radius: 18px;
          overflow: hidden;
          transition: box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .prod-item:hover {
          background: #fff;
          border-color: rgba(200,169,110,0.35);
          box-shadow: 0 6px 24px rgba(200,169,110,0.08);
        }

        .prod-item[open] {
          background: #fff;
          border-color: #c8a96e;
          border-top-width: 2px;
          box-shadow: 0 12px 40px rgba(200,169,110,0.12);
        }

        /* ── Summary ── */
        .prod-summary {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 1.75rem;
          cursor: pointer;
          list-style: none;
          user-select: none;
        }

        .prod-summary::-webkit-details-marker { display: none; }

        /* Numéro */
        .prod-idx {
          font-size: 0.65rem;
          color: #d4d4d4;
          font-family: Georgia, serif;
          letter-spacing: 0.1em;
          flex-shrink: 0;
          min-width: 1.5rem;
          transition: color 0.25s;
        }

        .prod-item[open] .prod-idx,
        .prod-item:hover .prod-idx { color: #c8a96e; }

        /* Thumbnail */
        .prod-thumb {
          width: 100px;
          height: 72px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .prod-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .prod-item:hover .prod-thumb img,
        .prod-item[open] .prod-thumb img { transform: scale(1.08); }

        /* Meta */
        .prod-meta { flex: 1; }

        .prod-cat-title {
          font-size: 1.15rem;
          font-weight: 400;
          color: #0d0d0b;
          margin: 0 0 0.25rem;
          font-family: Georgia, 'Times New Roman', serif;
          letter-spacing: -0.01em;
        }

        .prod-cat-count {
          font-size: 0.78rem;
          color: #aaa;
          margin: 0;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 300;
        }

        /* Chevron */
        .prod-chevron {
          color: #d4d4d4;
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid #ebebeb;
          transition: transform 0.3s ease, color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .prod-item[open] .prod-chevron {
          transform: rotate(180deg);
          color: #c8a96e;
          border-color: rgba(200,169,110,0.3);
          background: rgba(200,169,110,0.06);
        }

        /* ── Contenu déplié ── */
        .prod-content {
          border-top: 1px solid #f2ede5;
          padding: 1.75rem 1.75rem 1.75rem calc(1.75rem + 1.5rem + 100px + 1.5rem);
          animation: prodFade 0.3s ease;
        }

        @keyframes prodFade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .prod-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
        }

        .prod-card {
          display: flex;
          gap: 0.85rem;
          padding: 1.1rem 1.2rem;
          background: #faf9f7;
          border: 1px solid #eee;
          border-radius: 12px;
          transition: all 0.25s ease;
        }

        .prod-card:hover {
          background: #fff;
          border-color: rgba(200,169,110,0.3);
          box-shadow: 0 4px 16px rgba(200,169,110,0.08);
          transform: translateY(-2px);
        }

        .prod-card-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #c8a96e;
          flex-shrink: 0;
          margin-top: 0.45rem;
        }

        .prod-card-name {
          font-size: 0.88rem;
          font-weight: 500;
          color: #0d0d0b;
          margin: 0 0 0.35rem;
          font-family: var(--font-geist-sans), sans-serif;
        }

        .prod-card-desc {
          font-size: 0.79rem;
          line-height: 1.65;
          color: #999;
          margin: 0;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 300;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .prod-deco-left, .prod-deco-right { display: none; }
          .prod-watermark { display: none; }
          .prod-content { padding: 1.25rem 1rem; }
          .prod-grid { grid-template-columns: 1fr; }
          .prod-idx { display: none; }
          .prod-thumb { width: 72px; height: 54px; }
        }
      `}</style>

    </section>
  );
}