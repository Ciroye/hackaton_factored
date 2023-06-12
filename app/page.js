import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Challenge from '@/components/Challenge'
import Timeline from '@/components/Timeline'
import Details from '@/components/Details'
import Criteria from '@/components/Criteria'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="bg-third">
        <Hero />
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
      <Footer />
    </div>
  )
}
