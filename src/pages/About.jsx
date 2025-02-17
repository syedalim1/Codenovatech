import { motion } from 'framer-motion'

const values = [
  {
    name: 'Innovation',
    description:
      'We constantly push the boundaries of technology to deliver cutting-edge solutions that keep our clients ahead of the curve.',
  },
  {
    name: 'Excellence',
    description:
      'We maintain the highest standards in our work, ensuring every project we deliver exceeds expectations and delivers real value.',
  },
  {
    name: 'Transparency',
    description:
      'We believe in open communication and keeping our clients informed at every stage of the development process.',
  },
  {
    name: 'Client-Centric',
    description:
      'Our clients' success is our success. We work closely with each client to understand their unique needs and deliver tailored solutions.',
  },
]

const stats = [
  { name: 'Years in Business', value: '5+' },
  { name: 'Projects Delivered', value: '150+' },
  { name: 'Client Satisfaction', value: '98%' },
  { name: 'Team Members', value: '50+' },
]

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Head of AI',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  },
  {
    name: 'Emily Davis',
    role: 'Lead Designer',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function About() {
  return (
    <div className="bg-white pt-24">
      {/* Hero section */}
      <div className="relative isolate">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="container-custom py-24 sm:py-32">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h2 className="text-base font-semibold leading-7 text-primary">About Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Founded in 2019, CodeNovaTech started with a mission to bridge the gap between innovation
              and execution. Today, we're a leading technology partner for businesses worldwide,
              delivering cutting-edge solutions in web development, mobile apps, AI, and API services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values section */}
      <div className="container-custom py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            These core values guide everything we do and help us deliver exceptional results for our clients.
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

      {/* Stats section */}
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
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Team section */}
      <div className="container-custom py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Meet the experts behind our success
            </p>
          </div>
          <motion.ul
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {team.map((person) => (
              <motion.li
                key={person.name}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  )
}
