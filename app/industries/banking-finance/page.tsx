
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  Database,
  FileCheck2,
  Landmark,
  LockKeyhole,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Users,
  Workflow,
} from "lucide-react";

// ==========================================
// SEO CONFIGURATION
// ==========================================

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_PATH = "/industries/banking-finance";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Banking & FinTech Software Solutions in Hyderabad | OPV AI";

const PAGE_DESCRIPTION =
  "Explore banking and financial services software in Hyderabad. Custom FinTech platforms, CRM, workflow automation, AI assistance and analytics by OPV AI Realty Tech.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Banking software development Hyderabad",
    "FinTech software development company",
    "Financial services technology solutions",
    "FinTech application development Hyderabad",
    "Financial CRM software",
    "Banking CRM solutions",
    "Financial workflow automation",
    "Financial services digital transformation",
    "Financial customer portal development",
    "AI assistants for financial services",
    "Financial analytics dashboards",
    "Financial business software",
    "Custom FinTech platforms",
    "Secure financial applications",
    "OPV AI Realty Tech",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "OPV AI Realty Tech",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

// ==========================================
// FINANCIAL TECHNOLOGY SERVICES
// ==========================================

const services = [
  {
    icon: Smartphone,
    title: "Financial Web & Mobile Platforms",
    description:
      "Custom digital experiences for financial service providers, customer portals and business applications.",
  },
  {
    icon: Database,
    title: "Financial CRM Solutions",
    description:
      "Customer relationship management, enquiry tracking, sales pipelines and financial service workflows.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Automate suitable administrative tasks, internal approvals, document workflows and customer communication.",
  },
  {
    icon: Bot,
    title: "AI Customer Assistance",
    description:
      "AI-powered assistants for general customer enquiries, service navigation and operational support with appropriate safeguards.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Dashboards",
    description:
      "Business intelligence dashboards, operational reporting and analytics for management decision-making.",
  },
  {
    icon: LockKeyhole,
    title: "Application Security",
    description:
      "Security-conscious software architecture, access controls and application protection aligned with project requirements.",
  },
];

// ==========================================
// INDUSTRY APPLICATIONS
// ==========================================

const applications = [
  {
    icon: Landmark,
    title: "Banking Operations",
    description:
      "Internal workflows, customer service tools and business reporting applications.",
  },
  {
    icon: Users,
    title: "Financial Services Firms",
    description:
      "Client management, enquiry handling, service portals and operational systems.",
  },
  {
    icon: FileCheck2,
    title: "Lending & Loan Workflows",
    description:
      "Application intake, document tracking, review workflows and customer communication tools.",
  },
  {
    icon: Smartphone,
    title: "FinTech Platforms",
    description:
      "Custom web and mobile experiences, integration workflows and digital product interfaces.",
  },
];

// ==========================================
// BUSINESS BENEFITS
// ==========================================

const benefits = [
  "Improve customer service workflows",
  "Streamline internal business operations",
  "Centralize customer and operational information",
  "Support secure digital experiences",
  "Improve reporting and management visibility",
];

// ==========================================
// IMPLEMENTATION PROCESS
// ==========================================

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the financial service model, users, workflows and business requirements.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Review integrations, data handling, security and applicable compliance requirements.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Define application architecture, user journeys and workflow specifications.",
  },
  {
    number: "04",
    title: "Develop & Test",
    description:
      "Implement agreed features and evaluate functionality, access controls and quality.",
  },
  {
    number: "05",
    title: "Deploy & Improve",
    description:
      "Prepare the solution for deployment and review opportunities for ongoing improvements.",
  },
];

// ==========================================
// FREQUENTLY ASKED QUESTIONS
// ==========================================

