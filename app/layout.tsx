
import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

import { GoogleTagManager } from "@next/third-parties/google";

// ==========================================
// CORPORATE FONT SYSTEM
// ==========================================

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// ==========================================
// COMPANY CONFIGURATION
// ==========================================

const SITE_URL = "https://www.opvairealtytech.com";

const COMPANY_NAME =
  "OPV AI Realty Tech Private Limited";

const SITE_NAME = "OPV AI Realty Tech";

const SITE_DESCRIPTION =
  "OPV AI Realty Tech Private Limited is a Hyderabad-based business technology company providing AI development, AI agents, custom software, SaaS, CRM, ERP, website and mobile app development, intelligent automation and digital growth solutions across India.";

const OG_IMAGE = "/images/opv-og-image.jpg";

// ==========================================
// GLOBAL SEO METADATA
// ==========================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "OPV AI Realty Tech | AI & Software Development Company in Hyderabad",

    template: "%s | OPV AI Realty Tech",
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  keywords: [
    "AI development company in Hyderabad",
    "AI automation services Hyderabad",
    "AI agent development Hyderabad",
    "AI chatbot development company Hyderabad",
    "generative AI development Hyderabad",
    "software development company Hyderabad",
    "custom software development India",
    "website development company Hyderabad",
    "mobile app development company Hyderabad",
    "SaaS development company India",
    "CRM software development Hyderabad",
    "ERP software development India",
    "business process automation Hyderabad",
    "workflow automation services India",
    "AI integration services India",
    "digital marketing agency Hyderabad",
    "SEO and AEO services India",
    "lead generation services India",
    "real estate technology solutions",
  ],

  authors: [
    {
      name: COMPANY_NAME,
      url: SITE_URL,
    },
  ],

  creator: COMPANY_NAME,

  publisher: COMPANY_NAME,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: SITE_URL,

    siteName: SITE_NAME,

    title:
      "OPV AI Realty Tech | AI-Powered Business Technology & Growth Platform",

    description:
      "Build Smarter. Automate Better. Grow Faster. Explore AI development, custom software, SaaS, CRM, ERP, intelligent automation and digital growth solutions.",

    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt:
          "OPV AI Realty Tech Private Limited - AI and Software Development Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "OPV AI Realty Tech | AI & Business Technology Solutions",

    description:
      "AI development, intelligent automation, custom software, SaaS, CRM, ERP and digital business solutions across India.",

    images: [OG_IMAGE],
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

  category: "Business Technology",

  icons: {
    icon: "/favicon.ico",
  },
};

// ==========================================
// VIEWPORT & THEME CONFIGURATION
// ==========================================

export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,

  themeColor: "#FFFFFF",

  colorScheme: "light",
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

  description: SITE_DESCRIPTION,

  slogan:
    "Build Smarter. Automate Better. Grow Faster.",

  founder: {
    "@type": "Person",
    name: "Dr. Arjun Kommalapati",
  },

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

  knowsAbout: [
    "Artificial Intelligence",
    "AI Agent Development",
    "AI Chatbot Development",
    "Generative AI Integration",
    "Custom Software Development",
    "Website Development",
    "Mobile Application Development",
    "SaaS Development",
    "CRM Development",
    "ERP Development",
    "Business Process Automation",
    "Workflow Automation",
    "Cloud Solutions",
    "Digital Marketing",
    "Search Engine Optimization",
    "Answer Engine Optimization",
    "Real Estate Technology",
  ],
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
  return JSON.stringify(data).replace(
    /</g,
    "\\u003c"
  );
}

// ==========================================
// ROOT LAYOUT
// ==========================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${manrope.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* ORGANIZATION SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(
              organizationSchema
            ),
          }}
        />

        {/* WEBSITE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(
              websiteSchema
            ),
          }}
        />
      </head>

      <body className="flex min-h-screen flex-col bg-white font-sans text-[#263C50]">

        {/* GOOGLE TAG MANAGER */}
        <GoogleTagManager gtmId="GTM-TG8KDJ5F" />

        {/* GLOBAL NAVIGATION */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="flex-1">
          {children}
        </div>

        {/* FLOATING CONTACT ACTIONS */}
        <FloatingContact />

        {/* GLOBAL FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
