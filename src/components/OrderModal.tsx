"use client";

import React, { useState } from "react";
import { ServiceItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { getServiceOrderWhatsAppUrl } from "@/config/site";
import { X, MessageSquare, Send, CheckCircle2, User, HelpCircle } from "lucide-react";

interface OrderModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function OrderModal({ service, isOpen, onClose }: OrderModalProps) {
  const { language, t } = useLanguage();
  const [customerName, setCustomerName] = useState("");
  const [inquiryNote, setInquiryNote] = useState("");

  if (!isOpen || !service) return null;

  const serviceTitle = t(service.title);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getServiceOrderWhatsAppUrl(serviceTitle, customerName, inquiryNote);
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  const handleDirectWhatsApp = () => {
    const url = getServiceOrderWhatsAppUrl(serviceTitle);
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-5 sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white mb-2">
                {language === "ne" ? "सेवा अर्डर सोधपुछ" : "Service Order Inquiry"}
              </span>
              <h3 id="order-modal-title" className="text-xl font-bold leading-tight">
                {serviceTitle}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-blue-900 leading-relaxed">
            <span className="font-semibold block mb-0.5">
              {language === "ne" ? "📋 अर्डर प्रक्रिया जानकारी:" : "📋 How Ordering Works:"}
            </span>
            {language === "ne"
              ? "तपाईंको सन्देश आधिकारिक WhatsApp मा तयार हुनेछ। मूल्य र प्रक्रिया छलफल गरेपछि मात्र भुक्तानी गरिन्छ।"
              : "This prepares an official inquiry in WhatsApp. You will discuss requirements and confirm pricing directly with us before making any payment."}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-blue-600" />
              <span>{language === "ne" ? "तपाईंको नाम (वैकल्पिक)" : "Your Name (Optional)"}</span>
            </label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder={language === "ne" ? "उदा: राम श्रेष्ठ" : "e.g. John Doe"}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>{language === "ne" ? "थप सोधपुछ वा आवश्यकता (वैकल्पिक)" : "Special Note or Inquiry (Optional)"}</span>
            </label>
            <textarea
              rows={2}
              value={inquiryNote}
              onChange={(e) => setInquiryNote(e.target.value)}
              placeholder={
                language === "ne"
                  ? "कुनै विशेष प्रश्न वा आवश्यकता भए यहाँ लेख्नुहोस्..."
                  : "Any specific deadline or requirement..."
              }
              className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Pricing indicator */}
          <div className="flex items-center justify-between text-xs py-1 border-t border-slate-100">
            <span className="text-slate-500 font-medium">
              {language === "ne" ? "मूल्य निर्धारण:" : "Service Pricing:"}
            </span>
            <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
              {t(service.priceNote)}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-98"
            >
              <Send className="w-4 h-4" />
              <span>{language === "ne" ? "WhatsApp मा पठाउनुहोस्" : "Send Inquiry on WhatsApp"}</span>
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium text-xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>{language === "ne" ? "सिधै च्याट खोल्नुहोस्" : "Quick Direct Chat"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
