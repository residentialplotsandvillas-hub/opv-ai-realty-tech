
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Monitor,
  Database,
  Workflow,
  Cloud,
  Smartphone,
  Layers3,
  CheckCircle2,
  Cpu,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development Company in India | OPV AI Realty Tech",
  description:
    "OPV AI Realty Tech offers custom software development, enterprise applications, web application engineering, API development and business software solutions.",
  alternates: {
    canonical: "/services/software-development",
  },
  openGraph: {
    title: "Custom Software Development | OPV AI Realty Tech",
    description:
      "Explore custom software engineering and scalable application development solutions for businesses.",
    url: "https://www.opvairealtytech.com/services/software-development",
    siteName: "OPV AI Realty Tech",
    type: "website",
  },
};

const solutions = [
  {
    icon: Monitor,
    title: "Web Application Development",
    description:
      "Develop responsive and scalable web applications designed around business workflows, customer requirements and digital operations.",
  },
  {
    icon: Layers3,
    title: "Custom Business Software",
    description:
      "Build software applications tailored to specific organizational processes, operational needs and business objectives.",
  },
  {
    icon: Database,
    title: "Database & Backend Development",
    description:
      "Design application backends, database structures and data management systems that support reliable software operations.",
  },
  {
    icon: Workflow,
    title: "API Development & Integration",
    description:
      "Connect applications and external services through APIs and integrations that support connected business systems.",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description:
      "Develop digital applications that connect business teams, customers and services through useful software experiences.",
  },
  {
    icon: Cloud,
    title: "Software Modernization",
    description:
      "Explore improvements to existing software architecture, application performance, integrations and deployment approaches.",
  },
];

const technologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
  "Cloud Platforms",
];

const benefits = [
  "Software designed around business requirements",
  "Flexible application architecture",
  "Integration with existing business systems",
  "Responsive and user-focused interfaces",
  "Scalable application development approach",
  "Maintainable software solutions",
];

const process = [
  {
    number: "01",
    title: "Requirement Discovery",
    description:
      "Understand the business problem, users, functional requirements and expected outcomes.",
  },
  {
    number: "02",
    title: "Architecture & Planning",
    description:
      "Plan the application structure, technology choices, integrations and development scope.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Build the application according to the agreed requirements and implementation plan.",
  },
  {
    number: "04",
    title: "Testing & Deployment",
    description:
      "Test application functionality and prepare the solution for deployment and ongoing improvement.",
  },
];

const faqs = [
  {
    question: "What is custom software development?",
    answer:
      "Custom software development is the process of designing and building applications around the specific requirements, workflows and objectives of a business.",
  },
  {
    question: "What types of software can OPV develop?",
    answer:
      "OPV's software development service areas include web applications, custom business software, backend systems, API integrations and application development.",
  },
  {
    question: "Can custom software integrate with existing systems?",
    answer:
      "Software can be integrated with existing applications and services when compatible APIs, data access and technical requirements are available.",
  },
  {
    question: "Which technologies are used for software development?",
    answer:
      "Technology choices depend on the project. Relevant technologies may include React, Next.js, TypeScript, Node.js, databases and cloud platforms.",
  },
  {
    question: "How do I start a software development project?",
    answer:
      "Contact OPV through the website and share your project objectives, required features, users and preferred timeline. The team can discuss the requirements and possible next steps.",
  },
];

export default function SoftwareDevelopmentPage() {
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
            <Code2 className="h-4 w-4" />
            Custom Software Engineering
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Custom Software Development
            <span className="block text-[#F4D545]">
              Company in India
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech focuses on custom software development
            and digital application engineering for businesses.
            From web applications and backend systems to API
            integrations and business software, we build around
            your specific requirements.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your Software Project
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
              Software Engineering
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Build Software Around the Way Your Business Works
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Businesses often need software that supports their
              specific operations rather than relying entirely on
              generic applications. Custom software development
              makes it possible to design digital systems around
              particular workflows, users and business objectives.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              OPV AI Realty Tech focuses on application development,
              backend engineering, database solutions and system
              integration. The technology architecture is selected
              according to project scope, functionality and
              operational requirements.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our approach considers usability, maintainability,
              scalability and integration requirements throughout
              the software development process.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <Code2 className="h-12 w-12 text-[#F4D545]" />

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Software Built Around
              <span className="block text-[#F4D545]">
                Your Business Needs
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              Good software starts with understanding the people
              who use it, the problems it needs to solve and the
              systems it needs to connect with.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Business requirement analysis",
                "Application architecture planning",
                "Development and integration",
                "Testing and deployment planning",
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

      {/* SOLUTIONS */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our Capabilities
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Custom Software Development Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore software engineering capabilities that can
              support different business applications and digital
              product requirements.
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

      {/* TECHNOLOGY STACK */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Technology Ecosystem
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Technologies for Modern Software Development
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Depending on project requirements, software solutions
              may use modern frontend, backend, database and cloud
              technologies.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-slate-200 bg-[#F8FAF7] px-5 py-3 text-sm font-bold text-[#265921] transition hover:border-[#E7B30F] hover:bg-[#E7B30F]/10"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Business Value
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Why Consider Custom Software Development?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A custom application can be designed around the
              processes and users of a particular business.
              Its suitability depends on the requirements,
              available resources and long-term objectives.
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

      {/* DEVELOPMENT PROCESS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our Development Approach
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Our Software Development Process
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
              Software Development FAQs
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
              href="/services/website-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Website Development →
            </Link>

            <Link
              href="/services/mobile-app-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Mobile App Development →
            </Link>

            <Link
              href="/services/saas-cloud-solutions"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              SaaS & Cloud Solutions →
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
            Have a Software Project in Mind?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Share your requirements and explore how custom software
            development can support your business.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
          >
            Discuss Your Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
