"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "+2348142562389"; // Replace with your WhatsApp number
  const message = "Hello! I'd like to connect with you."; // Default message

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 
              bg-white dark:bg-gray-800 px-4 py-2 rounded-xl shadow-lg
              border border-gray-200 dark:border-gray-700 whitespace-nowrap"
          >
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Chat with me!
            </p>
            {/* Triangle */}
            <div className="absolute top-1/2 right-[-8px] -translate-y-1/2 
              border-8 border-transparent border-l-white dark:border-l-gray-800" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          {/* Pulse Effect */}
          <div className="absolute inset-0 rounded-full bg-green-500 
            animate-ping opacity-25" />
          
          {/* Button */}
          <div className="relative flex items-center justify-center w-14 h-14 
            rounded-full bg-gradient-to-r from-green-500 to-green-600 
            shadow-lg border-2 border-white dark:border-gray-800
            transform transition-transform duration-300 group-hover:rotate-6">
            {/* WhatsApp Icon */}
            <svg 
              viewBox="0 0 24 24" 
              className="w-7 h-7 text-white fill-current"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
        </div>
      </motion.a>
    </div>
  );
} 