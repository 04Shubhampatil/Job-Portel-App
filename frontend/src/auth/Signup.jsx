import React from "react";
import Navbar from "../components/shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function Signup() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-6xl mx-auto">
        <form className=" w-1/2 border-1  rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" placeholder="shubham patil.." />
          </div>

          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="shubham@123.com" />
          </div>

          <div className="my-2">
            <Label>phone Nubmer</Label>
            <Input type="email" placeholder="888-777-123-0" />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="test123$$." />
          </div>
          <div className=" flex items-center justify-between ">
            <RadioGroup className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
