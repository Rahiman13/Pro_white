import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import NetworkBackground from '../../components/NetworkBackground';
import {
  FaSearchDollar,
  FaHashtag,
  FaPenFancy,
  FaMailBulk,
  FaChartLine,
  FaAd,
  FaGoogle,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';
import {
  SiGoogleanalytics,
  SiMailchimp,
  SiHubspot,
  SiGoogleads,
  SiInstagram,
  SiLinkedin,
  // SiTwitter,
  SiTiktok,
  SiYoutube,
} from 'react-icons/si';
import { useNavigate } from 'react-router-dom';


// images
import SeoOptimization from '../../assets/DigitalMarketing/SeoOptimization.jpg';
import SocialMediaMarketing from '../../assets/DigitalMarketing/SocialMedia.jpg';
import ContentMarketing from '../../assets/DigitalMarketing/ContentWriting.jpg';
import EmailMarketing from '../../assets/DigitalMarketing/EmailMarketing.jpg';

const DigitalMarketing = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Search Engine Optimization',
      description: 'Boost your online visibility with data-driven SEO strategies',
      icon: <FaSearchDollar className="text-5xl" />,
      image: SeoOptimization,
      color: 'from-blue-800 to-blue-900',
      benefits: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage and grow your audience across social platforms',
      icon: <FaHashtag className="text-5xl" />,
      image: SocialMediaMarketing,
      color: 'from-purple-800 to-purple-900',
      benefits: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics']
    },
    {
      title: 'Content Marketing',
      description: 'Create compelling content that converts visitors into customers',
      icon: <FaPenFancy className="text-5xl" />,
      image: ContentMarketing,
      color: 'from-green-800 to-green-900',
      benefits: ['Blog Writing', 'Email Campaigns', 'Video Content', 'Infographics']
    },
    {
      title: 'Email Marketing',
      description: 'Build lasting relationships through targeted email campaigns',
      icon: <FaMailBulk className="text-5xl" />,
      image: EmailMarketing,
      color: 'from-red-800 to-red-900',
      benefits: ['List Building', 'Automation', 'A/B Testing', 'Analytics']
    }
  ];

  const technologies = [
    {
      name: 'Google Analytics',
      icon: <SiGoogleanalytics />,
      description: 'Data Analytics',
      gradient: 'from-[#F4B400]/20 to-[#F4B400]/40',
      color: 'text-[#F4B400]'
    },
    {
      name: 'Mailchimp',
      icon: <SiMailchimp />,
      description: 'Email Marketing',
      gradient: 'from-[#FFE01B]/20 to-[#FFE01B]/40',
      color: 'text-[#FFE01B]'
    },
    {
      name: 'HubSpot',
      icon: <SiHubspot />,
      description: 'Marketing Hub',
      gradient: 'from-[#FF7A59]/20 to-[#FF7A59]/40',
      color: 'text-[#FF7A59]'
    },
    {
      name: 'Google Ads',
      icon: <SiGoogleads />,
      description: 'PPC Advertising',
      gradient: 'from-[#4285F4]/20 to-[#4285F4]/40',
      color: 'text-[#4285F4]'
    },
    {
      name: 'Instagram',
      icon: <SiInstagram />,
      description: 'Social Media',
      gradient: 'from-[#E4405F]/20 to-[#E4405F]/40',
      color: 'text-[#E4405F]'
    },
    {
      name: 'LinkedIn',
      icon: <SiLinkedin />,
      description: 'B2B Marketing',
      gradient: 'from-[#0A66C2]/20 to-[#0A66C2]/40',
      color: 'text-[#0077B5]'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      description: 'Social Media',
      gradient: 'from-[#1DA1F2]/20 to-[#1DA1F2]/40',
      color: 'text-[#1DA1F2]'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      description: 'Social Media',
      gradient: 'from-[#3B5998]/20 to-[#3B5998]/40',
      color: 'text-[#1877F2] text-opacity-100'
    }
  ];

  const handleStartProject = () => {
    navigate('/contact');
  };

  const handleViewPortfolio = () => {
    navigate('/portfolio');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen overflow-hidden">
        <NetworkBackground />

        {/* Background Elements */}
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
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left pt-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center space-x-3 mb-8 glass-morphism px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <span className="text-2xl">🚀</span>
                <span className="font-medium" style={{ color: '#2b5a9e' }}>Digital Marketing Excellence</span>
              </motion.div>

              <h1 className="text-6xl lg:text-7xl font-bold mb-6" style={{ color: '#19234d' }}>
                Grow Your Business
                <span className="block mt-4">
                  <TypeAnimation
                    sequence={[
                      'Online Presence',
                      2000,
                      'Brand Awareness',
                      2000,
                      'ROI',
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
                Data-driven digital marketing strategies that deliver measurable results
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStartProject}
                  className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Campaign
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

      {/* Services Grid Section */}
      <section className="py-24 relative overflow-hidden">
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
              Digital Marketing
              <span className="block mt-2 text-[#d9764a]">Services & Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforming businesses with cutting-edge digital marketing strategies and modern technologies
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  /> */}
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

      {/* Tools & Technologies Section */}
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
              {/* <span className="animate-pulse-fast w-2 h-2 rounded-full bg-blue-400"></span> */}
              <span className="text-white/80 text-sm font-medium">Marketing Tools</span>
            </motion.div>
            {/* <h2 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"> */}
            <h2 className="text-5xl md:text-6xl font-bold mb-4 ">
              <span className="text-white">Our Marketing</span>
              <span className="block mt-2 text-[#ffa07a] ">
                Tools & Platforms
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed ">
              Leveraging industry-leading tools to drive your digital success
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2b5a9e]/5 via-purple-500/5 to-[#d9764a]/5" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-600 inline-block mb-6"
            >
              Our Marketing Process
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#19234d' }}>
              Strategic Marketing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d9764a] to-[#d9764a]">
                From Planning to Results
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Research',
                description: 'Market analysis and strategy planning',
                icon: '🔍',
                color: 'from-blue-800 to-blue-900',
                benefits: ['Market Research', 'Competitor Analysis', 'Target Audience', 'Strategy Planning']
              },
              {
                title: 'Implementation',
                description: 'Execute marketing campaigns',
                icon: '⚡',
                color: 'from-purple-800 to-purple-900',
                benefits: ['Campaign Setup', 'Content Creation', 'Channel Management', 'Performance Tracking']
              },
              {
                title: 'Optimization',
                description: 'Monitor and improve performance',
                icon: '📈',
                color: 'from-green-800 to-green-900',
                benefits: ['Data Analysis', 'A/B Testing', 'Strategy Refinement', 'ROI Optimization']
              },
              {
                title: 'Reporting',
                description: 'Analytics and ROI tracking',
                icon: '📊',
                color: 'from-red-800 to-red-900',
                benefits: ['Performance Reports', 'Insights Generation', 'ROI Analysis', 'Future Planning']
              }
            ].map((process, index) => (
              <motion.div
                key={process.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative h-full p-8 bg-white rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{process.icon}</div>
                    <div className="text-5xl font-bold text-blue-500/20">0{index + 1}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-600">{process.phase}</h3>
                  <p className="text-gray-600 mb-6">{process.description}</p>
                  <div className="">
                    <ul className="space-y-2">
                      {process.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                          {benefit}
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
              Digital Marketing Solutions for
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ffa07a] to-[#ff6b6b]">
                Every Industry
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce',
                description: 'Drive online sales and customer engagement',
                icon: '🛍️',
                image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: '#fff',
                features: ['Conversion Optimization', 'Shopping Ads', 'Email Marketing', 'Social Commerce']
              },
              {
                title: 'Healthcare',
                description: 'HIPAA-compliant marketing solutions',
                icon: '🏥',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: '#fff',
                features: ['Patient Engagement', 'Service Promotion', 'Lead Generation', 'Brand Building']
              },
              {
                title: 'Real Estate',
                description: 'Connect properties with potential buyers',
                icon: '🏠',
                image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: '#fff',
                features: ['Property Listings', 'Virtual Tours', 'Lead Nurturing', 'Market Analysis']
              },
              {
                title: 'Education',
                description: 'Attract and engage students digitally',
                icon: '📚',
                image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: '#fff',
                features: ['Student Recruitment', 'Course Marketing', 'Alumni Engagement', 'Brand Development']
              },
              {
                title: 'Technology',
                description: 'Market innovative tech solutions',
                icon: '💻',
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: '#fff',
                features: ['Product Launch', 'Lead Generation', 'Content Marketing', 'Market Penetration']
              },
              {
                title: 'Hospitality',
                description: 'Boost bookings and guest engagement',
                icon: '🏨',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: '#fff',
                features: ['Booking Optimization', 'Experience Marketing', 'Review Management', 'Local SEO']
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

      {/* AI Enhancement Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2b5a9e]/5 via-purple-500/5 to-[#d9764a]/5" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-600 inline-block mb-6"
            >
              AI-Powered Marketing
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#19234d' }}>
              Enhanced with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d9764a] to-[#d9764a]">
                Artificial Intelligence
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Predictive Analytics',
                description: 'Leverage AI to forecast market trends and customer behavior for targeted campaigns',
                icon: '📊',
                benefits: ['Customer Behavior Analysis', 'Trend Forecasting', 'ROI Prediction', 'Market Intelligence']
              },
              {
                title: 'Smart Automation',
                description: 'Automate marketing workflows and campaign management with AI',
                icon: '🤖',
                benefits: ['Campaign Automation', 'Content Scheduling', 'Lead Scoring', 'Email Marketing']
              },
              {
                title: 'Personalization',
                description: 'Deliver personalized marketing experiences using machine learning',
                icon: '🎯',
                benefits: ['Custom Content', 'Dynamic Pricing', 'Product Recommendations', 'Behavioral Targeting']
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative p-8 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-6">
                      <span className="text-4xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#19234d] group-hover:text-[#2b5a9e] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                          {benefit}
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

      
    </main>
  );
};

export default DigitalMarketing;
