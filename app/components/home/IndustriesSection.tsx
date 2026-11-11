
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
      "Real estate technology solutions including property portals, custom CRM software, AI lead management, channel partner systems and sales automation.",
    services: [
      "Property Discovery Portals",
      "Real Estate CRM Software Hyderabad",
      "AI Lead & Sales Automation",
      "Channel Partner Management",
    ],
  },
  {
    id: "retail",
    number: "02",
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description:
      "E-commerce website development, customer relationship management, inventory systems and digital marketing automation for retail businesses.",
    services: [
      "E-commerce Website Development",
      "Inventory Management Software",
      "Retail CRM Development",
      "Marketing Automation",
    ],
  },
  {
    id: "healthcare",
    number: "03",
    icon: HeartPulse,
    title: "Healthcare & Wellness",
    description:
      "Healthcare application development, appointment booking platforms, patient management systems and intelligent workflow automation.",
    services: [
      "Healthcare App Development",
      "Appointment Booking Platforms",
      "Patient Management Systems",
      "Healthcare Workflow Automation",
    ],
  },
  {
    id: "education",
    number: "04",
    icon: GraduationCap,
    title: "Education & E-Learning",
    description:
      "Education software development, learning management systems, student management applications and digital learning platforms.",
    services: [
      "Learning Management Systems",
      "Student Management Software",
      "E-Learning Platform Development",
      "Education CRM Software",
    ],
  },
  {
    id: "manufacturing",
    number: "05",
    icon: Factory,
    title: "Manufacturing & Industrial",
    description:
      "ERP software development, manufacturing workflow automation, inventory management and business intelligence solutions.",
    services: [
      "Manufacturing ERP Software",
      "Business Process Automation",
      "Inventory & Operations Management",
      "Business Intelligence Dashboards",
    ],
  },
  {
    id: "logistics",
    number: "06",
    icon: Truck,
    title: "Logistics & Transportation",
    description:
      "Logistics software development, fleet management platforms, tracking systems and automated operations management.",
    services: [
      "Fleet Management Software",
      "Shipment Tracking Platforms",
      "Logistics CRM Solutions",
      "Operations Dashboards",
    ],
  },
  {
    id: "startups",
    number: "07",
    icon: Rocket,
    title: "Startups & SMEs",
    description:
      "Startup technology solutions including MVP development, SaaS product development, custom websites, mobile apps and AI automation.",
    services: [
      "MVP & Product Development",
      "SaaS Development Company India",
      "Startup Website & App Development",
      "AI Automation for Small Businesses",
    ],
  },
  {
    id: "enterprise",
    number: "08",
    icon: BriefcaseBusiness,
    title: "Enterprise & Corporate",
    description:
      "Enterprise AI solutions, custom software development, CRM and ERP integration, cloud technology and business process automation.",
    services: [
      "Enterprise Software Development",
      "Enterprise AI Solutions India",
      "Cloud & Data Integration",
      "Enterprise Workflow Automation",
    ],
  },
  {
    id: "finance",
    number: "09",
    icon: Landmark,
    title: "Finance & Professional Services",
    description:
      "Custom business management software, CRM development, financial reporting dashboards and intelligent workflow solutions.",
    services: [
      "Business Management Systems",
      "Custom CRM Development",
      "Financial Reporting & Analytics",
      "Workflow Automation",
    ],
  },
  {
    id: "hospitality",
    number: "10",
    icon: Utensils,
    title: "Hospitality & Travel",
    description:
      "Hospitality software development, online booking systems, customer engagement platforms and digital marketing solutions.",
    services: [
      "Hotel & Restaurant Booking Platforms",
      "Customer Engagement Software",
      "Hospitality Business Automation",
      "Digital Marketing Services",
    ],
  },
  {
    id: "travel",
    number: "11",
    icon: Plane,
    title: "Travel & Tourism",
    description:
      "Travel portal development, booking applications, tourism CRM software and marketing automation for travel businesses.",
    services: [
      "Travel Portal Development",
      "Online Booking Applications",
      "Travel CRM Software",
      "Marketing Automation",
    ],
  },
];

