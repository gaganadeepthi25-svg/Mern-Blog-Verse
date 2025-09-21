import {Link} from "react-router-dom"
const NavBar = () => {
    return (
        <div className="flex justify-around w-full h-16 items-center border-1 bg-white border-black">
            <h1 className="md:font-bold md:text-lg cursor-pointer text-sm font-semibold">Blog Verse</h1>
            <Link to="/Home" className="text-gray-800  hover:bg-blue-400 md:px-5 md:py-1 text-sm md:text-lg rounded-xl cursor-pointer ">Home</Link>
            <div className="flex gap-5">
               <p> <Link to="/SignIn" className="font-semibold text-gray-700 cursor-pointer text-sm md:pb-3 md:text-lg mt-2">Sign In</Link></p>
                <p>  <Link to="/SignUp" className="bg-blue-500 text-sm text-white px-1 py-1 md:px-2 md:py-1.5 rounded-xl hover:bg-blue-700 cursor-pointer ">Sign Up</Link></p>
            </div>
        </div>
    )
}
export default NavBar