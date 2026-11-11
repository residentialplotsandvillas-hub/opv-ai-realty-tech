
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Globe,
  Layers3,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_PATH = "/solutions/software-engineering";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Custom Software Development Company in Hyderabad | OPV AI";

const PAGE_DESCRIPTION =
  "Custom software development in Hyderabad by OPV AI Realty Tech. Web and mobile applications, API integration, backend engineering, SaaS products and business software solutions.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Software development company in Hyderabad",
    "Custom software development Hyderabad",
    "Software engineering services",
    "Web application development Hyderabad",
    "Mobile app development company Hyderabad",
    "Custom business software",
    "API development and integration",
    "Backend development services",
    "Database engineering",
    "SaaS product development",
    "Digital product engineering",
    "Business application development",
    "Enterprise software development",
    "Customer portal development",
    "Real estate software development",
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

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Purpose-built software designed around your business processes, requirements and operational goals.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Modern websites, web applications, customer portals, admin panels and business platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Mobile application experiences that help customers and employees access your services and tools.",
  },
  {
    icon: Braces,
    title: "API Development & Integration",
    description:
      "Connect applications, services and business systems through APIs and integration workflows.",
  },
  {
    icon: Database,
    title: "Backend & Database Engineering",
    description:
      "Application architecture, backend services and data structures for your software requirements.",
  },
  {
    icon: Layers3,
    title: "SaaS & Digital Product Development",
    description:
      "Plan and develop digital products, subscription platforms and software-as-a-service applications.",
  },
];

const productTypes = [
  "Business management software",
  "Customer and partner portals",
  "Real estate platforms",
  "E-commerce applications",
  "Booking and appointment systems",
  "Internal business applications",
  "Sales and operations dashboards",
  "Workflow management systems",
];

const benefits = [
  {
    title: "Designed Around Your Business",
    description:
      "Software scope and functionality are shaped around your actual business requirements.",
  },
  {
    title: "Connected Systems",
    description:
      "Applications can integrate with relevant APIs, databases and third-party services.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Technical decisions consider maintainability and potential future product growth.",
  },
  {
    title: "User-Focused Design",
    description:
      "Clear interfaces and user journeys help make applications easier to understand and use.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your idea, business objectives, users and project requirements.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "Define features, user journeys, application structure and technical scope.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build the agreed application features and required integrations.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Review functionality, usability, compatibility and quality requirements.",
  },
  {
    number: "05",
    title: "Launch & Evolve",
    description:
      "Prepare for deployment and identify opportunities for future improvements.",
  },
];

const faqs = [
  {
    question: "What is custom software development?",
    answer:
      "Custom software development involves designing and building applications around specific business processes, users and operational requirements instead of relying entirely on off-the-shelf software.",
  },
  {
    question:
      "Does OPV AI Realty Tech provide software development services in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad and offers software and product engineering services, including custom applications, web development, mobile apps, APIs, backend systems and SaaS development.",
  },
  {
    question:
      "What types of business applications can you develop?",
    answer:
      "Projects may include CRM and ERP systems, customer portals, business dashboards, booking platforms, workflow applications, real estate platforms and industry-specific software.",
  },
  {
    question:
      "Can you develop both web applications and mobile apps?",
    answer:
      "Yes. Web and mobile development can be planned as separate products or connected experiences, depending on the target users, application requirements and integration needs.",
  },
  {
    question: "Can custom software integrate with existing systems?",
    answer:
      "Many applications can integrate with existing CRM, ERP, payment, communication and third-party services through suitable APIs or other supported integration methods.",
  },
  {
    question:
      "What is the difference between custom software and SaaS?",
    answer:
      "Custom software is developed around particular requirements. SaaS describes a software delivery model in which applications are generally accessed online, often through subscriptions. A custom-built application can also be offered as SaaS.",
  },
  {
    question:
      "How long does custom software development take?",
    answer:
      "Timelines depend on project scope, feature complexity, integrations, design, testing and deployment requirements. A discovery and planning phase helps establish a realistic schedule.",
  },
  {
    question:
      "How much does custom software development cost in Hyderabad?",
    answer:
      "Costs vary according to application features, user roles, platforms, integrations, architecture, security requirements and ongoing maintenance. A requirements assessment is needed for an accurate proposal.",
  },
];

