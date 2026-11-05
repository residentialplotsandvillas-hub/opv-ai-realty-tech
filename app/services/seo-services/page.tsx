
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  FileText,
  MapPin,
  MousePointerClick,
  Megaphone,
  CheckCircle2,
  Lightbulb,
  Gauge,
  Link2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Services & Digital Marketing Company in India | OPV AI Realty Tech",
  description:
    "Grow your online presence with SEO services, technical SEO, local SEO, content marketing, website optimization and digital growth strategies from OPV AI Realty Tech.",
  alternates: {
    canonical: "/services/seo-digital-growth",
  },
  openGraph: {
    title: "SEO Services & Digital Growth | OPV AI Realty Tech",
    description:
      "Explore search engine optimization, local SEO, content strategy and digital marketing solutions for business growth.",
    url: "https://www.opvairealtytech.com/services/seo-digital-growth",
    siteName: "OPV AI Realty Tech",
    type: "website",
  },
};

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Improve your website's search visibility through keyword research, on-page optimization, content improvements and search-focused website structure.",
  },
  {
    icon: Gauge,
    title: "Technical SEO",
    description:
      "Review website indexing, crawlability, page performance, mobile usability, structured data and technical issues that affect search accessibility.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Improve local search presence through location-focused website content, business profile optimization and relevant local search signals.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Plan useful website content, service pages, landing pages and blog articles around customer questions and relevant search intent.",
  },
  {
    icon: Link2,
    title: "On-Page SEO",
    description:
      "Optimize page titles, meta descriptions, headings, internal links, image descriptions and page content for better search understanding.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Strategy",
    description:
      "Plan digital marketing activities across relevant online channels to support brand visibility, audience engagement and business enquiries.",
  },
];

const seoActivities = [
  "Keyword research and search intent analysis",
  "Competitor website analysis",
  "SEO-friendly website architecture",
  "Technical SEO audits",
  "Page title and meta description optimization",
  "Heading structure and content optimization",
  "Internal linking strategy",
  "Image optimization and alt text",
  "XML sitemap and robots.txt review",
  "Schema markup implementation",
  "Local SEO optimization",
  "Search performance monitoring",
];

const growthChannels = [
  {
    title: "Organic Search",
    description:
      "Build long-term search visibility through technical improvements, useful content and relevant keyword targeting.",
  },
  {
    title: "Content Strategy",
    description:
      "Create educational and service-focused content that addresses customer questions and supports their decision-making.",
  },
  {
    title: "Local Search",
    description:
      "Improve visibility for location-based searches and help potential customers discover relevant business information.",
  },
  {
    title: "Conversion Optimization",
    description:
      "Review landing pages, calls to action, enquiry forms and user journeys to make it easier for visitors to take action.",
  },
];

const benefits = [
  "Improve website search visibility",
  "Build relevant organic traffic opportunities",
  "Reach audiences searching for your services",
  "Improve website content structure",
  "Strengthen local search presence",
  "Create better website user journeys",
  "Support qualified enquiry generation",
  "Measure performance using analytics",
];

const process = [
  {
    number: "01",
    title: "Website & SEO Audit",
    description:
      "Review website structure, indexing, technical performance, existing content and current search visibility.",
  },
  {
    number: "02",
    title: "Keyword & Growth Strategy",
    description:
      "Identify relevant search terms, customer intent, content opportunities and priority pages.",
  },
  {
    number: "03",
    title: "Optimization & Implementation",
    description:
      "Improve technical SEO, page content, internal linking, local search elements and conversion paths.",
  },
  {
    number: "04",
    title: "Monitoring & Improvement",
    description:
      "Review search performance, website analytics and enquiry activity to identify further opportunities.",
  },
];

const faqs = [
  {
    question: "What SEO services does OPV AI Realty Tech provide?",
    answer:
      "OPV's SEO and digital growth service areas include search engine optimization, technical SEO, local SEO, on-page optimization, content strategy, website optimization and digital marketing planning.",
  },
  {
    question: "What is technical SEO?",
    answer:
      "Technical SEO focuses on website elements such as crawlability, indexing, site architecture, page performance, mobile usability, sitemaps and structured data.",
  },
  {
    question: "What is local SEO?",
    answer:
      "Local SEO helps businesses improve their visibility for location-related searches through relevant website content, business profile information and local search optimization.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO timelines vary based on website condition, competition, content quality, industry and implementation. Search improvements generally require consistent work and monitoring over time.",
  },
  {
    question: "Do you provide SEO for real estate websites?",
    answer:
      "SEO strategies can be developed for real estate websites, including location-focused landing pages, property-related content, technical optimization and relevant internal linking.",
  },
  {
    question: "Can SEO improve website enquiries?",
    answer:
      "SEO can attract relevant search visitors, while conversion improvements such as clear service information, contact options and enquiry forms can help visitors take the next step. Results depend on multiple factors.",
  },
  {
    question: "Do you guarantee first-page Google rankings?",
    answer:
      "No responsible SEO provider can guarantee a specific Google ranking. SEO work focuses on improving website quality, relevance, technical accessibility and search performance.",
  },
];

