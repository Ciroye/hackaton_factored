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
        <h2 className="flex justify-center w-full pb-8 font-bold text-7xl text-second font-abril">
          Timeline
        </h2>
        <motion.ol
          variants={fadeIn('up', 'spring', 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="flex items-center justify-center pl-0 pb-28 md:px-0 sm:flex"
        >
          <li className="relative pb-6 mx-2 md:mx-0 md:h-48">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-second ring-0 ring-whit ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.25 17.5534V17.4688M12.3125 17.5534V17.4688M12.3125 12.9688V12.8842M16.8125 12.9688V12.8842M3.875 8.46875H19.625M5.91071 2V3.68771M17.375 2V3.6875M17.375 3.6875H6.125C4.26104 3.6875 2.75 5.19854 2.75 7.0625V18.3126C2.75 20.1766 4.26104 21.6876 6.125 21.6876H17.375C19.239 21.6876 20.75 20.1766 20.75 18.3126L20.75 7.0625C20.75 5.19854 19.239 3.6875 17.375 3.6875Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="md:flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 md:pr-8">
              <h3 className="text-3xl font-thin text-second font-abril">
                Registration and kickoff
              </h3>
              <svg
                width="60"
                height="2"
                viewBox="0 0 60 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="1" x2="60" y2="1" stroke="#00FFFF" strokeWidth="3" />
              </svg>
              <ul>
                <li className="">
                  <p className="mt-6 text-xl font-normal text-second font-roboto">
                    <strong>14/07/2023</strong>
                    <br />
                    Registration Deadline
                  </p>
                </li>
                <svg
                  width="60"
                  height="2"
                  viewBox="0 0 60 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1"
                    x2="60"
                    y2="1"
                    stroke="#00FFFF"
                    strokeWidth="3"
                  />
                </svg>
                <li className="divide-x-2 ">
                  <p className="mt-6 text-xl font-normal text-second font-roboto">
                    <strong className="">17/07/2023</strong>
                    <br />
                    Datathon Kickoff
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative pb-6 mx-4 md:h-48">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-second ring-0 ring-whit ">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.2 13.6L5.2 10.6L8.2 7.6M13 7.6L16 10.6L13 13.6M3.4 20.2C2.07451 20.2 1 19.1255 1 17.8V3.4C1 2.07452 2.07452 1 3.4 1H17.8C19.1255 1 20.2 2.07452 20.2 3.4V17.8C20.2 19.1255 19.1255 20.2 17.8 20.2H3.4Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-3xl font-thin text-second font-abril">
                Coding sessions
              </h3>
              <svg
                width="60"
                height="2"
                viewBox="0 0 60 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="1" x2="60" y2="1" stroke="#00FFFF" strokeWidth="3" />
              </svg>
              <ul>
                <li className="">
                  <p className="mt-6 text-xl font-normal text-second font-roboto">
                    <strong>17/07/2023 - 28/07/2023</strong>
                    <br /> Coding Sessions
                  </p>
                </li>
                <svg
                  width="60"
                  height="2"
                  viewBox="0 0 60 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1"
                    x2="60"
                    y2="1"
                    stroke="#00FFFF"
                    strokeWidth="3"
                  />
                </svg>
                <li className="">
                  <p className="mt-12 text-xl font-normal text-second font-roboto">
                    <strong>28/07/2023</strong>
                    <br /> Last date for code submission
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative h-48 mx-4 ">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-second ring-0 ring-whit ">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4951 2.7139C11.7017 2.29536 12.2985 2.29536 12.5051 2.7139L15.1791 8.13203C15.2611 8.29823 15.4196 8.41343 15.6031 8.44008L21.5823 9.30892C22.0442 9.37604 22.2286 9.94366 21.8944 10.2695L17.5678 14.4869C17.4351 14.6162 17.3745 14.8026 17.4058 14.9853L18.4272 20.9404C18.5061 21.4004 18.0233 21.7513 17.6101 21.5341L12.2621 18.7224C12.0981 18.6362 11.9021 18.6362 11.738 18.7224L6.39002 21.5341C5.97689 21.7513 5.49404 21.4004 5.57294 20.9404L6.59432 14.9853C6.62565 14.8026 6.56509 14.6162 6.43236 14.4869L2.10573 10.2695C1.7715 9.94366 1.95594 9.37604 2.41783 9.30892L8.39708 8.44008C8.5805 8.41343 8.73906 8.29823 8.82109 8.13203L11.4951 2.7139Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex w-full bg-gray-200 h-0.5"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-3xl font-thin text-second font-abril">
                Subsequent stages
              </h3>
              <svg
                width="60"
                height="2"
                viewBox="0 0 60 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="1" x2="60" y2="1" stroke="#00FFFF" strokeWidth="3" />
              </svg>
              <ul>
                <li className="">
                  <p className="mt-6 text-xl font-normal text-second">
                    Code review phase
                  </p>
                </li>
                <svg
                  width="60"
                  height="2"
                  viewBox="0 0 60 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1"
                    x2="60"
                    y2="1"
                    stroke="#00FFFF"
                    strokeWidth="3"
                  />
                </svg>
                <li className="">
                  <p className="mt-6 text-xl font-normal text-second">
                    Technical - Business interview phase
                  </p>
                </li>
                <svg
                  width="60"
                  height="2"
                  viewBox="0 0 60 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1"
                    x2="60"
                    y2="1"
                    stroke="#00FFFF"
                    strokeWidth="3"
                  />
                </svg>
                <li className="">
                  <p className="mt-6 text-xl font-normal text-second">
                    Closing event (prizes, winners)
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
