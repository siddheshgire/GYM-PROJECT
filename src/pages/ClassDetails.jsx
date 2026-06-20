import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Share2, ThumbsUp, Camera, Facebook, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumb from '../components/common/Breadcrumb';
import GetInTouch from '../components/sections/GetInTouch';
import { CATEGORIES_DATA } from '../data/categories';

const ClassDetails = () => {
  const { categorySlug } = useParams();

  // Fallback to body-building if no slug is provided or it doesn't exist
  const currentSlug = categorySlug || 'body-building';
  const category = CATEGORIES_DATA.find((c) => c.id === currentSlug) || CATEGORIES_DATA.find((c) => c.id === 'body-building');

  const categoriesList = [
    { name: 'Yoga', slug: 'yoga' },
    { name: 'Running', slug: 'running' },
    { name: 'Weightloss', slug: 'weightloss' },
    { name: 'Cardio', slug: 'cardio' },
    { name: 'Body Building', slug: 'body-building' },
    { name: 'Nutrition', slug: 'nutrition' }
  ];

  // Helper to split title for styling (last word orange)
  const splitTitle = (titleText) => {
    const words = titleText.split(' ');
    if (words.length <= 1) return { main: titleText, accent: '' };
    const accent = words.pop();
    return { main: words.join(' '), accent };
  };

  const { main, accent } = splitTitle(category.title);

  const timetableRows = [
    {
      time: '6:00am - 8:00am',
      slots: [
        { name: 'Body Building', trainer: 'Marcus Vance', isHighlight: true },
        { name: 'Yoga Flow', trainer: 'Sara J.' },
        { name: 'Body Building', trainer: 'Marcus Vance', isHighlight: true },
        { name: 'Boxing HIIT', trainer: 'Mike T.' },
        { name: 'Body Building', trainer: 'Marcus Vance', isHighlight: true },
        { name: 'Open Gym', trainer: 'Staff' },
        { name: 'Rest Day', trainer: '' }
      ]
    },
    {
      time: '10:00am - 12:00am',
      slots: [
        { name: 'Cardio Blasts', trainer: 'Elena R.' },
        { name: 'Body Building', trainer: 'Marcus Vance', isHighlight: true },
        { name: 'Cross Training', trainer: 'John D.' },
        { name: 'Body Building', trainer: 'Marcus Vance', isHighlight: true },
        { name: 'Yoga Flow', trainer: 'Sara J.' },
        { name: 'Body Building', trainer: 'Marcus Vance', isHighlight: true },
        { name: 'Mobility', trainer: 'Staff' }
      ]
    }
  ];

  return (
    <main className="overflow-x-hidden bg-darkBg text-neutral-300">
      <Breadcrumb title={category.title} parentName="Classes" parentPath="/class-details" />

      {/* Hero Header Area */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden select-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/img/classes/class-details/class-detailsl.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-black/45 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 max-w-7xl mx-auto z-10">
          <h1 className="font-oswald text-4xl sm:text-6xl font-extrabold uppercase italic tracking-tighter leading-none text-white">
            {main} <br />
            {accent && <span className="text-primary">{accent}</span>}
          </h1>
        </div>
      </section>

      {/* Main Details and Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Info Column (Left Column) - Wrapped in Framer Motion */}
          <motion.div
            key={currentSlug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8 space-y-12"
          >
            
            {/* Description */}
            <div className="space-y-6">
              <h2 className="font-oswald text-2xl sm:text-3xl uppercase italic border-l-4 border-primary pl-6 text-white font-extrabold">
                {category.title}
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Features Bullet Points */}
            <div className="space-y-4">
              <h3 className="font-oswald text-lg font-bold uppercase text-white tracking-wider">
                What You'll Achieve
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                    <span className="w-2 h-2 bg-primary rotate-45 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trainer Credentials Card */}
            <div className="bg-[#1F2937] border border-neutral-800 p-8 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              
              {/* Photo */}
              <div className="w-full md:w-48 h-48 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={category.instructor.image}
                  alt={`${category.instructor.name} Trainer Profile`}
                />
              </div>

              {/* Card Details */}
              <div className="flex-grow space-y-4 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-oswald text-xl font-bold uppercase text-white">
                      {category.instructor.name}
                    </h3>
                    <p className="text-primary font-oswald text-xs font-semibold uppercase tracking-wider">
                      {category.instructor.role}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 flex items-center justify-center border border-neutral-800 hover:border-primary text-neutral-400 hover:text-white transition-colors">
                      <Share2 size={14} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center border border-neutral-800 hover:border-primary text-neutral-400 hover:text-white transition-colors">
                      <ThumbsUp size={14} />
                    </button>
                  </div>
                </div>

                {/* Trainer Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-neutral-800/80">
                  {[
                    { label: 'Age', value: category.instructor.age },
                    { label: 'Weight', value: category.instructor.weight },
                    { label: 'Height', value: category.instructor.height },
                    { label: 'Exp', value: category.instructor.experience }
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-neutral-500 text-[10px] uppercase font-semibold">{stat.label}</p>
                      <p className="font-oswald text-base sm:text-lg font-bold text-white mt-1">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex gap-4 pt-2">
                  <a className="text-neutral-400 hover:text-primary transition-colors" href="#"><Camera size={16} /></a>
                  <a className="text-neutral-400 hover:text-primary transition-colors" href="#"><Facebook size={16} /></a>
                  <a className="text-neutral-400 hover:text-primary transition-colors" href="#"><Mail size={16} /></a>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4 space-y-8 w-full">
            
            {/* Categories Widget */}
            <div className="bg-darkBg-light border border-neutral-900 p-6 shadow-xl">
              <h4 className="font-oswald text-sm font-bold uppercase tracking-widest mb-6 pb-2 border-b border-primary inline-block text-white">
                Categories
              </h4>
              <ul className="space-y-2">
                {categoriesList.map((cat) => {
                  const isActive = cat.slug === currentSlug;
                  return (
                    <li key={cat.slug}>
                      <Link
                        to={`/classes/${cat.slug}`}
                        className={`flex justify-between items-center p-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                          isActive
                            ? 'bg-primary text-black font-bold'
                            : 'bg-transparent border border-gray-600 hover:border-primary text-neutral-300 hover:text-primary'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <ArrowRight size={12} className={isActive ? 'text-black' : 'text-neutral-500 group-hover:text-primary'} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Discount Banner */}
            <Link
              to="/contact"
              className="relative block bg-primary p-12 overflow-hidden group cursor-pointer active:scale-95 transition-all shadow-xl"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-black/10 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
              <div className="relative z-10 text-center">
                <p className="font-oswald text-xs text-black uppercase tracking-[0.2em] font-bold mb-3">Summer Rush</p>
                <h5 className="font-oswald text-4xl text-black font-extrabold italic leading-none mb-3">30% OFF</h5>
                <p className="font-oswald text-[10px] text-black uppercase tracking-wider font-bold bg-white/20 py-2 px-4 inline-block">
                  Special Signup Discount
                </p>
              </div>
            </Link>

          </aside>

        </div>
      </section>

      {/* Weekly Timetable Grid */}
      <section className="bg-darkBg-darker py-20 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-oswald text-2xl sm:text-3xl uppercase italic mb-12 text-center text-white font-extrabold tracking-wider">
            Weekly <span className="text-primary">Timetable</span>
          </h2>
          
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse border border-neutral-900">
              <thead>
                <tr className="bg-neutral-950">
                  <th className="p-5 border border-neutral-900 font-oswald text-xs uppercase italic text-primary font-bold text-center w-40">
                    Time
                  </th>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <th key={day} className="p-5 border border-neutral-900 font-oswald text-xs uppercase tracking-wider text-neutral-300 font-bold text-center">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timetableRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-neutral-950/20' : 'bg-neutral-950/40'}>
                    <td className="p-6 border border-neutral-900 bg-neutral-950/30 text-center font-oswald text-xs uppercase tracking-wider font-semibold text-neutral-300">
                      {row.time}
                    </td>
                    {row.slots.map((slot, sIdx) => (
                      <td
                        key={sIdx}
                        className={`p-6 border border-neutral-900 text-center transition-colors duration-300 hover:bg-neutral-900/60 ${
                          slot.isHighlight ? 'bg-neutral-900/10' : ''
                        }`}
                      >
                        {slot.name !== 'Rest Day' ? (
                          <>
                            <p className={`font-oswald text-xs font-bold uppercase tracking-wider ${slot.isHighlight ? 'text-primary' : 'text-white'}`}>
                              {slot.name}
                            </p>
                            <p className="text-[10px] text-neutral-500 font-medium mt-1">{slot.trainer}</p>
                          </>
                        ) : (
                          <p className="text-[10px] text-neutral-600 font-semibold uppercase tracking-wider">Rest Day</p>
                        )}
                      </td>
                    ))}
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

export default ClassDetails;
