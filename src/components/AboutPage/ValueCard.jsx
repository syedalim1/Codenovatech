import { motion } from "framer-motion";
import { memo, useState, useCallback } from "react";
import { cardVariants } from "../../data/aboutValuesData";

// Highly optimized tech icon component
const TechIcon = memo(({ Icon, index, shouldAnimate }) => (
  <motion.div
    className="text-gray-400"
    animate={shouldAnimate ? {
      y: [0, -5, 0],
      opacity: [0.5, 1, 0.5],
    } : {}}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay: index * 0.3,
    }}
    style={{ willChange: 'transform, opacity' }}
  >
    <Icon className="h-5 w-5" />
  </motion.div>
));

// Memoized value card component with optimized rendering
const ValueCard = memo(({ value, shouldAnimate }) => {
  const { name, icon: Icon, description, stat, color, techIcons } = value;
  const [isHovered, setIsHovered] = useState(false);
  
  // Optimize hover state changes
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <motion.div
      className="group relative overflow-hidden perspective-1000"
      variants={cardVariants}
      whileHover="hover"
      style={{ transformStyle: "preserve-3d", willChange: 'transform' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            className={`p-3 rounded-lg bg-gradient-to-r ${color}`}
            animate={shouldAnimate && isHovered ? {
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ willChange: isHovered ? 'transform' : 'auto' }}
          >
            <Icon className="h-6 w-6 text-white" />
          </motion.div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
        </div>

        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {techIcons.map((TechIconComponent, index) => (
            <TechIcon 
              key={index}
              Icon={TechIconComponent}
              index={index}
              shouldAnimate={shouldAnimate && isHovered}
            />
          ))}
        </div>

        <div className="text-sm text-gray-400">{stat}</div>
      </div>
    </motion.div>
  );
});

export default ValueCard; 