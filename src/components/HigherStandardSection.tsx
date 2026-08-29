import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronDown, ShieldCheck, Compass, Sparkles, Plane, Clock, Award } from 'lucide-react';

interface HigherStandardSectionProps {
  onRequestFlight?: () => void;
  onExploreServices?: () => void;
}

export const HigherStandardSection: React.FC<HigherStandardSectionProps> = ({
  onRequestFlight,
  onExploreServices,
}) => {
  // Brand logos data (Clean pure white vectors / luxury aviation typography)
  const brandLogos = [
    { name: 'DASSAULT FALCON', code: 'PARIS' },
    { name: 'GULFSTREAM AEROSPACE', code: 'USA' },
    { name: 'BOMBARDIER GLOBAL', code: 'MONTREAL' },
    { name: 'PILATUS AIRCRAFT', code: 'SWITZERLAND' },
    { name: 'LE BOURGET EXECUTIVE', code: 'LBG / PARIS' },
    { name: 'EMBRAER EXECUTIVE', code: 'BRAZIL' },
    { name: 'AG BESPOKE CONCIERGE', code: 'PARIS' },
  ];

  const metrics = [
    {
      value: '99.8%',
      label: 'On-Time Precision',
      sub: 'Guaranteed wheels-up departures worldwide',
    },
    {
      value: '< 2h',
      label: 'Rapid Global Dispatch',
      sub: 'Fast-track tarmac boarding from Paris',
    },
    {
      value: '100%',
      label: 'Bespoke Experience',
      sub: 'Tailored cabin dining & direct routing',
    },
  ];

  return (
    <section 
      id="higher-standard-section"
      className="relative w-full min-h-screen text-white py-16 sm:py-24 px-6 sm:px-10 md:px-16 flex flex-col justify-between overflow-hidden font-['DM_Sans']"
    >
      {/* Background Ambient Liquid Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[650px] h-[450px] rounded-full opacity-15 blur-[150px] pointer-events-none bg-white" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] rounded-full opacity-10 blur-[130px] pointer-events-none bg-indigo-200/20" />
      </div>

      <div className="max-w-[1600px] w-full mx-auto relative z-10 flex flex-col justify-between flex-1 space-y-16">
        
        {/* TOP / MAIN CONTENT GRID (Headline & Content on Left, Highlight Cards on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-4">
          
          {/* LEFT COLUMN: Eyebrow, Italic Headline, DM Sans Content */}
          <div className="lg:col-span-8 space-y-8 pr-0 lg:pr-8">
            
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full apple-glass-pill select-none"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/80 font-['DM_Sans']">
                THE AG AVIATION DISTINCTION
              </span>
            </motion.div>

            {/* Headline with exact Italic font styling as requested */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-white tracking-tight leading-[1.05] italic"
                style={{
                  fontFamily: "'Instrument Serif', 'Cormorant Garamond', 'DM Sans', serif",
                  fontStyle: 'italic',
                }}
              >
                A Higher Standard of Aviation.
              </h2>
            </motion.div>

            {/* Content in DM Sans pure white */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5 text-white/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed font-['DM_Sans'] max-w-3xl"
            >
              <p>
                At AG Aviation, we believe private aviation is more than getting from one destination to another. It is about giving you control over your journey.
              </p>

              <p>
                From departure to arrival, our team combines aviation expertise, personalized service, and meticulous attention to detail to create an experience that is effortless from start to finish.
              </p>

              <p className="text-white font-medium">
                Rooted in Paris and connected to destinations worldwide, AG Aviation brings together European sophistication and global aviation capability.
              </p>
            </motion.div>

            {/* Action Buttons in Apple Liquid Glass */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onRequestFlight}
                id="higher-standard-request-btn"
                className="group inline-flex items-center gap-3 apple-glass-btn-primary text-black px-8 py-4 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase cursor-pointer font-['DM_Sans']"
              >
                <span>Request a Flight</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onExploreServices}
                id="higher-standard-services-btn"
                className="group inline-flex items-center gap-3 apple-glass-pill text-white px-8 py-4 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer font-['DM_Sans']"
              >
                <span>View Global Capabilities</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Clean Apple Liquid Glass Floating Metric Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4 lg:pt-12">
            {metrics.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * idx }}
                className="p-6 sm:p-7 rounded-[22px] apple-glass-card flex items-center justify-between gap-4 group cursor-pointer"
              >
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-['DM_Sans'] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all">
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold tracking-wide text-white/90 font-['DM_Sans']">
                    {item.label}
                  </div>
                  <p className="text-xs text-white/65 font-['DM_Sans']">
                    {item.sub}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full apple-glass-pill flex items-center justify-center text-white/70 group-hover:text-white transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* MIDDLE: BRAND LOGOS ROW (Below text and subtext in Apple Liquid Glass) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full py-8 border-y border-white/15 my-6 rounded-3xl apple-glass-panel p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/60 font-['DM_Sans']">
              TRUSTED BY WORLD-LEADING AVIATION HOUSES & FLEET OPERATORS
            </span>
            <span className="text-xs text-white/60 font-['DM_Sans']">Paris Le Bourget • Geneva • London • New York</span>
          </div>

          {/* Logos Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 items-center">
            {brandLogos.map((brand, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center p-3.5 rounded-2xl apple-glass-card cursor-default text-center"
              >
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-white/90 group-hover:text-white transition-colors uppercase font-['DM_Sans']">
                  {brand.name}
                </span>
                <span className="text-[9px] text-white/45 tracking-widest mt-1 font-mono uppercase">
                  {brand.code}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* BOTTOM: SCROLL PROMPT */}
        <div className="flex items-center justify-between pt-2 text-xs text-white/60 font-['DM_Sans']">
          <span className="tracking-widest uppercase text-[11px]">AG Aviation Paris • Private Jet Charter</span>
          
          <button
            onClick={() => {
              const el = document.getElementById('journey-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            id="higher-standard-scroll-down-btn"
            className="group flex items-center gap-2 px-5 py-2 rounded-full apple-glass-pill text-xs tracking-wider text-white uppercase font-medium cursor-pointer"
          >
            <span>Explore Bespoke Solutions</span>
            <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <span className="tracking-widest uppercase text-[11px] hidden sm:inline">24/7 Flight Operations Desk</span>
        </div>

      </div>
    </section>
  );
};
