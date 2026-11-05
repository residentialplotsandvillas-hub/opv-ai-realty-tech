
import Link from "next/link";
import {
  Globe2,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  Building2,
} from "lucide-react";

const COPYRIGHT_YEAR = 2026;

const PHONE_NUMBER = "919963513939";
const DISPLAY_PHONE = "+91 9963513939";
const EMAIL_ADDRESS = "info@opvairealtytech.com";

const COMPANY_NAME = "OPV AI REALTY TECH PVT LTD";

const COMPANY_ADDRESS =
  "#101, Road No: 10, Jaya Kesav Avenue, Kakatiya Hills, Madhapur, Hyderabad";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${COMPANY_NAME}, ${COMPANY_ADDRESS}`
)}`;

const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
  "Hello OPV AI Realty Tech, I would like to discuss a business or technology project."
)}`;

/* ==========================================
   FOOTER NAVIGATION DATA
========================================== */

const serviceLinks = [
  {
    label: "AI & Intelligent Automation",
    href: "/solutions/ai-intelligent-automation",
  },
  {
    label: "Software & Product Engineering",
    href: "/solutions/software-engineering",
  },
  {
    label: "Web & Mobile Development",
    href: "/solutions/web-mobile-experiences",
  },
  {
    label: "SaaS, Cloud & DevOps",
    href: "/solutions/saas-cloud-devops",
  },
  {
    label: "CRM, ERP & Business Systems",
    href: "/solutions/crm-erp-business-systems",
  },
  {
    label: "Data & Business Intelligence",
    href: "/solutions/data-business-intelligence",
  },
  {
    label: "Cybersecurity & IT Solutions",
    href: "/solutions/cybersecurity-it-solutions",
  },
  {
    label: "SEO, AEO & Digital Growth",
    href: "/solutions/digital-growth-marketing",
  },
];

const industryLinks = [
  {
    label: "Real Estate",
    href: "/industries/real-estate",
  },
  {
    label: "Retail & E-commerce",
    href: "/industries/retail-ecommerce",
  },
  {
    label: "Healthcare",
    href: "/industries/healthcare",
  },
  {
    label: "Education",
    href: "/industries/education",
  },
  {
    label: "Manufacturing",
    href: "/industries/manufacturing",
  },
  {
    label: "Logistics",
    href: "/industries/logistics",
  },
  {
    label: "Startups & SMEs",
    href: "/industries/startups-smes",
  },
  {
    label: "Enterprise & Corporate",
    href: "/industries/enterprise-corporate",
  },
];

const companyLinks = [
  {
    label: "About OPV",
    href: "/about",
  },
  {
    label: "Our Approach",
    href: "/approach",
  },
  {
    label: "Products & Platforms",
    href: "/#products",
  },
  {
    label: "Case Studies",
    href: "/#case-studies",
  },
  {
    label: "Insights & Resources",
    href: "/insights",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

/* ==========================================
   REUSABLE FOOTER LINK
========================================== */

function FooterLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-start gap-2 text-sm text-slate-400 transition hover:text-emerald-300"
      >
        <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-300/50 transition group-hover:translate-x-1 group-hover:text-emerald-300" />
        {label}
      </Link>
    </li>
  );
}

/* ==========================================
   MAIN FOOTER COMPONENT
========================================== */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#06111f] text-white">
      {/* BACKGROUND DECORATION */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-emerald-400/[0.06] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        {/* TOP CTA SECTION */}

        <div className="border-b border-white/10 py-14 sm:py-16 lg:py-20">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" />
                Let's Build Something Great
              </div>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Have a Business
                <span className="block text-emerald-300">
                  Challenge?
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                From AI and software development to SaaS, business
                automation and digital growth, let's build the right
                technology for your business.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-emerald-300 px-7 py-4 text-sm font-bold text-[#06111f] shadow-[0_8px_35px_rgba(110,231,183,0.14)] transition duration-300 hover:-translate-y-1 hover:bg-emerald-200"
              >
                Let's Build With OPV
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}

        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* BRAND COLUMN */}

          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="OPV AI Realty Tech homepage"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/30 bg-gradient-to-br from-emerald-300/20 to-amber-300/10">
                <Globe2
                  className="h-7 w-7 text-emerald-300"
                  strokeWidth={1.5}
                />
              </div>

              <div className="leading-tight">
                <div className="text-xl font-extrabold tracking-[0.12em]">
                  OPV <span className="text-emerald-300">AI</span>
                </div>

                <div className="mt-1 text-[10px] font-bold tracking-[0.22em] text-slate-400">
                  REALTY TECH
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm font-semibold leading-6 text-white">
              AI-Powered Business Technology & Growth Platform
            </p>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              We build intelligent digital systems, software, SaaS
              products and AI-powered business solutions that help
              organizations launch, automate, operate and scale.
            </p>

            {/* BRAND KEYWORDS */}

            <div className="mt-6 flex max-w-sm flex-wrap gap-2">
              {[
                "AI",
                "Software",
                "SaaS",
                "Cloud",
                "CRM",
                "Automation",
                "Digital Growth",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium text-slate-400"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* WHATSAPP */}

            <div className="mt-8">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Connect With OPV
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-300 hover:text-[#06111f]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* SERVICES */}

          <div className="lg:col-span-3">
            <h3 className="mb-7 text-xs font-extrabold uppercase tracking-[0.18em] text-white">
              Our Solutions
            </h3>

            <ul className="space-y-4">
              {serviceLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </ul>
          </div>

          {/* INDUSTRIES */}

          <div className="lg:col-span-2">
            <h3 className="mb-7 text-xs font-extrabold uppercase tracking-[0.18em] text-white">
              Industries
            </h3>

            <ul className="space-y-4">
              {industryLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </ul>
          </div>

          {/* COMPANY AND CONTACT */}

          <div className="lg:col-span-3">
            <h3 className="mb-7 text-xs font-extrabold uppercase tracking-[0.18em] text-white">
              Company
            </h3>

            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <FooterLink
                  key={item.label}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </ul>

            {/* CONTACT INFORMATION */}

            <div className="mt-9 border-t border-white/10 pt-6">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                Get In Touch
              </p>

              {/* COMPANY NAME */}

              <div className="flex items-start gap-3 text-sm leading-6 text-slate-400">
                <Building2 className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />

                <div>
                  <p className="font-bold text-white">
                    OPV AI REALTY TECH PVT LTD
                  </p>

                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    AI-Powered Business Technology & Growth Platform
                  </p>
                </div>
              </div>

              {/* PHONE */}

              <a
                href={`tel:+${PHONE_NUMBER}`}
                className="mt-5 flex items-center gap-3 text-sm text-slate-400 transition hover:text-emerald-300"
              >
                <Phone className="h-4 w-4 shrink-0 text-emerald-300" />
                {DISPLAY_PHONE}
              </a>

              {/* EMAIL */}

              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="mt-4 flex items-center gap-3 break-all text-sm text-slate-400 transition hover:text-emerald-300"
              >
                <Mail className="h-4 w-4 shrink-0 text-emerald-300" />
                {EMAIL_ADDRESS}
              </a>

              {/* OFFICE ADDRESS */}

              <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-400">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />

                <div>
                  <p className="font-semibold text-slate-300">
                    Office Address
                  </p>

                  <p className="mt-1">
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
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 transition hover:text-emerald-200"
                  >
                    Get Directions
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* CONTACT PAGE */}

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-xs font-bold text-white transition hover:border-emerald-300/40 hover:text-emerald-300"
              >
                Contact Our Team
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* OPV ECOSYSTEM STRIP */}

        <div className="border-y border-white/10 py-6">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-slate-500">
                Part of the OPV Ecosystem
              </p>

              <Link
                href="https://www.openplotsandvillas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex flex-wrap items-center gap-2 text-sm font-bold text-white transition hover:text-emerald-300"
              >
                Open Plots & Villas

                <span className="text-xs font-medium text-slate-500">
                  AI-Powered Real Estate Discovery Portal
                </span>

                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="inline-flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              Building Technology for Businesses Across Industries
            </div>
          </div>
        </div>

        {/* COPYRIGHT BAR */}

        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs leading-6 text-slate-400">
              © {COPYRIGHT_YEAR}{" "}
              <span className="font-semibold text-white">
                OPV AI Realty Tech Private Limited.
              </span>{" "}
              All rights reserved.
            </p>

            <p className="mt-1 text-[10px] text-slate-600">
              AI-Powered Business Technology & Growth Platform
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500">
            <Link
              href="/privacy-policy"
              className="transition hover:text-emerald-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-emerald-300"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-emerald-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
