
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  LockKeyhole,
  Database,
  Globe2,
  Mail,
  FileText,
  AlertCircle,
  Building2,
  CheckCircle2,
} from "lucide-react";

// ==========================================
// SEO METADATA
// ==========================================

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | OPV AI Realty Tech",
  },
  description:
    "Read the OPV AI Realty Tech Privacy Policy to understand how we collect, use, store and protect personal information and website data.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | OPV AI Realty Tech",
    description:
      "Learn how OPV AI Realty Tech handles personal information, website data, cookies and privacy.",
    url: "/privacy-policy",
    type: "website",
  },
};

// ==========================================
// POLICY INFORMATION
// ==========================================

const lastUpdated = "November 6, 2026";

const sections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    paragraphs: [
      "OPV AI Realty Tech respects your privacy and is committed to handling personal information responsibly. This Privacy Policy explains how information may be collected, used, stored and shared when you visit our website or contact us about our services.",
      "By using our website, you acknowledge that you have read this Privacy Policy. Where consent is required by applicable law, we will obtain it through the appropriate process.",
    ],
  },
  {
    id: "information",
    number: "02",
    title: "Information We Collect",
    paragraphs: [
      "Depending on how you interact with our website and services, we may collect the following categories of information:",
    ],
    bullets: [
      "Contact information: Name, email address, phone number and other details you voluntarily provide.",
      "Business information: Company name, project requirements, service enquiries and communication details.",
      "Technical information: IP address, browser type, device information, operating system and website interaction data.",
      "Usage information: Pages visited, referring websites, approximate access times and interaction patterns.",
      "Communication information: Messages, enquiries and other information you send to our team.",
    ],
  },
  {
    id: "collection",
    number: "03",
    title: "How We Collect Information",
    paragraphs: [
      "We may collect information when you submit a contact form, request a quotation, send us an email, communicate with our team or browse our website.",
      "Certain technical information may also be collected automatically through server logs, cookies and similar technologies, subject to applicable consent requirements.",
    ],
  },
  {
    id: "usage",
    number: "04",
    title: "How We Use Your Information",
    paragraphs: [
      "Information collected may be used for legitimate business purposes, including:",
    ],
    bullets: [
      "Responding to enquiries and business requests.",
      "Preparing quotations and project proposals.",
      "Providing and improving our technology services.",
      "Communicating about projects, updates and support.",
      "Maintaining website security and preventing misuse.",
      "Understanding website performance and user experience.",
      "Meeting applicable legal and regulatory obligations.",
    ],
  },
  {
    id: "cookies",
    number: "05",
    title: "Cookies and Tracking Technologies",
    paragraphs: [
      "Our website may use cookies and similar technologies to support website functionality, remember preferences, understand website traffic and improve user experience.",
      "Analytics or other tracking technologies may be used where implemented and permitted by applicable law.",
      "You can manage cookies through your browser settings. Disabling certain cookies may affect website functionality.",
    ],
  },
  {
    id: "sharing",
    number: "06",
    title: "Information Sharing and Disclosure",
    paragraphs: [
      "We do not sell personal information to third parties.",
      "Information may be shared with trusted service providers, hosting providers, analytics providers, technology partners or professional advisers where reasonably necessary to operate our business and deliver services.",
      "We may also disclose information where required by law, valid legal process or to protect our legal rights, website security and users.",
      "Third-party providers are responsible for their own privacy practices, subject to applicable contractual and legal obligations.",
    ],
  },
  {
    id: "security",
    number: "07",
    title: "Data Security",
    paragraphs: [
      "We take reasonable technical and organizational measures designed to protect information against unauthorized access, disclosure, alteration or destruction.",
      "However, no internet transmission or electronic storage method can be guaranteed to be completely secure. We cannot promise absolute security.",
    ],
  },
  {
    id: "retention",
    number: "08",
    title: "Data Retention",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including responding to enquiries, maintaining business records, fulfilling agreements and complying with legal obligations.",
      "Retention periods may vary depending on the nature of the information and the purpose for which it was collected.",
    ],
  },
  {
    id: "rights",
    number: "09",
    title: "Your Privacy Rights",
    paragraphs: [
      "Subject to applicable law, you may have rights concerning your personal information, including:",
    ],
    bullets: [
      "Requesting access to personal information.",
      "Requesting correction of inaccurate information.",
      "Requesting deletion where legally applicable.",
      "Withdrawing consent where processing is based on consent.",
      "Raising concerns about how your information is handled.",
    ],
    extra:
      "To exercise an applicable privacy right, please contact us using the details provided below. We may need to verify your identity before processing certain requests.",
  },
  {
    id: "third-party",
    number: "10",
    title: "Third-Party Websites and Services",
    paragraphs: [
      "Our website may contain links to external websites, applications or services. These third-party platforms operate independently and may have their own privacy policies.",
      "We encourage visitors to review the privacy policies of external services before sharing personal information with them.",
    ],
  },
  {
    id: "children",
    number: "11",
    title: "Children's Privacy",
    paragraphs: [
      "Our website and business services are not intentionally directed towards children. We do not knowingly collect personal information from children in violation of applicable law.",
      "If you believe a child has provided personal information to us without appropriate authorization, please contact us so that we can review the matter.",
    ],
  },
  {
    id: "transfers",
    number: "12",
    title: "International Data Transfers",
    paragraphs: [
      "Some of our technology or hosting providers may process information using infrastructure located outside your state or country.",
      "Where applicable, we take reasonable steps to ensure that such processing is subject to appropriate safeguards and legal requirements.",
    ],
  },
  {
    id: "changes",
    number: "13",
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our business operations, technologies, services or applicable legal requirements.",
      "The updated version will be published on this page with a revised date. We encourage visitors to review this page periodically.",
    ],
  },
  {
    id: "contact",
    number: "14",
    title: "Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy, wish to exercise an applicable privacy right or have concerns about the handling of your information, please contact our team.",
    ],
  },
];

