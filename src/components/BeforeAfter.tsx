import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, Sparkles } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 bg-[#FAF7F2] border-t border-[#EADBC8]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#8E6822] uppercase block mb-3">
            ELEVATING NATURAL BEAUTY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#211A17] font-normal tracking-tight mb-4">
            The Art of Transformation
          </h2>
          <p className="text-base sm:text-lg text-[#5C4F49] font-light leading-relaxed">
            Our bridal artistry is designed to enhance your innate features rather than mask them—delivering luminous, breathable skin that looks breathtaking both in person and on camera.
          </p>
        </div>

        {/* Comparison Showcase Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[420px] sm:h-[540px] w-full rounded-sm overflow-hidden select-none cursor-ew-resize border border-[#EADBC8] shadow-[0_16px_36px_rgba(33,26,23,0.08)] bg-[#211A17]"
          >
            {/* After Image (Full Background) */}
            <img
              src="/src/assets/images/service_bridal_glam_1790617779485.jpg"
              alt="Bridal After Look - Flawless HD skin with romantic rose gold eyes"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute top-4 right-4 z-20 bg-[#211A17]/85 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-[#C5A059]/40 text-[#EADBC8] text-[11px] font-semibold tracking-[0.16em] uppercase">
              AFTER • SIGNATURE GLAM
            </div>

            {/* Before Image (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Natural skin prep tone simulation with filter for organic realistic before look */}
              <div className="relative w-full h-full">
                <img
                  src="/src/assets/images/service_bridal_glam_1790617779485.jpg"
                  alt="Bride Before - Natural bare face pre-makeup"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-[100vw] max-w-none h-full object-cover object-center filter saturate-[0.75] brightness-[0.96] contrast-[0.95]"
                  style={{ width: containerRef.current?.clientWidth || '100%' }}
                />
                <div className="absolute inset-0 bg-[#3B302B]/10 mix-blend-multiply" />
              </div>
              <div className="absolute top-4 left-4 z-20 bg-[#211A17]/85 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-white/20 text-[#FAF7F2] text-[11px] font-semibold tracking-[0.16em] uppercase">
                BEFORE • CLEAN CANVAS
              </div>
            </div>

            {/* Draggable Divider Handle Line */}
            <div
              className="absolute top-0 bottom-0 z-30 w-0.5 bg-[#FAF7F2] shadow-[0_0_12px_rgba(0,0,0,0.6)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FAF7F2] border-2 border-[#8E6822] shadow-xl flex items-center justify-center text-[#211A17]">
                <SlidersHorizontal className="w-4 h-4 text-[#8E6822]" />
              </div>
            </div>
          </div>

          {/* Quick preset toggle pills below slider */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#5C4F49]">
            <span className="italic font-light">
              ← Drag the slider handle to interactively compare skin texture & finish
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSliderPosition(20)}
                className="px-3 py-1 border border-[#EADBC8] rounded-sm hover:border-[#8E6822] transition-colors"
              >
                Reveal After
              </button>
              <button
                onClick={() => setSliderPosition(50)}
                className="px-3 py-1 border border-[#8E6822] text-[#8E6822] font-medium rounded-sm"
              >
                Split 50/50
              </button>
              <button
                onClick={() => setSliderPosition(80)}
                className="px-3 py-1 border border-[#EADBC8] rounded-sm hover:border-[#8E6822] transition-colors"
              >
                Reveal Before
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
