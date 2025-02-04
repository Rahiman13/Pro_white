import React from 'react';
import { motion } from 'framer-motion';

const WebDesign = () => {
  const services = [
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance engagement',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Responsive Design',
      description: 'Websites that work seamlessly across all devices',
      icon: '📱',
      image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Brand Identity',
      description: 'Cohesive visual language for your digital presence',
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      title: 'Prototyping',
      description: 'Interactive mockups for testing and validation',
      icon: '🔄',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section with Parallax */}
      <div className="relative h-[60vh] overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
              Web Design Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Create stunning, user-friendly websites that captivate your audience
            </p>
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated shapes */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20 blur-3xl animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full -bottom-20 -right-20 blur-3xl animate-pulse delay-700"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Services Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0"></div>
              </div>
              <div className="relative p-8 h-full flex flex-col justify-end text-white">
                <span className="text-4xl mb-4">{service.icon}</span>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-xl"></div>
          <div className="relative p-12">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Design Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Research', desc: 'Understanding user needs' },
                { step: '02', title: 'Wireframe', desc: 'Structure and flow' },
                { step: '03', title: 'Design', desc: 'Visual aesthetics' },
                { step: '04', title: 'Deliver', desc: 'Launch and optimize' }
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
    </main>
  );
};

export default WebDesign;
