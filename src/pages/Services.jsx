import { motion } from 'framer-motion'
import { FaCode, FaMobile, FaRobot, FaServer } from 'react-icons/fa'

const services = [
  {
    id: 'web',
    name: 'Web Development',
    description: 'Create stunning, responsive websites and web applications that deliver exceptional user experiences.',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps (PWA)',
      'Content Management Systems',
      'Website Maintenance & Support',
      'Performance Optimization',
    ],
    icon: FaCode,
  },
  {
    id: 'app',
    name: 'App Development',
    description: 'Build powerful mobile applications that engage users and drive business growth.',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-platform Solutions',
      'App UI/UX Design',
      'App Testing & QA',
      'App Store Optimization',
    ],
    icon: FaMobile,
  },
  {
    id: 'ai',
    name: 'AI Solutions',
    description: 'Leverage artificial intelligence to automate processes and gain valuable insights.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'AI Integration Services',
      'Custom AI Development',
    ],
    icon: FaRobot,
  },
  {
    id: 'api',
    name: 'API Services',
    description: 'Design and develop robust APIs that enable seamless integration and scalability.',
    features: [
      'RESTful API Development',
      'GraphQL APIs',
      'API Integration',
      'API Documentation',
      'API Security',
      'API Maintenance',
    ],
    icon: FaServer,
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Services() {
  return (
    <div className="bg-white pt-24">
      <div className="container-custom py-24">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Digital Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer end-to-end digital solutions to help businesses thrive in the digital age.
            From web development to AI integration, we've got you covered.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className={`flex flex-col lg:flex-row gap-x-8 gap-y-16 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              } py-24 ${
                index !== services.length - 1 ? 'border-b border-gray-200' : ''
              }`}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="lg:w-1/2">
                <div className="flex items-center gap-x-3">
                  <service.icon className="h-8 w-8 flex-none text-primary" aria-hidden="true" />
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    {service.name}
                  </h3>
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {service.description}
                </p>
                <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 flex items-center justify-center">
                <div className="w-full aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                  <service.icon className="h-24 w-24 text-primary/40" aria-hidden="true" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
