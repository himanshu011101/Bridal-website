import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/studioData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#8E6822] uppercase block mb-3">
            KIND WORDS & MEMORIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#211A17] font-normal tracking-tight mb-4">
            Words From Our Brides
          </h2>
          <p className="text-base sm:text-lg text-[#5C4F49] font-light leading-relaxed">
            Real stories and reflections from women who entrusted their most celebrated day to our hands.
          </p>
        </div>

        {/* Editorial Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between p-8 sm:p-10 bg-white border border-[#EADBC8] rounded-sm shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Subtle Quote Symbol */}
              <Quote className="w-8 h-8 text-[#C5A059]/40 mb-4 stroke-[1.2]" />

              <div className="mb-6 flex-1">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#C5A059]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] stroke-none" />
                  ))}
                </div>

                <p className="font-serif text-base sm:text-lg text-[#211A17] font-light leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EADBC8]/50">
                <h4 className="font-serif text-lg text-[#211A17] font-medium">
                  {item.brideName}
                </h4>
                <div className="text-xs text-[#8E6822] font-medium tracking-wide mt-0.5">
                  {item.eventType}
                </div>
                <div className="text-[11px] text-[#8C7A72] font-light mt-0.5">
                  {item.weddingLocation} • {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
