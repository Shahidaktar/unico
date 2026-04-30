import { motion } from 'motion/react';

const categories = [
  {
    title: 'Wellness & Transformation',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2070',
    description: 'Immersive retreats designed to restore the soul and body through quiet immersion.'
  },
  {
    title: 'Safari & Wilderness',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=2041',
    description: 'Untouched landscapes and private connection with the primordial world.'
  },
  {
    title: 'Urban Luxury',
    image: 'https://images.pexels.com/photos/34672504/pexels-photo-34672504.jpeg',
    description: 'The heartbeat of Metropolis, experienced from the most exclusive vantage points.'
  },
  {
    title: 'Remote Retreats',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=2070',
    description: 'Absolute seclusion in architectural masterpieces at the edge of the map.'
  },
  {
    title: 'Culture & Heritage',
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=2070',
    description: 'Access to ancient wisdom and archival experiences reserved for the few.'
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-40 px-8 md:px-24 bg-luxury-cream">
      <div className="mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-luxury-muted text-[10px] uppercase tracking-[0.6em] mb-8 block font-semibold opacity-60">Curated Portfolios</span>
            <h2 className="text-6xl md:text-8xl font-light leading-[0.95] tracking-tightest">
              Exceptional <br />
              <span className="font-serif italic text-luxury-muted">Experiences</span>
            </h2>
          </motion.div>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-luxury-muted text-sm uppercase tracking-[0.2em] max-w-xs leading-loose italic opacity-50"
        >
          Our network provides entry into spheres of existence that remain closed to the world at large.
        </motion.p>
      </div>

      <div className="flex flex-col gap-24">
        {/* Row 1: Large + 2 Small */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 group cursor-pointer"
          >
            <div className="overflow-hidden h-[700px] mb-6">
              <img src={categories[0].image} alt={categories[0].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-serif mb-2">{categories[0].title}</h3>
                <p className="text-luxury-muted text-sm font-light max-w-md">{categories[0].description}</p>
              </div>
              <span className="text-[10px] uppercase tracking-widest border-b border-luxury-ink/20 pb-1">01 / Explore</span>
            </div>
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-12">
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="group cursor-pointer"
             >
                <div className="overflow-hidden h-[330px] mb-4">
                  <img src={categories[1].image} alt={categories[1].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-serif mb-1">{categories[1].title}</h3>
                <p className="text-luxury-muted text-xs font-light opacity-60">02 / Wilderness</p>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="group cursor-pointer"
             >
                <div className="overflow-hidden h-[330px] mb-4">
                  <img src={categories[2].image} alt={categories[2].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-serif mb-1">{categories[2].title}</h3>
                <p className="text-luxury-muted text-xs font-light opacity-60">03 / Metropolis</p>
             </motion.div>
          </div>
        </div>

        {/* Row 2: Inverted Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 md:order-2 group cursor-pointer"
          >
            <div className="overflow-hidden h-[850px] mb-6">
              <img src={categories[3].image} alt={categories[3].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <h3 className="text-2xl font-serif mb-2">{categories[3].title}</h3>
            <p className="text-luxury-muted text-sm font-light max-w-sm">{categories[3].description}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-7 md:order-1 group cursor-pointer"
          >
            <div className="overflow-hidden h-[800px] mb-6 relative">
               <img src={categories[4].image} alt={categories[4].title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
               <div className="absolute top-0 right-0 p-8">
                  <span className="text-white text-[10px] tracking-[1em] vertical-text opacity-40 uppercase">Heritage Vault</span>
               </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl font-serif">{categories[4].title}</h3>
              <p className="text-luxury-muted text-sm font-light max-w-lg leading-relaxed">{categories[4].description}</p>
              <div className="mt-4 flex items-center gap-6 group">
                <div className="w-16 h-px bg-luxury-ink/20 group-hover:w-24 transition-all duration-500" />
                <span className="text-[10px] uppercase tracking-widest font-semibold">Inquire for access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
