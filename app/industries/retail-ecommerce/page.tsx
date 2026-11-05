import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Cloud,
  CreditCard,
  Headphones,
  Layers3,
  Package,
  RefreshCw,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Target,
  Truck,
  Users,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Retail & E-commerce Technology Solutions | OPV AI Realty Tech",
  description:
    "Explore e-commerce development, online stores, retail CRM, inventory management, AI automation, digital marketing and business intelligence solutions.",
  alternates: {
    canonical: "/industries/retail-ecommerce",
  },
  openGraph: {
    title: "Retail & E-commerce Technology Solutions | OPV AI Realty Tech",
    description:
      "Transform retail and e-commerce operations with AI, software, automation and connected digital commerce solutions.",
    url: "/industries/retail-ecommerce",
    type: "website",
  },
};

const solutions = [
  {
    icon: ShoppingCart,
    title: "E-commerce Website Development",
    description:
      "Build online stores and digital commerce platforms with product catalogues, shopping experiences and customer-focused interfaces.",
  },
  {
    icon: Smartphone,
    title: "Retail Mobile Applications",
    description:
      "Create mobile shopping experiences, customer applications and digital tools for retail businesses.",
  },
  {
    icon: Bot,
    title: "AI & Intelligent Automation",
    description:
      "Explore AI shopping assistants, automated customer support, product recommendations and business workflows.",
  },
  {
    icon: Package,
    title: "Inventory & Order Management",
    description:
      "Plan systems for product records, inventory visibility, order processing and fulfilment coordination.",
  },
  {
    icon: Users,
    title: "Retail CRM & Customer Engagement",
    description:
      "Organise customer records, enquiries, purchasing interactions and customer relationship activities.",
  },
  {
    icon: Target,
    title: "Digital Marketing & Lead Generation",
    description:
      "Support online visibility, SEO, content strategy, digital campaigns and customer acquisition journeys.",
  },
  {
    icon: BarChart3,
    title: "Retail Analytics & Reporting",
    description:
      "Explore dashboards and reports for sales activity, inventory, customer behaviour and business performance.",
  },
  {
    icon: Workflow,
    title: "Retail Workflow Automation",
    description:
      "Connect suitable business processes across orders, notifications, customer service and operational activities.",
  },
];

const businessTypes = [
  {
    title: "Online Stores",
    description:
      "Digital storefronts, product catalogues, shopping journeys and e-commerce operations.",
  },
  {
    title: "Retail Store Chains",
    description:
      "Connected business systems, customer engagement and operational visibility across multiple locations.",
  },
  {
    title: "Direct-to-Consumer Brands",
    description:
      "Digital commerce experiences, customer acquisition and brand-owned online channels.",
  },
  {
    title: "Wholesale & Distribution",
    description:
      "Business applications for product catalogues, orders, customers and distribution workflows.",
  },
  {
    title: "Fashion & Lifestyle Businesses",
    description:
      "Digital product discovery, online shopping experiences and customer engagement solutions.",
  },
  {
    title: "Consumer Product Businesses",
    description:
      "Technology for product information, online sales, inventory and customer relationships.",
  },
];

const capabilities = [
  "E-commerce website development",
  "Online store design and development",
  "Product catalogue management",
  "Shopping cart and checkout experiences",
  "Payment gateway integration",
  "Inventory and order management",
  "Customer relationship management",
  "AI shopping assistants",
  "Customer support automation",
  "Retail mobile applications",
  "SEO and digital marketing",
  "Sales and inventory dashboards",
];

const benefits = [
  {
    title: "Better Online Shopping Experiences",
    description:
      "Create intuitive digital storefronts that help customers discover products and navigate the buying journey.",
  },
  {
    title: "Connected Retail Operations",
    description:
      "Coordinate relevant activities across online stores, inventory, orders and customer-facing systems.",
  },
  {
    title: "Stronger Customer Engagement",
    description:
      "Plan customer communication, service workflows and relationship management around business needs.",
  },
  {
    title: "Improved Business Visibility",
    description:
      "Use structured reporting and analytics to review sales, customer activity and operational information.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your retail model, products, customers and current technology environment.",
  },
  {
    number: "02",
    title: "Strategise",
    description:
      "Identify suitable digital commerce platforms, applications and automation opportunities.",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "Create the agreed websites, applications, integrations and business workflows.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "Connect relevant payment, inventory, customer and business systems.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Review business requirements and identify opportunities to improve the digital experience.",
  },
];

