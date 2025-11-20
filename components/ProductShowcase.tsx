import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  return (
    <section id="banking" className="py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        {/* Section 1: Banking */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/investing/800/600" 
                alt="Investing Interface" 
                className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="inline-block bg-bearo-green text-black px-3 py-1 rounded-full text-xs font-bold mb-2 uppercase tracking-wider">Investing</div>
                 <h3 className="text-2xl font-bold">Watch your portfolio grow</h3>
              </div>
            </div>
          </motion.div>
          
          <div className="lg:w-1/2 space-y-8">
             <h2 className="text-4xl md:text-6xl font-extrabold leading-none">
               Investing for <br/>
               <span className="text-bearo-green">everyone.</span>
             </h2>
             <p className="text-xl text-gray-400 leading-relaxed">
               Whether you’re an expert or just getting started, Bearo is the easiest place to invest in stocks and crypto. Buy a fraction of a share with as little as $1.
             </p>
             <ul className="space-y-4">
               {['Real-time market data', 'No commission fees', 'Auto-invest scheduling'].map(item => (
                 <li key={item} className="flex items-center gap-3 text-lg font-medium">
                   <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-bearo-green">
                     <ArrowUpRight size={14} />
                   </span>
                   {item}
                 </li>
               ))}
             </ul>
          </div>
        </div>

        {/* Section 2: Card */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
             <h2 className="text-4xl md:text-6xl font-extrabold leading-none">
               The Card that <br/>
               <span className="text-white">stands out.</span>
             </h2>
             <p className="text-xl text-gray-400 leading-relaxed">
               The Bearo Card is a free, customizable debit card that gives you exclusive discounts at the places you shop everyday.
             </p>
             <button className="text-bearo-green font-bold text-lg hover:underline decoration-2 underline-offset-4">
               Design your card &rarr;
             </button>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
             {/* Stylized Credit Card */}
             <div className="w-[400px] h-[250px] bg-gradient-to-br from-gray-800 to-black rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group hover:-translate-y-4 transition-transform duration-500">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-8 right-8 text-bearo-green font-bold text-xl italic">Bearo</div>
                <div className="absolute top-8 left-8 w-12 h-8 bg-yellow-500/80 rounded-md flex items-center justify-center">
                  <div className="w-8 h-5 border-2 border-yellow-200 rounded-sm"></div>
                </div>
                
                <div className="absolute bottom-8 left-8">
                   <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Card Holder</div>
                   <div className="text-white font-mono text-lg tracking-widest">ALEXANDER BEAR</div>
                </div>
                
                <div className="absolute bottom-8 right-8">
                   <div className="flex gap-1">
                     <div className="w-8 h-8 bg-white/80 rounded-full opacity-80"></div>
                     <div className="w-8 h-8 bg-white/80 rounded-full -ml-4 opacity-80"></div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};