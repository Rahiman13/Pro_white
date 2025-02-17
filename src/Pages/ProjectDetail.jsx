import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGlobe, FaGithub, FaExternalLinkAlt, FaClock, FaUsers, FaTools } from 'react-icons/fa';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectData = {
      'real-estate-video-platform': {
        title: 'Real Estate Video Platform',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Video marketing platform for real estate professionals (BombBomb)',
        tech: ['Backend Development', 'UI Implementation', 'API Integration'],
        link: 'https://bombbomb.com/',
        fullDescription: 'A comprehensive video marketing platform enabling real estate professionals to create and manage video content effectively.',
        challenge: 'Creating a scalable video processing system with high-quality delivery.',
        solution: 'Implemented cloud-based video processing with optimized delivery networks.',
        impact: [
          'Increased user engagement by 150%',
          'Reduced video processing time by 60%',
          'Improved platform scalability',
          'Enhanced user experience'
        ]
      },
      'real-estate-management': {
        title: 'Real Estate Management',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Property management and listing platform (ExposioApp)',
        tech: ['Backend Architecture', 'Database Design', 'API Development'],
        link: 'https://exposioapp.com/',
        fullDescription: 'A comprehensive property management system for real estate professionals and agencies.',
        challenge: 'Building a scalable system to handle multiple properties and complex listing requirements.',
        solution: 'Developed a microservices architecture with robust database design for optimal performance.',
        impact: [
          'Streamlined property management process',
          'Reduced listing time by 40%',
          'Improved client satisfaction',
          'Enhanced property tracking'
        ]
      },
      'online-education-platform': {
        title: 'Online Education Platform',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Educational platform for online learning (Vidyakul)',
        tech: ['Business Analysis', 'Backend Development', 'System Architecture'],
        link: 'https://vidyakul.com/',
        fullDescription: 'An innovative online learning platform providing comprehensive educational resources.',
        challenge: 'Creating an engaging and interactive learning environment for remote education.',
        solution: 'Implemented advanced learning management system with interactive features.',
        impact: [
          'Increased student engagement by 200%',
          'Improved learning outcomes',
          'Enhanced teacher-student interaction',
          'Scalable education delivery'
        ]
      },
      'medical-application': {
        title: 'Medical Application',
        category: 'App Development',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Healthcare management application (IFEEILNCOLOR)',
        tech: ['Backend Development', 'Mobile App UI', 'Healthcare Integration'],
        link: '#',
        fullDescription: 'A comprehensive healthcare management solution for medical professionals.',
        challenge: 'Ensuring secure handling of sensitive medical data while maintaining ease of use.',
        solution: 'Developed secure architecture with HIPAA compliance and intuitive user interface.',
        impact: [
          'Improved patient care efficiency',
          'Reduced administrative time by 50%',
          'Enhanced data security',
          'Streamlined medical processes'
        ]
      },
      'manufacturing-portal': {
        title: 'Manufacturing Portal',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Manufacturing management system (Triveni)',
        tech: ['Full Stack Development', 'Process Automation', 'Reporting'],
        link: 'https://thriveni.projexino.com/',
        fullDescription: 'An end-to-end manufacturing management system for streamlined operations.',
        challenge: 'Automating complex manufacturing processes while maintaining accuracy.',
        solution: 'Implemented advanced process automation with real-time monitoring.',
        impact: [
          'Increased production efficiency by 35%',
          'Reduced operational costs',
          'Improved quality control',
          'Enhanced reporting capabilities'
        ]
      },
      'printing-business-platform': {
        title: 'Printing Business Platform',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Print business management system (PG Printing)',
        tech: ['Web Development', 'Order Management', 'Customer Portal'],
        link: 'https://pgprinting.projexino.com/',
        fullDescription: 'A comprehensive printing business management platform for order processing and customer management.',
        challenge: 'Streamlining complex printing orders and customer requirements.',
        solution: 'Developed an integrated system for order management and customer interaction.',
        impact: [
          'Reduced order processing time by 60%',
          'Improved customer satisfaction',
          'Enhanced workflow efficiency',
          'Increased business revenue'
        ]
      },
      'car-sales-application': {
        title: 'Car Sales Application',
        category: 'App Development',
        image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        description: 'Mobile app for car sales and management (CTN Car)',
        tech: ['Backend Development', 'Database Design', 'API Integration'],
        link: 'https://play.google.com/store/apps/details?id=br.com.ctncardoso.ctncar',
        fullDescription: 'A mobile application for managing car sales and inventory tracking.',
        challenge: 'Creating a user-friendly platform for complex vehicle management.',
        solution: 'Implemented robust inventory system with advanced search capabilities.',
        impact: [
          'Increased sales efficiency by 45%',
          'Improved inventory management',
          'Enhanced customer experience',
          'Streamlined sales process'
        ]
      }
    };

    setProject(projectData[id]);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[70vh] overflow-hidden"
      >
        <motion.img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white space-y-6">
              <Link to="/portfolio" className="inline-flex items-center text-white/80 hover:text-white">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Portfolio
              </Link>
              <h1 className="text-5xl font-bold">{project.title}</h1>
              <div className="flex flex-wrap gap-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <FaClock className="text-2xl text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Project Duration</p>
                <p className="font-semibold">3 Months</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <FaUsers className="text-2xl text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Team Size</p>
                <p className="font-semibold">5 Members</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <FaTools className="text-2xl text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Tech Stack</p>
                <p className="font-semibold">{project.tech.length} Technologies</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold text-gray-900">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
            </motion.section>
            
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                <p className="text-gray-700">{project.challenge}</p>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                <p className="text-gray-700">{project.solution}</p>
              </div>
            </motion.section>

            {/* Tech Stack Details */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies Used</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.tech.map((tech, index) => (
                  <div key={tech} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-gray-800">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Project Links */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Project Links</h3>
              <div className="space-y-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-700"
                >
                  <FaGlobe className="text-xl" />
                  <span>Live Website</span>
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </motion.div>

            {/* Impact & Results - Enhanced version */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6">Impact & Results</h3>
              <ul className="space-y-4">
                {project.impact.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
