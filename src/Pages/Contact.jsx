import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Contact = () => {
  return (
    <main className="pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -left-12 -top-12 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 -right-12 -bottom-12 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-blue-600">
            LET'S CONNECT
          </span>
          <h1 className="text-5xl font-bold mt-4 mb-6">
            Get in{' '}
            <TypeAnimation
              sequence={[
                'Touch',
                1000,
                'Contact',
                1000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
            />
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
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
                  content: ['contact@projexino.com'],
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
                  animate={{ opacity: 1, y: 0 }}
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
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-8">
              {[
                { icon: <FaFacebook />, href: '#', color: 'bg-[#0077B5]' },
                { icon: <FaLinkedin />, href: '#', color: 'bg-[#0077B5]' },
                { icon: <FaTwitter />, href: '#', color: 'bg-[#1DA1F2]' },

                { icon: <FaInstagram />, href: '#', color: 'bg-[#C13584]' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${social.color} p-3 rounded-full text-white hover:shadow-lg transition-all duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>


          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />
            <div className="relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
              <form className="space-y-6">
                {[
                  { label: 'Name', type: 'text', placeholder: 'Your name' },
                  { label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  { label: 'Message', type: 'textarea', placeholder: 'Your message' }
                ].map((field, index) => (
                  <motion.div
                    key={field.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/50 backdrop-blur-sm"
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        type={field.type}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/50 backdrop-blur-sm"
                        placeholder={field.placeholder}
                      />
                    )}
                  </motion.div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative rounded-2xl max-w-full mt-12 overflow-hidden shadow-lg"
          >
            <iframe

              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3027470973836!2d78.37669631487752!3d17.458982988030458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8f5d40e7%3A0x7f0c7b7c4dd42f39!2sKhanamet%2C%20Kondapur%2C%20Hyderabad%2C%20Telangana%20500084!5e0!3m2!1sen!2sin!4v1647850844221!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="hover:opacity-90 transition-opacity duration-300"

            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>

      </div>
    </main>
  );
};

export default Contact; 