'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../utils/motion'

const Timeline = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer}
        className="container mx-auto"
        id="timeline"
      >
        <h2 className="flex justify-center w-full mb-10 text-6xl font-bold text-principal">
          Timeline
        </h2>
        <motion.ol
          variants={fadeIn('up', 'spring', 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="items-center sm:flex"
        >
          <li className="relative mx-4 mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-whit ">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-principal"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-2xl font-semibold text-letter">Week 1</h3>
              <ul>
                <li className="ml-4">
                  <p className="mt-6 text-lg font-normal text-letter">
                    • 26/06/2023 - Datathon Kickoff
                  </p>
                </li>
                <li className="ml-4">
                  <p className="mt-6 text-lg font-normal text-letter">
                    • 27/06/2023 - 01/07/2023 - Coding Sessions
                  </p>
                </li>
                <li className="ml-4">
                  <p className="mt-6 text-lg font-normal text-letter">
                    • 01/07/2023 - Voluntary Checkpoint
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative mx-4 mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-whit ">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-principal"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-2xl font-semibold text-letter">Week 2</h3>
              <ul>
                <li className="ml-4">
                  <p className="mt-6 text-lg font-normal text-letter">
                    • 03/07/2023 - 08/07/2023 - Coding Sessions
                  </p>
                </li>
                <li className="ml-4">
                  <p className="mt-12 text-lg font-normal text-letter">
                    • 08/07/2023 - Last date for code submission
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative mx-4 mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-whit ">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-principal"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-2xl font-semibold text-letter">
                Subsequent stages
              </h3>
              <ul>
                <li className="ml-4">
                  <p className="mt-6 text-lg font-normal text-letter">
                    • Code review phase
                  </p>
                </li>
                <li className="ml-4">
                  <p className="mt-6 text-lg font-normal text-letter">
                    • Technical - Business interview phase
                  </p>
                </li>
                <li className="ml-4">
                  <p className="mt-6 text-lg font-normal text-letter">
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
