import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Map, Bell, Battery, AlertCircle, Heart, Wifi } from 'lucide-react';

interface AboutSectionProps {
  mockupImage: string;
}

export default function AboutSection({ mockupImage }: AboutSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  const trackingSteps = [
    {
      title: "1. The Silent Concern",
      desc: "Your child is heading home late from campus. Instead of texting 'Asan ka na?' recursively, the app runs background diagnostic syncs.",
      icon: <AlertCircle className="h-4 w-4 text-orange-400" />
    },
    {
      title: "2. Real-Time Security",
      desc: "The app securely updates coordinates in the background. Family members instantly see a reassuring 'On Her Way - Safe' status on their map.",
      icon: <Wifi className="h-4 w-4 text-safety-green" />
    },
    {
      title: "3. Safe Zone Auto-Check",
      desc: "As soon as she enters your residential geofence, a subtle notification drops. The family breathes easy in absolute silent peace of mind.",
      icon: <ShieldCheck className="h-4 w-4 text-brand-purple-500" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0314]/90 relative overflow-hidden border-t border-brand-purple-800/50">
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-purple-500/10 blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-12 right-10 w-96 h-96 rounded-full bg-emergency-red/5 blur-[125px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Copy/Text Explanations & Trust factors */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:order-last">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ef4444] block mb-3">
                GUARDED CONTEXT
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-6">
                Your Loved Ones are Never Alone.<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-safety-green to-teal-400">
                  Peace of Mind, Redefined.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                <strong className="text-white font-medium">AsanKana</strong> is named after the universal, emotional question, <em className="text-emergency-red font-medium not-italic">"Asan ka na?"</em> ("Where are you now?"). We designed this application as a protective blanket to answer that exact question instantly, keeping your family and trusted contacts connected with high-fidelity, real-time safety services.
              </p>

              {/* Segment Toggle Box */}
              <div className="bg-[#130727] rounded-2xl p-6 border border-brand-purple-500/20 mb-8">
                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">How it works during transitions</p>
                
                <div className="space-y-4">
                  {trackingSteps.map((step, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        activeStep === idx 
                          ? 'bg-brand-purple-800/40 border-emergency-red/40 shadow-md shadow-black/25' 
                          : 'bg-transparent border-transparent hover:bg-brand-purple-800/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-1.5 rounded-lg ${activeStep === idx ? 'bg-white/10' : 'bg-white/5'}`}>
                          {step.icon}
                        </div>
                        <h4 className={`text-sm font-semibold transition-colors ${activeStep === idx ? 'text-white' : 'text-gray-400'}`}>
                          {step.title}
                        </h4>
                      </div>
                      
                      {activeStep === idx && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-2 text-xs text-gray-300 pl-8 leading-relaxed"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric Row */}
              <div className="grid grid-cols-3 gap-4 text-center sm:text-left">
                <div className="px-2">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-white">0.8s</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 font-mono uppercase mt-1">SOS Alert Dispatch</div>
                </div>
                <div className="px-2 border-l border-brand-purple-500/20">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-safety-green">99.8%</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 font-mono uppercase mt-1">GPS Signal Accuracy</div>
                </div>
                <div className="px-2 border-l border-brand-purple-500/20">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-emergency-red">&lt;3%</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 font-mono uppercase mt-1">Daily Battery Use</div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Column 2: The Mockup Image Display (generated image) */}
          <div className="lg:col-span-5 relative flex justify-center lg:order-first">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-none"
            >
              {/* Outer soft glowing rings */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple-500/30 to-emergency-red/20 rounded-[3rem] blur-2xl opacity-60"></div>
              
              <div className="relative rounded-[2.5rem] bg-[#0c0517] p-3 border-4 border-brand-purple-700/60 shadow-3xl overflow-hidden aspect-[3/4]">
                <img 
                  src={mockupImage} 
                  alt="High fidelity smartphone map screenshot of AsanKana real-time tracking interface" 
                  className="rounded-[2.2rem] w-full h-full object-cover shadow-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Simulated Notification Tray Floating On Top */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[85%] bg-[#12071f]/95 backdrop-blur border border-brand-purple-500/40 rounded-xl p-3 shadow-xl flex items-start space-x-2.5">
                  <div className="h-7 w-7 rounded-full bg-emergency-red/25 border border-emergency-red flex items-center justify-center shrink-0">
                    <Heart className="h-3.5 w-3.5 text-emergency-red fill-current" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">Panic Buffer Triggered</span>
                      <span className="text-[8px] text-gray-400 font-mono">Just Now</span>
                    </div>
                    <p className="text-[10px] text-gray-300 leading-tight mt-0.5">
                      Luke clicked SOS. Location broadcast active & broadcasting audio to your secure feed.
                    </p>
                  </div>
                </div>

                {/* Bottom floating map indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-black/75 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-safety-green animate-pulse"></span>
                    <span className="text-[10px] font-semibold text-white uppercase tracking-wider">Live Tracking Protocol</span>
                  </div>
                  <span className="text-[9px] font-mono text-gray-400">120 Hz Sync Active</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
