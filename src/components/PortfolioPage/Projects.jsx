import { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobile, FaRobot, FaServer } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with AI-powered recommendations",
    category: "web",
    stats: [
      { name: "Conversion Rate", value: "+45%" },
      { name: "Page Load Time", value: "-60%" },
      { name: "User Engagement", value: "+80%" },
    ],
    icon: FaCode,
    successStory: "Increased sales by 150% within 6 months",
  },
  {
    title: "Healthcare App",
    description: "Mobile application for remote patient monitoring",
    category: "app",
    stats: [
      { name: "Patient Satisfaction", value: "98%" },
      { name: "Response Time", value: "-70%" },
      { name: "Data Accuracy", value: "99.9%" },
    ],
    icon: FaMobile,
    successStory: "Improved patient engagement by 200%",
  },
  {
    title: "AI Trading System",
    description: "Automated trading system with machine learning algorithms",
    category: "ai",
    stats: [
      { name: "Trading Accuracy", value: "92%" },
      { name: "Processing Speed", value: "0.1ms" },
      { name: "ROI Improvement", value: "+65%" },
    ],
    icon: FaRobot,
    successStory: "Achieved 40% more ROI in Q1 2025",
  },
  {
    title: "Payment Gateway API",
    description: "Secure and scalable payment processing API",
    category: "api",
    stats: [
      { name: "Transaction Speed", value: "< 1s" },
      { name: "Uptime", value: "99.99%" },
      { name: "Success Rate", value: "99.9%" },
    ],
    icon: FaServer,
    successStory: "Handled 1M transactions per day with 99.99% uptime",
  },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "app", name: "App Development" },
  { id: "ai", name: "AI Solutions" },
  { id: "api", name: "API Services" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};
function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );
  return (
    <div>
      <div className="container-custom py-24">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">
            Our Portfolio
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Projects
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our successful projects and see how we are helped businesses
            achieve their goals.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <motion.div
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-x-4">
                    <project.icon
                      className="h-8 w-8 text-primary"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold leading-7 text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>
                  <p className="mt-4 text-sm text-primary font-semibold">
                    {project.successStory}
                  </p>
                </div>
                <div className="mt-auto bg-gray-50 p-8">
                  <div className="grid grid-cols-3 gap-4">
                    {project.stats.map((stat) => (
                      <div key={stat.name}>
                        <p className="text-sm font-medium leading-6 text-gray-600">
                          {stat.name}
                        </p>
                        <p className="mt-2 flex items-baseline gap-x-2">
                          <span className="text-2xl font-semibold tracking-tight text-primary">
                            {stat.value}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
