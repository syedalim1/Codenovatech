import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaMobile,
  FaRobot,
  FaServer,
  FaUsers,
  FaClock,
  FaTools,
} from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with AI-powered recommendations",
    category: "web",
    thumbnail: "/web-dev-illustration.png",
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
    challenges: [
      "High traffic load during peak hours",
      "Complex recommendation system",
      "Real-time inventory management"
    ],
    solutions: [
      "Implemented AWS auto-scaling",
      "Developed custom AI algorithm",
      "Built real-time sync system"
    ]
  },
  // Add more projects as needed
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="relative h-64 md:h-96">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
              {project.category.toUpperCase()}
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center mb-6">
              <project.icon className="text-blue-600 text-3xl mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
            </div>

            <p className="text-xl text-gray-600 mb-8">{project.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center">
                <FaUsers className="text-blue-600 text-xl mr-2" />
                <div>
                  <div className="text-sm text-gray-500">Team Size</div>
                  <div className="font-semibold">{project.teamSize}</div>
                </div>
              </div>
              <div className="flex items-center">
                <FaClock className="text-blue-600 text-xl mr-2" />
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-semibold">{project.duration}</div>
                </div>
              </div>
              <div className="flex items-center">
                <FaTools className="text-blue-600 text-xl mr-2" />
                <div>
                  <div className="text-sm text-gray-500">Client</div>
                  <div className="font-semibold">{project.client}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Key Metrics</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.stats.map((stat, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-blue-600 font-bold text-xl">{stat.value}</div>
                      <div className="text-gray-500">{stat.name}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Solutions</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {project.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Success Story</h2>
              <p className="text-gray-600">{project.successStory}</p>
              <a
                href={project.caseStudyLink}
                className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700"
              >
                Read Case Study
                <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
