
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  FileText,
  Globe2,
  MapPin,
  Megaphone,
  Phone,
  Rocket,
  Search,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

// =============================================
// OPV AI REALTY TECH - DIGITAL GROWTH & MARKETING
// Next.js App Router + TypeScript + Tailwind CSS
// =============================================

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_PATH = "/solutions/digital-growth-marketing";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Digital Marketing, SEO, AEO & GEO in Hyderabad | OPV AI";

const PAGE_DESCRIPTION =
  "Explore digital marketing services in Hyderabad, including SEO, AEO, GEO, content marketing, lead generation and analytics with OPV AI Realty Tech.";

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Digital marketing company in Hyderabad",
    "Digital marketing services Hyderabad",
    "SEO company in Hyderabad",
    "SEO services Hyderabad",
    "Answer Engine Optimization services",
    "AEO services Hyderabad",
    "Generative Engine Optimization services",
    "GEO services Hyderabad",
    "AI search optimization",
    "AI SEO services India",
    "Lead generation company Hyderabad",
    "B2B lead generation services",
    "Content marketing services Hyderabad",
    "Website SEO optimization",
    "Technical SEO services",
    "On-page SEO services",
    "Local SEO services Hyderabad",
    "Digital marketing analytics",
    "Conversion rate optimization",
    "Digital growth strategy",
    "OPV AI Realty Tech",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "OPV AI Realty Tech",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

// =============================================
// SERVICES
// =============================================

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve website discoverability through technical SEO, on-page optimization, website architecture, internal linking and useful search-focused content.",
  },
  {
    icon: Sparkles,
    title: "Answer Engine Optimization (AEO)",
    description:
      "Organize direct, useful answers and structured website content to improve clarity for answer-focused search experiences.",
  },
  {
    icon: Bot,
    title: "Generative Engine Optimization (GEO)",
    description:
      "Develop clear, relevant and trustworthy content that supports brand discoverability across generative AI and AI-assisted search experiences.",
  },
  {
    icon: FileText,
    title: "Content Strategy & Marketing",
    description:
      "Plan service pages, landing pages, articles and educational content around audience needs, business goals and relevant search topics.",
  },
  {
    icon: Target,
    title: "Lead Generation Strategy",
    description:
      "Develop landing pages, enquiry pathways, conversion-focused content and customer journeys designed to engage relevant prospects.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing Analytics",
    description:
      "Review website activity, campaign results, engagement and conversion indicators to support more informed marketing decisions.",
  },
];

// =============================================
// DIGITAL GROWTH CHANNELS
// =============================================

const growthChannels = [
  {
    icon: Globe2,
    title: "Organic Search",
    description:
      "Create search-friendly website structures and helpful content around relevant customer questions.",
  },
  {
    icon: Megaphone,
    title: "Digital Campaigns",
    description:
      "Plan campaign messaging, landing pages and audience journeys aligned with marketing objectives.",
  },
  {
    icon: Share2,
    title: "Social Media Presence",
    description:
      "Build consistent brand communication and useful content across appropriate social media platforms.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "Create clearer pathways for prospective customers to discover services and submit enquiries.",
  },
];

// =============================================
// SEO / AEO / GEO
// =============================================

const searchStrategies = [
  {
    icon: Search,
    short: "SEO",
    title: "Search Engine Optimization",
    description:
      "Strengthen technical foundations, search-friendly page structure, internal links and helpful content for traditional search engines.",
  },
  {
    icon: Sparkles,
    short: "AEO",
    title: "Answer Engine Optimization",
    description:
      "Create clear explanations, direct answers and well-organized information for answer-oriented discovery experiences.",
  },
  {
    icon: Bot,
    short: "GEO",
    title: "Generative Engine Optimization",
    description:
      "Improve content clarity, factual consistency and brand context for discovery through generative AI search experiences.",
  },
];

// =============================================
// CAPABILITIES
// =============================================

