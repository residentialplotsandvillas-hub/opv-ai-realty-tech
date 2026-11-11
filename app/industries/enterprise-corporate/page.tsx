
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Layers3,
  MapPin,
  Network,
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
const PAGE_PATH = "/industries/enterprise-corporate";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Enterprise & Corporate Technology Solutions in Hyderabad | OPV AI";

const PAGE_DESCRIPTION =
  "Enterprise technology solutions in Hyderabad by OPV AI Realty Tech. Custom enterprise software, AI automation, ERP, CRM, cloud, cybersecurity, system integration and analytics.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Enterprise technology solutions Hyderabad",
    "Enterprise software development Hyderabad",
    "Corporate technology solutions India",
    "Enterprise digital transformation",
    "Custom enterprise software development",
    "Enterprise AI automation",
    "ERP CRM integration services",
    "Business process automation",
    "Cloud infrastructure solutions",
    "Enterprise application modernisation",
    "Enterprise system integration",
    "Corporate business software",
    "Business intelligence dashboards",
    "Enterprise cybersecurity solutions",
    "OPV AI Realty Tech",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
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
// ENTERPRISE SERVICES
// ==========================================

const solutions = [
  {
    icon: Code2,
    title: "Enterprise Software Development",
    description:
      "Design and develop business applications, internal platforms and custom software around complex organisational requirements.",
  },
  {
    icon: Bot,
    title: "Enterprise AI & Automation",
    description:
      "Explore AI assistants, intelligent business workflows and automation opportunities across departments.",
  },
  {
    icon: BriefcaseBusiness,
    title: "ERP, CRM & Business Systems",
    description:
      "Connect customer management, operational processes and business information through integrated applications.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Solutions",
    description:
      "Plan cloud environments, application infrastructure and digital platforms according to organisational requirements.",
  },
  {
    icon: Database,
    title: "Enterprise Data & Analytics",
    description:
      "Organise business information through data integration, reporting, analytics and management dashboards.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & IT Solutions",
    description:
      "Consider application security, infrastructure protection, user access and technology risk management.",
  },
  {
    icon: Network,
    title: "System Integration",
    description:
      "Connect business applications, databases, APIs and third-party platforms to support coordinated information flows.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Streamline suitable workflows across sales, finance, operations, administration and customer service.",
  },
];

// ==========================================
// ENTERPRISE BUSINESS TYPES
// ==========================================

const businessTypes = [
  {
    title: "Large Corporate Organisations",
    description:
      "Custom applications, connected business systems, automation and technology modernisation.",
  },
  {
    title: "Multi-Location Businesses",
    description:
      "Digital platforms and reporting systems to coordinate business information across locations.",
  },
  {
    title: "Professional Service Organisations",
    description:
      "Client management systems, service portals, workflow automation and business applications.",
  },
  {
    title: "Enterprise Groups",
    description:
      "Technology planning, system integrations, analytics and connected operational platforms.",
  },
  {
    title: "Financial & Business Services",
    description:
      "Business applications, customer workflows, reporting and technology infrastructure planning.",
  },
  {
    title: "Established Growing Companies",
    description:
      "Modernisation of existing applications, cloud solutions and scalable business systems.",
  },
];

// ==========================================
// ENTERPRISE OPERATIONAL AREAS
// ==========================================

const enterpriseAreas = [
  {
    icon: Users,
    title: "People & Customer Operations",
    description:
      "Explore connected customer management, internal communication and employee-facing applications.",
  },
  {
    icon: Settings,
    title: "Business Operations",
    description:
      "Coordinate workflows, approvals, administration and operational information across departments.",
  },
  {
    icon: Database,
    title: "Data & Information",
    description:
      "Organise relevant information sources, reporting requirements and business intelligence workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Technology & Security",
    description:
      "Consider infrastructure, application security, access management and integration requirements.",
  },
];

// ==========================================
// TECHNOLOGY CAPABILITIES
// ==========================================

const capabilities = [
  "Enterprise website development",
  "Custom business applications",
  "Enterprise software architecture",
  "ERP and CRM integration",
  "AI assistants and automation",
  "Business process automation",
  "Cloud infrastructure planning",
  "Application modernisation",
  "Data integration and reporting",
  "Business intelligence dashboards",
  "Cybersecurity considerations",
  "API and third-party integrations",
];

