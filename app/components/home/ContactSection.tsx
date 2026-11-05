
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Globe2,
  Sparkles,
  Building2,
  BrainCircuit,
  Code2,
  Layers3,
  Workflow,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const services = [
  "AI & Intelligent Automation",
  "Custom Software Development",
  "Website Development",
  "Mobile App Development",
  "SaaS Product Development",
  "CRM & ERP Solutions",
  "Cloud & DevOps",
  "Data & Business Intelligence",
  "Cybersecurity & IT Solutions",
  "SEO, AEO & GEO",
  "Digital Marketing",
  "Lead Generation",
  "Business Automation",
  "Real Estate Technology",
  "Digital Transformation Consulting",
  "Other Business Requirements",
];

const projectTypes = [
  "New Project",
  "Existing Business Improvement",
  "Technology Consultation",
  "SaaS Product Idea",
  "Business Automation",
  "Long-Term Technology Partnership",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    projectType: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");

  const whatsappNumber =
    process.env.NEXT_PUBLIC_OPV_WHATSAPP_NUMBER || "";

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setFeedback("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!whatsappNumber) {
      setFeedback(
        "WhatsApp enquiry is not configured yet. Please add your company WhatsApp number in the environment settings."
      );
      return;
    }

    const message = `
Hello OPV AI Realty Tech Team,

I would like to discuss a business project.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Company: ${form.company || "Not provided"}

Service Required: ${form.service}
Project Type: ${form.projectType}

Project Details:
${form.message}

Thank you.
    `.trim();

    const url =
      `https://wa.me/${whatsappNumber.replace(/\D/g, "")}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#071525] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* BACKGROUND EFFECTS */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-400/[0.08] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/[0.08] blur-[130px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION INTRO */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2">
            <Sparkles className="h-4 w-4 text-emerald-300" />

            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-300">
              Let's Build With OPV
            </span>
          </div>

          <h2
            id="contact-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-6xl"
          >
            Have a Business
            <span className="block text-emerald-300">
              Challenge?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
            Tell us what you want to build, automate or grow.
            Whether you are launching a new digital product,
            implementing AI or transforming business operations,
            let's explore the right technology solution together.
          </p>

        </div>

        {/* CONTACT CONTENT */}

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

          {/* LEFT: BRAND / CONTACT INFORMATION */}

          <div className="flex flex-col justify-between">

            <div>

              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-300">
                Start a Conversation
              </p>

              <h3 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
                Let's Turn Your
                <span className="block text-emerald-300">
                  Vision Into Reality.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-8 text-slate-400">
                Every great digital solution begins with
                understanding the business behind it.
                Share your requirements with us and
                let's explore what's possible.
              </p>

              {/* CONTACT OPTIONS */}

              <div className="mt-10 space-y-5">

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300">
                    <Globe2 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Our Corporate Website
                    </p>

                    <Link
                      href="https://www.opvairealtytech.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-sm text-emerald-300 hover:text-emerald-200"
                    >
                      www.opvairealtytech.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300">
                    <MessageCircle className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      WhatsApp Enquiries
                    </p>

                    <p className="mt-1 text-xs leading-6 text-slate-400">
                      Discuss your requirements directly
                      with our team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Business Enquiries
                    </p>

                    <p className="mt-1 text-xs leading-6 text-slate-400">
                      Submit your project requirements
                      through our enquiry form.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* CAPABILITY MINI CARDS */}

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.035] p-6">

              <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-slate-400">
                What Can We Help You Build?
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">

                {[
                  { icon: BrainCircuit, label: "AI Solutions" },
                  { icon: Code2, label: "Software" },
                  { icon: Layers3, label: "SaaS Products" },
                  { icon: Workflow, label: "Automation" },
                  { icon: Building2, label: "Business Systems" },
                  { icon: ShieldCheck, label: "IT Solutions" },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-emerald-300" />

                      <span className="text-[10px] font-medium text-slate-300">
                        {item.label}
                      </span>
                    </div>
                  );
                })}

              </div>
            </div>

          </div>

          {/* RIGHT: ENQUIRY FORM */}

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#12273a] to-[#0b1929] p-6 shadow-2xl sm:p-9">

            <div className="mb-8 flex items-center justify-between gap-4">

              <div>
                <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                  Tell Us About Your Project
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-400">
                  Share a few details to begin the conversation.
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 sm:flex">
                <Mail className="h-5 w-5 text-emerald-300" />
              </div>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME / EMAIL */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="opv-name"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    Your Name *
                  </label>

                  <input
                    id="opv-name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) =>
                      updateField("name", e.target.value)
                    }
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-white/10 bg-[#071525] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-300/50 focus:ring-2 focus:ring-emerald-300/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="opv-email"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    Business Email *
                  </label>

                  <input
                    id="opv-email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={(e) =>
                      updateField("email", e.target.value)
                    }
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-white/10 bg-[#071525] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-300/50 focus:ring-2 focus:ring-emerald-300/10"
                  />
                </div>

              </div>

              {/* PHONE / COMPANY */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="opv-phone"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="opv-phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    maxLength={20}
                    value={form.phone}
                    onChange={(e) =>
                      updateField("phone", e.target.value)
                    }
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-white/10 bg-[#071525] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-300/50 focus:ring-2 focus:ring-emerald-300/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="opv-company"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    Company / Organization
                  </label>

                  <input
                    id="opv-company"
                    type="text"
                    autoComplete="organization"
                    maxLength={150}
                    value={form.company}
                    onChange={(e) =>
                      updateField("company", e.target.value)
                    }
                    placeholder="Your company name"
                    className="w-full rounded-xl border border-white/10 bg-[#071525] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-300/50 focus:ring-2 focus:ring-emerald-300/10"
                  />
                </div>

              </div>

              {/* SERVICE */}

              <div>
                <label
                  htmlFor="opv-service"
                  className="mb-2 block text-xs font-semibold text-slate-300"
                >
                  What Service Are You Looking For? *
                </label>

                <select
                  id="opv-service"
                  required
                  value={form.service}
                  onChange={(e) =>
                    updateField("service", e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#071525] px-4 py-3.5 text-sm text-white outline-none transition focus:border-emerald-300/50 focus:ring-2 focus:ring-emerald-300/10"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* PROJECT TYPE */}

              <div>
                <label
                  htmlFor="opv-project-type"
                  className="mb-2 block text-xs font-semibold text-slate-300"
                >
                  Enquiry Type *
                </label>

                <select
                  id="opv-project-type"
                  required
                  value={form.projectType}
                  onChange={(e) =>
                    updateField("projectType", e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#071525] px-4 py-3.5 text-sm text-white outline-none transition focus:border-emerald-300/50 focus:ring-2 focus:ring-emerald-300/10"
                >
                  <option value="" disabled>
                    Select enquiry type
                  </option>

                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* PROJECT DESCRIPTION */}

              <div>
                <label
                  htmlFor="opv-message"
                  className="mb-2 block text-xs font-semibold text-slate-300"
                >
                  Tell Us About Your Requirements *
                </label>

                <textarea
                  id="opv-message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    updateField("message", e.target.value)
                  }
                  placeholder="Briefly describe your business, project or technology requirements..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#071525] px-4 py-3.5 text-sm leading-7 text-white outline-none transition placeholder:text-slate-600 focus:border-emerald-300/50 focus:ring-2 focus:ring-emerald-300/10"
                />
              </div>

              {/* STATUS MESSAGE */}

              {feedback && (
                <p
                  role="alert"
                  className="rounded-xl border border-amber-300/20 bg-amber-300/[0.07] p-3 text-xs leading-6 text-amber-200"
                >
                  {feedback}
                </p>
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-emerald-300 px-6 py-4 text-sm font-extrabold text-[#06111f] shadow-lg shadow-emerald-400/10 transition duration-300 hover:-translate-y-1 hover:bg-emerald-200"
              >
                Send Project Enquiry

                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <p className="text-center text-[10px] leading-5 text-slate-500">
                Your information will be used to respond to your
                business enquiry. Please avoid including passwords,
                financial credentials or other sensitive information.
              </p>

            </form>
          </div>

        </div>

        {/* BOTTOM BRAND STATEMENT */}

        <div className="mt-16 border-t border-white/10 pt-9 text-center">

          <p className="text-[10px] font-extrabold uppercase tracking-[0.20em] text-emerald-300">
            OPV AI Realty Tech Private Limited
          </p>

          <p className="mt-4 text-xl font-extrabold text-white sm:text-2xl">
            Build Smarter. Automate Better. Grow Faster.
          </p>

          <p className="mt-3 text-xs text-slate-500">
            AI-Powered Business Technology & Growth Platform
          </p>

        </div>

      </div>
    </section>
  );
}
