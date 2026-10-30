"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { homeContent } from "@/data/content";
import { ShieldCheck, Award, Users, CheckCircle2, ArrowRight } from "lucide-react";

export function AboutSection() {
  const { language, t } = useLanguage();
  const content = homeContent.aboutSummary;

  const keyPoints = [
    {
      en: "Dedicated online assistance for official government and educational portals.",
      ne: "सरकारी तथा शैक्षिक अनलाइन पोर्टलहरूका लागि समर्पित सहजीकरण।",
    },
    {
      en: "International formatting standards for Europass CVs and cover letters.",
      ne: "युरोपास सिभि तथा कभर लेटरका लागि युरोपेली मापदण्डको पूर्ण पालना।",
    },
    {
      en: "Direct WhatsApp support without confusing robotic chatbots.",
      ne: "कुनै झन्झटिलो रोबोट बिना सोझै ह्वाट्सएपमा वास्तविक व्यक्तिसँग संवाद।",
    },
    {
      en: "Strict data privacy — your submitted documents remain confidential.",
      ne: "कागजातको कडा गोपनीयता — तपाईंका विवरण सुरक्षित राखिन्छ।",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-blue-900 to-slate-900 p-8 sm:p-10 text-white shadow-card overflow-hidden border border-blue-800">
              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl">
                  B
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black tracking-tight">
                    BIPIN TECH HUB
                  </h3>
                  <p className="text-sm text-blue-200">
                    {language === "ne" ? "विश्वसनीय डिजिटल सेवा साथी" : "Your Trusted Digital Service Partner"}
                  </p>
                </div>

                <div className="pt-4 border-t border-blue-800/80 space-y-3 text-xs text-blue-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Serving All 77 Districts Across Nepal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Support for Nepalis Residing Abroad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% Manual Payment Verification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span>{t(content.tag)}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t(content.title)}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {t(content.description1)}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t(content.description2)}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {keyPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{t(pt)}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 group focus:outline-none"
              >
                <span>{t(content.readMoreBtn)}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
