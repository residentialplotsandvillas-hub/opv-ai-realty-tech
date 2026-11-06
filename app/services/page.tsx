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
  Lightbulb,
  MapPin,
  Building2,
  Scale,
  ShieldCheck,
} from "lucide-react";

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_PATH = "/services/software-development";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/opv-og-image.jpg`;

const PAGE_TITLE =
  "Custom Software Development Company in Hyderabad | OPV AI Realty Tech";
const PAGE_DESCRIPTION =
  "Custom web applications, business software, backends, APIs and software modernisation built with React, Next.js and Node.js for businesses in Hyderabad and India.";

export const metadata: Metadata = {
  // `absolute` bypasses the layout's title.template, so the brand is not added twice
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Custom Software Development in Hyderabad | OPV AI Realty Tech",
    description:
      "Custom web applications, business software, APIs and backend systems built around how your business works.",
    url: PAGE_URL,
    siteName: "OPV AI Realty Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Custom software development by OPV AI Realty Tech, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company in Hyderabad | OPV",
    description:
      "Custom web apps, business software, APIs and backend systems for growing businesses.",
    images: [OG_IMAGE],
  },
};

const solutions = [
  {
    icon: Monitor,
    title: "Web Application Development",
    description:
      "Fast, responsive web applications such as customer portals, booking systems, dashboards and internal tools that work on any device.",
  },
  {
    icon: Layers3,
    title: "Custom Business Software",
    description:
      "Software built around your exact processes, from order handling and approvals to inventory, billing and reporting.",
  },
  {
    icon: Database,
    title: "Backend & Database Development",
    description:
      "Secure, scalable backends and well-designed PostgreSQL or MongoDB databases that keep your data accurate and fast to query.",
  },
  {
    icon: Workflow,
    title: "API Development & Integration",
    description:
      "Build REST APIs and connect your software with payment gateways, WhatsApp, CRMs, accounting tools and third-party services.",
  },
  {
    icon: Smartphone,
    title: "Web + Mobile Platforms",
    description:
      "One backend powering your web app, admin panel and Android or iOS apps, so data stays in sync everywhere.",
  },
  {
    icon: Cloud,
    title: "Software Modernisation",
    description:
      "Rebuild slow or outdated software on a modern stack, improve performance and move it to the cloud without losing data.",
  },
];

const softwareTypes = [
  {
    title: "Real Estate Software",
    description:
      "Property portals, project inventory, booking management, channel partner and sales tracking systems.",
  },
  {
    title: "Customer & Partner Portals",
    description:
      "Secure logins where customers track orders, bookings, payments, documents and support tickets.",
  },
  {
    title: "Internal Business Tools",
    description:
      "Approval workflows, task tracking, HR, inventory and operations tools that replace spreadsheets.",
  },
  {
    title: "Booking & Scheduling Systems",
    description:
      "Appointment, reservation and slot booking with reminders and online payments.",
  },
  {
    title: "Dashboards & Reporting",
    description:
      "Live dashboards that pull data from your systems into clear reports for management.",
  },
  {
    title: "MVPs for Startups",
    description:
      "Focused first versions of new products, built quickly to test ideas with real users.",
  },
];

const comparison = [
  {
    label: "Fit to your process",
    custom: "Built around how your team works",
    offTheShelf: "Your team adapts to the software",
  },
  {
    label: "Cost over time",
    custom: "One-time build plus maintenance",
    offTheShelf: "Recurring per-user licence fees",
  },
  {
    label: "Features",
    custom: "Only what you need, added as you grow",
    offTheShelf: "Many unused features, some gaps",
  },
  {
    label: "Integrations",
    custom: "Connected directly to your tools",
    offTheShelf: "Limited to available plugins",
  },
  {
    label: "Ownership",
    custom: "You own the code and data",
    offTheShelf: "Vendor controls the product and roadmap",
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
  "Software that matches your workflow",
  "No per-user licence fees",
  "Integrates with your existing systems",
  "Fast, mobile-friendly interfaces",
  "Scales as your business grows",
  "Clean code you fully own",
  "Role-based security and access",
  "Ongoing support and improvements",
];

const process = [
  {
    number: "01",
    title: "Requirement Discovery",
    description:
      "We map the business problem, users, must-have features and how success will be measured.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "We plan the technology, database, integrations and screens, and agree a clear scope and timeline.",
  },
  {
    number: "03",
    title: "Agile Development",
    description:
      "We build in short sprints with regular demos, so you see progress and can give feedback early.",
  },
  {
    number: "04",
    title: "Testing, Launch & Support",
    description:
      "We test thoroughly, deploy to production, train your team and support the software after launch.",
  },
];

const faqs = [
  {
    question: "What is custom software development?",
    answer:
      "Custom software development is designing and building software specifically for one business's processes, users and goals, instead of using a generic off-the-shelf product.",
  },
  {
    question: "What types of software does OPV AI Realty Tech develop?",
    answer:
      "We build web applications, custom business software, customer portals, internal tools, dashboards, backends, APIs and integrations, including real estate software and startup MVPs.",
  },
  {
    question: "Should I choose custom software or off-the-shelf software?",
    answer:
      "Off-the-shelf software suits standard processes and small budgets. Custom software is better when your workflow is specific, you need deep integrations, your team is growing or licence fees are adding up.",
  },
  {
    question: "Can custom software integrate with my existing systems?",
    answer:
      "Yes. We connect custom software to your existing CRM, ERP, accounting, payment and messaging tools through APIs, as long as those systems allow integration.",
  },
  {
    question: "Which technologies do you use for software development?",
    answer:
      "We mainly use React, Next.js and TypeScript for the frontend, Node.js, Express.js and Python for the backend, and PostgreSQL or MongoDB databases, deployed on cloud platforms.",
  },
  {
    question: "Who owns the source code?",
    answer:
      "You do. Once the project is complete and paid for, the source code and data belong to your business.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing maintenance, bug fixes, security updates and new feature development after the software goes live.",
  },
  {
    question: "Do you work with businesses outside Hyderabad?",
    answer:
      "Yes. Our office is in Madhapur, Hyderabad, and we work with businesses across India and abroad through remote collaboration.",
  },
];

export default function SoftwareDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Custom Software Development",
        serviceType: "Custom Software Development",
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
          name: "Software Development Services",
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
            name: "Software Development",
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
                Software Development
              </li>
            </ol>
          </nav>

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E7B30F]/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#F4D545]">
            <Code2 className="h-4 w-4" aria-hidden="true" />
            Custom Software Engineering
          </div>

          {/* {" "} keeps a real space between the two lines for crawlers and screen readers */}
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Custom Software Development{" "}
            <span className="block text-[#F4D545]">
              Company in Hyderabad
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech builds custom web applications, business
            software, backends and API integrations for businesses in
            Hyderabad and across India. Software designed around how
            your team actually works, and code you fully own.
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
              Software Engineering
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Build Software Around the Way Your Business Works
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Generic software forces teams into workarounds:
              exporting to Excel, re-typing data and juggling several
              tools that don't talk to each other. Custom software
              removes that friction by fitting your exact workflow.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              We build web applications, backend systems, databases and
              integrations, choosing the architecture that matches your
              scope, users and growth plans.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              As a custom software development company in Hyderabad,
              OPV AI Realty Tech focuses on usability, security and
              maintainable code, so your software keeps working as the
              business grows.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <Code2 className="h-12 w-12 text-[#F4D545]" aria-hidden="true" />

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Software Built Around{" "}
              <span className="block text-[#F4D545]">
                Your Business Needs
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              Good software starts with the people who use it, the
              problems it solves and the systems it connects to.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Business requirement analysis",
                "Application architecture planning",
                "Agile development and integration",
                "Testing, launch and ongoing support",
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
              Our Capabilities
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Custom Software Development Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              End-to-end engineering for business applications and
              digital products.
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

      {/* SOFTWARE TYPES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              What We Build
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Types of Custom Software We Develop
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {softwareTypes.map((item) => (
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
            Building for a property business?{" "}
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

      {/* CUSTOM VS OFF-THE-SHELF */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              <Scale className="h-4 w-4" aria-hidden="true" />
              Comparison
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Custom Software vs Off-the-Shelf Software
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Off-the-shelf tools suit standard needs. Custom software
              pays off when your process is specific or licence fees
              keep growing.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-[#033505] text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 font-bold">
                    Factor
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold text-[#F4D545]">
                    Custom Software
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold">
                    Off-the-Shelf Software
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={row.label}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAF7]"}
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 font-semibold text-[#033505]"
                    >
                      {row.label}
                    </th>
                    <td className="px-5 py-4 text-slate-700">{row.custom}</td>
                    <td className="px-5 py-4 text-slate-600">
                      {row.offTheShelf}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              Our Software Development Technology Stack
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Modern, widely supported technologies, so your software
              is fast, secure and easy to maintain.
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
              Business Value
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Why Choose Custom Software Development?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Custom software removes daily workarounds, connects your
              tools and becomes a long-term business asset you own.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#E7B30F]/40 bg-[#E7B30F]/10 p-5">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#B88A00]" aria-hidden="true" />
              <p className="text-sm leading-6 text-[#033505]">
                Security is built in: encrypted connections, role-based
                access, input validation and regular updates.
              </p>
            </div>
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
      <section className="border-t border-slate-100 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-xl font-extrabold text-[#033505]">
            Explore Related Services
          </h2>

          {/* Make sure each of these routes exists before deploying */}
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            <li>
              <Link
                href="/services/website-development"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                Website Development →
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
                href="/services/saas-development"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                SaaS Product Development →
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
                href="/services/saas-cloud-solutions"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                Cloud & DevOps →
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
            Have a Software Project in Mind?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Share your requirements and the problem you want solved.
            We'll suggest the right approach, scope and timeline.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your Project
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