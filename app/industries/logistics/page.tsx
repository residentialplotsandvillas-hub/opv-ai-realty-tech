import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Boxes,
  CheckCircle2,
  ClipboardList,
  Cloud,
  Database,
  MapPin,
  Package,
  Radio,
  Rocket,
  Route,
  ScanLine,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Logistics & Supply Chain Technology Solutions | OPV AI Realty Tech",
  description:
    "Explore logistics software, fleet management systems, shipment tracking, warehouse applications, supply chain automation and business intelligence solutions.",
  alternates: {
    canonical: "/industries/logistics",
  },
  openGraph: {
    title: "Logistics & Supply Chain Technology Solutions | OPV AI Realty Tech",
    description:
      "Connect logistics operations with software, AI, automation and data-driven business applications from OPV AI Realty Tech.",
    url: "/industries/logistics",
    type: "website",
  },
};

const solutions = [
  {
    icon: Truck,
    title: "Fleet Management Systems",
    description:
      "Plan digital tools for vehicle records, fleet activities, maintenance coordination and transport operations.",
  },
  {
    icon: Route,
    title: "Shipment & Delivery Tracking",
    description:
      "Develop tracking interfaces and workflows to help businesses organise shipment information and delivery updates.",
  },
  {
    icon: Warehouse,
    title: "Warehouse Management Systems",
    description:
      "Explore applications for inventory records, warehouse operations, stock visibility and fulfilment coordination.",
  },
  {
    icon: Boxes,
    title: "Inventory & Order Management",
    description:
      "Connect product records, stock information, order processing and business workflows through suitable applications.",
  },
  {
    icon: Bot,
    title: "AI & Workflow Automation",
    description:
      "Explore AI assistants and automation for document handling, enquiry management, notifications and operational tasks.",
  },
  {
    icon: Database,
    title: "Supply Chain Data Integration",
    description:
      "Connect relevant business applications, data sources and systems to support coordinated information flows.",
  },
  {
    icon: BarChart3,
    title: "Logistics Analytics & Reporting",
    description:
      "Plan dashboards and reports for shipment activity, fleet information, inventory and operational performance.",
  },
  {
    icon: Cloud,
    title: "Cloud & Digital Platforms",
    description:
      "Develop cloud-enabled applications and digital platforms around logistics and supply chain requirements.",
  },
];

const businessTypes = [
  {
    title: "Transport & Fleet Operators",
    description:
      "Digital systems for fleet records, transport coordination, vehicle information and operational reporting.",
  },
  {
    title: "Courier & Delivery Companies",
    description:
      "Shipment tracking experiences, delivery workflows, customer communication and service management applications.",
  },
  {
    title: "Warehousing Businesses",
    description:
      "Applications for stock visibility, warehouse records, order coordination and inventory workflows.",
  },
  {
    title: "Freight & Cargo Companies",
    description:
      "Business platforms for shipment information, customer enquiries, documentation and operational coordination.",
  },
  {
    title: "Supply Chain Businesses",
    description:
      "Connected systems for supplier information, procurement processes, inventory and business reporting.",
  },
  {
    title: "E-commerce Fulfilment Providers",
    description:
      "Digital workflows for order processing, fulfilment coordination, shipment updates and customer communication.",
  },
];

const capabilities = [
  "Logistics business websites",
  "Fleet management applications",
  "Shipment tracking platforms",
  "Delivery management workflows",
  "Warehouse management applications",
  "Inventory and order management",
  "Supplier and vendor management",
  "Logistics CRM systems",
  "AI-assisted document workflows",
  "Operational process automation",
  "Fleet and shipment dashboards",
  "Business system integrations",
];

const benefits = [
  {
    title: "Better Operational Visibility",
    description:
      "Organise information from relevant logistics activities to help teams review shipments, inventory and operational status.",
  },
  {
    title: "More Connected Workflows",
    description:
      "Coordinate relevant activities across transport, warehouse, fulfilment and customer service systems.",
  },
  {
    title: "Reduced Repetitive Administration",
    description:
      "Identify suitable opportunities to automate recurring data entry, notifications and document-related tasks.",
  },
  {
    title: "Informed Business Planning",
    description:
      "Use organised information and reporting to review operational activity and support business decisions.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Review your logistics model, operational activities, users and existing systems.",
  },
  {
    number: "02",
    title: "Map Workflows",
    description:
      "Identify information flows across shipments, vehicles, warehouses and customers.",
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
      "Connect relevant systems and review data flows, functionality and user experience.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review business needs and identify opportunities for ongoing optimisation.",
  },
];

