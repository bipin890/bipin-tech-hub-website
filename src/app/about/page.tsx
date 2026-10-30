import React from "react";
import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us — BIPIN TECH HUB",
  description:
    "Learn about BIPIN TECH HUB, a trusted digital service partner in Nepal helping clients with online forms, career documents, Europass CVs, and website development.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
