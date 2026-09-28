import React from 'react';
import { STUDIO_CONFIG } from '../data/studioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#17120F] text-[#FAF7F2] border-t border-[#C5A059]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex flex-col items-start">
              {/* Delicate luxury floral crest */}
              <svg
                className="w-6 h-6 text-[#C5A059] mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3c-1.5 3-4 5-7 5 3 1.5 5 4 5 7 0-3 2-5.5 5-7-3 0-4.5-2-3-5z" />
                <path d="M12 3c1.5 3 4 5 7 5-3 1.5-5 4-5 7 0-3-2-5.5-5-7 3 0 4.5-2 3-5z" />
                <circle cx="12" cy="17" r="1.5" fill="#C5A059" />
              </svg>
              <span className="font-serif text-2xl tracking-[0.2em] uppercase font-normal text-[#FAF7F2]">
                {STUDIO_CONFIG.brandName}
              </span>
              <span className="text-[10px] tracking-[0.28em] text-[#C5A059] uppercase mt-1 font-medium font-sans">
                {STUDIO_CONFIG.tagline}
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#D1C2B7] font-light leading-relaxed max-w-sm">
              Luxury bridal beauty, thoughtfully crafted for your most unforgettable moments. Serving couture brides across India and international wedding destinations.
            </p>

            <div className="mt-6 flex items-center gap-4 text-xs tracking-wider uppercase text-[#C5A059]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <span>•</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
              <span>•</span>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Pinterest
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#C5A059] mb-4">
              Explore Atelier
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#D1C2B7] font-light">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Home Showcase
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Bridal & Occasion Services
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  onClick={(e) => handleNavClick(e, '#packages')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Curated Packages
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleNavClick(e, '#portfolio')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Moments & Gallery
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  About Ananya Roy
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-[#C5A059] transition-colors"
                >
                  Private Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5">
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#C5A059] mb-4">
              Studio & Destination Inquiries
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#D1C2B7] font-light">
              <p>
                <strong className="text-[#FAF7F2] font-medium">Studio: </strong>
                {STUDIO_CONFIG.address}
              </p>
              <p>
                <strong className="text-[#FAF7F2] font-medium">Telephone: </strong>
                <a href={`tel:${STUDIO_CONFIG.phone}`} className="hover:text-[#C5A059]">
                  {STUDIO_CONFIG.phone}
                </a>
              </p>
              <p>
                <strong className="text-[#FAF7F2] font-medium">WhatsApp: </strong>
                <a
                  href={`https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=Hello%20Élan%20Bridal,%20I%20would%20like%20to%20enquire%20about%20bridal%20makeup`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C5A059]"
                >
                  +{STUDIO_CONFIG.whatsappNumber}
                </a>
              </p>
              <p>
                <strong className="text-[#FAF7F2] font-medium">Email: </strong>
                <a href={`mailto:${STUDIO_CONFIG.email}`} className="hover:text-[#C5A059]">
                  {STUDIO_CONFIG.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A8988D] font-light gap-4">
          <p>© {currentYear} {STUDIO_CONFIG.brandName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => alert('Élan Bridal Privacy Policy: We honor client confidentiality. Bridal photographs are published only with explicit written consent from the bride.')}
              className="hover:text-[#FAF7F2] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => alert('Élan Bridal Terms & Conditions: Booking deposits secure exclusive single-date reservation on the master artist calendar.')}
              className="hover:text-[#FAF7F2] transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