const relatedSolutions = [
  {
    title: "AI & Intelligent Automation",
    href: "/solutions/ai-intelligent-automation",
  },
  {
    title: "CRM, ERP & Business Systems",
    href: "/solutions/crm-erp-business-systems",
  },
  {
    title: "SaaS, Cloud & DevOps",
    href: "/solutions/saas-cloud-devops",
  },
];

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
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      about: { "@id": `${PAGE_URL}#service` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Software & Product Engineering Services",
      serviceType:
        "Custom Software Development and Digital Product Engineering",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "City", name: "Hyderabad" },
        { "@type": "State", name: "Telangana" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Engineering Services",
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
          name: "Software & Product Engineering",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function SoftwareEngineeringPage() {
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
                Software & Product Engineering
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <Code2 className="h-4 w-4" />
                Software & Product Engineering
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                Custom Software
                <span className="block text-[#075B3B]">
                  & Product Engineering
                </span>
                <span className="mt-3 block text-2xl font-bold text-[#526577] sm:text-3xl">
                  Solutions in Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#526577] sm:text-lg">
                Turn your business ideas into practical,
                connected and user-focused digital products.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                OPV AI Realty Tech helps organizations
                plan and develop custom business software,
                web applications, mobile apps, APIs,
                backend systems and digital platforms
                aligned with their requirements.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your Software Project
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

            {/* SOFTWARE ARCHITECTURE VISUAL */}
            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-7 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">
              <div className="flex items-center justify-between border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Software Engineering
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold">
                    Digital Product Architecture
                  </h2>
                </div>
                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Layers3 className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {[
                  {
                    icon: Globe,
                    title: "Frontend Experience",
                    description:
                      "Websites, mobile interfaces and user journeys",
                  },
                  {
                    icon: Code2,
                    title: "Application Engineering",
                    description:
                      "Business logic, workflows and application services",
                  },
                  {
                    icon: Database,
                    title: "Data & Integrations",
                    description:
                      "Databases, APIs and connected business systems",
                  },
                ].map((layer, index) => {
                  const Icon = layer.icon;

                  return (
                    <div key={layer.title}>
                      <div className="flex items-start gap-4 rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-5">
                        <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-extrabold">
                            {layer.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-[#526577]">
                            {layer.description}
                          </p>
                        </div>
                      </div>
                      {index < 2 && (
                        <div className="mx-auto h-5 w-px bg-[#C6A052]" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#F0F6F1] p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#075B3B]" />
                <p className="text-sm font-medium">
                  Architecture shaped around project requirements
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
              Technology Built Around Your Business
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Software That Solves Real Business Challenges
            </h2>
            <p className="mt-6 leading-8 text-[#526577]">
              Every business has its own processes,
              customers and objectives. Custom
              software provides flexibility to create
              digital tools around those requirements.
              We focus on understanding the problem,
              defining the product and choosing an
              appropriate development approach.
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
              Our Development Services
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Custom Software & Product Engineering Services
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Development capabilities to support
              your organization's digital
              transformation and product requirements.
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

      {/* PRODUCT TYPES */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Digital Products
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              What Can We Build for Your Business?
            </h2>
            <p className="mt-6 leading-8 text-[#526577]">
              Whether you are starting with a new
              idea or improving an existing process,
              we can help define a suitable digital
              product scope and technical approach.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#075B3B] hover:underline"
            >
              Share Your Requirements
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {productTypes.map((item) => (
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

      {/* BENEFITS */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Engineering Principles
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Beyond Writing Code
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Effective software development
              considers the people, processes
              and business objectives behind
              every product.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-7"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                  Principle {String(index + 1).padStart(2, "0")}
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

      {/* DEVELOPMENT PROCESS */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Development Process
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              From Concept to Digital Product
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              A structured approach keeps
              development aligned with your
              requirements and project objectives.
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

      {/* FAQs */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Software Development FAQs
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Common questions about custom
              software, applications, integrations
              and digital product development.
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
            Connect software engineering with
            AI automation, business systems
            and cloud technology.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedSolutions.map((item) => (
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
            Have an Idea for Your Next Software Product?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Tell us what you want to build.
            Explore your requirements,
            technical possibilities and
            a practical development approach.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your Software Project
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
