import { Badge } from "@/components/ui/badge"
import React from 'react'

function LatestJobsCard({job}) {
  return (
    <div className='p-4 rounded-md shadow-xl bg-white border-gray-100 cursor-pointer '>
       <div>
         <h1 className="font-md text-lg ">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">india</p>
       </div>
       <div>
       <h1 className="font-bold text-lg my-2 "> {job?.title}</h1>
       <p className="text-sm text-gray-600">{job?.description}</p>
       </div>
       <div className="flex items-center gap-2 mt-3">
        
        <Badge className='text-[#f83002] font-bold' variant={"ghost"}>{job?.possition}Possition</Badge>
        <Badge className='text-blue-700 font-bold' variant={"ghost"}>{job?.jobType}</Badge>
        <Badge className='text-[#7209b7] font-bold' variant={"ghost"}>{job?.salary}LPA</Badge>
       </div>
    </div>
  )
}

export default LatestJobsCard