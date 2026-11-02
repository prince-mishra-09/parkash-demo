import type { Metadata, Viewport } from "next";
import "./compiled-tailwind.css";
import "./globals.css";
import { BUSINESS_DETAILS } from "@/lib/business";

export const viewport: Viewport = {
  themeColor: "#17352D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title:
    "Parkash Tour & Travels Private Limited | Premium Luxury Chauffeur & Travel Agency New Delhi",
  description:
    "Official website of Parkash Tour & Travels Private Limited, Greater Kailash, New Delhi. Premium chauffeur-driven car rentals, Delhi IGI airport transfers, executive corporate travel, and outstation road trips to Agra, Jaipur, Rishikesh, Shimla & Manali. Rated 4.9/5 with 2,315+ Google reviews. 24/7 service. Call +91 98183 76653.",
  keywords: [
    "Parkash Tour & Travels Private Limited",
    "Parkash Tour & Travels",
    "Prakash Tour & Travels Greater Kailash",
    "luxury taxi service South Delhi",
    "chauffeur driven car rental Delhi",
    "Delhi airport transfer cab",
    "outstation taxi Delhi to Agra",
    "Delhi to Jaipur cab service",
    "Innova Crysta car hire Delhi",
    "corporate car rental South Delhi",
    "car rental with driver Delhi",
    "travel agency Greater Kailash",
    "24 hours taxi service Delhi NCR",
  ],
  authors: [{ name: "Parkash Tour & Travels Private Limited" }],
  publisher: "Parkash Tour & Travels Private Limited",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Parkash Tour & Travels Private Limited | Luxury Chauffeur & Travel Agency",
    description:
      "Discover comfortable, reliable and thoughtfully planned travel experiences with Parkash Tour & Travels Private Limited. 4.9/5 rating on Google with 2,315+ reviews. 24/7 service across Delhi NCR & Outstation.",
    url: "/",
    siteName: "Parkash Tour & Travels Private Limited",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    name: BUSINESS_DETAILS.name,
    alternateName: [
      BUSINESS_DETAILS.brandName,
      "Prakash Tour & Travels Private Limited",
    ],
    description:
      "Premium chauffeur-driven car rentals, airport transfers, corporate mobility, and luxury outstation tours from Greater Kailash, New Delhi.",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=85&w=1200",
    telephone: BUSINESS_DETAILS.phones[0].display,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "G, Lower Ground Floor, 27, Bodofa Upendra Nath Brahma Road, Sector 4, Greater Kailash",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110048",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.5535",
      longitude: "77.2405",
    },
    url: "https://maps.app.goo.gl/uQNUiqwXn64aPS2j7",
    hasMap: BUSINESS_DETAILS.googleMapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2315",
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "₹₹ - Luxury & Executive Travel at Transparent Rates",
    areaServed: BUSINESS_DETAILS.serviceRegions.map((region) => ({
      "@type": "Place",
      name: region,
    })),
  };

  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#272923] selection:bg-[#B99A62] selection:text-white">
        {children}
      </body>
    </html>
  );
}
