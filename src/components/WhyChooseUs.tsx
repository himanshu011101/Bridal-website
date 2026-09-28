import React from 'react';
import { UserCheck, Sparkles, Crown, Feather } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'Personalized Looks',
      description: 'Every bridal look is engineered around your face shape, personal style, outfit hue, and lighting ambiance.',
      icon: UserCheck,
    },
    {
      title: 'Prestige Products',
      description: 'Exclusive kit formulated with Charlotte Tilbury, Dior, Tom Ford, and Temptu for flawless 16-hour endurance.',
      icon: Sparkles,
    },
    {
      title: 'Bridal Expertise',
      description: 'Over a decade dedicated exclusively to royal, traditional, and high-fashion cross-cultural weddings.',
      icon: Crown,
    },
    {
      title: 'Calm Sanctuary',
      description: 'An unhurried, peaceful bridal morning atmosphere designed to dissolve wedding day anxieties.',
      icon: Feather,
    },
  ];

  return (
    <section className="py-20 bg-[#F5EFEB] border-y border-[#EADBC8]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#8E6822] uppercase block mb-2">
            THE ÉLAN PROMISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#211A17] font-normal tracking-tight">
            Why Discerning Brides Trust Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-sm border border-[#EADBC8] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#FAF7F2] border border-[#EADBC8] flex items-center justify-center text-[#8E6822] mb-6">
                    <Icon className="w-5 h-5 stroke-[1.4]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#211A17] font-medium tracking-tight mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4F49] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EADBC8]/40 flex items-center justify-between text-[11px] text-[#8C7A72]">
                  <span className="tracking-widest uppercase font-mono">0{idx + 1}</span>
                  <span className="text-[#8E6822]">Uncompromised Care</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
