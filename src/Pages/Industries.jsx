import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import NetworkBackground from '../components/NetworkBackground';
import CreativeImage from '../components/CreativeImage';

const Industries = () => {
  const industries = [
    {
      title: 'Healthcare',
      icon: '🏥',
      description: 'Digital solutions for modern healthcare challenges',
      features: ['Electronic Health Records', 'Telemedicine', 'Medical IoT', 'Healthcare Analytics'],
      techStack: ['HIPAA Compliance', 'HL7', 'FHIR'],
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'E-commerce',
      icon: '🛍️',
      description: 'Cutting-edge platforms for online retail',
      features: ['Payment Integration', 'Inventory Management', 'Analytics', 'Mobile Commerce'],
      techStack: ['Shopify', 'WooCommerce', 'Stripe'],
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Education',
      icon: '📚',
      description: 'Technology solutions for learning institutions',
      features: ['LMS Integration', 'Virtual Classrooms', 'Student Analytics', 'Content Management'],
      techStack: ['Moodle', 'Canvas', 'Blackboard'],
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Finance',
      icon: '💰',
      description: 'Secure systems for financial services',
      features: ['Payment Processing', 'Risk Management', 'Fraud Detection', 'Banking APIs'],
      techStack: ['PCI DSS', 'Blockchain', 'AI/ML'],
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  const stats = [
    { value: '200+', label: 'Industry Projects' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Industry Partners' }
  ];

  const solutions = [
    {
      title: 'Digital Transformation',
      icon: '🚀',
      description: 'Comprehensive digital transformation solutions',
      features: ['Cloud Migration', 'Process Automation', 'Digital Workflows'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'IoT Integration',
      icon: '🌐',
      description: 'Connect and optimize your devices and systems',
      features: ['Smart Sensors', 'Real-time Analytics', 'Remote Monitoring'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      description: 'Intelligent solutions for complex challenges',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const process = [
    {
      title: 'Discovery',
      description: 'Understanding your unique industry challenges',
      icon: '🔍',
      steps: ['Requirements Analysis', 'Industry Research', 'Technology Assessment']
    },
    {
      title: 'Strategy',
      description: 'Crafting the perfect solution blueprint',
      icon: '📋',
      steps: ['Solution Design', 'Technology Selection', 'Implementation Planning']
    },
    {
      title: 'Development',
      description: 'Building your custom industry solution',
      icon: '⚙️',
      steps: ['Agile Development', 'Quality Assurance', 'Performance Testing']
    },
    {
      title: 'Deployment',
      description: 'Launching and optimizing your solution',
      icon: '🚀',
      steps: ['System Integration', 'User Training', 'Continuous Support']
    }
  ];

  const successStories = [
    {
      title: 'Manufacturing Excellence',
      industry: 'Manufacturing',
      description: 'Transformed production efficiency through IoT integration',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      result: '45%',
      metrics: [
        { label: 'Efficiency Increase', value: '45%' },
        { label: 'Cost Reduction', value: '30%' },
        { label: 'Quality Improvement', value: '25%' }
      ]
    },
    {
      title: 'Healthcare Innovation',
      industry: 'Healthcare',
      description: 'Revolutionized patient care with AI-powered diagnostics',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
      result: '60%',
      metrics: [
        { label: 'Diagnosis Accuracy', value: '95%' },
        { label: 'Patient Satisfaction', value: '85%' },
        { label: 'Processing Time', value: '-40%' }
      ]
    },
    {
      title: 'Retail Transformation',
      industry: 'Retail',
      description: 'Enhanced customer experience with omnichannel solution',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
      result: '70%',
      metrics: [
        { label: 'Sales Increase', value: '70%' },
        { label: 'Customer Retention', value: '85%' },
        { label: 'Order Processing', value: '3x' }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <div className="bg-white">
          {/* Hero Section */}
          <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50 backdrop-blur-lg">
            <NetworkBackground />

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="text-center lg:text-left">
                  {/* Innovation Badge */}
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
                      Industry Solutions
                    </span>
                  </motion.div>

                  {/* Main Heading with Enhanced Animation */}
                  <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                    <TypeAnimation
                      sequence={[
                        'Transforming Industries',
                        1000,
                        'Driving Innovation',
                        1000,
                        'Creating Impact',
                        1000,
                      ]}
                      wrapper="span"
                      repeat={Infinity}
                      style={{ color: '#d9764a' }}
                      className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text"
                    />
                    <motion.span
                    style={{ color: '#19234d' }}
                      className="block mt-4 text-4xl lg:text-5xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 text-transparent bg-clip-text bg-size-200 animate-gradient"
                    >
                      Powering Digital Evolution
                    </motion.span>
                  </h1>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-xl text-gray-600 mb-12"
                  >
                    Leveraging cutting-edge technology to revolutionize industries and drive digital transformation across sectors.
                  </motion.p>

                  {/* Stats Grid - Side by Side */}
                  <div className="flex flex-wrap gap-3">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex-1 min-w-[140px] p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20 group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10">
                          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                            <CountUp
                              end={parseInt(stat.value)}
                              duration={2.5}
                              suffix={stat.value.includes('+') ? '+' : '%'}
                              enableScrollSpy
                            />
                          </div>
                          <div className="text-gray-600 text-sm font-medium mt-1">{stat.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Enhanced Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="hidden lg:block relative z-20"
                >
                  <div className="relative">
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        rotateZ: [0, 2, 0]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative z-20"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt="Industry Innovation"
                        className="rounded-2xl shadow-2xl"
                      />
                      <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
                      <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse" />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl transform rotate-6 scale-105" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Industries Grid Section */}
          <section className="py-24 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-3">
                          <span className="text-4xl">{industry.icon}</span>
                          <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-600 mb-6">{industry.description}</p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.features.map(feature => (
                            <span key={feature} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.techStack.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
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

          {/* Solutions Showcase Section */}
          <section className="py-20 relative overflow-hidden">
            {/* Creative Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/patterns/topography.svg')] opacity-[0.02]" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-orange-900/5" />
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-conic from-blue-500/20 via-purple-500/20 to-orange-500/20 blur-3xl animate-spin-slower" />
              <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-24"
              >
                {/* Enhanced Badge */}

                <div className="relative">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-600 inline-block mb-6"
                  >
                    INDUSTRY SOLUTIONS
                  </motion.span>
                </div>

                <h2 className="text-6xl font-bold mb-6" style={{ color: '#19234d' }}>
                  Transforming Industries with
                  <span style={{ color: '#d9764a' }} className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 animate-gradient">
                    Innovative Solutions
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive solutions tailored for modern industry challenges
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    {/* Floating Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500" />

                    {/* Main Card */}
                    <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                      {/* Top Pattern */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

                      {/* Enhanced Icon */}
                      <div className="relative w-16 h-16 mb-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur group-hover:blur-xl transition-all duration-500" />
                        <div className="relative h-full rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">
                          {solution.icon}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-[#19234d] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {solution.title}
                      </h3>

                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {solution.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {solution.features.map(feature => (
                          <span
                            key={feature}
                            className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-100/50 hover:border-blue-200 transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Enhanced Process Section */}
          <section className="projects-section py-20 relative overflow-hidden bg-gradient-to-bl from-blue-50/80 via-white/80 to-yellow-50/80 backdrop-blur-lg">
            {/* Geometric shapes */}
            <div className="absolute inset-0">
              <div className="absolute top-40 right-10 w-40 h-40 border-8 border-blue-100 rounded-full opacity-20 animate-spin-slow" />
              <div className="absolute bottom-20 left-10 w-40 h-40 border-8 border-purple-100 rounded-full opacity-20 animate-spin-slow animation-delay-2000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div className="text-center mb-16">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-600 inline-block mb-6"
                >
                  Development Process
                </motion.span>
                <h2 className="text-5xl font-bold text-[#19234d] mb-4">
                  Our Development{' '}
                  <span className="bg-gradient-to-r from-[#de7527] to-[#de7527] text-transparent bg-clip-text">
                    Process
                  </span>
                </h2>
                <p className="text-xl text-gray-600">From Concept to Reality</p>
              </motion.div>

              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#de7527] to-[#de7527] transform -translate-y-1/2 hidden md:block" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                  {process.map((phase, index) => (
                    <motion.div
                      key={phase.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Step Number */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-[#de7527] to-[#de7527] rounded-full flex items-center justify-center text-white font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Icon Circle */}
                      <div className="text-4xl mb-6 w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                        {phase.icon}
                      </div>

                      <h3 className="text-xl font-bold text-[#19234d] mb-3">{phase.title}</h3>
                      <p className="text-gray-600 mb-4">{phase.description}</p>

                      {/* Steps List */}
                      <div className="space-y-2">
                        {phase.steps.map((step, idx) => (
                          <div key={step} className="flex items-center text-sm text-gray-700 bg-orange-50 rounded-lg p-2 group-hover:bg-orange-100 transition-colors">
                            <span className="w-6 h-6 rounded-full bg-[#de7527] text-white flex items-center justify-center mr-2 text-xs">
                              {idx + 1}
                            </span>
                            {step}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories Section */}
          <section className="py-20 relative overflow-hidden">
            {/* Enhanced Creative Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-orange-900/5" />
              <div className="absolute top-0 right-0 w-full h-full bg-[url('/patterns/flow-lines.svg')] opacity-10 animate-flow" />
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-conic from-blue-500/20 via-purple-500/20 to-orange-500/20 blur-3xl animate-spin-slower" />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
              {/* Creative Section Header */}
              <motion.div className="text-center mb-32">
                <div className="relative">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-600 inline-block mb-6"
                  >
                    SUCCESS STORIES
                  </motion.span>
                </div>

                <h2 className="text-7xl font-bold mb-8" style={{ color: '#19234d' }}>
                  Transforming Industries Into
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#d9764a] via-[#d9764a] to-[#d9764a] bg-size-200 animate-gradient"
                  >
                    Remarkable Success Stories
                  </motion.span>
                </h2>
              </motion.div>

              {/* Modern Success Stories Layout */}
              <div className="space-y-40">
                {successStories.map((story, index) => (
                  <motion.div
                    key={story.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Background Elements */}
                    <div className="absolute inset-0 -z-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e]/5 to-[#d9764a]/5 rounded-[3rem]" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-32 bg-gradient-to-r from-[#2b5a9e]/10 to-[#d9764a]/10 blur-3xl" />
                    </div>

                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
                      {/* Enhanced Image Section */}
                      <div className="w-full md:w-1/2 relative">
                        <div className="relative rounded-[2rem] overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] blur-2xl opacity-30" />
                          <div className="relative h-[600px] rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl hover:scale-110 transition-transform duration-700">
                            <motion.img
                              src={story.image}
                              alt={story.title}
                              className="w-full h-full object-cover transition-transform duration-700 "
                              whileHover={{ scale: 1.15 }}
                              transition={{ duration: 0.7, ease: "easeOut" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Content Section */}
                      <div className="w-full md:w-1/2 space-y-8 px-8">
                        <div className="space-y-6">
                          <motion.div
                            className="flex items-center gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                          >
                            <span className="px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#2b5a9e]/10 to-[#d9764a]/10 text-[#2b5a9e] border border-[#2b5a9e]/20">
                              {story.industry}
                            </span>
                            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#2b5a9e]/20 to-[#d9764a]/20" />
                          </motion.div>

                          <h3 className="text-5xl font-bold text-[#19234d] leading-tight">{story.title}</h3>
                          <p className="text-xl text-gray-600 leading-relaxed">{story.description}</p>
                        </div>

                        {/* Enhanced Metrics */}
                        <div className="grid grid-cols-3 gap-6">
                          {story.metrics.map((metric, idx) => (
                            <motion.div
                              key={metric.label}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className="relative group"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all duration-300" />
                              <div className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                                <div className="text-4xl font-bold bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] text-transparent bg-clip-text">
                                  {metric.value}
                                </div>
                                <div className="text-sm text-gray-600 mt-2">{metric.label}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Enhanced CTA Button */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="group relative px-8 py-4 rounded-xl overflow-hidden w-full md:w-auto"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] transition-all duration-300" />
                          <div className="relative flex items-center justify-center gap-2 text-white font-medium">
                            Explore Case Study
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </div>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Industries;
