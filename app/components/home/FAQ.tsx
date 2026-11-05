
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

const faqs = [
  {
    question: "What is OPV AI Realty Tech Private Limited?",
    answer:
      "OPV AI Realty Tech Private Limited is a business technology company focused on artificial intelligence, software development, intelligent automation, SaaS platforms, cloud solutions and digital business growth.",
  },
  {
    question: "What services does OPV AI Realty Tech provide?",
    answer:
      "Our service areas include AI development, custom software development, website development, mobile app development, SaaS and cloud solutions, CRM and ERP development, data analytics, cybersecurity and digital growth.",
  },
  {
    question: "Does OPV AI Realty Tech provide AI development services?",
    answer:
      "Yes. Our AI-focused solutions include AI integration, intelligent automation, AI agents and business workflow solutions designed around practical business requirements.",
  },
  {
    question: "Does OPV develop custom websites and mobile applications?",
    answer:
      "Yes. Our technology capabilities include responsive website development, custom web applications and mobile application development for business requirements.",
  },
  {
    question: "Does OPV provide CRM and ERP development?",
    answer:
      "OPV offers CRM and ERP development as part of its business technology solutions, helping organizations manage customer relationships, workflows and business operations.",
  },
  {
    question: "Which industries does OPV AI Realty Tech serve?",
    answer:
      "Our industry focus includes real estate, retail, healthcare, education, manufacturing, finance, logistics, hospitality, startups, SMEs and enterprise businesses.",
  },
  {
    question: "What is Open Plots & Villas?",
    answer:
      "Open Plots & Villas is a digital real estate platform within the OPV ecosystem, designed to support property discovery and digital connections between property buyers, sellers and developers.",
  },
  {
    question: "Does OPV work with startups and small businesses?",
    answer:
      "Yes. Our technology solutions are intended for startups, small and medium-sized businesses, professional firms and enterprises, depending on their requirements.",
  },
  {
    question: "How can I start a project with OPV AI Realty Tech?",
    answer:
      "You can contact our team through the website contact page. Share your business requirements, project goals and preferred solution, and our team can discuss the next steps.",
  },
  {
    question: "Where can I learn more about OPV AI Realty Tech?",
    answer:
      "You can explore our About, Services, Industries and Products sections to learn about the company's technology capabilities and platforms.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="bg-[#F8FAF7] py-20 sm:py-24 lg:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-5xl px-5 sm:px-8">

        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E7B30F]/40 bg-[#E7B30F]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#265921]">
            <MessageCircle className="h-4 w-4 text-[#B88A00]" />
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#033505] sm:text-4xl lg:text-5xl">
            Everything You Need to Know
            <span className="block text-[#B88A00]">
              About OPV AI Realty Tech
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Find answers about our company, AI solutions, software
            development services, technology platforms and business
            capabilities.
          </p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#E7B30F]/60 shadow-md"
                    : "border-slate-200 hover:border-[#E7B30F]/40"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
                >
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 text-sm font-bold text-[#B88A00]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-bold leading-6 text-[#033505] sm:text-base">
                      {faq.question}
                    </span>
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#265921] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="border-t border-slate-100 px-5 pb-6 pt-4 sm:px-7"
                  >
                    <p className="pl-8 text-sm leading-8 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 rounded-3xl bg-[#033505] px-6 py-9 text-center text-white sm:px-10">
          <h3 className="text-2xl font-extrabold">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/70">
            Tell us about your business requirements. Let's explore
            the right technology solution together.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-[#E7B30F] px-7 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
          >
            Contact Our Team
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
