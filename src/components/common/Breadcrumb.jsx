import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, parentPath = '/pages', parentName = 'Pages' }) => {
  return (
    <section
      className="relative bg-cover bg-center pt-32 pb-24 text-center select-none"
      style={{ backgroundImage: `url('/img/breadcrumb-bg.jpg')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-wider mb-4">
          {title}
        </h2>
        <div className="flex items-center justify-center space-x-2 text-xs font-semibold uppercase tracking-wider">
          <Link to="/" className="text-white hover:text-primary transition-colors duration-200">
            Home
          </Link>
          <span className="text-neutral-400">/</span>
          {parentName && (
            <>
              <Link to={parentPath} className="text-white hover:text-primary transition-colors duration-200">
                {parentName}
              </Link>
              <span className="text-neutral-400">/</span>
            </>
          )}
          <span className="text-primary">{title}</span>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
