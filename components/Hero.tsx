"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Star,
  Clock,
  ChevronDown,
  Plane,
  Building2,
  Compass,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { motion } from "motion/react";
import { BUSINESS_DETAILS } from "@/lib/business";
import AnimatedCounter from "./AnimatedCounter";

interface HeroProps {
  onSelectQuickService?: (serviceName: string) => void;
}

export default function Hero({ onSelectQuickService }: HeroProps) {
  const [activeTab, setActiveTab] = useState<string>("Airport Transport");

  const quickServices = [
    {
      id: "airport",
      label: "Airport Transport",
      shortLabel: "Airport",
      icon: Plane,
      sublabel: "IGI T1, T2, T3 Curbside",
    },
    {
      id: "local",
      label: "Delhi NCR Chauffeur",
      shortLabel: "Delhi NCR",
      icon: Building2,
      sublabel: "Hourly / Full Day Hire",
    },
    {
      id: "outstation",
      label: "Outstation Road Trips",
      shortLabel: "Outstation",
      icon: Compass,
      sublabel: "Agra, Jaipur, Hills & Beyond",
    },
  ];

  // 4 verified customer profile photographs for overlapping avatar group
  const customerAvatars = [
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=140",
      alt: "Verified Client - Executive Travel",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=140",
      alt: "Verified Client - Airport Chauffeur",
    },
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=140",
      alt: "Verified Client - Corporate Mobility",
    },
    {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=140",
      alt: "Verified Client - Outstation Tour",
    },
  ];

  const handleTabSelect = (serviceLabel: string) => {
    setActiveTab(serviceLabel);
    if (onSelectQuickService) {
      onSelectQuickService(serviceLabel);
    }
  };

  const handleScrollToBooking = () => {
    const el = document.getElementById("booking-enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToDestinations = () => {
    const el = document.getElementById("destinations");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="hero-viewport-screen relative flex w-full flex-col justify-between overflow-hidden bg-[#12231D] text-[#FAF7F2]"
      style={{
        height: "calc(100svh - var(--nav-height, 56px))",
        minHeight: "calc(100svh - var(--nav-height, 56px))",
      }}
    >
      {/* Cinematic Background Imagery with Visible Highway & Luxury Vehicle */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=90&w=2400"
          alt="Luxury chauffeur-driven travel on scenic highway with Parkash Tour & Travels"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] scale-100 transition-transform duration-1000"
        />

        {/* Directional Vignette: darker on left for text contrast, luminous on right for car visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#12231D]/85 via-[#12231D]/45 to-transparent sm:via-[#12231D]/40 sm:to-[#12231D]/15" />

        {/* Soft top-bottom atmospheric fade to anchor navigation and seamlessly meet Trust section */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#12231D]/40 via-transparent to-[#12231D]/75" />

        {/* Subtle warm champagne radial aura */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(185,154,98,0.12)_0%,_transparent_60%)]" />
      </div>

      {/* Floating subtle ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#B99A62]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-[#1B3C33]/50 blur-[90px]"
      />

      {/* 1. Upper / Center Content Area — Beautifully Centered in Available Space */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
        <div className="max-w-3xl space-y-2.5 sm:space-y-4 lg:space-y-3 xl:space-y-4">
          {/* Customer ratings and circular profile avatars (Minimalist & Borderless) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex flex-wrap items-center gap-2 sm:gap-3 py-0.5"
          >
            {/* Overlapping Human Profile Avatars */}
            <div className="flex -space-x-1.5 sm:-space-x-2 overflow-hidden">
              {customerAvatars.map((avatar, idx) => (
                <div
                  key={idx}
                  className="relative h-6 w-6 sm:h-7 sm:w-7 overflow-hidden rounded-full border border-white/40 shadow-sm"
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Star Rating & Review Count */}
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
              <div className="flex text-[#B99A62]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-[#B99A62]" />
                ))}
              </div>
              <span className="font-bold text-white">4.9/5</span>
              <span className="text-[#E9E1D3]/90">
                (<AnimatedCounter end={2315} suffix="+" /> Google Reviews)
              </span>
            </div>

            <span className="hidden h-3 w-[1px] bg-white/25 sm:inline-block" />

            <a
              href={BUSINESS_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View verified Google reviews"
              className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#D4BD8E] transition hover:text-white"
            >
              <span>Verified Profile</span>
              <ExternalLink size={11} className="text-[#B99A62]" />
            </a>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-serif text-[1.85rem] leading-[1.12] sm:text-5xl lg:text-[2.75rem] xl:text-[3.35rem] 2xl:text-6xl font-extrabold tracking-tight text-[#FAF7F2] drop-shadow-md"
          >
            Every Journey <br />
            <span className="gold-light-gradient-text">
              Deserves a Better Experience.
            </span>
          </motion.h1>

          {/* Supporting Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="max-w-2xl text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base font-normal leading-relaxed text-[#E9E1D3]/95 drop-shadow-sm"
          >
            Discover comfortable, reliable and thoughtfully planned travel
            experiences with{" "}
            <span className="font-semibold text-white">
              Parkash Tour & Travels Private Limited
            </span>
            . Professional chauffeur-driven car rentals across Delhi NCR and
            scenic outstation routes.
          </motion.p>

          {/* Primary and Secondary CTA Buttons — Balanced side-by-side on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex items-center gap-2 pt-0.5 sm:gap-4 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={handleScrollToBooking}
              className="flex-1 sm:flex-none justify-center group inline-flex items-center gap-1.5 sm:gap-2.5 rounded-full bg-gradient-to-r from-[#B99A62] via-[#D4BD8E] to-[#B99A62] px-3.5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold tracking-wide text-[#12231D] shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[#B99A62]/30 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Plan Journey</span>
              <span className="hidden sm:inline">Your</span>
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={handleScrollToDestinations}
              className="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/25 bg-white/[0.08] px-3 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-[#FAF7F2] backdrop-blur-md transition hover:border-[#B99A62]/60 hover:bg-white/[0.14] hover:text-[#D4BD8E] cursor-pointer whitespace-nowrap"
            >
              <Compass size={14} className="text-[#B99A62]" />
              <span>Explore</span>
              <span className="hidden sm:inline">Destinations</span>
            </button>
          </motion.div>

          {/* Verified Badges Strip — Visible only on desktop/tablet, hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden sm:flex flex-wrap items-center gap-2 pt-0.5 text-[11px] sm:text-xs text-[#E9E1D3]"
          >
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#12231D]/70 px-2.5 py-1 backdrop-blur-md">
              <Clock size={13} className="text-[#B99A62]" />
              <span>24/7 South Delhi Dispatch</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#12231D]/70 px-2.5 py-1 backdrop-blur-md">
              <ShieldCheck size={13} className="text-[#B99A62]" />
              <span>Commercial Fleet & Vetted Chauffeurs</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. Bottom Docked Service Options & Action Bar — Docked at the bottom of the screen */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-3.5 sm:px-6 lg:px-8 pb-2 sm:pb-3 lg:pb-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-4xl rounded-2xl border border-white/15 bg-[#12231D]/80 p-2 sm:p-3 shadow-2xl backdrop-blur-md"
        >
          {/* SINGLE HORIZONTAL ROW of 3 Services (Airport | Delhi NCR | Outstation) */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
            {quickServices.map((qs) => {
              const Icon = qs.icon;
              const isSelected = activeTab === qs.label;
              return (
                <button
                  key={qs.id}
                  type="button"
                  onClick={() => handleTabSelect(qs.label)}
                  className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2.5 rounded-xl p-2 sm:p-2.5 text-center sm:text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border border-[#B99A62] bg-[#B99A62]/25 text-white shadow-md"
                      : "border border-white/10 bg-white/[0.05] text-[#E9E1D3]/80 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  <div
                    className={`flex h-6 w-6 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg ${
                      isSelected
                        ? "bg-[#B99A62] text-[#12231D]"
                        : "bg-white/10 text-[#B99A62]"
                    }`}
                  >
                    <Icon size={14} className="sm:hidden" />
                    <Icon size={16} className="hidden sm:block" />
                  </div>
                  <div className="min-w-0">
                    {/* Short title on mobile, full label on desktop */}
                    <div className="text-[11px] font-bold leading-tight truncate sm:hidden">
                      {qs.shortLabel}
                    </div>
                    <div className="hidden sm:block text-xs font-bold leading-tight sm:text-xs xl:text-sm">
                      {qs.label}
                    </div>
                    {/* Subtitle hidden on mobile, shown on desktop */}
                    <div className="hidden sm:block text-[10px] text-[#E9E1D3]/70 leading-tight">
                      {qs.sublabel}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Compact Selected Service Bar */}
          <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-2 text-[11px] sm:text-xs text-[#E9E1D3]/85">
            <span className="flex items-center gap-1.5 min-w-0 truncate pr-2">
              <Sparkles size={12} className="text-[#B99A62] shrink-0" />
              <span className="hidden sm:inline text-[#E9E1D3]/75">Selected Service:</span>
              <strong className="text-white truncate">{activeTab}</strong>
              <span className="hidden sm:inline text-[#E9E1D3]/60">— Chauffeur-driven & disinfected</span>
            </span>

            <button
              type="button"
              onClick={handleScrollToBooking}
              className="inline-flex items-center gap-1 shrink-0 font-bold text-[#D4BD8E] transition hover:text-[#B99A62] cursor-pointer text-[11px] sm:text-xs"
            >
              <span>Instant Enquiry</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </motion.div>

        {/* Subtle Bottom Scroll Indicator */}
        <div className="flex w-full items-center justify-center pt-1.5 text-center">
          <a
            href="#trust"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("trust");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-1 text-[10px] tracking-widest text-[#E9E1D3]/60 uppercase transition hover:text-[#B99A62]"
          >
            <span>Scroll To Explore</span>
            <ChevronDown
              size={12}
              className="animate-bounce text-[#B99A62] transition-transform group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
