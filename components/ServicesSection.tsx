"use client";

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { CORE_SERVICES } from "@/lib/business";

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function ServicesSection({
  onSelectService,
}: ServicesSectionProps) {
  const handleServiceClick = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    }
    const el = document.getElementById("booking-enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="relative scroll-mt-20 border-t border-[#E3DAC9] bg-[#F6F2E9] py-16 text-[#272923] lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-2.5 inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#B99A62]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B99A62] uppercase sm:text-xs">
                TAILORED CHAUFFEUR SOLUTIONS
              </span>
            </div>

            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#17352D] sm:text-4xl">
              Thoughtfully Designed{" "}
              <span className="font-serif italic text-[#383C36]">
                Travel Services.
              </span>
            </h2>

            <p className="mt-2 text-xs leading-relaxed text-[#52574F] sm:text-sm">
              From seamless airport curbside pickups to multi-day outstation road trips,
              our chauffeur services pair immaculate luxury vehicles with guaranteed punctuality.
            </p>
          </div>

          <div className="text-xs text-[#6C7168]">
            <span className="font-bold text-[#17352D]">6 Curated Services</span> · 24/7 South Delhi Dispatch
          </div>
        </div>

        {/* 6 Compact, High-Impact Service Cards Grid — Scannable in 2-3 Seconds */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CORE_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#DED5C4] bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#B99A62] hover:shadow-lg hover:shadow-[#17352D]/8"
            >
              {/* Sleek Compact Card Image */}
              <div className="relative h-44 w-full overflow-hidden sm:h-48">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12231D]/60 via-transparent to-transparent" />

                {/* Number & Service Tag */}
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-white/95 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#17352D] shadow-xs backdrop-blur-md">
                  <span>{service.number}</span>
                  <span className="h-2 w-[1px] bg-[#B99A62]" />
                  <span>{service.tagline}</span>
                </div>
              </div>

              {/* Compact Content Body: Impactful Title + 1-Sentence Brief + 2 Micro-Pills */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#17352D] transition group-hover:text-[#B99A62]">
                    {service.title}
                  </h3>

                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#52574F]">
                    {service.description}
                  </p>

                  {/* 2 Scannable Micro-Pills instead of bulky lists */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 rounded-md border border-[#EAE3D6] bg-[#FAF7F2] px-2 py-0.5 text-[10px] font-semibold text-[#383C36]"
                      >
                        <Sparkles size={10} className="text-[#B99A62]" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sleek Action CTA */}
                <div className="mt-4 border-t border-[#EAE3D6] pt-3">
                  <button
                    type="button"
                    onClick={() => handleServiceClick(service.title)}
                    className="flex w-full items-center justify-between rounded-xl border border-[#DED5C4] bg-[#FAF7F2] px-3.5 py-2 text-xs font-bold text-[#17352D] transition-colors hover:border-[#17352D] hover:bg-[#17352D] hover:text-[#FAF7F2] cursor-pointer"
                  >
                    <span>Reserve Chauffeur</span>
                    <ArrowRight size={13} className="text-[#B99A62]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
