import React from 'react';
import { ChevronRight } from 'lucide-react';
import { OFFER_CLASSES } from '../../utils/constants';
import { Link } from 'react-router-dom';

const OfferClasses = () => {
  // We can assign specific responsive grid spans to each item to match the original layout
  const gridSpans = [
    'lg:col-span-4 md:col-span-6 col-span-12',
    'lg:col-span-4 md:col-span-6 col-span-12',
    'lg:col-span-4 md:col-span-12 col-span-12',
    'lg:col-span-6 md:col-span-6 col-span-12',
    'lg:col-span-6 md:col-span-6 col-span-12'
  ];

  return (
    <section className="bg-darkBg-darker py-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-oswald text-sm font-bold uppercase tracking-widest block mb-2">
            Our Classes
          </span>
          <h2 className="text-white font-oswald text-3xl sm:text-4xl font-extrabold uppercase tracking-wider">
            What we can offer
          </h2>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-12 gap-6">
          {OFFER_CLASSES.map((item, idx) => (
            <div
              key={item.id}
              className={`relative overflow-hidden group h-[300px] sm:h-[340px] ${gridSpans[idx] || 'col-span-12'}`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />

              {/* Text content absolute aligned bottom */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end z-10">
                <div className="flex flex-col">
                  <span className="text-primary font-oswald text-xs font-bold uppercase tracking-widest mb-1">
                    {item.category}
                  </span>
                  <h5 className="text-white font-oswald text-xl sm:text-2xl font-extrabold uppercase tracking-wide">
                    {item.title}
                  </h5>
                </div>
                
                {/* Detail Link button */}
                <Link
                  to={
                    item.title.toLowerCase().includes('weight') || item.title.toLowerCase().includes('kettlebell')
                      ? '/classes/body-building'
                      : item.category.toLowerCase().includes('cardio') || item.title.toLowerCase().includes('cycling')
                      ? '/classes/cardio'
                      : '/classes/cardio'
                  }
                  className="w-11 h-11 bg-neutral-900/80 text-white flex items-center justify-center hover:bg-primary transition-colors duration-300 focus:outline-none"
                  aria-label={`View details for ${item.title}`}
                >
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferClasses;
