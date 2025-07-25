import React from "react";
import Navbar from "./shared/Navbar.jsx";
import FilterCard from "./FilterCard.jsx";
import Job from "./Job.jsx";
import { useSelector } from "react-redux";
import store from "@/redux/store.js";

const jobsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Jobs() {
  const {allJobs} = useSelector(store=>store.job)
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-5  ">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>
          {allJobs.length <= 0 ? (
            <span>No Jobs Found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5 ]">
              <div className="grid grid-cols-3 gap-4">
                {allJobs.map((job) => (
                  <div key={job?._id}>
                    <Job job={job} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
