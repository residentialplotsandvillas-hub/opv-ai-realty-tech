
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Code2,
  Globe2,
  Layers3,
  Smartphone,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Database,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Our Case Studies | AI, Software & Digital Solutions | OPV AI Realty Tech",
  description:
    "Explore OPV AI Realty Tech case studies featuring real estate technology, AI-powered platforms, custom software, web development and digital solutions.",
  alternates: {
    canonical: "https://www.opvairealtytech.com/case-studies",
  },
  openGraph: {
    title: "Our Case Studies | OPV AI Realty Tech",
    description:
      "Discover technology projects, digital platforms and business solutions built by OPV AI Realty Tech.",
    url: "https://www.opvairealtytech.com/case-studies",
    type: "website",
  },
};

const projects = [
  {
    number: "01",
    category: "Real Estate Technology",
    title: "Open Plots & Villas",
    description:
      "A real estate discovery platform designed to connect property buyers with residential plots, villas and property opportunities.",
    challenge:
      "Property buyers need a convenient way to discover, compare and explore real estate opportunities.",
    solution:
      "Developed a digital property discovery experience with property listings, search, filtering and enquiry functionality.",
    services: ["Web Development", "Real Estate Platform", "UI/UX"],
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    href: "https://www.openplotsandvillas.com",
    icon: Building2,
    image: "/images/case-studies/open-plots-villas.jpg",
    featured: true,
  },
  {
    number: "02",
    category: "Business & Digital Platforms",
    title: "Custom Digital Platforms",
    description:
      "Modern web application experiences designed to improve business operations, customer engagement and digital accessibility.",
    challenge:
      "Businesses need flexible digital platforms that support their changing operational requirements.",
    solution:
      "Designed responsive interfaces and scalable web experiences using modern frontend technologies.",
    services: ["Frontend Engineering", "Web Applications", "UI/UX"],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    href: "/contact",
    icon: Code2,
    image: "/images/case-studies/digital-platforms.jpg",
    featured: false,
  },
  {
    number: "03",
    category: "SaaS & Business Solutions",
    title: "AARNA GrowthOS",
    description:
      "A business growth and management platform concept focused on connecting workflows, business insights and digital operations.",
    challenge:
      "Businesses need connected systems to manage information and improve operational visibility.",
    solution:
      "Developing a platform approach that brings business processes and digital management experiences together.",
    services: ["SaaS Solutions", "Business Systems", "Product Strategy"],
    technologies: ["Next.js", "TypeScript", "Cloud", "Database"],
    href: "/contact",
    icon: Layers3,
    image: "/images/case-studies/aarna-growthos.jpg",
    featured: false,
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: "AI & Intelligent Solutions",
    description:
      "Explore intelligent automation and AI-driven business experiences.",
  },
  {
    icon: Code2,
    title: "Custom Software Engineering",
    description:
      "Modern applications designed around real business requirements.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Digital solutions that support better customer experiences and operations.",
  },
  {
    icon: Smartphone,
    title: "Responsive Experiences",
    description:
      "Digital products designed for desktop, tablet and mobile users.",
  },
];

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "OPV AI Realty Tech Case Studies",
  url: "https://www.opvairealtytech.com/case-studies",
  description:
    "Technology projects and digital solutions by OPV AI Realty Tech.",
  publisher: {
    "@type": "Organization",
    name: "OPV AI Realty Tech",
    url: "https://www.opvairealtytech.com/",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: project.href.startsWith("http")
        ? project.href
        : `https://www.opvairealtytech.com${project.href}`,
    })),
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06111f] text-white">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudySchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="relative border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.13),transparent_45%)]" />

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-400/[0.06] blur-[100px]" />

        <div className="relative mx-auto max-w-[1200px] px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-10">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
            <Sparkles className="h-4 w-4" />
            Our Work & Expertise
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
            Turning Ideas Into
            <span className="block bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
              Digital Success Stories.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Discover how OPV AI Realty Tech approaches technology,
            software engineering, AI-powered solutions and digital
            experiences to address real business challenges.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-7 py-4 text-sm font-bold text-[#06111f] transition hover:-translate-y-1 hover:bg-emerald-200"
            >
              Explore Our Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-bold text-white transition hover:border-emerald-300 hover:text-emerald-300"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
            {[
              ["01", "Featured Platform"],
              ["AI", "Technology Focus"],
              ["Web", "Digital Engineering"],
              ["360°", "Business Solutions"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl font-extrabold text-emerald-300">
                  {value}
                </p>
                <p className="mt-2 text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Technology in Action
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Building Digital Experiences That Solve Business Challenges
            </h2>
          </div>

          <p className="text-sm leading-8 text-slate-400 sm:text-base">
            Every digital project starts with understanding a business
            requirement. Our approach combines technology, product
            thinking and user-focused design to build practical digital
            experiences. Explore our selected platforms and capabilities.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-[1200px] scroll-mt-28 px-5 pb-24 sm:px-8 lg:px-10"
      >
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Our Case Studies
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-400">
            Explore our technology projects, platforms and digital
            development capabilities.
          </p>
        </div>

        <div className="space-y-7">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a1a2b] transition duration-300 hover:border-emerald-300/30"
              >
                <div className="grid lg:grid-cols-2">

                  {/* PROJECT VISUAL */}
                  <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#102d3a] via-[#0b1c2c] to-[#06111f] p-8 sm:min-h-[350px] lg:min-h-[430px]">

                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-300/[0.08] blur-3xl" />

                    <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl sm:p-8">

                      <div className="flex items-center justify-between border-b border-white/10 pb-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white">
                              {project.title}
                            </p>
                            <p className="mt-1 text-[10px] text-slate-500">
                              DIGITAL PROJECT
                            </p>
                          </div>
                        </div>

                        <span className="text-xs font-bold text-emerald-300">
                          {project.number}
                        </span>
                      </div>

                      <div className="mt-6 space-y-3">
                        <div className="h-3 w-3/4 rounded-full bg-white/15" />
                        <div className="h-2 w-full rounded-full bg-white/[0.07]" />
                        <div className="h-2 w-5/6 rounded-full bg-white/[0.07]" />

                        <div className="grid grid-cols-3 gap-3 pt-5">
                          {[1, 2, 3].map((item) => (
                            <div
                              key={item}
                              className="h-20 rounded-xl border border-emerald-300/10 bg-emerald-300/[0.05]"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="text-[10px] text-slate-500">
                          OPV AI REALTY TECH
                        </span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      </div>
                    </div>

                    <div className="absolute bottom-5 left-6 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300/70">
                      {project.category}
                    </div>
                  </div>

                  {/* PROJECT DETAILS */}
                  <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">

                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-300">
                      <span>{project.number}</span>
                      <span className="h-px w-8 bg-emerald-300/40" />
                      {project.category}
                    </div>

                    <h3 className="mt-5 text-2xl font-bold sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-7 space-y-5">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                          Business Challenge
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {project.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                          Our Approach
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-7">
                      <p className="text-xs font-bold uppercase tracking-wider text-white">
                        Technologies
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-medium text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href={project.href}
                        target={
                          project.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          project.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-xs font-bold text-[#06111f] transition hover:bg-emerald-200"
                      >
                        {project.href.startsWith("http")
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

      {/* CAPABILITIES */}
      <section className="border-y border-white/[0.06] bg-[#081725] py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Our Expertise
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Technology Capabilities Behind Our Projects
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              We combine modern development technologies and
              business-focused thinking to create useful digital
              solutions.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-emerald-300/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-300/10 text-emerald-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-base font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 lg:px-10">

        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
            How We Work
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            From Business Challenge to Digital Solution
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Understand", "Discover business goals, requirements and user needs."],
            ["02", "Strategize", "Define the solution, technology and development roadmap."],
            ["03", "Build", "Design, develop and test the digital experience."],
            ["04", "Improve", "Deploy, monitor and continuously improve the product."],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="border-l border-emerald-300/30 pl-6"
            >
              <span className="text-sm font-bold text-emerald-300">
                {number}
              </span>

              <h3 className="mt-4 text-xl font-bold">{title}</h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.06] bg-[#081725] py-20">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">

          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Questions About Our Projects
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                q: "What types of projects does OPV AI Realty Tech develop?",
                a: "We work across AI solutions, custom software engineering, web applications, SaaS platforms, real estate technology and business digital solutions.",
              },
              {
                q: "Does OPV AI Realty Tech provide custom software development?",
                a: "Yes. We work on custom digital products and software solutions based on business requirements, project scope and technology needs.",
              },
              {
                q: "Can you develop real estate technology platforms?",
                a: "We develop digital real estate experiences, including property discovery platforms, web applications and business-focused technology solutions.",
              },
              {
                q: "How can I start a project with OPV AI Realty Tech?",
                a: "Contact our team through the contact page to discuss your requirements, project goals and possible development approach.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-white/10 bg-white/[0.025] p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-white">
                  {faq.q}
                  <span className="text-xl text-emerald-300 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_65%)]" />

        <div className="relative mx-auto max-w-[900px] px-5 text-center sm:px-8">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300">
            <Rocket className="h-7 w-7" />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold sm:text-5xl">
            Have an Idea?
            <span className="block text-emerald-300">
              Let's Build It Together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
            Partner with OPV AI Realty Tech to plan, design and
            develop digital solutions that support your business goals.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-8 py-4 text-sm font-bold text-[#06111f] transition hover:-translate-y-1 hover:bg-emerald-200"
          >
            Discuss Your Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </main>
  );
}
