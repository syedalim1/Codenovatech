
import { motion } from "framer-motion";
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote:
      "Their team transformed our business with a cutting-edge web application. Highly recommended!",
    author: "John Doe, CEO of Innovate Inc.",
  },
  {
    quote:
      "The mobile app they developed for us has been a game-changer. Excellent work!",
    author: "Jane Smith, CTO of Tech Solutions",
  },
];
function Testimonialssection() {
    const scaleUp = {
      initial: { scale: 0.9 },
      animate: { scale: 1 },
      transition: { duration: 0.5 },
    };
  return (
    <div>
      <div className=" py-24 sm:py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              What Our Clients Say
            </h2>
            <p className="mt-2 text-white text-3xl font-bold tracking-tight  sm:text-4xl">
              Testimonials
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex flex-col p-6 bg-white shadow-lg rounded-lg"
                initial="initial"
                animate="animate"
                variants={scaleUp}
              >
                <FaQuoteLeft className="h-6 w-6 text-black" />
                <p className="mt-4 text-black">{testimonial.quote}</p>
                <p className="mt-4 font-semibold text-gray-900">
                  {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonialssection