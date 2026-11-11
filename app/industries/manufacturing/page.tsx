
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Boxes,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Cloud,
  Cog,
  Database,
  Factory,
  MapPin,
  Package,
  Phone,
  Rocket,
  Settings,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";

// ==========================================
// SEO CONFIGURATION
// ==========================================

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_PATH = "/industries/manufacturing";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Manufacturing Software & Technology Solutions in Hyderabad | OPV AI";

const PAGE_DESCRIPTION =
  "Manufacturing technology solutions in Hyderabad by OPV AI Realty Tech. ERP integration, production automation, inventory systems, industrial analytics, AI and custom manufacturing software.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Manufacturing technology solutions Hyderabad",
    "Manufacturing software development Hyderabad",
    "Manufacturing ERP integration",
    "Production workflow automation",
    "Inventory management software",
    "Industrial digital transformation",
    "Manufacturing AI automation",
    "Manufacturing analytics dashboards",
    "Production management software",
    "Industrial data integration",
    "Manufacturing cloud solutions",
    "Custom manufacturing applications",
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
// MANUFACTURING SOLUTIONS
// ==========================================

const solutions = [
  {
    icon: Factory,
    title: "Manufacturing Websites & Digital Platforms",
    description:
      "Create professional websites, product catalogues, customer portals and digital platforms for manufacturing businesses.",
  },
  {
    icon: Settings,
    title: "ERP & Business Systems",
    description:
      "Explore integrated business applications for coordinating production information, procurement, inventory and administration.",
  },
  {
    icon: Workflow,
    title: "Production Workflow Automation",
    description:
      "Map and automate suitable operational tasks, approvals, notifications and coordination workflows.",
  },
  {
    icon: Boxes,
    title: "Inventory & Supply Chain Systems",
    description:
      "Plan digital systems for stock records, material tracking, supplier information and inventory coordination.",
  },
  {
    icon: Bot,
    title: "AI & Intelligent Automation",
    description:
      "Explore AI assistants, information processing and automation opportunities across suitable manufacturing workflows.",
  },
  {
    icon: BarChart3,
    title: "Manufacturing Analytics",
    description:
      "Develop dashboards and reports to help teams review production activity, inventory information and business performance.",
  },
  {
    icon: Database,
    title: "Industrial Data Integration",
    description:
      "Connect relevant business applications, databases and data sources to support a more coordinated information environment.",
  },
  {
    icon: Cloud,
    title: "Cloud & Application Solutions",
    description:
      "Plan cloud-enabled applications and connected digital platforms around manufacturing business requirements.",
  },
];

// ==========================================
// BUSINESS TYPES
// ==========================================

const businessTypes = [
  {
    title: "Industrial Manufacturers",
    description:
      "Business applications, digital platforms and operational systems for manufacturing organisations.",
  },
  {
    title: "Engineering Companies",
    description:
      "Project workflows, technical information management and connected business applications.",
  },
  {
    title: "Automotive & Components",
    description:
      "Digital systems for product information, inventory coordination and operational processes.",
  },
  {
    title: "Food & Beverage Manufacturers",
    description:
      "Business software for inventory, production coordination, supplier information and reporting.",
  },
  {
    title: "Electronics & Electrical Manufacturers",
    description:
      "Product catalogues, business applications and data integration for manufacturing operations.",
  },
  {
    title: "Small & Medium Manufacturers",
    description:
      "Practical digital tools for business management, customer relationships and operational coordination.",
  },
];

// ==========================================
// MANUFACTURING JOURNEY
// ==========================================

const journey = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Plan",
    description:
      "Organise requirements, production information and operational priorities.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Produce",
    description:
      "Coordinate relevant production activities and operational records.",
  },
  {
    number: "03",
    icon: Package,
    title: "Manage",
    description:
      "Support inventory, supplier and order information workflows.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Analyse",
    description:
      "Review business activity and performance through structured reporting.",
  },
];

// ==========================================
// TECHNOLOGY CAPABILITIES
// ==========================================

