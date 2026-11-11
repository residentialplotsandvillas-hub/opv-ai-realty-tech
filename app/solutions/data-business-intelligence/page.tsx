
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Database,
  FileBarChart,
  Gauge,
  LineChart,
  MapPin,
  Phone,
  PieChart,
  RefreshCw,
  Rocket,
  Search,
  Users,
  Workflow,
} from "lucide-react";

// ==========================================
// SEO CONFIGURATION
// ==========================================

const SITE_URL = "https://www.opvairealtytech.com";

const PAGE_PATH = "/solutions/data-business-intelligence";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Data Analytics & Business Intelligence in Hyderabad | OPV AI";

const PAGE_DESCRIPTION =
  "Explore data analytics and business intelligence services in Hyderabad. Custom BI dashboards, data integration, automated reporting and AI-assisted insights by OPV AI Realty Tech.";

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Data analytics company in Hyderabad",
    "Business intelligence services Hyderabad",
    "Business intelligence dashboard development",
    "Custom BI dashboards",
    "Data analytics services India",
    "Data integration services Hyderabad",
    "Business reporting solutions",
    "Automated reporting software",
    "AI-powered business intelligence",
    "AI-assisted data analytics",
    "Data visualization services",
    "Sales analytics dashboard",
    "CRM analytics solutions",
    "ERP reporting dashboards",
    "Business performance analytics",
    "Management reporting dashboards",
    "Business intelligence consulting",
    "Custom analytics applications",
    "Data management solutions",
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
// SERVICES
// ==========================================

const services = [
  {
    icon: Database,
    title: "Data Management & Integration",
    description:
      "Organize information from relevant business applications, databases and other sources to create a more connected view of your operations.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence Dashboards",
    description:
      "Design custom business intelligence dashboards that present key performance indicators, business metrics and operational information in clear visual formats.",
  },
  {
    icon: FileBarChart,
    title: "Business Reporting Solutions",
    description:
      "Create structured reports to help management and teams review sales activity, operational performance, customer information and business results.",
  },
  {
    icon: LineChart,
    title: "Data Analytics Services",
    description:
      "Explore historical and current business data to identify patterns, trends, performance changes and opportunities for further analysis.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Data Insights",
    description:
      "Explore AI-assisted approaches for querying business information, summarizing datasets and supporting analytical workflows.",
  },
  {
    icon: Workflow,
    title: "Reporting Automation",
    description:
      "Reduce repetitive reporting tasks through suitable data workflows, scheduled reporting processes and business system integrations.",
  },
];

// ==========================================
// ANALYTICS AREAS
// ==========================================

const analyticsAreas = [
  {
    icon: Users,
    title: "Sales & Customer Analytics",
    description:
      "Understand sales activity, lead generation, customer interactions, conversion trends and sales pipeline performance.",
  },
  {
    icon: Gauge,
    title: "Operational Analytics",
    description:
      "Review process activity, resource utilization, service performance and operational indicators through relevant dashboards.",
  },
  {
    icon: PieChart,
    title: "Financial & Business Reporting",
    description:
      "Organize financial and management information into clear reports that support internal business reviews and planning.",
  },
  {
    icon: Search,
    title: "Trend & Performance Analysis",
    description:
      "Explore patterns in business information, identify changes and evaluate trends that may inform future decisions.",
  },
];

// ==========================================
// CAPABILITIES
// ==========================================

const capabilities = [
  "Data consolidation and integration",
  "Business intelligence dashboards",
  "Sales and marketing analytics",
  "Customer and lead reporting",
  "Operational performance dashboards",
  "Management and executive reports",
  "Data visualization",
  "Automated reporting workflows",
  "AI-assisted data exploration",
  "Custom analytics applications",
];

// ==========================================
// BUSINESS BENEFITS
// ==========================================

const benefits = [
  {
    title: "A Clearer View of Performance",
    description:
      "Bring relevant metrics together to help teams understand business activity, operational performance and key business indicators.",
  },
  {
    title: "More Informed Decisions",
    description:
      "Use organized information, consistent reporting and analysis to support management discussions and business planning.",
  },
  {
    title: "Less Manual Reporting",
    description:
      "Identify opportunities to automate recurring reports, information collection and reporting workflows.",
  },
  {
    title: "Connected Business Information",
    description:
      "Create a more consistent view of business information across relevant applications, departments and data sources.",
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
      "Understand your business questions, reporting needs and available data sources.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Identify relevant data sources and plan how information can be organized and integrated.",
  },
  {
    number: "03",
    title: "Analyze",
    description:
      "Define useful metrics, reporting structures, analytical requirements and data relationships.",
  },
  {
    number: "04",
    title: "Visualize",
    description:
      "Design dashboards and reports that communicate important business information clearly.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review the solution, refine reporting requirements and improve dashboards as business needs evolve.",
  },
];

