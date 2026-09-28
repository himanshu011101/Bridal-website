import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/studioData';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['ALL', 'BRIDAL', 'ENGAGEMENT', 'RECEPTION', 'PARTY', 'HAIR'];

  const filteredItems = activeCategory === 'ALL'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
    }
  };

  const currentItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="portfolio" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#8E6822] uppercase block mb-3">
            EDITORIAL ARCHIVE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#211A17] font-normal tracking-tight mb-4">
            Moments We’ve Made Beautiful
          </h2>
          <p className="text-base sm:text-lg text-[#5C4F49] font-light leading-relaxed">
            A visual anthology of royal weddings, intimate morning ceremonies, and high-fashion evening receptions.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 rounded-full border ${
                  activeCategory === cat
                    ? 'bg-[#211A17] text-[#FAF7F2] border-[#211A17] shadow-sm'
                    : 'bg-transparent text-[#5C4F49] border-[#EADBC8] hover:border-[#8E6822] hover:text-[#211A17]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredItems.map((item, index) => {
            // Apply varied aspect classes based on metadata
            const aspectClass = item.aspect === 'portrait'
              ? 'aspect-[3/4]'
              : item.aspect === 'landscape'
              ? 'aspect-[16/10]'
              : 'aspect-square';

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer overflow-hidden rounded-sm bg-[#F5EFEB] shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className={`w-full ${aspectClass} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Editorial Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1815]/90 via-[#1F1815]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold mb-1">
                    {item.category} • {item.location}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#EADBC8] font-light line-clamp-2">
                    {item.caption}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-[#FAF7F2]/80 border-t border-white/20 pt-2">
                    <span className="italic">Bride: {item.client}</span>
                    <span className="inline-flex items-center gap-1 text-[#C5A059]">
                      <Maximize2 className="w-3.5 h-3.5" />
                      View Look
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#17120F]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-[#FAF7F2] hover:text-[#C5A059] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-[#FAF7F2] hover:text-[#C5A059] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-[#FAF7F2] hover:text-[#C5A059] p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
          >
            <div className="relative rounded-sm overflow-hidden max-h-[75vh] shadow-2xl bg-black">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Caption Panel */}
            <div className="mt-4 text-center max-w-xl px-4">
              <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] mb-1">
                <span>{currentItem.category}</span>
                <span>•</span>
                <span>{currentItem.location}</span>
              </div>
              <h4 className="font-serif text-2xl text-[#FAF7F2] font-normal mb-1">
                {currentItem.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#E0D4C8] font-light">
                {currentItem.caption}
              </p>
              <p className="text-xs text-[#8E6822] mt-1 italic">
                Bridal Muse: {currentItem.client}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
