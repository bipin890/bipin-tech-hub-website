"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { homeContent } from "@/data/content";
import { getWhatsAppUrl } from "@/config/site";
import {
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Sparkles,
  Zap,
} from "lucide-react";

export function Hero() {
  const { language, t } = useLanguage();
  const content = homeContent.hero;

  const whatsappHref = getWhatsAppUrl(
    language === "ne"
      ? "नमस्ते BIPIN TECH HUB, मलाई डिजिटल सेवाहरूको बारेमा जानकारी चाहिएको थियो।"
      : "Hello BIPIN TECH HUB, I would like to inquire about your digital services."
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32">
      {/* Background radial soft aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-br from-blue-200/40 via-sky-100/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs sm:text-sm font-semibold border border-blue-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{t(content.badge)}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                {t(content.headline)}
              </h1>
              {language === "en" && (
                <p className="text-lg sm:text-xl font-medium text-blue-700">
                  {content.headline.ne}
                </p>
              )}
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t(content.subtitle)}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 active:scale-95"
              >
                <span>{t(content.exploreBtn)}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-600 active:scale-95"
              >
                <MessageSquare className="w-5 h-5 text-emerald-200" />
                <span>{t(content.whatsappBtn)}</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-2 gap-3 text-left">
              {content.trustPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-medium">{t(point)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Digital Graphic Illustration */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative rounded-3xl bg-gradient-to-tr from-slate-900 via-blue-900 to-indigo-950 p-6 sm:p-8 text-white shadow-card border border-blue-800/40 overflow-hidden">
                {/* Glow orbs */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />

                {/* Header of graphic */}
                <div className="flex items-center justify-between border-b border-blue-800/60 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                      B
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">BIPIN TECH HUB</h4>
                      <p className="text-[11px] text-blue-300">Digital Solutions Desk</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Online & Active
                  </span>
                </div>

                {/* Service Cards inside illustration */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-sky-400 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Police Clearance (PCC)</p>
                        <p className="text-[10px] text-blue-200">Consular Verification Support</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-500/30 text-sky-300">
                      Guided
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <FileCheck2 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Europass CV & Cover Letter</p>
                        <p className="text-[10px] text-blue-200">European Standard Format</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-300">
                      Standard
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">All Online Forms & Loksewa</p>
                        <p className="text-[10px] text-blue-200">Driving License & Portals</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/30 text-amber-300">
                      Assisted
                    </span>
                  </div>
                </div>

                {/* Bottom interactive notification pill */}
                <div className="mt-5 pt-4 border-t border-blue-800/60 flex items-center justify-between text-xs text-blue-200">
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp First Workflow</span>
                  </span>
                  <span className="text-sky-300 font-semibold">Nepal Nationwide</span>
                </div>
              </div>

              {/* Floating mini badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Direct Support</p>
                  <p className="text-[10px] text-slate-500">Verified Process Guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
