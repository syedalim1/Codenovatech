import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaAward, FaCode } from "react-icons/fa";
import { SiGooglecloud, SiAwslambda } from "react-icons/si";

const teamMembers = [
  {
    name: "Syed Ali M",
    role: "Lead Full-Stack Developer",
    image: "./profile.jpg",
    bio: "10+ years experience in cloud-native applications and system architecture",
    skills: ["Node.js", "AWS", "React", "Microservices"],
    social: { linkedin: "#", github: "#" },
    certifications: ["AWS Certified", "Google Cloud Professional"],
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
    image: "./syed.jpg",
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
    <div className="relative py-24 sm:py-32  overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-32 left-1/3 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-teal-500">
            Technical Leadership
          </h2>
          <motion.p
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            Engineering Excellence
          </motion.p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Our team of certified experts drives innovation through cutting-edge
            technology
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-teal-500/30 transition-all"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              {/* Profile Image */}
              <div className="relative h-48 w-48 mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover rounded-full border-4 border-teal-500/30 group-hover:border-teal-500/50 transition-all"
                />
                <div className="absolute inset-0 rounded-full border-2 border-white/10" />
              </div>

              {/* Profile Content */}
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="mt-2 text-teal-400">{member.role}</p>
                <p className="mt-4 text-gray-400 text-sm">{member.bio}</p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-900/50 text-teal-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Certifications */}
                <div className="mt-6 flex justify-center gap-3">
                  {member.certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-900/30 rounded-full text-sm text-gray-400"
                    >
                      <FaAward className="h-4 w-4 text-teal-500" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-6 flex justify-center gap-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-teal-500 transition-all"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-teal-500 transition-all"
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Achievements */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30">
            <div className="text-3xl font-bold text-teal-500 mb-2">150+</div>
            <div className="text-sm text-gray-400">Projects Delivered</div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30">
            <SiAwslambda className="h-8 w-8 text-teal-500 mb-2" />
            <div className="text-sm text-gray-400">AWS Certified Team</div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30">
            <SiGooglecloud className="h-8 w-8 text-teal-500 mb-2" />
            <div className="text-sm text-gray-400">Google Cloud Partners</div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/30">
            <FaCode className="h-8 w-8 text-teal-500 mb-2" />
            <div className="text-sm text-gray-400">
              Open Source Contributors
            </div>
          </div>
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
          <a
            href="/careers"
            className="inline-block px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all"
          >
            View Open Positions
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default TeamSection;
