"use client";

import { useLanguage } from "./LanguageContext";

const stats = [
  {
    value: "15+",
    fr: "Ans d'expérience",
    en: "Years of experience",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    value: "8+",
    fr: "Pays d'approvisionnement",
    en: "Sourcing countries",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    value: "5",
    fr: "Familles de produits",
    en: "Product families",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    value: "24h",
    fr: "Délai de réponse garanti",
    en: "Guaranteed response time",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
];

export default function Stats() {
  const { language } = useLanguage();

  return (
    <section className="stats-root">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{language === "fr" ? s.fr : s.en}</div>
          </div>
        ))}
      </div>

      <style>{`
        .stats-root {
          background: #fff;
          border-bottom: 1px solid #f0f0f0;
          padding: 4rem 1.5rem;
        }

        .stats-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .stat-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2.5rem 1.5rem 2rem;
          border: 1px solid #ebebeb;
          border-radius: 20px;
          background: #fff;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        /* Ligne dorée en haut au hover */
        .stat-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c8a96e, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.07);
          border-color: #e0d5c5;
        }

        .stat-card:hover::before {
          opacity: 1;
        }

        .stat-icon {
          color: #c8a96e;
          margin-bottom: 1.25rem;
          opacity: 0.9;
        }

        .stat-value {
          font-size: 2.6rem;
          font-weight: 300;
          color: #0d0d0b;
          line-height: 1;
          margin-bottom: 0.6rem;
          font-family: Georgia, 'Times New Roman', serif;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 0.78rem;
          color: #888;
          letter-spacing: 0.04em;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 400;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 420px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}