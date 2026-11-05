
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Bot,
  Workflow,
  MessageSquare,
  Database,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Development & Automation Services in India | OPV AI Realty Tech",
  description:
    "Explore AI development and automation services from OPV AI Realty Tech, including AI agents, business automation, AI integration and intelligent business solutions.",
  alternates: {
    canonical: "/services/ai-development",
  },
  openGraph: {
    title: "AI Development & Automation | OPV AI Realty Tech",
    description:
      "AI agents, intelligent automation and AI integration solutions for modern businesses.",
    url: "https://www.opvairealtytech.com/services/ai-development",
    siteName: "OPV AI Realty Tech",
    type: "website",
  },
};

const solutions = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Develop AI-powered agents designed to assist with business enquiries, information retrieval, customer interactions and defined workflows.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Identify repetitive business activities and design automation workflows to help reduce manual effort and improve operational consistency.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Assistants",
    description:
      "Create conversational AI experiences that help users access information, interact with business services and receive automated assistance.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description:
      "Integrate suitable AI capabilities into existing applications, websites and business systems based on project requirements.",
  },
  {
    icon: Database,
    title: "AI-Powered Data Solutions",
    description:
      "Connect business data with intelligent applications to support information discovery, analysis and decision-making workflows.",
  },
  {
    icon: BarChart3,
    title: "Intelligent Business Insights",
    description:
      "Explore AI-assisted reporting, business analytics and information processing to help organizations understand their operations.",
  },
];

const benefits = [
  "Reduce repetitive manual activities",
  "Support faster information access",
  "Improve customer interaction workflows",
  "Connect AI with existing business systems",
  "Create scalable automation processes",
  "Support informed business decisions",
];

const process = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "Understand your business objectives, existing processes and potential AI use cases.",
  },
  {
    number: "02",
    title: "Solution Planning",
    description:
      "Identify suitable AI technologies, integrations and automation workflows.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Develop and integrate the agreed AI solution around your requirements.",
  },
  {
    number: "04",
    title: "Testing & Improvement",
    description:
      "Evaluate the solution, review its performance and identify improvements.",
  },
];

const faqs = [
  {
    question: "What is AI development?",
    answer:
      "AI development involves creating or integrating applications that use artificial intelligence to perform tasks such as information processing, conversational assistance, automation and data analysis.",
  },
  {
    question: "What AI development services does OPV provide?",
    answer:
      "OPV's AI service areas include AI agent development, AI chatbots, AI integration, business process automation and AI-assisted business solutions.",
  },
  {
    question: "Can AI be integrated into an existing business application?",
    answer:
      "AI capabilities can be integrated into existing applications where the technology, architecture, data access and business requirements support the integration.",
  },
  {
    question: "Can AI automate business workflows?",
    answer:
      "AI can support selected workflows such as enquiry handling, information processing, customer assistance and repetitive tasks. The appropriate approach depends on the process and business requirements.",
  },
  {
    question: "How can I discuss an AI project with OPV?",
    answer:
      "Visit the contact page and share your business requirements, intended AI use case and project objectives. Our team can discuss suitable next steps.",
  },
];

export default function AIDevelopmentPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="bg-white">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#033505] py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#E7B30F]/15 blur-[120px]" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#265921]/50 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E7B30F]/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#F4D545]">
            <BrainCircuit className="h-4 w-4" />
            AI Development & Automation
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            AI Development Company
            <span className="block text-[#F4D545]">
              for Intelligent Business Solutions
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech helps businesses explore artificial
            intelligence through AI agents, intelligent automation,
            conversational assistants and AI integration. We focus on
            connecting AI capabilities with practical business needs.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your AI Project
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:border-[#F4D545] hover:text-[#F4D545]"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Intelligent Technology
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Transform Business Processes with Artificial Intelligence
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Artificial intelligence is changing how organizations
              process information, interact with customers and manage
              everyday activities. Businesses can explore AI to support
              repetitive workflows, improve information access and
              create more connected digital experiences.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              OPV AI Realty Tech focuses on AI development and
              integration based on business requirements. From
              conversational assistants to AI-powered automation,
              our approach starts by understanding the problem
              before selecting a suitable technology solution.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              AI is not a replacement for every business process.
              Successful implementation requires appropriate data,
              clear objectives, testing and human oversight where needed.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <div className="inline-flex rounded-2xl border border-[#E7B30F]/30 bg-[#E7B30F]/10 p-4">
              <Sparkles className="h-10 w-10 text-[#F4D545]" />
            </div>

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Practical AI.
              <span className="block text-[#F4D545]">
                Meaningful Automation.
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              The right AI solution begins with a real business
              requirement and a clear implementation plan.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Understand the business problem",
                "Identify suitable AI use cases",
                "Integrate relevant technologies",
                "Evaluate and improve the solution",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F4D545]" />
                  <span className="text-sm font-medium text-white/85">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI SERVICES */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our AI Capabilities
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              AI Development & Automation Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore AI capabilities that can be considered for
              different business applications and workflows.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#E7B30F]/60 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-[#033505]/5 p-3">
                    <Icon className="h-7 w-7 text-[#265921]" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#033505]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Business Applications
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              How AI Can Support Your Business
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              AI can support business teams by assisting with
              information processing, customer interactions and
              selected repetitive activities. The benefits depend
              on the use case, implementation and quality of data.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B88A00]" />
                <span className="text-sm font-semibold leading-6 text-[#033505]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Our AI Project Development Process
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-3xl font-black text-[#B88A00]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#033505]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Common Questions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              AI Development FAQs
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold text-[#033505]">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="border-t border-slate-100 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-xl font-extrabold text-[#033505]">
            Explore Related Services
          </h2>

          <div className="mt-5 flex flex-wrap gap-4">
            <Link
              href="/services/software-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Software Development →
            </Link>

            <Link
              href="/services/saas-cloud-solutions"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              SaaS & Cloud Solutions →
            </Link>

            <Link
              href="/services/crm-erp-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              CRM & ERP Development →
            </Link>

            <Link
              href="/services/ai-sales-agents"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              AI Sales Agents →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#033505] px-5 py-20 text-center text-white sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7B30F]/15">
            <Cpu className="h-7 w-7 text-[#F4D545]" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            Have an AI Project in Mind?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Discuss your business challenge and explore how AI
            development and automation could support your goals.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
          >
            Talk to Our Team
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
