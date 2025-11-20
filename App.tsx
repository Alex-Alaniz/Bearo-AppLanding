import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { Security } from './components/Security';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Button } from './components/ui/Button';
import { ArrowDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-bearo-green selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <Security />
        <Testimonials />
        
        {/* Final CTA Section */}
        <section className="py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 -z-10" />
          <div className="container mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
              Ready to start?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto">Download on iOS</Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">Download on Android</Button>
            </div>
            
            <div className="mt-16 animate-bounce">
              <ArrowDown className="mx-auto opacity-50" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;