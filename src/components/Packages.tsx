import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { PACKAGES, BridalPackage } from '../data/studioData';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-24 bg-[#F5EFEB] relative overflow-hidden">
      {/* Subtle architectural background ornamentation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EADBC8]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#8E6822] uppercase block mb-3">
            CURATED CELEBRATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#211A17] font-normal tracking-tight mb-4">
            Bridal Packages
          </h2>
          <p className="text-base sm:text-lg text-[#5C4F49] font-light leading-relaxed">
            Thoughtfully designed experiences for every celebration, ensuring flawless continuity from your morning ceremony to the midnight reception.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between rounded-sm p-8 sm:p-10 transition-all duration-300 ${
                pkg.featured
                  ? 'bg-[#211A17] text-[#FAF7F2] shadow-[0_20px_48px_rgba(33,26,23,0.18)] ring-1 ring-[#C5A059]/40 lg:-translate-y-2'
                  : 'bg-white text-[#211A17] border border-[#EADBC8] shadow-sm hover:shadow-md'
              }`}
            >
              {/* Featured Distinction Label */}
              {pkg.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C5A059] text-[#1F1815] text-[11px] font-semibold tracking-[0.16em] uppercase px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MOST CHERISHED</span>
                </div>
              )}

              <div>
                {/* Header Info */}
                <div className="border-b pb-6 mb-6 border-[#EADBC8]/40">
                  <span
                    className={`text-[11px] font-semibold tracking-[0.18em] uppercase block mb-2 ${
                      pkg.featured ? 'text-[#C5A059]' : 'text-[#8E6822]'
                    }`}
                  >
                    {pkg.idealFor}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal mb-2 tracking-tight">
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm font-light leading-relaxed ${
                      pkg.featured ? 'text-[#E0D4C8]' : 'text-[#5C4F49]'
                    }`}
                  >
                    {pkg.tagline}
                  </p>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-serif text-3xl sm:text-4xl font-normal tracking-tight tabular-nums">
                      {pkg.price}
                    </span>
                    <span
                      className={`text-xs uppercase tracking-wider ${
                        pkg.featured ? 'text-[#C5A059]' : 'text-[#8C7A72]'
                      }`}
                    >
                      / bride experience
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-wider mb-4 ${
                      pkg.featured ? 'text-[#E0D4C8]' : 'text-[#8C7A72]'
                    }`}
                  >
                    Package Inclusions:
                  </p>
                  <ul className="space-y-3.5">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <div
                          className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            pkg.featured
                              ? 'bg-[#C5A059]/20 text-[#C5A059]'
                              : 'bg-[#EADBC8]/50 text-[#8E6822]'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </div>
                        <span
                          className={`font-light leading-relaxed ${
                            pkg.featured ? 'text-[#FAF7F2]' : 'text-[#3B302B]'
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPackage(pkg.name)}
                className={`w-full py-3.5 px-6 rounded-sm text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 flex items-center justify-center gap-2 group ${
                  pkg.featured
                    ? 'bg-[#C5A059] hover:bg-[#D4AF37] text-[#1F1815] shadow-md hover:shadow-lg'
                    : 'bg-[#211A17] hover:bg-[#3B302B] text-white shadow-sm'
                }`}
              >
                <span>RESERVE PACKAGE</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Entourage Note */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#5C4F49]">
          <p>
            Planning a multi-day destination wedding or need styling for bridesmaids & family?{' '}
            <span className="font-semibold text-[#8E6822]">Custom wedding packages available upon inquiry.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
