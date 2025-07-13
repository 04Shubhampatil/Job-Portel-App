import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User2, LogOut } from "lucide-react";
function Navbar() {
  const user = false;
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
            <li>Home</li>
            <li>Jobs </li>
            <li>Browse </li>
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
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="flex gap-4 space-y-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="div">
                    <h4 className="font-semibold">shubham patil</h4>
                    <p className="text-sm text-muted-foreground ">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>
                </div>

                <div className="flex flex-col my-2  text-gray-600">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <User2 />
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <LogOut />
                    <Button variant="link">Log out</Button>
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
