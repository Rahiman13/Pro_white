import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub,
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight, FaYoutube
} from 'react-icons/fa';
import Logo from '../../assets/projexino.png';
import BaseUrl from '../../API';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showMap, setShowMap] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const name = email.split('@')[0];
      
      const response = await fetch(`${BaseUrl}/api/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email
        })
      });

      const data = await response.json();
      console.log('Server response:', data);

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
                      Subscription Successful!
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Welcome {name}! You're now subscribed to our newsletter. 
                      <Link 
                        to={`/unsubscribe/${encodeURIComponent(email)}`}
                        className="text-blue-600 hover:text-blue-800 ml-1"
                      >
                        Manage subscription
                      </Link>
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
        setEmail('');
      } else {
        throw new Error(data.message || 'Failed to subscribe');
      }
    } catch (error) {
      console.log('Full error details:', error);
      toast.error(error.message || 'Failed to subscribe. Please try again.', {
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
      console.error('Newsletter subscription error:', error);
    }
  };

  const services = [
    { name: 'Web Development', path: '/services/web-development', icon: '💻' },
    { name: 'App Development', path: '/services/app-development', icon: '📱' },
    { name: 'UI/UX Design', path: '/services/web-design', icon: '🎨' },
    { name: 'Digital Marketing', path: '/services/digital-marketing', icon: '📈' },
    { name: 'Staffing Solutions', path: '/services/staffing', icon: '👥' }
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <footer className="relative bg-[#0A047D] ">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-1000" />
      </div>

      {/* Newsletter Section */}
      <div className="relative pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-xl rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden"
          >
            {/* Newsletter Decorative Elements */}
            <div className="absolute inset-0">
              <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-20 -left-20 blur-3xl animate-pulse"></div>
              <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full -bottom-20 -right-20 blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Stay Updated with Latest Tech Trends
                </h3>
                <p className="text-white/90 text-base md:text-lg">
                  Join our newsletter and never miss out on innovation
                </p>
              </div>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 rounded-full bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mx-6 mb-4  relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 backdrop-blur-sm rounded-2xl group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300"></div>
              <Link to="/" className="relative p-4 block">
                <div className="relative">
                  <img 
                    src={Logo} 
                    alt="Projexino" 
                    className="w-full h-auto max-w-[150px] mx-auto" 
                  />
                  <span className="absolute -top-2 -right-1 text-[1.2rem] font-bold text-[#0A047D]">™</span>
                </div>
              </Link>
            </motion.div>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed font-light">
              Empowering businesses through innovative digital solutions and cutting-edge technology for sustainable growth and success.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { 
                  icon: <FaFacebookF size={18} />, 
                  link: 'https://www.facebook.com/profile.php?id=61571638723890', 
                  label: 'Facebook',
                  bgColor: 'bg-[#1877F2] hover:bg-[#1877F2]/90',
                  textColor: 'text-white'
                },
                { 
                  icon: <FaYoutube size={18} />, 
                  link: 'https://www.youtube.com/@projexinosolutionspvtltd', 
                  label: 'Youtube',
                  bgColor: 'bg-[#FF0000] hover:bg-[#FF0000]/90',
                  textColor: 'text-white'
                },
                { 
                  icon: <FaLinkedinIn size={18} />, 
                  link: 'https://www.linkedin.com/company/projexino/about/', 
                  label: 'LinkedIn',
                  bgColor: 'bg-[#0A66C2] hover:bg-[#0A66C2]/90',
                  textColor: 'text-white'
                },
                { 
                  icon: <FaInstagram size={18} />, 
                  link: 'https://www.instagram.com/projexinosolutionspvtltd/?hl=en', 
                  label: 'Instagram',
                  bgColor: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90',
                  textColor: 'text-white'
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  className={`w-10 h-10 rounded-full ${social.bgColor} ${social.textColor} flex items-center justify-center transition-all duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <motion.li 
                  key={service.name}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-3 text-lg font-light"
                  >
                    <span className="text-xl">{service.icon}</span>
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-3 text-lg font-light"
                  >
                    <FaArrowRight className="text-sm" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact Us
            </h4>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setShowMap(true)}
                onHoverEnd={() => setShowMap(false)}
                className="relative"
              >
                <a 
                  href="https://maps.google.com/?q=P+No+305+Sa+Society+Khanamet+Kondapur+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-start gap-4 group"
                >
                  <FaMapMarkerAlt className="text-2xl mt-1 text-blue-400" />
                  <div>
                    <p className="text-lg">P No 305 Sa Society Khanamet</p>
                    <p className="text-lg">Kondapur, Hyderabad</p>
                    <p className="text-lg">Telangana 500084</p>
                  </div>
                </a>
                {showMap && (
                  <div className="absolute top-0 left-0 transform -translate-y-full mb-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3027470973836!2d78.37669631487752!3d17.458982988030458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8f5d40e7%3A0x7f0c7b7c4dd42f39!2sKhanamet%2C%20Kondapur%2C%20Hyderabad%2C%20Telangana%20500084!5e0!3m2!1sen!2sin!4v1647850844221!5m2!1sen!2sin"
                      width="300"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                )}
              </motion.div>

              <motion.a 
                whileHover={{ x: 5 }}
                href="tel:+15551234567"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-4 text-lg font-light"
              >
                <FaPhone className="text-2xl text-blue-400" />
                +91 9601843090
              </motion.a>


              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:hello@projexino.com"
                className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-4 text-lg font-light"
              >
                <FaEnvelope className="text-2xl text-blue-400" />
                hello@projexino.com
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 font-light">
              © {currentYear} Projexino. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm font-light">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <motion.a
                  key={item}
                  href="/privacy-policy"
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
