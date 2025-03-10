import { motion } from "framer-motion";

const AIProductAnnouncement = ({ fadeIn }) => (
  <motion.div
    className="mt-8 text-center text-white rounded-xl p-8 shadow-2xl border border-white/10 relative overflow-hidden"
    variants={fadeIn}
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.h2
      className="text-3xl font-bold mb-4 relative z-10"
      animate={{
        color: ["#ffffff", "#a5f3fc", "#ffffff"],
        textShadow: [
          "0 0 5px rgba(0,0,0,0)",
          "0 0 15px rgba(56,189,248,0.5)",
          "0 0 5px rgba(0,0,0,0)",
        ],
      }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      CODENOVATECH - Your AI Innovation Partner
    </motion.h2>
    <p className="text-xl relative z-10">
      We&#x27;re not just building software; we&#x27;re building the
      future with AI.
    </p>
    <ul className="list-none mt-6 space-y-3 relative z-10">
      <motion.li
        className="flex items-center justify-center gap-2 text-lg"
        whileHover={{ scale: 1.05, x: 5 }}
      >
        <motion.span
          className="text-2xl"
          animate={{
            color: ["#38bdf8", "#818cf8", "#38bdf8"],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          🔹
        </motion.span>
        <span>
          Cutting-edge AI technology for your unique needs
        </span>
      </motion.li>
      <motion.li
        className="flex items-center justify-center gap-2 text-lg"
        whileHover={{ scale: 1.05, x: 5 }}
      >
        <motion.span
          className="text-2xl"
          animate={{
            color: ["#818cf8", "#c084fc", "#818cf8"],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        >
          🔹
        </motion.span>
        <span>
          Transforming data into intelligent, actionable insights
        </span>
      </motion.li>
      <motion.li
        className="flex items-center justify-center gap-2 text-lg"
        whileHover={{ scale: 1.05, x: 5 }}
      >
        <motion.span
          className="text-2xl"
          animate={{
            color: ["#c084fc", "#f472b6", "#c084fc"],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          🔹
        </motion.span>
        <span>
          Driving efficiency and innovation in Coimbatore and beyond
        </span>
      </motion.li>
    </ul>
    <motion.div
      className="mt-6 relative z-10"
      animate={{
        filter: [
          "drop-shadow(0 0 0px rgba(255,255,255,0.3))",
          "drop-shadow(0 0 10px rgba(255,255,255,0.6))",
          "drop-shadow(0 0 0px rgba(255,255,255,0.3))",
        ],
      }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <motion.p
        className="font-semibold text-xl bg-white/10 py-3 px-6 rounded-full inline-block"
        animate={{
          boxShadow: [
            "0 0 0px rgba(255,255,255,0.2)",
            "0 0 15px rgba(255,255,255,0.5)",
            "0 0 0px rgba(255,255,255,0.2)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.span
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="inline-block"
        >
          💡
        </motion.span>{" "}
        Explore the possibilities of AI with CODENOVATECH!{" "}
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.5,
          }}
          className="inline-block"
        >
          🚀
        </motion.span>
      </motion.p>
    </motion.div>
    <p className="mt-4 text-lg relative z-10">
      Join us on the journey to an AI-powered future.{" "}
      <motion.span
        className="font-bold text-yellow-300"
        animate={{
          textShadow: [
            "0 0 0px rgba(250,204,21,0)",
            "0 0 5px rgba(250,204,21,0.5)",
            "0 0 0px rgba(250,204,21,0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        #AI #Innovation #Coimbatore #Technology
      </motion.span>
    </p>
  </motion.div>
);

export default AIProductAnnouncement; 