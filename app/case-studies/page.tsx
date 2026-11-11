
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Code2,
  Layers3,
  Smartphone,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Rocket,
} from "lucide-react";

// ==========================================
// SEO METADATA
// ==========================================

const siteUrl = "https://www.opvairealtytech.com";

export const metadata: Metadata = {
  title: {
    absolute:
      "Projects & Technology Initiatives | OPV AI Realty Tech",
  },
  description:
    "Explore OPV AI Realty Tech projects and technology initiatives, including Open Plots & Villas, AARNA GrowthOS, custom software development, AI-powered platforms and digital business solutions.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Projects & Technology Initiatives | OPV AI Realty Tech",
    description:
      "Discover our live digital platforms, business technology initiatives and software development capabilities.",
    url: "/case-studies",
    type: "website",
  },
};

// ==========================================
// PROJECT DATA
// ==========================================

const projects = [
  {
    number: "01",
    category: "Real Estate Technology",
    status: "Live Platform",
    title: "Open Plots & Villas",
    description:
      "An AI-powered real estate discovery portal connecting buyers, property owners, builders, developers and property professionals through a digital property ecosystem.",
    challenge:
      "Property seekers and real estate professionals need a convenient way to discover, compare, list and explore property opportunities.",
    solution:
      "A dedicated real estate discovery platform featuring property listings, search, filtering, enquiries and AI-assisted digital experiences.",
    services: [
      "Web Development",
      "Real Estate Technology",
      "AI Integration",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
    ],
    href: "https://www.openplotsandvillas.com",
    icon: Building2,
    featured: true,
  },
  {
    number: "02",
    category: "Business & Digital Solutions",
    status: "Custom Solutions",
    title: "Custom Digital Platforms",
    description:
      "Business-focused websites, applications and digital platforms designed around different operational requirements and customer experiences.",
    challenge:
      "Organizations need flexible digital platforms that support their business processes, customer engagement and evolving requirements.",
    solution:
      "Our custom development approach combines responsive interfaces, software engineering and integration planning to create suitable digital solutions.",
    services: [
      "Frontend Engineering",
      "Web Applications",
      "UI/UX",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    href: "/contact",
    icon: Code2,
    featured: false,
  },
  {
    number: "03",
    category: "SaaS & Business Systems",
    status: "Product Initiative",
    title: "AARNA GrowthOS",
    description:
      "A business growth and management platform initiative focused on connecting workflows, business insights and operational processes.",
    challenge:
      "Businesses need connected systems to manage customer information, operational activities and performance visibility.",
    solution:
      "A platform initiative bringing together business processes, workflow management and digital operational experiences.",
    services: [
      "SaaS Solutions",
      "Business Systems",
      "Product Strategy",
    ],
    technologies: [
      "Web Applications",
      "Business Workflows",
      "Database Systems",
      "Cloud Technology",
    ],
    href: "/contact",
    icon: Layers3,
    featured: false,
  },
];

// ==========================================
// TECHNOLOGY CAPABILITIES
// ==========================================

const benefits = [
  {
    icon: Sparkles,
    title: "AI & Intelligent Solutions",
    description:
      "Explore AI-powered applications, intelligent automation and connected business experiences.",
  },
  {
    icon: Code2,
    title: "Custom Software Engineering",
    description:
      "Modern applications designed around real business requirements and user needs.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Digital solutions designed to support customer engagement and operational efficiency.",
  },
  {
    icon: Smartphone,
    title: "Responsive Experiences",
    description:
      "Digital products designed for desktop, tablet and mobile users.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Discover business goals, requirements and user needs.",
  },
  {
    number: "02",
    title: "Strategise",
    description:
      "Define the solution, technology and development roadmap.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Design, develop and test the digital experience.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Deploy, review and continuously improve the product.",
  },
];

const faqs = [
  {
    q: "What types of projects does OPV AI Realty Tech develop?",
    a: "We work across AI solutions, custom software engineering, web applications, SaaS platforms, real estate technology and digital business solutions.",
  },
  {
    q: "Does OPV AI Realty Tech provide custom software development?",
    a: "Yes. We develop custom digital products and software solutions based on business requirements, project scope and technology needs.",
  },
  {
    q: "Can you develop real estate technology platforms?",
    a: "Yes. Our technology capabilities include property discovery portals, real estate web applications, CRM solutions and business automation systems.",
  },
  {
    q: "How can I start a project with OPV AI Realty Tech?",
    a: "Contact our team through the contact page to discuss your business requirements, project goals and suitable development approach.",
  },
];

// ==========================================
// STRUCTURED DATA
// ==========================================

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/case-studies/#webpage`,
  name: "Projects & Technology Initiatives | OPV AI Realty Tech",
  url: `${siteUrl}/case-studies`,
  description:
    "Digital platforms, technology initiatives and custom development capabilities of OPV AI Realty Tech Private Limited.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: project.href.startsWith("http")
        ? project.href
        : `${siteUrl}/case-studies#projects`,
    })),
  },
};

