import { motion } from "framer-motion";
import { FaRocket, FaAward, FaUsers, FaCode } from "react-icons/fa";
import { SiGooglecloud, SiAwslambda } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function AboutHeroSection() {
  return (
    <div className="relative isolate overflow-hidden ">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container-custom py-24 sm:py-32">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Content Section */}
          <motion.div variants={fadeIn}>
            <motion.div variants={fadeIn}>
              <h2 className="text-base font-semibold leading-7 text-teal-500">
                Pioneering Digital Innovation
              </h2>
            </motion.div>

            <motion.h1
              className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl"
              variants={fadeIn}
            >
              <TypeAnimation
                sequence={[
                  "Transforming Ideas",
                  1000,
                  "Engineering Solutions",
                  1000,
                  "Driving Innovation",
                  1000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </motion.h1>

            <motion.p
              className="mt-6 text-xl leading-8 text-gray-300"
              variants={fadeIn}
            >
              Founded in 2019, CodeNovaTech emerged as a catalyst for digital
              transformation. Our journey began with a simple vision: to bridge
              the gap between cutting-edge technology and business excellence.
            </motion.p>

            {/* Trust Metrics */}
            <motion.div
              className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4"
              variants={staggerChildren}
            >
              {[
                { icon: FaRocket, value: "150+", label: "Projects Deployed" },
                { icon: FaUsers, value: "98%", label: "Client Retention" },
                { icon: FaAward, value: "25+", label: "Industry Awards" },
                { icon: FaCode, value: "1M+", label: "Lines of Code" },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <metric.icon className="h-8 w-8 text-teal-500 mb-4" />
                  <div className="text-2xl font-bold text-white">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div className="relative" variants={fadeIn}>
            <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-600/20" />

              {/* Animated Tech Stack */}
              <div className="absolute inset-0 flex flex-col justify-center p-8">
                <div className="flex flex-wrap gap-4 justify-center">
                  <SiGooglecloud className="h-12 w-12 text-white animate-float" />
                  <SiAwslambda className="h-12 w-12 text-white animate-float animation-delay-200" />
                  <FaCode className="h-12 w-12 text-white animate-float animation-delay-400" />
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full">
                <FaAward className="h-5 w-5 text-teal-500" />
                <span className="text-sm text-white">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full">
                <FaUsers className="h-5 w-5 text-teal-500" />
                <span className="text-sm text-white">AWS Partner</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mt-16 border-t border-gray-800 pt-16"
          variants={staggerChildren}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Our Journey</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                year: "2019",
                title: "Founded",
                description: "Started as a small team of passionate developers",
              },
              {
                year: "2021",
                title: "Expansion",
                description: "Opened international offices in 3 countries",
              },
              {
                year: "2023",
                title: "AI Focus",
                description: "Launched dedicated AI/ML division",
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-colors"
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className="text-teal-500 font-bold text-xl mb-2">
                  {milestone.year}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {milestone.title}
                </h4>
                <p className="text-gray-400">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutHeroSection;
