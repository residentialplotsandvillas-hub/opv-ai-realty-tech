
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  Apple,
  Code2,
  Layers3,
  ShieldCheck,
  Gauge,
  Database,
  Workflow,
  CheckCircle2,
  Lightbulb,
  MonitorSmartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Company in India | OPV AI Realty Tech",
  description:
    "OPV AI Realty Tech offers mobile app development services for Android, iOS and cross-platform applications, including custom app development and API integrations.",
  alternates: {
    canonical: "/services/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development Services | OPV AI Realty Tech",
    description:
      "Explore custom Android, iOS and cross-platform mobile app development services for modern businesses.",
    url: "https://www.opvairealtytech.com/services/mobile-app-development",
    siteName: "OPV AI Realty Tech",
    type: "website",
  },
};

const solutions = [
  {
    icon: Smartphone,
    title: "Android App Development",
    description:
      "Develop Android applications with business-focused features, user-friendly interfaces and functionality designed around your requirements.",
  },
  {
    icon: Apple,
    title: "iOS App Development",
    description:
      "Build mobile experiences for Apple's iOS ecosystem, with attention to usability, application architecture and platform requirements.",
  },
  {
    icon: Layers3,
    title: "Cross-Platform App Development",
    description:
      "Develop applications for multiple mobile platforms using suitable cross-platform technologies to support consistent user experiences.",
  },
  {
    icon: Code2,
    title: "Custom Mobile Applications",
    description:
      "Create custom applications for business operations, customer engagement, service delivery and specialized workflows.",
  },
  {
    icon: Database,
    title: "Backend & API Integration",
    description:
      "Connect mobile applications with databases, backend services, authentication systems and third-party APIs.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Explore mobile workflows that help teams manage information, submit requests and access business processes from their devices.",
  },
];

const technologies = [
  "React Native",
  "Expo",
  "TypeScript",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
];

const benefits = [
  "User-friendly mobile interfaces",
  "Android and iOS development options",
  "Custom features based on business needs",
  "Backend and API connectivity",
  "Authentication and access management",
  "Testing across supported devices",
  "Maintainable application architecture",
  "App deployment support based on scope",
];

const process = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "Understand the target users, business objectives, platform requirements and essential application features.",
  },
  {
    number: "02",
    title: "UI/UX Planning",
    description:
      "Plan the application screens, navigation, user journeys and interface design.",
  },
  {
    number: "03",
    title: "App Development",
    description:
      "Develop the mobile application and integrate the required backend services and APIs.",
  },
  {
    number: "04",
    title: "Testing & Deployment",
    description:
      "Test application functionality and supported devices, then prepare the app for the agreed deployment process.",
  },
];

const faqs = [
  {
    question: "What mobile app development services does OPV offer?",
    answer:
      "OPV's mobile app development service areas include Android applications, iOS applications, cross-platform apps, custom mobile applications and backend integrations.",
  },
  {
    question: "Can you develop Android and iOS applications?",
    answer:
      "Android and iOS application development are both service areas. The recommended approach depends on the project requirements, features, budget and target users.",
  },
  {
    question: "Which technologies can be used for mobile app development?",
    answer:
      "Depending on the project, technologies may include React Native, Expo, TypeScript, JavaScript, Node.js and database or API services.",
  },
  {
    question: "Can a mobile app connect to a website or backend?",
    answer:
      "Yes. Mobile applications can integrate with backend systems, databases, authentication services and APIs when the required interfaces and access are available.",
  },
  {
    question: "Can you develop a mobile app with an admin panel?",
    answer:
      "A mobile application can be developed alongside a web-based administration panel. The features and access permissions are planned according to the business workflow.",
  },
  {
    question: "How do I start a mobile app development project?",
    answer:
      "Contact OPV through the website contact page and share your app idea, target platforms, key features and any existing website or backend requirements.",
  },
];

export default function MobileAppDevelopmentPage() {
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
            <Smartphone className="h-4 w-4" />
            Mobile Application Development
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Mobile App Development Company
            <span className="block text-[#F4D545]">
              in India
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech provides mobile app development
            services for businesses looking to build Android,
            iOS and cross-platform applications. We focus on
            useful functionality, intuitive interfaces and
            technology aligned with your business requirements.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your App Idea
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
              Mobile Technology Solutions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Turn Your Business Idea into a Mobile Application
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Mobile applications give businesses another way
              to connect with customers, support employees and
              provide access to digital services.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              OPV AI Realty Tech approaches mobile app development
              by understanding your business objectives, target
              users, application features and integration needs.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              From customer-facing applications to internal
              business tools, the application architecture and
              technology choices should support the intended
              user experience and future requirements.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <MonitorSmartphone className="h-12 w-12 text-[#F4D545]" />

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Mobile Experiences for
              <span className="block text-[#F4D545]">
                Connected Businesses
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              Plan mobile applications around the people who
              use them, the tasks they need to complete and the
              systems your business already operates.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Android and iOS application options",
                "Custom application functionality",
                "Backend and API integration",
                "User-focused mobile interfaces",
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
              Our Mobile App Capabilities
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Mobile Application Development Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore mobile development options for customer
              applications, business operations and digital
              products.
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
              Technologies for Modern Mobile Applications
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              The technology stack is selected according to
              application requirements, platform support,
              integrations and maintenance considerations.
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
              Application Quality
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              What Matters in Mobile App Development?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A successful application needs more than an
              attractive interface. Its functionality,
              security, integrations and maintainability
              should all be considered during development.
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
              Our Mobile App Development Process
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
              Mobile App Development FAQs
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
              href="/services/website-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Website Development →
            </Link>

            <Link
              href="/services/saas-cloud-solutions"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              SaaS & Cloud Solutions →
            </Link>

            <Link
              href="/services/ai-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              AI Development →
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
            Have an Idea for a Mobile Application?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Discuss your application concept, target users
            and required features with OPV AI Realty Tech.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
          >
            Discuss Your App Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
