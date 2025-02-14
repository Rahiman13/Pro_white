import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';
import NetworkBackground from '../components/NetworkBackground';
import BaseUrl from '../API';

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      toast.error('Invalid unsubscribe link. Please try again or contact support.');
      navigate('/');
    }
  }, [email, navigate]);

  const handleUnsubscribe = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BaseUrl}/api/subscribers/unsubscribe`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

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
                    <FaEnvelope className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Successfully Unsubscribed
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      You've been removed from our newsletter list.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ),
          {
            position: 'top-center',
            duration: 4000,
          }
        );
        setTimeout(() => navigate('/'), 4000);
      } else {
        throw new Error('Failed to unsubscribe');
      }
    } catch (error) {
      toast.error('Failed to unsubscribe. Please try again.', {
        position: 'top-center',
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const showToast = (type, message) => {
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
                {type === 'success' ? (
                  <FaEnvelope className="h-6 w-6 text-green-500" />
                ) : (
                  <FaExclamationTriangle className="h-6 w-6 text-red-500" />
                )}
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {type === 'success' ? 'Successfully Unsubscribed' : 'Error'}
                </p>
                <p className="mt-1 text-sm text-gray-500">{message}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ),
      {
        position: 'top-center',
        duration: 4000,
      }
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <section className="relative min-h-screen overflow-hidden">
        <NetworkBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <FaExclamationTriangle className="mx-auto text-5xl text-yellow-500" />
            
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#19234d' }}>
              Unsubscribe from Newsletter
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're sorry to see you go! Are you sure you want to unsubscribe{' '}
              <span className="font-semibold text-blue-600">{email}</span> from our newsletter?
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleUnsubscribe}
                disabled={isLoading}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {isLoading ? 'Processing...' : 'Confirm Unsubscribe'}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                disabled={isLoading}
                className="px-8 py-4 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text font-semibold text-lg hover:border-blue-500 rounded-full transition-all duration-300"
              >
                Go Back Home
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Unsubscribe;
