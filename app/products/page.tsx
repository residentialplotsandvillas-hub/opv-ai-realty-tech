
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  BrainCircuit,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  Database,
  MessageSquareText,
  ShieldCheck,
  Workflow,
  Zap,
  CheckCircle2,
  Layers3,
} from "lucide-react";

// ==========================================
// SEO METADATA
// ==========================================

export const metadata: Metadata = {
  title: {
    absolute: "Our Products | OPV AI Realty Tech Private Limited",
  },
  description:
    "Explore OPV AI Realty Tech products and digital platforms, including Open Plots & Villas, Aarna GrowthOS, AI Sales Agents and Business Automation Systems.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Our Products | OPV AI Realty Tech",
    description:
      "Discover technology products and intelligent business platforms from OPV AI Realty Tech.",
    url: "/products",
    siteName: "OPV AI Realty Tech",
    type: "website",
  },
};

// ==========================================
// PRODUCT DATA
// ==========================================

const products = [
  {
    number: "01",
    name: "Open Plots & Villas",
    category: "Real Estate Technology",
    status: "Live Platform",
    description:
      "An AI-powered real estate discovery platform connecting property seekers, owners, builders, developers and property professionals through digital property experiences.",
    icon: Building2,
    features: [
      "Digital property discovery",
      "Property listing experiences",
      "AI-assisted real estate solutions",
      "Web and mobile platform experiences",
    ],
    href: "https://www.openplotsandvillas.com",
    external: true,
    label: "Explore Live Platform",
  },
  {
    number: "02",
    name: "Aarna GrowthOS",
    category: "Business Growth Platform",
    status: "Product Initiative",
    description:
      "A business growth and operations platform initiative focused on connecting digital workflows, operational activities and technology-enabled business management.",
    icon: ChartNoAxesCombined,
    features: [
      "Digital business workflows",
      "Growth-oriented technology",
      "Business process integration",
      "Technology-enabled operations",
    ],
    href: "/contact",
    external: false,
    label: "Enquire About GrowthOS",
  },
  {
    number: "03",
    name: "AI Sales Agents",
    category: "Artificial Intelligence",
    status: "AI Solutions",
    description:
      "AI-powered sales assistance solutions designed to support customer interactions, lead engagement and sales-related business workflows.",
    icon: BrainCircuit,
    features: [
      "AI-assisted customer interactions",
      "Lead engagement workflows",
      "Sales process support",
      "Business communication assistance",
    ],
    href: "/contact",
    external: false,
    label: "Explore AI Solutions",
  },
  {
    number: "04",
    name: "Business Automation Systems",
    category: "Business Technology",
    status: "Automation Solutions",
    description:
      "Technology solutions designed to help businesses streamline repetitive processes, organize operations and improve workflow efficiency.",
    icon: Workflow,
    features: [
      "Workflow automation",
      "Business process digitization",
      "System integration",
      "Operational workflow management",
    ],
    href: "/contact",
    external: false,
    label: "Discuss Your Requirements",
  },
];

// ==========================================
// TECHNOLOGY CAPABILITIES
// ==========================================

const capabilities = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Custom digital platforms and software solutions built around business requirements.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Intelligent Automation",
    description:
      "Artificial intelligence and automation concepts for modern business workflows.",
  },
  {
    icon: Database,
    title: "Data & Business Intelligence",
    description:
      "Technology foundations for organizing business data and supporting better decisions.",
  },
  {
    icon: Cloud,
    title: "Cloud & SaaS",
    description:
      "Cloud-oriented architectures and scalable software product development.",
  },
  {
    icon: MessageSquareText,
    title: "Customer Engagement",
    description:
      "Digital experiences and technology-assisted customer communication.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Technology",
    description:
      "Security-conscious development practices for business technology systems.",
  },
];

// ==========================================
// BUSINESS PRINCIPLES
// ==========================================

const principles = [
  "Business-focused thinking",
  "Scalable technology approach",
  "AI-enabled innovation",
  "Connected digital experiences",
];

// ==========================================
// FAQ DATA
// ==========================================

const faqs = [
  {
    question: "What products does OPV AI Realty Tech offer?",
    answer:
      "OPV AI Realty Tech showcases Open Plots & Villas, Aarna GrowthOS, AI Sales Agents and Business Automation Systems.",
  },
  {
    question: "What is Open Plots & Villas?",
    answer:
      "Open Plots & Villas is an AI-powered real estate discovery platform designed around property search, listings and digital property experiences.",
  },
  {
    question: "What is Aarna GrowthOS?",
    answer:
      "Aarna GrowthOS is a business growth platform initiative focused on digital operations, business workflows and technology-enabled growth activities.",
  },
  {
    question: "Can OPV develop custom technology products?",
    answer:
      "Yes. OPV AI Realty Tech provides software development, AI, automation and digital technology services based on business requirements.",
  },
  {
    question: "How can I enquire about an OPV product?",
    answer:
      "You can contact the OPV team through the website contact page to discuss product information and business requirements.",
  },
];

// ==========================================
// FAQ STRUCTURED DATA
// ==========================================

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// ==========================================
// PRODUCTS PAGE
// ==========================================

