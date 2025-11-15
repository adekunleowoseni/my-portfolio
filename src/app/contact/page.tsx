"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle2, XCircle, Loader2 } from 'lucide-react';

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
    className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-50 
      flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-3xl p-10 max-w-md w-full 
        shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
      onClick={e => e.stopPropagation()}
    >
      <div className="text-center">
        {status === 'success' ? (
          <>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 
              mx-auto mb-6 flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r 
              from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Message Sent!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible!
            </p>
          </>
        ) : (
          <>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-rose-500 
              mx-auto mb-6 flex items-center justify-center shadow-lg">
              <XCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r 
              from-red-500 to-rose-500 bg-clip-text text-transparent">
              Message Failed
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Something went wrong. Please try again later or contact me directly via email.
            </p>
          </>
        )}
        
        <button
          onClick={onClose}
          className="cursor-target w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 
            text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg
            hover:shadow-xl hover:scale-105"
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

    } catch {
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'Lagos, Nigeria',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'owoseniadekunle94@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
      href: 'mailto:owoseniadekunle94@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+234 814 256 2389',
      gradient: 'from-green-500 to-emerald-500',
      href: 'tel:+2348142562389'
    }
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20 relative overflow-hidden mt-16 
      bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/20">
      {/* Animated background effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full 
          bg-gradient-to-r from-purple-400/30 via-pink-400/20 to-blue-400/30 
          dark:from-purple-500/20 dark:via-pink-500/15 dark:to-blue-500/20 
          blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full 
          bg-gradient-to-r from-blue-400/30 via-cyan-400/20 to-teal-400/30 
          dark:from-blue-500/20 dark:via-cyan-500/15 dark:to-teal-500/20 
          blur-[120px] animate-blob animation-delay-2000" />
      </div>

      {/* Add AnimatePresence and StatusModal */}
      <AnimatePresence>
        {showModal && status !== 'loading' && (
          <StatusModal 
            status={status === 'success' ? 'success' : 'error'} 
            onClose={handleCloseModal} 
          />
        )}
      </AnimatePresence>

      <main className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 
            bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 
            bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can bring your ideas to life together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 p-10 rounded-3xl 
              border border-gray-200/50 dark:border-gray-700/50 shadow-2xl animate-fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700
                        bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                        focus:ring-2 focus:ring-purple-500 focus:border-transparent
                        transition-all duration-300 text-gray-800 dark:text-gray-200
                        placeholder:text-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700
                        bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                        focus:ring-2 focus:ring-purple-500 focus:border-transparent
                        transition-all duration-300 text-gray-800 dark:text-gray-200
                        placeholder:text-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700
                      bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                      focus:ring-2 focus:ring-purple-500 focus:border-transparent
                      transition-all duration-300 text-gray-800 dark:text-gray-200
                      placeholder:text-gray-400"
                    placeholder="How can I help you?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700
                      bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                      focus:ring-2 focus:ring-purple-500 focus:border-transparent
                      transition-all duration-300 resize-none text-gray-800 dark:text-gray-200
                      placeholder:text-gray-400"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="cursor-target w-full flex items-center justify-center gap-2
                    bg-gradient-to-r from-purple-600 to-blue-600 text-white 
                    py-4 rounded-xl font-semibold shadow-xl shadow-purple-500/25
                    hover:shadow-2xl hover:shadow-purple-500/40 transform hover:scale-[1.02] 
                    transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                    disabled:hover:scale-100"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 p-8 rounded-3xl 
                    border border-gray-200/50 dark:border-gray-700/50 shadow-xl
                    transform transition-all duration-300 hover:scale-105 hover:-translate-y-2
                    hover:shadow-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${info.gradient} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="cursor-target text-sm text-gray-600 dark:text-gray-300 
                            hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
