import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LoginModal from './Login';
import { useCart } from "../context/CartContext";

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/ourstory', label: 'Our Story' },
  { to: '/shop', label: 'Shop' },
  { to: '/community', label: 'Community' },
  { to: '/contactus', label: 'Contact Us' }
];

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { openCart } = useCart();
  
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < lastScrollY);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    })
  };

  return (
    <>
      <AnimatePresence>
        {showNavbar && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-0 left-0 w-full z-[500] px-5 py-4 flex justify-between items-center backdrop-blur-md bg-black/30 shadow-md"
          >
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center cursor-pointer">
              <Link to='/'>
                <img
                  className="h-12 md:h-16 w-auto"
                  src="//www.rosierfoods.com/cdn/shop/files/logo_1_1_bb8fb2d6-681f-4ca4-aad5-5dbc7e581ce4.png?v=1743060161&width=600"
                  alt="Rosier Foods"
                />
              </Link>
            </motion.div>

            <ul className="hidden md:flex space-x-8 text-white font-medium">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`relative group transition ${location.pathname === to ? 'text-rose-400' : ''}`}
                  >
                    {label}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="text-white text-xl flex gap-4 md:gap-6 items-center">
              <i
                className="ri-user-fill cursor-pointer hover:scale-110 transition-transform"
                onClick={() => setShowLoginModal(true)}
              ></i>
              <i onClick={openCart} className="ri-shopping-cart-2-line cursor-pointer hover:scale-110 transition-transform"></i>

              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="md:hidden text-2xl focus:outline-none"
              >
                <motion.i
                  className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-6 space-y-4 md:hidden shadow-md"
                >
                  {navLinks.map(({ to, label }, i) => (
                    <motion.li
                      key={to}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={mobileItemVariants}
                    >
                      <Link
                        to={to}
                        onClick={() => setMenuOpen(false)}
                        className={`text-lg ${location.pathname === to ? 'text-rose-400' : ''}`}
                      >
                        {label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
};

export default Navbar;
