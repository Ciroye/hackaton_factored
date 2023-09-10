'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { staggerContainer, fadeIn } from '../utils/motion'
import GoogleForm from './GoogleForm'

const Hero = () => {
  return (
    <section className="container max-w-5xl pt-10 mx-auto md:pt-20" id="hero">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="grid items-center grid-cols-1  text-left text-[white]"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.1, 4)}
          className="flex flex-col justify-center md:px-8"
        >
          <h3 className="text-5xl font-thin tracking-tight text-center md:text-8xl font-abril mb-[-10px]">
            Factored Datathon 2023
          </h3>
          <h4 className="mb-6 text-lg font-medium tracking-wider text-center text-white uppercase md:text-lg font-roboto ">
            Data Engineers | Data Analysts | Machine Learning Engineers |
            Software Engineers
          </h4>
          <div className="flex justify-center text-center ">
            <span className="px-4 py-2 text-2xl uppercase bg-white rounded-full text-second font-robo">
              Winners!!
            </span>
          </div>

          <div className="pt-4">
            <div className="grid grid-cols-1 gap-4 max-w-[900px] mx-auto">
              <div className="text-center">
                <h6 className="text-3xl font-bold md:text-4xl text-deep-purple-accent-400 font-abril">
                  Paisa Genious
                </h6>
                <p className="text-2xl text-white md:text-lg font-roboto ">
                  Daverson Arenas | Cristina Gomez <br />
                  <strong className="text-4xl text-white md:text-2xl font-roboto ">
                    1st
                  </strong>
                </p>
                <p className="text-3xl text-white md:text-2xl font-roboto"></p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 max-w-[900px] mx-auto">
              <div className="text-center">
                <h6 className="text-3xl font-bold md:text-4xl text-deep-purple-accent-400 font-abril">
                  Neurum AI
                </h6>
                <p className="text-2xl text-white md:text-lg font-roboto">
                  Julio Cabrera | Mario Ochoa | Juan Chica
                  <br />
                  <strong className="text-4xl text-white md:text-2xl font-roboto">
                    2nd
                  </strong>
                </p>
              </div>
              <div className="pt-12 text-center">
                <h6 className="text-3xl font-bold md:text-4xl text-deep-purple-accent-400 font-abril">
                  Datacticos
                </h6>
                <p className="text-2xl text-white md:text-lg font-roboto">
                  Yhorman Bedoya | Gabriel Ceron | Diego Rojas
                  <br />
                  <strong className="text-4xl text-white md:text-2xl font-roboto">
                    3rd
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-2 md:pt-6">
            <GoogleForm className="px-12 py-2 text-xl font-semibold text-center no-underline transition duration-200 rounded-full shadow-md text-second bg-fourth" />
          </div>
          <div className="my-6">
            <ScrollLink
              to="challenge"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              <a
                href="/text"
                aria-label="Scroll down"
                className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform hover:shadow hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                </svg>
              </a>
            </ScrollLink>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
