import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      {/* Floating Circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full bg-gradient-to-br from-teal-500/20 to-blue-500/20"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: "blur(40px)",
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, 40, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Floating Squares */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`square-${i}`}
          className="absolute bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm"
          style={{
            width: `${Math.random() * 80 + 30}px`,
            height: `${Math.random() * 80 + 30}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            rotate: "45deg",
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, -30, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Neural Network Nodes */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
            boxShadow: [
              "0 0 0 rgba(255,255,255,0)",
              "0 0 5px rgba(255,255,255,0.5)",
              "0 0 0 rgba(255,255,255,0)",
            ],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Data Flow Lines */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 30}%`,
            transform: `rotate(${Math.random() * 180}deg)`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