const capabilities = [
  "Manufacturing business websites",
  "ERP and business system integration",
  "Production workflow applications",
  "Inventory management systems",
  "Procurement workflow coordination",
  "Supplier and vendor management",
  "AI-assisted business workflows",
  "Production and operations dashboards",
  "Industrial data integration",
  "Cloud-based business applications",
  "Maintenance task management workflows",
  "Operational reporting and analytics",
];

// ==========================================
// BUSINESS BENEFITS
// ==========================================

const benefits = [
  {
    title: "More Connected Operations",
    description:
      "Bring relevant business information and workflows together across departments and operational teams.",
  },
  {
    title: "Better Information Visibility",
    description:
      "Use structured records and dashboards to help teams review production, inventory and business activity.",
  },
  {
    title: "Reduced Repetitive Administration",
    description:
      "Identify suitable opportunities to automate recurring information handling, notifications and coordination tasks.",
  },
  {
    title: "Technology That Can Evolve",
    description:
      "Plan digital systems with maintainability, integration and future business requirements in mind.",
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
      "Review your manufacturing model, departments, existing systems and business requirements.",
  },
  {
    number: "02",
    title: "Map Processes",
    description:
      "Identify key information flows, operational activities and opportunities for digital improvement.",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "Plan and build the agreed applications, integrations and automation workflows.",
  },
  {
    number: "04",
    title: "Integrate & Test",
    description:
      "Connect relevant systems and review functionality, data flows and access requirements.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review how the solution supports operations and identify further improvement opportunities.",
  },
];

// ==========================================
// FREQUENTLY ASKED QUESTIONS
// ==========================================

const faqs = [
  {
    question: "What are manufacturing technology solutions?",
    answer:
      "Manufacturing technology solutions include software, business applications, automation and data systems that support production planning, inventory, procurement, supplier coordination and operational reporting.",
  },
  {
    question:
      "Does OPV AI Realty Tech provide manufacturing software development in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad and offers custom software development, ERP and CRM integration, AI automation, business applications, cloud technology and analytics for manufacturing businesses.",
  },
  {
    question: "Can you integrate manufacturing software with existing ERP systems?",
    answer:
      "ERP integration can be explored through supported APIs, databases or approved integration methods. Feasibility depends on the existing ERP platform, vendor permissions, data structures and security requirements.",
  },
  {
    question: "How can automation improve manufacturing workflows?",
    answer:
      "Automation can help coordinate suitable repetitive administrative tasks, approvals, notifications, document processing and information flows. Opportunities depend on the organisation's operational requirements.",
  },
  {
    question: "Can you develop inventory and stock management systems?",
    answer:
      "Inventory applications can be designed for stock records, material movements, supplier information, purchase workflows and reporting, depending on the agreed project scope.",
  },
  {
    question: "How can AI support manufacturing businesses?",
    answer:
      "AI can assist with suitable information retrieval, document workflows, internal support and operational data analysis. High-impact operational decisions require appropriate validation and human oversight.",
  },
  {
    question: "Do you develop manufacturing dashboards and analytics?",
    answer:
      "Manufacturing dashboards can bring together relevant data on production activities, inventory, procurement and business performance, subject to the availability and quality of underlying information.",
  },
  {
    question: "How much does manufacturing software development cost?",
    answer:
      "Costs depend on application features, system complexity, user roles, integrations, infrastructure, testing and ongoing support. A requirements assessment is necessary for an accurate quotation.",
  },
];

// ==========================================
// RELATED SOLUTIONS
// ==========================================

