
import { motion } from "framer-motion";

import {
 
  FaStar,
  FaUsers,
  FaClock,
  FaShieldAlt,
  
} from "react-icons/fa";


const benefits = [
  {
    icon: FaStar,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes",
  },
  {
    icon: FaUsers,
    title: "Dedicated Team",
    description: "Expert developers at your service",
  },
  {
    icon: FaClock,
    title: "Timely Delivery",
    description: "On-time project completion guaranteed",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Solutions",
    description: "Enterprise-grade security measures",
  },
];
function ServicesbenefitsSection() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            className="p-6 text-center bg-gradient-to-b from-gray-800 to-gray-700 rounded-2xl shadow-lg glass-effect"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.05 }}
          >
            <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">
              {benefit.title}
            </h3>
            <p className="text-gray-300">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ServicesbenefitsSection