"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { navLinks } from "@/data/content";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MessageSquare, Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Navbar() {
  const { language, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const whatsappHref = getWhatsAppUrl(
    language === "ne"
      ? "नमस्ते BIPIN TECH HUB, मलाई डिजिटल सेवाहरूको बारेमा जानकारी चाहिएको थियो।"
      : "Hello BIPIN TECH HUB, I would like to inquire about your digital services."
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5"
          : "bg-white border-b border-slate-100 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-sky-500 flex items-center justify-center text-white font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 tracking-tight text-lg leading-tight group-hover:text-blue-700 transition-colors">
                BIPIN <span className="text-blue-600">TECH HUB</span>
              </span>
              <span className="text-[10px] font-medium text-slate-500 tracking-wider uppercase -mt-0.5">
                {language === "ne" ? "डिजिटल सेवा नेपाल" : "Digital Services Nepal"}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-700 bg-blue-50/80 font-semibold"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {t(link.label)}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA: Language + WhatsApp Button */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>{language === "ne" ? "WhatsApp मा कुरा गर्नुहोस्" : "Chat on WhatsApp"}</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "text-blue-700 bg-blue-50 font-semibold"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {t(link.label)}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-100">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md active:scale-95 transition-transform"
              >
                <MessageSquare className="w-5 h-5 text-emerald-300" />
                <span>{language === "ne" ? "WhatsApp मा कुरा गर्नुहोस्" : "Chat on WhatsApp"}</span>
              </a>
            </div>

            <p className="text-xs text-center text-slate-500 pt-2 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
              <span>{language === "ne" ? "१००% सुरक्षित र प्रत्यक्ष संवाद" : "100% Direct & Secure Support"}</span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
