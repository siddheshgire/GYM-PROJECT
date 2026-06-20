import React from 'react';
import Button from '../ui/Button';

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center py-28 text-center select-none parallax-bg"
      style={{ backgroundImage: `url('/img/banner-bg.jpg')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white font-oswald text-3xl sm:text-5xl font-extrabold uppercase tracking-wider mb-4 leading-tight">
          Registration now to get more deals
        </h2>
        <p className="text-primary font-medium text-base sm:text-lg mb-8 italic">
          Where health, beauty and fitness meet.
        </p>
        <Button to="/contact" variant="primary" className="px-10">
          Appointment
        </Button>
      </div>
    </section>
  );
};

export default Banner;
// Note: parallax-bg class uses background-attachment: fixed in index.css
