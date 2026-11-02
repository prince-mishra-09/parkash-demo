"use client";

import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ExternalLink,
  Navigation,
} from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/business";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 border-t border-[#E3DAC9] bg-[#F6F2E9] py-20 text-[#272923] lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Official Business Details */}
          <div className="space-y-6 lg:col-span-6">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#B99A62]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B99A62] uppercase sm:text-xs">
                HEADQUARTERS & CONTACT
              </span>
            </div>

            <h2 className="font-serif text-3xl font-extrabold leading-tight text-[#17352D] sm:text-4xl lg:text-5xl">
              Connect with Our <br />
              <span className="font-serif italic text-[#383C36]">
                South Delhi Desk.
              </span>
            </h2>

            <p className="text-sm leading-relaxed text-[#52574F] sm:text-base">
              Visit our offices in Greater Kailash or reach our 24-hour dispatch
              desk directly for immediate car hire, flight coordination, and
              personalized outstation itineraries.
            </p>

            {/* Verified Address Card in Pure White */}
            <div className="space-y-4 rounded-3xl border border-[#DED5C4] bg-white p-6 shadow-xs sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F6F2E9] text-[#17352D]">
                  <MapPin size={24} className="text-[#B99A62]" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-[#8C6D33] uppercase">
                    Official Registered Office
                  </div>
                  <div className="mt-1 font-serif text-lg font-bold text-[#17352D]">
                    {BUSINESS_DETAILS.name}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#52574F] sm:text-sm">
                    {BUSINESS_DETAILS.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-3 border-t border-[#EAE3D6]">
                <a
                  href={BUSINESS_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#17352D] px-4 py-2 text-xs font-bold text-[#FAF7F2] shadow-xs transition hover:bg-[#12231D]"
                >
                  <Navigation size={13} className="text-[#D4BD8E]" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={BUSINESS_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#DED5C4] bg-[#F6F2E9] px-4 py-2 text-xs font-bold text-[#17352D] transition hover:border-[#B99A62]"
                >
                  <span>Google Maps 4.9 ★</span>
                  <ExternalLink size={12} className="text-[#B99A62]" />
                </a>
              </div>
            </div>

            {/* Quick Contact Numbers & Hours */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#DED5C4] bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#17352D]">
                  <Phone size={16} className="text-[#B99A62]" />
                  <span>Direct Dial</span>
                </div>
                <a
                  href={BUSINESS_DETAILS.phones[0].tel}
                  className="mt-2 block font-serif text-lg font-bold text-[#17352D] transition hover:text-[#B99A62]"
                >
                  {BUSINESS_DETAILS.phones[0].display}
                </a>
                <div className="mt-1 text-[11px] text-[#6C7168]">
                  Instant line to dispatcher on duty
                </div>
              </div>

              <div className="rounded-2xl border border-[#DED5C4] bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#17352D]">
                  <Clock size={16} className="text-[#B99A62]" />
                  <span>Operating Hours</span>
                </div>
                <div className="mt-2 font-serif text-lg font-bold text-[#17352D]">
                  24 Hours / 7 Days
                </div>
                <div className="mt-1 text-[11px] font-semibold text-emerald-700">
                  Round-the-clock booking & assistance
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Representation */}
          <div className="space-y-6 lg:col-span-6">
            <div className="relative h-[380px] w-full overflow-hidden rounded-3xl border border-[#DED5C4] bg-[#F2EDE2] shadow-md sm:h-[460px]">
              <iframe
                title="Parkash Tour & Travels Google Maps Location"
                src="https://maps.google.com/maps?q=Parkash+Tour+Travels+Greater+Kailash+Sector+4+New+Delhi&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />

              {/* Floating Overlay Card in Pure White */}
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-2xl border border-[#DED5C4] bg-white/95 p-4 shadow-md backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-serif text-sm font-bold text-[#17352D]">
                      Parkash Tour & Travels Private Limited
                    </div>
                    <div className="text-[11px] text-[#6C7168]">
                      Greater Kailash, New Delhi · 4.9 ★ (2,315+ Reviews)
                    </div>
                  </div>
                  <a
                    href={BUSINESS_DETAILS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto rounded-lg bg-[#17352D] px-3 py-1.5 text-xs font-bold text-[#FAF7F2] shadow-xs transition hover:bg-[#12231D]"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Action Bar */}
            <div className="flex items-center justify-between rounded-2xl border border-emerald-300 bg-emerald-50/70 p-5 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/20 text-[#25D366]">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#17352D]">
                    Need an immediate quote on WhatsApp?
                  </div>
                  <div className="text-[11px] text-[#52574F]">
                    Typical response time: under 5 minutes
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Parkash Tour & Travels, I would like to inquire about booking a vehicle."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:opacity-90"
              >
                Chat Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
