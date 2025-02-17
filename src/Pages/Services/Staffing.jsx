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
      description: 'Technical Talent',
      color: 'text-blue-500'
    },
    {
      name: 'UI/UX Design',
      icon: <FaPalette />,
      description: 'Creative Talent',
      color: 'text-purple-500'
    },
    {
      name: 'Project Management',
      icon: <FaProjectDiagram />,
      description: 'Leadership Talent',
      color: 'text-green-500'
    },
    {
      name: 'Digital Marketing',
      icon: <FaChartLine />,
      description: 'Marketing Talent',
      color: 'text-red-500'
    },
    {
      name: 'Data Science',
      icon: <FaChartLine />,
      description: 'Analytics Talent',
      color: 'text-yellow-500'
    },
    {
      name: 'Cloud Computing',
      icon: <FaCloud />,
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Creative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="absolute inset-0">
            <div className="absolute w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d="M0,50 Q25,45 50,50 T100,50"
                  stroke="url(#gradient-line)"
                  strokeWidth="0.1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-conic from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin-slower" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-600 inline-block mb-6"
            >
              Our Process
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#19234d' }}>
              How We Find
              <span className="block mt-2 text-[#d9764a]">Your Perfect Match</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                phase: 'Requirements Analysis',
                icon: '📋',
                description: 'Understanding your needs and culture',
                details: ['Stakeholder Interviews', 'Technical Assessment', 'Project Scope Definition', 'Timeline Planning'],
                image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: 'from-blue-500 to-purple-500'
              },
              {
                phase: 'Talent Sourcing',
                icon: '🔍',
                description: 'Finding the best talent in the market',
                details: ['Market Research', 'Candidate Screening', 'Skill Assessment', 'Cultural Fit Evaluation'],
                image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: 'from-purple-500 to-pink-500'
              },
              {
                phase: 'Comprehensive Screening',
                icon: '✅',
                description: 'Technical and cultural assessment',
                details: ['Technical Interviews', 'Code Challenges', 'Background Checks', 'Reference Verification'],
                image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: 'from-pink-500 to-red-500'
              },
              {
                phase: 'Successful Placement',
                icon: '🤝',
                description: 'Seamless integration and onboarding',
                details: ['Offer Management', 'Onboarding Support', 'Integration Planning', 'Performance Monitoring'],
                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: 'from-red-500 to-orange-500'
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
        {/* Creative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0">
            <div className="absolute w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d="M0,50 Q25,45 50,50 T100,50"
                  stroke="url(#gradient-line)"
                  strokeWidth="0.1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-conic from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-spin-slower" />
          </div>
        </div>

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
              Specialized Talent for
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ffa07a] to-[#ff6b6b]">
                Every Industry
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Technology',
                description: 'From startups to enterprise tech companies',
                icon: '💻',
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: '#fff',
                features: ['Software Engineers', 'DevOps Specialists', 'Product Managers', 'Data Scientists']
              },
              {
                title: 'Healthcare',
                description: 'Digital health and medical technology',
                icon: '🏥',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: '#fff',
                features: ['Health Tech Developers', 'Medical Data Analysts', 'Healthcare IT Specialists']
              },
              {
                title: 'Finance',
                description: 'FinTech and financial services',
                icon: '🏦',
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: '#fff',
                features: ['Financial Software Developers', 'Blockchain Engineers', 'Security Specialists']
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



      {/* AI-Powered Recruitment Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3  rounded-full text-sm font-medium text-blue-600 inline-block mb-6"
            >
              AI-Powered Recruitment
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#19234d' }}>
              Enhanced Talent Acquisition
              <span className="block mt-2 text-[#d9764a]">
                With Artificial Intelligence
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Resume Screening',
                description: 'Advanced algorithms analyze resumes to match skills and experience with job requirements',
                icon: '🤖',
                features: ['Skill Matching', 'Experience Validation', 'Cultural Fit Analysis']
              },
              {
                title: 'Predictive Analytics',
                description: 'Data-driven insights to predict candidate success and retention',
                icon: '📊',
                features: ['Performance Prediction', 'Retention Analysis', 'Team Fit Scoring']
              },
              {
                title: 'Automated Assessment',
                description: 'Intelligent evaluation of technical and soft skills',
                icon: '✨',
                features: ['Technical Skill Verification', 'Personality Assessment', 'Communication Analysis']
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500" />
                <div className="relative p-8 bg-white rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-blue-600">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-500 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
