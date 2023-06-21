import React from 'react'
import Button from './elements/Button'

const ContactUs = () => {
    return (
        <div className='flex w-full my-24 bg-blue-950'>
            <div className="container flex flex-col lg:flex-row justify-evenly items-center w-full h-full mx-auto my-24">
                <div className='flex-1 h-[400px] flex flex-col' >
                    <h4 className='text-white font-bold text-6xl mb-8'>Contact us:</h4>
                    <ul>
                        <li className='text-white font-bold text-2xl flex-1 mb-8'><h5>Phone:</h5> <p className='text-orange-500'>0755 555 555</p>
                        </li>
                        <li className='text-white font-bold text-2xl flex-1 mb-8'>
                            <h5>Email:</h5>
                            <p className='text-orange-500'>mamaia@maia.ro</p>
                        </li>
                        <li className='text-white font-bold text-2xl flex-1 mb-8'><h5>Address:</h5>
                            <p className='text-orange-500'>Mamaia, Constanta, Romania</p></li>


                    </ul>
                </div>
                <form className='hidden lg:block flex-1 h-[400px]'>
                    <div className="flex flex-col w-full h-full">
                        <div className="flex flex-col justify-center mx-auto h-[100px] mb-2">
                            <label className='text-slate-400 font-bold text-2xl tracking-wide'>Name</label>
                            <input className='w-[250px] lg:w-[450px] font-3xl rounded-md p-2 mt-[2px]' type="text" name="name" />
                        </div>
                        <div className="flex flex-col justify-center mx-auto h-[100px] mb-2">
                            <label className='text-slate-400 font-bold text-2xl tracking-wide'>Email</label>
                            <input className='w-[250px] lg:w-[450px] rounded-md p-2 mt-[2px]' type="email" name="email" />
                        </div>
                        <div className="flex flex-col justify-center mx-auto h-[100px] mb-2">
                            <label className='text-slate-400 font-bold text-2xl tracking-wide'>Message</label>

                            <textarea className='w-[250px] lg:w-[450px] h-[80px] rounded-md mt-[2px] p-2' name="message" id="" tabIndex={5}></textarea>
                        </div>

                        <Button style="lg:inline-block text-center p-[1rem] px-4 bg-orange-500 hover:bg-orange-600 text-sm text-white font-bold rounded-xl transition duration-200 max-w-[300px] w-[300px] my-8 mx-auto" linkTo='mamaia' name="Submit" />


                    </div>

                </form>
            </div>

        </div>
    )
}

export default ContactUs