import React from 'react'
import { TiCloudStorageOutline } from "react-icons/ti";

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
  }

const EditModal : React.FC<EditModalProps>  = ({isOpen, onClose, title, content}) => {
    if(!isOpen) 
        return null
  return (
        
<div id="popup-modal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className='relative h-full w-full flex justify-center items-center bg-slate-500/50'>
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg p-6 shadow dark:bg-gray-700">
        <p className='text-[#0B0E0C] text-2xl font-medium'>Edit Service</p>
        <p className='text-[#ACACAC] text-sm'>Edit the details below to make changes to the service.</p>

        <p className='text-[#2A2B2B] text-lg mt-6'>Title</p>
        <input className='border rounded-md text-gray-500 w-[590px] py-2 px-4' placeholder='First name' />

        <p className='text-[#2A2B2B] text-lg mt-6'>Price</p>
        <input className='border rounded-md text-gray-500 w-[590px] py-2 px-4' placeholder='' />

        <p className='text-[#2A2B2B] text-lg mt-6'>Category</p>
        <input className='border rounded-md text-gray-500 w-[590px] py-2 px-4' placeholder='Create a category' />

        <p className='text-[#2A2B2B] text-lg mt-6'>Description</p>
        <textarea className='border rounded-md text-gray-500 w-[590px] h-[160px] py-2 px-4' placeholder='Create content description' />

        <p className='text-[#2A2B2B] text-lg mt-6'>Upload a media</p>
        {/* <textarea className='border rounded-md text-gray-500 w-[590px] h-[100px] py-2 px-4' placeholder='Create content description' /> */}
        <div className='border rounded-md text-gray-500 w-[590px] h-[100px] py-2 px-4' >
            <div className='w-1/2 mx-auto'>
                <div className='w-1/2 mx-auto'>
             <TiCloudStorageOutline color='#04BD4B' size={30} />
             </div>
             <p className='font-medium'><span className='text-green-500'>Upload a file</span> or drag and drop</p>
             <p className='text-gray-500'>PNG,JPG up to 5MB</p>
             </div>
        
        </div>
       

        <div className='flex justify-end gap-x-6 mt-6'>
            <button onClick={() =>{
           onClose()
          }} className='border border-green-500 text-[#98999A] rounded-md px-[40px] py-2'>Cancel</button>
            <button className='bg-green-500 text-white rounded-md px-6 py-2'>Save Changes</button>
        </div>

 </div>
    </div>
        </div>
    </div>
  )
}

export default EditModal