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
  return (
    <section className="container mx-auto" id="challenge">
      <div className="py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-3 "
        >
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col px-24 col-span-2 max-w-4xl"
          >
            <h2 className="flex w-full pb-6 font-extrabold text-white text-7xl justify-left font-abril">
              The Challenge
            </h2>
            <h2 className={`text-xl text-white font-abril leading-[38px] `}>
              Join us to create innovative data solutions (web apps, chatbots,
              dashboards, model interfaces...) that empower businesses by
              generating insights from product reviews.Ideally, these data
              products will help solve a wide range of business problems, like
              product optimization, marketing budget allocation, and many
              others!
              <br />
              <br />
              You will receive a set of Amazon reviews from various products in
              different industries, and your team will represent a product
              company&#39;s data team. Your team will develop an end-to-end data
              product that is able to analyze all product reviews and generate
              actionable insights to inform stakeholders’ decisions.
            </h2>
            <div className="flex flex-col gap-6 mt-6 mr-8">
              <div className={`flex justify-center items-center flex-row `}>
                <div
                  className={`flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-fourth`}
                >
                  <span className="text-3xl font-bold text-second font-abril">
                    1
                  </span>
                </div>
                <p className="flex-1 ml-[30px] font-light	 text-lg text-white leading-[32.4px]">
                  <strong>Data Engineering:</strong> Extracting data from
                  multiple sources, harmonizing datasets, and automating data
                  transformation. Be prepared to work with streaming data as
                  well.
                </p>
              </div>
              <div className={`flex justify-center items-center flex-row `}>
                <div
                  className={`flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-fourth`}
                >
                  <span className="text-3xl font-bold text-second font-abril">
                    2
                  </span>
                </div>
                <p className="flex-1 ml-[30px] font-light	 text-lg text-white leading-[32.4px]">
                  <strong>Machine Learning:</strong> Exploring and visualizing
                  correlations, selecting vital features, and experimenting with
                  machine learning models.
                </p>
              </div>
              <div className={`flex justify-center items-center flex-row `}>
                <div
                  className={`flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-fourth`}
                >
                  <span className="text-3xl font-bold text-second font-abril">
                    3
                  </span>
                </div>
                <p className="flex-1 ml-[30px] font-light	 text-lg text-white leading-[32.4px]">
                  <strong> Data Analytics:</strong> Addessing data quality
                  issues, analyzing key parameters, visualizing insights, and
                  selecting relevant KPIs.
                </p>
              </div>
            </div>
          </motion.div>
          <div>
            <motion.div
              className="flex items-center justify-center flex-1 mt-6 "
              variants={challangeVariantsImage('left')}
            >
              <Image
                className="mt-12 rounded-lg"
                src="/Hackathon03.png"
                alt=""
                width={600}
                height={600}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Challenge
