'use client'

import React from 'react'
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
              <Image src="/logo2.png" alt="logo" width={120} height={120} />
              <ul className="hidden px-4 mx-auto space-x-12 font-semibold md:flex font-heading">
                <li>
                  <a className="text-2xl text-white " href="#">
                    <Link
                      activeClass="active"
                      to="hero"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Home
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="text-2xl text-white " href="#">
                    <Link
                      activeClass="active"
                      to="challenge"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Challenge
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="text-2xl text-white " href="#">
                    <Link
                      activeClass="active"
                      to="timeline"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Timeline
                    </Link>{' '}
                  </a>
                </li>
                <li>
                  <a className="text-2xl text-white " href="#">
                    <Link
                      activeClass="active"
                      to="details"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Details
                    </Link>
                  </a>
                </li>
                <li>
                  <a className="text-2xl text-white " href="#">
                    <Link
                      activeClass="active"
                      to="criteria"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Criteria
                    </Link>
                  </a>
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
