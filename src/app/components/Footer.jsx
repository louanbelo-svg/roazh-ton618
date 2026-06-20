"use client";

import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="relative overflow-hidden bg-black text-white">

      {/* Fond décoratif */}

      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-slate-950" />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">

        {/* Logo */}

        <div className="flex justify-center mb-10">

          <img
  src="/roazh%20logo.png"
  alt="ROAZH"
  className="h-16"
/>

        </div>

        {/* Texte principal */}

        <div className="max-w-3xl mx-auto text-center">

          <h3 className="text-2xl md:text-3xl font-light mb-6">
            {language === "fr"
              ? "Approvisionnement international en ingrédients laitiers."
              : "International sourcing of dairy ingredients."}
          </h3>

          <p className="text-gray-400 leading-relaxed">
            {language === "fr"
              ? "Depuis Rennes, ROAZH accompagne les industriels de l’agroalimentaire grâce à un réseau international de fournisseurs sélectionnés."
              : "From Rennes, ROAZH supports food industry professionals through a carefully selected international supplier network."}
          </p>

        </div>

        {/* Ligne Bretagne */}

        <div className="flex justify-center mt-12 mb-12">

          <div className="flex items-center gap-4 text-gray-500">

            <span className="text-xl">⚜</span>

            <div className="w-16 h-px bg-gray-700" />

            <span className="uppercase tracking-[0.3em] text-xs">
              Rennes · Bretagne · France
            </span>

            <div className="w-16 h-px bg-gray-700" />

            <span className="text-xl">⚜</span>

          </div>

        </div>

        {/* Bas de footer */}

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>
            {language === "fr"
              ? "© 2025 ROAZH. Tous droits réservés."
              : "© 2025 ROAZH. All rights reserved."}
          </p>

          <p>
            International Dairy Ingredients Trading
          </p>

        </div>

      </div>

    </footer>
  );
}