const faqs = [
  {
    question: "What is financial technology or FinTech?",
    answer:
      "FinTech refers to technology used to deliver, manage or support financial products, services and operations. Examples include financial applications, customer portals, digital workflows, analytics and payment-related systems.",
  },
  {
    question:
      "Does OPV AI Realty Tech provide FinTech software development in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad and offers custom software, CRM, digital platforms, workflow automation, AI assistance and analytics solutions for financial services businesses.",
  },
  {
    question:
      "Can you develop CRM software for financial services companies?",
    answer:
      "Financial CRM solutions can be planned around customer records, enquiries, sales pipelines, communication workflows and reporting requirements. The final features depend on the organization's business processes and data requirements.",
  },
  {
    question:
      "Can AI assistants be used in banking and financial services?",
    answer:
      "AI assistants may support general enquiries, service navigation and internal operational tasks. Financial advice, sensitive decisions and regulated activities require appropriate human oversight, controls and regulatory assessment.",
  },
  {
    question:
      "Can financial software integrate with existing business systems?",
    answer:
      "Many financial applications can integrate with existing systems through supported APIs or approved integration methods. Feasibility depends on the systems involved, permissions, security requirements and applicable regulations.",
  },
  {
    question:
      "How do you approach data security in financial software?",
    answer:
      "Security planning may include authentication, role-based access, encryption, audit logging, secure integrations and testing. The controls required depend on the application, data sensitivity and applicable obligations.",
  },
  {
    question:
      "Are custom FinTech applications automatically compliant with RBI regulations?",
    answer:
      "No. Regulatory obligations depend on the business model, entity type, data processed and services offered. Compliance must be assessed against applicable requirements by appropriately qualified legal, compliance and security professionals.",
  },
  {
    question:
      "How much does financial software development cost?",
    answer:
      "Costs depend on application complexity, user roles, integrations, data security requirements, testing, compliance-related scope and maintenance. A detailed requirements assessment is necessary for an accurate quotation.",
  },
];

// ==========================================
// RELATED SOLUTIONS
// ==========================================

