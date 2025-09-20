import {Link} from "react-router-dom"
const NavBar = () => {
    return (
        <div className="flex justify-around w-full h-16 items-center border-1 bg-white border-black">
            <h1 className="font-bold cursor-pointer">Blog Verse</h1>
            <Link to="/Home" className="text-gray-800  hover:bg-blue-400 px-5 py-1 rounded-xl cursor-pointer ">Home</Link>
            <div className="flex gap-5">
                <Link to="/SignIn" className="font-semibold text-gray-700 cursor-pointer mt-2">Sign In</Link>
                <Link to="/SignUp" className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-700 cursor-pointer">Sign Up</Link>
            </div>
        </div>
    )
}
export default NavBar