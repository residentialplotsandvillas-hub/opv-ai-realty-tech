
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
      "A dedicated real estate discovery brand focused on creating a digital destination for exploring property opportunities and real estate information.",
    icon: Building2,
    status: "Live Platform",
    statusStyle:
      "border-emerald-300/30 bg-emerald-300/10 text-emerald-300",
    accent: "emerald",
    capabilities: [
      "Real Estate Digital Experience",
      "Property Discovery",
      "Online Property Presence",
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
      "A proposed integrated business management ecosystem designed around CRM, lead management, sales workflows, channel partner operations and business intelligence.",
    icon: Layers3,
    status: "Product Initiative",
    statusStyle:
      "border-blue-300/30 bg-blue-300/10 text-blue-300",
    accent: "blue",
    capabilities: [
      "Lead & CRM Management",
      "Sales Workflow Management",
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
    subtitle: "Intelligent AI & Business Automation",
    description:
      "Custom AI solution capabilities designed to support customer engagement, intelligent assistants, lead qualification and connected business workflows.",
    icon: BrainCircuit,
    status: "Custom Solutions",
    statusStyle:
      "border-amber-300/30 bg-amber-300/10 text-amber-300",
    accent: "amber",
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

const accentStyles = {
  emerald: {
    background: "from-[#113c32] to-[#102c38]",
    icon: "text-emerald-300",
    glow: "bg-emerald-300/10",
  },
  blue: {
    background: "from-[#1b3452] to-[#101e35]",
    icon: "text-blue-300",
    glow: "bg-blue-300/10",
  },
  amber: {
    background: "from-[#3b3021] to-[#172337]",
    icon: "text-amber-300",
    glow: "bg-amber-300/10",
  },
};

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="scroll-mt-24 overflow-hidden bg-[#071525] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADER */}

        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2">
              <Sparkles className="h-4 w-4 text-emerald-300" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-300">
                Our Work & Technology Initiatives
              </span>
            </div>

            <h2
              id="case-studies-heading"
              className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              From Ideas to
              <span className="block text-emerald-300">
                Digital Solutions.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
              Explore our flagship digital platform, technology
              initiatives and AI solution capabilities. We bring
              business understanding, software engineering and
              intelligent technology together to create digital
              experiences.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/30 px-6 py-3.5 text-sm font-bold text-emerald-300 transition hover:bg-emerald-300 hover:text-[#06111f]"
          >
            Discuss Your Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

        </div>

        {/* PROJECT CARDS */}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {projects.map((project) => {
            const Icon = project.icon;
            const style =
              accentStyles[
                project.accent as keyof typeof accentStyles
              ];

            return (
              <article
                key={project.number}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#102033] transition duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:shadow-2xl hover:shadow-black/20"
              >

                {/* PROJECT VISUAL */}

                <div
                  className={`relative flex min-h-[220px] items-center justify-center overflow-hidden bg-gradient-to-br ${style.background}`}
                >

                  <div
                    aria-hidden="true"
                    className={`absolute h-48 w-48 rounded-full ${style.glow} blur-[65px]`}
                  />

                  <div
                    aria-hidden="true"
                    className="absolute h-36 w-36 rounded-full border border-white/10"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute h-52 w-52 rounded-full border border-dashed border-white/[0.08]"
                  />

                  <span className="absolute left-6 top-5 text-[10px] font-bold tracking-[0.2em] text-white/50">
                    OPV / {project.number}
                  </span>

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/20 bg-white/[0.08] shadow-2xl backdrop-blur-xl transition duration-500 group-hover:scale-110">
                    <Icon
                      className={`h-12 w-12 ${style.icon}`}
                      strokeWidth={1.4}
                    />
                  </div>

                  <span className="absolute bottom-5 right-6 text-[9px] font-bold tracking-[0.16em] text-white/40">
                    TECHNOLOGY / INNOVATION
                  </span>

                </div>

                {/* PROJECT CONTENT */}

                <div className="flex flex-1 flex-col p-7">

                  <div className="flex flex-wrap items-center justify-between gap-3">

                    <span className="text-[9px] font-extrabold tracking-[0.16em] text-emerald-300">
                      {project.category}
                    </span>

                    <span
                      className={`rounded-full border px-3 py-1.5 text-[9px] font-bold ${project.statusStyle}`}
                    >
                      {project.status}
                    </span>

                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold text-slate-300">
                    {project.subtitle}
                  </p>

                  <p className="mt-5 min-h-[112px] text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* CAPABILITIES */}

                  <div className="mt-6 border-t border-white/10 pt-6">

                    <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                      Key Solution Areas
                    </p>

                    <div className="space-y-3">
                      {project.capabilities.map((capability) => (
                        <div
                          key={capability}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />

                          <span className="text-xs text-slate-300">
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
                      className="group/link inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-xs font-bold text-white transition hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-300"
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

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9">

          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

            <div className="max-w-xl">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-300">
                Beyond Individual Products
              </p>

              <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                Custom Technology.
                <span className="block text-emerald-300">
                  Built Around Your Vision.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Have a unique business idea or technology
                requirement? OPV can help explore the right
                software, AI, SaaS and automation approach.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

              {[
                { icon: Code2, label: "Software" },
                { icon: BrainCircuit, label: "AI Solutions" },
                { icon: Layers3, label: "SaaS Products" },
                { icon: Workflow, label: "Automation" },
                { icon: Building2, label: "Industry Tech" },
                { icon: Sparkles, label: "Innovation" },
              ].map((item) => {
                const ItemIcon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.035] px-3 py-3"
                  >
                    <ItemIcon className="h-4 w-4 shrink-0 text-emerald-300" />

                    <span className="text-[10px] font-semibold text-slate-300">
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

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
            Your Next Digital Innovation Starts Here
          </p>

          <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
            Have an Idea Worth Building?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Let's discuss your business requirements and
            explore how technology can bring your vision to life.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-300 px-7 py-4 text-sm font-extrabold text-[#06111f] transition hover:-translate-y-1 hover:bg-emerald-200"
          >
            Build With OPV
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

      </div>
    </section>
  );
}
