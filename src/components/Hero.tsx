import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

const useAnimatedCounter = (endValue: number, duration: number = 2000, trigger: boolean = true) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;
    let animationFrame: number;
    
    const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuart(progress);
      
      setCount(Math.floor(easedProgress * endValue));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, duration, trigger]);
  
  return count;
};

const AnimatedStat: React.FC<{ value: number; label: string; suffix?: string; delay?: number }> = ({ value, label, suffix = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  const count = useAnimatedCounter(value, 2000, isVisible);
  
  return (
    <div ref={ref} className="opacity-0 translate-y-6" style={isVisible ? { animation: `fadeUpReveal 800ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms forwards` } : {}}>
      <span className="font-serif text-xl sm:text-[36px] font-normal text-white block tabular-nums lining-nums leading-none">
        {count}{suffix}
      </span>
      <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.18em] text-[#C19A5B] mt-2 block">
        {label}
      </span>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const [offsetY, setOffsetY] = useState(0);
  const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (isReducedMotion) return;
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.2);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReducedMotion]);

  return (
    <section
      id="home"
      className="relative min-h-[88vh] lg:min-h-[100vh] flex items-center pt-24 pb-16 lg:py-0 overflow-hidden bg-[#1E1512]"
    >
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.06); }
        }
        @keyframes fadeUpReveal {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes maskReveal {
          0% { clip-path: inset(100% 0 0 0); transform: translateY(24px); }
          100% { clip-path: inset(0 0 0 0); transform: translateY(0); }
        }
        @keyframes imageReveal {
          0% { opacity: 0; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1.0); }
        }
        
        .ken-burns-active {
          animation: kenBurns 20s ease-in-out infinite alternate;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .ken-burns-active, .image-reveal, .animate-mask, .animate-fade-up {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            clip-path: none !important;
          }
        }
      `}</style>
      
      {/* Background Hero Image Container */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full absolute inset-0 opacity-0"
          style={{ 
            animation: 'imageReveal 1400ms cubic-bezier(0.22, 1, 0.36, 1) forwards' 
          }}
        >
          <img
            src="/src/assets/images/hero_indian_bride_luxury_1790617767266.jpg"
            alt="Luxury Indian bride with flawless bridal makeup and traditional kundan jewellery"
            referrerPolicy="no-referrer"
            style={{ transform: `translateY(${offsetY}px)` }}
            className={`w-full h-full object-cover object-[75%_center] lg:object-right ${!isReducedMotion ? 'ken-burns-active' : ''}`}
          />
        </div>

        {/* Directional Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(30,21,18,0.88)] via-[rgba(30,21,18,0.72)] to-transparent w-full lg:w-[65%]" />
        
        {/* Soft bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1E1512] to-transparent opacity-90" />
        
        {/* Film grain/noise overlay */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20 mt-16 lg:mt-0">
        <div className="max-w-2xl lg:max-w-xl text-left">
          
          {/* Eyebrow Label with horizontal gold rule */}
          <div className="flex items-center gap-3 mb-6 opacity-0" style={{ animation: 'fadeUpReveal 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards' }}>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#F1E6D6] uppercase font-sans">
              BRIDAL BEAUTY • MAKEUP • HAIR
            </span>
            <div className="h-[1px] w-12 sm:w-16 bg-[#C19A5B]" />
          </div>

          {/* Main Editorial Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif text-white font-normal tracking-tight leading-[1.08] mb-6 drop-shadow-sm">
            <span className="block opacity-0 translate-y-6" style={{ animation: 'maskReveal 900ms cubic-bezier(0.22, 1, 0.36, 1) 150ms forwards' }}>
              Your Dream Look,
            </span>
            <span className="font-serif italic font-light block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#D9B77E] to-[#B8894A] opacity-0 translate-y-6" style={{ animation: 'maskReveal 900ms cubic-bezier(0.22, 1, 0.36, 1) 300ms forwards' }}>
              Perfectly Crafted.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#E8DDD0] font-sans font-light leading-relaxed max-w-lg mb-9 tracking-wide opacity-0 translate-y-6" style={{ animation: 'fadeUpReveal 900ms cubic-bezier(0.22, 1, 0.36, 1) 500ms forwards' }}>
            Timeless bridal beauty, thoughtfully created for your most unforgettable moments.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 opacity-0 translate-y-6" style={{ animation: 'fadeUpReveal 900ms cubic-bezier(0.22, 1, 0.36, 1) 650ms forwards' }}>
            {/* Primary CTA */}
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-[13px] font-semibold tracking-[0.14em] uppercase text-[#1E1512] bg-gradient-to-r from-[#D9B77E] to-[#B8894A] rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(193,154,91,0.25)] hover:shadow-[0_0_24px_rgba(193,154,91,0.4)] active:scale-[0.98] focus-visible:outline-none hover:brightness-110"
            >
              <span>BOOK YOUR APPOINTMENT</span>
              <ArrowRight className="w-4 h-4 text-[#1E1512] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={onExploreServices}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-[13px] font-medium tracking-[0.14em] uppercase text-white hover:text-[#D9B77E] bg-transparent hover:bg-white/[0.08] border border-white/30 hover:border-[#D9B77E] rounded-sm transition-all duration-300 active:scale-[0.98] focus-visible:outline-none"
            >
              <span>EXPLORE SERVICES</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#D9B77E]" />
            </button>
          </div>

          {/* Subtle Trust Indicators */}
          <div className="mt-14 pt-8 border-t border-white/10 flex items-center gap-6 sm:gap-12 opacity-0 translate-y-6" style={{ animation: 'fadeUpReveal 900ms cubic-bezier(0.22, 1, 0.36, 1) 800ms forwards' }}>
            <AnimatedStat value={850} label="Couture Brides" suffix="+" delay={800} />
            <div className="w-[1px] h-12 bg-white/10" />
            <AnimatedStat value={12} label="Years Mastery" suffix="+" delay={900} />
            <div className="w-[1px] h-12 bg-white/10" />
            <AnimatedStat value={100} label="Luxury Kit" suffix="%" delay={1000} />
          </div>
        </div>
      </div>
    </section>
  );
};
