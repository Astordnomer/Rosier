import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-white py-10 px-4 md:px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-8">
        <div className="w-full md:w-[40%] flex justify-center md:justify-start">
          <img
            className="h-12 md:h-30 w-auto"
            src="//www.rosierfoods.com/cdn/shop/files/logo_1_1_bb8fb2d6-681f-4ca4-aad5-5dbc7e581ce4.png?v=1743060161&width=600"
            alt="Rosier Foods"
          />
        </div>

        <div className="w-full md:w-[60%] flex flex-col gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-end">
            <span className="font-semibold text-amber-400">Helpful Links</span>
            <a href="#" className="hover:underline">Policies</a>
            <Link to="/contact" className="hover:underline">Contact Us</Link> {/* ✅ Fixed */}
          </div>

          <div className="flex gap-6 justify-center md:justify-end text-2xl">
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
                whileHover={{ scale: 1.2, color: item.color }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => window.open(item.url, '_blank')}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
