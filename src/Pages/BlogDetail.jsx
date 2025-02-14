import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaEye, FaHeart, FaCalendarAlt, FaBookmark, FaShare, FaTwitter, FaFacebook, FaLinkedin, FaCopy, FaEnvelope } from 'react-icons/fa';
import BaseUrl from '../API';
import NetworkBackground from '../components/NetworkBackground';

const BlogDetail = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(`${BaseUrl}/api/blogs/${blogId}`);
        const data = await response.json();
        setBlog(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog details:', error);
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [blogId]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-spin-slow" />
          <div className="relative bg-white rounded-full p-4">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <section className="relative min-h-[60vh] overflow-hidden">
        <NetworkBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/blogs')}
            className="flex items-center gap-2 text-[#2b5a9e] hover:text-[#d9764a] mb-8 transition-colors duration-300"
          >
            <FaArrowLeft /> Back to Blogs
          </motion.button>

          {blog && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="flex flex-wrap gap-4 items-center">
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#2b5a9e]/10 to-[#d9764a]/10 text-[#2b5a9e] text-sm font-medium border border-[#2b5a9e]/20"
                >
                  {blog.category}
                </motion.span>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#d9764a]" /> {formatDate(blog.createdAt)}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaEye className="text-[#2b5a9e]" /> {blog.views} views
                  </span>
                  <span className="flex items-center gap-2">
                    <FaHeart className="text-[#d9764a]" /> {blog.likes} likes
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold" style={{ color: '#19234d' }}>
                {blog.title}
              </h1>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] rounded-full blur-sm" />
                    <img
                      src={blog.authorImage || `https://ui-avatars.com/api/?name=${blog.authorName}`}
                      alt={blog.authorName}
                      className="relative w-14 h-14 rounded-full border-2 border-white"
                    />
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: '#19234d' }}>{blog.authorName}</p>
                    <p className="text-sm text-gray-500">{blog.readingTime || '5'} min read</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaBookmark className="text-[#2b5a9e]" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowShareModal(true)}
                    className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaShare className="text-[#d9764a]" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {blog && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e]/5 to-[#d9764a]/5 rounded-3xl blur-xl" />
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              src={blog.featuredImage}
              alt={blog.title}
              className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl mb-12"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {blog.content}
            </div>
          </div>
        </motion.section>
      )}

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 relative overflow-hidden"
            >
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2b5a9e] via-[#d9764a] to-[#2b5a9e] animate-gradient-x" />
              
              {/* Content */}
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-[#19234d]">Share this article</h3>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowShareModal(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <div className="space-y-6">
                  {/* Social Share Options */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <FaTwitter className="text-xl" />, label: 'Twitter', color: '#1DA1F2', 
                        url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}` },
                      { icon: <FaFacebook className="text-xl" />, label: 'Facebook', color: '#4267B2',
                        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}` },
                      { icon: <FaLinkedin className="text-xl" />, label: 'LinkedIn', color: '#0077B5',
                        url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}` },
                      { icon: <FaEnvelope className="text-xl" />, label: 'Email', color: '#EA4335',
                        url: `mailto:?subject=${encodeURIComponent(blog.title)}&body=${encodeURIComponent(window.location.href)}` }
                    ].map((platform) => (
                      <motion.button
                        key={platform.label}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(platform.url, '_blank')}
                        className="flex items-center justify-center gap-3 p-4 rounded-xl font-medium bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                        style={{ color: platform.color }}
                      >
                        <span className="transform transition-transform group-hover:scale-110">
                          {platform.icon}
                        </span>
                        {platform.label}
                      </motion.button>
                    ))}
                  </div>

                  {/* Direct Link Sharing */}
                  <div className="relative mt-6">
                    <div className="flex items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <input
                        type="text"
                        value={window.location.href}
                        readOnly
                        className="flex-1 bg-transparent text-sm text-gray-600 outline-none"
                      />
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          // Add toast notification here
                        }}
                        className="p-2 rounded-lg bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] text-white"
                      >
                        <FaCopy className="text-lg" />
                      </motion.button>
                    </div>
                  </div>

                  {/* QR Code Option */}
                  <div className="flex items-center justify-center p-4 mt-6 rounded-xl bg-gray-50 border border-gray-200">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.href)}`}
                      alt="QR Code"
                      className="w-32 h-32"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default BlogDetail;
