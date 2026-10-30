"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center p-1 bg-slate-100 rounded-full border border-slate-200 text-xs font-semibold ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
          language === "en"
            ? "bg-white text-blue-700 shadow-sm font-bold"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        <span>English</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage("ne")}
        aria-pressed={language === "ne"}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
          language === "ne"
            ? "bg-blue-600 text-white shadow-sm font-bold"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        <span>नेपाली</span>
      </button>
    </div>
  );
}
