import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import { FaRocket, FaLightbulb, FaCode, FaCloud } from 'react-icons/fa';
import '../styles/animations.css';
import NetworkBackground from '../components/NetworkBackground';
import CreativeImage from '../components/CreativeImage';
import { useNavigate } from 'react-router-dom';
import VideoModal from '../components/VideoModal';

// imges

import DesignAndArchitecture from '../assets/OurDevelopmentProcess_4Tabs(600x400)/Design&Architecture.jpg';
import Development from '../assets/OurDevelopmentProcess_4Tabs(600x400)/Development&Testing.jpg';
import Discovery from '../assets/OurDevelopmentProcess_4Tabs(600x400)/Discovery&Planning.jpg';
import Launch from '../assets/OurDevelopmentProcess_4Tabs(600x400)/Launch&Support.jpg';

import ECommercePlatform from '../assets/OurProjects_4Tabs(600x300)/E-CommercePlatform.jpg';
import AI_PoweredAnalyticsPlatform from '../assets/OurProjects_4Tabs(600x300)/AI-PoweredAnalyticsPlatform.jpg';
import MobileBankingApp from '../assets/OurProjects_4Tabs(600x300)/MobileBankingApp.jpg';
import DeFiExchangePlatform from '../assets/OurProjects_4Tabs(600x300)/DeFiExchangePlatform.jpg';

import Blockchain from '../assets/OurServices_6smallTabs(400x200)/Blockchain.jpg';
import DigitalMarketing from '../assets/OurServices_6smallTabs(400x200)/DigitalMarketing.jpg';
import AISolutions from '../assets/OurServices_6smallTabs(400x200)/AISolutions.jpg';
import WebDevelopment from '../assets/OurServices_6smallTabs(400x200)/WebDevelopment.jpg';
import MobileDevelopment from '../assets/OurServices_6smallTabs(400x200)/AppDevelopment.jpg';
import UIXDesign from '../assets/OurServices_6smallTabs(400x200)/UIUXDesign.jpg';


// import ScrollBackground from '../components/ScrollBackground';

