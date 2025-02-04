import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/projexino_logo_No_BG.png'; // Adjust the path to your logo


const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="w-32 h-32 flex items-center justify-center"
          >
            <img src={Logo} alt="Logo" className="w-full h-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader; 