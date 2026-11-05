
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.opvairealtytech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "OPV AI Realty Tech | AI, Software & Technology Company in India",
    template: "%s | OPV AI Realty Tech",
  },

  description:
    "OPV AI Realty Tech Private Limited provides AI development, software development, website and mobile app development, SaaS, CRM, ERP, business automation and digital growth solutions across India.",

  applicationName: "OPV AI Realty Tech",

  keywords: [
    "AI development company in India",
    "software development company in India",
    "website development company in India",
    "mobile app development company in India",
    "SaaS development company",
    "CRM software development",
    "ERP development company",
    "business automation company",
    "AI agent development",
    "digital marketing company in India",
    "SEO services in India",
    "real estate technology solutions",
  ],

  authors: [
    { name: "OPV AI Realty Tech Private Limited" },
  ],

  creator: "OPV AI Realty Tech Private Limited",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "OPV AI Realty Tech",
    title:
      "OPV AI Realty Tech | AI-Powered Business Technology & Growth Platform",
    description:
      "Build Smarter. Automate Better. Grow Faster. Explore AI, software, SaaS, CRM, ERP and intelligent business technology solutions.",
    images: [
      {
        url: "/images/opv-logo.png",
        width: 512,
        height: 512,
        alt: "OPV AI Realty Tech Private Limited",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OPV AI Realty Tech",
    description:
      "AI-powered business technology, software, SaaS and automation solutions across India.",
    images: ["/images/opv-logo.png"],
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

  category: "technology",
};

// ORGANIZATION STRUCTURED DATA
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "OPV AI Realty Tech Private Limited",
  url: siteUrl,
  logo: `${siteUrl}/images/opv-logo.png`,
  description:
    "AI-powered business technology and growth platform providing AI, software, SaaS, CRM, ERP, automation and digital growth solutions.",
  slogan: "Build Smarter. Automate Better. Grow Faster.",
  founder: {
    "@type": "Person",
    name: "Dr. Arjun Kommalapati",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "AI Agent Development",
    "Software Development",
    "Website Development",
    "Mobile Application Development",
    "SaaS Development",
    "CRM Development",
    "ERP Development",
    "Business Automation",
    "Digital Marketing",
    "Search Engine Optimization",
    "Real Estate Technology",
  ],
};

export default function RootLayout({
  children,
}: Readonly<LayoutProps<"/">>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </head>

      <body className="flex min-h-full flex-col bg-white font-sans text-[#111111]">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>
  <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