const Home = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const navigate = useNavigate();
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const [activeTab, setActiveTab] = useState('All');
  const { scrollYProgress } = useScroll();

  const features = [
    {
      title: 'Tailored Development',
      description: 'Custom solutions designed to meet the unique needs of your business.',
      icon: <FaCode className="text-2xl" />
    },
    {
      title: 'Innovation at the Core',
      description: 'Leveraging advanced technologies and contemporary development practices.',
      icon: <FaLightbulb className="text-2xl" />
    },
    {
      title: 'Fast Track Delivery',
      description: 'Swift and efficient execution, ensuring quality is never compromised.',
      icon: <FaRocket className="text-2xl" />
    },
    // {
    //   title: 'Agile Methodologies',
    //   description: 'Iterative approach to ensure flexibility and adaptability',
    //   icon: <FaCode className="text-2xl" />
    // },
    {
      title: 'Cloud Connectivity',
      description: 'Effortless integration with cloud services to ensure scalability and flexibility.',
      icon: <FaCloud className="text-2xl" />
    },
    // {
    //   title: 'Cybersecurity',
    //   description: 'Robust security measures to protect your digital assets',
    //   icon: <FaShieldAlt className="text-2xl" />
    // }
  ];


  const testimonials = [
    {
      name: "Emma Thompson",
      role: "Tech Innovator",
      company: "Future Labs",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      content: "Their innovative approach transformed our digital presence completely.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Product Lead",
      company: "StartUp Hub",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      content: "Exceptional quality and attention to detail in every project.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Growth Co",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      content: "The team's dedication to excellence is truly remarkable.",
      rating: 5
    },
    {
      name: "Michael Brown",
      role: "Startup Founder",
      company: "Tech Ventures",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      content: "They delivered beyond our expectations, truly outstanding work.",
      rating: 5
    },
    {
      name: "Lisa Zhang",
      role: "Creative Director",
      company: "Design Masters",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content: "Innovative solutions that truly transformed our business approach.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "CTO",
      company: "Tech Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      content: "Their technical expertise and creativity are unmatched in the industry.",
      rating: 5
    }
  ];

  const serviceRoutes = {
    'Web Development': 'web-development',
    'Mobile Development': 'app-development',
    'UI/UX Design': 'web-design',
    'Digital Marketing': 'digital-marketing',
    'Staffing Solutions': 'staffing'
  };

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      image: WebDevelopment,
      icon: '💻',
      features: ['Custom Solutions', 'Responsive Design', 'Performance Optimization', 'SEO Integration'],
      color: 'from-blue-500 to-cyan-500',
      techStack: ['React', 'Node.js', 'MongoDB'],
      path: 'web-development'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      image: MobileDevelopment,
      icon: '📱',
      features: ['iOS & Android', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization'],
      color: 'from-green-500 to-emerald-500',
      techStack: ['React Native', 'Flutter', 'Swift'],
      path: 'app-development'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance engagement',
      image: UIXDesign,
      icon: '🎨',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      color: 'from-purple-500 to-pink-500',
      techStack: ['Figma', 'Adobe XD', 'Sketch'],
      path: 'web-design'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing solutions for business growth',
      image: DigitalMarketing,
      icon: '📈',
      features: ['SEO', 'Content Marketing', 'Social Media', 'Analytics'],
      color: 'from-orange-500 to-red-500',
      techStack: ['Google Analytics', 'SEMrush', 'HubSpot'],
      path: 'digital-marketing'
    },
    {
      title: 'AI Solutions',
      description: 'Implementing intelligent solutions to automate and enhance business processes',
      image: AISolutions,
      icon: '🤖',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-green-500 to-teal-500',
      accent: 'green',
      techStack: ['TensorFlow', 'PyTorch', 'OpenAI'],
      path: 'ai-solutions'
    },
    {
      title: 'Blockchain',
      description: 'Building secure and transparent blockchain solutions for modern businesses',
      image: Blockchain,
      icon: '⛓️',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Blockchain Integration'],
      color: 'from-yellow-500 to-orange-500',
      accent: 'yellow',
      techStack: ['Ethereum', 'Solidity', 'Web3.js'],
      path: 'blockchain'
    }
  ];


  // const projects = [
  //   {
  //     title: "AI-Powered Analytics Platform",
  //     category: "AI/ML",
  //     description: "Enterprise-level analytics platform with predictive insights",
  //     image: AI_PoweredAnalyticsPlatform,
  //     tech: ["Python", "TensorFlow", "React", "AWS"],
  //     link: "#"
  //   },
  //   {
  //     title: "E-Commerce Platform",
  //     category: "Web Development",
  //     description: "Modern e-commerce solution with advanced features",
  //     image: ECommercePlatform,
  //     tech: ["React", "Node.js", "MongoDB"],
  //     link: "#"
  //   },
  //   {
  //     title: "DeFi Exchange Platform",
  //     category: "Blockchain",
  //     description: "Decentralized exchange with advanced trading features",
  //     image: DeFiExchangePlatform,
  //     tech: ["Solidity", "Web3.js", "React"],
  //     link: "#"
  //   },
  //   {
  //     title: "Mobile Banking App",
  //     category: "Mobile Apps",
  //     description: "Next-gen banking experience for mobile users",
  //     image: MobileBankingApp,
  //     tech: ["React Native", "Firebase", "Node.js"],
  //     link: "#"
  //   }
  // ];

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

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(project => project.category === activeTab);

  useEffect(() => {
    const startTimers = () => {
      // Service rotation timer
      intervalRef.current = setInterval(() => {
        setActiveService((prev) => (prev + 1) % services.length);
        setProgress(0); // Reset progress when service changes
      }, 5000);

      // Progress bar timer
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 2; // Increment by 2 every 100ms to reach 100 in 5 seconds
        });
      }, 100);
    };

    const stopTimers = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };

    if (!isHovered) {
      startTimers();
    } else {
      stopTimers();
    }

    return () => stopTimers();
  }, [isHovered, services.length]);

  return (
    <div className="relative min-h-screen">
      {/* <ScrollBackground /> */}
      <div className="relative z-10">
        <div className="bg-white">
          {/* Hero Section */}
          <section className="hero-section relative overflow-hidden bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50 backdrop-blur-lg">
            <NetworkBackground />
            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
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
                    <span
                      className="text-transparent bg-clip-text"
                      style={{ backgroundImage: 'linear-gradient(to right, #2b5a9e, #d9764a)' }}>
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
                      className="block"
                      style={{ color: '#d9764a' }}
                    />
                    <motion.span
                      className="block mt-4 text-5xl lg:text-6xl"
                      style={{ color: '#19234d' }}
                    >
                      Digital Excellence
                    </motion.span>
                  </h1>

                  {/* Enhanced Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-xl mb-8 leading-relaxed"
                    style={{ color: '#2b5a9e' }}
                  >
                    Elevate your digital presence with innovative solutions designed to foster growth and spark creativity.
                  </motion.p>

                  {/* Enhanced CTA Buttons */}
                  <div className="flex flex-wrap gap-6">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate('/contact')}
                      className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      Get Started
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowVideoModal(true)}
                      className="px-8 py-4 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-semibold text-lg hover:border-blue-500 rounded-full transition-all duration-300"
                    >
                      Watch Demo
                    </motion.button>
                  </div>

                  {/* Metrics Section */}
                  <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                      { number: 99, suffix: '+', label: 'Projects Completed' },
                      { number: 110, suffix: '+', label: 'Client Satisfaction' },
                      { number: 30, suffix: '+', label: 'Team Experts' },
                      { number: 5, suffix: '+', label: 'Years Experience' }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                      >
                        <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-3">
                          <CountUp
                            end={stat.number}
                            duration={2.5}
                            delay={2.5}
                            enableScrollSpy={false}
                            start={0}
                            onEnd={() => console.log(`Counter ${stat.label} finished`)}
                          />
                          {stat.suffix}
                        </div>
                        <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right Column - Enhanced Creative Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="hidden lg:block relative z-20 mt-16"
                >
                  <CreativeImage />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Company Highlights Banner Section */}
          <section className="h-32 bg-gradient-to-r from-blue-50 via-white to-purple-50 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" />
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
            </div>

            <div className="max-w-full overflow-hidden">
              <div className="relative">
                <div className="flex gap-12 items-center animate-infinite-scroll">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-12 items-center">
                      {[
                        {
                          stat: '500+',
                          label: 'Projects Delivered',
                          icon: '🚀',
                          color: 'from-blue-500 to-blue-600'
                        },
                        {
                          stat: '99%',
                          label: 'Client Satisfaction',
                          icon: '⭐',
                          color: 'from-yellow-500 to-orange-500'
                        },
                        {
                          stat: '24/7',
                          label: 'Support Available',
                          icon: '🛟',
                          color: 'from-green-500 to-emerald-600'
                        },
                        {
                          stat: '50+',
                          label: 'Expert Developers',
                          icon: '👨‍💻',
                          color: 'from-purple-500 to-indigo-600'
                        },
                        {
                          stat: '10+',
                          label: 'Years Experience',
                          icon: '🏆',
                          color: 'from-red-500 to-pink-600'
                        },
                        {
                          stat: '100%',
                          label: 'Project Success Rate',
                          icon: '📈',
                          color: 'from-teal-500 to-cyan-600'
                        }
                      ].map((highlight) => (
                        <div
                          key={highlight.label}
                          className="flex items-center justify-center group"
                        >
                          <div className="relative p-4 bg-white/70 backdrop-blur-sm rounded-lg 
                            shadow-sm hover:shadow-md transition-all duration-300
                            hover:bg-white/90 group-hover:ring-1 ring-blue-100">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{highlight.icon}</span>
                              <div>
                                <div className={`text-xl font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`}>
                                  {highlight.stat}
                                </div>
                                <div className="text-sm text-gray-600 whitespace-nowrap">
                                  {highlight.label}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Why Choose Us Section */}
          <section className="services-section py-24 relative overflow-hidden bg-gradient-to-tr from-purple-50/80 via-white/80 to-blue-50/80 backdrop-blur-lg">
            {/* Add decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
              <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl font-bold  mb-4 text-[#19234d]">
                  Why Partner with{' '}
                  <span className="bg-gradient-to-r from-[#de7527] to-[#de7527] text-transparent bg-clip-text">
                    Us ?
                  </span>
                </h2>

                <p className="text-xl text-gray-600">Excellence in Every Digital Solution</p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Side - Features */}
                <div className="grid grid-cols-1 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="group flex items-start gap-6 p-6 rounded-2xl bg-white/80 backdrop-blur-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Right Side - Enhanced Testimonials Display */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="sticky top-8"
                  >
                    <div className="relative">
                      {/* Decorative Elements */}
                      <div className="absolute -left-8 -top-8 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" />
                      <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000" />

                      {/* Testimonials Scroll Container */}
                      <div className="relative max-h-[600px] overflow-hidden">
                        <div className="absolute left-0 top-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10" />
                        <div className="absolute left-0 bottom-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />

                        <motion.div
                          className="flex flex-col gap-6 py-4"
                          animate={{
                            y: [-1200, 0]
                          }}
                          transition={{
                            duration: 40,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear"
                          }}
                        >
                          {[...testimonials, ...testimonials].map((review, index) => (
                            <motion.div
                              key={`${review.name}-${index}`}
                              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="flex items-start gap-4">
                                <img
                                  src={review.image}
                                  alt={review.name}
                                  className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-100"
                                />
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                      <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                      </svg>
                                    ))}
                                  </div>
                                  <p className="text-gray-700 italic mb-3">{review.content}</p>
                                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                                  <p className="text-sm text-gray-600">{review.role} at {review.company}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Process Section */}
          <section className="projects-section py-24 relative overflow-hidden bg-gradient-to-bl from-blue-50/80 via-white/80 to-yellow-50/80 backdrop-blur-lg">
            {/* Add geometric shapes */}
            <div className="absolute inset-0">
              <div className="absolute top-40 right-10 w-40 h-40 border-8 border-blue-100 rounded-full opacity-20 animate-spin-slow" />
              <div className="absolute bottom-20 left-10 w-40 h-40 border-8 border-purple-100 rounded-full opacity-20 animate-spin-slow animation-delay-2000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl font-bold text-[#19234d] mb-4">
                  Our Development{' '}
                  <span className="bg-gradient-to-r from-[#de7527] to-[#de7527] text-transparent bg-clip-text">
                    Journey
                  </span>
                </h2>
                <p className="text-xl text-gray-600">Turning Ideas into Reality, Step by Step</p>
              </motion.div>

              {/* Process Steps */}
              <div className="space-y-32">
                {[
                  {
                    step: '01',
                    title: 'Discovery & Strategy Planning',
                    desc: 'We begin by fully understanding your vision, objectives, and requirements. Our team conducts thorough research and analysis to create a strategic roadmap that ensures the success of your project.',
                    image: Discovery,
                    icon: '🎯',
                    details: [
                      'Detailed Requirement Gathering',
                      'In-Depth Market Analysis',
                      'Clear Scope Definition',
                      'Precise Timeline Development'
                    ]
                  },
                  {
                    step: '02',
                    title: 'Design & System Architecture',
                    desc: 'Our design professionals create intuitive, visually engaging interfaces, while our architects develop robust, scalable systems to ensure seamless application performance.',
                    image: DesignAndArchitecture,
                    icon: '🎨',
                    details: [
                      'UI/UX Design & Optimization',
                      'Scalable System Architecture',
                      'Expert Technology Stack Selection',
                      'Interactive Design Prototyping'
                    ]
                  },
                  {
                    step: '03',
                    title: 'Agile Development & Quality Testing',
                    desc: 'We utilize agile development practices, ensuring regular testing and continuous quality assurance to deliver high-performance solutions.',
                    image: Development,
                    icon: '⚙️',
                    details: [
                      'Agile Software Development',
                      'Continuous Integration & Deployment',
                      'Comprehensive Quality Assurance',
                      'Performance & Speed Optimization'
                    ]
                  },
                  {
                    step: '04',
                    title: 'Seamless Launch & Ongoing Support',
                    desc: 'We guarantee a smooth deployment and offer continuous support and maintenance to ensure your application operates flawlessly.',
                    image: Launch,
                    icon: '🚀',
                    details: [
                      'Efficient Deployment Preparation',
                      'Real-Time Performance Monitoring',
                      'Comprehensive User Training',
                      'Reliable Ongoing Maintenance & Support'
                    ]
                  }
                ].map((phase, index) => (
                  <motion.div
                    key={phase.step}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                  >
                    {/* Image Section */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="w-full lg:w-1/2"
                    >
                      <div className="relative rounded-2xl overflow-hidden group">
                        <img
                          src={phase.image}
                          alt={phase.title}
                          className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </motion.div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{phase.icon}</span>
                        <span className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#de7527] to-[#de7527]">
                          {phase.step}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{phase.title}</h3>
                      <p className="text-xl text-gray-600">{phase.desc}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {phase.details.map((detail, i) => (
                          <motion.div
                            key={detail}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + (i * 0.1) }}
                            className="flex items-center gap-2"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                            <span className="text-gray-700">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Split-view Services Section 2025 */}
          <section className="services-section py-24 relative overflow-hidden bg-gradient-to-tr from-purple-50/80 via-white/80 to-blue-50/80 backdrop-blur-lg">
            {/* Add decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000" />
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-6xl font-bold mb-6">
                  <span className="text-[#19234d]">Our</span>{' '}
                  <span className="relative inline-block">
                    {/* <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-25" /> */}
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#de7527] to-[#de7527]">
                      Services
                    </span>
                  </span>
                </h2>
              </motion.div>

              {/* Split View Container with reduced height */}
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Image Gallery */}
                <div className="w-full lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4 h-[500px]">
                    {services.map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-white/80 backdrop-blur-lg
                          shadow-lg hover:shadow-2xl transition-all duration-500
                          ${index === activeService ? 'ring-2 ring-blue-600 ring-offset-4 ring-offset-white/50' : ''}`}
                        onMouseEnter={() => {
                          setIsHovered(true);
                          setActiveService(index);
                        }}
                        onMouseLeave={() => {
                          setIsHovered(false);
                        }}
                      >
                        <div className="aspect-square">
                          <img
                            src={service.image}
                            alt={service.title}
                            className={`w-full h-full object-cover transform transition-all duration-700
                              ${index === activeService ? 'scale-110' : 'group-hover:scale-110'}`}
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                            transition-all duration-500
                            ${index === activeService ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                            <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500
                              ${index === activeService ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}>
                              <div className="flex items-center gap-3 text-white mb-3">
                                <span className="text-3xl">{service.icon}</span>
                                <h3 className="text-xl font-bold">{service.title}</h3>
                              </div>
                              <p className="text-sm text-white/90 leading-relaxed">{service.description}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Service Details with reduced height */}
                <div className="w-full lg:w-1/2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[500px] flex flex-col"
                    >
                      {/* Image Section */}
                      <div className="relative h-[200px]">
                        <motion.img
                          src={services[activeService].image}
                          alt={services[activeService].title}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.7 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                        {/* Service Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center gap-4">
                            <span className="text-5xl">{services[activeService].icon}</span>
                            <div>
                              <h3 className="text-3xl font-bold text-white mb-2">
                                {services[activeService].title}
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {services[activeService].techStack.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 
                                      backdrop-blur-md text-white border border-white/20"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content Section with Explore Button */}
                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-lg text-gray-700 mb-6 flex-1">
                          {services[activeService].description}
                        </p>

                        <div className="flex justify-between items-center">
                          {/* Features */}
                          <div className="flex gap-3">
                            {services[activeService].features.slice(0, 2).map((feature, i) => (
                              <span
                                key={feature}
                                className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>

                          {/* Explore Button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate(`/services/${services[activeService].path}`)}
                            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                              rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 
                              transition-all duration-300"
                          >
                            Explore Service
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects Section */}
          <section className="projects-section py-24 relative overflow-hidden bg-gradient-to-bl from-blue-50/80 via-white/80 to-yellow-50/80 backdrop-blur-lg">
            {/* Add geometric shapes */}
            <div className="absolute inset-0">
              <div className="absolute top-40 right-10 w-40 h-40 border-8 border-blue-100 rounded-full opacity-20 animate-spin-slow" />
              <div className="absolute bottom-20 left-10 w-40 h-40 border-8 border-purple-100 rounded-full opacity-20 animate-spin-slow animation-delay-2000" />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Section Header */}
              <motion.div className="text-center mb-20">
                <h2 className="text-6xl font-bold mb-6 text-[#19234d]">
                  Our{" "}
                  <span className="relative inline-block">
                    {/* <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-20" /> */}
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#de7527] to-[#de7527]">
                      Projects
                    </span>
                  </span>

                </h2>
              </motion.div>

              {/* Project Category Tabs */}
              <div className="flex justify-center mb-12 gap-4">
                {['All', 'Web Development', 'Mobile Apps', 'AI/ML', 'Blockchain'].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300
                      ${activeTab === tab
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab}
                  </motion.button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                    <div className="relative w-full h-[440px] bg-white rounded-lg shadow-lg hover:shadow-xl 
                      transition-all duration-300 border border-gray-200">
                      {/* Folder Header - Windows Style */}
                      <div className="bg-[#f0f0f0] px-4 py-2 rounded-t-lg border-b border-gray-300 
                        flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700">{project.category}</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400" />
                          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400" />
                          <button className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500" />
                        </div>
                      </div>

                      {/* Folder Content */}
                      <div className="p-4">
                        {/* Project Image */}
                        <div className="w-full h-48 mb-4 rounded overflow-hidden bg-gray-100 border border-gray-200">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transform transition-transform duration-500 
                              group-hover:scale-105"
                          />
                        </div>

                        {/* Project Info */}
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">{project.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                            {project.description.split('**').map((part, index) =>
                              index % 2 === 0 ? part : <strong key={index} className="text-[#d9764a]">{part}</strong>
                            )}
                          </p>
                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map(tech => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
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
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium mt-2"
                            whileHover={{ x: 5 }}
                          >
                            Open Folder
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.a>
                        </div>
                      </div>

                      {/* Folder Bottom Edge */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoUrl="https://www.youtube.com/embed/FYdm4VQZhy8"
      />

      <style jsx>{`
        .folder-tab {
          clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
        }
      `}</style>
    </div>
  );
};

export default Home;

