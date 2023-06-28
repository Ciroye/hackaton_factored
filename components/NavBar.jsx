'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'
import { Link } from 'react-scroll'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <section className="relative w-screen mx-auto ">
        <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-3 "
        >
          <a
            href="https://factored.ai/"
            target="_blank"
            className="pt-3 pb-2 pl-8"
          >
            <Image src="/logo2.png" alt="logo" width={130} height={120} />
          </a>
          <ul className="font-roboto text-base items-center mr-[10%] hidden pt-4 space-x-12 justify-end md:flex col-span-2 uppercase pr-4">
            <li>
              <Link
                activeClass="active"
                className="text-white no-underline cursor-pointer "
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
                className="text-white no-underline cursor-pointer "
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
                className="text-white no-underline cursor-pointer "
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
                className="text-white no-underline cursor-pointer "
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
                className="text-white no-underline cursor-pointer "
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
        </motion.nav>
      </section>
    </>
  )
}

export default Navbar
