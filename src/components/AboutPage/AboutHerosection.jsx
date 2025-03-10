import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import {
  FaAward,
  FaUsers,
  FaBrain,
  FaRobot,
  FaDatabase,
  FaChartLine,
  FaMicrochip,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiNvidia,
} from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { useAnimationVisibility, usePerformanceOptimizedAnimations } from "../../utils/performanceUtils";

// Memoized animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Memoized card variants
const cardVariants = {
  initial: {
    opacity: 0,
    y: 50,
    rotateY: 25,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  hover: {
    y: -15,
    scale: 1.05,
    rotateY: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

// Memoized floating animation
const float = {
  animate: {
    y: [0, -10, 0],
    rotateZ: [0, 2, 0, -2, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Pre-computed particle colors
const particleColors = {
  blue: ["#38bdf8", "#3b82f6", "#2dd4bf"],
  purple: ["#c084fc", "#a855f7", "#d946ef"],
  orange: ["#fb923c", "#f97316", "#f59e0b"],
  green: ["#4ade80", "#10b981", "#22d3ee"],
};

// Memoized background component
const AnimatedBackground = memo(({ shouldAnimate, performanceSettings }) => {
  const gradientBlobs = useMemo(() => [
    {
      className: "absolute -top-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl",
      animation: {
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1],
        x: [0, 30, 0],
        y: [0, -20, 0],
      },
      transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
    },
    {
      className: "absolute -top-20 -right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl",
      animation: {
        scale: [1, 1.3, 1],
        opacity: [0.1, 0.3, 0.1],
        x: [0, -40, 0],
        y: [0, 30, 0],
      },
      transition: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 },
    },
    {
      className: "absolute -bottom-40 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl",
      animation: {
        scale: [1, 1.5, 1],
        opacity: [0.05, 0.15, 0.05],
      },
      transition: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 },
    },
  ], []);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
        />
      </div>
      
      {shouldAnimate && gradientBlobs.map((blob, index) => (
        <motion.div
          key={index}
          className={blob.className}
          animate={blob.animation}
          transition={blob.transition}
        />
      ))}

      {/* Neural network visualization - reduced node count based on performance settings */}
      {shouldAnimate && [...Array(performanceSettings.particleCount)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-3 h-3 rounded-full bg-white"
          style={{
            top: `${20 + (i * 60 / performanceSettings.particleCount)}%`,
            left: `${10 + (i * 80 / performanceSettings.particleCount)}%`,
            willChange: 'transform, opacity',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
});

// Memoized tech icons component
const TechIcons = memo(({ shouldAnimate }) => {
  const icons = useMemo(() => [
    { Icon: SiTensorflow, position: { top: '20%', left: '15%' } },
    { Icon: SiPytorch, position: { top: '40%', right: '10%' } },
    { Icon: SiOpenai, position: { bottom: '30%', left: '20%' } },
    { Icon: SiNvidia, position: { bottom: '20%', right: '25%' } },
  ], []);

  return (
    <>
      {icons.map(({ Icon, position }, index) => (
        <motion.div
          key={index}
          className="absolute text-gray-500/30 text-4xl"
          style={{ ...position, willChange: 'transform, opacity' }}
          animate={shouldAnimate ? {
            y: [0, -10, 0],
            opacity: [0.3, 0.5, 0.3],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </>
  );
});

function AboutHeroSection() {
  // Use performance utilities
  const [sectionRef, shouldAnimate] = useAnimationVisibility();
  const performanceSettings = usePerformanceOptimizedAnimations();

  return (
    <div
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
    >
      <AnimatedBackground
        shouldAnimate={shouldAnimate}
        performanceSettings={performanceSettings}
      />

      <TechIcons shouldAnimate={shouldAnimate} />

      <div className="container mx-auto px-4 py-24">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          animate={shouldAnimate ? "animate" : "initial"}
          variants={staggerChildren}
        >
          <motion.h1
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400"
            variants={fadeIn}
          >
            Pioneering AI Solutions for Tomorrow
          </motion.h1>

          <motion.div className="text-xl text-gray-300 mb-8" variants={fadeIn}>
            <TypeAnimation
              sequence={[
                "Building Intelligent Systems",
                2000,
                "Transforming Businesses",
                2000,
                "Innovating with AI",
                2000,
              ]}
              repeat={Infinity}
              wrapper="span"
            />
          </motion.div>

          <motion.p className="text-lg text-gray-400 mb-12" variants={fadeIn}>
            We're a team of passionate AI engineers and researchers dedicated to
            pushing the boundaries of what's possible with artificial
            intelligence.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            variants={fadeIn}
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 transform"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="px-8 py-3 bg-gray-800 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 transform border border-blue-500"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default memo(AboutHeroSection);
