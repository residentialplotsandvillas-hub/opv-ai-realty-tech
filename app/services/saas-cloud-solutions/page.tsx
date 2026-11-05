
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Server,
  Database,
  ShieldCheck,
  Workflow,
  Layers3,
  Gauge,
  RefreshCw,
  CheckCircle2,
  Lightbulb,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS & Cloud Solutions Company in India | OPV AI Realty Tech",
  description:
    "Explore SaaS development, cloud application development, API integration, database solutions and cloud infrastructure services from OPV AI Realty Tech.",
  alternates: {
    canonical: "/services/saas-cloud-solutions",
  },
  openGraph: {
    title: "SaaS & Cloud Solutions | OPV AI Realty Tech",
    description:
      "Build scalable digital products and cloud-connected business applications with OPV AI Realty Tech.",
    url: "https://www.opvairealtytech.com/services/saas-cloud-solutions",
    siteName: "OPV AI Realty Tech",
    type: "website",
  },
};

const solutions = [
  {
    icon: Layers3,
    title: "SaaS Product Development",
    description:
      "Develop software products delivered through the cloud, with features and workflows designed around your product concept and target users.",
  },
  {
    icon: Cloud,
    title: "Cloud Application Development",
    description:
      "Build applications that use cloud-based infrastructure and services to support business operations and digital experiences.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Plan and implement database structures that organize application data and support the requirements of your software.",
  },
  {
    icon: Workflow,
    title: "API & System Integration",
    description:
      "Connect applications with external services, internal systems and third-party APIs to support connected business workflows.",
  },
  {
    icon: Server,
    title: "Cloud Infrastructure Solutions",
    description:
      "Plan application hosting, deployment environments and infrastructure components according to project requirements.",
  },
  {
    icon: RefreshCw,
    title: "Application Maintenance",
    description:
      "Support application updates, performance improvements, technical maintenance and future development requirements.",
  },
];

const technologies = [
  "Next.js",
  "React.js",
  "Node.js",
  "TypeScript",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "REST APIs",
  "Cloud Hosting",
  "Docker",
  "CI/CD",
];

const benefits = [
  "Centralized access to business applications",
  "Cloud-connected application architecture",
  "Subscription-based product possibilities",
  "API and third-party service integration",
  "Structured data management",
  "Application deployment planning",
  "Maintainable software architecture",
  "Flexible development and enhancement",
];

const process = [
  {
    number: "01",
    title: "Business & Product Planning",
    description:
      "Understand the business model, target users, product requirements and essential software features.",
  },
  {
    number: "02",
    title: "Architecture & Technology",
    description:
      "Plan the application structure, database, integrations and suitable development technologies.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Build the application, implement required functionality and connect the relevant services.",
  },
  {
    number: "04",
    title: "Testing & Deployment",
    description:
      "Test application workflows and prepare the agreed deployment environment for launch.",
  },
];

const faqs = [
  {
    question: "What is SaaS development?",
    answer:
      "SaaS, or Software as a Service, is a software delivery model in which users access an application through the internet rather than installing and maintaining the entire application locally.",
  },
  {
    question: "What SaaS development services does OPV provide?",
    answer:
      "OPV's SaaS and cloud solution areas include SaaS product development, cloud application development, database architecture, API integration, infrastructure planning and application maintenance.",
  },
  {
    question: "Can you develop a SaaS product from an idea?",
    answer:
      "A SaaS project can begin with product planning and requirements analysis, followed by application architecture, interface development, backend implementation, testing and deployment.",
  },
  {
    question: "Can a SaaS application support multiple users?",
    answer:
      "Yes. Multi-user functionality can be included in the application architecture. Roles, permissions, account separation and access rules should be defined according to the product requirements.",
  },
  {
    question: "Which technologies can be used for cloud applications?",
    answer:
      "Depending on the project, technologies may include Next.js, React.js, Node.js, TypeScript, databases, API services and cloud hosting platforms.",
  },
  {
    question: "Can you integrate an existing application with cloud services?",
    answer:
      "Existing applications can be assessed for suitable cloud integrations, API connectivity, database requirements and deployment changes.",
  },
];

export default function SaaSCloudSolutionsPage() {
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
            <Cloud className="h-4 w-4" />
            SaaS & Cloud Solutions
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            SaaS Development & Cloud Solutions
            <span className="block text-[#F4D545]">
              for Modern Businesses
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech helps businesses plan and build
            cloud-connected applications and software products.
            From SaaS platforms to application integrations,
            we focus on practical technology solutions aligned
            with your business requirements.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your Project
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
              Cloud & Software Engineering
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Build Digital Products Designed for Business Growth
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Businesses increasingly depend on connected
              applications, centralized information and
              software systems to manage their operations.
              Cloud-based solutions can make these systems
              accessible through internet-connected devices.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              OPV AI Realty Tech focuses on developing software
              applications and cloud-connected solutions based
              on your product requirements, business workflows
              and technical needs.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Whether you are planning a new SaaS product or
              improving an existing application, the right
              architecture and integration strategy are
              important parts of the development process.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <Cloud className="h-12 w-12 text-[#F4D545]" />

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Connected Software.
              <span className="block text-[#F4D545]">
                Smarter Operations.
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              Develop applications that bring business
              workflows, information and digital services
              together through a planned software architecture.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Cloud-based application development",
                "SaaS product architecture",
                "Database and API integration",
                "Deployment and maintenance planning",
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
              Our Solutions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              SaaS & Cloud Development Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Technology services to support digital products,
              connected applications and evolving business
              requirements.
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

      {/* TECHNOLOGY */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Technology Stack
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Technologies for SaaS & Cloud Applications
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Technology selection depends on the product,
              performance requirements, integrations and
              infrastructure needs.
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
              Business Benefits
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Technology That Supports Your Business Operations
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              The right software architecture can help
              businesses organize workflows, connect systems
              and provide users with more consistent access
              to digital services.
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
              Our Development Approach
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              From Product Concept to Cloud Deployment
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
              SaaS & Cloud Solutions FAQs
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
              href="/services/software-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Software Development →
            </Link>

            <Link
              href="/services/mobile-app-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Mobile App Development →
            </Link>

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
            Planning to Build a SaaS Product?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Share your product idea, business requirements
            and technical goals with OPV AI Realty Tech.
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
