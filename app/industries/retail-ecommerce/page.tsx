
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Headphones,
  MapPin,
  Package,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Target,
  Truck,
  Users,
  Workflow,
} from "lucide-react";

// ==========================================
// SEO CONFIGURATION
// ==========================================

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_URL = `${SITE_URL}/industries/retail-ecommerce`;

const PAGE_TITLE =
  "Retail & E-commerce Technology Solutions in Hyderabad | OPV AI";

const PAGE_DESCRIPTION =
  "Retail and e-commerce technology solutions in Hyderabad. Online store development, mobile apps, retail CRM, inventory systems, AI automation, SEO and analytics by OPV AI Realty Tech.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Retail technology solutions Hyderabad",
    "E-commerce website development Hyderabad",
    "Online store development",
    "Retail software development",
    "Retail CRM software",
    "Inventory management software",
    "Order management systems",
    "AI shopping assistant",
    "E-commerce mobile app development",
    "Retail automation",
    "E-commerce SEO Hyderabad",
    "Retail analytics dashboards",
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
    icon: ShoppingCart,
    title: "E-commerce Website Development",
    description:
      "Build online stores and digital commerce platforms with product catalogues, shopping experiences and customer-focused interfaces.",
  },
  {
    icon: Smartphone,
    title: "Retail Mobile Applications",
    description:
      "Create mobile shopping experiences, customer applications and digital tools for retail businesses.",
  },
  {
    icon: Bot,
    title: "AI & Intelligent Automation",
    description:
      "Explore AI shopping assistants, automated customer support, product recommendations and business workflows.",
  },
  {
    icon: Package,
    title: "Inventory & Order Management",
    description:
      "Plan systems for product records, inventory visibility, order processing and fulfilment coordination.",
  },
  {
    icon: Users,
    title: "Retail CRM & Customer Engagement",
    description:
      "Organise customer records, enquiries, purchasing interactions and customer relationship activities.",
  },
  {
    icon: Target,
    title: "Digital Marketing & Lead Generation",
    description:
      "Support online visibility, SEO, content strategy, digital campaigns and customer acquisition journeys.",
  },
  {
    icon: BarChart3,
    title: "Retail Analytics & Reporting",
    description:
      "Explore dashboards and reports for sales activity, inventory, customer behaviour and business performance.",
  },
  {
    icon: Workflow,
    title: "Retail Workflow Automation",
    description:
      "Connect suitable business processes across orders, notifications, customer service and operational activities.",
  },
];

// ==========================================
// BUSINESS TYPES
// ==========================================

const businessTypes = [
  {
    title: "Online Stores",
    description:
      "Digital storefronts, product catalogues, shopping journeys and e-commerce operations.",
  },
  {
    title: "Retail Store Chains",
    description:
      "Connected business systems, customer engagement and operational visibility across multiple locations.",
  },
  {
    title: "Direct-to-Consumer Brands",
    description:
      "Digital commerce experiences, customer acquisition and brand-owned online channels.",
  },
  {
    title: "Wholesale & Distribution",
    description:
      "Business applications for product catalogues, orders, customers and distribution workflows.",
  },
  {
    title: "Fashion & Lifestyle Businesses",
    description:
      "Digital product discovery, online shopping experiences and customer engagement solutions.",
  },
  {
    title: "Consumer Product Businesses",
    description:
      "Technology for product information, online sales, inventory and customer relationships.",
  },
];

// ==========================================
// CUSTOMER JOURNEY
// ==========================================

const customerJourney = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "Help customers explore products, services and relevant information.",
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "Purchase",
    description:
      "Create structured shopping, checkout and order experiences.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Fulfil",
    description:
      "Coordinate orders, inventory and fulfilment-related workflows.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Engage",
    description:
      "Support customer communication, service and ongoing relationships.",
  },
];

// ==========================================
// CAPABILITIES
// ==========================================

const capabilities = [
  "E-commerce website development",
  "Online store design and development",
  "Product catalogue management",
  "Shopping cart and checkout experiences",
  "Payment gateway integration",
  "Inventory and order management",
  "Customer relationship management",
  "AI shopping assistants",
  "Customer support automation",
  "Retail mobile applications",
  "SEO and digital marketing",
  "Sales and inventory dashboards",
];

// ==========================================
// BUSINESS OUTCOMES
// ==========================================

const benefits = [
  {
    title: "Better Online Shopping Experiences",
    description:
      "Create intuitive digital storefronts that help customers discover products and navigate the buying journey.",
  },
  {
    title: "Connected Retail Operations",
    description:
      "Coordinate relevant activities across online stores, inventory, orders and customer-facing systems.",
  },
  {
    title: "Stronger Customer Engagement",
    description:
      "Plan customer communication, service workflows and relationship management around business needs.",
  },
  {
    title: "Improved Business Visibility",
    description:
      "Use structured reporting and analytics to review sales, customer activity and operational information.",
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
      "Understand your retail model, products, customers and current technology environment.",
  },
  {
    number: "02",
    title: "Strategise",
    description:
      "Identify suitable digital commerce platforms, applications and automation opportunities.",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "Create the agreed websites, applications, integrations and business workflows.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "Connect relevant payment, inventory, customer and business systems.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review business requirements and identify opportunities to improve the digital experience.",
  },
];

// ==========================================
// FREQUENTLY ASKED QUESTIONS
// ==========================================

