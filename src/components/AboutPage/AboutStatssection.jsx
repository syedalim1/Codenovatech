import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};
const stats = [
  { name: "Years in Business", value: "5+" },
  { name: "Projects Delivered", value: "150+" },
  { name: "Client Satisfaction", value: "98%" },
  { name: "Team Members", value: "50+" },
];
function AboutStatssection() {
  return (
    <div>
      <div className="bg-gray-50 py-24">
        <div className="container-custom">
          <motion.div
            className="mx-auto max-w-2xl lg:max-w-none"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by Businesses Worldwide
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Our track record speaks for itself
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col bg-white p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutStatssection;
