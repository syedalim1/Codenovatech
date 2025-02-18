import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

function AboutHerosection() {
  return (
    <div>
      <div className="relative isolate">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
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
            <h2 className="text-base font-semibold leading-7 text-primary">
              About Us
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Founded in 2019, CodeNovaTech started with a mission to bridge the
              gap between innovation and execution. Today, we are a leading
              technology partner for businesses worldwide, delivering
              cutting-edge solutions in web development, mobile apps, AI, and
              API services.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutHerosection;
