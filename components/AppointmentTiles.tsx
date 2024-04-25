import React from 'react'

interface App {
    app: any
}




const AppointmentTiles : React.FC<App> = ({app}) => {
  return (
    <div className="flex justify-between gap-x-24 mt-4">
         <div>
      <p><span className='text-[12px] font-light'>{app.id}</span>{app.name}</p>
      <p className="bg-[#D3F4FB] text-[10px] px-2">{app.tag}</p>
      </div>

      <div>
      <p className="text-gray-500 text-sm">{app.date}</p>
      <p className="text-gray-500 text-sm">{app.time}</p>
      </div>
    </div>
  )
}

export default AppointmentTiles

