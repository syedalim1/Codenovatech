import { motion } from "framer-motion";
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

// 3D card animation variants
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

// 3D animation variants
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

// Particle colors
const particleColors = {
  blue: ["#38bdf8", "#3b82f6", "#2dd4bf"],
  purple: ["#c084fc", "#a855f7", "#d946ef"],
  orange: ["#fb923c", "#f97316", "#f59e0b"],
  green: ["#4ade80", "#10b981", "#22d3ee"],
};

function AboutHeroSection() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
          />
        </div>
        {/* Primary animated gradient blobs */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
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
            delay: 2,
          }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
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

        {/* Binary code rain effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`binary-${i}`}
              className="absolute text-xs font-mono text-teal-500"
              style={{
                top: `-20px`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [`-20px`, `${window.innerHeight}px`],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 15,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container-custom py-24 sm:py-32">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Enhanced Content Section */}
          <motion.div variants={fadeIn}>
            <motion.div variants={fadeIn}>
              <motion.div
                className="inline-block"
                animate={{
                  filter: [
                    "drop-shadow(0 0 0px rgba(45,212,191,0))",
                    "drop-shadow(0 0 10px rgba(45,212,191,0.5))",
                    "drop-shadow(0 0 0px rgba(45,212,191,0))",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                  Pioneering AI Innovation
                </h2>
              </motion.div>
            </motion.div>

            <motion.h1
              className="mt-6 text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 sm:text-5xl"
              variants={fadeIn}
              animate={{
                backgroundPosition: ["0% center", "100% center", "0% center"],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <TypeAnimation
                sequence={[
                  "Transforming AI",
                  1000,
                  "Engineering Intelligence",
                  1000,
                  "Driving Innovation",
                  1000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </motion.h1>

            {/* Animated underline */}
            <motion.div
              className="h-1 w-40 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-full mt-4"
              animate={{
                width: ["10%", "40%", "10%"],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.p
              className="mt-6 text-xl leading-8 text-gray-300"
              variants={fadeIn}
            >
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="absolute -inset-1 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-sm"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="relative">Founded in 2024,</span>
              </motion.span>{" "}
              CodeNovaTech emerged as a catalyst for AI transformation. Our
              journey began with a simple vision: to bridge the gap between
              cutting-edge artificial intelligence and business excellence.
            </motion.p>

            {/* Enhanced Trust Metrics with 3D effects and animations */}
            <motion.div
              className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4"
              variants={staggerChildren}
            >
              {[
                {
                  icon: FaBrain,
                  value: "100+",
                  label: "AI Models Deployed",
                  color: "from-teal-500 to-blue-600",
                  particles: "blue",
                },
                {
                  icon: FaUsers,
                  value: "98%",
                  label: "Client Retention",
                  color: "from-purple-500 to-pink-600",
                  particles: "purple",
                },
                {
                  icon: FaAward,
                  value: "25+",
                  label: "AI Awards",
                  color: "from-orange-500 to-red-600",
                  particles: "orange",
                },
                {
                  icon: FaRobot,
                  value: "1M+",
                  label: "Training Hours",
                  color: "from-green-500 to-cyan-600",
                  particles: "green",
                },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden perspective-1000"
                  variants={fadeIn}
                  whileHover={{ y: -5, scale: 1.05 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* 3D Card with animated gradient border */}
                  <div className="absolute inset-0 rounded-xl p-[2px] overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${metric.color} rounded-xl`}
                      animate={{
                        background: [
                          `linear-gradient(to right, ${metric.color
                            .split(" ")[0]
                            .replace("from-", "")}, ${metric.color
                            .split(" ")[1]
                            .replace("to-", "")})`,
                          `linear-gradient(to bottom, ${metric.color
                            .split(" ")[0]
                            .replace("from-", "")}, ${metric.color
                            .split(" ")[1]
                            .replace("to-", "")})`,
                          `linear-gradient(to left, ${metric.color
                            .split(" ")[0]
                            .replace("from-", "")}, ${metric.color
                            .split(" ")[1]
                            .replace("to-", "")})`,
                          `linear-gradient(to top, ${metric.color
                            .split(" ")[0]
                            .replace("from-", "")}, ${metric.color
                            .split(" ")[1]
                            .replace("to-", "")})`,
                          `linear-gradient(to right, ${metric.color
                            .split(" ")[0]
                            .replace("from-", "")}, ${metric.color
                            .split(" ")[1]
                            .replace("to-", "")})`,
                        ],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>

                  <div className="p-4 bg-gray-900 rounded-xl border border-gray-700/50 relative z-10 h-full transform-gpu">
                    {/* Animated particles specific to each card */}
                    <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={`particle-${index}-${i}`}
                          className="absolute w-1 h-1 rounded-full"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            backgroundColor:
                              particleColors[metric.particles][
                                Math.floor(Math.random() * 3)
                              ],
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

                    <motion.div
                      className={`h-8 w-8 mb-4 text-transparent bg-clip-text bg-gradient-to-r ${metric.color}`}
                      animate={{
                        backgroundPosition: [
                          "0% center",
                          "100% center",
                          "0% center",
                        ],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <metric.icon className="h-full w-full" />
                    </motion.div>

                    <motion.div
                      className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${metric.color}`}
                      animate={{
                        backgroundPosition: [
                          "0% center",
                          "100% center",
                          "0% center",
                        ],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {metric.value}
                    </motion.div>

                    <div className="text-sm text-gray-300">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Visual Section with 3D and animations */}
          <motion.div className="relative" variants={fadeIn}>
            <motion.div
              className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden perspective-1000"
              variants={float}
              animate="animate"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-blue-600/20 to-purple-600/20"
                animate={{
                  background: [
                    "linear-gradient(to right, rgba(20, 184, 166, 0.2), rgba(37, 99, 235, 0.2), rgba(139, 92, 246, 0.2))",
                    "linear-gradient(to bottom right, rgba(20, 184, 166, 0.2), rgba(37, 99, 235, 0.2), rgba(139, 92, 246, 0.2))",
                    "linear-gradient(to bottom, rgba(20, 184, 166, 0.2), rgba(37, 99, 235, 0.2), rgba(139, 92, 246, 0.2))",
                    "linear-gradient(to right, rgba(20, 184, 166, 0.2), rgba(37, 99, 235, 0.2), rgba(139, 92, 246, 0.2))",
                  ],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Circuit board pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="circuit"
                      width="50"
                      height="50"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 50 0 L 0 0 0 50"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <circle cx="0" cy="0" r="2" fill="white" />
                      <circle cx="50" cy="0" r="2" fill="white" />
                      <circle cx="0" cy="50" r="2" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
              </div>

              {/* Enhanced Animated Tech Stack with 3D effects */}
              <div className="absolute inset-0 flex flex-col justify-center p-8">
                <div className="grid grid-cols-3 gap-8 justify-items-center">
                  {[
                    { Icon: SiTensorflow, color: "text-orange-500", delay: 0 },
                    { Icon: SiPytorch, color: "text-red-500", delay: 0.2 },
                    { Icon: SiOpenai, color: "text-green-500", delay: 0.4 },
                    { Icon: FaBrain, color: "text-blue-500", delay: 0.6 },
                    { Icon: FaBrain, color: "text-yellow-500", delay: 0.8 },
                    { Icon: SiNvidia, color: "text-green-400", delay: 1 },
                    { Icon: FaRobot, color: "text-purple-500", delay: 1.2 },
                    { Icon: FaDatabase, color: "text-teal-500", delay: 1.4 },
                    { Icon: FaMicrochip, color: "text-pink-500", delay: 1.6 },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className={`h-12 w-12 ${item.color}`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        y: [0, -10, 0],
                        rotateY: [0, 360],
                        filter: [
                          "drop-shadow(0 0 0px rgba(255,255,255,0))",
                          "drop-shadow(0 0 10px rgba(255,255,255,0.5))",
                          "drop-shadow(0 0 0px rgba(255,255,255,0))",
                        ],
                      }}
                      transition={{
                        scale: { delay: item.delay, duration: 0.5 },
                        opacity: { delay: item.delay, duration: 0.5 },
                        y: {
                          delay: item.delay,
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        rotateY: {
                          delay: item.delay,
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        filter: {
                          delay: item.delay,
                          duration: 3,
                          repeat: Infinity,
                        },
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <item.Icon className="h-full w-full" />
                    </motion.div>
                  ))}
                </div>

                {/* AI Visualization */}
                <motion.div
                  className="mt-8 text-center text-white text-xl font-bold"
                  animate={{
                    opacity: [0, 1, 0],
                    y: [10, 0, 10],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
                    AI-Powered Innovation Hub
                  </span>
                </motion.div>
              </div>
            </motion.div>

           
          </motion.div>
        </motion.div>

        {/* Enhanced Timeline with animations */}
        <motion.div
          className="mt-16 border-t border-gray-800 pt-16"
          variants={staggerChildren}
        >
          <motion.div
            className="inline-block mb-8"
            animate={{
              filter: [
                "drop-shadow(0 0 0px rgba(45,212,191,0))",
                "drop-shadow(0 0 10px rgba(45,212,191,0.5))",
                "drop-shadow(0 0 0px rgba(45,212,191,0))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
              Our AI Journey
            </h3>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                year: "2025",
                title: "AI Platform Launch",
                description:
                  "Launched our flagship AI-powered predictive analytics platform.",
                icon: FaBrain,
                stats: "First paying customers acquired",
                color: "from-teal-500 to-blue-600",
              },
              {
                year: "2026",
                title: "AI Expansion",
                description:
                  "Expanded AI platform capabilities to include machine learning and natural language processing.",
                icon: FaRobot,
                stats: "100+ AI engineers",
                color: "from-purple-500 to-pink-600",
              },
              {
                year: "2027",
                title: "AI Market Leadership",
                description:
                  "Recognized as a leader in AI innovation and predictive analytics.",
                icon: FaChartLine,
                stats: "10K+ active users | 98% client retention",
                color: "from-amber-500 to-red-600",
              },
            ].map((milestone, index) => (
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
                    className={`absolute inset-0 bg-gradient-to-r ${milestone.color} rounded-xl`}
                    animate={{
                      background: [
                        `linear-gradient(to right, ${milestone.color
                          .split(" ")[0]
                          .replace("from-", "")}, ${milestone.color
                          .split(" ")[1]
                          .replace("to-", "")})`,
                        `linear-gradient(to bottom, ${milestone.color
                          .split(" ")[0]
                          .replace("from-", "")}, ${milestone.color
                          .split(" ")[1]
                          .replace("to-", "")})`,
                        `linear-gradient(to left, ${milestone.color
                          .split(" ")[0]
                          .replace("from-", "")}, ${milestone.color
                          .split(" ")[1]
                          .replace("to-", "")})`,
                        `linear-gradient(to top, ${milestone.color
                          .split(" ")[0]
                          .replace("from-", "")}, ${milestone.color
                          .split(" ")[1]
                          .replace("to-", "")})`,
                        `linear-gradient(to right, ${milestone.color
                          .split(" ")[0]
                          .replace("from-", "")}, ${milestone.color
                          .split(" ")[1]
                          .replace("to-", "")})`,
                      ],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                <div className="p-6 bg-gray-900 rounded-xl border border-gray-700/50 relative z-10 h-full transform-gpu">
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                  {/* Circuit board pattern */}
                  <div className="absolute inset-0 opacity-5 overflow-hidden rounded-xl">
                    <svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id={`circuit-${index}`}
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 20 0 L 0 0 0 20"
                            fill="none"
                            stroke="white"
                            strokeWidth="0.5"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        fill={`url(#circuit-${index})`}
                      />
                    </svg>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className={`p-2 rounded-lg bg-gradient-to-r ${milestone.color} shadow-lg`}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      animate={{
                        boxShadow: [
                          `0 0 0px ${milestone.color
                            .split(" ")[0]
                            .replace("from-", "")}`,
                          `0 0 20px ${milestone.color
                            .split(" ")[0]
                            .replace("from-", "")}`,
                          `0 0 0px ${milestone.color
                            .split(" ")[0]
                            .replace("from-", "")}`,
                        ],
                      }}
                      transition={{
                        boxShadow: { duration: 2, repeat: Infinity },
                      }}
                    >
                      <milestone.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <motion.div
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${milestone.color} font-bold text-xl`}
                      animate={{
                        backgroundPosition: [
                          "0% center",
                          "100% center",
                          "0% center",
                        ],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {milestone.year}
                    </motion.div>
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-300 mb-3">{milestone.description}</p>
                  <div className="text-sm text-teal-400/80 font-mono">
                    {milestone.stats}
                  </div>

                  {/* Progress line for future milestones */}
                  {index !== 0 && (
                    <div className="absolute top-0 left-0 w-1 h-full bg-teal-500/20">
                      <motion.div
                        className="w-full h-full bg-teal-500"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          height: ["0%", "100%"],
                        }}
                        transition={{
                          opacity: { duration: 2, repeat: Infinity },
                          height: { duration: 1.5, delay: index * 0.5 },
                        }}
                        style={{ width: "2px" }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutHeroSection;
