import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  FileText,
  Gauge,
  Globe,
  Layers3,
  Lightbulb,
  Megaphone,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Startup & SME Technology Solutions | OPV AI Realty Tech",
  description:
    "Explore startup technology, custom software development, SaaS products, AI automation, CRM, business systems, websites and digital growth solutions for SMEs.",
  alternates: {
    canonical: "/industries/startups-smes",
  },
  openGraph: {
    title: "Startup & SME Technology Solutions | OPV AI Realty Tech",
    description:
      "Build and grow your business with software, AI, automation and digital technology solutions from OPV AI Realty Tech.",
    url: "/industries/startups-smes",
    type: "website",
  },
};

const solutions = [
  {
    icon: Code2,
    title: "Custom Software & Product Development",
    description:
      "Turn business ideas into web applications, mobile products, SaaS platforms and custom business software.",
  },
  {
    icon: Bot,
    title: "AI & Intelligent Automation",
    description:
      "Explore AI assistants, intelligent workflows and automation opportunities for everyday business activities.",
  },
  {
    icon: Globe,
    title: "Websites & Digital Presence",
    description:
      "Build professional websites, service pages, landing pages and digital platforms for your brand.",
  },
  {
    icon: Users,
    title: "CRM & Customer Management",
    description:
      "Organise leads, customer records, sales pipelines and follow-up activities through connected business systems.",
  },
  {
    icon: Cloud,
    title: "SaaS & Cloud Solutions",
    description:
      "Plan cloud-enabled applications and subscription-based software products around your business model.",
  },
  {
    icon: Target,
    title: "Digital Growth & Lead Generation",
    description:
      "Develop SEO, AEO, GEO, content marketing and enquiry generation strategies for your target audience.",
  },
  {
    icon: Database,
    title: "Data & Business Intelligence",
    description:
      "Explore dashboards, business reporting and data integration to improve operational visibility.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Connect applications and streamline suitable tasks across sales, customer service and administration.",
  },
];

const businessStages = [
  {
    number: "01",
    title: "Idea & Validation",
    description:
      "Shape the concept, define the target audience and identify the technology required to test the business idea.",
  },
  {
    number: "02",
    title: "Build & Launch",
    description:
      "Develop a website, application or minimum viable product around the agreed scope and requirements.",
  },
  {
    number: "03",
    title: "Operate & Organise",
    description:
      "Introduce suitable CRM, business systems and workflows to support daily operations.",
  },
  {
    number: "04",
    title: "Grow & Scale",
    description:
      "Explore automation, analytics, cloud infrastructure and digital marketing as business needs evolve.",
  },
];

const businessTypes = [
  {
    title: "Technology Startups",
    description:
      "Software products, SaaS platforms, mobile applications and technical product development.",
  },
  {
    title: "Small & Medium Enterprises",
    description:
      "Business websites, CRM systems, workflow automation and connected operational applications.",
  },
  {
    title: "Entrepreneurs & Founders",
    description:
      "Digital product planning, MVP development, websites and technology foundations for new ventures.",
  },
  {
    title: "Professional Service Businesses",
    description:
      "Customer portals, appointment workflows, service websites and client management systems.",
  },
  {
    title: "Growing Digital Businesses",
    description:
      "Cloud applications, automation, reporting and digital growth capabilities for evolving operations.",
  },
  {
    title: "New Business Ventures",
    description:
      "Technology planning, online presence and business applications for newly established organisations.",
  },
];

const capabilities = [
  "Startup and business websites",
  "Custom software development",
  "Minimum viable product development",
  "SaaS platform development",
  "Web and mobile applications",
  "AI assistants and automation",
  "CRM and customer management",
  "Business process automation",
  "Cloud application planning",
  "SEO, AEO and GEO strategy",
  "Lead generation systems",
  "Business intelligence dashboards",
];

const benefits = [
  {
    title: "Start with the Right Technology",
    description:
      "Define practical technology requirements around your business model, initial goals and available resources.",
  },
  {
    title: "Organise Business Operations",
    description:
      "Use suitable business applications and automated workflows to coordinate everyday activities.",
  },
  {
    title: "Build for Future Growth",
    description:
      "Consider maintainability, integrations and evolving business requirements when planning digital products.",
  },
  {
    title: "Connect Technology with Growth",
    description:
      "Bring websites, customer management, analytics and digital marketing into a coordinated business approach.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business idea, objectives, audience and current challenges.",
  },
  {
    number: "02",
    title: "Strategise",
    description:
      "Define the project scope, priorities, technology options and implementation approach.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the agreed website, application, product or business system.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "Connect relevant tools, applications, workflows and data sources.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "Review business needs and identify opportunities for further development and improvement.",
  },
];

