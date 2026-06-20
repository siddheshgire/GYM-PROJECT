import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const GetInTouch = () => {
  return (
    <div className="bg-[#0a0a0a] py-12 border-t border-neutral-900 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-neutral-900">
          
          {/* Location */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 md:px-6 py-6 md:py-0">
            <div className="text-primary flex-shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h5 className="text-white font-oswald text-xs uppercase tracking-wider font-semibold mb-1">Office Location</h5>
              <p className="text-neutral-400 text-sm leading-relaxed">
                333 Middle Winchendon Rd, Rindge,<br /> NH 03461
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 md:px-6 py-6 md:py-0">
            <div className="text-primary flex-shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h5 className="text-white font-oswald text-xs uppercase tracking-wider font-semibold mb-1">Phone Numbers</h5>
              <p className="text-neutral-400 text-sm leading-relaxed">
                125-711-811 <br />
                125-668-886
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 md:px-6 py-6 md:py-0">
            <div className="text-primary flex-shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h5 className="text-white font-oswald text-xs uppercase tracking-wider font-semibold mb-1">Support Email</h5>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Support.gymcenter@gmail.com
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
