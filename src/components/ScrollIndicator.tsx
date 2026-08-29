import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  onScrollClick?: () => void;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ onScrollClick }) => {
  return (
    <div className="w-full max-w-[420px] sm:max-w-[460px] md:max-w-[520px] flex flex-col gap-2.5 select-none" id="scroll-indicator-container">
      {/* Horizontal glass divider line with specular shimmer */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      
      {/* Labels on both sides */}
      <div className="w-full flex items-center justify-between text-[10px] sm:text-[11px] md:text-xs font-medium tracking-[0.18em] text-white">
        {/* Left Side: SCROLL DOWN with Downward Indicator */}
        <button 
          onClick={onScrollClick}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full apple-glass-pill hover:text-white transition-all cursor-pointer group"
          id="scroll-down-btn"
        >
          <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5 animate-bounce text-white" />
          <span className="font-semibold uppercase tracking-widest text-white">SCROLL DOWN</span>
        </button>

        {/* Right Side: TO START THE JOURNEY */}
        <span className="font-semibold uppercase tracking-[0.2em] text-white/80 px-2">
          TO START THE JOURNEY
        </span>
      </div>
    </div>
  );
};
