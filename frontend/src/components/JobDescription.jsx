import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

function JobDescription() {
  const isApplied = true;
  return (
    <div className="max-w-6xl mx-auto my-9">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl ">Full Stack Developer</h1>
          <div className="flex items-center gap-2 mt-3">
            <Badge className="text-[#f83002] font-bold" variant={"ghost"}>
              12 Positions
            </Badge>
            <Badge className="text-blue-700 font-bold" variant={"ghost"}>
              Part Time
            </Badge>
            <Badge className="text-[#7209b7] font-bold" variant={"ghost"}>
              24 LPA
            </Badge>
          </div>
        </div>
        <Button disabled={isApplied}
        className={`rounded-ld ${isApplied ?" bg-gray-600 cursor-not-allowed " : "bg-[#6A38c2]"} `}
        >{isApplied ? " Alredy Applied" : "Apply Now"}</Button>
      </div>
      <h1 className=" border-b-2 border-b-gray-300 font-medium py-4">Job Description</h1>
      <div className="my-3">
        <h1 className=" font-bold my-1 ">Role: <span className="pl-4 font-normal text-gray-800">Full Stack Developer</span> </h1>
        <h1 className=" font-bold my-1 ">Location: <span className="pl-3 font-normal text-gray-800">Pune  </span> </h1>
        <h1 className=" font-bold my-1 ">Description: <span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vel!</span> </h1>
        <h1 className=" font-bold my-1 ">Experience: <span className="pl-4 font-normal text-gray-800">2 years</span> </h1>
        <h1 className=" font-bold my-1 ">Salary: <span className="pl-4 font-normal text-gray-800">12 LPA</span> </h1>
        <h1 className=" font-bold my-1 ">Total Applications: <span className="pl-4 font-normal text-gray-800">4</span> </h1>
        <h1 className=" font-bold my-1 ">Posted Date: <span className="pl-4 font-normal text-gray-800">15/07/2025</span> </h1>
      </div>
    </div>
  );
}

export default JobDescription;
