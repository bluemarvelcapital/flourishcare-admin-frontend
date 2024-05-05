'use client'


import Image from "next/image"

import { IoEllipsisVertical } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import MetricCard from "@/components/MetricCard";
import { RiArrowRightSLine } from "react-icons/ri";
import AppointmentTiles from "@/components/AppointmentTiles";
import BookingTiles from "@/components/BookingTiles";
import {SetStateAction, useState } from "react";
import { useRouter } from 'next/navigation';


const firstimage: string = "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg";


interface Appointments {
    id: number;
    url: string;
    name: string;
    tag: string;
    date: string;
    time: string;
    service: string;
    amount: number;
    status: string;
  }
  
  const appointments: Appointments[] = [
    {
      id: 1,
      url: firstimage,
      name: "Cameron Williams",
      tag: "Appointment ID: Flo-AM334",
      date: "May 25, 2023",
      time: "05:43 PM",
      service: "Home care domicillary",
      amount: 4800.00,
      status: "Completed",
    },
    {
      id: 2,
      url: firstimage,
      name: "Daniel Stallion",
      tag: "Appointment ID: Flo-AM334",
      date: "May 25, 2023",
      time: "05:43 PM",
      service: "Home care domicillary",
      amount: 4800.00,
      status: "Completed",
    },
    {
      id: 3,
      url: firstimage,
      name: "George Lukas",
      tag: "Appointment ID: Flo-AM334",
      date: "May 25, 2023",
      time: "05:43 PM",
      service: "Home care domicillary",
      amount: 4800.00,
      status: "Cancelled",
    },
  
  ]
  

const page = () => {

  const [searchQuery, setSearchQuery] = useState<string>('');

      // Function to handle search input change
      const handleSearchInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSearchQuery(e.target.value);
      };
    
      // Filtered data based on search query
      const filteredData = appointments.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  return (
    <div>
        
<div className="border rounded-lg">

<div className="px-4 flex justify-start gap-x-9 mt-4 border-b-2">
<p>History</p>
<p>Approved</p>
<p>Pending</p>
<p>cancelled</p>
</div>


<div className="flex justify-between mt-9 ">
      

      <input 
      type="text"
      value={searchQuery}
      onChange={handleSearchInputChange}
      placeholder="Search by name"
       className="border rounded-lg px-4 py-2 mx-4 bg-gray-200" 
       />
          {/* <IoIosSearch />Search */}


      </div>
      <div className="max-h-60 overflow-y-auto border mt-4">
        {/* <button className='border border-[#F08E1F] px-6 py-1 rounded' onClick={descendingEvent}>Latest Booking</button> */}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
          <thead className="bg-[#D3F4FB] text-[#555656]">
            <tr >
              {/* <th scope="col" className="px-6 py-3 font-light text-[#F">
            id
          </th> */}
              <th scope="col" className="px-6 py-3 font-light">
                Name
              </th>
              <th scope="col" className="px-6 py-3 font-light ">
                Date
              </th>
              <th scope="col" className="px-6 py-3 font-light ">
                Appointment ID
              </th>

              <th scope="col" className="px-6 py-3 font-light ">
                Service
              </th>
              <th scope="col" className="px-6 py-3 font-light ">
                Amount
              </th>

              <th scope="col" className="px-6 py-3 font-light ">
                Status
              </th>
  

              {/* <th scope="col" className="px-6 py-3 font-light text-[#F08E1F]">
            edit
          </th>
          <th scope="col" className="px-6 py-3 font-light text-[#F08E1F]">
            delete
          </th> */}

            </tr>
          </thead>
          <tbody>

            {filteredData.map((item) => (
              <tr
                className="bg-white hover:bg-gray-200 text-[#6A6B6C]"
                key={item.id}
              //  onClick={()=>navigate(`/reservedetail/${item._id}`)}
              >
                {/* <td className="px-6 py-2">{item.id}</td> */}

                <td className="px-6 py-2 flex gap-x-2 items-center"><img src={item.url} className='object-cover h-5 w-5 rounded-full ' />{item.name}</td>
                <td className="px-6 py-2">{item.date}</td>
                <td className="py-1 bg-blue-200 text-gray-600 font-medium flex justify-center">{item.tag}</td>
                <td className="px-6 py-2">{item.service}</td>
                <td className="px-6 py-2">${item.amount}</td>
               {item.status == "Completed" ? (<td className="px-2 py-2 bg-green-200 text-green-600 font-medium rounded-full flex justify-center">{item.status}</td>) : (<td className="px-2 py-2 bg-red-200 text-red-600 font-medium rounded-full flex justify-center">{item.status}</td>)} 


             

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    
    </div>

    


 
    </div>
  )
}

export default page