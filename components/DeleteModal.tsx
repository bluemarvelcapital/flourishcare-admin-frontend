import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
  }

const DeleteModal : React.FC<EditModalProps>  = ({isOpen, onClose, title, content}) => {
    if(!isOpen) 
        return null
  return (
        
<div id="popup-modal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className='relative h-full w-full flex justify-center items-center bg-slate-500/50'>
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg py-6 shadow dark:bg-gray-700">
          <div className='w-1/2 mx-auto'>
          <div className='flex justify-center'>
        <FaRegCircleCheck color='#04BD4B' size={30} />
        </div>
        <p className='text-[#0B0E0C] text-2xl font-medium text-center mt-4'>Delete Service</p>
        <p className='text-[#ACACAC] text-sm text-center'>Are you sure you want to delete this service? This action cannot be undone.</p>

      
       

        <div className='flex justify-end gap-x-6 mt-6'>
            <button onClick={() =>{
           onClose()
          }} className='border border-green-500 text-[#98999A] rounded-md px-[40px] py-2'>Cancel</button>
            <button className='bg-green-500 text-white rounded-md px-6 py-2'>Yes, Proceed</button>
        </div>
        </div>

 </div>
    </div>
        </div>
    </div>
  )
}

export default DeleteModal