import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  FileText,
  Gauge,
  Globe,
  Layers3,
  LockKeyhole,
  Network,
  RefreshCw,
  Rocket,
  Server,
  Settings,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise & Corporate Technology Solutions | OPV AI Realty Tech",
  description:
    "Explore enterprise software development, AI automation, ERP and CRM integration, cloud infrastructure, cybersecurity, analytics and digital transformation solutions.",
  alternates: {
    canonical: "/industries/enterprise-corporate",
  },
  openGraph: {
    title: "Enterprise & Corporate Technology Solutions | OPV AI Realty Tech",
    description:
      "Modernise enterprise operations with connected software, AI, automation, cloud and business technology solutions.",
    url: "/industries/enterprise-corporate",
    type: "website",
  },
};

const solutions = [
  {
    icon: Code2,
    title: "Enterprise Software Development",
    description:
      "Design and develop business applications, internal platforms and custom software around complex organisational requirements.",
  },
  {
    icon: Bot,
    title: "Enterprise AI & Automation",
    description:
      "Explore AI assistants, intelligent business workflows and automation opportunities across departments.",
  },
  {
    icon: BriefcaseBusiness,
    title: "ERP, CRM & Business Systems",
    description:
      "Connect customer management, operational processes and business information through integrated applications.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Solutions",
    description:
      "Plan cloud environments, application infrastructure and digital platforms according to organisational requirements.",
  },
  {
    icon: Database,
    title: "Enterprise Data & Analytics",
    description:
      "Organise business information through data integration, reporting, analytics and management dashboards.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & IT Solutions",
    description:
      "Consider application security, infrastructure protection, user access and technology risk management.",
  },
  {
    icon: Network,
    title: "System Integration",
    description:
      "Connect business applications, databases, APIs and third-party platforms to support coordinated information flows.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Streamline suitable workflows across sales, finance, operations, administration and customer service.",
  },
];

const businessTypes = [
  {
    title: "Large Corporate Organisations",
    description:
      "Custom applications, connected business systems, automation and technology modernisation.",
  },
  {
    title: "Multi-Location Businesses",
    description:
      "Digital platforms and reporting systems to coordinate business information across locations.",
  },
  {
    title: "Professional Service Organisations",
    description:
      "Client management systems, service portals, workflow automation and business applications.",
  },
  {
    title: "Enterprise Groups",
    description:
      "Technology planning, system integrations, analytics and connected operational platforms.",
  },
  {
    title: "Financial & Business Services",
    description:
      "Business applications, customer workflows, reporting and technology infrastructure planning.",
  },
  {
    title: "Established Growing Companies",
    description:
      "Modernisation of existing applications, cloud solutions and scalable business systems.",
  },
];

const capabilities = [
  "Enterprise website development",
  "Custom business applications",
  "Enterprise software architecture",
  "ERP and CRM integration",
  "AI assistants and automation",
  "Business process automation",
  "Cloud infrastructure planning",
  "Application modernisation",
  "Data integration and reporting",
  "Business intelligence dashboards",
  "Cybersecurity considerations",
  "API and third-party integrations",
];

const benefits = [
  {
    title: "Connected Business Operations",
    description:
      "Coordinate relevant business information and workflows across teams, departments and applications.",
  },
  {
    title: "Improved Information Visibility",
    description:
      "Use structured data, reporting and dashboards to help management teams review business activity.",
  },
  {
    title: "More Efficient Workflows",
    description:
      "Identify repetitive activities and opportunities for suitable automation across organisational processes.",
  },
  {
    title: "Technology Built for Evolution",
    description:
      "Plan maintainable applications and integrations that can adapt as organisational requirements change.",
  },
];

const enterpriseAreas = [
  {
    icon: Users,
    title: "People & Customer Operations",
    description:
      "Explore connected customer management, internal communication and employee-facing applications.",
  },
  {
    icon: Settings,
    title: "Business Operations",
    description:
      "Coordinate workflows, approvals, administration and operational information across departments.",
  },
  {
    icon: Database,
    title: "Data & Information",
    description:
      "Organise relevant information sources, reporting requirements and business intelligence workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Technology & Security",
    description:
      "Consider infrastructure, application security, access management and integration requirements.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand organisational objectives, departments, users and current technology environments.",
  },
  {
    number: "02",
    title: "Strategise",
    description:
      "Define priorities, project scope, system requirements and the proposed technology approach.",
  },
  {
    number: "03",
    title: "Architect & Develop",
    description:
      "Design and build the agreed applications, platforms, integrations and workflows.",
  },
  {
    number: "04",
    title: "Integrate & Validate",
    description:
      "Connect relevant systems and review functionality, data flows and security considerations.",
  },
  {
    number: "05",
    title: "Optimise",
    description:
      "Review business needs and identify further improvements as technology and operations evolve.",
  },
];

