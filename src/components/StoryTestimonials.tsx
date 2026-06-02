import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock, AlertCircle, Quote, ShieldAlert, CheckCircle2, 
  MapPin, User, ChevronRight, GraduationCap, Backpack, Plane, Briefcase 
} from 'lucide-react';

export default function StoryTestimonials() {
  const [activeScenario, setActiveScenario] = useState("commuter");

  const scenarios = [
    {
      id: "commuter",
      title: "Late-Night Commute",
      subtitle: "University Student Travelling Home",
      icon: <GraduationCap className="h-5 w-5 text-indigo-400" />,
      situation: "Mia (20) takes two transit transfers back to her lodging at 10:30 PM. In heavy downpours, cell reception slows down.",
      problem: "Traditional text updates like 'On my way' go undelivered. Mia's mother enters a state of panic, calling repeatedly with no response.",
      criticalTime: "Minutes spent in panic degrade emotional wellness and delay actual contact with responders if an actual incident occurred.",
      solution: "AsanKana silently streams Mia's low-power coordinates. When Mia's transit takes an anomalous 20-minute detour, her mother receives a gentle, non-alarmist routing variation notice. When she arrives, the geofences trigger: 'Mia has arrived safely.'",
      badge: "Real-time sync"
    },
    {
      id: "child",
      title: "Solo School Runs",
      subtitle: "Primary School Student Walkway",
      icon: <Backpack className="h-5 w-5 text-safety-green" />,
      situation: "Lucas (10) walks three blocks from the public shuttle drop-off to his afternoon tutorials independently.",
      problem: "Busy parents cannot leave their workspace desks to walk with him, but spend the entire 20 minutes staring silently at their static calendars.",
      criticalTime: "If a child goes missing or wanders away, the first 15 minutes are critical for recovery and neighborhood community response.",
      solution: "AsanKana establishes a circular 'Safe Zone' corridor around Lucas's tutorial center. The high-precision system triggers a comforting SMS-backed confirmation as Lucas step-crosses the entrance line. No phone checking, no panic.",
      badge: "Safe-zone alerts"
    },
    {
      id: "traveler",
      title: "The Solo Explorer",
      subtitle: "Cross-Province Bus Travel",
      icon: <Plane className="h-5 w-5 text-cyan-400" />,
      situation: "Ethan (26) is taking a solo night-liner bus across a province with mountainous roads and intermittent cellular drop zones.",
      problem: "If the bus suffers an accident or breaks down in blacked-out zones, Ethan has no local contacts who know exactly where the bus stopped.",
      criticalTime: "Every minute counts in remote environments where medical access is limited and search fields span hundreds of square kilometers.",
      solution: "Before boards, Ethan starts a 'Transit Cascade' with his brother. Even if cellular connectivity temporarily ceases, AsanKana securely stores his last known cached trajectory locally and uploads immediately upon any signal, marking his precise position.",
      badge: "Offline cached tracking"
    },
    {
      id: "employee",
      title: "Late Shift Walks",
      subtitle: "Hospital Nurse Commuting on Foot",
      icon: <Briefcase className="h-5 w-5 text-pink-400" />,
      situation: "Clara (32), an ER nurse, finishes her rotational shift at 2:00 AM, walking through dark parking lots and quiet medical alleys.",
      problem: "She feels highly vulnerable. Keeping her hands busy dialling contacts or holding bulky alarms attracts unwanted attention.",
      criticalTime: "The instant response delay. Pulling a phone, unlocking it, and typing a crisis text takes 15+ complex neurological steps during adrenaline spikes.",
      solution: "Clara walks with her hand in her pocket, resting her thumb near her phone's volume configuration. A rapid triple-click acts as a silent 'Hush Distress' alert. It instantly opens a secure live audio streaming pipeline to her husband.",
      badge: "Silent Hush SOS"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Maria Santos",
      role: "Mother of Two",
      quote: "Before AsanKana, my daughter's late commute back from her college clinic was a source of crippling anxiety. Now, I see her transit on the map silently. I don't need to text her 'Asan ka na?' anymore. It's absolute peace of mind.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Solo Backpacker & Lead Designer",
      quote: "I travel to remote regions. Sharing live location links with my partner is incredibly easy on AsanKana. The battery-saving engine actually works—my phone survived a 3-day trek without draining while active.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 3,
      name: "Alyssa Valdez",
      role: "Night-Shift BPO Professional",
      quote: "Walking out of the office at midnight used to feel terrifying. Having the silent SOS feature mapped to my physical hardware keys gives me a literal shield in my pocket. This app is an absolute necessity.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
    }
  ];

  const currentScen = scenarios.find(s => s.id === activeScenario) || scenarios[0];

  return (
    <section id="scenarios" className="py-24 bg-[#0a0314] relative sm:px-6 lg:px-8 border-t border-brand-purple-800/40">
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-brand-purple-700/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Title and Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ef4444] bg-emergency-red/10 border border-emergency-red/20 px-3 py-1 rounded-full inline-block mb-3">
            EMOTIONAL REALITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
            Real Stories, Real Anxiety, Solid Protection
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Safety isn't about dots on a screen—it is about the human heart. How families manage their silent worry when distance separates them.
          </p>
        </div>

        {/* Section Layout: Interactive Scenarios & Problems/Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          
          {/* Side Selector (3 columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
            <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2 pl-1">Select a critical scenario</p>
            {scenarios.map((scen) => (
              <button
                key={scen.id}
                onClick={() => setActiveScenario(scen.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer group ${
                  activeScenario === scen.id 
                    ? 'bg-[#180a2f] border-emergency-red/40 text-white shadow-lg' 
                    : 'bg-[#120723]/50 border-brand-purple-700/20 text-gray-400 hover:text-white hover:border-brand-purple-500/35 hover:bg-[#12071f]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg transition-colors ${
                    activeScenario === scen.id ? 'bg-emergency-red/20 text-white' : 'bg-[#0a0314]'
                  }`}>
                    {scen.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold tracking-wide font-display">{scen.title}</h4>
                    <span className="text-[10px] text-gray-400 block mt-0.5">{scen.subtitle}</span>
                  </div>
                </div>
                <ChevronRight className={`h-4 w-4 text-gray-500 group-hover:translate-x-1 transition-transform ${
                  activeScenario === scen.id ? 'text-emergency-red translate-x-1' : ''
                }`} />
              </button>
            ))}
          </div>

          {/* Details Panel (8 columns) */}
          <div className="lg:col-span-8 bg-[#130727]/90 border border-brand-purple-700/35 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm shadow-2xl">
            {/* Soft decorative background glow inside card */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-emergency-red/10 blur-[80px] pointer-events-none"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentScen.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between border-b border-brand-purple-700/30 pb-4">
                  <div>
                    <span className="text-xs font-mono text-emergency-red font-semibold tracking-wider uppercase bg-emergency-red/10 px-2.5 py-1 rounded">
                      {currentScen.badge}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white mt-2">
                      {currentScen.title} • {currentScen.subtitle}
                    </h3>
                  </div>
                </div>

                {/* Grid of details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* The Situation / Problem */}
                  <div className="space-y-4">
                    <div className="bg-[#190a31] border border-orange-500/20 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 text-orange-400 mb-1.5">
                        <User className="h-4 w-4 shrink-0" />
                        <span className="text-xs font-mono uppercase tracking-wider font-semibold">The Live Situation</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed font-sans">{currentScen.situation}</p>
                    </div>

                    <div className="bg-[#1f091f] border border-emergency-red/20 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 text-emergency-red mb-1.5">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span className="text-xs font-mono uppercase tracking-wider font-semibold">The Anxious Problem</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed font-sans">{currentScen.problem}</p>
                    </div>
                  </div>

                  {/* Why Time Matters / How AsanKana Helps */}
                  <div className="space-y-4">
                    <div className="bg-[#14122d] border border-brand-purple-500/20 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 text-indigo-400 mb-1.5">
                        <Clock className="h-4 w-4 shrink-0" />
                        <span className="text-xs font-mono uppercase tracking-wider font-semibold">Why Response Time Matters</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed font-sans">{currentScen.criticalTime}</p>
                    </div>

                    <div className="bg-[#0b171c] border border-safety-green/20 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 text-safety-green mb-1.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                        <span className="text-xs font-mono uppercase tracking-wider font-semibold">The AsanKana Shield</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed font-sans">{currentScen.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-gray-400 bg-brand-purple-800/10 p-3 rounded-lg border border-brand-purple-500/10 font-mono">
                  <span>LATENCY OPTIMIZER VERIFIED</span>
                  <span className="text-safety-green flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-safety-green animate-ping"></span>
                    ACTIVE DEFENSE LINK
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Testimonial Cards Section */}
        <div className="border-t border-brand-purple-700/20 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-display font-bold text-white tracking-tight">
              Testimonials from Rested Minds
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Words from fathers, independent travelers, and commuters who have tested AsanKana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test) => (
              <div 
                key={test.id}
                className="bg-[#110721]/80 rounded-2xl p-6 border border-brand-purple-700/30 flex flex-col justify-between relative group hover:border-brand-purple-500/50 hover:bg-[#150a29] transition-all duration-300"
              >
                <div className="absolute top-6 right-6 text-brand-purple-500/30">
                  <Quote className="h-10 w-10 rotate-180" />
                </div>

                <p className="text-sm text-gray-300 italic leading-relaxed mb-6 relative z-10">
                  "{test.quote}"
                </p>

                <div className="flex items-center space-x-3 pt-4 border-t border-brand-purple-750/30">
                  <div className="relative">
                    <img 
                      src={test.image} 
                      alt={test.name} 
                      className="h-10 w-10 rounded-full object-cover border border-brand-purple-500/30"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 bg-safety-green border-2 border-[#110721] rounded-full"></span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">{test.name}</h4>
                    <span className="text-[10px] text-gray-400 font-mono tracking-wide">{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
