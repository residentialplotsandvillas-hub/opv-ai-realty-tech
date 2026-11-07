import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Workflow,
  Bot,
  Zap,
  Database,
  MessageSquare,
  RefreshCw,
  CheckCircle2,
  Network,
  Lightbulb,
  MapPin,
  Building2,
  Layers,
} from "lucide-react";

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_PATH = "/services/business-automation";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/opv-og-image.jpg`;

const PAGE_TITLE =
  "Business Process Automation Company in Hyderabad | OPV AI Realty Tech";
const PAGE_DESCRIPTION =
  "Automate lead management, CRM updates, WhatsApp notifications, approvals and reports. Business process automation for companies in Hyderabad and across India.";

export const metadata: Metadata = {
  // `absolute` bypasses the layout's title.template, so the brand is not added twice
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Business Process Automation in Hyderabad | OPV AI Realty Tech",
    description:
      "Workflow automation, CRM and API integration, automated notifications and AI-assisted processes for growing businesses.",
    url: PAGE_URL,
    siteName: "OPV AI Realty Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Business process automation services by OPV AI Realty Tech, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Process Automation Company in Hyderabad | OPV",
    description:
      "Automate leads, CRM updates, notifications, approvals and reports with OPV AI Realty Tech.",
    images: [OG_IMAGE],
  },
};

const solutions = [
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Turn repetitive tasks such as data entry, approvals and task handovers into structured digital workflows that run without manual follow-up.",
  },
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description:
      "Add AI to workflows that read emails and documents, classify enquiries, extract data and draft replies, with human review where it matters.",
  },
  {
    icon: MessageSquare,
    title: "Automated Customer Communication",
    description:
      "Send instant WhatsApp, SMS and email replies, reminders and status updates when customers enquire, book or buy.",
  },
  {
    icon: Database,
    title: "CRM & Database Automation",
    description:
      "Capture leads from your website, ads and portals straight into your CRM, assign them to the right person and keep records up to date.",
  },
  {
    icon: Network,
    title: "Application & API Integration",
    description:
      "Connect your website, mobile app, CRM, accounting, payment and messaging tools through APIs and webhooks so data flows between them.",
  },
  {
    icon: RefreshCw,
    title: "Reporting & Task Automation",
    description:
      "Generate daily and weekly reports automatically, assign recurring tasks and alert managers when something needs attention.",
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
  "Data synchronisation between apps",
  "Invoice and payment reminders",
];

const industryExamples = [
  {
    industry: "Real Estate",
    example:
      "Capture enquiries from property portals and ads, assign them to sales executives, send WhatsApp brochures and schedule site-visit reminders automatically.",
  },
  {
    industry: "Retail & E-commerce",
    example:
      "Automate order confirmations, stock alerts, abandoned-cart reminders and delivery updates.",
  },
  {
    industry: "Healthcare",
    example:
      "Send appointment confirmations and reminders, and sync patient bookings with clinic schedules.",
  },
  {
    industry: "Education",
    example:
      "Route admission enquiries to counsellors, send fee reminders and automate student communication.",
  },
  {
    industry: "Manufacturing & Logistics",
    example:
      "Automate purchase approvals, inventory updates, dispatch notifications and operations reports.",
  },
  {
    industry: "Professional Services",
    example:
      "Automate client onboarding, document collection, invoicing and recurring task assignments.",
  },
];

const tools = [
  "WhatsApp Business API",
  "Email & SMS gateways",
  "n8n, Zapier & Make",
  "Custom Node.js & Python workflows",
  "REST APIs & webhooks",
  "CRM platforms & custom CRMs",
  "Google Workspace & Microsoft 365",
  "Payment gateways",
  "Supabase & PostgreSQL",
  "OpenAI & other AI models",
];

const benefits = [
  "Cut repetitive manual work",
  "Respond to leads within minutes",
  "Keep data consistent across systems",
  "Coordinate teams with fewer follow-ups",
  "Connect separate business applications",
  "Never miss a reminder or notification",
  "See operations in real time",
  "Scale without adding admin headcount",
];

const process = [
  {
    number: "01",
    title: "Understand Your Workflow",
    description:
      "We map your current process, the tools you use and the repetitive tasks that cost your team the most time.",
  },
  {
    number: "02",
    title: "Automation Planning",
    description:
      "We define triggers, workflow steps, system connections, permissions and how success will be measured.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "We build the workflows and connect your apps, databases, CRM and messaging channels.",
  },
  {
    number: "04",
    title: "Testing & Improvement",
    description:
      "We test every path including errors and exceptions, go live, then monitor and refine the automation.",
  },
];

const faqs = [
  {
    question: "What is business process automation?",
    answer:
      "Business process automation uses software to run repetitive tasks and coordinate business activities, such as capturing leads, updating records, sending notifications and generating reports, with little or no manual work.",
  },
  {
    question: "What business automation services does OPV AI Realty Tech offer?",
    answer:
      "We offer workflow and process automation, AI-powered automation, automated WhatsApp, SMS and email communication, CRM and database automation, API integration between business applications, and automated reporting.",
  },
  {
    question: "Can you automate lead management?",
    answer:
      "Yes. We can capture leads from your website, ads and property portals, add them to your CRM, assign them to the right team member, send instant replies and schedule follow-up reminders.",
  },
  {
    question: "Can automation connect different business applications?",
    answer:
      "Yes. Applications can be connected through APIs, webhooks or automation platforms, as long as each application supports integration.",
  },
  {
    question: "Can AI be used in business automation?",
    answer:
      "Yes. AI can classify enquiries, read documents, extract data and draft responses inside a workflow. We keep human review in place for important decisions.",
  },
  {
    question: "Is business automation suitable for small businesses?",
    answer:
      "Yes. Small businesses often benefit most, because automating enquiries, reminders and reports frees a small team to focus on customers and growth.",
  },
  {
    question: "Do you work with businesses outside Hyderabad?",
    answer:
      "Yes. Our office is in Madhapur, Hyderabad, and we work with businesses across India and abroad through remote collaboration.",
  },
];

export default function BusinessAutomationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Business Process Automation Services",
        serviceType: "Business Process Automation",
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
          name: "Business Automation Services",
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
            name: "Business Automation",
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
                Business Automation
              </li>
            </ol>
          </nav>

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E7B30F]/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#F4D545]">
            <Zap className="h-4 w-4" aria-hidden="true" />
            Intelligent Business Automation
          </div>

          {/* {" "} keeps a real space between the two lines for crawlers and screen readers */}
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Business Process Automation in Hyderabad{" "}
            <span className="block text-[#F4D545]">
              for Smarter, Faster Operations
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech automates lead management, CRM updates,
            WhatsApp and email notifications, approvals and reports for
            businesses in Hyderabad and across India. We connect your
            tools so work moves forward without manual follow-up.
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
              Intelligent Workflow Solutions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Reduce Manual Work with Business Automation
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Every business repeats the same tasks daily: answering
              enquiries, updating records, assigning work, sending
              reminders and preparing reports. Done by hand, these
              tasks slow teams down and cause missed follow-ups.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Business process automation lets software handle these
              steps. A new lead can reach your CRM, get assigned to a
              salesperson and receive a WhatsApp reply within seconds,
              with no one copying data between screens.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              As a business automation company in Hyderabad, OPV AI
              Realty Tech finds the tasks worth automating, builds the
              workflows and connects the applications your team
              already uses.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <Workflow className="h-12 w-12 text-[#F4D545]" aria-hidden="true" />

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Automate Repetitive Tasks.{" "}
              <span className="block text-[#F4D545]">
                Organise Business Workflows.
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              Connect the systems your business uses and build
              workflows around how your team actually works.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Workflow automation",
                "AI-assisted business processes",
                "Application and API integration",
                "Automated notifications and reports",
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
              Automation for customer management, internal operations
              and connected business applications.
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
              Common workflows we automate for growing businesses.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#F8FAF7] p-5"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#B88A00]" />
                <span className="font-semibold text-[#033505]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* INDUSTRY EXAMPLES */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Industry Examples
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Workflow Automation by Industry
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industryExamples.map((item) => (
              <article
                key={item.industry}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-[#B88A00]" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-[#033505]">
                    Automation for {item.industry}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.example}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-600">
            Working in property?{" "}
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

      {/* BENEFITS + TOOLS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Business Benefits
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Make Everyday Business Activities More Efficient
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Well-designed automation helps teams coordinate work,
              cut repetitive data entry and keep processes consistent
              as the business grows.
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

          <div className="rounded-3xl border border-slate-200 bg-[#F8FAF7] p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <Layers className="h-6 w-6 text-[#B88A00]" aria-hidden="true" />
              <h3 className="text-xl font-extrabold text-[#033505]">
                Automation Tools & Platforms We Use
              </h3>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              We pick the right tool for each workflow, from no-code
              platforms for quick wins to custom code for complex
              processes.
            </p>

            <ul className="mt-6 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#033505]"
                >
                  {tool}
                </li>
              ))}
            </ul>
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
              Our Business Automation Process
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
      <section className="py-20 sm:py-24">
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
      <section className="border-t border-slate-100 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-xl font-extrabold text-[#033505]">
            Explore Related Services
          </h2>

          {/* Make sure each of these routes exists before deploying */}
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
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
                href="/services/crm-erp-development"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                CRM & ERP Development →
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
                href="/services/data-engineering"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                Data Engineering & BI →
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
            Ready to Automate Your Business?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Tell us which tasks eat up your team's time and which
            systems need to work together. We'll suggest what to
            automate first.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your Automation Project
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