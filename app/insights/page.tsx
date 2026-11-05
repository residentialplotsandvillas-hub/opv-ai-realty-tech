import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Code2,
  Database,
  Globe2,
  Lightbulb,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Technology Perspectives | OPV AI Realty Tech",
  description:
    "Explore insights from OPV AI Realty Tech on artificial intelligence, business automation, software engineering, digital transformation, data intelligence and business growth.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights & Technology Perspectives | OPV AI Realty Tech",
    description:
      "Ideas, perspectives and practical knowledge for building smarter, more connected and AI-powered businesses.",
    url: "/insights",
    siteName: "OPV AI Realty Tech",
    type: "website",
  },
};

const topics = [
  "Artificial Intelligence",
  "Business Automation",
  "Software & Technology",
  "Digital Transformation",
  "Business Intelligence",
  "Digital Growth",
];

const articles = [
  {
    id: "ai-business",
    category: "Artificial Intelligence",
    readTime: "5 min read",
    title: "How AI Is Changing the Way Businesses Operate",
    excerpt:
      "Discover how artificial intelligence can support better decisions, improve customer experiences and make everyday business operations more efficient.",
    icon: BrainCircuit,
  },
  {
    id: "business-automation",
    category: "Business Automation",
    readTime: "4 min read",
    title: "From Manual Work to Intelligent Automation",
    excerpt:
      "Understand how connected workflows and automation can reduce repetitive tasks and help teams focus on higher-value work.",
    icon: Workflow,
  },
  {
    id: "connected-systems",
    category: "Software & Technology",
    readTime: "5 min read",
    title: "Why Businesses Need Connected Digital Systems",
    excerpt:
      "Explore why disconnected tools create operational friction and how integrated business systems provide a clearer view of operations.",
    icon: Code2,
  },
  {
    id: "seo-aeo-geo",
    category: "Digital Growth",
    readTime: "6 min read",
    title: "Understanding SEO, AEO and GEO",
    excerpt:
      "Learn how search engine optimisation, answer engine optimisation and generative engine optimisation support digital visibility.",
    icon: Search,
  },
  {
    id: "digital-foundation",
    category: "Digital Transformation",
    readTime: "5 min read",
    title: "Building a Digital Foundation for Business Growth",
    excerpt:
      "A practical look at the technology foundations businesses need to improve customer journeys and support sustainable growth.",
    icon: Globe2,
  },
  {
    id: "business-intelligence",
    category: "Business Intelligence",
    readTime: "4 min read",
    title: "Turning Business Data into Useful Insights",
    excerpt:
      "See how dashboards, reporting and business intelligence can turn operational data into more informed decisions.",
    icon: Database,
  },
];

const principles = [
  {
    icon: Target,
    title: "Business-first thinking",
    description:
      "Technology should solve a real business problem and support a clear objective.",
  },
  {
    icon: ShieldCheck,
    title: "Trust and responsibility",
    description:
      "Security, reliability and responsible implementation matter at every stage.",
  },
  {
    icon: Lightbulb,
    title: "Practical innovation",
    description:
      "The best innovation is useful, understandable and designed to create value.",
  },
  {
    icon: TrendingUp,
    title: "Continuous improvement",
    description:
      "Digital systems should evolve as customer expectations and business needs change.",
  },
];

