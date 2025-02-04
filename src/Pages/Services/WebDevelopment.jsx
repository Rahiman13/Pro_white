import React from 'react';
import { motion } from 'framer-motion';

const WebDevelopment = () => {
  const features = [
    {
      title: 'Custom Web Applications',
      description: 'Tailored solutions built to meet your specific business needs',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Scalable online stores with secure payment integration',
      icon: '🛍️',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'API Development',
      description: 'Robust APIs for seamless system integration',
      icon: '🔄',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Progressive Web Apps',
      description: 'Mobile-first applications with offline capabilities',
      icon: '📱',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  const technologies = [
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Node.js', icon: '/icons/nodejs.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    { name: 'AWS', icon: '/icons/aws.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section with Video Background */}
      <div className="relative h-[70vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/coding-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90">
          <div className="h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white px-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Web Development
                <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  That Drives Growth
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
                Transform your digital presence with our cutting-edge solutions
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Features Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[300px] overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-4xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section with Glass Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative rounded-3xl overflow-hidden mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-xl"></div>
          <div className="relative p-12">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-4" />
                  <span className="text-white font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process Section with 3D Cards */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Planning', desc: 'Requirements & Scope' },
              { step: '02', title: 'Design', desc: 'UI/UX & Architecture' },
              { step: '03', title: 'Development', desc: 'Clean & Efficient Code' },
              { step: '04', title: 'Launch', desc: 'Testing & Deployment' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-300">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default WebDevelopment; 