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
  MapPin,
  Building2,
  Layers,
} from "lucide-react";

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_PATH = "/services/ai-development";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/opv-og-image.jpg`;

const PAGE_TITLE = "AI Development Company in Hyderabad | OPV AI Realty Tech";
const PAGE_DESCRIPTION =
  "AI agents, chatbots, workflow automation and AI integration for businesses in Hyderabad and across India. Talk to OPV AI Realty Tech.";

export const metadata: Metadata = {
  // `absolute` bypasses the layout's title.template, so the brand is not added twice
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AI Development & Automation Company in Hyderabad | OPV",
    description:
      "AI agents, chatbots, workflow automation and AI integration built around real business needs.",
    url: PAGE_URL,
    siteName: "OPV AI Realty Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "AI development and automation services by OPV AI Realty Tech, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development Company in Hyderabad | OPV AI Realty Tech",
    description:
      "AI agents, chatbots, workflow automation and AI integration for growing businesses.",
    images: [OG_IMAGE],
  },
};

const solutions = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Custom AI agents that answer enquiries, retrieve information from your documents and systems, and complete defined tasks such as booking, routing and follow-ups.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Voice Assistants",
    description:
      "Website, WhatsApp and voice assistants that handle common customer questions 24/7 and hand complex conversations to your team.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Automated workflows for lead capture, data entry, approvals, notifications and reporting, connected across the tools your team already uses.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description:
      "Add AI features such as search, summarisation, classification and content generation to your existing website, CRM, ERP or mobile app.",
  },
  {
    icon: Database,
    title: "AI-Powered Data Solutions",
    description:
      "Connect business data to AI so teams can ask questions in plain language, find documents faster and extract information from files.",
  },
  {
    icon: BarChart3,
    title: "Intelligent Business Insights",
    description:
      "AI-assisted dashboards and reports that highlight trends in sales, enquiries and operations so managers can act sooner.",
  },
];

const useCases = [
  {
    industry: "Real Estate",
    example:
      "AI assistants that answer property enquiries, qualify buyers and schedule site visits, connected to a real estate CRM.",
  },
  {
    industry: "Retail & E-commerce",
    example:
      "Product recommendation, order-status chatbots and automated customer follow-ups.",
  },
  {
    industry: "Healthcare",
    example:
      "Appointment booking assistants and automated patient reminders.",
  },
  {
    industry: "Education",
    example:
      "Admission enquiry bots and AI-assisted student support.",
  },
  {
    industry: "Professional Services",
    example:
      "Document processing, proposal drafting and internal knowledge assistants.",
  },
  {
    industry: "Startups & SMEs",
    example:
      "AI-powered MVPs and automation that let small teams handle more work.",
  },
];

const techStack = [
  "OpenAI & Anthropic models",
  "Open-source LLMs",
  "LangChain & LlamaIndex",
  "Vector databases",
  "Python & Node.js",
  "Next.js & React",
  "WhatsApp Business API",
  "REST & webhook integrations",
  "Supabase & PostgreSQL",
  "AWS, Azure & Google Cloud",
];

const benefits = [
  "Reduce repetitive manual work",
  "Respond to customers faster, around the clock",
  "Qualify and route leads automatically",
  "Connect AI with your existing business systems",
  "Build automation that scales as you grow",
  "Make decisions with clearer data",
];

const process = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "We map your business goals, current processes and the AI use cases with the clearest return.",
  },
  {
    number: "02",
    title: "Solution Planning",
    description:
      "We choose the models, data sources, integrations and success measures for the project.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "We build the AI solution and connect it to your website, CRM, WhatsApp or internal tools.",
  },
  {
    number: "04",
    title: "Testing & Improvement",
    description:
      "We test accuracy and safety, launch, then monitor and refine the solution with real usage.",
  },
];

const faqs = [
  {
    question: "What does an AI development company do?",
    answer:
      "An AI development company designs, builds and integrates software that uses artificial intelligence, such as AI agents, chatbots, document processing and workflow automation, so businesses can serve customers faster and reduce manual work.",
  },
  {
    question: "What AI development services does OPV AI Realty Tech provide?",
    answer:
      "We provide AI agent development, AI chatbots and voice assistants, AI integration into existing applications, business process automation, AI-powered data solutions and AI-assisted business reporting.",
  },
  {
    question: "Do you work with businesses outside Hyderabad?",
    answer:
      "Yes. Our office is in Madhapur, Hyderabad, and we work with businesses across India and abroad through remote collaboration.",
  },
  {
    question: "Can AI be integrated into my existing website, CRM or app?",
    answer:
      "In most cases, yes. AI features can be added to existing websites, CRMs, ERPs and mobile apps through APIs, provided the system allows integration and the required data is accessible.",
  },
  {
    question: "Can AI automate my business workflows?",
    answer:
      "AI works well for enquiry handling, lead qualification, document processing, customer support and other repetitive tasks. We review each process first and recommend automation only where it adds clear value.",
  },
  {
    question: "How do I start an AI project with OPV?",
    answer:
      "Contact us with your business requirement and the problem you want AI to solve. We will discuss the use case, suggest an approach and share the next steps.",
  },
];

export default function AIDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "AI Development & Automation Services",
        serviceType: "AI Development",
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
          name: "AI Development Services",
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
            name: "AI Development",
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
                AI Development
              </li>
            </ol>
          </nav>

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E7B30F]/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#F4D545]">
            <BrainCircuit className="h-4 w-4" />
            AI Development & Automation
          </div>

          {/* {" "} keeps a real space between the two lines for crawlers and screen readers */}
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            AI Development Company in Hyderabad{" "}
            <span className="block text-[#F4D545]">
              for Intelligent Business Automation
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech builds AI agents, chatbots, workflow
            automation and AI integrations for businesses in Hyderabad
            and across India. We start with your business problem, then
            build AI that saves time and improves customer experience.
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

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/60">
            <MapPin className="h-4 w-4 text-[#F4D545]" />
            Madhapur, Hyderabad · Serving clients across India
          </p>
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
              Artificial intelligence is changing how businesses handle
              information, respond to customers and run daily operations.
              Used well, AI answers routine questions instantly, processes
              documents in seconds and keeps leads from slipping through
              the cracks.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              As an AI development company based in Hyderabad, OPV AI
              Realty Tech designs and builds AI solutions around your
              requirements, from conversational assistants to end-to-end
              workflow automation. We define the problem and the success
              measure first, then choose the right technology.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Good AI needs clean data, clear goals, careful testing and
              human oversight where it matters. We build all four into
              every project.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <div className="inline-flex rounded-2xl border border-[#E7B30F]/30 bg-[#E7B30F]/10 p-4">
              <Sparkles className="h-10 w-10 text-[#F4D545]" />
            </div>

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Practical AI.{" "}
              <span className="block text-[#F4D545]">
                Meaningful Automation.
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              The right AI solution begins with a real business
              requirement and a clear implementation plan.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Understand the business problem",
                "Identify high-value AI use cases",
                "Integrate the right technologies",
                "Measure, evaluate and improve",
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
              End-to-end AI services, from strategy and development to
              integration and ongoing improvement.
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

      {/* USE CASES BY INDUSTRY */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Industry Use Cases
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              AI Solutions for Every Industry
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Examples of how businesses use AI agents and automation
              in their day-to-day work.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <article
                key={item.industry}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-[#B88A00]" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-[#033505]">
                    AI for {item.industry}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.example}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our Work
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              AI in Real Estate: Open Plots & Villas
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Open Plots & Villas is our AI-powered real estate discovery
              portal. It helps buyers find residential plots and villas
              through property listings, search, filtering and enquiry
              management, built with Next.js, React and Supabase.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.openplotsandvillas.com"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#033505] px-6 py-3 font-bold text-white transition hover:bg-[#265921]"
              >
                Visit Open Plots & Villas
                <ArrowRight className="h-5 w-5" />
              </a>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-lg border border-[#033505]/30 px-6 py-3 font-bold text-[#033505] transition hover:border-[#B88A00] hover:text-[#B88A00]"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <Layers className="h-6 w-6 text-[#B88A00]" aria-hidden="true" />
              <h3 className="text-xl font-extrabold text-[#033505]">
                Our AI Technology Stack
              </h3>
            </div>

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

      {/* BENEFITS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Business Benefits
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              How AI Automation Helps Your Business
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              AI helps teams process information faster, respond to
              customers sooner and spend less time on repetitive work.
              Results depend on the use case, the quality of your data
              and how well the solution fits your process.
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
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Our AI Development Process
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
                href="/services/saas-cloud-solutions"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                SaaS & Cloud Solutions →
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
                href="/services/ai-sales-agents"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                AI Sales Agents for Real Estate →
              </Link>
            </li>
            <li>
              <Link
                href="/industries/real-estate"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                Real Estate Technology →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#033505] px-5 py-20 text-center text-white sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7B30F]/15">
            <Cpu className="h-7 w-7 text-[#F4D545]" aria-hidden="true" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            Have an AI Project in Mind?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Tell us the problem you want to solve. Our Hyderabad team will
            suggest the right AI approach and next steps.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Talk to Our AI Team
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