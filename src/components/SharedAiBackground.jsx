import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useAnimationVisibility, usePerformanceOptimizedAnimations } from "../utils/performanceUtils";

// Memoized neural network SVG for better performance
const NeuralNetworkSVG = memo(() => (
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
    
    {/* Neural Network Lines - Static, no animations needed */}
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
));
NeuralNetworkSVG.displayName = 'NeuralNetworkSVG';

// Memoized neural nodes with deterministic positioning
const FloatingNeuralNodes = memo(({ shouldAnimate, performanceSettings }) => {
  // Calculate deterministic positions instead of random for better performance
  const nodePositions = useMemo(() => {
    const positions = [];
    const nodeCount = performanceSettings?.particleCount || 10;
    
    for (let i = 0; i < nodeCount; i++) {
      // Create a grid pattern with slight variations instead of random positions
      const row = Math.floor(i / 4);
      const col = i % 4;
      
      positions.push({
        left: `${15 + col * 25}%`,
        top: `${15 + row * 25}%`,
        xMove: (i % 3 - 1) * 10, // -10, 0, or 10 based on index
        yMove: ((i + 1) % 3 - 1) * 10, // -10, 0, or 10 based on index
        duration: 6 + (i % 4), // 6-9 seconds
        delay: i * 0.2, // Staggered delays
      });
    }
    return positions;
  }, [performanceSettings?.particleCount]);

  if (!shouldAnimate) return null;

  return (
    <div className="absolute inset-0">
      {nodePositions.map((node, index) => (
        <motion.div
          key={index}
          className="absolute w-4 h-4 rounded-full bg-teal-400 opacity-70"
          style={{
            left: node.left,
            top: node.top,
            willChange: 'transform, opacity',
          }}
          animate={{
            x: [0, node.xMove, 0],
            y: [0, node.yMove, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: node.delay,
          }}
        />
      ))}
    </div>
  );
});
FloatingNeuralNodes.displayName = 'FloatingNeuralNodes';
FloatingNeuralNodes.propTypes = {
  shouldAnimate: PropTypes.bool,
  performanceSettings: PropTypes.shape({
    particleCount: PropTypes.number,
    tier: PropTypes.string
  })
};

// Memoized particles with deterministic positioning
const GlowingParticles = memo(({ shouldAnimate, performanceSettings }) => {
  // Calculate deterministic positions for particles
  const particlePositions = useMemo(() => {
    const positions = [];
    const particleCount = performanceSettings?.tier === 'low' ? 10 : 
                         performanceSettings?.tier === 'medium' ? 20 : 30;
    
    for (let i = 0; i < particleCount; i++) {
      const row = Math.floor(i / 6) % 5;
      const col = i % 6;
      
      positions.push({
        left: `${10 + col * 16}%`,
        top: `${10 + row * 20}%`,
        xMove: 25 - (i % 50), // Deterministic movement
        yMove: (i % 40) - 20, // Deterministic movement
        duration: 4 + (i % 3),
        delay: (i % 5) * 0.4,
      });
    }
    return positions;
  }, [performanceSettings?.tier]);

  if (!shouldAnimate) return null;

  return (
    <div className="absolute inset-0">
      {particlePositions.map((particle, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 rounded-full bg-blue-400"
          style={{
            left: particle.left,
            top: particle.top,
            willChange: 'transform, opacity',
          }}
          animate={{
            x: [0, particle.xMove, 0],
            y: [0, particle.yMove, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
});
GlowingParticles.displayName = 'GlowingParticles';
GlowingParticles.propTypes = {
  shouldAnimate: PropTypes.bool,
  performanceSettings: PropTypes.shape({
    particleCount: PropTypes.number,
    tier: PropTypes.string
  })
};

// Optimized code rain effect with reduced components
const CodeRainEffect = memo(({ shouldAnimate }) => {
  // If not visible, don't render at all
  if (!shouldAnimate) return null;
  
  // Generate a limited set of rows and columns
  const rows = 10; // Reduced from 20
  const cols = 20; // Reduced from 40
  
  return (
    <motion.div 
      className="absolute inset-0 opacity-5 text-teal-500 text-lg font-mono leading-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.05 }}
      transition={{ duration: 2 }}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex">
          {Array.from({ length: cols }).map((_, colIndex) => (
            <motion.span
              key={`digit-${rowIndex}-${colIndex}`}
              animate={{
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3 + (rowIndex + colIndex) % 4,
                repeat: Infinity,
                delay: (rowIndex * cols + colIndex) % 5,
              }}
              style={{ willChange: 'opacity' }}
            >
              {(rowIndex + colIndex) % 2 === 0 ? "0" : "1"}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
});
CodeRainEffect.displayName = 'CodeRainEffect';
CodeRainEffect.propTypes = {
  shouldAnimate: PropTypes.bool
};

const SharedAiBackground = () => {
  const [ref, isVisible] = useAnimationVisibility();
  const performanceSettings = usePerformanceOptimizedAnimations();
  
  return (
    <div ref={ref} className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
      {/* Static elements are always rendered */}
      <NeuralNetworkSVG />
      
      {/* Dynamic elements only render when visible */}
      <FloatingNeuralNodes shouldAnimate={isVisible} performanceSettings={performanceSettings} />
      <GlowingParticles shouldAnimate={isVisible} performanceSettings={performanceSettings} />
      <CodeRainEffect shouldAnimate={isVisible && performanceSettings?.tier !== 'low'} />
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('/circuit-pattern.svg')` }} />
    </div>
  );
};

SharedAiBackground.displayName = 'SharedAiBackground';

export default memo(SharedAiBackground);
