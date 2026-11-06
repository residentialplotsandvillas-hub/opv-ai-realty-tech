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
  MapPin,
  Building2,
  Rocket,
} from "lucide-react";

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_PATH = "/services/saas-cloud-solutions";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/opv-og-image.jpg`;

const PAGE_TITLE =
  "SaaS Development Company in Hyderabad | OPV AI Realty Tech";
const PAGE_DESCRIPTION =
  "SaaS product and MVP development, multi-tenant architecture, subscription billing and cloud applications with Next.js and Node.js, for startups and businesses in Hyderabad.";

export const metadata: Metadata = {
  // `absolute` bypasses the layout's title.template, so the brand is not added twice
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "SaaS Development & Cloud Solutions in Hyderabad | OPV AI Realty Tech",
    description:
      "From MVP to scalable SaaS: multi-tenant architecture, subscription billing, APIs and cloud deployment.",
    url: PAGE_URL,
    siteName: "OPV AI Realty Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "SaaS development and cloud solutions by OPV AI Realty Tech, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Development Company in Hyderabad | OPV",
    description:
      "SaaS product and MVP development, cloud applications and API integration.",
    images: [OG_IMAGE],
  },
};

const solutions = [
  {
    icon: Layers3,
    title: "SaaS Product Development",
    description:
      "End-to-end development of subscription software products: user accounts, workspaces, billing, admin panels and the core features your customers pay for.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description:
      "Launch a focused first version quickly to test your idea with real users, then expand features based on feedback and traction.",
  },
  {
    icon: Cloud,
    title: "Cloud Application Development",
    description:
      "Web applications hosted in the cloud that your teams and customers can use securely from any device, anywhere.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Scalable PostgreSQL and MongoDB data models designed for multi-tenant products, fast queries and reliable backups.",
  },
  {
    icon: Workflow,
    title: "API & System Integration",
    description:
      "Connect your product to payment gateways, email, WhatsApp, CRMs and third-party services, and publish APIs for your own customers.",
  },
  {
    icon: Server,
    title: "Cloud Infrastructure & DevOps",
    description:
      "Hosting, Docker containers, CI/CD pipelines, staging and production environments, monitoring and automated deployments.",
  },
  {
    icon: RefreshCw,
    title: "Maintenance & Scaling",
    description:
      "Bug fixes, performance tuning, security updates and new features as your user base grows.",
  },
  {
    icon: Code2,
    title: "Legacy App Modernisation",
    description:
      "Move older desktop or on-premise software to a modern cloud architecture without losing your data or workflows.",
  },
];

const saasFeatures = [
  {
    icon: Layers3,
    title: "Multi-Tenant Architecture",
    description:
      "Each customer gets a separate, secure workspace while you run one codebase.",
  },
  {
    icon: RefreshCw,
    title: "Subscription Billing",
    description:
      "Plans, trials, recurring payments, invoices and upgrades through payment gateways.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Access Control",
    description:
      "Secure login, role-based permissions, encrypted data and audit logs.",
  },
  {
    icon: Gauge,
    title: "Performance & Scalability",
    description:
      "Fast page loads and infrastructure that grows with your users.",
  },
];

const saasTypes = [
  {
    title: "Real Estate SaaS",
    description:
      "CRM, lead management, channel partner and project sales platforms for developers and agencies.",
  },
  {
    title: "Business Management SaaS",
    description:
      "Tools for HR, inventory, billing, field staff and operations used by many businesses on subscription.",
  },
  {
    title: "Booking & Scheduling SaaS",
    description:
      "Appointment, reservation and resource booking platforms for clinics, services and hospitality.",
  },
  {
    title: "Education SaaS",
    description:
      "Learning management, student administration and online course platforms.",
  },
  {
    title: "AI-Powered SaaS",
    description:
      "Products built around AI assistants, document processing, analytics and automation.",
  },
  {
    title: "Internal Cloud Platforms",
    description:
      "Private cloud applications that connect teams, branches and partners on one system.",
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
  "Access your software from any device",
  "Recurring subscription revenue model",
  "One codebase serving many customers",
  "Easy integration with third-party services",
  "Secure, centralised data management",
  "Automated deployments and updates",
  "Architecture that scales with demand",
  "Faster launch with an MVP-first approach",
];

const process = [
  {
    number: "01",
    title: "Product Discovery",
    description:
      "We define your target users, business model, pricing plans and the core features for the first release.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "We plan the multi-tenant structure, database, integrations and UI, and share clickable designs.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "We build the product in short sprints with regular demos, including billing and third-party integrations.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "We deploy to the cloud with CI/CD and monitoring, then improve and scale the product after launch.",
  },
];

const faqs = [
  {
    question: "What is SaaS development?",
    answer:
      "SaaS (Software as a Service) development is building software that customers use through the internet on a subscription, instead of installing it. The provider hosts, updates and maintains the application for all users.",
  },
  {
    question: "What SaaS and cloud services does OPV AI Realty Tech provide?",
    answer:
      "We provide SaaS product and MVP development, cloud application development, multi-tenant database architecture, API integration, cloud infrastructure and DevOps, legacy modernisation and ongoing maintenance.",
  },
  {
    question: "Can you build a SaaS product from just an idea?",
    answer:
      "Yes. We start with product discovery to define users, features and pricing, then design, build and launch an MVP, and grow it into a full product based on user feedback.",
  },
  {
    question: "What is an MVP and why start with one?",
    answer:
      "An MVP (Minimum Viable Product) is the smallest version of your product that real users can pay for or test. It lets you launch faster, spend less upfront and validate demand before building more features.",
  },
  {
    question: "Can a SaaS application support multiple companies and users?",
    answer:
      "Yes. We use multi-tenant architecture so each customer company has its own secure workspace, with separate users, roles and permissions, all running on one platform.",
  },
  {
    question: "Can you add subscription billing to a SaaS product?",
    answer:
      "Yes. We integrate payment gateways for subscription plans, free trials, recurring payments, invoices and plan upgrades or downgrades.",
  },
  {
    question: "Which technologies do you use for SaaS and cloud applications?",
    answer:
      "We use Next.js, React.js, Node.js, TypeScript and Express.js, with PostgreSQL, MongoDB or Supabase databases, REST APIs, Docker and CI/CD pipelines on cloud hosting.",
  },
  {
    question: "Do you work with startups outside Hyderabad?",
    answer:
      "Yes. Our office is in Madhapur, Hyderabad, and we work with startups and businesses across India and abroad through remote collaboration.",
  },
];

export default function SaaSCloudSolutionsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "SaaS Development & Cloud Solutions",
        serviceType: "SaaS Product Development",
        description: PAGE_DESCRIPTION,
        url: PAGE_URL,
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "OPV AI Realty Tech Private Limited",
          url: SITE_URL,
          telephone: "+91-9963513939",
          email: "info@opvairealtytech.com",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "#101, Road No: 10, Jaya Kesav Avenue, Kakatiya Hills, Madhapur",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
        },
        areaServed: [
          { "@type": "City", name: "Hyderabad" },
          { "@type": "Country", name: "India" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "SaaS & Cloud Services",
          itemListElement: solutions.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              description: item.description,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "SaaS & Cloud Solutions",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
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
          {/* Visible breadcrumb (matches BreadcrumbList schema) */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#F4D545]">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="hover:text-[#F4D545]">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/85">
                SaaS & Cloud Solutions
              </li>
            </ol>
          </nav>

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E7B30F]/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#F4D545]">
            <Cloud className="h-4 w-4" aria-hidden="true" />
            SaaS & Cloud Solutions
          </div>

          {/* {" "} keeps a real space between the two lines for crawlers and screen readers */}
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            SaaS Development Company in Hyderabad{" "}
            <span className="block text-[#F4D545]">
              From MVP to Scalable Cloud Product
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech designs, builds and launches SaaS
            products and cloud applications for startups and businesses
            in Hyderabad and across India. We handle everything from
            the first MVP to multi-tenant architecture, subscription
            billing and cloud deployment.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your SaaS Idea
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:border-[#F4D545] hover:text-[#F4D545]"
            >
              Explore All Services
            </Link>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/60">
            <MapPin className="h-4 w-4 text-[#F4D545]" aria-hidden="true" />
            Madhapur, Hyderabad · Serving clients across India
          </p>
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
              Build Software Products Designed for Growth
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              SaaS lets customers sign up, pay monthly and use your
              software from any browser, with nothing to install. For
              you, it means recurring revenue and one product that
              serves hundreds of customers.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Building it right takes more than features. Multi-tenant
              data separation, secure logins, subscription billing and
              reliable cloud infrastructure decide whether a product
              can grow without being rebuilt.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              As a SaaS development company in Hyderabad, OPV AI Realty
              Tech starts with your business model and users, launches
              a focused MVP, then scales the product as customers
              arrive.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <Cloud className="h-12 w-12 text-[#F4D545]" aria-hidden="true" />

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Connected Software.{" "}
              <span className="block text-[#F4D545]">
                Smarter Operations.
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              Cloud products built on a planned architecture, ready
              for real users from day one.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "SaaS product and MVP development",
                "Multi-tenant cloud architecture",
                "Billing, database and API integration",
                "Deployment, DevOps and maintenance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F4D545]" />
                  <span className="text-sm font-medium text-white/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
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
              Everything you need to plan, build, launch and grow a
              cloud software product.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#E7B30F]/60 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-[#033505]/5 p-3">
                    <Icon className="h-7 w-7 text-[#265921]" aria-hidden="true" />
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

      {/* SAAS ESSENTIALS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Built In From Day One
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Essential Features of Every SaaS Product We Build
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {saasFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAF7] p-6"
                >
                  <Icon className="h-7 w-7 text-[#B88A00]" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold text-[#033505]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SAAS TYPES */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              What We Build
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Types of SaaS Products We Develop
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {saasTypes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-[#B88A00]" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-[#033505]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-600">
            Building software for property businesses?{" "}
            <Link
              href="/industries/real-estate"
              className="font-semibold text-[#265921] underline-offset-4 hover:text-[#B88A00] hover:underline"
            >
              See our real estate technology solutions
            </Link>
            .
          </p>
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
              Our SaaS & Cloud Technology Stack
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Proven, modern technologies chosen for speed, security
              and long-term maintainability.
            </p>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-3">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-xl border border-slate-200 bg-[#F8FAF7] px-5 py-3 text-sm font-bold text-[#265921]"
              >
                {technology}
              </li>
            ))}
          </ul>
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
              Why Build Your Product as SaaS?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              SaaS products are easier to sell, update and scale than
              installed software, and they create predictable
              recurring revenue.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B88A00]" />
                <span className="text-sm font-semibold leading-6 text-[#033505]">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
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
              Our SaaS Development Process
            </h2>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <li
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
              </li>
            ))}
          </ol>
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
      <section className="border-t border-slate-100 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-xl font-extrabold text-[#033505]">
            Explore Related Services
          </h2>

          {/* Make sure each of these routes exists before deploying */}
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            <li>
              <Link
                href="/services/software-development"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                Custom Software Development →
              </Link>
            </li>
            <li>
              <Link
                href="/services/mobile-app-development"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                Mobile App Development →
              </Link>
            </li>
            <li>
              <Link
                href="/services/crm-erp-development"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                CRM & ERP Development →
              </Link>
            </li>
            <li>
              <Link
                href="/services/ai-development"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                AI Development & AI Agents →
              </Link>
            </li>
            <li>
              <Link
                href="/services/website-development"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                Website Development →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#033505] px-5 py-20 text-center text-white sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7B30F]/15">
            <Lightbulb className="h-7 w-7 text-[#F4D545]" aria-hidden="true" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            Planning to Build a SaaS Product?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Share your product idea and target customers. We'll help
            you define the MVP and a clear roadmap to launch.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your SaaS Project
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href="tel:+919963513939"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:border-[#F4D545] hover:text-[#F4D545]"
            >
              Call +91 99635 13939
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}