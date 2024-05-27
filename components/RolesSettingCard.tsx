import React from 'react'
import { IoEllipsisVertical,IoFilterOutline } from "react-icons/io5";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";

const RolesSettingCard = () => {
  return (
    <div>
        {/* main flex div */}
        <div className='flex gap-x-9 justify-between mt-9'>

                {/* roles and permissions div */}
            <div className='border rounded-md px-6 py-6 max-w-[370px] max-h-[330px]'>
                <p className='font-medium'>Roles and Permissions</p>
                <p className='mt-2 text-gray-500'>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <button className='bg-green-500 rounded-md text-white px-9 py-4 mt-4'>Create New Role</button>
            </div>
        


        <div className='border rounded-md px-9 py-6'>

        <div className='flex justify-between '>
            <p className='font-medium'>Admin</p>
        <IoEllipsisVertical />
        </div>
        <p className='text-gray-500 mt-2'>Every member gets basic permissions and functionality by default, settings can be customized for all members and adjustments can be made for individuals in their profile.</p>
        <div className='flex justify-between border rounded-md px-4 mt-4 py-2 items-center'>
            <p className='font-medium text-gray-600'>Services</p>
            <IoIosArrowUp />
        </div>

        <div className='flex justify-between border rounded-md px-4 mt-4 py-2 items-center'>
            <p className='font-medium text-gray-600'>Appointments</p>
            <IoIosArrowDown />
        </div>

        <div className='flex justify-between border rounded-md px-4 mt-4 py-2 items-center'>
            <p className='font-medium text-gray-600'>Bookings</p>
            <IoIosArrowDown />
        </div>

        <div className='flex justify-between border rounded-md px-4 mt-4 py-2 items-center'>
            <p className='font-medium text-gray-600'>Job Applications</p>
            <IoIosArrowDown />
        </div>

        <div className='flex justify-between border rounded-md px-4 mt-4 py-2 items-center'>
            <p className='font-medium text-gray-600'>Blog</p>
            <IoIosArrowDown />
        </div>

        <div className='flex justify-between border rounded-md px-4 mt-4 py-2 items-center'>
            <p className='font-medium text-gray-600'>Settings</p>
            <IoIosArrowDown />
        </div>


        <div className='flex justify-between mt-9'>
            <p className='font-medium'>Manager</p>
            <MdOutlineEdit color='#04BD4B' size={22} />
        </div>





        </div>











        </div>
    </div>
  )
}

export default RolesSettingCard