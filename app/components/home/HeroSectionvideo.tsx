
"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Volume2,
  VolumeX,
  Pause,
  Play,
} from "lucide-react";

// Video file location:
// public/opv-ai-intro.mp4

const VIDEO_URL = "/opv-ai-intro.mp4";

const highlights = [
  "AI & Intelligent Automation",
  "Web, Mobile & SaaS Solutions",
  "CRM, ERP & Business Systems",
  "Digital Growth & Lead Generation",
];

export default function HeroSectionvideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  // ==========================================
  // TOGGLE VIDEO SOUND
  // ==========================================

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // ==========================================
  // PLAY / PAUSE VIDEO
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
    <section className="relative overflow-hidden border-b border-[#E5E9E3] bg-[#F8F6F0]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:py-28">

        {/* ======================================
            LEFT — HERO CONTENT
        ====================================== */}

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#075B3B]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#075B3B]">
            <Sparkles className="h-4 w-4" />
            AI-Powered Business Technology
          </div>

          <h1 className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight text-[#263C50] sm:text-5xl lg:text-6xl">
            Build Smarter.

            <span className="block text-[#075B3B]">
              Automate Better.
            </span>

            <span className="block">
              Grow Faster.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#526577] sm:text-lg">
            Empowering businesses across industries
            with AI, intelligent automation, custom
            software, SaaS, CRM and digital growth
            solutions — built for tomorrow.
          </p>

          {/* HERO BUTTONS */}

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-[#075B3B] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#06472F]"
            >
              Explore Our Solutions

              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[#075B3B]/20 bg-white px-7 py-4 text-sm font-bold text-[#075B3B] transition hover:border-[#075B3B] hover:bg-[#F0F6F1]"
            >
              Talk to Our Team

              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* BUSINESS HIGHLIGHTS */}

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-[#526577]"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#075B3B]" />

                {item}
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#075B3B] hover:underline"
          >
            Discuss Your Business Requirements

            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ======================================
            RIGHT — AUTO PLAY VIDEO
        ====================================== */}

        <div className="relative w-full">

          {/* VIDEO CONTAINER */}

          <div className="relative aspect-video overflow-hidden rounded-3xl border border-[#E5E9E3] bg-[#263C50] shadow-[0_20px_60px_rgba(38,60,80,0.12)]">

            {/* AUTOPLAY VIDEO */}

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
              className="h-full w-full object-cover"
              aria-label="OPV AI Realty Tech introduction video"
            >
              Your browser does not support HTML5 video.
            </video>

            {/* BOTTOM VIDEO CONTROLS */}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#263C50]/85 via-[#263C50]/30 to-transparent px-4 pb-4 pt-12 sm:px-6 sm:pb-6">

              <div className="flex items-end justify-between gap-3">

                {/* VIDEO BRAND LABEL */}

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#E6C783]">
                    OPV AI Realty Tech
                  </p>

                  <p className="mt-1 text-sm font-bold text-white sm:text-base">
                    The Future of Business Technology
                  </p>
                </div>

                {/* PLAY / SOUND CONTROLS */}

                <div className="flex shrink-0 items-center gap-2">

                  {/* PLAY / PAUSE */}

                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={
                      isPlaying
                        ? "Pause video"
                        : "Play video"
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
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
                        ? "Unmute video"
                        : "Mute video"
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
                  >
                    {isMuted ? (
                      <VolumeX className="h-5 w-5" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* VIDEO FOOTER */}

          <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs font-semibold text-[#647586]">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#075B3B]" />

            Technology Solutions for Every Industry
          </div>
        </div>
      </div>
    </section>
  );
}
