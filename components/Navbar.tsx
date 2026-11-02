"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  MapPin,
  Clock,
  ChevronRight,
  Star,
} from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/business";

interface NavbarProps {
  onBookClick?: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Destinations", href: "#destinations" },
    { label: "Fleet", href: "#fleet" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Top Utility Bar for Desktop — Warm Linen Aesthetic */}
      <div className="hidden h-7 border-b border-[#E3DAC9] bg-[#F2EDE2] text-[11px] text-[#52574F] lg:flex lg:items-center">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-[#383C36]">
              <MapPin size={12} className="text-[#B99A62]" />
              {BUSINESS_DETAILS.locationName}
            </span>
            <span className="h-3 w-[1px] bg-[#D4CBB9]" />
            <span className="flex items-center gap-1.5 text-[#52574F]">
              <Clock size={12} className="text-[#B99A62]" />
              24/7 Executive Chauffeur Dispatch
            </span>
            <span className="h-3 w-[1px] bg-[#D4CBB9]" />
            <a
              href={BUSINESS_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-[#17352D] transition hover:text-[#B99A62]"
            >
              <div className="flex text-[#B99A62]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-[#B99A62]" />
                ))}
              </div>
              <span>4.9 / 5.0</span>
              <span className="text-[#6C7168]">(2,315+ Reviews)</span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                "Hello Parkash Tour & Travels, I would like to inquire about booking a chauffeur-driven car."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-[#1F5444] transition hover:text-[#17352D]"
            >
              <MessageCircle size={12} className="text-[#25D366]" />
              WhatsApp Support
            </a>
            <span className="h-3 w-[1px] bg-[#D4CBB9]" />
            <a
              href={BUSINESS_DETAILS.phones[0].tel}
              className="flex items-center gap-1.5 font-bold text-[#17352D] transition hover:text-[#B99A62]"
            >
              <Phone size={12} className="text-[#B99A62]" />
              {BUSINESS_DETAILS.phones[0].display}
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Header — Polished & Balanced on Mobile and Desktop */}
      <header
        className={`sticky top-0 z-50 flex h-14 w-full items-center transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#DED5C4] bg-[#FAF7F2]/95 shadow-md backdrop-blur-md"
            : "border-b border-[#EAE3D6] bg-[#FAF7F2]/90 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
          {/* LEFT: Parkash logo and brand name (No awkward wrapping on mobile) */}
          <Link
            href="/"
            className="group flex items-center gap-2 sm:gap-3 transition-transform duration-300 min-w-0"
          >
            {/* Bespoke Crest Emblem in Forest Green with Gold Accent */}
            <div className="relative flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl border border-[#B99A62]/40 bg-[#17352D] shadow-sm transition duration-300 group-hover:border-[#B99A62]">
              <span className="font-serif text-sm sm:text-lg font-bold tracking-wider text-[#FAF7F2]">
                P
              </span>
              <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full border border-[#FAF7F2] bg-[#B99A62] shadow-[0_0_6px_rgba(185,154,98,0.7)]" />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="font-serif text-sm sm:text-base lg:text-lg font-bold tracking-[0.12em] sm:tracking-[0.14em] text-[#17352D] leading-tight truncate">
                PARKASH
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.18em] sm:tracking-[0.25em] text-[#B99A62] uppercase leading-none truncate">
                Tour & Travels
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#383C36] transition-all duration-200 hover:bg-[#EAE3D6]/70 hover:text-[#17352D]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: Quick Call, Compact 'Book Ride' button & Hamburger menu icon */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Desktop Direct Phone Link */}
            <a
              href={BUSINESS_DETAILS.phones[0].tel}
              className="hidden items-center gap-2 rounded-full border border-[#DED5C4] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#17352D] shadow-xs transition hover:border-[#B99A62] hover:bg-[#F6F2E9] md:inline-flex"
            >
              <Phone size={13} className="text-[#B99A62]" />
              <span>{BUSINESS_DETAILS.phones[0].display}</span>
            </a>

            {/* Mobile Quick Direct Call Button (1-Tap Emergency / Airport Dispatch) */}
            <a
              href={BUSINESS_DETAILS.phones[0].tel}
              aria-label={`Call Parkash Tour & Travels: ${BUSINESS_DETAILS.phones[0].display}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#DED5C4] bg-white text-[#17352D] shadow-xs transition active:scale-95 hover:border-[#B99A62] hover:text-[#B99A62] sm:hidden"
            >
              <Phone size={14} className="text-[#B99A62]" />
            </a>

            {/* Compact Booking Button */}
            <a
              href="#booking-enquiry"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#booking-enquiry");
                if (onBookClick) onBookClick();
              }}
              className="inline-flex h-9 items-center justify-center gap-1 rounded-full border border-[#B99A62]/30 bg-[#17352D] px-2.5 sm:px-4 text-[11px] font-bold tracking-wide text-[#FAF7F2] shadow-sm transition-all duration-200 active:scale-95 sm:text-xs lg:px-5 lg:text-sm whitespace-nowrap"
            >
              <span>Book Ride</span>
              <ChevronRight size={12} className="stroke-[2.5] text-[#D4BD8E] hidden sm:inline-block" />
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 sm:h-9 sm:w-9 items-center justify-center rounded-lg sm:rounded-xl border border-[#DED5C4] bg-white text-[#17352D] shadow-xs transition active:scale-95 hover:bg-[#F6F2E9] lg:hidden cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu — Warm Ivory Canvas with Smooth Navigation */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 bg-[#FAF7F2]/98 backdrop-blur-xl lg:hidden animate-in fade-in duration-200"
        >
          <div className="flex h-full flex-col justify-between overflow-y-auto px-5 py-6">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#B99A62] bg-[#17352D] font-serif text-base font-bold text-[#FAF7F2]">
                  P
                </div>
                <div>
                  <div className="font-serif text-base font-bold text-[#17352D]">
                    PARKASH
                  </div>
                  <div className="text-[8px] font-bold tracking-wider text-[#B99A62]">
                    TOUR & TRAVELS PVT LTD
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#DED5C4] bg-white text-[#17352D] transition active:scale-95"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation List — All 8 links with clear spacing */}
            <div className="my-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold text-[#272923] transition hover:bg-[#EAE3D6] hover:text-[#17352D]"
                >
                  <span>{link.label}</span>
                  <ChevronRight size={14} className="text-[#B99A62]" />
                </a>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="space-y-2.5 border-t border-[#EAE3D6] pt-4">
              <div className="mb-2 flex items-center justify-between text-[11px] text-[#52574F]">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  24/7 South Delhi Desk
                </span>
                <span className="font-bold text-[#17352D]">4.9 ★ (2,315+ Reviews)</span>
              </div>

              <a
                href={BUSINESS_DETAILS.phones[0].tel}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#DED5C4] bg-white py-2.5 text-xs font-bold text-[#17352D] shadow-xs active:scale-98"
              >
                <Phone size={14} className="text-[#B99A62]" />
                Call {BUSINESS_DETAILS.phones[0].display}
              </a>

              <a
                href={`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Parkash Tour & Travels, I would like to enquire about chauffeur-driven car rental."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-xs font-bold text-white shadow-md active:scale-98"
              >
                <MessageCircle size={15} />
                WhatsApp Quick Enquiry
              </a>

              <a
                href="#booking-enquiry"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#booking-enquiry");
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#17352D] py-2.5 text-xs font-bold text-[#FAF7F2] shadow-md active:scale-98"
              >
                Book Your Ride Online
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
