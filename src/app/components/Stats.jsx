"use client";

import { useLanguage } from "./LanguageContext";

export default function Stats() {
  const { language } = useLanguage();

  const stats =
    language === "fr"
      ? [
          {
            value: "15+",
            label: "Ans d'expérience",
          },
          {
            value: "International",
            label: "Réseau d'approvisionnement",
          },
          {
            value: "Rapide",
            label: "Temps de réponse",
          },
          {
            value: "Relations",
            label: "de confiance",
          },
        ]
      : [
          {
            value: "15+",
            label: "Years Experience",
          },
          {
            value: "Global",
            label: "Sourcing Network",
          },
          {
            value: "Fast",
            label: "Response Time",
          },
          {
            value: "Trusted",
            label: "Partnerships",
          },
        ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-3xl p-8 border border-gray-100 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl font-light mb-3">
                {stat.value}
              </div>

              <div className="text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}