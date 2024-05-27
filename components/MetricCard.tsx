import React from 'react'

interface Metric {
    metric: any
}




const MetricCard : React.FC<Metric> = ({metric}) => {
  return (
    <div className='border p-6 rounded-lg'>
        
        <div className='flex  gap-x-[85px]'>
        <p className='font-semibold text-xl'>{metric.num}</p>
        <button className='bg-[#E7F6EC] text-sm text-green-700 rounded-full px-3'>{metric.stat.toFixed(2)}%</button>
        </div>

        <div className='flex gap-x-6 mt-4'>
        <p className='text-sm font-semibold'>{metric.name}</p>
        <p className='text-sm text-gray-400'>{metric.time}</p>
        </div>
     
        
        </div>
  )
}

export default MetricCard