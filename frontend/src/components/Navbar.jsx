import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdMovie } from "react-icons/md";
import toast from "react-hot-toast";
import axios from "axios";
import { Context } from "@/main";
import UserProfile from "./UserProfile";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://codepen-backend-t587.onrender.com/v1/user/logout`,
        {
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <nav className="bg-[#000000] w-full flex justify-between items-center p-3 ">
      <div className="flex items-center bg-[#252830]  rounded py-2 px-3 gap-2">
        {isAuthenticated ? (
          <>
            <FaSearch className="text-[#8b8e9a] text-xl" />
            <input
              type="text"
              className="md:text-xl bg-transparent outline-none bg-[#252830] text-white placeholder:text-[#8b8e9a] md:placeholder:text-[18px] w-[130px]  sm:w-[250px]"
              placeholder="Search CodePen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </>
        ) : (
          <div></div>
        )}
      </div>
      <div className="lg:hidden">
        <DropdownMenu className="">
          <DropdownMenuTrigger className="w-8 h-8 bg-[#8b8e9a] rounded flex items-center justify-center">
            <IoIosArrowDropdownCircle className="text-black text-2xl" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="bg-secondary ">
              {isAuthenticated ? (
                <div className="w-[138px]">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#aaaebc]  text-[11px] font-semibold overflow-hidden">
                      CREATE
                    </p>
                    <div className="card1">
                      <div className="card-content bg-[#2c303a] py-2  cursor-pointer ">
                        <Link
                          to={"/pen"}
                          className="text-lg flex items-center gap-1 px-2 pr-8"
                        >
                          <MdMovie className="text-2xl text-[#717790]" />
                          Pen
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#aaaebc]  text-[11px] font-semibold overflow-hidden">
                      TRY OUR ONLINE EDITOR
                    </p>
                    <div className="card">
                      <div className="card-content bg-black py-3 px-2 cursor-pointer">
                        {" "}
                        <Link to={"/pen"}>Start Coading</Link>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {isAuthenticated ? (
        <div>
          <div className="flex gap-2 items-center">
            <div>
              <UserProfile />
            </div>
            <Button className="bg-[#252830] text-white  hover:bg-[#444857] text-[12px] sm:text-[16px]">
              <Link to={"/home/login"} onClick={handleLogout}>
                Logout
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex gap-2">
            <Button className="bg-[#47cf73] text-black hover:text-white hover:bg-[#318b46] text-[12px] sm:text-[16px]">
              <Link to={"/home/signup"}>Sign Up</Link>
            </Button>
            <Button className="bg-[#252830] text-white  hover:bg-[#444857] text-[12px] sm:text-[16px]">
              <Link to={"/home/login"}>Login</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
