
import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  AppWindow,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Gauge,
  Globe,
  LayoutDashboard,
  MapPin,
  Monitor,
  MousePointerClick,
  Palette,
  Phone,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Tablet,
  Workflow,
} from "lucide-react";

// ==========================================
// SEO CONFIGURATION
// ==========================================

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_PATH = "/solutions/web-mobile-experiences";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Website & Mobile App Development in Hyderabad | OPV AI";

const PAGE_DESCRIPTION =
  "Explore website design, web application development, mobile app development, UI/UX design and e-commerce solutions in Hyderabad with OPV AI Realty Tech.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Website development company in Hyderabad",
    "Web design company Hyderabad",
    "Mobile app development Hyderabad",
    "Web application development",
    "UI UX design services Hyderabad",
    "Corporate website development",
    "Responsive website design",
    "E-commerce development Hyderabad",
    "Custom web applications",
    "Business website development",
    "Customer portal development",
    "Mobile application development company",
    "Website redesign services",
    "Next.js development Hyderabad",
    "Digital experience design",
    "OPV AI Realty Tech",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
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

// ==========================================
// SERVICES
// ==========================================

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Create professional business websites, corporate websites and digital destinations designed around your brand and objectives.",
  },
  {
    icon: AppWindow,
    title: "Web Application Development",
    description:
      "Develop interactive web applications, customer portals, admin panels and browser-based business tools.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Plan and develop mobile application experiences for customers, employees and business users.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Shape user journeys, interface layouts and design systems around usability, clarity and consistent branding.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "Build digital commerce experiences for product discovery, shopping journeys and online business operations.",
  },
  {
    icon: Workflow,
    title: "Web & System Integration",
    description:
      "Connect digital experiences with APIs, business applications, databases and relevant third-party services.",
  },
];

// ==========================================
// PLATFORMS
// ==========================================

const platforms = [
  {
    icon: Monitor,
    title: "Business Websites",
    description:
      "Corporate websites, service websites, landing pages and brand experiences.",
  },
  {
    icon: LayoutDashboard,
    title: "Web Platforms & Portals",
    description:
      "Customer portals, business dashboards, internal applications and online platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Mobile experiences designed around customer and business requirements.",
  },
  {
    icon: Tablet,
    title: "Responsive Experiences",
    description:
      "Interfaces planned to work across desktop, tablet and mobile screen sizes.",
  },
];

// ==========================================
// CAPABILITIES
// ==========================================

const capabilities = [
  "Responsive website design",
  "Corporate and business websites",
  "Web application development",
  "Mobile application experiences",
  "UI/UX research and design",
  "E-commerce experiences",
  "Customer and partner portals",
  "Landing pages and campaign websites",
  "API and third-party integrations",
  "Website performance considerations",
  "Accessibility considerations",
  "Search-friendly site structure",
];

// ==========================================
// DESIGN PRINCIPLES
// ==========================================

const principles = [
  {
    icon: MousePointerClick,
    title: "User-Centred Experiences",
    description:
      "Plan intuitive journeys that help visitors and customers understand your services and complete relevant actions.",
  },
  {
    icon: Gauge,
    title: "Performance Considerations",
    description:
      "Consider loading performance, efficient assets and implementation choices throughout development.",
  },
  {
    icon: Accessibility,
    title: "Accessible Design",
    description:
      "Consider readable content, clear navigation, suitable contrast and accessible interaction patterns.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Reliability",
    description:
      "Consider secure data handling, appropriate access controls and reliable integration requirements.",
  },
];

// ==========================================
// DEVELOPMENT PROCESS
// ==========================================

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your audience, brand, business objectives and project requirements.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "Define the site structure, user journeys, interface direction and functionality.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build the agreed website, application or mobile experience.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Review responsive layouts, functionality, usability and compatibility.",
  },
  {
    number: "05",
    title: "Launch & Improve",
    description:
      "Prepare for deployment and identify opportunities for ongoing improvements.",
  },
];

// ==========================================
// FAQ CONTENT
// ==========================================

const faqs = [
  {
    question:
      "Does OPV AI Realty Tech provide website development services in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad and offers website design, web application development, mobile app development, UI/UX design, e-commerce development and integration solutions.",
  },
  {
    question:
      "What is the difference between a website and a web application?",
    answer:
      "A website primarily presents information and content, while a web application generally provides interactive functionality such as user accounts, dashboards, booking systems or business workflows.",
  },
  {
    question:
      "Can you develop both Android and iOS mobile applications?",
    answer:
      "Mobile development can be planned for Android, iOS or cross-platform delivery, depending on product requirements, technical feasibility and the agreed development scope.",
  },
  {
    question: "What is responsive website design?",
    answer:
      "Responsive design allows a website layout and interface to adapt to different screen sizes, including desktop computers, tablets and smartphones.",
  },
  {
    question: "What is UI/UX design?",
    answer:
      "UI refers to user interface design, including visual layouts and controls. UX refers to user experience, including navigation, usability and how effectively people complete tasks.",
  },
  {
    question:
      "Can a website integrate with CRM, ERP and payment systems?",
    answer:
      "Many websites and applications can connect with CRM, ERP, payment gateways and other business systems using supported APIs or integration methods. Feasibility depends on the systems involved.",
  },
  {
    question: "How long does website or mobile app development take?",
    answer:
      "Timelines depend on design requirements, functionality, integrations, content, testing and deployment scope. A project assessment helps establish a realistic schedule.",
  },
  {
    question:
      "How much does website or mobile app development cost in Hyderabad?",
    answer:
      "Pricing depends on the number of pages or screens, design complexity, features, integrations, platforms and maintenance requirements. An accurate quotation requires a project scope.",
  },
];

