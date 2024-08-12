import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import iconFirst from "../assets/iconFirst.svg";
import iconSecond from "../assets/iconSecond.svg";
import iconThird from "../assets/iconThird.svg";

const Section = () => {
  return (
    <div className="flex flex-col items-center justify-center  py-11 w-full rounded gap-11 container xl:flex-row xl:py-24">
      <div className="w-auto h-[290px] bg-[#2c303a] rounded-lg relative p-3  ">
        <img
          className="bg-[#131417]  h-[86px] w-[80px] p-3 rounded-lg absolute -top-10 left-4"
          src={iconFirst}
          alt=""
          a
        />
        <div className="flex flex-col gap-3 mt-11 ">
          <h1 className="text-white font-bold text-[27px]">Build & Test</h1>
          <p className="text-[#c7c9d3] text-[14px]">
            Get work done quicker by building out entire projects or isolating
            code to test features and animations. Want to keep it all under
            wraps? Upgrade to a PRO account to keep your work private.
          </p>
          <Link>
            <Button className="text-[#e1e1e4] bg-[#444857]">
              Try The Editor
            </Button>
          </Link>
        </div>
      </div>

      {/* ... */}
      <div className="container h-[290px] bg-[#2c303a] rounded-lg relative p-3 ">
        <img
          className="bg-[#131417]  h-[80px] w-[80px] p-3 rounded-lg absolute -top-10 left-4"
          src={iconSecond}
          alt=""
          a
        />
        <div className="flex flex-col gap-3 mt-11">
          <h1 className="text-white font-bold text-[27px]">Build & Test</h1>
          <p className="text-[#c7c9d3] text-[14px]">
            Get work done quicker by building out entire projects or isolating
            code to test features and animations. Want to keep it all under
            wraps? Upgrade to a PRO account to keep your work private.
          </p>
          <Link>
            <Button className="text-[#e1e1e4] bg-[#444857]">
              Try The Editor
            </Button>
          </Link>
        </div>
      </div>

      {/* ... */}
      <div className="container h-[290px] bg-[#2c303a] rounded-lg relative p-3 ">
        <img
          className="bg-[#131417] h-[86px] w-[86px] p-3 rounded-lg absolute -top-10 left-4"
          src={iconThird}
          alt=""
          a
        />
        <div className="flex flex-col gap-3 mt-11">
          <h1 className="text-white font-bold text-[27px]">Build & Test</h1>
          <p className="text-[#c7c9d3] text-[14px]">
            Get work done quicker by building out entire projects or isolating
            code to test features and animations. Want to keep it all under
            wraps? Upgrade to a PRO account to keep your work private.
          </p>
          <Link>
            <Button className="text-[#e1e1e4] bg-[#444857]">
              Try The Editor
            </Button>
          </Link>
        </div>
      </div>

      {/* ... */}
    </div>
  );
};

export default Section;
