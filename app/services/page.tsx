'use client'

import Image from "next/image"
import { IoEllipsisVertical,IoFilterOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import ServiceMetricCard from "@/components/ServiceMetricCard";
import { RiArrowRightSLine } from "react-icons/ri";
import AppointmentTiles from "@/components/AppointmentTiles";
import BookingTiles from "@/components/BookingTiles";
import { FaSort } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { SetStateAction, useState, useEffect } from "react";
import EditModal from "@/components/EditModal";
import PublishModal from "@/components/PublishModal";
import DeleteModal from "@/components/DeleteModal";
import { Menu } from "@/components/Menu";
import { useAuth } from "@/context/authContext";
import axios from "axios";



const firstimage : string = "https://static.vecteezy.com/system/resources/previews/000/273/744/non_2x/valentine-s-day-background-with-hearts-design-vector.jpg";
// const secondimage : string = "https://img.freepik.com/free-photo/portrait-smiling-happy-young-man-isolated-white_186202-6708.jpg";



interface serviceCategory {
  name: string;
}

interface Items {
  id: number;
  previewImage?: string;
  name: string;
  serviceCategory: serviceCategory[];
  description: string;
  price: number;
  createdAt : string;
  // isActive: boolean;
}

// const items : Items[] = [
//    {
//   id: 1,
//   url: firstimage,
//   title: "Home Care - Domiciliary",
//   category: "Social Care",
//   description: "Our home care service assists with",
//   price : 2000,
//   created: "May 25, 2023 05:43 PM"
// },
// {
//     id: 2,
//     url: firstimage,
//     title: "School Care - Domiciliary",
//     category: "Social Care",
//     description: "Our home care service assists with",
//     price : 2000,
//     created: "May 25, 2023 05:43 PM"
//   },
//   {
//     id: 3,
//     url: firstimage,
//     title: "Church Care - Domiciliary",
//     category: "Social Care",
//     description: "Our home care service assists with",
//     price : 2000,
//     created: "May 25, 2023 05:43 PM"
//   },

// ]


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
  const [data, setData] = useState<Items[]>([]);
  const [selectedItem, setSelectedItem] = useState<Items | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const router = useRouter();

  console.log("this is for service",data)

  const handlePress = (item: Items) => {
    setSelectedItem(item);
    setShowModal(true);
  }

    // Function to handle search input change
    const handleSearchInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setSearchQuery(e.target.value);
    };
  
    // Filtered data based on search query
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // const openModal = (item: Items) => {
  //   setSelectedItem(item);
  //   setIsEditModalOpen(true);
  // }

  const openModal = () => {

    setIsEditModalOpen(true);
  }

  const openPublishModal = () => {

    setIsPublishModalOpen(true);
  }

  const openDeleteModal = () => {

    setIsDeleteModalOpen(true);
  }

  const closeModal = () => {
   
    setShowModal(!showModal)
  }

  interface User {
    name: string;
    [key: string]: any; // Add other user properties as needed
  }
  

  const URL = process.env.NEXT_PUBLIC_API_URL as string;




  //fetching User endpoint
  const fetchData = async (page = 1, limit = 10, status = 'ACTIVE', ) => {
    try {
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        console.error('Access token not found');
        return;
      }

      const res = await axios.get(`${URL}/api/v1/service`, {
        params: { page, limit, status },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setData(res.data.data.services); // Update according to actual API response structure
      console.log("Henry look see services here ->", res.data)
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])



  const { user, logout } = useAuth();


  return <main>

<div className="h-screen fixed top-0 left-0 lg:w-[18%] w-[300px] border-r-[0.5px] border-r-[#D2DBEC] z-[10] bg-[#fafafa] py-[2rem] md:px-[2rem] px-[1rem] lg:block hidden">
{user && <Menu user={user as User} />}
</div>


    <div className="flex justify-between items-center">
        <div>
    <p className="text-2xl font-semibold">Services</p>
    <p className="text-sm mt-1">Welcome to the Service Section.</p>
    </div>

    <button onClick={() => openPublishModal()} className="bg-green-500 px-6 py-2 rounded-md text-white font-light">Create New Service</button>
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
  
<div className="flex items-center gap-x-3 ">
  <IoIosSearch /><input 
  type="text"
  value={searchQuery}
  onChange={handleSearchInputChange}
  className="border px-2 py-1 rounded-lg"
   placeholder="search by title"/>
  <IoFilterOutline />Filter
  <FaSort />Sort
  

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
              Title
            </th>
            <th scope="col" className="px-6 py-2 font-light ">
              Category
            </th>
            <th scope="col" className="px-6 py-2 font-light ">
              Description
            </th>
            <th scope="col" className="px-6 py-2 font-light ">
                Price
            </th>
            <th scope="col" className="px-6 py-2 font-light ">
                Created
            </th>
            <th scope="col" className="px-6 py-2 font-light ">
            </th>
          </tr>
        </thead>
        <tbody>
      
            {/* {items.map((item) => ( */}
            {filteredData.map((item) => (
              <tr
                className="bg-white hover:bg-gray-200 text-[#6A6B6C]"
                key={item.id} onClick={() => setShowModal(!showModal)}
                //  onClick={()=>navigate(`/reservedetail/${item._id}`)}
              >
                 {/* <td className="px-6 py-2">{item.id}</td> */}
     
               <td className="px-6 py-4 flex gap-x-2 items-center"><img src={item.previewImage} className='object-cover h-5 w-9 rounded-md '/>{item.name}</td>
                {/* <td className="px-6 py-2">{item.title}</td> */}
                <td className="px-6 py-2">{item.serviceCategory[0].name}</td>
                <td className="px-6 py-2">{item.description}</td>
                <td className="px-6 py-2">€{item.price}</td>
                <td className="px-6 py-2">{new Date(item.createdAt).toLocaleDateString()}</td>
                <div onClick={() => handlePress(item)} className="relative cursor-pointer">
                <IoEllipsisVertical />
                {selectedItem && selectedItem.id === item.id && showModal && (<div className="bg-white absolute z-100 border rounded-lg right-16 top-[-15px] shadow-lg">
                      <p onClick={() => { router.push(`/overviewTable/${selectedItem.id}`) }} className=" hover:bg-blue-100 hover:text-blue-600 px-9 py-2">View</p>
                      <p onClick={() => openModal()}  className="hover:bg-blue-100 hover:text-blue-600 px-9 py-2">Edit</p>
                     {/* {selectedItem && selectedItem.id === item.id && isEditModalOpen && (<EditModal isOpen={isEditModalOpen} onClose={closeModal} title="Baby" content={""} />)}  */}
                     {/* <EditModal isOpen={isEditModalOpen} onClose={closeModal} title="Baby" content={""} /> */}
                      <p onClick={() => openDeleteModal()}  className=" hover:bg-blue-100 hover:text-blue-600 px-9 py-2">Delete</p>
                      <p onClick={() => openPublishModal()}  className=" hover:bg-blue-100 hover:text-blue-600 px-9 py-2">Publish</p>

                    </div>)}
                  </div>

              </tr>
            ))}
        </tbody>
      </table>
      </div>
  </div>
  <EditModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="Baby" content={""} />
  <PublishModal isOpen={isPublishModalOpen} onClose={() => setIsPublishModalOpen(false)} title="Baby" content={""} />
  <DeleteModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="Baby" content={""} />
  </main>
}
