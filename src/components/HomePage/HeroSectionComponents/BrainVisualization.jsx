import { motion } from "framer-motion";
import { useMemo, useCallback } from "react";
import "../HeroSectionComponents/animations.css";
import { animationStyles } from "./styles";

// Add style tag with keyframes for when CSS import fails
const AnimationKeyframes = () => (
  <style dangerouslySetInnerHTML={{ __html: animationStyles.keyframes }} />
);

// Reduced number of elements for better performance
const CONNECTIONS_COUNT = 8; // Further reduced from 10
const NODES_COUNT = 5; // Further reduced from 6

const BrainVisualization = ({ scaleUp, animate = true }) => {
  // Pre-compute connection angles and positions
  const connections = useMemo(() => {
    return Array.from({ length: CONNECTIONS_COUNT }).map((_, i) => ({
      angle: i * (360 / CONNECTIONS_COUNT),
      duration: 2 + (i % 3),
      delay: (i * 0.2) % 2
    }));
  }, []);

  // Pre-compute node positions - more deterministic for better performance
  const nodes = useMemo(() => {
    return Array.from({ length: NODES_COUNT }).map((_, i) => ({
      left: `${35 + (i * 7) % 30}%`,
      top: `${35 + (i * 9) % 30}%`,
      duration: 2 + i % 3,
      delay: i * 0.3
    }));
  }, []);

  // Memoize the rendered connections - simplified for better performance
  const renderConnections = useCallback(() => {
    if (!animate) {
      // Simplified static version when not animating
      return connections.slice(0, 5).map((connection, i) => (
        <div
          key={i}
          className="absolute h-1 bg-gradient-to-r from-teal-400/50 to-blue-500/0"
          style={{
            left: '50%',
            top: '50%',
            width: '25%',
            transformOrigin: 'left center',
            transform: `rotate(${connection.angle}deg)`,
          }}
        />
      ));
    }
    
    return connections.map((connection, i) => (
      <div
        key={i}
        className="absolute h-1 bg-gradient-to-r from-teal-400/70 to-blue-500/0 gpu"
        style={{
          left: '50%',
          top: '50%',
          transformOrigin: 'left center',
          transform: `rotate(${connection.angle}deg)`,
          width: '20%',
          animation: `pulse ${connection.duration}s infinite alternate ease-in-out`,
          animationDelay: `${connection.delay}s`,
        }}
      />
    ));
  }, [connections, animate]);

  // Memoize the rendered nodes
  const renderNodes = useCallback(() => {
    if (!animate) {
      // Simplified static version when not animating
      return nodes.slice(0, 3).map((node, i) => (
        <div
          key={i}
          className="absolute h-3 w-3 rounded-full bg-teal-400/70"
          style={{
            left: node.left,
            top: node.top,
          }}
        />
      ));
    }
    
    return nodes.map((node, i) => (
      <div
        key={i}
        className="absolute h-3 w-3 rounded-full bg-teal-400 animate-pulse gpu"
        style={{
          left: node.left,
          top: node.top,
          animationDuration: `${node.duration}s`,
          animationDelay: `${node.delay}s`,
          boxShadow: '0 0 5px rgba(45, 212, 191, 0.5)'
        }}
      />
    ));
  }, [nodes, animate]);

  return (
    <motion.div 
      className="mt-16 p-10 relative"
      variants={scaleUp}
    >
      {/* Add fallback animations */}
      <AnimationKeyframes />
      
      <div className="relative h-64 md:h-80 overflow-hidden rounded-xl">
        <div 
          className={`absolute inset-0 flex items-center justify-center ${animate ? 'animate-rotate gpu' : ''}`}
          style={{ 
            animationDuration: animate ? '20s' : '0s',
            transform: !animate ? 'rotate(0deg)' : undefined
          }}
        >
          <div className="relative w-40 h-40 md:w-60 md:h-60">
            {/* Brain visualization using CSS and animations */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-sm" />
            
            {/* Neural connections - reduced count */}
            {renderConnections()}
            
            {/* Neural nodes - reduced count */}
            {renderNodes()}
          </div>
        </div>
        
        <div 
          className="absolute inset-0 flex items-center justify-center text-white"
          style={{
            opacity: 1,
            transition: 'opacity 0.5s ease'
          }}
        >
          <div className="text-center z-10 backdrop-blur-sm bg-black/30 p-4 rounded-xl">
            <h3 
              className={`text-2xl font-bold mb-2 ${animate ? 'animate-pulse gpu' : ''}`} 
              style={{ animationDuration: animate ? '4s' : '0s' }}
            >
              Intelligent Systems
            </h3>
            <p className="max-w-md mx-auto">
              Our neural networks and deep learning models power the next generation of AI solutions
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BrainVisualization; 