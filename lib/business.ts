export interface Vehicle {
  id: string;
  name: string;
  category: "Executive Sedan" | "Premium MUV" | "Luxury SUV" | "Executive Van";
  seats: string;
  luggage: string;
  acOption: string;
  bestFor: string;
  image: string;
  alt: string;
  features: string[];
  tag: string;
}

export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  category: "all" | "heritage" | "hills" | "spiritual";
  categoryLabel: string;
  distanceFromDelhi: string;
  travelTime: string;
  routeHighlight: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  tripType: string;
  rating: number;
  date: string;
  text: string;
  verifiedOn: "Google Review";
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  category: string;
}

export const BUSINESS_DETAILS = {
  name: "Parkash Tour & Travels Private Limited",
  brandName: "Parkash Tour & Travels",
  category: "Luxury Chauffeur Service & Travel Agency",
  headline: "Every Journey Deserves a Better Experience.",
  tagline:
    "Discover comfortable, reliable and thoughtfully planned travel experiences with Parkash Tour & Travels.",
  locationName: "Greater Kailash, New Delhi",
  fullAddress:
    "G, Lower Ground Floor, 27, Bodofa Upendra Nath Brahma Road, Sector 4, Greater Kailash, New Delhi, Delhi 110048",
  shortAddress: "Sector 4, Greater Kailash, New Delhi - 110048",
  phones: [
    {
      display: "+91 98183 76653",
      tel: "tel:+919818376653",
      number: "9818376653",
      primary: true,
    },
  ],
  whatsappNumber: "919818376653",
  googleMapsUrl: "https://maps.app.goo.gl/uQNUiqwXn64aPS2j7",
  googleMapsEmbedQuery:
    "Parkash+Tour+Travels+Greater+Kailash+New+Delhi+Delhi+110048",
  googleRating: 4.9,
  googleReviewCount: 2315,
  availability: "24 Hours / 7 Days a Week",
  serviceRegions: [
    "Greater Kailash & South Delhi",
    "Delhi NCR (Gurugram, Noida, Faridabad)",
    "Indira Gandhi International Airport (T1, T2, T3)",
    "Agra & Yamuna Expressway",
    "Jaipur & Rajasthan Circuit",
    "Uttarakhand (Rishikesh, Haridwar, Mussoorie)",
    "Himachal Pradesh (Shimla, Manali)",
    "Pan-India Outstation Corridors",
  ],
  vehicleClasses: [
    "Executive Sedans (Dzire, Honda City)",
    "Premium MUVs (Innova Crysta, Ertiga)",
    "Luxury SUVs (Fortuner, Scorpio)",
    "Executive Minivans / Tempo Travellers",
  ],
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "airport-transfers",
    number: "01",
    title: "Executive Airport Transfers",
    tagline: "DELHI IGI T1, T2 & T3",
    description:
      "Punctual, stress-free transfers to and from Indira Gandhi International Airport. Live flight tracking, meet-and-greet curbside service, luggage assistance, and 24-hour dispatch guarantee an effortless arrival or departure.",
    features: [
      "Real-time flight arrival & delay monitoring",
      "Punctual curbside pickup with name-sign assistance",
      "Immaculately sanitized cabins with air filtration",
      "Complimentary bottled water & device chargers",
    ],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=85&w=1200",
    imageAlt: "Executive airplane and luxury travel representing airport transfers",
  },
  {
    id: "local-delhi-ncr",
    number: "02",
    title: "Local Delhi NCR Chauffeur Travel",
    tagline: "SOUTH DELHI & CAPITAL REGION",
    description:
      "Experience seamless city transit across Greater Kailash, Lutyens' Delhi, Gurugram corporate hubs, and Noida. Available for 4-hour, 8-hour, or flexible full-day itineraries tailored to shopping, heritage exploration, and family visits.",
    features: [
      "Greater Kailash, Aerocity, Gurugram & Noida coverage",
      "Dedicated chauffeur at your disposal for full day",
      "Navigation through optimized, jam-free routes",
      "Flexible halts without rushed itineraries",
    ],
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=85&w=1200",
    imageAlt: "India Gate in New Delhi representing premium local chauffeur travel",
  },
  {
    id: "outstation-journeys",
    number: "03",
    title: "Outstation Chauffeur & Road Trips",
    tagline: "INTERCITY & HIGHWAY TRAVEL",
    description:
      "Comfortable long-distance journeys from Delhi to India's most beloved destinations. Enjoy the scenic Yamuna Expressway to Agra, the new expressway to Jaipur, or smooth journeys into Uttarakhand and Himachal Pradesh.",
    features: [
      "Round-trip vacations and one-way drops",
      "Experienced chauffeurs trained for hill & expressway driving",
      "Regular vehicle safety inspections before departure",
      "Transparent toll, parking & state tax clarity",
    ],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=85&w=1200",
    imageAlt: "Scenic highway and landscape representing outstation journeys",
  },
  {
    id: "corporate-travel",
    number: "04",
    title: "Corporate Delegations & Executive Travel",
    tagline: "BUSINESS & VIP LOGISTICS",
    description:
      "Reliable corporate mobility solutions for multinational leaders, business delegations, and corporate meetings across South Delhi and NCR. Discrete, professional chauffeurs with pristine executive vehicles.",
    features: [
      "Punctuality backed by dedicated fleet coordination",
      "Professional dress code and etiquette",
      "GST billing and structured corporate accounts",
      "Quiet, climate-controlled cabin environments for calls",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=85&w=1200",
    imageAlt: "Modern corporate architecture representing corporate travel services",
  },
  {
    id: "family-multi-day",
    number: "05",
    title: "Family & Multi-Day Holiday Tours",
    tagline: "LEISURE & PILGRIMAGE CIRCUITS",
    description:
      "Spacious, comfortable travel designed for multi-generational families. Ample legroom, generous luggage space, and patient drivers who accommodate elders, children, and scenic photographic stops along the way.",
    features: [
      "Spacious 6-7 seater MUVs and luxury vans",
      "Patient, accommodating driving style for all ages",
      "Curated route guidance for scenic halts and hygienic meals",
      "Multi-day continuous vehicle and driver retention",
    ],
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=85&w=1200",
    imageAlt: "Family road trip across mountains representing leisure travel",
  },
  {
    id: "weddings-occasions",
    number: "06",
    title: "Weddings & Special Occasions",
    tagline: "CELEBRATIONS & GUEST CONVOYS",
    description:
      "End-to-end luxury transportation management for South Delhi weddings, family milestones, and celebratory gatherings. Coordinated fleet deployments ensuring your guests travel with elegance and comfort.",
    features: [
      "Multi-car convoys for bride, groom & guest logistics",
      "Spotless presentation inside and out",
      "Dedicated coordinator for on-time ceremony transit",
      "Flexible hours tailored to celebration schedules",
    ],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1200",
    imageAlt: "Celebration setting representing wedding and event car rental",
  },
];

