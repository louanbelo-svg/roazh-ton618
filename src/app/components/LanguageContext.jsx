"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const savedLanguage =
      localStorage.getItem("roazh-language");

    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage) => {
    if (newLanguage === language) return;

    setIsChanging(true);

    setTimeout(() => {
      setLanguage(newLanguage);
      localStorage.setItem(
        "roazh-language",
        newLanguage
      );

      setTimeout(() => {
        setIsChanging(false);
      }, 150);
    }, 150);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        isChanging,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}