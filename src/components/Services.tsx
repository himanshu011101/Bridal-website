import React, { useState } from 'react';
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/studioData';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'bridal', label: 'Bridal Signature' },
    { id: 'occasion', label: 'Pre-Wedding & Occasion' },
    { id: 'technique', label: 'HD & Airbrush' },
    { id: 'styling', label: 'Hair & Draping' },
  ];

  return (
    <section id="services" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#8E6822] uppercase">
              BESPOKE BEAUTY ARCHITECTURE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#211A17] font-normal tracking-tight mb-5">
            Beauty, Tailored to You
          </h2>
          <p className="text-base sm:text-lg text-[#5C4F49] font-light leading-relaxed">
            Every bridal look is customized according to the bride’s features, skin tone, wedding outfit, lighting conditions, and distinctive personal style.
          </p>

          {/* Interactive Category Segmented Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 border rounded-full ${
                  selectedCategory === cat.id
                    ? 'bg-[#211A17] text-[#FAF7F2] border-[#211A17] shadow-sm'
                    : 'bg-transparent text-[#5C4F49] border-[#EADBC8] hover:border-[#8E6822] hover:text-[#211A17]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Service Grid (Large Image Blocks with Refined Typography) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col bg-white border border-[#EADBC8]/70 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_12px_32px_rgba(33,26,23,0.08)] hover:-translate-y-1"
            >
              {/* Image Container with Smooth Zoom Effect */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5EFEB]">
                <img
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Duration Floating Badge */}
                <div className="absolute top-3 right-3 bg-[#211A17]/80 backdrop-blur-sm text-[#FAF7F2] text-[11px] font-medium px-2.5 py-1 rounded-sm flex items-center gap-1.5 shadow-sm">
                  <Clock className="w-3 h-3 text-[#C5A059]" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold tracking-widest text-[#8E6822] uppercase block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#211A17] font-medium mb-2.5 transition-colors group-hover:text-[#8E6822]">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4F49] font-light leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Price and Action */}
                <div className="pt-4 border-t border-[#EADBC8]/50 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8C7A72] block">
                      Starting from
                    </span>
                    <span className="font-serif text-lg sm:text-xl font-medium text-[#211A17] tabular-nums">
                      {service.startingPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#8E6822] hover:text-[#211A17] transition-colors group-hover:translate-x-0.5"
                    aria-label={`Book ${service.name}`}
                  >
                    <span>Book Now</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
