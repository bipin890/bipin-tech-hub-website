import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — BIPIN TECH HUB",
  description:
    "Privacy Policy for BIPIN TECH HUB regarding client document security, confidentiality, and data handling procedures.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Legal & Confidentiality
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1 mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">
            Last Updated: January 2026 | Applies to all services at BIPIN TECH HUB
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>1. Commitment to Client Confidentiality</span>
            </h2>
            <p>
              At <strong>BIPIN TECH HUB</strong>, we treat your privacy and identity documentation with the highest standard of care. Because we assist clients with sensitive items such as citizenship certificates, passport details, academic transcripts, and police clearance applications, confidentiality is fundamental to our relationship.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-600" />
              <span>2. Information We Receive</span>
            </h2>
            <p>
              When you contact us through WhatsApp to request service assistance, you may share:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>Contact details (name, phone number, WhatsApp identifier)</li>
              <li>Government identification scans (citizenship, passport) solely required to fill your designated form</li>
              <li>Academic certificates, CV notes, and career details needed to create your Europass resume or complete educational applications</li>
              <li>Payment transaction reference numbers or screenshots for manual payment verification</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-600" />
              <span>3. How We Use and Retain Your Documents</span>
            </h2>
            <p>
              Any documents shared with us are utilized exclusively for the specific service you have requested (e.g. entering details into the official Nepal Police or Loksewa portal). We do <strong>NOT</strong> sell, rent, monetize, or disclose your personal data to marketing third parties or unauthorized personnel.
            </p>
            <p>
              Once your service is completed and you have received your official slip or finalized document, we routinely purge temporary working files from our local devices to prevent unauthorized access.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>4. Third-Party Portals & Services</span>
            </h2>
            <p>
              When filling official forms (such as the Department of Consular Services, Nepal Police PCC portal, or DoTM driving license portal), data is entered directly into those respective government portals. Those official government platforms maintain their own independent terms and privacy protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Contact Regarding Privacy</h2>
            <p>
              If you have any questions or wish to request immediate deletion of any files previously shared for a completed request, please message us directly on WhatsApp or email us at <strong>{siteConfig.email}</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
