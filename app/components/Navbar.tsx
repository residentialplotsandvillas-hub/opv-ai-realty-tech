
// "use client";

// import { useCallback, useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   ArrowUpRight,
//   Sparkles,
//   Code2,
//   Cloud,
//   Database,
//   BriefcaseBusiness,
//   ShieldCheck,
//   TrendingUp,
//   Smartphone,
//   Building2,
//   ShoppingCart,
//   HeartPulse,
//   GraduationCap,
//   Factory,
//   Truck,
//   Rocket,
//   Layers3,
//   Lightbulb,
// } from "lucide-react";

// type DropdownName = "solutions" | "industries" | "products";
// type MenuName = DropdownName | null;

// /* CORPORATE COLOUR PALETTE */
// const theme = {
//   white: "#FFFFFF",
//   ivory: "#F8F6F0",
//   emerald: "#075B3B",
//   gold: "#C6A052",
//   slate: "#263C50",
// };

// /* SOLUTIONS */
// const solutions = [
//   {
//     title: "AI & Intelligent Automation",
//     description: "AI agents, generative AI and intelligent workflows",
//     href: "/solutions/ai-intelligent-automation",
//     icon: Sparkles,
//   },
//   {
//     title: "Software & Product Engineering",
//     description: "Custom software, web applications and product development",
//     href: "/solutions/software-engineering",
//     icon: Code2,
//   },
//   {
//     title: "SaaS, Cloud & DevOps",
//     description: "Cloud infrastructure and scalable SaaS products",
//     href: "/solutions/saas-cloud-devops",
//     icon: Cloud,
//   },
//   {
//     title: "CRM, ERP & Business Systems",
//     description: "Connected systems for business operations",
//     href: "/solutions/crm-erp-business-systems",
//     icon: BriefcaseBusiness,
//   },
//   {
//     title: "Data & Business Intelligence",
//     description: "Analytics, dashboards and business insights",
//     href: "/solutions/data-business-intelligence",
//     icon: Database,
//   },
//   {
//     title: "Web & Mobile Experiences",
//     description: "Websites, mobile apps and UI/UX design",
//     href: "/solutions/web-mobile-experiences",
//     icon: Smartphone,
//   },
//   {
//     title: "Cybersecurity & IT Solutions",
//     description: "Secure infrastructure and IT solutions",
//     href: "/solutions/cybersecurity-it-solutions",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Digital Growth & Marketing",
//     description: "SEO, AEO, GEO, marketing and lead generation",
//     href: "/solutions/digital-growth-marketing",
//     icon: TrendingUp,
//   },
// ];

// /* INDUSTRIES */
// const industries = [
//   { title: "Real Estate", href: "/industries/real-estate", icon: Building2 },
//   { title: "Retail & E-commerce", href: "/industries/retail-ecommerce", icon: ShoppingCart },
//   { title: "Healthcare", href: "/industries/healthcare", icon: HeartPulse },
//   { title: "Education", href: "/industries/education", icon: GraduationCap },
//   { title: "Manufacturing", href: "/industries/manufacturing", icon: Factory },
//   { title: "Logistics", href: "/industries/logistics", icon: Truck },
//   { title: "Startups & SMEs", href: "/industries/startups-smes", icon: Rocket },
//   { title: "Enterprise & Corporate", href: "/industries/enterprise-corporate", icon: Layers3 },
// ];

// /* PRODUCTS */
// const products = [
//   {
//     title: "Open Plots & Villas",
//     description: "AI-Powered Real Estate Discovery Portal",
//     href: "https://www.openplotsandvillas.com",
//     external: true,
//   },
//   {
//     title: "AARNA GrowthOS",
//     description: "Real Estate Business & Growth Management",
//     href: "/#products",
//     external: false,
//   },
//   {
//     title: "AI Agents & Automation",
//     description: "Intelligent AI-powered business solutions",
//     href: "/solutions/ai-intelligent-automation",
//     external: false,
//   },
// ];

// /* COMPANY LINKS */
// const companyLinks = [
//   { title: "Our Approach", href: "/approach" },
//   { title: "About OPV AI Realty Tech", href: "/about" },
//   { title: "Case Studies", href: "/case-studies" },
//   { title: "Insights", href: "/insights" },
// ];

