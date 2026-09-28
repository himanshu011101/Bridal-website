import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const transitionClasses = "transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Packages', href: '#packages', id: 'packages' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-40 ${transitionClasses} ${
          isScrolled
            ? 'top-0'
            : 'top-0'
        }`}
      >
        <div
          className={`w-full mx-auto ${transitionClasses} ${
            isScrolled
              ? 'bg-[#1E1512]/80 backdrop-blur-[14px] saturate-[140%] border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] h-[64px] px-6 sm:px-8 lg:px-12'
              : 'bg-transparent h-[88px] px-6 sm:px-10 lg:px-12'
          }`}
          style={{ WebkitBackdropFilter: isScrolled ? 'blur(14px) saturate(140%)' : undefined }}
        >
          <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
            {/* Brand Identity / Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className={`group flex flex-col items-center justify-center text-center focus:outline-none ${transitionClasses} ${
                isScrolled ? 'scale-90' : 'scale-100'
              }`}
            >
              <span className="font-serif text-lg sm:text-xl tracking-[0.22em] uppercase font-medium leading-none text-white">
                {STUDIO_CONFIG.brandName}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase mt-1 font-medium font-sans text-[#D9B77E]">
                {STUDIO_CONFIG.tagline}
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[13px] font-medium tracking-[0.06em]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative py-1 group overflow-hidden text-white hover:text-[#D9B77E] ${transitionClasses}`}
                  >
                    {link.label}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#C19A5B] origin-left transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`} 
                    />
                  </a>
                );
              })}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="relative inline-flex items-center justify-center px-6 py-2.5 text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#1E1512] bg-gradient-to-r from-[#D9B77E] to-[#B8894A] rounded-sm shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(193,154,91,0.4)] hover:brightness-110 active:scale-95"
              >
                BOOK NOW
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-4 py-2 text-[10px] font-semibold tracking-[0.12em] uppercase text-[#1E1512] bg-gradient-to-r from-[#D9B77E] to-[#B8894A] rounded-sm"
              >
                BOOK
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md focus:outline-none text-white"
                aria-label="Toggle navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu - Glass Overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-[#1E1512]/80 backdrop-blur-[14px] saturate-[140%] transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ WebkitBackdropFilter: 'blur(14px) saturate(140%)' }}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-white focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full pb-20">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{ transitionDelay: `${index * 60}ms` }}
                className={`font-serif text-3xl tracking-wide text-white hover:text-[#D9B77E] transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              style={{ transitionDelay: `${navLinks.length * 60}ms` }}
              className={`mt-8 px-8 py-4 text-xs tracking-widest uppercase font-semibold text-[#1E1512] bg-gradient-to-r from-[#D9B77E] to-[#B8894A] rounded-sm shadow-md flex items-center justify-center gap-2 transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <Calendar className="w-4 h-4" />
              RESERVE WEDDING DATE
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};
