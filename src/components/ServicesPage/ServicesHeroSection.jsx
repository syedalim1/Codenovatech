import { FaBrain, FaMicrochip, FaRobot } from "react-icons/fa";
import { SiTensorflow, SiOpenai, SiNvidia } from "react-icons/si";
import { motion } from "framer-motion";
import AiNetworkAnimation from "./AiNetworkAnimation";
import { useMemo, memo } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

// Pre-computed animation values for better performance
const getFloatingAnimations = () => {
  return Array(8).fill(0).map((_, i) => ({
    delay: i * 0.3,
    duration: 8 + (i % 4) * 2,
    x: Math.floor((i % 3) * 33), // More deterministic positions
    y: Math.floor((i % 4) * 25),
  }));
};

// Memoized floating AI nodes component
const FloatingNodes = memo(({ animate = true }) => {
  const nodeAnimations = useMemo(() => getFloatingAnimations(), []);
  
  // Reduced number of nodes for better performance
  return nodeAnimations.map((anim, i) => (
    <motion.div
      key={i}
      className="absolute w-8 h-8 border-2 border-teal-400/30 rounded-full"
      style={{
        left: `${20 + anim.x}%`,
        top: `${10 + anim.y}%`,
        willChange: "transform",
      }}
      animate={animate ? {
        y: [0, -40, 0],
        rotate: [0, 5, -5, 0],
      } : {}}
      transition={animate ? {
        delay: anim.delay,
        duration: anim.duration,
        repeat: Infinity,
        ease: "easeInOut",
      } : {}}
    />
  ));
});

// Memoized tech icons with improved performance
const TechIcons = memo(({ animate = true }) => {
  const iconData = useMemo(() => [
    { Icon: FaBrain, color: "text-blue-400", size: "text-5xl", left: "10%", top: "20%" },
    { Icon: FaRobot, color: "text-purple-400", size: "text-4xl", left: "70%", top: "15%" },
    { Icon: FaMicrochip, color: "text-teal-400", size: "text-3xl", left: "20%", top: "70%" },
    { Icon: SiTensorflow, color: "text-orange-400", size: "text-3xl", left: "80%", top: "75%" },
    { Icon: SiOpenai, color: "text-green-400", size: "text-4xl", left: "15%", top: "40%" },
    { Icon: SiNvidia, color: "text-green-500", size: "text-3xl", left: "75%", top: "50%" }
  ], []);

  return iconData.map(({ Icon, color, size, left, top }, i) => (
    <motion.div
      key={i}
      className={`absolute ${color} ${size} opacity-30`}
      style={{
        left,
        top,
        willChange: "transform, opacity",
      }}
      animate={animate ? {
        y: [0, -10, 0],
        opacity: [0.3, 0.5, 0.3],
        rotate: [0, 10, 0],
      } : {}}
      transition={{
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5,
      }}
    >
      <Icon />
    </motion.div>
  ));
});

// Main component with optimization
function ServicesHeroSection({ isVisible = true }) {
  // Main content is always rendered, but animations are only active when visible
  return (
    <div className="relative overflow-hidden py-24">
      {/* AI Neural Background - Only active when visible */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
          />
        </div>
        
        {/* Only pass isVisible prop to control animations */}
        <AiNetworkAnimation animate={isVisible} />

        {/* Floating AI Nodes - reduced count and controlled by visibility */}
        <FloatingNodes animate={isVisible} />
      </div>

      {/* Tech icons spread around the hero section */}
      <TechIcons animate={isVisible} />

      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={fadeIn}
        >
          <motion.h1
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400"
            variants={fadeIn}
          >
            AI-Powered Solutions for Modern Businesses
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-10"
            variants={fadeIn}
          >
            From generative AI and predictive analytics to computer vision and
            natural language processing, we leverage cutting-edge technologies to
            transform your business.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            variants={fadeIn}
          >
            <a
              href="#services-list"
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 transform"
            >
              Explore Our Services
            </a>
            <a
              href="#services-cta"
              className="px-8 py-3 bg-gray-800 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 transform border border-blue-500"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Service Highlights */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={fadeIn}
          >
            {[
              {
                icon: <FaBrain className="text-4xl text-blue-400" />,
                title: "AI Integration",
                description:
                  "Seamlessly integrate AI capabilities into your existing systems and workflows.",
              },
              {
                icon: <FaRobot className="text-4xl text-purple-400" />,
                title: "Custom AI Development",
                description:
                  "Tailor-made AI solutions designed specifically for your business needs.",
              },
              {
                icon: <FaMicrochip className="text-4xl text-teal-400" />,
                title: "AI Consulting",
                description:
                  "Expert guidance on implementing AI strategies for maximum business impact.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur-sm"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesHeroSection;
