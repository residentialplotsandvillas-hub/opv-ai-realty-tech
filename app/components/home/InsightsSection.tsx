
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Search,
  Workflow,
  Code2,
  Database,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const insights = [
  {
    number: "01",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "How AI Agents Are Transforming Modern Business Operations",
    description:
      "Explore how intelligent AI agents can support customer interactions, automate workflows and help businesses operate more efficiently.",
    icon: BrainCircuit,
    accent: "emerald",
    href: "/insights/ai-agents-for-business",
    type: "Technology Perspective",
  },
  {
    number: "02",
    category: "SAAS & SOFTWARE",
    title: "Building Scalable SaaS Products for Growing Businesses",
    description:
      "Understand the key considerations behind developing digital products, from MVP planning and architecture to product scalability.",
    icon: Code2,
    accent: "blue",
    href: "/insights/scalable-saas-development",
    type: "Product Engineering",
  },
  {
    number: "03",
    category: "DIGITAL GROWTH",
    title: "SEO, AEO & GEO: Understanding the Future of Digital Discovery",
    description:
      "Explore how businesses can strengthen their digital visibility across traditional search engines and AI-powered discovery experiences.",
    icon: Search,
    accent: "amber",
    href: "/insights/seo-aeo-geo",
    type: "Digital Strategy",
  },
  {
    number: "04",
    category: "BUSINESS AUTOMATION",
    title: "Why Connected CRM and Automation Matter for Business Growth",
    description:
      "Discover how connected customer management systems and automated workflows can improve business processes.",
    icon: Workflow,
    accent: "violet",
    href: "/insights/crm-business-automation",
    type: "Business Technology",
  },
  {
    number: "05",
    category: "CLOUD & DATA",
    title: "How Cloud Technology and Business Intelligence Work Together",
    description:
      "Learn how cloud infrastructure, data integration and analytics can support better visibility and informed business decisions.",
    icon: Database,
    accent: "cyan",
    href: "/insights/cloud-business-intelligence",
    type: "Technology Explainer",
  },
  {
    number: "06",
    category: "CYBERSECURITY",
    title: "Building Secure Digital Foundations for Modern Businesses",
    description:
      "Understand the importance of application security, access management, data protection and responsible technology practices.",
    icon: ShieldCheck,
    accent: "pink",
    href: "/insights/business-cybersecurity",
    type: "Security & Technology",
  },
];

const accentStyles = {
  emerald: {
    icon: "bg-emerald-50 text-emerald-700",
    category: "text-emerald-700",
    hover: "group-hover:text-emerald-700",
  },
  blue: {
    icon: "bg-blue-50 text-blue-700",
    category: "text-blue-700",
    hover: "group-hover:text-blue-700",
  },
  amber: {
    icon: "bg-amber-50 text-amber-700",
    category: "text-amber-700",
    hover: "group-hover:text-amber-700",
  },
  violet: {
    icon: "bg-violet-50 text-violet-700",
    category: "text-violet-700",
    hover: "group-hover:text-violet-700",
  },
  cyan: {
    icon: "bg-cyan-50 text-cyan-700",
    category: "text-cyan-700",
    hover: "group-hover:text-cyan-700",
  },
  pink: {
    icon: "bg-pink-50 text-pink-700",
    category: "text-pink-700",
    hover: "group-hover:text-pink-700",
  },
};

