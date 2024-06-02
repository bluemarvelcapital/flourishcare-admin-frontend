'use client'

import Image from "next/image"
import "./globals.css"
import { IoEllipsisVertical } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import MetricCard from "@/components/MetricCard";
import { RiArrowRightSLine } from "react-icons/ri";
import AppointmentTiles from "@/components/AppointmentTiles";
import BookingTiles from "@/components/BookingTiles";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import DeleteModal from "@/components/DeleteModal";
import { Menu } from "@/components/Menu";
import { useAuth } from "@/context/authContext";
import axios from 'axios'
import PublishModal from "@/components/PublishModal";


const firstimage: string = "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg";
const secondimage: string = "https://img.freepik.com/free-photo/portrait-smiling-happy-young-man-isolated-white_186202-6708.jpg";

interface Items {
  id: number;
  url?: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  address: string;

  // isActive: boolean;
}

// const items: Items[] = [
//   {
//     id: 1,
//     url: firstimage,
//     firstname: "Henry",
//     lastname:"Eyo",
//     email: "henry.eyo2@gmail.com",
//     phone: 9062056518,
//     address: "13 Lagos street",

//   },
//   {
//     id: 2,
//     url: secondimage,
//     name: "Simisola",
//     email: "simisola411@gmail.com",
//     phone: 3965373338,
//     address: "jubilee street Lagos",
  

//   }

// ]


interface Metrics {
  id: number;
  num: string;
  stat: number;
  name: string;
  time: string;
}

const metrics: Metrics[] = [
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
    name: "Cameron Williams",
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
    name: "Cameron Williams",
    tag: "Appointment ID: Flo-AM334",
    date: "May 25, 2023",
    time: "05:43 PM",
    service: "Home care domicillary",
    amount: 4800.00,
    status: "Cancelled",
  },

]

export default function Home() {
  const [data, setData] = useState<Items[]>([]);
  const [selectedItem, setSelectedItem] = useState<Items | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const router = useRouter();

  console.log("wait o",data)

  const handlePress = (item: Items) => {
    setSelectedItem(item);
    setShowModal(true);
  }

   
  const openPublishModal = () => {
    setIsPublishModalOpen(true);
  }



  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  }



  interface User {
    name: string;
    [key: string]: any; // Add other user properties as needed
  }
  
  const URL = process.env.NEXT_PUBLIC_API_URL as string;