export default function EnterpriseCorporatePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Enterprise & Corporate Technology
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transform Your Enterprise.
              <span className="block text-emerald-400">
                Engineer What's Next.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Modernise business operations with custom software, enterprise
              AI, connected systems, cloud infrastructure and intelligent
              automation. OPV AI Realty Tech helps organisations explore
              technology aligned with their operational needs and strategic
              objectives.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Discuss Your Enterprise Project
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
              Enterprise technology. Connected operations. Intelligent growth.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur sm:p-8">

              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                    OPV ENTERPRISE TECHNOLOGY
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-white">
                    Connected Enterprise Ecosystem
                  </h2>
                </div>

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                  <Building2 size={28} />
                </div>
              </div>

              <div className="mt-7 flex items-center gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <div className="rounded-xl bg-emerald-400/15 p-3 text-emerald-300">
                  <Layers3 size={30} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Enterprise Technology Platform
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Connected applications and business systems
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Bot className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Enterprise AI
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Intelligent business workflows.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <BriefcaseBusiness
                    className="mb-4 text-emerald-400"
                    size={26}
                  />
                  <h3 className="font-semibold text-white">
                    Business Systems
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Connected operations and management.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Cloud className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Cloud Technology
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Infrastructure and applications.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <BarChart3 className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Business Intelligence
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Data, reports and insights.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-[#10233a] px-4 py-4">
                <ShieldCheck
                  size={21}
                  className="shrink-0 text-emerald-300"
                />
                <p className="text-sm text-slate-200">
                  Technology planned around organisational requirements
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
            The future of enterprise technology
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Build a Connected and Intelligent Business Environment
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Enterprises manage interconnected departments, business
            applications, customer relationships, data and operational
            workflows. Technology can help coordinate these activities
            through integrated systems, custom applications and intelligent
            automation. A strong digital foundation begins with understanding
            organisational priorities and defining a suitable technology
            strategy.
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
              Enterprise & Corporate Technology Solutions
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore software, AI, cloud, automation and integration
              capabilities for established businesses and enterprise
              organisations.
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
            Technology for Different Enterprise Models
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Every organisation has different structures, teams, systems
            and operational priorities. Technology should reflect those
            differences.
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

      {/* ENTERPRISE AREAS */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Connected enterprise operations
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Connect Technology Across Your Organisation
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A connected technology environment brings people, processes,
              information and infrastructure into a coordinated business
              ecosystem.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {enterpriseAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <div className="inline-flex rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {area.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIGITAL TRANSFORMATION */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Technology capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A Connected Digital Foundation for Enterprises
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              From enterprise applications to AI, cloud infrastructure and
              business intelligence, we help identify technology capabilities
              that fit your organisation's requirements.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              Discuss your enterprise requirements
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Enterprise websites and platforms",
              "Custom software applications",
              "AI assistants and automation",
              "ERP and CRM integrations",
              "Cloud infrastructure planning",
              "Enterprise application modernisation",
              "Data analytics and dashboards",
              "Business process automation",
              "API and system integrations",
              "Identity and access considerations",
              "Cybersecurity planning",
              "Technology improvement strategies",
            ].map((item) => (
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
            Technology That Supports Enterprise Growth
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Thoughtfully planned technology can help organisations
            coordinate operations, improve information visibility and
            adapt to changing business requirements.
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
              From Enterprise Strategy to Connected Technology
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A structured process helps align technology projects with
              organisational objectives, technical requirements and
              operational priorities.
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
            Ready to Modernise Your Enterprise?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Tell us about your organisational goals, existing systems and
            technology requirements. Let's explore how custom software,
            AI, cloud and automation can support your next stage of growth.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Discuss Your Enterprise Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}