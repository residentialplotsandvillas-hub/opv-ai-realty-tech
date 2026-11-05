import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Code2,
  Compass,
  Globe2,
  Layers3,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About OPV AI Realty Tech | AI-Powered Business Technology",
  description:
    "Discover OPV AI Realty Tech Private Limited, an AI-powered business technology and growth platform focused on software, AI, automation, cloud, digital platforms and business transformation.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About OPV AI Realty Tech",
    description:
      "Building smarter business technology through AI, software engineering, automation and digital innovation.",
    url: "/about",
    type: "website",
  },
};

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "AI-powered applications, intelligent assistants, generative AI and business automation opportunities.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Custom software, web applications, mobile experiences and digital product development.",
  },
  {
    icon: Layers3,
    title: "Business Technology",
    description:
      "CRM, ERP, SaaS platforms and connected applications for business operations.",
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description:
      "Connected workflows and automation approaches designed to simplify repetitive business activities.",
  },
  {
    icon: Globe2,
    title: "Digital Growth",
    description:
      "Web presence, SEO, AEO, GEO, content strategy and digital lead generation.",
  },
  {
    icon: ShieldCheck,
    title: "Technology & Security",
    description:
      "Cloud, infrastructure, application security and responsible technology planning.",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Explore useful technologies and new ideas to address meaningful business challenges.",
  },
  {
    icon: Target,
    title: "Business Focus",
    description:
      "Keep business objectives, practical requirements and intended outcomes at the centre of technology decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Responsibility",
    description:
      "Value transparency, responsible technology practices and thoughtful handling of business information.",
  },
  {
    icon: Users,
    title: "Customer Partnership",
    description:
      "Understand different business needs and work towards solutions aligned with customer priorities.",
  },
  {
    icon: Rocket,
    title: "Continuous Improvement",
    description:
      "Encourage learning, refinement and technology improvements as business needs evolve.",
  },
  {
    icon: Compass,
    title: "Long-Term Thinking",
    description:
      "Consider maintainability, integration and future growth when planning digital solutions.",
  },
];

