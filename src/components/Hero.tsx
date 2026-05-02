import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section 
      ref={containerRef}
      id="hero-section" 
      className="relative h-[100vh] md:h-[110vh] w-full overflow-hidden bg-luxury-ink"
    >
      {/* Cinematic Background with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0 bg-luxury-ink"
      >
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2400"
          alt="Luxury Resort Aerial"
          className="w-full h-full object-cover opacity-80 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-luxury-ink/40" />
      </motion.div>

      {/* Content Layer */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center px-8 md:px-24"
      >
        <div className="max-w-[1440px] mx-auto w-full pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="flex flex-col gap-4 mb-16"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-px bg-white/30" />
              <span className="text-white/60 text-[10px] md:text-xs uppercase tracking-[0.5em] font-light">
                The Art of Departure
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-white text-7xl md:text-[10rem] leading-[0.85] font-light tracking-tightest">
              Travel, <br />
              <span className="font-serif italic font-normal text-white/90">Designed</span> <br />
              <span className="md:pl-48">Around You.</span>
            </h1>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-24 gap-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
              className="text-white/50 text-base md:text-lg font-light max-w-sm leading-relaxed tracking-wide italic"
            >
              Curating unique life experiences for the world’s most discerning travelers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.4 }}
              className="flex flex-col items-start gap-8"
            >
              <button className="group relative pr-12 py-2 flex items-center gap-6 overflow-hidden">
                <span className="text-white uppercase tracking-[0.4em] text-[10px] md:text-xs font-medium group-hover:text-white/70 transition-colors">
                  Begin The Dialogue
                </span>
                <span className="absolute right-0 w-8 h-px bg-white/40 group-hover:w-full transition-all duration-700 ease-in-out" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Corner Element */}
      <div className="absolute top-12 right-12 z-20 hidden md:block">
        <motion.div
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 0.4 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="text-white text-[10px] tracking-[1em] uppercase vertical-text font-light"
        >
          Unico Voyage
        </motion.div>
      </div>

      {/* Subtle Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
      >
        <div className="w-px h-24 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
      </motion.div>
    </section>
  );
}
