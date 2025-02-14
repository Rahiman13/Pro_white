import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projexinoLogo from '../assets/projexino_logo_No_BG.png';
import { useLoader } from '../context/LoaderContext';

const PageLoader = () => {
  const { isLoading } = useLoader();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#19234d]/40 backdrop-blur-sm z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: 0 
            }}
            transition={{
              opacity: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              y: {
                duration: 0.5,
                ease: "easeOut"
              }
            }}
          >
            <img 
              src={projexinoLogo} 
              alt="Projexino Logo" 
              className="w-28 h-28 object-contain mix-blend-luminosity"
            />
          </motion.div>
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-1 w-48 bg-gradient-to-r from-[#d9764a] to-[#de7527] rounded-full overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader; 