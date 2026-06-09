"use client";

import { useLanguage } from "./LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  return (
    <section
      id="contact"
      className="py-32 bg-gray-50 border-t border-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
          Contact
        </p>

        <h2 className="text-5xl font-light mb-8">
          {language === "fr"
            ? "Parlons de vos besoins d’approvisionnement."
            : "Let's discuss your sourcing needs."}
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          {language === "fr"
            ? "Que vous recherchiez des ingrédients laitiers, des opportunités de sourcing ou un partenariat à long terme, ROAZH est prêt à accompagner votre activité."
            : "Whether you are looking for dairy ingredients, sourcing opportunities or long-term partnerships, ROAZH is ready to support your business."}
        </p>

        <div className="bg-white rounded-3xl border border-gray-200 p-10">

          <h3 className="text-2xl font-medium mb-6">
            Marc Boulouis
          </h3>

          <div className="space-y-3 text-gray-600 mb-10">

            <p>Rennes, France</p>

            <a
              href="tel:+33631072496"
              className="block hover:text-black transition"
            >
              +33 6 31 07 24 96
            </a>

            <a
              href="mailto:contact@roazh.com"
              className="block hover:text-black transition"
            >
              contact@roazh.com
            </a>

          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">

            <a
              href="mailto:contact@roazh.com"
              className="px-8 py-4 bg-black text-white rounded-full hover:opacity-90 transition"
            >
              {language === "fr"
                ? "Envoyer un email"
                : "Send an Email"}
            </a>

            <a
              href="https://wa.me/33631072496"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border rounded-full hover:bg-gray-100 transition"
            >
              WhatsApp
            </a>

          </div>

          <form className="max-w-3xl mx-auto space-y-5">

            <input
              type="text"
              placeholder={
                language === "fr"
                  ? "Nom"
                  : "Name"
              }
              className="w-full border border-gray-200 rounded-2xl px-5 py-4"
            />

            <input
              type="text"
              placeholder={
                language === "fr"
                  ? "Entreprise"
                  : "Company"
              }
              className="w-full border border-gray-200 rounded-2xl px-5 py-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4"
            />

            <textarea
              rows="6"
              placeholder={
                language === "fr"
                  ? "Votre message"
                  : "Your message"
              }
              className="w-full border border-gray-200 rounded-2xl px-5 py-4"
            />

            <button
              type="submit"
              className="px-8 py-4 bg-black text-white rounded-full hover:opacity-90 transition"
            >
              {language === "fr"
                ? "Envoyer"
                : "Send"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}