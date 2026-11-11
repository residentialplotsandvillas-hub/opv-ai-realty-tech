
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Bot,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  MapPin,
  Phone,
  Rocket,
  School,
  Search,
  ShieldCheck,
  Smartphone,
  Users,
  Video,
  Workflow,
} from "lucide-react";

const SITE_URL = "https://www.opvairealtytech.com";
const PAGE_PATH = "/industries/education";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const PAGE_TITLE =
  "Education Technology & EdTech Solutions in Hyderabad | OPV AI";

const PAGE_DESCRIPTION =
  "Education technology solutions in Hyderabad by OPV AI Realty Tech. LMS development, student portals, admissions CRM, AI assistants, mobile learning apps and automation.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Education technology solutions Hyderabad",
    "EdTech development company Hyderabad",
    "Learning management system development",
    "LMS software development India",
    "School management software",
    "College management software",
    "Student portal development",
    "Admissions CRM software",
    "Education website development",
    "AI assistants for education",
    "Education workflow automation",
    "Mobile learning application development",
    "Online learning platform development",
    "Education analytics dashboards",
    "OPV AI Realty Tech",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
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

const solutions = [
  {
    icon: BookOpen,
    title: "Education Websites & Portals",
    description:
      "Create professional websites, course information platforms, student portals and digital experiences for education organisations.",
  },
  {
    icon: GraduationCap,
    title: "Learning Management Systems",
    description:
      "Plan learning platforms for course materials, learner access, educational resources and learning administration.",
  },
  {
    icon: Users,
    title: "Student & Admissions CRM",
    description:
      "Organise prospective student enquiries, admission workflows, communication records and relationship management.",
  },
  {
    icon: Bot,
    title: "AI Learning Assistants",
    description:
      "Explore AI assistants for general course enquiries, educational information discovery and administrative support.",
  },
  {
    icon: Workflow,
    title: "Education Workflow Automation",
    description:
      "Coordinate suitable processes for admissions, notifications, document handling and internal administration.",
  },
  {
    icon: Video,
    title: "Virtual Learning Platforms",
    description:
      "Develop digital environments for online learning, virtual sessions, educational resources and remote engagement.",
  },
  {
    icon: BarChart3,
    title: "Education Analytics & Reporting",
    description:
      "Plan dashboards and reports for admissions, course activity, enrolment information and organisational operations.",
  },
  {
    icon: Smartphone,
    title: "Mobile Learning Applications",
    description:
      "Create mobile-friendly learning and communication experiences for students, parents, educators and administrators.",
  },
];

const businessTypes = [
  {
    title: "Schools",
    description:
      "Websites, parent communication, admissions enquiries and digital administration platforms.",
  },
  {
    title: "Colleges & Universities",
    description:
      "Institutional websites, student portals, admissions workflows and connected campus applications.",
  },
  {
    title: "Coaching & Training Institutes",
    description:
      "Course websites, enquiry management, learner portals and online education experiences.",
  },
  {
    title: "EdTech Companies",
    description:
      "Learning products, SaaS platforms, mobile applications and digital product engineering.",
  },
  {
    title: "Professional Education Providers",
    description:
      "Training platforms, course catalogues, enrolment processes and learner engagement tools.",
  },
  {
    title: "Online Learning Businesses",
    description:
      "Digital course platforms, learning management systems and online student experiences.",
  },
];

const journey = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "Help learners explore courses, programmes and institutional information.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Enrol",
    description:
      "Provide digital pathways for enquiries, admission information and applications.",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Learn",
    description:
      "Provide access to learning content, course materials and digital resources.",
  },
  {
    number: "04",
    icon: Users,
    title: "Engage",
    description:
      "Support communication between learners, educators and administrators.",
  },
];

const capabilities = [
  "Education website development",
  "Learning management systems",
  "Student and parent portals",
  "Admissions enquiry management",
  "Student CRM applications",
  "Course and programme catalogues",
  "Online learning applications",
  "AI-powered information assistants",
  "Admissions workflow automation",
  "Mobile learning experiences",
  "Education analytics dashboards",
  "Application and system integration",
];

const benefits = [
  {
    title: "More Accessible Education Information",
    description:
      "Help students, parents and visitors find course details, institutional information and relevant resources through clear digital experiences.",
  },
  {
    title: "Organised Admissions Processes",
    description:
      "Plan connected workflows for enquiries, prospective student records, application steps and communication.",
  },
  {
    title: "Connected Learning Experiences",
    description:
      "Create digital platforms that bring course information, learning resources and communication into a more coordinated environment.",
  },
  {
    title: "Better Administrative Visibility",
    description:
      "Use structured records and reporting to review admissions activity, course engagement and organisational operations.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Review your institution, learners, courses, teams and technology requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the platform scope, user journeys, learning needs and system requirements.",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "Create the agreed websites, portals, applications and learning workflows.",
  },
  {
    number: "04",
    title: "Integrate & Test",
    description:
      "Connect relevant systems and review usability, functionality and security considerations.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review organisational needs and identify opportunities for ongoing enhancement.",
  },
];

