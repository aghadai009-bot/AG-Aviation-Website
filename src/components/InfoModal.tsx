import React from 'react';
import { motion } from 'motion/react';
import { X, Shield, Globe, Award, Zap, Compass, Check } from 'lucide-react';

interface InfoModalProps {
  tab: string | null;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ tab, onClose }) => {
  if (!tab) return null;

  const contentMap: Record<string, { title: string; subtitle: string; details: React.ReactNode }> = {
    about: {
      title: 'About AG Aviation',
      subtitle: 'Where private aviation meets precision, comfort, and exceptional service.',
      details: (
        <div className="space-y-4 text-sm text-white/85 leading-relaxed">
          <p>
            Welcome to AG Aviation. Based in Paris, we connect you to the world through seamless private flight experiences designed around your time, your destination, and your way of travelling.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-4 apple-glass-card rounded-2xl">
              <span className="text-2xl font-bold text-white block">Paris Hub</span>
              <span className="text-xs text-white/60">Paris Le Bourget (LBG) & CDG</span>
            </div>
            <div className="p-4 apple-glass-card rounded-2xl">
              <span className="text-2xl font-bold text-white block">Global Reach</span>
              <span className="text-xs text-white/60">Non-stop worldwide charters</span>
            </div>
          </div>
        </div>
      ),
    },
    fleet: {
      title: 'The AG Fleet',
      subtitle: 'Ultra-long-range jets, heavy business aircraft, and agile private charter options.',
      details: (
        <div className="space-y-3 text-sm text-white/85">
          <div className="p-4 apple-glass-card rounded-2xl flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-white">Dassault Falcon 8X / 10X</h4>
              <p className="text-xs text-white/60">French aeronautical precision • 7,500 nm range • Whisper-quiet cabin</p>
            </div>
            <span className="text-xs apple-glass-btn-primary text-black px-3 py-1 rounded-full font-semibold">Flagship</span>
          </div>
          <div className="p-4 apple-glass-card rounded-2xl flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-white">Gulfstream G650ER / G700</h4>
              <p className="text-xs text-white/60">Range: 7,700 nm • 100% fresh air circulation • Master suite</p>
            </div>
            <span className="text-xs apple-glass-pill text-white px-3 py-1 rounded-full">Ultra Long</span>
          </div>
          <div className="p-4 apple-glass-card rounded-2xl flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-white">Bombardier Global 7500</h4>
              <p className="text-xs text-white/60">Four true living spaces • Smooth Flēx wing technology</p>
            </div>
            <span className="text-xs apple-glass-pill text-white px-3 py-1 rounded-full">Global</span>
          </div>
        </div>
      ),
    },
    services: {
      title: 'Our Aviation Services',
      subtitle: 'Comprehensive bespoke solutions for individuals and enterprises.',
      details: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="p-4 apple-glass-card rounded-2xl">
            <h4 className="font-semibold text-white text-sm mb-1">On-Demand Charter</h4>
            <p className="text-xs text-white/70">Point-to-point bespoke flights with zero long-term commitments.</p>
          </div>
          <div className="p-4 apple-glass-card rounded-2xl">
            <h4 className="font-semibold text-white text-sm mb-1">Corporate Shuttles</h4>
            <p className="text-xs text-white/70">Dedicated group routing and corporate aircraft management.</p>
          </div>
          <div className="p-4 apple-glass-card rounded-2xl">
            <h4 className="font-semibold text-white text-sm mb-1">VIP Ground Logistics</h4>
            <p className="text-xs text-white/70">Seamless tarmac transfers, luxury chauffeuring, and customs clearance.</p>
          </div>
          <div className="p-4 apple-glass-card rounded-2xl">
            <h4 className="font-semibold text-white text-sm mb-1">Culinary & Sommelier</h4>
            <p className="text-xs text-white/70">Fine dining curated by Parisian partner chefs for every flight.</p>
          </div>
        </div>
      ),
    },
    destinations: {
      title: 'Paris to Anywhere',
      subtitle: 'Seamless global connectivity from takeoff to arrival.',
      details: (
        <div className="space-y-3 text-sm text-white/85">
          <p>
            Operating out of Paris Le Bourget with direct connections to major global financial capitals and secluded retreats:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
            <div className="p-3 apple-glass-card rounded-xl text-center">
              <span className="font-semibold text-white block text-sm">Paris</span>
              <span className="text-[11px] text-white/60">Le Bourget (LBG)</span>
            </div>
            <div className="p-3 apple-glass-card rounded-xl text-center">
              <span className="font-semibold text-white block text-sm">London</span>
              <span className="text-[11px] text-white/60">Farnborough (FAB)</span>
            </div>
            <div className="p-3 apple-glass-card rounded-xl text-center">
              <span className="font-semibold text-white block text-sm">Geneva</span>
              <span className="text-[11px] text-white/60">Cointrin (GVA)</span>
            </div>
            <div className="p-3 apple-glass-card rounded-xl text-center">
              <span className="font-semibold text-white block text-sm">New York</span>
              <span className="text-[11px] text-white/60">Teterboro (TEB)</span>
            </div>
            <div className="p-3 apple-glass-card rounded-xl text-center">
              <span className="font-semibold text-white block text-sm">Dubai</span>
              <span className="text-[11px] text-white/60">Al Maktoum (DWC)</span>
            </div>
            <div className="p-3 apple-glass-card rounded-xl text-center">
              <span className="font-semibold text-white block text-sm">Tokyo</span>
              <span className="text-[11px] text-white/60">Haneda VIP (HND)</span>
            </div>
          </div>
        </div>
      ),
    },
    advantages: {
      title: 'The AG Advantage',
      subtitle: 'Why the world’s most discerning travelers choose AG Aviation.',
      details: (
        <div className="space-y-3 text-sm text-white/85">
          <div className="flex items-start gap-3 p-3.5 apple-glass-card rounded-xl">
            <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-medium">15-Minute Tarmac Departures</strong>
              <span className="text-xs text-white/70">Arrive directly planeside at Le Bourget without terminal queues.</span>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 apple-glass-card rounded-xl">
            <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-medium">Total Confidentiality & Discretion</strong>
              <span className="text-xs text-white/70">Guaranteed private manifest management and diplomatic privacy.</span>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3.5 apple-glass-card rounded-xl">
            <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-medium">Dedicated Flight Directors</strong>
              <span className="text-xs text-white/70">A single point of contact overseeing your itinerary 24/7.</span>
            </div>
          </div>
        </div>
      ),
    },
  };

  const current = contentMap[tab] || contentMap.about;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        className="relative w-full max-w-2xl apple-glass-modal rounded-[28px] p-6 sm:p-8 text-white"
        id="info-detail-modal"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-info-modal-btn"
          className="absolute top-5 right-5 w-9 h-9 rounded-full apple-glass-pill flex items-center justify-center text-white/80 hover:text-white cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full apple-glass-pill text-[11px] font-semibold tracking-wider uppercase text-white/70 mb-3">
            <span>AG Aviation Discovery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-['DM_Sans']">
            {current.title}
          </h2>
          <p className="text-sm text-white/75 mt-1 font-normal">
            {current.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="mb-6">{current.details}</div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="apple-glass-btn-primary text-black px-6 py-2 rounded-full font-semibold text-xs uppercase tracking-wider cursor-pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
