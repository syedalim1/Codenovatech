import { motion } from "framer-motion";

function AiNetworkAnimation() {
  const nodes = Array(15).fill(0);
  const connections = Array(30).fill(0);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {nodes.map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-3 h-3 bg-teal-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      {connections.map((_, i) => (
        <motion.div
          key={`connection-${i}`}
          className="absolute h-px bg-gradient-to-r from-teal-500 to-blue-500"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 80}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
            transformOrigin: "left center",
          }}
          animate={{
            opacity: [0, 0.7, 0],
            width: ["0%", "100%", "0%"],
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
  );
}

export default AiNetworkAnimation;
