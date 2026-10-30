"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { homeContent } from "@/data/content";
import { siteConfig } from "@/config/site";
import { ExternalLink, PlayCircle, Bell, Code2, BookOpen, Sparkles } from "lucide-react";
import { YouTubeIcon } from "./YouTubeIcon";

export function YouTubeSection() {
  const { language, t } = useLanguage();
  const content = homeContent.youtubeSection;

  const topics = [
    {
      title: {
        en: "C Programming Masterclass",
        ne: "सी प्रोग्रामिङ पूर्ण पाठ",
      },
      tag: "Coding",
    },
    {
      title: {
        en: "Police Clearance (PCC) Online Guide",
        ne: "प्रहरी रिपोर्ट अनलाइन फारम भर्ने तरिका",
      },
      tag: "Government Portal",
    },
    {
      title: {
        en: "Europass CV Creation Step-by-Step",
        ne: "युरोपास सिभि र कभर लेटर बनाउने विधि",
      },
      tag: "Career",
    },
    {
      title: {
        en: "Loksewa & Driving License Tips",
        ne: "लोकसेवा र लाइसेन्स फारम भर्ने सुझाव",
      },
      tag: "Tips",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-slate-950 via-slate-900 to-red-950 rounded-3xl p-8 sm:p-12 text-white shadow-card relative overflow-hidden border border-red-900/30">
          {/* Subtle YouTube red glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold border border-red-500/30">
                <YouTubeIcon className="w-4 h-4 text-red-500" />
                <span>{t(content.tag)}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                {t(content.title)}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                {t(content.description)}
              </p>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap gap-3.5">
                <a
                  href={siteConfig.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <PlayCircle className="w-5 h-5 text-white" />
                  <span>{t(content.watchBtn)}</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                </a>

                <a
                  href={`${siteConfig.youtubeChannelUrl}?sub_confirmation=1`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-xs transition-colors active:scale-95"
                >
                  <Bell className="w-4 h-4 text-amber-400" />
                  <span>{t(content.subscribeBtn)}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Featured Video Topic Previews */}
            <div className="lg:col-span-5 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === "ne" ? "प्रमुख भिडियो विषयहरू" : "Featured Video Topics"}</span>
              </p>

              {topics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                      <PlayCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {t(item.title)}
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
