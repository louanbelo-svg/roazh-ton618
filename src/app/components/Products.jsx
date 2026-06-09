"use client";

import { useLanguage } from "./LanguageContext";

export default function Products() {
  const { language } = useLanguage();

  const categories = [
    {
      title:
        language === "fr"
          ? "Poudres de lait"
          : "Milk Powders",

      products: [
        {
          name: "Skimmed Milk Powder (SMP)",
          description:
            language === "fr"
              ? "Poudre de lait écrémé de haute qualité adaptée à de nombreuses applications agroalimentaires."
              : "High-quality skimmed milk powder suitable for a wide range of food applications.",
        },
        {
          name: "Whole Milk Powder (WMP)",
          description:
            language === "fr"
              ? "Disponible en versions standard ou instantanée selon les besoins industriels."
              : "Available in regular and instant grades depending on industrial requirements.",
        },
        {
          name: "Fat Filled Milk Powder",
          description:
            language === "fr"
              ? "Solutions économiques pour les fabricants de produits alimentaires."
              : "Cost-efficient dairy powder solutions for food manufacturers.",
        },
        {
          name: "Sweet Whey Powder",
          description:
            language === "fr"
              ? "Approvisionnement fiable auprès de producteurs laitiers internationaux sélectionnés."
              : "Reliable sourcing from selected international dairy producers.",
        },
        {
          name: "Milk & Whey Permeate",
          description:
            language === "fr"
              ? "Solutions d'approvisionnement flexibles pour les applications alimentaires et nutritionnelles."
              : "Flexible supply solutions for food and feed applications.",
        },
        {
          name: "Food Grade Lactose",
          description:
            language === "fr"
              ? "Qualité constante et disponibilité internationale."
              : "Consistent quality and international availability.",
        },
      ],
    },

    {
      title:
        language === "fr"
          ? "Protéines & Caséines"
          : "Proteins & Caseins",

      products: [
        {
          name: "Acid & Rennet Casein",
          description:
            language === "fr"
              ? "Provenant de producteurs reconnus pour les applications industrielles."
              : "Sourced from trusted producers for industrial food applications.",
        },
        {
          name: "Whey Protein Concentrates (WPC)",
          description:
            language === "fr"
              ? "Disponibles selon différentes spécifications techniques."
              : "Available across multiple specifications depending on requirements.",
        },
      ],
    },

    {
      title:
        language === "fr"
          ? "Produits Fromagers"
          : "Cheese Products",

      products: [
        {
          name: "Cheddar",
          description:
            language === "fr"
              ? "Disponibles en différentes maturations et variantes."
              : "Young, mild, white and coloured cheddar varieties available.",
        },
        {
          name: "Cagliata",
          description:
            language === "fr"
              ? "Solutions d'approvisionnement adaptées aux industries de transformation fromagère."
              : "Flexible sourcing solutions for cheese processing industries.",
        },
        {
          name: "Edam & Gouda",
          description:
            language === "fr"
              ? "Produits européens issus de fournisseurs sélectionnés."
              : "European cheese products from selected suppliers.",
        },
      ],
    },

    {
      title:
        language === "fr"
          ? "Beurre & Matières Grasses Laitières"
          : "Butter & Milk Fats",

      products: [
        {
          name: "Butter 82% Fat",
          description:
            language === "fr"
              ? "Pour les applications industrielles et agroalimentaires."
              : "Industrial and food manufacturing applications.",
        },
        {
          name: "Anhydrous Milk Fat (AMF)",
          description:
            language === "fr"
              ? "Approvisionnement international auprès des principales régions laitières."
              : "International sourcing from leading dairy regions.",
        },
      ],
    },

    {
      title:
        language === "fr"
          ? "Ingrédients Alimentaires Complémentaires"
          : "Complementary Food Ingredients",

      products: [
        {
          name: "Vegetable Fats",
          description:
            language === "fr"
              ? "Opportunités d'approvisionnement complémentaires selon les besoins du marché."
              : "Additional sourcing opportunities depending on market needs.",
        },
        {
          name: "Starches & Plant Proteins",
          description:
            language === "fr"
              ? "Ingrédients complémentaires destinés aux fabricants agroalimentaires."
              : "Complementary ingredients for food manufacturers.",
        },
      ],
    },
  ];

  return (
    <section id="products" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
          {language === "fr"
            ? "Portefeuille Produits"
            : "Product Portfolio"}
        </p>

        <h2 className="text-5xl font-light mb-16">
          {language === "fr"
            ? "Des ingrédients laitiers sélectionnés à l’échelle mondiale."
            : "Dairy ingredients sourced worldwide."}
        </h2>

        <div className="space-y-6">
          {categories.map((category) => (
            <details
              key={category.title}
              className="bg-white border border-gray-200 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <summary className="cursor-pointer text-xl font-medium">
                {category.title}
              </summary>

              <div className="mt-6 space-y-5">
                {category.products.map((product) => (
                  <div key={product.name}>
                    <h3 className="font-medium">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 text-sm mt-1">
                      {product.description}
                    </p>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}