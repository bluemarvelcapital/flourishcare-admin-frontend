import React, { useState, useEffect } from 'react'
import { TiCloudStorageOutline } from "react-icons/ti";
import axios from 'axios'
import { duration } from 'moment';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

interface Category {
  id: string;
  name: string;
}

const PublishModal: React.FC<EditModalProps> = ({ isOpen, onClose, title, content }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');
  const [duration, setDuration] = useState('');
  const [categoryIds, setCategoryIds] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const URL = process.env.NEXT_PUBLIC_API_URL as string;
        const res = await axios.get(`${URL}/api/v1/service/category`);
        setCategories(res.data.data.categories);
      } catch (error) {
        console.error('Error fetching categories', error);
      }
    };

    fetchCategories();
  }, []);


  if (!isOpen)
    return null


  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('status', status);
      formData.append('duration', duration);
      formData.append('categoryIds', categoryIds);
      formData.append('description', description);
      if (file) {
        formData.append('image', file);
      }

      console.log("im just looking", formData)
      const URL = process.env.NEXT_PUBLIC_API_URL as string;
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        console.error('Access token not found');
        return;
      }

      const res = await axios.post(`${URL}/api/v1/service/create`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("Service created:", res.data);
      onClose();
    } catch (error) {
      console.error('Error creating service', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };


  return (

    <div id="popup-modal" tabIndex={-1} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className='relative h-full w-full flex justify-center items-center bg-slate-500/50'>
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg p-6 shadow dark:bg-gray-700">
            <p className='text-[#0B0E0C] text-2xl font-medium'>Create Service</p>
            <p className='text-[#ACACAC] text-sm'>Fill the details below to Create a new service.</p>

            <p className='text-[#2A2B2B] text-lg mt-6'>Title</p>
            <input
              className='border rounded-md text-gray-500 w-[590px] py-2 px-4'
              placeholder='Service title'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <p className='text-[#2A2B2B] text-lg mt-6'>Price</p>
            <input
              className='border rounded-md text-gray-500 w-[590px] py-2 px-4'
              placeholder='Price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <p className='text-[#2A2B2B] text-lg mt-6'>Status</p>
            <input
              className='border rounded-md text-gray-500 w-[590px] py-2 px-4'
              placeholder='status e.g ACTIVE'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />

            <p className='text-[#2A2B2B] text-lg mt-6'>Duration</p>
            <input
              className='border rounded-md text-gray-500 w-[590px] py-2 px-4'
              placeholder='duration in days'
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />

            <p className='text-[#2A2B2B] text-lg mt-6'>Category</p>
            <select
              className="border rounded-md text-gray-500 w-[590px] py-2 px-4"
              value={categoryIds}
              onChange={(e) => setCategoryIds(e.target.value)}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>

            <p className='text-[#2A2B2B] text-lg mt-6'>Description</p>
            <textarea
              className='border rounded-md text-gray-500 w-[590px] h-[160px] py-2 px-4'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <p className='text-[#2A2B2B] text-lg mt-6'>Upload a media</p>

            <div className='border rounded-md text-gray-500 w-[590px] h-[100px] py-2 px-4 flex justify-center items-center'>
              <div className='text-center'>
                <TiCloudStorageOutline color='#04BD4B' size={30} />
                <p className='font-medium'><span className='text-green-500'>Upload a file</span> or drag and drop</p>
                <p className='text-gray-500'>PNG, JPG up to 5MB</p>
                <label className='cursor-pointer'>
                  <input type="file" onChange={handleFileChange} className="hidden" />
                  <span className='text-green-500 underline'>Choose file</span>
                </label>
              </div>
            </div>


            <div className='flex justify-end gap-x-6 mt-6'>
              <button onClick={() => {
                onClose()
              }} className='border border-green-500 text-[#98999A] rounded-md px-[40px] py-2'>Cancel</button>
              <button onClick={handleSubmit} className='bg-green-500 text-white rounded-md px-6 py-2'>Save Changes</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PublishModal