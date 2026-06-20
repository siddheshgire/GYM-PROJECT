import React from 'react';
import { PRICING_PLANS } from '../../utils/constants';
import Button from '../ui/Button';

const Pricing = () => {
  return (
    <section className="bg-darkBg py-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-oswald text-sm font-bold uppercase tracking-widest block mb-2">
            Our Plan
          </span>
          <h2 className="text-white font-oswald text-3xl sm:text-4xl font-extrabold uppercase tracking-wider">
            Choose your pricing plan
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            // Highlight the middle card (12 Month unlimited) for premium feel
            const isFeatured = idx === 1;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between bg-darkBg-light p-10 text-center transition-all duration-300 shadow-xl border-t-4 ${
                  isFeatured 
                    ? 'border-primary md:scale-105 md:-translate-y-2 z-10' 
                    : 'border-transparent hover:border-neutral-700'
                }`}
              >
                <div>
                  <h3 className="text-white font-oswald text-xl font-bold uppercase tracking-wider mb-6">
                    {plan.title}
                  </h3>
                  
                  {/* Price Bubble */}
                  <div className="mb-8 bg-neutral-900/60 py-6 px-4">
                    <h2 className="text-primary font-oswald text-4xl sm:text-5xl font-extrabold tracking-wide mb-1">
                      $ {plan.price}
                    </h2>
                    <span className="text-neutral-500 font-oswald text-xs font-semibold uppercase tracking-wider">
                      {plan.type}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-10 text-neutral-400 text-sm">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="border-b border-neutral-800/60 pb-2 last:border-0 last:pb-0">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Button
                    to="/contact"
                    variant={isFeatured ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    Enroll now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
