"use client";

import Image from "next/image";
import {
  Clock,
  ShieldCheck,
  Sparkles,
  Receipt,
  Headphones,
  Compass,
} from "lucide-react";
import { motion } from "motion/react";

export default function WhyChooseUs() {
  const differentiators = [
    {
      id: "punctuality",
      title: "Guaranteed Punctuality",
      subtitle: "Live Flight & Highway Monitoring",
      description:
        "Chauffeurs position at your pickup address 15 minutes before scheduled departure. Live flight tracking ensures zero waiting at Delhi Airport T1, T2 & T3.",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=85&w=800",
      imageAlt: "Airport terminal and executive flight tracking",
      icon: Clock,
      metric: "15 Min",
      metricLabel: "Pre-Arrival Buffer",
    },
    {
      id: "chauffeurs",
      title: "Vetted Professional Chauffeurs",
      subtitle: "Courteous, Verified & Route-Smart",
      description:
        "Experienced chauffeurs trained in highway discipline, defensive driving, and passenger discretion. Polite, uniformed, and respectful of your schedule.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=85&w=800",
      imageAlt: "Chauffeur driving luxury vehicle with utmost care",
      icon: ShieldCheck,
      metric: "100%",
      metricLabel: "Police & Background Vetted",
    },
    {
      id: "hygiene",
      title: "Pristine Vehicle Hygiene",
      subtitle: "Cabin Vacuumed & Air Filter Sanitized",
      description:
        "Every vehicle departs our Greater Kailash garage freshly washed, vacuumed, and fragrant. Complete with air-purified interiors and climate control.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=85&w=800",
      imageAlt: "Luxury vehicle leather interior and clean cabin",
      icon: Sparkles,
      metric: "Clean",
      metricLabel: "Pre-Departure Checklist",
    },
    {
      id: "pricing",
      title: "Transparent & Upfront Fares",
      subtitle: "No Hidden Surcharges or Surprises",
      description:
        "Fixed rates with explicit toll estimates, interstate taxes, and driver night allowances stated before booking confirmation.",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=85&w=800",
      imageAlt: "Transparent travel fare quotation and planning",
      icon: Receipt,
      metric: "0",
      metricLabel: "Hidden Fees",
    },
    {
      id: "support",
      title: "24/7 South Delhi Operations Hub",
      subtitle: "Greater Kailash Concierge Desk",
      description:
        "Round-the-clock telephone and WhatsApp response for early morning flights, late-night dispatch changes, and multi-day itinerary updates.",
      image:
        "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=85&w=800",
      imageAlt: "24/7 travel desk and operations hub in South Delhi",
      icon: Headphones,
      metric: "24/7",
      metricLabel: "Live Chauffeur Dispatch",
    },
    {
      id: "journeys",
      title: "Curated Road Journeys",
      subtitle: "Delhi to Agra, Jaipur, Hills & Beyond",
      description:
        "Carefully planned route stops, verified highway restaurants, and smooth expressway cruising for leisure families and corporate delegations.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=85&w=800",
      imageAlt: "Scenic highway road trip and travel adventures",
      icon: Compass,
      metric: "Pan-India",
      metricLabel: "All-India Tourist Permit",
    },
  ];

  // Distinct subtle organic wavy and asymmetrical curves for editorial magazine silhouette
  const organicWavePaths = [
    "M0,22 C140,42 320,4 500,24 L500,40 L0,40 Z",
    "M0,28 C160,8 340,44 500,16 L500,40 L0,40 Z",
    "M0,18 C120,38 250,8 380,32 C440,40 480,24 500,18 L500,40 L0,40 Z",
  ];

  return (
    <section
      id="why-us"
      className="relative scroll-mt-20 border-t border-[#B99A62]/30 bg-[#142B24] py-16 text-[#FAF7F2] lg:py-24"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-10 h-96 w-96 rounded-full bg-[#B99A62]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-[#1B3C33]/60 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="mb-2.5 inline-flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#B99A62]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#D4BD8E] uppercase sm:text-xs">
              THE PARKASH COMMITMENT
            </span>
          </div>

          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#FAF7F2] sm:text-4xl lg:text-5xl">
            Why Discerning Travelers <br />
            <span className="gold-light-gradient-text">
              Choose Parkash.
            </span>
          </h2>

          <p className="mt-3 text-xs leading-relaxed text-[#E9E1D3]/80 sm:text-sm">
            From our Greater Kailash headquarters, we hold our service to an
            unyielding standard of punctuality, immaculate hygiene, and
            respectful chauffeur hospitality.
          </p>
        </div>

        {/* 6 Rich Photographic Cards Grid with Organic Asymmetrical Wavy Image Edges */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            const wavePath = organicWavePaths[index % organicWavePaths.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#B99A62]/20 bg-[#1B3C33] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B99A62] hover:bg-[#1E4238] hover:shadow-2xl hover:shadow-[#12231D]/60"
              >
                {/* Pure Photographic Header with Organic Asymmetrical Wavy Silhouette — NO Gradient Overlay */}
                <div className="relative h-48 w-full overflow-hidden bg-[#12231D]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Organic Asymmetrical Wavy Edge Cut (No gradients, pure photograph with elegant curved edge) */}
                  <div className="pointer-events-none absolute -bottom-[1px] left-0 right-0 z-10 w-full overflow-hidden leading-none text-[#1B3C33]">
                    <svg
                      viewBox="0 0 500 40"
                      preserveAspectRatio="none"
                      className="h-6 w-full fill-current transition-transform duration-500 group-hover:scale-y-115"
                    >
                      <path d={wavePath} />
                    </svg>
                  </div>

                  {/* Floating Icon & Metric Badges */}
                  <div className="absolute left-3.5 top-3.5 z-20 flex h-9 w-9 items-center justify-center rounded-xl border border-white/25 bg-[#12231D]/80 text-[#D4BD8E] shadow-md backdrop-blur-md transition group-hover:border-[#B99A62] group-hover:bg-[#B99A62] group-hover:text-[#12231D]">
                    <Icon size={17} />
                  </div>

                  <div className="absolute right-3.5 top-3.5 z-20 rounded-xl border border-[#B99A62]/40 bg-[#12231D]/85 px-3 py-1 text-right shadow-md backdrop-blur-md">
                    <div className="font-serif text-sm font-bold text-[#D4BD8E]">
                      {item.metric}
                    </div>
                    <div className="text-[9px] text-[#E9E1D3]/80">
                      {item.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white transition group-hover:text-[#D4BD8E]">
                      {item.title}
                    </h3>

                    <div className="mt-1 text-xs font-semibold text-[#D4BD8E]">
                      {item.subtitle}
                    </div>

                    <p className="mt-2.5 text-xs leading-relaxed text-[#E9E1D3]/80">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-[#D4BD8E] uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B99A62]" />
                      <span>Verified Executive Standard</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
