
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Globe,
  Lightbulb,
  MapPin,
  Phone,
  Rocket,
  Target,
  Users,
  Workflow,
} from "lucide-react";

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_URL = `${SITE_URL}/industries/startups-smes`;

const PAGE_TITLE =
  "Startup & SME Technology Solutions in Hyderabad | OPV AI";

const PAGE_DESCRIPTION =
  "Technology solutions for startups and SMEs in Hyderabad. Custom software, MVP development, SaaS, AI automation, CRM, websites, cloud and digital growth services by OPV AI Realty Tech.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Startup technology solutions Hyderabad",
    "SME software development Hyderabad",
    "Startup MVP development",
    "Custom software development",
    "SaaS product development",
    "AI automation for small businesses",
    "CRM software for SMEs",
    "Business website development",
    "Startup mobile app development",
    "Cloud solutions for startups",
    "SEO AEO GEO services Hyderabad",
    "OPV AI Realty Tech",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "OPV AI Realty Tech",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

// ==========================================
// TECHNOLOGY SOLUTIONS
// ==========================================

const solutions = [
  {
    icon: Code2,
    title: "Custom Software & Product Development",
    description:
      "Turn business ideas into web applications, mobile products, SaaS platforms and custom business software.",
  },
  {
    icon: Bot,
    title: "AI & Intelligent Automation",
    description:
      "Explore AI assistants, intelligent workflows and automation opportunities for everyday business activities.",
  },
  {
    icon: Globe,
    title: "Websites & Digital Presence",
    description:
      "Build professional websites, service pages, landing pages and digital platforms for your brand.",
  },
  {
    icon: Users,
    title: "CRM & Customer Management",
    description:
      "Organise leads, customer records, sales pipelines and follow-up activities through connected business systems.",
  },
  {
    icon: Cloud,
    title: "SaaS & Cloud Solutions",
    description:
      "Plan cloud-enabled applications and subscription-based software products around your business model.",
  },
  {
    icon: Target,
    title: "Digital Growth & Lead Generation",
    description:
      "Develop SEO, AEO, GEO, content marketing and enquiry generation strategies for your target audience.",
  },
  {
    icon: Database,
    title: "Data & Business Intelligence",
    description:
      "Explore dashboards, business reporting and data integration to improve operational visibility.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Connect applications and streamline suitable tasks across sales, customer service and administration.",
  },
];

// ==========================================
// BUSINESS GROWTH STAGES
// ==========================================

const businessStages = [
  {
    number: "01",
    title: "Idea & Validation",
    description:
      "Shape the concept, define the target audience and identify the technology required to test the business idea.",
  },
  {
    number: "02",
    title: "Build & Launch",
    description:
      "Develop a website, application or minimum viable product around the agreed scope and requirements.",
  },
  {
    number: "03",
    title: "Operate & Organise",
    description:
      "Introduce suitable CRM, business systems and workflows to support daily operations.",
  },
  {
    number: "04",
    title: "Grow & Scale",
    description:
      "Explore automation, analytics, cloud infrastructure and digital marketing as business needs evolve.",
  },
];

// ==========================================
// BUSINESS TYPES
// ==========================================

const businessTypes = [
  {
    title: "Technology Startups",
    description:
      "Software products, SaaS platforms, mobile applications and technical product development.",
  },
  {
    title: "Small & Medium Enterprises",
    description:
      "Business websites, CRM systems, workflow automation and connected operational applications.",
  },
  {
    title: "Entrepreneurs & Founders",
    description:
      "Digital product planning, MVP development, websites and technology foundations for new ventures.",
  },
  {
    title: "Professional Service Businesses",
    description:
      "Customer portals, appointment workflows, service websites and client management systems.",
  },
  {
    title: "Growing Digital Businesses",
    description:
      "Cloud applications, automation, reporting and digital growth capabilities for evolving operations.",
  },
  {
    title: "New Business Ventures",
    description:
      "Technology planning, online presence and business applications for newly established organisations.",
  },
];

// ==========================================
// CAPABILITIES
// ==========================================

const capabilities = [
  "Startup and business websites",
  "Custom software development",
  "Minimum viable product development",
  "SaaS platform development",
  "Web and mobile applications",
  "AI assistants and automation",
  "CRM and customer management",
  "Business process automation",
  "Cloud application planning",
  "SEO, AEO and GEO strategy",
  "Lead generation systems",
  "Business intelligence dashboards",
];

// ==========================================
// BUSINESS OUTCOMES
// ==========================================

const benefits = [
  {
    title: "Start with the Right Technology",
    description:
      "Define practical technology requirements around your business model, initial goals and available resources.",
  },
  {
    title: "Organise Business Operations",
    description:
      "Use suitable business applications and automated workflows to coordinate everyday activities.",
  },
  {
    title: "Build for Future Growth",
    description:
      "Consider maintainability, integrations and evolving business requirements when planning digital products.",
  },
  {
    title: "Connect Technology with Growth",
    description:
      "Bring websites, customer management, analytics and digital marketing into a coordinated business approach.",
  },
];

