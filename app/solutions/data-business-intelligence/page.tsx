import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Database,
  FileBarChart,
  Filter,
  Gauge,
  LineChart,
  PieChart,
  RefreshCw,
  Rocket,
  Search,
  Table2,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data & Business Intelligence | OPV AI Realty Tech",
  description:
    "Turn business data into useful insights with analytics, business intelligence dashboards, data integration, reporting and visualisation solutions from OPV AI Realty Tech.",
  alternates: {
    canonical: "/solutions/data-business-intelligence",
  },
  openGraph: {
    title: "Data & Business Intelligence | OPV AI Realty Tech",
    description:
      "Make informed business decisions with connected data, analytics and business intelligence solutions.",
    url: "/solutions/data-business-intelligence",
    type: "website",
  },
};

const services = [
  {
    icon: Database,
    title: "Data Management & Integration",
    description:
      "Organise data from relevant business applications and sources to create a more connected view of your information.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence Dashboards",
    description:
      "Plan interactive dashboards that present important business metrics and performance indicators in clear visual formats.",
  },
  {
    icon: FileBarChart,
    title: "Business Reporting",
    description:
      "Create structured reports to help teams review operational activity, sales performance and business results.",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description:
      "Explore historical and current business data to identify patterns, trends and areas that may need attention.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Data Insights",
    description:
      "Explore AI-supported approaches for querying business information, summarising data and assisting analysis.",
  },
  {
    icon: Workflow,
    title: "Reporting Automation",
    description:
      "Reduce repetitive reporting tasks through suitable data workflows, scheduled processes and system integrations.",
  },
];

const analyticsAreas = [
  {
    icon: Users,
    title: "Sales & Customer Analytics",
    description:
      "Understand sales activity, customer interactions, lead performance and conversion trends.",
  },
  {
    icon: Gauge,
    title: "Operational Analytics",
    description:
      "Review process activity, resource utilisation, service performance and operational indicators.",
  },
  {
    icon: PieChart,
    title: "Financial & Business Reporting",
    description:
      "Organise financial and management information into reports that support business reviews.",
  },
  {
    icon: Search,
    title: "Trend & Performance Analysis",
    description:
      "Explore patterns in business data and identify changes that may inform future planning.",
  },
];

const capabilities = [
  "Data consolidation and integration",
  "Business intelligence dashboards",
  "Sales and marketing analytics",
  "Customer and lead reporting",
  "Operational performance dashboards",
  "Management and executive reports",
  "Data visualisation",
  "Automated reporting workflows",
  "AI-assisted data exploration",
  "Custom analytics applications",
];

const benefits = [
  {
    title: "A Clearer View of Performance",
    description:
      "Bring relevant metrics together to help teams understand business activity and performance.",
  },
  {
    title: "More Informed Decisions",
    description:
      "Use organised information and analysis to support business discussions and planning.",
  },
  {
    title: "Less Manual Reporting",
    description:
      "Explore automation opportunities for recurring reports and information workflows.",
  },
  {
    title: "Connected Business Information",
    description:
      "Create a more consistent view of information across relevant applications and data sources.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business questions, reporting needs and available data sources.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Identify relevant data sources and plan how the information can be organised.",
  },
  {
    number: "03",
    title: "Analyse",
    description:
      "Define useful metrics, reporting structures and analytical requirements.",
  },
  {
    number: "04",
    title: "Visualise",
    description:
      "Design dashboards and reports that communicate information clearly.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review the solution and refine reporting as business needs evolve.",
  },
];

function Users({
  size = 24,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function DataBusinessIntelligencePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Data & Business Intelligence
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn Business Data
              <span className="block text-emerald-400">
                Into Better Decisions.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Make your business information more useful. OPV AI Realty Tech
              helps organisations explore data integration, analytics,
              business intelligence dashboards and reporting solutions that
              support better visibility and informed decision-making.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Discuss Your Data Project
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
              Connected data. Clear insights. Informed decisions.
            </p>
          </div>

          {/* HERO DASHBOARD VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                    OPV BUSINESS INTELLIGENCE
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    Business Performance
                  </h2>
                </div>

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                  <BarChart3 size={28} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-[#10233a] p-4">
                  <p className="text-xs text-slate-400">Sales Overview</p>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-2xl font-bold text-white">Analytics</p>
                    <LineChart className="text-emerald-400" size={24} />
                  </div>
                  <div className="mt-4 flex h-12 items-end gap-1.5">
                    {[35, 55, 42, 75, 60, 88, 70, 100].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-sm bg-emerald-400/70"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#10233a] p-4">
                  <p className="text-xs text-slate-400">Business Reports</p>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-2xl font-bold text-white">Reports</p>
                    <FileBarChart className="text-emerald-400" size={24} />
                  </div>
                  <div className="mt-5 space-y-2">
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-4/5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-3/5 rounded-full bg-emerald-400/70" />
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-2/3 rounded-full bg-emerald-400/50" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-[#10233a] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Connected Data Sources
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Information from business applications
                    </p>
                  </div>
                  <Database className="text-emerald-400" size={25} />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["CRM", "ERP", "Website", "Sales", "Operations"].map(
                    (source) => (
                      <span
                        key={source}
                        className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300"
                      >
                        {source}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-4">
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-emerald-300"
                />
                <p className="text-sm text-slate-200">
                  Business information presented with clarity
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
            Make information more useful
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            See the Bigger Picture Behind Your Business Data
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Businesses generate information across sales, customer
            interactions, finance, operations and digital platforms.
            Business intelligence brings relevant information together
            through reporting, analysis and visualisation. This helps teams
            explore what is happening, identify patterns and ask better
            business questions.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Our capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Data & Business Intelligence Services
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore practical ways to organise, analyse and present your
              organisation's business information.
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

                  <h3 className="mt-6 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ANALYTICS AREAS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Across your organisation
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Analytics for Different Business Functions
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            The right reports and dashboards depend on the questions your
            business needs to answer.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {analyticsAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                  <Icon size={25} />
                </div>

                <h3 className="mt-5 text-xl font-bold">{area.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* CAPABILITIES CHECKLIST */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                What we can help you explore
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                From Raw Information to Useful Business Insights
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Every organisation has different reporting needs. We help
                define the information, metrics and visualisations that are
                relevant to your business objectives.
              </p>

              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-800"
              >
                Discuss your analytics requirements
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
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Business value
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Make Data Work for Your Business
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            A well-planned analytics approach can help teams move from
            scattered information to more consistent business reporting.
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
              From Business Questions to Clear Insights
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A structured process helps keep data and reporting work
              connected to the decisions your organisation needs to make.
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
            Ready to Make Better Use of Your Business Data?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Tell us about your reporting, analytics and data requirements.
            Let's explore how business intelligence can support your
            organisation.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Discuss Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}