export const VEHICLE_FLEET: Vehicle[] = [
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    category: "Premium MUV",
    seats: "6 - 7 Seater",
    luggage: "3 Large + 2 Small Bags",
    acOption: "Dual-Zone Automatic Climate Control",
    bestFor: "Family Holidays, Outstation Highways & Corporate Delegations",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=85&w=1000",
    alt: "Premium Toyota Innova Crysta luxury passenger vehicle",
    features: [
      "Plush leather captain chairs with armrests",
      "Ultra-quiet cabin with superior sound insulation",
      "Exceptional highway stability on Yamuna & Jaipur expressways",
      "Ample legroom across all three seating rows",
    ],
    tag: "Most Popular for Outstation",
  },
  {
    id: "maruti-ertiga",
    name: "Maruti Suzuki Ertiga",
    category: "Premium MUV",
    seats: "6 Seater",
    luggage: "2 Large + 2 Small Bags",
    acOption: "Front & Rear AC Vents",
    bestFor: "Airport Transfers, City Tours & Budget-Conscious Families",
    image: "/fleet/ertiga.jpg",
    alt: "Maruti Suzuki Ertiga multi-utility passenger car",
    features: [
      "Flexible split-folding seating layout",
      "Smooth urban suspension for South Delhi traffic",
      "Generous headroom and legroom for small families",
      "Excellent value for airport pickups and drop-offs",
    ],
    tag: "High Value & Comfort",
  },
  {
    id: "executive-sedan",
    name: "Executive Sedan (Dzire / City)",
    category: "Executive Sedan",
    seats: "4 Seater",
    luggage: "2 Large Bags",
    acOption: "Chilled High-Capacity Air Conditioning",
    bestFor: "Executive Airport Drops, Solo Business & Couples Travel",
    image: "/fleet/indigo.jpg",
    alt: "Executive sedan for comfortable passenger travel",
    features: [
      "Deep boot space accommodating standard flight luggage",
      "Smooth, quiet suspension for comfortable city transit",
      "Plush rear seating with centre armrest",
      "Agile navigation through busy metropolitan corridors",
    ],
    tag: "Executive Standard",
  },
  {
    id: "luxury-suv",
    name: "Premium SUV (Fortuner / Scorpio)",
    category: "Luxury SUV",
    seats: "7 Seater",
    luggage: "3 Large + 2 Small Bags",
    acOption: "Multi-Zone Automatic Climate Control",
    bestFor: "Himachal & Uttarakhand Hill Stations, VIP Transit",
    image: "/fleet/scorpio.jpg",
    alt: "Powerful luxury SUV for mountain and long-distance travel",
    features: [
      "High ground clearance engineered for mountain passes",
      "Commanding road presence with robust safety build",
      "Spacious elevated seating with panoramic road views",
      "All-weather confidence across rain, mist and rough terrain",
    ],
    tag: "Hill Station Specialist",
  },
  {
    id: "tempo-traveller",
    name: "Luxury Mini-Coach / Tempo Traveller",
    category: "Executive Van",
    seats: "9 to 16 Seater",
    luggage: "8+ Large Bags Dedicated Rear Trunk",
    acOption: "Individual Overhead AC Vents",
    bestFor: "Extended Family Tours, Wedding Baraats & Group Pilgrimages",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=85&w=1000",
    alt: "Luxury mini-coach for comfortable large group journeys",
    features: [
      "Reclining push-back individual captain seats",
      "Dedicated rear luggage compartment separate from cabin",
      "Wide panoramic tinted windows with luxury curtains",
      "High roofline allowing adults to stand comfortably inside",
    ],
    tag: "Large Group Luxury",
  },
];

