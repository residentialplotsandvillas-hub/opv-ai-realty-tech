
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building2,
  CheckCircle2,
  Globe,
  Sparkles,
} from "lucide-react";

const PHONE_NUMBER = "919963513939";
const DISPLAY_PHONE = "+91 9963513939";
const EMAIL_ADDRESS = "info@opvairealtytech.com";

const COMPANY_ADDRESS =
  "OPV AI REALTY TECH PVT LTD, #101, Road No: 10, Jaya Kesav Avenue, Kakatiya Hills, Madhapur, Hyderabad";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  COMPANY_ADDRESS
)}`;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

type ContactFormData = typeof initialForm;

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

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const updateField = (
    field: keyof ContactFormData,
    value: string
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hello OPV AI Realty Tech,",
      "",
      "I would like to discuss a project.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Company: ${form.company || "Not provided"}`,
      `Interested Service: ${form.service}`,
      `Estimated Budget: ${form.budget || "Not specified"}`,
      "",
      "Project Details:",
      form.message,
    ].join("\n");

    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    setWhatsappUrl(url);
    setSubmitted(true);

    // Open WhatsApp with the enquiry details.
    // The visitor must press Send inside WhatsApp to submit the message.
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#061426] px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(245,158,11,0.12),transparent_30%)]" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-emerald-300/10" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-amber-300/10" />

        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
            <MessageCircle size={15} />
            Let's Connect
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Let's Build Something
            <span className="block text-emerald-300">
              Great Together.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Have a business idea, technology requirement or project in mind?
            Connect with OPV AI Realty Tech to explore how AI, software and
            intelligent digital solutions can help your business grow.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
                "Hello OPV AI Realty Tech, I would like to discuss a project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-7 py-3.5 text-sm font-bold text-[#061426] transition hover:-translate-y-0.5 hover:bg-emerald-200"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#contact-information"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition hover:border-emerald-300/60 hover:bg-white/5"
            >
              Contact Information
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION AND FORM */}
      <section
        id="contact-information"
        className="scroll-mt-24 px-5 py-16 sm:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT: CONTACT DETAILS */}
          <div>
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-emerald-800">
              Contact Information
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Let's Talk About Your Next Project
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Whether you need AI solutions, custom software, digital
              platforms, business automation or real estate technology,
              our team is ready to understand your requirements.
            </p>

            <div className="mt-10 space-y-5">
              {/* EMAIL */}
              <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-lg hover:shadow-slate-900/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                  <Mail size={23} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-extrabold">Email Us</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    For business and project enquiries
                  </p>

                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="mt-2 inline-block break-all font-bold text-emerald-800 hover:underline"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-lg hover:shadow-slate-900/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                  <Phone size={23} />
                </div>

                <div>
                  <h3 className="font-extrabold">Call Our Team</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Speak with us about your requirements
                  </p>

                  <a
                    href={`tel:+${PHONE_NUMBER}`}
                    className="mt-2 inline-block font-bold text-emerald-800 hover:underline"
                  >
                    {DISPLAY_PHONE}
                  </a>
                </div>
              </div>

              {/* COMPANY */}
              <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-lg hover:shadow-slate-900/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                  <Building2 size={23} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-extrabold">
                    OPV AI REALTY TECH PVT LTD
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    AI-Powered Business Technology & Growth Platform
                  </p>

                  <a
                    href="https://www.opvairealtytech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block break-all font-bold text-emerald-800 hover:underline"
                  >
                    www.opvairealtytech.com
                  </a>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-lg hover:shadow-slate-900/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                  <MapPin size={23} />
                </div>

                <div>
                  <h3 className="font-extrabold">Our Office</h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    #101, Road No: 10,
                    <br />
                    Jaya Kesav Avenue,
                    <br />
                    Kakatiya Hills, Madhapur,
                    <br />
                    Hyderabad.
                  </p>

                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:underline"
                  >
                    Get Directions
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              {/* BUSINESS ENQUIRIES */}
              <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-lg hover:shadow-slate-900/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                  <Clock size={23} />
                </div>

                <div>
                  <h3 className="font-extrabold">Business Enquiries</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-500">
                    Share your project details through our enquiry form
                    or contact our team directly by phone or WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
                "Hello OPV AI Realty Tech, I would like to discuss a project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#1DA851]"
            >
              <MessageCircle size={21} />
              Contact Through WhatsApp
              <ArrowRight size={18} />
            </a>
          </div>

          {/* RIGHT: ENQUIRY FORM */}
          <div className="rounded-3xl border border-slate-200 bg-[#F7F9F7] p-6 shadow-sm sm:p-9 lg:p-10">
            <div className="mb-8">
              <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-emerald-800">
                Send an Enquiry
              </span>

              <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                Tell Us About Your Project
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Share a few details so we can better understand your
                business needs and project requirements.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7 text-center">
                <CheckCircle2
                  size={48}
                  className="mx-auto text-emerald-700"
                />

                <h3 className="mt-5 text-2xl font-black text-emerald-900">
                  Your Enquiry Is Ready!
                </h3>

                <p className="mt-3 leading-7 text-emerald-800">
                  We have prepared your project details in WhatsApp.
                  Please review the message and press Send in WhatsApp
                  to complete your enquiry.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-bold text-white transition hover:bg-[#1DA851]"
                >
                  <MessageCircle size={19} />
                  Open WhatsApp Again
                  <ArrowUpRight size={16} />
                </a>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 block w-full text-sm font-bold text-emerald-900 underline"
                >
                  Edit or Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* NAME AND EMAIL */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-bold"
                    >
                      Full Name *
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) =>
                        updateField("name", e.target.value)
                      }
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-bold"
                    >
                      Email Address *
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) =>
                        updateField("email", e.target.value)
                      }
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                {/* PHONE AND COMPANY */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-sm font-bold"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) =>
                        updateField("phone", e.target.value)
                      }
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="mb-2 block text-sm font-bold"
                    >
                      Company Name
                    </label>

                    <input
                      id="contact-company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={(e) =>
                        updateField("company", e.target.value)
                      }
                      placeholder="Your company name"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                {/* SERVICE */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="mb-2 block text-sm font-bold"
                  >
                    Interested Service *
                  </label>

                  <select
                    id="contact-service"
                    required
                    value={form.service}
                    onChange={(e) =>
                      updateField("service", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-600 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="">Select a service</option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* BUDGET */}
                <div>
                  <label
                    htmlFor="contact-budget"
                    className="mb-2 block text-sm font-bold"
                  >
                    Estimated Budget
                  </label>

                  <select
                    id="contact-budget"
                    value={form.budget}
                    onChange={(e) =>
                      updateField("budget", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-600 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="">Select your budget</option>

                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                {/* PROJECT DETAILS */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-bold"
                  >
                    Project Details *
                  </label>

                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      updateField("message", e.target.value)
                    }
                    placeholder="Tell us about your project or business requirements..."
                    className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#061426] px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-800"
                >
                  Send Enquiry on WhatsApp
                  <Send size={18} />
                </button>

                <p className="text-center text-xs leading-6 text-slate-500">
                  Your enquiry details will be placed in a WhatsApp
                  message. Please press Send in WhatsApp to submit it
                  to our team. This form does not store your details
                  on the website.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#F7F9F7] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#061426] px-7 py-12 text-center sm:px-12 lg:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-300/10 text-emerald-300">
            <Sparkles size={28} />
          </div>

          <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl">
            Build Smarter. Automate Better. Grow Faster.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Connect with OPV AI Realty Tech and explore technology
            solutions aligned with your business goals.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#solutions"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-7 py-3.5 text-sm font-bold text-[#061426] transition hover:bg-emerald-200"
            >
              Explore Our Solutions
              <ArrowRight size={17} />
            </Link>

            <a
              href={`tel:+${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition hover:border-emerald-300 hover:bg-white/5"
            >
              <Phone size={16} />
              {DISPLAY_PHONE}
            </a>
          </div>

          <div className="mt-10 border-t border-white/10 pt-7">
            <p className="text-sm font-bold tracking-wide text-white">
              OPV AI REALTY TECH PVT LTD
            </p>

            <p className="mt-2 text-xs leading-6 text-slate-400">
              #101, Road No: 10, Jaya Kesav Avenue,
              Kakatiya Hills, Madhapur, Hyderabad.
            </p>

            <a
              href="https://www.opvairealtytech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              <Globe size={15} />
              www.opvairealtytech.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
