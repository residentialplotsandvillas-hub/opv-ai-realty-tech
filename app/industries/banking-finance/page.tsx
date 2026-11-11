
import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Database,
  Bot,
  Workflow,
  Smartphone,
  BarChart3,
  LockKeyhole,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Banking & Financial Technology Solutions | OPV AI Realty Tech",
  description:
    "Explore financial services software, CRM, workflow automation, AI assistants, dashboards and secure digital platform development for financial businesses in India.",
  alternates: {
    canonical: "/industries/banking-finance",
  },
  openGraph: {
    title:
      "Banking & Financial Services Technology | OPV AI",
    description:
      "Custom software, CRM, automation and digital solutions for banking, FinTech and financial services businesses.",
    url:
      "https://www.opvairealtytech.com/industries/banking-finance",
    type: "website",
  },
};

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
      "Automate administrative tasks, internal approvals, document workflows and customer communication.",
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

const benefits = [
  "Improve customer service workflows",
  "Streamline internal business operations",
  "Centralize customer and operational information",
  "Support secure digital experiences",
  "Improve reporting and management visibility",
];

export default function BankingFinancePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name:
          "Banking & Financial Services Technology Solutions",
        url:
          "https://www.opvairealtytech.com/industries/banking-finance",
        description:
          "Financial technology, CRM, software and automation solutions.",
      },
      {
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
            name: "Industries",
            item:
              "https://www.opvairealtytech.com/industries",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Banking & Financial Services",
            item:
              "https://www.opvairealtytech.com/industries/banking-finance",
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-white text-[#263C50]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* HERO */}

      <section className="border-b border-[#E5E9E3] bg-[#F8F6F0]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">

          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap gap-2 text-xs text-[#647586]"
          >
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/industries">Industries</Link>
            <span>/</span>
            <span
              aria-current="page"
              className="text-[#075B3B]"
            >
              Banking & Financial Services
            </span>
          </nav>

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
              <Landmark className="h-4 w-4" />
              Financial Services Technology
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Smarter Financial Systems.
              <span className="mt-2 block text-[#075B3B]">
                Connected Business Growth.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[#526577] sm:text-lg">
              OPV AI Realty Tech develops custom software,
              CRM systems, digital platforms, intelligent
              automation and business analytics solutions
              for banking, FinTech and financial services
              organizations.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white hover:bg-[#06472F]"
              >
                Discuss Your FinTech Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="#finance-solutions"
                className="inline-flex items-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B]"
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCIAL TECHNOLOGY SOLUTIONS */}

      <section
        id="finance-solutions"
        className="scroll-mt-24 py-20 lg:py-24"
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
              Support financial service operations through
              connected digital platforms, intelligent
              workflows and business-focused software.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition hover:border-[#075B3B]/30 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F0F6F1] text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#526577]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2">

          <div>
            <ShieldCheck className="h-10 w-10 text-[#075B3B]" />

            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
              Business Technology with Security in Mind
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Financial service platforms require careful
              attention to customer information, access
              controls, operational reliability and
              regulatory requirements.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              Our technology approach can incorporate
              security and privacy requirements during
              solution planning, architecture and
              implementation.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#647586]">
              Regulatory compliance, certification and
              security assurance depend on the applicable
              requirements and must be independently
              assessed for each project.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#E5E9E3] bg-white p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#075B3B]" />

                <span className="text-sm font-semibold leading-6">
                  {item}
                </span>
              </div>
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

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/solutions/crm-erp-business-systems"
              className="rounded-full border border-[#E5E9E3] px-5 py-3 text-sm font-semibold text-[#075B3B] hover:bg-[#F0F6F1]"
            >
              CRM & ERP Solutions
            </Link>

            <Link
              href="/solutions/data-business-intelligence"
              className="rounded-full border border-[#E5E9E3] px-5 py-3 text-sm font-semibold text-[#075B3B] hover:bg-[#F0F6F1]"
            >
              Data & Business Intelligence
            </Link>

            <Link
              href="/solutions/cybersecurity-it-solutions"
              className="rounded-full border border-[#E5E9E3] px-5 py-3 text-sm font-semibold text-[#075B3B] hover:bg-[#F0F6F1]"
            >
              Cybersecurity & IT
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="border-t border-[#E5E9E3] bg-[#F8F6F0] py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Build Smarter Financial Technology.
          </h2>

          <p className="mt-5 leading-8 text-[#526577]">
            Explore custom financial software,
            CRM systems, business automation
            and digital platform development
            for your organization.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-8 py-4 text-sm font-bold text-white hover:bg-[#06472F]"
          >
            Contact OPV AI
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
