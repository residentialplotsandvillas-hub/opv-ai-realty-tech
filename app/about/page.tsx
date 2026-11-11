
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

// ==========================================
// ABOUT PAGE SEO METADATA
// ==========================================

export const metadata: Metadata = {
  title: {
    absolute:
      "About OPV AI Realty Tech | AI & Business Technology Company",
  },

  description:
    "Learn about OPV AI Realty Tech Private Limited, a Hyderabad-based AI and software development company focused on intelligent automation, SaaS, CRM, ERP, cloud technology and digital business growth.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title:
      "About OPV AI Realty Tech | AI-Powered Business Technology",

    description:
      "Discover our mission, vision, values and commitment to AI development, software engineering, intelligent automation and digital innovation across industries.",

    url: "/about",
    type: "website",
  },
};

// ==========================================
// TECHNOLOGY CAPABILITIES
// ==========================================

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "AI-powered applications, intelligent assistants, generative AI, AI agents and business automation solutions.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Custom software development, business websites, web applications, mobile apps and digital product engineering.",
  },
  {
    icon: Layers3,
    title: "Business Technology",
    description:
      "CRM, ERP, SaaS platforms and integrated business management systems designed around operational requirements.",
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description:
      "Workflow automation, connected business processes and intelligent systems that simplify repetitive activities.",
  },
  {
    icon: Globe2,
    title: "Digital Growth",
    description:
      "Website optimization, SEO, AEO, GEO, digital marketing, content strategy and business lead generation.",
  },
  {
    icon: ShieldCheck,
    title: "Technology & Security",
    description:
      "Cloud infrastructure, application security, technology integration and responsible digital solution planning.",
  },
];

// ==========================================
// CORPORATE VALUES
// ==========================================

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

// ==========================================
// INDUSTRIES
// ==========================================

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

