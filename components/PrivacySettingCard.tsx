import React, { useState } from 'react'
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const PrivacySettingCard = () => {
    const [toggle, setToggle] = useState<Boolean>(true)
    const [toggle2, setToggle2] = useState<Boolean>(true)
    const [toggle3, setToggle3] = useState<Boolean>(true)
    

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleToggle2 = () => {
        setToggle2(!toggle2)
    }

    const handleToggle3 = () => {
        setToggle3(!toggle3)
    }
  return (
    <div className='border rounded-xl px-9 py-6 mt-6'>
        <p className='text-2xl font-semibold'>Security</p>


        <p className='font-semibold mt-9'>Email Address</p>
        <p className='text-gray-500'>This is the email address associated with your account</p>

        <p className='font-semibold mt-9'>Password</p>
        <div className='flex justify-between items-center'>
        <p className='text-gray-500'>Set a unique password to protect your account</p>
        <div className='border rounded-lg text-gray-600 text-md px-4 py-1'>Change Password</div>
        </div>

        <p className='font-semibold mt-9'>Push notification</p>
        <div className='flex justify-between items-center'>
        <p className='text-gray-500'>This will be sent to your phone when you’re online or offline</p>
        <button onClick={handleToggle}>
        {toggle ? (<BsToggleOn size={30} color='#04BD4B'/>) : (<BsToggleOff size={30} color='#04BD4B'/>)}</button>
        </div>

        <p className='font-semibold mt-9'>Email Notification</p>
        <div className='flex justify-between items-center'>
        <p className='text-gray-500'>This will be sent to mic*******an@gmail.com when you’re online or offline</p>
        <button onClick={handleToggle2}>
        {toggle2 ? (<BsToggleOn size={30} color='#04BD4B'/>) : (<BsToggleOff size={30} color='#04BD4B'/>)}</button>
        </div>

        <p className='font-semibold mt-9'>2-step Verification</p>
        <div className='flex justify-between items-center'>
        <p className='text-gray-500'>Make your account extra secure by setting 2 factor authentication</p>
        <button onClick={handleToggle3}>
        {toggle3 ? (<BsToggleOn size={30} color='#04BD4B'/>) : (<BsToggleOff size={30} color='#04BD4B'/>)}</button>
        </div>

    </div>
  )
}

export default PrivacySettingCard