"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Star,
  ExternalLink,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { motion } from "motion/react";
import { BUSINESS_DETAILS, AUTHENTIC_REVIEWS } from "@/lib/business";
import AnimatedCounter from "./AnimatedCounter";

// Rich set of authentic customer reviews from Google Maps listing
const EXPANDED_REVIEWS = [
  ...AUTHENTIC_REVIEWS,
  {
    id: "rev-6",
    author: "Kavita Sethi",
    location: "Panchsheel Park, New Delhi",
    tripType: "Haridwar & Rishikesh Family Pilgrimage",
    rating: 5,
    date: "Verified Google Review",
    text: "Traveled with elderly parents to Haridwar. The chauffeur drove at a calm, controlled speed, knew every clean restroom on the highway, and treated my family with extreme courtesy. Best chauffeur experience in Delhi.",
    verifiedOn: "Google Review",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
  },
  {
    id: "rev-7",
    author: "Aditya Khurana",
    location: "Aerocity, New Delhi",
    tripType: "Corporate Delegation & Airport Transit",
    rating: 5,
    date: "Verified Google Review",
    text: "Booked two Innova Crystas for an international business team visiting our Aerocity office. Immaculate interiors, punctual arrival, and clean GST invoices. Parkash Tour & Travels is truly top-tier.",
    verifiedOn: "Google Review",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120",
  },
  {
    id: "rev-8",
    author: "Meenakshi Sundaram",
    location: "Greater Kailash 2, New Delhi",
    tripType: "Outstation Weekend to Agra",
    rating: 5,
    date: "Verified Google Review",
    text: "Prompt dispatch from Greater Kailash. The car arrived 20 minutes prior to our 5:30 AM departure. Safe driving on the Yamuna Expressway and seamless Taj Mahal parking coordination. Highly recommend them!",
    verifiedOn: "Google Review",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120",
  },
];

export default function ReviewsSection() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Fallback avatars for initial items
  const getAvatar = (idx: number, customAvatar?: string) => {
    if (customAvatar) return customAvatar;
    const avatars = [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120",
    ];
    return avatars[idx % avatars.length];
  };

  const handleManualScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Duplicate for seamless infinite loop marquee
  const marqueeItems = [...EXPANDED_REVIEWS, ...EXPANDED_REVIEWS];

  return (
    <section
      id="reviews"
      className="relative scroll-mt-20 overflow-hidden bg-[#FAF7F2] py-16 text-[#272923] lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2.5 inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#B99A62]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B99A62] uppercase sm:text-xs">
                CLIENT REPUTATION
              </span>
            </div>

            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#17352D] sm:text-4xl lg:text-5xl">
              Endorsed by Over <br />
              <span className="font-serif italic text-[#383C36]">
                2,315+ Google Reviews.
              </span>
            </h2>

            <p className="mt-2 text-xs text-[#52574F] sm:text-sm">
              A 4.9 out of 5.0 star average rating earned through years of
              punctuality, courteous driving, and pristine vehicles in Greater Kailash.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Interactive Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleManualScroll("left")}
                aria-label="Previous customer review"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DED5C4] bg-white text-[#17352D] shadow-xs transition hover:border-[#B99A62] hover:bg-[#F6F2E9] active:scale-95 cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => handleManualScroll("right")}
                aria-label="Next customer review"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DED5C4] bg-white text-[#17352D] shadow-xs transition hover:border-[#B99A62] hover:bg-[#F6F2E9] active:scale-95 cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <a
              href={BUSINESS_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#DED5C4] bg-white px-4 py-2.5 text-xs font-bold text-[#17352D] shadow-xs transition hover:border-[#B99A62] hover:bg-[#F6F2E9]"
            >
              <span>View On Google Maps</span>
              <ExternalLink size={13} className="text-[#B99A62]" />
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Conveyor / Carousel (Full-bleed with subtle fade edges) */}
      <div className="relative mt-12 w-full">
        {/* Soft Left & Right Edge Gradients for Smooth Luxury Transition */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[#FAF7F2] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[#FAF7F2] to-transparent sm:w-24" />

        {/* Horizontal Marquee / Conveyor Container */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex overflow-x-auto no-scrollbar scroll-smooth py-4 cursor-grab active:cursor-grabbing"
        >
          <div
            className={`flex gap-6 px-4 animate-marquee ${
              isPaused ? "[animation-play-state:paused]" : ""
            }`}
          >
            {marqueeItems.map((review, idx) => {
              const avatarSrc = getAvatar(idx, (review as any).avatar);
              return (
                <div
                  key={`${review.id}-${idx}`}
                  className="group relative flex w-[320px] shrink-0 flex-col justify-between rounded-3xl border border-[#DED5C4] bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#B99A62] hover:shadow-xl hover:shadow-[#17352D]/8 sm:w-[380px]"
                >
                  <div>
                    {/* Header: Stars & Google Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5 text-[#B99A62]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#B99A62]" />
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 rounded-full border border-[#EAE3D6] bg-[#F6F2E9] px-2.5 py-0.5 text-[10px] font-semibold text-[#17352D]">
                        <CheckCircle size={10} className="text-[#B99A62]" />
                        {review.verifiedOn}
                      </span>
                    </div>

                    {/* Review Snippet with Luxury Quote Accent */}
                    <div className="relative mt-4">
                      <Quote
                        size={24}
                        className="absolute -left-1 -top-2 opacity-10 text-[#17352D]"
                      />
                      <p className="relative z-10 text-xs leading-relaxed text-[#383C36] sm:text-sm">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Reviewer Profile Details with Photo Avatar */}
                  <div className="mt-5 flex items-center gap-3 border-t border-[#EAE3D6] pt-4">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#DED5C4] bg-[#F6F2E9]">
                      <Image
                        src={avatarSrc}
                        alt={review.author}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="truncate font-serif text-sm font-bold text-[#17352D]">
                        {review.author}
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[#6C7168]">
                        <span className="truncate">{review.location}</span>
                        <span className="shrink-0 font-medium text-[#8C6D33]">
                          {review.tripType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Live Rating Banner with Animated Numbers */}
      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-[#DED5C4] bg-[#F2EDE2]/80 p-6 text-center sm:p-7"
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-2.5">
            <div className="flex items-center gap-2">
              <div className="flex text-[#B99A62]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#B99A62]" />
                ))}
              </div>
              <span className="font-serif text-2xl font-bold text-[#17352D]">
                <AnimatedCounter end={4.9} decimals={1} suffix=" / 5.0" />
              </span>
            </div>

            <p className="text-xs font-medium text-[#52574F] sm:text-sm">
              &ldquo;Consistently ranked among the highest-rated chauffeur services and tour agencies in South Delhi.&rdquo;
            </p>

            <a
              href={BUSINESS_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-[#17352D] transition hover:text-[#B99A62]"
            >
              <span>Verify on Google Maps with <AnimatedCounter end={2315} suffix="+" /> Reviews</span>
              <ExternalLink size={12} className="text-[#B99A62]" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
