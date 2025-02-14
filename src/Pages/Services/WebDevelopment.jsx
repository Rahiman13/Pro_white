import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import NetworkBackground from '../../components/NetworkBackground';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaDatabase,
  FaAngular,
  FaPhp
} from 'react-icons/fa';
import {
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs
} from 'react-icons/si';
import CountUp from 'react-countup';


// images
import Ecommerce from '../../assets/WebDevelopment/Ecommerce.jpg';
import CustomWebApplications from '../../assets/WebDevelopment/CustomWebApplications.jpg';
import ApiDevelopment from '../../assets/WebDevelopment/ApiDevelopment.jpg';
import ProgressiveWebApps from '../../assets/WebDevelopment/ProgressiveWebApps.jpg';

const WebDevelopment = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      title: 'Custom Web Applications',
      description: 'Tailored solutions built to meet your specific business needs',
      icon: '💻',
      image: CustomWebApplications,
      benefits: ['Scalable Architecture', 'Custom Features', 'Seamless Integration', 'Future-proof Solutions']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Scalable online stores with secure payment integration',
      icon: '🛍️',
      image: Ecommerce,
      benefits: ['Secure Payments', 'Inventory Management', 'Customer Analytics', 'Mobile Commerce']
    },
    {
      title: 'API Development',
      description: 'Robust APIs for seamless system integration',
      icon: '🔄',
      image: ApiDevelopment,
      benefits: ['RESTful Services', 'GraphQL APIs', 'Microservices', 'API Security']
    },
    {
      title: 'Progressive Web Apps',
      description: 'Mobile-first applications with offline capabilities',
      icon: '📱',
      image: ProgressiveWebApps,
      benefits: ['Offline First', 'Push Notifications', 'App-like Experience', 'Cross-platform']
    }
  ];

  const technologies = [
    {
      name: 'React',
      icon: <FaReact className="text-[#61DAFB] group-hover:animate-spin-slow" />,
      level: 'Advanced',
      description: 'Frontend Development',
      gradient: 'from-[#61DAFB]/20 to-[#61DAFB]/40',
      color: 'text-[#61DAFB]'
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs className="text-[#339933]" />,
      level: 'Expert',
      description: 'Backend Development',
      gradient: 'from-[#339933]/20 to-[#339933]/40',
      color: 'text-[#339933]'
    },
    {
      name: 'Python',
      icon: <FaPython className="text-[#3776AB]" />,
      level: 'Advanced',
      description: 'AI & Backend',
      gradient: 'from-[#3776AB]/20 to-[#3776AB]/40',
      color: 'text-[#3776AB]'
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb className="text-[#47A248]" />,
      level: 'Expert',
      description: 'Database',
      gradient: 'from-[#47A248]/20 to-[#47A248]/40',
      color: 'text-[#47A248]'
    },
    {
      name: 'AWS',
      icon: <FaAws className="text-[#232F3E]" />,
      level: 'Advanced',
      description: 'Cloud Infrastructure',
      gradient: 'from-[#232F3E]/20 to-[#232F3E]/40',
      color: 'text-[#232F3E]'
    },
    {
      name: 'Docker',
      icon: <FaDocker className="text-[#2496ED]" />,
      level: 'Advanced',
      description: 'Containerization',
      gradient: 'from-[#2496ED]/20 to-[#2496ED]/40',
      color: 'text-[#2496ED]'
    },
    {
      name: 'Angular',
      icon: <FaAngular className="text-[#DD0031]" />,
      level: 'Advanced',
      description: 'Frontend Framework',
      gradient: 'from-[#DD0031]/20 to-[#DD0031]/40',
      color: 'text-[#DD0031]'
    },
    {
      name: 'PHP',
      icon: <FaPhp className="text-[#777BB4]" />,
      level: 'Intermediate',
      description: 'Backend Scripting',
      gradient: 'from-[#777BB4]/20 to-[#777BB4]/40',
      color: 'text-[#777BB4]'
    }
  ];

  const caseStudies = [
    {
      title: 'E-commerce Platform Redesign',
      client: 'Fashion Retailer',
      impact: '150% increase in mobile sales',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Healthcare Management System',
      client: 'Regional Hospital',
      impact: '40% reduction in wait times',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tech: ['Python', 'React', 'PostgreSQL']
    },
    {
      title: 'Financial Analytics Dashboard',
      client: 'Investment Firm',
      impact: 'Real-time data processing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tech: ['Vue.js', 'Node.js', 'AWS']
    }
  ];

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
                <span className="text-2xl">💻</span>
                <span className="font-medium" style={{ color: '#2b5a9e' }}>Web Development Excellence</span>
              </motion.div>

              {/* Enhanced Heading */}
              <h1 className="text-6xl lg:text-7xl font-bold mb-6" style={{ color: '#19234d' }}>
                Transforming Ideas Into
                <span className="block mt-4">
                  <TypeAnimation
                    sequence={[
                      'Digital Solutions',
                      2000,
                      'Powerful Platforms',
                      2000,
                      'Success Stories',
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
                Building scalable, secure, and innovative web solutions that drive business growth
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full font-semibold bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
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
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <span className="text-3xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#2b5a9e' }}>{feature.title}</h3>
                  <p className="text-sm" style={{ color: '#19234d' }}>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the sections... */}
      {/* Features Grid */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-blue-300/10 via-purple-300/10 to-pink-300/10 rounded-full blur-2xl animate-spin-slower" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-600 inline-block mb-6 backdrop-blur-sm border border-blue-200/20"
            >
              Our Expertise
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#2b5a9e] via-[#19234d] to-[#19234d]">
              Our Web Development
              <span className="block mt-2 text-[#d9764a]">Services & Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into powerful digital experiences with cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl h-[400px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover will-change-transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Initial State - Logo at bottom left */}
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:translate-y-[200%]">
                      <div className="text-4xl text-white">{feature.icon}</div>
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
                        <span className="text-3xl text-white">{feature.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    </div>

                    <div className="space-y-4">
                      <p className="text-gray-200">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit) => (
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

      {/* Technology Stack Showcase */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16 relative z-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="inline-flex items-center space-x-2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6"
            >
              <span className="animate-pulse-fast w-2 h-2 rounded-full bg-blue-400"></span>
              <span className="text-white/80 text-sm font-medium">Development Stack</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">Our Technology</span>
              <span className="block mt-2 text-[#ffa07a]">
                Stack & Tools
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Leveraging cutting-edge technologies to build powerful web solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300`}
              >
                <div className={`text-4xl mb-4 ${tech.color}`}>{tech.icon}</div>
                <h3 className="text-white font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
                <div className="mt-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                    {tech.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Showcase */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2b5a9e]/5 via-purple-500/5 to-[#d9764a]/5" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-600 inline-block mb-6"
            >
              Our Development Process
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#19234d' }}>
              Streamlined Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d9764a] to-[#d9764a]">
                From Concept to Launch
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500" />
                <div className="relative p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#2b5a9e' }}>{step.phase}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  <div className="absolute top-4 right-4 text-sm font-bold text-[#d9764a]">0{index + 1}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Services Grid */}
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
              Web Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d9764a] to-[#d9764a]">
                Solutions We Offer
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Web Applications',
                icon: '💻',
                features: ['Scalable Architecture', 'Real-time Features', 'API Integration']
              },
              {
                title: 'E-commerce Solutions',
                icon: '🛍️',
                features: ['Payment Gateway Integration', 'Inventory Management', 'Shopping Cart']
              },
              {
                title: 'Progressive Web Apps',
                icon: '📱',
                features: ['Offline Functionality', 'Push Notifications', 'App-like Experience']
              },
              {
                title: 'CMS Development',
                icon: '📝',
                features: ['Content Management', 'User Roles', 'Custom Plugins']
              },
              {
                title: 'API Development',
                icon: '🔌',
                features: ['RESTful APIs', 'GraphQL', 'Microservices']
              },
              {
                title: 'Web Optimization',
                icon: '⚡',
                features: ['Performance Tuning', 'SEO Optimization', 'Security Hardening']
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#2b5a9e' }}>{service.title}</h3>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animation
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e]/5 to-[#d9764a]/5" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 500, suffix: '+', label: 'Projects Delivered', icon: '🚀' },
              { value: 95, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
              { value: 50, suffix: '+', label: 'Expert Developers', icon: '👨‍💻' },
              { value: 24, suffix: '/7', label: 'Support Available', icon: '🔧' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="text-4xl mb-4 block">{stat.icon}</span>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] text-transparent bg-clip-text">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                    delay={1}
                  />
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      

     
    </main>
  );
};

export default WebDevelopment; 