import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';
// import ScrollBackground from '../components/ScrollBackground';
import NetworkBackground from '../components/NetworkBackground';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaAngular, 
  FaVuejs, 
  FaAws, 
  FaDocker, 
  FaDatabase,
  FaJava,
  FaPhp,
  FaLaravel,
  FaWordpress,
  FaGithub,
  FaFigma,
  FaSass,
  FaJs,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaMicrosoft,
  // FaIbm,
  // FaAws
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiRedux,
  SiGooglecloud,
  SiOracle,
  SiSalesforce,
  SiSap,
  SiAdobe,
  // SiIbm,
  
} from 'react-icons/si';
import HeroImage from '../assets/AboutHero.jpg';

const achievements = [
  {
    year: '2017',
    title: 'The Foundation',
    description: 'Established Projexino Web Technologies LLP as a pioneering venture.',
    longDescription: 'Started as a <span class="text-[#d9764a] font-semibold">one-person venture</span>, providing freelance web development services. Secured the <span class="text-[#2b5a9e] font-semibold">first major project</span>, a custom-built CMS. Focused on <span class="text-[#d9764a] font-semibold">PHP, WordPress, and custom web solutions</span> for early clients.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    stats: {
      firstMilestone: 'Company Formation',
      coreTechnologies: 3,
      majorProjects: 1
    }
  },
  {
    year: '2018',
    title: 'First Milestones',
    description: 'Achieved ISO Recognition and Best MSME Award.',
    longDescription: 'Received <span class="text-[#2b5a9e] font-semibold">ISO Recognition</span> and <span class="text-[#d9764a] font-semibold">Best MSME Award</span>. Team expanded with first full-time developer and designer. Diversified into <span class="text-[#2b5a9e] font-semibold">mobile app development</span>, completing over 15 successful projects.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    stats: {
      awards: 2,
      projectsDelivered: 15,
      teamSize: '3+'
    }
  },
  {
    year: '2019',
    title: 'Enterprise Solutions',
    description: 'Expanded into enterprise-level solutions and international markets.',
    longDescription: 'Developed first <span class="text-[#d9764a] font-semibold">enterprise-level SaaS product</span>. Expanded tech stack to include <span class="text-[#2b5a9e] font-semibold">ReactJS and Node.js</span>. Secured international clients while transitioning to <span class="text-[#d9764a] font-semibold">cloud-based deployments</span>.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    stats: {
      globalExpansion: '3 Markets',
      techStack: '2 New',
      projectScale: '200%'
    }
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Pioneered remote-first model and AI solutions implementation.',
    longDescription: 'Successfully shifted to <span class="text-[#2b5a9e] font-semibold">remote-first work model</span>. Developed <span class="text-[#d9764a] font-semibold">AI-powered chatbots</span> and automation solutions. Completed first <span class="text-[#2b5a9e] font-semibold">health-tech project</span> and strengthened DevOps capabilities.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    stats: {
      projectsCompleted: '50+',
      newTechnologies: 4,
      clientRetention: '95%'
    }
  },
  {
    year: '2021',
    title: 'Corporate Evolution',
    description: 'Transformed into Projexino Solutions Pvt Ltd.',
    longDescription: 'Registered as <span class="text-[#d9764a] font-semibold">Projexino Solutions Pvt Ltd</span>. Expanded into <span class="text-[#2b5a9e] font-semibold">AI analytics, cybersecurity, and blockchain</span> solutions. Secured first <span class="text-[#d9764a] font-semibold">government contract</span> and strengthened custom ERP offerings.',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    stats: {
      newServices: 3,
      teamGrowth: '100%',
      majorContracts: 2
    }
  },
  {
    year: '2022',
    title: 'Innovation Recognition',
    description: 'Received Innovative Startup Award for AI solutions.',
    longDescription: 'Launched <span class="text-[#2b5a9e] font-semibold">in-house SaaS platform</span> for small business workflow management. Expanded into <span class="text-[#d9764a] font-semibold">IoT and AI-powered automation</span>. Introduced <span class="text-[#2b5a9e] font-semibold">Progressive Web Apps (PWAs)</span> solutions.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    stats: {
      innovations: 'SaaS Platform',
      newServices: 'IoT & PWA',
      clientGrowth: '60%'
    }
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Expanded presence in North America and Europe.',
    longDescription: 'Partnered with <span class="text-[#d9764a] font-semibold">fintech and edtech startups</span>. Invested in <span class="text-[#2b5a9e] font-semibold">AI/ML R&D</span>. Enhanced security with <span class="text-[#d9764a] font-semibold">Zero Trust Architecture</span> and blockchain integration, surpassing 100+ successful deliveries.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    stats: {
      projectsDelivered: '100+',
      newMarkets: 2,
      techIntegrations: '5+'
    }
  },
  {
    year: '2024',
    title: 'Innovation & Growth',
    description: 'Awarded the ELEVATE Innovation Award.',
    longDescription: 'Received <span class="text-[#2b5a9e] font-semibold">ELEVATE Innovation Award</span>. Strengthened <span class="text-[#d9764a] font-semibold">AI-driven tools</span> development. Expanded specialized team with <span class="text-[#2b5a9e] font-semibold">AI engineers and cloud architects</span>. Initiated training programs for new tech talent.',
    image: 'https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    stats: {
      awards: 'ELEVATE Award',
      newTools: 'AI Analysis',
      teamGrowth: '40%'
    }
  },
  // {
  //   year: '2025',
  //   title: 'Global Innovation Hub',
  //   description: 'Expanding AI capabilities and establishing global innovation centers.',
  //   longDescription: 'Currently pioneering <span class="text-[#2b5a9e] font-semibold">AI Innovation Labs</span> across key markets. Building partnerships with <span class="text-[#d9764a] font-semibold">Fortune 500 companies</span>. Developing <span class="text-[#2b5a9e] font-semibold">sustainable tech solutions</span> for tomorrow.',
  //   image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  //   stats: {
  //     ongoingProjects: '15+',
  //     globalPartners: '10+',
  //     newInitiatives: '5'
  //   },
  //   isOngoing: true
  // }
];

