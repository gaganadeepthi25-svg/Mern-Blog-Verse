const NavBar=()=>{
    return(
        <div className="flex justify-around h-16 items-center border-1 border-black">
        <h1 className="font-bold">Blog Verse</h1>
        <button className="text-gray-800  hover:bg-blue-400 px-5 py-1 rounded-xl cursor-pointer ">Home</button>
        <div className="flex gap-5">
            <button className="font-semibold text-gray-700">Sign In</button>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-700 cursor-pointer">Sign Up</button>
        </div>
        </div>
    )
}
export default NavBar