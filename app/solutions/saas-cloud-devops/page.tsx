
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Cloud,
  CloudCog,
  Code2,
  Database,
  Gauge,
  GitBranch,
  LockKeyhole,
  MapPin,
  Network,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

// ==========================================
// SEO CONFIGURATION
// ==========================================

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_PATH = "/solutions/saas-cloud-devops";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "SaaS Development, Cloud & DevOps Services in Hyderabad | OPV AI";

const PAGE_DESCRIPTION =
  "Explore SaaS development, cloud architecture and DevOps services in Hyderabad. Cloud infrastructure, CI/CD, migration and deployment automation by OPV AI Realty Tech.";

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  keywords: [
    "SaaS development company in Hyderabad",
    "SaaS application development Hyderabad",
    "Custom SaaS development services",
    "Cloud computing services Hyderabad",
    "Cloud infrastructure solutions",
    "Cloud architecture consulting",
    "DevOps services Hyderabad",
    "DevOps consulting India",
    "CI/CD pipeline development",
    "Cloud migration services Hyderabad",
    "Cloud infrastructure automation",
    "SaaS platform development",
    "Multi tenant SaaS development",
    "Cloud application development",
    "Cloud deployment services",
    "Infrastructure automation",
    "Application hosting solutions",
    "Cloud modernization services",
    "Scalable software architecture",
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
    icon: Cloud,
    title: "Cloud Strategy & Architecture",
    description:
      "Plan cloud environments around application requirements, workloads, infrastructure needs, security considerations and business objectives.",
  },
  {
    icon: Server,
    title: "Cloud Infrastructure",
    description:
      "Design and configure infrastructure components for application hosting, storage, networking and business workloads.",
  },
  {
    icon: Code2,
    title: "SaaS Product Development",
    description:
      "Plan and develop software-as-a-service products, subscription platforms, multi-user applications and business software solutions.",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description:
      "Develop structured build, testing and deployment workflows to support consistent application releases and coordinated engineering processes.",
  },
  {
    icon: CloudCog,
    title: "Cloud Migration & Modernization",
    description:
      "Assess existing applications and infrastructure to plan appropriate cloud migration, modernization and deployment approaches.",
  },
  {
    icon: Network,
    title: "Infrastructure Automation",
    description:
      "Automate suitable infrastructure provisioning, environment configuration and operational tasks to reduce repetitive manual processes.",
  },
];

// ==========================================
// CLOUD CAPABILITIES
// ==========================================

const cloudCapabilities = [
  "Cloud infrastructure planning",
  "Application hosting environments",
  "Cloud storage and database planning",
  "SaaS architecture and development",
  "Development and deployment pipelines",
  "Containerization and orchestration planning",
  "Infrastructure monitoring approaches",
  "Backup and recovery planning",
];

// ==========================================
// BUSINESS BENEFITS
// ==========================================

const benefits = [
  {
    icon: Gauge,
    title: "Scalability",
    description:
      "Plan infrastructure and application architecture around changing workloads, user requirements and future business growth.",
  },
  {
    icon: Workflow,
    title: "Consistent Software Delivery",
    description:
      "Structure development, testing and deployment workflows to support repeatable releases and coordinated engineering activities.",
  },
  {
    icon: ShieldCheck,
    title: "Security Considerations",
    description:
      "Include access controls, infrastructure security and operational safeguards in application and cloud environment planning.",
  },
  {
    icon: LockKeyhole,
    title: "Operational Reliability",
    description:
      "Consider monitoring, backup arrangements, recovery requirements and infrastructure maintenance as part of technology architecture.",
  },
];

// ==========================================
// IMPLEMENTATION PROCESS
// ==========================================

const process = [
  {
    number: "01",
    title: "Assess",
    description:
      "Understand your applications, infrastructure, workloads and business requirements.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Define the cloud architecture, deployment model and technical approach.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Configure agreed environments, applications and automation workflows.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Prepare and deploy the solution using the agreed release process.",
  },
  {
    number: "05",
    title: "Monitor & Improve",
    description:
      "Review the operational setup and identify opportunities for optimization.",
  },
];

