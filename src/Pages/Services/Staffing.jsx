import React from 'react';
import { motion } from 'framer-motion';

const Staffing = () => {
  const services = [
    {
      title: 'IT Recruitment',
      description: 'Find top tech talent for your organization',
      icon: '👨‍💻'
    },
    {
      title: 'Contract Staffing',
      description: 'Flexible workforce solutions for projects',
      icon: '📋'
    },
    {
      title: 'Executive Search',
      description: 'Leadership talent acquisition services',
      icon: '👔'
    },
    {
      title: 'Team Augmentation',
      description: 'Scale your team with skilled professionals',
      icon: '🤝'
    }
  ];

  const expertise = [
    'Software Development',
    'UI/UX Design',
    'Project Management',
    'Digital Marketing',
    'Data Science',
    'Cloud Computing'
  ];

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Staffing Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with top talent and build high-performing teams with our comprehensive staffing solutions.
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
          <h2 className="text-2xl font-bold mb-8 text-center">Areas of Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {expertise.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center"
              >
                <span className="font-semibold">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Looking for Top Talent?</h2>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Contact Our Team
          </button>
        </div>
      </div>
    </main>
  );
};

export default Staffing;
