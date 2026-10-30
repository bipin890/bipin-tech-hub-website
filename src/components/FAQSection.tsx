"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { homeContent, generalFaqs } from "@/data/content";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";

export function FAQSection() {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const content = homeContent.faqSection;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappHref = getWhatsAppUrl(
    language === "ne"
      ? "नमस्ते BIPIN TECH HUB, मलाई एउटा प्रश्न सोध्नु थियो।"
      : "Hello BIPIN TECH HUB, I have a question regarding your services."
  );

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>{t(content.tag)}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t(content.title)}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(content.subtitle)}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {generalFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {t(faq.question)}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 text-blue-600" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 animate-in fade-in duration-200">
                    <p>{t(faq.answer)}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt for unlisted questions */}
        <div className="mt-12 text-center p-6 bg-blue-50/60 rounded-2xl border border-blue-100">
          <p className="text-sm text-slate-700 font-medium mb-3">
            {language === "ne"
              ? "के तपाईंको मनमा अन्य कुनै प्रश्न छ? हामीलाई सिधै सोध्नुहोस्।"
              : "Have a question that is not answered here? Ask us directly."}
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-300" />
            <span>{language === "ne" ? "WhatsApp मा प्रश्न सोध्नुहोस्" : "Ask on WhatsApp"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
