import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";

const randomJobs = [1, 2, 3];

function browse() {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">Search Result({randomJobs.length})</h1>

        <div className=" grid grid-cols-3 gap-3 ">
          {randomJobs.map((item, index) => {
            return <Job />;
          })}
        </div>
      </div>
    </div>
  );
}

export default browse;
