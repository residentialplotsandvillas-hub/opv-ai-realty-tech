
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
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
  Layers3,
  ShieldCheck,
  TrendingUp,
  Smartphone,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Rocket,
  Plane,
  Landmark,
  ChevronRight,
  Phone,
} from "lucide-react";

// ==========================================
// SITE CONFIGURATION
// ==========================================

const SITE_URL = "https://www.opvairealtytech.com";

const PAGE_PATH =
  "/solutions/ai-intelligent-automation";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const OG_IMAGE =
  `${SITE_URL}/images/opv-og-image.jpg`;

const PAGE_TITLE =
  "AI Development Company in Hyderabad | OPV AI Realty Tech";

const PAGE_DESCRIPTION =
  "AI development company in Hyderabad offering AI agents, chatbots, workflow automation and custom AI integrations for businesses across India.";

// ==========================================
// SEO METADATA
// ==========================================

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },

  description: PAGE_DESCRIPTION,

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_URL,
    siteName: "OPV AI Realty Tech",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt:
          "AI Development and Intelligent Automation by OPV AI Realty Tech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

// ==========================================
// AI DEVELOPMENT SERVICES
// ==========================================

const solutions = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Custom AI agents designed to answer customer enquiries, retrieve business information, assist with lead qualification and perform defined tasks across connected business systems.",
    href: "/solutions/ai-intelligent-automation",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Voice Assistants",
    description:
      "Conversational AI assistants for websites, WhatsApp and voice-based customer interactions, with support for routine enquiries and human escalation.",
    href: "/solutions/ai-intelligent-automation",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Automated workflows for lead capture, follow-ups, data entry, approvals, notifications and operational reporting, integrated with your existing tools.",
    href: "/solutions/ai-intelligent-automation",
  },
  {
    icon: BrainCircuit,
    title: "Custom AI Integration",
    description:
      "Integrate AI capabilities such as intelligent search, summarization, document processing and content generation into websites, CRM, ERP and mobile applications.",
    href: "/solutions/ai-intelligent-automation",
  },
  {
    icon: Database,
    title: "AI-Powered Data Solutions",
    description:
      "Connect business information with intelligent search, document retrieval, structured data extraction and natural-language access to authorized information.",
    href: "/solutions/data-business-intelligence",
  },
  {
    icon: BarChart3,
    title: "AI Business Intelligence",
    description:
      "Develop AI-assisted dashboards and reporting workflows that help teams understand customer enquiries, sales activity and operational performance.",
    href: "/solutions/data-business-intelligence",
  },
];

// ==========================================
// INDUSTRY USE CASES
// ==========================================

const useCases = [
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "AI property enquiry assistants, buyer qualification, site visit scheduling, CRM integration and automated follow-ups.",
    href: "/industries/real-estate",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description:
      "Product enquiry chatbots, customer assistance, order-related workflows and personalized shopping support.",
    href: "/industries/retail-ecommerce",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Appointment assistance, administrative workflows and patient communication tools with appropriate privacy safeguards.",
    href: "/industries/healthcare",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Admission enquiry assistants, student support, knowledge search and administrative automation.",
    href: "/industries/education",
  },
  {
    icon: Plane,
    title: "Travel & Tourism",
    description:
      "AI travel enquiry assistants, package information, itinerary support, booking workflows and travel CRM integration.",
    href: "/industries/travel-tourism",
  },
  {
    icon: Landmark,
    title: "Banking & Financial Services",
    description:
      "AI-assisted customer service, document workflows, business reporting and controlled automation for financial service operations.",
    href: "/industries/banking-finance",
  },
  {
    icon: Rocket,
    title: "Startups & SMEs",
    description:
      "AI-powered MVPs, customer support automation, lead management and productivity tools for growing teams.",
    href: "/industries/startups-smes",
  },
  {
    icon: Layers3,
    title: "Enterprise & Corporate",
    description:
      "Internal knowledge assistants, workflow integration, business intelligence and enterprise process automation.",
    href: "/industries/enterprise-corporate",
  },
];

// ==========================================
// TECHNOLOGY STACK
// ==========================================

// Confirm specific technologies are used or
// supported before publishing this list.

const techStack = [
  "OpenAI & Gemini APIs",
  "Large Language Models",
  "Python & Node.js",
  "Next.js & React",
  "Supabase & PostgreSQL",
  "Vector Search & RAG",
  "REST APIs & Webhooks",
  "WhatsApp Business API",
  "Cloud Infrastructure",
  "AI Workflow Integrations",
];

