
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
      "We understand your business model, customers, challenges, requirements and objectives before defining the right AI, software or automation solution.",
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
      "We create a practical technology roadmap for custom software development, AI integration, SaaS products and digital transformation.",
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
      "We design intuitive user experiences, responsive interfaces and scalable product architectures for websites, mobile apps and enterprise applications.",
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
      "Our development process covers custom software, website development, mobile app development, SaaS applications and AI-powered digital products.",
    deliverables: [
      "Software Engineering",
      "Web & Mobile Development",
      "SaaS Product Development",
    ],
  },
  {
    number: "05",
    icon: PlugZap,
    title: "Integrate",
    subtitle: "Connect Your Ecosystem",
    description:
      "We connect APIs, AI agents, chatbots, databases, CRM and ERP systems, payment gateways and third-party business applications.",
    deliverables: [
      "API Integration",
      "AI Integration Services",
      "System Connectivity",
    ],
  },
  {
    number: "06",
    icon: Workflow,
    title: "Automate",
    subtitle: "Make Business Smarter",
    description:
      "We streamline repetitive operations with intelligent workflow automation, business process automation, CRM automation and AI assistants.",
    deliverables: [
      "Workflow Automation",
      "CRM & WhatsApp Automation",
      "AI Agents & Assistants",
    ],
  },
  {
    number: "07",
    icon: BarChart3,
    title: "Optimize",
    subtitle: "Improve Performance",
    description:
      "We evaluate application performance, review business analytics, identify improvement opportunities and refine digital systems.",
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
      "We help businesses expand their technology ecosystems through scalable cloud architecture, software enhancements and ongoing digital innovation.",
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
      className="scroll-mt-24 overflow-hidden bg-white py-20 text-[#263C50] sm:py-8 lg:py-8"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION INTRO */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-[#F8F6F0] px-4 py-2">
            <Sparkles className="h-4 w-4 text-[#075B3B]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              How We Work
            </span>
          </div>

          <h2
            id="approach-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#263C50] sm:text-4xl lg:text-5xl"
          >
            From Business Challenge
            <span className="mt-2 block text-[#075B3B]">
              To Digital Advantage.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#526577] sm:text-base">
            Every successful digital solution begins with
            understanding the business. Our structured
            approach combines strategy, design, software
            engineering, AI development and intelligent
            automation to build technology solutions
            for businesses in Hyderabad and across India.
          </p>
        </div>

        {/* PROCESS OVERVIEW */}
        <div className="mt-14 rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] p-5 sm:p-7 lg:p-9">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
                The OPV Delivery Framework
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-[#263C50] sm:text-2xl">
                Eight Stages. One Connected Vision.
              </h3>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-[10px] font-bold text-[#075B3B]">
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

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#075B3B]/20 bg-white text-xs font-extrabold text-[#075B3B] shadow-sm">
                    {step.number}
                  </div>

                  <span className="mt-3 text-[10px] font-bold text-[#526577]">
                    {step.title}
                  </span>
                </div>

                {index !== processSteps.length - 1 && (
                  <div className="mx-2 mb-5 h-px flex-1 bg-[#C6A052]/40" />
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
                className="group relative flex flex-col rounded-2xl border border-[#E5E9E3] bg-white p-6 shadow-[0_8px_25px_rgba(38,60,80,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-[0_18px_45px_rgba(38,60,80,0.09)]"
              >

                {/* CARD TOP */}
                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#075B3B]/10 bg-[#F0F6F1] text-[#075B3B] transition duration-300 group-hover:bg-[#075B3B] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-3xl font-extrabold tracking-tight text-[#C6A052]/45 transition group-hover:text-[#C6A052]">
                    {step.number}
                  </span>
                </div>

                {/* STEP CONTENT */}
                <p className="mt-7 text-[9px] font-extrabold uppercase tracking-[0.17em] text-[#075B3B]">
                  Stage {step.number}
                </p>

                <h3 className="mt-3 text-xl font-extrabold text-[#263C50]">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs font-semibold text-[#075B3B]">
                  {step.subtitle}
                </p>

                <p className="mt-4 text-[12px] leading-7 text-[#526577]">
                  {step.description}
                </p>

                {/* DELIVERABLES */}
                <div className="mt-5 space-y-3 border-t border-[#E8EAE5] pt-5">

                  <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#647586]">
                    Key Activities
                  </p>

                  {step.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#075B3B]" />

                      <span className="text-[11px] leading-5 text-[#526577]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* SEQUENTIAL INDICATOR */}
                {index !== processSteps.length - 1 && (
                  <div className="pointer-events-none absolute -bottom-3 -right-2 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-[#075B3B]/20 bg-white text-[#075B3B] shadow-sm lg:flex">
                    <ArrowRight className="h-3 w-3" />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* CLOSING MESSAGE */}
        <div className="mt-14 grid gap-7 rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.20em] text-[#075B3B]">
              Beyond Development
            </p>

            <h3 className="mt-4 text-2xl font-extrabold leading-tight text-[#263C50] sm:text-3xl">
              We Build Technology Around
              <span className="text-[#075B3B]">
                {" "}Your Business.
              </span>
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#526577]">
              Whether you are launching a startup,
              modernizing business operations or
              creating a new SaaS product, OPV AI Realty Tech
              brings technology and business thinking
              together throughout the development journey.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#075B3B] px-7 py-4 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(7,91,59,0.12)] transition hover:-translate-y-1 hover:bg-[#06472F]"
          >
            Start Your Project

            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
