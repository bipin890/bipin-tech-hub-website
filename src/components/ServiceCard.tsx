"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { ServiceIcon } from "./ServiceIcon";
import { ArrowRight, MessageSquare, Tag } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
  onOrderClick: (service: ServiceItem) => void;
}

export function ServiceCard({ service, onOrderClick }: ServiceCardProps) {
  const { language, t } = useLanguage();

  const serviceImages: Record<string, string> = {
    "police-clearance-report": "/police-clearance.jpg",
    "europass-cv-cover-letter": "/europass-cv.jpg",
    "all-online-forms": "/online-forms.jpg",
    "driving-license-services": "/driving-license.jpg",
    "loksewa-online-forms": "/loksewa-online-forms.jpg",
    "personal-portfolio-website": "/personal-portfolio-website.jpg",
    "c-programming-guide": "/c-programming-guide.jpg",
  };
  const serviceImage = serviceImages[service.id];

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      {serviceImage && (
        <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden">
          <Image
            src={serviceImage}
            alt={t(service.title)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        {/* Top: Icon + Price Tag */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            <ServiceIcon name={service.iconName} className="w-6 h-6" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            <Tag className="w-3 h-3 text-blue-600" />
            <span>{t(service.priceNote)}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2.5">
          <Link href={`/services/${service.slug}`} className="focus:outline-none">
            {t(service.title)}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {t(service.shortDescription)}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
        <Link
          href={`/services/${service.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 text-xs sm:text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span>{language === "ne" ? "विस्तृत विवरण" : "Learn More"}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        <button
          type="button"
          onClick={() => onOrderClick(service)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
          <span>{language === "ne" ? "अर्डर गर्नुहोस्" : "Order Now"}</span>
        </button>
      </div>
    </div>
  );
}
