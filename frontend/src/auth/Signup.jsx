import React from "react";
import Navbar from "../components/shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

function Signup() {
  const [input, setInput] = React.useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Append text fields
      formData.append("fullname", input.fullname);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phoneNumber);
      formData.append("password", input.password);
      formData.append("role", input.role);

      // Append file (only if selected)
      if (input.file) {
        formData.append("file", input.file);
      }

      const res = await axios.post(
        "http://localhost:5500/api/v1/user/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log(res.data.responce)
      if (res.data.success) {
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message || "Registration failed. Please try again.");
      }
      
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-6xl mx-auto">
        <form
          onSubmit={submitHandler}
          className=" w-1/2 border-1  rounded-md p-4 my-8"
        >
          <h1 className="font-bold text-xl mb-4">Sign Up</h1>
          <div className="my-1">
            <Label>Full Name</Label>
            <Input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              placeholder="shubham patil.."
            />
          </div>

          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="shubham@123.com"
            />
          </div>

          <div className="my-2">
            <Label>phone Nubmer</Label>
            <Input
              type="number"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="888-777-123-0"
            />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="test123$$."
            />
          </div>
          <div className=" flex items-center   justify-between ">
            <RadioGroup className="flex items-center gap-3">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex item-center ">
              <Label htmlFor="option-two">Profile</Label>
              <input
                className="cursor-pointer text-[11px] border-1 py-2 pl-2 ml-1
                file:py-1 file:px-4 file:rounded-sm
             file:bg-[#171616] file:text-white  
                rounded-md "
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
              />
            </div>
          </div>
          <Button className="w-full my-2" type="submit">
            Sign UP
          </Button>
          <span className="text-sm">
            Alredy have an account?
            <Link to="/login" className="text-indigo-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;


