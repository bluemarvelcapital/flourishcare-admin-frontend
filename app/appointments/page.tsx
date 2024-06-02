'use client'

import Image from "next/image"

import { IoEllipsisVertical,IoFilterOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import MetricCard from "@/components/MetricCard";
import { RiArrowRightSLine } from "react-icons/ri";
import AppointmentTiles from "@/components/AppointmentTiles";
import BookingTiles from "@/components/BookingTiles";
import { SetStateAction, useState } from "react";
import { FaSort } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { Menu } from "@/components/Menu";
import { useAuth } from "@/context/authContext";


const firstimage : string = "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg";
const secondimage : string = "https://img.freepik.com/free-photo/portrait-smiling-happy-young-man-isolated-white_186202-6708.jpg";

interface Items {
  id: number;
  url?: string;
  name: string;
  date: string;
  amount: number;
//   address: string;
  // isActive: boolean;
}

const items : Items[] = [
   {
  id: 1,
  url: secondimage,
  name: "Cameron Williams",
  date: "May 25, 2023 05:43 PM",
  amount: 4800.00,
//   address: "13 Lagos street"
},
{
  id: 2,
  url: secondimage,
  name: "Daniel Elliot",
  date: "May 25, 2023 05:43 PM",
  amount: 4800.00,
//   address: "jubilee street Lagos"

}

]


interface Metrics {
  id: number;
  num: string;
  stat: number;
  name: string;
  time: string;
}

const metrics : Metrics[] = [
   {
  id: 1,
  num: "4,639",
  stat: 2.71,
  name: "Number of Clients",
  time: "2hrs ago"
},
{
  id: 2,
  num: "4,639",
  stat: 2.7143,
  name: "Total Revenue",
  time: "6months ago"
},
 {
  id: 3,
  num: "4,639",
  stat: 2.71,
  name: "Total Bookings",
  time: "6months ago"
}


]

interface Appointments {
  id: number;
 
  name: string;
  tag:string;
  date:string;
  time: string;
}

const appointments : Appointments[] = [
   {
  id: 1,
  name: "Cameron Williams",
  tag:"Appointment ID: Flo-AM334",
  date:"May 25, 2023",
  time: "05:43 PM"
},
{
  id: 2,
  name: "Cameron Williams",
  tag:"Appointment ID: Flo-AM334",
  date:"May 25, 2023",
  time: "05:43 PM"
},
{
  id: 3,
  name: "Cameron Williams",
  tag:"Appointment ID: Flo-AM334",
  date:"May 25, 2023",
  time: "05:43 PM"
},
{
    id: 4,
    name: "Cameron Williams",
    tag:"Appointment ID: Flo-AM334",
    date:"May 25, 2023",
    time: "05:43 PM"
  },
  {
    id: 5,
    name: "Cameron Williams",
    tag:"Appointment ID: Flo-AM334",
    date:"May 25, 2023",
    time: "05:43 PM"
  },
  {
    id: 6,
    name: "Cameron Williams",
    tag:"Appointment ID: Flo-AM334",
    date:"May 25, 2023",
    time: "05:43 PM"
  },
]

export default function Appointment() {
  const [selectedItem, setSelectedItem] = useState<Items | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const router = useRouter();

const handlePress = (item : Items) => {
  setSelectedItem(item);
  setShowModal(true);
}


    // Function to handle search input change
    const handleSearchInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setSearchQuery(e.target.value);
    };
  
    // Filtered data based on search query
    const filteredData = items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

const handleLeave = () => {

  setShowModal(false);
}

interface User {
  name: string;
  [key: string]: any; // Add other user properties as needed
}

const { user, logout } = useAuth();


  return <main>

<div className="h-screen fixed top-0 left-0 lg:w-[18%] w-[300px] border-r-[0.5px] border-r-[#D2DBEC] z-[10] bg-[#fafafa] py-[2rem] md:px-[2rem] px-[1rem] lg:block hidden">
{user && <Menu user={user as User} />}
</div>

    <p className="text-2xl font-semibold">Appointments</p>
    <p className="text-sm mt-1">Welcome to the Appointment Page, your window into the booked appointments by our valued users.</p>

    

     {/* big flex */}
 <div className="flex items-start gap-x-12 ">

  <div>
  <div className="flex justify-between gap-x-9 mt-9">
{
  metrics.map((m) => (
  
    <MetricCard  key={m.id} metric={m} />
  
  ))
}
</div>


    

<div className="flex justify-between mt-9">
  <p className="font-medium">All Appointments</p>
  
<div className="flex items-center gap-x-4">
  <IoIosSearch /><input 
  type="text"
  value={searchQuery}
  onChange={handleSearchInputChange}
  className="border px-2 py-1 rounded-lg"
   placeholder="search by name"/>
  <IoFilterOutline />Filter
  <FaSort />Sort
  
  
   </div>
   
   </div>
<div className="max-h-[500px] overflow-y-auto border rounded-lg mt-4 bg-[#66ACDC]">
      {/* <button className='border border-[#F08E1F] px-6 py-1 rounded' onClick={descendingEvent}>Latest Booking</button> */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
        <thead className="bg-[#66ACDC] text-white">
          <tr >
          {/* <th scope="col" className="px-6 py-3 font-light text-[#F">
              id
            </th> */}
            <th scope="col" className="px-6 py-3 font-light">
              Name
            </th>
            <th scope="col" className="px-6 py-3 font-light ">
              date
            </th>
            <th scope="col" className="px-6 py-3 font-light ">
              Amount
            </th>
       
            {/* <th scope="col" className="px-6 py-3 font-light ">
              Address
            </th> */}
            <th scope="col" className="px-6 py-3 font-light ">
            
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
     
               <td className="px-6 py-6 flex gap-x-2 items-center"><img src={item.url} className='object-cover h-5 w-5 rounded-full '/>{item.name}</td>
                <td className="px-6 py-2">{item.date}</td>
                <td className="px-6 py-2">€{item.amount}</td>
                {/* <td className="px-6 py-2">{item.address}</td> */}
                {/* <div onMouseEnter={() => handlePress(item)} onMouseLeave={handleLeave} className="relative cursor-pointer"> */}
        
                  <button className="border px-3 py-1"><MdLocalPhone size={20} /></button>
                  <button className="bg-[#04BD4B] px-3 py-1 ml-2 text-white"><div className="flex items-center gap-x-2"><MdOutlineMessage size={20} />Message</div></button>

                {/* {selectedItem && showModal && (  <div className="bg-white absolute z-100 border rounded-lg right-16 top-[-15px]">
                    <p className="border-b hover:bg-blue-100 hover:text-blue-600 px-6 py-2">View</p>
                    <p className="border-b hover:bg-blue-100 hover:text-blue-600 px-6 py-2">Delete</p>

                  </div>)}
                  </div> */}

                {/* <Link to={`/bookingitem/${item.id}`}><td className="px-6 py-2"><HiOutlineArchiveBox className='mt-3'/></td></Link>
                <td className="px-6 py-2" onClick={() => handleDelete(item.id)}><SlTrash className='text-red-800'/></td> */}
               
              </tr>
            ))}
        </tbody>
      </table>
      </div>
  </div>


<div>
<div className="max-h-[500px] overflow-y-auto border rounded-lg mt-9 px-6">
      {/* <button className='border border-[#F08E1F] px-6 py-1 rounded' onClick={descendingEvent}>Latest Booking</button> */}
      <div className="flex justify-between mt-4">
    <p className="font-semibold">Pending Appointments <span className="bg-blue-400 rounded-full px-[5px] py-[2px] h-2 w-4 text-white text-[12px]">6</span></p>
    <p className="flex items-center text-green-600 font-medium text-sm">See all <RiArrowRightSLine /></p>
    </div>
 
      {
        appointments.map((app) => (
          <div onClick={() => { router.push(`/appointmentpage/${app.id}`) }} >
          <AppointmentTiles key={app.id} app={app}/>
          </div>
        ))
      }

  
    <div className="mb-4"></div>
      </div>

     
</div>

</div>

 
  </main>
}
