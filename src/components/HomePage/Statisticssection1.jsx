import React from "react";
import { FaChartLine, FaCode, FaNewspaper, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

function Statisticssection1() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div>
      <div className=" py-24 sm:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-white">
              By The Numbers
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Impact
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            <motion.div
              className="flex flex-col items-center text-center"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <FaChartLine className="h-12 w-12 text-white" />
              <h3 className="mt-6 text-4xl font-bold text-white">150+</h3>
              <p className="mt-2 text-gray-200">Projects Delivered</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <FaUser className="h-12 w-12 text-white" />
              <h3 className="mt-6 text-4xl font-bold text-white">98%</h3>
              <p className="mt-2 text-gray-200">Client Satisfaction</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <FaCode className="h-12 w-12 text-white" />
              <h3 className="mt-6 text-4xl font-bold text-white">50+</h3>
              <p className="mt-2 text-gray-200">Technologies Used</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <FaNewspaper className="h-12 w-12 text-white" />
              <h3 className="mt-6 text-4xl font-bold text-white">10+</h3>
              <p className="mt-2 text-gray-200">Years of Experience</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statisticssection1;
