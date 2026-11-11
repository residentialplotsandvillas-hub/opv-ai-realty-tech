
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
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
  Send,
  Phone,
} from "lucide-react";

// ==========================================
// COMPANY & EMAIL CONFIGURATION
// ==========================================

const EMAIL_ADDRESS = "opvairealtytech@gmail.com";
const COMPANY_NAME = "OPV AI Realty Tech Private Limited";
const PHONE_NUMBER = "9963513939";

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";

const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";

const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

// ==========================================
// SERVICES & ENQUIRY TYPES
// ==========================================

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

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  projectType: "",
  message: "",
};

// ==========================================
// CONTACT SECTION
// ==========================================

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const updateField = (
    field: keyof typeof initialForm,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
    setFeedback("");
  };

  // ==========================================
  // EMAILJS FORM SUBMISSION
  // ==========================================

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (loading) return;

    setFeedback("");

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      setFeedback(
        "The enquiry service is temporarily unavailable. Please contact our team by email or WhatsApp."
      );
      return;
    }

    setLoading(true);

    const templateParams = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim() || "Not provided",
      service: form.service,
      project_type: form.projectType,
      message: form.message.trim(),
      reply_to: form.email.trim(),
      subject: `New website enquiry from ${form.name.trim()}`,
      to_email: EMAIL_ADDRESS,
      to_name: COMPANY_NAME,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      console.error("EmailJS submission failed:", error);

      setFeedback(
        "Your enquiry could not be sent. Please try again or contact us through WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl =
    `https://wa.me/91${PHONE_NUMBER}?text=` +
    encodeURIComponent(
      "Hello OPV AI Realty Tech, I would like to enquire about your business technology services."
    );

  const contactOptions = [
    {
      icon: Globe2,
      title: "Corporate Website",
      value: "www.opvairealtytech.com",
      href: "https://www.opvairealtytech.com",
      external: true,
    },
    {
      icon: Mail,
      title: "Business Enquiries",
      value: EMAIL_ADDRESS,
      href: `mailto:${EMAIL_ADDRESS}`,
      external: false,
    },
    {
      icon: Phone,
      title: "Call Our Team",
      value: "+91 99635 13939",
      href: `tel:+91${PHONE_NUMBER}`,
      external: false,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Enquiries",
      value: "Connect with our team",
      href: whatsappUrl,
      external: true,
    },
  ];

  const capabilities = [
    { icon: BrainCircuit, label: "AI Solutions" },
    { icon: Code2, label: "Software" },
    { icon: Layers3, label: "SaaS Products" },
    { icon: Workflow, label: "Automation" },
    { icon: Building2, label: "Business Systems" },
    { icon: ShieldCheck, label: "IT Solutions" },
  ];

  const inputClass =
    "w-full rounded-xl border border-[#E5E9E3] " +
    "bg-[#F8F6F0] px-4 py-3.5 text-sm " +
    "text-[#263C50] outline-none transition " +
    "placeholder:text-[#8795A0] " +
    "focus:border-[#075B3B] " +
    "focus:ring-2 focus:ring-[#075B3B]/10";

  const labelClass =
    "mb-2 block text-xs font-bold text-[#263C50]";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 overflow-hidden border-t border-[#E5E9E3] bg-[#F8F6F0] py-20 sm:py-8 lg:py-8"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">

        {/* ======================================
            01 — SECTION INTRODUCTION
        ====================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2">
            <Sparkles className="h-4 w-4 text-[#075B3B]" />

            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#075B3B]">
              Let's Build With OPV
            </span>
          </div>

          <h2
            id="contact-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#263C50] sm:text-4xl lg:text-5xl"
          >
            Have a Business
            <span className="block text-[#075B3B]">
              Challenge?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#526577] sm:text-base">
            Tell us what you want to build, automate or
            grow. Whether you're launching a digital
            product, implementing AI or transforming
            business operations, let's explore the
            right technology solution together.
          </p>
        </div>

        {/* ======================================
            02 — CONTACT CONTENT
        ====================================== */}

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

          {/* LEFT COLUMN */}

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
                Start a Conversation
              </p>

              <h3 className="mt-5 text-3xl font-extrabold leading-tight text-[#263C50] sm:text-4xl">
                Let's Turn Your
                <span className="block text-[#075B3B]">
                  Vision Into Reality.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-8 text-[#526577]">
                Every great digital solution begins
                with understanding the business
                behind it. Share your requirements
                and discover what's possible.
              </p>

              {/* CONTACT OPTIONS */}

              <div className="mt-10 space-y-6">
                {contactOptions.map((option) => {
                  const Icon = option.icon;

                  return (
                    <div
                      key={option.title}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E5E9E3] bg-white text-[#075B3B]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-extrabold text-[#263C50]">
                          {option.title}
                        </p>

                        <a
                          href={option.href}
                          target={
                            option.external
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            option.external
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="mt-1 inline-flex items-center gap-1 break-all text-sm font-semibold text-[#075B3B] transition hover:underline"
                        >
                          {option.value}

                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CAPABILITIES CARD */}

            <div className="mt-12 rounded-2xl border border-[#E5E9E3] bg-white p-6 sm:p-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#263C50]">
                What Can We Help You Build?
              </p>

              <div className="mt-6 grid grid-cols-2 gap-5">
                {capabilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-[#075B3B]" />

                      <span className="text-xs font-medium text-[#526577]">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ======================================
              03 — ENQUIRY FORM
          ====================================== */}

          <div className="rounded-3xl border border-[#E5E9E3] bg-white p-6 shadow-[0_18px_50px_rgba(38,60,80,0.05)] sm:p-9">

            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-extrabold text-[#263C50] sm:text-2xl">
                  Tell Us About Your Project
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#526577]">
                  Share a few details to begin the conversation.
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F6F1] text-[#075B3B] sm:flex">
                <Mail className="h-5 w-5" />
              </div>
            </div>

            {/* SUCCESS MESSAGE */}

            {submitted ? (
              <div
                role="status"
                className="rounded-2xl border border-[#075B3B]/20 bg-[#F0F6F1] p-7 text-center"
              >
                <CheckCircle2 className="mx-auto h-14 w-14 text-[#075B3B]" />

                <h4 className="mt-5 text-xl font-extrabold text-[#263C50]">
                  Enquiry Sent Successfully!
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#526577]">
                  Thank you for contacting OPV AI Realty
                  Tech. Your enquiry has been submitted
                  successfully.
                </p>

                <p className="mt-4 break-all text-sm font-bold text-[#075B3B]">
                  {EMAIL_ADDRESS}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFeedback("");
                  }}
                  className="mt-7 rounded-xl bg-[#075B3B] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* NAME & EMAIL */}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="opv-name"
                      className={labelClass}
                    >
                      Your Name *
                    </label>

                    <input
                      id="opv-name"
                      type="text"
                      autoComplete="name"
                      required
                      minLength={2}
                      maxLength={100}
                      value={form.name}
                      onChange={(e) =>
                        updateField("name", e.target.value)
                      }
                      placeholder="Enter your full name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="opv-email"
                      className={labelClass}
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
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* PHONE & COMPANY */}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="opv-phone"
                      className={labelClass}
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
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="opv-company"
                      className={labelClass}
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
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* SERVICE SELECTION */}

                <div>
                  <label
                    htmlFor="opv-service"
                    className={labelClass}
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
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ENQUIRY TYPE */}

                <div>
                  <label
                    htmlFor="opv-project-type"
                    className={labelClass}
                  >
                    Enquiry Type *
                  </label>

                  <select
                    id="opv-project-type"
                    required
                    value={form.projectType}
                    onChange={(e) =>
                      updateField(
                        "projectType",
                        e.target.value
                      )
                    }
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select enquiry type
                    </option>

                    {projectTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* PROJECT REQUIREMENTS */}

                <div>
                  <label
                    htmlFor="opv-message"
                    className={labelClass}
                  >
                    Tell Us About Your Requirements *
                  </label>

                  <textarea
                    id="opv-message"
                    required
                    minLength={3}
                    maxLength={3000}
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      updateField("message", e.target.value)
                    }
                    placeholder="Briefly describe your business, project or technology requirements..."
                    className={`${inputClass} resize-y leading-7`}
                  />
                </div>

                {/* ERROR / FEEDBACK */}

                {feedback && (
                  <p
                    role="alert"
                    className="rounded-xl border border-[#C6A052]/30 bg-[#F8F6F0] p-4 text-xs leading-6 text-[#8A6028]"
                  >
                    {feedback}
                  </p>
                )}

                {/* SUBMIT BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#075B3B] px-6 py-4 text-sm font-extrabold text-white transition duration-300 hover:bg-[#06472F] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending Your Enquiry...
                    </>
                  ) : (
                    <>
                      Send Project Enquiry

                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* PRIVACY NOTICE */}

                <p className="text-center text-xs leading-6 text-[#647586]">
                  Your information will be used to respond
                  to your business enquiry. Please avoid
                  including passwords, financial credentials
                  or other sensitive information.
                </p>

                <p className="text-center text-xs text-[#647586]">
                  Read our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-bold text-[#075B3B] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>

        {/* ======================================
            04 — BRAND STATEMENT
        ====================================== */}

        <div className="mt-16 border-t border-[#E5E9E3] pt-10 text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
            OPV AI Realty Tech Private Limited
          </p>

          <p className="mt-4 text-xl font-extrabold text-[#263C50] sm:text-2xl">
            Build Smarter. Automate Better. Grow Faster.
          </p>

          <p className="mt-3 text-xs text-[#647586]">
            AI-Powered Business Technology &amp; Growth Platform
          </p>
        </div>
      </div>
    </section>
  );
}
