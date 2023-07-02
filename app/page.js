'use client'

import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Challenge from '@/components/Challenge'
import Timeline from '@/components/Timeline'
import Details from '@/components/Details'
import Criteria from '@/components/Criteria'
import Footer from '@/components/Footer'
import StarsCanvas from '@/components/Starts'
import Factored from '@/components/Factored'
import InitialTransition from '@/components/InitialTransition'
import 'bootstrap/dist/css/bootstrap.css'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="mx-auto">
        <link rel="icon" href="/favicon.ico" />
        <div className="relative z-0 ">
          <InitialTransition />
          <div className="bg-second">
            <NavBar />
          </div>
          <div className="relative z-0 bg-[url('/Hackathon-1.png')] bg-no-repeat bg-center bg-cover">
            <Hero />
            {/* <StarsCanvas /> */}
          </div>
        </div>
        <div className="bg-second">
          <Challenge />
        </div>
        <div className="bg-white">
          <Timeline />
        </div>
        <div className="bg-second">
          <Details />
        </div>
        <div className="bg-white">
          <Criteria />
        </div>
        <div className="bg-second">
          <Factored />
        </div>
        <Footer />
      </div>
    </ParallaxProvider>
  )
}
