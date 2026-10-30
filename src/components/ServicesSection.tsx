"use client";

import React, { useState, useMemo } from "react";
import { servicesData } from "@/data/services";
import { ServiceItem } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import { homeContent } from "@/data/content";
import { ServiceCard } from "./ServiceCard";
import { OrderModal } from "./OrderModal";
import { CustomServiceInquiry } from "./CustomServiceInquiry";
import { Search, Sparkles } from "lucide-react";

export function ServicesSection({ showCustomInquiry = true }: { showCustomInquiry?: boolean }) {
  const { language, t } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const content = homeContent.servicesOverview;

  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return servicesData;
    const q = searchQuery.toLowerCase().trim();
    return servicesData.filter((service) => {
      const titleEn = service.title.en.toLowerCase();
      const titleNe = service.title.ne.toLowerCase();
      const descEn = service.shortDescription.en.toLowerCase();
      const descNe = service.shortDescription.ne.toLowerCase();
      return (
        titleEn.includes(q) ||
        titleNe.includes(q) ||
        descEn.includes(q) ||
        descNe.includes(q)
      );
    });
  }, [searchQuery]);

  const handleOrder = (service: ServiceItem) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50/60 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t(content.tag)}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t(content.title)}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(content.subtitle)}
          </p>

          {/* Search box for 7 services */}
          <div className="mt-8 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === "ne"
                  ? "सेवा खोजी गर्नुहोस् (उदा: PCC, लाइसेन्स, सिभि)..."
                  : "Search services (e.g. PCC, CV, License)..."
              }
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm text-slate-800 placeholder-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Services Grid (Exactly 7 approved services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOrderClick={handleOrder}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-600 text-sm">
              {language === "ne"
                ? "कुनै सेवा फेला परेन। तलको सोधपुछ फारम मार्फत अनुरोध गर्नुहोस्।"
                : "No matching service found. Feel free to request it below."}
            </p>
          </div>
        )}

        {/* Separate "Looking for Something Else?" Section */}
        {showCustomInquiry && <CustomServiceInquiry />}
      </div>

      {/* Order Modal */}
      <OrderModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedService(null);
        }}
      />
    </section>
  );
}
