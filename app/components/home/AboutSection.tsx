
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
  "Custom Software & SaaS Development",
  "Web & Mobile Application Development",
  "CRM, ERP & Business Management Systems",
  "Cloud, Data & Business Intelligence",
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

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-[#071525] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* BACKGROUND ACCENTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-400/[0.07] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION INTRO */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2">
            <Globe2 className="h-4 w-4 text-emerald-300" />
            <span className="text-[10px] font-bold uppercase tracking-[0.20em] text-emerald-300">
              About OPV AI Realty Tech
            </span>
          </div>

          <h2
            id="about-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Technology.
            <span className="text-emerald-300"> Intelligence.</span>
            <span className="block mt-2">Growth.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Building intelligent digital businesses through
            innovation, software engineering, artificial
            intelligence and technology-driven growth.
          </p>
        </div>

        {/* WHO WE ARE */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT: COMPANY STORY */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Who We Are
            </p>

            <h3 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              More Than Technology.
              <span className="block mt-2 text-emerald-300">
                Built for Business.
              </span>
            </h3>

            <div className="mt-7 space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
              <p>
                <strong className="font-semibold text-white">
                  OPV AI Realty Tech Private Limited
                </strong>{" "}
                is an AI-powered business technology and growth
                company focused on helping organizations build,
                transform and scale through intelligent digital
                solutions.
              </p>

              <p>
                We bring together artificial intelligence,
                software engineering, SaaS development, cloud
                technology, business systems, automation,
                data intelligence and digital growth to address
                real-world business challenges.
              </p>

              <p>
                Our technology capabilities serve businesses
                across multiple industries, from emerging
                startups and SMEs to growing organizations and
                enterprises.
              </p>

              <p>
                With roots in real estate technology and
                experience in digital property discovery and
                business workflows, we continue to expand our
                technology vision beyond a single industry.
              </p>
            </div>

            {/* CAPABILITIES */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                  <span className="text-xs leading-6 text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="#solutions"
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-emerald-300/30 px-6 py-3.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-300 hover:text-[#06111f]"
            >
              Explore Our Capabilities
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* RIGHT: TECHNOLOGY ECOSYSTEM VISUAL */}
          <div className="relative">

            <div className="absolute inset-8 rounded-full bg-emerald-400/[0.08] blur-[90px]" />

            <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-[#142a3d] to-[#0b1929] p-5 shadow-2xl sm:p-8">

              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-bold text-white">
                    OPV Technology Ecosystem
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500">
                    Connected business capabilities
                  </p>
                </div>

                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-[9px] font-bold text-emerald-300">
                  AI POWERED
                </span>
              </div>

              {/* CENTER BRAND */}
              <div className="relative flex justify-center py-10">
                <div className="absolute h-40 w-40 rounded-full border border-dashed border-emerald-300/20" />

                <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full border border-emerald-300/30 bg-gradient-to-br from-[#155348] to-[#102c3b] shadow-[0_0_50px_rgba(52,211,153,0.13)]">
                  <Globe2 className="mb-2 h-9 w-9 text-emerald-300" />
                  <span className="text-lg font-extrabold tracking-widest">
                    OPV AI
                  </span>
                  <span className="mt-1 text-[8px] tracking-[0.2em] text-emerald-200">
                    REALTY TECH
                  </span>
                </div>
              </div>

              {/* CAPABILITY GRID */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: BrainCircuit, title: "Artificial Intelligence" },
                  { icon: Code2, title: "Software Engineering" },
                  { icon: Workflow, title: "Business Automation" },
                  { icon: Network, title: "Digital Ecosystems" },
                  { icon: Building2, title: "Industry Solutions" },
                  { icon: Rocket, title: "Business Growth" },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex min-h-[88px] flex-col justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] p-4 transition hover:border-emerald-300/30 hover:bg-emerald-300/[0.05]"
                    >
                      <Icon className="mb-3 h-5 w-5 text-emerald-300" />
                      <span className="text-[11px] font-semibold text-slate-200">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-black/15 p-3">
                <Sparkles className="h-4 w-4 text-amber-300" />
                <span className="text-[10px] font-semibold text-slate-300">
                  One Technology Partner. Multiple Business Possibilities.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">

          <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-[#122d35] to-[#0b1b2a] p-7 transition hover:border-emerald-300/30 sm:p-9">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10">
              <Target className="h-6 w-6 text-emerald-300" />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Our Mission
            </p>

            <h3 className="mt-4 text-2xl font-bold text-white">
              Make Technology Work for Every Business.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              To empower businesses with accessible, intelligent
              and scalable technology by combining AI, software,
              automation and digital innovation to simplify
              operations, improve customer experiences and
              accelerate business growth.
            </p>
          </div>

          <div className="group rounded-3xl border border-white/10 bg-gradient-to-br from-[#262b34] to-[#101b29] p-7 transition hover:border-amber-300/30 sm:p-9">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/10">
              <Compass className="h-6 w-6 text-amber-300" />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              Our Vision
            </p>

            <h3 className="mt-4 text-2xl font-bold text-white">
              Build the Future of Intelligent Business.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              To become a trusted technology partner and
              innovation-driven platform recognized for
              building intelligent digital products, scalable
              business ecosystems and transformative solutions
              for organizations across industries.
            </p>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              What Drives Us
            </p>

            <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Our Core Principles
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              The principles that guide our approach to
              technology, innovation and business partnerships.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-emerald-300/[0.035]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-sm font-bold text-slate-600">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-6 text-base font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-xs leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* INDUSTRIES */}
        <div className="mt-24 rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10 lg:p-12">
          <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                Our Industry Focus
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-white">
                Technology for Every Ambitious Business.
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Our capabilities are designed to serve diverse
                business environments. Real estate is one of our
                specialist domains, alongside a wider range of
                industries and enterprise needs.
              </p>

              <Link
                href="#industries"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
              >
                Explore Industries
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-medium text-slate-300 transition hover:border-emerald-300/30 hover:bg-emerald-300/[0.07] hover:text-emerald-300"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
            Your Vision. Our Technology.
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Let's Build Something That Moves Your Business Forward.
          </h3>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
            Tell us what you want to build, automate or grow.
            Let's explore the right digital solution together.
          </p>

          <Link
            href="#contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-300 px-7 py-4 text-sm font-bold text-[#06111f] transition hover:-translate-y-1 hover:bg-emerald-200"
          >
            Start a Conversation
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
