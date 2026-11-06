"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Globe2,
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  Code2,
  Cloud,
  Database,
  BriefcaseBusiness,
  ShieldCheck,
  TrendingUp,
  Smartphone,
  Building2,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Factory,
  Truck,
  Rocket,
  Layers3,
  Lightbulb,
} from "lucide-react";

import Image from "next/image";

type DropdownName = "solutions" | "industries" | "products" | null;

/* SOLUTION PAGE LINKS */
const solutions = [
  {
    title: "AI & Intelligent Automation",
    description: "AI agents, generative AI and intelligent workflows",
    href: "/solutions/ai-intelligent-automation",
    icon: Sparkles,
  },
  {
    title: "Software & Product Engineering",
    description: "Custom software, web applications and product development",
    href: "/solutions/software-engineering",
    icon: Code2,
  },
  {
    title: "SaaS, Cloud & DevOps",
    description: "Cloud infrastructure and scalable SaaS products",
    href: "/solutions/saas-cloud-devops",
    icon: Cloud,
  },
  {
    title: "CRM, ERP & Business Systems",
    description: "Connected systems for business operations",
    href: "/solutions/crm-erp-business-systems",
    icon: BriefcaseBusiness,
  },
  {
    title: "Data & Business Intelligence",
    description: "Analytics, dashboards and business insights",
    href: "/solutions/data-business-intelligence",
    icon: Database,
  },
  {
    title: "Web & Mobile Experiences",
    description: "Websites, mobile apps and UI/UX design",
    href: "/solutions/web-mobile-experiences",
    icon: Smartphone,
  },
  {
    title: "Cybersecurity & IT Solutions",
    description: "Secure infrastructure and IT solutions",
    href: "/solutions/cybersecurity-it-solutions",
    icon: ShieldCheck,
  },
  {
    title: "Digital Growth & Marketing",
    description: "SEO, AEO, GEO, marketing and lead generation",
    href: "/solutions/digital-growth-marketing",
    icon: TrendingUp,
  },
];

/* INDUSTRY LINKS */
const industries = [
  {
    title: "Real Estate",
    href: "/industries/real-estate",
    icon: Building2,
  },
  {
    title: "Retail & E-commerce",
    href: "/industries/retail-ecommerce",
    icon: ShoppingCart,
  },
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    icon: HeartPulse,
  },
  {
    title: "Education",
    href: "/industries/education",
    icon: GraduationCap,
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    icon: Factory,
  },
  {
    title: "Logistics",
    href: "/industries/logistics",
    icon: Truck,
  },
  {
    title: "Startups & SMEs",
    href: "/industries/startups-smes",
    icon: Rocket,
  },
  {
    title: "Enterprise & Corporate",
    href: "/industries/enterprise-corporate",
    icon: Layers3,
  },
];

/* PRODUCT LINKS */
const products = [
  {
    title: "Open Plots & Villas",
    description: "AI-Powered Real Estate Discovery Portal",
    href: "https://www.openplotsandvillas.com",
    external: true,
  },
  {
    title: "AARNA GrowthOS",
    description: "Real Estate Business & Growth Management",
    href: "/#products",
    external: false,
  },
  {
    title: "AI Agents & Automation",
    description: "Intelligent AI-powered business solutions",
    href: "/solutions/ai-intelligent-automation",
    external: false,
  },
];

/* COMPANY LINKS */
const companyLinks = [
  { title: "Our Approach", href: "/approach" },
  { title: "About OPV AI Realty Tech", href: "/about" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] =
    useState<DropdownName>(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [mobileExpanded, setMobileExpanded] =
    useState<DropdownName>(null);

  const navbarRef = useRef<HTMLElement>(null);

  /* CLOSE ALL MENUS */
  const closeAll = useCallback(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, []);

  /* DESKTOP DROPDOWN */
  const toggleDropdown = (name: DropdownName) => {
    setActiveDropdown((current) =>
      current === name ? null : name
    );
  };

  /* MOBILE DROPDOWN */
  const toggleMobileSection = (name: DropdownName) => {
    setMobileExpanded((current) =>
      current === name ? null : name
    );
  };

  /* CLOSE MENUS ON OUTSIDE CLICK AND ESCAPE */
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeAll]);

  const navLinkClass =
    "text-[13px] font-semibold text-slate-300 transition-colors duration-200 hover:text-emerald-300";

  return (
    <header
      ref={navbarRef}
      className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#06111f]/95 text-white shadow-lg shadow-black/10 backdrop-blur-xl"
    >
      {/* MAIN NAVBAR */}
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* LOGO / BRAND */}
       {/* LOGO / BRAND */}