// ==========================================
// BUSINESS BENEFITS
// ==========================================

const benefits = [
  {
    title: "Connected Business Operations",
    description:
      "Coordinate relevant business information and workflows across teams, departments and applications.",
  },
  {
    title: "Improved Information Visibility",
    description:
      "Use structured data, reporting and dashboards to help management teams review business activity.",
  },
  {
    title: "More Efficient Workflows",
    description:
      "Identify repetitive activities and opportunities for suitable automation across organisational processes.",
  },
  {
    title: "Technology Built for Evolution",
    description:
      "Plan maintainable applications and integrations that can adapt as organisational requirements change.",
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
      "Understand organisational objectives, departments, users and current technology environments.",
  },
  {
    number: "02",
    title: "Strategise",
    description:
      "Define priorities, project scope, system requirements and the proposed technology approach.",
  },
  {
    number: "03",
    title: "Architect & Develop",
    description:
      "Design and build the agreed applications, platforms, integrations and workflows.",
  },
  {
    number: "04",
    title: "Integrate & Validate",
    description:
      "Connect relevant systems and review functionality, data flows and security considerations.",
  },
  {
    number: "05",
    title: "Optimise",
    description:
      "Review business needs and identify further improvements as technology and operations evolve.",
  },
];

// ==========================================
// FAQ CONTENT
// ==========================================

