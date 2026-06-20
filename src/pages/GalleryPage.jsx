import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import GalleryGrid from '../components/sections/GalleryGrid';
import GetInTouch from '../components/sections/GetInTouch';

const GalleryPage = () => {
  return (
    <main className="overflow-x-hidden">
      <Breadcrumb title="Gallery" parentName="Pages" parentPath="#" />
      
      {/* Reuses the GalleryGrid with popup lightboxes */}
      <div className="py-16 bg-darkBg">
        <div className="max-w-7xl mx-auto px-4">
          <GalleryGrid />
        </div>
      </div>

      <GetInTouch />
    </main>
  );
};

export default GalleryPage;
