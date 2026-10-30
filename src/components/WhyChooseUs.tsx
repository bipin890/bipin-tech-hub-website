"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { homeContent, whyChooseUsItems } from "@/data/content";
import {
  MessageSquare,
  UserCheck,
  ShieldAlert,
  Smartphone,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

export function WhyChooseUs() {
  const { t } = useLanguage();
  const content = homeContent.whyChooseUs;

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5" />;
      case "UserCheck":
        return <UserCheck className="w-5 h-5" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 mb-3">
            <span>{t(content.tag)}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t(content.title)}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(content.subtitle)}
          </p>
        </div>

        {/* 5 Core Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUsItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 mb-5">
                  {getFeatureIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                  {t(item.title)}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {t(item.description)}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-blue-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Verified Client Respect</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