export default function StartupsSMEsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Startups & SMEs Technology Solutions
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build Your Business.
              <span className="block text-emerald-400">
                Innovate. Grow. Scale.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Turn your business ideas into practical digital solutions.
              OPV AI Realty Tech helps startups and small businesses explore
              software development, AI, automation, cloud applications and
              digital growth technology aligned with their business goals.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Discuss Your Business Idea
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/#solutions"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Explore Our Solutions
              </Link>
            </div>

            <p className="mt-8 text-sm text-slate-400">
              Start smarter. Automate better. Build for growth.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur sm:p-8">

              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                    OPV BUSINESS TECHNOLOGY
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-white">
                    Startup Growth Ecosystem
                  </h2>
                </div>

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                  <Rocket size={28} />
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-emerald-400/15 p-3 text-emerald-300">
                    <Lightbulb size={30} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      From Idea to Digital Business
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Technology aligned with your business stage
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Code2 className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Software
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Digital products and applications.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Bot className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    AI & Automation
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Intelligent business workflows.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Users className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    CRM & Business
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Customer and business management.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <CheckCircle2 className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Digital Growth
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Visibility and customer acquisition.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-[#10233a] px-4 py-4">
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-emerald-300"
                />
                <p className="text-sm text-slate-200">
                  Technology solutions shaped around business priorities
                </p>
              </div>
            </div>

            <div className="absolute -right-5 -top-5 -z-10 h-36 w-36 rounded-full bg-emerald-400/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Technology for growing businesses
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Practical Technology for Every Stage of Business Growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Startups and small businesses need technology that supports their
            current priorities while allowing room for future development.
            From launching a business website to building a software product,
            introducing AI workflows or organising customer relationships,
            the right technology approach begins with understanding the
            business and its stage of growth.
          </p>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Our capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Technology Solutions for Startups & SMEs
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore software, AI, automation and digital growth capabilities
              designed around the needs of growing businesses.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {solution.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS STAGES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Your growth journey
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Technology That Evolves with Your Business
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Different stages require different technology priorities.
            Plan your digital foundation around where your business is today
            and where it aims to go.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessStages.map((stage) => (
            <article
              key={stage.number}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
            >
              <p className="text-3xl font-bold text-emerald-600">
                {stage.number}
              </p>

              <h3 className="mt-5 text-xl font-bold">
                {stage.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {stage.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Who we serve
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Technology for Different Business Models
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Whether you are launching a new venture or improving an
              established business, technology can be shaped around your
              operating model and goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map((business) => (
              <article
                key={business.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                  <Rocket size={25} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {business.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {business.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Technology capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A Complete Digital Toolkit for Growing Businesses
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              From your first website to connected business systems and
              intelligent automation, we help identify technology
              capabilities that fit your requirements.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              Discuss your business requirements
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />

                <span className="text-sm font-medium leading-6 text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS OUTCOMES */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Business outcomes
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Build a Stronger Foundation for Growth
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Technology can help growing businesses organise operations,
              connect customers and create a foundation for future development.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
              >
                <p className="text-sm font-bold text-emerald-400">
                  OUTCOME 0{index + 1}
                </p>

                <h3 className="mt-4 text-xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Our approach
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            From Business Idea to Digital Growth
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            A structured process helps connect technology decisions with
            your business priorities, resources and growth plans.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="text-3xl font-bold text-emerald-600">
                {step.number}
              </p>

              <h3 className="mt-5 text-lg font-bold">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-600 px-7 py-14 text-center text-white sm:px-14">

          <div className="mx-auto inline-flex rounded-2xl bg-white/15 p-3">
            <Rocket size={28} />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold sm:text-4xl">
            Ready to Build and Grow Your Business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Whether you are a startup founder, entrepreneur or established
            SME, let's explore how software, AI, automation and digital
            technology can support your next stage of growth.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Discuss Your Business Idea
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}