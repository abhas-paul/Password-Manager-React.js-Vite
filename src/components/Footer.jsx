import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-6 px-4 shadow-inner">
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo and Brand Text */}
        <section className="flex items-center space-x-3">
          <img
            src="/icon.png"
            width={50}
            alt="Logo"
            className="rounded-lg shadow-md"
          />
          <p className="text-sm md:text-base tracking-wide">
            <span className="font-semibold text-emerald-300">Pass</span>
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 text-transparent bg-clip-text ml-1 font-semibold">Matters</span> © {new Date().getFullYear()}
          </p>
        </section>

        {/* Made with Love */}
        <section className="flex items-center space-x-2 text-slate-300">
          <Heart className="text-red-500 animate-pulse" size={18} />
          <p className="text-sm md:text-base">
            Made with <span className="text-red-400 font-semibold">love</span> by <span className="text-emerald-300 font-semibold">Abhas Paul</span>
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
