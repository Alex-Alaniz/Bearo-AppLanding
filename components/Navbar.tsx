import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Investing', href: '#banking' },
    { label: 'Business', href: '#business' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || mobileMenuOpen 
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          {/* Using a Bitcoin-like B since the prompt mentioned it */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-bearo-green rounded-xl rotate-3 group-hover:rotate-12 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-white rounded-xl -rotate-3 group-hover:-rotate-6 transition-transform duration-300 border-2 border-black"></div>
            <span className="relative z-10 font-black text-2xl text-black">₿</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">Bearo</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-sm font-bold text-gray-400 hover:text-white transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-bold text-white hover:text-bearo-green transition-colors">Log In</a>
          <Button variant="primary" size="sm" className="bg-white text-black hover:bg-bearo-green hover:text-black">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full h-screen bg-black/95 backdrop-blur-xl p-8 md:hidden flex flex-col gap-8 animate-in slide-in-from-top-5">
          {links.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-3xl font-bold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-8">
             <Button className="w-full py-4 text-lg">Get Started</Button>
             <Button variant="outline" className="w-full py-4 text-lg">Log In</Button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};