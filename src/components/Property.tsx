import { motion } from 'motion/react';
import { ChevronRight, Maximize2, MapPin, Users, Ruler, Star } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export default function Property() {
  const images = [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2071",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1600607687940-c52fb047814b?auto=format&fit=crop&q=80&w=2070"
  ];

  return (
    <div className="bg-luxury-cream selection:bg-luxury-ink selection:text-luxury-cream">
      <Header variant="dark" />
      
      <main className="pt-24">
        {/* Header Section */}
        <section className="px-8 md:px-24 py-20 border-b border-luxury-ink/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 text-luxury-muted text-[10px] uppercase tracking-[0.4em] mb-6">
                  <MapPin size={12} className="text-luxury-accent" />
                  <span>Amalfi Coast, Italy</span>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-9xl font-light tracking-tightest leading-[0.85] mb-8">
                  Villa <span className="font-serif italic text-luxury-muted">Celestia</span>
                </h1>
              </motion.div>
            </div>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="flex flex-col items-start md:items-end text-right"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-muted mb-2">Starting From</span>
              <span className="text-3xl font-serif">€12,500 / night</span>
            </motion.div>
          </div>
        </section>

        {/* Cinematic Image Gallery Grid */}
        <section className="px-4 sm:px-8 md:px-24 py-8 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 min-h-[60vh] md:h-[120vh]">
            <motion.div 
              className="md:col-span-8 h-[40vh] md:h-full overflow-hidden relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <img src={images[0]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Villa Exterior" />
              <div className="absolute inset-0 bg-luxury-ink/0 group-hover:bg-luxury-ink/10 transition-colors" />
            </motion.div>
            <div className="md:col-span-4 flex flex-col gap-4 md:gap-8">
              <div className="h-[30vh] md:h-1/2 overflow-hidden group cursor-pointer">
                <img src={images[1]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Villa Interior" />
              </div>
              <div className="h-[30vh] md:h-1/2 overflow-hidden group cursor-pointer relative">
                <img src={images[2]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Pool View" />
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white/90 backdrop-blur-md p-3 md:p-4 text-[8px] md:text-[10px] uppercase tracking-widest flex items-center gap-2 md:gap-3">
                  <Maximize2 size={10} className="md:w-[12px]" />
                  View All Gallery
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative & Specifications */}
        <section className="px-8 md:px-24 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-5xl font-serif italic mb-8 md:mb-12 border-b border-luxury-ink/10 pb-8 leading-tight">
              A sanctuary perched high above the Mediterranean, where architectural precision meets eternal azure horizons.
            </h2>
            <div className="space-y-6 md:space-y-8 text-luxury-ink/80 font-light text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                Villa Celestia is not merely a residence; it is a manifestation of the Amalfi dream. Carved into the sheer cliffs, the property spans five levels of terraced gardens, private alcoves, and glass-walled living spaces that disappear into the sea.
              </p>
              <p>
                Originally built in the late 19th century as a private artist's retreat, the villa has been meticulously restored by Unico Voyage' master atelier. Every piece of furniture, every textile, and every scent has been curated to resonate with the quiet rhythm of the coastline.
              </p>
            </div>

            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-luxury-ink/10 pt-12">
               <div className="flex flex-col gap-2">
                 <Users size={20} className="text-luxury-muted mb-2" />
                 <span className="text-xl font-serif">12 Guests</span>
                 <span className="text-[10px] uppercase tracking-widest opacity-40">Capacity</span>
               </div>
               <div className="flex flex-col gap-2">
                 <Star size={20} className="text-luxury-muted mb-2" />
                 <span className="text-xl font-serif">6 Suites</span>
                 <span className="text-[10px] uppercase tracking-widest opacity-40">Bedrooms</span>
               </div>
               <div className="flex flex-col gap-2">
                 <Ruler size={20} className="text-luxury-muted mb-2" />
                 <span className="text-xl font-serif">1,200 sqm</span>
                 <span className="text-[10px] uppercase tracking-widest opacity-40">Internal Space</span>
               </div>
               <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-1 text-luxury-muted mb-2">
                   <ChevronRight size={16} />
                 </div>
                 <span className="text-xl font-serif">Infinity</span>
                 <span className="text-[10px] uppercase tracking-widest opacity-40">Heated Pool</span>
               </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-white p-12 md:p-16 shadow-sm border border-luxury-ink/5 sticky top-32">
            <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-muted mb-8 block">Exclusive Booking</span>
            <h3 className="text-3xl font-serif mb-12">Reserved for the Discerning</h3>
            
            <div className="space-y-6 mb-12">
               {[
                 "Fully staffed with Private Chef & Butler",
                 "Helipad access for discreet arrival",
                 "Private Beach access via Elevator",
                 "24/7 Dedicated Lifestyle Manager"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 text-sm font-light text-luxury-ink/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-luxury-accent/30" />
                    {item}
                 </div>
               ))}
            </div>

            <button className="w-full bg-luxury-ink text-white py-6 uppercase tracking-[0.3em] text-[8px] md:text-[10px] font-semibold flex items-center justify-center gap-4 group hover:bg-luxury-accent transition-all duration-500">
               Inquire for Availability
               <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-8 text-center text-[10px] uppercase tracking-widest opacity-40">
              Response within 4 hours &mdash; Global Desk
            </p>
          </div>
        </section>

        {/* Spatial Journey Section */}
        <section className="bg-luxury-ink text-white py-24 md:py-40 px-8 md:px-24">
          <div className="max-w-7xl mx-auto">
            <span className="text-white/30 text-[10px] uppercase tracking-[0.6em] mb-12 block">Spatial Philosophy</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="mb-16 md:mb-24">
                  <h3 className="text-2xl md:text-3xl font-serif italic mb-4 md:mb-6">The Master Pavilion</h3>
                  <p className="text-white/50 font-light leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                    An entire floor dedicated to absolute repose. Features a wrap-around terrace, private meditation alcove, and a bathroom carved from a single block of Tuscan marble.
                  </p>
                  <div className="h-px bg-white/10 w-full" />
                </div>
                <div className="mb-16 md:mb-24">
                  <h3 className="text-2xl md:text-3xl font-serif italic mb-4 md:mb-6">The Sunset Atrium</h3>
                  <p className="text-white/50 font-light leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                    The villa's social heart. Eight-meter ceilings and floor-to-ceiling glass that can be entirely recessed, merging the living room with the Mediterranean breeze.
                  </p>
                  <div className="h-px bg-white/10 w-full" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif italic mb-4 md:mb-6">The Wine Vault</h3>
                  <p className="text-white/50 font-light leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                    A temperature-controlled sanctuary housing 3,000 labels, integrated into the natural cliffside cave.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="relative h-[400px] md:h-[800px]"
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070" 
                  className="w-full h-full object-cover opacity-80" 
                  alt="Interior Detail" 
                />
                <div className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 bg-luxury-cream p-6 md:p-12 text-luxury-ink max-w-[200px] md:max-w-xs shadow-2xl">
                   <span className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-40 mb-2 md:mb-4 block underline">Architectural Detail</span>
                   <p className="font-serif italic text-lg md:text-xl">"The structure does not sit on the cliff; it is an extension of it."</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bespoke Services Atelier */}
        <section className="py-24 md:py-40 px-8 md:px-24 bg-luxury-cream overflow-hidden">
          <div className="text-center mb-16 md:mb-32">
             <span className="text-luxury-muted text-[10px] uppercase tracking-[0.5em] mb-6 block">The Service Layer</span>
             <h2 className="text-4xl md:text-8xl font-light tracking-tightest leading-tight">An Invisible <br className="md:hidden" /> <span className="font-serif italic">Presence</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                title: "Private Gastronomy",
                text: "Your dedicated chef prepares sea-to-table menus based on your daily mood, served in any of the villa's seven dining locations.",
                img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1974"
              },
              {
                title: "Marine Concierge",
                text: "A bespoke Riva Aquarama waiting at your private dock, with a captain ready to navigate the hidden grottoes of Capri.",
                img: "https://images.pexels.com/photos/36295251/pexels-photo-36295251.jpeg"
              },
              {
                title: "Wellness Retreat",
                text: "On-site spa therapists providing signature treatments using local botanicals, arranged in the cliffside therapy room.",
                img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2070"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group flex flex-col"
              >
                <div className="h-[400px] overflow-hidden mb-8">
                  <img src={service.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={service.title} />
                </div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-luxury-muted font-light leading-relaxed text-sm">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Immersion Section */}
        <section className="px-8 md:px-24 py-24 md:py-40 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative">
              <motion.img 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-[400px] md:h-[700px] object-cover grayscale-[0.3]" 
                alt="Amalfi Coast" 
              />
              <div className="absolute top-6 -right-6 md:top-12 md:-right-12 hidden sm:block w-48 md:w-64 p-6 md:p-8 bg-luxury-ink text-white">
                <span className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-40 block mb-2 md:mb-4">Location</span>
                <p className="font-serif italic text-base md:text-lg">Amalfi Coast, Italy</p>
                <div className="mt-6 md:mt-8 flex items-center justify-between opacity-30 text-[6px] md:text-[8px] uppercase tracking-widest">
                  <span>LAT: 40.6333° N</span>
                  <span>LNG: 14.6027° E</span>
                </div>
              </div>
            </div>
            <div>
              <span className="text-luxury-muted text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8 block">Destination Immersion</span>
              <h2 className="text-4xl md:text-7xl font-light tracking-tightest mb-8 md:mb-12 leading-tight">The <span className="font-serif italic">Amalfi</span> Soul</h2>
              <div className="space-y-6 md:space-y-8 text-luxury-muted font-light text-base md:text-lg leading-relaxed max-w-lg">
                <p>
                  Perched between the mountains and the sea, Amalfi is more than a location—it is a vibration. Villa Celestia offers a curated gateway into its most guarded secrets. From private visits to family-run lemon groves to exclusive evening explorations of Ravello’s hidden alcoves.
                </p>
                <div className="pt-8 md:pt-12">
                  <button className="group relative flex items-center gap-4 md:gap-6">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-luxury-ink">Discover the Destination</span>
                    <span className="w-8 h-px bg-luxury-ink/20 group-hover:w-16 md:group-hover:w-24 transition-all duration-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Cinematic Quote */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
           <img 
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=2070" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" 
            alt="Atmospheric" 
           />
           <div className="absolute inset-0 bg-luxury-ink/40" />
           <div className="relative z-10 px-8 max-w-4xl">
              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-6xl text-white font-serif italic font-light leading-snug"
              >
                "Luxury is not an accumulation of things, but the absence of noise and the presence of soul."
              </motion.blockquote>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
