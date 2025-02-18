
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Herosection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };
  return (
    <div>
      <div className="relative isolate pt-24">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]  opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="py-24 sm:py-32">
          <div className="container-custom">
            <motion.div
              className="text-center"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <motion.h1
                className="text-4xl text-white font-bold tracking-tight  sm:text-6xl"
                variants={fadeIn}
              >
                Transform Your Vision into Digital Reality
              </motion.h1>
              <motion.p
                className="mt-6 text-lg text-white leading-8 "
                variants={fadeIn}
              >
                Full-Cycle Web & App Development, AI Solutions, and Scalable
                APIs
              </motion.p>
              <motion.div
                className="mt-10 flex items-center justify-center gap-x-6"
                variants={fadeIn}
              >
                <Link to="/contact" className="btn-primary">
                  Start Your Project Today →
                </Link>
                <Link
                  to="/portfolio"
                  className="text-sm text-white font-semibold leading-6 "
                >
                  View Our Work <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
