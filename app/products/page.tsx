import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Products | OPV AI Realty Tech Private Limited",
  description:
    "Explore OPV AI Realty Tech products and digital platforms, including Open Plots & Villas, Aarna GrowthOS, AI Sales Agents and Business Automation Systems.",
  alternates: {
    canonical: "https://www.opvairealtytech.com/products",
  },
  openGraph: {
    title: "Our Products | OPV AI Realty Tech",
    description:
      "Discover technology products and intelligent business platforms from OPV AI Realty Tech.",
    url: "https://www.opvairealtytech.com/products",
    siteName: "OPV AI Realty Tech",
    type: "website",
  },
};

const products = [
  {
    number: "01",
    name: "Open Plots & Villas",
    category: "Real Estate Technology",
    description:
      "A real estate-focused digital platform designed to connect property discovery, digital experiences and technology-driven property workflows.",
    icon: Building2,
    color: "from-green-700 to-emerald-500",
    features: [
      "Digital property discovery",
      "Property listing experiences",
      "Real estate-focused digital solutions",
      "Web and mobile platform experiences",
    ],
    href: "https://openplotsandvillas.com",
    external: true,
    label: "Explore Platform",
  },
  {
    number: "02",
    name: "Aarna GrowthOS",
    category: "Business Growth Platform",
    description:
      "A business growth platform concept focused on bringing digital operations, growth activities and technology-enabled workflows together.",
    icon: ChartNoAxesCombined,
    color: "from-amber-600 to-yellow-400",
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
    description:
      "AI-powered sales assistance solutions designed to support customer interactions, lead engagement and sales-related workflows.",
    icon: BrainCircuit,
    color: "from-blue-700 to-cyan-500",
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
    description:
      "Technology solutions designed to help businesses streamline repetitive processes, organize operations and improve workflow efficiency.",
    icon: Workflow,
    color: "from-purple-700 to-indigo-500",
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

const faqs = [
  {
    question: "What products does OPV AI Realty Tech offer?",
    answer:
      "OPV AI Realty Tech showcases Open Plots & Villas, Aarna GrowthOS, AI Sales Agents and Business Automation Systems.",
  },
  {
    question: "What is Open Plots & Villas?",
    answer:
      "Open Plots & Villas is a real estate-focused digital platform designed around property discovery and digital property experiences.",
  },
  {
    question: "What is Aarna GrowthOS?",
    answer:
      "Aarna GrowthOS is a business growth platform concept focused on digital operations, business workflows and technology-enabled growth activities.",
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

export default function ProductsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#111111]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#033505] px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#E7B30F]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E7B30F]/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F4D545]">
            <Zap size={14} />
            Our Products & Platforms
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Technology Products
            <span className="block text-[#F4D545]">
              Built for Business Growth
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Discover digital platforms and intelligent technology solutions
            from OPV AI Realty Tech. We bring together AI, software engineering
            and business-focused innovation to support modern organizations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#our-products"
              className="inline-flex items-center gap-2 rounded-xl bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Explore Products <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#033505]"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#265921]">
              Innovation in Action
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              One Technology Vision.
              <span className="block text-[#265921]">
                Multiple Digital Solutions.
              </span>
            </h2>
          </div>

          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            Our product ecosystem brings together real estate technology,
            business growth platforms, AI-assisted sales solutions and
            intelligent automation systems. Each product represents our
            approach to solving business challenges through practical digital
            technology.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="our-products"
        className="scroll-mt-20 bg-[#F7F9F5] px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#265921]">
              Product Ecosystem
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Explore Our Products
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Digital platforms and technology solutions designed around
              evolving business needs.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <article
                  key={product.number}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`relative overflow-hidden bg-gradient-to-br ${product.color} p-8 text-white sm:p-10`}
                  >
                    <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-white/15" />
                    <div className="absolute -bottom-20 right-20 h-48 w-48 rounded-full border border-white/10" />

                    <div className="relative flex items-center justify-between">
                      <span className="text-sm font-bold tracking-widest text-white/70">
                        PRODUCT {product.number}
                      </span>

                      <div className="rounded-2xl border border-white/20 bg-white/15 p-3">
                        <Icon size={30} />
                      </div>
                    </div>

                    <p className="relative mt-12 text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                      {product.category}
                    </p>

                    <h3 className="relative mt-3 text-3xl font-black sm:text-4xl">
                      {product.name}
                    </h3>
                  </div>

                  <div className="p-8 sm:p-10">
                    <p className="leading-8 text-slate-600">
                      {product.description}
                    </p>

                    <div className="mt-7">
                      <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#033505]">
                        Key Focus Areas
                      </h4>

                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {product.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E7B30F]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {product.external ? (
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 font-bold text-[#265921] transition group-hover:gap-3"
                      >
                        {product.label} <ArrowRight size={18} />
                      </a>
                    ) : (
                      <Link
                        href={product.href}
                        className="mt-8 inline-flex items-center gap-2 font-bold text-[#265921] transition group-hover:gap-3"
                      >
                        {product.label} <ArrowRight size={18} />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY FOUNDATION */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#265921]">
              Technology Foundation
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Technology Behind Our Solutions
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our technology capabilities support the development and evolution
              of digital products, business platforms and intelligent systems.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-[#265921]/40 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-[#033505]/10 p-3 text-[#265921]">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-lg font-extrabold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY OUR PRODUCTS */}
      <section className="bg-[#033505] px-5 py-20 text-white sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F4D545]">
              Our Approach
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
              Designed Around Real Business Needs
            </h2>

            <p className="mt-6 leading-8 text-white/70">
              We focus on understanding business requirements before shaping
              technology solutions. Our approach combines software
              engineering, AI, automation and digital experiences to address
              practical operational challenges.
            </p>

            <Link
              href="/services"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Explore Our Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Business-focused thinking",
              "Scalable technology approach",
              "AI-enabled innovation",
              "Connected digital experiences",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/15 bg-white/[0.06] p-6"
              >
                <span className="text-3xl font-black text-[#F4D545]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-bold leading-7">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#265921]">
              FAQs
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Products – Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-[#111111]">
                  {faq.question}
                  <span className="text-2xl text-[#265921] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#F4D545] px-7 py-14 text-center sm:px-14 sm:py-20">
          <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight text-[#033505] sm:text-5xl">
            Have a Business Idea or Product Requirement?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#033505]/75">
            Let us discuss how OPV AI Realty Tech can help shape your next
            digital product or technology solution.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#033505] px-8 py-4 font-bold text-white transition hover:bg-[#265921]"
          >
            Talk to Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}