const faqs = [
  {
    question: "What are retail and e-commerce technology solutions?",
    answer:
      "Retail and e-commerce technology solutions include online stores, shopping applications, product catalogue management, inventory and order systems, CRM software, AI customer assistance, marketing automation and business analytics.",
  },
  {
    question:
      "Does OPV AI Realty Tech develop e-commerce websites in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad and offers e-commerce website development, retail applications, AI automation, CRM systems and digital growth solutions.",
  },
  {
    question: "Can you develop a custom online shopping website?",
    answer:
      "Custom online stores can be planned with product catalogues, search, shopping carts, checkout, payment integrations, customer accounts, order tracking and administrative tools according to project requirements.",
  },
  {
    question: "Can retail websites integrate payment gateways?",
    answer:
      "Payment gateway integrations can be included where supported by the selected payment provider, platform and business requirements. Merchant onboarding, charges and compliance conditions depend on the provider.",
  },
  {
    question: "Can AI assistants help online shoppers?",
    answer:
      "AI assistants can support product discovery, answer suitable customer questions, guide users through shopping journeys and help route service enquiries.",
  },
  {
    question: "Do you provide inventory and order management systems?",
    answer:
      "Inventory and order management solutions can be designed to organise product records, stock information, order processing and relevant fulfilment workflows.",
  },
  {
    question: "Can e-commerce websites be optimised for search engines?",
    answer:
      "E-commerce SEO can include technical optimisation, product and category page structure, metadata, structured data, content planning and search-friendly navigation.",
  },
  {
    question: "How much does e-commerce website development cost?",
    answer:
      "Development costs depend on the number of products, design requirements, checkout features, payment integrations, inventory systems, custom functionality, hosting and ongoing maintenance.",
  },
];

// ==========================================
// RELATED SOLUTIONS
// ==========================================

const relatedSolutions = [
  {
    title: "Web & Mobile Experiences",
    href: "/solutions/web-mobile-experiences",
  },
  {
    title: "CRM, ERP & Business Systems",
    href: "/solutions/crm-erp-business-systems",
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
      name: "Retail & E-commerce Technology Solutions",
      serviceType:
        "E-commerce Development, Retail Software, CRM, AI and Automation",
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
        name: "Retail Technology Services",
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
          name: "Retail & E-commerce",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// ==========================================
// MAIN PAGE
// ==========================================

export default function RetailEcommercePage() {
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
                Retail & E-commerce
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <ShoppingBag className="h-4 w-4" />
                Retail & E-commerce Technology
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                Retail & E-commerce
                <span className="block text-[#075B3B]">
                  Technology Solutions
                </span>
                <span className="mt-3 block text-2xl font-bold text-[#526577] sm:text-3xl">
                  In Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-[#526577]">
                Transform Retail. Accelerate Digital Commerce.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                Connect online shopping, customer engagement,
                inventory operations and business intelligence
                with modern technology. OPV AI Realty Tech
                helps retail businesses create connected
                digital experiences and smarter business workflows.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your Retail Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#retail-solutions"
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

            {/* COMMERCE VISUAL */}
            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-6 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">
              <div className="flex items-center justify-between gap-4 border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Digital Commerce
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold">
                    Connected Retail Ecosystem
                  </h2>
                </div>

                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <ShoppingBag className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-[#075B3B]/15 bg-[#F0F6F1] p-5">
                <div className="rounded-xl bg-white p-3 text-[#075B3B]">
                  <ShoppingCart className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="font-extrabold">
                    Connected Commerce Operations
                  </h3>

                  <p className="mt-1 text-sm text-[#526577]">
                    Technology across the customer journey
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    icon: ShoppingCart,
                    title: "Online Store",
                    description: "Digital shopping experiences",
                  },
                  {
                    icon: Package,
                    title: "Inventory",
                    description: "Product and stock management",
                  },
                  {
                    icon: Bot,
                    title: "AI Shopping",
                    description: "Intelligent customer assistance",
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics",
                    description: "Sales and business insights",
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

              <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#F0F6F1] p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#075B3B]" />

                <p className="text-sm font-medium leading-6">
                  Digital commerce solutions planned around your
                  business operations and customer needs
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
              The Future of Retail
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Build a More Connected Retail Business
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Modern retail combines physical and digital customer
              experiences. Businesses need suitable technology to
              manage products, customer relationships, orders,
              marketing and operational information.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              Connected applications and intelligent workflows
              can help bring these activities together around
              a consistent business experience.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="retail-solutions"
        className="scroll-mt-24 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Retail & E-commerce Technology Solutions
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Explore software, AI and automation capabilities
              designed around your retail business model
              and digital commerce needs.
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
              Technology for Different Retail Business Models
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Each retail model has different product, customer,
              sales and operational requirements. Technology
              should be designed with those differences in mind.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map((business) => (
              <article
                key={business.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition hover:border-[#075B3B]/30 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <ShoppingBag className="h-7 w-7" />
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

      {/* CUSTOMER JOURNEY */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Connected Customer Journey
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              From Product Discovery to Customer Relationship
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Digital commerce connects several stages of the
              customer experience. Suitable technology can
              help coordinate those stages more effectively.
            </p>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {customerJourney.map((stage) => {
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
              A Connected Digital Toolkit for Retail Businesses
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              From online storefronts to inventory applications
              and customer engagement systems, we help identify
              suitable technology capabilities for your requirements.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#075B3B] hover:underline"
            >
              Discuss Your Retail Requirements
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
              Technology That Supports Retail Growth
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              The right digital tools can help businesses improve
              customer experiences, coordinate operations and
              understand business performance.
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
              From Retail Challenges to Digital Solutions
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A structured process helps align technology decisions
              with your products, customers and retail operating model.
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
              Retail & E-commerce Technology FAQs
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Answers to common questions about e-commerce
              development, retail software, AI and automation.
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
            Connect your retail business with web and mobile
            development, intelligent automation and customer
            relationship systems.
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
            Ready to Transform Your Retail Business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Whether you operate an online store, retail chain,
            consumer brand or distribution business, explore
            how AI, software and connected technology can
            support your next stage of growth.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your Retail Project
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