// ==========================================
// PAGE COMPONENT
// ==========================================

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#263C50]">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudySchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* ======================================
          01 — HERO
      ====================================== */}

      <section className="relative overflow-hidden border-b border-[#E5E9E3] bg-[#F8F6F0]">
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-10 sm:pb-24 lg:pt-28">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#075B3B]">
            <Sparkles className="h-4 w-4" />
            Our Work &amp; Expertise
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight text-[#263C50] sm:text-5xl lg:text-6xl">
            Turning Ideas Into
            <span className="block text-[#075B3B]">
              Digital Solutions.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#526577] sm:text-lg">
            Explore the digital platforms, technology
            initiatives and software development
            capabilities behind OPV AI Realty Tech.
            Discover how business requirements can
            be translated into practical digital solutions.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
            >
              Explore Our Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:border-[#075B3B] hover:bg-[#F0F6F1]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[#E5E9E3] pt-8 sm:grid-cols-4">
            {[
              ["01", "Live Platform"],
              ["AI", "Technology Focus"],
              ["Web", "Digital Engineering"],
              ["360°", "Business Solutions"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl font-extrabold text-[#075B3B]">
                  {value}
                </p>

                <p className="mt-2 text-xs text-[#647586]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          02 — INTRODUCTION
      ====================================== */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              Technology in Action
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#263C50] sm:text-4xl">
              Building Digital Experiences That Solve Business Challenges
            </h2>
          </div>

          <p className="text-sm leading-8 text-[#526577] sm:text-base">
            Every digital project starts with understanding
            a business requirement. Our approach combines
            technology, product thinking and user-focused
            design to create practical digital experiences.
            Explore our selected platforms and capabilities.
          </p>
        </div>
      </section>

      {/* ======================================
          03 — PROJECT SHOWCASE
      ====================================== */}

      <section
        id="projects"
        className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-24 sm:px-10"
      >
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              Selected Work
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#263C50] sm:text-4xl">
              Our Projects &amp; Initiatives
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#526577]">
            Explore our technology projects, digital
            platforms and business development capabilities.
          </p>
        </div>

        <div className="space-y-7">
          {projects.map((project) => {
            const Icon = project.icon;
            const isExternal = project.href.startsWith("http");

            return (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-[#E5E9E3] bg-white transition duration-300 hover:border-[#075B3B]/25 hover:shadow-[0_20px_50px_rgba(38,60,80,0.06)]"
              >
                <div className="grid lg:grid-cols-2">

                  {/* PROJECT VISUAL */}

                  <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[#F8F6F0] p-8 sm:min-h-[350px] lg:min-h-[430px]">

                    <div className="relative w-full max-w-md rounded-2xl border border-[#E5E9E3] bg-white p-5 shadow-[0_15px_40px_rgba(38,60,80,0.06)] sm:p-8">

                      <div className="flex items-center justify-between border-b border-[#E5E9E3] pb-5">

                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F6F1] text-[#075B3B]">
                            <Icon className="h-5 w-5" />
                          </div>

                          <div>
                            <p className="text-sm font-extrabold text-[#263C50]">
                              {project.title}
                            </p>

                            <p className="mt-1 text-[10px] uppercase tracking-wider text-[#647586]">
                              {project.status}
                            </p>
                          </div>
                        </div>

                        <span className="text-xs font-extrabold text-[#C6A052]">
                          {project.number}
                        </span>
                      </div>

                      {/* ABSTRACT PRODUCT PREVIEW */}

                      <div className="mt-6 space-y-3">
                        <div className="h-3 w-3/4 rounded-full bg-[#DCE6E0]" />
                        <div className="h-2 w-full rounded-full bg-[#E5E9E3]" />
                        <div className="h-2 w-5/6 rounded-full bg-[#E5E9E3]" />

                        <div className="grid grid-cols-3 gap-3 pt-5">
                          {[1, 2, 3].map((item) => (
                            <div
                              key={item}
                              className="h-20 rounded-xl border border-[#E5E9E3] bg-[#F0F6F1]"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-[#E5E9E3] pt-4">
                        <span className="text-[10px] font-semibold tracking-wide text-[#647586]">
                          OPV AI REALTY TECH
                        </span>

                        <CheckCircle2 className="h-4 w-4 text-[#075B3B]" />
                      </div>
                    </div>

                    <div className="absolute bottom-5 left-6 text-xs font-bold uppercase tracking-[0.14em] text-[#075B3B]">
                      {project.category}
                    </div>
                  </div>

                  {/* PROJECT DETAILS */}

                  <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">

                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                      <span>{project.number}</span>
                      <span className="h-px w-8 bg-[#C6A052]" />
                      {project.category}
                    </div>

                    <h3 className="mt-5 text-2xl font-extrabold text-[#263C50] sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[#526577]">
                      {project.description}
                    </p>

                    <div className="mt-7 space-y-5">

                      <div>
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#263C50]">
                          Business Challenge
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-[#526577]">
                          {project.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#263C50]">
                          Our Approach
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-[#526577]">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-7">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-[#263C50]">
                        Technologies &amp; Capabilities
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-[#E5E9E3] bg-[#F8F6F0] px-3 py-2 text-[11px] font-semibold text-[#526577]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href={project.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={
                          isExternal
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-6 py-3.5 text-xs font-bold text-white transition hover:bg-[#06472F]"
                      >
                        {isExternal
                          ? "Visit Live Platform"
                          : "Discuss a Similar Project"}

                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ======================================
          04 — TECHNOLOGY CAPABILITIES
      ====================================== */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              Our Expertise
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#263C50] sm:text-4xl">
              Technology Capabilities Behind Our Projects
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#526577]">
              We combine modern development technologies
              and business-focused thinking to create
              useful digital solutions.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/25 hover:shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F6F1] text-[#075B3B]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-base font-extrabold text-[#263C50]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#526577]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================
          05 — DEVELOPMENT PROCESS
      ====================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10">

        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
            How We Work
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-[#263C50] sm:text-4xl">
            From Business Challenge to Digital Solution
          </h2>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="border-l-2 border-[#C6A052] pl-6"
            >
              <span className="text-sm font-extrabold text-[#075B3B]">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-extrabold text-[#263C50]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#526577]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ======================================
          06 — FREQUENTLY ASKED QUESTIONS
      ====================================== */}

      <section className="border-t border-[#E5E9E3] bg-[#F8F6F0] py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">

          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#263C50] sm:text-4xl">
              Questions About Our Projects
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-[#E5E9E3] bg-white p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-[#263C50]">
                  {faq.q}

                  <span
                    aria-hidden="true"
                    className="text-xl text-[#075B3B] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-7 text-[#526577]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          07 — FINAL CTA
      ====================================== */}

      <section className="bg-white px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] px-7 py-14 text-center sm:px-14">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#075B3B]">
            <Rocket className="h-7 w-7" />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold text-[#263C50] sm:text-5xl">
            Have an Idea?
            <span className="block text-[#075B3B]">
              Let&apos;s Build It Together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#526577] sm:text-base">
            Partner with OPV AI Realty Tech to plan,
            design and develop digital solutions
            that support your business goals.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
          >
            Discuss Your Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
