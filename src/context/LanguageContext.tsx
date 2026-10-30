"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Language } from "@/types";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (content: { en: string; ne: string }) => string;
  tList: (content: { en: string[]; ne: string[] }) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("bth_language") as Language;
      if (saved === "en" || saved === "ne") {
        setLanguageState(saved);
      }
    } catch {
      // Ignore localStorage errors
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("bth_language", lang);
    } catch {
      // Ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ne" : "en");
  };

  const t = (content: { en: string; ne: string }): string => {
    if (!content) return "";
    return content[language] || content.en || "";
  };

  const tList = (content: { en: string[]; ne: string[] }): string[] => {
    if (!content) return [];
    return content[language] || content.en || [];
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        tList,
      }}
    >
      {/* We apply a data-lang attribute on the wrapper */}
      <div data-lang={mounted ? language : "en"} className="min-h-screen flex flex-col">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