const faqs = [
  {
    question: "What are education technology solutions?",
    answer:
      "Education technology solutions include software and digital platforms that support teaching, learning, admissions, communication and institutional administration. Examples include LMS platforms, student portals, CRM applications and learning apps.",
  },
  {
    question:
      "Does OPV AI Realty Tech offer EdTech development in Hyderabad?",
    answer:
      "OPV AI Realty Tech is based in Hyderabad and offers education website development, learning platforms, admissions CRM, AI assistants, workflow automation, analytics and mobile application solutions.",
  },
  {
    question: "What is a Learning Management System (LMS)?",
    answer:
      "A Learning Management System is software used to organise and deliver learning content, manage learner access and support course administration. Features depend on the institution's requirements.",
  },
  {
    question:
      "Can you develop student and parent portals?",
    answer:
      "Student and parent portals can be designed to provide relevant information, communication tools, educational resources and administrative functions based on authorised user roles.",
  },
  {
    question: "How can CRM software support admissions?",
    answer:
      "Admissions CRM software can help organise enquiries, prospective student information, follow-up activities, application stages and communication records.",
  },
  {
    question: "Can AI assistants be used in education?",
    answer:
      "AI assistants may support general enquiries, course information discovery and administrative tasks. Educational accuracy, student privacy, age-appropriate safeguards and human oversight should be considered.",
  },
  {
    question:
      "Can education platforms integrate with existing software?",
    answer:
      "Many education applications can connect with existing databases, communication tools, payment systems and institutional applications through supported APIs or approved integration methods.",
  },
  {
    question: "How much does education software development cost?",
    answer:
      "Costs depend on user roles, required features, platform complexity, integrations, design, data security and maintenance. A project requirements assessment helps determine a suitable scope and quotation.",
  },
];

