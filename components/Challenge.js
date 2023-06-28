'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  challangeVariantsImage,
  staggerContainer,
  fadeIn,
} from '../utils/motion'
import { Parallax } from 'react-scroll-parallax'

const Challenge = () => {
  return (
    <section className="md:ml-[8rem] ml-6 pt-4" id="challenge">
      <div className="py-1">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid md:grid-cols-10 "
        >
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex flex-col justify-center max-w-3xl col-span-5 py-6 mx-auto md:px-0 md:mx-0"
          >
            <h2 className="flex w-full pb-6 font-extrabold text-white text-7xl justify-left font-abril">
              The Challenge
            </h2>
            <h2
              className={`text-lg text-white font-abril leading-[38px md:pr-10`}
            >
              Join us to create innovative data solutions (web apps, chatbots,
              dashboards, model interfaces...) that empower businesses by
              generating insights from product reviews. Ideally, these data
              products will help solve a wide range of business problems, like
              product optimization, marketing budget allocation, and many
              others!
              <br />
              <br />
              You will receive a set of Amazon reviews from various products in
              different industries, and your team will represent a product
              company&#39;s data team. Your team will develop an end-to-end data
              product that is able to analyze all product reviews and generate
              actionable insights to inform stakeholders&#39; decisions.
            </h2>
            <div className="flex flex-col gap-6 mt-6 mr-8">
              <div className={`flex justify-center items-center flex-row `}>
                <div className="md:pb-4">
                  <div
                    className={`flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-fourth `}
                  >
                    <span className="text-3xl font-bold text-second font-abril">
                      1
                    </span>
                  </div>
                </div>
                <p className="flex-1 ml-[30px] font-light	text-lg text-white leading-[32.4px] font-abril ">
                  <strong className="font-black">Data Engineering:</strong>{' '}
                  Extracting data from multiple sources, harmonizing datasets,
                  and automating data transformation. Be prepared to work with
                  streaming data as well.
                </p>
              </div>
              <div className={`flex justify-center items-center flex-row `}>
                <div className="md:pb-4">
                  <div
                    className={`flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-fourth`}
                  >
                    <span className="text-3xl font-bold text-second font-abril">
                      2
                    </span>
                  </div>
                </div>
                <p className="flex-1 ml-[30px] font-light	 text-lg text-white leading-[32.4px] font-abril">
                  <strong className="font-black">Machine Learning:</strong>{' '}
                  Exploring and visualizing correlations, selecting vital
                  features, and experimenting with machine learning models.
                </p>
              </div>
              <div className={`flex justify-center items-center flex-row `}>
                <div className="md:pb-4">
                  <div
                    className={`flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-fourth`}
                  >
                    <span className="text-3xl font-bold text-second font-abril">
                      3
                    </span>
                  </div>
                </div>
                <p className="flex-1 ml-[30px] font-light	 text-lg text-white leading-[32.4px] font-abril">
                  <strong className="font-black"> Data Analytics:</strong>{' '}
                  Addressing data quality issues, analyzing key parameters,
                  visualizing insights, and selecting relevant KPIs.
                </p>
              </div>
            </div>
          </motion.div>

          <div
            className="relative inset-0 z-10 items-center justify-center hidden col-span-5 mx-auto mt-6 overflow-hidden md:flex"
            variants={challangeVariantsImage('right')}
          >
            <Parallax
              translateY={[-30, 30]}
              className="z-10 object-cover h-full overflow-clip rounded-xl"
            >
              <Image
                className="object-cover h-full overflow-clip rounded-xl"
                src="/challenge.svg"
                alt=""
                width={1500}
                height={1200}
              />
            </Parallax>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Challenge
