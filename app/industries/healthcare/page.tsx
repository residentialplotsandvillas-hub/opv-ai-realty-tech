import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Globe,
  BarChart3,
  Bot,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Database,
  HeartPulse,
  Hospital,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  Search,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_URL = `${SITE_URL}/industries/healthcare`;
const PAGE_TITLE = "Healthcare Software & Technology Solutions in Hyderabad | OPV AI";
const PAGE_DESCRIPTION =
  "Healthcare technology solutions in Hyderabad: hospital and clinic websites, patient portals, appointment systems, healthcare CRM, AI assistance, workflow automation and analytics.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Healthcare technology solutions Hyderabad",
    "Healthcare software development Hyderabad",
    "Hospital website development",
    "Clinic website development",
    "Patient portal development",
    "Hospital appointment booking software",
    "Healthcare CRM development",
    "Healthcare workflow automation",
    "Healthcare mobile app development",
    "Telehealth platform development",
    "Healthcare AI assistant",
    "Hospital analytics dashboard",
    "Healthcare system integration",
    "Healthcare digital transformation India",
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

const solutions = [
  {
    icon: Globe,
    title: "Healthcare Websites & Portals",
    description:
      "Create professional websites, service information platforms and digital portals for hospitals, clinics and healthcare organisations.",
  },
  {
    icon: CalendarDays,
    title: "Appointment & Booking Systems",
    description:
      "Plan digital appointment requests, scheduling workflows, confirmations and administrative coordination.",
  },
  {
    icon: Users,
    title: "Patient & Customer Management",
    description:
      "Organise enquiry records, communication history and administrative relationship workflows through suitable business systems.",
  },
  {
    icon: Bot,
    title: "AI & Intelligent Assistants",
    description:
      "Explore AI-powered assistants for general service enquiries, website navigation and administrative information workflows.",
  },
  {
    icon: Workflow,
    title: "Healthcare Workflow Automation",
    description:
      "Coordinate suitable administrative tasks, notifications, internal requests and operational processes.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile & Telehealth Platforms",
    description:
      "Develop digital interfaces and application experiences for remote service access and healthcare-related communication.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Plan dashboards and reports for administrative operations, service activity and business performance.",
  },
  {
    icon: Database,
    title: "System Integration",
    description:
      "Connect relevant applications, databases and third-party services according to the organisation's technical requirements.",
  },
];

const businessTypes = [
  {
    title: "Hospitals & Healthcare Groups",
    description:
      "Websites, service portals, administrative workflows and connected business applications.",
  },
  {
    title: "Clinics & Medical Practices",
    description:
      "Online presence, appointment enquiry systems, patient communication and administrative tools.",
  },
  {
    title: "Diagnostic & Pathology Centres",
    description:
      "Digital service information, booking workflows, reporting interfaces and operational applications.",
  },
  {
    title: "Dental & Specialist Clinics",
    description:
      "Service websites, appointment experiences, customer enquiries and practice management workflows.",
  },
  {
    title: "Healthcare Startups",
    description:
      "Digital product development, mobile applications, SaaS platforms and business technology foundations.",
  },
  {
    title: "Wellness & Care Organisations",
    description:
      "Digital engagement platforms, service information, customer management and operational coordination.",
  },
];

const capabilities = [
  "Healthcare website development",
  "Patient and service information portals",
  "Appointment request workflows",
  "Clinic and hospital CRM requirements",
  "Administrative workflow automation",
  "AI-powered general enquiry assistants",
  "Mobile application development",
  "Telehealth platform development",
  "Healthcare business dashboards",
  "Reporting and data visualisation",
  "Application and system integration",
  "Privacy-aware technology planning",
];

const benefits = [
  {
    title: "More Accessible Digital Information",
    description:
      "Help visitors find information about services, locations, appointments and organisation details through clear digital experiences.",
  },
  {
    title: "Organised Administrative Workflows",
    description:
      "Plan connected systems for appointment enquiries, notifications, customer communication and internal coordination.",
  },
  {
    title: "Better Digital Engagement",
    description:
      "Create useful online touchpoints for patients, visitors, staff and other stakeholders.",
  },
  {
    title: "Improved Operational Visibility",
    description:
      "Use appropriate dashboards and reporting to review administrative activity and organisational performance.",
  },
];

