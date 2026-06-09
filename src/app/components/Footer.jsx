"use client";

import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:justify-between gap-8">

          <div>
            <h3 className="font-semibold tracking-[0.25em] text-sm mb-4">
              ROAZH
            </h3>

            <p className="text-gray-500 max-w-sm">
              {language === "fr"
                ? "Société française spécialisée dans le négoce international d’ingrédients laitiers, basée à Rennes."
                : "International dairy ingredients trading company based in Rennes, France."}
            </p>
          </div>

          <div className="text-gray-500">
            <p>Marc Boulouis</p>
            <p>+33 6 31 07 24 96</p>
            <p>contact@roazh.com</p>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 text-sm text-gray-400">
          {language === "fr"
            ? "© 2025 ROAZH. Tous droits réservés."
            : "© 2025 ROAZH. All rights reserved."}
        </div>

      </div>
    </footer>
  );
}