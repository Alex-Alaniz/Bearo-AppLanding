import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Apple, ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/Button';
import { PhoneFrame } from './ui/PhoneFrame';
import { AppInterface } from './AppInterface';

export const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <section ref={targetRef} className="relative min-h-[110vh] flex flex-col justify-center overflow-hidden pt-32 pb-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-bearo-green/10 rounded-full blur-[120px] animate-blob mix-blend-screen" />
         <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
         <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-emerald-900/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]), opacity }}
          className="lg:col-span-7 text-center lg:text-left pt-10 lg:pt-0"
        >
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-bearo-green text-sm font-bold mb-8 hover:bg-white/10 transition-colors cursor-pointer"
          >
             <span className="w-2 h-2 rounded-full bg-bearo-green animate-pulse" />
             Bearo 2.0 is live
             <ArrowRight size={14} />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[6.5rem] font-extrabold tracking-tighter leading-[0.9] mb-8"
          >
            Send Global.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bearo-green via-emerald-200 to-bearo-green bg-300% animate-gradient">
              Spend Local.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            The financial superapp for the modern world. Instant transfers, zero hidden fees, and 
            <span className="text-white"> up to 4.5% APY</span> on your savings.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="gap-2 group">
              <Apple size={22} className="group-hover:-translate-y-0.5 transition-transform" />
              Download for iOS
            </Button>
            <Button variant="outline" size="lg" className="gap-2 group">
               <Play size={22} className="group-hover:-translate-y-0.5 transition-transform fill-current" />
               Android
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
             className="mt-12 flex items-center justify-center lg:justify-start gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
          >
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="h-6 invert" alt="Google" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="h-5 invert" alt="Amazon" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className="h-5 invert" alt="Netflix" />
          </motion.div>
        </motion.div>

        {/* Right Content - Floating Phone */}
        <div className="lg:col-span-5 relative h-[800px] hidden lg:flex items-center justify-center">
          <motion.div 
            style={{ y, rotate, scale }}
            className="relative z-20"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-b from-bearo-green/50 to-blue-600/50 rounded-[60px] blur-2xl opacity-40 animate-pulse-slow" />
              <PhoneFrame>
                 <AppInterface />
              </PhoneFrame>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-40 -left-24 glass-card p-4 rounded-2xl border border-white/10 w-48 shadow-2xl backdrop-blur-xl z-30"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-bearo-green rounded-full flex items-center justify-center text-black font-bold">B</div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Stock Up</div>
                  <div className="text-white font-bold flex items-center gap-1">
                    BEARO <span className="text-bearo-green text-xs">+12.4%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
               animate={{ y: [20, -20, 20] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-40 -right-12 glass-card p-4 rounded-2xl border border-white/10 w-auto shadow-2xl backdrop-blur-xl z-30"
            >
               <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/100?img=5" className="w-10 h-10 rounded-full border-2 border-bearo-green" alt="User" />
                <div>
                  <div className="text-xs text-gray-400 font-medium">Payment from Alex</div>
                  <div className="text-bearo-green font-bold text-lg">+$1,250.00</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};