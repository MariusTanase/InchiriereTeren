import Header from '../components/Header'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import CardStats from "../components/CardsStats"

const Homepage = () => {
  return (
    <div className='w-full '>
        <Header />
        <Hero />
        <Welcome />
        <CardStats />
    </div>
  )
}

export default Homepage