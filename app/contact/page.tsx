
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// ==========================================
// COMPANY INFORMATION
// ==========================================

const COMPANY_NAME =
  "OPV AI Realty Tech Private Limited";

const WEBSITE =
  "https://www.opvairealtytech.com";

const EMAIL =
  "opvairealtytech@gmail.com";

const PHONE = "919963513939";

const DISPLAY_PHONE = "+91 99635 13939";

const ADDRESS =
  "#101, Road No: 10, Jaya Kesav Avenue, Kakatiya Hills, Madhapur, Hyderabad, Telangana, India";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(ADDRESS);

const WHATSAPP_URL =
  `https://wa.me/${PHONE}?text=` +
  encodeURIComponent(
    "Hello OPV AI Realty Tech, I would like to discuss a technology project."
  );

// ==========================================
// EMAILJS CONFIGURATION
// ==========================================

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";

const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";

const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

// ==========================================
// FORM CONFIGURATION
// ==========================================

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

type ContactForm = typeof initialForm;

const services = [
  "AI Development & Automation",
  "Custom Software Development",
  "Website Development",
  "Mobile App Development",
  "SaaS & Cloud Solutions",
  "CRM & ERP Development",
  "Data Engineering & Analytics",
  "Business Automation",
  "SEO & Digital Growth",
  "AI Sales Agents",
  "Real Estate Technology",
  "Other Requirements",
];

const budgets = [
  "Below ₹50,000",
  "₹50,000 – ₹1 Lakh",
  "₹1 Lakh – ₹5 Lakhs",
  "₹5 Lakhs – ₹10 Lakhs",
  "Above ₹10 Lakhs",
  "Not decided",
];

const inputClass =
  "w-full rounded-xl border border-[#E5E9E3] bg-white " +
  "px-4 py-3.5 text-sm text-[#263C50] outline-none " +
  "transition placeholder:text-[#84919C] " +
  "focus:border-[#075B3B] focus:ring-2 " +
  "focus:ring-[#075B3B]/10";

const labelClass =
  "mb-2 block text-sm font-bold text-[#263C50]";

// ==========================================
// CONTACT PAGE
// ==========================================

