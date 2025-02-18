import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: 'Top 5 AI Trends Shaping 2024',
    description:
      'Explore the latest artificial intelligence trends that are transforming industries and creating new opportunities for businesses.',
    date: 'Feb 15, 2024',
    category: { name: 'AI & Machine Learning', href: '#' },
    author: {
      name: 'Michael Chen',
      role: 'Head of AI',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
    },
  },
  {
    id: 2,
    title: 'How to Choose the Right API for Your Business',
    description:
      'A comprehensive guide to selecting and implementing the perfect API solution for your business needs.',
    date: 'Feb 12, 2024',
    category: { name: 'API Development', href: '#' },
    author: {
      name: 'Sarah Johnson',
      role: 'CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
    },
  },
  {
    id: 3,
    title: 'The Future of Mobile App Development',
    description:
      'Discover upcoming trends and technologies that will shape the future of mobile application development.',
    date: 'Feb 8, 2024',
    category: { name: 'Mobile Development', href: '#' },
    author: {
      name: 'John Smith',
      role: 'CEO & Founder',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
    },
  },
  {
    id: 4,
    title: 'Web Performance Optimization Techniques',
    description:
      'Learn essential strategies and best practices for optimizing your website\'s performance and user experience.',
    date: 'Feb 5, 2024',
    category: { name: 'Web Development', href: '#' },
    author: {
      name: 'Emily Davis',
      role: 'Lead Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
    },
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Blog() {
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
            Our Blog
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Insights & News
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Stay up to date with the latest trends, technologies, and best
            practices in the digital world.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="flex flex-col items-start"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="rounded-2xl bg-gray-50 p-8 w-full">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-primary px-3 py-1.5 font-medium text-white"
                  >
                    {post.category.name}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Link to="#" className="btn-primary inline-flex items-center gap-x-2">
            View All Posts
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