const journey = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "Help visitors explore healthcare services, locations and general information.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Connect",
    description:
      "Provide digital pathways for appointment requests and service enquiries.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Communicate",
    description:
      "Coordinate relevant messages, confirmations and administrative updates.",
  },
  {
    number: "04",
    icon: ClipboardList,
    title: "Coordinate",
    description:
      "Support internal administrative workflows and operational reporting.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Review the organisation, users, services, workflows and technology requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the project scope, user journeys, system requirements and data considerations.",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "Create the agreed websites, applications, portals and workflow solutions.",
  },
  {
    number: "04",
    title: "Integrate & Test",
    description:
      "Connect relevant systems and review functionality, usability and security considerations.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review operational needs and identify opportunities for ongoing enhancement.",
  },
];

const faqs = [
  {
    question: "What are healthcare technology solutions?",
    answer:
      "Healthcare technology solutions include digital platforms and software supporting service information, appointment workflows, patient communication, administrative operations and reporting.",
  },
  {
    question: "Does OPV AI Realty Tech develop healthcare software in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad and offers custom websites, digital portals, appointment workflows, healthcare CRM, AI assistance, mobile applications and analytics solutions.",
  },
  {
    question: "Can you develop hospital and clinic appointment systems?",
    answer:
      "Appointment systems can support booking requests, availability management, confirmations, administrative scheduling and relevant notifications according to the organisation's requirements.",
  },
  {
    question: "Can you build patient portals and healthcare CRM systems?",
    answer:
      "Patient-facing portals and healthcare CRM systems can be designed for authorised information access, service enquiries, communication workflows and administrative coordination.",
  },
  {
    question: "How can AI assistants support healthcare organisations?",
    answer:
      "AI assistants may help with general service information, appointment navigation and administrative enquiries. They should not replace qualified medical professionals or independently make clinical decisions.",
  },
  {
    question: "Can healthcare platforms integrate with existing systems?",
    answer:
      "Integration may be possible through supported APIs and approved interfaces. Feasibility depends on the existing systems, permissions, data requirements and security controls.",
  },
  {
    question: "How is patient information protected?",
    answer:
      "Healthcare applications should be planned with appropriate access controls, encryption, secure integrations, audit logging and applicable privacy requirements. Specific safeguards depend on the system and information processed.",
  },
  {
    question: "How much does healthcare software development cost?",
    answer:
      "Development costs depend on platform complexity, features, integrations, data protection requirements, user roles, testing and ongoing maintenance. A requirements assessment is needed for a project quotation.",
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
    title: "Data & Business Intelligence",
    href: "/solutions/data-business-intelligence",
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
      name: "Healthcare Technology Solutions",
      serviceType:
        "Healthcare Software Development, Patient Portals, CRM and Automation",
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
        name: "Healthcare Technology Services",
        itemListElement: solutions.map((solution) => ({
          "@type": "OfferCatalog",
          name: solution.title,
          description: solution.description,
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
          name: "Industries",
          item: `${SITE_URL}/industries`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Healthcare",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function HealthcarePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#263C50]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
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
              <li><ChevronRight className="h-3 w-3" /></li>
              <li>
                <Link href="/industries" className="hover:text-[#075B3B]">
                  Industries
                </Link>
              </li>
              <li><ChevronRight className="h-3 w-3" /></li>
              <li aria-current="page" className="font-semibold text-[#075B3B]">
                Healthcare
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <HeartPulse className="h-4 w-4" />
                Healthcare Technology Solutions
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                Healthcare Software
                <span className="block text-[#075B3B]">
                  & Technology Solutions
                </span>
                <span className="mt-3 block text-2xl font-bold text-[#526577] sm:text-3xl">
                  In Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base font-semibold leading-8 text-[#526577] sm:text-lg">
                Connect Healthcare. Simplify Digital Experiences.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                Support healthcare organisations with modern websites,
                applications, appointment workflows, intelligent automation
                and connected business systems. OPV AI Realty Tech helps
                healthcare businesses explore technology aligned with
                their operational and digital requirements.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your Healthcare Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#healthcare-solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:bg-[#F0F6F1]"
                >
                  Explore Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-8 text-sm text-[#647586]">
                Hyderabad, Telangana · Serving businesses across India
              </p>
            </div>

            {/* HEALTHCARE TECHNOLOGY VISUAL */}
            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-6 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">
              <div className="flex items-center justify-between gap-4 border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Healthcare Technology
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold">
                    Connected Healthcare Ecosystem
                  </h2>
                </div>
                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <HeartPulse className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-[#075B3B]/15 bg-[#F0F6F1] p-5">
                <div className="rounded-xl bg-white p-3 text-[#075B3B]">
                  <Hospital className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-extrabold">
                    Digital Healthcare Platform
                  </h3>
                  <p className="mt-1 text-sm text-[#526577]">
                    Connected services and business workflows
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    icon: CalendarDays,
                    title: "Appointments",
                    description: "Booking and scheduling workflows",
                  },
                  {
                    icon: Bot,
                    title: "AI Assistants",
                    description: "General enquiry assistance",
                  },
                  {
                    icon: Users,
                    title: "Management",
                    description: "Administrative coordination",
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics",
                    description: "Operational reports and insights",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-4 sm:p-5"
                    >
                      <Icon className="h-7 w-7 text-[#075B3B]" />
                      <h3 className="mt-4 text-sm font-extrabold">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-6 text-[#526577]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#F0F6F1] p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#075B3B]" />
                <p className="text-sm font-medium">
                  Privacy and security considered in solution planning
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
              The Future of Healthcare Technology
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Digital Solutions for Connected Healthcare Services
            </h2>
            <p className="mt-6 leading-8 text-[#526577]">
              Healthcare organisations manage a wide range of digital and
              administrative activities, from service information and
              appointments to customer communication and operational reporting.
              Thoughtfully designed technology can help coordinate these
              activities and create more accessible digital experiences for
              patients, visitors and staff.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="healthcare-solutions"
        className="scroll-mt-24 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Healthcare Technology Solutions
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Explore software, AI and automation capabilities for hospitals,
              clinics, diagnostic centres and other healthcare organisations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <article
                  key={solution.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#526577]">
                    {solution.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Who We Serve
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Technology for Different Healthcare Organisations
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Every healthcare organisation has different service models,
              users and operating requirements. Technology should reflect
              those differences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map((business) => (
              <article
                key={business.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition hover:border-[#075B3B]/30 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Hospital className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold">
                  {business.title}
                </h3>
                <p className="mt-3 leading-8 text-[#526577]">
                  {business.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL HEALTHCARE JOURNEY */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Connected Service Journey
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              From Service Discovery to Digital Engagement
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Digital platforms can support different stages of a healthcare
              service journey, from finding information to coordinating
              administrative communication.
            </p>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((stage) => {
              const Icon = stage.icon;
              return (
                <li
                  key={stage.number}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-6"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    Stage {stage.number}
                  </p>
                  <div className="mt-5 inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#526577]">
                    {stage.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* TECHNOLOGY CAPABILITIES */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Technology Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              A Connected Digital Toolkit for Healthcare
            </h2>
            <p className="mt-6 leading-8 text-[#526577]">
              From websites and appointment workflows to applications and
              analytics, we help organisations identify technology capabilities
              that fit their operational needs.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#075B3B] hover:underline"
            >
              Discuss Your Healthcare Requirements
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
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

      {/* BUSINESS OUTCOMES */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Business Outcomes
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Technology That Supports Healthcare Operations
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Well-planned digital systems can help healthcare organisations
              coordinate information, communication and administrative work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-7"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                  Outcome {String(index + 1).padStart(2, "0")}
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

      {/* IMPLEMENTATION PROCESS */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Approach
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              From Healthcare Requirements to Digital Solutions
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              A structured process helps align technology decisions with
              organisational workflows, user needs and project requirements.
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

      {/* HEALTHCARE PRIVACY */}
      <section className="border-y border-[#E5E9E3] bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
              Healthcare Technology with Privacy in Mind
            </h2>
            <p className="mt-6 leading-8 text-[#526577]">
              Healthcare applications may handle sensitive information and
              require careful planning around access, storage, communication
              and integration.
            </p>
            <p className="mt-4 leading-8 text-[#526577]">
              Security and privacy requirements should be assessed during
              project planning and validated against applicable obligations.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#647586]">
              AI assistants are intended for suitable informational and
              administrative tasks, not autonomous diagnosis or treatment.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Role-based access and authentication",
              "Appropriate encryption and secure integrations",
              "Privacy-aware data handling and retention",
              "Audit logging and operational controls",
              "Human oversight for clinical decisions",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-5"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#075B3B]" />
                <span className="text-sm font-semibold leading-7">
                  {item}
                </span>
              </div>
            ))}
          </div>
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
              Healthcare Technology FAQs
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Common questions about healthcare websites, appointment systems,
              CRM, AI assistance, integrations and privacy.
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
            Connect healthcare technology with AI automation, business
            systems and data intelligence.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedSolutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between gap-4 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-5 transition hover:border-[#075B3B]/30"
              >
                <span className="text-sm font-bold">{item.title}</span>
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
            Ready to Build Better Healthcare Digital Experiences?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Tell us about your hospital, clinic, healthcare startup or
            organisation. Explore how software, AI and connected technology
            can support your digital objectives.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your Healthcare Project
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="tel:+919963513939"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
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