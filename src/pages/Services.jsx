import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import ChooseUs from '../components/sections/ChooseUs';
import Banner from '../components/sections/Banner';
import GetInTouch from '../components/sections/GetInTouch';
import { SERVICES_LIST } from '../utils/constants';

const Services = () => {
  return (
    <main className="overflow-x-hidden">
      <Breadcrumb title="Services" parentName="" />

      {/* Choose Us Feature overview */}
      <ChooseUs />

      {/* Services Grid List */}
      <section className="bg-darkBg-darker py-24 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-primary font-oswald text-sm font-bold uppercase tracking-widest block mb-2">
              What we do
            </span>
            <h2 className="text-white font-oswald text-3xl sm:text-4xl font-extrabold uppercase tracking-wider">
              SERVICES WE PROVIDE
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="bg-darkBg-light group shadow-xl border border-neutral-900 overflow-hidden flex flex-col justify-between"
              >
                {/* Pic */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition-colors" />
                </div>

                {/* Text Description */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <h4 className="text-white font-oswald text-lg font-bold uppercase tracking-wider mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <a
                    href="#"
                    className="text-primary hover:text-white text-xs uppercase font-oswald font-bold tracking-widest transition-colors mt-auto inline-flex items-center"
                  >
                    Read More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Banner />
      <GetInTouch />
    </main>
  );
};

export default Services;
