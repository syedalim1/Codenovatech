import { motion } from "framer-motion";

function AiDataFlowAnimation() {
  const lines = Array(20).fill(0);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {lines.map((_, i) => (
        <motion.div
          key={`data-flow-${i}`}
          className="absolute h-px"
          style={{
            left: "0%",
            top: `${(i * 100) / 20}%`,
            width: "100%",
            background: `linear-gradient(90deg, rgba(45, 212, 191, 0) 0%, rgba(45, 212, 191, ${0.3 + Math.random() * 0.7}) 50%, rgba(45, 212, 191, 0) 100%)`,
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}

export default AiDataFlowAnimation;
