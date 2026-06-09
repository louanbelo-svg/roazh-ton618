"use client";

import { useLanguage } from "./LanguageContext";

export default function Origins() {
  const { language } = useLanguage();

  const origins = [
    "France",
    "Ireland",
    "United States",
    "New Zealand",
    "Australia",
    "Argentina",
    "Uruguay",
    "Brazil",
    "Poland",
    "India",
  ];

  return (
    <section
      id="origins"
      className="py-32 bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
          {language === "fr"
            ? "Réseau International"
            : "Global Sourcing Network"}
        </p>

        <h2 className="text-5xl font-light mb-12">
          {language === "fr"
            ? "Un approvisionnement stratégique au cœur des grandes régions laitières."
            : "Strategic sourcing across major dairy regions."}
        </h2>

        <p className="max-w-3xl text-lg text-gray-600 mb-16">
          {language === "fr"
            ? "ROAZH collabore avec des partenaires sélectionnés dans les principaux pays producteurs de produits laitiers afin de garantir flexibilité, fiabilité et accès aux meilleures opportunités du marché."
            : "ROAZH works with selected partners across leading dairy-producing countries, ensuring flexibility, reliability and access to the most competitive sourcing opportunities."}
        </p>

        <div className="grid md:grid-cols-5 gap-4">

          {origins.map((country) => (
            <div
              key={country}
              className="border border-gray-200 rounded-2xl px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {country}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}