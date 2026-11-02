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
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#B99A62]/30 bg-[#12231D]/98 px-3 py-2.5 shadow-2xl backdrop-blur-lg lg:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-2">
        {/* Direct Phone Call */}
        <a
          href={BUSINESS_DETAILS.phones[0].tel}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-[#17352D] py-2.5 text-xs font-bold text-[#FAF7F2] shadow-xs active:scale-95"
          aria-label="Call Dispatcher"
        >
          <Phone size={14} className="text-[#D4BD8E]" />
          <span>Call Desk</span>
        </a>

        {/* Direct WhatsApp Chat */}
        <a
          href={`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(
            "Hello Parkash Tour & Travels, I would like to book a ride."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] py-2.5 text-xs font-bold text-white shadow-md active:scale-95"
          aria-label="WhatsApp Booking"
        >
          <MessageCircle size={15} />
          <span>WhatsApp</span>
        </a>

        {/* Scroll to Interactive Booking */}
        <a
          href="#booking-enquiry"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("booking-enquiry");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#B99A62] py-2.5 text-xs font-bold text-[#12231D] shadow-md active:scale-95"
          aria-label="Book Online"
        >
          <CalendarCheck size={14} />
          <span>Book Ride</span>
        </a>
      </div>
    </div>
  );
}
