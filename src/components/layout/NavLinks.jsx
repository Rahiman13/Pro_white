import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const NavLinks = ({ mobile }) => {
  const location = useLocation();
  const [hoveredService, setHoveredService] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Portfolio', path: '/portfolio' },
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
                <span className={`text-gray-300 group-hover:text-white transition-colors duration-300 ${
                  location.pathname.includes(link.path) ? 'text-white font-semibold' : ''
                }`}>
                  {link.name}
                </span>
                <motion.div
                  animate={{ rotate: hoveredService ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaChevronDown className="text-sm text-gray-400 group-hover:text-white" />
                </motion.div>
                {location.pathname.includes(link.path) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                    initial={false}
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
                    } bg-gradient-to-br from-gray-900/95 via-purple-900/95 to-gray-900/95 backdrop-blur-xl rounded-2xl shadow-xl p-4 space-y-2 border border-white/10`}
                  >
                    {services.map((service) => (
                      <motion.div
                        key={service.name}
                        whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                        className="group rounded-xl overflow-hidden"
                      >
                        <Link
                          to={service.path}
                          className={`block py-3 px-4 ${
                            location.pathname === service.path
                              ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white'
                              : 'text-gray-300 hover:text-white'
                          } transition-all duration-300`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl group-hover:scale-110 transition-transform">
                              {service.icon}
                            </span>
                            <div>
                              <span className="block font-medium">{service.name}</span>
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
              className="relative group px-3 py-2 block"
            >
              <span className={`text-gray-300 group-hover:text-white transition-colors duration-300 ${
                location.pathname === link.path ? 'text-white font-semibold' : ''
              }`}>
                {link.name}
              </span>
              
              {/* Fancy active/hover effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
              
              {/* Sliding underline indicator */}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                  initial={false}
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