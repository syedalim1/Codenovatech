import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaAward, FaBrain, FaRobot, FaCode, FaChartLine, FaLightbulb, FaDatabase, FaTrophy } from "react-icons/fa";
import { SiGooglecloud, SiAwslambda, SiTensorflow, SiPytorch, SiOpenai } from "react-icons/si";

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

// 3D card animation variants
const cardVariants = {
  initial: { 
    opacity: 0, 
    y: 50,
    rotateY: 25,
    scale: 0.9
  },
  animate: { 
    opacity: 1, 
    y: 0,
    rotateY: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 20
    }
  },
  hover: {
    y: -15,
    scale: 1.05,
    rotateY: 5,
    transition: { 
      type: "spring", 
      stiffness: 400,
      damping: 10
    }
  }
};

const team = [
  {
    name: "Syed ALi M ",
    role: "CEO & AI Visionary",
    imageUrl: "/syed.jpg",
    bio: "15+ years in AI leadership, machine learning expert",
    skills: ["Neural Networks", "Deep Learning", "Strategic AI Planning"],
    social: { linkedin: "#", github: "#" },
    certifications: ["AI Ethics Certified", "ML Engineering Professional"],
    color: "from-blue-500 to-teal-500",
    icon: FaBrain,
    specialty: "Neural Architecture Design",
    achievement: "Pioneered 3 breakthrough AI algorithms",
    aiQuote: "AI is not just technology; it's the next evolution of human potential."
  },
  {
    name: "Praveen Kumar S",
    role: "CTO & Data Architect",
    imageUrl: "/praveen.jpg",
    bio: "AI infrastructure specialist, data pipeline architect",
    skills: ["TensorFlow", "PyTorch", "Big Data"],
    social: { linkedin: "#", github: "#" },
    certifications: ["Data Science Master", "Cloud AI Architect"],
    color: "from-purple-500 to-pink-600",
    icon: FaDatabase,
    specialty: "Distributed AI Systems",
    achievement: "Built scalable AI infrastructure processing 10TB daily",
    aiQuote: "The future belongs to those who can transform data into intelligence."
  },
  {
    name: "Wilson A",
    role: "Head of AI Research",
    imageUrl: "/wilson.jpg",
    bio: "Advanced machine learning & neural networks pioneer",
    skills: ["Generative AI", "NLP", "Computer Vision"],
    social: { linkedin: "#", github: "#" },
    certifications: ["PhD in AI", "Research Fellow"],
    color: "from-amber-500 to-red-600",
    icon: FaLightbulb,
    specialty: "Generative Models",
    achievement: "Published 15+ research papers on AI innovation",
    aiQuote: "We're not just coding AI; we're teaching machines to dream."
  },
];

