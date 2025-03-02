import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaAward,
  FaRocket,
  FaBrain,
  FaRobot,
  FaNetworkWired,
  FaMicrochip,
} from "react-icons/fa";
import { SiTensorflow, SiPytorch } from "react-icons/si";

const teamMembers = [
  {
    name: "Syed Ali M",
    role: "Founder",
    image: "./syed.jpg", // Using existing image as placeholder
    bio: "Visionary founder with a passion for AI innovation and technological advancement",
    skills: [
      "Strategic Vision",
      "AI Innovation",
      "Leadership",
      "Business Strategy",
    ],
    social: { linkedin: "#", github: "#" },
    certifications: ["Tech Visionary", "Innovation Leader"],
    highlight: true,
  },
];

function TeamSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // AI Neural Network Animation
  const NeuralNetworkAnimation = () => {
    const nodes = Array(15).fill(0);
    const connections = Array(30).fill(0);

    return (
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
          />
        </div>
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
  };

  // Binary Code Animation
  const BinaryCodeAnimation = () => {
    const columns = Array(10).fill(0);

    return (
      <div className="absolute right-0 top-0 h-full w-1/4 opacity-20 overflow-hidden">
        {columns.map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-xs font-mono text-teal-500 whitespace-nowrap"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-20%",
            }}
            animate={{
              top: ["0%", "100%"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            {Array(30)
              .fill(0)
              .map(() => Math.round(Math.random()))
              .join("")}
          </motion.div>
        ))}
      </div>
    );
  };

  // Circuit Pattern Animation
  const CircuitPatternAnimation = () => {
    return (
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <motion.path
            d="M0,50 Q25,25 50,50 T100,50 T150,50 T200,50"
            stroke="url(#circuit-gradient)"
            strokeWidth="1"
            fill="transparent"
            strokeDasharray="200"
            initial={{ strokeDashoffset: 200 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <defs>
            <linearGradient
              id="circuit-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0"
          style={{ transform: "rotate(45deg)" }}
        >
          <motion.path
            d="M0,100 Q50,50 100,100 T200,100 T300,100"
            stroke="url(#circuit-gradient-2)"
            strokeWidth="1"
            fill="transparent"
            strokeDasharray="300"
            initial={{ strokeDashoffset: 300 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          />
          <defs>
            <linearGradient
              id="circuit-gradient-2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  };

  // AI Particle Flow
  const AIParticleFlow = () => {
    const particles = Array(30).fill(0);

    return (
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        {particles.map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgb(
                ${Math.floor(45 + Math.random() * 100)}, 
                ${Math.floor(150 + Math.random() * 105)}, 
                ${Math.floor(150 + Math.random() * 105)}
              )`,
            }}
            animate={{
              x: [0, Math.random() > 0.5 ? 100 : -100],
              y: [0, Math.random() > 0.5 ? 100 : -100],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    );
  };

  // Data Flow Animation
  const DataFlowAnimation = () => {
    const lines = Array(20).fill(0);

    return (
      <div className="absolute left-0 top-0 h-full w-1/3 opacity-20 overflow-hidden">
        {lines.map((_, i) => (
          <motion.div
            key={`data-flow-${i}`}
            className="absolute h-px"
            style={{
              left: "0%",
              top: `${(i * 100) / 20}%`,
              width: "100%",
              background: `linear-gradient(90deg, 
                rgba(45, 212, 191, 0) 0%, 
                rgba(45, 212, 191, ${0.3 + Math.random() * 0.7}) 50%, 
                rgba(45, 212, 191, 0) 100%)`,
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
  };

  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
        />
      </div>
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute -top-32 left-1/3 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      {/* New AI-themed background animations */}
      <NeuralNetworkAnimation />
      <BinaryCodeAnimation />
      <CircuitPatternAnimation />
      <AIParticleFlow />
      <DataFlowAnimation />

      {/* 3D Neural Network Node Animation */}
      <div className="absolute inset-0 opacity-20">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <motion.div
              key={`neural-3d-${i}`}
              className="absolute w-32 h-32 rounded-full border border-teal-500/30"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 15 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-teal-500">
            Leadership & Innovation
          </h2>
          <motion.p
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            Meet Our Visionary Team
          </motion.p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            The brilliant minds behind our revolutionary AI solutions, driving
            innovation and excellence
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* Single Team Member Showcase */}
          <motion.div
            className="relative bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-2xl p-10 border border-teal-500/40 hover:border-teal-500/60 transition-all shadow-xl overflow-hidden"
            variants={fadeIn}
            whileHover={{ y: -5 }}
          >
            {/* Enhanced AI Circuit Pattern behind profile */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-15 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
            >
              <svg width="100%" height="100%">
                <pattern
                  id="circuit-pattern-enhanced"
                  patternUnits="userSpaceOnUse"
                  width="200"
                  height="200"
                  patternTransform="scale(0.5) rotate(0)"
                >
                  <rect width="100%" height="100%" fill="none" />
                  <path
                    d="M20,10 L180,10 M180,10 L180,80 M180,80 L100,80 M100,80 L100,140 M100,140 L50,140 M50,140 L50,190 M50,190 L150,190"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="text-teal-500"
                  />
                  <circle cx="20" cy="10" r="3" className="fill-teal-500" />
                  <circle cx="180" cy="10" r="3" className="fill-blue-500" />
                  <circle cx="180" cy="80" r="3" className="fill-teal-500" />
                  <circle cx="100" cy="80" r="3" className="fill-purple-500" />
                  <circle cx="100" cy="140" r="3" className="fill-blue-500" />
                  <circle cx="50" cy="140" r="3" className="fill-teal-500" />
                  <circle cx="50" cy="190" r="3" className="fill-blue-500" />
                  <circle cx="150" cy="190" r="3" className="fill-teal-500" />
                </pattern>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#circuit-pattern-enhanced)"
                />
              </svg>
            </motion.div>

            {/* Highlight effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-purple-500/10 -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Enhanced AI Pattern floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              {Array(20)
                .fill(0)
                .map((_, i) => (
                  <motion.div
                    key={`particle-enhanced-${i}`}
                    className="absolute w-1.5 h-1.5 bg-teal-500 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      x: [0, Math.random() * 30 - 15],
                      y: [0, Math.random() * 30 - 15],
                      opacity: [0, 0.9, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center relative z-10">
              {/* Left Column - Profile Image */}
              <div className="md:col-span-2 flex justify-center">
                <div className="relative h-64 w-64 md:h-80 md:w-80">
                  <img
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    className="h-full w-full object-cover rounded-full border-4 border-teal-500/50 hover:border-teal-500/70 transition-all shadow-lg"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(45,212,191,0.3)",
                        "0 0 30px rgba(45,212,191,0.7)",
                        "0 0 0px rgba(45,212,191,0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Enhanced AI-themed overlay on image */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 mix-blend-overlay"
                    animate={{
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-white/10" />

                  {/* Orbiting tech icons */}
                  {[FaBrain, FaRobot, FaNetworkWired, FaMicrochip].map(
                    (Icon, index) => (
                      <motion.div
                        key={`orbit-icon-${index}`}
                        className="absolute"
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: "rgba(15, 23, 42, 0.7)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid rgba(45,212,191,0.3)",
                        }}
                        animate={{
                          x: Math.cos((index * Math.PI) / 2) * 150,
                          y: Math.sin((index * Math.PI) / 2) * 150,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 5,
                        }}
                      >
                        <Icon className="text-teal-500 h-5 w-5" />
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              {/* Right Column - Profile Content */}
              <div className="md:col-span-3 text-left space-y-6">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
                    {teamMembers[0].name}
                  </h3>
                  <p className="mt-2 text-2xl text-teal-300 font-semibold">
                    {teamMembers[0].role}
                  </p>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                  {teamMembers[0].bio} - A visionary in the field of artificial
                  intelligence and technological innovation, driving
                  breakthrough solutions that transform industries and enhance
                  user experiences. With a passion for cutting-edge technology
                  and a deep understanding of both business and technical
                  challenges, leading the way in creating AI systems that are
                  both powerful and accessible.
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <h4 className="text-white font-semibold text-lg w-full mb-2">
                    Areas of Expertise:
                  </h4>
                  {[
                    ...teamMembers[0].skills,
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Neural Networks",
                    "Data Science",
                    "Computer Vision",
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-teal-900/30 text-teal-300 text-md rounded-full border border-teal-500/20"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Certifications */}
                <div className="mt-8">
                  <h4 className="text-white font-semibold text-lg mb-4">
                    Certifications & Achievements:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      ...teamMembers[0].certifications,
                      "AI Research Pioneer",
                      "Digital Transformation Leader",
                    ].map((cert, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-900/30 rounded-lg text-md text-gray-300 border border-blue-500/20"
                        whileHover={{ scale: 1.03 }}
                      >
                        <FaAward className="h-5 w-5 text-blue-400" />
                        <span>{cert}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 flex gap-6">
                  <motion.a
                    href={teamMembers[0].social.linkedin}
                    className="text-gray-400 hover:text-teal-500 transition-all"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <FaLinkedin className="h-8 w-8" />
                  </motion.a>
                  <motion.a
                    href={teamMembers[0].social.github}
                    className="text-gray-400 hover:text-teal-500 transition-all"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                  >
                    <FaGithub className="h-8 w-8" />
                  </motion.a>
                  {/* Additional social links */}
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-teal-500 transition-all"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <FaRocket className="h-8 w-8" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Company Vision Section - Enhanced with AI icons */}
        <motion.div
          className="mt-24 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-teal-500/20 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* AI Binary pattern background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 text-xs font-mono text-teal-500 overflow-hidden leading-3">
              {Array(20)
                .fill(0)
                .map((_, i) => (
                  <div key={`binary-bg-${i}`} className="whitespace-nowrap">
                    {Array(100)
                      .fill(0)
                      .map(() => Math.round(Math.random()))
                      .join("")}
                  </div>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Neural network background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <circle cx="20%" cy="30%" r="5" className="fill-teal-500" />
                  <circle cx="40%" cy="20%" r="5" className="fill-teal-500" />
                  <circle cx="60%" cy="30%" r="5" className="fill-teal-500" />
                  <circle cx="80%" cy="20%" r="5" className="fill-teal-500" />
                  <circle cx="30%" cy="50%" r="5" className="fill-blue-500" />
                  <circle cx="50%" cy="60%" r="5" className="fill-blue-500" />
                  <circle cx="70%" cy="50%" r="5" className="fill-blue-500" />
                  <circle cx="20%" cy="80%" r="5" className="fill-purple-500" />
                  <circle cx="50%" cy="80%" r="5" className="fill-purple-500" />
                  <circle cx="80%" cy="80%" r="5" className="fill-purple-500" />

                  <line
                    x1="20%"
                    y1="30%"
                    x2="30%"
                    y2="50%"
                    stroke="rgba(45,212,191,0.3)"
                    strokeWidth="1"
                  />
                  <line
                    x1="40%"
                    y1="20%"
                    x2="30%"
                    y2="50%"
                    stroke="rgba(45,212,191,0.3)"
                    strokeWidth="1"
                  />
                  <line
                    x1="60%"
                    y1="30%"
                    x2="50%"
                    y2="60%"
                    stroke="rgba(45,212,191,0.3)"
                    strokeWidth="1"
                  />
                  <line
                    x1="80%"
                    y1="20%"
                    x2="70%"
                    y2="50%"
                    stroke="rgba(45,212,191,0.3)"
                    strokeWidth="1"
                  />
                  <line
                    x1="30%"
                    y1="50%"
                    x2="20%"
                    y2="80%"
                    stroke="rgba(45,212,191,0.3)"
                    strokeWidth="1"
                  />
                  <line
                    x1="30%"
                    y1="50%"
                    x2="50%"
                    y2="80%"
                    stroke="rgba(45,212,191,0.3)"
                    strokeWidth="1"
                  />
                  <line
                    x1="50%"
                    y1="60%"
                    x2="50%"
                    y2="80%"
                    stroke="rgba(45,212,191,0.3)"
                    strokeWidth="1"
                  />
                  <line
                    x1="70%"
                    y1="50%"
                    x2="80%"
                    y2="80%"
                    stroke="rgba(45,212,191,0.3)"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              <FaBrain className="h-10 w-10 text-teal-500 mb-4 relative z-10" />
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                Our Vision
              </h3>
              <p className="text-gray-400 relative z-10">
                To revolutionize the way people interact with AI, making
                advanced technology accessible and beneficial for everyone.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Data flow background */}
              <div className="absolute inset-0 opacity-10">
                {Array(8)
                  .fill(0)
                  .map((_, i) => (
                    <motion.div
                      key={`data-line-${i}`}
                      className="absolute h-px bg-blue-500"
                      style={{
                        left: "0%",
                        top: `${(i * 100) / 8 + 10}%`,
                        width: "100%",
                        transformOrigin: "left center",
                      }}
                      animate={{
                        scaleX: [0, 1],
                        opacity: [0, 0.7, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  ))}
              </div>

              <FaNetworkWired className="h-10 w-10 text-blue-500 mb-4 relative z-10" />
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                Our Mission
              </h3>
              <p className="text-gray-400 relative z-10">
                Creating innovative AI solutions that solve real-world problems
                while maintaining the highest standards of ethics and user
                privacy.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Circuit background */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <path
                    d="M10,10 L90,10 M90,10 L90,90 M90,90 L10,90 M10,90 L10,10"
                    stroke="rgba(168,85,247,0.4)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M30,30 L70,30 M70,30 L70,70 M70,70 L30,70 M30,70 L30,30"
                    stroke="rgba(168,85,247,0.4)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M10,10 L30,30 M90,10 L70,30 M90,90 L70,70 M10,90 L30,70"
                    stroke="rgba(168,85,247,0.4)"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>

              <FaMicrochip className="h-10 w-10 text-purple-500 mb-4 relative z-10" />
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                Our Values
              </h3>
              <p className="text-gray-400 relative z-10">
                Innovation, integrity, collaboration, and a relentless pursuit
                of excellence guide everything we do at CODENOVATECH.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Achievements */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-bold text-teal-500 mb-2">100+</div>
            <div className="text-sm text-gray-400">Projects Delivered</div>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <SiTensorflow className="h-8 w-8 text-teal-500 mb-2" />
            <div className="text-sm text-gray-400">TensorFlow Certified</div>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <SiPytorch className="h-8 w-8 text-teal-500 mb-2" />
            <div className="text-sm text-gray-400">PyTorch Experts</div>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <FaRobot className="h-8 w-8 text-teal-500 mb-2" />
            <div className="text-sm text-gray-400">AI Innovation Leaders</div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xl text-gray-400 mb-8">
            Want to join our team of experts?
          </p>
          <motion.a
            href="/careers"
            className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Open Positions
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default TeamSection;