// ==========================================
// IMPLEMENTATION PROCESS
// ==========================================

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business idea, objectives, audience and current challenges.",
  },
  {
    number: "02",
    title: "Strategise",
    description:
      "Define the project scope, priorities, technology options and implementation approach.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the agreed website, application, product or business system.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "Connect relevant tools, applications, workflows and data sources.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "Review business needs and identify opportunities for further development and improvement.",
  },
];

// ==========================================
// FAQ CONTENT
// ==========================================

const faqs = [
  {
    question:
      "What technology services does OPV AI offer for startups?",
    answer:
      "OPV AI Realty Tech offers technology solutions including websites, custom software, MVP development, SaaS applications, AI automation, CRM systems, cloud applications and digital growth services.",
  },
  {
    question:
      "Does OPV AI Realty Tech serve startups and SMEs in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad, Telangana, and provides technology services for startups, entrepreneurs, small and medium enterprises and growing businesses.",
  },
  {
    question: "What is MVP development for startups?",
    answer:
      "A minimum viable product is an initial version of a digital product designed around essential features. It helps founders test key assumptions and gather feedback before planning further development.",
  },
  {
    question:
      "Can you develop custom CRM software for a small business?",
    answer:
      "Custom CRM systems can be planned around customer records, lead management, sales pipelines, follow-up workflows, reporting and relevant integrations.",
  },
  {
    question: "Can AI automation help small businesses?",
    answer:
      "AI and workflow automation can assist with suitable customer enquiries, repetitive administrative tasks, information retrieval and connected business processes.",
  },
  {
    question:
      "Do you develop SaaS platforms and subscription applications?",
    answer:
      "SaaS solutions can be planned with user accounts, subscription workflows, dashboards, administration tools and cloud infrastructure based on project requirements.",
  },
  {
    question:
      "Do you provide SEO and digital marketing for startups?",
    answer:
      "Digital growth services can include SEO, AEO, GEO, content planning, landing pages and lead generation strategies aligned with the business and its audience.",
  },
  {
    question:
      "How much does startup software development cost?",
    answer:
      "Costs depend on project scope, features, design complexity, integrations, infrastructure, testing and maintenance. A requirements discussion is needed to prepare an appropriate estimate.",
  },
];

// ==========================================
// RELATED SERVICES
// ==========================================

const relatedSolutions = [
  {
    title: "Software Engineering",
    href: "/solutions/software-engineering",
  },
  {
    title: "SaaS, Cloud & DevOps",
    href: "/solutions/saas-cloud-devops",
  },
  {
    title: "AI & Intelligent Automation",
    href: "/solutions/ai-intelligent-automation",
  },
];