export default function InsightsSection() {
  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      className="scroll-mt-24 bg-[#f7f9fc] py-8 sm:py-8 lg:py-8"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADER */}

        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
              <BookOpen className="h-4 w-4 text-emerald-700" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-800">
                OPV Insights & Perspectives
              </span>
            </div>

            <h2
              id="insights-heading"
              className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#101c2c] sm:text-4xl lg:text-5xl"
            >
              Ideas That Shape
              <span className="block text-emerald-700">
                The Digital Future.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
              Explore ideas, technology perspectives and practical
              insights across artificial intelligence, software,
              SaaS, automation, cybersecurity and digital business
              growth.
            </p>

          </div>

          <Link
            href="/insights"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-emerald-700 transition hover:gap-3"
          >
            Explore All Insights

            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

        </div>

        {/* FEATURED INSIGHT */}

        <Link
          href="/insights/ai-agents-for-business"
          className="group relative mt-14 block overflow-hidden rounded-3xl bg-[#081a2b] p-7 text-white transition hover:shadow-2xl sm:p-10 lg:p-12"
        >

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]"
          />

          <div className="relative grid gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-emerald-300" />

                <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-emerald-300">
                  Featured Topic
                </span>
              </div>

              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
                Artificial Intelligence & Business
              </p>

              <h3 className="mt-4 max-w-xl text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                The Next Era of Business Is Intelligent, Connected & Automated.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-8 text-slate-400">
                Discover how generative AI, intelligent agents
                and connected automation systems are creating
                new possibilities for modern businesses.
              </p>

              <span className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-emerald-300 transition group-hover:gap-5">
                Explore This Topic

                <ArrowRight className="h-4 w-4" />
              </span>

            </div>

            {/* FEATURED VISUAL */}

            <div className="relative flex min-h-[230px] items-center justify-center">

              <div className="absolute h-56 w-56 rounded-full border border-emerald-300/10" />

              <div className="absolute h-40 w-40 rounded-full border border-dashed border-cyan-300/20" />

              <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-[28px] border border-emerald-300/30 bg-gradient-to-br from-[#174d44] to-[#10283c] shadow-[0_0_70px_rgba(52,211,153,0.17)] transition duration-500 group-hover:scale-105">
                <BrainCircuit className="h-12 w-12 text-emerald-300" />

                <span className="mt-2 text-xs font-extrabold tracking-[0.15em] text-white">
                  INTELLIGENT AI
                </span>
              </div>

              <div className="absolute left-[8%] top-[14%] rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur">
                <span className="flex items-center gap-2 text-[10px] font-bold text-slate-300">
                  <Workflow className="h-4 w-4 text-emerald-300" />
                  Automation
                </span>
              </div>

              <div className="absolute bottom-[12%] right-[5%] rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur">
                <span className="flex items-center gap-2 text-[10px] font-bold text-slate-300">
                  <Database className="h-4 w-4 text-cyan-300" />
                  Business Data
                </span>
              </div>

            </div>
          </div>
        </Link>

        {/* INSIGHT GRID */}

        <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700">
              Explore Knowledge
            </p>

            <h3 className="mt-3 text-2xl font-extrabold text-[#142236] sm:text-3xl">
              Explore Technology & Business Insights.
            </h3>
          </div>

          <p className="max-w-md text-xs leading-6 text-slate-500">
            Perspectives across the technologies and ideas
            shaping business transformation.
          </p>

        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {insights.map((item) => {
            const Icon = item.icon;
            const style = accentStyles[
              item.accent as keyof typeof accentStyles
            ];

            return (
              <article
                key={item.number}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
              >

                <div className="flex items-center justify-between">

                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${style.icon}`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-xs font-bold text-slate-300">
                    {item.number}
                  </span>

                </div>

                <p className={`mt-6 text-[9px] font-extrabold uppercase tracking-[0.16em] ${style.category}`}>
                  {item.category}
                </p>

                <h3 className={`mt-3 min-h-[72px] text-lg font-extrabold leading-7 text-[#142236] transition-colors ${style.hover}`}>
                  {item.title}
                </h3>

                <p className="mt-3 min-h-[95px] text-xs leading-7 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-5">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                    {item.type}
                  </span>
                </div>

                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-emerald-700 transition hover:gap-3"
                >
                  Explore Insight

                  <ArrowUpRight className="h-4 w-4" />
                </Link>

              </article>
            );
          })}

        </div>

        {/* BOTTOM CTA */}

        <div className="mt-14 rounded-3xl border border-emerald-200 bg-gradient-to-br from-white to-emerald-50 p-8 text-center sm:p-10">

          <div className="flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <Lightbulb className="h-6 w-6" />
            </div>
          </div>

          <h3 className="mt-5 text-2xl font-extrabold text-[#142236] sm:text-3xl">
            Stay Curious. Think Ahead. Build Better.
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
            Follow the ideas, emerging technologies and
            business innovations shaping the digital future.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0b1b2c] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-emerald-700"
          >
            Connect With OPV

            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

      </div>
    </section>
  );
}
