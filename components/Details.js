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
  const details = [
    {
      title: 'Where?',
      description:
        "The hackathon will take place online. Over [Discord, Slack], you'll have the opportunity to connect with other participants and Factored Experts. We'll also be hosting workshops, keynotes, and mentoring sessions.",
    },
    {
      title: 'Who?',
      description:
        'We welcome anyone with experience and/or interest in data analytics in any field related to Machine Learning, Software Engineering, Data Engineering, and Data Analytics.',
    },
    {
      title: 'How?',
      description:
        'The hackathon spans over two weeks (see the Timeline section). Code commit windows will be available daily for you to push your changes to GitHub between XX:XX and XX:XX. Join our [Discord, Slack] community to stay updated on real-time hackathon news and logistics. Communicate with your team through any platform of your choice.',
    },
  ]

  return (
    <section className="container py-32 mx-auto" id="details">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex justify-center"
      >
        <div className="container flex">
          <motion.div
            className="w-full space-y-12 lg:w-1/2 "
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

            {details.map((detail, index) => (
              <>
                <div className="flex items-start">
                  <div className="mx-4 mt-0">
                    <h1 className="w-auto max-w-[100px] text-xl font-semibold text-second bg-fourth text-center rounded-md">
                      {detail.title}
                    </h1>

                    <p className="mt-3 text-white ">{detail.description}</p>
                  </div>
                </div>
              </>
            ))}
          </motion.div>

          <motion.div
            className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center"
            variants={challangeVariantsImage('left', 'tween', 0.2, 1)}
          >
            {/* <Image
              className="object-cover rounded-[136px]"
              src="/details.png"
              alt=""
              width={500}
              height={500}
            /> */}
          </motion.div>
        </div>

        <hr className="my-12 border-gray-200 dark:border-gray-700" />

        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1"></div>

          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1"></div>

          <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1"></div>

          <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1"></div>

          <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Details
