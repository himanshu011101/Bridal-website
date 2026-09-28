/**
 * Studio Configuration & Content Data
 * Business owners can easily customize names, pricing, services, and photography here.
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: 'bridal' | 'occasion' | 'technique' | 'styling';
  subtitle: string;
  description: string;
  duration: string;
  startingPrice: string;
  priceValue: number;
  image: string;
  includes: string[];
}

export interface BridalPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  featured?: boolean;
  idealFor: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'BRIDAL' | 'ENGAGEMENT' | 'RECEPTION' | 'PARTY' | 'HAIR';
  aspect: 'portrait' | 'landscape' | 'square';
  image: string;
  caption: string;
  client: string;
  location: string;
}

export interface TestimonialItem {
  id: string;
  brideName: string;
  eventType: string;
  weddingLocation: string;
  review: string;
  rating: number;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const STUDIO_CONFIG = {
  brandName: 'ÉLAN BRIDAL',
  tagline: 'BRIDAL BEAUTY STUDIO',
  artistName: 'Ananya Roy',
  artistTitle: 'Founder & Master Bridal Artist',
  experienceYears: '12+',
  bridesCount: '850+',
  city: 'New Delhi & Mumbai',
  address: 'Suite 402, The Heritage Galleria, Defence Colony, New Delhi',
  phone: '+91 98112 34567',
  whatsappNumber: '919811234567',
  email: 'concierge@elanbridal.com',
  instagram: '@elanbridal.studio',
  hours: 'Tuesday – Sunday: 9:00 AM – 7:30 PM (Mondays by Private Appointment)',
  bookingNotice: 'Currently accepting bookings for 2026–2027 wedding seasons.',
  currencySymbol: '₹',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'bridal-signature',
    name: 'Bridal Makeup',
    category: 'bridal',
    subtitle: 'The timeless wedding day signature',
    description: 'A bespoke bridal beauty experience tailored to your skin tone, wedding attire, jewellery, and personal aesthetic. Designed for 16-hour camera-ready perfection under high-intensity lighting.',
    duration: '3.0 Hours',
    startingPrice: '₹35,000',
    priceValue: 35000,
    image: '/src/assets/images/service_bridal_glam_1790617779485.jpg',
    includes: [
      'Comprehensive skin prep & luxury hydra-infusion',
      'Customized HD or Airbrush base formulation',
      'Handcrafted mink or cruelty-free silk lash application',
      'Precision lip contouring & bespoke color blend',
      'Setting for all-day humidity & tear-proof wear'
    ]
  },
  {
    id: 'engagement-look',
    name: 'Engagement & Sagan Makeup',
    category: 'occasion',
    subtitle: 'Ethereal romantic radiance',
    description: 'Soft, luminous glam highlighting your natural features with delicate shimmer, sculpted cheekbones, and romantic fluttery lashes for your pre-wedding celebrations.',
    duration: '2.5 Hours',
    startingPrice: '₹24,000',
    priceValue: 24000,
    image: '/src/assets/images/service_reception_look_1790617790959.jpg',
    includes: [
      'Glass-skin priming & botanical face misting',
      'Illuminating dewy or velvet matte foundation',
      'Soft smoky or champagne shimmer eye styling',
      'Complementary false lash installation'
    ]
  },
  {
    id: 'reception-evening',
    name: 'Reception & Cocktail Glam',
    category: 'occasion',
    subtitle: 'High-fashion editorial drama',
    description: 'Sculptural elegance suited for evening chandeliers and ballroom celebrations. Features defined eyes, sophisticated contouring, and luminous glow that commands attention.',
    duration: '2.5 Hours',
    startingPrice: '₹26,000',
    priceValue: 26000,
    image: '/src/assets/images/service_reception_look_1790617790959.jpg',
    includes: [
      'High-impact eye makeup (winged, halo or smoked)',
      'Sculpted cream & powder contouring',
      'Long-wearing velvet lip formulation',
      'Highlighter mapping for 360-degree photography'
    ]
  },
  {
    id: 'party-makeup',
    name: 'Party & Bridesmaid Makeup',
    category: 'occasion',
    subtitle: 'Refined beauty for loved ones',
    description: 'Polished, sophisticated makeup curated for mothers of the bride, sisters, and bridesmaids that harmonizes seamlessly with the wedding party palette.',
    duration: '1.5 Hours',
    startingPrice: '₹14,000',
    priceValue: 14000,
    image: '/src/assets/images/service_bridal_glam_1790617779485.jpg',
    includes: [
      'Fresh skin preparation and tone correction',
      'Subtle eye styling and mascara enhancement',
      'Natural glow blush and lip tint',
      'Setting mist for 10-hour wear'
    ]
  },
  {
    id: 'hd-makeup',
    name: 'High-Definition (HD) Makeup',
    category: 'technique',
    subtitle: 'Micro-pigment seamless camera finish',
    description: 'Crafted using micronized light-diffusing formulas designed to look invisible to 4K/8K cinematography while providing flawless skin texture in person.',
    duration: '2.5 Hours',
    startingPrice: '₹28,000',
    priceValue: 28000,
    image: '/src/assets/images/hero_indian_bride_luxury_1790617767266.jpg',
    includes: [
      'Ultra-fine pigment dispersion',
      'Optical pore-blurring and texture refinement',
      'Zero flashback guarantee under flash photography',
      'Lightweight non-cakey formula'
    ]
  },
  {
    id: 'airbrush-makeup',
    name: 'Airbrush Bridal Makeup',
    category: 'technique',
    subtitle: 'Featherlight waterproof perfection',
    description: 'Microspray cosmetic application creating a delicate, poreless veil. Highly recommended for destination weddings, humid climates, and outdoor ceremonies.',
    duration: '2.5 Hours',
    startingPrice: '₹32,000',
    priceValue: 32000,
    image: '/src/assets/images/service_bridal_glam_1790617779485.jpg',
    includes: [
      'Temptu pro-grade airbrush application',
      '100% silicone-based water and tear resistance',
      'Ultra-hygienic non-contact mist technique',
      'Impeccable transfer-resistant staying power'
    ]
  },
  {
    id: 'bridal-hair',
    name: 'Bridal Couture Hairstyling',
    category: 'styling',
    subtitle: 'Architectural bridal coiffure',
    description: 'From romantic textured low buns adorned with fresh jasmine and baby’s breath to Hollywood waves and traditional embellished South Indian jadas.',
    duration: '2.0 Hours',
    startingPrice: '₹16,000',
    priceValue: 16000,
    image: '/src/assets/images/portfolio_hair_styling_1790617804299.jpg',
    includes: [
      'Hair padding, volume extensions & texturizing prep',
      'Real flower or floral jewelry setting',
      'Mathapatti and maang tikka micro-pinning',
      'High-grade anti-humidity finishing seal'
    ]
  },
  {
    id: 'saree-draping',
    name: 'Couture Saree & Dupatta Draping',
    category: 'styling',
    subtitle: 'Sculptural pleating & veil placement',
    description: 'Master draping for Kanjeevaram silk sarees, Banarasi weaves, and double bridal dupattas (shoulder veil & head sheer) with weightless balance and symmetry.',
    duration: '45 Minutes',
    startingPrice: '₹6,000',
    priceValue: 6000,
    image: '/src/assets/images/portfolio_hair_styling_1790617804299.jpg',
    includes: [
      'Ironing and crisp steam-pleat preparation',
      'Safety-pin concealment with fabric protection',
      'Weight-balanced head dupatta anchoring',
      'Comfort-tested walking and sitting security'
    ]
  }
];

export const PACKAGES: BridalPackage[] = [
  {
    id: 'package-essential',
    name: 'The Essential',
    tagline: 'Classic bridal radiance for intimate celebrations',
    price: '₹48,000',
    idealFor: 'Intimate ceremonies & morning weddings',
    features: [
      'Signature Bridal Makeup (HD Finish)',
      'Couture Bridal Hairstyling & Hair Prep',
      'Traditional or Modern Saree / Dupatta Draping',
      'Pre-Wedding Virtual Consultation (30 mins)',
      'Full False Lash Application & Custom Lip Blend',
      'Basic Touch-up Essentials Kit'
    ]
  },
  {
    id: 'package-signature',
    name: 'The Signature',
    tagline: 'Our most sought-after full bridal experience',
    price: '₹72,000',
    featured: true,
    idealFor: 'Grand weddings & destination celebrations',
    features: [
      'Complete Luxury Bridal Makeup (Choice of HD or Airbrush)',
      'Master Bridal Hair Artistry with Real Floral Setting',
      'Double Dupatta or Couture Saree Pleating & Anchoring',
      'Dedicated 90-Minute In-Studio Makeup Trial Session',
      'Luxury Skincare Prep with Face Massaging & Hydration Veil',
      'Deluxe Bridal Touch-up Vanity Kit with Full-Size Lip Color',
      'On-site Artist Assistance through ceremony photograph session'
    ]
  },
  {
    id: 'package-luxe',
    name: 'The Luxe Experience',
    tagline: 'The ultimate bespoke bridal entourage luxury',
    price: '₹1,15,000',
    idealFor: 'Multi-day celebrations & royal palace weddings',
    features: [
      'Senior Master Artist Ananya Roy dedicated exclusively to you',
      'Complete Bridal Makeup with Custom Airbrush Technique',
      'Two Hair & Makeup Transformations (e.g. Phere to Reception)',
      'Comprehensive In-Studio Trial with Full Wardrobe Test',
      'Complimentary Mother of the Bride Makeup & Styling',
      'Pre-Wedding Skin Wellness & Regime Consultation',
      'All-Day Venue Escort & Touch-up Suite Service',
      'Complimentary Luxury Bridal Robe & Vanity Gift Box'
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Heritage Kundan Bride',
    category: 'BRIDAL',
    aspect: 'portrait',
    image: '/src/assets/images/hero_indian_bride_luxury_1790617767266.jpg',
    caption: 'Deep crimson velvet lehenga complemented by warm champagnes and a soft rose petal pout.',
    client: 'Meera Kapoor',
    location: 'Taj Lake Palace, Udaipur'
  },
  {
    id: 'port-2',
    title: 'Dewy Rose Gold Bridal Glam',
    category: 'BRIDAL',
    aspect: 'square',
    image: '/src/assets/images/service_bridal_glam_1790617779485.jpg',
    caption: 'Micro-pigment skin perfection with soft smoky rose-bronze eyes and vintage polki jewellery.',
    client: 'Rhea Singhania',
    location: 'The Oberoi, New Delhi'
  },
  {
    id: 'port-3',
    title: 'Champagne Reception Elegance',
    category: 'RECEPTION',
    aspect: 'landscape',
    image: '/src/assets/images/service_reception_look_1790617790959.jpg',
    caption: 'Effortless Hollywood waves paired with glistening champagne shimmer and emerald drop jewels.',
    client: 'Tarana Varma',
    location: 'St. Regis, Mumbai'
  },
  {
    id: 'port-4',
    title: 'Romantic Textured Jasmine Hair',
    category: 'HAIR',
    aspect: 'portrait',
    image: '/src/assets/images/portfolio_hair_styling_1790617804299.jpg',
    caption: 'Handcrafted bridal updo interwoven with baby’s breath and fresh Mogra blooms.',
    client: 'Anushka Nair',
    location: 'Kumarakom Lake Resort, Kerala'
  },
  {
    id: 'port-5',
    title: 'Modern Sangeet Radiance',
    category: 'PARTY',
    aspect: 'square',
    image: '/src/assets/images/service_reception_look_1790617790959.jpg',
    caption: 'Vibrant celebratory makeup with high-reflect pigments that move effortlessly under festive lights.',
    client: 'Sanya Bajaj',
    location: 'ITC Grand Bharat, Gurugram'
  },
  {
    id: 'port-6',
    title: 'Sunrise Anand Karaj Look',
    category: 'ENGAGEMENT',
    aspect: 'landscape',
    image: '/src/assets/images/hero_indian_bride_luxury_1790617767266.jpg',
    caption: 'Pastel peach hues and dewy daylight radiance for a morning holy ceremony.',
    client: 'Harpreet Kaur',
    location: 'Amritsar'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    brideName: 'Aanya Malhotra-Kapoor',
    eventType: 'Traditional Hindu Wedding & Reception',
    weddingLocation: 'The Leela Palace, Udaipur',
    review: 'Ananya and her team were the calm in what could have been a hectic morning. My bridal makeup looked just as radiant at 2 AM after 8 hours of dancing as it did during my 4 PM golden hour portraits. Everyone remarked how my skin looked like glowing velvet rather than heavy layers.',
    rating: 5,
    date: 'February 2026'
  },
  {
    id: 'test-2',
    brideName: 'Dr. Sunaina Rao',
    eventType: 'Destination Wedding',
    weddingLocation: 'Raffles, Jaipur',
    review: 'As someone who rarely wears makeup, I was terrified of looking unrecognizable on my wedding day. Ananya listened intently during our trial and sculpted a look that accentuated my features naturally while staying true to my South Indian bridal heritage. Worth every single penny.',
    rating: 5,
    date: 'January 2026'
  },
  {
    id: 'test-3',
    brideName: 'Priyanka Sehgal',
    eventType: 'Cocktail & Wedding Weekend',
    weddingLocation: 'JW Marriott Mussoorie',
    review: 'The airbrush makeup survived the mountain mist and temperature drops without a single crease. Her hair team pinned my double dupatta so securely I forgot I was wearing 4 kilograms of embroidery on my head. Absolute masters of their craft.',
    rating: 5,
    date: 'December 2025'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How far in advance should I book my bridal makeup?',
    answer: 'We recommend booking 4 to 8 months in advance, especially for popular auspicious dates during the October through March wedding season. We only take a maximum of one to two brides per date to ensure complete, uninterrupted focus.'
  },
  {
    id: 'faq-2',
    question: 'Do you offer makeup trials?',
    answer: 'Yes! We strongly believe in trial sessions. During your 90-minute trial at our studio, we test foundation tones, eye styles, and contouring alongside photos of your bridal outfit and jewellery to ensure perfection before the big day.'
  },
  {
    id: 'faq-3',
    question: 'Do you travel to the wedding venue or destination?',
    answer: 'Yes, our team travels globally for destination weddings across India, Southeast Asia, Europe, and the Middle East. Travel arrangements and accommodations are coordinated with your wedding planning team.'
  },
  {
    id: 'faq-4',
    question: 'What luxury products do you use in your kit?',
    answer: 'Our professional kit is exclusively stocked with international prestige beauty brands including Charlotte Tilbury, Dior Backstage, Tom Ford, NARS, Bobbi Brown, Pat McGrath Labs, Huda Beauty, and Temptu Pro Airbrush. Every tool is sterilized before each bride.'
  },
  {
    id: 'faq-5',
    question: 'How long does bridal makeup take on the wedding day?',
    answer: 'A comprehensive bridal look (makeup, hair styling, skin prep, and dupatta draping) takes approximately 2.5 to 3 hours. We schedule ample buffer time so that you never feel rushed before your photographer arrives.'
  },
  {
    id: 'faq-6',
    question: 'Do you provide professional hairstyling?',
    answer: 'Yes, our packages include full couture bridal hairstyling. Our master hair artists specialize in intricate floral braids, romantic texturized chignons, traditional jadas, and voluminous Hollywood waves with high-grade extensions.'
  },
  {
    id: 'faq-7',
    question: 'Do you offer saree and dupatta draping?',
    answer: 'Yes, master draping is an essential component of our bridal services. We ensure your dupattas and saree pleats are securely pinned, weight-balanced, and engineered for effortless movement and posture throughout the ceremony.'
  },
  {
    id: 'faq-8',
    question: 'What is your cancellation policy?',
    answer: 'Due to our exclusive single-bride booking policy, retainers are non-refundable. However, should your wedding date shift due to unforeseen circumstances, we will do our best to transfer your retainer to a mutually available date within 12 months.'
  },
  {
    id: 'faq-9',
    question: 'Is a booking deposit required to secure the date?',
    answer: 'Yes, a 40% non-refundable retainer along with a signed service agreement is required to formally secure your wedding date on our calendar. The balance is payable one week prior to the wedding event.'
  }
];
