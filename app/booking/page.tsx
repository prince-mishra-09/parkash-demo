import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import BookingEnquiry from "@/components/BookingEnquiry";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title:
    "Book Your Chauffeur & Fare Enquiry | Parkash Tour & Travels Private Limited New Delhi",
  description:
    "Enquire about executive airport transfers, local Delhi NCR chauffeur hire, and outstation trips to Agra, Jaipur, Shimla & Manali. Direct booking with Parkash Tour & Travels Private Limited, Greater Kailash, New Delhi. Call +91 98183 76653.",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#272923]">
      {/* Navigation */}
      <Navbar />

      <main className="overflow-x-clip">
        {/* Booking Hero Banner in Deep Forest Green */}
        <section className="border-b border-[#B99A62]/30 bg-[#17352D] py-14 text-center sm:py-18">
          <div className="mx-auto max-w-4xl px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#D4BD8E] uppercase transition hover:text-white"
            >
              <ArrowLeft size={14} />
              Return to Homepage
            </Link>

            <h1 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-5xl">
              Reserve Your Chauffeur-Driven Ride
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#E9E1D3]/80 sm:text-base">
              Submit your journey schedule below for an upfront, transparent
              fare quotation. Dispatched 24/7 from Greater Kailash, New Delhi.
            </p>
          </div>
        </section>

        {/* Main Booking Engine */}
        <BookingEnquiry />

        {/* Trust Badges */}
        <TrustSection />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Floating Mobile CTA */}
      <StickyMobileCTA />
    </div>
  );
}
