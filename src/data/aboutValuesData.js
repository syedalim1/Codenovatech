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
import {
  SiGooglescholar,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
} from "react-icons/si";

// Pre-computed animation variants 
export const cardVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  hover: {
    y: -10,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    }
  }
};

// Animation stagger config
export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Pre-computed particle colors
export const particleColors = {
  blue: ["#38bdf8", "#3b82f6", "#2dd4bf"],
  purple: ["#c084fc", "#a855f7", "#d946ef"],
  orange: ["#fb923c", "#f97316", "#f59e0b"],
  green: ["#4ade80", "#10b981", "#22d3ee"],
};

// Values data
export const valuesData = [
  {
    name: "AI Innovation",
    icon: FaBrain,
    description: "Pioneering AI solutions that drive business transformation",
    stat: "100+ AI Projects Deployed",
    color: "from-teal-500 to-blue-600",
    progress: 95,
    clients: ["Logo1", "Logo2", "Logo3"],
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

// Background blob configurations
export const gradientBlobsConfig = [
  {
    className: "absolute -top-40 left-1/3 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl",
    animation: {
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.2, 0.1],
      x: [0, 30, 0],
      y: [0, -20, 0],
    },
    transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
  },
  {
    className: "absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl",
    animation: {
      scale: [1, 1.3, 1],
      opacity: [0.1, 0.3, 0.1],
      x: [0, -40, 0],
      y: [0, 30, 0],
    },
    transition: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 },
  },
  {
    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl",
    animation: {
      scale: [1, 1.5, 1],
      opacity: [0.05, 0.15, 0.05],
    },
    transition: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 },
  },
]; 