
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
      "Streamline daily operations with business process automation, intelligent workflow automation and connected CRM and ERP systems.",
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
      "Apply generative AI, AI agent development, intelligent chatbots and AI integration services to customer interactions and business processes.",
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
      "Create responsive websites, mobile applications and connected digital experiences that help businesses engage and serve customers.",
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
      "Connect digital marketing, lead generation, custom CRM development and sales automation to organize customer acquisition and follow-ups.",
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
      "Bring business data together through business intelligence, analytics dashboards, AI-assisted reporting and performance insights.",
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
      "Integrate APIs, cloud services, SaaS applications, CRM and ERP platforms into a connected business technology ecosystem.",
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
      "Turn business ideas into custom websites, Android and iOS applications, enterprise software and scalable SaaS products.",
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
      "Establish scalable digital foundations with cloud technology, software optimization, intelligent automation and ongoing innovation.",
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
      className="scroll-mt-24 overflow-hidden bg-white py-20 sm:py-8 lg:py-8"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION INTRO */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-[#F8F6F0] px-4 py-2">
            <Sparkles className="h-4 w-4 text-[#075B3B]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              Technology With Purpose
            </span>
          </div>

          <h2
            id="business-outcomes-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#263C50] sm:text-4xl lg:text-5xl"
          >
            Technology That
            <span className="mt-2 block text-[#075B3B]">
              Creates Business Value.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#526577] sm:text-base">
            Technology should do more than simply function.
            It should help businesses work smarter, serve
            customers better, make informed decisions and
            build stronger digital foundations for growth.
            Our AI development, software engineering and
            business automation capabilities support
            organizations in Hyderabad and across India.
          </p>
        </div>

        {/* OUTCOMES GRID */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {outcomes.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative flex flex-col rounded-2xl border border-[#E5E9E3] bg-white p-6 shadow-[0_8px_25px_rgba(38,60,80,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-[0_18px_45px_rgba(38,60,80,0.09)]"
              >

                {/* TOP ROW */}
                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F6F1] text-[#075B3B] transition duration-300 group-hover:bg-[#075B3B] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-sm font-extrabold tracking-wider text-[#C6A052]">
                    {item.number}
                  </span>
                </div>

                {/* CONTENT */}
                <h3 className="mt-6 text-lg font-extrabold leading-7 text-[#263C50] transition-colors group-hover:text-[#075B3B]">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-7 text-[#526577]">
                  {item.description}
                </p>

                {/* BENEFITS */}
                <div className="mt-5 space-y-3 border-t border-[#E8EAE5] pt-5">

                  {item.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#075B3B]" />

                      <span className="text-[11px] font-medium leading-5 text-[#526577]">
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
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] p-8 sm:p-12 lg:p-14">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#075B3B]/[0.04] blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#C6A052]/[0.05] blur-[100px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div className="max-w-2xl">

              <div className="flex items-center gap-2 text-[#075B3B]">
                <ShieldCheck className="h-4 w-4" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">
                  Business-First Technology
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold leading-tight text-[#263C50] sm:text-3xl lg:text-4xl">
                Technology Should Work
                <span className="block text-[#075B3B]">
                  for Your Business.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-8 text-[#526577]">
                Whether you want to launch a digital product,
                streamline business operations, implement
                AI agents and automation, develop custom CRM
                or ERP software, or strengthen your digital
                growth strategy, we help explore technology
                solutions aligned with your business objectives.
              </p>
            </div>

            <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#075B3B] px-7 py-4 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(7,91,59,0.12)] transition hover:-translate-y-1 hover:bg-[#06472F]"
              >
                Discuss Your Business

                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="#solutions"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-semibold text-[#075B3B] transition hover:border-[#075B3B] hover:bg-[#F0F6F1]"
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
