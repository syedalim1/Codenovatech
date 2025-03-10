import { motion } from "framer-motion";
import { useMemo, useCallback } from "react";

// Precomputed particles for performance
const PARTICLE_COUNT = 8; // Reduced from 15+ to 8
const EMOJI_COUNT = 5; // Reduced from 7 to 5

const BackgroundEffects = () => {
  // Memoize the random positions and animation parameters for particles
  // to prevent recalculation on every render
  const particleConfigs = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }).map(() => ({
      startX: Math.random() * 50,
      startY: Math.random() * 50,
      duration: 6 + Math.random() * 6, // Slightly longer animations for better performance
      delay: Math.random() * 3,
    }));
  }, []);

  // Memoize the emoji positions and animation parameters
  const emojiConfigs = useMemo(() => {
    const emojis = ['⚙️', '🤖', '🧠', '💻', '📊']; // Reduced list
    return emojis.map((emoji, index) => ({
      emoji,
      left: `${10 + Math.random() * 80}%`,
      top: `${10 + Math.random() * 80}%`,
      duration: 3 + Math.random() * 3,
      delay: index * 0.5,
    }));
  }, []);

  // Create once instead of inline in render for better performance
  const clipPath = "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)";
  
  // Memoize the rendered particles
  const renderParticles = useCallback(() => {
    return particleConfigs.map((config, i) => (
      <motion.div 
        key={i}
        className="absolute h-2 w-2 rounded-full bg-blue-500"
        style={{
          left: `${config.startX}%`,
          top: `${config.startY}%`,
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: config.duration,
          repeat: Infinity,
          ease: "linear",
          delay: config.delay,
        }}
      />
    ));
  }, [particleConfigs]);

  // Memoize the rendered emojis
  const renderEmojis = useCallback(() => {
    return emojiConfigs.map((config, i) => (
      <motion.div
        key={i}
        className="absolute text-2xl opacity-20"
        style={{ 
          left: config.left, 
          top: config.top 
        }}
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.3, 0.2],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: config.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: config.delay,
        }}
      >
        {config.emoji}
      </motion.div>
    ));
  }, [emojiConfigs]);

  return (
    <>
      {/* Reduced z-index layers to minimize compositing */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
        />
        
        {/* Enhanced particle network effect - with reduced particle count */}
        <div className="absolute inset-0">
          {renderParticles()}
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Primary gradient blob - reduced animation complexity */}
        <div className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-blue-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath,
              animation: "pulse 8s infinite alternate ease-in-out",
            }}
          />
        </div>
        
        {/* Secondary gradient element - simplified animation */}
        <div className="absolute inset-x-0 bottom-0 transform-gpu overflow-hidden blur-3xl">
          <div
            className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[140deg] bg-gradient-to-tr from-teal-500 to-indigo-600 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
            style={{
              clipPath,
              animation: "pulse 8s infinite alternate-reverse ease-in-out",
              animationDelay: "2s",
            }}
          />
        </div>
        
        {/* Floating tech icons - reduced count and complexity */}
        <div className="absolute inset-0 pointer-events-none">
          {renderEmojis()}
        </div>
      </div>

      {/* Add a CSS animation definition for the pulse effect */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 0.2;
            transform: scale(0.98) rotate(30deg);
          }
          100% {
            opacity: 0.3;
            transform: scale(1.02) rotate(30deg);
          }
        }
      `}</style>
    </>
  );
};

export default BackgroundEffects; 