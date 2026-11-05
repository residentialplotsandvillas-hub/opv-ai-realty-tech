import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bug,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Eye,
  FileSearch,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Network,
  RefreshCw,
  Rocket,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity & IT Solutions | OPV AI Realty Tech",
  description:
    "Explore application security, IT infrastructure, access management, security reviews, cloud security and technology support solutions with OPV AI Realty Tech.",
  alternates: {
    canonical: "/solutions/cybersecurity-it-solutions",
  },
  openGraph: {
    title: "Cybersecurity & IT Solutions | OPV AI Realty Tech",
    description:
      "Build a more secure technology environment with cybersecurity and IT solutions from OPV AI Realty Tech.",
    url: "/solutions/cybersecurity-it-solutions",
    type: "website",
  },
};

const services = [
  {
    icon: FileSearch,
    title: "Security Reviews & Assessments",
    description:
      "Review applications, systems and technology environments to identify potential security gaps and improvement opportunities.",
  },
  {
    icon: Code2,
    title: "Application Security",
    description:
      "Consider secure coding practices, application architecture and security testing throughout the software development lifecycle.",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Review cloud configurations, access arrangements and infrastructure security considerations for your cloud environments.",
  },
  {
    icon: Fingerprint,
    title: "Identity & Access Management",
    description:
      "Plan user access, authentication and permissions around organisational roles and application requirements.",
  },
  {
    icon: Network,
    title: "Network & Infrastructure Security",
    description:
      "Evaluate network and infrastructure security requirements to support a more controlled technology environment.",
  },
  {
    icon: RefreshCw,
    title: "Backup & Recovery Planning",
    description:
      "Explore backup strategies, recovery requirements and continuity planning for important business systems and information.",
  },
];

const capabilities = [
  "Application security considerations",
  "Website and platform security reviews",
  "Cloud configuration reviews",
  "Identity and access management planning",
  "User permissions and access controls",
  "Database security considerations",
  "Infrastructure security reviews",
  "Backup and recovery planning",
  "Security-aware software development",
  "IT environment assessment",
  "Technology risk identification",
  "Security improvement recommendations",
];

const securityAreas = [
  {
    icon: LockKeyhole,
    title: "Protect Applications",
    description:
      "Consider secure development, input validation, application access controls and protection of sensitive information.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description:
      "Review infrastructure configurations, server environments, network exposure and system access arrangements.",
  },
  {
    icon: UserCheck,
    title: "Manage Access",
    description:
      "Organise user identities, role-based permissions and authentication requirements across business systems.",
  },
  {
    icon: Database,
    title: "Safeguard Business Data",
    description:
      "Consider data access, storage, backup arrangements and information handling requirements.",
  },
];

const benefits = [
  {
    title: "Improved Security Awareness",
    description:
      "Understand potential weaknesses and security considerations across your applications and technology environment.",
  },
  {
    title: "More Controlled Access",
    description:
      "Plan user permissions and access arrangements according to business roles and system requirements.",
  },
  {
    title: "Better Risk Visibility",
    description:
      "Identify areas that may need attention and organise security improvement priorities.",
  },
  {
    title: "Stronger Operational Preparedness",
    description:
      "Consider backups, recovery requirements and continuity planning for important business systems.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your applications, infrastructure, data and business technology environment.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Review relevant security configurations, access arrangements and potential risk areas.",
  },
  {
    number: "03",
    title: "Recommend",
    description:
      "Identify improvement opportunities and define a practical security action plan.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Plan and carry out agreed improvements within the defined project scope.",
  },
  {
    number: "05",
    title: "Review",
    description:
      "Revisit the environment and identify further improvements as requirements change.",
  },
];

export default function CybersecurityITSolutionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Cybersecurity & IT Solutions
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Protect Your Digital
              <span className="block text-emerald-400">
                Business Environment.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Build a more considered approach to technology security.
              OPV AI Realty Tech helps organisations explore application
              security, infrastructure reviews, access management and IT
              solutions aligned with their business requirements.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Discuss Your Security Needs
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
              Secure thinking. Responsible technology. Business continuity.
            </p>
          </div>

          {/* HERO SECURITY VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                    OPV SECURITY & IT
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    Digital Security Framework
                  </h2>
                </div>

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                  <ShieldCheck size={28} />
                </div>
              </div>

              <div className="mt-7 flex flex-col items-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 shadow-lg shadow-emerald-400/10">
                  <Shield size={52} strokeWidth={1.5} />
                </div>

                <p className="mt-4 text-lg font-bold text-white">
                  Security by Design
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Consider security throughout the technology lifecycle
                </p>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <LockKeyhole className="mb-4 text-emerald-400" size={25} />
                  <h3 className="font-semibold text-white">
                    Access Control
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Identity and user permissions.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Cloud className="mb-4 text-emerald-400" size={25} />
                  <h3 className="font-semibold text-white">
                    Cloud Security
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Infrastructure configurations.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Database className="mb-4 text-emerald-400" size={25} />
                  <h3 className="font-semibold text-white">
                    Data Protection
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Data handling and recovery.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Eye className="mb-4 text-emerald-400" size={25} />
                  <h3 className="font-semibold text-white">
                    Security Reviews
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Visibility into improvement areas.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-4">
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-emerald-300"
                />
                <p className="text-sm text-slate-200">
                  Security considerations aligned with business needs
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
            Technology with security in mind
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Build a More Secure Foundation for Digital Operations
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Websites, applications, cloud environments and business systems
            all introduce technology security considerations. A structured
            approach helps organisations review how their systems are
            configured, who can access them and how important information
            is managed. Security requirements should be considered as part
            of technology planning, development and ongoing operations.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Cybersecurity & IT Services
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore security and IT capabilities that can help your
              organisation assess and improve its technology environment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECURITY AREAS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Areas of focus
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Security Across Your Technology Environment
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Security planning should consider applications, infrastructure,
            users and business information together.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {securityAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                  <Icon size={25} />
                </div>

                <h3 className="mt-5 text-xl font-bold">{area.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Our capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Practical Security & IT Considerations
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Every technology environment is different. We help identify
              relevant requirements and explore improvements based on your
              applications, infrastructure and business operations.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              Discuss your security requirements
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
            Business value
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Make Security Part of Your Business Technology
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            A considered security approach can help organisations understand
            technology risks and plan appropriate improvements.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <p className="text-sm font-bold text-emerald-600">
                BENEFIT 0{index + 1}
              </p>

              <h3 className="mt-4 text-xl font-bold">{benefit.title}</h3>

              <p className="mt-3 leading-7 text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Our approach
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From Security Review to Improvement
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A structured process helps align security work with your
              organisation's technology environment and priorities.
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

      {/* CTA */}
      <section className="px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-600 px-7 py-14 text-center text-white sm:px-14">
          <div className="mx-auto inline-flex rounded-2xl bg-white/15 p-3">
            <Rocket size={28} />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold sm:text-4xl">
            Let's Strengthen Your Business Technology Environment
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Tell us about your applications, infrastructure or IT security
            requirements. Let's discuss a practical approach for your
            organisation.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Discuss Your Requirements
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}