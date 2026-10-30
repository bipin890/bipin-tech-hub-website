import React from "react";
import type { Metadata } from "next";
import { ServicesSection } from "@/components/ServicesSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Services — 7 Approved Digital Services",
  description:
    "Explore our complete range of 7 approved digital services in Nepal: Police Clearance (PCC), Europass CV, All Online Forms, Driving License, Loksewa, Portfolio Websites, and C Programming Guide.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-6 sm:pt-10">
      <ServicesSection showCustomInquiry={true} />
    </div>
  );
}
