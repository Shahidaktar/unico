/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Journeys from './components/Journeys';
import Process from './components/Process';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-luxury-ink selection:text-luxury-cream">
      {/* Smooth Scroll Progress Indicator - Subtle */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-luxury-ink z-[100] origin-left"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        <Hero />
        <Experiences />
        <Journeys />
        <Process />
        <Trust />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