const realEstateCapabilities = [
  "Property Discovery",
  "Real Estate CRM",
  "AI Sales Agents",
  "Lead Automation",
  "Channel Partner Systems",
  "Project Management",
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="scroll-mt-24 bg-white py-8 text-[#263C50] sm:py-8 lg:py-8"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION INTRO */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-[#F8F6F0] px-4 py-2">
            <Globe2 className="h-4 w-4 text-[#075B3B]" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
              Industries We Serve
            </span>
          </div>

          <h2
            id="industries-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#263C50] sm:text-4xl lg:text-5xl"
          >
            Technology for Every
            <span className="block text-[#075B3B]">
              Ambitious Business.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#526577] sm:text-base">
            Every industry has unique challenges and
            opportunities. We combine artificial intelligence,
            custom software development, SaaS, CRM, ERP,
            workflow automation and digital growth solutions
            to support businesses in Hyderabad and across India.
          </p>
        </div>

        {/* FEATURED REAL ESTATE */}
        <div
          id="real-estate"
          className="group relative mt-14 scroll-mt-28 overflow-hidden rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] p-7 sm:p-10 lg:p-12"
        >

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#075B3B]/[0.045] blur-[100px]"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2">
                <Building2 className="h-4 w-4 text-[#075B3B]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#075B3B]">
                  Our Flagship Industry Expertise
                </span>
              </div>

              <span className="mt-7 block text-xs font-bold tracking-[0.18em] text-[#98732F]">
                01 / REAL ESTATE TECHNOLOGY
              </span>

              <h3 className="mt-4 text-3xl font-extrabold leading-tight text-[#263C50] sm:text-4xl">
                Transforming Real Estate
                <span className="block text-[#075B3B]">
                  Through Technology.
                </span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-8 text-[#526577]">
                Our real estate technology capabilities
                combine property discovery platforms,
                real estate CRM software, AI-powered lead
                management, sales automation and channel
                partner management systems to create
                connected digital property experiences.
              </p>

              <Link
                href="https://www.openplotsandvillas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#075B3B] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(7,91,59,0.12)] transition hover:-translate-y-1 hover:bg-[#06472F]"
              >
                Explore Open Plots &amp; Villas

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>

            {/* FEATURED SERVICES */}
            <div className="grid grid-cols-2 gap-3">
              {realEstateCapabilities.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2 rounded-xl border border-[#E5E9E3] bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#075B3B]" />

                  <span className="text-[11px] font-semibold leading-5 text-[#263C50]">
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
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075B3B]">
                Cross-Industry Capabilities
              </p>

              <h3 className="mt-3 text-2xl font-extrabold text-[#263C50] sm:text-3xl">
                Technology Beyond One Industry.
              </h3>
            </div>

            <p className="max-w-lg text-sm leading-7 text-[#526577]">
              Adaptable AI, software development,
              automation and digital technology
              solutions for startups, SMEs and
              established enterprises.
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
                    className="group flex scroll-mt-28 flex-col rounded-2xl border border-[#E5E9E3] bg-white p-6 shadow-[0_8px_25px_rgba(38,60,80,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-[0_16px_40px_rgba(38,60,80,0.08)]"
                  >

                    {/* ICON AND NUMBER */}
                    <div className="flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#075B3B]/[0.07] text-[#075B3B] transition group-hover:bg-[#075B3B] group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="text-xs font-bold tracking-wider text-[#C6A052]">
                        {item.number}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-6 text-lg font-extrabold leading-7 text-[#263C50] transition group-hover:text-[#075B3B]">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-3 text-xs leading-7 text-[#526577]">
                      {item.description}
                    </p>

                    {/* INDUSTRY SERVICES */}
                    <div className="mt-5 space-y-3 border-t border-[#E8EAE5] pt-5">

                      <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#647586]">
                        Solution Areas
                      </p>

                      {item.services.map((service) => (
                        <div
                          key={service}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#075B3B]" />

                          <span className="text-xs leading-5 text-[#526577]">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-7">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#075B3B] transition group-hover:gap-3"
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
        <div className="mt-16 rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] p-8 text-center sm:p-12">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075B3B]">
            Technology Without Industry Boundaries
          </p>

          <h3 className="mt-5 text-2xl font-extrabold text-[#263C50] sm:text-3xl">
            Your Industry. Your Challenges. Our Technology.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#526577]">
            Tell us about your industry and business goals.
            Let&apos;s explore the right AI development,
            custom software, SaaS, CRM, ERP,
            automation and digital solutions
            for your organization.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#075B3B] px-7 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(7,91,59,0.12)] transition hover:-translate-y-1 hover:bg-[#06472F]"
          >
            Discuss Your Business

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
