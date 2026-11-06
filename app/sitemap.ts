
import type { MetadataRoute } from "next";

const BASE_URL = "https://www.opvairealtytech.com";

const solutionPages = [
  "/solutions/ai-intelligent-automation",
  "/solutions/software-engineering",
  "/solutions/saas-cloud-devops",
  "/solutions/crm-erp-business-systems",
  "/solutions/data-business-intelligence",
  "/solutions/web-mobile-experiences",
  "/solutions/cybersecurity-it-solutions",
  "/solutions/digital-growth-marketing",
];

const industryPages = [
  "/industries/real-estate",
  "/industries/retail-ecommerce",
  "/industries/healthcare",
  "/industries/education",
  "/industries/manufacturing",
  "/industries/logistics",
  "/industries/startups-smes",
  "/industries/enterprise-corporate",
];

const mainPages = [
  "",
  "/about",
  "/approach",
  "/insights",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    ...mainPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),

    ...solutionPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),

    ...industryPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return pages;
}
