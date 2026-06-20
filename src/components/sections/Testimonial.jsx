import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../utils/constants';

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="bg-darkBg-darker py-24 select-none overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Section Title */}
        <div className="mb-10">
          <span className="text-primary font-oswald text-sm font-bold uppercase tracking-widest block mb-2">
            Testimonial
          </span>
          <h2 className="text-white font-oswald text-3xl font-extrabold uppercase tracking-wider">
            Our clients say
          </h2>
        </div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Client Photo */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary mb-6 shadow-lg">
                <img
                  src={TESTIMONIALS[current].image}
                  alt={TESTIMONIALS[current].author}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote */}
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed italic mb-8 max-w-2xl">
                "{TESTIMONIALS[current].quote}"
              </p>

              {/* Author & Rating */}
              <h5 className="text-white font-oswald text-lg font-bold uppercase tracking-wider mb-2">
                {TESTIMONIALS[current].author}
              </h5>
              
              <div className="flex items-center space-x-1 text-primary">
                {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 border border-neutral-800 text-neutral-400 hover:text-white hover:border-primary hover:bg-primary transition-all duration-300 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 border border-neutral-800 text-neutral-400 hover:text-white hover:border-primary hover:bg-primary transition-all duration-300 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
