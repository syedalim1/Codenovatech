import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaAward } from "react-icons/fa";
import { SiGooglecloud, SiAwslambda } from "react-icons/si";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const team = [
  {
    name: "Syed ALi M ",
    role: "CEO & Founder",
    imageUrl:
      "/syed.jpg",
    bio: "15+ years in tech leadership, cloud architecture expert",
    skills: ["AWS", "Node.js", "Strategic Planning"],
    social: { linkedin: "#", github: "#" },
    certifications: ["AWS Certified", "Google Cloud Professional"],
  },
  {
    name: "Praveen Kumar S",
    role: "CTO",
    imageUrl:
      "/praveen.jpg",
    bio: "Full-stack development specialist, system architecture",
    skills: ["React", "Python", "Microservices"],
    social: { linkedin: "#", github: "#" },
    certifications: ["Azure Architect", "Scrum Master"],
  },
  {
    name: "Wilson A",
    role: "Head of AI",
    imageUrl:
      "/wilson.jpg",
    bio: "Machine learning & neural networks expert",
    skills: ["TensorFlow", "PyTorch", "NLP"],
    social: { linkedin: "#", github: "#" },
    certifications: ["AWS ML Specialist", "PhD AI"],
  },
 
];

function AboutTeamSection() {
  return (
    <div className="relative  py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 left-1/3 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical Leadership
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the experts driving our innovation engine
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1  lg:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {team.map((person, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              {/* Profile Image */}
              <div className="relative h-80">
                <img
                  className="w-full h-full object-cover"
                  src={person.imageUrl}
                  alt={person.name}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60" />

                {/* Social Links */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-3">
                    <a
                      href={person.social.linkedin}
                      className="text-white hover:text-teal-400"
                    >
                      <FaLinkedin className="h-6 w-6" />
                    </a>
                    <a
                      href={person.social.github}
                      className="text-white hover:text-teal-400"
                    >
                      <FaGithub className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {person.name}
                </h3>
                <p className="text-teal-600 font-medium mt-2">{person.role}</p>
                <p className="text-gray-600 text-sm mt-4">{person.bio}</p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {person.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-black text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Certifications */}
                <div className="mt-6 flex items-center gap-2">
                  {person.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-3 py-1 text-black text-sm rounded-full"
                    >
                      <FaAward className="h-4 w-4 text-teal-600" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Achievements */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden gap-4">
            <div className="text-4xl font-bold text-teal-600">100+</div>
            <div className="text-white mt-2">Projects Delivered</div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden gap-4">
            <div className="text-4xl font-bold text-teal-600">98%</div>
            <div className="text-white mt-2">Client Satisfaction</div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden gap-4">
            <SiAwslambda className="h-8 w-8 text-teal-600" />
            <div>
              <div className="text-xl font-bold text-white">AWS Partner</div>
              <div className="text-white text-sm">Certified Team</div>
            </div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors group relative overflow-hidden gap-4">
            <SiGooglecloud className="h-8 w-8 text-teal-600" />
            <div>
              <div className="text-xl font-bold text-white">Google Cloud</div>
              <div className="text-white text-sm">Premier Partner</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        ></motion.div>
      </div>
    </div>
  );
}

export default AboutTeamSection;
