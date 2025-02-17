import React from 'react';
import { motion } from 'framer-motion';
import NetworkBackground from '../components/NetworkBackground';
import { FaGavel, FaHandshake } from 'react-icons/fa';

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.",
        "These terms apply to all visitors, users, and others who access or use our services."
      ]
    },
    {
      title: "2. Services Provided",
      content: [
        "Web and app development services, including custom website design",
        "Mobile app development and ongoing maintenance",
        "Digital marketing and optimization services",
        "UI/UX design and consulting services"
      ]
    },
    {
      title: "3. User Responsibilities",
      content: [
        "Use our services in compliance with all applicable laws and regulations",
        "Maintain the confidentiality of your account information",
        "Take responsibility for all activities under your account",
        "Provide accurate and complete information when using our services"
      ]
    },
    {
      title: "4. Payment Terms",
      content: [
        "Payment is due upon receipt of invoice unless otherwise agreed in writing",
        "Late payments may result in service suspension or termination",
        "All fees are exclusive of applicable taxes and duties",
        "We reserve the right to modify our pricing with appropriate notice"
      ]
    },
    {
      title: "5. Intellectual Property",
      content: [
        "All content is the property of Projexino or its licensors",
        "Protected by copyright and other intellectual property laws",
        "No reproduction or derivative works without express written permission",
        "Respect for third-party intellectual property rights"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50">
      <section className="relative min-h-[50vh] overflow-hidden">
        <NetworkBackground />
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_50%)]" />
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[120px] animate-float-slow delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center space-x-2 mb-6 glass-morphism px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
            >
              <FaGavel className="text-blue-600 text-xl" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b5a9e] to-[#d9764a]">
                Legal Agreement
              </span>
            </motion.div>

            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#19234d] to-[#141e40]">
                Terms of{' '}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#de7527] to-[#de7527]">
                Service
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Please read these terms carefully before using our services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#19234d] to-[#141e40]">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                        </div>
                        <p className="text-gray-600 leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mt-16 bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <FaHandshake className="text-4xl mx-auto mb-4 text-blue-600" />
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#19234d] to-[#141e40]">
                Questions About Our Terms?
              </h2>
              <p className="text-gray-600">
                If you have any questions, please contact us at{' '}
                <a 
                  href="mailto:hello@projexino.com" 
                  className="text-blue-600 hover:text-blue-700 transition-colors underline decoration-2 decoration-blue-200 hover:decoration-blue-500"
                >
                  hello@projexino.com
                </a>
              </p>
              <p className="text-gray-500 mt-8">
                Last Updated: February 2025
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;
