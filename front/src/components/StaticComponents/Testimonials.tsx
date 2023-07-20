import WhyUsPerson from '../../assets/WhyUsPerson.png';

const Testimonials = () => {
    return (
        <div className='flex w-full my-24'>
            <div className='w-[80%] mx-auto flex flex-col lg:flex-row gap-8'>
                <div className='flex flex-col items-center justify-center mx-auto w-[250px] h-[250px] max-w-[600px] max-h-[600px] sm:w-[380px] sm:h-[380px] lg:w-[320px] lg:h-[320px] 2xl:w-[450px] 2xl:h-[450px] aspect-square rounded-md p-4 my-4'>
                    <img className='w-[100px]' src={WhyUsPerson} alt="Testimonial 1" />
                    <p className='text-center tracking-wide'>Our team had a blast playing at SportuMeu's top-notch fotball field. It's the best spot around to escape office life and bond through sports!</p>
                    <h4 className='text-slate-400 tracking-wide font-bold text-center'>Marian P.</h4>
                </div>
                <div className='flex flex-col items-center justify-center mx-auto w-[250px] h-[250px] max-w-[600px] max-h-[600px] sm:w-[380px] sm:h-[380px] lg:w-[320px] lg:h-[320px] 2xl:w-[450px] 2xl:h-[450px] aspect-square rounded-md p-4 my-4'>
                    <img className='w-[100px]' src={WhyUsPerson} alt="Testimonial 2" />
                    <p className='text-center tracking-wide'>The perfect tennis field for my weekly training. Geat quality, incredible athmosphere-love it!</p>
                    <h4 className='text-slate-400 font-bold text-center tracking-wide'>Alina M.</h4>
                </div>
            </div>
        </div>
    )
}

export default Testimonials