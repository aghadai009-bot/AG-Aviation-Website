import React, { useState, useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import { Navbar } from './components/Navbar';
import { ScrollIndicator } from './components/ScrollIndicator';
import { BookingModal } from './components/BookingModal';
import { InfoModal } from './components/InfoModal';
import { HigherStandardSection } from './components/HigherStandardSection';
import { ArrowRight, Plane, Shield, Globe, Award, Compass } from 'lucide-react';
import { ScrollAnimation } from './components/ScrollAnimation';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeInfoTab, setActiveInfoTab] = useState<string | null>(null);

  // References for scrolling
  const heroRef = useRef<HTMLDivElement>(null);
  const designSectionRef = useRef<HTMLDivElement>(null);
  const journeySectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToDesign = () => {
    if (designSectionRef.current) {
      designSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col selection:bg-white/30 selection:text-white font-['DM_Sans']">
      <ScrollAnimation />
      
      {/* SECTION 1: HERO VIEWPORT (Full viewport height banner) */}
      <section
        ref={heroRef}
        id="hero-section"
        className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden"
      >
        {/* Subtle Liquid Glass Glow Layers & Ambient Background Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[20%] w-[700px] h-[500px] bg-white/[0.04] rounded-full blur-[140px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[500px] bg-white/[0.03] rounded-full blur-[160px]" />
          <div className="absolute top-1/2 left-1/3 w-[450px] h-[300px] bg-slate-400/[0.03] rounded-full blur-[120px]" />
        </div>

        {/* Top Navbar */}
        <Navbar
          onOpenNavModal={(tab) => setActiveInfoTab(tab)}
          onRequestFlight={() => setIsBookingOpen(true)}
        />

        {/* Main Content: Centered, sleek and refined text sizing */}
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 py-8 sm:py-12 flex flex-col items-center justify-center text-center flex-1 z-10 space-y-8 sm:space-y-10">
          
          {/* Main Brand & Headline (Centered and scaled down to a refined proportion) */}
          <div className="flex flex-col items-center justify-center space-y-5 max-w-3xl mx-auto z-20">
            
            {/* Location / Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-pill text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-white/80 select-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Paris Le Bourget • Private Jet Charter</span>
            </motion.div>

            {/* Brand Title (Refined, smaller, centered typography) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="space-y-2 select-none"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">
                AG AVIATION
              </h1>
              <p className="text-xs sm:text-sm font-medium tracking-[0.22em] uppercase text-white/65">
                European Sophistication • Global Flight Capability
              </p>
            </motion.div>

            {/* Subtext Paragraph (Scaled smaller, centered, readable width) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="max-w-[580px] mx-auto"
            >
              <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-normal">
                Welcome to AG Aviation, where private aviation meets precision, comfort, and exceptional service. Based in Paris, we connect you to the world through seamless private flight experiences designed around your time, your destination, and your way of travelling.
              </p>
            </motion.div>

            {/* Centered Actions (Apple Liquid Glass) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
            >
              {/* Request a Flight Button */}
              <button
                onClick={() => setIsBookingOpen(true)}
                id="cta-request-flight-btn"
                className="group inline-flex items-center gap-2.5 apple-glass-btn-primary text-black px-6 sm:px-7 py-3 rounded-full font-semibold text-xs tracking-wider uppercase cursor-pointer"
              >
                <span>Request a Flight</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Explore Our Services Button */}
              <button
                onClick={() => setActiveInfoTab('services')}
                id="cta-explore-services-btn"
                className="group inline-flex items-center gap-2.5 apple-glass-pill text-white px-6 sm:px-7 py-3 rounded-full font-semibold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Cards Row & Scroll Indicator: Centered underneath in Liquid Glass */}
          <div className="w-full max-w-3xl mx-auto flex flex-col items-center space-y-6 z-20 pt-2">
            
            {/* Two balanced feature cards side by side */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* CARD 01 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
                onClick={() => setIsBookingOpen(true)}
                className="group relative p-5 rounded-2xl apple-glass-card cursor-pointer text-left flex flex-col justify-between space-y-2"
                id="feature-card-01"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.22em] text-white/55 uppercase">
                    CARD 01
                  </span>
                  <span className="w-6 h-6 rounded-full apple-glass-pill flex items-center justify-center text-white/70 group-hover:text-white transition-all">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all">
                  Fly Without Limits
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-normal">
                  Private aviation tailored to your schedule, destination, and every detail in between.
                </p>
              </motion.div>

              {/* CARD 02 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
                onClick={() => setActiveInfoTab('destinations')}
                className="group relative p-5 rounded-2xl apple-glass-card cursor-pointer text-left flex flex-col justify-between space-y-2"
                id="feature-card-02"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.22em] text-white/55 uppercase">
                    CARD 02
                  </span>
                  <span className="w-6 h-6 rounded-full apple-glass-pill flex items-center justify-center text-white/70 group-hover:text-white transition-all">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all">
                  Paris to Anywhere
                </h3>
                <p className="text-xs text-white/70 leading-relaxed font-normal">
                  Seamless global connectivity with an exceptional flying experience from takeoff to arrival.
                </p>
              </motion.div>
            </div>

            {/* Bottom Scroll Indicator Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
              className="w-full flex justify-center pt-2"
            >
              <ScrollIndicator onScrollClick={handleScrollToDesign} />
            </motion.div>

          </div>

        </div>

        {/* Subtle Bottom Ambient Anchor */}
        <div className="w-full flex items-center justify-between py-3 px-6 text-[11px] text-white/50 tracking-widest uppercase select-none border-t border-white/10">
          <span>AG Aviation • Paris Le Bourget (LBG)</span>
          <span className="hidden sm:inline">Precision • Comfort • Exceptional Service</span>
          <span>Worldwide Dispatch</span>
        </div>
      </section>

      {/* SECTION 2: A HIGHER STANDARD OF AVIATION (Apple Liquid Glass UI, Italic Headline, DM Sans) */}
      <div ref={designSectionRef}>
        <HigherStandardSection 
          onRequestFlight={() => setIsBookingOpen(true)}
          onExploreServices={() => setActiveInfoTab('services')}
        />
      </div>

      {/* SECTION 3: THE JOURNEY (Bespoke flight solutions in Apple Liquid Glass) */}
      <section
        ref={journeySectionRef}
        id="journey-section"
        className="relative w-full py-16 sm:py-24 px-6 sm:px-10 md:px-16"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60 block mb-2">
                The AG Aviation Standard
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Bespoke Flight Solutions
              </h2>
            </div>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center gap-2 apple-glass-btn-primary text-black px-7 py-3 rounded-full font-semibold text-sm cursor-pointer w-fit"
            >
              <span>Request a Flight</span>
              <Plane className="w-4 h-4 rotate-45" />
            </button>
          </div>

          {/* 3 Pillars of AG Aviation in Apple Liquid Glass */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-7 sm:p-8 rounded-[24px] apple-glass-card space-y-4">
              <div className="w-12 h-12 rounded-2xl apple-glass-pill flex items-center justify-center text-white">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Precision & Safety</h3>
              <p className="text-sm text-white/75 leading-relaxed font-normal">
                Dual-captain flight crews and stringent safety audits ensuring absolute airworthiness and punctual European departures.
              </p>
            </div>

            <div className="p-7 sm:p-8 rounded-[24px] apple-glass-card space-y-4">
              <div className="w-12 h-12 rounded-2xl apple-glass-pill flex items-center justify-center text-white">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Unrivaled Comfort</h3>
              <p className="text-sm text-white/75 leading-relaxed font-normal">
                Quiet acoustic cabins, ultra-low cabin altitude pressurization, Parisian culinary catering, and bespoke sleeping suites.
              </p>
            </div>

            <div className="p-7 sm:p-8 rounded-[24px] apple-glass-card space-y-4">
              <div className="w-12 h-12 rounded-2xl apple-glass-pill flex items-center justify-center text-white">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Tailored to Your Schedule</h3>
              <p className="text-sm text-white/75 leading-relaxed font-normal">
                24/7 dedicated flight directors in Paris coordinating private tarmac boarding and discreet customs clearance worldwide.
              </p>
            </div>
          </div>

          {/* Direct Charter Routes in Apple Liquid Glass */}
          <div className="space-y-4 pt-6">
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase">Popular Routes from Paris</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { from: 'Paris (LBG)', to: 'New York (TEB)', time: '7h 45m', jet: 'Falcon 8X' },
                { from: 'Paris (LBG)', to: 'Geneva (GVA)', time: '0h 50m', jet: 'Pilatus PC-24' },
                { from: 'Paris (LBG)', to: 'London (FAB)', time: '0h 45m', jet: 'Phenom 300E' },
                { from: 'Paris (LBG)', to: 'Dubai (DWC)', time: '6h 15m', jet: 'Global 7500' },
              ].map((route, i) => (
                <div
                  key={i}
                  onClick={() => setIsBookingOpen(true)}
                  className="p-5 rounded-2xl apple-glass-card cursor-pointer group flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>{route.time}</span>
                    <span className="text-white/80 group-hover:text-white font-medium">{route.jet}</span>
                  </div>
                  <div className="text-base font-semibold text-white group-hover:text-white/95 transition-colors flex items-center justify-between">
                    <span>{route.from}</span>
                    <ArrowRight className="w-4 h-4 text-white/50 group-hover:translate-x-1 transition-transform" />
                    <span>{route.to}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bar */}
          <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
            <p>© {new Date().getFullYear()} AG Aviation Paris. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="tel:+33142685500" className="hover:text-white transition-colors">+33 1 42 68 55 00</a>
              <a href="mailto:contact@agaviation.com" className="hover:text-white transition-colors">contact@agaviation.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modals in Apple Liquid Glass */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <InfoModal tab={activeInfoTab} onClose={() => setActiveInfoTab(null)} />

    </div>
  );
}
