"use client";

import { useMemo, useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  CalendarDays,
  Clock3,
  BookOpen,
  ChevronRight,
} from "lucide-react";

// Note: For a client component, move metadata to a separate server page
// or remove "use client" and implement filtering in a child client component.

const categories = [
  "All",
  "Artificial Intelligence",
  "Real Estate Technology",
  "Business Automation",
  "Software Development",
  "Digital Growth",
];

const articles = [
  {
    id: 1,
    title: "How Artificial Intelligence Is Transforming Modern Businesses",
    slug: "how-ai-is-transforming-modern-businesses",
    category: "Artificial Intelligence",
    excerpt:
      "Explore how AI-powered tools and intelligent automation are changing business operations, customer experiences and decision-making.",
    date: "November 2026",
    readTime: "6 min read",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "The Role of Technology in Modern Real Estate",
    slug: "role-of-technology-in-modern-real-estate",
    category: "Real Estate Technology",
    excerpt:
      "Understand how digital platforms, property technology and online experiences are changing the real estate industry.",
    date: "November 2026",
    readTime: "5 min read",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    title: "Business Automation: A Practical Guide for Growing Companies",
    slug: "business-automation-guide-for-growing-companies",
    category: "Business Automation",
    excerpt:
      "Learn how workflow automation can help businesses organize repetitive tasks and improve operational processes.",
    date: "November 2026",
    readTime: "7 min read",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    title: "Why Custom Software Matters for Business Growth",
    slug: "why-custom-software-matters-for-business-growth",
    category: "Software Development",
    excerpt:
      "Discover how software designed around specific business requirements can support digital operations.",
    date: "November 2026",
    readTime: "6 min read",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    title: "Building a Strong Digital Presence for Your Business",
    slug: "building-a-strong-digital-presence",
    category: "Digital Growth",
    excerpt:
      "Explore the role of websites, search visibility and digital experiences in building an online presence.",
    date: "November 2026",
    readTime: "5 min read",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    title: "AI-Powered Customer Engagement: What Businesses Should Know",
    slug: "ai-powered-customer-engagement",
    category: "Artificial Intelligence",
    excerpt:
      "A look at how AI-assisted communication can support customer interactions and business workflows.",
    date: "November 2026",
    readTime: "6 min read",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" || article.category === activeCategory;

      const matchesSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const featuredArticle = articles.find((article) => article.featured);

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#033505] px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#E7B30F]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E7B30F]/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F4D545]">
            <BookOpen size={15} />
            OPV Insights & Articles
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Ideas, Insights &
            <span className="block text-[#F4D545]">
              Technology Perspectives
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Explore articles on artificial intelligence, software development,
            business automation, real estate technology and digital growth.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {featuredArticle && (
        <section className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-[#E7B30F]" />
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#265921]">
                Featured Article
              </p>
            </div>

            <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-[#F7F9F5] lg:grid-cols-2">
              <div className="min-h-[260px] overflow-hidden sm:min-h-[380px]">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-full min-h-[260px] w-full object-cover sm:min-h-[380px]"
                />
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-12">
                <span className="w-fit rounded-full bg-[#033505]/10 px-4 py-2 text-xs font-bold text-[#265921]">
                  {featuredArticle.category}
                </span>

                <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
                  {featuredArticle.title}
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  {featuredArticle.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock3 size={16} />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#033505] px-6 py-3.5 font-bold text-white transition hover:bg-[#265921]"
                >
                  Read Article <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* BLOG LISTING */}
      <section className="bg-[#F7F9F5] px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#265921]">
                Knowledge Hub
              </span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Latest Articles
              </h2>
              <p className="mt-3 text-slate-600">
                Insights and ideas for a technology-driven future.
              </p>
            </div>

            <div className="relative w-full lg:max-w-sm">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm outline-none transition focus:border-[#265921]"
              />
            </div>
          </div>

          {/* CATEGORY FILTER */}
          <div className="mt-9 flex gap-3 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-5 py-3 text-sm font-bold transition ${
                  activeCategory === category
                    ? "bg-[#033505] text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#265921] hover:text-[#265921]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* ARTICLES GRID */}
          {filteredArticles.length > 0 ? (
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link
                    href={`/blog/${article.slug}`}
                    className="block overflow-hidden"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </Link>

                  <div className="p-6">
                    <span className="rounded-full bg-[#033505]/10 px-3 py-1.5 text-xs font-bold text-[#265921]">
                      {article.category}
                    </span>

                    <h3 className="mt-5 text-xl font-extrabold leading-snug transition group-hover:text-[#265921]">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                      {article.excerpt}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock3 size={14} />
                        {article.readTime}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${article.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#265921] transition group-hover:gap-3"
                    >
                      Read More <ChevronRight size={17} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
              <BookOpen className="mx-auto text-slate-400" size={35} />
              <h3 className="mt-4 text-xl font-bold">No articles found</h3>
              <p className="mt-2 text-sm text-slate-500">
                Try another search term or select a different category.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-5 font-bold text-[#265921] underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#033505] px-7 py-14 text-center text-white sm:px-14 sm:py-20">
          <h2 className="mx-auto max-w-3xl text-3xl font-black sm:text-5xl">
            Stay Connected With Technology
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Discover how AI, software and digital innovation can help shape
            your business journey.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#E7B30F] px-8 py-4 font-bold text-[#111111] transition hover:bg-[#F4D545]"
          >
            Connect With OPV <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}