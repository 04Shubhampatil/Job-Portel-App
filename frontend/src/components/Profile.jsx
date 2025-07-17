import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Mail, Pen, Contact } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "@radix-ui/react-label";
import AppliedJobsTable from "./AppliedJobsTable.jsx";
import UpdateProfile from "./UpdateProfile.jsx";

const Skils = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Node",
  "Express",
  "MongoDB",
];

const isResume = true;

function Profile() {
  const[open,setOpen] = useState(false)
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl my-4 p-7">
        <div className="flex  justify-between gap-4 ">
          <div className="flex items-center gap-4">
            <Avatar className="h-22 w-22 rounded-full overflow-hidden">
              <AvatarImage
                src="https://www.pngall.com/wp-content/uploads/2016/06/Microsoft-Windows-PNG-Picture.png"
                alt="profile"
                className="h-22 w-22 object-cover"
              />
            </Avatar>
            <div>
              <h1 className="mt-4 text-xl font-medium">Full Name</h1>
              <p className="text-sm ">
                Lorem consectetur adipisicing elit. Distinctio ut labore
                pariatur. A distinctio in, nisi blanditiis quo vitae, voluptas
                accusantium,
              </p>
            </div>
          </div>
          <Button  onClick={() => setOpen(true)} className="text-right " variant={"outline"}
            
            >
            <Pen />
          </Button>
        </div>
        <div className="my-5 ">
          <div className="flex items-center gap-2 my-2">
            <Mail />
            <span>Shubham@gmqil.com</span>
          </div>
          <div className="flex items-center gap-2 my-2">
            <Contact />
            <span>1234567890</span>
          </div>
        </div>
        <div className="my-5 ">
          <h1>Skils</h1>
          <div className="flex items-center gap-1">
            {Skils.length !== 0 ? (
              Skils.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blanck"
              href="https://www.linkedin.com/in/shubham-patil-9773032b4/"
              className="text-indigo-600 w-full hover:underline cursor-pointer"
            >
              Shubham Resume
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
        <div className="max-w-3xl mx-auto mt-6 p-6 border bg-white rounded-2xl">
          <h1 className="text-xl font-semibold mb-4">Applied Jobs</h1>
          <AppliedJobsTable />
        </div>
        <UpdateProfile open={open} setOpen={setOpen} />
    </div>
  );
}

export default Profile;
