import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaEye, FaHeart, FaCalendarAlt, FaBookmark, FaShare, FaTwitter, FaFacebook, FaLinkedin, FaCopy, FaEnvelope, FaCheck, FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaQuoteRight, FaRegClock } from 'react-icons/fa';
import { MdOutlineQuestionAnswer } from 'react-icons/md';
import BaseUrl from '../API';
import NetworkBackground from '../components/NetworkBackground';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import Lottie from 'react-lottie'; // You may need to install this package
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // You may need to install this package
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


import { Helmet } from "react-helmet";

const BlogDetail = () => {
  const { livePageUrl } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeHeading, setActiveHeading] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showFAQs, setShowFAQs] = useState(false);

  // Remove these audio player related states and ref
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the content is visible
  });

  useEffect(() => {
    if (inView) {
      axios.put(`${BaseUrl}/api/blogs/view/${livePageUrl}`)
        .then(res => console.log('View counted:', res.data.views))
        .catch(err => console.error('View count failed', err));
    }
  }, [inView, livePageUrl]);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        // Check if livePageUrl exists before making the request
        if (!livePageUrl) {
          console.error('Blog URL is undefined');
          setLoading(false);
          return;
        }

        // First fetch all blogs to find the matching one
        const response = await fetch(`${BaseUrl}/api/blogs`);

        if (!response.ok) {
          console.error(`Error fetching blogs: ${response.status} ${response.statusText}`);
          setLoading(false);
          return;
        }

        const blogs = await response.json();
        // Find the blog with matching livePageUrl
        const matchedBlog = blogs.find(blog => blog.livePageUrl.replace(/[`"]/g, '') === livePageUrl);

        if (!matchedBlog) {
          console.error('Blog not found');
          setLoading(false);
          return;
        }

        setBlog(matchedBlog);
        setLoading(false);

        // Update page metadata if SEO data exists
        if (matchedBlog.seoMetadata) {
          document.title = matchedBlog.seoMetadata.metaTitle;
          document.querySelector('meta[name="description"]')?.setAttribute('content', matchedBlog.seoMetadata.metaDescription);
          document.querySelector('meta[name="keywords"]')?.setAttribute('content', matchedBlog.seoMetadata.keywords.join(', '));
        }
      } catch (error) {
        console.error('Error fetching blog details:', error);
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [livePageUrl]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateProgress);
      audioRef.current.addEventListener('ended', () => setIsPlaying(false));

      // console.log("Audio URL:", blog?.audio?.replace(/[`"]/g, ''));
      // Set initial volume
      audioRef.current.volume = volume;

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', updateProgress);
          audioRef.current.removeEventListener('ended', () => setIsPlaying(false));
        }
      };
    }
  }, [blog]);


  const updateProgress = () => {
    if (audioRef.current) {
      const value = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(value || 0); // Add fallback to prevent NaN
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Add error handling for play attempt
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Playback started successfully
            })
            .catch(error => {
              console.error('Playback failed:', error);
              // Handle the error - maybe show a message to the user
            });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Add this function to handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      // If volume is set to 0, consider it as muted
      if (newVolume === 0) {
        setIsMuted(true);
        audioRef.current.muted = true;
      } else if (isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  // Add this function to handle seeking in the audio
  const handleSeek = (e) => {
    const seekPosition = parseFloat(e.target.value);
    setProgress(seekPosition);

    if (audioRef.current && audioRef.current.duration) {
      audioRef.current.currentTime = (seekPosition / 100) * audioRef.current.duration;
    }
  };

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

  const handleLike = () => {
    setIsLiked(!isLiked);
    // Here you would typically make an API call to update the like count
    // axios.post(`${BaseUrl}/api/blogs/${blogId}/like`)
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Here you would typically make an API call to save the bookmark
    // axios.post(`${BaseUrl}/api/blogs/${blogId}/bookmark`)
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
                  {block.items.map((item, i) => {
                    // Clean up the item string by removing quotes and commas
                    const cleanItem = item.replace(/[",]/g, '');

                    return (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2b5a9e] to-[#d9764a]" />
                        {cleanItem}
                      </motion.li>
                    );
                  })}
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
                <div className="absolute -left-4 top-0 text-6xl text-[#2b5a9e]/20">
                  <FaQuoteRight />
                </div>
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
                className="relative group my-4"
              >
                <div className="relative overflow-hidden rounded-xl bg-[#1a1b26] shadow-2xl">
                  <div className="top-0 left-0 right-0 h-10 bg-[#1a1b26] flex items-center justify-between px-4 border-b border-gray-800">
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
                  <SyntaxHighlighter
                    language={block.language || "javascript"}
                    style={atomDark}
                    className="mt-0"
                    showLineNumbers
                    wrapLines
                  >
                    {block.text}
                  </SyntaxHighlighter>
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
    const [isVisible, setIsVisible] = useState(false);

    if (headings.length < 2) return null;

    useEffect(() => {
      const handleScroll = () => {
        const mainContent = document.querySelector('.main-content-section');
        const footer = document.querySelector('footer');
        
        if (mainContent && footer) {
          const mainContentRect = mainContent.getBoundingClientRect();
          const footerRect = footer.getBoundingClientRect();
          const excerptSection = document.querySelector('.excerpt-section');
          const excerptRect = excerptSection?.getBoundingClientRect();
          
          // Check if we're within the main content section and not in the excerpt or footer
          const isInMainContent = mainContentRect.top <= 0 && mainContentRect.bottom >= 0;
          const isAboveFooter = footerRect.top > 0;
          const isBelowExcerpt = !excerptRect || excerptRect.bottom < 0;
          
          setIsVisible(isInMainContent && isAboveFooter && isBelowExcerpt);
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check

      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToHeading = (index) => {
      const element = document.getElementById(`heading-${index}`);
      if (element) {
        // Get the element's position relative to the viewport
        const rect = element.getBoundingClientRect();
        
        // Calculate the absolute position from the top of the page
        const absoluteTop = rect.top + window.pageYOffset;
        
        // Add offset for any fixed headers (adjust the value as needed)
        const offset = 100;
        
        // Scroll to the element
        window.scrollTo({
          top: absoluteTop - offset,
          behavior: 'smooth'
        });

        // Add a temporary highlight effect
        element.style.transition = 'background-color 0.5s ease';
        element.style.backgroundColor = 'rgba(43, 90, 158, 0.1)';
        
        // Remove the highlight after 2 seconds
        setTimeout(() => {
          element.style.backgroundColor = 'transparent';
        }, 2000);
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 max-w-xs w-full hidden xl:block"
        style={{
          maxHeight: 'calc(100vh - 200px)',
          width: '240px',
          overflowY: 'auto',
          pointerEvents: isVisible ? 'auto' : 'none'
        }}
      >
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/20">
          <h3 className="text-lg font-semibold mb-4 text-[#19234d]">Table of Contents</h3>
          <nav className="space-y-2">
            {headings.map((heading, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToHeading(index)}
                whileHover={{ x: 4 }}
                className="block text-left w-full transition-colors duration-200 text-gray-600 hover:text-[#2b5a9e]"
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

  const FAQSection = ({ faqs }) => {
    if (!faqs || faqs.length === 0) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-16 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-white/20"
      >
        <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#19234d] to-[#2b5a9e]">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-r from-gray-50 to-transparent rounded-lg p-6"
            >
              <h4 className="text-lg font-semibold text-[#2b5a9e] mb-2 flex items-center gap-2">
                <MdOutlineQuestionAnswer className="text-[#d9764a]" />
                {faq.question}
              </h4>
              <p className="text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const AudioLink = ({ audioUrl }) => {
    if (!audioUrl) return null;

    // Clean the URL by removing backticks and quotes
    const cleanUrl = audioUrl.replace(/[`"]/g, '');

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 max-w-sm w-full mx-auto"
      >
        <div className="bg-white/90 backdrop-blur-lg rounded-full shadow-lg p-4 border border-white/20 flex items-center gap-4">
          <a
            href={cleanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] text-white font-medium transition-transform hover:scale-105"
          >
            <FaPlay className="text-sm" /> Listen to Audio
          </a>
          <p className="text-gray-700 text-sm flex-1">
            Open audio in a new tab
          </p>
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
    <main ref={ref} className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      {/* Enhanced SEO Meta Tags */}
      {blog && (
        <Helmet>
          {/* Primary Meta Tags */}
          <title>{blog.seoMetadata?.metaTitle || blog.title}</title>
          <meta name="title" content={blog.seoMetadata?.metaTitle || blog.title} />
          <meta name="description" content={blog.seoMetadata?.metaDescription || blog.excerpt} />
          <meta name="keywords" content={blog.seoMetadata?.keywords?.join(', ') || blog.category} />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="article" />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:title" content={blog.seoMetadata?.metaTitle || blog.title} />
          <meta property="og:description" content={blog.seoMetadata?.metaDescription || blog.excerpt} />
          <meta property="og:image" content={blog.featuredImage} />
          <meta property="article:published_time" content={blog.createdAt} />
          <meta property="article:author" content={blog.authorName} />
          <meta property="article:section" content={blog.category} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={window.location.href} />
          <meta property="twitter:title" content={blog.seoMetadata?.metaTitle || blog.title} />
          <meta property="twitter:description" content={blog.seoMetadata?.metaDescription || blog.excerpt} />
          <meta property="twitter:image" content={blog.featuredImage} />

          {/* Canonical URL */}
          <link rel="canonical" href={window.location.href} />

          {/* Additional Meta Tags */}
          <meta name="author" content={blog.authorName} />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
      )}

      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[65vh] overflow-hidden excerpt-section">
        <NetworkBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8   mt-24">
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
              {/* Category and Meta Info */}
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
                    <FaRegClock className="text-[#d9764a]" /> {blog.readingTime} min read
                  </span>
                </div>
              </div>

              {/* Title with Gradient */}
              <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#19234d] to-[#2b5a9e]">
                {blog.title}
              </h1>

              {/* Author and Action Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] rounded-full blur-sm" />
                    <img
                      src={blog.authorImage.replace(/`/g, '') || `https://ui-avatars.com/api/?name=${blog.authorName}`}
                      alt={blog.authorName}
                      className="relative w-14 h-14 rounded-full border-2 border-white object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: '#19234d' }}>{blog.authorName}</p>
                    <p className="text-sm text-gray-500">{blog.createdBy?.role || 'Author'}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLike}
                    className={`p-3 rounded-full ${isLiked ? 'bg-red-50' : 'bg-white'} shadow-lg hover:shadow-xl transition-all`}
                  >
                    <FaHeart className={isLiked ? 'text-red-500' : 'text-[#d9764a]'} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBookmark}
                    className={`p-3 rounded-full ${isBookmarked ? 'bg-blue-50' : 'bg-white'} shadow-lg hover:shadow-xl transition-all`}
                  >
                    <FaBookmark className={isBookmarked ? 'text-[#2b5a9e]' : 'text-[#2b5a9e]/70'} />
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

              {/* Tags */}
              {blog && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.map((tag, index) => {
                    // Remove brackets and quotes from tags
                    const cleanTag = tag.replace(/[\[\]"]/g, '');
                    return (
                      <motion.span
                        key={index}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-[#2b5a9e]/10 to-[#d9764a]/10 text-[#2b5a9e] hover:from-[#2b5a9e]/20 hover:to-[#d9764a]/20 transition-all duration-300"
                      >
                        #{cleanTag}
                      </motion.span>
                    );
                  })}
                </div>
              )}

              {/* Excerpt */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-700 leading-relaxed max-w-3xl"
              >
                {blog.excerpt}
              </motion.p>
            </motion.div>
          )}
        </div>
      </section>

      {blog && (
        <>
          {/* Main Content Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative main-content-section"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-purple-50/50 rounded-3xl blur-2xl" />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              {/* Featured Image with Animation */}
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2b5a9e]/5 to-[#d9764a]/5 rounded-3xl blur-xl" />
                <motion.img
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  src={blog.featuredImage.replace(/`/g, '')}
                  alt={blog.imageAltText || blog.title}
                  className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl mb-12"
                />
              </div>

              {/* Blog Content */}
              <div className="prose prose-lg max-w-none">
                <div className="relative space-y-6">
                  <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#2b5a9e]/20 via-[#d9764a]/20 to-transparent" />
                  {renderContent()}
                </div>
              </div>

              {/* FAQs Section */}
              {blog.faqs && blog.faqs.length > 0 && (
                <FAQSection faqs={blog.faqs} />
              )}
            </div>
            {/* Table of Contents */}
            {blog.content && <TableOfContents content={blog.content} />}

          </motion.section>


          {/* Audio Player */}
          {/* Fix the audio player by properly cleaning the URL and ensuring it's rendered */}
          {blog && blog.audio && (
            <AudioLink audioUrl={blog.audio.replace(/[`"]/g, '')} />
          )}
        </>
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
