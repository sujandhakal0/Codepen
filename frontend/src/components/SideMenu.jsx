import React, { useContext, useState } from "react";
import { RiMenuUnfold2Line, RiMenuUnfoldLine } from "react-icons/ri";
import { MdMovie } from "react-icons/md";

import codepen from "../assets/codepen.png";
import "./sideMenu.css";
import { Link } from "react-router-dom";
import { Context } from "@/main";

const SideMenu = () => {
  const [isSideMenu, setIsSideMenu] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const { isAuthenticated } = useContext(Context);

  return (
    <div
      className={`hidden left min-h-screen h-full  relative bg-secondary px-3 py-4 lg:flex flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out  ${
        isSideMenu ? "w-[180px]" : "w-4"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* hamburber menu */}
      <div
        onClick={() => {
          setIsSideMenu(!isSideMenu);
        }}
      >
        {isSideMenu ? (
          <div
            className={`w-8 h-8 bg-[#5a5f73] hover:bg-[#717790] rounded-tr-lg rounded-br-lg absolute -right-8 top-8 flex items-center justify-center cursor-pointer ${
              isHovered ? "" : "hidden"
            }`}
          >
            <RiMenuUnfold2Line className={`text-white`} />
          </div>
        ) : (
          <div
            className={`w-8 h-8 bg-[#5a5f73] hover:bg-[#717790] rounded-tr-lg rounded-br-lg absolute -right-8 top-8 flex items-center justify-center cursor-pointer`}
          >
            <RiMenuUnfoldLine className={`text-white`} />
          </div>
        )}
      </div>
      {/* logo */}
      <div className="logo overflow-hidden w-full flex flex-col gap-4 py-1">
        <Link to="/home ">
          <img src={codepen} alt="" />
        </Link>
      </div>
      {/* start coading */}
      <div className="w-full flex-grow">
        {isAuthenticated ? (
          <div className={`${isSideMenu ? "" : "hidden"} flex flex-col gap-2 `}>
            <p className="text-[#aaaebc] text-[11px] font-semibold overflow-hidden">
              CREATE
            </p>
            <div className="card1">
              <div className="card-content bg-[#2c303a] py-2 cursor-pointer ">
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
        ) : (
          <div className={`${isSideMenu ? "" : "hidden"} flex flex-col gap-2`}>
            <p className="text-[#aaaebc] text-[11px] font-semibold overflow-hidden">
              TRY OUR ONLINE EDITOR
            </p>
            <div className="card">
              <div className="card-content bg-black py-3 px-2 cursor-pointer">
                {" "}
                <Link to={"/pen"}>Start Coading</Link>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideMenu;
