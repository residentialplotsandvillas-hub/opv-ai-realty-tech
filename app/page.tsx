
import type { Metadata } from "next";

// ==========================================
// OPV HOMEPAGE COMPONENTS
// ==========================================

import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import SolutionsSection from "./components/home/SolutionsSection";
import IndustriesSection from "./components/home/IndustriesSection";
import ProductsSection from "./components/home/ProductsSection";
import ApproachSection from "./components/home/ApproachSection";
import BusinessOutcomes from "./components/home/BusinessOutcomes";
import CaseStudiesSection from "./components/home/CaseStudiesSection";
import InsightsSection from "./components/home/InsightsSection";
import ContactSection from "./components/home/ContactSection";

// ==========================================
// SITE CONFIGURATION
// ==========================================

const SITE_URL = "https://www.opvairealtytech.com";

const COMPANY_NAME =
  "OPV AI Realty Tech Private Limited";

const SITE_NAME = "OPV AI Realty Tech";

const PAGE_TITLE =
  "AI & Software Development Company in Hyderabad | OPV AI Realty Tech";

const PAGE_DESCRIPTION =
  "OPV AI Realty Tech is an AI and software development company in Hyderabad offering AI agents, chatbots, custom software, SaaS, CRM, ERP, web and mobile app development, and business automation services across India.";

// ==========================================
// HOMEPAGE SEO METADATA
// ==========================================

export const metadata: Metadata = {
  title: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  applicationName: SITE_NAME,

  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,

    title: PAGE_TITLE,

    description:
      "Build smarter, automate better and grow faster with AI development, intelligent automation, custom software, SaaS platforms, CRM, ERP and digital technology solutions.",

    images: [
      {
        url: "/images/opv-og-image.jpg",
        width: 1200,
        height: 630,
        alt:
          "OPV AI Realty Tech - AI Development and Software Solutions in Hyderabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "OPV AI Realty Tech | AI & Software Development",

    description:
      "AI agents, intelligent automation, software development, SaaS, CRM, ERP and digital business solutions in Hyderabad, India.",

    images: ["/images/opv-og-image.jpg"],
  },

  category: "Business Technology",
};

// ==========================================
// ORGANIZATION STRUCTURED DATA
// ==========================================

const organizationSchema = {
  "@context": "https://schema.org",

  "@type": "Organization",

  "@id": `${SITE_URL}/#organization`,

  name: COMPANY_NAME,

  alternateName: SITE_NAME,

  url: `${SITE_URL}/`,

  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/logo2.png`,
  },

  description:
    "OPV AI Realty Tech Private Limited is a Hyderabad-based business technology company providing artificial intelligence development, custom software engineering, intelligent automation, SaaS, CRM, ERP, web and mobile app development, and digital business growth solutions.",

  email: "info@opvairealtytech.com",

  telephone: "+91-9963513939",

  address: {
    "@type": "PostalAddress",

    streetAddress:
      "#101, Road No: 10, Jaya Kesav Avenue, Kakatiya Hills, Madhapur",

    addressLocality: "Hyderabad",

    addressRegion: "Telangana",

    postalCode: "500081",

    addressCountry: "IN",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

// ==========================================
// WEBSITE STRUCTURED DATA
// ==========================================

const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": `${SITE_URL}/#website`,

  name: SITE_NAME,

  url: `${SITE_URL}/`,

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  inLanguage: "en-IN",
};

// ==========================================
// JSON-LD SERIALIZATION
// ==========================================

function serializeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// ==========================================
// HOMEPAGE
// ==========================================

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#263C50]">

      {/* ORGANIZATION STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(organizationSchema),
        }}
      />

      {/* WEBSITE STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(websiteSchema),
        }}
      />

      {/* 01 — HERO */}
      <HeroSection />

      {/* 02 — ABOUT OPV AI REALTY TECH */}
      <AboutSection />

      {/* 03 — AI & TECHNOLOGY SOLUTIONS */}
      <SolutionsSection />

      {/* 04 — INDUSTRIES WE SERVE */}
      <IndustriesSection />

      {/* 05 — PRODUCTS & DIGITAL PLATFORMS */}
      <ProductsSection />

      {/* 06 — OUR TECHNOLOGY DELIVERY APPROACH */}
      <ApproachSection />

      {/* 07 — BUSINESS OUTCOMES */}
      <BusinessOutcomes />

      {/* 08 — CASE STUDIES & TECHNOLOGY INITIATIVES */}
      <CaseStudiesSection />

      {/* 09 — AI & TECHNOLOGY INSIGHTS */}
      <InsightsSection />

      {/* 10 — CONTACT & BUSINESS ENQUIRIES */}
      <ContactSection />

    </main>
  );
}
