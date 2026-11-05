
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Layers3,
  Users,
  CreditCard,
  Database,
  ShieldCheck,
  Workflow,
  Code2,
  BarChart3,
  CheckCircle2,
  RefreshCw,
  Lightbulb,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS Development Company in India | Custom SaaS Solutions",
  description:
    "OPV AI Realty Tech offers custom SaaS development services in India, including SaaS product development, multi-tenant applications, subscription systems, dashboards and cloud-based software.",
  alternates: {
    canonical: "/services/saas-development",
  },
  openGraph: {
    title: "SaaS Development Services | OPV AI Realty Tech",
    description:
      "Build custom SaaS platforms, subscription-based software and cloud applications with OPV AI Realty Tech.",
    url: "https://www.opvairealtytech.com/services/saas-development",
    siteName: "OPV AI Realty Tech",
    type: "website",
  },
};

const services = [
  {
    icon: Layers3,
    title: "Custom SaaS Product Development",
    description:
      "Build software-as-a-service products around your business idea, target audience, product requirements and planned business model.",
  },
  {
    icon: Users,
    title: "Multi-Tenant SaaS Applications",
    description:
      "Plan applications that support multiple organizations or customers with appropriate account separation, permissions and data access rules.",
  },
  {
    icon: CreditCard,
    title: "Subscription & Billing Systems",
    description:
      "Integrate subscription plans, payment workflows, billing information and account access according to your product requirements.",
  },
  {
    icon: Database,
    title: "SaaS Backend Development",
    description:
      "Develop application backends, database structures, APIs and business logic to support your SaaS product.",
  },
  {
    icon: BarChart3,
    title: "Admin Panels & Analytics",
    description:
      "Build administration dashboards to manage users, review application activity and display relevant business information.",
  },
  {
    icon: RefreshCw,
    title: "SaaS Maintenance & Upgrades",
    description:
      "Support application improvements, feature updates, technical maintenance and future product development.",
  },
];

const features = [
  "User registration and authentication",
  "Organization and account management",
  "Multi-user access and permissions",
  "Subscription plan management",
  "Payment gateway integration",
  "Admin dashboard development",
  "Database and API integration",
  "Reports and analytics",
  "Email and notification workflows",
  "Cloud deployment planning",
  "Application monitoring considerations",
  "Feature and product enhancements",
];

const technologies = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Node.js",
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
  "Develop a software product around your business idea",
  "Provide users with online application access",
  "Organize customers and accounts",
  "Support recurring subscription models",
  "Manage features through centralized dashboards",
  "Connect payment and external services",
  "Plan for additional users and product features",
  "Build a foundation for continuous improvements",
];

const process = [
  {
    number: "01",
    title: "Product Discovery",
    description:
      "Understand the product concept, target users, business model, essential features and market requirements.",
  },
  {
    number: "02",
    title: "Architecture & UI/UX",
    description:
      "Plan the application architecture, user experience, database structure, account management and subscription workflows.",
  },
  {
    number: "03",
    title: "SaaS Development",
    description:
      "Develop the frontend, backend, user modules, dashboards, integrations and required product functionality.",
  },
  {
    number: "04",
    title: "Testing & Launch Preparation",
    description:
      "Test key user journeys, account access, payment workflows and application functionality before deployment.",
  },
];

const faqs = [
  {
    question: "What is SaaS development?",
    answer:
      "SaaS development is the process of building software that users access through the internet, commonly through a web browser or connected application. SaaS products may use subscription-based or other access models.",
  },
  {
    question: "Does OPV AI Realty Tech develop custom SaaS products?",
    answer:
      "Custom SaaS product development is a service area offered by OPV AI Realty Tech. The application scope, features and architecture are planned according to the product concept and business requirements.",
  },
  {
    question: "What is a multi-tenant SaaS application?",
    answer:
      "A multi-tenant application supports multiple customers or organizations within a shared application environment, with appropriate separation of their data and access permissions.",
  },
  {
    question: "Can a SaaS application include subscription payments?",
    answer:
      "Yes. Subscription plans and payment gateway integrations can be included according to the selected payment provider, billing requirements and product model.",
  },
  {
    question: "Can I build a SaaS product with an admin dashboard?",
    answer:
      "Yes. An administration dashboard can include user management, subscription information, application settings, reports and other product management features.",
  },
  {
    question: "Which technologies are used for SaaS development?",
    answer:
      "Depending on project requirements, technologies may include Next.js, React.js, TypeScript, Node.js, databases, APIs and cloud hosting services.",
  },
  {
    question: "Can an existing application be converted into a SaaS product?",
    answer:
      "An existing application can be evaluated for SaaS architecture changes, including account management, user permissions, data separation, subscription workflows and deployment requirements.",
  },
];

