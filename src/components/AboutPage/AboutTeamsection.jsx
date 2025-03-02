import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaAward, FaBrain } from "react-icons/fa";
import AiNetworkAnimation from "../ServicesPage/AiNetworkAnimation";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const teamMember = {
  name: "Syed Ali M",
  role: "Founder & CEO",
  imageUrl: "/syed.jpg",
  bio: "Syed Ali M is a visionary leader and AI innovator with over 15 years of experience in artificial intelligence, machine learning, and strategic technology leadership. He is passionate about leveraging AI to solve complex problems and create transformative solutions for businesses. Syed is a recognized expert in neural networks, deep learning, and AI strategy, holding certifications in AI Ethics and ML Engineering.",
  skills: [
    "AI Strategy",
    "Neural Networks",
    "Deep Learning",
    "Machine Learning",
    "Strategic Leadership",
    "Innovation Management",
    "Product Development",
    "Team Leadership",
  ],
  social: { linkedin: "#", github: "#" },
  certifications: [
    "AI Ethics Certified",
    "ML Engineering Professional",
    "Certified AI Strategist",
    "Leadership Excellence Award",
  ],
  color: "from-blue-500 to-teal-500",
  icon: FaBrain,
  specialty: "AI Vision and Strategy",
  achievement:
    "Founded CODENOVATECH and led the development of groundbreaking AI solutions",
  aiQuote:
    "My mission is to harness the power of AI to create a better future for all, driving innovation and positive change through technology.",
};

function AboutTeamSection() {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background Animation */}
      <AiNetworkAnimation />
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('/circuit-pattern.svg')` }}
        />
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          className="mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-2xl p-10 border border-teal-500/40 hover:border-teal-500/60 transition-all shadow-xl overflow-hidden"
            variants={fadeIn}
            whileHover={{ y: -5 }}
          >
            {/* Content for Syed Ali M's profile */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center relative z-10">
              {/* Left Column - Profile Image */}
              <div className="md:col-span-2 flex justify-center">
                <div className="relative h-96 w-96">
                  <img
                    src={teamMember.imageUrl}
                    alt={teamMember.name}
                    className="h-full w-full object-cover rounded-full border-4 border-teal-500/50 hover:border-teal-500/70 transition-all shadow-lg"
                  />
                </div>
              </div>

              {/* Right Column - Profile Content */}
              <div className="md:col-span-3 text-left space-y-6">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
                    {teamMember.name}
                  </h3>
                  <p className="mt-2 text-2xl text-teal-300 font-semibold">
                    {teamMember.role}
                  </p>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                  {teamMember.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <h4 className="text-white font-semibold text-lg w-full mb-2">
                    Areas of Expertise:
                  </h4>
                  {teamMember.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-teal-900/30 text-teal-300 text-md rounded-full border border-teal-500/20"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Certifications */}
                <div className="mt-8">
                  <h4 className="text-white font-semibold text-lg mb-4">
                    Certifications & Achievements:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {teamMember.certifications.map((cert, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-900/30 rounded-lg text-md text-gray-300 border border-blue-500/20"
                        whileHover={{ scale: 1.03 }}
                      >
                        <FaAward className="h-5 w-5 text-blue-400" />
                        <span>{cert}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 flex gap-6">
                  <motion.a
                    href={teamMember.social.linkedin}
                    className="text-gray-400 hover:text-teal-500 transition-all"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <FaLinkedin className="h-8 w-8" />
                  </motion.a>
                  <motion.a
                    href={teamMember.social.github}
                    className="text-gray-400 hover:text-teal-500 transition-all"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                  >
                    <FaGithub className="h-8 w-8" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutTeamSection;
