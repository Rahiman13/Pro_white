import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import NetworkBackground from '../../components/NetworkBackground';
import {
  FaApple,
  FaAndroid,
  FaReact,
  FaMobile,
  FaCode,
  FaRocket,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaBrain,
  FaChartLine
} from 'react-icons/fa';
import {
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiFirebase,
  SiXcode,
  SiAndroidstudio,
  SiRedux,
  SiGraphql,
  SiTensorflow,
  SiOpenai
} from 'react-icons/si';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';
import AIEnhancementSection from './AIEnhancementSection';

const AppDevelopment = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const features = [
    {
      title: 'iOS Development',
      description: 'Native iOS applications with stunning UIs and smooth performance',
      icon: <FaApple className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      color: 'from-gray-900 to-black',
      benefits: ['Swift & SwiftUI', 'Native Performance', 'App Store Optimization', 'iOS Design Guidelines']
    },
    {
      title: 'Android Development',
      description: 'Feature-rich Android apps that users love',
      icon: <FaAndroid className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      color: 'from-green-800 to-green-900',
      benefits: ['Kotlin First', 'Material Design', 'Play Store Excellence', 'Android Jetpack']
    },
    {
      title: 'Cross-Platform Apps',
      description: 'Build once, deploy everywhere with React Native',
      icon: <FaReact className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      color: 'from-blue-800 to-blue-900',
      benefits: ['Code Reusability', 'Native Performance', 'Rapid Development', 'Cost Effective']
    },
    {
      title: 'Flutter Development',
      description: 'Beautiful native apps for all platforms',
      icon: <SiFlutter className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      color: 'from-sky-800 to-blue-900',
      benefits: ['Material & Cupertino', 'Hot Reload', 'Custom Animations', 'Widget Rich']
    }
  ];

  const technologies = [
    {
      name: 'Swift',
      icon: <SiSwift />,
      level: 'Expert',
      description: 'iOS Native',
      gradient: 'from-[#FA7343]/20 to-[#FA7343]/40',
      color: 'text-[#FA7343]'
    },
    {
      name: 'Kotlin',
      icon: <SiKotlin />,
      level: 'Expert',
      description: 'Android Native',
      gradient: 'from-[#7F52FF]/20 to-[#7F52FF]/40',
      color: 'text-[#7F52FF]'
    },
    {
      name: 'React Native',
      icon: <FaReact className="group-hover:animate-spin-slow" />,
      level: 'Advanced',
      description: 'Cross Platform',
      gradient: 'from-[#61DAFB]/20 to-[#61DAFB]/40',
      color: 'text-[#61DAFB]'
    },
    {
      name: 'Flutter',
      icon: <SiFlutter />,
      level: 'Advanced',
      description: 'Cross Platform',
      gradient: 'from-[#02569B]/20 to-[#02569B]/40',
      color: 'text-[#02569B]'
    },
    {
      name: 'Firebase',
      icon: <SiFirebase />,
      level: 'Expert',
      description: 'Backend Services',
      gradient: 'from-[#FFCA28]/20 to-[#FFCA28]/40',
      color: 'text-[#FFCA28]'
    },
    {
      name: 'Xcode',
      icon: <SiXcode />,
      level: 'Expert',
      description: 'iOS IDE',
      gradient: 'from-[#147EFB]/20 to-[#147EFB]/40',
      color: 'text-[#147EFB]'
    },
    {
      name: 'Android Studio',
      icon: <SiAndroidstudio />,
      level: 'Expert',
      description: 'Android IDE',
      gradient: 'from-[#3DDC84]/20 to-[#3DDC84]/40',
      color: 'text-[#3DDC84]'
    },
    {
      name: 'GraphQL',
      icon: <SiGraphql />,
      level: 'Advanced',
      description: 'API Integration',
      gradient: 'from-[#E535AB]/20 to-[#E535AB]/40',
      color: 'text-[#E535AB]'
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


  const handleStartProject = () => {
    navigate('/contact'); // Navigate to contact/quote page
  };

  const handleViewPortfolio = () => {
    navigate('/portfolio'); // Navigate to portfolio page
  };

  // const AIEnhancementSection = ({ serviceType }) => {
  //   const aiFeatures = {
  //     appDevelopment: [
  //       {
  //         title: 'AI-Powered App Development',
  //         description: 'Accelerate mobile app development with AI assistance',
  //         icon: <FaRobot className="text-3xl text-purple-500" />,
  //         tools: ['GitHub Copilot', 'Flutter AI', 'App Code Generation']
  //       },
  //       {
  //         title: 'Smart User Analytics',
  //         description: 'Analyze user behavior and optimize app performance',
  //         icon: <FaBrain className="text-3xl text-blue-500" />,
  //         tools: ['User Flow Analysis', 'Behavioral Patterns', 'Performance Metrics']
  //       },
  //       {
  //         title: 'Intelligent Testing',
  //         description: 'Automated testing and quality assurance with AI',
  //         icon: <FaChartLine className="text-3xl text-green-500" />,
  //         tools: ['AI Testing Tools', 'Bug Prediction', 'Test Automation']
  //       }
  //     ]
  //   };

  //   return (
  //     <section className="py-20 relative overflow-hidden">
  //       <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-50" />
  //       <div className="max-w-7xl mx-auto px-4 relative z-10">
  //         <motion.div className="text-center mb-16">
  //           <motion.span
  //             initial={{ scale: 0 }}
  //             whileInView={{ scale: 1 }}
  //             className="px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-sm font-medium text-purple-600 inline-block mb-6"
  //           >
  //             AI-Powered Solutions
  //           </motion.span>
  //           <h2 className="text-4xl md:text-5xl font-bold text-[#19234d]">
  //             Enhanced with
  //             <span className="block text-[#d9764a]">
  //               Artificial Intelligence
  //             </span>
  //           </h2>
  //         </motion.div>

  //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  //           {aiFeatures[serviceType].map((feature, index) => (
  //             <motion.div
  //               key={feature.title}
  //               initial={{ opacity: 0, y: 20 }}
  //               whileInView={{ opacity: 1, y: 0 }}
  //               transition={{ delay: index * 0.2 }}
  //               className="relative group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
  //             >
  //               <div className="mb-4">{feature.icon}</div>
  //               <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
  //               <p className="text-gray-600 mb-4">{feature.description}</p>
  //               <div className="flex flex-wrap gap-2">
  //                 {feature.tools.map(tool => (
  //                   <span key={tool} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
  //                     {tool}
  //                   </span>
  //                 ))}
  //               </div>
  //             </motion.div>
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen overflow-hidden">
        <NetworkBackground />

        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_50%)]" />

          {/* Geometric Patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-conic from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-spin-slower" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-conic from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-full blur-3xl animate-spin-reverse" />
          </div>

          {/* Decorative Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M0,50 Q25,45 50,50 T100,50"
                stroke="url(#gradient-line)"
                strokeWidth="0.1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(96,165,250,0.2)" />
                  <stop offset="50%" stopColor="rgba(168,85,247,0.2)" />
                  <stop offset="100%" stopColor="rgba(96,165,250,0.2)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
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
                <span className="text-2xl">📱</span>
                <span className="font-medium" style={{ color: '#2b5a9e' }}>Mobile Development Excellence</span>
              </motion.div>

              {/* Enhanced Heading */}
              <h1 className="text-6xl lg:text-7xl font-bold mb-6" style={{ color: '#19234d' }}>
                Expert Mobile
                <span className="block mt-4">
                  <TypeAnimation
                    sequence={[
                      'Development Services',
                      2000,
                      'Application Solutions',
                      2000,
                      'Technology Consulting',
                      2000,
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                    style={{ color: '#d9764a' }}
                    className="bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] text-transparent bg-clip-text"
                  />
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8" style={{ color: '#19234d' }}>
                Building scalable, secure, and innovative mobile solutions that drive business growth
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
              className="hidden lg:block relative"
            >
              <div className="relative w-full h-[600px] rounded-2xl mt-8 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Professional Web Developer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Development Services Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-600 inline-block mb-6"
            >
              Specialized Services
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#19234d' }}>
              Mobile Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d9764a] to-[#d9764a]">
                Solutions We Offer
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl h-[400px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover will-change-transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Initial State - Logo at bottom left */}
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:translate-y-[200%]">
                      <div className="text-4xl text-white">{service.icon}</div>
                    </div>
                  </div>

                  {/* Hover State - Dark Overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* Content - Hidden by Default */}
                <div 
                  className="absolute inset-x-0 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
                >
                  <div className="p-6 bg-gradient-to-t from-black/95 to-black/80 backdrop-blur-sm">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                        <span className="text-3xl text-white">{service.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>

                    <div className="space-y-4">
                      <p className="text-gray-200">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-gray-200">
                            <span className="w-2 h-2 bg-white rounded-full mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
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
          <motion.div className="text-center mb-16">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-300 inline-block mb-6"
            >
              Our Technology Stack
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Cutting-Edge Mobile
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" style={{ color: '#d9764a' }}>
                Development Technologies
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* Industries We Serve Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full text-sm font-medium text-white inline-block mb-6"
            >
              Industries We Serve
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Transforming Industries with
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ffa07a] to-[#ff6b6b]">
                Mobile Innovation
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Healthcare',
                icon: '⚕️',
                color: '#fff',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
                description: 'Revolutionary healthcare mobile solutions',
                features: ['Patient Apps', 'Medical Records', 'Telemedicine', 'Health Monitoring']
              },
              {
                title: 'E-Commerce',
                icon: '🛍️',
                color: '#fff',
                image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f',
                description: 'Cutting-edge mobile shopping experiences',
                features: ['Mobile Commerce', 'Inventory Management', 'Payment Systems', 'Order Tracking']
              },
              {
                title: 'Education',
                icon: '🎓',
                color: '#fff',
                image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
                description: 'Next-gen mobile learning platforms',
                features: ['E-Learning Apps', 'Student Portals', 'Virtual Classrooms', 'Progress Tracking']
              }
            ].map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-[500px] rounded-2xl overflow-hidden"
              >
                {/* Floating Icon */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 z-20">
                  <div className="relative w-full h-full">
                    <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-all duration-300`} />
                    <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl shadow-2xl border border-white/20">
                      {industry.icon}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative h-full transform group-hover:scale-105 transition-all duration-500">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-60`} />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                      <h3 className="text-2xl font-bold text-white mb-3">{industry.title}</h3>
                      <p className="text-white/90 mb-4">{industry.description}</p>
                      
                      {/* Features */}
                      <ul className="space-y-3">
                        {industry.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color}`} />
                            <span className="text-white/90">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AIEnhancementSection serviceType="appDevelopment" />
    </main>
  );
};

export default AppDevelopment; 