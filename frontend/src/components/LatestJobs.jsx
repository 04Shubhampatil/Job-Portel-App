import React from "react";
import LatestJobsCard from "./LatestJobsCard.jsx";
const randomjobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Latestjobs = () => {};
function LatestJobs() {
  return (
    <div className="max-w-6xl mx-auto my-20">
      <h1 className="text-3xl font-bold ">
        <span className="text-[#6A38c2]">Latest & Top</span>Job Openings
      </h1>

      <div className="grid grid-cols-3 gap-3 my-4">
        {randomjobs.slice(0,6).map((item, index) => (
          <LatestJobsCard />
        ))}
      </div>
    </div>
  );
}

export default LatestJobs;
