import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Database,
  FileText,
  HeartPulse,
  Hospital,
  LockKeyhole,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  Search,
  ShieldCheck,
  Stethoscope,
  Users,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare Technology Solutions | OPV AI Realty Tech",
  description:
    "Explore healthcare websites, patient portals, appointment systems, healthcare CRM, workflow automation, analytics and AI-powered digital solutions.",
  alternates: {
    canonical: "/industries/healthcare",
  },
  openGraph: {
    title: "Healthcare Technology Solutions | OPV AI Realty Tech",
    description:
      "Support healthcare organisations with digital platforms, software, automation and connected business systems.",
    url: "/industries/healthcare",
    type: "website",
  },
};

const solutions = [
  {
    icon: Globe2,
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

function Globe2({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Healthcare Technology Solutions
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Connect Healthcare.
              <span className="block text-emerald-400">
                Simplify Digital Experiences.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Support healthcare organisations with modern websites,
              applications, appointment workflows, intelligent automation and
              connected business systems. OPV AI Realty Tech helps healthcare
              businesses explore technology aligned with their operational
              and digital requirements.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Discuss Your Healthcare Project
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/#solutions"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Explore Our Solutions
              </Link>
            </div>

            <p className="mt-8 text-sm text-slate-400">
              Connected services. Smarter workflows. Better digital access.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                    OPV HEALTHCARE TECHNOLOGY
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    Connected Healthcare Ecosystem
                  </h2>
                </div>

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                  <HeartPulse size={28} />
                </div>
              </div>

              <div className="mt-7 flex items-center gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <div className="rounded-xl bg-emerald-400/15 p-3 text-emerald-300">
                  <Hospital size={30} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Digital Healthcare Platform
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    Connected services and business workflows
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <CalendarDays
                    className="mb-4 text-emerald-400"
                    size={26}
                  />
                  <h3 className="font-semibold text-white">
                    Appointments
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Booking and scheduling workflows.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Bot className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    AI Assistants
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    General enquiry assistance.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Users className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Management
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Administrative coordination.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <BarChart3 className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Analytics
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Operational reports and insights.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-[#10233a] px-4 py-4">
                <ShieldCheck
                  size={21}
                  className="shrink-0 text-emerald-300"
                />
                <p className="text-sm text-slate-200">
                  Privacy and security considered in solution planning
                </p>
              </div>
            </div>

            <div className="absolute -right-5 -top-5 -z-10 h-36 w-36 rounded-full bg-emerald-400/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            The future of healthcare technology
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Digital Solutions for Connected Healthcare Services
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Healthcare organisations manage a wide range of digital and
            administrative activities, from service information and
            appointments to customer communication and operational reporting.
            Thoughtfully designed technology can help coordinate these
            activities and create more accessible digital experiences for
            patients, visitors and staff.
          </p>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Our capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Healthcare Technology Solutions
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore software, AI and automation capabilities for hospitals,
              clinics, diagnostic centres and other healthcare organisations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {solution.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Who we serve
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Technology for Different Healthcare Organisations
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Every healthcare organisation has different service models,
            users and operating requirements. Technology should reflect
            those differences.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businessTypes.map((business) => (
            <article
              key={business.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
            >
              <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <Hospital size={25} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {business.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {business.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* DIGITAL HEALTHCARE JOURNEY */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Connected service journey
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From Service Discovery to Digital Engagement
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Digital platforms can support different stages of a
              healthcare service journey, from finding information to
              coordinating administrative communication.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
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
            ].map((stage) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="text-sm font-bold text-emerald-400">
                    STAGE {stage.number}
                  </p>

                  <div className="mt-5 inline-flex rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{stage.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {stage.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Technology capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A Connected Digital Toolkit for Healthcare
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              From websites and appointment workflows to applications and
              analytics, we help organisations identify technology
              capabilities that fit their operational needs.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              Discuss your healthcare requirements
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />

                <span className="text-sm font-medium leading-6 text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Business outcomes
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Technology That Supports Healthcare Operations
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Well-planned digital systems can help healthcare organisations
            coordinate information, communication and administrative work.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <p className="text-sm font-bold text-emerald-600">
                OUTCOME 0{index + 1}
              </p>

              <h3 className="mt-4 text-xl font-bold">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Our approach
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From Healthcare Requirements to Digital Solutions
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A structured process helps align technology decisions with
              organisational workflows, user needs and project requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-3xl font-bold text-emerald-400">
                  {step.number}
                </p>

                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-600 px-7 py-14 text-center text-white sm:px-14">
          <div className="mx-auto inline-flex rounded-2xl bg-white/15 p-3">
            <Rocket size={28} />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold sm:text-4xl">
            Ready to Build Better Healthcare Digital Experiences?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Tell us about your hospital, clinic, healthcare startup or
            organisation. Let's explore how software, AI and connected
            technology can support your digital objectives.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Discuss Your Healthcare Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}