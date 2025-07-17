import React, { useState } from "react";
import { Dialog, DialogFooter, DialogHeader } from "./ui/dialog";
import { DialogContent, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/content";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "../redux/authSlice";

function UpdateProfile({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const [input, setinput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile?.resume,
  });

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setinput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

  }
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className={"sm:max-w-[425px]"}
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className={"text-left  "}>
                  Name
                </Label>
                <input
                  id="name"
                  name="fullname"
                  value={input.fullname}
                  onChange={changeHandler}
                  className="col-span-3 px-2 py-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-400 "
                  placeholder="Enter your name"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className={"text-left  "}>
                  Email
                </Label>
                <input
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={changeHandler}
                  className="col-span-3 px-2 py-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-400 "
                  placeholder="Enter your name"
                  type="email"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className={"text-left "}>
                  Number
                </Label>
                <input
                  id="number"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={changeHandler}
                  className="col-span-3 px-2 py-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-400 "
                  placeholder="Enter your name"
                  type="number"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className={"text-left  "}>
                  Bio
                </Label>
                <input
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange={changeHandler}
                  className="col-span-3 px-2 py-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-400 "
                  placeholder="Enter your name"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className={"text-left  "}>
                  Skills
                </Label>
                <input
                  id="skills"
                  name="skills"
                  value={input.skills}
                  onChange={changeHandler}
                  className="col-span-3 px-2 py-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-400 "
                  placeholder="Enter your name"
                  accept="application/pdf"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className={"text-left  "}>
                  Resume
                </Label>
                <input
                  id="file"
                  name="file"
                  type="file"
                  
                  onChange={changeFileHandler}
                  className="col-span-3 px-2 py-1 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-400 "
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full my-2">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin " />
                  Please wait
                </Button>
              ) : (
                <Button className="w-full my-2" type="submit">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateProfile;
