import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Boxes,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Cloud,
  Cog,
  Database,
  Factory,
  Gauge,
  Network,
  Package,
  Rocket,
  ScanLine,
  Settings,
  ShieldCheck,
  Truck,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing Technology Solutions | OPV AI Realty Tech",
  description:
    "Explore manufacturing software, ERP integration, production workflow automation, inventory systems, industrial analytics and AI-powered business technology.",
  alternates: {
    canonical: "/industries/manufacturing",
  },
  openGraph: {
    title: "Manufacturing Technology Solutions | OPV AI Realty Tech",
    description:
      "Support manufacturing businesses with connected software, intelligent automation, operational analytics and digital platforms.",
    url: "/industries/manufacturing",
    type: "website",
  },
};

const solutions = [
  {
    icon: Factory,
    title: "Manufacturing Websites & Digital Platforms",
    description:
      "Create professional websites, product catalogues, customer portals and digital platforms for manufacturing businesses.",
  },
  {
    icon: Settings,
    title: "ERP & Business Systems",
    description:
      "Explore integrated business applications for coordinating production information, procurement, inventory and administration.",
  },
  {
    icon: Workflow,
    title: "Production Workflow Automation",
    description:
      "Map and automate suitable operational tasks, approvals, notifications and coordination workflows.",
  },
  {
    icon: Boxes,
    title: "Inventory & Supply Chain Systems",
    description:
      "Plan digital systems for stock records, material tracking, supplier information and inventory coordination.",
  },
  {
    icon: Bot,
    title: "AI & Intelligent Automation",
    description:
      "Explore AI assistants, information processing and automation opportunities across suitable manufacturing workflows.",
  },
  {
    icon: BarChart3,
    title: "Manufacturing Analytics",
    description:
      "Develop dashboards and reports to help teams review production activity, inventory information and business performance.",
  },
  {
    icon: Database,
    title: "Industrial Data Integration",
    description:
      "Connect relevant business applications, databases and data sources to support a more coordinated information environment.",
  },
  {
    icon: Cloud,
    title: "Cloud & Application Solutions",
    description:
      "Plan cloud-enabled applications and connected digital platforms around manufacturing business requirements.",
  },
];

const businessTypes = [
  {
    title: "Industrial Manufacturers",
    description:
      "Business applications, digital platforms and operational systems for manufacturing organisations.",
  },
  {
    title: "Engineering Companies",
    description:
      "Project workflows, technical information management and connected business applications.",
  },
  {
    title: "Automotive & Components",
    description:
      "Digital systems for product information, inventory coordination and operational processes.",
  },
  {
    title: "Food & Beverage Manufacturers",
    description:
      "Business software for inventory, production coordination, supplier information and reporting.",
  },
  {
    title: "Electronics & Electrical Manufacturers",
    description:
      "Product catalogues, business applications and data integration for manufacturing operations.",
  },
  {
    title: "Small & Medium Manufacturers",
    description:
      "Practical digital tools for business management, customer relationships and operational coordination.",
  },
];

const capabilities = [
  "Manufacturing business websites",
  "ERP and business system integration",
  "Production workflow applications",
  "Inventory management systems",
  "Procurement workflow coordination",
  "Supplier and vendor management",
  "AI-assisted business workflows",
  "Production and operations dashboards",
  "Industrial data integration",
  "Cloud-based business applications",
  "Maintenance task management workflows",
  "Operational reporting and analytics",
];

