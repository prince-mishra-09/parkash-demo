"use client";

import {
  Star,
  Clock,
  CheckCircle2,
  ExternalLink,
  Award,
  BadgeCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { BUSINESS_DETAILS } from "@/lib/business";
import AnimatedCounter from "./AnimatedCounter";

export default function TrustSection() {
  const trustStats = [
    {
      metricValue: 4.9,
      metricDecimals: 1,
      metricSuffix: " / 5",
      label: "Google Rating",
      sublabel: "Highest verified satisfaction across 2,315+ Google reviews",
      icon: Star,
      stars: 5,
    },
    {
      metricValue: 2315,
      metricDecimals: 0,
      metricSuffix: "+",
      label: "Verified Reviews",
      sublabel: "Genuine client endorsements on our official Google Maps profile",
      icon: Award,
    },
    {
      metricValue: 24,
      metricDecimals: 0,
      metricSuffix: " Hours",
      label: "Listed Availability",
      sublabel: "24/7 South Delhi dispatch, flight monitoring, and road assistance",
      icon: Clock,
    },
    {
      metricValue: 100,
      metricDecimals: 0,
      metricSuffix: "%",
      label: "Chauffeur Driven",
      sublabel: "Background-verified, route-expert drivers with commercial permits",
      icon: BadgeCheck,
    },
  ];

  const trustPillars = [
    {
      title: "Strict Sanitization & Hygiene",
      description:
        "Every vehicle undergoes cabin vacuuming, surface wipe-down, and fresh fragrance spray before dispatch.",
    },
    {
      title: "Live Airport Flight Monitoring",
      description:
        "Real-time tracking of flight status at Delhi IGI Airport T1, T2, and T3 to ensure zero-wait curbside pickups.",
    },
    {
      title: "Upfront Transparent Fares",
      description:
        "Clear, all-inclusive quotations covering tolls, driver allowances, and state taxes before you travel.",
    },
    {
      title: "Greater Kailash Operations Hub",
      description:
        "Strategically located in South Delhi to serve local NCR sectors and outstation highways with rapid response.",
    },
  ];

  return (
    <section
      id="trust"
      className="relative scroll-mt-20 overflow-hidden border-y border-[#E3DAC9] bg-[#F6F2E9] py-12 text-[#272923] sm:py-16 lg:py-20"
    >
      {/* Subtle Premium Luxury Texture Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#17352D_1px,transparent_1px)] [background-size:20px_20px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#B99A62]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-[#17352D]/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-2 inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#B99A62]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B99A62] uppercase sm:text-xs">
                VERIFIED CREDIBILITY & REPUTATION
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#17352D]">
              Trust Built on{" "}
              <span className="font-serif italic text-[#383C36]">
                Real Customer Experiences.
              </span>
            </h2>
            <p className="mt-1.5 text-xs text-[#52574F] sm:text-sm">
              A premier South Delhi travel service benchmarked by punctuality,
              meticulously maintained vehicles, and genuine customer ratings.
            </p>
          </div>

          <div>
            <a
              href={BUSINESS_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#DED5C4] bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-[#17352D] shadow-xs transition hover:border-[#B99A62] hover:bg-[#FAF7F2] hover:shadow-md"
            >
              <span>View Google Maps Listing</span>
              <ExternalLink size={12} className="text-[#B99A62]" />
            </a>
          </div>
        </div>

        {/* MOBILE VIEW CONVEYOR: Smooth Horizontal Moving Conveyor Belt for Stat Cards */}
        <div className="relative mt-7 w-full sm:hidden overflow-hidden">
          {/* Subtle Edge Fade Gradients for Luxury Look */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-6 bg-gradient-to-r from-[#F6F2E9] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-6 bg-gradient-to-l from-[#F6F2E9] to-transparent" />

          {/* Horizontal Conveyor Track with Pause on Touch/Hover */}
          <div className="flex overflow-x-auto no-scrollbar py-2 select-none">
            <div className="flex gap-3 px-2 animate-marquee-trust">
              {[...trustStats, ...trustStats].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="flex w-[240px] shrink-0 flex-col justify-between rounded-2xl border border-[#DED5C4] bg-white p-4 shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#EAE3D6] bg-[#F6F2E9] text-[#17352D]">
                          <Icon size={16} />
                        </div>

                        {stat.stars && (
                          <div className="flex gap-0.5 text-[#B99A62]">
                            {[...Array(stat.stars)].map((_, i) => (
                              <Star key={i} size={11} className="fill-[#B99A62]" />
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-3 font-serif text-2xl font-extrabold text-[#17352D]">
                        <AnimatedCounter
                          end={stat.metricValue}
                          decimals={stat.metricDecimals}
                          suffix={stat.metricSuffix}
                        />
                      </div>

                      <div className="mt-0.5 text-xs font-bold text-[#272923]">
                        {stat.label}
                      </div>

                      <p className="mt-1 text-[11px] leading-relaxed text-[#6C7168] line-clamp-2">
                        {stat.sublabel}
                      </p>
                    </div>

                    <div className="mt-3 border-t border-[#EAE3D6] pt-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#B99A62]">
                        <CheckCircle2 size={11} />
                        <span>Verified Google Record</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* DESKTOP & TABLET VIEW: Static 4-Column Luxury Grid */}
        <div className="mt-10 hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#DED5C4] bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#B99A62] hover:shadow-md hover:shadow-[#17352D]/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#EAE3D6] bg-[#F6F2E9] text-[#17352D] transition-colors group-hover:border-[#B99A62]/40 group-hover:bg-[#17352D] group-hover:text-[#FAF7F2]">
                      <Icon size={18} />
                    </div>

                    {stat.stars && (
                      <div className="flex gap-0.5 text-[#B99A62]">
                        {[...Array(stat.stars)].map((_, i) => (
                          <Star key={i} size={13} className="fill-[#B99A62]" />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 font-serif text-2xl font-extrabold text-[#17352D] sm:text-3xl">
                    <AnimatedCounter
                      end={stat.metricValue}
                      decimals={stat.metricDecimals}
                      suffix={stat.metricSuffix}
                    />
                  </div>

                  <div className="mt-0.5 text-xs font-bold text-[#272923] sm:text-sm">
                    {stat.label}
                  </div>

                  <p className="mt-1.5 text-[11px] leading-relaxed text-[#6C7168]">
                    {stat.sublabel}
                  </p>
                </div>

                <div className="mt-4 border-t border-[#EAE3D6] pt-3">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#B99A62]">
                    <CheckCircle2 size={12} />
                    <span>Verified Google Record</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compact Supporting Pillars */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-3">
          {trustPillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="rounded-xl border border-[#E3DAC9] bg-white/70 p-3.5 sm:p-4 transition-colors hover:border-[#B99A62] hover:bg-white hover:shadow-xs"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#17352D]">
                <CheckCircle2 size={14} className="shrink-0 text-[#B99A62]" />
                <span>{pillar.title}</span>
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-[#52574F]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
