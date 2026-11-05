
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
    "OPV AI Realty Tech | AI-Powered Business Technology & Growth",

  description:
    "OPV AI Realty Tech Private Limited delivers AI solutions, custom software, web and mobile applications, SaaS, CRM, ERP, cloud, business automation, cybersecurity and digital growth solutions for businesses across industries in India.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.opvairealtytech.com/",
    siteName: "OPV AI Realty Tech",

    title:
      "OPV AI Realty Tech | AI-Powered Business Technology & Growth Platform",

    description:
      "Build Smarter. Automate Better. Grow Faster. Explore AI, software, SaaS, CRM, ERP, cloud, automation and digital growth solutions for businesses across industries.",

    images: [
      {
        url: "/images/opv-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OPV AI Realty Tech Private Limited - AI-Powered Business Technology & Growth Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "OPV AI Realty Tech | Business Technology & Growth",

    description:
      "AI-powered business technology, software, SaaS, CRM, automation and digital growth solutions across industries.",

    images: ["/images/opv-og-image.jpg"],
  },

};

// ==========================================
// OPV AI REALTY TECH HOMEPAGE
// ==========================================

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* 01. HERO SECTION */}
      <HeroSection
      />

    

      {/* 03. ABOUT OPV AI REALTY TECH */}
      <AboutSection />

      {/* 04. CORE TECHNOLOGY SOLUTIONS */}
      <SolutionsSection />

      {/* 05. INDUSTRIES WE SERVE */}
      <IndustriesSection />

      {/* 06. PRODUCTS & DIGITAL PLATFORMS */}
      <ProductsSection />

      {/* 07. OUR TECHNOLOGY DELIVERY APPROACH */}
      <ApproachSection />

      {/* 08. BUSINESS OUTCOMES */}
      <BusinessOutcomes />

      {/* 09. CASE STUDIES & TECHNOLOGY IN ACTION */}
      <CaseStudiesSection />

      {/* 10. AI & TECHNOLOGY INSIGHTS */}
      <InsightsSection />

      {/* 11. BUSINESS ENQUIRY & CONTACT */}
      <ContactSection />

    </main>
  );
}
