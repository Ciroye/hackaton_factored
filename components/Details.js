'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  staggerContainer,
  fadeIn,
  challangeVariantsImage,
} from '../utils/motion'
import { Parallax } from 'react-scroll-parallax'

const Details = () => {
  return (
    <section className="md:ml-[6rem] py-4" id="details">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="grid md:grid-cols-10 "
      >
        <motion.div
          className="flex flex-col justify-center max-w-3xl col-span-5 py-6 mx-auto md:px-0 md:mx-0"
          variants={fadeIn('right', 'tween', 0.2, 1)}
        >
          <div>
            <h2 className="flex w-full mb-10 font-bold text-white text-7xl justify-left font-abril">
              What are the details?
            </h2>
            <h1 className="text-xl font-semibold text-white"></h1>
          </div>

          <div className="flex ">
            <div className="mx-4 mt-0">
              <h1 className="w-auto max-w-[100px] text-xl font-semibold text-second bg-fourth text-center rounded-full  font-abril">
                Where?
              </h1>
              <p className="mt-3 text-xl text-white font-abril">
                The Datathon will take place online. Over{' '}
                <a
                  className="text-lg no-underline text-fourth"
                  href="https://join.slack.com/t/factored-1st-datathon/shared_invite/zt-1xphdctm9-KkbScI0tcuQfaqK0htg18Q"
                >
                  Slack
                </a>
                , you&#39;ll have the opportunity to connect with other
                participants and Factored Experts. We&#39;ll also be hosting
                workshops, keynotes, and mentoring sessions.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mx-4 mt-0">
              <h1
                className="w-auto max-w-[100px] text-xl font-semibold text-second bg-fourth text-center font-abril rounded-full"
                font-abril
              >
                Who?
              </h1>
              <p className="mt-3 text-xl text-white font-abril ">
                We welcome anyone with experience and/or interest in data in any
                field related to Machine Learning, Software Engineering, Data
                Engineering, and Data Analytics.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mx-4 mt-0">
              <h1
                className="w-auto max-w-[100px] text-xl font-semibold text-second bg-fourth text-center font-abril rounded-full"
                font-abril
              >
                How?
              </h1>
              <p className="mt-3 text-xl text-white font-abril ">
                The Datathon spans over two weeks (see the Timeline section).
                Code commit windows will be available daily for you to push your
                changes to GitHub between 18:00 and 21:00 EST. Join our{' '}
                <a
                  className="text-lg no-underline text-fourth"
                  href="https://join.slack.com/t/factored-1st-datathon/shared_invite/zt-1xphdctm9-KkbScI0tcuQfaqK0htg18Q"
                >
                  Slack
                </a>{' '}
                workspace to stay updated on real-time Datathon news and
                logistics. Communicate with your team through any platform of
                your choice.
              </p>
            </div>
          </div>
        </motion.div>
        <div
          className="relative items-center justify-center hidden col-span-5 mx-auto mt-6 overflow-hidden md:flex"
          variants={challangeVariantsImage('right')}
        >
          <Parallax
            translateY={[-10, 30]}
            className="z-10 object-cover h-full overflow-clip rounded-xl"
          >
            <Image
              className="object-cover w-full overflow-clip rounded-xl"
              src="/details.svg"
              alt=""
              width={1800}
              height={1000}
            />
          </Parallax>
        </div>
      </motion.div>
    </section>
  )
}

export default Details
