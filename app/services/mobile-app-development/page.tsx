import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  Tablet,
  Code2,
  Layers3,
  Database,
  Workflow,
  CheckCircle2,
  Lightbulb,
  MonitorSmartphone,
  MapPin,
  Building2,
  Scale,
} from "lucide-react";

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_PATH = "/services/mobile-app-development";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/images/opv-og-image.jpg`;

const PAGE_TITLE =
  "Mobile App Development Company in Hyderabad | OPV AI Realty Tech";
const PAGE_DESCRIPTION =
  "Android, iOS and cross-platform app development with React Native. Custom mobile apps, admin panels and API integration for businesses in Hyderabad and India.";

export const metadata: Metadata = {
  // `absolute` bypasses the layout's title.template, so the brand is not added twice
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Mobile App Development Company in Hyderabad | OPV AI Realty Tech",
    description:
      "Custom Android, iOS and cross-platform mobile apps with admin panels, backend and API integration.",
    url: PAGE_URL,
    siteName: "OPV AI Realty Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Mobile app development by OPV AI Realty Tech, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company in Hyderabad | OPV",
    description:
      "Android, iOS and cross-platform React Native apps for growing businesses.",
    images: [OG_IMAGE],
  },
};

const solutions = [
  {
    icon: Smartphone,
    title: "Android App Development",
    description:
      "Android apps for phones and tablets, built for the wide range of devices your customers use and ready for the Google Play Store.",
  },
  {
    icon: Tablet,
    title: "iOS App Development",
    description:
      "iPhone and iPad apps that follow Apple's design and review guidelines, prepared for App Store submission.",
  },
  {
    icon: Layers3,
    title: "Cross-Platform App Development",
    description:
      "One React Native codebase for both Android and iOS, so you launch faster and maintain one app instead of two.",
  },
  {
    icon: Code2,
    title: "Custom Mobile Applications",
    description:
      "Customer apps, booking apps, field-staff apps and internal tools built around your specific business workflow.",
  },
  {
    icon: Database,
    title: "Backend, Admin Panel & APIs",
    description:
      "Secure backends, web-based admin panels, user login, payments and third-party API integrations that power your app.",
  },
  {
    icon: Workflow,
    title: "Mobile Business Workflows",
    description:
      "Let teams capture data, submit requests, approve tasks and access business systems from their phones, even on the move.",
  },
];

const appTypes = [
  {
    title: "Real Estate Apps",
    description:
      "Property search, project brochures, site-visit booking and enquiry tracking for buyers, agents and sales teams.",
  },
  {
    title: "Booking & Appointment Apps",
    description:
      "Slot booking, reminders and payments for clinics, salons, services and hospitality businesses.",
  },
  {
    title: "E-commerce & Ordering Apps",
    description:
      "Product catalogues, carts, payment gateways, order tracking and push notifications.",
  },
  {
    title: "Field Staff & Sales Apps",
    description:
      "Attendance, location check-ins, lead capture, photo uploads and daily reporting for teams in the field.",
  },
  {
    title: "Education & Learning Apps",
    description:
      "Course content, live classes, quizzes, progress tracking and student-parent communication.",
  },
  {
    title: "Internal Business Apps",
    description:
      "Mobile access to your CRM, ERP, approvals and dashboards for managers and employees.",
  },
];

const features = [
  "User login & OTP verification",
  "Push notifications",
  "Payment gateway integration",
  "Maps & location tracking",
  "Camera & document upload",
  "In-app chat & WhatsApp links",
  "Offline data support",
  "Web-based admin panel",
  "Analytics & usage tracking",
  "Multi-language support",
];

const technologies = [
  "React Native",
  "Expo",
  "TypeScript",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
];

const comparison = [
  {
    label: "Codebase",
    crossPlatform: "One codebase for Android and iOS",
    native: "Separate code for each platform",
  },
  {
    label: "Time to launch",
    crossPlatform: "Faster, both platforms together",
    native: "Longer, each platform built separately",
  },
  {
    label: "Development cost",
    crossPlatform: "Lower for most business apps",
    native: "Higher, two development tracks",
  },
  {
    label: "Maintenance",
    crossPlatform: "One update ships to both platforms",
    native: "Updates done twice",
  },
  {
    label: "Best for",
    crossPlatform: "Most business, booking and e-commerce apps",
    native: "Heavy 3D, games or deep hardware features",
  },
];

const benefits = [
  "Simple, user-friendly mobile interfaces",
  "Android, iOS or both from one codebase",
  "Features built around your business",
  "Secure backend and API connectivity",
  "Login, roles and access management",
  "Testing on real Android and iOS devices",
  "Clean, maintainable code you own",
  "Play Store and App Store launch support",
];

const process = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "We define your target users, business goals, platforms and the must-have features for the first version.",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "We design the screens, navigation and user journeys, and share clickable prototypes for your feedback.",
  },
  {
    number: "03",
    title: "App Development",
    description:
      "We build the app, backend and admin panel in stages, with regular builds you can test on your phone.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "We test on real devices, publish to the Play Store and App Store, and support the app after launch.",
  },
];

const faqs = [
  {
    question: "What mobile app development services does OPV AI Realty Tech offer?",
    answer:
      "We build Android apps, iOS apps and cross-platform React Native apps, along with backends, web-based admin panels, payment integration and third-party API connections.",
  },
  {
    question: "Can you develop both Android and iOS apps?",
    answer:
      "Yes. We usually recommend React Native, which builds both Android and iOS apps from one codebase. This reduces development time and makes updates easier.",
  },
  {
    question: "Should I choose cross-platform or native app development?",
    answer:
      "Cross-platform suits most business, booking, e-commerce and internal apps because it is faster and more cost-effective. Native development is better for games, heavy graphics or apps that need deep device hardware access.",
  },
  {
    question: "Which technologies do you use for mobile app development?",
    answer:
      "We use React Native, Expo and TypeScript for the app, and Node.js, Express.js, MongoDB or PostgreSQL with REST APIs for the backend.",
  },
  {
    question: "Can a mobile app connect to my existing website or CRM?",
    answer:
      "Yes. Mobile apps can connect to existing websites, CRMs, ERPs and databases through APIs, so customers and staff see the same data everywhere.",
  },
  {
    question: "Do you build an admin panel with the app?",
    answer:
      "Yes. Most apps we build include a web-based admin panel to manage users, content, orders, bookings and reports.",
  },
  {
    question: "Do you publish the app on the Play Store and App Store?",
    answer:
      "Yes. We prepare the store listings and builds and handle the submission process on your developer accounts.",
  },
  {
    question: "Do you work with businesses outside Hyderabad?",
    answer:
      "Yes. Our office is in Madhapur, Hyderabad, and we work with businesses across India and abroad through remote collaboration.",
  },
];

export default function MobileAppDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Mobile App Development",
        serviceType: "Mobile Application Development",
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
          name: "Mobile App Development Services",
          itemListElement: solutions.map((item) => ({
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
            name: "Mobile App Development",
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
                Mobile App Development
              </li>
            </ol>
          </nav>

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E7B30F]/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#F4D545]">
            <Smartphone className="h-4 w-4" aria-hidden="true" />
            Mobile Application Development
          </div>

          {/* {" "} keeps a real space between the two lines for crawlers and screen readers */}
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Mobile App Development Company{" "}
            <span className="block text-[#F4D545]">in Hyderabad</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech builds Android, iOS and cross-platform
            mobile apps for businesses in Hyderabad and across India.
            From the first idea to Play Store and App Store launch, we
            design, develop and connect apps your customers and teams
            will actually use.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your App Idea
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
              Mobile Technology Solutions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Turn Your Business Idea into a Mobile App
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Your customers spend most of their screen time on their
              phones. A mobile app puts your products, bookings and
              services one tap away, and push notifications bring them
              back.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Apps also help your own teams: sales staff can log leads
              on site, field teams can upload photos and reports, and
              managers can approve requests from anywhere.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              As a mobile app development company in Hyderabad, OPV AI
              Realty Tech plans each app around its users, the tasks
              they need to complete and the systems your business
              already runs.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <MonitorSmartphone className="h-12 w-12 text-[#F4D545]" aria-hidden="true" />

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Mobile Experiences for{" "}
              <span className="block text-[#F4D545]">
                Connected Businesses
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              Apps designed around the people who use them and
              connected to the systems you already have.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Android and iOS from one codebase",
                "Custom features for your workflow",
                "Backend, admin panel and APIs",
                "Store launch and ongoing support",
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

      {/* SOLUTIONS */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our Mobile App Capabilities
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Mobile App Development Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              End-to-end app development for customer apps, business
              operations and new digital products.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => {
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

      {/* APP TYPES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              What We Build
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Types of Mobile Apps We Develop
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {appTypes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-[#B88A00]" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-[#033505]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-600">
            Building for property buyers or sales teams?{" "}
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

      {/* FEATURES + TECHNOLOGY */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              App Features
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Features We Build Into Mobile Apps
            </h2>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#B88A00]" />
                  <span className="text-sm font-semibold text-[#033505]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            <h2 className="text-2xl font-extrabold text-[#033505]">
              Our Mobile App Technology Stack
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              We choose technology based on your features, platforms,
              integrations and long-term maintenance.
            </p>

            <ul className="mt-6 flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-xl border border-slate-200 bg-[#F8FAF7] px-5 py-3 text-sm font-bold text-[#265921]"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CROSS-PLATFORM VS NATIVE */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              <Scale className="h-4 w-4" aria-hidden="true" />
              Comparison
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Cross-Platform vs Native App Development
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              For most business apps, cross-platform React Native gives
              the best balance of speed, cost and quality.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-[#033505] text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 font-bold">
                    Factor
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold text-[#F4D545]">
                    Cross-Platform (React Native)
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold">
                    Native (Separate Apps)
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
                    <td className="px-5 py-4 text-slate-700">
                      {row.crossPlatform}
                    </td>
                    <td className="px-5 py-4 text-slate-600">{row.native}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Application Quality
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              What You Get with OPV Mobile App Development
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A good app needs more than an attractive interface. We
              focus on speed, security, reliable integrations and code
              that is easy to maintain as your app grows.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B88A00]" />
                <span className="text-sm font-semibold leading-6 text-[#033505]">
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
              Our Mobile App Development Process
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
              Mobile App Development FAQs
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
                href="/services/software-development"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                Custom Software Development →
              </Link>
            </li>
            <li>
              <Link
                href="/services/crm-erp-development"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                CRM & ERP Development →
              </Link>
            </li>
            <li>
              <Link
                href="/services/saas-cloud-solutions"
                className="font-semibold text-[#265921] hover:text-[#B88A00]"
              >
                SaaS & Cloud Solutions →
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
            Have an Idea for a Mobile App?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Tell us about your app idea, your users and the features
            you need. We'll suggest the right platform and a clear
            plan to launch.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your App Project
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