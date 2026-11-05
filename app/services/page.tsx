
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Workflow,
  Database,
  BarChart3,
  ShieldCheck,
  Search,
  Bot,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI, Software & Digital Technology Services | OPV AI Realty Tech",
  description:
    "Explore OPV AI Realty Tech services including AI development, custom software, website and mobile app development, SaaS, cloud, CRM, ERP, business automation and digital growth.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Technology Services | OPV AI Realty Tech",
    description:
      "AI development, software engineering, cloud platforms, business automation and digital growth solutions.",
    url: "https://www.opvairealtytech.com/services",
    siteName: "OPV AI Realty Tech",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "AI Development & Automation",
    description:
      "Develop intelligent business solutions using artificial intelligence, AI agents and workflow automation. We focus on applying AI to practical business requirements.",
    features: ["AI Integration", "AI Agents", "Intelligent Automation"],
    href: "/services/ai-development",
  },
  {
    number: "02",
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Build custom software applications and digital products designed around your organization's workflows, operational needs and business objectives.",
    features: ["Custom Applications", "API Development", "Software Engineering"],
    href: "/services/software-development",
  },
  {
    number: "03",
    icon: Globe,
    title: "Website Development",
    description:
      "Create responsive business websites, web applications and e-commerce experiences that support your digital presence and customer journeys.",
    features: ["Business Websites", "Web Applications", "E-Commerce"],
    href: "/services/website-development",
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Develop mobile application experiences for businesses looking to connect customers, teams and digital services.",
    features: ["Android Applications", "iOS Applications", "Cross-Platform Apps"],
    href: "/services/mobile-app-development",
  },
  {
    number: "05",
    icon: Cloud,
    title: "SaaS & Cloud Solutions",
    description:
      "Develop scalable SaaS platforms and cloud-based solutions to support modern business applications and digital operations.",
    features: ["SaaS Development", "Cloud Applications", "DevOps"],
    href: "/services/saas-cloud-solutions",
  },
  {
    number: "06",
    icon: Workflow,
    title: "CRM & ERP Development",
    description:
      "Build connected business management solutions to support customer relationships, business workflows and operational processes.",
    features: ["CRM Systems", "ERP Solutions", "Workflow Management"],
    href: "/services/crm-erp-development",
  },
  {
    number: "07",
    icon: Database,
    title: "Data Engineering",
    description:
      "Organize, integrate and manage business data through structured databases, data systems and application integrations.",
    features: ["Database Solutions", "Data Integration", "API Connectivity"],
    href: "/services/data-engineering",
  },
  {
    number: "08",
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    description:
      "Turn business information into useful insights through analytics, reporting systems and interactive dashboards.",
    features: ["Business Analytics", "Data Dashboards", "Reporting"],
    href: "/services/business-intelligence",
  },
  {
    number: "09",
    icon: ShieldCheck,
    title: "Cybersecurity & IT Solutions",
    description:
      "Support technology environments through security-conscious development practices, IT solutions and infrastructure planning.",
    features: ["IT Solutions", "Application Security", "Infrastructure"],
    href: "/services/cybersecurity-it-solutions",
  },
  {
    number: "10",
    icon: Search,
    title: "SEO & Digital Growth",
    description:
      "Improve digital visibility and support customer acquisition through search engine optimization and digital growth strategies.",
    features: ["Search Engine Optimization", "Digital Marketing", "Growth Strategy"],
    href: "/services/seo-digital-growth",
  },
  {
    number: "11",
    icon: Bot,
    title: "AI Sales Agents",
    description:
      "Explore AI-powered customer engagement and sales assistance solutions for enquiries, lead interactions and follow-up workflows.",
    features: ["AI Assistants", "Lead Engagement", "Sales Workflows"],
    href: "/services/ai-sales-agents",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description: "Understand your business, goals and technology requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Identify the appropriate solution, scope and implementation approach.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Build the solution around the agreed requirements.",
  },
  {
    number: "04",
    title: "Improve",
    description: "Review the outcome and identify opportunities for improvement.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#033505] py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#E7B30F]/15 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#265921]/50 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E7B30F]/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#F4D545]">
            <Cpu className="h-4 w-4" />
            Our Technology Services
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            AI, Software & Digital
            <span className="block text-[#F4D545]">
              Technology Solutions
            </span>
            for Business Growth
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech provides technology-focused services
            across artificial intelligence, custom software development,
            SaaS platforms, cloud solutions, business automation,
            data intelligence and digital growth.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:border-[#F4D545] hover:text-[#F4D545]"
            >
              About Our Company
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
            What We Offer
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
            Technology Capabilities for Modern Businesses
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Every business has different technology requirements.
            Our service areas bring together software engineering,
            artificial intelligence, digital platforms and business
            systems to address a range of operational and digital
            challenges.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Explore Our Services
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Our Complete Technology Services
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-600">
              Explore our service areas and find technology capabilities
              relevant to your business requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E7B30F]/60 hover:shadow-xl sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-[#033505]/5 p-3 transition group-hover:bg-[#E7B30F]/15">
                      <Icon className="h-7 w-7 text-[#265921]" />
                    </div>

                    <span className="text-3xl font-black text-slate-100">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#033505]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-[#033505]/5 px-3 py-1.5 text-[11px] font-semibold text-[#265921]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-slate-100 pt-6">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#265921] transition hover:text-[#B88A00]"
                    >
                      Explore Service
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              How We Work
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              From Business Requirements to Technology Solutions
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#033505] px-5 py-20 text-center text-white sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Let's Find the Right Technology Solution
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Share your requirements with our team and explore how
            technology can support your business goals.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
          >
            Contact Our Team
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
