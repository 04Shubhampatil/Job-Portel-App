import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/content";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

function JobDescription() {
  const dispatch = useDispatch();
  const params = useParams();
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const isInitiallyApplied =
    singleJob?.application?.some(
      (applicatin) => applicatin.applicant === user?._id
    ) || false;
 const [isApplied,setIsApplied] = useState(isInitiallyApplied)
  const jobId = params.id;

  const applyJobHandle = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        {
          withCredentials: true,
        }
      );

      console.log(res.data);

      if (res.data.success) {
        setIsApplied(true) //update a local state
         const updateSingleJob = {...singleJob,applications:[...singleJob.applications,{applicant:user?._id}]} //update a global state single job 
        dispatch(setSingleJob(updateSingleJob))//help us to real time ui update
        toast.success(res.data.message);


      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true, 
        });

        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(res.data.job.applications.some(application=>application.applicant === user?._id)) // Ensure the state is in sync with fetched data
                
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="max-w-6xl mx-auto my-9">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl ">{singleJob?.title}</h1>
          <div className="flex items-center gap-2 mt-3">
            <Badge className="text-[#f83002] font-bold" variant={"ghost"}>
              {singleJob?.position} Positions
            </Badge>
            <Badge className="text-blue-700 font-bold" variant={"ghost"}>
              {singleJob?.jobType}
            </Badge>
            <Badge className="text-[#7209b7] font-bold" variant={"ghost"}>
              {singleJob?.salary}LPA
            </Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : applyJobHandle}
          disabled={isApplied}
          className={`rounded-ld ${
            isApplied ? " bg-gray-600 cursor-not-allowed " : "bg-[#6A38c2]"
          } `}
        >
          {isApplied ? " Alredy Applied" : "Apply Now"}{" "}
          {/*! button enable diable*/}
        </Button>
      </div>
      <h1 className=" border-b-2 border-b-gray-300 font-medium py-4">
        Job Description
      </h1>
      <div className="my-3">
        <h1 className=" font-bold my-1 ">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.title}
          </span>{" "}
        </h1>
        <h1 className=" font-bold my-1 ">
          Location:{}
          <span className="pl-3 font-normal text-gray-800">
            {singleJob?.location}{" "}
          </span>{" "}
        </h1>
        <h1 className=" font-bold my-1 ">
          Description:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.description}
          </span>{" "}
        </h1>
        <h1 className=" font-bold my-1 ">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.experience} years
          </span>{" "}
        </h1>
        <h1 className=" font-bold my-1 ">
          Salary:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.salary} LPA
          </span>{" "}
        </h1>
        <h1 className=" font-bold my-1 ">
          Total Applications:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.applications?.length}
          </span>{" "}
        </h1>
        <h1 className=" font-bold my-1 ">
          Posted Date:{" "}
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.createdAt.split("T")[0]}
          </span>{" "}
        </h1>
      </div>
    </div>
  );
}

export default JobDescription;
