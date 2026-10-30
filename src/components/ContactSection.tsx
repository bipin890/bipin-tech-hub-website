"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { homeContent } from "@/data/content";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  MessageSquare,
  Mail,
  Clock,
  MapPin,
  Send,
  ShieldCheck,
  PhoneCall,
} from "lucide-react";
import { YouTubeIcon } from "./YouTubeIcon";

export function ContactSection() {
  const { language, t } = useLanguage();
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const content = homeContent.contactSection;

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    const nameLine = name.trim() ? `Name: ${name.trim()}\n` : "";
    const topicLine = topic.trim() ? `Topic: ${topic.trim()}\n` : "";
    const msgText = `Hello BIPIN TECH HUB,

${nameLine}${topicLine}Message: ${message.trim() || "I would like to inquire about your services."}

Thank you.`;

    const url = getWhatsAppUrl(msgText);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const whatsappDirectHref = getWhatsAppUrl(
    language === "ne"
      ? "नमस्ते BIPIN TECH HUB, म प्रत्यक्ष सम्पर्क गर्न चाहन्छु।"
      : "Hello BIPIN TECH HUB, I want to reach out to you directly."
  );

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 mb-3">
            <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
            <span>{t(content.tag)}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t(content.title)}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(content.subtitle)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card (Primary) */}
            <a
              href={whatsappDirectHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-white border-2 border-emerald-500/40 shadow-soft hover:shadow-card hover:border-emerald-600 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                    {language === "ne" ? "मुख्य सम्पर्क माध्यम (Primary)" : "Primary Contact Channel"}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    WhatsApp Business
                  </h3>
                  <p className="text-sm text-slate-600 mt-0.5">
                    +{siteConfig.whatsappNumber}
                  </p>
                  <span className="inline-block mt-2 text-xs font-semibold text-emerald-700 underline">
                    {language === "ne" ? "WhatsApp मा च्याट खोल्नुहोस् →" : "Open WhatsApp Chat →"}
                  </span>
                </div>
              </div>
            </a>

            {/* YouTube Channel */}
            <a
              href={siteConfig.youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-card hover:border-red-400 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <YouTubeIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    YouTube Channel
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {language === "ne" ? "भिडियो ट्युटोरियल र गाइडहरू" : "Video tutorials & walkthroughs"}
                  </p>
                  <span className="text-[11px] text-red-600 font-semibold inline-block mt-1">
                    {language === "ne" ? "च्यानल भ्रमण गर्नुहोस् →" : "Visit Channel →"}
                  </span>
                </div>
              </div>
            </a>

            {/* Email Contact Placeholder */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Email Inquiry
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {siteConfig.email}
                  </p>
                  <span className="text-[10px] text-slate-400">
                    {language === "ne" ? "(छिटो सेवाको लागि WhatsApp रोज्नुहोस्)" : "(Prefer WhatsApp for faster response)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Operating Hours & Location */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-soft space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{siteConfig.workingHours}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick WhatsApp Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft">
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <span>{language === "ne" ? "छिटो सन्देश पठाउनुहोस्" : "Send Quick WhatsApp Message"}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              {language === "ne"
                ? "यहाँ विवरण लेखेर पठाउनुहोस्, सोझै तपाईंको WhatsApp मा च्याट तयार हुनेछ।"
                : "Fill in the fields below and it will compose a pre-formatted message in WhatsApp for you."}
            </p>

            <form onSubmit={handleQuickSend} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === "ne" ? "तपाईंको नाम (वैकल्पिक)" : "Your Name (Optional)"}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === "ne" ? "तपाईंको नाम" : "Your name"}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === "ne" ? "सेवा वा विषय" : "Service or Topic"}
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder={language === "ne" ? "उदा: युरोपास सिभि / PCC" : "e.g. Europass CV / PCC"}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === "ne" ? "तपाईंको सन्देश वा प्रश्न" : "Your Message or Inquiry"}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    language === "ne"
                      ? "आफ्नो जिज्ञासा वा आवश्यकता यहाँ लेख्नुहोस्..."
                      : "Write your inquiry or requirement here..."
                  }
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>{language === "ne" ? "WhatsApp मा सन्देश खोल्नुहोस्" : "Open Message on WhatsApp"}</span>
              </button>

              <p className="text-[11px] text-center text-slate-400">
                {language === "ne"
                  ? "हामी कुनै पनि विज्ञापन वा स्पाम सन्देश पठाउँदैनौँ। केवल प्रत्यक्ष प्राविधिक संवाद।"
                  : "We respect your privacy. No automated marketing or promotional spam."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
