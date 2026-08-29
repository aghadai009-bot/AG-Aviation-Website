import React from 'react';
import { motion } from 'motion/react';
import { Plane, Phone, Mail, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenNavModal: (tab: string) => void;
  onRequestFlight: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenNavModal, onRequestFlight }) => {
  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Our Fleet', id: 'fleet' },
    { label: 'Services', id: 'services' },
    { label: 'Destinations', id: 'destinations' },
    { label: 'Advantages', id: 'advantages' },
  ];

  return (
    <header className="w-full flex items-center justify-between gap-4 py-4 sm:py-5 px-4 sm:px-8 md:px-12 z-30 select-none">
      
      {/* Floating Apple Liquid Glass Capsule Navigation Bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 px-5 sm:px-7 py-3 rounded-full apple-glass-nav" id="main-glass-nav">
        
        {/* Left Navigation Links */}
        <nav className="flex items-center gap-5 sm:gap-7 md:gap-9 text-sm font-normal tracking-wide text-white" id="main-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              id={`nav-link-${link.id}`}
              onClick={() => onOpenNavModal(link.id)}
              className="text-white/80 hover:text-white transition-colors duration-200 cursor-pointer font-medium text-xs sm:text-sm tracking-wider hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Center/Right Brand Mark & Contact Info */}
        <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium tracking-wider text-white" id="nav-contact-info">
          
          {/* Paris Location Pill */}
          <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full apple-glass-pill text-[11px] text-white/80 font-medium tracking-widest uppercase">
            <MapPin className="w-3 h-3 text-white" />
            <span>Paris, France</span>
          </div>

          {/* Phone */}
          <div className="relative group">
            <a
              href="tel:+33142685500"
              id="nav-phone-link"
              className="text-white/90 hover:text-white transition-colors duration-200 flex items-center gap-1.5 font-medium text-xs sm:text-sm px-3 py-1 rounded-full hover:apple-glass-pill"
            >
              <Phone className="w-3 h-3 text-white/70" />
              <span>+33 1 42 68 55 00</span>
            </a>
          </div>

          {/* Email */}
          <div className="relative group hidden sm:block">
            <a
              href="mailto:contact@agaviation.com"
              id="nav-email-link"
              className="text-white/90 hover:text-white transition-colors duration-200 flex items-center gap-1.5 lowercase text-xs sm:text-sm px-3 py-1 rounded-full hover:apple-glass-pill"
            >
              <Mail className="w-3 h-3 text-white/70" />
              <span>contact@agaviation.com</span>
            </a>
          </div>

          {/* Flight Request Glass Button */}
          <button
            onClick={onRequestFlight}
            id="nav-request-flight-btn"
            className="px-4 py-1.5 rounded-full apple-glass-btn-primary text-black font-semibold text-xs uppercase tracking-wider cursor-pointer shadow-sm"
          >
            Charter
          </button>
        </div>

      </div>
    </header>
  );
};
