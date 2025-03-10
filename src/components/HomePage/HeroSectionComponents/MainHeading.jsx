import { motion } from "framer-motion";

const MainHeading = ({ fadeIn }) => (
  <>
    <motion.h1
      className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"
      variants={fadeIn}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.span
        animate={{
          backgroundImage: [
            "linear-gradient(to right, #2dd4bf, #3b82f6, #a855f7)",
            "linear-gradient(to right, #a855f7, #2dd4bf, #3b82f6)",
            "linear-gradient(to right, #3b82f6, #a855f7, #2dd4bf)",
            "linear-gradient(to right, #2dd4bf, #3b82f6, #a855f7)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="bg-clip-text text-transparent"
      >
        CODENOVATECH: AI-Powered Solutions for Businesses
      </motion.span>
    </motion.h1>

    {/* Animated underline */}
    <motion.div
      className="h-1 w-40 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-full mx-auto mt-4"
      animate={{
        width: ["10%", "40%", "10%"],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Subheading  */}
    <motion.div
      className="mt-6 text-xl text-gray-300 leading-8"
      variants={fadeIn}
    >
      <p>
        We are a Coimbatore-based IT company specializing in
        Artificial Intelligence. As a product-based startup, we
        deliver cutting-edge AI solutions tailored to your needs. Our
        expertise includes Generative AI, Predictive Analytics, and
        Computer Vision. We build robust AI infrastructure and ensure
        ethical, secure AI deployments. Partner with CODENOVATECH to
        transform your business with the power of AI.
      </p>
    </motion.div>
  </>
);

export default MainHeading; 