const industries = [
  "Real Estate",
  "Retail & E-commerce",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Logistics",
  "Startups & SMEs",
  "Enterprise & Corporate",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              About OPV AI Realty Tech
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Technology for
              <span className="block text-emerald-400">
                a Smarter Business Future.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              OPV AI Realty Tech Private Limited is an AI-powered business
              technology and growth platform focused on helping organisations
              explore smarter ways to build, operate and grow through
              technology.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-slate-400">
              We bring together AI, software engineering, cloud technology,
              business systems, automation and digital growth capabilities
              under one technology-focused vision.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#solutions"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Explore Our Solutions
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Connect With Us
              </Link>
            </div>

            <p className="mt-8 text-sm font-medium tracking-wide text-slate-400">
              Build Smarter. Automate Better. Grow Faster.
            </p>
          </div>

          {/* BRAND VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 shadow-2xl backdrop-blur sm:p-10">

              <div className="flex items-center justify-center">
                <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] border border-emerald-300/30 bg-gradient-to-br from-emerald-300/15 to-amber-300/10 shadow-[0_0_60px_rgba(16,185,129,0.12)]">
                  <Globe2
                    size={76}
                    strokeWidth={1.2}
                    className="text-emerald-300"
                  />
                  <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full border-2 border-[#071426] bg-amber-300" />
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-3xl font-extrabold tracking-[0.16em] text-white">
                  OPV <span className="text-emerald-400">AI</span>
                </p>

                <p className="mt-2 text-xs font-bold tracking-[0.3em] text-slate-400">
                  REALTY TECH
                </p>

                <p className="mt-5 text-sm leading-6 text-slate-300">
                  AI-Powered Business Technology & Growth Platform
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { icon: BrainCircuit, label: "Artificial Intelligence" },
                  { icon: Code2, label: "Software Engineering" },
                  { icon: Workflow, label: "Automation" },
                  { icon: Globe2, label: "Digital Growth" },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#10233a] p-3"
                    >
                      <Icon
                        size={19}
                        className="shrink-0 text-emerald-300"
                      />
                      <span className="text-xs font-medium leading-5 text-slate-300">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="absolute -right-5 -top-5 -z-10 h-36 w-36 rounded-full bg-emerald-400/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A Technology Company with a Business-First Vision
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              OPV AI Realty Tech Private Limited is positioned to bring
              together business technology, artificial intelligence and
              digital innovation.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our focus extends across industries. We recognise that every
              organisation has different challenges, customers and operating
              models. Technology should be planned around those needs rather
              than treated as a one-size-fits-all solution.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              From a business website or custom application to AI-enabled
              workflows and connected enterprise systems, our vision is to
              make modern technology more useful to businesses.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
              Our brand promise
            </p>

            <h3 className="mt-5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Build Smarter.
              <span className="block text-emerald-600">
                Automate Better.
              </span>
              <span className="block">Grow Faster.</span>
            </h3>

            <p className="mt-6 leading-7 text-slate-600">
              We believe technology should do more than add digital tools.
              It should help businesses think clearly, work more effectively
              and create opportunities for sustainable growth.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Understand business requirements",
                "Identify useful technology opportunities",
                "Build connected digital solutions",
                "Support continuous improvement",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Our direction
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Mission & Vision
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              A clear purpose and long-term direction guide the way we
              think about business technology and digital innovation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">

            <article className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
              <div className="inline-flex rounded-2xl bg-emerald-50 p-4 text-emerald-700">
                <Target size={32} />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                Our Mission
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-900">
                Make Technology More Useful for Every Business.
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Our mission is to help organisations identify and apply
                relevant technologies through software, AI, automation and
                digital solutions that address practical business needs.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-[#071426] p-8 text-white sm:p-10">
              <div className="inline-flex rounded-2xl bg-emerald-400/10 p-4 text-emerald-300">
                <Globe2 size={32} />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                Our Vision
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-tight">
                Build a Smarter, More Connected Business Future.
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Our vision is to contribute to a future where businesses
                across industries can use intelligent technology, connected
                systems and digital innovation to create meaningful
                opportunities for growth.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            What We Do
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Bringing Multiple Technology Capabilities Together
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            OPV brings a broad business technology vision across the
            following service areas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
              >
                <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {area.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/#solutions"
            className="inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800"
          >
            Explore all solutions
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* REAL ESTATE CONNECTION */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Our industry focus
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Real Estate Is Our Flagship Industry.
              <span className="block text-emerald-400">
                Our Technology Vision Goes Beyond It.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Real estate is an important part of the OPV ecosystem.
              We see opportunities to bring property discovery, AI,
              software, customer relationship management and automation
              together for property businesses.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              At the same time, OPV AI Realty Tech is positioned as a
              broader business technology company serving different
              industries and business models.
            </p>

            <Link
              href="/industries/real-estate"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-400"
            >
              Explore Real Estate Solutions
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 sm:p-9">

            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-emerald-400/10 p-4 text-emerald-300">
                <Building2 size={34} />
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-emerald-400">
                  OPV REAL ESTATE ECOSYSTEM
                </p>

                <h3 className="mt-1 text-xl font-bold text-white">
                  Open Plots & Villas
                </h3>
              </div>
            </div>

            <p className="mt-7 leading-7 text-slate-300">
              Open Plots & Villas is a separate, dedicated real estate
              discovery platform within the wider OPV ecosystem.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Dedicated real estate discovery brand",
                "Property-focused digital platform",
                "Real estate industry initiative",
                "Part of the wider OPV ecosystem",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="https://www.openplotsandvillas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-300 transition hover:text-emerald-200"
            >
              Visit Open Plots & Villas
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Industries We Serve
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            One Technology Vision. Multiple Industries.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            We believe the right combination of technology can support
            businesses across different sectors and operating models.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"
            >
              {industry}
            </span>
          ))}
        </div>

        <div className="mt-9 text-center">
          <Link
            href="/#industries"
            className="inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800"
          >
            Explore industries
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Our Values
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              The Principles Behind OPV
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              These principles guide our technology vision, business
              approach and the way we think about solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-600 px-7 py-14 text-center text-white sm:px-14">

          <div className="mx-auto inline-flex rounded-2xl bg-white/15 p-3">
            <Sparkles size={28} />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold sm:text-4xl">
            Let's Build a Smarter Business Future Together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Have a business challenge, software idea or digital
            transformation requirement? Let's explore the possibilities
            together.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Connect With OPV
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}