
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cloud,
  Database,
  BriefcaseBusiness,
  ShieldCheck,
  TrendingUp,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

const solutions = [
  {
    id: "ai",
    number: "01",
    icon: BrainCircuit,
    title: "AI & Intelligent Automation",
    description:
      "Transform business operations with artificial intelligence, intelligent agents and automated workflows.",
    services: [
      "Generative AI Solutions",
      "AI Voice & Chat Agents",
      "AI Business Assistants",
      "Intelligent Workflow Automation",
    ],
    accent: "emerald",
  },
  {
    id: "software",
    number: "02",
    icon: Code2,
    title: "Software & Product Engineering",
    description:
      "Build powerful digital products, custom applications and software ecosystems designed around your business.",
    services: [
      "Custom Software Development",
      "Web Application Development",
      "Mobile Application Development",
      "Product & MVP Development",
    ],
    accent: "blue",
  },
  {
    id: "cloud",
    number: "03",
    icon: Cloud,
    title: "SaaS, Cloud & DevOps",
    description:
      "Develop scalable SaaS products and reliable cloud infrastructure for modern digital businesses.",
    services: [
      "SaaS Product Development",
      "Cloud Architecture & Migration",
      "DevOps & CI/CD",
      "Infrastructure Management",
    ],
    accent: "cyan",
  },
  {
    id: "business-systems",
    number: "04",
    icon: BriefcaseBusiness,
    title: "CRM, ERP & Business Systems",
    description:
      "Connect customers, teams, workflows and business operations through intelligent management systems.",
    services: [
      "Custom CRM Development",
      "ERP Solutions",
      "HRMS & Employee Systems",
      "Business Process Automation",
    ],
    accent: "amber",
  },
  {
    id: "data",
    number: "05",
    icon: Database,
    title: "Data & Business Intelligence",
    description:
      "Convert business information into meaningful insights, reports and intelligent decisions.",
    services: [
      "Business Intelligence",
      "Data Analytics & Visualization",
      "Predictive Analytics",
      "Custom Business Dashboards",
    ],
    accent: "violet",
  },
  {
    id: "digital-experience",
    number: "06",
    icon: Smartphone,
    title: "Web & Mobile Experiences",
    description:
      "Create elegant, responsive and high-performance digital experiences for customers and teams.",
    services: [
      "Corporate & E-commerce Websites",
      "Android & iOS Applications",
      "UI/UX & Product Design",
      "Website Performance Optimization",
    ],
    accent: "pink",
  },
  {
    id: "security",
    number: "07",
    icon: ShieldCheck,
    title: "Cybersecurity & IT Solutions",
    description:
      "Build reliable digital foundations with security-conscious architecture and IT infrastructure services.",
    services: [
      "Application & Cloud Security",
      "Data Protection",
      "Security Assessment",
      "IT Infrastructure Solutions",
    ],
    accent: "teal",
  },
  {
    id: "growth",
    number: "08",
    icon: TrendingUp,
    title: "Digital Growth & Revenue",
    description:
      "Connect digital marketing, search visibility, lead generation and automation to business growth.",
    services: [
      "SEO, AEO & GEO",
      "Performance & Digital Marketing",
      "B2B & B2C Lead Generation",
      "Marketing & Sales Automation",
    ],
    accent: "orange",
  },
];

const accentStyles: Record<
  string,
  { icon: string; background: string; hover: string }
> = {
  emerald: {
    icon: "text-emerald-700",
    background: "bg-emerald-50",
    hover: "group-hover:bg-emerald-700 group-hover:text-white",
  },
  blue: {
    icon: "text-blue-700",
    background: "bg-blue-50",
    hover: "group-hover:bg-blue-700 group-hover:text-white",
  },
  cyan: {
    icon: "text-cyan-700",
    background: "bg-cyan-50",
    hover: "group-hover:bg-cyan-700 group-hover:text-white",
  },
  amber: {
    icon: "text-amber-700",
    background: "bg-amber-50",
    hover: "group-hover:bg-amber-500 group-hover:text-white",
  },
  violet: {
    icon: "text-violet-700",
    background: "bg-violet-50",
    hover: "group-hover:bg-violet-700 group-hover:text-white",
  },
  pink: {
    icon: "text-pink-700",
    background: "bg-pink-50",
    hover: "group-hover:bg-pink-700 group-hover:text-white",
  },
  teal: {
    icon: "text-teal-700",
    background: "bg-teal-50",
    hover: "group-hover:bg-teal-700 group-hover:text-white",
  },
  orange: {
    icon: "text-orange-700",
    background: "bg-orange-50",
    hover: "group-hover:bg-orange-600 group-hover:text-white",
  },
};

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="scroll-mt-24 bg-[#f7f9fc] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADING */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
            <BrainCircuit className="h-4 w-4 text-emerald-700" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-800">
              Our Technology Capabilities
            </span>
          </div>

          <h2
            id="solutions-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#101c2c] sm:text-4xl lg:text-5xl"
          >
            One Technology Partner.
            <span className="mt-2 block text-emerald-700">
              An Entire Digital Growth Stack.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
            From artificial intelligence and software engineering
            to business systems, cloud technology and digital
            growth, we help businesses turn ideas into intelligent
            digital solutions.
          </p>

        </div>

        {/* SERVICE CARDS */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {solutions.map((item) => {
            const Icon = item.icon;
            const style = accentStyles[item.accent];

            return (
              <article
                key={item.id}
                id={item.id}
                className="group scroll-mt-28 flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]"
              >
                {/* CARD HEADER */}
                <div className="flex items-center justify-between">

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.background} ${style.icon} transition-all duration-300 ${style.hover}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-sm font-extrabold tracking-wider text-slate-300">
                    {item.number}
                  </span>

                </div>

                {/* TITLE */}
                <h3 className="mt-6 min-h-[55px] text-lg font-extrabold leading-6 text-[#142236] transition-colors group-hover:text-emerald-700">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 min-h-[105px] text-[13px] leading-7 text-slate-500">
                  {item.description}
                </p>

                {/* SERVICES */}
                <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">

                  <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.17em] text-slate-400">
                    Key Capabilities
                  </p>

                  {item.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

                      <span className="text-xs font-medium leading-5 text-slate-600">
                        {service}
                      </span>
                    </div>
                  ))}

                </div>

                {/* CARD CTA */}
                <div className="mt-auto pt-7">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-700 transition-all group-hover:gap-3"
                    aria-label={`Discuss ${item.title} with OPV AI Realty Tech`}
                  >
                    Discuss Your Project

                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>

              </article>
            );
          })}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-[#081a2b] p-8 text-center sm:p-12">

          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-300">
            Technology Meets Business
          </p>

          <h3 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
            Have a Project in Mind?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Whether you need AI, custom software, a SaaS product,
            business automation or digital growth, let's explore
            the right solution for your business.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-300 px-7 py-4 text-sm font-extrabold text-[#06111f] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-200"
          >
            Let's Build With OPV

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

        </div>

      </div>
    </section>
  );
}
