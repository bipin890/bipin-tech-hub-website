import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d4ed8",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "BIPIN TECH HUB — Your Trusted Digital Service Partner in Nepal",
    template: "%s | BIPIN TECH HUB",
  },
  description:
    "Official online form assistance, Police Clearance (PCC) consular stamp, Europass CV, Loksewa forms, Driving License applications, and portfolio website development in Nepal.",
  keywords: [
    "Online Form Service Nepal",
    "Police Clearance Report Nepal",
    "Europass CV Nepal",
    "Loksewa Form Fill Up",
    "Driving License Form Nepal",
    "Portfolio Website Nepal",
    "C Programming Guide Nepal",
    "Digital Services Nepal",
    "Bipin Tech Hub",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // These assets are stored in public/images/, so URLs must include /images/.
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon.png", type: "image/png" },
      { url: "/images/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ne_NP",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "BIPIN TECH HUB — Your Trusted Digital Service Partner",
    description:
      "Online Forms, Documentation, Career Support & Website Development — All in One Place in Nepal.",
    images: [
      {
        url: "/images/icon.png",
        width: 192,
        height: 192,
        alt: "BIPIN TECH HUB Digital Services",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "BIPIN TECH HUB — Digital Services in Nepal",
    description:
      "Professional online forms, Europass CV, PCC consular stamp, and website development in Nepal.",
    images: ["/images/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: "BTH",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/icon.png`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dang",
      addressCountry: "NP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      availableLanguage: ["English", "Nepali"],
    },
    sameAs: [siteConfig.youtubeChannelUrl],
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