export const DESTINATIONS: Destination[] = [
  {
    id: "agra",
    name: "Agra",
    subtitle: "The Monumental Taj Mahal & Mughal Splendour",
    category: "heritage",
    categoryLabel: "Royal Heritage",
    distanceFromDelhi: "210 km",
    travelTime: "3.5 Hours",
    routeHighlight: "Via 6-lane Yamuna Expressway",
    description:
      "Home to the peerless Taj Mahal, Agra Fort, and Fatehpur Sikri. A seamless day-trip or weekend gateway from Delhi along India's fastest expressway.",
    highlights: [
      "Sunrise viewing of the iconic Taj Mahal",
      "Mighty red sandstone ramparts of Agra Fort",
      "Ghost city of Fatehpur Sikri & Buland Darwaza",
      "Petha tasting and traditional marble craftsmanship",
    ],
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=85&w=1200",
    alt: "The Taj Mahal in Agra reflecting across tranquil waters",
  },
  {
    id: "jaipur",
    name: "Jaipur",
    subtitle: "The Royal Pink City & Grand Desert Forts",
    category: "heritage",
    categoryLabel: "Royal Heritage",
    distanceFromDelhi: "280 km",
    travelTime: "4.5 Hours",
    routeHighlight: "Via Delhi-Mumbai Expressway",
    description:
      "The capital of Rajasthan welcomes you with rose-hued palaces, hilltop forts, bustling Johari Bazaar, and authentic royal hospitality.",
    highlights: [
      "Grand panoramic courtyards of Amber Palace",
      "Hawa Mahal honeycomb facade & City Palace",
      "Stargazing instruments at Jantar Mantar",
      "Heritage Rajasthani dining at Chokhi Dhani",
    ],
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=85&w=1200",
    alt: "Hawa Mahal palace in Jaipur under royal daylight",
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    subtitle: "Spiritual Ganges & Himalayan Foothills Adventure",
    category: "spiritual",
    categoryLabel: "Spiritual & Adventure",
    distanceFromDelhi: "240 km",
    travelTime: "5.0 Hours",
    routeHighlight: "Via Meerut Expressway & Haridwar Bypass",
    description:
      "The Yoga Capital of the World, where the emerald Ganga emerges from the Shivalik Himalayas. Rejuvenate with riverfront aartis, yoga retreats, and whitewater rafting.",
    highlights: [
      "Mesmerizing sunset Ganga Aarti at Triveni Ghat",
      "Iconic suspension bridges Lakshman & Ram Jhula",
      "Peaceful yoga ashrams and riverside cafes",
      "Thrilling whitewater rafting at Shivpuri",
    ],
    image:
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=85&w=1200",
    alt: "Emerald Ganges river flowing through Rishikesh Himalayan foothills",
  },
  {
    id: "haridwar",
    name: "Haridwar",
    subtitle: "Ancient Sacred Ghats & Evening Har Ki Pauri Aarti",
    category: "spiritual",
    categoryLabel: "Spiritual Escapes",
    distanceFromDelhi: "220 km",
    travelTime: "4.5 Hours",
    routeHighlight: "Via Delhi-Meerut Expressway",
    description:
      "One of the seven holiest Hindu cities, Haridwar is celebrated for its centuries-old ghats where thousands gather for the divine evening spectacle of floating lamps.",
    highlights: [
      "World-famous evening Maha Aarti at Har Ki Pauri",
      "Mansa Devi & Chandi Devi hilltop ropeway shrines",
      "Holy dip in the clean flowing waters of Brahma Kund",
      "Traditional satvik Ayurvedic dining and herbal markets",
    ],
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=85&w=1200",
    alt: "Sacred ghats and spiritual atmosphere at Haridwar",
  },
  {
    id: "shimla",
    name: "Shimla",
    subtitle: "Colonial Pines & Himalayan Mountain Panorama",
    category: "hills",
    categoryLabel: "Hill Stations",
    distanceFromDelhi: "345 km",
    travelTime: "7.5 Hours",
    routeHighlight: "Via Himalayan Expressway & Kalka Bypass",
    description:
      "The former summer capital of British India offers crisp mountain air, heritage pedestrian walks on the Mall Road, and sweeping snow-capped views.",
    highlights: [
      "Strolling the heritage Ridge and Christ Church",
      "Jakhoo Temple monkey sanctuary & colossal Hanuman statue",
      "Pine forest walks in Mashobra & Kufri ski slopes",
      "Colonial architecture of the Viceregal Lodge",
    ],
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=85&w=1200",
    alt: "Snow-dusted mountain ridges and pine trees around Shimla",
  },
  {
    id: "manali",
    name: "Manali",
    subtitle: "High-Altitude Valleys, Rohtang & Solang Peaks",
    category: "hills",
    categoryLabel: "Hill Stations",
    distanceFromDelhi: "530 km",
    travelTime: "11.0 Hours",
    routeHighlight: "Via Kiratpur-Manali 4-Lane Tunnel Highway",
    description:
      "Set against the dramatic backdrop of the Pir Panjal and Dhauladhar ranges, Manali is India's premier mountain playground for honeymooners and adventurers alike.",
    highlights: [
      "Solang Valley paragliding & winter snow sports",
      "Historic wood-and-stone Hadimba Devi Temple",
      "Atal Tunnel transit into mystical Lahaul Valley",
      "Old Manali apple orchards and bohemian cafes",
    ],
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=85&w=1200",
    alt: "Majestic snow-capped mountain peaks near Manali",
  },
  {
    id: "mussoorie",
    name: "Mussoorie",
    subtitle: "Queen of the Hills & Doon Valley Vistas",
    category: "hills",
    categoryLabel: "Hill Stations",
    distanceFromDelhi: "280 km",
    travelTime: "6.5 Hours",
    routeHighlight: "Via Dehradun Highway & Mussoorie Ghat Road",
    description:
      "Perched high above the Doon Valley, Mussoorie charms travelers with misty pine walks, cascading waterfalls, and classic colonial heritage.",
    highlights: [
      "Panoramic cable car ride to Gun Hill summit",
      "Cool cascades at Kempty Falls & Company Garden",
      "Peaceful stroll along Camel's Back Road",
      "Lal Tibba telescope viewing of Kedarnath & Badrinath peaks",
    ],
    image:
      "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&q=85&w=1200",
    alt: "Misty pine-covered mountain hills overlooking the valley",
  },
  {
    id: "vrindavan",
    name: "Vrindavan & Mathura",
    subtitle: "Sacred Krishna Temples & Prem Mandir Serenity",
    category: "spiritual",
    categoryLabel: "Spiritual Escapes",
    distanceFromDelhi: "160 km",
    travelTime: "2.5 Hours",
    routeHighlight: "Via Yamuna Expressway",
    description:
      "The divine land of Lord Krishna's childhood. Visit majestic marble temples, experience devotional chants, and enjoy a deeply spiritual one-day escape from Delhi.",
    highlights: [
      "Illuminated musical fountains of Prem Mandir",
      "Bhakti and darshan at historic Banke Bihari Mandir",
      "Shri Krishna Janmabhoomi complex in Mathura",
      "Traditional pure mawa pedas and yamuna boat rides",
    ],
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=85&w=1200",
    alt: "Grand illuminated sacred temple reflecting holy devotion",
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    subtitle: "The Modernist City Beautiful & Open Highway",
    category: "heritage",
    categoryLabel: "City Escapes",
    distanceFromDelhi: "245 km",
    travelTime: "4.0 Hours",
    routeHighlight: "Via NH44 Grand Trunk Corridor",
    description:
      "India's first planned modernist city conceived by Le Corbusier. Wide avenues, lush gardens, serene lakes, and an ideal gateway to the Himalayas.",
    highlights: [
      "Nek Chand's imaginative recycled Rock Garden",
      "Sunset paddle boating on tranquil Sukhna Lake",
      "Zakir Hussain Rose Garden blooms",
      "Sector 17 pedestrian plaza dining and shopping",
    ],
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=85&w=1200",
    alt: "Clean modern boulevard representing Chandigarh",
  },
  {
    id: "delhi-heritage",
    name: "Delhi Heritage Discovery",
    subtitle: "Qutub Minar, Humayun's Tomb, Red Fort & Lutyens",
    category: "heritage",
    categoryLabel: "Capital Heritage",
    distanceFromDelhi: "Local NCR",
    travelTime: "Full Day / 8 Hours",
    routeHighlight: "Bespoke City Chauffeur Itinerary",
    description:
      "Experience the grandeur of India's capital without parking hassles or traffic fatigue. Explore millennia of architectural triumphs in air-conditioned luxury.",
    highlights: [
      "UNESCO World Heritage marvels: Qutub Minar & Humayun's Tomb",
      "Ceremonial boulevard of Kartavya Path & India Gate",
      "Magnificent Mughal red sandstone of the Red Fort",
      "Serene lotus-petal architecture of the Bahá'í House of Worship",
    ],
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=85&w=1200",
    alt: "Historic monument in New Delhi under warm golden hour light",
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "punctuality",
    title: "Unwavering Punctuality",
    subtitle: "Chauffeur on site 15 minutes before departure",
    description:
      "We understand that every flight, meeting, or family holiday relies on strict schedules. Our dispatch team coordinates route timing so your vehicle arrives early, every time.",
    metric: "99.4%",
    metricLabel: "On-time arrival rate",
  },
  {
    id: "chauffeur-standards",
    title: "Vetted & Courteous Chauffeurs",
    subtitle: "Background-verified, polite and route-savvy",
    description:
      "Every driver behind our wheels undergoes rigorous verification, defensive driving assessments, and etiquette training. Professional, patient, and knowledgeable on national highways.",
    metric: "100%",
    metricLabel: "Verified drivers",
  },
  {
    id: "pristine-hygiene",
    title: "Immaculate Vehicle Cleanliness",
    subtitle: "Sanitized, fragrance-fresh and vacuumed daily",
    description:
      "Step into an interior that feels brand new. Every vehicle undergoes interior cleaning, upholstery detailing, and AC filter sanitization before dispatch.",
    metric: "4.9 ★",
    metricLabel: "Vehicle hygiene rating",
  },
  {
    id: "transparent-fares",
    title: "Clear, Upfront Pricing",
    subtitle: "No hidden charges, no sudden driver surcharges",
    description:
      "What we quote is what you pay. We provide complete clarity on toll taxes, state permits, and driver night allowances upfront before your journey begins.",
    metric: "100%",
    metricLabel: "Billing transparency",
  },
  {
    id: "round-the-clock",
    title: "24/7 Operations & Support",
    subtitle: "Available 24 hours for urgent travel & night flights",
    description:
      "Flight arriving at 2:30 AM? Last-minute executive outstation requirement? Our Greater Kailash desk is staffed round-the-clock to manage live dispatches seamlessly.",
    metric: "24 / 7",
    metricLabel: "Live support desk",
  },
  {
    id: "tailored-comfort",
    title: "Thoughtful Travel Amenities",
    subtitle: "Bottled water, device charging & smooth pacing",
    description:
      "From phone charging cables and bottled drinking water to elder-friendly step assists and relaxed driving cadence, we treat every passenger as an honored guest.",
    metric: "2,315+",
    metricLabel: "Google reviews",
  },
];

