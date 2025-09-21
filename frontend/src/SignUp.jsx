import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import { CircleUser } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from "react";

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
        <div className="flex items-center flex-col min-h-screen bg-gray-100 gap-5   ">
            <NavBar />
            <h1 className=" text-2xl md:text-3xl text-blue-600 font-bold ">Join Blog Verse</h1>
            <p className=" text-lg md:text-xl text-gray-500 text-center font-semibold">Create your account and <br></br> start your Blogging journey today</p>
            <form onSubmit={handleSubmit} className="flex flex-col border-1 border-black w-[95%] lg:w-1/4 md:w-[60%] md:py-5 bg-white items-center rounded-xl gap-5">
                <div className="w-[90%] flex flex-col gap-2  relative">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <input value={formData.fullName} onChange={handleChange} type="text" name="fullName" placeholder="Enter your full name"
                        className="border-1 border-gray-700 pb-2 w-full px-8 py-2 rounded-2xl focus:outline-none focus:border-blue-500 " />
                    <UserRound className=" absolute top-10 left-2  text-gray-600 size-5 pt-1" />
                    
                </div>
                {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                <div className="w-[90%] flex flex-col gap-2 relative">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <input value={formData.email} onChange={handleChange} type="email" name="email" placeholder="Enter your email"
                        className="border-1 border-gray-700 w-full px-8 py-2 rounded-2xl focus:outline-none focus:border-blue-500 " />
                    <Mail className="absolute top-10 left-2 text-gray-600 size-5 pt-1" />
                    
                </div>
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <div className="w-[90%] flex flex-col gap-2 relative">
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <input value={formData.password} onChange={handleChange} type={showPassword ? "password" : "text"} name="password" placeholder="Enter your password"
                        className="border-1 border-gray-700  w-full px-8 py-2 rounded-2xl focus:outline-none focus:border-blue-500 " />
                    < LockKeyhole className="absolute top-10  text-gray-600 left-2 size-5 pt-1 " />
                    <p onClick={handlePassword}>{showPassword ? <Eye className="absolute top-10 right-2  size-6 text-gray-600 pt-1 hover:text-gray-800 cursor-pointer " /> : <EyeOff className="absolute top-10 right-2  size-6 text-gray-600 pt-1  hover:text-gray-800 cursor-pointer" />}</p>

                </div>
                {errors.password && <p className="text-red-500">{errors.password}</p>}
                <div className="w-[90%] flex flex-col gap-2 relative">
                    <p className="text-md text-gray-700 font-semibold">Conform Password</p>

                    <input value={formData.conformPassword} onChange={handleChange} type={showConformPassword ? "password" : "text"} name="conformPassword" placeholder="Conform your password"
                        className="border-1 border-gray-700 w-full px-8 py-2 rounded-2xl focus:outline-none focus:border-blue-500 " />
                    < LockKeyhole className="absolute top-10 left-2  text-gray-600 size-5 pt-1 " />
                    <p onClick={handleConformPassword}>{showConformPassword ? <Eye className="absolute  top-10 right-2 size-6 text-gray-500 pt-1  hover:text-gray-800 cursor-pointer" /> : <EyeOff className="absolute top-10 right-2  size-6 text-gray-600 pt-1  hover:text-gray-800 cursor-pointer" />}</p>


                </div>
                {errors.conformPassword && <p className="text-red-500">{errors.conformPassword}</p>}
                <div className="flex gap-2 border-1 border-gray-800 py-3 w-[90%] rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id="" className=" ml-2 h-4 w-4" />
                    <p className="font-semibold text-sm text-gray-800">
                        I agree to the Terms of Services and Privacy Policy
                    </p>
                </div>
                {error && <p className="text-red-400">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <button type="submit" className="w-[90%] flex justify-center gap-2 bg-purple-500 font-semibold rounded-xl py-2 text-white hover:bg-purple-700 cursor-pointer"><CircleUser /><p>Create Acount</p></button>
                <div className="border-1 border-gray-400 w-[90%]"></div>
                <p className="font-semibold">Already have an account? <Link to="/SignIn" className="text-purple-500 hover:underline cursor-pointer">Sign In</Link></p>
                <Link to="/" className="text-gray-700  w-[40%] text-sm font-semibold pl-4 md:w-[30%] md:pl-3 md:text-md lg:w-[50%] lg:pl-5.5  lg:text-md xl:w-[35%] xl:pl-10 hover:bg-gray-400 rounded-xl  py-2 cursor-pointer">Back to Home</Link>
            </form>
        </div>
    )
}
export default SignUp