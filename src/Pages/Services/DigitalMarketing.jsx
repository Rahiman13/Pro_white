import React from 'react';
import { motion } from 'framer-motion';

const DigitalMarketing = () => {
  const services = [
    {
      title: 'Search Engine Optimization',
      description: 'Improve your website visibility and organic traffic',
      icon: '🔍'
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage with your audience across platforms',
      icon: '📱'
    },
    {
      title: 'Content Marketing',
      description: 'Create valuable content that converts',
      icon: '✍️'
    },
    {
      title: 'Email Marketing',
      description: 'Build and nurture customer relationships',
      icon: '📧'
    }
  ];

  const stats = [
    { label: 'Clients Served', value: '200+' },
    { label: 'Campaigns Managed', value: '500+' },
    { label: 'ROI Generated', value: '300%' },
    { label: 'Industry Experience', value: '10 Years' }
  ];

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Digital Marketing Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Drive growth and reach your target audience with our comprehensive digital marketing solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Ready to Grow Your Business?</h2>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default DigitalMarketing;
