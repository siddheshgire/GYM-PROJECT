import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import Breadcrumb from '../components/common/Breadcrumb';
import GetInTouch from '../components/sections/GetInTouch';
import Button from '../components/ui/Button';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setName('');
    setEmail('');
    setWebsite('');
    setComment('');
  };

  return (
    <main className="overflow-x-hidden">
      <Breadcrumb title="Contact Us" parentName="" />

      <section className="bg-darkBg py-24 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            
            {/* Contact details */}
            <div>
              <div className="mb-8">
                <span className="text-primary font-oswald text-sm font-bold uppercase tracking-widest block mb-2">
                  Contact Us
                </span>
                <h2 className="text-white font-oswald text-3xl sm:text-4xl font-extrabold uppercase tracking-wider">
                  Get in Touch
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="text-white font-oswald text-xs uppercase tracking-wider font-semibold mb-1">Office Location</h5>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      333 Middle Winchendon Rd, Rindge, NH 03461
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="text-white font-oswald text-xs uppercase tracking-wider font-semibold mb-1">Phone Numbers</h5>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      125-711-811 / 125-668-886
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary mt-1">
                    <Mail size={20} />
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

            {/* Leave a comment form */}
            <div className="bg-darkBg-light p-8 sm:p-12 border border-neutral-900 shadow-2xl">
              
              {isSubmitted && (
                <div className="mb-8 bg-green-950/40 border border-green-800 p-5 text-left flex items-center space-x-3 text-white text-xs font-semibold animate-fadeIn">
                  <CheckCircle className="text-green-500" size={18} />
                  <span>Message sent successfully! We will get back to you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 px-5 py-3.5 text-xs focus:border-primary outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 px-5 py-3.5 text-xs focus:border-primary outline-none"
                />
                <input
                  type="url"
                  placeholder="Website (optional)"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 px-5 py-3.5 text-xs focus:border-primary outline-none"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Message"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 px-5 py-3.5 text-xs focus:border-primary outline-none resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-oswald text-xs uppercase font-bold tracking-wider py-4 hover:bg-primary-hover transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>

          </div>

          {/* Styled Grayscale Google Map */}
          <div className="w-full h-[450px] border border-neutral-900 shadow-2xl relative overflow-hidden grayscale">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.069761554938!2d-74.2175599360452!3d40.767139456514954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1581710470843!5m2!1sen!2sbd"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Gym location map"
            />
          </div>
        </div>
      </section>

      <GetInTouch />
    </main>
  );
};

export default Contact;
