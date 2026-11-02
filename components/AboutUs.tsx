"use client";

import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  Clock,
  Lock,
  UserCheck,
  Compass,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";

export default function AboutUs() {
  // 6 Scannable Brand Pillars representing Luxury, Comfort, Safety, Punctuality, Privacy, Professional Chauffeurs
  const pillars = [
    {
      icon: Sparkles,
      title: "Quiet Luxury",
      micro: "Pristine, premium fleet",
    },
    {
      icon: Compass,
      title: "Ergonomic Comfort",
      micro: "Supple leather & climate care",
    },
    {
      icon: ShieldCheck,
      title: "Safety & Hygiene",
      micro: "Cabin sanitized pre-departure",
    },
    {
      icon: Clock,
      title: "Punctuality",
      micro: "On-time arrival guarantee",
    },
    {
      icon: Lock,
      title: "Discreet Privacy",
      micro: "Confidentiality assured",
    },
    {
      icon: UserCheck,
      title: "Master Chauffeurs",
      micro: "Background-vetted experts",
    },
  ];

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#FAF7F2] py-16 text-[#272923] lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Visual Storytelling Composition */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Primary Framed Image */}
            <div className="relative h-[380px] w-full overflow-hidden rounded-3xl border border-[#DED5C4] shadow-xl sm:h-[460px]">
              <Image
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=85&w=1200"
                alt="Executive chauffeur service and luxury vehicle interior with Parkash Tour & Travels"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12231D]/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping Location Desk Card */}
            <div className="absolute -bottom-5 -right-2 max-w-[260px] rounded-2xl border border-[#DED5C4] bg-white p-4 shadow-xl sm:-bottom-6 sm:-right-6 sm:max-w-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2E9] text-[#17352D]">
                  <MapPin size={20} className="text-[#B99A62]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#17352D]">
                    Greater Kailash Desk
                  </div>
                  <div className="text-[10px] text-[#6C7168]">
                    Sector 4, New Delhi · 24/7 Operations
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative gold badge */}
            <div className="absolute -left-2 -top-2 rounded-xl border border-[#B99A62]/40 bg-[#17352D] px-3.5 py-1.5 font-serif text-[11px] font-bold tracking-wider text-[#FAF7F2] shadow-lg">
              SOUTH DELHI HERITAGE
            </div>
          </motion.div>

          {/* Right Column: Editorial Philosophy & 6 Visual Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#B99A62]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B99A62] uppercase sm:text-xs">
                ABOUT PARKASH TOUR & TRAVELS
              </span>
            </div>

            <h2 className="font-serif text-3xl font-extrabold leading-tight text-[#17352D] sm:text-4xl">
              Elevating the Standard of{" "}
              <span className="font-serif italic text-[#383C36]">
                Private Road Travel.
              </span>
            </h2>

            <p className="text-sm leading-relaxed text-[#52574F]">
              At <strong className="text-[#17352D]">Parkash Tour & Travels Private Limited</strong>,
              we design private road travel with the refinement, calm, and precision of a
              luxury private concierge. From executive transfers to bespoke long-distance tours,
              every kilometer is curated for your comfort.
            </p>

            {/* 6 Visual Scannable Luxury Pillars — Clean 3x2 Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-3">
              {pillars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-start rounded-2xl border border-[#E3DAC9] bg-white p-3.5 shadow-2xs transition-all hover:border-[#B99A62] hover:shadow-md"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F6F2E9] text-[#17352D] transition-colors group-hover:bg-[#17352D] group-hover:text-white">
                      <Icon size={18} className="text-[#B99A62]" />
                    </div>
                    <div className="mt-2.5 text-xs font-bold text-[#17352D]">
                      {item.title}
                    </div>
                    <div className="mt-0.5 text-[10px] text-[#6C7168]">
                      {item.micro}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Scannable Verified Note & Action CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#EAE3D6] pt-5">
              <div className="flex items-center gap-1.5 text-xs text-[#52574F]">
                <CheckCircle2 size={14} className="text-[#B99A62]" />
                <span>Over 2,315 verified reviews on Google Maps</span>
              </div>

              <a
                href="#services"
                className="group inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#17352D] uppercase transition hover:text-[#B99A62]"
              >
                <span>Explore Services</span>
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1 text-[#B99A62]"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