export default function SaaSDevelopmentPage() {
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
            SaaS Product Development
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            SaaS Development Company
            <span className="block text-[#F4D545]">
              in India
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Turn your software idea into a cloud-based
            digital product. OPV AI Realty Tech focuses on
            custom SaaS development, multi-user applications,
            subscription systems and business software platforms.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Build Your SaaS Product
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
              Custom SaaS Solutions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Build Your Own Software-as-a-Service Product
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              SaaS allows businesses to deliver software
              through the internet, giving customers access
              to applications without managing the complete
              software infrastructure themselves.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              From business management platforms and CRM
              products to specialized industry applications,
              SaaS products can be designed around different
              customer needs and business models.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              OPV AI Realty Tech approaches SaaS development
              by planning the product architecture, user
              experience, backend systems and integrations
              required for your application.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <Layers3 className="h-12 w-12 text-[#F4D545]" />

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Your Product Idea.
              <span className="block text-[#F4D545]">
                Your SaaS Platform.
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              Develop a software platform with user accounts,
              product features, administration tools and
              business workflows based on your requirements.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Custom SaaS product architecture",
                "Multi-user application development",
                "Subscription and payment integration",
                "Admin dashboards and reporting",
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
              Our SaaS Development Services
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Complete SaaS Product Development Solutions
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              From product planning to application development,
              create software experiences designed around
              your customers and business requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => {
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

      {/* FEATURES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              SaaS Platform Features
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Essential Features for a SaaS Application
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Every SaaS product has different requirements.
              Its features should be selected according to
              the intended users, business model and
              application workflows.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-[#F8FAF7] p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B88A00]" />
                <span className="text-sm font-semibold leading-6 text-[#033505]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAAS BUSINESS MODEL */}
      <section className="bg-[#033505] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#F4D545]">
              SaaS Business Models
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Build Software Around Your Business Model
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              Choose a product access and pricing structure
              that aligns with your target customers and
              commercial requirements.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Monthly Subscription",
                text: "Provide access through recurring monthly subscription plans.",
              },
              {
                title: "Annual Subscription",
                text: "Offer annual access plans with billing based on the selected product model.",
              },
              {
                title: "Freemium Model",
                text: "Provide selected product features at no cost with optional paid upgrades.",
              },
              {
                title: "Custom Enterprise Plans",
                text: "Define product access and pricing based on enterprise requirements.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6"
              >
                <h3 className="text-xl font-bold text-[#F4D545]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/75">
                  {item.text}
                </p>
              </article>
            ))}
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
              Technologies for SaaS Product Development
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We select suitable technologies based on the
              product architecture, performance requirements,
              integrations and future maintenance needs.
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
              Why Build a SaaS Product?
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Create a Digital Product That Can Evolve with Your Business
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              SaaS products can provide a structured way to
              deliver software, manage customer access and
              introduce new features as product requirements
              develop.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Centralized software delivery",
              "Online access for customers",
              "Subscription-based revenue options",
              "Structured user management",
              "Centralized product administration",
              "Connected business integrations",
              "Continuous product improvement",
              "Flexible feature development",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B88A00]" />
                <span className="text-sm font-semibold leading-6 text-[#033505]">
                  {item}
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
              Our SaaS Development Process
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
              SaaS Development FAQs
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
              href="/services/saas-cloud-solutions"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              SaaS & Cloud Solutions →
            </Link>

            <Link
              href="/services/software-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Software Development →
            </Link>

            <Link
              href="/services/crm-erp-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              CRM & ERP Development →
            </Link>

            <Link
              href="/services/business-automation"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Business Automation →
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
            Have an Idea for Your Own SaaS Platform?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Share your product concept, target audience,
            essential features and business model with
            OPV AI Realty Tech.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
          >
            Start Your SaaS Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
