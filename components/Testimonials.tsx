import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-bearo-green text-black overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-7xl md:text-9xl font-black tracking-tighter opacity-10 mb-8 select-none">
          40,000,000
        </h2>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-3xl md:text-5xl font-bold leading-tight mb-12">
            "Bearo completely changed how I handle money. It's fast, it's fun, and it actually works."
          </p>
          <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-12 bg-black rounded-full overflow-hidden">
                <img src="https://picsum.photos/seed/user1/100/100" alt="User" />
             </div>
             <div className="text-left">
               <div className="font-bold text-lg">Sarah J.</div>
               <div className="text-sm opacity-70">Small Business Owner</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};