"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Transparent tant qu'on est dans le hero (~100vh)
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    fn(); // check initial
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{ height: "72px" }}
      className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center
        transition-all duration-500
        ${scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm"
          : "bg-transparent border-b border-white/10"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">

        {/* Logo — blanc sur hero, normal après scroll */}
        <a href="#top" className="transition hover:opacity-75 flex-shrink-0">
          <Image
            src="/roazh-logo.png"
            alt="ROAZH"
            width={140}
            height={52}
            priority
            style={{
              filter: scrolled ? "none" : "brightness(0) invert(1)",
              transition: "filter 0.4s ease",
            }}
          />
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex gap-10 text-sm font-medium">
          {[
            { href: "#about",    fr: "Présentation", en: "About"    },
            { href: "#products", fr: "Produits",      en: "Products" },
            { href: "#origins",  fr: "Origines",      en: "Origins"  },
            { href: "#contact",  fr: "Contact",       en: "Contact"  },
          ].map(({ href, fr, en }) => (
            <a
              key={href}
              href={href}
              className={`
                relative transition-all duration-300
                after:absolute after:left-0 after:-bottom-1
                after:h-px after:w-0 after:transition-all after:duration-300
                hover:after:w-full
                ${scrolled
                  ? "text-gray-600 hover:text-black after:bg-black"
                  : "text-white/85 hover:text-white after:bg-white"
                }
              `}
            >
              {language === "fr" ? fr : en}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Switcher langue */}
          <div
            className={`
              flex items-center border rounded-full overflow-hidden
              transition-all duration-300
              ${scrolled
                ? "border-gray-200 bg-white shadow-sm"
                : "border-white/30 bg-white/10 backdrop-blur-sm"
              }
            `}
          >
            {["fr", "en"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`
                  px-4 py-2 text-sm font-medium cursor-pointer
                  transition-all duration-300
                  ${language === lang
                    ? scrolled ? "bg-black text-white" : "bg-white text-black"
                    : scrolled ? "text-gray-500 hover:bg-gray-100" : "text-white/70 hover:bg-white/10"
                  }
                `}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Burger mobile */}
          <button
            className={`md:hidden p-2 rounded-lg transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg md:hidden">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {[
              { href: "#about",    fr: "Présentation", en: "About"    },
              { href: "#products", fr: "Produits",      en: "Products" },
              { href: "#origins",  fr: "Origines",      en: "Origins"  },
              { href: "#contact",  fr: "Contact",       en: "Contact"  },
            ].map(({ href, fr, en }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-black text-sm font-medium py-1 border-b border-gray-100 last:border-0"
              >
                {language === "fr" ? fr : en}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}