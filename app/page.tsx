
import type { Metadata } from "next";

// ==========================================
// OPV HOMEPAGE COMPONENTS
// ==========================================

import SolutionsSection from "./components/home/SolutionsSection";
import IndustriesSection from "./components/home/IndustriesSection";
import ApproachSection from "./components/home/ApproachSection";
import BusinessOutcomes from "./components/home/BusinessOutcomes";
import CaseStudiesSection from "./components/home/CaseStudiesSection";
import InsightsSection from "./components/home/InsightsSection";
import ContactSection from "./components/home/ContactSection";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import ProductsSection from "./components/home/ProductsSection";

// ==========================================
// HOMEPAGE SEO METADATA
// ==========================================

export const metadata: Metadata = {
  title:
    "OPV AI Realty Tech | AI & Software Development Company in Hyderabad",

  description:
    "OPV AI Realty Tech Private Limited provides AI development, custom software, web and mobile app development, SaaS platforms, CRM, ERP and business automation solutions in Hyderabad, India.",

  applicationName: "OPV AI Realty Tech",

  metadataBase: new URL("https://www.opvairealtytech.com"),

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
    url: "https://www.opvairealtytech.com/",
    siteName: "OPV AI Realty Tech",

    title:
      "OPV AI Realty Tech | AI & Software Development Company in Hyderabad",

    description:
      "Build smarter digital businesses with AI solutions, custom software development, SaaS platforms, mobile applications and intelligent business automation.",

    images: [
      {
        url: "/images/opv-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OPV AI Realty Tech - AI and Software Development Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "OPV AI Realty Tech | AI & Software Development Company",

    description:
      "AI development, software engineering, SaaS, mobile apps and business automation solutions in India.",

    images: ["/images/opv-og-image.jpg"],
  },

  category: "Technology",
};

// ==========================================
// ORGANIZATION STRUCTURED DATA
// ==========================================

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OPV AI Realty Tech Private Limited",
  alternateName: "OPV AI Realty Tech",
  url: "https://www.opvairealtytech.com/",
  logo: "https://www.opvairealtytech.com/images/logo2.png",
  description:
    "OPV AI Realty Tech provides AI solutions, software development, SaaS platforms, mobile applications and business technology solutions.",
  email: "info@opvairealtytech.com",
  telephone: "+91-9963513939",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "IN",
  },
};

// ==========================================
// OPV AI REALTY TECH HOMEPAGE
// ==========================================

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* ORGANIZATION SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* 01. HERO SECTION */}
      <HeroSection />

      {/* 02. ABOUT OPV AI REALTY TECH */}
      <AboutSection />

      {/* 03. CORE TECHNOLOGY SOLUTIONS */}
      <SolutionsSection />

      {/* 04. INDUSTRIES WE SERVE */}
      <IndustriesSection />

      {/* 05. PRODUCTS & DIGITAL PLATFORMS */}
      <ProductsSection />

      {/* 06. OUR TECHNOLOGY DELIVERY APPROACH */}
      <ApproachSection />

      {/* 07. BUSINESS OUTCOMES */}
      <BusinessOutcomes />

      {/* 08. CASE STUDIES & TECHNOLOGY IN ACTION */}
      <CaseStudiesSection />

      {/* 09. AI & TECHNOLOGY INSIGHTS */}
      <InsightsSection />

      {/* 10. BUSINESS ENQUIRY & CONTACT */}
      <ContactSection />

    </main>
  );
}
