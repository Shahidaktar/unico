import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
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
    { name: 'Philosophy', href: '/' },
    { name: 'Destinations', href: '/property' },
    { name: 'Experiences', href: '/' },
    { name: 'The Studio', href: '/contact' },
  ];

  const isDarkBase = variant === 'dark';
  const showScrolledStyle = isScrolled || isDarkBase;

  return (
    <>
      <motion.header
        id="main-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'circOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-8 md:px-16 flex justify-between items-center ${
          isScrolled ? 'bg-luxury-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent'
        } ${showScrolledStyle ? 'text-luxury-ink' : 'text-white'}`}
      >
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-4 group" id="logo">
            <img 
              src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/unico-logo.png" 
              alt="Unico Voyages Logo" 
              className={`h-18 w-auto transition-all duration-500 ${showScrolledStyle ? '' : 'brightness-0 invert'}`}
              referrerPolicy="no-referrer"
            />
           
          </Link>
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xs uppercase tracking-[0.2em] font-medium hover:opacity-100 transition-opacity ${
                  showScrolledStyle ? 'text-luxury-ink opacity-60' : 'text-white opacity-80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-8">
          <Link
            to="/contact"
            className={`hidden md:block text-xs uppercase tracking-[0.2em] px-6 py-2 border transition-all duration-300 ${
              showScrolledStyle
                ? 'border-luxury-ink text-luxury-ink hover:bg-luxury-ink hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-luxury-ink'
            }`}
          >
            Inquire
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-luxury-ink text-white flex flex-col items-center justify-center gap-12 z-[100]"
        >
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8">
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-3xl font-serif tracking-widest uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 px-12 py-4 border border-white text-sm uppercase tracking-widest"
          >
            Inquire Now
          </Link>
        </motion.div>
      )}
    </>
  );
}
