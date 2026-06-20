import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../../utils/constants';
import Button from '../ui/Button';

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_SLIDES[current].bgImage}')` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Slide Text Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-end">
            <div className="text-right max-w-xl md:max-w-2xl flex flex-col items-end">
              <motion.span
                className="text-primary font-oswald text-sm md:text-base font-bold uppercase tracking-widest mb-4 inline-block relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-12 after:h-[2px] after:bg-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {HERO_SLIDES[current].subtitle}
              </motion.span>
              
              <motion.h1
                className="text-white font-oswald text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-tight tracking-wide mb-8"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Be <strong className="text-primary font-extrabold">strong</strong><br />
                training hard
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Button to="/about" variant="primary">
                  Get info
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-primary hover:border-primary transition-all duration-300 focus:outline-none rounded-none"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-primary hover:border-primary transition-all duration-300 focus:outline-none rounded-none"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicator Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 transition-all duration-300 ${
              index === current ? 'w-8 bg-primary' : 'w-4 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
