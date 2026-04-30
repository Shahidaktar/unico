import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const journeys = [
  {
    title: 'Solitude of Socotra',
    location: 'Indian Ocean / Archipelago',
    image: 'https://images.pexels.com/photos/6872316/pexels-photo-6872316.jpeg',
    description: 'A private expedition to the Galapagos of the East, witnessing dragon blood trees in alien landscapes untouched by time.',
    year: '2024'
  },
  {
    title: 'Kyoto’s Inner Circle',
    location: 'Japan / Ancient Heritage',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=2070',
    description: 'Private access to secret gardens and teahouses, guided by masters of the tea ceremony through the lens of Zen philosophy.',
    year: '2024'
  },
  {
    title: 'Aegean Blue Serenity',
    location: 'Greece / Private Sailing',
    image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80&w=2000',
    description: 'Sail the Cyclades on a bespoke ketch, discovering uninhabited coves and dining under the stars on a private deck.',
    year: '2025'
  }
];

function JourneyItem({ journey, index }: { journey: typeof journeys[0], index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className={`group relative min-h-screen flex flex-col md:flex-row items-center overflow-hidden border-b border-white/5 ${
        index % 2 === 0 ? '' : 'md:flex-row-reverse'
      }`}
    >
      <div className="w-full md:w-[55%] h-[60vh] md:h-screen overflow-hidden relative">
        <motion.img
          style={{ y: imageY }}
          src={journey.image}
          alt={journey.title}
          className="w-full h-[120%] object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s] ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-luxury-ink/20 group-hover:bg-transparent transition-colors duration-1000" />
      </div>
      
      <div className={`w-full md:w-[45%] p-12 md:p-32 flex flex-col justify-center z-10 ${
         index % 2 === 0 ? 'md:items-start' : 'md:items-end md:text-right'
      }`}>
        <div className="flex items-center gap-4 mb-8 opacity-40">
           <span className="text-[10px] tracking-[0.5em] uppercase font-light">{journey.location}</span>
           <div className="w-8 h-px bg-white" />
           <span className="text-[10px] tracking-[0.5em] uppercase font-light">{journey.year}</span>
        </div>
        
        <h3 className="text-5xl md:text-8xl font-light mb-12 font-serif tracking-tight leading-[0.85] group-hover:italic transition-all duration-700">
           {journey.title}
        </h3>
        
        <p className="text-white/50 text-base md:text-xl font-light leading-relaxed mb-16 max-w-sm">
          {journey.description}
        </p>
        
        <button className="group/btn relative px-8 py-3 border border-white/20 overflow-hidden transition-all duration-500 hover:border-white hover:text-black">
          <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] font-medium transition-colors">
            Explore Journey
          </span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-in-out" />
        </button>
      </div>
    </motion.div>
  );
}

export default function Journeys() {
  return (
    <section id="journeys" className="bg-luxury-ink text-white">
      <div className="py-40 px-8 md:px-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-white/30 text-[10px] uppercase tracking-[0.6em] mb-8 block font-semibold">Selected Archive</span>
            <h2 className="text-7xl md:text-[11rem] font-light leading-[0.8] tracking-tightest mb-12">
              Stories <br />
              <span className="font-serif italic text-white/80">Yet to be</span> <br />
              Written
            </h2>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col">
        {journeys.map((journey, idx) => (
          <JourneyItem key={journey.title} journey={journey} index={idx} />
        ))}
      </div>
    </section>
  );
}