function ArticleSection({
  id,
  number,
  title,
  intro,
  points,
  takeaway,
}: {
  id: string;
  number: string;
  title: string;
  intro: string;
  points: { title: string; description: string }[];
  takeaway: string;
}) {
  return (
    <article
      id={id}
      className="scroll-mt-28 border-b border-slate-200 py-14 last:border-b-0 md:py-16"
    >
      <div className="grid gap-8 md:grid-cols-[180px_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
            <BookOpen size={14} />
            Perspective {number}
          </span>
        </div>

        <div>
          <h2 className="max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-3xl">
            {title}
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            {intro}
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {points.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-bold text-slate-900">{point.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border-l-4 border-emerald-400 bg-emerald-50/70 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Key takeaway
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              {takeaway}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function InsightsPage() {
  return (
    <main id="insights" className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#06111f]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.16),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(245,158,11,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:py-28 lg:px-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              <Sparkles size={14} />
              OPV Knowledge Hub
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ideas for a{" "}
              <span className="text-emerald-300">Smarter</span> Digital Future.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore practical perspectives on AI, software, automation and
              digital growth. Discover how technology can help businesses work
              smarter, make better decisions and prepare for what comes next.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#latest-insights"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-6 py-3.5 text-sm font-bold text-[#06111f] transition hover:-translate-y-0.5 hover:bg-emerald-200"
              >
                Explore Insights
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:border-emerald-300/60 hover:bg-white/5"
              >
                Talk to Our Team
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2rem] bg-emerald-300/10 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl sm:p-9">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300/15 text-emerald-300">
                  <BrainCircuit size={27} />
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                  Think Forward
                </span>
              </div>

              <h2 className="mt-9 text-2xl font-extrabold leading-snug text-white">
                Technology is more than tools.
                <span className="block text-emerald-300">
                  It is a way to move business forward.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Knowledge, ideas and practical thinking for a more connected
                business world.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Artificial intelligence",
                  "Intelligent automation",
                  "Connected business systems",
                  "Digital growth and insights",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.035] p-3.5"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-300/10 text-xs font-bold text-emerald-300">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      {item}
                    </span>
                    <CheckCircle2
                      size={16}
                      className="ml-auto text-emerald-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOPIC STRIP */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-500">
              Explore topics
            </p>

            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PERSPECTIVE */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm md:grid-cols-2">
          <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden bg-[#0a1c2d] p-8 sm:p-10">
            <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full border border-emerald-300/20" />
            <div className="absolute -right-4 -top-4 h-48 w-48 rounded-full border border-emerald-300/20" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <Sparkles size={13} />
                Featured perspective
              </span>

              <div className="mt-12 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300">
                <BrainCircuit size={34} />
              </div>
            </div>

            <div className="relative mt-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                AI & Business Transformation
              </p>
              <p className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                The next chapter of business is intelligent, connected and
                adaptive.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-emerald-700">
              <span>Artificial Intelligence</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1 text-slate-500">
                <Clock3 size={13} />
                5 min read
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900">
              How AI Is Changing the Way Businesses Operate
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Artificial intelligence is creating new ways to understand
              customers, support employees and improve business processes.
              Explore where AI can make a practical difference and why a
              thoughtful implementation strategy matters.
            </p>

            <Link
              href="#ai-business"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-emerald-700 transition hover:gap-3 hover:text-emerald-800"
            >
              Read the perspective
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST INSIGHTS */}
      <section
        id="latest-insights"
        className="scroll-mt-24 bg-slate-50 py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-700">
                Ideas and perspectives
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Explore Our Latest Insights
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Explore foundational ideas and practical perspectives across
                the technologies shaping modern businesses.
              </p>
            </div>

            <span className="text-sm font-semibold text-slate-500">
              6 knowledge articles
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => {
              const Icon = article.icon;

              return (
                <article
                  key={article.id}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-slate-900/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-300 group-hover:text-[#06111f]">
                      <Icon size={23} />
                    </div>

                    <span className="text-xs font-semibold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    <span>{article.category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock3 size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-extrabold leading-snug text-slate-900 transition group-hover:text-emerald-800">
                    {article.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`#${article.id}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition group-hover:gap-3 group-hover:text-emerald-700"
                  >
                    Read article
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <aside className="h-fit lg:sticky lg:top-28">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-700">
              In this knowledge hub
            </p>

            <h2 className="mt-3 text-xl font-extrabold text-slate-900">
              Browse the perspectives
            </h2>

            <nav className="mt-6 flex flex-col gap-2">
              {articles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`#${article.id}`}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800"
                >
                  <span className="mr-2 text-xs font-bold text-emerald-600">
                    0{index + 1}
                  </span>
                  {article.title}
                </Link>
              ))}
            </nav>
          </aside>

          <div>
            <ArticleSection
              id="ai-business"
              number="01"
              title="How AI Is Changing the Way Businesses Operate"
              intro="Artificial intelligence is becoming an important part of how modern organisations analyse information, support customers and manage everyday work. Rather than viewing AI as a standalone technology, businesses can consider it as a capability that supports people, processes and decisions."
              points={[
                {
                  title: "More informed decisions",
                  description:
                    "AI-supported analysis can help teams identify patterns in business information, understand trends and explore possible actions.",
                },
                {
                  title: "Improved customer experiences",
                  description:
                    "Conversational assistants and intelligent support tools can help businesses respond to common customer needs more efficiently.",
                },
                {
                  title: "Smarter everyday operations",
                  description:
                    "AI can assist with repetitive information tasks, document workflows, content preparation and internal knowledge access.",
                },
                {
                  title: "A role for human oversight",
                  description:
                    "Business context, accountability and human judgement remain important when designing and using AI-enabled processes.",
                },
              ]}
              takeaway="Start with a specific business challenge, define what success looks like and select AI capabilities that support the people responsible for the outcome."
            />

            <ArticleSection
              id="business-automation"
              number="02"
              title="From Manual Work to Intelligent Automation"
              intro="Many business processes involve repeated actions across emails, spreadsheets, forms and different software tools. Intelligent automation connects these activities into more consistent workflows, helping teams reduce manual coordination and focus on work that requires human attention."
              points={[
                {
                  title: "Map the process first",
                  description:
                    "Understand how work currently moves between people and systems before deciding what should be automated.",
                },
                {
                  title: "Connect the right tools",
                  description:
                    "Integrations can help information move between business applications without repeated manual entry.",
                },
                {
                  title: "Build clear workflow rules",
                  description:
                    "Define triggers, responsibilities, approvals and exception handling so automated processes remain understandable.",
                },
                {
                  title: "Measure and improve",
                  description:
                    "Review process time, errors and user feedback to understand whether the automation is delivering meaningful value.",
                },
              ]}
              takeaway="Good automation is not simply about removing human involvement. It is about designing a better process with appropriate checks, ownership and visibility."
            />

            <ArticleSection
              id="connected-systems"
              number="03"
              title="Why Businesses Need Connected Digital Systems"
              intro="As organisations grow, they often adopt different tools for customer management, operations, finance, communication and reporting. When these systems do not work together, teams may face duplicate data, disconnected workflows and an incomplete view of business performance."
              points={[
                {
                  title: "A more consistent information flow",
                  description:
                    "Connected systems can reduce repeated data entry and help relevant information reach the teams that need it.",
                },
                {
                  title: "Better operational visibility",
                  description:
                    "Integrated information can give decision-makers a clearer picture of customer activity and business processes.",
                },
                {
                  title: "A more joined-up customer journey",
                  description:
                    "When customer-facing and internal systems are connected, teams can work from more consistent information.",
                },
                {
                  title: "A foundation for future growth",
                  description:
                    "A well-planned technology architecture can make it easier to add services, workflows and capabilities over time.",
                },
              ]}
              takeaway="Choose systems based on how your business works, how information needs to flow and how the technology can scale with future requirements."
            />

            <ArticleSection
              id="seo-aeo-geo"
              number="04"
              title="Understanding SEO, AEO and GEO"
              intro="People discover information through different kinds of search experiences. Traditional search engines, answer-focused experiences and generative AI tools each influence how content is found and understood. Businesses can create a stronger digital foundation by making their information useful, accessible and clearly structured."
              points={[
                {
                  title: "SEO: Search Engine Optimisation",
                  description:
                    "SEO focuses on improving a website's visibility in search engine results through useful content, technical quality and relevant site structure.",
                },
                {
                  title: "AEO: Answer Engine Optimisation",
                  description:
                    "AEO focuses on making content clear and useful for direct-answer experiences, including concise explanations and structured information.",
                },
                {
                  title: "GEO: Generative Engine Optimisation",
                  description:
                    "GEO focuses on making content understandable and useful in generative AI discovery experiences through clarity, relevance and credible information.",
                },
                {
                  title: "A connected content strategy",
                  description:
                    "Useful pages, consistent business information, accessible site architecture and genuine expertise support a stronger overall presence.",
                },
              ]}
              takeaway="SEO, AEO and GEO should support one another. Focus on creating accurate, helpful content for people rather than chasing search visibility alone."
            />

            <ArticleSection
              id="digital-foundation"
              number="05"
              title="Building a Digital Foundation for Business Growth"
              intro="A business's digital foundation includes more than its website. It also includes the systems, data, customer touchpoints and operational processes that support daily work. A thoughtful foundation helps organisations improve their current operations while preparing for future opportunities."
              points={[
                {
                  title: "A clear digital presence",
                  description:
                    "A professional website and consistent digital identity help people understand the business and its offerings.",
                },
                {
                  title: "Reliable business systems",
                  description:
                    "Choose software and platforms that support essential workflows and fit the organisation's actual requirements.",
                },
                {
                  title: "Secure and organised data",
                  description:
                    "Establish suitable access controls, data practices, backups and security measures for business information.",
                },
                {
                  title: "Room to adapt",
                  description:
                    "Plan for changing customer expectations, new integrations and evolving business needs.",
                },
              ]}
              takeaway="Build a digital foundation around business priorities. A practical, well-connected starting point is more useful than adopting tools without a clear purpose."
            />

            <ArticleSection
              id="business-intelligence"
              number="06"
              title="Turning Business Data into Useful Insights"
              intro="Businesses generate information through sales activity, customer interactions, operations and digital channels. Business intelligence helps organise and present relevant information so teams can understand performance, identify patterns and make more informed decisions."
              points={[
                {
                  title: "Bring relevant data together",
                  description:
                    "Identify important information sources and understand how data is collected, maintained and accessed.",
                },
                {
                  title: "Choose meaningful metrics",
                  description:
                    "Select measures that connect to business objectives instead of filling dashboards with numbers that do not guide action.",
                },
                {
                  title: "Make information easy to understand",
                  description:
                    "Well-designed dashboards and reports help users interpret trends, compare results and identify areas that need attention.",
                },
                {
                  title: "Turn findings into action",
                  description:
                    "Use insights to ask better questions, investigate performance and evaluate business decisions over time.",
                },
              ]}
              takeaway="Business intelligence creates value when reliable data is connected to meaningful questions and used as part of everyday decision-making."
            />
          </div>
        </div>
      </section>

      {/* OPV PERSPECTIVE */}
      <section className="bg-[#071426] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-300">
              The OPV perspective
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Technology with a clear business purpose.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              At OPV AI Realty Tech, we believe technology should connect
              business goals with practical execution. Our perspective is
              shaped by useful innovation, thoughtful implementation and a
              focus on long-term business capability.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 font-bold text-white">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-8 sm:p-12 lg:p-16">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-800">
                <Sparkles size={15} />
                Build what comes next
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                Have an idea for a smarter way to work?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Let's explore how AI, software and connected digital solutions
                can support your business goals.
              </p>
            </div>

            <div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#071426] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-emerald-800"
              >
                Talk to OPV
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}