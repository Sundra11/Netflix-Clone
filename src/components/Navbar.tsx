import type { FunctionComponent } from "react";
import { Search, Gift, Bell, } from "lucide-react";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <>
      <div className="flex flex-col bg-black h-20">
        <div className="flex justify-between ml-4 mt-5">
          <div className="flex w-full">
            <span className="">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                alt="logo"
                className="h-10 ml-4 cursor-pointer"
              />
            </span>
            <div className="flex items-center gap-8 text-white ml-4 cursor-pointer">
              <ul>Home</ul>
              <ul>TV shows</ul>
              <ul>Movies</ul>
              <ul>New & Popular</ul>
              <ul>My List</ul>
              <ul>Browser by Language</ul>
            </div>
          </div>
          <div className="flex mr-4">
            <div className="flex items-center gap-4 w-full">
              <span className="flex items-center justify-center">
                <Search className="text-white cursor-pointer" />
              </span>
              <span className="text-white cursor-pointer px-3 text-sm whitespace-nowrap">
                My List
              </span>
              <span>
                <Gift className="text-white cursor-pointer" />
              </span>
              <span>
                <Bell className="text-white cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
