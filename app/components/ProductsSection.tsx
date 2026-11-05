
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  BrainCircuit,
  Layers3,
  Workflow,
  Bot,
  Database,
  Globe2,
  Sparkles,
  Code2,
} from "lucide-react";

const products = [
  {
    number: "01",
    category: "REAL ESTATE TECHNOLOGY",
    title: "Open Plots & Villas",
    subtitle: "AI-Powered Real Estate Discovery Portal",
    description:
      "A digital real estate discovery destination designed to connect property seekers with plots, villas and other real estate opportunities.",
    icon: Building2,
    status: "Live Platform",
    statusType: "live",
    features: [
      "Property Discovery",
      "Property Listings",
      "Buyer & Seller Connections",
      "Real Estate Digital Experience",
    ],
    href: "https://www.openplotsandvillas.com",
    external: true,
    accent: "emerald",
  },
  {
    number: "02",
    category: "BUSINESS GROWTH TECHNOLOGY",
    title: "AARNA GrowthOS",
    subtitle: "Real Estate Business & Growth Management Concept",
    description:
      "A proposed integrated business management ecosystem bringing CRM, lead management, sales workflows and business intelligence together.",
    icon: Layers3,
    status: "Product Initiative",
    statusType: "planned",
    features: [
      "Lead & CRM Management",
      "Sales Workflow Management",
      "Channel Partner Management",
      "Business Analytics",
    ],
    href: "/contact",
    external: false,
    accent: "blue",
  },
  {
    number: "03",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "OPV AI Solutions",
    subtitle: "Intelligent AI & Business Automation",
    description:
      "Custom AI-enabled business solutions designed to support customer interactions, lead qualification, knowledge assistance and operational workflows.",
    icon: BrainCircuit,
    status: "Custom Solutions",
    statusType: "custom",
    features: [
      "AI Voice & Chat Agents",
      "Intelligent Lead Qualification",
      "AI Business Assistants",
      "Workflow Automation",
    ],
    href: "/contact",
    external: false,
    accent: "amber",
  },
];

const accentStyles = {
  emerald: {
    icon: "bg-emerald-100 text-emerald-700",
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
    highlight: "text-emerald-700",
    background: "from-[#103c32] to-[#102c38]",
  },
  blue: {
    icon: "bg-blue-100 text-blue-700",
    badge: "border-blue-200 bg-blue-50 text-blue-700",
    highlight: "text-blue-700",
    background: "from-[#182e48] to-[#111f35]",
  },
  amber: {
    icon: "bg-amber-100 text-amber-700",
    badge: "border-amber-200 bg-amber-50 text-amber-700",
    highlight: "text-amber-700",
    background: "from-[#382c20] to-[#172238]",
  },
};

export default function ProductsSection() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="scroll-mt-24 overflow-hidden bg-[#071525] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION INTRO */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2">
            <Sparkles className="h-4 w-4 text-emerald-300" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-300">
              The OPV Technology Ecosystem
            </span>
          </div>

          <h2
            id="products-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Products & Platforms.
            <span className="mt-2 block text-emerald-300">
              Built for Real Business.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
            Beyond technology services, we develop digital
            products, business platforms and intelligent
            solutions designed to address real-world
            industry and operational challenges.
          </p>

        </div>

        {/* PRODUCT CARDS */}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {products.map((product) => {
            const Icon = product.icon;
            const style = accentStyles[
              product.accent as keyof typeof accentStyles
            ];

            return (
              <article
                key={product.number}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#102033] transition duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:shadow-2xl hover:shadow-black/20"
              >

                {/* CARD VISUAL */}

                <div
                  className={`relative flex min-h-[190px] items-center justify-center overflow-hidden bg-gradient-to-br ${style.background} p-7`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute h-40 w-40 rounded-full border border-white/[0.08]"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute h-56 w-56 rounded-full border border-dashed border-white/[0.07]"
                  />

                  <div className="absolute left-6 top-5 text-[10px] font-bold tracking-[0.2em] text-white/50">
                    OPV / {product.number}
                  </div>

                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/20 bg-white/[0.08] shadow-2xl backdrop-blur-xl transition duration-500 group-hover:scale-110">
                    <Icon className="h-12 w-12 text-white" strokeWidth={1.4} />
                  </div>

                  <div className="absolute bottom-5 right-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-white/50">
                    <Globe2 className="h-3.5 w-3.5" />
                    OPV ECOSYSTEM
                  </div>
                </div>

                {/* CARD CONTENT */}

                <div className="flex flex-1 flex-col p-7">

                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <span className="text-[9px] font-extrabold tracking-[0.15em] text-emerald-300">
                      {product.category}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[9px] font-semibold text-slate-300">
                      {product.status}
                    </span>

                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold text-white">
                    {product.title}
                  </h3>

                  <p className={`mt-2 text-xs font-semibold ${style.highlight}`}>
                    {product.subtitle}
                  </p>

                  <p className="mt-5 min-h-[105px] text-sm leading-7 text-slate-400">
                    {product.description}
                  </p>

                  {/* FEATURES */}

                  <div className="mt-6 space-y-3 border-t border-white/10 pt-6">

                    <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.17em] text-slate-500">
                      Key Capabilities
                    </p>

                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5"
                      >
                        <span className="mt-0.5 text-emerald-300">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>

                        <span className="text-xs text-slate-300">
                          {feature}
                        </span>
                      </div>
                    ))}

                  </div>

                  {/* CTA */}

                  <div className="mt-auto pt-8">

                    <Link
                      href={product.href}
                      target={product.external ? "_blank" : undefined}
                      rel={
                        product.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`group/link inline-flex w-full items-center justify-center gap-3 rounded-xl px-5 py-3.5 text-xs font-bold transition duration-300 ${
                        product.accent === "emerald"
                          ? "bg-emerald-300 text-[#06111f] hover:bg-emerald-200"
                          : "border border-white/15 bg-white/[0.04] text-white hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-300"
                      }`}
                    >
                      {product.external
                        ? "Visit Platform"
                        : "Enquire About Solutions"}

                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </Link>

                  </div>

                </div>
              </article>
            );
          })}

        </div>

        {/* FUTURE PRODUCT ECOSYSTEM */}

        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-[#102437] to-[#102c2d] p-7 sm:p-10">

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

            <div>
              <div className="flex items-center gap-2 text-emerald-300">
                <Sparkles className="h-4 w-4" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">
                  Continuous Innovation
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                Building the Next Generation
                <span className="text-emerald-300">
                  {" "}of Digital Products.
                </span>
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                Our product vision extends across industry-specific
                SaaS, intelligent business systems, AI agents and
                connected digital platforms.
              </p>
            </div>

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300">
              <BrainCircuit className="h-10 w-10" />
            </div>

          </div>
        </div>

        {/* FINAL CTA */}

        <div className="mt-14 text-center">

          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-300">
            Your Idea. Our Technology.
          </p>

          <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
            Have an Idea for Your Own Digital Product?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Let's explore how we can help you design,
            develop and launch your next digital product.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-300 px-7 py-4 text-sm font-extrabold text-[#06111f] transition hover:-translate-y-1 hover:bg-emerald-200"
          >
            Build Your Product With OPV

            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

      </div>
    </section>
  );
}
