import React from 'react'
import { Logo } from './Logo'



const AccountSettingCard = () => {
  return (
    <div>
           <div className="flex gap-x-9 justify-between mt-9">

<div className="text-center">
<p className="text-gray-600 font-medium text-xl ">Company Info</p>
<Logo/>
</div>

<div className="grid grid-cols-2 gap-x-9 gap-y-9">
  <div>
  <p className="text-gray-500">Account Name</p>
  <input className="w-[450px] px-2 py-2 border rounded-md" placeholder="Flourish Advanced Care" />
  </div>

  <div>
  <p className="text-gray-500">Business Address</p>
  <input className="w-[450px] px-2 py-2 border rounded-md" placeholder="Enter member name" />
  </div>

  <div>
  <p className="text-gray-500">Email Address</p>
  <input className="w-[450px] px-2 py-2 border rounded-md" placeholder="Enter email address" />
  </div>

  <div>
  <p className="text-gray-500">Admin Number</p>
  <input className="w-[450px] px-2 py-2 border rounded-md" placeholder="Enter member name" />
  </div>

  <div>
  <p className="text-gray-500">City</p>
  <input className="w-[450px] px-2 py-2 border rounded-md" placeholder="e.g Florida" />
  </div>

  <div>
  <p className="text-gray-500">Password</p>
  <input className="w-[450px] px-2 py-2 border rounded-md" placeholder="Enter member name" />
  </div>

  <div>
  <p className="text-gray-500">Postal Code</p>
  <input className="w-[450px] px-2 py-2 border rounded-md" placeholder="e.g 45962" />
  </div>

  <div>
  <p className="text-gray-500">Country</p>
  <input className="w-[450px] px-2 py-2 border rounded-md" placeholder="e.g United States of America" />
  </div>


</div>


</div>
    </div>
  )
}

export default AccountSettingCard