import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plane, Calendar, Users, MapPin, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [origin, setOrigin] = useState('Paris Le Bourget (LBG)');
  const [destination, setDestination] = useState('New York Teterboro (TEB)');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('4');
  const [aircraftCategory, setAircraftCategory] = useState('Heavy Jet (Dassault Falcon 8X)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        className="relative w-full max-w-xl apple-glass-modal rounded-[28px] p-6 sm:p-8 text-white"
        id="flight-booking-modal"
      >
        {/* Close Glass Button */}
        <button
          onClick={onClose}
          id="close-booking-modal-btn"
          className="absolute top-5 right-5 w-9 h-9 rounded-full apple-glass-pill flex items-center justify-center text-white/80 hover:text-white cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full apple-glass-btn-primary text-black flex items-center justify-center">
                <Plane className="w-4 h-4 rotate-45" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-['DM_Sans']">
                Request a Flight
              </h2>
            </div>
            <p className="text-sm text-white/75 mb-6 font-normal">
              AG Aviation delivers bespoke private jet charters tailored to your schedule, departing from Paris Le Bourget and worldwide hubs.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" id="booking-inquiry-form">
              {/* Origin & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/75 mb-1.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> Departure
                  </label>
                  <input
                    type="text"
                    required
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="e.g. Paris (LBG), London, Geneva"
                    className="w-full bg-white/[0.06] border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white/60 focus:bg-white/[0.1] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/75 mb-1.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> Destination
                  </label>
                  <input
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. New York, Nice, Dubai, Tokyo"
                    className="w-full bg-white/[0.06] border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white/60 focus:bg-white/[0.1] transition-all"
                  />
                </div>
              </div>

              {/* Date & Passengers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/75 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Departure Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white/[0.06] border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white/60 focus:bg-white/[0.1] transition-all [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/75 mb-1.5 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> Passengers
                  </label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-full bg-[#121217] border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white/60 focus:bg-[#1a1a22] transition-all [color-scheme:dark]"
                  >
                    <option value="1-2">1 - 2 Passengers</option>
                    <option value="3-4">3 - 4 Passengers</option>
                    <option value="5-8">5 - 8 Passengers</option>
                    <option value="9-16">9 - 16 Passengers (VIP Group)</option>
                  </select>
                </div>
              </div>

              {/* Aircraft Category */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-white/75 mb-1.5">
                  Preferred Fleet Category
                </label>
                <select
                  value={aircraftCategory}
                  onChange={(e) => setAircraftCategory(e.target.value)}
                  className="w-full bg-[#121217] border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white/60 focus:bg-[#1a1a22] transition-all [color-scheme:dark]"
                >
                  <option value="Heavy Jet (Dassault Falcon 8X / Gulfstream G650)">
                    Heavy Jet (Dassault Falcon 8X / Gulfstream G650)
                  </option>
                  <option value="Ultra Long Range (Bombardier Global 7500 / Gulfstream G700)">
                    Ultra Long Range (Global 7500 / Gulfstream G700)
                  </option>
                  <option value="Super Midsize (Dassault Falcon 2000LXS / Challenger 3500)">
                    Super Midsize (Falcon 2000LXS / Challenger 3500)
                  </option>
                  <option value="Light & Entry Jet (Pilatus PC-24 / Phenom 300E)">
                    Light & Entry Jet (Pilatus PC-24 / Phenom 300E)
                  </option>
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  id="submit-flight-quote-btn"
                  className="w-full apple-glass-btn-primary text-black py-3.5 rounded-2xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Request Instant Flight Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 apple-glass-pill rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Flight Request Submitted</h3>
            <p className="text-white/75 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              Our Paris flight operations desk has received your request for{' '}
              <span className="text-white font-semibold">{origin}</span> to{' '}
              <span className="text-white font-semibold">{destination}</span>. An AG Aviation private charter director will deliver your bespoke flight options within 15 minutes.
            </p>
            <button
              onClick={handleReset}
              className="apple-glass-btn-primary text-black px-7 py-2.5 rounded-full font-semibold text-sm cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
