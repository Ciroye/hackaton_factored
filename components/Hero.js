'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, fadeIn } from '../utils/motion'

const Hero = () => {
  return (
    <section className="container pt-16 mx-auto " id="hero">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="grid items-center grid-cols-2 gap-12 py-12 text-left text-[white]"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.1, 1)}
          className="flex-[0.95] flex justify-center flex-col pl-20"
        >
          <h3 className="mb-2 font-extrabold tracking-tight text-7xl font-abril">
            Factored NLP 1st Hackathon
          </h3>
          <h4 className="mb-6 text-xl text-principal font-roboto">
            Data Engineers | Data Analysts | Machine Learning Engineers |
            Software Engineers
          </h4>
          <p className="mb-6 text-xl text-white font-roboto">
            Calling all the top notch data analytics talent. Join our 2-week
            datathon and showcase your skills delving into a vast dataset of
            Amazon product reviews.
            <br />
            <br />
            Absolutely
            <a>
              <span className="font-bold text-principal">
                {' '}
                FREE TO PARTICIPATE{' '}
              </span>
            </a>
            , show your data skills and win some great prizes including the
            opportunity to be
            <a className="font-bold text-principal"> INTERVIEWED </a>
            by our top-notch team at factored!
          </p>
          <div className="py-4">
            <div className="grid row-gap-8 sm:grid-cols-3">
              <div className="text-left">
                <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                  $1000
                </h6>
                <p className="font-bold">1st Prize</p>
              </div>
              <div className="text-left">
                <h6 className="text-4xl font-bold text-deep-purple-accent-400">
                  $750
                </h6>
                <p className="font-bold">2st Prize</p>
              </div>
              <div className="text-left">
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
                className="px-8 py-3 text-lg font-semibold text-white transition duration-200 rounded-full shadow-md bg-second"
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
          {/* <Image
            src="/image_2.jpg"
            className="rounded-xl shadow-xl "
            alt=""
            width={500}
            height={200}
          /> */}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
