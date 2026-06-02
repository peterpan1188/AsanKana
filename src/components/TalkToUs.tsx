import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Briefcase, MessageSquare, Send, CheckCircle, ShieldAlert } from 'lucide-react';
import { ContactMessage } from '../types';

export default function TalkToUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState<'general' | 'partnership' | 'community'>('partnership');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    const newMessage: ContactMessage = {
      name,
      email,
      company: company || undefined,
      message,
      timestamp: new Date().toISOString()
    };

    // Save to local storage for realistic state demonstration
    const existing = JSON.parse(localStorage.getItem('asankana_contact_messages') || '[]');
    existing.push(newMessage);
    localStorage.setItem('asankana_contact_messages', JSON.stringify(existing));

    setIsSent(true);

    // Clear form
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0314] relative sm:px-6 lg:px-8 border-t border-brand-purple-800/40">
      {/* Visual lighting spots */}
      <div className="absolute top-1/4 left-1/10 w-80 h-80 rounded-full bg-brand-purple-700/10 blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-emergency-red/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Info and Mission statement */}
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emergency-red bg-emergency-red/10 border border-emergency-red/25 px-3 py-1 rounded-full inline-block">
              COLLABORATIVE NETWORKS
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              Let's Build Safer Communities Together
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We believe safety is a collaborative ecosystem. We are actively seeking partnerships with:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-xs sm:text-sm text-gray-300">
                <div className="h-5 w-5 rounded bg-brand-purple-800 flex items-center justify-center shrink-0 border border-brand-purple-500/20 text-emergency-red font-semibold">1</div>
                <div>
                  <strong className="text-white">Community Neighborhood Watches</strong>
                  <p className="text-[11px] sm:text-xs text-gray-400">Integrate alert feeds with localized physical responder dispatches for your zone.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-xs sm:text-sm text-gray-300">
                <div className="h-5 w-5 rounded bg-brand-purple-800 flex items-center justify-center shrink-0 border border-brand-purple-500/20 text-emergency-red font-semibold">2</div>
                <div>
                  <strong className="text-white">Campus & University Safety Departments</strong>
                  <p className="text-[11px] sm:text-xs text-gray-400">Offer students a customized security dome pinned to school dormitory geofences.</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-xs sm:text-sm text-gray-300">
                <div className="h-5 w-5 rounded bg-brand-purple-800 flex items-center justify-center shrink-0 border border-brand-purple-500/20 text-emergency-red font-semibold">3</div>
                <div>
                  <strong className="text-white font-medium">Telecom & Hardware Builders</strong>
                  <p className="text-[11px] sm:text-xs text-gray-400">Help us deploy native hardware hotkey-triggers for emergency events offline.</p>
                </div>
              </li>
            </ul>

            {/* Play/App Store Badges relocated from Coming Soon with explicit Coming Soon notice */}
            <div className="pt-6 border-t border-brand-purple-800/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-semibold">INSTALL THE TEAM TRACKER</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emergency-red animate-pulse"></span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                {/* Apple App Store Mock */}
                <div className="relative w-full sm:w-[155px]">
                  <button className="flex items-center space-x-2.5 px-4 py-2.5 bg-black/60 hover:bg-black/90 border border-brand-purple-700/40 rounded-xl cursor-default transition-all shadow-md w-full text-left">
                    <svg viewBox="0 0 384 512" className="h-5 w-5 text-white fill-current shrink-0">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-48.4-19.2-77.3-19.1-37.4.5-73.6 23.3-92.8 56.6-37.4 64.9-9.6 153.2 26 211.5 17.5 25 38.4 52.8 63.8 51.8 24.4-.9 33.8-15.8 63.4-15.8 29.5 0 38 15.8 63.8 15.3 26.2-.4 44.2-25.2 60.1-48.7 18.4-26.7 26.1-52.6 26.5-54-1.2-.5-51-19.4-51.5-77.7zM271 82.5c24-29.1 40-69.3 35.6-109.5-34.8 1.4-77 23.2-101.9 52.5-22 25.3-41.2 66-35.9 105.5 38.6 3 78.4-19.4 102.2-48.5z"/>
                    </svg>
                    <div>
                      <p className="text-[7px] font-mono uppercase tracking-wider text-gray-400 leading-tight">Download on</p>
                      <p className="text-[11px] font-bold text-white leading-tight">App Store</p>
                    </div>
                  </button>
                  <span className="absolute -top-2 -right-1 bg-emergency-red text-[8px] font-mono font-bold uppercase tracking-widest text-white px-2 py-0.5 rounded-full shadow-[0_2px_8px_rgba(239,68,68,0.4)] border border-[#0a0314] select-none">
                    SOON
                  </span>
                </div>

                {/* Google Play Store Mock */}
                <div className="relative w-full sm:w-[155px]">
                  <button className="flex items-center space-x-2.5 px-4 py-2.5 bg-black/60 hover:bg-black/90 border border-brand-purple-700/40 rounded-xl cursor-default transition-all shadow-md w-full text-left">
                    <svg viewBox="0 0 512 512" className="h-5 w-5 text-white fill-current shrink-0">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.4-60.1 60.1 60.1 60.1 58-33.4c13.1-7.6 21.8-18.5 21.8-31.7 0-13.2-8.7-24.1-21.8-31.7zm-146.6 52.1L104.6 499l220.7-126.7-60.1-60.1z"/>
                    </svg>
                    <div>
                      <p className="text-[7px] font-mono uppercase tracking-wider text-gray-400 leading-tight">Get it on</p>
                      <p className="text-[11px] font-bold text-white leading-tight">Google Play</p>
                    </div>
                  </button>
                  <span className="absolute -top-2 -right-1 bg-emergency-red text-[8px] font-mono font-bold uppercase tracking-widest text-white px-2 py-0.5 rounded-full shadow-[0_2px_8px_rgba(239,68,68,0.4)] border border-[#0a0314] select-none">
                    SOON
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: The Contact Form (Glassmorphism Card Layout) */}
          <div className="lg:col-span-7">
            <div className="bg-[#130727]/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-brand-purple-500/35 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emergency-red/5 blur-[50px]"></div>

              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="border-b border-brand-purple-700/30 pb-4">
                      <h4 className="text-lg font-semibold text-white font-display">Inquiry Hub</h4>
                      <p className="text-xs text-gray-400 mt-1">Submit your partnership ideas, question logs, or collaboration prompts.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-semibold">Full Name *</label>
                        <input 
                          type="text" 
                          id="contact-name"
                          required
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full h-11 bg-black/45 border border-brand-purple-500/25 rounded-lg px-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emergency-red transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-semibold">Email *</label>
                        <input 
                          type="email" 
                          id="contact-email"
                          required
                          placeholder="your.email@domain.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full h-11 bg-black/45 border border-brand-purple-500/25 rounded-lg px-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emergency-red transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-semibold">Company / Institution (Optional)</label>
                      <input 
                        type="text" 
                        id="contact-company"
                        placeholder="e.g. Hope Neighborhood Watch"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full h-11 bg-black/45 border border-brand-purple-500/25 rounded-lg px-3.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emergency-red transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2 font-semibold">Collaboration Type</label>
                      <div className="flex flex-wrap gap-2.5">
                        {['partnership', 'community', 'general'].map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setCategory(cat as any)}
                            className={`px-3 py-1.5 rounded text-[10px] font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                              category === cat 
                                ? 'bg-emergency-red/20 text-white border border-emergency-red/45' 
                                : 'bg-[#0f051d] text-gray-400 border border-brand-purple-700/30'
                            }`}
                          >
                            {cat === 'partnership' ? 'Establish Partnership' : cat === 'community' ? 'Community Security' : 'General Inquiry'}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1.5 font-semibold">Your Message *</label>
                      <textarea 
                        id="contact-message"
                        required
                        rows={4}
                        placeholder="Tell us about yourself, your team, or questions about security guidelines..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-black/45 border border-brand-purple-500/25 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emergency-red transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-11 bg-gradient-to-r from-brand-purple-700 to-emergency-red hover:from-brand-purple-500 hover:to-emergency-red text-white text-xs font-semibold uppercase tracking-wider font-display rounded-lg transition-all duration-300 shadow-md shadow-emergency-red/10 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Send className="h-3.5 w-3.5" /> Direct Dial Inquiry
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-5"
                  >
                    <div className="h-12 w-12 rounded-full bg-safety-green/20 border border-safety-green flex items-center justify-center mx-auto text-safety-green">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    
                    <div className="space-y-1.5">
                      <h4 className="text-xl font-semibold text-white font-display">Inquiry Dialed In</h4>
                      <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out, {name}! Your message has been locked into our secure partnership inbox. One of our community advocates will respond back within 24 hours.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSent(false)}
                      className="text-xs text-emergency-red hover:text-white underline font-mono cursor-pointer"
                    >
                      Send another response
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
