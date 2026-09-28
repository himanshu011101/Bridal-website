import React from 'react';
import { Award, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Decorative Framed Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle vintage border frame */}
              <div className="absolute -inset-3 border border-[#B68D40]/30 rounded-sm pointer-events-none translate-x-2 translate-y-2 hidden sm:block" />

              <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-[#EADBC8] shadow-[0_16px_40px_rgba(33,26,23,0.12)]">
                <img
                  src="/src/assets/images/artist_portrait_luxury_17906177817880.jpg"
                  onError={(e) => {
                    // Fallback to the generated portrait if path timestamp matched
                    (e.currentTarget as HTMLImageElement).src = '/src/assets/images/artist_portrait_luxury_1790617817880.jpg';
                  }}
                  alt={`${STUDIO_CONFIG.artistName} - Master Bridal Makeup Artist`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Artist Experience Capsule */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#211A17] text-[#FAF7F2] p-5 rounded-sm shadow-xl border border-[#C5A059]/40 max-w-[220px]">
                <div className="flex items-center gap-2 text-[#C5A059] mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-semibold font-sans">
                    EDITORIAL MASTER
                  </span>
                </div>
                <p className="font-serif text-2xl font-normal leading-tight">
                  12+ Years
                </p>
                <p className="text-[11px] text-[#E0D4C8] font-light mt-0.5">
                  Over 850+ discerning couture brides worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#8E6822] uppercase block mb-3">
              MEET THE ARTIST & PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#211A17] font-normal tracking-tight mb-6">
              Beauty That Feels Like You
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#5C4F49] font-light leading-relaxed">
              <p>
                A wedding is not the occasion to look like a stranger wearing an impenetrable mask. It is the sacred, celebratory threshold where your most radiant, elevated self deserves to be unveiled.
              </p>
              <p>
                Founded by master beauty artist <strong className="font-medium text-[#211A17]">{STUDIO_CONFIG.artistName}</strong>, Élan Bridal was born from a singular passion: marrying editorial finesse with the deep sentimental heritage of traditional Indian ceremonies. Trained in London and Paris with over a decade of high-fashion bridal experience, Ananya approaches each bride as a living canvas.
              </p>
              <p>
                From analyzing the exact undertones of your gold jewellery and the embroidery weight of your lehenga to curating customized skincare infusions days prior, every brushstroke is intentional. We don’t just apply makeup—we craft an atmosphere of calm, joy, and uncompromising luxury so you can walk down the aisle feeling utterly unshakeable.
              </p>
            </div>

            {/* Core Values 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#EADBC8]/70">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#8E6822] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-[#211A17] font-medium">Bespoke Skin Calibration</h4>
                  <p className="text-xs text-[#5C4F49] font-light mt-1">Formulations customized to resist humidity and 16-hour ceremonial lighting.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#8E6822] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-[#211A17] font-medium">Stress-Free Sanctum</h4>
                  <p className="text-xs text-[#5C4F49] font-light mt-1">A serene, unhurried suite atmosphere where you are pampered from dawn to dusk.</p>
                </div>
              </div>
            </div>

            {/* Handwritten Style Signature */}
            <div className="mt-10 pt-4 flex flex-col items-start">
              <span className="font-serif text-sm italic text-[#8C7A72]">
                With love & reverence,
              </span>
              <span className="font-serif text-3xl sm:text-4xl text-[#211A17] italic font-normal mt-1 tracking-wide">
                {STUDIO_CONFIG.artistName}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#8E6822] mt-0.5 font-medium">
                Founder, Élan Bridal Studio
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