// ==========================================
// FAQ CONTENT
// ==========================================

const faqs = [
  {
    question: "What is SaaS development?",
    answer:
      "SaaS development involves creating software applications that users access over the internet, commonly through subscription or account-based access models. SaaS products may include CRM systems, ERP platforms, business applications and industry-specific software.",
  },
  {
    question:
      "Does OPV AI Realty Tech provide SaaS development services in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad and offers SaaS, cloud and DevOps solutions covering software product development, cloud architecture, infrastructure planning and deployment workflows.",
  },
  {
    question: "What are cloud computing services?",
    answer:
      "Cloud computing services provide computing resources such as servers, storage, databases, networking and application hosting through cloud infrastructure rather than relying exclusively on local hardware.",
  },
  {
    question: "What is DevOps?",
    answer:
      "DevOps refers to engineering practices that improve collaboration between software development and IT operations, often using automation, continuous integration, deployment workflows and monitoring.",
  },
  {
    question: "What is a CI/CD pipeline?",
    answer:
      "CI/CD stands for continuous integration and continuous delivery or deployment. A CI/CD pipeline automates appropriate build, testing and release activities to support more consistent software delivery.",
  },
  {
    question: "Can existing business applications be migrated to the cloud?",
    answer:
      "Many applications can be migrated or modernized for cloud environments. Feasibility depends on application architecture, dependencies, security requirements, data storage and infrastructure compatibility.",
  },
  {
    question: "What is multi-tenant SaaS architecture?",
    answer:
      "Multi-tenant SaaS architecture allows multiple customer organizations to use a shared application infrastructure while maintaining appropriate separation of customer data and access permissions.",
  },
  {
    question:
      "How much does SaaS development or cloud infrastructure cost in Hyderabad?",
    answer:
      "Costs depend on application complexity, user requirements, cloud resources, integrations, security needs, deployment architecture and maintenance. A project assessment is needed for an accurate estimate.",
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
  {
    title: "Cybersecurity & IT Solutions",
    href: "/solutions/cybersecurity-it-solutions",
  },
];

// ==========================================
// STRUCTURED DATA
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
      name: "SaaS, Cloud & DevOps Solutions",
      serviceType:
        "SaaS Development, Cloud Infrastructure and DevOps Services",
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
        name: "SaaS, Cloud and DevOps Services",
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
          name: "SaaS, Cloud & DevOps",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// ==========================================
// PAGE COMPONENT
// ==========================================

export default function SaaSCloudDevOpsPage() {
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

      {/* HERO SECTION */}

      <section className="border-b border-[#E5E9E3] bg-[#F8F6F0]">
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
                SaaS, Cloud & DevOps
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <Cloud className="h-4 w-4" />
                SaaS, Cloud & DevOps Solutions
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                SaaS Development,
                <span className="block text-[#075B3B]">
                  Cloud & DevOps
                </span>
                <span className="mt-3 block text-2xl font-bold text-[#526577] sm:text-3xl">
                  Solutions in Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#526577] sm:text-lg">
                Build. Deploy. Scale with Confidence.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                Create a stronger foundation for your
                digital business with cloud-ready
                applications, SaaS platforms and
                modern development workflows.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                OPV AI Realty Tech helps organizations
                plan cloud infrastructure, software
                delivery processes and scalable
                application architectures aligned
                with business requirements.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your Cloud Project
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

            {/* CLOUD ARCHITECTURE VISUAL */}

            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-7 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">
              <div className="flex items-center justify-between border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Cloud Technology
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold">
                    Connected Cloud Architecture
                  </h2>
                </div>

                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <Cloud className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                {[
                  {
                    icon: CloudCog,
                    title: "Cloud Infrastructure",
                    description:
                      "Environments for business applications",
                  },
                  {
                    icon: Code2,
                    title: "SaaS Platforms",
                    description:
                      "Connected digital products and services",
                  },
                  {
                    icon: GitBranch,
                    title: "DevOps Workflows",
                    description:
                      "Structured build and release processes",
                  },
                  {
                    icon: Database,
                    title: "Data Services",
                    description:
                      "Data storage and application connectivity",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-5"
                    >
                      <Icon className="h-7 w-7 text-[#075B3B]" />

                      <h3 className="mt-4 text-sm font-extrabold">
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
                  Infrastructure planned around business requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              A Foundation for Digital Growth
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Technology Infrastructure That Grows with Your Business
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              Digital products need more than
              application code. They also require
              suitable infrastructure, deployment
              processes and operational planning.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              Cloud and DevOps approaches can help
              organizations manage application
              environments, coordinate software
              releases and plan for changing
              technical requirements.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="scroll-mt-24 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Technology Services
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              SaaS Development, Cloud & DevOps Services
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Explore technology capabilities for
              developing, deploying and operating
              modern digital applications.
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

      {/* CLOUD CAPABILITIES */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Technology Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Cloud & Infrastructure Building Blocks
            </h2>

            <p className="mt-6 leading-8 text-[#526577]">
              The right cloud environment depends
              on your application architecture,
              workloads, security requirements
              and operating model.
            </p>

            <p className="mt-4 leading-8 text-[#526577]">
              We help assess technical requirements
              and define suitable infrastructure
              and deployment approaches.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#075B3B] hover:underline"
            >
              Discuss Your Infrastructure Needs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {cloudCapabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-4"
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

      {/* SAAS ARCHITECTURE */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              SaaS Product Engineering
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              SaaS Architecture Designed Around Your Product
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Successful SaaS products require
              thoughtful planning across application
              architecture, user access, data
              management and deployment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Code2,
                title: "Product Architecture",
                description:
                  "Application structure, modules and product requirements.",
              },
              {
                icon: LockKeyhole,
                title: "User & Tenant Access",
                description:
                  "Authentication, permissions and tenant separation.",
              },
              {
                icon: Database,
                title: "Data Architecture",
                description:
                  "Database planning, storage and application connectivity.",
              },
              {
                icon: Cloud,
                title: "Cloud Deployment",
                description:
                  "Hosting environments, deployment and operational planning.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#526577]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFITS */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Business Value
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Build a Stronger Digital Foundation
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Thoughtful infrastructure and delivery
              practices can support application
              management and ongoing development.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-7"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 leading-8 text-[#526577]">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS */}

      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Our SaaS, Cloud & DevOps Implementation Process
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              A structured process helps align
              cloud architecture and deployment
              workflows with your application
              requirements and business goals.
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

      {/* FAQ */}

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              SaaS Development, Cloud & DevOps FAQs
            </h2>

            <p className="mt-5 leading-8 text-[#526577]">
              Answers to common questions about
              SaaS applications, cloud architecture,
              infrastructure and deployment.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] p-6"
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

      {/* RELATED SOLUTIONS */}

      <section className="border-t border-[#E5E9E3] bg-[#F8F6F0] py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className="text-2xl font-extrabold">
            Explore Related Technology Solutions
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-[#526577]">
            Explore how SaaS and cloud technologies
            connect with AI development, enterprise
            systems and cybersecurity.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedSolutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between gap-4 rounded-xl border border-[#E5E9E3] bg-white p-5 transition hover:border-[#075B3B]/30"
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

      {/* FINAL CTA */}

      <section className="bg-[#075B3B] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Rocket className="h-7 w-7 text-[#E9CF91]" />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold sm:text-4xl">
            Ready to Build Your Next Cloud-Powered Product?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Tell us about your SaaS product,
            cloud infrastructure or DevOps
            requirements. Explore a practical
            technology approach aligned with
            your business.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your Cloud Project
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
