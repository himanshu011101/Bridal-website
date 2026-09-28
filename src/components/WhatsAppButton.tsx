import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

interface WhatsAppButtonProps {
  onOpenBookingModal: () => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ onOpenBookingModal }) => {
  const handleWhatsAppClick = () => {
    const today = new Date();
    today.setDate(today.getDate() + 30);
    const estimatedDate = today.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const text = `Hello Élan Bridal, I would like to enquire about bridal makeup and check availability for my upcoming wedding celebrations (approx. ${estimatedDate}).`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <>
      <style>{`
        @keyframes pulseRing {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          5% { transform: scale(1); box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .animate-pulse-ring {
          animation: pulseRing 4s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        @keyframes slideUpWhatsApp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {/* Desktop Floating Button (Bottom-Right) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40" style={{ animation: 'slideUpWhatsApp 800ms cubic-bezier(0.22, 1, 0.36, 1) 1200ms both' }}>
        <button
          onClick={handleWhatsAppClick}
          className="group relative flex items-center gap-3 px-5 py-3 bg-[#1E1512]/45 backdrop-blur-[14px] saturate-[140%] hover:bg-[#1E1512]/60 text-white rounded-[24px] border border-white/12 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 active:scale-95 focus-visible:outline-none"
          aria-label="Enquire via WhatsApp"
        >
          {/* Animated subtle glow dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] animate-pulse-ring" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
          </span>

          <span className="text-xs font-semibold tracking-wider uppercase font-sans">
            Enquire on WhatsApp
          </span>

          <div className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
          </div>
        </button>
      </div>

      {/* Mobile Bottom Sticky Bar (Strictly capped <= 12% of screen height) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1E1512]/60 backdrop-blur-[14px] saturate-[140%] -webkit-backdrop-filter border-t border-white/12 px-4 py-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]" style={{ animation: 'slideUpWhatsApp 600ms cubic-bezier(0.22, 1, 0.36, 1) 1200ms both' }}>
        <div className="flex items-center gap-2">
          {/* Primary Quick Booking */}
          <button
            onClick={onOpenBookingModal}
            className="flex-1 py-2.5 px-3 bg-gradient-to-r from-[#D9B77E] to-[#B8894A] text-[#1E1512] text-[11px] font-semibold tracking-wider uppercase rounded-sm flex items-center justify-center gap-1.5 shadow-sm active:scale-98"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </button>

          {/* Quick WhatsApp Inquiry */}
          <button
            onClick={handleWhatsAppClick}
            className="py-2.5 px-4 bg-[#25D366] text-white text-[11px] font-semibold tracking-wider uppercase rounded-sm flex items-center justify-center gap-1.5 active:scale-98"
            aria-label="Book on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </>
  );
};
