import { motion } from "framer-motion";
const values = [
  {
    name: "Innovation",
    description:
      "We constantly push the boundaries of technology to deliver cutting-edge solutions that keep our clients ahead of the curve.",
  },
  {
    name: "Excellence",
    description:
      "We maintain the highest standards in our work, ensuring every project we deliver exceeds expectations and delivers real value.",
  },
  {
    name: "Transparency",
    description:
      "We believe in open communication and keeping our clients informed at every stage of the development process.",
  },
  {
    name: "Client-Centric",
    description:
      "Our clients success is our success. We work closely with each client to understand their unique needs and deliver tailored solutions.",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};
function AboutValuessection() {
  return (
    <div>
      <div className="container-custom py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Our Values
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            These core values guide everything we do and help us deliver
            exceptional results for our clients.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {values.map((value) => (
            <motion.div
              key={value.name}
              className="relative pl-9"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <dt className="inline font-semibold text-gray-900">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {value.name}
              </dt>
              <dd className="inline"> {value.description}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default AboutValuessection;
