import { motion } from "framer-motion";
import { useMemo, memo } from "react";

// Reduced node count for better performance
const NODE_COUNT = 8; // Reduced from 15
const CONNECTION_COUNT = 15; // Reduced from 30

// Pre-compute node positions for better performance
const useNodePositions = () => {
  return useMemo(() => {
    return Array(NODE_COUNT).fill(0).map((_, i) => ({
      id: `node-${i}`,
      left: 10 + (i % 4) * 25, // More deterministic and evenly spaced
      top: 10 + Math.floor(i / 4) * 30,
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
      duration: 3 + (i % 3),
      delay: (i % 5) * 0.5,
    }));
  }, []);
};

// Pre-compute connection positions for better performance
const useConnectionPositions = (nodePositions) => {
  return useMemo(() => {
    return Array(CONNECTION_COUNT).fill(0).map((_, i) => {
      // Create connections between nodes in a more structured way
      const sourceIndex = i % NODE_COUNT;
      const targetIndex = (i + 1 + Math.floor(i / NODE_COUNT)) % NODE_COUNT;
      const source = nodePositions[sourceIndex];
      const target = nodePositions[targetIndex];
      
      // Calculate angle and distance between nodes
      const dx = target.left - source.left;
      const dy = target.top - source.top;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      return {
        id: `connection-${i}`,
        left: `${source.left}%`,
        top: `${source.top}%`,
        width: `${distance}px`,
        angle,
        opacity: [0.2, 0.6, 0.2],
        duration: 2 + (i % 4),
        delay: (i % 3) * 0.3,
      };
    });
  }, [nodePositions]);
};

// Memoized component for better performance
const AiNetworkAnimation = memo(({ animate = true }) => {
  // Pre-compute all positions
  const nodePositions = useNodePositions();
  const connectionPositions = useConnectionPositions(nodePositions);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Render nodes */}
      {nodePositions.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-3 h-3 bg-teal-400 rounded-full"
          style={{
            left: `${node.left}%`,
            top: `${node.top}%`,
            willChange: animate ? 'transform, opacity' : 'auto',
          }}
          animate={animate ? {
            scale: node.scale,
            opacity: node.opacity,
          } : {}}
          transition={animate ? {
            duration: node.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: node.delay,
          } : {}}
        />
      ))}
      
      {/* Render connections between nodes */}
      {connectionPositions.map((connection) => (
        <motion.div
          key={connection.id}
          className="absolute h-px bg-gradient-to-r from-teal-500 to-blue-500"
          style={{
            left: connection.left,
            top: connection.top,
            width: connection.width,
            transform: `rotate(${connection.angle}deg)`,
            transformOrigin: "left center",
            willChange: animate ? 'opacity' : 'auto',
          }}
          animate={animate ? {
            opacity: connection.opacity,
          } : {}}
          transition={animate ? {
            duration: connection.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: connection.delay,
          } : {}}
        />
      ))}
    </div>
  );
});

export default AiNetworkAnimation;
