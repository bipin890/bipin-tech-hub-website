import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  // Static core routes
  const staticRoutes = [
    "",
    "/services",
    "/how-it-works",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/refund-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : route === "/services" ? 0.9 : 0.7,
  }));

  // Dynamic service routes (The 7 approved services)
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
