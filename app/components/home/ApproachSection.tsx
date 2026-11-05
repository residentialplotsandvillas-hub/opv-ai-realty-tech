
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Lightbulb,
  PenTool,
  Code2,
  PlugZap,
  Workflow,
  BarChart3,
  Rocket,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    subtitle: "Understand the Business",
    description:
      "We understand your business model, customers, challenges, requirements and objectives before defining the right solution.",
    deliverables: [
      "Business Discovery",
      "Requirements Analysis",
      "Goal Identification",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategize",
    subtitle: "Plan the Right Direction",
    description:
      "We develop a practical technology roadmap, select suitable approaches and define the architecture for your solution.",
    deliverables: [
      "Technology Strategy",
      "Solution Planning",
      "Project Roadmap",
    ],
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design",
    subtitle: "Create the Experience",
    description:
      "We create intuitive user experiences, thoughtful interfaces and scalable solution designs around your business needs.",
    deliverables: [
      "UI/UX Design",
      "Product Architecture",
      "Experience Planning",
    ],
  },
  {
    number: "04",
    icon: Code2,
    title: "Develop",
    subtitle: "Build the Solution",
    description:
      "We develop websites, applications, SaaS platforms, custom software and intelligent digital products.",
    deliverables: [
      "Software Engineering",
      "Web & Mobile Development",
      "Product Development",
    ],
  },
  {
    number: "05",
    icon: PlugZap,
    title: "Integrate",
    subtitle: "Connect Your Ecosystem",
    description:
      "We connect APIs, AI capabilities, databases, payment systems and third-party business applications.",
    deliverables: [
      "API Integration",
      "AI Integration",
      "System Connectivity",
    ],
  },
  {
    number: "06",
    icon: Workflow,
    title: "Automate",
    subtitle: "Make Business Smarter",
    description:
      "We streamline repetitive operations and connect business workflows through intelligent automation.",
    deliverables: [
      "Workflow Automation",
      "CRM Automation",
      "AI Agents & Assistants",
    ],
  },
  {
    number: "07",
    icon: BarChart3,
    title: "Optimize",
    subtitle: "Improve Performance",
    description:
      "We evaluate performance, identify improvement opportunities and refine digital systems based on meaningful insights.",
    deliverables: [
      "Performance Monitoring",
      "Analytics & Reporting",
      "Continuous Improvement",
    ],
  },
  {
    number: "08",
    icon: Rocket,
    title: "Scale",
    subtitle: "Grow With Confidence",
    description:
      "We help evolve your digital ecosystem as your organization expands, adapts and takes on new opportunities.",
    deliverables: [
      "Scalability Planning",
      "Technology Expansion",
      "Ongoing Enhancement",
    ],
  },
];

export default function ApproachSection() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="scroll-mt-24 overflow-hidden bg-[#071525] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION INTRO */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2">
            <Sparkles className="h-4 w-4 text-emerald-300" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-300">
              How We Work
            </span>
          </div>

          <h2
            id="approach-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            From Business Challenge
            <span className="mt-2 block text-emerald-300">
              To Digital Advantage.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
            Every successful digital solution begins with
            understanding the business. Our structured approach
            brings strategy, design, engineering and innovation
            together to build technology that works for you.
          </p>

        </div>

        {/* PROCESS OVERVIEW */}

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-7 lg:p-9">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-emerald-300">
                The OPV Delivery Framework
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
                Eight Stages. One Connected Vision.
              </h3>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2 text-[10px] font-bold text-emerald-300">
              <CheckCircle2 className="h-4 w-4" />
              Business-Focused Approach
            </span>

          </div>

          {/* CONNECTED PROCESS BAR */}

          <div className="mt-9 hidden items-center lg:flex">

            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-1 items-center last:flex-none"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/10 text-xs font-extrabold text-emerald-300">
                    {step.number}
                  </div>

                  <span className="mt-3 text-[10px] font-bold text-slate-300">
                    {step.title}
                  </span>
                </div>

                {index !== processSteps.length - 1 && (
                  <div className="mx-2 mb-5 h-px flex-1 bg-gradient-to-r from-emerald-300/50 to-white/10" />
                )}
              </div>
            ))}

          </div>

        </div>

        {/* PROCESS CARDS */}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative flex flex-col rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#12263a] to-[#0b1a2b] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/35 hover:shadow-[0_18px_45px_rgba(0,0,0,0.2)]"
              >

                {/* CARD TOP */}

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/[0.08] text-emerald-300 transition duration-300 group-hover:bg-emerald-300 group-hover:text-[#06111f]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-3xl font-extrabold tracking-tight text-white/[0.12] transition group-hover:text-emerald-300/30">
                    {step.number}
                  </span>

                </div>

                {/* STEP CONTENT */}

                <p className="mt-7 text-[9px] font-extrabold uppercase tracking-[0.17em] text-emerald-300">
                  Stage {step.number}
                </p>

                <h3 className="mt-3 text-xl font-extrabold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs font-semibold text-slate-300">
                  {step.subtitle}
                </p>

                <p className="mt-4 min-h-[112px] text-[12px] leading-7 text-slate-400">
                  {step.description}
                </p>

                {/* DELIVERABLES */}

                <div className="mt-5 space-y-3 border-t border-white/[0.08] pt-5">

                  <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.16em] text-slate-500">
                    Key Activities
                  </p>

                  {step.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-300" />

                      <span className="text-[11px] leading-5 text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

                {/* SEQUENTIAL INDICATOR */}

                {index !== processSteps.length - 1 && (
                  <div className="pointer-events-none absolute -bottom-3 -right-2 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-emerald-300/20 bg-[#0c1e30] text-emerald-300 lg:flex">
                    <ArrowRight className="h-3 w-3" />
                  </div>
                )}

              </article>
            );
          })}

        </div>

        {/* CLOSING MESSAGE */}

        <div className="mt-14 grid gap-7 rounded-3xl border border-emerald-300/20 bg-gradient-to-r from-[#10372f] to-[#10283b] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.20em] text-emerald-300">
              Beyond Development
            </p>

            <h3 className="mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              We Build Technology Around
              <span className="text-emerald-300">
                {" "}Your Business.
              </span>
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Whether you are launching a startup, modernizing
              business operations or creating a new SaaS product,
              OPV brings technology and business thinking together
              throughout the development journey.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-emerald-300 px-7 py-4 text-sm font-extrabold text-[#06111f] transition hover:-translate-y-1 hover:bg-emerald-200"
          >
            Start Your Project

            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

        </div>

      </div>
    </section>
  );
}
