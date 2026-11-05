import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Intelligent Automation | OPV AI Realty Tech",
  description:
    "Make business operations smarter with AI solutions, intelligent automation, AI agents, workflow automation and business process optimisation from OPV AI Realty Tech.",
  alternates: {
    canonical: "/solutions/ai-intelligent-automation",
  },
  openGraph: {
    title: "AI & Intelligent Automation | OPV AI Realty Tech",
    description:
      "Build smarter business operations with AI-powered solutions and intelligent automation.",
    url: "/solutions/ai-intelligent-automation",
    type: "website",
  },
};

const capabilities = [
  {
    icon: BrainCircuit,
    title: "AI Strategy & Consulting",
    description:
      "Identify practical opportunities to introduce AI into your business, improve processes and support better decision-making.",
  },
  {
    icon: Bot,
    title: "AI Agents & Assistants",
    description:
      "Design intelligent assistants to help answer questions, support customers, organise information and assist business teams.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Connect business tasks and systems to reduce repetitive manual work and create more consistent processes.",
  },
  {
    icon: Cpu,
    title: "Custom AI Solutions",
    description:
      "Plan and develop AI-powered applications that address your organisation's specific operational requirements.",
  },
  {
    icon: Zap,
    title: "Business Process Automation",
    description:
      "Streamline repetitive activities across sales, customer service, administration and internal operations.",
  },
  {
    icon: CheckCircle2,
    title: "AI Integration",
    description:
      "Explore ways to connect AI capabilities with your existing applications, platforms and business workflows.",
  },
];

const useCases = [
  "Customer support and enquiry assistance",
  "Lead qualification and follow-up workflows",
  "Document processing and information extraction",
  "Business reporting and data assistance",
  "Internal knowledge assistants",
  "Task routing and workflow coordination",
  "Sales and customer relationship workflows",
  "Real estate enquiry and property discovery assistance",
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business, current processes and automation opportunities.",
  },
  {
    number: "02",
    title: "Strategise",
    description:
      "Identify suitable AI approaches and define the solution scope.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Design and develop the agreed AI solution or automated workflow.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "Connect the solution with relevant business tools and systems.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review performance and refine the solution as business needs evolve.",
  },
];

export default function AIIntelligentAutomationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.17),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:items-center lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              AI Solutions & Intelligent Automation
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Make Your Business
              <span className="block text-emerald-400">
                Smarter with AI.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Put artificial intelligence and intelligent automation to work
              across your business. OPV AI Realty Tech helps organisations
              explore, design and develop technology solutions that simplify
              operations and support business growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Discuss Your AI Project
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
              Practical AI. Connected workflows. Smarter business operations.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-slate-400">OPV AI PLATFORM</p>
                  <h2 className="mt-1 text-xl font-semibold text-white">
                    Intelligent Business
                  </h2>
                </div>
                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                  <BrainCircuit size={28} />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Bot className="mb-4 text-emerald-400" size={25} />
                  <p className="font-semibold text-white">AI Assistants</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Intelligent support for business tasks.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Workflow className="mb-4 text-emerald-400" size={25} />
                  <p className="font-semibold text-white">Automation</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Connected and streamlined workflows.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Cpu className="mb-4 text-emerald-400" size={25} />
                  <p className="font-semibold text-white">AI Integration</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    AI connected to business systems.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Zap className="mb-4 text-emerald-400" size={25} />
                  <p className="font-semibold text-white">Smart Operations</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    More efficient ways of working.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-400/15 p-2 text-emerald-300">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      Business-focused AI
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Technology designed around real business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-5 -z-10 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Transform the way you work
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            AI That Connects Technology with Business Goals
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Artificial intelligence can support more than isolated tasks. When
            thoughtfully planned and integrated, it can become part of how an
            organisation serves customers, manages information and runs daily
            operations. We focus on identifying useful applications of AI and
            shaping solutions around your business priorities.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              What we do
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              AI & Automation Capabilities
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Explore the areas where AI and automation can help your
              organisation work more effectively.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Where AI can help
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Practical Applications Across Your Business
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Every organisation has different processes and priorities. We
              help explore AI applications based on your business model,
              existing systems and operational requirements.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Talk to our team
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-emerald-600"
                  size={19}
                />
                <span className="text-sm font-medium leading-6 text-slate-700">
                  {useCase}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Our approach
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From Business Challenge to AI Solution
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A structured approach helps keep technology aligned with the
              problem it is intended to solve.
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
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
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
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-emerald-600 px-7 py-14 text-center text-white sm:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-100">
            Start your AI journey
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
            Have an AI Idea or Business Process to Improve?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Tell us about your requirements. Let’s explore how AI, automation
            and connected technology can support your business goals.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Discuss Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}