import { Badge } from "@/components/ui/badge"
import React from 'react'

function LatestJobsCard() {
  return (
    <div className='p-4 rounded-md shadow-xl bg-white border-gray-100 cursor-pointer '>
       <div>
         <h1 className="font-md text-lg ">Company Name</h1>
        <p className="text-sm text-gray-50">India</p>
       </div>
       <div>
       <h1 className="font-bold text-lg my-2 "> Job Title</h1>
       <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem debitis possimus volupt pariatur!</p>
       </div>
       <div className="flex items-center gap-2 mt-3">
        
        <Badge className='text-[#f83002] font-bold' variant={"ghost"}>12 Positions</Badge>
        <Badge className='text-blue-700 font-bold' variant={"ghost"}>Part Time</Badge>
        <Badge className='text-[#7209b7] font-bold' variant={"ghost"}>24 LPA</Badge>
       </div>
    </div>
  )
}

export default LatestJobsCard