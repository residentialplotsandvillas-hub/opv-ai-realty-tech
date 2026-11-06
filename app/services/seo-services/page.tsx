import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  TrendingUp,
  BarChart3,
  FileText,
  MapPin,
  MousePointerClick,
  Megaphone,
  CheckCircle2,
  Lightbulb,
  Gauge,
  Link2,
  Bot,
  Building2,
  Layers,
  Scale,
} from "lucide-react";

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_PATH = "/services/seo-digital-growth";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/opv-og-image.jpg`;

const PAGE_TITLE = "SEO Company in Hyderabad | SEO, AEO & GEO | OPV AI Realty Tech";
const PAGE_DESCRIPTION =
  "Technical SEO, local SEO, content marketing and AI search optimisation (AEO & GEO) for businesses in Hyderabad. Get found on Google and AI assistants.";

export const metadata: Metadata = {
  // `absolute` bypasses the layout's title.template, so the brand is not added twice
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "SEO Company in Hyderabad | OPV AI Realty Tech",
    description:
      "Technical SEO, local SEO, content and AI search optimisation to help customers find your business on Google and AI assistants.",
    url: PAGE_URL,
    siteName: "OPV AI Realty Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "SEO and digital growth services by OPV AI Realty Tech, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Company in Hyderabad | OPV AI Realty Tech",
    description:
      "Technical SEO, local SEO, content marketing and AI search optimisation (AEO & GEO).",
    images: [OG_IMAGE],
  },
};

const services = [
  {
    icon: Search,
    title: "Search Engine Optimisation",
    description:
      "Keyword research, on-page optimisation and content improvements that help your service pages rank for searches your customers actually make.",
  },
  {
    icon: Gauge,
    title: "Technical SEO",
    description:
      "Fix crawl and indexing issues, broken links, slow pages, mobile problems, duplicate titles and missing structured data.",
  },
  {
    icon: MapPin,
    title: "Local SEO & Google Business Profile",
    description:
      "Set up and optimise your Google Business Profile, local citations and location pages to appear in Google Maps and \"near me\" searches.",
  },
  {
    icon: Bot,
    title: "AEO & GEO (AI Search Optimisation)",
    description:
      "Structure your content, FAQs and schema so ChatGPT, Gemini, Perplexity and Google AI Overviews can understand and cite your business.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Service pages, landing pages and blog articles written around real customer questions, with clear answers and expert detail.",
  },
  {
    icon: Link2,
    title: "On-Page SEO",
    description:
      "Optimised titles, meta descriptions, headings, internal links, image alt text and page copy for every important page.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion Optimisation",
    description:
      "Clearer calls to action, faster pages and simpler enquiry forms so more visitors become leads.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Strategy",
    description:
      "A joined-up plan across search, social and paid channels, focused on qualified enquiries rather than vanity metrics.",
  },
];

const seoActivities = [
  "Keyword research and search intent analysis",
  "Competitor website analysis",
  "SEO-friendly site architecture",
  "Full technical SEO audit",
  "Title and meta description optimisation",
  "Heading structure and content optimisation",
  "Internal linking strategy",
  "Image optimisation and alt text",
  "XML sitemap and robots.txt setup",
  "Schema markup (Organization, Service, FAQ)",
  "Google Search Console and Analytics setup",
  "Core Web Vitals and page speed fixes",
  "Google Business Profile optimisation",
  "Monthly ranking and traffic reports",
];

const comparison = [
  {
    label: "Where results appear",
    seo: "Google and Bing search results",
    aeo: "Featured snippets, voice and \"People also ask\"",
    geo: "ChatGPT, Gemini, Perplexity, AI Overviews",
  },
  {
    label: "Main goal",
    seo: "Rank pages and earn clicks",
    aeo: "Be the direct answer",
    geo: "Be cited or recommended by AI",
  },
  {
    label: "Key tactics",
    seo: "Keywords, technical fixes, links",
    aeo: "Clear Q&A, FAQs, schema",
    geo: "Expert content, brand mentions, consistent facts",
  },
];

const industries = [
  {
    title: "Real Estate SEO",
    text: "Location pages for areas like Madhapur, Gachibowli and Kokapet, project pages, property content and local search.",
  },
  {
    title: "Technology & SaaS",
    text: "Service pages, comparison content and technical articles that reach business buyers.",
  },
  {
    title: "Healthcare & Clinics",
    text: "Local SEO, doctor and service pages, and Google Business Profile reviews.",
  },
  {
    title: "Education",
    text: "Course pages, admission content and local visibility for institutes and schools.",
  },
  {
    title: "Professional Services",
    text: "Expertise-led content and local presence for consultants, firms and agencies.",
  },
  {
    title: "Startups & SMEs",
    text: "Strong SEO foundations from launch, with content that grows with the business.",
  },
];

const tools = [
  "Google Search Console",
  "Google Analytics 4",
  "Google Business Profile",
  "PageSpeed Insights",
  "Ahrefs / Semrush",
  "Screaming Frog",
  "Schema.org markup",
  "Rich Results Test",
];

const benefits = [
  "More visibility for high-intent searches",
  "Steady organic traffic without ad spend",
  "Appear in Google Maps and local results",
  "Get mentioned in AI assistant answers",
  "Faster, healthier website",
  "Clearer, better-structured content",
  "More qualified enquiries",
  "Transparent monthly reporting",
];

const process = [
  {
    number: "01",
    title: "SEO Audit",
    description:
      "We review your website's technical health, content, rankings, competitors and Google Business Profile.",
  },
  {
    number: "02",
    title: "Keyword & Content Strategy",
    description:
      "We pick the keywords and questions that bring buyers, and plan the pages and content to target them.",
  },
  {
    number: "03",
    title: "Optimisation & Content",
    description:
      "We fix technical issues, optimise existing pages, add schema and publish new content.",
  },
  {
    number: "04",
    title: "Reporting & Growth",
    description:
      "We track rankings, traffic and enquiries every month and keep improving what works.",
  },
];

const faqs = [
  {
    question: "What SEO services does OPV AI Realty Tech provide?",
    answer:
      "We provide technical SEO, on-page SEO, local SEO and Google Business Profile optimisation, content marketing, AI search optimisation (AEO and GEO), conversion optimisation and digital marketing strategy for businesses in Hyderabad and across India.",
  },
  {
    question: "What is technical SEO?",
    answer:
      "Technical SEO fixes the parts of a website that affect how search engines crawl and index it, such as site structure, page speed, mobile usability, broken links, sitemaps, robots.txt and structured data.",
  },
  {
    question: "What is local SEO?",
    answer:
      "Local SEO helps your business appear in location-based searches and Google Maps. It includes Google Business Profile optimisation, consistent business details across directories, local landing pages and customer reviews.",
  },
  {
    question: "What are AEO and GEO?",
    answer:
      "AEO (Answer Engine Optimisation) structures content so it appears as direct answers in featured snippets and voice search. GEO (Generative Engine Optimisation) helps AI assistants like ChatGPT, Gemini and Perplexity understand and cite your business.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "Technical fixes can show impact within weeks, but meaningful ranking and traffic growth usually takes 3 to 6 months, depending on competition, your website's starting point and how consistently content is published.",
  },
  {
    question: "Do you provide SEO for real estate websites?",
    answer:
      "Yes. Real estate is our specialist domain. We build location pages, project and property content, local SEO and internal linking for developers, agents and property portals.",
  },
  {
    question: "Can SEO increase my website enquiries?",
    answer:
      "Yes, when SEO brings the right visitors and the website makes it easy to contact you. We combine ranking work with conversion improvements such as clear calls to action and simple enquiry forms.",
  },
  {
    question: "Do you guarantee first-page Google rankings?",
    answer:
      "No. No responsible SEO provider can guarantee a specific Google ranking. We focus on measurable improvements in technical health, visibility, traffic and enquiries, and report on them every month.",
  },
  {
    question: "Do you work with businesses outside Hyderabad?",
    answer:
      "Yes. Our office is in Madhapur, Hyderabad, and we work with businesses across India and abroad through remote collaboration.",
  },
];

export default function SEODigitalGrowthPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "SEO & Digital Growth Services",
        serviceType: "Search Engine Optimization",
        description: PAGE_DESCRIPTION,
        url: PAGE_URL,
        provider: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "OPV AI Realty Tech Private Limited",
          url: SITE_URL,
          telephone: "+91-9963513939",
          email: "info@opvairealtytech.com",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "#101, Road No: 10, Jaya Kesav Avenue, Kakatiya Hills, Madhapur",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
        },
        areaServed: [
          { "@type": "City", name: "Hyderabad" },
          { "@type": "Country", name: "India" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "SEO & Digital Growth Services",
          itemListElement: services.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              description: item.description,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "SEO & Digital Growth",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
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
          {/* Visible breadcrumb (matches BreadcrumbList schema) */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#F4D545]">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="hover:text-[#F4D545]">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/85">
                SEO & Digital Growth
              </li>
            </ol>
          </nav>

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E7B30F]/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#F4D545]">
            <TrendingUp className="h-4 w-4" aria-hidden="true" />
            SEO, AEO & Digital Growth
          </div>

          {/* {" "} keeps a real space between the two lines for crawlers and screen readers */}
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            SEO Company in Hyderabad{" "}
            <span className="block text-[#F4D545]">
              Get Found on Google and AI Search
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech helps businesses in Hyderabad and across
            India rank higher on Google, appear in Google Maps and get
            recommended by AI assistants like ChatGPT and Gemini, with
            technical SEO, local SEO, content and AI search
            optimisation.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Get a Free SEO Audit
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:border-[#F4D545] hover:text-[#F4D545]"
            >
              Explore All Services
            </Link>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/60">
            <MapPin className="h-4 w-4 text-[#F4D545]" aria-hidden="true" />
            Madhapur, Hyderabad · Serving clients across India
          </p>
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
              Help the Right Customers Find Your Business Online
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              A website alone doesn't bring customers. If your pages
              don't appear when people search for your services, those
              enquiries go to competitors.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Search is also changing. Buyers now ask ChatGPT, Gemini
              and Google AI Overviews for recommendations. To be found,
              your website needs strong technical SEO, clear and
              expert content, and consistent business information
              across the web.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              As an SEO company in Hyderabad, OPV AI Realty Tech
              combines traditional SEO with AEO and GEO, so your
              business shows up in classic search results and in AI
              answers.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <TrendingUp className="h-12 w-12 text-[#F4D545]" aria-hidden="true" />

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Better Visibility.{" "}
              <span className="block text-[#F4D545]">
                More Qualified Enquiries.
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              A growth strategy built around the searches that bring
              real buyers, not just traffic.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Technical and on-page SEO",
                "Local SEO and Google Business Profile",
                "AEO and GEO for AI search",
                "Content and conversion improvements",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F4D545]" />
                  <span className="text-sm font-medium text-white/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
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
              SEO & Digital Marketing Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Everything your website needs to rank, get cited by AI and
              turn visitors into enquiries.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#E7B30F]/60 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-[#033505]/5 p-3">
                    <Icon className="h-7 w-7 text-[#265921]" aria-hidden="true" />
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
              SEO Checklist
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              What's Included in Our SEO Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Every engagement starts with an audit, then we prioritise
              the fixes and content that will move rankings and
              enquiries fastest for your website.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-[#F8FAF7] p-6">
              <div className="flex items-center gap-3">
                <Layers className="h-5 w-5 text-[#B88A00]" aria-hidden="true" />
                <h3 className="text-lg font-bold text-[#033505]">
                  Tools We Use
                </h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#033505]"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {seoActivities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-[#F8FAF7] p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B88A00]" />
                <span className="text-sm font-semibold leading-6 text-[#033505]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SEO VS AEO VS GEO */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              <Scale className="h-4 w-4" aria-hidden="true" />
              Comparison
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              SEO vs AEO vs GEO: What's the Difference?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Customers now search in three ways. A complete strategy
              covers all three.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-[#033505] text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 font-bold">
                    Factor
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold text-[#F4D545]">
                    SEO
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold text-[#F4D545]">
                    AEO
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold text-[#F4D545]">
                    GEO
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr
                    key={row.label}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAF7]"}
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 font-semibold text-[#033505]"
                    >
                      {row.label}
                    </th>
                    <td className="px-5 py-4 text-slate-700">{row.seo}</td>
                    <td className="px-5 py-4 text-slate-700">{row.aeo}</td>
                    <td className="px-5 py-4 text-slate-700">{row.geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              SEO Strategies for Different Industries
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Each industry searches differently. We build content and
              keywords around how your customers actually look for you.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#E7B30F] hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-[#B88A00]" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-[#033505]">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-600">
            Marketing property projects?{" "}
            <Link
              href="/industries/real-estate"
              className="font-semibold text-[#265921] underline-offset-4 hover:text-[#B88A00] hover:underline"
            >
              See our real estate technology solutions
            </Link>
            .
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#033505] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#F4D545]">
              Business Benefits
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Turn Search Visibility into Business Growth
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              SEO keeps bringing visitors long after the work is done,
              which makes it one of the most cost-effective ways to
              grow enquiries.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/60">
              <BarChart3 className="h-4 w-4 text-[#F4D545]" aria-hidden="true" />
              Monthly reports on rankings, traffic and enquiries
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F4D545]" />
                <span className="text-sm font-semibold leading-6 text-white/90">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
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
              Our SEO Process
            </h2>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
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
              </li>
            ))}
          </ol>
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
      <section className="border-t border-slate-100 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-xl font-extrabold text-[#033505]">
            Explore Related Services
          </h2>

          {/* Make sure each of these routes exists before deploying */}
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            <li>
              <Link
                href="/services/website-development"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                Website Development →
              </Link>
            </li>
            <li>
              <Link
                href="/services/ai-development"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                AI Development & AI Agents →
              </Link>
            </li>
            <li>
              <Link
                href="/services/business-automation"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                Business Process Automation →
              </Link>
            </li>
            <li>
              <Link
                href="/services/crm-erp-development"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                CRM & Lead Management →
              </Link>
            </li>
            <li>
              <Link
                href="/services/data-engineering"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                Data Analytics & BI →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#033505] px-5 py-20 text-center text-white sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7B30F]/15">
            <Lightbulb className="h-7 w-7 text-[#F4D545]" aria-hidden="true" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            Want More Customers to Find You Online?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Share your website and target customers. We'll run a free
            SEO audit and show you the fixes that will make the
            biggest difference.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Get Your Free SEO Audit
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href="tel:+919963513939"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:border-[#F4D545] hover:text-[#F4D545]"
            >
              Call +91 99635 13939
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}