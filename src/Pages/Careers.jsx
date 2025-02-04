import React from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
  const jobs = [
    {
      title: 'Senior React Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Hybrid',
      type: 'Full-time'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'On-site',
      type: 'Full-time'
    },
    {
      title: 'Project Manager',
      department: 'Management',
      location: 'Remote',
      type: 'Full-time'
    }
  ];

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600">
            Be part of something special. We're always looking for talented people to join our team.
          </p>
        </div>

        <div className="grid gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-gray-600 mt-1">{job.department}</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {job.location}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {job.type}
                  </span>
                </div>
              </div>
              <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
                Apply Now →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Careers; 