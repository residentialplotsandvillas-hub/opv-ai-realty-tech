
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
      "Looking for an AI development company in Hyderabad? Explore AI automation services, AI agent development, generative AI, chatbots and enterprise AI solutions for businesses across India.",
    services: [
      "AI Agent Development Hyderabad",
      "Generative AI Development",
      "AI Chatbot Development",
      "AI Integration Services",
      "Workflow & WhatsApp Automation",
    ],
  },
  {
    id: "software",
    number: "02",
    icon: Code2,
    title: "Software & Product Engineering",
    description:
      "Custom software engineering, website development and mobile app development services in Hyderabad and India, designed to help businesses build reliable digital products.",
    services: [
      "Custom Software Development",
      "Website Development Company Hyderabad",
      "Mobile App Development Company India",
      "Web Application Development",
      "Product & MVP Development",
    ],
  },
  {
    id: "cloud",
    number: "03",
    icon: Cloud,
    title: "SaaS, Cloud & DevOps",
    description:
      "SaaS development services for Hyderabad and India, including cloud software development, scalable SaaS applications, cloud infrastructure and DevOps engineering.",
    services: [
      "SaaS Development Company India",
      "SaaS Product Development Hyderabad",
      "Cloud Software Development",
      "Cloud Architecture & Migration",
      "DevOps & CI/CD",
    ],
  },
  {
    id: "business-systems",
    number: "04",
    icon: BriefcaseBusiness,
    title: "CRM, ERP & Business Systems",
    description:
      "Custom CRM development, ERP software development, lead management and sales automation solutions for real estate businesses, SMEs and enterprises.",
    services: [
      "CRM Software Development Hyderabad",
      "ERP Software Development Hyderabad",
      "Custom CRM Development India",
      "Real Estate CRM Software",
      "Lead Management & Sales Automation",
    ],
  },
  {
    id: "data",
    number: "05",
    icon: Database,
    title: "Data & Business Intelligence",
    description:
      "Turn business data into actionable insights with analytics, predictive models, intelligent reporting and custom dashboards that support better decisions.",
    services: [
      "Business Intelligence Solutions",
      "Data Analytics & Visualization",
      "Predictive Analytics",
      "Custom Business Dashboards",
      "AI-Powered Reporting",
    ],
  },
  {
    id: "digital-experience",
    number: "06",
    icon: Smartphone,
    title: "Web & Mobile Experiences",
    description:
      "Website design and development, responsive web applications, Android and iOS app development, and user-focused digital experiences for businesses in Hyderabad and across India.",
    services: [
      "Website Design Company Hyderabad",
      "Web Development Company India",
      "Mobile App Development Hyderabad",
      "Android & iOS App Development",
      "UI/UX Design & Website Redesign",
    ],
  },
  {
    id: "security",
    number: "07",
    icon: ShieldCheck,
    title: "Cybersecurity & IT Solutions",
    description:
      "Security-conscious application development, cloud security, data protection and IT infrastructure solutions to support dependable business technology.",
    services: [
      "Application & Cloud Security",
      "Data Protection Solutions",
      "Security Assessments",
      "IT Infrastructure Solutions",
      "Secure Software Architecture",
    ],
  },
  {
    id: "growth",
    number: "08",
    icon: TrendingUp,
    title: "Digital Growth & Revenue",
    description:
      "Digital marketing, SEO services, performance marketing, AI search optimization and lead generation solutions for Hyderabad-based and India-wide businesses.",
    services: [
      "Digital Marketing Agency Hyderabad",
      "SEO Services Hyderabad",
      "AEO & GEO Optimization",
      "Google Ads & Performance Marketing",
      "B2B Lead Generation Hyderabad",
    ],
  },
];

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="scroll-mt-24 bg-[#F8F6F0] py-8 sm:py-8 lg:py-8"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION INTRO */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2">
            <BrainCircuit className="h-4 w-4 text-[#075B3B]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              Our Technology Capabilities
            </span>
          </div>

          <h2
            id="solutions-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#263C50] sm:text-4xl lg:text-5xl"
          >
            One Technology Partner.
            <span className="mt-2 block text-[#075B3B]">
              An Entire Digital Growth Stack.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#526577] sm:text-base">
            From AI development and intelligent automation
            to software engineering, SaaS, CRM, ERP,
            website development, mobile applications and
            digital marketing, OPV AI Realty Tech delivers
            business technology solutions in Hyderabad
            and across India.
          </p>
        </div>

        {/* SOLUTIONS GRID */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {solutions.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                id={item.id}
                className="group flex scroll-mt-28 flex-col rounded-2xl border border-[#E5E9E3] bg-white p-6 shadow-[0_8px_25px_rgba(38,60,80,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-[0_18px_45px_rgba(38,60,80,0.09)]"
              >

                {/* CARD HEADER */}
                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#075B3B]/[0.07] text-[#075B3B] transition duration-300 group-hover:bg-[#075B3B] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-sm font-extrabold tracking-wider text-[#C6A052]">
                    {item.number}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-6 min-h-[55px] text-lg font-extrabold leading-6 text-[#263C50] transition-colors group-hover:text-[#075B3B]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-[13px] leading-7 text-[#526577]">
                  {item.description}
                </p>

                {/* SERVICE LIST */}
                <div className="mt-5 space-y-3 border-t border-[#E8EAE5] pt-5">

                  <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.17em] text-[#647586]">
                    Key Capabilities
                  </p>

                  {item.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#075B3B]" />

                      <span className="text-xs font-medium leading-5 text-[#526577]">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CARD CTA */}
                <div className="mt-auto pt-7">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-[#075B3B] transition-all group-hover:gap-3"
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
        <div className="mt-14 overflow-hidden rounded-3xl border border-[#E5E9E3] bg-white p-8 text-center shadow-[0_12px_40px_rgba(38,60,80,0.05)] sm:p-12">

          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#075B3B]">
            Technology Meets Business
          </p>

          <h3 className="mt-5 text-2xl font-extrabold text-[#263C50] sm:text-3xl">
            Have a Project in Mind?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#526577]">
            Whether you need AI development, custom software,
            a SaaS product, CRM, ERP, workflow automation
            or digital marketing, let&apos;s explore the
            right solution for your business.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#075B3B] px-7 py-4 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(7,91,59,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#06472F]"
          >
            Let&apos;s Build With OPV

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
