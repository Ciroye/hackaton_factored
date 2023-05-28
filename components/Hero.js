'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, fadeIn } from '../utils/motion'

const Hero = () => {
  return (
    <section className="container pt-12 mx-auto" id="hero">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="grid items-center grid-cols-2 gap-12 py-12 text-center text-letter"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.1, 1)}
          className="flex-[0.95] flex justify-center flex-col pl-20"
        >
          <h3 className="mb-2 text-6xl font-bold tracking-tight ">
            Factored NLP Datathon
          </h3>
          <h4 className="mb-6 text-xl text-principal">
            Data Engineering | Data Analysts | Machine Learning Engineers |
            Software Engineers
          </h4>
          <p className="mb-6 text-xl text-letter ">
            Calling all the top notch data analytics talent <br />
            Join our 2-week datathon and showcase your skills delving into a
            vast dataset of Amazon product reviews.
          </p>
          <div className="py-4">
            <div className="grid row-gap-8 sm:grid-cols-3">
              <div className="text-center">
                <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                  $1000
                </h6>
                <p className="font-bold">1st Prize</p>
              </div>
              <div className="text-center">
                <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                  $750
                </h6>
                <p className="font-bold">2st Prize</p>
              </div>
              <div className="text-center">
                <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                  $500
                </h6>
                <p className="font-bold">3st Prize</p>
              </div>
            </div>
          </div>
          <div className="py-8">
            <button>
              <a
                className="px-8 py-3 text-lg font-semibold text-white transition duration-200 rounded shadow-md bg-principal"
                href="https://www.factored.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.1, 1)}
          className="mb-12"
        >
          <Image
            src="/hero2.svg"
            className="w-full "
            alt=""
            width={500}
            height={500}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
