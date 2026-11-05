
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Boxes,
  Database,
  Workflow,
  BarChart3,
  ShieldCheck,
  Settings,
  CheckCircle2,
  Building2,
  Lightbulb,
  RefreshCw,
  ClipboardList,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CRM & ERP Development Company in India | OPV AI Realty Tech",
  description:
    "OPV AI Realty Tech offers custom CRM and ERP development, business process automation, customer management systems, workflow integration and business reporting solutions.",
  alternates: {
    canonical: "/services/crm-erp-development",
  },
  openGraph: {
    title: "CRM & ERP Development Services | OPV AI Realty Tech",
    description:
      "Explore custom CRM, ERP and business management software solutions for modern businesses.",
    url: "https://www.opvairealtytech.com/services/crm-erp-development",
    siteName: "OPV AI Realty Tech",
    type: "website",
  },
};

const solutions = [
  {
    icon: Users,
    title: "Custom CRM Development",
    description:
      "Build customer relationship management systems to organize contacts, track interactions, manage leads and support sales workflows.",
  },
  {
    icon: Boxes,
    title: "Custom ERP Development",
    description:
      "Develop business management applications that connect operational processes, information and departments through a centralized system.",
  },
  {
    icon: Workflow,
    title: "Business Workflow Automation",
    description:
      "Digitize repetitive business activities, approval processes, task assignments and internal workflows.",
  },
  {
    icon: ClipboardList,
    title: "Lead & Sales Management",
    description:
      "Organize lead information, sales activities, follow-ups and pipeline stages in a structured application.",
  },
  {
    icon: BarChart3,
    title: "Reports & Business Dashboards",
    description:
      "Bring relevant business information into dashboards and reports to help teams monitor operations and review performance.",
  },
  {
    icon: Database,
    title: "Database & System Integration",
    description:
      "Connect business applications with databases, APIs and other systems to support consistent information exchange.",
  },
];

const modules = [
  "Lead Management",
  "Customer Management",
  "Sales Pipeline",
  "Task Management",
  "Employee Management",
  "Inventory Management",
  "Order Management",
  "Reports & Analytics",
  "Role-Based Access",
  "Workflow Automation",
  "Notifications",
  "API Integrations",
];

const benefits = [
  "Centralized business information",
  "Structured customer records",
  "Improved visibility into sales activities",
  "Organized internal workflows",
  "Role-based access and permissions",
  "Reduced repetitive manual tasks",
  "Connected business applications",
  "Reports for operational monitoring",
];

const process = [
  {
    number: "01",
    title: "Business Analysis",
    description:
      "Understand your business operations, departments, users, existing tools and management requirements.",
  },
  {
    number: "02",
    title: "System Planning",
    description:
      "Define the modules, workflows, database structure, user roles and integrations required for the system.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Build the application modules, dashboards and required connections with other business systems.",
  },
  {
    number: "04",
    title: "Testing & Implementation",
    description:
      "Validate the workflows, access permissions and reports before preparing the agreed system for use.",
  },
];

const faqs = [
  {
    question: "What is CRM software?",
    answer:
      "Customer Relationship Management software helps businesses organize customer information, manage leads, track interactions and support sales and customer service activities.",
  },
  {
    question: "What is ERP software?",
    answer:
      "Enterprise Resource Planning software connects business processes and information across areas such as operations, inventory, finance and human resources, depending on the system's modules.",
  },
  {
    question: "Does OPV develop custom CRM software?",
    answer:
      "Custom CRM development is one of OPV's service areas. A CRM can be planned around your customer records, lead stages, sales workflows, user roles and reporting requirements.",
  },
  {
    question: "Can CRM and ERP systems be integrated?",
    answer:
      "CRM and ERP applications can be integrated when their technical interfaces, data structures and business requirements support the connection.",
  },
  {
    question: "Can a CRM or ERP include an admin dashboard?",
    answer:
      "Yes. Dashboards and administration panels can be included to manage users, configure modules, review records and monitor relevant business information.",
  },
  {
    question: "Can you develop CRM software for real estate businesses?",
    answer:
      "A custom CRM can be designed for real estate workflows, including property enquiries, lead tracking, customer follow-ups, sales activities and property-related records.",
  },
];