// ==========================================
// BUSINESS BENEFITS
// ==========================================

const benefits = [
  {
    title: "Reduce Repetitive Work",
    description:
      "Automate suitable manual tasks so employees can focus on higher-value business activities.",
  },
  {
    title: "Improve Customer Response",
    description:
      "Provide faster responses to routine enquiries through AI-powered customer assistance.",
  },
  {
    title: "Strengthen Lead Management",
    description:
      "Capture, organize, qualify and route customer enquiries through connected workflows.",
  },
  {
    title: "Connect Existing Systems",
    description:
      "Integrate AI capabilities with compatible websites, CRM platforms and business applications.",
  },
  {
    title: "Support Business Scalability",
    description:
      "Design workflows that can evolve as customer demand and operational requirements increase.",
  },
  {
    title: "Improve Decision-Making",
    description:
      "Use reporting, analytics and intelligent data access to support more informed business decisions.",
  },
];

// ==========================================
// DEVELOPMENT PROCESS
// ==========================================

const process = [
  {
    number: "01",
    title: "Discovery & Requirement Analysis",
    description:
      "Understand your business objectives, operational challenges, existing systems and opportunities for AI adoption.",
  },
  {
    number: "02",
    title: "AI Strategy & Solution Architecture",
    description:
      "Define the proposed AI capabilities, data requirements, integrations, security considerations and success measures.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Develop the AI solution and connect it with compatible business applications, APIs and workflows.",
  },
  {
    number: "04",
    title: "Testing, Deployment & Improvement",
    description:
      "Evaluate functionality, accuracy, reliability and user experience before deployment and subsequent refinement.",
  },
];

// ==========================================
// FAQ CONTENT
// ==========================================

const faqs = [
  {
    question:
      "What does an AI development company do?",
    answer:
      "An AI development company designs, develops and integrates software that uses artificial intelligence. Typical solutions include AI agents, chatbots, document processing, intelligent search, predictive tools and workflow automation.",
  },
  {
    question:
      "What AI development services does OPV AI Realty Tech offer?",
    answer:
      "OPV AI Realty Tech focuses on AI agents, chatbots, voice assistants, custom AI integrations, workflow automation, AI-powered data solutions and intelligent business reporting.",
  },
  {
    question:
      "Is OPV AI Realty Tech based in Hyderabad?",
    answer:
      "Yes. OPV AI Realty Tech is based in Madhapur, Hyderabad, Telangana, and provides business technology solutions for organizations across India.",
  },
  {
    question:
      "Can AI be integrated into an existing website or CRM?",
    answer:
      "In many cases, yes. AI can be connected to existing websites, CRM platforms, ERP systems and mobile applications through suitable APIs or integrations, depending on system compatibility and data access.",
  },
  {
    question:
      "How can AI automation help small businesses?",
    answer:
      "AI automation can help small businesses handle routine enquiries, organize leads, prepare information, automate follow-ups and reduce repetitive administrative work. The benefits depend on the workflow and implementation.",
  },
  {
    question:
      "Do you provide AI chatbots for WhatsApp and websites?",
    answer:
      "AI chatbots can be developed for websites and supported messaging platforms, including WhatsApp Business integrations where the necessary API access and platform approvals are available.",
  },
  {
    question:
      "How much does custom AI development cost?",
    answer:
      "AI development costs depend on the project scope, model usage, integrations, data requirements, security controls and ongoing maintenance. A requirement assessment helps determine an appropriate implementation approach and budget.",
  },
  {
    question:
      "How do I start an AI project with OPV AI Realty Tech?",
    answer:
      "Share your business requirements through the contact page. The initial discussion can cover the problem, proposed use cases, integration requirements and possible next steps.",
  },
];

// ==========================================
// RELATED SOLUTIONS
// ==========================================

const relatedSolutions = [
  {
    title: "Software & Product Engineering",
    href: "/solutions/software-engineering",
  },
  {
    title: "SaaS, Cloud & DevOps",
    href: "/solutions/saas-cloud-devops",
  },
  {
    title: "CRM, ERP & Business Systems",
    href: "/solutions/crm-erp-business-systems",
  },
  {
    title: "Data & Business Intelligence",
    href: "/solutions/data-business-intelligence",
  },
  {
    title: "Web & Mobile Experiences",
    href: "/solutions/web-mobile-experiences",
  },
  {
    title: "Digital Growth & Marketing",
    href: "/solutions/digital-growth-marketing",
  },
];

