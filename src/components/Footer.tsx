"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { servicesData } from "@/data/services";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { MessageSquare, Mail, MapPin, Heart, ShieldAlert } from "lucide-react";
import { YouTubeIcon } from "./YouTubeIcon";

export function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const whatsappHref = getWhatsAppUrl(
    language === "ne"
      ? "नमस्ते BIPIN TECH HUB, मलाई जानकारी चाहिएको थियो।"
      : "Hello BIPIN TECH HUB, I would like to inquire about your services."
  );

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg">
                B
              </div>
              <span className="font-extrabold text-white tracking-tight text-xl">
                BIPIN <span className="text-blue-400">TECH HUB</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              {language === "ne"
                ? siteConfig.descriptionNepali
                : siteConfig.description}
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{siteConfig.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </p>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="w-9 h-9 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {language === "ne" ? "नेभिगेसन" : "Quick Links"}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  {language === "ne" ? "गृहपृष्ठ" : "Home"}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  {language === "ne" ? "हाम्रा सेवाहरू" : "Our Services"}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-blue-400 transition-colors">
                  {language === "ne" ? "कसरी काम गर्छ?" : "How It Works"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  {language === "ne" ? "हाम्रो बारेमा" : "About Us"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  {language === "ne" ? "सम्पर्क" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The 7 Services Links (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {language === "ne" ? "हाम्रा ७ सेवाहरू" : "Our 7 Services"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="hover:text-blue-400 transition-colors line-clamp-1"
                  >
                    {t(svc.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Policies (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {language === "ne" ? "नीति तथा नियम" : "Legal & Policies"}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
                  {language === "ne" ? "गोपनीयता नीति" : "Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition-colors">
                  {language === "ne" ? "नियम तथा सर्तहरू" : "Terms & Conditions"}
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-blue-400 transition-colors">
                  {language === "ne" ? "रिफन्ड नीति" : "Refund Policy"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500 leading-relaxed flex items-start gap-2">
          <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p>
            {language === "ne"
              ? "विपिन टेक हब (BIPIN TECH HUB) एक स्वतन्त्र प्राविधिक तथा अनलाइन कागजात सहजीकरण सेवा हो। हामी सरकारी पोर्टलहरूमा अनलाइन फारम भर्ने र डकुमेन्ट मिलाउने प्राविधिक सहयोग मात्र प्रदान गर्दछौँ। सरकारी प्रमाणपत्र वा लाइसेन्सको अन्तिम स्वीकृति सम्बन्धित निकायको निर्णयमा भर पर्छ।"
              : "Disclaimer: BIPIN TECH HUB provides independent technical form-filling and documentation assistance. Official background checks, police reports, and driving licenses are granted solely by authorized Nepal Government authorities."}
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} <span className="text-slate-300 font-semibold">{siteConfig.name}</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Built for Nepal with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>Integrity & Quality</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
