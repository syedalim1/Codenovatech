import { motion } from "framer-motion";
import {
  FaRocket,
  FaMedal,
  FaHandshake,
  FaUsers,
  FaTrophy,
  FaBrain,
  FaRobot,
  FaDatabase,
  FaChartLine,
  FaLightbulb,
  FaCode,
  FaCogs,
  FaNetworkWired,
} from "react-icons/fa";
import { SiGooglescholar, SiTensorflow, SiPytorch, SiOpenai } from "react-icons/si";

// 3D card animation variants
const cardVariants = {
  initial: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 20
    }
  },
  hover: {
    y: -10,
    scale: 1.05,
    transition: { 
      type: "spring", 
      stiffness: 400,
      damping: 10
    }
  }
};

const values = [
  {
    name: "AI Innovation",
    icon: FaBrain,
    description: "Pioneering AI solutions that drive business transformation",
    stat: "100+ AI Projects Deployed",
    color: "from-teal-500 to-blue-600",
    progress: 95, // Percentage for radial progress
    clients: ["Logo1", "Logo2", "Logo3"], // Client logos
    achievement: "AI Tech Award 2025 Winner",
    techIcons: [SiTensorflow, SiPytorch, SiOpenai],
    aiFeature: "Neural Architecture Search",
    aiMetric: "3x Faster Model Training",
    particles: "blue",
  },
  {
    name: "Data Excellence",
    icon: FaDatabase,
    description: "Delivering superior results through data-driven insights",
    stat: "99% Data Accuracy Rate",
    color: "from-purple-500 to-pink-600",
    progress: 99,
    clients: ["Logo4", "Logo5", "Logo6"],
    achievement: "Data Management Certification",
    techIcons: [FaChartLine, FaNetworkWired, FaCogs],
    aiFeature: "Automated Data Cleansing",
    aiMetric: "10TB Data Processed Daily",
    particles: "purple",
  },
  {
    name: "Algorithmic Transparency",
    icon: FaLightbulb,
    description: "Ensuring clear and ethical AI development processes",
    stat: "100% Algorithmic Audits Passed",
    color: "from-orange-500 to-red-600",
    progress: 100,
    clients: ["Logo7", "Logo8", "Logo9"],
    achievement: "Ethics in AI Recognition",
    techIcons: [FaCode, FaHandshake, FaUsers],
    aiFeature: "Explainable AI Framework",
    aiMetric: "100% Compliance with AI Regulations",
    particles: "orange",
  },
  {
    name: "Client Empowerment",
    icon: FaRobot,
    description: "Empowering clients with AI tools for greater success",
    stat: "90% Client AI Adoption Rate",
    color: "from-green-500 to-cyan-600",
    progress: 90,
    clients: ["Logo10", "Logo11", "Logo12"],
    achievement: "Client Success Award 2025",
    techIcons: [FaRocket, FaUsers, FaMedal],
    aiFeature: "No-Code AI Platform",
    aiMetric: "5x ROI for Clients",
    particles: "green",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Particle colors
const particleColors = {
  blue: ["#38bdf8", "#3b82f6", "#2dd4bf"],
  purple: ["#c084fc", "#a855f7", "#d946ef"],
  orange: ["#fb923c", "#f97316", "#f59e0b"],
  green: ["#4ade80", "#10b981", "#22d3ee"],
};

function AboutValuesSection() {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0">
        {/* Primary animated gradient blobs */}
        <motion.div 
          className="absolute -top-40 left-1/3 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* AI-themed floating elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 flex items-center justify-center"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
              AI
            </div>
            <div className="absolute inset-0 border-2 border-white/30 rounded-lg"></div>
          </div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-20 h-20 flex items-center justify-center"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -360],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
              ML
            </div>
            <div className="absolute inset-0 border-2 border-white/30 rounded-full"></div>
          </div>
        </motion.div>
        
        {/* Neural network visualization */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute w-3 h-3 rounded-full bg-white"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
                boxShadow: [
                  "0 0 0 rgba(255,255,255,0)",
                  "0 0 10px rgba(255,255,255,0.5)",
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
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 40}%`,
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
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100, 0],
                opacity: [0, 0.8, 0],
                scale: [0, Math.random() * 0.5 + 0.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              filter: [
                "drop-shadow(0 0 0px rgba(45,212,191,0))",
                "drop-shadow(0 0 10px rgba(45,212,191,0.5))",
                "drop-shadow(0 0 0px rgba(45,212,191,0))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
              Core AI Principles
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The foundation of our success in delivering exceptional AI solutions
            </p>
          </motion.div>
          
          {/* Animated divider */}
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-full mx-auto mt-6"
            animate={{
              width: ["10%", "20%", "10%"],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden perspective-1000"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* 3D Card with animated gradient border */}
              <div className="absolute inset-0 rounded-xl p-[2px] overflow-hidden">
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-xl`}
                  animate={{
                    background: [
                      `linear-gradient(to right, ${value.color.split(' ')[0].replace('from-', '')}, ${value.color.split(' ')[1].replace('to-', '')})`,
                      `linear-gradient(to bottom, ${value.color.split(' ')[0].replace('from-', '')}, ${value.color.split(' ')[1].replace('to-', '')})`,
                      `linear-gradient(to left, ${value.color.split(' ')[0].replace('from-', '')}, ${value.color.split(' ')[1].replace('to-', '')})`,
                      `linear-gradient(to top, ${value.color.split(' ')[0].replace('from-', '')}, ${value.color.split(' ')[1].replace('to-', '')})`,
                      `linear-gradient(to right, ${value.color.split(' ')[0].replace('from-', '')}, ${value.color.split(' ')[1].replace('to-', '')})`,
                    ],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              <div className="p-6 bg-gray-900 rounded-xl border border-gray-700/50 relative z-10 h-full transform-gpu">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5 overflow-hidden rounded-xl">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`grid-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                  </svg>
                </div>
                
                {/* Animated particles specific to each card */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={`particle-${index}-${i}`}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        backgroundColor: particleColors[value.particles][Math.floor(Math.random() * 3)],
                      }}
                      animate={{
                        y: [0, Math.random() * -50, 0],
                        x: [0, Math.random() * 30 - 15, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0, Math.random() * 2 + 1, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Radial progress indicator with animation */}
                <div className="absolute top-4 right-4">
                  <div className="relative w-16 h-16">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="30"
                        className="fill-none stroke-gray-700"
                        strokeWidth="6"
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="30"
                        className={`fill-none stroke-current text-${value.color.split(" ")[0].replace('from-', '')}`}
                        strokeWidth="6"
                        strokeDasharray={`${2 * Math.PI * 30}`}
                        initial={{ strokeDashoffset: `${2 * Math.PI * 30}` }}
                        animate={{ 
                          strokeDashoffset: `${2 * Math.PI * 30 * (1 - value.progress / 100)}`,
                          stroke: [
                            value.color.split(" ")[0].replace('from-', ''),
                            value.color.split(" ")[1].replace('to-', ''),
                            value.color.split(" ")[0].replace('from-', '')
                          ]
                        }}
                        transition={{ 
                          strokeDashoffset: { duration: 1.5, ease: "easeOut" },
                          stroke: { duration: 3, repeat: Infinity, ease: "linear" }
                        }}
                      />
                    </svg>
                    <motion.div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1, type: "spring" }}
                    >
                      {value.progress}%
                    </motion.div>
                  </div>
                </div>

                {/* Icon with animated effects */}
                <motion.div
                  className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${value.color} w-fit relative`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{ 
                    boxShadow: [
                      `0 0 0px ${value.color.split(' ')[0].replace('from-', '')}`,
                      `0 0 20px ${value.color.split(' ')[0].replace('from-', '')}`,
                      `0 0 0px ${value.color.split(' ')[0].replace('from-', '')}`,
                    ]
                  }}
                  transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
                >
                  <value.icon className="h-8 w-8 text-white" />
                  {/* Animated sparkle */}
                  <motion.div 
                    className="absolute inset-0 rounded-xl"
                    animate={{
                      boxShadow: [
                        "inset 0 0 0px rgba(255,255,255,0)",
                        "inset 0 0 10px rgba(255,255,255,0.5)",
                        "inset 0 0 0px rgba(255,255,255,0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Title with gradient animation */}
                <motion.h3 
                  className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${value.color} mb-4`}
                  animate={{
                    backgroundPosition: ['0% center', '100% center', '0% center'],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {value.name}
                </motion.h3>
                
                <p className="text-gray-300 mb-6">{value.description}</p>

                {/* AI Feature Badge */}
                <div className="mb-6 p-3 bg-gray-800/80 rounded-lg border-l-2 border-teal-500">
                  <div className="flex items-center gap-2 mb-1">
                    <FaRobot className="h-4 w-4 text-teal-400" />
                    <p className="text-teal-400 text-sm font-medium">{value.aiFeature}</p>
                  </div>
                  <p className="text-gray-400 text-xs">{value.aiMetric}</p>
                </div>

                {/* Tech Icons */}
                <div className="flex gap-3 mb-6">
                  {value.techIcons.map((Icon, i) => (
                    <motion.div
                      key={i}
                      className="p-2 bg-gray-800 rounded-lg"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 10,
                        backgroundColor: value.color.split(' ')[0].replace('from-', '')
                      }}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </motion.div>
                  ))}
                </div>

                {/* Stat with animated chart */}
                <div className="flex items-center gap-3 text-sm text-white font-medium mb-4">
                  <div className="relative w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${value.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${value.progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                  <span>{value.stat}</span>
                </div>

                {/* Achievement badge */}
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, 0, -10, 0],
                        color: ["#fcd34d", "#fbbf24", "#fcd34d"]
                      }}
                      transition={{ 
                        rotate: { duration: 2, repeat: Infinity },
                        color: { duration: 3, repeat: Infinity }
                      }}
                    >
                      <FaTrophy className="h-4 w-4" />
                    </motion.div>
                    <span>{value.achievement}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Trust Badges with animations */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="p-6 bg-gray-900 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden shadow-md flex items-center gap-4"
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            {/* Animated background glow */}
            <motion.div 
              className="absolute inset-0 bg-teal-500/5 rounded-xl"
              animate={{ 
                boxShadow: [
                  "inset 0 0 0px rgba(45,212,191,0)",
                  "inset 0 0 30px rgba(45,212,191,0.2)",
                  "inset 0 0 0px rgba(45,212,191,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="text-teal-500"
            >
              <SiGooglescholar className="h-8 w-8" />
            </motion.div>
            <div>
              <motion.div 
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                ISO 27001
              </motion.div>
              <div className="text-sm text-gray-300">Certified Security</div>
            </div>
          </motion.div>

          <motion.div 
            className="p-6 bg-gray-900 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-colors group relative overflow-hidden shadow-md flex items-center gap-4"
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            {/* Animated background glow */}
            <motion.div 
              className="absolute inset-0 bg-purple-500/5 rounded-xl"
              animate={{ 
                boxShadow: [
                  "inset 0 0 0px rgba(168,85,247,0)",
                  "inset 0 0 30px rgba(168,85,247,0.2)",
                  "inset 0 0 0px rgba(168,85,247,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            
            <motion.div
              whileHover={{ rotate: -10, scale: 1.1 }}
              className="text-purple-500"
            >
              <FaMedal className="h-8 w-8" />
            </motion.div>
            <div>
              <motion.div 
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                5★ Rating
              </motion.div>
              <div className="text-sm text-gray-300">Client Reviews</div>
            </div>
          </motion.div>

          <motion.div 
            className="p-6 bg-gray-900 rounded-xl border border-gray-700/50 hover:border-orange-500/30 transition-colors group relative overflow-hidden shadow-md flex items-center gap-4"
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            {/* Animated background glow */}
            <motion.div 
              className="absolute inset-0 bg-orange-500/5 rounded-xl"
              animate={{ 
                boxShadow: [
                  "inset 0 0 0px rgba(249,115,22,0)",
                  "inset 0 0 30px rgba(249,115,22,0.2)",
                  "inset 0 0 0px rgba(249,115,22,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
            
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="text-orange-500"
            >
              <FaUsers className="h-8 w-8" />
            </motion.div>
            <div>
              <motion.div 
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                50+
              </motion.div>
              <div className="text-sm text-gray-300">Satisfied Clients</div>
            </div>
          </motion.div>

          <motion.div 
            className="p-6 bg-gray-900 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-colors group relative overflow-hidden shadow-md flex items-center gap-4"
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            {/* Animated background glow */}
            <motion.div 
              className="absolute inset-0 bg-green-500/5 rounded-xl"
              animate={{ 
                boxShadow: [
                  "inset 0 0 0px rgba(16,185,129,0)",
                  "inset 0 0 30px rgba(16,185,129,0.2)",
                  "inset 0 0 0px rgba(16,185,129,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
            
            <motion.div
              whileHover={{ rotate: -10, scale: 1.1 }}
              className="text-green-500"
            >
              <FaRocket className="h-8 w-8" />
            </motion.div>
            <div>
              <motion.div 
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500"
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                5+ Years
              </motion.div>
              <div className="text-sm text-gray-300">Industry Experience</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Section with animations */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="relative inline-block mb-8"
            animate={{
              filter: [
                "drop-shadow(0 0 0px rgba(45,212,191,0))",
                "drop-shadow(0 0 10px rgba(45,212,191,0.3))",
                "drop-shadow(0 0 0px rgba(45,212,191,0))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
              Ready to experience our AI-driven development approach?
            </p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-block"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-full p-[2px] overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600 rounded-full"
                animate={{
                  background: [
                    "linear-gradient(to right, #14b8a6, #2563eb, #8b5cf6)",
                    "linear-gradient(to right, #8b5cf6, #14b8a6, #2563eb)",
                    "linear-gradient(to right, #2563eb, #8b5cf6, #14b8a6)",
                    "linear-gradient(to right, #14b8a6, #2563eb, #8b5cf6)",
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <button className="relative z-10 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all">
              Start Your AI Project Today
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutValuesSection;
