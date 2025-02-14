import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaCrown } from 'react-icons/fa';
// import Home from '../assets/HomeTab(400x600).jpg'
import HomeImage from '../assets/new/HomeImage.jpg'

const CreativeImage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      const offsetFactor = 15;
      
      setMousePosition({ 
        x: moveX / offsetFactor, 
        y: moveY / offsetFactor 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-[80vh] perspective-[2000px] group">
      {/* Royal Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Premium Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#14213D]/10 via-[#1E3A8A]/5 to-[#1E40AF]/10 animate-royal-shift" />
        
        {/* Luxury Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="royal-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0L40 20L20 40L0 20Z" fill="none" stroke="url(#royal-gradient)" strokeWidth="0.5" />
              <path d="M20 0L0 20L20 40L40 20Z" fill="none" stroke="url(#royal-gradient)" strokeWidth="0.5" />
            </pattern>
            <defs>
              <linearGradient id="royal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C6A434">
                  <animate attributeName="stop-color" values="#C6A434; #FFD700; #C6A434" dur="8s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#FFD700">
                  <animate attributeName="stop-color" values="#FFD700; #C6A434; #FFD700" dur="8s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#royal-pattern)" />
          </svg>
        </div>
      </div>

      {/* Main Content Container */}
      <motion.div
        className="relative w-full h-full group"
        animate={{
          rotateX: mousePosition.y * 0.1,
          rotateY: mousePosition.x * 0.1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        {/* Premium Frame Design */}
        <div className="absolute inset-4 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] 
          bg-gradient-to-br from-[#14213D]/80 to-[#1E3A8A]/80 backdrop-blur-md
          before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/80 before:via-black/20 before:to-transparent 
          before:opacity-0 before:group-hover:opacity-100 before:transition-all before:duration-500
          after:absolute after:inset-[2px] after:rounded-[2rem] after:border-2 after:border-[#C6A434]/30
          after:bg-gradient-to-br after:from-[#FFD700]/5 after:to-transparent after:transition-all after:duration-500
          group-hover:after:scale-[0.98] group-hover:after:border-[#FFD700]/40">

          {/* Main Image with Royal Effects */}
          <motion.div className="relative w-full h-full overflow-hidden">
            <motion.img
              src={HomeImage}
              alt="Digital Excellence"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              style={{ 
                filter: 'contrast(1.1) brightness(1.1)',
                transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)` 
              }}
            />

            {/* Premium Overlay Effects */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-[conic-gradient(from_var(--mouse-angle),#FFD700,transparent)] opacity-0 group-hover:opacity-10 mix-blend-overlay"
                style={{ 
                  '--mouse-angle': `${Math.atan2(mousePosition.y, mousePosition.x)}rad` 
                }}
              />
            </div>

            {/* Royal Content Overlay */}
            <motion.div
              className="absolute inset-0 flex items-end p-12 opacity-0 group-hover:opacity-100 transition-all duration-500"
              initial={{ y: 20 }}
              whileHover={{ y: 0 }}
            >
              <div className="relative z-10 space-y-4 transform transition-transform duration-500 group-hover:translate-y-0">
                <div className="flex items-center gap-3 mb-2">
                  <FaCrown className="text-[#FFD700] text-2xl" />
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#C6A434]">
                    Digital Excellence
                  </h3>
                </div>
                <p className="text-white/90 text-lg font-light">Crafting Premium Digital Experiences</p>
                <div className="flex gap-4 mt-6">
                  {['Premium', 'Innovative', 'Exclusive'].map((tag, index) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm rounded-full bg-[#FFD700]/10 backdrop-blur-sm
                        border border-[#FFD700]/20 text-[#FFD700] hover:bg-[#FFD700]/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Royal Decorative Elements */}
        <div className="absolute -top-4 -left-4 w-48 h-48 border-t-2 border-l-2 border-[#FFD700]/30 rounded-tl-[3rem] 
          transform -translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute -bottom-4 -right-4 w-48 h-48 border-b-2 border-r-2 border-[#FFD700]/30 rounded-br-[3rem] 
          transform translate-x-2 translate-y-2 group-hover:scale-110 transition-transform duration-500" />
      </motion.div>
    </div>
  );
};

export default CreativeImage; 