export default function ProductsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#263C50]">

      {/* STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* ======================================
          01 — HERO SECTION
      ====================================== */}

      <section className="relative overflow-hidden border-b border-[#E5E9E3] bg-[#F8F6F0]">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-10 sm:pb-24 lg:pt-28">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#075B3B]">
            <Zap className="h-4 w-4" />
            Our Products &amp; Platforms
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight text-[#263C50] sm:text-5xl lg:text-6xl">
            Technology Products
            <span className="block text-[#075B3B]">
              Built for Business Growth.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#526577] sm:text-lg">
            Discover digital platforms and intelligent
            technology solutions from OPV AI Realty Tech.
            We bring together AI, software engineering
            and business-focused innovation to support
            modern organizations.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#our-products"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:border-[#075B3B] hover:bg-[#F0F6F1]"
            >
              Contact Our Team
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* PRODUCT CATEGORY HIGHLIGHTS */}

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[#E5E9E3] pt-8 sm:grid-cols-4">
            {[
              ["01", "Live Platform"],
              ["AI", "Intelligent Solutions"],
              ["SaaS", "Business Technology"],
              ["360°", "Digital Capabilities"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl font-extrabold text-[#075B3B]">
                  {value}
                </p>

                <p className="mt-2 text-xs text-[#647586]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          02 — INTRODUCTION
      ====================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              Innovation in Action
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#263C50] sm:text-4xl">
              One Technology Vision.
              <span className="block text-[#075B3B]">
                Multiple Digital Solutions.
              </span>
            </h2>
          </div>

          <p className="text-sm leading-8 text-[#526577] sm:text-base">
            Our product ecosystem brings together real
            estate technology, business growth platforms,
            AI-assisted sales solutions and intelligent
            automation systems. Each offering reflects
            our approach to solving business challenges
            through practical digital technology.
          </p>
        </div>
      </section>

      {/* ======================================
          03 — PRODUCTS GRID
      ====================================== */}

      <section
        id="our-products"
        className="scroll-mt-28 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              Product Ecosystem
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#263C50] sm:text-4xl">
              Explore Our Products
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Digital platforms and technology solutions
              designed around evolving business needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <article
                  key={product.number}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E5E9E3] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/25 hover:shadow-[0_18px_45px_rgba(38,60,80,0.07)]"
                >
                  {/* PRODUCT HEADER */}

                  <div className="border-b border-[#E5E9E3] bg-white p-7 sm:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F6F1] text-[#075B3B] transition group-hover:bg-[#075B3B] group-hover:text-white">
                        <Icon className="h-7 w-7" />
                      </div>

                      <span className="text-2xl font-extrabold text-[#C6A052]">
                        {product.number}
                      </span>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#075B3B]">
                        {product.category}
                      </span>

                      <span className="rounded-full border border-[#E5E9E3] bg-[#F8F6F0] px-3 py-1 text-[11px] font-semibold text-[#526577]">
                        {product.status}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#263C50] sm:text-3xl">
                      {product.name}
                    </h3>
                  </div>

                  {/* PRODUCT DETAILS */}

                  <div className="flex flex-1 flex-col p-7 sm:p-9">
                    <p className="text-sm leading-8 text-[#526577]">
                      {product.description}
                    </p>

                    <div className="mt-7">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#263C50]">
                        Key Focus Areas
                      </h4>

                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {product.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm leading-6 text-[#526577]"
                          >
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#075B3B]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-8">
                      {product.external ? (
                        <a
                          href={product.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#075B3B] transition group-hover:gap-3"
                        >
                          {product.label}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ) : (
                        <Link
                          href={product.href}
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#075B3B] transition group-hover:gap-3"
                        >
                          {product.label}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================
          04 — TECHNOLOGY FOUNDATION
      ====================================== */}

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              Technology Foundation
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#263C50] sm:text-4xl">
              Technology Behind Our Solutions
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Our technology capabilities support
              the development and evolution of
              digital products, business platforms
              and intelligent systems.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition hover:border-[#075B3B]/30 hover:shadow-[0_10px_30px_rgba(38,60,80,0.05)]"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#263C50]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#526577]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================
          05 — BUSINESS APPROACH
      ====================================== */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              Our Approach
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#263C50] sm:text-4xl">
              Designed Around
              <span className="block text-[#075B3B]">
                Real Business Needs.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              We focus on understanding business
              requirements before shaping technology
              solutions. Our approach combines
              software engineering, AI, automation
              and digital experiences to address
              practical operational challenges.
            </p>

            <Link
              href="/services"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item, index) => (
              <article
                key={item}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0F6F1] text-[#075B3B]">
                  <Layers3 className="h-5 w-5" />
                </div>

                <span className="mt-5 block text-sm font-extrabold text-[#C6A052]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-base font-extrabold leading-7 text-[#263C50]">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          06 — FREQUENTLY ASKED QUESTIONS
      ====================================== */}

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">

          <div className="mb-12 text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#263C50] sm:text-4xl">
              Questions About Our Products
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#E5E9E3] bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold text-[#263C50] sm:text-base">
                  {faq.question}

                  <span
                    aria-hidden="true"
                    className="text-2xl text-[#075B3B] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-7 text-[#526577]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          07 — FINAL CTA
      ====================================== */}

      <section className="bg-white px-6 pb-24 sm:px-10">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] px-7 py-14 text-center sm:px-14 sm:py-16">

          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-[#263C50] sm:text-4xl">
            Have a Business Idea or
            <span className="block text-[#075B3B]">
              Product Requirement?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#526577]">
            Let us discuss how OPV AI Realty Tech
            can help shape your next digital
            product or technology solution.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
          >
            Talk to Our Team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
