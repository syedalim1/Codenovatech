import { motion } from "framer-motion";
import { SiGoogle, SiSamsung, SiSony, SiIntel, SiNvidia } from "react-icons/si";

const logos = [
  { icon: SiGoogle, name: "Google" },
  //   { icon: SiMicrosoft, name: "Microsoft" },
  { icon: SiSamsung, name: "Samsung" },
  { icon: SiSony, name: "Sony" },
  { icon: SiIntel, name: "Intel" },
  { icon: SiNvidia, name: "Nvidia" },
];

const ClientLogos = () => {
  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map(({ icon: Icon, name }, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors"
          >
            <Icon className="h-12 w-12 flex-shrink-0" />
            <span className="text-lg font-medium">{name}</span>
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent" />
    </div>
  );
};

export default ClientLogos;
