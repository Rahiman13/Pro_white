import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://placehold.co/600x400',
      description: 'A full-featured online shopping platform'
    },
    {
      title: 'Healthcare App',
      category: 'App Development',
      image: 'https://placehold.co/600x400',
      description: 'Mobile application for patient management'
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      image: 'https://placehold.co/600x400',
      description: 'Modern website for a financial firm'
    },
    {
      title: 'Social Media Campaign',
      category: 'Digital Marketing',
      image: 'https://placehold.co/600x400',
      description: 'Successful marketing campaign for retail brand'
    }
  ];

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Our Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
