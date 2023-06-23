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
            className="max-w-3xl space-y-12 md:w-3/4 md:mr-2"
            variants={fadeIn('right', 'tween', 0.2, 1)}
          >
            <div>
              <h2 className="flex w-full mb-10 text-6xl font-bold text-white justify-left font-abril">
                About Factored
              </h2>
              <h1 className="text-xl font-semibold text-white"></h1>

              <div className="mt-2">
                <span className="inline-block w-40 h-1 rounded-full bg-principal"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-principal"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-principal"></span>
              </div>
            </div>

            <div className="flex mb-12">
              <div className="shrink-0">
                <div className="p-4 rounded-md shadow-lg bg-fourth ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 text-letter"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-2 text-3xl font-bold text-white font-abril">
                  Talent
                </p>
                <p className="text-xl text-white font-abril ">
                  Hire elite exceptional high-caliber data talent.
                </p>
              </div>
            </div>
            <div className="flex mb-12">
              <div className="shrink-0">
                <div className="p-4 rounded-md shadow-lg bg-fourth ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 text-letter"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-2 text-3xl font-bold text-white font-abril">
                  Best veting process
                </p>
                <p className="text-xl text-white font-abril ">
                  Have unrivaled experience and laser focus on vetting,
                  evaluating, and improving skills. and aptitude for AI, data
                  science, data engineering, and analytics engineers.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="shrink-0">
                <div className="p-4 rounded-md shadow-lg bg-fourth ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 text-letter"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-2 text-3xl font-bold text-white font-abril">
                  Best place to work
                </p>
                <p className="text-xl text-white font-abril ">
                  Work as a natural extension of companies’ teams, 100% located
                  in the Americas, working in USA time zones. Excellent
                  communicators. innovative, resourceful, creative, problem
                  solvers.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="items-center justify-center hidden ml-12 md:flex w-/2 mt-24"
            variants={challangeVariantsImage('right', 'tween', 0.2, 1)}
          >
            <div
              className="relative overflow-hidden bg-no-repeat rounded-lg shadow-lg blur-sm"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                className="rounded-lg h-[600px] backdrop-blur-lg"
                src="/Hackathon02.jpg"
                alt=""
                width={700}
                height={800}
              />
            </div>
            <a href="https://factored.ai/" target="_blank">
              <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden ">
                <div className="flex items-center justify-center h-full">
                  <div className="px-4 py-12 text-center text-white">
                    <p className="text-2xl text-white font-abril  ">
                      Factored helps the highest-profile USA companies to build
                      and scale elite teams in data science, machine learning,
                      data engineering & data analytics. <br /> <br />
                      Founded by Dr. Andrew Ng (Stanford, Coursera, Google
                      Brain) and a team of Stanford & MIT, AI and Data Science
                      experts.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Factored