// ==========================================
// STRUCTURED DATA
// ==========================================

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "OPV AI Realty Tech Private Limited",
      url: SITE_URL,
      telephone: "+91-9963513939",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      inLanguage: "en-IN",
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      about: {
        "@id": `${PAGE_URL}#service`,
      },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Startup & SME Technology Solutions",
      serviceType:
        "Startup Software Development, SaaS, AI Automation and Digital Growth",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: [
        { "@type": "City", name: "Hyderabad" },
        { "@type": "State", name: "Telangana" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Startup & SME Technology Services",
        itemListElement: solutions.map((solution) => ({
          "@type": "OfferCatalog",
          name: solution.title,
          description: solution.description,
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
          name: "Industries",
          item: `${SITE_URL}/industries`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Startups & SMEs",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// ==========================================
// MAIN PAGE
// ==========================================

export default function StartupsSMEsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#263C50]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* HERO */}
      <section className="border-b border-[#E5E9E3] bg-[#F8F6F0]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
          <nav aria-label="Breadcrumb" className="mb-9">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-[#647586]">
              <li>
                <Link href="/" className="hover:text-[#075B3B]">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3 w-3" />
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-[#075B3B]"
                >
                  Industries
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3 w-3" />
              </li>
              <li
                aria-current="page"
                className="font-semibold text-[#075B3B]"
              >
                Startups & SMEs
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <Rocket className="h-4 w-4" />
                Startups & SMEs Technology
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                Startup & SME
                <span className="block text-[#075B3B]">
                  Technology Solutions
                </span>
                <span className="mt-3 block text-2xl font-bold text-[#526577] sm:text-3xl">
                  In Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-[#526577]">
                Build Your Business. Innovate. Grow. Scale.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                Turn your business ideas into practical digital
                solutions. OPV AI Realty Tech helps startups
                and small businesses explore software development,
                AI, automation, cloud applications and digital
                growth technology aligned with their goals.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your Business Idea
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#startup-solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:bg-[#F0F6F1]"
                >
                  Explore Our Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-8 flex items-center gap-2 text-sm text-[#647586]">
                <MapPin className="h-4 w-4 shrink-0 text-[#075B3B]" />
                Hyderabad, Telangana · Serving businesses across India
              </p>
            </div>

            {/* HERO VISUAL */}
            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-6 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">
              <div className="flex items-center justify-between gap-4 border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Business Technology
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold">
                    Startup Growth Ecosystem
                  </h2>
                </div>

                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Rocket className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-[#075B3B]/15 bg-[#F0F6F1] p-5">
                <div className="rounded-xl bg-white p-3 text-[#075B3B]">
                  <Lightbulb className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="font-extrabold">
                    From Idea to Digital Business
                  </h3>

                  <p className="mt-1 text-sm text-[#526577]">
                    Technology aligned with your business stage
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    icon: Code2,
                    title: "Software",
                    description: "Digital products and applications",
                  },
                  {
                    icon: Bot,
                    title: "AI & Automation",
                    description: "Intelligent business workflows",
                  },
                  {
                    icon: Users,
                    title: "CRM & Business",
                    description: "Customer and business management",
                  },
                  {
                    icon: BarChart3,
                    title: "Digital Growth",
                    description: "Visibility and customer acquisition",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-4 sm:p-5"
                    >
                      <Icon className="h-7 w-7 text-[#075B3B]" />

                      <h3 className="mt-4 text-sm font-extrabold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-[#526577]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#F0F6F1] p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#075B3B]" />

                <p className="text-sm font-medium">
                  Technology solutions shaped around business priorities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Technology for Growing Businesses
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Practical Technology for Every Stage of Business Growth
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Startups and small businesses need technology
              that supports their current priorities while
              allowing room for future development.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              From launching a business website to building
              a software product, introducing AI workflows
              or organising customer relationships, the right
              technology approach begins with understanding
              the business and its stage of growth.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="startup-solutions"
        className="scroll-mt-24 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Technology Solutions for Startups & SMEs
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Explore software, AI, automation and digital
              growth capabilities designed around the needs
              of growing businesses.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#526577]">
                    {solution.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS GROWTH STAGES */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Your Growth Journey
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Technology That Evolves with Your Business
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Different stages require different technology
              priorities. Plan your digital foundation around
              where your business is today and where it aims to go.
            </p>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {businessStages.map((stage) => (
              <li
                key={stage.number}
                className="rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-7"
              >
                <span className="text-3xl font-black text-[#C6A052]">
                  {stage.number}
                </span>

                <h3 className="mt-5 text-xl font-extrabold">
                  {stage.title}
                </h3>

                <p className="mt-4 leading-8 text-[#526577]">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Who We Serve
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Technology for Different Business Models
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Whether you are launching a new venture or
              improving an established business, technology
              can be shaped around your operating model and goals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map((business) => (
              <article
                key={business.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition hover:border-[#075B3B]/30 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Rocket className="h-7 w-7" />
                </div>

                <h3 className="mt-5 text-xl font-extrabold">
                  {business.title}
                </h3>

                <p className="mt-3 leading-8 text-[#526577]">
                  {business.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Technology Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              A Complete Digital Toolkit for Growing Businesses
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              From your first website to connected business
              systems and intelligent automation, we help
              identify technology capabilities that fit your requirements.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#075B3B] hover:underline"
            >
              Discuss Your Business Requirements
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-4"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#075B3B]" />

                <span className="text-sm font-medium leading-7 text-[#526577]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS OUTCOMES */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Business Outcomes
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Build a Stronger Foundation for Growth
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Technology can help growing businesses organise
              operations, connect customers and create
              a foundation for future development.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-7"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                  Outcome {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-4 text-xl font-extrabold">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-8 text-[#526577]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              From Business Idea to Digital Growth
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A structured process helps connect technology
              decisions with your business priorities,
              resources and growth plans.
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-6"
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

      {/* FAQ */}
      <section className="border-t border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Startup & SME Technology FAQs
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Common questions about startup software,
              MVP development, AI, SaaS and business technology.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#E5E9E3] bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold [&::-webkit-details-marker]:hidden">
                  {faq.question}

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl text-[#075B3B] transition-transform group-open:rotate-45"
                  >
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

      {/* RELATED SERVICES */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className="text-2xl font-extrabold">
            Explore Related Technology Solutions
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#526577]">
            Discover how software engineering, cloud technology
            and AI automation can support your business journey.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedSolutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between gap-4 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-5 transition hover:border-[#075B3B]/30"
              >
                <span className="text-sm font-bold">
                  {item.title}
                </span>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#075B3B]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#075B3B] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Rocket className="h-7 w-7 text-[#E9CF91]" />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold sm:text-4xl">
            Ready to Build and Grow Your Business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Whether you are a startup founder, entrepreneur
            or established SME, explore how software, AI,
            automation and digital technology can support
            your next stage of growth.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your Business Idea
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

          <p className="mt-9 text-xs tracking-widest text-white/65">
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
