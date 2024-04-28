import React from 'react'
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { AiOutlineDownload } from "react-icons/ai";


const firstimage : string = "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg";
const pdf : string = "https://blog.idrsolutions.com/app/uploads/2020/10/pdf-1.png";

const page = () => {
  return (
    <div>
        <p className='text-[#2A2B2B] font-medium text-2xl'>User Details</p>
    <div className='border rounded-xl py-9 px-6'>
        <p className='text-[#2A2B2B] font-medium text-xl mt-6 ml-6'>Personal Information</p>

<div className='flex justify-between mt-9 gap-x-12'>

        <div className='flex flex-col items-center'>
        <img src={firstimage} className='object-cover h-[71px] w-[70px] rounded-full' />
        <p className='text-white px-2 rounded-full bg-[#1C871B] flex justify-center mt-4'>Verified <HiOutlineCheckBadge color='#1C871B' /></p>
        <button className='bg-[#66ACDC] text-white px-6 py-1 rounded-md mt-4'>Contact User</button>
        </div>


        <div>
            <p className='text-[#555656] font-light'>Full name</p>
            <p className='text-[#555656] font-medium text-lg'>Cameron Williams</p>

            <p className='text-[#555656] font-light mt-9'>Phone Number</p>
            <p className='text-[#555656] font-medium text-lg'>+(308) 555-0121</p>
        </div>


        <div>
            <p className='text-[#555656] font-light'>Birthday</p>
            <p className='text-[#555656] font-medium text-lg'>24th July 1960</p>

            <p className='text-[#555656] font-light mt-9'>Email</p>
            <p className='text-[#555656] font-medium text-lg'>Cameron_williams@cv.edu</p>
        </div>


        <div>
            <p className='text-[#555656] font-light'>Gender</p>
            <p className='text-[#555656] font-medium text-lg'>Male</p>

            <p className='text-[#555656] font-light mt-9'>Address</p>
            <p className='text-[#555656] font-medium text-lg max-w-[160px]'>2715 Ash Dr.San Jose, South Dakota</p>
        </div>


        </div>

    

    </div>

    <div className='border rounded-xl p-9 mt-10'>

        <p className='text-[#2A2B2B] font-medium text-xl mt-6 ml-6'>Attachement Files</p>


        <div className='flex justify-evenly mt-6'>
        <div><p>Care Plan</p>
        <div className='bg-[#F7F7F7] py-4 px-8 flex justify-center items-center gap-x-2'>
            
            <img src={pdf} className='object-cover w-4 h-4' />
            <p className='text-sm'>PLAN-X0236</p>
            <AiOutlineDownload />
            </div>
            </div>

           
            <div><p>Contract</p>
            <div className='bg-[#F7F7F7] py-4 px-8 flex justify-center items-center gap-x-2'>
            <img src={pdf} className='object-cover w-4 h-4' />
            <p className='text-sm'>PLAN-X0236</p>
            <AiOutlineDownload />
            </div>
            </div>


            <div><p>Invoice</p>
            <div className='bg-[#F7F7F7] py-4 px-8 flex justify-center items-center gap-x-2'>
            <img src={pdf} className='object-cover w-4 h-4' />
            <p className='text-sm'>PLAN-X0236</p>
            <AiOutlineDownload />
            </div>
            </div>
            </div>

<div className='flex justify-end'>
<button className='bg-green-500 text-white rounded-md px-6 py-1 mt-5'>Upload Documents</button>
</div>


        </div>


    </div>
  )
}

export default page