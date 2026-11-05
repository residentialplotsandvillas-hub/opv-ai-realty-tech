
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Code2,
  Smartphone,
  ShoppingCart,
  Search,
  Palette,
  Gauge,
  Layers3,
  CheckCircle2,
  Monitor,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development Company in India | OPV AI Realty Tech",
  description:
    "OPV AI Realty Tech provides website development, custom web applications, responsive business websites, e-commerce development and modern digital experiences.",
  alternates: {
    canonical: "/services/website-development",
  },
  openGraph: {
    title: "Website Development Services | OPV AI Realty Tech",
    description:
      "Explore responsive website development, business websites, e-commerce platforms and custom web applications.",
    url: "https://www.opvairealtytech.com/services/website-development",
    siteName: "OPV AI Realty Tech",
    type: "website",
  },
};

const solutions = [
  {
    icon: Globe,
    title: "Business Website Development",
    description:
      "Build professional business websites that communicate your services, company information and brand identity across desktop and mobile devices.",
  },
  {
    icon: Code2,
    title: "Custom Web Application Development",
    description:
      "Develop interactive web applications designed around specific business workflows, user requirements and application functionality.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website Development",
    description:
      "Create online shopping experiences with product catalogues, customer journeys and business-focused commerce functionality.",
  },
  {
    icon: Smartphone,
    title: "Responsive Website Design",
    description:
      "Create responsive website layouts that adapt to mobile phones, tablets, laptops and desktop screens.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Website Development",
    description:
      "Build websites with structured content, crawlable navigation, metadata support, semantic HTML and technical SEO considerations.",
  },
  {
    icon: Palette,
    title: "UI/UX & Digital Experience",
    description:
      "Design user-focused website experiences with clear navigation, consistent visual elements and accessible interfaces.",
  },
];

const technologies = [
  "Next.js",
  "React.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "WordPress",
  "HTML5",
  "CSS3",
  "REST APIs",
];

const benefits = [
  "Responsive layouts for different screen sizes",
  "Clear navigation and user experience",
  "Search engine-friendly page structure",
  "Custom functionality based on requirements",
  "Integration with relevant business systems",
  "Maintainable website architecture",
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand your business, target audience, website goals and required functionality.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Plan the website structure, user journeys, page layouts and visual direction.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Develop responsive website pages and integrate the agreed functionality.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description:
      "Review responsiveness, functionality, performance and technical setup before launch.",
  },
];

const faqs = [
  {
    question: "What website development services does OPV provide?",
    answer:
      "OPV's website development service areas include business websites, custom web applications, e-commerce websites, responsive design and SEO-conscious website development.",
  },
  {
    question: "Does OPV develop responsive websites?",
    answer:
      "Responsive website development is one of our service areas. Website layouts are designed to adapt to mobile, tablet and desktop screen sizes.",
  },
  {
    question: "Which technologies are used for website development?",
    answer:
      "Technology selection depends on project requirements. Relevant technologies may include Next.js, React, TypeScript, Tailwind CSS, Node.js and WordPress.",
  },
  {
    question: "Can a website be developed with SEO in mind?",
    answer:
      "Yes. Website development can include semantic HTML, structured page headings, metadata, internal navigation, sitemap support and technical SEO considerations. Rankings are not guaranteed by development alone.",
  },
  {
    question: "Can OPV develop e-commerce websites?",
    answer:
      "E-commerce website development is among our service areas. The features and integrations depend on the project scope and business requirements.",
  },
  {
    question: "How can I request a website development project?",
    answer:
      "Contact OPV through the website contact page and share your business type, website goals, required pages and functionality. Our team can discuss the next steps.",
  },
];

export default function WebsiteDevelopmentPage() {
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
            <Globe className="h-4 w-4" />
            Website Development Services
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Website Development Company
            <span className="block text-[#F4D545]">
              in India
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            OPV AI Realty Tech develops business websites, responsive
            digital experiences, custom web applications and e-commerce
            platforms. We combine modern web technologies with
            business-focused design and development.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
            >
              Discuss Your Website Project
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
              Modern Web Solutions
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Build a Strong Digital Presence for Your Business
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              A business website is an important part of a company's
              digital presence. It helps visitors understand what
              the business offers, explore its services and connect
              with the organization.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              OPV AI Realty Tech focuses on website development
              that combines responsive layouts, structured content,
              user-friendly navigation and suitable application
              functionality.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Whether you need a company website, an e-commerce
              platform or a custom web application, the design and
              technology approach should match your business goals
              and the needs of your users.
            </p>
          </div>

          <div className="rounded-3xl bg-[#033505] p-8 text-white sm:p-10">
            <Monitor className="h-12 w-12 text-[#F4D545]" />

            <h3 className="mt-7 text-2xl font-extrabold sm:text-3xl">
              Websites Designed for
              <span className="block text-[#F4D545]">
                Modern Businesses
              </span>
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              Build digital experiences that help visitors navigate
              your services, understand your business and take
              meaningful actions.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Responsive website layouts",
                "User-focused page structures",
                "Modern web technologies",
                "Technical SEO considerations",
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

      {/* SOLUTIONS */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our Web Development Capabilities
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Website Design & Development Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explore website development capabilities for different
              business models, digital platforms and customer needs.
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

      {/* TECHNOLOGY STACK */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Technology Stack
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Modern Technologies for Website Development
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Technology selection depends on the website's
              functionality, performance requirements, integrations
              and long-term maintenance needs.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Next.js",
              "React.js",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "WordPress",
              "HTML5",
              "CSS3",
              "REST APIs",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-slate-200 bg-[#F8FAF7] px-5 py-3 text-sm font-bold text-[#265921] transition hover:border-[#E7B30F] hover:bg-[#E7B30F]/10"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WEBSITE BENEFITS */}
      <section className="bg-[#F8FAF7] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Website Quality
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#033505] sm:text-4xl">
              Important Elements of a Business Website
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              A useful website should make information easy to find,
              provide a consistent experience across devices and
              help visitors understand the next step.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Responsive design",
              "Clear navigation",
              "Semantic HTML structure",
              "SEO-friendly metadata",
              "Optimized images",
              "Performance considerations",
              "Accessible interfaces",
              "Useful contact options",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5"
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

      {/* PROCESS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#B88A00]">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#033505] sm:text-4xl">
              Our Website Development Process
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "Understand your business, audience, website goals and functionality.",
              },
              {
                number: "02",
                title: "Design",
                description:
                  "Plan page layouts, visual direction and user navigation.",
              },
              {
                number: "03",
                title: "Development",
                description:
                  "Build responsive pages and implement the required features.",
              },
              {
                number: "04",
                title: "Testing & Launch",
                description:
                  "Review website functionality, responsiveness and technical setup.",
              },
            ].map((step) => (
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
              Website Development FAQs
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
              href="/services/software-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Software Development →
            </Link>

            <Link
              href="/services/mobile-app-development"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              Mobile App Development →
            </Link>

            <Link
              href="/services/saas-cloud-solutions"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              SaaS & Cloud Solutions →
            </Link>

            <Link
              href="/services/seo-digital-growth"
              className="font-semibold text-[#265921] hover:text-[#B88A00]"
            >
              SEO & Digital Growth →
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
            Ready to Build Your Business Website?
          </h2>

          <p className="mt-5 leading-8 text-white/70">
            Tell us about your website requirements and explore
            a digital solution that supports your business goals.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
          >
            Discuss Your Website
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
