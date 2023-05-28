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
      <Hero />
      <Challenge />
      <Timeline />
      <Details />
      <Criteria />
      <Footer />
    </div>
  )
}
