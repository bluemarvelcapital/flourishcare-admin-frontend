'use client'

import { useState } from "react";
import { Logo } from "@/components/Logo";
import AccountSettingCard from "@/components/AccountSettingCard";
import RolesSettingCard from "@/components/RolesSettingCard";
import PreferenceSettingCard from "@/components/PreferenceSettingCard";
import PrivacySettingCard from "@/components/PrivacySettingCard";

const page = () => {
  const [look, setLook] = useState(true);
  const [look2, setLook2] = useState(false);
  const [look3, setLook3] = useState(false);
  const [look4, setLook4] = useState(false);
  const [look5, setLook5] = useState(false);

  const changeLook = () => {
    setLook(!look);
    setLook2(false)
    setLook3(false)
    setLook4(false)
    setLook5(false)
  }

  const changeLook2 = () => {
    setLook2(!look2);
    setLook(false);
    setLook3(false)
    setLook4(false)
    setLook5(false)
  }
  const changeLook3 = () => {
    setLook3(!look3);
    setLook(false);
    setLook2(false)
    setLook4(false)
    setLook5(false)
  }
  const changeLook4 = () => {
    setLook4(!look4);
    setLook2(false);
    setLook3(false)
    setLook5(false)
    setLook(false)
  }
  const changeLook5= () => {
    setLook5(!look5);
    setLook2(false);
    setLook3(false)
    setLook4(false)
    setLook(false)
  }
  return (
    <div>
        <p className="text-2xl font-semibold">Settings</p>
        <p className="text-sm mt-1">This page allows you to customize and manage various aspects of your account and preferences</p>
       
        <div className='flex justify-start gap-x-9 mt-10 relative'>
            <p onClick={changeLook} className={`${look ? 'text-blue-400' : 'text-gray-600'} font-medium cursor-pointer`}>Account</p>
           
            <p onClick={changeLook2} className={`${look2 ? 'text-blue-400' : 'text-gray-600'} font-medium cursor-pointer`}>Roles & Permissions</p>
            <p onClick={changeLook3} className={`${look3 ? 'text-blue-400' : 'text-gray-600'} font-medium cursor-pointer`}>Team Members</p>
            <p onClick={changeLook4} className={`${look4 ? 'text-blue-400' : 'text-gray-600'} font-medium cursor-pointer`}>Privacy & Security</p>
            <p onClick={changeLook5} className={`${look5 ? 'text-blue-400' : 'text-gray-600'} font-medium cursor-pointer`}>Preferences</p>
        </div>

   {look? (<div className='bg-blue-400 h-1 w-[64px] absolute bottom-[574px]'></div>) : null }
  
   {look2 ? (<div className='bg-blue-400 h-1 w-[94px] absolute bottom-[574px] left-[500px]'></div>) : null }
        {look3 ? (<div className='bg-blue-400 h-1 w-[94px] absolute bottom-[574px] left-[670px]'></div>) : null}
        {look4 ? (<div className='bg-blue-400 h-1 w-[94px] absolute bottom-[574px] left-[835px]'></div>) : null}
        {look5 ? (<div className='bg-blue-400 h-1 w-[94px] absolute bottom-[574px]left-[1020px] '></div>) : null}
        <div className='border-b-2 mt-8'> </div>



    {look ? (<AccountSettingCard />) : null }
    {look2 ? (<RolesSettingCard />) : null }
    {look4 ? (<PrivacySettingCard />) : null }
    {look5 ? (<PreferenceSettingCard />) : null }




    </div>
  )
}

export default page