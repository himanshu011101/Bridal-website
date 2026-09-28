import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/studioData';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 bg-[#F5EFEB] border-t border-[#EADBC8]/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#8E6822] uppercase block mb-3">
            CLEAR GUIDANCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#211A17] font-normal tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#5C4F49] font-light max-w-xl mx-auto leading-relaxed">
            Everything you need to know about reserving your wedding date, trial preparations, and our bridal protocol.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-sm border border-[#EADBC8] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8E6822]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#211A17] font-medium tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#8E6822] text-white' : 'bg-[#FAF7F2] text-[#8E6822]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5C4F49] font-light leading-relaxed border-t border-[#EADBC8]/30 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Further Assistance */}
        <div className="mt-12 p-6 bg-white border border-[#EADBC8] rounded-sm text-center">
          <p className="text-xs sm:text-sm text-[#5C4F49] font-light">
            Have a specific question about your destination venue or bespoke family package?
          </p>
          <a
            href="#contact"
            className="inline-block mt-3 text-xs font-semibold tracking-widest uppercase text-[#8E6822] hover:text-[#211A17] transition-colors border-b border-[#8E6822] pb-0.5"
          >
            Connect With Our Bridal Concierge →
          </a>
        </div>
      </div>
    </section>
  );
};
