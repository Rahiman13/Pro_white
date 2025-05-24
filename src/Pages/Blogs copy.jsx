import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import NetworkBackground from '../components/NetworkBackground';
import BaseUrl from '../API';
import { FaEye, FaHeart, FaClock, FaCalendarAlt, FaCopy } from 'react-icons/fa';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  // Categories for filtering
  const categories = ['All', 'Technology', 'Development', 'Design', 'Business'];

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${BaseUrl}/api/blogs`);
      const data = await response.json();
      console.log('Fetched blogs:', data); // Debug log
      setBlogs(data);
      // Set the first blog as featured or find one with isFeatured true
      setFeaturedBlog(data.find(blog => blog.isFeatured) || data[0]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsSearching(value.length > 0);
  };

  const filteredBlogs = blogs.filter(blog => {
    const searchTerm = searchQuery.toLowerCase();
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.authorName.toLowerCase().includes(searchTerm) ||
      blog.category.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50 backdrop-blur-lg">
        <NetworkBackground />

        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-conic from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-spin-slower" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-conic from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-full blur-3xl animate-spin-reverse" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center space-x-3 mb-8 glass-morphism px-8 py-4 mt-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
            >
              <span className="text-[#d9764a] font-semibold">Our Latest Insights</span>
            </motion.div>

            <h1 className="text-6xl lg:text-7xl font-bold mb-8">
              <TypeAnimation
                sequence={[
                  'Explore Our Blog',
                  1000,
                  'Read Our Stories',
                  1000,
                  'Get Inspired',
                  1000,
                ]}
                wrapper="span"
                repeat={Infinity}
                style={{ color: '#2b5a9e' }}
              />
            </h1>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full px-6 py-4 rounded-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {isSearching && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full"
                  >
                    <span className="inline-block px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl text-gray-800 font-medium">
                      Found {filteredBlogs.length} {filteredBlogs.length === 1 ? 'result' : 'results'} for "{searchQuery}"
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <AnimatePresence>
        {!isSearching && (
          <motion.section
            initial={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="py-16 bg-gradient-to-r from-blue-50/50 to-purple-50/50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {featuredBlog && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="absolute inset-0">
                    <img
                      src={featuredBlog.featuredImage}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  </div>
                  <div className="relative z-10 p-12 text-white">
                    <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm text-blue-300 mb-4">
                      Featured Post
                    </span>
                    <h2 className="text-4xl font-bold mb-4">{featuredBlog.title}</h2>
                    <p className="text-lg text-gray-300 mb-6">{featuredBlog.excerpt}</p>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <img
                          src={featuredBlog.authorImage || `https://ui-avatars.com/api/?name=${featuredBlog.authorName}`}
                          alt={featuredBlog.authorName}
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                        <span>{featuredBlog.authorName}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center"><FaCalendarAlt className="mr-2" />{formatDate(featuredBlog.createdAt)}</span>
                        <span className="flex items-center"><FaEye className="mr-2" />{featuredBlog.views} views</span>
                        {/* <span className="flex items-center"><FaHeart className="mr-2" />{featuredBlog.likes} likes</span> */}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Blog Categories */}
      <section className="py-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 
                  ${activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className={`grid grid-cols-1 ${isSearching ? 'md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'
              } gap-8`}>
              <AnimatePresence>
                {filteredBlogs.map((blog, index) => (
                  <motion.article
                    key={blog._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => navigate(`/blogs/${blog.livePageUrl}`)}
                    className="group relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={blog.featuredImage}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Top Tags */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 rounded-full text-sm bg-white/90 text-gray-900 backdrop-blur-sm shadow-lg"
                        >
                          <FaClock className="inline-block mr-1" /> {blog.readingTime || '5'} min
                        </motion.span>
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] text-white backdrop-blur-sm shadow-lg"
                        >
                          {blog.category}
                        </motion.span>
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-6 space-y-4">
                      {/* Title and Excerpt */}
                      <div>
                        <h2 className="text-2xl font-bold mb-2 text-[#19234d] group-hover:text-[#2b5a9e] transition-colors duration-300">
                          {blog.title}
                        </h2>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {blog.tags.map((tag, index) => {
                            // Clean the tag by removing special characters
                            const cleanTag = tag.replace(/[^\w\s-]/g, '');
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
                        <p className="text-gray-600 line-clamp-2">{blog.excerpt}</p>
                        {blog.status !== 'Published' && (
                          <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                            {blog.status}
                          </span>
                        )}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] rounded-full blur-sm" />
                          <img
                            src={blog.authorImage || `https://ui-avatars.com/api/?name=${blog.authorName}`}
                            alt={blog.authorName}
                            className="relative w-10 h-10 rounded-full border-2 border-white"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-[#19234d]">{blog.authorName}</p>
                          <p className="text-sm text-gray-500">{formatDate(blog.createdAt)}</p>
                        </div>
                      </div>

                      {/* Stats and Tags */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <FaEye className="text-[#2b5a9e]" /> {blog.views}
                            </span>
                            {/* <span className="flex items-center gap-1">
                              <FaHeart className="text-[#d9764a]" /> {blog.likes}
                            </span> */}
                          </div>
                          <motion.button
                            onClick={() => navigate(`/blogs/${blog._id}`)}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-[#2b5a9e]/10 to-[#d9764a]/10 text-[#2b5a9e] font-medium group-hover:from-[#2b5a9e] group-hover:to-[#d9764a] group-hover:text-white transition-all duration-300"
                          >
                            Read More
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-4 rounded-full bg-blue-600 text-white shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Blogs;