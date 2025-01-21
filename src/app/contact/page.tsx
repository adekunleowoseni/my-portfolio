"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Add StatusModal component
const StatusModal = ({ 
  status, 
  onClose 
}: { 
  status: 'success' | 'error', 
  onClose: () => void 
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-50 
      flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-sm w-full 
        shadow-2xl border border-gray-200 dark:border-gray-800"
      onClick={e => e.stopPropagation()}
    >
      <div className="text-center">
        {status === 'success' ? (
          <>
            <div className="w-16 h-16 rounded-full bg-green-500/10 mx-auto mb-4 
              flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-3xl">✅</span>
              </motion.div>
            </div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r 
              from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Message Sent!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Thank you for reaching out. I'll get back to you soon!
            </p>
          </>
        ) : (
          <>
            <div className="w-16 h-16 rounded-full bg-red-500/10 mx-auto mb-4 
              flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-3xl">❌</span>
              </motion.div>
            </div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r 
              from-red-500 to-rose-500 bg-clip-text text-transparent">
              Message Failed
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Something went wrong. Please try again later.
            </p>
          </>
        )}
        
        <button
          onClick={onClose}
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 
            text-white font-medium hover:opacity-90 transition-all duration-300"
        >
          Close
        </button>
      </div>
    </motion.div>
  </motion.div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setShowModal(true);

    } catch (error) {
      setStatus('error');
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setStatus('idle');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen p-8 sm:p-20 relative overflow-hidden mt-16">
      {/* Animated background effects */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full 
        bg-purple-500/20 dark:bg-purple-500/30 blur-[100px] animate-blob" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full 
        bg-blue-500/20 dark:bg-blue-500/30 blur-[100px] animate-blob animation-delay-2000" />

      {/* Add AnimatePresence and StatusModal */}
      <AnimatePresence>
        {showModal && status !== 'loading' && (
          <StatusModal 
            status={status === 'success' ? 'success' : 'error'} 
            onClose={handleCloseModal} 
          />
        )}
      </AnimatePresence>

      <main className="relative max-w-4xl mx-auto">
        <div className="backdrop-blur-sm bg-white/50 dark:bg-black/50 p-8 lg:p-12 rounded-3xl 
          border border-gray-200 dark:border-gray-800 shadow-xl animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 
            bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-black/50 
                    backdrop-blur-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent
                    transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-black/50 
                    backdrop-blur-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent
                    transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-black/50 
                  backdrop-blur-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent
                  transition-all duration-300"
                placeholder="How can I help you?"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border bg-white/50 dark:bg-black/50 
                  backdrop-blur-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent
                  transition-all duration-300 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white 
                py-4 rounded-xl font-medium hover:opacity-90 transform hover:scale-[1.02] 
                transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="backdrop-blur-sm bg-white/50 dark:bg-black/50 p-6 rounded-3xl 
            border border-gray-200 dark:border-gray-800 shadow-xl
            transform transition-all duration-300 hover:scale-[1.02]
            animate-fade-in-up animation-delay-500">
            <div className="flex items-center gap-4">
              <span className="text-3xl">📍</span>
              <div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/50 dark:bg-black/50 p-6 rounded-3xl 
            border border-gray-200 dark:border-gray-800 shadow-xl
            transform transition-all duration-300 hover:scale-[1.02]
            animate-fade-in-up animation-delay-700">
            <div className="flex items-center gap-4">
              <span className="text-3xl">📧</span>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">contact@example.com</p>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-white/50 dark:bg-black/50 p-6 rounded-3xl 
            border border-gray-200 dark:border-gray-800 shadow-xl
            transform transition-all duration-300 hover:scale-[1.02]
            animate-fade-in-up animation-delay-1000">
            <div className="flex items-center gap-4">
              <span className="text-3xl">📱</span>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">+234 123 456 7890</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 