import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Braces,
  Code2,
  Database,
  Globe,
  Layers3,
  Smartphone,
  Workflow,
  ShieldCheck,
  Rocket,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software & Product Engineering | OPV AI Realty Tech",
  description:
    "OPV AI Realty Tech develops custom software, web applications, mobile apps, business platforms and digital products designed around your business requirements.",
  alternates: {
    canonical: "/solutions/software-engineering",
  },
  openGraph: {
    title: "Software & Product Engineering | OPV AI Realty Tech",
    description:
      "Turn your business ideas into digital products with custom software engineering and application development.",
    url: "/solutions/software-engineering",
    type: "website",
  },
};

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Purpose-built software designed around your business processes, requirements and operational goals.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Modern websites, web applications, customer portals, admin panels and business platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Mobile application experiences that help customers and employees access your services and tools.",
  },
  {
    icon: Braces,
    title: "API Development & Integration",
    description:
      "Connect applications, services and business systems through APIs and integration workflows.",
  },
  {
    icon: Database,
    title: "Backend & Database Engineering",
    description:
      "Application architecture, backend services and data structures for your software requirements.",
  },
  {
    icon: Layers3,
    title: "SaaS & Digital Product Development",
    description:
      "Plan and develop digital products, subscription platforms and software-as-a-service applications.",
  },
];

const productTypes = [
  "Business management software",
  "Customer and partner portals",
  "Real estate platforms",
  "E-commerce applications",
  "Booking and appointment systems",
  "Internal business applications",
  "Sales and operations dashboards",
  "Workflow management systems",
];

const benefits = [
  {
    title: "Designed Around Your Business",
    description:
      "Software scope and functionality are shaped around your actual business requirements.",
  },
  {
    title: "Connected Systems",
    description:
      "Applications can integrate with relevant APIs, databases and third-party services.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Technical decisions consider maintainability and potential future product growth.",
  },
  {
    title: "User-Focused Design",
    description:
      "Clear interfaces and user journeys help make applications easier to understand and use.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your idea, business objectives, users and project requirements.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "Define features, user journeys, application structure and technical scope.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build the agreed application features and required integrations.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Review functionality, usability, compatibility and quality requirements.",
  },
  {
    number: "05",
    title: "Launch & Evolve",
    description:
      "Prepare for deployment and identify opportunities for future improvements.",
  },
];

export default function SoftwareEngineeringPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Software & Product Engineering
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn Your Ideas Into
              <span className="block text-emerald-400">
                Powerful Digital Products.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              From custom business software to web applications and mobile
              products, we help transform business requirements into practical
              digital solutions. Build technology that supports your customers,
              teams and business goals.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/#solutions"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Explore Solutions
              </Link>
            </div>

            <p className="mt-8 text-sm text-slate-400">
              Understand the need. Engineer the solution. Build for what is next.
            </p>
          </div>

          {/* ENGINEERING VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                    OPV ENGINEERING
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    Digital Product Architecture
                  </h2>
                </div>

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                  <Layers3 size={28} />
                </div>
              </div>

              <div className="mt-7 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <div className="flex items-center gap-4">
                    <Globe className="text-emerald-400" size={26} />
                    <div>
                      <h3 className="font-semibold text-white">
                        Frontend Experience
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        Websites, interfaces and user experiences
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-5 w-px bg-emerald-400/50" />
                </div>

                <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5">
                  <div className="flex items-center gap-4">
                    <Code2 className="text-emerald-300" size={26} />
                    <div>
                      <h3 className="font-semibold text-white">
                        Application Engineering
                      </h3>
                      <p className="mt-1 text-sm text-slate-300">
                        Business logic and application services
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-5 w-px bg-emerald-400/50" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <div className="flex items-center gap-4">
                    <Database className="text-emerald-400" size={26} />
                    <div>
                      <h3 className="font-semibold text-white">
                        Data & Integrations
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        Databases, APIs and connected systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3">
                <ShieldCheck className="shrink-0 text-emerald-400" size={20} />
                <p className="text-sm text-slate-300">
                  Architecture shaped around project requirements
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
            Technology built around your business
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Software That Solves Real Business Challenges
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every business has its own way of working. Custom software gives
            you the flexibility to create digital tools around your processes,
            customers and objectives. We focus on understanding the problem,
            defining the right product and selecting an appropriate approach
            to development.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Software Engineering Services
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Development capabilities to support your organisation's digital
              transformation and product requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCT TYPES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Digital products
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What Can We Build for Your Business?
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Whether you are starting with a new idea or improving an existing
              process, we can help define a suitable digital product scope.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Share your requirements
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {productTypes.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-emerald-600"
                  size={19}
                />
                <span className="text-sm font-medium leading-6 text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Our engineering principles
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Beyond Writing Code
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Effective software development considers the people, processes
              and business objectives behind every product.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <p className="text-sm font-bold text-emerald-600">
                  PRINCIPLE 0{index + 1}
                </p>

                <h3 className="mt-4 text-xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Our development process
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From Concept to Digital Product
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A structured approach keeps development aligned with your
              requirements and project objectives.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-3xl font-bold text-emerald-400">
                  {step.number}
                </p>

                <h3 className="mt-5 text-lg font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-600 px-7 py-14 text-center text-white sm:px-14">
          <div className="mx-auto inline-flex rounded-2xl bg-white/15 p-3">
            <Rocket size={28} />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold sm:text-4xl">
            Have an Idea for Your Next Software Product?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Tell us what you want to build. Let's explore your requirements,
            technical possibilities and a practical development approach.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Start a Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}