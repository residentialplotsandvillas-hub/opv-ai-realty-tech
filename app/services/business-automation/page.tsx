
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Workflow,
  Bot,
  Settings,
  Zap,
  Database,
  MessageSquare,
  RefreshCw,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Network,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Automation Services in India | OPV AI Realty Tech",
  description:
    "Automate business workflows with OPV AI Realty Tech. Explore AI automation, process automation, CRM integration, automated notifications and custom business systems.",
  alternates: {
    canonical: "/services/business-automation",
  },
  openGraph: {
    title: "Business Automation Services | OPV AI Realty Tech",
    description:
      "Explore intelligent business process automation, workflow integration and custom automation solutions for modern businesses.",
    url: "https://www.opvairealtytech.com/services/business-automation",
    siteName: "OPV AI Realty Tech",
    type: "website",
  },
};

const solutions = [
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Organize repetitive business activities into structured digital workflows, reducing the need for manual coordination.",
  },
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description:
      "Explore AI-assisted workflows for information processing, customer interactions and selected business operations.",
  },
  {
    icon: MessageSquare,
    title: "Automated Customer Communication",
    description:
      "Plan automated communication workflows for enquiries, notifications, reminders and customer updates.",
  },
  {
    icon: Database,
    title: "CRM & Database Automation",
    description:
      "Connect customer records, lead information and business databases to support consistent information management.",
  },
  {
    icon: Network,
    title: "Application & API Integration",
    description:
      "Connect websites, mobile applications, business tools and external services through suitable APIs and integrations.",
  },
  {
    icon: RefreshCw,
    title: "Reporting & Task Automation",
    description:
      "Create workflows for recurring reports, task assignments, status updates and business activity tracking.",
  },
];

const useCases = [
  "Lead capture and assignment",
  "Customer enquiry notifications",
  "Sales follow-up reminders",
  "Appointment and booking workflows",
  "Document and approval processes",
  "CRM record updates",
  "Inventory and order notifications",
  "Automated business reports",
  "Employee task assignments",
  "Customer support workflows",
  "Data synchronization",
  "Administrative operations",
];

const benefits = [
  "Reduce repetitive manual activities",
  "Organize business workflows",
  "Improve information consistency",
  "Support faster task coordination",
  "Connect separate business applications",
  "Create structured notification processes",
  "Improve operational visibility",
  "Support business process scalability",
];

const process = [
  {
    number: "01",
    title: "Understand Your Workflow",
    description:
      "Identify repetitive tasks, existing business processes, operational challenges and automation opportunities.",
  },
  {
    number: "02",
    title: "Automation Planning",
    description:
      "Define workflow steps, system connections, triggers, user permissions and expected outcomes.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Implement automation workflows and connect the relevant applications, databases and services.",
  },
  {
    number: "04",
    title: "Testing & Improvement",
    description:
      "Test workflow execution, handle exceptions and review the automation based on business requirements.",
  },
];

const faqs = [
  {
    question: "What is business process automation?",
    answer:
      "Business process automation uses software and digital workflows to perform repetitive tasks and coordinate business activities with less manual intervention.",
  },
  {
    question: "What business automation services does OPV offer?",
    answer:
      "OPV's business automation service areas include process automation, AI-assisted workflows, customer communication, CRM and database automation, API integrations and reporting workflows.",
  },
  {
    question: "Can you automate lead management?",
    answer:
      "Lead management workflows can be designed to capture enquiries, organize customer records, assign leads, send notifications and support follow-up activities.",
  },
  {
    question: "Can automation connect different business applications?",
    answer:
      "Yes. Applications can be connected through available APIs, webhooks or other supported integration methods, depending on their technical capabilities.",
  },
  {
    question: "Can AI be used in business automation?",
    answer:
      "AI can support selected workflows such as information classification, content processing, customer interaction assistance and other tasks where AI is suitable. Human review may still be necessary for important decisions.",
  },
  {
    question: "Is business automation suitable for small businesses?",
    answer:
      "Yes. Small businesses can automate selected repetitive activities such as enquiry management, notifications, task coordination and reporting based on their needs and available resources.",
  },
];

export default function BusinessAutomationPage() {
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
      {/* FAQ STRUCTURED DATA */}
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
            <Zap className="h-4 w-4" />
            Intelligent Business Automation
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Business Process Automation
            <span className="block text-[#F4D545]">
              for Smarter Operations
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech helps businesses streamline
            repetitive activities, connect digital systems
            and organize operational workflows through
            custom automation and AI-assisted solutions.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Automate Your Business
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
              Intelligent Workflow Solutions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Reduce Manual Work with Business Automation
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Businesses perform many recurring activities
              every day, including managing enquiries,
              updating records, assigning tasks, sending
              notifications and preparing reports.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              When these activities depend entirely on
              manual coordination, teams may spend valuable
              time on repetitive tasks instead of focusing
              on important business activities.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              OPV AI Realty Tech helps identify suitable
              automation opportunities and develop workflows
              that connect applications, data and business
              processes.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <Workflow className="h-12 w-12 text-[#F4D545]" />

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Automate Repetitive Tasks.
              <span className="block text-[#F4D545]">
                Organize Business Workflows.
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              Connect the systems your business uses and
              create structured workflows around your
              operational requirements.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Workflow automation",
                "AI-assisted business processes",
                "Application and API integration",
                "Automated notifications and reports",
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

      {/* SERVICES */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our Automation Services
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Business Automation Solutions
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Practical automation capabilities for customer
              management, internal operations and connected
              business applications.
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

      {/* USE CASES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Practical Applications
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              What Can Your Business Automate?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Automation opportunities depend on your existing
              systems, business rules and workflow requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#F8FAF7] p-5"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#B88A00]" />
                <span className="font-semibold text-[#033505]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Business Benefits
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Make Everyday Business Activities More Efficient
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Well-designed automation can help teams
              coordinate work, reduce repetitive data entry
              and maintain more consistent business processes.
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
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Our Business Automation Process
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 p-6"
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
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Common Questions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Business Automation FAQs
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
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-xl font-extrabold text-[#033505]">
            Explore Related Services
          </h2>

          <div className="mt-5 flex flex-wrap gap-5">
            <Link
              href="/services/ai-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              AI Development →
            </Link>

            <Link
              href="/services/crm-erp-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              CRM & ERP Development →
            </Link>

            <Link
              href="/services/software-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Software Development →
            </Link>

            <Link
              href="/services/data-engineering"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Data Engineering →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#033505] px-5 py-20 text-center text-white sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7B30F]/15">
            <Lightbulb className="h-7 w-7 text-[#F4D545]" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            Ready to Automate Your Business?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Tell us about your repetitive tasks, business
            workflows and systems that need to work together.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
          >
            Discuss Your Automation Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}

