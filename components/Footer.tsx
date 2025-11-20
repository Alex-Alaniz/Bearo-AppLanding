import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <div className="text-2xl font-extrabold flex items-center gap-2 mb-6">
               <span className="w-8 h-8 bg-bearo-green rounded-lg flex items-center justify-center text-black text-xl">B</span>
               BEARO
            </div>
            <p className="text-gray-500 max-w-xs">
              Brokerage services by Bearo Investing LLC, member FINRA / SIPC.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-4 text-gray-300">Product</h4>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-bearo-green">Card</a></li>
                <li><a href="#" className="hover:text-bearo-green">Investing</a></li>
                <li><a href="#" className="hover:text-bearo-green">Banking</a></li>
                <li><a href="#" className="hover:text-bearo-green">Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-300">Company</h4>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-bearo-green">Careers</a></li>
                <li><a href="#" className="hover:text-bearo-green">Press</a></li>
                <li><a href="#" className="hover:text-bearo-green">Support</a></li>
                <li><a href="#" className="hover:text-bearo-green">Legal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-300">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-bearo-green hover:text-black transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-bearo-green hover:text-black transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-bearo-green hover:text-black transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-600">
          <p>&copy; 2024 Bearified, Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};