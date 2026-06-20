"use client";

import { useLanguage } from "./LanguageContext";
import { useEffect } from "react";

export default function Contact() {
  const { language } = useLanguage();

  // Charge le script HubSpot une seule fois
  useEffect(() => {
    if (document.querySelector('script[src*="hsforms.net"]')) return;
    const script = document.createElement("script");
    script.src = "https://js-eu1.hsforms.net/forms/embed/148199241.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="contact-root">

      {/* Bandes latérales */}
      <div className="contact-deco-left" aria-hidden="true">
        <div className="contact-deco-line" />
        <span className="contact-deco-text">CONTACT · ROAZH · RENNES</span>
        <div className="contact-deco-line" />
      </div>
      <div className="contact-deco-right" aria-hidden="true">
        <div className="contact-deco-line" />
        <span className="contact-deco-text">24H · RESPONSE · GUARANTEED</span>
        <div className="contact-deco-line" />
      </div>

      {/* Watermark */}
      <div className="contact-watermark" aria-hidden="true">Contact</div>

      <div className="contact-inner">

        {/* Header */}
        <div className="contact-header">
          <p className="contact-eyebrow">Contact</p>
          <h2 className="contact-headline">
            {language === "fr"
              ? "Parlons de vos besoins d'approvisionnement."
              : "Let's discuss your sourcing needs."}
          </h2>
          <div className="contact-rule" aria-hidden="true" />
          <p className="contact-accroche">
            {language === "fr"
              ? "Vous cherchez un ingrédient précis ? Parlons-en."
              : "Looking for a specific ingredient? Let's talk."}
          </p>
          <p className="contact-sub">
            {language === "fr"
              ? "Réponse sous 24 heures pour toute demande d'approvisionnement."
              : "Response within 24 hours for all sourcing inquiries."}
          </p>
        </div>

        {/* Carte principale */}
        <div className="contact-card">

          {/* Colonne gauche — infos */}
          <div className="contact-left">

            <div className="contact-person">
              <div className="contact-avatar">M</div>
              <div>
                <p className="contact-name">Marc</p>
                <p className="contact-role">
                  {language === "fr" ? "Fondateur, ROAZH" : "Founder, ROAZH"}
                </p>
              </div>
            </div>

            <div className="contact-infos">
              {[
                {
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  ),
                  label: language === "fr" ? "Localisation" : "Location",
                  value: "Rennes, France",
                },
                {
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                  label: language === "fr" ? "Téléphone" : "Phone",
                  value: "+33 6 31 07 24 96",
                  href: "tel:+33631072496",
                },
                {
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: "Email",
                  value: "contact@roazh.com",
                  href: "mailto:contact@roazh.com",
                },
              ].map((item, i) => (
                <div key={i} className="contact-info-row">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <p className="contact-info-label">{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="contact-info-value contact-info-link">{item.value}</a>
                      : <p className="contact-info-value">{item.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Déco verticale ROAZH + hermines */}
            <div className="contact-deco-strip" aria-hidden="true">

              {/* Hermine en haut */}
              <span className="contact-hermine top">⚜</span>

              {/* ROAZH vertical sur toute la hauteur */}
              <div className="contact-roazh-vertical">ROAZH</div>

              {/* Hermines intercalées */}
              <span className="contact-hermine mid1">⚜</span>
              <span className="contact-hermine mid2">⚜</span>

              {/* Hermine en bas */}
              <span className="contact-hermine bot">⚜</span>

              {/* Ligne fine à droite */}
              <div className="contact-strip-line" />

            </div>

            {/* Promesses */}
            <div className="contact-promises">
              {[
                { fr: "Réponse sous 24h garantie",             en: "Response guaranteed within 24h"        },
                { fr: "Réseau international de fournisseurs",   en: "International supplier network"        },
                { fr: "Partenariats durables & personnalisés",  en: "Long-term & personalised partnerships" },
              ].map((p, i) => (
                <div key={i} className="contact-promise">
                  <span className="contact-promise-check">✦</span>
                  <span>{language === "fr" ? p.fr : p.en}</span>
                </div>
              ))}
            </div>

            {/* Boutons rapides */}
            <div className="contact-quick">
              <a
                href="https://wa.me/33631072496"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn contact-btn-wa"
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 8.002 0C3.59 0 0 3.59 0 8.002a7.95 7.95 0 0 0 1.063 3.978L0 16l4.118-1.081a7.97 7.97 0 0 0 3.884 1.006h.001c4.411 0 8-3.59 8-8.002a7.95 7.95 0 0 0-2.402-5.597z"/>
                </svg>
                WhatsApp
              </a>
              <a href="mailto:contact@roazh.com" className="contact-btn contact-btn-mail">
                {language === "fr" ? "Envoyer un email" : "Send an email"}
              </a>
            </div>

          </div>

          {/* Séparateur vertical */}
          <div className="contact-sep" aria-hidden="true" />

          {/* Colonne droite — formulaire HubSpot */}
          <div className="contact-right">
            <p className="contact-form-title">
              {language === "fr" ? "Envoyer un message" : "Send a message"}
            </p>

                    {/* Formulaire HubSpot — version selon langue */}
            {language === "fr" ? (
              <div
                key="hs-fr"
                className="hs-form-frame hubspot-wrap"
                data-region="eu1"
                data-form-id="8ba0d973-a7fc-454d-b806-04e3aa612848"
                data-portal-id="148199241"
              />
            ) : (
              <div
                key="hs-en"
                className="hs-form-frame hubspot-wrap"
                data-region="eu1"
                data-form-id="0a36a0ea-dd2a-4234-8d23-f2d8fd4835d6"
                data-portal-id="148199241"
              />
            )}
          </div>

        </div>
      </div>

      <style>{`
        .contact-root {
          position: relative;
          background: linear-gradient(160deg, #faf9f7 0%, #f4f2ee 50%, #faf9f7 100%);
          padding: 7rem 1.5rem;
          overflow: hidden;
          border-top: 1px solid #f0ece4;
          padding-bottom: 9rem;
        }

        .contact-deco-left,
        .contact-deco-right {
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

        .contact-deco-left  { left: 0;  border-right: 1px solid rgba(200,169,110,0.18); background: rgba(200,169,110,0.03); }
        .contact-deco-right { right: 0; border-left:  1px solid rgba(200,169,110,0.18); background: rgba(200,169,110,0.03); }

        .contact-deco-line {
          flex: 1; width: 0.5px;
          background: linear-gradient(to bottom, transparent, rgba(200,169,110,0.35), transparent);
          max-height: 120px;
        }

        .contact-deco-text {
          writing-mode: vertical-rl;
          font-size: 0.52rem;
          letter-spacing: 0.3em;
          color: rgba(200,169,110,0.5);
          text-transform: uppercase;
          font-family: var(--font-geist-sans), sans-serif;
          white-space: nowrap;
        }

        .contact-watermark {
          position: absolute;
          bottom: -2rem; right: 2rem;
          font-size: clamp(60px, 10vw, 130px);
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(200,169,110,0.06);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          font-family: Georgia, serif;
          z-index: 2;
          mix-blend-mode: multiply;
        }

        .contact-inner {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-eyebrow {
          font-size: 0.68rem;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #c8a96e;
          margin: 0 0 1.1rem;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 400;
        }

        .contact-headline {
          font-size: clamp(1.8rem, 3vw, 2.7rem);
          font-weight: 300;
          line-height: 1.12;
          color: #0d0d0b;
          margin: 0 0 1.4rem;
          font-family: Georgia, 'Times New Roman', serif;
          letter-spacing: -0.01em;
          max-width: 600px;
        }

        .contact-rule {
          width: 36px; height: 2px;
          background: #c8a96e;
          margin-bottom: 1.1rem;
        }

        /* Phrase accroche — mise en avant */
        .contact-accroche {
          font-size: 1.1rem;
          color: #333;
          margin: 0 0 0.5rem;
          font-family: Georgia, serif;
          font-weight: 300;
          font-style: italic;
        }

        .contact-sub {
          font-size: 0.82rem;
          color: #aaa;
          margin: 0 0 2.5rem;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 300;
          letter-spacing: 0.02em;
        }

        .contact-card {
          background: #fff;
          border: 1px solid rgba(200,169,110,0.2);
          border-radius: 24px;
          padding: 2.5rem;
          display: grid;
          grid-template-columns: 1fr 1px 1.5fr;
          gap: 2.5rem;
          box-shadow: 0 8px 40px rgba(200,169,110,0.07);
          position: relative;
          z-index: 1;
        }

        .contact-person {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-avatar {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #c8a96e, #e8c98e);
          color: #fff;
          font-size: 1rem;
          font-family: Georgia, serif;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-name {
          font-size: 1rem; font-weight: 500;
          color: #0d0d0b; margin: 0 0 0.15rem;
          font-family: Georgia, serif;
        }

        .contact-role {
          font-size: 0.75rem; color: #aaa; margin: 0;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 300;
        }

        .contact-left {
          display: flex;
          flex-direction: column;
        }

        .contact-infos {
          display: flex; flex-direction: column;
          gap: 1rem; margin-bottom: 2rem;
        }

        .contact-info-row {
          display: flex; align-items: flex-start; gap: 0.75rem;
        }

        .contact-info-icon { color: #c8a96e; margin-top: 0.1rem; flex-shrink: 0; }

        .contact-info-label {
          font-size: 0.65rem; text-transform: uppercase;
          letter-spacing: 0.15em; color: #bbb;
          margin: 0 0 0.2rem;
          font-family: var(--font-geist-sans), sans-serif;
        }

        .contact-info-value {
          font-size: 0.88rem; color: #333; margin: 0;
          font-family: var(--font-geist-sans), sans-serif;
        }

        .contact-info-link { text-decoration: none; transition: color 0.2s; }
        .contact-info-link:hover { color: #c8a96e; }

        /* Image */
        .contact-img-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 1.5rem;
          height: 160px;
        }

        .contact-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 40%;
          filter: saturate(1.1) brightness(0.85);
        }

        .contact-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(5,5,4,0.55) 0%, rgba(5,5,4,0.1) 100%);
        }

        .contact-img-badge {
          position: absolute;
          bottom: 0.9rem;
          left: 0.9rem;
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
        }

        .contact-img-num {
          font-size: 1.6rem;
          font-weight: 300;
          color: #c8a96e;
          font-family: Georgia, serif;
          line-height: 1;
        }

        .contact-img-lbl {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.7);
          font-family: var(--font-geist-sans), sans-serif;
          letter-spacing: 0.06em;
        }

        /* ── Strip déco verticale ROAZH + hermines ── */
        .contact-deco-strip {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 0.5rem;
          flex: 1;
          min-height: 480px;
        }

        /* ROAZH vertical pleine hauteur — grand et imposant */
        .contact-roazh-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(4rem, 7vw, 6.5rem);
          font-weight: 400;
          letter-spacing: 0.18em;
          line-height: 0.85;
          background: linear-gradient(
            to bottom,
            rgba(248,224,168,1)    0%,
            rgba(232,201,142,0.9)  25%,
            rgba(210,178,118,0.75) 55%,
            rgba(200,169,110,0.35) 80%,
            rgba(200,169,110,0.08) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          user-select: none;
          pointer-events: none;
          flex: 1;
          /* Légère ombre pour profondeur */
          filter: drop-shadow(0 2px 8px rgba(200,169,110,0.15));
        }

        /* Hermines ⚜ */
        .contact-hermine {
          font-size: 0.65rem;
          color: rgba(200,169,110,0.3);
          line-height: 1;
          flex-shrink: 0;
        }

        .contact-hermine.top  { opacity: 0.55; }
        .contact-hermine.mid1 { opacity: 0.35; }
        .contact-hermine.mid2 { opacity: 0.2;  }
        .contact-hermine.bot  { opacity: 0.1;  }

        /* Ligne fine à droite du strip */
        .contact-strip-line {
          position: absolute;
          right: -0.5rem;
          top: 0; bottom: 0;
          width: 0.5px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(200,169,110,0.25) 20%,
            rgba(200,169,110,0.25) 80%,
            transparent
          );
        }

        /* Promesses */
        .contact-promises {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 1.5rem;
          padding: 1rem 1.1rem;
          background: #faf9f7;
          border: 1px solid rgba(200,169,110,0.13);
          border-radius: 12px;
        }

        .contact-promise {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.81rem;
          color: #555;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 300;
        }

        .contact-promise-check {
          color: #c8a96e;
          font-size: 0.6rem;
          flex-shrink: 0;
        }

        .contact-quick { display: flex; flex-direction: column; gap: 0.6rem; }

        .contact-btn {
          display: inline-flex; align-items: center;
          justify-content: center; gap: 0.5rem;
          padding: 0.7rem 1.25rem; border-radius: 50px;
          font-size: 0.82rem; font-weight: 500;
          text-decoration: none;
          font-family: var(--font-geist-sans), sans-serif;
          transition: all 0.25s ease;
        }

        .contact-btn-wa { background: #25d366; color: #fff; }
        .contact-btn-wa:hover { background: #1db954; transform: scale(1.02); }

        .contact-btn-mail {
          background: transparent; color: #555;
          border: 1px solid #e0e0e0;
        }
        .contact-btn-mail:hover { border-color: rgba(200,169,110,0.4); color: #c8a96e; transform: scale(1.02); }

        .contact-sep {
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(200,169,110,0.2), transparent);
        }

        /* HubSpot */
        .contact-form-title {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #bbb;
          margin: 0 0 1.25rem;
          font-family: var(--font-geist-sans), sans-serif;
        }

        .hubspot-wrap {
          width: 100%;
        }

        /* Surcharge styles HubSpot pour matcher le site */
        .hubspot-wrap input,
        .hubspot-wrap textarea,
        .hubspot-wrap select {
          border: 1px solid #ebebeb !important;
          border-radius: 10px !important;
          padding: 0.7rem 0.9rem !important;
          font-size: 0.85rem !important;
          font-family: var(--font-geist-sans), sans-serif !important;
          background: #fafaf9 !important;
          width: 100% !important;
          box-sizing: border-box !important;
          transition: border-color 0.2s, box-shadow 0.2s !important;
        }

        .hubspot-wrap input:focus,
        .hubspot-wrap textarea:focus {
          border-color: rgba(200,169,110,0.5) !important;
          box-shadow: 0 0 0 3px rgba(200,169,110,0.08) !important;
          background: #fff !important;
          outline: none !important;
        }

        .hubspot-wrap input[type="submit"],
        .hubspot-wrap .hs-button {
          background: #0d0d0b !important;
          color: #fff !important;
          border: none !important;
          border-radius: 50px !important;
          padding: 0.75rem 1.75rem !important;
          font-size: 0.83rem !important;
          font-weight: 500 !important;
          cursor: pointer !important;
          transition: background 0.25s ease, transform 0.25s ease !important;
          width: auto !important;
        }

        .hubspot-wrap input[type="submit"]:hover,
        .hubspot-wrap .hs-button:hover {
          background: #c8a96e !important;
          transform: scale(1.03) !important;
        }

        .hubspot-wrap label {
          font-size: 0.7rem !important;
          text-transform: uppercase !important;
          letter-spacing: 0.12em !important;
          color: #aaa !important;
          font-family: var(--font-geist-sans), sans-serif !important;
          margin-bottom: 0.35rem !important;
          display: block !important;
        }

        .hubspot-wrap .hs-form-field {
          margin-bottom: 0.85rem !important;
        }

        .hubspot-wrap .hs-error-msgs {
          font-size: 0.75rem !important;
          color: #e55 !important;
          margin-top: 0.25rem !important;
          list-style: none !important;
          padding: 0 !important;
        }

        /* Responsive */
        @media (max-width: 820px) {
          .contact-card {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .contact-sep { display: none; }
          .contact-deco-left, .contact-deco-right { display: none; }
          .contact-watermark { display: none; }
          .contact-quick { flex-direction: row; }
        }

        @media (max-width: 480px) {
          .contact-card { padding: 1.5rem; }
          .contact-quick { flex-direction: column; }
        }
      `}</style>

    </section>
  );
}