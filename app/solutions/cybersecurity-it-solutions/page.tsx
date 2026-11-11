
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  FileSearch,
  Fingerprint,
  LockKeyhole,
  MapPin,
  Network,
  Phone,
  RefreshCw,
  Rocket,
  Server,
  Shield,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

// ==========================================
// SEO CONFIGURATION
// ==========================================

const SITE_URL = "https://www.opvairealtytech.com";

const PAGE_PATH =
  "/solutions/cybersecurity-it-solutions";

const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Cybersecurity & IT Solutions in Hyderabad | OPV AI Realty Tech";

const PAGE_DESCRIPTION =
  "Explore cybersecurity and IT solutions in Hyderabad, including application security, cloud security, access management, IT assessments and backup planning.";

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Cybersecurity company in Hyderabad",
    "Cybersecurity services Hyderabad",
    "IT security solutions Hyderabad",
    "Application security services",
    "Cloud security services Hyderabad",
    "IT security assessment",
    "Website security review",
    "Identity and access management",
    "Network security solutions",
    "IT infrastructure security",
    "Database security services",
    "Backup and disaster recovery planning",
    "Secure software development",
    "Business cybersecurity solutions",
    "Cybersecurity consulting India",
    "OPV AI Realty Tech",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "OPV AI Realty Tech",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

// ==========================================
// SERVICES
// ==========================================

const services = [
  {
    icon: FileSearch,
    title: "Security Reviews & Assessments",
    description:
      "Review applications, business systems and technology environments to identify potential security gaps, configuration concerns and improvement opportunities.",
  },
  {
    icon: Code2,
    title: "Application Security",
    description:
      "Incorporate secure coding considerations, authentication, input validation and application security reviews into the software development lifecycle.",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Assess cloud configurations, identity permissions, storage access and infrastructure security considerations for cloud-based applications.",
  },
  {
    icon: Fingerprint,
    title: "Identity & Access Management",
    description:
      "Plan authentication, user roles, permissions and access controls around organizational responsibilities and application requirements.",
  },
  {
    icon: Network,
    title: "Network & Infrastructure Security",
    description:
      "Review network exposure, server configurations and infrastructure security requirements to support more controlled technology environments.",
  },
  {
    icon: RefreshCw,
    title: "Backup & Recovery Planning",
    description:
      "Evaluate backup requirements, recovery objectives and continuity considerations for important business applications and information.",
  },
];

// ==========================================
// SECURITY FOCUS AREAS
// ==========================================

const securityAreas = [
  {
    icon: LockKeyhole,
    title: "Protect Applications",
    description:
      "Consider secure development practices, authentication, authorization, input validation and the handling of sensitive application data.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description:
      "Review infrastructure configurations, server environments, network exposure and system access arrangements.",
  },
  {
    icon: UserCheck,
    title: "Manage User Access",
    description:
      "Organize user identities, role-based permissions and authentication requirements across business systems.",
  },
  {
    icon: Database,
    title: "Safeguard Business Data",
    description:
      "Assess data access, storage, backup arrangements and information handling requirements.",
  },
];

// ==========================================
// CAPABILITIES
// ==========================================

const capabilities = [
  "Application security considerations",
  "Website and platform security reviews",
  "Cloud configuration reviews",
  "Identity and access management planning",
  "User permissions and access controls",
  "Database security considerations",
  "Infrastructure security reviews",
  "Backup and recovery planning",
  "Security-aware software development",
  "IT environment assessment",
  "Technology risk identification",
  "Security improvement recommendations",
];

// ==========================================
// BUSINESS BENEFITS
// ==========================================

const benefits = [
  {
    title: "Improved Security Awareness",
    description:
      "Understand potential weaknesses and security considerations across applications and business technology environments.",
  },
  {
    title: "More Controlled Access",
    description:
      "Plan user permissions and authentication arrangements according to business roles and system requirements.",
  },
  {
    title: "Better Technology Risk Visibility",
    description:
      "Identify areas requiring attention and organize security improvement priorities.",
  },
  {
    title: "Improved Operational Preparedness",
    description:
      "Consider backup strategies, recovery requirements and continuity planning for important business systems.",
  },
];

// ==========================================
// SECURITY PROCESS
// ==========================================

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your applications, infrastructure, business data and technology environment.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Review relevant configurations, access arrangements and potential technology risk areas.",
  },
  {
    number: "03",
    title: "Recommend",
    description:
      "Identify improvement opportunities and define a practical action plan based on priorities.",
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Plan and carry out agreed security and IT improvements within the defined project scope.",
  },
  {
    number: "05",
    title: "Review",
    description:
      "Evaluate the implemented improvements and identify additional requirements as systems evolve.",
  },
];

// ==========================================
// FAQ CONTENT
// ==========================================

