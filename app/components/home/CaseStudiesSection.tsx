
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  BrainCircuit,
  Layers3,
  Workflow,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Code2,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "REAL ESTATE TECHNOLOGY",
    title: "Open Plots & Villas",
    subtitle: "AI-Powered Real Estate Discovery Portal",
    description:
      "A digital real estate discovery platform connecting property seekers, owners, builders and developers through property listings, intelligent search and online real estate experiences.",
    icon: Building2,
    status: "Live Platform",
    capabilities: [
      "AI-Powered Property Discovery",
      "Property Listings & Search",
      "Buyer & Seller Connections",
      "Real Estate Technology",
    ],
    href: "https://www.openplotsandvillas.com",
    external: true,
  },
  {
    number: "02",
    category: "BUSINESS TECHNOLOGY",
    title: "AARNA GrowthOS",
    subtitle: "Real Estate Business & Growth Management",
    description:
      "A real estate business management initiative designed around CRM software, lead management, sales workflows, channel partner operations and business intelligence.",
    icon: Layers3,
    status: "Product Initiative",
    capabilities: [
      "Lead & CRM Management",
      "Sales Workflow Automation",
      "Channel Partner Systems",
      "Business Intelligence",
    ],
    href: "/#contact",
    external: false,
  },
  {
    number: "03",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "OPV AI Solutions",
    subtitle: "AI Agents, Chatbots & Business Automation",
    description:
      "Custom AI development capabilities supporting AI voice agents, chatbot development, intelligent lead qualification, AI business assistants and workflow automation.",
    icon: BrainCircuit,
    status: "Custom Solutions",
    capabilities: [
      "AI Voice & Chat Agents",
      "AI Business Assistants",
      "Intelligent Lead Qualification",
      "Workflow Automation",
    ],
    href: "/#contact",
    external: false,
  },
];

const expertise = [
  { icon: Code2, label: "Software" },
  { icon: BrainCircuit, label: "AI Solutions" },
  { icon: Layers3, label: "SaaS Products" },
  { icon: Workflow, label: "Automation" },
  { icon: Building2, label: "Industry Tech" },
  { icon: Sparkles, label: "Innovation" },
];

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="scroll-mt-24 overflow-hidden bg-[#F8F6F0] py-20 text-[#263C50] sm:py-8 lg:py-8"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#075B3B]" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
                Our Work &amp; Technology Initiatives
              </span>
            </div>

            <h2
              id="case-studies-heading"
              className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#263C50] sm:text-4xl lg:text-5xl"
            >
              From Ideas to
              <span className="block text-[#075B3B]">
                Digital Solutions.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-[#526577] sm:text-base">
              Explore our flagship digital platform,
              technology initiatives and AI solution
              capabilities. OPV AI Realty Tech combines
              business understanding, custom software
              development, SaaS, CRM, intelligent automation
              and digital engineering to build solutions
              for businesses in Hyderabad and across India.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#075B3B]/25 bg-white px-6 py-3.5 text-sm font-bold text-[#075B3B] transition hover:border-[#075B3B] hover:bg-[#F0F6F1]"
          >
            Discuss Your Project

            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* PROJECT CARDS */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#E5E9E3] bg-white shadow-[0_10px_35px_rgba(38,60,80,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-[0_20px_55px_rgba(38,60,80,0.10)]"
              >

                {/* PROJECT VISUAL */}
                <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden border-b border-[#E5E9E3] bg-[#F1F5F0]">

                  <div
                    aria-hidden="true"
                    className="absolute h-36 w-36 rounded-full border border-[#075B3B]/10"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute h-52 w-52 rounded-full border border-dashed border-[#C6A052]/25"
                  />

                  <span className="absolute left-6 top-5 text-[10px] font-bold tracking-[0.2em] text-[#647586]">
                    OPV / {project.number}
                  </span>

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-[28px] border border-[#075B3B]/15 bg-white shadow-[0_12px_35px_rgba(7,91,59,0.08)] transition duration-500 group-hover:scale-110">
                    <Icon
                      className="h-12 w-12 text-[#075B3B]"
                      strokeWidth={1.4}
                    />
                  </div>

                  <span className="absolute bottom-5 right-6 text-[9px] font-bold tracking-[0.16em] text-[#647586]">
                    TECHNOLOGY / INNOVATION
                  </span>
                </div>

                {/* PROJECT CONTENT */}
                <div className="flex flex-1 flex-col p-7">

                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <span className="text-[9px] font-extrabold tracking-[0.16em] text-[#075B3B]">
                      {project.category}
                    </span>

                    <span className="rounded-full border border-[#E5E9E3] bg-[#F8F6F0] px-3 py-1.5 text-[9px] font-bold text-[#526577]">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold text-[#263C50]">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold text-[#075B3B]">
                    {project.subtitle}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#526577]">
                    {project.description}
                  </p>

                  {/* CAPABILITIES */}
                  <div className="mt-6 border-t border-[#E8EAE5] pt-6">

                    <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#647586]">
                      Key Solution Areas
                    </p>

                    <div className="space-y-3">
                      {project.capabilities.map((capability) => (
                        <div
                          key={capability}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#075B3B]" />

                          <span className="text-xs leading-6 text-[#526577]">
                            {capability}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* PROJECT CTA */}
                  <div className="mt-auto pt-8">

                    <Link
                      href={project.href}
                      target={
                        project.external ? "_blank" : undefined
                      }
                      rel={
                        project.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group/link inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[#075B3B]/20 bg-[#F8F6F0] px-5 py-3.5 text-xs font-bold text-[#075B3B] transition hover:border-[#075B3B] hover:bg-[#075B3B] hover:text-white"
                    >
                      {project.external
                        ? "Explore Live Platform"
                        : "Discuss This Solution"}

                      {project.external ? (
                        <ExternalLink className="h-4 w-4" />
                      ) : (
                        <ArrowUpRight className="h-4 w-4" />
                      )}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* TECHNOLOGY EXPERTISE STRIP */}
        <div className="mt-12 rounded-3xl border border-[#E5E9E3] bg-white p-7 shadow-sm sm:p-9">

          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

            <div className="max-w-xl">

              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#075B3B]">
                Beyond Individual Products
              </p>

              <h3 className="mt-4 text-2xl font-extrabold text-[#263C50] sm:text-3xl">
                Custom Technology.
                <span className="block text-[#075B3B]">
                  Built Around Your Vision.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#526577]">
                Have a unique business idea or technology
                requirement? OPV AI Realty Tech can help
                explore the right custom software,
                AI development, SaaS, CRM, ERP
                and intelligent automation approach.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

              {expertise.map((item) => {
                const ItemIcon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] px-3 py-3"
                  >
                    <ItemIcon className="h-4 w-4 shrink-0 text-[#075B3B]" />

                    <span className="text-[10px] font-semibold text-[#526577]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-14 text-center">

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#075B3B]">
            Your Next Digital Innovation Starts Here
          </p>

          <h3 className="mt-4 text-2xl font-extrabold text-[#263C50] sm:text-3xl">
            Have an Idea Worth Building?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#526577]">
            Let&apos;s discuss your business requirements
            and explore how AI, software development
            and digital technology can bring your
            vision to life.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#075B3B] px-7 py-4 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(7,91,59,0.12)] transition hover:-translate-y-1 hover:bg-[#06472F]"
          >
            Build With OPV

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
