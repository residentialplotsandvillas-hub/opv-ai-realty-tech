
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Database,
  Globe2,
  Home,
  MapPin,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

// ==========================================
// SEO CONFIGURATION
// ==========================================

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_URL = `${SITE_URL}/industries/real-estate`;
const OPV_PORTAL_URL = "https://www.openplotsandvillas.com";

const PAGE_TITLE =
  "Real Estate Software & AI Technology Solutions in Hyderabad | OPV AI";

const PAGE_DESCRIPTION =
  "Real estate technology solutions in Hyderabad. Property portals, real estate CRM, AI assistants, lead management, sales automation, mobile apps, SEO and property analytics by OPV AI Realty Tech.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Real estate technology solutions Hyderabad",
    "Real estate software development Hyderabad",
    "AI real estate technology",
    "Property portal development",
    "Real estate CRM software",
    "Real estate lead management",
    "Property listing website development",
    "Real estate mobile app development",
    "Real estate sales automation",
    "AI property assistant",
    "Real estate digital marketing Hyderabad",
    "Real estate SEO AEO GEO",
    "Property analytics dashboards",
    "Open Plots and Villas",
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
    icon: Globe2,
    title: "Real Estate Websites & Portals",
    description:
      "Build professional property websites, project portals, property listing platforms and digital experiences for real estate businesses.",
  },
  {
    icon: Bot,
    title: "AI & Intelligent Automation",
    description:
      "Explore AI assistants, automated enquiry handling, intelligent workflows and customer support applications.",
  },
  {
    icon: Users,
    title: "Real Estate CRM Systems",
    description:
      "Organise customer enquiries, property interests, sales pipelines, follow-ups and customer relationship activities.",
  },
  {
    icon: Target,
    title: "Lead Generation & Marketing",
    description:
      "Develop digital marketing strategies, SEO, AEO, GEO and enquiry generation journeys for property businesses.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Create mobile-friendly property experiences for customers, agents, sales teams and business operators.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Business Intelligence",
    description:
      "Explore dashboards and reports for enquiries, sales activities, project performance and business operations.",
  },
  {
    icon: Workflow,
    title: "Sales & Workflow Automation",
    description:
      "Coordinate enquiry assignment, customer follow-ups, site visit workflows, notifications and internal processes.",
  },
  {
    icon: Database,
    title: "Property Data & Integrations",
    description:
      "Connect relevant property information, business applications, databases and third-party technology services.",
  },
];

// ==========================================
// REAL ESTATE BUSINESS CATEGORIES
// ==========================================

const businessTypes = [
  {
    title: "Real Estate Developers",
    description:
      "Digital project showcases, property discovery, enquiry management and sales coordination.",
  },
  {
    title: "Real Estate Agents & Brokers",
    description:
      "Customer relationship management, property discovery, lead tracking and follow-up workflows.",
  },
  {
    title: "Property Consultants",
    description:
      "Professional websites, client management tools and digital communication platforms.",
  },
  {
    title: "Plot & Villa Businesses",
    description:
      "Property listing experiences, location-focused discovery and enquiry management solutions.",
  },
  {
    title: "Property Management Businesses",
    description:
      "Applications for coordinating property information, service requests and operational activities.",
  },
  {
    title: "Real Estate Agencies",
    description:
      "Connected digital systems for marketing, sales operations, customer engagement and reporting.",
  },
];

// ==========================================
// PROPERTY BUSINESS JOURNEY
// ==========================================

const propertyJourney = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "Present property listings, project information and relevant discovery experiences.",
  },
  {
    number: "02",
    icon: Target,
    title: "Enquire",
    description:
      "Capture property interests, customer enquiries and relevant requirements.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Manage",
    description:
      "Coordinate follow-ups, site visits, customer communication and sales workflows.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Analyse",
    description:
      "Review enquiries, marketing activity, sales progress and operational reporting.",
  },
];

// ==========================================
// TECHNOLOGY CAPABILITIES
// ==========================================

const capabilities = [
  "Property discovery websites",
  "Property listing portals",
  "Project and developer websites",
  "Real estate CRM applications",
  "Lead capture and lead management",
  "AI enquiry assistants",
  "Customer follow-up automation",
  "Site visit scheduling workflows",
  "Property marketing and SEO",
  "Real estate mobile applications",
  "Sales and performance dashboards",
  "Business process integrations",
];

// ==========================================
// BUSINESS OUTCOMES
// ==========================================

const benefits = [
  {
    title: "Better Digital Property Discovery",
    description:
      "Create structured digital experiences that help prospective buyers explore property information and relevant offerings.",
  },
  {
    title: "Organised Customer Enquiries",
    description:
      "Plan systems to capture, organise and manage property enquiries and customer interactions.",
  },
  {
    title: "More Connected Sales Workflows",
    description:
      "Coordinate enquiry assignments, follow-ups and sales activities through connected applications.",
  },
  {
    title: "Improved Business Visibility",
    description:
      "Use structured information and reporting to review customer activity, marketing performance and sales operations.",
  },
];

