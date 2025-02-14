import React from 'react';
import { motion } from 'framer-motion';
import NetworkBackground from '../components/NetworkBackground';
import { FaShieldAlt, FaUserLock, FaHandshake } from 'react-icons/fa';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "What Information Do We Collect?",
      content: [
        "Personal Information: When you create an account, contact us, or use our services, we may collect personal information such as your name, email address, phone number, and physical address.",
        "Usage Information: We may collect information about your interactions with our website and services, including your IP address, browser type, device type, and usage patterns.",
        "Cookies and Tracking Technologies: We use cookies and other tracking technologies to collect information about your browsing habits and usage patterns."
      ]
    },
    {
      title: "How Do We Use Your Information?",
      content: [
        "Provide and Improve Our Services: We use your information to provide and improve our services, including to process transactions, respond to inquiries, and enhance your user experience.",
        "Communicate with You: We use your information to communicate with you, including to send you updates, notifications, and promotional materials.",
        "Analyze and Optimize Our Website: We use your information to analyze and optimize our website and services, including to track usage patterns and identify areas for improvement."
      ]
    },
    {
      title: "How Do We Protect Your Information?",
      content: [
        "Encryption: We use encryption to protect your personal information and financial transactions.",
        "Firewalls and Access Controls: We use firewalls and access controls to restrict access to your information.",
        "Data Protection Policies: We have implemented data protection policies and procedures to ensure that your information is handled and stored securely."
      ]
    },
    {
      title: "How Do We Share Your Information?",
      content: [
        "Service Providers: We may share your information with service providers who help us provide and improve our services.",
        "Third-Party Vendors: We may share your information with third-party vendors who provide us with services such as analytics and marketing.",
        "Government Authorities: We may share your information with government authorities as required by law."
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        "Access and Correction: You have the right to access and correct your personal information.",
        "Opt-Out: You have the right to opt-out of receiving promotional materials and communications.",
        "Deletion: You have the right to request deletion of your personal information."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <NetworkBackground />
        
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated Mesh Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_50%)]" />
          
          {/* Enhanced Floating Orbs */}
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[120px] animate-float-slow delay-1000" />
          
          {/* Geometric Patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-conic from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-spin-slower" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-conic from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-full blur-3xl animate-spin-reverse" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center space-x-2 mb-6 glass-morphism px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
            >
              <FaShieldAlt className="text-blue-600 text-xl" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b5a9e] to-[#d9764a]">
                Your Privacy Matters
              </span>
            </motion.div>

            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#19234d] to-[#141e40]">
                Privacy{' '}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#de7527] to-[#de7527]">
                Policy
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              At Projexino, we are committed to protecting your privacy and ensuring the security of your personal information.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
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
                {/* Animated gradient border on hover */}
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

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mt-16 bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <FaHandshake className="text-4xl mx-auto mb-4 text-blue-600" />
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#19234d] to-[#141e40]">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about our Privacy Policy, please contact us at{' '}
                <a 
                  href="mailto:contact@projexino.com" 
                  className="text-blue-600 hover:text-blue-700 transition-colors underline decoration-2 decoration-blue-200 hover:decoration-blue-500"
                >
                  contact@projexino.com
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

export default PrivacyPolicy;
