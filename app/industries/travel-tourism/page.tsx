
import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  CalendarDays,
  Bot,
  Smartphone,
  TrendingUp,
  Workflow,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Travel & Tourism Technology Solutions | OPV AI Realty Tech",
  description:
    "Travel booking websites, tourism apps, travel CRM, AI chatbots, booking automation and digital marketing solutions for travel and tourism businesses in India.",
  alternates: {
    canonical: "/industries/travel-tourism",
  },
  openGraph: {
    title:
      "Travel & Tourism Technology Solutions | OPV AI",
    description:
      "Digital platforms, AI automation and growth solutions for travel agencies, tour operators and hospitality businesses.",
    url:
      "https://www.opvairealtytech.com/industries/travel-tourism",
    type: "website",
  },
};

const services = [
  {
    icon: Globe2,
    title: "Travel Website Development",
    description:
      "Responsive travel agency websites, tourism portals and destination-focused digital experiences.",
  },
  {
    icon: CalendarDays,
    title: "Online Booking Platforms",
    description:
      "Custom booking workflows for tour packages, travel enquiries, reservations and customer management.",
  },
  {
    icon: Smartphone,
    title: "Travel Mobile Applications",
    description:
      "Mobile applications for trip discovery, booking requests, itineraries and traveller engagement.",
  },
  {
    icon: Bot,
    title: "AI Travel Assistants",
    description:
      "AI chatbots for answering enquiries, sharing package information and assisting travellers.",
  },
  {
    icon: Users,
    title: "Travel CRM & Lead Management",
    description:
      "Centralized enquiry tracking, customer follow-ups, sales pipelines and travel agent workflows.",
  },
  {
    icon: TrendingUp,
    title: "Tourism Digital Marketing",
    description:
      "SEO, AEO, content marketing, digital campaigns and lead generation for travel businesses.",
  },
];

const benefits = [
  "Simplify travel enquiries and booking workflows",
  "Improve customer response and engagement",
  "Automate routine communication and follow-ups",
  "Manage leads, customers and reservations",
  "Strengthen digital visibility and customer acquisition",
];

export default function TravelTourismPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Travel & Tourism Technology Solutions",
        url:
          "https://www.opvairealtytech.com/industries/travel-tourism",
        description:
          "Travel technology, AI automation and digital growth solutions.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.opvairealtytech.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Industries",
            item:
              "https://www.opvairealtytech.com/industries",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Travel & Tourism",
            item:
              "https://www.opvairealtytech.com/industries/travel-tourism",
          },
        ],
      },
    ],
  };

  return (
    <main className="bg-white text-[#263C50]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* HERO */}

      <section className="border-b border-[#E5E9E3] bg-[#F8F6F0]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap gap-2 text-xs text-[#647586]"
          >
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/industries">Industries</Link>
            <span>/</span>
            <span
              aria-current="page"
              className="text-[#075B3B]"
            >
              Travel & Tourism
            </span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
              <Plane className="h-4 w-4" />
              Travel & Tourism Technology
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Smarter Travel.
              <span className="mt-2 block text-[#075B3B]">
                Connected Experiences.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[#526577] sm:text-lg">
              OPV AI Realty Tech develops travel websites,
              booking platforms, mobile applications,
              AI-powered customer assistance, CRM and
              digital growth solutions for travel agencies,
              tour operators, tourism businesses and
              hospitality service providers.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
              >
                Discuss Your Travel Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="#travel-solutions"
                className="inline-flex items-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B]"
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}

      <section
        id="travel-solutions"
        className="scroll-mt-24 py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Digital Solutions for Travel & Tourism
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Build connected customer experiences,
              streamline bookings and support travel
              business growth through technology.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition hover:border-[#075B3B]/30 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F0F6F1] text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#526577]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <Workflow className="h-10 w-10 text-[#075B3B]" />

            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
              Modernize Your Travel Business
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              From customer discovery to post-booking
              communication, digital systems can help
              travel businesses manage enquiries,
              coordinate operations and create
              smoother traveller experiences.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#E5E9E3] bg-white p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#075B3B]" />

                <span className="text-sm font-semibold leading-6">
                  {item}
                </span>
              </div>
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

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/solutions/web-mobile-experiences"
              className="rounded-full border border-[#E5E9E3] px-5 py-3 text-sm font-semibold text-[#075B3B] hover:bg-[#F0F6F1]"
            >
              Web & Mobile Development
            </Link>

            <Link
              href="/solutions/ai-intelligent-automation"
              className="rounded-full border border-[#E5E9E3] px-5 py-3 text-sm font-semibold text-[#075B3B] hover:bg-[#F0F6F1]"
            >
              AI & Automation
            </Link>

            <Link
              href="/solutions/digital-growth-marketing"
              className="rounded-full border border-[#E5E9E3] px-5 py-3 text-sm font-semibold text-[#075B3B] hover:bg-[#F0F6F1]"
            >
              Digital Growth
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="border-t border-[#E5E9E3] bg-[#F8F6F0] py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Build Your Next Travel Technology Solution.
          </h2>

          <p className="mt-5 leading-8 text-[#526577]">
            Planning a tourism portal, booking system,
            travel CRM or AI-powered customer experience?
            Let's discuss your requirements.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-8 py-4 text-sm font-bold text-white hover:bg-[#06472F]"
          >
            Contact OPV AI
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
