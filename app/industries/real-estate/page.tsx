import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  ClipboardList,
  Database,
  Globe2,
  Handshake,
  Home,
  Layers3,
  MapPin,
  MessageSquare,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate Technology Solutions | OPV AI Realty Tech",
  description:
    "Explore AI-powered real estate technology, property discovery platforms, real estate CRM, lead management, property portals, automation and digital marketing solutions.",
  alternates: {
    canonical: "/industries/real-estate",
  },
  openGraph: {
    title: "Real Estate Technology Solutions | OPV AI Realty Tech",
    description:
      "Transform real estate businesses with AI, software, CRM, automation and digital growth solutions from OPV AI Realty Tech.",
    url: "/industries/real-estate",
    type: "website",
  },
};

const solutions = [
  {
    icon: Globe2,
    title: "Real Estate Websites & Portals",
    description:
      "Build professional property websites, project portals, property listing platforms and digital experiences for real estate businesses.",
  },
  {
    icon: Bot,
    title: "AI & Intelligent Automation",
    description:
      "Explore AI assistants, automated enquiry handling, intelligent workflows and customer support applications.",
  },
  {
    icon: Users,
    title: "Real Estate CRM Systems",
    description:
      "Organise customer enquiries, property interests, sales pipelines, follow-ups and customer relationship activities.",
  },
  {
    icon: Target,
    title: "Lead Generation & Marketing",
    description:
      "Develop digital marketing strategies, SEO, AEO, GEO and enquiry generation journeys for property businesses.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Create mobile-friendly property experiences for customers, agents, sales teams and business operators.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Business Intelligence",
    description:
      "Explore dashboards and reports for enquiries, sales activities, project performance and business operations.",
  },
  {
    icon: Workflow,
    title: "Sales & Workflow Automation",
    description:
      "Coordinate enquiry assignment, customer follow-ups, site visit workflows, notifications and internal processes.",
  },
  {
    icon: Database,
    title: "Property Data & Integrations",
    description:
      "Connect relevant property information, business applications, databases and third-party technology services.",
  },
];

const businessTypes = [
  {
    title: "Real Estate Developers",
    description:
      "Digital project showcases, property discovery, enquiry management and sales coordination.",
  },
  {
    title: "Real Estate Agents & Brokers",
    description:
      "Customer relationship management, property discovery, lead tracking and follow-up workflows.",
  },
  {
    title: "Property Consultants",
    description:
      "Professional websites, client management tools and digital communication platforms.",
  },
  {
    title: "Plot & Villa Businesses",
    description:
      "Property listing experiences, location-focused discovery and enquiry management solutions.",
  },
  {
    title: "Property Management Businesses",
    description:
      "Applications for coordinating property information, service requests and operational activities.",
  },
  {
    title: "Real Estate Agencies",
    description:
      "Connected digital systems for marketing, sales operations, customer engagement and reporting.",
  },
];

const capabilities = [
  "Property discovery websites",
  "Property listing portals",
  "Project and developer websites",
  "Real estate CRM applications",
  "Lead capture and lead management",
  "AI enquiry assistants",
  "Customer follow-up automation",
  "Site visit scheduling workflows",
  "Property marketing and SEO",
  "Real estate mobile applications",
  "Sales and performance dashboards",
  "Business process integrations",
];

const benefits = [
  {
    title: "Better Digital Property Discovery",
    description:
      "Create structured digital experiences that help prospective buyers explore property information and relevant offerings.",
  },
  {
    title: "Organised Customer Enquiries",
    description:
      "Plan systems to capture, organise and manage property enquiries and customer interactions.",
  },
  {
    title: "More Connected Sales Workflows",
    description:
      "Coordinate enquiry assignments, follow-ups and sales activities through connected applications.",
  },
  {
    title: "Improved Business Visibility",
    description:
      "Use structured information and reporting to review customer activity, marketing performance and sales operations.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand your real estate business model, projects, customers and technology requirements.",
  },
  {
    number: "02",
    title: "Strategise",
    description:
      "Identify suitable digital platforms, AI opportunities and business system requirements.",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "Design and develop the agreed websites, applications, integrations and workflows.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "Connect relevant systems, data sources and business processes.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review performance and explore improvements as your business evolves.",
  },
];

