'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  staggerContainer,
  fadeIn,
  challangeVariantsImage,
} from '../utils/motion'

const Details = () => {
  return (
    <section className="container py-32 mx-auto" id="details">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex justify-center"
      >
        <div className="container md:flex ">
          <motion.div
            className="max-w-3xl space-y-12 md:w-3/4 md:mr-20"
            variants={fadeIn('right', 'tween', 0.2, 1)}
          >
            <div>
              <h2 className="flex w-full mb-10 text-6xl font-bold text-white justify-left font-abril">
                What are the details?
              </h2>
              <h1 className="text-xl font-semibold text-white"></h1>

              <div className="mt-2">
                <span className="inline-block w-40 h-1 rounded-full bg-principal"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-principal"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-principal"></span>
              </div>
            </div>

            <div className="flex ">
              <div className="mx-4 mt-0">
                <h1 className="w-auto max-w-[100px] text-2xl font-semibold text-second bg-fourth text-center rounded-md">
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
                <h1 className="w-auto max-w-[100px] text-2xl font-semibold text-second bg-fourth text-center rounded-md">
                  Who?
                </h1>
                <p className="mt-3 text-xl text-white font-abril ">
                  We welcome anyone with experience and/or interest in data in
                  any field related to Machine Learning, Software Engineering,
                  Data Engineering, and Data Analytics.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mx-4 mt-0">
                <h1 className="w-auto max-w-[100px] text-2xl font-semibold text-second bg-fourth text-center rounded-md">
                  How?
                </h1>
                <p className="mt-3 text-xl text-white font-abril ">
                  The Datathon spans over two weeks (see the Timeline section).
                  Code commit windows will be available daily for you to push
                  your changes to GitHub between 18:00 and 21:00 EST. Join our{' '}
                  <a
                    className="text-lg no-underline text-fourth"
                    href="https://join.slack.com/t/factored-1st-datathon/shared_invite/zt-1xphdctm9-KkbScI0tcuQfaqK0htg18Q"
                  >
                    Slack
                  </a>{' '}
                  workspace to stay updated on real-time Datathon news and
                  logistics. Communicate with your team through any platform of
                  your choice
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="items-center justify-center hidden mt-24 ml-12 md:flex w-/2"
            variants={challangeVariantsImage('right', 'tween', 0.2, 1)}
          >
            <Image
              className="object-cover rounded-lg"
              src="/Hackathon04.png"
              alt=""
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Details