// ==========================================
// IMPLEMENTATION PROCESS
// ==========================================

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand your real estate business model, projects, customers and technology requirements.",
  },
  {
    number: "02",
    title: "Strategise",
    description:
      "Identify suitable digital platforms, AI opportunities and business system requirements.",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "Design and develop the agreed websites, applications, integrations and workflows.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "Connect relevant systems, data sources and business processes.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review performance and explore improvements as your business evolves.",
  },
];

// ==========================================
// FAQ CONTENT
// ==========================================

const faqs = [
  {
    question: "What are real estate technology solutions?",
    answer:
      "Real estate technology solutions include property websites, listing portals, customer relationship management, lead management, mobile applications, AI assistants, marketing automation and business analytics.",
  },
  {
    question:
      "Does OPV AI Realty Tech provide real estate software development in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad and offers real estate software development, property portals, CRM systems, AI assistance, automation, mobile applications and digital growth solutions.",
  },
  {
    question: "Can you develop a custom real estate property portal?",
    answer:
      "Property portals can be developed with listing management, property search, filters, enquiry forms, user accounts, project showcases and relevant integrations based on the agreed requirements.",
  },
  {
    question: "How can a real estate CRM help developers and agents?",
    answer:
      "A real estate CRM can organise customer information, enquiries, property interests, lead assignment, follow-ups, site visit workflows and sales pipeline activity.",
  },
  {
    question: "Can AI assistants support real estate customer enquiries?",
    answer:
      "AI assistants can help visitors navigate property information, answer suitable general enquiries and guide users towards relevant listings or customer support workflows.",
  },
  {
    question: "Do you offer real estate SEO and digital marketing?",
    answer:
      "Digital growth services can include search engine optimisation, answer engine optimisation, generative engine optimisation, website content planning and lead generation journeys.",
  },
  {
    question: "What is Open Plots & Villas?",
    answer:
      "Open Plots & Villas is OPV's dedicated AI-powered real estate discovery portal, focused on connecting property seekers and real estate participants through digital property experiences.",
  },
  {
    question: "How much does real estate software development cost?",
    answer:
      "Development costs depend on the platform type, features, number of users, integrations, AI capabilities, hosting, testing and ongoing maintenance. A requirements assessment is needed for a project quotation.",
  },
];

// ==========================================
// RELATED TECHNOLOGY SOLUTIONS
// ==========================================

