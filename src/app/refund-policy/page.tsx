import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { RotateCcw, AlertTriangle, CheckCircle2, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy — BIPIN TECH HUB",
  description:
    "Refund Policy and cancellation procedures for manual digital services at BIPIN TECH HUB.",
  alternates: {
    canonical: `${siteConfig.url}/refund-policy`,
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Consumer Protection
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1 mb-3">
            Refund & Cancellation Policy
          </h1>
          <p className="text-sm text-slate-500">
            Effective Date: January 2026 | BIPIN TECH HUB
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-blue-600" />
              <span>1. Overview</span>
            </h2>
            <p>
              At <strong>BIPIN TECH HUB</strong>, we prioritize fair, transparent, and direct service delivery. Because our digital services involve personalized labor (form data entry, CV formatting, website coding), please read our refund guidelines carefully.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>2. Full Refund Eligibility</span>
            </h2>
            <p>
              You are eligible for a 100% refund of our service fee if:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>You make a manual payment via eSewa or ConnectIPS QR, but cancel your request <strong>before</strong> our team has commenced processing your application or drafting your document.</li>
              <li>We are unable to fulfill your technical service request due to unforeseen technical constraints on our end.</li>
              <li>An inadvertent duplicate transfer was made.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>3. Non-Refundable Situations</span>
            </h2>
            <p>
              Refunds cannot be granted under the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li><strong>Government Official Revenue Fees:</strong> Official fees paid directly to government revenue accounts (e.g. Loksewa exam fee, transport office revenue) are non-refundable once submitted to the government account.</li>
              <li><strong>Completed Work:</strong> Once an online form has been successfully submitted and the official confirmation slip is delivered, or once a Europass CV has been drafted and delivered.</li>
              <li><strong>Third-Party Decisions:</strong> Rejection or delay by official authorities (such as a police background check rejection due to an existing legal record or failure in a driving license trial test).</li>
              <li><strong>Inaccurate Details Provided by Client:</strong> Delays resulting from incorrect documents or invalid details provided by the client.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <span>4. How to Request a Refund</span>
            </h2>
            <p>
              To request a cancellation or refund, contact us directly on WhatsApp with:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600">
              <li>Your Name and Service requested</li>
              <li>Transaction Reference / eSewa or ConnectIPS statement screenshot</li>
              <li>Reason for cancellation</li>
            </ul>
            <p>
              Eligible refunds are processed manually back to your original eSewa or bank account within 24 to 48 hours.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
