import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const NavLinks = ({ mobile, onNavClick }) => {
  const location = useLocation();
  const [hoveredService, setHoveredService] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    // { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Industries', path: '/industries' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: 'Web Development', path: '/services/web-development', icon: '💻' },
    { name: 'App Development', path: '/services/app-development', icon: '📱' },
    { name: 'UI/UX Design', path: '/services/web-design', icon: '🎨' },
    { name: 'Digital Marketing', path: '/services/digital-marketing', icon: '📈' },
    { name: 'Staffing Solutions', path: '/services/staffing', icon: '👥' }
  ];

  const handleNavClick = () => {
    if (mobile && onNavClick) {
      onNavClick();
    }
  };

  return (
    <div className={`${mobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-8'}`}>
      {links.map((link) => (
        <motion.div
          key={link.name}
          className="relative"
          onHoverStart={() => setHoveredItem(link.name)}
          onHoverEnd={() => setHoveredItem(null)}
        >
          {link.hasDropdown ? (
            <div
              onMouseEnter={() => !mobile && setHoveredService(true)}
              onMouseLeave={() => !mobile && setHoveredService(false)}
              className="relative"
            >
              <motion.button
                className={`flex items-center space-x-2 px-3 py-2 relative group`}
                onClick={() => mobile && setHoveredService(!hoveredService)}
              >
                <span className={`${mobile ? 'text-white' : 'text-black'} group-hover:text-gray-800 transition-colors duration-300 ${
                  location.pathname.includes(link.path) ? `${mobile ? 'text-white' : 'text-gray-900'} font-bold` : ''
                }`}>
                  {link.name}
                </span>
                <motion.div
                  animate={{ rotate: hoveredService ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaChevronDown className="text-sm text-gray-600 group-hover:text-gray-800" />
                </motion.div>
                {location.pathname.includes(link.path) && (
                  <motion.div
                    layoutId="navunderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>

              {/* Enhanced Dropdown Menu */}
              <AnimatePresence>
                {hoveredService && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={`${
                      mobile ? 'mt-2 ml-4' : 'absolute top-full left-0 mt-2 w-72'
                    } ${mobile ? 'bg-[#111928]/95' : 'bg-white/95'} backdrop-blur-xl rounded-2xl shadow-xl p-4 space-y-2 border border-gray-100`}
                  >
                    {services.map((service) => (
                      <motion.div
                        key={service.name}
                        whileHover={{ x: 10, backgroundColor: mobile ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)' }}
                        className="group rounded-xl overflow-hidden"
                      >
                        <Link
                          to={service.path}
                          onClick={handleNavClick}
                          className={`block py-3 px-4 ${
                            location.pathname === service.path
                              ? mobile 
                                ? 'bg-gradient-to-r from-blue-400/20 to-purple-400/20 text-white'
                                : 'bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-gray-900'
                              : mobile 
                                ? 'text-white hover:text-blue-400' 
                                : 'text-gray-700 hover:text-blue-600'
                          } transition-all duration-300`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl group-hover:scale-110 transition-transform">
                              {service.icon}
                            </span>
                            <div>
                              <span className={`block font-medium ${
                                mobile 
                                  ? location.pathname === service.path
                                    ? 'text-blue-400'
                                    : 'text-white group-hover:text-blue-400'
                                  : location.pathname === service.path
                                    ? 'text-gray-900'
                                    : 'text-gray-700 group-hover:text-blue-600'
                              }`}>
                                {service.name}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              to={link.path}
              onClick={handleNavClick}
              className="relative group px-3 py-2 block"
            >
              <span className={`${mobile ? 'text-white' : 'text-black'} group-hover:text-gray-800 transition-colors duration-300 ${
                location.pathname === link.path ? `${mobile ? 'text-white' : 'text-gray-900'} font-semibold` : ''
              }`}>
                {link.name}
              </span>
              
              {/* Fancy active/hover effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
              
              {/* Sliding underline indicator */}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navunderline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              {/* Hover glow effect */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: hoveredItem === link.name ? 1.5 : 0,
                  opacity: hoveredItem === link.name ? 0.15 : 0
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 blur-xl rounded-full"
              />
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default NavLinks; 