const relatedSolutions = [
  {
    title: "CRM, ERP & Business Systems",
    href: "/solutions/crm-erp-business-systems",
  },
  {
    title: "AI & Intelligent Automation",
    href: "/solutions/ai-intelligent-automation",
  },
  {
    title: "Data & Business Intelligence",
    href: "/solutions/data-business-intelligence",
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
      name: "Manufacturing Technology Solutions",
      serviceType:
        "Manufacturing Software Development, ERP Integration, AI Automation and Analytics",
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
        name: "Manufacturing Technology Services",
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
          name: "Manufacturing",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// ==========================================
// PAGE COMPONENT
// ==========================================

export default function ManufacturingPage() {
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
                Manufacturing
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <Factory className="h-4 w-4" />
                Manufacturing Technology Solutions
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                Manufacturing Software
                <span className="block text-[#075B3B]">
                  & Technology Solutions
                </span>
                <span className="mt-3 block text-2xl font-bold text-[#526577] sm:text-3xl">
                  In Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base font-semibold leading-8 text-[#526577] sm:text-lg">
                Transform Manufacturing. Build Smarter Operations.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                Connect production information, inventory, business systems
                and operational workflows with modern technology.
                OPV AI Realty Tech helps manufacturing organisations
                explore software, AI and automation solutions aligned
                with their business needs.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your Manufacturing Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#manufacturing-solutions"
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

            {/* MANUFACTURING TECHNOLOGY VISUAL */}
            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-6 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">
              <div className="flex items-center justify-between gap-4 border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Industrial Technology
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold">
                    Connected Manufacturing
                  </h2>
                </div>

                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Factory className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-[#075B3B]/15 bg-[#F0F6F1] p-5">
                <div className="rounded-xl bg-white p-3 text-[#075B3B]">
                  <Cog className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="font-extrabold">
                    Digital Manufacturing Operations
                  </h3>
                  <p className="mt-1 text-sm text-[#526577]">
                    Connected business and production workflows
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    icon: Workflow,
                    title: "Automation",
                    description: "Coordinated operational processes",
                  },
                  {
                    icon: Boxes,
                    title: "Inventory",
                    description: "Materials and stock information",
                  },
                  {
                    icon: Bot,
                    title: "AI Solutions",
                    description: "Intelligent information workflows",
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics",
                    description: "Operational reports and insights",
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
                  Technology planned around operational requirements
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
              The Future of Manufacturing
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Digital Technology for Connected Manufacturing Businesses
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Manufacturing organisations manage complex relationships
              between production, procurement, inventory, suppliers,
              sales and administration. Well-planned digital systems
              can help coordinate information and workflows across
              these functions.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              The right technology approach starts with understanding
              your operations and identifying practical opportunities
              for improvement.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="manufacturing-solutions"
        className="scroll-mt-24 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Manufacturing Technology Solutions
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Explore software, AI, automation and data capabilities
              designed around manufacturing and industrial business needs.
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

      {/* BUSINESS TYPES */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Who We Serve
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Technology for Different Manufacturing Businesses
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Every manufacturer has different products, processes,
              supply chains and operational requirements.
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
                  <Factory className="h-7 w-7" />
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

      {/* MANUFACTURING JOURNEY */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Connected Operations
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Connect Key Manufacturing Business Activities
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Digital systems can help coordinate the flow of information
              from sourcing and production planning through inventory
              management and business reporting.
            </p>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((stage) => {
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

      {/* TECHNOLOGY CAPABILITIES */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Technology Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              A Connected Digital Toolkit for Manufacturers
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              From business applications to automation and analytics,
              we help identify suitable technology capabilities
              for your manufacturing requirements.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#075B3B] hover:underline"
            >
              Discuss Your Manufacturing Requirements
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

      {/* BUSINESS BENEFITS */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Business Outcomes
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Technology That Supports Manufacturing Growth
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Connected business systems can help manufacturers
              organise information, coordinate activities
              and understand performance.
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
              From Manufacturing Requirements to Digital Solutions
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A structured process helps align technology
              with operational workflows, business priorities
              and system requirements.
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

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Manufacturing Technology FAQs
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Common questions about manufacturing software,
              ERP integration, AI automation, inventory
              and operational analytics.
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
            Connect manufacturing technology with business systems,
            AI automation and data intelligence.
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
            Ready to Modernise Your Manufacturing Business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Tell us about your production processes,
            business applications and digital requirements.
            Explore how software, AI and connected technology
            can support your organisation.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your Manufacturing Project
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
