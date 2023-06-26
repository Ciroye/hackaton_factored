'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../utils/motion'
import GoogleForm from './GoogleForm'

const Hero = () => {
  return (
    <section className="container max-w-5xl pt-10 mx-auto md:pt-20" id="hero">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="grid items-center grid-cols-1 gap-12 text-left text-[white]"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.1, 4)}
          className="flex-[0.95] flex justify-center flex-col md:pl-20"
        >
          <h3 className="mb-2 text-5xl font-extrabold tracking-tight text-center md:text-7xl font-abril">
            Factored Datathon 2023
          </h3>
          <h4 className="mb-6 text-xl text-center text-white md:text-2xl font-roboto">
            Data Engineers | Data Analysts | Machine Learning Engineers |
            Software Engineers
          </h4>
          <div className="flex justify-center">
            <p className="hidden max-w-4xl mb-6 text-xl text-center text-white align-middle md:block max-auto font-roboto">
              Calling all top-notch data talent! <br /> Join the biggest
              datathon in the Americas and showcase your skills by delving into
              a vast dataset of Amazon product reviews.
              <br />
              <br />
              It is Absolutely
              <a>
                <span className="font-bold text-white no-underline">
                  {' '}
                  FREE TO PARTICIPATE
                </span>
              </a>
              , show your data skills and win some great prizes including the
              opportunity to be
              <a className="font-bold text-white no-underline"> INTERVIEWED </a>
              by our top-notch team at{' '}
              <a className="font-bold text-white no-underline">FACTORED!</a>
            </p>
          </div>
          <div className="py-8">
            <div className="grid grid-cols-3 row-gap-8">
              <div className="text-center">
                <h6 className="text-3xl font-bold md:text-4xl text-deep-purple-accent-400 font-abril">
                  $5000
                </h6>
                <p className="text-base font-bold text-white md:text-lg font-abril">
                  1st Prize
                </p>
              </div>
              <div className="text-center">
                <h6 className="text-3xl font-bold md:text-4xl text-deep-purple-accent-400 font-abril">
                  $2500
                </h6>
                <p className="text-base font-bold text-white md:text-lg font-abril ">
                  2nd Prize
                </p>
              </div>
              <div className="text-center">
                <h6 className="text-3xl font-bold md:text-4xl text-deep-purple-accent-400 font-abril">
                  $1500
                </h6>
                <p className="text-base font-bold text-white md:text-lg font-abril">
                  3rd Prize
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-20 md:pt-6">
            <GoogleForm />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
