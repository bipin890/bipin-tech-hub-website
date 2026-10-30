"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { homeContent, howItWorksSteps } from "@/data/content";
import { Search, MessageCircle, CreditCard, CheckCircle, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const { t } = useLanguage();
  const content = homeContent.howItWorks;

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return <Search className="w-6 h-6" />;
      case "MessageCircle":
        return <MessageCircle className="w-6 h-6" />;
      case "CreditCard":
        return <CreditCard className="w-6 h-6" />;
      case "CheckCircle":
        return <CheckCircle className="w-6 h-6" />;
      default:
        return <CheckCircle className="w-6 h-6" />;
    }
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {howItWorksSteps.map((item, index) => (
            <div
              key={item.step}
              className="relative bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-soft hover:shadow-card hover:bg-white transition-all duration-300 flex flex-col items-start group"
            >
              {/* Step indicator badge */}
              <div className="flex items-center justify-between w-full mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  {getStepIcon(item.iconName)}
                </div>
                <span className="text-2xl font-black text-slate-300 group-hover:text-blue-500 transition-colors">
                  0{item.step}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                {t(item.title)}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {t(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
