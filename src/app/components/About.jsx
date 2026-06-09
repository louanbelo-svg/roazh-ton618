"use client";

import { useLanguage } from "./LanguageContext";

export default function About() {
  const { language } = useLanguage();

  return (
    <section
      id="about"
      className="py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20">

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              {language === "fr" ? "Qui sommes-nous" : "Who We Are"}
            </p>

            <h2 className="text-5xl font-light mb-8">
              {language === "fr"
                ? "Un partenaire de confiance dans le négoce d’ingrédients laitiers."
                : "A trusted partner in dairy ingredient trading."}
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              {language === "fr"
                ? "Basée à Rennes en Bretagne, ROAZH est une société française spécialisée dans le négoce d’ingrédients laitiers et le sourcing international. Fondée sur la confiance, l’engagement et la proximité, l’entreprise met en relation des fournisseurs fiables et des industriels du secteur agroalimentaire à travers les marchés internationaux."
                : "Based in Rennes, Brittany, ROAZH is a French trading company specialised in dairy ingredients and international sourcing. Built on trust, commitment and proximity, we connect reliable suppliers and industrial buyers across international markets."}
            </p>
          </div>

          <div className="space-y-8">

            <div className="border-l-2 border-black pl-6">
              <h3 className="text-xl mb-2">
                {language === "fr" ? "Confiance" : "Trust"}
              </h3>

              <p className="text-gray-600">
                {language === "fr"
                  ? "Des relations durables construites grâce à la transparence et à la constance."
                  : "Long-term relationships built through transparency and consistency."}
              </p>
            </div>

            <div className="border-l-2 border-black pl-6">
              <h3 className="text-xl mb-2">
                {language === "fr" ? "Engagement" : "Commitment"}
              </h3>

              <p className="text-gray-600">
                {language === "fr"
                  ? "Chaque opération est menée avec rigueur, réactivité et attention aux détails."
                  : "Every transaction is managed with the same level of rigor, responsiveness and attention."}
              </p>
            </div>

            <div className="border-l-2 border-black pl-6">
              <h3 className="text-xl mb-2">
                {language === "fr"
                  ? "Vision Internationale"
                  : "Global Perspective"}
              </h3>

              <p className="text-gray-600">
                {language === "fr"
                  ? "Accès à des opportunités d’approvisionnement en Europe, Océanie, Amériques et autres régions stratégiques de production laitière."
                  : "Access to sourcing opportunities across Europe, Oceania, the Americas and other strategic dairy-producing regions."}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}