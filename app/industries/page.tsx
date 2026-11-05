
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Factory,
  Landmark,
  BriefcaseBusiness,
  Home,
  Truck,
  Monitor,
  Workflow,
  CheckCircle2,
  Lightbulb,
  Code2,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | AI & Technology Solutions | OPV AI Realty Tech",
  description:
    "Discover industry-focused technology solutions from OPV AI Realty Tech, including AI automation, custom software, SaaS, CRM, ERP and digital transformation for businesses.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries We Serve | OPV AI Realty Tech",
    description:
      "Explore technology, AI automation and digital solutions designed around the needs of different industries.",
    url: "https://www.opvairealtytech.com/industries",
    siteName: "OPV AI Realty Tech",
    type: "website",
  },
};

const industries = [
  {
    icon: Home,
    number: "01",
    title: "Real Estate & Property",
    description:
      "Digital platforms and technology solutions for property businesses, real estate developers, brokers and property management teams.",
    solutions: [
      "Real estate websites and portals",
      "Property management platforms",
      "Lead management and CRM systems",
      "Property enquiry automation",
      "Digital marketing and SEO",
    ],
    href: "/industries/real-estate",
  },
  {
    icon: ShoppingCart,
    number: "02",
    title: "Retail & E-Commerce",
    description:
      "Digital commerce solutions that help retailers manage online customer experiences, product information and business workflows.",
    solutions: [
      "E-commerce website development",
      "Online ordering systems",
      "Inventory management integration",
      "Customer management systems",
      "Sales and reporting dashboards",
    ],
    href: "/industries/retail-ecommerce",
  },
  {
    icon: HeartPulse,
    number: "03",
    title: "Healthcare",
    description:
      "Digital application concepts and business systems for healthcare organizations, clinics and service providers.",
    solutions: [
      "Healthcare websites",
      "Appointment management systems",
      "Patient enquiry workflows",
      "Administrative dashboards",
      "Business process automation",
    ],
    href: "/industries/healthcare",
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Education & E-Learning",
    description:
      "Technology solutions for educational institutions, training providers and digital learning businesses.",
    solutions: [
      "Educational websites",
      "Learning management platforms",
      "Student management systems",
      "Online course platforms",
      "Enquiry and admission workflows",
    ],
    href: "/industries/education",
  },
  {
    icon: Factory,
    number: "05",
    title: "Manufacturing & Industrial",
    description:
      "Software and automation solutions that support manufacturing operations, internal workflows and business information management.",
    solutions: [
      "Business management software",
      "Inventory and order workflows",
      "Operational dashboards",
      "Custom ERP applications",
      "Data integration",
    ],
    href: "/industries/manufacturing",
  },
  {
    icon: Landmark,
    number: "06",
    title: "Finance & Professional Services",
    description:
      "Digital systems for professional service providers and organizations that need structured customer, operational and business information.",
    solutions: [
      "CRM development",
      "Client management platforms",
      "Workflow automation",
      "Reporting dashboards",
      "Website and digital presence",
    ],
    href: "/industries/financial-professional-services",
  },
  {
    icon: BriefcaseBusiness,
    number: "07",
    title: "Startups & SMEs",
    description:
      "Technology development and digital solutions for startups and small and medium-sized businesses building or improving their digital operations.",
    solutions: [
      "MVP and product development",
      "Custom business applications",
      "SaaS product development",
      "Website and mobile applications",
      "Business process automation",
    ],
    href: "/industries/startups-smes",
  },
  {
    icon: Truck,
    number: "08",
    title: "Logistics & Transportation",
    description:
      "Connected software concepts for logistics providers, transportation businesses and organizations managing operational workflows.",
    solutions: [
      "Fleet management applications",
      "Order and delivery workflows",
      "Tracking system integrations",
      "Operations dashboards",
      "Customer communication automation",
    ],
    href: "/industries/logistics-transportation",
  },
  {
    icon: Monitor,
    number: "09",
    title: "IT & Technology",
    description:
      "Software engineering, cloud solutions and digital product development for technology companies and IT service providers.",
    solutions: [
      "Custom software development",
      "SaaS platforms",
      "Cloud application development",
      "AI-powered applications",
      "API and system integration",
    ],
    href: "/industries/it-technology",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Applications and software systems designed around industry-specific business requirements.",
  },
  {
    icon: Workflow,
    title: "AI & Business Automation",
    description:
      "Intelligent workflows and automation opportunities for repetitive business activities.",
  },
  {
    icon: TrendingUp,
    title: "Digital Growth & SEO",
    description:
      "Website optimization, content strategy and digital growth support for online visibility.",
  },
  {
    icon: Building2,
    title: "CRM & ERP Solutions",
    description:
      "Business management applications to organize customers, operations and internal processes.",
  },
];

