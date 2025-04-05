import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaEye, FaHeart, FaCalendarAlt, FaBookmark, FaShare, FaTwitter, FaFacebook, FaLinkedin, FaCopy, FaEnvelope, FaCheck } from 'react-icons/fa';
import BaseUrl from '../API';
import NetworkBackground from '../components/NetworkBackground';
// import axios from 'axios';
// import { useInView } from 'react-intersection-observer';

const BlogDetail = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeHeading, setActiveHeading] = useState(null);


  // const { inView } = useInView({
  //   triggerOnce: true,
  // });

  // useEffect(() => {
  //   if (inView) {
  //     axios.put(`${BaseUrl}/api/blogs/${blogId}/view`)
  //       .then(res => console.log('View counted:', res.data.views))
  //       .catch(err => console.error('View count failed', err));
  //   }
  // }, [inView, blogId]);



  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(`${BaseUrl}/api/blogs/${blogId}`);
        const data = await response.json();
        setBlog(data);
        setLoading(false);

        // Update page metadata if SEO data exists
        if (data.seoMetadata) {
          document.title = data.seoMetadata.metaTitle;
          document.querySelector('meta[name="description"]').setAttribute('content', data.seoMetadata.metaDescription);
          document.querySelector('meta[name="keywords"]').setAttribute('content', data.seoMetadata.keywords.join(', '));
        }
      } catch (error) {
        console.error('Error fetching blog details:', error);
        setLoading(false);
      }
    };

    

    fetchBlogDetail();

  }, [blogId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const index = parseInt(id.split('-')[1]);
            setActiveHeading(index);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px'
      }
    );

    const headings = blog?.content.filter(block => block.type === 'heading');
    if (headings) {
      headings.forEach((_, index) => {
        const element = document.getElementById(`heading-${index}`);
        if (element) observer.observe(element);
      });
    }

    return () => observer.disconnect();
  }, [blog]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderContent = () => {
    if (!blog.content) return null;


    try {
      const contentArray = Array.isArray(blog.content) ? blog.content : [blog.content];

      return contentArray.map((block, index) => {
        const baseAnimation = {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1 }
        };

        switch (block.type) {
          case 'heading':
            return (
              <motion.div
                key={index}
                {...baseAnimation}
                className="relative group"
              >
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] opacity-0 group-hover:opacity-100 transition-opacity" />
                <h2
                  id={`heading-${index}`}
                  className={`
                    text-3xl font-bold mb-6 pl-8 
                    bg-clip-text text-transparent bg-gradient-to-r 
                    from-[#19234d] to-[#2b5a9e]
                    hover:from-[#2b5a9e] hover:to-[#d9764a]
                    transition-all duration-300
                  `}
                >
                  {block.text}
                </h2>
              </motion.div>
            );

          case 'paragraph':
            return (
              <motion.div
                key={index}
                {...baseAnimation}
                className="relative group"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#2b5a9e]/20 to-[#d9764a]/20 group-hover:from-[#2b5a9e] group-hover:to-[#d9764a] transition-all duration-300" />
                <p className="text-gray-700 leading-relaxed mb-6 pl-6 prose prose-lg hover:text-gray-900 transition-colors duration-300">
                  {block.text}
                </p>
              </motion.div>
            );

          case 'list':
            return (
              <motion.div
                key={index}
                {...baseAnimation}
                className="relative bg-gradient-to-r from-gray-50 to-transparent rounded-lg p-6 mb-6"
              >
                <ul className="space-y-3">
                  {block.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2b5a9e] to-[#d9764a]" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );

          case 'quote':
            return (
              <motion.div
                key={index}
                {...baseAnimation}
                className="relative my-8"
              >
                <div className="absolute -left-4 top-0 text-6xl text-[#2b5a9e]/20">"</div>
                <blockquote className="pl-8 py-4 italic text-gray-700 border-l-4 border-gradient-to-b from-[#2b5a9e] to-[#d9764a] bg-gradient-to-r from-gray-50 to-transparent rounded-lg">
                  {block.text}
                </blockquote>
              </motion.div>
            );

          case 'code':
            return (
              <motion.div
                key={index}
                {...baseAnimation}
                className="relative group my-8"
              >
                <div className="relative overflow-hidden rounded-xl bg-[#1a1b26] shadow-2xl">
                  <div className="absolute top-0 left-0 right-0 h-10 bg-[#1a1b26] flex items-center justify-between px-4 border-b border-gray-800">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        navigator.clipboard.writeText(block.text);
                        setCopiedIndex(index);
                        setTimeout(() => setCopiedIndex(null), 2000);
                      }}
                      className="p-1.5 rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors duration-200"
                    >
                      {copiedIndex === index ? <FaCheck size={12} /> : <FaCopy size={12} />}
                    </motion.button>
                  </div>
                  <pre className="pt-12 p-4 overflow-x-auto">
                    <code className="text-gray-100 font-mono text-sm">
                      {block.text}
                    </code>
                  </pre>
                </div>
              </motion.div>
            );

          default:
            return null;
        }
      });
    } catch (e) {
      console.error('Error rendering content:', e);
      return null;
    }
  };

  const TableOfContents = ({ content }) => {
    const headings = content.filter(block => block.type === 'heading');

    if (headings.length < 2) return null;

    const scrollToHeading = (index) => {
      const element = document.getElementById(`heading-${index}`);
      if (element) {
        const offset = 100; // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-8 top-1/2 transform -translate-y-1/2 max-w-xs w-full hidden xl:block"
      >
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/20">
          <h3 className="text-lg font-semibold mb-4 text-[#19234d]">Table of Contents</h3>
          <nav className="space-y-2">
            {headings.map((heading, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToHeading(index)}
                whileHover={{ x: 4 }}
                className={`
                  block text-left w-full transition-colors duration-200
                  ${activeHeading === index
                    ? 'text-[#2b5a9e] font-medium'
                    : 'text-gray-600 hover:text-[#2b5a9e]'
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="line-clamp-1">{heading.text}</span>
                </div>
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.div>
    );
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />

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
                  {/* <span className="flex items-center gap-2">
                    <FaHeart className="text-[#d9764a]" /> {blog.likes} likes
                  </span> */}
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#19234d] to-[#2b5a9e]">
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

              {blog && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.map((tag, index) => {
                    // Remove brackets and quotes from tags
                    const cleanTag = tag.replace(/[\[\]"]/g, '');
                    return (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-[#2b5a9e]/10 to-[#d9764a]/10 text-[#2b5a9e]"
                      >
                        #{cleanTag}
                      </span>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {blog && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/50 rounded-3xl blur-2xl" />
          <div className="relative bg-white/80  backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
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
              <div className="relative space-y-6">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#2b5a9e]/20 via-[#d9764a]/20 to-transparent" />
                {renderContent()}
              </div>
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
                      {
                        icon: <FaTwitter className="text-xl" />, label: 'Twitter', color: '#1DA1F2',
                        url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`
                      },
                      {
                        icon: <FaFacebook className="text-xl" />, label: 'Facebook', color: '#4267B2',
                        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
                      },
                      {
                        icon: <FaLinkedin className="text-xl" />, label: 'LinkedIn', color: '#0077B5',
                        url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`
                      },
                      {
                        icon: <FaEnvelope className="text-xl" />, label: 'Email', color: '#EA4335',
                        url: `mailto:?subject=${encodeURIComponent(blog.title)}&body=${encodeURIComponent(window.location.href)}`
                      }
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

      {/* <TableOfContents content={blog.content} /> */}
    </main>
  );
};

export default BlogDetail;
