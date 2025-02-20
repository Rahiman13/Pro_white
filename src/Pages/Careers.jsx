import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { TypeAnimation } from 'react-type-animation';
import { FaSearch, FaBriefcase, FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaUserTie, FaBuilding, FaGraduationCap, FaCheckCircle, FaRocket, FaFileAlt } from 'react-icons/fa';
import NetworkBackground from '../components/NetworkBackground';
import BaseUrl from '../API';

const ApplicationModal = ({ selectedJob, formData, setFormData, handleApply, setShowModal }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({ ...prev, resume: file }));
    } else {
      toast.error('Please upload a PDF file');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg p-8 max-w-md w-full mx-4"
      >
        <h2 className="text-2xl font-bold mb-4">Apply for {selectedJob?.title}</h2>
        <form onSubmit={handleApply} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Resume (PDF, max 2MB)</label>
            <input
              type="file"
              accept=".pdf"
              required
              onChange={handleFileChange}
              className="w-full"
            />
          </div>
          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch(`${BaseUrl}/api/careers`);
      const data = await response.json();
      const activeJobs = data.filter(job => job.status === 'Active');
      setJobs(activeJobs);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter(job => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      job.title.toLowerCase().includes(searchTerm) ||
      job.department.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm)
    );
  });

  const handleApply = async (e) => {
    e.preventDefault();

    if (!formData.resume || formData.resume.size > 2 * 1024 * 1024) {
      toast.error('Please upload a PDF file under 2MB');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('resume', formData.resume);

    try {
      const response = await fetch(`${BaseUrl}/api/careers/${selectedJob._id}/apply`, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success('Application submitted successfully!');
        setShowModal(false);
        setFormData({ name: '', email: '', phone: '', resume: null });
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to submit application');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="hero-section relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-white/80 via-blue-50/50 to-purple-50/50 backdrop-blur-lg">
        <NetworkBackground />

        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-conic from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-spin-slower" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-conic from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-full blur-3xl animate-spin-reverse" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center space-x-2 mb-6 glass-morphism px-8 py-4 rounded-full"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-spin-slow" />
                {/* <div className="relative bg-white rounded-full p-2">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-r from-blue-500 to-purple-500" />
                  </span>
                </div> */}
              </div>
              <FaBriefcase className="text-2xl text-[#d9764a]" />
              <span className="font-medium text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #2b5a9e, #d9764a)' }}>
                Career Opportunities
              </span>
            </motion.div>

            <h1 className="text-6xl font-bold mb-6">
              <span className="text-[#19234d]">Join Our </span>
              <TypeAnimation
                sequence={[
                  'Team',
                  1000,
                  'Journey',
                  1000,
                  'Future',
                  1000,
                ]}
                wrapper="span"
                repeat={Infinity}
                className="bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] text-transparent bg-clip-text"
              />
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Be part of something special. We're always looking for talented people to join our team.
            </p>


            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto mt-8"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for jobs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 rounded-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <FaSearch className="w-5 h-5 text-gray-400" />
                </div>
                {searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full"
                  >
                    <span className="inline-block px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl text-gray-800 font-medium">
                      Found {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'} for "{searchQuery}"
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3">
                    <FaUserTie className="text-2xl text-[#2b5a9e]" />
                    <h3 className="text-xl font-semibold text-[#19234d]">{job.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <FaBuilding className="text-[#d9764a]" />
                    <span className="text-gray-600">{job.department}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <FaClock className="text-blue-500" />
                    <span className="text-gray-600">Experience: {job.experience.min}-{job.experience.max} years</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <FaMoneyBillWave className="text-green-500" />
                    <span className="text-gray-600">₹ {job.salary.min.toLocaleString()} - {job.salary.max.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    <FaMapMarkerAlt /> {job.location}
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    <FaRocket /> {job.type}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-gray-700">{job.description}</p>
                <div className="mt-4">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <FaGraduationCap className="text-[#2b5a9e]" />
                    <h4>Requirements:</h4>
                  </div>
                  <ul className="list-none text-gray-700 mt-2 space-y-2">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedJob(job);
                  setShowModal(true);
                }}
                className="mt-6 w-full bg-gradient-to-r from-[#2b5a9e] to-[#d9764a] text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300"
              >
                <FaFileAlt />
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        {showModal && (
          <ApplicationModal
            selectedJob={selectedJob}
            formData={formData}
            setFormData={setFormData}
            handleApply={handleApply}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </main>
  );
};

export default Careers; 