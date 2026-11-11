
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
  Database,
  MapPin,
  Phone,
  Rocket,
  Route,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_URL = `${SITE_URL}/industries/logistics`;

const PAGE_TITLE =
  "Logistics & Supply Chain Software Solutions in Hyderabad | OPV AI";

const PAGE_DESCRIPTION =
  "Logistics and supply chain technology solutions in Hyderabad. Fleet management, shipment tracking, warehouse software, inventory systems, AI automation and logistics analytics.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Logistics software development Hyderabad",
    "Supply chain technology solutions",
    "Fleet management software",
    "Shipment tracking platform",
    "Warehouse management system",
    "Inventory and order management",
    "Logistics AI automation",
    "Transport management software",
    "Logistics analytics dashboards",
    "Supply chain system integration",
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

const solutions = [
  {
    icon: Truck,
    title: "Fleet Management Systems",
    description:
      "Plan digital tools for vehicle records, fleet activities, maintenance coordination and transport operations.",
  },
  {
    icon: Route,
    title: "Shipment & Delivery Tracking",
    description:
      "Develop tracking interfaces and workflows to organise shipment information and delivery updates.",
  },
  {
    icon: Warehouse,
    title: "Warehouse Management Systems",
    description:
      "Explore applications for inventory records, warehouse operations, stock visibility and fulfilment coordination.",
  },
  {
    icon: Boxes,
    title: "Inventory & Order Management",
    description:
      "Connect product records, stock information, order processing and business workflows through suitable applications.",
  },
  {
    icon: Bot,
    title: "AI & Workflow Automation",
    description:
      "Explore AI assistants and automation for document handling, enquiries, notifications and operational tasks.",
  },
  {
    icon: Database,
    title: "Supply Chain Data Integration",
    description:
      "Connect business applications, data sources and systems to support coordinated information flows.",
  },
  {
    icon: BarChart3,
    title: "Logistics Analytics & Reporting",
    description:
      "Plan dashboards for shipment activity, fleet information, inventory and operational performance.",
  },
  {
    icon: Cloud,
    title: "Cloud & Digital Platforms",
    description:
      "Develop cloud-enabled applications and digital platforms around logistics and supply chain requirements.",
  },
];

const businessTypes = [
  {
    title: "Transport & Fleet Operators",
    description:
      "Fleet records, transport coordination, vehicle information and operational reporting.",
  },
  {
    title: "Courier & Delivery Companies",
    description:
      "Shipment tracking, delivery workflows, customer communication and service management applications.",
  },
  {
    title: "Warehousing Businesses",
    description:
      "Stock visibility, warehouse records, order coordination and inventory workflows.",
  },
  {
    title: "Freight & Cargo Companies",
    description:
      "Shipment information, customer enquiries, documentation and operational coordination.",
  },
  {
    title: "Supply Chain Businesses",
    description:
      "Supplier information, procurement processes, inventory and business reporting.",
  },
  {
    title: "E-commerce Fulfilment Providers",
    description:
      "Order processing, fulfilment coordination, shipment updates and customer communication.",
  },
];

const journeyStages = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Plan",
    description:
      "Organise shipment requests, customer details and operational requirements.",
  },
  {
    number: "02",
    icon: Truck,
    title: "Transport",
    description:
      "Coordinate vehicle information, transport activities and delivery workflows.",
  },
  {
    number: "03",
    icon: Warehouse,
    title: "Manage",
    description:
      "Support warehouse records, inventory visibility and fulfilment processes.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Analyse",
    description:
      "Review shipment activity, inventory information and business performance.",
  },
];

const capabilities = [
  "Logistics business websites",
  "Fleet management applications",
  "Shipment tracking platforms",
  "Delivery management workflows",
  "Warehouse management applications",
  "Inventory and order management",
  "Supplier and vendor management",
  "Logistics CRM systems",
  "AI-assisted document workflows",
  "Operational process automation",
  "Fleet and shipment dashboards",
  "Business system integrations",
];

const benefits = [
  {
    title: "Better Operational Visibility",
    description:
      "Organise logistics information so teams can review shipments, inventory and operational status.",
  },
  {
    title: "More Connected Workflows",
    description:
      "Coordinate activities across transport, warehousing, fulfilment and customer service systems.",
  },
  {
    title: "Reduced Repetitive Administration",
    description:
      "Identify opportunities to automate recurring data entry, notifications and document-related tasks.",
  },
  {
    title: "Informed Business Planning",
    description:
      "Use organised information and reporting to support operational and business decisions.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Review your logistics model, operational activities, users and existing systems.",
  },
  {
    number: "02",
    title: "Map Workflows",
    description:
      "Identify information flows across shipments, vehicles, warehouses and customers.",
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
      "Connect relevant systems and review data flows, functionality and user experience.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review business needs and identify opportunities for ongoing optimisation.",
  },
];

