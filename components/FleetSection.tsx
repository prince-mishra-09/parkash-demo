"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Users,
  Briefcase,
  Wind,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { VEHICLE_FLEET, Vehicle } from "@/lib/business";

interface FleetSectionProps {
  onSelectVehicle?: (vehicleName: string) => void;
}

export default function FleetSection({ onSelectVehicle }: FleetSectionProps) {
  const [activeVehicle, setActiveVehicle] = useState<Vehicle>(VEHICLE_FLEET[0]);

  const handleReserve = (vehicleName: string) => {
    if (onSelectVehicle) {
      onSelectVehicle(vehicleName);
    }
    const el = document.getElementById("booking-enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="fleet"
      className="relative scroll-mt-20 border-t border-[#E3DAC9] bg-[#F6F2E9] py-20 text-[#272923] lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#B99A62]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B99A62] uppercase sm:text-xs">
              EXECUTIVE CHAUFFEUR FLEET
            </span>
          </div>

          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#17352D] sm:text-4xl lg:text-5xl">
            Impeccably Maintained <br />
            <span className="font-serif italic text-[#383C36]">
              Travel Fleet.
            </span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[#52574F] sm:text-base">
            Every vehicle in our fleet is commercially registered, comprehensively
            insured, and thoroughly vacuumed and sanitized prior to every
            dispatch.
          </p>
        </div>

        {/* Vehicle Category Selector Tabs — Compact Minimal Pills matching Explore Destinations */}
        <div className="mt-8 flex flex-wrap gap-2">
          {VEHICLE_FLEET.map((vehicle) => {
            const isSelected = activeVehicle.id === vehicle.id;
            return (
              <button
                key={vehicle.id}
                type="button"
                onClick={() => setActiveVehicle(vehicle)}
                className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#17352D] text-[#FAF7F2] shadow-sm"
                    : "border border-[#DED5C4] bg-white text-[#52574F] hover:border-[#B99A62] hover:text-[#17352D]"
                }`}
              >
                {vehicle.name}
              </button>
            );
          })}
        </div>

        {/* Featured Vehicle Showcase Display Card — Crisp Pure White Card on Warm Ivory */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-[#DED5C4] bg-white p-6 shadow-md sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left: Large Vehicle Presentation */}
            <div className="relative h-[280px] w-full overflow-hidden rounded-2xl border border-[#E3DAC9] bg-[#F2EDE2] sm:h-[380px] lg:col-span-7">
              <Image
                src={activeVehicle.image}
                alt={activeVehicle.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12231D]/40 via-transparent to-transparent" />

              {/* Tag Pill in Deep Forest */}
              <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#17352D]/90 px-3.5 py-1 text-xs font-bold text-[#FAF7F2] shadow-sm backdrop-blur-md">
                {activeVehicle.tag}
              </div>

              {/* Bottom Quick Specs Bar in Pure White Glass */}
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/40 bg-white/95 p-3 text-xs text-[#272923] shadow-md backdrop-blur-md">
                <span className="flex items-center gap-1.5 font-bold">
                  <Users size={14} className="text-[#B99A62]" />
                  {activeVehicle.seats}
                </span>
                <span className="h-3 w-[1px] bg-[#DED5C4]" />
                <span className="flex items-center gap-1.5 font-bold">
                  <Briefcase size={14} className="text-[#B99A62]" />
                  {activeVehicle.luggage}
                </span>
                <span className="h-3 w-[1px] bg-[#DED5C4]" />
                <span className="flex items-center gap-1.5 font-bold">
                  <Wind size={14} className="text-[#B99A62]" />
                  {activeVehicle.acOption}
                </span>
              </div>
            </div>

            {/* Right: Technical Specs, Features & Reservation CTA */}
            <div className="space-y-6 lg:col-span-5">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#8C6D33] uppercase">
                  {activeVehicle.category}
                </span>
                <h3 className="font-serif text-3xl font-extrabold text-[#17352D] sm:text-4xl">
                  {activeVehicle.name}
                </h3>
                <p className="mt-2 text-xs font-semibold text-[#52574F] sm:text-sm">
                  Recommended for: {activeVehicle.bestFor}
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-3 border-y border-[#EAE3D6] py-5">
                <div className="text-xs font-bold tracking-wider text-[#8A8F85] uppercase">
                  Included Amenities & Standards
                </div>
                <ul className="space-y-2.5">
                  {activeVehicle.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-[#383C36] sm:text-sm"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-[#B99A62]"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => handleReserve(activeVehicle.name)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#17352D] bg-[#17352D] px-6 py-3.5 text-xs font-bold tracking-wide text-[#FAF7F2] shadow-md transition hover:bg-[#12231D] hover:scale-[1.02] sm:text-sm"
                >
                  <span>Reserve This Vehicle</span>
                  <ArrowRight size={16} className="text-[#D4BD8E]" />
                </button>

                <a
                  href={`https://wa.me/919818376653?text=${encodeURIComponent(
                    `Hello Parkash Tour & Travels, I would like to inquire about booking the ${activeVehicle.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DED5C4] bg-white px-5 py-3.5 text-xs font-bold text-[#17352D] shadow-xs transition hover:border-[#B99A62] hover:bg-[#FAF7F2] sm:text-sm"
                >
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
