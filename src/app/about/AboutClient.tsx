"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import {
  ShieldCheck,
  Users,
  MessageSquare,
  FileText,
  Globe,
  Code2,
  CheckCircle2,
  Heart,
  Sparkles,
} from "lucide-react";

export function AboutClient() {
  const { language } = useLanguage();

  const whatsappHref = getWhatsAppUrl(
    language === "ne"
      ? "नमस्ते BIPIN TECH HUB, म तपाईंको बारेमा थप बुझ्न चाहन्छु।"
      : "Hello BIPIN TECH HUB, I would like to know more about your services."
  );

  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{language === "ne" ? "हाम्रो परिचय" : "About BIPIN TECH HUB"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {language === "ne"
              ? "नेपाली नागरिकका लागि सहज र भरपर्दो डिजिटल सेवा साथी"
              : "Your Reliable Digital Service Partner in Nepal"}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {language === "ne"
              ? "अनलाइन फारम भर्ने झन्झट, फोटो डकुमेन्ट मिलाउने समस्या र करियर कागजात निर्माणमा प्राविधिक सहयोग प्रदान गर्ने हाम्रो लक्ष्य हो।"
              : "Bridging the digital divide for students, job applicants, and professionals navigating official online portals and digital applications across Nepal."}
          </p>
        </div>

        {/* Story & Background Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-soft flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                BTH
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                {language === "ne" ? "हाम्रो स्थापना र उद्देश्य" : "Our Origin & Mission"}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {language === "ne"
                  ? "नेपालमा अधिकांश सरकारी तथा अन्तर्राष्ट्रिय सेवाहरू अनलाइनमा रूपान्तरण भएका छन्। तर धेरै सेवाग्राहीहरू सर्भर समस्या, फोटो र हस्ताक्षरको साइज नमिल्ने, वा जटिल प्रक्रियाका कारण साइबर क्याफेमा घन्टौं लाइन बस्न बाध्य हुन्छन्। BIPIN TECH HUB यही समस्या समाधान गर्न सुरु गरिएको हो।"
                  : "As government, academic, and visa applications transition to digital platforms, many individuals struggle with portal glitches, strict file size compression limits, and tricky procedural nuances. BIPIN TECH HUB was created to provide direct, guided assistance right over WhatsApp from the comfort of your home."}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-blue-800 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{language === "ne" ? "कुनै झन्झटिलो खाता खोल्न नपर्ने" : "No complicated app signups needed"}</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white shadow-card flex flex-col justify-between space-y-6 border border-blue-800">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold">
                {language === "ne" ? "हाम्रो कार्यक्षेत्र" : "What We Specialize In"}
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                {language === "ne" ? "सेवाका मुख्य ४ खम्बा" : "4 Core Pillars of Service"}
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-blue-100">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{language === "ne" ? "सरकारी अनलाइन फारम:" : "Government Forms:"}</strong> PCC, Loksewa, Driving License, University Portals
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{language === "ne" ? "अन्तर्राष्ट्रिय करियर कागजात:" : "Career Documents:"}</strong> European Standard Europass CVs & Cover Letters
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Globe className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{language === "ne" ? "वेबसाइट विकास:" : "Web Development:"}</strong> Fast, modern personal portfolios with free cloud hosting
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Code2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{language === "ne" ? "प्रोग्रामिङ गाइड:" : "Educational Guidance:"}</strong> Practical C Programming tutorials & lab assistance
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-blue-800/60 text-xs text-sky-200 flex items-center justify-between">
              <span>{siteConfig.location}</span>
              <span className="font-semibold">{siteConfig.workingHours}</span>
            </div>
          </div>
        </div>

        {/* Why Choose Us component embedded */}
        <WhyChooseUs />

        {/* WhatsApp Consultation Prompt */}
        <div className="p-8 sm:p-10 rounded-3xl bg-blue-50 border border-blue-100 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            {language === "ne" ? "हामीसँग काम गर्न चाहनुहुन्छ?" : "Ready to Experience Hassle-Free Assistance?"}
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            {language === "ne"
              ? "कुनै पनि अनलाइन फारम वा कागजातको लागि हामीलाई सिधै WhatsApp मा सन्देश पठाउनुहोस्।"
              : "Message us directly on WhatsApp to get started with any form or documentation need."}
          </p>
          <div className="pt-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>{language === "ne" ? "WhatsApp मा कुरा गर्नुहोस्" : "Chat on WhatsApp"}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
