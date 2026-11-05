
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Users,
  Workflow,
  Database,
  TrendingUp,
  Target,
  Rocket,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const outcomes = [
  {
    number: "01",
    icon: Workflow,
    title: "Simplify Business Operations",
    description:
      "Streamline everyday business activities with connected systems, intelligent workflows and digital processes.",
    benefits: [
      "Reduce repetitive manual tasks",
      "Connect business workflows",
      "Improve operational visibility",
    ],
  },
  {
    number: "02",
    icon: Bot,
    title: "Leverage Artificial Intelligence",
    description:
      "Apply AI capabilities to customer interactions, business processes, knowledge assistance and decision support.",
    benefits: [
      "AI-powered business assistance",
      "Intelligent customer interactions",
      "Automated workflows",
    ],
  },
  {
    number: "03",
    icon: Users,
    title: "Improve Customer Experiences",
    description:
      "Create seamless digital experiences that help businesses communicate with and serve their customers.",
    benefits: [
      "Connected customer journeys",
      "Responsive digital experiences",
      "Better customer engagement",
    ],
  },
  {
    number: "04",
    icon: Target,
    title: "Strengthen Lead & Sales Processes",
    description:
      "Connect marketing, lead management and CRM systems to support more structured sales operations.",
    benefits: [
      "Centralized lead management",
      "Organized follow-up workflows",
      "Sales pipeline visibility",
    ],
  },
  {
    number: "05",
    icon: Database,
    title: "Turn Data Into Insights",
    description:
      "Bring business information together through analytics, dashboards and intelligent reporting.",
    benefits: [
      "Business intelligence dashboards",
      "Performance reporting",
      "Data-driven decisions",
    ],
  },
  {
    number: "06",
    icon: Zap,
    title: "Connect Your Technology",
    description:
      "Integrate applications, APIs, cloud services and business platforms into a connected digital ecosystem.",
    benefits: [
      "API and system integrations",
      "Connected applications",
      "Centralized information flows",
    ],
  },
  {
    number: "07",
    icon: Rocket,
    title: "Launch Digital Products",
    description:
      "Turn business ideas into websites, mobile applications, custom software and scalable SaaS products.",
    benefits: [
      "MVP and product development",
      "Web and mobile applications",
      "SaaS product architecture",
    ],
  },
  {
    number: "08",
    icon: TrendingUp,
    title: "Build for Sustainable Growth",
    description:
      "Establish adaptable digital foundations that support business expansion and changing customer needs.",
    benefits: [
      "Scalable technology systems",
      "Continuous improvement",
      "Technology-led growth",
    ],
  },
];

export default function BusinessOutcomes() {
  return (
    <section
      id="business-outcomes"
      aria-labelledby="business-outcomes-heading"
      className="scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION INTRO */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
            <Sparkles className="h-4 w-4 text-emerald-700" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-800">
              Technology With Purpose
            </span>
          </div>

          <h2
            id="business-outcomes-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#101c2c] sm:text-4xl lg:text-5xl"
          >
            Technology That
            <span className="mt-2 block text-emerald-700">
              Creates Business Value.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
            Technology should do more than simply function.
            It should help businesses work smarter, serve
            customers better, make informed decisions and
            build stronger digital foundations for growth.
          </p>

        </div>

        {/* OUTCOMES GRID */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {outcomes.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]"
              >

                {/* TOP ROW */}

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition duration-300 group-hover:bg-emerald-700 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-sm font-extrabold tracking-wider text-slate-300">
                    {item.number}
                  </span>

                </div>

                {/* CONTENT */}

                <h3 className="mt-6 text-lg font-extrabold leading-7 text-[#142236] transition-colors group-hover:text-emerald-700">
                  {item.title}
                </h3>

                <p className="mt-3 min-h-[105px] text-xs leading-7 text-slate-500">
                  {item.description}
                </p>

                {/* BENEFITS */}

                <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">

                  {item.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />

                      <span className="text-[11px] font-medium leading-5 text-slate-600">
                        {benefit}
                      </span>
                    </div>
                  ))}

                </div>

              </article>
            );
          })}

        </div>

        {/* BUSINESS VALUE BANNER */}

        <div className="relative mt-16 overflow-hidden rounded-3xl bg-[#081a2b] p-8 text-white sm:p-12 lg:p-14">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-emerald-400/[0.10] blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/[0.08] blur-[100px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div className="max-w-2xl">

              <div className="flex items-center gap-2 text-emerald-300">
                <ShieldCheck className="h-4 w-4" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">
                  Business-First Technology
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                Technology Should Work
                <span className="block text-emerald-300">
                  for Your Business.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-8 text-slate-400">
                Whether you want to launch a digital product,
                streamline business operations, implement AI
                or strengthen your digital growth strategy,
                we help explore the technology that fits
                your business objectives.
              </p>

            </div>

            <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-emerald-300 px-7 py-4 text-sm font-extrabold text-[#06111f] transition hover:-translate-y-1 hover:bg-emerald-200"
              >
                Discuss Your Business

                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="#solutions"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-emerald-300/40 hover:text-emerald-300"
              >
                Explore Our Solutions

                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
