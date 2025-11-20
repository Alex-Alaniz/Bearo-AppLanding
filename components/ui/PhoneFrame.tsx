import React from 'react';
import { motion } from 'framer-motion';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative mx-auto w-[300px] h-[620px] md:w-[320px] md:h-[650px] ${className}`}>
      {/* Outer Frame (Titanium Edge) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-400 via-gray-200 to-gray-400 rounded-[50px] p-[3px] shadow-[0_0_0_2px_rgba(0,0,0,0.8),0_20px_60px_-10px_rgba(0,0,0,0.8)]">
        {/* Inner Black Bezel */}
        <div className="relative w-full h-full bg-black rounded-[46px] overflow-hidden border-[6px] border-black">
          
          {/* Dynamic Island / Notch Area */}
          <div className="absolute top-0 left-0 right-0 h-8 z-50 flex justify-center pt-2 pointer-events-none">
            <div className="w-28 h-[26px] bg-black rounded-full flex items-center justify-between px-4">
               <div className="w-2 h-2 rounded-full bg-neutral-800/50 blur-[1px]" />
               <div className="w-1.5 h-1.5 rounded-full bg-blue-900/30 blur-[0.5px]" />
            </div>
          </div>

          {/* Screen Content */}
          <div className="w-full h-full bg-[#050505] relative overflow-hidden text-white">
            {children}
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full z-50 mix-blend-difference pointer-events-none" />
        </div>
      </div>
      
      {/* Glare Reflection */}
      <div className="absolute inset-0 rounded-[50px] pointer-events-none overflow-hidden">
         <div className="absolute top-0 -inset-full w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 translate-y-[-50%]" />
      </div>
    </div>
  );
};