// ==========================================
// FAQ CONTENT
// ==========================================

const faqs = [
  {
    question: "What is business intelligence?",
    answer:
      "Business intelligence, or BI, refers to processes and technologies that organize, analyze and present business data through reports, dashboards and visualizations to support informed decisions.",
  },
  {
    question:
      "Does OPV AI Realty Tech provide business intelligence services in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad and offers data and business intelligence solutions covering data integration, analytics dashboards, reporting automation and AI-assisted data exploration.",
  },
  {
    question:
      "What is the difference between data analytics and business intelligence?",
    answer:
      "Business intelligence commonly focuses on reporting, monitoring and understanding business performance. Data analytics also includes exploring patterns, relationships and trends to answer specific business questions.",
  },
  {
    question:
      "Can business intelligence dashboards connect with CRM and ERP systems?",
    answer:
      "Yes. Depending on the available APIs, database access and integration requirements, BI dashboards can combine relevant information from CRM, ERP and other business applications.",
  },
  {
    question: "What are the benefits of automated business reporting?",
    answer:
      "Automated reporting can reduce repetitive manual work, improve reporting consistency and help teams access relevant information at scheduled intervals.",
  },
  {
    question:
      "Can AI be used for business data analytics?",
    answer:
      "AI can assist with tasks such as summarizing information, natural-language querying and identifying patterns. Results should be validated against reliable business data, particularly for important decisions.",
  },
  {
    question:
      "Which industries can use business intelligence solutions?",
    answer:
      "Business intelligence can support real estate, retail, manufacturing, healthcare, education, professional services, finance and many other industries where business data is available.",
  },
  {
    question:
      "How much does a custom BI dashboard cost in Hyderabad?",
    answer:
      "Pricing depends on data sources, integrations, dashboard complexity, reporting requirements, user access, deployment and ongoing maintenance. A project assessment is needed to prepare an accurate estimate.",
  },
];

// ==========================================
// RELATED SOLUTIONS
// ==========================================

