
"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Globe2,
  Layers3,
  MessageSquareText,
  Pause,
  Play,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Volume2,
  VolumeX,
  Workflow,
} from "lucide-react";

// ==========================================
// VIDEO CONFIGURATION
// ==========================================

// File path: public/opv-ai-intro.mp4
const VIDEO_URL = "/opv-ai-intro.mp4";

// ==========================================
// BUSINESS CAPABILITIES
// ==========================================

const capabilities = [
  {
    icon: Bot,
    title: "AI Development",
    description:
      "AI agents, generative AI, chatbots and enterprise AI solutions",
  },
  {
    icon: Code2,
    title: "Web, Mobile & SaaS",
    description:
      "Custom websites, mobile applications and scalable SaaS products",
  },
  {
    icon: Database,
    title: "CRM & ERP",
    description:
      "Custom CRM, ERP, lead management and business intelligence",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Workflow automation, WhatsApp automation and AI integrations",
  },
];

// ==========================================
// SERVICE TAGS
// ==========================================

const serviceTags = [
  "AI Development",
  "AI Agents",
  "Workflow Automation",
  "Web Development",
  "Mobile Apps",
  "SaaS",
  "CRM & ERP",
  "SEO & AEO",
  "Digital Marketing",
  "Lead Generation",
];

// ==========================================
// TECHNOLOGY STRIP
// ==========================================

const technologyStrip = [
  { icon: Code2, label: "SOFTWARE" },
  { icon: Smartphone, label: "MOBILE APPS" },
  { icon: Sparkles, label: "ARTIFICIAL INTELLIGENCE" },
  { icon: Cloud, label: "CLOUD & SAAS" },
  { icon: Database, label: "CRM & ERP" },
  { icon: MessageSquareText, label: "AI CHATBOTS" },
  { icon: Layers3, label: "AUTOMATION" },
];