const relatedSolutions = [
  {
    title: "CRM, ERP & Business Systems",
    href: "/solutions/crm-erp-business-systems",
  },
  {
    title: "Data & Business Intelligence",
    href: "/solutions/data-business-intelligence",
  },
  {
    title: "Cybersecurity & IT Solutions",
    href: "/solutions/cybersecurity-it-solutions",
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
      name: "OPV AI Realty Tech Private Limited",
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
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      inLanguage: "en-IN",
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      about: {
        "@id": `${PAGE_URL}#service`,
      },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Banking & Financial Services Technology Solutions",
      serviceType:
        "FinTech Software Development, Financial CRM and Business Automation",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: [
        { "@type": "City", name: "Hyderabad" },
        { "@type": "State", name: "Telangana" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Financial Technology Solutions",
        itemListElement: services.map((service) => ({
          "@type": "OfferCatalog",
          name: service.title,
          description: service.description,
        })),
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
          name: "Industries",
          item: `${SITE_URL}/industries`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Banking & Financial Services",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// ==========================================
// PAGE COMPONENT
// ==========================================

export default function BankingFinancePage() {
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
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
          <nav aria-label="Breadcrumb" className="mb-9">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-[#647586]">
              <li>
                <Link href="/" className="hover:text-[#075B3B]">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3 w-3" />
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-[#075B3B]"
                >
                  Industries
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3 w-3" />
              </li>
              <li
                aria-current="page"
                className="font-semibold text-[#075B3B]"
              >
                Banking & Financial Services
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <Landmark className="h-4 w-4" />
                Banking & Financial Services
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                Banking & FinTech
                <span className="block text-[#075B3B]">
                  Software Solutions
                </span>
                <span className="mt-3 block text-2xl font-bold text-[#526577] sm:text-3xl">
                  In Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#526577] sm:text-lg">
                Smarter Financial Systems. Connected Business Growth.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                OPV AI Realty Tech develops custom software,
                CRM systems, digital platforms, intelligent
                automation and business analytics solutions
                for banking, FinTech and financial services
                organizations.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your FinTech Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#finance-solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:bg-[#F0F6F1]"
                >
                  Explore Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-8 flex items-center gap-2 text-sm text-[#647586]">
                <MapPin className="h-4 w-4 text-[#075B3B]" />
                Hyderabad, Telangana · Serving businesses across India
              </p>
            </div>

            {/* FINANCIAL TECHNOLOGY ILLUSTRATION */}
            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-7 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">
              <div className="flex items-center justify-between border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Financial Technology
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold">
                    Connected Financial Operations
                  </h2>
                </div>

                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Landmark className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Smartphone,
                    title: "Digital Platforms",
                    description: "Web and mobile experiences",
                  },
                  {
                    icon: Database,
                    title: "Financial CRM",
                    description: "Customer and workflow management",
                  },
                  {
                    icon: Workflow,
                    title: "Automation",
                    description: "Connected business processes",
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics",
                    description: "Business reporting and insights",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-5"
                    >
                      <Icon className="h-7 w-7 text-[#075B3B]" />

                      <h3 className="mt-4 text-sm font-extrabold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-[#526577]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#F0F6F1] p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#075B3B]" />

                <p className="text-sm font-medium">
                  Security-conscious financial technology planning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Financial Digital Transformation
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Technology for Modern Financial Services
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Financial services businesses manage
              customer relationships, operational
              workflows, documentation and business
              information across multiple systems.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              Connected software and digital tools
              can help organizations organize
              information, support service workflows
              and improve management visibility.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="finance-solutions"
        className="scroll-mt-24 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Financial Technology Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Technology Solutions for Financial Businesses
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Support financial service operations
              through connected digital platforms,
              intelligent workflows and
              business-focused software.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-[#526577]">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRY APPLICATIONS */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Financial Industry Applications
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Digital Solutions for Financial Service Workflows
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Different financial businesses have
              different operating models. Digital
              solutions should reflect their
              specific processes and requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => {
              const Icon = application.icon;

              return (
                <article
                  key={application.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-6 transition hover:border-[#075B3B]/30 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold">
                    {application.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#526577]">
                    {application.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECURITY & BENEFITS */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
              <ShieldCheck className="h-8 w-8" />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
              Business Technology with Security in Mind
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Financial service platforms require
              careful attention to customer
              information, access controls,
              operational reliability and
              regulatory requirements.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              Our technology approach can incorporate
              security and privacy requirements
              during solution planning, architecture
              and implementation.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#647586]">
              Regulatory compliance, certification
              and security assurance depend on
              applicable requirements and must
              be independently assessed for
              each project.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#E5E9E3] bg-white p-5"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#075B3B]" />

                <span className="text-sm font-semibold leading-7">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Financial Technology Implementation Process
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A structured development approach
              helps align digital systems with
              business requirements and
              appropriate safeguards.
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-6"
              >
                <span className="text-3xl font-black text-[#C6A052]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-extrabold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#526577]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Banking & Financial Technology FAQs
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Common questions about financial
              software, CRM, automation,
              AI assistance and security.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#E5E9E3] bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold [&::-webkit-details-marker]:hidden">
                  {faq.question}

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl text-[#075B3B] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-5 border-t border-[#E5E9E3] pt-5 text-sm leading-8 text-[#526577]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SOLUTIONS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className="text-2xl font-extrabold">
            Explore Related Technology Solutions
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#526577]">
            Explore how financial technology
            connects with enterprise systems,
            business intelligence and cybersecurity.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedSolutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between gap-4 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-5 transition hover:border-[#075B3B]/30"
              >
                <span className="text-sm font-bold">
                  {item.title}
                </span>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#075B3B]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#075B3B] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Rocket className="h-7 w-7 text-[#E9CF91]" />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold sm:text-4xl">
            Ready to Build Smarter Financial Technology?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Tell us about your financial software,
            CRM, digital platform or automation
            requirements. Explore a technology
            approach aligned with your organization.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your FinTech Project
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

          <p className="mt-9 text-xs tracking-widest text-white/65">
            OPV AI REALTY TECH PRIVATE LIMITED
          </p>

          <p className="mt-2 text-sm font-medium text-white/80">
            Build Smarter • Automate Better • Grow Faster
          </p>
        </div>
      </section>
    </main>
  );
}
