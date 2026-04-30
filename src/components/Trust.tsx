import { motion } from 'motion/react';

export default function Trust() {
  return (
    <section id="trust" className="py-24 bg-luxury-cream border-t border-luxury-ink/5">
      <div className="px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-16 overflow-hidden">
        <div className="flex-1">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
          >
            <p className="text-2xl md:text-3xl font-light font-serif leading-relaxed text-luxury-muted">
              "Unico represents the pinnacle of service—where every logistical hurdle is replaced by a moment of effortless discovery."
            </p>
            <span className="mt-8 block text-[10px] uppercase tracking-[0.4em] font-semibold opacity-50">Global Voyager Magazine</span>
          </motion.div>
        </div>

        <div className="flex-1 flex flex-wrap justify-center md:justify-end gap-x-16 gap-y-12 items-center opacity-30 grayscale contrast-125">
          <span className="text-sm font-serif italic tracking-widest">Aman</span>
          <span className="text-sm font-serif italic tracking-widest">Four Seasons</span>
          <span className="text-sm font-serif italic tracking-widest">Belmond</span>
          <span className="text-sm font-serif italic tracking-widest">Six Senses</span>
        </div>
      </div>

      <div className="mt-24 px-8 md:px-16 text-center">
         <div className="h-px bg-luxury-ink/10 w-full mb-12" />
         <p className="text-[10px] uppercase tracking-[0.5em] text-luxury-muted mb-4 opacity-70">Curated Access to</p>
         <div className="flex justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
               <span className="text-3xl font-serif">120+</span>
               <span className="text-[8px] uppercase tracking-widest opacity-40">Private Islands</span>
            </div>
            <div className="flex flex-col items-center">
               <span className="text-3xl font-serif">85%</span>
               <span className="text-[8px] uppercase tracking-widest opacity-40">Off-Market Estates</span>
            </div>
            <div className="flex flex-col items-center">
               <span className="text-3xl font-serif">24/7</span>
               <span className="text-[8px] uppercase tracking-widest opacity-40">Personal Director</span>
            </div>
         </div>
      </div>
    </section>
  );
}
