'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../utils/motion'

const Timeline = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer}
        className="py-12 mx-auto md:container md:py-32"
        id="timeline"
      >
        <h2 className="flex justify-center w-full font-bold text-7xl text-second font-abril">
          Timeline
        </h2>
        <motion.ol
          variants={fadeIn('up', 'spring', 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="items-center pl-0 pb-28 md:px-8 sm:flex"
        >
          <li className="relative pb-6 mx-4 md:h-48">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-whit ">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-second"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="md:flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 md:pr-8">
              <h3 className="text-3xl font-semibold text-second font-abril">
                Registration and kickof
              </h3>
              <ul>
                <li className="ml-4">
                  <p className="mt-6 text-xl font-normal text-second ">
                    • 14/07/2023 - Registration Deadline
                  </p>
                </li>
                <li className="ml-4">
                  <p className="mt-12 text-xl font-normal text-second">
                    • 17/07/2023 - Datathon Kickoff
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative pb-6 mx-4 md:h-48">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-whit ">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-second"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-3xl font-semibold text-second font-abril">
                Coding sessions
              </h3>
              <ul>
                <li className="ml-4">
                  <p className="mt-6 text-xl font-normal text-second">
                    • 17/07/2023 - 28/07/2023 - Coding Sessions
                  </p>
                </li>
                <li className="ml-4">
                  <p className="mt-12 text-xl font-normal text-second">
                    • 28/07/2023 - Last date for code submission
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative h-48 mx-4 ">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-whit ">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-second"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-3xl font-semibold text-second font-abril">
                Subsequent stages
              </h3>
              <ul>
                <li className="ml-4">
                  <p className="mt-6 text-xl font-normal text-second">
                    • Code review phase
                  </p>
                </li>
                <li className="ml-4">
                  <p className="mt-6 text-xl font-normal text-second">
                    • Technical - Business interview phase
                  </p>
                </li>
                <li className="ml-4">
                  <p className="mt-6 text-xl font-normal text-second">
                    • Closing event (prizes, winners)
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </motion.ol>
      </motion.section>
    </>
  )
}

export default Timeline
