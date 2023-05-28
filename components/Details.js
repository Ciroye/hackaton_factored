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
        'The hackathon is online. Over [Discord, Slack] you’ll have the opportunity to connect with other participants and Factored Experts. We’ll also be hosting workshops, keynotes and mentoring sessions.',
    },
    {
      title: 'Who?',
      description:
        'We welcome anyone with experience with at least 1+ years of Data analytics experience in any field regarding Machine Learning, Data Engineering and Data Analytics.',
    },
    {
      title: 'How?',
      description:
        'Tha hackathon will take place over two weeks (See Timeline). There will be commit windows for you to push your changes to GitHub between XX:XX and XX:XX every day. We have set up a [Discord, Slack] to help you connect with us and other participants. Through this platform we will be sharing real time updates about the hackathon and logistics. To communicate with your team you’re free to use any platform of your choosing.',
    },
  ]

  return (
    <section className="container mx-auto mt-36" id="details">
      <h2 className="flex justify-center w-full mb-20 text-6xl font-bold text-principal">
        What are the details?
      </h2>
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
              <h1 className="text-xl font-semibold text-lette">
                Your mission is to embark on an end-to-end data project to build
                a solution that should not just be technically robust, but must
                provide business insights to solve the likes of product
                optimization, new product development and more!
              </h1>

              <div className="mt-2">
                <span className="inline-block w-40 h-1 rounded-full bg-principal"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-principal"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-principal"></span>
              </div>
            </div>

            {details.map((detail, index) => (
              <>
                <div className="flex items-start">
                  <span className="inline-block p-2 mt-[6px] text-blue-500 bg-principal rounded-xl"></span>
                  <div className="mx-4 mt-0">
                    <h1 className="text-xl font-semibold text-letter ">
                      {detail.title}
                    </h1>

                    <p className="mt-3 text-letter ">{detail.description}</p>
                  </div>
                </div>
              </>
            ))}
          </motion.div>

          <motion.div
            className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center"
            variants={challangeVariantsImage('left', 'tween', 0.2, 1)}
          >
            <Image
              className="object-cover rounded-[136px]"
              src="/details.png"
              alt=""
              width={500}
              height={500}
            />
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
