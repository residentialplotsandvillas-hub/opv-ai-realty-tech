
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Code2,
  Cloud,
  Database,
  Globe2,
  Layers3,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Workflow,
  BarChart3,
  Smartphone,
} from "lucide-react";

const capabilities = [
  {
    icon: Bot,
    title: "AI Development",
    description:
      "AI agents, generative AI, chatbots and enterprise AI solutions",
  },
  {
    icon: Code2,
    title: "Web, Mobile & SaaS",
    description:
      "Custom websites, mobile applications and scalable SaaS products",
  },
  {
    icon: Database,
    title: "CRM & ERP",
    description:
      "Custom CRM, ERP, lead management and business intelligence",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Workflow automation, WhatsApp automation and AI integrations",
  },
];

const serviceTags = [
  "AI Development",
  "AI Agents",
  "Workflow Automation",
  "Web Development",
  "Mobile Apps",
  "SaaS",
  "CRM & ERP",
  "SEO & AEO",
  "Digital Marketing",
  "Lead Generation",
];

const technologyStrip = [
  { icon: Code2, label: "SOFTWARE" },
  { icon: Smartphone, label: "MOBILE APPS" },
  { icon: Sparkles, label: "ARTIFICIAL INTELLIGENCE" },
  { icon: Cloud, label: "CLOUD & SAAS" },
  { icon: Database, label: "CRM & ERP" },
  { icon: MessageSquareText, label: "AI CHATBOTS" },
  { icon: Layers3, label: "AUTOMATION" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#F8F6F0] text-[#263C50]"
    >
      {/* SUBTLE BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#075B3B]/[0.035] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C6A052]/[0.055] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,91,59,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(7,91,59,.035) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      {/* MAIN HERO */}
      <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-2xl">

          {/* EYEBROW */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2.5 shadow-sm">

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#075B3B] opacity-20" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#075B3B]" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#075B3B] sm:text-xs">
              AI · Technology · Business Growth
            </span>
          </div>

          {/* SEO-OPTIMIZED MAIN HEADLINE */}
          <h1
            id="hero-heading"
            className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#263C50] sm:text-5xl md:text-6xl lg:text-[66px]"
          >
            Build Smarter.

            <span className="mt-2 block text-[#075B3B]">
              Automate Better.
            </span>

            <span className="mt-2 block">
              Grow Faster.
            </span>
          </h1>

          {/* SERVICE POSITIONING */}
          <h2 className="mt-7 max-w-xl text-base font-semibold leading-7 text-[#075B3B] sm:text-lg">
            AI Development, Intelligent Automation &amp;
            Business Technology Solutions in Hyderabad
          </h2>

          {/* SEO-FRIENDLY DESCRIPTION */}
          <p className="mt-4 max-w-xl text-base leading-8 text-[#526577] sm:text-lg">
            OPV AI Realty Tech is a Hyderabad-based business
            technology company offering AI development,
            AI agents, chatbot development, workflow automation,
            website and mobile app development, SaaS, CRM, ERP
            and digital marketing solutions for businesses
            across India.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <Link
              href="#solutions"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#075B3B] px-7 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(7,91,59,0.14)] transition duration-300 hover:-translate-y-1 hover:bg-[#06472F]"
            >
              Explore Solutions

              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-semibold text-[#075B3B] transition duration-300 hover:border-[#075B3B]/40 hover:bg-[#F1F5F0]"
            >
              Build With OPV

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* SERVICE TAGS */}
          <div className="mt-12">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.20em] text-[#647586]">
              Our Technology Capabilities
            </p>

            <div className="flex flex-wrap gap-2">
              {serviceTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#E3E5DE] bg-white px-3.5 py-2 text-[11px] font-medium text-[#526577] transition hover:border-[#075B3B]/30 hover:text-[#075B3B]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* TRUST STATEMENT */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#E3E5DE] pt-7">

            <div className="flex items-center gap-2 text-xs text-[#526577]">
              <Globe2 className="h-4 w-4 text-[#075B3B]" />
              Serving businesses in Hyderabad &amp; across India
            </div>

            <div className="flex items-center gap-2 text-xs text-[#526577]">
              <ShieldCheck className="h-4 w-4 text-[#075B3B]" />
              Business-first technology solutions
            </div>
          </div>
        </div>

        {/* RIGHT ECOSYSTEM VISUAL */}
        <div className="relative mx-auto w-full max-w-[590px]">

          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-full bg-[#075B3B]/[0.045] blur-[100px]"
          />

          {/* DASHBOARD */}
          <div className="relative overflow-hidden rounded-[28px] border border-[#E4E7DF] bg-white p-4 shadow-[0_25px_80px_rgba(38,60,80,0.10)] sm:p-6">

            {/* HEADER */}
            <div className="flex items-center justify-between gap-3 border-b border-[#E8EAE5] pb-5">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#075B3B]/10 bg-[#075B3B]/[0.07]">
                  <BrainCircuit className="h-6 w-6 text-[#075B3B]" />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#263C50]">
                    OPV Business Ecosystem
                  </p>

                  <p className="mt-1 text-[10px] text-[#647586]">
                    Connected technology solutions
                  </p>
                </div>
              </div>

              <div className="shrink-0 rounded-full border border-[#075B3B]/15 bg-[#075B3B]/[0.06] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#075B3B]">
                AI Powered
              </div>
            </div>

            {/* AI CORE */}
            <div className="relative my-7 flex items-center justify-center">

              <div
                aria-hidden="true"
                className="absolute h-52 w-52 rounded-full border border-[#075B3B]/10"
              />

              <div
                aria-hidden="true"
                className="absolute h-40 w-40 rounded-full border border-dashed border-[#C6A052]/30"
              />

              <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-[#075B3B]/20 bg-[#F0F6F1] shadow-[0_0_45px_rgba(7,91,59,0.08)] sm:h-36 sm:w-36">

                <Globe2
                  className="mb-2 h-9 w-9 text-[#075B3B]"
                  strokeWidth={1.4}
                />

                <span className="text-base font-extrabold tracking-[0.12em] text-[#075B3B]">
                  OPV AI
                </span>

                <span className="mt-1 text-[8px] font-semibold tracking-[0.18em] text-[#607B6C]">
                  INTELLIGENCE CORE
                </span>
              </div>

              {/* DECORATIVE ORBITS */}
              <div className="absolute left-[15%] top-[16%] h-2.5 w-2.5 rounded-full bg-[#075B3B]/70" />
              <div className="absolute right-[17%] top-[14%] h-2.5 w-2.5 rounded-full bg-[#C6A052]" />
              <div className="absolute bottom-[13%] left-[20%] h-2.5 w-2.5 rounded-full bg-[#075B3B]/40" />
            </div>

            {/* CAPABILITY CARDS */}
            <div className="grid grid-cols-2 gap-3">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0]/50 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/25 hover:bg-white hover:shadow-sm"
                  >

                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#075B3B] shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-xs font-bold text-[#263C50] sm:text-sm">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-5 text-[#647586]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* DASHBOARD FOOTER */}
            <div className="mt-5 flex items-center justify-between rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] px-4 py-3">

              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#075B3B]" />

                <span className="text-[10px] font-semibold text-[#526577]">
                  Connected Business Solutions
                </span>
              </div>

              <ArrowUpRight className="h-4 w-4 text-[#075B3B]" />
            </div>
          </div>

          {/* FLOATING CLOUD CARD */}
          <div className="absolute -right-3 top-24 hidden items-center gap-3 rounded-xl border border-[#E5E9E3] bg-white/95 p-3 shadow-lg backdrop-blur-xl sm:flex lg:-right-8">

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#075B3B]/[0.07]">
              <Cloud className="h-5 w-5 text-[#075B3B]" />
            </div>

            <div>
              <p className="text-xs font-bold text-[#263C50]">
                Cloud &amp; SaaS
              </p>

              <p className="text-[9px] text-[#647586]">
                Built to scale
              </p>
            </div>
          </div>

          {/* FLOATING GROWTH CARD */}
          <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-[#E5E9E3] bg-white/95 p-3 shadow-lg backdrop-blur-xl sm:flex lg:-left-8">

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C6A052]/[0.12]">
              <BarChart3 className="h-5 w-5 text-[#98732F]" />
            </div>

            <div>
              <p className="text-xs font-bold text-[#263C50]">
                Digital Growth
              </p>

              <p className="text-[9px] text-[#647586]">
                Strategy to scale
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CAPABILITY STRIP */}
      <div className="relative border-t border-[#E8EAE5] bg-white">

        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-7 gap-y-4 px-5 py-7 sm:gap-x-10 lg:px-12">

          {technologyStrip.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-2 text-[9px] font-bold tracking-[0.12em] text-[#647586] transition hover:text-[#075B3B] sm:text-[10px]"
              >
                <Icon className="h-4 w-4 text-[#075B3B]" />
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