const relatedSolutions = [
  {
    title: "Web & Mobile Experiences",
    href: "/solutions/web-mobile-experiences",
  },
  {
    title: "AI & Intelligent Automation",
    href: "/solutions/ai-intelligent-automation",
  },
  {
    title: "CRM, ERP & Business Systems",
    href: "/solutions/crm-erp-business-systems",
  },
];

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
      name: "Education Technology Solutions",
      serviceType:
        "EdTech Software Development, LMS, Education CRM and Automation",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: [
        { "@type": "City", name: "Hyderabad" },
        { "@type": "State", name: "Telangana" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Education Technology Services",
        itemListElement: solutions.map((solution) => ({
          "@type": "OfferCatalog",
          name: solution.title,
          description: solution.description,
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
          name: "Industries",
          item: `${SITE_URL}/industries`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Education",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function EducationPage() {
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

      {/* HERO */}
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
                  href="/industries"
                  className="hover:text-[#075B3B]"
                >
                  Industries
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3 w-3" />
              </li>
              <li
                aria-current="page"
                className="font-semibold text-[#075B3B]"
              >
                Education
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#075B3B]">
                <GraduationCap className="h-4 w-4" />
                Education Technology Solutions
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[54px]">
                Education Technology
                <span className="block text-[#075B3B]">
                  & EdTech Solutions
                </span>
                <span className="mt-3 block text-2xl font-bold text-[#526577] sm:text-3xl">
                  In Hyderabad
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#526577] sm:text-lg">
                Transform Education. Connect Learning with Technology.
              </p>

              <p className="mt-4 max-w-xl leading-8 text-[#526577]">
                Support modern education with digital
                platforms, learning applications,
                student management systems and
                intelligent automation. OPV AI Realty
                Tech helps education organisations
                explore technology aligned with
                their learning and operational requirements.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
                >
                  Discuss Your Education Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#education-solutions"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:bg-[#F0F6F1]"
                >
                  Explore Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-8 flex items-center gap-2 text-sm text-[#647586]">
                <MapPin className="h-4 w-4 shrink-0 text-[#075B3B]" />
                Hyderabad, Telangana · Serving businesses across India
              </p>
            </div>

            {/* EDUCATION TECHNOLOGY VISUAL */}
            <div className="rounded-3xl border border-[#E5E9E3] bg-white p-6 shadow-[0_20px_60px_rgba(38,60,80,0.07)] sm:p-9">
              <div className="flex items-center justify-between gap-4 border-b border-[#E5E9E3] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    OPV Education Technology
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold">
                    Connected Learning Ecosystem
                  </h2>
                </div>

                <div className="rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <GraduationCap className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 rounded-2xl border border-[#075B3B]/15 bg-[#F0F6F1] p-5">
                <div className="rounded-xl bg-white p-3 text-[#075B3B]">
                  <School className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-extrabold">
                    Digital Education Platform
                  </h3>
                  <p className="mt-1 text-sm text-[#526577]">
                    Connected learning and administration
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    icon: BookOpen,
                    title: "Learning Systems",
                    description: "Courses and digital resources",
                  },
                  {
                    icon: Bot,
                    title: "AI Assistants",
                    description: "General enquiry support",
                  },
                  {
                    icon: Users,
                    title: "Student Management",
                    description: "Admissions and communication",
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics",
                    description: "Institutional reports and insights",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-4 sm:p-5"
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

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#F0F6F1] p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#075B3B]" />
                <p className="text-sm font-medium">
                  Privacy and security considered in platform planning
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
              The Future of Education
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Digital Solutions for Connected Learning Experiences
            </h2>
            <p className="mt-6 leading-8 text-[#526577]">
              Education organisations manage multiple
              digital and administrative activities,
              including course information, admissions,
              learning resources, student communication
              and institutional reporting.
            </p>
            <p className="mt-4 leading-8 text-[#526577]">
              Well-planned technology can help bring
              these activities together through
              connected platforms and more
              organised workflows.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="education-solutions"
        className="scroll-mt-24 border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Education Technology Solutions
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Explore digital platforms, software,
              AI and automation capabilities for
              schools, colleges, training institutes
              and education businesses.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#075B3B]/30 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#526577]">
                    {solution.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Who We Serve
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Technology for Different Education Organisations
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Each institution has different learners,
              courses, administration needs and operating
              models. Technology should reflect those differences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map((business) => (
              <article
                key={business.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-7 transition hover:border-[#075B3B]/30 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold">
                  {business.title}
                </h3>
                <p className="mt-3 leading-8 text-[#526577]">
                  {business.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL LEARNING JOURNEY */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Connected Education Journey
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              From Course Discovery to Learning Engagement
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Digital platforms can support different
              stages of an education journey, from
              exploring programmes to accessing
              learning resources and communicating
              with institutions.
            </p>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((stage) => {
              const Icon = stage.icon;

              return (
                <li
                  key={stage.number}
                  className="rounded-2xl border border-[#E5E9E3] bg-white p-6"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                    Stage {stage.number}
                  </p>
                  <div className="mt-5 inline-flex rounded-xl bg-[#F0F6F1] p-3 text-[#075B3B]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#526577]">
                    {stage.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Technology Capabilities
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              A Connected Digital Toolkit for Education
            </h2>
            <p className="mt-6 leading-8 text-[#526577]">
              From institutional websites to learning
              applications and student management
              systems, we help identify technology
              capabilities that fit your organisation.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#075B3B] hover:underline"
            >
              Discuss Your Education Requirements
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
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

      {/* BENEFITS */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Business Outcomes
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Technology That Supports Education Operations
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Connected digital systems can help
              education organisations coordinate
              information, administration and
              learning experiences.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-[#E5E9E3] bg-white p-7"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#98732F]">
                  Outcome {String(index + 1).padStart(2, "0")}
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

      {/* IMPLEMENTATION PROCESS */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Our Approach
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              From Education Requirements to Digital Solutions
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              A structured process helps align
              technology decisions with your
              learners, courses, teams and
              institutional requirements.
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0] p-6"
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

      {/* FAQs */}
      <section className="border-y border-[#E5E9E3] bg-[#F8F6F0] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#075B3B]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Education Technology FAQs
            </h2>
            <p className="mt-5 leading-8 text-[#526577]">
              Common questions about learning
              platforms, student management,
              admissions CRM and education software.
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

      {/* RELATED SOLUTIONS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <h2 className="text-2xl font-extrabold">
            Explore Related Technology Solutions
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#526577]">
            Connect education technology with
            web and mobile development,
            AI automation and business systems.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
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

      {/* FINAL CTA */}
      <section className="bg-[#075B3B] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
            <Rocket className="h-7 w-7 text-[#E9CF91]" />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold sm:text-4xl">
            Ready to Transform Your Education Organisation?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80">
            Whether you manage a school, college,
            coaching institute, education startup
            or online learning business, explore
            how software, AI and connected
            technology can support your goals.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C6A052] px-7 py-4 text-sm font-bold text-[#263C50] transition hover:bg-[#D8B76C]"
            >
              Discuss Your Education Project
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
