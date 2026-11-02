"use client";

import {
  MapPin,
  Phone,
  MessageCircle,
  Star,
  ExternalLink,
} from "lucide-react";
import { BUSINESS_DETAILS, DESTINATIONS, CORE_SERVICES } from "@/lib/business";

export default function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer className="border-t border-[#B99A62]/30 bg-[#12231D] text-[#FAF7F2]">
      {/* Upper Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Identity & Summary */}
          <div className="space-y-5 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#B99A62] bg-[#17352D] font-serif text-xl font-bold text-[#FAF7F2] shadow-md">
                P
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-[0.14em] text-white">
                  PARKASH
                </span>
                <span className="block text-[9px] font-bold tracking-[0.25em] text-[#D4BD8E] uppercase">
                  Tour & Travels Private Limited
                </span>
              </div>
            </div>

            <p className="max-w-sm text-xs leading-relaxed text-[#E9E1D3]/80 sm:text-sm">
              Greater Kailash’s premier luxury chauffeur service and travel
              agency. Specializing in airport transfers, corporate mobility, and
              scenic outstation journeys with impeccably maintained vehicles and
              verified chauffeurs.
            </p>

            {/* Google Review Badge */}
            <a
              href={BUSINESS_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-[#B99A62]/30 bg-[#17352D] p-3.5 transition hover:border-[#B99A62]"
            >
              <div className="flex text-[#B99A62]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#B99A62]" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-white">4.9 / 5.0 Rating</span>
                <span className="block text-[10px] text-[#E9E1D3]/60">
                  2,315+ verified Google reviews
                </span>
              </div>
            </a>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold tracking-wider text-[#D4BD8E] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E9E1D3]/75">
              <li>
                <a href="#hero" className="transition hover:text-[#D4BD8E]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-[#D4BD8E]">
                  About Our Agency
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-[#D4BD8E]">
                  Travel Services
                </a>
              </li>
              <li>
                <a href="#destinations" className="transition hover:text-[#D4BD8E]">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#fleet" className="transition hover:text-[#D4BD8E]">
                  Executive Fleet
                </a>
              </li>
              <li>
                <a href="#why-us" className="transition hover:text-[#D4BD8E]">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="transition hover:text-[#D4BD8E]">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#faqs" className="transition hover:text-[#D4BD8E]">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Travel Services */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold tracking-wider text-[#D4BD8E] uppercase">
              Travel Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E9E1D3]/75">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="transition hover:text-[#D4BD8E]"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Top Outstation Corridors */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold tracking-wider text-[#D4BD8E] uppercase">
              Popular Routes
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E9E1D3]/75">
              {DESTINATIONS.slice(0, 7).map((d) => (
                <li key={d.id}>
                  <a
                    href="#destinations"
                    className="transition hover:text-[#D4BD8E]"
                  >
                    Delhi to {d.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Strip Banner */}
        <div className="mt-14 grid grid-cols-1 gap-6 rounded-3xl border border-white/10 bg-[#17352D] p-6 sm:grid-cols-3 sm:p-8">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#12231D] text-[#D4BD8E]">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#E9E1D3]/60 uppercase">
                Location
              </div>
              <div className="text-xs font-semibold text-white">
                {BUSINESS_DETAILS.shortAddress}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#12231D] text-[#D4BD8E]">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#E9E1D3]/60 uppercase">
                Call 24/7
              </div>
              <a
                href={BUSINESS_DETAILS.phones[0].tel}
                className="text-xs font-bold text-white hover:text-[#D4BD8E]"
              >
                {BUSINESS_DETAILS.phones[0].display}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-900/50 text-emerald-400">
              <MessageCircle size={20} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#E9E1D3]/60 uppercase">
                WhatsApp Dispatch
              </div>
              <a
                href={`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Parkash Tour & Travels, I would like to book a ride."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-400 hover:underline"
              >
                Chat with Chauffeur Desk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Attribution Bar */}
      <div className="border-t border-white/10 py-6 text-xs text-[#E9E1D3]/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div>
            © {CURRENT_YEAR} {BUSINESS_DETAILS.name}. All rights reserved.
          </div>

          {/* Designed & Developed by XWAKED Attribution */}
          <div className="flex items-center gap-2">
            <span className="text-[#E9E1D3]/60">Designed & Developed by</span>
            <a
              href="https://xwaked.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#D4BD8E] transition hover:text-white hover:underline"
            >
              XWAKED
            </a>
          </div>

          <div className="flex items-center gap-5 text-[11px]">
            <span>Greater Kailash, New Delhi</span>
            <span className="h-2 w-[1px] bg-white/20" />
            <a
              href={BUSINESS_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4BD8E] hover:underline"
            >
              Google Maps Listing
            </a>
            <span className="h-2 w-[1px] bg-white/20" />
            <span>Commercially Licensed Fleet</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
