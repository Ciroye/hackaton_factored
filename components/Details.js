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
        <div className="container flex ">
          <motion.div
            className="w-3/4 space-y-12 mr-14"
            variants={fadeIn('right', 'tween', 0.2, 1)}
          >
            <div>
              <h2 className="flex w-full mb-10 font-bold text-white text-7xl justify-left font-abril">
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
                <div className="flex items-start" key={index}>
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
            className="flex items-center justify-center w-/2 ml-12"
            variants={challangeVariantsImage('left', 'tween', 0.2, 1)}
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
