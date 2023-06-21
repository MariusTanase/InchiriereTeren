import Header from '../components/Header'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import CardStats from "../components/CardsStats"
import WhyUs from '../components/WhyUs'
import CallToAction from '../components/CallToAction'

const Homepage = () => {
  return (
    <section className='w-full'>
        <Header />
        <Hero />
        <Welcome />
        <CardStats />
        <WhyUs />
        <CallToAction />
    </section>
  )
}

export default Homepage