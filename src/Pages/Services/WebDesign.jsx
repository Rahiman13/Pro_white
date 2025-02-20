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
  FaRobot,
  FaBrain,
  FaChartLine
} from 'react-icons/fa';
import {
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFramer,
  SiWebflow,
  SiInvision,
  SiAdobe,
  SiTensorflow,
  SiOpenai
} from 'react-icons/si';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';
import WebDesignPNG from '../../assets/png/UIUX_banner.png';


const WebDesign = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const features = [
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance engagement',
      icon: <FaPalette className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d',
      color: 'from-purple-800 to-pink-900',
      benefits: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      title: 'Brand Identity',
      description: 'Cohesive visual language for your digital presence',
      icon: <FaSwatchbook className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698',
      color: 'from-blue-800 to-indigo-900',
      benefits: ['Logo Design', 'Color Theory', 'Typography', 'Brand Guidelines']
    },
    {
      title: 'Interactive Design',
      description: 'Engaging and responsive user interfaces',
      icon: <FaMagic className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490',
      color: 'from-green-800 to-teal-900',
      benefits: ['Motion Design', 'Micro-interactions', 'Animation', 'Interactive Prototypes']
    },
    {
      title: 'Design Systems',
      description: 'Scalable and consistent design frameworks',
      icon: <FaLayerGroup className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e',
      color: 'from-orange-800 to-red-900',
      benefits: ['Component Libraries', 'Style Guides', 'Documentation', 'Design Tokens']
    }
  ];

  const technologies = [
    {
      name: 'Figma',
      icon: <FaFigma className="group-hover:animate-spin-slow" />,
      level: 'Expert',
      description: 'UI/UX Design',
      gradient: 'from-[#F24E1E]/20 to-[#F24E1E]/40',
      color: 'text-[#F24E1E]'
    },
    {
      name: 'Adobe XD',
      icon: <SiAdobexd />,
      level: 'Expert',
      description: 'Prototyping',
      gradient: 'from-[#FF61F6]/20 to-[#FF61F6]/40',
      color: 'text-[#FF61F6]'
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
    },
    {
      name: 'TensorFlow.js',
      icon: <SiTensorflow />,
      level: 'Advanced',
      description: 'AI Integration',
      gradient: 'from-[#FF6F00]/20 to-[#FF6F00]/40',
      color: 'text-[#FF6F00]'
    },
    {
      name: 'OpenAI',
      icon: <SiOpenai />,
      level: 'Advanced',
      description: 'AI Solutions',
      gradient: 'from-[#412991]/20 to-[#412991]/40',
      color: 'text-[#412991]'
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

  const AIEnhancementSection = ({ serviceType }) => {
    const aiFeatures = {
      webDesign: [
        {
          title: 'AI-Powered Design Generation',
          description: 'Create stunning design variations and layouts using advanced AI algorithms',
          icon: <FaRobot className="text-3xl text-purple-500" />,
          tools: ['Midjourney', 'DALL-E 3', 'Adobe Firefly', 'Stable Diffusion']
        },
        {
          title: 'Smart Design Analysis',
          description: 'Optimize designs using AI-powered user behavior analysis and heatmaps',
          icon: <FaBrain className="text-3xl text-blue-500" />,
          tools: ['Heat Mapping', 'A/B Testing', 'Eye Tracking', 'UX Analytics']
        },
        {
          title: 'Predictive Design',
          description: 'Anticipate design trends and user preferences using machine learning',
          icon: <FaChartLine className="text-3xl text-green-500" />,
          tools: ['Style Transfer', 'Color Harmony', 'Layout Optimization', 'Design Trends AI']
        }
      ]
    };

    return (
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-50" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-sm font-medium text-purple-600 inline-block mb-6"
            >
              AI-Powered Design
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#19234d]">
              Enhanced with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d9764a] to-[#d9764a]">
                Artificial Intelligence
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiFeatures[serviceType].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.tools.map(tool => (
                    <span key={tool} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50 backdrop-blur-lg">
        <NetworkBackground />
        
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-[85vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end h-full">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left py-24"
            >
              {/* Enhanced Innovation Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center space-x-2 mb-6 glass-morphism px-8 py-4 rounded-full"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-spin-slow" />
                  <div className="relative bg-white rounded-full p-2">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-r from-blue-500 to-purple-500" />
                    </span>
                  </div>
                </div>
                <span className="text-2xl">🎨</span>
                <span className="font-medium text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #2b5a9e, #d9764a)' }}>
                  Design Excellence
                </span>
              </motion.div>

              {/* Enhanced Heading */}
              <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ color: '#19234d' }}>
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
                  className="px-8 py-4 rounded-full font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-transparent hover:border-blue-500 transition-all duration-300"
                >
                  View Portfolio
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block relative items-center z-20 px-2 h-full"
            >
              <img 
                src={WebDesignPNG} 
                alt="Web Design Services" 
                className="w-full h-[100%] object-cover absolute bottom-0 left-0 object-bottom" 
              />
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
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className={`text-4xl mb-4 ${tech.color}`}>{tech.icon}</div>
                <h3 className="text-white font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Development Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 " />
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-600 inline-block mb-6"
            >
              Our Process
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#19234d' }}>
              Development Journey
              <span className="block mt-2 text-[#d9764a]">From Concept to Launch</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                phase: 'Discovery & Planning',
                icon: '🔍',
                description: 'Requirements analysis, project scope definition, and strategic planning',
                details: ['Market Research', 'User Analysis', 'Technical Planning', 'Project Roadmap']
              },
              {
                phase: 'Design & Prototyping',
                icon: '🎨',
                description: 'Creating intuitive interfaces and seamless user experiences',
                details: ['UI/UX Design', 'Wireframing', 'Interactive Prototypes', 'User Testing']
              },
              {
                phase: 'Development',
                icon: '⚡',
                description: 'Agile development with continuous integration and deployment',
                details: ['Clean Code', 'Best Practices', 'Regular Updates', 'Quality Assurance']
              },
              {
                phase: 'Launch & Support',
                icon: '🚀',
                description: 'Thorough testing, optimization, and ongoing maintenance',
                details: ['Performance Testing', 'Security Audit', 'App Store Launch', '24/7 Support']
              }
            ].map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative h-full p-8 bg-white rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{step.icon}</div>
                    <div className="text-5xl font-bold text-blue-500/20">0{index + 1}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-600">{step.phase}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <div className="">
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* AI Enhancement Section */}
      <AIEnhancementSection serviceType="webDesign" />

    </main>
  );
};

export default WebDesign;
