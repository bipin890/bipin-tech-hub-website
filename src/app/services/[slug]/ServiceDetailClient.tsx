"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { ServiceIcon } from "@/components/ServiceIcon";
import { OrderModal } from "@/components/OrderModal";
import { getServiceOrderWhatsAppUrl, siteConfig } from "@/config/site";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  FileText,
  HelpCircle,
  MessageSquare,
  ShieldAlert,
  ShieldCheck,
  Tag,
  Users,
  ChevronDown,
} from "lucide-react";

export function ServiceDetailClient({ service }: { service: ServiceItem }) {
  const { language, t, tList } = useLanguage();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const title = t(service.title);
  const fullDesc = t(service.fullDescription);
  const priceNote = t(service.priceNote);
  const audience = t(service.targetAudience);
  const estTime = t(service.estimatedTime);
  const requiredDocs = tList(service.requiredDocuments);
  const processSteps = tList(service.processSteps);

  const directWhatsAppUrl = getServiceOrderWhatsAppUrl(title);

  return (
    <div className="py-10 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === "ne" ? "सबै सेवाहरूमा फर्कनुहोस्" : "Back to All Services"}</span>
          </Link>
        </nav>

        {/* Hero Header for Service */}
        <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-soft mb-12">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                  <ServiceIcon name={service.iconName} className="w-7 h-7" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                    <Tag className="w-3 h-3 text-blue-600" />
                    <span>{priceNote}</span>
                  </span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {fullDesc}
              </p>
            </div>

            {/* Quick Action Button Box */}
            <div className="w-full sm:w-auto shrink-0 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setIsOrderModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>{language === "ne" ? "अर्डर गर्नुहोस् (WhatsApp)" : "Order on WhatsApp"}</span>
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-xs transition-colors"
              >
                <span>{language === "ne" ? "सिधै सन्देश पठाउनुहोस्" : "Quick Direct Message"}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Content Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Process Overview */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
                <span>{language === "ne" ? "प्रक्रिया विहङ्गावलोकन (Process Overview)" : "Process Overview"}</span>
              </h2>

              <div className="space-y-3">
                {processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Required Documents (Confirmed Only) */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                <FileText className="w-6 h-6 text-blue-600" />
                <span>{language === "ne" ? "आवश्यक कागजातहरू (Required Documents)" : "Required Documents"}</span>
              </h2>

              <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200 space-y-3">
                {requiredDocs.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Official Government Disclaimer (Crucial for compliance) */}
            {service.disclaimer && (
              <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-900 text-sm space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>{language === "ne" ? "आधिकारिक सरकारी सूचना तथा नियम" : "Official Notice & Responsibility"}</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed pl-7">
                  {t(service.disclaimer)}
                </p>
              </div>
            )}

            {/* Service FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                  <span>{language === "ne" ? "यस सेवा सम्बन्धी सोधिने प्रश्नहरू" : "Service Specific FAQs"}</span>
                </h2>

                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-slate-200 rounded-xl overflow-hidden bg-white"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          aria-expanded={isOpen}
                          className="w-full p-4 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-3 hover:bg-slate-50"
                        >
                          <span>{t(faq.question)}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-500 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="p-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                            {t(faq.answer)}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Summary Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
              <h3 className="font-bold text-base text-slate-900 border-b border-slate-200 pb-3">
                {language === "ne" ? "सेवा सारांश" : "Service Summary"}
              </h3>

              {/* Price */}
              <div>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block mb-1">
                  {language === "ne" ? "सेवा शुल्क" : "Service Price"}
                </span>
                <span className="font-bold text-base text-blue-700 bg-blue-50 px-3 py-1 rounded-md border border-blue-100 inline-block">
                  {priceNote}
                </span>
                <p className="text-[11px] text-slate-500 mt-1">
                  {language === "ne"
                    ? "कुनै अग्रिम शुल्क छैन। काम बुझेर मूल्य तय गरिन्छ।"
                    : "Confirmed transparently on WhatsApp before payment."}
                </p>
              </div>

              {/* Estimated Time */}
              <div>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block mb-1">
                  {language === "ne" ? "अनुमानित समय" : "Estimated Timeline"}
                </span>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{estTime}</span>
                </div>
              </div>

              {/* Target Audience */}
              <div>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block mb-1">
                  {language === "ne" ? "लक्षित सेवाग्राही" : "Who Is This For"}
                </span>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                  <Users className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{audience}</span>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsOrderModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{language === "ne" ? "अहिले अर्डर गर्नुहोस्" : "Order This Service"}</span>
                </button>
              </div>
            </div>

            {/* Need Status Update */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs text-center space-y-3">
              <h4 className="font-bold text-sm text-slate-900">
                {language === "ne" ? "पहिले नै अर्डर गर्नुभएको छ?" : "Already Placed an Order?"}
              </h4>
              <p className="text-xs text-slate-500">
                {language === "ne"
                  ? "आफ्नो कामको प्रगति बुझ्न WhatsApp मा सोध्नुहोस्।"
                  : "Message us anytime to get an update on your service request."}
              </p>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-bold text-blue-600 hover:underline"
              >
                {language === "ne" ? "WhatsApp मा सोध्नुहोस् →" : "Check on WhatsApp →"}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal
        service={service}
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
}
