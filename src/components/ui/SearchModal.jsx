import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const SearchModal = ({ isOpen, onClose }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would redirect or trigger search logic
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-neutral-400 hover:text-white transition-colors duration-200"
            aria-label="Close search"
          >
            <X size={36} />
          </button>

          {/* Search Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Search here....."
              className="w-full bg-transparent border-b-2 border-neutral-700 focus:border-primary text-center text-3xl font-light text-white placeholder-neutral-600 outline-none pb-4 transition-colors duration-300"
            />
            <p className="mt-4 text-xs tracking-widest text-neutral-500 uppercase">
              Press enter to submit your search
            </p>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
