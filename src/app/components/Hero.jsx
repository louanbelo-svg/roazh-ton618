"use client";

import { useLanguage } from "./LanguageContext";
import { translations } from "../data/translations";

export default function Hero() {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />

      <div className="absolute top-20 right-20 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-20" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Texte */}

          <div>

            <p className="uppercase tracking-[0.4em] text-sm font-medium text-gray-500 mb-8">
              {t.hero.subtitle}
            </p>

            <h1 className="text-3xl md:text-5xl font-light leading-[1.1] max-w-4xl">
              {t.hero.title1}
              <br />
              {t.hero.title2}
              <br />
              {t.hero.title3}
            </h1>

            <p className="mt-8 text-lg text-gray-600 max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-12">

              <a
                href="#contact"
                className="
                  px-8
                  py-4
                  bg-black
                  text-white
                  rounded-full
                  hover:scale-105
                  transition
                "
              >
                {language === "fr"
                  ? "Nous contacter"
                  : "Contact us"}
              </a>

              <a
                href="#products"
                className="
                  px-8
                  py-4
                  border
                  border-black
                  rounded-full
                  hover:bg-black
                  hover:text-white
                  transition
                "
              >
                {language === "fr"
                  ? "Voir les produits"
                  : "View products"}
              </a>

            </div>

          </div>

          {/* Zone image premium */}

          <div className="hidden lg:block">

            <img
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b"
               alt="Dairy Industry"
                className="
                h-[500px]
                w-full
                object-cover
                rounded-[40px]
                shadow-xl
              "
            />

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20 pt-10 border-t border-gray-200">

          <div className="hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl font-light mb-2">
              15+
            </div>

            <div className="text-gray-500">
              {language === "fr"
                ? "Ans d'expérience"
                : "Years of experience"}
            </div>
          </div>

          <div className="hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl font-light mb-2">
              Global
            </div>

            <div className="text-gray-500">
              {language === "fr"
                ? "Réseau international"
                : "International network"}
            </div>
          </div>

          <div className="hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl font-light mb-2">
              B2B
            </div>

            <div className="text-gray-500">
              {language === "fr"
                ? "Approvisionnement mondial"
                : "Worldwide sourcing"}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}