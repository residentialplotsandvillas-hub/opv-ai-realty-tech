
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  FileText,
  Globe2,
  LockKeyhole,
  Mail,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";

// ==========================================
// CONFIGURATION
// ==========================================

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_URL = `${SITE_URL}/terms-and-conditions`;
const COMPANY = "OPV AI Realty Tech Private Limited";
const LAST_UPDATED = "November 6, 2026";

export const metadata: Metadata = {
  title: "Terms and Conditions | OPV AI Realty Tech",
  description:
    "Read the Terms and Conditions of OPV AI Realty Tech, covering website usage, intellectual property, project agreements, payments, privacy, liability and applicable laws.",
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms and Conditions | OPV AI Realty Tech",
    description:
      "Understand the terms governing access to and use of the OPV AI Realty Tech website and services.",
    url: PAGE_URL,
    siteName: "OPV AI Realty Tech",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Terms and Conditions | OPV AI Realty Tech",
    description:
      "Website usage, services, project agreements, privacy and legal terms.",
  },
};

// ==========================================
// LEGAL CONTENT
// ==========================================

const sections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using the OPV AI Realty Tech website, you agree to comply with these Terms and Conditions. If you do not agree with these terms, please discontinue using the website.",
      "These terms apply to visitors, prospective customers, business partners and other users of the website.",
    ],
  },
  {
    id: "services",
    number: "02",
    title: "Our Services",
    paragraphs: [
      "OPV AI Realty Tech provides technology-related services that may include artificial intelligence solutions, custom software development, website development, mobile applications, SaaS platforms, CRM and ERP systems, cloud solutions, digital marketing and business automation.",
      "The scope, deliverables, timelines, pricing and support arrangements for individual projects are determined by the applicable quotation, proposal, statement of work or service agreement.",
      "Information published on this website is for general informational purposes and does not constitute a binding offer to provide a particular service.",
    ],
  },
  {
    id: "website-use",
    number: "03",
    title: "Permitted Website Use",
    paragraphs: [
      "You agree to use this website only for lawful purposes and in a manner that does not interfere with its operation, security or availability.",
      "You must not attempt unauthorized access to the website, servers, databases or connected systems, introduce malicious software, interfere with other users or use the website for fraudulent activities.",
      "We may restrict access to website features where reasonably necessary to protect the website, its users or our systems.",
    ],
  },
  {
    id: "intellectual-property",
    number: "04",
    title: "Intellectual Property Rights",
    paragraphs: [
      "Unless otherwise stated, website content, including text, graphics, branding, designs, software elements and other materials created or owned by OPV AI Realty Tech, is protected by applicable intellectual property laws.",
      "You may view and use website content for personal or internal business information purposes. Reproduction, redistribution or commercial use of protected materials requires appropriate authorization.",
      "Ownership of software, designs, source code and other deliverables produced for customers is governed by the applicable written project agreement.",
    ],
  },
  {
    id: "project-terms",
    number: "05",
    title: "Project Agreements and Deliverables",
    paragraphs: [
      "Project requirements, deliverables, milestones, revisions, acceptance criteria, deployment responsibilities and ongoing maintenance will be specified in the relevant project documentation.",
      "Changes to an approved scope may affect pricing, timelines or other project conditions and may require written agreement between the parties.",
      "Customers are responsible for supplying accurate project requirements, necessary content, approvals and access credentials where applicable.",
    ],
  },
  {
    id: "payments",
    number: "06",
    title: "Payments and Billing",
    paragraphs: [
      "Fees, payment schedules, applicable taxes and billing arrangements for professional services will be stated in the relevant quotation, invoice or service agreement.",
      "Any advance payment, milestone payment, recurring subscription or third-party service charge will be governed by the terms agreed for that project or service.",
      "Refunds, cancellations and payment disputes are handled according to the applicable written agreement and mandatory legal requirements.",
    ],
  },
  {
    id: "third-party",
    number: "07",
    title: "Third-Party Platforms and Links",
    paragraphs: [
      "Our website may include links to third-party websites, software platforms, hosting services, payment providers or other external resources.",
      "Third-party services are operated under their own terms and privacy policies. We are not responsible for their independent content, policies or availability, except where responsibility is imposed by applicable law or agreement.",
    ],
  },
  {
    id: "privacy",
    number: "08",
    title: "Privacy and Data Protection",
    paragraphs: [
      "We may collect and process information submitted through contact forms, enquiries or other website interactions to respond to requests and operate our services.",
      "Our handling of personal information is described in our Privacy Policy. Users should review that policy for details about data collection, processing, retention and applicable rights.",
    ],
  },
  {
    id: "security",
    number: "09",
    title: "Security and Availability",
    paragraphs: [
      "We take reasonable measures to maintain website functionality and security. However, uninterrupted access, complete freedom from errors and absolute security cannot be guaranteed.",
      "Website features may be temporarily unavailable due to maintenance, updates, infrastructure issues or circumstances beyond our reasonable control.",
    ],
  },
  {
    id: "disclaimer",
    number: "10",
    title: "Website Information Disclaimer",
    paragraphs: [
      "The information available on this website is provided for general business and informational purposes. We aim to keep it accurate and current but do not guarantee that every description, specification or other item is complete or error-free.",
      "Descriptions of technologies, capabilities and potential business benefits do not constitute guarantees of specific commercial, technical or financial results.",
    ],
  },
  {
    id: "liability",
    number: "11",
    title: "Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, OPV AI Realty Tech will not be liable for indirect, incidental, special or consequential losses arising solely from use of this informational website.",
      "Nothing in these Terms and Conditions excludes or limits liability that cannot lawfully be excluded or limited. Liability relating to contracted services will also be subject to the applicable service agreement.",
    ],
  },
  {
    id: "termination",
    number: "12",
    title: "Restriction or Termination of Access",
    paragraphs: [
      "We may suspend or restrict website access where reasonably necessary in response to misuse, security threats, unlawful activity or violations of these terms.",
      "Termination of a separately contracted service is governed by the applicable service agreement.",
    ],
  },
  {
    id: "changes",
    number: "13",
    title: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms and Conditions to reflect changes in website operations, services, business practices or legal requirements.",
      "The revised version will be published on this page with an updated effective date. Continued use of the website after an update constitutes acceptance only to the extent permitted by applicable law.",
    ],
  },
  {
    id: "governing-law",
    number: "14",
    title: "Governing Law and Jurisdiction",
    paragraphs: [
      "These Terms and Conditions are governed by the applicable laws of India.",
      "Subject to mandatory legal requirements, disputes relating to the use of this website will be subject to the jurisdiction of competent courts in Hyderabad, Telangana, India.",
    ],
  },
  {
    id: "contact",
    number: "15",
    title: "Contact Information",
    paragraphs: [
      "If you have questions about these Terms and Conditions, please contact OPV AI Realty Tech using the contact details published on our website.",
    ],
  },
];

