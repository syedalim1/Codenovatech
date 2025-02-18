import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMobile,
  FaRobot,
  FaServer,
  FaChartLine,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
    caseStudyLink: "#",
    client: "Tech Retail Corp",
    duration: "6 Months",
    teamSize: "8 Members",
    techStack: ["React", "Node.js", "AWS", "MongoDB"],
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
    caseStudyLink: "#",
    client: "HealthCare Inc.",
    duration: "8 Months",
    teamSize: "10 Members",
    techStack: ["Flutter", "Firebase", "Python", "TensorFlow"],
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
    caseStudyLink: "#",
    client: "Finance Global",
    duration: "12 Months",
    teamSize: "12 Members",
    techStack: ["Python", "TensorFlow", "Kubernetes", "Docker"],
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
    caseStudyLink: "#",
    client: "FinTech Solutions",
    duration: "10 Months",
    teamSize: "6 Members",
    techStack: ["Node.js", "PostgreSQL", "Redis", "AWS Lambda"],
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
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  const getChartData = (project) => ({
    labels: project.stats.map((stat) => stat.name),
    datasets: [
      {
        label: "Performance Metrics",
        data: project.stats.map((stat) => parseFloat(stat.value)),
        backgroundColor: "#4F46E5",
        borderColor: "#6366F1",
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container-custom">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">
              Trusted by 500+ Companies
            </span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
            Transforming Ideas into Digital Success
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Discover how our innovative solutions have driven measurable results
            for global enterprises and startups alike.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div className="mt-16" variants={fadeIn}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-600 shadow-md hover:shadow-lg"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              className="relative group bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <project.icon className="h-10 w-10 text-primary" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <FaChartLine className="h-6 w-6" />
                  </button>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex items-center gap-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Performance Chart */}
                <div className="mt-8 h-40">
                  <Bar
                    data={getChartData(project)}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { display: false },
                        tooltip: { enabled: true },
                      },
                      scales: {
                        y: { display: false },
                        x: { grid: { display: false } },
                      },
                    }}
                  />
                </div>

                {/* Success Story */}
                <div className="mt-8 p-4 bg-primary/5 rounded-xl">
                  <p className="text-sm font-semibold text-primary">
                    Success Metric
                  </p>
                  <p className="mt-2 text-gray-900">{project.successStory}</p>
                </div>

                {/* Client Info */}
                <div className="mt-8 border-t pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium text-gray-900">
                        {project.client}
                      </p>
                    </div>
                    <a
                      href={project.caseStudyLink}
                      className="flex items-center text-primary hover:text-primary-dark"
                    >
                      Case Study
                      <FaExternalLinkAlt className="ml-2" />
                    </a>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium text-gray-900">
                        {project.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Team Size</p>
                      <p className="font-medium text-gray-900">
                        {project.teamSize}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full p-8 relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              {/* Modal content with detailed project info */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-primary"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Trusted By Section */}
        <div className="mt-24 border-t pt-16">
          <h3 className="text-center text-sm font-semibold text-gray-500 mb-8">
            Trusted by innovative teams at
          </h3>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <img
              src="/logos/adobe.svg"
              alt="Adobe"
              className="h-12 w-auto opacity-50 hover:opacity-100 transition-opacity"
            />
            <img
              src="/logos/microsoft.svg"
              alt="Microsoft"
              className="h-12 w-auto opacity-50 hover:opacity-100 transition-opacity"
            />
            <img
              src="/logos/google.svg"
              alt="Google"
              className="h-12 w-auto opacity-50 hover:opacity-100 transition-opacity"
            />
            <img
              src="/logos/aws.svg"
              alt="AWS"
              className="h-12 w-auto opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
