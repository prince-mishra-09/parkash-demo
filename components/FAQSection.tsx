"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { FAQS, BUSINESS_DETAILS } from "@/lib/business";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string>(FAQS[0]?.id || "");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section
      id="faqs"
      className="relative scroll-mt-20 overflow-hidden bg-[#FAF7F2] py-20 text-[#272923] lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#B99A62]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B99A62] uppercase sm:text-xs">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="h-[2px] w-6 bg-[#B99A62]" />
          </div>

          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#17352D] sm:text-4xl lg:text-5xl">
            Everything You Need <br />
            <span className="font-serif italic text-[#383C36]">
              to Know Before Booking.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-[#52574F] sm:text-base">
            Transparent answers on booking procedures, vehicle standards,
            airport arrivals, and outstation trips with Parkash Tour & Travels.
          </p>
        </div>

        {/* FAQs Accordion — Pure White Cards on Warm Ivory */}
        <div className="mt-14 space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#B99A62] bg-white shadow-md shadow-[#17352D]/5"
                    : "border-[#DED5C4] bg-white hover:border-[#B99A62]/60 hover:bg-[#FAF7F2]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-serif text-sm font-bold text-[#B99A62] sm:text-base">
                      {faq.number}
                    </span>
                    <span className="font-serif text-base font-bold text-[#17352D] sm:text-lg">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DED5C4] bg-[#F6F2E9] text-[#17352D] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#17352D] text-[#FAF7F2]" : ""
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-[#EAE3D6] px-5 pt-3 pb-6 text-xs leading-relaxed text-[#52574F] sm:px-6 sm:text-sm">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Strip in Warm Linen */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#DED5C4] bg-[#F2EDE2]/70 p-6 text-center sm:flex-row sm:text-left">
          <div>
            <div className="font-serif text-base font-bold text-[#17352D]">
              Have a custom itinerary or specific corporate query?
            </div>
            <div className="text-xs text-[#6C7168]">
              Our Greater Kailash dispatch managers are on duty 24/7 to assist.
            </div>
          </div>

          <a
            href={`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}?text=${encodeURIComponent(
              "Hello Parkash Tour & Travels, I have a specific question about an upcoming trip."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#DED5C4] bg-white px-5 py-2.5 text-xs font-bold text-[#17352D] shadow-xs transition hover:border-[#17352D] hover:bg-[#FAF7F2]"
          >
            <MessageCircle size={15} className="text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
