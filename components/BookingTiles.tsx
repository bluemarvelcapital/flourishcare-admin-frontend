import React from 'react'

interface App {
    app: any
}




const BookingTiles : React.FC<App> = ({app}) => {
  return (
    <div className="flex justify-between gap-x-24 mt-4">
         <div>
      <p><span className='text-[12px] font-light'>{app.id}</span> {app.name}</p>
      <p className=" text-[10px] px-2"><span className='bg-[#D3F4FB]'> {app.tag}</span><span>  {app.date}</span> {app.time}</p>
      </div>


    </div>
  )
}

export default BookingTiles