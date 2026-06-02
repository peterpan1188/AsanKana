import React from 'react';
import { Shield, Heart, MapPin, Globe, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070210] border-t border-brand-purple-700/30 text-gray-400 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle bottom glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-brand-purple-700/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-brand-purple-700/20 pb-12 mb-12">
          
          {/* Logo & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div 
              onClick={scrollToTop} 
              className="flex items-center space-x-2 cursor-pointer group w-fit"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-emergency-red/20 rounded-lg blur-md group-hover:bg-emergency-red/35 transition-all"></div>
                <div className="relative h-9 w-9 bg-[#12071f] rounded-lg border border-brand-purple-500/50 flex items-center justify-center">
                  <Shield className="h-4.5 w-4.5 text-emergency-red" />
                </div>
              </div>
              <span className="text-lg font-display font-bold tracking-tight text-white">AsanKana</span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Named after the universal, protective phrase <em className="text-gray-200 not-italic">"Asan ka na?"</em> ("Where are you now?"). Built with deep empathy and cutting-edge software to ensure your loved ones are never alone in critical transitions.
            </p>

            <div className="flex items-center space-x-2.5 text-[11px] font-mono text-gray-500">
              <Globe className="h-3.5 w-3.5 text-safety-green" />
              <span>Global Dispatch Protocol active 2026</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About the App
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Protection Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('scenarios')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Anxiety Scenarios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  FAQ & Inquiries
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Collaborate Form
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct Info / Social Elements */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Privacy Oath</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              We encrypt and partition all tracking telemetry at rest. We never sell location footprints to third-party ad networks. Your locations remain secure within your circles.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <span className="text-[10px] font-mono text-safety-green bg-safety-green/10 border border-safety-green/25 px-2 py-0.5 rounded uppercase">
                GDPR Secure
              </span>
              <span className="text-[10px] font-mono text-indigo-400 bg-indigo-400/10 border border-indigo-400/25 px-2 py-0.5 rounded uppercase">
                AES-256 Encrypted
              </span>
            </div>
          </div>

        </div>

        {/* Closing details & up indicator */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-gray-500 gap-4">
          <div className="flex items-center space-x-1.5 order-2 sm:order-1 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} AsanKana Co. All Rights Reserved.</span>
            <span>•</span>
            <span className="text-gray-400 flex items-center gap-1">
              Crafted with <Heart className="h-3 w-3 text-emergency-red fill-current" /> for safety
            </span>
          </div>

          {/* Jump to top */}
          <div className="order-1 sm:order-2 flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-400 hover:text-white transition-colors underline cursor-pointer"
            >
              Collaborate With Us
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#12071f] hover:bg-brand-purple-800 rounded-full border border-brand-purple-500/20 text-white cursor-pointer transition-colors shadow flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
