import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumb from '../components/common/Breadcrumb';
import ChooseUs from '../components/sections/ChooseUs';
import ProgressBar from '../components/ui/ProgressBar';
import TeamSection from '../components/sections/TeamSection';
import Banner from '../components/sections/Banner';
import Testimonial from '../components/sections/Testimonial';
import GetInTouch from '../components/sections/GetInTouch';
import { SERVICES_STATS } from '../utils/constants';

const AboutUs = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideo = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <main className="overflow-x-hidden">
      <Breadcrumb title="About us" parentName="" />

      {/* Choose Us Section */}
      <ChooseUs />

      {/* About Video/Info Section */}
      <section className="bg-darkBg-darker py-24 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image & Video Trigger Card */}
            <div
              className="relative aspect-video lg:aspect-[4/3] bg-cover bg-center flex items-center justify-center border-4 border-neutral-900 group shadow-2xl cursor-pointer"
              style={{ backgroundImage: `url('/img/about-us.jpg')` }}
              onClick={toggleVideo}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              
              {/* Play Button */}
              <button
                className="w-20 h-20 bg-primary hover:bg-primary-hover text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse focus:outline-none z-10 hover:scale-105 transition-transform"
                aria-label="Play promotional video"
              >
                <Play size={32} className="fill-white ml-1" />
              </button>
            </div>

            {/* About Text Content & Stats Bars */}
            <div className="flex flex-col">
              <div className="mb-8">
                <span className="text-primary font-oswald text-sm font-bold uppercase tracking-widest block mb-2">
                  About Us
                </span>
                <h2 className="text-white font-oswald text-3xl sm:text-4xl font-extrabold uppercase tracking-wider mb-6">
                  What we have done
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                  viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Progress Bars */}
              <div className="flex flex-col space-y-2">
                {SERVICES_STATS.map((stat, idx) => (
                  <ProgressBar key={idx} label={stat.label} percentage={stat.percentage} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleVideo}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            {/* Close button */}
            <button
              onClick={toggleVideo}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close video player"
            >
              <X size={32} />
            </button>

            {/* IFrame Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl aspect-video bg-black shadow-2xl border-4 border-neutral-900"
            >
              <iframe
                title="GymLife Promo Video"
                src="https://www.youtube.com/embed/EzKkl64rRbM?autoplay=1"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <TeamSection showAll={false} />
      <Banner />
      <Testimonial />
      <GetInTouch />
    </main>
  );
};

export default AboutUs;
