
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

// ==========================================
// OPV AI REALTY TECH
// TECHNOLOGY DELIVERY PROCESS
// ==========================================

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand the Business",
    description:
      "We understand your business objectives, challenges, audience and existing technology environment before defining the right direction.",
    icon: Search,
    deliverables: [
      "Business requirements",
      "Challenge identification",
      "Project objectives",
    ],
  },
  {
    number: "02",
    title: "Strategise",
    subtitle: "Define the Right Direction",
    description:
      "We evaluate opportunities, identify suitable technologies and create a practical roadmap aligned with your business goals.",
    icon: Lightbulb,
    deliverables: [
      "Technology strategy",
      "Project roadmap",
      "Solution planning",
    ],
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Create the Experience",
    description:
      "We plan user journeys, interfaces, application architecture and the overall experience around your users and requirements.",
    icon: Palette,
    deliverables: [
      "UI/UX design",
      "User journeys",
      "Solution architecture",
    ],
  },
  {
    number: "04",
    title: "Develop",
    subtitle: "Build the Solution",
    description:
      "We develop the agreed websites, applications, software platforms and digital products using suitable technologies.",
    icon: Code2,
    deliverables: [
      "Software development",
      "Application features",
      "Quality reviews",
    ],
  },
  {
    number: "05",
    title: "Integrate",
    subtitle: "Connect Your Systems",
    description:
      "We connect relevant applications, APIs, databases and third-party services to create coordinated technology workflows.",
    icon: Plug,
    deliverables: [
      "API integrations",
      "System connectivity",
      "Data workflows",
    ],
  },
  {
    number: "06",
    title: "Automate",
    subtitle: "Make Work Smarter",
    description:
      "We identify suitable opportunities to introduce AI, automation and intelligent workflows into business operations.",
    icon: Workflow,
    deliverables: [
      "AI opportunities",
      "Workflow automation",
      "Process improvement",
    ],
  },
  {
    number: "07",
    title: "Optimise",
    subtitle: "Improve Performance",
    description:
      "We review functionality, user experience and relevant performance indicators to identify opportunities for improvement.",
    icon: Gauge,
    deliverables: [
      "Performance reviews",
      "User experience improvements",
      "Optimisation planning",
    ],
  },
  {
    number: "08",
    title: "Scale",
    subtitle: "Grow with Technology",
    description:
      "We help plan future enhancements, additional capabilities and technology improvements as your business evolves.",
    icon: Rocket,
    deliverables: [
      "Growth planning",
      "Platform enhancements",
      "Future roadmap",
    ],
  },
];

// ==========================================
// DELIVERY PRINCIPLES
// ==========================================

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

// ==========================================
// DELIVERY FRAMEWORK
// ==========================================

const deliveryPhases = [
  {
    title: "Business Understanding",
    range: "01 – 02",
  },
  {
    title: "Solution Creation",
    range: "03 – 04",
  },
  {
    title: "Connected Execution",
    range: "05 – 06",
  },
  {
    title: "Continuous Growth",
    range: "07 – 08",
  },
];

// ==========================================
// APPROACH SECTION
// ==========================================

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">

        {/* SECTION HEADER */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-[#F0F6F1] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#075B3B]">
            <Workflow size={15} />
            Our Approach
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#263C50] sm:text-4xl lg:text-5xl">
            From Business Challenges
            <span className="block text-[#075B3B]">
              to Intelligent Solutions.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#526577] sm:text-lg">
            We follow a structured, business-focused
            approach to understand your requirements,
            design the right solution and build
            technology that supports your
            business objectives.
          </p>
        </div>

        {/* ======================================
            EIGHT DELIVERY STAGES
        ====================================== */}

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group flex h-full flex-col rounded-2xl border border-[#E5E9E3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-[0_15px_40px_rgba(38,60,80,0.07)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F6F1] text-[#075B3B] transition group-hover:bg-[#075B3B] group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <span className="text-2xl font-extrabold text-[#D4DCD7] transition group-hover:text-[#C6A052]">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#263C50]">
                  {step.title}
                </h3>

                <p className="mt-1 text-sm font-semibold text-[#075B3B]">
                  {step.subtitle}
                </p>

                <p className="mt-4 text-sm leading-7 text-[#526577]">
                  {step.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="border-t border-[#E5E9E3] pt-4">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#647586]">
                      Key Activities
                    </p>

                    <ul className="space-y-2">
                      {step.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs leading-5 text-[#526577]"
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-[#075B3B]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ======================================
            OPV DELIVERY FRAMEWORK
        ====================================== */}

        <div className="mt-16 rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            {/* FRAMEWORK INTRODUCTION */}

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
                The OPV Way
              </p>

              <h3 className="mt-4 text-3xl font-extrabold leading-tight text-[#263C50] sm:text-4xl">
                More Than Development.
                <span className="block text-[#075B3B]">
                  A Business Growth Partnership.
                </span>
              </h3>

              <p className="mt-5 leading-8 text-[#526577]">
                Technology creates value when it
                addresses real business needs.
                Our approach brings together strategy,
                design, engineering, integration
                and continuous improvement to
                create meaningful digital solutions.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#06472F]"
              >
                Start Your Project
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* FOUR DELIVERY PHASES */}

            <div className="rounded-2xl border border-[#E5E9E3] bg-white p-6 sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#647586]">
                Our Delivery Framework
              </p>

              <div className="mt-7 space-y-4">
                {deliveryPhases.map((phase, index) => (
                  <div
                    key={phase.title}
                    className="flex items-center gap-4 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F0F6F1] text-[#075B3B]">
                      <CheckCircle2 size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-[#263C50]">
                        {phase.title}
                      </p>

                      <p className="mt-1 text-xs text-[#647586]">
                        Steps {phase.range}
                      </p>
                    </div>

                    <span className="text-xs font-extrabold text-[#C6A052]">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ======================================
            FOUR DELIVERY PRINCIPLES
        ====================================== */}

        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              What Guides Us
            </p>

            <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-[#263C50] sm:text-4xl">
              Principles Behind Every Solution
            </h3>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-6 transition hover:border-[#075B3B]/25 hover:shadow-[0_10px_30px_rgba(38,60,80,0.05)]"
              >
                <p className="text-sm font-extrabold text-[#C6A052]">
                  0{index + 1}
                </p>

                <h4 className="mt-4 text-lg font-extrabold text-[#263C50]">
                  {principle.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#526577]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ======================================
            FINAL CALL TO ACTION
        ====================================== */}

        <div className="mt-20 rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] px-6 py-12 text-center sm:px-10 sm:py-14">
          <h3 className="text-2xl font-extrabold text-[#263C50] sm:text-3xl">
            Have a Business Challenge We Can Solve?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#526577]">
            Tell us about your goals and requirements.
            Let&apos;s explore the right technology
            approach for your organization.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
          >
            Let&apos;s Build Together
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
