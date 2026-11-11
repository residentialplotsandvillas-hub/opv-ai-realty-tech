
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

// ==========================================
// SEO METADATA
// ==========================================

export const metadata: Metadata = {
  title: {
    absolute:
      "Insights & Technology Perspectives | OPV AI Realty Tech",
  },
  description:
    "Explore insights from OPV AI Realty Tech on artificial intelligence, business automation, software engineering, digital transformation, data intelligence and business growth.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title:
      "Insights & Technology Perspectives | OPV AI Realty Tech",
    description:
      "Ideas, perspectives and practical knowledge for building smarter, more connected and AI-powered businesses.",
    url: "/insights",
    siteName: "OPV AI Realty Tech",
    type: "website",
  },
};

// ==========================================
// TOPICS
// ==========================================

const topics = [
  "Artificial Intelligence",
  "Business Automation",
  "Software & Technology",
  "Digital Transformation",
  "Business Intelligence",
  "Digital Growth",
];

// ==========================================
// KNOWLEDGE ARTICLES
// ==========================================

const articles = [
  {
    id: "ai-business",
    category: "Artificial Intelligence",
    readTime: "5 min read",
    title: "How AI Is Changing the Way Businesses Operate",
    excerpt:
      "Discover how artificial intelligence can support better decisions, improve customer experiences and make everyday business operations more efficient.",
    icon: BrainCircuit,
    intro:
      "Artificial intelligence is becoming an important part of how modern organisations analyse information, support customers and manage everyday work. Rather than viewing AI as a standalone technology, businesses can consider it as a capability that supports people, processes and decisions.",
    points: [
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
    ],
    takeaway:
      "Start with a specific business challenge, define what success looks like and select AI capabilities that support the people responsible for the outcome.",
  },
  {
    id: "business-automation",
    category: "Business Automation",
    readTime: "4 min read",
    title: "From Manual Work to Intelligent Automation",
    excerpt:
      "Understand how connected workflows and automation can reduce repetitive tasks and help teams focus on higher-value work.",
    icon: Workflow,
    intro:
      "Many business processes involve repeated actions across emails, spreadsheets, forms and different software tools. Intelligent automation connects these activities into more consistent workflows, helping teams reduce manual coordination and focus on work that requires human attention.",
    points: [
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
    ],
    takeaway:
      "Good automation is not simply about removing human involvement. It is about designing a better process with appropriate checks, ownership and visibility.",
  },
  {
    id: "connected-systems",
    category: "Software & Technology",
    readTime: "5 min read",
    title: "Why Businesses Need Connected Digital Systems",
    excerpt:
      "Explore why disconnected tools create operational friction and how integrated business systems provide a clearer view of operations.",
    icon: Code2,
    intro:
      "As organisations grow, they often adopt different tools for customer management, operations, finance, communication and reporting. When these systems do not work together, teams may face duplicate data, disconnected workflows and an incomplete view of business performance.",
    points: [
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
    ],
    takeaway:
      "Choose systems based on how your business works, how information needs to flow and how the technology can scale with future requirements.",
  },
  {
    id: "seo-aeo-geo",
    category: "Digital Growth",
    readTime: "6 min read",
    title: "Understanding SEO, AEO and GEO",
    excerpt:
      "Learn how search engine optimisation, answer engine optimisation and generative engine optimisation support digital visibility.",
    icon: Search,
    intro:
      "People discover information through different kinds of search experiences. Traditional search engines, answer-focused experiences and generative AI tools each influence how content is found and understood. Businesses can create a stronger digital foundation by making their information useful, accessible and clearly structured.",
    points: [
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
    ],
    takeaway:
      "SEO, AEO and GEO should support one another. Focus on creating accurate, helpful content for people rather than chasing search visibility alone.",
  },
  {
    id: "digital-foundation",
    category: "Digital Transformation",
    readTime: "5 min read",
    title: "Building a Digital Foundation for Business Growth",
    excerpt:
      "A practical look at the technology foundations businesses need to improve customer journeys and support sustainable growth.",
    icon: Globe2,
    intro:
      "A business's digital foundation includes more than its website. It also includes the systems, data, customer touchpoints and operational processes that support daily work. A thoughtful foundation helps organisations improve their current operations while preparing for future opportunities.",
    points: [
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
    ],
    takeaway:
      "Build a digital foundation around business priorities. A practical, well-connected starting point is more useful than adopting tools without a clear purpose.",
  },
  {
    id: "business-intelligence",
    category: "Business Intelligence",
    readTime: "4 min read",
    title: "Turning Business Data into Useful Insights",
    excerpt:
      "See how dashboards, reporting and business intelligence can turn operational data into more informed decisions.",
    icon: Database,
    intro:
      "Businesses generate information through sales activity, customer interactions, operations and digital channels. Business intelligence helps organise and present relevant information so teams can understand performance, identify patterns and make more informed decisions.",
    points: [
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
    ],
    takeaway:
      "Business intelligence creates value when reliable data is connected to meaningful questions and used as part of everyday decision-making.",
  },
];