// const menuNames: DropdownName[] = [
//   "solutions",
//   "industries",
//   "products",
// ];

// const menuLabels: Record<DropdownName, string> = {
//   solutions: "Solutions",
//   industries: "Industries",
//   products: "Products",
// };

// export default function Navbar() {
//   const [activeDropdown, setActiveDropdown] = useState<MenuName>(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileExpanded, setMobileExpanded] = useState<MenuName>(null);

//   const navbarRef = useRef<HTMLElement>(null);

//   const closeAll = useCallback(() => {
//     setActiveDropdown(null);
//     setMobileOpen(false);
//     setMobileExpanded(null);
//   }, []);

//   const toggleDropdown = (name: DropdownName) => {
//     setActiveDropdown((current) => current === name ? null : name);
//   };

//   const toggleMobileSection = (name: DropdownName) => {
//     setMobileExpanded((current) => current === name ? null : name);
//   };

//   useEffect(() => {
//     const handleOutsideClick = (event: MouseEvent) => {
//       if (
//         navbarRef.current &&
//         !navbarRef.current.contains(event.target as Node)
//       ) {
//         setActiveDropdown(null);
//       }
//     };

//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") closeAll();
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, [closeAll]);

//   const navLinkClass =
//     "text-[13px] font-semibold text-[#263C50] transition-colors duration-200 hover:text-[#075B3B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#075B3B]";

//   const megaCardClass =
//     "group rounded-xl border border-[#E7E7DF] bg-white p-4 transition-all duration-200 hover:border-[#C6A052]/60 hover:bg-[#F8F6F0] hover:shadow-md";

//   return (
//     <header
//       ref={navbarRef}
//       className="sticky top-0 z-50 border-b border-[#E8E6DF] bg-white/95 text-[#263C50] shadow-sm backdrop-blur-xl"
//     >
//       {/* MAIN NAVBAR */}
//       <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:px-10">

//         {/* LOGO */}
//         <Link
//           href="/"
//           onClick={closeAll}
//           aria-label="OPV AI Realty Tech Homepage"
//           className="group flex shrink-0 items-center"
//         >
//           <div className="relative flex h-14 w-36 shrink-0 items-center justify-start sm:h-16 sm:w-44">
//             <Image
//               src="/images/logo2.png"
//               alt="OPV AI Realty Tech"
//               width={220}
//               height={90}
//               priority
//               sizes="(max-width: 640px) 144px, 176px"
//               className="h-full w-full object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
//             />
//           </div>
//         </Link>

//         {/* DESKTOP NAVIGATION */}
//         <nav
//           aria-label="Main navigation"
//           className="hidden items-center gap-4 lg:flex xl:gap-7"
//         >
//           {menuNames.map((name) => (
//             <button
//               key={name}
//               type="button"
//               onClick={() => toggleDropdown(name)}
//               aria-expanded={activeDropdown === name}
//               aria-controls={`opv-desktop-${name}`}
//               className={`${navLinkClass} flex items-center gap-1.5`}
//             >
//               {menuLabels[name]}
//               <ChevronDown
//                 className={`h-4 w-4 transition-transform ${
//                   activeDropdown === name
//                     ? "rotate-180 text-[#075B3B]"
//                     : ""
//                 }`}
//               />
//             </button>
//           ))}

//           <Link href="/approach" onClick={closeAll} className={navLinkClass}>
//             Our Approach
//           </Link>

//           <Link href="/about" onClick={closeAll} className={navLinkClass}>
//             About
//           </Link>

//           <Link href="/insights" onClick={closeAll} className={navLinkClass}>
//             Insights
//           </Link>

//           <Link href="/case-studies" onClick={closeAll} className={navLinkClass}>
//             Case Studies
//           </Link>
//         </nav>

//         {/* DESKTOP CTA */}
//         <Link
//           href="/contact"
//           onClick={closeAll}
//           className="group hidden shrink-0 items-center gap-2 rounded-full bg-[#075B3B] px-5 py-3 text-[13px] font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#06472F] hover:shadow-md lg:inline-flex"
//         >
//           Let&apos;s Build
//           <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//         </Link>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           type="button"
//           onClick={() => setMobileOpen((current) => !current)}
//           aria-label={mobileOpen ? "Close menu" : "Open menu"}
//           aria-expanded={mobileOpen}
//           aria-controls="opv-mobile-navigation"
//           className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E8E6DF] bg-[#F8F6F0] text-[#075B3B] transition hover:bg-[#EDE9DE] lg:hidden"
//         >
//           {mobileOpen ? (
//             <X className="h-6 w-6" />
//           ) : (
//             <Menu className="h-6 w-6" />
//           )}
//         </button>
//       </div>

