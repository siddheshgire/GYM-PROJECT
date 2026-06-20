import React, { useState } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import GetInTouch from '../components/sections/GetInTouch';
import { TIMETABLE_SLOTS, TIMETABLE_DAYS } from '../utils/constants';

const ClassTimetable = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All event' },
    { key: 'fitness', label: 'Fitness tips' },
    { key: 'motivation', label: 'Motivation' },
    { key: 'workout', label: 'Workout' }
  ];

  return (
    <main className="overflow-x-hidden">
      <Breadcrumb title="Timetable" parentName="Pages" parentPath="#" />

      <section className="bg-darkBg py-24 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title & Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 space-y-6 md:space-y-0">
            <div>
              <span className="text-primary font-oswald text-sm font-bold uppercase tracking-widest block mb-2">
                Find Your Time
              </span>
              <h2 className="text-white font-oswald text-3xl font-extrabold uppercase tracking-wider">
                Find Your Time
              </h2>
            </div>
            
            {/* Table Filters */}
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-5 py-2.5 font-oswald text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                    activeFilter === f.key
                      ? 'bg-primary text-white'
                      : 'bg-darkBg-light text-neutral-400 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Timetable Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[900px] border border-neutral-900">
              <thead>
                <tr className="bg-neutral-950">
                  <th className="py-6 px-4 border border-neutral-900 font-oswald text-xs uppercase tracking-wider text-neutral-400 font-bold w-40">
                    Time Slot
                  </th>
                  {TIMETABLE_DAYS.map((day) => (
                    <th
                      key={day}
                      className="py-6 px-4 border border-neutral-900 font-oswald text-xs uppercase tracking-wider text-neutral-300 font-bold"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIMETABLE_SLOTS.map((slot, sIdx) => (
                  <tr key={sIdx} className={sIdx % 2 === 0 ? 'bg-neutral-950/20' : 'bg-neutral-950/40'}>
                    {/* Time Column */}
                    <td className="py-8 px-4 border border-neutral-900 text-center font-oswald text-xs uppercase tracking-wider font-semibold text-neutral-300">
                      {slot.time}
                    </td>

                    {/* Weekday Columns */}
                    {TIMETABLE_DAYS.map((day) => {
                      const item = slot.schedule[day];

                      if (!item) {
                        return (
                          <td
                            key={day}
                            className="py-8 px-4 border border-neutral-900 bg-neutral-950/10 text-neutral-700"
                          />
                        );
                      }

                      const isMatch = activeFilter === 'all' || item.category === activeFilter;
                      
                      return (
                        <td
                          key={day}
                          className={`py-8 px-4 border border-neutral-900 text-center transition-all duration-300 ${
                            isMatch
                              ? 'bg-neutral-900/40 text-white'
                              : 'opacity-15 grayscale filter blur-[0.5px] scale-95'
                          } ${
                            activeFilter !== 'all' && isMatch
                              ? 'border-t-2 border-primary border-b-2 ring-1 ring-primary/45 shadow-lg'
                              : ''
                          }`}
                        >
                          <h5 className="font-oswald text-sm font-bold uppercase tracking-wider text-white group-hover:text-primary mb-1">
                            {item.event}
                          </h5>
                          <span className="text-xs text-neutral-400 font-semibold italic">
                            {item.trainer}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      <GetInTouch />
    </main>
  );
};

export default ClassTimetable;
