import React, { useState, useEffect } from 'react';
import { X, Calendar as CalendarIcon, Clock, CheckCircle2, ChevronRight, ChevronLeft, Send, Sparkles } from 'lucide-react';
import { SERVICES, PACKAGES, STUDIO_CONFIG } from '../data/studioData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialPackageName?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialPackageName,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [selectedService, setSelectedService] = useState<string>('Bridal Makeup');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('09:00 AM');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventDate: '',
    eventLocation: '',
    eventType: 'Wedding Ceremony',
    numberOfPeople: '1 (Bride only)',
    specialRequirements: '',
  });

  const [bookingReference, setBookingReference] = useState<string>('');

  // Pre-fill if opened with a specific service or package
  useEffect(() => {
    if (initialPackageName) {
      setSelectedService(`Package: ${initialPackageName}`);
    } else if (initialServiceId) {
      const found = SERVICES.find((s) => s.id === initialServiceId);
      if (found) setSelectedService(found.name);
    }
  }, [initialServiceId, initialPackageName, isOpen]);

  // Reset or initialize on open
  useEffect(() => {
    if (isOpen) {
      // Set default date to 14 days from now if not chosen
      const defaultDate = new Date();
      defaultDate.setDate(defaultDate.getDate() + 14);
      const isoDate = defaultDate.toISOString().split('T')[0];
      if (!selectedDate) {
        setSelectedDate(isoDate);
        setFormData((prev) => ({ ...prev, eventDate: isoDate }));
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const timeSlots = [
    { time: '06:30 AM', label: 'Morning Muhurat / Sunrise Ceremony' },
    { time: '09:00 AM', label: 'Morning Event / Anand Karaj' },
    { time: '01:30 PM', label: 'Afternoon Prep / Sundowner' },
    { time: '04:30 PM', label: 'Evening Reception / Varmala' },
    { time: '06:30 PM', label: 'Late Evening Cocktail Glam' },
  ];

  const serviceOptions = [
    'Bridal Makeup (Signature)',
    'Engagement & Sagan Makeup',
    'Reception & Cocktail Glam',
    'Party & Bridesmaid Makeup',
    'High-Definition (HD) Makeup',
    'Airbrush Bridal Makeup',
    'Bridal Couture Hairstyling',
    'Couture Saree & Dupatta Draping',
    'Package: The Essential',
    'Package: The Signature',
    'Package: The Luxe Experience',
  ];

  const handleNextStep = () => {
    if (currentStep === 4) {
      // Validate customer info
      if (!formData.fullName || !formData.phone) {
        alert('Please provide your name and phone number so we can confirm availability.');
        return;
      }
      // Generate booking reference
      const ref = `ELAN-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingReference(ref);
      setCurrentStep(5);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hello Élan Bridal! I would like to enquire about availability for my wedding.\n\n*Reference:* ${bookingReference}\n*Bride Name:* ${formData.fullName}\n*Service:* ${selectedService}\n*Event Date:* ${selectedDate}\n*Time:* ${selectedTime}\n*Location/Venue:* ${formData.eventLocation || 'TBD'}\n*Guests:* ${formData.numberOfPeople}\n\nPlease confirm availability!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#17120F]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-sm shadow-2xl border border-[#EADBC8] overflow-hidden my-6">
        {/* Top Header */}
        <div className="bg-[#211A17] text-[#FAF7F2] px-6 sm:px-8 py-5 flex items-center justify-between border-b border-[#C5A059]/30">
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#C5A059] block font-sans">
              ÉLAN BRIDAL APPOINTMENT DESK
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-normal mt-0.5">
              {currentStep === 5 ? 'Booking Request Received' : 'Reserve Your Bridal Session'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#FAF7F2] transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (Steps 1 to 4) */}
        {currentStep < 5 && (
          <div className="bg-[#F5EFEB] px-6 sm:px-8 py-3.5 border-b border-[#EADBC8]/70 flex items-center justify-between text-xs font-medium">
            {[
              { num: 1, label: 'Service' },
              { num: 2, label: 'Date' },
              { num: 3, label: 'Time' },
              { num: 4, label: 'Details' },
            ].map((step, idx) => (
              <div key={step.num} className="flex items-center gap-2">
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                    currentStep === step.num
                      ? 'bg-[#8E6822] text-white font-bold'
                      : currentStep > step.num
                      ? 'bg-[#211A17] text-[#FAF7F2]'
                      : 'bg-[#EADBC8] text-[#5C4F49]'
                  }`}
                >
                  {currentStep > step.num ? '✓' : step.num}
                </span>
                <span
                  className={`hidden sm:inline ${
                    currentStep === step.num ? 'text-[#211A17] font-semibold' : 'text-[#8C7A72]'
                  }`}
                >
                  {step.label}
                </span>
                {idx < 3 && <span className="text-[#CDBEB2] sm:ml-2">→</span>}
              </div>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {/* STEP 1: CHOOSE SERVICE */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-serif text-lg text-[#211A17] font-medium mb-1">
                  Select Your Desired Bridal Experience
                </h4>
                <p className="text-xs text-[#5C4F49]">
                  Choose from our individual signature services or curated full-day packages.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {serviceOptions.map((opt) => {
                  const isSelected = selectedService === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedService(opt)}
                      className={`text-left p-3.5 rounded-sm border text-xs sm:text-sm transition-all duration-200 flex items-center justify-between ${
                        isSelected
                          ? 'border-[#8E6822] bg-[#8E6822]/10 text-[#211A17] font-semibold ring-1 ring-[#8E6822]'
                          : 'border-[#EADBC8] bg-white text-[#5C4F49] hover:border-[#8E6822]/60'
                      }`}
                    >
                      <span>{opt}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-[#8E6822] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: CHOOSE DATE */}
          {currentStep === 2 && (
            <div className="space-y-5">
              <div>
                <h4 className="font-serif text-lg text-[#211A17] font-medium mb-1">
                  Select Your Wedding or Event Date
                </h4>
                <p className="text-xs text-[#5C4F49]">
                  We recommend reserving auspicious dates at least 4–8 months in advance.
                </p>
              </div>

              <div className="bg-white p-5 rounded-sm border border-[#EADBC8]">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#211A17] mb-2">
                  Ceremony / Event Date
                </label>
                <div className="flex items-center gap-3">
                  <CalendarIcon className="w-5 h-5 text-[#8E6822]" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setFormData({ ...formData, eventDate: e.target.value });
                    }}
                    className="w-full border border-[#EADBC8] rounded-sm p-2.5 text-sm text-[#211A17] focus:outline-none focus:border-[#8E6822]"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              <div className="bg-[#FAF7F2] p-4 rounded-sm border border-[#EADBC8]/70 text-xs text-[#5C4F49] flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#211A17]">Exclusive Reservation Policy:</strong> We only accept a maximum of one to two couture brides per date to guarantee undivided attention from master artist Ananya Roy.
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: CHOOSE TIME */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-serif text-lg text-[#211A17] font-medium mb-1">
                  Choose Preferred Ready Time Slot
                </h4>
                <p className="text-xs text-[#5C4F49]">
                  Select when you need your makeup, hair and draping completely finalized.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot.time;
                  return (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setSelectedTime(slot.time)}
                      className={`w-full text-left p-3.5 rounded-sm border text-xs sm:text-sm transition-all duration-200 flex items-center justify-between ${
                        isSelected
                          ? 'border-[#8E6822] bg-[#8E6822]/10 text-[#211A17] font-semibold ring-1 ring-[#8E6822]'
                          : 'border-[#EADBC8] bg-white text-[#5C4F49] hover:border-[#8E6822]/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-[#8E6822]" />
                        <span className="font-serif text-base">{slot.time}</span>
                        <span className="text-xs text-[#8C7A72] hidden sm:inline font-light">
                          — {slot.label}
                        </span>
                      </div>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-[#8E6822] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: CUSTOMER INFORMATION */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-serif text-lg text-[#211A17] font-medium mb-1">
                  Bride & Celebration Details
                </h4>
                <p className="text-xs text-[#5C4F49]">
                  Please share your contact details and event specifics so we can prepare your quote.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#211A17] mb-1">
                    Bride / Client Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aanya Malhotra"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full border border-[#EADBC8] rounded-sm p-2 text-xs sm:text-sm text-[#211A17] focus:outline-none focus:border-[#8E6822] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#211A17] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-[#EADBC8] rounded-sm p-2 text-xs sm:text-sm text-[#211A17] focus:outline-none focus:border-[#8E6822] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#211A17] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="aanya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-[#EADBC8] rounded-sm p-2 text-xs sm:text-sm text-[#211A17] focus:outline-none focus:border-[#8E6822] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#211A17] mb-1">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full border border-[#EADBC8] rounded-sm p-2 text-xs sm:text-sm text-[#211A17] focus:outline-none focus:border-[#8E6822] bg-white"
                  >
                    <option>Wedding Ceremony & Reception</option>
                    <option>Morning Pheras / Anand Karaj</option>
                    <option>Engagement / Sagan / Roka</option>
                    <option>Sangeet / Mehendi Night</option>
                    <option>Cocktail & Evening Reception</option>
                    <option>Destination Wedding Multi-Day</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#211A17] mb-1">
                    Venue / City Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. The Oberoi, New Delhi / Udaipur"
                    value={formData.eventLocation}
                    onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                    className="w-full border border-[#EADBC8] rounded-sm p-2 text-xs sm:text-sm text-[#211A17] focus:outline-none focus:border-[#8E6822] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#211A17] mb-1">
                    Number of People
                  </label>
                  <select
                    value={formData.numberOfPeople}
                    onChange={(e) => setFormData({ ...formData, numberOfPeople: e.target.value })}
                    className="w-full border border-[#EADBC8] rounded-sm p-2 text-xs sm:text-sm text-[#211A17] focus:outline-none focus:border-[#8E6822] bg-white"
                  >
                    <option>1 (Bride only)</option>
                    <option>2 (Bride + Mother of the bride)</option>
                    <option>3–5 (Bride + Entourage/Bridesmaids)</option>
                    <option>6+ (Large Bridal Party)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#211A17] mb-1">
                  Additional Notes / Outfit & Jewellery Details
                </label>
                <textarea
                  rows={2}
                  placeholder="Share details about your outfit colors, heavy jewellery, sensitive skin, or specific style requests..."
                  value={formData.specialRequirements}
                  onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                  className="w-full border border-[#EADBC8] rounded-sm p-2 text-xs sm:text-sm text-[#211A17] focus:outline-none focus:border-[#8E6822] bg-white"
                />
              </div>
            </div>
          )}

          {/* STEP 5: CONFIRMATION */}
          {currentStep === 5 && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#8E6822]/15 text-[#8E6822] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 stroke-[1.8]" />
              </div>

              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#8E6822] uppercase font-bold block mb-1">
                  BOOKING REFERENCE: {bookingReference}
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-[#211A17] font-normal">
                  Your appointment request has been received.
                </h4>
                <p className="text-xs sm:text-sm text-[#5C4F49] mt-2 max-w-md mx-auto font-light">
                  Thank you, <strong className="text-[#211A17]">{formData.fullName}</strong>. Our bridal coordinator will review the master calendar for {selectedDate} and connect with you within 4 hours.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-white p-5 rounded-sm border border-[#EADBC8] text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#EADBC8]/40 pb-1.5">
                  <span className="text-[#8C7A72]">Selected Service:</span>
                  <span className="font-medium text-[#211A17]">{selectedService}</span>
                </div>
                <div className="flex justify-between border-b border-[#EADBC8]/40 pb-1.5">
                  <span className="text-[#8C7A72]">Event Date:</span>
                  <span className="font-medium text-[#211A17]">{selectedDate}</span>
                </div>
                <div className="flex justify-between border-b border-[#EADBC8]/40 pb-1.5">
                  <span className="text-[#8C7A72]">Ready Time:</span>
                  <span className="font-medium text-[#211A17]">{selectedTime}</span>
                </div>
                <div className="flex justify-between border-b border-[#EADBC8]/40 pb-1.5">
                  <span className="text-[#8C7A72]">Contact Number:</span>
                  <span className="font-medium text-[#211A17]">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A72]">Venue:</span>
                  <span className="font-medium text-[#211A17]">{formData.eventLocation || 'To be specified'}</span>
                </div>
              </div>

              {/* WhatsApp Quick Connect */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-md transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  <span>Contact Us on WhatsApp</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 border border-[#EADBC8] hover:border-[#211A17] text-[#211A17] text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors"
                >
                  Done & Return to Site
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls (Steps 1 to 4) */}
        {currentStep < 5 && (
          <div className="bg-[#FAF7F2] px-6 sm:px-8 py-4 border-t border-[#EADBC8] flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#5C4F49] hover:text-[#211A17]"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNextStep}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-widest uppercase text-white bg-[#8E6822] hover:bg-[#785519] rounded-sm transition-colors shadow-sm"
            >
              <span>{currentStep === 4 ? 'Confirm & Submit' : 'Continue'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