export default function CRMERPDevelopmentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="bg-white">
      {/* FAQ STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#033505] py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#E7B30F]/15 blur-[120px]" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#265921]/50 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E7B30F]/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#F4D545]">
            <Building2 className="h-4 w-4" />
            Business Management Software
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Custom CRM & ERP Development
            <span className="block text-[#F4D545]">
              for Business Management
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech develops business management
            software designed around customer relationships,
            operational workflows and organizational needs.
            Explore custom CRM, ERP, dashboards and business
            process automation solutions.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your Requirements
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:border-[#F4D545] hover:text-[#F4D545]"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Business Systems & Automation
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Bring Your Business Operations into One Connected System
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Managing customer information, sales activities,
              employee tasks and business operations across
              disconnected tools can make it difficult to
              maintain a consistent view of your organization.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              CRM and ERP applications help organize these
              activities through structured modules, shared
              information and defined workflows.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              OPV AI Realty Tech focuses on understanding your
              business processes before planning a custom
              management system around your operational needs.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <Settings className="h-12 w-12 text-[#F4D545]" />

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Better Systems.
              <span className="block text-[#F4D545]">
                More Organized Operations.
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              Plan business applications around your teams,
              processes, customer interactions and information
              management requirements.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Customer and lead management",
                "Business process management",
                "Centralized operational information",
                "Dashboards and reporting",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F4D545]" />
                  <span className="text-sm font-medium text-white/85">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our Development Services
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Custom CRM & ERP Software Solutions
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Build management systems that reflect your
              business structure, users and operational
              requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#E7B30F]/60 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-[#033505]/5 p-3">
                    <Icon className="h-7 w-7 text-[#265921]" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#033505]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Flexible Business Modules
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Modules for Different Business Requirements
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Select and plan the modules relevant to your
              business. The final system scope depends on
              your workflows and project requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <div
                key={module}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#F8FAF7] p-5"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#B88A00]" />
                <span className="font-semibold text-[#033505]">
                  {module}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL ESTATE CRM */}
      <section className="bg-[#033505] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#F4D545]">
              Industry-Focused Solutions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              CRM Solutions for Real Estate Businesses
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              Real estate businesses handle property enquiries,
              customer information, sales follow-ups and
              project-related records. A purpose-built CRM
              can help organize these activities in a structured
              system.
            </p>

            <p className="mt-5 leading-8 text-white/75">
              Depending on the requirements, a real estate CRM
              can include lead assignment, property enquiry
              tracking, sales pipeline management, customer
              communication records and reporting.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss a CRM Solution
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 sm:p-10">
            <Building2 className="h-12 w-12 text-[#F4D545]" />

            <h3 className="mt-7 text-2xl font-bold">
              Example Real Estate CRM Modules
            </h3>

            <div className="mt-7 space-y-4">
              {[
                "Property enquiry management",
                "Lead assignment and follow-ups",
                "Customer and buyer records",
                "Sales pipeline tracking",
                "Property and project information",
                "Sales activity reports",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F4D545]" />
                  <span className="text-sm text-white/85">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Business Benefits
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Create More Organized Business Workflows
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A well-planned CRM or ERP system gives teams
              a structured way to manage information and
              perform their daily activities.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B88A00]" />
                <span className="text-sm font-semibold leading-6 text-[#033505]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our Development Approach
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              How We Approach CRM & ERP Development
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <span className="text-3xl font-black text-[#B88A00]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#033505]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Common Questions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              CRM & ERP Development FAQs
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold text-[#033505]">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-xl font-extrabold text-[#033505]">
            Explore Related Services
          </h2>

          <div className="mt-5 flex flex-wrap gap-5">
            <Link
              href="/services/software-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Software Development →
            </Link>

            <Link
              href="/services/ai-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              AI Development →
            </Link>

            <Link
              href="/services/saas-cloud-solutions"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              SaaS & Cloud Solutions →
            </Link>

            <Link
              href="/services/website-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Website Development →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#033505] px-5 py-20 text-center text-white sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7B30F]/15">
            <Lightbulb className="h-7 w-7 text-[#F4D545]" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            Ready to Organize Your Business with Custom Software?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Share your business workflows, management
            requirements and software goals with OPV AI Realty Tech.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
          >
            Discuss Your Requirements
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
