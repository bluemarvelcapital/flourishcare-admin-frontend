import Image from "next/image"

import { IoEllipsisVertical,IoFilterOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import ServiceMetricCard from "@/components/ServiceMetricCard";
import { RiArrowRightSLine } from "react-icons/ri";
import AppointmentTiles from "@/components/AppointmentTiles";
import BookingTiles from "@/components/BookingTiles";
import { FaSort } from "react-icons/fa6";




const firstimage : string = "https://static.vecteezy.com/system/resources/previews/000/273/744/non_2x/valentine-s-day-background-with-hearts-design-vector.jpg";
// const secondimage : string = "https://img.freepik.com/free-photo/portrait-smiling-happy-young-man-isolated-white_186202-6708.jpg";

interface Items {
  id: number;
  url?: string;
  title: string;
  category: string;
  description: string;
  price: number;
  created : string;
  // isActive: boolean;
}

const items : Items[] = [
   {
  id: 1,
  url: firstimage,
  title: "Home Care - Domiciliary",
  category: "Social Care",
  description: "Our home care service assists with",
  price : 2000,
  created: "May 25, 2023 05:43 PM"
},
{
    id: 2,
    url: firstimage,
    title: "Home Care - Domiciliary",
    category: "Social Care",
    description: "Our home care service assists with",
    price : 2000,
    created: "May 25, 2023 05:43 PM"
  },
  {
    id: 3,
    url: firstimage,
    title: "Home Care - Domiciliary",
    category: "Social Care",
    description: "Our home care service assists with",
    price : 2000,
    created: "May 25, 2023 05:43 PM"
  },

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

]

export default function Service() {
  return <main>
    <div className="flex justify-between items-center">
        <div>
    <p className="text-2xl font-semibold">Services</p>
    <p className="text-sm mt-1">Welcome to the Service Section</p>
    </div>

    <button className="bg-green-500 px-6 py-2 rounded-md text-white font-light">Create New Service</button>
    </div>



  <div>
  <div className="flex justify-between gap-x-9 mt-9">
{
  metrics.map((m) => (
  
    <ServiceMetricCard key={m.id} metric={m} />
  
  ))
}
</div>


    

<div className="flex justify-between mt-9">
  <p className="font-medium">All Services</p>
  
<div className="flex items-center gap-x-4">
  <IoIosSearch />Search
  <IoFilterOutline />Filter
  <FaSort />Sort
  

   </div>
   
   </div>
<div className="max-h-60 overflow-y-auto border rounded-lg mt-4">
      {/* <button className='border border-[#F08E1F] px-6 py-1 rounded' onClick={descendingEvent}>Latest Booking</button> */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
        <thead className="bg-[#D3F4FB] text-[#555656]">
          <tr >
          {/* <th scope="col" className="px-6 py-3 font-light text-[#F">
              id
            </th> */}
            <th scope="col" className="px-6 py-3 font-light">
              Title
            </th>
            <th scope="col" className="px-6 py-3 font-light ">
              Category
            </th>
            {/* <th scope="col" className="px-6 py-3 font-light ">
              Phone Number
            </th> */}
       
            <th scope="col" className="px-6 py-3 font-light ">
              Description
            </th>
            <th scope="col" className="px-6 py-3 font-light ">
                Price
            </th>
            <th scope="col" className="px-6 py-3 font-light ">
                Created
            </th>
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
      
            {items.map((item) => (
              <tr
                className="bg-white hover:bg-gray-200 text-[#6A6B6C]"
                key={item.id}
                //  onClick={()=>navigate(`/reservedetail/${item._id}`)}
              >
                 {/* <td className="px-6 py-2">{item.id}</td> */}
     
               <td className="px-6 py-2 flex gap-x-2 items-center"><img src={item.url} className='object-cover h-5 w-9 rounded-md '/>{item.title}</td>
                {/* <td className="px-6 py-2">{item.title}</td> */}
                <td className="px-6 py-2">{item.category}</td>
                <td className="px-6 py-2">{item.description}</td>
                <td className="px-6 py-2">€{item.price}</td>
                <td className="px-6 py-2">{item.created}</td>
                <IoEllipsisVertical />

                {/* <Link to={`/bookingitem/${item.id}`}><td className="px-6 py-2"><HiOutlineArchiveBox className='mt-3'/></td></Link>
                <td className="px-6 py-2" onClick={() => handleDelete(item.id)}><SlTrash className='text-red-800'/></td> */}
               
              </tr>
            ))}
        </tbody>
      </table>
      </div>
  </div>






 
  </main>
}
