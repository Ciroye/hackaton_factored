'use client'

import React from 'react'
import { Link as Nextlink } from 'next/link'
import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'
import { Link, animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <div className="flex flex-wrap place-items-center ">
        <section className="relative mx-auto">
          <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="flex justify-between w-screen "
          >
            <div className="flex items-center w-full px-5 py-6 xl:px-12">
              <a href="https://factored.ai/" target="_blank">
                <Image src="/logo2.png" alt="logo" width={120} height={120} />
              </a>
              <ul className="hidden px-4 mx-auto space-x-12 font-semibold md:flex font-heading">
                <li>
                  <Link
                    activeClass="active"
                    className="text-2xl text-white no-underline cursor-pointer "
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
                    className="text-2xl text-white no-underline cursor-pointer "
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
                    className="text-2xl text-white no-underline cursor-pointer "
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
                    className="text-2xl text-white no-underline cursor-pointer "
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
                    className="text-2xl text-white no-underline cursor-pointer "
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
      </div>
    </>
  )
}

export default Navbar
