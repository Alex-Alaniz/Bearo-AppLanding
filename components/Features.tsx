import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, TrendingUp, Globe, ArrowUpRight } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "Lightning Fast",
    description: "Send money globally in seconds. No waiting days for wire transfers to clear.",
    icon: Zap,
  },
  {
    title: "Invest Instantly",
    description: "Buy Bitcoin, Ethereum, and Stocks starting with just $1. Auto-invest daily.",
    icon: TrendingUp,
  },
  {
    title: "Ironclad Security",
    description: "Biometric authentication and bank-grade encryption keep your funds safe.",
    icon: ShieldCheck,
  },
  {
    title: "Spend Anywhere",
    description: "Use your virtual Bearo card instantly with Apple Pay and Google Pay.",
    icon: Globe,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-black relative overflow-hidden">
       {/* Gradient Mesh */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-bearo-green/5 blur-[100px] pointer-events-none" />

       <div className="container mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="max-w-2xl">
             <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tighter">
               One app for all <br/>things <span className="text-bearo-green">money.</span>
             </h2>
             <p className="text-xl text-bearo-gray leading-relaxed">
               Replace your bank, broker, and payment app with one simple interface.
             </p>
           </div>
           <button className="hidden md:flex items-center gap-2 text-white font-bold hover:text-bearo-green transition-colors">
             See all features <ArrowUpRight size={20} />
           </button>
         </div>

         <motion.div 
           variants={container}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, margin: "-100px" }}
           className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
         >
           {features.map((feature, index) => (
             <motion.div
               key={feature.title}
               variants={item}
               whileHover={{ y: -10 }}
               className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-bearo-green/30 transition-all duration-500 overflow-hidden"
             >
               <div className="absolute top-0 right-0 w-32 h-32 bg-bearo-green/5 rounded-full blur-2xl group-hover:bg-bearo-green/10 transition-colors duration-500" />
               
               <div className="relative z-10">
                 <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-bearo-green group-hover:scale-110 transition-all duration-500 text-white group-hover:text-black shadow-lg">
                   <feature.icon size={32} strokeWidth={1.5} />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-bearo-green transition-colors">{feature.title}</h3>
                 <p className="text-gray-400 leading-relaxed font-medium">{feature.description}</p>
               </div>
             </motion.div>
           ))}
         </motion.div>
       </div>
    </section>
  );
};