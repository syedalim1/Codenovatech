import { motion } from "framer-motion";

function NavbarBackgroundAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-1 h-1 rounded-full bg-teal-400/50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${10 + Math.random() * 20}%`,
            transform: `rotate(${Math.random() * 180}deg)`,
          }}
          animate={{
            opacity: [0, 0.3, 0],
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
}

export default NavbarBackgroundAnimation;
