import { motion, AnimatePresence } from 'framer-motion'; // Changed to standard framer-motion or motion/react
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

  // Fix: Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Philosophy', href: '#' },
    { name: 'Destinations', href: '#' },
    { name: 'Experiences', href: '#' },
    { name: 'The Studio', href: '#' },
  ];

  return (
    <>
      <motion.header
        id="main-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'circOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-8 md:px-16 flex justify-between items-center ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent text-white'
        }`}
      >
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-4 group" id="logo">
            <img 
              src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/unico-logo.png" 
              alt="Unico Voyages Logo" 
              className={`h-18 w-auto transition-all duration-500 ${isScrolled ? '' : 'brightness-0 invert'}`}
              referrerPolicy="no-referrer"
            />
          </a>
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] font-medium hover:opacity-100 transition-opacity ${
                  isScrolled ? 'text-black opacity-60' : 'text-white opacity-80'
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
                ? 'border-black text-black hover:bg-black hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
          >
            Inquire
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} className={isScrolled ? 'text-black' : 'text-white'} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 bg-luxury-ink text-white  flex flex-col items-center justify-center gap-8 z-[100]"
          >
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="absolute top-8 right-8 p-2 hover:rotate-90 transition-transform duration-300"
            >
              <X size={32} />
            </button>
            
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-light tracking-[0.3em] uppercase hover:italic transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 px-10 py-4 border border-white/30 text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-colors"
            >
              Inquire Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}