// ==========================================
// STRUCTURED DATA
// ==========================================

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY,
      url: SITE_URL,
      telephone: "+91-9963513939",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      name: "Terms and Conditions",
      url: PAGE_URL,
      description:
        "Terms and Conditions governing use of the OPV AI Realty Tech website.",
      inLanguage: "en-IN",
      dateModified: "2026-11-06",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Terms and Conditions",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// ==========================================
// PAGE COMPONENT
// ==========================================

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#263C50]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* HERO */}
      <section className="border-b border-[#E5E9E3] bg-[#F8F6F0]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-10 lg:pb-20 lg:pt-24">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-[#647586]">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-[#075B3B]"
                >
                  Home
                </Link>
              </li>

              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>

              <li
                aria-current="page"
                className="font-semibold text-[#075B3B]"
              >
                Terms and Conditions
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#075B3B]">
                <Scale className="h-4 w-4" />
                Legal Information
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Terms &
                <span className="block text-[#075B3B]">
                  Conditions
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#526577]">
                Please read these Terms and Conditions carefully
                before accessing our website or engaging with
                OPV AI Realty Tech services.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[#526577]">
                <span className="inline-flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#075B3B]" />
                  Last Updated: {LAST_UPDATED}
                </span>

                <span className="inline-flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-[#075B3B]" />
                  www.opvairealtytech.com
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-7 shadow-[0_20px_60px_rgba(38,60,80,0.06)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F6F1] text-[#075B3B]">
                <ShieldCheck className="h-8 w-8" />
              </div>

              <h2 className="mt-6 text-xl font-extrabold">
                Website Legal Framework
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#526577]">
                Information about website access, services,
                intellectual property, project agreements
                and applicable legal responsibilities.
              </p>

              <div className="mt-6 border-t border-[#E5E9E3] pt-5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                  Document Overview
                </p>

                <p className="mt-2 text-sm font-semibold">
                  15 Legal Sections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN LEGAL CONTENT */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">

            {/* TABLE OF CONTENTS */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-6">
                <div className="mb-5 flex items-center gap-3">
                  <FileText className="h-5 w-5 text-[#075B3B]" />

                  <h2 className="text-sm font-extrabold">
                    On This Page
                  </h2>
                </div>

                <nav
                  aria-label="Terms sections"
                  className="max-h-[65vh] space-y-1 overflow-y-auto pr-2"
                >
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block rounded-lg px-3 py-2 text-xs leading-5 text-[#526577] transition hover:bg-white hover:text-[#075B3B]"
                    >
                      <span className="mr-2 font-bold text-[#98732F]">
                        {section.number}
                      </span>
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* LEGAL DOCUMENT */}
            <div className="min-w-0">

              {/* INTRODUCTION */}
              <div className="mb-12 rounded-2xl border border-[#075B3B]/15 bg-[#F0F6F1] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-[#075B3B]" />

                  <div>
                    <h2 className="text-xl font-extrabold">
                      Welcome to OPV AI Realty Tech
                    </h2>

                    <p className="mt-4 text-sm leading-8 text-[#526577]">
                      These Terms and Conditions explain the
                      rules governing access to our website,
                      general use of website content and the
                      relationship between website visitors
                      and OPV AI Realty Tech.
                    </p>
                  </div>
                </div>
              </div>

              {/* MOBILE SECTION NAVIGATION */}
              <details className="mb-10 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-5 lg:hidden">
                <summary className="cursor-pointer font-bold text-[#075B3B]">
                  Browse Legal Sections
                </summary>

                <nav
                  aria-label="Mobile terms navigation"
                  className="mt-5 grid gap-3"
                >
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-sm text-[#526577] hover:text-[#075B3B]"
                    >
                      {section.number}. {section.title}
                    </a>
                  ))}
                </nav>
              </details>

              {/* SECTIONS */}
              <div className="space-y-11">
                {sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 border-b border-[#E5E9E3] pb-10 last:border-0"
                  >
                    <div className="mb-6 flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0F6F1] text-xs font-extrabold text-[#075B3B]">
                        {section.number}
                      </span>

                      <h2 className="pt-1 text-xl font-extrabold leading-8 sm:text-2xl">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-4 sm:pl-[60px]">
                      {section.paragraphs.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-sm leading-8 text-[#526577] sm:text-[15px]"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.id === "privacy" && (
                        <Link
                          href="/privacy-policy"
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#075B3B] hover:underline"
                        >
                          Read Our Privacy Policy
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      )}

                      {section.id === "contact" && (
                        <div className="mt-6 rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-6">
                          <h3 className="mb-5 text-base font-extrabold">
                            Contact OPV AI Realty Tech
                          </h3>

                          <div className="space-y-5">
                            <div className="flex items-center gap-3">
                              <Mail className="h-5 w-5 shrink-0 text-[#075B3B]" />

                              <a
                                href="mailto:info@opvairealtytech.com"
                                className="break-all text-sm font-semibold hover:text-[#075B3B]"
                              >
                                info@opvairealtytech.com
                              </a>
                            </div>

                            <div className="flex items-center gap-3">
                              <Phone className="h-5 w-5 shrink-0 text-[#075B3B]" />

                              <a
                                href="tel:+919963513939"
                                className="text-sm font-semibold hover:text-[#075B3B]"
                              >
                                +91 99635 13939
                              </a>
                            </div>

                            <div className="flex items-center gap-3">
                              <Building2 className="h-5 w-5 shrink-0 text-[#075B3B]" />

                              <span className="text-sm text-[#526577]">
                                Hyderabad, Telangana, India
                              </span>
                            </div>
                          </div>

                          <Link
                            href="/contact"
                            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#075B3B] hover:underline"
                          >
                            Contact Our Team
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </section>
                ))}
              </div>

              {/* IMPORTANT NOTICE */}
              <div className="mt-12 rounded-2xl border border-[#C6A052]/30 bg-[#FCF9F0] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <Scale className="mt-1 h-6 w-6 shrink-0 text-[#98732F]" />

                  <div>
                    <h2 className="text-base font-extrabold">
                      Important Legal Notice
                    </h2>

                    <p className="mt-3 text-sm leading-8 text-[#526577]">
                      These website terms are separate from any
                      specific software development, subscription,
                      maintenance or consulting agreement entered
                      into with OPV AI Realty Tech. Where a
                      separately executed agreement applies,
                      its terms govern that engagement.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* LEGAL PRINCIPLES */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-3 sm:px-10">
          {[
            {
              icon: ShieldCheck,
              title: "Responsible Practices",
              description: "Professional business standards",
            },
            {
              icon: LockKeyhole,
              title: "Data Awareness",
              description: "Privacy and information protection",
            },
            {
              icon: CheckCircle2,
              title: "Clear Agreements",
              description: "Defined project terms and conditions",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#075B3B]/10 bg-white text-[#075B3B]">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-base font-extrabold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#526577]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* RELATED LEGAL LINKS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className="text-2xl font-extrabold">
            Related Information
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-8 text-[#526577]">
            Learn more about our privacy practices or contact
            our team regarding our services and agreements.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/privacy-policy"
              className="flex items-center justify-between gap-4 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-6 transition hover:border-[#075B3B]/30"
            >
              <span className="font-bold">
                Privacy Policy
              </span>

              <ArrowUpRight className="h-5 w-5 text-[#075B3B]" />
            </Link>

            <Link
              href="/contact"
              className="flex items-center justify-between gap-4 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-6 transition hover:border-[#075B3B]/30"
            >
              <span className="font-bold">
                Contact Us
              </span>

              <ArrowUpRight className="h-5 w-5 text-[#075B3B]" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#075B3B] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Scale className="h-7 w-7 text-[#E9CF91]" />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold sm:text-4xl">
            Have Questions About Our Terms?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Contact our team for clarification about website
            usage, business enquiries or service agreements.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Contact Our Team
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="tel:+919963513939"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              +91 99635 13939
            </a>
          </div>

          <p className="mt-10 text-xs tracking-widest text-white/65">
            OPV AI REALTY TECH PRIVATE LIMITED
          </p>

          <p className="mt-2 text-sm text-white/80">
            Build Smarter • Automate Better • Grow Faster
          </p>
        </div>
      </section>
    </main>
  );
}
