import HeroImage from '../assets/hero-illustration.png'

const Hero = () => {
    return (
        <section className="relative w-full text-center min-h-[40vh] md:min-h-[65vh] md:text-start overflow-hidden bg-blue-950 text-white">
            <div className='container flex flex-col w-[90%] mx-auto p-2'>
                <div className='mt-10'>
                    <h1 className='text-2xl font-bold'>OurField - Book Sports Field Online</h1>
                    <p>Find and book sports fields effortlessly</p>
                </div>
                <form className='flex flex-col items-center gap-[.5rem] mt-12 w-[50%] md:w-[30%] md:mx-0 mx-auto'>
                    <input className='text-black outline-none bg-white rounded-md p-[.125rem] text-sm w-full md:w-[10rem] md:p-2 text-center' type="text" placeholder='Search for a location' />
                    <div className='flex justify-between w-full md:flex-col md:items-center gap-4'>
                        <input className="text-black outline-none bg-white rounded-md p-[.125rem] md:w-[10rem] md:p-2  text-sm w-fit flex-1" type="date" />
                        <input className="text-black outline-none bg-white rounded-md p-[.125rem] md:w-[10rem] md:p-2 text-sm w-fit flex-1" type="time" />
                    </div>
                    <input className="text-black outline-none bg-white rounded-md p-[.125rem] text-sm w-full md:w-[10rem] md:p-2 text-center" placeholder='Type of terrain' />
                </form>

            </div>
            <img className='hidden md:block absolute top-0 right-0' src={HeroImage} alt="Hero" />

        </section>
    )
}

export default Hero