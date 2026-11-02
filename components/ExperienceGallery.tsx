"use client";

import Image from "next/image";

export default function ExperienceGallery() {
  const galleryItems = [
    {
      title: "Yamuna Expressway to Agra",
      category: "Highway Serenity",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=85&w=1200",
      span: "md:col-span-2 md:row-span-2",
      height: "h-72 md:h-full",
    },
    {
      title: "Lutyens' Delhi & Capital Heritage",
      category: "Local NCR",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=85&w=800",
      span: "md:col-span-1",
      height: "h-64",
    },
    {
      title: "Himalayan Ridge & Mountain Highway",
      category: "Shimla & Manali",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=85&w=800",
      span: "md:col-span-1",
      height: "h-64",
    },
    {
      title: "Executive Chauffeur Cabin Comfort",
      category: "Premium Fleet",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=85&w=800",
      span: "md:col-span-1",
      height: "h-64",
    },
    {
      title: "Holy Ganges Riverbanks",
      category: "Rishikesh & Haridwar",
      image:
        "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=85&w=800",
      span: "md:col-span-1",
      height: "h-64",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-20 text-[#272923] lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#B99A62]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B99A62] uppercase sm:text-xs">
                JOURNEY VISUALS
              </span>
            </div>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#17352D] sm:text-4xl lg:text-5xl">
              Memories on the <br />
              <span className="font-serif italic text-[#383C36]">
                Open Road.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-xs text-[#52574F] sm:text-sm">
            Glimpses of tranquil highway journeys, historic landmarks, and the
            peace of mind that comes with professional chauffeur navigation.
          </p>
        </div>

        {/* Gallery Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 md:grid-rows-2">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-3xl border border-[#DED5C4] shadow-xs ${item.span} ${item.height}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12231D]/90 via-[#12231D]/30 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="rounded-full border border-white/20 bg-[#12231D]/80 px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#D4BD8E] backdrop-blur-md">
                  {item.category}
                </span>
                <h3 className="mt-2 font-serif text-base font-bold text-[#FAF7F2] sm:text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
