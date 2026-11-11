
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  BrainCircuit,
  Layers3,
  Globe2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const products = [
  {
    number: "01",
    category: "REAL ESTATE TECHNOLOGY",
    title: "Open Plots & Villas",
    subtitle: "AI-Powered Real Estate Discovery Portal",
    description:
      "An AI-powered real estate discovery platform connecting property buyers, sellers, owners, builders and developers. The portal brings property listings, digital discovery and buyer-seller connections into one experience.",
    icon: Building2,
    status: "Live Platform",
    features: [
      "AI-Powered Property Discovery",
      "Property Listings & Search",
      "Buyer & Seller Connections",
      "Real Estate Digital Experience",
    ],
    href: "https://www.openplotsandvillas.com",
    external: true,
  },
  {
    number: "02",
    category: "BUSINESS GROWTH TECHNOLOGY",
    title: "AARNA GrowthOS",
    subtitle: "Real Estate CRM & Business Management",
    description:
      "A real estate business management initiative combining CRM software, lead management, sales workflows, channel partner management and business intelligence for connected operations.",
    icon: Layers3,
    status: "Product Initiative",
    features: [
      "Real Estate CRM & Lead Management",
      "Sales Workflow Automation",
      "Channel Partner Management",
      "Business Analytics & Reporting",
    ],
    href: "/contact",
    external: false,
  },
  {
    number: "03",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "OPV AI Solutions",
    subtitle: "AI Agents, Chatbots & Business Automation",
    description:
      "Custom AI development and intelligent automation solutions for businesses, including AI voice agents, chatbot development, lead qualification, AI assistants and workflow automation.",
    icon: BrainCircuit,
    status: "Custom Solutions",
    features: [
      "AI Voice & Chat Agents",
      "Intelligent Lead Qualification",
      "AI Business Assistants",
      "Workflow & WhatsApp Automation",
    ],
    href: "/contact",
    external: false,
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="scroll-mt-24 overflow-hidden bg-[#F8F6F0] py-20 text-[#263C50] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION INTRO */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2">
            <Sparkles className="h-4 w-4 text-[#075B3B]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              The OPV Technology Ecosystem
            </span>
          </div>

          <h2
            id="products-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#263C50] sm:text-4xl lg:text-5xl"
          >
            Products &amp; Platforms.
            <span className="mt-2 block text-[#075B3B]">
              Built for Real Business.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#526577] sm:text-base">
            Beyond technology services, OPV AI Realty Tech
            develops digital products, SaaS platforms,
            AI-powered business solutions and intelligent
            management systems designed to address
            real-world industry and operational challenges.
          </p>
        </div>

        {/* PRODUCT CARDS */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {products.map((product) => {
            const Icon = product.icon;

            return (
              <article
                key={product.number}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#E5E9E3] bg-white shadow-[0_10px_35px_rgba(38,60,80,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-[0_20px_55px_rgba(38,60,80,0.10)]"
              >

                {/* CARD VISUAL */}
                <div className="relative flex min-h-[190px] items-center justify-center overflow-hidden border-b border-[#E5E9E3] bg-[#F1F5F0] p-7">

                  <div
                    aria-hidden="true"
                    className="absolute h-40 w-40 rounded-full border border-[#075B3B]/10"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute h-56 w-56 rounded-full border border-dashed border-[#C6A052]/25"
                  />

                  <div className="absolute left-6 top-5 text-[10px] font-bold tracking-[0.2em] text-[#647586]">
                    OPV / {product.number}
                  </div>

                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[28px] border border-[#075B3B]/15 bg-white shadow-[0_12px_35px_rgba(7,91,59,0.08)] transition duration-500 group-hover:scale-110">
                    <Icon
                      className="h-12 w-12 text-[#075B3B]"
                      strokeWidth={1.4}
                    />
                  </div>

                  <div className="absolute bottom-5 right-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-[#647586]">
                    <Globe2 className="h-3.5 w-3.5 text-[#075B3B]" />
                    OPV ECOSYSTEM
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="flex flex-1 flex-col p-7">

                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <span className="text-[9px] font-extrabold tracking-[0.15em] text-[#075B3B]">
                      {product.category}
                    </span>

                    <span className="rounded-full border border-[#E5E9E3] bg-[#F8F6F0] px-3 py-1.5 text-[9px] font-semibold text-[#526577]">
                      {product.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold text-[#263C50]">
                    {product.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold text-[#075B3B]">
                    {product.subtitle}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#526577]">
                    {product.description}
                  </p>

                  {/* FEATURES */}
                  <div className="mt-6 space-y-3 border-t border-[#E8EAE5] pt-6">

                    <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.17em] text-[#647586]">
                      Key Capabilities
                    </p>

                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#075B3B]" />

                        <span className="text-xs leading-6 text-[#526577]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-8">

                    <Link
                      href={product.href}
                      target={
                        product.external
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        product.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={
                        product.external
                          ? "group/link inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#075B3B] px-5 py-3.5 text-xs font-bold text-white transition hover:bg-[#06472F]"
                          : "group/link inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[#075B3B]/20 bg-[#F8F6F0] px-5 py-3.5 text-xs font-bold text-[#075B3B] transition hover:border-[#075B3B] hover:bg-[#075B3B] hover:text-white"
                      }
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
        <div className="mt-12 rounded-3xl border border-[#E5E9E3] bg-white p-7 shadow-sm sm:p-10">

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

            <div>
              <div className="flex items-center gap-2 text-[#075B3B]">
                <Sparkles className="h-4 w-4" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">
                  Continuous Innovation
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-[#263C50] sm:text-3xl">
                Building the Next Generation
                <span className="text-[#075B3B]">
                  {" "}of Digital Products.
                </span>
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#526577]">
                Our product vision extends across
                industry-specific SaaS development,
                custom CRM and ERP systems, AI agents,
                intelligent workflow automation and
                connected digital platforms for
                businesses in Hyderabad and across India.
              </p>
            </div>

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-[#075B3B]/15 bg-[#F0F6F1] text-[#075B3B]">
              <BrainCircuit className="h-10 w-10" />
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-14 text-center">

          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#075B3B]">
            Your Idea. Our Technology.
          </p>

          <h3 className="mt-4 text-2xl font-extrabold text-[#263C50] sm:text-3xl">
            Have an Idea for Your Own Digital Product?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#526577]">
            Let&apos;s explore how we can help you
            design, develop and launch your next
            AI-powered application, SaaS product
            or business technology platform.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#075B3B] px-7 py-4 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(7,91,59,0.12)] transition hover:-translate-y-1 hover:bg-[#06472F]"
          >
            Build Your Product With OPV

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
