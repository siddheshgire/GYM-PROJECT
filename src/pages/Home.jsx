import React from 'react';
import Hero from '../components/sections/Hero';
import ChooseUs from '../components/sections/ChooseUs';
import OfferClasses from '../components/sections/OfferClasses';
import Banner from '../components/sections/Banner';
import Pricing from '../components/sections/Pricing';
import GalleryGrid from '../components/sections/GalleryGrid';
import TeamSection from '../components/sections/TeamSection';
import Testimonial from '../components/sections/Testimonial';
import GetInTouch from '../components/sections/GetInTouch';

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <ChooseUs />
      <OfferClasses />
      <Banner />
      <Pricing />
      <GalleryGrid />
      <TeamSection showAll={false} />
      <Testimonial />
      <GetInTouch />
    </main>
  );
};

export default Home;
