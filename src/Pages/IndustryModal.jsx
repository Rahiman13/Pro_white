import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaLightbulb, FaRocket, FaCogs } from 'react-icons/fa';

const getIndustrySummary = (industry) => {
  const summaries = {
    'Healthcare': {
      overview: "In the healthcare sector, we specialize in developing cutting-edge digital solutions that enhance patient care and streamline medical operations. Our HIPAA-compliant systems ensure the highest standards of data security and privacy while enabling seamless integration with existing healthcare infrastructure.",
      approach: "We take a patient-centric approach, creating intuitive interfaces for healthcare providers and patients alike. Our solutions incorporate real-time data analytics and AI-powered diagnostics to support informed decision-making and improve treatment outcomes.",
      impact: "Through our healthcare solutions, medical facilities have reported significant improvements in patient engagement, reduced administrative overhead, and enhanced coordination between different departments and healthcare providers."
    },
    'E-commerce': {
      overview: "Our e-commerce solutions are designed to create immersive shopping experiences that drive conversion rates and customer loyalty. We integrate advanced payment systems and inventory management tools to ensure smooth operations.",
      approach: "We focus on creating scalable platforms that can handle high traffic volumes and peak shopping seasons. Our solutions incorporate AI-driven recommendations and personalized shopping experiences to enhance customer engagement.",
      impact: "Our e-commerce implementations have helped businesses achieve substantial growth in online sales, with improved customer retention rates and streamlined operational efficiency."
    },
    'Education': {
      overview: "In the education sector, we develop comprehensive learning management systems and virtual classroom solutions that transform traditional education delivery. Our platforms support both synchronous and asynchronous learning environments.",
      approach: "We emphasize creating engaging, interactive learning experiences that cater to different learning styles. Our solutions include advanced analytics to track student progress and adaptive learning pathways.",
      impact: "Educational institutions using our solutions have reported increased student engagement, improved learning outcomes, and more efficient administration of educational programs."
    },
    'Finance': {
      overview: "For the financial sector, we develop secure, compliant solutions that modernize banking and financial services. Our systems incorporate advanced encryption and security measures to protect sensitive financial data.",
      approach: "We prioritize creating reliable, high-performance systems that can handle complex financial transactions while maintaining regulatory compliance. Our solutions include real-time analytics and risk assessment tools.",
      impact: "Financial institutions leveraging our solutions have experienced enhanced operational efficiency, improved customer satisfaction, and stronger security measures against financial fraud."
    }
  };

  return summaries[industry.title] || {
    overview: "We provide specialized digital solutions tailored to meet the unique challenges and opportunities in your industry.",
    approach: "Our approach combines industry best practices with innovative technology to deliver scalable, efficient solutions.",
    impact: "Our implementations have helped organizations achieve significant improvements in operational efficiency and market competitiveness."
  };
};

const IndustryModal = ({ isOpen, onClose, industry }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!industry) return null;
  const summary = getIndustrySummary(industry);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Decorative Top Pattern */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm text-gray-600 hover:bg-gray-100 transition-colors shadow-lg"
            >
              <FaTimes className="w-6 h-6" />
            </motion.button>

            {/* Hero Section */}
            <div className="relative h-72 flex-shrink-0">
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </motion.div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-5xl shadow-lg border border-white/20">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-2">{industry.title}</h3>
                    <div className="flex gap-2">
                      {industry.priority === 'high' && (
                        <span className="px-3 py-1 bg-green-500/20 backdrop-blur-md text-green-400 rounded-full text-sm">
                          High Priority
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Content Section */}
            <div className="overflow-y-auto flex-grow custom-scrollbar">
              <div className="p-8">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="p-6 rounded-2xl bg-blue-50 border border-blue-100"
                  >
                    <FaLightbulb className="text-blue-500 text-2xl mb-4" />
                    <p className="text-gray-700">{summary.overview}</p>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="p-6 rounded-2xl bg-purple-50 border border-purple-100"
                  >
                    <FaCogs className="text-purple-500 text-2xl mb-4" />
                    <p className="text-gray-700">{summary.approach}</p>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="p-6 rounded-2xl bg-pink-50 border border-pink-100"
                  >
                    <FaRocket className="text-pink-500 text-2xl mb-4" />
                    <p className="text-gray-700">{summary.impact}</p>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    {/* Development Needs */}
                    {industry.developmentNeeds && (
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Development Solutions</h4>
                        <div className="space-y-3">
                          {industry.developmentNeeds.map(need => (
                            <div key={need} className="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg">
                              <span className="text-blue-600">⚡</span>
                              <span className="text-gray-700">{need}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Technology Stack</h4>
                      <div className="flex flex-wrap gap-3">
                        {industry.techStack.map(tech => (
                          <span key={tech} className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    {/* Features */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                      <div className="space-y-3">
                        {industry.features.map(feature => (
                          <div key={feature} className="flex items-start space-x-3">
                            <span className="text-green-500 mt-1">✔</span>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IndustryModal;
