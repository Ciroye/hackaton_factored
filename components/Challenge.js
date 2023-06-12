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
    'Extracting data from multiple sources, harmonizing datasets, and automating data transformation.',
    'Exploring and visualizing correlations, selecting vital features, and experimenting with machine learning models.',
    'Addressing data issues, analyzing key parameters, visualizing insights, and selecting relevant KPIs.',
  ]

  return (
    <section className="container mx-auto" id="challenge">
      <div className="py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-2 "
        >
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col px-20"
          >
            <h2 className="flex w-full pb-12 font-extrabold text-white text-7xl justify-left font-abril">
              The Challenge
            </h2>
            <h2 className={`text-3xl text-white font-abril leading-[38px] `}>
              You will help businesses in their journey for product
              optimization, marketing budget allocation, and customer propensity
              scoring.
            </h2>
            <div className="flex flex-col gap-6 mt-8 mr-8">
              {challengesFeatures.map((feature, index) => (
                <>
                  <div className={`flex justify-center items-center flex-row`}>
                    <div
                      className={`flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-fourth`}
                    >
                      <p className="text-3xl font-bold text-second font-abril">
                        {index + 1}
                      </p>
                    </div>
                    <p className="flex-1 ml-[30px] font-light	 text-xl text-white  leading-[32.4px]">
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
              {/* <Image
                className="mt-12"
                src="/get-started.png"
                alt=""
                width={600}
                height={600}
              /> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Challenge
