import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import { FaRocket, FaLightbulb, FaCode } from 'react-icons/fa';
import '../styles/animations.css';
import NetworkBackground from '../components/NetworkBackground';
import CreativeImage from '../components/CreativeImage';

const Home = () => {
  const features = [
    {
      title: 'Custom Development',
      description: 'Tailored solutions built specifically for your business needs',
      icon: <FaCode className="text-2xl" />
    },
    {
      title: 'Innovation First',
      description: 'Cutting-edge technologies and modern development practices',
      icon: <FaLightbulb className="text-2xl" />
    },
    {
      title: 'Rapid Deployment',
      description: 'Quick and efficient delivery without compromising quality',
      icon: <FaRocket className="text-2xl" />
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <NetworkBackground />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
          
          {/* Enhanced Floating Orbs */}
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[120px] animate-float-slow delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-[100px] animate-float-slow delay-500" />
          
          {/* Animated Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="url(#line-gradient)" strokeWidth="0.5">
              <animate attributeName="d" dur="10s" repeatCount="indefinite"
                values="M0,50 Q25,0 50,50 T100,50;
                        M0,50 Q25,100 50,50 T100,50;
                        M0,50 Q25,0 50,50 T100,50" />
            </path>
          </svg>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Animated particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                transition={{
                  duration: Math.random() * 10 + 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left pt-20"
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
                  Innovating the Future
                </span>
              </motion.div>

              {/* Enhanced Main Heading */}
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                <TypeAnimation
                  sequence={[
                    'We Create',
                    1000,
                    'We Innovate',
                    1000,
                    'We Transform',
                    1000,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text bg-size-200 animate-gradient"
                />
                <motion.span 
                  className="block mt-4 text-5xl lg:text-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-transparent bg-clip-text bg-size-200 animate-gradient"
                >
                  Digital Excellence
                </motion.span>
              </h1>

              {/* Enhanced Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Transform your digital presence with cutting-edge solutions that drive growth and innovation.
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-wrap gap-6">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-semibold text-lg hover:border-blue-500 rounded-full transition-all duration-300"
                >
                  Watch Demo
                </motion.button>
              </div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 grid grid-cols-3 gap-8"
              >
                {[
                  { value: '500+', label: 'Projects' },
                  { value: '95%', label: 'Success Rate' },
                  { value: '50+', label: 'Countries' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Enhanced Creative Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block relative z-20"
            >
              <CreativeImage />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">We deliver excellence in every project</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-gradient-to-b from-white to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 500, suffix: '+', label: 'Projects Completed' },
              { number: 100, suffix: '%', label: 'Client Satisfaction' },
              { number: 50, suffix: '+', label: 'Team Experts' },
              { number: 10, suffix: '+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  <CountUp end={stat.number} duration={2.5} />
                  {stat.suffix}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-xl"></div>
            <div className="relative p-12">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Development Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: '01', title: 'Discovery', desc: 'Understanding your needs' },
                  { step: '02', title: 'Planning', desc: 'Strategic roadmap' },
                  { step: '03', title: 'Development', desc: 'Agile implementation' },
                  { step: '04', title: 'Launch', desc: 'Deploy & optimize' }
                ].map((phase, index) => (
                  <motion.div
                    key={phase.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center text-white"
                  >
                    <div className="text-4xl font-bold mb-4 bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto backdrop-blur-lg">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                    <p className="text-white/80">{phase.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive digital solutions for your business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                icon: '��'
              },
              {
                title: 'Mobile Development',
                description: 'Native and cross-platform mobile applications',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                icon: '📱'
              },
              {
                title: 'UI/UX Design',
                description: 'User-centered design solutions that enhance engagement',
                image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                icon: '🎨'
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable and secure cloud infrastructure services',
                image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                icon: '☁️'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-[300px] overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-4xl mb-4 block">{service.icon}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-200">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Showcasing our best work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                category: 'Web Development',
                description: 'Modern e-commerce solution with advanced features',
                image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                tech: ['React', 'Node.js', 'MongoDB']
              },
              {
                title: 'FinTech Dashboard',
                category: 'UI/UX Design',
                description: 'Intuitive financial management interface',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                tech: ['Vue.js', 'D3.js', 'Firebase']
              },
              {
                title: 'Healthcare App',
                category: 'Mobile Development',
                description: 'Patient management system with real-time updates',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                tech: ['React Native', 'GraphQL', 'AWS']
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-blue-400 font-medium">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our clients say about us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'CEO, Tech Corp',
                content: 'Working with this team was an absolute pleasure. They delivered beyond our expectations.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
              },
              {
                name: 'Sarah Johnson',
                role: 'Marketing Director',
                content: 'Their innovative approach and attention to detail made our project a huge success.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
              },
              {
                name: 'Michael Brown',
                role: 'Startup Founder',
                content: "The team's expertise and professionalism helped us achieve our goals faster.",
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
