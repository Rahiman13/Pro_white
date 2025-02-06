import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ServicesDropdown from './ServicesDropdown';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Logo from '../../assets/projexino.png';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  const handleWhatsAppClick = () => {
    // Remove spaces and format the number correctly
    const phoneNumber = '919601843090'; // Remove +91 and spaces
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 backdrop-blur-xl bg-[#0A047D]"
      // style={{
      //   background: 'rgba(17, 25, 40, 0.75)',
      //   boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      //   borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      // }}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 animate-gradient-x"></div>
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-500/10 to-transparent blur-3xl"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500/10 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 w-48"
          >
            <Link to="/" className="flex items-center">
              <div className="relative w-28 h-16 rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-border-flow"></div>
                <div className="absolute inset-[2px] bg-white flex items-center justify-center p-2 rounded-xl">
                  <img 
                    src={Logo} 
                    alt="Projexino"
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Centered Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <NavLinks showServices={showServices} setShowServices={setShowServices} />
          </div>

          {/* Right Side - WhatsApp Button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
              <span className="font-medium">Chat Now</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-full overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"></div>
              <div className="relative flex items-center justify-center text-white">
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden backdrop-blur-xl"
            style={{
              background: 'rgba(17, 25, 40, 0.95)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="px-4 py-6 space-y-4">
              <NavLinks showServices={showServices} setShowServices={setShowServices} mobile />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                <span className="font-medium">Chat on WhatsApp</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 