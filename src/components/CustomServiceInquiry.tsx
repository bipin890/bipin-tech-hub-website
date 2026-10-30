"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { homeContent } from "@/data/content";
import { getCustomServiceWhatsAppUrl } from "@/config/site";
import { MessageSquarePlus, Sparkles, Send } from "lucide-react";

export function CustomServiceInquiry() {
  const { language, t } = useLanguage();
  const [customNote, setCustomNote] = useState("");
  const content = homeContent.customInquiry;

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getCustomServiceWhatsAppUrl(customNote);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-card relative overflow-hidden my-12 border border-blue-700/50">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-500/10 pointer-events-none blur-2xl" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-sky-500/10 pointer-events-none blur-2xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>{t(content.tag)}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
          {t(content.title)}
        </h2>

        <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
          {t(content.description)}
        </p>

        {/* Interactive Custom Inquiry Box */}
        <form onSubmit={handleCustomSubmit} className="pt-2 max-w-xl mx-auto space-y-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder={
                language === "ne"
                  ? "तपाईंलाई चाहिएको सेवा यहाँ उल्लेख गर्नुहोस्..."
                  : "Describe the digital service you need..."
              }
              className="flex-1 px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-blue-200/70 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:bg-white/20 backdrop-blur-xs transition-all"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-sm shadow-md transition-all active:scale-95 whitespace-nowrap"
            >
              <Send className="w-4 h-4" />
              <span>{t(content.btnText)}</span>
            </button>
          </div>

          <p className="text-xs text-blue-200/80 italic">
            {t(content.note)}
          </p>
        </form>
      </div>
    </div>
  );
}