// ==========================================
// HERO SECTION
// ==========================================

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // ==========================================
  // VIDEO SOUND CONTROL
  // ==========================================

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // ==========================================
  // VIDEO PLAY / PAUSE CONTROL
  // ==========================================

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Video playback failed:", error);
        setIsPlaying(false);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[#F8F6F0] text-[#263C50]"
    >
      {/* ======================================
          SUBTLE CORPORATE BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#075B3B]/[0.035] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C6A052]/[0.055] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,91,59,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(7,91,59,.035) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      {/* ======================================
          MAIN HERO
      ====================================== */}

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 lg:min-h-[720px] lg:grid-cols-[1.03fr_0.97fr] lg:gap-14 lg:px-12 lg:py-24">

        {/* ======================================
            LEFT — CORPORATE CONTENT
        ====================================== */}

        <div className="relative z-10 max-w-2xl">

          {/* EYEBROW */}

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#075B3B] opacity-20" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#075B3B]" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#075B3B] sm:text-xs">
              AI · Technology · Business Growth
            </span>
          </div>

          {/* PRIMARY HEADING */}

          <h1
            id="hero-heading"
            className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#263C50] sm:text-5xl lg:text-[58px] xl:text-[64px]"
          >
            Build Smarter.

            <span className="mt-2 block text-[#075B3B]">
              Automate Better.
            </span>

            <span className="mt-2 block">
              Grow Faster.
            </span>
          </h1>

          {/* SEO POSITIONING */}

          <h2 className="mt-7 max-w-xl text-base font-bold leading-7 text-[#075B3B] sm:text-lg">
            AI Development, Intelligent Automation &amp;
            Business Technology Solutions in Hyderabad
          </h2>

          {/* BUSINESS DESCRIPTION */}

          <p className="mt-4 max-w-xl text-sm leading-8 text-[#526577] sm:text-base">
            OPV AI Realty Tech is a Hyderabad-based
            business technology company offering AI
            development, AI agents, chatbot development,
            workflow automation, website and mobile app
            development, SaaS, CRM, ERP and digital
            marketing solutions for businesses across India.
          </p>

          {/* CTA BUTTONS */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#solutions"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(7,91,59,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#06472F]"
            >
              Explore Our Solutions

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:border-[#075B3B]/40 hover:bg-[#F0F6F1]"
            >
              Build With OPV

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* SERVICE TAGS */}

          <div className="mt-9">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#647586]">
              Our Technology Capabilities
            </p>

            <div className="flex flex-wrap gap-2">
              {serviceTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#E3E5DE] bg-white px-3 py-1.5 text-[11px] font-medium text-[#526577] transition hover:border-[#075B3B]/30 hover:text-[#075B3B]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* TRUST STATEMENT */}

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#E3E5DE] pt-6">
            <div className="flex items-center gap-2 text-xs text-[#526577]">
              <Globe2 className="h-4 w-4 shrink-0 text-[#075B3B]" />
              Serving Hyderabad &amp; businesses across India
            </div>

            <div className="flex items-center gap-2 text-xs text-[#526577]">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[#075B3B]" />
              Business-first technology solutions
            </div>
          </div>
        </div>

        {/* ======================================
            RIGHT — VIDEO + ECOSYSTEM
        ====================================== */}

        <div className="relative mx-auto w-full max-w-[620px]">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-8 rounded-full bg-[#075B3B]/[0.045] blur-[100px]"
          />

          {/* MAIN ECOSYSTEM PANEL */}

          <div className="relative overflow-hidden rounded-[28px] border border-[#E4E7DF] bg-white p-4 shadow-[0_25px_80px_rgba(38,60,80,0.10)] sm:p-5">

            {/* PANEL HEADER */}

            <div className="flex items-center justify-between gap-3 border-b border-[#E8EAE5] pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#075B3B]/10 bg-[#F0F6F1]">
                  <BrainCircuit className="h-6 w-6 text-[#075B3B]" />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#263C50]">
                    OPV Business Ecosystem
                  </p>

                  <p className="mt-1 text-[10px] text-[#647586]">
                    Intelligent, connected technology solutions
                  </p>
                </div>
              </div>

              <div className="shrink-0 rounded-full border border-[#075B3B]/15 bg-[#F0F6F1] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#075B3B]">
                AI Powered
              </div>
            </div>

            {/* ==================================
                AUTOPLAY VIDEO
            ================================== */}

            <div className="relative mt-5 aspect-video overflow-hidden rounded-2xl bg-[#263C50]">

              {!videoError ? (
                <video
                  ref={videoRef}
                  src={VIDEO_URL}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onVolumeChange={(event) =>
                    setIsMuted(event.currentTarget.muted)
                  }
                  onError={() => setVideoError(true)}
                  aria-label="OPV AI Realty Tech business technology introduction video"
                  className="h-full w-full object-cover"
                >
                  Your browser does not support HTML5 video.
                </video>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 bg-[#F0F6F1] px-6 text-center">
                  <BrainCircuit className="h-10 w-10 text-[#075B3B]" />

                  <p className="text-lg font-extrabold text-[#263C50]">
                    The Future of Business Technology
                  </p>

                  <p className="text-xs text-[#526577]">
                    AI · Software · SaaS · Automation
                  </p>
                </div>
              )}

              {/* VIDEO CONTROLS */}

              {!videoError && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#263C50]/90 via-[#263C50]/35 to-transparent px-3 pb-3 pt-12 sm:px-5 sm:pb-4">

                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#E6C783]">
                        OPV AI Realty Tech
                      </p>

                      <p className="mt-1 text-xs font-bold text-white sm:text-sm">
                        The Future of Business Technology
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">

                      {/* PLAY / PAUSE */}

                      <button
                        type="button"
                        onClick={togglePlay}
                        aria-label={
                          isPlaying
                            ? "Pause introduction video"
                            : "Play introduction video"
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4 fill-current" />
                        ) : (
                          <Play className="h-4 w-4 fill-current" />
                        )}
                      </button>

                      {/* MUTE / UNMUTE */}

                      <button
                        type="button"
                        onClick={toggleMute}
                        aria-label={
                          isMuted
                            ? "Unmute introduction video"
                            : "Mute introduction video"
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
                      >
                        {isMuted ? (
                          <VolumeX className="h-4 w-4" />
                        ) : (
                          <Volume2 className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* VIDEO CAPTION */}

            <div className="mt-3 flex items-center gap-2 px-1 text-[10px] font-medium text-[#647586]">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#075B3B]" />
              Discover how technology connects business possibilities
            </div>

            {/* ==================================
                CAPABILITY CARDS
            ================================== */}

            <div className="mt-5 grid grid-cols-2 gap-3">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-[#E5E9E3] bg-[#F8F6F0]/60 p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-[#075B3B]/25 hover:bg-white hover:shadow-sm sm:p-4"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#075B3B] shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-xs font-bold text-[#263C50] sm:text-sm">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-5 text-[#647586]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* PANEL FOOTER */}

            <div className="mt-4 flex items-center justify-between rounded-xl border border-[#E5E9E3] bg-[#F8F6F0] px-4 py-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#075B3B]" />

                <span className="text-[10px] font-semibold text-[#526577]">
                  Connected Business Solutions
                </span>
              </div>

              <ArrowUpRight className="h-4 w-4 text-[#075B3B]" />
            </div>
          </div>

          {/* FLOATING CLOUD CARD */}

          <div className="absolute -right-3 top-24 hidden items-center gap-3 rounded-xl border border-[#E5E9E3] bg-white/95 p-3 shadow-lg backdrop-blur-xl sm:flex lg:-right-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F0F6F1]">
              <Cloud className="h-5 w-5 text-[#075B3B]" />
            </div>

            <div>
              <p className="text-xs font-bold text-[#263C50]">
                Cloud &amp; SaaS
              </p>

              <p className="text-[9px] text-[#647586]">
                Built to scale
              </p>
            </div>
          </div>

          {/* FLOATING GROWTH CARD */}

          <div className="absolute -bottom-4 -left-3 hidden items-center gap-3 rounded-xl border border-[#E5E9E3] bg-white/95 p-3 shadow-lg backdrop-blur-xl sm:flex lg:-left-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C6A052]/[0.12]">
              <BarChart3 className="h-5 w-5 text-[#98732F]" />
            </div>

            <div>
              <p className="text-xs font-bold text-[#263C50]">
                Digital Growth
              </p>

              <p className="text-[9px] text-[#647586]">
                Strategy to scale
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================
          BOTTOM TECHNOLOGY STRIP
      ====================================== */}

      <div className="relative border-t border-[#E8EAE5] bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-7 gap-y-4 px-5 py-7 sm:gap-x-10 lg:px-12">
          {technologyStrip.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center gap-2 text-[9px] font-bold tracking-[0.12em] text-[#647586] transition hover:text-[#075B3B] sm:text-[10px]"
              >
                <Icon className="h-4 w-4 text-[#075B3B]" />
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
