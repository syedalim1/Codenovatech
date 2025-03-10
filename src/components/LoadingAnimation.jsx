import { motion } from "framer-motion";
import PropTypes from "prop-types";

/**
 * AI-themed loading animation component
 * Can be used across the application for consistent loading experience
 */
const LoadingAnimation = ({ size = "medium", text = "Loading AI Content..." }) => {
  // Size variants
  const sizes = {
    small: {
      spinner: "w-8 h-8",
      text: "text-sm",
      container: "min-h-[100px]"
    },
    medium: {
      spinner: "w-12 h-12",
      text: "text-base",
      container: "min-h-[200px]"
    },
    large: {
      spinner: "w-20 h-20",
      text: "text-xl",
      container: "min-h-[300px]"
    }
  };

  const currentSize = sizes[size] || sizes.medium;

  return (
    <div className={`flex items-center justify-center ${currentSize.container}`}>
      <div className="flex flex-col items-center space-y-4">
        {/* Neural network spinner animation */}
        <div className="relative">
          {/* Main spinner */}
          <div 
            className={`${currentSize.spinner} border-4 border-teal-500 border-t-transparent rounded-full animate-spin`}
          />
          
          {/* Particle effects */}
          <motion.div
            className="absolute top-0 left-0 w-2 h-2 bg-blue-400 rounded-full"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute bottom-0 right-0 w-2 h-2 bg-teal-400 rounded-full"
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>
        
        {/* Loading text */}
        <div className={`text-teal-500 font-medium ${currentSize.text}`}>
          {text}
        </div>
        
        {/* Binary code animation (0s and 1s) for AI theme */}
        <motion.div 
          className="text-xs text-teal-500/30 font-mono"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>{Math.round(Math.random())}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

LoadingAnimation.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  text: PropTypes.string
};

export default LoadingAnimation;