const techStack = [
  { icon: <FaReact />, name: 'React', color: 'text-[#61DAFB]' },
  { icon: <SiNextdotjs />, name: 'Next.js', color: 'text-black' },
  { icon: <FaNodeJs />, name: 'Node.js', color: 'text-[#339933]' },
  { icon: <SiTypescript />, name: 'TypeScript', color: 'text-[#3178C6]' },
  { icon: <FaJs />, name: 'JavaScript', color: 'text-[#F7DF1E]' },
  { icon: <FaPython />, name: 'Python', color: 'text-[#3776AB]' },
  { icon: <FaAngular />, name: 'Angular', color: 'text-[#DD0031]' },
  { icon: <FaVuejs />, name: 'Vue.js', color: 'text-[#4FC08D]' },
  { icon: <FaAws />, name: 'AWS', color: 'text-[#232F3E]' },
  { icon: <FaDocker />, name: 'Docker', color: 'text-[#2496ED]' },
  { icon: <SiMongodb />, name: 'MongoDB', color: 'text-[#47A248]' },
  { icon: <SiPostgresql />, name: 'PostgreSQL', color: 'text-[#336791]' },
  { icon: <SiMysql />, name: 'MySQL', color: 'text-[#4479A1]' },
  { icon: <FaJava />, name: 'Java', color: 'text-[#007396]' },
  { icon: <FaPhp />, name: 'PHP', color: 'text-[#777BB4]' },
  { icon: <FaLaravel />, name: 'Laravel', color: 'text-[#FF2D20]' },
  { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-[#06B6D4]' },
  { icon: <FaSass />, name: 'Sass', color: 'text-[#CC6699]' },
  { icon: <SiFirebase />, name: 'Firebase', color: 'text-[#FFCA28]' },
  { icon: <SiRedux />, name: 'Redux', color: 'text-[#764ABC]' },
  { icon: <FaGithub />, name: 'GitHub', color: 'text-[#181717]' },
  { icon: <FaFigma />, name: 'Figma', color: 'text-[#F24E1E]' },
];

const locations = [
  {
    city: 'New York',
    address: '123 Tech Avenue, NY 10001'
  },
  {
    city: 'London',
    address: '456 Innovation Street, EC1A 1BB'
  },
  {
    city: 'Singapore',
    address: '789 Digital Road, 018956'
  }
];

const About = () => {
  const { width, height } = useWindowSize();
  const [showCelebration, setShowCelebration] = useState(false);

  return (
    <main className="bg-white">
      {/* Enhanced Hero Section with Ultra-Modern Design */}
      <section className="hero-section relative min-h-screen overflow-hidden bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50 backdrop-blur-lg">
        <NetworkBackground />
        
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_50%)]" />
          
          {/* Geometric Patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-conic from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-spin-slower" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-conic from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-full blur-3xl animate-spin-reverse" />
          </div>

          {/* Decorative Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M0,50 Q25,45 50,50 T100,50"
                stroke="url(#gradient-line)"
                strokeWidth="0.1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(96,165,250,0.2)" />
                  <stop offset="50%" stopColor="rgba(168,85,247,0.2)" />
                  <stop offset="100%" stopColor="rgba(96,165,250,0.2)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Main Content with Enhanced Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Enhanced Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left pt-20"
            >
              {/* Ultra-Modern Innovation Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center space-x-3 mb-8 glass-morphism px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-conic from-blue-400 via-purple-400 to-pink-400 rounded-full animate-spin-slow group-hover:animate-spin" />
                  <div className="relative bg-white rounded-full p-2">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-r from-blue-500 to-purple-500" />
                    </span>
                  </div>
                </div>
                <span style={{ color: '#d9764a' }} className="font-semibold">
                  Our Journey of Innovation
                </span>
              </motion.div>

              {/* Enhanced Heading with 3D Effect */}
              <div className="relative mb-12 perspective-1000">
                <motion.h1
                  initial={{ opacity: 0, rotateX: -90 }}
                  animate={{ opacity: 1, rotateX: 0 }}
                  transition={{ duration: 1 }}
                  className="text-7xl lg:text-8xl font-bold leading-tight"
                >
                  <TypeAnimation
                    sequence={[
                      'Our Story',
                      1000,
                      'Our Vision',
                      1000,
                      'Our Mission',
                      1000,
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                    style={{ color: '#d9764a' }}
                    className="block"
                  />
                  <motion.span
                    style={{ color: '#19234d' }}
                    className="block mt-4 text-6xl lg:text-7xl transform hover:scale-105 transition-transform duration-300"
                  >
                    Shaping Tomorrow
                  </motion.span>
                </motion.h1>
              </div>

              {/* Enhanced Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
              >
                {/* Projects Completed */}
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-3">
                  <h3 className="text-4xl font-bold" >
                    <CountUp 
                      start={0} 
                      end={99} 
                      duration={2.5} 
                      suffix="+" 
                      enableScrollSpy
                      scrollSpyOnce
                      delay={2.5}
                    />
                  </h3>
                  <p className="text-sm mt-2 text-gray-600 font-medium">Projects Completed</p>
                </div>

                {/* Happy Clients */}
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-3">
                  <h3 className="text-4xl font-bold" >
                    <CountUp 
                      start={0} 
                      end={110} 
                      duration={2.5} 
                      suffix="+" 
                      enableScrollSpy
                      scrollSpyOnce
                      delay={2.5}
                    />
                  </h3>
                  <p className="text-sm mt-2 text-gray-600 font-medium">Happy Clients</p>
                </div>

                {/* Team Members */}
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-3">
                  <h3 className="text-4xl font-bold" >
                    <CountUp 
                      start={0} 
                      end={30} 
                      duration={2.5} 
                      suffix="+" 
                      enableScrollSpy
                      scrollSpyOnce
                      delay={2.5}
                    />
                  </h3>
                  <p className="text-sm mt-2 text-gray-600 font-medium">Team Members</p>
                </div>

                {/* Years of Excellence */}
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-3">
                  <h3 className="text-4xl font-bold" >
                    <CountUp 
                      start={0} 
                      end={5} 
                      duration={2.5} 
                      suffix="+" 
                      enableScrollSpy
                      scrollSpyOnce
                      delay={2.5}
                    />
                  </h3>
                  <p className="text-sm mt-2 text-gray-600 font-medium">Years of Excellence</p>
                </div>
              </motion.div>

              {/* Enhanced Description with Glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl" />
                <div className="relative glass-card p-8 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Pioneering the future of digital transformation with innovative solutions 
                    that push the boundaries of what's possible.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Ultra-Modern Creative Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block relative z-20"
            >
              <div className="relative perspective-1000">
                {/* 3D Frame Effect */}
                <div className="absolute inset-0 bg-gradient-conic from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl transform rotate-6 scale-105 hover:rotate-0 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl transform -rotate-3 scale-105" />
                
                {/* Main Image with Enhanced Effects */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500"
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                >
                  <div className="aspect-w-4 aspect-h-3 group">
                    <img
                      src={HeroImage}
                      alt="Our Journey"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-purple-600/20 to-transparent mix-blend-overlay group-hover:opacity-75 transition-opacity duration-300" />
                  </div>
                  
                  {/* Enhanced Decorative Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-conic from-blue-400 via-purple-400 to-pink-400 rounded-full blur-xl opacity-75"
                    animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-conic from-purple-400 via-pink-400 to-blue-400 rounded-full blur-xl opacity-75"
                    animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-200/20 to-blue-200/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#19234d' }}>
                Our Story of{' '}
                <span style={{ color: '#d9764a' }}>
                  Innovation
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to transform the digital landscape, Projexino has evolved into a leading technology powerhouse. Our journey began with a simple belief: that technology should empower and enhance human potential.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to be at the forefront of digital innovation, helping businesses worldwide achieve their technological aspirations through cutting-edge solutions and unparalleled expertise.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Team collaboration"
                className="relative z-10 rounded-2xl shadow-xl transform -rotate-3 transition-transform hover:rotate-0 duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-conic from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin-slower" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-conic from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-reverse" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 text-sm font-semibold mb-4">
              OUR PRINCIPLES
            </span>
            <h2 className="text-5xl font-bold mb-4" style={{ color: '#19234d' }}>
              Our Core{' '}
              <span style={{ color: '#d9764a' }}>Values</span>
            </h2>
            {/* <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" /> */}
            <p style={{ color: '#19234d' }} className="text-xl max-w-2xl mx-auto">
              The principles that drive our success and shape our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Innovation First',
                description: 'Pushing boundaries and embracing new technologies to create groundbreaking solutions',
                icon: '💡',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: 'from-blue-500 to-purple-500'
              },
              {
                title: 'Client Success',
                description: 'Your success is our primary measure of achievement and drives everything we do',
                icon: '🎯',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Excellence',
                description: 'Delivering nothing but the highest quality solutions with meticulous attention to detail',
                icon: '⭐',
                image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                color: 'from-pink-500 to-orange-500'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative h-full rounded-2xl bg-white p-1 shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-10 blur transition-all duration-300 group-hover:opacity-20`} />
                  
                  <div className="relative h-full rounded-xl bg-white p-8">
                    {/* Image Section */}
                    <div className="relative mb-6 overflow-hidden rounded-xl">
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={value.image}
                          alt={value.title}
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-2xl shadow-lg">
                          {value.icon}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>

                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-gradient-to-br from-purple-50/80 via-white/80 to-blue-50/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#19234d] mb-4">
              Meet Our{' '}
              <span style={{ color: '#de7527' }}>
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600">The brilliant minds behind our success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
              },
              {
                name: 'Sarah Johnson',
                role: 'CTO',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
              },
              {
                name: 'Michael Chen',
                role: 'Design Director',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
              },
              {
                name: 'Emily Brown',
                role: 'Tech Lead',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-300">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Enhanced Company Achievements Section */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute w-96 h-96 -left-12 -top-12 bg-[#2b5a9e]/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute w-96 h-96 -right-12 -bottom-12 bg-[#d9764a]/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 text-sm font-semibold mb-4">
              OUR JOURNEY OF EXCELLENCE
            </span>
            <h2 className="text-5xl font-bold mt-4 mb-6" style={{ color: '#19234d' }}>
              Milestone{' '}
              <span style={{ color: '#d9764a' }}>Achievements</span>
            </h2>

            {/* <div className="w-24 h-1 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] mx-auto rounded-full" /> */}
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#2b5a9e] via-[#d9764a] to-[#19234d]" />

            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
              >
                {/* Left Side Content */}
                {index % 2 === 0 && (
                  <div className="md:text-right group relative">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e]/5 to-[#d9764a]/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                      <div className="relative p-8 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] text-white text-2xl font-bold mb-6">
                          {achievement.year}
                        </div>
                        <h3 className="text-2xl font-bold mb-4" style={{ color: '#19234d' }}>
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                      
                      {/* Hover Content - Appears on Right Side */}
                      <div className="absolute -top-12 -right-[calc(95%+4rem)] w-[99%] opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform scale-95 group-hover:scale-100 transition-all duration-300">
                          {achievement.image && (
                            <img
                              src={achievement.image}
                              alt={achievement.title}
                              className="w-full h-32 object-cover rounded-xl mb-4"
                            />
                          )}
                          <p className="text-gray-800 mb-4 text-left text-sm" 
                             dangerouslySetInnerHTML={{ __html: achievement.longDescription || achievement.description }}>
                          </p>
                          {achievement.stats && (
                            <div className="grid grid-cols-3 gap-3 w-full mt-auto">
                              {Object.entries(achievement.stats).map(([key, value]) => (
                                <div key={key} className="text-center">
                                  <div className="text-lg font-bold" style={{ color: '#2b5a9e' }}>
                                    {value}
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-8 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] border-4 border-white" />
                </div>

                {/* Right Side Content */}
                {index % 2 === 1 && (
                  <div className="md:col-start-2 group relative">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e]/5 to-[#d9764a]/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                      <div className="relative p-8 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] text-white text-2xl font-bold mb-6">
                          {achievement.year}
                        </div>
                        <h3 className="text-2xl font-bold mb-4" style={{ color: '#19234d' }}>
                          {achievement.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Content - Appears on Left Side */}
                    <div className="absolute -top-12 -left-[calc(95%+4rem)] w-[99%] opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto">
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform scale-95 group-hover:scale-100 transition-all duration-300">
                        {achievement.image && (
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-32 object-cover rounded-xl mb-4"
                          />
                        )}
                        <p className="text-gray-800 mb-4 text-left text-sm" 
                           dangerouslySetInnerHTML={{ __html: achievement.longDescription || achievement.description }}>
                        </p>
                        {achievement.stats && (
                          <div className="grid grid-cols-3 gap-3 w-full mt-auto">
                            {Object.entries(achievement.stats).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-lg font-bold" style={{ color: '#2b5a9e' }}>
                                  {value}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Empty Column for Spacing */}
                {index % 2 === 1 && <div className="hidden md:block" />}
              </motion.div>
            ))}
          </div>

          {/* Bottom Decorative Element */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setShowCelebration(true)}
            className="w-32 h-32 mx-auto mt-16 mb-8 relative"
          >
            {/* Outer Decorative Ring */}
            <motion.div
              className="absolute -inset-4 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="w-full h-full border-4 border-dashed border-[#2b5a9e]/30 rounded-full" />
            </motion.div>

            {/* Confetti Effect */}
            {showCelebration && (
              <div className="absolute -inset-20">
                <ReactConfetti
                  width={300}
                  height={300}
                  numberOfPieces={100}
                  recycle={false}
                  run={true}
                  gravity={0.2}
                  tweenDuration={5000}
                  initialVelocityX={5}
                  initialVelocityY={-10}
                  colors={['#2b5a9e', '#d9764a', '#FFD700', '#4CAF50', '#9C27B0']}
                  onComplete={() => setShowCelebration(false)}
                />
              </div>
            )}

            {/* Glowing Background Orbs */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                className="absolute inset-0 bg-blue-500/30 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 bg-orange-500/30 rounded-full blur-2xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

            {/* Trophy Container */}
            <motion.div
              className="relative w-full h-full rounded-full border-4 border-[#2b5a9e] bg-gradient-to-br from-white to-gray-50 flex items-center justify-center overflow-hidden shadow-2xl"
              animate={showCelebration ? {
                y: [-5, 5, -5],
                rotate: [-5, 5, -5],
                scale: [1, 1.1, 1]
              } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Shimmering Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                animate={{
                  x: ['-100%', '100%'],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Trophy Icon */}
              <motion.div
                className="relative z-10"
                animate={showCelebration ? {
                  scale: [1, 1.2, 1],
                  rotateY: [0, 360],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-5xl filter drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">🏆</span>
                
                {/* Sparkles */}
                {showCelebration && (
                  <>
                    <motion.span
                      className="absolute -top-4 -right-4 text-2xl"
                      animate={{ rotate: 360, scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✨
                    </motion.span>
                    <motion.span
                      className="absolute -bottom-4 -left-4 text-2xl"
                      animate={{ rotate: -360, scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✨
                    </motion.span>
                  </>
                )}
              </motion.div>
            </motion.div>

            {/* Radiating Circles */}
            <div className="absolute inset-0 -z-10">
              {showCelebration && (
                <>
                  <motion.div
                    className="absolute inset-0 border-2 border-[#2b5a9e]/20 rounded-full"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 2, opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 border-2 border-[#d9764a]/20 rounded-full"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 2, opacity: [0, 1, 0] }}
                    transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                  />
                </>
              )}
            </div>

            {/* Current Initiatives Sections */}
            <div className="absolute inset-0 flex items-center justify-between w-[800px] -translate-x-1/2 left-1/2">
              {/* Left Side Initiatives */}
              <motion.div 
                className="flex flex-col items-end gap-4 w-64"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { 
                    title: 'AI Innovation Labs',
                    icon: '🧠',
                    gradient: 'from-blue-500/20 to-purple-500/20',
                    description: 'Pioneering AI Solutions'
                  },
                  { 
                    title: 'Global Partnerships',
                    icon: '🌐',
                    gradient: 'from-emerald-500/20 to-teal-500/20',
                    description: 'Expanding Worldwide'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + (index * 0.2) }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl blur-sm transition-all duration-300 group-hover:blur-md`} />
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#2b5a9e]/10 to-[#d9764a]/10">
                          <span className="text-xl transform transition-transform duration-300 group-hover:scale-125">
                            {item.icon}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#19234d]">{item.title}</h4>
                          <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Center Space for Trophy */}
              <div className="w-32" />

              {/* Right Side Initiatives */}
              <motion.div 
                className="flex flex-col items-start gap-4 w-64"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { 
                    title: 'Sustainable Tech',
                    icon: '🌱',
                    gradient: 'from-amber-500/20 to-orange-500/20',
                    description: 'Eco-friendly Innovation'
                  },
                  { 
                    title: 'Digital Transformation',
                    icon: '💫',
                    gradient: 'from-purple-500/20 to-pink-500/20',
                    description: 'Future-Ready Solutions'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + (index * 0.2) }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl blur-sm transition-all duration-300 group-hover:blur-md`} />
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#2b5a9e]/10 to-[#d9764a]/10">
                          <span className="text-xl transform transition-transform duration-300 group-hover:scale-125">
                            {item.icon}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#19234d]">{item.title}</h4>
                          <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Progress Indicator */}
            <motion.div
              className="absolute -left-4 top-44 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="text-sm font-medium text-gray-600 mb-2">Journey Progress</div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#2b5a9e] to-[#d9764a]"
                  initial={{ width: 0 }}
                  animate={{ width: '80%' }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">80% of 2025 Goals</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="inline-flex items-center space-x-2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6"
            >
              <span className="animate-pulse-fast w-2 h-2 rounded-full bg-blue-400"></span>
              <span className="text-white/80 text-sm font-medium">Innovation Hub</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Strategic
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Partners
            </h2>
            <p className="text-xl text-white/80 mt-4">
              Collaborating with industry leaders to deliver excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Microsoft', icon: <FaMicrosoft />, level: 'Gold Partner' },
              { name: 'Google Cloud', icon: <SiGooglecloud />, level: 'Premier Partner' },
              { name: 'AWS', icon: <FaAws />, level: 'Advanced Partner' },
              // { name: 'IBM', icon: <FaIbm />, level: 'Solutions Partner' },
              { name: 'Oracle', icon: <SiOracle />, level: 'Gold Partner' },
              { name: 'Salesforce', icon: <SiSalesforce />, level: 'Consulting Partner' },
              { name: 'SAP', icon: <SiSap />, level: 'Silver Partner' },
              { name: 'Adobe', icon: <SiAdobe />, level: 'Solution Partner' }
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-white/90">{partner.icon}</div>
                <h3 className="text-white font-semibold mb-2">{partner.name}</h3>
                <div className="mt-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                    {partner.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 -left-12 -top-12 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute w-96 h-96 -right-12 -bottom-12 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-3" style={{ color: '#19234d' }}>
              Global<span style={{ color: '#d9764a' }}>Presence</span>
            </h2>
            <p style={{ color: '#19234d' }} className="text-xl">
              Serving clients worldwide from our strategic locations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6 md:col-span-2"
            >
              {[
                {
                  icon: <FaMapMarkerAlt className="text-2xl" />,
                  title: 'Our Office',
                  content: ['P No 305 Sa Society Khanamet', 'Kondapur, Hyderabad', 'Telangana 500084'],
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: <FaEnvelope className="text-2xl" />,
                  title: 'Email Us',
                  content: ['hello@projexino.com'],
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: <FaPhone className="text-2xl" />,
                  title: 'Call Us',
                  content: ['+91 9601843090'],
                  color: 'from-orange-500 to-red-500'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
                  <div className="relative p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        {item.content.map((line, i) => (
                          <p key={i} className="text-gray-600">{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative md:col-span-3"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3027470973836!2d78.37669631487752!3d17.458982988030458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8f5d40e7%3A0x7f0c7b7c4dd42f39!2sKhanamet%2C%20Kondapur%2C%20Hyderabad%2C%20Telangana%20500084!5e0!3m2!1sen!2sin!4v1647850844221!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="hover:opacity-90 transition-opacity duration-300"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
