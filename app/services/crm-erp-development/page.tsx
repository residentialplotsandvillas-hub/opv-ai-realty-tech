import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Boxes,
  Database,
  Workflow,
  BarChart3,
  Settings,
  CheckCircle2,
  Building2,
  Lightbulb,
  ClipboardList,
  MapPin,
  Layers,
  Scale,
} from "lucide-react";

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_PATH = "/services/crm-erp-development";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/opv-og-image.jpg`;

const PAGE_TITLE =
  "Custom CRM & ERP Development Company in Hyderabad | OPV AI Realty Tech";
const PAGE_DESCRIPTION =
  "Custom CRM and ERP software for lead management, sales pipelines, inventory, HR and reporting. Built for businesses in Hyderabad, including real estate CRM.";

export const metadata: Metadata = {
  // `absolute` bypasses the layout's title.template, so the brand is not added twice
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Custom CRM & ERP Development in Hyderabad | OPV AI Realty Tech",
    description:
      "Custom CRM, ERP and real estate CRM software built around your sales, operations and reporting workflows.",
    url: PAGE_URL,
    siteName: "OPV AI Realty Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Custom CRM and ERP development by OPV AI Realty Tech, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom CRM & ERP Development Company in Hyderabad | OPV",
    description:
      "Custom CRM, ERP and real estate CRM software for growing businesses.",
    images: [OG_IMAGE],
  },
};

const solutions = [
  {
    icon: Users,
    title: "Custom CRM Development",
    description:
      "CRM software built around your sales process: contacts, leads, follow-ups, pipeline stages, call notes and team performance in one place.",
  },
  {
    icon: Boxes,
    title: "Custom ERP Development",
    description:
      "ERP systems that connect inventory, purchasing, orders, finance, HR and operations so every department works from the same data.",
  },
  {
    icon: Workflow,
    title: "Business Workflow Automation",
    description:
      "Digital approvals, automatic task assignment, reminders and status updates that replace spreadsheets and manual follow-ups.",
  },
  {
    icon: ClipboardList,
    title: "Lead & Sales Management",
    description:
      "Capture leads from your website, ads and portals, assign them automatically and track every follow-up until the deal closes.",
  },
  {
    icon: BarChart3,
    title: "Reports & Business Dashboards",
    description:
      "Real-time dashboards for sales, collections, inventory and team activity, with exportable reports for management reviews.",
  },
  {
    icon: Database,
    title: "Database & System Integration",
    description:
      "Connect your CRM or ERP with accounting software, payment gateways, WhatsApp, email and other business tools through APIs.",
  },
];

const modules = [
  "Lead Management",
  "Customer Management",
  "Sales Pipeline",
  "Task Management",
  "Employee & HR Management",
  "Inventory Management",
  "Order Management",
  "Invoicing & Payments",
  "Reports & Analytics",
  "Role-Based Access",
  "Workflow Automation",
  "WhatsApp, Email & SMS Notifications",
];

const comparison = [
  {
    label: "Fit to your process",
    custom: "Built around how your team works",
    readyMade: "Your team adapts to the software",
  },
  {
    label: "Licence cost",
    custom: "No per-user monthly licence",
    readyMade: "Per-user fees that grow with your team",
  },
  {
    label: "Features",
    custom: "Only the modules you need",
    readyMade: "Many unused features, some gaps",
  },
  {
    label: "Integrations",
    custom: "Connected to your exact tools",
    readyMade: "Limited to available plugins",
  },
  {
    label: "Data ownership",
    custom: "Your data on your own servers or cloud",
    readyMade: "Data held by the vendor",
  },
];

const techStack = [
  "Next.js & React",
  "Node.js & Python",
  "PostgreSQL & Supabase",
  "REST APIs & webhooks",
  "Role-based authentication",
  "WhatsApp Business API",
  "Payment gateway integration",
  "AWS, Azure & Google Cloud",
  "Responsive web & mobile apps",
  "AI-assisted lead scoring",
];

const benefits = [
  "All business information in one system",
  "Complete customer and lead history",
  "Clear visibility into the sales pipeline",
  "Organised, trackable internal workflows",
  "Role-based access and permissions",
  "Less repetitive manual data entry",
  "Connected business applications",
  "Live reports for faster decisions",
];

const process = [
  {
    number: "01",
    title: "Business Analysis",
    description:
      "We study your operations, departments, users, current tools and the reports management needs.",
  },
  {
    number: "02",
    title: "System Planning",
    description:
      "We define modules, workflows, database structure, user roles and integrations, and agree the scope.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "We build the modules, dashboards and integrations in stages, so you can review progress early.",
  },
  {
    number: "04",
    title: "Testing, Training & Launch",
    description:
      "We test workflows and permissions, migrate your data, train your team and support the system after launch.",
  },
];

const faqs = [
  {
    question: "What is CRM software?",
    answer:
      "Customer Relationship Management (CRM) software helps businesses store customer information, manage leads, track every interaction and follow-up, and run sales and customer service from one system.",
  },
  {
    question: "What is ERP software?",
    answer:
      "Enterprise Resource Planning (ERP) software connects core business processes such as inventory, purchasing, orders, finance and HR, so every department works from shared, up-to-date data.",
  },
  {
    question: "Does OPV AI Realty Tech develop custom CRM software?",
    answer:
      "Yes. We build custom CRM software around your customer records, lead stages, sales workflow, user roles and reporting needs, including CRMs for real estate businesses.",
  },
  {
    question: "Why choose a custom CRM over a ready-made CRM?",
    answer:
      "A custom CRM matches your exact sales process, avoids per-user licence fees, includes only the features you need and integrates directly with your existing tools. Ready-made CRMs suit teams whose process fits the software as it is.",
  },
  {
    question: "Can CRM and ERP systems be integrated?",
    answer:
      "Yes. CRM and ERP systems can share customer, order and billing data through APIs, so a closed deal in the CRM can create an order and invoice in the ERP automatically.",
  },
  {
    question: "Can you develop CRM software for real estate businesses?",
    answer:
      "Yes. Real estate is our specialist domain. A real estate CRM can manage property enquiries, lead assignment, site visits, follow-ups, bookings, channel partners and sales reports.",
  },
  {
    question: "Can you migrate data from Excel or our existing CRM?",
    answer:
      "Yes. We can import customer, lead and product data from spreadsheets or export files from your current system as part of the project.",
  },
  {
    question: "Do you work with businesses outside Hyderabad?",
    answer:
      "Yes. Our office is in Madhapur, Hyderabad, and we work with businesses across India and abroad through remote collaboration.",
  },
];

export default function CRMERPDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Custom CRM & ERP Development",
        serviceType: "CRM and ERP Software Development",
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
          name: "CRM & ERP Development Services",
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
            name: "CRM & ERP Development",
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
                CRM & ERP Development
              </li>
            </ol>
          </nav>

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E7B30F]/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#F4D545]">
            <Building2 className="h-4 w-4" aria-hidden="true" />
            Business Management Software
          </div>

          {/* {" "} keeps a real space between the two lines for crawlers and screen readers */}
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Custom CRM & ERP Development in Hyderabad{" "}
            <span className="block text-[#F4D545]">
              Built Around Your Business
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech builds custom CRM and ERP software for
            businesses in Hyderabad and across India. Manage leads,
            customers, sales, inventory, teams and reports in one
            system designed around how your business actually works.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your CRM or ERP
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
              Business Systems & Automation
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Bring Your Business Operations into One Connected System
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              When customer details live in WhatsApp, leads sit in
              spreadsheets and stock is tracked on paper, teams lose
              time, follow-ups get missed and managers can't see what's
              really happening.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              A CRM organises your customers, leads and sales. An ERP
              connects operations such as inventory, orders, finance
              and HR. Together they give every team the same accurate,
              up-to-date information.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              As a CRM and ERP development company in Hyderabad, OPV AI
              Realty Tech maps your processes first, then builds
              software that fits them instead of forcing your team to
              change how they work.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <Settings className="h-12 w-12 text-[#F4D545]" aria-hidden="true" />

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Better Systems.{" "}
              <span className="block text-[#F4D545]">
                More Organised Operations.
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              Business software designed around your teams, processes
              and customer interactions.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Customer and lead management",
                "Business process management",
                "Centralised operational data",
                "Dashboards and reporting",
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
              Our Development Services
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Custom CRM & ERP Software Solutions
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Management systems that reflect your business structure,
              users and day-to-day operations.
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

      {/* MODULES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Flexible Business Modules
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              CRM & ERP Modules We Build
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Choose the modules your business needs now and add more
              as you grow.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <li
                key={module}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#F8FAF7] p-5"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#B88A00]" />
                <span className="font-semibold text-[#033505]">{module}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REAL ESTATE CRM */}
      <section className="bg-[#033505] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#F4D545]">
              Our Specialist Domain
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Real Estate CRM Software for Developers & Agents
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              Real estate teams juggle enquiries from portals, ads and
              walk-ins, plus site visits, follow-ups, bookings and
              channel partners. A real estate CRM keeps every lead and
              every conversation in one place, so no buyer slips away.
            </p>

            <p className="mt-5 leading-8 text-white/75">
              With roots in real estate technology and our own property
              platform,{" "}
              <a
                href="https://www.openplotsandvillas.com"
                target="_blank"
                rel="noopener"
                className="font-semibold text-[#F4D545] underline underline-offset-4"
              >
                Open Plots & Villas
              </a>
              , we understand how property sales work in Hyderabad.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
              >
                Discuss a Real Estate CRM
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/industries/real-estate"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:border-[#F4D545] hover:text-[#F4D545]"
              >
                Real Estate Technology
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 sm:p-10">
            <Building2 className="h-12 w-12 text-[#F4D545]" aria-hidden="true" />

            <h3 className="mt-7 text-2xl font-bold">
              Real Estate CRM Modules
            </h3>

            <ul className="mt-7 space-y-4">
              {[
                "Property enquiry capture from portals and ads",
                "Automatic lead assignment and follow-ups",
                "Site visit scheduling and reminders",
                "Buyer records and booking tracking",
                "Channel partner management",
                "Project, plot and unit inventory",
                "Sales and collection reports",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F4D545]" />
                  <span className="text-sm text-white/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CUSTOM VS READY-MADE */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              <Scale className="h-4 w-4" aria-hidden="true" />
              Comparison
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Custom CRM vs Ready-Made CRM
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Ready-made CRMs suit standard processes. A custom CRM
              makes sense when your workflow is specific, your team is
              growing or you need deep integrations.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-[#033505] text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 font-bold">
                    Factor
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold text-[#F4D545]">
                    Custom CRM
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold">
                    Ready-Made CRM
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
                      {row.readyMade}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BENEFITS + TECH */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Business Benefits
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Create More Organised Business Workflows
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A well-planned CRM or ERP gives every team a single,
              reliable place to manage information and daily work.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
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

          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <Layers className="h-6 w-6 text-[#B88A00]" aria-hidden="true" />
              <h3 className="text-xl font-extrabold text-[#033505]">
                Technology We Use
              </h3>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Modern, secure and scalable technology that runs in the
              browser and on mobile.
            </p>

            <ul className="mt-6 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-slate-200 bg-[#F8FAF7] px-4 py-2 text-sm font-semibold text-[#033505]"
                >
                  {tech}
                </li>
              ))}
            </ul>
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
              Our CRM & ERP Development Process
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
              CRM & ERP Development FAQs
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
                href="/services/business-automation"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                Business Process Automation →
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
                href="/services/software-development"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                Custom Software Development →
              </Link>
            </li>
            <li>
              <Link
                href="/services/saas-cloud-solutions"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                SaaS & Cloud Solutions →
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
            Ready to Run Your Business on One System?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Share your workflows and the problems you want solved. We'll
            suggest the right CRM or ERP modules and a clear plan to
            build them.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your Requirements
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