export default function SEODigitalGrowthPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="bg-white">
      {/* FAQ STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#033505] py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#E7B30F]/15 blur-[120px]" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#265921]/50 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E7B30F]/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#F4D545]">
            <TrendingUp className="h-4 w-4" />
            SEO & Digital Growth
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            SEO Services & Digital Marketing
            <span className="block text-[#F4D545]">
              for Sustainable Online Growth
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech helps businesses strengthen
            their online presence through search engine
            optimization, technical SEO, content strategy,
            local SEO and digital growth solutions.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Grow Your Online Presence
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:border-[#F4D545] hover:text-[#F4D545]"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Search Visibility & Digital Strategy
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Help the Right Customers Discover Your Business Online
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Your website is an important part of your
              digital presence. However, simply publishing
              a website does not ensure that potential
              customers will discover it through search engines.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Search engine optimization combines technical
              improvements, useful content, keyword targeting
              and website structure to help search engines
              understand your pages and connect them with
              relevant searches.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              OPV AI Realty Tech approaches digital growth
              by considering your industry, target audience,
              website condition and business objectives.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <TrendingUp className="h-12 w-12 text-[#F4D545]" />

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Better Visibility.
              <span className="block text-[#F4D545]">
                Stronger Digital Presence.
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              Build a digital growth strategy around
              relevant search opportunities, useful content
              and a website experience designed for visitors.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Search engine optimization",
                "Technical and on-page SEO",
                "Content and local SEO",
                "Website conversion improvements",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F4D545]" />
                  <span className="text-sm font-medium text-white/85">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our Digital Growth Services
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Complete SEO & Digital Marketing Solutions
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Improve your website's search accessibility,
              content relevance and digital customer journey
              through a structured optimization approach.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#E7B30F]/60 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-[#033505]/5 p-3">
                    <Icon className="h-7 w-7 text-[#265921]" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#033505]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO ACTIVITIES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              SEO Optimization Checklist
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Build a Strong Technical and Content SEO Foundation
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Effective SEO requires attention to both
              website infrastructure and the content users
              find on your pages. The work should be prioritized
              according to your website's actual needs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {seoActivities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-[#F8FAF7] p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B88A00]" />
                <span className="text-sm font-semibold leading-6 text-[#033505]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL GROWTH */}
      <section className="bg-[#033505] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#F4D545]">
              Digital Growth Strategy
            </span>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Go Beyond Website Rankings
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              Digital growth involves attracting relevant
              visitors, communicating your value and helping
              potential customers take meaningful action.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {growthChannels.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6"
              >
                <h3 className="text-xl font-bold text-[#F4D545]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/75">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Industry-Focused SEO
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Digital Growth Strategies for Different Industries
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Search strategies should reflect the language,
              needs and search behaviour of each target audience.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Real Estate",
                text: "Location-focused landing pages, property content and local search optimization.",
              },
              {
                title: "Technology",
                text: "Service pages, technical content and search strategies for technology businesses.",
              },
              {
                title: "Professional Services",
                text: "Expertise-focused content and local visibility for professional firms.",
              },
              {
                title: "Startups & SMEs",
                text: "Search foundations and content strategies aligned with business growth goals.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 p-6 transition hover:border-[#E7B30F] hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-[#033505]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Business Benefits
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Create More Opportunities Through Digital Visibility
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A consistent digital growth strategy can help
              businesses build their online presence and
              create more relevant opportunities to connect
              with potential customers.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B88A00]" />
                <span className="text-sm font-semibold leading-6 text-[#033505]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Our SEO & Digital Growth Process
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <span className="text-3xl font-black text-[#B88A00]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-[#033505]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Common Questions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              SEO & Digital Marketing FAQs
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-lg font-bold text-[#033505]">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-xl font-extrabold text-[#033505]">
            Explore Related Services
          </h2>

          <div className="mt-5 flex flex-wrap gap-5">
            <Link
              href="/services/website-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Website Development →
            </Link>

            <Link
              href="/services/ai-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              AI Development →
            </Link>

            <Link
              href="/services/business-automation"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Business Automation →
            </Link>

            <Link
              href="/services/data-analytics"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Data Analytics →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#033505] px-5 py-20 text-center text-white sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7B30F]/15">
            <Lightbulb className="h-7 w-7 text-[#F4D545]" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            Ready to Strengthen Your Digital Presence?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Share your website, target audience and business
            goals. Let's discuss an SEO and digital growth
            strategy for your organization.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
          >
            Discuss Your Growth Strategy
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
