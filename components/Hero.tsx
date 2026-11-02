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
  MessageCircle,
  MapPin,
  Route,
  Car,
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
      icon: MapPin,
      sublabel: "Hourly / Full Day Hire",
    },
    {
      id: "outstation",
      label: "Outstation Road Trips",
      shortLabel: "Outstation",
      icon: Route,
      sublabel: "Agra, Jaipur, Hills & Beyond",
    },
  ];

  // 4 verified customer profile photographs for desktop overlapping avatar group
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
      if (serviceLabel.includes("Airport")) {
        onSelectQuickService("Airport Transfer (IGI T1/T2/T3)");
      } else if (serviceLabel.includes("Delhi") || serviceLabel.includes("NCR")) {
        onSelectQuickService("Local Delhi NCR Chauffeur");
      } else if (serviceLabel.includes("Outstation")) {
        onSelectQuickService("Outstation Round Trip");
      } else {
        onSelectQuickService(serviceLabel);
      }
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
      {/* 1. Cinematic Background Imagery — Mobile Centered Executive Sedan & Desktop Highway Landscape */}
      <div className="absolute inset-0 z-0">
        {/* Mobile: Centered Luxury Sedan on Scenic Tree-Lined Avenue */}
        <div className="sm:hidden absolute inset-0">
          <Image
            src="/hero-mobile-car.jpg"
            alt="Luxury chauffeur-driven executive sedan on scenic tree-lined road"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_55%]"
          />
        </div>

        {/* Desktop / Tablet: Scenic Highway Wide Landscape */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=90&w=2400"
            alt="Luxury chauffeur-driven travel on scenic highway with Parkash Tour & Travels"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
        </div>

        {/* Directional Vignettes: Rich contrast at top for text, clear view in center for car */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#12231D]/90 via-[#12231D]/30 to-[#12231D]/85 sm:bg-gradient-to-r sm:from-[#12231D]/85 sm:via-[#12231D]/45 sm:to-transparent" />

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

      {/* 2. Upper Content Area — Matches User Mockup Exactly */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-start px-4 pt-4 sm:px-6 lg:px-8 sm:justify-center sm:pt-2 sm:pb-3">
        <div className="max-w-3xl space-y-2 sm:space-y-4 lg:space-y-3 xl:space-y-4">
          {/* Customer Rating & Stars — Single line editorial proof matching mockup */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 pt-0.5"
          >
            {/* Desktop Overlapping Avatars (Preserved for desktop screens) */}
            <div className="hidden sm:flex -space-x-1.5 overflow-hidden">
              {customerAvatars.map((avatar, idx) => (
                <div
                  key={idx}
                  className="relative h-7 w-7 overflow-hidden rounded-full border border-white/50 shadow-sm"
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

            {/* Five Gold Stars */}
            <div className="flex text-[#B99A62]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-[#B99A62]" />
              ))}
            </div>

            {/* Rating text */}
            <div className="text-[11px] sm:text-xs font-semibold text-[#D4BD8E]">
              <span className="font-bold text-white">4.9/5</span>
              <span className="text-[#FAF7F2]/90"> · 2,315+ Google Reviews</span>
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

          {/* Main Headline — Exact 3-line cadence from mockup */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-serif text-[1.85rem] leading-[1.14] sm:text-5xl lg:text-[2.75rem] xl:text-[3.35rem] 2xl:text-6xl font-extrabold tracking-tight text-[#FAF7F2] drop-shadow-md"
          >
            Every Journey <br />
            Deserves a Better <br />
            <span className="gold-light-gradient-text">
              Experience.
            </span>
          </motion.h1>

          {/* Supporting Description — 2 short lines on mobile matching mockup */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="max-w-xs sm:max-w-2xl text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base font-normal leading-relaxed text-[#FAF7F2]/90 drop-shadow-sm"
          >
            <span className="sm:hidden">
              Premium chauffeur-driven travel <br />
              across Delhi NCR and beyond.
            </span>
            <span className="hidden sm:inline">
              Discover comfortable, reliable and thoughtfully planned travel experiences with{" "}
              <strong className="font-semibold text-white">
                Parkash Tour & Travels Private Limited
              </strong>
              . Professional chauffeur-driven car rentals across Delhi NCR and scenic outstation routes.
            </span>
          </motion.p>

          {/* Dual Action Buttons — Plan Journey & Explore */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex items-center gap-2 pt-1 sm:gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA: Plan Journey -> */}
            <button
              type="button"
              onClick={handleScrollToBooking}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-[#B99A62] via-[#D4BD8E] to-[#B99A62] px-4 py-2 sm:px-7 sm:py-3 text-xs sm:text-sm font-bold tracking-wide text-[#12231D] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[#B99A62]/30 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Plan Journey</span>
              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            {/* Secondary CTA: Explore Destinations */}
            <button
              type="button"
              onClick={handleScrollToDestinations}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-[#FAF7F2] backdrop-blur-md transition hover:border-[#B99A62]/60 hover:bg-white/[0.16] hover:text-[#D4BD8E] active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Explore</span>
            </button>

            {/* WhatsApp Quick Dispatch (Desktop/Tablet) */}
            <a
              href={`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                "Hello Parkash Tour & Travels, I would like to inquire about booking a chauffeur-driven car."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#25D366]/40 bg-[#17352D]/85 px-4 py-2.5 text-xs font-semibold text-[#FAF7F2] backdrop-blur-md transition hover:border-[#25D366] hover:bg-[#17352D] hover:text-white"
            >
              <MessageCircle size={14} className="text-[#25D366]" />
              <span>WhatsApp Dispatch</span>
            </a>
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

      {/* 3. Subtle Center Scroll Indicator — Placed below the vehicle, above the bottom card */}
      <div className="relative z-10 w-full flex items-center justify-center pt-2 pb-1 text-center">
        <a
          href="#trust"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("trust");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="group inline-flex flex-col items-center gap-0.5 text-[10px] tracking-widest text-[#FAF7F2]/60 uppercase transition hover:text-[#B99A62]"
        >
          <span>Scroll To Explore</span>
          <ChevronDown
            size={12}
            className="animate-bounce text-[#B99A62] transition-transform group-hover:translate-y-0.5"
          />
        </a>
      </div>

      {/* 4. "Choose your journey" Bottom Card / Sheet — Exact Mockup Structure */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8 pb-2 sm:pb-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-4xl mx-auto rounded-t-3xl sm:rounded-2xl border-t sm:border border-white/15 bg-[#12231D]/90 p-3.5 sm:p-4 shadow-2xl backdrop-blur-md"
        >
          {/* Card Section Title */}
          <div className="font-serif text-base sm:text-lg font-bold text-[#FAF7F2] tracking-tight pb-2.5 sm:pb-3">
            Choose your journey
          </div>

          {/* 3 Service Category Cards: Airport, Delhi NCR, Outstation */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {quickServices.map((qs) => {
              const Icon = qs.icon;
              const isSelected = activeTab === qs.label;
              return (
                <button
                  key={qs.id}
                  type="button"
                  onClick={() => handleTabSelect(qs.label)}
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-xl py-2.5 px-1.5 sm:py-3.5 sm:px-2.5 text-center transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#D4B37F] text-[#12231D] shadow-md font-bold"
                      : "border border-white/15 bg-white/[0.06] text-[#FAF7F2] hover:bg-white/[0.1] font-semibold"
                  }`}
                >
                  <Icon
                    size={18}
                    className={isSelected ? "text-[#12231D]" : "text-[#B99A62]"}
                  />
                  <span className="text-[11px] sm:text-xs xl:text-sm leading-tight truncate w-full">
                    {qs.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Service Strip & Instant Enquiry Action */}
          <div className="mt-2.5 flex items-center justify-between rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-xs text-[#FAF7F2]">
            <div className="flex items-center gap-2 min-w-0 truncate pr-2">
              <Car size={15} className="text-[#D4BD8E] shrink-0" />
              <strong className="text-white truncate font-medium">{activeTab}</strong>
            </div>

            <button
              type="button"
              onClick={handleScrollToBooking}
              className="inline-flex items-center gap-1 shrink-0 font-bold text-[#D4BD8E] hover:text-white transition active:scale-95 cursor-pointer text-xs"
              aria-label={`Instant fare enquiry for ${activeTab}`}
            >
              <span>Instant Enquiry</span>
              <ArrowRight size={11} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