//       {/* DESKTOP MEGA MENU */}
//       {activeDropdown && (
//         <div
//           id={`opv-desktop-${activeDropdown}`}
//           className="absolute left-0 right-0 top-full hidden border-t border-[#E8E6DF] bg-[#F8F6F0] shadow-xl lg:block"
//         >
//           <div className="mx-auto max-w-[1440px] px-10 py-8">

//             {/* SOLUTIONS */}
//             {activeDropdown === "solutions" && (
//               <>
//                 <div className="mb-6 flex items-end justify-between gap-4">
//                   <div>
//                     <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075B3B]">
//                       Our Capabilities
//                     </p>
//                     <h2 className="mt-2 text-2xl font-bold text-[#263C50]">
//                       Technology that moves business forward.
//                     </h2>
//                   </div>

//                   <Link
//                     href="/#solutions"
//                     onClick={closeAll}
//                     className="flex shrink-0 items-center gap-1 text-sm font-semibold text-[#075B3B] hover:underline"
//                   >
//                     Explore all solutions
//                     <ArrowUpRight className="h-4 w-4" />
//                   </Link>
//                 </div>

//                 <div className="grid grid-cols-4 gap-3">
//                   {solutions.map((item) => {
//                     const Icon = item.icon;

//                     return (
//                       <Link
//                         key={item.title}
//                         href={item.href}
//                         onClick={closeAll}
//                         className={megaCardClass}
//                       >
//                         <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#075B3B]/[0.08] text-[#075B3B] transition group-hover:bg-[#075B3B] group-hover:text-white">
//                           <Icon className="h-5 w-5" />
//                         </div>

//                         <h3 className="text-sm font-bold text-[#263C50] transition group-hover:text-[#075B3B]">
//                           {item.title}
//                         </h3>

//                         <p className="mt-2 text-xs leading-5 text-[#607080]">
//                           {item.description}
//                         </p>
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </>
//             )}

//             {/* INDUSTRIES */}
//             {activeDropdown === "industries" && (
//               <>
//                 <div className="mb-6">
//                   <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075B3B]">
//                     Industries We Serve
//                   </p>
//                   <h2 className="mt-2 text-2xl font-bold text-[#263C50]">
//                     One technology partner. Multiple industries.
//                   </h2>
//                 </div>

//                 <div className="grid grid-cols-4 gap-3">
//                   {industries.map((item) => {
//                     const Icon = item.icon;

//                     return (
//                       <Link
//                         key={item.title}
//                         href={item.href}
//                         onClick={closeAll}
//                         className={`${megaCardClass} flex items-center gap-3`}
//                       >
//                         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#075B3B]/[0.08] text-[#075B3B] transition group-hover:bg-[#075B3B] group-hover:text-white">
//                           <Icon className="h-5 w-5" />
//                         </div>

//                         <span className="text-sm font-semibold text-[#263C50] group-hover:text-[#075B3B]">
//                           {item.title}
//                         </span>
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </>
//             )}

//             {/* PRODUCTS */}
//             {activeDropdown === "products" && (
//               <>
//                 <div className="mb-6">
//                   <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075B3B]">
//                     OPV Ecosystem
//                   </p>
//                   <h2 className="mt-2 text-2xl font-bold text-[#263C50]">
//                     Products and platforms built for business.
//                   </h2>
//                 </div>

//                 <div className="grid grid-cols-3 gap-4">
//                   {products.map((item) => (
//                     <Link
//                       key={item.title}
//                       href={item.href}
//                       onClick={closeAll}
//                       target={item.external ? "_blank" : undefined}
//                       rel={item.external ? "noopener noreferrer" : undefined}
//                       className={`${megaCardClass} p-5`}
//                     >
//                       <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C6A052]/[0.12] text-[#98732F]">
//                         <Layers3 className="h-5 w-5" />
//                       </div>

//                       <h3 className="text-base font-bold text-[#263C50] group-hover:text-[#075B3B]">
//                         {item.title}
//                       </h3>

