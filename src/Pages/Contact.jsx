import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaHandshake, FaYoutube } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { toast } from 'react-hot-toast';
import BaseUrl from '../API';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${BaseUrl}/api/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.custom(
          (t) => (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-md w-full bg-white/90 backdrop-blur-lg shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5"
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 pt-0.5">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
                    >
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Message Sent Successfully!
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Thank you for reaching out. We'll get back to you soon!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
                >
                  Close
                </button>
              </div>
            </motion.div>
          ),
          {
            position: 'top-center',
            duration: 4000,
          }
        );
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to send message. Please try again.', {
        position: 'top-center',
        duration: 3000,
        style: {
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
          color: '#e53e3e',
          padding: '16px',
          borderRadius: '12px',
        },
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#2b5a9e]/10 to-[#d9764a]/10 text-[#2b5a9e] text-sm font-semibold mb-6">
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
              style={{ color: '#d9764a' }}
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
            className="space-y-1"
          >
            {/* Contact Cards */}
            <div className="space-y-1">
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
                },
                {
                  icon: <FaHandshake className="text-2xl" />,
                  title: 'Let\'s Collaborate',
                  content: ['Let\'s work together to achieve great things.'],
                  color: 'from-green-500 to-blue-500'
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
            <div className="flex flex-col gap-4 mt-8">
              <h3 className="text-lg font-semibold text-gray-900">Connect With Us</h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: <FaFacebook />,
                    href: 'https://www.facebook.com/profile.php?id=61571638723890',
                    label: 'Facebook',
                    color: 'bg-[#1877F2] hover:bg-[#1864D9]'
                  },
                  {
                    icon: <FaYoutube />,
                    href: 'https://www.youtube.com/@projexinosolutionspvtltd',
                    label: 'YouTube',
                    color: 'bg-[#FF0000] hover:bg-[#D90000]'
                  },
                  {
                    icon: <FaLinkedin />,
                    href: 'https://www.linkedin.com/company/projexino/about/',
                    label: 'LinkedIn',
                    color: 'bg-[#0A66C2] hover:bg-[#0952A0]'
                  },
                  {
                    icon: <FaInstagram />,
                    href: 'https://www.instagram.com/projexinosolutionspvtltd/?hl=en',
                    label: 'Instagram',
                    color: 'bg-gradient-to-tr from-[#FD5949] via-[#D6249F] to-[#285AEB] hover:opacity-90'
                  }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`${social.color} p-3 rounded-full text-white shadow-lg transition-all duration-300 flex items-center justify-center`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
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
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: 'Name', type: 'text', placeholder: 'Your name', name: 'name' },
                  { label: 'Email', type: 'email', placeholder: 'your@email.com', name: 'email' },
                  { label: 'Message', type: 'textarea', placeholder: 'Your message', name: 'message' }
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
                        name={field.name}
                        rows="4"
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/50 backdrop-blur-sm"
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
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