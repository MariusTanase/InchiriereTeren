import Button from './elements/Button'

const CallToAction = () => {
    return (
        <section className='w-[80%] mx-auto p-4 my-24'>
            <div className='flex flex-col'>
                <h2 className='font-bold text-3xl text-slate-700'>Ready to take a sweat?</h2>

                <div className='flex gap-8'>
                    <Button style="lg:inline-block text-center p-[1rem] px-4 bg-orange-500 hover:bg-orange-600 text-sm text-white font-bold rounded-xl transition duration-200 max-w-[300px] my-8" linkTo='mamaia' name="Book a Terrain!" />
                    <Button style="lg:inline-block text-center p-[1rem] px-4 bg-green-600 hover:bg-orange-600 text-sm text-white font-bold rounded-xl transition duration-200 max-w-[300px] my-8" linkTo='mamaia' name="Explore Pricing!" />
                </div>

            </div>
        </section>
    )
}

export default CallToAction