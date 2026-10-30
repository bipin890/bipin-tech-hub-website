import React from "react";
import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us — BIPIN TECH HUB",
  description:
    "Get in touch with BIPIN TECH HUB via WhatsApp, YouTube, or email. We provide prompt digital service assistance and online form support across Nepal.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="pt-6 sm:pt-10">
      <ContactSection />
    </div>
  );
}
