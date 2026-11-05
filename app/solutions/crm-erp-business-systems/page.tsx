import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Database,
  FileText,
  Handshake,
  Layers3,
  Package,
  Settings,
  ShoppingCart,
  Users,
  Workflow,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CRM, ERP & Business Systems | OPV AI Realty Tech",
  description:
    "Explore CRM solutions, ERP systems, business process automation, customer management and integrated business applications with OPV AI Realty Tech.",
  alternates: {
    canonical: "/solutions/crm-erp-business-systems",
  },
  openGraph: {
    title: "CRM, ERP & Business Systems | OPV AI Realty Tech",
    description:
      "Connect customer relationships, business operations and workflows with integrated business technology.",
    url: "/solutions/crm-erp-business-systems",
    type: "website",
  },
};

const services = [
  {
    icon: Users,
    title: "CRM Solutions",
    description:
      "Organise customer information, enquiries, sales activities and relationship management in a structured system.",
  },
  {
    icon: Building2,
    title: "ERP Solutions",
    description:
      "Explore integrated business applications for coordinating key operational functions and business information.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Streamline repetitive tasks, approvals, notifications and hand-offs across business teams.",
  },
  {
    icon: Database,
    title: "Business Data Integration",
    description:
      "Connect relevant applications and data sources to reduce disconnected information across your organisation.",
  },
  {
    icon: ClipboardList,
    title: "Operations Management Systems",
    description:
      "Plan business applications for task coordination, operational tracking and internal administration.",
  },
  {
    icon: Settings,
    title: "Custom Business Systems",
    description:
      "Design software around specific processes when standard applications do not fully meet your requirements.",
  },
];

const businessFunctions = [
  {
    icon: Handshake,
    title: "Sales & Customer Management",
    items: [
      "Lead and enquiry management",
      "Customer records and interaction history",
      "Sales pipeline tracking",
      "Follow-up and task coordination",
    ],
  },
  {
    icon: Package,
    title: "Inventory & Procurement",
    items: [
      "Inventory and stock visibility",
      "Purchase and supplier workflows",
      "Order tracking",
      "Product and service records",
    ],
  },
  {
    icon: FileText,
    title: "Finance & Administration",
    items: [
      "Invoice and document workflows",
      "Expense and approval tracking",
      "Business records management",
      "Administrative process coordination",
    ],
  },
  {
    icon: BarChart3,
    title: "Management & Reporting",
    items: [
      "Operational dashboards",
      "Business performance reporting",
      "Team activity visibility",
      "Management information",
    ],
  },
];

const benefits = [
  {
    title: "Connected Information",
    description:
      "Bring relevant customer, operational and business information into more coordinated systems.",
  },
  {
    title: "Clearer Workflows",
    description:
      "Define how tasks move between people, teams and applications across your organisation.",
  },
  {
    title: "Better Business Visibility",
    description:
      "Use structured records and reporting views to help teams understand business activity.",
  },
  {
    title: "Room to Grow",
    description:
      "Plan systems around current requirements while considering future processes and integrations.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Review your business structure, teams, workflows and existing applications.",
  },
  {
    number: "02",
    title: "Map Processes",
    description:
      "Identify the information, activities and systems that need to work together.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Define the system structure, features, permissions and integration requirements.",
  },
  {
    number: "04",
    title: "Develop & Integrate",
    description:
      "Build or configure the agreed solution and connect relevant applications.",
  },
  {
    number: "05",
    title: "Review & Improve",
    description:
      "Evaluate how the system supports daily operations and identify improvements.",
  },
];

export default function CRMERPBusinessSystemsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              CRM, ERP & Business Systems
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Connect Your Business.
              <span className="block text-emerald-400">
                Simplify Every Process.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Bring customer relationships, operational activities and
              business information into connected systems. OPV AI Realty Tech
              helps organisations explore CRM, ERP and custom business
              applications designed around the way they work.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Discuss Your Business Systems
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
              Connected information. Coordinated teams. Smarter operations.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                    OPV BUSINESS SYSTEMS
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    Connected Operations
                  </h2>
                </div>

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                  <Layers3 size={28} />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Users className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">CRM</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Customers, leads and sales relationships.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Building2 className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">ERP</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Business resources and operations.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Workflow className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">Workflows</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Tasks, approvals and automation.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <BarChart3 className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">Reporting</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Business information and insights.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-4">
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-emerald-300"
                />
                <p className="text-sm text-slate-200">
                  Systems shaped around your business processes
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
            One connected business environment
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Bring Your Business Processes Together
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            When customer records, operational activities and business data
            are spread across disconnected tools, teams can find it difficult
            to coordinate work. CRM and ERP systems offer structured ways to
            manage different parts of an organisation. With suitable
            integrations and workflows, these systems can support a more
            connected operating environment.
          </p>
        </div>
      </section>

      {/* CRM VS ERP */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Understanding business systems
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              CRM and ERP Work Together
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              They serve different purposes, but can be connected to support
              a wider view of business operations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <Users size={28} />
              </div>

              <h3 className="mt-5 text-2xl font-bold">CRM — Customer Focus</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Customer Relationship Management systems help organise
                customer information and coordinate sales and service
                activities.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Lead and enquiry tracking",
                  "Customer information",
                  "Sales pipeline management",
                  "Follow-up activities",
                  "Customer communication history",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <Building2 size={28} />
              </div>

              <h3 className="mt-5 text-2xl font-bold">ERP — Operations Focus</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Enterprise Resource Planning systems help coordinate
                operational resources, processes and business information.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Inventory and procurement",
                  "Finance and administration",
                  "Resource planning",
                  "Operational records",
                  "Business reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Our capabilities
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            CRM, ERP & Business Technology Services
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Explore systems and development capabilities that can help
            organise your business operations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
              >
                <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-xl font-bold">{service.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* BUSINESS FUNCTIONS */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Across your organisation
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Support for Key Business Functions
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Systems can be planned around the different teams and processes
              that keep your business moving.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {businessFunctions.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
                      <Icon size={25} />
                    </div>

                    <h3 className="text-xl font-bold">{area.title}</h3>
                  </div>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-1 shrink-0 text-emerald-600"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Business value
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            A More Connected Way to Work
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Well-planned business systems can help teams coordinate activities
            and access the information they need.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <p className="text-sm font-bold text-emerald-600">
                BENEFIT 0{index + 1}
              </p>

              <h3 className="mt-4 text-xl font-bold">{benefit.title}</h3>

              <p className="mt-3 leading-7 text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Our approach
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From Business Processes to Connected Systems
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              We start by understanding how your organisation works, then
              shape a system approach around its requirements.
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

      {/* CTA */}
      <section className="px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-600 px-7 py-14 text-center text-white sm:px-14">
          <div className="mx-auto inline-flex rounded-2xl bg-white/15 p-3">
            <Rocket size={28} />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold sm:text-4xl">
            Ready to Connect Your Business Systems?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Tell us about your customer management, operational or software
            requirements. Let's explore a suitable business systems solution.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Discuss Your Requirements
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}