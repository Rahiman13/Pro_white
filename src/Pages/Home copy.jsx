import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Stars, Text3D } from '@react-three/drei';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import { FaRocket, FaLightbulb, FaCode, FaMobile, FaCheck } from 'react-icons/fa';
import '../styles/animations.css';

const Home = () => {
  const parallaxRef = useRef();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

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
    <Parallax pages={6} ref={parallaxRef}>
      {/* Hero Section with Light Theme */}
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-xl animate-pulse delay-1000" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
              
            >
                
              {/* Innovation Badge */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center space-x-2 mb-6 glass-effect px-6 py-3 rounded-full"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-blue-900 font-medium">Innovating the Future</span>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8">
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
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
                />
                <motion.span 
                  className="block mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-transparent bg-clip-text bg-size-200 animate-gradient"
                >
                  Digital Excellence
                </motion.span>
              </h1>

              {/* Enhanced CTA Section */}
              <div className="mt-12 flex flex-wrap justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-500 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
                >
                  Watch Demo
                </motion.button>
              </div>

              {/* Client Logos */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-20 pt-10 border-t border-gray-200"
              >
                <p className="text-gray-500 mb-8">Trusted by leading companies worldwide</p>
                <div className="flex justify-center items-center gap-12 flex-wrap">
                  {/* Add your client logos here */}
                  <img src="/logos/client1.png" alt="Client 1" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
                  <img src="/logos/client2.png" alt="Client 2" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
                  <img src="/logos/client3.png" alt="Client 3" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ParallaxLayer>

      {/* Features Section */}
      <ParallaxLayer offset={1} speed={0.8}>
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
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
        </div>
      </ParallaxLayer>

      {/* Statistics Section */}
      <ParallaxLayer offset={2} speed={0.6}>
        <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
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
        </div>
      </ParallaxLayer>

      {/* Process Section with Glassmorphism */}
      <ParallaxLayer offset={2.5} speed={0.7}>
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4">
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
        </div>
      </ParallaxLayer>

      {/* Services Section */}
      <ParallaxLayer offset={3.5} speed={0.7}>
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">Comprehensive digital solutions for your business</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Web Development',
                  description: 'Custom websites and web applications built with modern technologies',
                  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                  icon: '💻'
                },
                {
                  title: 'Mobile Development',
                  description: 'Native and cross-platform mobile applications',
                  image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                  icon: '📱'
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
        </div>
      </ParallaxLayer>

      {/* Portfolio Section */}
      <ParallaxLayer offset={4} speed={0.7}>
        <div className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
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
        </div>
      </ParallaxLayer>

      {/* Testimonials Section */}
      <ParallaxLayer offset={5} speed={0.8}>
        <div className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
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
        </div>
      </ParallaxLayer>

      {/* Contact Section */}
      <ParallaxLayer offset={5} speed={0.7}>
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">Let's discuss your next project</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <span className="w-8">📍</span> 123 Innovation Street, Tech City
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="w-8">��</span> +1 (555) 123-4567
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="w-8">✉️</span> contact@yourcompany.com
                  </p>
                </div>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="col-span-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="col-span-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;





