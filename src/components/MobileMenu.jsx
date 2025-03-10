import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import "./MobileMenu.css";

const MobileMenu = ({ isOpen, onClose, navigation }) => {
  // Add/remove body class to prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <>
      {/* Backdrop overlay */}
      <div className="mobile-menu-overlay" onClick={onClose} />
      
      {/* Menu content */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="mobile-menu"
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
              CODENOVATECH
            </span>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white"
              aria-label="Close mobile menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 space-y-4">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <Link
                  to={item.href}
                  className="block px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg flex items-center gap-2"
                  onClick={onClose}
                >
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
          
          {/* Mobile CTA */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/contact"
                onClick={onClose}
                className="w-full block text-center px-6 py-3 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 text-white rounded-full relative overflow-hidden"
              >
                <span className="relative z-10">Start Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 opacity-0 hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-teal-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>,
    document.body
  );
};

export default MobileMenu; 