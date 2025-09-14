const SignUp=()=>{
    return(
        <div className="flex items-center flex-col mt-10 gap-5 ">
          <h1 className=" text-2xl text-blue-600 font-bold ">Join Blog Verse</h1>
          <p className="text-xl text-gray-500 text-center font-semibold">Create your account and <br></br> start your Blogging journey today</p>
          <form className="flex flex-col border-1 border-black w-1/3 py-5  items-center rounded-xl gap-5">
            <div className="w-[90%] flex flex-col gap-2">
                <p className="text-md text-gray-700 font-semibold">Full Name</p>
                <input type="text" placeholder="Enter your full name"
                className="border-1 border-gray-700 w-full px-4 py-2 rounded-2xl focus:outline-none focus:border-red-500 "/>
            </div>
            <div className="w-[90%] flex flex-col gap-2">
                <p className="text-md text-gray-700 font-semibold">Email</p>
                <input type="email" placeholder="Enter your email"
                className="border-1 border-gray-700 w-full px-4 py-2 rounded-2xl focus:outline-none focus:border-red-500 "/>
            </div>
            <div className="w-[90%] flex flex-col gap-2">
                <p className="text-md text-gray-700 font-semibold">Password</p>
                <input type="password" placeholder="Enter your password"
                className="border-1 border-gray-700 w-full px-4 py-2 rounded-2xl focus:outline-none focus:border-red-500 "/>
            </div>
            <div className="w-[90%] flex flex-col gap-2">
                <p className="text-md text-gray-700 font-semibold">Conform Password</p>
                <input type="password" placeholder="Conform your password"
                className="border-1 border-gray-700 w-full px-4 py-2 rounded-2xl focus:outline-none focus:border-red-500 "/>
            </div>
            <div className="flex gap-2 border-1 border-gray-800 py-3 w-[90%] rounded-xl items-center justify-center">
                <input type="checkbox" name="" id="" className="h-4 w-4"/>
                <p classname="font-semibold text-gray-800">
                    I agree to the Terms of Services and Privacy Policy
                </p>
            </div>
            <button className="w-[90%] bg-purple-500 font-semibold rounded-xl py-2 text-white hover:bg-purple-700 cursor-pointer">Create Acount</button>
            <div className="border-1 border-black w-[90%]"></div>
             <p className="font-semibold">Already have an account? <span className="text-purple-500">Sign In</span></p>
             <button className="text-gray-700 font-semibold hover:bg-gray-400 rounded-xl py-4 w-[90%] cursor-pointer">Back to Home</button>
          </form>
        </div>
    )
}
export default SignUp