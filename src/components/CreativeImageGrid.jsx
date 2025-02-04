import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiPlay } from 'react-icons/fi';

const CreativeImageGrid = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&auto=format&fit=crop&q=90",
      delay: 0,
      className: "col-span-4 row-span-3 rounded-[4rem] min-h-[500px] hover:scale-95 origin-center",
      title: "Digital Innovation",
      category: "Technology",
      description: "Transforming ideas into digital reality",
      stats: { projects: "50+", clients: "30+" },
      tags: ['AI', 'ML', 'Cloud']
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&auto=format&fit=crop&q=90",
      delay: 0.2,
      className: "col-span-2 row-span-2 rounded-[3rem] min-h-[250px] translate-x-12 translate-y-24 hover:-translate-y-4",
      title: "Smart Solutions",
      category: "Innovation",
      description: "Intelligent solutions for modern challenges",
      stats: { projects: "40+", clients: "25+" },
      tags: ['IoT', 'Analytics', '5G']
    },
    {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&auto=format&fit=crop&q=90",
      delay: 0.4,
      className: "col-span-2 row-span-2 rounded-[3rem] min-h-[250px] -translate-x-12 translate-y-24 hover:-translate-y-4",
      title: "Future Tech",
      category: "Development",
      description: "Building tomorrow's technology today",
      stats: { projects: "35+", clients: "20+" },
      tags: ['Web3', 'Blockchain', 'AR']
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=1000&auto=format&fit=crop&q=90",
      delay: 0.6,
      className: "col-span-4 row-span-3 rounded-[4rem] min-h-[500px] translate-y-12 hover:scale-95 origin-center",
      title: "Next Gen",
      category: "AI & ML",
      description: "Advanced AI solutions for business growth",
      stats: { projects: "45+", clients: "28+" },
      tags: ['AI', 'Neural Networks', 'Deep Learning']
    }
  ];

  return (
    <div className="relative w-full max-w-[1400px] mx-auto p-16 h-[90vh] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[conic-gradient(at_center,rgb(59,130,246,0.1),rgb(147,51,234,0.1),rgb(59,130,246,0.1))] animate-spin-slow" />
      <div className="absolute inset-0 backdrop-blur-[100px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
      
      <div className="relative grid grid-cols-6 gap-8 w-full h-full perspective-[2000px] transform-gpu">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden ${image.className} group cursor-pointer transition-all duration-700 ease-out`}
            initial={{ opacity: 0, y: 100, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ 
              delay: image.delay,
              duration: 1,
              type: "spring",
              stiffness: 30
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.4 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1.1 }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 1 }}
            />
            
            <motion.div
              className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileHover={{ opacity: 1, y: 0 }}
            >
              <motion.div 
                className="flex flex-col gap-4"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
              >
                <span className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl text-white text-sm w-fit">
                  {image.category}
                </span>
                
                <h3 className="text-3xl font-bold text-white">
                  {image.title}
                </h3>
                
                <p className="text-white/80 text-lg max-w-[80%]">
                  {image.description}
                </p>
                
                <div className="flex gap-3 mt-4">
                  {image.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl text-white/90 text-sm border border-white/10 hover:bg-white/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CreativeImageGrid; 