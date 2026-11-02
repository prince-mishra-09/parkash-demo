"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/business";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#B99A62]/30 bg-[#12231D]/98 px-3 pt-2 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-2xl backdrop-blur-lg lg:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-2">
        {/* Direct Phone Call */}
        <a
          href={BUSINESS_DETAILS.phones[0].tel}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#B99A62]/30 bg-[#17352D] py-2.5 text-xs font-bold text-[#FAF7F2] shadow-xs transition hover:border-[#B99A62] active:scale-95"
          aria-label="Call Dispatcher Desk"
        >
          <Phone size={14} className="text-[#D4BD8E]" />
          <span>Call Desk</span>
        </a>

        {/* Direct WhatsApp Chat — Quiet Luxury Emerald with WhatsApp Accent */}
        <a
          href={`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(
            "Hello Parkash Tour & Travels, I would like to inquire about booking a chauffeur-driven car."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#25D366]/40 bg-[#16382C] py-2.5 text-xs font-bold text-white shadow-md transition hover:border-[#25D366] active:scale-95"
          aria-label="WhatsApp Booking"
        >
          <MessageCircle size={15} className="text-[#25D366]" />
          <span>WhatsApp</span>
        </a>

        {/* Scroll to Interactive Booking / Fare Calculation */}
        <a
          href="#booking-enquiry"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("booking-enquiry");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#B99A62] via-[#D4BD8E] to-[#B99A62] py-2.5 text-xs font-bold text-[#12231D] shadow-md transition hover:brightness-105 active:scale-95"
          aria-label="Check Fares & Book Ride"
        >
          <CalendarCheck size={14} />
          <span>Check Fares</span>
        </a>
      </div>
    </div>
  );
}
