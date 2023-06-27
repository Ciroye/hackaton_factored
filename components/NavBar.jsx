'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'
import { Link } from 'react-scroll'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <section className="container relative w-screen mx-auto">
        <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="flex items-center justify-center "
        >
          <a href="https://factored.ai/" target="_blank">
            <Image src="/logo2.png" alt="logo" width={160} height={100} />
          </a>
          <div className="flex items-center justify-around w-full py-6 ">
            <ul className="mb-4 items-center mr-[10%] hidden pt-4 space-x-12 font-semibold md:flex">
              <li>
                <Link
                  activeClass="active"
                  className="text-3xl text-white no-underline cursor-pointer "
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="text-3xl text-white no-underline cursor-pointer "
                  to="challenge"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Challenge
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="text-3xl text-white no-underline cursor-pointer "
                  to="timeline"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Timeline
                </Link>{' '}
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="text-3xl text-white no-underline cursor-pointer "
                  to="details"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Details
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="text-3xl text-white no-underline cursor-pointer "
                  to="criteria"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Criteria
                </Link>
              </li>
            </ul>
          </div>
        </motion.nav>
      </section>
    </>
  )
}

export default Navbar
