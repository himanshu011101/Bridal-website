import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Instagram, ArrowRight, CheckCircle2 } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiry, setInquiry] = useState({
    name: '',
    phone: '',
    email: '',
    weddingDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Studio Concierge Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#8E6822] uppercase block mb-3">
                PRIVATE APPOINTMENTS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#211A17] font-normal tracking-tight mb-6">
                Let’s Create Your Bridal Look
              </h2>
              <p className="text-sm sm:text-base text-[#5C4F49] font-light leading-relaxed mb-8">
                We invite you to our heritage studio suite for an intimate consultation, warm saffron tea, and a personalized trial designed exclusively around your wedding visions.
              </p>

              <div className="space-y-6 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-[#F5EFEB] border border-[#EADBC8] flex items-center justify-center text-[#8E6822] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#211A17] font-medium">Studio Atelier</h4>
                    <p className="text-[#5C4F49] font-light mt-0.5">{STUDIO_CONFIG.address}</p>
                    <span className="text-[11px] text-[#8E6822] block mt-0.5">Destination Services: Worldwide</span>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-[#F5EFEB] border border-[#EADBC8] flex items-center justify-center text-[#8E6822] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#211A17] font-medium">Phone & WhatsApp</h4>
                    <a href={`tel:${STUDIO_CONFIG.phone}`} className="text-[#5C4F49] font-light hover:text-[#8E6822] block">
                      {STUDIO_CONFIG.phone}
                    </a>
                    <a
                      href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=Hello%20Élan%20Bridal,%20I%20would%20like%20to%20enquire%20about%20bridal%20makeup%20availability`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-[#25D366] font-medium inline-flex items-center gap-1 mt-0.5"
                    >
                      <MessageSquare className="w-3 h-3" /> Quick WhatsApp Chat
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-[#F5EFEB] border border-[#EADBC8] flex items-center justify-center text-[#8E6822] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#211A17] font-medium">Private Concierge</h4>
                    <a href={`mailto:${STUDIO_CONFIG.email}`} className="text-[#5C4F49] font-light hover:text-[#8E6822]">
                      {STUDIO_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-[#F5EFEB] border border-[#EADBC8] flex items-center justify-center text-[#8E6822] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#211A17] font-medium">Studio Hours</h4>
                    <p className="text-[#5C4F49] font-light mt-0.5">{STUDIO_CONFIG.hours}</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-[#F5EFEB] border border-[#EADBC8] flex items-center justify-center text-[#8E6822] shrink-0 mt-0.5">
                    <Instagram className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#211A17] font-medium">Instagram Portfolio</h4>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#5C4F49] font-light hover:text-[#8E6822]"
                    >
                      {STUDIO_CONFIG.instagram}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Map Card Area */}
            <div className="mt-8 rounded-sm overflow-hidden border border-[#EADBC8] bg-[#F5EFEB] p-4 text-center">
              <div className="h-32 w-full rounded-sm bg-[#EADBC8]/50 flex flex-col items-center justify-center text-[#5C4F49] relative overflow-hidden">
                {/* Subtle map grid vector lines */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8E6822_1px,transparent_1px)] [background-size:16px_16px]" />
                <MapPin className="w-6 h-6 text-[#8E6822] mb-1 z-10" />
                <span className="font-serif text-sm text-[#211A17] z-10">Defence Colony Atelier • New Delhi</span>
                <span className="text-[10px] text-[#8C7A72] z-10">Private Valet Parking Available</span>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-xs font-semibold tracking-wider uppercase text-[#8E6822] hover:text-[#211A17]"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Right Column: Direct Consultation Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-sm border border-[#EADBC8] shadow-sm">
              <span className="text-[11px] font-semibold tracking-widest text-[#8E6822] uppercase block mb-1">
                EXPRESS ENQUIRY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#211A17] font-normal mb-2">
                Check Date Availability
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4F49] font-light mb-8">
                Share your wedding date and venue; our bridal concierge will reply within 4 hours with bespoke package options.
              </p>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#8E6822]/15 text-[#8E6822] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#211A17]">Thank you, {inquiry.name}!</h4>
                  <p className="text-xs sm:text-sm text-[#5C4F49] max-w-sm mx-auto font-light">
                    Your inquiry for {inquiry.weddingDate || 'your wedding'} has reached Master Artist Ananya Roy’s desk. We look forward to creating magic together.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#8E6822] underline pt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#211A17] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Radhika Sharma"
                        value={inquiry.name}
                        onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                        className="w-full border border-[#EADBC8] rounded-sm p-3 text-xs sm:text-sm text-[#211A17] focus:outline-none focus:border-[#8E6822] bg-[#FAF7F2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#211A17] mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98110 00000"
                        value={inquiry.phone}
                        onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                        className="w-full border border-[#EADBC8] rounded-sm p-3 text-xs sm:text-sm text-[#211A17] focus:outline-none focus:border-[#8E6822] bg-[#FAF7F2]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#211A17] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="radhika@example.com"
                        value={inquiry.email}
                        onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                        className="w-full border border-[#EADBC8] rounded-sm p-3 text-xs sm:text-sm text-[#211A17] focus:outline-none focus:border-[#8E6822] bg-[#FAF7F2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#211A17] mb-1.5">
                        Wedding / Event Date
                      </label>
                      <input
                        type="date"
                        value={inquiry.weddingDate}
                        onChange={(e) => setInquiry({ ...inquiry, weddingDate: e.target.value })}
                        className="w-full border border-[#EADBC8] rounded-sm p-3 text-xs sm:text-sm text-[#211A17] focus:outline-none focus:border-[#8E6822] bg-[#FAF7F2]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#211A17] mb-1.5">
                      Tell us about your events, styling preferences & bridal visions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details regarding wedding city, functions (Sangeet, Pheras, Reception), bridal outfit colors, or family members requiring hair & makeup..."
                      value={inquiry.message}
                      onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                      className="w-full border border-[#EADBC8] rounded-sm p-3 text-xs sm:text-sm text-[#211A17] focus:outline-none focus:border-[#8E6822] bg-[#FAF7F2]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-xs font-semibold tracking-[0.16em] uppercase text-white bg-[#8E6822] hover:bg-[#785519] rounded-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <span>SUBMIT INQUIRY</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
