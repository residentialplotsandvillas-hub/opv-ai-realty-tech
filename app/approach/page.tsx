import Link from "next/link";
import {
  ArrowRight,
  Search,
  Lightbulb,
  Palette,
  Code2,
  Plug,
  Workflow,
  Gauge,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand the Business",
    description:
      "We understand your business objectives, challenges, audience and existing technology environment before defining the right direction.",
    icon: Search,
    deliverables: ["Business requirements", "Challenge identification", "Project objectives"],
  },
  {
    number: "02",
    title: "Strategise",
    subtitle: "Define the Right Direction",
    description:
      "We evaluate opportunities, identify suitable technologies and create a practical roadmap aligned with your business goals.",
    icon: Lightbulb,
    deliverables: ["Technology strategy", "Project roadmap", "Solution planning"],
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Create the Experience",
    description:
      "We plan user journeys, interfaces, application architecture and the overall experience around your users and requirements.",
    icon: Palette,
    deliverables: ["UI/UX design", "User journeys", "Solution architecture"],
  },
  {
    number: "04",
    title: "Develop",
    subtitle: "Build the Solution",
    description:
      "We develop the agreed websites, applications, software platforms and digital products using suitable technologies.",
    icon: Code2,
    deliverables: ["Software development", "Application features", "Quality reviews"],
  },
  {
    number: "05",
    title: "Integrate",
    subtitle: "Connect Your Systems",
    description:
      "We connect relevant applications, APIs, databases and third-party services to create coordinated technology workflows.",
    icon: Plug,
    deliverables: ["API integrations", "System connectivity", "Data workflows"],
  },
  {
    number: "06",
    title: "Automate",
    subtitle: "Make Work Smarter",
    description:
      "We identify suitable opportunities to introduce AI, automation and intelligent workflows into business operations.",
    icon: Workflow,
    deliverables: ["AI opportunities", "Workflow automation", "Process improvement"],
  },
  {
    number: "07",
    title: "Optimise",
    subtitle: "Improve Performance",
    description:
      "We review functionality, user experience and relevant performance indicators to identify opportunities for improvement.",
    icon: Gauge,
    deliverables: ["Performance reviews", "User experience improvements", "Optimisation planning"],
  },
  {
    number: "08",
    title: "Scale",
    subtitle: "Grow with Technology",
    description:
      "We help plan future enhancements, additional capabilities and technology improvements as your business evolves.",
    icon: Rocket,
    deliverables: ["Growth planning", "Platform enhancements", "Future roadmap"],
  },
];

const principles = [
  {
    title: "Business First",
    description:
      "Every technology decision starts with understanding the business problem and intended outcome.",
  },
  {
    title: "User Focused",
    description:
      "We consider the needs of customers, employees and other people who interact with the solution.",
  },
  {
    title: "Technology Driven",
    description:
      "We explore relevant software, AI, cloud and automation capabilities for each project.",
  },
  {
    title: "Built for Evolution",
    description:
      "We consider maintainability, integrations and future requirements during solution planning.",
  },
];

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-emerald-400/10 blur-[110px]" />
        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-amber-300/10 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">

        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
            <Workflow size={15} />
            Our Approach
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            From Business Challenges
            <span className="block text-emerald-600">
              to Intelligent Solutions.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            We follow a structured, business-focused approach to understand
            your requirements, design the right solution and build technology
            that supports your business objectives.
          </p>
        </div>

        {/* PROCESS OVERVIEW */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <span className="text-2xl font-bold text-slate-200 transition group-hover:text-emerald-300">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-1 text-sm font-semibold text-emerald-700">
                  {step.subtitle}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key activities
                  </p>

                  <ul className="space-y-2">
                    {step.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs leading-5 text-slate-600"
                      >
                        <CheckCircle2
                          size={15}
                          className="mt-0.5 shrink-0 text-emerald-600"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* PROCESS MESSAGE */}
        <div className="mt-16 rounded-3xl bg-[#071426] p-8 text-white sm:p-12">

          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                The OPV way
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                More Than Development.
                <span className="block text-emerald-400">
                  A Business Growth Partnership.
                </span>
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Technology creates value when it addresses real business
                needs. Our approach brings together strategy, design,
                engineering, integration and continuous improvement to
                create meaningful digital solutions.
              </p>

              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-400"
              >
                Start Your Project
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* PROCESS FLOW */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">

              <p className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Our delivery framework
              </p>

              <div className="mt-7 space-y-4">
                {[
                  { title: "Business Understanding", range: "01 – 02" },
                  { title: "Solution Creation", range: "03 – 04" },
                  { title: "Connected Execution", range: "05 – 06" },
                  { title: "Continuous Growth", range: "07 – 08" },
                ].map((phase, index) => (
                  <div
                    key={phase.title}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#10233a] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                      <CheckCircle2 size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-white">
                        {phase.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Steps {phase.range}
                      </p>
                    </div>

                    <span className="text-xs font-bold text-emerald-400">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* PRINCIPLES */}
        <div className="mt-20">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              What guides us
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Principles Behind Every Solution
            </h3>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-bold text-emerald-600">
                  0{index + 1}
                </p>

                <h4 className="mt-4 text-lg font-bold text-slate-900">
                  {principle.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Have a Business Challenge We Can Solve?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Tell us about your goals and requirements. Let's explore
            the right technology approach for your organisation.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-7 py-4 font-bold text-white transition hover:bg-emerald-500"
          >
            Let's Build Together
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}