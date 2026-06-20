import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../utils/constants';

const Navbar = ({ onSearchOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const socialIcons = {
    Facebook: <Facebook size={16} />,
    Twitter: <Twitter size={16} />,
    Youtube: <Youtube size={16} />,
    Instagram: <Instagram size={16} />
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isSticky ? 'bg-darkBg-darker/95 shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src="/img/logo.png" alt="GymLife Logo" className="h-8 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {NAVIGATION_LINKS.map((link) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);

                if (link.dropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={`flex items-center text-sm font-semibold uppercase tracking-wider font-oswald transition-colors duration-200 py-2 ${
                          location.pathname !== '/' && link.dropdown.some(d => d.path === location.pathname)
                            ? 'text-primary'
                            : 'text-white hover:text-primary'
                        }`}
                      >
                        {link.name}
                        <ChevronDown size={14} className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      {/* Dropdown Menu */}
                      <div className="absolute left-0 mt-0 w-48 bg-darkBg-darker border-t-2 border-primary py-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {link.dropdown.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            className={`block px-4 py-2 text-xs uppercase tracking-wider font-semibold font-oswald text-neutral-300 hover:bg-neutral-800 hover:text-primary transition-colors duration-200 ${
                              location.pathname === sublink.path ? 'text-primary' : ''
                            }`}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-semibold uppercase tracking-wider font-oswald transition-colors duration-200 py-2 ${
                      isActive ? 'text-primary' : 'text-white hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <button
                onClick={onSearchOpen}
                className="text-white hover:text-primary transition-colors duration-200"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <div className="flex items-center space-x-4 border-l border-neutral-700 pl-6">
                <a href="#" className="text-white hover:text-primary transition-colors duration-200"><Facebook size={16} /></a>
                <a href="#" className="text-white hover:text-primary transition-colors duration-200"><Twitter size={16} /></a>
                <a href="#" className="text-white hover:text-primary transition-colors duration-200"><Youtube size={16} /></a>
                <a href="#" className="text-white hover:text-primary transition-colors duration-200"><Instagram size={16} /></a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary hover:bg-neutral-900 focus:outline-none"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Offcanvas Menu) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black"
            />

            {/* Drawer container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-sm bg-darkBg-darker z-50 overflow-y-auto px-6 py-6 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <img src="/img/logo.png" alt="Logo" className="h-6 w-auto" />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-md text-neutral-400 hover:text-white"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Search Toggle inside drawer */}
                <div className="mb-6">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onSearchOpen();
                    }}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-neutral-900 border border-neutral-800 text-white font-oswald text-xs uppercase tracking-wider font-bold hover:bg-neutral-800 transition-colors"
                  >
                    <Search size={16} />
                    <span>Search Site</span>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-4">
                  {NAVIGATION_LINKS.map((link) => {
                    if (link.dropdown) {
                      return (
                        <div key={link.name} className="flex flex-col">
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                            className="flex items-center justify-between py-2 text-sm font-semibold uppercase tracking-wider font-oswald text-white hover:text-primary text-left border-b border-neutral-950"
                          >
                            <span>{link.name}</span>
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-200 ${
                                activeDropdown === link.name ? 'rotate-180 text-primary' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-4 bg-neutral-900/40 mt-1"
                              >
                                {link.dropdown.map((sublink) => (
                                  <Link
                                    key={sublink.name}
                                    to={sublink.path}
                                    className="block py-2 text-xs uppercase tracking-wider font-semibold font-oswald text-neutral-400 hover:text-primary"
                                  >
                                    {sublink.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="py-2 text-sm font-semibold uppercase tracking-wider font-oswald text-white hover:text-primary border-b border-neutral-950"
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Social Drawer Bottom */}
              <div className="mt-8 pt-6 border-t border-neutral-900">
                <div className="flex items-center justify-center space-x-6">
                  <a href="#" className="text-neutral-400 hover:text-primary"><Facebook size={20} /></a>
                  <a href="#" className="text-neutral-400 hover:text-primary"><Twitter size={20} /></a>
                  <a href="#" className="text-neutral-400 hover:text-primary"><Youtube size={20} /></a>
                  <a href="#" className="text-neutral-400 hover:text-primary"><Instagram size={20} /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
