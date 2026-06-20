import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkBg-darker text-neutral-400 pt-20 pb-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          {/* About Widget */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link to="/" className="inline-block">
              <img src="/img/logo.png" alt="GymLife Logo" className="h-8 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore dolore magna aliqua endisse ultrices gravida lorem.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors duration-350">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors duration-350">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors duration-350">
                <Youtube size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors duration-350">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors duration-350">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="text-white font-oswald text-sm font-semibold uppercase tracking-widest mb-6">Useful links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/class-details" className="hover:text-primary transition-colors">Classes</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="text-white font-oswald text-sm font-semibold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Login</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">My account</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Subscribe</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Tips & Guides Widget */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <h4 className="text-white font-oswald text-sm font-semibold uppercase tracking-widest">Tips & Guides</h4>
            
            <div className="space-y-4">
              <div className="border-b border-neutral-900 pb-4">
                <Link to="/blog/1" className="text-white hover:text-primary font-semibold text-sm leading-snug transition-colors">
                  Physical fitness may help prevent depression, anxiety
                </Link>
                <div className="flex items-center space-x-4 mt-2 text-xs text-neutral-500 font-medium">
                  <span>3 min read</span>
                  <span>20 Comments</span>
                </div>
              </div>

              <div>
                <Link to="/blog/2" className="text-white hover:text-primary font-semibold text-sm leading-snug transition-colors">
                  Fitness: The best exercise to lose belly fat and tone up...
                </Link>
                <div className="flex items-center space-x-4 mt-2 text-xs text-neutral-500 font-medium">
                  <span>3 min read</span>
                  <span>20 Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-900 pt-8 mt-4 flex flex-col sm:flex-row justify-between items-center text-xs space-y-4 sm:space-y-0">
          <p className="text-center sm:text-left">
            Copyright &copy; {currentYear} All rights reserved | This template is migrated with{' '}
            <Heart size={10} className="inline-block text-primary fill-primary animate-pulse mx-0.5" /> by Antigravity
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-primary">Terms & Conditions</a>
            <a href="#" className="hover:text-primary">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
