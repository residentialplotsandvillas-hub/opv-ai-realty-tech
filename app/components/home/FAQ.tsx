
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
      "OPV AI Realty Tech Private Limited is a Hyderabad-based business technology company focused on artificial intelligence, custom software development, intelligent automation, SaaS platforms, cloud solutions, CRM, ERP and digital business growth solutions for organizations across industries.",
  },
  {
    question: "What services does OPV AI Realty Tech provide?",
    answer:
      "Our services include AI development, AI agent development, AI chatbot development, custom software development, website and mobile app development, SaaS and cloud solutions, CRM and ERP software, business process automation, data analytics, cybersecurity, SEO, AEO, digital marketing and lead generation.",
  },
  {
    question: "Does OPV AI Realty Tech provide AI development services?",
    answer:
      "Yes. Our AI development services include AI agents, AI chatbots, AI voice assistants, generative AI integration, intelligent workflow automation and custom AI solutions designed around business requirements.",
  },
  {
    question: "Does OPV develop custom websites and mobile applications?",
    answer:
      "Yes. OPV provides responsive website development, custom web applications, mobile app development and scalable digital platforms for startups, SMEs and enterprise businesses.",
  },
  {
    question: "Does OPV provide CRM and ERP development?",
    answer:
      "Yes. OPV offers custom CRM and ERP development, lead management software, sales automation, business management systems and workflow integration to help organizations manage customer relationships and business operations.",
  },
  {
    question: "Which industries does OPV AI Realty Tech serve?",
    answer:
      "Our technology solutions support real estate, retail, e-commerce, healthcare, education, manufacturing, finance, logistics, hospitality, travel, startups, small and medium-sized businesses and enterprise organizations.",
  },
  {
    question: "What is Open Plots & Villas?",
    answer:
      "Open Plots & Villas is an AI-powered real estate discovery portal within the OPV technology ecosystem. It connects property buyers, owners, builders, developers and real estate professionals through digital property listings and discovery experiences.",
  },
  {
    question: "Does OPV work with startups and small businesses?",
    answer:
      "Yes. OPV works with startups, SMEs, professional firms and enterprises on MVP development, SaaS products, business websites, mobile applications, CRM solutions, AI integration and business automation.",
  },
  {
    question: "How can I start a project with OPV AI Realty Tech?",
    answer:
      "You can contact our team through the website contact page. Share your business requirements, project goals, preferred technology services and contact details so our team can discuss the next steps.",
  },
  {
    question: "Where can I learn more about OPV AI Realty Tech?",
    answer:
      "Explore our About, Solutions, Industries, Products and Technology Initiatives sections, or visit www.opvairealtytech.com to learn more about our AI, software development, automation and business technology capabilities.",
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
      aria-labelledby="faq-heading"
      className="scroll-mt-24 bg-[#F8F6F0] py-20 text-[#263C50] sm:py-24 lg:py-28"
    >
      {/* FAQ STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <div className="mx-auto max-w-5xl px-5 sm:px-8">

        {/* SECTION HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
            <MessageCircle className="h-4 w-4" />
            Frequently Asked Questions
          </span>

          <h2
            id="faq-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#263C50] sm:text-4xl lg:text-5xl"
          >
            Everything You Need to Know
            <span className="mt-2 block text-[#075B3B]">
              About OPV AI Realty Tech.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#526577] sm:text-base">
            Find answers about our company, AI development
            services, software engineering, SaaS platforms,
            CRM and ERP solutions, intelligent automation
            and business technology capabilities.
          </p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const questionId = `faq-question-${index}`;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#075B3B]/30 shadow-[0_12px_35px_rgba(38,60,80,0.07)]"
                    : "border-[#E5E9E3] hover:border-[#075B3B]/25"
                }`}
              >
                <h3>
                  <button
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition hover:bg-[#F8F6F0]/60 sm:px-7"
                  >
                    <span className="flex items-start gap-4">

                      <span className="mt-0.5 text-sm font-bold text-[#C6A052]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-bold leading-6 text-[#263C50] sm:text-base">
                        {faq.question}
                      </span>
                    </span>

                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-[#075B3B] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                  className="border-t border-[#E8EAE5] px-5 pb-6 pt-4 sm:px-7"
                >
                  <p className="pl-8 text-sm leading-8 text-[#526577]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 rounded-3xl border border-[#E5E9E3] bg-white px-6 py-10 text-center shadow-[0_10px_35px_rgba(38,60,80,0.035)] sm:px-10">

          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#075B3B]">
            We&apos;re Here to Help
          </p>

          <h3 className="mt-4 text-2xl font-extrabold text-[#263C50] sm:text-3xl">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#526577]">
            Tell us about your business requirements.
            Let&apos;s explore the right AI development,
            custom software, SaaS or automation
            solution together.
          </p>

          <Link
            href="/contact"
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#075B3B] px-7 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(7,91,59,0.12)] transition hover:-translate-y-1 hover:bg-[#06472F]"
          >
            Contact Our Team

            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
