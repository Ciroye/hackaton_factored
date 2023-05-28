'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  challangeVariantsImage,
  staggerContainer,
  fadeIn,
} from '../utils/motion'

const Challenge = () => {
  const challengesFeatures = [
    'Develop a solution that help businesses get insights from their products',
    'Explore a large dataset of product reviews to identify key patterns and trends',
    'Develop insightful visualizations to communicate your findings to stakeholders',
    'Build machine learning models that helps untangling the complexities of reviews',
  ]

  return (
    <section className="container mx-auto mt-5" id="challenge">
      <h2 className="flex justify-center w-full text-6xl font-bold text-principal ">
        Challenge
      </h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="grid grid-cols-2 "
      >
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <h2 className={`font-bold text-4xl text-letter leading-[48px]`}>
            The challenge is to deliver an innovative data solution
          </h2>
          <div className="flex flex-col gap-6 mt-8 mr-8">
            {challengesFeatures.map((feature, index) => (
              <>
                <div className={`flex justify-center items-center flex-row`}>
                  <div
                    className={`flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-principal`}
                  >
                    <p className="text-xl font-bold text-white">{index + 1}</p>
                  </div>
                  <p className="flex-1 ml-[30px] font-normal text-xl text-letter leading-[32.4px]">
                    {feature}
                  </p>
                </div>
              </>
            ))}
          </div>
        </motion.div>
        <div>
          <motion.div
            className="flex items-center justify-center flex-1 mt-6"
            variants={challangeVariantsImage('left')}
          >
            <Image
              className="mt-12"
              src="/get-started.png"
              alt=""
              width={600}
              height={600}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Challenge