const faqs = [
  {
    question: "What are cybersecurity services?",
    answer:
      "Cybersecurity services help organizations assess and improve the security of applications, infrastructure, networks, cloud environments, user access and business information.",
  },
  {
    question:
      "Does OPV AI Realty Tech provide cybersecurity services in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad and offers cybersecurity and IT solutions covering application security considerations, cloud configuration reviews, access management planning and technology security assessments.",
  },
  {
    question:
      "What is an application security assessment?",
    answer:
      "An application security assessment examines relevant security controls, configurations and implementation practices to identify potential weaknesses. The exact scope and testing methods depend on the agreed engagement.",
  },
  {
    question: "Why is cloud security important?",
    answer:
      "Cloud security helps organizations manage access, configurations, storage permissions and other risks associated with cloud-hosted applications and infrastructure.",
  },
  {
    question:
      "What is identity and access management?",
    answer:
      "Identity and access management, or IAM, involves controlling how users authenticate and which applications, resources and information they are authorized to access.",
  },
  {
    question:
      "Can cybersecurity services help protect business websites?",
    answer:
      "Security reviews can identify potential website risks and improvement opportunities involving authentication, access controls, configurations and application development practices. No security assessment can guarantee complete protection against cyberattacks.",
  },
  {
    question:
      "What is the difference between backup and disaster recovery?",
    answer:
      "Backup refers to maintaining recoverable copies of data. Disaster recovery covers the broader processes, systems and procedures required to restore business technology after a disruption.",
  },
  {
    question:
      "How much do cybersecurity and IT services cost in Hyderabad?",
    answer:
      "Pricing depends on the number and complexity of applications, infrastructure scope, assessment requirements, implementation work and ongoing support needs. A defined project scope is required for an accurate estimate.",
  },
];

// ==========================================
// RELATED SOLUTIONS
// ==========================================

const relatedSolutions = [
  {
    title: "AI & Intelligent Automation",
    href: "/solutions/ai-intelligent-automation",
  },
  {
    title: "CRM, ERP & Business Systems",
    href: "/solutions/crm-erp-business-systems",
  },
];

