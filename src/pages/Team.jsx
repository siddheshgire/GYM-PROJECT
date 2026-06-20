import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import TeamSection from '../components/sections/TeamSection';
import GetInTouch from '../components/sections/GetInTouch';

const Team = () => {
  return (
    <main className="overflow-x-hidden">
      <Breadcrumb title="Our Team" parentName="" />
      
      {/* TeamSection configured to display all staff/trainers */}
      <TeamSection showAll={true} />
      
      <GetInTouch />
    </main>
  );
};

export default Team;
