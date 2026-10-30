import React from "react";
import type { Metadata } from "next";
import { HowItWorks } from "@/components/HowItWorks";
import { PaymentSection } from "@/components/PaymentSection";
import { OrderStatusSection } from "@/components/OrderStatusSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "How It Works — Step-by-Step Digital Service Guide",
  description:
    "Learn how ordering, communication, manual payment, and verification work at BIPIN TECH HUB. Simple 4-step process through direct WhatsApp chat.",
  alternates: {
    canonical: `${siteConfig.url}/how-it-works`,
  },
};

export default function HowItWorksPage() {
  return (
    <div className="pt-6 sm:pt-10">
      <HowItWorks />
      <PaymentSection />
      <OrderStatusSection />
    </div>
  );
}
