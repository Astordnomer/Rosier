import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { animateContactSection } from '../animations/contactAnimation';

function ContactUs() {
  const containerRef = useRef(null);

  useEffect(() => {
    animateContactSection(containerRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-4"
    >
      <div className="Contact-Contaner w-full sm:w-[95%] md:w-[90%] mt-25 h-auto md:h-[700px] bg-white/20 border border-white/10 text-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">

        {/* Left Section */}
        <div className="left-contaner p-4 sm:p-5 w-full md:w-[50%] flex flex-col justify-between">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight contact-title">
            We Are Always Ready To Help You <br /> & Answer Your Questions
          </h1>

          <div className="center-contaner w-full flex flex-col sm:flex-row gap-4 mt-6">
            <div className="left-smc w-full sm:w-1/2 flex flex-col gap-4">
              <div className="left-sms-left h-auto flex justify-center flex-col contact-title">
                <p className="text-base sm:text-lg text-center mt-2">Contact Number</p>
                <p className="text-base sm:text-lg text-center mt-2">91-9711580581</p>
              </div>
              <div className="left-sms-right h-auto flex justify-center flex-col rounded-xl contact-title">
                <p className="text-base sm:text-lg text-center mt-2">Email</p>
                <p className="text-base sm:text-lg text-center mt-2">care@rosierfoods.com</p>
              </div>
            </div>

            <div className="right-smc w-full sm:w-1/2 flex flex-col gap-4">
              <div className="h-auto contact-title text-center">
                <p className="text-base sm:text-lg mt-2">Location</p>
                <p className="text-sm sm:text-base mt-2 px-2">
                  First Floor 744, Shakti Khand 3, INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
                </p>
              </div>
              <div className="h-auto flex justify-center flex-col rounded-xl contact-title">
                <p className="text-base sm:text-lg text-center mt-2">Social Network</p>
                <div className="flex justify-center mt-5 gap-6 text-3xl sm:text-4xl text-white">
                  {[
                    {
                      icon: 'ri-facebook-circle-fill',
                      color: 'blue',
                      url: 'https://www.facebook.com/rosierfoods',
                    },
                    {
                      icon: 'ri-youtube-fill',
                      color: 'red',
                      url: 'https://www.youtube.com/@rosierfoods',
                    },
                    {
                      icon: 'ri-instagram-line',
                      color: 'deeppink',
                      url: 'https://www.instagram.com/rosier.foods',
                    },
                  ].map((item, idx) => (
                    <motion.i
                      key={idx}
                      className={`${item.icon} cursor-pointer`}
                      whileHover={{ scale: 1.3, color: item.color }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      onClick={() => window.open(item.url, '_blank')}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="right-contaner w-full md:w-[50%] bg-amber-50/10 p-4 sm:p-6 flex items-center justify-center">
          <form className="w-full max-w-md space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 contact-title text-center sm:text-left">Get in Touch</h2>

            <input type="text" placeholder="Your Name" className="form-field w-full p-3 rounded bg-white/20 text-white placeholder-white/70 outline-none" />
            <input type="email" placeholder="Email Address" className="form-field w-full p-3 rounded bg-white/20 text-white placeholder-white/70 outline-none" />
            <input type="text" placeholder="Subject" className="form-field w-full p-3 rounded bg-white/20 text-white placeholder-white/70 outline-none" />
            <input type="tel" placeholder="Phone Number" className="form-field w-full p-3 rounded bg-white/20 text-white placeholder-white/70 outline-none" />
            <textarea placeholder="Your Message" rows="4" className="form-field w-full p-3 rounded bg-white/20 text-white placeholder-white/70 outline-none"></textarea>

            <button type="submit" className="form-field w-full p-3 bg-amber-500 rounded text-black font-bold hover:bg-amber-400 transition">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
