import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, MapPin, AlertTriangle, ArrowDown, User, Sparkles, Heart } from 'lucide-react';

interface HeroSectionProps {
  heroImage: string;
}

export default function HeroSection({ heroImage }: HeroSectionProps) {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col justify-center">
      {/* Decorative Cinematic Lighting Glimmers */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-purple-700/15 blur-[120px] pointer-events-none"></div>
      <div className="absolute -top-10 right-10 w-[500px] h-[500px] rounded-full bg-[#1b0730]/40 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-emergency-red/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full bg-safety-green/8 blur-[90px] pointer-events-none"></div>

      {/* Grid Pattern overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#0f051d_100%)] pointer-events-none"></div>
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#ffffff 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Responsive 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 text-left max-w-2xl mx-auto lg:mx-0">
            {/* Partnership status tag */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#170a2b] border border-brand-purple-500/35 rounded-full mb-6 shadow-inner"
            >
              <Sparkles className="h-3.5 w-3.5 text-emergency-red animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono font-medium text-gray-300">
                Currently in MVP development — open for partnerships & collaborations
              </span>
            </motion.div>

            {/* Strong Emotional Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6 leading-[1.1] sm:leading-tight"
            >
              Know Where They Are.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                Because Every Single{' '}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emergency-red via-emergency-red to-orange-500 relative">
                Second Matters.
                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-emergency-red/80 rounded blur-[1px]"></span>
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 mb-8 font-sans tracking-wide leading-relaxed"
            >
              AsanKana is an emotional family safety and real-time emergency response platform built for peace of mind, connected protection, and immediate communication. Empowering Filipino families with security networks that keep loved ones connected even in high-stress transitions.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-start gap-4"
            >
              <button
                onClick={() => handleScroll('contact')}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-brand-purple-700 via-brand-purple-500 to-emergency-red/90 hover:from-brand-purple-500 hover:to-emergency-red text-white font-medium rounded-full cursor-pointer transition-all duration-300 shadow-[0_4px_25px_rgba(239,68,68,0.25)] hover:shadow-[0_4px_30px_rgba(239,68,68,0.45)] transform hover:-translate-y-0.5 text-sm font-display flex items-center justify-center gap-2 group border border-white/10"
              >
                Get Early Access
                <Heart className="h-4 w-4 text-white fill-white/20 group-hover:scale-125 transition-transform" />
              </button>
              
              <button
                onClick={() => handleScroll('about')}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#140b25]/60 hover:bg-[#1f103b] text-gray-200 hover:text-white font-medium rounded-full cursor-pointer transition-all duration-300 border border-brand-purple-700/60 hover:border-brand-purple-500/80 text-sm font-display flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowDown className="h-4 w-4 text-emerald-400 animate-bounce" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual with Filipino Image & Overlay Cards */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer soft glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple-500/25 to-emergency-red/15 rounded-3xl blur-2xl opacity-75"></div>

              {/* Floating UI Widget 1: Live Status Group */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -left-6 top-10 z-20 w-48 sm:w-56 p-3 bg-[#160d29]/95 backdrop-blur-md rounded-2xl border border-brand-purple-500/30 shadow-2xl"
              >
                <div className="flex items-center space-x-2.5 mb-2">
                  <div className="p-1 bg-safety-green/10 rounded-lg">
                    <ShieldCheck className="h-4 w-4 text-safety-green" />
                  </div>
                  <div>
                    <h5 className="text-[11px] sm:text-xs font-bold text-white leading-none">Safe Network</h5>
                    <span className="text-[8px] sm:text-[9px] font-mono text-gray-400">4 Contacts Active</span>
                  </div>
                </div>
                
                {/* Micro listing */}
                <div className="space-y-1.5 text-[9px] sm:text-[10px]">
                  <div className="flex items-center justify-between p-1 rounded bg-white/5 border border-white/5">
                    <span className="text-gray-300 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-safety-green"></span>
                      Sophia (Nanay)
                    </span>
                    <span className="text-gray-400 font-mono">Synced</span>
                  </div>
                  <div className="flex items-center justify-between p-1 rounded bg-white/5 border border-white/5">
                    <span className="text-gray-300 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-safety-green"></span>
                      Noah (Anak)
                    </span>
                    <span className="text-safety-green font-semibold">Safe</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating UI Widget 2: Emergency Response Alert */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -right-6 bottom-16 z-20 w-44 sm:w-52 p-3 bg-[#1e081c]/95 backdrop-blur-md rounded-2xl border border-emergency-red/40 shadow-2xl flex flex-col"
              >
                <div className="flex items-center space-x-2 mb-1">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency-red opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emergency-red"></span>
                  </span>
                  <h5 className="text-[11px] sm:text-xs font-bold text-white">Transit Anomaly</h5>
                </div>
                <p className="text-[9px] sm:text-[10px] text-gray-300 leading-normal">
                  Route variation warning. Pre-prepared message sent to Nanay.
                </p>
                <div className="mt-2 py-0.5 px-1 bg-emergency-red/15 border border-emergency-red/35 rounded text-[8px] sm:text-[9px] text-emergency-red font-mono text-center uppercase tracking-wider font-semibold">
                  SOS READY
                </div>
              </motion.div>

              {/* Master Artwork Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative rounded-3xl overflow-hidden border border-brand-purple-500/35 bg-brand-purple-800 shadow-2xl aspect-[3/4]"
              >
                <img 
                  src={heroImage} 
                  alt="Young Filipino woman looking at her phone at night connected securely" 
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f051d]/90 via-transparent to-transparent"></div>

                {/* Simulated radar locator nodes */}
                <div className="absolute left-[35%] top-[55%] z-10 pointer-events-none">
                  <span className="flex h-5 w-5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emergency-red opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-emergency-red/30 border border-emergency-red flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-emergency-red"></span>
                    </span>
                  </span>
                </div>
                
                {/* GPS bottom overlay metadata */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/75 rounded-xl px-3 py-1.5 text-[9px] font-mono text-gray-300 border border-white/10 backdrop-blur-sm shadow z-20 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-emergency-red" />
                    Manila, PH • 14.5995° N, 120.9842° E
                  </span>
                  <span className="text-safety-green font-semibold uppercase">ACTIVE SYNC</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
