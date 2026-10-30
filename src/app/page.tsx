import React from "react";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AboutSection } from "@/components/AboutSection";
import { OrderStatusSection } from "@/components/OrderStatusSection";
import { YouTubeSection } from "@/components/YouTubeSection";
import { PaymentSection } from "@/components/PaymentSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <HowItWorks />
      <WhyChooseUs />
      <AboutSection />
      <OrderStatusSection />
      <YouTubeSection />
      <PaymentSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
