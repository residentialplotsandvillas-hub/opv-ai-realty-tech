
import {
  BrainCircuit,
  Code2,
  Layers3,
  Cloud,
  Database,
  Workflow,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    subtitle: "Intelligent solutions",
    number: "01",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    subtitle: "Digital product development",
    number: "02",
  },
  {
    icon: Layers3,
    title: "SaaS Platforms",
    subtitle: "Scalable business systems",
    number: "03",
  },
  {
    icon: Cloud,
    title: "Cloud Technology",
    subtitle: "Connected infrastructure",
    number: "04",
  },
  {
    icon: Database,
    title: "Data & Intelligence",
    subtitle: "Business insights",
    number: "05",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    subtitle: "Intelligent workflows",
    number: "06",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    subtitle: "Secure digital foundations",
    number: "07",
  },
  {
    icon: TrendingUp,
    title: "Digital Growth",
    subtitle: "Marketing & revenue",
    number: "08",
  },
];

export default function TechnologyStrip() {
  return (
    <section
      aria-label="OPV AI Realty Tech technology capabilities"
      className="relative overflow-hidden border-y border-white/[0.08] bg-[#081827] py-9 sm:py-11"
    >
      {/* TOP ACCENT */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-emerald-300">
                OPV Technology Ecosystem
              </span>
            </div>

            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              One Connected Technology Ecosystem.
            </h2>

            <p className="mt-2 text-xs text-slate-400 sm:text-sm">
              Intelligence. Engineering. Automation. Growth.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5">
            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Core Capabilities
            </span>

            <span className="h-4 w-px bg-white/15" />

            <span className="text-xs font-extrabold text-emerald-300">
              01 — 08
            </span>
          </div>
        </div>

        {/* TECHNOLOGY MARQUEE */}
        <div className="opv-marquee">

          <div className="opv-marquee-track">

            {/* FIRST GROUP */}
            <div className="opv-marquee-group" role="list">

              {technologies.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    role="listitem"
                    className="opv-tech-card"
                  >
                    <div className="opv-tech-icon">
                      <Icon
                        className="h-6 w-6"
                        strokeWidth={1.7}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="opv-tech-title">
                        {item.title}
                      </p>

                      <p className="opv-tech-subtitle">
                        {item.subtitle}
                      </p>
                    </div>

                    <span className="opv-tech-number">
                      {item.number}
                    </span>
                  </div>
                );
              })}

            </div>

            {/* DUPLICATE GROUP FOR SEAMLESS ANIMATION */}
            <div
              className="opv-marquee-group"
              aria-hidden="true"
            >
              {technologies.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={`duplicate-${item.number}`}
                    className="opv-tech-card"
                  >
                    <div className="opv-tech-icon">
                      <Icon
                        className="h-6 w-6"
                        strokeWidth={1.7}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="opv-tech-title">
                        {item.title}
                      </p>

                      <p className="opv-tech-subtitle">
                        {item.subtitle}
                      </p>
                    </div>

                    <span className="opv-tech-number">
                      {item.number}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* BOTTOM BRAND MESSAGE */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-white/[0.07] pt-6 text-center">

          <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-slate-500">
            Built For
          </span>

          <span className="text-[10px] font-semibold text-slate-300">
            Startups
          </span>

          <span className="text-emerald-300/50">/</span>

          <span className="text-[10px] font-semibold text-slate-300">
            SMEs
          </span>

          <span className="text-emerald-300/50">/</span>

          <span className="text-[10px] font-semibold text-slate-300">
            Growing Businesses
          </span>

          <span className="text-emerald-300/50">/</span>

          <span className="text-[10px] font-semibold text-slate-300">
            Enterprises
          </span>

        </div>

      </div>

      {/* BOTTOM ACCENT */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent" />

    </section>
  );
}
