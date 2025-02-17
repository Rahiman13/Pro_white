import React from 'react';
import { motion } from 'framer-motion';
import NetworkBackground from '../components/NetworkBackground';
import { FaShieldAlt, FaCookie } from 'react-icons/fa';

const CookiePolicy = () => {
  const sections = [
    {
      title: "What are Cookies?",
      content: [
        "Cookies are small text files stored on your device when you visit our website or use our app.",
        "These files allow our website or app to remember your actions or preferences over time, improving your browsing experience.",
        "They help us provide you with a better, more personalized experience when you interact with our services."
      ]
    },
    {
      title: "Types of Cookies We Use",
      content: [
        "Essential Cookies: Necessary for the functioning of our website and apps, enabling basic features like page navigation and form submissions.",
        "Performance and Analytics Cookies: Help us understand how visitors use our website and analyze trends using tools like Google Analytics.",
        "Functional Cookies: Remember your preferences and provide personalized features without collecting personal information.",
        "Targeting or Advertising Cookies: Deliver personalized content and ads based on your interests and browsing behavior."
      ]
    },
    {
      title: "How We Use Cookies",
      content: [
        "To improve user experience by personalizing content and remembering your preferences.",
        "To provide analytics and performance data for enhancing website functionality.",
        "For advertising purposes to deliver relevant content and advertisements.",
        "To ensure the security and proper functioning of our website."
      ]
    },
    {
      title: "Managing Your Cookie Preferences",
      content: [
        "Browser Settings: Modify your browser settings to accept or block cookies as per your preference.",
        "Opt-out Options: Use browser add-ons like Google Analytics opt-out to control tracking.",
        "Mobile App Settings: Adjust cookie preferences through your device's settings menu.",
        "Cookie Consent: Choose your cookie preferences through our cookie consent banner."
      ]
    },
    {
      title: "Third-Party Cookies",
      content: [
        "We may use third-party services that place cookies on your device.",
        "These cookies are governed by the respective privacy policies of the third parties.",
        "We regularly review our third-party relationships to ensure compliance with privacy standards."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <NetworkBackground />
        
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_50%)]" />
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[120px] animate-float-slow delay-1000" />
        </div>

        {/* Hero Content */}
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
              <FaCookie className="text-blue-600 text-xl" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2b5a9e] to-[#d9764a]">
                Cookie Policy
              </span>
            </motion.div>

            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#19234d] to-[#141e40]">
                Cookie{' '}
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
              We use cookies to enhance your browsing experience and provide you with personalized service.
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
              <FaCookie className="text-4xl mx-auto mb-4 text-blue-600" />
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#19234d] to-[#141e40]">
                Questions About Our Cookie Policy?
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

export default CookiePolicy;