// ==========================================
// ABOUT PAGE COMPONENT
// ==========================================

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#263C50]">

      {/* ======================================
          01 — ABOUT HERO
      ====================================== */}

      <section className="relative overflow-hidden bg-[#F8F6F0]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#075B3B]/[0.04] blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:py-28">

          {/* HERO CONTENT */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold text-[#075B3B]">
              <span className="h-2 w-2 rounded-full bg-[#C6A052]" />
              About OPV AI Realty Tech
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-[#263C50] sm:text-5xl lg:text-6xl">
              Technology for
              <span className="block text-[#075B3B]">
                a Smarter Business Future.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#526577] sm:text-lg">
              OPV AI Realty Tech Private Limited is an
              AI-powered business technology and growth
              company focused on helping organizations
              build, operate and grow through intelligent
              digital solutions.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-[#526577]">
              We bring together artificial intelligence,
              software engineering, cloud technology,
              business systems, automation and digital
              growth capabilities under one
              technology-focused vision.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#solutions"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
              >
                Explore Our Solutions
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:border-[#075B3B] hover:bg-[#F0F6F1]"
              >
                Connect With Us
              </Link>
            </div>

            <p className="mt-8 text-sm font-semibold tracking-wide text-[#075B3B]">
              Build Smarter. Automate Better. Grow Faster.
            </p>
          </div>

          {/* HERO BRAND VISUAL */}

          <div className="relative">
            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-7 shadow-[0_20px_60px_rgba(38,60,80,0.06)] sm:p-10">

              <div className="flex items-center justify-center">
                <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] border border-[#075B3B]/15 bg-[#F0F6F1]">
                  <Globe2
                    size={76}
                    strokeWidth={1.2}
                    className="text-[#075B3B]"
                  />

                  <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full border-2 border-white bg-[#C6A052]" />
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-3xl font-extrabold tracking-[0.16em] text-[#263C50]">
                  OPV{" "}
                  <span className="text-[#075B3B]">
                    AI
                  </span>
                </p>

                <p className="mt-2 text-xs font-bold tracking-[0.3em] text-[#647586]">
                  REALTY TECH
                </p>

                <p className="mt-5 text-sm leading-6 text-[#526577]">
                  AI-Powered Business Technology
                  &amp; Growth Platform
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  {
                    icon: BrainCircuit,
                    label: "Artificial Intelligence",
                  },
                  {
                    icon: Code2,
                    label: "Software Engineering",
                  },
                  {
                    icon: Workflow,
                    label: "Automation",
                  },
                  {
                    icon: Globe2,
                    label: "Digital Growth",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-3"
                    >
                      <Icon
                        size={19}
                        className="shrink-0 text-[#075B3B]"
                      />

                      <span className="text-xs font-medium leading-5 text-[#526577]">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          02 — WHO WE ARE
      ====================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#075B3B]">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#263C50] sm:text-4xl">
              A Technology Company with a Business-First Vision
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              OPV AI Realty Tech Private Limited
              brings together business technology,
              artificial intelligence and digital innovation
              to support modern business requirements.
            </p>

            <p className="mt-5 leading-8 text-[#526577]">
              Our focus extends across industries.
              Every organization has different challenges,
              customers and operating models.
              Technology should be designed around those
              requirements rather than treated as a
              one-size-fits-all solution.
            </p>

            <p className="mt-5 leading-8 text-[#526577]">
              From a professional business website or
              custom application to AI-enabled workflows
              and connected enterprise systems, our vision
              is to make modern technology more useful
              and accessible to businesses.
            </p>
          </div>

          {/* BRAND PROMISE */}

          <div className="rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] p-7 sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#075B3B]">
              Our Brand Promise
            </p>

            <h3 className="mt-5 text-3xl font-extrabold leading-tight text-[#263C50] sm:text-4xl">
              Build Smarter.
              <span className="block text-[#075B3B]">
                Automate Better.
              </span>
              <span className="block">
                Grow Faster.
              </span>
            </h3>

            <p className="mt-6 leading-7 text-[#526577]">
              We believe technology should do more than
              introduce digital tools. It should help
              businesses work more effectively,
              make informed decisions and create
              opportunities for sustainable growth.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Understand business requirements",
                "Identify useful technology opportunities",
                "Build connected digital solutions",
                "Support continuous improvement",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#075B3B]"
                  />

                  <span className="text-sm font-medium text-[#526577]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          03 — MISSION & VISION
      ====================================== */}

      <section className="bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#075B3B]">
              Our Direction
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#263C50] sm:text-4xl">
              Mission &amp; Vision
            </h2>

            <p className="mt-5 leading-7 text-[#526577]">
              A clear purpose and long-term direction
              guide our approach to business technology
              and digital innovation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">

            {/* MISSION */}

            <article className="rounded-3xl border border-[#E5E9E3] bg-white p-8 sm:p-10">
              <div className="inline-flex rounded-2xl bg-[#F0F6F1] p-4 text-[#075B3B]">
                <Target size={32} />
              </div>

              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-[#075B3B]">
                Our Mission
              </p>

              <h3 className="mt-4 text-2xl font-extrabold leading-tight text-[#263C50]">
                Make Technology More Useful for Every Business.
              </h3>

              <p className="mt-5 leading-8 text-[#526577]">
                Our mission is to help organizations
                identify and apply relevant technologies
                through software, AI, automation and
                digital solutions that address practical
                business needs.
              </p>
            </article>

            {/* VISION */}

            <article className="rounded-3xl border border-[#E5E9E3] bg-white p-8 sm:p-10">
              <div className="inline-flex rounded-2xl bg-[#F0F6F1] p-4 text-[#075B3B]">
                <Globe2 size={32} />
              </div>

              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-[#075B3B]">
                Our Vision
              </p>

              <h3 className="mt-4 text-2xl font-extrabold leading-tight text-[#263C50]">
                Build a Smarter, More Connected Business Future.
              </h3>

              <p className="mt-5 leading-8 text-[#526577]">
                Our vision is to contribute to a future
                where businesses across industries
                use intelligent technology, connected
                systems and digital innovation to create
                meaningful opportunities for growth.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ======================================
          04 — WHAT WE DO
      ====================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#075B3B]">
            What We Do
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#263C50] sm:text-4xl">
            Bringing Multiple Technology Capabilities Together
          </h2>

          <p className="mt-5 leading-7 text-[#526577]">
            OPV AI Realty Tech combines technology
            expertise and business-focused solutions
            across the following service areas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="group rounded-2xl border border-[#E5E9E3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-[0_15px_40px_rgba(38,60,80,0.07)]"
              >
                <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#263C50]">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#526577]">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/#solutions"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#075B3B] transition hover:underline"
          >
            Explore All Solutions
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ======================================
          05 — REAL ESTATE CONNECTION
      ====================================== */}

      <section className="bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#075B3B]">
              Our Industry Focus
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#263C50] sm:text-4xl">
              Real Estate Is Our Flagship Industry.
              <span className="block text-[#075B3B]">
                Our Technology Vision Goes Beyond It.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Real estate is an important part of the
              OPV ecosystem. We see opportunities
              to connect property discovery, AI,
              software, customer relationship management
              and automation for property businesses.
            </p>

            <p className="mt-5 leading-8 text-[#526577]">
              At the same time, OPV AI Realty Tech
              is positioned as a broader business
              technology company serving multiple
              industries and business models.
            </p>

            <Link
              href="/industries/real-estate"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#06472F]"
            >
              Explore Real Estate Solutions
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* OPEN PLOTS & VILLAS */}

          <div className="rounded-3xl border border-[#E5E9E3] bg-white p-7 shadow-sm sm:p-9">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-[#F0F6F1] p-4 text-[#075B3B]">
                <Building2 size={34} />
              </div>

              <div>
                <p className="text-xs font-extrabold tracking-[0.16em] text-[#075B3B]">
                  OPV REAL ESTATE ECOSYSTEM
                </p>

                <h3 className="mt-1 text-xl font-extrabold text-[#263C50]">
                  Open Plots &amp; Villas
                </h3>
              </div>
            </div>

            <p className="mt-7 leading-7 text-[#526577]">
              Open Plots &amp; Villas is a dedicated
              AI-powered real estate discovery portal
              within the wider OPV technology ecosystem.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Dedicated real estate discovery brand",
                "Property-focused digital platform",
                "AI-powered property discovery",
                "Part of the wider OPV ecosystem",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#075B3B]"
                  />

                  <span className="text-sm text-[#526577]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="https://www.openplotsandvillas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#075B3B] transition hover:underline"
            >
              Visit Open Plots &amp; Villas
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================
          06 — INDUSTRIES
      ====================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#075B3B]">
            Industries We Serve
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#263C50] sm:text-4xl">
            One Technology Vision. Multiple Industries.
          </h2>

          <p className="mt-5 leading-7 text-[#526577]">
            We believe the right combination of
            AI, software engineering and automation
            can support businesses across different
            sectors and operating models.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-[#E5E9E3] bg-[#F8F6F0] px-5 py-3 text-sm font-semibold text-[#526577] transition hover:border-[#075B3B]/30 hover:bg-[#F0F6F1] hover:text-[#075B3B]"
            >
              {industry}
            </span>
          ))}
        </div>

        <div className="mt-9 text-center">
          <Link
            href="/#industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#075B3B] transition hover:underline"
          >
            Explore Industries
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ======================================
          07 — CORPORATE VALUES
      ====================================== */}

      <section className="bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#075B3B]">
              Our Values
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#263C50] sm:text-4xl">
              The Principles Behind OPV
            </h2>

            <p className="mt-5 leading-7 text-[#526577]">
              These principles guide our technology
              vision, business approach and the way
              we develop solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-[0_15px_40px_rgba(38,60,80,0.06)]"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold text-[#263C50]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#526577]">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================
          08 — FINAL CTA
      ====================================== */}

      <section className="bg-white px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] px-7 py-14 text-center sm:px-14">

          <div className="mx-auto inline-flex rounded-2xl bg-white p-3 text-[#075B3B]">
            <Sparkles size={28} />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold text-[#263C50] sm:text-4xl">
            Let&apos;s Build a Smarter Business Future Together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#526577]">
            Have a business challenge, software idea
            or digital transformation requirement?
            Let&apos;s explore how OPV AI Realty Tech
            can help turn your vision into a
            practical technology solution.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
          >
            Connect With OPV
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}
