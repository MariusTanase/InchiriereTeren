import HeroImage from '../../assets/hero-illustration.png'

const Hero = () => {
    return (
        <section className="w-full text-center min-h-[30vh] xl:min-h-[60vh] md:text-start overflow-hidden bg-blue-950 text-white flex">
            <div className='relative container flex flex-col w-[100%] lg:w-[80%] mx-auto'>
                <div className='flex flex-col justify-evenly items-center xl:items-start mx-auto xl:mx-0 mt-10 xl:flex-1'>
                    {/* text hero */}
                    <div className='flex justify-center items-center flex-col'>
                        <h1 className='md:text-[4rem] text-[3rem] lg:text-[5rem] font-bold'>SportulMeu</h1>
                        <p className='text-lg md:text-[1.5rem] lg:text-[1.7rem]'>Find and book sports fields effortlessly</p>
                    </div>
                    <form className='flex flex-col gap-[.5rem] mt-12 w-fit xl:w-[30%]'>
                        <input className='text-black outline-none bg-white rounded-md p-[0.7rem] text-sm w-full md:p-2 text-center xl:max-w-[300px]' type="text" placeholder='Search for a location' />
                    </form>

                </div>

                {/* apare dupa 1280 */}
                <div className='hidden relative xl:flex-1 xl:block'>
                    <img className='hidden object-cover xl:block absolute bottom-0 right-[-25%] w-full max-w-[800px]' src={HeroImage} alt="Hero" />
                </div>
            </div>
        </section>
    )
}

export default Hero