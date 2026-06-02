import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';
import { FaqItem } from '../types';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("free");

  const faqs: FaqItem[] = [
    {
      id: "free",
      question: "Is AsanKana free?",
      answer: "Yes, our core safety features are and always will be completely free. This contains real-time GPS location tracking for up to 3 trusted contacts, and standard automated geofenced safety alerts. A premium membership tier will be available later for larger circles, historical path analysis, and direct automated emergency service dispatches."
    },
    {
      id: "realtime",
      question: "Does it work in real-time?",
      answer: "Absolutely. AsanKana uses direct socket-linked streaming channels that stream location coordinates at up to 1-second interval granularity during active SOS states, providing continuous visual movement tracking across target maps."
    },
    {
      id: "accuracy",
      question: "How accurate is the GPS tracking?",
      answer: "The app relies on your phone's native receiver hardware, utilizing GPS, GLONASS, Galileo, and Wi-Fi signal triangulation. In open sky environments, coordinate precision is typically accurate down to 3–5 meters. Within dense urban configurations, it maintains accuracy down to building levels."
    },
    {
      id: "groups",
      question: "Can I create custom family circles?",
      answer: "Yes! You can configure multiple circles (e.g., 'Inner Circle', 'School Transit', 'Office Net'). Only Contacts invited and authenticated into specific circles can request your location parameters. You maintain absolute privacy control over who sees which specific status."
    },
    {
      id: "battery",
      question: "Does it drain my battery heavily?",
      answer: "No. We engineered raw background tracking with adaptive smart physics telemetry. The application automatically triggers dormant sleeps while you are resting (such as sitting at a school desk or sleeping), and only syncs upon registered geographic shifts. Battery run impact is under 3% of aggregate daily consumption."
    },
    {
      id: "security",
      question: "Is my personal tracker data secure?",
      answer: "Security and trust are our fundamental pillars. All location tracking pathways are protected using end-to-end transport protocol encryption. We do not sell tracking logs, and historical path tracks are encrypted at rest with keys held exclusively on your local device."
    },
    {
      id: "sos",
      question: "Can I send SOS alerts instantly?",
      answer: "Yes, we designed our panic trigger system to operate under maximum adrenal stress. In addition to a massive visual button in the app, you can trigger a 'Hush SOS' with a fast triple-click of your phone's physical hardware buttons. This immediate action bypasses phone locks and sounds alerts directly to your circles."
    }
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#0f051d] relative sm:px-6 lg:px-8">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-purple-700/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emergency-red bg-emergency-red/10 border border-emergency-red/25 px-3 py-1 rounded-full inline-block mb-3">
            CLEAR TRUTHS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Transparent explanations concerning battery usage, encryption protocols, and how we protect families securely.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#150a2b] border-[#ef4444]/30 shadow-lg shadow-black/30' 
                    : 'bg-[#12071f]/60 border-brand-purple-700/20 hover:border-brand-purple-500/40 hover:bg-[#12071f]'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between text-white font-medium cursor-pointer"
                >
                  <div className="flex items-center space-x-3 text-left pr-4">
                    <HelpCircle className={`h-4.5 w-4.5 shrink-0 transition-colors ${isOpen ? 'text-emergency-red' : 'text-gray-500'}`} />
                    <span className="text-sm sm:text-base font-semibold font-display tracking-tight">{faq.question}</span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-emergency-red' : ''}`} />
                </button>

                {/* Accordion Content with framer motion height animations */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans border-t border-brand-purple-700/10 pt-4 bg-[#100720]/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
