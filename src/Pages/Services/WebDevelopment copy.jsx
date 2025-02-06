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
  FaDatabase
} from 'react-icons/fa';
import {
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs
} from 'react-icons/si';

const WebDevelopment = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      title: 'Custom Web Applications',
      description: 'Tailored solutions built to meet your specific business needs',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      benefits: ['Scalable Architecture', 'Custom Features', 'Seamless Integration', 'Future-proof Solutions']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Scalable online stores with secure payment integration',
      icon: '🛍️',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      benefits: ['Secure Payments', 'Inventory Management', 'Customer Analytics', 'Mobile Commerce']
    },
    {
      title: 'API Development',
      description: 'Robust APIs for seamless system integration',
      icon: '🔄',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      benefits: ['RESTful Services', 'GraphQL APIs', 'Microservices', 'API Security']
    },
    {
      title: 'Progressive Web Apps',
      description: 'Mobile-first applications with offline capabilities',
      icon: '📱',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      benefits: ['Offline First', 'Push Notifications', 'App-like Experience', 'Cross-platform']
    }
  ];

  const technologies = [
    {
      name: 'React',
      icon: <FaReact className="text-[#61DAFB] group-hover:animate-spin-slow" />,
      level: 'Advanced',
      description: 'Frontend Development',
      gradient: 'from-[#61DAFB]/20 to-[#61DAFB]/40'
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs className="text-[#339933]" />,
      level: 'Expert',
      description: 'Backend Development',
      gradient: 'from-[#339933]/20 to-[#339933]/40'
    },
    {
      name: 'Python',
      icon: <FaPython className="text-[#3776AB]" />,
      level: 'Advanced',
      description: 'AI & Backend',
      gradient: 'from-[#3776AB]/20 to-[#3776AB]/40'
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb className="text-[#47A248]" />,
      level: 'Expert',
      description: 'Database',
      gradient: 'from-[#47A248]/20 to-[#47A248]/40'
    },
    {
      name: 'AWS',
      icon: <FaAws className="text-[#232F3E]" />,
      level: 'Advanced',
      description: 'Cloud Infrastructure',
      gradient: 'from-[#232F3E]/20 to-[#232F3E]/40'
    },
    {
      name: 'Docker',
      icon: <FaDocker className="text-[#2496ED]" />,
      level: 'Advanced',
      description: 'Containerization',
      gradient: 'from-[#2496ED]/20 to-[#2496ED]/40'
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
                transition={{ delay: index * 0.2 }}
                className="group relative h-[400px] overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                {/* Background Image with Parallax */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Semi-dark overlay that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Base gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </motion.div>

                {/* Content Container that slides up on hover */}
                <div className="absolute inset-x-0 bottom-0 transform translate-y-[calc(100%-100px)] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  {/* Title Section (Always partially visible) */}
                  <div className="p-8 bg-gradient-to-t from-black/95 to-[#1a1a1a]/90 backdrop-blur-sm">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                        <span className="text-3xl">{feature.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    </div>

                    {/* Description and Benefits */}
                    <div className="space-y-6">
                      <p className="text-gray-100 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit) => (
                          <span
                            key={benefit}
                            className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/50" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-600 inline-block mb-6 backdrop-blur-sm border border-blue-200/20"
            >
              Cutting-Edge Stack
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#19234d' }}>
              Our Technology Stack
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d7764a] to-[#d9764a]">
                Powering Your Success
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
                <div className="relative p-6 bg-white/80 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: '#2b5a9e' }}>{tech.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{tech.description}</p>
                  <div className="mt-3">
                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 rounded-full text-gray-600">
                      {tech.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Success Stories Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Creative Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-orange-900/5" />
          <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-gradient-conic from-blue-500/10 via-purple-500/10 to-orange-500/10 blur-3xl animate-spin-slower" />
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-conic from-orange-500/10 via-blue-500/10 to-purple-500/10 blur-3xl animate-spin-slower" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-[#2b5a9e]/10 to-[#d9764a]/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute h-full w-full rounded-full bg-[#2b5a9e] opacity-75" />
                <span className="relative rounded-full h-3 w-3 bg-[#2b5a9e]" />
              </div>
              <span className="text-[#2b5a9e] font-medium">Success Stories</span>
            </motion.div>

            <h2 className="text-6xl font-bold mb-6" style={{ color: '#19234d' }}>
              Transforming Ideas Into
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2b5a9e] to-[#d9764a]">
                Remarkable Success Stories
              </span>
            </h2>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                {/* Floating Effect Card */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500" />

                {/* Main Card */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  {/* Top Pattern */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a]" />

                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                    {/* Client Badge */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                        <span className="text-white text-sm font-medium">{study.client}</span>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
                      >
                        <span className="text-xl">🏆</span>
                      </motion.div>
                    </div>

                    {/* Impact Stats */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold text-white">{study.title}</h3>
                          <div className="flex items-center gap-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              className="h-1 w-20 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] rounded-full"
                            />
                          </div>
                        </div>
                        <p className="text-white/90 mt-2">{study.impact}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-6">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-gradient-to-r from-[#2b5a9e]/10 to-[#d9764a]/10 text-[#2b5a9e] rounded-full font-medium hover:from-[#2b5a9e]/20 hover:to-[#d9764a]/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] text-white rounded-xl font-semibold relative overflow-hidden group"
                    >
                      <span className="relative z-10">Explore Case Study</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#d9764a] to-[#2b5a9e] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Stats Section with Animation */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e]/5 to-[#d9764a]/5" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Delivered', icon: '🚀' },
              { value: '95%', label: 'Client Satisfaction', icon: '⭐' },
              { value: '50+', label: 'Expert Developers', icon: '👨‍💻' },
              { value: '24/7', label: 'Support Available', icon: '🔧' }
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
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebDevelopment; 