//                       <p className="mt-2 text-sm leading-6 text-[#607080]">
//                         {item.description}
//                       </p>

//                       <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#075B3B]">
//                         Explore
//                         <ArrowUpRight className="h-3.5 w-3.5" />
//                       </span>
//                     </Link>
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}

//       {/* MOBILE NAVIGATION */}
//       {mobileOpen && (
//         <div
//           id="opv-mobile-navigation"
//           className="max-h-[calc(100dvh-78px)] overflow-y-auto border-t border-[#E8E6DF] bg-white px-5 pb-7 pt-4 lg:hidden"
//         >
//           <nav
//             aria-label="Mobile navigation"
//             className="mx-auto flex max-w-[600px] flex-col"
//           >
//             {menuNames.map((name) => {
//               const expanded = mobileExpanded === name;

//               return (
//                 <div key={name}>
//                   <button
//                     type="button"
//                     onClick={() => toggleMobileSection(name)}
//                     aria-expanded={expanded}
//                     aria-controls={`opv-mobile-${name}`}
//                     className="flex w-full items-center justify-between border-b border-[#E8E6DF] py-4 text-left text-sm font-semibold text-[#263C50]"
//                   >
//                     {menuLabels[name]}
//                     <ChevronDown
//                       className={`h-4 w-4 text-[#075B3B] transition-transform ${
//                         expanded ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {expanded && (
//                     <div
//                       id={`opv-mobile-${name}`}
//                       className="space-y-1 rounded-lg bg-[#F8F6F0] p-2"
//                     >
//                       {name === "solutions" &&
//                         solutions.map((item) => {
//                           const Icon = item.icon;

//                           return (
//                             <Link
//                               key={item.title}
//                               href={item.href}
//                               onClick={closeAll}
//                               className="flex items-center gap-3 rounded-lg p-3 text-sm text-[#263C50] hover:bg-white hover:text-[#075B3B]"
//                             >
//                               <Icon className="h-4 w-4 shrink-0 text-[#075B3B]" />
//                               {item.title}
//                             </Link>
//                           );
//                         })}

//                       {name === "industries" &&
//                         industries.map((item) => {
//                           const Icon = item.icon;

//                           return (
//                             <Link
//                               key={item.title}
//                               href={item.href}
//                               onClick={closeAll}
//                               className="flex items-center gap-3 rounded-lg p-3 text-sm text-[#263C50] hover:bg-white hover:text-[#075B3B]"
//                             >
//                               <Icon className="h-4 w-4 shrink-0 text-[#075B3B]" />
//                               {item.title}
//                             </Link>
//                           );
//                         })}

//                       {name === "products" &&
//                         products.map((item) => (
//                           <Link
//                             key={item.title}
//                             href={item.href}
//                             onClick={closeAll}
//                             target={item.external ? "_blank" : undefined}
//                             rel={item.external ? "noopener noreferrer" : undefined}
//                             className="block rounded-lg p-3 hover:bg-white"
//                           >
//                             <span className="block text-sm font-semibold text-[#263C50]">
//                               {item.title}
//                             </span>
//                             <span className="mt-1 block text-xs text-[#607080]">
//                               {item.description}
//                             </span>
//                           </Link>
//                         ))}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}

//             {/* COMPANY LINKS */}
//             {companyLinks.map((item) => (
//               <Link
//                 key={item.title}
//                 href={item.href}
//                 onClick={closeAll}
//                 className="border-b border-[#E8E6DF] py-4 text-sm font-semibold text-[#263C50] transition hover:text-[#075B3B]"
//               >
//                 {item.title}
//               </Link>
//             ))}

//             {/* MOBILE CTA */}
//             <Link
//               href="/contact"
//               onClick={closeAll}
//               className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#075B3B] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
//             >
//               Let&apos;s Build Your Business
//               <ArrowUpRight className="h-4 w-4" />
//             </Link>

//             <div className="mt-6 flex items-center justify-center gap-2 text-center text-[10px] tracking-[0.08em] text-[#607080]">
//               <Lightbulb className="h-3.5 w-3.5 shrink-0 text-[#C6A052]" />
//               AI-POWERED BUSINESS TECHNOLOGY & GROWTH PLATFORM
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }




