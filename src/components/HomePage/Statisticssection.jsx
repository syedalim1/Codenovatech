import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaAward, FaUsers, FaProjectDiagram } from "react-icons/fa";

function Statisticssection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const statistics = [
    {
      id: 1,
      name: "Projects Completed",
      value: "200+",
      icon: FaProjectDiagram,
    },
    { id: 2, name: "Happy Clients", value: "150+", icon: FaUsers },
    { id: 3, name: "Team Members", value: "50+", icon: FaUser },
    { id: 4, name: "Awards Won", value: "25+", icon: FaAward },
  ];

  return (
    <div>
      <motion.div
        className=" py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {statistics.map((stat) => (
              <motion.div
                key={stat.id}
                className="text-center text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <stat.icon className="mx-auto h-8 w-8 mb-4" />
                <motion.div
                  className="text-4xl font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="mt-2 text-sm">{stat.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Statisticssection;