const capabilities = [
  "Technical SEO assessments",
  "On-page SEO optimization",
  "Website architecture and internal linking",
  "Keyword research and search intent mapping",
  "Local SEO planning",
  "Answer Engine Optimization (AEO)",
  "Generative Engine Optimization (GEO)",
  "Content planning and optimization",
  "Business and service landing pages",
  "Lead generation journeys",
  "Conversion optimization considerations",
  "Digital marketing analytics and reporting",
];

// =============================================
// BENEFITS
// =============================================

const benefits = [
  {
    title: "Stronger Digital Discoverability",
    description:
      "Improve the relevance, organization and clarity of website content for audiences and search experiences.",
  },
  {
    title: "More Relevant Website Visitors",
    description:
      "Develop content and marketing strategies around the needs and search intent of your target audience.",
  },
  {
    title: "Clearer Customer Journeys",
    description:
      "Connect discovery, service exploration and enquiry pathways through a more organized website experience.",
  },
  {
    title: "Measurable Marketing Activity",
    description:
      "Use analytics and reporting to review website performance, engagement and conversion opportunities.",
  },
];

// =============================================
// PROCESS
// =============================================

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your business, target audience, website and growth objectives.",
  },
  {
    number: "02",
    title: "Research",
    description:
      "Review search topics, audience intent, competitors and digital opportunities.",
  },
  {
    number: "03",
    title: "Plan",
    description:
      "Define SEO, AEO, GEO, content and lead generation priorities.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Develop and implement agreed website, content and marketing improvements.",
  },
  {
    number: "05",
    title: "Measure & Improve",
    description:
      "Review performance indicators and refine activities as requirements evolve.",
  },
];

// =============================================
// FAQs
// =============================================

const faqs = [
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing involves using online channels such as search engines, websites, content, social media and digital campaigns to connect businesses with relevant audiences.",
  },
  {
    question: "Does OPV AI Realty Tech offer digital marketing services in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad and offers digital growth solutions including SEO, AEO, GEO, content strategy, lead generation planning and marketing analytics.",
  },
  {
    question: "What is the difference between SEO, AEO and GEO?",
    answer:
      "SEO focuses on website discoverability through search engines. AEO focuses on clear and useful answers for answer-oriented experiences. GEO focuses on content clarity and discoverability in generative AI search experiences. These approaches overlap and work best with accurate, helpful content.",
  },
  {
    question: "Can SEO help a business generate leads?",
    answer:
      "SEO can help relevant audiences discover a business through organic search. Effective lead generation also depends on search intent, landing page quality, service relevance and clear enquiry pathways.",
  },
  {
    question: "What is local SEO?",
    answer:
      "Local SEO focuses on helping businesses present relevant and accurate information for location-based searches, including business profiles, location pages and locally useful website content.",
  },
  {
    question: "Can GEO guarantee visibility in AI-generated answers?",
    answer:
      "No. Generative AI platforms determine their own outputs and source selection. GEO practices may improve content clarity and discoverability, but no placement, citation or ranking can be guaranteed.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO results vary according to competition, website condition, search demand, content quality and implementation. Meaningful organic performance improvements often require sustained work over several months.",
  },
  {
    question: "How much do digital marketing services cost in Hyderabad?",
    answer:
      "Pricing depends on website size, competition, service scope, content requirements, campaign activity and reporting needs. An assessment of business objectives is needed for an accurate proposal.",
  },
];

