import React from 'react'

const PreferenceSettingCard = () => {
  return (
    <div className='flex justify-between'>
    <div className='border rounded-lg px-9 py-6 mt-9'>
       <p className="text-2xl font-semibold mt-12">Preferences</p>
    <p className="text-md mt-1 text-gray-500">Customization according to your preferences.</p>

<div className='flex flex-col '>
    <div className='flex items-center gap-x-4 mt-9'>
    <label className='font-semibold'>Time Zone</label>
    <input className='font-medium px-2 py-2 border rounded-lg w-[450px]' placeholder='(GMT-4) Pacific Standard Time' />
    </div>


    <div className='flex items-center gap-x-4 mt-9'>
    <label className='font-semibold'>Language</label>
    <input className='font-medium px-2 py-2 border rounded-lg w-[450px]' placeholder='English (US)'/>
    </div>
    
    
    </div>

    </div>
    </div>
  )
}

export default PreferenceSettingCard