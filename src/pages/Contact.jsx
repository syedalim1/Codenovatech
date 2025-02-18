import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const contactMethods = [
  {
    name: 'Phone',
    description: 'Mon-Fri 9am to 6pm EST',
    link: 'tel:+1 (555) 123-4567',
    value: '+1 (555) 123-4567',
    icon: FaPhone,
  },
  {
    name: 'Email',
    description: '24/7 Support',
    link: 'mailto:hello@codenovatech.com',
    value: 'hello@codenovatech.com',
    icon: FaEnvelope,
  },
  {
    name: 'Office',
    description: 'Visit us at',
    value: '123 Innovation Street, Silicon Valley, CA 94025',
    icon: FaMapMarkerAlt,
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="bg-gradient-to-r from-primary to-secondary pt-24">
      <div className="container-custom py-24">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">
            Contact Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have a project in mind? Let's discuss how we can help you achieve
            your goals.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          {contactMethods.map((method) => (
            <div
              key={method.name}
              className="flex flex-col items-center text-center"
            >
              <div className="rounded-2xl bg-primary/5 p-4">
                <method.icon
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900">
                {method.name}
              </h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                {method.description}
              </p>
              {method.link ? (
                <a
                  href={method.link}
                  className="mt-1 text-base font-medium text-primary hover:text-primary/80"
                >
                  {method.value}
                </a>
              ) : (
                <p className="mt-1 text-base font-medium text-gray-900">
                  {method.value}
                </p>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-2xl rounded-2xl bg-white p-8 ring-1 ring-gray-200 sm:p-12"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
