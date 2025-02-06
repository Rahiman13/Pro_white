import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import NetworkBackground from '../../components/NetworkBackground';
import {
  FaFigma,
  FaSketch,
  FaPalette,
  FaPencilRuler,
  FaLayerGroup,
  FaSwatchbook,
  FaMagic,
} from 'react-icons/fa';
import {
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFramer,
  SiWebflow,
  
  SiInvision,
  SiAdobe
} from 'react-icons/si';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';

const WebDesign = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const services = [
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance engagement',
      icon: <FaPalette className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      benefits: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      title: 'Responsive Design',
      description: 'Websites that work seamlessly across all devices',
      icon: <FaLayerGroup className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      benefits: ['Mobile First', 'Cross-platform', 'Fluid Layouts', 'Adaptive Images']
    },
    {
      title: 'Brand Identity',
      description: 'Cohesive visual language for your digital presence',
      icon: <FaSwatchbook className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      benefits: ['Logo Design', 'Color Theory', 'Typography', 'Brand Guidelines']
    },
    {
      title: 'Prototypingcxsdvdf',
      description: 'Interactive mockups for testing and validation',
      icon: <FaMagic className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      benefits: ['Interactive Models', 'User Flow', 'Animation', 'Feedback Loop']
    }
  ];

  const technologies = [
    {
      name: 'Figma',
      icon: <FaFigma />,
      level: 'Expert',
      description: 'UI/UX Design',
      gradient: 'from-[#F24E1E]/20 to-[#FF7262]/40',
      color: 'text-[#F24E1E]',
      benefits: ['Component Libraries', 'Prototyping', 'Collaboration']
    },
    {
      name: 'Adobe XD',
      icon: <SiAdobexd />,
      level: 'Expert',
      description: 'Prototyping',
      gradient: 'from-[#FF61F6]/20 to-[#FF61F6]/40',
      color: 'text-[#FF61F6]',
      benefits: ['Wireframing', 'Interactive Prototypes', 'Design Systems']
    },
    {
      name: 'Photoshop',
      icon: <SiAdobephotoshop />,
      level: 'Advanced',
      description: 'Image Editing',
      gradient: 'from-[#31A8FF]/20 to-[#31A8FF]/40',
      color: 'text-[#31A8FF]'
    },
    {
      name: 'Illustrator',
      icon: <SiAdobeillustrator />,
      level: 'Advanced',
      description: 'Vector Graphics',
      gradient: 'from-[#FF9A00]/20 to-[#FF9A00]/40',
      color: 'text-[#FF9A00]'
    },
    {
      name: 'Framer',
      icon: <SiFramer />,
      level: 'Advanced',
      description: 'Interactive Design',
      gradient: 'from-[#0055FF]/20 to-[#0055FF]/40',
      color: 'text-[#0055FF]'
    },
    {
      name: 'Webflow',
      icon: <SiWebflow />,
      level: 'Expert',
      description: 'Visual Development',
      gradient: 'from-[#4353FF]/20 to-[#4353FF]/40',
      color: 'text-[#4353FF]'
    },
    {
      name: 'InVision',
      icon: <SiInvision />,
      level: 'Advanced',
      description: 'Prototyping',
      gradient: 'from-[#FF3366]/20 to-[#FF3366]/40',
      color: 'text-[#FF3366]'
    },
    {
      name: 'Adobe CC',
      icon: <SiAdobe />,
      level: 'Expert',
      description: 'Creative Suite',
      gradient: 'from-[#FF0000]/20 to-[#FF0000]/40',
      color: 'text-[#FF0000]'
    }
  ];

  const caseStudies = [
    {
      title: 'E-commerce Redesign',
      client: 'Fashion Brand',
      impact: '200% increase in conversions',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tools: ['Figma', 'Adobe XD', 'Photoshop']
    },
    {
      title: 'Mobile App UI/UX',
      client: 'Fintech Startup',
      impact: '95% user satisfaction',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tools: ['Sketch', 'Principle', 'InVision']
    },
    {
      title: 'Brand Identity System',
      client: 'Tech Company',
      impact: 'Brand recognition +150%',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tools: ['Illustrator', 'Photoshop', 'Figma']
    }
  ];

  const handleStartProject = () => {
    navigate('/contact'); // Navigate to contact/quote page
  };

  const handleViewPortfolio = () => {
    navigate('/portfolio'); // Navigate to portfolio page
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen overflow-hidden">
        <NetworkBackground />
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-conic from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-spin-slower" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-conic from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-full blur-3xl animate-spin-reverse" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left pt-20"
            >
              {/* Innovation Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center space-x-3 mb-8 glass-morphism px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-conic from-blue-400 via-purple-400 to-pink-400 rounded-full animate-spin-slow group-hover:animate-spin" />
                  <div className="relative bg-white rounded-full p-2">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-r from-blue-500 to-purple-500" />
                    </span>
                  </div>
                </div>
                <span className="text-2xl">🎨</span>
                <span className="font-medium" style={{ color: '#2b5a9e' }}>Design Excellence</span>
              </motion.div>

              {/* Enhanced Heading */}
              <h1 className="text-6xl lg:text-7xl font-bold mb-6" style={{ color: '#19234d' }}>
                Crafting Beautiful
                <span className="block mt-4">
                  <TypeAnimation
                    sequence={[
                      'User Experiences',
                      2000,
                      'Digital Interfaces',
                      2000,
                      'Brand Stories',
                      2000,
                      'Visual Identities',
                      2000
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                    style={{ color: '#d9764a' }}
                    className="bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] text-transparent bg-clip-text"
                  />
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8" style={{ color: '#19234d' }}>
                Transform your vision into captivating designs that inspire and engage
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStartProject}
                  className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleViewPortfolio}
                  className="px-8 py-4 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-semibold text-lg hover:border-blue-500 rounded-full transition-all duration-300"
                >
                  View Portfolio
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Features Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {services.slice(0, 4).map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <span className="text-3xl mb-4 block">{service.icon}</span>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#2b5a9e' }}>{service.title}</h3>
                  <p className="text-sm" style={{ color: '#19234d' }}>{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="inline-flex items-center space-x-2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6"
            >
              <span className="animate-pulse-fast w-2 h-2 rounded-full bg-blue-400"></span>
              <span className="text-white/80 text-sm font-medium">Innovation Hub</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Technology Stack
            </h2>
            <p className="text-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-semibold" style={{ color: '#d9764a' }}>
              Powering Your Digital Success
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                {/* Glass Card */}
                <div className="relative h-full bg-white/10 backdrop-blur-lg rounded-2xl p-6 overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-3xl">
                        {tech.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                    <p className="text-white/70 text-sm mb-4">{tech.description}</p>
                    
                    {/* Level Badge */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                      {tech.level}
                    </span>
                    
                    {/* Benefits Tags */}
                    {tech.benefits && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {tech.benefits.map((benefit) => (
                          <span
                            key={benefit}
                            className="px-2 py-1 text-xs rounded-md bg-white/5 text-white/80 border border-white/10"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* Copy and adapt the Process Section from AppDevelopment.jsx */}
      {/* Reference lines 380-428 */}

      {/* Development Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-600 inline-block mb-6"
            >
              Development Process
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#19234d' }}>
              How We Build
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500" style={{ color: '#d9764a' }}>
                Your Mobile App
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { phase: 'Discovery', icon: '🔍', description: 'Requirements gathering and project planning' },
              { phase: 'Design', icon: '🎨', description: 'UI/UX design and prototyping' },
              { phase: 'Development', icon: '⚡', description: 'Agile development with regular updates' },
              { phase: 'Deployment', icon: '🚀', description: 'Testing, optimization, and launch' }
            ].map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500" />
                <div className="relative p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-blue-600">{step.phase}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="absolute top-4 right-4 text-sm font-bold text-purple-500">0{index + 1}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebDesign;
