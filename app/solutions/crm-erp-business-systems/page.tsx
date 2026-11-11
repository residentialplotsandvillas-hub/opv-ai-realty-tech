
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Database,
  FileText,
  Handshake,
  Layers3,
  MapPin,
  Package,
  Phone,
  Rocket,
  Settings,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

// ==========================================
// SEO CONFIGURATION
// ==========================================

const SITE_URL = "https://www.opvairealtytech.com";

const PAGE_PATH =
  "/solutions/crm-erp-business-systems";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "CRM & ERP Software Development Company in Hyderabad | OPV AI";

const PAGE_DESCRIPTION =
  "Custom CRM and ERP software development in Hyderabad. Explore lead management, sales automation, ERP integration and business systems from OPV AI Realty Tech.";

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
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "OPV AI Realty Tech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

// ==========================================
// CRM & ERP SERVICES
// ==========================================

const services = [
  {
    icon: Users,
    title: "Custom CRM Development",
    description:
      "Develop customer relationship management systems for lead tracking, customer records, sales pipelines, follow-ups and team collaboration.",
  },
  {
    icon: Building2,
    title: "ERP Software Development",
    description:
      "Plan integrated enterprise resource planning systems that connect operational processes, business records and management reporting.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Automate suitable tasks, approvals, notifications, lead assignments and hand-offs between business teams.",
  },
  {
    icon: Database,
    title: "CRM & ERP Integration",
    description:
      "Connect compatible business applications, APIs and data sources to improve information flow and reduce duplicate data entry.",
  },
  {
    icon: ClipboardList,
    title: "Operations Management Systems",
    description:
      "Build applications for task management, operational tracking, employee workflows, approvals and internal administration.",
  },
  {
    icon: Settings,
    title: "Custom Business Applications",
    description:
      "Design business software around your specific operational requirements when standard products are not a suitable fit.",
  },
];

// ==========================================
// BUSINESS FUNCTIONS
// ==========================================

const businessFunctions = [
  {
    icon: Handshake,
    title: "Sales & Customer Management",
    items: [
      "Lead and enquiry management",
      "Customer records and interaction history",
      "Sales pipeline tracking",
      "Follow-up and task coordination",
    ],
  },
  {
    icon: Package,
    title: "Inventory & Procurement",
    items: [
      "Inventory and stock visibility",
      "Purchase and supplier workflows",
      "Order tracking",
      "Product and service records",
    ],
  },
  {
    icon: FileText,
    title: "Finance & Administration",
    items: [
      "Invoice and document workflows",
      "Expense and approval tracking",
      "Business records management",
      "Administrative process coordination",
    ],
  },
  {
    icon: BarChart3,
    title: "Management & Reporting",
    items: [
      "Operational dashboards",
      "Business performance reporting",
      "Team activity visibility",
      "Management information",
    ],
  },
];

// ==========================================
// BUSINESS BENEFITS
// ==========================================

const benefits = [
  {
    title: "Centralized Business Information",
    description:
      "Organize relevant customer, sales and operational records in connected systems with appropriate access controls.",
  },
  {
    title: "More Consistent Workflows",
    description:
      "Define how tasks, approvals and information move between people, departments and applications.",
  },
  {
    title: "Improved Operational Visibility",
    description:
      "Use dashboards and structured reports to understand business activity and monitor important processes.",
  },
  {
    title: "Scalable System Architecture",
    description:
      "Plan software around current business needs while considering future modules, users and integrations.",
  },
];

// ==========================================
// DEVELOPMENT PROCESS
// ==========================================

const process = [
  {
    number: "01",
    title: "Requirement Discovery",
    description:
      "Understand your business structure, existing applications, teams and operational challenges.",
  },
  {
    number: "02",
    title: "Business Process Mapping",
    description:
      "Identify customer journeys, workflows, data requirements and opportunities for system integration.",
  },
  {
    number: "03",
    title: "Solution Architecture",
    description:
      "Define modules, user roles, permissions, integrations and the proposed technology approach.",
  },
  {
    number: "04",
    title: "Development & Integration",
    description:
      "Build or configure the agreed system and integrate compatible applications and business workflows.",
  },
  {
    number: "05",
    title: "Testing & Improvement",
    description:
      "Validate functionality, review usability and identify refinements as business requirements evolve.",
  },
];

// ==========================================
// FAQ CONTENT
// ==========================================