"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import {
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
  Plane,
  Landmark,
} from "lucide-react";

// ==========================================
// TYPES
// ==========================================

type DropdownName =
  | "solutions"
  | "industries"
  | "products";

type MenuName = DropdownName | null;

// ==========================================
// SOLUTIONS
// ==========================================

const solutions = [
  {
    title: "AI & Intelligent Automation",
    description:
      "AI agents, generative AI and intelligent workflows",
    href: "/solutions/ai-intelligent-automation",
    icon: Sparkles,
  },
  {
    title: "Software & Product Engineering",
    description:
      "Custom software, web applications and product development",
    href: "/solutions/software-engineering",
    icon: Code2,
  },
  {
    title: "SaaS, Cloud & DevOps",
    description:
      "Cloud infrastructure and scalable SaaS products",
    href: "/solutions/saas-cloud-devops",
    icon: Cloud,
  },
  {
    title: "CRM, ERP & Business Systems",
    description:
      "Connected systems for business operations",
    href: "/solutions/crm-erp-business-systems",
    icon: BriefcaseBusiness,
  },
  {
    title: "Data & Business Intelligence",
    description:
      "Analytics, dashboards and business insights",
    href: "/solutions/data-business-intelligence",
    icon: Database,
  },
  {
    title: "Web & Mobile Experiences",
    description:
      "Websites, mobile apps and UI/UX design",
    href: "/solutions/web-mobile-experiences",
    icon: Smartphone,
  },
  {
    title: "Cybersecurity & IT Solutions",
    description:
      "Secure infrastructure and IT solutions",
    href: "/solutions/cybersecurity-it-solutions",
    icon: ShieldCheck,
  },
  {
    title: "Digital Growth & Marketing",
    description:
      "SEO, AEO, GEO, marketing and lead generation",
    href: "/solutions/digital-growth-marketing",
    icon: TrendingUp,
  },
];

