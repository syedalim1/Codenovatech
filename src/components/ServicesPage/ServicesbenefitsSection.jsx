import { motion } from "framer-motion";
import { useState, useCallback, useMemo, memo } from "react";
import {
  FaBrain,
  FaRobot,
  FaMicrochip,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import { SiTensorflow, SiNvidia, SiOpenai } from "react-icons/si";

// Pre-compute benefit data to avoid recreating on every render
const benefitsData = [
  {
    icon: FaBrain,
    title: "Neural Architectures",
    description: "100+ AI models deployed with 99.7% prediction accuracy",
    stat: "10x Efficiency Boost",
    color: "from-purple-600 to-indigo-600",
    pattern: "neural-pattern",
  },
  {
    icon: FaRobot,
    title: "AI Assistants",
    description: "Natural Language Processing with contextual awareness",
    stat: "Launching v4.0 - 04/2025",
    color: "from-teal-400 to-cyan-600",
    pattern: "circuit-pattern",
    badge: "New AI Assistant",
  },
  {
    icon: FaMicrochip,
    title: "Edge AI Solutions",
    description: "Efficient ML models optimized for resource-constrained devices",
    stat: "95% Reduced Inference Time",
    color: "from-blue-500 to-indigo-500",
    pattern: "chip-pattern",
  },
  {
    icon: FaShieldAlt,
    title: "Secure AI Infrastructure",
    description: "Enterprise-grade security for your AI deployment",
    stat: "ISO 27001 Certified",
    color: "from-emerald-500 to-green-600",
    pattern: "shield-pattern",
  },
  {
    icon: FaChartLine,
    title: "AI Business Analytics",
    description: "Transform your data into actionable business insights",
    stat: "ROI Increase: 45%",
    color: "from-amber-500 to-orange-600",
    pattern: "graph-pattern",
  },
];

// Memoized icons component to avoid unnecessary rerenders
const TechIcons = memo(({ visible }) => {
  const icons = useMemo(() => [
    { Icon: SiTensorflow, position: { left: '15%', top: '20%' } },
    { Icon: SiOpenai, position: { left: '75%', top: '10%' } },
    { Icon: SiNvidia, position: { left: '45%', top: '75%' } }
  ], []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, position }, i) => (
        <motion.div
          key={i}
          className="absolute text-gray-500/30 text-4xl"
          style={position}
          animate={visible ? {
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 5, -5, 0],
          } : {}}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
});

// Memoized individual benefit card
const BenefitCard = memo(({ benefit, index, onHover, isActive, visible }) => {
  const { icon: Icon, title, description, stat, color, pattern, badge } = benefit;
  const iconAnimationProps = visible ? {
    rotate: [-5, 5, -5],
    scale: [1, 1.1, 1],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  } : {};

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl p-6 ${
        isActive ? "border-2 border-teal-400/50" : "border border-gray-700"
      } bg-gray-800/50 backdrop-blur-sm`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ y: -10 }}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <motion.div 
            className="p-3 rounded-lg bg-gray-700/50 text-xl"
            animate={iconAnimationProps}
          >
            <Icon className={`h-6 w-6 bg-gradient-to-r ${color} bg-clip-text text-transparent`} />
          </motion.div>
          {badge && (
            <span className="px-2 py-1 text-xs bg-teal-500/20 text-teal-300 rounded-full">
              {badge}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-300">{description}</p>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-xl font-semibold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            {stat}
          </span>
        </div>
      </div>

      <div
        className={`absolute inset-0 -z-10 opacity-10 bg-pattern-${pattern}`}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} transform ${
          isActive ? "scale-x-100" : "scale-x-0"
        } transition-transform duration-300 origin-left`}
      />
    </motion.div>
  );
});

function ServicesbenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Use callback for hover handling to avoid recreating on each render
  const handleHover = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  // Set up visibility observer
  const sectionRef = useCallback(node => {
    if (node) {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(node);
      
      // Cleanup
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  // Memoize benefits list to avoid recreating on every render
  const benefits = useMemo(() => benefitsData, []);

  return (
    <motion.div
      ref={sectionRef}
      className="relative py-12 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <TechIcons visible={isVisible} />

      <motion.div
        className="flex flex-col items-center text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Leading-Edge AI Technologies
        </motion.h2>
        <motion.p
          className="max-w-2xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Unlock the full potential of your business with our advanced AI
          solutions. We combine cutting-edge technology with deep industry
          expertise to deliver transformative results.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            benefit={benefit}
            index={index}
            onHover={handleHover}
            isActive={activeIndex === index}
            visible={isVisible}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default ServicesbenefitsSection;
