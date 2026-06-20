import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import SearchModal from './components/ui/SearchModal';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ClassDetails from './pages/ClassDetails';
import ClassTimetable from './pages/ClassTimetable';
import BmiCalculator from './pages/BmiCalculator';
import Services from './pages/Services';
import Team from './pages/Team';
import GalleryPage from './pages/GalleryPage';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Scroll Restoration Utility
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const isNotFound = !['/', '/about', '/class-details', '/timetable', '/bmi', '/services', '/team', '/gallery', '/blog', '/contact']
    .some(path => location.pathname === path || location.pathname.startsWith('/blog/') || location.pathname.startsWith('/classes/'));

  return (
    <div className="flex flex-col min-h-screen bg-darkBg text-neutral-300">
      <ScrollToTop />
      
      {/* Conditionally hide header/footer on NotFound 404 pages to match template design */}
      {!isNotFound && <Navbar onSearchOpen={() => setIsSearchOpen(true)} />}
      
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/class-details" element={<ClassDetails />} />
          <Route path="/classes/:categorySlug" element={<ClassDetails />} />
          <Route path="/timetable" element={<ClassTimetable />} />
          <Route path="/bmi" element={<BmiCalculator />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {!isNotFound && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
