import { motion } from "framer-motion";
import { memo, useMemo, useState, useEffect } from "react";
import { 
  useAnimationVisibility, 
  usePerformanceOptimizedAnimations, 
  detectPerformanceTier 
} from "../../utils/performanceUtils";

// Import separated components
import ValueCard from "./ValueCard";
import AnimatedBackground from "./AnimatedBackground";

// Import data
import { 
  valuesData, 
  staggerChildren 
} from "../../data/aboutValuesData";

function AboutValuesSection() {
  const [sectionRef, shouldAnimate] = useAnimationVisibility(0.1);
  const performanceSettings = usePerformanceOptimizedAnimations();
  const [performanceTier, setPerformanceTier] = useState(null);
  
  // Get performance tier once on mount
  useEffect(() => {
    setPerformanceTier(detectPerformanceTier());
  }, []);
  
  // Memoize the values list to avoid unnecessary re-renders
  const valuesList = useMemo(() => (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={staggerChildren}
      initial="initial"
      animate={shouldAnimate ? "animate" : "initial"}
    >
      {valuesData.map((value, index) => (
        <ValueCard
          key={index}
          value={value}
          shouldAnimate={shouldAnimate}
        />
      ))}
    </motion.div>
  ), [shouldAnimate]);

  return (
    <div 
      ref={sectionRef} 
      className="relative py-24 overflow-hidden"
      style={{ 
        willChange: shouldAnimate ? 'transform, opacity' : 'auto',
        contain: 'content' // CSS containment for better performance
      }}
    >
      <AnimatedBackground 
        shouldAnimate={shouldAnimate}
        performanceSettings={performanceSettings}
      />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're driven by a set of core values that guide our approach to AI innovation
            and client success.
          </p>
        </motion.div>

        {/* Render memoized values list */}
        {valuesList}
        
        {/* Performance indicator (can be removed in production) */}
        {performanceTier && (
          <div className="mt-8 text-center text-xs text-gray-500">
            Performance Mode: {performanceTier}
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(AboutValuesSection);
