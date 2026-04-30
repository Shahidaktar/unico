import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#' },
    { name: 'Destinations', href: '#' },
    { name: 'Experiences', href: '#' },
    { name: 'The Studio', href: '#' },
  ];

  return (
    <motion.header
      id="main-header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'circOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-8 md:px-16 flex justify-between items-center ${
        isScrolled ? 'bg-luxury-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent text-white'
      }`}
    >
      <div className="flex items-center gap-6">
        <a href="/" className="flex items-center gap-4 group" id="logo">
          <img 
            src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/unico-logo.png" 
            alt="Unico Voyages Logo" 
            className={`h-12 w-auto transition-all duration-500 ${isScrolled ? '' : 'brightness-0 invert'}`}
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.2em] uppercase leading-none">Unico</span>
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-60">Voyages</span>
          </div>
        </a>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] font-medium hover:opacity-100 transition-opacity ${
                isScrolled ? 'text-luxury-ink opacity-60' : 'text-white opacity-80'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-8">
        <button
          className={`hidden md:block text-xs uppercase tracking-[0.2em] px-6 py-2 border transition-all duration-300 ${
            isScrolled
              ? 'border-luxury-ink text-luxury-ink hover:bg-luxury-ink hover:text-white'
              : 'border-white text-white hover:bg-white hover:text-luxury-ink'
          }`}
        >
          Inquire
        </button>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-luxury-ink text-white flex flex-col items-center justify-center gap-12 z-[60]"
        >
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8">
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl font-serif tracking-widest uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="mt-8 px-12 py-4 border border-white text-sm uppercase tracking-widest">
            Inquire Now
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