function AboutTeamSection() {
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
              AI Leadership Team
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the experts driving our AI innovation engine
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {team.map((person, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl shadow-xl transition-all overflow-hidden perspective-1000"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* 3D Card with animated gradient border */}
              <div className="absolute inset-0 rounded-2xl p-[2px] overflow-hidden">
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${person.color} rounded-2xl`}
                  animate={{
                    background: [
                      `linear-gradient(to right, ${person.color.split(' ')[0].replace('from-', '')}, ${person.color.split(' ')[1].replace('to-', '')})`,
                      `linear-gradient(to bottom, ${person.color.split(' ')[0].replace('from-', '')}, ${person.color.split(' ')[1].replace('to-', '')})`,
                      `linear-gradient(to left, ${person.color.split(' ')[0].replace('from-', '')}, ${person.color.split(' ')[1].replace('to-', '')})`,
                      `linear-gradient(to top, ${person.color.split(' ')[0].replace('from-', '')}, ${person.color.split(' ')[1].replace('to-', '')})`,
                      `linear-gradient(to right, ${person.color.split(' ')[0].replace('from-', '')}, ${person.color.split(' ')[1].replace('to-', '')})`,
                    ],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden z-10 h-full transform-gpu">
                {/* Profile Image with animated overlay */}
                <div className="relative h-80">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={person.imageUrl}
                    alt={person.name}
                    loading="lazy"
                  />
                  
                  {/* Animated gradient overlay */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-80`}
                    animate={{
                      background: [
                        `linear-gradient(to top, rgba(17,24,39,0.9), rgba(17,24,39,0.5), transparent)`,
                        `linear-gradient(to top, rgba(17,24,39,0.9), rgba(17,24,39,0.3), transparent)`,
                        `linear-gradient(to top, rgba(17,24,39,0.9), rgba(17,24,39,0.5), transparent)`,
                      ],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* AI-themed icon */}
                  <div className="absolute top-4 right-4">
                    <motion.div 
                      className={`p-3 rounded-lg bg-gradient-to-r ${person.color} shadow-lg`}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      animate={{ 
                        boxShadow: [
                          `0 0 0px ${person.color.split(' ')[0].replace('from-', '')}`,
                          `0 0 20px ${person.color.split(' ')[0].replace('from-', '')}`,
                          `0 0 0px ${person.color.split(' ')[0].replace('from-', '')}`,
                        ]
                      }}
                      transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
                    >
                      <person.icon className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Social Links with animated hover */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                    <div className="flex gap-3">
                      <motion.a
                        href={person.social.linkedin}
                        className="text-white hover:text-teal-400 bg-black/30 p-2 rounded-full backdrop-blur-sm"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaLinkedin className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={person.social.github}
                        className="text-white hover:text-teal-400 bg-black/30 p-2 rounded-full backdrop-blur-sm"
                        whileHover={{ scale: 1.2, rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                  
                  {/* Specialty badge */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                    <motion.div 
                      className={`px-3 py-1 bg-gradient-to-r ${person.color} rounded-full text-white text-sm font-medium shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {person.specialty}
                    </motion.div>
                  </div>
                </div>

                {/* Profile Content with enhanced styling */}
                <div className="p-6 bg-gray-900 relative">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>
                  
                  <motion.h3 
                    className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${person.color}`}
                    animate={{
                      backgroundPosition: ['0% center', '100% center', '0% center'],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {person.name}
                  </motion.h3>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <motion.div 
                      className={`h-1 w-8 bg-gradient-to-r ${person.color} rounded-full`}
                      animate={{ width: ['20px', '40px', '20px'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <p className="text-white font-medium">{person.role}</p>
                  </div>
                  
                  {/* AI Quote with animated typing effect */}
                  <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border-l-2 border-teal-500">
                    <p className="text-gray-300 text-sm italic relative overflow-hidden">
                      <span className="text-teal-400 mr-1">"</span>
                      {person.aiQuote}
                      <span className="text-teal-400 ml-1">"</span>
                      <motion.span 
                        className="inline-block w-1 h-4 bg-teal-400 ml-1 align-middle"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </p>
                  </div>
                  
                  <p className="text-gray-400 text-sm mt-4">{person.bio}</p>
                  
                  {/* Achievement highlight */}
                  <div className="mt-4 flex items-center gap-2">
                    <FaTrophy className={`h-4 w-4 text-yellow-500`} />
                    <p className="text-yellow-300 text-sm font-medium">{person.achievement}</p>
                  </div>

                  {/* Skills with animated hover */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {person.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className={`px-3 py-1 bg-gray-800 text-white text-sm rounded-full border border-gray-700 hover:border-teal-500/50 transition-colors`}
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: "rgba(45, 212, 191, 0.1)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Certifications with animated icons */}
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {person.certifications.map((cert, i) => (
                      <motion.span
                        key={i}
                        className={`flex items-center gap-1 px-3 py-1 bg-gray-800/80 text-white text-sm rounded-full border border-gray-700`}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <motion.span
                          animate={{ 
                            rotate: [0, 10, 0, -10, 0],
                            color: ["#2dd4bf", "#0ea5e9", "#2dd4bf"]
                          }}
                          transition={{ 
                            rotate: { duration: 2, repeat: Infinity },
                            color: { duration: 3, repeat: Infinity }
                          }}
                        >
                          <FaAward className="h-4 w-4" />
                        </motion.span>
                        {cert}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Achievements */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden gap-4">
            <div className="text-4xl font-bold text-teal-600">100+</div>
            <div className="text-white mt-2">AI Models Deployed</div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden gap-4">
            <div className="text-4xl font-bold text-teal-600">99%</div>
            <div className="text-white mt-2">Prediction Accuracy</div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden gap-4">
            <SiAwslambda className="h-8 w-8 text-teal-600" />
            <div>
              <div className="text-xl font-bold text-white">AI Research</div>
              <div className="text-white text-sm">10+ Patents</div>
            </div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden gap-4">
            <SiGooglecloud className="h-8 w-8 text-teal-600" />
            <div>
              <div className="text-xl font-bold text-white">Data Processing</div>
              <div className="text-white text-sm">Petabyte Scale</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        ></motion.div>
      </div>
    </div>
  );
}

export default AboutTeamSection;
