'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import landingImage from "../../../public/images/landing-page-image.png";
import Logo from "../../../public/logo2.png";
import googleLogo from "../../../public/images/google-logo.png";
import { Button, Form, Input } from "antd";
import { useLoginMutation } from "@/services/auth.service";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useAuth } from "@/context/authContext";
import { useState } from "react"; 
import axios from 'axios';



export default function Home() {
    const { login, user } = useAuth();
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')  
    const [error,setError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter()

    const URL = process.env.NEXT_PUBLIC_API_URL as string;

    console.log("henry look o", URL)


    const handleSubmit = async() => {
        //e.preventDefault()
        setIsLoading(true)
        try{
          const res = await axios.post(URL+"/api/v1/auth/login", {email,password})
          console.log("henry look o", process.env.BASE_URL)
    
          const {accessToken, user} = res.data.data;
    
          if(res.status == 200){
            localStorage.setItem("access_token", accessToken);
            // localStorage.setItem("currentUser", JSON.stringify(res.data))
            login(user)
         
            console.log(res.data)
            router.push('/');
          }
    
        }
        catch(err) {
          setError(true)
          console.log(err)
        } finally {
          setIsLoading(false)
        }
    }

   


    return (
        <div className="grid sm:grid-cols-12 bg-white w-full xl:gap-x-14">
            <div className="md:col-span-7 sm:col-span-6  w-full h-full">
                <Image
                    src={landingImage}
                    alt="landing page image"
                    className="normal-case w-full h-[100dvh]"
                />
            </div>{" "}
            <div
                className="md:col-span-5 sm:col-span-6 w-full text-sm xl:text-lg xl:px-10 px-2 md:px-4 h-full"
                style={{
                    margin: 'auto 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'center',
                }}
            >
                <header className="flex items-center flex-col">
                    <Image src={Logo} alt="Flourish care logo" className="w-60 " style={{ margin: '20px 0' }} />{" "}
                    <p className="font font-semibold text-xl xl:text-2xl 2xl:text-4xl mb-1 xl:mb-5">
                        Welcome back Admin 👋{" "}
                    </p>
                </header>
                <div id="input-section">
   

                            
                                {/* toast.success('Login successful') */}

                    <div id="password-input-div" className="flex flex-col">
                            <input
                                type="text"
                                id="email-input"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Please enter email"
                                className=" focus:border-secondary duration-300 rounded-md 2xl:py-4 py-2 px-4 outline-none border-solid border-2 2xl:mb-6 mb-4"
                            />
                   

      
                            <div id="password-input-div" className="flex flex-col">
                                <input
                                    onChange={(e) => setPassword(e.target.value )}
                                    type="password"
                                    id="password-input"
                                    placeholder="Please enter password"
                                    className=" focus:border-secondary duration-300 rounded-md 2xl:py-4 py-2 px-4 outline-none border-solid border-2"
                                />
                            </div>
                  
                        {/* <h3 className="text-secondary flex justify-end mb-4" style={{ cursor: 'pointer' }}>
                            Forgot Password ?
                        </h3> */}
                        <div
                            id="sign-up"
                            className="flex flex-col justify-center items-center"
                        >
                            <button onClick={handleSubmit} className="bg-secondary w-full rounded-md text-white flex flex-row justify-center items-center" style={{ padding: '25px', marginTop: '20px' }}>
                                <p>{isLoading ? 'Loading...' : 'Login'}</p>
                            </button>
                            {/* <p className="mt-4 2xl:mt-6 text-[#98999A]">
                                Don&apos;t have an account?{" "}
                                <span className="text-secondary" style={{ cursor: 'pointer' }}>Sign Up</span>
                            </p> */}
                        </div>{" "}
             

                </div>
                {/* <div className="flex flex-row mt-5">
                    <div className="border-b border-[#EEEEEE] flex-1"> </div>
                    <p className="mx-3 text-[#555656]">or</p>
                    <div className="border-b border-[#EEEEEE] flex-1"> </div>{" "}
                </div>{" "}
                <button className="flex justify-center w-full hover:bg-secondary mt-5 rounded-md border border-secondary py-1 2xl:py-4 duration-200  hover:border-secondary">
                    <Image src={googleLogo} alt="google logo" />
                    <p className="ml-2">Continue With Google</p>{" "}
                </button> */}
            </div >
        </div >
        </div >
    );
}
