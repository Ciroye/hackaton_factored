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

export default function Home() {
  return (
    <div className="mx-auto">
      <link rel="icon" href="/favicon.ico" />
      <div className="relative z-0 bg-[url(https://i.ibb.co/dtWWrrZ/Hackathon-1.png)] bg-no-repeat bg-center bg-cover">
        <InitialTransition />
        <NavBar />
        <div className="relative z-0 ">
          <Hero />
          {/* <StarsCanvas /> */}
        </div>
      </div>
      <div className="bg-second">
        <Challenge />
      </div>
      <div className="bg-fifth">
        <Timeline />
      </div>
      <div className="bg-second">
        <Details />
      </div>
      <div className="bg-fifth">
        <Criteria />
      </div>
      <div className="bg-second">
        <Factored />
      </div>
      <Footer />
    </div>
  )
}
