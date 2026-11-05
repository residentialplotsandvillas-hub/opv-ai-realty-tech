
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Factory,
  Truck,
  Rocket,
  BriefcaseBusiness,
  Landmark,
  Utensils,
  Plane,
  CheckCircle2,
  Globe2,
} from "lucide-react";

const industries = [
  {
    id: "real-estate",
    number: "01",
    icon: Building2,
    title: "Real Estate & Infrastructure",
    description:
      "Intelligent property platforms, real estate CRM, lead management, sales automation and digital property experiences.",
    services: [
      "Property Discovery Portals",
      "Real Estate CRM & ERP",
      "AI Lead & Sales Automation",
      "Channel Partner Management",
    ],
    featured: true,
  },
  {
    id: "retail",
    number: "02",
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description:
      "Digital commerce ecosystems, customer engagement, inventory solutions and intelligent marketing.",
    services: [
      "E-commerce Development",
      "Inventory Management",
      "Customer CRM",
      "Marketing Automation",
    ],
  },
  {
    id: "healthcare",
    number: "03",
    icon: HeartPulse,
    title: "Healthcare & Wellness",
    description:
      "Digital healthcare experiences, patient management systems and connected workflows.",
    services: [
      "Healthcare Applications",
      "Appointment Platforms",
      "Patient Management",
      "Workflow Automation",
    ],
  },
  {
    id: "education",
    number: "04",
    icon: GraduationCap,
    title: "Education & E-Learning",
    description:
      "Smart learning platforms, student management and digital education ecosystems.",
    services: [
      "Learning Management Systems",
      "Student Management",
      "Online Education Platforms",
      "Education CRM",
    ],
  },
  {
    id: "manufacturing",
    number: "05",
    icon: Factory,
    title: "Manufacturing & Industrial",
    description:
      "Connected business systems, operational automation and data-driven industrial solutions.",
    services: [
      "ERP & Business Systems",
      "Workflow Automation",
      "Inventory & Operations",
      "Business Intelligence",
    ],
  },
  {
    id: "logistics",
    number: "06",
    icon: Truck,
    title: "Logistics & Transportation",
    description:
      "Digital operations, fleet management, tracking systems and intelligent logistics workflows.",
    services: [
      "Fleet Management Systems",
      "Tracking Platforms",
      "Logistics CRM",
      "Operations Dashboards",
    ],
  },
  {
    id: "startups",
    number: "07",
    icon: Rocket,
    title: "Startups & SMEs",
    description:
      "Technology foundations that help new ventures launch digital products and scale business operations.",
    services: [
      "MVP Development",
      "SaaS Product Development",
      "Business Websites & Apps",
      "AI & Automation",
    ],
  },
  {
    id: "enterprise",
    number: "08",
    icon: BriefcaseBusiness,
    title: "Enterprise & Corporate",
    description:
      "Integrated technology ecosystems, enterprise applications and digital transformation solutions.",
    services: [
      "Enterprise Software",
      "Digital Transformation",
      "Cloud & Data Solutions",
      "Enterprise Automation",
    ],
  },
  {
    id: "finance",
    number: "09",
    icon: Landmark,
    title: "Finance & Professional Services",
    description:
      "Business applications, customer management and intelligent workflow solutions for professional organizations.",
    services: [
      "Business Management Systems",
      "Customer Management",
      "Reporting & Analytics",
      "Workflow Automation",
    ],
  },
  {
    id: "hospitality",
    number: "10",
    icon: Utensils,
    title: "Hospitality & Travel",
    description:
      "Digital booking experiences, customer engagement and management solutions for hospitality businesses.",
    services: [
      "Booking Platforms",
      "Customer Engagement",
      "Business Automation",
      "Digital Marketing",
    ],
  },
  {
    id: "travel",
    number: "11",
    icon: Plane,
    title: "Travel & Tourism",
    description:
      "Digital travel experiences, booking applications and connected customer service platforms.",
    services: [
      "Travel Portals",
      "Booking Applications",
      "Customer CRM",
      "Marketing Automation",
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION INTRO */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
            <Globe2 className="h-4 w-4 text-emerald-700" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.20em] text-emerald-800">
              Industries We Serve
            </span>
          </div>

          <h2
            id="industries-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#101c2c] sm:text-4xl lg:text-5xl"
          >
            Technology for Every
            <span className="block text-emerald-700">
              Ambitious Business.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
            Every industry has unique challenges and
            opportunities. We bring artificial intelligence,
            software engineering, business systems and digital
            growth capabilities together to build solutions
            around different business needs.
          </p>

        </div>

        {/* FEATURED REAL ESTATE INDUSTRY */}
        <div
          id="real-estate"
          className="group relative mt-14 scroll-mt-28 overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-[#0c302b] via-[#102d36] to-[#0b1b2c] p-7 text-white sm:p-10 lg:p-12"
        >
          {/* Background effects */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-emerald-400/[0.12] blur-[100px]"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2">
                <Building2 className="h-4 w-4 text-emerald-300" />

                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-emerald-300">
                  Our Flagship Industry Expertise
                </span>
              </div>

              <span className="mt-7 block text-xs font-bold tracking-[0.18em] text-emerald-300/70">
                01 / REAL ESTATE TECHNOLOGY
              </span>

              <h3 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                Transforming Real Estate
                <span className="block text-emerald-300">
                  Through Technology.
                </span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300">
                Our real estate technology capabilities combine
                property discovery, CRM, intelligent lead
                management, sales systems and automation to
                create connected digital property experiences.
              </p>

              <Link
                href="https://www.openplotsandvillas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-300 px-6 py-3.5 text-sm font-bold text-[#06111f] transition hover:-translate-y-1 hover:bg-emerald-200"
              >
                Explore Open Plots & Villas

                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* FEATURED SERVICES */}
            <div className="grid grid-cols-2 gap-3">
              {[
                "Property Discovery",
                "Real Estate CRM",
                "AI Sales Agents",
                "Lead Automation",
                "Channel Partner Systems",
                "Project Management",
              ].map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] p-4"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />

                  <span className="text-[11px] font-semibold leading-5 text-slate-200">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OTHER INDUSTRIES */}
        <div className="mt-16">

          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                Cross-Industry Capabilities
              </p>

              <h3 className="mt-3 text-2xl font-extrabold text-[#142236] sm:text-3xl">
                Technology Beyond One Industry.
              </h3>
            </div>

            <p className="max-w-lg text-sm leading-7 text-slate-500">
              Adaptable technology capabilities for startups,
              growing businesses and established organizations.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {industries
              .filter((item) => item.id !== "real-estate")
              .map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    id={item.id}
                    key={item.id}
                    className="group scroll-mt-28 flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
                  >
                    {/* ICON AND NUMBER */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="text-xs font-bold tracking-wider text-slate-300">
                        {item.number}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-6 text-lg font-extrabold leading-7 text-[#142236] transition group-hover:text-emerald-700">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-3 min-h-[78px] text-xs leading-7 text-slate-500">
                      {item.description}
                    </p>

                    {/* INDUSTRY SERVICES */}
                    <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                        Solution Areas
                      </p>

                      {item.services.map((service) => (
                        <div
                          key={service}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />

                          <span className="text-xs leading-5 text-slate-600">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-7">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 transition group-hover:gap-3"
                      >
                        Discuss Your Industry Needs

                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </div>

                  </article>
                );
              })}

          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-[#f7f9fc] p-8 text-center sm:p-12">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
            Technology Without Industry Boundaries
          </p>

          <h3 className="mt-5 text-2xl font-extrabold text-[#142236] sm:text-3xl">
            Your Industry. Your Challenges. Our Technology.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
            Tell us about your industry and business goals.
            Let's explore the right AI, software, automation
            and digital solutions for your organization.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#0b1b2c] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-emerald-700"
          >
            Discuss Your Business

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