//fetching User endpoint
const fetchData = async() => {
  try{

    const accessToken = localStorage.getItem("access_token");

    if(!accessToken){
          // Handle the case where the access token is not available
      console.error('Access token not found')
    }

    const res = await axios.get(URL+"/api/v1/user/", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setData(res.data.data.users);
    console.log("Henry look see users here ->", res.data)
  } catch (error){
    console.log('Error fetching data', error);
  }
};

useEffect(() => {
  fetchData();
}, [])

  const { user, logout } = useAuth();

  return <main >

<div className="h-screen fixed top-0 left-0 lg:w-[18%] w-[300px] border-r-[0.5px] border-r-[#D2DBEC] z-[10] bg-[#fafafa] py-[2rem] md:px-[2rem] px-[1rem] lg:block hidden">
{user && <Menu user={user as User} />}
</div>


<div className="flex justify-between items-center">
    
<div>
  <p className="text-2xl font-semibold">General Overview</p>
  <p className="text-sm mt-1">Welcome to the Flourish admin dashboard.</p>
</div>

<button onClick={() => openPublishModal()}  className="bg-green-500 px-6 md:mr-[200px] py-2 rounded-md text-white font-light">Create New Service</button>
</div>


{/* big flex */}
<div className="flex items-start gap-x-12">

<div>
  <div className="flex justify-between gap-x-9 mt-9">
    {
      metrics.map((m) => (

        <MetricCard key={m.id} metric={m} />

      ))
    }
  </div>




  <div className="flex justify-between mt-9">
    <p className="font-medium">All Users</p>

    <div className="flex items-center gap-x-4">
      <IoIosSearch />Search

      <button className="bg-[#04BD4B] rounded-md text-white text-sm px-2 py-1">See All Users</button>
    </div>

  </div>
  <div className="max-h-60 overflow-y-auto border rounded-lg mt-4 bg-[#66ACDC]">
    {/* <button className='border border-[#F08E1F] px-6 py-1 rounded' onClick={descendingEvent}>Latest Booking</button> */}
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-1">
      <thead className="bg-[#66ACDC] text-white">
        <tr >
          {/* <th scope="col" className="px-6 py-3 font-light text-[#F">
        id
      </th> */}
          <th scope="col" className="px-6 py-2 font-light">
            Name
          </th>
          <th scope="col" className="px-6 py-2 font-light ">
            Email Address
          </th>
          <th scope="col" className="px-6 py-2 font-light ">
            Phone Number
          </th>

          <th scope="col" className="px-6 py-2 font-light ">
            Address
          </th>
          <th scope="col" className="px-6 py-2 font-light ">

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

        {data.map((item) => (
          <tr
            className="bg-white hover:bg-gray-200 text-[#6A6B6C]"
            key={item.id} onClick={() => setShowModal(!showModal)} 
          //  onClick={()=>navigate(`/reservedetail/${item._id}`)}
          >
            {/* <td className="px-6 py-2">{item.id}</td> */}

            <td className="px-6 py-3 flex gap-x-2 items-center"><img src={item.url} className='object-cover h-5 w-5 rounded-full ' />{item.firstname}{item.lastname}</td>
            <td className="px-6 py-3">{item.email}</td>
            <td className="px-6 py-3">{item.phone}</td>
            <td className="px-6 py-3">{item.address}</td>
            <div onClick={() => handlePress(item)} className="relative cursor-pointer">
              <IoEllipsisVertical />
              {selectedItem && selectedItem.id === item.id && showModal && (<div className="bg-white absolute z-100 border rounded-lg right-16 top-[-15px]">
                <p onClick={() => { router.push(`/overviewTable/${selectedItem.id}`) }} className="border-b hover:bg-blue-100 hover:text-blue-600 px-6 py-2">View</p>
                <p onClick={() => openDeleteModal()}   className="border-b hover:bg-blue-100 hover:text-blue-600 px-6 py-2">Delete</p>

              </div>)}
            </div>

            {/* <Link to={`/bookingitem/${item.id}`}><td className="px-6 py-2"><HiOutlineArchiveBox className='mt-3'/></td></Link>
          <td className="px-6 py-2" onClick={() => handleDelete(item.id)}><SlTrash className='text-red-800'/></td> */}

          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


<div>
  <div className="max-h-60 overflow-y-auto border rounded-lg mt-9 px-6">
    {/* <button className='border border-[#F08E1F] px-6 py-1 rounded' onClick={descendingEvent}>Latest Booking</button> */}
    <div className="flex justify-between mt-4">
      <p className="font-semibold">Appointments <span className="bg-blue-400 rounded-full px-[5px] py-[2px] h-2 w-4 text-white text-[12px]">3</span></p>
      <p className="flex items-center text-green-600 font-medium text-sm">See all <RiArrowRightSLine /></p>
    </div>

    {
      appointments.map((app) => (
       <div onClick={() => { router.push(`/appointmentpage/${app.id}`) }} >
        <AppointmentTiles key={app.id} app={app} />
        </div>
      ))
    }


    <div className="mb-4"></div>
  </div>

  <div className="max-h-60 overflow-y-auto border rounded-lg mt-4 px-6">
    {/* <button className='border border-[#F08E1F] px-6 py-1 rounded' onClick={descendingEvent}>Latest Booking</button> */}
    <div className="flex justify-between mt-4">
      <p className="font-semibold">Bookings <span className="bg-blue-400 rounded-full px-[5px] py-[2px] h-2 w-4 text-white text-[12px]">3</span></p>
      <p className="flex items-center text-green-600 font-medium text-sm">See all <RiArrowRightSLine /></p>
    </div>

    {
      appointments.map((app) => (
        <BookingTiles key={app.id} app={app} />
      ))
    }


    <div className="mb-4"></div>
  </div>

</div>

</div>
<PublishModal isOpen={isPublishModalOpen} onClose={() => setIsPublishModalOpen(false)} title="Baby" content={""} />
<DeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="Baby" content={""} />

  </main>
}

