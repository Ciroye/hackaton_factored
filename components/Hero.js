'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, fadeIn } from '../utils/motion'

const Hero = () => {
  return (
    <section className="container max-w-5xl pt-24 mx-auto " id="hero">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="grid items-center grid-cols-1 gap-12  text-left text-[white]"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.1, 4)}
          className="flex-[0.95] flex justify-center flex-col pl-20"
        >
          <h3 className="mb-2 font-extrabold tracking-tight text-center text-7xl font-abril">
            Factored 1st Datathon
          </h3>
          <h4 className="mb-6 text-2xl text-center text-white font-roboto">
            Data Engineers | Data Analysts | Machine Learning Engineers |
            Software Engineers
          </h4>
          <p className="mb-6 text-xl text-center text-white font-roboto">
            Calling all top-notch data talent! <br /> Join our 2-week datathon
            and showcase your skills by delving into a vast dataset of Amazon
            product reviews.
            <br />
            <br />
            It is Absolutely
            <a>
              <span className="font-bold text-white"> FREE TO PARTICIPATE</span>
            </a>
            , show your data skills and win some great prizes including the
            opportunity to be
            <a className="font-bold text-white"> INTERVIEWED </a>
            by our top-notch team at{' '}
            <a className="font-bold text-white">FACTORED!</a>
          </p>
          <div className="py-8">
            <div className="grid row-gap-8 sm:grid-cols-3">
              <div className="text-center">
                <h6 className="text-4xl font-bold text-deep-purple-accent-400 font-abril">
                  $4000
                </h6>
                <p className="text-lg font-bold text-white font-abril">
                  1st Prize
                </p>
              </div>
              <div className="text-center">
                <h6 className="text-4xl font-bold text-deep-purple-accent-400 font-abril">
                  $2000
                </h6>
                <p className="text-lg font-bold text-white font-abril ">
                  2nd Prize
                </p>
              </div>
              <div className="text-center">
                <h6 className="text-4xl font-bold text-deep-purple-accent-400 font-abril">
                  $1000
                </h6>
                <p className="text-lg font-bold text-white font-abril">
                  3rd Prize
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-6 pb-20">
            <button>
              <a
                className="px-8 py-4 text-xl font-semibold text-center transition duration-200 rounded-full shadow-md text-second bg-fourth"
                href="https://www.factored.ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
