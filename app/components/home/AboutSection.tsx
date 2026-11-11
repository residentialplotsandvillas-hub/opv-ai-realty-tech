
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Code2,
  Compass,
  Globe2,
  Lightbulb,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

const capabilities = [
  "Artificial Intelligence & Intelligent Automation",
  "AI Agents, Chatbots & Generative AI Development",
  "Custom Software & SaaS Development",
  "Website & Mobile Application Development",
  "CRM, ERP & Business Management Systems",
  "Cloud, Data & Business Intelligence",
  "Workflow & WhatsApp Automation",
  "Digital Marketing, SEO, AEO & Lead Generation",
];

const principles = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We embrace emerging technologies and turn forward-thinking ideas into practical business solutions.",
  },
  {
    number: "02",
    icon: Target,
    title: "Business Focused",
    description:
      "We begin with business challenges and build technology around meaningful objectives and outcomes.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Built for Trust",
    description:
      "We value transparency, responsible technology, security and long-term client relationships.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Designed to Scale",
    description:
      "We aim to build adaptable digital systems that can evolve as businesses grow.",
  },
];

const industries = [
  "Real Estate",
  "Retail & E-commerce",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Logistics",
  "Professional Services",
  "Startups & Enterprises",
];

const ecosystem = [
  { icon: BrainCircuit, title: "Artificial Intelligence" },
  { icon: Code2, title: "Software Engineering" },
  { icon: Workflow, title: "Business Automation" },
  { icon: Network, title: "Digital Ecosystems" },
  { icon: Building2, title: "Industry Solutions" },
  { icon: Rocket, title: "Business Growth" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-white py-20 text-[#263C50] sm:py-24 lg:py-28"
    >
      {/* BACKGROUND ACCENTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#075B3B]/[0.035] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#C6A052]/[0.05] blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION INTRO */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-[#F8F6F0] px-4 py-2">
            <Globe2 className="h-4 w-4 text-[#075B3B]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#075B3B]">
              About OPV AI Realty Tech
            </span>
          </div>

          <h2
            id="about-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight text-[#263C50] sm:text-4xl lg:text-5xl"
          >
            Technology.
            <span className="text-[#075B3B]">
              {" "}Intelligence.
            </span>
            <span className="mt-2 block">
              Growth.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#526577] sm:text-lg">
            Building intelligent digital businesses through
            innovation, software engineering, artificial
            intelligence and technology-driven growth.
          </p>
        </div>

        {/* WHO WE ARE */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* COMPANY STORY */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#075B3B]">
              Who We Are
            </p>

            <h3 className="text-3xl font-bold leading-tight tracking-tight text-[#263C50] sm:text-4xl">
              More Than Technology.
              <span className="mt-2 block text-[#075B3B]">
                Built for Business.
              </span>
            </h3>

            <div className="mt-7 space-y-5 text-sm leading-8 text-[#526577] sm:text-base">
              <p>
                <strong className="font-semibold text-[#263C50]">
                  OPV AI Realty Tech Private Limited
                </strong>{" "}
                is a Hyderabad-based AI-powered business
                technology and growth company focused on
                helping organizations build, transform and
                scale through intelligent digital solutions.
              </p>

              <p>
                We bring together artificial intelligence,
                AI agent development, generative AI,
                chatbot development, custom software,
                SaaS products, cloud technology, CRM,
                ERP, workflow automation and data
                intelligence to address real-world
                business challenges.
              </p>

              <p>
                Our web development, mobile app development,
                AI integration, business process automation,
                SEO, AEO and digital marketing capabilities
                support businesses in Hyderabad and across India.
              </p>

              <p>
                With roots in real estate technology and
                experience in digital property discovery
                and business workflows, we continue to
                expand our technology vision beyond a
                single industry.
              </p>
            </div>

            {/* CAPABILITIES */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#075B3B]" />
                  <span className="text-xs leading-6 text-[#526577]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="#solutions"
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-[#075B3B]/25 bg-white px-6 py-3.5 text-sm font-semibold text-[#075B3B] transition hover:border-[#075B3B] hover:bg-[#075B3B] hover:text-white"
            >
              Explore Our Capabilities
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* TECHNOLOGY ECOSYSTEM */}
          <div className="relative">
            <div className="absolute inset-8 rounded-full bg-[#075B3B]/[0.045] blur-[90px]" />

            <div className="relative rounded-[28px] border border-[#E5E9E3] bg-[#F8F6F0] p-5 shadow-[0_25px_70px_rgba(38,60,80,0.08)] sm:p-8">

              {/* DASHBOARD HEADER */}
              <div className="flex items-center justify-between gap-3 border-b border-[#E3E6DE] pb-5">
                <div>
                  <p className="text-xs font-bold text-[#263C50]">
                    OPV Technology Ecosystem
                  </p>
                  <p className="mt-1 text-[10px] text-[#647586]">
                    Connected business capabilities
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-[#075B3B]/15 bg-[#075B3B]/[0.06] px-3 py-1.5 text-[9px] font-bold text-[#075B3B]">
                  AI POWERED
                </span>
              </div>

              {/* CENTRAL BRAND */}
              <div className="relative flex justify-center py-10">
                <div className="absolute h-40 w-40 rounded-full border border-dashed border-[#C6A052]/35" />

                <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full border border-[#075B3B]/20 bg-[#EAF2EB] shadow-[0_0_45px_rgba(7,91,59,0.07)]">
                  <Globe2 className="mb-2 h-9 w-9 text-[#075B3B]" />
                  <span className="text-lg font-extrabold tracking-widest text-[#075B3B]">
                    OPV AI
                  </span>
                  <span className="mt-1 text-[8px] tracking-[0.2em] text-[#607B6C]">
                    REALTY TECH
                  </span>
                </div>
              </div>

              {/* ECOSYSTEM GRID */}
              <div className="grid grid-cols-2 gap-3">
                {ecosystem.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex min-h-[88px] flex-col justify-center rounded-xl border border-[#E5E9E3] bg-white p-4 transition hover:border-[#075B3B]/30 hover:shadow-sm"
                    >
                      <Icon className="mb-3 h-5 w-5 text-[#075B3B]" />
                      <span className="text-[11px] font-semibold text-[#263C50]">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#E5E9E3] bg-white p-3">
                <Sparkles className="h-4 w-4 shrink-0 text-[#98732F]" />
                <span className="text-[10px] font-semibold text-[#526577]">
                  One Technology Partner. Multiple Business Possibilities.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">

          {/* MISSION */}
          <div className="group rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] p-7 transition hover:border-[#075B3B]/30 hover:shadow-md sm:p-9">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#075B3B]/15 bg-white">
              <Target className="h-6 w-6 text-[#075B3B]" />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#075B3B]">
              Our Mission
            </p>

            <h3 className="mt-4 text-2xl font-bold text-[#263C50]">
              Make Technology Work for Every Business.
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#526577]">
              To empower businesses with accessible,
              intelligent and scalable technology by
              combining AI, software, automation and
              digital innovation to simplify operations,
              improve customer experiences and accelerate
              business growth.
            </p>
          </div>

          {/* VISION */}
          <div className="group rounded-3xl border border-[#E5E9E3] bg-white p-7 shadow-sm transition hover:border-[#C6A052]/50 hover:shadow-md sm:p-9">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#C6A052]/25 bg-[#F8F6F0]">
              <Compass className="h-6 w-6 text-[#98732F]" />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#98732F]">
              Our Vision
            </p>

            <h3 className="mt-4 text-2xl font-bold text-[#263C50]">
              Build the Future of Intelligent Business.
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#526577]">
              To become a trusted technology partner
              and innovation-driven platform recognized
              for building intelligent digital products,
              scalable business ecosystems and
              transformative solutions for organizations
              across industries.
            </p>
          </div>
        </div>

        {/* CORE PRINCIPLES */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#075B3B]">
              What Drives Us
            </p>

            <h3 className="mt-4 text-3xl font-extrabold text-[#263C50] sm:text-4xl">
              Our Core Principles
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#526577]">
              The principles that guide our approach
              to technology, innovation and business
              partnerships.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group rounded-2xl border border-[#E5E9E3] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#075B3B]/[0.07] text-[#075B3B]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-bold text-[#C6A052]">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-6 text-base font-bold text-[#263C50]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-xs leading-6 text-[#526577]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* INDUSTRIES */}
        <div className="mt-24 rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] p-7 sm:p-10 lg:p-12">
          <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#075B3B]">
                Our Industry Focus
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-[#263C50]">
                Technology for Every Ambitious Business.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#526577]">
                Our capabilities are designed to serve
                diverse business environments. Real
                estate is one of our specialist domains,
                alongside a wider range of industries
                and enterprise needs.
              </p>

              <Link
                href="#industries"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#075B3B] transition hover:underline"
              >
                Explore Industries
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-[#E5E9E3] bg-white px-4 py-3 text-xs font-medium text-[#526577] transition hover:border-[#075B3B]/30 hover:text-[#075B3B]"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#075B3B]">
            Your Vision. Our Technology.
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-[#263C50] sm:text-4xl">
            Let&apos;s Build Something That Moves Your Business Forward.
          </h3>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#526577]">
            Tell us what you want to build, automate or grow.
            Let&apos;s explore the right digital solution together.
          </p>

          <Link
            href="#contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#075B3B] px-7 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(7,91,59,0.12)] transition hover:-translate-y-1 hover:bg-[#06472F]"
          >
            Start a Conversation
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
