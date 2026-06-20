import React from 'react';
import { Bike, Salad, Dumbbell, HeartPulse } from 'lucide-react';
import { CHOOSE_US_ITEMS } from '../../utils/constants';

const iconMap = {
  Bike: Bike,
  Salad: Salad,
  Dumbbell: Dumbbell,
  HeartPulse: HeartPulse,
};

const ChooseUs = () => {
  return (
    <section className="bg-darkBg py-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-oswald text-sm font-bold uppercase tracking-widest block mb-2">
            Why choose us?
          </span>
          <h2 className="text-white font-oswald text-3xl sm:text-4xl font-extrabold uppercase tracking-wider">
            Push your limits forward
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CHOOSE_US_ITEMS.map((item) => {
            const IconComponent = iconMap[item.icon] || Dumbbell;
            
            return (
              <div
                key={item.id}
                className="group relative bg-darkBg-light p-8 text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 shadow-md border-b-2 border-transparent hover:border-primary"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-full bg-neutral-900/60 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
                  <IconComponent size={28} className="stroke-[1.5]" />
                </div>
                
                <h4 className="text-white font-oswald text-lg font-bold uppercase tracking-wider mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
