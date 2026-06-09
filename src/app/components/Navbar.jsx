"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <Image
          src="/roazh logo.png"
          alt="ROAZH"
          width={160}
          height={60}
          priority
        />

        <div className="flex items-center gap-8">

          <nav className="hidden md:flex gap-8 text-sm">

            <a href="#about" className="hover:text-black transition-colors">
              {language === "fr" ? "Présentation" : "About"}
            </a>

            <a href="#products" className="hover:text-black transition-colors">
              {language === "fr" ? "Produits" : "Products"}
            </a>

            <a href="#origins" className="hover:text-black transition-colors">
              {language === "fr" ? "Origines" : "Origins"}
            </a>

            <a href="#contact" className="hover:text-black transition-colors">
              Contact
            </a>

          </nav>

          <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">

            <button
              onClick={() => setLanguage("fr")}
              className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300 ${
                language === "fr"
                  ? "bg-black text-white"
                  : "bg-white text-gray-500 hover:bg-gray-100"
              }`}
            >
              FR
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300 ${
                language === "en"
                  ? "bg-black text-white"
                  : "bg-white text-gray-500 hover:bg-gray-100"
              }`}
            >
              EN
            </button>

          </div>

        </div>

      </div>
    </header>
  );
}