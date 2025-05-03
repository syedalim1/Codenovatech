import { motion } from "framer-motion";
import {
  FaLinkedin,
 
  FaBrain,
  FaRobot,
  FaNetworkWired,
  FaMicrochip,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { SiTensorflow, SiPytorch } from "react-icons/si";

const teamMembers = [
  {
    name: "Syed Ali M",
    role: "Founder",
    image: "./syed.jpg", // Using existing image as placeholder
    bio: "Visionary founder with a passion for AI innovation and technological advancement",
    social: {
      linkedin: "https://www.linkedin.com/company/codenovatech/",
      x: "https://x.com/codenovatech",
      youtube: "https://www.youtube.com/@codenovatech",
      instagram: "https://www.instagram.com/codenovatech/",
      facebook: "https://www.facebook.com/codenovatech",
    },
    highlight: true,
  },
];

function TeamSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };







  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
        />
      </div>
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute -top-32 left-1/3 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      {/* New AI-themed background animations */}

      <div className="container-custom relative z-10">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-teal-500">
            Leadership & Innovation
          </h2>
          <motion.p
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            Meet Our Visionary Team
          </motion.p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            The brilliant minds behind our revolutionary AI solutions, driving
            innovation and excellence
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* Single Team Member Showcase */}
          <motion.div
            className="relative bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-2xl p-10 border border-teal-500/40 hover:border-teal-500/60 transition-all shadow-xl overflow-hidden"
            variants={fadeIn}
            whileHover={{ y: -5 }}
          >
            {/* Highlight effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-purple-500/10 -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Enhanced AI Pattern floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              {Array(20)
                .fill(0)
                .map((_, i) => (
                  <motion.div
                    key={`particle-enhanced-${i}`}
                    className="absolute w-1.5 h-1.5 bg-teal-500 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      x: [0, Math.random() * 30 - 15],
                      y: [0, Math.random() * 30 - 15],
                      opacity: [0, 0.9, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center relative z-10">
              {/* Left Column - Profile Image */}
              <div className="md:col-span-2 flex justify-center">
                <div className="relative h-64 w-64 md:h-80 md:w-80">
                  <img
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    className="h-full w-full object-cover rounded-full border-4 border-teal-500/50 hover:border-teal-500/70 transition-all shadow-lg"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(45,212,191,0.3)",
                        "0 0 30px rgba(45,212,191,0.7)",
                        "0 0 0px rgba(45,212,191,0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Enhanced AI-themed overlay on image */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 mix-blend-overlay"
                    animate={{
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-white/10" />

                  {/* Orbiting tech icons */}
                  {[FaBrain, FaRobot, FaNetworkWired, FaMicrochip].map(
                    (Icon, index) => (
                      <motion.div
                        key={`orbit-icon-${index}`}
                        className="absolute"
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: "rgba(15, 23, 42, 0.7)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid rgba(45,212,191,0.3)",
                        }}
                        animate={{
                          x: Math.cos((index * Math.PI) / 2) * 150,
                          y: Math.sin((index * Math.PI) / 2) * 150,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 5,
                        }}
                      >
                        <Icon className="text-teal-500 h-5 w-5" />
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              {/* Right Column - Profile Content */}
              <div className="md:col-span-3 text-left space-y-6">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
                    {teamMembers[0].name}
                  </h3>
                  <p className="mt-2 text-2xl text-teal-300 font-semibold">
                    {teamMembers[0].role}
                  </p>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                  {teamMembers[0].bio} - A visionary in the field of artificial
                  intelligence and technological innovation, driving
                  breakthrough solutions that transform industries and enhance
                  user experiences. With a passion for cutting-edge technology
                  and a deep understanding of both business and technical
                  challenges, leading the way in creating AI systems that are
                  both powerful and accessible.
                </p>

                {/* Social Links */}
                <div className="mt-8 flex gap-6">
                  <motion.a
                    href={teamMembers[0].social.linkedin}
                    className="text-gray-400 hover:text-teal-500 transition-all"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <FaLinkedin className="h-8 w-8" />
                  </motion.a>
                  <motion.a
                    href={teamMembers[0].social.youtube}
                    className="text-gray-400 hover:text-teal-500 transition-all"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                  >
                    <FaYoutube className="h-8 w-8" />
                  </motion.a>
                  <motion.a
                    href={teamMembers[0].social.instagram}
                    className="text-gray-400 hover:text-teal-500 transition-all"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                  >
                    <FaInstagram className="h-8 w-8" />
                  </motion.a>
                  <motion.a
                    href={teamMembers[0].social.x}
                    className="text-gray-400 hover:text-teal-500 transition-all"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                  >
                    <FaTwitter className="h-8 w-8" />
                  </motion.a>
                  <motion.a
                    href={teamMembers[0].social.facebook}
                    className="text-gray-400 hover:text-teal-500 transition-all"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                  >
                    <FaFacebook className="h-8 w-8" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Company Vision Section - Enhanced with AI icons */}
        <motion.div
          className="mt-24 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-teal-500/20 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
           

              <FaBrain className="h-10 w-10 text-teal-500 mb-4 relative z-10" />
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                Our Vision
              </h3>
              <p className="text-gray-400 relative z-10">
                To revolutionize the way people interact with AI, making
                advanced technology accessible and beneficial for everyone.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Data flow background */}
              <div className="absolute inset-0 opacity-10">
                {Array(8)
                  .fill(0)
                  .map((_, i) => (
                    <motion.div
                      key={`data-line-${i}`}
                      className="absolute h-px bg-blue-500"
                      style={{
                        left: "0%",
                        top: `${(i * 100) / 8 + 10}%`,
                        width: "100%",
                        transformOrigin: "left center",
                      }}
                      animate={{
                        scaleX: [0, 1],
                        opacity: [0, 0.7, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  ))}
              </div>

              <FaNetworkWired className="h-10 w-10 text-blue-500 mb-4 relative z-10" />
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                Our Mission
              </h3>
              <p className="text-gray-400 relative z-10">
                Creating innovative AI solutions that solve real-world problems
                while maintaining the highest standards of ethics and user
                privacy.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30 relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
            

              <FaMicrochip className="h-10 w-10 text-purple-500 mb-4 relative z-10" />
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                Our Values
              </h3>
              <p className="text-gray-400 relative z-10">
                Innovation, integrity, collaboration, and a relentless pursuit
                of excellence guide everything we do at CODENOVATECH.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Achievements */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          
          <motion.div
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <SiTensorflow className="h-8 w-8 text-teal-500 mb-2" />
            <div className="text-sm text-gray-400">TensorFlow Certified</div>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <SiPytorch className="h-8 w-8 text-teal-500 mb-2" />
            <div className="text-sm text-gray-400">PyTorch Experts</div>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <FaRobot className="h-8 w-8 text-teal-500 mb-2" />
            <div className="text-sm text-gray-400">AI Innovation Leaders</div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-xl text-gray-400 mb-8">
            Want to join our team of experts?
          </p>
          <motion.a
            href="/careers"
            className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Open Positions
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default TeamSection;
