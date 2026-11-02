"use client";

import { useState } from "react";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Plane,
  Building2,
  Compass,
  Briefcase,
  Users,
  Calendar,
  Clock,
  MapPin,
  Car,
  User,
  Sparkles,
  Edit2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BUSINESS_DETAILS, VEHICLE_FLEET } from "@/lib/business";

interface BookingEnquiryProps {
  initialTripType?: string;
  initialVehicle?: string;
  initialDestination?: string;
}

export default function BookingEnquiry({
  initialTripType = "Airport Transfer (IGI T1/T2/T3)",
  initialVehicle = "Toyota Innova Crysta",
  initialDestination = "",
}: BookingEnquiryProps) {
  // Current active step (1 to 5)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form Fields
  const [tripType, setTripType] = useState<string>(initialTripType);
  const [vehicle, setVehicle] = useState<string>(initialVehicle);
  const [pickup, setPickup] = useState<string>("");
  const [destination, setDestination] = useState<string>(initialDestination);
  const [travelDate, setTravelDate] = useState<string>("");
  const [pickupTime, setPickupTime] = useState<string>("");
  const [passengers, setPassengers] = useState<string>("3 - 4 Passengers");
  const [notes, setNotes] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [validationError, setValidationError] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const steps = [
    { number: 1, title: "Journey Type", label: "Service" },
    { number: 2, title: "Pickup Details", label: "Pickup" },
    { number: 3, title: "Destination & Group", label: "Destination" },
    { number: 4, title: "Guest Details", label: "Contact" },
    { number: 5, title: "Review & Confirm", label: "Confirm" },
  ];

  const tripTypes = [
    {
      title: "Airport Transfer (IGI T1/T2/T3)",
      sub: "Flight monitoring & curbside pickup",
      icon: Plane,
    },
    {
      title: "Local Delhi NCR Chauffeur",
      sub: "Hourly or full-day as-directed hire",
      icon: Building2,
    },
    {
      title: "Outstation Round Trip",
      sub: "Agra, Jaipur, Rishikesh & hill stations",
      icon: Compass,
    },
    {
      title: "Outstation One-Way Drop",
      sub: "Direct highway transfer to other cities",
      icon: Compass,
    },
    {
      title: "Corporate & Event Transit",
      sub: "Executive delegations & VIP convoys",
      icon: Briefcase,
    },
  ];

  const passengerOptions = [
    "1 - 2 Passengers (Executive Solo/Duo)",
    "3 - 4 Passengers (Family / Small Group)",
    "5 - 7 Passengers (Innova Crysta / Large Group)",
    "8 - 12 Passengers (Executive Luxury Van)",
    "13+ Group Delegation",
  ];

  const quickPickups = [
    "Greater Kailash",
    "Delhi IGI Airport T3",
    "Aerocity",
    "South Extension",
    "Connaught Place",
    "Gurugram Cyber Hub",
    "Noida Sector 18",
  ];

  const quickDestinations = [
    "IGI Airport T3",
    "Agra (Taj Mahal)",
    "Jaipur (Pink City)",
    "Rishikesh",
    "Haridwar",
    "Shimla",
    "Manali",
    "Delhi NCR Full Day",
  ];

  const validatePhone = (p: string) => {
    const clean = p.replace(/[^0-9]/g, "");
    return clean.length >= 10;
  };

  const handleNextStep = () => {
    setValidationError("");

    if (currentStep === 1) {
      if (!tripType) {
        setValidationError("Please select your journey type.");
        return;
      }
    } else if (currentStep === 2) {
      if (!pickup.trim()) {
        setValidationError("Please specify your pickup location or landmark.");
        return;
      }
    } else if (currentStep === 3) {
      // Optional destination check for local vs outstation
      if (tripType.toLowerCase().includes("outstation") && !destination.trim()) {
        setValidationError("Please specify your destination for outstation travel.");
        return;
      }
    } else if (currentStep === 4) {
      if (!fullName.trim()) {
        setValidationError("Please enter your full name.");
        return;
      }
      if (!validatePhone(phone)) {
        setValidationError("Please enter a valid 10-digit mobile phone number.");
        return;
      }
    }

    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setValidationError("");
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const generateWhatsAppMessage = () => {
    return (
      `*New Chauffeur Reservation — Parkash Tour & Travels*\n\n` +
      `*Full Name:* ${fullName.trim()}\n` +
      `*Phone Number:* ${phone.trim()}\n` +
      (email.trim() ? `*Email:* ${email.trim()}\n` : ``) +
      `*Journey Category:* ${tripType}\n` +
      `*Vehicle Preference:* ${vehicle}\n` +
      `*Pickup Location:* ${pickup.trim()}\n` +
      `*Destination / Route:* ${destination.trim() || "Delhi NCR Local / Flexible"}\n` +
      `*Travel Date:* ${travelDate || "Immediate / To be scheduled"}\n` +
      `*Pickup Time:* ${pickupTime || "Flexible"}\n` +
      `*Passengers:* ${passengers}\n` +
      (notes.trim() ? `*Special Notes / Flight:* ${notes.trim()}\n\n` : `\n`) +
      `_Enquiry initiated via official website (parkashtourandtravels.com)_`
    );
  };

  const handleFinalSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setValidationError("");
    setFormSubmitted(true);

    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encoded}`;

    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="booking-enquiry"
      className="relative scroll-mt-20 border-t border-[#B99A62]/30 bg-[#17352D] py-16 text-[#FAF7F2] lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Context & Direct Contact Cards */}
          <div className="space-y-6 lg:col-span-5">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#B99A62]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#D4BD8E] uppercase sm:text-xs">
                RESERVE YOUR CHAUFFEUR
              </span>
            </div>

            <h2 className="font-serif text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Plan Your Journey with <br />
              <span className="gold-light-gradient-text">
                Complete Clarity.
              </span>
            </h2>

            <p className="text-xs leading-relaxed text-[#E9E1D3]/80 sm:text-sm">
              Complete this 5-step guided reservation to receive a transparent,
              all-inclusive fare quotation with zero hidden surprises. Our Greater
              Kailash desk coordinates dispatches 24 hours a day.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-1">
              <a
                href={BUSINESS_DETAILS.phones[0].tel}
                className="flex items-center gap-4 rounded-2xl border border-[#B99A62]/30 bg-[#1B3C33] p-4 transition hover:border-[#B99A62] hover:bg-[#21493E]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#142B24] text-[#D4BD8E]">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-[#E9E1D3]/70">
                    24/7 Direct Telephone
                  </div>
                  <div className="font-serif text-base font-bold text-white sm:text-lg">
                    {BUSINESS_DETAILS.phones[0].display}
                  </div>
                </div>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Parkash Tour & Travels, I would like to inquire about booking a ride."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-[#1B3C33] p-4 transition hover:border-emerald-500 hover:bg-[#21493E]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-900/40 text-emerald-400">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-[#E9E1D3]/70">
                    Direct WhatsApp Assistance
                  </div>
                  <div className="font-serif text-base font-bold text-emerald-400 sm:text-lg">
                    Chat with Dispatcher
                  </div>
                </div>
              </a>
            </div>

            {/* Standards Guarantee */}
            <div className="space-y-2 rounded-2xl border border-white/10 bg-[#1B3C33]/60 p-4 text-xs text-[#E9E1D3]/80">
              <div className="flex items-center gap-2 font-bold text-white">
                <ShieldCheck size={16} className="text-[#D4BD8E]" />
                <span>Our Booking Standards</span>
              </div>
              <ul className="space-y-1.5 pl-5 list-disc text-[11px] text-[#E9E1D3]/70">
                <li>Fixed, all-inclusive fare quotes including driver night fee</li>
                <li>No cancellation penalty when notified ahead of departure</li>
                <li>Complete vehicle sanitization inspection before every pickup</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Multi-Step Interactive Booking Card */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-[#DED5C4] bg-[#FAF7F2] p-6 text-[#272923] shadow-2xl sm:p-8">
              {/* Visual 5-Step Progress Indicator */}
              <div className="mb-6 border-b border-[#EAE3D6] pb-5">
                <div className="flex items-center justify-between">
                  {steps.map((st) => {
                    const isCompleted = st.number < currentStep;
                    const isCurrent = st.number === currentStep;
                    return (
                      <div
                        key={st.number}
                        className="flex flex-col items-center flex-1 relative"
                      >
                        {/* Circle Badge */}
                        <button
                          type="button"
                          onClick={() => {
                            if (st.number < currentStep) {
                              setCurrentStep(st.number);
                            }
                          }}
                          disabled={st.number > currentStep}
                          aria-label={`Jump to step ${st.number}`}
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${
                            isCompleted
                              ? "bg-[#17352D] text-white cursor-pointer"
                              : isCurrent
                              ? "border-2 border-[#B99A62] bg-[#B99A62] text-[#12231D] shadow-md"
                              : "border border-[#DED5C4] bg-white text-[#8A8F84]"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 size={16} className="text-[#D4BD8E]" />
                          ) : (
                            st.number
                          )}
                        </button>

                        {/* Step Label */}
                        <span
                          className={`mt-1.5 hidden text-[10px] font-bold uppercase tracking-wider sm:block ${
                            isCurrent
                              ? "text-[#17352D]"
                              : isCompleted
                              ? "text-[#B99A62]"
                              : "text-[#8A8F84]"
                          }`}
                        >
                          {st.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Micro Progress Bar */}
                <div className="mt-4 h-1.5 w-full rounded-full bg-[#EAE3D6] overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#B99A62] to-[#17352D]"
                    initial={{ width: "20%" }}
                    animate={{ width: `${(currentStep / 5) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Validation Warning Notice */}
              {validationError && (
                <div className="mb-4 flex items-center gap-2 rounded-xl border border-rose-300 bg-rose-50 p-3 text-xs text-rose-700">
                  <AlertCircle size={15} className="shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Step Forms with AnimatePresence */}
              <AnimatePresence mode="wait">
                {/* STEP 1: Journey Type & Vehicle */}
                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#17352D]">
                        Step 1: Select Your Journey Type
                      </h3>
                      <p className="mt-0.5 text-xs text-[#52574F]">
                        Choose the travel category that matches your plans.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {tripTypes.map((item) => {
                        const Icon = item.icon;
                        const isSelected = tripType === item.title;
                        return (
                          <button
                            key={item.title}
                            type="button"
                            onClick={() => setTripType(item.title)}
                            className={`flex items-start gap-3 rounded-2xl border p-3.5 text-left transition cursor-pointer ${
                              isSelected
                                ? "border-[#17352D] bg-[#17352D] text-[#FAF7F2] shadow-md"
                                : "border-[#DED5C4] bg-white text-[#272923] hover:border-[#B99A62] hover:bg-[#F6F2E9]"
                            }`}
                          >
                            <div
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                                isSelected
                                  ? "bg-[#B99A62] text-[#12231D]"
                                  : "bg-[#F6F2E9] text-[#17352D]"
                              }`}
                            >
                              <Icon size={16} />
                            </div>
                            <div>
                              <div className="text-xs font-bold">{item.title}</div>
                              <div
                                className={`text-[10px] ${
                                  isSelected ? "text-[#E9E1D3]/80" : "text-[#6C7168]"
                                }`}
                              >
                                {item.sub}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Preferred Vehicle */}
                    <div className="border-t border-[#EAE3D6] pt-4">
                      <label className="block text-xs font-bold text-[#17352D]">
                        Preferred Vehicle Class
                      </label>
                      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {VEHICLE_FLEET.slice(0, 6).map((v) => {
                          const isSel = vehicle === v.name;
                          return (
                            <button
                              key={v.id}
                              type="button"
                              onClick={() => setVehicle(v.name)}
                              className={`rounded-xl border p-2.5 text-left text-xs transition cursor-pointer ${
                                isSel
                                  ? "border-[#B99A62] bg-[#B99A62]/15 font-bold text-[#17352D]"
                                  : "border-[#DED5C4] bg-white text-[#52574F] hover:border-[#B99A62]"
                              }`}
                            >
                              <div className="font-semibold">{v.name}</div>
                              <div className="text-[10px] text-[#6C7168]">{v.seats}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Pickup Details */}
                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#17352D]">
                        Step 2: Pickup Location & Timing
                      </h3>
                      <p className="mt-0.5 text-xs text-[#52574F]">
                        Where and when should our chauffeur report?
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#17352D]">
                        Pickup Location / Address / Airport Terminal *
                      </label>
                      <div className="relative mt-1.5">
                        <MapPin
                          size={16}
                          className="absolute left-3.5 top-3.5 text-[#B99A62]"
                        />
                        <input
                          type="text"
                          required
                          value={pickup}
                          onChange={(e) => setPickup(e.target.value)}
                          placeholder="e.g. Greater Kailash 1 / Delhi Airport T3"
                          className="w-full rounded-xl border border-[#DED5C4] bg-white pl-10 pr-4 py-3 text-sm text-[#17352D] placeholder-[#A0A59B] focus:border-[#B99A62]"
                        />
                      </div>

                      {/* Quick Pickup suggestions */}
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {quickPickups.map((loc) => (
                          <button
                            key={loc}
                            type="button"
                            onClick={() => setPickup(loc)}
                            className="rounded-lg border border-[#DED5C4] bg-white px-2.5 py-1 text-[11px] font-medium text-[#52574F] hover:border-[#B99A62] hover:text-[#17352D] cursor-pointer"
                          >
                            + {loc}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-2">
                      <div>
                        <label className="block text-xs font-bold text-[#17352D]">
                          Travel Date
                        </label>
                        <div className="relative mt-1.5">
                          <input
                            type="date"
                            value={travelDate}
                            onChange={(e) => setTravelDate(e.target.value)}
                            className="w-full rounded-xl border border-[#DED5C4] bg-white px-4 py-2.5 text-xs text-[#17352D] focus:border-[#B99A62]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#17352D]">
                          Pickup Time
                        </label>
                        <div className="relative mt-1.5">
                          <input
                            type="time"
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                            className="w-full rounded-xl border border-[#DED5C4] bg-white px-4 py-2.5 text-xs text-[#17352D] focus:border-[#B99A62]"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Destination & Group */}
                {currentStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#17352D]">
                        Step 3: Destination & Passenger Group
                      </h3>
                      <p className="mt-0.5 text-xs text-[#52574F]">
                        Specify your route stops and party size.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#17352D]">
                        Destination / Route or City
                      </label>
                      <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="e.g. Agra / Jaipur / Delhi NCR Local"
                        className="mt-1.5 w-full rounded-xl border border-[#DED5C4] bg-white px-4 py-3 text-sm text-[#17352D] placeholder-[#A0A59B] focus:border-[#B99A62]"
                      />

                      {/* Quick Destination Suggestions */}
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {quickDestinations.map((dst) => (
                          <button
                            key={dst}
                            type="button"
                            onClick={() => setDestination(dst)}
                            className="rounded-lg border border-[#DED5C4] bg-white px-2.5 py-1 text-[11px] font-medium text-[#52574F] hover:border-[#B99A62] hover:text-[#17352D] cursor-pointer"
                          >
                            + {dst}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#17352D]">
                        Number of Passengers
                      </label>
                      <select
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-[#DED5C4] bg-white px-4 py-2.5 text-xs text-[#17352D] focus:border-[#B99A62]"
                      >
                        {passengerOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#17352D]">
                        Special Notes or Flight Number (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Flight AI-102 arrival at 3:15 AM, extra luggage boot space"
                        className="mt-1.5 w-full rounded-xl border border-[#DED5C4] bg-white px-4 py-2 text-xs text-[#17352D] placeholder-[#A0A59B] focus:border-[#B99A62]"
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Guest Contact Details */}
                {currentStep === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#17352D]">
                        Step 4: Primary Guest Contact Details
                      </h3>
                      <p className="mt-0.5 text-xs text-[#52574F]">
                        We will send driver assignment and fare details here.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#17352D]">
                        Full Name *
                      </label>
                      <div className="relative mt-1.5">
                        <User
                          size={16}
                          className="absolute left-3.5 top-3.5 text-[#B99A62]"
                        />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Vikram Malhotra"
                          className="w-full rounded-xl border border-[#DED5C4] bg-white pl-10 pr-4 py-3 text-sm text-[#17352D] placeholder-[#A0A59B] focus:border-[#B99A62]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#17352D]">
                        Mobile Phone Number (WhatsApp Enabled) *
                      </label>
                      <div className="relative mt-1.5">
                        <Phone
                          size={16}
                          className="absolute left-3.5 top-3.5 text-[#B99A62]"
                        />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98183 XXXXX"
                          className="w-full rounded-xl border border-[#DED5C4] bg-white pl-10 pr-4 py-3 text-sm text-[#17352D] placeholder-[#A0A59B] focus:border-[#B99A62]"
                        />
                      </div>
                      <div className="mt-1 text-[10px] text-[#6C7168]">
                        Used strictly for sending driver details and fare invoice. Zero spam.
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#17352D]">
                        Email Address (Optional for GST Invoice)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="vikram@domain.com"
                        className="mt-1.5 w-full rounded-xl border border-[#DED5C4] bg-white px-4 py-2.5 text-xs text-[#17352D] placeholder-[#A0A59B] focus:border-[#B99A62]"
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: Review & Submit */}
                {currentStep === 5 && (
                  <motion.div
                    key="step-5"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#17352D]">
                        Step 5: Review & Instant Confirmation
                      </h3>
                      <p className="mt-0.5 text-xs text-[#52574F]">
                        Verify your journey parameters before requesting quote.
                      </p>
                    </div>

                    {/* Summary Card */}
                    <div className="rounded-2xl border border-[#DED5C4] bg-white p-4.5 text-xs space-y-2.5">
                      <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-2">
                        <span className="font-bold text-[#17352D]">
                          Reservation Summary
                        </span>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#B99A62] hover:underline cursor-pointer"
                        >
                          <Edit2 size={11} />
                          <span>Edit</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[#383C36]">
                        <div>
                          <span className="text-[#6C7168] block text-[10px] uppercase">Guest</span>
                          <strong className="text-[#17352D]">{fullName || "Not specified"}</strong>
                        </div>
                        <div>
                          <span className="text-[#6C7168] block text-[10px] uppercase">Phone</span>
                          <strong className="text-[#17352D]">{phone || "Not specified"}</strong>
                        </div>
                        <div>
                          <span className="text-[#6C7168] block text-[10px] uppercase">Service</span>
                          <span>{tripType}</span>
                        </div>
                        <div>
                          <span className="text-[#6C7168] block text-[10px] uppercase">Vehicle</span>
                          <span>{vehicle}</span>
                        </div>
                        <div>
                          <span className="text-[#6C7168] block text-[10px] uppercase">Pickup</span>
                          <span>{pickup || "Not specified"}</span>
                        </div>
                        <div>
                          <span className="text-[#6C7168] block text-[10px] uppercase">Destination</span>
                          <span>{destination || "Delhi NCR Local / Flexible"}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-[#6C7168] block text-[10px] uppercase">Schedule</span>
                          <span>{travelDate || "Immediate / Flexible"} at {pickupTime || "Flexible"} ({passengers})</span>
                        </div>
                      </div>
                    </div>

                    {/* Instant Action CTA Buttons */}
                    <div className="space-y-2.5 pt-2">
                      <button
                        type="button"
                        onClick={() => handleFinalSubmit()}
                        className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#20ba59] active:scale-98 cursor-pointer"
                      >
                        <MessageCircle size={18} />
                        <span>Send Instant Booking via WhatsApp</span>
                      </button>

                      <a
                        href={BUSINESS_DETAILS.phones[0].tel}
                        className="flex w-full items-center justify-center gap-2 rounded-full border border-[#17352D] bg-[#17352D] px-6 py-3 text-xs font-bold text-[#FAF7F2] transition hover:bg-[#12231D]"
                      >
                        <Phone size={15} className="text-[#D4BD8E]" />
                        <span>Or Call Chauffeur Desk: {BUSINESS_DETAILS.phones[0].display}</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Back / Next Buttons */}
              <div className="mt-6 flex items-center justify-between border-t border-[#EAE3D6] pt-4">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#DED5C4] bg-white px-4 py-2 text-xs font-semibold text-[#17352D] transition hover:bg-[#F6F2E9] cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 5 && (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="inline-flex items-center gap-2 rounded-full bg-[#17352D] px-6 py-2.5 text-xs font-bold text-[#FAF7F2] transition hover:bg-[#12231D] hover:scale-[1.02] active:scale-98 cursor-pointer"
                  >
                    <span>Continue to Step {currentStep + 1}</span>
                    <ArrowRight size={14} className="text-[#D4BD8E]" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
