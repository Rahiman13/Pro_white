import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import NetworkBackground from '../components/NetworkBackground';
import { FaCheckCircle, FaAward, FaRocket } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Web Development', 'App Development', 'Web Design', 'Digital Marketing'];

  const projects = [
    {
      title: 'Real Estate Video Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Video marketing platform for real estate professionals (**BombBomb**)',
      tech: ['Backend Development', 'UI Implementation', 'API Integration'],
      link: 'https://bombbomb.com/'
    },
    {
      title: 'Real Estate Management',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Property management and listing platform (**ExposioApp**)',
      tech: ['Backend Architecture', 'Database Design', 'API Development'],
      link: 'https://exposioapp.com/'
    },
    {
      title: 'Online Education Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Educational platform for online learning (**Vidyakul**)',
      tech: ['Business Analysis', 'Backend Development', 'System Architecture'],
      link: 'https://vidyakul.com/'
    },
    {
      title: 'Medical Application',
      category: 'App Development',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Healthcare management application (**IFEEILNCOLOR**)',
      tech: ['Backend Development', 'Mobile App UI', 'Healthcare Integration'],
      link: '#'
    },
    {
      title: 'Manufacturing Portal',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Manufacturing management system (**Triveni**)',
      tech: ['Full Stack Development', 'Process Automation', 'Reporting'],
      link: 'https://thriveni.projexino.com/'
    },
    {
      title: 'Printing Business Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Print business management system (**PG Printing**)',
      tech: ['Web Development', 'Order Management', 'Customer Portal'],
      link: 'https://pgprinting.projexino.com/'
    },
    {
      title: 'Car Sales Application',
      category: 'App Development',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Mobile app for car sales and management (**CTN Car**)',
      tech: ['Backend Development', 'Database Design', 'API Integration'],
      link: 'https://play.google.com/store/apps/details?id=br.com.ctncardoso.ctncar'
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('.projects-grid');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50 backdrop-blur-lg">
        <NetworkBackground />

        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-conic from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-spin-slower" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-conic from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-full blur-3xl animate-spin-reverse" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-left"
            >
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
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: 'linear-gradient(to right, #2b5a9e, #d9764a)' }}>
                  Welcome to Our Portfolio
                </span>
              </motion.div>

              <h1 className="text-6xl font-bold mb-6">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] blur-2xl opacity-20" />
                  <TypeAnimation
                    sequence={[
                      'Transforming Ideas',
                      2000,
                      'Building Solutions',
                      2000,
                      'Creating Excellence',
                      2000,
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                    className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#d9764a] to-[#d9764a]"
                  />
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Explore our collection of innovative digital solutions that have helped businesses transform and grow.
              </p>

              <div className="flex flex-wrap gap-6 mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-[#2b5a9e]"
                >
                  <FaCheckCircle className="text-2xl" />
                  <span className="font-medium">100% Client Satisfaction</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-[#d9764a]"
                >
                  <FaAward className="text-2xl" />
                  <span className="font-medium">Award-winning Projects</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-[#19234d]"
                >
                  <FaRocket className="text-2xl" />
                  <span className="font-medium">Innovative Solutions</span>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  { number: 99, suffix: '+', label: 'Projects Completed' },
                  { number: 110, suffix: '+', label: 'Happy Clients' },
                  { number: 30, suffix: '+', label: 'Years Experience' },
                  { number: 5, suffix: '+', label: 'Team Members' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300"
                  >
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-[#2b5a9e] to-[#2b5a9e] text-transparent bg-clip-text">
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        suffix={stat.suffix}
                        enableScrollSpy={false}
                        delay={2}
                      />
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToProjects}
                  className="px-8 py-4 bg-gradient-to-r from-[#2b5a9e] to-[#2b5a9e] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  View All Projects
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-semibold text-lg hover:border-blue-500 rounded-full transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
                {/* Main Hero Image */}
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                    alt="Portfolio Hero"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#2b5a9e]/30 via-[#d9764a]/20 to-transparent mix-blend-overlay" />
                </div>

                {/* Floating Project Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-20 -left-10 w-64 bg-white/80 backdrop-blur-lg rounded-xl p-4 shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                    alt="Real Estate Platform"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h4 className="text-lg font-semibold text-gray-900">Real Estate Platform</h4>
                  <p className="text-sm text-gray-600">Video marketing solution</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-10 -right-10 w-64 bg-white/80 backdrop-blur-lg rounded-xl p-4 shadow-lg"
                >
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
                    alt="Healthcare App"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h4 className="text-lg font-semibold text-gray-900">Healthcare App</h4>
                  <p className="text-sm text-gray-600">Medical management solution</p>
                </motion.div>

                {/* Client Testimonials Section */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-4">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                        alt="Client 1"
                        className="w-12 h-12 rounded-full border-2 border-white"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                        alt="Client 2"
                        className="w-12 h-12 rounded-full border-2 border-white"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                        alt="Client 3"
                        className="w-12 h-12 rounded-full border-2 border-white"
                      />
                    </div>
                    <div className="text-white">
                      <p className="font-medium">Trusted by</p>
                      <p className="text-sm opacity-80">Global Industry Leaders</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4 py-12">
        {/* Category Filters */}
        <div className="flex justify-center mb-8 sm:mb-12 gap-2 sm:gap-4 flex-wrap px-2 sm:px-0">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-300
                ${activeCategory === category
                  ? 'bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 projects-grid"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="group w-full"
              >
                {/* Windows-style Folder Container */}
                <div className="relative w-full h-auto min-h-[455px] sm:h-[450px] bg-white rounded-lg shadow-lg hover:shadow-xl 
                  transition-all duration-300 border border-gray-200">
                  {/* Folder Header - Windows Style */}
                  <div className="bg-[#f0f0f0] px-2 sm:px-4 py-2 rounded-t-lg border-b border-gray-300 
                    flex items-center justify-between">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
                      </svg>
                      <span className="text-xs sm:text-sm font-medium text-gray-700">{project.category}</span>
                    </div>
                    <div className="flex gap-1 sm:gap-2">
                      <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300 hover:bg-gray-400" />
                      <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300 hover:bg-gray-400" />
                      <button className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400 hover:bg-red-500" />
                    </div>
                  </div>

                  {/* Folder Content */}
                  <div className="p-2 sm:p-4">
                    {/* Project Image */}
                    <div className="w-full h-32 sm:h-48 mb-2 sm:mb-4 rounded overflow-hidden bg-gray-100 border border-gray-200">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 
                          group-hover:scale-105"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-1">{project.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                        {project.description.split('**').map((part, index) => 
                          index % 2 === 0 ? part : <strong key={index}>{part}</strong>
                        )}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {project.tech.map(tech => (
                          <span
                            key={tech}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Link */}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 sm:gap-2 text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium mt-2"
                        whileHover={{ x: 5 }}
                      >
                        Open Folder
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Process Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#2b5a9e]/10 to-[#d9764a]/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#d9764a]/10 to-[#2b5a9e]/10 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 text-sm font-semibold mb-4">
                How We Work
              </span>
              <h2 className="text-5xl font-bold text-[#19234d] mb-6">
                Our Development{' '}
                <span className="relative">
                  {/* <span className="absolute -inset-1 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] blur-lg opacity-20" /> */}
                  <span className="relative bg-gradient-to-r from-[#d9764a] to-[#d9764a] text-transparent bg-clip-text">
                    Process
                  </span>
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to turning your ideas into reality
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2b5a9e]/20 via-[#d9764a]/20 to-[#2b5a9e]/20" />

              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'Understanding your needs and objectives',
                  icon: '🔍',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  step: '02',
                  title: 'Planning',
                  description: 'Creating detailed roadmap and architecture',
                  icon: '📋',
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  step: '03',
                  title: 'Development',
                  description: 'Building with cutting-edge technologies',
                  icon: '⚡',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  step: '04',
                  title: 'Delivery',
                  description: 'Testing and deploying your solution',
                  icon: '🚀',
                  color: 'from-green-500 to-emerald-600'
                }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="relative p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                    {/* Step Number with Gradient Background */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {process.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="text-4xl mb-4 mt-4">{process.icon}</div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-[#19234d] mb-3 group-hover:text-[#2b5a9e] transition-colors">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {process.description}
                    </p>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Journey Timeline */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute w-full h-full bg-[linear-gradient(45deg,rgba(43,90,158,0.03),rgba(217,118,74,0.03))]" />
            <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-gradient-radial from-blue-200/10 to-transparent blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 text-sm font-semibold mb-4">
                YOUR JOURNEY WITH US
              </span>
              <h2 className="text-5xl font-bold text-[#19234d] mb-6">
                Client Journey{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9764a] to-[#d9764a]">
                  Timeline
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience our systematic approach to turning your vision into reality
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#2b5a9e] to-[#d9764a]" />
              {[
                {
                  title: 'Initial Consultation',
                  description: 'We discuss your vision, goals, and requirements',
                  icon: '🤝',
                  position: 'left'
                },
                {
                  title: 'Strategy & Planning',
                  description: 'Developing detailed roadmap and technical architecture',
                  icon: '🎯',
                  position: 'right'
                },
                {
                  title: 'Design & Development',
                  description: 'Bringing your vision to life with cutting-edge technology',
                  icon: '⚡',
                  position: 'left'
                },
                {
                  title: 'Testing & Launch',
                  description: 'Ensuring perfect functionality and user experience',
                  icon: '🚀',
                  position: 'right'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex ${item.position === 'left' ? 'justify-end md:pr-32' : 'justify-start md:pl-32'} mb-16`}
                >
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg w-full md:w-1/2">
                    <div className="absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div className={`ml-16`}>
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#2b5a9e' }}>{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="py-32 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-[#2b5a9e]/20 to-[#d9764a]/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#d9764a]/20 to-[#2b5a9e]/20 rounded-full blur-[100px] animate-pulse-slow" />
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative"
            >
              {/* Glass Card Container */}
              <div className="relative bg-white/30 backdrop-blur-lg rounded-[2.5rem] p-12 border border-white/20 shadow-xl">
                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] rounded-full animate-bounce-slow" />
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-r from-[#d9764a] to-[#2b5a9e] rounded-full animate-bounce-slow delay-300" />

                <div className="text-center relative z-10">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                  >
                    <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#2b5a9e]/10 to-[#d9764a]/10 text-[#2b5a9e] text-sm font-semibold mb-6">
                      🚀 Let's Build Something Amazing
                    </span>

                    <h2 className="text-5xl font-bold text-[#19234d] mb-6">
                      Ready to Transform Your
                      <span className="relative ml-3">
                        <span className="relative inline-block">
                          <span className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] blur-lg opacity-20" />
                          <span className="relative bg-gradient-to-r from-[#d9764a] to-[#d9764a] text-transparent bg-clip-text">
                            Ideas into Reality?
                          </span>
                        </span>
                      </span>
                    </h2>

                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                      Join hundreds of satisfied clients who have turned their visions into successful digital solutions
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = '/contact'}
                        className="px-8 py-4 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#d9764a] to-[#2b5a9e] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative flex items-center gap-2">
                          Start Your Project
                          <FaRocket className="inline-block transition-transform group-hover:translate-x-1" />
                        </span>
                      </motion.button>

                      {/* <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border-2 border-transparent bg-white/80 backdrop-blur-sm text-[#2b5a9e] rounded-full font-medium hover:border-[#2b5a9e]/20 transition-all duration-300"
                      >
                        Schedule Consultation
                      </motion.button> */}
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 pt-12 border-t border-gray-200/30">
                      <div className="flex justify-center items-center gap-8 flex-wrap">
                        <div className="flex items-center gap-2">
                          <img src="/client-logos/client1.png" alt="Client" className="w-8 h-8 rounded-full" />
                          <span className="text-gray-600">Trusted by Industry Leaders</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCheckCircle className="text-green-500 text-xl" />
                          <span className="text-gray-600">100% Satisfaction Guaranteed</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaAward className="text-[#d9764a] text-xl" />
                          <span className="text-gray-600">Award-winning Team</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Portfolio;