export default function RealEstateIndustryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Real Estate Technology Solutions
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transform Real Estate
              <span className="block text-emerald-400">
                with AI & Technology.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Bring property discovery, customer engagement, sales operations
              and business automation together with intelligent digital
              solutions. OPV AI Realty Tech helps real estate businesses
              explore technology designed for the future of property.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Discuss Your Real Estate Project
                <ArrowRight size={18} />
              </Link>

              <Link
                href="https://www.openplotsandvillas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Explore Open Plots & Villas
                <ArrowRight size={18} />
              </Link>
            </div>

            <p className="mt-8 text-sm text-slate-400">
              Property discovery. Intelligent automation. Real estate growth.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur sm:p-8">

              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                    OPV REAL ESTATE TECHNOLOGY
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-white">
                    Intelligent Property Ecosystem
                  </h2>
                </div>

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                  <Building2 size={28} />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Home className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Property Discovery
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Property information and digital listings.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Bot className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    AI Assistants
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Intelligent enquiry assistance.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Users className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Real Estate CRM
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Customer and lead management.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <BarChart3 className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Business Analytics
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Sales and operational insights.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <div className="flex items-center gap-3">
                  <MapPin className="shrink-0 text-emerald-300" size={22} />

                  <div>
                    <p className="font-semibold text-white">
                      Connected Property Experiences
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Technology for buyers, agents and developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-5 -top-5 -z-10 h-36 w-36 rounded-full bg-emerald-400/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            The future of real estate
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Smarter Technology for the Entire Property Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Real estate businesses operate across property discovery,
            marketing, customer communication, sales and project management.
            Connected digital platforms and intelligent workflows can help
            bring these activities together. We focus on technology that
            addresses real business requirements across the property ecosystem.
          </p>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Our capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Real Estate Technology Solutions
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Technology capabilities designed to support property businesses,
              developers, agents, brokers and real estate organisations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {solution.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Who we serve
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Technology for Different Real Estate Businesses
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Every property business has different customers, processes and
            operating requirements. Technology should reflect those differences.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businessTypes.map((business) => (
            <article
              key={business.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
            >
              <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <Building2 size={25} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {business.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {business.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* OPEN PLOTS & VILLAS PRODUCT */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              OPV ecosystem
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Open Plots & Villas
              <span className="block text-emerald-400">
                AI-Powered Real Estate Discovery Portal
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Open Plots & Villas is OPV's dedicated real estate discovery
              platform. It represents the company's real estate-focused
              digital initiative, bringing the property discovery concept
              into the broader OPV technology ecosystem.
            </p>

            <Link
              href="https://www.openplotsandvillas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
            >
              Visit Open Plots & Villas
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 sm:p-9">

            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-emerald-400/10 p-4 text-emerald-300">
                <Home size={34} />
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-emerald-300">
                  REAL ESTATE DISCOVERY
                </p>

                <h3 className="mt-1 text-xl font-bold">
                  Open Plots & Villas
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#10233a] p-4">
                <Search size={22} className="text-emerald-400" />
                <span className="text-sm font-medium text-slate-200">
                  Property discovery platform
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#10233a] p-4">
                <MapPin size={22} className="text-emerald-400" />
                <span className="text-sm font-medium text-slate-200">
                  Real estate-focused discovery
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#10233a] p-4">
                <Building2 size={22} className="text-emerald-400" />
                <span className="text-sm font-medium text-slate-200">
                  Dedicated property brand
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#10233a] p-4">
                <Zap size={22} className="text-emerald-400" />
                <span className="text-sm font-medium text-slate-200">
                  AI-powered platform positioning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Technology capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A Connected Digital Toolkit for Property Businesses
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              From customer enquiries to digital property experiences,
              we help identify suitable software, AI and automation
              capabilities for your business.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              Discuss your requirements
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />

                <span className="text-sm font-medium leading-6 text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Business outcomes
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Create Better Digital Experiences for Real Estate
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Technology can help property businesses improve how they manage
            information, communicate with customers and coordinate daily work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <p className="text-sm font-bold text-emerald-600">
                OUTCOME 0{index + 1}
              </p>

              <h3 className="mt-4 text-xl font-bold">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Our approach
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From Property Business Challenges to Digital Solutions
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A structured approach helps align your technology investment
              with your property business model and operational requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-3xl font-bold text-emerald-400">
                  {step.number}
                </p>

                <h3 className="mt-5 text-lg font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 sm:px-10 lg:py-24">

        <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-600 px-7 py-14 text-center text-white sm:px-14">

          <div className="mx-auto inline-flex rounded-2xl bg-white/15 p-3">
            <Rocket size={28} />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold sm:text-4xl">
            Ready to Transform Your Real Estate Business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Whether you are a developer, property consultant, real estate
            agency or property entrepreneur, let's explore how AI, software
            and connected technology can support your business.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Discuss Your Real Estate Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}