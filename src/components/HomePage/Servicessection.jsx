import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCode, FaMobile, FaRobot, FaServer } from "react-icons/fa";

function Servicessection() {
  const services = [
    {
      name: "Custom Web Development",
      description:
        "Build scalable and responsive web applications tailored to your needs.",
      icon: FaCode,
      href: "/services#web",
    },
    {
      name: "Mobile App Development",
      description:
        "Create powerful native and cross-platform mobile applications.",
      icon: FaMobile,
      href: "/services#app",
    },
    {
      name: "AI & Machine Learning",
      description:
        "Implement intelligent solutions to automate and optimize your business.",
      icon: FaRobot,
      href: "/services#ai",
    },
    {
      name: "API Development",
      description: "Design and develop robust APIs for seamless integration.",
      icon: FaServer,
      href: "/services#api",
    },
  ];
  return (
    <div>
      <div className="py-24 sm:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Our Services
            </h2>
            <p className="mt-2 text-white text-3xl font-bold tracking-tight  sm:text-4xl">
              Everything you need to build amazing digital products
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer comprehensive solutions to help you succeed in the
              digital world.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {services.map((service) => (
                <motion.div
                  key={service.name}
                  className="flex flex-col"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <dt className="flex text-white items-center gap-x-3 text-base font-semibold leading-7 ">
                    <service.icon
                      className="h-5 w-5 flex-none text-primary"
                      aria-hidden="true"
                    />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <p className="mt-6">
                      <Link
                        to={service.href}
                        className="text-sm font-semibold leading-6 text-primary"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicessection;
