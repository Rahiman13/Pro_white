import { motion } from 'framer-motion';
import { useState } from 'react';

const AIEnhancementSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const aiSolutions = [
    {
      title: 'AI-Powered Chatbots & Virtual Assistants',
      icon: '💬',
      features: [
        'Seamless customer support with AI chatbots & voice assistants',
        'NLP-driven for human-like interactions',
        'Automated lead qualification & customer engagement',
        'Integration with WhatsApp, Messenger, Websites, & Mobile Apps'
      ],
      bestFor: ['E-commerce', 'Healthcare', 'FinTech', 'Customer Service'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'AI-Driven Personalization & Recommendation',
      icon: '🎯',
      features: [
        'AI-based product recommendations for e-commerce platforms',
        'Behavioral analytics for personalized user experiences',
        'Smart content curation for blogs, news apps, and OTT platforms',
        'Integration with AI-powered A/B testing for better conversions'
      ],
      bestFor: ['E-commerce', 'Media & Entertainment', 'EdTech']
    },
    {
      title: 'Intelligent Search & Voice Recognition',
      icon: '🔍',
      features: [
        'AI-driven search engines with auto-suggestions & ranking algorithms',
        'Voice-enabled search & AI-driven speech-to-text for accessibility',
        'Advanced semantic search for high-precision results',
        'Multilingual support for global reach & inclusivity'
      ],
      bestFor: ['Enterprise Apps', 'E-commerce', 'SaaS Platforms']
    },
    {
      title: 'AI-Based Image & Video Recognition',
      icon: '📸',
      features: [
        'Automated image tagging & classification for media-rich apps',
        'Face recognition & biometric authentication for secure logins',
        'AI-powered object detection & AR-enhanced applications',
        'Video analytics for content moderation & trend detection'
      ],
      bestFor: ['Security Apps', 'Social Media Platforms', 'Healthcare']
    },
    {
      title: 'Predictive Analytics & Data Intelligence',
      icon: '📊',
      features: [
        'AI-powered dashboards with deep analytics & forecasting',
        'User behavior prediction for targeted marketing campaigns',
        'Automated data processing & anomaly detection',
        'AI-enhanced reporting for real-time business decisions'
      ],
      bestFor: ['SaaS Platforms', 'FinTech', 'Business Intelligence']
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute w-96 h-96 -left-48 top-0 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 -right-48 bottom-0 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-16">
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full 
                     text-sm font-medium text-purple-600 inline-block mb-6"
          >
            AI Integration
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#19234d]">
            Our AI-Driven Solutions for
            <span className="block text-[#d9764a]">Web & App Development</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`relative group bg-white p-8 rounded-2xl shadow-xl 
                         hover:shadow-2xl transition-all duration-300 
                         overflow-hidden cursor-pointer`}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              {/* Card Header */}
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{solution.title}</h3>
              </div>

              {/* Features List */}
              <motion.div
                initial={false}
                animate={{ height: activeCard === index ? 'auto' : '0' }}
                className="overflow-hidden"
              >
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-start space-x-2"
                    >
                      <span className="text-green-500 mt-1">✔</span>
                      <span className="text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Best For Tags */}
              <div className="mt-4">
                <p className="text-sm font-medium text-purple-600 mb-2">📌 Best for:</p>
                <div className="flex flex-wrap gap-2">
                  {solution.bestFor.map((industry, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm
                               transform hover:scale-105 transition-transform duration-200"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 
                           transition-opacity duration-300 rounded-2xl"
                   style={{
                     background: `linear-gradient(135deg, ${solution.color})`
                   }} 
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 bg-white rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Why Choose Projexino for AI-Integrated Web & App Development?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Industry Expertise – Years of experience in AI, Web, and App Development',
              'Custom AI Solutions – Tailored AI models for business-specific needs',
              'Scalable & Secure – AI solutions optimized for performance & compliance',
              'Seamless Integration – AI-powered enhancements without disrupting UX'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-2">
                <span className="text-green-500 font-bold">✅</span>
                <span className="text-gray-600">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIEnhancementSection;