const benefits = [
  {
    title: "More Connected Operations",
    description:
      "Bring relevant business information and workflows together across departments and operational teams.",
  },
  {
    title: "Better Information Visibility",
    description:
      "Use structured records and dashboards to help teams review production, inventory and business activity.",
  },
  {
    title: "Reduced Repetitive Administration",
    description:
      "Identify suitable opportunities to automate recurring information handling, notifications and coordination tasks.",
  },
  {
    title: "Technology That Can Evolve",
    description:
      "Plan digital systems with maintainability, integration and future business requirements in mind.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Review your manufacturing model, departments, existing systems and business requirements.",
  },
  {
    number: "02",
    title: "Map Processes",
    description:
      "Identify key information flows, operational activities and opportunities for digital improvement.",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "Plan and build the agreed applications, integrations and automation workflows.",
  },
  {
    number: "04",
    title: "Integrate & Test",
    description:
      "Connect relevant systems and review functionality, data flows and access requirements.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review how the solution supports operations and identify further improvement opportunities.",
  },
];

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Manufacturing Technology Solutions
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transform Manufacturing.
              <span className="block text-emerald-400">
                Build Smarter Operations.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Connect production information, inventory, business systems
              and operational workflows with modern technology. OPV AI
              Realty Tech helps manufacturing organisations explore software,
              AI and automation solutions aligned with their business needs.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Discuss Your Manufacturing Project
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/#solutions"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Explore Our Solutions
              </Link>
            </div>

            <p className="mt-8 text-sm text-slate-400">
              Connected systems. Intelligent workflows. Smarter operations.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur sm:p-8">

              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                    OPV INDUSTRIAL TECHNOLOGY
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-white">
                    Connected Manufacturing
                  </h2>
                </div>

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                  <Factory size={28} />
                </div>
              </div>

              <div className="mt-7 flex items-center gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <div className="rounded-xl bg-emerald-400/15 p-3 text-emerald-300">
                  <Cog size={30} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Digital Operations
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Connected business and production workflows
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Workflow className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Automation
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Coordinated operational processes.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Boxes className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Inventory
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Materials and stock information.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Bot className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    AI Solutions
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Intelligent information workflows.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <BarChart3 className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Analytics
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Operational reports and insights.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-[#10233a] px-4 py-4">
                <ShieldCheck
                  size={21}
                  className="shrink-0 text-emerald-300"
                />
                <p className="text-sm text-slate-200">
                  Technology planned around operational requirements
                </p>
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
            The future of manufacturing
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Digital Technology for Connected Manufacturing Businesses
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Manufacturing organisations manage complex relationships
            between production, procurement, inventory, suppliers, sales
            and administration. Well-planned digital systems can help
            coordinate information and workflows across these functions.
            The right technology approach starts with understanding your
            operations and identifying practical opportunities for improvement.
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
              Manufacturing Technology Solutions
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore software, AI, automation and data capabilities
              designed around manufacturing and industrial business needs.
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
            Technology for Different Manufacturing Businesses
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Every manufacturer has different products, processes,
            supply chains and operational requirements. Technology
            should reflect those differences.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businessTypes.map((business) => (
            <article
              key={business.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
            >
              <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <Factory size={25} />
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

      {/* MANUFACTURING WORKFLOW */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Connected operations
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Connect Key Manufacturing Business Activities
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Digital systems can help coordinate the flow of information
              from sourcing and production planning through inventory
              management and business reporting.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                icon: ClipboardList,
                title: "Plan",
                description:
                  "Organise requirements, production information and operational priorities.",
              },
              {
                number: "02",
                icon: Wrench,
                title: "Produce",
                description:
                  "Coordinate relevant production activities and operational records.",
              },
              {
                number: "03",
                icon: Package,
                title: "Manage",
                description:
                  "Support inventory, supplier and order information workflows.",
              },
              {
                number: "04",
                icon: BarChart3,
                title: "Analyse",
                description:
                  "Review business activity and performance through structured reporting.",
              },
            ].map((stage) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="text-sm font-bold text-emerald-400">
                    STAGE {stage.number}
                  </p>

                  <div className="mt-5 inline-flex rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {stage.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {stage.description}
                  </p>
                </article>
              );
            })}
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
              A Connected Digital Toolkit for Manufacturers
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              From business applications to automation and analytics,
              we help identify suitable technology capabilities for
              your manufacturing requirements.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              Discuss your manufacturing requirements
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

      {/* BUSINESS OUTCOMES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Business outcomes
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Technology That Supports Manufacturing Growth
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Connected business systems can help manufacturers organise
            information, coordinate activities and understand performance.
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
              From Manufacturing Requirements to Digital Solutions
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A structured process helps align technology with operational
              workflows, business priorities and system requirements.
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
            Ready to Modernise Your Manufacturing Business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Tell us about your production processes, business applications
            and digital requirements. Let's explore how software, AI and
            connected technology can support your organisation.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Discuss Your Manufacturing Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}