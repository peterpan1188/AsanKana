import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Users, AlertTriangle, Share2, Bell, Shield, 
  History, Battery, Contact, Zap, CircleDot, Volume2, ShieldAlert
} from 'lucide-react';

export default function FeaturesSection() {
  // Simulated coordinate ticker for Cardinal coordinates in Manila
  const [coordinates, setCoordinates] = useState({ lat: 14.5995, lng: 120.9842 });
  const [activeSOS, setActiveSOS] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoordinates(prev => ({
        lat: Number((prev.lat + (Math.random() - 0.5) * 0.0001).toFixed(5)),
        lng: Number((prev.lng + (Math.random() - 0.5) * 0.0001).toFixed(5))
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-24 bg-[#0f051d] relative overflow-hidden sm:px-6 lg:px-8">
      {/* Background cinematic glimmers */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-brand-purple-700/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-emergency-red/5 blur-[135px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Title and Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-emergency-red bg-emergency-red/10 border border-emergency-red/25 px-4 py-1.5 rounded-full inline-block mb-4 shadow-[0_2px_12px_rgba(239,68,68,0.1)]">
            🛡️ WHY CHOOSE ASANKANA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
            Stop worrying when they are on their commute
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Skip the stressful "Nasa'n ka na?" texts. We built AsanKana specifically for daily Filipino commutes, giving you accurate locator updates, virtual safety buffers, and a reliable connection when it matters most.
          </p>
        </div>

        {/* Bento Grid Layout - 12 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-min">
          
          {/* Card 1: Real-Time GPS Tracking Dashboard (col-span-8) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-4 lg:col-span-8 rounded-3xl border border-brand-purple-500/20 bg-[#120721]/90 p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden transition-all duration-300 hover:border-safety-green/30"
          >
            {/* Ambient hover light */}
            <div className="absolute inset-0 bg-gradient-to-br from-safety-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 bg-[#1b0a33] rounded-2xl flex items-center justify-center border border-safety-green/20 shrink-0">
                  <MapPin className="h-6 w-6 text-safety-green animate-pulse" />
                </div>
                <span className="px-2.5 py-1 text-[11px] uppercase font-mono font-bold tracking-wider text-safety-green bg-safety-green/10 rounded-md border border-safety-green/20">
                  Live Feed Active
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-black text-white mb-2">
                Real-Time Coordinate Feeds
              </h3>
              <p className="text-sm text-gray-300 max-w-xl leading-relaxed">
                Instant exact address resolutions. Pinpoint locations down to the meter with high-contrast localized telemetry, verifying routes even on high-clutter public transit routes.
              </p>
            </div>

            {/* Visual Mini Mockup panel */}
            <div className="bg-[#0b0314] rounded-2xl border border-white/5 p-4 relative font-mono text-[11px] text-gray-300 shadow-inner overflow-hidden">
              <div className="absolute top-2 right-2 flex items-center space-x-1.5">
                <span className="h-2 w-2 rounded-full bg-safety-green animate-ping"></span>
                <span className="text-[9px] text-safety-green font-bold uppercase">Streaming</span>
              </div>
              
              <div className="space-y-2.5">
                <div className="flex items-center space-x-2 text-emerald-400">
                  <span className="text-gray-500 font-bold">[$] STATUS:</span>
                  <span className="text-[10px] tracking-wide">CONNECTED TO PH-SAT-9A • BI-DIRECTIONAL LOCK</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-xs pt-1.5 border-t border-white/5">
                  <div>
                    <span className="text-gray-500 block text-[9px] uppercase tracking-wider">Latitude (Manila)</span>
                    <span className="text-white font-bold tracking-wide">{coordinates.lat}° N</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[9px] uppercase tracking-wider">Longitude (Manila)</span>
                    <span className="text-white font-bold tracking-wide">{coordinates.lng}° E</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center space-x-2 text-[10px] text-gray-400">
                  <CircleDot className="h-4 w-4 text-brand-purple-400 animate-spin" />
                  <span>Interactive Route Calibration: Manila City Metro commute verified</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Trusted Circles Contacts (col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 md:col-span-2 lg:col-span-4 rounded-3xl border border-brand-purple-500/20 bg-[#120721]/90 p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden transition-all duration-300 hover:border-brand-purple-500/35"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 bg-[#1b0a33] rounded-2xl flex items-center justify-center border border-brand-purple-500/20 shrink-0">
                  <Users className="h-6 w-6 text-brand-purple-400" />
                </div>
                <span className="px-2.5 py-1 text-[11px] uppercase font-mono font-bold tracking-wider text-brand-purple-400 bg-brand-purple-500/10 rounded-md border border-brand-purple-500/20">
                  Pamilya Sync
                </span>
              </div>
              <h3 className="text-xl font-display font-black text-white mb-2">
                Trusted Circles
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Isolate check-ins into customizable protective family grids. Customize distress rules easily for household members.
              </p>
            </div>

            {/* List of custom local relatives */}
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded-xl border border-white/5 bg-[#0b0314]/80 text-xs transition-colors hover:border-safety-green/20">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-full bg-brand-purple-900 border border-brand-purple-400/35 flex items-center justify-center text-[10px] font-bold text-brand-purple-200 shrink-0">
                    SN
                  </div>
                  <span className="text-white font-bold text-[11px]">Sophia (Nanay)</span>
                </div>
                <span className="text-[10px] font-bold text-safety-green px-1.5 py-0.5 bg-safety-green/10 rounded border border-safety-green/20">Home (Safe)</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl border border-white/5 bg-[#0b0314]/80 text-xs transition-colors hover:border-brand-purple-500/20">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#0d2218] border border-emerald-500/30 flex items-center justify-center text-[10px] font-bold text-emerald-200 shrink-0">
                    TN
                  </div>
                  <span className="text-white font-bold text-[11px]">Tomas (Tatay)</span>
                </div>
                <span className="text-[10px] font-semibold text-gray-400 px-1.5 py-0.5 bg-white/5 rounded">Work (Office)</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl border border-white/5 bg-[#0b0314]/80 text-xs transition-colors hover:border-emergency-red/20">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#20040f] border border-orange-500/30 flex items-center justify-center text-[10px] font-bold text-orange-200 shrink-0">
                    AN
                  </div>
                  <span className="text-white font-bold text-[11px]">Ate Sophia</span>
                </div>
                <span className="text-[10px] font-bold text-emergency-red px-1.5 py-0.5 bg-emergency-red/10 rounded border border-emergency-red/25 animate-pulse">LRT Transit</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: One-Click SOS Emergency Center (col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`col-span-1 md:col-span-2 lg:col-span-4 rounded-3xl border p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden transition-all duration-500 ${
              activeSOS 
                ? 'border-emergency-red/60 bg-[#1f0512]' 
                : 'border-emergency-red/20 bg-[#150414]/90 hover:border-emergency-red/45'
            }`}
          >
            {/* Intense Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-r from-emergency-red/10 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${activeSOS ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 bg-emergency-red/10 rounded-2xl flex items-center justify-center border border-emergency-red/35 shrink-0">
                  <AlertTriangle className="h-6 w-6 text-emergency-red" />
                </div>
                <span className="px-2.5 py-1 text-[9px] uppercase font-mono font-bold tracking-widest text-emergency-red bg-emergency-red/15 rounded border border-emergency-red/20">
                  HIGHEST PRIORITY
                </span>
              </div>
              <h3 className="text-xl font-display font-black text-white mb-2">
                One-Click SOS Alarm
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-normal">
                Pressing triggers a dispatch countdown sending continuous low-latency audio capture and instant telemetry alerts directly to family network pipelines.
              </p>
            </div>

            {/* Simulated interactive trigger button */}
            <div className="flex flex-col items-center justify-center py-5 bg-[#0a000c] rounded-2xl border border-white/5 relative">
              <div className="absolute top-2 right-2 flex items-center space-x-1">
                <Volume2 className="h-3 w-3 text-emergency-red animate-bounce" />
                <span className="text-[8px] font-mono text-gray-400">Audio Sync Ready</span>
              </div>
              
              <button 
                onClick={() => setActiveSOS(!activeSOS)}
                className={`relative h-20 w-20 rounded-full flex items-center justify-center font-display font-black text-xs cursor-pointer transition-all duration-300 border-4 ${
                  activeSOS 
                    ? 'bg-emergency-red border-white text-white shadow-[0_0_30px_rgba(239,68,68,0.8)] scale-95' 
                    : 'bg-[#150414] border-emergency-red text-emergency-red hover:bg-emergency-red hover:text-white shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:scale-105'
                }`}
              >
                {activeSOS ? (
                  <span className="text-[10px] animate-pulse">TRIGGERED</span>
                ) : (
                  <span>SOS</span>
                )}
                
                {/* Micro outer pulse rings */}
                {!activeSOS && (
                  <span className="absolute -inset-2.5 rounded-full border border-emergency-red/20 animate-ping pointer-events-none"></span>
                )}
              </button>
              
              <span className="text-[9px] font-mono text-gray-500 mt-3.5 uppercase tracking-wider text-center px-4">
                {activeSOS ? "SOS Broadcast Active" : "Click to simulate system trigger"}
              </span>
            </div>
          </motion.div>

          {/* Card 4: Safe Zones & Geofencing Corridors (col-span-8) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 md:col-span-4 lg:col-span-8 rounded-3xl border border-brand-purple-500/20 bg-[#120721]/90 p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden transition-all duration-300 hover:border-teal-400/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 bg-[#1b0a33] rounded-2xl flex items-center justify-center border border-teal-400/20 shrink-0">
                  <Shield className="h-6 w-6 text-teal-400" />
                </div>
                <span className="px-2.5 py-1 text-[11px] uppercase font-mono font-bold tracking-wider text-teal-400 bg-teal-400/10 rounded-md border border-teal-400/20">
                  Geofence Controller
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-black text-white mb-2">
                Localized Geofence Corridors
              </h3>
              <p className="text-sm text-gray-300 max-w-xl leading-relaxed">
                Establish high-contrast concentric virtual fence lines around critical destinations. Automatically sync arrival or detour notifications to selected circles instantly.
              </p>
            </div>

            {/* Geofencing interactive tracker UI simulation */}
            <div className="bg-[#030c0c] border border-teal-500/15 p-4 rounded-2xl font-mono text-xs text-gray-300 shadow bg-opacity-70">
              <div className="flex items-center justify-between text-[10px] pb-2 border-b border-teal-500/10 mb-2.5">
                <span className="text-teal-400 font-bold uppercase tracking-wider">Boundary Monitor</span>
                <span className="text-gray-400">Target: Ate Sophia</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-white/5 p-2.5 rounded-lg bg-[#070e17]">
                  <span className="text-[9px] text-teal-400 block font-semibold mb-0.5">ESTABLISHED GEOCORRIDOR</span>
                  <p className="text-white font-bold leading-none">UST Manila Campus</p>
                  <span className="text-[10px] text-gray-400 font-normal">Symmetric bounds: 250m radius</span>
                </div>

                <div className="border border-teal-500/10 p-2.5 rounded-lg bg-teal-500/5 flex flex-col justify-center">
                  <div className="flex items-center space-x-1.5 text-safety-green font-bold">
                    <ShieldAlert className="h-4 w-4 shrink-0" />
                    <span>BORDER CROSS VERIFIED</span>
                  </div>
                  <span className="text-[10px] text-gray-300 mt-1">Checked out 4:15 PM • Nanay notified</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Emergency Notifications Interrupt (col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-3 lg:col-span-4 rounded-3xl border border-brand-purple-500/20 bg-[#120721]/90 p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden transition-all duration-300 hover:border-amber-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="mb-6">
              <div className="w-12 h-12 bg-[#1b0a33] rounded-2xl flex items-center justify-center border border-amber-500/20 mb-5 shrink-0">
                <Bell className="h-6 w-6 text-amber-500" />
              </div>
              <h4 className="text-xl font-display font-black text-white mb-2">Focus Bypass Alerts</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Critical socket signals bypass native system DND settings during emergency states, ensuring critical alerts sound loud and clear.
              </p>
            </div>

            {/* Phone notification toast template mockup */}
            <div className="bg-[#1b0a0c] border border-amber-500/25 p-3.5 rounded-2xl shadow-xl flex items-start space-x-3 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <div>
                <p className="text-[9px] font-mono text-amber-400 font-bold uppercase tracking-widest leading-none mb-1">Critical Bypass Alarm</p>
                <p className="text-xs font-sans font-bold text-white leading-tight">
                  SITUATIONAL SOS INCOMING OUTLET
                </p>
                <span className="text-[10px] text-gray-400 font-mono mt-0.5 block">Sender: Ate Sofia (Manila Metro)</span>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Battery-Saving Engine (col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 md:col-span-3 lg:col-span-4 rounded-3xl border border-brand-purple-500/20 bg-[#120721]/90 p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden transition-all duration-300 hover:border-emerald-400/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="mb-6">
              <div className="w-12 h-12 bg-[#1b0a33] rounded-2xl flex items-center justify-center border border-emerald-400/20 mb-5 shrink-0">
                <Battery className="h-6 w-6 text-emerald-400" />
              </div>
              <h4 className="text-xl font-display font-black text-white mb-2">Smart Battery System</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Smart accelerometry variables restrict power drain to under 3% daily, allowing continuous ambient tracking on long journeys.
              </p>
            </div>

            {/* Battery state simulator */}
            <div className="bg-[#040e0c] border border-emerald-500/20 p-3.5 rounded-2xl flex items-center justify-between font-mono text-xs text-white">
              <div className="flex items-center space-x-2.5">
                <div className="w-11 h-6 border-2 border-emerald-400/40 rounded-lg p-0.5 flex relative">
                  <div className="w-9/10 bg-emerald-400 h-full rounded-sm"></div>
                  <div className="w-[3px] bg-emerald-400 h-2 absolute top-1 -right-[4px] rounded-r-xs"></div>
                </div>
                <span className="font-bold text-emerald-400 text-xs">92%</span>
              </div>
              <span className="text-[9px] text-gray-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25">BATTERY DEPLOYED</span>
            </div>
          </motion.div>

          {/* Card 7: Live Locations Cascades (col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 md:col-span-3 lg:col-span-4 rounded-3xl border border-brand-purple-500/20 bg-[#120721]/90 p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden transition-all duration-300 hover:border-indigo-400/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="mb-6">
              <div className="w-12 h-12 bg-[#1b0a33] rounded-2xl flex items-center justify-center border border-indigo-400/20 mb-5 shrink-0">
                <Share2 className="h-6 w-6 text-indigo-400" />
              </div>
              <h4 className="text-xl font-display font-black text-white mb-2">Transit Broadcast</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Broadcast highly secure, time-limited live tracking intervals. Keep family updated on late transit commutes or secluded pathways.
              </p>
            </div>

            {/* Sharing duration ticker */}
            <div className="bg-[#080512] border border-indigo-500/20 p-3.5 rounded-2xl flex items-center justify-between text-xs font-mono">
              <span className="text-gray-400">Countdown:</span>
              <span className="text-indigo-400 font-bold bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/25 animate-pulse">00:44:59 mins</span>
            </div>
          </motion.div>

          {/* Card 8: Transit History Logs (col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-3 lg:col-span-4 rounded-3xl border border-brand-purple-500/20 bg-[#120721]/90 p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden transition-all duration-300 hover:border-gray-400/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="mb-6">
              <div className="w-12 h-12 bg-[#1b0a33] rounded-2xl flex items-center justify-center border border-gray-500/20 mb-5 shrink-0">
                <History className="h-6 w-6 text-gray-300" />
              </div>
              <h4 className="text-xl font-display font-black text-white mb-2">14-Day Timeline Logs</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Retrieve structured history traces to review and verify historic commutes automatically.
              </p>
            </div>

            {/* Timeline log mini panel */}
            <div className="space-y-1.5 font-mono text-[9px] text-gray-400">
              <div className="flex justify-between items-center bg-[#07030e] p-2 rounded border border-white/5">
                <span className="text-gray-300">08:15 AM - Departed Home</span>
                <span className="text-safety-green font-bold uppercase text-[8px] bg-safety-green/10 px-1 rounded border border-safety-green/20">Safe</span>
              </div>
              <div className="flex justify-between items-center bg-[#07030e] p-2 rounded border border-white/5">
                <span className="text-gray-300">09:30 AM - Near LRT Cubao</span>
                <span className="text-safety-green font-bold uppercase text-[8px] bg-safety-green/10 px-1 rounded border border-safety-green/20">Ok</span>
              </div>
            </div>
          </motion.div>

          {/* Card 9: Emergency Registry medical locker (col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 md:col-span-3 lg:col-span-4 rounded-3xl border border-brand-purple-500/20 bg-[#120721]/90 p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden transition-all duration-300 hover:border-pink-400/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="mb-6">
              <div className="w-12 h-12 bg-[#1b0a33] rounded-2xl flex items-center justify-center border border-pink-500/20 mb-5 shrink-0">
                <Contact className="h-6 w-6 text-pink-400" />
              </div>
              <h4 className="text-xl font-display font-black text-white mb-2">Emergency Cabinet</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Sync critical medical tags, blood variables, and key clinical contacts, enabling first response units during active SOS periods.
              </p>
            </div>

            {/* Medical tag mockup */}
            <div className="bg-[#0f030a] p-3 border border-pink-500/20 rounded-2xl text-xs font-mono flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse"></span>
                <span className="text-pink-300 font-bold uppercase text-[10px]">BLOOD GROUP</span>
              </div>
              <span className="text-white font-black bg-pink-500/10 px-2.5 py-0.5 rounded-lg border border-pink-500/25">O+ (POS) • CARD SECURE</span>
            </div>
          </motion.div>

          {/* Card 10: Preset Quick Alerts (col-span-4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 md:col-span-3 lg:col-span-4 rounded-3xl border border-brand-purple-500/20 bg-[#120721]/90 p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden transition-all duration-300 hover:border-cyan-400/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="mb-6">
              <div className="w-12 h-12 bg-[#1b0a33] rounded-2xl flex items-center justify-center border border-cyan-400/20 mb-5 shrink-0">
                <Zap className="h-6 w-6 text-cyan-400" />
              </div>
              <h4 className="text-xl font-display font-black text-white mb-2">Quick Commands</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Transmit pre-prepared situational check-ins like "Nasa LRT na ako" with a single click, completely eliminating stressful typing.
              </p>
            </div>

            {/* Simulated pills */}
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-sans font-bold bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-full cursor-pointer transition-colors">
                Nasa MRT na ako 🚇
              </span>
              <span className="text-[10px] font-sans font-bold bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-full cursor-pointer transition-colors">
                Heavy traffic! 🚗
              </span>
              <span className="text-[10px] font-sans font-bold bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-full cursor-pointer transition-colors">
                Pauwi na ako 🏠
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
