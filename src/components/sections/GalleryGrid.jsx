import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../../utils/constants';

const GalleryGrid = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    document.body.style.overflow = '';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <section className="bg-darkBg-darker py-1 select-none">
      {/* Grid wrapper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-2">
        {GALLERY_IMAGES.map((img, index) => (
          <div
            key={img.id}
            onClick={() => openLightbox(index)}
            className={`relative overflow-hidden cursor-pointer h-[240px] sm:h-[300px] group ${img.span}`}
          >
            {/* Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url('${img.src}')` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="w-12 h-12 bg-white text-darkBg flex items-center justify-center rounded-none shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <Image size={20} className="text-darkBg-darker" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            {/* Prev Image */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors p-2"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Lightbox Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[80vh] overflow-hidden flex items-center justify-center"
            >
              <img
                src={GALLERY_IMAGES[activeImageIndex].src}
                alt="Gym Gallery Large"
                className="max-w-full max-h-[80vh] object-contain shadow-2xl border-4 border-neutral-900"
              />
            </motion.div>

            {/* Next Image */}
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors p-2"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>

            {/* Caption Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Image {activeImageIndex + 1} of {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryGrid;
