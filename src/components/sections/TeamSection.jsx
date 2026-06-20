import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Mail } from 'lucide-react';
import { TRAINERS } from '../../utils/constants';
import Button from '../ui/Button';

const TeamSection = ({ showAll = false }) => {
  // If showAll is false, we only show the first 3 trainers for homepage, else show all 6
  const visibleTrainers = showAll ? TRAINERS : TRAINERS.slice(0, 3);

  return (
    <section className="bg-darkBg py-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 space-y-6 md:space-y-0">
          <div>
            <span className="text-primary font-oswald text-sm font-bold uppercase tracking-widest block mb-2">
              Our Team
            </span>
            <h2 className="text-white font-oswald text-3xl sm:text-4xl font-extrabold uppercase tracking-wider">
              Train with experts
            </h2>
          </div>
          {!showAll && (
            <Button to="/contact" variant="primary" className="py-3 px-6">
              Appointment
            </Button>
          )}
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTrainers.map((trainer) => (
            <div
              key={trainer.id}
              className="relative overflow-hidden group h-[380px] sm:h-[420px] shadow-lg border border-neutral-900"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${trainer.image}')` }}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Social Links Overlay */}
              <div className="absolute inset-x-0 top-6 flex justify-center space-x-3 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                  <Facebook size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                  <Twitter size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                  <Instagram size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                  <Mail size={14} />
                </a>
              </div>

              {/* Content Panel (aligned bottom center) */}
              <div className="absolute bottom-0 left-0 w-full text-center pb-8 pt-12 px-6">
                <h4 className="text-white font-oswald text-xl font-bold uppercase tracking-wider mb-1">
                  {trainer.name}
                </h4>
                <span className="text-primary font-oswald text-xs font-semibold uppercase tracking-widest block mb-4">
                  {trainer.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