const journeyStages = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Plan",
    description:
      "Organise shipment requests, customer details and operational requirements.",
  },
  {
    number: "02",
    icon: Truck,
    title: "Transport",
    description:
      "Coordinate vehicle information, transport activities and delivery workflows.",
  },
  {
    number: "03",
    icon: Warehouse,
    title: "Manage",
    description:
      "Support warehouse records, inventory visibility and fulfilment processes.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Analyse",
    description:
      "Review shipment activity, inventory information and business performance.",
  },
];

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Logistics & Supply Chain Technology
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Connect Logistics.
              <span className="block text-emerald-400">
                Move Business Forward.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Connect transport operations, shipment information, warehouse
              workflows and business systems with modern technology. OPV AI
              Realty Tech helps logistics organisations explore software,
              AI and automation solutions aligned with their requirements.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Discuss Your Logistics Project
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
              Connected operations. Intelligent workflows. Better visibility.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                    OPV LOGISTICS TECHNOLOGY
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    Connected Supply Chain
                  </h2>
                </div>

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                  <Truck size={28} />
                </div>
              </div>

              <div className="mt-7 flex items-center gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <div className="rounded-xl bg-emerald-400/15 p-3 text-emerald-300">
                  <Route size={30} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Logistics Operations
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Connected transport and business workflows
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Truck className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">Fleet</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Vehicle and transport records.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Package className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">Shipments</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Delivery and order information.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Warehouse className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">Warehousing</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Inventory and stock coordination.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Bot className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">AI & Automation</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Intelligent business workflows.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-[#10233a] px-4 py-4">
                <MapPin
                  size={21}
                  className="shrink-0 text-emerald-300"
                />
                <p className="text-sm text-slate-200">
                  Logistics information organised across business activities
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
            The future of logistics
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Digital Technology for Connected Supply Chain Operations
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Logistics businesses coordinate transport, shipments, warehouses,
            suppliers, customers and operational information. Connected
            applications can help organise these activities and make
            business information easier to access. The right technology
            approach starts with understanding your workflows and identifying
            practical opportunities for improvement.
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
              Logistics & Supply Chain Technology Solutions
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore software, AI, automation and data capabilities for
              transport businesses, warehouses, delivery companies and
              supply chain organisations.
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
            Technology for Different Logistics Businesses
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Each logistics business has different transport models,
            fulfilment processes, customer needs and operational requirements.
            Technology should reflect those differences.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businessTypes.map((business) => (
            <article
              key={business.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
            >
              <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <Truck size={25} />
              </div>

              <h3 className="mt-5 text-xl font-bold">{business.title}</h3>

              <p className="mt-3 leading-7 text-slate-600">
                {business.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SUPPLY CHAIN JOURNEY */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Connected operations
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Connect the Supply Chain Information Journey
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Digital systems can help coordinate information across
              planning, transport, warehousing and business reporting.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journeyStages.map((stage) => {
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

                  <h3 className="mt-5 text-xl font-bold">{stage.title}</h3>

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
              A Connected Digital Toolkit for Logistics Businesses
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              From shipment applications to inventory systems and operational
              analytics, we help identify suitable technology capabilities
              for your logistics requirements.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              Discuss your logistics requirements
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
            Technology That Supports Logistics Growth
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Connected business systems can help logistics organisations
            coordinate activities, organise information and understand
            operational performance.
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

              <h3 className="mt-4 text-xl font-bold">{benefit.title}</h3>

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
              From Logistics Challenges to Digital Solutions
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A structured process helps align technology decisions with
              transport operations, supply chain workflows and business goals.
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

                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>

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
            Ready to Modernise Your Logistics Business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Tell us about your transport operations, warehouse processes,
            shipment workflows or technology requirements. Let's explore
            how software, AI and connected systems can support your business.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Discuss Your Logistics Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}