import React from 'react'

interface App {
    app: any
}



const AppointmentTiles : React.FC<App> = ({app}) => {
  return (
    <div className="flex justify-between gap-x-24 mt-4 items-center py-1">

      <div className='flex items-center gap-x-2'>
      <span className='text-[12px] text-[#555656] font-medium'>{app.id}</span>
         <div>
      <p className='text-[#555656]'>{app.name}</p>
      <p className="bg-[#daedf4] rounded-md text-[#555656] text-[10px] px-2">{app.tag}</p>
      </div>
      </div>

      <div>
      <p className="text-gray-500 text-sm">{app.date}</p>
      <p className="text-gray-500 text-sm">{app.time}</p>
      </div>
    </div>
  )
}

export default AppointmentTiles