// ==========================================
// JSON-LD STRUCTURED DATA
// ==========================================

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "OPV AI Realty Tech Private Limited",
      url: SITE_URL,
      telephone: "+91-9963513939",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      inLanguage: "en-IN",
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      about: {
        "@id": `${PAGE_URL}#service`,
      },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Cybersecurity & IT Solutions",
      serviceType: "Cybersecurity and IT Security Services",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Hyderabad",
        },
        {
          "@type": "State",
          name: "Telangana",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cybersecurity and IT Services",
        itemListElement: services.map((service) => ({
          "@type": "OfferCatalog",
          name: service.title,
          description: service.description,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: `${SITE_URL}/solutions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cybersecurity & IT Solutions",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// ==========================================
// PAGE COMPONENT
// ==========================================

export default function CybersecurityITSolutionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#263C50]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* ====================================
          HERO SECTION
      ==================================== */}

      <section className="relative border-b border-[#E5E9E3] bg-[#F8F6F0]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
          <nav aria-label="Breadcrumb" className="mb-9">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-[#647586]">
              <li>
                <Link href="/" className="hover:text-[#075B3B]">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3 w-3" />
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-[#075B3B]"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3 w-3" />
              </li>
              <li
                aria-current="page"
                className="font-semibold text-[#075B3B]"
              >
                Cybersecurity & IT Solutions
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <ShieldCheck className="h-4 w-4" />
                Cybersecurity & IT Solutions
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                Cybersecurity & IT Solutions
                <span className="mt-3 block text-[#075B3B]">
                  in Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#526577] sm:text-lg">
                Strengthen your approach to application
                security, cloud infrastructure, access
                management and business technology risk.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                OPV AI Realty Tech helps organizations
                review technology environments, assess
                security requirements and plan practical
                improvements aligned with business needs.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your Security Requirements
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:bg-[#F0F6F1]"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-8 flex items-center gap-2 text-sm text-[#647586]">
                <MapPin className="h-4 w-4 text-[#075B3B]" />
                Hyderabad, Telangana · Serving businesses across India
              </p>
            </div>

            {/* HERO SECURITY PANEL */}

            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-7 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">
              <div className="flex items-center justify-between border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Security & IT
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold">
                    Digital Security Framework
                  </h2>
                </div>

                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <ShieldCheck className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-[#075B3B]/15 bg-[#F0F6F1] text-[#075B3B]">
                  <Shield className="h-12 w-12" strokeWidth={1.5} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold">
                  Security by Design
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#526577]">
                  Security considerations across the technology lifecycle
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  {
                    icon: LockKeyhole,
                    title: "Access Control",
                    description: "Identity and permissions",
                  },
                  {
                    icon: Cloud,
                    title: "Cloud Security",
                    description: "Infrastructure configurations",
                  },
                  {
                    icon: Database,
                    title: "Data Protection",
                    description: "Data handling and recovery",
                  },
                  {
                    icon: FileSearch,
                    title: "Security Reviews",
                    description: "Assessment and improvement",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-5"
                    >
                      <Icon className="h-6 w-6 text-[#075B3B]" />

                      <h3 className="mt-4 text-sm font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-[#526577]">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#F0F6F1] p-5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#075B3B]" />

                <p className="text-sm font-medium">
                  Security planning aligned with business requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================
          INTRODUCTION
      ==================================== */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Responsible Business Technology
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Build a More Secure Foundation for Digital Operations
            </h2>

            <p className="mt-6 text-base leading-8 text-[#526577]">
              Websites, applications, cloud environments
              and enterprise systems introduce different
              security considerations. Organizations need
              visibility into how their systems are configured,
              who can access them and how important information
              is handled.
            </p>

            <p className="mt-4 text-base leading-8 text-[#526577]">
              A structured approach to cybersecurity helps
              businesses identify potential risks, review
              existing safeguards and prioritize improvements
              across their technology environment.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================
          SERVICES
      ==================================== */}

      <section
        id="services"
        className="scroll-mt-24 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Cybersecurity Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Cybersecurity & IT Security Services
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Explore security and IT capabilities
              designed to help businesses review
              their technology environments and
              plan appropriate improvements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-[#526577]">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================
          SECURITY AREAS
      ==================================== */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Security Focus Areas
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Security Across Your Technology Environment
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Effective security planning considers
              applications, infrastructure, users
              and business information together.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {securityAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-8"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#526577]">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================
          CAPABILITIES
      ==================================== */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Practical Security Planning
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Our Cybersecurity & IT Capabilities
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Every technology environment has different
              security requirements. Our approach focuses
              on understanding relevant risks, reviewing
              existing controls and identifying improvements
              appropriate to the project scope.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#075B3B] hover:underline"
            >
              Discuss Your Security Requirements
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#E5E9E3] bg-white p-4"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#075B3B]" />

                <span className="text-sm font-medium leading-7 text-[#526577]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================
          BUSINESS BENEFITS
      ==================================== */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Business Value
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Why Cybersecurity Matters for Business
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A considered cybersecurity approach
              can help organizations understand
              technology risks and prioritize
              practical improvements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-7"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                  Benefit {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-4 text-xl font-extrabold">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-8 text-[#526577]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================
          DEVELOPMENT & SECURITY PROCESS
      ==================================== */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Our Cybersecurity Assessment & Improvement Process
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A structured process helps align
              security improvements with your
              technology environment and
              business priorities.
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-6"
              >
                <span className="text-3xl font-black text-[#C6A052]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-extrabold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#526577]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ====================================
          SECURITY PLANNING SECTION
      ==================================== */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Security-Aware Development
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Security Considerations from Planning to Deployment
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Security is an important consideration
              when developing websites, applications,
              cloud platforms and business systems.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              Authentication, permissions, secure
              configurations, data handling and
              recovery requirements should be
              considered as part of technology
              planning and implementation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: "Security Planning",
              },
              {
                icon: LockKeyhole,
                title: "Access Management",
              },
              {
                icon: Database,
                title: "Data Handling",
              },
              {
                icon: RefreshCw,
                title: "Recovery Planning",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-6"
                >
                  <Icon className="h-7 w-7 text-[#075B3B]" />

                  <h3 className="mt-4 font-bold">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================
          FAQ SECTION
      ==================================== */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Cybersecurity & IT Solutions FAQs
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Common questions about application
              security, cloud protection, access
              management and IT security planning.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#E5E9E3] bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold [&::-webkit-details-marker]:hidden">
                  {faq.question}

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl text-[#075B3B] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-5 border-t border-[#E5E9E3] pt-5 text-sm leading-8 text-[#526577]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================
          RELATED SOLUTIONS
      ==================================== */}

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className="text-2xl font-extrabold">
            Explore Related Technology Solutions
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#526577]">
            Explore how cybersecurity considerations
            connect with AI development, business
            automation and integrated enterprise systems.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {relatedSolutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between gap-4 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-5 transition hover:border-[#075B3B]/30"
              >
                <span className="text-sm font-bold">
                  {item.title}
                </span>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#075B3B]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================
          FINAL CTA
      ==================================== */}

      <section className="bg-[#075B3B] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Rocket className="h-7 w-7 text-[#E9CF91]" />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold sm:text-4xl">
            Ready to Strengthen Your Business Technology?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Tell us about your applications,
            infrastructure or IT security
            requirements. Explore a practical
            approach aligned with your business.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your Requirements
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="tel:+919963513939"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              +91 99635 13939
            </a>
          </div>

          <p className="mt-9 text-xs tracking-widest text-white/65">
            OPV AI REALTY TECH PRIVATE LIMITED
          </p>

          <p className="mt-2 text-sm font-medium text-white/80">
            Build Smarter • Automate Better • Grow Faster
          </p>
        </div>
      </section>
    </main>
  );
}
