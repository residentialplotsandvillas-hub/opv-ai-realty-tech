import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Compass,
  FileText,
  Globe2,
  LineChart,
  Megaphone,
  MousePointerClick,
  Search,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Growth & Marketing | OPV AI Realty Tech",
  description:
    "Explore SEO, AEO, GEO, content strategy, digital marketing, lead generation and analytics solutions with OPV AI Realty Tech.",
  alternates: {
    canonical: "/solutions/digital-growth-marketing",
  },
  openGraph: {
    title: "Digital Growth & Marketing | OPV AI Realty Tech",
    description:
      "Build your digital presence, improve discoverability and develop structured lead generation strategies with OPV AI Realty Tech.",
    url: "/solutions/digital-growth-marketing",
    type: "website",
  },
};

const services = [
  {
    icon: Search,
    title: "Search Engine Optimisation (SEO)",
    description:
      "Improve your website's search visibility through technical SEO, site structure, content optimisation and relevant search strategies.",
  },
  {
    icon: Sparkles,
    title: "Answer Engine Optimisation (AEO)",
    description:
      "Structure useful content to make it easier for search and answer platforms to understand and surface relevant information.",
  },
  {
    icon: Bot,
    title: "Generative Engine Optimisation (GEO)",
    description:
      "Develop content and website structures that help improve the clarity, relevance and discoverability of your brand across AI-powered search experiences.",
  },
  {
    icon: FileText,
    title: "Content Strategy & Marketing",
    description:
      "Plan valuable website content, articles, landing pages and resource material around your audience and business objectives.",
  },
  {
    icon: Target,
    title: "Lead Generation Strategy",
    description:
      "Plan digital journeys, landing pages and enquiry pathways designed to attract and engage relevant potential customers.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing Analytics",
    description:
      "Review website activity, campaign performance and conversion indicators to support informed marketing decisions.",
  },
];

const growthChannels = [
  {
    icon: Globe2,
    title: "Organic Search",
    description:
      "Build search-friendly website structures and useful content around relevant customer queries.",
  },
  {
    icon: Megaphone,
    title: "Digital Campaigns",
    description:
      "Plan digital campaign messaging, landing pages and audience journeys around marketing objectives.",
  },
  {
    icon: Share2,
    title: "Social Media Presence",
    description:
      "Develop consistent brand communication and content approaches across suitable social platforms.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "Create clearer pathways for website visitors and prospective customers to make enquiries.",
  },
];

const capabilities = [
  "Technical SEO considerations",
  "On-page SEO and content optimisation",
  "Website structure and internal linking",
  "Answer Engine Optimisation (AEO)",
  "Generative Engine Optimisation (GEO)",
  "Content planning and strategy",
  "Business and service landing pages",
  "Lead generation journeys",
  "Conversion optimisation considerations",
  "Digital campaign planning",
  "Website and campaign analytics",
  "Marketing performance reporting",
];

const benefits = [
  {
    title: "Stronger Digital Discoverability",
    description:
      "Improve the structure, relevance and clarity of your digital content for audiences and search experiences.",
  },
  {
    title: "More Relevant Website Visitors",
    description:
      "Build content and marketing approaches around the needs, questions and interests of your intended audience.",
  },
  {
    title: "Clearer Customer Journeys",
    description:
      "Create more useful pathways from discovering your business to exploring services and making an enquiry.",
  },
  {
    title: "Measurable Marketing Activity",
    description:
      "Use suitable analytics and reporting to review activity and identify opportunities for improvement.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business, audience, digital presence and growth objectives.",
  },
  {
    number: "02",
    title: "Research",
    description:
      "Review relevant search topics, audience needs, competitors and opportunities.",
  },
  {
    number: "03",
    title: "Plan",
    description:
      "Define the content, SEO, AEO, GEO and lead generation approach.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Develop and implement the agreed website, content and marketing improvements.",
  },
  {
    number: "05",
    title: "Measure & Improve",
    description:
      "Review relevant performance indicators and refine the strategy over time.",
  },
];

