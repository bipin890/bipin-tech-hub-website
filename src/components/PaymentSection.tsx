"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { homeContent } from "@/data/content";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  QrCode,
  ShieldCheck,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Wallet,
  ArrowRight,
} from "lucide-react";

export function PaymentSection() {
  const { language, t } = useLanguage();
  const [esewaImgError, setEsewaImgError] = useState(false);
  const [connectipsImgError, setConnectipsImgError] = useState(false);

  const content = homeContent.paymentSection;

  const paymentSteps = [
    {
      num: 1,
      title: {
        en: "Contact us on WhatsApp",
        ne: "WhatsApp मा सम्पर्क गर्नुहोस्",
      },
      desc: {
        en: "Initiate your service inquiry by messaging our official WhatsApp number.",
        ne: "हाम्रो आधिकारिक ह्वाट्सएप नम्बरमा सन्देश पठाई सेवा सम्बन्धी कुरा गर्नुहोस्।",
      },
    },
    {
      num: 2,
      title: {
        en: "Discuss & Confirm Price",
        ne: "सेवा र मूल्य यकिन गर्नुहोस्",
      },
      desc: {
        en: "Discuss your exact requirements and agree on the transparent service fee before paying.",
        ne: "आफ्नो काम बुझाउनुहोस् र भुक्तानी गर्नुअघि सेवा शुल्क स्पष्ट गर्नुहोस्।",
      },
    },
    {
      num: 3,
      title: {
        en: "Scan & Pay via QR",
        ne: "QR स्क्यान गरी भुक्तानी गर्नुहोस्",
      },
      desc: {
        en: "Make the agreed payment conveniently through eSewa QR or ConnectIPS QR.",
        ne: "सहमति भएको शुल्क इसेवा (eSewa) वा कनेक्टआईपिएस (ConnectIPS) QR बाट भुक्तानी गर्नुहोस्।",
      },
    },
    {
      num: 4,
      title: {
        en: "Share Screenshot / Ref",
        ne: "स्क्रिनसट वा कारोबार नम्बर पठाउनुहोस्",
      },
      desc: {
        en: "Share the transaction screenshot or reference number in our WhatsApp chat.",
        ne: "ह्वाट्सएप च्याटमा भुक्तानीको स्क्रिनसट वा ट्रान्जेक्सन कोड पठाउनुहोस्।",
      },
    },
    {
      num: 5,
      title: {
        en: "Manual Owner Verification",
        ne: "म्यानुअल भुक्तानी प्रमाणीकरण",
      },
      desc: {
        en: "Our team immediately cross-verifies the transaction in our merchant records.",
        ne: "हामी बैंक वा वालेटको खातामा रकम प्राप्त भएको तुरुन्त रुजु गर्दछौँ।",
      },
    },
    {
      num: 6,
      title: {
        en: "Service Confirmation",
        ne: "कामको आधिकारिक पुष्टि",
      },
      desc: {
        en: "We confirm your service request on WhatsApp and begin processing right away.",
        ne: "ह्वाट्सएपमै कामको पुष्टि गरी तुरुन्त प्रक्रिया अगाडि बढाइन्छ।",
      },
    },
  ];

  const discussPaymentWhatsAppUrl = getWhatsAppUrl(
    language === "ne"
      ? "नमस्ते BIPIN TECH HUB, म भुक्तानी र सेवा शुल्कको बारेमा बुझ्न चाहन्छु।"
      : "Hello BIPIN TECH HUB, I would like to discuss payment and pricing details."
  );

  return (
    <section id="payment" className="py-16 sm:py-24 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 mb-3">
            <Wallet className="w-3.5 h-3.5 text-blue-600" />
            <span>{t(content.tag)}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t(content.title)}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(content.subtitle)}
          </p>
        </div>

        {/* Top Warning / Clarification Card */}
        <div className="max-w-4xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3.5 text-amber-900 text-sm">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">
              {language === "ne"
                ? "महत्वपूर्ण भुक्तानी सूचना (Manual Verification Only):"
                : "Important Payment Notice (Manual Verification Only):"}
            </p>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
              {language === "ne"
                ? "हामी स्वचालित भुक्तानी गेटवे प्रयोग गर्दैनौँ। कुनै पनि रकम ट्रान्सफर गर्नु अघि WhatsApp मा हामीसँग मूल्य र सेवा विवरण यकिन गर्नुहोस्। भुक्तानी गरेपछि स्क्रिनसट वा कारोबार कोड WhatsApp मा अनिवार्य पठाउनुहोस्।"
                : "We do not use automatic payment gateways or store card details. Always confirm the service scope and final price on WhatsApp before making any transfer. After payment, send the screenshot or reference code directly on WhatsApp for manual verification."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: QR Code Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50/90 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-soft space-y-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <QrCode className="w-5 h-5 text-blue-600" />
                <span>{language === "ne" ? "स्वीकृत भुक्तानी QR कोडहरू" : "Accepted Payment QRs"}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* eSewa QR Box */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center flex flex-col items-center">
                  <div className="w-full aspect-square relative bg-slate-100 rounded-xl overflow-hidden mb-3 border border-slate-100 flex items-center justify-center">
                    {!esewaImgError ? (
                      <Image
                        src={siteConfig.payment.esewaQrPath}
                        alt="eSewa QR Code for BIPIN TECH HUB"
                        fill
                        className="object-contain p-2"
                        onError={() => setEsewaImgError(true)}
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-3 text-slate-500">
                        <QrCode className="w-12 h-12 text-emerald-600 mb-1" />
                        <span className="text-xs font-semibold text-emerald-700">eSewa QR Placeholder</span>
                        <span className="text-[10px] text-slate-400">Available on WhatsApp</span>
                      </div>
                    )}
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-1">
                    eSewa Wallet QR
                  </span>
                  <p className="text-[11px] text-slate-500">{siteConfig.payment.merchantName}</p>
                </div>

                {/* ConnectIPS QR Box */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center flex flex-col items-center">
                  <div className="w-full aspect-square relative bg-slate-100 rounded-xl overflow-hidden mb-3 border border-slate-100 flex items-center justify-center">
                    {!connectipsImgError ? (
                      <Image
                        src={siteConfig.payment.connectipsQrPath}
                        alt="ConnectIPS QR Code for BIPIN TECH HUB"
                        fill
                        className="object-contain p-2"
                        onError={() => setConnectipsImgError(true)}
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-3 text-slate-500">
                        <QrCode className="w-12 h-12 text-blue-600 mb-1" />
                        <span className="text-xs font-semibold text-blue-700">ConnectIPS QR Placeholder</span>
                        <span className="text-[10px] text-slate-400">Available on WhatsApp</span>
                      </div>
                    )}
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-1">
                    ConnectIPS QR
                  </span>
                  <p className="text-[11px] text-slate-500">{siteConfig.payment.merchantName}</p>
                </div>
              </div>

              {/* Discuss before paying CTA */}
              <div className="pt-2 text-center">
                <a
                  href={discussPaymentWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>
                    {language === "ne"
                      ? "भुक्तानी अघि WhatsApp मा सोध्नुहोस्"
                      : "Discuss Payment Details on WhatsApp"}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 6-Step Workflow */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>{language === "ne" ? "६-चरणीय भुक्तानी तथा प्रमाणीकरण प्रक्रिया" : "6-Step Payment & Verification Workflow"}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {paymentSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">
                      {step.num}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">
                      {t(step.title)}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    {t(step.desc)}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom confirmation disclaimer */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {language === "ne"
                  ? "हामी ग्राहकले रकम पठाएको म्यानुअल रुजु गरेपछि मात्र काम सुरु गर्दछौँ र सेवा स्वीकृत भएको लिखित जानकारी ह्वाट्सएपमा दिन्छौँ।"
                  : "We only confirm and initiate orders after manual bank/wallet verification. A written confirmation is always provided in our chat."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
