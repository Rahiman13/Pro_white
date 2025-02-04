import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const buttons = [
    {
      icon: <FaPhone />,
      label: 'Call Us',
      action: () => window.location.href = 'tel:+919601843090',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      action: () => navigate('/contact'),
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      action: () => window.location.href = 'https://wa.me/919601843090',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 right-0 space-y-4"
          >
            {buttons.map((button, index) => (
              <motion.button
                key={button.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                onClick={button.action}
                className={`flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r ${button.color} text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
              >
                <span className="text-lg">{button.icon}</span>
                <span className="text-sm font-medium whitespace-nowrap">{button.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaPhone />}
        </motion.div>
        
        {/* Ripple Effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full bg-white opacity-50"
        />
      </motion.button>
    </div>
  );
};

export default FloatingActionButton; 