const faqs = [
  {
    question: "Which industries does OPV AI Realty Tech serve?",
    answer:
      "OPV's industry focus includes real estate, retail and e-commerce, healthcare, education, manufacturing, professional services, startups and SMEs, logistics and IT and technology.",
  },
  {
    question: "Does OPV provide industry-specific software development?",
    answer:
      "OPV offers custom software development and digital solution services that can be planned around an organization's industry, business processes and technical requirements.",
  },
  {
    question: "Does OPV specialize only in real estate technology?",
    answer:
      "No. OPV AI Realty Tech is positioned as a broader AI and business technology company. Real estate is an important industry focus, alongside other business sectors.",
  },
  {
    question: "Can OPV develop custom applications for different industries?",
    answer:
      "Custom web applications, mobile applications, SaaS platforms, CRM systems and automation workflows can be scoped according to project requirements.",
  },
  {
    question: "Can businesses combine multiple OPV services?",
    answer:
      "Yes. Depending on project scope, businesses can combine services such as software development, AI automation, cloud solutions, CRM, ERP and digital growth.",
  },
  {
    question: "How can I discuss a technology project for my industry?",
    answer:
      "Contact OPV AI Realty Tech and share your industry, business objectives, current challenges and the type of digital solution you are considering.",
  },
];

export default function IndustriesPage() {
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
            <Building2 className="h-4 w-4" />
            Industries We Serve
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            AI & Technology Solutions
            <span className="block text-[#F4D545]">
              Across Industries
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Every industry has different challenges and
            opportunities. OPV AI Realty Tech focuses on
            technology, intelligent automation and digital
            solutions designed around the needs of modern
            businesses.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your Industry Needs
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:border-[#F4D545] hover:text-[#F4D545]"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Industry-Focused Technology
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Technology That Adapts to Your Industry
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Businesses operate differently across
              industries. Their customers, workflows,
              information systems and operational
              requirements are rarely the same.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              OPV AI Realty Tech brings together software
              engineering, AI, automation, cloud technology
              and digital growth capabilities to address
              different business requirements.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Our approach begins with understanding the
              business problem and identifying suitable
              technology solutions rather than applying
              the same system to every industry.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <Lightbulb className="h-12 w-12 text-[#F4D545]" />

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Understand the Industry.
              <span className="block text-[#F4D545]">
                Build the Right Solution.
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              From business applications to intelligent
              automation, explore digital solutions aligned
              with your organization's objectives.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Industry-focused software solutions",
                "AI and automation capabilities",
                "Connected digital platforms",
                "Business growth technology",
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

      {/* INDUSTRIES GRID */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Industries & Business Sectors
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Explore the Industries We Serve
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Discover how software, automation and digital
              solutions can support different business sectors.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.number}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#E7B30F]/70 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="inline-flex rounded-xl bg-[#033505]/5 p-3 transition group-hover:bg-[#E7B30F]/15">
                      <Icon className="h-7 w-7 text-[#265921]" />
                    </div>

                    <span className="text-sm font-black text-[#B88A00]">
                      {industry.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#033505]">
                    {industry.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {industry.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#265921]">
                      Relevant Solutions
                    </h4>

                    <ul className="mt-4 space-y-3">
                      {industry.solutions.map((solution) => (
                        <li
                          key={solution}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B88A00]" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={industry.href}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#265921] transition group-hover:text-[#B88A00]"
                  >
                    Explore Industry
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our Technology Capabilities
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              One Technology Partner. Multiple Capabilities.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Combine relevant technology services to
              address your business requirements and
              digital transformation goals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 p-6 transition hover:border-[#E7B30F] hover:shadow-lg"
                >
                  <div className="inline-flex rounded-xl bg-[#033505]/5 p-3">
                    <Icon className="h-7 w-7 text-[#265921]" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#033505]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* REAL ESTATE FOCUS */}
      <section className="bg-[#033505] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#F4D545]">
              Our Flagship Industry Focus
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Real Estate Technology & Digital Platforms
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              Real estate is an important industry focus
              within OPV's technology ecosystem. Digital
              property platforms can bring property
              information, customer enquiries and business
              workflows together.
            </p>

            <p className="mt-5 leading-8 text-white/75">
              Through our real estate technology focus,
              we aim to support property businesses with
              digital experiences, application development,
              customer management and automation solutions.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss a Real Estate Project
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-8 sm:p-10">
            <Home className="h-12 w-12 text-[#F4D545]" />

            <h3 className="mt-7 text-2xl font-bold">
              Real Estate Technology Solutions
            </h3>

            <div className="mt-7 space-y-4">
              {[
                "Property websites and digital portals",
                "Mobile application development",
                "Property enquiry management",
                "Real estate CRM workflows",
                "Lead generation and digital growth",
                "AI-assisted business automation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F4D545]" />
                  <span className="text-sm text-white/85">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY OPV */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Why OPV AI Realty Tech
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Technology Aligned with Business Objectives
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Business-First Thinking",
                text: "Start with the business challenge and identify relevant technology options.",
              },
              {
                title: "Connected Capabilities",
                text: "Bring software, AI, automation and digital growth services together where needed.",
              },
              {
                title: "Flexible Solutions",
                text: "Plan applications and systems around the scope and requirements of each project.",
              },
              {
                title: "Growth-Oriented Approach",
                text: "Consider maintainability and future business requirements during solution planning.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <CheckCircle2 className="h-7 w-7 text-[#B88A00]" />

                <h3 className="mt-5 text-lg font-bold text-[#033505]">
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

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Common Questions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Industries We Serve FAQs
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

      {/* CTA */}
      <section className="bg-[#033505] px-5 py-20 text-center text-white sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7B30F]/15">
            <Lightbulb className="h-7 w-7 text-[#F4D545]" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
            Let's Build the Right Technology for Your Industry
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Tell us about your industry, business challenges
            and digital goals. Let's explore how OPV AI
            Realty Tech can support your next project.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
          >
            Talk to Our Team
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