export default function DigitalGrowthMarketingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Digital Growth & Marketing
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get Discovered.
              <span className="block text-emerald-400">
                Generate Leads. Grow.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Build a stronger digital presence with search optimisation,
              useful content, AI-era discoverability and lead generation
              strategies. OPV AI Realty Tech helps businesses connect their
              digital marketing activities with wider growth objectives.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Discuss Your Growth Strategy
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/#solutions"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Explore Our Solutions
              </Link>
            </div>

            <p className="mt-8 text-sm text-slate-400">
              Better discoverability. Meaningful engagement. Measurable growth.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                    OPV DIGITAL GROWTH
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    Connected Growth Strategy
                  </h2>
                </div>

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                  <TrendingUp size={28} />
                </div>
              </div>

              {/* GROWTH CHANNELS */}
              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Search className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">SEO</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Organic search visibility.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Sparkles className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">AEO</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Answer-focused content.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Bot className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">GEO</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    AI search discoverability.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Target className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">Lead Generation</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Customer enquiry journeys.
                  </p>
                </div>
              </div>

              {/* STRATEGY FLOW */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-[#10233a] p-5">
                <p className="text-sm font-semibold text-white">
                  Digital Growth Framework
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {["Discover", "Engage", "Convert", "Improve"].map(
                    (stage, index) => (
                      <div
                        key={stage}
                        className="flex items-center gap-2"
                      >
                        <span className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300">
                          {stage}
                        </span>

                        {index < 3 && (
                          <ArrowRight
                            size={13}
                            className="text-slate-500"
                          />
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-4">
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-emerald-300"
                />
                <p className="text-sm text-slate-200">
                  Marketing activities connected to business goals
                </p>
              </div>
            </div>

            <div className="absolute -right-5 -top-5 -z-10 h-36 w-36 rounded-full bg-emerald-400/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Build your digital presence
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Digital Marketing That Connects Visibility with Business Growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Growing a digital business involves more than publishing a
            website. Customers need to discover your services, understand
            your value and find a clear way to connect with you. A coordinated
            approach to search, content, marketing and lead generation can
            help create a more meaningful digital journey.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Digital Growth & Marketing Services
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore digital marketing capabilities designed to support
              your brand visibility, customer engagement and business goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* GROWTH CHANNELS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Digital channels
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Reach Your Audience Across Digital Channels
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Different channels contribute to different stages of the customer
            journey. Their role should be considered as part of one connected
            marketing approach.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {growthChannels.map((channel) => {
            const Icon = channel.icon;

            return (
              <article
                key={channel.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                  <Icon size={25} />
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {channel.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {channel.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* SEO AEO GEO */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Search in a changing digital landscape
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              SEO + AEO + GEO: A Broader Approach to Discoverability
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Search behaviour continues to evolve. Businesses need clear,
              useful and well-organised information that serves people across
              traditional search engines, answer experiences and AI-powered
              discovery platforms.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <div className="inline-flex rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                <Search size={27} />
              </div>

              <h3 className="mt-5 text-2xl font-bold">SEO</h3>

              <p className="mt-2 text-sm font-semibold text-emerald-300">
                Search Engine Optimisation
              </p>

              <p className="mt-5 leading-7 text-slate-300">
                Focus on technical foundations, relevant content, page
                structure and search visibility to help audiences discover
                your website.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <div className="inline-flex rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                <Sparkles size={27} />
              </div>

              <h3 className="mt-5 text-2xl font-bold">AEO</h3>

              <p className="mt-2 text-sm font-semibold text-emerald-300">
                Answer Engine Optimisation
              </p>

              <p className="mt-5 leading-7 text-slate-300">
                Organise useful, direct and structured information to make
                your content easier to understand in answer-focused search
                experiences.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <div className="inline-flex rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                <Bot size={27} />
              </div>

              <h3 className="mt-5 text-2xl font-bold">GEO</h3>

              <p className="mt-2 text-sm font-semibold text-emerald-300">
                Generative Engine Optimisation
              </p>

              <p className="mt-5 leading-7 text-slate-300">
                Improve the clarity, context and usefulness of brand
                information for discovery across generative AI and
                AI-assisted search experiences.
              </p>
            </article>
          </div>

          <p className="mt-8 text-center text-sm text-slate-400">
            Visibility depends on many factors. No search or AI-platform
            placement is guaranteed.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Our capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A Connected Digital Growth Toolkit
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Every business has different audiences and growth priorities.
              We help identify relevant marketing activities and organise
              them into a practical digital strategy.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              Discuss your marketing requirements
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />
                <span className="text-sm font-medium leading-6 text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Business value
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Turn Digital Activity into Growth Opportunities
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            A coordinated marketing strategy can help businesses connect
            visibility, engagement and enquiry generation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <p className="text-sm font-bold text-emerald-600">
                BENEFIT 0{index + 1}
              </p>

              <h3 className="mt-4 text-xl font-bold">{benefit.title}</h3>

              <p className="mt-3 leading-7 text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Our approach
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From Digital Strategy to Measurable Improvement
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A structured process keeps marketing activities connected to
              your audience, business objectives and performance indicators.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-3xl font-bold text-emerald-400">
                  {step.number}
                </p>

                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-600 px-7 py-14 text-center text-white sm:px-14">
          <div className="mx-auto inline-flex rounded-2xl bg-white/15 p-3">
            <Rocket size={28} />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold sm:text-4xl">
            Ready to Build Your Digital Growth Strategy?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Tell us about your website, marketing goals and lead generation
            requirements. Let's explore a digital strategy aligned with
            your business.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Discuss Your Growth Plan
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}