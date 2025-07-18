import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom";


function Job({job}) {
  const  Jobid="5tede543ete66ete6"
  const navigate = useNavigate();
  return (
    <div className="p-4 rounded-md shadow-xl bg-white border-gray-100 ">
      <div className="flex items-center justify-between">
        <p className="item-sm text-gray-500">2 day ago </p>
      <Button variant={"outline"} className={"rounded-full"} size={"icon"}>
        <Bookmark />
      </Button>
      </div>

       <div className="flex items-center gap-2 my-2">
      <Button variant="outline" className="p-6" size="icon">
        <Avatar>
          <AvatarImage
            src="https:github.com/shadcn.png"
            alt="Company Logo"
          />
        </Avatar>
      </Button>
      <div>
        <h1 className="font-semibold text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
    </div>
    <div>
    <h1 className="font-bold text-lg my-2 "> {job?.title}</h1>
    <p className="text-sm text-gray-600">{job?.description}</p>
    </div>
    <div className="flex items-center gap-2 mt-3">
      <Badge className='text-[#f83002] font-bold' variant={"ghost"}>{job?.possition}Positions</Badge>
      <Badge className='text-blue-700 font-bold' variant={"ghost"}>{job?.jobType}</Badge>
      <Badge className='text-[#7209b7] font-bold' variant={"ghost"}>{job?.salary} LPA</Badge>
    </div>
    <div className="flex items-center gap-2 mt-4">
    <Button onClick={() => navigate(`/description/:${job?._id}`)} variant={"outline"} >Details</Button>
    <Button className="bg-[#6A38c2] hover:bg-[#6c5397]">Save For Later</Button>
    </div>
    </div>
  );
}

export default Job;