export default function RetailEcommercePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#071426]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(234,179,8,0.10),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Retail & E-commerce Technology
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transform Retail.
              <span className="block text-emerald-400">
                Accelerate Digital Commerce.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Connect online shopping, customer engagement, inventory
              operations and business intelligence with modern technology.
              OPV AI Realty Tech helps retail businesses create connected
              digital experiences and smarter business workflows.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
              >
                Discuss Your Retail Project
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
              Digital commerce. Intelligent operations. Connected customers.
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur sm:p-8">

              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
                    OPV DIGITAL COMMERCE
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-white">
                    Connected Retail Ecosystem
                  </h2>
                </div>

                <div className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                  <ShoppingBag size={28} />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <ShoppingCart className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Online Store
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Digital shopping experiences.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Package className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Inventory
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Product and stock management.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <Bot className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    AI Shopping
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Intelligent customer assistance.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#10233a] p-5">
                  <BarChart3 className="mb-4 text-emerald-400" size={26} />
                  <h3 className="font-semibold text-white">
                    Analytics
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Sales and business insights.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <div className="flex items-center gap-3">
                  <Workflow className="shrink-0 text-emerald-300" size={22} />

                  <div>
                    <p className="font-semibold text-white">
                      Connected Commerce Operations
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Technology across the customer journey.
                    </p>
                  </div>
                </div>
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
            The future of retail
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Build a More Connected Retail Business
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Modern retail combines physical and digital customer experiences.
            Businesses need suitable technology to manage products,
            customer relationships, orders, marketing and operational
            information. Connected applications and intelligent workflows
            can help bring these activities together around a consistent
            business experience.
          </p>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Our capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Retail & E-commerce Technology Solutions
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore software, AI and automation capabilities designed
              around your retail business model and digital commerce needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700 transition group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {solution.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Who we serve
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Technology for Different Retail Business Models
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Each retail model has different product, customer, sales and
            operational requirements. Technology should be designed with
            those differences in mind.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {businessTypes.map((business) => (
            <article
              key={business.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
            >
              <div className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                <ShoppingBag size={25} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {business.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {business.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CUSTOMER JOURNEY */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Connected customer journey
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From Product Discovery to Customer Relationship
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Digital commerce connects several stages of the customer
              experience. Suitable technology can help coordinate those
              stages more effectively.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                icon: Search,
                title: "Discover",
                description:
                  "Help customers explore products, services and relevant information.",
              },
              {
                number: "02",
                icon: ShoppingCart,
                title: "Purchase",
                description:
                  "Create structured shopping, checkout and order experiences.",
              },
              {
                number: "03",
                icon: Truck,
                title: "Fulfil",
                description:
                  "Coordinate orders, inventory and fulfilment-related workflows.",
              },
              {
                number: "04",
                icon: Headphones,
                title: "Engage",
                description:
                  "Support customer communication, service and ongoing relationships.",
              },
            ].map((stage) => {
              const Icon = stage.icon;

              return (
                <article
                  key={stage.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="text-sm font-bold text-emerald-400">
                    STAGE {stage.number}
                  </p>

                  <div className="mt-5 inline-flex rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {stage.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {stage.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              Technology capabilities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A Connected Digital Toolkit for Retail Businesses
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              From online storefronts to inventory applications and
              customer engagement systems, we help identify suitable
              technology capabilities for your requirements.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              Discuss your retail requirements
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

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-24">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Business outcomes
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Technology That Supports Retail Growth
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            The right digital tools can help businesses improve customer
            experiences, coordinate operations and understand business
            performance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <p className="text-sm font-bold text-emerald-600">
                OUTCOME 0{index + 1}
              </p>

              <h3 className="mt-4 text-xl font-bold">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS */}
      <section className="bg-[#071426] py-20 text-white lg:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-10">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Our approach
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From Retail Challenges to Digital Solutions
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              A structured process helps align technology decisions with
              your products, customers and retail operating model.
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

                <h3 className="mt-5 text-lg font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 sm:px-10 lg:py-24">

        <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-600 px-7 py-14 text-center text-white sm:px-14">

          <div className="mx-auto inline-flex rounded-2xl bg-white/15 p-3">
            <Rocket size={28} />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold sm:text-4xl">
            Ready to Transform Your Retail Business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-50">
            Whether you operate an online store, retail chain, consumer brand
            or distribution business, let's explore how AI, software and
            connected technology can support your next stage of growth.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-emerald-700 transition hover:bg-slate-100"
          >
            Discuss Your Retail Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}