// ==========================================
// INDUSTRIES — 10 CATEGORIES
// ==========================================

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
    title: "Logistics & Supply Chain",
    href: "/industries/logistics",
    icon: Truck,
  },
  {
    title: "Travel & Tourism",
    href: "/industries/travel-tourism",
    icon: Plane,
  },
  {
    title: "Banking & Financial Services",
    href: "/industries/banking-finance",
    icon: Landmark,
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

// ==========================================
// PRODUCTS
// ==========================================

const products = [
  {
    title: "Open Plots & Villas",
    description:
      "AI-Powered Real Estate Discovery Portal",
    href: "https://www.openplotsandvillas.com",
    external: true,
  },
  {
    title: "Aarna GrowthOS",
    description:
      "Real Estate Business & Growth Management",
    href: "/#products",
    external: false,
  },
  {
    title: "AI Agents & Automation",
    description:
      "Intelligent AI-powered business solutions",
    href: "/solutions/ai-intelligent-automation",
    external: false,
  },
];

// ==========================================
// COMPANY LINKS
// ==========================================

const companyLinks = [
  {
    title: "Our Approach",
    href: "/approach",
  },
  {
    title: "About OPV AI Realty Tech",
    href: "/about",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
  },
  {
    title: "Insights",
    href: "/insights",
  },
];

// ==========================================
// MENU CONFIGURATION
// ==========================================

const menuNames: DropdownName[] = [
  "solutions",
  "industries",
  "products",
];

const menuLabels: Record<DropdownName, string> = {
  solutions: "Solutions",
  industries: "Industries",
  products: "Products",
};

const navLinkClass =
  "text-[13px] font-semibold text-[#263C50] " +
  "transition-colors duration-200 " +
  "hover:text-[#075B3B] " +
  "focus-visible:outline-2 " +
  "focus-visible:outline-offset-4 " +
  "focus-visible:outline-[#075B3B]";

const megaCardClass =
  "group rounded-xl border border-[#E7E7DF] " +
  "bg-white p-4 transition-all duration-200 " +
  "hover:border-[#C6A052]/60 " +
  "hover:bg-[#F8F6F0] hover:shadow-md " +
  "focus-visible:outline-2 " +
  "focus-visible:outline-[#075B3B]";

// ==========================================
// NAVBAR
// ==========================================

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] =
    useState<MenuName>(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [mobileExpanded, setMobileExpanded] =
    useState<MenuName>(null);

  const navbarRef = useRef<HTMLElement>(null);

  const closeAll = useCallback(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, []);

  const toggleDropdown = (
    name: DropdownName
  ) => {
    setActiveDropdown((current) =>
      current === name ? null : name
    );
  };

  const toggleMobileSection = (
    name: DropdownName
  ) => {
    setMobileExpanded((current) =>
      current === name ? null : name
    );
  };

  // ========================================
  // OUTSIDE CLICK + ESCAPE KEY
  // ========================================

  useEffect(() => {
    const handleOutsideClick = (
      event: MouseEvent
    ) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(
          event.target as Node
        )
      ) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        closeAll();
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [closeAll]);

  // ========================================
  // RENDER
  // ========================================

  return (
    <header
      ref={navbarRef}
      className="sticky top-0 z-50 border-b border-[#E8E6DF] bg-white/95 text-[#263C50] shadow-sm backdrop-blur-xl"
    >
      {/* MAIN NAVBAR */}

      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* LOGO */}

        <Link
          href="/"
          onClick={closeAll}
          aria-label="OPV AI Realty Tech — Home"
          className="group flex shrink-0 items-center"
        >
          <div className="relative flex h-14 w-36 items-center justify-start sm:h-16 sm:w-44">
            <Image
              src="/images/logo2.png"
              alt="OPV AI Realty Tech"
              width={220}
              height={90}
              priority
              sizes="(max-width: 640px) 144px, 176px"
              className="h-full w-full object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </Link>

        {/* ==================================
            DESKTOP NAVIGATION
        ================================== */}

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-4 lg:flex xl:gap-7"
        >
          {menuNames.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() =>
                toggleDropdown(name)
              }
              aria-expanded={
                activeDropdown === name
              }
              aria-controls={`opv-desktop-${name}`}
              className={`${navLinkClass} flex items-center gap-1.5`}
            >
              {menuLabels[name]}

              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  activeDropdown === name
                    ? "rotate-180 text-[#075B3B]"
                    : ""
                }`}
              />
            </button>
          ))}

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
          className="group hidden shrink-0 items-center gap-2 rounded-full bg-[#075B3B] px-5 py-3 text-[13px] font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#06472F] hover:shadow-md lg:inline-flex"
        >
          Let&apos;s Build

          <ArrowUpRight className="h-4 w-4" />
        </Link>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          onClick={() => {
            setMobileOpen((current) => !current);
            setActiveDropdown(null);
          }}
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          aria-controls="opv-mobile-navigation"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E8E6DF] bg-[#F8F6F0] text-[#075B3B] transition hover:bg-[#EDE9DE] lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* ==================================
          DESKTOP MEGA MENU
      ================================== */}

      <div
        className={`absolute left-0 right-0 top-full hidden border-t border-[#E8E6DF] bg-[#F8F6F0] shadow-xl lg:block ${
          activeDropdown ? "" : "invisible"
        }`}
        aria-hidden={!activeDropdown}
      >
        {/* SOLUTIONS */}

        <div
          id="opv-desktop-solutions"
          hidden={activeDropdown !== "solutions"}
        >
          {activeDropdown === "solutions" && (
            <div className="mx-auto max-w-[1440px] px-10 py-8">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075B3B]">
                    Our Capabilities
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-[#263C50]">
                    Technology that moves business forward.
                  </h2>
                </div>

                <Link
                  href="/#solutions"
                  onClick={closeAll}
                  className="flex shrink-0 items-center gap-1 text-sm font-semibold text-[#075B3B] hover:underline"
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
                      key={item.href}
                      href={item.href}
                      onClick={closeAll}
                      className={megaCardClass}
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#075B3B]/[0.08] text-[#075B3B] transition group-hover:bg-[#075B3B] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="text-sm font-bold text-[#263C50] group-hover:text-[#075B3B]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-[#607080]">
                        {item.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* INDUSTRIES */}

        <div
          id="opv-desktop-industries"
          hidden={activeDropdown !== "industries"}
        >
          {activeDropdown === "industries" && (
            <div className="mx-auto max-w-[1440px] px-10 py-8">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075B3B]">
                  Industries We Serve
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#263C50]">
                  One technology partner. Multiple industries.
                </h2>
              </div>

              <div className="grid grid-cols-5 gap-3">
                {industries.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeAll}
                      className={`${megaCardClass} flex min-h-[86px] items-center gap-3`}
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#075B3B]/[0.08] text-[#075B3B] transition group-hover:bg-[#075B3B] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-xs font-semibold leading-5 text-[#263C50] group-hover:text-[#075B3B] xl:text-sm">
                        {item.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* PRODUCTS */}

        <div
          id="opv-desktop-products"
          hidden={activeDropdown !== "products"}
        >
          {activeDropdown === "products" && (
            <div className="mx-auto max-w-[1440px] px-10 py-8">
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#075B3B]">
                  OPV Ecosystem
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#263C50]">
                  Products and platforms built for business.
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {products.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={closeAll}
                    target={
                      item.external
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`${megaCardClass} p-5`}
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C6A052]/[0.12] text-[#98732F]">
                      <Layers3 className="h-5 w-5" />
                    </div>

                    <h3 className="text-base font-bold text-[#263C50] group-hover:text-[#075B3B]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#607080]">
                      {item.description}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#075B3B]">
                      Explore
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ==================================
          MOBILE NAVIGATION
      ================================== */}

      {mobileOpen && (
        <div
          id="opv-mobile-navigation"
          className="max-h-[calc(100dvh-78px)] overflow-y-auto border-t border-[#E8E6DF] bg-white px-5 pb-7 pt-4 lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-[600px] flex-col"
          >
            {menuNames.map((name) => {
              const expanded =
                mobileExpanded === name;

              return (
                <div key={name}>
                  <button
                    type="button"
                    onClick={() =>
                      toggleMobileSection(name)
                    }
                    aria-expanded={expanded}
                    aria-controls={`opv-mobile-${name}`}
                    className="flex w-full items-center justify-between border-b border-[#E8E6DF] py-4 text-left text-sm font-semibold text-[#263C50]"
                  >
                    {menuLabels[name]}

                    <ChevronDown
                      className={`h-4 w-4 text-[#075B3B] transition-transform ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    id={`opv-mobile-${name}`}
                    hidden={!expanded}
                  >
                    {expanded && (
                      <div className="space-y-1 rounded-lg bg-[#F8F6F0] p-2">

                        {/* MOBILE SOLUTIONS */}

                        {name === "solutions" &&
                          solutions.map((item) => {
                            const Icon = item.icon;

                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeAll}
                                className="flex items-center gap-3 rounded-lg p-3 text-sm text-[#263C50] hover:bg-white hover:text-[#075B3B]"
                              >
                                <Icon className="h-4 w-4 shrink-0 text-[#075B3B]" />
                                {item.title}
                              </Link>
                            );
                          })}

                        {/* MOBILE INDUSTRIES */}

                        {name === "industries" &&
                          industries.map((item) => {
                            const Icon = item.icon;

                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeAll}
                                className="flex items-center gap-3 rounded-lg p-3 text-sm text-[#263C50] hover:bg-white hover:text-[#075B3B]"
                              >
                                <Icon className="h-4 w-4 shrink-0 text-[#075B3B]" />
                                {item.title}
                              </Link>
                            );
                          })}

                        {/* MOBILE PRODUCTS */}

                        {name === "products" &&
                          products.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={closeAll}
                              target={
                                item.external
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                item.external
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="block rounded-lg p-3 hover:bg-white"
                            >
                              <span className="block text-sm font-semibold text-[#263C50]">
                                {item.title}
                              </span>

                              <span className="mt-1 block text-xs text-[#607080]">
                                {item.description}
                              </span>
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* COMPANY LINKS */}

            {companyLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeAll}
                className="border-b border-[#E8E6DF] py-4 text-sm font-semibold text-[#263C50] transition hover:text-[#075B3B]"
              >
                {item.title}
              </Link>
            ))}

            {/* MOBILE CTA */}

            <Link
              href="/contact"
              onClick={closeAll}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#075B3B] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
            >
              Let&apos;s Build Your Business
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <div className="mt-6 flex items-center justify-center gap-2 text-center text-[10px] tracking-[0.08em] text-[#607080]">
              <Lightbulb className="h-3.5 w-3.5 shrink-0 text-[#C6A052]" />
              AI-POWERED BUSINESS TECHNOLOGY &amp; GROWTH PLATFORM
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
