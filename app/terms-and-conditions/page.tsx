
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  FileText,
  ShieldCheck,
  Scale,
  Globe2,
  Mail,
  CheckCircle2,
  AlertCircle,
  LockKeyhole,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | OPV AI Realty Tech",
  description:
    "Read the Terms and Conditions of OPV AI Realty Tech, including website usage, intellectual property, services, payment terms, liability, privacy and legal policies.",
  alternates: {
    canonical:
      "https://www.opvairealtytech.com/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms and Conditions | OPV AI Realty Tech",
    description:
      "Understand the terms governing access to and use of the OPV AI Realty Tech website and services.",
    url: "https://www.opvairealtytech.com/terms-and-conditions",
    type: "website",
  },
};

const lastUpdated = "November 6, 2026";

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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.opvairealtytech.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Terms and Conditions",
      item:
        "https://www.opvairealtytech.com/terms-and-conditions",
    },
  ],
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/[0.07]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.13),transparent_55%)]" />

        <div className="relative mx-auto max-w-[1200px] px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28 lg:px-10">
          {/* BREADCRUMB */}
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-xs text-slate-400"
          >
            <Link
              href="/"
              className="transition hover:text-emerald-300"
            >
              Home
            </Link>

            <ChevronRight className="h-3.5 w-3.5" />

            <span className="text-emerald-300">
              Terms and Conditions
            </span>
          </nav>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
            <Scale className="h-4 w-4" />
            Legal Information
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Terms &
            <span className="block text-emerald-300">
              Conditions
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
            Please read these Terms and Conditions carefully
            before accessing our website or engaging with
            OPV AI Realty Tech services.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4 text-emerald-300" />
              Last Updated: {lastUpdated}
            </span>

            <span className="inline-flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-emerald-300" />
              www.opvairealtytech.com
            </span>
          </div>
        </div>
      </section>

      {/* LEGAL CONTENT */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">

          {/* DESKTOP TABLE OF CONTENTS */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-white/[0.08] bg-[#0a1a2b] p-6">
              <div className="mb-5 flex items-center gap-2">
                <FileText className="h-5 w-5 text-emerald-300" />
                <h2 className="text-sm font-bold">
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
                    className="block rounded-lg px-3 py-2 text-xs leading-5 text-slate-400 transition hover:bg-emerald-300/[0.07] hover:text-emerald-300"
                  >
                    {section.number}. {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="min-w-0">

            {/* INTRO CARD */}
            <div className="mb-12 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.045] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-emerald-300" />

                <div>
                  <h2 className="text-lg font-bold">
                    Welcome to OPV AI Realty Tech
                  </h2>

                  <p className="mt-3 text-sm leading-8 text-slate-400">
                    These Terms and Conditions explain the
                    rules governing access to our website,
                    general use of website content and the
                    relationship between website visitors and
                    OPV AI Realty Tech.
                  </p>
                </div>
              </div>
            </div>

            {/* TERMS SECTIONS */}
            <div className="space-y-12">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 border-b border-white/[0.07] pb-10 last:border-0"
                >
                  <div className="mb-5 flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/[0.07] text-xs font-bold text-emerald-300">
                      {section.number}
                    </span>

                    <h2 className="pt-1 text-xl font-bold leading-8 sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-4 pl-0 sm:pl-14">
                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-sm leading-8 text-slate-400"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.id === "privacy" && (
                      <Link
                        href="/privacy-policy"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                      >
                        Read Our Privacy Policy
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    )}

                    {section.id === "contact" && (
                      <div className="mt-6 rounded-xl border border-white/10 bg-[#0a1a2b] p-5">
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-emerald-300" />
                          <a
                            href="mailto:info@opvairealtytech.com"
                            className="break-all text-sm font-semibold text-white hover:text-emerald-300"
                          >
                            info@opvairealtytech.com
                          </a>
                        </div>

                        <div className="mt-4 flex items-center gap-3">
                          <Building2 className="h-5 w-5 text-emerald-300" />
                          <span className="text-sm text-slate-400">
                            Hyderabad, Telangana, India
                          </span>
                        </div>

                        <Link
                          href="/contact"
                          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-300 hover:text-emerald-200"
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

            {/* NOTICE */}
            <div className="mt-12 rounded-2xl border border-amber-300/15 bg-amber-300/[0.04] p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-1 h-5 w-5 shrink-0 text-amber-300" />

                <p className="text-xs leading-7 text-slate-400">
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
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-white/[0.07] bg-[#081725]">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-5 py-10 sm:grid-cols-3 sm:px-8 lg:px-10">
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
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.09),transparent_65%)]" />

        <div className="relative mx-auto max-w-[850px] px-5 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Have Questions About
            <span className="block text-emerald-300">
              Our Terms?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-slate-400">
            Contact our team for clarification about website
            usage, business enquiries or service agreements.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-8 py-4 text-sm font-bold text-[#06111f] transition hover:-translate-y-1 hover:bg-emerald-200"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
