import WhyUsPerson from '../assets/WhyUsPerson.png';

const WhyUs = () => {
  return (
    <div className='container flex items-center w-[80%] mx-auto my-16 flex-col lg:flex-row'>

        <div className='flex-1 order-2 lg:order-1'>
            <h2 className='text-slate-700 font-bold text-[3rem] my-4 tracking-wide'>Why choose us?</h2>
            <p className='my-6 text-xl tracking-wide'>Satisfy your competitive spirit on our well-maintained sports terrains, designed with your adrenaline-pumping desires in mind.</p>
            <p className='my-6 text-xl tracking-wide'>Jam-packed with a variety of terrains for football, basketball, tenis, and more. There's no shortage of excitement at SportuMeu.</p>
            <p className='my-6 text-xl tracking-wide'>Join a growing community of fellow athlete and bask in the glory of renting from the best sport terrain providers in town.</p>
        </div>
        <div className='flex-1 order-1 lg:order-2 lg:justify-center flex'>
            <img className='object-cover max-w-[200px] lg:max-w-full' src={WhyUsPerson} alt="WhyUs" />
        </div>
    </div>
  )
}

export default WhyUs