// ==========================================
// PAGE COMPONENT
// ==========================================

export default function AIDevelopmentPage() {

  // ========================================
  // STRUCTURED DATA
  // ========================================

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: "en-IN",
        about: {
          "@id": `${PAGE_URL}#service`,
        },
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        breadcrumb: {
          "@id": `${PAGE_URL}#breadcrumb`,
        },
      },

      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name:
          "AI Development & Intelligent Automation Services",
        serviceType:
          "Artificial Intelligence Software Development",
        description: PAGE_DESCRIPTION,
        url: PAGE_URL,

        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name:
            "OPV AI Realty Tech Private Limited",
          url: SITE_URL,
        },

        areaServed: [
          {
            "@type": "City",
            name: "Hyderabad",
          },
          {
            "@type": "Country",
            name: "India",
          },
        ],

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI Development Services",

          itemListElement: solutions.map((item) => ({
            "@type": "OfferCatalog",
            name: item.title,
            description: item.description,
          })),
        },
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Solutions",
            item: `${SITE_URL}/solutions`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name:
              "AI & Intelligent Automation",
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <main className="overflow-hidden bg-white text-[#263C50]">

      {/* ====================================
          STRUCTURED DATA
      ==================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData
          ).replace(/</g, "\\u003c"),
        }}
      />

      {/* ====================================
          HERO SECTION
      ==================================== */}

      <section className="relative border-b border-[#E5E9E3] bg-[#F8F6F0]">

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">

          {/* BREADCRUMBS */}

          <nav
            aria-label="Breadcrumb"
            className="mb-9"
          >
            <ol className="flex flex-wrap items-center gap-2 text-xs text-[#647586]">

              <li>
                <Link
                  href="/"
                  className="hover:text-[#075B3B]"
                >
                  Home
                </Link>
              </li>

              <li>
                <ChevronRight className="h-3 w-3" />
              </li>

              <li>
                <Link
                  href="/solutions"
                  className="hover:text-[#075B3B]"
                >
                  Solutions
                </Link>
              </li>

              <li>
                <ChevronRight className="h-3 w-3" />
              </li>

              <li
                aria-current="page"
                className="font-semibold text-[#075B3B]"
              >
                AI & Intelligent Automation
              </li>

            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

            {/* HERO CONTENT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.13em] text-[#075B3B]">
                <BrainCircuit className="h-4 w-4" />
                AI Development & Automation
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[54px]">
                AI Development Company in Hyderabad{" "}
                <span className="mt-3 block text-[#075B3B]">
                  Building Intelligent Business Solutions
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#526577] sm:text-lg">
                OPV AI Realty Tech is a Hyderabad-based
                business technology company developing
                custom AI agents, intelligent chatbots,
                voice assistants, workflow automation
                and AI-powered software solutions for
                startups, SMEs and enterprises across India.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#526577] sm:text-base">
                We help businesses integrate artificial
                intelligence into websites, mobile apps,
                CRM systems, customer service and
                everyday operations to improve
                efficiency and digital experiences.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your AI Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#ai-services"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:bg-[#F0F6F1]"
                >
                  Explore AI Services
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-[#647586]">
                <MapPin className="h-4 w-4 text-[#075B3B]" />
                Madhapur, Hyderabad · Serving India
              </div>

            </div>

            {/* HERO FEATURE PANEL */}

            <div className="relative">

              <div className="rounded-3xl border border-[#E5E9E3] bg-white p-7 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F6F1] text-[#075B3B]">
                    <Cpu className="h-7 w-7" />
                  </div>

                  <span className="rounded-full bg-[#C6A052]/10 px-4 py-2 text-xs font-bold text-[#98732F]">
                    OPV AI
                  </span>

                </div>

                <h2 className="mt-7 text-2xl font-extrabold">
                  Practical AI.
                  <span className="block text-[#075B3B]">
                    Meaningful Automation.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#526577]">
                  Intelligent solutions built around
                  real business requirements,
                  connected systems and measurable
                  operational goals.
                </p>

                <div className="mt-7 space-y-4">

                  {[
                    "AI Agents & Assistants",
                    "Intelligent Workflow Automation",
                    "AI-Powered Business Applications",
                    "CRM & Enterprise Integration",
                    "Data Intelligence & Reporting",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-[#F8F6F0] p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#075B3B]" />

                      <span className="text-sm font-semibold">
                        {item}
                      </span>
                    </div>

                  ))}

                </div>

              </div>

              <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-[#E5E9E3] bg-white px-5 py-4 shadow-lg sm:block">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-[#C6A052]" />
                  <span className="text-xs font-bold text-[#075B3B]">
                    Build Smarter • Automate Better
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ====================================
          INTRODUCTION
      ==================================== */}

      <section className="py-20 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#075B3B]">
              Intelligent Business Technology
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Transform Business Operations
              <span className="block text-[#075B3B]">
                with Artificial Intelligence
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Artificial intelligence is changing how
              organizations manage information,
              communicate with customers and operate
              digital business systems.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              As an AI development company in Hyderabad,
              OPV AI Realty Tech focuses on practical
              AI applications, including customer
              assistance, lead management, document
              processing, intelligent search and
              workflow automation.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              Successful AI implementation requires
              reliable data, clear business objectives,
              appropriate integrations and careful
              testing. We consider these factors
              throughout the development process.
            </p>

          </div>

          <div className="rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] p-8 sm:p-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#075B3B]">
              <Workflow className="h-7 w-7" />
            </div>

            <h3 className="mt-7 text-2xl font-extrabold">
              AI Built for Business Outcomes
            </h3>

            <p className="mt-5 leading-8 text-[#526577]">
              Our approach starts with identifying
              the business challenge before choosing
              the technology.
            </p>

            <ul className="mt-7 space-y-4">

              {[
                "Understand the business problem",
                "Identify suitable AI use cases",
                "Plan integrations and data access",
                "Build and test the solution",
                "Measure and improve performance",
              ].map((item) => (

                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#075B3B]" />

                  <span className="text-sm font-medium leading-7">
                    {item}
                  </span>
                </li>

              ))}

            </ul>

          </div>

        </div>
      </section>

      {/* ====================================
          AI SERVICES
      ==================================== */}

      <section
        id="ai-services"
        className="scroll-mt-24 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24"
      >

        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mx-auto mb-14 max-w-3xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#075B3B]">
              Our AI Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              AI Development & Automation Services
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Explore custom AI solutions designed
              to help businesses automate suitable
              processes, improve customer interactions
              and make better use of business information.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {solutions.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/25 hover:shadow-lg"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F0F6F1] text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#526577]">
                    {item.description}
                  </p>

                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* ====================================
          INDUSTRY USE CASES
      ==================================== */}

      <section className="py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mb-12 max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#075B3B]">
              Industry Applications
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              AI Solutions Across Multiple Industries
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              AI and intelligent automation can be
              adapted to the operational requirements
              of different industries.
              These are examples of potential applications.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {useCases.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group flex flex-col rounded-2xl border border-[#E5E9E3] bg-white p-6 transition hover:border-[#075B3B]/25 hover:shadow-md"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0F6F1] text-[#075B3B]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    AI for {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#526577]">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#075B3B] hover:underline"
                  >
                    Explore Industry
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                </article>
              );
            })}

          </div>

          <div className="mt-10 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#075B3B] hover:underline"
            >
              View All Industries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ====================================
          FEATURED PRODUCT
      ==================================== */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#075B3B]">
              Featured OPV Ecosystem Product
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              AI in Real Estate:
              <span className="block text-[#075B3B]">
                Open Plots & Villas
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Open Plots & Villas is an AI-powered
              real estate discovery portal connecting
              property buyers, owners, builders,
              developers and property professionals.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              The platform combines property discovery,
              search and filtering, property listings,
              AI-assisted content generation and
              customer enquiry experiences in one
              digital ecosystem.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              Built using technologies including
              Next.js, React and Supabase, it
              demonstrates the application of
              modern web development and AI-assisted
              features in real estate technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="https://www.openplotsandvillas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-6 py-4 text-sm font-bold text-white hover:bg-[#06472F]"
              >
                Visit Open Plots & Villas
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-6 py-4 text-sm font-bold text-[#075B3B]"
              >
                Explore Case Studies
              </Link>

            </div>

          </div>

          <div className="rounded-3xl border border-[#E5E9E3] bg-white p-8 shadow-sm sm:p-10">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F6F1] text-[#075B3B]">
                <Layers3 className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-extrabold">
                AI Technology Stack
              </h3>

            </div>

            <p className="mt-5 text-sm leading-7 text-[#526577]">
              Technologies and integration approaches
              relevant to modern AI-powered
              business applications.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              {techStack.map((tech) => (

                <span
                  key={tech}
                  className="rounded-full border border-[#E5E9E3] bg-[#F8F6F0] px-4 py-2 text-xs font-semibold text-[#263C50]"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ====================================
          BENEFITS
      ==================================== */}

      <section className="py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mb-12 max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#075B3B]">
              Business Benefits
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              How AI Automation Can Help Your Business
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Well-designed AI systems can support
              productivity, customer engagement
              and operational visibility.
              Outcomes depend on the use case,
              available data and implementation quality.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {benefits.map((item) => (

              <article
                key={item.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-6"
              >

                <CheckCircle2 className="h-6 w-6 text-[#075B3B]" />

                <h3 className="mt-5 text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#526577]">
                  {item.description}
                </p>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* ====================================
          AI DEVELOPMENT PROCESS
      ==================================== */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mb-12 max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#075B3B]">
              Our Development Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Our AI Development Process
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A structured approach to planning,
              developing, integrating and evaluating
              AI-powered business solutions.
            </p>

          </div>

          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {process.map((step) => (

              <li
                key={step.number}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-7"
              >

                <span className="text-3xl font-black text-[#C6A052]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-extrabold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#526577]">
                  {step.description}
                </p>

              </li>

            ))}

          </ol>

        </div>
      </section>

      {/* ====================================
          TRUST & IMPLEMENTATION
      ==================================== */}

      <section className="py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-10 lg:grid-cols-2">

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#075B3B]">
              Responsible Implementation
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              AI Solutions with Practical
              <span className="block text-[#075B3B]">
                Security Considerations
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              AI systems should be designed with
              attention to data access, privacy,
              reliability, integration requirements
              and human oversight.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              We assess these requirements during
              solution planning and recommend
              safeguards appropriate to the
              intended business use case.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {[
              {
                icon: ShieldCheck,
                title: "Security-Aware Design",
              },
              {
                icon: Database,
                title: "Data Access Planning",
              },
              {
                icon: Workflow,
                title: "Controlled Automation",
              },
              {
                icon: TrendingUp,
                title: "Continuous Evaluation",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-6"
                >

                  <Icon className="h-7 w-7 text-[#075B3B]" />

                  <h3 className="mt-4 text-sm font-bold">
                    {item.title}
                  </h3>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ====================================
          FAQ SECTION
      ==================================== */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">

        <div className="mx-auto max-w-4xl px-6 sm:px-10">

          <div className="mb-12 text-center">

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#075B3B]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              AI Development FAQs
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Answers to common questions about
              AI development, business automation
              and implementation.
            </p>

          </div>

          <div className="space-y-4">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="group rounded-xl border border-[#E5E9E3] bg-white p-6"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[#263C50] [&::-webkit-details-marker]:hidden">

                  {faq.question}

                  <span className="shrink-0 text-xl text-[#075B3B] group-open:rotate-45">
                    +
                  </span>

                </summary>

                <p className="mt-5 border-t border-[#E5E9E3] pt-5 text-sm leading-8 text-[#526577]">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>
      </section>

      {/* ====================================
          RELATED SOLUTIONS
      ==================================== */}

      <section className="py-16">

        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <h2 className="text-2xl font-extrabold">
            Explore Related Business Technology Solutions
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#526577]">
            Connect AI capabilities with software
            engineering, cloud platforms, business
            management systems and digital growth.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {relatedSolutions.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between gap-4 rounded-xl border border-[#E5E9E3] bg-white p-5 transition hover:border-[#075B3B]/30 hover:bg-[#F8F6F0]"
              >

                <span className="text-sm font-bold">
                  {item.title}
                </span>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#075B3B] transition group-hover:translate-x-0.5" />

              </Link>

            ))}

          </div>

        </div>
      </section>

      {/* ====================================
          FINAL CTA
      ==================================== */}

      <section className="bg-[#075B3B] py-20 text-white lg:py-24">

        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Cpu className="h-7 w-7 text-[#E9CF91]" />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold sm:text-4xl">
            Ready to Build Your AI-Powered Business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Explore how AI agents, intelligent
            automation and custom AI integrations
            can support your business objectives.
            Share your requirements with our
            Hyderabad-based team.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Talk to Our AI Team
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="tel:+919963513939"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              +91 99635 13939
            </a>

          </div>

          <p className="mt-9 text-xs tracking-[0.12em] text-white/65">
            OPV AI REALTY TECH PRIVATE LIMITED
          </p>

          <p className="mt-2 text-sm font-medium text-white/80">
            Build Smarter • Automate Better • Grow Faster
          </p>

        </div>
      </section>

    </main>
  );
}
