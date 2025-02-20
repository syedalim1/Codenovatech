import { FaChartLine, FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiAdobe, SiGoogle } from "react-icons/si";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "1M+", label: "Revenue Generated" },
  { value: "50+", label: "Awards Won" },
];

const trustedClients = [
  { icon: SiAdobe, name: "Adobe" },
  // { icon: SiMicrosoft, name: "Microsoft" },
  { icon: SiGoogle, name: "Google" },
];

const PortfolioHeroSection = () => {
  return (
    <div className="relative overflow-hidden  py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-white/10 rounded-lg"
            initial={{
              scale: 0,
              opacity: 0,
              x: Math.random() * 1000 - 500,
              y: Math.random() * 1000 - 500,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
              rotate: 360,
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="container-custom text-center text-white relative z-10"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center bg-white/10 rounded-full px-6 py-2 mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FaRegCheckCircle className="text-green-400 mr-2" />
          <span className="text-sm font-semibold">
            Trusted by Global Brands
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Transforming Digital Experiences
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Delivering measurable results through data-driven strategies and
          innovative solutions for over a decade.
        </motion.p>

        {/* Statistics Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="btn-primary group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:to-purple-500 px-8 py-4 rounded-full text-lg font-semibold flex items-center mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule Free Consultation
          <FaChartLine className="inline ml-3 transition-transform group-hover:translate-x-1" />
        </motion.button>

        {/* Trusted Clients */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-sm text-blue-200 mb-6">
            TRUSTED BY INDUSTRY LEADERS
          </div>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {trustedClients.map((Client, index) => (
              <Client.icon
                key={index}
                className="text-4xl text-white/50 hover:text-white/80 transition-colors cursor-pointer"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Animated cursor follower */}
      <motion.div
        className="absolute w-96 h-96 bg-radial-gradient from-purple-500/20 to-transparent rounded-full pointer-events-none"
        animate={{
          x: [-100, 100, -50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default PortfolioHeroSection;
