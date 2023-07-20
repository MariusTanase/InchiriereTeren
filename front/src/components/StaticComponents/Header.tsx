
import { Link } from "react-router-dom"
import Button from "../ReusableComps/Button"

const Header = () => {
    return (
        <div className="w-full bg-blue-950 text-white hidden lg:flex">
            <header className="container flex items-center w-[100%] lg:w-[80%] justify-between mx-auto p-2">
                <div className="flex gap-2 items-center text-white">
                    <img className="w-12" src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_1280.png" alt="logo" />
                    <h1 className="text-2xl font-bold">SportulMeu</h1>
                </div>
                <nav className="">
                    <ul className="hidden lg:flex gap-4">
                        <Link className="hover:text-gray-100 text-md p-[.25rem] rounded-md focus:outline-none hover:underline transition-all ease-in lg:duration-200" to="#home">Home</Link>
                        <Link className="hover:text-gray-100 text-md p-[.25rem] rounded-md focus:outline-none hover:underline transition-all ease-in lg:duration-200" to="#home">About us</Link>
                        <Link className="hover:text-gray-100 text-md p-[.25rem] rounded-md focus:outline-none hover:underline transition-all ease-in lg:duration-200" to="#home">Contact</Link>
                    </ul>
                </nav>

                <div className="hidden lg:flex gap-4 justify-center h-8 items-center">
                    <Button style="hidden lg:inline-block py-[.25rem] px-4 bg-orange-500 hover:bg-orange-600 text-sm text-white font-bold rounded-xl transition duration-200" linkTo='mamaia' name="Login"/>
                    <Button style="hover:underline" linkTo='' name="Get started" />
                </div>

            </header>
        </div>
    )
}

export default Header