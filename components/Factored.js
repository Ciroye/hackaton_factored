import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  challangeVariantsImage,
  staggerContainer,
  fadeIn,
} from '@/utils/motion'

const Factored = () => {
  return (
    <section className="container mx-auto">
      <motion.div
        className="flex flex-wrap items-center py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="container md:flex ">
          <motion.div
            className="space-y-12 md:w-3/4 md:mr-2"
            variants={fadeIn('right', 'tween', 0.2, 1)}
          >
            <div>
              <h2 className="flex w-full mb-2 font-bold text-white text-7xl justify-left font-abril">
                About Factored
              </h2>
              <h1 className="text-xl font-semibold text-white"></h1>
            </div>
            <p className="text-lg text-white font-roboto">
              Factored was founded in 2019 by Dr. Andrew Ng (Coursera, Google
              Brain, and deeplearning.ai) and it is now one of the
              fastest-growing data companies in Latin America. We provide the
              top 3% of data talent in the Americas to work for top companies in
              Silicon Valley.
              <br />
              <br />
              You’ll have unlimited access to a community of experts to help you
              boost your career and the opportunity to contribute daily to our
              growing team.
            </p>
            <a
              className="px-4 py-1 text-lg font-semibold text-center no-underline transition duration-200 rounded-full shadow-md text-second bg-fourth"
              type="button"
              href="https://factored.ai/"
              target="_blank"
            >
              Join Us
            </a>
            <ul className="text-lg list-disc list-inside font-roboto">
              <li className="flex items-center mt-6 text-white ">
                • AI is in our DNA
              </li>
              <li className="flex items-center mt-6 text-white">
                • Access to a team of elite High-Caliber Data Professionals
              </li>
              <li className="flex items-center mt-6 text-white">
                • Do the Best Work of Your Life
              </li>
              <li className="flex items-center mt-6 text-white">
                • Continuously grow hand in hand with LATAM’s top 3%
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="items-center justify-center hidden mt-24 ml-12 md:flex w-/2"
            variants={challangeVariantsImage('right', 'tween', 0.2, 1)}
          >
            <div
              className="relative overflow-hidden bg-no-repeat rounded-lg shadow-lg"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                className="rounded-lg h-[600px]"
                src="/Factored.png"
                alt=""
                width={700}
                height={800}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Factored
