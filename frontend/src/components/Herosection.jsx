import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

function Herosection() {
  return (
    <div className='text-center'>
       <div className="flex flex-col  my-8">
         <span className=' mx-auto px-3 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium'>NO. 1 Job Hub Website</span>
        <h1 className='text-3xl font-bold my-3'>Find Your <span className='text-[#6A38c2]'> Dream Job</span></h1>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quas.</p>
        <div className='flex w-[35%] shadow-lg border-gray-200 rounded-full  pl-2 items-center  gap-3 mx-auto my-2'>
            <input type="text" placeholder='Search for jobs' className='w-full  rounded-full  py-2 px-4 focus:outline-none '/>
            <Button className="rounded-r-full bg-[#6A38c2]"><Search className='h-5 w-5'/></Button>
        </div>
       </div>
        
    </div>
  )
}

export default Herosection