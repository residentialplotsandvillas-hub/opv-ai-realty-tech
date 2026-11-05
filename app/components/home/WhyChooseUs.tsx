
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Target,
  Lightbulb,
  Workflow,
  Layers3,
  Users,
  ShieldCheck,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "AI-Driven Innovation",
    description:
      "We explore practical applications of artificial intelligence and intelligent automation to help businesses improve how they operate.",
  },
  {
    icon: Target,
    number: "02",
    title: "Business-Focused Approach",
    description:
      "We align technology decisions with business objectives, operational requirements and customer needs.",
  },
  {
    icon: Layers3,
    number: "03",
    title: "Integrated Technology Solutions",
    description:
      "From software and SaaS to cloud, CRM, ERP and automation, we bring connected technology capabilities together.",
  },
  {
    icon: Workflow,
    number: "04",
    title: "Smarter Business Processes",
    description:
      "We focus on simplifying workflows, improving operational efficiency and reducing repetitive manual activities.",
  },
  {
    icon: Lightbulb,
    number: "05",
    title: "Innovation & Adaptability",
    description:
      "We embrace evolving technologies and adaptable approaches to address changing business challenges.",
  },
  {
    icon: Rocket,
    number: "06",
    title: "Growth-Oriented Solutions",
    description:
      "We aim to build flexible digital solutions that can support businesses as their needs and ambitions grow.",
  },
];

const commitments = [
  "Understand your business requirements",
  "Identify suitable technology solutions",
  "Focus on usability and scalability",
  "Build around measurable business goals",
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#F8FAF7] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* SECTION HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E7B30F]/40 bg-[#E7B30F]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#265921]">
            <ShieldCheck className="h-4 w-4 text-[#B88A00]" />
            Why Choose OPV
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#033505] sm:text-4xl lg:text-5xl">
            A Technology Partner
            <span className="block text-[#B88A00]">
              Focused on Your Growth
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Choosing the right technology partner matters. OPV AI Realty
            Tech brings business understanding, technology capabilities
            and an innovation-focused approach together to support your
            digital journey.
          </p>
        </div>

        {/* REASONS GRID */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.number}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#E7B30F]/60 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-[#033505]/5 p-3 transition-colors group-hover:bg-[#E7B30F]/15">
                    <Icon className="h-7 w-7 text-[#265921]" />
                  </div>

                  <span className="text-3xl font-black text-slate-100 transition-colors group-hover:text-[#E7B30F]/30">
                    {reason.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#033505]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* OUR COMMITMENT */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-[#033505] text-white">
          <div className="grid lg:grid-cols-2">

            <div className="p-7 sm:p-10 lg:p-12">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#F4D545]">
                Our Commitment
              </span>

              <h3 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
                Technology Should Create Real Business Value.
              </h3>

              <p className="mt-5 leading-8 text-white/70">
                Our focus is to understand your challenges, identify
                relevant opportunities and develop technology solutions
                that make business operations more effective.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
              >
                Work With Us
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative flex items-center bg-[#265921]/40 p-7 sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#E7B30F]/20" />

              <div className="relative w-full space-y-5">
                {commitments.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.07] p-5"
                  >
                    <div className="rounded-full bg-[#E7B30F]/15 p-2">
                      <CheckCircle2 className="h-5 w-5 text-[#F4D545]" />
                    </div>

                    <span className="text-sm font-semibold text-white/90 sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