const faqs = [
  {
    question:
      "What are logistics and supply chain technology solutions?",
    answer:
      "They are digital systems supporting transport, shipments, warehouses, inventory, orders, supplier information and operational reporting.",
  },
  {
    question:
      "Does OPV AI Realty Tech develop logistics software in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad and offers custom software, business applications, AI automation, integrations and analytics for logistics-related requirements.",
  },
  {
    question: "Can you develop a fleet management system?",
    answer:
      "Fleet management applications can be planned for vehicle records, maintenance workflows, transport activities and operational reporting.",
  },
  {
    question: "Can customers track their shipments online?",
    answer:
      "Shipment tracking portals can display available status updates and delivery information when connected to appropriate operational data sources.",
  },
  {
    question: "What can a warehouse management system do?",
    answer:
      "Warehouse applications can organise stock records, inventory movements, order processing, fulfilment workflows and reporting, depending on project scope.",
  },
  {
    question: "How can AI help logistics operations?",
    answer:
      "AI may assist with document processing, general enquiries, information retrieval and suitable workflow automation, with human review for consequential decisions.",
  },
  {
    question:
      "Can new logistics software integrate with existing systems?",
    answer:
      "Integration feasibility depends on existing APIs, data structures, access permissions, vendor restrictions and security requirements.",
  },
  {
    question: "How much does custom logistics software cost?",
    answer:
      "Costs depend on features, users, integrations, infrastructure, testing and maintenance. A requirements assessment is needed for an accurate quotation.",
  },
];

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
    title: "Data & Business Intelligence",
    href: "/solutions/data-business-intelligence",
  },
];

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
      name: "Logistics & Supply Chain Technology Solutions",
      serviceType:
        "Logistics Software, Fleet Management, Warehouse Systems and Automation",
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
        name: "Logistics Technology Services",
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
          name: "Logistics",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function LogisticsPage() {
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
                Logistics
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <Truck className="h-4 w-4" />
                Logistics & Supply Chain Technology
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                Logistics & Supply Chain
                <span className="block text-[#075B3B]">
                  Technology Solutions
                </span>
                <span className="mt-3 block text-2xl font-bold text-[#526577] sm:text-3xl">
                  In Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-[#526577]">
                Connect Logistics. Move Business Forward.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                Connect transport operations, shipment information,
                warehouse workflows and business systems with modern
                technology. OPV AI Realty Tech helps logistics
                organisations explore software, AI and automation
                solutions aligned with their requirements.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your Logistics Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#logistics-solutions"
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

            {/* LOGISTICS TECHNOLOGY VISUAL */}
            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-6 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">
              <div className="flex items-center justify-between gap-4 border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Logistics Technology
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold">
                    Connected Supply Chain
                  </h2>
                </div>
                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Truck className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-[#075B3B]/15 bg-[#F0F6F1] p-5">
                <div className="rounded-xl bg-white p-3 text-[#075B3B]">
                  <Route className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-extrabold">
                    Logistics Operations Platform
                  </h3>
                  <p className="mt-1 text-sm text-[#526577]">
                    Connected transport and business workflows
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    icon: Truck,
                    title: "Fleet",
                    description: "Vehicle and transport records",
                  },
                  {
                    icon: Route,
                    title: "Shipments",
                    description: "Delivery and order information",
                  },
                  {
                    icon: Warehouse,
                    title: "Warehousing",
                    description: "Inventory and stock coordination",
                  },
                  {
                    icon: Bot,
                    title: "AI & Automation",
                    description: "Intelligent business workflows",
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
              The Future of Logistics
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Digital Technology for Connected Supply Chain Operations
            </h2>
            <p className="mt-6 leading-8 text-[#526577]">
              Logistics businesses coordinate transport, shipments,
              warehouses, suppliers, customers and operational
              information. Connected applications can help organise
              these activities and make business information easier
              to access.
            </p>
            <p className="mt-4 leading-8 text-[#526577]">
              The right technology approach starts with understanding
              your workflows and identifying practical opportunities
              for improvement.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="logistics-solutions"
        className="scroll-mt-24 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Logistics & Supply Chain Technology Solutions
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Explore software, AI, automation and data capabilities
              for transport businesses, warehouses, delivery companies
              and supply chain organisations.
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
              Technology for Different Logistics Businesses
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Each logistics business has different transport models,
              fulfilment processes, customer needs and operational
              requirements. Technology should reflect those differences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map((business) => (
              <article
                key={business.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition hover:border-[#075B3B]/30 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Truck className="h-7 w-7" />
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

      {/* SUPPLY CHAIN JOURNEY */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Connected Operations
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Connect the Supply Chain Information Journey
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Digital systems can help coordinate information across
              planning, transport, warehousing and business reporting.
            </p>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journeyStages.map((stage) => {
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

      {/* CAPABILITIES */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Technology Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              A Connected Digital Toolkit for Logistics Businesses
            </h2>
            <p className="mt-6 leading-8 text-[#526577]">
              From shipment applications to inventory systems and
              operational analytics, we help identify suitable
              technology capabilities for your logistics requirements.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#075B3B] hover:underline"
            >
              Discuss Your Logistics Requirements
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
              Technology That Supports Logistics Growth
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Connected business systems can help logistics organisations
              coordinate activities, organise information and understand
              operational performance.
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
              From Logistics Challenges to Digital Solutions
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              A structured process helps align technology decisions
              with transport operations, supply chain workflows and
              business goals.
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
              Logistics Technology FAQs
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Common questions about fleet software, shipment tracking,
              warehouse systems, AI and integration.
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
            Connect logistics technology with AI automation, business
            systems and data intelligence.
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
            Ready to Modernise Your Logistics Business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Tell us about your transport operations, warehouse processes,
            shipment workflows or technology requirements. Explore how
            software, AI and connected systems can support your business.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your Logistics Project
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
