import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaAward,
  FaCode,
  FaStar,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { SiGooglecloud, SiAwslambda } from "react-icons/si";

const teamMembers = [
  {
    name: "Muhammadh Rafeek",
    role: "Founder",
    image: "./syed.jpg", // Using existing image as placeholder
    bio: "Visionary founder with a passion for AI innovation and technological advancement",
    skills: [
      "Strategic Vision",
      "AI Innovation",
      "Leadership",
      "Business Strategy",
    ],
    social: { linkedin: "#", github: "#" },
    certifications: ["Tech Visionary", "Innovation Leader"],
    highlight: true,
  },
  {
    name: "Syed Ali M",
    role: "Chief Executive Officer",
    image: "./syed.jpg",
    bio: "Driving the company's vision with 10+ years experience in cloud-native applications and system architecture",
    skills: [
      "Executive Leadership",
      "AI Strategy",
      "Cloud Architecture",
      "Business Growth",
    ],
    social: { linkedin: "#", github: "#" },
    certifications: ["AWS Certified", "Google Cloud Professional"],
    highlight: true,
  },
  {
    name: "Wilson A",
    role: "Senior UI/UX Engineer",
    image: "./wilson.jpg",
    bio: "Design systems expert focused on accessible and performant interfaces",
    skills: ["Figma", "WebGL", "UX Research", "Motion Design"],
    social: { linkedin: "#", dribbble: "#" },
    certifications: ["Adobe Certified", "Accessibility Specialist"],
  },
  {
    name: "Praveen Kumar S",
    role: "Lead Data Scientist",
    image: "./praveen.jpg",
    bio: "Machine learning specialist with focus on NLP and predictive analytics",
    skills: ["Python", "TensorFlow", "PyTorch", "Big Data"],
    social: { linkedin: "#", github: "#" },
    certifications: ["AWS ML Specialist", "TensorFlow Developer"],
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
      </div>

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
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`group relative ${
                member.highlight
                  ? "bg-gradient-to-b from-gray-800/80 to-gray-900/80"
                  : "bg-gray-800/50"
              } rounded-2xl p-8 border ${
                member.highlight ? "border-teal-500/40" : "border-gray-700/50"
              } hover:border-teal-500/30 transition-all shadow-xl`}
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              {/* Highlight effect for founder and CEO */}
              {member.highlight && (
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
              )}

              {/* Profile Image with animated glow for highlighted members */}
              <div className="relative h-48 w-48 mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`h-full w-full object-cover rounded-full border-4 ${
                    member.highlight
                      ? "border-teal-500/50"
                      : "border-teal-500/30"
                  } group-hover:border-teal-500/70 transition-all`}
                />
                {member.highlight && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(45,212,191,0.3)",
                        "0 0 20px rgba(45,212,191,0.7)",
                        "0 0 0px rgba(45,212,191,0.3)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
                <div className="absolute inset-0 rounded-full border-2 border-white/10" />
              </div>

              {/* Profile Content */}
              <div className="mt-8 text-center">
                <h3
                  className={`text-2xl font-bold ${
                    member.highlight
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
                      : "text-white"
                  }`}
                >
                  {member.name}
                </h3>
                <p
                  className={`mt-2 ${
                    member.highlight
                      ? "text-teal-300 font-semibold"
                      : "text-teal-400"
                  }`}
                >
                  {member.role}
                </p>
                <p className="mt-4 text-gray-400 text-sm">{member.bio}</p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className={`px-3 py-1 ${
                        member.highlight ? "bg-teal-900/30" : "bg-gray-900/50"
                      } text-teal-300 text-sm rounded-full`}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Certifications */}
                <div className="mt-6 flex justify-center gap-3">
                  {member.certifications.map((cert, i) => (
                    <motion.div
                      key={i}
                      className={`flex items-center gap-1 px-3 py-1 ${
                        member.highlight ? "bg-blue-900/30" : "bg-gray-900/30"
                      } rounded-full text-sm text-gray-400`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaAward
                        className={`h-4 w-4 ${
                          member.highlight ? "text-blue-400" : "text-teal-500"
                        }`}
                      />
                      <span>{cert}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-6 flex justify-center gap-4">
                  <motion.a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-teal-500 transition-all"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    href={member.social.github}
                    className="text-gray-400 hover:text-teal-500 transition-all"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                  >
                    <FaGithub className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Vision Section */}
        <motion.div
          className="mt-24 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-teal-500/20 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
              whileHover={{ y: -5 }}
            >
              <FaLightbulb className="h-10 w-10 text-teal-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
              <p className="text-gray-400">
                To revolutionize the way people interact with AI, making
                advanced technology accessible and beneficial for everyone.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
              whileHover={{ y: -5 }}
            >
              <FaStar className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
              <p className="text-gray-400">
                Creating innovative AI solutions that solve real-world problems
                while maintaining the highest standards of ethics and user
                privacy.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
              whileHover={{ y: -5 }}
            >
              <FaRocket className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Our Values</h3>
              <p className="text-gray-400">
                Innovation, integrity, collaboration, and a relentless pursuit
                of excellence guide everything we do at CODENOVATECH.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Achievements */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-bold text-teal-500 mb-2">100+</div>
            <div className="text-sm text-gray-400">Projects Delivered</div>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <SiAwslambda className="h-8 w-8 text-teal-500 mb-2" />
            <div className="text-sm text-gray-400">AWS Certified Team</div>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <SiGooglecloud className="h-8 w-8 text-teal-500 mb-2" />
            <div className="text-sm text-gray-400">Google Cloud Partners</div>
          </motion.div>
          <motion.div
            className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <FaCode className="h-8 w-8 text-teal-500 mb-2" />
            <div className="text-sm text-gray-400">
              Open Source Contributors
            </div>
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