const relatedSolutions = [
  {
    title: "AI & Intelligent Automation",
    description:
      "Explore AI-assisted workflows and business automation.",
    href: "/solutions/ai-intelligent-automation",
  },
  {
    title: "CRM, ERP & Business Systems",
    description:
      "Connect operational systems with useful business information.",
    href: "/solutions/crm-erp-business-systems",
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
      name: "Data Analytics & Business Intelligence Services",
      serviceType: "Data Analytics and Business Intelligence",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Hyderabad",
        },
        {
          "@type": "State",
          name: "Telangana",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Data and Business Intelligence Services",
        itemListElement: services.map((service) => ({
          "@type": "OfferCatalog",
          name: service.title,
          description: service.description,
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
          name: "Data & Business Intelligence",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// ==========================================
// PAGE COMPONENT
// ==========================================

export default function DataBusinessIntelligencePage() {
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

      {/* HERO SECTION */}

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
                Data & Business Intelligence
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <BarChart3 className="h-4 w-4" />
                Data & Business Intelligence
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                Data Analytics &
                <span className="block text-[#075B3B]">
                  Business Intelligence
                </span>
                <span className="mt-2 block text-2xl font-bold text-[#526577] sm:text-3xl">
                  Solutions in Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#526577] sm:text-lg">
                Transform scattered business information
                into connected dashboards, meaningful
                reports and actionable insights.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                OPV AI Realty Tech helps organizations
                explore data integration, business
                intelligence dashboards, analytics
                and reporting automation solutions
                aligned with their operational needs.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your Data Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:bg-[#F0F6F1]"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-8 flex items-center gap-2 text-sm text-[#647586]">
                <MapPin className="h-4 w-4 text-[#075B3B]" />
                Hyderabad, Telangana · Serving businesses across India
              </p>
            </div>

            {/* BUSINESS INTELLIGENCE VISUAL */}

            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-6 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-8">
              <div className="flex items-center justify-between border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Business Intelligence
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold">
                    Business Performance
                  </h2>
                </div>

                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <BarChart3 className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-4">
                  <p className="text-xs text-[#647586]">
                    Sales Overview
                  </p>

                  <div className="mt-3 flex items-center justify-between gap-2">
                    <p className="text-lg font-extrabold sm:text-xl">
                      Analytics
                    </p>

                    <LineChart className="h-5 w-5 shrink-0 text-[#075B3B]" />
                  </div>

                  <div
                    aria-hidden="true"
                    className="mt-5 flex h-14 items-end gap-1.5"
                  >
                    {[35, 55, 42, 75, 60, 88, 70, 100].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-sm bg-[#075B3B]/75"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-4">
                  <p className="text-xs text-[#647586]">
                    Business Reports
                  </p>

                  <div className="mt-3 flex items-center justify-between gap-2">
                    <p className="text-lg font-extrabold sm:text-xl">
                      Reports
                    </p>

                    <FileBarChart className="h-5 w-5 shrink-0 text-[#075B3B]" />
                  </div>

                  <div
                    aria-hidden="true"
                    className="mt-5 space-y-2"
                  >
                    <div className="h-2 rounded-full bg-[#E5E9E3]">
                      <div className="h-2 w-4/5 rounded-full bg-[#075B3B]" />
                    </div>

                    <div className="h-2 rounded-full bg-[#E5E9E3]">
                      <div className="h-2 w-3/5 rounded-full bg-[#C6A052]" />
                    </div>

                    <div className="h-2 rounded-full bg-[#E5E9E3]">
                      <div className="h-2 w-2/3 rounded-full bg-[#075B3B]/50" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold">
                      Connected Data Sources
                    </p>

                    <p className="mt-1 text-xs text-[#647586]">
                      Illustrative business data integrations
                    </p>
                  </div>

                  <Database className="h-6 w-6 shrink-0 text-[#075B3B]" />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "CRM",
                    "ERP",
                    "Website",
                    "Sales",
                    "Operations",
                  ].map((source) => (
                    <span
                      key={source}
                      className="rounded-lg border border-[#075B3B]/15 bg-white px-3 py-2 text-xs font-semibold text-[#075B3B]"
                    >
                      {source}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#F0F6F1] p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#075B3B]" />

                <p className="text-sm font-medium">
                  Connected information. Clearer insights.
                </p>
              </div>

              <p className="mt-3 text-center text-xs text-[#647586]">
                Conceptual dashboard illustration — not live data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Make Information More Useful
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              See the Bigger Picture Behind Your Business Data
            </h2>

            <p className="mt-6 text-base leading-8 text-[#526577]">
              Businesses generate information across
              sales, customer interactions, finance,
              operations and digital platforms.
              Business intelligence brings relevant
              information together through reporting,
              analysis and visualization.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              With the right data structure and reporting
              approach, teams can better understand
              performance, identify trends and explore
              the business questions that matter most.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="scroll-mt-24 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Data Analytics & Business Intelligence Services
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Explore practical ways to organize,
              analyze and present your organization's
              business information.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-[#526577]">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ANALYTICS AREAS */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Business Analytics
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Analytics for Different Business Functions
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Relevant dashboards and reports depend
              on the decisions your organization
              needs to make.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {analyticsAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-8"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#526577]">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Business Intelligence Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              From Raw Information to Useful Business Insights
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Every organization has different
              reporting needs. We help define
              the information, metrics and
              visualizations that are relevant
              to your business objectives.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#075B3B] hover:underline"
            >
              Discuss Your Analytics Requirements
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

      {/* BUSINESS BENEFITS */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Business Value
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Make Data Work for Your Business
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A well-planned analytics approach
              can help teams move from scattered
              information to more consistent
              business reporting.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-7"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                  Benefit {String(index + 1).padStart(2, "0")}
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
              Our Data Analytics & BI Development Process
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A structured process keeps analytics
              and reporting connected to the
              decisions your organization
              needs to make.
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

      {/* AI-ASSISTED BUSINESS INTELLIGENCE */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              AI-Assisted Analytics
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Explore Business Information with AI-Assisted Insights
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              AI-assisted analytics can support
              natural-language questions,
              information summaries and
              exploration of business data.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              When implemented appropriately,
              these capabilities can complement
              traditional business intelligence
              dashboards and reporting workflows.
              Important outputs should be
              checked against reliable source data.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: BrainCircuit,
                title: "AI-Assisted Exploration",
              },
              {
                icon: BarChart3,
                title: "Performance Dashboards",
              },
              {
                icon: Database,
                title: "Connected Data",
              },
              {
                icon: RefreshCw,
                title: "Reporting Workflows",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-6"
                >
                  <Icon className="h-7 w-7 text-[#075B3B]" />

                  <h3 className="mt-4 font-bold">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Data Analytics & Business Intelligence FAQs
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Answers to common questions about
              dashboards, analytics, data integration
              and business reporting.
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

      {/* RELATED SOLUTIONS */}

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className="text-2xl font-extrabold">
            Explore Related Technology Solutions
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#526577]">
            Connect business intelligence with
            AI automation, CRM, ERP and other
            integrated business technologies.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {relatedSolutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between gap-4 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-5 transition hover:border-[#075B3B]/30"
              >
                <div>
                  <h3 className="text-sm font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#526577]">
                    {item.description}
                  </p>
                </div>

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
            Ready to Make Better Use of Your Business Data?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Tell us about your reporting,
            analytics and data integration
            requirements. Explore how business
            intelligence can support your organization.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your Data Project
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