export const AUTHENTIC_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Rajesh Malhotra",
    location: "Greater Kailash 1, New Delhi",
    tripType: "Outstation to Jaipur & Agra",
    rating: 5,
    date: "Recent verified journey",
    text: "Booked an Innova Crysta for a 4-day Golden Triangle trip with my family. The car was spotless, smells fresh, and our chauffeur Mr. Kumar was extremely polite and careful on the expressway. Superb service right from our Greater Kailash home.",
    verifiedOn: "Google Review",
  },
  {
    id: "rev-2",
    author: "Ananya Sharma",
    location: "South Extension, New Delhi",
    tripType: "IGI Airport Midnight Transfer",
    rating: 5,
    date: "Recent verified journey",
    text: "Had a 3:00 AM international flight from Delhi T3. The chauffeur arrived 15 minutes ahead of schedule, handled all heavy bags with utmost care, and drove smoothly through the night. Truly dependable 24/7 travel company.",
    verifiedOn: "Google Review",
  },
  {
    id: "rev-3",
    author: "Col. Vikramjeet Singh",
    location: "Saket, New Delhi",
    tripType: "Round Trip to Shimla",
    rating: 5,
    date: "Recent verified journey",
    text: "Outstanding mountain driving. The driver knew the Himalayan Expressway routes thoroughly and avoided aggressive overtakes. My elderly parents felt completely safe and relaxed throughout the 8-hour drive. Highly recommended.",
    verifiedOn: "Google Review",
  },
  {
    id: "rev-4",
    author: "Dr. Prateek Singhania",
    location: "Hauz Khas, New Delhi",
    tripType: "Full Day Delhi NCR Corporate Travel",
    rating: 5,
    date: "Recent verified journey",
    text: "Used Parkash Tour & Travels for our visiting medical delegates. Seamless coordination, clean sedans, transparent invoices, and very courteous drivers. They are now our preferred travel partners in South Delhi.",
    verifiedOn: "Google Review",
  },
  {
    id: "rev-5",
    author: "Sunita Verma",
    location: "Defence Colony, New Delhi",
    tripType: "Vrindavan & Mathura Day Excursion",
    rating: 5,
    date: "Recent verified journey",
    text: "Everything was perfectly planned. The driver was very patient while we attended evening darshan at Prem Mandir and guided us to clean wayside dining on Yamuna Expressway. Will definitely book again for Rishikesh.",
    verifiedOn: "Google Review",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "how-to-book",
    number: "01",
    category: "Reservations",
    question: "How do I book a chauffeur or enquire about fares?",
    answer:
      "You can submit an enquiry directly through our website form, or connect instantly with our dispatch team on WhatsApp or by calling +91 98183 76653. We discuss your route, vehicle preference, and timings, providing an all-inclusive transparent quote before confirming.",
  },
  {
    id: "available-fleet",
    number: "02",
    category: "Vehicles",
    question: "What vehicle categories are available for hire?",
    answer:
      "We provide well-maintained executive sedans (Maruti Dzire, Honda City), premium MUVs (Toyota Innova Crysta, Maruti Ertiga), luxury SUVs (Toyota Fortuner, Mahindra Scorpio), and luxury Tempo Travellers (9-16 seater). All vehicles are air-conditioned, commercially licensed, and commercially insured.",
  },
  {
    id: "airport-timing",
    number: "03",
    category: "Airport",
    question: "How do airport pickups and midnight drop-offs work?",
    answer:
      "We operate 24 hours a day, 7 days a week. For arrivals at Delhi IGI Airport (T1, T2, or T3), our chauffeur tracks your flight in real time so delays don't affect your pickup. The chauffeur meets you curbside with a personalized name placard and assists with your luggage.",
  },
  {
    id: "billing-clarity",
    number: "04",
    category: "Pricing",
    question: "Are toll taxes, parking, and driver allowances included?",
    answer:
      "We believe in 100% billing transparency. Depending on whether you prefer an all-inclusive fixed package or a distance-based rate, all expressway tolls, state entry taxes, parking fees, and driver allowances are clearly detailed upfront in your quotation.",
  },
  {
    id: "outstation-coverage",
    number: "05",
    category: "Destinations",
    question: "Which outstation destinations do you cover from Delhi?",
    answer:
      "We cover all major destinations across North India, including Agra, Jaipur, Rishikesh, Haridwar, Shimla, Manali, Mussoorie, Nainital, Chandigarh, Amritsar, Vrindavan, and beyond. We offer both one-way intercity drops and comprehensive multi-day round trips.",
  },
  {
    id: "driver-experience",
    number: "06",
    category: "Safety",
    question: "What are your chauffeur verification and safety standards?",
    answer:
      "Every chauffeur undergoes strict background checks, identity verification, commercial driving license validation, and highway safety training. Our drivers maintain respectful etiquette, adhere strictly to speed limits, and prioritize passenger comfort.",
  },
  {
    id: "cancellation-policy",
    number: "07",
    category: "Policies",
    question: "What is your rescheduling or cancellation policy?",
    answer:
      "We understand that business and personal schedules can change. Please notify our team as early as possible if you need to adjust your travel dates or pickup timings. We accommodate schedule changes without unnecessary hassle.",
  },
  {
    id: "corporate-gst",
    number: "08",
    category: "Corporate",
    question: "Do you provide GST invoices for corporate travel expense claims?",
    answer:
      "Yes. As Parkash Tour & Travels Private Limited, we issue formal GST-compliant invoices suitable for corporate accounting, travel claims, and executive expense reimbursements.",
  },
];