<Link
  href="/"
  onClick={closeAll}
  aria-label="OPV AI Realty Tech Homepage"
  className="group flex shrink-0 items-center"
>
  <div className="relative flex h-14 w-36 shrink-0 items-center justify-start sm:h-16 sm:w-44">
    <Image
      src="/images/logo2.png"
      alt="OPV AI Realty Tech"
      width={220}
      height={90}
      priority
      sizes="(max-width: 640px) 144px, 176px"
      className="h-full w-full object-contain object-left transition-transform duration-300 group-hover:scale-105"
    />
  </div>
</Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex xl:gap-8"
        >
          {/* SOLUTIONS */}
          <button
            type="button"
            onClick={() => toggleDropdown("solutions")}
            aria-expanded={activeDropdown === "solutions"}
            className={`${navLinkClass} flex items-center gap-1.5`}
          >
            Solutions

            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                activeDropdown === "solutions" ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* INDUSTRIES */}
          <button
            type="button"
            onClick={() => toggleDropdown("industries")}
            aria-expanded={activeDropdown === "industries"}
            className={`${navLinkClass} flex items-center gap-1.5`}
          >
            Industries

            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                activeDropdown === "industries" ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* PRODUCTS */}
          <button
            type="button"
            onClick={() => toggleDropdown("products")}
            aria-expanded={activeDropdown === "products"}
            className={`${navLinkClass} flex items-center gap-1.5`}
          >
            Products

            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                activeDropdown === "products" ? "rotate-180" : ""
              }`}
            />
          </button>

          <Link
            href="/approach"
            onClick={closeAll}
            className={navLinkClass}
          >
            Our Approach
          </Link>

          <Link
            href="/about"
            onClick={closeAll}
            className={navLinkClass}
          >
            About
          </Link>

          <Link
            href="/insights"
            onClick={closeAll}
            className={navLinkClass}
          >
            Insights
          </Link>


           <Link
            href="/case-studies"
            onClick={closeAll}
            className={navLinkClass}
          >
            Case Studies
          </Link>
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          onClick={closeAll}
          className="group hidden items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-[13px] font-bold text-[#06111f] shadow-lg shadow-emerald-400/10 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-200 lg:inline-flex"
        >
          Let's Build

          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="opv-mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* DESKTOP MEGA MENU */}
      {activeDropdown && (
        <div className="absolute left-0 right-0 top-full hidden border-t border-white/10 bg-[#091827] shadow-2xl shadow-black/30 lg:block">
          <div className="mx-auto max-w-[1440px] px-10 py-8">

            {/* SOLUTIONS MENU */}
            {activeDropdown === "solutions" && (
              <>
                <div className="mb-6 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                      Our capabilities
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-white">
                      Technology that moves business forward.
                    </h2>
                  </div>

                  <Link
                    href="/#solutions"
                    onClick={closeAll}
                    className="flex items-center gap-1 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                  >
                    Explore all solutions
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {solutions.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={closeAll}
                        className="group rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition hover:border-emerald-300/30 hover:bg-emerald-300/[0.06]"
                      >
                        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-300/10 text-emerald-300 transition group-hover:bg-emerald-300 group-hover:text-[#06111f]">
                          <Icon className="h-5 w-5" />
                        </div>

                        <h3 className="text-sm font-bold text-white transition group-hover:text-emerald-300">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-slate-400">
                          {item.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}

            {/* INDUSTRIES MENU */}
            {activeDropdown === "industries" && (
              <>
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                    Industries we serve
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-white">
                    One technology partner. Multiple industries.
                  </h2>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {industries.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={closeAll}
                        className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition hover:border-emerald-300/30 hover:bg-emerald-300/[0.06]"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-300/10 text-emerald-300 transition group-hover:bg-emerald-300 group-hover:text-[#06111f]">
                          <Icon className="h-5 w-5" />
                        </div>

                        <span className="text-sm font-semibold text-slate-200 transition group-hover:text-emerald-300">
                          {item.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}

            {/* PRODUCTS MENU */}
            {activeDropdown === "products" && (
              <>
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
                    OPV ecosystem
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-white">
                    Products and platforms built for business.
                  </h2>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {products.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={closeAll}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="group rounded-xl border border-white/[0.07] bg-white/[0.025] p-5 transition hover:border-emerald-300/30 hover:bg-emerald-300/[0.06]"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300/10 text-amber-300">
                        <Layers3 className="h-5 w-5" />
                      </div>

                      <h3 className="text-base font-bold text-white group-hover:text-emerald-300">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {item.description}
                      </p>

                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-emerald-300">
                        Explore
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <div
          id="opv-mobile-navigation"
          className="max-h-[calc(100dvh-78px)] overflow-y-auto border-t border-white/10 bg-[#081625] px-5 pb-7 pt-4 lg:hidden"
        >
          <nav className="mx-auto flex max-w-[600px] flex-col">

            {/* MOBILE SOLUTIONS */}
            <button
              type="button"
              onClick={() => toggleMobileSection("solutions")}
              aria-expanded={mobileExpanded === "solutions"}
              className="flex items-center justify-between border-b border-white/[0.08] py-4 text-left text-sm font-semibold text-white"
            >
              Solutions

              <ChevronDown
                className={`h-4 w-4 text-emerald-300 transition ${
                  mobileExpanded === "solutions" ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileExpanded === "solutions" && (
              <div className="space-y-1 bg-white/[0.025] p-2">
                {solutions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={closeAll}
                      className="flex items-center gap-3 rounded-lg p-3 text-sm text-slate-300 hover:bg-white/5 hover:text-emerald-300"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-emerald-300" />
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* MOBILE INDUSTRIES */}
            <button
              type="button"
              onClick={() => toggleMobileSection("industries")}
              aria-expanded={mobileExpanded === "industries"}
              className="flex items-center justify-between border-b border-white/[0.08] py-4 text-left text-sm font-semibold text-white"
            >
              Industries

              <ChevronDown
                className={`h-4 w-4 text-emerald-300 transition ${
                  mobileExpanded === "industries" ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileExpanded === "industries" && (
              <div className="space-y-1 bg-white/[0.025] p-2">
                {industries.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={closeAll}
                      className="flex items-center gap-3 rounded-lg p-3 text-sm text-slate-300 hover:bg-white/5 hover:text-emerald-300"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-emerald-300" />
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* MOBILE PRODUCTS */}
            <button
              type="button"
              onClick={() => toggleMobileSection("products")}
              aria-expanded={mobileExpanded === "products"}
              className="flex items-center justify-between border-b border-white/[0.08] py-4 text-left text-sm font-semibold text-white"
            >
              Products

              <ChevronDown
                className={`h-4 w-4 text-emerald-300 transition ${
                  mobileExpanded === "products" ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileExpanded === "products" && (
              <div className="space-y-1 bg-white/[0.025] p-2">
                {products.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={closeAll}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="block rounded-lg p-3 hover:bg-white/5"
                  >
                    <span className="block text-sm font-semibold text-slate-200">
                      {item.title}
                    </span>

                    <span className="mt-1 block text-xs text-slate-400">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            )}

            {/* MOBILE COMPANY LINKS */}
            {companyLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={closeAll}
                className="border-b border-white/[0.08] py-4 text-sm font-semibold text-slate-300 transition hover:text-emerald-300"
              >
                {item.title}
              </Link>
            ))}

            {/* MOBILE CTA */}
            <Link
              href="/contact"
              onClick={closeAll}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-5 py-4 text-sm font-bold text-[#06111f] transition hover:bg-emerald-200"
            >
              Let's Build Your Business

              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <div className="mt-6 flex items-center justify-center gap-2 text-center text-[10px] tracking-[0.12em] text-slate-500">
              <Lightbulb className="h-3.5 w-3.5 text-amber-300" />
              AI-POWERED BUSINESS TECHNOLOGY & GROWTH PLATFORM
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}