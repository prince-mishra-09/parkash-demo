"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import AboutUs from "@/components/AboutUs";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";
import FleetSection from "@/components/FleetSection";
import ExperienceGallery from "@/components/ExperienceGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import BookingEnquiry from "@/components/BookingEnquiry";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function HomePage() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>(
    "Toyota Innova Crysta"
  );
  const [selectedDestination, setSelectedDestination] = useState<string>("");
  const [selectedService, setSelectedService] =
    useState<string>("Airport Transfer");

  const handleSelectService = (service: string) => {
    setSelectedService(service);
  };

  const handleSelectVehicle = (vehicle: string) => {
    setSelectedVehicle(vehicle);
  };

  const handleSelectDestination = (destination: string) => {
    setSelectedDestination(destination);
    setSelectedService("Outstation Round Trip");
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#272923]">
      {/* 1. Luxury Navigation Bar */}
      <Navbar />

      <main className="overflow-x-clip">
        {/* 2. Cinematic Hero Section */}
        <Hero onSelectQuickService={handleSelectService} />

        {/* 3. Verified Trust & Credibility Strip */}
        <TrustSection />

        {/* 4. About Our Agency & Greater Kailash Operations */}
        <AboutUs />

        {/* 5. Thoughtfully Designed Travel Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 6. Curated Destinations from New Delhi */}
        <DestinationsSection onSelectDestination={handleSelectDestination} />

        {/* 7. Executive Chauffeur Fleet Showcase */}
        <FleetSection onSelectVehicle={handleSelectVehicle} />

        {/* 8. Journey Visuals & Gallery */}
        <ExperienceGallery />

        {/* 9. Why Discerning Travelers Choose Parkash */}
        <WhyChooseUs />

        {/* 10. Customer Reviews & 4.9★ Google Reputation */}
        <ReviewsSection />

        {/* 11. Interactive Booking & Transparent Fare Enquiry */}
        <BookingEnquiry
          key={`${selectedVehicle}-${selectedDestination}-${selectedService}`}
          initialTripType={selectedService}
          initialVehicle={selectedVehicle}
          initialDestination={selectedDestination}
        />

        {/* 12. Frequently Asked Questions */}
        <FAQSection />

        {/* 13. Headquarters, Directions & Contact Desk */}
        <ContactSection />
      </main>

      {/* 14. Editorial Luxury Footer */}
      <Footer />

      {/* 15. High-Conversion Mobile Floating Bar */}
      <StickyMobileCTA />
    </div>
  );
}
