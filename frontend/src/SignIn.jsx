import NavBar from "./NavBar"
import { LockKeyhole } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from "react";



const SignIn = () => {
    const [showPassword,setShowPassword]=useState(false);
     const handlePassword=()=>{
          setShowPassword((password)=>!password);
    }
    return (
        <div className=" flex flex-col items-center min-h-screen bg-gray-100     gap-5">
            <NavBar/>
            <form className=" border-1 border-black w-[20%] pt-5 pb-5 gap-5 mt-40 rounded-2xl bg-white">
                <div className=" flex flex-col items-center gap-2">
                    <h1 className="text-2xl font-bold">Sign In</h1>
                    <p className=" text-gray-500">Access your account</p></div>
                <div className="w-[100%] flex flex-col gap-2 px-10 mt-6 relative">
                    <p className="text-md text-gray-700 font-semibold">Email Address</p>
                    <input type="email" placeholder="Sample@gmail.com"
                        className="border-1 border-gray-700 w-full px-4 pl-8 py-4 rounded-xl focus:outline-none focus:border-blue-500 " />
                          <Mail className="absolute top-12 left-12 size-6 text-gray-600 pt-1 " />
                </div>
                <div className="w-[100%] flex flex-col gap-2 px-10 mt-6 relative">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <input type={showPassword ? "password":"text"}  placeholder="Sample123"
                        className="border-1 border-gray-700 w-full px-4 pl-8 py-4 rounded-xl focus:outline-none focus:border-blue-500 " />
                      < LockKeyhole className="absolute top-12  text-gray-600 left-12 size-5 pt-1 " />
                        
                        <p onClick={handlePassword}>{ showPassword ? <Eye className="absolute top-12 right-12  size-6 text-gray-600 pt-1 hover:text-gray-800 cursor-pointer "/> : <EyeOff className="absolute top-12 right-12  size-6 text-gray-600 pt-1  hover:text-gray-800 cursor-pointer"/> }</p>
                </div>
                <div className="flex justify-around  px-10 mt-5">
                    <div className="flex justify-center items-center gap-1"> <input type="checkbox" className="h-4 w-4 " />
                        <p classname="font-semibold  text-gray-800">
                            Remember me
                        </p>
                    </div>
                    <div>
                        <button className=" text-blue-700  px-5 py-2 rounded-xl hover:underline  cursor-pointer">Forget Password?</button>
                    </div>
                </div>
                <div className="px-10 mt-4 ">
                    <button className="w-[100%] bg-blue-600 font-semibold rounded-xl py-3 px-2  text-white hover:bg-blue-700 cursor-pointer">Sign in</button>
                    <div className="border-1 border-gray-400 mt-5"></div>
                    <p className="text-gray-600  flex justify-center mt-5 gap-2">Dont have an account? <span className="text-blue-700 hover:underline cursor-pointer"> Create one here</span>
                    </p>
                </div>



            </form>
        </div>
    )
}
export default SignIn 