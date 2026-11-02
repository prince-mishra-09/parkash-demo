"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  ArrowRight,
  Info,
} from "lucide-react";
import { DESTINATIONS } from "@/lib/business";

interface DestinationsSectionProps {
  onSelectDestination?: (destinationName: string) => void;
}

export default function DestinationsSection({
  onSelectDestination,
}: DestinationsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Destinations" },
    { id: "heritage", label: "Royal Heritage & Cities" },
    { id: "hills", label: "Himalayan Hill Stations" },
    { id: "spiritual", label: "Spiritual Escapes" },
  ];

  const filteredDestinations =
    selectedFilter === "all"
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.category === selectedFilter);

  const handleDestinationPlan = (destName: string) => {
    if (onSelectDestination) {
      onSelectDestination(destName);
    }
    const el = document.getElementById("booking-enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="destinations"
      className="relative scroll-mt-20 overflow-hidden bg-[#FAF7F2] py-20 text-[#272923] lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Category Tabs */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#B99A62]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B99A62] uppercase sm:text-xs">
                CURATED OUTSTATION JOURNEYS
              </span>
            </div>

            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#17352D] sm:text-4xl lg:text-5xl">
              Explore Destinations <br />
              <span className="font-serif italic text-[#383C36]">
                from New Delhi.
              </span>
            </h2>

            <p className="mt-3 text-sm text-[#52574F] sm:text-base">
              Immerse yourself in heritage palaces, sacred rivers, and mist-clad
              mountain ridges with the ease of a private chauffeur at your side.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                  selectedFilter === tab.id
                    ? "bg-[#17352D] text-[#FAF7F2] shadow-sm"
                    : "border border-[#DED5C4] bg-white text-[#52574F] hover:border-[#B99A62] hover:text-[#17352D]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Discovery Grid — Pure White Cards with Soft Linen Detailing */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#DED5C4] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B99A62] hover:shadow-xl hover:shadow-[#17352D]/8"
            >
              {/* Image & Badges */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12231D]/50 via-transparent to-transparent" />

                {/* Top Category Badge */}
                <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#17352D]/85 px-3 py-1 text-[10px] font-bold tracking-wider text-[#FAF7F2] backdrop-blur-md">
                  {dest.categoryLabel}
                </div>

                {/* Route Distance / Time Pill */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="flex items-center gap-1 rounded-md bg-[#12231D]/80 px-2.5 py-1 font-semibold backdrop-blur-md">
                    <MapPin size={12} className="text-[#B99A62]" />
                    {dest.distanceFromDelhi}
                  </span>
                  <span className="flex items-center gap-1 rounded-md bg-[#12231D]/80 px-2.5 py-1 font-semibold backdrop-blur-md">
                    <Clock size={12} className="text-[#B99A62]" />
                    {dest.travelTime}
                  </span>
                </div>
              </div>

              {/* Text & Route Highlights */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#17352D] transition group-hover:text-[#B99A62]">
                    {dest.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#8C6D33]">
                    {dest.subtitle}
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-[#52574F]">
                    {dest.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 border-t border-[#EAE3D6] pt-3">
                    <div className="mb-2 text-[10px] font-bold tracking-wider text-[#8A8F85] uppercase">
                      Journey Highlights
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#383C36]">
                      {dest.highlights.slice(0, 3).map((hl, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#B99A62]" />
                          <span className="truncate">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="mt-6 border-t border-[#EAE3D6] pt-4">
                  <button
                    type="button"
                    onClick={() => handleDestinationPlan(dest.name)}
                    className="flex w-full items-center justify-between rounded-xl border border-[#DED5C4] bg-[#FAF7F2] px-4 py-2.5 text-xs font-bold text-[#17352D] transition hover:border-[#17352D] hover:bg-[#17352D] hover:text-[#FAF7F2]"
                  >
                    <span>Plan Route with Chauffeur</span>
                    <ArrowRight size={14} className="text-[#B99A62]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Transparency Box */}
        <div className="mt-12 flex items-start gap-3 rounded-2xl border border-[#DED5C4] bg-[#F2EDE2]/70 p-4.5 text-xs text-[#52574F] sm:p-5">
          <Info size={18} className="mt-0.5 shrink-0 text-[#B99A62]" />
          <div>
            <strong className="text-[#17352D]">Note on Curated Destinations:</strong>{" "}
            These routes represent discovery suggestions and common road trips
            departing from Delhi NCR. Parkash Tour & Travels Private Limited
            customizes individual trip duration, vehicle category, and tolls
            upon consultation without pre-packaged rigid restrictions.
          </div>
        </div>
      </div>
    </section>
  );
}
