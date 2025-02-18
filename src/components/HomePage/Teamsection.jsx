import React from 'react'
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Praveen Kumar s",
    role: "Lead Developer",
    image: "./profile.jpg",
  },
  {
    name: "Wilson A",
    role: "UI/UX Designer",
    image: "./profile.jpg",
  },
  {
    name: "Syed Ali M",
    role: "Data Scientist",
    image: "./profile.jpg",
  },
];
function Teamsection() {
    
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

  return (
    <div>
      <div className="py-24 sm:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Our Team
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
              Meet the Experts
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial="initial"
                animate="animate"
                variants={fadeIn}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-32 w-32 rounded-full"
                />
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-2 text-black">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teamsection