const faqs = [
  {
    question: "What is CRM software?",
    answer:
      "Customer Relationship Management software helps businesses organize customer information, manage enquiries, track sales opportunities and coordinate customer communication and follow-up activities.",
  },
  {
    question: "What is ERP software?",
    answer:
      "Enterprise Resource Planning software helps organizations coordinate business processes such as inventory, procurement, finance, administration, operations and reporting through integrated systems.",
  },
  {
    question: "What is the difference between CRM and ERP?",
    answer:
      "CRM primarily focuses on customer relationships, sales and service processes. ERP focuses on internal resources and operational processes. The two systems can be integrated to share relevant business information.",
  },
  {
    question:
      "Does OPV AI Realty Tech provide custom CRM development in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad and offers custom CRM and business application development based on project requirements, including lead management, sales workflows and customer tracking.",
  },
  {
    question:
      "Can CRM software be integrated with WhatsApp and websites?",
    answer:
      "CRM systems can often be connected with websites, lead forms and WhatsApp Business APIs, subject to technical compatibility, required permissions and platform policies.",
  },
  {
    question:
      "Can CRM and ERP systems be integrated with existing software?",
    answer:
      "Integration is possible when the relevant applications support APIs, database access or other suitable integration methods. Compatibility, security and data requirements should be reviewed before development.",
  },
  {
    question:
      "How much does custom CRM or ERP software development cost?",
    answer:
      "The cost depends on the number of modules, user roles, workflows, integrations, data migration requirements, hosting and ongoing maintenance. A project assessment is needed for an accurate estimate.",
  },
  {
    question:
      "How do I start a CRM or ERP project with OPV AI Realty Tech?",
    answer:
      "Share your business requirements through our contact page. We can discuss your current processes, proposed modules, integration needs and the next steps for evaluating a suitable solution.",
  },
];

// ==========================================
// RELATED SOLUTIONS
// ==========================================

const relatedSolutions = [
  {
    title: "AI & Intelligent Automation",
    href: "/solutions/ai-intelligent-automation",
  },
  {
    title: "Software Engineering",
    href: "/solutions/software-engineering",
  },
  {
    title: "SaaS, Cloud & DevOps",
    href: "/solutions/saas-cloud-devops",
  },
  {
    title: "Data & Business Intelligence",
    href: "/solutions/data-business-intelligence",
  },
];

// ==========================================
// PAGE COMPONENT
// ==========================================

