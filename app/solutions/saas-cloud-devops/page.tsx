import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Gauge,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Workflow,
  CheckCircle2,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SaaS, Cloud & DevOps Solutions | OPV AI Realty Tech",
  description:
    "Explore SaaS product development, cloud architecture, infrastructure planning, deployment automation and DevOps solutions with OPV AI Realty Tech.",
  alternates: {
    canonical: "/solutions/saas-cloud-devops",
  },
  openGraph: {
    title: "SaaS, Cloud & DevOps Solutions | OPV AI Realty Tech",
    description:
      "Build, deploy and manage scalable digital platforms with SaaS, cloud and DevOps solutions.",
    url: "/solutions/saas-cloud-devops",
    type: "website",
  },
};

const services = [
  {
    icon: Cloud,
    title: "Cloud Strategy & Architecture",
    description:
      "Plan cloud environments around your application requirements, workloads, infrastructure needs and business objectives.",
  },
  {
    icon: Server,
    title: "Cloud Infrastructure",
    description:
      "Design and configure infrastructure components to support application hosting, storage, networking and business workloads.",
  },
  {
    icon: Code2,
    title: "SaaS Product Development",
    description:
      "Plan and develop software-as-a-service products, subscription-based platforms and multi-user business applications.",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description:
      "Explore development and deployment workflows that help teams build, test and release application updates more consistently.",
  },
  {
    icon: CloudCog,
    title: "Cloud Migration & Modernisation",
    description:
      "Assess existing applications and infrastructure to plan suitable cloud migration and modernisation approaches.",
  },
  {
    icon: Network,
    title: "Infrastructure Automation",
    description:
      "Automate suitable infrastructure and environment configuration tasks to reduce repetitive manual processes.",
  },
];

const cloudCapabilities = [
  "Cloud infrastructure planning",
  "Application hosting environments",
  "Cloud storage and database planning",
  "SaaS architecture and development",
  "Development and deployment pipelines",
  "Containerisation and orchestration planning",
  "Infrastructure monitoring approaches",
  "Backup and recovery planning",
];

const benefits = [
  {
    icon: Gauge,
    title: "Scalability",
    description:
      "Plan infrastructure and application architecture with changing business workloads and future growth in mind.",
  },
  {
    icon: Workflow,
    title: "Consistent Delivery",
    description:
      "Structure development and deployment workflows to support repeatable releases and coordinated engineering work.",
  },
  {
    icon: ShieldCheck,
    title: "Security Considerations",
    description:
      "Include access controls, infrastructure security and operational safeguards in the solution design.",
  },
  {
    icon: LockKeyhole,
    title: "Operational Reliability",
    description:
      "Consider monitoring, backups, recovery requirements and infrastructure maintenance as part of the architecture.",
  },
];

const process = [
  {
    number: "01",
    title: "Assess",
    description:
      "Understand your applications, infrastructure, workloads and business requirements.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Define the cloud architecture, deployment model and technical approach.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Configure the agreed environments, applications and automation workflows.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Prepare and deploy the solution according to the agreed release process.",
  },
  {
    number: "05",
    title: "Monitor & Improve",
    description:
      "Review the operational setup and identify opportunities for optimisation.",
  },
];

export default function SaaSCloudDevOpsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              SaaS, Cloud & DevOps Solutions
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build. Deploy.
              <span className="block text-emerald-400">
                Scale with Confidence.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Create a stronger foundation for your digital business with
              cloud-ready applications, SaaS platforms and modern development
              workflows. We help organisations plan technology environments
              around their applications, teams and growth objectives.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Discuss Your Cloud Project
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
              Modern infrastructure. Connected workflows. Scalable products.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                    OPV CLOUD TECHNOLOGY
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    Connected Cloud Architecture
                  </h2>
                </div>

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                  <Cloud size={28} />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <CloudCog className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Cloud Infrastructure
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Environments for business applications.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Code2 className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    SaaS Platforms
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Connected digital products and services.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <GitBranch className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    DevOps Workflows
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Structured build and release processes.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Database className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Data Services
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Data storage and application connectivity.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-4">
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-emerald-300"
                />
                <p className="text-sm text-slate-200">
                  Infrastructure planned around business requirements
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
            A foundation for digital growth
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Technology Infrastructure That Grows with Your Business
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Digital products need more than application code. They also need
            suitable infrastructure, deployment processes and operational
            planning. Cloud and DevOps approaches can help organisations
            manage application environments, coordinate software releases
            and plan for changing technical requirements.
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
              SaaS, Cloud & DevOps Services
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore technology capabilities for developing, deploying and
              operating modern digital applications.
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

      {/* CLOUD CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Technology capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Cloud & Infrastructure Building Blocks
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              The right cloud environment depends on your application,
              workloads, security requirements and operating model. We help
              assess the technical needs and define a suitable approach.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              Discuss your infrastructure needs
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {cloudCapabilities.map((item) => (
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
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Business value
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Build a Stronger Digital Foundation
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Thoughtful infrastructure and delivery practices can support
              better application management and ongoing development.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
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
              From Infrastructure Planning to Deployment
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A structured approach helps align cloud architecture and
              deployment workflows with your application requirements.
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

                <h3 className="mt-5 text-lg font-bold">
                  {step.title}
                </h3>

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
            Ready to Build Your Next Cloud-Powered Product?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Tell us about your application, infrastructure or SaaS idea.
            Let's explore the right technology approach for your business.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Discuss Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}