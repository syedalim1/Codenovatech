import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCode,
  FaMobile,
  FaRobot,
  FaServer,
  FaChartLine,
  FaExternalLinkAlt,
  FaStar
} from 'react-icons/fa';

// Map icon string names to actual components
const iconComponents = {
  FaCode,
  FaMobile,
  FaRobot,
  FaServer,
  FaChartLine,
  FaExternalLinkAlt,
};

// Updated projects with additional info and "featured" property
const projects = [
  {
    id: 1,
    title: "Chat AI Assistant",
    description: "An advanced AI-powered chatbot similar to Google Gemini AI, offering seamless interactions and intelligent responses.",
    category: "ai",
    technologies: ["React", "Node.js", "OpenAI API"],
    thumbnail: "/projectimage/syedai.png",
    stats: [
      { name: "Conversion Rate", value: "+45%" },
      { name: "Page Load Time", value: "-60%" },
      { name: "User Engagement", value: "+80%" }
    ],
    additionalInfo: [
      { key: "Client", value: "Tech Solutions Inc." },
      { key: "Duration", value: "6 Months" },
      { key: "Team Size", value: "5 Members" }
    ],
    icon: "FaRobot",
    url: "https://syed-new-ai.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Furniture Portfolio Website",
    description: "A visually appealing website for a furniture manufacturing company, featuring an interactive product catalog.",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    thumbnail: "/projectimage/indianmake.png",
    stats: [
      { name: "Customer Satisfaction", value: "98%" },
      { name: "Response Time", value: "-70%" },
      { name: "Data Accuracy", value: "99.9%" }
    ],
    additionalInfo: [
      { key: "Client", value: "Home Decor Ltd." },
      { key: "Duration", value: "4 Months" },
      { key: "Team Size", value: "3 Members" }
    ],
    icon: "FaExternalLinkAlt",
    url: "https://indianmakesteel.netlify.app/",
    featured: false,
  },
  {
    id: 3,
    title: "3D Animations Portfolio Website",
    description: "A portfolio website designed for college staff, showcasing their work in 3D animations and interactive designs.",
    category: "web",
    technologies: ["Three.js", "React", "GSAP"],
    thumbnail: "/projectimage/ganapathi.png",
    stats: [
      { name: "User Interaction", value: "95%" },
      { name: "Loading Speed", value: "Fast" },
      { name: "Visual Appeal", value: "High" }
    ],
    additionalInfo: [
      { key: "Client", value: "University XYZ" },
      { key: "Duration", value: "5 Months" },
      { key: "Team Size", value: "4 Members" }
    ],
    icon: "FaExternalLinkAlt",
    url: "https://ganapathyramportfolio.netlify.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Pikachu Market - Items Listing Website",
    description: "An e-commerce platform for app users, listing Pikachu-themed products with a user-friendly shopping experience.",
    category: "web",
    technologies: ["React", "Firebase", "Stripe API"],
    thumbnail: "/projectimage/pikachumarket.png",
    stats: [
      { name: "Product Availability", value: "100%" },
      { name: "Order Processing Speed", value: "Instant" },
      { name: "User Retention Rate", value: "90%" }
    ],
    additionalInfo: [
      { key: "Client", value: "Pikachu Fans Inc." },
      { key: "Duration", value: "3 Months" },
      { key: "Team Size", value: "6 Members" }
    ],
    icon: "FaChartLine",
    url: "https://pikachu-market-place.netlify.app/",
    featured: true,
  },
  {
    id: 5,
    title: "VS Labels Company - Product Portfolio",
    description: "A comprehensive portfolio website listing various school-related products such as ties, belts, socks, and shorts.",
    category: "web",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    thumbnail: "/projectimage/vslabels.png",
    stats: [
      { name: "Product Listings", value: "500+" },
      { name: "Search Accuracy", value: "99%" },
      { name: "Customer Engagement", value: "85%" }
    ],
    additionalInfo: [
      { key: "Client", value: "VS Labels Ltd." },
      { key: "Duration", value: "7 Months" },
      { key: "Team Size", value: "8 Members" }
    ],
    icon: "FaChartLine",
    url: "https://vslabels.in/",
    featured: false,
  }
];


const AllProjects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects by category and search term
  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className=" bg-gradient-to-b from-gray-900 to-gray-800  py-12 px-4 sm:px-6 lg:px-8  ">
      {/* Animated background elements */}

      <div className="  max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-white mt-4"
          >
            Our Projects & Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-teal-500 mb-8"
          >
            Explore our diverse range of projects with interactive details and
            professional animations.
          </motion.p>
          {/* Search Bar */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          {/* Category Filters */}
          <div className="flex justify-center gap-4">
            {["all", "web", "app", "ai", "api"].map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`px-4 py-2 rounded-full bg-gradient-to-b from-gray-900 to-gray-800 transition-colors duration-200 ${
                  filter === category
                    ? "bg-blue-600 text-teal-500"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {category.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
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
            return (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.05 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg overflow-hidden relative"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category.toUpperCase()}
                  </div>
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <FaStar className="mr-1" /> Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Icon className="text-blue-600 text-xl mr-2" />
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-teal-500 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-b from-gray-900 to-gray-800 text-white px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {project.stats.slice(0, 2).map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-blue-600 font-bold">
                          {stat.value}
                        </div>
                        <div className="text-sm text-teal-500">{stat.name}</div>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => openModal(project)}
                    className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-teal-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal for detailed project info */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 overflow-y-auto max-h-full"
            >
              <div className="flex justify-between items-center mb-4 ">
                <h2 className="text-2xl font-bold ">{selectedProject.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-600 hover:text-gray-900 text-3xl leading-none"
                >
                  &times;
                </button>
              </div>
              <img
                src={selectedProject.thumbnail}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-teal-500 mb-4">
                {selectedProject.description}
              </p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-b from-gray-900 to-gray-800 text-teal-500 px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                {selectedProject.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-blue-600 font-bold">{stat.value}</div>
                    <div className="text-sm text-teal-500">{stat.name}</div>
                  </div>
                ))}
              </div>
              {selectedProject.additionalInfo && (
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">
                    Additional Information:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedProject.additionalInfo.map((info, index) => (
                      <div key={index} className="text-center">
                        <div className="font-bold text-teal-500">
                          {info.value}
                        </div>
                        <div className="text-sm text-white">{info.key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex justify-end">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-b from-gray-900 to-gray-800 text-teal-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Visit Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllProjects;
