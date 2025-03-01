import React from "react";
import { motion } from "framer-motion";

const AiBackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Neural Network Connection Lines */}
      <svg
        className="absolute w-full h-full opacity-20"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#36D1DC" />
            <stop offset="100%" stopColor="#5B86E5" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F5A0" />
            <stop offset="100%" stopColor="#00D9F5" />
          </linearGradient>
        </defs>
        
        {/* Neural Network Lines */}
        <g strokeWidth="1" stroke="url(#gradient1)" opacity="0.6">
          <line x1="100" y1="100" x2="300" y2="200" />
          <line x1="300" y1="200" x2="500" y2="150" />
          <line x1="500" y1="150" x2="700" y2="300" />
          <line x1="100" y1="300" x2="300" y2="400" />
          <line x1="300" y1="400" x2="500" y2="350" />
          <line x1="500" y1="350" x2="700" y2="500" />
          <line x1="100" y1="500" x2="300" y2="600" />
          <line x1="300" y1="600" x2="500" y2="550" />
          <line x1="500" y1="550" x2="700" y2="700" />
        </g>
      </svg>

      {/* Floating Neural Nodes */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 rounded-full bg-teal-400 opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [
                0,
                Math.random() * 20 - 10,
                Math.random() * 20 - 10,
                0,
              ],
              y: [
                0,
                Math.random() * 20 - 10,
                Math.random() * 20 - 10,
                0,
              ],
              scale: [1, 1.2, 0.9, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glowing Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-1 h-1 rounded-full bg-blue-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* AI Circuit Patterns */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20 bg-gradient-to-t from-teal-500 to-transparent" />
      <div className="absolute top-0 right-0 w-32 h-full opacity-20 bg-gradient-to-l from-blue-500 to-transparent" />
      
      {/* Digital Code Rain Effect */}
      <motion.div 
        className="absolute inset-0 opacity-5 text-teal-500 text-lg font-mono leading-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        {Array.from({ length: 20 }).map((_, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex">
            {Array.from({ length: 40 }).map((_, colIndex) => (
              <motion.span
                key={`digit-${rowIndex}-${colIndex}`}
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              >
                {Math.random() > 0.5 ? "0" : "1"}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AiBackgroundAnimation;
