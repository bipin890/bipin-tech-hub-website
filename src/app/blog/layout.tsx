import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Blog — Technology, Tutorials & Digital Guides",
  description: "Practical technology tutorials, cybersecurity learning resources, web development tips and digital service guides from BIPIN TECH HUB.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "BIPIN TECH HUB Blog",
    description: "Technology tutorials and practical digital guides.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
