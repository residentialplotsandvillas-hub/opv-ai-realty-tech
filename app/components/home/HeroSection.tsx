
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
    title: "AI Solutions",
    description: "AI agents, generative AI and intelligent automation",
    color: "text-emerald-300",
  },
  {
    icon: Code2,
    title: "Software & SaaS",
    description: "Custom software, web applications and SaaS products",
    color: "text-blue-300",
  },
  {
    icon: Database,
    title: "CRM & Data",
    description: "Business systems, analytics and intelligent insights",
    color: "text-amber-300",
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Connected workflows and business process automation",
    color: "text-cyan-300",
  },
];

const serviceTags = [
  "Web Development",
  "Mobile Apps",
  "AI & Agents",
  "SaaS",
  "CRM & ERP",
  "Cloud",
  "SEO & AEO",
  "Lead Generation",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#06111f] text-white"
    >
      {/* BACKGROUND EFFECTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-emerald-400/[0.08] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/[0.10] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      {/* HERO CONTENT */}
      <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">

        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-2xl">

          {/* EYEBROW */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.20em] text-emerald-300 sm:text-xs">
              AI · Technology · Business Growth
            </span>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[66px]">
            Build Smarter.
            <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Automate Better.
            </span>
            <span className="mt-2 block">
              Grow Faster.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            OPV AI Realty Tech builds intelligent software,
            SaaS products, AI solutions, business systems and
            digital growth engines that help organizations
            launch, automate, operate and scale.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <Link
              href="#solutions"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-emerald-300 px-7 py-4 text-sm font-bold text-[#06111f] shadow-[0_10px_35px_rgba(52,211,153,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-emerald-200"
            >
              Explore Solutions

              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:border-emerald-300/40 hover:bg-emerald-300/[0.08]"
            >
              Build With OPV

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

          </div>

          {/* SERVICE TAGS */}
          <div className="mt-12">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.20em] text-slate-500">
              Our Technology Capabilities
            </p>

            <div className="flex flex-wrap gap-2">
              {serviceTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[11px] font-medium text-slate-300 transition hover:border-emerald-300/30 hover:text-emerald-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* BOTTOM TRUST STATEMENT */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-7">

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Globe2 className="h-4 w-4 text-emerald-300" />
              Built for businesses across industries
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              Business-first technology
            </div>

          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto w-full max-w-[590px]">

          {/* OUTER GLOW */}
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-full bg-emerald-400/[0.10] blur-[100px]"
          />

          {/* MAIN DASHBOARD */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.12] bg-gradient-to-br from-[#14283a] to-[#0a1726] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-6">

            {/* WINDOW HEADER */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10">
                  <BrainCircuit className="h-6 w-6 text-emerald-300" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    OPV Business Ecosystem
                  </p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Connected technology solutions
                  </p>
                </div>
              </div>

              <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-emerald-300">
                AI Powered
              </div>
            </div>

            {/* CENTRAL AI CORE */}
            <div className="relative my-7 flex items-center justify-center">

              <div
                aria-hidden="true"
                className="absolute h-52 w-52 rounded-full border border-emerald-300/10"
              />

              <div
                aria-hidden="true"
                className="absolute h-40 w-40 rounded-full border border-dashed border-cyan-300/20"
              />

              <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-emerald-300/30 bg-gradient-to-br from-[#174d44] to-[#102c3b] shadow-[0_0_50px_rgba(52,211,153,0.16)] sm:h-36 sm:w-36">
                <Globe2 className="mb-2 h-9 w-9 text-emerald-300" strokeWidth={1.4} />
                <span className="text-base font-extrabold tracking-[0.12em] text-white">
                  OPV AI
                </span>
                <span className="mt-1 text-[8px] font-semibold tracking-[0.18em] text-emerald-200">
                  INTELLIGENCE CORE
                </span>
              </div>

              {/* DECORATIVE ORBIT ELEMENTS */}
              <div className="absolute left-[15%] top-[16%] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_18px_#6ee7b7]" />
              <div className="absolute right-[17%] top-[14%] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_#67e8f9]" />
              <div className="absolute bottom-[13%] left-[20%] h-2.5 w-2.5 rounded-full bg-amber-300 shadow-[0_0_18px_#fcd34d]" />
            </div>

            {/* CAPABILITY CARDS */}
            <div className="grid grid-cols-2 gap-3">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-white/[0.09] bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-emerald-300/[0.045]"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06]">
                      <Icon className={`h-5 w-5 ${item.color}`} />
                    </div>

                    <h3 className="text-xs font-bold text-white sm:text-sm">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-5 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* DASHBOARD FOOTER */}
            <div className="mt-5 flex items-center justify-between rounded-xl border border-white/[0.07] bg-black/15 px-4 py-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-300" />
                <span className="text-[10px] font-semibold text-slate-300">
                  Connected Business Solutions
                </span>
              </div>

              <ArrowUpRight className="h-4 w-4 text-emerald-300" />
            </div>
          </div>

          {/* FLOATING CLOUD CARD */}
          <div className="absolute -right-3 top-24 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#13273a]/95 p-3 shadow-2xl backdrop-blur-xl sm:flex lg:-right-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-400/10">
              <Cloud className="h-5 w-5 text-blue-300" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Cloud & SaaS</p>
              <p className="text-[9px] text-slate-400">Built to scale</p>
            </div>
          </div>

          {/* FLOATING GROWTH CARD */}
          <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#13273a]/95 p-3 shadow-2xl backdrop-blur-xl sm:flex lg:-left-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-300/10">
              <BarChart3 className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Digital Growth</p>
              <p className="text-[9px] text-slate-400">Strategy to scale</p>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM CAPABILITY STRIP */}
      <div className="relative border-t border-white/[0.08] bg-white/[0.02]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-7 gap-y-4 px-5 py-7 sm:gap-x-10 lg:px-12">

          {[
            { icon: Code2, label: "SOFTWARE" },
            { icon: Smartphone, label: "MOBILE" },
            { icon: Sparkles, label: "ARTIFICIAL INTELLIGENCE" },
            { icon: Cloud, label: "CLOUD" },
            { icon: Database, label: "DATA & ANALYTICS" },
            { icon: MessageSquareText, label: "CRM" },
            { icon: Layers3, label: "SAAS" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-2 text-[9px] font-bold tracking-[0.12em] text-slate-500 transition hover:text-emerald-300 sm:text-[10px]"
              >
                <Icon className="h-4 w-4 text-emerald-300/70" />
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

