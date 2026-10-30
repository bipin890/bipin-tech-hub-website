"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { homeContent } from "@/data/content";
import { getOrderStatusWhatsAppUrl } from "@/config/site";
import { RefreshCw, MessageSquare, Clock } from "lucide-react";

export function OrderStatusSection() {
  const { language, t } = useLanguage();
  const content = homeContent.orderStatus;
  const statusWhatsAppUrl = getOrderStatusWhatsAppUrl();

  return (
    <section className="py-14 bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50/50 border-t border-b border-blue-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-3">
          <Clock className="w-3.5 h-3.5 text-blue-600" />
          <span>{t(content.tag)}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          {t(content.title)}
        </h2>

        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed">
          {t(content.description)}
        </p>

        <a
          href={statusWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-95"
        >
          <MessageSquare className="w-5 h-5 text-emerald-300" />
          <span>{t(content.btnText)}</span>
        </a>

        <p className="mt-4 text-xs text-slate-500">
          {language === "ne"
            ? "कुनै पासवर्ड वा लगइन चाहिन्न — सिधै आफ्नो नाम र सेवा उल्लेख गरी WhatsApp मा सोध्नुहोस्।"
            : "No dashboard or login required — simply message your name and service on WhatsApp."}
        </p>
      </div>
    </section>
  );
}
