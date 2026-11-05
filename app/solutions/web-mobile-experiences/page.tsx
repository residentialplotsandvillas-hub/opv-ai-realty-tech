import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  AppWindow,
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe,
  Gauge,
  LayoutDashboard,
  Monitor,
  MousePointerClick,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Tablet,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web & Mobile Experiences | OPV AI Realty Tech",
  description:
    "Explore website development, responsive web applications, mobile app development, UI/UX design and digital experiences with OPV AI Realty Tech.",
  alternates: {
    canonical: "/solutions/web-mobile-experiences",
  },
  openGraph: {
    title: "Web & Mobile Experiences | OPV AI Realty Tech",
    description:
      "Create responsive websites, mobile applications and user-focused digital experiences with OPV AI Realty Tech.",
    url: "/solutions/web-mobile-experiences",
    type: "website",
  },
};

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Create professional business websites, corporate websites and digital destinations designed around your brand and objectives.",
  },
  {
    icon: AppWindow,
    title: "Web Application Development",
    description:
      "Develop interactive web applications, customer portals, admin panels and browser-based business tools.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Plan and develop mobile application experiences for customers, employees and business users.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Shape user journeys, interface layouts and design systems around usability, clarity and consistent branding.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "Build digital commerce experiences for product discovery, shopping journeys and online business operations.",
  },
  {
    icon: Workflow,
    title: "Web & System Integration",
    description:
      "Connect digital experiences with APIs, business applications, databases and relevant third-party services.",
  },
];

const platforms = [
  {
    icon: Monitor,
    title: "Business Websites",
    description:
      "Corporate websites, service websites, landing pages and brand experiences.",
  },
  {
    icon: LayoutDashboard,
    title: "Web Platforms & Portals",
    description:
      "Customer portals, business dashboards, internal applications and online platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Mobile experiences designed around customer and business requirements.",
  },
  {
    icon: Tablet,
    title: "Responsive Experiences",
    description:
      "Interfaces planned to work across desktop, tablet and mobile screen sizes.",
  },
];

const capabilities = [
  "Responsive website design",
  "Corporate and business websites",
  "Web application development",
  "Mobile application experiences",
  "UI/UX research and design",
  "E-commerce experiences",
  "Customer and partner portals",
  "Landing pages and campaign websites",
  "API and third-party integrations",
  "Website performance considerations",
  "Accessibility considerations",
  "Search-friendly site structure",
];

const principles = [
  {
    icon: MousePointerClick,
    title: "User-Centred Experiences",
    description:
      "Plan intuitive journeys that help visitors and customers understand your services and complete relevant actions.",
  },
  {
    icon: Gauge,
    title: "Performance Considerations",
    description:
      "Consider loading performance, efficient assets and implementation choices throughout development.",
  },
  {
    icon: Accessibility,
    title: "Accessible Design",
    description:
      "Consider readable content, clear navigation, suitable contrast and accessible interaction patterns.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Reliability",
    description:
      "Consider secure data handling, appropriate access controls and reliable integration requirements.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your audience, brand, business objectives and project requirements.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "Define the site structure, user journeys, interface direction and functionality.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build the agreed website, application or mobile experience.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Review responsive layouts, functionality, usability and compatibility.",
  },
  {
    number: "05",
    title: "Launch & Improve",
    description:
      "Prepare for deployment and identify opportunities for ongoing improvements.",
  },
];

export default function WebMobileExperiencesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Web & Mobile Experiences
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Create Digital
              <span className="block text-emerald-400">
                Experiences That Connect.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Build meaningful digital experiences for your customers and
              teams. OPV AI Realty Tech helps organisations plan and develop
              websites, web applications, mobile products and user-focused
              digital platforms.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/#solutions"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Explore Our Solutions
              </Link>
            </div>

            <p className="mt-8 text-sm text-slate-400">
              Thoughtful design. Modern development. Connected experiences.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                    OPV DIGITAL EXPERIENCE
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    One Connected Experience
                  </h2>
                </div>

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                  <Monitor size={28} />
                </div>
              </div>

              {/* DESKTOP MOCKUP */}
              <div className="mt-7 rounded-2xl border border-white/10 bg-[#10233a] p-4">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <div className="ml-3 h-5 flex-1 rounded-md bg-white/5" />
                </div>

                <div className="grid gap-4 py-5 sm:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <div className="h-3 w-20 rounded bg-emerald-400/70" />
                    <div className="mt-3 h-5 w-full rounded bg-white/20" />
                    <div className="mt-2 h-5 w-4/5 rounded bg-white/20" />
                    <div className="mt-4 h-2 w-full rounded bg-white/10" />
                    <div className="mt-2 h-2 w-4/5 rounded bg-white/10" />
                    <div className="mt-5 h-8 w-28 rounded-lg bg-emerald-500" />
                  </div>

                  <div className="flex min-h-36 items-center justify-center rounded-xl bg-emerald-400/10">
                    <Globe size={52} className="text-emerald-300" />
                  </div>
                </div>
              </div>

              {/* DEVICE CARDS */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/10 bg-[#10233a] p-3 text-center">
                  <Monitor
                    size={23}
                    className="mx-auto text-emerald-400"
                  />
                  <p className="mt-2 text-xs font-medium text-slate-300">
                    Desktop
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#10233a] p-3 text-center">
                  <Tablet
                    size={23}
                    className="mx-auto text-emerald-400"
                  />
                  <p className="mt-2 text-xs font-medium text-slate-300">
                    Tablet
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#10233a] p-3 text-center">
                  <Smartphone
                    size={23}
                    className="mx-auto text-emerald-400"
                  />
                  <p className="mt-2 text-xs font-medium text-slate-300">
                    Mobile
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-4">
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-emerald-300"
                />
                <p className="text-sm text-slate-200">
                  Digital experiences designed for different devices
                </p>
              </div>
            </div>

            <div className="absolute -right-5 -top-5 -z-10 h-36 w-36 rounded-full bg-emerald-400/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Your digital presence
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Make Every Digital Interaction Count
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Your website and applications are important touchpoints between
            your business and its audience. A considered digital experience
            brings together useful content, intuitive navigation, suitable
            functionality and consistent design. We help shape these elements
            around your brand, users and business objectives.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Web & Mobile Development Services
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              From your first business website to a connected digital
              application, explore capabilities for different project needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Digital platforms
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Experiences Across Devices & Platforms
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Choose an experience that fits your audience, business model and
            intended functionality.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform) => {
            const Icon = platform.icon;

            return (
              <article
                key={platform.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                  <Icon size={25} />
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {platform.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {platform.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Our capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything Your Digital Experience Needs
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Each project has different design, technical and functional
              requirements. We help define the right combination of
              capabilities for your digital product.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              Discuss your digital project
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-emerald-600"
                />
                <span className="text-sm font-medium leading-6 text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE PRINCIPLES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            How we think about digital experiences
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Designed for People. Built for Business.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            A successful digital product should balance user needs with
            functionality, technical requirements and business objectives.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                  <Icon size={25} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {principle.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Our approach
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From First Concept to Digital Launch
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A structured process helps keep design and development aligned
              with your audience and project requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-3xl font-bold text-emerald-400">
                  {step.number}
                </p>

                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-600 px-7 py-14 text-center text-white sm:px-14">
          <div className="mx-auto inline-flex rounded-2xl bg-white/15 p-3">
            <Rocket size={28} />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold sm:text-4xl">
            Ready to Build Your Next Digital Experience?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Tell us about your website, web application or mobile app idea.
            Let's explore how to turn your requirements into a digital
            experience for your business.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}