import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0f051d]/85 backdrop-blur-md border-b border-brand-purple-700/40 py-3 shadow-lg shadow-black/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emergency-red/20 rounded-lg blur-md group-hover:bg-emergency-red/35 transition-all"></div>
              <div className="relative h-10 w-10 bg-brand-purple-800 rounded-lg border border-brand-purple-500/50 flex items-center justify-center">
                <Shield className="h-5 w-5 text-emergency-red group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-safety-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-safety-green"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold tracking-tight text-white flex items-center gap-1">
                AsanKana
              </span>
              <span className="text-[9px] font-mono tracking-widest uppercase text-gray-400">
                LIVED SAFE
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              About the App
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('scenarios')} 
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Stories
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Collaborate
            </button>
          </nav>

          {/* Header CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="relative group overflow-hidden px-4 py-2 text-xs font-display font-medium rounded-full border border-emergency-red/40 text-white transition-all cursor-pointer bg-brand-purple-800/50 backdrop-blur-sm shadow-inner duration-300 hover:border-emergency-red"
            >
              <div className="absolute inset-0 w-3 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-[-40px] group-hover:translate-x-[150px] transition-transform duration-1000"></div>
              <span className="flex items-center gap-1.5">
                Join Early Access
                <ArrowRight className="h-3.5 w-3.5 text-emergency-red group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#130726] border-b border-brand-purple-700/60 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-brand-purple-800/40"
              >
                About the App
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-brand-purple-800/40"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('scenarios')}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-brand-purple-800/40"
              >
                Stories
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-brand-purple-800/40"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-brand-purple-800/40"
              >
                Collaborate
              </button>
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full h-11 bg-gradient-to-r from-brand-purple-700 to-emergency-red/80 hover:from-brand-purple-500 hover:to-emergency-red text-white font-medium rounded-lg text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-md shadow-emergency-red/10 animate-pulse-subtle"
                >
                  Join Early Access <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
