import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import { gradientBlobsConfig } from "../../data/aboutValuesData";

// Memoized floating nodes - optimized for performance
const FloatingNodes = memo(({ shouldAnimate, performanceSettings }) => {
  // Calculate deterministic node positions for better performance
  const nodePositions = useMemo(() => {
    const positions = [];
    const count = performanceSettings.particleCount;
    
    for (let i = 0; i < count; i++) {
      // Use deterministic positions instead of random for better performance
      positions.push({
        top: `${20 + (i * 60 / count)}%`,
        left: `${10 + (i * 80 / count)}%`,
        delay: i * 0.5,
        duration: 3 + (i % 3),
      });
    }
    return positions;
  }, [performanceSettings.particleCount]);

  return shouldAnimate ? (
    <>
      {nodePositions.map((pos, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-3 h-3 rounded-full bg-white"
          style={{
            top: pos.top,
            left: pos.left,
            willChange: 'transform, opacity',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            delay: pos.delay,
          }}
        />
      ))}
    </>
  ) : null;
});

// Memoized background component 
const AnimatedBackground = memo(({ shouldAnimate, performanceSettings }) => {
  // Use intersection observer to optimize offscreen animations
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
        />
      </div>
      
      {shouldAnimate && gradientBlobsConfig.map((blob, index) => (
        <motion.div
          key={index}
          className={blob.className}
          animate={blob.animation}
          transition={blob.transition}
          style={{ willChange: 'transform, opacity' }}
        />
      ))}

      <FloatingNodes 
        shouldAnimate={shouldAnimate}
        performanceSettings={performanceSettings}
      />
    </div>
  );
});

export default AnimatedBackground; 