// ==========================================
// OPV PRINCIPLES
// ==========================================

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

// ==========================================
// ARTICLE CONTENT COMPONENT
// ==========================================

type Article = (typeof articles)[number];

function ArticleSection({
  article,
  number,
}: {
  article: Article;
  number: string;
}) {
  return (
    <article
      id={article.id}
      className="scroll-mt-28 border-b border-[#E5E9E3] py-14 last:border-b-0 md:py-16"
    >
      <div className="grid gap-8 md:grid-cols-[160px_minmax(0,1fr)]">

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-[#F0F6F1] px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
            <BookOpen className="h-4 w-4" />
            Perspective {number}
          </span>
        </div>

        <div className="min-w-0">
          <h2 className="max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-[#263C50] md:text-3xl">
            {article.title}
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526577]">
            {article.intro}
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {article.points.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-6 transition hover:border-[#075B3B]/25 hover:shadow-sm"
              >
                <h3 className="font-extrabold text-[#263C50]">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#526577]">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-2xl border border-[#E5E9E3] border-l-4 border-l-[#C6A052] bg-[#F8F6F0] p-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#075B3B]">
              Key Takeaway
            </p>

            <p className="mt-3 text-sm leading-7 text-[#526577]">
              {article.takeaway}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

// ==========================================
// INSIGHTS PAGE
// ==========================================

export default function InsightsPage() {
  return (
    <main
      id="insights"
      className="min-h-screen overflow-hidden bg-white text-[#263C50]"
    >

      {/* ======================================
          01 — HERO
      ====================================== */}

      <section className="border-b border-[#E5E9E3] bg-[#F8F6F0]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-10 md:grid-cols-[1.2fr_0.8fr] md:py-24">

          {/* HERO CONTENT */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#075B3B]">
              <Sparkles className="h-4 w-4" />
              OPV Knowledge Hub
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-[#263C50] sm:text-5xl lg:text-6xl">
              Ideas for a
              <span className="text-[#075B3B]">
                {" "}Smarter
              </span>
              <span className="block">
                Digital Future.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#526577] sm:text-lg">
              Explore practical perspectives on AI,
              software, automation and digital growth.
              Discover how technology can help businesses
              work smarter, make better decisions and
              prepare for what comes next.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#latest-insights"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
              >
                Explore Insights
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:border-[#075B3B]"
              >
                Talk to Our Team
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* HERO KNOWLEDGE CARD */}

          <div className="mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-7 shadow-[0_20px_50px_rgba(38,60,80,0.05)] sm:p-9">

              <div className="flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0F6F1] text-[#075B3B]">
                  <BrainCircuit className="h-7 w-7" />
                </div>

                <span className="rounded-full border border-[#E5E9E3] bg-[#F8F6F0] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#075B3B]">
                  Think Forward
                </span>
              </div>

              <h2 className="mt-8 text-2xl font-extrabold leading-snug text-[#263C50]">
                Technology is more than tools.
                <span className="block text-[#075B3B]">
                  It is a way to move business forward.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#526577]">
                Knowledge, ideas and practical thinking
                for a more connected business world.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Artificial intelligence",
                  "Intelligent automation",
                  "Connected business systems",
                  "Digital growth and insights",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-3.5"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-xs font-extrabold text-[#C6A052]">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-semibold text-[#526577]">
                      {item}
                    </span>

                    <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-[#075B3B]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          02 — TOPIC STRIP
      ====================================== */}

      <section className="border-b border-[#E5E9E3] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-7 sm:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#647586]">
              Explore Topics
            </p>

            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-[#E5E9E3] bg-[#F8F6F0] px-3.5 py-2 text-xs font-semibold text-[#526577]"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          03 — FEATURED PERSPECTIVE
      ====================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
        <div className="grid overflow-hidden rounded-3xl border border-[#E5E9E3] bg-white md:grid-cols-2">

          {/* FEATURED VISUAL */}

          <div className="flex min-h-[320px] flex-col justify-between bg-[#F8F6F0] p-8 sm:p-10">

            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <Sparkles className="h-4 w-4" />
                Featured Perspective
              </span>

              <div className="mt-12 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#075B3B]">
                <BrainCircuit className="h-9 w-9" />
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#075B3B]">
                AI &amp; Business Transformation
              </p>

              <p className="mt-3 text-2xl font-extrabold leading-tight text-[#263C50] sm:text-3xl">
                The next chapter of business is intelligent,
                connected and adaptive.
              </p>
            </div>
          </div>

          {/* FEATURED DETAILS */}

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">

            <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
              <span>Artificial Intelligence</span>

              <span className="h-1 w-1 rounded-full bg-[#C6A052]" />

              <span className="flex items-center gap-1 text-[#647586]">
                <Clock3 className="h-3.5 w-3.5" />
                5 min read
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#263C50]">
              How AI Is Changing the Way Businesses Operate
            </h2>

            <p className="mt-5 text-base leading-8 text-[#526577]">
              Artificial intelligence is creating new ways
              to understand customers, support employees
              and improve business processes. Explore where
              AI can make a practical difference and why
              thoughtful implementation matters.
            </p>

            <Link
              href="#ai-business"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#075B3B] transition hover:gap-3"
            >
              Read the Perspective
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================
          04 — INSIGHTS GRID
      ====================================== */}

      <section
        id="latest-insights"
        className="scroll-mt-28 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
                Ideas &amp; Perspectives
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#263C50] sm:text-4xl">
                Explore Our Latest Insights
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#526577]">
                Foundational ideas and practical
                perspectives across the technologies
                shaping modern businesses.
              </p>
            </div>

            <span className="text-sm font-semibold text-[#647586]">
              {articles.length} Knowledge Articles
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => {
              const Icon = article.icon;

              return (
                <article
                  key={article.id}
                  className="group flex h-full flex-col rounded-2xl border border-[#E5E9E3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/25 hover:shadow-[0_15px_40px_rgba(38,60,80,0.06)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F6F1] text-[#075B3B] transition group-hover:bg-[#075B3B] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="text-xs font-bold text-[#C6A052]">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#075B3B]">
                    <span>{article.category}</span>

                    <span className="text-[#C6A052]">•</span>

                    <span className="flex items-center gap-1 text-[#647586]">
                      <Clock3 className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-extrabold leading-snug text-[#263C50]">
                    {article.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#526577]">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`#${article.id}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#075B3B] transition group-hover:gap-3"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================
          05 — COMPLETE ARTICLE CONTENT
      ====================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">

          {/* ARTICLE NAVIGATION */}

          <aside className="h-fit lg:sticky lg:top-28">

            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              Knowledge Hub
            </p>

            <h2 className="mt-3 text-xl font-extrabold text-[#263C50]">
              Browse the Perspectives
            </h2>

            <nav
              aria-label="Article navigation"
              className="mt-6 flex flex-col gap-2"
            >
              {articles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`#${article.id}`}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#526577] transition hover:bg-[#F0F6F1] hover:text-[#075B3B]"
                >
                  <span className="mr-2 text-xs font-extrabold text-[#C6A052]">
                    0{index + 1}
                  </span>

                  {article.title}
                </Link>
              ))}
            </nav>
          </aside>

          {/* ALL SIX FULL ARTICLES */}

          <div className="min-w-0">
            {articles.map((article, index) => (
              <ArticleSection
                key={article.id}
                article={article}
                number={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          06 — OPV PERSPECTIVE
      ====================================== */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              The OPV Perspective
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#263C50] sm:text-4xl">
              Technology with a Clear Business Purpose.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#526577]">
              At OPV AI Realty Tech, we believe technology
              should connect business goals with practical
              execution. Our perspective is shaped by useful
              innovation, thoughtful implementation and
              a focus on long-term business capability.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F6F1] text-[#075B3B]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-extrabold text-[#263C50]">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#526577]">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================
          07 — FINAL CTA
      ====================================== */}

      <section className="bg-white px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] p-8 sm:p-12 lg:p-16">

          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">

            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
                <Sparkles className="h-4 w-4" />
                Build What Comes Next
              </p>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#263C50] sm:text-4xl">
                Have an Idea for a Smarter Way to Work?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#526577]">
                Let&apos;s explore how AI, software and
                connected digital solutions can support
                your business goals.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
              >
                Talk to OPV
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
