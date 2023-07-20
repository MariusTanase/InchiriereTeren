import {Header, Hero, Welcome, CardsStats, WhyUs, CallToAction, Testimonials, ContactUs, Footer} from '../components/StaticComponents/'

const Homepage = () => {
  return (
    <section className='w-full'>
        <Header />
        <Hero />
        <Welcome />
        <CardsStats />
        <WhyUs />
        <CallToAction />
        <Testimonials />
        <ContactUs />
        <Footer />
    </section>
  )
}

export default Homepage