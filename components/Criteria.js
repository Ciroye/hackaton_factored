'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../utils/motion'

const Criteria = () => {
  return (
    <motion.section
      className="container px-12 py-16 mx-auto"
      variants={staggerContainer}
      id="criteria"
    >
      <motion.div
        className=""
        initial="hidden"
        whileInView="show"
        variants={fadeIn('down', 'tween', 0.1, 1)}
      >
        <h2 className="flex justify-center mb-20 text-5xl font-bold text-second md:text-7xl font-abril">
          Criteria & Registration
        </h2>
        <div className="grid md:grid-cols-3 md:gap-x-10">
          <div className="mx-3 mb-12 md:mb-0">
            <div className="block h-full rounded-lg bg-seventh text-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
              <div className="flex justify-center">
                <div className="z-10 inline-block p-4 -mt-8 text-white rounded-full shadow-md bg-fourth ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0487 3.35156H5.04873C3.06051 3.35156 1.44873 4.96333 1.44873 6.95156V18.9517C1.44873 20.9399 3.06051 22.5517 5.04873 22.5517H17.0487C19.037 22.5517 20.6487 20.9399 20.6487 18.9517L20.6487 12.9516M7.44873 16.5516L11.8147 15.6718C12.0465 15.6251 12.2593 15.511 12.4264 15.3438L22.2001 5.56474C22.6687 5.09588 22.6684 4.33589 22.1994 3.86743L20.129 1.79936C19.6602 1.33109 18.9006 1.33141 18.4322 1.80007L8.65749 11.5801C8.49068 11.747 8.37678 11.9594 8.33003 12.1907L7.44873 16.5516Z"
                      stroke="#1B418C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="px-6 py-6">
                <h5 className="text-3xl font-bold text-center text-white font-abril">
                  Judging Criteria
                </h5>
                <div className="flex items-center justify-center text-center">
                  <svg
                    width="236"
                    height="1"
                    viewBox="0 0 236 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line y1="0.5" x2="236" y2="0.5" stroke="white" />
                  </svg>
                </div>
                <br />
                <p className="text-lg font-medium text-white font-roboto">
                  Ensure that your solution works flawlessly and delivers
                  impactful insights. <br />
                  <br />
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
                  <br /> Criteria includes problem understanding, data analysis
                  and modeling, and presentation skills.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-3 mb-12 md:mb-0">
            <div className="block h-full rounded-lg bg-seventh text-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
              <div className="flex justify-center">
                <div className="z-10 inline-block p-4 -mt-8 text-white rounded-full shadow-md bg-fourth ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12L12 16.8M12 8.4422V8.40001M2.40002 18L2.40002 5.9999C2.40002 4.01168 4.0118 2.3999 6.00002 2.3999L18 2.3999C19.9882 2.3999 21.6 4.01168 21.6 5.9999L21.6 18C21.6 19.9882 19.9882 21.6 18 21.6H6.00002C4.0118 21.6 2.40002 19.9882 2.40002 18Z"
                      stroke="#1B418C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="px-6 py-6">
                <h5 className="text-3xl font-bold text-center text-white font-abril">
                  Registration
                </h5>
                <div className="flex items-center justify-center text-center">
                  <svg
                    width="236"
                    height="1"
                    viewBox="0 0 236 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line y1="0.5" x2="236" y2="0.5" stroke="white" />
                  </svg>
                </div>
                <br />
                <p className="text-lg font-medium text-white font-roboto">
                  <ul className="py-2font-abril">
                    <li className="py-2 text-lg">Teams of up to 4 members,</li>
                    <br />
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
                    <br />
                    <li className="text-lg">
                      Registration closes on 14th of July, 2023.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div className="mx-3 mb-12 md:mb-0 md:mx-0">
            <div className="block h-full rounded-lg bg-seventh text-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
              <div className="flex justify-center">
                <div className="z-10 inline-block p-4 -mt-8 text-white rounded-full shadow-md bg-fourth ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.9999 21.6C4.01168 21.6 2.3999 19.9882 2.3999 18V5.9999C2.3999 4.01168 4.01168 2.3999 5.9999 2.3999H17.9999C19.9881 2.3999 21.5999 4.01168 21.5999 5.9999L21.5999 18C21.5999 19.9882 19.9881 21.6 17.9999 21.6H5.9999Z"
                      stroke="#1B418C"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.1999 13.5999L12.7999 5.9999V11.1999H16.7999L11.1999 17.9999V13.5999H7.1999Z"
                      stroke="#1B418C"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="px-6 py-6">
                <h5 className="text-3xl font-bold text-center text-white font-abril">
                  Additional details
                </h5>
                <div className="flex items-center justify-center text-center">
                  <svg
                    width="236"
                    height="1"
                    viewBox="0 0 236 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line y1="0.5" x2="236" y2="0.5" stroke="white" />
                  </svg>
                </div>
                <br />
                <p className="text-lg font-medium text-white text-roboto">
                  <ul className=" font-abril">
                    <li className="py-2 text-lg">
                      Code submission round: Each team will have to submit the
                      code within the specified window.
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

                    <li className="py-2 text-lg">
                      Interview Round: Candidates who qualify will get the
                      opportunity to display their solution to the Factored
                      Panel.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="mx-4 mt-10 text-lg font-semibold text-second">
          * Don&#39;t have a team? No problem! Connect with other participants
          through{' '}
          <a
            className="text-lg no-underline text-seventh"
            href="https://join.slack.com/t/factored-1st-datathon/shared_invite/zt-1xphdctm9-KkbScI0tcuQfaqK0htg18Q"
          >
            Slack
          </a>{' '}
          and create a team. In case of any extra participants, we&#39;ll assign
          or form teams.
        </h3>
      </motion.div>
    </motion.section>
  )
}

export default Criteria
