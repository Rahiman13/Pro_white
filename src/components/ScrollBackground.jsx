import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollBackground = () => {
  const { scrollYProgress } = useScroll();

  // Enhanced transform values for more noticeable effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0.3]);
  const particleScale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const particleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0.3]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Enhanced Base Gradient Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"
        style={{ y: backgroundY }}
      >
        {/* Larger Floating Shapes */}
        <div className="absolute top-1/4 -left-40 w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-[150px] animate-float-slow" />
        <div className="absolute bottom-1/4 -right-40 w-[800px] h-[800px] bg-purple-200/30 rounded-full blur-[150px] animate-float-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-200/30 rounded-full blur-[130px] animate-float-slow delay-500" />
      </motion.div>

      {/* Enhanced Animated Grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: gridY,
          opacity: gridOpacity
        }}
      >
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.07) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }} 
        />
      </motion.div>

      {/* Enhanced Wave Lines */}
      <motion.svg 
        className="absolute inset-0 w-full h-full opacity-30"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ['0%', '45%']),
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.3]),
        }}
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path 
          d="M0,50 Q25,0 50,50 T100,50" 
          fill="none" 
          stroke="url(#line-gradient)" 
          strokeWidth="0.8"
        >
          <animate 
            attributeName="d" 
            dur="8s" 
            repeatCount="indefinite"
            values="M0,50 Q25,0 50,50 T100,50;
                    M0,50 Q25,100 50,50 T100,50;
                    M0,50 Q25,0 50,50 T100,50" 
          />
        </path>
      </motion.svg>

      {/* Enhanced Floating Particles */}
      <motion.div
        className="absolute inset-0"
        style={{
          scale: particleScale,
          opacity: particleOpacity,
        }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollBackground; 