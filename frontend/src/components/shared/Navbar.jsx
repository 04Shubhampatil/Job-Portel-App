import { Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User2, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/content";
import { setUser } from "@/redux/authSlice";
function Navbar() {

  const {user} = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const  navigate = useNavigate();
  const logOutHandler = async () => {
   try {
    
      const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true});
      if(res.data.success){
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);

      }
      if(res.data.success){
        toast.success(res.data.message);
      }
   } catch (error) {
    console.log(error);
    
    toast.error(error.response.data.message);
   }
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between  max-w-5xl h-16 mx-auto">
        <div>
          <h1 className="text-2xl font-bold">
            job<span className="text-[#f83002]">hub</span>
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link> </li>
            <li><Link to="/browse">Browse</Link> </li>
          </ul>

          {!user ? ( //chack karna hai ki user true hai ya false hai
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Log In</Button>
              </Link>

              <Link to="/signup">
                <Button className="bg-[#6A38c2] hover:bg-[#6c5397] ">
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="flex gap-4 space-y-2">
                  <Avatar>
                    <AvatarImage src={user?.profile?.profilePhoto} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="div">
                    <h4 className="font-semibold">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground ">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col my-2  text-gray-600">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <User2 />
                    <Button variant="link"><Link to="/profile">Profile</Link></Button>
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <LogOut />
                    <Button onClick={logOutHandler} variant="link">Log out</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
