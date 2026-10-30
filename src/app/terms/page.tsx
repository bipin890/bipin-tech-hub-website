import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Scale, ShieldAlert, CheckCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions — BIPIN TECH HUB",
  description:
    "Terms and Conditions governing service requests, data accuracy, government disclaimers, and manual transactions at BIPIN TECH HUB.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            User Agreement
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1 mb-3">
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-500">
            Effective Date: January 2026 | BIPIN TECH HUB
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-blue-600" />
              <span>1. Nature of Our Services</span>
            </h2>
            <p>
              <strong>BIPIN TECH HUB</strong> operates as an independent digital facilitation and technical assistance desk. We provide technical data entry, document formatting, Europass resume structuring, and personal portfolio web design.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-600" />
              <span>2. No Government Affiliation & Independent Status</span>
            </h2>
            <p>
              We are <strong>NOT</strong> an official government agency, embassy, or diplomatic mission. We do not issue passports, police clearance certificates, citizenship documents, or driving licenses. All official decisions, background approvals, examination scores, and document issuances are rendered solely by the relevant authorities of the Government of Nepal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span>3. Accuracy of Information Submitted</span>
            </h2>
            <p>
              Clients are strictly responsible for providing authentic, truthful, and accurate personal information and documents. BIPIN TECH HUB will enter the exact details provided by the client into the designated portal. We provide a draft review before final submission where possible.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <span>4. Pricing & Manual Payment</span>
            </h2>
            <p>
              Service prices are quoted as "Contact for Price" and explicitly confirmed with the client on WhatsApp before initiating work. No automated credit card charges or automatic gateway collections are conducted. All payments are transferred manually via eSewa QR or ConnectIPS QR and manually verified by our team.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Contact Information</h2>
            <p>
              For inquiries regarding these Terms and Conditions, reach us via WhatsApp at +{siteConfig.whatsappNumber} or email {siteConfig.email}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
