import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaMobile,
  FaRobot,
  FaServer,
  FaChartLine,
  FaExternalLinkAlt,
  FaStar,
  FaBrain,
  FaDatabase,
  FaLaptopCode,
  FaNetworkWired,
  FaSearch,
  FaGlobe,
  FaAward,
  FaRocket,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiReact,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

// Map icon string names to actual components
const iconComponents = {
  FaCode,
  FaMobile,
  FaRobot,
  FaServer,
  FaChartLine,
  FaExternalLinkAlt,
  FaBrain,
  FaDatabase,
  FaLaptopCode,
  FaNetworkWired,
};

// Particle colors for different categories
const categoryColors = {
  all: ["#38bdf8", "#3b82f6", "#2dd4bf", "#a855f7", "#f97316"],
  web: ["#38bdf8", "#3b82f6", "#2dd4bf"],
  app: ["#a855f7", "#d946ef", "#ec4899"],
  ai: ["#f97316", "#f59e0b", "#eab308"],
  api: ["#10b981", "#14b8a6", "#06b6d4"],
};

// 3D card animation variants
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateY: 15,
    scale: 0.9,
  },
  visible: {
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
    y: -10,
    scale: 1.03,
    rotateY: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

// Updated projects with additional info and "featured" property
const projects = [
  {
    id: 1,
    title: "Chat AI Assistant",
    description:
      "An advanced AI-powered chatbot similar to Google Gemini AI, offering seamless interactions and intelligent responses.",
    category: "ai",
    technologies: ["React", "Node.js", "OpenAI API"],
    thumbnail: "/projectimage/syedai.png",
    stats: [
      { name: "Conversion Rate", value: "+45%" },
      { name: "Page Load Time", value: "-60%" },
      { name: "User Engagement", value: "+80%" },
    ],
    additionalInfo: [
      { key: "Client", value: "Tech Solutions Inc." },
      { key: "Duration", value: "6 Months" },
      { key: "Team Size", value: "5 Members" },
    ],
    icon: "FaRobot",
    url: "https://syed-new-ai.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Furniture Portfolio Website",
    description:
      "A visually appealing website for a furniture manufacturing company, featuring an interactive product catalog.",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    thumbnail: "/projectimage/indianmake.png",
    stats: [
      { name: "Customer Satisfaction", value: "98%" },
      { name: "Response Time", value: "-70%" },
      { name: "Data Accuracy", value: "99.9%" },
    ],
    additionalInfo: [
      { key: "Client", value: "Home Decor Ltd." },
      { key: "Duration", value: "4 Months" },
      { key: "Team Size", value: "3 Members" },
    ],
    icon: "FaExternalLinkAlt",
    url: "https://indianmakesteel.netlify.app/",
    featured: false,
  },
  {
    id: 3,
    title: "3D Animations Portfolio Website",
    description:
      "A portfolio website designed for college staff, showcasing their work in 3D animations and interactive designs.",
    category: "web",
    technologies: ["Three.js", "React", "GSAP"],
    thumbnail: "/projectimage/ganapathi.png",
    stats: [
      { name: "User Interaction", value: "95%" },
      { name: "Loading Speed", value: "Fast" },
      { name: "Visual Appeal", value: "High" },
    ],
    additionalInfo: [
      { key: "Client", value: "University XYZ" },
      { key: "Duration", value: "5 Months" },
      { key: "Team Size", value: "4 Members" },
    ],
    icon: "FaExternalLinkAlt",
    url: "https://ganapathyramportfolio.netlify.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Pikachu Market - Items Listing Website",
    description:
      "An e-commerce platform for app users, listing Pikachu-themed products with a user-friendly shopping experience.",
    category: "web",
    technologies: ["React", "Firebase", "Stripe API"],
    thumbnail: "/projectimage/pikachumarket.png",
    stats: [
      { name: "Product Availability", value: "100%" },
      { name: "Order Processing Speed", value: "Instant" },
      { name: "User Retention Rate", value: "90%" },
    ],
    additionalInfo: [
      { key: "Client", value: "Pikachu Fans Inc." },
      { key: "Duration", value: "3 Months" },
      { key: "Team Size", value: "6 Members" },
    ],
    icon: "FaChartLine",
    url: "https://pikachu-market-place.netlify.app/",
    featured: true,
  },
  {
    id: 5,
    title: "VS Labels Company - Product Portfolio",
    description:
      "A comprehensive portfolio website listing various school-related products such as ties, belts, socks, and shorts.",
    category: "web",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    thumbnail: "/projectimage/vslabels.png",
    stats: [
      { name: "Product Listings", value: "500+" },
      { name: "Search Accuracy", value: "99%" },
      { name: "Customer Engagement", value: "85%" },
    ],
    additionalInfo: [
      { key: "Client", value: "VS Labels Ltd." },
      { key: "Duration", value: "7 Months" },
      { key: "Team Size", value: "8 Members" },
    ],
    icon: "FaChartLine",
    url: "https://vslabels.in/",
    featured: false,
  },
];

const AllProjects = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects by category and search term
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="relative bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0">
        {/* Primary animated gradient blobs */}
        <motion.div
          className="absolute -top-40 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
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

        {/* Neural network visualization */}
        <div className="absolute inset-0 opacity-10">
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

        {/* Animated particles specific to current filter */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor:
                  categoryColors[filter][
                    Math.floor(Math.random() * categoryColors[filter].length)
                  ],
              }}
              animate={{
                y: [0, Math.random() * -100, 0],
                opacity: [0, 0.8, 0],
                scale: [0, Math.random() * 2 + 1, 0],
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
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
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mt-4"
            >
              Our Projects & Portfolio
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Explore our diverse range of projects with interactive details and
            professional animations.
          </motion.p>

          {/* Animated divider */}
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-full mx-auto mb-8"
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

          {/* Enhanced Search Bar with animation */}
          <div className="flex justify-center mb-8">
            <motion.div
              className="relative w-full max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 text-white pr-12"
              />
              <motion.div
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-teal-500"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <FaSearch className="h-5 w-5" />
              </motion.div>

              {/* Animated focus ring */}
              <motion.div
                className="absolute inset-0 rounded-full -z-10"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: searchTerm ? 0.2 : 0,
                  boxShadow: searchTerm
                    ? "0 0 0 3px rgba(45, 212, 191, 0.5)"
                    : "none",
                }}
              />
            </motion.div>
          </div>

          {/* Enhanced Category Filters with animations */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {[
              { id: "all", label: "ALL PROJECTS", icon: FaGlobe },
              { id: "web", label: "WEB", icon: FaLaptopCode },
              { id: "app", label: "APP", icon: FaMobile },
              { id: "ai", label: "AI", icon: FaBrain },
              { id: "api", label: "API", icon: FaNetworkWired },
            ].map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg shadow-teal-500/20"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <category.icon
                  className={
                    filter === category.id ? "text-white" : "text-teal-500"
                  }
                />
                <span>{category.label}</span>

                {/* Animated indicator dot */}
                {filter === category.id && (
                  <motion.div
                    layoutId="activeDot"
                    className="h-2 w-2 rounded-full bg-white ml-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Project count indicator */}
          <motion.div
            className="text-gray-400 text-sm mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Showing {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </motion.div>
        </div>

        {/* Enhanced Projects Grid with 3D effects */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => {
            const Icon = iconComponents[project.icon] || FaExternalLinkAlt;

            // Map tech names to icons when possible
            const techIcons = {
              React: SiReact,
              JavaScript: SiJavascript,
              Python: SiPython,
              MongoDB: SiMongodb,
              Firebase: SiFirebase,
              TensorFlow: SiTensorflow,
            };

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative overflow-hidden perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 3D Card with animated gradient border */}
                <div className="absolute inset-0 rounded-xl p-[2px] overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      project.category === "ai"
                        ? "from-orange-500 to-amber-500"
                        : project.category === "web"
                        ? "from-blue-500 to-teal-500"
                        : project.category === "app"
                        ? "from-purple-500 to-pink-600"
                        : "from-green-500 to-cyan-600"
                    } rounded-xl`}
                    animate={{
                      background: [
                        `linear-gradient(to right, ${
                          project.category === "ai"
                            ? "#f97316, #f59e0b"
                            : project.category === "web"
                            ? "#3b82f6, #2dd4bf"
                            : project.category === "app"
                            ? "#a855f7, #ec4899"
                            : "#10b981, #06b6d4"
                        })`,
                        `linear-gradient(to bottom, ${
                          project.category === "ai"
                            ? "#f97316, #f59e0b"
                            : project.category === "web"
                            ? "#3b82f6, #2dd4bf"
                            : project.category === "app"
                            ? "#a855f7, #ec4899"
                            : "#10b981, #06b6d4"
                        })`,
                        `linear-gradient(to left, ${
                          project.category === "ai"
                            ? "#f97316, #f59e0b"
                            : project.category === "web"
                            ? "#3b82f6, #2dd4bf"
                            : project.category === "app"
                            ? "#a855f7, #ec4899"
                            : "#10b981, #06b6d4"
                        })`,
                        `linear-gradient(to top, ${
                          project.category === "ai"
                            ? "#f97316, #f59e0b"
                            : project.category === "web"
                            ? "#3b82f6, #2dd4bf"
                            : project.category === "app"
                            ? "#a855f7, #ec4899"
                            : "#10b981, #06b6d4"
                        })`,
                        `linear-gradient(to right, ${
                          project.category === "ai"
                            ? "#f97316, #f59e0b"
                            : project.category === "web"
                            ? "#3b82f6, #2dd4bf"
                            : project.category === "app"
                            ? "#a855f7, #ec4899"
                            : "#10b981, #06b6d4"
                        })`,
                      ],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden relative z-10 h-full transform-gpu">
                  {/* Project thumbnail with enhanced effects */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Animated overlay gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"
                      animate={{
                        opacity: [0.6, 0.4, 0.6],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Enhanced category badge */}
                    <motion.div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm flex items-center gap-1 ${
                        project.category === "ai"
                          ? "bg-gradient-to-r from-orange-500 to-amber-500"
                          : project.category === "web"
                          ? "bg-gradient-to-r from-blue-500 to-teal-500"
                          : project.category === "app"
                          ? "bg-gradient-to-r from-purple-500 to-pink-600"
                          : "bg-gradient-to-r from-green-500 to-cyan-600"
                      } text-white`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.category === "ai" && (
                        <FaBrain className="text-xs" />
                      )}
                      {project.category === "web" && (
                        <FaGlobe className="text-xs" />
                      )}
                      {project.category === "app" && (
                        <FaMobile className="text-xs" />
                      )}
                      {project.category === "api" && (
                        <FaServer className="text-xs" />
                      )}
                      <span>{project.category.toUpperCase()}</span>
                    </motion.div>

                    {/* Enhanced Featured Badge with animation */}
                    {project.featured && (
                      <motion.div
                        className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1"
                        animate={{
                          scale: [1, 1.05, 1],
                          boxShadow: [
                            "0 0 0px rgba(245,158,11,0)",
                            "0 0 10px rgba(245,158,11,0.5)",
                            "0 0 0px rgba(245,158,11,0)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <FaStar className="text-xs" />
                        </motion.div>
                        <span>Featured</span>
                      </motion.div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Project title with icon */}
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        className={`p-2 rounded-lg ${
                          project.category === "ai"
                            ? "bg-gradient-to-r from-orange-500 to-amber-500"
                            : project.category === "web"
                            ? "bg-gradient-to-r from-blue-500 to-teal-500"
                            : project.category === "app"
                            ? "bg-gradient-to-r from-purple-500 to-pink-600"
                            : "bg-gradient-to-r from-green-500 to-cyan-600"
                        } shadow-lg`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        animate={{
                          boxShadow: [
                            `0 0 0px ${
                              project.category === "ai"
                                ? "#f97316"
                                : project.category === "web"
                                ? "#3b82f6"
                                : project.category === "app"
                                ? "#a855f7"
                                : "#10b981"
                            }`,
                            `0 0 15px ${
                              project.category === "ai"
                                ? "#f97316"
                                : project.category === "web"
                                ? "#3b82f6"
                                : project.category === "app"
                                ? "#a855f7"
                                : "#10b981"
                            }50`,
                            `0 0 0px ${
                              project.category === "ai"
                                ? "#f97316"
                                : project.category === "web"
                                ? "#3b82f6"
                                : project.category === "app"
                                ? "#a855f7"
                                : "#10b981"
                            }`,
                          ],
                        }}
                        transition={{
                          boxShadow: { duration: 2, repeat: Infinity },
                        }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </motion.div>

                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>

                    {/* Project description */}
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies with icons */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => {
                        const TechIcon = techIcons[tech];
                        return (
                          <motion.span
                            key={index}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs flex items-center gap-1"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#1f2937",
                              color: "#38bdf8",
                            }}
                          >
                            {TechIcon && <TechIcon className="h-3 w-3 mr-1" />}
                            {tech}
                          </motion.span>
                        );
                      })}
                    </div>

                    {/* Stats with animated progress */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {project.stats.slice(0, 2).map((stat, index) => (
                        <div key={index} className="relative">
                          <motion.div
                            className={`absolute inset-0 rounded-lg opacity-10 ${
                              project.category === "ai"
                                ? "bg-orange-500"
                                : project.category === "web"
                                ? "bg-blue-500"
                                : project.category === "app"
                                ? "bg-purple-500"
                                : "bg-green-500"
                            }`}
                            animate={{
                              opacity: [0.05, 0.15, 0.05],
                              scale: [0.95, 1, 0.95],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                          <div className="text-center p-2">
                            <motion.div
                              className={`text-lg font-bold ${
                                project.category === "ai"
                                  ? "text-orange-500"
                                  : project.category === "web"
                                  ? "text-blue-500"
                                  : project.category === "app"
                                  ? "text-purple-500"
                                  : "text-green-500"
                              }`}
                              whileHover={{ scale: 1.1 }}
                            >
                              {stat.name}
                            </motion.div>
                            <motion.div
                              className="text-sm text-gray-400"
                              whileHover={{ scale: 1.1 }}
                            >
                              {stat.value}
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default AllProjects;