// ==========================================
// STRUCTURED DATA
// ==========================================

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
      name: "Privacy Policy",
      item: "https://www.opvairealtytech.com/privacy-policy",
    },
  ],
};

// ==========================================
// PAGE COMPONENT
// ==========================================

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#263C50]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* HERO */}

      <section className="border-b border-[#E5E9E3] bg-[#F8F6F0]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 sm:px-10 sm:pb-20 sm:pt-24">

          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex items-center gap-2 text-xs text-[#647586]"
          >
            <Link
              href="/"
              className="transition hover:text-[#075B3B]"
            >
              Home
            </Link>

            <ChevronRight className="h-3.5 w-3.5" />

            <span className="font-semibold text-[#075B3B]">
              Privacy Policy
            </span>
          </nav>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#075B3B]">
            <ShieldCheck className="h-4 w-4" />
            Privacy &amp; Data Protection
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-[#263C50] sm:text-5xl lg:text-6xl">
            Your Privacy.
            <span className="block text-[#075B3B]">
              Our Responsibility.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-[#526577] sm:text-base">
            At OPV AI Realty Tech, we respect your privacy.
            Learn how we collect, use, manage and protect
            information when you interact with our website
            and services.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-[#647586]">
            <span className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4 text-[#075B3B]" />
              Last Updated: {lastUpdated}
            </span>

            <span className="inline-flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-[#075B3B]" />
              www.opvairealtytech.com
            </span>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">

          {/* TABLE OF CONTENTS */}

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-6">

              <div className="mb-5 flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#075B3B]" />

                <h2 className="text-sm font-extrabold text-[#263C50]">
                  On This Page
                </h2>
              </div>

              <nav
                aria-label="Privacy policy sections"
                className="max-h-[65vh] space-y-1 overflow-y-auto pr-2"
              >
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-lg px-3 py-2 text-xs leading-5 text-[#526577] transition hover:bg-[#F0F6F1] hover:text-[#075B3B]"
                  >
                    {section.number}. {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* MAIN POLICY */}

          <div className="min-w-0">

            {/* INTRODUCTION CARD */}

            <div className="mb-12 rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <LockKeyhole className="mt-1 h-6 w-6 shrink-0 text-[#075B3B]" />

                <div>
                  <h2 className="text-lg font-extrabold text-[#263C50]">
                    Your Information Matters
                  </h2>

                  <p className="mt-3 text-sm leading-8 text-[#526577]">
                    We aim to handle personal information
                    responsibly, use it for appropriate
                    business purposes and take reasonable
                    measures to protect it. This policy
                    describes our general privacy practices.
                  </p>
                </div>
              </div>
            </div>

            {/* ALL POLICY SECTIONS */}

            <div className="space-y-12">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 border-b border-[#E5E9E3] pb-10 last:border-0"
                >
                  <div className="mb-5 flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#075B3B]/15 bg-[#F0F6F1] text-xs font-extrabold text-[#075B3B]">
                      {section.number}
                    </span>

                    <h2 className="pt-1 text-xl font-extrabold leading-8 text-[#263C50] sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-4 pl-0 sm:pl-14">
                    {section.paragraphs.map(
                      (paragraph, index) => (
                        <p
                          key={index}
                          className="text-sm leading-8 text-[#526577]"
                        >
                          {paragraph}
                        </p>
                      )
                    )}

                    {section.bullets && (
                      <ul className="space-y-3 pt-2">
                        {section.bullets.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-7 text-[#526577]"
                          >
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#075B3B]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.extra && (
                      <p className="mt-5 text-sm leading-8 text-[#526577]">
                        {section.extra}
                      </p>
                    )}

                    {section.id === "contact" && (
                      <div className="mt-6 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-5">

                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 shrink-0 text-[#075B3B]" />

                          <a
                            href="mailto:info@opvairealtytech.com"
                            className="break-all text-sm font-semibold text-[#263C50] hover:text-[#075B3B]"
                          >
                            info@opvairealtytech.com
                          </a>
                        </div>

                        <div className="mt-4 flex items-center gap-3">
                          <Building2 className="h-5 w-5 shrink-0 text-[#075B3B]" />

                          <span className="text-sm text-[#526577]">
                            Hyderabad, Telangana, India
                          </span>
                        </div>

                        <Link
                          href="/contact"
                          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#075B3B] transition hover:underline"
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

            {/* POLICY NOTICE */}

            <div className="mt-12 rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-1 h-5 w-5 shrink-0 text-[#C6A052]" />

                <p className="text-xs leading-7 text-[#526577]">
                  This Privacy Policy describes general
                  website privacy practices. Actual data
                  collection, third-party integrations,
                  retention and processing must be
                  consistent with the services and
                  technologies currently used by the
                  company and applicable law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY PRINCIPLES */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0]">
        <div className="mx-auto grid max-w-7xl gap-7 px-6 py-12 sm:grid-cols-3 sm:px-10">
          {[
            {
              icon: ShieldCheck,
              title: "Privacy Awareness",
              description:
                "Responsible handling of personal information.",
            },
            {
              icon: Database,
              title: "Data Management",
              description:
                "Information used for defined business purposes.",
            },
            {
              icon: LockKeyhole,
              title: "Security Practices",
              description:
                "Reasonable measures to protect information.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#075B3B]">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-extrabold text-[#263C50]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#526577]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="bg-white px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] px-7 py-14 text-center sm:px-14">

          <h2 className="text-3xl font-extrabold text-[#263C50] sm:text-4xl">
            Questions About Your
            <span className="block text-[#075B3B]">
              Privacy?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#526577]">
            If you have questions or requests relating
            to your personal information, our team
            is available to assist.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
