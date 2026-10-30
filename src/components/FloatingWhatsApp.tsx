"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl } from "@/config/site";
import { MessageSquare, X } from "lucide-react";

export function FloatingWhatsApp() {
  const { language } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappHref = getWhatsAppUrl(
    language === "ne"
      ? "नमस्ते BIPIN TECH HUB, मलाई सेवा सम्बन्धी सोधपुछ गर्नु थियो।"
      : "Hello BIPIN TECH HUB, I would like to inquire about your digital services."
  );

  return (
    <aside aria-label="WhatsApp Support Floating Action" className="fixed bottom-6 right-6 z-40 flex items-end gap-3 group">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white shadow-xl border border-slate-200 text-xs font-semibold text-slate-800 animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>
            {language === "ne" ? "WhatsApp मा कुरा गर्नुहोस्" : "Need help? Chat on WhatsApp"}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            aria-label="Dismiss chat tooltip"
            className="text-slate-400 hover:text-slate-600 ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with BIPIN TECH HUB"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-pulse pointer-events-none" />
        <MessageSquare className="w-7 h-7 fill-current relative z-10" />
      </a>
    </aside>
  );
}
