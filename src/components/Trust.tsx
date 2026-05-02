import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const testimonials = [
  {
    name: "Sandy",
    quote: "Unico represents the pinnacle of service where every logistical hurdle is replaced by a moment of effortless discovery.",
    role: "Global Voyager"
  },
  {
    name: "John",
    quote: "The attention to detail is staggering. They don't just book a trip; they curate a narrative of experiences that stay with you forever.",
    role: "Collector of Moments"
  },
  {
    name: "Lisa",
    quote: "Finally, a travel partner that understands the value of silence and space. Every property felt like it was discovered just for me.",
    role: "Modern Explorer"
  },
  {
    name: "Robert",
    quote: "From the private jet to the cliffside villas, the execution was flawless. Unico handles the world so I can enjoy the view.",
    role: "Aeronautical Lead"
  }
];

export default function Trust() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="trust" className="py-20 bg-luxury-cream border-t border-luxury-ink/5">
      <div className="px-8 md:px-16 mb-10">
        <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-muted block mb-4 opacity-70">Client Voices</span>
        <h2 className="text-4xl md:text-5xl font-light tracking-tightest">Testimonials</h2>
      </div>

      <div className="px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-16 overflow-hidden min-h-[320px]">
        {/* Quote Side */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-2xl md:text-3xl font-light font-serif leading-relaxed text-luxury-muted">
                "{testimonials[activeTab].quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.4em] font-semibold opacity-50">
                  {testimonials[activeTab].name}
                </span>
                <span className="w-8 h-px bg-luxury-ink/20" />
                <span className="text-[8px] uppercase tracking-widest opacity-30 font-light italic">
                  {testimonials[activeTab].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Names Side - Styled like the original brands */}
        <div className="flex-1 flex flex-wrap justify-center md:justify-end gap-x-12 md:gap-x-16 gap-y-8 items-center">
          {testimonials.map((t, idx) => (
            <button
              key={t.name}
              onClick={() => setActiveTab(idx)}
              className={`text-sm font-serif italic tracking-widest transition-all duration-700 cursor-pointer ${
                activeTab === idx 
                  ? 'opacity-100 scale-110 text-luxury-ink' 
                  : 'opacity-20 hover:opacity-50 grayscale contrast-125'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-20 px-8 md:px-16 text-center">
         <div className="h-px bg-luxury-ink/10 w-full mb-12" />
         <p className="text-[10px] uppercase tracking-[0.5em] text-luxury-muted mb-6 opacity-70">Curated Access to</p>
         <div className="flex justify-center gap-12 md:gap-24">
            <div className="flex flex-col items-center">
               <span className="text-3xl md:text-4xl font-serif">120+</span>
               <span className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-40">Private Islands</span>
            </div>
            <div className="flex flex-col items-center">
               <span className="text-3xl md:text-4xl font-serif">85%</span>
               <span className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-40">Off-Market Estates</span>
            </div>
            <div className="flex flex-col items-center">
               <span className="text-3xl md:text-4xl font-serif">24/7</span>
               <span className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-40">Personal Director</span>
            </div>
         </div>
      </div>
    </section>
  );
}