export default function ContactPage() {
  const [form, setForm] =
    useState<ContactForm>(initialForm);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const updateField = (
    field: keyof ContactForm,
    value: string
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setError("");
  };

  // ========================================
  // EMAILJS FORM SUBMISSION
  // ========================================

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (loading) return;

    setError("");

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      setError(
        "Email service is not configured. Please contact us through WhatsApp or phone."
      );
      return;
    }

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    if (
      name.length < 2 ||
      !email ||
      !phone ||
      !form.service ||
      message.length < 10
    ) {
      setError(
        "Please complete all required fields and provide at least 10 characters in your project details."
      );
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          phone,
          company:
            form.company.trim() || "Not provided",
          service: form.service,
          budget:
            form.budget || "Not specified",
          message,
          reply_to: email,
          subject:
            `New website enquiry from ${name}`,
          to_email: EMAIL,
          to_name: COMPANY_NAME,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitted(true);
      setForm(initialForm);
    } catch (err) {
      console.error(
        "EmailJS submission error:",
        err
      );

      setError(
        "We could not send your enquiry. Please try again or contact us through WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#263C50]">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="border-b border-[#E5E9E3] bg-[#F8F6F0]">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-14 sm:px-10 lg:pb-24 lg:pt-20">

          <nav
            aria-label="Breadcrumb"
            className="mb-12"
          >
            <ol className="flex items-center gap-2 text-xs text-[#647586]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#075B3B]"
                >
                  Home
                </Link>
              </li>

              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>

              <li
                aria-current="page"
                className="font-semibold text-[#075B3B]"
              >
                Contact Us
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* HERO CONTENT */}

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#075B3B]">
                <MessageCircle className="h-4 w-4" />
                Let's Connect
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Let's Build
                <span className="block text-[#075B3B]">
                  Something Great
                </span>
                Together.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#526577]">
                Have a business idea, technology
                requirement or digital transformation
                project in mind?
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                Connect with OPV AI Realty Tech
                to explore AI, software engineering,
                SaaS, CRM, automation and digital
                growth solutions tailored to your
                business requirements.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:bg-[#F0F6F1]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>

              <p className="mt-8 flex items-center gap-2 text-sm text-[#647586]">
                <MapPin className="h-4 w-4 shrink-0 text-[#075B3B]" />
                Hyderabad, Telangana, India
              </p>
            </div>

            {/* HERO VISUAL */}

            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-7 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">

              <div className="flex items-center justify-between gap-4 border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV AI Realty Tech
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold">
                    Let's Connect Your Vision
                  </h2>
                </div>

                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Sparkles className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: MessageCircle,
                    title: "Discuss",
                    text: "Share your business idea",
                  },
                  {
                    icon: Building2,
                    title: "Discover",
                    text: "Explore your requirements",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Plan",
                    text: "Define the right approach",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Build",
                    text: "Move towards execution",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-5"
                    >
                      <Icon className="h-7 w-7 text-[#075B3B]" />

                      <h3 className="mt-4 font-extrabold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#526577]">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-xl bg-[#F0F6F1] p-5">
                <p className="text-sm font-semibold text-[#075B3B]">
                  Build Smarter • Automate Better • Grow Faster
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          CONTACT DETAILS & ENQUIRY FORM
      ===================================== */}

      <section
        id="contact-information"
        className="scroll-mt-24 py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Contact OPV AI
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Let's Talk About Your Next Project
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Whether you are launching a digital
              product, modernising operations or
              exploring AI-powered solutions, share
              your requirements with our team.
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">

            {/* CONTACT INFORMATION */}

            <div className="space-y-5">

              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  description:
                    "For business and project enquiries",
                  value: EMAIL,
                  href: `mailto:${EMAIL}`,
                },
                {
                  icon: Phone,
                  title: "Call Our Team",
                  description:
                    "Discuss your technology requirements",
                  value: DISPLAY_PHONE,
                  href: `tel:+${PHONE}`,
                },
                {
                  icon: Globe2,
                  title: "Our Website",
                  description:
                    "Explore OPV AI Realty Tech",
                  value: "www.opvairealtytech.com",
                  href: WEBSITE,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-5 rounded-2xl border border-[#E5E9E3] bg-white p-6 transition hover:border-[#075B3B]/30 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F6F1] text-[#075B3B]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-extrabold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-[#526577]">
                        {item.description}
                      </p>

                      <a
                        href={item.href}
                        className="mt-3 inline-block break-all text-sm font-bold text-[#075B3B] hover:underline"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                );
              })}

              {/* OFFICE ADDRESS */}

              <div className="flex gap-5 rounded-2xl border border-[#E5E9E3] bg-white p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F6F1] text-[#075B3B]">
                  <MapPin className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="font-extrabold">
                    Our Office
                  </h3>

                  <p className="mt-3 text-sm leading-8 text-[#526577]">
                    #101, Road No: 10,
                    <br />
                    Jaya Kesav Avenue,
                    <br />
                    Kakatiya Hills, Madhapur,
                    <br />
                    Hyderabad, Telangana, India.
                  </p>

                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#075B3B] hover:underline"
                  >
                    Get Directions
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* BUSINESS ENQUIRIES */}

              <div className="flex gap-5 rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#075B3B]">
                  <Clock3 className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="font-extrabold">
                    Business Enquiries
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#526577]">
                    Send your requirements through
                    the enquiry form or contact us
                    directly by phone or WhatsApp.
                  </p>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
              >
                <MessageCircle className="h-5 w-5" />
                Contact Through WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* =================================
                ENQUIRY FORM
            ================================= */}

            <div
              id="contact-form"
              className="scroll-mt-28 rounded-3xl border border-[#E5E9E3] bg-[#F8F6F0] p-6 shadow-sm sm:p-9 lg:p-10"
            >
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
                  Project Enquiry
                </p>

                <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  Tell Us About Your Project
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#526577]">
                  Complete the form below and share
                  your business or technology requirements.
                </p>

                <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#075B3B]/10 bg-[#F0F6F1] p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#075B3B]" />

                  <p className="text-xs leading-6 text-[#526577]">
                    Your enquiry is processed using
                    EmailJS. Please avoid including
                    passwords or sensitive financial
                    information.
                  </p>
                </div>
              </div>

              {submitted ? (
                <div
                  role="status"
                  className="rounded-2xl border border-[#075B3B]/20 bg-white p-8 text-center"
                >
                  <CheckCircle2 className="mx-auto h-14 w-14 text-[#075B3B]" />

                  <h3 className="mt-5 text-2xl font-extrabold">
                    Enquiry Sent Successfully!
                  </h3>

                  <p className="mt-4 leading-8 text-[#526577]">
                    Thank you for contacting
                    OPV AI Realty Tech.
                    Your enquiry has been submitted.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setError("");
                    }}
                    className="mt-7 rounded-xl bg-[#075B3B] px-6 py-3 font-bold text-white hover:bg-[#06472F]"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* NAME & EMAIL */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className={labelClass}
                      >
                        Full Name *
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        required
                        minLength={2}
                        maxLength={100}
                        autoComplete="name"
                        value={form.name}
                        onChange={(event) =>
                          updateField(
                            "name",
                            event.target.value
                          )
                        }
                        placeholder="Your full name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className={labelClass}
                      >
                        Email Address *
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        required
                        maxLength={150}
                        autoComplete="email"
                        value={form.email}
                        onChange={(event) =>
                          updateField(
                            "email",
                            event.target.value
                          )
                        }
                        placeholder="Your email address"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* PHONE & COMPANY */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className={labelClass}
                      >
                        Phone Number *
                      </label>

                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        maxLength={25}
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(event) =>
                          updateField(
                            "phone",
                            event.target.value
                          )
                        }
                        placeholder="Your phone number"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className={labelClass}
                      >
                        Company Name
                      </label>

                      <input
                        id="contact-company"
                        type="text"
                        maxLength={150}
                        autoComplete="organization"
                        value={form.company}
                        onChange={(event) =>
                          updateField(
                            "company",
                            event.target.value
                          )
                        }
                        placeholder="Company / Organisation"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* SERVICE */}

                  <div>
                    <label
                      htmlFor="contact-service"
                      className={labelClass}
                    >
                      Interested Service *
                    </label>

                    <select
                      id="contact-service"
                      required
                      value={form.service}
                      onChange={(event) =>
                        updateField(
                          "service",
                          event.target.value
                        )
                      }
                      className={inputClass}
                    >
                      <option value="">
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

                  {/* BUDGET */}

                  <div>
                    <label
                      htmlFor="contact-budget"
                      className={labelClass}
                    >
                      Estimated Budget
                    </label>

                    <select
                      id="contact-budget"
                      value={form.budget}
                      onChange={(event) =>
                        updateField(
                          "budget",
                          event.target.value
                        )
                      }
                      className={inputClass}
                    >
                      <option value="">
                        Select your budget
                      </option>

                      {budgets.map((budget) => (
                        <option
                          key={budget}
                          value={budget}
                        >
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* MESSAGE */}

                  <div>
                    <label
                      htmlFor="contact-message"
                      className={labelClass}
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="contact-message"
                      required
                      minLength={10}
                      maxLength={5000}
                      rows={6}
                      value={form.message}
                      onChange={(event) =>
                        updateField(
                          "message",
                          event.target.value
                        )
                      }
                      placeholder="Tell us about your project, goals, features or business requirements..."
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  {/* ERROR */}

                  {error && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-7 text-red-700"
                    >
                      {error}
                    </div>
                  )}

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <span
                          aria-hidden="true"
                          className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"
                        />
                        Sending Your Enquiry...
                      </>
                    ) : (
                      <>
                        Send Project Enquiry
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs leading-6 text-[#647586]">
                    By submitting this form, you
                    agree to be contacted by OPV AI
                    Realty Tech regarding your enquiry.
                    See our{" "}
                    <Link
                      href="/privacy-policy"
                      className="font-semibold text-[#075B3B] hover:underline"
                    >
                      Privacy Policy
                    </Link>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="border-t border-[#E5E9E3] bg-[#F8F6F0] py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="rounded-3xl bg-[#075B3B] px-7 py-14 text-center text-white sm:px-12 lg:py-20">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Sparkles className="h-7 w-7 text-[#E9CF91]" />
            </div>

            <h2 className="mt-7 text-3xl font-extrabold sm:text-4xl">
              Build Smarter. Automate Better.
              <span className="block">
                Grow Faster.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
              Partner with OPV AI Realty Tech
              to explore technology solutions
              aligned with your business goals.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
              >
                Explore Our Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={`tel:+${PHONE}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                {DISPLAY_PHONE}
              </a>
            </div>

            <div className="mt-12 border-t border-white/20 pt-8">
              <p className="font-bold">
                {COMPANY_NAME}
              </p>

              <p className="mt-3 text-sm leading-7 text-white/70">
                {ADDRESS}
              </p>

              <a
                href={WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#E9CF91] hover:underline"
              >
                www.opvairealtytech.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