export default function CRMERPBusinessSystemsPage() {
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
        breadcrumb: {
          "@id": `${PAGE_URL}#breadcrumb`,
        },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "CRM, ERP & Business Systems Development",
        serviceType: "Custom CRM and ERP Software Development",
        description: PAGE_DESCRIPTION,
        url: PAGE_URL,
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "OPV AI Realty Tech Private Limited",
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
          name: "CRM and ERP Development Services",
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
            name: "CRM, ERP & Business Systems",
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

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

      {/* ====================================
          HERO SECTION
      ==================================== */}

      <section className="relative border-b border-[#E5E9E3] bg-[#F8F6F0]">
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
                CRM, ERP & Business Systems
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <Layers3 className="h-4 w-4" />
                CRM • ERP • Business Automation
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                CRM & ERP Software Development
                <span className="mt-3 block text-[#075B3B]">
                  Company in Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#526577] sm:text-lg">
                Connect customer relationships, sales activities,
                operational processes and business information
                through custom CRM, ERP and integrated business
                systems developed around your requirements.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                OPV AI Realty Tech helps startups, SMEs and
                enterprises plan software solutions for
                customer management, workflow automation,
                reporting and connected business operations.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your CRM or ERP Project
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
                Madhapur, Hyderabad · Serving businesses across India
              </p>
            </div>

            {/* HERO FEATURE PANEL */}

            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-7 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">
              <div className="flex items-center justify-between border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Business Technology
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold">
                    Connected Business Systems
                  </h2>
                </div>

                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Layers3 className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Users,
                    title: "CRM",
                    text: "Customers, leads and sales",
                  },
                  {
                    icon: Building2,
                    title: "ERP",
                    text: "Resources and operations",
                  },
                  {
                    icon: Workflow,
                    title: "Automation",
                    text: "Tasks and approvals",
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics",
                    text: "Reports and insights",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-5"
                    >
                      <Icon className="h-6 w-6 text-[#075B3B]" />
                      <h3 className="mt-4 font-bold">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-6 text-[#526577]">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#F0F6F1] p-5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#075B3B]" />
                <p className="text-sm font-medium">
                  Business systems designed around your operational requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================
          INTRODUCTION
      ==================================== */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Integrated Business Technology
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Connect Your Customers, Teams and Operations
            </h2>

            <p className="mt-6 text-base leading-8 text-[#526577]">
              When customer records, sales activities, inventory
              information and operational workflows are spread
              across disconnected tools, business coordination
              becomes more difficult.
            </p>

            <p className="mt-4 text-base leading-8 text-[#526577]">
              CRM and ERP software provide structured ways to
              organize information, coordinate processes and
              support management decisions. Custom development
              allows businesses to select the modules and
              integrations most relevant to their operations.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================
          CRM VS ERP
      ==================================== */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Understanding Business Systems
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              CRM vs ERP: What Is the Difference?
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              CRM and ERP serve different business needs,
              but can work together as part of an integrated
              technology environment.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-[#E5E9E3] bg-white p-8">
              <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                <Users className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-extrabold">
                CRM — Customer Relationship Management
              </h3>

              <p className="mt-4 leading-8 text-[#526577]">
                CRM software focuses on managing customer
                relationships, enquiries, sales opportunities
                and customer-facing workflows.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Lead and enquiry tracking",
                  "Customer information management",
                  "Sales pipeline monitoring",
                  "Follow-up and activity scheduling",
                  "Customer communication history",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-[#526577]"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#075B3B]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-[#E5E9E3] bg-white p-8">
              <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                <Building2 className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-extrabold">
                ERP — Enterprise Resource Planning
              </h3>

              <p className="mt-4 leading-8 text-[#526577]">
                ERP software focuses on coordinating
                internal business resources, processes
                and operational information.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Inventory and procurement",
                  "Finance and administration",
                  "Resource and operations planning",
                  "Business records management",
                  "Operational reporting",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-[#526577]"
                  >
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#075B3B]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ====================================
          SERVICES
      ==================================== */}

      <section id="services" className="scroll-mt-24 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              CRM, ERP & Business Software Development Services
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Explore custom business technology solutions
              for customer management, enterprise operations,
              application integration and process automation.
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

      {/* ====================================
          BUSINESS FUNCTIONS
      ==================================== */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Across Your Organization
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Business Functions Supported by CRM & ERP
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Business systems can be configured around
              different departments, workflows and
              reporting requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {businessFunctions.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-extrabold">
                      {area.title}
                    </h3>
                  </div>

                  <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-7 text-[#526577]"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#075B3B]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================
          INDUSTRY APPLICATIONS
      ==================================== */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Industry Applications
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              CRM & ERP Solutions for Different Industries
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Different industries require different
              customer management and operational
              workflows. Custom business systems can
              be designed to support those requirements.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Real Estate",
                description:
                  "Property enquiries, customer records, site visits, sales tracking and commission workflows.",
                href: "/industries/real-estate",
              },
              {
                title: "Retail & E-commerce",
                description:
                  "Customer records, inventory visibility, order workflows and sales reporting.",
                href: "/industries/retail-ecommerce",
              },
              {
                title: "Manufacturing",
                description:
                  "Production coordination, inventory, procurement and operational reporting.",
                href: "/industries/manufacturing",
              },
              {
                title: "Healthcare",
                description:
                  "Administrative workflows, appointment coordination and business records management.",
                href: "/industries/healthcare",
              },
              {
                title: "Education",
                description:
                  "Admission enquiries, student administration and institutional reporting.",
                href: "/industries/education",
              },
              {
                title: "Startups & SMEs",
                description:
                  "Sales pipelines, team workflows, customer management and scalable business applications.",
                href: "/industries/startups-smes",
              },
            ].map((industry) => (
              <article
                key={industry.title}
                className="flex flex-col rounded-2xl border border-[#E5E9E3] bg-white p-6"
              >
                <h3 className="text-lg font-extrabold">
                  {industry.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#526577]">
                  {industry.description}
                </p>

                <Link
                  href={industry.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#075B3B] hover:underline"
                >
                  Explore Industry
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================
          BENEFITS
      ==================================== */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Business Value
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Benefits of Integrated CRM & ERP Systems
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Well-planned business systems can improve
              how organizations coordinate information,
              manage activities and monitor operations.
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

      {/* ====================================
          IMPLEMENTATION PROCESS
      ==================================== */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Development Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Our CRM & ERP Development Process
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A structured approach to understanding,
              designing and implementing connected
              business software.
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

      {/* ====================================
          SECURITY & ACCESS CONTROL
      ==================================== */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Responsible System Design
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Business Software with Security in Mind
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              CRM and ERP systems often contain important
              customer, employee and operational information.
              Security requirements should be considered
              from the beginning of the project.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              We assess role-based access, data handling,
              authentication, integration permissions and
              other safeguards appropriate to the
              proposed application.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: "Access Control",
              },
              {
                icon: Database,
                title: "Data Management",
              },
              {
                icon: Workflow,
                title: "Process Governance",
              },
              {
                icon: Settings,
                title: "Integration Planning",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#E5E9E3] bg-white p-6"
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

      {/* ====================================
          FAQ SECTION
      ==================================== */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              CRM & ERP Development FAQs
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Common questions about custom CRM,
              ERP software, integrations and
              business systems development.
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

      {/* ====================================
          RELATED SOLUTIONS
      ==================================== */}

      <section className="border-t border-[#E5E9E3] bg-[#F8F6F0] py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className="text-2xl font-extrabold">
            Explore Related Technology Solutions
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#526577]">
            Connect your CRM and ERP systems with
            AI automation, custom software development,
            cloud infrastructure and business intelligence.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {relatedSolutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between gap-4 rounded-xl border border-[#E5E9E3] bg-white p-5 transition hover:border-[#075B3B]/30"
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

      {/* ====================================
          FINAL CTA
      ==================================== */}

      <section className="bg-[#075B3B] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Rocket className="h-7 w-7 text-[#E9CF91]" />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold sm:text-4xl">
            Ready to Build Smarter Business Systems?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Tell us about your CRM, ERP, sales
            management or operational software
            requirements. Explore a solution designed
            around your business goals.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your Requirements
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