// =============================================
// STRUCTURED DATA
// =============================================

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "OPV AI Realty Tech Private Limited",
      url: SITE_URL,
      telephone: "+91-9963513939",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      name: PAGE_TITLE,
      url: PAGE_URL,
      description: PAGE_DESCRIPTION,
      inLanguage: "en-IN",
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      about: {
        "@id": `${PAGE_URL}#service`,
      },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Digital Growth & Marketing Services",
      serviceType:
        "Digital Marketing, SEO, AEO, GEO and Lead Generation",
      url: PAGE_URL,
      description: PAGE_DESCRIPTION,
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Hyderabad",
        },
        {
          "@type": "State",
          name: "Telangana",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Growth Services",
        itemListElement: services.map((service) => ({
          "@type": "OfferCatalog",
          name: service.title,
          description: service.description,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: `${SITE_URL}/solutions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Digital Growth & Marketing",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// =============================================
// PAGE COMPONENT
// =============================================

export default function DigitalGrowthMarketingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#263C50]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* HERO */}

      <section className="border-b border-[#E5E9E3] bg-[#F8F6F0]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
          <nav aria-label="Breadcrumb" className="mb-9">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-[#647586]">
              <li>
                <Link href="/" className="hover:text-[#075B3B]">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3 w-3" />
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-[#075B3B]"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3 w-3" />
              </li>
              <li
                aria-current="page"
                className="font-semibold text-[#075B3B]"
              >
                Digital Growth & Marketing
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <TrendingUp className="h-4 w-4" />
                Digital Growth & Marketing
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                Digital Marketing,
                <span className="block text-[#075B3B]">
                  SEO, AEO & GEO
                </span>
                <span className="mt-3 block text-2xl font-bold text-[#526577] sm:text-3xl">
                  Solutions in Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#526577] sm:text-lg">
                Get discovered. Engage relevant audiences.
                Create opportunities for business growth.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                OPV AI Realty Tech helps businesses
                improve digital discoverability through
                SEO, AEO, GEO, useful content,
                lead generation strategies and
                marketing performance analytics.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your Growth Strategy
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:bg-[#F0F6F1]"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-8 flex items-center gap-2 text-sm text-[#647586]">
                <MapPin className="h-4 w-4 text-[#075B3B]" />
                Hyderabad, Telangana · Serving businesses across India
              </p>
            </div>

            {/* HERO GROWTH VISUAL */}

            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-7 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">
              <div className="flex items-center justify-between border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Digital Growth
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold">
                    Connected Growth Strategy
                  </h2>
                </div>

                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <TrendingUp className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Search,
                    title: "SEO",
                    description: "Organic search visibility",
                  },
                  {
                    icon: Sparkles,
                    title: "AEO",
                    description: "Answer-focused content",
                  },
                  {
                    icon: Bot,
                    title: "GEO",
                    description: "AI search discoverability",
                  },
                  {
                    icon: Target,
                    title: "Lead Generation",
                    description: "Customer enquiry journeys",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-5"
                    >
                      <Icon className="h-7 w-7 text-[#075B3B]" />

                      <h3 className="mt-4 font-extrabold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-[#526577]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-5">
                <p className="text-sm font-bold">
                  Digital Growth Framework
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {[
                    "Discover",
                    "Engage",
                    "Convert",
                    "Improve",
                  ].map((stage, index) => (
                    <div
                      key={stage}
                      className="flex items-center gap-2"
                    >
                      <span className="rounded-lg border border-[#075B3B]/15 bg-white px-3 py-2 text-xs font-bold text-[#075B3B]">
                        {stage}
                      </span>

                      {index < 3 && (
                        <ArrowRight className="h-3 w-3 text-[#C6A052]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#F0F6F1] p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#075B3B]" />
                <p className="text-sm font-medium">
                  Marketing activities aligned with business goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Build Your Digital Presence
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Digital Marketing That Connects Visibility with Business Growth
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Growing a digital business involves more
              than launching a website. Customers
              need to discover your services,
              understand your value and find
              a clear way to connect with you.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              A coordinated approach to search,
              content, digital campaigns and lead
              generation can create a more useful
              customer journey from discovery
              through enquiry.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="scroll-mt-24 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Digital Marketing Services
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              SEO, AEO, GEO & Digital Growth Services
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Explore digital marketing capabilities
              designed to support brand discoverability,
              customer engagement and business goals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-[#526577]">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* GROWTH CHANNELS */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Digital Growth Channels
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Reach Your Audience Across Digital Channels
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Different digital channels support
              different stages of the customer
              journey. Their roles should be
              considered as part of one
              connected marketing strategy.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {growthChannels.map((channel) => {
              const Icon = channel.icon;

              return (
                <article
                  key={channel.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-6 transition hover:border-[#075B3B]/30 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold">
                    {channel.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#526577]">
                    {channel.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO + AEO + GEO */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Search in the AI Era
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              SEO + AEO + GEO: A Broader Approach to Discoverability
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Search behavior continues to evolve.
              Businesses need accurate, helpful
              and well-organized information
              that serves people across traditional
              search engines and AI-powered experiences.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {searchStrategies.map((strategy) => {
              const Icon = strategy.icon;

              return (
                <article
                  key={strategy.short}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-8"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-3xl font-extrabold text-[#075B3B]">
                    {strategy.short}
                  </h3>

                  <p className="mt-2 text-sm font-bold text-[#98732F]">
                    {strategy.title}
                  </p>

                  <p className="mt-5 leading-8 text-[#526577]">
                    {strategy.description}
                  </p>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm text-[#647586]">
            Search rankings, AI citations and platform placements
            depend on multiple factors and cannot be guaranteed.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Digital Growth Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              A Connected Digital Growth Toolkit
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Every business has different audiences
              and growth priorities. We help identify
              relevant marketing activities and
              organize them into a practical
              digital growth strategy.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#075B3B] hover:underline"
            >
              Discuss Your Marketing Requirements
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-4"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#075B3B]" />

                <span className="text-sm font-medium leading-7 text-[#526577]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFITS */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Business Value
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Turn Digital Activity into Growth Opportunities
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A coordinated marketing strategy
              can connect digital visibility,
              audience engagement and
              customer enquiry generation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-7"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                  Benefit {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-4 text-xl font-extrabold">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-8 text-[#526577]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Our Digital Marketing & Growth Process
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A structured approach keeps marketing
              activities aligned with your audience,
              business objectives and relevant
              performance indicators.
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-6"
              >
                <span className="text-3xl font-black text-[#C6A052]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-extrabold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#526577]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Digital Marketing, SEO, AEO & GEO FAQs
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Common questions about search
              visibility, AI-era discoverability
              and digital business growth.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#E5E9E3] bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold [&::-webkit-details-marker]:hidden">
                  {faq.question}

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl text-[#075B3B] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-5 border-t border-[#E5E9E3] pt-5 text-sm leading-8 text-[#526577]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SOLUTIONS */}

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className="text-2xl font-extrabold">
            Explore Related Technology Solutions
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#526577]">
            Connect digital marketing with
            AI automation, customer management
            and business intelligence.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "AI & Intelligent Automation",
                href: "/solutions/ai-intelligent-automation",
              },
              {
                title: "Data & Business Intelligence",
                href: "/solutions/data-business-intelligence",
              },
              {
                title: "CRM, ERP & Business Systems",
                href: "/solutions/crm-erp-business-systems",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between gap-4 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-5 transition hover:border-[#075B3B]/30"
              >
                <span className="text-sm font-bold">
                  {item.title}
                </span>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#075B3B]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="bg-[#075B3B] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Rocket className="h-7 w-7 text-[#E9CF91]" />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold sm:text-4xl">
            Ready to Build Your Digital Growth Strategy?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Tell us about your website, SEO,
            marketing objectives and lead
            generation requirements. Explore
            a strategy aligned with your business.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your Growth Plan
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="tel:+919963513939"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              +91 99635 13939
            </a>
          </div>

          <p className="mt-9 text-xs tracking-widest text-white/65">
            OPV AI REALTY TECH PRIVATE LIMITED
          </p>

          <p className="mt-2 text-sm font-medium text-white/80">
            Build Smarter • Automate Better • Grow Faster
          </p>
        </div>
      </section>
    </main>
  );
}
