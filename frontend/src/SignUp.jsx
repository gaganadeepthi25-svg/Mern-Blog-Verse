import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import { CircleUser } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from "react";
import React from "react"

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        conformPassword: ""
    })
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        conformPassword: ""
    })
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [showConformPassword, setShowConformPassword] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = {}
        if (!formData.fullName) {
            newErrors.fullName = "please enter your full name"
        }
        if (!formData.email) {
            
            newErrors.email = "please enter your email"
        }
        if (!formData.password) {
            newErrors.password = "please enter your password"
        }
        if (!formData.conformPassword) {
            newErrors.conformPassword = "please conform your password"
        } else if (formData.password !== formData.conformPassword) {
            newErrors.conformPassword = "your password is not matched"
        }
        
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        }
        else {
            setSuccess("your account is created successfully")
            setFormData({
                fullName: "",
                email: "",
                password: "",
                conformPassword: ""

            })

        }
       
        // if (!formData.fullName || !formData.email || !formData.password || !formData.conformPassword) {
        //     setError('please fill all the deatils ')
        // }
        // else if (formData.password !== formData.conformPassword) {
        //     setError("password is not matched")
        // }
        // else {
        //     setSuccess('account is created successfully')
        //     setError("")
        //     setFormData({
        //         fullName: "",
        //         email: "",
        //         password: "",
        //         conformPassword: ""

        //     })


        // }
    }
    const handlePassword = () => {
        setShowPassword((password) => !password);
    }
    const handleConformPassword = () => {
        setShowConformPassword((password) => !password);
    }
    const handleChange = (event) => {
        setError("")
        setSuccess("")

        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
         setErrors((errors)=>({
            ...errors,
            [event.target.name]:""
        }))
    }

    return (
        <div className="flex items-center flex-col gap-5   ">
            <NavBar />
            <h1 className=" text-2xl text-blue-600 font-bold ">Join BlogVerse</h1>
            <p className=" text-sm md:text-xl text-gray-600 text-center font-semibold">Create your account and <br></br> start your Blogging journey today</p>
            <form onSubmit={handleSubmit} className="flex flex-col border-1 border-gray-400 w-[90%] sm:w-[50%] lg:w-1/3 py-7 items-center gap-5 mb-5 rounded-2xl">

                <div className="w-[90%] flex flex-col gap-2 ">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <input 
                        value={formData.fullName}
                        onChange={handleChange} 
                        type="text" 
                        name="fullName" 
                        placeholder="Enter your full name"
                        className="border-1 border-gray-700 w-full px-3 py-4 rounded-xl focus:outline-none focus:border-blue-500 " 
                    />
                    {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                </div>

                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <input 
                        value={formData.email} 
                        onChange={handleChange} 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email"
                        className="border-1 border-gray-700 w-full px-3 py-4 rounded-xl focus:outline-none focus:border-blue-500 " 
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}    
                </div>
                
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <div className="relative">
                        <input 
                       value={formData.password} 
                       onChange={handleChange} 
                       type={showPassword ? "password" : "text"} 
                       name="password" 
                       placeholder="Enter your password"
                       className="pl-12 border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-blue-500 " 
                       />
                       < LockKeyhole className="text-gray-500 absolute top-4 left-3" />
                       <p onClick={handlePassword}>{showPassword ? <Eye className="absolute right-3 top-4 text-gray-500" /> : <EyeOff className="absolute top-4 right-3 text-gray-500" />}</p>

                    </div>
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>
                
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Conform Password</p>
                    <div className="relative">
                        <input 
                       value={formData.conformPassword} 
                       onChange={handleChange} 
                       type={showConformPassword ? "password" : "text"} 
                       name="conformPassword" 
                       placeholder="Conform your password"
                       className="pl-12 border-1 border-gray-700 w-full px-3 py-4 rounded-xl focus:outline-none focus:border-blue-500 " 
                    />
                    < LockKeyhole className="absolute top-4 left-3  text-gray-500" />
                    <p onClick={handleConformPassword}>{showConformPassword ? <Eye className="absolute  top-4 right-3 size-6 text-gray-500" /> : <EyeOff className="absolute top-4 right-3 text-gray-500" />}</p>
                    </div>   
                    {errors.conformPassword && <p className="text-red-500">{errors.conformPassword}</p>}
                </div>
               
                <div className="flex gap-2 border-1 border-gray-800 py-5 px-4 w-[90%] rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" className="h-5 w-5" />
                    <p>
                        I agree to the Terms of Services and Privacy Policy
                    </p>
                </div>
                {error && <p className="text-red-400">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <button type="submit" className="w-[90%] flex justify-center bg-purple-500 font-semibold gap-3 rounded-xl py-4 text-white"><CircleUser className=" h-7 w-7 "/><p>Create Acount</p></button>
                <div className="border-[0.5px] border-gray-400 w-[90%] mt-4"></div>
                <p className="text-gray-700 font-semibold">Already have an account? <Link to="/SignIn" className="text-purple-500">Sign In</Link></p>
                <Link to="/" className="text-gray-700  w-[40%] text-sm font-semibold pl-4 md:w-[30%] md:pl-3 md:text-md lg:w-[50%] lg:pl-5.5  lg:text-md xl:w-[35%] xl:pl-10 hover:bg-gray-400 rounded-xl  py-2 cursor-pointer">Back to Home</Link>
            </form>
        </div>
    )
}
export default SignUp