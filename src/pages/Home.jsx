import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCode, FaMobile, FaRobot, FaServer } from 'react-icons/fa'

const services = [
  {
    name: 'Custom Web Development',
    description: 'Build scalable and responsive web applications tailored to your needs.',
    icon: FaCode,
    href: '/services#web',
  },
  {
    name: 'Mobile App Development',
    description: 'Create powerful native and cross-platform mobile applications.',
    icon: FaMobile,
    href: '/services#app',
  },
  {
    name: 'AI & Machine Learning',
    description: 'Implement intelligent solutions to automate and optimize your business.',
    icon: FaRobot,
    href: '/services#ai',
  },
  {
    name: 'API Development',
    description: 'Design and develop robust APIs for seamless integration.',
    icon: FaServer,
    href: '/services#api',
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate pt-24">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
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
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                variants={fadeIn}
              >
                Transform Your Vision into Digital Reality
              </motion.h1>
              <motion.p
                className="mt-6 text-lg leading-8 text-gray-600"
                variants={fadeIn}
              >
                Full-Cycle Web & App Development, AI Solutions, and Scalable APIs
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
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  View Our Work <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 sm:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to build amazing digital products
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer comprehensive solutions to help you succeed in the digital world.
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
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
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

      {/* Trust Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Industry Leaders
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clipRule="evenodd"
                  />
                </svg>
                150+ Projects Delivered
              </dt>
              <dd className="inline"> with 98% Client Satisfaction rate across various industries.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
                AI-Driven Solutions
              </dt>
              <dd className="inline"> for Smarter Business Outcomes and improved efficiency.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  className="absolute left-1 top-1 h-5 w-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                    clipRule="evenodd"
                  />
                </svg>
                End-to-End Support
              </dt>
              <dd className="inline"> with comprehensive API Integration & maintenance services.</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
