import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section id="contact" className="relative h-screen bg-luxury-ink flex items-center justify-center text-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
         <img
          src="https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80&w=1974"
          alt="Night View Luxury"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-ink via-transparent to-transparent" />
      </div>

      <div className="relative z-10 px-8 max-w-4xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <span className="text-white/40 text-xs uppercase tracking-[0.3em] mb-8 block">The Next Step</span>
          <h2 className="text-5xl md:text-8xl text-white font-light mb-12 font-serif italic">
            Start Your <br />
            Next Chapter
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light mb-16 max-w-xl mx-auto leading-relaxed">
            Your private travel designer will craft something entirely your own. No templates, no compromises.
          </p>
          <Link to="/contact" className="px-12 py-5 bg-white text-luxury-ink text-xs uppercase tracking-[0.4em] font-semibold hover:bg-transparent hover:text-white border border-white transition-all duration-500">
            Begin Your Journey
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-0 w-full px-8 md:px-16 flex justify-between items-end opacity-20 hidden md:flex">
         <span className="text-[10px] uppercase tracking-widest text-white">London &mdash; Singapore &mdash; New York</span>
         <span className="text-[10px] uppercase tracking-widest text-white font-bold text-lg">Unico</span>
      </div>
    </section>
  );
}
