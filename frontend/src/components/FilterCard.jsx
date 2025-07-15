import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: ["Pune", "Mumbai", "Delhi", "Bangalore", "Hyderabad"],
  },

  {
    filterType: "Industry",
    array: ["Frontend", "Backend", "Fullstack"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42k-1lakh", "1-2lakh"],
  },
];

function FilterCard() {
  return (
    <div className=" w-full bg-white p-3 rounded-md">
      <h1 className="text-lg font-semibold">Filter Jobs</h1>
      <hr className="my-3" />
      {filterData.map((data, i) => (
        <div key={i} className="mb-3">
          <h2 className="font-semibold text-md mb-1">{data.filterType}</h2>
          <RadioGroup>
            {data.array.map((item, index) => {
              return (
                <div className="flex items-center space-x-2  text-sm" key={index}>
                  <RadioGroupItem value={item}  />
                  <Label>{item}</Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
      ))}
    </div>
  );
}

export default FilterCard;
