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

  const services = [
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
      level: 'Expert',
      description: 'Data Analytics',
      gradient: 'from-[#F4B400]/20 to-[#F4B400]/40',
      color: 'text-[#F4B400]'
    },
    {
      name: 'Mailchimp',
      icon: <SiMailchimp />,
      level: 'Advanced',
      description: 'Email Marketing',
      gradient: 'from-[#FFE01B]/20 to-[#FFE01B]/40',
      color: 'text-[#FFE01B]'
    },
    {
      name: 'HubSpot',
      icon: <SiHubspot />,
      level: 'Expert',
      description: 'Marketing Hub',
      gradient: 'from-[#FF7A59]/20 to-[#FF7A59]/40',
      color: 'text-[#FF7A59]'
    },
    {
      name: 'Google Ads',
      icon: <SiGoogleads />,
      level: 'Expert',
      description: 'PPC Advertising',
      gradient: 'from-[#4285F4]/20 to-[#4285F4]/40',
      color: 'text-[#4285F4]'
    },
    {
      name: 'Instagram',
      icon: <SiInstagram />,
      level: 'Advanced',
      description: 'Social Media',
      gradient: 'from-[#E4405F]/20 to-[#E4405F]/40',
      color: 'text-[#E4405F]'
    },
    {
      name: 'LinkedIn',
      icon: <SiLinkedin />,
      level: 'Expert',
      description: 'B2B Marketing',
      gradient: 'from-[#0A66C2]/20 to-[#0A66C2]/40',
      color: 'text-[#0077B5]'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      level: 'Advanced',
      description: 'Social Media',
      gradient: 'from-[#1DA1F2]/20 to-[#1DA1F2]/40',
      color: 'text-[#1DA1F2]'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      level: 'Advanced',
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
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#2b5a9e' }}>{service.title}</h3>
                  <p className="text-sm" style={{ color: '#19234d' }}>{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-600 inline-block mb-6"
            >
              Our Services
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#19234d' }}>
              Digital Marketing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d9764a] to-[#d9764a]">
                Solutions We Offer
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl h-[400px]"
              >
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute inset-x-0 bottom-0">
                  <div className="p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-200 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-gray-200">
                          <span className="w-2 h-2 bg-white rounded-full mr-2" />
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
              <span className="animate-pulse-fast w-2 h-2 rounded-full bg-blue-400"></span>
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

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-blue-600 inline-block mb-6"
            >
              Our Process
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#19234d' }}>
              How We Drive
              <span style={{ color: '#d9764a' }} className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Your Digital Success
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { phase: 'Research', icon: '🔍', description: 'Market analysis and strategy planning' },
              { phase: 'Implementation', icon: '⚡', description: 'Execute marketing campaigns' },
              { phase: 'Optimization', icon: '📈', description: 'Monitor and improve performance' },
              { phase: 'Reporting', icon: '📊', description: 'Analytics and ROI tracking' }
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

export default DigitalMarketing;