const faqs = [
  {
    question: "What are enterprise technology solutions?",
    answer:
      "Enterprise technology solutions are software, infrastructure and digital systems designed to support organisational operations. They may include enterprise applications, ERP, CRM, AI automation, cloud infrastructure, data analytics and system integration.",
  },
  {
    question:
      "Does OPV AI Realty Tech offer enterprise software development in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad and offers custom business software, AI automation, ERP and CRM solutions, cloud technology, system integration, analytics and digital transformation services.",
  },
  {
    question:
      "Can you develop custom software for large corporate organisations?",
    answer:
      "Custom enterprise software can be planned around an organisation's departments, users, workflows, data requirements, integrations and security considerations. Project scope is defined through requirements assessment.",
  },
  {
    question:
      "What is the difference between ERP and CRM software?",
    answer:
      "ERP systems help coordinate business operations such as finance, inventory and administration. CRM systems focus on customer relationships, enquiries, sales activities and service workflows. The two may be integrated where appropriate.",
  },
  {
    question:
      "How can AI and automation support enterprise operations?",
    answer:
      "AI and automation can assist with suitable repetitive tasks, information retrieval, document workflows, internal support and business processes. Appropriate human oversight, data controls and testing are important.",
  },
  {
    question:
      "Can enterprise software integrate with existing business applications?",
    answer:
      "Many applications can be connected through supported APIs, middleware or approved integration methods. Feasibility depends on existing system capabilities, data structures, permissions and security requirements.",
  },
  {
    question:
      "How do you approach enterprise software security?",
    answer:
      "Security planning may include authentication, role-based access, encryption, secure APIs, logging, testing and infrastructure controls. Specific requirements depend on the organisation's systems and applicable obligations.",
  },
  {
    question:
      "How much does enterprise software development cost?",
    answer:
      "Costs depend on the scope of development, number of users, system complexity, integrations, infrastructure, security requirements and ongoing support. A requirements assessment is necessary for an accurate quotation.",
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
    title: "CRM, ERP & Business Systems",
    href: "/solutions/crm-erp-business-systems",
  },
  {
    title: "SaaS, Cloud & DevOps",
    href: "/solutions/saas-cloud-devops",
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
      name: "Enterprise & Corporate Technology Solutions",
      serviceType:
        "Enterprise Software Development, AI Automation, ERP, CRM and Cloud Solutions",
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
        name: "Enterprise Technology Services",
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
          name: "Enterprise & Corporate",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// ==========================================
// PAGE COMPONENT
// ==========================================

export default function EnterpriseCorporatePage() {
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
                Enterprise & Corporate
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <Building2 className="h-4 w-4" />
                Enterprise & Corporate Technology
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                Enterprise & Corporate
                <span className="block text-[#075B3B]">
                  Technology Solutions
                </span>
                <span className="mt-3 block text-2xl font-bold text-[#526577] sm:text-3xl">
                  In Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base font-semibold leading-8 text-[#526577] sm:text-lg">
                Transform Your Enterprise. Engineer What&apos;s Next.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                Modernise business operations with custom
                software, enterprise AI, connected systems,
                cloud infrastructure and intelligent
                automation. OPV AI Realty Tech helps
                organisations explore technology aligned
                with their operational needs and strategic objectives.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your Enterprise Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#enterprise-solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:bg-[#F0F6F1]"
                >
                  Explore Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-8 flex items-center gap-2 text-sm text-[#647586]">
                <MapPin className="h-4 w-4 shrink-0 text-[#075B3B]" />
                Hyderabad, Telangana · Serving businesses across India
              </p>
            </div>

            {/* ENTERPRISE TECHNOLOGY ILLUSTRATION */}
            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-6 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">
              <div className="flex items-center justify-between gap-4 border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Enterprise Technology
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold">
                    Connected Enterprise Ecosystem
                  </h2>
                </div>

                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Building2 className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-[#075B3B]/15 bg-[#F0F6F1] p-5">
                <div className="rounded-xl bg-white p-3 text-[#075B3B]">
                  <Layers3 className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="font-extrabold">
                    Enterprise Technology Platform
                  </h3>
                  <p className="mt-1 text-sm text-[#526577]">
                    Connected applications and business systems
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    icon: Bot,
                    title: "Enterprise AI",
                    description: "Intelligent business workflows",
                  },
                  {
                    icon: BriefcaseBusiness,
                    title: "Business Systems",
                    description: "Connected operations and management",
                  },
                  {
                    icon: Cloud,
                    title: "Cloud Technology",
                    description: "Infrastructure and applications",
                  },
                  {
                    icon: BarChart3,
                    title: "Business Intelligence",
                    description: "Data, reports and insights",
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
                  Technology planned around organisational requirements
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
              The Future of Enterprise Technology
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Build a Connected and Intelligent Business Environment
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Enterprises manage interconnected departments,
              business applications, customer relationships,
              data and operational workflows. Technology
              can help coordinate these activities through
              integrated systems, custom applications
              and intelligent automation.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              A strong digital foundation begins with
              understanding organisational priorities
              and defining a suitable technology strategy.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="enterprise-solutions"
        className="scroll-mt-24 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Enterprise & Corporate Technology Solutions
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Explore software, AI, cloud, automation
              and integration capabilities for established
              businesses and enterprise organisations.
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
              Technology for Different Enterprise Models
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Every organisation has different structures,
              teams, systems and operational priorities.
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

      {/* ENTERPRISE OPERATIONS */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Connected Enterprise Operations
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Connect Technology Across Your Organisation
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A connected technology environment brings
              people, processes, information and
              infrastructure into a coordinated
              business ecosystem.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {enterpriseAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold">
                    {area.title}
                  </h3>

                  <p className="mt-3 leading-8 text-[#526577]">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIGITAL TRANSFORMATION CAPABILITIES */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Technology Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              A Connected Digital Foundation for Enterprises
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              From enterprise applications to AI,
              cloud infrastructure and business
              intelligence, we help identify technology
              capabilities that fit your organisation&apos;s
              requirements.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#075B3B] hover:underline"
            >
              Discuss Your Enterprise Requirements
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
              Technology That Supports Enterprise Growth
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Thoughtfully planned technology can help
              organisations coordinate operations,
              improve information visibility and adapt
              to changing business requirements.
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
              From Enterprise Strategy to Connected Technology
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A structured process helps align technology
              projects with organisational objectives,
              technical requirements and operational priorities.
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

      {/* FAQs */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Enterprise Technology FAQs
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Common questions about enterprise software,
              AI, ERP, CRM, cloud infrastructure and integration.
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
            Discover how enterprise transformation
            connects with AI automation, business
            systems and cloud infrastructure.
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
            Ready to Modernise Your Enterprise?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Tell us about your organisational goals,
            existing systems and technology requirements.
            Explore how custom software, AI, cloud
            and automation can support your next
            stage of growth.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your Enterprise Project
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