const relatedSolutions = [
  {
    title: "AI & Intelligent Automation",
    href: "/solutions/ai-intelligent-automation",
  },
  {
    title: "CRM, ERP & Business Systems",
    href: "/solutions/crm-erp-business-systems",
  },
  {
    title: "Digital Growth & Marketing",
    href: "/solutions/digital-growth-marketing",
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
      name: "Real Estate Technology Solutions",
      serviceType:
        "Real Estate Software, AI Automation, CRM and Digital Marketing",
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
        name: "Real Estate Technology Services",
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
          name: "Real Estate",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// ==========================================
// MAIN PAGE
// ==========================================

export default function RealEstateIndustryPage() {
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
                Real Estate
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <Building2 className="h-4 w-4" />
                Real Estate Technology Solutions
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                Real Estate Software
                <span className="block text-[#075B3B]">
                  & AI Technology Solutions
                </span>
                <span className="mt-3 block text-2xl font-bold text-[#526577] sm:text-3xl">
                  In Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base font-semibold leading-8 text-[#526577] sm:text-lg">
                Transform Real Estate with AI & Technology.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                Bring property discovery, customer engagement, sales
                operations and business automation together with
                intelligent digital solutions. OPV AI Realty Tech
                helps real estate businesses explore technology
                designed for the future of property.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your Real Estate Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <a
                  href={OPV_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:bg-[#F0F6F1]"
                >
                  Explore Open Plots & Villas
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-8 flex items-center gap-2 text-sm text-[#647586]">
                <MapPin className="h-4 w-4 shrink-0 text-[#075B3B]" />
                Hyderabad, Telangana · Serving businesses across India
              </p>
            </div>

            {/* PROPERTY TECHNOLOGY VISUAL */}
            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-6 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">
              <div className="flex items-center justify-between gap-4 border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Real Estate Technology
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold">
                    Intelligent Property Ecosystem
                  </h2>
                </div>

                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Building2 className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-[#075B3B]/15 bg-[#F0F6F1] p-5">
                <div className="rounded-xl bg-white p-3 text-[#075B3B]">
                  <Home className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="font-extrabold">
                    Connected Property Experiences
                  </h3>

                  <p className="mt-1 text-sm text-[#526577]">
                    Technology for buyers, agents and developers
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    icon: Search,
                    title: "Discovery",
                    description: "Property information and listings",
                  },
                  {
                    icon: Bot,
                    title: "AI Assistants",
                    description: "Intelligent enquiry assistance",
                  },
                  {
                    icon: Users,
                    title: "Real Estate CRM",
                    description: "Customer and lead management",
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics",
                    description: "Sales and operational insights",
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
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#075B3B]" />

                <p className="text-sm font-medium">
                  Connected technology planned around real estate workflows
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
              The Future of Real Estate
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Smarter Technology for the Entire Property Journey
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Real estate businesses operate across property discovery,
              marketing, customer communication, sales and project
              management. Connected digital platforms and intelligent
              workflows can help bring these activities together.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              We focus on technology that addresses real business
              requirements across the property ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="real-estate-solutions"
        className="scroll-mt-24 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Real Estate Technology Solutions
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Technology capabilities designed to support property
              businesses, developers, agents, brokers and real
              estate organisations.
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

      {/* WHO WE SERVE */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Who We Serve
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Technology for Different Real Estate Businesses
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Every property business has different customers,
              processes and operating requirements.
              Technology should reflect those differences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map((business) => (
              <article
                key={business.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition hover:border-[#075B3B]/30 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Building2 className="h-7 w-7" />
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

      {/* PROPERTY BUSINESS JOURNEY */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Connected Property Journey
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              From Property Discovery to Sales Intelligence
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Digital platforms can help connect property discovery,
              customer enquiries, sales coordination and reporting.
            </p>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {propertyJourney.map((stage) => {
              const Icon = stage.icon;

              return (
                <li
                  key={stage.number}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-6"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    Stage {stage.number}
                  </p>

                  <div className="mt-5 inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold">
                    {stage.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#526577]">
                    {stage.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* OPV REAL ESTATE PORTAL SHOWCASE */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-[#F0F6F1] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
              <Zap className="h-4 w-4" />
              OPV Real Estate Ecosystem
            </div>

            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
              Open Plots & Villas
              <span className="mt-2 block text-[#075B3B]">
                AI-Powered Real Estate Discovery Portal
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Open Plots & Villas is OPV&apos;s dedicated real estate
              discovery platform. It represents the company&apos;s
              real estate-focused digital initiative, bringing
              property discovery into the broader OPV technology ecosystem.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              The portal focuses on connecting property seekers,
              owners, builders, developers and property professionals
              through digital property discovery experiences.
            </p>

            <a
              href={OPV_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
            >
              Visit Open Plots & Villas
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] p-7 sm:p-9">
            <div className="flex items-center gap-4 border-b border-[#E5E9E3] pb-6">
              <div className="rounded-2xl bg-[#F0F6F1] p-4 text-[#075B3B]">
                <Home className="h-8 w-8" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                  Real Estate Discovery
                </p>

                <h3 className="mt-2 text-xl font-extrabold">
                  Open Plots & Villas
                </h3>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                {
                  icon: Search,
                  title: "Property Discovery",
                  description:
                    "Explore property listings and project information.",
                },
                {
                  icon: MapPin,
                  title: "Location-Based Exploration",
                  description:
                    "Find property information relevant to different locations.",
                },
                {
                  icon: Building2,
                  title: "Property Ecosystem",
                  description:
                    "Connect buyers, owners, builders and property professionals.",
                },
                {
                  icon: Bot,
                  title: "AI-Powered Experiences",
                  description:
                    "Intelligent assistance for property-related information.",
                },
              ].map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 rounded-xl border border-[#E5E9E3] bg-white p-4"
                  >
                    <Icon className="mt-1 h-6 w-6 shrink-0 text-[#075B3B]" />

                    <div>
                      <h4 className="font-bold">
                        {feature.title}
                      </h4>

                      <p className="mt-1 text-sm leading-7 text-[#526577]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY CAPABILITIES */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Technology Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              A Connected Digital Toolkit for Property Businesses
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              From customer enquiries to digital property experiences,
              we help identify suitable software, AI and automation
              capabilities for your real estate business.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#075B3B] hover:underline"
            >
              Discuss Your Requirements
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#E5E9E3] bg-white p-4"
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
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Business Outcomes
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Create Better Digital Experiences for Real Estate
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Technology can help property businesses improve
              how they manage information, communicate with
              customers and coordinate daily work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-7"
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
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              From Property Business Challenges to Digital Solutions
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A structured approach helps align your technology
              investment with your property business model
              and operational requirements.
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-6"
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
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Real Estate Technology FAQs
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Common questions about property portals,
              CRM systems, AI assistance and digital growth.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-6"
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

      {/* RELATED SOLUTIONS */}
      <section className="border-t border-[#E5E9E3] py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className="text-2xl font-extrabold">
            Explore Related Technology Solutions
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#526577]">
            Connect real estate technology with AI automation,
            business systems and digital marketing.
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
            Ready to Transform Your Real Estate Business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Whether you are a developer, property consultant,
            real estate agency or property entrepreneur,
            explore how AI, software and connected technology
            can support your business.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your Real Estate Project
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
