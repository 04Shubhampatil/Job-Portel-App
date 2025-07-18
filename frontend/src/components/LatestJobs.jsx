import React from "react";
import LatestJobsCard from "./LatestJobsCard.jsx";
import { useSelector } from "react-redux";
function LatestJobs() {
  const {allJobs} = useSelector((store) => store.job)
  return (
    <div className="max-w-6xl mx-auto my-20">
      <h1 className="text-3xl font-bold ">
        <span className="text-[#6A38c2]">Latest & Top</span>Job Openings
      </h1>

      <div className="grid grid-cols-3 gap-3 my-4">
        {allJobs.length <=0 ? <span>no jobs avilable</span>:allJobs?.slice(0,6).map((job) => (
          <LatestJobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default LatestJobs;