// ==========================================
// RELATED SOLUTIONS
// ==========================================

const relatedSolutions = [
  {
    title: "Software & Product Engineering",
    href: "/solutions/software-engineering",
  },
  {
    title: "SaaS, Cloud & DevOps",
    href: "/solutions/saas-cloud-devops",
  },
  {
    title: "Digital Growth & Marketing",
    href: "/solutions/digital-growth-marketing",
  },
];

// ==========================================
// STRUCTURED DATA
// ==========================================

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
      url: PAGE_URL,
      name: PAGE_TITLE,
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
      name: "Web & Mobile Experiences",
      serviceType:
        "Website Development, Mobile App Development and UI/UX Design",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: [
        { "@type": "City", name: "Hyderabad" },
        { "@type": "State", name: "Telangana" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web and Mobile Development Services",
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
          name: "Web & Mobile Experiences",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// ==========================================
// PAGE COMPONENT
// ==========================================

export default function WebMobileExperiencesPage() {
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

      {/* HERO SECTION */}
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
                Web & Mobile Experiences
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <Globe className="h-4 w-4" />
                Web & Mobile Experiences
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                Website & Mobile
                <span className="block text-[#075B3B]">
                  App Development
                </span>
                <span className="mt-3 block text-2xl font-bold text-[#526577] sm:text-3xl">
                  Solutions in Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#526577] sm:text-lg">
                Create Digital Experiences That Connect.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                OPV AI Realty Tech helps organizations
                plan and develop professional websites,
                web applications, mobile products,
                e-commerce experiences and user-focused
                digital platforms.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your Digital Project
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

            {/* RESPONSIVE EXPERIENCE ILLUSTRATION */}
            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-6 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-8">
              <div className="flex items-center justify-between border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Digital Experience
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold">
                    One Connected Experience
                  </h2>
                </div>

                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Monitor className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-4">
                <div className="flex items-center gap-2 border-b border-[#E5E9E3] pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#C6A052]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#075B3B]/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#075B3B]" />
                  <div className="ml-3 h-5 flex-1 rounded-md bg-white" />
                </div>

                <div className="grid gap-4 py-5 sm:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <div className="h-3 w-20 rounded bg-[#C6A052]" />
                    <div className="mt-3 h-5 w-full rounded bg-[#263C50]/20" />
                    <div className="mt-2 h-5 w-4/5 rounded bg-[#263C50]/20" />
                    <div className="mt-4 h-2 w-full rounded bg-[#263C50]/10" />
                    <div className="mt-2 h-2 w-4/5 rounded bg-[#263C50]/10" />
                    <div className="mt-5 h-8 w-28 rounded-lg bg-[#075B3B]" />
                  </div>

                  <div className="flex min-h-36 items-center justify-center rounded-xl bg-[#F0F6F1]">
                    <Globe className="h-14 w-14 text-[#075B3B]" />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { icon: Monitor, label: "Desktop" },
                  { icon: Tablet, label: "Tablet" },
                  { icon: Smartphone, label: "Mobile" },
                ].map((device) => {
                  const Icon = device.icon;

                  return (
                    <div
                      key={device.label}
                      className="rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-4 text-center"
                    >
                      <Icon className="mx-auto h-6 w-6 text-[#075B3B]" />
                      <p className="mt-2 text-xs font-bold">
                        {device.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#F0F6F1] p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#075B3B]" />
                <p className="text-sm font-medium">
                  Thoughtful design across devices and platforms
                </p>
              </div>

              <p className="mt-3 text-center text-xs text-[#647586]">
                Conceptual responsive website illustration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Your Digital Presence
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Make Every Digital Interaction Count
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Your website and applications are important
              touchpoints between your business and its
              audience. A considered digital experience
              brings together useful content, intuitive
              navigation, suitable functionality and
              consistent design.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              We help shape these elements around your
              brand, users and business objectives.
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
              What We Do
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Web & Mobile Development Services
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              From your first business website to a
              connected digital application, explore
              capabilities for different project needs.
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

      {/* PLATFORMS */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Digital Platforms
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Experiences Across Devices & Platforms
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Choose an experience that fits your audience,
              business model and intended functionality.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform) => {
              const Icon = platform.icon;

              return (
                <article
                  key={platform.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-6 transition hover:border-[#075B3B]/30 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold">
                    {platform.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#526577]">
                    {platform.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Everything Your Digital Experience Needs
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Each project has different design,
              technical and functional requirements.
              We help define the right combination
              of capabilities for your digital product.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#075B3B] hover:underline"
            >
              Discuss Your Digital Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#E5E9E3] bg-white p-4"
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

      {/* DESIGN PRINCIPLES */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Experience Principles
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Designed for People. Built for Business.
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A successful digital product should balance
              user needs with functionality, technical
              requirements and business objectives.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold">
                    {principle.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#526577]">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              From First Concept to Digital Launch
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A structured process helps keep design
              and development aligned with your
              audience and project requirements.
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-6"
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

      {/* FAQ SECTION */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Website & Mobile App Development FAQs
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Answers to common questions about
              website development, mobile applications,
              UI/UX and digital platforms.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-6"
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
      <section className="border-t border-[#E5E9E3] bg-[#F8F6F0] py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className="text-2xl font-extrabold">
            Explore Related Technology Solutions
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#526577]">
            Connect web and mobile experiences with
            software engineering, cloud technology
            and digital growth services.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedSolutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between gap-4 rounded-xl border border-[#E5E9E3] bg-white p-5 transition hover:border-[#075B3B]/30"
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
            Ready to Build Your Next Digital Experience?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Tell us about your website, web application
            or mobile app idea. Explore how to turn
            your requirements into a useful digital
            experience for your business.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your Digital Project
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
