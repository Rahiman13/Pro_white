import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaAndroid, FaReact } from 'react-icons/fa';
import { SiFlutter, SiKotlin, SiSwift } from 'react-icons/si';

const AppDevelopment = () => {
  const services = [
    {
      title: 'iOS Development',
      description: 'Native iOS applications with stunning UIs and smooth performance',
      icon: <FaApple className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      color: 'from-gray-900 to-black'
    },
    {
      title: 'Android Development',
      description: 'Feature-rich Android apps that users love',
      icon: <FaAndroid className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      color: 'from-green-800 to-green-900'
    },
    {
      title: 'Cross-Platform Apps',
      description: 'Build once, deploy everywhere with React Native',
      icon: <FaReact className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      color: 'from-blue-800 to-blue-900'
    },
    {
      title: 'Flutter Development',
      description: 'Beautiful native apps for all platforms',
      icon: <SiFlutter className="text-5xl" />,
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      color: 'from-sky-800 to-blue-900'
    }
  ];

  const technologies = [
    { name: 'Swift', icon: <SiSwift />, color: 'bg-orange-500' },
    { name: 'Kotlin', icon: <SiKotlin />, color: 'bg-purple-500' },
    { name: 'React Native', icon: <FaReact />, color: 'bg-blue-500' },
    { name: 'Flutter', icon: <SiFlutter />, color: 'bg-sky-500' }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section with 3D Phone Model */}
      <div className="relative h-[80vh] overflow-hidden bg-gradient-to-b from-black to-blue-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 h-full flex items-center justify-center"
        >
          <div className="text-center px-4">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative w-32 h-64 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl transform rotate-12 animate-float"></div>
                <div className="absolute inset-0 bg-black rounded-3xl -rotate-12 animate-float delay-100"></div>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              App Development
              <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                For The Future
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your ideas into powerful mobile experiences
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Start Your App Journey
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Services with Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-90`}></div>
              </div>
              <div className="relative h-full p-8 flex flex-col justify-end">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack with Floating Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative rounded-3xl overflow-hidden mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-blue-900"></div>
          <div className="relative p-12">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className={`${tech.color} p-6 rounded-full text-white text-4xl mb-4 shadow-lg`}>
                    {tech.icon}
                  </div>
                  <span className="text-white font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 h-full w-px bg-gradient-to-b from-blue-500 to-purple-500"></div>
          <div className="space-y-16">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your vision' },
              { step: '02', title: 'Design', desc: 'Creating the perfect UX' },
              { step: '03', title: 'Development', desc: 'Building with precision' },
              { step: '04', title: 'Testing', desc: 'Ensuring perfection' },
              { step: '05', title: 'Launch', desc: 'Taking flight' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className="relative w-1/2 bg-gradient-to-r from-blue-900 to-purple-900 p-8 rounded-2xl">
                  <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 
                    ${index % 2 === 0 ? '-right-8' : '-left-8'}"></div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                  <p className="text-gray-300">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppDevelopment; 