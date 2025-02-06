import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import NetworkBackground from '../../components/NetworkBackground';
import { useNavigate } from 'react-router-dom';
import {
  FaUsers,
  FaUserTie,
  FaHandshake,
  FaCode,
  FaPalette,
  FaProjectDiagram,
  FaChartLine,
  FaCloud
} from 'react-icons/fa';

const Staffing = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const services = [
    {
      title: 'IT Recruitment',
      description: 'Find top tech talent for your organization',
      icon: <FaCode className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      benefits: ['Technical Screening', 'Culture Fit', 'Skill Assessment', 'Market Research']
    },
    {
      title: 'Contract Staffing',
      description: 'Flexible workforce solutions for projects',
      icon: <FaHandshake className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      benefits: ['Flexible Terms', 'Quick Deployment', 'Cost Effective', 'Skilled Professionals']
    },
    {
      title: 'Executive Search',
      description: 'Leadership talent acquisition services',
      icon: <FaUserTie className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      benefits: ['C-Level Search', 'Industry Expertise', 'Confidential Search', 'Market Analysis']
    },
    {
      title: 'Team Augmentation',
      description: 'Scale your team with skilled professionals',
      icon: <FaUsers className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      benefits: ['Seamless Integration', 'Scalable Teams', 'Technical Expertise', 'Agile Ready']
    }
  ];

  const expertise = [
    {
      name: 'Software Development',
      icon: <FaCode />,
      level: 'Expert',
      description: 'Technical Talent',
      color: 'text-blue-500'
    },
    {
      name: 'UI/UX Design',
      icon: <FaPalette />,
      level: 'Advanced',
      description: 'Creative Talent',
      color: 'text-purple-500'
    },
    {
      name: 'Project Management',
      icon: <FaProjectDiagram />,
      level: 'Expert',
      description: 'Leadership Talent',
      color: 'text-green-500'
    },
    {
      name: 'Digital Marketing',
      icon: <FaChartLine />,
      level: 'Advanced',
      description: 'Marketing Talent',
      color: 'text-red-500'
    },
    {
      name: 'Data Science',
      icon: <FaChartLine />,
      level: 'Expert',
      description: 'Analytics Talent',
      color: 'text-yellow-500'
    },
    {
      name: 'Cloud Computing',
      icon: <FaCloud />,
      level: 'Advanced',
      description: 'Infrastructure Talent',
      color: 'text-cyan-500'
    }
  ];

  const handleStartProject = () => {
    navigate('/contact');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen overflow-hidden">
        <NetworkBackground />
        
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_50%)]" />
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-conic from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-spin-slower" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-conic from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-full blur-3xl animate-spin-reverse" />
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
                <span className="text-2xl">👥</span>
                <span className="font-medium" style={{ color: '#2b5a9e' }}>Staffing Excellence</span>
              </motion.div>

              {/* Enhanced Heading */}
              <h1 className="text-6xl lg:text-7xl font-bold mb-6" style={{ color: '#19234d' }}>
                Building Amazing
                <span className="block mt-4">
                  <TypeAnimation
                    sequence={[
                      'Tech Teams',
                      2000,
                      'IT Solutions',
                      2000,
                      'Partnerships',
                      2000,
                      'Success Stories',
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
                Connect with top talent and build high-performing teams with our comprehensive staffing solutions
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStartProject}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Hiring
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Services Preview */}
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
                  <div className="text-blue-600 mb-4">{service.icon}</div>
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
              Our Expertise
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Specialized Talent
              <span style={{ color: '#d9764a' }} className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Recruitment Solutions
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {expertise.map((field, index) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className={`text-4xl mb-4 ${field.color}`}>{field.icon}</div>
                <h3 className="text-white font-semibold mb-2">{field.name}</h3>
                <p className="text-gray-300 text-sm">{field.description}</p>
                <div className="mt-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                    {field.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-600 inline-block mb-6"
            >
              Recruitment Process
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#19234d' }}>
              How We Find
              <span style={{ color: '#d9764a' }} className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Your Perfect Match
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { phase: 'Requirements', icon: '📋', description: 'Understanding your needs and culture' },
              { phase: 'Sourcing', icon: '🔍', description: 'Finding the best talent in the market' },
              { phase: 'Screening', icon: '✅', description: 'Technical and cultural assessment' },
              { phase: 'Placement', icon: '🤝', description: 'Successful candidate integration' }
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

export default Staffing;
